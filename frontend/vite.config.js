const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const reactSvgPlugin = require("vite-plugin-react-svg");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactSvgPlugin({
      // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
      defaultExport: "component",
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
});
