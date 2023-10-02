import i18next, { t, changeLanguage } from 'i18next';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import { P, T } from './_slug__09810b9c.mjs';
import { c as createAstro, b as createComponent, A as AstroError, d as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderComponent, u as unescapeHTML, F as Fragment, g as renderSlot, h as UnknownContentCollectionError, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, l as renderHead } from '../astro_c4921434.mjs';
import 'clsx';
/* empty css                               */import localeEmoji from 'locale-emoji';
import ISO6991 from 'iso-639-1';
import { g as getImage$1, p as prependForwardSlash } from '../astro-assets-services_87c2797a.mjs';
/* empty css                                                                *//* empty css                               *//* empty css                               *//* empty css                               */
const $$Astro$e = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "D:/project/version/1/il-sorbetto/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":["astro.build"],"remotePatterns":[]};
					new URL("file:///D:/project/version/1/il-sorbetto/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$d = createAstro();
const $$LayoutScript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LayoutScript;
  return renderTemplate`<!-- aos -->`;
}, "D:/project/version/1/il-sorbetto/src/layout/LayoutScript.astro", void 0);

const interpolate = (i18nKey, referenceString, namespace = null) => {
  const localizedString = t(i18nKey, { ns: namespace });
  if (localizedString === i18nKey) {
    console.warn(`WARNING(astro-i18next): missing translation key ${i18nKey}.`);
    return referenceString;
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = referenceString.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return localizedString;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let interpolatedString = localizedString;
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    interpolatedString = interpolatedString.replaceAll(
      `<${index}>`,
      `<${referencedTag.name}${referencedTag.attributes}>`
    );
    interpolatedString = interpolatedString.replaceAll(
      `</${index}>`,
      `</${referencedTag.name}>`
    );
  }
  return interpolatedString;
};
const createReferenceStringFromHTML = (html) => {
  const allowedTags = ["strong", "br", "em", "i", "b"];
  let forbiddenStrings = [];
  if (i18next.options) {
    forbiddenStrings = [
      "keySeparator",
      "nsSeparator",
      "pluralSeparator",
      "contextSeparator"
    ].map((key) => {
      return {
        key,
        str: i18next.options[key]
      };
    }).filter(function(val) {
      return typeof val !== "undefined";
    });
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = html.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return html;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let sanitizedString = html.replace(/\s+/g, " ").trim();
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    if (allowedTags.includes(referencedTag.name) && referencedTag.attributes.trim().length === 0) {
      continue;
    }
    sanitizedString = sanitizedString.replaceAll(
      new RegExp(`<${referencedTag.name}[^>]*?\\s*\\/>`, "gi"),
      `<${index}/>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `<${referencedTag.name}${referencedTag.attributes}>`,
      `<${index}>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `</${referencedTag.name}>`,
      `</${index}>`
    );
  }
  for (let index = 0; index < forbiddenStrings.length; index++) {
    const { key, str } = forbiddenStrings[index];
    if (sanitizedString.includes(str)) {
      console.warn(
        `WARNING(astro-i18next): "${str}" was found in a <Trans> translation key, but it is also used as ${key}. Either explicitly set an i18nKey or change the value of ${key}.`
      );
    }
  }
  return sanitizedString;
};

const $$Astro$c = createAstro();
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Trans;
  const { i18nKey, ns } = Astro2.props;
  const referenceString = await Astro2.slots.render("default");
  let key;
  if (typeof i18nKey === "string") {
    key = i18nKey;
  } else {
    key = createReferenceStringFromHTML(referenceString);
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(interpolate(key, referenceString, ns))}` })}`;
}, "D:/project/version/1/il-sorbetto/node_modules/astro-i18next/src/components/Trans.astro", void 0);

const $$Astro$b = createAstro();
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const supportedLanguages = i18next.languages;
  const currentLanguage = i18next.language;
  const { pathname } = Astro2.url;
  const { showFlag = false, languageMapping, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="drop" onchange="location = this.value;"${spreadAttributes(attributes)}><p class="fs-16 pr-12 fw-700 down"><span id="Down"></span><span class="icon-left"></span><span class="icon-right"></span></p><div class="drop-box"><ul class="drop-down">${supportedLanguages.map((supportedLanguage) => {
    let value = P(pathname, supportedLanguage);
    const flag = showFlag ? localeEmoji(supportedLanguage) + " " : "";
    let nativeName = "";
    if (languageMapping && languageMapping.hasOwnProperty(supportedLanguage)) {
      nativeName = languageMapping[supportedLanguage];
    } else {
      nativeName = ISO6991.getNativeName(supportedLanguage);
    }
    const label = flag + nativeName;
    return renderTemplate`<li${addAttribute(supportedLanguage === currentLanguage, "selected")} class="langue "><a${addAttribute(value, "href")}>${label}</a></li>`;
  })}</ul></div></li>`;
}, "D:/project/version/1/il-sorbetto/node_modules/astro-i18next/src/components/LanguageSelector.astro", void 0);

const $$Astro$a = createAstro();
const $$HeadHrefLangs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeadHrefLangs;
  const supportedLanguages = i18next.languages;
  const currentUrl = Astro2.url.href;
  return renderTemplate`${supportedLanguages.map((supportedLanguage) => renderTemplate`<link rel="alternate"${addAttribute(supportedLanguage, "hreflang")}${addAttribute(T(currentUrl, supportedLanguage), "href")}>`)}`;
}, "D:/project/version/1/il-sorbetto/node_modules/astro-i18next/src/components/HeadHrefLangs.astro", void 0);

const userAgents = [
  // this must always be the first element here!
  {
    name: "woff",
    ua: "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko"
  },
  // from: https://github.com/fontsource/google-font-metadata/blob/main/data/user-agents.json
  {
    name: "woff2",
    ua: 'Mozilla/5.0 (Windows NT 6.3; rv:39.0) Gecko/20100101 Firefox/44.0"'
  }
];
function downloadFontCSS(url) {
  const fontDownloads = Promise.all(
    userAgents.map((entry) => {
      return fetch(url, { headers: { "User-Agent": entry.ua } }).then((res) => res.text()).then(
        (t) => t.replace(/  +/g, "").replace(/\t+/g, "").replace(/\n+/g, "")
      );
    })
  );
  return fontDownloads.then((contents) => contents.join(" "));
}

const $$Astro$9 = createAstro();
const $$GoogleFontsOptimizer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GoogleFontsOptimizer;
  const props = Astro2.props;
  const urls = Array.isArray(props.url) ? props.url : [props.url];
  const contents = await Promise.all(urls.map((url) => downloadFontCSS(url)));
  return renderTemplate`${contents.length > 0 && renderTemplate`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">`}${contents.map(
    (styles) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<style type="text/css">${unescapeHTML(styles)}</style>` })}`
  )}`;
}, "D:/project/version/1/il-sorbetto/node_modules/astro-google-fonts-optimizer/GoogleFontsOptimizer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Link;
  const { title, classes, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}>${title}</a>`;
}, "D:/project/version/1/il-sorbetto/src/components/Link.astro", void 0);

const $$Astro$7 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const { title, aria, classes, style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(aria, "aria-label")}${addAttribute(["btn  round-6 ", classes, style], "class:list")} data-astro-cid-2veov33h>${title}${renderSlot($$result, $$slots["default"])}</button>`;
}, "D:/project/version/1/il-sorbetto/src/components/button.astro", void 0);

const img = {"src":"/_assets/logo.10f14268.png","width":241,"height":74,"format":"png"};

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/menu/coffe.mdx": () => import('../coffe_644e9eb7.mjs'),"/src/content/menu/gelatto.mdx": () => import('../gelatto_3826046f.mjs'),"/src/content/menu/icecream.mdx": () => import('../icecream_428b7aa2.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"menu":{"type":"content","entries":{"coffe":"/src/content/menu/coffe.mdx","gelatto":"/src/content/menu/gelatto.mdx","icecream":"/src/content/menu/icecream.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/menu/coffe.mdx": () => import('../coffe_ce9bb376.mjs'),"/src/content/menu/gelatto.mdx": () => import('../gelatto_563bd038.mjs'),"/src/content/menu/icecream.mdx": () => import('../icecream_cf4cd0ec.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const menuPage = await getCollection("menu");
  const NavData = [
    {
      title: t("header.wholesale"),
      href: "/wholesale/"
    },
    {
      title: t("header.order"),
      href: "/order/"
    },
    {
      title: t("header.story"),
      href: "/story/"
    },
    {
      title: t("header.contact"),
      href: "/contactUs/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header><div class="container"><nav class="d-flex align-items-center justify-space-between">${renderComponent($$result, "Button", $$Button, { "aria": "icon-header", "classes": "icon-nav btn", "style": "", "title": "" }, { "default": ($$result2) => renderTemplate`<span></span><span></span><span></span>` })}<a${addAttribute(P("/"), "href")} class="logo lg-max-mx-auto">${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "IL SORBETTO logo", "format": "avif" })}</a><ul class="d-flex align-items-center lg-max-d-none"><li class="nav-link">${renderComponent($$result, "Link", $$Link, { "title": t("header.home"), "href": P("/"), "classes": "fs-16 pl-12 fw-700 " })}</li><!--  --><li class="nav-link dropMenu"><p class="fs-16 pl-12 fw-700 drop-name">${t("header.menu")}<span class="icon-left-2"></span><span class="icon-right-2"></span></p><ul class="drop-box-2">${menuPage.map((li) => renderTemplate`<li class="nav-link">${renderComponent($$result, "Link", $$Link, { "title": t(li.data.title), "href": P(`/menu/${li.slug}/`), "classes": "fs-16 pl-12 fw-700 " })}</li>`)}</ul></li><!--  -->${NavData.map((link) => renderTemplate`<li class="nav-link">${renderComponent($$result, "Link", $$Link, { "title": link.title, "href": P(link.href), "classes": "fs-16 pl-12 fw-700 " })}</li>`)}</ul>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "languageMapping": { en: `English `, ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }, "class": "my-select-class" })}</nav><ul class="responsive-link" style="height:0"><li class="nav-link">${renderComponent($$result, "Link", $$Link, { "title": t("header.home"), "href": P("/"), "classes": "fs-16  fw-700 " })}</li><li class="nav-link dropMenu"><p class="fs-16  fw-700 drop-name">${t("header.menu")}<span class="icon-left-2"></span><span class="icon-right-2"></span></p><ul class="drop-box-2">${menuPage.map((li) => renderTemplate`<li class="nav-link">${renderComponent($$result, "Link", $$Link, { "title": t(li.data.title), "href": P(`/menu/${li.slug}/`), "classes": "fs-16  fw-700 " })}</li>`)}</ul></li><!--  -->${NavData.map((link) => renderTemplate`<li class="nav-link">${renderComponent($$result, "Link", $$Link, { "title": link.title, "href": P(link.href), "classes": "fs-16  fw-700 " })}</li>`)}</ul></div></header><!-- to resposive menu --><!-- to active link --><!-- fixed header --><!-- drop menu -->`;
}, "D:/project/version/1/il-sorbetto/src/components/header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-k2f5zb5c><div class="container" data-astro-cid-k2f5zb5c><div class="f-box" data-astro-cid-k2f5zb5c><div class="img" data-astro-cid-k2f5zb5c>${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "l", "quality": 50, "format": "avif", "data-astro-cid-k2f5zb5c": true })}</div><p data-astro-cid-k2f5zb5c>Indulge in a scoop of happiness!</p><ul data-astro-cid-k2f5zb5c><li data-astro-cid-k2f5zb5c><a href="/" data-astro-cid-k2f5zb5c><i class="fa-light fa-headset" data-astro-cid-k2f5zb5c></i></a></li><li data-astro-cid-k2f5zb5c><a href="/" data-astro-cid-k2f5zb5c><i class="fa-brands fa-facebook-f" data-astro-cid-k2f5zb5c></i></a></li><li data-astro-cid-k2f5zb5c><a href="/" data-astro-cid-k2f5zb5c><i class="fa-brands fa-instagram" data-astro-cid-k2f5zb5c></i></a></li></ul></div><div class="copy-right" data-astro-cid-k2f5zb5c>
All rights reserved 2013 © il Sorbetto
</div></div></footer>`;
}, "D:/project/version/1/il-sorbetto/src/components/footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html${addAttribute(i18next.language, "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/x-icon" href="/image/favicon.webp"><title>${title}</title>${renderComponent($$result, "GoogleFontsOptimizer", $$GoogleFontsOptimizer, { "url": "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" })}${renderComponent($$result, "HeadHrefLangs", $$HeadHrefLangs, {})}${renderHead()}</head><body><main>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</main>${renderComponent($$result, "Script", $$LayoutScript, {})}</body></html>`;
}, "D:/project/version/1/il-sorbetto/src/layout/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Map;
  return renderTemplate`${maybeRenderHead()}<section class="map" data-astro-cid-ozbslz6v><div class="container" data-astro-cid-ozbslz6v><div class="row  " data-astro-cid-ozbslz6v><div class="col-5-md col-12-sm order" data-astro-cid-ozbslz6v><div class="info" data-astro-cid-ozbslz6v><p class="title" data-astro-cid-ozbslz6v>${t("contact.title")}</p><p class="des" data-astro-cid-ozbslz6v>${t("contact.des")}</p><ul class="linksInfo" data-astro-cid-ozbslz6v><li data-astro-cid-ozbslz6v><i class="fa-light fa-headset" data-astro-cid-ozbslz6v></i><a href="/" target="_blank" data-astro-cid-ozbslz6v>+(974) 70707294</a></li><li data-astro-cid-ozbslz6v><i class="fa-regular fa-location-dot" data-astro-cid-ozbslz6v></i><p data-astro-cid-ozbslz6v>${t("contact.location")}</p></li><li data-astro-cid-ozbslz6v><i class="fa-brands fa-facebook-f" data-astro-cid-ozbslz6v></i><a href="https://www.facebook.com/profile.php?id=100093193835771&mibextid=LQQJ4d" target="_blank" data-astro-cid-ozbslz6v>ilsorbetto</a></li><li data-astro-cid-ozbslz6v><i class="fa-brands fa-instagram" data-astro-cid-ozbslz6v></i><a href="https://www.instagram.com/ilsorbetto/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" data-astro-cid-ozbslz6v>ilsorbetto</a></li></ul></div></div><div class="col-7-md col-12-sm" data-astro-cid-ozbslz6v><iframe class="map_iframe" style="width: 100%;height: 100%;" src="https://maps.google.com/maps?&hl=en&q=IL Sorbetto&t=&z=14&ie=UTF8&iwloc=B&output=embed" data-astro-cid-ozbslz6v></iframe></div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/map.astro", void 0);

const $$Astro$2 = createAstro();
const $$BannerSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BannerSection;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="breadcrumb relative pt-0" data-astro-cid-4alqwrok><div class="container" data-astro-cid-4alqwrok><ul class="d-flex justify-center align-items-center absolute top-50 left-50  " data-astro-cid-4alqwrok><li class="fs-r-30" data-astro-cid-4alqwrok><a${addAttribute(P("/"), "href")} data-astro-cid-4alqwrok>${t("header.home")}</a></li><li class="fs-r-30 px-3 " data-astro-cid-4alqwrok>/</li><li class="fs-r-30" data-astro-cid-4alqwrok>${title}</li></ul></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/BannerSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<section class="from" data-astro-cid-4pg6whjl><div class="container" data-astro-cid-4pg6whjl><form action="#" data-astro-cid-4pg6whjl><h6 class="title-from" data-astro-cid-4pg6whjl>${t("wholesale.title")}</h6><div class="row gap-1" data-astro-cid-4pg6whjl><div class="col-12-lg col-12-md col-12-sm" data-astro-cid-4pg6whjl><div class="form-group" data-astro-cid-4pg6whjl><label for="username" data-astro-cid-4pg6whjl>${t("form.la1")}</label><input type="text" id="username" data-astro-cid-4pg6whjl></div></div><!--  --><div class="col-6-lg col-12-md col-12-sm" data-astro-cid-4pg6whjl><div class="form-group" data-astro-cid-4pg6whjl><label for="email" data-astro-cid-4pg6whjl>${t("form.la2")}</label><input type="email" id="email" data-astro-cid-4pg6whjl></div></div><!--  --><div class="col-6-lg col-12-md col-12-sm" data-astro-cid-4pg6whjl><div class="form-group" data-astro-cid-4pg6whjl><label for="number" data-astro-cid-4pg6whjl>${t("form.la3")}</label><input type="number" id="number" data-astro-cid-4pg6whjl></div></div><!--  --><div class="col-12-lg col-12-md col-12-sm" data-astro-cid-4pg6whjl><div class="form-group" data-astro-cid-4pg6whjl><label for="massage" data-astro-cid-4pg6whjl>${t("form.la4")}</label><textarea name="massage" id="massage" data-astro-cid-4pg6whjl></textarea></div></div><div class="col-12-lg col-12-md col-12-sm" data-astro-cid-4pg6whjl><div class="button" data-astro-cid-4pg6whjl><button type="submit" class="btn btn-popup py-7 px-9  round-full" data-astro-cid-4pg6whjl>${t("form.button")}</button></div></div></div></form></div></section><!--  -->`;
}, "D:/project/version/1/il-sorbetto/src/components/form.astro", void 0);

const $$Astro = createAstro();
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUs;
  changeLanguage("ar");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("webName.contact") }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$BannerSection, { "title": t("header.contact") })}${renderComponent($$result2, "Map", $$Map, {})}${renderComponent($$result2, "Form", $$Form, {})}` })}`;
}, "D:/project/version/1/il-sorbetto/src/pages/ar/contactUs.astro", void 0);

const $$file = "D:/project/version/1/il-sorbetto/src/pages/ar/contactUs.astro";
const $$url = "/ar/contactUs";

const contactUs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, $$Button as a, $$Image as b, $$Layout as c, $$Map as d, $$BannerSection as e, $$Form as f, getCollection as g, contactUs as h, imageConfig as i };
