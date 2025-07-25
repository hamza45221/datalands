import {a as Dr} from "./chunk-I5JMGXME.mjs";
import {a as Er, b as Ce, c as je, d as Fe} from "./chunk-Y6UR6WQA.mjs";
import {a as Le, b as Ve, c as Ue} from "./chunk-HWITXA36.mjs";
import {a as Se} from "./chunk-ETMXHLED.mjs";
import {a as Ye, b as Ke, c as be, d as ke, e as Ie, f as Ne, g as br, h as kr, i as Ir} from "./chunk-R7MYYGP6.mjs";
import {b as he, d as xe, e as ye, g as ge, i as ue, j as we, k as ve, q as Rr, x as _r} from "./chunk-CJWKE2PX.mjs";
import "./chunk-42U43NKG.mjs";
import {
    A as ur,
    Ba as oe,
    Ga as le,
    J as Qr,
    Ja as me,
    Ka as fe,
    La as se,
    Ma as de,
    Na as pe,
    O as Gr,
    Oa as ce,
    Pa as d,
    Q as Jr,
    Ra as I,
    S as wr,
    Sa as Kr,
    Ta as M,
    Ua as _,
    W as $r,
    aa as n,
    c,
    da as nr,
    fa as re,
    g as hr,
    ga as J,
    h as Or,
    ia as vr,
    j as xr,
    ja as y,
    k as Hr,
    l as R,
    la as u,
    m as yr,
    n as Zr,
    na as Yr,
    oa as ee,
    p as gr,
    pa as ae,
    q as E,
    r as Ur,
    t as r,
    ta as te,
    u as o,
    va as ne,
    x as Br,
    xa as F,
    y as zr,
    ya as ie,
    z
} from "./chunk-MQBELU27.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";

function w(e) {
    let {image: t, alt: i, radius: l, padding: s, link: m, newTab: a, style: h, shadowOptions: K} = e, {
            shadowX: f,
            shadowY: O,
            shadowBlur: T,
            shadowColor: S,
            shadowEnabled: L
        } = K,
        V = {display: "flex", placeContent: "center", placeItems: "center", width: "100%", height: "100%", padding: s},
        v = {maxWidth: "100%", maxHeight: "100%", borderRadius: l, boxShadow: L && `${f}px ${O}px ${T}px ${S}`},
        P = t?.src || "https://framerusercontent.com/images/64n4wnVJKDJspLlFZ6DarCP0M4.jpg";
    return m ? r("a", {
        href: m,
        title: i,
        target: a ? "_blank" : "_self",
        style: V,
        children: r("img", {style: v, src: P, srcSet: t?.srcSet, alt: i})
    }) : r("div", {style: V, children: r("img", {style: v, src: P, srcSet: t?.srcSet, alt: i})})
}

w.defaultProps = {
    radius: 10,
    padding: 10,
    alt: "",
    shadowOptions: {shadowEnabled: !1, shadowX: 0, shadowY: 2, shadowBlur: 4, shadowColor: "rgba(0,0,0,0.2)"}
};
nr(w, {
    image: {title: "Image", type: n.ResponsiveImage},
    alt: {type: n.String, title: "Alt", placeholder: "Alt Text"},
    radius: {title: "Radius", type: n.Number, min: 0, max: 100, step: 5, displayStepper: !0},
    padding: {title: "Padding", type: n.Number, min: 0, max: 100, step: 5, displayStepper: !0},
    link: {type: n.Link, title: "Link"},
    newTab: {type: n.Boolean, title: "New Tab", hidden: e => !e.link},
    shadowOptions: {
        type: n.Object,
        title: "Shadow",
        controls: {
            shadowEnabled: {type: n.Boolean, title: "Enable", defaultValue: !1},
            shadowX: {type: n.Number, title: "X", min: 0, defaultValue: 0, hidden: e => !e.shadowEnabled},
            shadowY: {type: n.Number, title: "Y", min: 0, defaultValue: 2, hidden: e => !e.shadowEnabled},
            shadowBlur: {type: n.Number, title: "Blur", min: 0, defaultValue: 4, hidden: e => !e.shadowEnabled},
            shadowColor: {type: n.Color, title: "Color", defaultValue: "rgba(0,0,0,0.2)", hidden: e => !e.shadowEnabled}
        }
    }
});
var X;
(function (e) {
    e.Fill = "fill", e.Contain = "contain", e.Cover = "cover", e.None = "none", e.ScaleDown = "scale-down"
})(X || (X = {}));
var D;
(function (e) {
    e.Video = "Upload", e.Url = "URL"
})(D || (D = {}));

function la(e) {
    let {width: t, height: i, topLeft: l, topRight: s, bottomRight: m, bottomLeft: a, id: h, children: K, ...f} = e;
    return f
}

function ir(e) {
    let t = la(e);
    return r(sa, {...t})
}

function ma(e) {
    let t = re(), i = E(!1), l = xr(a => {
        if (!e.current) return;
        let h = (a === 1 ? .999 : a) * e.current.duration, K = Math.abs(e.current.currentTime - h) < .1;
        e.current.duration > 0 && !K && (e.current.currentTime = h)
    }, []), s = xr(() => {
        !(e.current.currentTime > 0 && e.current.onplaying && !e.current.paused && !e.current.ended && e.current.readyState > e.current.HAVE_CURRENT_DATA) && e.current && !i.current && t && (i.current = !0, e.current.play().catch(h => {
        }).finally(() => i.current = !1))
    }, []), m = xr(() => {
        !e.current || i.current || e.current.pause()
    }, []);
    return {play: s, pause: m, setProgress: l}
}

function fa({playingProp: e, muted: t, loop: i, playsinline: l, controls: s}) {
    let [m] = Ur(() => e), [a, h] = Ur(!1);
    e !== m && !a && h(!0);
    let K = m && t && i && l && !s && !a, f;
    return K ? f = "on-viewport" : m ? f = "on-mount" : f = "no-autoplay", f
}

var Be = !1, sa = Or(function (t) {
    let {
            srcType: i,
            srcFile: l,
            srcUrl: s,
            playing: m,
            muted: a,
            playsinline: h,
            controls: K,
            progress: f,
            objectFit: O,
            backgroundColor: T,
            onSeeked: S,
            onPause: L,
            onPlay: V,
            onEnd: v,
            onClick: P,
            onMouseEnter: $,
            onMouseLeave: C,
            onMouseDown: rr,
            onMouseUp: H,
            poster: er,
            posterEnabled: b,
            startTime: or,
            volume: Z,
            loop: ar
        } = t, Y = E(), sr = ge(), tr = E(null), lr = E(null), q = ue(), dr = we(t),
        W = q ? "no-autoplay" : fa({playingProp: m, muted: a, loop: ar, playsinline: h, controls: K}),
        pr = q ? !0 : Qr(Y), j = or === 100 ? 99.9 : or, {play: A, pause: Q, setProgress: mr} = ma(Y);
    R(() => {
        q || (m ? A() : Q())
    }, [m]), R(() => {
        q || W === "on-viewport" && (pr ? A() : Q())
    }, [W, pr]), R(() => {
        if (!Be) {
            Be = !0;
            return
        }
        let x = Br(f) ? f.get() : (f ?? 0) * .01;
        mr((x ?? 0) || (j ?? 0) / 100)
    }, [j, l, s, f]), R(() => {
        if (Br(f)) return f.on("change", x => mr(x))
    }, [f]), xe(() => {
        tr.current !== null && Y.current && (!lr && ar || !tr.current) && A()
    }), ye(() => {
        Y.current && (lr.current = Y.current.ended, tr.current = Y.current.paused, Q())
    });
    let cr = gr(() => {
        let x = "";
        if (i === D.Url) return s + x;
        if (i === D.Video) return l + x
    }, [i, l, s, j]);
    return R(() => {
        sr && Y.current && W === "on-mount" && setTimeout(() => A(), 50)
    }, []), R(() => {
        Y.current && !a && (Y.current.volume = (Z ?? 0) / 100)
    }, [Z]), r("video", {
        onClick: P,
        onMouseEnter: $,
        onMouseLeave: C,
        onMouseDown: rr,
        onMouseUp: H,
        src: cr,
        loop: ar,
        ref: Y,
        onSeeked: x => S?.(x),
        onPause: x => L?.(x),
        onPlay: x => V?.(x),
        onEnded: x => v?.(x),
        autoPlay: W === "on-mount",
        poster: b ? er : void 0,
        onLoadedData: () => {
            Y.current && (Y.current.currentTime < .3 && mr((j ?? 0) * .01), W === "on-mount" && A())
        },
        controls: K,
        muted: q ? !0 : a,
        playsInline: h,
        style: {
            cursor: P ? "pointer" : "auto",
            width: "100%",
            height: "100%",
            borderRadius: dr,
            display: "block",
            objectFit: O,
            backgroundColor: T,
            objectPosition: "50% 50%"
        }
    })
});
ir.displayName = "Video";
ir.defaultProps = {
    srcType: D.Url,
    srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    srcFile: "",
    posterEnabled: !1,
    controls: !1,
    playing: !0,
    loop: !0,
    muted: !0,
    playsinline: !0,
    restartOnEnter: !1,
    objectFit: X.Cover,
    backgroundColor: "rgba(0,0,0,0)",
    radius: 0,
    volume: 25,
    startTime: 0
};
var da = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;

function pa(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function ca(e) {
    return (e.match(da) || []).map(pa).join(" ")
}

var ze = [X.Cover, X.Fill, X.Contain, X.ScaleDown, X.None];
nr(ir, {
    srcType: {type: n.Enum, displaySegmentedControl: !0, title: "Source", options: [D.Url, D.Video]},
    srcUrl: {
        type: n.String, title: " ", placeholder: "../example.mp4", hidden(e) {
            return e.srcType === D.Video
        }, description: "Hosted video file URL. For YouTube, use the YouTube component."
    },
    srcFile: {
        type: n.File, title: " ", allowedFileTypes: ["mp4"], hidden(e) {
            return e.srcType === D.Url
        }
    },
    playing: {type: n.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No"},
    posterEnabled: {type: n.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No"},
    poster: {type: n.Image, title: " ", hidden: ({posterEnabled: e}) => !e},
    backgroundColor: {type: n.Color, title: "Background"}, ...ve,
    startTime: {title: "Start Time", type: n.Number, min: 0, max: 100, step: .1, unit: "%"},
    loop: {type: n.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No"},
    objectFit: {type: n.Enum, title: "Fit", options: ze, optionTitles: ze.map(ca)},
    controls: {type: n.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide"},
    muted: {type: n.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No"},
    volume: {type: n.Number, max: 100, min: 0, unit: "%", hidden: ({muted: e}) => e},
    onEnd: {type: n.EventHandler},
    onSeeked: {type: n.EventHandler},
    onPause: {type: n.EventHandler},
    onPlay: {type: n.EventHandler}, ...he
});
var ya = M(Er), ga = {Nm51danud: {hover: !0}}, ua = ["Nm51danud"], wa = "framer-SmWVL",
    va = {Nm51danud: "framer-v-b3fhnz"};

function Ya(e, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, e[l])), i
}

var Re = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"},
    Ka = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {src: e} : void 0,
    Ee = ({value: e, children: t}) => {
        let i = Hr(zr), l = e ?? i.transition, s = gr(() => ({...i, transition: l}), [JSON.stringify(l)]);
        return r(zr.Provider, {value: s, children: t})
    }, ba = z(c), ka = ({height: e, id: t, nextProj: i, nextProjImg: l, nextProjLink: s, width: m, ...a}) => {
        var h;
        return {
            ...a,
            fDkW0BSsb: s ?? a.fDkW0BSsb,
            wdiQs7Ntq: l ?? a.wdiQs7Ntq,
            WFKYfODg3: (h = i ?? a.WFKYfODg3) !== null && h !== void 0 ? h : "Next Project"
        }
    }, Ia = (e, t) => t.join("-") + e.layoutDependency, Na = hr(function (e, t) {
        let {activeLocale: i, setLocale: l} = wr(), {
                style: s,
                className: m,
                layoutId: a,
                variant: h,
                WFKYfODg3: K,
                wdiQs7Ntq: f,
                fDkW0BSsb: O,
                ...T
            } = ka(e), {
                baseVariant: S,
                classNames: L,
                gestureVariant: V,
                setGestureState: v,
                setVariant: P,
                variants: $
            } = se({cycleOrder: ua, defaultVariant: "Nm51danud", enabledGestures: ga, variant: h, variantClassNames: va}),
            C = Ia(e, $), rr = E(null), H = yr(), er = [Ir], b = vr();
        return r(ur, {
            id: a ?? H, children: r(ba, {
                animate: $, initial: !1, children: r(Ee, {
                    value: Re, children: r(z.div, {
                        ...T,
                        className: J(wa, ...er, "framer-b3fhnz", m, L),
                        "data-framer-name": "Variant 1",
                        layoutDependency: C,
                        layoutId: "Nm51danud",
                        onHoverEnd: () => v({isHovered: !1}),
                        onHoverStart: () => v({isHovered: !0}),
                        onTap: () => v({isPressed: !1}),
                        onTapCancel: () => v({isPressed: !1}),
                        onTapStart: () => v({isPressed: !0}),
                        ref: t ?? rr,
                        style: {backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))", ...s}, ...Ya({"Nm51danud-hover": {"data-framer-name": void 0}}, S, V),
                        children: r(ne, {
                            href: O, children: r(z.a, {
                                className: "framer-12kisbd framer-vp7zoe",
                                "data-framer-name": "Project",
                                layoutDependency: C,
                                layoutId: "iDjtStKNq",
                                children: o(z.div, {
                                    className: "framer-12wda45",
                                    "data-framer-name": "Post",
                                    layoutDependency: C,
                                    layoutId: "t6Eokodk_",
                                    children: [r(y, {
                                        width: `max((max(${b?.width || "100vw"}, 0px) - 60px) / Infinity, 0px)`,
                                        children: r(z.div, {
                                            className: "framer-49e73w-container",
                                            layoutDependency: C,
                                            layoutId: "H6cHgqMd5-container",
                                            children: r(Er, {
                                                FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                                H7OM7RY2F: "Next project",
                                                height: "100%",
                                                id: "H6cHgqMd5",
                                                ige6Om3tR: "\u2B24",
                                                layoutId: "H6cHgqMd5",
                                                style: {width: "100%"},
                                                variant: "YOUePdSKr",
                                                width: "100%"
                                            })
                                        })
                                    }), r(d, {
                                        __fromCanvasComponent: !0,
                                        children: r(c, {
                                            children: r(z.p, {
                                                className: "framer-styles-preset-yy04ro",
                                                "data-styles-preset": "L542E8JoR",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                children: "text"
                                            })
                                        }),
                                        className: "framer-1iiudq3",
                                        "data-framer-name": "TITLE",
                                        fonts: ["Inter"],
                                        layoutDependency: C,
                                        layoutId: "hfqhqqhjx",
                                        style: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                        text: K,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), r(Ee, {
                                        value: Re,
                                        children: r(ce, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                sizes: `calc(max(${b?.width || "100vw"}, 0px) - 60px)`, ...Ka(f)
                                            },
                                            className: "framer-1rf3fxe",
                                            layoutDependency: C,
                                            layoutId: "UMn8VFpek",
                                            style: {opacity: 0},
                                            variants: {"Nm51danud-hover": {opacity: .27}}
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        })
    }),
    Ca = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SmWVL.framer-vp7zoe, .framer-SmWVL .framer-vp7zoe { display: block; }", ".framer-SmWVL.framer-b3fhnz { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 390px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1440px; }", ".framer-SmWVL .framer-12kisbd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 390px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 1px; }", ".framer-SmWVL .framer-12wda45 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; padding: 20px 30px 20px 30px; position: relative; width: 1px; }", ".framer-SmWVL .framer-49e73w-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-SmWVL .framer-1iiudq3 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-SmWVL .framer-1rf3fxe { bottom: 0px; flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SmWVL.framer-b3fhnz, .framer-SmWVL .framer-12kisbd, .framer-SmWVL .framer-12wda45 { gap: 0px; } .framer-SmWVL.framer-b3fhnz > *, .framer-SmWVL .framer-12kisbd > *, .framer-SmWVL .framer-12wda45 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-SmWVL.framer-b3fhnz > :first-child, .framer-SmWVL .framer-12kisbd > :first-child, .framer-SmWVL .framer-12wda45 > :first-child { margin-left: 0px; } .framer-SmWVL.framer-b3fhnz > :last-child, .framer-SmWVL .framer-12kisbd > :last-child, .framer-SmWVL .framer-12wda45 > :last-child { margin-right: 0px; } }", ".framer-SmWVL.framer-v-b3fhnz.hover.framer-b3fhnz { height: auto; }", ".framer-SmWVL.framer-v-b3fhnz.hover .framer-49e73w-container { order: 0; z-index: 2; }", ".framer-SmWVL.framer-v-b3fhnz.hover .framer-1iiudq3 { order: 1; z-index: 2; }", ".framer-SmWVL.framer-v-b3fhnz.hover .framer-1rf3fxe { order: 2; }", ...kr],
    fr = Yr(Na, Ca, "framer-SmWVL"), Tr = fr;
fr.displayName = "Next Project";
fr.defaultProps = {height: 390, width: 1440};
nr(fr, {
    WFKYfODg3: {defaultValue: "Next Project", displayTextArea: !1, title: "Next Proj", type: n.String},
    wdiQs7Ntq: {title: "Next Proj Img", type: n.ResponsiveImage},
    fDkW0BSsb: {title: "Next Proj Link", type: n.Link}
});
Kr(fr, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
        weight: "400"
    }]
}, ...ya, ..._(br)], {supportsExplicitInterCodegen: !0});
pe.loadFonts([]);
var _e = [],
    De = [".framer-prAvu .framer-styles-preset-1wiavjt:not(.rich-text-wrapper), .framer-prAvu .framer-styles-preset-1wiavjt.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-color: rgba(255, 255, 255, 0.5); --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-link-text-decoration: none; transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s; }"],
    Te = "framer-prAvu";
var Fa = M(Rr), Sa = M(w), La = oe(z.div), Va = M(ir), Ua = M(Tr), Ba = M(_r), za = {
        ECGNly4T7: "(min-width: 1440px)",
        GtQBtdKUY: "(max-width: 809px)",
        I5NVW6ZWj: "(min-width: 810px) and (max-width: 1439px)"
    }, Pr = () => typeof document < "u", Ra = "framer-Yny7K",
    Ea = {ECGNly4T7: "framer-v-1xad9em", GtQBtdKUY: "framer-v-1va2rgl", I5NVW6ZWj: "framer-v-o40i9y"},
    p = e => Array.isArray(e) ? e.length > 0 : e != null && e !== "",
    N = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {src: e} : void 0,
    _a = {damping: 50, delay: 0, mass: 1, stiffness: 300, type: "spring"}, Da = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: _a,
        x: 0,
        y: 0
    }, Ta = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 150
    }, Pa = e => !e, qa = ({value: e}) => te() ? null : r("style", {dangerouslySetInnerHTML: {__html: e}}),
    Wa = {Desktop: "ECGNly4T7", Phone: "GtQBtdKUY", Tablet: "I5NVW6ZWj"},
    Aa = ({height: e, id: t, width: i, ...l}) => ({...l, variant: Wa[l.variant] ?? l.variant ?? "ECGNly4T7"}),
    Ma = hr(function (e, t) {
        let {activeLocale: i, setLocale: l} = wr(), s = Jr(), [m] = me({
            from: {alias: "XF8IlhY4K", data: Se, type: "Collection"},
            select: [{collection: "XF8IlhY4K", name: "BYco3dKWa", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "kjKvm0Y0t",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "Rp1DS6Xfx", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "I5OJyyeYl",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "UZMbSYUHQ", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "QouxsMe87",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "mVeYdcBfj", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "AHuC9Mjvt",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "S3g5m_V8v", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "BwYz3X7xG",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "liNQ9dINw", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "C4bNPOytr",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "S0tkSt1nX", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "yirlnHr2P",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "G1dH53slc", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "kuiMjg9MC",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "u6ardfeNb", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "ZtrtsUBXK",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "SOkDho7HV", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "ppx97ntVk",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "mnM0__5nT", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "BY0q2cJVW",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "a8Kl8HTuh", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "CBR2dapfo",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "A2BPRjexc", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "bmFueJgYK",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "I_150Tuph", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "HLYQyjHQz",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "w6wOHBGZT", type: "Identifier"}, {
                collection: "XF8IlhY4K",
                name: "gqe7lHP5q",
                type: "Identifier"
            }, {collection: "XF8IlhY4K", name: "qS3m9VdBH", type: "Identifier"}],
            where: fe(s, "XF8IlhY4K")
        }), a = g => {
            if (!m) throw new $r(`No data matches path variables: ${JSON.stringify(s)}`);
            return m[g]
        }, {
            style: h,
            className: K,
            layoutId: f,
            variant: O,
            UZMbSYUHQ: T = a("UZMbSYUHQ") ?? "#09F",
            BYco3dKWa: S = a("BYco3dKWa") ?? "",
            QouxsMe87: L = a("QouxsMe87"),
            kjKvm0Y0t: V = a("kjKvm0Y0t") ?? "",
            Rp1DS6Xfx: v = a("Rp1DS6Xfx") ?? "",
            I5OJyyeYl: P = a("I5OJyyeYl") ?? "",
            S3g5m_V8v: $ = a("S3g5m_V8v") ?? "",
            mVeYdcBfj: C = a("mVeYdcBfj") ?? "",
            S0tkSt1nX: rr = a("S0tkSt1nX") ?? "",
            liNQ9dINw: H = a("liNQ9dINw"),
            BwYz3X7xG: er = a("BwYz3X7xG"),
            C4bNPOytr: b = a("C4bNPOytr") ?? "",
            yirlnHr2P: or = a("yirlnHr2P"),
            G1dH53slc: Z = a("G1dH53slc") ?? "",
            kuiMjg9MC: ar = a("kuiMjg9MC"),
            u6ardfeNb: Y = a("u6ardfeNb") ?? "",
            ZtrtsUBXK: sr = a("ZtrtsUBXK"),
            SOkDho7HV: tr = a("SOkDho7HV") ?? "",
            ppx97ntVk: lr = a("ppx97ntVk"),
            mnM0__5nT: q = a("mnM0__5nT"),
            BY0q2cJVW: dr = a("BY0q2cJVW") ?? "",
            a8Kl8HTuh: W = a("a8Kl8HTuh"),
            MNI4wejMUD8o8BEgcl: pr,
            CBR2dapfo: j = a("CBR2dapfo") ?? "",
            A2BPRjexc: A = a("A2BPRjexc"),
            HLYQyjHQz: Q = a("HLYQyjHQz") ?? "",
            bmFueJgYK: mr = a("bmFueJgYK") ?? "",
            I_150Tuph: cr = a("I_150Tuph"),
            qS3m9VdBH: qr = a("qS3m9VdBH") ?? "",
            gqe7lHP5q: x = a("gqe7lHP5q"),
            w6wOHBGZT: Sr = a("w6wOHBGZT") ?? "",
            ...Pe
        } = Aa(e);
        R(() => {
            let g = Dr(m, i);
            if (g.robots) {
                let B = document.querySelector('meta[name="robots"]');
                B ? B.setAttribute("content", g.robots) : (B = document.createElement("meta"), B.setAttribute("name", "robots"), B.setAttribute("content", g.robots), document.head.appendChild(B))
            }
        }, [m, i]), Zr(() => {
            let g = Dr(m, i);
            document.title = g.title || "", g.viewport && document.querySelector('meta[name="viewport"]')?.setAttribute("content", g.viewport)
        }, [m, i]);
        let [k, Oa] = le(O, za, !1), Ha = void 0, qe = J(Ra, ...[Ir, Ue, be, Te, Ne, Fe]), We = E(null), Ae = p(L),
            Me = p(C), Lr = p(rr), Xe = p(H), Oe = p(er), He = p(b), G = () => Pr() ? k !== "GtQBtdKUY" : !0,
            Ze = p(or), Wr = p(Z), Qe = p(ar), Ge = p(sr), Je = p(tr), Ar = p(lr), Vr = Pa(p(H)),
            $e = (g, B) => Pr() ? ["I5NVW6ZWj", "GtQBtdKUY"].includes(k) ? B : g : !0, ra = p(q), Mr = p(dr),
            ea = (g, B) => Pr() ? k === "GtQBtdKUY" ? B : g : !0, aa = p(W), ta = p(j), na = p(A), Xr = p(Q),
            ia = p(cr), Qa = Gr(), oa = yr();
        ee({});
        let U = vr();
        return r(ae.Provider, {
            value: {primaryVariantId: "ECGNly4T7", variantClassNames: Ea}, children: o(ur, {
                id: f ?? oa, children: [o(z.div, {
                    ...Pe,
                    className: J(qe, "framer-1xad9em", K),
                    ref: t ?? We,
                    style: {"--1yae0w": T, ...h},
                    children: [r(y, {
                        height: 210,
                        width: U?.width || "100vw",
                        y: (U?.y || 0) + 0 + 0,
                        children: r(u, {
                            className: "framer-1d10odt-container",
                            children: r(F, {
                                breakpoint: k,
                                overrides: {GtQBtdKUY: {variant: "x39JGlzBF"}, I5NVW6ZWj: {variant: "hYkybGFLQ"}},
                                children: r(Rr, {
                                    height: "100%",
                                    id: "Rdpm3XuOe",
                                    layoutId: "Rdpm3XuOe",
                                    NB8eDwGVP: S,
                                    style: {width: "100%"},
                                    variant: "p1xz__ec1",
                                    width: "100%"
                                })
                            })
                        })
                    }), Ae && r("div", {
                        className: "framer-tcdrh7",
                        "data-framer-name": "Hero",
                        children: r(y, {
                            children: r(u, {
                                className: "framer-1llc4z6-container",
                                children: r(w, {
                                    alt: "",
                                    height: "100%",
                                    id: "PjRZaRCPZ",
                                    image: N(L),
                                    layoutId: "PjRZaRCPZ",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 0,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        })
                    }), r(La, {
                        animate: Da,
                        className: "framer-i23rha",
                        "data-border": !0,
                        "data-framer-appear-id": "i23rha",
                        "data-framer-name": "Cover Section",
                        initial: Ta,
                        optimized: !0,
                        style: {transformPerspective: 1200},
                        children: o("div", {
                            className: "framer-4lx3t0",
                            "data-framer-name": "Project Info",
                            children: [r("div", {
                                className: "framer-vz9g34",
                                "data-framer-name": "Title",
                                children: r(d, {
                                    __fromCanvasComponent: !0,
                                    children: r(c, {
                                        children: r("p", {
                                            className: "framer-styles-preset-yy04ro",
                                            "data-styles-preset": "L542E8JoR",
                                            style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                            children: "Nike Viz System"
                                        })
                                    }),
                                    className: "framer-19if82v",
                                    "data-framer-name": "Project Title",
                                    fonts: ["Inter"],
                                    text: S,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), o("div", {
                                className: "framer-19g93fn", "data-framer-name": "Project Info", children: [r("div", {
                                    className: "framer-ugolzx", "data-framer-name": "Client Info", children: o("div", {
                                        className: "framer-grlpp7", "data-framer-name": "Details", children: [o("div", {
                                            className: "framer-193cs20",
                                            "data-framer-name": "Client",
                                            children: [r("div", {
                                                className: "framer-v9l3dh",
                                                "data-framer-name": "Arrow",
                                                children: r(F, {
                                                    breakpoint: k,
                                                    overrides: {
                                                        GtQBtdKUY: {
                                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 7"><path d="M 0.2 0.233 L 0.2 6.767 L 3.4 3.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                            svgContentId: 11532583091
                                                        },
                                                        I5NVW6ZWj: {
                                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 9"><path d="M 0.3 0.3 L 0.3 8.7 L 5.1 4.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                            svgContentId: 10643060734
                                                        }
                                                    },
                                                    children: r(I, {
                                                        className: "framer-er3olp",
                                                        layout: "position",
                                                        opacity: 1,
                                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.35 0.367 L 0.35 10.633 L 5.95 5.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                        svgContentId: 10302414825,
                                                        withExternalLayout: !0
                                                    })
                                                })
                                            }), r(d, {
                                                __fromCanvasComponent: !0,
                                                children: r(c, {
                                                    children: r("p", {
                                                        className: "framer-styles-preset-1rz7ws2",
                                                        "data-styles-preset": "clc_KhPXn",
                                                        style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                        children: "CLIENT"
                                                    })
                                                }),
                                                className: "framer-11pcial",
                                                "data-framer-name": "Client",
                                                fonts: ["Inter"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), r(d, {
                                                __fromCanvasComponent: !0,
                                                children: r(c, {
                                                    children: r("p", {
                                                        className: "framer-styles-preset-1rz7ws2",
                                                        "data-styles-preset": "clc_KhPXn",
                                                        style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                        children: "Nike"
                                                    })
                                                }),
                                                className: "framer-1s4ao64",
                                                "data-framer-name": "The Client",
                                                fonts: ["Inter"],
                                                text: V,
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), o("div", {
                                            className: "framer-fl38op",
                                            "data-framer-name": "Year",
                                            children: [r("div", {
                                                className: "framer-gv2pcx",
                                                "data-framer-name": "Arrow",
                                                children: r(F, {
                                                    breakpoint: k,
                                                    overrides: {
                                                        GtQBtdKUY: {
                                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 7"><path d="M 0.2 0.233 L 0.2 6.767 L 3.4 3.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                            svgContentId: 11532583091
                                                        },
                                                        I5NVW6ZWj: {
                                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 9"><path d="M 0.3 0.3 L 0.3 8.7 L 5.1 4.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                            svgContentId: 10643060734
                                                        }
                                                    },
                                                    children: r(I, {
                                                        className: "framer-e0ie64",
                                                        layout: "position",
                                                        opacity: 1,
                                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.35 0.367 L 0.35 10.633 L 5.95 5.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                        svgContentId: 10302414825,
                                                        withExternalLayout: !0
                                                    })
                                                })
                                            }), r(d, {
                                                __fromCanvasComponent: !0,
                                                children: r(c, {
                                                    children: r("p", {
                                                        className: "framer-styles-preset-1rz7ws2",
                                                        "data-styles-preset": "clc_KhPXn",
                                                        style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                        children: "YEAR"
                                                    })
                                                }),
                                                className: "framer-16b7kdc",
                                                "data-framer-name": "Year",
                                                fonts: ["Inter"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), r(d, {
                                                __fromCanvasComponent: !0,
                                                children: r(c, {
                                                    children: r("p", {
                                                        className: "framer-styles-preset-1rz7ws2",
                                                        "data-styles-preset": "clc_KhPXn",
                                                        style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                        children: "2022"
                                                    })
                                                }),
                                                className: "framer-ho21vz",
                                                "data-framer-name": "The Year",
                                                fonts: ["Inter"],
                                                text: v,
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), o("div", {
                                            className: "framer-1phk6o9",
                                            "data-framer-name": "Role",
                                            children: [r("div", {
                                                className: "framer-al5du0",
                                                "data-framer-name": "Arrow",
                                                children: r(F, {
                                                    breakpoint: k,
                                                    overrides: {
                                                        GtQBtdKUY: {
                                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 7"><path d="M 0.2 0.233 L 0.2 6.767 L 3.4 3.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                            svgContentId: 11532583091
                                                        },
                                                        I5NVW6ZWj: {
                                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 9"><path d="M 0.3 0.3 L 0.3 8.7 L 5.1 4.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                            svgContentId: 10643060734
                                                        }
                                                    },
                                                    children: r(I, {
                                                        className: "framer-1kgjg51",
                                                        layout: "position",
                                                        opacity: 1,
                                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.35 0.367 L 0.35 10.633 L 5.95 5.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                        svgContentId: 10302414825,
                                                        withExternalLayout: !0
                                                    })
                                                })
                                            }), r(d, {
                                                __fromCanvasComponent: !0,
                                                children: r(c, {
                                                    children: r("p", {
                                                        className: "framer-styles-preset-1rz7ws2",
                                                        "data-styles-preset": "clc_KhPXn",
                                                        style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                        children: "ROLE"
                                                    })
                                                }),
                                                className: "framer-1v0t5ex",
                                                "data-framer-name": "Role",
                                                fonts: ["Inter"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), r(d, {
                                                __fromCanvasComponent: !0,
                                                children: r(c, {
                                                    children: r("p", {
                                                        className: "framer-styles-preset-1rz7ws2",
                                                        "data-styles-preset": "clc_KhPXn",
                                                        style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                        children: "Data Visualization, Branding Data"
                                                    })
                                                }),
                                                className: "framer-1722ug8",
                                                "data-framer-name": "The ROles",
                                                fonts: ["Inter"],
                                                text: P,
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    })
                                }), r("div", {
                                    className: "framer-m0dh0z",
                                    "data-framer-name": "Proj Info",
                                    children: r(d, {
                                        __fromCanvasComponent: !0,
                                        children: $,
                                        className: "framer-19at803",
                                        "data-framer-name": "Desc Text",
                                        fonts: ["Inter"],
                                        stylesPresetsClassNames: {
                                            a: "framer-styles-preset-1wiavjt",
                                            h2: "framer-styles-preset-1ku0vtj",
                                            h3: "framer-styles-preset-1mdhkjv",
                                            p: "framer-styles-preset-7kw3ld"
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        })
                    }), Me && r("div", {
                        className: "framer-14dwrwp",
                        "data-framer-name": "Video",
                        children: r(y, {
                            children: r(u, {
                                className: "framer-98wgl-container",
                                children: r(F, {
                                    breakpoint: k,
                                    overrides: {
                                        GtQBtdKUY: {
                                            borderRadius: 0,
                                            bottomLeftRadius: 0,
                                            bottomRightRadius: 0,
                                            topLeftRadius: 0,
                                            topRightRadius: 0
                                        },
                                        I5NVW6ZWj: {
                                            borderRadius: 0,
                                            bottomLeftRadius: 0,
                                            bottomRightRadius: 0,
                                            objectFit: "scale-down",
                                            topLeftRadius: 0,
                                            topRightRadius: 0
                                        }
                                    },
                                    children: r(ir, {
                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                        borderRadius: 18,
                                        bottomLeftRadius: 18,
                                        bottomRightRadius: 18,
                                        controls: !1,
                                        height: "100%",
                                        id: "vOZ7_BZOG",
                                        isMixedBorderRadius: !1,
                                        layoutId: "vOZ7_BZOG",
                                        loop: !0,
                                        muted: !0,
                                        objectFit: "fill",
                                        playing: !0,
                                        posterEnabled: !1,
                                        srcType: "URL",
                                        srcUrl: C,
                                        startTime: 0,
                                        style: {width: "100%"},
                                        topLeftRadius: 18,
                                        topRightRadius: 18,
                                        volume: 25,
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }), Lr && r("header", {
                        className: "framer-1uuyace",
                        "data-framer-name": "Statement 1",
                        children: r(d, {
                            __fromCanvasComponent: !0,
                            children: rr,
                            className: "framer-eiz94w",
                            "data-framer-name": "Description Details",
                            fonts: ["Inter"],
                            stylesPresetsClassNames: {
                                h1: "framer-styles-preset-9wtaf5",
                                h2: "framer-styles-preset-1vjtjg3",
                                h3: "framer-styles-preset-12lj5ox",
                                p: "framer-styles-preset-1hxyy5i"
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    }), Xe && o("div", {
                        className: "framer-nhph4f", "data-framer-name": "50/50", children: [o("div", {
                            className: "framer-12vknom",
                            "data-framer-name": "L",
                            children: [Oe && r(y, {
                                children: r(u, {
                                    className: "framer-1tsss1k-container",
                                    children: r(w, {
                                        alt: b,
                                        height: "100%",
                                        id: "xT__dDdvl",
                                        image: N(er),
                                        layoutId: "xT__dDdvl",
                                        newTab: !0,
                                        padding: 0,
                                        radius: 18,
                                        shadowOptions: {
                                            shadowBlur: 4,
                                            shadowColor: "rgba(0, 0, 0, 0.2)",
                                            shadowEnabled: !1,
                                            shadowX: 0,
                                            shadowY: 2
                                        },
                                        style: {width: "100%"},
                                        width: "100%"
                                    })
                                })
                            }), He && r("header", {
                                className: "framer-1ecsdas", "data-framer-name": "Card Text", children: o("div", {
                                    className: "framer-z0sig3",
                                    children: [G() && o("div", {
                                        className: "framer-sbgian hidden-1va2rgl",
                                        children: [r(I, {
                                            className: "framer-1nwol0r",
                                            layout: "position",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 8"><path d="M 7 0.5 L 1 7.5 L 13 7.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                            svgContentId: 12571621537,
                                            withExternalLayout: !0
                                        }), r(I, {
                                            className: "framer-i1h3l8",
                                            layout: "position",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 14"><path d="M 6 0 L 0 7 L 12 7 Z" transform="translate(-2.5 3.5) rotate(90 6 3.5)" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                            svgContentId: 12399035008,
                                            withExternalLayout: !0
                                        })]
                                    }), r(d, {
                                        __fromCanvasComponent: !0,
                                        children: r(c, {
                                            children: r("p", {
                                                className: "framer-styles-preset-63ckt7",
                                                "data-styles-preset": "Arz7WxDDM",
                                                children: "Content"
                                            })
                                        }),
                                        className: "framer-ew3u65",
                                        "data-framer-name": "Description Details",
                                        fonts: ["Inter"],
                                        text: b,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })
                            })]
                        }), r("div", {
                            className: "framer-1c49je9",
                            "data-framer-name": "R",
                            children: r(y, {
                                children: r(u, {
                                    className: "framer-1j9t1iu-container",
                                    children: r(w, {
                                        alt: b,
                                        height: "100%",
                                        id: "hSatS8tH5",
                                        image: N(H),
                                        layoutId: "hSatS8tH5",
                                        newTab: !0,
                                        padding: 0,
                                        radius: 18,
                                        shadowOptions: {
                                            shadowBlur: 4,
                                            shadowColor: "rgba(0, 0, 0, 0.2)",
                                            shadowEnabled: !1,
                                            shadowX: 0,
                                            shadowY: 2
                                        },
                                        style: {width: "100%"},
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    }), Ze && o("div", {
                        className: "framer-whr14c",
                        "data-framer-name": "Image 3",
                        children: [r(y, {
                            children: r(u, {
                                className: "framer-17jueyo-container",
                                children: r(w, {
                                    alt: "",
                                    height: "100%",
                                    id: "WIsSObBGs",
                                    image: N(or),
                                    layoutId: "WIsSObBGs",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 0,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        }), Wr && r("header", {
                            className: "framer-ts0s2j",
                            "data-framer-name": "Card Text",
                            children: o("div", {
                                className: "framer-qydaiq",
                                children: [G() && r(I, {
                                    className: "framer-1tfdotx hidden-1va2rgl",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 8"><path d="M 7 0.5 L 1 7.5 L 13 7.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                    svgContentId: 12571621537,
                                    withExternalLayout: !0
                                }), r(d, {
                                    __fromCanvasComponent: !0,
                                    children: r(c, {
                                        children: r("p", {
                                            className: "framer-styles-preset-63ckt7",
                                            "data-styles-preset": "Arz7WxDDM",
                                            children: "Novel but simplified shapes lay the foundation for the design system"
                                        })
                                    }),
                                    className: "framer-1bw9xxr",
                                    "data-framer-name": "Description Details",
                                    fonts: ["Inter"],
                                    text: Z,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })]
                    }), Qe && o("div", {
                        className: "framer-asee0f", "data-framer-name": "Image 4", children: [Wr && r("header", {
                            className: "framer-dcp082", "data-framer-name": "Card Text", children: o("div", {
                                className: "framer-ssba3i",
                                "data-framer-name": "Caption",
                                children: [r(F, {
                                    breakpoint: k,
                                    overrides: {
                                        GtQBtdKUY: {
                                            children: r(c, {
                                                children: r("p", {
                                                    className: "framer-styles-preset-63ckt7",
                                                    "data-styles-preset": "Arz7WxDDM",
                                                    style: {"--framer-text-alignment": "left"},
                                                    children: "More complexity can be shown editorially by abstracting graphs."
                                                })
                                            })
                                        }
                                    },
                                    children: r(d, {
                                        __fromCanvasComponent: !0,
                                        children: r(c, {
                                            children: r("p", {
                                                className: "framer-styles-preset-63ckt7",
                                                "data-styles-preset": "Arz7WxDDM",
                                                children: "More complexity can be shown editorially by abstracting graphs."
                                            })
                                        }),
                                        className: "framer-z4gdwk",
                                        "data-framer-name": "Description Details",
                                        fonts: ["Inter"],
                                        text: Y,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), G() && r(I, {
                                    className: "framer-1xyr9da hidden-1va2rgl",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 14"><path d="M 6 0 L 0 7 L 12 7 Z" transform="translate(-2.5 3.5) rotate(90 6 3.5)" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                    svgContentId: 12399035008,
                                    withExternalLayout: !0
                                })]
                            })
                        }), r(y, {
                            children: r(u, {
                                className: "framer-1cybdw8-container",
                                children: r(w, {
                                    alt: "",
                                    height: "100%",
                                    id: "hVT5pFykp",
                                    image: N(ar),
                                    layoutId: "hVT5pFykp",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 18,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        })]
                    }), Ge && o("div", {
                        className: "framer-1sml4vq",
                        "data-framer-name": "Image 5",
                        children: [r(y, {
                            children: r(u, {
                                className: "framer-9a8vrg-container",
                                children: r(w, {
                                    alt: "",
                                    height: "100%",
                                    id: "V8TukqtNU",
                                    image: N(sr),
                                    layoutId: "V8TukqtNU",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 0,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        }), Je && r("header", {
                            className: "framer-120jvjn",
                            "data-framer-name": "Card Text",
                            children: o("div", {
                                className: "framer-15tsw6",
                                children: [G() && r(I, {
                                    className: "framer-p6pcp8 hidden-1va2rgl",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 8"><path d="M 7 0.5 L 1 7.5 L 13 7.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                    svgContentId: 12571621537,
                                    withExternalLayout: !0
                                }), r(d, {
                                    __fromCanvasComponent: !0,
                                    children: r(c, {
                                        children: r("p", {
                                            className: "framer-styles-preset-63ckt7",
                                            "data-styles-preset": "Arz7WxDDM",
                                            children: "Content"
                                        })
                                    }),
                                    className: "framer-btpdok",
                                    "data-framer-name": "Description Details",
                                    fonts: ["Inter"],
                                    text: tr,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })]
                    }), $e(Ar, Vr) && o("div", {
                        className: J("framer-n141nj", !Ar && "hidden-1xad9em", !Vr && "hidden-o40i9y", !Vr && "hidden-1va2rgl"),
                        "data-framer-name": "Image 6",
                        children: [r("div", {
                            className: "framer-63qe7o",
                            "data-framer-name": "L",
                            children: r(y, {
                                children: r(u, {
                                    className: "framer-1nx4zo-container",
                                    children: r(w, {
                                        alt: "",
                                        height: "100%",
                                        id: "huiDzfbCx",
                                        image: N(lr),
                                        layoutId: "huiDzfbCx",
                                        newTab: !0,
                                        padding: 0,
                                        radius: 18,
                                        shadowOptions: {
                                            shadowBlur: 4,
                                            shadowColor: "rgba(0, 0, 0, 0.2)",
                                            shadowEnabled: !1,
                                            shadowX: 0,
                                            shadowY: 2
                                        },
                                        style: {width: "100%"},
                                        width: "100%"
                                    })
                                })
                            })
                        }), r("div", {
                            className: "framer-1h11dj1",
                            "data-framer-name": "R",
                            children: ra && r(y, {
                                children: r(u, {
                                    className: "framer-gvmjgc-container",
                                    children: r(w, {
                                        alt: "",
                                        height: "100%",
                                        id: "wMzuijjno",
                                        image: N(q),
                                        layoutId: "wMzuijjno",
                                        newTab: !0,
                                        padding: 0,
                                        radius: 18,
                                        shadowOptions: {
                                            shadowBlur: 4,
                                            shadowColor: "rgba(0, 0, 0, 0.2)",
                                            shadowEnabled: !1,
                                            shadowX: 0,
                                            shadowY: 2
                                        },
                                        style: {width: "100%"},
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    }), ea(Mr, Lr) && r("header", {
                        className: J("framer-10c6wmu", !Mr && "hidden-1xad9em", !Lr && "hidden-1va2rgl"),
                        "data-framer-name": "Statement 2",
                        children: r("div", {
                            className: "framer-1w3t6bu",
                            children: r(d, {
                                __fromCanvasComponent: !0,
                                children: dr,
                                className: "framer-1oxrt3p",
                                "data-framer-name": "Description Details",
                                fonts: ["Inter"],
                                stylesPresetsClassNames: {
                                    h1: "framer-styles-preset-9wtaf5",
                                    h2: "framer-styles-preset-1vjtjg3",
                                    h3: "framer-styles-preset-12lj5ox",
                                    p: "framer-styles-preset-yy04ro"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })
                    }), aa && o("div", {
                        className: "framer-4nahg6",
                        "data-framer-name": "Image 7",
                        children: [r(y, {
                            children: r(u, {
                                className: "framer-1e7wosh-container",
                                children: r(w, {
                                    alt: pr,
                                    height: "100%",
                                    id: "kQ0aRGhcB",
                                    image: N(W),
                                    layoutId: "kQ0aRGhcB",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 0,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        }), ta && r("header", {
                            className: "framer-1dej556",
                            "data-framer-name": "Card Text",
                            children: o("div", {
                                className: "framer-j6fmrn",
                                children: [G() && r(I, {
                                    className: "framer-wpbawh hidden-1va2rgl",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 8"><path d="M 7 0.5 L 1 7.5 L 13 7.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                    svgContentId: 12571621537,
                                    withExternalLayout: !0
                                }), r(d, {
                                    __fromCanvasComponent: !0,
                                    children: r(c, {
                                        children: r("p", {
                                            className: "framer-styles-preset-63ckt7",
                                            "data-styles-preset": "Arz7WxDDM",
                                            children: "Content"
                                        })
                                    }),
                                    className: "framer-1h9dlz7",
                                    "data-framer-name": "Description Details",
                                    fonts: ["Inter"],
                                    text: j,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })]
                    }), na && o("div", {
                        className: "framer-1abtw9k",
                        "data-framer-name": "Image 8",
                        children: [r(y, {
                            children: r(u, {
                                className: "framer-1ux51y1-container",
                                children: r(w, {
                                    alt: "",
                                    height: "100%",
                                    id: "rVhymTi2J",
                                    image: N(A),
                                    layoutId: "rVhymTi2J",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 18,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        }), Xr && r("header", {
                            className: "framer-u5m2s",
                            "data-framer-name": "Card Text",
                            children: o("div", {
                                className: "framer-16u3326",
                                children: [G() && r(I, {
                                    className: "framer-wv66gx hidden-1va2rgl",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 14"><path d="M 6 0 L 0 7 L 12 7 Z" transform="translate(-1 3.5) rotate(-90 6 3.5)" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                    svgContentId: 10241560856,
                                    withExternalLayout: !0
                                }), r(d, {
                                    __fromCanvasComponent: !0,
                                    children: r(c, {
                                        children: r("p", {
                                            className: "framer-styles-preset-63ckt7",
                                            "data-styles-preset": "Arz7WxDDM",
                                            children: "Intriguine shapes tell better brand stories."
                                        })
                                    }),
                                    className: "framer-n3dze0",
                                    "data-framer-name": "Description Details",
                                    fonts: ["Inter"],
                                    text: mr,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })]
                    }), ia && o("div", {
                        className: "framer-s8d1er",
                        "data-border": !0,
                        "data-framer-name": "Image 9",
                        children: [r(y, {
                            children: r(u, {
                                className: "framer-pru6hj-container",
                                children: r(w, {
                                    alt: Q,
                                    height: "100%",
                                    id: "oLgkR9Bgy",
                                    image: N(cr),
                                    layoutId: "oLgkR9Bgy",
                                    newTab: !0,
                                    padding: 0,
                                    radius: 0,
                                    shadowOptions: {
                                        shadowBlur: 4,
                                        shadowColor: "rgba(0, 0, 0, 0.2)",
                                        shadowEnabled: !1,
                                        shadowX: 0,
                                        shadowY: 2
                                    },
                                    style: {width: "100%"},
                                    width: "100%"
                                })
                            })
                        }), Xr && r("header", {
                            className: "framer-2aqrjv",
                            "data-framer-name": "Card Text",
                            children: o("div", {
                                className: "framer-1az6q5i",
                                children: [G() && r(I, {
                                    className: "framer-qlec8l hidden-1va2rgl",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 8"><path d="M 7 0.5 L 1 7.5 L 13 7.5 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                    svgContentId: 12571621537,
                                    withExternalLayout: !0
                                }), r(d, {
                                    __fromCanvasComponent: !0,
                                    children: r(c, {
                                        children: r("p", {
                                            className: "framer-styles-preset-63ckt7",
                                            "data-styles-preset": "Arz7WxDDM",
                                            children: "Content"
                                        })
                                    }),
                                    className: "framer-1hzmxpz",
                                    "data-framer-name": "Description Details",
                                    fonts: ["Inter"],
                                    text: Q,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })]
                    }), r(ie, {
                        links: [{href: Sr, implicitPathVariables: void 0}, {
                            href: Sr,
                            implicitPathVariables: void 0
                        }, {href: Sr, implicitPathVariables: void 0}],
                        children: g => r(F, {
                            breakpoint: k,
                            overrides: {GtQBtdKUY: {y: (U?.y || 0) + 0 + 4294}, I5NVW6ZWj: {y: (U?.y || 0) + 0 + 4446}},
                            children: r(y, {
                                height: 390,
                                width: U?.width || "100vw",
                                y: (U?.y || 0) + 0 + 4566,
                                children: r(u, {
                                    className: "framer-129nsf6-container",
                                    children: r(F, {
                                        breakpoint: k,
                                        overrides: {GtQBtdKUY: {fDkW0BSsb: g[2]}, I5NVW6ZWj: {fDkW0BSsb: g[1]}},
                                        children: r(Tr, {
                                            fDkW0BSsb: g[0],
                                            height: "100%",
                                            id: "ZKPOlTtBd",
                                            layoutId: "ZKPOlTtBd",
                                            style: {width: "100%"},
                                            wdiQs7Ntq: N(x),
                                            WFKYfODg3: qr,
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        })
                    }), r(F, {
                        breakpoint: k,
                        overrides: {GtQBtdKUY: {y: (U?.y || 0) + 0 + 4704}, I5NVW6ZWj: {y: (U?.y || 0) + 0 + 4836}},
                        children: r(y, {
                            height: 947,
                            width: U?.width || "100vw",
                            y: (U?.y || 0) + 0 + 4956,
                            children: r(u, {
                                className: "framer-usd5na-container",
                                children: r(F, {
                                    breakpoint: k,
                                    overrides: {GtQBtdKUY: {variant: "mt31XYL_Q"}, I5NVW6ZWj: {variant: "PqkgxzN0r"}},
                                    children: r(_r, {
                                        CIKCwTqeQ: "var(--token-8649cc0c-a3f1-4b5f-b6f4-2d62229c07ab, rgb(231, 229, 221))",
                                        height: "100%",
                                        id: "gODyhcDi5",
                                        layoutId: "gODyhcDi5",
                                        style: {width: "100%"},
                                        variant: "YyQwSl1BQ",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    })]
                }), r(qa, {value: `html body { background: ${de(T)}; }`}), r("div", {id: "overlay"})]
            })
        })
    }),
    Xa = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Yny7K.framer-1bdyxvl, .framer-Yny7K .framer-1bdyxvl { display: block; }", ".framer-Yny7K.framer-1xad9em { align-content: center; align-items: center; background-color: var(--1yae0w); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }", ".framer-Yny7K .framer-1d10odt-container { flex: none; height: auto; position: relative; width: 100%; z-index: 10; }", ".framer-Yny7K .framer-tcdrh7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-1llc4z6-container, .framer-Yny7K .framer-1tsss1k-container, .framer-Yny7K .framer-1j9t1iu-container, .framer-Yny7K .framer-17jueyo-container, .framer-Yny7K .framer-9a8vrg-container, .framer-Yny7K .framer-1nx4zo-container, .framer-Yny7K .framer-gvmjgc-container, .framer-Yny7K .framer-1e7wosh-container, .framer-Yny7K .framer-pru6hj-container, .framer-Yny7K .framer-129nsf6-container, .framer-Yny7K .framer-usd5na-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-Yny7K .framer-i23rha { --border-bottom-width: 1px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-4lx3t0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 30px 30px 50px 30px; position: relative; width: 100%; }", ".framer-Yny7K .framer-vz9g34 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-19if82v, .framer-Yny7K .framer-eiz94w, .framer-Yny7K .framer-ew3u65, .framer-Yny7K .framer-1bw9xxr, .framer-Yny7K .framer-btpdok, .framer-Yny7K .framer-1oxrt3p, .framer-Yny7K .framer-1h9dlz7, .framer-Yny7K .framer-1hzmxpz { --framer-paragraph-spacing: 32px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-Yny7K .framer-19g93fn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-ugolzx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 50%; }", ".framer-Yny7K .framer-grlpp7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 6px; position: relative; width: 100%; }", ".framer-Yny7K .framer-193cs20, .framer-Yny7K .framer-fl38op, .framer-Yny7K .framer-1phk6o9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-v9l3dh, .framer-Yny7K .framer-gv2pcx, .framer-Yny7K .framer-al5du0 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 6px 0px 0px 0px; position: relative; width: min-content; }", ".framer-Yny7K .framer-er3olp, .framer-Yny7K .framer-e0ie64, .framer-Yny7K .framer-1kgjg51 { flex: none; height: 11px; position: relative; width: 7px; }", ".framer-Yny7K .framer-11pcial, .framer-Yny7K .framer-16b7kdc, .framer-Yny7K .framer-1v0t5ex { --framer-paragraph-spacing: 32px; flex: 0.16 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-Yny7K .framer-1s4ao64, .framer-Yny7K .framer-ho21vz, .framer-Yny7K .framer-1722ug8 { --framer-paragraph-spacing: 32px; flex: 0.6 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-Yny7K .framer-m0dh0z { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-19at803 { --framer-paragraph-spacing: 40px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-Yny7K .framer-14dwrwp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 0px 40px 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-98wgl-container { flex: none; height: auto; position: relative; width: 80%; }", ".framer-Yny7K .framer-1uuyace { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 100px 0px 120px 0px; position: relative; width: 60%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-nhph4f, .framer-Yny7K .framer-n141nj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 80px 80px 80px; position: relative; width: 100%; }", ".framer-Yny7K .framer-12vknom { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-1ecsdas { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-z0sig3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-sbgian { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Yny7K .framer-1nwol0r, .framer-Yny7K .framer-1tfdotx, .framer-Yny7K .framer-p6pcp8, .framer-Yny7K .framer-wpbawh, .framer-Yny7K .framer-qlec8l { flex: none; height: 8px; position: relative; width: 14px; }", ".framer-Yny7K .framer-i1h3l8, .framer-Yny7K .framer-1xyr9da { flex: none; height: 14px; position: relative; width: 8px; }", ".framer-Yny7K .framer-1c49je9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-whr14c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 80px 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-ts0s2j { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 30px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-qydaiq, .framer-Yny7K .framer-15tsw6, .framer-Yny7K .framer-j6fmrn, .framer-Yny7K .framer-1az6q5i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 33%; }", ".framer-Yny7K .framer-asee0f { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 30px 80px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-dcp082 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-ssba3i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-z4gdwk, .framer-Yny7K .framer-n3dze0 { --framer-paragraph-spacing: 32px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-Yny7K .framer-1cybdw8-container, .framer-Yny7K .framer-1ux51y1-container { flex: 2 0 0px; height: auto; position: relative; width: 1px; }", ".framer-Yny7K .framer-1sml4vq { align-content: center; align-items: center; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 80px 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-120jvjn { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 80px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-63qe7o { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-1h11dj1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 1050px; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-10c6wmu { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 80px 0px; position: relative; width: 60%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-1w3t6bu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-4nahg6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 80px 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-1dej556 { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-1abtw9k { align-content: flex-end; align-items: flex-end; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 80px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-u5m2s { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-Yny7K .framer-16u3326 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-Yny7K .framer-wv66gx { flex: none; height: 14px; position: relative; width: 10px; }", ".framer-Yny7K .framer-s8d1er { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 80px 0px; position: relative; width: 100%; }", ".framer-Yny7K .framer-2aqrjv { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Yny7K.framer-1xad9em, .framer-Yny7K .framer-tcdrh7, .framer-Yny7K .framer-i23rha, .framer-Yny7K .framer-4lx3t0, .framer-Yny7K .framer-vz9g34, .framer-Yny7K .framer-19g93fn, .framer-Yny7K .framer-ugolzx, .framer-Yny7K .framer-grlpp7, .framer-Yny7K .framer-193cs20, .framer-Yny7K .framer-v9l3dh, .framer-Yny7K .framer-fl38op, .framer-Yny7K .framer-gv2pcx, .framer-Yny7K .framer-1phk6o9, .framer-Yny7K .framer-al5du0, .framer-Yny7K .framer-m0dh0z, .framer-Yny7K .framer-14dwrwp, .framer-Yny7K .framer-1uuyace, .framer-Yny7K .framer-nhph4f, .framer-Yny7K .framer-12vknom, .framer-Yny7K .framer-1ecsdas, .framer-Yny7K .framer-z0sig3, .framer-Yny7K .framer-sbgian, .framer-Yny7K .framer-1c49je9, .framer-Yny7K .framer-whr14c, .framer-Yny7K .framer-ts0s2j, .framer-Yny7K .framer-qydaiq, .framer-Yny7K .framer-asee0f, .framer-Yny7K .framer-dcp082, .framer-Yny7K .framer-ssba3i, .framer-Yny7K .framer-1sml4vq, .framer-Yny7K .framer-120jvjn, .framer-Yny7K .framer-15tsw6, .framer-Yny7K .framer-n141nj, .framer-Yny7K .framer-63qe7o, .framer-Yny7K .framer-1h11dj1, .framer-Yny7K .framer-10c6wmu, .framer-Yny7K .framer-1w3t6bu, .framer-Yny7K .framer-4nahg6, .framer-Yny7K .framer-1dej556, .framer-Yny7K .framer-j6fmrn, .framer-Yny7K .framer-1abtw9k, .framer-Yny7K .framer-u5m2s, .framer-Yny7K .framer-16u3326, .framer-Yny7K .framer-s8d1er, .framer-Yny7K .framer-2aqrjv, .framer-Yny7K .framer-1az6q5i { gap: 0px; } .framer-Yny7K.framer-1xad9em > *, .framer-Yny7K .framer-tcdrh7 > *, .framer-Yny7K .framer-i23rha > *, .framer-Yny7K .framer-m0dh0z > *, .framer-Yny7K .framer-1uuyace > *, .framer-Yny7K .framer-1ecsdas > *, .framer-Yny7K .framer-ts0s2j > *, .framer-Yny7K .framer-dcp082 > *, .framer-Yny7K .framer-120jvjn > *, .framer-Yny7K .framer-10c6wmu > *, .framer-Yny7K .framer-1dej556 > *, .framer-Yny7K .framer-2aqrjv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Yny7K.framer-1xad9em > :first-child, .framer-Yny7K .framer-tcdrh7 > :first-child, .framer-Yny7K .framer-i23rha > :first-child, .framer-Yny7K .framer-4lx3t0 > :first-child, .framer-Yny7K .framer-vz9g34 > :first-child, .framer-Yny7K .framer-ugolzx > :first-child, .framer-Yny7K .framer-grlpp7 > :first-child, .framer-Yny7K .framer-m0dh0z > :first-child, .framer-Yny7K .framer-14dwrwp > :first-child, .framer-Yny7K .framer-1uuyace > :first-child, .framer-Yny7K .framer-12vknom > :first-child, .framer-Yny7K .framer-1ecsdas > :first-child, .framer-Yny7K .framer-z0sig3 > :first-child, .framer-Yny7K .framer-1c49je9 > :first-child, .framer-Yny7K .framer-whr14c > :first-child, .framer-Yny7K .framer-ts0s2j > :first-child, .framer-Yny7K .framer-qydaiq > :first-child, .framer-Yny7K .framer-dcp082 > :first-child, .framer-Yny7K .framer-1sml4vq > :first-child, .framer-Yny7K .framer-120jvjn > :first-child, .framer-Yny7K .framer-15tsw6 > :first-child, .framer-Yny7K .framer-63qe7o > :first-child, .framer-Yny7K .framer-1h11dj1 > :first-child, .framer-Yny7K .framer-10c6wmu > :first-child, .framer-Yny7K .framer-1w3t6bu > :first-child, .framer-Yny7K .framer-4nahg6 > :first-child, .framer-Yny7K .framer-1dej556 > :first-child, .framer-Yny7K .framer-j6fmrn > :first-child, .framer-Yny7K .framer-s8d1er > :first-child, .framer-Yny7K .framer-2aqrjv > :first-child, .framer-Yny7K .framer-1az6q5i > :first-child { margin-top: 0px; } .framer-Yny7K.framer-1xad9em > :last-child, .framer-Yny7K .framer-tcdrh7 > :last-child, .framer-Yny7K .framer-i23rha > :last-child, .framer-Yny7K .framer-4lx3t0 > :last-child, .framer-Yny7K .framer-vz9g34 > :last-child, .framer-Yny7K .framer-ugolzx > :last-child, .framer-Yny7K .framer-grlpp7 > :last-child, .framer-Yny7K .framer-m0dh0z > :last-child, .framer-Yny7K .framer-14dwrwp > :last-child, .framer-Yny7K .framer-1uuyace > :last-child, .framer-Yny7K .framer-12vknom > :last-child, .framer-Yny7K .framer-1ecsdas > :last-child, .framer-Yny7K .framer-z0sig3 > :last-child, .framer-Yny7K .framer-1c49je9 > :last-child, .framer-Yny7K .framer-whr14c > :last-child, .framer-Yny7K .framer-ts0s2j > :last-child, .framer-Yny7K .framer-qydaiq > :last-child, .framer-Yny7K .framer-dcp082 > :last-child, .framer-Yny7K .framer-1sml4vq > :last-child, .framer-Yny7K .framer-120jvjn > :last-child, .framer-Yny7K .framer-15tsw6 > :last-child, .framer-Yny7K .framer-63qe7o > :last-child, .framer-Yny7K .framer-1h11dj1 > :last-child, .framer-Yny7K .framer-10c6wmu > :last-child, .framer-Yny7K .framer-1w3t6bu > :last-child, .framer-Yny7K .framer-4nahg6 > :last-child, .framer-Yny7K .framer-1dej556 > :last-child, .framer-Yny7K .framer-j6fmrn > :last-child, .framer-Yny7K .framer-s8d1er > :last-child, .framer-Yny7K .framer-2aqrjv > :last-child, .framer-Yny7K .framer-1az6q5i > :last-child { margin-bottom: 0px; } .framer-Yny7K .framer-4lx3t0 > *, .framer-Yny7K .framer-whr14c > *, .framer-Yny7K .framer-1sml4vq > *, .framer-Yny7K .framer-4nahg6 > *, .framer-Yny7K .framer-s8d1er > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-Yny7K .framer-vz9g34 > *, .framer-Yny7K .framer-14dwrwp > *, .framer-Yny7K .framer-1c49je9 > *, .framer-Yny7K .framer-63qe7o > *, .framer-Yny7K .framer-1h11dj1 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Yny7K .framer-19g93fn > *, .framer-Yny7K .framer-u5m2s > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Yny7K .framer-19g93fn > :first-child, .framer-Yny7K .framer-193cs20 > :first-child, .framer-Yny7K .framer-v9l3dh > :first-child, .framer-Yny7K .framer-fl38op > :first-child, .framer-Yny7K .framer-gv2pcx > :first-child, .framer-Yny7K .framer-1phk6o9 > :first-child, .framer-Yny7K .framer-al5du0 > :first-child, .framer-Yny7K .framer-nhph4f > :first-child, .framer-Yny7K .framer-sbgian > :first-child, .framer-Yny7K .framer-asee0f > :first-child, .framer-Yny7K .framer-ssba3i > :first-child, .framer-Yny7K .framer-n141nj > :first-child, .framer-Yny7K .framer-1abtw9k > :first-child, .framer-Yny7K .framer-u5m2s > :first-child, .framer-Yny7K .framer-16u3326 > :first-child { margin-left: 0px; } .framer-Yny7K .framer-19g93fn > :last-child, .framer-Yny7K .framer-193cs20 > :last-child, .framer-Yny7K .framer-v9l3dh > :last-child, .framer-Yny7K .framer-fl38op > :last-child, .framer-Yny7K .framer-gv2pcx > :last-child, .framer-Yny7K .framer-1phk6o9 > :last-child, .framer-Yny7K .framer-al5du0 > :last-child, .framer-Yny7K .framer-nhph4f > :last-child, .framer-Yny7K .framer-sbgian > :last-child, .framer-Yny7K .framer-asee0f > :last-child, .framer-Yny7K .framer-ssba3i > :last-child, .framer-Yny7K .framer-n141nj > :last-child, .framer-Yny7K .framer-1abtw9k > :last-child, .framer-Yny7K .framer-u5m2s > :last-child, .framer-Yny7K .framer-16u3326 > :last-child { margin-right: 0px; } .framer-Yny7K .framer-ugolzx > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-Yny7K .framer-grlpp7 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Yny7K .framer-193cs20 > *, .framer-Yny7K .framer-fl38op > *, .framer-Yny7K .framer-1phk6o9 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-Yny7K .framer-v9l3dh > *, .framer-Yny7K .framer-gv2pcx > *, .framer-Yny7K .framer-al5du0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Yny7K .framer-nhph4f > *, .framer-Yny7K .framer-n141nj > * { margin: 0px; margin-left: calc(120px / 2); margin-right: calc(120px / 2); } .framer-Yny7K .framer-12vknom > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Yny7K .framer-z0sig3 > *, .framer-Yny7K .framer-qydaiq > *, .framer-Yny7K .framer-15tsw6 > *, .framer-Yny7K .framer-1w3t6bu > *, .framer-Yny7K .framer-j6fmrn > *, .framer-Yny7K .framer-1az6q5i > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-Yny7K .framer-sbgian > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Yny7K .framer-asee0f > *, .framer-Yny7K .framer-1abtw9k > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-Yny7K .framer-ssba3i > *, .framer-Yny7K .framer-16u3326 > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } }", ...kr, ...Ve, ...Ke, ...De, ...Ie, ...je, '.framer-Yny7K[data-border="true"]::after, .framer-Yny7K [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@media (min-width: 810px) and (max-width: 1439px) { .framer-Yny7K.framer-1xad9em { width: 810px; } .framer-Yny7K .framer-4lx3t0 { gap: 26px; padding: 20px 30px 20px 30px; } .framer-Yny7K .framer-19g93fn { padding: 0px 0px 20px 0px; } .framer-Yny7K .framer-ugolzx { flex: 1 0 0px; gap: 25px; width: 1px; } .framer-Yny7K .framer-grlpp7 { gap: 8px; padding: 0px 0px 0px 4px; } .framer-Yny7K .framer-193cs20, .framer-Yny7K .framer-fl38op, .framer-Yny7K .framer-1phk6o9 { gap: 30px; } .framer-Yny7K .framer-v9l3dh, .framer-Yny7K .framer-gv2pcx, .framer-Yny7K .framer-al5du0 { padding: 4px 0px 0px 0px; } .framer-Yny7K .framer-er3olp, .framer-Yny7K .framer-e0ie64, .framer-Yny7K .framer-1kgjg51 { height: 9px; width: 6px; } .framer-Yny7K .framer-11pcial, .framer-Yny7K .framer-16b7kdc, .framer-Yny7K .framer-1v0t5ex { flex: 0.3 0 0px; } .framer-Yny7K .framer-14dwrwp { align-content: flex-start; align-items: flex-start; flex-direction: row; gap: 0px; justify-content: flex-start; } .framer-Yny7K .framer-98wgl-container { flex: 1 0 0px; width: 1px; } .framer-Yny7K .framer-1uuyace { padding: 50px 0px 80px 0px; width: 80%; } .framer-Yny7K .framer-nhph4f { gap: 60px; padding: 40px 40px 80px 40px; } .framer-Yny7K .framer-12vknom { gap: 40px; } .framer-Yny7K .framer-1c49je9 { padding: 100px 0px 0px 0px; } .framer-Yny7K .framer-asee0f { padding: 0px 30px 80px 40px; } .framer-Yny7K .framer-n141nj { gap: 60px; padding: 0px 40px 80px 40px; } .framer-Yny7K .framer-63qe7o { padding: 140px 0px 0px 0px; } .framer-Yny7K .framer-10c6wmu { width: 80%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Yny7K .framer-4lx3t0, .framer-Yny7K .framer-ugolzx, .framer-Yny7K .framer-grlpp7, .framer-Yny7K .framer-193cs20, .framer-Yny7K .framer-fl38op, .framer-Yny7K .framer-1phk6o9, .framer-Yny7K .framer-14dwrwp, .framer-Yny7K .framer-nhph4f, .framer-Yny7K .framer-12vknom, .framer-Yny7K .framer-n141nj { gap: 0px; } .framer-Yny7K .framer-4lx3t0 > * { margin: 0px; margin-bottom: calc(26px / 2); margin-top: calc(26px / 2); } .framer-Yny7K .framer-4lx3t0 > :first-child, .framer-Yny7K .framer-ugolzx > :first-child, .framer-Yny7K .framer-grlpp7 > :first-child, .framer-Yny7K .framer-12vknom > :first-child { margin-top: 0px; } .framer-Yny7K .framer-4lx3t0 > :last-child, .framer-Yny7K .framer-ugolzx > :last-child, .framer-Yny7K .framer-grlpp7 > :last-child, .framer-Yny7K .framer-12vknom > :last-child { margin-bottom: 0px; } .framer-Yny7K .framer-ugolzx > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-Yny7K .framer-grlpp7 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Yny7K .framer-193cs20 > *, .framer-Yny7K .framer-fl38op > *, .framer-Yny7K .framer-1phk6o9 > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-Yny7K .framer-193cs20 > :first-child, .framer-Yny7K .framer-fl38op > :first-child, .framer-Yny7K .framer-1phk6o9 > :first-child, .framer-Yny7K .framer-14dwrwp > :first-child, .framer-Yny7K .framer-nhph4f > :first-child, .framer-Yny7K .framer-n141nj > :first-child { margin-left: 0px; } .framer-Yny7K .framer-193cs20 > :last-child, .framer-Yny7K .framer-fl38op > :last-child, .framer-Yny7K .framer-1phk6o9 > :last-child, .framer-Yny7K .framer-14dwrwp > :last-child, .framer-Yny7K .framer-nhph4f > :last-child, .framer-Yny7K .framer-n141nj > :last-child { margin-right: 0px; } .framer-Yny7K .framer-14dwrwp > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Yny7K .framer-nhph4f > *, .framer-Yny7K .framer-n141nj > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-Yny7K .framer-12vknom > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}", "@media (max-width: 809px) { .framer-Yny7K.framer-1xad9em { gap: 20px; width: 390px; } .framer-Yny7K .framer-tcdrh7 { padding: 12px 0px 0px 0px; } .framer-Yny7K .framer-4lx3t0 { gap: 30px; padding: 14px 30px 14px 30px; } .framer-Yny7K .framer-19g93fn { flex-direction: column; gap: 20px; padding: 0px 0px 20px 0px; } .framer-Yny7K .framer-ugolzx { gap: 12px; width: 100%; } .framer-Yny7K .framer-grlpp7 { gap: 8px; padding: 0px 0px 0px 3px; } .framer-Yny7K .framer-193cs20, .framer-Yny7K .framer-fl38op, .framer-Yny7K .framer-1phk6o9 { gap: 12px; } .framer-Yny7K .framer-v9l3dh, .framer-Yny7K .framer-gv2pcx, .framer-Yny7K .framer-al5du0 { padding: 4px 0px 0px 0px; } .framer-Yny7K .framer-er3olp, .framer-Yny7K .framer-e0ie64, .framer-Yny7K .framer-1kgjg51 { height: 7px; width: 4px; } .framer-Yny7K .framer-m0dh0z, .framer-Yny7K .framer-63qe7o, .framer-Yny7K .framer-1ux51y1-container { flex: none; width: 100%; } .framer-Yny7K .framer-14dwrwp { padding: 40px 0px 20px 0px; } .framer-Yny7K .framer-98wgl-container { width: 100%; } .framer-Yny7K .framer-1uuyace { padding: 30px 20px 20px 20px; width: 100%; } .framer-Yny7K .framer-nhph4f { flex-direction: column; gap: 20px; justify-content: flex-start; padding: 20px 10px 0px 10px; } .framer-Yny7K .framer-12vknom { align-content: flex-start; align-items: flex-start; flex: none; gap: 12px; width: 100%; } .framer-Yny7K .framer-1ecsdas { padding: 0px 10px 0px 10px; } .framer-Yny7K .framer-z0sig3 { align-content: flex-start; align-items: flex-start; gap: 6px; width: 70%; } .framer-Yny7K .framer-1c49je9, .framer-Yny7K .framer-1h11dj1 { flex: none; padding: 0px; width: 100%; } .framer-Yny7K .framer-whr14c { gap: 12px; padding: 0px; } .framer-Yny7K .framer-ts0s2j, .framer-Yny7K .framer-120jvjn { align-content: flex-start; align-items: flex-start; padding: 0px 20px 0px 20px; } .framer-Yny7K .framer-qydaiq, .framer-Yny7K .framer-15tsw6, .framer-Yny7K .framer-j6fmrn, .framer-Yny7K .framer-1az6q5i { gap: 6px; width: 70%; } .framer-Yny7K .framer-asee0f { border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex-direction: column; gap: 12px; padding: 0px 10px 0px 10px; } .framer-Yny7K .framer-dcp082 { flex: none; order: 1; padding: 0px 10px 0px 10px; width: 100%; } .framer-Yny7K .framer-ssba3i { flex-direction: column; gap: 6px; width: 70%; } .framer-Yny7K .framer-z4gdwk { flex: none; order: 1; width: 100%; } .framer-Yny7K .framer-1cybdw8-container { flex: none; order: 0; width: 100%; } .framer-Yny7K .framer-1sml4vq { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; gap: 12px; padding: 0px; } .framer-Yny7K .framer-n141nj { flex-direction: column; gap: 40px; padding: 20px 10px 20px 10px; } .framer-Yny7K .framer-1nx4zo-container, .framer-Yny7K .framer-gvmjgc-container { width: 80%; } .framer-Yny7K .framer-10c6wmu { padding: 0px 20px 20px 20px; width: 100%; } .framer-Yny7K .framer-4nahg6 { gap: 12px; padding: 0px 0px 20px 0px; } .framer-Yny7K .framer-1dej556 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 0px 20px 0px 20px; } .framer-Yny7K .framer-1abtw9k { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; flex-direction: column; gap: 12px; padding: 0px 10px 20px 10px; } .framer-Yny7K .framer-u5m2s { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; flex: none; padding: 0px 0px 0px 10px; width: 100%; } .framer-Yny7K .framer-16u3326 { flex: 0.6 0 0px; flex-direction: column; gap: 6px; } .framer-Yny7K .framer-n3dze0 { flex: none; order: 2; width: 100%; } .framer-Yny7K .framer-s8d1er { gap: 12px; padding: 0px 0px 40px 0px; } .framer-Yny7K .framer-2aqrjv { padding: 0px 20px 0px 20px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Yny7K.framer-1xad9em, .framer-Yny7K .framer-4lx3t0, .framer-Yny7K .framer-19g93fn, .framer-Yny7K .framer-ugolzx, .framer-Yny7K .framer-grlpp7, .framer-Yny7K .framer-193cs20, .framer-Yny7K .framer-fl38op, .framer-Yny7K .framer-1phk6o9, .framer-Yny7K .framer-nhph4f, .framer-Yny7K .framer-12vknom, .framer-Yny7K .framer-z0sig3, .framer-Yny7K .framer-whr14c, .framer-Yny7K .framer-qydaiq, .framer-Yny7K .framer-asee0f, .framer-Yny7K .framer-ssba3i, .framer-Yny7K .framer-1sml4vq, .framer-Yny7K .framer-15tsw6, .framer-Yny7K .framer-n141nj, .framer-Yny7K .framer-4nahg6, .framer-Yny7K .framer-j6fmrn, .framer-Yny7K .framer-1abtw9k, .framer-Yny7K .framer-16u3326, .framer-Yny7K .framer-s8d1er, .framer-Yny7K .framer-1az6q5i { gap: 0px; } .framer-Yny7K.framer-1xad9em > *, .framer-Yny7K .framer-19g93fn > *, .framer-Yny7K .framer-nhph4f > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Yny7K.framer-1xad9em > :first-child, .framer-Yny7K .framer-4lx3t0 > :first-child, .framer-Yny7K .framer-19g93fn > :first-child, .framer-Yny7K .framer-ugolzx > :first-child, .framer-Yny7K .framer-grlpp7 > :first-child, .framer-Yny7K .framer-nhph4f > :first-child, .framer-Yny7K .framer-12vknom > :first-child, .framer-Yny7K .framer-z0sig3 > :first-child, .framer-Yny7K .framer-whr14c > :first-child, .framer-Yny7K .framer-qydaiq > :first-child, .framer-Yny7K .framer-asee0f > :first-child, .framer-Yny7K .framer-ssba3i > :first-child, .framer-Yny7K .framer-1sml4vq > :first-child, .framer-Yny7K .framer-15tsw6 > :first-child, .framer-Yny7K .framer-n141nj > :first-child, .framer-Yny7K .framer-4nahg6 > :first-child, .framer-Yny7K .framer-j6fmrn > :first-child, .framer-Yny7K .framer-1abtw9k > :first-child, .framer-Yny7K .framer-16u3326 > :first-child, .framer-Yny7K .framer-s8d1er > :first-child, .framer-Yny7K .framer-1az6q5i > :first-child { margin-top: 0px; } .framer-Yny7K.framer-1xad9em > :last-child, .framer-Yny7K .framer-4lx3t0 > :last-child, .framer-Yny7K .framer-19g93fn > :last-child, .framer-Yny7K .framer-ugolzx > :last-child, .framer-Yny7K .framer-grlpp7 > :last-child, .framer-Yny7K .framer-nhph4f > :last-child, .framer-Yny7K .framer-12vknom > :last-child, .framer-Yny7K .framer-z0sig3 > :last-child, .framer-Yny7K .framer-whr14c > :last-child, .framer-Yny7K .framer-qydaiq > :last-child, .framer-Yny7K .framer-asee0f > :last-child, .framer-Yny7K .framer-ssba3i > :last-child, .framer-Yny7K .framer-1sml4vq > :last-child, .framer-Yny7K .framer-15tsw6 > :last-child, .framer-Yny7K .framer-n141nj > :last-child, .framer-Yny7K .framer-4nahg6 > :last-child, .framer-Yny7K .framer-j6fmrn > :last-child, .framer-Yny7K .framer-1abtw9k > :last-child, .framer-Yny7K .framer-16u3326 > :last-child, .framer-Yny7K .framer-s8d1er > :last-child, .framer-Yny7K .framer-1az6q5i > :last-child { margin-bottom: 0px; } .framer-Yny7K .framer-4lx3t0 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Yny7K .framer-ugolzx > *, .framer-Yny7K .framer-12vknom > *, .framer-Yny7K .framer-whr14c > *, .framer-Yny7K .framer-asee0f > *, .framer-Yny7K .framer-1sml4vq > *, .framer-Yny7K .framer-4nahg6 > *, .framer-Yny7K .framer-1abtw9k > *, .framer-Yny7K .framer-s8d1er > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-Yny7K .framer-grlpp7 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Yny7K .framer-193cs20 > *, .framer-Yny7K .framer-fl38op > *, .framer-Yny7K .framer-1phk6o9 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-Yny7K .framer-193cs20 > :first-child, .framer-Yny7K .framer-fl38op > :first-child, .framer-Yny7K .framer-1phk6o9 > :first-child { margin-left: 0px; } .framer-Yny7K .framer-193cs20 > :last-child, .framer-Yny7K .framer-fl38op > :last-child, .framer-Yny7K .framer-1phk6o9 > :last-child { margin-right: 0px; } .framer-Yny7K .framer-z0sig3 > *, .framer-Yny7K .framer-qydaiq > *, .framer-Yny7K .framer-ssba3i > *, .framer-Yny7K .framer-15tsw6 > *, .framer-Yny7K .framer-j6fmrn > *, .framer-Yny7K .framer-16u3326 > *, .framer-Yny7K .framer-1az6q5i > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-Yny7K .framer-n141nj > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}"],
    Fr = Yr(Ma, Xa, "framer-Yny7K"), St = Fr;
Fr.displayName = "Work";
Fr.defaultProps = {height: 11306, width: 1440};
Kr(Fr, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...Fa, ...Sa, ...Va, ...Ua, ...Ba, ..._(br), ..._(Le), ..._(Ye), ..._(_e), ..._(ke), ..._(Ce)], {supportsExplicitInterCodegen: !0});
var Lt = {
    exports: {
        Props: {type: "tsType", annotations: {framerContractVersion: "1"}},
        default: {
            type: "reactComponent",
            name: "FramerXF8IlhY4K",
            slots: [],
            annotations: {
                framerContractVersion: "1",
                framerComponentViewportWidth: "true",
                framerDisplayContentsDiv: "false",
                framerIntrinsicWidth: "1440",
                framerAcceptsLayoutTemplate: "true",
                framerImmutableVariables: "true",
                framerResponsiveScreen: "",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"I5NVW6ZWj":{"layout":["fixed","auto"]},"GtQBtdKUY":{"layout":["fixed","auto"]}}}',
                framerIntrinsicHeight: "11306"
            }
        },
        __FramerMetadata__: {type: "variable"}
    }
};
export {Lt as __FramerMetadata__, St as default};
//# sourceMappingURL=fuRJumq_OhGLvejXfZXpGWYyPWv4JAnDAZk0akTMRSk.LAQJP7D2.mjs.map
