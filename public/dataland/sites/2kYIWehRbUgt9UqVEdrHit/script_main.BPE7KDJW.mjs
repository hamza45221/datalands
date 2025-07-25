import {
    $ as v,
    Ha as P,
    L as y,
    M as u,
    N as l,
    R as g,
    T as R,
    U as F,
    V as _,
    Va as D,
    X as b,
    ba as E,
    e as d,
    i as h,
    qa as k,
    ra as w,
    wa as I
} from "./chunk-MQBELU27.mjs";
import "./chunk-JR5VT52U.mjs";
import {c as r} from "./chunk-RIUMFBNJ.mjs";

var U = "default" in u ? y : u, m = {}, B = U;
m.createRoot = B.createRoot;
m.hydrateRoot = B.hydrateRoot;
var S = m.createRoot, V = m.hydrateRoot;
var p = {
    augiA20Il: {
        elements: {},
        page: l(() => import("./_2UASnDuEOWkVwzZsQqPqff578W5YEC7-Bf5tXUVZug.GIAZEAUF.mjs")),
        path: "/"
    },
    uJxaLE9bj: {
        elements: {},
        page: l(() => import("./hSG7ANHG70DZIF1ibzvyXx_177fUPdTcxWwIZsc4TFE.CGYE3F36.mjs")),
        path: "/work"
    },
    DdY5fvW_b: {
        elements: {},
        page: l(() => import("./ZPjVDKAySWeqxME3sFICprxSV5ungmfb1Wi3-fPphL8.Z3NF5NTI.mjs")),
        path: "/services"
    },
    XF8IlhY4K: {
        collectionId: "rm1Es5roQ",
        elements: {},
        page: l(() => import("./fuRJumq_OhGLvejXfZXpGWYyPWv4JAnDAZk0akTMRSk.LAQJP7D2.mjs")),
        path: "/work/:rbKd64v28"
    },
    lV3_yUyH_: {page: l(() => import("./lV3_yUyH_-IBD6YE7V.mjs"))}
}, M = [{code: "en", id: "default", name: "English", slug: ""}];

async function N({routeId: t, pathVariables: s, localeId: i}) {
    await p[t].page.preload();
    let e = d(I, {
        isWebsite: !0,
        routeId: t,
        pathVariables: s,
        routes: p,
        collectionUtils: {rm1Es5roQ: async () => (await import("./qrTa4R4pJfLVB1QIN_NoGbPaA1wx_IdK139bLceVaFw.K3MZNC4M.mjs"))?.utils},
        framerSiteId: "46a2e55c2174a45b4b6688af6bc034a1f8fb4ab5729c972105d9c8e5bd6e2c99",
        notFoundPage: l(() => import("./SitesNotFoundPage.js@1.1-GYJMBU6W.mjs")),
        isReducedMotion: !0,
        localeId: i,
        locales: M,
        preserveQueryParams: void 0
    }), c = d(k, {
        children: e,
        value: {
            codeBoundaries: !1,
            editorBarMenu: !1,
            enableAsyncURLUpdates: !0,
            replaceNestedLinks: !0,
            useGranularSuspense: !0,
            wrapUpdatesInTransitions: !0
        }
    }), o = d(w, {children: c});
    return d(g, {children: o, value: {routes: {}}})
}

var z = typeof document < "u";
if (z) {
    r.__framer_importFromPackage = (s, i) => () => d(v, {error: 'Package component not supported: "' + i + '" in "' + s + '"'}), r.process = {
        ...r.process,
        env: {...r.process ? r.process.env : void 0, NODE_ENV: "production"}
    }, r.__framer_events = r.__framer_events || [], E();
    let t = document.getElementById("main");
    "framerHydrateV2" in t.dataset ? x(!0, t) : x(!1, t)
}

function W() {
    z && r.__framer_events.push(arguments)
}

async function x(t, s) {
    function i(e, c, o = !0) {
        if (e.caught || r.__framer_hadFatalError) return;
        let n = c?.componentStack;
        if (o) {
            if (console.warn(`Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:
`, e, n), Math.random() > .01) return
        } else console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/");
        W(o ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(e),
            componentStack: n,
            stack: n ? void 0 : e instanceof Error && typeof e.stack == "string" ? e.stack : null
        })
    }

    try {
        let e, c, o, n;
        if (t) {
            let a = JSON.parse(s.dataset.framerHydrateV2);
            e = a.routeId, c = a.localeId, o = a.pathVariables, n = a.breakpoints
        } else {
            let a = b(p, decodeURIComponent(location.pathname), !0, M);
            e = a.routeId, c = a.localeId, o = a.pathVariables
        }
        let f = await N({routeId: e, localeId: c, pathVariables: o});
        t ? (D("framer-rewrite-breakpoints", () => {
            P(n), r.__framer_onRewriteBreakpoints?.(n)
        }), h(() => {
            _(), F(), R(), V(s, f, {onRecoverableError: i})
        })) : S(s, {onRecoverableError: i}).render(f)
    } catch (e) {
        throw i(e, void 0, !1), e
    }
}

export {N as getPageRoot};
//# sourceMappingURL=script_main.BPE7KDJW.mjs.map
