import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";
//import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt(), prefetch({
    intentSelector: ["a[href^='/']", "a[href^='/cv']", "a[href^='/impressum']", "a[href^='/posts']", "a[href^='/posts/Buisness']", "a[href^='/posts/Dotfiles']", "a[href^='/posts/untitled%202']", "a[href^='/posts/untitled']", "a[href^='/wubia-one/images']"]
  }), react()],
  site: 'https://wubia.netlify.app',
  //base: '/wubia-one',
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  },
  output: "server",
  adapter: netlify()
});