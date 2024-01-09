import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import cloudflare from '@astrojs/cloudflare';
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  // ...
  integrations: [tailwind()],
});