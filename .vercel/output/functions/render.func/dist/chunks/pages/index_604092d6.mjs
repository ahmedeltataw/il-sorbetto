import { P } from './_slug__09810b9c.mjs';
import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from '../astro_c4921434.mjs';
import 'clsx';
import { $ as $$Link, a as $$Button, b as $$Image, c as $$Layout, d as $$Map } from './contactUs_815c1681.mjs';
import { t, changeLanguage } from 'i18next';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */
const img1$5 = {"src":"/_assets/3.6e84af2f.jpg","width":1000,"height":571,"format":"jpg"};

const img2$6 = {"src":"/_assets/2.2f12e45a.jpg","width":1000,"height":560,"format":"jpg"};

const $$Astro$b = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-zi4ldr3x><div class="swiper heroSlider" data-astro-cid-zi4ldr3x><div class="swiper-wrapper" data-astro-cid-zi4ldr3x><div class="swiper-slide" data-astro-cid-zi4ldr3x><div class="container" data-astro-cid-zi4ldr3x><div class="row gap-1" data-astro-cid-zi4ldr3x><div class="col-6-lg col-12-md col-12-sm order" data-astro-cid-zi4ldr3x><div class="details" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-astro-cid-zi4ldr3x><h1 class="title fs-r-60" data-astro-cid-zi4ldr3x>${t("hero.title")}</h1><p class="des fs-r-24" data-astro-cid-zi4ldr3x>${t("hero.des")}</p><div class="button mt-12" data-astro-cid-zi4ldr3x>${renderComponent($$result, "Button", $$Button, { "aria": "a", "classes": "btn-popup", "title": "", "style": "lg-max-mb-12", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": P("/order/"), "classes": "px-8 py-6 fs-20", "title": t("header.order"), "data-astro-cid-zi4ldr3x": true })}` })}</div></div></div><div class="col-6-lg col-12-md col-12-sm" data-astro-cid-zi4ldr3x><div class="hero-img" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" data-astro-cid-zi4ldr3x>${renderComponent($$result, "Image", $$Image, { "src": img1$5, "alt": "slider-img", "format": "avif", "quality": 50, "data-astro-cid-zi4ldr3x": true })}</div></div></div></div></div><div class="swiper-slide" data-astro-cid-zi4ldr3x><div class="container" data-astro-cid-zi4ldr3x><div class="row gap-1" data-astro-cid-zi4ldr3x><div class="col-6-lg col-12-md col-12-sm order" data-astro-cid-zi4ldr3x><div class="details" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-astro-cid-zi4ldr3x><h1 class="title fs-r-60" data-astro-cid-zi4ldr3x>${t("hero.title")}</h1><p class="des fs-r-24" data-astro-cid-zi4ldr3x>${t("hero.des")}</p><div class="button mt-12" data-astro-cid-zi4ldr3x>${renderComponent($$result, "Button", $$Button, { "aria": "a", "classes": "btn-popup", "title": "", "style": "lg-max-mb-12", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": P("/order/"), "classes": "px-8 py-6 fs-20", "title": t("header.order"), "data-astro-cid-zi4ldr3x": true })}` })}</div></div></div><div class="col-6-lg col-12-md col-12-sm" data-astro-cid-zi4ldr3x><div class="hero-img" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" data-astro-cid-zi4ldr3x>${renderComponent($$result, "Image", $$Image, { "src": img2$6, "alt": "slider-img", "format": "avif", "quality": 50, "data-astro-cid-zi4ldr3x": true })}</div></div></div></div></div></div><div class="swiper-button-next" data-astro-cid-zi4ldr3x></div><div class="swiper-button-prev" data-astro-cid-zi4ldr3x></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/hero.astro", void 0);

const $$Astro$a = createAstro();
const $$MainHeading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MainHeading;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="main-heading" data-astro-cid-lmimhsxk><h3 class="fs-r-36 " data-astro-cid-lmimhsxk>${title}</h3></div>`;
}, "D:/project/version/1/il-sorbetto/src/components/mainHeading.astro", void 0);

const img2$5 = {"src":"/_assets/tradition2.bf1856e6.jpg","width":330,"height":426,"format":"jpg"};

const img2$4 = {"src":"/_assets/tradition3.d3b1f32d.jpg","width":330,"height":426,"format":"jpg"};

const img4$3 = {"src":"/_assets/tradition4.db1686fc.jpg","width":330,"height":426,"format":"jpg"};

const $$Astro$9 = createAstro();
const $$Tradition = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tradition;
  return renderTemplate`${maybeRenderHead()}<section class="tradition" data-astro-cid-6jczlj6r><div class="container" data-astro-cid-6jczlj6r>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.tradition"), "data-astro-cid-6jczlj6r": true })}<div class="row gap-1" data-astro-cid-6jczlj6r><!-- details --><div class="col-7-lg col-12-md order" data-astro-cid-6jczlj6r><div class="details" data-astro-cid-6jczlj6r><p class="fs-r-18" data-astro-cid-6jczlj6r>${t("tradition.des")}</p>${renderComponent($$result, "Button", $$Button, { "title": "", "aria": "button", "classes": "btn-popup", "style": "mt-10", "data-astro-cid-6jczlj6r": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "title": t("tradition.button"), "href": P("/"), "classes": "px-8 py-6 ", "data-astro-cid-6jczlj6r": true })}` })}</div></div><!-- img --><div class="col-5-lg col-12-md" data-astro-cid-6jczlj6r><div class="d-flex align-items-center img-box " data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-astro-cid-6jczlj6r><div class="img" data-astro-cid-6jczlj6r>${renderComponent($$result, "Image", $$Image, { "src": img4$3, "alt": "img", "quality": 50, "format": "avif", "data-astro-cid-6jczlj6r": true })}</div><div class="two-img" data-astro-cid-6jczlj6r><div class="img-1 img" data-astro-cid-6jczlj6r>${renderComponent($$result, "Image", $$Image, { "src": img2$4, "alt": "img", "quality": 50, "format": "avif", "data-astro-cid-6jczlj6r": true })}</div><div class="img-2 img" data-astro-cid-6jczlj6r>${renderComponent($$result, "Image", $$Image, { "src": img2$5, "alt": "img", "quality": 50, "format": "avif", "data-astro-cid-6jczlj6r": true })}</div></div></div></div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/tradition.astro", void 0);

const $$Astro$8 = createAstro();
const $$CardSpecialties = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardSpecialties;
  const { img, title, des } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-f4t56xfu><a class="card-img"${addAttribute(P("/"), "href")} data-astro-cid-f4t56xfu>${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "", "format": "avif", "quality": 50, "data-astro-cid-f4t56xfu": true })}</a><div class="card-details" data-astro-cid-f4t56xfu><h4 class="fs-r-30" data-astro-cid-f4t56xfu>${title}</h4><p class="fs-r-16" data-astro-cid-f4t56xfu>${des}</p>${renderComponent($$result, "Button", $$Button, { "title": "", "aria": "type-specialties", "classes": "mb-9", "style": "btn-popup", "data-astro-cid-f4t56xfu": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": P("/"), "title": t("header.order"), "classes": "px-8 py-6", "data-astro-cid-f4t56xfu": true })}` })}</div></div>`;
}, "D:/project/version/1/il-sorbetto/src/components/cardSpecialties.astro", void 0);

const img1$4 = {"src":"/_assets/pro1.eaab5656.png","width":604,"height":413,"format":"png"};

const img2$3 = {"src":"/_assets/pro2.9bd526b6.png","width":612,"height":408,"format":"png"};

const img3$3 = {"src":"/_assets/pro3.76655774.webp","width":1070,"height":700,"format":"webp"};

const $$Astro$7 = createAstro();
const $$Specialties = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Specialties;
  const cardData = [
    {
      image: img1$4,
      title: t("specialties.card.tittle1"),
      des: t("specialties.card.des1"),
      delay: "200"
    },
    {
      image: img2$3,
      title: t("specialties.card.tittle2"),
      des: t("specialties.card.des2"),
      delay: "400"
    },
    {
      image: img3$3,
      title: t("specialties.card.tittle3"),
      des: t("specialties.card.des3"),
      delay: "600"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="specialties" data-astro-cid-mrorrrcq><div class="container" data-astro-cid-mrorrrcq>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.specialties"), "data-astro-cid-mrorrrcq": true })}<div class="row gap-1" data-astro-cid-mrorrrcq>${cardData.map((items) => renderTemplate`<div class="col-4-lg col-6-md col-12-sm" data-aos="fade-up" data-aos-duration="1000"${addAttribute(items.delay, "data-aos-delay")} data-aos-offset="250" data-astro-cid-mrorrrcq>${renderComponent($$result, "Card", $$CardSpecialties, { "img": items.image, "title": items.title, "des": items.des, "data-astro-cid-mrorrrcq": true })}</div>`)}<div class=" mx-auto" data-astro-cid-mrorrrcq>${renderComponent($$result, "Button", $$Button, { "title": "", "classes": "my-12", "style": "btn-popup", "aria": "menu", "data-astro-cid-mrorrrcq": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": P("/"), "title": t("specialties.button"), "classes": "py-6 px-10", "data-astro-cid-mrorrrcq": true })}` })}</div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/specialties.astro", void 0);

const $$Astro$6 = createAstro();
const $$CompanyDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CompanyDetails;
  const companyData = [
    {
      tittle: t("company.t1"),
      des: t("company.des1"),
      href: "/",
      btn: t("company.btn1")
    },
    {
      tittle: t("company.t2"),
      des: t("company.des2"),
      href: "/",
      btn: t("company.btn2")
    },
    {
      tittle: t("company.t3"),
      des: t("company.des3"),
      href: "/",
      btn: t("company.btn3")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="detailsCompany" data-astro-cid-orxjuwz2><div data-astro-cid-orxjuwz2><div class="container" data-astro-cid-orxjuwz2><div class="row gap-1" data-astro-cid-orxjuwz2>${companyData.map((card) => renderTemplate`<div class=" col-4-lg col-6-md col-12-sm" data-astro-cid-orxjuwz2><div class="companyCard" data-astro-cid-orxjuwz2><h5 class="fs-r-30 fw-800 " data-astro-cid-orxjuwz2>${card.tittle}</h5><p class="fs-r-18" data-astro-cid-orxjuwz2>${card.des}</p><div class="button" data-astro-cid-orxjuwz2>${renderComponent($$result, "Button", $$Button, { "aria": card.btn, "title": "", "classes": "lg-max-mb-10", "style": "btn-skew", "data-astro-cid-orxjuwz2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": P(card.href), "classes": "px-8 py-6", "title": card.btn, "data-astro-cid-orxjuwz2": true })}` })}</div></div></div>`)}</div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/companyDetails.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="brief" data-astro-cid-4khl2bf4><div class="container" data-astro-cid-4khl2bf4>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.about"), "data-astro-cid-4khl2bf4": true })}<div class="row gap-1" data-astro-cid-4khl2bf4><!-- details --><div class="col-5-lg col-12-md col-12-sm order" data-astro-cid-4khl2bf4><div class="details" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="100" data-astro-cid-4khl2bf4><h2 class="fs-r-36 mb-10 fw-800 lg-max-mt-10" data-astro-cid-4khl2bf4>${t("About.tittle.t1")}<br data-astro-cid-4khl2bf4><span data-astro-cid-4khl2bf4>10 </span>${t("About.tittle.t2")}</h2><p class="fs-r-18" data-astro-cid-4khl2bf4>${t("About.des")}</p>${renderComponent($$result, "Button", $$Button, { "title": "", "classes": "mt-12 lg-max-mb-10", "aria": t("About.button"), "style": "btn-popup", "data-astro-cid-4khl2bf4": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "title": t("About.button"), "href": P("/"), "classes": "px-10 py-8", "data-astro-cid-4khl2bf4": true })}` })}</div></div><!-- img --><div class="col-7-lg col-12-md col-12-sm" data-astro-cid-4khl2bf4><div class="box-img relative " data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="150" data-astro-cid-4khl2bf4>${renderComponent($$result, "Image", $$Image, { "src": img1$5, "alt": "img", "quality": 50, "format": "avif", "data-astro-cid-4khl2bf4": true })}<div class="img-1  absolute " data-astro-cid-4khl2bf4>${renderComponent($$result, "Image", $$Image, { "src": img2$4, "alt": "img", "quality": 50, "format": "avif", "data-astro-cid-4khl2bf4": true })}</div></div></div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/about.astro", void 0);

const img1$3 = {"src":"/_assets/1.ff096e6f.webp","width":1800,"height":1200,"format":"webp"};

const img2$2 = {"src":"/_assets/2.fbaf90f7.webp","width":1800,"height":1200,"format":"webp"};

const img3$2 = {"src":"/_assets/3.37b9af48.webp","width":229,"height":238,"format":"webp"};

const img4$2 = {"src":"/_assets/4.125175a2.webp","width":1800,"height":1200,"format":"webp"};

const img5$1 = {"src":"/_assets/5.c4eade6d.webp","width":232,"height":238,"format":"webp"};

const img6$1 = {"src":"/_assets/6.3064944f.webp","width":287,"height":238,"format":"webp"};

const img7$1 = {"src":"/_assets/7.ccf223b7.webp","width":300,"height":300,"format":"webp"};

const img8$1 = {"src":"/_assets/8.eb8b7171.webp","width":952,"height":767,"format":"webp"};

const img9 = {"src":"/_assets/9.c8c9404c.webp","width":278,"height":181,"format":"webp"};

const img10 = {"src":"/_assets/10.533b2f64.webp","width":1800,"height":1200,"format":"webp"};

const $$Astro$4 = createAstro();
const $$Flavor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Flavor;
  const FlavorData = [
    {
      tittle: t("flavor.type.t1"),
      href: "/",
      img: img4$2
    },
    {
      tittle: t("flavor.type.t2"),
      href: "/",
      img: img2$2
    },
    {
      tittle: t("flavor.type.t3"),
      href: "/",
      img: img9
    },
    {
      tittle: t("flavor.type.t4"),
      href: "/",
      img: img6$1
    },
    {
      tittle: t("flavor.type.t5"),
      href: "/",
      img: img8$1
    },
    {
      tittle: t("flavor.type.t6"),
      href: "/",
      img: img5$1
    },
    {
      tittle: t("flavor.type.t7"),
      href: "/",
      img: img1$3
    },
    {
      tittle: t("flavor.type.t8"),
      href: "/",
      img: img10
    },
    {
      tittle: t("flavor.type.t9"),
      href: "/",
      img: img3$2
    },
    {
      tittle: t("flavor.type.t10"),
      href: "/",
      img: img7$1
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flavor" data-astro-cid-j5ad22cf><div class="container" data-astro-cid-j5ad22cf>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.flavor"), "data-astro-cid-j5ad22cf": true })}<div class="details mb-12" data-astro-cid-j5ad22cf><p data-astro-cid-j5ad22cf>${t("flavor.des")}</p></div><!--  --><div class="swiper flavorsSlider" data-astro-cid-j5ad22cf><div class="swiper-wrapper" data-astro-cid-j5ad22cf>${FlavorData.map((items) => renderTemplate`<div class="swiper-slide" data-astro-cid-j5ad22cf><a${addAttribute(P(items.href), "href")} class="type-flavor" data-astro-cid-j5ad22cf>${renderComponent($$result, "Image", $$Image, { "src": items.img, "alt": items.tittle, "format": "avif", "quality": 60, "data-astro-cid-j5ad22cf": true })}<span class="type" data-astro-cid-j5ad22cf>${items.tittle}</span></a></div>`)}</div><div class="swiper-pagination" data-astro-cid-j5ad22cf></div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/flavor.astro", void 0);

const img1$2 = {"src":"/_assets/1.34af1fee.webp","width":1414,"height":2000,"format":"webp"};

const img2$1 = {"src":"/_assets/2.911c9d9a.webp","width":1414,"height":2000,"format":"webp"};

const img3$1 = {"src":"/_assets/3.980e60b6.webp","width":1414,"height":2000,"format":"webp"};

const img4$1 = {"src":"/_assets/4.3169ff1a.webp","width":1414,"height":2000,"format":"webp"};

const img5 = {"src":"/_assets/5.b958f59a.webp","width":1414,"height":2000,"format":"webp"};

const img6 = {"src":"/_assets/6.3fb67fa5.webp","width":1414,"height":2000,"format":"webp"};

const img7 = {"src":"/_assets/7.56ba7f56.webp","width":1414,"height":2000,"format":"webp"};

const img8 = {"src":"/_assets/8.aa7c02e7.webp","width":1414,"height":2000,"format":"webp"};

const $$Astro$3 = createAstro();
const $$Wholesale = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Wholesale;
  return renderTemplate`${maybeRenderHead()}<section class="wholesale" data-astro-cid-52hnq2su><div class="container" data-astro-cid-52hnq2su>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.wholesale"), "data-astro-cid-52hnq2su": true })}<div class="row gap-1" data-astro-cid-52hnq2su><!-- details --><div class="col-7-lg col-12-md col-12-sm order" data-astro-cid-52hnq2su><div class="details" data-astro-cid-52hnq2su><p class="fs-r-18" data-astro-cid-52hnq2su>${t("wholesale.des")}</p></div></div><!-- img --><div class="col-5-lg col-12-md col-12-sm" data-astro-cid-52hnq2su><div class="swiper wholesaleSlider swiper-cards swiper-3d" data-astro-cid-52hnq2su><div class="swiper-wrapper" data-astro-cid-52hnq2su><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img1$2, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img2$1, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img3$1, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img4$1, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img5, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img6, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img7, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div><div class="swiper-slide" data-astro-cid-52hnq2su>${renderComponent($$result, "Image", $$Image, { "src": img8, "alt": "", "quality": 50, "format": "avif", "data-astro-cid-52hnq2su": true })}</div></div></div></div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/wholesale.astro", void 0);

const img1$1 = {"src":"/_assets/1.07eca3b6.png","width":534,"height":368,"format":"png"};

const $$Astro$2 = createAstro();
const $$Partners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Partners;
  return renderTemplate`${maybeRenderHead()}<section class="partners" data-astro-cid-s63cuhea><div class="container" data-astro-cid-s63cuhea>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.Partners"), "data-astro-cid-s63cuhea": true })}<div class="row gap-1" data-astro-cid-s63cuhea><div class="col-3-lg col-6-md col-12-sm md-max-mb-12" data-astro-cid-s63cuhea>${renderComponent($$result, "Image", $$Image, { "src": img1$1, "alt": "img", "format": "avif", "data-astro-cid-s63cuhea": true })}</div><div class="col-3-lg col-6-md col-12-sm md-max-mb-12" data-astro-cid-s63cuhea>${renderComponent($$result, "Image", $$Image, { "src": img1$1, "alt": "img", "format": "avif", "data-astro-cid-s63cuhea": true })}</div><div class="col-3-lg col-6-md col-12-sm md-max-mb-12" data-astro-cid-s63cuhea>${renderComponent($$result, "Image", $$Image, { "src": img1$1, "alt": "img", "format": "avif", "data-astro-cid-s63cuhea": true })}</div><div class="col-3-lg col-6-md col-12-sm md-max-mb-12" data-astro-cid-s63cuhea>${renderComponent($$result, "Image", $$Image, { "src": img1$1, "alt": "img", "format": "avif", "data-astro-cid-s63cuhea": true })}</div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/Partners.astro", void 0);

const img1 = {"src":"/_assets/1.abcf9569.jpg","width":650,"height":650,"format":"jpg"};

const img2 = {"src":"/_assets/2.49bab633.jpg","width":696,"height":696,"format":"jpg"};

const img3 = {"src":"/_assets/3.5a7abcd9.jpg","width":696,"height":696,"format":"jpg"};

const img4 = {"src":"/_assets/user.c5f9bafc.jpg","width":512,"height":512,"format":"png"};

const $$Astro$1 = createAstro();
const $$Review = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Review;
  const reviewCard = [
    {
      name: t("review.n1"),
      commit: t("review.c1"),
      img: img1
    },
    {
      name: t("review.n2"),
      commit: t("review.c2"),
      img: img2
    },
    {
      name: t("review.n3"),
      commit: t("review.c3"),
      img: img3
    },
    {
      name: t("review.n4"),
      commit: t("review.c4"),
      img: img4
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="review" data-astro-cid-kcahbcdb><div class="container" data-astro-cid-kcahbcdb>${renderComponent($$result, "MainHeading", $$MainHeading, { "title": t("mainHeading.review"), "data-astro-cid-kcahbcdb": true })}<div class="swiper reviewSlider" data-astro-cid-kcahbcdb><div class="swiper-wrapper" data-astro-cid-kcahbcdb>${reviewCard.map((e) => renderTemplate`<div class="swiper-slide" data-astro-cid-kcahbcdb><div class="review-box" data-astro-cid-kcahbcdb><div class="top-box d-flex align-items-center justify-space-between" data-astro-cid-kcahbcdb><div class="rate d-flex align-items-center" data-astro-cid-kcahbcdb><i class="fa-solid fa-star" data-astro-cid-kcahbcdb></i><i class="fa-solid fa-star" data-astro-cid-kcahbcdb></i><i class="fa-solid fa-star" data-astro-cid-kcahbcdb></i><i class="fa-solid fa-star" data-astro-cid-kcahbcdb></i><i class="fa-solid fa-star" data-astro-cid-kcahbcdb></i></div><p class="name" data-astro-cid-kcahbcdb>${e.name}</p></div><p class="commit" data-astro-cid-kcahbcdb>${e.commit}</p></div></div>`)}</div></div></div></section>`;
}, "D:/project/version/1/il-sorbetto/src/components/review.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  changeLanguage("ar");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("webName.home") }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "About", $$About, {})}${renderComponent($$result2, "Specialties", $$Specialties, {})}${renderComponent($$result2, "Tradition", $$Tradition, {})}${renderComponent($$result2, "CompanyDetails", $$CompanyDetails, {})}${renderComponent($$result2, "Flavor", $$Flavor, {})}${renderComponent($$result2, "Wholesale", $$Wholesale, {})}${renderComponent($$result2, "Review", $$Review, {})}${renderComponent($$result2, "Partners", $$Partners, {})}${renderComponent($$result2, "Map", $$Map, {})}` })}`;
}, "D:/project/version/1/il-sorbetto/src/pages/ar/index.astro", void 0);

const $$file = "D:/project/version/1/il-sorbetto/src/pages/ar/index.astro";
const $$url = "/ar";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainHeading as $, $$Specialties as a, $$Flavor as b, $$About as c, $$Tradition as d, $$Partners as e, $$Wholesale as f, $$Hero as g, $$CompanyDetails as h, $$Review as i, index as j };
