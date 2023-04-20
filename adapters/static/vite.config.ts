import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';
import {loadEnv} from "vite";

export default extendConfig(baseConfig, ({mode}) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    plugins: [
      staticAdapter({
        origin: env.PUBLIC_ORIGIN_URL,
      }),
    ],
  };
});
