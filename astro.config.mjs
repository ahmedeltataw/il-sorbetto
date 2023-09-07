import { defineConfig, sharpImageService } from 'astro/config';
import purgecss from "astro-purgecss";

import compressor from "astro-compressor";
import astroI18next from "astro-i18next";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    build: {
        assets: '_assets'
    },
    experimental: {
        optimizeHoistedScript: true
    },
    image: {
        service: sharpImageService(),
        domains: ["astro.build"]
    },
    compressHTML: true,
    integrations: [compressor({
        gzip: true,
        brotli: false
    }), astroI18next(), mdx(), purgecss()]})
