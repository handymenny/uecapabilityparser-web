import { type CacheRequestConfig, setupCache } from 'axios-cache-interceptor';
import type { ServerStatus } from '~/@types/uecapabilityparser';
import { Endpoints } from './endpoints';
import Axios from 'axios';

const instance = Axios.create();
const axios = setupCache(instance);

const cacheOptions: CacheRequestConfig<any, any> = {
  cache: {
    ttl: import.meta.env.PUBLIC_STATUS_CACHE_TTL as number,
    interpretHeader: false,
    staleIfError: false,
  },
};

const getStatus = async () => {
  const url = Endpoints.STATUS;
  try {
    const res = await axios.get(url, {
      ...cacheOptions,
      validateStatus: () => true,
    });
    if (res.status == 200) {
      return res.data as ServerStatus;
    }
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const getVersionLegacy = async () => {
  const url = Endpoints.VERSION;
  try {
    const res = await axios.get(url, cacheOptions);
    return res.data.version as string;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const getStoreLegacy = async () => {
  const url = Endpoints.STORE + 'status';
  try {
    const res = await axios.get(url, cacheOptions);
    return res.data.enabled == true;
  } catch (err) {
    console.error(err);
  }
  return false;
};

const getMultiParseLegacy = async () => {
  const url = Endpoints.PARSEMULTI;
  try {
    const response = await axios.get(url, {
      ...cacheOptions,
      validateStatus: () => true,
    });
    return response.status !== 404 && response.status < 500;
  } catch (_) {
    return false;
  }
};

export namespace StatusHelper {
  export const getVersion = async () => {
    const status = await getStatus();
    if (status != null) {
      return status.version;
    } else {
      return await getVersionLegacy();
    }
  };

  export const isStoreSuported = async () => {
    const status = await getStatus();
    if (status != null) {
      return status.endpoints.includes('/store/list');
    } else {
      return await getStoreLegacy();
    }
  };

  export const isMultiSupported = async () => {
    const status = await getStatus();
    if (status != null) {
      return (
        status.endpoints.includes('/parse/multi') ||
        status.endpoints.includes('/parse/multiPart')
      );
    } else {
      return await getMultiParseLegacy();
    }
  };

  export const isMultiPartSupported = async () => {
    const status = await getStatus();
    if (status != null) {
      return status.endpoints.includes('/parse/multiPart');
    } else {
      return false;
    }
  };

  export const getMaxRequestSize = async () => {
    const status = await getStatus();
    if (status != null) {
      return status.maxRequestSize;
    } else {
      return Number.MAX_SAFE_INTEGER;
    }
  };

  export const getSupportedLogs = async () => {
    const status = await getStatus();
    if (status != null) {
      return status.logTypes;
    } else {
      return [];
    }
  };
}
