import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      federation({
        name: "app",
        remotes: {
          remoteApp: process.env.ABOUT_URL,
        },
        shared: ["react", "react-dom", "react-router-dom", "zustand"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  });
};
