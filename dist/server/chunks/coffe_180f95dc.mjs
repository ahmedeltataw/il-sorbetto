import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, _ as __astro_tag_component__, F as Fragment, O as createVNode } from './astro_b9dae9e0.mjs';
import '@astrojs/internal-helpers/path';
import './pages/contactUs_203cef2d.mjs';
import 'clsx';
import { $ as $$ProductsCard } from './productsCard_be6316c4.mjs';
import 'html-escaper';
import 'i18next';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import './pages/_slug__ff626e9a.mjs';
import 'i18next-fs-backend';
import 'module';
import 'path';
/* empty css                              */import 'locale-emoji';
import 'iso-639-1';
/* empty css                                                               *//* empty css                              *//* empty css                              *//* empty css                              *//* empty css                                                                     */
const img0 = {"src":"/_assets/coffe.21075adc.png","width":600,"height":523,"format":"png"};

const $$Astro = createAstro();
const $$Coffe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Coffe;
  const CoffeData = [
    {
      title: "flavor.type.t11",
      type: "menu.Coffee",
      img: img0
    },
    {
      title: "flavor.type.t11",
      type: "menu.Coffee",
      img: img0
    },
    {
      title: "flavor.type.t11",
      type: "menu.Coffee",
      img: img0
    },
    {
      title: "flavor.type.t11",
      type: "menu.Coffee",
      img: img0
    },
    {
      title: "flavor.type.t11",
      type: "menu.Coffee",
      img: img0
    },
    {
      title: "flavor.type.t11",
      type: "menu.Coffee",
      img: img0
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="products"><div class="row gap-1">${CoffeData.map((card) => renderTemplate`<div class="col-4-lg col-6-md col-12-sm">${renderComponent($$result, "ProductsCard", $$ProductsCard, { "title": card.title, "type": card.type, "img": card.img })}</div>`)}</div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/coffe.astro", void 0);

const frontmatter = {
  "title": "menu.Coffee",
  "webName": "webName.Coffee",
  "description": "ali",
  "category": "tag",
  "tags": ["flavor.type.t6", "flavor.type.t7", "flavor.type.t8"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode($$Coffe, {});
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
const url = "src/content/menu/coffe.mdx";
const file = "D:/project/version/1/il-sorbetto/src/content/menu/coffe.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/project/version/1/il-sorbetto/src/content/menu/coffe.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
