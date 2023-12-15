import axios from 'axios';
import type { ServerStatus } from '~/@types/uecapabilityparser';

const getStatus = async () => {
  const url = import.meta.env.PUBLIC_STATUS_ENDPOINT;
  try {
    const res = await axios.get(url);
    return res.data as ServerStatus;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const getVersionLegacy = async () => {
  const url = import.meta.env.PUBLIC_VERSION_ENDPOINT;
  try {
    const res = await axios.get(url);
    return res.data.version as string;
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const getStoreLegacy = async () => {
  const url = import.meta.env.PUBLIC_STORE_ENDPOINT + 'status';
  try {
    const res = await axios.get(url);
    return res.data.enabled == true;
  } catch (err) {
    console.error(err);
  }
  return false;
};

const getMultiParseLegacy = async () => {
  const url = import.meta.env.PUBLIC_PARSEMULTI_ENDPOINT;
  try {
    const response = await axios.get(url, { validateStatus: () => true });
    return response.status !== 404 && response.status < 500;
  } catch (ignored) {
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
      return status.endpoints.includes('/parse/multi');
    } else {
      return await getMultiParseLegacy();
    }
  };
}
