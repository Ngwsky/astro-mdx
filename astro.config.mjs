import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: { applyBaseStyles: false },
  })],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  site: 'https://ngwsky.github.io',
  base: '/astro-mdx',
});
