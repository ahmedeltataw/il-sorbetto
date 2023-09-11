import './_slug__ff626e9a.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_b9dae9e0.mjs';
import 'clsx';
import { t, changeLanguage } from 'i18next';
import { d as $$Layout, f as $$BannerSection } from './contactUs_203cef2d.mjs';
import { $ as $$MainHeading, a as $$Specialties, b as $$Flavor } from './index_c18c7fb9.mjs';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Order$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Order$1;
  return renderTemplate`${maybeRenderHead()}<section class="order" data-astro-cid-b7kga3xw><div class="container" data-astro-cid-b7kga3xw>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("header.order"), "data-astro-cid-b7kga3xw": true })}<div class="details" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="100" data-astro-cid-b7kga3xw><h2 class="fs-r-30 mb-10 fw-800 lg-max-mt-10" data-astro-cid-b7kga3xw>${t("order.t1")}</h2><p class="fs-r-18" data-astro-cid-b7kga3xw>${t("order.des")}</p></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/order.astro", void 0);

const $$Astro = createAstro();
const $$Order = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Order;
  changeLanguage("ar");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("webName.order") }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$BannerSection, { "title": t("header.order") })}${renderComponent($$result2, "Orders", $$Order$1, {})}${renderComponent($$result2, "Specialties", $$Specialties, {})}${renderComponent($$result2, "Flavor", $$Flavor, {})}` })}`;
}, "D:/project/version/1/il-sorbetto/src/pages/ar/order.astro", void 0);

const $$file = "D:/project/version/1/il-sorbetto/src/pages/ar/order.astro";
const $$url = "/ar/order";

const order = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Order,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Order$1 as $, order as o };
