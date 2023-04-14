import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  return defineConfig({
    plugins: [
      react(),
      federation({
        name: "remote_app",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App",
          "./store": "./src/store",
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
