import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new'],
    // 👉 Elimina la sección `middleware` con `connect-history-api-fallback`
    // middleware: (app) => {
    //     const history = require('connect-history-api-fallback');
    //     app.use(history({
    //         index: '/index.html'
    //     }));
    // },
    // 👉 Mantén o añade esta línea:
    fs: {
      cachedChecks: false, // Desactiva las comprobaciones de caché si causan problemas
    },
  },
  // 👉 ¡Añade esta línea crucial para SPA!
  appType: 'spa', 
  // 👉 Alias corregidos (sin alias para 'firebase' npm)
  resolve: {
    alias: {
      "components": resolve(__dirname, "src/components"),
      "pages": resolve(__dirname, "src/pages"),
      "auth": resolve(__dirname, "src/auth"),
      "config": resolve(__dirname, "src/config"),
    }
  }
});