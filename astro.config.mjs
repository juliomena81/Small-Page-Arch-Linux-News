import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://juliomena81.github.io/Small-Page-Arch-Linux-News/",

  base: "/Small-Page-Arch-Linux-News",

  vite: {
    plugins: [tailwindcss()],
  },
});
