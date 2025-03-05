import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contactPage: resolve(__dirname, "src/html/contact-page.html"),
        orderPage: resolve(__dirname, "src/html/order-page.html"),
      },
    },
  },
});
