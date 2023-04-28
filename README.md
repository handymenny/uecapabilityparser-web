# UE Capability Parser Web (DEMO)

This is an example of Web App that can interact with [UE Capability Parser](https://github.com/HandyMenny/uecapabilityparser) server mode.

It's using [Qwik](https://qwik.builder.io) framework with [QwikCity](https://qwik.builder.io/qwikcity/overview/)


## Build and Run
> **Note**<br>
You may want to tweak `.env` and `.env.ssr` before running or building this Web App

### Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start
```

### Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview
```

### Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build 
```

