export namespace Endpoints {
  export const CSV = import.meta.env.PUBLIC_CSV_ENDPOINT as string;
  export const PARSE = import.meta.env.PUBLIC_PARSE_ENDPOINT as string;
  export const PARSEMULTI = import.meta.env
    .PUBLIC_PARSEMULTI_ENDPOINT as string;
  export const PARSEMULTIPART = import.meta.env
    .PUBLIC_PARSEMULTIPART_ENDPOINT as string;
  export const STATUS = import.meta.env.PUBLIC_STATUS_ENDPOINT as string;
  export const STORE = import.meta.env.PUBLIC_STORE_ENDPOINT as string;
  export const VERSION = import.meta.env.PUBLIC_VERSION_ENDPOINT as string;
}
