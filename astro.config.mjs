import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";

import prefetch from "@astrojs/prefetch";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt(),prefetch({
    intentSelector: ["a[href^='/wubia-one']",
                     "a[href^='/wubia-one/cv']",
                     "a[href^='/wubia-one/posts']",
                     "a[href^='/wubia-one/posts/Buisness']",
                     "a[href^='/wubia-one/posts/Dotfiles']",
                     "a[href^='/wubia-one/posts/untitled%202']",
                     "a[href^='/wubia-one/posts/untitled']",
                     "a[href^='/wubia-one/images']"
  ],
  })],
  site: 'https://wubia-one.github.io',
  base: '/wubia-one',
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  }
});