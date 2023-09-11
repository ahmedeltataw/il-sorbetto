import { serialize, parse } from 'cookie';
import { bold } from 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import { A as AstroError, D as ResponseSentError, Q as MiddlewareNoDataOrNextCalled, T as MiddlewareNotAResponse, V as ASTRO_VERSION, B as ClientAddressNotAvailable, S as StaticClientAddressNotAvailable, W as renderEndpoint, w as LocalsNotAnObject } from './chunks/astro_b9dae9e0.mjs';
import 'clsx';
import mime from 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options?.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options?.path) {
      serializeOptions.path = options.path;
    }
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse(raw);
  }
}

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
  return [];
}

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function info(opts, label, message) {
  return log(opts, "info", label, message);
}
function warn(opts, label, message) {
  return log(opts, "warn", label, message);
}
function error(opts, label, message) {
  return log(opts, "error", label, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message) {
    info(this.options, label, message);
  }
  warn(label, message) {
    warn(this.options, label, message);
  }
  error(label, message) {
    error(this.options, label, message);
  }
  debug(label, message, ...args) {
    debug(this.options, label, message, args);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.options, this.label, message);
  }
}

async function callMiddleware(logger, onRequest, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (isEndpointOutput(value)) {
      logger.warn(
        "middleware",
        `Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${bold("Response")} objects.`
      );
    }
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function isEndpointOutput(endpointResult) {
  return !(endpointResult instanceof Response) && typeof endpointResult === "object" && typeof endpointResult.body === "string";
}

const encoder = new TextEncoder();
const clientAddressSymbol = Symbol.for("astro.clientAddress");
const clientLocalsSymbol = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  initResponseWithEncoding();
  const context = {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    ResponseWithEncoding,
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol in request)) {
        if (adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol);
    }
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol, val);
      }
    }
  });
  return context;
}
let ResponseWithEncoding;
let initResponseWithEncoding = () => {
  class LocalResponseWithEncoding extends Response {
    constructor(body, init, encoding) {
      if (typeof body === "string") {
        if (typeof Buffer !== "undefined" && Buffer.from) {
          body = Buffer.from(body, encoding);
        } else if (encoding == null || encoding === "utf8" || encoding === "utf-8") {
          body = encoder.encode(body);
        }
      }
      super(body, init);
      if (encoding) {
        this.headers.set("X-Astro-Encoding", encoding);
      }
    }
  }
  ResponseWithEncoding = LocalResponseWithEncoding;
  initResponseWithEncoding = () => {
  };
  return LocalResponseWithEncoding;
};
async function callEndpoint(mod, env, ctx, onRequest) {
  const context = createAPIContext({
    request: ctx.request,
    params: ctx.params,
    props: ctx.props,
    site: env.site,
    adapterName: env.adapterName
  });
  let response;
  if (onRequest) {
    response = await callMiddleware(
      env.logger,
      onRequest,
      context,
      async () => {
        return await renderEndpoint(mod, context, env.ssr, env.logger);
      }
    );
  } else {
    response = await renderEndpoint(mod, context, env.ssr, env.logger);
  }
  const isEndpointSSR = env.ssr && !ctx.route?.prerender;
  if (response instanceof Response) {
    if (isEndpointSSR && response.headers.get("X-Astro-Encoding")) {
      env.logger.warn(
        "ssr",
        "`ResponseWithEncoding` is ignored in SSR. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    attachCookiesToResponse(response, context.cookies);
    return response;
  }
  env.logger.warn(
    "astro",
    `${ctx.route.component} returns a simple object which is deprecated. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.`
  );
  if (isEndpointSSR) {
    if (response.hasOwnProperty("headers")) {
      env.logger.warn(
        "ssr",
        "Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    if (response.encoding) {
      env.logger.warn(
        "ssr",
        "`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
  }
  let body;
  const headers = new Headers();
  const pathname = ctx.route ? (
    // Try the static route `pathname`
    ctx.route.pathname ?? // Dynamic routes don't include `pathname`, so synthesize a path for these (e.g. 'src/pages/[slug].svg')
    ctx.route.segments.map((s) => s.map((p) => p.content).join("")).join("/")
  ) : (
    // Fallback to pathname of the request
    ctx.pathname
  );
  const mimeType = mime.getType(pathname) || "text/plain";
  headers.set("Content-Type", `${mimeType};charset=utf-8`);
  if (response.encoding) {
    headers.set("X-Astro-Encoding", response.encoding);
  }
  if (response.body instanceof Uint8Array) {
    body = response.body;
    headers.set("Content-Length", body.byteLength.toString());
  } else if (typeof Buffer !== "undefined" && Buffer.from) {
    body = Buffer.from(response.body, response.encoding);
    headers.set("Content-Length", body.byteLength.toString());
  } else if (response.encoding == null || response.encoding === "utf8" || response.encoding === "utf-8") {
    body = encoder.encode(response.body);
    headers.set("Content-Length", body.byteLength.toString());
  } else {
    body = response.body;
  }
  response = new Response(body, {
    status: 200,
    headers
  });
  attachCookiesToResponse(response, context.cookies);
  return response;
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"contactUs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contactus","type":"page","pattern":"^\\/contactUs\\/?$","segments":[[{"content":"contactUs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactUs.astro","pathname":"/contactUs","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"wholesale/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/wholesale","type":"page","pattern":"^\\/wholesale\\/?$","segments":[[{"content":"wholesale","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wholesale.astro","pathname":"/wholesale","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"order/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/order","type":"page","pattern":"^\\/order\\/?$","segments":[[{"content":"order","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/order.astro","pathname":"/order","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"story/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/story","type":"page","pattern":"^\\/story\\/?$","segments":[[{"content":"story","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/story.astro","pathname":"/story","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.36b12318.js"}],"styles":[{"type":"external","src":"/_assets/contactUs.642a43f9.css"},{"type":"inline","content":".hero[data-astro-cid-zi4ldr3x]{background:url(/_assets/bn3.3.372c8908.webp) no-repeat 50%;background-attachment:fixed;background-size:cover;min-height:calc(100vh - 84px);padding-top:0;position:relative}.hero[data-astro-cid-zi4ldr3x]:before{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#2e2e2e99;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.hero[data-astro-cid-zi4ldr3x] .swiper-slide[data-astro-cid-zi4ldr3x]{padding-top:22vh}@media (max-width:991px){.hero[data-astro-cid-zi4ldr3x] .swiper-slide[data-astro-cid-zi4ldr3x]{padding-top:12vh}}.hero[data-astro-cid-zi4ldr3x] .hero-img[data-astro-cid-zi4ldr3x]{position:relative}@media (max-width:991px){.hero[data-astro-cid-zi4ldr3x] .hero-img[data-astro-cid-zi4ldr3x]{margin-bottom:5vh}}.hero[data-astro-cid-zi4ldr3x] .hero-img[data-astro-cid-zi4ldr3x] img[data-astro-cid-zi4ldr3x]{height:100%;-webkit-mask-image:url(/_assets/shap.28b3a86e.png);mask-image:url(/_assets/shap.28b3a86e.png);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;-o-object-fit:contain;object-fit:contain}.hero[data-astro-cid-zi4ldr3x] .details[data-astro-cid-zi4ldr3x] .title[data-astro-cid-zi4ldr3x]{color:#fff;line-height:1.2;margin-bottom:2vh}.hero[data-astro-cid-zi4ldr3x] .details[data-astro-cid-zi4ldr3x] .des[data-astro-cid-zi4ldr3x]{color:#fff;line-height:1.5;max-width:600px;opacity:.8;width:100%}.detailsCompany[data-astro-cid-orxjuwz2]{background:url(/_assets/detailsSection.a387f0a8.jpg) no-repeat fixed;background-size:cover;min-height:70vh;position:relative}.detailsCompany[data-astro-cid-orxjuwz2]:before{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#2e2e2e80;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.detailsCompany[data-astro-cid-orxjuwz2] .companyCard[data-astro-cid-orxjuwz2]{height:50px;margin-top:15vh;position:relative;text-align:center}.detailsCompany[data-astro-cid-orxjuwz2] .companyCard[data-astro-cid-orxjuwz2] h5[data-astro-cid-orxjuwz2]{color:#fff;margin-bottom:3vh}.detailsCompany[data-astro-cid-orxjuwz2] .companyCard[data-astro-cid-orxjuwz2] p[data-astro-cid-orxjuwz2]{color:#ebebeb;line-height:1.6;margin-bottom:3vh;min-height:50px}@media (max-width:991px){.detailsCompany[data-astro-cid-orxjuwz2] .companyCard[data-astro-cid-orxjuwz2]{height:auto;margin-top:5vh}}section[data-astro-cid-kcahbcdb]{min-height:70vh}.review-box[data-astro-cid-kcahbcdb]{background-color:#fff;border-radius:18px;height:220px;padding:20px 15px}.review-box[data-astro-cid-kcahbcdb] .top-box[data-astro-cid-kcahbcdb]{margin-bottom:3vh}.review-box[data-astro-cid-kcahbcdb] .top-box[data-astro-cid-kcahbcdb] .name[data-astro-cid-kcahbcdb]{color:var(--main-d);font-size:1.25rem;font-weight:500;text-transform:capitalize}.review-box[data-astro-cid-kcahbcdb] .top-box[data-astro-cid-kcahbcdb] .rate[data-astro-cid-kcahbcdb] i[data-astro-cid-kcahbcdb]{color:gold;font-size:1rem;padding-right:1.2px}.review-box[data-astro-cid-kcahbcdb] .commit[data-astro-cid-kcahbcdb]{color:var(--main-l);font-size:1rem;line-height:1.6;opacity:.8}\n.main-heading[data-astro-cid-lmimhsxk]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding-bottom:8vh}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]{color:var(--main-d);position:relative;text-transform:uppercase;-webkit-transition:.3s ease-in-out .1s;transition:.3s ease-in-out .1s}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after,.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{aspect-ratio:1;background-color:var(--hover);border-radius:50%;content:\"\";opacity:1;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:15px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{left:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after{right:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover{color:var(--hover)}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:before{left:0;opacity:0}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:after{opacity:0;right:0}\n.btn-popup[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-popup[data-astro-cid-2veov33h]:before{background-color:var(--hover)}.btn-skew[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-skew[data-astro-cid-2veov33h]:before{background-color:var(--hover)}\nsection[data-astro-cid-ozbslz6v]{min-height:60vh}section[data-astro-cid-ozbslz6v] .title[data-astro-cid-ozbslz6v]{color:var(--main-d);font-size:1.75rem;font-weight:800;padding-bottom:15px}section[data-astro-cid-ozbslz6v] .des[data-astro-cid-ozbslz6v]{color:var(--main-l);font-size:1.125rem;font-weight:500}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v]{padding-top:30px}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:25px}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v]:first-child{padding-top:0}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v] i[data-astro-cid-ozbslz6v]{color:var(--hover);font-size:1.5rem;margin-right:15px}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v] a[data-astro-cid-ozbslz6v],section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v] p[data-astro-cid-ozbslz6v]{color:var(--main-l);font-size:1rem}.map_iframe[data-astro-cid-ozbslz6v]{border:none;min-height:60vh;width:100%}\n@media (max-width:991px){.tradition[data-astro-cid-6jczlj6r] .img-box[data-astro-cid-6jczlj6r]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:25px}}.tradition[data-astro-cid-6jczlj6r] .img[data-astro-cid-6jczlj6r] img[data-astro-cid-6jczlj6r]{border-radius:12px;height:100%;-o-object-fit:contain;object-fit:contain}.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r]{margin:0 15px}.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r] .img-1[data-astro-cid-6jczlj6r]{margin-bottom:15px}.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r] .img-1[data-astro-cid-6jczlj6r],.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r] .img-2[data-astro-cid-6jczlj6r]{max-width:150px}.tradition[data-astro-cid-6jczlj6r] .details[data-astro-cid-6jczlj6r] p[data-astro-cid-6jczlj6r]{color:var(--main-l);line-height:1.6;opacity:.8}.brief[data-astro-cid-4khl2bf4] .box-img[data-astro-cid-4khl2bf4] img[data-astro-cid-4khl2bf4]{border-radius:8px;height:100%;-o-object-fit:contain;object-fit:contain}.brief[data-astro-cid-4khl2bf4] .box-img[data-astro-cid-4khl2bf4] .img-1[data-astro-cid-4khl2bf4]{border-radius:8px;-webkit-box-shadow:13px 8px 1rem 0 rgba(72,72,72,.259);box-shadow:13px 8px 1rem #48484842;height:100%;max-height:250px;top:30px}h2[data-astro-cid-4khl2bf4]{color:var(--main-l);line-height:1.5}h2[data-astro-cid-4khl2bf4] span[data-astro-cid-4khl2bf4]{color:var(--hover)}p[data-astro-cid-4khl2bf4]{line-height:1.8;opacity:.7}\nsection[data-astro-cid-s63cuhea]{min-height:50vh}img[data-astro-cid-s63cuhea]{height:100%;margin:0 auto;max-width:200px;-o-object-fit:contain;object-fit:contain}\n.card[data-astro-cid-f4t56xfu]{background-color:#fff;border-radius:8px;margin:1vh 0;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.card[data-astro-cid-f4t56xfu] .card-img[data-astro-cid-f4t56xfu]{background-color:#f4f4f4;border-top-left-radius:8px;border-top-right-radius:8px;height:250px;overflow:hidden;width:100%}.card[data-astro-cid-f4t56xfu] .card-img[data-astro-cid-f4t56xfu] img[data-astro-cid-f4t56xfu]{height:100%;-o-object-fit:contain;object-fit:contain;-webkit-transition:-webkit-transform 1.5s ease-in-out;transition:-webkit-transform 1.5s ease-in-out;transition:transform 1.5s ease-in-out;transition:transform 1.5s ease-in-out,-webkit-transform 1.5s ease-in-out}.card[data-astro-cid-f4t56xfu] .card-details[data-astro-cid-f4t56xfu]{margin-top:2vh;padding:0 15px}.card[data-astro-cid-f4t56xfu] .card-details[data-astro-cid-f4t56xfu] h4[data-astro-cid-f4t56xfu]{color:var(--hover);padding-bottom:.5vh;text-transform:capitalize}.card[data-astro-cid-f4t56xfu] .card-details[data-astro-cid-f4t56xfu] p[data-astro-cid-f4t56xfu]{color:var(--main-l);line-height:1.6;opacity:.9;padding-bottom:2.5vh}.card[data-astro-cid-f4t56xfu]:hover{-webkit-box-shadow:0 0 1.25rem 7px hsla(0,0%,43%,.2);box-shadow:0 0 1.25rem 7px #6e6e6e33}.card[data-astro-cid-f4t56xfu]:hover .card-img[data-astro-cid-f4t56xfu] img[data-astro-cid-f4t56xfu]{-webkit-transform:scale(1.1);transform:scale(1.1)}.specialties[data-astro-cid-mrorrrcq]{background-color:#0000000d;padding-top:7vh}.flavor[data-astro-cid-j5ad22cf]{background-color:#fff}.flavor[data-astro-cid-j5ad22cf] .details[data-astro-cid-j5ad22cf] p[data-astro-cid-j5ad22cf]{color:var(--main-l);font-size:1rem;line-height:1.8}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:220px;justify-content:center;overflow:hidden;position:relative;text-align:center}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf] img[data-astro-cid-j5ad22cf]{-webkit-transition:1s ease-in-out;transition:1s ease-in-out;z-index:-1}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf] .type[data-astro-cid-j5ad22cf]{color:#fff;font-size:1.75rem;padding:5px 0}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf] .type[data-astro-cid-j5ad22cf],.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:before{position:absolute;top:-100%;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:before{background-color:#3a3a3a70;content:\"\";height:100%;left:0;width:100%}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:hover:before{top:0}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:hover .type[data-astro-cid-j5ad22cf]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:hover img[data-astro-cid-j5ad22cf]{-webkit-transform:scale(1.3);transform:scale(1.3)}\n.wholesale[data-astro-cid-52hnq2su] p[data-astro-cid-52hnq2su]{color:var(--main-l);line-height:1.6}@media (max-width:991px){.wholesale[data-astro-cid-52hnq2su] p[data-astro-cid-52hnq2su]{padding:5vh 0}}.wholesale[data-astro-cid-52hnq2su] img[data-astro-cid-52hnq2su]{border-radius:18px;height:100%;-o-object-fit:cover;object-fit:cover}\n"}],"routeData":{"route":"/ar","type":"page","pattern":"^\\/ar\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ar/index.astro","pathname":"/ar","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.eb4ca2ad.js"}],"styles":[{"type":"external","src":"/_assets/contactUs.642a43f9.css"},{"type":"inline","content":"section[data-astro-cid-ozbslz6v]{min-height:60vh}section[data-astro-cid-ozbslz6v] .title[data-astro-cid-ozbslz6v]{color:var(--main-d);font-size:1.75rem;font-weight:800;padding-bottom:15px}section[data-astro-cid-ozbslz6v] .des[data-astro-cid-ozbslz6v]{color:var(--main-l);font-size:1.125rem;font-weight:500}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v]{padding-top:30px}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:25px}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v]:first-child{padding-top:0}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v] i[data-astro-cid-ozbslz6v]{color:var(--hover);font-size:1.5rem;margin-right:15px}section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v] a[data-astro-cid-ozbslz6v],section[data-astro-cid-ozbslz6v] .linksInfo[data-astro-cid-ozbslz6v] li[data-astro-cid-ozbslz6v] p[data-astro-cid-ozbslz6v]{color:var(--main-l);font-size:1rem}.map_iframe[data-astro-cid-ozbslz6v]{border:none;min-height:60vh;width:100%}\n.breadcrumb[data-astro-cid-4alqwrok]{background:url(/_assets/bg-banner.151f9e29.webp) no-repeat fixed;background-position:50%;background-size:cover;min-height:60vh}.breadcrumb[data-astro-cid-4alqwrok]:before{-webkit-backdrop-filter:blur(.5px);backdrop-filter:blur(.5px);background-color:#0006;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok]{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok],.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]{color:#fff;text-transform:capitalize}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){opacity:.7}@media (max-width:480px){.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){font-size:1.1rem}}\nsection[data-astro-cid-4pg6whjl]{min-height:70vh;padding-top:0}form[data-astro-cid-4pg6whjl]{border-radius:18px;height:100%;margin:0 auto;max-width:100%;padding:30px;width:1000px}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl]{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-bottom:3vh}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] input[data-astro-cid-4pg6whjl],form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] textarea[data-astro-cid-4pg6whjl]{background-color:transparent;border:0;border-bottom:1px solid silver;border-radius:0;font-size:1.2rem;font-size:.875rem;height:65px;max-width:100%;padding-left:10px;padding-right:10px;-webkit-transition:var(--transition);transition:var(--transition);width:100%}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] input[data-astro-cid-4pg6whjl]:focus,form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] textarea[data-astro-cid-4pg6whjl]:focus{border-color:var(--main-d)!important;outline:0}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] input[data-astro-cid-4pg6whjl]{height:40px}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] textarea[data-astro-cid-4pg6whjl]{height:80px}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] label[data-astro-cid-4pg6whjl]{color:var(--main-l);font-size:1rem;opacity:.8;padding-bottom:2vh}form[data-astro-cid-4pg6whjl] h6[data-astro-cid-4pg6whjl]{color:var(--main-l);font-size:1.875rem;margin-bottom:8vh;text-align:center}form[data-astro-cid-4pg6whjl] .btn-popup[data-astro-cid-4pg6whjl]{background-color:var(--main-l);color:#fff}form[data-astro-cid-4pg6whjl] .btn-popup[data-astro-cid-4pg6whjl]:before{background-color:var(--hover)}form[data-astro-cid-4pg6whjl] .button[data-astro-cid-4pg6whjl]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;margin-top:3vh}\n.btn-popup[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-popup[data-astro-cid-2veov33h]:before{background-color:var(--hover)}.btn-skew[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-skew[data-astro-cid-2veov33h]:before{background-color:var(--hover)}\n"}],"routeData":{"route":"/ar/contactus","type":"page","pattern":"^\\/ar\\/contactUs\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}],[{"content":"contactUs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ar/contactUs.astro","pathname":"/ar/contactUs","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.36b12318.js"}],"styles":[{"type":"external","src":"/_assets/contactUs.642a43f9.css"},{"type":"inline","content":".breadcrumb[data-astro-cid-4alqwrok]{background:url(/_assets/bg-banner.151f9e29.webp) no-repeat fixed;background-position:50%;background-size:cover;min-height:60vh}.breadcrumb[data-astro-cid-4alqwrok]:before{-webkit-backdrop-filter:blur(.5px);backdrop-filter:blur(.5px);background-color:#0006;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok]{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok],.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]{color:#fff;text-transform:capitalize}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){opacity:.7}@media (max-width:480px){.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){font-size:1.1rem}}\nsection[data-astro-cid-4pg6whjl]{min-height:70vh;padding-top:0}form[data-astro-cid-4pg6whjl]{border-radius:18px;height:100%;margin:0 auto;max-width:100%;padding:30px;width:1000px}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl]{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-bottom:3vh}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] input[data-astro-cid-4pg6whjl],form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] textarea[data-astro-cid-4pg6whjl]{background-color:transparent;border:0;border-bottom:1px solid silver;border-radius:0;font-size:1.2rem;font-size:.875rem;height:65px;max-width:100%;padding-left:10px;padding-right:10px;-webkit-transition:var(--transition);transition:var(--transition);width:100%}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] input[data-astro-cid-4pg6whjl]:focus,form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] textarea[data-astro-cid-4pg6whjl]:focus{border-color:var(--main-d)!important;outline:0}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] input[data-astro-cid-4pg6whjl]{height:40px}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] textarea[data-astro-cid-4pg6whjl]{height:80px}form[data-astro-cid-4pg6whjl] .form-group[data-astro-cid-4pg6whjl] label[data-astro-cid-4pg6whjl]{color:var(--main-l);font-size:1rem;opacity:.8;padding-bottom:2vh}form[data-astro-cid-4pg6whjl] h6[data-astro-cid-4pg6whjl]{color:var(--main-l);font-size:1.875rem;margin-bottom:8vh;text-align:center}form[data-astro-cid-4pg6whjl] .btn-popup[data-astro-cid-4pg6whjl]{background-color:var(--main-l);color:#fff}form[data-astro-cid-4pg6whjl] .btn-popup[data-astro-cid-4pg6whjl]:before{background-color:var(--hover)}form[data-astro-cid-4pg6whjl] .button[data-astro-cid-4pg6whjl]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;margin-top:3vh}\n.main-heading[data-astro-cid-lmimhsxk]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding-bottom:8vh}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]{color:var(--main-d);position:relative;text-transform:uppercase;-webkit-transition:.3s ease-in-out .1s;transition:.3s ease-in-out .1s}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after,.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{aspect-ratio:1;background-color:var(--hover);border-radius:50%;content:\"\";opacity:1;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:15px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{left:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after{right:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover{color:var(--hover)}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:before{left:0;opacity:0}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:after{opacity:0;right:0}\nsection[data-astro-cid-s63cuhea]{min-height:50vh}img[data-astro-cid-s63cuhea]{height:100%;margin:0 auto;max-width:200px;-o-object-fit:contain;object-fit:contain}\n.wholesale[data-astro-cid-52hnq2su] p[data-astro-cid-52hnq2su]{color:var(--main-l);line-height:1.6}@media (max-width:991px){.wholesale[data-astro-cid-52hnq2su] p[data-astro-cid-52hnq2su]{padding:5vh 0}}.wholesale[data-astro-cid-52hnq2su] img[data-astro-cid-52hnq2su]{border-radius:18px;height:100%;-o-object-fit:cover;object-fit:cover}\n.btn-popup[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-popup[data-astro-cid-2veov33h]:before{background-color:var(--hover)}.btn-skew[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-skew[data-astro-cid-2veov33h]:before{background-color:var(--hover)}\n"}],"routeData":{"route":"/ar/wholesale","type":"page","pattern":"^\\/ar\\/wholesale\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}],[{"content":"wholesale","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ar/wholesale.astro","pathname":"/ar/wholesale","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ar/products/[slug]","type":"page","pattern":"^\\/ar\\/products\\/([^/]+?)\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}],[{"content":"products","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/ar/products/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.36b12318.js"}],"styles":[{"type":"external","src":"/_assets/contactUs.642a43f9.css"},{"type":"inline","content":".breadcrumb[data-astro-cid-4alqwrok]{background:url(/_assets/bg-banner.151f9e29.webp) no-repeat fixed;background-position:50%;background-size:cover;min-height:60vh}.breadcrumb[data-astro-cid-4alqwrok]:before{-webkit-backdrop-filter:blur(.5px);backdrop-filter:blur(.5px);background-color:#0006;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok]{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok],.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]{color:#fff;text-transform:capitalize}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){opacity:.7}@media (max-width:480px){.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){font-size:1.1rem}}\n.main-heading[data-astro-cid-lmimhsxk]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding-bottom:8vh}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]{color:var(--main-d);position:relative;text-transform:uppercase;-webkit-transition:.3s ease-in-out .1s;transition:.3s ease-in-out .1s}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after,.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{aspect-ratio:1;background-color:var(--hover);border-radius:50%;content:\"\";opacity:1;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:15px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{left:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after{right:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover{color:var(--hover)}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:before{left:0;opacity:0}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:after{opacity:0;right:0}\n.order[data-astro-cid-b7kga3xw]{min-height:80vh}h2[data-astro-cid-b7kga3xw]{color:var(--main-l);line-height:1.5;text-transform:capitalize}h2[data-astro-cid-b7kga3xw] span[data-astro-cid-b7kga3xw]{color:var(--hover)}p[data-astro-cid-b7kga3xw]{line-height:1.8;opacity:.7}\n.btn-popup[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-popup[data-astro-cid-2veov33h]:before{background-color:var(--hover)}.btn-skew[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-skew[data-astro-cid-2veov33h]:before{background-color:var(--hover)}\n.card[data-astro-cid-f4t56xfu]{background-color:#fff;border-radius:8px;margin:1vh 0;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.card[data-astro-cid-f4t56xfu] .card-img[data-astro-cid-f4t56xfu]{background-color:#f4f4f4;border-top-left-radius:8px;border-top-right-radius:8px;height:250px;overflow:hidden;width:100%}.card[data-astro-cid-f4t56xfu] .card-img[data-astro-cid-f4t56xfu] img[data-astro-cid-f4t56xfu]{height:100%;-o-object-fit:contain;object-fit:contain;-webkit-transition:-webkit-transform 1.5s ease-in-out;transition:-webkit-transform 1.5s ease-in-out;transition:transform 1.5s ease-in-out;transition:transform 1.5s ease-in-out,-webkit-transform 1.5s ease-in-out}.card[data-astro-cid-f4t56xfu] .card-details[data-astro-cid-f4t56xfu]{margin-top:2vh;padding:0 15px}.card[data-astro-cid-f4t56xfu] .card-details[data-astro-cid-f4t56xfu] h4[data-astro-cid-f4t56xfu]{color:var(--hover);padding-bottom:.5vh;text-transform:capitalize}.card[data-astro-cid-f4t56xfu] .card-details[data-astro-cid-f4t56xfu] p[data-astro-cid-f4t56xfu]{color:var(--main-l);line-height:1.6;opacity:.9;padding-bottom:2.5vh}.card[data-astro-cid-f4t56xfu]:hover{-webkit-box-shadow:0 0 1.25rem 7px hsla(0,0%,43%,.2);box-shadow:0 0 1.25rem 7px #6e6e6e33}.card[data-astro-cid-f4t56xfu]:hover .card-img[data-astro-cid-f4t56xfu] img[data-astro-cid-f4t56xfu]{-webkit-transform:scale(1.1);transform:scale(1.1)}.specialties[data-astro-cid-mrorrrcq]{background-color:#0000000d;padding-top:7vh}.flavor[data-astro-cid-j5ad22cf]{background-color:#fff}.flavor[data-astro-cid-j5ad22cf] .details[data-astro-cid-j5ad22cf] p[data-astro-cid-j5ad22cf]{color:var(--main-l);font-size:1rem;line-height:1.8}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:220px;justify-content:center;overflow:hidden;position:relative;text-align:center}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf] img[data-astro-cid-j5ad22cf]{-webkit-transition:1s ease-in-out;transition:1s ease-in-out;z-index:-1}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf] .type[data-astro-cid-j5ad22cf]{color:#fff;font-size:1.75rem;padding:5px 0}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf] .type[data-astro-cid-j5ad22cf],.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:before{position:absolute;top:-100%;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:before{background-color:#3a3a3a70;content:\"\";height:100%;left:0;width:100%}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:hover:before{top:0}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:hover .type[data-astro-cid-j5ad22cf]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.flavor[data-astro-cid-j5ad22cf] .type-flavor[data-astro-cid-j5ad22cf]:hover img[data-astro-cid-j5ad22cf]{-webkit-transform:scale(1.3);transform:scale(1.3)}\n"}],"routeData":{"route":"/ar/order","type":"page","pattern":"^\\/ar\\/order\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}],[{"content":"order","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ar/order.astro","pathname":"/ar/order","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.36b12318.js"}],"styles":[{"type":"external","src":"/_assets/contactUs.642a43f9.css"},{"type":"inline","content":".breadcrumb[data-astro-cid-4alqwrok]{background:url(/_assets/bg-banner.151f9e29.webp) no-repeat fixed;background-position:50%;background-size:cover;min-height:60vh}.breadcrumb[data-astro-cid-4alqwrok]:before{-webkit-backdrop-filter:blur(.5px);backdrop-filter:blur(.5px);background-color:#0006;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok]{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok],.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]{color:#fff;text-transform:capitalize}.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){opacity:.7}@media (max-width:480px){.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] a[data-astro-cid-4alqwrok]:nth-child(3),.breadcrumb[data-astro-cid-4alqwrok] ul[data-astro-cid-4alqwrok] li[data-astro-cid-4alqwrok]:nth-child(3){font-size:1.1rem}}\n.main-heading[data-astro-cid-lmimhsxk]{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding-bottom:8vh}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]{color:var(--main-d);position:relative;text-transform:uppercase;-webkit-transition:.3s ease-in-out .1s;transition:.3s ease-in-out .1s}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after,.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{aspect-ratio:1;background-color:var(--hover);border-radius:50%;content:\"\";opacity:1;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:15px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:before{left:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:after{right:-25px}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover{color:var(--hover)}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:before{left:0;opacity:0}.main-heading[data-astro-cid-lmimhsxk] h3[data-astro-cid-lmimhsxk]:hover:after{opacity:0;right:0}\n.btn-popup[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-popup[data-astro-cid-2veov33h]:before{background-color:var(--hover)}.btn-skew[data-astro-cid-2veov33h]{background-color:var(--main-l)}.btn-skew[data-astro-cid-2veov33h]:before{background-color:var(--hover)}\nsection[data-astro-cid-s63cuhea]{min-height:50vh}img[data-astro-cid-s63cuhea]{height:100%;margin:0 auto;max-width:200px;-o-object-fit:contain;object-fit:contain}\n@media (max-width:991px){.tradition[data-astro-cid-6jczlj6r] .img-box[data-astro-cid-6jczlj6r]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:25px}}.tradition[data-astro-cid-6jczlj6r] .img[data-astro-cid-6jczlj6r] img[data-astro-cid-6jczlj6r]{border-radius:12px;height:100%;-o-object-fit:contain;object-fit:contain}.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r]{margin:0 15px}.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r] .img-1[data-astro-cid-6jczlj6r]{margin-bottom:15px}.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r] .img-1[data-astro-cid-6jczlj6r],.tradition[data-astro-cid-6jczlj6r] .two-img[data-astro-cid-6jczlj6r] .img-2[data-astro-cid-6jczlj6r]{max-width:150px}.tradition[data-astro-cid-6jczlj6r] .details[data-astro-cid-6jczlj6r] p[data-astro-cid-6jczlj6r]{color:var(--main-l);line-height:1.6;opacity:.8}.brief[data-astro-cid-4khl2bf4] .box-img[data-astro-cid-4khl2bf4] img[data-astro-cid-4khl2bf4]{border-radius:8px;height:100%;-o-object-fit:contain;object-fit:contain}.brief[data-astro-cid-4khl2bf4] .box-img[data-astro-cid-4khl2bf4] .img-1[data-astro-cid-4khl2bf4]{border-radius:8px;-webkit-box-shadow:13px 8px 1rem 0 rgba(72,72,72,.259);box-shadow:13px 8px 1rem #48484842;height:100%;max-height:250px;top:30px}h2[data-astro-cid-4khl2bf4]{color:var(--main-l);line-height:1.5}h2[data-astro-cid-4khl2bf4] span[data-astro-cid-4khl2bf4]{color:var(--hover)}p[data-astro-cid-4khl2bf4]{line-height:1.8;opacity:.7}\n"}],"routeData":{"route":"/ar/story","type":"page","pattern":"^\\/ar\\/story\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}],[{"content":"story","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ar/story.astro","pathname":"/ar/story","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/components/header.astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/layout/Layout.astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/ar/contactUs.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ar/contactUs@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/ar/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ar/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/ar/menu/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ar/menu/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/ar/order.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ar/order@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/ar/story.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ar/story@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/ar/wholesale.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ar/wholesale@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/contactUs.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contactUs@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/menu/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/menu/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/order.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/order@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/story.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/story@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/pages/wholesale.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/wholesale@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/project/version/1/il-sorbetto/src/components/slidBar.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/image-endpoint.js":"chunks/pages/image-endpoint_cf9e10ed.mjs","/src/pages/ar/story.astro":"chunks/pages/story_3cbcb095.mjs","/src/pages/ar/wholesale.astro":"chunks/pages/wholesale_56f1046a.mjs","\u0000@astrojs-manifest":"manifest_612bb0c9.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_d7890458.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_44fc38e8.mjs","\u0000@astro-page:src/pages/contactUs@_@astro":"chunks/contactUs_ccd172cd.mjs","\u0000@astro-page:src/pages/wholesale@_@astro":"chunks/wholesale_6ec4c550.mjs","\u0000@astro-page:src/pages/order@_@astro":"chunks/order_f0db5369.mjs","\u0000@astro-page:src/pages/story@_@astro":"chunks/story_be979a69.mjs","\u0000@astro-page:src/pages/menu/[slug]@_@astro":"chunks/_slug__051e64fc.mjs","\u0000@astro-page:src/pages/ar/index@_@astro":"chunks/index_3fd0079f.mjs","\u0000@astro-page:src/pages/ar/contactUs@_@astro":"chunks/contactUs_1738a434.mjs","\u0000@astro-page:src/pages/ar/wholesale@_@astro":"chunks/wholesale_2e697fc8.mjs","\u0000@astro-page:src/pages/ar/products/[slug]@_@astro":"chunks/_slug__4f2f18b9.mjs","\u0000@astro-page:src/pages/ar/order@_@astro":"chunks/order_dcfd5ed9.mjs","\u0000@astro-page:src/pages/ar/story@_@astro":"chunks/story_3cc2fdb5.mjs","\u0000@astro-page:src/pages/ar/menu/[slug]@_@astro":"chunks/_slug__1f913647.mjs","D:/project/version/1/il-sorbetto/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_95454708.mjs","D:/project/version/1/il-sorbetto/src/content/menu/coffe.mdx?astroContentCollectionEntry=true":"chunks/coffe_644e9eb7.mjs","D:/project/version/1/il-sorbetto/src/content/menu/gelatto.mdx?astroContentCollectionEntry=true":"chunks/gelatto_3826046f.mjs","D:/project/version/1/il-sorbetto/src/content/menu/icecream.mdx?astroContentCollectionEntry=true":"chunks/icecream_428b7aa2.mjs","D:/project/version/1/il-sorbetto/src/content/menu/coffe.mdx?astroPropagatedAssets":"chunks/coffe_20951e64.mjs","D:/project/version/1/il-sorbetto/src/content/menu/gelatto.mdx?astroPropagatedAssets":"chunks/gelatto_6e3a98e5.mjs","D:/project/version/1/il-sorbetto/src/content/menu/icecream.mdx?astroPropagatedAssets":"chunks/icecream_0166bb45.mjs","D:/project/version/1/il-sorbetto/src/content/menu/coffe.mdx":"chunks/coffe_180f95dc.mjs","D:/project/version/1/il-sorbetto/src/content/menu/gelatto.mdx":"chunks/gelatto_edbf0622.mjs","D:/project/version/1/il-sorbetto/src/content/menu/icecream.mdx":"chunks/icecream_e75b2cf1.mjs","/astro/hoisted.js?q=0":"_assets/hoisted.c909b14a.js","/astro/hoisted.js?q=1":"_assets/hoisted.eb4ca2ad.js","/astro/hoisted.js?q=2":"_assets/hoisted.36b12318.js","astro:scripts/before-hydration.js":""},"assets":["/_assets/pro3.76655774.webp","/_assets/pro1.eaab5656.png","/_assets/pro2.9bd526b6.png","/_assets/1.07eca3b6.png","/_assets/3.6e84af2f.jpg","/_assets/tradition3.d3b1f32d.jpg","/_assets/tradition2.bf1856e6.jpg","/_assets/1.ff096e6f.webp","/_assets/tradition4.db1686fc.jpg","/_assets/2.fbaf90f7.webp","/_assets/3.37b9af48.webp","/_assets/4.125175a2.webp","/_assets/5.c4eade6d.webp","/_assets/6.3064944f.webp","/_assets/7.ccf223b7.webp","/_assets/8.eb8b7171.webp","/_assets/9.c8c9404c.webp","/_assets/10.533b2f64.webp","/_assets/1.34af1fee.webp","/_assets/2.911c9d9a.webp","/_assets/3.980e60b6.webp","/_assets/4.3169ff1a.webp","/_assets/5.b958f59a.webp","/_assets/6.3fb67fa5.webp","/_assets/7.56ba7f56.webp","/_assets/1.abcf9569.jpg","/_assets/8.aa7c02e7.webp","/_assets/2.49bab633.jpg","/_assets/user.c5f9bafc.jpg","/_assets/3.5a7abcd9.jpg","/_assets/fa-brands-400.fb347c28.woff2","/_assets/fa-duotone-900.a9963ad2.woff2","/_assets/fa-light-300.d9c0c73c.woff2","/_assets/fa-solid-900.82877c6d.woff2","/_assets/fa-regular-400.d2d78647.woff2","/_assets/fa-thin-100.0b778419.woff2","/_assets/fa-v4compatibility.4cc9ee46.woff2","/_assets/bn3.3.372c8908.webp","/_assets/shap.28b3a86e.png","/_assets/detailsSection.a387f0a8.jpg","/_assets/bg-banner.151f9e29.webp","/_assets/fa-brands-400.75e5e5f8.ttf","/_assets/fa-v4compatibility.c2269bb7.ttf","/_assets/fa-light-300.2ebd93ea.ttf","/_assets/fa-solid-900.229b67ef.ttf","/_assets/fa-regular-400.87a056d8.ttf","/_assets/fa-duotone-900.8e2b6011.ttf","/_assets/fa-thin-100.8ca17232.ttf","/_assets/2.2f12e45a.jpg","/_assets/logo.10f14268.png","/_assets/coffe.21075adc.png","/_assets/pro2.b7c5a2dc.png","/_assets/pro1.f8b17a04.png","/_assets/contactUs.642a43f9.css","/image/favicon.webp","/_assets/hoisted.36b12318.js","/_assets/hoisted.c909b14a.js","/_assets/hoisted.eb4ca2ad.js","/locales/ar/translation.json","/locales/en/translation.json","/index.html","/contactUs/index.html","/wholesale/index.html","/order/index.html","/story/index.html"]});

export { AstroCookies as A, Logger as L, attachCookiesToResponse as a, callEndpoint as b, createAPIContext as c, dateTimeFormat as d, callMiddleware as e, AstroIntegrationLogger as f, getSetCookiesFromResponse as g, levels as l, manifest };
