import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tu-usuario.github.io",

  // base: "/Small-Page-Arch-Linux-News",

  vite: {
    plugins: [tailwindcss()],
  },
});
