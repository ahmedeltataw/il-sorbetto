import compressor from "astro-compressor";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import { defineConfig, squooshImageService } from "astro/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: '_assets'
  },
  experimental: {
    optimizeHoistedScript: true
  },
  image: {
    service: squooshImageService(),
    domains: ["astro.build"]
  },
  compressHTML: true,
  integrations: [compressor({
    gzip: true,
    brotli: false
  }), astroI18next(), mdx()],
  output: 'server',
  adapter: netlify({
    functionPerRoute: true,
  }),
});