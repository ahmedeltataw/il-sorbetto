import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from './astro_a9aa4634.mjs';
import { P } from './pages/_slug__bbf9e8fb.mjs';
import { t } from 'i18next';
import { b as $$Image, a as $$Button } from './pages/contactUs_d4afcedb.mjs';
/* empty css                                                                     */
const $$Astro = createAstro();
const $$ProductsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductsCard;
  const { title, img, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-products" data-astro-cid-4hf5qjdx><a class="img-card" href="#" data-astro-cid-4hf5qjdx>${renderComponent($$result, "Image", $$Image, { "src": img, "alt": type, "format": "avif", "quality": 50, "data-astro-cid-4hf5qjdx": true })}</a><div class="details" data-astro-cid-4hf5qjdx><a class="title" href="/" data-astro-cid-4hf5qjdx>${t(title)}</a><a class="type" href="/" data-astro-cid-4hf5qjdx>${t(type)}</a></div><div class="button" data-astro-cid-4hf5qjdx>${renderComponent($$result, "Button", $$Button, { "title": "", "aria": "", "classes": "round-full", "style": "btn-skew", "data-astro-cid-4hf5qjdx": true }, { "default": ($$result2) => renderTemplate`<a${addAttribute(P("/"), "href")} data-astro-cid-4hf5qjdx><i class="fa-regular fa-cart-shopping" data-astro-cid-4hf5qjdx></i></a>` })}${renderComponent($$result, "Button", $$Button, { "title": "", "aria": "", "classes": "", "style": "btn-skew", "data-astro-cid-4hf5qjdx": true }, { "default": ($$result2) => renderTemplate`<a${addAttribute(P("/"), "href")} data-astro-cid-4hf5qjdx>${t("button")}</a>` })}</div></div>`;
}, "D:/project/version/1/il-sorbetto/src/components/productsCard.astro", void 0);

export { $$ProductsCard as $ };
