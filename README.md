# Arch Linux Feeds (Terminal Edition)

A minimalist reader for keeping up with official Arch Linux news.

Designed with a terminal-inspired interface, it aims to be fast, lightweight, and distraction-free. It's the perfect tool for quickly checking if any system updates require manual intervention.

## Technology Stack

Made with modern tools, but keeping the weight to a minimum:

- **Framework:** Astro 6.
- **Estilos:** Tailwind CSS 4.x.
- **JavaScript en el cliente:** Zero. Everything is static HTML and CSS.
- **Modo Claro:** It doesn't exist. The terminals are dark, and so is this website.

## How to test it on your machine

If for some strange reason you want to run this locally, it's as easy as:

1. Clone the repo:
2. 
   ```bash
   git clone [https://github.com/juliomena81/Small-Page-Arch-Linux-News.git](https://github.com/juliomena81/Small-Page-Arch-Linux-News.git)
   cd arch-feeds
   ```

3. Install the dependencies:
4. 
   ```bash
   npm install
   ```

5. Start the server:
6. 
   ```bash
   npm run dev
   ```

## Philosophy (KISS)

This project follows the principle of keeping things simple. It doesn't use databases, has no complex configurations, and no unnecessary reactive frameworks. The system simply reads the official RSS feed from ```archlinux.org/news/``` at compile time and renders it as cleanly as possible.

## License

Distributed under the MIT license. You are free to use, modify, and distribute this code as you wish.