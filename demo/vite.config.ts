import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 部署在 https://88lin.github.io/react-ai-orb/ 子路径下
export default defineConfig({
  plugins: [react()],
  base: "/react-ai-orb/",
});
