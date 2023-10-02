import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, _ as __astro_tag_component__, F as Fragment, K as createVNode } from './astro_c4921434.mjs';
import './pages/contactUs_815c1681.mjs';
import 'clsx';
import { $ as $$ProductsCard } from './productsCard_d7c820d1.mjs';
import 'html-escaper';
import 'i18next';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import './pages/_slug__09810b9c.mjs';
import 'i18next-fs-backend';
import 'module';
import 'path';
/* empty css                              */import 'locale-emoji';
import 'iso-639-1';
import './astro-assets-services_87c2797a.mjs';
import 'probe-image-size';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'worker_threads';
/* empty css                                                               *//* empty css                              *//* empty css                              *//* empty css                              *//* empty css                                                                     */
const img0 = {"src":"/_assets/pro2.b7c5a2dc.png","width":584,"height":427,"format":"png"};

const $$Astro = createAstro();
const $$Gelatto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gelatto;
  const CoffeData = [
    {
      title: "flavor.type.t5",
      type: "menu.gelatto",
      img: img0
    },
    {
      title: "flavor.type.t5",
      type: "menu.gelatto",
      img: img0
    },
    {
      title: "flavor.type.t5",
      type: "menu.gelatto",
      img: img0
    },
    {
      title: "flavor.type.t5",
      type: "menu.gelatto",
      img: img0
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="products"><div class="row gap-1">${CoffeData.map((card) => renderTemplate`<div class="col-4-lg col-6-md col-12-sm">${renderComponent($$result, "ProductsCard", $$ProductsCard, { "title": card.title, "type": card.type, "img": card.img })}</div>`)}</div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/gelatto.astro", void 0);

const frontmatter = {
  "title": "menu.gelatto",
  "webName": "webName.gelatto",
  "description": "ali",
  "category": "tag",
  "tags": ["flavor.type.t11"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode($$Gelatto, {});
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/menu/gelatto.mdx";
const file = "D:/project/version/1/il-sorbetto/src/content/menu/gelatto.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/project/version/1/il-sorbetto/src/content/menu/gelatto.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
