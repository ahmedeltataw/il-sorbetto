import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fe90d229.mjs';
import './chunks/astro_a9aa4634.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_ca718434.mjs');
const _page1  = () => import('./chunks/index_f4b4674c.mjs');
const _page2  = () => import('./chunks/contactUs_2f258b0e.mjs');
const _page3  = () => import('./chunks/wholesale_144abb18.mjs');
const _page4  = () => import('./chunks/order_16672e0e.mjs');
const _page5  = () => import('./chunks/story_0fb49365.mjs');
const _page6  = () => import('./chunks/_slug__211786d3.mjs');
const _page7  = () => import('./chunks/index_dac30ce5.mjs');
const _page8  = () => import('./chunks/contactUs_d5f238b6.mjs');
const _page9  = () => import('./chunks/wholesale_b0c70829.mjs');
const _page10  = () => import('./chunks/_slug__f86a6375.mjs');
const _page11  = () => import('./chunks/order_a38e46b4.mjs');
const _page12  = () => import('./chunks/story_57a77649.mjs');
const _page13  = () => import('./chunks/_slug__c363cfa4.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contactUs.astro", _page2],["src/pages/wholesale.astro", _page3],["src/pages/order.astro", _page4],["src/pages/story.astro", _page5],["src/pages/menu/[slug].astro", _page6],["src/pages/ar/index.astro", _page7],["src/pages/ar/contactUs.astro", _page8],["src/pages/ar/wholesale.astro", _page9],["src/pages/ar/products/[slug].astro", _page10],["src/pages/ar/order.astro", _page11],["src/pages/ar/story.astro", _page12],["src/pages/ar/menu/[slug].astro", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
