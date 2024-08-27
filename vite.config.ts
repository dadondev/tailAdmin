
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from "path"


export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

