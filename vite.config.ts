import path from "node:path";
import { fileURLToPath } from "node:url";

import basicSsl from "@vitejs/plugin-basic-ssl";
import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      vue(),
      basicSsl({
        name: env.VITE_CERT_NAME,
        domains: ["localhost", "127.0.0.1"],
        certDir: path.resolve("cert"),
      }),
    ],
    envDir: ".",
    resolve: {
      alias: {
        "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
        "@auth": fileURLToPath(new URL("./src/modules/auth", import.meta.url)),
        "@dashboard": fileURLToPath(new URL("./src/modules/dashboard", import.meta.url)),
      },
    },
  };
});
