import './_slug__09810b9c.mjs';
import { c as createAstro, b as createComponent, r as renderTemplate, f as renderComponent } from '../astro_c4921434.mjs';
import 'clsx';
import { changeLanguage, t } from 'i18next';
import { c as $$Layout, e as $$BannerSection, f as $$Form } from './contactUs_815c1681.mjs';
import { f as $$Wholesale$1, e as $$Partners } from './index_604092d6.mjs';
import 'i18next-fs-backend';
import 'module';
import 'path';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import 'html-escaper';
/* empty css                               */import 'locale-emoji';
import 'iso-639-1';
import '../astro-assets-services_87c2797a.mjs';
import 'probe-image-size';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'worker_threads';
/* empty css                                                                *//* empty css                               *//* empty css                               *//* empty css                               *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Wholesale = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Wholesale;
  changeLanguage("ar");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("webName.wholesale") }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$BannerSection, { "title": t("header.wholesale") })}${renderComponent($$result2, "Wholesales", $$Wholesale$1, {})}${renderComponent($$result2, "Form", $$Form, {})}${renderComponent($$result2, "Partners", $$Partners, {})}` })}`;
}, "D:/project/version/1/il-sorbetto/src/pages/ar/wholesale.astro", void 0);

const $$file = "D:/project/version/1/il-sorbetto/src/pages/ar/wholesale.astro";
const $$url = "/ar/wholesale";

export { $$Wholesale as default, $$file as file, $$url as url };
