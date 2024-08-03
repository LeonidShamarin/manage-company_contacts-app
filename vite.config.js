import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:
  //         "https://cors-anywhere.herokuapp.com/https://live.devnimble.com",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       headers: {
  //         Authorization: `Bearer E4QWapFdHbe90E0QXsKI8MDGT9PkO9`,
  //       },
  //     },
  //   },
  // },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.nimble.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
        headers: {
          Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn',
        },
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: /.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
