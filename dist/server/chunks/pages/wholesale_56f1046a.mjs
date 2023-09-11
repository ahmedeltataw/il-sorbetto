import './_slug__ff626e9a.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro_b9dae9e0.mjs';
import 'clsx';
import { changeLanguage, t } from 'i18next';
import { d as $$Layout, f as $$BannerSection, h as $$Form } from './contactUs_203cef2d.mjs';
import { f as $$Wholesale$1, e as $$Partners } from './index_c18c7fb9.mjs';
import 'i18next-fs-backend';
import 'module';
import 'path';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                               */import 'locale-emoji';
import 'iso-639-1';
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
