import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_a9aa4634.mjs';
import './pages/contactUs_d4afcedb.mjs';
import 'clsx';
import { $ as $$ProductsCard } from './productsCard_432f456f.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import 'i18next';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import './pages/_slug__bbf9e8fb.mjs';
import 'i18next-fs-backend';
import 'module';
import 'path';
/* empty css                              */import 'locale-emoji';
import 'iso-639-1';
import './astro-assets-services_b3b7bd31.mjs';
import 'probe-image-size';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'worker_threads';
/* empty css                                                               *//* empty css                              *//* empty css                              *//* empty css                              *//* empty css                                                                     */
const img0 = {"src":"/_assets/pro1.f8b17a04.png","width":604,"height":413,"format":"png"};

const $$Astro = createAstro();
const $$IceCream = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IceCream;
  const CoffeData = [
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    },
    {
      title: "flavor.type.t6",
      type: "menu.iceCream",
      img: img0
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="products"><div class="row gap-1">${CoffeData.map((card) => renderTemplate`<div class="col-4-lg col-6-md col-12-sm">${renderComponent($$result, "ProductsCard", $$ProductsCard, { "title": card.title, "type": card.type, "img": card.img })}</div>`)}</div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/iceCream.astro", void 0);

const frontmatter = {
  "title": "menu.iceCream",
  "webName": "webName.iceCream",
  "description": "ali",
  "category": "tag",
  "tags": ["flavor.type.t1", "flavor.type.t2", "flavor.type.t3", "flavor.type.t4", "flavor.type.t5"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode($$IceCream, {});
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
const url = "src/content/menu/icecream.mdx";
const file = "D:/project/version/1/il-sorbetto/src/content/menu/icecream.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/project/version/1/il-sorbetto/src/content/menu/icecream.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
