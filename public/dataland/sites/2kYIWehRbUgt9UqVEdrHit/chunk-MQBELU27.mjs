import {a as pn, b as Og, c as pr, d as T, e as pe, f as Jt, g as of, h as Ht} from "./chunk-JR5VT52U.mjs";
import {a as rf, b as Re, c as F} from "./chunk-RIUMFBNJ.mjs";

var Tt = {};
rf(Tt, {
    Children: () => mn,
    Component: () => Se,
    Fragment: () => gn,
    Profiler: () => SR,
    PureComponent: () => kR,
    StrictMode: () => CR,
    Suspense: () => mr,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => TR,
    cloneElement: () => gr,
    createContext: () => be,
    createElement: () => Ji,
    createFactory: () => RR,
    createRef: () => Hg,
    default: () => x,
    forwardRef: () => Oe,
    isValidElement: () => Vt,
    lazy: () => ER,
    memo: () => Xa,
    startTransition: () => ht,
    unstable_act: () => FR,
    useCallback: () => W,
    useContext: () => A,
    useDebugValue: () => PR,
    useDeferredValue: () => _R,
    useEffect: () => $,
    useId: () => vr,
    useImperativeHandle: () => IR,
    useInsertionEffect: () => et,
    useLayoutEffect: () => ze,
    useMemo: () => oe,
    useReducer: () => OR,
    useRef: () => V,
    useState: () => _e,
    useSyncExternalStore: () => Wg,
    useTransition: () => MR,
    version: () => LR
});
var x = {}, os = Symbol.for("react.element"), aR = Symbol.for("react.portal"), lR = Symbol.for("react.fragment"),
    cR = Symbol.for("react.strict_mode"), uR = Symbol.for("react.profiler"), fR = Symbol.for("react.provider"),
    dR = Symbol.for("react.context"), hR = Symbol.for("react.forward_ref"), pR = Symbol.for("react.suspense"),
    mR = Symbol.for("react.memo"), gR = Symbol.for("react.lazy"), Mg = Symbol.iterator;

function vR(e) {
    return e === null || typeof e != "object" ? null : (e = Mg && e[Mg] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Ag = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, Dg = Object.assign, zg = {};

function Zi(e, t, n) {
    this.props = e, this.context = t, this.refs = zg, this.updater = n || Ag
}

Zi.prototype.isReactComponent = {};
Zi.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Zi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Bg() {
}

Bg.prototype = Zi.prototype;

function af(e, t, n) {
    this.props = e, this.context = t, this.refs = zg, this.updater = n || Ag
}

var lf = af.prototype = new Bg;
lf.constructor = af;
Dg(lf, Zi.prototype);
lf.isPureReactComponent = !0;
var Lg = Array.isArray, $g = Object.prototype.hasOwnProperty, cf = {current: null},
    Ng = {key: !0, ref: !0, __self: !0, __source: !0};

function jg(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) $g.call(t, r) && !Ng.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n; else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {$$typeof: os, type: e, key: o, ref: s, props: i, _owner: cf.current}
}

function yR(e, t) {
    return {$$typeof: os, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function uf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === os
}

function bR(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var Vg = /\/+/g;

function sf(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? bR("" + e.key) : t.toString(36)
}

function Ga(e, t, n, r, i) {
    var o = typeof e;
    o !== "undefined" && o !== "boolean" || (e = null);
    var s = !1;
    if (e === null) s = !0; else switch (o) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case os:
                case aR:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + sf(s, 0) : r, Lg(i) ? (n = "", e != null && (n = e.replace(Vg, "$&/") + "/"), Ga(i, t, n, "", function (c) {
        return c
    })) : i != null && (uf(i) && (i = yR(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Vg, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Lg(e)) for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + sf(o, a);
        s += Ga(o, t, n, l, i)
    } else if (l = vR(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + sf(o, a++), s += Ga(o, t, n, l, i); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Ua(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return Ga(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }), r
}

function xR(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            e._status !== 0 && e._status !== -1 || (e._status = 1, e._result = n)
        }, function (n) {
            e._status !== 0 && e._status !== -1 || (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var Lt = {current: null}, qa = {transition: null},
    wR = {ReactCurrentDispatcher: Lt, ReactCurrentBatchConfig: qa, ReactCurrentOwner: cf};
x.Children = {
    map: Ua, forEach: function (e, t, n) {
        Ua(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Ua(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Ua(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!uf(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
x.Component = Zi;
x.Fragment = lR;
x.Profiler = uR;
x.PureComponent = af;
x.StrictMode = cR;
x.Suspense = pR;
x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wR;
x.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Dg({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = cf.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) $g.call(t, l) && !Ng.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n; else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        r.children = a
    }
    return {$$typeof: os, type: e.type, key: i, ref: o, props: r, _owner: s}
};
x.createContext = function (e) {
    return e = {
        $$typeof: dR,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: fR, _context: e}, e.Consumer = e
};
x.createElement = jg;
x.createFactory = function (e) {
    var t = jg.bind(null, e);
    return t.type = e, t
};
x.createRef = function () {
    return {current: null}
};
x.forwardRef = function (e) {
    return {$$typeof: hR, render: e}
};
x.isValidElement = uf;
x.lazy = function (e) {
    return {$$typeof: gR, _payload: {_status: -1, _result: e}, _init: xR}
};
x.memo = function (e, t) {
    return {$$typeof: mR, type: e, compare: t === void 0 ? null : t}
};
x.startTransition = function (e) {
    var t = qa.transition;
    qa.transition = {};
    try {
        e()
    } finally {
        qa.transition = t
    }
};
x.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
x.useCallback = function (e, t) {
    return Lt.current.useCallback(e, t)
};
x.useContext = function (e) {
    return Lt.current.useContext(e)
};
x.useDebugValue = function () {
};
x.useDeferredValue = function (e) {
    return Lt.current.useDeferredValue(e)
};
x.useEffect = function (e, t) {
    return Lt.current.useEffect(e, t)
};
x.useId = function () {
    return Lt.current.useId()
};
x.useImperativeHandle = function (e, t, n) {
    return Lt.current.useImperativeHandle(e, t, n)
};
x.useInsertionEffect = function (e, t) {
    return Lt.current.useInsertionEffect(e, t)
};
x.useLayoutEffect = function (e, t) {
    return Lt.current.useLayoutEffect(e, t)
};
x.useMemo = function (e, t) {
    return Lt.current.useMemo(e, t)
};
x.useReducer = function (e, t, n) {
    return Lt.current.useReducer(e, t, n)
};
x.useRef = function (e) {
    return Lt.current.useRef(e)
};
x.useState = function (e) {
    return Lt.current.useState(e)
};
x.useSyncExternalStore = function (e, t, n) {
    return Lt.current.useSyncExternalStore(e, t, n)
};
x.useTransition = function () {
    return Lt.current.useTransition()
};
x.version = "18.2.0";
var mn = x.Children, Se = x.Component, gn = x.Fragment, SR = x.Profiler, kR = x.PureComponent, CR = x.StrictMode,
    mr = x.Suspense, TR = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gr = x.cloneElement,
    be = x.createContext, Ji = x.createElement, RR = x.createFactory, Hg = x.createRef, Oe = x.forwardRef,
    Vt = x.isValidElement, ER = x.lazy, Xa = x.memo, ht = x.startTransition, FR = x.unstable_act, W = x.useCallback,
    A = x.useContext, PR = x.useDebugValue, _R = x.useDeferredValue, $ = x.useEffect, vr = x.useId,
    IR = x.useImperativeHandle, et = x.useInsertionEffect, ze = x.useLayoutEffect, oe = x.useMemo, OR = x.useReducer,
    V = x.useRef, _e = x.useState, Wg = x.useSyncExternalStore, MR = x.useTransition, LR = x.version;
var VR = "default" in Tt ? x : Tt, eo = {}, AR = VR, DR = Symbol.for("react.element"),
    zR = Symbol.for("react.fragment"), BR = Object.prototype.hasOwnProperty,
    $R = AR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    NR = {key: !0, ref: !0, __self: !0, __source: !0};

function Ug(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) BR.call(t, r) && !NR.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {$$typeof: DR, type: e, key: o, ref: s, props: i, _owner: $R.current}
}

eo.Fragment = zR;
eo.jsx = Ug;
eo.jsxs = Ug;
var at = eo.Fragment, k = eo.jsx, ge = eo.jsxs;
var jR = pn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});

        function t(n) {
            var r = {};
            return function (i) {
                return r[i] === void 0 && (r[i] = n(i)), r[i]
            }
        }

        e.default = t
    }
}), HR = pn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});

        function t(o) {
            return o && typeof o == "object" && "default" in o ? o.default : o
        }

        var n = t(jR()),
            r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
            i = n(function (o) {
                return r.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91
            });
        e.default = i
    }
}), ul = {skipAnimations: !1, useManualTiming: !1}, wt = e => e;

function WR(e) {
    let t = new Set, n = new Set, r = !1, i = !1, o = new WeakSet, s = {delta: 0, timestamp: 0, isProcessing: !1};

    function a(c) {
        o.has(c) && (l.schedule(c), e()), c(s)
    }

    let l = {
        schedule: (c, u = !1, f = !1) => {
            let h = f && r ? t : n;
            return u && o.add(c), h.has(c) || h.add(c), c
        }, cancel: c => {
            n.delete(c), o.delete(c)
        }, process: c => {
            if (s = c, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, l.process(c))
        }
    };
    return l
}

var ls = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"], UR = 40;

function gy(e, t) {
    let n = !1, r = !0, i = {delta: 0, timestamp: 0, isProcessing: !1}, o = () => n = !0,
        s = ls.reduce((p, m) => (p[m] = WR(o), p), {}), {
            read: a,
            resolveKeyframes: l,
            update: c,
            preRender: u,
            render: f,
            postRender: d
        } = s, h = () => {
            let p = ul.useManualTiming ? i.timestamp : performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, UR), 1), i.timestamp = p, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(h))
        }, v = () => {
            n = !0, r = !0, i.isProcessing || e(h)
        };
    return {
        schedule: ls.reduce((p, m) => {
            let y = s[m];
            return p[m] = (w, C = !1, S = !1) => (n || v(), y.schedule(w, C, S)), p
        }, {}), cancel: p => {
            for (let m = 0; m < ls.length; m++) s[ls[m]].cancel(p)
        }, state: i, steps: s
    }
}

var {
        schedule: Z,
        cancel: Et,
        state: Xe,
        steps: Za
    } = gy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : wt, !0),
    vy = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, GR = 1e-7, qR = 12;

function XR(e, t, n, r, i) {
    let o, s, a = 0;
    do s = t + (n - t) / 2, o = vy(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > GR && ++a < qR);
    return s
}

function co(e, t, n, r) {
    if (e === t && n === r) return wt;
    let i = o => XR(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : vy(i(o), t, r)
}

var Uf = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Gf = e => t => 1 - e(1 - t),
    qf = co(.33, 1.53, .69, .99), fl = Gf(qf), Xf = Uf(fl),
    Yf = e => (e *= 2) < 1 ? .5 * fl(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))), dl = e => 1 - Math.sin(Math.acos(e)),
    Kf = Gf(dl), Qf = Uf(dl), uo = wt, en = wt, br = (e, t, n) => n > t ? t : n < e ? e : n, Ss = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }), Br = Ss("deg"), Un = Ss("%"), J = Ss("px"), YR = Ss("vh"), KR = Ss("vw"),
    Gg = {...Un, parse: e => Un.parse(e) / 100, transform: e => Un.transform(e * 100)},
    fo = {test: e => typeof e == "number", parse: parseFloat, transform: e => e},
    gs = {...fo, transform: e => br(0, 1, e)}, Ya = {...fo, default: 1}, fs = e => Math.round(e * 1e5) / 1e5,
    Zf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function QR(e) {
    return e == null
}

var ZR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Jf = (e, t) => n => !!(typeof n == "string" && ZR.test(n) && n.startsWith(e) || t && !QR(n) && Object.prototype.hasOwnProperty.call(n, t)),
    yy = (e, t, n) => r => {
        if (typeof r != "string") return r;
        let [i, o, s, a] = r.match(Zf);
        return {[e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1}
    }, JR = e => br(0, 255, e), ff = {...fo, transform: e => Math.round(JR(e))}, wi = {
        test: Jf("rgb", "red"),
        parse: yy("red", "green", "blue"),
        transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + ff.transform(e) + ", " + ff.transform(t) + ", " + ff.transform(n) + ", " + fs(gs.transform(r)) + ")"
    };

function eE(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}

var Cf = {test: Jf("#"), parse: eE, transform: wi.transform}, to = {
        test: Jf("hsl", "hue"),
        parse: yy("hue", "saturation", "lightness"),
        transform: ({
                        hue: e,
                        saturation: t,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(e) + ", " + Un.transform(fs(t)) + ", " + Un.transform(fs(n)) + ", " + fs(gs.transform(r)) + ")"
    }, xt = {
        test: e => wi.test(e) || Cf.test(e) || to.test(e),
        parse: e => wi.test(e) ? wi.parse(e) : to.test(e) ? to.parse(e) : Cf.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? wi.transform(e) : to.transform(e)
    },
    tE = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function nE(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Zf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(tE)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}

var by = "number", xy = "color", rE = "var", iE = "var(", qg = "${}",
    oE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function vs(e) {
    let t = e.toString(), n = [], r = {color: [], number: [], var: []}, i = [], o = 0,
        a = t.replace(oE, l => (xt.test(l) ? (r.color.push(o), i.push(xy), n.push(xt.parse(l))) : l.startsWith(iE) ? (r.var.push(o), i.push(rE), n.push(l)) : (r.number.push(o), i.push(by), n.push(parseFloat(l))), ++o, qg)).split(qg);
    return {values: n, split: a, indexes: r, types: i}
}

function wy(e) {
    return vs(e).values
}

function Sy(e) {
    let {split: t, types: n} = vs(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++) if (o += t[s], i[s] !== void 0) {
            let a = n[s];
            a === by ? o += fs(i[s]) : a === xy ? o += xt.transform(i[s]) : o += i[s]
        }
        return o
    }
}

var sE = e => typeof e == "number" ? 0 : e;

function aE(e) {
    let t = wy(e);
    return Sy(e)(t.map(sE))
}

var xr = {test: nE, parse: wy, createTransformer: Sy, getAnimatableNone: aE}, On = e => e * 1e3, Gn = e => e / 1e3,
    df = .001, lE = .01, Xg = 10, cE = .05, uE = 1;

function ky({duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1}) {
    let i, o;
    uo(e <= On(Xg), "Spring duration must be 10 seconds or less");
    let s = 1 - t;
    s = br(cE, uE, s), e = br(lE, Xg, Gn(e)), s < 1 ? (i = c => {
        let u = c * s, f = u * e, d = u - n, h = Tf(c, s), v = Math.exp(-f);
        return df - d / h * v
    }, o = c => {
        let f = c * s * e, d = f * n + n, h = Math.pow(s, 2) * Math.pow(c, 2) * e, v = Math.exp(-f),
            g = Tf(Math.pow(c, 2), s);
        return (-i(c) + df > 0 ? -1 : 1) * ((d - h) * v) / g
    }) : (i = c => {
        let u = Math.exp(-c * e), f = (c - n) * e + 1;
        return -df + u * f
    }, o = c => {
        let u = Math.exp(-c * e), f = (n - c) * (e * e);
        return u * f
    });
    let a = 5 / e, l = dE(i, o, a);
    if (e = On(e), isNaN(l)) return {stiffness: 100, damping: 10, duration: e};
    {
        let c = Math.pow(l, 2) * r;
        return {stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e}
    }
}

var fE = 12;

function dE(e, t, n) {
    let r = n;
    for (let i = 1; i < fE; i++) r = r - e(r) / t(r);
    return r
}

function Tf(e, t) {
    return e * Math.sqrt(1 - t * t)
}

function ed(e, t) {
    return t ? e * (1e3 / t) : 0
}

var hE = 5;

function Cy(e, t, n) {
    let r = Math.max(t - hE, 0);
    return ed(n - e(r), t - r)
}

var pE = ["duration", "bounce"], mE = ["stiffness", "damping", "mass"];

function Yg(e, t) {
    return t.some(n => e[n] !== void 0)
}

function gE(e) {
    let t = {velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e};
    if (!Yg(e, mE) && Yg(e, pE)) {
        let n = ky(e);
        t = {...t, ...n, mass: 1}, t.isResolvedFromDuration = !0
    }
    return t
}

function ks({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    let i = e[0], o = e[e.length - 1], s = {done: !1, value: i}, {
            stiffness: a,
            damping: l,
            mass: c,
            duration: u,
            velocity: f,
            isResolvedFromDuration: d
        } = gE({...r, velocity: -Gn(r.velocity || 0)}), h = f || 0, v = l / (2 * Math.sqrt(a * c)), g = o - i,
        b = Gn(Math.sqrt(a / c)), p = Math.abs(g) < 5;
    n || (n = p ? .01 : 2), t || (t = p ? .005 : .5);
    let m;
    if (v < 1) {
        let y = Tf(b, v);
        m = w => {
            let C = Math.exp(-v * b * w);
            return o - C * ((h + v * b * g) / y * Math.sin(y * w) + g * Math.cos(y * w))
        }
    } else if (v === 1) m = y => o - Math.exp(-b * y) * (g + (h + b * g) * y); else {
        let y = b * Math.sqrt(v * v - 1);
        m = w => {
            let C = Math.exp(-v * b * w), S = Math.min(y * w, 300);
            return o - C * ((h + v * b * g) * Math.sinh(S) + y * g * Math.cosh(S)) / y
        }
    }
    return {
        calculatedDuration: d && u || null, next: y => {
            let w = m(y);
            if (d) s.done = y >= u; else {
                let C = 0;
                v < 1 && (C = y === 0 ? On(h) : Cy(m, y, w));
                let S = Math.abs(C) <= n, R = Math.abs(o - w) <= t;
                s.done = S && R
            }
            return s.value = s.done ? o : w, s
        }
    }
}

function Rf({
                keyframes: e,
                velocity: t = 0,
                power: n = .8,
                timeConstant: r = 325,
                bounceDamping: i = 10,
                bounceStiffness: o = 500,
                modifyTarget: s,
                min: a,
                max: l,
                restDelta: c = .5,
                restSpeed: u
            }) {
    let f = e[0], d = {done: !1, value: f}, h = E => a !== void 0 && E < a || l !== void 0 && E > l,
        v = E => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l, g = n * t, b = f + g,
        p = s === void 0 ? b : s(b);
    p !== b && (g = p - f);
    let m = E => -g * Math.exp(-E / r), y = E => p + m(E), w = E => {
        let I = m(E), O = y(E);
        d.done = Math.abs(I) <= c, d.value = d.done ? p : O
    }, C, S, R = E => {
        h(d.value) && (C = E, S = ks({
            keyframes: [d.value, v(d.value)],
            velocity: Cy(y, E, d.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    };
    return R(0), {
        calculatedDuration: null, next: E => {
            let I = !1;
            return !S && C === void 0 && (I = !0, w(E), R(E)), C !== void 0 && E >= C ? S.next(E - C) : (!I && w(E), d)
        }
    }
}

var Ty = co(.42, 0, 1, 1), Ry = co(0, 0, .58, 1), td = co(.42, 0, .58, 1), vE = (e, t) => n => t(e(n)),
    qn = (...e) => e.reduce(vE), wr = (e, t, n) => {
        let r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }, Me = (e, t, n) => e + (t - e) * n;

function hf(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function yE({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t) i = o = s = n; else {
        let a = n < .5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
        i = hf(l, a, e + 1 / 3), o = hf(l, a, e), s = hf(l, a, e - 1 / 3)
    }
    return {red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r}
}

function rl(e, t) {
    return n => n > 0 ? t : e
}

var pf = (e, t, n) => {
    let r = e * e, i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}, bE = [Cf, wi, to], xE = e => bE.find(t => t.test(e));

function Kg(e) {
    let t = xE(e);
    if (uo(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
    let n = t.parse(e);
    return t === to && (n = yE(n)), n
}

var Qg = (e, t) => {
        let n = Kg(e), r = Kg(t);
        if (!n || !r) return rl(e, t);
        let i = {...n};
        return o => (i.red = pf(n.red, r.red, o), i.green = pf(n.green, r.green, o), i.blue = pf(n.blue, r.blue, o), i.alpha = Me(n.alpha, r.alpha, o), wi.transform(i))
    }, Ey = e => t => typeof t == "string" && t.startsWith(e), Fy = Ey("--"), wE = Ey("var(--"),
    nd = e => wE(e) ? SE.test(e.split("/*")[0].trim()) : !1,
    SE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Ef = new Set(["none", "hidden"]);

function kE(e, t) {
    return Ef.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function CE(e, t) {
    return n => Me(e, t, n)
}

function rd(e) {
    return typeof e == "number" ? CE : typeof e == "string" ? nd(e) ? rl : xt.test(e) ? Qg : EE : Array.isArray(e) ? Py : typeof e == "object" ? xt.test(e) ? Qg : TE : rl
}

function Py(e, t) {
    let n = [...e], r = n.length, i = e.map((o, s) => rd(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function TE(e, t) {
    let n = {...e, ...t}, r = {};
    for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = rd(e[i])(e[i], t[i]));
    return i => {
        for (let o in r) n[o] = r[o](i);
        return n
    }
}

function RE(e, t) {
    var n;
    let r = [], i = {color: 0, var: 0, number: 0};
    for (let o = 0; o < t.values.length; o++) {
        let s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l, i[s]++
    }
    return r
}

var EE = (e, t) => {
    let n = xr.createTransformer(t), r = vs(e), i = vs(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ef.has(e) && !i.values.length || Ef.has(t) && !r.values.length ? kE(e, t) : qn(Py(RE(r, i), i.values), n) : (uo(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), rl(e, t))
};

function id(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Me(e, t, n) : rd(e)(e, t)
}

function FE(e, t, n) {
    let r = [], i = n || id, o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            let l = Array.isArray(t) ? t[s] || wt : t;
            a = qn(l, a)
        }
        r.push(a)
    }
    return r
}

function ho(e, t, {clamp: n = !0, ease: r, mixer: i} = {}) {
    let o = e.length;
    if (en(o === t.length, "Both input and output ranges must be the same length"), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    let s = FE(t, r, i), a = s.length, l = c => {
        let u = 0;
        if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++) ;
        let f = wr(e[u], e[u + 1], c);
        return s[u](f)
    };
    return n ? c => l(br(e[0], e[o - 1], c)) : l
}

var _y = e => Array.isArray(e) && typeof e[0] != "number", od = e => Array.isArray(e) && typeof e[0] == "number", Zg = {
    linear: wt,
    easeIn: Ty,
    easeInOut: td,
    easeOut: Ry,
    circIn: dl,
    circInOut: Qf,
    circOut: Kf,
    backIn: fl,
    backInOut: Xf,
    backOut: qf,
    anticipate: Yf
}, Ff = e => {
    if (od(e)) {
        en(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
        let [t, n, r, i] = e;
        return co(t, n, r, i)
    } else if (typeof e == "string") return en(Zg[e] !== void 0, `Invalid easing type '${e}'`), Zg[e];
    return e
};

function Iy(e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        let i = wr(0, t, r);
        e.push(Me(n, 1, i))
    }
}

function sd(e) {
    let t = [0];
    return Iy(t, e.length - 1), t
}

function PE(e, t) {
    return e.map(n => n * t)
}

function _E(e, t) {
    return e.map(() => t || td).splice(0, e.length - 1)
}

function ys({duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut"}) {
    let i = _y(r) ? r.map(Ff) : Ff(r), o = {done: !1, value: t[0]}, s = PE(n && n.length === t.length ? n : sd(t), e),
        a = ho(s, t, {ease: Array.isArray(i) ? i : _E(t, i)});
    return {calculatedDuration: e, next: l => (o.value = a(l), o.done = l >= e, o)}
}

var Cs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Nr = new Set(Cs),
    IE = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Jg = e => e === fo || e === J, ev = (e, t) => parseFloat(e.split(", ")[t]), tv = (e, t) => (n, {transform: r}) => {
        if (r === "none" || !r) return 0;
        let i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return ev(i[1], t);
        {
            let o = r.match(/^matrix\((.+)\)$/u);
            return o ? ev(o[1], e) : 0
        }
    }, OE = new Set(["x", "y", "z"]), ME = Cs.filter(e => !OE.has(e));

function LE(e) {
    let t = [];
    return ME.forEach(n => {
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}

var so = {
    width: ({x: e}, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t = "0", paddingBottom: n = "0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: tv(4, 13),
    y: tv(5, 14)
};
so.translateX = so.x;
so.translateY = so.y;
var Si = new Set, Pf = !1, _f = !1;

function Oy() {
    if (_f) {
        let e = Array.from(Si).filter(r => r.needsMeasurement), t = new Set(e.map(r => r.element)), n = new Map;
        t.forEach(r => {
            let i = LE(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            let i = n.get(r);
            i && i.forEach(([o, s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && F.scrollTo(0, r.suspendedScrollY)
        })
    }
    _f = !1, Pf = !1, Si.forEach(e => e.complete()), Si.clear()
}

function My() {
    Si.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (_f = !0)
    })
}

function VE() {
    My(), Oy()
}

var ad = class {
    constructor(e, t, n, r, i, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = o
    }

    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Si.add(this), Pf || (Pf = !0, Z.read(My), Z.resolveKeyframes(Oy))) : (this.readKeyframes(), this.complete())
    }

    readKeyframes() {
        let {unresolvedKeyframes: e, name: t, element: n, motionValue: r} = this;
        for (let i = 0; i < e.length; i++) if (e[i] === null) if (i === 0) {
            let o = r?.get(), s = e[e.length - 1];
            if (o !== void 0) e[0] = o; else if (n && t) {
                let a = n.readValue(t, s);
                a != null && (e[0] = a)
            }
            e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0])
        } else e[i] = e[i - 1]
    }

    setFinalKeyframe() {
    }

    measureInitialState() {
    }

    renderEndStyles() {
    }

    measureEndState() {
    }

    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Si.delete(this)
    }

    cancel() {
        this.isComplete || (this.isScheduled = !1, Si.delete(this))
    }

    resume() {
        this.isComplete || this.scheduleResolve()
    }
}, Ja;

function AE() {
    Ja = void 0
}

var Xn = {
    now: () => (Ja === void 0 && Xn.set(Xe.isProcessing || ul.useManualTiming ? Xe.timestamp : performance.now()), Ja),
    set: e => {
        Ja = e, queueMicrotask(AE)
    }
}, il = {current: !1};

function hl(e) {
    return typeof e == "function"
}

var nv = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (xr.test(e) || e === "0") && !e.startsWith("url("));

function DE(e) {
    let t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}

function zE(e, t, n, r) {
    let i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    let o = e[e.length - 1], s = nv(i, t), a = nv(o, t);
    return uo(s === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !a ? !1 : DE(e) || (n === "spring" || hl(n)) && r
}

var BE = e => e !== null;

function pl(e, {repeat: t, repeatType: n = "loop"}, r) {
    let i = e.filter(BE), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}

var $E = 40, Ly = class {
    constructor({
                    autoplay: e = !0,
                    delay: t = 0,
                    type: n = "keyframes",
                    repeat: r = 0,
                    repeatDelay: i = 0,
                    repeatType: o = "loop",
                    ...s
                }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Xn.now(), this.options = {
            autoplay: e,
            delay: t,
            type: n,
            repeat: r,
            repeatDelay: i,
            repeatType: o, ...s
        }, this.updateFinishedPromise()
    }

    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > $E ? this.resolvedAt : this.createdAt : this.createdAt
    }

    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && VE(), this._resolved
    }

    onKeyframesResolved(e, t) {
        this.resolvedAt = Xn.now(), this.hasAttemptedResolve = !0;
        let {name: n, type: r, velocity: i, delay: o, onComplete: s, onUpdate: a, isGenerator: l} = this.options;
        if (!l && !zE(e, n, r, i)) if (il.current || !o) {
            a?.(pl(e, this.options, t)), s?.(), this.resolveFinishedPromise();
            return
        } else this.options.duration = 0;
        let c = this.initPlayback(e, t);
        c !== !1 && (this._resolved = {keyframes: e, finalKeyframe: t, ...c}, this.onPostResolved())
    }

    onPostResolved() {
    }

    then(e, t) {
        return this.currentFinishedPromise.then(e, t)
    }

    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}, If = 2e4;

function Vy(e) {
    let t = 0, n = 50, r = e.next(t);
    for (; !r.done && t < If;) t += n, r = e.next(t);
    return t >= If ? 1 / 0 : t
}

var NE = e => {
    let t = ({timestamp: n}) => e(n);
    return {start: () => Z.update(t, !0), stop: () => Et(t), now: () => Xe.isProcessing ? Xe.timestamp : Xn.now()}
}, jE = {decay: Rf, inertia: Rf, tween: ys, keyframes: ys, spring: ks}, HE = e => e / 100, ml = class extends Ly {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            let {onStop: a} = this.options;
            a && a()
        };
        let {name: t, motionValue: n, element: r, keyframes: i} = this.options, o = r?.KeyframeResolver || ad,
            s = (a, l) => this.onKeyframesResolved(a, l);
        this.resolver = new o(i, s, t, n, r), this.resolver.scheduleResolve()
    }

    initPlayback(e) {
        let {type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: o = 0} = this.options,
            s = hl(t) ? t : jE[t] || ys, a, l;
        s !== ys && typeof e[0] != "number" && (a = qn(HE, id(e[0], e[1])), e = [0, 100]);
        let c = s({...this.options, keyframes: e});
        i === "mirror" && (l = s({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Vy(c));
        let {calculatedDuration: u} = c, f = u + r, d = f * (n + 1) - r;
        return {
            generator: c,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: u,
            resolvedDuration: f,
            totalDuration: d
        }
    }

    onPostResolved() {
        let {autoplay: e = !0} = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }

    tick(e, t = !1) {
        let {resolved: n} = this;
        if (!n) {
            let {keyframes: R} = this.options;
            return {done: !0, value: R[R.length - 1]}
        }
        let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: c,
            resolvedDuration: u
        } = n;
        if (this.startTime === null) return i.next(0);
        let {delay: f, repeat: d, repeatType: h, repeatDelay: v, onUpdate: g} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), t ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        let b = this.currentTime - f * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? b < 0 : b > c;
        this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let m = this.currentTime, y = i;
        if (d) {
            let R = Math.min(this.currentTime, c) / u, E = Math.floor(R), I = R % 1;
            !I && R >= 1 && (I = 1), I === 1 && E--, E = Math.min(E, d + 1), !!(E % 2) && (h === "reverse" ? (I = 1 - I, v && (I -= v / u)) : h === "mirror" && (y = o)), m = br(0, 1, I) * u
        }
        let w = p ? {done: !1, value: a[0]} : y.next(m);
        s && (w.value = s(w.value));
        let {done: C} = w;
        !p && l !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return S && r !== void 0 && (w.value = pl(a, this.options, r)), g && g(w.value), S && this.finish(), w
    }

    get duration() {
        let {resolved: e} = this;
        return e ? Gn(e.calculatedDuration) : 0
    }

    get time() {
        return Gn(this.currentTime)
    }

    set time(e) {
        e = On(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }

    get speed() {
        return this.playbackSpeed
    }

    set speed(e) {
        let t = this.playbackSpeed !== e;
        this.playbackSpeed = e, t && (this.time = Gn(this.currentTime))
    }

    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        let {driver: e = NE, onPlay: t, startTime: n} = this.options;
        this.driver || (this.driver = e(i => this.tick(i))), t && t();
        let r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = r) : this.startTime = n ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }

    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }

    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }

    finish() {
        this.teardown(), this.state = "finished";
        let {onComplete: e} = this.options;
        e && e()
    }

    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }

    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }

    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }

    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
};

function ld(e) {
    return new ml(e)
}

var Ay = e => /^0[^.\s]+$/u.test(e);

function WE(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ay(e) : !0
}

var Dy = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), UE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function GE(e) {
    let t = UE.exec(e);
    if (!t) return [,];
    let [, n, r, i] = t;
    return [`--${n ?? r}`, i]
}

var qE = 4;

function zy(e, t, n = 1) {
    en(n <= qE, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
    let [r, i] = GE(e);
    if (!r) return;
    let o = F.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        let s = o.trim();
        return Dy(s) ? parseFloat(s) : s
    }
    return nd(i) ? zy(i, t, n + 1) : i
}

var By = e => t => t.test(e), XE = {test: e => e === "auto", parse: e => e}, $y = [fo, J, Un, Br, KR, YR, XE],
    rv = e => $y.find(By(e)), YE = new Set(["brightness", "contrast", "saturate", "opacity"]);

function KE(e) {
    let [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    let [r] = n.match(Zf) || [];
    if (!r) return e;
    let i = n.replace(r, ""), o = YE.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}

var QE = /\b([a-z-]*)\(.*?\)/gu, Of = {
        ...xr, getAnimatableNone: e => {
            let t = e.match(QE);
            return t ? t.map(KE).join(" ") : e
        }
    }, ZE = {
        borderWidth: J,
        borderTopWidth: J,
        borderRightWidth: J,
        borderBottomWidth: J,
        borderLeftWidth: J,
        borderRadius: J,
        radius: J,
        borderTopLeftRadius: J,
        borderTopRightRadius: J,
        borderBottomRightRadius: J,
        borderBottomLeftRadius: J,
        width: J,
        maxWidth: J,
        height: J,
        maxHeight: J,
        top: J,
        right: J,
        bottom: J,
        left: J,
        padding: J,
        paddingTop: J,
        paddingRight: J,
        paddingBottom: J,
        paddingLeft: J,
        margin: J,
        marginTop: J,
        marginRight: J,
        marginBottom: J,
        marginLeft: J,
        backgroundPositionX: J,
        backgroundPositionY: J
    }, JE = {
        rotate: Br,
        rotateX: Br,
        rotateY: Br,
        rotateZ: Br,
        scale: Ya,
        scaleX: Ya,
        scaleY: Ya,
        scaleZ: Ya,
        skew: Br,
        skewX: Br,
        skewY: Br,
        distance: J,
        translateX: J,
        translateY: J,
        translateZ: J,
        x: J,
        y: J,
        z: J,
        perspective: J,
        transformPerspective: J,
        opacity: gs,
        originX: Gg,
        originY: Gg,
        originZ: J
    }, iv = {...fo, transform: Math.round},
    cd = {...ZE, ...JE, zIndex: iv, size: J, fillOpacity: gs, strokeOpacity: gs, numOctaves: iv}, eF = {
        ...cd,
        color: xt,
        backgroundColor: xt,
        outlineColor: xt,
        fill: xt,
        stroke: xt,
        borderColor: xt,
        borderTopColor: xt,
        borderRightColor: xt,
        borderBottomColor: xt,
        borderLeftColor: xt,
        filter: Of,
        WebkitFilter: Of
    }, ud = e => eF[e];

function Ny(e, t) {
    let n = ud(e);
    return n !== Of && (n = xr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}

var tF = new Set(["auto", "none", "0"]);

function nF(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i;) {
        let o = e[r];
        typeof o == "string" && !tF.has(o) && vs(o).values.length && (i = e[r]), r++
    }
    if (i && n) for (let o of t) e[o] = Ny(n, i)
}

var jy = class extends ad {
    constructor(e, t, n, r, i) {
        super(e, t, n, r, i, !0)
    }

    readKeyframes() {
        let {unresolvedKeyframes: e, element: t, name: n} = this;
        if (!t || !t.current) return;
        super.readKeyframes();
        for (let a = 0; a < e.length; a++) {
            let l = e[a];
            if (typeof l == "string" && (l = l.trim(), nd(l))) {
                let c = zy(l, t.current);
                c !== void 0 && (e[a] = c), a === e.length - 1 && (this.finalKeyframe = l)
            }
        }
        if (this.resolveNoneKeyframes(), !IE.has(n) || e.length !== 2) return;
        let [r, i] = e, o = rv(r), s = rv(i);
        if (o !== s) if (Jg(o) && Jg(s)) for (let a = 0; a < e.length; a++) {
            let l = e[a];
            typeof l == "string" && (e[a] = parseFloat(l))
        } else this.needsMeasurement = !0
    }

    resolveNoneKeyframes() {
        let {unresolvedKeyframes: e, name: t} = this, n = [];
        for (let r = 0; r < e.length; r++) WE(e[r]) && n.push(r);
        n.length && nF(e, n, t)
    }

    measureInitialState() {
        let {element: e, unresolvedKeyframes: t, name: n} = this;
        if (!e || !e.current) return;
        n === "height" && (this.suspendedScrollY = F.pageYOffset), this.measuredOrigin = so[n](e.measureViewportBox(), F.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
        let r = t[t.length - 1];
        r !== void 0 && e.getValue(n, r).jump(r, !1)
    }

    measureEndState() {
        var e;
        let {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current) return;
        let i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        let o = r.length - 1, s = r[o];
        r[o] = so[n](t.measureViewportBox(), F.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([a, l]) => {
            t.getValue(a).set(l)
        }), this.resolveNoneKeyframes()
    }
}, Hy = new Set(["opacity", "clipPath", "filter", "transform"]), rF = 10, iF = (e, t) => {
    let n = "", r = Math.max(Math.round(t / rF), 2);
    for (let i = 0; i < r; i++) n += e(wr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`
};

function fd(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}

var oF = {linearEasing: void 0};

function sF(e, t) {
    let n = fd(e);
    return () => {
        var r;
        return (r = oF[t]) !== null && r !== void 0 ? r : n()
    }
}

var ol = sF(() => {
    try {
        document.createElement("div").animate({opacity: 0}, {easing: "linear(0, 1)"})
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function Wy(e) {
    return !!(typeof e == "function" && ol() || !e || typeof e == "string" && (e in Mf || ol()) || od(e) || Array.isArray(e) && e.every(Wy))
}

var cs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Mf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cs([0, .65, .55, 1]),
    circOut: cs([.55, 0, 1, .45]),
    backIn: cs([.31, .01, .66, -.59]),
    backOut: cs([.33, 1.53, .69, .99])
};

function Uy(e, t) {
    if (e) return typeof e == "function" && ol() ? iF(e, t) : od(e) ? cs(e) : Array.isArray(e) ? e.map(n => Uy(n, t) || Mf.easeOut) : Mf[e]
}

function aF(e, t, n, {delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: l} = {}) {
    let c = {[t]: n};
    l && (c.offset = l);
    let u = Uy(a, i);
    return Array.isArray(u) && (c.easing = u), e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function ov(e, t) {
    e.timeline = t, e.onfinish = null
}

var lF = fd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), sl = 10, cF = 2e4;

function uF(e) {
    return hl(e.type) || e.type === "spring" || !Wy(e.ease)
}

function fF(e, t) {
    let n = new ml({...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0}), r = {done: !1, value: e[0]}, i = [],
        o = 0;
    for (; !r.done && o < cF;) r = n.sample(o), i.push(r.value), o += sl;
    return {times: void 0, keyframes: i, duration: o - sl, ease: "linear"}
}

var Gy = {anticipate: Yf, backInOut: Xf, circInOut: Qf};

function dF(e) {
    return e in Gy
}

var Lf = class extends Ly {
    constructor(e) {
        super(e);
        let {name: t, motionValue: n, element: r, keyframes: i} = this.options;
        this.resolver = new jy(i, (o, s) => this.onKeyframesResolved(o, s), t, n, r), this.resolver.scheduleResolve()
    }

    initPlayback(e, t) {
        var n;
        let {duration: r = 300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: c} = this.options;
        if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
        if (typeof o == "string" && ol() && dF(o) && (o = Gy[o]), uF(this.options)) {
            let {onComplete: f, onUpdate: d, motionValue: h, element: v, ...g} = this.options, b = fF(e, g);
            e = b.keyframes, e.length === 1 && (e[1] = e[0]), r = b.duration, i = b.times, o = b.ease, s = "keyframes"
        }
        let u = aF(a.owner.current, l, e, {...this.options, duration: r, times: i, ease: o});
        return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ov(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
            let {onComplete: f} = this.options;
            a.set(pl(e, this.options, t)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {animation: u, duration: r, times: i, type: s, ease: o, keyframes: e}
    }

    get duration() {
        let {resolved: e} = this;
        if (!e) return 0;
        let {duration: t} = e;
        return Gn(t)
    }

    get time() {
        let {resolved: e} = this;
        if (!e) return 0;
        let {animation: t} = e;
        return Gn(t.currentTime || 0)
    }

    set time(e) {
        let {resolved: t} = this;
        if (!t) return;
        let {animation: n} = t;
        n.currentTime = On(e)
    }

    get speed() {
        let {resolved: e} = this;
        if (!e) return 1;
        let {animation: t} = e;
        return t.playbackRate
    }

    set speed(e) {
        let {resolved: t} = this;
        if (!t) return;
        let {animation: n} = t;
        n.playbackRate = e
    }

    get state() {
        let {resolved: e} = this;
        if (!e) return "idle";
        let {animation: t} = e;
        return t.playState
    }

    get startTime() {
        let {resolved: e} = this;
        if (!e) return null;
        let {animation: t} = e;
        return t.startTime
    }

    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e; else {
            let {resolved: t} = this;
            if (!t) return wt;
            let {animation: n} = t;
            ov(n, e)
        }
        return wt
    }

    play() {
        if (this.isStopped) return;
        let {resolved: e} = this;
        if (!e) return;
        let {animation: t} = e;
        t.playState === "finished" && this.updateFinishedPromise(), t.play()
    }

    pause() {
        let {resolved: e} = this;
        if (!e) return;
        let {animation: t} = e;
        t.pause()
    }

    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        let {resolved: e} = this;
        if (!e) return;
        let {animation: t, keyframes: n, duration: r, type: i, ease: o, times: s} = e;
        if (t.playState === "idle" || t.playState === "finished") return;
        if (this.time) {
            let {motionValue: l, onUpdate: c, onComplete: u, element: f, ...d} = this.options,
                h = new ml({...d, keyframes: n, duration: r, type: i, ease: o, times: s, isGenerator: !0}),
                v = On(this.time);
            l.setWithVelocity(h.sample(v - sl).value, h.sample(v).value, sl)
        }
        let {onStop: a} = this.options;
        a && a(), this.cancel()
    }

    complete() {
        let {resolved: e} = this;
        e && e.animation.finish()
    }

    cancel() {
        let {resolved: e} = this;
        e && e.animation.cancel()
    }

    static supports(e) {
        let {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s} = e;
        return lF() && n && Hy.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && i !== "mirror" && o !== 0 && s !== "inertia"
    }
};

function dd(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function gl(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

function hF([...e], t, n) {
    let r = t < 0 ? e.length + t : t;
    if (r >= 0 && r < e.length) {
        let i = n < 0 ? e.length + n : n, [o] = e.splice(t, 1);
        e.splice(i, 0, o)
    }
    return e
}

var hd = class {
    constructor() {
        this.subscriptions = []
    }

    add(e) {
        return dd(this.subscriptions, e), () => gl(this.subscriptions, e)
    }

    notify(e, t, n) {
        let r = this.subscriptions.length;
        if (r) if (r === 1) this.subscriptions[0](e, t, n); else for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n)
        }
    }

    getSize() {
        return this.subscriptions.length
    }

    clear() {
        this.subscriptions.length = 0
    }
}, sv = 30, pF = e => !isNaN(parseFloat(e)), ds = {current: void 0}, vl = class {
    constructor(e, t = {}) {
        this.version = "11.11.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n, r = !0) => {
            let i = Xn.now();
            this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), r && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
    }

    setCurrent(e) {
        this.current = e, this.updatedAt = Xn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = pF(this.current))
    }

    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }

    onChange(e) {
        return this.on("change", e)
    }

    on(e, t) {
        this.events[e] || (this.events[e] = new hd);
        let n = this.events[e].add(t);
        return e === "change" ? () => {
            n(), Z.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : n
    }

    clearListeners() {
        for (let e in this.events) this.events[e].clear()
    }

    attach(e, t) {
        this.passiveEffect = e, this.stopPassiveEffect = t
    }

    set(e, t = !0) {
        !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify)
    }

    setWithVelocity(e, t, n) {
        this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
    }

    jump(e, t = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }

    get() {
        return ds.current && ds.current.push(this), this.current
    }

    getPrevious() {
        return this.prev
    }

    getVelocity() {
        let e = Xn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > sv) return 0;
        let t = Math.min(this.updatedAt - this.prevUpdatedAt, sv);
        return ed(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }

    start(e) {
        return this.stop(), new Promise(t => {
            this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }

    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }

    isAnimating() {
        return !!this.animation
    }

    clearAnimation() {
        delete this.animation
    }

    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
};

function Ye(e, t) {
    return new vl(e, t)
}

var yl = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), mF = "framerAppearId", bl = "data-" + yl(mF),
    Be = e => !!(e && e.getVelocity);

function av(e) {
    let t = [{}, {}];
    return e?.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function pd(e, t, n, r) {
    if (typeof t == "function") {
        let [i, o] = av(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        let [i, o] = av(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}

function xl(e, t, n) {
    let r = e.getProps();
    return pd(r, t, n !== void 0 ? n : r.custom, e)
}

var gF = {type: "spring", stiffness: 500, damping: 25, restSpeed: 10},
    vF = e => ({type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10}),
    yF = {type: "keyframes", duration: .8}, bF = {type: "keyframes", ease: [.25, .1, .35, 1], duration: .3},
    xF = (e, {keyframes: t}) => t.length > 2 ? yF : Nr.has(e) ? e.startsWith("scale") ? vF(t[1]) : gF : bF;

function md(e, t) {
    return e ? e[t] || e.default || e : void 0
}

var qy = fd(() => F.ScrollTimeline !== void 0), Xy = class {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }

    then(e, t) {
        return Promise.all(this.animations).then(e).catch(t)
    }

    getAll(e) {
        return this.animations[0][e]
    }

    setAll(e, t) {
        for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
    }

    attachTimeline(e, t) {
        let n = this.animations.map(r => qy() && r.attachTimeline ? r.attachTimeline(e) : t(r));
        return () => {
            n.forEach((r, i) => {
                r && r(), this.animations[i].stop()
            })
        }
    }

    get time() {
        return this.getAll("time")
    }

    set time(e) {
        this.setAll("time", e)
    }

    get speed() {
        return this.getAll("speed")
    }

    set speed(e) {
        this.setAll("speed", e)
    }

    get startTime() {
        return this.getAll("startTime")
    }

    get duration() {
        let e = 0;
        for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
        return e
    }

    runAll(e) {
        this.animations.forEach(t => t[e]())
    }

    play() {
        this.runAll("play")
    }

    pause() {
        this.runAll("pause")
    }

    cancel() {
        this.runAll("cancel")
    }

    complete() {
        this.runAll("complete")
    }
};

function wF({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: i,
                repeat: o,
                repeatType: s,
                repeatDelay: a,
                from: l,
                elapsed: c,
                ...u
            }) {
    return !!Object.keys(u).length
}

var gd = (e, t, n, r = {}, i, o) => s => {
        let a = md(r, e) || {}, l = a.delay || r.delay || 0, {elapsed: c = 0} = r;
        c = c - On(l);
        let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(), ...a,
            delay: -c,
            onUpdate: d => {
                t.set(d), a.onUpdate && a.onUpdate(d)
            },
            onComplete: () => {
                s(), a.onComplete && a.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
        };
        wF(a) || (u = {...u, ...xF(e, u)}), u.duration && (u.duration = On(u.duration)), u.repeatDelay && (u.repeatDelay = On(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
        let f = !1;
        if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), (il.current || ul.skipAnimations) && (f = !0, u.duration = 0, u.delay = 0), f && !o && t.get() !== void 0) {
            let d = pl(u.keyframes, a);
            if (d !== void 0) return Z.update(() => {
                u.onUpdate(d), u.onComplete()
            }), new Xy([])
        }
        return !o && Lf.supports(u) ? new Lf(u) : new ml(u)
    }, Vf = e => Array.isArray(e), SF = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    kF = e => Vf(e) ? e[e.length - 1] || 0 : e;

function CF(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ye(n))
}

function vd(e, t) {
    let n = xl(e, t), {transitionEnd: r = {}, transition: i = {}, ...o} = n || {};
    o = {...o, ...r};
    for (let s in o) {
        let a = kF(o[s]);
        CF(e, s, a)
    }
}

function Yy(e) {
    return e.props[bl]
}

function TF(e) {
    return !!(Be(e) && e.add)
}

function Ky(e) {
    if (Nr.has(e)) return "transform";
    if (Hy.has(e)) return yl(e)
}

function Af(e, t) {
    var n;
    if (!e.applyWillChange) return;
    let r = e.getValue("willChange");
    if (TF(r)) return r.add(t);
    !(!((n = e.props.style) === null || n === void 0) && n.willChange) && Ky(t) && e.setStaticValue("willChange", "transform")
}

function RF({protectedKeys: e, needsAnimating: t}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function yd(e, t, {delay: n = 0, transitionOverride: r, type: i} = {}) {
    var o;
    let {transition: s = e.getDefaultTransition(), transitionEnd: a, ...l} = t;
    r && (s = r);
    let c = [], u = i && e.animationState && e.animationState.getState()[i];
    for (let f in l) {
        let d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), h = l[f];
        if (h === void 0 || u && RF(u, f)) continue;
        let v = {delay: n, ...md(s || {}, f)}, g = !1;
        if (F.MotionHandoffAnimation) {
            let p = Yy(e);
            if (p) {
                let m = F.MotionHandoffAnimation(p, f, Z);
                m !== null && (v.startTime = m, g = !0)
            }
        }
        Af(e, f), d.start(gd(f, d, h, e.shouldReduceMotion && Nr.has(f) ? {type: !1} : v, e, g));
        let b = d.animation;
        b && c.push(b)
    }
    return a && Promise.all(c).then(() => {
        Z.update(() => {
            a && vd(e, a)
        })
    }), c
}

function Df(e, t, n = {}) {
    var r;
    let i = xl(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0), {transition: o = e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    let s = i ? () => Promise.all(yd(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
            let {delayChildren: u = 0, staggerChildren: f, staggerDirection: d} = o;
            return EF(e, t, u + c, f, d, n)
        } : () => Promise.resolve(), {when: l} = o;
    if (l) {
        let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
        return c().then(() => u())
    } else return Promise.all([s(), a(n.delay)])
}

function EF(e, t, n = 0, r = 0, i = 1, o) {
    let s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
    return Array.from(e.variantChildren).sort(FF).forEach((c, u) => {
        c.notify("AnimationStart", t), s.push(Df(c, t, {
            ...o,
            delay: n + l(u)
        }).then(() => c.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function FF(e, t) {
    return e.sortNodePosition(t)
}

function bd(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(o => Df(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = Df(e, t, n); else {
        let i = typeof t == "function" ? xl(e, t, n.custom) : t;
        r = Promise.all(yd(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}

function bs(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Qy(e, t) {
    if (!Array.isArray(t)) return !1;
    let n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0
}

function xs(e) {
    return typeof e == "string" || Array.isArray(e)
}

var xd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    wd = ["initial", ...xd], PF = wd.length;

function Zy(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        let n = e.parent ? Zy(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    let t = {};
    for (let n = 0; n < PF; n++) {
        let r = wd[n], i = e.props[r];
        (xs(i) || i === !1) && (t[r] = i)
    }
    return t
}

var _F = [...xd].reverse(), IF = xd.length;

function OF(e) {
    return t => Promise.all(t.map(({animation: n, options: r}) => bd(e, n, r)))
}

function MF(e) {
    let t = OF(e), n = lv(), r = !0, i = l => (c, u) => {
        var f;
        let d = xl(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            let {transition: h, transitionEnd: v, ...g} = d;
            c = {...c, ...g, ...v}
        }
        return c
    };

    function o(l) {
        t = l(e)
    }

    function s(l) {
        let {props: c} = e, u = Zy(e.parent) || {}, f = [], d = new Set, h = {}, v = 1 / 0;
        for (let b = 0; b < IF; b++) {
            let p = _F[b], m = n[p], y = c[p] !== void 0 ? c[p] : u[p], w = xs(y), C = p === l ? m.isActive : null;
            C === !1 && (v = b);
            let S = y === u[p] && y !== c[p] && w;
            if (S && r && e.manuallyAnimateOnMount && (S = !1), m.protectedKeys = {...h}, !m.isActive && C === null || !y && !m.prevProp || bs(y) || typeof y == "boolean") continue;
            let R = LF(m.prevProp, y), E = R || p === l && m.isActive && !S && w || b > v && w, I = !1,
                O = Array.isArray(y) ? y : [y], H = O.reduce(i(p), {});
            C === !1 && (H = {});
            let {prevResolvedValues: z = {}} = m, B = {...z, ...H}, Q = K => {
                E = !0, d.has(K) && (I = !0, d.delete(K)), m.needsAnimating[K] = !0;
                let te = e.getValue(K);
                te && (te.liveStyle = !1)
            };
            for (let K in B) {
                let te = H[K], X = z[K];
                if (h.hasOwnProperty(K)) continue;
                let G = !1;
                Vf(te) && Vf(X) ? G = !Qy(te, X) : G = te !== X, G ? te != null ? Q(K) : d.add(K) : te !== void 0 && d.has(K) ? Q(K) : m.protectedKeys[K] = !0
            }
            m.prevProp = y, m.prevResolvedValues = H, m.isActive && (h = {...h, ...H}), r && e.blockInitialAnimation && (E = !1), E && (!(S && R) || I) && f.push(...O.map(K => ({
                animation: K,
                options: {type: p}
            })))
        }
        if (d.size) {
            let b = {};
            d.forEach(p => {
                let m = e.getBaseTarget(p), y = e.getValue(p);
                y && (y.liveStyle = !0), b[p] = m ?? null
            }), f.push({animation: b})
        }
        let g = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(f) : Promise.resolve()
    }

    function a(l, c) {
        var u;
        if (n[l].isActive === c) return Promise.resolve();
        (u = e.variantChildren) === null || u === void 0 || u.forEach(d => {
            var h;
            return (h = d.animationState) === null || h === void 0 ? void 0 : h.setActive(l, c)
        }), n[l].isActive = c;
        let f = s(l);
        for (let d in n) n[d].protectedKeys = {};
        return f
    }

    return {
        animateChanges: s, setActive: a, setAnimateFunction: o, getState: () => n, reset: () => {
            n = lv(), r = !0
        }
    }
}

function LF(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qy(t, e) : !1
}

function yi(e = !1) {
    return {isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}}
}

function lv() {
    return {
        animate: yi(!0),
        whileInView: yi(),
        whileHover: yi(),
        whileTap: yi(),
        whileDrag: yi(),
        whileFocus: yi(),
        exit: yi()
    }
}

var jr = class {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }

        update() {
        }
    }, VF = class extends jr {
        constructor(e) {
            super(e), e.animationState || (e.animationState = MF(e))
        }

        updateAnimationControlsSubscription() {
            let {animate: e} = this.node.getProps();
            bs(e) && (this.unmountControls = e.subscribe(this.node))
        }

        mount() {
            this.updateAnimationControlsSubscription()
        }

        update() {
            let {animate: e} = this.node.getProps(), {animate: t} = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }

        unmount() {
            var e;
            this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
        }
    }, AF = 0, DF = class extends jr {
        constructor() {
            super(...arguments), this.id = AF++
        }

        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: e,
                onExitComplete: t
            } = this.node.presenceContext, {isPresent: n} = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === n) return;
            let r = this.node.animationState.setActive("exit", !e);
            t && !e && r.then(() => t(this.id))
        }

        mount() {
            let {register: e} = this.node.presenceContext || {};
            e && (this.unmount = e(this.id))
        }

        unmount() {
        }
    }, wl = {animation: {Feature: VF}, exit: {Feature: DF}},
    Jy = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function Sl(e, t = "page") {
    return {point: {x: e[`${t}X`], y: e[`${t}Y`]}}
}

var e0 = e => t => Jy(t) && e(t, Sl(t));

function yr(e, t, n, r = {passive: !0}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Yn(e, t, n, r) {
    return yr(e, t, e0(n), r)
}

var zf = (e, t) => Math.abs(e - t);

function t0(e, t) {
    let n = zf(e.x, t.x), r = zf(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}

function n0(e) {
    let t = null;
    return () => {
        let n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}

var cv = n0("dragHorizontal"), uv = n0("dragVertical");

function r0(e) {
    let t = !1;
    if (e === "y") t = uv(); else if (e === "x") t = cv(); else {
        let n = cv(), r = uv();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function Sd() {
    let e = r0(!0);
    return e ? (e(), !1) : !0
}

var i0 = 1e-4, zF = 1 - i0, BF = 1 + i0, o0 = .01, $F = 0 - o0, NF = 0 + o0;

function Wt(e) {
    return e.max - e.min
}

function jF(e, t, n) {
    return Math.abs(e - t) <= n
}

function fv(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Me(t.min, t.max, e.origin), e.scale = Wt(n) / Wt(t), e.translate = Me(n.min, n.max, e.origin) - e.originPoint, (e.scale >= zF && e.scale <= BF || isNaN(e.scale)) && (e.scale = 1), (e.translate >= $F && e.translate <= NF || isNaN(e.translate)) && (e.translate = 0)
}

function hs(e, t, n, r) {
    fv(e.x, t.x, n.x, r ? r.originX : void 0), fv(e.y, t.y, n.y, r ? r.originY : void 0)
}

function dv(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Wt(t)
}

function HF(e, t, n) {
    dv(e.x, t.x, n.x), dv(e.y, t.y, n.y)
}

function hv(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Wt(t)
}

function ps(e, t, n) {
    hv(e.x, t.x, n.x), hv(e.y, t.y, n.y)
}

var pv = () => ({translate: 0, scale: 1, origin: 0, originPoint: 0}), no = () => ({x: pv(), y: pv()}),
    mv = () => ({min: 0, max: 0}), Ne = () => ({x: mv(), y: mv()}), po = be(null);

function kd() {
    let e = A(po);
    if (e === null) return [!0, null];
    let {isPresent: t, onExitComplete: n, register: r} = e, i = vr();
    $(() => r(i), []);
    let o = W(() => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}

var ws = be({}), kl = be({}), al = {};

function Cd(e) {
    Object.assign(al, e)
}

var WF = (e, t) => e.depth - t.depth, s0 = class {
    constructor() {
        this.children = [], this.isDirty = !1
    }

    add(e) {
        dd(this.children, e), this.isDirty = !0
    }

    remove(e) {
        gl(this.children, e), this.isDirty = !0
    }

    forEach(e) {
        this.isDirty && this.children.sort(WF), this.isDirty = !1, this.children.forEach(e)
    }
};

function Rt(e) {
    let t = Be(e) ? e.get() : e;
    return SF(t) ? t.toValue() : t
}

function a0(e, t) {
    let n = Xn.now(), r = ({timestamp: i}) => {
        let o = i - n;
        o >= t && (Et(r), e(o - t))
    };
    return Z.read(r, !0), () => Et(r)
}

var Kn = be({transformPagePoint: e => e, isStatic: !1, reducedMotion: "never"}), Ts = be({}), Cl = typeof F < "u",
    Hr = Cl ? ze : $, l0 = be({strict: !1}), {schedule: Td, cancel: WN} = gy(queueMicrotask, !1);

function ro(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function UF(e, t, n, r, i) {
    var o, s;
    let {visualElement: a} = A(Ts), l = A(l0), c = A(po), u = A(Kn).reducedMotion, f = V();
    r = r || l.renderer, !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u
    }));
    let d = f.current, h = A(kl);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && GF(f.current, n, i, h), et(() => {
        d && d.update(n, c)
    });
    let v = n[bl],
        g = V(!!v && !(!((o = F.MotionHandoffIsComplete) === null || o === void 0) && o.call(F, v)) && ((s = F.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(F, v)));
    return Hr(() => {
        d && (F.MotionIsMounted = !0, d.updateFeatures(), Td.render(d.render), g.current && d.animationState && d.animationState.animateChanges())
    }), $(() => {
        d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
            var b;
            (b = F.MotionHandoffMarkAsComplete) === null || b === void 0 || b.call(F, v)
        }), g.current = !1))
    }), d
}

function GF(e, t, n, r) {
    let {layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c} = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : c0(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && ro(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: c
    })
}

function c0(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : c0(e.parent)
}

function qF(e, t, n) {
    return W(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ro(n) && (n.current = r))
    }, [t])
}

function Tl(e) {
    return bs(e.animate) || wd.some(t => xs(e[t]))
}

function u0(e) {
    return !!(Tl(e) || e.variants)
}

function XF(e, t) {
    if (Tl(e)) {
        let {initial: n, animate: r} = e;
        return {initial: n === !1 || xs(n) ? n : void 0, animate: xs(r) ? r : void 0}
    }
    return e.inherit !== !1 ? t : {}
}

function YF(e) {
    let {initial: t, animate: n} = XF(e, A(Ts));
    return oe(() => ({initial: t, animate: n}), [gv(t), gv(n)])
}

function gv(e) {
    return Array.isArray(e) ? e.join(" ") : e
}

var vv = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, ao = {};
for (let e in vv) ao[e] = {isEnabled: t => vv[e].some(n => !!t[n])};

function KF(e) {
    for (let t in e) ao[t] = {...ao[t], ...e[t]}
}

var Rd = Symbol.for("motionComponentSymbol");

function f0({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && KF(e);

    function o(a, l) {
        let c, u = {...A(Kn), ...a, layoutId: QF(a)}, {isStatic: f} = u, d = YF(a), h = r(a, f);
        if (!f && Cl) {
            ZF(u, e);
            let v = JF(u);
            c = v.MeasureLayout, d.visualElement = UF(i, h, u, t, v.ProjectionNode)
        }
        return ge(Ts.Provider, {
            value: d,
            children: [c && d.visualElement ? k(c, {visualElement: d.visualElement, ...u}) : null, n(i, a, qF(h, d.visualElement, l), h, f, d.visualElement)]
        })
    }

    let s = Oe(o);
    return s[Rd] = i, s
}

function QF({layoutId: e}) {
    let t = A(ws).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function ZF(e, t) {
    let n = A(l0).strict
}

function JF(e) {
    let {drag: t, layout: n} = ao;
    if (!t && !n) return {};
    let r = {...t, ...n};
    return {
        MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}

function Zn(e) {
    let t = V(null);
    return t.current === null && (t.current = e()), t.current
}

function eP({applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r}, i, o, s, a) {
    let l = {latestValues: tP(i, o, s, a ? !1 : e, t), renderState: n()};
    return r && (l.mount = c => r(i, c, l)), l
}

var Rl = e => (t, n) => {
    let r = A(Ts), i = A(po), o = () => eP(e, t, r, i, n);
    return n ? o() : Zn(o)
};

function yv(e, t, n) {
    let r = Array.isArray(t) ? t : [t];
    for (let i = 0; i < r.length; i++) {
        let o = pd(e, r[i]);
        if (o) {
            let {transitionEnd: s, transition: a, ...l} = o;
            n(l, s)
        }
    }
}

function tP(e, t, n, r, i) {
    var o;
    let s = {}, a = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0, l = i(e, {});
    for (let g in l) s[g] = Rt(l[g]);
    let {initial: c, animate: u} = e, f = Tl(e), d = u0(e);
    t && d && !f && e.inherit !== !1 && (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
    let h = n ? n.initial === !1 : !1;
    h = h || c === !1;
    let v = h ? u : c;
    return v && typeof v != "boolean" && !bs(v) && yv(e, v, (g, b) => {
        for (let p in g) {
            let m = g[p];
            if (Array.isArray(m)) {
                let y = h ? m.length - 1 : 0;
                m = m[y]
            }
            m !== null && (s[p] = m)
        }
        for (let p in b) s[p] = b[p]
    }), a && u && c !== !1 && !bs(u) && yv(e, u, g => {
        for (let b in g) if (Ky(b)) {
            s.willChange = "transform";
            return
        }
    }), s
}

var d0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    nP = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"}, rP = Cs.length;

function h0(e, t, n) {
    let r = "", i = !0;
    for (let o = 0; o < rP; o++) {
        let s = Cs[o], a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            let c = d0(a, cd[s]);
            if (!l) {
                i = !1;
                let u = nP[s] || s;
                r += `${u}(${c}) `
            }
            n && (t[s] = c)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

var iP = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function lo(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || iP.has(e)
}

var p0 = e => !lo(e);

function m0(e) {
    e && (p0 = t => t.startsWith("on") ? !lo(t) : e(t))
}

try {
    m0(HR().default)
} catch {
}

function g0(e, t, n) {
    let r = {};
    for (let i in e) i === "values" && typeof e.values == "object" || (p0(i) || n === !0 && lo(i) || !t && !lo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

var Qn = new WeakMap, ll = {current: null}, Ed = {current: !1};

function v0() {
    if (Ed.current = !0, !!Cl) if (F.matchMedia) {
        let e = F.matchMedia("(prefers-reduced-motion)"), t = () => ll.current = e.matches;
        e.addListener(t), t()
    } else ll.current = !1
}

function oP(e, t, n) {
    for (let r in t) {
        let i = t[r], o = n[r];
        if (Be(i)) e.addValue(r, i); else if (Be(o)) e.addValue(r, Ye(i, {owner: e})); else if (o !== i) if (e.hasValue(r)) {
            let s = e.getValue(r);
            s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
        } else {
            let s = e.getStaticValue(r);
            e.addValue(r, Ye(s !== void 0 ? s : i, {owner: e}))
        }
    }
    for (let r in n) t[r] === void 0 && e.removeValue(r);
    return t
}

var sP = [...$y, xt, xr], aP = e => sP.find(By(e)),
    bv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    Fd = class {
        scrapeMotionValuesFromProps(e, t, n) {
            return {}
        }

        constructor({
                        parent: e,
                        props: t,
                        presenceContext: n,
                        reducedMotionConfig: r,
                        blockInitialAnimation: i,
                        visualState: o
                    }, s = {}) {
            this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = ad, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let f = Xn.now();
                this.renderScheduledAt < f && (this.renderScheduledAt = f, Z.render(this.render, !1, !0))
            };
            let {latestValues: a, renderState: l} = o;
            this.latestValues = a, this.baseTarget = {...a}, this.initialValues = t.initial ? {...a} : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = Tl(t), this.isVariantNode = u0(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            let {willChange: c, ...u} = this.scrapeMotionValuesFromProps(t, {}, this);
            for (let f in u) {
                let d = u[f];
                a[f] !== void 0 && Be(d) && d.set(a[f], !1)
            }
        }

        mount(e) {
            this.current = e, Qn.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, n) => this.bindToMotionValue(n, t)), Ed.current || v0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ll.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }

        unmount() {
            Qn.delete(this.current), this.projection && this.projection.unmount(), Et(this.notifyUpdate), Et(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
            for (let e in this.events) this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }

        bindToMotionValue(e, t) {
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            let n = Nr.has(e), r = t.on("change", s => {
                this.latestValues[e] = s, this.props.onUpdate && Z.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
            }), i = t.on("renderRequest", this.scheduleRender), o;
            F.MotionCheckAppearSync && (o = F.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                r(), i(), o && o(), t.owner && t.stop()
            })
        }

        sortNodePosition(e) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
        }

        updateFeatures() {
            let e = "animation";
            for (e in ao) {
                let t = ao[e];
                if (!t) continue;
                let {isEnabled: n, Feature: r} = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    let i = this.features[e];
                    i.isMounted ? i.update() : (i.mount(), i.isMounted = !0)
                }
            }
        }

        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }

        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ne()
        }

        getStaticValue(e) {
            return this.latestValues[e]
        }

        setStaticValue(e, t) {
            this.latestValues[e] = t
        }

        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let n = 0; n < bv.length; n++) {
                let r = bv[n];
                this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                let i = "on" + r, o = e[i];
                o && (this.propEventSubscriptions[r] = this.on(r, o))
            }
            this.prevMotionValues = oP(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }

        getProps() {
            return this.props
        }

        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }

        getDefaultTransition() {
            return this.props.transition
        }

        getTransformPagePoint() {
            return this.props.transformPagePoint
        }

        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }

        addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }

        addValue(e, t) {
            let n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }

        removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }

        hasValue(e) {
            return this.values.has(e)
        }

        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let n = this.values.get(e);
            return n === void 0 && t !== void 0 && (n = Ye(t === null ? void 0 : t, {owner: this}), this.addValue(e, n)), n
        }

        readValue(e, t) {
            var n;
            let r = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);
            return r != null && (typeof r == "string" && (Dy(r) || Ay(r)) ? r = parseFloat(r) : !aP(r) && xr.test(t) && (r = Ny(e, t)), this.setBaseTarget(e, Be(r) ? r.get() : r)), Be(r) ? r.get() : r
        }

        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }

        getBaseTarget(e) {
            var t;
            let {initial: n} = this.props, r;
            if (typeof n == "string" || typeof n == "object") {
                let o = pd(this.props, n, (t = this.presenceContext) === null || t === void 0 ? void 0 : t.custom);
                o && (r = o[e])
            }
            if (n && r !== void 0) return r;
            let i = this.getBaseTargetFromProps(this.props, e);
            return i !== void 0 && !Be(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e]
        }

        on(e, t) {
            return this.events[e] || (this.events[e] = new hd), this.events[e].add(t)
        }

        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
    };

function lP(e) {
    if (typeof Proxy > "u") return e;
    let t = new Map, n = (...r) => e(...r);
    return new Proxy(n, {get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))})
}

var y0 = class {
    constructor(e, t, {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1} = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = F, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let u = gf(this.lastMoveEventInfo, this.history), f = this.startEvent !== null,
                d = t0(u.offset, {x: 0, y: 0}) >= 3;
            if (!f && !d) return;
            let {point: h} = u, {timestamp: v} = Xe;
            this.history.push({...h, timestamp: v});
            let {onStart: g, onMove: b} = this.handlers;
            f || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, u)
        }, this.handlePointerMove = (u, f) => {
            this.lastMoveEvent = u, this.lastMoveEventInfo = mf(f, this.transformPagePoint), Z.update(this.updatePoint, !0)
        }, this.handlePointerUp = (u, f) => {
            this.end();
            let {onEnd: d, onSessionEnd: h, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let g = gf(u.type === "pointercancel" ? this.lastMoveEventInfo : mf(f, this.transformPagePoint), this.history);
            this.startEvent && d && d(u, g), h && h(u, g)
        }, !Jy(e)) return;
        this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || F;
        let o = Sl(e), s = mf(o, this.transformPagePoint), {point: a} = s, {timestamp: l} = Xe;
        this.history = [{...a, timestamp: l}];
        let {onSessionStart: c} = t;
        c && c(e, gf(s, this.history)), this.removeListeners = qn(Yn(this.contextWindow, "pointermove", this.handlePointerMove), Yn(this.contextWindow, "pointerup", this.handlePointerUp), Yn(this.contextWindow, "pointercancel", this.handlePointerUp))
    }

    updateHandlers(e) {
        this.handlers = e
    }

    end() {
        this.removeListeners && this.removeListeners(), Et(this.updatePoint)
    }
};

function mf(e, t) {
    return t ? {point: t(e.point)} : e
}

function xv(e, t) {
    return {x: e.x - t.x, y: e.y - t.y}
}

function gf({point: e}, t) {
    return {point: e, delta: xv(e, b0(t)), offset: xv(e, cP(t)), velocity: uP(t, .1)}
}

function cP(e) {
    return e[0]
}

function b0(e) {
    return e[e.length - 1]
}

function uP(e, t) {
    if (e.length < 2) return {x: 0, y: 0};
    let n = e.length - 1, r = null, i = b0(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > On(t)));) n--;
    if (!r) return {x: 0, y: 0};
    let o = Gn(i.timestamp - r.timestamp);
    if (o === 0) return {x: 0, y: 0};
    let s = {x: (i.x - r.x) / o, y: (i.y - r.y) / o};
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function fP(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Me(n, e, r.max) : Math.min(e, n)), e
}

function wv(e, t, n) {
    return {min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0}
}

function dP(e, {top: t, left: n, bottom: r, right: i}) {
    return {x: wv(e.x, n, i), y: wv(e.y, t, r)}
}

function Sv(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {min: n, max: r}
}

function hP(e, t) {
    return {x: Sv(e.x, t.x), y: Sv(e.y, t.y)}
}

function pP(e, t) {
    let n = .5, r = Wt(e), i = Wt(t);
    return i > r ? n = wr(t.min, t.max - r, e.min) : r > i && (n = wr(e.min, e.max - i, t.min)), br(0, 1, n)
}

function mP(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}

var Bf = .35;

function gP(e = Bf) {
    return e === !1 ? e = 0 : e === !0 && (e = Bf), {x: kv(e, "left", "right"), y: kv(e, "top", "bottom")}
}

function kv(e, t, n) {
    return {min: Cv(e, t), max: Cv(e, n)}
}

function Cv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}

function yn(e) {
    return [e("x"), e("y")]
}

function x0({top: e, left: t, right: n, bottom: r}) {
    return {x: {min: t, max: n}, y: {min: e, max: r}}
}

function vP({x: e, y: t}) {
    return {top: t.min, right: e.max, bottom: t.max, left: e.min}
}

function yP(e, t) {
    if (!t) return e;
    let n = t({x: e.left, y: e.top}), r = t({x: e.right, y: e.bottom});
    return {top: n.y, left: n.x, bottom: r.y, right: r.x}
}

function vf(e) {
    return e === void 0 || e === 1
}

function $f({scale: e, scaleX: t, scaleY: n}) {
    return !vf(e) || !vf(t) || !vf(n)
}

function bi(e) {
    return $f(e) || w0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function w0(e) {
    return Tv(e.x) || Tv(e.y)
}

function Tv(e) {
    return e && e !== "0%"
}

function cl(e, t, n) {
    let r = e - n, i = t * r;
    return n + i
}

function Rv(e, t, n, r, i) {
    return i !== void 0 && (e = cl(e, i, r)), cl(e, n, r) + t
}

function Nf(e, t = 0, n = 1, r, i) {
    e.min = Rv(e.min, t, n, r, i), e.max = Rv(e.max, t, n, r, i)
}

function S0(e, {x: t, y: n}) {
    Nf(e.x, t.translate, t.scale, t.originPoint), Nf(e.y, n.translate, n.scale, n.originPoint)
}

var Ev = .999999999999, Fv = 1.0000000000001;

function bP(e, t, n, r = !1) {
    let i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a], s = o.projectionDelta;
        let {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && oo(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, S0(e, s)), r && bi(o.latestValues) && oo(e, o.latestValues))
    }
    t.x < Fv && t.x > Ev && (t.x = 1), t.y < Fv && t.y > Ev && (t.y = 1)
}

function io(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Pv(e, t, n, r, i = .5) {
    let o = Me(e.min, e.max, i);
    Nf(e, t, n, o, r)
}

function oo(e, t) {
    Pv(e.x, t.x, t.scaleX, t.scale, t.originX), Pv(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function k0(e, t) {
    return x0(yP(e.getBoundingClientRect(), t))
}

function xP(e, t, n) {
    let r = k0(e, n), {scroll: i} = t;
    return i && (io(r.x, i.offset.x), io(r.y, i.offset.y)), r
}

var C0 = ({current: e}) => e ? e.ownerDocument.defaultView : null, wP = new WeakMap, SP = class {
    constructor(e) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ne(), this.visualElement = e
    }

    start(e, {snapToCursor: t = !1} = {}) {
        let {presenceContext: n} = this.visualElement;
        if (n && n.isPresent === !1) return;
        let r = c => {
            let {dragSnapToOrigin: u} = this.getProps();
            u ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(Sl(c, "page").point)
        }, i = (c, u) => {
            let {drag: f, dragPropagation: d, onDragStart: h} = this.getProps();
            if (f && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = r0(f), !this.openGlobalLock)) return;
            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), yn(g => {
                let b = this.getAxisMotionValue(g).get() || 0;
                if (Un.test(b)) {
                    let {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        let m = p.layout.layoutBox[g];
                        m && (b = Wt(m) * (parseFloat(b) / 100))
                    }
                }
                this.originPoint[g] = b
            }), h && Z.postRender(() => h(c, u)), Af(this.visualElement, "transform");
            let {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }, o = (c, u) => {
            let {dragPropagation: f, dragDirectionLock: d, onDirectionLock: h, onDrag: v} = this.getProps();
            if (!f && !this.openGlobalLock) return;
            let {offset: g} = u;
            if (d && this.currentDirection === null) {
                this.currentDirection = kP(g), this.currentDirection !== null && h && h(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), v && v(c, u)
        }, s = (c, u) => this.stop(c, u), a = () => yn(c => {
            var u;
            return this.getAnimationState(c) === "paused" && ((u = this.getAxisMotionValue(c).animation) === null || u === void 0 ? void 0 : u.play())
        }), {dragSnapToOrigin: l} = this.getProps();
        this.panSession = new y0(e, {
            onSessionStart: r,
            onStart: i,
            onMove: o,
            onSessionEnd: s,
            resumeAnimation: a
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: l,
            contextWindow: C0(this.visualElement)
        })
    }

    stop(e, t) {
        let n = this.isDragging;
        if (this.cancel(), !n) return;
        let {velocity: r} = t;
        this.startAnimation(r);
        let {onDragEnd: i} = this.getProps();
        i && Z.postRender(() => i(e, t))
    }

    cancel() {
        this.isDragging = !1;
        let {projection: e, animationState: t} = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        let {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
    }

    updateAxis(e, t, n) {
        let {drag: r} = this.getProps();
        if (!n || !Ka(e, r, this.currentDirection)) return;
        let i = this.getAxisMotionValue(e), o = this.originPoint[e] + n[e];
        this.constraints && this.constraints[e] && (o = fP(o, this.constraints[e], this.elastic[e])), i.set(o)
    }

    resolveConstraints() {
        var e;
        let {dragConstraints: t, dragElastic: n} = this.getProps(),
            r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout,
            i = this.constraints;
        t && ro(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = dP(r.layoutBox, t) : this.constraints = !1, this.elastic = gP(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && yn(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = mP(r.layoutBox[o], this.constraints[o]))
        })
    }

    resolveRefConstraints() {
        let {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
        if (!e || !ro(e)) return !1;
        let n = e.current;
        en(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        let {projection: r} = this.visualElement;
        if (!r || !r.layout) return !1;
        let i = xP(n, r.root, this.visualElement.getTransformPagePoint()), o = hP(r.layout.layoutBox, i);
        if (t) {
            let s = t(vP(o));
            this.hasMutatedConstraints = !!s, s && (o = x0(s))
        }
        return o
    }

    startAnimation(e) {
        let {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: s
        } = this.getProps(), a = this.constraints || {}, l = yn(c => {
            if (!Ka(c, t, this.currentDirection)) return;
            let u = a && a[c] || {};
            o && (u = {min: 0, max: 0});
            let f = r ? 200 : 1e6, d = r ? 40 : 1e7, h = {
                type: "inertia",
                velocity: n ? e[c] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10, ...i, ...u
            };
            return this.startAxisValueAnimation(c, h)
        });
        return Promise.all(l).then(s)
    }

    startAxisValueAnimation(e, t) {
        let n = this.getAxisMotionValue(e);
        return Af(this.visualElement, e), n.start(gd(e, n, 0, t, this.visualElement, !1))
    }

    stopAnimation() {
        yn(e => this.getAxisMotionValue(e).stop())
    }

    pauseAnimation() {
        yn(e => {
            var t;
            return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.pause()
        })
    }

    getAnimationState(e) {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.state
    }

    getAxisMotionValue(e) {
        let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps(), r = n[t];
        return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
    }

    snapToCursor(e) {
        yn(t => {
            let {drag: n} = this.getProps();
            if (!Ka(t, n, this.currentDirection)) return;
            let {projection: r} = this.visualElement, i = this.getAxisMotionValue(t);
            if (r && r.layout) {
                let {min: o, max: s} = r.layout.layoutBox[t];
                i.set(e[t] - Me(o, s, .5))
            }
        })
    }

    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let {drag: e, dragConstraints: t} = this.getProps(), {projection: n} = this.visualElement;
        if (!ro(t) || !n || !this.constraints) return;
        this.stopAnimation();
        let r = {x: 0, y: 0};
        yn(o => {
            let s = this.getAxisMotionValue(o);
            if (s && this.constraints !== !1) {
                let a = s.get();
                r[o] = pP({min: a, max: a}, this.constraints[o])
            }
        });
        let {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), yn(o => {
            if (!Ka(o, e, null)) return;
            let s = this.getAxisMotionValue(o), {min: a, max: l} = this.constraints[o];
            s.set(Me(a, l, r[o]))
        })
    }

    addListeners() {
        if (!this.visualElement.current) return;
        wP.set(this.visualElement, this);
        let e = this.visualElement.current, t = Yn(e, "pointerdown", a => {
            let {drag: l, dragListener: c = !0} = this.getProps();
            l && c && this.start(a)
        }), n = () => {
            let {dragConstraints: a} = this.getProps();
            ro(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }, {projection: r} = this.visualElement, i = r.addEventListener("measure", n);
        r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), Z.read(n);
        let o = yr(F, "resize", () => this.scalePositionWithinConstraints()),
            s = r.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: l}) => {
                this.isDragging && l && (yn(c => {
                    let u = this.getAxisMotionValue(c);
                    u && (this.originPoint[c] += a[c].translate, u.set(u.get() + a[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), t(), i(), s && s()
        }
    }

    getProps() {
        let e = this.visualElement.getProps(), {
            drag: t = !1,
            dragDirectionLock: n = !1,
            dragPropagation: r = !1,
            dragConstraints: i = !1,
            dragElastic: o = Bf,
            dragMomentum: s = !0
        } = e;
        return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s
        }
    }
};

function Ka(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function kP(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}

var CP = class extends jr {
    constructor(e) {
        super(e), this.removeGroupControls = wt, this.removeListeners = wt, this.controls = new SP(e)
    }

    mount() {
        let {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || wt
    }

    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}, _v = e => (t, n) => {
    e && Z.postRender(() => e(t, n))
}, TP = class extends jr {
    constructor() {
        super(...arguments), this.removePointerDownListener = wt
    }

    onPointerDown(e) {
        this.session = new y0(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: C0(this.node)
        })
    }

    createPanHandlers() {
        let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
        return {
            onSessionStart: _v(e), onStart: _v(t), onMove: n, onEnd: (i, o) => {
                delete this.session, r && Z.postRender(() => r(i, o))
            }
        }
    }

    mount() {
        this.removePointerDownListener = Yn(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }

    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }

    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}, el = {hasAnimatedSinceResize: !0, hasEverUpdated: !1};

function Iv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}

var ss = {
    correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string") if (J.test(e)) e = parseFloat(e); else return e;
        let n = Iv(e, t.target.x), r = Iv(e, t.target.y);
        return `${n}% ${r}%`
    }
}, RP = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        let r = e, i = xr.parse(e);
        if (i.length > 5) return r;
        let o = xr.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
        i[0 + s] /= a, i[1 + s] /= l;
        let c = Me(a, l, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= c), typeof i[3 + s] == "number" && (i[3 + s] /= c), o(i)
    }
}, EP = class extends Se {
    componentDidMount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props, {projection: i} = e;
        Cd(FP), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({...i.options, onExitComplete: () => this.safeToRemove()})), el.hasEverUpdated = !0
    }

    getSnapshotBeforeUpdate(e) {
        let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props, o = n.projection;
        return o && (o.isPresent = i, r || e.layoutDependency !== t || t === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? o.promote() : o.relegate() || Z.postRender(() => {
            let s = o.getStack();
            (!s || !s.members.length) && this.safeToRemove()
        }))), null
    }

    componentDidUpdate() {
        let {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(), Td.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }

    componentWillUnmount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props, {projection: r} = e;
        r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
    }

    safeToRemove() {
        let {safeToRemove: e} = this.props;
        e && e()
    }

    render() {
        return null
    }
};

function T0(e) {
    let [t, n] = kd(), r = A(ws);
    return k(EP, {...e, layoutGroup: r, switchLayoutGroup: A(kl), isPresent: t, safeToRemove: n})
}

var FP = {
        borderRadius: {
            ...ss,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: ss,
        borderTopRightRadius: ss,
        borderBottomLeftRadius: ss,
        borderBottomRightRadius: ss,
        boxShadow: RP
    }, R0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], PP = R0.length,
    Ov = e => typeof e == "string" ? parseFloat(e) : e, Mv = e => typeof e == "number" || J.test(e);

function _P(e, t, n, r, i, o) {
    i ? (e.opacity = Me(0, n.opacity !== void 0 ? n.opacity : 1, IP(r)), e.opacityExit = Me(t.opacity !== void 0 ? t.opacity : 1, 0, OP(r))) : o && (e.opacity = Me(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < PP; s++) {
        let a = `border${R0[s]}Radius`, l = Lv(t, a), c = Lv(n, a);
        if (l === void 0 && c === void 0) continue;
        l || (l = 0), c || (c = 0), l === 0 || c === 0 || Mv(l) === Mv(c) ? (e[a] = Math.max(Me(Ov(l), Ov(c), r), 0), (Un.test(c) || Un.test(l)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = Me(t.rotate || 0, n.rotate || 0, r))
}

function Lv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}

var IP = E0(0, .5, Kf), OP = E0(.5, .95, wt);

function E0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(wr(e, t, r))
}

function Vv(e, t) {
    e.min = t.min, e.max = t.max
}

function vn(e, t) {
    Vv(e.x, t.x), Vv(e.y, t.y)
}

function Av(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function Dv(e, t, n, r, i) {
    return e -= t, e = cl(e, 1 / n, r), i !== void 0 && (e = cl(e, 1 / i, r)), e
}

function MP(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (Un.test(t) && (t = parseFloat(t), t = Me(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = Me(o.min, o.max, r);
    e === o && (a -= t), e.min = Dv(e.min, t, n, a, i), e.max = Dv(e.max, t, n, a, i)
}

function zv(e, t, [n, r, i], o, s) {
    MP(e, t[n], t[r], t[i], t.scale, o, s)
}

var LP = ["x", "scaleX", "originX"], VP = ["y", "scaleY", "originY"];

function Bv(e, t, n, r) {
    zv(e.x, t, LP, n ? n.x : void 0, r ? r.x : void 0), zv(e.y, t, VP, n ? n.y : void 0, r ? r.y : void 0)
}

function $v(e) {
    return e.translate === 0 && e.scale === 1
}

function F0(e) {
    return $v(e.x) && $v(e.y)
}

function Nv(e, t) {
    return e.min === t.min && e.max === t.max
}

function AP(e, t) {
    return Nv(e.x, t.x) && Nv(e.y, t.y)
}

function jv(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function P0(e, t) {
    return jv(e.x, t.x) && jv(e.y, t.y)
}

function Hv(e) {
    return Wt(e.x) / Wt(e.y)
}

function Wv(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}

var DP = class {
    constructor() {
        this.members = []
    }

    add(e) {
        dd(this.members, e), e.scheduleRender()
    }

    remove(e) {
        if (gl(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }

    relegate(e) {
        let t = this.members.findIndex(r => e === r);
        if (t === 0) return !1;
        let n;
        for (let r = t; r >= 0; r--) {
            let i = this.members[r];
            if (i.isPresent !== !1) {
                n = i;
                break
            }
        }
        return n ? (this.promote(n), !0) : !1
    }

    promote(e, t) {
        let n = this.lead;
        if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
            n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let {crossfade: r} = e.options;
            r === !1 && n.hide()
        }
    }

    exitAnimationComplete() {
        this.members.forEach(e => {
            let {options: t, resumingFrom: n} = e;
            t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
        })
    }

    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }

    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
};

function zP(e, t, n) {
    let r = "", i = e.x.translate / t.x, o = e.y.translate / t.y, s = n?.z || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
        let {transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: h, skewY: v} = n;
        c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), h && (r += `skewX(${h}deg) `), v && (r += `skewY(${v}deg) `)
    }
    let a = e.x.scale * t.x, l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}

function _0(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function I0(e, t, n) {
    let r = Be(e) ? e : Ye(e);
    return r.start(gd("", r, t, n)), r.animation
}

var xi = {type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0},
    us = typeof F < "u" && F.MotionDebug !== void 0, yf = ["", "X", "Y", "Z"], BP = {visibility: "hidden"}, Uv = 1e3,
    $P = 0;

function bf(e, t, n, r) {
    let {latestValues: i} = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function O0(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    let {visualElement: t} = e.options;
    if (!t) return;
    let n = Yy(t);
    if (F.MotionHasOptimisedAnimation(n, "transform")) {
        let {layout: i, layoutId: o} = e.options;
        F.MotionCancelOptimisedAnimation(n, "transform", Z, !(i || o))
    }
    let {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && O0(r)
}

function M0({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s = {}, a = t?.()) {
            this.id = $P++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, us && (xi.totalNodes = xi.resolvedTargetDeltas = xi.recalculatedProjection = 0), this.nodes.forEach(HP), this.nodes.forEach(XP), this.nodes.forEach(YP), this.nodes.forEach(WP), us && F.MotionDebug.record(xi)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new s0)
        }

        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new hd), this.eventHandlers.get(s).add(a)
        }

        notifyListeners(s, ...a) {
            let l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }

        hasListeners(s) {
            return this.eventHandlers.has(s)
        }

        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = _0(s), this.instance = s;
            let {layoutId: l, layout: c, visualElement: u} = this.options;
            if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
                let f, d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = a0(d, 250), el.hasAnimatedSinceResize && (el.hasAnimatedSinceResize = !1, this.nodes.forEach(qv))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({
                                                                                                                                                delta: f,
                                                                                                                                                hasLayoutChanged: d,
                                                                                                                                                hasRelativeTargetChanged: h,
                                                                                                                                                layout: v
                                                                                                                                            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                let g = this.options.transition || u.getDefaultTransition() || e_, {
                    onLayoutAnimationStart: b,
                    onLayoutAnimationComplete: p
                } = u.getProps(), m = !this.targetLayout || !P0(this.targetLayout, v) || h, y = !d && h;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || d && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, y);
                    let w = {...md(g, "layout"), onPlay: b, onComplete: p};
                    (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else d || qv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            })
        }

        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Et(this.updateProjection)
        }

        blockUpdate() {
            this.updateManuallyBlocked = !0
        }

        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }

        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }

        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }

        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(KP), this.animationId++)
        }

        getTransformTemplate() {
            let {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }

        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (F.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && O0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                let f = this.path[u];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            let {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l) return;
            let c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }

        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Gv);
                return
            }
            this.isUpdating || this.nodes.forEach(GP), this.isUpdating = !1, this.nodes.forEach(qP), this.nodes.forEach(NP), this.nodes.forEach(jP), this.clearAllSnapshots();
            let a = Xn.now();
            Xe.delta = br(0, 1e3 / 60, a - Xe.timestamp), Xe.timestamp = a, Xe.isProcessing = !0, Za.update.process(Xe), Za.preRender.process(Xe), Za.render.process(Xe), Xe.isProcessing = !1
        }

        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Td.read(this.scheduleUpdate))
        }

        clearAllSnapshots() {
            this.nodes.forEach(UP), this.sharedNodes.forEach(QP)
        }

        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Z.preRender(this.updateProjection, !1, !0))
        }

        scheduleCheckAfterUnmount() {
            Z.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }

        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }

        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            let s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Ne(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            let {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }

        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
                let l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }

        resetTransform() {
            if (!i) return;
            let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !F0(this.projectionDelta), l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
            s && (a || bi(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }

        measure(s = !0) {
            let a = this.measurePageBox(), l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), t_(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }

        measurePageBox() {
            var s;
            let {visualElement: a} = this.options;
            if (!a) return Ne();
            let l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(n_))) {
                let {scroll: u} = this.root;
                u && (io(l.x, u.offset.x), io(l.y, u.offset.y))
            }
            return l
        }

        removeElementScroll(s) {
            var a;
            let l = Ne();
            if (vn(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let c = 0; c < this.path.length; c++) {
                let u = this.path[c], {scroll: f, options: d} = u;
                u !== this.root && f && d.layoutScroll && (f.wasRoot && vn(l, s), io(l.x, f.offset.x), io(l.y, f.offset.y))
            }
            return l
        }

        applyTransform(s, a = !1) {
            let l = Ne();
            vn(l, s);
            for (let c = 0; c < this.path.length; c++) {
                let u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && oo(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }), bi(u.latestValues) && oo(l, u.latestValues)
            }
            return bi(this.latestValues) && oo(l, this.latestValues), l
        }

        removeTransform(s) {
            let a = Ne();
            vn(a, s);
            for (let l = 0; l < this.path.length; l++) {
                let c = this.path[l];
                if (!c.instance || !bi(c.latestValues)) continue;
                $f(c.latestValues) && c.updateSnapshot();
                let u = Ne(), f = c.measurePageBox();
                vn(u, f), Bv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return bi(this.latestValues) && Bv(a, this.latestValues), a
        }

        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }

        setOptions(s) {
            this.options = {...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0}
        }

        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }

        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Xe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }

        resolveTargetDelta(s = !1) {
            var a;
            let l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            let c = !!this.resumingFrom || this !== l;
            if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            let {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = Xe.timestamp, !this.targetDelta && !this.relativeTarget) {
                    let h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ne(), this.relativeTargetOrigin = Ne(), ps(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), vn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ne(), this.targetWithTransforms = Ne()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), HF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : vn(this.target, this.layout.layoutBox), S0(this.target, this.targetDelta)) : vn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        let h = this.getClosestProjectingParent();
                        h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ne(), this.relativeTargetOrigin = Ne(), ps(this.relativeTargetOrigin, this.target, h.target), vn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    us && xi.resolvedTargetDeltas++
                }
            }
        }

        getClosestProjectingParent() {
            if (!(!this.parent || $f(this.parent.latestValues) || w0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }

        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }

        calcProjection() {
            var s;
            let a = this.getLead(), l = !!this.resumingFrom || this !== a, c = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Xe.timestamp && (c = !1), c) return;
            let {layout: u, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f)) return;
            vn(this.layoutCorrected, this.layout.layoutBox);
            let d = this.treeScale.x, h = this.treeScale.y;
            bP(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ne());
            let {target: v} = a;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Av(this.prevProjectionDelta.x, this.projectionDelta.x), Av(this.prevProjectionDelta.y, this.projectionDelta.y)), hs(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !Wv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Wv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), us && xi.recalculatedProjection++
        }

        hide() {
            this.isVisible = !1
        }

        show() {
            this.isVisible = !0
        }

        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
                let l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }

        createProjectionDeltas() {
            this.prevProjectionDelta = no(), this.projectionDelta = no(), this.projectionDeltaWithTransform = no()
        }

        setAnimationOrigin(s, a = !1) {
            let l = this.snapshot, c = l ? l.latestValues : {}, u = {...this.latestValues}, f = no();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            let d = Ne(), h = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = h !== v,
                b = this.getStack(), p = !b || b.members.length <= 1,
                m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(JP));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = w => {
                let C = w / 1e3;
                Xv(f.x, s.x, C), Xv(f.y, s.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ps(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), ZP(this.relativeTarget, this.relativeTargetOrigin, d, C), y && AP(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Ne()), vn(y, this.relativeTarget)), g && (this.animationValues = u, _P(u, c, this.latestValues, C, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }

        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Z.update(() => {
                el.hasAnimatedSinceResize = !0, this.currentAnimation = I0(0, Uv, {
                    ...s, onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    }, onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }

        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }

        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Uv), this.currentAnimation.stop()), this.completeAnimation()
        }

        applyTransformsToTarget() {
            let s = this.getLead(), {targetWithTransforms: a, target: l, layout: c, latestValues: u} = s;
            if (!(!a || !l || !c)) {
                if (this !== s && this.layout && c && L0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || Ne();
                    let f = Wt(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + f;
                    let d = Wt(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + d
                }
                vn(a, l), oo(a, u), hs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }

        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new DP), this.sharedNodes.get(s).add(a);
            let c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }

        isLead() {
            let s = this.getStack();
            return s ? s.lead === this : !0
        }

        getLead() {
            var s;
            let {layoutId: a} = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }

        getPrevLead() {
            var s;
            let {layoutId: a} = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }

        getStack() {
            let {layoutId: s} = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }

        promote({needsReset: s, transition: a, preserveFollowOpacity: l} = {}) {
            let c = this.getStack();
            c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({transition: a})
        }

        relegate() {
            let s = this.getStack();
            return s ? s.relegate(this) : !1
        }

        resetSkewAndRotation() {
            let {visualElement: s} = this.options;
            if (!s) return;
            let a = !1, {latestValues: l} = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            let c = {};
            l.z && bf("z", s, c, this.animationValues);
            for (let u = 0; u < yf.length; u++) bf(`rotate${yf[u]}`, s, c, this.animationValues), bf(`skew${yf[u]}`, s, c, this.animationValues);
            s.render();
            for (let u in c) s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
            s.scheduleRender()
        }

        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return BP;
            let c = {visibility: ""}, u = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = Rt(s?.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
            let f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                let g = {};
                return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Rt(s?.pointerEvents) || ""), this.hasProjected && !bi(this.latestValues) && (g.transform = u ? u({}, "") : "none", this.hasProjected = !1), g
            }
            let d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), c.transform = zP(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
            let {x: h, y: v} = this.projectionDelta;
            c.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (let g in al) {
                if (d[g] === void 0) continue;
                let {correct: b, applyTo: p} = al[g], m = c.transform === "none" ? d[g] : b(d[g], f);
                if (p) {
                    let y = p.length;
                    for (let w = 0; w < y; w++) c[p[w]] = m
                } else c[g] = m
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? Rt(s?.pointerEvents) || "" : "none"), c
        }

        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }

        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(Gv), this.root.sharedNodes.clear()
        }
    }
}

function NP(e) {
    e.updateLayout()
}

function jP(e) {
    var t;
    let n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        let {layoutBox: r, measuredBox: i} = e.layout, {animationType: o} = e.options, s = n.source !== e.layout.source;
        o === "size" ? yn(f => {
            let d = s ? n.measuredBox[f] : n.layoutBox[f], h = Wt(d);
            d.min = r[f].min, d.max = d.min + h
        }) : L0(o, n.layoutBox, r) && yn(f => {
            let d = s ? n.measuredBox[f] : n.layoutBox[f], h = Wt(r[f]);
            d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + h)
        });
        let a = no();
        hs(a, r, n.layoutBox);
        let l = no();
        s ? hs(l, e.applyTransform(i, !0), n.measuredBox) : hs(l, r, n.layoutBox);
        let c = !F0(a), u = !1;
        if (!e.resumeFrom) {
            let f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                let {snapshot: d, layout: h} = f;
                if (d && h) {
                    let v = Ne();
                    ps(v, n.layoutBox, d.layoutBox);
                    let g = Ne();
                    ps(g, r, h.layoutBox), P0(v, g) || (u = !0), f.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        let {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function HP(e) {
    us && xi.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function WP(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function UP(e) {
    e.clearSnapshot()
}

function Gv(e) {
    e.clearMeasurements()
}

function GP(e) {
    e.isLayoutDirty = !1
}

function qP(e) {
    let {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function qv(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function XP(e) {
    e.resolveTargetDelta()
}

function YP(e) {
    e.calcProjection()
}

function KP(e) {
    e.resetSkewAndRotation()
}

function QP(e) {
    e.removeLeadSnapshot()
}

function Xv(e, t, n) {
    e.translate = Me(t.translate, 0, n), e.scale = Me(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Yv(e, t, n, r) {
    e.min = Me(t.min, n.min, r), e.max = Me(t.max, n.max, r)
}

function ZP(e, t, n, r) {
    Yv(e.x, t.x, n.x, r), Yv(e.y, t.y, n.y, r)
}

function JP(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}

var e_ = {duration: .45, ease: [.4, 0, .1, 1]},
    Kv = e => typeof Re < "u" && Re.userAgent && Re.userAgent.toLowerCase().includes(e),
    Qv = Kv("applewebkit/") && !Kv("chrome/") ? Math.round : wt;

function Zv(e) {
    e.min = Qv(e.min), e.max = Qv(e.max)
}

function t_(e) {
    Zv(e.x), Zv(e.y)
}

function L0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !jF(Hv(t), Hv(n), .2)
}

function n_(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}

var r_ = M0({
    attachResizeListener: (e, t) => yr(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
}), ki = {current: void 0}, V0 = M0({
    measureScroll: e => ({x: e.scrollLeft, y: e.scrollTop}), defaultParent: () => {
        if (!ki.current) {
            let e = new r_({});
            e.mount(F), e.setOptions({layoutScroll: !0}), ki.current = e
        }
        return ki.current
    }, resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }, checkIsScrollRoot: e => F.getComputedStyle(e).position === "fixed"
}), A0 = {pan: {Feature: TP}, drag: {Feature: CP, ProjectionNode: V0, MeasureLayout: T0}};

function Jv(e, t) {
    let n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
        if (o.pointerType === "touch" || Sd()) return;
        let a = e.getProps();
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
        let l = a[r];
        l && Z.postRender(() => l(o, s))
    };
    return Yn(e.current, n, i, {passive: !e.getProps()[r]})
}

var i_ = class extends jr {
    mount() {
        this.unmount = qn(Jv(this.node, !0), Jv(this.node, !1))
    }

    unmount() {
    }
}, o_ = class extends jr {
    constructor() {
        super(...arguments), this.isActive = !1
    }

    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }

    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }

    mount() {
        this.unmount = qn(yr(this.node.current, "focus", () => this.onFocus()), yr(this.node.current, "blur", () => this.onBlur()))
    }

    unmount() {
    }
}, D0 = (e, t) => t ? e === t ? !0 : D0(e, t.parentElement) : !1;

function xf(e, t) {
    if (!t) return;
    let n = new PointerEvent("pointer" + e);
    t(n, Sl(n))
}

var s_ = class extends jr {
    constructor() {
        super(...arguments), this.removeStartListeners = wt, this.removeEndListeners = wt, this.removeAccessibleListeners = wt, this.startPointerPress = (e, t) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            let n = this.node.getProps(), i = Yn(F, "pointerup", (s, a) => {
                    if (!this.checkPressEnd()) return;
                    let {onTap: l, onTapCancel: c, globalTapTarget: u} = this.node.getProps(),
                        f = !u && !D0(this.node.current, s.target) ? c : l;
                    f && Z.update(() => f(s, a))
                }, {passive: !(n.onTap || n.onPointerUp)}),
                o = Yn(F, "pointercancel", (s, a) => this.cancelPress(s, a), {passive: !(n.onTapCancel || n.onPointerCancel)});
            this.removeEndListeners = qn(i, o), this.startPress(e, t)
        }, this.startAccessiblePress = () => {
            let e = i => {
                if (i.key !== "Enter" || this.isPressing) return;
                let o = s => {
                    s.key !== "Enter" || !this.checkPressEnd() || xf("up", (a, l) => {
                        let {onTap: c} = this.node.getProps();
                        c && Z.postRender(() => c(a, l))
                    })
                };
                this.removeEndListeners(), this.removeEndListeners = yr(this.node.current, "keyup", o), xf("down", (s, a) => {
                    this.startPress(s, a)
                })
            }, t = yr(this.node.current, "keydown", e), n = () => {
                this.isPressing && xf("cancel", (i, o) => this.cancelPress(i, o))
            }, r = yr(this.node.current, "blur", n);
            this.removeAccessibleListeners = qn(t, r)
        }
    }

    startPress(e, t) {
        this.isPressing = !0;
        let {onTapStart: n, whileTap: r} = this.node.getProps();
        r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Z.postRender(() => n(e, t))
    }

    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Sd()
    }

    cancelPress(e, t) {
        if (!this.checkPressEnd()) return;
        let {onTapCancel: n} = this.node.getProps();
        n && Z.postRender(() => n(e, t))
    }

    mount() {
        let e = this.node.getProps(),
            t = Yn(e.globalTapTarget ? F : this.node.current, "pointerdown", this.startPointerPress, {passive: !(e.onTapStart || e.onPointerStart)}),
            n = yr(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = qn(t, n)
    }

    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}, jf = new WeakMap, wf = new WeakMap, a_ = e => {
    let t = jf.get(e.target);
    t && t(e)
}, l_ = e => {
    e.forEach(a_)
};

function c_({root: e, ...t}) {
    let n = e || document;
    wf.has(n) || wf.set(n, {});
    let r = wf.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(l_, {root: e, ...t})), r[i]
}

function u_(e, t, n) {
    let r = c_(t);
    return jf.set(e, n), r.observe(e), () => {
        jf.delete(e), r.unobserve(e)
    }
}

var f_ = {some: 0, all: 1}, d_ = class extends jr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }

    startObserver() {
        this.unmount();
        let {viewport: e = {}} = this.node.getProps(), {root: t, margin: n, amount: r = "some", once: i} = e,
            o = {root: t ? t.current : void 0, rootMargin: n, threshold: typeof r == "number" ? r : f_[r]}, s = a => {
                let {isIntersecting: l} = a;
                if (this.isInView === l || (this.isInView = l, i && !l && this.hasEnteredView)) return;
                l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
                let {onViewportEnter: c, onViewportLeave: u} = this.node.getProps(), f = l ? c : u;
                f && f(a)
            };
        return u_(this.node.current, o, s)
    }

    mount() {
        this.startObserver()
    }

    update() {
        if (typeof IntersectionObserver > "u") return;
        let {props: e, prevProps: t} = this.node;
        ["amount", "margin", "root"].some(h_(e, t)) && this.startObserver()
    }

    unmount() {
    }
};

function h_({viewport: e = {}}, {viewport: t = {}} = {}) {
    return n => e[n] !== t[n]
}

var z0 = {inView: {Feature: d_}, tap: {Feature: s_}, focus: {Feature: o_}, hover: {Feature: i_}},
    B0 = {layout: {ProjectionNode: V0, MeasureLayout: T0}},
    p_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Pd(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(p_.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function $0(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (let o in n) e.style.setProperty(o, n[o])
}

var N0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function j0(e, t, n, r) {
    $0(e, t, void 0, r);
    for (let i in t.attrs) e.setAttribute(N0.has(i) ? i : yl(i), t.attrs[i])
}

function H0(e, {layout: t, layoutId: n}) {
    return Nr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!al[e] || e === "opacity")
}

function _d(e, t, n) {
    var r;
    let {style: i} = e, o = {};
    for (let s in i) (Be(i[s]) || t.style && Be(t.style[s]) || H0(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
}

function W0(e, t, n) {
    let r = _d(e, t, n);
    for (let i in e) if (Be(e[i]) || Be(t[i])) {
        let o = Cs.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
        r[o] = e[i]
    }
    return r
}

var Id = () => ({style: {}, transform: {}, transformOrigin: {}, vars: {}}), U0 = () => ({...Id(), attrs: {}});

function Od(e, t, n) {
    let {style: r, vars: i, transformOrigin: o} = e, s = !1, a = !1;
    for (let l in t) {
        let c = t[l];
        if (Nr.has(l)) {
            s = !0;
            continue
        } else if (Fy(l)) {
            i[l] = c;
            continue
        } else {
            let u = d0(c, cd[l]);
            l.startsWith("origin") ? (a = !0, o[l] = u) : r[l] = u
        }
    }
    if (t.transform || (s || n ? r.transform = h0(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        let {originX: l = "50%", originY: c = "50%", originZ: u = 0} = o;
        r.transformOrigin = `${l} ${c} ${u}`
    }
}

function ey(e, t, n) {
    return typeof e == "string" ? e : J.transform(t + n * e)
}

function m_(e, t, n) {
    let r = ey(t, e.x, e.width), i = ey(n, e.y, e.height);
    return `${r} ${i}`
}

var g_ = {offset: "stroke-dashoffset", array: "stroke-dasharray"},
    v_ = {offset: "strokeDashoffset", array: "strokeDasharray"};

function y_(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    let o = i ? g_ : v_;
    e[o.offset] = J.transform(-r);
    let s = J.transform(t), a = J.transform(n);
    e[o.array] = `${s} ${a}`
}

function Md(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
}, u, f) {
    if (Od(e, c, f), u) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    let {attrs: d, style: h, dimensions: v} = e;
    d.transform && (v && (h.transform = d.transform), delete d.transform), v && (i !== void 0 || o !== void 0 || h.transform) && (h.transformOrigin = m_(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && y_(d, s, a, l, !1)
}

var Ld = e => typeof e == "string" && e.toLowerCase() === "svg", b_ = {
    useVisualState: Rl({
        scrapeMotionValuesFromProps: W0,
        createRenderState: U0,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            Z.read(() => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {x: 0, y: 0, width: 0, height: 0}
                }
            }), Z.render(() => {
                Md(n, r, Ld(t.tagName), e.transformTemplate), j0(t, n)
            })
        }
    })
}, x_ = {useVisualState: Rl({applyWillChange: !0, scrapeMotionValuesFromProps: _d, createRenderState: Id})};

function G0(e, t, n) {
    for (let r in t) !Be(t[r]) && !H0(r, n) && (e[r] = t[r])
}

function w_({transformTemplate: e}, t) {
    return oe(() => {
        let n = Id();
        return Od(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function S_(e, t) {
    let n = e.style || {}, r = {};
    return G0(r, n, e), Object.assign(r, w_(e, t)), r
}

function k_(e, t) {
    let n = {}, r = S_(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}

function C_(e, t, n, r) {
    let i = oe(() => {
        let o = U0();
        return Md(o, t, Ld(r), e.transformTemplate), {...o.attrs, style: {...o.style}}
    }, [t]);
    if (e.style) {
        let o = {};
        G0(o, e.style, e), i.style = {...o, ...i.style}
    }
    return i
}

function T_(e = !1) {
    return (n, r, i, {latestValues: o}, s) => {
        let l = (Pd(n) ? C_ : k_)(r, o, s, n), c = g0(r, typeof n == "string", e),
            u = n !== gn ? {...c, ...l, ref: i} : {}, {children: f} = r, d = oe(() => Be(f) ? f.get() : f, [f]);
        return Ji(n, {...u, children: d})
    }
}

function R_(e, t) {
    return function (r, {forwardMotionProps: i} = {forwardMotionProps: !1}) {
        let s = {...Pd(r) ? b_ : x_, preloadedFeatures: e, useRender: T_(i), createVisualElement: t, Component: r};
        return f0(s)
    }
}

var q0 = class extends Fd {
    constructor() {
        super(...arguments), this.KeyframeResolver = jy
    }

    sortInstanceNodePosition(e, t) {
        return e.compareDocumentPosition(t) & 2 ? 1 : -1
    }

    getBaseTargetFromProps(e, t) {
        return e.style ? e.style[t] : void 0
    }

    removeValueFromRenderState(e, {vars: t, style: n}) {
        delete t[e], delete n[e]
    }
};

function E_(e) {
    return F.getComputedStyle(e)
}

var X0 = class extends q0 {
        constructor() {
            super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = $0
        }

        readValueFromInstance(e, t) {
            if (Nr.has(t)) {
                let n = ud(t);
                return n && n.default || 0
            } else {
                let n = E_(e), r = (Fy(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return typeof r == "string" ? r.trim() : r
            }
        }

        measureInstanceViewportBox(e, {transformPagePoint: t}) {
            return k0(e, t)
        }

        build(e, t, n) {
            Od(e, t, n.transformTemplate)
        }

        scrapeMotionValuesFromProps(e, t, n) {
            return _d(e, t, n)
        }

        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {children: e} = this.props;
            Be(e) && (this.childSubscription = e.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }))
        }
    }, Y0 = class extends q0 {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ne
        }

        getBaseTargetFromProps(e, t) {
            return e[t]
        }

        readValueFromInstance(e, t) {
            if (Nr.has(t)) {
                let n = ud(t);
                return n && n.default || 0
            }
            return t = N0.has(t) ? t : yl(t), e.getAttribute(t)
        }

        scrapeMotionValuesFromProps(e, t, n) {
            return W0(e, t, n)
        }

        build(e, t, n) {
            Md(e, t, this.isSVGTag, n.transformTemplate)
        }

        renderInstance(e, t, n, r) {
            j0(e, t, n, r)
        }

        mount(e) {
            this.isSVGTag = Ld(e.tagName), super.mount(e)
        }
    }, Vd = (e, t) => Pd(e) ? new Y0(t) : new X0(t, {allowProjection: e !== gn}), F_ = R_({...wl, ...z0, ...A0, ...B0}, Vd),
    tn = lP(F_);
var P_ = class extends Se {
    getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
            let n = this.props.sizeRef.current;
            n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft
        }
        return null
    }

    componentDidUpdate() {
    }

    render() {
        return this.props.children
    }
};

function __({children: e, isPresent: t}) {
    let n = vr(), r = V(null), i = V({width: 0, height: 0, top: 0, left: 0}), {nonce: o} = A(Kn);
    return et(() => {
        let {width: s, height: a, top: l, left: c} = i.current;
        if (t || !r.current || !s || !a) return;
        r.current.dataset.motionPopId = n;
        let u = document.createElement("style");
        return o && (u.nonce = o), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
            document.head.removeChild(u)
        }
    }, [t]), k(P_, {isPresent: t, childRef: r, sizeRef: i, children: gr(e, {ref: r})})
}

var I_ = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s}) => {
    let a = Zn(O_), l = vr(), c = W(f => {
        a.set(f, !0);
        for (let d of a.values()) if (!d) return;
        r && r()
    }, [a, r]), u = oe(() => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: f => (a.set(f, !1), () => a.delete(f))
    }), o ? [Math.random(), c] : [n, c]);
    return oe(() => {
        a.forEach((f, d) => a.set(d, !1))
    }, [n]), $(() => {
        !n && !a.size && r && r()
    }, [n]), s === "popLayout" && (e = k(__, {isPresent: n, children: e})), k(po.Provider, {value: u, children: e})
};

function O_() {
    return new Map
}

var Qa = e => e.key || "";

function ty(e) {
    let t = [];
    return mn.forEach(e, n => {
        Vt(n) && t.push(n)
    }), t
}

var Ad = ({
              children: e,
              exitBeforeEnter: t,
              custom: n,
              initial: r = !0,
              onExitComplete: i,
              presenceAffectsLayout: o = !0,
              mode: s = "sync"
          }) => {
    en(!t, "Replace exitBeforeEnter with mode='wait'");
    let a = oe(() => ty(e), [e]), l = a.map(Qa), c = V(!0), u = V(a),
        f = Zn(() => new Map), [d, h] = _e(a), [v, g] = _e(a);
    Hr(() => {
        c.current = !1, u.current = a;
        for (let m = 0; m < v.length; m++) {
            let y = Qa(v[m]);
            l.includes(y) ? f.delete(y) : f.get(y) !== !0 && f.set(y, !1)
        }
    }, [v, l.length, l.join("-")]);
    let b = [];
    if (a !== d) {
        let m = [...a];
        for (let y = 0; y < v.length; y++) {
            let w = v[y], C = Qa(w);
            l.includes(C) || (m.splice(y, 0, w), b.push(w))
        }
        s === "wait" && b.length && (m = b), g(ty(m)), h(a);
        return
    }
    let {forceRender: p} = A(ws);
    return k(at, {
        children: v.map(m => {
            let y = Qa(m), w = a === v || l.includes(y), C = () => {
                if (f.has(y)) f.set(y, !0); else return;
                let S = !0;
                f.forEach(R => {
                    R || (S = !1)
                }), S && (p?.(), g(u.current), i && i())
            };
            return k(I_, {
                isPresent: w,
                initial: !c.current || r ? void 0 : !1,
                custom: w ? void 0 : n,
                presenceAffectsLayout: o,
                mode: s,
                onExitComplete: w ? void 0 : C,
                children: m
            }, y)
        })
    })
};

function K0({children: e, isValidProp: t, ...n}) {
    t && m0(t), n = {...A(Kn), ...n}, n.isStatic = Zn(() => n.isStatic);
    let r = oe(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return k(Kn.Provider, {value: r, children: e})
}

var Q0 = be(null);

function M_() {
    let e = V(!1);
    return Hr(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Dd() {
    let e = M_(), [t, n] = _e(0), r = W(() => {
        e.current && n(t + 1)
    }, [t]);
    return [W(() => Z.postRender(r), [r]), t]
}

var L_ = e => !e.isLayoutDirty && e.willUpdate(!1);

function ny() {
    let e = new Set, t = new WeakMap, n = () => e.forEach(L_);
    return {
        add: r => {
            e.add(r), t.set(r, r.addEventListener("willUpdate", n))
        }, remove: r => {
            e.delete(r);
            let i = t.get(r);
            i && (i(), t.delete(r)), n()
        }, dirty: n
    }
}

var Z0 = e => e === !0, V_ = e => Z0(e === !0) || e === "id", J0 = ({children: e, id: t, inherit: n = !0}) => {
    let r = A(ws), i = A(Q0), [o, s] = Dd(), a = V(null), l = r.id || i;
    a.current === null && (V_(n) && l && (t = t ? l + "-" + t : l), a.current = {
        id: t,
        group: Z0(n) && r.group || ny()
    });
    let c = oe(() => ({...a.current, forceRender: o}), [s]);
    return k(ws.Provider, {value: c, children: e})
}, A_ = {renderer: Vd, ...wl}, eb = {renderer: Vd, ...wl, ...z0}, D_ = {...eb, ...A0, ...B0};

function Jn(e) {
    let t = Zn(() => Ye(e)), {isStatic: n} = A(Kn);
    if (n) {
        let [, r] = _e(e);
        $(() => t.on("change", r), [])
    }
    return t
}

function tb(e, t) {
    let n = Jn(t()), r = () => n.set(t());
    return r(), Hr(() => {
        let i = () => Z.preRender(r, !1, !0), o = e.map(s => s.on("change", i));
        return () => {
            o.forEach(s => s()), Et(r)
        }
    }), n
}

var z_ = e => e && typeof e == "object" && e.mix, B_ = e => z_(e) ? e.mix : void 0;

function Rs(...e) {
    let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], o = e[2 + n], s = e[3 + n],
        a = ho(i, o, {mixer: B_(o[0]), ...s});
    return t ? a(r) : a
}

function $_(e) {
    ds.current = [], e();
    let t = tb(ds.current, e);
    return ds.current = void 0, t
}

function At(e, t, n, r) {
    if (typeof e == "function") return $_(e);
    let i = typeof t == "function" ? t : Rs(t, n, r);
    return Array.isArray(e) ? ry(e, i) : ry([e], ([o]) => i(o))
}

function ry(e, t) {
    let n = Zn(() => []);
    return tb(e, () => {
        n.length = 0;
        let r = e.length;
        for (let i = 0; i < r; i++) n[i] = e[i].get();
        return t(n)
    })
}

function iy(e) {
    return typeof e == "number" ? e : parseFloat(e)
}

function zd(e, t = {}) {
    let {isStatic: n} = A(Kn), r = V(null), i = Jn(Be(e) ? iy(e.get()) : e), o = V(i.get()), s = V(() => {
    }), a = () => {
        let c = r.current;
        c && c.time === 0 && c.sample(Xe.delta), l(), r.current = ld({
            keyframes: [i.get(), o.current],
            velocity: i.getVelocity(),
            type: "spring",
            restDelta: .001,
            restSpeed: .01, ...t,
            onUpdate: s.current
        })
    }, l = () => {
        r.current && r.current.stop()
    };
    return et(() => i.attach((c, u) => n ? u(c) : (o.current = c, s.current = u, Z.update(a), i.get()), l), [JSON.stringify(t)]), Hr(() => {
        if (Be(e)) return e.on("change", c => i.set(iy(c)))
    }, [i]), i
}

function N_(e, t, n) {
    et(() => e.on(t, n), [e, t, n])
}

function Bd(e, t, n) {
    var r;
    if (typeof e == "string") {
        let i = document;
        t && (en(!!t.current, "Scope provided, but no element detected."), i = t.current), n ? ((r = n[e]) !== null && r !== void 0 || (n[e] = i.querySelectorAll(e)), e = n[e]) : e = i.querySelectorAll(e)
    } else e instanceof Element && (e = [e]);
    return Array.from(e || [])
}

var tl = new WeakMap, $r;

function j_(e, t) {
    if (t) {
        let {inlineSize: n, blockSize: r} = t[0];
        return {width: n, height: r}
    } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}

function H_({target: e, contentRect: t, borderBoxSize: n}) {
    var r;
    (r = tl.get(e)) === null || r === void 0 || r.forEach(i => {
        i({
            target: e, contentSize: t, get size() {
                return j_(e, n)
            }
        })
    })
}

function W_(e) {
    e.forEach(H_)
}

function U_() {
    typeof ResizeObserver > "u" || ($r = new ResizeObserver(W_))
}

function G_(e, t) {
    $r || U_();
    let n = Bd(e);
    return n.forEach(r => {
        let i = tl.get(r);
        i || (i = new Set, tl.set(r, i)), i.add(t), $r?.observe(r)
    }), () => {
        n.forEach(r => {
            let i = tl.get(r);
            i?.delete(t), i?.size || $r?.unobserve(r)
        })
    }
}

var nl = new Set, ms;

function q_() {
    ms = () => {
        let e = {width: F.innerWidth, height: F.innerHeight}, t = {target: F, size: e, contentSize: e};
        nl.forEach(n => n(t))
    }, F.addEventListener("resize", ms)
}

function X_(e) {
    return nl.add(e), ms || q_(), () => {
        nl.delete(e), !nl.size && ms && (ms = void 0)
    }
}

function Y_(e, t) {
    return typeof e == "function" ? X_(e) : G_(e, t)
}

var K_ = 50, oy = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }), Q_ = () => ({time: 0, x: oy(), y: oy()}),
    Z_ = {x: {length: "Width", position: "Left"}, y: {length: "Height", position: "Top"}};

function sy(e, t, n, r) {
    let i = n[t], {length: o, position: s} = Z_[t], a = i.current, l = n.time;
    i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = wr(0, i.scrollLength, i.current);
    let c = r - l;
    i.velocity = c > K_ ? 0 : ed(i.current - a, c)
}

function J_(e, t, n) {
    sy(e, "x", t, n), sy(e, "y", t, n), t.time = n
}

function eI(e, t) {
    let n = {x: 0, y: 0}, r = e;
    for (; r && r !== t;) if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent; else if (r.tagName === "svg") {
        let i = r.getBoundingClientRect();
        r = r.parentElement;
        let o = r.getBoundingClientRect();
        n.x += i.left - o.left, n.y += i.top - o.top
    } else if (r instanceof SVGGraphicsElement) {
        let {x: i, y: o} = r.getBBox();
        n.x += i, n.y += o;
        let s = null, a = r.parentNode;
        for (; !s;) a.tagName === "svg" && (s = a), a = r.parentNode;
        r = s
    } else break;
    return n
}

var tI = {Enter: [[0, 1], [1, 1]], Exit: [[0, 0], [1, 0]], Any: [[1, 0], [0, 1]], All: [[0, 0], [1, 1]]},
    Hf = {start: 0, center: .5, end: 1};

function ay(e, t, n = 0) {
    let r = 0;
    if (e in Hf && (e = Hf[e]), typeof e == "string") {
        let i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e), n + r
}

var nI = [0, 0];

function rI(e, t, n, r) {
    let i = Array.isArray(e) ? e : nI, o = 0, s = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? i = e.split(" ") : i = [e, Hf[e] ? e : "0"]), o = ay(i[0], n, r), s = ay(i[1], t), o - s
}

var iI = {x: 0, y: 0};

function oI(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {width: e.clientWidth, height: e.clientHeight}
}

function sI(e, t, n) {
    let {offset: r = tI.All} = n, {target: i = e, axis: o = "y"} = n, s = o === "y" ? "height" : "width",
        a = i !== e ? eI(i, e) : iI, l = i === e ? {width: e.scrollWidth, height: e.scrollHeight} : oI(i),
        c = {width: e.clientWidth, height: e.clientHeight};
    t[o].offset.length = 0;
    let u = !t[o].interpolate, f = r.length;
    for (let d = 0; d < f; d++) {
        let h = rI(r[d], c[s], l[s], a[o]);
        !u && h !== t[o].interpolatorOffsets[d] && (u = !0), t[o].offset[d] = h
    }
    u && (t[o].interpolate = ho(t[o].offset, sd(r)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current)
}

function aI(e, t = e, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
        let r = t;
        for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
}

function lI(e, t, n, r = {}) {
    return {
        measure: () => aI(e, r.target, n), update: i => {
            J_(e, n, i), (r.offset || r.target) && sI(e, n, r)
        }, notify: () => t(n)
    }
}

var as = new WeakMap, ly = new WeakMap, Sf = new WeakMap, cy = e => e === document.documentElement ? F : e;

function Wr(e, {container: t = document.documentElement, ...n} = {}) {
    let r = Sf.get(t);
    r || (r = new Set, Sf.set(t, r));
    let i = Q_(), o = lI(t, e, i, n);
    if (r.add(o), !as.has(t)) {
        let a = () => {
            for (let d of r) d.measure()
        }, l = () => {
            for (let d of r) d.update(Xe.timestamp)
        }, c = () => {
            for (let d of r) d.notify()
        }, u = () => {
            Z.read(a, !1, !0), Z.read(l, !1, !0), Z.update(c, !1, !0)
        };
        as.set(t, u);
        let f = cy(t);
        F.addEventListener("resize", u, {passive: !0}), t !== document.documentElement && ly.set(t, Y_(t, u)), f.addEventListener("scroll", u, {passive: !0})
    }
    let s = as.get(t);
    return Z.read(s, !1, !0), () => {
        var a;
        Et(s);
        let l = Sf.get(t);
        if (!l || (l.delete(o), l.size)) return;
        let c = as.get(t);
        as.delete(t), c && (cy(t).removeEventListener("scroll", c), (a = ly.get(t)) === null || a === void 0 || a(), F.removeEventListener("resize", c))
    }
}

function nb(e, t) {
    let n, r = () => {
        let {currentTime: i} = t, s = (i === null ? 0 : i.value) / 100;
        n !== s && e(s), n = s
    };
    return Z.update(r, !0), () => Et(r)
}

function cI({source: e, container: t, axis: n = "y"}) {
    e && (t = e);
    let r = {value: 0}, i = Wr(o => {
        r.value = o[n].progress * 100
    }, {container: t, axis: n});
    return {currentTime: r, cancel: i}
}

var kf = new Map;

function rb({source: e, container: t = document.documentElement, axis: n = "y"} = {}) {
    e && (t = e), kf.has(t) || kf.set(t, {});
    let r = kf.get(t);
    return r[n] || (r[n] = qy() ? new ScrollTimeline({source: t, axis: n}) : cI({source: t, axis: n})), r[n]
}

function uI(e) {
    return e.length === 2
}

function ib(e) {
    return e && (e.target || e.offset)
}

function fI(e, t) {
    return uI(e) || ib(t) ? Wr(n => {
        e(n[t.axis].progress, n)
    }, t) : nb(e, rb(t))
}

function dI(e, t) {
    if (ib(t)) return e.pause(), Wr(n => {
        e.time = e.duration * n[t.axis].progress
    }, t);
    {
        let n = rb(t);
        return e.attachTimeline(n, r => (r.pause(), nb(i => {
            r.time = r.duration * i
        }, n)))
    }
}

function ob(e, {axis: t = "y", ...n} = {}) {
    let r = {axis: t, ...n};
    return typeof e == "function" ? fI(e, r) : dI(e, r)
}

function uy(e, t) {
    uo(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
}

var hI = () => ({scrollX: Ye(0), scrollY: Ye(0), scrollXProgress: Ye(0), scrollYProgress: Ye(0)});

function sb({container: e, target: t, layoutEffect: n = !0, ...r} = {}) {
    let i = Zn(hI);
    return (n ? Hr : $)(() => (uy("target", t), uy("container", e), ob((s, {x: a, y: l}) => {
        i.scrollX.set(a.current), i.scrollXProgress.set(a.progress), i.scrollY.set(l.current), i.scrollYProgress.set(l.progress)
    }, {...r, container: e?.current || void 0, target: t?.current || void 0})), [e, t, JSON.stringify(r.offset)]), i
}

function pI(e) {
    let t = V(0), {isStatic: n} = A(Kn);
    $(() => {
        if (n) return;
        let r = ({timestamp: i, delta: o}) => {
            t.current || (t.current = i), e(i - t.current, o)
        };
        return Z.update(r, !0), () => Et(r)
    }, [e])
}

function ab() {
    !Ed.current && v0();
    let [e] = _e(ll.current);
    return e
}

function Ci() {
    let e = ab(), {reducedMotion: t} = A(Kn);
    return t === "never" ? !1 : t === "always" ? !0 : e
}

function mI(e) {
    e.values.forEach(t => t.stop())
}

function Wf(e, t) {
    [...t].reverse().forEach(r => {
        let i = e.getVariant(r);
        i && vd(e, i), e.variantChildren && e.variantChildren.forEach(o => {
            Wf(o, t)
        })
    })
}

function gI(e, t) {
    if (Array.isArray(t)) return Wf(e, t);
    if (typeof t == "string") return Wf(e, [t]);
    vd(e, t)
}

function lb() {
    let e = !1, t = new Set, n = {
        subscribe(r) {
            return t.add(r), () => void t.delete(r)
        }, start(r, i) {
            en(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            let o = [];
            return t.forEach(s => {
                o.push(bd(s, r, {transitionOverride: i}))
            }), Promise.all(o)
        }, set(r) {
            return en(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(i => {
                gI(i, r)
            })
        }, stop() {
            t.forEach(r => {
                mI(r)
            })
        }, mount() {
            return e = !0, () => {
                e = !1, n.stop()
            }
        }
    };
    return n
}

var cb = (e, t, n) => {
    let r = t - e;
    return ((n - e) % r + r) % r + e
};

function vI(e, t = 100, n) {
    let r = n({...e, keyframes: [0, t]}), i = Math.min(Vy(r), If);
    return {type: "keyframes", ease: o => r.next(i * o).value / t, duration: Gn(i)}
}

function $d(e) {
    return typeof e == "object" && !Array.isArray(e)
}

function ub(e, t, n, r) {
    return typeof e == "string" && $d(t) ? Bd(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e : [e]
}

function fy(e, t, n, r) {
    var i;
    return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (i = r.get(t)) !== null && i !== void 0 ? i : e
}

function yI(e, t) {
    return _y(e) ? e[cb(0, e.length, t)] : e
}

function bI(e, t, n) {
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        i.at > t && i.at < n && (gl(e, i), r--)
    }
}

function xI(e, t, n, r, i, o) {
    bI(e, i, o);
    for (let s = 0; s < t.length; s++) e.push({value: t[s], at: Me(i, o, r[s]), easing: yI(n, s)})
}

function wI(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}

var SI = "easeInOut";

function kI(e, {defaultTransition: t = {}, ...n} = {}, r, i) {
    let o = t.duration || .3, s = new Map, a = new Map, l = {}, c = new Map, u = 0, f = 0, d = 0;
    for (let h = 0; h < e.length; h++) {
        let v = e[h];
        if (typeof v == "string") {
            c.set(v, f);
            continue
        } else if (!Array.isArray(v)) {
            c.set(v.name, fy(f, v.at, u, c));
            continue
        }
        let [g, b, p = {}] = v;
        p.at !== void 0 && (f = fy(f, p.at, u, c));
        let m = 0, y = (w, C, S, R = 0, E = 0) => {
            let I = CI(w), {
                    delay: O = 0,
                    times: H = sd(I),
                    type: z = "keyframes",
                    ...B
                } = C, {ease: Q = t.ease || "easeOut", duration: j} = C, se = typeof O == "function" ? O(R, E) : O,
                K = I.length, te = hl(z) ? z : i?.[z];
            if (K <= 2 && te) {
                let me = 100;
                if (K === 2 && EI(I)) {
                    let Fe = I[1] - I[0];
                    me = Math.abs(Fe)
                }
                let le = {...B};
                j !== void 0 && (le.duration = On(j));
                let ee = vI(le, me, te);
                Q = ee.ease, j = ee.duration
            }
            j ?? (j = o);
            let X = f + se, G = X + j;
            H.length === 1 && H[0] === 0 && (H[1] = 1);
            let de = H.length - I.length;
            de > 0 && Iy(H, de), I.length === 1 && I.unshift(null), xI(S, I, Q, H, X, G), m = Math.max(se + j, m), d = Math.max(G, d)
        };
        if (Be(g)) {
            let w = dy(g, a);
            y(b, p, hy("default", w))
        } else {
            let w = ub(g, b, r, l), C = w.length;
            for (let S = 0; S < C; S++) {
                b = b, p = p;
                let R = w[S], E = dy(R, a);
                for (let I in b) y(b[I], TI(p, I), hy(I, E), S, C)
            }
        }
        u = f, f += m
    }
    return a.forEach((h, v) => {
        for (let g in h) {
            let b = h[g];
            b.sort(wI);
            let p = [], m = [], y = [];
            for (let C = 0; C < b.length; C++) {
                let {at: S, value: R, easing: E} = b[C];
                p.push(R), m.push(wr(0, d, S)), y.push(E || "easeOut")
            }
            m[0] !== 0 && (m.unshift(0), p.unshift(p[0]), y.unshift(SI)), m[m.length - 1] !== 1 && (m.push(1), p.push(null)), s.has(v) || s.set(v, {
                keyframes: {},
                transition: {}
            });
            let w = s.get(v);
            w.keyframes[g] = p, w.transition[g] = {...t, duration: d, ease: y, times: m, ...n}
        }
    }), s
}

function dy(e, t) {
    return !t.has(e) && t.set(e, {}), t.get(e)
}

function hy(e, t) {
    return t[e] || (t[e] = []), t[e]
}

function CI(e) {
    return Array.isArray(e) ? e : [e]
}

function TI(e, t) {
    return e && e[t] ? {...e, ...e[t]} : {...e}
}

var RI = e => typeof e == "number", EI = e => e.every(RI);

function FI(e, t) {
    return e in t
}

var PI = class extends Fd {
    constructor() {
        super(...arguments), this.type = "object"
    }

    readValueFromInstance(e, t) {
        if (FI(t, e)) {
            let n = e[t];
            if (typeof n == "string" || typeof n == "number") return n
        }
    }

    getBaseTargetFromProps() {
    }

    removeValueFromRenderState(e, t) {
        delete t.output[e]
    }

    measureInstanceViewportBox() {
        return Ne()
    }

    build(e, t) {
        Object.assign(e.output, t)
    }

    renderInstance(e, {output: t}) {
        Object.assign(e, t)
    }

    sortInstanceNodePosition() {
        return 0
    }
};

function _I(e) {
    let t = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {}},
            latestValues: {}
        }
    }, n = _0(e) ? new Y0(t) : new X0(t);
    n.mount(e), Qn.set(e, n)
}

function II(e) {
    let t = {presenceContext: null, props: {}, visualState: {renderState: {output: {}}, latestValues: {}}},
        n = new PI(t);
    n.mount(e), Qn.set(e, n)
}

function OI(e, t) {
    return Be(e) || typeof e == "number" || typeof e == "string" && !$d(t)
}

function fb(e, t, n, r) {
    let i = [];
    if (OI(e, t)) i.push(I0(e, $d(t) && t.default || t, n && (n.default || n))); else {
        let o = ub(e, t, r), s = o.length;
        en(!!s, "No valid elements provided.");
        for (let a = 0; a < s; a++) {
            let l = o[a], c = l instanceof Element ? _I : II;
            Qn.has(l) || c(l);
            let u = Qn.get(l), f = {...n};
            "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, s)), i.push(...yd(u, {
                ...t,
                transition: f
            }, {}))
        }
    }
    return i
}

function MI(e, t, n) {
    let r = [];
    return kI(e, t, n, {spring: ks}).forEach(({keyframes: o, transition: s}, a) => {
        r.push(...fb(a, o, s))
    }), r
}

function LI(e) {
    return Array.isArray(e) && Array.isArray(e[0])
}

function db(e) {
    function t(n, r, i) {
        let o = [];
        LI(n) ? o = MI(n, r, e) : o = fb(n, r, i, e);
        let s = new Xy(o);
        return e && e.animations.push(s), s
    }

    return t
}

var Mn = db();

function hb() {
    let e = Zn(lb);
    return Hr(e.mount, []), e
}

var pb = hb;
var VI = {some: 0, all: 1};

function El(e, t, {root: n, margin: r, amount: i = "some"} = {}) {
    let o = Bd(e), s = new WeakMap, a = c => {
        c.forEach(u => {
            let f = s.get(u.target);
            if (u.isIntersecting !== !!f) if (u.isIntersecting) {
                let d = t(u);
                typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target)
            } else f && (f(u), s.delete(u.target))
        })
    }, l = new IntersectionObserver(a, {root: n, rootMargin: r, threshold: typeof i == "number" ? i : VI[i]});
    return o.forEach(c => l.observe(c)), () => l.disconnect()
}

function AI(e, {root: t, margin: n, amount: r, once: i = !1} = {}) {
    let [o, s] = _e(!1);
    return $(() => {
        if (!e.current || i && o) return;
        let a = () => (s(!0), i ? void 0 : () => s(!1)), l = {root: t && t.current || void 0, margin: n, amount: r};
        return El(e.current, a, l)
    }, [t, e, n, i, r]), o
}

function Fl(e) {
    return e !== null && typeof e == "object" && Rd in e
}

function Nd(e) {
    if (Fl(e)) return e[Rd]
}

function jd() {
    return DI
}

function DI(e) {
    ki.current && (ki.current.isUpdating = !1, ki.current.blockUpdate(), e && e())
}

function mb() {
    let [e, t] = Dd(), n = jd(), r = V();
    return $(() => {
        Z.postRender(() => Z.postRender(() => {
            t === r.current && (il.current = !1)
        }))
    }, [t]), i => {
        n(() => {
            il.current = !0, e(), i(), r.current = t + 1
        })
    }
}

function gb() {
    return W(() => {
        let t = ki.current;
        t && t.resetTree()
    }, [])
}

var py = () => ({});
var O6 = Rl({scrapeMotionValuesFromProps: py, createRenderState: py});
var vb = {};
Og(vb, {Group: () => $I, Item: () => WI});
var yb = be(null);

function zI(e, t, n, r) {
    if (!r) return e;
    let i = e.findIndex(u => u.value === t);
    if (i === -1) return e;
    let o = r > 0 ? 1 : -1, s = e[i + o];
    if (!s) return e;
    let a = e[i], l = s.layout, c = Me(l.min, l.max, .5);
    return o === 1 && a.layout.max + n > c || o === -1 && a.layout.min + n < c ? hF(e, i, i + o) : e
}

function BI({children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o}, s) {
    let a = Zn(() => tn[t]), l = [], c = V(!1);
    en(!!i, "Reorder.Group must be provided a values prop");
    let u = {
        axis: n, registerItem: (f, d) => {
            let h = l.findIndex(v => f === v.value);
            h !== -1 ? l[h].layout = d[n] : l.push({value: f, layout: d[n]}), l.sort(jI)
        }, updateOrder: (f, d, h) => {
            if (c.current) return;
            let v = zI(l, f, d, h);
            l !== v && (c.current = !0, r(v.map(NI).filter(g => i.indexOf(g) !== -1)))
        }
    };
    return $(() => {
        c.current = !1
    }), k(a, {...o, ref: s, ignoreStrict: !0, children: k(yb.Provider, {value: u, children: e})})
}

var $I = Oe(BI);

function NI(e) {
    return e.value
}

function jI(e, t) {
    return e.layout.min - t.layout.min
}

function my(e, t = 0) {
    return Be(e) ? e : Jn(t)
}

function HI({children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: o = !0, ...s}, a) {
    let l = Zn(() => tn[r]), c = A(yb), u = {x: my(t.x), y: my(t.y)},
        f = At([u.x, u.y], ([g, b]) => g || b ? 1 : "unset");
    en(!!c, "Reorder.Item must be a child of Reorder.Group");
    let {axis: d, registerItem: h, updateOrder: v} = c;
    return k(l, {
        drag: d, ...s,
        dragSnapToOrigin: !0,
        style: {...t, x: u.x, y: u.y, zIndex: f},
        layout: o,
        onDrag: (g, b) => {
            let {velocity: p} = b;
            p[d] && v(n, u[d].get(), p[d]), i && i(g, b)
        },
        onLayoutMeasure: g => h(n, g),
        ref: a,
        ignoreStrict: !0,
        children: e
    })
}

var WI = Oe(HI);

function UI(e, t) {
    if (e === "first") return 0;
    {
        let n = t - 1;
        return e === "last" ? n : n / 2
    }
}

function Hd(e = .1, {startDelay: t = 0, from: n = 0, ease: r} = {}) {
    return (i, o) => {
        let s = typeof n == "number" ? n : UI(n, o), a = Math.abs(s - i), l = e * a;
        if (r) {
            let c = o * e;
            l = Ff(r)(l / c) * c
        }
        return t + l
    }
}

var GI = Z, qI = ls.reduce((e, t) => (e[t] = n => Et(n), e), {});
var FM = {};
rf(FM, {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => gM,
    createPortal: () => vM,
    createRoot: () => yM,
    default: () => VS,
    findDOMNode: () => bM,
    flushSync: () => xM,
    hydrate: () => wM,
    hydrateRoot: () => SM,
    render: () => kM,
    unmountComponentAtNode: () => CM,
    unstable_batchedUpdates: () => TM,
    unstable_renderSubtreeIntoContainer: () => RM,
    version: () => EM
});
var Ll = {};
rf(Ll, {
    default: () => ne,
    unstable_IdlePriority: () => KI,
    unstable_ImmediatePriority: () => QI,
    unstable_LowPriority: () => ZI,
    unstable_NormalPriority: () => JI,
    unstable_Profiling: () => eO,
    unstable_UserBlockingPriority: () => tO,
    unstable_cancelCallback: () => nO,
    unstable_continueExecution: () => rO,
    unstable_forceFrameRate: () => iO,
    unstable_getCurrentPriorityLevel: () => oO,
    unstable_getFirstCallbackNode: () => sO,
    unstable_next: () => aO,
    unstable_now: () => YI,
    unstable_pauseExecution: () => lO,
    unstable_requestPaint: () => cO,
    unstable_runWithPriority: () => uO,
    unstable_scheduleCallback: () => fO,
    unstable_shouldYield: () => dO,
    unstable_wrapCallback: () => hO
});
var ne = {};

function qd(e, t) {
    var n = e.length;
    e.push(t);
    e:for (; 0 < n;) {
        var r = n - 1 >>> 1, i = e[r];
        if (!(0 < Pl(i, t))) break e;
        e[r] = t, e[n] = i, n = r
    }
}

function Ln(e) {
    return e.length === 0 ? null : e[0]
}

function Il(e) {
    if (e.length === 0) return null;
    var t = e[0], n = e.pop();
    if (n !== t) {
        e[0] = n;
        e:for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
            var s = 2 * (r + 1) - 1, a = e[s], l = s + 1, c = e[l];
            if (0 > Pl(a, n)) l < i && 0 > Pl(c, a) ? (e[r] = c, e[l] = n, r = l) : (e[r] = a, e[s] = n, r = s); else {
                if (!(l < i && 0 > Pl(c, n))) break e;
                e[r] = c, e[l] = n, r = l
            }
        }
    }
    return t
}

function Pl(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id
}

typeof performance == "object" && typeof performance.now == "function" ? (bb = performance, ne.unstable_now = function () {
    return bb.now()
}) : (Wd = Date, xb = Wd.now(), ne.unstable_now = function () {
    return Wd.now() - xb
});
var bb, Wd, xb, er = [], Ur = [], XI = 1, bn = null, Ft = 3, Ol = !1, Ti = !1, Fs = !1,
    kb = typeof setTimeout == "function" ? setTimeout : null,
    Cb = typeof clearTimeout == "function" ? clearTimeout : null, wb = typeof setImmediate < "u" ? setImmediate : null;
typeof Re < "u" && Re.scheduling !== void 0 && Re.scheduling.isInputPending !== void 0 && Re.scheduling.isInputPending.bind(Re.scheduling);

function Xd(e) {
    for (var t = Ln(Ur); t !== null;) {
        if (t.callback === null) Il(Ur); else {
            if (!(t.startTime <= e)) break;
            Il(Ur), t.sortIndex = t.expirationTime, qd(er, t)
        }
        t = Ln(Ur)
    }
}

function Yd(e) {
    if (Fs = !1, Xd(e), !Ti) if (Ln(er) !== null) Ti = !0, Qd(Kd); else {
        var t = Ln(Ur);
        t !== null && Zd(Yd, t.startTime - e)
    }
}

function Kd(e, t) {
    Ti = !1, Fs && (Fs = !1, Cb(Ps), Ps = -1), Ol = !0;
    var n = Ft;
    try {
        for (Xd(t), bn = Ln(er); bn !== null && (!(bn.expirationTime > t) || e && !Eb());) {
            var r = bn.callback;
            if (typeof r == "function") {
                bn.callback = null, Ft = bn.priorityLevel;
                var i = r(bn.expirationTime <= t);
                t = ne.unstable_now(), typeof i == "function" ? bn.callback = i : bn === Ln(er) && Il(er), Xd(t)
            } else Il(er);
            bn = Ln(er)
        }
        if (bn !== null) var o = !0; else {
            var s = Ln(Ur);
            s !== null && Zd(Yd, s.startTime - t), o = !1
        }
        return o
    } finally {
        bn = null, Ft = n, Ol = !1
    }
}

var Ml = !1, _l = null, Ps = -1, Tb = 5, Rb = -1;

function Eb() {
    return !(ne.unstable_now() - Rb < Tb)
}

function Ud() {
    if (_l !== null) {
        var e = ne.unstable_now();
        Rb = e;
        var t = !0;
        try {
            t = _l(!0, e)
        } finally {
            t ? Es() : (Ml = !1, _l = null)
        }
    } else Ml = !1
}

var Es;
typeof wb == "function" ? Es = function () {
    wb(Ud)
} : typeof MessageChannel < "u" ? (Gd = new MessageChannel, Sb = Gd.port2, Gd.port1.onmessage = Ud, Es = function () {
    Sb.postMessage(null)
}) : Es = function () {
    kb(Ud, 0)
};
var Gd, Sb;

function Qd(e) {
    _l = e, Ml || (Ml = !0, Es())
}

function Zd(e, t) {
    Ps = kb(function () {
        e(ne.unstable_now())
    }, t)
}

ne.unstable_IdlePriority = 5;
ne.unstable_ImmediatePriority = 1;
ne.unstable_LowPriority = 4;
ne.unstable_NormalPriority = 3;
ne.unstable_Profiling = null;
ne.unstable_UserBlockingPriority = 2;
ne.unstable_cancelCallback = function (e) {
    e.callback = null
};
ne.unstable_continueExecution = function () {
    Ti || Ol || (Ti = !0, Qd(Kd))
};
ne.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tb = 0 < e ? Math.floor(1e3 / e) : 5
};
ne.unstable_getCurrentPriorityLevel = function () {
    return Ft
};
ne.unstable_getFirstCallbackNode = function () {
    return Ln(er)
};
ne.unstable_next = function (e) {
    switch (Ft) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = Ft
    }
    var n = Ft;
    Ft = t;
    try {
        return e()
    } finally {
        Ft = n
    }
};
ne.unstable_pauseExecution = function () {
};
ne.unstable_requestPaint = function () {
};
ne.unstable_runWithPriority = function (e, t) {
    switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3
    }
    var n = Ft;
    Ft = e;
    try {
        return t()
    } finally {
        Ft = n
    }
};
ne.unstable_scheduleCallback = function (e, t, n) {
    var r = ne.unstable_now();
    switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) {
        case 1:
            var i = -1;
            break;
        case 2:
            i = 250;
            break;
        case 5:
            i = 1073741823;
            break;
        case 4:
            i = 1e4;
            break;
        default:
            i = 5e3
    }
    return i = n + i, e = {
        id: XI++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: i,
        sortIndex: -1
    }, n > r ? (e.sortIndex = n, qd(Ur, e), Ln(er) === null && e === Ln(Ur) && (Fs ? (Cb(Ps), Ps = -1) : Fs = !0, Zd(Yd, n - r))) : (e.sortIndex = i, qd(er, e), Ti || Ol || (Ti = !0, Qd(Kd))), e
};
ne.unstable_shouldYield = Eb;
ne.unstable_wrapCallback = function (e) {
    var t = Ft;
    return function () {
        var n = Ft;
        Ft = t;
        try {
            return e.apply(this, arguments)
        } finally {
            Ft = n
        }
    }
};
var YI = ne.unstable_now, KI = ne.unstable_IdlePriority, QI = ne.unstable_ImmediatePriority,
    ZI = ne.unstable_LowPriority, JI = ne.unstable_NormalPriority, eO = ne.unstable_Profiling,
    tO = ne.unstable_UserBlockingPriority, nO = ne.unstable_cancelCallback, rO = ne.unstable_continueExecution,
    iO = ne.unstable_forceFrameRate, oO = ne.unstable_getCurrentPriorityLevel, sO = ne.unstable_getFirstCallbackNode,
    aO = ne.unstable_next, lO = ne.unstable_pauseExecution, cO = ne.unstable_requestPaint,
    uO = ne.unstable_runWithPriority, fO = ne.unstable_scheduleCallback, dO = ne.unstable_shouldYield,
    hO = ne.unstable_wrapCallback;
var pO = "default" in Tt ? x : Tt, mO = "default" in Ll ? ne : Ll, an = {}, Lx = pO, sn = mO;

function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var Vx = new Set, Qs = {};

function zi(e, t) {
    Vo(e, t), Vo(e + "Capture", t)
}

function Vo(e, t) {
    for (Qs[e] = t, e = 0; e < t.length; e++) Vx.add(t[e])
}

var Er = !(typeof F > "u" || typeof F.document > "u" || typeof F.document.createElement > "u"),
    wh = Object.prototype.hasOwnProperty,
    gO = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Fb = {}, Pb = {};

function vO(e) {
    return wh.call(Pb, e) ? !0 : wh.call(Fb, e) ? !1 : gO.test(e) ? Pb[e] = !0 : (Fb[e] = !0, !1)
}

function yO(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function bO(e, t, n, r) {
    if (t === null || typeof t > "u" || yO(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Bt(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}

var Ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Ct[e] = new Bt(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Ct[t] = new Bt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ct[e] = new Bt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ct[e] = new Bt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Ct[e] = new Bt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ct[e] = new Bt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Ct[e] = new Bt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ct[e] = new Bt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Ct[e] = new Bt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var dp = /[\-:]([a-z])/g;

function hp(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(dp, hp);
    Ct[t] = new Bt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(dp, hp);
    Ct[t] = new Bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(dp, hp);
    Ct[t] = new Bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ct[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ct.xlinkHref = new Bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ct[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function pp(e, t, n, r) {
    var i = Ct.hasOwnProperty(t) ? Ct[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bO(t, n, i, r) && (n = null), r || i === null ? vO(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var Ir = Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vl = Symbol.for("react.element"),
    vo = Symbol.for("react.portal"), yo = Symbol.for("react.fragment"), mp = Symbol.for("react.strict_mode"),
    Sh = Symbol.for("react.profiler"), Ax = Symbol.for("react.provider"), Dx = Symbol.for("react.context"),
    gp = Symbol.for("react.forward_ref"), kh = Symbol.for("react.suspense"), Ch = Symbol.for("react.suspense_list"),
    vp = Symbol.for("react.memo"), qr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var zx = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var _b = Symbol.iterator;

function _s(e) {
    return e === null || typeof e != "object" ? null : (e = _b && e[_b] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Jd, We = Object.assign;

function zs(e) {
    if (Jd === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Jd = t && t[1] || ""
    }
    return `
` + Jd + e
}

var eh = !1;

function th(e, t) {
    if (!e || eh) return "";
    eh = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (c) {
                var r = c
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (c) {
                r = c
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
                if (s !== 1 || a !== 1) do if (s--, a--, 0 > a || i[s] !== o[a]) {
                    var l = `
` + i[s].replace(" at new ", " at ");
                    return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                } while (1 <= s && 0 <= a);
                break
            }
        }
    } finally {
        eh = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? zs(e) : ""
}

function xO(e) {
    switch (e.tag) {
        case 5:
            return zs(e.type);
        case 16:
            return zs("Lazy");
        case 13:
            return zs("Suspense");
        case 19:
            return zs("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = th(e.type, !1), e;
        case 11:
            return e = th(e.type.render, !1), e;
        case 1:
            return e = th(e.type, !0), e;
        default:
            return ""
    }
}

function Th(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case yo:
            return "Fragment";
        case vo:
            return "Portal";
        case Sh:
            return "Profiler";
        case mp:
            return "StrictMode";
        case kh:
            return "Suspense";
        case Ch:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Dx:
            return (e.displayName || "Context") + ".Consumer";
        case Ax:
            return (e._context.displayName || "Context") + ".Provider";
        case gp:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case vp:
            return t = e.displayName || null, t !== null ? t : Th(e.type) || "Memo";
        case qr:
            t = e._payload, e = e._init;
            try {
                return Th(e(t))
            } catch {
            }
    }
    return null
}

function wO(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Th(t);
        case 8:
            return t === mp ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ai(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function Bx(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function SO(e) {
    var t = Bx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return i.call(this)
            }, set: function (s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (s) {
                r = "" + s
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Al(e) {
    e._valueTracker || (e._valueTracker = SO(e))
}

function $x(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Bx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0)
}

function uc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Rh(e, t) {
    var n = t.checked;
    return We({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Ib(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ai(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Nx(e, t) {
    t = t.checked, t != null && pp(e, "checked", t, !1)
}

function Eh(e, t) {
    Nx(e, t);
    var n = ai(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fh(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fh(e, t.type, ai(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ob(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Fh(e, t, n) {
    t === "number" && uc(e.ownerDocument) === e || (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var Bs = Array.isArray;

function Po(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ai(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Ph(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return We({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function Mb(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(M(92));
            if (Bs(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: ai(n)}
}

function jx(e, t) {
    var n = ai(t.value), r = ai(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Lb(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Hx(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function _h(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Dl, Wx = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (Dl = Dl || document.createElement("div"), Dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Dl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Zs(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var js = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, kO = ["Webkit", "ms", "Moz", "O"];
Object.keys(js).forEach(function (e) {
    kO.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), js[t] = js[e]
    })
});

function Ux(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || js.hasOwnProperty(e) && js[e] ? ("" + t).trim() : t + "px"
}

function Gx(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Ux(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
    }
}

var CO = We({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ih(e, t) {
    if (t) {
        if (CO[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62))
    }
}

function Oh(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var Mh = null;

function yp(e) {
    return e = e.target || e.srcElement || F, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var Lh = null, _o = null, Io = null;

function Vb(e) {
    if (e = ga(e)) {
        if (typeof Lh != "function") throw Error(M(280));
        var t = e.stateNode;
        t && (t = zc(t), Lh(e.stateNode, e.type, t))
    }
}

function qx(e) {
    _o ? Io ? Io.push(e) : Io = [e] : _o = e
}

function Xx() {
    if (_o) {
        var e = _o, t = Io;
        if (Io = _o = null, Vb(e), t) for (e = 0; e < t.length; e++) Vb(t[e])
    }
}

function Yx(e, t) {
    return e(t)
}

function Kx() {
}

var nh = !1;

function Qx(e, t, n) {
    if (nh) return e(t, n);
    nh = !0;
    try {
        return Yx(e, t, n)
    } finally {
        nh = !1, (_o !== null || Io !== null) && (Kx(), Xx())
    }
}

function Js(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = zc(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n
}

var Vh = !1;
if (Er) try {
    mo = {}, Object.defineProperty(mo, "passive", {
        get: function () {
            Vh = !0
        }
    }), F.addEventListener("test", mo, mo), F.removeEventListener("test", mo, mo)
} catch {
    Vh = !1
}
var mo;

function TO(e, t, n, r, i, o, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}

var Hs = !1, fc = null, dc = !1, Ah = null, RO = {
    onError: function (e) {
        Hs = !0, fc = e
    }
};

function EO(e, t, n, r, i, o, s, a, l) {
    Hs = !1, fc = null, TO.apply(RO, arguments)
}

function FO(e, t, n, r, i, o, s, a, l) {
    if (EO.apply(this, arguments), Hs) {
        if (!Hs) throw Error(M(198));
        var c = fc;
        Hs = !1, fc = null, dc || (dc = !0, Ah = c)
    }
}

function Bi(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, 4098 & t.flags && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Zx(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ab(e) {
    if (Bi(e) !== e) throw Error(M(188))
}

function PO(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Bi(e), t === null) throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Ab(i), e;
                if (o === r) return Ab(i), t;
                o = o.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) n = i, r = o; else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t
}

function Jx(e) {
    return e = PO(e), e !== null ? ew(e) : null
}

function ew(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = ew(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var tw = sn.unstable_scheduleCallback, Db = sn.unstable_cancelCallback, _O = sn.unstable_shouldYield,
    IO = sn.unstable_requestPaint, tt = sn.unstable_now, OO = sn.unstable_getCurrentPriorityLevel,
    bp = sn.unstable_ImmediatePriority, nw = sn.unstable_UserBlockingPriority, hc = sn.unstable_NormalPriority,
    MO = sn.unstable_LowPriority, rw = sn.unstable_IdlePriority, Lc = null, ir = null;

function LO(e) {
    if (ir && typeof ir.onCommitFiberRoot == "function") try {
        ir.onCommitFiberRoot(Lc, e, void 0, (128 & e.current.flags) === 128)
    } catch {
    }
}

var Bn = Math.clz32 ? Math.clz32 : DO, VO = Math.log, AO = Math.LN2;

function DO(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (VO(e) / AO | 0) | 0
}

var zl = 64, Bl = 4194304;

function $s(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function pc(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = 268435455 & n;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = $s(a) : (o &= s, o !== 0 && (r = $s(o)))
    } else s = n & ~i, s !== 0 ? r = $s(s) : o !== 0 && (r = $s(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (4194240 & o) !== 0)) return t;
    if (4 & r && (r |= 16 & n), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Bn(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function zO(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function BO(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - Bn(o), a = 1 << s, l = i[s];
        l === -1 ? a & n && !(a & r) || (i[s] = zO(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function Dh(e) {
    return e = -1073741825 & e.pendingLanes, e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
}

function iw() {
    var e = zl;
    return zl <<= 1, !(4194240 & zl) && (zl = 64), e
}

function rh(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function pa(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Bn(t), e[t] = n
}

function $O(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Bn(n), o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function xp(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Bn(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}

var ke = 0;

function ow(e) {
    return e &= -e, 1 < e ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
}

var sw, wp, aw, lw, cw, zh = !1, $l = [], Jr = null, ei = null, ti = null, ea = new Map, ta = new Map, Yr = [],
    NO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function zb(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Jr = null;
            break;
        case"dragenter":
        case"dragleave":
            ei = null;
            break;
        case"mouseover":
        case"mouseout":
            ti = null;
            break;
        case"pointerover":
        case"pointerout":
            ea.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            ta.delete(t.pointerId)
    }
}

function Is(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = ga(t), t !== null && wp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function jO(e, t, n, r, i) {
    switch (t) {
        case"focusin":
            return Jr = Is(Jr, e, t, n, r, i), !0;
        case"dragenter":
            return ei = Is(ei, e, t, n, r, i), !0;
        case"mouseover":
            return ti = Is(ti, e, t, n, r, i), !0;
        case"pointerover":
            var o = i.pointerId;
            return ea.set(o, Is(ea.get(o) || null, e, t, n, r, i)), !0;
        case"gotpointercapture":
            return o = i.pointerId, ta.set(o, Is(ta.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function uw(e) {
    var t = Fi(e.target);
    if (t !== null) {
        var n = Bi(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Zx(n), t !== null) {
                    e.blockedOn = t, cw(e.priority, function () {
                        aw(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ec(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Bh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) return t = ga(n), t !== null && wp(t), e.blockedOn = n, !1;
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Mh = r, n.target.dispatchEvent(r), Mh = null, t.shift()
    }
    return !0
}

function Bb(e, t, n) {
    ec(e) && n.delete(t)
}

function HO() {
    zh = !1, Jr !== null && ec(Jr) && (Jr = null), ei !== null && ec(ei) && (ei = null), ti !== null && ec(ti) && (ti = null), ea.forEach(Bb), ta.forEach(Bb)
}

function Os(e, t) {
    e.blockedOn === t && (e.blockedOn = null, zh || (zh = !0, sn.unstable_scheduleCallback(sn.unstable_NormalPriority, HO)))
}

function na(e) {
    function t(i) {
        return Os(i, e)
    }

    if (0 < $l.length) {
        Os($l[0], e);
        for (var n = 1; n < $l.length; n++) {
            var r = $l[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Jr !== null && Os(Jr, e), ei !== null && Os(ei, e), ti !== null && Os(ti, e), ea.forEach(t), ta.forEach(t), n = 0; n < Yr.length; n++) r = Yr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yr.length && (n = Yr[0], n.blockedOn === null);) uw(n), n.blockedOn === null && Yr.shift()
}

var Oo = Ir.ReactCurrentBatchConfig, mc = !0;

function WO(e, t, n, r) {
    var i = ke, o = Oo.transition;
    Oo.transition = null;
    try {
        ke = 1, Sp(e, t, n, r)
    } finally {
        ke = i, Oo.transition = o
    }
}

function UO(e, t, n, r) {
    var i = ke, o = Oo.transition;
    Oo.transition = null;
    try {
        ke = 4, Sp(e, t, n, r)
    } finally {
        ke = i, Oo.transition = o
    }
}

function Sp(e, t, n, r) {
    if (mc) {
        var i = Bh(e, t, n, r);
        if (i === null) uh(e, t, r, gc, n), zb(e, r); else if (jO(i, e, t, n, r)) r.stopPropagation(); else if (zb(e, r), 4 & t && -1 < NO.indexOf(e)) {
            for (; i !== null;) {
                var o = ga(i);
                if (o !== null && sw(o), o = Bh(e, t, n, r), o === null && uh(e, t, r, gc, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else uh(e, t, r, null, n)
    }
}

var gc = null;

function Bh(e, t, n, r) {
    if (gc = null, e = yp(r), e = Fi(e), e !== null) if (t = Bi(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = Zx(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return gc = e, null
}

function fw(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (OO()) {
                case bp:
                    return 1;
                case nw:
                    return 4;
                case hc:
                case MO:
                    return 16;
                case rw:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var Qr = null, kp = null, tc = null;

function dw() {
    if (tc) return tc;
    var e, t, n = kp, r = n.length, i = "value" in Qr ? Qr.value : Qr.textContent, o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++) ;
    var s = r - e;
    for (t = 1; t <= s && n[r - t] === i[o - t]; t++) ;
    return tc = i.slice(e, 1 < t ? 1 - t : void 0)
}

function nc(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Nl() {
    return !0
}

function $b() {
    return !1
}

function ln(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Nl : $b, this.isPropagationStopped = $b, this
    }

    return We(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nl)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nl)
        }, persist: function () {
        }, isPersistent: Nl
    }), t
}

var ih, oh, Ms, jo = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, Cp = ln(jo), ma = We({}, jo, {view: 0, detail: 0}), GO = ln(ma), Vc = We({}, ma, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Tp,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Ms && (Ms && e.type === "mousemove" ? (ih = e.screenX - Ms.screenX, oh = e.screenY - Ms.screenY) : oh = ih = 0, Ms = e), ih)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : oh
        }
    }), Nb = ln(Vc), qO = We({}, Vc, {dataTransfer: 0}), XO = ln(qO), YO = We({}, ma, {relatedTarget: 0}), sh = ln(YO),
    KO = We({}, jo, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), QO = ln(KO), ZO = We({}, jo, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : F.clipboardData
        }
    }), JO = ln(ZO), e2 = We({}, jo, {data: 0}), jb = ln(e2), t2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, n2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, r2 = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function i2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = r2[e]) && !!t[e]
}

function Tp() {
    return i2
}

var o2 = We({}, ma, {
    key: function (e) {
        if (e.key) {
            var t = t2[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = nc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? n2[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tp,
    charCode: function (e) {
        return e.type === "keypress" ? nc(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? nc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), s2 = ln(o2), a2 = We({}, Vc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Hb = ln(a2), l2 = We({}, ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tp
}), c2 = ln(l2), u2 = We({}, jo, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), f2 = ln(u2), d2 = We({}, Vc, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), h2 = ln(d2), p2 = [9, 13, 27, 32], Rp = Er && "CompositionEvent" in F, Ws = null;
Er && "documentMode" in document && (Ws = document.documentMode);
var m2 = Er && "TextEvent" in F && !Ws, hw = Er && (!Rp || Ws && 8 < Ws && 11 >= Ws), Wb = String.fromCharCode(32),
    Ub = !1;

function pw(e, t) {
    switch (e) {
        case"keyup":
            return p2.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function mw(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var bo = !1;

function g2(e, t) {
    switch (e) {
        case"compositionend":
            return mw(t);
        case"keypress":
            return t.which !== 32 ? null : (Ub = !0, Wb);
        case"textInput":
            return e = t.data, e === Wb && Ub ? null : e;
        default:
            return null
    }
}

function v2(e, t) {
    if (bo) return e === "compositionend" || !Rp && pw(e, t) ? (e = dw(), tc = kp = Qr = null, bo = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return hw && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var y2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Gb(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!y2[e.type] : t === "textarea"
}

function gw(e, t, n, r) {
    qx(r), t = vc(t, "onChange"), 0 < t.length && (n = new Cp("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Us = null, ra = null;

function b2(e) {
    Ew(e, 0)
}

function Ac(e) {
    var t = So(e);
    if ($x(t)) return e
}

function x2(e, t) {
    if (e === "change") return t
}

var vw = !1;
Er && (Er ? (Hl = "oninput" in document, Hl || (ah = document.createElement("div"), ah.setAttribute("oninput", "return;"), Hl = typeof ah.oninput == "function"), jl = Hl) : jl = !1, vw = jl && (!document.documentMode || 9 < document.documentMode));
var jl, Hl, ah;

function qb() {
    Us && (Us.detachEvent("onpropertychange", yw), ra = Us = null)
}

function yw(e) {
    if (e.propertyName === "value" && Ac(ra)) {
        var t = [];
        gw(t, ra, e, yp(e)), Qx(b2, t)
    }
}

function w2(e, t, n) {
    e === "focusin" ? (qb(), Us = t, ra = n, Us.attachEvent("onpropertychange", yw)) : e === "focusout" && qb()
}

function S2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ac(ra)
}

function k2(e, t) {
    if (e === "click") return Ac(t)
}

function C2(e, t) {
    if (e === "input" || e === "change") return Ac(t)
}

function T2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var Nn = typeof Object.is == "function" ? Object.is : T2;

function ia(e, t) {
    if (Nn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!wh.call(t, i) || !Nn(e[i], t[i])) return !1
    }
    return !0
}

function Xb(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Yb(e, t) {
    var n = Xb(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Xb(n)
    }
}

function bw(e, t) {
    return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? bw(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}

function xw() {
    for (var e = F, t = uc(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (!n) break;
        e = t.contentWindow, t = uc(e.document)
    }
    return t
}

function Ep(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function R2(e) {
    var t = xw(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bw(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ep(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || F, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length, o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Yb(n, o);
                var s = Yb(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var E2 = Er && "documentMode" in document && 11 >= document.documentMode, xo = null, $h = null, Gs = null, Nh = !1;

function Kb(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Nh || xo == null || xo !== uc(r) || (r = xo, "selectionStart" in r && Ep(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || F).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Gs && ia(Gs, r) || (Gs = r, r = vc($h, "onSelect"), 0 < r.length && (t = new Cp("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = xo)))
}

function Wl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var wo = {
    animationend: Wl("Animation", "AnimationEnd"),
    animationiteration: Wl("Animation", "AnimationIteration"),
    animationstart: Wl("Animation", "AnimationStart"),
    transitionend: Wl("Transition", "TransitionEnd")
}, lh = {}, ww = {};
Er && (ww = document.createElement("div").style, "AnimationEvent" in F || (delete wo.animationend.animation, delete wo.animationiteration.animation, delete wo.animationstart.animation), "TransitionEvent" in F || delete wo.transitionend.transition);

function Dc(e) {
    if (lh[e]) return lh[e];
    if (!wo[e]) return e;
    var t, n = wo[e];
    for (t in n) if (n.hasOwnProperty(t) && t in ww) return lh[e] = n[t];
    return e
}

var Sw = Dc("animationend"), kw = Dc("animationiteration"), Cw = Dc("animationstart"), Tw = Dc("transitionend"),
    Rw = new Map,
    Qb = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function ci(e, t) {
    Rw.set(e, t), zi(t, [e])
}

for (Ul = 0; Ul < Qb.length; Ul++) Gl = Qb[Ul], Zb = Gl.toLowerCase(), Jb = Gl[0].toUpperCase() + Gl.slice(1), ci(Zb, "on" + Jb);
var Gl, Zb, Jb, Ul;
ci(Sw, "onAnimationEnd");
ci(kw, "onAnimationIteration");
ci(Cw, "onAnimationStart");
ci("dblclick", "onDoubleClick");
ci("focusin", "onFocus");
ci("focusout", "onBlur");
ci(Tw, "onTransitionEnd");
Vo("onMouseEnter", ["mouseout", "mouseover"]);
Vo("onMouseLeave", ["mouseout", "mouseover"]);
Vo("onPointerEnter", ["pointerout", "pointerover"]);
Vo("onPointerLeave", ["pointerout", "pointerover"]);
zi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    F2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));

function ex(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, FO(r, t, void 0, e), e.currentTarget = null
}

function Ew(e, t) {
    t = (4 & t) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
                var a = r[s], l = a.instance, c = a.currentTarget;
                if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                ex(i, a, c), o = l
            } else for (s = 0; s < r.length; s++) {
                if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                ex(i, a, c), o = l
            }
        }
    }
    if (dc) throw e = Ah, dc = !1, Ah = null, e
}

function Le(e, t) {
    var n = t[Gh];
    n === void 0 && (n = t[Gh] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Fw(t, e, 2, !1), n.add(r))
}

function ch(e, t, n) {
    var r = 0;
    t && (r |= 4), Fw(n, e, r, t)
}

var ql = "_reactListening" + Math.random().toString(36).slice(2);

function oa(e) {
    if (!e[ql]) {
        e[ql] = !0, Vx.forEach(function (n) {
            n !== "selectionchange" && (F2.has(n) || ch(n, !1, e), ch(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ql] || (t[ql] = !0, ch("selectionchange", !1, t))
    }
}

function Fw(e, t, n, r) {
    switch (fw(t)) {
        case 1:
            var i = WO;
            break;
        case 4:
            i = UO;
            break;
        default:
            i = Sp
    }
    n = i.bind(null, t, n, e), i = void 0, !Vh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {passive: i}) : e.addEventListener(t, n, !1)
}

function uh(e, t, n, r, i) {
    var o = r;
    if (!(1 & t) && !(2 & t) && r !== null) e:for (; ;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4) for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                s = s.return
            }
            for (; a !== null;) {
                if (s = Fi(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Qx(function () {
        var c = o, u = yp(n), f = [];
        e:{
            var d = Rw.get(e);
            if (d !== void 0) {
                var h = Cp, v = e;
                switch (e) {
                    case"keypress":
                        if (nc(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        h = s2;
                        break;
                    case"focusin":
                        v = "focus", h = sh;
                        break;
                    case"focusout":
                        v = "blur", h = sh;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        h = sh;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        h = Nb;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        h = XO;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        h = c2;
                        break;
                    case Sw:
                    case kw:
                    case Cw:
                        h = QO;
                        break;
                    case Tw:
                        h = f2;
                        break;
                    case"scroll":
                        h = GO;
                        break;
                    case"wheel":
                        h = h2;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        h = JO;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        h = Hb
                }
                var g = (4 & t) !== 0, b = !g && e === "scroll", p = g ? d !== null ? d + "Capture" : null : d;
                g = [];
                for (var m, y = c; y !== null;) {
                    m = y;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w, p !== null && (w = Js(y, p), w != null && g.push(sa(y, w, m)))), b) break;
                    y = y.return
                }
                0 < g.length && (d = new h(d, v, null, n, u), f.push({event: d, listeners: g}))
            }
        }
        if (!(7 & t)) {
            if (d = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", (!d || n === Mh || !(v = n.relatedTarget || n.fromElement) || !Fi(v) && !v[Fr]) && (h || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : F, h ? (v = n.relatedTarget || n.toElement, h = c, v = v ? Fi(v) : null, v !== null && (b = Bi(v), v !== b || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = c), h !== v)) {
                if (g = Nb, w = "onMouseLeave", p = "onMouseEnter", y = "mouse", e !== "pointerout" && e !== "pointerover" || (g = Hb, w = "onPointerLeave", p = "onPointerEnter", y = "pointer"), b = h == null ? d : So(h), m = v == null ? d : So(v), d = new g(w, y + "leave", h, n, u), d.target = b, d.relatedTarget = m, w = null, Fi(u) === c && (g = new g(p, y + "enter", v, n, u), g.target = m, g.relatedTarget = b, w = g), b = w, h && v) e:{
                    for (g = h, p = v, y = 0, m = g; m; m = go(m)) y++;
                    for (m = 0, w = p; w; w = go(w)) m++;
                    for (; 0 < y - m;) g = go(g), y--;
                    for (; 0 < m - y;) p = go(p), m--;
                    for (; y--;) {
                        if (g === p || p !== null && g === p.alternate) break e;
                        g = go(g), p = go(p)
                    }
                    g = null
                } else g = null;
                h !== null && tx(f, d, h, g, !1), v !== null && b !== null && tx(f, b, v, g, !0)
            }
            if (d = c ? So(c) : F, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file") var C = x2; else if (Gb(d)) if (vw) C = C2; else {
                C = S2;
                var S = w2
            } else (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = k2);
            switch (C && (C = C(e, c)) ? gw(f, C, n, u) : (S && S(e, d, c), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Fh(d, "number", d.value)), S = c ? So(c) : F, e) {
                case"focusin":
                    (Gb(S) || S.contentEditable === "true") && (xo = S, $h = c, Gs = null);
                    break;
                case"focusout":
                    Gs = $h = xo = null;
                    break;
                case"mousedown":
                    Nh = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    Nh = !1, Kb(f, n, u);
                    break;
                case"selectionchange":
                    if (E2) break;
                case"keydown":
                case"keyup":
                    Kb(f, n, u)
            }
            var R;
            if (Rp) e:{
                switch (e) {
                    case"compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case"compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                }
                E = void 0
            } else bo ? pw(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (hw && n.locale !== "ko" && (bo || E !== "onCompositionStart" ? E === "onCompositionEnd" && bo && (R = dw()) : (Qr = u, kp = "value" in Qr ? Qr.value : Qr.textContent, bo = !0)), S = vc(c, E), 0 < S.length && (E = new jb(E, e, null, n, u), f.push({
                event: E,
                listeners: S
            }), R ? E.data = R : (R = mw(n), R !== null && (E.data = R)))), (R = m2 ? g2(e, n) : v2(e, n)) && (c = vc(c, "onBeforeInput"), 0 < c.length && (u = new jb("onBeforeInput", "beforeinput", null, n, u), f.push({
                event: u,
                listeners: c
            }), u.data = R))
        }
        Ew(f, t)
    })
}

function sa(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function vc(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e, o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Js(e, n), o != null && r.unshift(sa(e, o, i)), o = Js(e, t), o != null && r.push(sa(e, o, i))), e = e.return
    }
    return r
}

function go(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function tx(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n, l = a.alternate, c = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && c !== null && (a = c, i ? (l = Js(n, o), l != null && s.unshift(sa(n, l, a))) : i || (l = Js(n, o), l != null && s.push(sa(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({event: t, listeners: s})
}

var P2 = /\r\n?/g, _2 = /\u0000|\uFFFD/g;

function nx(e) {
    return (typeof e == "string" ? e : "" + e).replace(P2, `
`).replace(_2, "")
}

function Xl(e, t, n) {
    if (t = nx(t), nx(e) !== t && n) throw Error(M(425))
}

function yc() {
}

var jh = null, Hh = null;

function Wh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Uh = typeof setTimeout == "function" ? setTimeout : void 0,
    I2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rx = typeof Promise == "function" ? Promise : void 0,
    O2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rx < "u" ? function (e) {
        return rx.resolve(null).then(e).catch(M2)
    } : Uh;

function M2(e) {
    setTimeout(function () {
        throw e
    })
}

function fh(e, t) {
    var n = t, r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), na(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    na(t)
}

function ni(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ix(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var Ho = Math.random().toString(36).slice(2), rr = "__reactFiber$" + Ho, aa = "__reactProps$" + Ho,
    Fr = "__reactContainer$" + Ho, Gh = "__reactEvents$" + Ho, L2 = "__reactListeners$" + Ho,
    V2 = "__reactHandles$" + Ho;

function Fi(e) {
    var t = e[rr];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Fr] || n[rr]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ix(e); e !== null;) {
                if (n = e[rr]) return n;
                e = ix(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ga(e) {
    return e = e[rr] || e[Fr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function So(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33))
}

function zc(e) {
    return e[aa] || null
}

var qh = [], ko = -1;

function ui(e) {
    return {current: e}
}

function Ve(e) {
    0 > ko || (e.current = qh[ko], qh[ko] = null, ko--)
}

function Ie(e, t) {
    ko++, qh[ko] = e.current, e.current = t
}

var li = {}, Ot = ui(li), qt = ui(!1), Mi = li;

function Ao(e, t) {
    var n = e.type.contextTypes;
    if (!n) return li;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i, o = {};
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Xt(e) {
    return e = e.childContextTypes, e != null
}

function bc() {
    Ve(qt), Ve(Ot)
}

function ox(e, t, n) {
    if (Ot.current !== li) throw Error(M(168));
    Ie(Ot, t), Ie(qt, n)
}

function Pw(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(M(108, wO(e) || "Unknown", i));
    return We({}, n, r)
}

function xc(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || li, Mi = Ot.current, Ie(Ot, e), Ie(qt, qt.current), !0
}

function sx(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? (e = Pw(e, t, Mi), r.__reactInternalMemoizedMergedChildContext = e, Ve(qt), Ve(Ot), Ie(Ot, e)) : Ve(qt), Ie(qt, n)
}

var kr = null, Bc = !1, dh = !1;

function _w(e) {
    kr === null ? kr = [e] : kr.push(e)
}

function A2(e) {
    Bc = !0, _w(e)
}

function fi() {
    if (!dh && kr !== null) {
        dh = !0;
        var e = 0, t = ke;
        try {
            var n = kr;
            for (ke = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            kr = null, Bc = !1
        } catch (i) {
            throw kr !== null && (kr = kr.slice(e + 1)), tw(bp, fi), i
        } finally {
            ke = t, dh = !1
        }
    }
    return null
}

var Co = [], To = 0, wc = null, Sc = 0, xn = [], wn = 0, Li = null, Cr = 1, Tr = "";

function Ri(e, t) {
    Co[To++] = Sc, Co[To++] = wc, wc = e, Sc = t
}

function Iw(e, t, n) {
    xn[wn++] = Cr, xn[wn++] = Tr, xn[wn++] = Li, Li = e;
    var r = Cr;
    e = Tr;
    var i = 32 - Bn(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Bn(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Cr = 1 << 32 - Bn(t) + i | n << i | r, Tr = o + e
    } else Cr = 1 << o | n << i | r, Tr = e
}

function Fp(e) {
    e.return !== null && (Ri(e, 1), Iw(e, 1, 0))
}

function Pp(e) {
    for (; e === wc;) wc = Co[--To], Co[To] = null, Sc = Co[--To], Co[To] = null;
    for (; e === Li;) Li = xn[--wn], xn[wn] = null, Tr = xn[--wn], xn[wn] = null, Cr = xn[--wn], xn[wn] = null
}

var on = null, rn = null, $e = !1, zn = null;

function Ow(e, t) {
    var n = Sn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ax(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, on = e, rn = ni(t.firstChild), !0);
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, on = e, rn = null, !0);
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null && (n = Li !== null ? {
                id: Cr,
                overflow: Tr
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Sn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, on = e, rn = null, !0);
        default:
            return !1
    }
}

function Xh(e) {
    return (1 & e.mode) !== 0 && (128 & e.flags) === 0
}

function Yh(e) {
    if ($e) {
        var t = rn;
        if (t) {
            var n = t;
            if (!ax(e, t)) {
                if (Xh(e)) throw Error(M(418));
                t = ni(n.nextSibling);
                var r = on;
                t && ax(e, t) ? Ow(r, n) : (e.flags = -4097 & e.flags | 2, $e = !1, on = e)
            }
        } else {
            if (Xh(e)) throw Error(M(418));
            e.flags = -4097 & e.flags | 2, $e = !1, on = e
        }
    }
}

function lx(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    on = e
}

function Yl(e) {
    if (e !== on) return !1;
    if (!$e) return lx(e), $e = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wh(e.type, e.memoizedProps)), t && (t = rn)) {
        if (Xh(e)) throw Mw(), Error(M(418));
        for (; t;) Ow(e, t), t = ni(t.nextSibling)
    }
    if (lx(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            rn = ni(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            rn = null
        }
    } else rn = on ? ni(e.stateNode.nextSibling) : null;
    return !0
}

function Mw() {
    for (var e = rn; e;) e = ni(e.nextSibling)
}

function Do() {
    rn = on = null, $e = !1
}

function _p(e) {
    zn === null ? zn = [e] : zn.push(e)
}

var D2 = Ir.ReactCurrentBatchConfig;

function An(e, t) {
    if (e && e.defaultProps) {
        t = We({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var kc = ui(null), Cc = null, Ro = null, Ip = null;

function Op() {
    Ip = Ro = Cc = null
}

function Mp(e) {
    var t = kc.current;
    Ve(kc), e._currentValue = t
}

function Kh(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Mo(e, t) {
    Cc = e, Ip = Ro = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Gt = !0), e.firstContext = null)
}

function Cn(e) {
    var t = e._currentValue;
    if (Ip !== e) if (e = {context: e, memoizedValue: t, next: null}, Ro === null) {
        if (Cc === null) throw Error(M(308));
        Ro = e, Cc.dependencies = {lanes: 0, firstContext: e}
    } else Ro = Ro.next = e;
    return t
}

var Pi = null;

function Lp(e) {
    Pi === null ? Pi = [e] : Pi.push(e)
}

function Lw(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Lp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Pr(e, r)
}

function Pr(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var Xr = !1;

function Vp(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function Vw(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Rr(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function ri(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, 2 & xe) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Pr(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Lp(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Pr(e, n)
}

function rc(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (4194240 & n) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, xp(e, n)
    }
}

function cx(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r === null || (r = r.updateQueue, n !== r)) e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; else {
        var i = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n
    }
}

function Tc(e, t, n, r) {
    var i = e.updateQueue;
    Xr = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a, c = l.next;
        l.next = null, s === null ? o = c : s.next = c, s = l;
        var u = e.alternate;
        u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0, u = c = l = null, a = o;
        do {
            var d = a.lane, h = a.eventTime;
            if ((r & d) === d) {
                u !== null && (u = u.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e:{
                    var v = e, g = a;
                    switch (d = t, h = n, g.tag) {
                        case 1:
                            if (v = g.payload, typeof v == "function") {
                                f = v.call(h, f, d);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = -65537 & v.flags | 128;
                        case 0:
                            if (v = g.payload, d = typeof v == "function" ? v.call(h, f, d) : v, d == null) break e;
                            f = We({}, f, d);
                            break e;
                        case 2:
                            Xr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a))
            } else h = {
                eventTime: h,
                lane: d,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, u === null ? (c = u = h, l = f) : u = u.next = h, s |= d;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
            }
        } while (1);
        if (u === null && (l = f), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Ai |= s, e.lanes = s, e.memoizedState = f
    }
}

function ux(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
            i.call(r)
        }
    }
}

var Aw = new Lx.Component().refs;

function Qh(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : We({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var $c = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Bi(e) === e
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = zt(), i = oi(e), o = Rr(r, i);
        o.payload = t, n != null && (o.callback = n), t = ri(e, o, i), t !== null && ($n(t, e, i, r), rc(t, e, i))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = zt(), i = oi(e), o = Rr(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ri(e, o, i), t !== null && ($n(t, e, i, r), rc(t, e, i))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = zt(), r = oi(e), i = Rr(n, r);
        i.tag = 2, t != null && (i.callback = t), t = ri(e, i, r), t !== null && ($n(t, e, r, n), rc(t, e, r))
    }
};

function fx(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : !t.prototype || !t.prototype.isPureReactComponent || !ia(n, r) || !ia(i, o)
}

function Dw(e, t, n) {
    var r = !1, i = li, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Cn(o) : (i = Xt(t) ? Mi : Ot.current, r = t.contextTypes, o = (r = r != null) ? Ao(e, i) : li), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = $c, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function dx(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $c.enqueueReplaceState(t, t.state, null)
}

function Zh(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Aw, Vp(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Cn(o) : (o = Xt(t) ? Mi : Ot.current, i.context = Ao(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Qh(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && $c.enqueueReplaceState(i, i.state, null), Tc(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ls(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, e));
            var i = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var a = i.refs;
                a === Aw && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e))
    }
    return e
}

function Kl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function hx(e) {
    var t = e._init;
    return t(e._payload)
}

function zw(e) {
    function t(p, m) {
        if (e) {
            var y = p.deletions;
            y === null ? (p.deletions = [m], p.flags |= 16) : y.push(m)
        }
    }

    function n(p, m) {
        if (!e) return null;
        for (; m !== null;) t(p, m), m = m.sibling;
        return null
    }

    function r(p, m) {
        for (p = new Map; m !== null;) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), m = m.sibling;
        return p
    }

    function i(p, m) {
        return p = si(p, m), p.index = 0, p.sibling = null, p
    }

    function o(p, m, y) {
        return p.index = y, e ? (y = p.alternate, y !== null ? (y = y.index, y < m ? (p.flags |= 2, m) : y) : (p.flags |= 2, m)) : (p.flags |= 1048576, m)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, m, y, w) {
        return m === null || m.tag !== 6 ? (m = bh(y, p.mode, w), m.return = p, m) : (m = i(m, y), m.return = p, m)
    }

    function l(p, m, y, w) {
        var C = y.type;
        return C === yo ? u(p, m, y.props.children, w, y.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qr && hx(C) === m.type) ? (w = i(m, y.props), w.ref = Ls(p, m, y), w.return = p, w) : (w = cc(y.type, y.key, y.props, null, p.mode, w), w.ref = Ls(p, m, y), w.return = p, w)
    }

    function c(p, m, y, w) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = xh(y, p.mode, w), m.return = p, m) : (m = i(m, y.children || []), m.return = p, m)
    }

    function u(p, m, y, w, C) {
        return m === null || m.tag !== 7 ? (m = Oi(y, p.mode, w, C), m.return = p, m) : (m = i(m, y), m.return = p, m)
    }

    function f(p, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = bh("" + m, p.mode, y), m.return = p, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Vl:
                    return y = cc(m.type, m.key, m.props, null, p.mode, y), y.ref = Ls(p, null, m), y.return = p, y;
                case vo:
                    return m = xh(m, p.mode, y), m.return = p, m;
                case qr:
                    var w = m._init;
                    return f(p, w(m._payload), y)
            }
            if (Bs(m) || _s(m)) return m = Oi(m, p.mode, y, null), m.return = p, m;
            Kl(p, m)
        }
        return null
    }

    function d(p, m, y, w) {
        var C = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : a(p, m, "" + y, w);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Vl:
                    return y.key === C ? l(p, m, y, w) : null;
                case vo:
                    return y.key === C ? c(p, m, y, w) : null;
                case qr:
                    return C = y._init, d(p, m, C(y._payload), w)
            }
            if (Bs(y) || _s(y)) return C !== null ? null : u(p, m, y, w, null);
            Kl(p, y)
        }
        return null
    }

    function h(p, m, y, w, C) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(y) || null, a(m, p, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Vl:
                    return p = p.get(w.key === null ? y : w.key) || null, l(m, p, w, C);
                case vo:
                    return p = p.get(w.key === null ? y : w.key) || null, c(m, p, w, C);
                case qr:
                    var S = w._init;
                    return h(p, m, y, S(w._payload), C)
            }
            if (Bs(w) || _s(w)) return p = p.get(y) || null, u(m, p, w, C, null);
            Kl(m, w)
        }
        return null
    }

    function v(p, m, y, w) {
        for (var C = null, S = null, R = m, E = m = 0, I = null; R !== null && E < y.length; E++) {
            R.index > E ? (I = R, R = null) : I = R.sibling;
            var O = d(p, R, y[E], w);
            if (O === null) {
                R === null && (R = I);
                break
            }
            e && R && O.alternate === null && t(p, R), m = o(O, m, E), S === null ? C = O : S.sibling = O, S = O, R = I
        }
        if (E === y.length) return n(p, R), $e && Ri(p, E), C;
        if (R === null) {
            for (; E < y.length; E++) R = f(p, y[E], w), R !== null && (m = o(R, m, E), S === null ? C = R : S.sibling = R, S = R);
            return $e && Ri(p, E), C
        }
        for (R = r(p, R); E < y.length; E++) I = h(R, p, E, y[E], w), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? E : I.key), m = o(I, m, E), S === null ? C = I : S.sibling = I, S = I);
        return e && R.forEach(function (H) {
            return t(p, H)
        }), $e && Ri(p, E), C
    }

    function g(p, m, y, w) {
        var C = _s(y);
        if (typeof C != "function") throw Error(M(150));
        if (y = C.call(y), y == null) throw Error(M(151));
        for (var S = C = null, R = m, E = m = 0, I = null, O = y.next(); R !== null && !O.done; E++, O = y.next()) {
            R.index > E ? (I = R, R = null) : I = R.sibling;
            var H = d(p, R, O.value, w);
            if (H === null) {
                R === null && (R = I);
                break
            }
            e && R && H.alternate === null && t(p, R), m = o(H, m, E), S === null ? C = H : S.sibling = H, S = H, R = I
        }
        if (O.done) return n(p, R), $e && Ri(p, E), C;
        if (R === null) {
            for (; !O.done; E++, O = y.next()) O = f(p, O.value, w), O !== null && (m = o(O, m, E), S === null ? C = O : S.sibling = O, S = O);
            return $e && Ri(p, E), C
        }
        for (R = r(p, R); !O.done; E++, O = y.next()) O = h(R, p, E, O.value, w), O !== null && (e && O.alternate !== null && R.delete(O.key === null ? E : O.key), m = o(O, m, E), S === null ? C = O : S.sibling = O, S = O);
        return e && R.forEach(function (z) {
            return t(p, z)
        }), $e && Ri(p, E), C
    }

    function b(p, m, y, w) {
        if (typeof y == "object" && y !== null && y.type === yo && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Vl:
                    e:{
                        for (var C = y.key, S = m; S !== null;) {
                            if (S.key === C) {
                                if (C = y.type, C === yo) {
                                    if (S.tag === 7) {
                                        n(p, S.sibling), m = i(S, y.props.children), m.return = p, p = m;
                                        break e
                                    }
                                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qr && hx(C) === S.type) {
                                    n(p, S.sibling), m = i(S, y.props), m.ref = Ls(p, S, y), m.return = p, p = m;
                                    break e
                                }
                                n(p, S);
                                break
                            }
                            t(p, S), S = S.sibling
                        }
                        y.type === yo ? (m = Oi(y.props.children, p.mode, w, y.key), m.return = p, p = m) : (w = cc(y.type, y.key, y.props, null, p.mode, w), w.ref = Ls(p, m, y), w.return = p, p = w)
                    }
                    return s(p);
                case vo:
                    e:{
                        for (S = y.key; m !== null;) {
                            if (m.key === S) {
                                if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                    n(p, m.sibling), m = i(m, y.children || []), m.return = p, p = m;
                                    break e
                                }
                                n(p, m);
                                break
                            }
                            t(p, m), m = m.sibling
                        }
                        m = xh(y, p.mode, w), m.return = p, p = m
                    }
                    return s(p);
                case qr:
                    return S = y._init, b(p, m, S(y._payload), w)
            }
            if (Bs(y)) return v(p, m, y, w);
            if (_s(y)) return g(p, m, y, w);
            Kl(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(p, m.sibling), m = i(m, y), m.return = p, p = m) : (n(p, m), m = bh(y, p.mode, w), m.return = p, p = m), s(p)) : n(p, m)
    }

    return b
}

var zo = zw(!0), Bw = zw(!1), va = {}, or = ui(va), la = ui(va), ca = ui(va);

function _i(e) {
    if (e === va) throw Error(M(174));
    return e
}

function Ap(e, t) {
    switch (Ie(ca, t), Ie(la, e), Ie(or, va), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : _h(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _h(t, e)
    }
    Ve(or), Ie(or, t)
}

function Bo() {
    Ve(or), Ve(la), Ve(ca)
}

function $w(e) {
    _i(ca.current);
    var t = _i(or.current), n = _h(t, e.type);
    t !== n && (Ie(la, e), Ie(or, n))
}

function Dp(e) {
    la.current === e && (Ve(or), Ve(la))
}

var je = ui(0);

function Rc(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (128 & t.flags) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var hh = [];

function zp() {
    for (var e = 0; e < hh.length; e++) hh[e]._workInProgressVersionPrimary = null;
    hh.length = 0
}

var ic = Ir.ReactCurrentDispatcher, ph = Ir.ReactCurrentBatchConfig, Vi = 0, He = null, lt = null, pt = null, Ec = !1,
    qs = !1, ua = 0, z2 = 0;

function Pt() {
    throw Error(M(321))
}

function Bp(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Nn(e[n], t[n])) return !1;
    return !0
}

function $p(e, t, n, r, i, o) {
    if (Vi = o, He = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ic.current = e === null || e.memoizedState === null ? j2 : H2, e = n(r, i), qs) {
        o = 0;
        do {
            if (qs = !1, ua = 0, 25 <= o) throw Error(M(301));
            o += 1, pt = lt = null, t.updateQueue = null, ic.current = W2, e = n(r, i)
        } while (qs)
    }
    if (ic.current = Fc, t = lt !== null && lt.next !== null, Vi = 0, pt = lt = He = null, Ec = !1, t) throw Error(M(300));
    return e
}

function Np() {
    var e = ua !== 0;
    return ua = 0, e
}

function nr() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return pt === null ? He.memoizedState = pt = e : pt = pt.next = e, pt
}

function Tn() {
    if (lt === null) {
        var e = He.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = lt.next;
    var t = pt === null ? He.memoizedState : pt.next;
    if (t !== null) pt = t, lt = e; else {
        if (e === null) throw Error(M(310));
        lt = e, e = {
            memoizedState: lt.memoizedState,
            baseState: lt.baseState,
            baseQueue: lt.baseQueue,
            queue: lt.queue,
            next: null
        }, pt === null ? He.memoizedState = pt = e : pt = pt.next = e
    }
    return pt
}

function fa(e, t) {
    return typeof t == "function" ? t(e) : t
}

function mh(e) {
    var t = Tn(), n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = lt, i = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null, l = null, c = o;
        do {
            var u = c.lane;
            if ((Vi & u) === u) l !== null && (l = l.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                var f = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = f, s = r) : l = l.next = f, He.lanes |= u, Ai |= u
            }
            c = c.next
        } while (c !== null && c !== o);
        l === null ? s = r : l.next = a, Nn(r, t.memoizedState) || (Gt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, He.lanes |= o, Ai |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function gh(e) {
    var t = Tn(), n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        Nn(o, t.memoizedState) || (Gt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Nw() {
}

function jw(e, t) {
    var n = He, r = Tn(), i = t(), o = !Nn(r.memoizedState, i);
    if (o && (r.memoizedState = i, Gt = !0), r = r.queue, jp(Uw.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && 1 & pt.memoizedState.tag) {
        if (n.flags |= 2048, da(9, Ww.bind(null, n, r, i, t), void 0, null), mt === null) throw Error(M(349));
        30 & Vi || Hw(n, t, i)
    }
    return i
}

function Hw(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = He.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, He.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Ww(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Gw(t) && qw(e)
}

function Uw(e, t, n) {
    return n(function () {
        Gw(t) && qw(e)
    })
}

function Gw(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Nn(e, n)
    } catch {
        return !0
    }
}

function qw(e) {
    var t = Pr(e, 1);
    t !== null && $n(t, e, 1, -1)
}

function px(e) {
    var t = nr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fa,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = N2.bind(null, He, e), [t.memoizedState, e]
}

function da(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = He.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, He.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Xw() {
    return Tn().memoizedState
}

function oc(e, t, n, r) {
    var i = nr();
    He.flags |= e, i.memoizedState = da(1 | t, n, void 0, r === void 0 ? null : r)
}

function Nc(e, t, n, r) {
    var i = Tn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (lt !== null) {
        var s = lt.memoizedState;
        if (o = s.destroy, r !== null && Bp(r, s.deps)) {
            i.memoizedState = da(t, n, o, r);
            return
        }
    }
    He.flags |= e, i.memoizedState = da(1 | t, n, o, r)
}

function mx(e, t) {
    return oc(8390656, 8, e, t)
}

function jp(e, t) {
    return Nc(2048, 8, e, t)
}

function Yw(e, t) {
    return Nc(4, 2, e, t)
}

function Kw(e, t) {
    return Nc(4, 4, e, t)
}

function Qw(e, t) {
    return typeof t == "function" ? (e = e(), t(e), function () {
        t(null)
    }) : t != null ? (e = e(), t.current = e, function () {
        t.current = null
    }) : void 0
}

function Zw(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Nc(4, 4, Qw.bind(null, t, e), n)
}

function Hp() {
}

function Jw(e, t) {
    var n = Tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function eS(e, t) {
    var n = Tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function tS(e, t, n) {
    return 21 & Vi ? (Nn(n, t) || (n = iw(), He.lanes |= n, Ai |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Gt = !0), e.memoizedState = n)
}

function B2(e, t) {
    var n = ke;
    ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ph.transition;
    ph.transition = {};
    try {
        e(!1), t()
    } finally {
        ke = n, ph.transition = r
    }
}

function nS() {
    return Tn().memoizedState
}

function $2(e, t, n) {
    var r = oi(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, rS(e)) iS(t, n); else if (n = Lw(e, t, n, r), n !== null) {
        var i = zt();
        $n(n, e, r, i), oS(n, t, r)
    }
}

function N2(e, t, n) {
    var r = oi(e), i = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (rS(e)) iS(t, i); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState, a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, Nn(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Lp(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {
        }
        n = Lw(e, t, i, r), n !== null && (i = zt(), $n(n, e, r, i), oS(n, t, r))
    }
}

function rS(e) {
    var t = e.alternate;
    return e === He || t !== null && t === He
}

function iS(e, t) {
    qs = Ec = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function oS(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, xp(e, n)
    }
}

var Fc = {
    readContext: Cn,
    useCallback: Pt,
    useContext: Pt,
    useEffect: Pt,
    useImperativeHandle: Pt,
    useInsertionEffect: Pt,
    useLayoutEffect: Pt,
    useMemo: Pt,
    useReducer: Pt,
    useRef: Pt,
    useState: Pt,
    useDebugValue: Pt,
    useDeferredValue: Pt,
    useTransition: Pt,
    useMutableSource: Pt,
    useSyncExternalStore: Pt,
    useId: Pt,
    unstable_isNewReconciler: !1
}, j2 = {
    readContext: Cn, useCallback: function (e, t) {
        return nr().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: Cn, useEffect: mx, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, oc(4194308, 4, Qw.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return oc(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return oc(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = nr();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = nr();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = $2.bind(null, He, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = nr();
        return e = {current: e}, t.memoizedState = e
    }, useState: px, useDebugValue: Hp, useDeferredValue: function (e) {
        return nr().memoizedState = e
    }, useTransition: function () {
        var e = px(!1), t = e[0];
        return e = B2.bind(null, e[1]), nr().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = He, i = nr();
        if ($e) {
            if (n === void 0) throw Error(M(407));
            n = n()
        } else {
            if (n = t(), mt === null) throw Error(M(349));
            30 & Vi || Hw(r, t, n)
        }
        i.memoizedState = n;
        var o = {value: n, getSnapshot: t};
        return i.queue = o, mx(Uw.bind(null, r, o, e), [e]), r.flags |= 2048, da(9, Ww.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = nr(), t = mt.identifierPrefix;
        if ($e) {
            var n = Tr, r = Cr;
            n = (r & ~(1 << 32 - Bn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ua++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = z2++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, H2 = {
    readContext: Cn,
    useCallback: Jw,
    useContext: Cn,
    useEffect: jp,
    useImperativeHandle: Zw,
    useInsertionEffect: Yw,
    useLayoutEffect: Kw,
    useMemo: eS,
    useReducer: mh,
    useRef: Xw,
    useState: function () {
        return mh(fa)
    },
    useDebugValue: Hp,
    useDeferredValue: function (e) {
        var t = Tn();
        return tS(t, lt.memoizedState, e)
    },
    useTransition: function () {
        var e = mh(fa)[0], t = Tn().memoizedState;
        return [e, t]
    },
    useMutableSource: Nw,
    useSyncExternalStore: jw,
    useId: nS,
    unstable_isNewReconciler: !1
}, W2 = {
    readContext: Cn,
    useCallback: Jw,
    useContext: Cn,
    useEffect: jp,
    useImperativeHandle: Zw,
    useInsertionEffect: Yw,
    useLayoutEffect: Kw,
    useMemo: eS,
    useReducer: gh,
    useRef: Xw,
    useState: function () {
        return gh(fa)
    },
    useDebugValue: Hp,
    useDeferredValue: function (e) {
        var t = Tn();
        return lt === null ? t.memoizedState = e : tS(t, lt.memoizedState, e)
    },
    useTransition: function () {
        var e = gh(fa)[0], t = Tn().memoizedState;
        return [e, t]
    },
    useMutableSource: Nw,
    useSyncExternalStore: jw,
    useId: nS,
    unstable_isNewReconciler: !1
};

function $o(e, t) {
    try {
        var n = "", r = t;
        do n += xO(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {value: e, source: t, stack: i, digest: null}
}

function vh(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function Jh(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var U2 = typeof WeakMap == "function" ? WeakMap : Map;

function sS(e, t, n) {
    n = Rr(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        _c || (_c = !0, lp = r), Jh(e, t)
    }, n
}

function aS(e, t, n) {
    n = Rr(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            Jh(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        Jh(e, t), typeof r != "function" && (ii === null ? ii = new Set([this]) : ii.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""})
    }), n
}

function gx(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new U2;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = oM.bind(null, e, t, n), t.then(e, e))
}

function vx(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function yx(e, t, n, r, i) {
    return 1 & e.mode ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rr(-1, 1), t.tag = 2, ri(n, t, 1))), n.lanes |= 1), e)
}

var G2 = Ir.ReactCurrentOwner, Gt = !1;

function Dt(e, t, n, r) {
    t.child = e === null ? Bw(t, null, n, r) : zo(t, e.child, n, r)
}

function bx(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Mo(t, i), r = $p(e, t, n, r, o, i), n = Np(), e !== null && !Gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, _r(e, t, i)) : ($e && n && Fp(t), t.flags |= 1, Dt(e, t, r, i), t.child)
}

function xx(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Qp(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, lS(e, t, o, r, i)) : (e = cc(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ia, n(s, r) && e.ref === t.ref) return _r(e, t, i)
    }
    return t.flags |= 1, e = si(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function lS(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ia(o, r) && e.ref === t.ref) {
            if (Gt = !1, t.pendingProps = r = o, (e.lanes & i) === 0) return t.lanes = e.lanes, _r(e, t, i);
            131072 & e.flags && (Gt = !0)
        }
    }
    return ep(e, t, n, r, i)
}

function cS(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(1 & t.mode)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Ie(Fo, nn), nn |= n; else {
        if (!(1073741824 & n)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, Ie(Fo, nn), nn |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, Ie(Fo, nn), nn |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ie(Fo, nn), nn |= r;
    return Dt(e, t, i, n), t.child
}

function uS(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ep(e, t, n, r, i) {
    var o = Xt(n) ? Mi : Ot.current;
    return o = Ao(t, o), Mo(t, i), n = $p(e, t, n, r, o, i), r = Np(), e !== null && !Gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, _r(e, t, i)) : ($e && r && Fp(t), t.flags |= 1, Dt(e, t, n, i), t.child)
}

function wx(e, t, n, r, i) {
    if (Xt(n)) {
        var o = !0;
        xc(t)
    } else o = !1;
    if (Mo(t, i), t.stateNode === null) sc(e, t), Dw(t, n, r), Zh(t, n, r, i), r = !0; else if (e === null) {
        var s = t.stateNode, a = t.memoizedProps;
        s.props = a;
        var l = s.context, c = n.contextType;
        typeof c == "object" && c !== null ? c = Cn(c) : (c = Xt(n) ? Mi : Ot.current, c = Ao(t, c));
        var u = n.getDerivedStateFromProps,
            f = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && dx(t, s, r, c), Xr = !1;
        var d = t.memoizedState;
        s.state = d, Tc(t, r, s, i), l = t.memoizedState, a !== r || d !== l || qt.current || Xr ? (typeof u == "function" && (Qh(t, n, u, r), l = t.memoizedState), (a = Xr || fx(t, n, a, r, d, l, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Vw(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : An(t.type, a), s.props = c, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Cn(l) : (l = Xt(n) ? Mi : Ot.current, l = Ao(t, l));
        var h = n.getDerivedStateFromProps;
        (u = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && dx(t, s, r, l), Xr = !1, d = t.memoizedState, s.state = d, Tc(t, r, s, i);
        var v = t.memoizedState;
        a !== f || d !== v || qt.current || Xr ? (typeof h == "function" && (Qh(t, n, h, r), v = t.memoizedState), (c = Xr || fx(t, n, c, r, d, v, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return tp(e, t, n, r, o, i)
}

function tp(e, t, n, r, i, o) {
    uS(e, t);
    var s = (128 & t.flags) !== 0;
    if (!r && !s) return i && sx(t, n, !1), _r(e, t, o);
    r = t.stateNode, G2.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = zo(t, e.child, null, o), t.child = zo(t, null, a, o)) : Dt(e, t, a, o), t.memoizedState = r.state, i && sx(t, n, !0), t.child
}

function fS(e) {
    var t = e.stateNode;
    t.pendingContext ? ox(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ox(e, t.context, !1), Ap(e, t.containerInfo)
}

function Sx(e, t, n, r, i) {
    return Do(), _p(i), t.flags |= 256, Dt(e, t, n, r), t.child
}

var np = {dehydrated: null, treeContext: null, retryLane: 0};

function rp(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function dS(e, t, n) {
    var r, i = t.pendingProps, o = je.current, s = !1, a = (128 & t.flags) !== 0;
    if ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0), r ? (s = !0, t.flags &= -129) : e !== null && e.memoizedState === null || (o |= 1), Ie(je, 1 & o), e === null) return Yh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (1 & t.mode ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, a = {
        mode: "hidden",
        children: a
    }, !(1 & i) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Wc(a, i, 0, null), e = Oi(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = rp(n), t.memoizedState = np, e) : Wp(t, a));
    if (o = e.memoizedState, o !== null && (r = o.dehydrated, r !== null)) return q2(e, t, a, i, r, o, n);
    if (s) {
        s = i.fallback, a = t.mode, o = e.child, r = o.sibling;
        var l = {mode: "hidden", children: i.children};
        return !(1 & a) && t.child !== o ? (i = t.child, i.childLanes = 0, i.pendingProps = l, t.deletions = null) : (i = si(o, l), i.subtreeFlags = 14680064 & o.subtreeFlags), r !== null ? s = si(r, s) : (s = Oi(s, a, n, null), s.flags |= 2), s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, a = e.child.memoizedState, a = a === null ? rp(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = np, i
    }
    return s = e.child, e = s.sibling, i = si(s, {
        mode: "visible",
        children: i.children
    }), !(1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
}

function Wp(e, t) {
    return t = Wc({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Ql(e, t, n, r) {
    return r !== null && _p(r), zo(t, e.child, null, n), e = Wp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function q2(e, t, n, r, i, o, s) {
    if (n) return 256 & t.flags ? (t.flags &= -257, r = vh(Error(M(422))), Ql(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Wc({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = Oi(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 1 & t.mode && zo(t, e.child, null, s), t.child.memoizedState = rp(s), t.memoizedState = np, o);
    if (!(1 & t.mode)) return Ql(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(M(419)), r = vh(o, r, void 0), Ql(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, Gt || a) {
        if (r = mt, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Pr(e, i), $n(r, e, i, -1))
        }
        return Kp(), r = vh(Error(M(421))), Ql(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sM.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, rn = ni(i.nextSibling), on = t, $e = !0, zn = null, e !== null && (xn[wn++] = Cr, xn[wn++] = Tr, xn[wn++] = Li, Cr = e.id, Tr = e.overflow, Li = t), t = Wp(t, r.children), t.flags |= 4096, t)
}

function kx(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Kh(e.return, t, n)
}

function yh(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function hS(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Dt(e, t, r.children, n), r = je.current, 2 & r) r = 1 & r | 2, t.flags |= 128; else {
        if (e !== null && 128 & e.flags) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && kx(e, n, t); else if (e.tag === 19) kx(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Ie(je, r), !(1 & t.mode)) t.memoizedState = null; else switch (i) {
        case"forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Rc(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), yh(t, !1, i, n, o);
            break;
        case"backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Rc(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            yh(t, !0, n, null, o);
            break;
        case"together":
            yh(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function sc(e, t) {
    !(1 & t.mode) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function _r(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ai |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = si(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function X2(e, t, n) {
    switch (t.tag) {
        case 3:
            fS(t), Do();
            break;
        case 5:
            $w(t);
            break;
        case 1:
            Xt(t.type) && xc(t);
            break;
        case 4:
            Ap(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, i = t.memoizedProps.value;
            Ie(kc, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ie(je, 1 & je.current), t.flags |= 128, null) : n & t.child.childLanes ? dS(e, t, n) : (Ie(je, 1 & je.current), e = _r(e, t, n), e !== null ? e.sibling : null);
            Ie(je, 1 & je.current);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, 128 & e.flags) {
                if (r) return hS(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ie(je, je.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, cS(e, t, n)
    }
    return _r(e, t, n)
}

var pS, ip, mS, gS;
pS = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
ip = function () {
};
mS = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, _i(or.current);
        var o = null;
        switch (n) {
            case"input":
                i = Rh(e, i), r = Rh(e, r), o = [];
                break;
            case"select":
                i = We({}, i, {value: void 0}), r = We({}, r, {value: void 0}), o = [];
                break;
            case"textarea":
                i = Ph(e, i), r = Ph(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yc)
        }
        Ih(n, r);
        var s;
        n = null;
        for (c in i) if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") {
            var a = i[c];
            for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Qs.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i?.[c], r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
                for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
            } else n || (o || (o = []), o.push(c, n)), n = l; else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Qs.hasOwnProperty(c) ? (l != null && c === "onScroll" && Le("scroll", e), o || a === l || (o = [])) : (o = o || []).push(c, l))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
gS = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Vs(e, t) {
    if (!$e) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling; else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Y2(e, t, n) {
    var r = t.pendingProps;
    switch (Pp(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return _t(t), null;
        case 1:
            return Xt(t.type) && bc(), _t(t), null;
        case 3:
            return r = t.stateNode, Bo(), Ve(qt), Ve(Ot), zp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), e !== null && e.child !== null || (Yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, zn !== null && (fp(zn), zn = null))), ip(e, t), _t(t), null;
        case 5:
            Dp(t);
            var i = _i(ca.current);
            if (n = t.type, e !== null && t.stateNode != null) mS(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return _t(t), null
                }
                if (e = _i(or.current), Yl(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[rr] = t, r[aa] = o, e = (1 & t.mode) !== 0, n) {
                        case"dialog":
                            Le("cancel", r), Le("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            Le("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (i = 0; i < Ns.length; i++) Le(Ns[i], r);
                            break;
                        case"source":
                            Le("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            Le("error", r), Le("load", r);
                            break;
                        case"details":
                            Le("toggle", r);
                            break;
                        case"input":
                            Ib(r, o), Le("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!o.multiple}, Le("invalid", r);
                            break;
                        case"textarea":
                            Mb(r, o), Le("invalid", r)
                    }
                    Ih(n, o), i = null;
                    for (var s in o) if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Xl(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Xl(r.textContent, a, e), i = ["children", "" + a]) : Qs.hasOwnProperty(s) && a != null && s === "onScroll" && Le("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            Al(r), Ob(r, o, !0);
                            break;
                        case"textarea":
                            Al(r), Lb(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = yc)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[rr] = t, e[aa] = r, pS(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (s = Oh(n, r), n) {
                            case"dialog":
                                Le("cancel", e), Le("close", e), i = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                Le("load", e), i = r;
                                break;
                            case"video":
                            case"audio":
                                for (i = 0; i < Ns.length; i++) Le(Ns[i], e);
                                i = r;
                                break;
                            case"source":
                                Le("error", e), i = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Le("error", e), Le("load", e), i = r;
                                break;
                            case"details":
                                Le("toggle", e), i = r;
                                break;
                            case"input":
                                Ib(e, r), i = Rh(e, r), Le("invalid", e);
                                break;
                            case"option":
                                i = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, i = We({}, r, {value: void 0}), Le("invalid", e);
                                break;
                            case"textarea":
                                Mb(e, r), i = Ph(e, r), Le("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Ih(n, i), a = i;
                        for (o in a) if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Gx(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Wx(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Zs(e, l) : typeof l == "number" && Zs(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qs.hasOwnProperty(o) ? l != null && o === "onScroll" && Le("scroll", e) : l != null && pp(e, o, l, s))
                        }
                        switch (n) {
                            case"input":
                                Al(e), Ob(e, r, !1);
                                break;
                            case"textarea":
                                Al(e), Lb(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + ai(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Po(e, !!r.multiple, o, !1) : r.defaultValue != null && Po(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = yc)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return _t(t), null;
        case 6:
            if (e && t.stateNode != null) gS(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (n = _i(ca.current), _i(or.current), Yl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[rr] = t, (o = r.nodeValue !== n) && (e = on, e !== null)) switch (e.tag) {
                        case 3:
                            Xl(r.nodeValue, n, (1 & e.mode) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Xl(r.nodeValue, n, (1 & e.mode) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rr] = t, t.stateNode = r
            }
            return _t(t), null;
        case 13:
            if (Ve(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if ($e && rn !== null && 1 & t.mode && !(128 & t.flags)) Mw(), Do(), t.flags |= 98560, o = !1; else if (o = Yl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(M(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(M(317));
                        o[rr] = t
                    } else Do(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    _t(t), o = !1
                } else zn !== null && (fp(zn), zn = null), o = !0;
                if (!o) return 65536 & t.flags ? t : null
            }
            return 128 & t.flags ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, 1 & t.mode && (e === null || 1 & je.current ? ct === 0 && (ct = 3) : Kp())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
        case 4:
            return Bo(), ip(e, t), e === null && oa(t.stateNode.containerInfo), _t(t), null;
        case 10:
            return Mp(t.type._context), _t(t), null;
        case 17:
            return Xt(t.type) && bc(), _t(t), null;
        case 19:
            if (Ve(je), o = t.memoizedState, o === null) return _t(t), null;
            if (r = (128 & t.flags) !== 0, s = o.rendering, s === null) if (r) Vs(o, !1); else {
                if (ct !== 0 || e !== null && 128 & e.flags) for (e = t.child; e !== null;) {
                    if (s = Rc(e), s !== null) {
                        for (t.flags |= 128, Vs(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Ie(je, 1 & je.current | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && tt() > No && (t.flags |= 128, r = !0, Vs(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = Rc(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vs(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !$e) return _t(t), null
                } else 2 * tt() - o.renderingStartTime > No && n !== 1073741824 && (t.flags |= 128, r = !0, Vs(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = tt(), t.sibling = null, n = je.current, Ie(je, r ? 1 & n | 2 : 1 & n), t) : (_t(t), null);
        case 22:
        case 23:
            return Yp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && 1 & t.mode ? 1073741824 & nn && (_t(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : _t(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(M(156, t.tag))
}

function K2(e, t) {
    switch (Pp(t), t.tag) {
        case 1:
            return Xt(t.type) && bc(), e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return Bo(), Ve(qt), Ve(Ot), zp(), e = t.flags, 65536 & e && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return Dp(t), null;
        case 13:
            if (Ve(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(M(340));
                Do()
            }
            return e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return Ve(je), null;
        case 4:
            return Bo(), null;
        case 10:
            return Mp(t.type._context), null;
        case 22:
        case 23:
            return Yp(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var Zl = !1, It = !1, Q2 = typeof WeakSet == "function" ? WeakSet : Set, N = null;

function Eo(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        Ke(e, t, r)
    } else n.current = null
}

function vS(e, t, n) {
    try {
        n()
    } catch (r) {
        Ke(e, t, r)
    }
}

var Cx = !1;

function Z2(e, t) {
    if (jh = mc, e = xw(), Ep(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || F;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0, a = -1, l = -1, c = 0, u = 0, f = e, d = null;
                t:for (; ;) {
                    for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (h = f.firstChild) !== null;) d = f, f = h;
                    for (; ;) {
                        if (f === e) break t;
                        if (d === n && ++c === i && (a = s), d === o && ++u === r && (l = s), (h = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = h
                }
                n = a === -1 || l === -1 ? null : {start: a, end: l}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (Hh = {
        focusedElem: e,
        selectionRange: n
    }, mc = !1, N = t; N !== null;) if (t = N, e = t.child, (1028 & t.subtreeFlags) !== 0 && e !== null) e.return = t, N = e; else for (; N !== null;) {
        t = N;
        try {
            var v = t.alternate;
            if (1024 & t.flags) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (v !== null) {
                        var g = v.memoizedProps, b = v.memoizedState, p = t.stateNode,
                            m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : An(t.type, g), b);
                        p.__reactInternalSnapshotBeforeUpdate = m
                    }
                    break;
                case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(M(163))
            }
        } catch (w) {
            Ke(t, t.return, w)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, N = e;
            break
        }
        N = t.return
    }
    return v = Cx, Cx = !1, v
}

function Xs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && vS(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function jc(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function op(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function yS(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yS(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rr], delete t[aa], delete t[Gh], delete t[L2], delete t[V2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function bS(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Tx(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || bS(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (2 & e.flags || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function sp(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yc)); else if (r !== 4 && (e = e.child, e !== null)) for (sp(e, t, n), e = e.sibling; e !== null;) sp(e, t, n), e = e.sibling
}

function ap(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (ap(e, t, n), e = e.sibling; e !== null;) ap(e, t, n), e = e.sibling
}

var St = null, Dn = !1;

function Gr(e, t, n) {
    for (n = n.child; n !== null;) xS(e, t, n), n = n.sibling
}

function xS(e, t, n) {
    if (ir && typeof ir.onCommitFiberUnmount == "function") try {
        ir.onCommitFiberUnmount(Lc, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            It || Eo(n, t);
        case 6:
            var r = St, i = Dn;
            St = null, Gr(e, t, n), St = r, Dn = i, St !== null && (Dn ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
            break;
        case 18:
            St !== null && (Dn ? (e = St, n = n.stateNode, e.nodeType === 8 ? fh(e.parentNode, n) : e.nodeType === 1 && fh(e, n), na(e)) : fh(St, n.stateNode));
            break;
        case 4:
            r = St, i = Dn, St = n.stateNode.containerInfo, Dn = !0, Gr(e, t, n), St = r, Dn = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!It && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i, s = o.destroy;
                    o = o.tag, s !== void 0 && (2 & o || 4 & o) && vS(n, t, s), i = i.next
                } while (i !== r)
            }
            Gr(e, t, n);
            break;
        case 1:
            if (!It && (Eo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Ke(n, t, a)
            }
            Gr(e, t, n);
            break;
        case 21:
            Gr(e, t, n);
            break;
        case 22:
            1 & n.mode ? (It = (r = It) || n.memoizedState !== null, Gr(e, t, n), It = r) : Gr(e, t, n);
            break;
        default:
            Gr(e, t, n)
    }
}

function Rx(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Q2), t.forEach(function (r) {
            var i = aM.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Vn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var o = e, s = t, a = s;
            e:for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        St = a.stateNode, Dn = !1;
                        break e;
                    case 3:
                        St = a.stateNode.containerInfo, Dn = !0;
                        break e;
                    case 4:
                        St = a.stateNode.containerInfo, Dn = !0;
                        break e
                }
                a = a.return
            }
            if (St === null) throw Error(M(160));
            xS(o, s, i), St = null, Dn = !1;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null
        } catch (c) {
            Ke(i, t, c)
        }
    }
    if (12854 & t.subtreeFlags) for (t = t.child; t !== null;) wS(t, e), t = t.sibling
}

function wS(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Vn(t, e), tr(e), 4 & r) {
                try {
                    Xs(3, e, e.return), jc(3, e)
                } catch (g) {
                    Ke(e, e.return, g)
                }
                try {
                    Xs(5, e, e.return)
                } catch (g) {
                    Ke(e, e.return, g)
                }
            }
            break;
        case 1:
            Vn(t, e), tr(e), 512 & r && n !== null && Eo(n, n.return);
            break;
        case 5:
            if (Vn(t, e), tr(e), 512 & r && n !== null && Eo(n, n.return), 32 & e.flags) {
                var i = e.stateNode;
                try {
                    Zs(i, "")
                } catch (g) {
                    Ke(e, e.return, g)
                }
            }
            if (4 & r && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && Nx(i, o), Oh(a, s);
                    var c = Oh(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var u = l[s], f = l[s + 1];
                        u === "style" ? Gx(i, f) : u === "dangerouslySetInnerHTML" ? Wx(i, f) : u === "children" ? Zs(i, f) : pp(i, u, f, c)
                    }
                    switch (a) {
                        case"input":
                            Eh(i, o);
                            break;
                        case"textarea":
                            jx(i, o);
                            break;
                        case"select":
                            var d = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var h = o.value;
                            h != null ? Po(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? Po(i, !!o.multiple, o.defaultValue, !0) : Po(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[aa] = o
                } catch (g) {
                    Ke(e, e.return, g)
                }
            }
            break;
        case 6:
            if (Vn(t, e), tr(e), 4 & r) {
                if (e.stateNode === null) throw Error(M(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (g) {
                    Ke(e, e.return, g)
                }
            }
            break;
        case 3:
            if (Vn(t, e), tr(e), 4 & r && n !== null && n.memoizedState.isDehydrated) try {
                na(t.containerInfo)
            } catch (g) {
                Ke(e, e.return, g)
            }
            break;
        case 4:
            Vn(t, e), tr(e);
            break;
        case 13:
            Vn(t, e), tr(e), i = e.child, 8192 & i.flags && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (qp = tt())), 4 & r && Rx(e);
            break;
        case 22:
            if (u = n !== null && n.memoizedState !== null, 1 & e.mode ? (It = (c = It) || u, Vn(t, e), It = c) : Vn(t, e), tr(e), 8192 & r) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && 1 & e.mode) for (N = e, u = e.child; u !== null;) {
                    for (f = N = u; N !== null;) {
                        switch (d = N, h = d.child, d.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Xs(4, d, d.return);
                                break;
                            case 1:
                                Eo(d, d.return);
                                var v = d.stateNode;
                                if (typeof v.componentWillUnmount == "function") {
                                    r = d, n = d.return;
                                    try {
                                        t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                    } catch (g) {
                                        Ke(r, n, g)
                                    }
                                }
                                break;
                            case 5:
                                Eo(d, d.return);
                                break;
                            case 22:
                                if (d.memoizedState !== null) {
                                    Fx(f);
                                    continue
                                }
                        }
                        h !== null ? (h.return = d, N = h) : Fx(f)
                    }
                    u = u.sibling
                }
                e:for (u = null, f = e; ;) {
                    if (f.tag === 5) {
                        if (u === null) {
                            u = f;
                            try {
                                i = f.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Ux("display", s))
                            } catch (g) {
                                Ke(e, e.return, g)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (u === null) try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (g) {
                            Ke(e, e.return, g)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        u === f && (u = null), f = f.return
                    }
                    u === f && (u = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            Vn(t, e), tr(e), 4 & r && Rx(e);
            break;
        case 21:
            break;
        default:
            Vn(t, e), tr(e)
    }
}

function tr(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (bS(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    32 & r.flags && (Zs(i, ""), r.flags &= -33);
                    var o = Tx(e);
                    ap(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo, a = Tx(e);
                    sp(e, a, s);
                    break;
                default:
                    throw Error(M(161))
            }
        } catch (l) {
            Ke(e, e.return, l)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function J2(e, t, n) {
    N = e, SS(e, t, n)
}

function SS(e, t, n) {
    for (var r = (1 & e.mode) !== 0; N !== null;) {
        var i = N, o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Zl;
            if (!s) {
                var a = i.alternate, l = a !== null && a.memoizedState !== null || It;
                a = Zl;
                var c = It;
                if (Zl = s, (It = l) && !c) for (N = i; N !== null;) s = N, l = s.child, s.tag === 22 && s.memoizedState !== null ? Px(i) : l !== null ? (l.return = s, N = l) : Px(i);
                for (; o !== null;) N = o, SS(o, t, n), o = o.sibling;
                N = i, Zl = a, It = c
            }
            Ex(e, t, n)
        } else 8772 & i.subtreeFlags && o !== null ? (o.return = i, N = o) : Ex(e, t, n)
    }
}

function Ex(e) {
    for (; N !== null;) {
        var t = N;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        It || jc(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !It) if (n === null) r.componentDidMount(); else {
                            var i = t.elementType === t.type ? n.memoizedProps : An(t.type, n.memoizedProps);
                            r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && ux(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ux(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && 4 & t.flags) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case"img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var f = u.dehydrated;
                                    f !== null && na(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                }
                It || 512 & t.flags && op(t)
            } catch (d) {
                Ke(t, t.return, d)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Fx(e) {
    for (; N !== null;) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Px(e) {
    for (; N !== null;) {
        var t = N;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        jc(4, t)
                    } catch (l) {
                        Ke(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Ke(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        op(t)
                    } catch (l) {
                        Ke(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        op(t)
                    } catch (l) {
                        Ke(t, s, l)
                    }
            }
        } catch (l) {
            Ke(t, t.return, l)
        }
        if (t === e) {
            N = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, N = a;
            break
        }
        N = t.return
    }
}

var eM = Math.ceil, Pc = Ir.ReactCurrentDispatcher, Up = Ir.ReactCurrentOwner, kn = Ir.ReactCurrentBatchConfig, xe = 0,
    mt = null, it = null, kt = 0, nn = 0, Fo = ui(0), ct = 0, ha = null, Ai = 0, Hc = 0, Gp = 0, Ys = null, Ut = null,
    qp = 0, No = 1 / 0, Sr = null, _c = !1, lp = null, ii = null, Jl = !1, Zr = null, Ic = 0, Ks = 0, cp = null,
    ac = -1, lc = 0;

function zt() {
    return 6 & xe ? tt() : ac !== -1 ? ac : ac = tt()
}

function oi(e) {
    return 1 & e.mode ? 2 & xe && kt !== 0 ? kt & -kt : D2.transition !== null ? (lc === 0 && (lc = iw()), lc) : (e = ke, e !== 0 || (e = F.event, e = e === void 0 ? 16 : fw(e.type)), e) : 1
}

function $n(e, t, n, r) {
    if (50 < Ks) throw Ks = 0, cp = null, Error(M(185));
    pa(e, n, r), 2 & xe && e === mt || (e === mt && (!(2 & xe) && (Hc |= n), ct === 4 && Kr(e, kt)), Yt(e, r), n === 1 && xe === 0 && !(1 & t.mode) && (No = tt() + 500, Bc && fi()))
}

function Yt(e, t) {
    var n = e.callbackNode;
    BO(e, t);
    var r = pc(e, e === mt ? kt : 0);
    if (r === 0) n !== null && Db(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Db(n), t === 1) e.tag === 0 ? A2(_x.bind(null, e)) : _w(_x.bind(null, e)), O2(function () {
            !(6 & xe) && fi()
        }), n = null; else {
            switch (ow(r)) {
                case 1:
                    n = bp;
                    break;
                case 4:
                    n = nw;
                    break;
                case 16:
                    n = hc;
                    break;
                case 536870912:
                    n = rw;
                    break;
                default:
                    n = hc
            }
            n = _S(n, kS.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function kS(e, t) {
    if (ac = -1, lc = 0, 6 & xe) throw Error(M(327));
    var n = e.callbackNode;
    if (Lo() && e.callbackNode !== n) return null;
    var r = pc(e, e === mt ? kt : 0);
    if (r === 0) return null;
    if (30 & r || r & e.expiredLanes || t) t = Oc(e, r); else {
        t = r;
        var i = xe;
        xe |= 2;
        var o = TS();
        mt === e && kt === t || (Sr = null, No = tt() + 500, Ii(e, t));
        do try {
            rM();
            break
        } catch (a) {
            CS(e, a)
        } while (1);
        Op(), Pc.current = o, xe = i, it !== null ? t = 0 : (mt = null, kt = 0, t = ct)
    }
    if (t !== 0) {
        if (t === 2 && (i = Dh(e), i !== 0 && (r = i, t = up(e, i))), t === 1) throw n = ha, Ii(e, 0), Kr(e, r), Yt(e, tt()), n;
        if (t === 6) Kr(e, r); else {
            if (i = e.current.alternate, !(30 & r) && !tM(i) && (t = Oc(e, r), t === 2 && (o = Dh(e), o !== 0 && (r = o, t = up(e, o))), t === 1)) throw n = ha, Ii(e, 0), Kr(e, r), Yt(e, tt()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    Ei(e, Ut, Sr);
                    break;
                case 3:
                    if (Kr(e, r), (130023424 & r) === r && (t = qp + 500 - tt(), 10 < t)) {
                        if (pc(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            zt(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Uh(Ei.bind(null, e, Ut, Sr), t);
                        break
                    }
                    Ei(e, Ut, Sr);
                    break;
                case 4:
                    if (Kr(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - Bn(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = tt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * eM(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Uh(Ei.bind(null, e, Ut, Sr), r);
                        break
                    }
                    Ei(e, Ut, Sr);
                    break;
                case 5:
                    Ei(e, Ut, Sr);
                    break;
                default:
                    throw Error(M(329))
            }
        }
    }
    return Yt(e, tt()), e.callbackNode === n ? kS.bind(null, e) : null
}

function up(e, t) {
    var n = Ys;
    return e.current.memoizedState.isDehydrated && (Ii(e, t).flags |= 256), e = Oc(e, t), e !== 2 && (t = Ut, Ut = n, t !== null && fp(t)), e
}

function fp(e) {
    Ut === null ? Ut = e : Ut.push.apply(Ut, e)
}

function tM(e) {
    for (var t = e; ;) {
        if (16384 & t.flags) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var i = n[r], o = i.getSnapshot;
                i = i.value;
                try {
                    if (!Nn(o(), i)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, 16384 & t.subtreeFlags && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Kr(e, t) {
    for (t &= ~Gp, t &= ~Hc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Bn(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function _x(e) {
    if (6 & xe) throw Error(M(327));
    Lo();
    var t = pc(e, 0);
    if (!(1 & t)) return Yt(e, tt()), null;
    var n = Oc(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Dh(e);
        r !== 0 && (t = r, n = up(e, r))
    }
    if (n === 1) throw n = ha, Ii(e, 0), Kr(e, t), Yt(e, tt()), n;
    if (n === 6) throw Error(M(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ei(e, Ut, Sr), Yt(e, tt()), null
}

function Xp(e, t) {
    var n = xe;
    xe |= 1;
    try {
        return e(t)
    } finally {
        xe = n, xe === 0 && (No = tt() + 500, Bc && fi())
    }
}

function Di(e) {
    Zr !== null && Zr.tag === 0 && !(6 & xe) && Lo();
    var t = xe;
    xe |= 1;
    var n = kn.transition, r = ke;
    try {
        if (kn.transition = null, ke = 1, e) return e()
    } finally {
        ke = r, kn.transition = n, xe = t, !(6 & xe) && fi()
    }
}

function Yp() {
    nn = Fo.current, Ve(Fo)
}

function Ii(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, I2(n)), it !== null) for (n = it.return; n !== null;) {
        var r = n;
        switch (Pp(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && bc();
                break;
            case 3:
                Bo(), Ve(qt), Ve(Ot), zp();
                break;
            case 5:
                Dp(r);
                break;
            case 4:
                Bo();
                break;
            case 13:
                Ve(je);
                break;
            case 19:
                Ve(je);
                break;
            case 10:
                Mp(r.type._context);
                break;
            case 22:
            case 23:
                Yp()
        }
        n = n.return
    }
    if (mt = e, it = e = si(e.current, null), kt = nn = t, ct = 0, ha = null, Gp = Hc = Ai = 0, Ut = Ys = null, Pi !== null) {
        for (t = 0; t < Pi.length; t++) if (n = Pi[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, o = n.pending;
            if (o !== null) {
                var s = o.next;
                o.next = i, r.next = s
            }
            n.pending = r
        }
        Pi = null
    }
    return e
}

function CS(e, t) {
    do {
        var n = it;
        try {
            if (Op(), ic.current = Fc, Ec) {
                for (var r = He.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Ec = !1
            }
            if (Vi = 0, pt = lt = He = null, qs = !1, ua = 0, Up.current = null, n === null || n.return === null) {
                ct = 1, ha = t, it = null;
                break
            }
            e:{
                var o = e, s = n.return, a = n, l = t;
                if (t = kt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l, u = a, f = u.tag;
                    if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
                        var d = u.alternate;
                        d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null)
                    }
                    var h = vx(s);
                    if (h !== null) {
                        h.flags &= -257, yx(h, s, a, o, t), 1 & h.mode && gx(o, c, t), t = h, l = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l), t.updateQueue = g
                        } else v.add(l);
                        break e
                    }
                    if (!(1 & t)) {
                        gx(o, c, t), Kp();
                        break e
                    }
                    l = Error(M(426))
                } else if ($e && 1 & a.mode) {
                    var b = vx(s);
                    if (b !== null) {
                        !(65536 & b.flags) && (b.flags |= 256), yx(b, s, a, o, t), _p($o(l, a));
                        break e
                    }
                }
                o = l = $o(l, a), ct !== 4 && (ct = 2), Ys === null ? Ys = [o] : Ys.push(o), o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = sS(o, l, t);
                            cx(o, p);
                            break e;
                        case 1:
                            a = l;
                            var m = o.type, y = o.stateNode;
                            if (!(128 & o.flags) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (ii === null || !ii.has(y)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = aS(o, a, t);
                                cx(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            ES(n)
        } catch (C) {
            t = C, it === n && n !== null && (it = n = n.return);
            continue
        }
        break
    } while (1)
}

function TS() {
    var e = Pc.current;
    return Pc.current = Fc, e === null ? Fc : e
}

function Kp() {
    ct !== 0 && ct !== 3 && ct !== 2 || (ct = 4), mt === null || !(268435455 & Ai) && !(268435455 & Hc) || Kr(mt, kt)
}

function Oc(e, t) {
    var n = xe;
    xe |= 2;
    var r = TS();
    mt === e && kt === t || (Sr = null, Ii(e, t));
    do try {
        nM();
        break
    } catch (i) {
        CS(e, i)
    } while (1);
    if (Op(), xe = n, Pc.current = r, it !== null) throw Error(M(261));
    return mt = null, kt = 0, ct
}

function nM() {
    for (; it !== null;) RS(it)
}

function rM() {
    for (; it !== null && !_O();) RS(it)
}

function RS(e) {
    var t = PS(e.alternate, e, nn);
    e.memoizedProps = e.pendingProps, t === null ? ES(e) : it = t, Up.current = null
}

function ES(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, 32768 & t.flags) {
            if (n = K2(n, t), n !== null) {
                n.flags &= 32767, it = n;
                return
            }
            if (e === null) {
                ct = 6, it = null;
                return
            }
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
        } else if (n = Y2(n, t, nn), n !== null) {
            it = n;
            return
        }
        if (t = t.sibling, t !== null) {
            it = t;
            return
        }
        it = t = e
    } while (t !== null);
    ct === 0 && (ct = 5)
}

function Ei(e, t, n) {
    var r = ke, i = kn.transition;
    try {
        kn.transition = null, ke = 1, iM(e, t, n, r)
    } finally {
        kn.transition = i, ke = r
    }
    return null
}

function iM(e, t, n, r) {
    do Lo(); while (Zr !== null);
    if (6 & xe) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if ($O(e, o), e === mt && (it = mt = null, kt = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Jl || (Jl = !0, _S(hc, function () {
        return Lo(), null
    })), o = (15990 & n.flags) !== 0, 15990 & n.subtreeFlags || o) {
        o = kn.transition, kn.transition = null;
        var s = ke;
        ke = 1;
        var a = xe;
        xe |= 4, Up.current = null, Z2(e, n), wS(n, e), R2(Hh), mc = !!jh, Hh = jh = null, e.current = n, J2(n, e, i), IO(), xe = a, ke = s, kn.transition = o
    } else e.current = n;
    if (Jl && (Jl = !1, Zr = e, Ic = i), o = e.pendingLanes, o === 0 && (ii = null), LO(n.stateNode, r), Yt(e, tt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
        componentStack: i.stack,
        digest: i.digest
    });
    if (_c) throw _c = !1, e = lp, lp = null, e;
    return 1 & Ic && e.tag !== 0 && Lo(), o = e.pendingLanes, 1 & o ? e === cp ? Ks++ : (Ks = 0, cp = e) : Ks = 0, fi(), null
}

function Lo() {
    if (Zr !== null) {
        var e = ow(Ic), t = kn.transition, n = ke;
        try {
            if (kn.transition = null, ke = 16 > e ? 16 : e, Zr === null) var r = !1; else {
                if (e = Zr, Zr = null, Ic = 0, 6 & xe) throw Error(M(331));
                var i = xe;
                for (xe |= 4, N = e.current; N !== null;) {
                    var o = N, s = o.child;
                    if (16 & N.flags) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (N = c; N !== null;) {
                                    var u = N;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xs(8, u, o)
                                    }
                                    var f = u.child;
                                    if (f !== null) f.return = u, N = f; else for (; N !== null;) {
                                        u = N;
                                        var d = u.sibling, h = u.return;
                                        if (yS(u), u === c) {
                                            N = null;
                                            break
                                        }
                                        if (d !== null) {
                                            d.return = h, N = d;
                                            break
                                        }
                                        N = h
                                    }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var b = g.sibling;
                                        g.sibling = null, g = b
                                    } while (g !== null)
                                }
                            }
                            N = o
                        }
                    }
                    if (2064 & o.subtreeFlags && s !== null) s.return = o, N = s; else e:for (; N !== null;) {
                        if (o = N, 2048 & o.flags) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Xs(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, N = p;
                            break e
                        }
                        N = o.return
                    }
                }
                var m = e.current;
                for (N = m; N !== null;) {
                    s = N;
                    var y = s.child;
                    if (2064 & s.subtreeFlags && y !== null) y.return = s, N = y; else e:for (s = m; N !== null;) {
                        if (a = N, 2048 & a.flags) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    jc(9, a)
                            }
                        } catch (C) {
                            Ke(a, a.return, C)
                        }
                        if (a === s) {
                            N = null;
                            break e
                        }
                        var w = a.sibling;
                        if (w !== null) {
                            w.return = a.return, N = w;
                            break e
                        }
                        N = a.return
                    }
                }
                if (xe = i, fi(), ir && typeof ir.onPostCommitFiberRoot == "function") try {
                    ir.onPostCommitFiberRoot(Lc, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            ke = n, kn.transition = t
        }
    }
    return !1
}

function Ix(e, t, n) {
    t = $o(n, t), t = sS(e, t, 1), e = ri(e, t, 1), t = zt(), e !== null && (pa(e, 1, t), Yt(e, t))
}

function Ke(e, t, n) {
    if (e.tag === 3) Ix(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            Ix(t, e, n);
            break
        }
        if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ii === null || !ii.has(r))) {
                e = $o(n, e), e = aS(t, e, 1), t = ri(t, e, 1), e = zt(), t !== null && (pa(t, 1, e), Yt(t, e));
                break
            }
        }
        t = t.return
    }
}

function oM(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = zt(), e.pingedLanes |= e.suspendedLanes & n, mt === e && (kt & n) === n && (ct === 4 || ct === 3 && (130023424 & kt) === kt && 500 > tt() - qp ? Ii(e, 0) : Gp |= n), Yt(e, t)
}

function FS(e, t) {
    t === 0 && (1 & e.mode ? (t = Bl, Bl <<= 1, !(130023424 & Bl) && (Bl = 4194304)) : t = 1);
    var n = zt();
    e = Pr(e, t), e !== null && (pa(e, t, n), Yt(e, n))
}

function sM(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), FS(e, n)
}

function aM(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(t), FS(e, n)
}

var PS;
PS = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || qt.current) Gt = !0; else {
        if (!(e.lanes & n) && !(128 & t.flags)) return Gt = !1, X2(e, t, n);
        Gt = (131072 & e.flags) !== 0
    } else Gt = !1, $e && 1048576 & t.flags && Iw(t, Sc, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            sc(e, t), e = t.pendingProps;
            var i = Ao(t, Ot.current);
            Mo(t, n), i = $p(null, t, r, e, i, n);
            var o = Np();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xt(r) ? (o = !0, xc(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Vp(t), i.updater = $c, t.stateNode = i, i._reactInternals = t, Zh(t, r, e, n), t = tp(null, t, r, !0, o, n)) : (t.tag = 0, $e && o && Fp(t), Dt(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (sc(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = cM(r), e = An(r, e), i) {
                    case 0:
                        t = ep(null, t, r, e, n);
                        break e;
                    case 1:
                        t = wx(null, t, r, e, n);
                        break e;
                    case 11:
                        t = bx(null, t, r, e, n);
                        break e;
                    case 14:
                        t = xx(null, t, r, An(r.type, e), n);
                        break e
                }
                throw Error(M(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : An(r, i), ep(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : An(r, i), wx(e, t, r, i, n);
        case 3:
            e:{
                if (fS(t), e === null) throw Error(M(387));
                r = t.pendingProps, o = t.memoizedState, i = o.element, Vw(e, t), Tc(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated) {
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                        i = $o(Error(M(423)), t), t = Sx(e, t, r, n, i);
                        break e
                    }
                    if (r !== i) {
                        i = $o(Error(M(424)), t), t = Sx(e, t, r, n, i);
                        break e
                    }
                    for (rn = ni(t.stateNode.containerInfo.firstChild), on = t, $e = !0, zn = null, n = Bw(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                } else {
                    if (Do(), r === i) {
                        t = _r(e, t, n);
                        break e
                    }
                    Dt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return $w(t), e === null && Yh(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Wh(r, i) ? s = null : o !== null && Wh(r, o) && (t.flags |= 32), uS(e, t), Dt(e, t, s, n), t.child;
        case 6:
            return e === null && Yh(t), null;
        case 13:
            return dS(e, t, n);
        case 4:
            return Ap(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zo(t, null, r, n) : Dt(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : An(r, i), bx(e, t, r, i, n);
        case 7:
            return Dt(e, t, t.pendingProps, n), t.child;
        case 8:
            return Dt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Dt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Ie(kc, r._currentValue), r._currentValue = s, o !== null) if (Nn(o.value, s)) {
                    if (o.children === i.children && !qt.current) {
                        t = _r(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var a = o.dependencies;
                    if (a !== null) {
                        s = o.child;
                        for (var l = a.firstContext; l !== null;) {
                            if (l.context === r) {
                                if (o.tag === 1) {
                                    l = Rr(-1, n & -n), l.tag = 2;
                                    var c = o.updateQueue;
                                    if (c !== null) {
                                        c = c.shared;
                                        var u = c.pending;
                                        u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l
                                    }
                                }
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Kh(o.return, n, t), a.lanes |= n;
                                break
                            }
                            l = l.next
                        }
                    } else if (o.tag === 10) s = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (s = o.return, s === null) throw Error(M(341));
                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Kh(s, n, t), s = o.sibling
                    } else s = o.child;
                    if (s !== null) s.return = o; else for (s = o; s !== null;) {
                        if (s === t) {
                            s = null;
                            break
                        }
                        if (o = s.sibling, o !== null) {
                            o.return = s.return, s = o;
                            break
                        }
                        s = s.return
                    }
                    o = s
                }
                Dt(e, t, i.children, n), t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Mo(t, n), i = Cn(i), r = r(i), t.flags |= 1, Dt(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = An(r, t.pendingProps), i = An(r.type, i), xx(e, t, r, i, n);
        case 15:
            return lS(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : An(r, i), sc(e, t), t.tag = 1, Xt(r) ? (e = !0, xc(t)) : e = !1, Mo(t, n), Dw(t, r, i), Zh(t, r, i, n), tp(null, t, r, !0, e, n);
        case 19:
            return hS(e, t, n);
        case 22:
            return cS(e, t, n)
    }
    throw Error(M(156, t.tag))
};

function _S(e, t) {
    return tw(e, t)
}

function lM(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Sn(e, t, n, r) {
    return new lM(e, t, n, r)
}

function Qp(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function cM(e) {
    if (typeof e == "function") return Qp(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === gp) return 11;
        if (e === vp) return 14
    }
    return 2
}

function si(e, t) {
    var n = e.alternate;
    return n === null ? (n = Sn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function cc(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") Qp(e) && (s = 1); else if (typeof e == "string") s = 5; else e:switch (e) {
        case yo:
            return Oi(n.children, i, o, t);
        case mp:
            s = 8, i |= 8;
            break;
        case Sh:
            return e = Sn(12, n, t, 2 | i), e.elementType = Sh, e.lanes = o, e;
        case kh:
            return e = Sn(13, n, t, i), e.elementType = kh, e.lanes = o, e;
        case Ch:
            return e = Sn(19, n, t, i), e.elementType = Ch, e.lanes = o, e;
        case zx:
            return Wc(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ax:
                    s = 10;
                    break e;
                case Dx:
                    s = 9;
                    break e;
                case gp:
                    s = 11;
                    break e;
                case vp:
                    s = 14;
                    break e;
                case qr:
                    s = 16, r = null;
                    break e
            }
            throw Error(M(130, e == null ? e : typeof e, ""))
    }
    return t = Sn(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function Oi(e, t, n, r) {
    return e = Sn(7, e, r, t), e.lanes = n, e
}

function Wc(e, t, n, r) {
    return e = Sn(22, e, r, t), e.elementType = zx, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function bh(e, t, n) {
    return e = Sn(6, e, null, t), e.lanes = n, e
}

function xh(e, t, n) {
    return t = Sn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function uM(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rh(0), this.expirationTimes = rh(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rh(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Zp(e, t, n, r, i, o, s, a, l) {
    return e = new uM(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Sn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Vp(o), e
}

function fM(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: vo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function IS(e) {
    if (!e) return li;
    e = e._reactInternals;
    e:{
        if (Bi(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Xt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Xt(n)) return Pw(e, n, t)
    }
    return t
}

function OS(e, t, n, r, i, o, s, a, l) {
    return e = Zp(n, r, !0, e, i, o, s, a, l), e.context = IS(null), n = e.current, r = zt(), i = oi(n), o = Rr(r, i), o.callback = t ?? null, ri(n, o, i), e.current.lanes = i, pa(e, i, r), Yt(e, r), e
}

function Uc(e, t, n, r) {
    var i = t.current, o = zt(), s = oi(i);
    return n = IS(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rr(o, s), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ri(i, t, s), e !== null && ($n(e, i, s, o), rc(e, i, s)), s
}

function Mc(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ox(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Jp(e, t) {
    Ox(e, t), (e = e.alternate) && Ox(e, t)
}

function dM() {
    return null
}

var MS = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function em(e) {
    this._internalRoot = e
}

Gc.prototype.render = em.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    Uc(e, t, null, null)
};
Gc.prototype.unmount = em.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Di(function () {
            Uc(null, e, null, null)
        }), t[Fr] = null
    }
};

function Gc(e) {
    this._internalRoot = e
}

Gc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = lw();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Yr.length && t !== 0 && t < Yr[n].priority; n++) ;
        Yr.splice(n, 0, e), n === 0 && uw(e)
    }
};

function tm(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function qc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Mx() {
}

function hM(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = Mc(s);
                o.call(c)
            }
        }
        var s = OS(t, r, e, 0, null, !1, !1, "", Mx);
        return e._reactRootContainer = s, e[Fr] = s.current, oa(e.nodeType === 8 ? e.parentNode : e), Di(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Mc(l);
            a.call(c)
        }
    }
    var l = Zp(e, 0, !1, null, null, !1, !1, "", Mx);
    return e._reactRootContainer = l, e[Fr] = l.current, oa(e.nodeType === 8 ? e.parentNode : e), Di(function () {
        Uc(t, l, n, r)
    }), l
}

function Xc(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = Mc(s);
                a.call(l)
            }
        }
        Uc(t, s, e, i)
    } else s = hM(n, t, e, i, r);
    return Mc(s)
}

sw = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = $s(t.pendingLanes);
                n !== 0 && (xp(t, 1 | n), Yt(t, tt()), !(6 & xe) && (No = tt() + 500, fi()))
            }
            break;
        case 13:
            Di(function () {
                var r = Pr(e, 1);
                if (r !== null) {
                    var i = zt();
                    $n(r, e, 1, i)
                }
            }), Jp(e, 1)
    }
};
wp = function (e) {
    if (e.tag === 13) {
        var t = Pr(e, 134217728);
        if (t !== null) {
            var n = zt();
            $n(t, e, 134217728, n)
        }
        Jp(e, 134217728)
    }
};
aw = function (e) {
    if (e.tag === 13) {
        var t = oi(e), n = Pr(e, t);
        if (n !== null) {
            var r = zt();
            $n(n, e, t, r)
        }
        Jp(e, t)
    }
};
lw = function () {
    return ke
};
cw = function (e, t) {
    var n = ke;
    try {
        return ke = e, t()
    } finally {
        ke = n
    }
};
Lh = function (e, t, n) {
    switch (t) {
        case"input":
            if (Eh(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = zc(r);
                        if (!i) throw Error(M(90));
                        $x(r), Eh(r, i)
                    }
                }
            }
            break;
        case"textarea":
            jx(e, n);
            break;
        case"select":
            t = n.value, t != null && Po(e, !!n.multiple, t, !1)
    }
};
Yx = Xp;
Kx = Di;
var pM = {usingClientEntryPoint: !1, Events: [ga, So, zc, qx, Xx, Xp]},
    As = {findFiberByHostInstance: Fi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, mM = {
        bundleType: As.bundleType,
        version: As.version,
        rendererPackageName: As.rendererPackageName,
        rendererConfig: As.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ir.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Jx(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: As.findFiberByHostInstance || dM,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Ds.isDisabled && Ds.supportsFiber)) try {
    Lc = Ds.inject(mM), ir = Ds
} catch {
}
var Ds;
an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pM;
an.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tm(t)) throw Error(M(200));
    return fM(e, t, null, n)
};
an.createRoot = function (e, t) {
    if (!tm(e)) throw Error(M(299));
    var n = !1, r = "", i = MS;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Zp(e, 1, !1, null, null, n, !1, r, i), e[Fr] = t.current, oa(e.nodeType === 8 ? e.parentNode : e), new em(t)
};
an.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
    return e = Jx(t), e = e === null ? null : e.stateNode, e
};
an.flushSync = function (e) {
    return Di(e)
};
an.hydrate = function (e, t, n) {
    if (!qc(t)) throw Error(M(200));
    return Xc(null, e, t, !0, n)
};
an.hydrateRoot = function (e, t, n) {
    if (!tm(e)) throw Error(M(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = MS;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = OS(t, null, e, 1, n ?? null, i, !1, o, s), e[Fr] = t.current, oa(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Gc(t)
};
an.render = function (e, t, n) {
    if (!qc(t)) throw Error(M(200));
    return Xc(null, e, t, !1, n)
};
an.unmountComponentAtNode = function (e) {
    if (!qc(e)) throw Error(M(40));
    return !!e._reactRootContainer && (Di(function () {
        Xc(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Fr] = null
        })
    }), !0)
};
an.unstable_batchedUpdates = Xp;
an.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!qc(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return Xc(e, t, n, !1, r)
};
an.version = "18.2.0-next-9e3b772b8-20220608";

function LS() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LS)
    } catch (e) {
        console.error(e)
    }
}

LS();
var cn = an, VS = cn, gM = cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vM = cn.createPortal,
    yM = cn.createRoot, bM = cn.findDOMNode, xM = cn.flushSync, wM = cn.hydrate, SM = cn.hydrateRoot, kM = cn.render,
    CM = cn.unmountComponentAtNode, TM = cn.unstable_batchedUpdates, RM = cn.unstable_renderSubtreeIntoContainer,
    EM = cn.version;
var PM = pn({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Hsluv = void 0;
        var t = class {
            constructor() {
                this.hex = "#000000", this.rgb_r = 0, this.rgb_g = 0, this.rgb_b = 0, this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0, this.luv_l = 0, this.luv_u = 0, this.luv_v = 0, this.lch_l = 0, this.lch_c = 0, this.lch_h = 0, this.hsluv_h = 0, this.hsluv_s = 0, this.hsluv_l = 0, this.hpluv_h = 0, this.hpluv_p = 0, this.hpluv_l = 0, this.r0s = 0, this.r0i = 0, this.r1s = 0, this.r1i = 0, this.g0s = 0, this.g0i = 0, this.g1s = 0, this.g1i = 0, this.b0s = 0, this.b0i = 0, this.b1s = 0, this.b1i = 0
            }

            static fromLinear(n) {
                return n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055
            }

            static toLinear(n) {
                return n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92
            }

            static yToL(n) {
                return n <= t.epsilon ? n / t.refY * t.kappa : 116 * Math.pow(n / t.refY, 1 / 3) - 16
            }

            static lToY(n) {
                return n <= 8 ? t.refY * n / t.kappa : t.refY * Math.pow((n + 16) / 116, 3)
            }

            static rgbChannelToHex(n) {
                let r = Math.round(n * 255), i = r % 16, o = (r - i) / 16 | 0;
                return t.hexChars.charAt(o) + t.hexChars.charAt(i)
            }

            static hexToRgbChannel(n, r) {
                let i = t.hexChars.indexOf(n.charAt(r)), o = t.hexChars.indexOf(n.charAt(r + 1));
                return (i * 16 + o) / 255
            }

            static distanceFromOriginAngle(n, r, i) {
                let o = r / (Math.sin(i) - n * Math.cos(i));
                return o < 0 ? 1 / 0 : o
            }

            static distanceFromOrigin(n, r) {
                return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1)
            }

            static min6(n, r, i, o, s, a) {
                return Math.min(n, Math.min(r, Math.min(i, Math.min(o, Math.min(s, a)))))
            }

            rgbToHex() {
                this.hex = "#", this.hex += t.rgbChannelToHex(this.rgb_r), this.hex += t.rgbChannelToHex(this.rgb_g), this.hex += t.rgbChannelToHex(this.rgb_b)
            }

            hexToRgb() {
                this.hex = this.hex.toLowerCase(), this.rgb_r = t.hexToRgbChannel(this.hex, 1), this.rgb_g = t.hexToRgbChannel(this.hex, 3), this.rgb_b = t.hexToRgbChannel(this.hex, 5)
            }

            xyzToRgb() {
                this.rgb_r = t.fromLinear(t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z), this.rgb_g = t.fromLinear(t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z), this.rgb_b = t.fromLinear(t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z)
            }

            rgbToXyz() {
                let n = t.toLinear(this.rgb_r), r = t.toLinear(this.rgb_g), i = t.toLinear(this.rgb_b);
                this.xyz_x = .41239079926595 * n + .35758433938387 * r + .18048078840183 * i, this.xyz_y = .21263900587151 * n + .71516867876775 * r + .072192315360733 * i, this.xyz_z = .019330818715591 * n + .11919477979462 * r + .95053215224966 * i
            }

            xyzToLuv() {
                let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z, r = 4 * this.xyz_x, i = 9 * this.xyz_y;
                n !== 0 ? (r /= n, i /= n) : (r = NaN, i = NaN), this.luv_l = t.yToL(this.xyz_y), this.luv_l === 0 ? (this.luv_u = 0, this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (r - t.refU), this.luv_v = 13 * this.luv_l * (i - t.refV))
            }

            luvToXyz() {
                if (this.luv_l === 0) {
                    this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0;
                    return
                }
                let n = this.luv_u / (13 * this.luv_l) + t.refU, r = this.luv_v / (13 * this.luv_l) + t.refV;
                this.xyz_y = t.lToY(this.luv_l), this.xyz_x = 0 - 9 * this.xyz_y * n / ((n - 4) * r - n * r), this.xyz_z = (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) / (3 * r)
            }

            luvToLch() {
                if (this.lch_l = this.luv_l, this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v), this.lch_c < 1e-8) this.lch_h = 0; else {
                    let n = Math.atan2(this.luv_v, this.luv_u);
                    this.lch_h = n * 180 / Math.PI, this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)
                }
            }

            lchToLuv() {
                let n = this.lch_h / 180 * Math.PI;
                this.luv_l = this.lch_l, this.luv_u = Math.cos(n) * this.lch_c, this.luv_v = Math.sin(n) * this.lch_c
            }

            calculateBoundingLines(n) {
                let r = Math.pow(n + 16, 3) / 1560896, i = r > t.epsilon ? r : n / t.kappa,
                    o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
                    s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
                    a = i * (632260 * t.m_r2 - 126452 * t.m_r1), l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
                    c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
                    u = i * (632260 * t.m_g2 - 126452 * t.m_g1), f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
                    d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
                    h = i * (632260 * t.m_b2 - 126452 * t.m_b1);
                this.r0s = o / a, this.r0i = s * n / a, this.r1s = o / (a + 126452), this.r1i = (s - 769860) * n / (a + 126452), this.g0s = l / u, this.g0i = c * n / u, this.g1s = l / (u + 126452), this.g1i = (c - 769860) * n / (u + 126452), this.b0s = f / h, this.b0i = d * n / h, this.b1s = f / (h + 126452), this.b1i = (d - 769860) * n / (h + 126452)
            }

            calcMaxChromaHpluv() {
                let n = t.distanceFromOrigin(this.r0s, this.r0i), r = t.distanceFromOrigin(this.r1s, this.r1i),
                    i = t.distanceFromOrigin(this.g0s, this.g0i), o = t.distanceFromOrigin(this.g1s, this.g1i),
                    s = t.distanceFromOrigin(this.b0s, this.b0i), a = t.distanceFromOrigin(this.b1s, this.b1i);
                return t.min6(n, r, i, o, s, a)
            }

            calcMaxChromaHsluv(n) {
                let r = n / 360 * Math.PI * 2, i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
                    o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
                    s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
                    a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
                    l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
                    c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
                return t.min6(i, o, s, a, l, c)
            }

            hsluvToLch() {
                if (this.hsluv_l > 99.9999999) this.lch_l = 100, this.lch_c = 0; else if (this.hsluv_l < 1e-8) this.lch_l = 0, this.lch_c = 0; else {
                    this.lch_l = this.hsluv_l, this.calculateBoundingLines(this.hsluv_l);
                    let n = this.calcMaxChromaHsluv(this.hsluv_h);
                    this.lch_c = n / 100 * this.hsluv_s
                }
                this.lch_h = this.hsluv_h
            }

            lchToHsluv() {
                if (this.lch_l > 99.9999999) this.hsluv_s = 0, this.hsluv_l = 100; else if (this.lch_l < 1e-8) this.hsluv_s = 0, this.hsluv_l = 0; else {
                    this.calculateBoundingLines(this.lch_l);
                    let n = this.calcMaxChromaHsluv(this.lch_h);
                    this.hsluv_s = this.lch_c / n * 100, this.hsluv_l = this.lch_l
                }
                this.hsluv_h = this.lch_h
            }

            hpluvToLch() {
                if (this.hpluv_l > 99.9999999) this.lch_l = 100, this.lch_c = 0; else if (this.hpluv_l < 1e-8) this.lch_l = 0, this.lch_c = 0; else {
                    this.lch_l = this.hpluv_l, this.calculateBoundingLines(this.hpluv_l);
                    let n = this.calcMaxChromaHpluv();
                    this.lch_c = n / 100 * this.hpluv_p
                }
                this.lch_h = this.hpluv_h
            }

            lchToHpluv() {
                if (this.lch_l > 99.9999999) this.hpluv_p = 0, this.hpluv_l = 100; else if (this.lch_l < 1e-8) this.hpluv_p = 0, this.hpluv_l = 0; else {
                    this.calculateBoundingLines(this.lch_l);
                    let n = this.calcMaxChromaHpluv();
                    this.hpluv_p = this.lch_c / n * 100, this.hpluv_l = this.lch_l
                }
                this.hpluv_h = this.lch_h
            }

            hsluvToRgb() {
                this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb()
            }

            hpluvToRgb() {
                this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb()
            }

            hsluvToHex() {
                this.hsluvToRgb(), this.rgbToHex()
            }

            hpluvToHex() {
                this.hpluvToRgb(), this.rgbToHex()
            }

            rgbToHsluv() {
                this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv()
            }

            rgbToHpluv() {
                this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv()
            }

            hexToHsluv() {
                this.hexToRgb(), this.rgbToHsluv()
            }

            hexToHpluv() {
                this.hexToRgb(), this.rgbToHpluv()
            }
        };
        e.Hsluv = t, t.hexChars = "0123456789abcdef", t.refY = 1, t.refU = .19783000664283, t.refV = .46831999493879, t.kappa = 903.2962962, t.epsilon = .0088564516, t.m_r0 = 3.240969941904521, t.m_r1 = -1.537383177570093, t.m_r2 = -.498610760293, t.m_g0 = -.96924363628087, t.m_g1 = 1.87596750150772, t.m_g2 = .041555057407175, t.m_b0 = .055630079696993, t.m_b1 = -.20397695888897, t.m_b2 = 1.056971514242878
    }
}), _M = pn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
        "use strict";
        var n = Object.prototype.hasOwnProperty, r = "~";

        function i() {
        }

        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));

        function o(c, u, f) {
            this.fn = c, this.context = u, this.once = f || !1
        }

        function s(c, u, f, d, h) {
            if (typeof f != "function") throw new TypeError("The listener must be a function");
            var v = new o(f, d || c, h), g = r ? r + u : u;
            return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], v] : c._events[g].push(v) : (c._events[g] = v, c._eventsCount++), c
        }

        function a(c, u) {
            --c._eventsCount === 0 ? c._events = new i : delete c._events[u]
        }

        function l() {
            this._events = new i, this._eventsCount = 0
        }

        l.prototype.eventNames = function () {
            var u = [], f, d;
            if (this._eventsCount === 0) return u;
            for (d in f = this._events) n.call(f, d) && u.push(r ? d.slice(1) : d);
            return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u
        }, l.prototype.listeners = function (u) {
            var f = r ? r + u : u, d = this._events[f];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var h = 0, v = d.length, g = new Array(v); h < v; h++) g[h] = d[h].fn;
            return g
        }, l.prototype.listenerCount = function (u) {
            var f = r ? r + u : u, d = this._events[f];
            return d ? d.fn ? 1 : d.length : 0
        }, l.prototype.emit = function (u, f, d, h, v, g) {
            var b = r ? r + u : u;
            if (!this._events[b]) return !1;
            var p = this._events[b], m = arguments.length, y, w;
            if (p.fn) {
                switch (p.once && this.removeListener(u, p.fn, void 0, !0), m) {
                    case 1:
                        return p.fn.call(p.context), !0;
                    case 2:
                        return p.fn.call(p.context, f), !0;
                    case 3:
                        return p.fn.call(p.context, f, d), !0;
                    case 4:
                        return p.fn.call(p.context, f, d, h), !0;
                    case 5:
                        return p.fn.call(p.context, f, d, h, v), !0;
                    case 6:
                        return p.fn.call(p.context, f, d, h, v, g), !0
                }
                for (w = 1, y = new Array(m - 1); w < m; w++) y[w - 1] = arguments[w];
                p.fn.apply(p.context, y)
            } else {
                var C = p.length, S;
                for (w = 0; w < C; w++) switch (p[w].once && this.removeListener(u, p[w].fn, void 0, !0), m) {
                    case 1:
                        p[w].fn.call(p[w].context);
                        break;
                    case 2:
                        p[w].fn.call(p[w].context, f);
                        break;
                    case 3:
                        p[w].fn.call(p[w].context, f, d);
                        break;
                    case 4:
                        p[w].fn.call(p[w].context, f, d, h);
                        break;
                    default:
                        if (!y) for (S = 1, y = new Array(m - 1); S < m; S++) y[S - 1] = arguments[S];
                        p[w].fn.apply(p[w].context, y)
                }
            }
            return !0
        }, l.prototype.on = function (u, f, d) {
            return s(this, u, f, d, !1)
        }, l.prototype.once = function (u, f, d) {
            return s(this, u, f, d, !0)
        }, l.prototype.removeListener = function (u, f, d, h) {
            var v = r ? r + u : u;
            if (!this._events[v]) return this;
            if (!f) return a(this, v), this;
            var g = this._events[v];
            if (g.fn) g.fn === f && (!h || g.once) && (!d || g.context === d) && a(this, v); else {
                for (var b = 0, p = [], m = g.length; b < m; b++) (g[b].fn !== f || h && !g[b].once || d && g[b].context !== d) && p.push(g[b]);
                p.length ? this._events[v] = p.length === 1 ? p[0] : p : a(this, v)
            }
            return this
        }, l.prototype.removeAllListeners = function (u) {
            var f;
            return u ? (f = r ? r + u : u, this._events[f] && a(this, f)) : (this._events = new i, this._eventsCount = 0), this
        }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, typeof t < "u" && (t.exports = l)
    }
}), qm = pn({
    "../../../node_modules/process/browser.js"(e, t) {
        var n = t.exports = {}, r, i;

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        (function () {
            try {
                typeof setTimeout == "function" ? r = setTimeout : r = o
            } catch {
                r = o
            }
            try {
                typeof clearTimeout == "function" ? i = clearTimeout : i = s
            } catch {
                i = s
            }
        })();

        function a(p) {
            if (r === setTimeout) return setTimeout(p, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(p, 0);
            try {
                return r(p, 0)
            } catch {
                try {
                    return r.call(null, p, 0)
                } catch {
                    return r.call(this, p, 0)
                }
            }
        }

        function l(p) {
            if (i === clearTimeout) return clearTimeout(p);
            if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(p);
            try {
                return i(p)
            } catch {
                try {
                    return i.call(null, p)
                } catch {
                    return i.call(this, p)
                }
            }
        }

        var c = [], u = !1, f, d = -1;

        function h() {
            !u || !f || (u = !1, f.length ? c = f.concat(c) : d = -1, c.length && v())
        }

        function v() {
            if (!u) {
                var p = a(h);
                u = !0;
                for (var m = c.length; m;) {
                    for (f = c, c = []; ++d < m;) f && f[d].run();
                    d = -1, m = c.length
                }
                f = null, u = !1, l(p)
            }
        }

        n.nextTick = function (p) {
            var m = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var y = 1; y < arguments.length; y++) m[y - 1] = arguments[y];
            c.push(new g(p, m)), c.length === 1 && !u && a(v)
        };

        function g(p, m) {
            this.fun = p, this.array = m
        }

        g.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {};

        function b() {
        }

        n.on = b, n.addListener = b, n.once = b, n.off = b, n.removeListener = b, n.removeAllListeners = b, n.emit = b, n.prependListener = b, n.prependOnceListener = b, n.listeners = function (p) {
            return []
        }, n.binding = function (p) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function () {
            return "/"
        }, n.chdir = function (p) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function () {
            return 0
        }
    }
}), IM = pn({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(e, t) {
        (function (n, r) {
            typeof e == "object" && typeof t < "u" ? r(e) : typeof define == "function" && define.amd ? define(["exports"], r) : (n = typeof globalThis < "u" ? globalThis : n || self, r(n.ResizeObserver = {}))
        })(e, function (n) {
            "use strict";
            var r = [], i = function () {
                return r.some(function (P) {
                    return P.activeTargets.length > 0
                })
            }, o = function () {
                return r.some(function (P) {
                    return P.skippedTargets.length > 0
                })
            }, s = "ResizeObserver loop completed with undelivered notifications.", a = function () {
                var P;
                typeof ErrorEvent == "function" ? P = new ErrorEvent("error", {message: s}) : (P = document.createEvent("Event"), P.initEvent("error", !1, !1), P.message = s), F.dispatchEvent(P)
            }, l;
            (function (P) {
                P.BORDER_BOX = "border-box", P.CONTENT_BOX = "content-box", P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
            })(l || (l = {}));
            var c = function (P) {
                    return Object.freeze(P)
                }, u = function () {
                    function P(_, L) {
                        this.inlineSize = _, this.blockSize = L, c(this)
                    }

                    return P
                }(), f = function () {
                    function P(_, L, Y, ye) {
                        return this.x = _, this.y = L, this.width = Y, this.height = ye, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, c(this)
                    }

                    return P.prototype.toJSON = function () {
                        var _ = this, L = _.x, Y = _.y, ye = _.top, Mt = _.right, bt = _.bottom, Je = _.left, hr = _.width,
                            Zt = _.height;
                        return {x: L, y: Y, top: ye, right: Mt, bottom: bt, left: Je, width: hr, height: Zt}
                    }, P.fromRect = function (_) {
                        return new P(_.x, _.y, _.width, _.height)
                    }, P
                }(), d = function (P) {
                    return P instanceof SVGElement && "getBBox" in P
                }, h = function (P) {
                    if (d(P)) {
                        var _ = P.getBBox(), L = _.width, Y = _.height;
                        return !L && !Y
                    }
                    var ye = P, Mt = ye.offsetWidth, bt = ye.offsetHeight;
                    return !(Mt || bt || P.getClientRects().length)
                }, v = function (P) {
                    var _, L;
                    if (P instanceof Element) return !0;
                    var Y = (L = (_ = P) === null || _ === void 0 ? void 0 : _.ownerDocument) === null || L === void 0 ? void 0 : L.defaultView;
                    return !!(Y && P instanceof Y.Element)
                }, g = function (P) {
                    switch (P.tagName) {
                        case"INPUT":
                            if (P.type !== "image") break;
                        case"VIDEO":
                        case"AUDIO":
                        case"EMBED":
                        case"OBJECT":
                        case"CANVAS":
                        case"IFRAME":
                        case"IMG":
                            return !0
                    }
                    return !1
                }, b = typeof F < "u" ? F : {}, p = new WeakMap, m = /auto|scroll/, y = /^tb|vertical/,
                w = /msie|trident/i.test(b.navigator && b.navigator.userAgent), C = function (P) {
                    return parseFloat(P || "0")
                }, S = function (P, _, L) {
                    return P === void 0 && (P = 0), _ === void 0 && (_ = 0), L === void 0 && (L = !1), new u((L ? _ : P) || 0, (L ? P : _) || 0)
                }, R = c({
                    devicePixelContentBoxSize: S(),
                    borderBoxSize: S(),
                    contentBoxSize: S(),
                    contentRect: new f(0, 0, 0, 0)
                }), E = function (P, _) {
                    if (_ === void 0 && (_ = !1), p.has(P) && !_) return p.get(P);
                    if (h(P)) return p.set(P, R), R;
                    var L = getComputedStyle(P), Y = d(P) && P.ownerSVGElement && P.getBBox(),
                        ye = !w && L.boxSizing === "border-box", Mt = y.test(L.writingMode || ""),
                        bt = !Y && m.test(L.overflowY || ""), Je = !Y && m.test(L.overflowX || ""),
                        hr = Y ? 0 : C(L.paddingTop), Zt = Y ? 0 : C(L.paddingRight), vi = Y ? 0 : C(L.paddingBottom),
                        Qi = Y ? 0 : C(L.paddingLeft), JT = Y ? 0 : C(L.borderTopWidth), eR = Y ? 0 : C(L.borderRightWidth),
                        tR = Y ? 0 : C(L.borderBottomWidth), nR = Y ? 0 : C(L.borderLeftWidth), Eg = Qi + Zt, Fg = hr + vi,
                        tf = nR + eR, nf = JT + tR, Pg = Je ? P.offsetHeight - nf - P.clientHeight : 0,
                        _g = bt ? P.offsetWidth - tf - P.clientWidth : 0, rR = ye ? Eg + tf : 0, iR = ye ? Fg + nf : 0,
                        Ha = Y ? Y.width : C(L.width) - rR - _g, Wa = Y ? Y.height : C(L.height) - iR - Pg,
                        oR = Ha + Eg + _g + tf, sR = Wa + Fg + Pg + nf, Ig = c({
                            devicePixelContentBoxSize: S(Math.round(Ha * devicePixelRatio), Math.round(Wa * devicePixelRatio), Mt),
                            borderBoxSize: S(oR, sR, Mt),
                            contentBoxSize: S(Ha, Wa, Mt),
                            contentRect: new f(Qi, hr, Ha, Wa)
                        });
                    return p.set(P, Ig), Ig
                }, I = function (P, _, L) {
                    var Y = E(P, L), ye = Y.borderBoxSize, Mt = Y.contentBoxSize, bt = Y.devicePixelContentBoxSize;
                    switch (_) {
                        case l.DEVICE_PIXEL_CONTENT_BOX:
                            return bt;
                        case l.BORDER_BOX:
                            return ye;
                        default:
                            return Mt
                    }
                }, O = function () {
                    function P(_) {
                        var L = E(_);
                        this.target = _, this.contentRect = L.contentRect, this.borderBoxSize = c([L.borderBoxSize]), this.contentBoxSize = c([L.contentBoxSize]), this.devicePixelContentBoxSize = c([L.devicePixelContentBoxSize])
                    }

                    return P
                }(), H = function (P) {
                    if (h(P)) return 1 / 0;
                    for (var _ = 0, L = P.parentNode; L;) _ += 1, L = L.parentNode;
                    return _
                }, z = function () {
                    var P = 1 / 0, _ = [];
                    r.forEach(function (bt) {
                        if (bt.activeTargets.length !== 0) {
                            var Je = [];
                            bt.activeTargets.forEach(function (Zt) {
                                var vi = new O(Zt.target), Qi = H(Zt.target);
                                Je.push(vi), Zt.lastReportedSize = I(Zt.target, Zt.observedBox), Qi < P && (P = Qi)
                            }), _.push(function () {
                                bt.callback.call(bt.observer, Je, bt.observer)
                            }), bt.activeTargets.splice(0, bt.activeTargets.length)
                        }
                    });
                    for (var L = 0, Y = _; L < Y.length; L++) {
                        var ye = Y[L];
                        ye()
                    }
                    return P
                }, B = function (P) {
                    r.forEach(function (L) {
                        L.activeTargets.splice(0, L.activeTargets.length), L.skippedTargets.splice(0, L.skippedTargets.length), L.observationTargets.forEach(function (ye) {
                            ye.isActive() && (H(ye.target) > P ? L.activeTargets.push(ye) : L.skippedTargets.push(ye))
                        })
                    })
                }, Q = function () {
                    var P = 0;
                    for (B(P); i();) P = z(), B(P);
                    return o() && a(), P > 0
                }, j, se = [], K = function () {
                    return se.splice(0).forEach(function (P) {
                        return P()
                    })
                }, te = function (P) {
                    if (!j) {
                        var _ = 0, L = document.createTextNode(""), Y = {characterData: !0};
                        new MutationObserver(function () {
                            return K()
                        }).observe(L, Y), j = function () {
                            L.textContent = "" + (_ ? _-- : _++)
                        }
                    }
                    se.push(P), j()
                }, X = function (P) {
                    te(function () {
                        requestAnimationFrame(P)
                    })
                }, G = 0, de = function () {
                    return !!G
                }, me = 250, le = {attributes: !0, characterData: !0, childList: !0, subtree: !0},
                ee = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                Fe = function (P) {
                    return P === void 0 && (P = 0), Date.now() + P
                }, Te = !1, De = function () {
                    function P() {
                        var _ = this;
                        this.stopped = !0, this.listener = function () {
                            return _.schedule()
                        }
                    }

                    return P.prototype.run = function (_) {
                        var L = this;
                        if (_ === void 0 && (_ = me), !Te) {
                            Te = !0;
                            var Y = Fe(_);
                            X(function () {
                                var ye = !1;
                                try {
                                    ye = Q()
                                } finally {
                                    if (Te = !1, _ = Y - Fe(), !de()) return;
                                    ye ? L.run(1e3) : _ > 0 ? L.run(_) : L.start()
                                }
                            })
                        }
                    }, P.prototype.schedule = function () {
                        this.stop(), this.run()
                    }, P.prototype.observe = function () {
                        var _ = this, L = function () {
                            return _.observer && _.observer.observe(document.body, le)
                        };
                        document.body ? L() : b.addEventListener("DOMContentLoaded", L)
                    }, P.prototype.start = function () {
                        var _ = this;
                        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ee.forEach(function (L) {
                            return b.addEventListener(L, _.listener, !0)
                        }))
                    }, P.prototype.stop = function () {
                        var _ = this;
                        this.stopped || (this.observer && this.observer.disconnect(), ee.forEach(function (L) {
                            return b.removeEventListener(L, _.listener, !0)
                        }), this.stopped = !0)
                    }, P
                }(), Pe = new De, In = function (P) {
                    !G && P > 0 && Pe.start(), G += P, !G && Pe.stop()
                }, ft = function (P) {
                    return !d(P) && !g(P) && getComputedStyle(P).display === "inline"
                }, Wn = function () {
                    function P(_, L) {
                        this.target = _, this.observedBox = L || l.CONTENT_BOX, this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }

                    return P.prototype.isActive = function () {
                        var _ = I(this.target, this.observedBox, !0);
                        return ft(this.target) && (this.lastReportedSize = _), this.lastReportedSize.inlineSize !== _.inlineSize || this.lastReportedSize.blockSize !== _.blockSize
                    }, P
                }(), he = function () {
                    function P(_, L) {
                        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = _, this.callback = L
                    }

                    return P
                }(), Qt = new WeakMap, dt = function (P, _) {
                    for (var L = 0; L < P.length; L += 1) if (P[L].target === _) return L;
                    return -1
                }, hn = function () {
                    function P() {
                    }

                    return P.connect = function (_, L) {
                        var Y = new he(_, L);
                        Qt.set(_, Y)
                    }, P.observe = function (_, L, Y) {
                        var ye = Qt.get(_), Mt = ye.observationTargets.length === 0;
                        dt(ye.observationTargets, L) < 0 && (Mt && r.push(ye), ye.observationTargets.push(new Wn(L, Y && Y.box)), In(1), Pe.schedule())
                    }, P.unobserve = function (_, L) {
                        var Y = Qt.get(_), ye = dt(Y.observationTargets, L), Mt = Y.observationTargets.length === 1;
                        ye >= 0 && (Mt && r.splice(r.indexOf(Y), 1), Y.observationTargets.splice(ye, 1), In(-1))
                    }, P.disconnect = function (_) {
                        var L = this, Y = Qt.get(_);
                        Y.observationTargets.slice().forEach(function (ye) {
                            return L.unobserve(_, ye.target)
                        }), Y.activeTargets.splice(0, Y.activeTargets.length)
                    }, P
                }(), ja = function () {
                    function P(_) {
                        if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (typeof _ != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        hn.connect(this, _)
                    }

                    return P.prototype.observe = function (_, L) {
                        if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!v(_)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        hn.observe(this, _, L)
                    }, P.prototype.unobserve = function (_) {
                        if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!v(_)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        hn.unobserve(this, _)
                    }, P.prototype.disconnect = function () {
                        hn.disconnect(this)
                    }, P.toString = function () {
                        return "function ResizeObserver () { [polyfill code] }"
                    }, P
                }();
            n.ResizeObserver = ja, n.ResizeObserverEntry = O, n.ResizeObserverSize = u, Object.defineProperty(n, "__esModule", {value: !0})
        })
    }
}), OM = pn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(e) {
        "use strict";
        var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103,
            r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107,
            o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114,
            a = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110,
            c = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111,
            f = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113,
            h = t ? Symbol.for("react.suspense_list") : 60120, v = t ? Symbol.for("react.memo") : 60115,
            g = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121,
            p = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118,
            y = t ? Symbol.for("react.scope") : 60119;

        function w(S) {
            if (typeof S == "object" && S !== null) {
                var R = S.$$typeof;
                switch (R) {
                    case n:
                        switch (S = S.type, S) {
                            case c:
                            case u:
                            case i:
                            case s:
                            case o:
                            case d:
                                return S;
                            default:
                                switch (S = S && S.$$typeof, S) {
                                    case l:
                                    case f:
                                    case g:
                                    case v:
                                    case a:
                                        return S;
                                    default:
                                        return R
                                }
                        }
                    case r:
                        return R
                }
            }
        }

        function C(S) {
            return w(S) === u
        }

        e.AsyncMode = c, e.ConcurrentMode = u, e.ContextConsumer = l, e.ContextProvider = a, e.Element = n, e.ForwardRef = f, e.Fragment = i, e.Lazy = g, e.Memo = v, e.Portal = r, e.Profiler = s, e.StrictMode = o, e.Suspense = d, e.isAsyncMode = function (S) {
            return C(S) || w(S) === c
        }, e.isConcurrentMode = C, e.isContextConsumer = function (S) {
            return w(S) === l
        }, e.isContextProvider = function (S) {
            return w(S) === a
        }, e.isElement = function (S) {
            return typeof S == "object" && S !== null && S.$$typeof === n
        }, e.isForwardRef = function (S) {
            return w(S) === f
        }, e.isFragment = function (S) {
            return w(S) === i
        }, e.isLazy = function (S) {
            return w(S) === g
        }, e.isMemo = function (S) {
            return w(S) === v
        }, e.isPortal = function (S) {
            return w(S) === r
        }, e.isProfiler = function (S) {
            return w(S) === s
        }, e.isStrictMode = function (S) {
            return w(S) === o
        }, e.isSuspense = function (S) {
            return w(S) === d
        }, e.isValidElementType = function (S) {
            return typeof S == "string" || typeof S == "function" || S === i || S === u || S === s || S === o || S === d || S === h || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === v || S.$$typeof === a || S.$$typeof === l || S.$$typeof === f || S.$$typeof === p || S.$$typeof === m || S.$$typeof === y || S.$$typeof === b)
        }, e.typeOf = w
    }
}), MM = pn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
        "use strict";
        t.exports = OM()
    }
}), ju = pn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
        "use strict";
        var n = MM(), r = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }, i = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
            o = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0},
            s = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, a = {};
        a[n.ForwardRef] = o, a[n.Memo] = s;

        function l(b) {
            return n.isMemo(b) ? s : a[b.$$typeof] || r
        }

        var c = Object.defineProperty, u = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols,
            d = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, v = Object.prototype;

        function g(b, p, m) {
            if (typeof p != "string") {
                if (v) {
                    var y = h(p);
                    y && y !== v && g(b, y, m)
                }
                var w = u(p);
                f && (w = w.concat(f(p)));
                for (var C = l(b), S = l(p), R = 0; R < w.length; ++R) {
                    var E = w[R];
                    if (!i[E] && !(m && m[E]) && !(S && S[E]) && !(C && C[E])) {
                        var I = d(p, E);
                        try {
                            c(b, E, I)
                        } catch {
                        }
                    }
                }
            }
            return b
        }

        t.exports = g
    }
}), LM = pn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
        (function () {
            function n(p, m) {
                document.addEventListener ? p.addEventListener("scroll", m, !1) : p.attachEvent("scroll", m)
            }

            function r(p) {
                document.body ? p() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function m() {
                    document.removeEventListener("DOMContentLoaded", m), p()
                }) : document.attachEvent("onreadystatechange", function m() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", m), p())
                })
            }

            function i(p) {
                this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(p)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
            }

            function o(p, m) {
                p.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + m + ";"
            }

            function s(p) {
                var m = p.a.offsetWidth, y = m + 100;
                return p.f.style.width = y + "px", p.c.scrollLeft = y, p.b.scrollLeft = p.b.scrollWidth + 100, p.g !== m ? (p.g = m, !0) : !1
            }

            function a(p, m) {
                function y() {
                    var C = w;
                    s(C) && C.a.parentNode && m(C.g)
                }

                var w = p;
                n(p.b, y), n(p.c, y), s(p)
            }

            function l(p, m) {
                var y = m || {};
                this.family = p, this.style = y.style || "normal", this.weight = y.weight || "normal", this.stretch = y.stretch || "normal"
            }

            var c = null, u = null, f = null, d = null;

            function h() {
                if (u === null) if (v() && /Apple/.test(F.navigator.vendor)) {
                    var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(F.navigator.userAgent);
                    u = !!p && 603 > parseInt(p[1], 10)
                } else u = !1;
                return u
            }

            function v() {
                return d === null && (d = !!document.fonts), d
            }

            function g() {
                if (f === null) {
                    var p = document.createElement("div");
                    try {
                        p.style.font = "condensed 100px sans-serif"
                    } catch {
                    }
                    f = p.style.font !== ""
                }
                return f
            }

            function b(p, m) {
                return [p.style, p.weight, g() ? p.stretch : "", "100px", m].join(" ")
            }

            l.prototype.load = function (p, m) {
                var y = this, w = p || "BESbswy", C = 0, S = m || 3e3, R = new Date().getTime();
                return new Promise(function (E, I) {
                    if (v() && !h()) {
                        var O = new Promise(function (z, B) {
                            function Q() {
                                new Date().getTime() - R >= S ? B(Error("" + S + "ms timeout exceeded")) : document.fonts.load(b(y, '"' + y.family + '"'), w).then(function (j) {
                                    1 <= j.length ? z() : setTimeout(Q, 25)
                                }, B)
                            }

                            Q()
                        }), H = new Promise(function (z, B) {
                            C = setTimeout(function () {
                                B(Error("" + S + "ms timeout exceeded"))
                            }, S)
                        });
                        Promise.race([H, O]).then(function () {
                            clearTimeout(C), E(y)
                        }, I)
                    } else r(function () {
                        function z() {
                            var ee;
                            (ee = K != -1 && te != -1 || K != -1 && X != -1 || te != -1 && X != -1) && ((ee = K != te && K != X && te != X) || (c === null && (ee = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(F.navigator.userAgent), c = !!ee && (536 > parseInt(ee[1], 10) || parseInt(ee[1], 10) === 536 && 11 >= parseInt(ee[2], 10))), ee = c && (K == G && te == G && X == G || K == de && te == de && X == de || K == me && te == me && X == me)), ee = !ee), ee && (le.parentNode && le.parentNode.removeChild(le), clearTimeout(C), E(y))
                        }

                        function B() {
                            if (new Date().getTime() - R >= S) le.parentNode && le.parentNode.removeChild(le), I(Error("" + S + "ms timeout exceeded")); else {
                                var ee = document.hidden;
                                (ee === !0 || ee === void 0) && (K = Q.a.offsetWidth, te = j.a.offsetWidth, X = se.a.offsetWidth, z()), C = setTimeout(B, 50)
                            }
                        }

                        var Q = new i(w), j = new i(w), se = new i(w), K = -1, te = -1, X = -1, G = -1, de = -1,
                            me = -1, le = document.createElement("div");
                        le.dir = "ltr", o(Q, b(y, "sans-serif")), o(j, b(y, "serif")), o(se, b(y, "monospace")), le.appendChild(Q.a), le.appendChild(j.a), le.appendChild(se.a), document.body.appendChild(le), G = Q.a.offsetWidth, de = j.a.offsetWidth, me = se.a.offsetWidth, B(), a(Q, function (ee) {
                            K = ee, z()
                        }), o(Q, b(y, '"' + y.family + '",sans-serif')), a(j, function (ee) {
                            te = ee, z()
                        }), o(j, b(y, '"' + y.family + '",serif')), a(se, function (ee) {
                            X = ee, z()
                        }), o(se, b(y, '"' + y.family + '",monospace'))
                    })
                })
            }, typeof t == "object" ? t.exports = l : (F.FontFaceObserver = l, F.FontFaceObserver.prototype.load = l.prototype.load)
        })()
    }
}), VM = "preload";

function Rk(e) {
    return typeof e == "object" && e !== null && !x.isValidElement(e) && VM in e
}

function Hj(e) {
    let t = x.lazy(e), n, r, i = x.forwardRef(function (s, a) {
        return x.createElement(r ?? t, a ? {ref: a, ...s} : s)
    });
    return i.preload = () => (n || (n = e().then(o => (r = o.default, r))), n), i
}

function Hu(e, t) {
    if (t && e) return e.elements && t in e.elements ? e.elements[t] : t
}

function Ek(e) {
    if ("scheduler" in F) {
        if ("yield" in scheduler) return scheduler.yield(e);
        if ("postTask" in scheduler) return scheduler.postTask(() => {
        }, e)
    }
    return e?.priority === "user-blocking" ? Promise.resolve() : new Promise(t => {
        setTimeout(t)
    })
}

async function Fk(e, t) {
    return await Ek(t), e()
}

function Wu(e) {
    return new Promise(t => {
        setTimeout(t, 100), requestAnimationFrame(() => {
            Fk(t, e)
        })
    })
}

function AM(e, t, n, r = ze) {
    r(() => {
        let i = async s => (await Wu(n), s()), o = i(e);
        return () => {
            (async () => {
                let s = await o;
                s && i(s)
            })()
        }
    }, t)
}

var Xm = () => {
}, DM = [], Pk = (() => typeof F < "u" ? F.requestIdleCallback || F.setTimeout : setTimeout)();

function _k(e) {
    return x.useCallback(t => e[t], [e])
}

var Ym = (() => x.createContext({}))();

function zM({api: e, children: t}) {
    return k(Ym.Provider, {value: e, children: t})
}

function Ki() {
    return x.useContext(Ym)
}

function BM({routes: e, children: t}) {
    let n = _k(e);
    return k(Ym.Provider, {value: {getRoute: n}, children: t})
}

var $M = (() => x.createContext(void 0))();

function ts() {
    var e;
    let t = Ki(), n = A($M), r = n ?? t.currentRouteId;
    if (!r) return;
    let i = (e = t.getRoute) == null ? void 0 : e.call(t, r);
    if (i) return {...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables}
}

function NM(e) {
    var t;
    let n = Ki();
    if (e) return (t = n.getRoute) == null ? void 0 : t.call(n, e)
}

function Qj(e, t) {
    let n = ts(), r = NM(t) ?? n;
    return x.useMemo(() => r ? Hu(r, e) : e, [e, r])
}

function Zj() {
    var e;
    return (e = ts()) == null ? void 0 : e.pathVariables
}

function Hn(e) {
    return typeof e == "function"
}

function Km(e) {
    return typeof e == "boolean"
}

function ce(e) {
    return typeof e == "string"
}

function Ue(e) {
    return Number.isFinite(e)
}

function Uu(e) {
    return Array.isArray(e)
}

function ve(e) {
    return e !== null && typeof e == "object" && !Uu(e)
}

function Ge(e) {
    return typeof e > "u"
}

function lr(e) {
    return e === null
}

function jM(e) {
    return e == null
}

function Ik(e) {
    return e instanceof Date && !Number.isNaN(e.getTime())
}

function Ok(e) {
    return ve(e) && Hn(e.return)
}

function Fm(e) {
    return /bot|-google|google-|yandex|ia_archiver/iu.test(e)
}

var Qm = (() => typeof F < "u" && !Fm(Re.userAgent))();

function HM(e, t = !0) {
    let {getRoute: n} = Ki();
    $(() => {
        if (!(!n || !t || !Qm)) for (let r of e) Mk(n(r))
    }, [e, n, t])
}

async function Mk(e) {
    if (!Qm || !e) return;
    let t = e.page;
    if (!(!t || !Rk(t))) {
        await Ek();
        try {
            await t.preload()
        } catch {
        }
    }
}

function Lk(e, t) {
    if (!e.startsWith("/") || !t.startsWith("/")) throw new Error("from/to paths are expected to be absolute");
    let [n] = AS(e), [r, i] = AS(t), o = WM(n, r);
    return o === "" && (o = "."), !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o), o + "/" + i
}

function AS(e) {
    let t = e.lastIndexOf("/");
    return [e.substring(0, t + 1), e.substring(t + 1)]
}

var nm = 46, Xo = 47, gi = (e, t) => e.charCodeAt(t), DS = (e, t) => e.lastIndexOf(t), Ko = (e, t, n) => e.slice(t, n);

function WM(e, t) {
    if (e === t || (e = "/" + BS(e), t = "/" + BS(t), e === t)) return "";
    let n = 1, r = e.length, i = r - n, o = 1, s = t.length - o, a = i < s ? i : s, l = -1, c = 0;
    for (; c < a; c++) {
        let f = gi(e, n + c);
        if (f !== gi(t, o + c)) break;
        f === Xo && (l = c)
    }
    if (c === a) if (s > a) {
        if (gi(t, o + c) === Xo) return Ko(t, o + c + 1);
        if (c === 0) return Ko(t, o + c)
    } else i > a && (gi(e, n + c) === Xo ? l = c : c === 0 && (l = 0));
    let u = "";
    for (c = n + l + 1; c <= r; ++c) (c === r || gi(e, c) === Xo) && (u += u.length === 0 ? ".." : "/..");
    return `${u}${Ko(t, o + l)}`
}

var UM = !1, Yc = "/", zS = e => e === Xo;

function BS(e) {
    let t = "", n = 0, r = -1, i = 0, o = 0;
    for (let s = 0; s <= e.length; ++s) {
        if (s < e.length) o = gi(e, s); else {
            if (zS(o)) break;
            o = Xo
        }
        if (zS(o)) {
            if (!(r === s - 1 || i === 1)) if (i === 2) {
                if (t.length < 2 || n !== 2 || gi(t, t.length - 1) !== nm || gi(t, t.length - 2) !== nm) {
                    if (t.length > 2) {
                        let a = DS(t, Yc);
                        a === -1 ? (t = "", n = 0) : (t = Ko(t, 0, a), n = t.length - 1 - DS(t, Yc)), r = s, i = 0;
                        continue
                    } else if (t.length !== 0) {
                        t = "", n = 0, r = s, i = 0;
                        continue
                    }
                }
                UM && (t += t.length > 0 ? `${Yc}..` : "..", n = 2)
            } else t.length > 0 ? t += `${Yc}${Ko(e, r + 1, s)}` : t = Ko(e, r + 1, s), n = s - r - 1;
            r = s, i = 0
        } else o === nm && i !== -1 ? ++i : i = -1
    }
    return t
}

var GM = ":([a-z]\\w*)", Gi = new RegExp(GM, "gi");

function Vk(e, t) {
    return e.replace(Gi, (n, r) => {
        let i = t[r];
        return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i)
    })
}

function Ak(e) {
    let t = typeof F < "u" ? F.location.search : "";
    return t ? qM(t, e) : e
}

function qM(e, t) {
    let n = t.indexOf("#"), r = n === -1 ? t : t.substring(0, n), i = n === -1 ? "" : t.substring(n),
        o = r.indexOf("?");
    if (o === -1) return r + e + i;
    let s = new URLSearchParams(e), a = r.substring(o + 1), l = new URLSearchParams(a);
    for (let [c, u] of s) l.has(c) || l.append(c, u);
    return r.substring(0, o + 1) + l.toString() + i
}

async function XM(e, t, n, r, i, o, s) {
    var a;
    let l = e, c = !1, u = {...o}, f = Array.from(l.matchAll(Gi)), d = await Promise.all(f.map(async b => {
        var p;
        let m = b?.[0], y = b?.[1];
        if (!m || !y) throw new Error("Failed to replace path variables: unexpected regex match group");
        let w = o[y];
        if (!w || !ce(w)) throw new Error(`No slug found for path variable ${y}`);
        let C = await ((p = s?.[i]) == null ? void 0 : p.call(s));
        if (!C || !t) return w;
        let S = await C.getRecordIdBySlug(w, t);
        if (!S) return w;
        let R = await C.getSlugByRecordId(S, n);
        if (!R) {
            c = !0;
            let E = await C.getSlugByRecordId(S, r);
            return E && (u[y] = E), E ?? w
        }
        return u[y] = R, R
    })), h = 0, v = "", g = !1;
    for (let b = 0; b < f.length; b++) {
        let p = f[b], m = d[b];
        !p || !m || (v += l.substring(h, p.index), h = (p.index ?? 0) + (((a = p[0]) == null ? void 0 : a.length) ?? 0), v += d[b], g = !0)
    }
    return g && (l = v), {path: l, pathVariables: u, isMissingInLocale: c}
}

async function YM({
                      currentLocale: e,
                      nextLocale: t,
                      defaultLocale: n,
                      route: r,
                      pathVariables: i,
                      collectionUtils: o,
                      preserveQueryParams: s
                  }) {
    let {path: a} = r, l = {path: a, pathVariables: i, isMissingInLocale: !1};
    if (!a) return l;
    if (i && r.collectionId) try {
        l = await XM(a, e, t, n, r.collectionId, i, o)
    } catch {
    }
    return t.slug && (l.path = "/" + t.slug + l.path), s && l.path && (l.path = Ak(l.path)), l
}

var KM = {global: void 0, routes: {}}, Dk = x.createContext(KM);

function oH({children: e, value: t}) {
    return k(Dk.Provider, {value: t, children: e})
}

function QM() {
    return x.useContext(Dk)
}

function ZM(e, t, {global: n, routes: r}) {
    var i;
    return ((i = r[e]) == null ? void 0 : i[t]) || n
}

var rm = 10, JM = 1e4;

function eL(e) {
    let t = rm, n = e.next(0), r = [n.value];
    for (; !n.done && t < JM;) n = e.next(t), r.push(n.value), t += rm;
    return r.length === 1 && r.push(n.value), {easing: `linear(${r.join(",")})`, duration: t - rm}
}

var Ar = e => `--view-transition-${e}`;

function Pm(e) {
    return [parseFloat(e), e.endsWith("px") ? "px" : "%"]
}

function zk(e) {
    let {innerWidth: t, innerHeight: n} = F, [r, i] = Pm(e.x), [o, s] = Pm(e.y);
    return {x: i === "px" ? r : t * (r / 100), y: s === "px" ? o : n * (o / 100)}
}

var tL = {
        makeKeyframe: (e, t, n) => {
            let r = 0;
            return (n === "exit" && e.angularDirection === "clockwise" && t === "start" || n === "exit" && e.angularDirection === "counter-clockwise" && t === "end" || n === "enter" && e.angularDirection === "counter-clockwise" && t === "start" || n === "enter" && e.angularDirection === "clockwise" && t === "end") && (r = e.sweepAngle / 360 * 100), `${Ar("conic-offset")}: ${r}%;`
        }, makeStyles: (e, t) => {
            let n = `var(${Ar("conic-offset")})`,
                r = t === "exit" && e.angularDirection === "clockwise" || t === "enter" && e.angularDirection === "counter-clockwise",
                i = r ? "transparent" : "black", o = r ? "black" : "transparent", s = "conic-gradient(from ";
            return s += `${e.angle}deg at ${e.x} ${e.y}, `, s += `${i} 0%, ${i} ${n}, `, s += `${o} ${n}, ${o} 100%)`, `mask-image: ${s}; -webkit-mask-image: ${s};`
        }, makePropertyRules: () => `
        @property ${Ar("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
    }, nL = {
        makeKeyframe: (e, t) => {
            let {x: n, y: r} = zk(e);
            return t === "start" ? `clip-path: circle(0 at ${n}px ${r}px);` : `clip-path: circle(${Math.hypot(Math.max(n, F.innerWidth - n), Math.max(r, F.innerHeight - r))}px at ${n}px ${r}px);`
        }
    }, rL = {
        makeKeyframe: (e, t) => {
            let {x: n, y: r} = zk(e), i = F.innerHeight - r, o = F.innerWidth - n;
            return t === "start" ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);` : "clip-path: inset(0 round 0);"
        }
    }, iL = {
        makeKeyframe: (e, t, n) => {
            let [, r] = Pm(e.width), i = `0${r}`;
            return (t === "start" && n === "exit" || t === "end" && n === "enter") && (i = e.width), `${Ar("blinds-width")}: ${i};`
        }, makeStyles: (e, t) => {
            let n = `var(${Ar("blinds-width")})`, r = t === "exit" ? "transparent" : "black",
                i = t === "exit" ? "black" : "transparent", o = "repeating-linear-gradient(";
            return o += e.angle + 90 + "deg, ", o += `${r} 0px, ${r} ${n}, `, o += `${i} ${n}, ${i} ${e.width})`, `mask-image: ${o}; -webkit-mask-image: ${o};`
        }, makePropertyRules: () => `
            @property ${Ar("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
    }, oL = {
        makeKeyframe: (e, t, n) => {
            let r = t === "start" && n === "exit" || t === "end" && n === "enter" ? 1 : 0;
            return `${Ar("wipe-offset")}: ${r};`
        }, makeStyles: (e, t) => {
            let n = `var(${Ar("wipe-offset")})`, r = t === "exit" ? "transparent" : "black",
                i = t === "exit" ? "black" : "transparent", o = "linear-gradient(";
            return o += e.angle + 90 + "deg, ", o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `, o += `${i} calc(calc(100% + ${e.width}) * ${n}))`, `mask-image: ${o}; -webkit-mask-image: ${o};`
        }, makePropertyRules: () => `
            @property ${Ar("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
    }, sL = {circle: nL, conic: tL, inset: rL, blinds: iL, wipe: oL},
    aL = {opacity: 1, x: "0px", y: "0px", scale: 1, rotate: 0, rotateX: 0, rotateY: 0, mask: void 0};

function $S(e, t, n, r) {
    var i;
    let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (o += ((i = r?.makeKeyframe) == null ? void 0 : i.call(r, e.mask, t, n)) || ""), o
}

function lL(e) {
    return e ? sL[e] : void 0
}

function NS(e, {transition: t, ...n}) {
    var r;
    let i = "view-transition-" + e, o = {duration: "0s", easing: "linear"};
    if (t.type === "tween") o.duration = t.duration + "s", o.easing = `cubic-bezier(${t.ease.join(",")})`; else if (cL(t)) {
        let {easing: c, duration: u} = eL(ks({keyframes: [0, 1], ...uL(t), restDelta: .001, restSpeed: 1e-4}));
        o.duration = u + "ms", o.easing = c
    }
    let s = lL((r = n?.mask) == null ? void 0 : r.type), a = $S(n, "start", e, s),
        l = $S({...aL, mask: n.mask}, "end", e, s);
    return e === "exit" && ([a, l] = [l, a]), `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
}

function cL(e) {
    return e.type === "spring"
}

function uL(e) {
    return e.durationBasedSpring ? {duration: e.duration, bounce: e.bounce} : {
        stiffness: e.stiffness,
        damping: e.damping,
        mass: e.mass
    }
}

var Bk = "view-transition-styles", fL = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {type: "tween", delay: 0, duration: .2, ease: [.27, 0, .51, 1], stiffness: 400, damping: 30, mass: 1}
};

function dL({exit: e = fL, enter: t}) {
    let n = document.createElement("style");
    n.id = Bk;
    let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
    (e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `), r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `, r += NS("exit", e), r += NS("enter", t), n.textContent = r, document.head.appendChild(n)
}

function hL() {
    Pk(() => {
        Z.render(() => {
            performance.mark("framer-vt-remove");
            let e = document.getElementById(Bk);
            e && document.head.removeChild(e)
        })
    })
}

var jS = () => {
};

function pL() {
    return !!document.startViewTransition
}

function mL(e) {
    return new Promise(t => {
        Z.render(() => {
            performance.mark("framer-vt-style"), dL(e), t()
        })
    })
}

async function HS(e, t, n) {
    if (!pL()) {
        e();
        return
    }
    if (await mL(t), n?.aborted) return;
    performance.mark("framer-vt");
    let r = document.startViewTransition(async () => {
        performance.mark("framer-vt-freeze"), !n?.aborted && (n?.addEventListener("abort", () => r.skipTransition()), await e())
    });
    return r.updateCallbackDone.then(() => {
        performance.mark("framer-vt-unfreeze")
    }).catch(jS), Promise.all([r.ready, r.finished]).then(() => {
        performance.mark("framer-vt-finished"), hL()
    }).catch(jS), r
}

function $k() {
    let e = QM(), t = V(void 0);
    return $(() => {
        t.current && (t.current(), t.current = void 0)
    }), W((n, r, i, o, s) => {
        let a = ZM(n, r, e);
        if (a) {
            let l = new Promise(f => {
                t.current = f
            }), c = async () => {
                i(), await l
            }, u = async () => (await Wu({priority: "user-blocking", signal: s}).catch(Xm), HS(c, a, s));
            return o ? u() : HS(c, a)
        }
        i()
    }, [e])
}

function Nk(e) {
    let t = `${e}-start`, n = `${e}-end`, r = V(void 0);
    return AM(() => {
        r.current && (r.current(), r.current = void 0)
    }, void 0, {priority: "user-blocking"}), W(() => {
        let i = new Promise(o => {
            r.current = o
        });
        return performance.mark(t), i.finally(() => {
            performance.mark(n), performance.measure(e, t, n)
        }).catch(o => {
            console.error(o)
        })
    }, [e, t, n])
}

async function WS(e, t, {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a
}, l = !1, c = !1) {
    let {path: u} = t;
    if (!u) return;
    let f = Gu(t, {currentRoutePath: n, currentPathVariables: r, hash: i, pathVariables: o, preserveQueryParams: a}),
        d = F.location.href;
    try {
        return await Hk({routeId: e, hash: i, pathVariables: o, localeId: s}, f, l, c)
    } catch {
    }
}

function jk(e, t) {
    Pk(() => {
        let n = document.querySelector("link[rel='canonical']");
        if (!n) return;
        let r = new URL(e, t);
        r.search = "", n.setAttribute("href", r.toString())
    })
}

function gL(e) {
    let t = "routeId";
    return ve(e) && ce(e[t])
}

function vL(e, t, n = !1) {
    performance.mark("framer-history-replace"), (n ? F.history.__proto__.replaceState : F.history.replaceState).call(F.history, e, "", t)
}

var Kc = !0, US = (() => {
    if (typeof Re > "u") return !1;
    let e = Re.userAgent, t = e.indexOf("Chrome/"), n = +e.slice(t + 7, e.indexOf(".", t));
    return n > 101 && n < 128
})();

async function Hk(e, t, n = !1, r = !1) {
    if (n && await Wu({priority: "user-blocking"}), performance.mark("framer-history-push"), jk(t, F.location.href), !r) {
        F.history.pushState(e, "", t);
        return
    }
    let i = !1, o;
    Kc && (o = () => {
        var s;
        if (i = !0, US) return;
        let a = "Popstate called after intercept(). Please report this to the Framer team.";
        console.error(a), (s = F.__framer_events) == null || s.push(["published_site_load_recoverable_error", {
            message: a,
            userAgent: Re.userAgent
        }])
    }, F.addEventListener("popstate", o, {once: !0})), US && Kc ? F.history.__proto__.pushState.call(F.history, e, "", t) : F.history.pushState(e, "", t), Kc && queueMicrotask(() => {
        i || (Kc = !1, F.removeEventListener("popstate", o))
    })
}

function yL({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    ze(() => {
        e || (performance.mark("framer-history-set-initial-state"), vL({
            routeId: t,
            pathVariables: n,
            localeId: r
        }, void 0, !0))
    }, [])
}

function bL(e, t) {
    let n = $k(), r = Nk("framer-route-change-popstate"), i = V(void 0), o = W(async ({state: a}) => {
        var l, c, u, f, d, h;
        if ((l = F.navigation) != null && l.transition && ((u = (c = F.navigation) == null ? void 0 : c.transition) == null ? void 0 : u.navigationType) !== "traverse" || !ve(a)) return;
        let {routeId: v, hash: g, pathVariables: b, localeId: p} = a;
        if (!ce(v)) return;
        r();
        let m = () => {
            t(v, ce(p) ? p : void 0, ce(g) ? g : void 0, ve(b) ? b : void 0, !0, !1)
        };
        jk(F.location.href);
        let y = await n(e.current, v, m, !1);
        y ? y.updateCallbackDone.then((f = i.current) == null ? void 0 : f.resolve).catch((d = i.current) == null ? void 0 : d.reject) : (h = i.current) == null || h.resolve()
    }, [e, r, t, n]), s = W(a => {
        a.navigationType === "traverse" && a.intercept({
            async handler() {
                await new Promise((l, c) => {
                    i.current = {resolve: l, reject: c}
                }), i.current = void 0
            }, scroll: "after-transition"
        })
    }, []);
    $(() => {
        var a;
        return F.addEventListener("popstate", o), (a = F.navigation) == null || a.addEventListener("navigate", s), () => {
            var l;
            F.removeEventListener("popstate", o), (l = F.navigation) == null || l.removeEventListener("navigate", s)
        }
    }, [o, s])
}

function xL(e, t, n) {
    let r = Hu(t, e);
    if (!r) return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace(Gi, (o, s) => String(i[s] ?? o))
}

function Gu(e, {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
    onlyHash: l = !1
}) {
    let c = xL(r, e, o);
    if (l) return c ?? "";
    let u = t ?? "/";
    n && (u = u.replace(Gi, (v, g) => String(n[g] || v)));
    let d = e?.path ?? "/";
    i && (d = d.replace(Gi, (v, g) => String(i[g] || v)));
    let h = u === d && c;
    return s && (d = Lk(u, d)), (a || h) && (d = Ak(d)), c && (d = `${d}#${c}`), d
}

async function wL(e, t, n) {
    if (!e.path || !t) return !1;
    let i = `${n.slug ? `/${n.slug}` : ""}${Vk(e.path, t)}`;
    return (await fetch(i, {
        method: "HEAD",
        redirect: "manual"
    })).type === "opaqueredirect" ? (F.location.href = F.location.origin + i, !0) : !1
}

async function SL(e) {
    let t = await YM(e);
    if (t) {
        try {
            localStorage.setItem("preferredLocale", e.nextLocale.code)
        } catch {
        }
        try {
            if (!ce(t.path)) throw new Error("Expected result.path to be a string");
            if (t.isMissingInLocale && await wL(e.route, t.pathVariables, e.nextLocale)) return
        } catch {
        }
        return t
    }
}

function kL() {
    let e = V(Promise.resolve()), t = V(), n = W(r => {
        if (r.navigationType === "traverse") return;
        let i = t.current;
        i?.signal.addEventListener("abort", () => {
            i.abort("user aborted")
        }), r.intercept({handler: () => e.current})
    }, []);
    return W((r, i, o) => {
        if (!F.navigation) {
            i();
            return
        }
        e.current = r, t.current = o, F.navigation.addEventListener("navigate", n), i(!0), r.catch(Xm).finally(() => {
            F.navigation.removeEventListener("navigate", n)
        })
    }, [n])
}

var CL = async () => {
}, TL = {activeLocale: null, locales: [], setLocale: CL}, Wk = x.createContext(TL);

function Zm() {
    return x.useContext(Wk)
}

var Ta = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset"],
    Uk = e => {
        var t, n;
        (n = (t = e.target) == null ? void 0 : t.closest) != null && n.call(t, "#main") && (e.stopPropagation(), performance.mark("framer-react-event-handling-prevented"))
    }, Gk = !1;

function uH() {
    if (!Ta) return;
    Gk = !0, performance.mark("framer-react-event-handling-start");
    let e = {capture: !0};
    Ta.forEach(t => document.body.addEventListener(t, Uk, e))
}

function RL() {
    return $(() => {
        if (!Gk || !Ta) return;
        let e = {capture: !0};
        Ta.forEach(t => document.body.removeEventListener(t, Uk, e)), Ta = void 0, performance.mark("framer-react-event-handling-end")
    }, []), null
}

var Jm = !1;

function dH() {
    Jm = !0
}

function EL() {
    Jm = !1
}

function FL() {
    let e = V(typeof F > "u" || Jm);
    return $(() => {
        e.current = !1
    }, []), e
}

function Lr(e, t, n) {
    try {
        performance.measure(e, t, n)
    } catch (r) {
        console.warn(`Could not measure ${e}`, r)
    }
}

var ur = !1;

function pH() {
    ur = !0, performance.mark("framer-hydration-start")
}

var GS = !1, qS = !1, XS = !1;

function PL() {
    let e = "framer-hydration-router";
    et(() => {
        GS || !ur || (GS = !0, performance.mark(`${e}-insertion-effect`))
    }, []), ze(() => {
        qS || !ur || (qS = !0, performance.mark(`${e}-layout-effect`))
    }, []), $(() => {
        XS || !ur || (XS = !0, performance.mark(`${e}-effect`))
    }, [])
}

var YS = !1, KS = !1, QS = !1, qk = !1;

function _L() {
    let e = "framer-hydration-", t = `${e}layout-effects-end`, n = `${e}effects-end`, r = `${e}browser-render-start`,
        i = `${e}render-end`;
    return et(() => {
        YS || !ur || (YS = !0, performance.mark(i), Lr(`${e}render`, `${e}start`, i), performance.mark(`${e}insertion-effects-start`))
    }, []), ze(() => {
        if (!(KS || !ur)) {
            if (KS = !0, performance.mark(`${e}layout-effects-start`), document.visibilityState !== "visible") {
                qk = !0;
                return
            }
            requestAnimationFrame(() => {
                var o, s;
                performance.mark(r), Lr(`${e}uho`, ((o = performance.getEntriesByName(n)[0]) == null ? void 0 : o.name) ?? ((s = performance.getEntriesByName(t)[0]) == null ? void 0 : s.name), r)
            })
        }
    }, []), $(() => {
        var o;
        if (QS || !ur) return;
        QS = !0;
        let s = `${e}effects-start`;
        performance.mark(s), ((o = performance.getEntriesByName(r)[0]) == null ? void 0 : o.name) || (Lr(`${e}commit`, t, s), performance.mark(`${e}effects-sync`))
    }, []), null
}

var ZS = !1, JS = !1, e1 = !1;

function IL() {
    let e = "framer-hydration-", t = `${e}layout-effects-end`, n = `${e}effects-end`, r = `${e}browser-render-start`,
        i = `${e}start`, o = `${e}insertion-effects-end`, s = `${e}first-paint`, a = `${e}browser-raf-end`;
    return et(() => {
        ZS || !ur || (ZS = !0, performance.mark(o), Lr(`${e}insertion-effects`, `${e}insertion-effects-start`, o))
    }, []), ze(() => {
        JS || !ur || (JS = !0, performance.mark(t), Lr(`${e}layout-effects`, `${e}layout-effects-start`, t), !(qk || document.visibilityState !== "visible") && requestAnimationFrame(() => {
            performance.mark(a), Lr(`${e}raf`, r, a), Fk(() => {
                performance.mark(s), Lr(`${e}time-to-first-paint`, i, s), Lr(`${e}browser-render`, a, s)
            })
        }))
    }, []), $(() => {
        var l, c;
        e1 || !ur || (e1 = !0, performance.mark(n), Lr(`${e}effects`, ((l = performance.getEntriesByName(s)[0]) == null ? void 0 : l.name) ?? ((c = performance.getEntriesByName(`${e}effects-start`)[0]) == null ? void 0 : c.name), n))
    }, []), null
}

function OL() {
    return _L(), null
}

function ML() {
    return IL(), null
}

var t1 = {Start: OL, End: ML};

function _m(e, t) {
    let n = {style: t, "data-framer-root": !0};
    return x.isValidElement(e) ? x.cloneElement(e, n) : x.createElement(e, n)
}

var LL = class extends Error {
}, lu = class extends Error {
    constructor() {
        super(...arguments), T(this, "cause")
    }
}, VL = class extends Se {
    constructor(e) {
        super(e), this.state = {error: void 0, forceUpdateKey: e.forceUpdateKey}
    }

    static getDerivedStateFromError(e) {
        return {error: e}
    }

    static getDerivedStateFromProps(e, t) {
        if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = {forceUpdateKey: e.forceUpdateKey};
            return t.error && (n.error = void 0), n
        }
        return null
    }

    render() {
        if (this.state.error === void 0) return this.props.children;
        if (!(this.state.error instanceof LL)) {
            let n = new lu;
            throw n.cause = this.state.error, n
        }
        let {notFoundPage: e, defaultPageStyle: t} = this.props;
        if (!e) throw this.state.error;
        return _m(e, t)
    }
}, Qc, im, n1;

function AL(e) {
    if (n1 !== e) {
        Qc = {};
        for (let [t, {path: n}] of Object.entries(e)) n && (Qc[n] = {path: n, depth: DL(n), routeId: t});
        im = Object.values(Qc), im.sort(({depth: t}, {depth: n}) => n - t), n1 = e
    }
    return [Qc, im]
}

function Xk(e, t, n = !0, r = []) {
    let [i, o] = AL(e), s, a, l = t;
    if (r.length > 0) {
        let d = l.split("/").find(Boolean);
        if (d && (s = r.find(({slug: h}) => h === d), s && (a = s.id, l = l.substring(s.slug.length + 1))), !a) {
            let h = r.find(({slug: v}) => v === "");
            h && (a = h.id)
        }
    }
    let c = i[l];
    if (c) {
        let d = r1(l, c.path);
        if (d.isMatch) return {routeId: c.routeId, localeId: a, pathVariables: d.pathVariables}
    }
    for (let {path: d, routeId: h} of o) {
        let v = r1(l, d);
        if (v.isMatch) return {routeId: h, localeId: a, pathVariables: v.pathVariables}
    }
    if (!n) throw new Error("No exact match found for path");
    let u = i["/"];
    if (u) return {routeId: u.routeId, localeId: a};
    let f = Object.keys(e)[0];
    if (!f) throw new Error("Router should not have undefined routes");
    return {routeId: f, localeId: a}
}

function DL(e) {
    let t = e.replace(/^\/|\/$/gu, "");
    return t === "" ? 0 : t.split("/").length
}

function r1(e, t) {
    let n = [], i = zL(t).replace(Gi, (c, u) => (n.push(u), "([^/]+)")), o = new RegExp(i + "$"), s = e.match(o);
    if (!s) return {isMatch: !1};
    if (s.length === 1) return {isMatch: !0};
    let a = {}, l = s.slice(1);
    for (let c = 0; c < n.length; ++c) {
        let u = n[c];
        if (u === void 0) continue;
        let f = l[c], d = a[u];
        if (d) {
            if (d !== f) return {isMatch: !1};
            continue
        }
        if (f === void 0) throw new Error("Path variable values cannot be undefined");
        a[u] = f
    }
    return {isMatch: !0, pathVariables: a}
}

function zL(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d")
}

var i1 = new Set;

function Ea(e, ...t) {
    i1.has(e) || (i1.add(e), console.warn(e, ...t))
}

function Yk(e, t, n) {
    let r = n ? `, use ${n} instead` : "", i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    Ea(i)
}

var Kk = class {
    constructor() {
        T(this, "observers", new Set), T(this, "transactions", {})
    }

    add(e) {
        this.observers.add(e);
        let t = !1;
        return () => {
            t || (t = !0, this.remove(e))
        }
    }

    remove(e) {
        this.observers.delete(e)
    }

    notify(e, t) {
        if (t) {
            let n = this.transactions[t] || e;
            n.value = e.value, this.transactions[t] = n
        } else this.callObservers(e)
    }

    finishTransaction(e) {
        let t = this.transactions[e];
        return delete this.transactions[e], this.callObservers(t, e)
    }

    callObservers(e, t) {
        let n = [];
        return new Set(this.observers).forEach(r => {
            typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish))
        }), n
    }
}, nt = (() => {
    function e(t) {
        return Yk("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"), Nt(t) ? t : new $L(t)
    }

    return e.transaction = t => {
        let n = Math.random(), r = new Set;
        t((s, a) => {
            s.set(a, n), r.add(s)
        }, n);
        let o = [];
        r.forEach(s => {
            o.push(...s.finishTransaction(n))
        }), o.forEach(s => {
            s(n)
        })
    }, e.getNumber = (t, n = 0) => e.get(t, n), e.get = (t, n) => t == null ? n : Nt(t) ? t.get() : t, e.objectToValues = t => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
            let i = t[r];
            Nt(i) ? n[r] = i.get() : n[r] = i
        }
        return n
    }, e
})(), o1 = "onUpdate", s1 = "finishTransaction";

function Nt(e) {
    return e !== null && typeof e == "object" && o1 in e && e[o1] instanceof Function && s1 in e && e[s1] instanceof Function
}

function BL(e, t) {
    return {
        interpolate(n, r) {
            let i = n.get(), o = r.get(), s = nt(i);
            return a => {
                let l = t.interpolate(i, o)(a);
                return s.set(l), s
            }
        }, difference(n, r) {
            let i = n.get();
            return t.difference(i, r.get())
        }
    }
}

var $L = class {
    constructor(e) {
        this.value = e, T(this, "observers", new Kk)
    }

    static interpolationFor(e, t) {
        if (Nt(e)) return BL(e, t)
    }

    get() {
        return this.value
    }

    set(e, t) {
        let n = this.value;
        Nt(e) && (e = e.get()), this.value = e;
        let r = {value: e, oldValue: n};
        this.observers.notify(r, t)
    }

    finishTransaction(e) {
        return this.observers.finishTransaction(e)
    }

    onUpdate(e) {
        return this.observers.add(e)
    }
};

function Zc(e, t) {
    let r = 10 ** Math.round(Math.abs(t));
    return Math.round(e * r) / r
}

function a1(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0, t < 0 && (t = 1 - t), Math.round(e - t) + t)
}

function Qe(e, t) {
    return {x: e, y: t}
}

(e => {
    e.isQuadrilateralPoints = i => i?.length === 4, e.add = (...i) => i.reduce((o, s) => ({
        x: o.x + s.x,
        y: o.y + s.y
    }), {x: 0, y: 0}), e.subtract = (i, o) => ({x: i.x - o.x, y: i.y - o.y}), e.multiply = (i, o) => ({
        x: i.x * o,
        y: i.y * o
    }), e.divide = (i, o) => ({x: i.x / o, y: i.y / o}), e.absolute = i => ({
        x: Math.abs(i.x),
        y: Math.abs(i.y)
    }), e.reverse = i => ({x: i.x * -1, y: i.y * -1}), e.pixelAligned = (i, o = {x: 0, y: 0}) => ({
        x: a1(i.x, o.x),
        y: a1(i.y, o.y)
    }), e.distance = (i, o) => {
        let s = Math.abs(i.x - o.x), a = Math.abs(i.y - o.y);
        return Math.sqrt(s * s + a * a)
    }, e.angle = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI - 90, e.angleFromX = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI, e.isEqual = (i, o) => i.x === o.x && i.y === o.y, e.rotationNormalizer = () => {
        let i;
        return o => {
            typeof i != "number" && (i = o);
            let s = i - o, a = Math.abs(s) + 180, l = Math.floor(a / 360);
            return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), i = o, o
        }
    };

    function t(i, o) {
        return {x: (i.x + o.x) / 2, y: (i.y + o.y) / 2}
    }

    e.center = t;

    function n(i) {
        let o = 0, s = 0;
        i.forEach(c => {
            o += c.x, s += c.y
        });
        let a = o / i.length, l = s / i.length;
        return {x: a, y: l}
    }

    e.centroid = n;

    function r(i) {
        let o = e.centroid(i), s = new Map;
        for (let a = 0; a < i.length; a++) {
            let l = i[a];
            l && s.set(l, Math.atan2(l.y - o.y, l.x - o.x))
        }
        return i.sort((a, l) => (s.get(a) ?? 0) - (s.get(l) ?? 0))
    }

    e.sortClockwise = r
})(Qe || (Qe = {}));
var NL = {curve: "ease", duration: 1};

function jL(e) {
    switch (e) {
        case"linear":
            return [0, 0, 1, 1];
        case"ease":
            return [.25, .1, .25, 1];
        case"ease-in":
            return [.42, 0, 1, 1];
        case"ease-out":
            return [0, 0, .58, 1];
        case"ease-in-out":
            return [.42, 0, .58, 1]
    }
}

var Qk = class {
    constructor(e, t) {
        this.interpolation = t, T(this, "unitBezier"), T(this, "options"), T(this, "current"), T(this, "destination"), T(this, "interpolator"), T(this, "progress", 0), T(this, "next", a => {
            let {duration: l} = this.options;
            this.progress += a / l;
            let c = this.unitBezier.solve(this.progress, this.solveEpsilon(l));
            return this.current = this.interpolator(c), this.current
        }), this.options = {...NL, ...e};
        let n;
        typeof this.options.curve == "string" ? n = jL(this.options.curve) : n = this.options.curve;
        let [r, i, o, s] = n;
        this.unitBezier = new HL(Qe(r, i), Qe(o, s))
    }

    setFrom(e) {
        this.current = e, this.updateInterpolator()
    }

    setTo(e) {
        this.destination = e, this.updateInterpolator()
    }

    isReady() {
        return this.interpolator !== void 0
    }

    updateInterpolator() {
        this.current === void 0 || this.destination === void 0 || (this.interpolator = this.interpolation.interpolate(this.current, this.destination))
    }

    isFinished() {
        return this.progress >= 1
    }

    solveEpsilon(e) {
        return 1 / (200 * e)
    }
}, HL = class {
    constructor(e, t) {
        T(this, "a"), T(this, "b"), T(this, "c"), this.c = Qe.multiply(e, 3), this.b = Qe.subtract(Qe.multiply(Qe.subtract(t, e), 3), this.c), this.a = Qe.subtract(Qe.subtract(Qe(1, 1), this.c), this.b)
    }

    solve(e, t) {
        return this.sampleY(this.solveForT(e, t))
    }

    sampleX(e) {
        return ((this.a.x * e + this.b.x) * e + this.c.x) * e
    }

    sampleY(e) {
        return ((this.a.y * e + this.b.y) * e + this.c.y) * e
    }

    sampleDerivativeX(e) {
        return (3 * this.a.x * e + 2 * this.b.x) * e + this.c.x
    }

    solveForT(e, t) {
        let n, r, i, o, s, a;
        for (i = e, a = 0; a < 8; ++a) {
            if (o = this.sampleX(i) - e, Math.abs(o) < t) return i;
            if (s = this.sampleDerivativeX(i), Math.abs(s) < t) break;
            i = i - o / s
        }
        if (n = 0, r = 1, i = e, i < n) return n;
        if (i > r) return r;
        for (; n < r;) {
            if (o = this.sampleX(i), Math.abs(o - e) < t) return i;
            e > o ? n = i : r = i, i = (r - n) * .5 + n
        }
        return i
    }
}, WL = class {
    constructor(e) {
        T(this, "accelerationForState"), this.accelerationForState = e
    }

    integrateState(e, t) {
        let n = this.evaluateState(e), r = this.evaluateStateWithDerivative(e, t * .5, n),
            i = this.evaluateStateWithDerivative(e, t * .5, r), o = this.evaluateStateWithDerivative(e, t, i),
            s = 1 / 6 * (n.dx + 2 * (r.dx + i.dx) + o.dx), a = 1 / 6 * (n.dv + 2 * (r.dv + i.dv) + o.dv);
        return e.x = e.x + s * t, e.v = e.v + a * t, e
    }

    evaluateState(e) {
        let t = this.accelerationForState(e);
        return {dx: e.v, dv: t}
    }

    evaluateStateWithDerivative(e, t, n) {
        let r = {x: e.x + n.dx * t, v: e.v + n.dv * t};
        return {dx: r.v, dv: this.accelerationForState(r)}
    }
};

function UL(e) {
    return typeof e == "function" && e.interpolationFor && typeof e.interpolationFor == "function"
}

var Ma = {handleUndefined: (e, t) => (e === void 0 && (e = t), t === void 0 && (t = e), [e, t])}, GL = {
    interpolate(e, t) {
        [e, t] = Ma.handleUndefined(e, t);
        let n = +e, r = t - n;
        return i => n + r * i
    }, difference(e, t) {
        return t - e
    }
}, Jc = .001, qL = .01, XL = 10, YL = (() => Number.MIN_VALUE)(), KL = 1;

function QL(e, t, n, r = 12) {
    let i = n;
    for (let o = 1, s = r, a = 1 <= s; a ? o < s : o > s; a ? o++ : o--) i = i - e(i) / t(i);
    return i
}

function l1(e, t) {
    return e * Math.sqrt(1 - Math.pow(t, 2))
}

var Zk = {
        computeDampingRatio: (e, t, n = 1) => t / (2 * Math.sqrt(n * e)), computeDuration: (e, t, n = 0, r = 1) => {
            let i, o = Zk.computeDampingRatio(e, t), s = Math.sqrt(e / r);
            if (o < 1) {
                let a = Math.sqrt(1 - Math.pow(o, 2)), l = n / (a * s), c = o / a, u = -((l - c) / Jc);
                if (u <= 0) return null;
                i = Math.log(u) / (o * s)
            } else return null;
            return i
        }, computeDerivedCurveOptions: (e, t, n = 0, r = 1) => {
            let i, o;
            e = Math.max(Math.min(e, KL), YL), t = Math.max(Math.min(t, XL), qL), e < 1 ? (o = function (c) {
                let u = c * e, f = u * t, d = u - n, h = l1(c, e), v = Math.exp(-f);
                return Jc - d / h * v
            }, i = function (c) {
                let f = c * e * t, d = f * n + n, h = Math.pow(e, 2) * Math.pow(c, 2) * t, v = Math.exp(-f),
                    g = l1(Math.pow(c, 2), e);
                return (-o(c) + Jc > 0 ? -1 : 1) * ((d - h) * v) / g
            }) : (o = function (c) {
                let u = Math.exp(-c * t), f = (c - n) * t + 1;
                return -Jc + u * f
            }, i = function (c) {
                let u = Math.exp(-c * t), f = (n - c) * Math.pow(t, 2);
                return u * f
            });
            let s = {tension: 100, friction: 10, velocity: n}, a = 5 / t, l = QL(o, i, a);
            return Number.isNaN(l) || (s.tension = Math.pow(l, 2) * r, s.friction = e * 2 * Math.sqrt(r * s.tension)), s
        }
    }, ZL = (() => ({tension: 500, friction: 10, tolerance: 1 / 1e4, velocity: 0}))(),
    JL = {dampingRatio: 1, duration: 1, velocity: 0, mass: 1};

function eV(e) {
    return e ? typeof e.dampingRatio == "number" || typeof e.duration == "number" || typeof e.mass == "number" : !1
}

var tV = class {
    constructor(e, t) {
        this.interpolation = t, T(this, "options"), T(this, "current"), T(this, "destination"), T(this, "difference"), T(this, "state"), T(this, "integrator"), T(this, "interpolator");
        let n;
        if (eV(e)) {
            let r = {...JL, ...e};
            n = Zk.computeDerivedCurveOptions(r.dampingRatio, r.duration, r.velocity, r.mass)
        } else n = e;
        this.options = {...ZL, ...n}, this.state = {
            x: 0,
            v: this.options.velocity
        }, this.integrator = new WL(r => -this.options.tension * r.x - this.options.friction * r.v)
    }

    isReady() {
        return this.interpolator !== void 0 && this.difference !== void 0
    }

    next(e) {
        return this.state = this.integrator.integrateState(this.state, e), this.interpolator(this.progress())
    }

    isFinished() {
        let e = Math.abs(this.state.x) < this.options.tolerance, t = Math.abs(this.state.v) < this.options.tolerance;
        return e && t
    }

    setFrom(e) {
        this.current = e, this.updateInterpolator()
    }

    setVelocity(e) {
        this.state.v = e
    }

    progress() {
        return 1 - this.state.x / this.difference
    }

    setTo(e) {
        this.destination = e, this.difference = this.interpolation.difference(this.destination, this.current), this.state.x = this.difference, this.updateInterpolator()
    }

    getState() {
        return this.state
    }

    updateInterpolator() {
        this.current === void 0 || this.destination === void 0 || (this.interpolator = this.interpolation.interpolate(this.current, this.destination))
    }
};
var Im = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

function di(e, t, n, r = !1) {
    let [i, o] = t, [s, a] = n, l = o - i;
    if (l === 0) return (a + s) / 2;
    let c = a - s;
    if (c === 0) return s;
    let u = s + (e - i) / l * c;
    if (r === !0) if (s < a) {
        if (u < s) return s;
        if (u > a) return a
    } else {
        if (u > s) return s;
        if (u < a) return a
    }
    return u
}

function Qo(e) {
    return !Number.isNaN(e) && Number.isFinite(e)
}

function hi(e) {
    let t = Om(e);
    return t !== void 0 ? e.includes("%") ? t / 100 : t : 0
}

function Om(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}

var nV = (() => PM().Hsluv)(), Kt = new nV;

function rV(e, t, n) {
    return Kt.rgb_r = e / 255, Kt.rgb_g = t / 255, Kt.rgb_b = n / 255, Kt.rgbToHsluv(), {
        h: Kt.hsluv_h,
        s: Kt.hsluv_s,
        l: Kt.hsluv_l
    }
}

function iV(e, t, n, r = 1) {
    return Kt.hsluv_h = e, Kt.hsluv_s = t, Kt.hsluv_l = n, Kt.hsluvToRgb(), {
        r: Kt.rgb_r * 255,
        g: Kt.rgb_g * 255,
        b: Kt.rgb_b * 255,
        a: r
    }
}

function eu(e, t, n, r) {
    let i = Math.round(e), o = Math.round(t * 100), s = Math.round(n * 100);
    return r === void 0 || r === 1 ? "hsv(" + i + ", " + o + "%, " + s + "%)" : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")"
}

function oV(e, t, n) {
    return {r: Qo(e) ? jt(e, 255) * 255 : 0, g: Qo(t) ? jt(t, 255) * 255 : 0, b: Qo(n) ? jt(n, 255) * 255 : 0}
}

function c1(e, t, n, r) {
    let i = [sm(Math.round(e).toString(16)), sm(Math.round(t).toString(16)), sm(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}

function eg(e, t, n) {
    let r, i, o = jt(e, 255), s = jt(t, 255), a = jt(n, 255), l = Math.max(o, s, a), c = Math.min(o, s, a),
        u = i = r = (l + c) / 2;
    if (l === c) u = i = 0; else {
        let f = l - c;
        switch (i = r > .5 ? f / (2 - l - c) : f / (l + c), l) {
            case o:
                u = (s - a) / f + (s < a ? 6 : 0);
                break;
            case s:
                u = (a - o) / f + 2;
                break;
            case a:
                u = (o - s) / f + 4;
                break
        }
        u /= 6
    }
    return {h: u * 360, s: i, l: r}
}

function om(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function sV(e, t, n) {
    let r, i, o;
    if (e = jt(e, 360), t = jt(t * 100, 100), n = jt(n * 100, 100), t === 0) r = i = o = n; else {
        let s = n < .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
        r = om(a, s, e + 1 / 3), i = om(a, s, e), o = om(a, s, e - 1 / 3)
    }
    return {r: r * 255, g: i * 255, b: o * 255}
}

function u1(e, t, n) {
    e = jt(e, 255), t = jt(t, 255), n = jt(n, 255);
    let r = Math.max(e, t, n), i = Math.min(e, t, n), o = r - i, s, a = r === 0 ? 0 : o / r, l = r;
    if (r === i) s = 0; else {
        switch (r) {
            case e:
                s = (t - n) / o + (t < n ? 6 : 0);
                break;
            case t:
                s = (n - e) / o + 2;
                break;
            case n:
                s = (e - t) / o + 4;
                break
        }
        s /= 6
    }
    return {h: s, s: a, v: l}
}

function aV(e, t, n) {
    e = jt(e, 360) * 6, t = jt(t * 100, 100), n = jt(n * 100, 100);
    let r = Math.floor(e), i = e - r, o = n * (1 - t), s = n * (1 - i * t), a = n * (1 - (1 - i) * t), l = r % 6,
        c = [n, s, o, o, a, n][l], u = [a, n, n, s, o, o][l], f = [o, o, a, n, n, s][l];
    return {r: c * 255, g: u * 255, b: f * 255}
}

function jt(e, t) {
    let n, r;
    if (typeof t == "string" ? n = parseFloat(t) : n = t, typeof e == "string") {
        lV(e) && (e = "100%");
        let i = cV(e);
        r = Math.min(n, Math.max(0, parseFloat(e))), i && (r = Math.floor(r * n) / 100)
    } else r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}

function lV(e) {
    return typeof e == "string" && e.includes(".") && parseFloat(e) === 1
}

function cV(e) {
    return typeof e == "string" && e.includes("%")
}

function sm(e) {
    return e.length === 1 ? "0" + e : "" + e
}

var sr = (() => {
    let e = "[-\\+]?\\d+%?", n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
        r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
        i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
    return {
        rgb: new RegExp("rgb" + r),
        rgba: new RegExp("rgba" + i),
        hsl: new RegExp("hsl" + r),
        hsla: new RegExp("hsla" + i),
        hsv: new RegExp("hsv" + r),
        hsva: new RegExp("hsva" + i),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu
    }
})();

function tg(e) {
    if (e.includes("gradient(") || e.includes("var(")) return !1;
    let t = /^[\s,#]+/u, n = e.replace(t, "").trimEnd().toLowerCase(), r = Im[n];
    if (r && (n = r), n === "transparent") return {r: 0, g: 0, b: 0, a: 0, format: "name"};
    let i;
    return (i = sr.rgb.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb"
    } : (i = sr.rgba.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb"
    } : (i = sr.hsl.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: hi(i[2] ?? ""),
        l: hi(i[3] ?? ""),
        a: 1,
        format: "hsl"
    } : (i = sr.hsla.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: hi(i[2] ?? ""),
        l: hi(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl"
    } : (i = sr.hsv.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: hi(i[2] ?? ""),
        v: hi(i[3] ?? ""),
        a: 1,
        format: "hsv"
    } : (i = sr.hsva.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: hi(i[2] ?? ""),
        v: hi(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv"
    } : (i = sr.hex8.exec(n)) ? {
        r: fn(i[1] ?? ""),
        g: fn(i[2] ?? ""),
        b: fn(i[3] ?? ""),
        a: f1(i[4] ?? ""),
        format: r ? "name" : "hex"
    } : (i = sr.hex6.exec(n)) ? {
        r: fn(i[1] ?? ""),
        g: fn(i[2] ?? ""),
        b: fn(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex"
    } : (i = sr.hex4.exec(n)) ? {
        r: fn(`${i[1]}${i[1]}`),
        g: fn(`${i[2]}${i[2]}`),
        b: fn(`${i[3]}${i[3]}`),
        a: f1(i[4] + "" + i[4]),
        format: r ? "name" : "hex"
    } : (i = sr.hex3.exec(n)) ? {
        r: fn(`${i[1]}${i[1]}`),
        g: fn(`${i[2]}${i[2]}`),
        b: fn(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex"
    } : !1
}

function fn(e) {
    return parseInt(e, 16)
}

function f1(e) {
    return fn(e) / 255
}

var d1 = new Map, U = (() => {
    function e(o, s, a, l) {
        if (typeof o == "string") {
            let u = d1.get(o);
            return u || (u = t(o), u === void 0 ? {...e("black"), isValid: !1} : (d1.set(o, u), u))
        }
        let c = t(o, s, a, l);
        return c !== void 0 ? c : {...e("black"), isValid: !1}
    }

    function t(o, s, a, l) {
        if (o === "") return;
        let c = uV(o, s, a, l);
        if (c) {
            let u = {
                r: c.r,
                g: c.g,
                b: c.b,
                a: c.a,
                h: c.h,
                s: c.s,
                l: c.l,
                initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
                roundA: Math.round(100 * c.a) / 100,
                format: c.format,
                mix: e.mix,
                toValue: () => e.toRgbString(u)
            };
            return u
        } else return
    }

    let n = {
        isRGB(o) {
            return o === "rgb" || o === "rgba"
        }, isHSL(o) {
            return o === "hsl" || o === "hsla"
        }
    };
    e.inspect = (o, s) => o.format === "hsl" ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>` : o.format === "hex" || o.format === "name" ? `<${o.constructor.name} "${s}">` : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`, e.isColor = o => typeof o == "string" ? e.isColorString(o) : e.isColorObject(o), e.isColorString = o => typeof o == "string" ? tg(o) !== !1 : !1, e.isColorObject = o => o && typeof o != "string" && typeof o.r == "number" && typeof o.g == "number" && typeof o.b == "number" && typeof o.h == "number" && typeof o.s == "number" && typeof o.l == "number" && typeof o.a == "number" && typeof o.roundA == "number" && typeof o.format == "string", e.toString = o => e.toRgbString(o), e.toHex = (o, s = !1) => c1(o.r, o.g, o.b, s), e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`, e.toRgbString = o => o.a === 1 ? "rgb(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ")" : "rgba(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ", " + o.roundA + ")", e.toHusl = o => ({
        ...rV(o.r, o.g, o.b),
        a: o.roundA
    }), e.toHslString = o => {
        let s = e.toHsl(o), a = Math.round(s.h), l = Math.round(s.s * 100), c = Math.round(s.l * 100);
        return o.a === 1 ? "hsl(" + a + ", " + l + "%, " + c + "%)" : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }, e.toHsv = o => {
        let s = u1(o.r, o.g, o.b);
        return {h: s.h * 360, s: s.s, v: s.v, a: o.a}
    }, e.toHsvString = o => {
        let s = u1(o.r, o.g, o.b), a = Math.round(s.h * 360), l = Math.round(s.s * 100), c = Math.round(s.v * 100);
        return o.a === 1 ? "hsv(" + a + ", " + l + "%, " + c + "%)" : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }, e.toName = o => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = c1(o.r, o.g, o.b, !0);
        for (let a of Object.keys(Im)) if (Im[a] === s) return a;
        return !1
    }, e.toHsl = o => ({h: Math.round(o.h), s: o.s, l: o.l, a: o.a}), e.toRgb = o => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a
    }), e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(s / 100)))), a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(s / 100)))), a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(s / 100)))), e(a)
    }, e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.l += s / 100, a.l = Math.min(1, Math.max(0, a.l)), e(a)
    }, e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.l -= s / 100, a.l = Math.min(1, Math.max(0, a.l)), e(a)
    }, e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.s += s / 100, a.s = Math.min(1, Math.max(0, a.s)), e(a)
    }, e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.s -= s / 100, a.s = Math.min(1, Math.max(0, a.s)), e(a)
    }, e.grayscale = o => e.desaturate(o, 100), e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return a.h += s, a.h = a.h > 360 ? a.h - 360 : a.h, e(a)
    }, e.alpha = (o, s = 1) => e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: s
    }), e.transparent = o => e.alpha(o, 0), e.multiplyAlpha = (o, s = 1) => e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: o.a * s
    }), e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s)) throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return l => e.mixAsColor(o, s, l, !1, a)
    }, e.mix = (o, s, {model: a = "rgb"} = {}) => {
        let l = typeof o == "string" ? e(o) : o, c = e.interpolate(l, s, a);
        return u => e.toRgbString(c(u))
    }, e.mixAsColor = (o, s, a = .5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c)) u = e({
            r: di(a, [0, 1], [o.r, s.r], l),
            g: di(a, [0, 1], [o.g, s.g], l),
            b: di(a, [0, 1], [o.b, s.b], l),
            a: di(a, [0, 1], [o.a, s.a], l)
        }); else {
            let f, d;
            n.isHSL(c) ? (f = e.toHsl(o), d = e.toHsl(s)) : (f = e.toHusl(o), d = e.toHusl(s)), f.s === 0 ? f.h = d.h : d.s === 0 && (d.h = f.h);
            let h = f.h, v = d.h, g = v - h;
            g > 180 ? g = v - 360 - h : g < -180 && (g = v + 360 - h);
            let b = {
                h: di(a, [0, 1], [h, h + g], l),
                s: di(a, [0, 1], [f.s, d.s], l),
                l: di(a, [0, 1], [f.l, d.l], l),
                a: di(a, [0, 1], [o.a, s.a], l)
            };
            n.isHSL(c) ? u = e(b) : u = e(iV(b.h, b.s, b.l, b.a))
        }
        return u
    }, e.random = (o = 1) => {
        function s() {
            return Math.floor(Math.random() * 255)
        }

        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")")
    }, e.grey = (o = .5, s = 1) => (o = Math.floor(o * 255), e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")), e.gray = e.grey, e.rgbToHsl = (o, s, a) => eg(o, s, a), e.isValidColorProperty = (o, s) => !!((o.toLowerCase().slice(-5) === "color" || o === "fill" || o === "stroke") && typeof s == "string" && e.isColorString(s)), e.difference = (o, s) => {
        let a = (o.r + s.r) / 2, l = o.r - s.r, c = o.g - s.g, u = o.b - s.b, f = Math.pow(l, 2), d = Math.pow(c, 2),
            h = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * h + a * (f - h) / 256)
    }, e.equal = (o, s, a = .1) => !(Math.abs(o.r - s.r) >= a || Math.abs(o.g - s.g) >= a || Math.abs(o.b - s.b) >= a || Math.abs(o.a - s.a) * 256 >= a);
    let r = ho([0, 255], [0, 1]);

    function i(o) {
        o = r(o);
        let s = Math.abs(o);
        return s < .04045 ? o / 12.92 : (Math.sign(o) || 1) * Math.pow((s + .055) / 1.055, 2.4)
    }

    return e.luminance = o => {
        let {r: s, g: a, b: l} = e.toRgb(o);
        return .2126 * i(s) + .7152 * i(a) + .0722 * i(l)
    }, e.contrast = (o, s) => {
        let a = e.luminance(o), l = e.luminance(s);
        return (Math.max(a, l) + .05) / (Math.min(a, l) + .05)
    }, e
})();

function uV(e, t, n, r = 1) {
    let i;
    return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof n == "number" && !Number.isNaN(n) ? i = Mm({
        r: e,
        g: t,
        b: n,
        a: r
    }) : typeof e == "string" ? i = fV(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? i = Mm(e) : i = Jk(e)), i
}

function fV(e) {
    let t = tg(e);
    if (t) return t.format === "hsl" ? Jk(t) : t.format === "hsv" ? dV(t) : Mm(t)
}

function dV(e) {
    let t = aV(e.h, e.s, e.v);
    return {...eg(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? eC(e.a) : 1}
}

function Mm(e) {
    let t = oV(e.r, e.g, e.b);
    return {...eg(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? eC(e.a) : 1}
}

function Jk(e) {
    let t, n, r, i = {r: 0, g: 0, b: 0}, o = {h: 0, s: 0, l: 0};
    return t = Qo(e.h) ? e.h : 0, t = (t + 360) % 360, n = Qo(e.s) ? e.s : 1, typeof e.s == "string" && (n = Om(e.s)), r = Qo(e.l) ? e.l : .5, typeof e.l == "string" && (r = Om(e.l)), i = sV(t, n, r), o = {
        h: t,
        s: n,
        l: r
    }, {...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl"}
}

function eC(e) {
    return e = parseFloat(e), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e
}

var hV = (e = "husl") => ({
    interpolate(t, n) {
        return [t, n] = Ma.handleUndefined(t, n), U.interpolate(U(t), U(n), e)
    }, difference(t, n) {
        return U.difference(U(t), U(n))
    }
}), am = {
    interpolate(e, t) {
        return [e, t] = Ma.handleUndefined(e, t), n => n < .5 ? e : t
    }, difference(e, t) {
        return e === t ? 0 : 1
    }
}, pV = e => ({
    interpolate(t, n) {
        [t, n] = Ma.handleUndefined(t, n);
        let r = Object.assign({}, t), i = {}, o = new Set;
        for (let s in t) i[s] = e.interpolate(t[s], n[s]), o.add(s);
        for (let s in n) o.has(s) || (i[s] = e.interpolate(t[s], n[s]), o.add(s));
        return s => {
            for (let a in i) r[a] = i[a](s);
            return r
        }
    }, difference(t, n) {
        let r = 0;
        for (let i in t) {
            let o = e.difference(t[i], n[i]);
            r += Math.pow(o, 2)
        }
        return Math.sqrt(r)
    }
}), h1 = {colorModel: "husl"}, tC = class {
    constructor(e = h1) {
        T(this, "options"), T(this, "interpolate", (t, n) => ([t, n] = Ma.handleUndefined(t, n), this.interPolationForValue(t).interpolate(t, n))), T(this, "difference", (t, n) => this.interPolationForValue(t).difference(t, n)), this.options = {...h1, ...e}
    }

    interPolationForValue(e) {
        let t = typeof e;
        if (t === "number") return GL;
        if (t === "boolean" || t === "function") return am;
        if (U.isColor(e)) return hV(this.options.colorModel);
        if (t === "object") {
            if (e === null) return am;
            let n = e.constructor;
            if (n && UL(n)) {
                let r = n.interpolationFor(e, this);
                if (r && r !== this && r.constructor !== tC) return r
            }
            return pV(this)
        }
        return console.warn(`No interpolation defined for ${e}`), am
    }
};
var bu = e => e instanceof vl, mV = (() => ({delta: 1 / 60, maxValues: 1e4}))(), gV = class {
    constructor(e) {
        T(this, "animator"), T(this, "values"), T(this, "currentTime", 0), T(this, "totalTime"), T(this, "options"), this.options = {...mV, ...e}, this.animator = e.animator
    }

    preCalculate() {
        if (!this.animator.isReady()) return;
        let {delta: e} = this.options;
        for (this.values = []; !this.animator.isFinished() && this.values.length < this.options.maxValues;) {
            let t = this.animator.next(this.options.delta);
            typeof t == "object" && t && (t = {...t}), this.values.push(t)
        }
        this.totalTime = this.values.length * e
    }

    indexForTime(e) {
        return Math.max(0, Math.min(this.values.length - 1, Math.round(this.values.length * (e / this.totalTime)) - 1))
    }

    valueForTime(e) {
        let t = this.indexForTime(e);
        return this.values[t]
    }

    setFrom(e) {
        this.animator.setFrom(e), this.preCalculate()
    }

    setTo(e) {
        this.animator.setTo(e), this.preCalculate()
    }

    isReady() {
        return this.values !== void 0 && this.values.length > 0 && this.totalTime > 0
    }

    next(e) {
        return this.currentTime += e, this.valueForTime(this.currentTime)
    }

    isFinished() {
        return this.totalTime === 0 || this.currentTime >= this.totalTime
    }

    get endValue() {
        this.preCalculate();
        let e = this.valueForTime(this.totalTime);
        return this.values.length > 0 ? e : this.animator.next(0)
    }
}, vV = (() => _M().EventEmitter)(), yV = class {
    constructor() {
        T(this, "_emitter", new vV)
    }

    eventNames() {
        return this._emitter.eventNames()
    }

    eventListeners() {
        let e = {};
        for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
        return e
    }

    on(e, t) {
        this.addEventListener(e, t, !1, !1, this)
    }

    off(e, t) {
        this.removeEventListeners(e, t)
    }

    once(e, t) {
        this.addEventListener(e, t, !0, !1, this)
    }

    unique(e, t) {
        this.addEventListener(e, t, !1, !0, this)
    }

    addEventListener(e, t, n, r, i) {
        if (r) {
            for (let o of this._emitter.eventNames()) if (t === this._emitter.listeners(o)) return
        }
        n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i)
    }

    removeEventListeners(e, t) {
        e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners()
    }

    removeAllEventListeners() {
        this._emitter.removeAllListeners()
    }

    countEventListeners(e, t) {
        if (e) return this._emitter.listeners(e).length;
        {
            let n = 0;
            for (let r of this._emitter.eventNames()) n += this._emitter.listeners(r).length;
            return n
        }
    }

    emit(e, ...t) {
        this._emitter.emit(e, ...t)
    }
}, bV = {
    addEventListener: () => {
    },
    removeEventListener: () => {
    },
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: {href: "", pathname: ""},
    document: {cookie: ""},
    setTimeout: () => 0,
    clearTimeout: () => {
    },
    setInterval: () => 0,
    clearInterval: () => {
    },
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {
    },
    requestIdleCallback: () => 0,
    getSelection: () => null,
    matchMedia: e => ({
        matches: !1, media: e, onchange: () => {
        }, addEventListener: () => {
        }, removeEventListener: () => {
        }, addListener: () => {
        }, removeListener: () => {
        }, dispatchEvent: () => !1
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {
    },
    __framer_events: []
}, ot = typeof F > "u" ? bV : F, xV = e => {
    setTimeout(e, 1 / 60)
}, wV = (() => ot.requestAnimationFrame || xV)(), p1 = e => wV(e), ya = (() => 1 / 60)(), SV = class extends yV {
    constructor(e = !1) {
        super(), T(this, "_started", !1), T(this, "_frame", 0), T(this, "_frameTasks", []), T(this, "tick", () => {
            this._started && (p1(this.tick), this.emit("update", this._frame, ya), this.emit("render", this._frame, ya), this._processFrameTasks(), this._frame++)
        }), e && this.start()
    }

    addFrameTask(e) {
        this._frameTasks.push(e)
    }

    _processFrameTasks() {
        var e;
        let t = this._frameTasks, n = t.length;
        if (n !== 0) {
            for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
            t.length = 0
        }
    }

    static set TimeStep(e) {
        ya = e
    }

    static get TimeStep() {
        return ya
    }

    start() {
        return this._started ? this : (this._frame = 0, this._started = !0, p1(this.tick), this)
    }

    stop() {
        return this._started = !1, this
    }

    get frame() {
        return this._frame
    }

    get time() {
        return this._frame * ya
    }
}, Ra = new SV, xu = {target: "PREVIEW", zoom: 1};
var ue = {
    canvas: "CANVAS",
    export: "EXPORT",
    thumbnail: "THUMBNAIL",
    preview: "PREVIEW",
    current: () => xu.target,
    hasRestrictions: () => {
        let e = xu.target;
        return e === "CANVAS" || e === "EXPORT"
    }
}, kV = class {
    constructor(e, t, n) {
        this.animator = e, this.updateCallback = t, this.finishedCallback = n, T(this, "update", (r, i) => {
            if (this.animator.isFinished()) this.finish(); else {
                let o = this.animator.next(i);
                this.updateCallback(o)
            }
        }), this.animator.isReady() || console.warn("AnimationDriver initialized with animator that isn't ready")
    }

    finish() {
        this.finishedCallback && this.finishedCallback(this.animator.isFinished())
    }

    isFinished() {
        return this.animator.isFinished()
    }
}, CV = class extends kV {
    play() {
        if (xu.target !== ue.preview) {
            this.finishedCallback && this.finishedCallback(!1);
            return
        }
        Ra.on("update", this.update)
    }

    cancel() {
        Ra.off("update", this.update)
    }

    finish() {
        Ra.off("update", this.update), super.finish()
    }
}, TV = {precalculate: !1, colorModel: "husl"}, Lm = class {
    constructor(e, t, n, r, i, o = CV) {
        T(this, "driver"), T(this, "playStateSource", "idle"), T(this, "onfinish"), T(this, "oncancel"), T(this, "readyPromise", Promise.resolve()), T(this, "readyResolve"), T(this, "finishedPromise"), T(this, "finishedResolve"), T(this, "finishedReject"), this.resetFinishedPromise();
        let s = {...TV}, a = {};
        i && (Object.assign(s, i), Object.assign(a, i));
        let l;
        s.customInterpolation ? l = s.customInterpolation : l = new tC(i);
        let c;
        r ? c = new r(a, l) : c = new Qk({}, l), s.precalculate && (c = new gV({animator: c})), c.setFrom(t), c.setTo(n);
        let u = d => {
            Lm.driverCallbackHandler(e, d)
        }, f = d => {
            d && (Lm.driverCallbackHandler(e, n), this.playStateSource === "running" && (this.playStateValue = "finished"))
        };
        this.driver = new o(c, u, f)
    }

    static driverCallbackHandler(e, t) {
        if (Nt(e) || bu(e)) e.set(t); else {
            let n = e;
            nt.transaction(r => {
                for (let i in n) {
                    let o = n[i];
                    Nt(o) ? r(o, t[i]) : n[i] = t[i]
                }
            })
        }
    }

    get playStateValue() {
        return this.playStateSource
    }

    set playStateValue(e) {
        if (e !== this.playStateSource) {
            let t = e;
            switch (this.playStateSource = e, e) {
                case"idle":
                    t === "running" && this.oncancel && this.oncancel(), this.readyResolve && this.readyResolve(), this.resetReadyPromise();
                    break;
                case"finished":
                    if (t === "idle") {
                        console.warn("Bad state transition");
                        break
                    }
                    this.onfinish && this.onfinish(), this.finishedResolve && this.finishedResolve();
                    break;
                case"running":
                    this.resetReadyPromise();
                    break
            }
            t === "finished" && this.resetFinishedPromise(), e === "finished" && (this.playStateValue = "idle")
        }
    }

    get playState() {
        return this.playStateValue
    }

    resetReadyPromise() {
        this.readyResolve = null, this.readyPromise = new Promise((e, t) => {
            this.readyResolve = e
        })
    }

    get ready() {
        return this.readyPromise
    }

    resetFinishedPromise() {
        this.finishedResolve = null, this.finishedReject = null, this.finishedPromise = new Promise((e, t) => {
            this.finishedResolve = e, this.finishedReject = t
        }), this.finishedPromise.catch(e => {
        })
    }

    get finished() {
        return this.finishedPromise
    }

    play() {
        this.playStateValue = "running", this.driver.play()
    }

    cancel() {
        if (this.playStateValue === "running") {
            if (this.driver.cancel(), this.playState !== "idle") {
                let e = "AbortError";
                this.finishedReject && this.finishedReject(e)
            }
            this.playStateValue = "idle"
        }
    }

    finish() {
        this.playStateSource === "running" && (this.playStateValue = "finished", this.driver.finish())
    }

    isFinished() {
        return this.playStateValue === "finished"
    }
}, tu = e => ({
    correct: (t, {delta: n, treeScale: r}) => {
        if (typeof t == "string" && (t = parseFloat(t)), t === 0) return "0px";
        let i = t;
        return n && r && (i = Math.round(t / n[e].scale / r[e]), i = Math.max(i, 1)), i + "px"
    }
});
Cd({borderTopWidth: tu("y"), borderLeftWidth: tu("x"), borderRightWidth: tu("x"), borderBottomWidth: tu("y")});

function RV(e, t, n, r) {
    Yk("animate()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)");
    let i = e, o;
    Nt(e) || bu(e) ? o = e.get() : o = nt.objectToValues(e);
    let s = new Lm(i, o, t, n, r);
    return s.play(), s
}

var yH = (() => {
    function e(t, n, r, i) {
        return Nt(t) ? RV(t, n, r, i) : Mn(t, n, r)
    }

    return e.spring = (t, n, r) => e(t, n, tV, r), e.bezier = (t, n, r) => e(t, n, Qk, r), e.linear = (t, n, r) => e.bezier(t, n, {
        ...r,
        curve: "linear"
    }), e.ease = (t, n, r) => e.bezier(t, n, {...r, curve: "ease"}), e.easeIn = (t, n, r) => e.bezier(t, n, {
        ...r,
        curve: "ease-in"
    }), e.easeOut = (t, n, r) => e.bezier(t, n, {
        ...r,
        curve: "ease-out"
    }), e.easeInOut = (t, n, r) => e.bezier(t, n, {...r, curve: "ease-in-out"}), e
})();

function D(e, ...t) {
    var n, r;
    if (e) return;
    let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
    if (i.stack) try {
        let o = i.stack.split(`
`);
        (n = o[1]) != null && n.includes("assert") ? (o.splice(1, 1), i.stack = o.join(`
`)) : (r = o[0]) != null && r.includes("assert") && (o.splice(0, 1), i.stack = o.join(`
`))
    } catch {
    }
    throw i
}

function Ce(e, t) {
    throw t || new Error(e ? `Unexpected value: ${e}` : "Application entered invalid state")
}

var Zo = x.createContext({
    getLayoutId: e => null, persistLayoutIdCache: () => {
    }, top: !1, enabled: !0
});

function EV({children: e}) {
    if (A(Zo).top) return k(at, {children: e});
    let n = V({
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
            count: {byId: {}, byName: {}}
        }), r = V({byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}}),
        i = V(new Set).current, o = W(({id: l, name: c, duplicatedFrom: u}) => {
            if (!l) return null;
            let f = c ? "byName" : "byId", d = n.current[f][l];
            if (d) return d;
            let h = c || l;
            if (!u && !i.has(h) && (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h)) return n.current.count[f][h] === void 0 && (n.current.count[f][h] = 0, n.current.byLayoutId[h] = h, r.current[f][l] = h), i.add(h), h;
            let v;
            if (u?.length) for (let S = u.length - 1; S >= 0; S--) {
                let R = u[S];
                D(!!R, "duplicatedId must be defined");
                let E = n.current[f][R], I = n.current.byLastId[R];
                if (I && !v) {
                    let z = n.current.byLayoutId[I], B = !z || z === c;
                    I && !i.has(I) && (!c || B) && (v = [I, R])
                }
                let O = E ? n.current.byLayoutId[E] : void 0, H = !O || O === c;
                if (E && !i.has(E) && (!c || H)) return r.current[f][l] = E, r.current.byLastId[R] = E, i.add(E), E
            }
            let g = n.current.byLastId[l];
            if (g && !i.has(g)) return i.add(g), r.current.byId[l] = g, g;
            if (v) {
                let [S, R] = v;
                return r.current[f][l] = S, r.current.byLastId[R] = S, i.add(S), S
            }
            let b = n.current.byPossibleId[l];
            if (b && !i.has(b)) return i.add(b), r.current.byId[l] = b, b;
            let p = u?.[0], m = c || p || l, y = (n.current.count[f][m] ?? -1) + 1, {layoutId: w, value: C} = FV(m, y, i);
            if (n.current.count[f][m] = C, r.current[f][l] = w, u?.length && !c) {
                let S = u[u.length - 1];
                if (S && (r.current.byLastId[S] = w), u.length > 1) for (let R = 0; R < u.length - 1; R++) {
                    let E = u[R];
                    E !== void 0 && (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = w))
                }
            }
            return r.current.byLayoutId[w] = h, i.add(w), w
        }, []), s = W(() => {
            n.current = {
                byId: {...n.current.byId, ...r.current.byId},
                byLastId: {...n.current.byLastId, ...r.current.byLastId},
                byPossibleId: {...n.current.byPossibleId, ...r.current.byPossibleId},
                byName: {...n.current.byName, ...r.current.byName},
                byLastName: {...n.current.byLastName, ...r.current.byLastName},
                byLayoutId: {...n.current.byLayoutId, ...r.current.byLayoutId},
                count: {...n.current.count, byName: {}}
            }, r.current = {byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}}, i.clear()
        }, []), a = V({getLayoutId: o, persistLayoutIdCache: s, top: !0, enabled: !0}).current;
    return k(Zo.Provider, {value: a, children: e})
}

function FV(e, t, n) {
    let r = t, i = r ? `${e}-${r}` : e;
    for (; n.has(i);) r++, i = `${e}-${r}`;
    return {layoutId: i, value: r}
}

function PV({enabled: e = !0, ...t}) {
    let n = A(Zo), r = oe(() => ({...n, enabled: e}), [e]);
    return k(Zo.Provider, {...t, value: r})
}

function ut(e) {
    let t = V(null);
    return t.current === null && (t.current = e()), t.current
}

var _V = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%"
}, IV = (() => ({
    ..._V,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5"
}))(), nC = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px"
}, OV = (() => ({...nC, fontWeight: 500}))(), MV = (() => ({
    ...nC,
    whiteSpace: "pre",
    maxHeight: "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
}))();

function CH(e) {
    let {error: t, file: n} = e, r = n ? `Error in ${LV(n)}` : "Error", i = t instanceof Error ? t.message : "" + t;
    return ge("div", {
        style: IV,
        children: [k("div", {className: "text", style: OV, children: r}), i && k("div", {
            className: "text",
            style: MV,
            children: i
        })]
    })
}

function LV(e) {
    return e.startsWith("./") ? e.replace("./", "") : e
}

function ie(e) {
    return Number.isFinite(e)
}

function VV(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}

function cu(e) {
    return typeof e != "string" && typeof e != "number"
}

function uu(e) {
    return e !== null && typeof e < "u" && typeof e != "boolean" && !VV(e)
}

function AV(e) {
    return e * (Math.PI / 180)
}

var En = (() => {
    function e(t, n) {
        return {a: t, b: n}
    }

    return e.offset = (t, n) => {
        let r = Qe.angleFromX(t.a, t.b), i = AV(r), o = n * Math.sin(i), s = n * Math.cos(i);
        return e({x: t.a.x + o, y: t.a.y - s}, {x: t.b.x + o, y: t.b.y - s})
    }, e.intersection = (t, n, r) => {
        let i = t.a.x, o = t.a.y, s = t.b.x, a = t.b.y, l = n.a.x, c = n.a.y, u = n.b.x, f = n.b.y,
            d = (u - l) * (c - o) - (f - c) * (l - i), h = (u - l) * (a - o) - (f - c) * (s - i),
            v = (s - i) * (c - o) - (a - o) * (l - i);
        if (d === 0 && h === 0 || h === 0) return null;
        let g = d / h, b = v / h;
        return r && (g < 0 || g > 1 || b < 0 || b > 1) ? null : {x: i + g * (s - i), y: o + g * (a - o)}
    }, e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x, i = t.b.y - t.a.y, o = n.b.x - n.a.x, s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI)
    }, e.isOrthogonal = t => t.a.x === t.b.x || t.a.y === t.b.y, e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x, i = t.a.y - t.b.y, o = Qe(n.x - i, n.y + r);
        return e(o, n)
    }, e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r)
    }, e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t), i = n * r / r;
        return {x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y}
    }, e.distance = t => Qe.distance(t.a, t.b), e
})(), re = {
    equals: function (e, t) {
        return e === t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    },
    atOrigin: e => ({...e, x: 0, y: 0}),
    fromTwoPoints: (e, t) => ({
        x: Math.min(e.x, t.x),
        y: Math.min(e.y, t.y),
        width: Math.abs(e.x - t.x),
        height: Math.abs(e.y - t.y)
    }),
    fromRect: e => ({x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top}),
    multiply: (e, t) => ({x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t}),
    divide: (e, t) => re.multiply(e, 1 / t),
    offset: (e, t) => {
        let n = typeof t.x == "number" ? t.x : 0, r = typeof t.y == "number" ? t.y : 0;
        return {...e, x: e.x + n, y: e.y + r}
    },
    inflate: (e, t) => {
        if (t === 0) return e;
        let n = 2 * t;
        return {x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n}
    },
    pixelAligned: e => {
        let t = Math.round(e.x), n = Math.round(e.y), r = Math.round(e.x + e.width), i = Math.round(e.y + e.height),
            o = Math.max(r - t, 0), s = Math.max(i - n, 0);
        return {x: t, y: n, width: o, height: s}
    },
    halfPixelAligned: e => {
        let t = Math.round(e.x * 2) / 2, n = Math.round(e.y * 2) / 2, r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2, o = Math.max(r - t, 1), s = Math.max(i - n, 1);
        return {x: t, y: n, width: o, height: s}
    },
    round: (e, t = 0) => {
        let n = Zc(e.x, t), r = Zc(e.y, t), i = Zc(e.width, t), o = Zc(e.height, t);
        return {x: n, y: r, width: i, height: o}
    },
    roundToOutside: e => {
        let t = Math.floor(e.x), n = Math.floor(e.y), r = Math.ceil(e.x + e.width), i = Math.ceil(e.y + e.height),
            o = Math.max(r - t, 0), s = Math.max(i - n, 0);
        return {x: t, y: n, width: o, height: s}
    },
    minX: e => e.x,
    maxX: e => e.x + e.width,
    minY: e => e.y,
    maxY: e => e.y + e.height,
    positions: e => ({
        minX: e.x,
        midX: e.x + e.width / 2,
        maxX: re.maxX(e),
        minY: e.y,
        midY: e.y + e.height / 2,
        maxY: re.maxY(e)
    }),
    center: e => ({x: e.x + e.width / 2, y: e.y + e.height / 2}),
    boundingRectFromPoints: e => {
        let t = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
        for (let o = 0; o < e.length; o++) {
            let s = e[o];
            t = Math.min(t, s.x), n = Math.max(n, s.x), r = Math.min(r, s.y), i = Math.max(i, s.y)
        }
        return {x: t, y: r, width: n - t, height: i - r}
    },
    fromPoints: e => {
        let [t, n, r, i] = e, {x: o, y: s} = t, a = Qe.distance(t, n), l = Qe.distance(t, i);
        return {x: o, y: s, width: a, height: l}
    },
    merge: (...e) => {
        let t = {x: Math.min(...e.map(re.minX)), y: Math.min(...e.map(re.minY))},
            n = {x: Math.max(...e.map(re.maxX)), y: Math.max(...e.map(re.maxY))};
        return re.fromTwoPoints(t, n)
    },
    intersection: (e, t) => {
        let n = Math.max(e.x, t.x), r = Math.min(e.x + e.width, t.x + t.width), i = Math.max(e.y, t.y),
            o = Math.min(e.y + e.height, t.y + t.height);
        return {x: n, y: i, width: r - n, height: o - i}
    },
    points: e => [{x: re.minX(e), y: re.minY(e)}, {x: re.minX(e), y: re.maxY(e)}, {
        x: re.maxX(e),
        y: re.minY(e)
    }, {x: re.maxX(e), y: re.maxY(e)}],
    pointsAtOrigin: e => [{x: 0, y: 0}, {x: e.width, y: 0}, {x: e.width, y: e.height}, {x: 0, y: e.height}],
    transform: (e, t) => {
        let {x: n, y: r} = t.transformPoint({x: e.x, y: e.y}), {x: i, y: o} = t.transformPoint({
                x: e.x + e.width,
                y: e.y
            }), {x: s, y: a} = t.transformPoint({x: e.x + e.width, y: e.y + e.height}), {
                x: l,
                y: c
            } = t.transformPoint({x: e.x, y: e.y + e.height}), u = Math.min(n, i, s, l), f = Math.max(n, i, s, l) - u,
            d = Math.min(r, o, a, c), h = Math.max(r, o, a, c) - d;
        return {x: u, y: d, width: f, height: h}
    },
    containsPoint: (e, t) => !(t.x < re.minX(e) || t.x > re.maxX(e) || t.y < re.minY(e) || t.y > re.maxY(e) || Number.isNaN(e.x) || Number.isNaN(e.y)),
    containsRect: (e, t) => {
        for (let n of re.points(t)) if (!re.containsPoint(e, n)) return !1;
        return !0
    },
    toCSS: e => ({
        display: "block",
        transform: `translate(${e.x}px, ${e.y}px)`,
        width: `${e.width}px`,
        height: `${e.height}px`
    }),
    inset: (e, t) => ({
        x: e.x + t,
        y: e.y + t,
        width: Math.max(0, e.width - 2 * t),
        height: Math.max(0, e.height - 2 * t)
    }),
    intersects: (e, t) => !(t.x >= re.maxX(e) || re.maxX(t) <= e.x || t.y >= re.maxY(e) || re.maxY(t) <= e.y),
    overlapHorizontally: (e, t) => {
        let n = re.maxX(e), r = re.maxX(t);
        return n > t.x && r > e.x
    },
    overlapVertically: (e, t) => {
        let n = re.maxY(e), r = re.maxY(t);
        return n > t.y && r > e.y
    },
    doesNotIntersect: (e, t) => t.find(n => re.intersects(n, e)) === void 0,
    isEqual: (e, t) => re.equals(e, t),
    cornerPoints: e => {
        let t = e.x, n = e.x + e.width, r = e.y, i = e.y + e.height;
        return [{x: t, y: r}, {x: n, y: r}, {x: n, y: i}, {x: t, y: i}]
    },
    midPoints: e => {
        let t = e.x, n = e.x + e.width / 2, r = e.x + e.width, i = e.y, o = e.y + e.height / 2, s = e.y + e.height;
        return [{x: n, y: i}, {x: r, y: o}, {x: n, y: s}, {x: t, y: o}]
    },
    pointDistance: (e, t) => {
        let n = 0, r = 0;
        return t.x < e.x ? n = e.x - t.x : t.x > re.maxX(e) && (n = t.x - re.maxX(e)), t.y < e.y ? r = e.y - t.y : t.y > re.maxY(e) && (r = t.y - re.maxY(e)), Qe.distance({
            x: n,
            y: r
        }, {x: 0, y: 0})
    },
    fromAny: (e, t = {x: 0, y: 0, width: 0, height: 0}) => ({
        x: e.x || t.x,
        y: e.y || t.y,
        width: e.width || t.width,
        height: e.height || t.height
    }),
    delta: (e, t) => {
        let n = {x: re.minX(e), y: re.minY(e)}, r = {x: re.minX(t), y: re.minY(t)};
        return {x: n.x - r.x, y: n.y - r.y}
    },
    withMinSize: (e, t) => {
        let {width: n, height: r} = t, i = e.width - n, o = e.height - r;
        return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + o / 2 : e.y
        }
    },
    anyPointsOutsideRect: (e, t) => {
        let n = re.minX(e), r = re.minY(e), i = re.maxX(e), o = re.maxY(e);
        for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
        return !1
    },
    edges: e => {
        let [t, n, r, i] = re.cornerPoints(e);
        return [En(t, n), En(n, r), En(r, i), En(i, t)]
    },
    rebaseRectOnto: (e, t, n, r) => {
        let i = {...e};
        switch (n) {
            case"bottom":
            case"top":
                switch (r) {
                    case"start":
                        i.x = t.x;
                        break;
                    case"center":
                        i.x = t.x + t.width / 2 - e.width / 2;
                        break;
                    case"end":
                        i.x = t.x + t.width - e.width;
                        break;
                    default:
                        Ce(r)
                }
                break;
            case"left":
                i.x = t.x - e.width;
                break;
            case"right":
                i.x = t.x + t.width;
                break;
            default:
                Ce(n)
        }
        switch (n) {
            case"left":
            case"right":
                switch (r) {
                    case"start":
                        i.y = t.y;
                        break;
                    case"center":
                        i.y = t.y + t.height / 2 - e.height / 2;
                        break;
                    case"end":
                        i.y = t.y + t.height - e.height;
                        break;
                    default:
                        Ce(r)
                }
                break;
            case"top":
                i.y = t.y - e.height;
                break;
            case"bottom":
                i.y = t.y + t.height;
                break;
            default:
                Ce(n)
        }
        return i
    }
};
var rC = {quickfix: e => ((e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null), ie(e.aspectRatio) && (e.left && e.right && (e.widthType = 0), e.top && e.bottom && (e.heightType = 0), e.left && e.right && e.top && e.bottom && (e.bottom = !1), e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)), e.left && e.right && ((e.fixedSize || e.widthType === 2 || ie(e.maxWidth)) && (e.right = !1), e.widthType = 0), e.top && e.bottom && ((e.fixedSize || e.heightType === 2 || ie(e.maxHeight)) && (e.bottom = !1), e.heightType = 0), e)};

function wu(e) {
    if (typeof e == "string") {
        let t = e.trim();
        if (t === "auto") return 2;
        if (t.endsWith("fr")) return 3;
        if (t.endsWith("%")) return 1;
        if (t.endsWith("vw") || t.endsWith("vh")) return 4
    }
    return 0
}

var iC = {
    fromProperties: e => {
        let {
            left: t,
            right: n,
            top: r,
            bottom: i,
            width: o,
            height: s,
            centerX: a,
            centerY: l,
            aspectRatio: c,
            autoSize: u
        } = e, f = rC.quickfix({
            left: ie(t) || Nt(t),
            right: ie(n) || Nt(n),
            top: ie(r) || Nt(r),
            bottom: ie(i) || Nt(i),
            widthType: wu(o),
            heightType: wu(s),
            aspectRatio: c || null,
            fixedSize: u === !0
        }), d = null, h = null, v = 0, g = 0;
        if (f.widthType !== 0 && typeof o == "string") {
            let m = parseFloat(o);
            o.endsWith("fr") ? (v = 3, d = m) : o === "auto" ? v = 2 : (v = 1, d = m / 100)
        } else o !== void 0 && typeof o != "string" && (d = nt.getNumber(o));
        if (f.heightType !== 0 && typeof s == "string") {
            let m = parseFloat(s);
            s.endsWith("fr") ? (g = 3, h = m) : s === "auto" ? g = 2 : (g = 1, h = parseFloat(s) / 100)
        } else s !== void 0 && typeof s != "string" && (h = nt.getNumber(s));
        let b = .5, p = .5;
        return a && (b = parseFloat(a) / 100), l && (p = parseFloat(l) / 100), {
            left: f.left ? nt.getNumber(t) : null,
            right: f.right ? nt.getNumber(n) : null,
            top: f.top ? nt.getNumber(r) : null,
            bottom: f.bottom ? nt.getNumber(i) : null,
            widthType: v,
            heightType: g,
            width: d,
            height: h,
            aspectRatio: f.aspectRatio || null,
            centerAnchorX: b,
            centerAnchorY: p
        }
    }, toSize: (e, t, n, r) => {
        let i = null, o = null, s = t?.sizing ? nt.getNumber(t?.sizing.width) : null,
            a = t?.sizing ? nt.getNumber(t?.sizing.height) : null, l = m1(e.left, e.right);
        if (s && ie(l)) i = s - l; else if (n && e.widthType === 2) i = n.width; else if (ie(e.width)) switch (e.widthType) {
            case 0:
                i = e.width;
                break;
            case 3:
                i = r ? r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width * e.width : null;
                break;
            case 1:
            case 4:
                s && (i = s * e.width);
                break;
            case 2:
                break;
            default:
                Ce(e.widthType)
        }
        let c = m1(e.top, e.bottom);
        if (a && ie(c)) o = a - c; else if (n && e.heightType === 2) o = n.height; else if (ie(e.height)) switch (e.heightType) {
            case 0:
                o = e.height;
                break;
            case 3:
                o = r ? r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height * e.height : null;
                break;
            case 1:
            case 4:
                a && (o = a * e.height);
                break;
            case 2:
                break;
            default:
                Ce(e.heightType)
        }
        return jV(i, o, e, {height: a ?? 0, width: s ?? 0}, t?.viewport)
    }, toRect: (e, t = null, n = null, r = !1, i = null) => {
        let o = e.left || 0, s = e.top || 0, {width: a, height: l} = iC.toSize(e, t, n, i), c = t?.positioning ?? null,
            u = c ? nt.getNumber(c.width) : null, f = c ? nt.getNumber(c.height) : null;
        e.left !== null ? o = e.left : u && e.right !== null ? o = u - e.right - a : u && (o = e.centerAnchorX * u - a / 2), e.top !== null ? s = e.top : f && e.bottom !== null ? s = f - e.bottom - l : f && (s = e.centerAnchorY * f - l / 2);
        let d = {x: o, y: s, width: a, height: l};
        return r ? re.pixelAligned(d) : d
    }
}, DV = 200, zV = 200;

function Su(e, t, n, r) {
    if (typeof t == "string") {
        if (t.endsWith("%") && n) switch (e) {
            case"maxWidth":
            case"minWidth":
                return parseFloat(t) / 100 * n.width;
            case"maxHeight":
            case"minHeight":
                return parseFloat(t) / 100 * n.height;
            default:
                break
        }
        if (t.endsWith("vh")) {
            if (!r) return BV(e);
            switch (e) {
                case"maxWidth":
                case"minWidth":
                    return parseFloat(t) / 100 * r.width;
                case"maxHeight":
                case"minHeight":
                    return parseFloat(t) / 100 * r.height;
                default:
                    break
            }
        }
        return parseFloat(t)
    }
    return t
}

function BV(e) {
    switch (e) {
        case"minWidth":
        case"minHeight":
            return Number.NEGATIVE_INFINITY;
        case"maxWidth":
        case"maxHeight":
            return Number.POSITIVE_INFINITY;
        default:
            Ce(e, "unknown constraint key")
    }
}

function $V(e, t, n, r) {
    return t.minHeight && (e = Math.max(Su("minHeight", t.minHeight, n, r), e)), t.maxHeight && (e = Math.min(Su("maxHeight", t.maxHeight, n, r), e)), e
}

function NV(e, t, n, r) {
    return t.minWidth && (e = Math.max(Su("minWidth", t.minWidth, n, r), e)), t.maxWidth && (e = Math.min(Su("maxWidth", t.maxWidth, n, r), e)), e
}

function jV(e, t, n, r, i) {
    let o = NV(ie(e) ? e : DV, n, r, i), s = $V(ie(t) ? t : zV, n, r, i);
    return ie(n.aspectRatio) && n.aspectRatio > 0 && (ie(n.left) && ie(n.right) ? s = o / n.aspectRatio : ie(n.top) && ie(n.bottom) ? o = s * n.aspectRatio : n.widthType !== 0 ? s = o / n.aspectRatio : o = s * n.aspectRatio), {
        width: o,
        height: s
    }
}

function m1(e, t) {
    return !ie(e) || !ie(t) ? null : e + t
}

function HV(e) {
    return typeof e.right == "string" || typeof e.bottom == "string" || typeof e.left == "string" && (!e.center || e.center === "y") || typeof e.top == "string" && (!e.center || e.center === "x")
}

function La(e) {
    return !e._constraints || HV(e) ? !1 : e._constraints.enabled
}

function WV(e) {
    let {size: t} = e, {width: n, height: r} = e;
    return ie(t) && (n === void 0 && (n = t), r === void 0 && (r = t)), ie(n) && ie(r) ? {width: n, height: r} : null
}

function UV(e) {
    let t = WV(e);
    if (t === null) return null;
    let {left: n, top: r} = e;
    return ie(n) && ie(r) ? {x: n, y: r, ...t} : null
}

function Fa(e, t, n = !0) {
    if (e.positionFixed || e.positionAbsolute) return null;
    let r = t === 1 || t === 2;
    if (!La(e) || r) return UV(e);
    let i = GV(e), o = qV(t), s = o ? {sizing: o, positioning: o, viewport: null} : null;
    return iC.toRect(i, s, null, n, null)
}

function GV(e) {
    let {left: t, right: n, top: r, bottom: i, center: o, _constraints: s, size: a} = e, {width: l, height: c} = e;
    l === void 0 && (l = a), c === void 0 && (c = a);
    let {aspectRatio: u, autoSize: f} = s, d = rC.quickfix({
        left: ie(t),
        right: ie(n),
        top: ie(r),
        bottom: ie(i),
        widthType: wu(l),
        heightType: wu(c),
        aspectRatio: u || null,
        fixedSize: f === !0
    }), h = null, v = null, g = 0, b = 0;
    if (d.widthType !== 0 && typeof l == "string") {
        let y = parseFloat(l);
        l.endsWith("fr") ? (g = 3, h = y) : l === "auto" ? g = 2 : (g = 1, h = y / 100)
    } else l !== void 0 && typeof l != "string" && (h = l);
    if (d.heightType !== 0 && typeof c == "string") {
        let y = parseFloat(c);
        c.endsWith("fr") ? (b = 3, v = y) : c === "auto" ? b = 2 : (b = 1, v = parseFloat(c) / 100)
    } else c !== void 0 && typeof c != "string" && (v = c);
    let p = .5, m = .5;
    return (o === !0 || o === "x") && (d.left = !1, typeof t == "string" && (p = parseFloat(t) / 100)), (o === !0 || o === "y") && (d.top = !1, typeof r == "string" && (m = parseFloat(r) / 100)), {
        left: d.left ? t : null,
        right: d.right ? n : null,
        top: d.top ? r : null,
        bottom: d.bottom ? i : null,
        widthType: g,
        heightType: b,
        width: h,
        height: v,
        aspectRatio: d.aspectRatio || null,
        centerAnchorX: p,
        centerAnchorY: m,
        minHeight: e.minHeight,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        maxWidth: e.maxWidth
    }
}

var oC = x.createContext({parentSize: 0});

function qV(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}

function Va() {
    return x.useContext(oC).parentSize
}

function sC(e) {
    return typeof e == "object"
}

var XV = e => {
    let t = Va(), {parentSize: n, children: r} = e, i = x.useMemo(() => ({parentSize: n}), [YV(n), KV(n)]);
    return t === 1 ? r ? k(at, {children: r}) : null : k(oC.Provider, {value: i, children: r})
};

function YV(e) {
    return sC(e) ? e.width : e
}

function KV(e) {
    return sC(e) ? e.height : e
}

function QV(e, t) {
    return k(XV, {parentSize: t, children: e})
}

function ZV(e) {
    let t = Va();
    return Fa(e, t, !0)
}

function aC({width: e, height: t}) {
    return e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
}

var JV = (e => (e.Boolean = "boolean", e.Number = "number", e.String = "string", e.RichText = "richtext", e.FusedNumber = "fusednumber", e.Enum = "enum", e.SegmentedEnum = "segmentedenum", e.Color = "color", e.Image = "image", e.ResponsiveImage = "responsiveimage", e.File = "file", e.ComponentInstance = "componentinstance", e.Array = "array", e.EventHandler = "eventhandler", e.Transition = "transition", e.BoxShadow = "boxshadow", e.Link = "link", e.Date = "date", e.Object = "object", e.Font = "font", e.PageScope = "pagescope", e.ScrollSectionRef = "scrollsectionref", e.CustomCursor = "customcursor", e.Border = "border", e.Cursor = "cursor", e.Padding = "padding", e.BorderRadius = "borderradius", e.CollectionReference = "collectionreference", e.MultiCollectionReference = "multicollectionreference", e))(JV || {}),
    lm;

function eA() {
    if (lm !== void 0) return lm;
    let e = document.createElement("div");
    Object.assign(e.style, {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        rowGap: "1px"
    }), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
    let t = e.scrollHeight === 1;
    return e.parentNode && e.parentNode.removeChild(e), lm = t, t
}

var qi = "flexbox-gap-not-supported", g1 = !1;

function PH() {
    g1 || (g1 = !0, !eA() && document.body.classList.add(qi))
}

var tA = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`, nA = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`, rA = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`, iA = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`, oA = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, sA = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, aA = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`, lA = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`, cA = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`, uA = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`, fA = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`, dA = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`, hA = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`, pA = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`, mA = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`, gA = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
    vA = ['[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }', dA, fA, tA, nA, rA, iA, oA, sA, aA, lA, cA, uA, hA, pA, mA, gA],
    yA = [`
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `, `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `, `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `, `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `, `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `], bA = new Set, cm;

function lC(e, t, n = bA) {
    if (!(!e || n.has(e) || typeof document > "u")) {
        if (n.add(e), !t) {
            if (!cm) {
                let r = document.createElement("style");
                if (r.setAttribute("type", "text/css"), r.setAttribute("data-framer-css", "true"), !document.head) {
                    console.warn("not injecting CSS: the document is missing a <head> element");
                    return
                }
                if (document.head.appendChild(r), r.sheet) cm = r.sheet; else {
                    console.warn("not injecting CSS: injected <style> element does not have a sheet", r);
                    return
                }
            }
            t = cm
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {
        }
    }
}

var xA = ["[data-framer-component-type] { position: absolute; }"], wA = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`, SA = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`, kA = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`, CA = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`, TA = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`, RA = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`, EA = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`, FA = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
    PA = ['[data-framer-component-type="Text"] { cursor: inherit; }', "[data-framer-component-text-autosized] * { white-space: pre; }", wA, SA, kA, CA, TA, RA, EA, FA],
    _A = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`, IA = (() => [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${qi} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`])(), OA = (() => `
.${qi} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(), MA = (() => `
.${qi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${qi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(), LA = (() => `
.${qi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${qi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(), VA = (() => [_A, OA, ...IA, MA, LA])(), AA = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`],
    DA = ['[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }', '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }'],
    zA = ['[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }', '[data-framer-component-type="NativeScroll"] > * { position: relative; }', '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }', '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }', '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }', '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }'],
    BA = ['[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }'],
    $A = ['[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }'],
    NA = ['[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }'],
    jA = ['[data-framer-cursor="pointer"] { cursor: pointer; }', '[data-framer-cursor="grab"] { cursor: grab; }', '[data-framer-cursor="grab"]:active { cursor: grabbing; }'],
    HA = ['[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }', "[data-framer-generated] * { pointer-events: unset }"],
    WA = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`],
    UA = ['[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }'],
    um = "--framer-will-change-override", GA = "(background: -webkit-named-image(i))",
    qA = "(grid-template-rows: subgrid)",
    XA = e => e ? [`body { ${um}: none; }`, `@supports ${GA} and (not ${qA}) { body { ${um}: transform; } }`] : [`body { ${um}: none; }`],
    YA = e => e ? HA : [], KA = [".svgContainer svg { display: block; }"],
    cC = e => [...XA(e), ...xA, ...PA, ...yA, ...vA, ...VA, ...AA, ...DA, ...zA, ...$A, ...BA, ...NA, ...jA, ...YA(e), ...KA, ...WA, ...UA],
    QA = cC(!1), ZA = cC(!0), v1 = !1;

function Aa() {
    if (v1) return;
    v1 = !0;
    let e = ue.current() === ue.preview ? ZA : QA;
    for (let t of e) lC(t, void 0, void 0)
}

function JA(e) {
    return ve(e) || Hn(e)
}

var y1 = "optional";

function eD(e) {
    return !!e && y1 in e && e[y1] === !0
}

function tD(e) {
    try {
        switch (e.type) {
            case"string":
            case"collectionreference":
            case"multicollectionreference":
            case"color":
            case"date":
            case"link":
            case"boxshadow":
            case"padding":
            case"borderradius":
                return ce(e.defaultValue) ? e.defaultValue : void 0;
            case"boolean":
                return Km(e.defaultValue) ? e.defaultValue : void 0;
            case"enum":
                return Ge(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
            case"fusednumber":
            case"number":
                return Ue(e.defaultValue) ? e.defaultValue : void 0;
            case"transition":
                return ve(e.defaultValue) ? e.defaultValue : void 0;
            case"border":
                return ve(e.defaultValue) ? e.defaultValue : void 0;
            case"font":
                return ve(e.defaultValue) ? e.defaultValue : void 0;
            case"object": {
                let t = ve(e.defaultValue) ? e.defaultValue : {};
                return ve(e.controls) && uC(t, e.controls), t
            }
            case"array":
                return Uu(e.defaultValue) ? e.defaultValue : void 0;
            case"file":
            case"image":
            case"richtext":
            case"pagescope":
            case"eventhandler":
            case"segmentedenum":
            case"responsiveimage":
            case"componentinstance":
            case"scrollsectionref":
            case"customcursor":
            case"cursor":
                return;
            default:
                return
        }
    } catch {
        return
    }
}

function uC(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r) continue;
        let i = e[n];
        if (!Ge(i) || eD(r)) continue;
        let o = tD(r);
        Ge(o) || (e[n] = o)
    }
}

function nD(e) {
    if (ve(e.defaultProps)) return e.defaultProps;
    let t = {};
    return e.defaultProps = t, t
}

function rD(e, t) {
    if (!JA(e)) return;
    let n = nD(e);
    uC(n, t)
}

function _H(e, t) {
    Object.assign(e, {propertyControls: t}), rD(e, t)
}

function iD(e) {
    return e.propertyControls
}

function qu() {
    let e = ue.current();
    return e === ue.canvas || e === ue.export
}

var st = e => e;

function oD(e) {
    let t = Object.create(Object.prototype);
    return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}

var sD = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
    aD = oD(e => sD.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91),
    b1 = e => () => {
        Ea(e)
    }, lD = () => () => {
    }, cD = {
        useImageSource(e) {
            return e.src ?? ""
        }, useImageElement(e, t, n) {
            let r = new Image;
            return r.src = yt.useImageSource(e, t, n), e.srcSet && (r.srcset = e.srcSet), r
        }, canRenderOptimizedCanvasImage() {
            return !1
        }
    }, uD = !1, fD = {
        get(e, t, n) {
            return Reflect.has(e, t) ? Reflect.get(e, t, n) : ["getLogger"].includes(String(t)) ? lD() : b1(uD ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
        }
    }, yt = new Proxy(cD, fD);
var x1 = {position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0}, dD = {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "126px auto",
    backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)",
    opacity: .2
};

function hD(e) {
    switch (e) {
        case"fit":
            return "contain";
        case"stretch":
            return "fill";
        default:
            return "cover"
    }
}

function fC(e, t) {
    let n = e ?? "center", r = t ?? "center";
    return n === "center" && r === "center" ? "center" : n + " " + r
}

function ng(e) {
    return {
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: fC(e.positionX, e.positionY),
        objectFit: hD(e.fit)
    }
}

function pD({image: e, containerSize: t, nodeId: n, alt: r, draggable: i, syncDecoding: o}) {
    let s = yt.useImageSource(e, t, n), a = ng(e), l = x.useRef(null);
    return k("img", {
        ref: l,
        decoding: o ? "sync" : "async",
        fetchpriority: e.fetchPriority,
        loading: e.loading,
        sizes: e.sizes,
        srcSet: e.srcSet,
        src: s,
        alt: r ?? e.alt ?? "",
        style: a,
        draggable: i
    })
}

function mD({image: e, containerSize: t, nodeId: n}) {
    let r = x.useRef(null), i = yt.useImageElement(e, t, n), o = ng(e);
    return x.useLayoutEffect(() => {
        let s = r.current;
        if (s !== null) return s.appendChild(i), () => {
            s.removeChild(i)
        }
    }, [i]), Object.assign(i.style, o), k("div", {ref: r, style: {display: "contents", borderRadius: "inherit"}})
}

function gD({nodeId: e, image: t, containerSize: n}) {
    let r = x.useRef(null), i = yt.useImageSource(t, n, e);
    return x.useLayoutEffect(() => {
        let o = r.current;
        if (o === null) return;
        let s = ng(t);
        yt.renderOptimizedCanvasImage(o, i, s, e)
    }, [e, t, i]), k("div", {ref: r, style: {display: "contents", borderRadius: "inherit"}})
}

function dC({layoutId: e, image: t, ...n}) {
    e && (e = e + "-background");
    let r = {...x1, ...dD}, i = null;
    if (ce(t.src)) if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
        let o = Ue(t.backgroundSize) ? t.backgroundSize : 1,
            s = {width: Math.round(o * t.pixelWidth), height: Math.round(o * t.pixelHeight)},
            a = yt.useImageSource(t, s);
        r.backgroundImage = `url(${a})`, r.backgroundRepeat = "repeat", r.backgroundPosition = fC(t.positionX, t.positionY), r.opacity = void 0, r.border = 0, r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`, i = null
    } else ue.current() !== ue.canvas ? i = k(pD, {
        image: t,
        syncDecoding: ue.current() === ue.export, ...n
    }) : yt.canRenderOptimizedCanvasImage(yt.useImageSource(t)) ? i = k(gD, {image: t, ...n}) : i = k(mD, {image: t, ...n});
    return k(tn.div, {layoutId: e, style: i ? x1 : r, "data-framer-background-image-wrapper": !0, children: i})
}

function vD(e, t, n = !0) {
    let {borderWidth: r, borderStyle: i, borderColor: o} = e;
    if (!r) return;
    let s, a, l, c;
    if (typeof r == "number" ? s = a = l = c = r : (s = r.top || 0, a = r.bottom || 0, l = r.left || 0, c = r.right || 0), !(s === 0 && a === 0 && l === 0 && c === 0)) {
        if (n && s === a && s === l && s === c) {
            t.border = `${s}px ${i} ${o}`;
            return
        }
        t.borderStyle = e.borderStyle, t.borderColor = e.borderColor, t.borderTopWidth = `${s}px`, t.borderBottomWidth = `${a}px`, t.borderLeftWidth = `${l}px`, t.borderRightWidth = `${c}px`
    }
}

function yD(e) {
    let t = e.layoutId ? `${e.layoutId}-border` : void 0;
    if (!e.borderWidth) return null;
    let n = {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: "inherit",
        pointerEvents: "none"
    };
    return e.border ? (n.border = e.border, k(tn.div, {style: n})) : (vD(e, n, !1), k(tn.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}

var bD = "src", Wi = {
    isImageObject: function (e) {
        return !e || typeof e == "string" ? !1 : bD in e
    }
};

function xD(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t, o = n ?? i, s = r && o ? r[o] : void 0;
    return s && typeof s == "string" && (e = {...e, src: s}), e
}

function wD(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !Wi.isImageObject(t)) return;
    let r = null;
    if (ce(n) ? r = {alt: "", src: n} : r = nt.get(t, null), !!Wi.isImageObject(r)) return xD(r, e)
}

function Da(e) {
    return e && e !== "search" && e !== "slot" && e !== "template" ? tn[e] : tn.div
}

var SD = pr(qm(), 1), Pn = typeof Re < "u" ? Re : void 0, Dr = () => typeof document == "object";
var kD = () => Pn && /Chrome/u.test(Pn.userAgent) && /Google Inc/u.test(Pn.vendor) && !ED(),
    CD = () => Pn && /Safari/u.test(Pn.userAgent) && /Apple Computer/u.test(Pn.vendor),
    TD = () => Pn && /Firefox\/\d+\.\d+$/u.test(Pn.userAgent), RD = () => Pn && /FramerX/u.test(Pn.userAgent),
    ED = () => Pn && /Edg\//u.test(Pn.userAgent);
var FD = () => SD.default.env.NODE_ENV === "test";
var PD = kD();

function _D(e, t) {
    e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0, e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0
}

function hC(e) {
    let t = {};
    return !e || !PD || ue.current() !== ue.canvas || _D(t, e), t
}

function rg(e) {
    return e.replace(/^id_/u, "").replace(/\\/gu, "")
}

function ID(e, t) {
    if (!t && (t = e.children, !t)) return {props: e, children: t};
    let n = e._forwardedOverrides;
    return n ? (t = x.Children.map(t, r => x.isValidElement(r) ? x.cloneElement(r, {_forwardedOverrides: n}) : r), {
        props: e,
        children: t
    }) : {props: e, children: t}
}

function Xu(e) {
    return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === "x" ? `translateX(-50%) ${n}` : e === "y" ? `translateY(-50%) ${n}` : n || "none"
}

function za(e, {specificLayoutId: t, postfix: n} = {}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: a} = e, {
        getLayoutId: l,
        enabled: c
    } = A(Zo);
    return oe(() => {
        if (!c) return e.layoutId;
        let u = t || e.layoutId;
        if (!u && (a || !i || s)) return;
        let f = u || l({id: i, name: r, duplicatedFrom: o});
        if (f) return n ? `${f}-${n}` : f
    }, [c])
}

var Vm = typeof document < "u" ? ze : $, ns = x.createContext(!1);

function Yu() {
    let [e, t] = x.useState(0);
    return x.useCallback(() => t(n => n + 1), [])
}

var OD = (() => IM().ResizeObserver)();
var MD = class {
    constructor() {
        T(this, "sharedResizeObserver"), T(this, "callbacks", new WeakMap);
        let e = ot.ResizeObserver ?? OD;
        this.sharedResizeObserver = new e(this.updateResizedElements.bind(this))
    }

    updateResizedElements(e) {
        for (let t of e) {
            let n = this.callbacks.get(t.target);
            n && n(t.contentRect)
        }
    }

    observeElementWithCallback(e, t) {
        this.sharedResizeObserver.observe(e), this.callbacks.set(e, t)
    }

    unobserve(e) {
        this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e)
    }
}, nu = (() => Dr() ? new MD : void 0)();

function LD(e) {
    let t = Yu();
    $(() => {
        let n = e?.current;
        if (n) return nu?.observeElementWithCallback(e.current, t), () => {
            nu?.unobserve(n)
        }
    }, [e, t])
}

var VD = "data-framer-size-compatibility-wrapper";

function AD(e) {
    return [...e.firstElementChild && e.firstElementChild.hasAttribute(VD) ? e.firstElementChild.children : e.children].filter(pC).map(mC)
}

function pC(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}

function mC(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents") return e;
    let t = [...e.children].find(pC);
    return t ? mC(t) : e
}

function Ku(e, t, n = () => [], r = {}) {
    let {id: i, visible: o, _needsMeasure: s} = e, {skipHook: a = !1} = r, l = !!A(ns), c = ue.current() === ue.canvas;
    Vm(() => {
        !c || l || a || t.current && i && o && s && yt.queueMeasureRequest(rg(i), t.current, n(t.current))
    })
}

function DD(e) {
    let t = e.closest("[data-framer-component-container]");
    t && yt.queueMeasureRequest(rg(t.id), t, AD(t))
}

var Xi = Object.keys;

function ku(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

var zD = "equals";

function w1(e) {
    return e === null || !(zD in e) ? !1 : typeof e.equals == "function"
}

function ig(e, t) {
    return e === t ? !0 : e !== e && t !== t
}

function BD(e, t) {
    let n = e.length;
    if (n !== t.length) return !1;
    for (let r = n; r-- !== 0;) if (!ig(e[r], t[r])) return !1;
    return !0
}

function $D(e, t) {
    let n = e.length;
    if (n !== t.length) return !1;
    for (let r = n; r-- !== 0;) if (!Qu(e[r], t[r], !0)) return !1;
    return !0
}

function ND(e, t) {
    if (e.size !== t.size) return !1;
    for (let [n, r] of e.entries()) if (!ig(r, t.get(n))) return !1;
    return !0
}

function jD(e, t) {
    if (e.size !== t.size) return !1;
    for (let [n, r] of e.entries()) if (!Qu(r, t.get(n), !0)) return !1;
    return !0
}

function HD(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e.keys()) if (!t.has(n)) return !1;
    return !0
}

function WD(e, t) {
    let n = Xi(e);
    if (n.length !== Xi(t).length) return !1;
    for (let r of n) {
        if (!ku(t, r)) return !1;
        if (!(r === "_owner" && ku(e, "$$typeof") && e.$$typeof) && !ig(e[r], t[r])) return !1
    }
    return !0
}

function UD(e, t) {
    let n = Xi(e);
    if (n.length !== Xi(t).length) return !1;
    for (let r of n) {
        if (!ku(t, r)) return !1;
        if (!(r === "_owner" && ku(e, "$$typeof") && e.$$typeof) && !Qu(e[r], t[r], !0)) return !1
    }
    return !0
}

function Qu(e, t, n) {
    if (e === t) return !0;
    if (!e || !t) return e !== e && t !== t;
    let r = typeof e;
    if (r !== typeof t || r !== "object") return !1;
    let o = Array.isArray(e), s = Array.isArray(t);
    if (o && s) return n ? $D(e, t) : BD(e, t);
    if (o !== s) return !1;
    let a = e instanceof Map, l = t instanceof Map;
    if (a && l) return n ? jD(e, t) : ND(e, t);
    if (a !== l) return !1;
    let c = e instanceof Set, u = t instanceof Set;
    if (c && u) return HD(e, t);
    if (c !== u) return !1;
    let f = e instanceof Date, d = t instanceof Date;
    if (f && d) return e.getTime() === t.getTime();
    if (f !== d) return !1;
    let h = e instanceof RegExp, v = t instanceof RegExp;
    return h && v ? e.toString() === t.toString() : h !== v ? !1 : w1(e) && w1(t) ? e.equals(t) : n ? UD(e, t) : WD(e, t)
}

function og(e, t, n = !0) {
    try {
        return Qu(e, t, n)
    } catch (r) {
        if (r instanceof Error && /stack|recursion/iu.exec(r.message)) return console.warn("Warning: isEqual does not handle circular references.", r.name, r.message), !1;
        throw r
    }
}

var gC = "0.000001px", fm = (() => ` translateZ(${gC})`)(), vC = (() => RD() || CD() || FD())();

function GD(e) {
    e.willChange = "transform";
    let t = ue.current() === ue.canvas;
    vC && t && (e.translateZ = gC)
}

function sg(e) {
    e.willChange = "transform", qD(e, !0)
}

function qD(e, t) {
    let n = ue.current() === ue.canvas;
    if (!vC || !n) return;
    let r = ce(e.transform) && e.transform || "";
    t ? r.includes(fm) || (e.transform = r + fm) : e.transform = r.replace(fm, "")
}

function yC(e, t, n, r = !0) {
    if (!e) return;
    let i = st(e.style), o = n || i[t], s = () => {
        i[t] = o
    };
    i[t] = null, r ? Promise.resolve().then(s) : setTimeout(s, 0)
}

var fu = (() => {
    class e extends Se {
        constructor() {
            super(...arguments), T(this, "layerElement", null), T(this, "setLayerElement", n => {
                this.layerElement = n
            })
        }

        static applyWillChange(n, r, i) {
            n.willChangeTransform && (i ? GD(r) : sg(r))
        }

        shouldComponentUpdate(n, r) {
            return n._needsMeasure || this.state !== r || !og(this.props, n)
        }

        componentDidUpdate(n) {
            st(this.props).clip && st(this.props).radius === 0 && st(n).radius !== 0 && yC(this.layerElement, "overflow", "hidden", !1)
        }
    }

    return T(e, "defaultProps", {}), e
})();

function XD(e, t) {
    if (e.size < t) return;
    let r = Math.round(Math.random());
    for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i)
}

function YD(e, t, n, r) {
    let i = t.get(n);
    if (i) return i;
    XD(t, e);
    let o = r(n);
    return t.set(n, o), o
}

var bC = e => {
    let t = 0, n, r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++) r = e.charCodeAt(n), t = (t << 5) - t + r, t |= 0;
    return t
}, ag = {
    hueRotate: (e, t) => U.toHslString(U.hueRotate(U(e), t)),
    setAlpha: (e, t) => U.toRgbString(U.alpha(U(e), t)),
    getAlpha: e => {
        let t = tg(e);
        return t ? t.a : 1
    },
    multiplyAlpha: (e, t) => U.toRgbString(U.multiplyAlpha(U(e), t)),
    toHex: e => U.toHexString(U(e)).toUpperCase(),
    toRgb: e => U.toRgb(U(e)),
    toRgbString: e => U.toRgbString(U(e)),
    toHSV: e => U.toHsv(U(e)),
    toHSL: e => U.toHsl(U(e)),
    toHslString: e => U.toHslString(U(e)),
    toHsvString: e => U.toHsvString(U(e)),
    hsvToHSLString: e => U.toHslString(U(eu(e.h, e.s, e.v, e.a))),
    hsvToHex: e => U.toHexString(U(eu(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: e => U.toRgbString(U(eu(e.h, e.s, e.v, e.a))),
    hsvToString: e => eu(e.h, e.s, e.v),
    rgbaToString: e => U.toRgbString(U(e)),
    rgbToHexString: e => U.toHexString(U(e)),
    hslToString: e => U.toHslString(U(e)),
    hslToRgbString: e => U.toRgbString(U(e)),
    toColorPickerSquare: e => U.toRgbString(U({h: e, s: 1, l: .5, a: 1})),
    isValid: e => U(e).isValid !== !1,
    equals: (e, t) => (typeof e == "string" && (e = U(e)), typeof t == "string" && (t = U(t)), U.equal(e, t)),
    toHexOrRgbaString: e => {
        let t = U(e);
        return t.a !== 1 ? U.toRgbString(t) : U.toHexString(t)
    }
}, KD = /var\(.+\)/u, QD = new Map;

function ZD(e, t) {
    let n = [e, t];
    return KD.test(e) ? e : YD(1e3, QD, n, () => ag.multiplyAlpha(e, t))
}

function Ba(e, t = 1) {
    let n;
    return "stops" in e ? n = e.stops : n = [{value: e.start, position: 0}, {
        value: e.end,
        position: 1
    }], t === 1 ? n : n.map(r => ({...r, value: ZD(r.value, t)}))
}

function xC(e, t) {
    let n = 0;
    return Ba(e, t).forEach(r => {
        n ^= bC(r.value) ^ r.position
    }), n
}

var JD = ["stops"];

function wC(e) {
    return e && JD.every(t => t in e)
}

var e3 = ["start", "end"];

function SC(e) {
    return e && e3.every(t => t in e)
}

var t3 = ["angle", "alpha"], Pa = {
    isLinearGradient: e => e && t3.every(t => t in e) && (SC(e) || wC(e)),
    hash: e => e.angle ^ xC(e, e.alpha),
    toCSS: (e, t) => {
        let n = Ba(e, e.alpha), r = t !== void 0 ? t : e.angle, i = n.map(o => `${o.value} ${o.position * 100}%`);
        return `linear-gradient(${r}deg, ${i.join(", ")})`
    }
}, n3 = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"], _a = {
    isRadialGradient: e => e && n3.every(t => t in e) && (SC(e) || wC(e)),
    hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ xC(e, e.alpha),
    toCSS: e => {
        let {alpha: t, widthFactor: n, heightFactor: r, centerAnchorX: i, centerAnchorY: o} = e, s = Ba(e, t),
            a = s.map((l, c) => {
                let u = s[c + 1], f = l.position === 1 && u?.position === 1 ? l.position - 1e-4 : l.position;
                return `${l.value} ${f * 100}%`
            });
        return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${o * 100}%, ${a.join(", ")})`
    }
};

function r3({background: e, backgroundColor: t}, n) {
    t ? typeof t == "string" || bu(t) ? n.backgroundColor = t : U.isColorObject(e) && (n.backgroundColor = e.initialValue || U.toRgbString(e)) : e && (e = nt.get(e, null), typeof e == "string" || bu(e) ? n.background = e : Pa.isLinearGradient(e) ? n.background = Pa.toCSS(e) : _a.isRadialGradient(e) ? n.background = _a.toCSS(e) : U.isColorObject(e) && (n.backgroundColor = e.initialValue || U.toRgbString(e)))
}

function we(e, t, n, r) {
    if (r === void 0 && (r = t), e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}

function i3(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}

function o3(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}

function s3(e) {
    if (!e) return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = "preserve-3d" : e.preserve3d === !1 && (t.transformStyle = "flat"), e.backfaceVisible === !0 ? t.backfaceVisibility = "visible" : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"), t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility), e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective), e.__fromCanvasComponent || (e.center === !0 ? (t.left = "50%", t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")), we(e, "size", t), we(e, "width", t), we(e, "height", t), we(e, "minWidth", t), we(e, "minHeight", t), we(e, "top", t), we(e, "right", t), we(e, "bottom", t), we(e, "left", t), we(e, "position", t), we(e, "overflow", t), we(e, "opacity", t), (!e._border || !e._border.borderWidth) && we(e, "border", t), we(e, "borderRadius", t), we(e, "radius", t, "borderRadius"), we(e, "color", t), we(e, "shadow", t, "boxShadow"), we(e, "x", t), we(e, "y", t), we(e, "z", t), we(e, "rotate", t), we(e, "rotateX", t), we(e, "rotateY", t), we(e, "rotateZ", t), we(e, "scale", t), we(e, "scaleX", t), we(e, "scaleY", t), we(e, "skew", t), we(e, "skewX", t), we(e, "skewY", t), we(e, "originX", t), we(e, "originY", t), we(e, "originZ", t), r3(e, t), t
}

function a3(e) {
    for (let t in e) if (t === "drag" || t.startsWith("while") || typeof st(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation")) return !0;
    return !1
}

var S1 = ["onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"],
    l3 = (() => new Set([...S1, ...S1.map(e => `${e}Capture`)]))();

function c3(e) {
    if (e.drag) return "grab";
    for (let t in e) if (l3.has(t)) return "pointer"
}

var dm = "overflow";

function u3(e) {
    return k1(e) ? !0 : e.style ? !!k1(e.style) : !1
}

function k1(e) {
    return dm in e && (e[dm] === "scroll" || e[dm] === "auto")
}

function kC(e) {
    let {
        left: t,
        top: n,
        bottom: r,
        right: i,
        width: o,
        height: s,
        center: a,
        _constraints: l,
        size: c,
        widthType: u,
        heightType: f,
        positionFixed: d,
        positionAbsolute: h
    } = e, v = Rt(e.minWidth), g = Rt(e.minHeight), b = Rt(e.maxWidth), p = Rt(e.maxHeight);
    return {
        top: Rt(n),
        left: Rt(t),
        bottom: Rt(r),
        right: Rt(i),
        width: Rt(o),
        height: Rt(s),
        size: Rt(c),
        center: a,
        _constraints: l,
        widthType: u,
        heightType: f,
        positionFixed: d,
        positionAbsolute: h,
        minWidth: v,
        minHeight: g,
        maxWidth: b,
        maxHeight: p
    }
}

var C1 = {x: 0, y: 0, width: 200, height: 200};

function f3(e) {
    x.useInsertionEffect(() => {
        Aa()
    }, []);
    let t = !!A(ns), {style: n, _initialStyle: r, __fromCanvasComponent: i, size: o} = e, s = kC(e), a = ZV(s),
        l = {display: "block", flex: n?.flex ?? "0 0 auto", userSelect: ue.current() !== ue.preview ? "none" : void 0};
    e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
    let c = !a3(e) && !e.__fromCanvasComponent && !u3(e), u = e.style ? !("pointerEvents" in e.style) : !0;
    c && u && (l.pointerEvents = "none");
    let d = x.Children.count(e.children) > 0 && x.Children.toArray(e.children).every(p => typeof p == "string" || typeof p == "number") && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }, h = s3(e);
    o === void 0 && !i && (i3(h) || (l.width = C1.width), o3(h) || (l.height = C1.height)), s.minWidth !== void 0 && (l.minWidth = s.minWidth), s.minHeight !== void 0 && (l.minHeight = s.minHeight);
    let v = {};
    La(s) && a && !aC(e) && (v = {
        left: a.x,
        top: a.y,
        width: a.width,
        height: a.height,
        right: void 0,
        bottom: void 0
    }), Object.assign(l, d, r, h, v, n), Object.assign(l, {
        overflowX: l.overflowX ?? l.overflow,
        overflowY: l.overflowY ?? l.overflow,
        overflow: void 0
    }), fu.applyWillChange(e, l, !0);
    let g = l;
    l.transform || (g = {x: 0, y: 0, ...l});
    let b = qu();
    return e.positionSticky ? (!b || t) && (g.position = "sticky", g.willChange = "transform", g.zIndex = 1, g.top = e.positionStickyTop, g.right = e.positionStickyRight, g.bottom = e.positionStickyBottom, g.left = e.positionStickyLeft) : b && (e.positionFixed || e.positionAbsolute) && (g.position = "absolute"), "rotate" in g && g.rotate === void 0 && delete g.rotate, [g, a]
}

var d3 = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);

function h3(e) {
    let t = {};
    for (let n in e) (lo(n) || aD(n)) && !d3.has(n) ? t[n] = st(e)[n] : (n === "positionTransition" || n === "layoutTransition") && (t.layout = !0, typeof st(e)[n] != "boolean" && !e.transition && (t.transition = st(e)[n]));
    return t
}

function p3(e) {
    return "data-framer-name" in e
}

var m3 = Oe(function (t, n) {
    let {name: r, center: i, border: o, _border: s, __portal: a} = t, {props: l, children: c} = ID(t), u = h3(l),
        f = za(t), d = c3(t), h = V(null), v = n ?? h, g = {
            "data-framer-component-type": t.componentType ?? "Frame",
            "data-framer-cursor": d,
            "data-framer-highlight": d === "pointer" ? !0 : void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": st(t)["data-framer-offset-parent-id"]
        };
    !p3(t) && r && (st(g)["data-framer-name"] = r);
    let [b, p] = f3(l), m = kC(l), y = aC(m);
    i && !(p && !y && La(m)) ? (u.transformTemplate || (u.transformTemplate = Xu(i)), Object.assign(g, hC(i))) : u.transformTemplate || (u.transformTemplate = void 0), Ku(t, v);
    let w = wD(t), C = !!A(ns), S = g3(l, m, p, C), R = QV(ge(at, {
        children: [w ? k(dC, {
            alt: t.alt ?? "",
            image: w,
            containerSize: p ?? void 0,
            nodeId: t.id && rg(t.id),
            layoutId: f
        }) : null, c, k(yD, {...s, border: o, layoutId: f})]
    }), S), E = Da(t.as), {size: I, radius: O, shadow: H} = b;
    return I !== void 0 && (delete b.size, b.height === void 0 && (b.height = I), b.width === void 0 && (b.width = I)), O !== void 0 && (delete b.radius, b.borderRadius = O), H !== void 0 && (delete b.shadow, b.boxShadow = H), ge(E, {
        ...g, ...u,
        layoutId: f,
        style: b,
        ref: v,
        children: [R, a]
    })
}), du = Oe(function (t, n) {
    let {visible: r = !0} = t;
    return r ? k(m3, {...t, ref: n}) : null
});

function g3(e, t, n, r) {
    if (r) return n ? {width: n.width, height: n.height} : 1;
    let {_usesDOMRect: i} = e, {widthType: o = 0, heightType: s = 0, width: a, height: l} = t;
    return n && !i ? n : o === 0 && s === 0 && typeof a == "number" && typeof l == "number" ? {
        width: a,
        height: l
    } : i || e.positionFixed || e.positionAbsolute ? 2 : 0
}

var lg = "__LAYOUT_TREE_ROOT", CC = x.createContext({
    schedulePromoteTree: () => {
    }, scheduleProjectionDidUpdate: () => {
    }, initLead: () => {
    }
}), v3 = class extends Se {
    constructor() {
        super(...arguments), T(this, "shouldAnimate", !1), T(this, "transition"), T(this, "lead"), T(this, "follow"), T(this, "scheduledPromotion", !1), T(this, "scheduledDidUpdate", !1), T(this, "scheduleProjectionDidUpdate", () => {
            this.scheduledDidUpdate = !0
        }), T(this, "schedulePromoteTree", (e, t, n) => {
            this.follow = this.lead, this.shouldAnimate = n, this.lead = e, this.transition = t, this.scheduledPromotion = !0
        }), T(this, "initLead", (e, t) => {
            this.follow = this.lead, this.lead = e, this.follow && t && (this.follow.layoutMaybeMutated = !0)
        }), T(this, "sharedLayoutContext", {
            schedulePromoteTree: this.schedulePromoteTree,
            scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
            initLead: this.initLead
        })
    }

    getSnapshotBeforeUpdate() {
        var e;
        if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
        let t = !!((e = this.lead) != null && e.layoutMaybeMutated) && !this.shouldAnimate;
        return this.lead.projectionNodes.forEach(n => {
            var r;
            n?.promote({
                needsReset: t,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: n.options.layoutId === lg && !((r = this.follow) != null && r.isExiting)
            })
        }), this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(), this.lead.layoutMaybeMutated = !1, this.transition = void 0, this.scheduledPromotion = !1, null
    }

    componentDidUpdate() {
        var e, t;
        if (!this.lead) return null;
        this.scheduledDidUpdate && ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) == null || t.didUpdate(), this.scheduledDidUpdate = !1)
    }

    render() {
        return k(CC.Provider, {value: this.sharedLayoutContext, children: this.props.children})
    }
}, y3 = {width: "100%", height: "100%", backgroundColor: "none"};

function b3(e) {
    return k(tn.div, {layoutId: lg, style: y3, children: e.children})
}

function T1(e, t) {
    Hn(e) ? e(t) : TC(e) && (e.current = t)
}

function TC(e) {
    return ve(e) && "current" in e
}

function x3() {
    let e = ut(() => new Set), t = ut(() => new Map);
    return ut(() => (n, r) => ({
        get current() {
            return n.current
        }, set current(i) {
            r && r(i), n.current = i;
            let o = i === null;
            e.forEach(s => {
                if (o && t.has(s)) return;
                let a = s(i);
                a && t.set(s, a)
            }), o && (t.forEach(s => s()), t.clear())
        }, observe(i, o = !1) {
            e.has(i) || (e.add(i), !o && n.current && i(n.current))
        }, unobserve(i) {
            i && e.delete(i)
        }, cleanup(i) {
            var o;
            return !i || !t.has(i) ? !1 : ((o = t.get(i)) == null || o(), !0)
        }
    }))
}

function RC(e) {
    let t = V(null), n = x3();
    return ut(() => TC(e) ? n(e) : Hn(e) ? n(t, e) : n(t))
}

function Yi(e, t, n) {
    var r;
    let i = V(), o = V();
    if (oe(() => {
        o.current !== void 0 && (o.current = !0)
    }, [n]), !e) return;
    let s = o.current;
    if (s) {
        o.current = !1, e.cleanup(i.current) || (r = i.current) == null || r.call(i, null);
        let a = e.current;
        a && t?.(a)
    }
    i.current !== t && (e.unobserve(i.current), i.current = t, e.observe(t, s), o.current === void 0 && (o.current = !1))
}

var w3 = class {
    constructor(e) {
        T(this, "sharedIntersectionObserver"), T(this, "callbacks", new WeakMap), document && (this.sharedIntersectionObserver = new IntersectionObserver(this.resizeObserverCallback.bind(this), e))
    }

    resizeObserverCallback(e, t) {
        for (let n of e) {
            let r = this.callbacks.get(n.target);
            r && r([n], t)
        }
    }

    observeElementWithCallback(e, t) {
        this.sharedIntersectionObserver && (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t))
    }

    unobserve(e) {
        this.sharedIntersectionObserver && (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e))
    }

    get root() {
        var e;
        return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root
    }
}, S3 = be(new Map);

function k3(e, t, n) {
    let r = ut(() => `${n.rootMargin}`), i = A(S3), {enabled: o} = n;
    Yi(e, s => {
        var a;
        if (!o || s === null) return;
        let l = i.get(r);
        if (!l || l.root !== ((a = n.root) == null ? void 0 : a.current)) {
            let {root: c, ...u} = n;
            l = new w3({...u, root: c?.current}), i.set(r, l)
        }
        return l.observeElementWithCallback(s, t), () => {
            l?.unobserve(s)
        }
    }, [o])
}

var C3 = new Array(100).fill(void 0).map((e, t) => t * .01), T3 = x.createContext(null);

function R3(e, t, n) {
    let r = x.useRef({isInView: !1, hasAnimatedOnce: !1}), {
        enabled: i,
        animateOnce: o,
        threshold: s,
        rootMargin: a = "0px 0px 0px 0px"
    } = n, l = x.useCallback(([c]) => {
        if (!c) return;
        let {isInView: u, hasAnimatedOnce: f} = r.current, d = F3(c, s?.y ?? 0);
        if (d && !u) {
            if (o && f) return;
            r.current.hasAnimatedOnce = !0, r.current.isInView = !0, t(!0);
            return
        }
        if (!d && u) {
            if (r.current.isInView = !1, o) return;
            t(!1);
            return
        }
    }, [o, s?.y, t]);
    k3(e, l, {threshold: C3, rootMargin: a, enabled: i ?? !0})
}

function E3(e, t) {
    return t.height === 0 ? 0 : e.height / Math.min(t.height, ot.innerHeight)
}

function F3({boundingClientRect: e, intersectionRect: t, isIntersecting: n}, r) {
    return e.height === 0 ? n : n && E3(t, e) >= r
}

var a8 = pr(ju(), 1);
var c8 = pr(ju(), 1);
var R1 = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Vr = Symbol("private"), hm = (() => {
    function e(t = {}, n = !1, r = !0) {
        let i = {
            [Vr]: {
                makeAnimatables: n, observeAnimatables: r, observers: new Kk, reset() {
                    for (let s in o) if (R1(o, s)) {
                        let a = R1(t, s) ? st(t)[s] : void 0;
                        a !== void 0 ? o[s] = a : delete o[s]
                    }
                }, transactions: new Set
            }
        }, o = new Proxy(i, _3);
        return Object.assign(o, t), o
    }

    return e.resetObject = t => t[Vr].reset(), e.addObserver = (t, n) => t[Vr].observers.add(n), e
})(), P3 = class {
    constructor() {
        T(this, "set", (e, t, n, r) => {
            if (t === Vr) return !1;
            let i = e[Vr], o, s;
            if (Nt(n) ? (o = n, s = o.get()) : s = n, i.makeAnimatables && typeof n != "function" && typeof n != "object" && !o && (o = nt(n)), i.observeAnimatables && o) {
                let u = i.transactions;
                o.onUpdate({
                    update: (f, d) => {
                        d && u.add(d), i.observers.notify({value: r}, d)
                    }, finish: f => {
                        u.delete(f) && i.observers.finishTransaction(f)
                    }
                })
            }
            let a = !1, l = !0, c = st(e)[t];
            if (c !== void 0) {
                Nt(c) ? (l = c.get() !== s, c.set(s)) : (l = c !== s, st(e)[t] = s);
                let u = s !== null && typeof s == "object";
                (Array.isArray(s) || u) && (l = !0), a = !0
            } else o && (n = o), a = Reflect.set(e, t, n);
            return l && i.observers.notify({value: r}), a
        }), T(this, "get", (e, t, n) => {
            if (t === Vr) return st(e)[t];
            let r = Reflect.get(e, t, n);
            return typeof r == "function" ? r.bind(n) : r
        })
    }

    deleteProperty(e, t) {
        let n = Reflect.deleteProperty(e, t);
        return e[Vr].observers.notify({value: e}), n
    }

    ownKeys(e) {
        let t = Reflect.ownKeys(e), n = t.indexOf(Vr);
        return n !== -1 && t.splice(n, 1), t
    }

    getOwnPropertyDescriptor(e, t) {
        if (t !== Vr) return Reflect.getOwnPropertyDescriptor(e, t)
    }
}, _3 = new P3;
var I3 = "opacity";

function O3(e) {
    return I3 in e
}

function M3(e, t) {
    if (!O3(e)) return;
    let n = nt.getNumber(e.opacity);
    n !== 1 && (t.opacity = n)
}

function L3(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(r => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`);
        t.push(...n)
    }
    return t
}

function EC(e, t) {
    if (!e.shadows || e.shadows.length === 0) return;
    let n = e.shadows.map(r => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`).join(", ");
    n && (t.textShadow = n)
}

function V3(e, t) {
    let n = [];
    ie(e.brightness) && n.push(`brightness(${e.brightness / 100})`), ie(e.contrast) && n.push(`contrast(${e.contrast / 100})`), ie(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`), ie(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`), ie(e.invert) && n.push(`invert(${e.invert / 100})`), ie(e.saturate) && n.push(`saturate(${e.saturate / 100})`), ie(e.sepia) && n.push(`sepia(${e.sepia / 100})`), ie(e.blur) && n.push(`blur(${e.blur}px)`), e.dropShadows && n.push(...L3(e.dropShadows)), n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "))
}

function A3(e, t) {
    ie(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}

function cg(e, t) {
    A3(e, t), V3(e, t)
}

var D3 = class extends Se {
    constructor() {
        super(...arguments), T(this, "layoutMaybeMutated"), T(this, "projectionNodes", new Map), T(this, "rootProjectionNode"), T(this, "isExiting"), T(this, "shouldPreserveFollowOpacity", e => e.options.layoutId === lg && !this.props.isExiting), T(this, "switchLayoutGroupContext", {
            register: e => this.addChild(e),
            deregister: e => this.removeChild(e),
            transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
            shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
        })
    }

    componentDidMount() {
        this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout)
    }

    shouldComponentUpdate(e) {
        let {isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: o, sharedLayoutContext: s} = e;
        if (this.isExiting = n, t === void 0) return !0;
        let a = !this.props.isLead && !!t, l = this.props.isExiting && !n, c = a || l, u = !!this.props.isLead && !t,
            f = this.props.isOverlayed !== r;
        return (c || u) && this.projectionNodes.forEach(d => d?.willUpdate()), c ? s.schedulePromoteTree(this, o, !!i) : f && s.scheduleProjectionDidUpdate(), !!c && !!i
    }

    addChild(e) {
        let t = e.options.layoutId;
        t && (this.projectionNodes.set(t, e), this.setRootChild(e))
    }

    setRootChild(e) {
        if (!this.rootProjectionNode) return this.rootProjectionNode = e;
        this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e
    }

    removeChild(e) {
        let t = e.options.layoutId;
        t && this.projectionNodes.delete(t)
    }

    render() {
        return k(kl.Provider, {value: this.switchLayoutGroupContext, children: this.props.children})
    }
}, z3 = e => {
    let t = x.useContext(CC);
    return k(D3, {...e, sharedLayoutContext: t})
}, FC = x.createContext(!0);

function x8() {
    return A(FC)
}

function B3() {
    return new Map
}

function $3() {
    return ut(B3)
}

var PC = be({
    register: () => {
    }, deregister: () => {
    }
}), N3 = ({isCurrent: e, isOverlayed: t, children: n}) => {
    let r = $3(), i = W(a => {
        if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return
        }
        r.set(a, void 0)
    }, [r]), o = W(a => {
        let l = r.get(a);
        l?.(), r.delete(a)
    }, [r]), s = V({register: i, deregister: o}).current;
    return $(() => (r.forEach((a, l) => {
        let c = l(e, t);
        r.set(l, Hn(c) ? c : void 0)
    }), () => {
        r.forEach((a, l) => {
            a && (a(), r.set(l, void 0))
        })
    }), [e, t, r]), k(PC.Provider, {value: s, children: n})
};

function _C(e, t = []) {
    let {register: n, deregister: r} = A(PC);
    $(() => {
        if (e) return n(e), () => r(e)
    }, [n, r, ...t])
}

var pm = x.memo(function ({
                              isLayeredContainer: t,
                              isCurrent: n,
                              isPrevious: r,
                              isOverlayed: i = !1,
                              visible: o,
                              transitionProps: s,
                              children: a,
                              backdropColor: l,
                              onTapBackdrop: c,
                              backfaceVisible: u,
                              exitBackfaceVisible: f,
                              animation: d,
                              exitAnimation: h,
                              instant: v,
                              initialProps: g,
                              exitProps: b,
                              position: p = {top: 0, right: 0, bottom: 0, left: 0},
                              withMagicMotion: m,
                              index: y,
                              areMagicMotionLayersPresent: w,
                              id: C,
                              isInitial: S
                          }) {
    let R = pb(), E = A(po), {persistLayoutIdCache: I} = A(Zo),
        O = V({wasCurrent: void 0, wasPrevious: !1, wasBeingRemoved: !1, wasReset: !0, origins: E1({}, g, s)}),
        H = V(null), z = E !== null && !E.isPresent;
    n && O.current.wasCurrent === void 0 && I(), $(() => {
        if (t || !R) return;
        if (z) {
            O.current = {...O.current, wasBeingRemoved: z};
            return
        }
        let {wasPrevious: le, wasCurrent: ee} = O.current, Fe = n && !ee || !z && O.current.wasBeingRemoved && n,
            Te = r && !le, De = E1(O.current.origins, g, s), Pe = O.current.wasReset;
        Fe || Te ? (R.stop(), R.start({zIndex: y, ...De, ...s}), Pe = !1) : Pe === !1 && (R.stop(), R.set({
            zIndex: y, ...Ui,
            opacity: 0
        }), Pe = !0), O.current = {wasCurrent: !!n, wasPrevious: !!r, wasBeingRemoved: !1, wasReset: Pe, origins: De}
    }, [n, r, z]);
    let B = v ? {type: !1} : "velocity" in d ? {...d, velocity: 0} : d, Q = v ? {type: !1} : h || d, j = {...p};
    (j.left === void 0 || j.right === void 0) && (j.width = "auto"), (j.top === void 0 || j.bottom === void 0) && (j.height = "auto");
    let K = (F1(s) || F1(g)) && (t || n || r) ? 1200 : void 0, te = {...Ui, ...O.current.origins}, X = t ? {
        initial: {...te, ...g},
        animate: {...te, ...s, transition: B},
        exit: {...te, ...b, transition: d}
    } : {animate: R, exit: {...te, ...b, transition: Q}}, G = !(z || w === !1), de = !!n && G;
    return ge(du, {
        "data-framer-component-type": "NavigationContainerWrapper",
        width: "100%",
        height: "100%",
        style: {
            position: "absolute",
            transformStyle: "flat",
            backgroundColor: "transparent",
            overflow: "hidden",
            zIndex: t || z || n && m ? y : void 0,
            pointerEvents: void 0,
            visibility: o ? "visible" : "hidden",
            perspective: K
        },
        children: [t && k(du, {
            width: "100%",
            height: "100%",
            "data-framer-component-type": "NavigationContainerBackdrop",
            transition: d,
            initial: {opacity: v && o ? 1 : 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
            backgroundColor: l || "transparent",
            onTap: z ? void 0 : c
        }), k(du, {
            ...j, ...X,
            transition: {default: B, originX: {type: !1}, originY: {type: !1}, originZ: {type: !1}},
            backgroundColor: "transparent",
            backfaceVisible: z ? f : u,
            "data-framer-component-type": "NavigationContainer",
            "data-framer-is-current-navigation-target": !!n,
            style: {pointerEvents: void 0, opacity: n && S || t || n && m ? 1 : 0},
            "data-is-present": G ? void 0 : !1,
            ref: H,
            children: k(T3.Provider, {
                value: H,
                children: k(FC.Provider, {
                    value: de,
                    children: k(N3, {
                        isCurrent: de,
                        isOverlayed: i,
                        children: k(z3, {
                            isLead: n,
                            animatesLayout: !!m,
                            transition: B,
                            isExiting: !G,
                            isOverlayed: i,
                            id: C,
                            children: a
                        })
                    })
                })
            })
        })]
    })
}, j3);

function j3(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}

function E1(e, t, n) {
    let r = {...e};
    return t && (ie(t.originX) && (r.originX = t.originX), ie(t.originY) && (r.originY = t.originY), ie(t.originZ) && (r.originZ = t.originZ)), n && (ie(n.originX) && (r.originX = n.originX), ie(n.originY) && (r.originY = n.originY), ie(n.originZ) && (r.originZ = n.originZ)), r
}

function F1(e) {
    var t, n, r;
    if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
    let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
        s = ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 || ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 || ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
    return o || s
}

var Ui = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: .5,
    originY: .5,
    originZ: 0,
    opacity: 1
}, H3 = class {
    constructor() {
        T(this, "warning", () => {
            Ea("The Navigator API is only available inside of Framer: https://www.framer.com/")
        }), T(this, "goBack", () => this.warning()), T(this, "instant", () => this.warning()), T(this, "fade", () => this.warning()), T(this, "push", () => this.warning()), T(this, "modal", () => this.warning()), T(this, "overlay", () => this.warning()), T(this, "flip", () => this.warning()), T(this, "customTransition", () => this.warning()), T(this, "magicMotion", () => this.warning())
    }
}, W3 = new H3, U3 = be(W3), vt = {
    Fade: {exit: {opacity: 0}, enter: {opacity: 0}},
    PushLeft: {exit: {x: "-30%"}, enter: {x: "100%"}},
    PushRight: {exit: {x: "30%"}, enter: {x: "-100%"}},
    PushUp: {exit: {y: "-30%"}, enter: {y: "100%"}},
    PushDown: {exit: {y: "30%"}, enter: {y: "-100%"}},
    Instant: {animation: {type: !1}, enter: {opacity: 0}},
    Modal: {overCurrentContext: !0, goBackOnTapOutside: !0, position: {center: !0}, enter: {opacity: 0, scale: 1.2}},
    OverlayLeft: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {right: 0, top: 0, bottom: 0},
        enter: {x: "100%"}
    },
    OverlayRight: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {left: 0, top: 0, bottom: 0},
        enter: {x: "-100%"}
    },
    OverlayUp: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {bottom: 0, left: 0, right: 0},
        enter: {y: "100%"}
    },
    OverlayDown: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {top: 0, left: 0, right: 0},
        enter: {y: "-100%"}
    },
    FlipLeft: {backfaceVisible: !1, exit: {rotateY: -180}, enter: {rotateY: 180}},
    FlipRight: {backfaceVisible: !1, exit: {rotateY: 180}, enter: {rotateY: -180}},
    FlipUp: {backfaceVisible: !1, exit: {rotateX: 180}, enter: {rotateX: -180}},
    FlipDown: {backfaceVisible: !1, exit: {rotateX: -180}, enter: {rotateX: 180}},
    MagicMotion: {withMagicMotion: !0}
};

function G3(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "right") {
        case"right":
            return vt.PushLeft;
        case"left":
            return vt.PushRight;
        case"bottom":
            return vt.PushUp;
        case"top":
            return vt.PushDown
    }
}

function q3(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
        case"right":
            return vt.OverlayLeft;
        case"left":
            return vt.OverlayRight;
        case"bottom":
            return vt.OverlayUp;
        case"top":
            return vt.OverlayDown
    }
}

function X3(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
        case"right":
            return vt.FlipLeft;
        case"left":
            return vt.FlipRight;
        case"bottom":
            return vt.FlipUp;
        case"top":
            return vt.FlipDown
    }
}

var Y3 = () => ({
    current: -1,
    previous: -1,
    currentOverlay: -1,
    previousOverlay: -1,
    visualIndex: 0,
    overlayItemId: 0,
    historyItemId: 0,
    history: [],
    overlayStack: [],
    containers: {},
    containerIndex: {},
    containerVisualIndex: {},
    containerIsRemoved: {},
    transitionForContainer: {},
    previousTransition: null
});

function P1(e, t) {
    switch (t.type) {
        case"addOverlay":
            return Q3(e, t.transition, t.component);
        case"removeOverlay":
            return Z3(e);
        case"add":
            return IC(e, t.key, t.transition, t.component);
        case"remove":
            return OC(e);
        case"update":
            return K3(e, t.key, t.component);
        case"back":
            return J3(e);
        case"forward":
            return ez(e);
        default:
            return
    }
}

function K3(e, t, n) {
    return {...e, containers: {...e.containers, [t]: n}}
}

function Q3(e, t, n) {
    let r = e.overlayStack[e.currentOverlay];
    if (r && r.component === n) return;
    let i = e.overlayItemId + 1, o = [...e.overlayStack, {key: `stack-${i}`, component: n, transition: t}];
    return {
        ...e,
        overlayStack: o,
        overlayItemId: i,
        currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
        previousOverlay: e.currentOverlay
    }
}

function Z3(e) {
    return {...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay}
}

function IC(e, t, n, r) {
    e.containers[t] || (e.containers[t] = r), e.history = e.history.slice(0, e.current + 1), e.visualIndex = Math.max(e.history.length, 0);
    let i = e.history[e.history.length - 1], o = i && i.key === t;
    if (e.overlayStack = [], o && e.currentOverlay > -1) return {
        ...e,
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    };
    if (o) return;
    let s = e.containerVisualIndex[t], a = e.containerIsRemoved[t],
        l = i?.key && n.withMagicMotion ? iz(t, s, a, e.history) : !0;
    e.history.push({key: t, transition: n, visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]});
    let c = e.current + 1, u = e.current;
    for (let v in e.containerIndex) e.containerIndex[v] === c && (e.containerIndex[v] = rz(v, e.history));
    e.containerIndex[t] = c;
    let {containerVisualIndex: f, containerIsRemoved: d} = tz(e, t, l),
        h = MC(c, u, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: c,
        previous: u,
        containerVisualIndex: f,
        containerIsRemoved: d,
        transitionForContainer: h,
        previousTransition: null,
        currentOverlay: -1,
        historyItemId: e.historyItemId + 1,
        previousOverlay: e.currentOverlay
    }
}

function J3(e) {
    let t = {...e.containers}, n = OC(e);
    if (n) return n.containers = t, n
}

function ez(e) {
    let t = e.history[e.current + 1];
    if (!t) return;
    let {key: n, transition: r, component: i} = t, o = [...e.history], s = IC(e, n, r, i);
    if (s) return s.history = o, s
}

function OC(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1) return;
    let n = t.pop();
    if (!n) return;
    let r = t[t.length - 1];
    D(r, "The navigation history must have at least one component"), e.containerIndex[r.key] = t.length - 1, t.every(d => d.key !== n.key) && delete e.containers[n.key];
    let o = e.current - 1, s = e.current, {
        containerIsRemoved: a,
        containerVisualIndex: l,
        previousTransition: c,
        visualIndex: u
    } = nz(e, r, n), f = MC(o, s, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: o,
        previous: s,
        containerIsRemoved: a,
        containerVisualIndex: l,
        previousTransition: c,
        visualIndex: u,
        transitionForContainer: f
    }
}

function tz(e, t, n) {
    let r = {containerVisualIndex: {...e.containerVisualIndex}, containerIsRemoved: {...e.containerIsRemoved}};
    if (n) r.containerVisualIndex[t] = e.history.length - 1, r.containerIsRemoved[t] = !1; else {
        let i = e.containerVisualIndex[t];
        for (let [o, s] of Object.entries(e.containerVisualIndex)) i !== void 0 && s > i && (r.containerIsRemoved[o] = !0)
    }
    return r
}

function nz(e, t, n) {
    let r = [t.key, n.key], i = e.history[e.history.length - 2],
        o = e.previousTransition === null ? null : {...e.previousTransition}, s = {
            containerIsRemoved: {...e.containerIsRemoved},
            containerVisualIndex: {...e.containerVisualIndex},
            previousTransition: o,
            visualIndex: e.visualIndex
        };
    i && r.push(i.key);
    let a = e.containerVisualIndex[t.key], l = e.containerVisualIndex[n.key],
        c = a !== void 0 && l !== void 0 && a <= l || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1,
        u = t.visualIndex;
    return c ? (s.containerIsRemoved[n.key] = !0, s.containerVisualIndex[t.key] = u !== void 0 ? u : e.history.length - 1) : (s.visualIndex = e.visualIndex + 1, s.containerVisualIndex[t.key] = e.visualIndex + 1), n.transition.withMagicMotion && (s.previousTransition = n.transition || null), e.containerIsRemoved[t.key] = !1, s
}

function rz(e, t) {
    var n;
    for (let r = t.length; r > t.length; r--) if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
    return -1
}

function MC(e, t, n, r, i) {
    let o = {...i};
    for (let [s, a] of Object.entries(r)) {
        let l = oz(a, {current: e, previous: t, history: n});
        l && (o[s] = l)
    }
    return o
}

function iz(e, t, n, r) {
    return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(s => s.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(s => s.key === e) > -1)
}

function oz(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let o = i[e];
            return ru("enter", o?.transition.enter, o?.transition.animation)
        }
        if (e === r && n > r) {
            let o = i[e + 1];
            return ru("exit", o?.transition.exit, o?.transition.animation)
        }
        if (e === n && n < r) {
            let o = i[e + 1];
            return ru("enter", o?.transition.exit, o?.transition.animation)
        }
        if (e === r && n < r) {
            let o = i[e];
            return ru("exit", o?.transition.enter, o?.transition.animation)
        }
    }
}

var sz = Xi(Ui);

function ru(e, t, n) {
    let r = {}, i = {};
    return sz.forEach(o => {
        r[o] = Ui[o], i[o] = {...n, from: Ui[o]}
    }), t && Object.keys(t).forEach(o => {
        if (t[o] === void 0) return;
        let s = t[o], a = typeof t[o] == "string" ? `${st(Ui)[o]}%` : st(Ui)[o];
        st(r)[o] = e === "enter" ? a : s, i[o] = {...n, from: e === "enter" ? s : a, velocity: 0}
    }), {...r, transition: {...i}}
}

var az = x.createContext(void 0);
var LC = x.createContext(void 0), lz = (() => {
    var e, t, n, r, i, o, s, a, l;
    return t = class extends Se {
        constructor(c) {
            var u;
            super(c), Jt(this, n), Jt(this, i), Jt(this, a), Jt(this, e, null), T(this, "state", Y3()), Jt(this, s, b => {
                if (!this.props.enabled && this.state.history.length > 0) return;
                let p = P1(this.state, b);
                if (!p) return;
                let {skipLayoutAnimation: m} = this.props, y = p.history[p.current],
                    w = b.type === "add" && b.transition.withMagicMotion || b.type === "forward" && y?.transition.withMagicMotion || b.type === "remove" && !!p.previousTransition,
                    C = () => {
                        var S;
                        this.setState(p), y?.key && ((S = this.context) == null || S.call(this, y.key))
                    };
                m && !w ? m(C) : C()
            }), T(this, "goBack", () => {
                var b;
                if (!Ht(this, i, o).call(this)) return of(this, e, ((b = globalThis.event) == null ? void 0 : b.timeStamp) || null), this.state.currentOverlay !== -1 ? pe(this, s).call(this, {type: "removeOverlay"}) : pe(this, s).call(this, {type: "remove"})
            });
            let f = this.props.children;
            if (!f || !uu(f) || !cu(f)) return;
            let d = {...vt.Instant}, v = {
                type: "add",
                key: ((u = f.key) == null ? void 0 : u.toString()) || `stack-${this.state.historyItemId + 1}`,
                transition: d,
                component: f
            }, g = P1(this.state, v);
            g && (this.state = g)
        }

        componentDidMount() {
            var c;
            let u = this.state.history[this.state.current];
            u && ((c = this.context) == null || c.call(this, u.key))
        }

        UNSAFE_componentWillReceiveProps(c) {
            var u;
            let f = c.children;
            if (!uu(f) || !cu(f)) return;
            let d = (u = f.key) == null ? void 0 : u.toString();
            d && (this.state.history.length === 0 ? Ht(this, a, l).call(this, f, vt.Instant) : pe(this, s).call(this, {
                type: "update",
                key: d,
                component: f
            }))
        }

        componentWillUnmount() {
            var c, u;
            (u = (c = this.props).resetProjection) == null || u.call(c)
        }

        instant(c) {
            Ht(this, a, l).call(this, c, vt.Instant, void 0)
        }

        fade(c, u) {
            Ht(this, a, l).call(this, c, vt.Fade, u)
        }

        push(c, u) {
            Ht(this, a, l).call(this, c, G3(u), u)
        }

        modal(c, u) {
            Ht(this, a, l).call(this, c, vt.Modal, u)
        }

        overlay(c, u) {
            Ht(this, a, l).call(this, c, q3(u), u)
        }

        flip(c, u) {
            Ht(this, a, l).call(this, c, X3(u), u)
        }

        magicMotion(c, u) {
            Ht(this, a, l).call(this, c, vt.MagicMotion, u)
        }

        customTransition(c, u) {
            Ht(this, a, l).call(this, c, u)
        }

        render() {
            var c, u, f, d, h;
            let v = Ht(this, n, r).call(this, {overCurrentContext: !1}),
                g = Ht(this, n, r).call(this, {overCurrentContext: !0}), b = cz(g), p = g.current > -1,
                m = this.state.history.length === 1, y = [];
            for (let [C, S] of Object.entries(this.state.containers)) {
                let R = this.state.containerIndex[C];
                D(R !== void 0, "Container's index must be registered");
                let E = this.state.containerVisualIndex[C];
                D(E !== void 0, "Container's visual index must be registered");
                let I = this.state.containerIsRemoved[C], O = this.state.history[R],
                    H = this.state.transitionForContainer[C], z = R === this.state.current,
                    B = R === this.state.previous, Q = z ? !1 : I,
                    j = ((c = O?.transition) == null ? void 0 : c.withMagicMotion) || z && !!this.state.previousTransition;
                y.push(k(pm, {
                    id: C,
                    index: E,
                    isInitial: m,
                    isCurrent: z,
                    isPrevious: B,
                    isOverlayed: p,
                    visible: z || B,
                    position: (u = O?.transition) == null ? void 0 : u.position,
                    instant: I1(R, v),
                    transitionProps: H,
                    animation: _1(R, v),
                    backfaceVisible: gz(R, v),
                    exitAnimation: (f = O?.transition) == null ? void 0 : f.animation,
                    exitBackfaceVisible: (d = O?.transition) == null ? void 0 : d.backfaceVisible,
                    exitProps: (h = O?.transition) == null ? void 0 : h.enter,
                    withMagicMotion: j,
                    areMagicMotionLayersPresent: Q ? !1 : void 0,
                    children: k(b3, {children: O1({component: S, transition: O?.transition})})
                }, C))
            }
            let w = this.state.overlayStack.map((C, S) => k(pm, {
                isLayeredContainer: !0,
                isCurrent: S === this.state.currentOverlay,
                position: C.transition.position,
                initialProps: mz(S, g),
                transitionProps: vz(S, g),
                instant: I1(S, g, !0),
                animation: _1(S, g),
                exitProps: C.transition.enter,
                visible: yz(S, g),
                backdropColor: hz(C.transition),
                backfaceVisible: pz(S, g),
                onTapBackdrop: bz(C.transition, this.goBack),
                index: this.state.current + 1 + S,
                children: O1({component: C.component, transition: C.transition})
            }, C.key));
            return k(du, {
                "data-framer-component-type": "NavigationRoot",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "relative",
                style: {overflow: "hidden", backgroundColor: "unset", pointerEvents: void 0, ...this.props.style},
                children: k(U3.Provider, {
                    value: this,
                    children: ge(LC.Provider, {
                        value: m,
                        children: [k(pm, {
                            isLayeredContainer: !0,
                            position: void 0,
                            initialProps: {},
                            instant: !1,
                            transitionProps: uz(b),
                            animation: fz(b),
                            backfaceVisible: dz(b),
                            visible: !0,
                            backdropColor: void 0,
                            onTapBackdrop: void 0,
                            index: 0,
                            children: k(EV, {
                                children: k(v3, {
                                    children: k(Ad, {
                                        presenceAffectsLayout: !1,
                                        children: y
                                    })
                                })
                            })
                        }), k(Ad, {children: w})]
                    })
                })
            })
        }
    }, e = new WeakMap, n = new WeakSet, r = function (c) {
        let {current: u, previous: f, currentOverlay: d, previousOverlay: h} = this.state;
        return c.overCurrentContext ? {current: d, previous: h, history: this.state.overlayStack} : {
            current: u,
            previous: f,
            history: this.state.history
        }
    }, i = new WeakSet, o = function () {
        return globalThis.event ? pe(this, e) === globalThis.event.timeStamp : !1
    }, s = new WeakMap, a = new WeakSet, l = function (c, u, f) {
        var d, h;
        if (Ht(this, i, o).call(this) || (of(this, e, ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null), !c || !uu(c) || !cu(c))) return;
        let v = {...u, ...f};
        if (!!v.overCurrentContext) return pe(this, s).call(this, {type: "addOverlay", transition: v, component: c});
        let b = ((h = c.key) == null ? void 0 : h.toString()) || `stack-${this.state.historyItemId + 1}`;
        pe(this, s).call(this, {type: "add", key: b, transition: v, component: c})
    }, T(t, "defaultProps", {enabled: !0}), T(t, "contextType", az), t
})(), VC = {stiffness: 500, damping: 50, restDelta: 1, type: "spring"};

function cz(e) {
    let t, n;
    return e.current !== -1 ? t = e.history[e.current] : n = e.history[e.previous], {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}

function uz({currentOverlayItem: e}) {
    return e && e.transition.exit
}

function fz({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : VC
}

function dz({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}

function hz(e) {
    if (e.backdropColor) return e.backdropColor;
    if (e.overCurrentContext) return "rgba(4,4,15,.4)"
}

function pz(e, t) {
    let {current: n, history: r} = t;
    if (e === n) {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else if (e < n) {
        let i = r[e + 1];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    }
}

function mz(e, t) {
    let n = t.history[e];
    if (n) return n.transition.enter
}

function gz(e, t) {
    var n, r, i, o;
    let {current: s, previous: a, history: l} = t;
    return e === a && s > a || e === s && s < a ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null ? void 0 : r.backfaceVisible : (o = (i = l[e]) == null ? void 0 : i.transition) == null ? void 0 : o.backfaceVisible
}

function vz(e, t) {
    let {current: n, history: r} = t;
    if (e !== n) if (e < n) {
        let i = r[e + 1];
        if (i && i.transition) return i.transition.exit
    } else {
        let i = r[e];
        if (i && i.transition) return i.transition.enter
    }
}

function _1(e, t) {
    let {current: n, previous: r, history: i} = t, o = r > n ? r : n;
    if (e < o) {
        let s = i[e + 1];
        if (s && s.transition.animation) return s.transition.animation
    } else if (e !== o) {
        let s = i[e];
        if (s && s.transition.animation) return s.transition.animation
    } else {
        let s = i[e];
        if (s?.transition.animation) return s.transition.animation
    }
    return VC
}

function I1(e, t, n) {
    let {current: r, previous: i, history: o} = t;
    return !!(n && o.length > 1 || e !== i && e !== r || r === i)
}

function yz(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}

function O1(e) {
    return x.Children.map(e.component, n => {
        var r;
        if (!uu(n) || !cu(n) || !n.props) return n;
        let i = {style: n.props.style ?? {}}, o = (r = e?.transition) == null ? void 0 : r.position,
            s = !o || o.left !== void 0 && o.right !== void 0, a = !o || o.top !== void 0 && o.bottom !== void 0,
            l = "style" in n.props ? ve(n.props.style) : !0;
        return s && ("width" in n.props && (i.width = "100%"), l && (i.style.width = "100%")), a && ("height" in n.props && (i.height = "100%"), l && (i.style.height = "100%")), x.cloneElement(n, i)
    })
}

function bz(e, t) {
    if (e.goBackOnTapOutside !== !1) return t
}

function xz(e) {
    let t = gb(), n = jd();
    return x.useInsertionEffect(() => {
        Aa()
    }, []), k(lz, {...e, resetProjection: t, skipLayoutAnimation: n, children: e.children})
}

var R8 = pr(ju(), 1);
var I8 = pr(qm(), 1);

function wz(e, t) {
    let n, r = (...o) => {
        ot.clearTimeout(n), n = ot.setTimeout(e, t, ...o)
    }, i = () => {
        ot.clearTimeout(n)
    };
    return r.cancel = i, r
}

function Cu(...e) {
    return e.filter(Boolean).join(" ")
}

var Sz = (() => {
    function e(t = {}) {
        let n = hm(t, !1, !1);
        return e.addData(n), n
    }

    return e._stores = [], e.addData = t => {
        e._stores.push(t)
    }, e.reset = () => {
        e._stores.forEach(t => hm.resetObject(t))
    }, e.addObserver = (t, n) => hm.addObserver(t, n), e
})(), mm = Sz;
var kz = {update: 0}, Cz = x.createContext({update: NaN});
var Tz = class extends Se {
    constructor() {
        super(...arguments), T(this, "observers", []), T(this, "state", kz), T(this, "taskAdded", !1), T(this, "frameTask", () => {
            this.setState({update: this.state.update + 1}), this.taskAdded = !1
        }), T(this, "observer", () => {
            this.taskAdded || (this.taskAdded = !0, Ra.addFrameTask(this.frameTask))
        })
    }

    componentWillUnmount() {
        this.observers.map(e => e()), mm.reset()
    }

    render() {
        let {children: e} = this.props;
        return this.observers.map(t => t()), this.observers = [], mm._stores.forEach(t => {
            let n = mm.addObserver(t, this.observer);
            this.observers.push(n)
        }), k(Cz.Provider, {value: {...this.state}, children: e})
    }
}, rW = pr(ju(), 1);
var AC = "__framer__", Rz = (() => AC.length)();

function Ez(e) {
    if (e.startsWith(AC)) return e.substr(Rz)
}

var fr = ["opacity", "x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY", "transformPerspective"],
    Tu = e => ({
        x: Ye(e?.x ?? 0),
        y: Ye(e?.y ?? 0),
        opacity: Ye(e?.opacity ?? 1),
        scale: Ye(e?.scale ?? 1),
        rotate: Ye(e?.rotate ?? 0),
        rotateX: Ye(e?.rotateX ?? 0),
        rotateY: Ye(e?.rotateY ?? 0),
        skewX: Ye(e?.skewX ?? 0),
        skewY: Ye(e?.skewY ?? 0),
        transformPerspective: Ye(e?.transformPerspective ?? 0)
    }), rt = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0
    };

function DC(e) {
    return e in rt
}

function zC(e, t) {
    let n = ut(() => ({values: Tu(t ? e : void 0)}));
    return x.useEffect(() => {
        if (!t) for (let r of fr) {
            let i = rt[r];
            Ge(i) || n.values[r].set(i)
        }
    }, [n, t]), n
}

var Fz = new Set(["loopEffectEnabled", "loopTransition", "loop", "loopRepeatType", "loopRepeatDelay"]), Pz = () => {
    let e = V();
    return $(() => () => {
        clearTimeout(e.current)
    }, []), async t => new Promise(n => {
        e.current = setTimeout(() => {
            n(!0)
        }, t * 1e3)
    })
};

function _z({loopEffectEnabled: e, loopRepeatDelay: t, loopTransition: n, loopRepeatType: r, loop: i}) {
    let o = Ci(), s = ut(Tu), a = x.useRef(!1), l = Pz(), c = async () => {
        if (!i) return;
        let d = n || void 0, h = a.current && r === "mirror", v = h ? rt : i, g = h ? i : rt;
        return a.current = !a.current, Promise.all(fr.map(b => {
            if (!(o && b !== "opacity")) return s[b].set(g[b] ?? rt[b]), new Promise(p => {
                let m = {...d, onComplete: () => p()}, y = v[b] ?? g[b];
                typeof y == "number" && Mn(s[b], y, m)
            })
        }))
    }, u = async () => {
        e && (await c(), await l(t ?? 0), await u())
    }, f = W(() => {
        fr.forEach(d => {
            s[d].stop()
        }), fr.forEach(d => {
            s[d].set(rt[d])
        }), a.current = !1
    }, [s]);
    return x.useEffect(() => (e && i ? u() : f(), () => f()), [e]), x.useMemo(() => ({
        values: s,
        style: e ? {willChange: "transform"} : {}
    }), [s, e])
}

function Iz(e, t, n, r, i) {
    let o = n / 100 - 1, s = i ? (t - r) * o : 0, a = -e * o;
    return s + a
}

var Oz = new Set(["speed", "adjustPosition", "offset", "parallaxTransformEnabled"]);

function Mz(e, t, n) {
    let {speed: r = 100, offset: i = 0, adjustPosition: o = !1, parallaxTransformEnabled: s} = e, a = x.useRef(null),
        l = Ci(),
        c = x.useCallback(v => a.current === null || r === 100 ? 0 : Iz(v, a.current, r, i, o), [a, r, i, o]), {scrollY: u} = sb(),
        f = At(u, c), d = Jn(o && a.current === null ? "hidden" : n), h = Jn(0);
    return Yi(t, v => {
        v !== null && (Z.read(() => {
            var g;
            a.current = ((g = v.getBoundingClientRect()) == null ? void 0 : g.top) ?? 0
        }), Z.update(() => {
            f.set(c(u.get())), o && d.set(n ?? "initial")
        }))
    }, [o]), {values: {y: l || !s ? h : f}, style: s ? {visibility: d, willChange: "transform"} : void 0}
}

function Lz(e) {
    if (!(ce(e) || !ve(e))) return e?.transition
}

function gm(e, t, n, r, i, o) {
    let s = Lz(e);
    return Promise.all(fr.map(a => new Promise(l => {
        if (n && a !== "opacity") return l();
        let c = t.values[a];
        c.stop();
        let u = ve(e) ? e?.[a] ?? rt[a] : rt[a];
        if (Be(u) && (u = u.get()), !Ue(u)) return l();
        let f = Qn.get(r.current);
        f && f.setBaseTarget(a, u);
        let d;
        if (ce(i) && !c?.hasAnimated && ot.MotionHandoffAnimation) {
            let h = ot.MotionHandoffAnimation(i, a, Z);
            h && (d = h)
        }
        o ? c.set(u) : Mn(c, u, {...s, velocity: 0, startTime: d, onComplete: () => l()})
    })))
}

var Vz = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);

function Az({initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: o}, s, a, l, c) {
    let u = r ?? e, f = i ?? t, d = o ?? n, [h, v] = kd(),
        g = V({lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1}), b = ut(() => {
            let m = u ?? l;
            if (!ve(m)) return {values: Tu()};
            let y = {};
            for (let w in m) {
                let C = ve(m) ? m[w] : void 0;
                Ue(C) && (y[w] = C)
            }
            return {values: Tu(y)}
        });
    Yi(s, m => {
        let {hasMounted: y} = g.current;
        if (y && f) return;
        let w = Qn.get(m);
        if (w) {
            Object.assign(g.current, {hasMounted: !0});
            for (let C in b.values) {
                if (!DC(C)) continue;
                let S = l?.[C];
                w.setBaseTarget(C, Ue(S) ? S : rt[C])
            }
        }
    }, [f]);
    let p = Ci();
    return Yi(s, m => {
        if (!a) {
            v?.();
            return
        }
        if (m === null) return;
        if (h !== g.current.lastPresence) {
            Object.assign(g.current, {lastPresence: h}), h ? u && f && (Object.assign(g.current, {running: !0}), gm(f, b, p, s, c).then(() => Object.assign(g.current, {running: !1}))) : d ? (Object.assign(g.current, {running: !0}), gm(d, b, p, s, c).then(() => Object.assign(g.current, {running: !1})).then(() => v())) : v();
            return
        }
        let {lastAnimate: y, running: w} = g.current;
        og(f, y) || !f || (Object.assign(g.current, {lastAnimate: f}), gm(f, b, p, s, c, !w).then(() => Object.assign(g.current, {running: !1})))
    }), b
}

function Dz(e, t) {
    let n = 0, r = e;
    for (; r && r !== t && r instanceof HTMLElement;) n += r.offsetTop, r = r.offsetParent;
    return n
}

var zz = 1;

function BC(e, t = 0, n) {
    var r;
    let i = [], o = [];
    for (let s = e.length; s >= 0; s--) {
        let {ref: a, offset: l} = e[s] ?? {};
        if (!a || !a.current) continue;
        let u = Dz(a.current, document.documentElement) - zz - (l ?? 0) - t,
            f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0, d = i[i.length - 1], h = Math.max(u + f, 0);
        i.push(u), o.unshift(Math.max(u, 0), d === void 0 ? h : Math.min(h, Math.max(d - 1, 0))), n?.(s)
    }
    return o
}

function Bz(e, t = 0) {
    return e < t ? "up" : "down"
}

var $z = 4;

function Nz(e, t, n = {}) {
    let {direction: r, target: i} = e ?? {}, {repeat: o = !0, enabled: s = !0} = n;
    x.useEffect(() => {
        if (!r || !s) return;
        let a, l = 0, c, u;
        return Wr(({y: f}) => {
            if (!o && u === i || f.current > f.scrollLength || f.current < 0) return;
            let d = Bz(f.current, a);
            a = f.current;
            let h = d !== c;
            if (c = d, h) l = f.current; else {
                if (Math.abs(f.current - l) < $z) return;
                let g = d === r ? i : void 0;
                g !== u && t(g), u = g
            }
        })
    }, [r, o, i, s, t])
}

var jz = new Set(["threshold", "animateOnce", "opacity", "targetOpacity", "x", "y", "scale", "transition", "rotate", "rotateX", "rotateY", "perspective", "enter", "exit", "animate", "styleAppearEffectEnabled", "targets", "scrollDirection"]),
    Hz = ["animate", "animate"], M1 = {inputRange: [], outputRange: []};

function Wz(e, t, n) {
    let r = BC(e, t), i = [...Hz], o = r[0];
    if (!Ue(o)) return M1;
    if (o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n) {
        let s = r.length - 1, a = r[s];
        if (!Ue(a)) return M1;
        r.push(a + 1), i.push("exit")
    }
    return {inputRange: r, outputRange: i}
}

function vm(e) {
    return {
        x: e?.x ?? rt.x,
        y: e?.y ?? rt.y,
        scale: e?.scale ?? rt.scale,
        opacity: e?.opacity ?? rt.opacity,
        transformPerspective: e?.transformPerspective ?? rt.transformPerspective,
        rotate: e?.rotate ?? rt.rotate,
        rotateX: e?.rotateX ?? rt.rotateX,
        rotateY: e?.rotateY ?? rt.rotateY,
        skewX: e?.skewX ?? rt.skewX,
        skewY: e?.skewY ?? rt.skewY,
        transition: e?.transition ?? void 0
    }
}

function Uz({opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: o, ...s}) {
    return x.useMemo(() => ({
        initial: r ?? vm({...s, opacity: e ?? t ?? 1, transformPerspective: n}),
        animate: o ?? vm({opacity: t}),
        exit: i ?? vm()
    }), [o, s, r, i, e, t, n])
}

function Gz(e, t) {
    let n = Ci(), r = Uz(e), i = e.styleAppearEffectEnabled, o = zC(i ? r.initial : r.animate, i),
        s = x.useRef({isPlaying: !1, scheduledAppearState: void 0, lastAppearState: !e.styleAppearEffectEnabled}),
        a = x.useRef(), l = x.useCallback(async ({transition: d, ...h}, v) => {
            let g = d ?? r.animate.transition ?? e.transition;
            await a.current, a.current = Promise.all(fr.map(b => {
                v && o.values[b].set(r.initial[b] ?? rt[b]);
                let p = h[b] ?? rt[b], m = Qn.get(t.current);
                return m && typeof p != "object" && m.setBaseTarget(b, p), new Promise(y => {
                    if (n && b !== "opacity") Ue(p) && o.values[b].set(p), y(); else {
                        let w = {restDelta: b === "scale" ? .001 : void 0, ...g, onComplete: () => y()};
                        typeof p == "number" && Mn(o.values[b], p, w)
                    }
                })
            }))
        }, []), c = e.animateOnce && s.current.lastAppearState === !0,
        u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
    R3(t, d => {
        let {isPlaying: h, lastAppearState: v} = s.current;
        if (h) {
            s.current.scheduledAppearState = d;
            return
        }
        s.current.scheduledAppearState = void 0, s.current.lastAppearState = d, v !== d && l(d ? r.animate : r.exit, d)
    }, {enabled: u, animateOnce: !!e.animateOnce, threshold: {y: e.threshold}});
    let f = e.targets && i && !e.scrollDirection;
    return x.useEffect(() => {
        if (!f) return;
        let d = {initial: !0}, h = "initial";
        return Wr(({y: v}) => {
            let {targets: g} = e;
            if (!g || !g[0] || g[0].ref && !g[0].ref.current) return;
            let {inputRange: b, outputRange: p} = Wz(g, (e.threshold ?? 0) * v.containerLength, !!e.exit);
            if (b.length === 0 || b.length !== p.length) return;
            let m = Rs(v.current, b, p);
            if (e.animateOnce && d[m] || (d[m] = !0, h === m)) return;
            h = m;
            let y = st(r)[m];
            y && l(y)
        })
    }, [f]), Nz(e.scrollDirection, d => l(d ?? r.animate), {enabled: i, repeat: !e.animateOnce}), o
}

var qz = new Set(["transformViewportThreshold", "styleTransformEffectEnabled", "transformTargets", "spring", "transformTrigger"]),
    Xz = (e, t) => {
        var n;
        let r = (n = e?.[0]) == null ? void 0 : n.target;
        return t ? {opacity: r?.opacity ?? 1} : r
    }, $C = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: []
    });

function Yz(e, t) {
    let n = x.useRef({});
    x.useEffect(() => {
        if (t !== void 0) for (let r of Xi(e)) {
            let i = e[r];
            i.attach((o, s) => {
                let a = n.current[r];
                if (a && a.stop(), n.current[r] = ld({
                    keyframes: [i.get(), o],
                    velocity: i.getVelocity(), ...t,
                    restDelta: .001,
                    onUpdate: s
                }), !Xe.isProcessing) {
                    let l = performance.now() - Xe.timestamp;
                    l < 40 && (n.current[r].time = l / 1e3)
                }
                return i.get()
            })
        }
    }, [JSON.stringify(t)])
}

function Kz(e, t) {
    let n = $C();
    return {
        inputRange: BC(e, t, i => {
            var o, s, a;
            let l = (o = e[i - 1]) == null ? void 0 : o.target, c = (s = e[i]) == null ? void 0 : s.target;
            for (let u of fr) (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0)
        }), effectKeyOutputRange: n
    }
}

function Qz(e) {
    var t;
    let n = $C();
    for (let {target: r} of e) for (let i of fr) (t = n[i]) == null || t.push(r[i]);
    return n
}

var L1 = [0, 1];

function Zz({
                transformTrigger: e,
                styleTransformEffectEnabled: t,
                transformTargets: n,
                spring: r,
                transformViewportThreshold: i = 0
            }, o) {
    let s = Ci(), a = zC(Xz(n, s), t), l = !t || !n, c = e === "onScrollTarget";
    return ze(() => {
        if (!(l || !c)) return Wr(({y: u}) => {
            if (!n[0] || n[0].ref && !n[0].ref.current) return;
            let {inputRange: f, effectKeyOutputRange: d} = Kz(n, i * u.containerLength);
            if (f.length !== 0) for (let h of fr) s && h !== "opacity" || f.length === d[h].length && d[h][0] !== void 0 && a.values[h].set(Rs(u.current, f, d[h]))
        })
    }, [s, c, i, a, n, l]), Yi(o, u => {
        if (l || c || u === null) return;
        let f = Qz(n);
        return Wr(({y: d}) => {
            for (let h of fr) s && h !== "opacity" || L1.length === f[h].length && f[h][0] !== void 0 && a.values[h].set(Rs(d.progress, L1, f[h]))
        }, e === "onInView" ? {target: u ?? void 0, offset: ["start end", "end end"]} : void 0)
    }, [s, e, c, a, n, l]), Yz(a.values, r), x.useMemo(() => ({
        values: a.values,
        style: t ? {willChange: "transform"} : {}
    }), [a, t])
}

var NC = {parallax: Oz, styleAppear: jz, styleTransform: qz, loop: Fz, presence: Vz}, Jz = Xi(NC);

function V1(e, t, n) {
    return !(e in n) && t in n || n[e] === !0
}

function e5(e) {
    let t = {
        parallax: {},
        styleAppear: {},
        styleTransform: {},
        presence: {animate: e.animate, initial: e.initial, exit: e.exit},
        loop: {},
        forwardedProps: {}
    };
    for (let n in e) {
        let r = Ez(n);
        if (r) for (let i of Jz) {
            let o = NC[i];
            if (o?.has(r)) {
                t[i][r] = st(e)[n];
                break
            }
        } else t.forwardedProps[n] = st(e)[n]
    }
    return t.parallax.parallaxTransformEnabled = V1("parallaxTransformEnabled", "speed", t.parallax), t.styleAppear.styleAppearEffectEnabled = V1("styleAppearEffectEnabled", "animateOnce", t.styleAppear), t
}

var pi = e => e.reduce((t, n) => t += n, 0), A1 = e => e.reduce((t, n) => t = t * n, 1), t5 = "current";

function n5(e) {
    return ve(e) && t5 in e
}

function r5(e, t) {
    if (!e || !ve(e)) return t;
    for (let n in e) {
        let r = e[n];
        !Be(r) || !DC(n) || Ue(r.get()) && t[n].push(r)
    }
}

function ba(e) {
    return ce(e) || Array.isArray(e)
}

var mW = e => x.forwardRef((t, n) => {
    var r;
    if (t.__withFX) return k(e, {...t, animate: void 0, initial: void 0, exit: void 0, ref: n});
    if (qu()) {
        let Te = ba(t.animate) ? t.animate : void 0, De = ba(t.initial) ? t.initial : void 0;
        return k(e, {...t, animate: Te, initial: De, exit: void 0, ref: n})
    }
    let {
            parallax: o = {},
            styleAppear: s = {},
            styleTransform: a = {},
            presence: l = {},
            loop: c = {},
            forwardedProps: u
        } = e5(t), {__targetOpacity: f, __perspectiveFX: d, __smartComponentFX: h = !1} = t, v = Jn(f ?? 1),
        g = RC(n), {values: b} = Az(l, g, h, t.style, t[bl]), {
            values: p,
            style: m
        } = Mz(o, g, (r = t.style) == null ? void 0 : r.visibility), {
            values: y,
            style: w
        } = Zz(a, g), {values: C} = Gz(s, g), {values: S, style: R} = _z(c), E = x.useMemo(() => ({
            scale: [C.scale, S.scale, b.scale, y.scale],
            opacity: [C.opacity, S.opacity, b.opacity, v, y.opacity],
            x: [C.x, S.x, b.x, y.x],
            y: [C.y, S.y, p.y, b.y, y.y],
            rotate: [C.rotate, S.rotate, b.rotate, y.rotate],
            rotateX: [C.rotateX, S.rotateX, b.rotateX, y.rotateX],
            rotateY: [C.rotateY, S.rotateY, b.rotateY, y.rotateY],
            skewX: [C.skewX, S.skewX, b.skewX, y.skewX],
            skewY: [C.skewY, S.skewY, b.skewY, y.skewY],
            transformPerspective: [y.transformPerspective, C.transformPerspective]
        }), [v, y, p, C, S, b]);
    r5(t.style, E);
    let I = At(E.scale, A1), O = At(E.opacity, A1), H = At(E.x, pi), z = At(E.y, pi), B = At(E.rotate, pi),
        Q = At(E.rotateX, pi), j = At(E.rotateY, pi), se = At(E.skewX, pi), K = At(E.skewY, pi),
        te = At(E.transformPerspective, pi), {drag: X, dragConstraints: G} = u;
    LD(X && n5(G) ? G : void 0);
    let de = {opacity: O, scale: I, x: H, y: z, rotate: B, rotateX: Q, rotateY: j, skewX: se, skewY: K};
    Ge(d) && (de.transformPerspective = te);
    let me = ba(t.animate) ? t.animate : void 0, le = ba(t.initial) ? t.initial : void 0,
        ee = ba(t.exit) ? t.exit : void 0, Fe = h && !l.presenceInitial ? {initial: le, animate: me, exit: ee} : {};
    return k(e, {...u, ...Fe, __withFX: !0, style: {...t.style, ...m, ...w, ...R, ...de}, values: b, ref: g})
});

function Zu(e) {
    let t = ut(() => i5(e));
    return t.useSetup(e), t.cloneAsElement
}

function i5(e) {
    let t = {forwardedRef: e, childRef: null, ref: null};
    t.ref = D1(t);
    let n = (s, a) => {
        if (!t.forwardedRef && t.forwardedRef === s) {
            t.ref = a;
            return
        }
        let l = !1;
        t.childRef !== a && (t.childRef = a, l = !0), t.forwardedRef !== s && (t.forwardedRef = s, l = !0), l && (t.ref = D1(t))
    }, r = !1;

    function i(s, a) {
        if (r) throw new ReferenceError("useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.");
        return r = !0, mn.count(s) > 1 && e && (t.forwardedRef = void 0, t.ref = t.childRef), mn.map(s, l => {
            if (Vt(l)) {
                let c = "ref" in l ? l.ref : void 0;
                n(t.forwardedRef, c);
                let u = t.ref !== c ? {...a, ref: t.ref} : a;
                return gr(l, u)
            }
            return l
        })
    }

    let o = function (a, l) {
        return k(at, {children: i(a, l)})
    };
    return o.cloneAsArray = i, {
        useSetup: s => {
            r = !1, n(s, t.childRef)
        }, cloneAsElement: o
    }
}

function D1(e) {
    if (!e.forwardedRef) return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return r => {
        T1(n, r), T1(t, r)
    }
}

var jC = x.createContext({});

function wW() {
    return x.useContext(jC)
}

var SW = x.forwardRef(function ({width: t, height: n, y: r, children: i, ...o}, s) {
    let a = x.useMemo(() => ({width: t, height: n, y: r}), [t, n, r]), l = Zu(s);
    return k(jC.Provider, {value: a, children: l(i, o)})
}), o5 = e => x.forwardRef((t, n) => {
    let r = za(t);
    return k(e, {layoutId: r, ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n})
}), s5 = class extends Se {
    constructor() {
        super(...arguments), T(this, "state", {error: void 0})
    }

    static getDerivedStateFromError(e) {
        return e instanceof lu || console.error(`Derived error in SuspenseErrorBoundary:
`, e), {error: e}
    }

    componentDidCatch(e, t) {
        var n;
        if (e instanceof lu) return;
        let r = t?.componentStack;
        console.error(`Caught error in SuspenseErrorBoundary:
`, e, r);
        let i = e instanceof Error && typeof e.stack == "string" ? e.stack : null;
        (n = F.__framer_events) == null || n.push(["published_site_load_recoverable_error", {
            message: String(e),
            stack: i,
            componentStack: i ? void 0 : r
        }])
    }

    render() {
        let e = this.state.error;
        if (e === void 0) return this.props.children;
        if (e instanceof lu) throw e.cause;
        return F.__framer_STPD_OPT_OUT__ = !0, k(mr, {children: this.props.fallbackChildren})
    }
}, a5 = (() => typeof F < "u" ? new Promise(() => {
}) : null)();

function l5() {
    if (typeof F > "u" || F.__framer_STPD_OPT_OUT__) return k("div", {
        hidden: !0,
        dangerouslySetInnerHTML: {__html: "<!-- SuspenseThatPreservesDOM fallback rendered -->"}
    });
    throw a5
}

function ug({children: e}) {
    return k(s5, {fallbackChildren: e, children: k(mr, {fallback: k(l5, {}), children: e})})
}

function HC(e, t) {
    var n;
    if (typeof F > "u" || Math.random() > .01) return;
    let r = e instanceof Error && typeof e.stack == "string" ? e.stack : null, i = t?.componentStack;
    (n = ot.__framer_events) == null || n.push(["published_site_load_recoverable_error", {
        message: String(e),
        stack: r,
        componentStack: r ? void 0 : i
    }])
}

function c5(...e) {
    console.error(...e)
}

function u5() {
    return ue.current() !== ue.canvas
}

function f5({errorMessage: e, fallback: t, children: n}) {
    return u5() ? k(d5, {fallback: t, errorMessage: e, children: k(h5, {fallback: t, children: n})}) : n
}

var d5 = class extends Se {
    constructor() {
        super(...arguments), T(this, "state", {hasError: !1})
    }

    static getDerivedStateFromError() {
        return {hasError: !0}
    }

    componentDidCatch(e, t) {
        c5(this.props.errorMessage, t?.componentStack), HC(e, t)
    }

    render() {
        let {children: e, fallback: t = null} = this.props, {hasError: n} = this.state;
        return n ? t : e
    }
};

function h5({children: e, fallback: t = null}) {
    return typeof F > "u" ? k(mr, {fallback: t, children: e}) : k(ug, {children: e})
}

var p5 = class extends Se {
    constructor() {
        super(...arguments), T(this, "state", {hasError: !1})
    }

    componentDidCatch(e, t) {
        let n = t?.componentStack;
        console.error("Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.", n), this.setState({hasError: !0}), HC(e, t)
    }

    render() {
        let {children: e} = this.props, {hasError: t} = this.state;
        return t ? null : e
    }
}, Am = (() => x.createContext({level: 0, scopeId: void 0}))();

function m5() {
    return x.useContext(Am)
}

function g5({children: e, scopeId: t}) {
    let n = x.useContext(Am).level, r = x.useMemo(() => ({level: n + 1, scopeId: t}), [n, t]);
    return k(Am.Provider, {value: r, children: e})
}

var v5 = "code-crash:";

function y5(e, t) {
    return `${v5}${e}:${t}`
}

function b5(e, t) {
    return x5("component", e, t)
}

function x5(e, t, n) {
    return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${y5(t, n)} \u2192 click \u201CShow Layer\u201D.`
}

function w5(e, t, n, r, i, o) {
    let s = S5(e, t, n, o);
    return s && !i && r || s && i
}

function S5(e, t, n, r) {
    return !!(n === 0 || n === 1 && r && e === t)
}

var k5 = x.forwardRef(({
                           children: e,
                           layoutId: t,
                           as: n,
                           scopeId: r,
                           nodeId: i,
                           isAuthoredByUser: o,
                           isModuleExternal: s,
                           inComponentSlot: a,
                           ...l
                       }, c) => {
    let u = ut(() => t ? `${t}-container` : void 0), f = Da(n),
        d = x.Children.map(e, v => x.isValidElement(v) ? x.cloneElement(v, {layoutId: t}) : v),
        h = C5(d, r, i, o, s, a);
    return k(f, {
        layoutId: u, ...l,
        ref: c,
        children: k(ns.Provider, {
            value: !0,
            children: k(PV, {enabled: !1, children: k(J0, {id: t ?? "", inherit: "id", children: h})})
        })
    })
}), AW = o5(k5);

function C5(e, t, n, r, i, o) {
    let s = m5();
    return Ge(t) || Ge(n) ? k(p5, {children: e}) : (w5(t, s.scopeId, s.level, r ?? !1, i ?? !1, o ?? !1) && (e = k(f5, {
        errorMessage: b5(t, n),
        fallback: null,
        children: e
    })), i && (e = k(g5, {scopeId: t, children: e})), e)
}

var T5 = x.createContext(void 0), R5 = "style[data-framer-css-ssr-minified]", E5 = (() => {
    var e;
    if (!Dr()) return new Set;
    let t = (e = document.querySelector(R5)) == null ? void 0 : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set
})(), F5 = "data-framer-css-ssr", WC = (e, t, n) => x.forwardRef((r, i) => {
    let {sheet: o, cache: s} = x.useContext(T5) ?? {}, a = n;
    if (!Dr()) {
        Hn(t) && (t = t(ue.current()));
        let l = Array.isArray(t) ? t.join(`
`) : t;
        return ge(at, {
            children: [k("style", {
                [F5]: !0,
                "data-framer-component": a,
                dangerouslySetInnerHTML: {__html: l}
            }), k(e, {...r, ref: i})]
        })
    }
    return et(() => {
        if (a && E5.has(a)) return;
        (Hn(t) ? t(ue.current()) : Array.isArray(t) ? t : t.split(`
`)).forEach(c => c && lC(c, o, s))
    }, []), k(e, {...r, ref: i})
}), fg = be({
    onRegisterCursors: () => () => {
    }, registerCursors: () => {
    }
}), Ru = "framer-cursor-none", Dm = "framer-pointer-events-none";

function P5(e, t, n) {
    let r = {};
    for (let [, i] of e) for (let o of i) {
        let s = r[o] ?? t[o] ?? n[o];
        s && (r[o] = s)
    }
    return r
}

var _5 = Xa(function ({children: t}) {
        let n = ut(() => {
            let i = new Set, o = {}, s = new Map;
            return {
                onRegisterCursors: a => (a(o), i.add(a), () => i.delete(a)), registerCursors: (a, l) => {
                    s.set(l, Object.keys(a)), o = P5(s, o, a);
                    for (let c of i) c(o);
                    return () => {
                        s.delete(l)
                    }
                }
            }
        }), r = Ci();
        return ge(fg.Provider, {value: n, children: [t, !r && k(V5, {})]})
    }),
    I5 = (() => WC(_5, [`.${Ru}, .${Ru} * { cursor: none !important; }`, `.${Dm}, .${Dm} * { pointer-events: none !important; }`], "framer-lib-cursors-host"))(),
    O5 = (() => ({position: "fixed", top: 0, left: 0, zIndex: 12 + 1, pointerEvents: "none"}))();

function M5(e) {
    return !(!e || e.placement || e.alignment)
}

function iu(e) {
    switch (e) {
        case"start":
            return "0%";
        case"center":
            return "-50%";
        case"end":
            return "-100%";
        default:
            Ce(e)
    }
}

function L5(e, t = "center") {
    switch (e) {
        case"top":
            return `${iu(t)}, -100%`;
        case"right":
            return `0%, ${iu(t)}`;
        case"bottom":
            return `${iu(t)}, 0%`;
        case"left":
            return `-100%, ${iu(t)}`;
        default:
            return "-50%, -50%"
    }
}

var z1 = "data-framer-portal-id";

function B1(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n;) {
        if (n === document.body) return;
        let r = n.getAttribute("data-framer-cursor");
        if (r) return r;
        if (n.hasAttribute(z1)) {
            let i = n.getAttribute(z1);
            n = n.parentElement, i && (n = document.getElementById(i) ?? n)
        } else n = n.parentElement
    }
}

function $1(e) {
    for (let t in e) return !1;
    return !0
}

var V5 = Xa(function () {
    let {onRegisterCursors: t} = A(fg), [n, r] = _e(!1), i = Jn(0), o = Jn(0), s = Jn(0), a = V(null),
        l = V({cursors: {}, cursorHash: void 0}), c = Yu();
    ze(() => {
        let R = ot.matchMedia("(any-hover: none)");

        function E(I) {
            I.matches ? ht(() => r(!1)) : r(!0)
        }

        return R.addEventListener("change", E), R.matches || r(!0), () => {
            R.removeEventListener("change", E)
        }
    }, []), $(() => {
        if (!n) return;
        let R = 0, E = 0;

        function I() {
            i.set(R), o.set(E), Mn(s, 1, {type: "tween", duration: .2})
        }

        let O = () => {
            if ($1(l.current.cursors)) return;
            let B = B1(R, E);
            B !== l.current.cursorHash && (l.current.cursorHash = B, Z.update(() => c()))
        };

        function H(B) {
            if (B.pointerType === "touch") {
                Et(O);
                return
            }
            Z.read(O, !0), R = B.clientX, E = B.clientY, Z.update(I)
        }

        function z(B) {
            if (B.target === a.current || !a.current) return;
            let Q = new PointerEvent(B.type, {
                bubbles: !0,
                cancelable: B.cancelable,
                pointerType: B.pointerType,
                pointerId: B.pointerId,
                composed: B.composed,
                isPrimary: B.isPrimary,
                buttons: B.buttons,
                button: B.button
            });
            Z.update(() => {
                var j;
                (j = a.current) == null || j.dispatchEvent(Q)
            })
        }

        return ot.addEventListener("pointermove", H), document.addEventListener("pointerdown", z), document.addEventListener("pointerup", z), Z.read(O, !0), () => {
            ot.removeEventListener("pointermove", H), document.removeEventListener("pointerdown", z), document.removeEventListener("pointerup", z), Et(O)
        }
    }, [s, i, o, c, n]), $(() => {
        if (!n) return;

        function R() {
            Mn(s, 0, {type: "tween", duration: .2})
        }

        return document.addEventListener("mouseleave", R), ot.addEventListener("blur", R), () => {
            document.removeEventListener("mouseleave", R), ot.removeEventListener("blur", R)
        }
    }, [s, n]), ze(() => {
        function R(I) {
            l.current.cursors = I, l.current.cursorHash = $1(I) ? null : B1(i.get(), o.get()), c()
        }

        let E = t(R);
        return () => {
            E(), document.body.classList.toggle(Ru, !1)
        }
    }, [i, o, t, c]);
    let {cursors: u, cursorHash: f} = l.current, d = f ? u[f] : null, h = M5(d);
    ze(() => {
        n && document.body.classList.toggle(Ru, h)
    }, [h, n]);
    let v = d?.component, g = d?.transition ?? {duration: 0}, b = zd(i, g), p = zd(o, g), m = At(() => {
        var R;
        return b.get() + (((R = d?.offset) == null ? void 0 : R.x) ?? 0)
    }), y = At(() => {
        var R;
        return p.get() + (((R = d?.offset) == null ? void 0 : R.y) ?? 0)
    }), w = d?.alignment, C = d?.placement, S = W((R, E) => `translate(${L5(C, w)}) ${E}`, [w, C]);
    return !n || !d || !v ? null : k(v, {
        transformTemplate: S,
        style: {...O5, x: m, y, opacity: s},
        globalTapTarget: !0,
        variant: d?.variant,
        ref: a,
        className: Dm
    })
});

function jW(e) {
    let {registerCursors: t} = A(fg), n = ut(() => e), r = vr();
    ze(() => t(n, r), [t, r])
}

var UC = x.createContext(void 0), dg = x.createContext(void 0), YW = (() => dg.Provider)(),
    $a = () => x.useContext(dg) ?? {}, A5 = class extends Se {
        constructor() {
            super(...arguments), T(this, "state", {error: void 0}), T(this, "message", "Made UI non-interactive due to an error"), T(this, "messageFatal", "Fatal error"), T(this, "messageUser", "Please check any custom code or code overrides"), T(this, "messageReport", "If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/")
        }

        static getDerivedStateFromError(e) {
            return {error: e}
        }

        componentDidCatch(e) {
            var t, n, r;
            F.__framer_hadFatalError = !0, "cause" in e && (e = e.cause), console.error(`${Fm(Re.userAgent) ? this.message : this.messageFatal} (see above). ${(t = this.context) != null && t.codeBoundaries ? this.messageUser : this.messageReport}.`);
            let i = Math.random();
            if (!((n = this.context) != null && n.codeBoundaries) && i > .01 || i > .25) return;
            let o = e instanceof Error && typeof e.stack == "string" ? e.stack : null;
            (r = F.__framer_events) == null || r.push(["published_site_load_error", {message: String(e), stack: o}])
        }

        render() {
            var e, t;
            let n = this.state.error;
            if (!n) return this.props.children;
            let r = "cause" in n ? n.cause : n, i = /-->/gu, o = "--!>",
                s = Fm(Re.userAgent) && ((e = document.getElementById("main")) == null ? void 0 : e.innerHTML) || "";
            return k("div", {
                style: {display: "contents"},
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {__html: `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${r.message.replace(i, o)}". ${this.messageReport}: --><!-- Stack: ${(t = n.stack) == null ? void 0 : t.replace(i, "--!>")} -->` + s}
            })
        }
    };
T(A5, "contextType", dg);
var Ju = class {
    constructor(e) {
        this.resolver = e, T(this, "status")
    }

    static is(e) {
        return e instanceof Ju
    }

    preload() {
        if (this.status) {
            let t = this.status;
            return t.type !== "pending" ? void 0 : t.promise
        }
        let e = this.resolver().then(t => {
            this.status = {type: "fulfilled", value: t}
        }, t => {
            this.status = {type: "rejected", error: t}
        });
        return this.status = {type: "pending", promise: e}, e
    }

    waitFor() {
        return this.resolver()
    }

    read() {
        let e = this.status;
        if (!e) throw new Error("Need to call preload() before read()");
        switch (e.type) {
            case"pending":
                throw new Error("Need to wait for preload() to resolve");
            case"fulfilled":
                return e.value;
            case"rejected":
                throw e.error;
            default:
                Ce(e)
        }
    }
};

function hg(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : hg(e.parentElement, t) : null
}

function D5({children: e}) {
    let {useGranularSuspense: t} = $a();
    return t ? k(ug, {children: e}) : e
}

function GC(e) {
    return Oe(function (n, r) {
        return k(D5, {children: k(e, {...n, ref: r})})
    })
}

var z5 = class {
        constructor() {
            T(this, "links", new Map)
        }

        clear() {
            this.links.clear()
        }

        getLinks() {
            return this.links
        }

        addLink(e, t) {
            if (typeof F < "u" || !e || !t) return;
            this.links.has(e) || this.links.set(e, new Set), this.links.get(e).add(t)
        }
    }, B5 = new z5, N1 = "element", $5 = "collection", N5 = "collectionItemId", j5 = "pathVariables",
    qC = "framer/page-link,";

function XC(e) {
    return ce(e) && e.startsWith(`data:${qC}`)
}

function pg(e) {
    if (XC(e)) try {
        let t = new URL(e), n = t.pathname.substring(qC.length), r = t.searchParams, i = r.has(N1) ? r.get(N1) : void 0,
            o, s = r.get($5), a = r.get(N5), l = r.get(j5);
        if (s && a && l) {
            let c = Object.fromEntries(new URLSearchParams(l).entries());
            o = {collection: s, collectionItemId: a, pathVariables: c}
        }
        return {target: n === "none" ? null : n, element: i === "none" ? void 0 : i, collectionItem: o}
    } catch {
        return
    }
}

function H5(e, t, n) {
    var r;
    let i = t.getAttribute("data-framer-page-link-target"), o, s;
    if (i) {
        o = t.getAttribute("data-framer-page-link-element") ?? void 0;
        let l = t.getAttribute("data-framer-page-link-path-variables");
        l && (s = Object.fromEntries(new URLSearchParams(l).entries()))
    } else {
        let l = t.getAttribute("href");
        if (!l) return !1;
        let c = pg(l);
        if (!c || !c.target) return !1;
        i = c.target, o = c.element ?? void 0, s = (r = c.collectionItem) == null ? void 0 : r.pathVariables
    }
    let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
    return e(i, o, Object.assign({}, n, s), a), !0
}

var W5 = 500, U5 = .9, G5 = 1.7, q5 = 4, X5 = 1 / 0, Wo = new WeakMap, ou = new Set, Uo = new Map;

function Y5() {
    var e;
    let t = Re.connection || Re.mozConnection || Re.webkitConnection || {}, n = Re.deviceMemory && Re.deviceMemory > G5,
        r, i, o;

    function s() {
        r = t.effectiveType || "", i = t.saveData || r.includes("2g"), o = r === "3g" || n ? q5 : X5
    }

    (e = t.addEventListener) == null || e.call(t, "change", s), s();
    let a = new IntersectionObserver(u, {threshold: U5}), l = 0;

    async function c(f, d) {
        if (i) return;
        let h = Uo.get(f);
        if (!h?.size || ou.has(f)) return;
        ++l, ou.add(f);
        let v = Mk(f).catch(() => {
        });
        a.unobserve(d), Wo.delete(d);
        for (let g of h) a.unobserve(g), Wo.delete(g);
        h.clear(), Uo.delete(f), await v, --l
    }

    function u(f) {
        var d;
        for (let h of f) {
            let v = h.target, g = Wo.get(v);
            if (!g || ou.has(g)) {
                a.unobserve(v), Wo.delete(v);
                continue
            }
            let b = Uo.get(g), p = ((d = Uo.get(g)) == null ? void 0 : d.size) ?? 0;
            if (h.isIntersecting) {
                if (l >= o) continue;
                b ? b.add(v) : Uo.set(g, new Set([v])), setTimeout(c.bind(void 0, g, v), W5)
            } else b && b.delete(v), p <= 1 && Uo.delete(g)
        }
    }

    return (f, d) => {
        if (!ou.has(f)) return Wo.set(d, f), a.observe(d), () => {
            Wo.delete(d), a.unobserve(d)
        }
    }
}

var K5 = !Qm || typeof IntersectionObserver > "u" ? null : Y5(), ym = Symbol("noLocale"), su = new Map;

function YC(e, t, n) {
    var r, i;
    let o = (i = (r = su?.get(n?.id ?? ym)) == null ? void 0 : r.get(e.collectionId)) == null ? void 0 : i.get(e.collectionItemId);
    if (o) return o;
    let s = su.get(n?.id ?? ym) ?? new Map;
    su.set(n?.id ?? ym, s);
    let a = s.get(e.collectionId) ?? new Map;
    s.set(e.collectionId, a);
    let l = new Ju(async () => {
        try {
            let c = t[e.collectionId];
            if (!c) throw new Error(`Key not found in collection utils for collection id: "${e.collectionId}`);
            let u = await c();
            if (!u) throw new Error("Collection does not contain utility functions");
            return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0)
        } catch (c) {
            console.warn(`Failed to resolve slug: ${c instanceof Error ? c.message : "Unknown error"}`);
            return
        }
    });
    return a.set(e.collectionItemId, l), l
}

function Na() {
    return ue.current() === ue.canvas
}

var Q5 = "webPageId";

function Ia(e) {
    return !!(e && typeof e == "object" && Q5 in e)
}

function Z5(e) {
    if (!e) return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}

function Oa(e) {
    if (!XC(e)) return e;
    let t = pg(e);
    if (!t) return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n) return {webPageId: n, hash: r ?? void 0, pathVariables: Z5(i)}
}

var KC = /:([a-z]\w*)/gi, J5 = be(void 0);

function QC() {
    var e;
    let t = A(J5), n = (e = ts()) == null ? void 0 : e.pathVariables;
    return t || n
}

function ZC(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n) return !1;
    if (e.path && e.pathVariables) {
        let o = Object.assign({}, i, r);
        for (let [, s] of e.path.matchAll(KC)) if (!s || e.pathVariables[s] !== o[s]) return !1
    }
    return !0
}

function mg(e) {
    return e === void 0 ? !1 : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."))
}

function e4(e, t) {
    try {
        return !!new URL(e).protocol
    } catch {
    }
    return t
}

function gg(e, t) {
    return e !== void 0 ? e ? "_blank" : void 0 : t ? void 0 : "_blank"
}

function hu(e, t = void 0) {
    let n = mg(e), r = gg(t, n);
    return {href: e === "" || e4(e, n) ? e : `https://${e}`, target: r, rel: n ? void 0 : "noopener"}
}

function vg(e, t, n, r, i) {
    var o, s;
    let a = (o = e.getRoute) == null ? void 0 : o.call(e, t);
    a && Rk(a?.page) && a.page.preload(), (s = e.navigate) == null || s.call(e, t, n, r, i)
}

function JC(e, t, n, r, i) {
    return async o => {
        if (o.metaKey) return;
        let s = hg(o.target);
        !s || s.getAttribute("target") === "_blank" || (o.preventDefault(), vg(e, t, n, r, i))
    }
}

function au(e, t, n) {
    let r = document.createElement("a");
    r.href = e, t && (r.rel = t), n && (r.target = n), document.body.appendChild(r), r.click(), r.remove()
}

function t4(e, t, n, r) {
    let i = [];

    function o(a) {
        if (!a || !n) return;
        let l = {};
        for (let c in a) {
            let u = a[c];
            D(u, "unresolvedSlug should be defined");
            let f = YC(u, n, r), d = f.preload();
            if (d) i.push(d); else {
                let h = f.read();
                h && (l[c] = h)
            }
        }
        return l
    }

    let s = {path: o(e), hash: o(t)};
    if (i.length) throw Promise.allSettled(i);
    return s
}

function n4(e, t, n, r, i, o, s, a) {
    var l;
    let c = {...i, ...o, ...a?.path}, u = {...i, ...s, ...a?.hash},
        f = (l = e.getRoute) == null ? void 0 : l.call(e, n), d = Gu(f, {
            currentRoutePath: t?.path,
            currentPathVariables: t?.pathVariables,
            hash: r,
            pathVariables: c,
            hashVariables: u,
            preserveQueryParams: e.preserveQueryParams
        }), h = d.split("#", 2)[1];
    return {routeId: n, route: f, href: d, elementId: h, pathVariables: c}
}

function r4(e, t, n) {
    if (!(!e.routes || !e.getRoute || !mg(t))) try {
        let [i, o] = t.split("#", 2);
        D(i !== void 0, "A href must have a defined pathname.");
        let [s] = i.split("?", 2);
        D(s !== void 0, "A href must have a defined pathname.");
        let {routeId: a, pathVariables: l} = Xk(e.routes, s), c = e.getRoute(a);
        if (c) {
            let u = Object.assign({}, n, l);
            return {routeId: a, route: c, href: t, elementId: o, pathVariables: u}
        }
    } catch {
    }
}

function i4(e, t, n, r, i) {
    let {webPageId: o, hash: s, pathVariables: a, hashVariables: l, unresolvedHashSlugs: c, unresolvedPathSlugs: u} = n,
        f = t4(u, c, e.collectionUtils, r);
    return n4(e, t, o, s, i, a, l, f)
}

function o4(e, t, n, r, i, o) {
    if (!r) return hu(e, t);
    let s = r4(n, e, i);
    if (!s) return hu(e, t);
    let {routeId: a, route: l, elementId: c, pathVariables: u} = s;
    if (!l) return hu(e, t);
    let f = Gu(l, {
        currentRoutePath: r.path,
        currentPathVariables: r.pathVariables,
        hash: c,
        pathVariables: u,
        preserveQueryParams: n.preserveQueryParams
    }), d = gg(t, !0);
    return {
        href: f,
        target: d,
        onClick: JC(n, a, c, u, o),
        navigate: () => vg(n, a, c, u, o),
        "data-framer-page-link-current": !c && r.id === a || void 0
    }
}

function eT(e, t, n) {
    var r;
    if (ce(e)) {
        let o = mg(e);
        if (!t.routes || !t.getRoute || !n || !o) return;
        let [s] = e.split("#", 2);
        if (s === void 0) return;
        let [a] = s.split("?", 2);
        if (a === void 0) return;
        let {routeId: l} = Xk(t.routes, a);
        return t.getRoute(l)
    }
    let {webPageId: i} = e;
    return (r = t.getRoute) == null ? void 0 : r.call(t, i)
}

var tU = GC(Oe(function ({children: t, href: n, openInNewTab: r, smoothScroll: i, nodeId: o, ...s}, a) {
    let l = Ki(), c = ts(), u = QC(), {activeLocale: f} = Zm(), d = Zu(a), h = oe(() => {
        if (!n) return {};
        let S = Ia(n) ? n : Oa(n);
        if (!S) return {};
        if (ce(S)) return o4(S, r, l, c, u, i);
        let {routeId: R, href: E, elementId: I, pathVariables: O} = i4(l, c, S, f, u), H = gg(r, !0);
        return {
            href: E,
            target: H,
            onClick: JC(l, R, I, O, i),
            navigate: () => vg(l, R, I, O, i),
            "data-framer-page-link-current": c && ZC(c, S, u) || void 0
        }
    }, [n, l, f, u, r, c, i]), [v, g] = s4(o, n, h), b = W(S => {
        var R;
        let E = Ia(n) ? n : Oa(n);
        if (!E) return;
        let I = eT(E, l, c);
        if (I) return (R = K5) == null ? void 0 : R(I, S)
    }, [c, n, l]), p = Vt(t) && "ref" in t, m = RC(p ? t.ref : void 0);
    Yi(m, S => {
        S !== null && g(S)
    }, [g]), Yi(m, S => {
        if (S !== null) return b(S)
    }, [b]);
    let {navigate: y, ...w} = h, C = d.cloneAsArray(t, {...s, ...w, ref: m});
    return v(C)
})), j1 = be(void 0);

function s4(e, t, n) {
    let r = A(j1), i = Na(), o = Ki(), s = ts(), {replaceNestedLinks: a} = $a(), l = oe(() => {
        let b = Ia(t) ? t : Oa(t);
        if (b) return eT(b, o, s)
    }, [s, t, o]), c = Object.keys(n).length > 0, u = !!(a && !i && (r || !c)), f = W(b => {
        var p;
        if (!n.href) return;
        if (b.preventDefault(), b.stopPropagation(), /Mac|iPod|iPhone|iPad/u.test(Re.userAgent) ? b.metaKey : b.ctrlKey) {
            au(n.href, "", "_blank");
            return
        }
        l ? (p = n.navigate) == null || p.call(n) : au(n.href, n.rel, n.target)
    }, [n, l]), d = W(b => {
        n.href && (b.preventDefault(), b.stopPropagation(), au(n.href, "", "_blank"))
    }, [n]), h = W(b => {
        var p;
        n.href && b.key === "Enter" && (b.preventDefault(), b.stopPropagation(), l ? (p = n.navigate) == null || p.call(n) : au(n.href, n.rel, n.target))
    }, [n, l]), v = W(b => {
        let p = {"data-nested-link": !0, role: "link", tabIndex: 0, onClick: f, onAuxClick: d, onKeyDown: h},
            m = u ? mn.map(b, y => {
                if (!l4(y)) return y;
                B5.addLink(r, e);
                let w = Eu(y.type), {children: C, ...S} = y.props, R = c ? {...S, ...p, as: S.as && Eu(S.as)} : S,
                    E = "ref" in y ? y.ref : void 0;
                return Ji(w, {...R, ref: E}, C)
            }) : b;
        return k(j1.Provider, {value: e, children: m})
    }, [c, e, d, f, h, u, r]), g = W(b => {
        i || !u || !c || (b.dataset.hydrated = "true")
    }, [c, u]);
    return [v, g]
}

function a4(e, t, n, r, i) {
    let o = Ia(e) ? e : Oa(e);
    if (!Ia(o)) return ce(e) ? hu(e).href : void 0;
    if (!t.getRoute || !t.currentRouteId) return;
    let s = t.getRoute(t.currentRouteId), {
            webPageId: a,
            hash: l,
            pathVariables: c,
            hashVariables: u,
            unresolvedHashSlugs: f,
            unresolvedPathSlugs: d
        } = o, h = t.getRoute(a), v = d || f ? i?.(d, f) : void 0,
        g = Object.assign({}, t.currentPathVariables, n, c, v?.path),
        b = Object.assign({}, t.currentPathVariables, n, u, v?.hash);
    return Gu(h, {
        currentRoutePath: s?.path,
        currentPathVariables: t.currentPathVariables,
        hash: l,
        pathVariables: g,
        hashVariables: b,
        relative: !1,
        preserveQueryParams: t.preserveQueryParams,
        onlyHash: r
    })
}

function l4(e) {
    return Vt(e) && (Eu(e.type) !== e.type || Eu(e.props.as) !== e.props.as)
}

function Eu(e) {
    return e === "a" ? "span" : Fl(e) && Nd(e) === "a" ? tn.span : e
}

var c4 = class extends Se {
    constructor() {
        super(...arguments), T(this, "state", {error: void 0})
    }

    static getDerivedStateFromError(e) {
        return {error: e}
    }

    render() {
        return this.state.error ? null : this.props.children
    }
};
var tT = x.createContext(void 0);

function u4(e, t) {
    if (e.routeId !== t.routeId) return !1;
    if (e.pathVariables === t.pathVariables) return !0;
    let n = e.pathVariables || {}, r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(i => n[i] === r[i])
}

var H1 = "default";

function f4() {
    let [e, t] = x.useState(0);
    return [e, x.useCallback(() => t(n => n + 1), [])]
}

function W1(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        g4(r, t);
        return
    }
    n || F.scrollTo(0, 0)
}

function d4(e) {
    let t = V([]);
    return ze(() => {
        var n;
        (n = t.current) != null && n.length && (t.current.forEach(r => r()), t.current = [])
    }, [e]), W(n => {
        t.current.push(n)
    }, [])
}

function h4(e) {
    let t = kL(), n = Nk("framer-route-change"), r = V(void 0);
    return W(async (i, o, s = !0) => {
        var a;
        EL();
        let l = o !== void 0;
        if (!e) return l && await o(), i(), n(), new Promise(v => {
            v()
        });
        (a = r.current) == null || a.abort();
        let c = s ? new AbortController : void 0;
        r.current = c;
        let u = c?.signal, f = n();
        if (!l) return r.current = void 0, i(u), f;
        let d, h = new Promise((v, g) => {
            d = v, u?.aborted ? g() : u?.addEventListener("abort", g)
        });
        return await Wu({priority: "user-blocking", signal: u}).catch(Xm), i(u), t(h, o, c), f.then(() => {
            d()
        })
    }, [e, n, t])
}

function p4({
                defaultPageStyle: e,
                disableHistory: t,
                initialPathVariables: n,
                initialRoute: r,
                notFoundPage: i,
                collectionUtils: o,
                routes: s,
                initialLocaleId: a,
                locales: l = DM,
                preserveQueryParams: c = !1,
                enableAsyncURLUpdates: u = !1,
                LayoutTemplate: f,
                editorBar: d
            }) {
    PL(), yL({disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: a});
    let h = $k(), [v, g] = f4(), b = d4(v), p = h4(u), m = V(r), y = V(n), w = V(a), C = w.current,
        S = oe(() => l.find(({id: X}) => C ? X === C : X === H1) ?? null, [C, l]), R = oe(() => ({
            activeLocale: S, locales: l, setLocale: async X => {
                let G;
                ce(X) ? G = X : ve(X) && (G = X.id);
                let de = l.find(({id: Fe}) => Fe === H1), me = l.find(({id: Fe}) => Fe === G);
                if (!me) return;
                let le = m.current, ee = s[le];
                if (ee) try {
                    let Fe = await SL({
                        currentLocale: S,
                        nextLocale: me,
                        route: ee,
                        routeId: le,
                        defaultLocale: de,
                        pathVariables: y.current,
                        collectionUtils: o,
                        preserveQueryParams: c
                    });
                    if (!Fe) return;
                    let Te = y.current, De = gL(F.history.state) ? F.history.state.paginationInfo : void 0, Pe = Fe.path;
                    y.current = Fe.pathVariables, w.current = me.id, p(() => {
                        h(le, le, () => ht(g), u)
                    }, async (ft = !1) => {
                        if (Pe) return Hk({
                            routeId: le,
                            pathVariables: Te,
                            localeId: me.id,
                            paginationInfo: De
                        }, Pe, !1, ft)
                    }, !1)
                } catch {
                }
            }
        }), [S, o, u, g, l, c, s, p, h]), E = W((X, G, de, me, le, ee = !1, Fe) => {
            let Te = m.current;
            if (m.current = X, y.current = me, w.current = G, b(() => {
                W1(de, ee, le)
            }), le) {
                ht(g);
                return
            }
            p(De => {
                h(Te, X, () => ht(g), u, De)
            }, Fe)
        }, [u, g, b, p, h]);
    bL(m, E);
    let I = W(async (X, G, de, me) => {
        var le;
        let ee = s[X];
        if (de) {
            let ft = new Set, Wn = ee?.path ?? "/";
            for (let he of Wn.matchAll(Gi)) {
                let Qt = he[1];
                if (Qt === void 0) throw new Error("A matching path variable should not be undefined");
                ft.add(Qt)
            }
            de = Object.fromEntries(Object.entries(de).filter(([he]) => ft.has(he)))
        }
        let Fe = Hu(ee, G), Te = y.current, De = w.current;
        if (u4({routeId: m.current, pathVariables: Te}, {routeId: X, pathVariables: de})) {
            let ft = s[X];
            ((le = F.history.state) == null ? void 0 : le.hash) !== G && !t && ft && await WS(X, ft, {
                currentRoutePath: ft.path,
                currentPathVariables: Te,
                pathVariables: de,
                hash: G,
                localeId: De,
                preserveQueryParams: c
            }, u), W1(Fe, me, !1);
            return
        }
        if (!ee) return;
        let Pe = s[m.current];
        E(X, De, Fe, de, !1, me, t ? void 0 : async (ft = !1) => WS(X, ee, {
            currentRoutePath: Pe?.path,
            currentPathVariables: Te,
            hash: G,
            pathVariables: de,
            localeId: De,
            preserveQueryParams: c
        }, !1, ft))
    }, [s, E, t, c, u]), O = _k(s), H = m.current, z = y.current, B = oe(() => ({
        navigate: I,
        getRoute: O,
        currentRouteId: H,
        currentPathVariables: z,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c
    }), [I, O, H, z, s, o, c]), Q = s[m.current];
    if (!Q) throw new Error(`Router cannot find route for ${m.current}`);
    let j = !S || !Q.includedLocales || Q.includedLocales.includes(S.id), se = Q.path && z ? Vk(Q.path, z) : Q.path,
        K = String(C) + se, te = ut(() => ({...e, display: "contents"}));
    return k(zM, {
        api: B,
        children: k(Wk.Provider, {
            value: R,
            children: ge(ug, {
                children: [k(VL, {
                    notFoundPage: i,
                    defaultPageStyle: e,
                    forceUpdateKey: v,
                    children: k(m4, {
                        LayoutTemplate: f,
                        routeId: H,
                        children: X => ge(gn, {children: [k(t1.Start, {}), j ? _m(Q.page, X ? te : e) : i && _m(i, e)]}, K)
                    })
                }), k(RL, {}), k(t1.End, {}), d]
            })
        })
    })
}

function m4({LayoutTemplate: e, routeId: t, children: n}) {
    return e ? k(e, {routeId: t, children: n}) : n(!1)
}

function g4(e, t) {
    let n = t ? {behavior: "smooth", block: "start", inline: "nearest"} : void 0;
    e.scrollIntoView(n)
}

function v4(e) {
    return new Promise((t, n) => {
        try {
            new URL(e);
            let r = new Image;
            r.onload = () => t(), r.onerror = n, r.src = e
        } catch (r) {
            n(r)
        }
    })
}

function y4(e) {
    return typeof e == "object" && e !== null
}

function b4(e, t) {
    if (t === "") return e;
    let n = t.split(/[.[\]]+/u).filter(i => i.length > 0), r = e;
    for (let i of n) {
        if (!y4(r)) return;
        r = r[i]
    }
    return r
}

function xa(e) {
    return `${e.credentials}:${e.url}`
}

var x4 = {status: "loading", data: void 0};

function w4(e) {
    return ce(e) && !Number.isNaN(Number(e))
}

function S4(e, t) {
    switch (e) {
        case"string":
            return ce(t) || Ue(t);
        case"color":
            return ce(t);
        case"boolean":
            return Km(t);
        case"number":
            return Ue(t) || w4(t);
        case"link":
        case"image":
            return ce(t) && zm(t);
        default: {
            let n = e;
            return !1
        }
    }
}

function k4(e, t) {
    if (e.status === "loading") return t.fallbackValue;
    if (e.status === "error") throw e.error;
    let n = b4(e.data, t.resultKeyPath);
    if (Ge(n)) throw new Error(`Key '${t.resultKeyPath}' not found in response`);
    if (!S4(t.resultOutputType, n)) throw new Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
    return n
}

function zm(e) {
    try {
        return !!new URL(e).protocol
    } catch {
    }
}

function bm(e, t) {
    if (ue.current() === ue.canvas) return !1;
    let n = t === 0 ? 500 : t * 1e3, r = Date.now(), i = e + n;
    return r >= i
}

var U1 = () => {
}, Or, pu, $i, Ni, wa, mi, mu = class {
    constructor() {
        T(this, "responseValues", new Map), Jt(this, Or, new Map), Jt(this, pu, new Set), Jt(this, $i, new Map), Jt(this, Ni, new Map), Jt(this, wa, new Map), Jt(this, mi, new Map), T(this, "persistCache", wz(() => {
            let e = {};
            for (let [t, n] of this.responseValues) {
                if (!n || n.status !== "success") continue;
                let r = pe(this, $i).get(t);
                if (!r || r === 0) continue;
                let i = pe(this, Ni).get(t);
                i && (i && bm(i, r) || (e[t] = [i, r, n.data]))
            }
            try {
                localStorage.setItem(mu.cacheKey, JSON.stringify(e))
            } catch {
            }
        }, 500))
    }

    unmount() {
        for (let [e, t] of pe(this, mi)) clearInterval(t), pe(this, mi).delete(e)
    }

    stopQueryRefetching(e) {
        let t = xa(e), n = pe(this, mi).get(t);
        n && (clearInterval(n), pe(this, mi).delete(t))
    }

    startQueryRefetching(e) {
        let t = xa(e), n = pe(this, mi).get(t), r = pe(this, $i).get(t);
        if (n || !r) return;
        let i = ot.setInterval(() => {
            if (document.visibilityState === "hidden") return;
            let o = pe(this, Ni).get(t);
            !r || !o || this.fetchWithCache({...e, cacheDuration: r})
        }, r);
        pe(this, mi).set(t, i)
    }

    hydrateCache() {
        try {
            let e = localStorage.getItem(mu.cacheKey);
            if (!e) return;
            let t = JSON.parse(e);
            if (typeof t != "object") throw new Error("Invalid cache data");
            for (let n in t) {
                let r = t[n];
                if (!Array.isArray(r) || r.length !== 3) throw new Error("Invalid cache data");
                let [i, o, s] = r;
                bm(i, o) || (pe(this, Ni).set(n, i), pe(this, $i).set(n, o), this.responseValues.set(n, {
                    status: "success",
                    data: s
                }))
            }
        } catch {
            try {
                localStorage.removeItem(mu.cacheKey)
            } catch {
            }
        }
    }

    setResponseValue(e, t) {
        this.responseValues.set(e, t), this.persistCache();
        let n = pe(this, Or).get(e);
        if (n) for (let r of n) r()
    }

    async prefetch(e) {
        if (!Dr() || !zm(e.url)) return;
        let t = xa(e);
        pe(this, pu).add(t), await this.fetchWithCache(e);
        let n = this.getValue(t);
        if (!n || n.status === "loading") throw new Error("Unexpected result status for prefetch");
        let r = pe(this, Or).get(t);
        for (let o of r ?? []) o();
        let i = k4(n, e);
        return e.resultOutputType === "image" && ce(i) && await v4(i).catch(U1), i
    }

    async fetchWithCache(e) {
        if (!Dr()) return;
        let t = xa(e), n = pe(this, wa).get(t);
        if (n) return n;
        let r = pe(this, Ni).get(t), i = r && bm(r, e.cacheDuration);
        if (this.responseValues.has(t) && !i) return;
        this.responseValues.get(t) || this.setResponseValue(t, x4);
        let a = (async () => {
            try {
                let l = await fetch(e.url, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                    credentials: e.credentials
                });
                if (!l.ok) {
                    this.setResponseValue(t, {
                        status: "error",
                        error: new Error("Invalid Response Status"),
                        data: void 0
                    });
                    return
                }
                let c = await l.json();
                this.setResponseValue(t, {status: "success", data: c}), pe(this, Ni).set(t, Date.now())
            } catch (l) {
                this.setResponseValue(t, {status: "error", error: l, data: void 0})
            }
        })();
        return pe(this, wa).set(t, a), a.finally(() => {
            pe(this, wa).delete(t)
        }), a
    }

    getValue(e, t = !1) {
        if (!(t && !pe(this, pu).has(e))) return this.responseValues.get(e)
    }

    subscribe(e, t, n = !1) {
        let {url: r, cacheDuration: i} = e;
        if (!zm(r)) return U1;
        let o = xa(e), s = pe(this, $i).get(o);
        (!s || i < s) && pe(this, $i).set(o, i), n || (this.startQueryRefetching(e), this.fetchWithCache(e));
        let a = pe(this, Or).get(o) ?? new Set;
        return a.add(t), pe(this, Or).set(o, a), () => {
            let l = pe(this, Or).get(o);
            l && (l.delete(t), l.size === 0 && pe(this, Or).delete(o), pe(this, Or).size === 0 && this.stopQueryRefetching(e))
        }
    }
}, nT = mu;
Or = new WeakMap;
pu = new WeakMap;
$i = new WeakMap;
Ni = new WeakMap;
wa = new WeakMap;
mi = new WeakMap;
T(nT, "cacheKey", "framer-fetch-client-cache");
var C4 = be(void 0), T4 = be(!0), R4 = ({children: e, client: t}) => {
    let [n] = _e(() => t ?? new nT), [r, i] = _e(!0);
    return $(() => (n.hydrateCache(), ht(() => {
        i(!1)
    }), () => n.unmount()), [n]), k(T4.Provider, {value: r, children: k(C4.Provider, {value: n, children: e})})
}, E4, F4, P4, _4, I4;
E4 = new WeakMap;
F4 = new WeakMap;
P4 = new WeakMap;
_4 = new WeakMap;
I4 = new WeakMap;

function fU({
                RootComponent: e,
                isWebsite: t,
                routeId: n,
                framerSiteId: r,
                pathVariables: i,
                routes: o,
                collectionUtils: s,
                notFoundPage: a,
                isReducedMotion: l = !1,
                includeDataObserver: c = !1,
                localeId: u,
                locales: f,
                preserveQueryParams: d,
                EditorBar: h,
                defaultPageStyle: v,
                disableHistory: g,
                LayoutTemplate: b
            }) {
    let {enableAsyncURLUpdates: p} = $a();
    if (x.useEffect(() => {
        t || Ra.start()
    }, []), t) return k(K0, {
        reducedMotion: l ? "user" : "never",
        children: k(R4, {
            children: k(I5, {
                children: k(tT.Provider, {
                    value: r,
                    children: k(p4, {
                        initialRoute: n,
                        initialPathVariables: i,
                        initialLocaleId: u,
                        routes: o,
                        collectionUtils: s,
                        notFoundPage: a,
                        locales: f,
                        defaultPageStyle: v ?? {minHeight: "100vh", width: "auto"},
                        preserveQueryParams: d,
                        enableAsyncURLUpdates: p,
                        editorBar: k(O4, {EditorBar: h}),
                        disableHistory: g,
                        LayoutTemplate: b
                    })
                })
            })
        })
    });
    {
        let m = c ? Tz : x.Fragment;
        return k(m, {
            children: k(BM, {
                routes: o,
                children: k(xz, {children: x.isValidElement(e) ? e : x.createElement(e, {key: n})})
            })
        })
    }
}

function O4({EditorBar: e}) {
    let t = $a(), [n, r] = _e(!1), i = A(tT), o = oe(() => {
        let s = {}, a;
        for (a in t) t.hasOwnProperty(a) && a.startsWith("editorBar") && (s[a] = t[a]);
        return s
    }, [t]);
    return $(() => {
        ht(() => {
            r(!0)
        })
    }, []), !e || !i || !n ? null : k(c4, {children: k(mr, {children: k(e, {framerSiteId: i, features: o})})})
}

function M4(e, t, n) {
    let r = mn.map(e, i => Vt(i) ? gr(i, t) : i);
    return n ? r : k(at, {children: r})
}

var yg = x.createContext(void 0), rT = "ssr-variant";

function G1(e, t, n, r, i, o, s, a) {
    let l = x.Children.toArray(t), c = l[0];
    if (l.length !== 1 || !x.isValidElement(c)) return console.warn("PropertyOverrides: expected exactly one React element for a child", t), s(t, n);
    let u = [], f = [];
    for (let [g] of Object.entries(r)) {
        if (g === i) continue;
        let b = e[g];
        if (!b || !V4(c.props, b)) {
            f.push(g);
            continue
        }
        let p = q1([g], o);
        p.length && u.push({variants: p, propOverrides: b})
    }
    if (u.length === 0) return s(c, n);
    let d = [i, ...f], h = q1(d, o);
    h.length && u.unshift({variants: h});
    let v = [];
    for (let {variants: g, propOverrides: b} of u) {
        if (a && !g.includes(a)) continue;
        let p = g.join("+"), m = k(yg.Provider, {value: new Set(g), children: s(c, b ? {...n, ...b} : n)}, p),
            y = L4(g, o, r);
        y.length ? (D(u.length > 1, "Must branch out when there are hiddenClassNames"), m = k("div", {
            className: `${rT} ${y.join(" ")}`,
            children: m
        }, p)) : D(u.length === 1, "Cannot branch out when hiddenClassNames is empty"), v.push(m)
    }
    return D(!a || v.length === 1, "Must render exactly one branch when activeVariantId is given"), v
}

function iT(e) {
    return e.split("-")[2]
}

function L4(e, t, n) {
    let r = [];
    for (let [i, o] of Object.entries(n)) {
        let s = t && !t.has(i);
        e.includes(i) || s || r.push(`hidden-${iT(o)}`)
    }
    return r
}

function q1(e, t) {
    return t ? e.filter(n => t.has(n)) : e
}

function V4(e, t) {
    for (let n of Object.keys(t)) if (!og(e[n], t[n], !0)) return !0;
    return !1
}

function A4(e, t, n) {
    return !n || !e ? t : {...t, ...n[e]}
}

var D4 = x.forwardRef(function ({breakpoint: t, overrides: n, children: r, ...i}, o) {
        let s = Zu(o), a = x.useContext(yg), l = FL(), c = ut(() => l.current ? Dr() ? 1 : 2 : 0), u = x.useContext(UC);
        if (!u) return console.warn("PropertyOverrides is missing GeneratedComponentContext"), s(r, i);
        let {primaryVariantId: f, variantClassNames: d} = u;
        switch (c) {
            case 0:
                return s(r, A4(t, i, n));
            case 1:
                return G1(n, r, i, d, f, a, s, t);
            case 2:
                return G1(n, r, i, d, f, a, M4, void 0);
            default:
                Ce(c)
        }
    }), mU = (() => WC(D4, `.${rT} { display: contents }`, "PropertyOverrides"))(),
    vU = GC(Oe(function ({links: t, children: n, ...r}, i) {
        let o = Ki(), {activeLocale: s} = Zm(), a = Zu(i), l = [], c = t.map(f => {
            if (f) return a4(f.href, o, f.implicitPathVariables, f.refKey, (d, h) => {
                function v(g) {
                    let b = {};
                    for (let p in g) {
                        let m = g[p];
                        D(o.collectionUtils, "collectionUtils should be defined"), D(m, "unresolvedSlug be defined");
                        let y = YC(m, o.collectionUtils, s), w = y.preload();
                        if (w) l.push(w); else {
                            let C = y.read();
                            C && (b[p] = C)
                        }
                    }
                    return b
                }

                return {path: v(d), hash: v(h)}
            })
        });
        if (l.length > 0) throw Promise.allSettled(l);
        let u = n(c);
        return a(u, r)
    }));

function z4(e) {
    return {
        trace(...t) {
            var n;
            return (n = yt.getLogger(e)) == null ? void 0 : n.trace(...t)
        }, debug(...t) {
            var n;
            return (n = yt.getLogger(e)) == null ? void 0 : n.debug(...t)
        }, info(...t) {
            var n;
            return (n = yt.getLogger(e)) == null ? void 0 : n.info(...t)
        }, warn(...t) {
            var n;
            return (n = yt.getLogger(e)) == null ? void 0 : n.warn(...t)
        }, error(...t) {
            var n;
            return (n = yt.getLogger(e)) == null ? void 0 : n.error(...t)
        }
    }
}

function B4(e) {
    return sT(e) || N4(e)
}

function $4(e) {
    return Uu(e) && e.every(ve)
}

function oT(e) {
    return ve(e) && Hn(e.read) && Hn(e.preload)
}

function sT(e) {
    return $4(e) || oT(e)
}

function bg(e) {
    return ve(e) && ve(e.schema)
}

function aT(e) {
    return ve(e) && ve(e.collectionByLocaleId)
}

function N4(e) {
    return bg(e) || aT(e)
}

async function X1(e, t) {
    return oT(e) ? (await e.preload(t), e.read(t)) : e
}

var j4 = class {
    constructor(e, t) {
        this.collection = e, this.locale = t, T(this, "schema"), T(this, "indexes", []);
        let n = iD(e);
        D(n, "Collection does not have properties");
        let r = {id: {type: "string", isNullable: !1}}, i = Object.entries(n);
        for (let [o, s] of i) {
            if (!s) continue;
            let a = s.type;
            D(a !== "array", "Array properties are not supported"), D(a !== "object", "Object properties are not supported"), r[o] = {
                type: a,
                isNullable: !0
            }
        }
        this.schema = r
    }

    getDatabaseItem(e, t) {
        let n = {};
        for (let r in this.schema) {
            let i = e[r];
            if (jM(i)) continue;
            let o = this.schema[r];
            Ge(o) || (D(o.type !== "unknown", "Invalid definition type"), n[r] = {type: o.type, value: i})
        }
        return {pointer: t, data: n}
    }

    async resolveRichText(e) {
        if (Ju.is(e)) {
            let t = e.preload();
            return t && await t, e.read()
        }
        return e
    }

    async scanItems() {
        return (await X1(this.collection, this.locale)).map((t, n) => {
            let r = String(n);
            return this.getDatabaseItem(t, r)
        })
    }

    async resolveItems(e) {
        let t = await X1(this.collection, this.locale);
        return e.map(n => {
            let r = Number(n), i = t[r];
            return D(i, "Can't find collection item"), this.getDatabaseItem(i, n)
        })
    }

    compareItems(e, t) {
        return Number(e.pointer) - Number(t.pointer)
    }
};

function H4(e, t) {
    switch (e?.type) {
        case"array":
            return {type: "array", value: e.value.map(r => Ae.cast(r, t.definition))}
    }
    return null
}

function lT(e) {
    switch (e?.type) {
        case"boolean":
            return e;
        case"number":
        case"string":
            return {type: "boolean", value: !!e.value}
    }
    return null
}

function zr(e) {
    let t = lT(e);
    return t?.value ?? !1
}

function W4(e) {
    switch (e?.type) {
        case"color":
            return e
    }
    return null
}

function U4(e) {
    switch (e?.type) {
        case"date":
            return e;
        case"number":
        case"string": {
            let t = new Date(e.value);
            return Ik(t) ? {type: "date", value: t.toISOString()} : null
        }
    }
    return null
}

function G4(e) {
    switch (e?.type) {
        case"enum":
            return e;
        case"string":
            return {type: "enum", value: e.value}
    }
    return null
}

function q4(e) {
    switch (e?.type) {
        case"file":
            return e
    }
    return null
}

function X4(e) {
    switch (e?.type) {
        case"link":
            return e;
        case"string":
            try {
                let {protocol: t} = new URL(e.value);
                return t === "http:" || t === "https:" ? {type: "link", value: e.value} : null
            } catch {
                return null
            }
    }
    return null
}

function cT(e) {
    switch (e?.type) {
        case"number":
        case"string": {
            let t = Number(e.value);
            return Number.isFinite(t) ? {type: "number", value: t} : null
        }
    }
    return null
}

function uT(e) {
    let t = cT(e);
    return t?.value ?? null
}

function Y4(e, t) {
    switch (e?.type) {
        case"object": {
            let n = {}, r = Object.entries(t.definitions);
            for (let [i, o] of r) {
                let s = e.value[i] ?? null;
                n[i] = Ae.cast(s, o)
            }
            return {type: "object", value: n}
        }
    }
    return null
}

function K4(e) {
    switch (e?.type) {
        case"responsiveimage":
            return e
    }
    return null
}

function Q4(e) {
    switch (e?.type) {
        case"richtext":
            return e
    }
    return null
}

function fT(e) {
    switch (e?.type) {
        case"string":
            return e;
        case"number":
            return {type: "string", value: String(e.value)}
    }
    return null
}

function Go(e) {
    let t = fT(e);
    return t?.value ?? null
}

var Ae = {
    cast(e, t) {
        switch (t.type) {
            case"array":
                return H4(e, t);
            case"boolean":
                return lT(e);
            case"color":
                return W4(e);
            case"date":
                return U4(e);
            case"enum":
                return G4(e);
            case"file":
                return q4(e);
            case"link":
                return X4(e);
            case"number":
                return cT(e);
            case"object":
                return Y4(e, t);
            case"responsiveimage":
                return K4(e);
            case"richtext":
                return Q4(e);
            case"string":
                return fT(e);
            case"unknown":
                return e;
            default:
                Ce(t, "Unsupported cast")
        }
    }, parse(e) {
        return Km(e) ? {type: "boolean", value: e} : Ik(e) ? {
            type: "date",
            value: e.toISOString()
        } : Ue(e) ? {type: "number", value: e} : ce(e) ? {type: "string", value: e} : Uu(e) ? {
            type: "array",
            value: e.map(Ae.parse)
        } : null
    }, equal(e, t, n) {
        return e?.type !== t?.type ? !1 : ji(e, t, n) === 0
    }, lessThan(e, t, n) {
        return e?.type !== t?.type ? !1 : ji(e, t, n) < 0
    }, lessThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : ji(e, t, n) <= 0
    }, greaterThan(e, t, n) {
        return e?.type !== t?.type ? !1 : ji(e, t, n) > 0
    }, greaterThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : ji(e, t, n) >= 0
    }, in(e, t, n) {
        return t?.type !== "array" ? !1 : t.value.some(r => Ae.equal(r, e, n))
    }, indexOf(e, t, n) {
        return e?.type !== "array" ? -1 : e.value.findIndex(r => Ae.equal(r, t, n))
    }, contains(e, t, n) {
        let r = Go(e), i = Go(t);
        return lr(r) || lr(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.includes(i))
    }, startsWith(e, t, n) {
        let r = Go(e), i = Go(t);
        return lr(r) || lr(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.startsWith(i))
    }, endsWith(e, t, n) {
        let r = Go(e), i = Go(t);
        return lr(r) || lr(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.endsWith(i))
    }, length(e) {
        switch (e?.type) {
            case"array":
                return e.value.length
        }
        return 0
    }, stringify(e) {
        if (e === null) return "null";
        switch (e.type) {
            case"array":
                return `[${e.value.map(Ae.stringify).join(", ")}]`;
            case"boolean":
            case"number":
                return String(e.value);
            case"string":
                return `'${e.value}'`;
            case"enum":
                return `'${e.value}' /* Enum */`;
            case"color":
                return `'${e.value}' /* Color */`;
            case"date":
                return `'${e.value}' /* Date */`;
            case"richtext":
                return "RichText";
            case"responsiveimage":
                return "ResponsiveImage";
            case"file":
                return "File";
            case"link":
                return ce(e.value) ? `'${e.value}' /* Link */` : "Link";
            case"object":
                return "Object";
            default:
                Ce(e)
        }
    }
};

function ji(e, t, n) {
    if (lr(e) || lr(t)) return D(e === t), 0;
    switch (e.type) {
        case"array": {
            D(e.type === t.type);
            let r = e.value.length, i = t.value.length;
            if (r < i) return -1;
            if (r > i) return 1;
            for (let o = 0; o < r; o++) {
                let s = e.value[o], a = t.value[o];
                D(!Ge(s), "Left item must exist"), D(!Ge(a), "Right item must exist");
                let l = ji(s, a, n);
                if (l !== 0) return l
            }
            return 0
        }
        case"boolean":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"color":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"date": {
            D(e.type === t.type);
            let r = new Date(e.value), i = new Date(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"enum":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"file":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"link": {
            D(e.type === t.type);
            let r = JSON.stringify(e.value), i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"number":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"object": {
            D(e.type === t.type);
            let r = Object.keys(e.value).sort(), i = Object.keys(t.value).sort();
            if (r.length < i.length) return -1;
            if (r.length > i.length) return 1;
            for (let o = 0; o < r.length; o++) {
                let s = r[o], a = i[o];
                if (D(!Ge(s), "Left key must exist"), D(!Ge(a), "Left key must exist"), s < a) return -1;
                if (s > a) return 1;
                let l = e.value[s], c = t.value[a];
                D(!Ge(l), "Left value must exist"), D(!Ge(c), "Right value must exist");
                let u = ji(l, c, n);
                if (u !== 0) return u
            }
            return 0
        }
        case"responsiveimage": {
            D(e.type === t.type);
            let r = JSON.stringify(e.value), i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"richtext": {
            D(e.type === t.type);
            let r = e.value, i = t.value;
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"string": {
            D(e.type === t.type);
            let r = e.value, i = t.value;
            return n.type === 0 && (r = e.value.toLowerCase(), i = t.value.toLowerCase()), r < i ? -1 : r > i ? 1 : 0
        }
        default:
            Ce(e)
    }
}

var Y1 = {type: "unknown", isNullable: !0};

function Z4() {
    return 25
}

function J4() {
    return 100 * 125
}

var Fu = 1e3, ae = class {
    constructor(e) {
        this.network = e
    }

    static estimate(e, t) {
        let n = Z4(), r = J4(), i = e * n + t / r;
        return new ae(i)
    }

    static max(e, t) {
        let n = Math.max(e.network, t.network);
        return new ae(n)
    }

    static compare(e, t) {
        return e.network < t.network ? -1 : e.network > t.network ? 1 : 0
    }

    add(e) {
        return this.network += e.network, this
    }

    toString() {
        return `${this.network}ms`
    }
};
var dT = class {
    constructor(e, t) {
        this.id = e, this.relational = t, T(this, "nodes", []), T(this, "winners", new Map)
    }

    addNode(e) {
        this.nodes.push(e), e.setGroup(this)
    }

    getWinner(e) {
        let t = e.getHash(), n = this.winners.get(t);
        if (n) return n;
        let r = new eB;
        return this.winners.set(t, r), r
    }

    getOptimized(e) {
        let t = this.getWinner(e);
        D(t.node, "Group not optimized");
        let n = t.node.getOptimized(e);
        return n.setGroup(this), n
    }
}, eB = class {
    constructor() {
        T(this, "node"), T(this, "cost", new ae(1 / 0)), T(this, "nodes", [])
    }

    update(e, t) {
        this.nodes.push(e), ae.compare(t, this.cost) < 0 && (this.node = e, this.cost = t)
    }
};

function hT(e) {
    let t = e.next();
    return D(t.done, "Generator must not yield"), t.value
}

async function ef(e, t = e.next()) {
    for (; !t.done;) {
        let n = await t.value;
        t = e.next(n)
    }
    return t.value
}

function* qe(e) {
    let t = {}, n = Object.keys(e), r = [];
    for (let i of n) {
        let o = e[i];
        if (Ok(o)) {
            let s = o.next();
            s.done ? t[i] = s.value : r.push(ef(o, s).then(a => {
                t[i] = a
            }))
        } else t[i] = o
    }
    return r.length > 0 && (yield Promise.all(r)), t
}

function* Pu(e) {
    let t = [], n = e.keys(), r = [];
    for (let i of n) {
        let o = e[i];
        if (Ok(o)) {
            let s = o.next();
            s.done ? t[i] = s.value : r.push(ef(o, s).then(a => {
                t[i] = a
            }))
        } else t[i] = o
    }
    return r.length > 0 && (yield Promise.all(r)), t
}

var pT = class {
    constructor(e) {
        this.isSynchronous = e
    }
}, _n = class extends pT {
    constructor() {
        super(...arguments), T(this, "group")
    }

    getGroup() {
        return D(this.group, "Node must be in a group"), this.group
    }

    setGroup(e) {
        D(!this.group, "Node is already in a group"), this.group = e
    }

    evaluateSync() {
        let e = this.evaluate(void 0);
        return hT(e)
    }

    evaluateAsync() {
        let e = this.evaluate(void 0);
        return ef(e)
    }
};

function tB(e) {
    return ve(e) && Hn(e.getHash)
}

function fe(e, ...t) {
    let n = t.map(r => {
        let i = r instanceof gT;
        D(!i, "Pass CollectionMetadata.id instead");
        let o = r instanceof Sa;
        D(!o, "Pass FieldMetadata.id instead");
        let s = r instanceof vT;
        D(!s, "Pass IndexMetadata.id instead");
        let a = r instanceof _n;
        D(!a, "Pass RelationalNode.group.id instead");
        let l = r instanceof dT;
        return D(!l, "Pass Group.id instead"), tB(r) ? r.getHash() : JSON.stringify(r)
    });
    return `${e}(${n.join(", ")})`
}

var xg = class {
    constructor(e, t) {
        this.data = e, this.pointer = t, T(this, "cached")
    }

    resolve() {
        return this.cached ??= this.data.resolveRichText(this.pointer), this.cached
    }
}, Jo = "index", mT = class extends Set {
    merge(e) {
        for (let t of e) this.add(t)
    }

    equals(e) {
        if (this === e) return !0;
        if (this.size !== e.size) return !1;
        for (let t of this) if (!e.has(t)) return !1;
        return !0
    }

    subsetOf(e) {
        if (this === e) return !0;
        if (this.size > e.size) return !1;
        for (let t of this) if (!e.has(t)) return !1;
        return !0
    }

    getHash() {
        let e = [];
        for (let t of this) e.push(t.id);
        return e.sort((t, n) => t - n), fe(this.name, ...e)
    }
};
var gT = class {
    constructor(e, t, n) {
        this.id = e, this.name = t, this.data = n, T(this, "indexes", new nB), T(this, "fields", new q)
    }
};
var vT = class {
    constructor(e, t, n, r, i, o) {
        this.id = e, this.data = t, this.collection = n, this.lookupNodes = r, this.constraint = i, this.ordering = o, T(this, "resolvedFields", new q);
        for (let s in t.schema) for (let a of n.fields) a.name === s && this.resolvedFields.add(a)
    }
}, nB = class extends mT {
    constructor() {
        super(...arguments), T(this, "name", "Indexes")
    }
};
var Sa = class {
    constructor(e, t, n, r) {
        this.id = e, this.name = t, this.definition = n, this.collection = r
    }

    getValue(e) {
        D(this.name, "Can only get value of field with a name");
        let t = e.data[this.name];
        return t?.type === "richtext" ? (D(this.collection, "Rich text field must have a collection"), {
            type: "richtext",
            value: new xg(this.collection.data, t.value)
        }) : t ?? null
    }
}, q = class extends mT {
    constructor() {
        super(...arguments), T(this, "name", "Fields")
    }
}, xm = class {
    constructor(e, t = "asc") {
        this.field = e, this.direction = t
    }

    getHash() {
        return fe("OrderingField", this.field.id, this.direction)
    }
}, cr = class {
    constructor(e) {
        T(this, "fields", []), e && this.merge(e)
    }

    get length() {
        return this.fields.length
    }

    getHash() {
        return fe("Ordering", ...this.fields)
    }

    push(e) {
        this.fields.push(e)
    }

    merge(e) {
        this.fields.push(...e.fields)
    }

    equals(e) {
        return this === e ? !0 : this.length !== e.length ? !1 : this.getHash() === e.getHash()
    }

    providedByFields(e) {
        for (let {field: t} of this.fields) if (!e.has(t) && t.name !== Jo) return !1;
        return !0
    }
}, dn = class {
    constructor(e, t) {
        this.ordering = e, this.resolvedFields = t
    }

    getHash() {
        return fe("RequiredProps", this.ordering, this.resolvedFields)
    }

    get isMinimal() {
        return this.ordering.length === 0 && this.resolvedFields.size === 0
    }

    canProvide(e) {
        return this.canProvideOrdering(e) && this.canProvideResolvedFields(e)
    }

    canProvideOrdering(e) {
        return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering)
    }

    canProvideResolvedFields(e) {
        return this.resolvedFields.size === 0 ? !0 : e.canProvideResolvedFields(this.resolvedFields)
    }
}, Bm = class {
    constructor(e) {
        this.parent = e, T(this, "node"), T(this, "ordering"), T(this, "fields", [])
    }

    takeNode() {
        let e = this.node;
        return D(e, "Node is missing"), this.node = void 0, e
    }

    setNode(e) {
        D(!this.node, "Node already set"), this.node = e
    }

    setOrdering(e) {
        this.ordering = e
    }

    push() {
        return new Bm(this)
    }

    replace() {
        return new Bm(this.parent)
    }

    addField(e) {
        this.fields.push(e)
    }

    addFieldsFromScope(e) {
        for (let t of e.fields) this.addField(t)
    }

    resolveField(e, t) {
        var n;
        let r = [];
        for (let i of this.fields) i.name === e && (t && i.collectionName !== t || r.push(i));
        if (r.length === 1) return r[0];
        if (r.length > 1) throw new Error("Ambiguous fields");
        return (n = this.parent) == null ? void 0 : n.resolveField(e, t)
    }

    has(e) {
        var t;
        return this.fields.includes(e) ? !0 : ((t = this.parent) == null ? void 0 : t.has(e)) ?? !1
    }

    getRequiredOrdering() {
        return this.ordering ?? new cr
    }

    getRequiredResolvedFields() {
        let e = new q;
        for (let {field: t} of this.fields) t.collection && e.add(t);
        return e
    }

    getRequiredProps() {
        let e = this.getRequiredOrdering(), t = this.getRequiredResolvedFields();
        return new dn(e, t)
    }

    getNamedFields() {
        let e = {};
        for (let {name: t, field: n} of this.fields) e[t] = n;
        return e
    }

    getSingleField() {
        D(this.fields.length === 1, "Scope must contain exactly one field");
        let e = this.fields[0];
        return D(e, "Field must exist"), e.field
    }
}, dr = class {
    constructor() {
        T(this, "pointers", new Map), T(this, "values", new Map)
    }

    getKey() {
        let e = [];
        for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
        return e.sort().join("-")
    }

    addValue(e, t) {
        this.values.set(e, t)
    }

    getValue(e) {
        return this.values.get(e) ?? null
    }

    mergeValues(e) {
        for (let [t, n] of e.values) this.addValue(t, n)
    }

    addPointer(e, t) {
        this.pointers.set(e, t)
    }

    getPointer(e) {
        return this.pointers.get(e)
    }

    mergePointers(e) {
        for (let [t, n] of e.pointers) this.addPointer(t, n)
    }

    merge(e) {
        this.mergeValues(e), this.mergePointers(e)
    }
}, Fn = class {
    constructor(e, t = []) {
        this.fields = e, this.tuples = t
    }

    push(e) {
        this.tuples.push(e)
    }

    filter(e) {
        let t = this.tuples.filter(e);
        return new Fn(this.fields, t)
    }

    map(e, t) {
        let n = this.tuples.map(t);
        return new Fn(e, n)
    }

    sort(e) {
        let t = Array.from(this.tuples).sort(e);
        return new Fn(this.fields, t)
    }

    slice(e, t) {
        let n = this.tuples.slice(e, t);
        return new Fn(this.fields, n)
    }

    union(e) {
        let t = new q;
        for (let i of this.fields) e.fields.has(i) && t.add(i);
        let n = new Set, r = new Fn(t);
        for (let i of this.tuples) {
            let o = i.getKey();
            n.add(o), r.push(i)
        }
        for (let i of e.tuples) {
            let o = i.getKey();
            n.has(o) || r.push(i)
        }
        return r
    }

    intersection(e) {
        let t = new q;
        for (let i of this.fields) e.fields.has(i) && t.add(i);
        let n = new Set, r = new Fn(t);
        for (let i of this.tuples) {
            let o = i.getKey();
            n.add(o)
        }
        for (let i of e.tuples) {
            let o = i.getKey();
            n.has(o) && r.push(i)
        }
        return r
    }
}, $m = class {
    constructor(e, t) {
        this.input = e, this.field = t
    }

    getHash() {
        return fe("ProjectionField", this.input, this.field.id)
    }
}, Nm = class extends _n {
    constructor(e, t, n) {
        let r = e.isSynchronous;
        for (let i of t) r &&= i.input.isSynchronous;
        super(r), this.input = e, this.projections = t, this.passthrough = n, T(this, "inputGroup"), this.inputGroup = e.getGroup()
    }

    getHash() {
        return fe("RelationalProject", this.inputGroup.id, ...this.projections, this.passthrough)
    }

    getOutputFields() {
        let e = new q;
        e.merge(this.passthrough);
        for (let t of this.projections) e.add(t.field);
        return e
    }

    canProvideOrdering(e) {
        let t = new q;
        for (let n of this.projections) t.add(n.field);
        for (let {field: n} of e.fields) if (t.has(n)) return !1;
        return !0
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new q(e.resolvedFields);
        for (let n of this.projections) t.merge(n.input.referencedFields), t.delete(n.field);
        return new dn(e.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = new ae(0);
        for (let o of this.projections) {
            let s = o.input.optimize(e);
            i = ae.max(i, s)
        }
        return new ae(0).add(ae.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.projections.map(i => {
            let o = i.input.getOptimized();
            return new $m(o, i.field)
        });
        return new Nm(n, r, this.passthrough)
    }

    * evaluate(e) {
        let t = this.getOutputFields(), n = yield* this.input.evaluate(e),
            r = yield* Pu(n.tuples.map(i => Pu(this.projections.map(o => qe({
                field: o.field,
                value: o.input.evaluate(e, i)
            })))));
        return n.map(t, (i, o) => {
            let s = new dr;
            s.mergePointers(i);
            for (let l of this.passthrough) {
                let c = i.getValue(l);
                s.addValue(l, c)
            }
            let a = r[o];
            D(a, "Projections must exist");
            for (let {field: l, value: c} of a) s.addValue(l, c);
            return s
        })
    }
}, rs = {type: 0}, Ze = class extends pT {
    constructor(e, t, n) {
        super(n), this.referencedFields = e, this.referencedOuterFields = t, this.isSynchronous = n
    }

    evaluateSync() {
        let e = this.evaluate(void 0, void 0);
        return hT(e)
    }

    evaluateAsync() {
        let e = this.evaluate(void 0, void 0);
        return ef(e)
    }
}, rB = {type: 0}, wg = class {
    constructor(e, t) {
        this.when = e, this.then = t
    }

    getHash() {
        return fe("CaseCondition", this.when, this.then)
    }
}, yT = class extends Ze {
    constructor(e, t, n) {
        let r = new q, i = new q, o = !0;
        e && (r.merge(e.referencedFields), i.merge(e.referencedOuterFields), o &&= e.isSynchronous);
        for (let {
            when: s,
            then: a
        } of t) r.merge(s.referencedFields), i.merge(s.referencedOuterFields), o &&= s.isSynchronous, r.merge(a.referencedFields), i.merge(a.referencedOuterFields), o &&= a.isSynchronous;
        n && (r.merge(n.referencedFields), i.merge(n.referencedOuterFields), o &&= n.isSynchronous), super(r, i, o), this.input = e, this.conditions = t, this.otherwise = n, T(this, "definition", {
            type: "unknown",
            isNullable: !0
        })
    }

    getHash() {
        return fe("ScalarCase", this.input, ...this.conditions, this.otherwise)
    }

    optimize(e) {
        var t, n;
        (t = this.input) == null || t.optimize(e);
        for (let r of this.conditions) r.when.optimize(e), r.then.optimize(e);
        return (n = this.otherwise) == null || n.optimize(e), new ae(0)
    }

    getOptimized() {
        var e, t;
        let n = (e = this.input) == null ? void 0 : e.getOptimized(), r = this.conditions.map(o => {
            let s = o.when.getOptimized(), a = o.then.getOptimized();
            return new wg(s, a)
        }), i = (t = this.otherwise) == null ? void 0 : t.getOptimized();
        return new yT(n, r, i)
    }

    * evaluate(e, t) {
        var n, r;
        let {
            input: i,
            conditions: o,
            otherwise: s
        } = yield* qe({
            input: ((n = this.input) == null ? void 0 : n.evaluate(e, t)) ?? null,
            conditions: Pu(this.conditions.map(a => qe({when: a.when.evaluate(e, t), then: a.then.evaluate(e, t)}))),
            otherwise: ((r = this.otherwise) == null ? void 0 : r.evaluate(e, t)) ?? null
        });
        if (this.input) {
            for (let {when: a, then: l} of o) if (Ae.equal(i, a, rB)) return l
        } else for (let {when: a, then: l} of o) if (zr(a)) return l;
        return s
    }
}, iB = class {
    constructor(e, t, n) {
        this.normalizer = e, this.query = t, this.locale = n, T(this, "collectionId", 0), T(this, "indexId", 0), T(this, "fieldId", 0), T(this, "subqueries", [])
    }

    build() {
        let e = new Bm;
        return this.buildQuery(e, this.query)
    }

    buildQuery(e, t) {
        let n = {type: "Select", ...t};
        return this.buildSelect(e, n)
    }

    buildSelect(e, t) {
        let n = this.buildFrom(e, t.from), r = n.getRequiredOrdering();
        if (t.where) {
            let l = n.takeNode(), c = this.buildExpression(n, t.where), u = this.normalizer.newRelationalFilter(l, c);
            n.setNode(u)
        }
        let i = [], o = new q, s;
        if (t.orderBy) {
            s = new cr;
            for (let l of t.orderBy) if (l.type === "Identifier") {
                let c = n.resolveField(l.name, l.collection);
                if (Ge(c)) continue;
                o.add(c.field);
                let u = new xm(c.field, l.direction);
                s.push(u)
            } else {
                let c = this.buildExpression(n, l), u = this.fieldId++, f = new Sa(u, void 0, c.definition, void 0),
                    d = new $m(c, f);
                i.push(d);
                let h = new xm(f, l.direction);
                s.push(h)
            }
            s.merge(r)
        } else s = r;
        let a = this.buildSelectList(n, t.select, o, i);
        if (a.setOrdering(s), t.offset) {
            let l = a.takeNode(), c = this.buildExpression(e, t.offset),
                u = this.normalizer.newRelationalOffset(l, c, s);
            a.setNode(u)
        }
        if (t.limit) {
            let l = a.takeNode(), c = this.buildExpression(e, t.limit), u = this.normalizer.newRelationalLimit(l, c, s);
            a.setNode(u)
        }
        return a
    }

    buildSelectList(e, t, n, r) {
        let i = e.push(), o = new q(n), s = [...r];
        for (let c of t) if (c.type === "Identifier") {
            let u = e.resolveField(c.name, c.collection);
            if (Ge(u)) continue;
            o.add(u.field), i.addField({...u, name: c.alias ?? u.name})
        } else {
            let u = this.buildExpression(e, c);
            D(c.alias, "Subqueries should have an alias");
            let f = this.fieldId++, d = c.alias, h = new Sa(f, d, u.definition, void 0), v = new $m(u, h);
            s.push(v), i.addField({field: h, name: d})
        }
        let a = e.takeNode(), l = this.normalizer.newRelationalProject(a, s, o);
        return i.setNode(l), i
    }

    buildFrom(e, t) {
        switch (t.type) {
            case"Collection":
                return this.buildCollection(e, t);
            case"LeftJoin":
                return this.buildJoin(e, t);
            default:
                Ce(t, "Unsupported from type")
        }
    }

    buildCollection(e, t) {
        let n = e.push(), r = oB(t.data, this.locale), i = t.alias, o = this.collectionId++, s = new gT(o, i, r);
        for (let [l, c] of Object.entries(r.schema)) {
            let u = this.fieldId++, f = new Sa(u, l, c, s);
            n.addField({field: f, name: l, collectionName: i}), s.fields.add(f)
        }
        {
            let l = {type: "number", isNullable: !1}, c = this.fieldId++, u = new Sa(c, Jo, l, s);
            n.addField({field: u, name: Jo, collectionName: i});
            let f = new cr, d = new xm(u);
            f.push(d), n.setOrdering(f)
        }
        for (let l of r.indexes) {
            let c = [];
            for (let v of l.fields) {
                let g = this.buildExpression(n, v);
                c.push(g)
            }
            let u;
            l.where && (u = this.buildExpression(n, l.where));
            let f = new cr, d = this.indexId++, h = new vT(d, l, s, c, u, f);
            s.indexes.add(h)
        }
        let a = this.normalizer.newRelationalScan(s);
        return n.setNode(a), n
    }

    buildJoin(e, t) {
        let n = this.buildFrom(e, t.left), r = this.buildFrom(e, t.right), i = new cr, o = n.getRequiredOrdering();
        i.merge(o);
        let s = r.getRequiredOrdering();
        i.merge(s);
        let a = e.push();
        a.addFieldsFromScope(n), a.addFieldsFromScope(r), a.setOrdering(i);
        let l = this.buildExpression(a, t.constraint), c = n.takeNode(), u = r.takeNode(), f;
        switch (t.type) {
            case"LeftJoin":
                f = this.normalizer.newRelationalLeftJoin(c, u, l);
                break;
            default:
                Ce(t.type, "Unsupported join type")
        }
        return a.setNode(f), a
    }

    buildExpression(e, t) {
        switch (t.type) {
            case"Identifier":
                return this.buildIdentifier(e, t);
            case"LiteralValue":
                return this.buildLiteralValue(t);
            case"FunctionCall":
                return this.buildFunctionCall(e, t);
            case"Case":
                return this.buildCase(e, t);
            case"UnaryOperation":
                return this.buildUnaryOperation(e, t);
            case"BinaryOperation":
                return this.buildBinaryOperation(e, t);
            case"TypeCast":
                return this.buildTypeCast(e, t);
            case"Select":
                throw new Error("Subqueries are only supported inside subquery function calls");
            default:
                Ce(t, "Unsupported expression")
        }
    }

    buildIdentifier(e, t) {
        let n = e.resolveField(t.name, t.collection);
        if (n) {
            let r = !1;
            for (let i of this.subqueries) r ? i.referencedOuterFields.add(n.field) : (r = i.inScope.has(n), r && i.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, r)
        }
        return this.normalizer.newScalarConstant(Y1, null)
    }

    buildLiteralValue(e) {
        let t = Ae.parse(e.value);
        return this.normalizer.newScalarConstant(Y1, t)
    }

    buildFunctionCall(e, t) {
        let n = r => {
            let i = t.arguments[r];
            return D(i, "Missing argument"), this.buildExpression(e, i)
        };
        switch (t.functionName) {
            case"CONTAINS": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarContains(r, i)
            }
            case"STARTS_WITH": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarStartsWith(r, i)
            }
            case"ENDS_WITH": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarEndsWith(r, i)
            }
            case"LENGTH": {
                let r = n(0);
                return this.normalizer.newScalarLength(r)
            }
            case"INDEX_OF": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarIndexOf(r, i)
            }
            case"ARRAY": {
                let r = t.arguments[0];
                return D(r, "Missing argument"), D(r.type === "Select", "Subqueries require a select expression"), this.buildSubqueryArray(e, r)
            }
            case"FLAT_ARRAY": {
                let r = t.arguments[0];
                return D(r, "Missing argument"), D(r.type === "Select", "Subqueries require a select expression"), this.buildSubqueryFlatArray(e, r)
            }
            default:
                throw new Error("Unsupported function name")
        }
    }

    buildSubqueryArray(e, t) {
        try {
            let n = new K1(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t), i = r.takeNode(), o = r.getNamedFields(), s = r.getRequiredOrdering(),
                a = n.referencedFields, l = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, o, s, a, l)
        } finally {
            this.subqueries.pop()
        }
    }

    buildSubqueryFlatArray(e, t) {
        try {
            let n = new K1(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t), i = r.takeNode(), o = r.getSingleField(), s = r.getRequiredOrdering(),
                a = n.referencedFields, l = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, o, s, a, l)
        } finally {
            this.subqueries.pop()
        }
    }

    buildCase(e, t) {
        let n;
        t.value && (n = this.buildExpression(e, t.value));
        let r = t.conditions.map(o => {
            let s = this.buildExpression(e, o.when), a = this.buildExpression(e, o.then);
            return new wg(s, a)
        }), i;
        return t.else && (i = this.buildExpression(e, t.else)), this.normalizer.newScalarCase(n, r, i)
    }

    buildUnaryOperation(e, t) {
        let n = this.buildExpression(e, t.value);
        switch (t.operator) {
            case"not":
                return this.normalizer.newScalarNot(n);
            default:
                Ce(t.operator, "Unsupported unary operator")
        }
    }

    buildBinaryOperation(e, t) {
        let n = this.buildExpression(e, t.left), r = this.buildExpression(e, t.right);
        switch (t.operator) {
            case"and":
                return this.normalizer.newScalarAnd(n, r);
            case"or":
                return this.normalizer.newScalarOr(n, r);
            case"==":
                return this.normalizer.newScalarEquals(n, r);
            case"!=":
                return this.normalizer.newScalarNotEquals(n, r);
            case"<":
                return this.normalizer.newScalarLessThan(n, r);
            case"<=":
                return this.normalizer.newScalarLessThanOrEqual(n, r);
            case">":
                return this.normalizer.newScalarGreaterThan(n, r);
            case">=":
                return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case"in":
                return this.normalizer.newScalarIn(n, r);
            default:
                Ce(t.operator, "Unsupported binary operator")
        }
    }

    buildTypeCast(e, t) {
        let n = this.buildExpression(e, t.value);
        switch (t.dataType) {
            case"BOOLEAN": {
                let r = {type: "boolean", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            case"DATE": {
                let r = {type: "date", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            case"NUMBER": {
                let r = {type: "number", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            case"STRING": {
                let r = {type: "string", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            default:
                throw new Error("Unsupported data type")
        }
    }
};

function oB(e, t) {
    if (sT(e)) return new j4(e, t);
    if (bg(e)) return e;
    if (aT(e)) {
        for (; t;) {
            let n = e.collectionByLocaleId[t.id];
            if (n) return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    Ce(e, "Unsupported collection type")
}

var K1 = class {
    constructor(e) {
        this.inScope = e, T(this, "referencedFields", new q), T(this, "referencedOuterFields", new q)
    }
}, _u = class extends _n {
    constructor(e, t) {
        super(e.isSynchronous && t.isSynchronous), this.input = e, this.predicate = t, T(this, "inputGroup"), this.inputGroup = e.getGroup()
    }

    getHash() {
        return fe("RelationalFilter", this.inputGroup.id, this.predicate)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering() {
        return !0
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new q(e.resolvedFields);
        return t.merge(this.predicate.referencedFields), new dn(e.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = this.predicate.optimize(e);
        return new ae(0).add(ae.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.predicate.getOptimized();
        return new _u(n, r)
    }

    * evaluate(e) {
        let t = yield* this.input.evaluate(e), n = yield* Pu(t.tuples.map(r => this.predicate.evaluate(e, r)));
        return t.filter((r, i) => {
            let o = n[i] ?? null;
            return zr(o)
        })
    }
}, Rn = class extends _n {
    constructor(e, t) {
        super(!1), this.index = e, this.query = t
    }

    getHash() {
        return fe("RelationalIndexLookup", this.index.id, ...this.query)
    }

    getOutputFields() {
        return this.index.collection.fields
    }

    canProvideOrdering(e) {
        return e.equals(this.index.ordering)
    }

    canProvideResolvedFields(e) {
        return e.subsetOf(this.index.resolvedFields)
    }

    optimize() {
        let e = this.query.every(t => t.type === "All");
        return ae.estimate(1, e ? 100 * Fu : 50 * Fu)
    }

    getOptimized() {
        return new Rn(this.index, this.query)
    }

    * evaluate() {
        let e = this.index, t = e.collection, n = this.getOutputFields(),
            i = (yield e.data.lookupItems(this.query)).map(o => {
                let s = new dr;
                for (let a of e.resolvedFields) {
                    let l = a.getValue(o);
                    s.addPointer(t, o.pointer), s.addValue(a, l)
                }
                return s
            });
        return new Fn(n, i)
    }
}, bT = class extends _n {
    constructor(e, t) {
        super(e.isSynchronous && t.isSynchronous), this.left = e, this.right = t, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = e.getGroup(), this.rightGroup = t.getGroup()
    }

    getHash() {
        return fe("RelationalIntersection", this.leftGroup.id, this.rightGroup.id)
    }

    getOutputFields() {
        let e = new q, t = this.leftGroup.relational.outputFields, n = this.rightGroup.relational.outputFields;
        for (let r of t) n.has(r) && e.add(r);
        return e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e) {
        let t = new cr;
        return new dn(t, e.resolvedFields)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t), o = e.optimizeGroup(this.rightGroup, i);
        return ae.max(r, o)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(e), n = this.leftGroup.getOptimized(t), r = this.getChildRequiredProps(e),
            i = this.rightGroup.getOptimized(r);
        return new bT(n, i)
    }

    * evaluate(e) {
        let {left: t, right: n} = yield* qe({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        return t.intersection(n)
    }
}, es = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarEquals", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new es(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Ae.equal(n, r, rs)}
    }
}, Iu = class extends _n {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous && n.isSynchronous), this.left = e, this.right = t, this.constraint = n, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = e.getGroup(), this.rightGroup = t.getGroup()
    }

    getHash() {
        return fe("RelationalLeftJoin", this.leftGroup.id, this.rightGroup.id, this.constraint)
    }

    getOutputFields() {
        let e = new q;
        return e.merge(this.leftGroup.relational.outputFields), e.merge(this.rightGroup.relational.outputFields), e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e, t) {
        let n = new q, r = e.relational.outputFields;
        for (let o of t.resolvedFields) r.has(o) && n.add(o);
        for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
        let i = new cr;
        return new dn(i, n)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(this.leftGroup, t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t), o = e.optimizeGroup(this.rightGroup, i),
            s = this.constraint.optimize(e);
        return ae.max(ae.max(r, o), s)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(this.leftGroup, e), n = this.leftGroup.getOptimized(t),
            r = this.getChildRequiredProps(this.rightGroup, e), i = this.rightGroup.getOptimized(r),
            o = this.constraint.getOptimized();
        return new Iu(n, i, o)
    }

    * evaluateScalarEquals(e, t, n, r, i) {
        let o = new Map;
        for (let l of t.tuples) {
            let c = yield* r.evaluate(i, l), u = JSON.stringify(c?.value ?? null), f = o.get(u) ?? [];
            f.push(l), o.set(u, f)
        }
        let s = this.getOutputFields(), a = new Fn(s);
        for (let l of e.tuples) {
            let c = yield* n.evaluate(i, l), u = JSON.stringify(c?.value ?? null), f = o.get(u) ?? [];
            if (f.length === 0) a.push(l); else for (let d of f) {
                let h = new dr;
                h.merge(l), h.merge(d), a.push(h)
            }
        }
        return a
    }

    * evaluate(e) {
        let {left: t, right: n} = yield* qe({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        if (this.constraint instanceof es) {
            if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
            if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
        }
        let r = this.getOutputFields(), i = new Fn(r);
        for (let o of t.tuples) {
            let s = !1;
            for (let a of n.tuples) {
                let l = new dr;
                l.merge(o), l.merge(a);
                let c = yield* this.constraint.evaluate(e, l);
                zr(c) && (i.push(l), s = !0)
            }
            s || i.push(o)
        }
        return i
    }
}, Sg = class extends _n {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous && n.isSynchronous), this.left = e, this.right = t, this.constraint = n, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = e.getGroup(), this.rightGroup = t.getGroup()
    }

    getHash() {
        return fe("RelationalRightJoin", this.leftGroup.id, this.rightGroup.id, this.constraint)
    }

    getOutputFields() {
        let e = new q;
        return e.merge(this.leftGroup.relational.outputFields), e.merge(this.rightGroup.relational.outputFields), e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e, t) {
        let n = new q, r = e.relational.outputFields;
        for (let o of t.resolvedFields) r.has(o) && n.add(o);
        for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
        let i = new cr;
        return new dn(i, n)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(this.leftGroup, t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t), o = e.optimizeGroup(this.rightGroup, i),
            s = this.constraint.optimize(e);
        return ae.max(ae.max(r, o), s)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(this.leftGroup, e), n = this.leftGroup.getOptimized(t),
            r = this.getChildRequiredProps(this.rightGroup, e), i = this.rightGroup.getOptimized(r),
            o = this.constraint.getOptimized();
        return new Sg(n, i, o)
    }

    * evaluateScalarEquals(e, t, n, r, i) {
        let o = new Map;
        for (let l of e.tuples) {
            let c = yield* n.evaluate(i, l), u = JSON.stringify(c?.value ?? null), f = o.get(u) ?? [];
            f.push(l), o.set(u, f)
        }
        let s = this.getOutputFields(), a = new Fn(s);
        for (let l of t.tuples) {
            let c = yield* r.evaluate(i, l), u = JSON.stringify(c?.value ?? null), f = o.get(u) ?? [];
            if (f.length === 0) a.push(l); else for (let d of f) {
                let h = new dr;
                h.merge(l), h.merge(d), a.push(h)
            }
        }
        return a
    }

    * evaluate(e) {
        let {left: t, right: n} = yield* qe({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        if (this.constraint instanceof es) {
            if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
            if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
        }
        let r = this.getOutputFields(), i = new Fn(r);
        for (let o of n.tuples) {
            let s = !1;
            for (let a of t.tuples) {
                let l = new dr;
                l.merge(o), l.merge(a);
                let c = yield* this.constraint.evaluate(e, l);
                zr(c) && (i.push(l), s = !0)
            }
            s || i.push(o)
        }
        return i
    }
}, Ou = class extends _n {
    constructor(e) {
        super(!1), this.collection = e
    }

    getHash() {
        return fe("RelationalScan", this.collection.id)
    }

    getOutputFields() {
        return this.collection.fields
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields(e) {
        return e.subsetOf(this.collection.fields)
    }

    optimize() {
        return ae.estimate(1, 200 * Fu)
    }

    getOptimized() {
        return new Ou(this.collection)
    }

    * evaluate() {
        let e = this.collection, t = this.getOutputFields(), r = (yield e.data.scanItems()).map(i => {
            let o = new dr;
            for (let s of t) {
                let a = s.getValue(i);
                o.addPointer(e, i.pointer), o.addValue(s, a)
            }
            return o
        });
        return new Fn(t, r)
    }
}, xT = class extends _n {
    constructor(e, t) {
        super(e.isSynchronous && t.isSynchronous), this.left = e, this.right = t, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = e.getGroup(), this.rightGroup = t.getGroup()
    }

    getHash() {
        return fe("RelationalUnion", this.leftGroup.id, this.rightGroup.id)
    }

    getOutputFields() {
        let e = new q, t = this.leftGroup.relational.outputFields, n = this.rightGroup.relational.outputFields;
        for (let r of t) n.has(r) && e.add(r);
        return e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e) {
        let t = new cr;
        return new dn(t, e.resolvedFields)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t), o = e.optimizeGroup(this.rightGroup, i);
        return ae.max(r, o)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(e), n = this.leftGroup.getOptimized(t), r = this.getChildRequiredProps(e),
            i = this.rightGroup.getOptimized(r);
        return new xT(n, i)
    }

    * evaluate(e) {
        let {left: t, right: n} = yield* qe({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        return t.union(n)
    }
}, Mu = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarAnd", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Mu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: zr(n) && zr(r)}
    }
}, jn = class extends Ze {
    constructor(e, t) {
        let n = new q, r = new q;
        super(n, r, !0), this.definition = e, this.value = t
    }

    getHash() {
        return fe("ScalarConstant", this.definition, this.value)
    }

    optimize() {
        return new ae(0)
    }

    getOptimized() {
        return this
    }

    * evaluate() {
        return this.value
    }
}, sB = {type: 0}, kg = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarContains", this.source, this.target)
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new kg(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* qe({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "boolean", value: Ae.contains(n, r, sB)}
    }
}, aB = {type: 0}, Cg = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarEndsWith", this.source, this.target)
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new Cg(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* qe({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "boolean", value: Ae.endsWith(n, r, aB)}
    }
}, Lu = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarGreaterThan", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Lu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Ae.greaterThan(n, r, rs)}
    }
}, Vu = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarGreaterThanOrEqual", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Vu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Ae.greaterThanOrEqual(n, r, rs)}
    }
}, Au = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarLessThan", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Au(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Ae.lessThan(n, r, rs)}
    }
}, Du = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarLessThanOrEqual", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Du(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Ae.lessThanOrEqual(n, r, rs)}
    }
}, zu = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarNotEquals", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new zu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: !Ae.equal(n, r, rs)}
    }
}, Bu = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarOr", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Bu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: zr(n) || zr(r)}
    }
}, lB = {type: 0}, Tg = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarStartsWith", this.source, this.target)
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new Tg(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* qe({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "boolean", value: Ae.startsWith(n, r, lB)}
    }
}, cB = class {
    constructor(e) {
        this.normalizer = e, T(this, "memo"), this.memo = e.memo
    }

    explore(e) {
        let t = e.getGroup();
        if (e instanceof Iu) {
            let n = new Sg(e.right, e.left, e.constraint);
            this.memo.addRelational(n, t)
        }
        if (e instanceof _u) {
            if (e.predicate instanceof Mu) {
                let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                    r = this.normalizer.newRelationalFilter(e.input, e.predicate.right), i = new bT(n, r);
                this.memo.addRelational(i, t)
            }
            if (e.predicate instanceof Bu) {
                let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                    r = this.normalizer.newRelationalFilter(e.input, e.predicate.right), i = new xT(n, r);
                this.memo.addRelational(i, t)
            }
        }
        if (e instanceof Ou) for (let n of e.collection.indexes) {
            if (n.constraint) continue;
            let r = ar(n.lookupNodes.length), i = new Rn(n, r);
            this.memo.addRelational(i, t)
        }
        if (e instanceof _u) {
            for (let n of e.inputGroup.nodes) if (n instanceof Ou) for (let r of n.collection.indexes) {
                if (e.predicate instanceof es && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof jn && r.data.supportedLookupTypes.includes("Equals")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "Equals", value: e.predicate.right.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof zu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof jn && r.data.supportedLookupTypes.includes("NotEquals")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "NotEquals", value: e.predicate.right.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Au && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof jn && r.data.supportedLookupTypes.includes("LessThan")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "LessThan", value: e.predicate.right.value, inclusive: !1};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Du && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof jn && r.data.supportedLookupTypes.includes("LessThan")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "LessThan", value: e.predicate.right.value, inclusive: !0};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Lu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof jn && r.data.supportedLookupTypes.includes("GreaterThan")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "GreaterThan", value: e.predicate.right.value, inclusive: !1};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Vu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof jn && r.data.supportedLookupTypes.includes("GreaterThan")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "GreaterThan", value: e.predicate.right.value, inclusive: !0};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof kg && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof jn && r.data.supportedLookupTypes.includes("Contains")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "Contains", value: e.predicate.target.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Tg && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof jn && r.data.supportedLookupTypes.includes("StartsWith")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "StartsWith", value: e.predicate.target.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Cg && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof jn && r.data.supportedLookupTypes.includes("EndsWith")) {
                    let i = ar(r.lookupNodes.length);
                    i[0] = {type: "EndsWith", value: e.predicate.target.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
            }
        }
    }
};

function ar(e) {
    let t = {type: "All"};
    return new Array(e).fill(t)
}

var uB = class {
    constructor(e) {
        this.outputFields = e
    }

    isCompatible(e) {
        return this.outputFields.equals(e.outputFields)
    }
}, fB = class {
    constructor() {
        T(this, "nodes", new Map), T(this, "groups", [])
    }

    addGroup(e) {
        let t = this.groups.length, n = new dT(t, e);
        return this.groups.push(n), n
    }

    addRelational(e, t) {
        let n = e.getHash(), r = this.nodes.get(n);
        if (r) return r;
        this.nodes.set(n, e);
        let i = e.getOutputFields(), o = new uB(i);
        return t ??= this.addGroup(o), t.addNode(e), D(o.isCompatible(t.relational), "Group has inconsistent relational props"), e
    }

    addScalar(e) {
        let t = e.getHash(), n = this.nodes.get(t);
        return n || (this.nodes.set(t, e), e)
    }
}, wT = class extends _n {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous), this.input = e, this.limit = t, this.ordering = n, T(this, "inputGroup"), this.inputGroup = e.getGroup()
    }

    getHash() {
        return fe("RelationalLimit", this.inputGroup.id, this.limit)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering(e) {
        return e.equals(this.ordering)
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new q(e.resolvedFields);
        return t.merge(this.limit.referencedFields), new dn(this.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = this.limit.optimize(e);
        return new ae(0).add(ae.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.limit.getOptimized();
        return new wT(n, r, this.ordering)
    }

    * evaluate(e) {
        let {input: t, limit: n} = yield* qe({input: this.input.evaluate(e), limit: this.limit.evaluate(e, void 0)}),
            r = uT(n) ?? 1 / 0;
        return r === 1 / 0 ? t : t.slice(0, r)
    }
}, ST = class extends _n {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous), this.input = e, this.offset = t, this.ordering = n, T(this, "inputGroup"), this.inputGroup = e.getGroup()
    }

    getHash() {
        return fe("RelationalOffset", this.inputGroup.id, this.offset)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering(e) {
        return e.equals(this.ordering)
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new q(e.resolvedFields);
        return t.merge(this.offset.referencedFields), new dn(this.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = this.offset.optimize(e);
        return new ae(0).add(ae.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.offset.getOptimized();
        return new ST(n, r, this.ordering)
    }

    * evaluate(e) {
        let {input: t, offset: n} = yield* qe({input: this.input.evaluate(e), offset: this.offset.evaluate(e, void 0)}),
            r = uT(n) ?? 0;
        return r === 0 ? t : t.slice(r)
    }
}, kT = class extends Ze {
    constructor(e, t, n, r, i) {
        super(r, i, e.isSynchronous), this.input = e, this.namedFields = t, this.ordering = n, this.referencedFields = r, this.referencedOuterFields = i, T(this, "inputGroup"), T(this, "definition"), this.inputGroup = e.getGroup();
        let o = {}, s = Object.entries(t);
        for (let [a, l] of s) o[a] = l.definition;
        this.definition = {type: "array", isNullable: !1, definition: {type: "object", isNullable: !1, definitions: o}}
    }

    getHash() {
        let e = {}, t = Object.entries(this.namedFields);
        for (let [n, r] of t) e[n] = r.id;
        return fe("ScalarArray", this.inputGroup.id, e, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    getInputRequiredProps() {
        let e = new q, t = Object.values(this.namedFields);
        for (let n of t) Ge(n.collection) || e.add(n);
        return new dn(this.ordering, e)
    }

    optimize(e) {
        let t = this.getInputRequiredProps(), n = e.optimizeGroup(this.inputGroup, t);
        return new ae(0).add(n)
    }

    getOptimized() {
        let e = this.getInputRequiredProps(), t = this.inputGroup.getOptimized(e);
        return new kT(t, this.namedFields, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    * evaluate(e, t) {
        let n = new dr;
        e && n.merge(e), t && n.merge(t);
        let r = yield* this.input.evaluate(n), i = Object.entries(this.namedFields);
        return {
            type: "array", value: r.tuples.map(o => {
                let s = {};
                for (let [a, l] of i) s[a] = o.getValue(l);
                return {type: "object", value: s}
            })
        }
    }
}, CT = class extends Ze {
    constructor(e, t) {
        super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), this.input = e, this.definition = t, D(t.isNullable, "Unsupported non-nullable cast")
    }

    getHash() {
        return fe("ScalarCast", this.input, this.definition)
    }

    optimize(e) {
        return this.input.optimize(e)
    }

    getOptimized() {
        let e = this.input.getOptimized();
        return new CT(e, this.definition)
    }

    * evaluate(e, t) {
        let n = yield* this.input.evaluate(e, t);
        return Ae.cast(n, this.definition)
    }
}, TT = class extends Ze {
    constructor(e, t, n, r, i) {
        super(r, i, e.isSynchronous), this.input = e, this.field = t, this.ordering = n, this.referencedFields = r, this.referencedOuterFields = i, T(this, "inputGroup"), T(this, "definition"), this.inputGroup = e.getGroup(), this.definition = {
            type: "array",
            isNullable: !1,
            definition: t.definition
        }
    }

    getHash() {
        return fe("ScalarFlatArray", this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    getInputRequiredProps() {
        let e = new q;
        return Ge(this.field.collection) || e.add(this.field), new dn(this.ordering, e)
    }

    optimize(e) {
        let t = this.getInputRequiredProps(), n = e.optimizeGroup(this.inputGroup, t);
        return new ae(0).add(n)
    }

    getOptimized() {
        let e = this.getInputRequiredProps(), t = this.inputGroup.getOptimized(e);
        return new TT(t, this.field, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    * evaluate(e, t) {
        let n = new dr;
        return e && n.merge(e), t && n.merge(t), {
            type: "array",
            value: (yield* this.input.evaluate(n)).tuples.map(i => i.getValue(this.field))
        }
    }
}, dB = {type: 0}, RT = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarIn", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new RT(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Ae.in(n, r, dB)}
    }
}, hB = {type: 1}, ET = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, T(this, "definition", {type: "number", isNullable: !1})
    }

    getHash() {
        return fe("ScalarIndexOf", this.source, this.target)
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new ET(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* qe({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "number", value: Ae.indexOf(n, r, hB)}
    }
}, FT = class extends Ze {
    constructor(e) {
        super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), this.input = e, T(this, "definition", {
            type: "number",
            isNullable: !1
        })
    }

    getHash() {
        return fe("ScalarLength", this.input)
    }

    optimize(e) {
        return this.input.optimize(e)
    }

    getOptimized() {
        let e = this.input.getOptimized();
        return new FT(e)
    }

    * evaluate(e, t) {
        let n = yield* this.input.evaluate(e, t);
        return {type: "number", value: Ae.length(n)}
    }
}, jm = class extends Ze {
    constructor(e) {
        super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), this.input = e, T(this, "definition", {
            type: "boolean",
            isNullable: !1
        })
    }

    getHash() {
        return fe("ScalarNot", this.input)
    }

    optimize(e) {
        return this.input.optimize(e)
    }

    getOptimized() {
        let e = this.input.getOptimized();
        return new jm(e)
    }

    * evaluate(e, t) {
        let n = yield* this.input.evaluate(e, t);
        return {type: "boolean", value: !zr(n)}
    }
}, pB = {type: 0}, PT = class extends Ze {
    constructor(e, t) {
        let n = new q;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new q;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, T(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return fe("ScalarNotIn", this.left, this.right)
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return ae.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new PT(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* qe({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: !Ae.in(n, r, pB)}
    }
}, un = class extends Ze {
    constructor(e, t) {
        D(e.name !== Jo, "Invalid field name");
        let n = new q, r = new q;
        t ? r.add(e) : n.add(e), super(n, r, !0), this.field = e, this.isOuterField = t, T(this, "definition"), this.definition = e.definition
    }

    getHash() {
        return fe("ScalarVariable", this.field.id, this.isOuterField)
    }

    optimize() {
        return new ae(0)
    }

    getOptimized() {
        return this
    }

    * evaluate(e, t) {
        return this.isOuterField ? (D(e, "Context must exist"), e.getValue(this.field)) : (D(t, "Tuple must exist"), t.getValue(this.field))
    }
}, mB = class {
    constructor(e) {
        this.memo = e
    }

    finishRelational(e) {
        return this.memo.addRelational(e)
    }

    newRelationalScan(e) {
        let t = new Ou(e);
        return this.finishRelational(t)
    }

    newRelationalIndexLookup(e, t) {
        let n = new Rn(e, t);
        return this.finishRelational(n)
    }

    newRelationalLeftJoin(e, t, n) {
        let r = new Iu(e, t, n);
        return this.finishRelational(r)
    }

    newRelationalRightJoin(e, t, n) {
        return this.newRelationalLeftJoin(t, e, n)
    }

    newRelationalFilter(e, t) {
        if (e instanceof Iu && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let r = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(r, e.right, e.constraint)
        }
        if (e instanceof Sg && t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)) {
            let r = this.newRelationalFilter(e.right, t);
            return this.newRelationalLeftJoin(e.left, r, e.constraint)
        }
        let n = new _u(e, t);
        return this.finishRelational(n)
    }

    newRelationalProject(e, t, n) {
        let r = new Nm(e, t, n);
        return this.finishRelational(r)
    }

    newRelationalLimit(e, t, n) {
        if (e instanceof Nm && t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) && n.providedByFields(e.inputGroup.relational.outputFields)) {
            let i = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(i, e.projections, e.passthrough)
        }
        let r = new wT(e, t, n);
        return this.finishRelational(r)
    }

    newRelationalOffset(e, t, n) {
        let r = new ST(e, t, n);
        return this.finishRelational(r)
    }

    finishScalar(e) {
        if (!(e instanceof jn) && e.isSynchronous && e.referencedFields.size === 0 && e.referencedOuterFields.size === 0) {
            let n = e.evaluateSync();
            return this.newScalarConstant(e.definition, n)
        }
        return this.memo.addScalar(e)
    }

    removeUnknown(e, t) {
        if (e.definition.type !== "unknown" || t.type === "unknown") return e;
        let n = {...t, isNullable: !0};
        return this.newScalarCast(e, n)
    }

    newScalarVariable(e, t) {
        let n = new un(e, t);
        return this.finishScalar(n)
    }

    newScalarConstant(e, t) {
        let n = new jn(e, t);
        return this.finishScalar(n)
    }

    newScalarNot(e) {
        if (e instanceof jm) {
            if (e.input.definition.type === "boolean") return e.input;
            let n = {type: "boolean", isNullable: !0};
            return this.newScalarCast(e.input, n)
        }
        if (e instanceof es) return this.newScalarNotEquals(e.left, e.right);
        if (e instanceof zu) return this.newScalarEquals(e.left, e.right);
        if (e instanceof Au) return this.newScalarGreaterThanOrEqual(e.left, e.right);
        if (e instanceof Du) return this.newScalarGreaterThan(e.left, e.right);
        if (e instanceof Lu) return this.newScalarLessThanOrEqual(e.left, e.right);
        if (e instanceof Vu) return this.newScalarLessThan(e.left, e.right);
        if (e instanceof Mu) {
            let n = this.newScalarNot(e.left), r = this.newScalarNot(e.right);
            return this.newScalarOr(n, r)
        }
        if (e instanceof Bu) {
            let n = this.newScalarNot(e.left), r = this.newScalarNot(e.right);
            return this.newScalarAnd(n, r)
        }
        let t = new jm(e);
        return this.finishScalar(t)
    }

    newScalarAnd(e, t) {
        let n = new Mu(e, t);
        return this.finishScalar(n)
    }

    newScalarOr(e, t) {
        let n = new Bu(e, t);
        return this.finishScalar(n)
    }

    newScalarEquals(e, t) {
        let n = e instanceof un;
        if (t instanceof un && !n) return this.newScalarEquals(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new es(e, t);
        return this.finishScalar(i)
    }

    newScalarNotEquals(e, t) {
        let n = e instanceof un;
        if (t instanceof un && !n) return this.newScalarNotEquals(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new zu(e, t);
        return this.finishScalar(i)
    }

    newScalarLessThan(e, t) {
        let n = e instanceof un;
        if (t instanceof un && !n) return this.newScalarGreaterThan(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Au(e, t);
        return this.finishScalar(i)
    }

    newScalarLessThanOrEqual(e, t) {
        let n = e instanceof un;
        if (t instanceof un && !n) return this.newScalarGreaterThanOrEqual(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Du(e, t);
        return this.finishScalar(i)
    }

    newScalarGreaterThan(e, t) {
        let n = e instanceof un;
        if (t instanceof un && !n) return this.newScalarLessThan(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Lu(e, t);
        return this.finishScalar(i)
    }

    newScalarGreaterThanOrEqual(e, t) {
        let n = e instanceof un;
        if (t instanceof un && !n) return this.newScalarLessThanOrEqual(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Vu(e, t);
        return this.finishScalar(i)
    }

    newScalarIn(e, t) {
        t.definition.type === "array" && (e = this.removeUnknown(e, t.definition.definition));
        let n = {type: "array", isNullable: !0, definition: e.definition};
        t = this.removeUnknown(t, n);
        let r = new RT(e, t);
        return this.finishScalar(r)
    }

    newScalarNotIn(e, t) {
        t.definition.type === "array" && (e = this.removeUnknown(e, t.definition.definition));
        let n = {type: "array", isNullable: !0, definition: e.definition};
        t = this.removeUnknown(t, n);
        let r = new PT(e, t);
        return this.finishScalar(r)
    }

    newScalarCase(e, t, n) {
        if (e) {
            let i = [];
            for (let {when: o, then: s} of t) {
                let a = this.removeUnknown(o, e.definition), l = new wg(a, s);
                i.push(l)
            }
            t = i
        }
        let r = new yT(e, t, n);
        return this.finishScalar(r)
    }

    newScalarContains(e, t) {
        let n = new kg(e, t);
        return this.finishScalar(n)
    }

    newScalarStartsWith(e, t) {
        let n = new Tg(e, t);
        return this.finishScalar(n)
    }

    newScalarEndsWith(e, t) {
        let n = new Cg(e, t);
        return this.finishScalar(n)
    }

    newScalarLength(e) {
        let t = new FT(e);
        return this.finishScalar(t)
    }

    newScalarIndexOf(e, t) {
        let n = new ET(e, t);
        return this.finishScalar(n)
    }

    newScalarArray(e, t, n, r, i) {
        let o = new kT(e, t, n, r, i);
        return this.finishScalar(o)
    }

    newScalarFlatArray(e, t, n, r, i) {
        let o = new TT(e, t, n, r, i);
        return this.finishScalar(o)
    }

    newScalarCast(e, t) {
        if (e.definition.type === t.type) return e;
        let n = new CT(e, t);
        return this.finishScalar(n)
    }
}, _T = class extends _n {
}, IT = class extends _T {
    constructor(e, t) {
        super(!1), this.input = e, this.fields = t, T(this, "inputGroup"), this.inputGroup = e.getGroup()
    }

    getHash() {
        return fe("EnforcerResolve", this.inputGroup.id, this.fields)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering() {
        return !0
    }

    canProvideResolvedFields(e) {
        return e.subsetOf(this.fields)
    }

    getInputRequiredProps(e) {
        let t = new q;
        return new dn(e.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n);
        return ae.estimate(0, 100 * Fu).add(r)
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t);
        return new IT(n, this.fields)
    }

    * evaluate(e) {
        let t = yield* this.input.evaluate(e);
        D(this.fields.subsetOf(t.fields), "Fields can't be resolved");
        let n = new Set;
        for (let i of this.fields) D(i.collection, "Collection required to resolve field"), n.add(i.collection);
        for (let i of t.tuples) for (let o of this.fields) {
            let s = i.getValue(o);
            s?.type === "richtext" && (D(s.value instanceof xg, "Pointer must be wrapped"), s.value.resolve())
        }
        let r = yield Promise.all(Array.from(n).map(async i => {
            let o = [];
            for (let a of t.tuples) {
                let l = a.getPointer(i);
                l && o.push(l)
            }
            let s = await i.data.resolveItems(o);
            return D(s.length === o.length, "Invalid number of items"), [i, s]
        }));
        return t.map(t.fields, i => {
            let o = new dr;
            o.merge(i);
            for (let [s, a] of r) {
                let l = i.getPointer(s);
                if (!l) continue;
                let c = a.shift();
                D(c, "Item not found"), D(c.pointer === l, "Pointer mismatch");
                for (let u of s.fields) {
                    let f = u.getValue(c);
                    o.addValue(u, f)
                }
            }
            return o
        })
    }
}, wm = {type: 0}, OT = class extends _T {
    constructor(e, t) {
        super(e.isSynchronous), this.input = e, this.ordering = t, T(this, "inputGroup"), this.inputGroup = e.getGroup()
    }

    getHash() {
        return fe("EnforcerSort", this.inputGroup.id, this.ordering)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering(e) {
        return e.equals(this.ordering)
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new q(e.resolvedFields);
        for (let {field: r} of this.ordering.fields) r.name !== Jo && (Ge(r.collection) || t.add(r));
        let n = new cr;
        return new dn(n, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n);
        return new ae(0).add(r)
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t);
        return new OT(n, this.ordering)
    }

    * evaluate(e) {
        return (yield* this.input.evaluate(e)).sort((n, r) => {
            for (let {field: i, direction: o} of this.ordering.fields) {
                let s = o === "asc";
                if (i.name === Jo) {
                    let c = i.collection;
                    D(c, "Collection required for sorting");
                    let u = n.getPointer(c);
                    D(u, "Pointer required for sorting");
                    let f = {pointer: u, data: {}}, d = r.getPointer(c);
                    D(d, "Pointer required for sorting");
                    let h = {pointer: d, data: {}}, v = c.data.compareItems(f, h);
                    return s ? v : -v
                }
                let a = n.getValue(i), l = r.getValue(i);
                if (!Ae.equal(a, l, wm)) {
                    if (lr(a) || Ae.lessThan(a, l, wm)) return s ? -1 : 1;
                    if (lr(l) || Ae.greaterThan(a, l, wm)) return s ? 1 : -1;
                    throw new Error("Invalid comparison")
                }
            }
            return 0
        })
    }
};
var gB = class {
    constructor(e, t) {
        this.query = e, this.locale = t, T(this, "memo", new fB), T(this, "normalizer", new mB(this.memo)), T(this, "explorer", new cB(this.normalizer))
    }

    optimize() {
        let t = new iB(this.normalizer, this.query, this.locale).build(), r = t.takeNode().getGroup(),
            i = t.getRequiredProps();
        this.optimizeGroup(r, i);
        let o = r.getOptimized(i), s = t.getNamedFields();
        return [o, s]
    }

    optimizeGroup(e, t) {
        let n = e.getWinner(t);
        if (n.node) return n.cost;
        let r = e.nodes[0];
        D(r, "Normalized node not found"), this.createEnforcer(n, r, t);
        for (let i of e.nodes) {
            if (t.canProvide(i)) {
                let o = i.optimize(this, t);
                n.update(i, o)
            }
            t.isMinimal && this.explorer.explore(i)
        }
        return n.cost
    }

    createEnforcer(e, t, n) {
        if (n.resolvedFields.size > 0) {
            let r = new IT(t, n.resolvedFields), i = r.optimize(this, n);
            e.update(r, i)
        }
        if (n.ordering.length > 0) {
            let r = new OT(t, n.ordering), i = r.optimize(this, n);
            e.update(r, i)
        }
    }
};

function vB(e) {
    return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`
}

function yB(e) {
    return typeof e.value == "string" ? `'${e.value}'` : e.value
}

function bB(e) {
    return `${e.functionName}(${e.arguments.map(t => $t(t)).join(", ")})`
}

function xB(e) {
    let t = "CASE";
    e.value && (t += ` ${$t(e.value)}`);
    for (let n of e.conditions) t += ` WHEN ${$t(n.when)} THEN ${$t(n.then)}`;
    return e.else && (t += ` ELSE ${$t(e.else)}`), t += " END", t
}

function wB(e) {
    let t = $t(e.value);
    return `${e.operator.toUpperCase()} ${t}`
}

function SB(e) {
    let t = $t(e.left), n = $t(e.right), r = e.operator.toUpperCase();
    return `${t} ${r} ${n}`
}

function kB(e) {
    return `CAST(${$t(e.value)} as ${e.dataType})`
}

function $t(e) {
    switch (e.type) {
        case"Identifier":
            return vB(e);
        case"LiteralValue":
            return yB(e);
        case"FunctionCall":
            return bB(e);
        case"Case":
            return xB(e);
        case"UnaryOperation":
            return wB(e);
        case"BinaryOperation":
            return SB(e);
        case"TypeCast":
            return kB(e);
        case"Select":
            return `${MT(e)}`;
        default:
            Ce(e)
    }
}

function CB(e) {
    return bg(e.data) ? "Collection" : e.alias ? `"${e.data.displayName}" AS "${e.alias}"` : `"${e.data.displayName}"`
}

function TB(e) {
    let t = `${Hm(e.left)} LEFT JOIN ${Hm(e.right)}`;
    return e.constraint && (t += ` ON ${$t(e.constraint)}`), t
}

function Hm(e) {
    switch (e.type) {
        case"Collection":
            return CB(e);
        case"LeftJoin":
            return TB(e);
        default:
            Ce(e)
    }
}

function RB(e) {
    let t = "";
    return e.split(/\s+/u).forEach(r => {
        r !== "" && (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r) ? t += `
${r}` : ["AND", "OR"].includes(r) ? t += `
	${r}` : t += ` ${r}`)
    }), t.trim()
}

function MT(e) {
    let t = "";
    return t += `SELECT ${e.select.map(n => {
        let r = $t(n);
        return n.alias ? `${r} AS "${n.alias}"` : r
    }).join(", ")}`, t += ` FROM ${Hm(e.from)}`, e.where && (t += ` WHERE ${$t(e.where)}`), e.orderBy && (t += ` ORDER BY ${e.orderBy.map(n => `${$t(n)} ${n.direction ?? "asc"}`).join(", ")}`), e.limit && (t += ` LIMIT ${$t(e.limit)}`), e.offset && (t += ` OFFSET ${$t(e.offset)}`), RB(t)
}

var EB = z4("query-engine"), FB = class {
    async query(e, t) {
        EB.debug(`Query:
${MT(e)}`);
        let n = new gB(e, t), [r, i] = n.optimize(), o = await r.evaluateAsync(), s = Object.entries(i);
        return await Promise.all(o.tuples.map(async l => {
            let c = await Promise.all(s.map(async ([u, f]) => {
                let d = l.getValue(f), h = await this.resolveValue(d);
                return [u, h]
            }));
            return Object.fromEntries(c)
        }))
    }

    async resolveValue(e) {
        if (e?.type === "richtext") return D(e.value instanceof xg, "Pointer must be wrapped"), e.value.resolve();
        if (e?.type === "array") return Promise.all(e.value.map(async t => this.resolveValue(t)));
        if (e?.type === "object") {
            let t = Object.entries(e.value), n = await Promise.all(t.map(async ([r, i]) => {
                let o = await this.resolveValue(i);
                return [r, o]
            }));
            return Object.fromEntries(n)
        }
        return e?.value ?? null
    }
}, gu = "default", PB = new Set([gu]), vu, _B = class {
    constructor() {
        T(this, "entries", new Map), Jt(this, vu, {})
    }

    set(e, t, n, r) {
        switch (t) {
            case"transformTemplate": {
                D(typeof n == "string", `transformTemplate must be a string, received: ${n}`), this.setHash(e, r, {
                    transformTemplate: n,
                    legacy: !0
                });
                break
            }
            case"initial":
            case"animate": {
                D(typeof n == "object", `${t} must be a valid object, received: ${n}`), this.setHash(e, r, {
                    [t]: n,
                    legacy: !0
                });
                break
            }
            default:
                break
        }
    }

    setHash(e, t = gu, n) {
        let r = this.entries.get(e) ?? {}, i = r[t] ?? {};
        r[t] = n === null ? null : {...i, ...n}, this.entries.set(e, r)
    }

    variantHash(e, t) {
        if (e === t?.primaryVariantId) return gu;
        let n = pe(this, vu)[e];
        if (n) return n;
        let r = t?.variantClassNames[e];
        return r ? pe(this, vu)[e] = iT(r) : gu
    }

    setAll(e, t = PB, n, r) {
        var i;
        if (n === null) {
            for (let c of t) this.setHash(e, this.variantHash(c, r), null);
            return
        }
        let o = Hn(n.transformTemplate) ? (i = n.transformTemplate) == null ? void 0 : i.call(n, {}, OB) : void 0,
            s = n.__framer__presenceInitial ?? n.initial, a = n.__framer__presenceAnimate ?? n.animate,
            l = {initial: ve(s) ? s : void 0, animate: ve(a) ? a : void 0, transformTemplate: ce(o) ? o : void 0};
        for (let c of t) this.setHash(e, this.variantHash(c, r), l)
    }

    clear() {
        this.entries.clear()
    }

    toObject() {
        return Object.fromEntries(this.entries)
    }
};
vu = new WeakMap;
var IB = new _B;

function xU(e) {
    return x.forwardRef(({optimized: t, ...n}, r) => {
        let i = x.useContext(UC), o = x.useContext(yg), s = n[MB];
        return s && !Dr() && IB.setAll(s, o, t ? n : null, i), k(e, {ref: r, ...n})
    })
}

var OB = "__Appear_Animation_Transform__";
var MB = "data-framer-appear-id", wU = "data-framer-appear-animation";

function Sm(e, t) {
    e.forEach(n => clearTimeout(n)), e.clear(), t.forEach(n => n && n("Callback cancelled by variant change")), t.clear()
}

function Q1() {
    return new Set
}

function kU(e) {
    let t = ut(Q1), n = ut(Q1);
    return _C(() => () => Sm(n, t)), x.useEffect(() => () => Sm(n, t), [t, n]), x.useEffect(() => {
        Sm(n, t)
    }, [e, t, n]), x.useRef({
        activeVariantCallback: r => (...i) => new Promise((o, s) => {
            t.add(s), r(...i).then(o)
        }).catch(() => {
        }), delay: async (r, i) => {
            await new Promise(o => n.add(globalThis.setTimeout(() => o(!0), i))), r()
        }
    }).current
}

function LB(e, t, n) {
    return x.useCallback(r => {
        var i, o, s;
        return n ? e ? t ? Object.assign({}, (i = n[e]) == null ? void 0 : i[r], (o = n[t]) == null ? void 0 : o[r]) : ((s = n[e]) == null ? void 0 : s[r]) || {} : {} : {}
    }, [e, t, n])
}

function VB(e) {
    for (let [t, n] of Object.entries(e)) if (ot.matchMedia(n).matches) return t
}

function AB(e) {
    var t;
    let n = [];
    for (let {hash: i, mediaQuery: o} of e) {
        if (!o) continue;
        ot.matchMedia(o).matches && n.push(i)
    }
    if (n.length > 0) return n;
    let r = (t = e[0]) == null ? void 0 : t.hash;
    if (r) return [r]
}

function RU(e, t, n = !0) {
    let r = A(LC), i = Na(), o = !i && Dr(), s = V(o ? VB(t) ?? e : e), a = V(n && r ? e : s.current), l = Yu(),
        c = mb(), u = W(f => {
            if (f !== s.current || f !== a.current) {
                let h = function () {
                    s.current = a.current = f, ht(() => {
                        l()
                    })
                };
                var d = h;
                i ? h() : c(() => {
                    h()
                })
            }
        }, [c, l]);
    return Vm(() => {
        i && u(e)
    }, [e, u]), Vm(() => {
        !n || r !== !0 || u(s.current)
    }, []), $(() => {
        let f = [];
        for (let [d, h] of Object.entries(t)) {
            let v = ot.matchMedia(h), g = b => {
                b.matches && u(d)
            };
            DB(v, g), f.push([v, g])
        }
        return () => f.forEach(([d, h]) => zB(d, h))
    }, [t, u]), [s.current, a.current]
}

function DB(e, t) {
    e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
}

function zB(e, t) {
    e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
}

var BB = "style[data-framer-breakpoint-css]";

function $B(e) {
    setTimeout(e, 1)
}

function EU(e) {
    var t, n, r, i;
    let o = new Set, s = AB(e);
    if (s) for (let l of s) for (let c of document.querySelectorAll(".hidden-" + l)) Z1(c.previousSibling) && o.add(c.previousSibling), (t = c.parentNode) == null || t.removeChild(c);
    (ot.requestIdleCallback ?? $B)(() => {
        var l;
        (l = document.querySelector(BB)) == null || l.remove()
    });
    for (let l of document.querySelectorAll(".ssr-variant:empty")) Z1(l.previousSibling) && o.add(l.previousSibling), (n = l.parentNode) == null || n.removeChild(l);
    for (let l of o) NB(l.nextSibling) && ((r = l.parentNode) == null || r.removeChild(l.nextSibling), (i = l.parentNode) == null || i.removeChild(l))
}

function Z1(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === "$"
}

function NB(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === "/$"
}

function J1(e, t) {
    if (e[t]) return e[t];
    if (!(t in e)) return e.default
}

function jB(e, t) {
    if (qu()) return;
    let r = x.useRef(!0), i = x.useRef(t);
    _C((o, s) => {
        let a = o && !s;
        if (!r.current && a) {
            let l = J1(i.current, e);
            l && l()
        }
        r.current = a
    }, []), x.useEffect(() => {
        if (r.current) {
            let o = J1(i.current, e);
            o && o()
        }
    }, [e])
}

function MU(e) {
    jB("default", {default: e})
}

var HB = "page";

function ek(e) {
    return ve(e) && HB in e && e.page !== void 0
}

var WB = class {
    constructor(e) {
        this.queryEngine = e, T(this, "cache", new Map)
    }

    get(e, t) {
        let n = qB(e, t), r = this.cache.get(n);
        if (r) return r;
        let i = () => this.queryEngine.query(e, t), o = new Ju(i);
        return this.cache.set(n, o), o
    }
}, tk = new WeakMap;

function UB(e) {
    let t = tk.get(e);
    if (t) return t;
    let n = Math.random().toString(16).slice(2);
    return tk.set(e, n), n
}

function GB(e, t) {
    return ve(t) && t.type === "Collection" && B4(t.data) ? UB(t.data) : t
}

function qB(e, t) {
    let n = t?.id ?? "default";
    return JSON.stringify(e, GB) + n
}

function XB(e) {
    throw e
}

var YB = new FB, KB = new WB(YB);

function DU(e) {
    let {activeLocale: t} = Zm(), n = KB.get(e, t), r = n.preload();
    return r && XB(r), n.read()
}

function zU(e, t) {
    let r = Object.entries(e ?? {}).filter(([, i]) => !(Ge(i) || ve(i))).map(([i, o]) => ({
        type: "BinaryOperation",
        operator: "==",
        left: {type: "TypeCast", value: {type: "Identifier", name: i, collection: t}, dataType: "STRING"},
        right: {type: "LiteralValue", value: String(o)}
    }));
    return r.length === 0 ? {type: "LiteralValue", value: !1} : r.reduce((i, o) => ({
        type: "BinaryOperation",
        operator: "and",
        left: i,
        right: o
    }))
}

function nk(e, t) {
    return `${e}-${t}`
}

function QB(e, t) {
    let r = e.indexOf(t) + 1;
    r >= e.length && (r = 0);
    let i = e[r];
    return D(i !== void 0, "nextVariant should be defined"), i
}

function ZB(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n) return n
        }
        return e.default
    }
}

function rk(e, t, n, r, i) {
    let {hover: o, pressed: s, loading: a, error: l} = e || {};
    if (l && i) return "error";
    if (a && r) return "loading";
    if (s && n) return "pressed";
    if (o && t) return "hover"
}

function JB(e, t) {
    let n = t[e];
    return n || `framer-v-${e}`
}

function ik(e, t, n) {
    return e && n.has(e) ? e : t
}

var e$ = Symbol("cycle");

function t$() {
    let e = V(), t = V(), n = W(() => {
        e.current && (document.removeEventListener("visibilitychange", e.current), e.current = void 0, t.current = void 0)
    }, []);
    return $(() => () => {
        n()
    }, [n]), W(r => {
        if (!document.hidden) {
            r(), n();
            return
        }
        if (t.current = r, e.current) return;
        let i = () => {
            var o;
            document.hidden || ((o = t.current) == null || o.call(t), n())
        };
        e.current = i, document.addEventListener("visibilitychange", i)
    }, [n])
}

function jU({
                variant: e,
                defaultVariant: t,
                transitions: n,
                enabledGestures: r,
                cycleOrder: i = [],
                variantProps: o = {},
                variantClassNames: s = {}
            }) {
    let a = Yu(), l = Na(), c = ut(() => new Set(i)), {wrapUpdatesInTransitions: u} = $a(), f = W(z => {
        if (z) {
            ht(() => void a());
            return
        }
        a()
    }, [a]), d = t$(), h = V({
        isHovered: !1,
        isPressed: !1,
        isError: !1,
        hasPressedVariants: !0,
        baseVariant: ik(e, t, c),
        lastVariant: e,
        gestureVariant: void 0,
        loadedBaseVariant: {},
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    }), v = W(z => {
        let {isHovered: B, isPressed: Q, isError: j, enabledGestures: se, defaultVariant: K} = h.current,
            te = ik(z, K, c), X = rk(se?.[te], B, Q, !1, j), G = X ? nk(te, X) : void 0;
        return [te, G]
    }, []), g = W((z, B, Q, j, se = !1, K = !1) => {
        let [te, X] = v(j);
        te === z && X === B || (K && (h.current.isError = !1), h.current.baseVariant = te || Q, h.current.gestureVariant = X, d(() => f(u || se)))
    }, [v, d, u, f]), b = W(({isHovered: z, isPressed: B, isError: Q}) => {
        z !== void 0 && (h.current.isHovered = z), B !== void 0 && (h.current.isPressed = B), Q !== void 0 && (h.current.isError = Q);
        let {baseVariant: j, gestureVariant: se, defaultVariant: K} = h.current;
        g(j, se, K, j, Q)
    }, [g]), p = W(z => {
        let {defaultVariant: B, cycleOrder: Q, baseVariant: j, gestureVariant: se} = h.current,
            K = z === e$ ? QB(Q || [], j || B) : z;
        g(j, se, B, K, !1, !0)
    }, [g]), m = W(() => {
        let {baseVariant: z} = h.current;
        h.current.loadedBaseVariant[z] = !0, d(() => f(!0))
    }, [d, f]);
    if (e !== h.current.lastVariant) {
        let [z, B] = v(e);
        h.current.lastVariant = z, (z !== h.current.baseVariant || B !== h.current.gestureVariant) && (h.current.baseVariant = z, h.current.gestureVariant = B)
    }
    let {
        baseVariant: y,
        gestureVariant: w,
        defaultVariant: C,
        enabledGestures: S,
        isHovered: R,
        isPressed: E,
        isError: I,
        loadedBaseVariant: O
    } = h.current, H = LB(h.current.baseVariant, h.current.gestureVariant, o);
    return oe(() => {
        var z;
        let B = [];
        y !== C && B.push(y);
        let Q = (z = S?.[y]) == null ? void 0 : z.loading, j = !I && !l && !!Q && !O[y], se = j ? nk(y, "loading") : w;
        se && B.push(se);
        let K = S?.[y], te = {onMouseEnter: () => b({isHovered: !0}), onMouseLeave: () => b({isHovered: !1})};
        return K?.pressed && Object.assign(te, {
            onTapStart: () => b({isPressed: !0}),
            onTapCancel: () => b({isPressed: !1}),
            onTap: () => b({isPressed: !1})
        }), {
            variants: B,
            baseVariant: y,
            gestureVariant: se,
            isLoading: j,
            transition: ZB(h.current.transitions, y),
            setVariant: p,
            setGestureState: b,
            clearLoadingGesture: m,
            addVariantProps: H,
            gestureHandlers: te,
            classNames: Cu(JB(y, s), rk(K, R, E, j, I))
        }
    }, [y, w, R, E, O, H, p, C, S, b, m, s])
}

var n$ = /[}{<>&;]/u;

function HU(e) {
    return !ce(e) || n$.test(e) ? "none" : e
}

var r$ = x.createContext(void 0), i$ = () => x.useContext(r$);
var o$ = {
    Arial: {
        Regular: {selector: "Arial", weight: void 0},
        Black: {selector: "Arial-Black", weight: void 0},
        Narrow: {selector: "Arial Narrow", weight: void 0},
        "Rounded Bold": {selector: "Arial Rounded MT Bold", weight: void 0}
    },
    Avenir: {
        Book: {selector: "Avenir", weight: void 0},
        Light: {selector: "Avenir-Light", weight: void 0},
        Medium: {selector: "Avenir-Medium", weight: void 0},
        Heavy: {selector: "Avenir-Heavy", weight: void 0},
        Black: {selector: "Avenir-Black", weight: void 0}
    },
    "Avenir Next": {
        Regular: {selector: "Avenir Next", weight: void 0},
        "Ultra Light": {selector: "AvenirNext-UltraLight", weight: void 0},
        Medium: {selector: "AvenirNext-Medium", weight: void 0},
        "Demi Bold": {selector: "AvenirNext-DemiBold", weight: void 0},
        Heavy: {selector: "AvenirNext-Heavy", weight: void 0}
    },
    "Avenir Next Condensed": {
        Regular: {selector: "Avenir Next Condensed", weight: void 0},
        "Ultra Light": {selector: "AvenirNextCondensed-UltraLight", weight: void 0},
        Medium: {selector: "AvenirNextCondensed-Medium", weight: void 0},
        "Demi Bold": {selector: "AvenirNextCondensed-DemiBold", weight: void 0},
        Heavy: {selector: "AvenirNextCondensed-Heavy", weight: void 0}
    },
    Baskerville: {
        Regular: {selector: "Baskerville", weight: void 0},
        "Semi Bold": {selector: "Baskerville-SemiBold", weight: void 0}
    },
    "Bodoni 72": {
        Book: {selector: "Bodoni 72", weight: void 0},
        Oldstyle: {selector: "Bodoni 72 Oldstyle", weight: void 0},
        Smallcaps: {selector: "Bodoni 72 Smallcaps", weight: void 0}
    },
    Courier: {Regular: {selector: "Courier", weight: void 0}},
    "Courier New": {Regular: {selector: "Courier New", weight: void 0}},
    Futura: {
        Medium: {selector: "Futura", weight: void 0},
        Condensed: {selector: "Futura-CondensedMedium", weight: void 0},
        "Condensed ExtraBold": {selector: "Futura-CondensedExtraBold", weight: void 0}
    },
    Georgia: {Regular: {selector: "Georgia", weight: void 0}},
    "Gill Sans": {
        Regular: {selector: "Gill Sans", weight: void 0},
        Light: {selector: "GillSans-Light", weight: void 0},
        SemiBold: {selector: "GillSans-SemiBold", weight: void 0},
        UltraBold: {selector: "GillSans-UltraBold", weight: void 0}
    },
    Helvetica: {
        Regular: {selector: "Helvetica", weight: void 0},
        Light: {selector: "Helvetica-Light", weight: void 0},
        Bold: {selector: "Helvetica-Bold", weight: void 0},
        Oblique: {selector: "Helvetica-Oblique", weight: void 0},
        "Light Oblique": {selector: "Helvetica-LightOblique", weight: void 0},
        "Bold Oblique": {selector: "Helvetica-BoldOblique", weight: void 0}
    },
    "Helvetica Neue": {
        Regular: {selector: "Helvetica Neue", weight: void 0},
        UltraLight: {selector: "HelveticaNeue-UltraLight", weight: void 0},
        Thin: {selector: "HelveticaNeue-Thin", weight: void 0},
        Light: {selector: "HelveticaNeue-Light", weight: void 0},
        Medium: {selector: "HelveticaNeue-Medium", weight: void 0},
        Bold: {selector: "HelveticaNeue-Bold", weight: void 0},
        Italic: {selector: "HelveticaNeue-Italic", weight: void 0},
        "UltraLight Italic": {selector: "HelveticaNeue-UltraLightItalic", weight: void 0},
        "Thin Italic": {selector: "HelveticaNeue-ThinItalic", weight: void 0},
        "Light Italic": {selector: "HelveticaNeue-LightItalic", weight: void 0},
        "Medium Italic": {selector: "HelveticaNeue-MediumItalic", weight: void 0},
        "Bold Italic": {selector: "HelveticaNeue-BoldItalic", weight: void 0},
        "Condensed Bold": {selector: "HelveticaNeue-CondensedBold", weight: void 0},
        "Condensed Black": {selector: "HelveticaNeue-CondensedBlack", weight: void 0}
    },
    "Hoefler Text": {Regular: {selector: "Hoefler Text", weight: void 0}},
    Impact: {Regular: {selector: "Impact", weight: void 0}},
    "Lucida Grande": {Regular: {selector: "Lucida Grande", weight: void 0}},
    Menlo: {Regular: {selector: "Menlo", weight: void 0}},
    Monaco: {Regular: {selector: "Monaco", weight: void 0}},
    Optima: {
        Regular: {selector: "Optima", weight: void 0},
        ExtraBlack: {selector: "Optima-ExtraBlack", weight: void 0}
    },
    Palatino: {Regular: {selector: "Palatino", weight: void 0}},
    "SF Pro Display": {
        Regular: {selector: "__SF-UI-Display-Regular__", weight: 400},
        Ultralight: {selector: "__SF-UI-Display-Ultralight__", weight: 100},
        Thin: {selector: "__SF-UI-Display-Thin__", weight: 200},
        Light: {selector: "__SF-UI-Display-Light__", weight: 300},
        Medium: {selector: "__SF-UI-Display-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Display-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Display-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Display-Heavy__", weight: 800},
        Black: {selector: "__SF-UI-Display-Black__", weight: 900},
        Italic: {selector: "__SF-UI-Display-Italic__", weight: 400},
        "Ultralight Italic": {selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100},
        "Thin Italic": {selector: "__SF-UI-Display-Thin-Italic__", weight: 200},
        "Light Italic": {selector: "__SF-UI-Display-Light-Italic__", weight: 300},
        "Medium Italic": {selector: "__SF-UI-Display-Medium-Italic__", weight: 500},
        "Semibold Italic": {selector: "__SF-UI-Display-Semibold-Italic__", weight: 600},
        "Bold Italic": {selector: "__SF-UI-Display-Bold-Italic__", weight: 700},
        "Heavy Italic": {selector: "__SF-UI-Display-Heavy-Italic__", weight: 800},
        "Black Italic": {selector: "__SF-UI-Display-Black-Italic__", weight: 900}
    },
    "SF Pro Display Condensed": {
        Regular: {selector: "__SF-UI-Display-Condensed-Regular__", weight: 400},
        Ultralight: {selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100},
        Thin: {selector: "__SF-UI-Display-Condensed-Thin__", weight: 200},
        Light: {selector: "__SF-UI-Display-Condensed-Light__", weight: 300},
        Medium: {selector: "__SF-UI-Display-Condensed-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Display-Condensed-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800},
        Black: {selector: "__SF-UI-Display-Condensed-Black__", weight: 900}
    },
    "SF Pro Text": {
        Regular: {selector: "__SF-UI-Text-Regular__", weight: 400},
        Light: {selector: "__SF-UI-Text-Light__", weight: 200},
        Medium: {selector: "__SF-UI-Text-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Text-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Text-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Text-Heavy__", weight: 800},
        Italic: {selector: "__SF-UI-Text-Italic__", weight: 400},
        "Light Italic": {selector: "__SF-UI-Text-Light-Italic__", weight: 200},
        "Medium Italic": {selector: "__SF-UI-Text-Medium-Italic__", weight: 500},
        "Semibold Italic": {selector: "__SF-UI-Text-Semibold-Italic__", weight: 600},
        "Bold Italic": {selector: "__SF-UI-Text-Bold-Italic__", weight: 700},
        "Heavy Italic": {selector: "__SF-UI-Text-Heavy-Italic__", weight: 800}
    },
    "SF Pro Text Condensed": {
        Regular: {selector: "__SF-UI-Text-Condensed-Regular__", weight: 400},
        Light: {selector: "__SF-UI-Text-Condensed-Light__", weight: 200},
        Medium: {selector: "__SF-UI-Text-Condensed-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Text-Condensed-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800}
    },
    Tahoma: {Regular: {selector: "Tahoma", weight: void 0}},
    Times: {Regular: {selector: "Times", weight: void 0}},
    "Times New Roman": {Regular: {selector: "Times New Roman", weight: void 0}},
    Trebuchet: {Regular: {selector: "Trebuchet MS", weight: void 0}},
    Verdana: {Regular: {selector: "Verdana", weight: void 0}}
}, s$ = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"
}, ok = o$;

function $u(e) {
    return e.weight !== void 0 && e.style !== void 0
}

var a$ = "System Default", l$ = class {
    constructor() {
        T(this, "name", "local"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map), T(this, "fontAliasBySelector", new Map), T(this, "fontAliases", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    createFontFamily(e) {
        let t = {name: e, fonts: [], source: this.name};
        return this.addFontFamily(t), t
    }

    addFontFamily(e) {
        this.fontFamilies.push(e), this.byFamilyName.set(e.name, e)
    }

    importFonts() {
        let e = [];
        for (let r of Object.keys(ok)) {
            let i = ok[r];
            if (!i) continue;
            let o = this.createFontFamily(r);
            for (let s of Object.keys(i)) {
                let a = i[s];
                if (!a) continue;
                let {selector: l, weight: c} = a, u = {variant: s, selector: l, weight: c, family: o};
                o.fonts.push(u)
            }
            e.push(...o.fonts)
        }
        for (let [r, i] of Object.entries(s$)) this.addFontAlias(r, i);
        let {fontFamily: t, aliases: n} = this.getSystemFontFamily();
        this.addFontFamily(t);
        for (let [r, i] of n) this.addFontAlias(r, i);
        return e.push(...t.fonts), e
    }

    addFontAlias(e, t) {
        this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e)
    }

    getSystemFontFamily() {
        let e = "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
            t = {name: a$, fonts: [], source: this.name}, n = new Map,
            r = [400, 100, 200, 300, 500, 600, 700, 800, 900], i = ["normal", "italic"];
        for (let o of i) for (let s of r) {
            let a = c$(s, o), l = `__SystemDefault-${s}-${o}__`,
                c = {variant: a, selector: l, style: o, weight: s, family: t};
            t.fonts.push(c), n.set(l, e)
        }
        return {fontFamily: t, aliases: n}
    }

    getFontAliasBySelector(e) {
        return this.fontAliasBySelector.get(e) || null
    }

    getFontSelectorByAlias(e) {
        return this.fontAliases.get(e) || null
    }

    isFontFamilyAlias(e) {
        return !!(e && /^__.*__$/u.exec(e))
    }
}, sk = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black"
};

function c$(e, t) {
    let n = t === "normal" ? "Regular" : "Italic";
    return e === 400 ? n : t !== "normal" ? `${sk[e]} ${n}` : `${sk[e]}`
}

var u$ = pr(qm(), 1);

function LT(e) {
    return !!e.variationAxes
}

function km(e) {
    return LT(e) && e.family.source !== "custom" ? Wm(e.family.name) : e.family.name
}

function Wm(e) {
    return `${e} Variable`
}

var Yo = "CUSTOM;";

function f$(e, t) {
    if (!t) return e.substring(0, e.lastIndexOf("."));
    let {font: n} = t, r = n.preferredFamily || n.fontFamily, i = Array.isArray(n.variationAxes);
    if (i && r.toLowerCase().includes("variable")) return r;
    let o = i ? "Variable" : (n.preferredSubFamily || n.fontSubFamily).trim();
    return o === "" ? r : `${r} ${o}`
}

var d$ = class {
    constructor() {
        T(this, "name", "custom"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map), T(this, "assetsByFamily", new Map)
    }

    importFonts(e) {
        var t, n, r;
        this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetsByFamily.clear();
        let i = [];
        for (let o of e) {
            if (!this.isValidCustomFontAsset(o)) continue;
            let s = (t = o.properties) == null ? void 0 : t.font.variationAxes, a = Array.isArray(s),
                l = f$(o.name, o.properties), c = this.createFontFamily(l),
                u = (n = o.properties) == null ? void 0 : n.font.openTypeData,
                f = a ? "variable" : this.inferVariantName(l), d = {
                    family: c,
                    selector: `${Yo}${l}`,
                    variant: f,
                    postscriptName: (r = o.properties) == null ? void 0 : r.font.postscriptName,
                    file: o.url,
                    hasOpenTypeFeatures: this.supportsOpenType(u),
                    variationAxes: this.validateVariationAxes(s)
                };
            c.fonts.push(d), c.owner = o.ownerType === "team" ? "team" : "project", this.assetsByFamily.set(l, o), i.push(...c.fonts)
        }
        return i
    }

    isValidCustomFontAsset(e) {
        var t;
        return !e.mimeType.startsWith("font/") || ((t = e.properties) == null ? void 0 : t.kind) !== "font" || !e.properties.font ? !1 : "fontFamily" in e.properties.font
    }

    supportsOpenType(e) {
        return !!(e && Array.isArray(e))
    }

    validateVariationAxes(e) {
        if (!e || !Array.isArray(e)) return;
        let t = [];
        for (let n of e) this.isVariationAxis(n) && t.push({
            tag: n.tag,
            name: n.name,
            minValue: n.minValue,
            maxValue: n.maxValue,
            defaultValue: n.defaultValue
        });
        return t
    }

    getOpenTypeFeatures(e) {
        var t, n;
        let r = this.assetsByFamily.get(e),
            i = (n = (t = r?.properties) == null ? void 0 : t.font) == null ? void 0 : n.openTypeData;
        return this.supportsOpenType(i) ? i?.map(o => {
            if (this.isOpenTypeFeature(o)) return {tag: o.tag, coverage: o.coverage}
        }) : []
    }

    isOpenTypeFeature(e) {
        return !(typeof e != "object" || e === null || !("tag" in e) || typeof e.tag != "string" || "coverage" in e && typeof e.coverage < "u" && !Array.isArray(e.coverage))
    }

    isVariationAxis(e) {
        return !(typeof e != "object" || e === null || !("tag" in e) || typeof e.tag != "string" || !("name" in e) || typeof e.name != "string" || !("minValue" in e) || typeof e.minValue != "number" || !("maxValue" in e) || typeof e.maxValue != "number" || !("defaultValue" in e) || typeof e.defaultValue != "number")
    }

    inferVariantName(e) {
        let t = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"],
            n = [...t.map(s => `${s} italic`), ...t], r = e.toLowerCase(),
            i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
            o = n.find(s => i.includes(s) || i.includes(s.replace(/\s+/gu, "")));
        return o ? o.replace(/^\w|\s\w/gu, s => s.toUpperCase()) : "Regular"
    }

    createFontFamily(e) {
        let t = this.byFamilyName.get(e);
        if (t) return t;
        let n = {source: this.name, name: e, fonts: []};
        return this.addFontFamily(n), n
    }

    addFontFamily(e) {
        this.fontFamilies.push(e), this.byFamilyName.set(e.name, e)
    }

    parseSelector(e) {
        if (!e.startsWith(Yo)) return null;
        let t = e.split(Yo);
        return t[1] === void 0 ? null : {source: "custom", name: t[1]}
    }

    getFontBySelector(e, t = !0) {
        let n = this.parseSelector(e);
        if (!n || !t && !this.byFamilyName.get(n.name)) return;
        let r = this.getFontFamilyByName(n.name).fonts;
        return r.find(o => {
            var s;
            return (s = o.file) == null ? void 0 : s.endsWith(".woff2")
        }) || r[0]
    }

    getFontFamilyByName(e) {
        let t = this.byFamilyName.get(e);
        if (t) return t;
        let n = {source: "custom", name: e, fonts: []};
        return n.fonts.push({selector: `${Yo}${e}`, variant: this.inferVariantName(e), family: n}), n
    }
};

function VT(e, t) {
    return {...h$(e, t), ...p$(e, t)}
}

function h$(e, t) {
    if (t.length === 0) return {variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0};
    let {weight: n, style: r} = e, i = new Map, o = new Map;
    for (let u of t) u.isVariable === e.isVariable && (i.set(`${u.weight}-${u.style}`, u), !(u.weight <= n) && (o.has(u.style) || o.set(u.style, u)));
    let s = o.get(r), a = o.get("italic"), l = e.weight;
    l <= 300 ? (s = i.get(`400-${r}`) ?? s, a = i.get("400-italic") ?? a) : l <= 500 ? (s = i.get(`700-${r}`) ?? s, a = i.get("700-italic") ?? a) : (s = i.get(`900-${r}`) ?? s, a = i.get("900-italic") ?? a);
    let c = i.get(`${n}-italic`);
    return {variantBold: s, variantItalic: c, variantBoldItalic: a}
}

function p$(e, t) {
    if (t.length === 0) return {variantVariable: void 0, variantVariableItalic: void 0};
    let n = new Map;
    for (let r of t) r.isVariable && n.set(`${r.weight}-${r.style}`, r);
    return {
        variantVariable: n.get(`${e.weight}-normal`) ?? n.get("400-normal") ?? void 0,
        variantVariableItalic: n.get(`${e.weight}-italic`) ?? n.get("400-italic") ?? void 0
    }
}

async function AT(e) {
    switch (e) {
        case"google": {
            let t = await import("./google-AYKKG2SQ-YSZHILXF.mjs");
            return t?.default
        }
        case"fontshare": {
            let t = await import("./fontshare-26R7ZKFH-CFACY4KM.mjs");
            return t?.default
        }
        default:
            throw new Error(`Unknown font source: ${e}`)
    }
}

async function Rg(e) {
    switch (e) {
        case"google": {
            let t = await import("./google-SWLQ2TQI-OFTTZGHQ.mjs");
            return t?.default
        }
        case"fontshare": {
            let t = await import("./fontshare-TJDTFQF5-FHUHZIID.mjs");
            return t?.default
        }
        case"framer": {
            let t = await import("./framer-font-O4FG2JPU-OQGDZ5WL.mjs");
            return t?.default
        }
        default:
            throw new Error(`Unknown font source: ${e}`)
    }
}

var m$ = ["display", "sans", "serif", "slab", "handwritten", "script"];

function g$(e) {
    return e.split(",").map(t => t.trim().toLowerCase()).filter(v$)
}

function v$(e) {
    return m$.includes(e)
}

var ka = "FS;", DT = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900
}, zT = Object.keys(DT), y$ = (() => new RegExp(`^(?:${[...zT, "italic", "variable"].join("|")})`, "u"))(), Hi = class {
    constructor() {
        T(this, "name", "fontshare"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    static parseVariant(e) {
        let t = e.toLowerCase().split(" "), n = zT.find(s => t.includes(s)),
            r = e.toLowerCase().includes("italic") ? "italic" : "normal";
        return {weight: n && DT[n] || 400, style: r === "italic" ? r : "normal"}
    }

    parseSelector(e) {
        if (!e.startsWith(ka)) return null;
        let t = e.split("-");
        if (t.length !== 2) return null;
        let [n, r] = t;
        return !n || !r ? null : {
            name: n.replace(ka, ""),
            variant: r,
            source: this.name,
            isVariable: r.toLowerCase().includes("variable")
        }
    }

    static createSelector(e, t) {
        return `${ka}${e}-${t.toLowerCase()}`
    }

    static createMetadataSelector(e) {
        return `${ka}${e}`
    }

    addFontFamily(e) {
        this.fontFamilies.push(e), this.byFamilyName.set(e.name, e)
    }

    async importFonts(e, t) {
        this.fontFamilies.length = 0, this.byFamilyName.clear();
        let n = await AT("fontshare"), r = [];
        for (let i of e) {
            let s = i.font_styles.filter(h => {
                let v = h.name.toLowerCase();
                return !(!y$.exec(v) || v.split(" ").includes("wide"))
            }).map(h => ({
                ...Hi.parseVariant(h.name),
                selector: Hi.createSelector(i.name, h.name),
                isVariable: h.is_variable,
                fontshareVariantName: h.name,
                file: h.file
            })), a = Hi.createMetadataSelector(i.name), l = t?.[a], c = i.name, u = this.getFontFamilyByName(c);
            u || (u = {name: c, fonts: [], source: this.name}, this.addFontFamily(u));
            let f = Hi.createMetadataSelector(i.name), d = n[f];
            for (let h of s) {
                let {
                    variantBold: v,
                    variantBoldItalic: g,
                    variantItalic: b,
                    variantVariable: p,
                    variantVariableItalic: m
                } = VT(h, s), y = {
                    family: u,
                    variant: h.fontshareVariantName.toLowerCase(),
                    selector: h.selector,
                    selectorBold: v?.selector,
                    selectorBoldItalic: g?.selector,
                    selectorItalic: b?.selector,
                    selectorVariable: p?.selector,
                    selectorVariableItalic: m?.selector,
                    weight: h.weight,
                    style: h.style,
                    file: h.file,
                    category: b$(i.category),
                    hasOpenTypeFeatures: d,
                    variationAxes: h.isVariable ? l : void 0
                };
                u.fonts.push(y), r.push(y)
            }
        }
        return r
    }

    async getOpenTypeFeatures(e) {
        let t = await Rg("fontshare"), n = Hi.createMetadataSelector(e);
        return t[n]
    }
};

function b$(e) {
    let t = {
        serif: "serif",
        sans: "sans-serif",
        slab: "slab",
        display: "display",
        handwritten: "handwriting",
        script: "handwriting"
    }, n = g$(e)[0];
    return n && t[n]
}

var x$ = "Inter", ak = "FR;", w$ = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900
}, Nu = class {
    constructor() {
        T(this, "name", "framer"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    addFontFamily(e) {
        let t = {name: e, fonts: [], source: this.name};
        return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t
    }

    static getDraftFontPropertiesBySelector(e) {
        if (!e.startsWith(ak) && !e.startsWith(x$)) return null;
        let t = e.split("-"), [n, r = ""] = t;
        if (!n) return null;
        let i = r.includes("Italic") ? "italic" : "normal", o = r.replace("Italic", ""), s = o && w$[o] || 400;
        return {family: n, style: i, weight: s, source: "framer", variant: void 0, category: "sans-serif"}
    }

    static createMetadataSelector(e) {
        return `${ak}${e}`
    }

    importFonts(e, t) {
        this.fontFamilies.length = 0, this.byFamilyName.clear();
        let n = [];
        return e.forEach(r => {
            let {familyName: i, ...o} = r, s = Nu.createMetadataSelector(r.familyName), a = t?.[s],
                l = this.getFontFamilyByName(i);
            l || (l = this.addFontFamily(i));
            let c = r.selector === r.selectorVariable || r.selector === r.selectorVariableItalic,
                u = {...o, family: l, variationAxes: c ? a : void 0};
            l.fonts.push(u), n.push(u)
        }), n
    }

    async getOpenTypeFeatures(e) {
        let t = await Rg("framer"), n = Nu.createMetadataSelector(e);
        return t[n]
    }
}, Ca = "GF;", Mr = class {
    constructor() {
        T(this, "name", "google"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    static parseVariant(e) {
        if (e === "regular") return {style: "normal", weight: 400};
        let t = /(\d*)(normal|italic)?/u.exec(e);
        if (!t) return {};
        let n = parseInt(t[1] || "400"), r = t[2] === "italic" ? "italic" : "normal";
        return {weight: n, style: r}
    }

    parseSelector(e) {
        if (!e.startsWith(Ca)) return null;
        let t = e.includes("-variable-"), n = t ? e.split("-variable-") : e.split("-");
        if (n.length !== 2) return null;
        let [r, i] = n;
        return !r || !i ? null : {name: r.replace(Ca, ""), variant: i, source: this.name, isVariable: t}
    }

    static createSelector(e, t, n) {
        return `${Ca}${e}-${n ? "variable-" : ""}${t}`
    }

    static createMetadataSelector(e) {
        return `${Ca}${e}`
    }

    addFontFamily(e) {
        let t = {name: e, fonts: [], source: this.name};
        return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t
    }

    async importFonts(e, t, n) {
        var r;
        this.fontFamilies.length = 0, this.byFamilyName.clear();
        let i = await AT("google"), o = [], s = lk(e, l => l.family), a = lk(t, l => l.family);
        for (let l in s) {
            let c = s[l];
            if (!c) continue;
            let u = this.getFontFamilyByName(c.family);
            u || (u = this.addFontFamily(c.family));
            let d = c.variants.map(C => ({
                    ...Mr.parseVariant(C),
                    googleFontsVariantName: C,
                    selector: Mr.createSelector(l, C, !1),
                    isVariable: !1,
                    file: c.files[C]
                })), h = a[l], v = h?.axes ? h.variants.map(C => ({
                    ...Mr.parseVariant(C),
                    googleFontsVariantName: C,
                    selector: Mr.createSelector(l, C, !0),
                    isVariable: !0,
                    file: h.files[C]
                })) : [], g = Mr.createMetadataSelector(c.family), b = n?.[g], p = [...d, ...v], m = p.filter($u),
                y = Mr.createMetadataSelector(l), w = i[y];
            for (let C of p) {
                let {weight: S, style: R, selector: E, googleFontsVariantName: I} = C, O = $u(C) ? VT(C, m) : void 0, {
                    variantBold: H,
                    variantItalic: z,
                    variantBoldItalic: B,
                    variantVariable: Q,
                    variantVariableItalic: j
                } = O ?? {}, se = {
                    family: u,
                    variant: I,
                    selector: E,
                    selectorBold: H?.selector,
                    selectorBoldItalic: B?.selector,
                    selectorItalic: z?.selector,
                    selectorVariable: Q?.selector,
                    selectorVariableItalic: j?.selector,
                    weight: S,
                    style: R,
                    category: S$(c.category),
                    file: (r = C.file) == null ? void 0 : r.replace("http://", "https://"),
                    variationAxes: C.isVariable ? b : void 0,
                    hasOpenTypeFeatures: w
                };
                u.fonts.push(se), o.push(se)
            }
        }
        return o
    }

    async getOpenTypeFeatures(e) {
        let t = await Rg("google"), n = Mr.createMetadataSelector(e);
        return t[n]
    }
};

function S$(e) {
    let t = {
        serif: "serif",
        "sans-serif": "sans-serif",
        display: "display",
        handwriting: "handwriting",
        monospace: "monospace"
    };
    if (e) return t[e]
}

function lk(e, t) {
    return e.reduce((n, r) => (n[t(r)] = r, n), {})
}

var k$ = pr(LM(), 1), ck = 5e3, C$ = 3, BT = class extends Error {
    constructor(e) {
        super(e), this.name = "FontLoadingError"
    }
}, Cm = new Map, Tm = new Map, uk = (e, t) => $T(e, t);

async function $T(e, t, n = 0) {
    let {family: r, url: i, stretch: o, unicodeRange: s, isVariableFont: a} = e, l = a ? e.weight : e.weight || 500,
        c = e.style || "normal", u = `${r}-${c}-${l}-${i}`;
    if (!Cm.has(u) || n > 0) {
        let f = new FontFace(r, `url(${i})`, {
            weight: ce(l) ? l : l?.toString(),
            style: c,
            stretch: o,
            unicodeRange: s
        }), d = f.load().then(() => (t.fonts.add(f), NT(r, c, l))).catch(h => {
            if (h.name !== "NetworkError") throw h;
            if (n < C$) return $T(e, t, n + 1);
            throw new BT(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: c,
                weight: l,
                url: i,
                stretch: o,
                unicodeRange: s
            })}`)
        });
        Cm.set(u, d)
    }
    await Cm.get(u)
}

async function NT(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!Tm.has(r)) {
        let o = new k$.default(e, {style: t, weight: n}).load(null, ck);
        Tm.set(r, o)
    }
    try {
        await Tm.get(r)
    } catch {
        throw new BT(`Failed to check if font is ready (${ck}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}

var fk = {
    "FR;Inter": [{tag: "opsz", minValue: 14, maxValue: 32, defaultValue: 14, name: "Optical size"}, {
        tag: "wght",
        minValue: 100,
        maxValue: 900,
        defaultValue: 400,
        name: "Weight"
    }]
};

function Rm(e) {
    try {
        if (e === "framer") return dk(fk) ? fk : void 0;
        {
            let t = (async () => {
                switch (e) {
                    case"google":
                        return (await import("./google-UJB733SC-K27EZNUT.mjs")).default;
                    case"fontshare":
                        return (await import("./fontshare-5ADQGVKG-ZKF65O56.mjs")).default;
                    default:
                        Ce(e)
                }
            })();
            return dk(t) ? t : void 0
        }
    } catch (t) {
        console.error(t);
        return
    }
}

function dk(e) {
    return ve(e) && Object.values(e).every(R$)
}

function T$(e) {
    return ve(e) && ce(e.tag)
}

function R$(e) {
    return Array.isArray(e) && e.every(T$)
}

var E$ = class {
    constructor() {
        T(this, "enabled", !1), T(this, "bySelector", new Map), T(this, "getGoogleFontsListPromise"), T(this, "getFontshareFontsListPromise"), T(this, "loadedSelectors", new Set), T(this, "local"), T(this, "google"), T(this, "fontshare"), T(this, "framer"), T(this, "custom"), this.local = new l$, this.google = new Mr, this.fontshare = new Hi, this.framer = new Nu, this.custom = new d$, this.bySelector = new Map, this.importLocalFonts()
    }

    addFont(e) {
        this.bySelector.set(e.selector, e)
    }

    getAvailableFonts() {
        return Array.from(this.bySelector.values())
    }

    importLocalFonts() {
        for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e)
    }

    async importGoogleFonts() {
        return this.getGoogleFontsListPromise || (this.getGoogleFontsListPromise = Promise.resolve().then(async () => {
            let {staticFonts: e, variableFonts: t} = await yt.fetchGoogleFontsList(), n = await Rm("google");
            for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
            return {staticFonts: e, variableFonts: t}
        })), this.getGoogleFontsListPromise
    }

    async importFontshareFonts() {
        if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = yt.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise, t = await Rm("fontshare");
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n)
        }
        return this.getFontshareFontsListPromise
    }

    importFramerFonts(e) {
        let t = Rm("framer");
        this.framer.importFonts(e, t).forEach(n => {
            this.addFont(n)
        })
    }

    importCustomFonts(e) {
        this.bySelector.forEach((t, n) => {
            n.startsWith(Yo) && this.bySelector.delete(n)
        });
        for (let t of this.custom.importFonts(e)) this.addFont(t)
    }

    getFontFamily(e) {
        return this[e.source].getFontFamilyByName(e.name)
    }

    getFontBySelector(e, t = !0) {
        if (e) return e.startsWith(Yo) ? this.custom.getFontBySelector(e, t) : this.bySelector.get(e)
    }

    getDraftPropertiesBySelector(e) {
        let t = this.getFontBySelector(e);
        if (t) return {
            style: t.style,
            weight: t.weight,
            variant: t.variant,
            family: km(t),
            source: t.family.source,
            category: t.category
        };
        let n = this.google.parseSelector(e);
        if (n) {
            let o = Mr.parseVariant(n.variant);
            if ($u(o)) {
                let s = n.isVariable ? Wm(n.name) : n.name;
                return {
                    style: o.style,
                    weight: o.weight,
                    variant: n.variant,
                    family: s,
                    source: "google",
                    category: void 0
                }
            }
        }
        let r = this.fontshare.parseSelector(e);
        if (r) {
            let o = Hi.parseVariant(r.variant);
            if ($u(o)) {
                let s = r.isVariable ? Wm(r.name) : r.name;
                return {
                    style: o.style,
                    weight: o.weight,
                    variant: r.variant,
                    family: s,
                    source: "fontshare",
                    category: void 0
                }
            }
        }
        let i = Nu.getDraftFontPropertiesBySelector(e);
        return i || null
    }

    isSelectorLoaded(e) {
        return this.loadedSelectors.has(e)
    }

    async loadFont(e) {
        if (this.isSelectorLoaded(e.selector)) return 0;
        let t = e.family.source, n = LT(e);
        switch (t) {
            case"local":
                return this.loadedSelectors.add(e.selector), 1;
            case"framer":
                if (u$.default.env.NODE_ENV !== "test" && await NT(e.family.name, e.style, e.weight), n) {
                    if (!e.file) return Promise.reject(`Unable to load font: ${e.selector}`);
                    await uk({
                        family: km(e),
                        url: e.file,
                        weight: e.weight,
                        style: e.style,
                        isVariableFont: n
                    }, document)
                }
                return this.loadedSelectors.add(e.selector), 1;
            case"google":
            case"fontshare":
            case"custom":
                return e.file ? (await uk({
                    family: km(e),
                    url: e.file,
                    weight: e.weight,
                    style: e.style,
                    isVariableFont: n
                }, document), this.loadedSelectors.add(e.selector), 1) : Promise.reject(`Unable to load font: ${e.selector}`);
            default:
                Ce(t)
        }
    }

    async loadFontsFromSelectors(e) {
        if (!this.enabled) return [];
        let t = e.some(i => i.startsWith(Ca)), n = e.some(i => i.startsWith(ka));
        if (t || n) {
            try {
                await this.importFontshareFonts()
            } catch (i) {
                Ea("Failed to load Fontshare fonts:", i)
            }
            try {
                await this.importGoogleFonts()
            } catch (i) {
                Ea("Failed to load Google fonts:", i)
            }
        }
        let r = e.map(i => this.bySelector.get(i)).filter(i => !!i);
        return Promise.allSettled(r.map(i => this.loadFont(i)))
    }

    async loadFonts(e) {
        return {newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(r => r.status === "fulfilled" && r.value === 1).length}
    }

    async loadMissingFonts(e, t) {
        let n = e.filter(i => !yu.isSelectorLoaded(i));
        if (n.length === 0) return;
        await yu.loadWebFontsFromSelectors(n), n.every(i => yu.isSelectorLoaded(i)) && t && t()
    }

    async loadWebFontsFromSelectors(e) {
        return this.loadFontsFromSelectors(e)
    }

    get defaultFont() {
        let e = this.getFontBySelector("Inter");
        return D(e, "Can\u2019t find Inter font"), e
    }
}, yu = new E$;
var jT = (e => (e.Padding = "--framer-input-padding", e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left", e.BorderRadiusTopRight = "--framer-input-border-radius-top-right", e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right", e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left", e.BorderColor = "--framer-input-border-color", e.BorderTopWidth = "--framer-input-border-top-width", e.BorderRightWidth = "--framer-input-border-right-width", e.BorderBottomWidth = "--framer-input-border-bottom-width", e.BorderLeftWidth = "--framer-input-border-left-width", e.BorderStyle = "--framer-input-border-style", e.Background = "--framer-input-background", e.FontFamily = "--framer-input-font-family", e.FontWeight = "--framer-input-font-weight", e.FontSize = "--framer-input-font-size", e.FontColor = "--framer-input-font-color", e.FontStyle = "--framer-input-font-style", e.FontLetterSpacing = "--framer-input-font-letter-spacing", e.FontTextAlignment = "--framer-input-font-text-alignment", e.FontLineHeight = "--framer-input-font-line-height", e.FontOpenType = "--framer-input-font-open-type-features", e.PlaceholderColor = "--framer-input-placeholder-color", e.BoxShadow = "--framer-input-box-shadow", e.FocusedBorderColor = "--framer-input-focused-border-color", e.FocusedBorderWidth = "--framer-input-focused-border-width", e.FocusedBorderStyle = "--framer-input-focused-border-style", e.FocusedBackground = "--framer-input-focused-background", e.FocusedBoxShadow = "--framer-input-focused-box-shadow", e.FocusedTransition = "--framer-input-focused-transition", e.BooleanCheckedBackground = "--framer-input-boolean-checked-background", e.BooleanCheckedBorderColor = "--framer-input-boolean-checked-border-color", e.BooleanCheckedBorderWidth = "--framer-input-boolean-checked-border-width", e.BooleanCheckedBorderStyle = "--framer-input-boolean-checked-border-style", e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow", e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition", e.InvalidTextColor = "--framer-input-invalid-text-color", e.IconBackgroundImage = "--framer-input-icon-image", e.IconMaskImage = "--framer-input-icon-mask-image", e.IconColor = "--framer-input-icon-color", e.WrapperHeight = "--framer-input-wrapper-height", e))(jT || {}),
    Ee = jT, hk = "framer-form-input", F$ = "framer-form-input-wrapper";

function P$(e) {
    return typeof e == "number" ? e : e.startsWith("--") ? gt.variable(e) : e === "" ? '""' : e
}

function gt(e, t) {
    let n = " ";
    for (let r in t) {
        let i = t[r];
        n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${P$(i)}; `
    }
    return e + " {" + n + "}"
}

(e => {
    function t(...n) {
        let r = n[n.length - 1], i = r.startsWith("--") ? `var(${r})` : r;
        for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
        return i
    }

    e.variable = t
})(gt || (gt = {}));
var r9 = [gt(`.${hk}`, {
    padding: gt.variable(Ee.Padding),
    background: "transparent",
    fontFamily: gt.variable(Ee.FontFamily),
    fontWeight: gt.variable(Ee.FontWeight),
    fontSize: gt.variable(Ee.FontSize),
    fontStyle: gt.variable(Ee.FontStyle),
    color: gt.variable(Ee.FontColor),
    fontFeatureSettings: gt.variable(Ee.FontOpenType),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: gt.variable(Ee.WrapperHeight, "100%"),
    letterSpacing: gt.variable(Ee.FontLetterSpacing),
    textAlign: gt.variable(Ee.FontTextAlignment),
    lineHeight: gt.variable(Ee.FontLineHeight)
}), gt(`.${hk}:focus-visible`, {outline: "none"})];
var i9 = `var(${Ee.BorderTopWidth}) var(${Ee.BorderRightWidth}) var(${Ee.BorderBottomWidth}) var(${Ee.BorderLeftWidth})`,
    o9 = [`.${F$}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Ee.BorderRadiusTopLeft});
        border-top-right-radius: var(${Ee.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Ee.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Ee.BorderRadiusBottomLeft});
        border-color: var(${Ee.BorderColor});
        border-top-width: var(${Ee.BorderTopWidth});
        border-right-width: var(${Ee.BorderRightWidth});
        border-bottom-width: var(${Ee.BorderBottomWidth});
        border-left-width: var(${Ee.BorderLeftWidth});
        border-style: var(${Ee.BorderStyle});
        transition: var(${Ee.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`];
var Em = 16, s9 = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${Em}px`,
    boxSizing: "content-box",
    padding: gt.variable(Ee.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${Em}px`,
    maskRepeat: "no-repeat",
    maskSize: `${Em}px`,
    backgroundColor: gt.variable(Ee.IconColor)
};
var m9 = x.forwardRef(function (t, n) {
    let {background: r, children: i, alt: o, draggable: s, ...a} = t, l = {...a.style};
    r && delete l.background;
    let c = Da(t.as);
    return ge(c, {...a, style: l, ref: n, children: [r && k(dC, {image: r, alt: o, draggable: s}), i]})
});

function _$(e, t) {
    return e.length === t.length && e.every((n, r) => n === t[r])
}

var I$ = /[^\p{Letter}\p{Number}()]+/gu, O$ = /^-+|-+$/gu;

function M$(e) {
    return e.toLowerCase().replace(I$, "-").replace(O$, "")
}

var L$ = /[&<>'"]/gu,
    V$ = e => e.replace(L$, t => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"})[t] || t),
    A$ = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;

function D$(e, t, n, r) {
    return e.replace(A$, (i, o, s, a, l, c, u) => {
        var f, d;
        if (s.toLowerCase() !== "a") return i;
        let h = l || c, v = pg(h.replace(/&amp;/gu, "&"));
        if (!v || !v.target) return i;
        let g = t(v.target);
        if (!ek(g) || !ek(n)) return i;
        let b = g.path, p = n.path;
        if (!b || !p) return i;
        let m = ` data-framer-page-link-target="${v.target}"`, y = Hu(g, v.element ?? void 0);
        y && (m += ` data-framer-page-link-element="${v.element}"`);
        let w = Oa(h);
        if (!w || ce(w)) return i;
        ZC(n, w, r) && (m += " data-framer-page-link-current");
        let C = b, S = Object.assign({}, r, (f = v.collectionItem) == null ? void 0 : f.pathVariables);
        if (Object.keys(S).length > 0 && (C = C.replace(KC, (R, E) => "" + S[E])), (d = v.collectionItem) != null && d.pathVariables) {
            let R = new URLSearchParams(v.collectionItem.pathVariables);
            m += ` data-framer-page-link-path-variables="${R}"`
        }
        return C = Lk(p, C), o + a + `"${V$(C + (y ? `#${y}` : ""))}"` + m + u
    })
}

var z$ = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, HT = /[&<>"']/gu,
    B$ = (() => new RegExp(HT.source))();

function pk(e) {
    return e && B$.test(e) ? e.replace(HT, t => z$[t] ?? "") : e || ""
}

var mk = "{{ text-placeholder }}", $$ = "rich-text-wrapper", N$ = Oe(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: h,
        top: v,
        bottom: g,
        center: b,
        className: p,
        stylesPresetsClassName: m,
        visible: y = !0,
        opacity: w,
        rotation: C = 0,
        verticalAlignment: S = "top",
        isEditable: R = !1,
        willChangeTransform: E,
        environment: I = ue.current,
        withExternalLayout: O = !1,
        positionSticky: H,
        positionStickyTop: z,
        positionStickyRight: B,
        positionStickyBottom: Q,
        positionStickyLeft: j,
        __htmlStructure: se,
        __fromCanvasComponent: K = !1,
        _forwardedOverrideId: te,
        _forwardedOverrides: X,
        _usesDOMRect: G,
        children: de,
        ...me
    } = t, le = Va(), ee = za(t), Fe = V(null), Te = n ?? Fe, {navigate: De, getRoute: Pe} = Ki(), In = ts();
    HM(t.preload ?? []), Ku(t, Te);
    let ft = A(ns), Wn = Na(), he = a, Qt = te ?? r;
    if (Qt && X) {
        let Je = X[Qt];
        typeof Je == "string" && (he = Je)
    }
    let dt = "";
    if (he) {
        let Je = pk(he);
        dt = se ? se.replace(mk, Je) : `<p>${Je}</p>`
    } else if (o) dt = o; else if (l) {
        let Je = pk(l);
        dt = se ? se.replace(mk, Je) : `<p>${Je}</p>`
    } else s && (dt = s);
    let hn = QC(), ja = oe(() => Wn || !Pe || !In ? dt : D$(dt, Pe, In, hn), [Wn, dt, Pe, In, hn]);
    if ($(() => {
        let Je = Te.current;
        if (Je === null) return;

        function hr(Zt) {
            let vi = hg(Zt.target, Te.current);
            if (Zt.metaKey || !De || !vi || vi.getAttribute("target") === "_blank") return;
            H5(De, vi, hn) && Zt.preventDefault()
        }

        return Je.addEventListener("click", hr), () => {
            Je.removeEventListener("click", hr)
        }
    }, [De, hn]), UT(c, K, Te), et(() => {
        Aa()
    }, []), !y) return null;
    let P = R && I() === ue.canvas, _ = {
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: WT(S),
            opacity: P ? 0 : w,
            flexShrink: 0
        }, L = ue.hasRestrictions(), Y = Fa(t, le || 0, !1), ye = G && (u === "auto" || f === "auto"),
        bt = !!t.transformTemplate || !Y || !L || K || ye ? t.transformTemplate ?? Xu(b) : void 0;
    if (!O) {
        if (Y && L && !ye) {
            let Je = nt.getNumber(C).toFixed(4);
            _.transform = `translate(${Y.x}px, ${Y.y}px) rotate(${Je}deg)`, _.width = Y.width, _.minWidth = Y.width, _.height = Y.height
        } else _.left = d, _.right = h, _.top = v, _.bottom = g, _.width = u, _.height = f, _.rotate = C;
        H ? (!Wn || ft) && (_.position = "sticky", _.willChange = "transform", _.zIndex = 1, _.top = z, _.right = B, _.bottom = Q, _.left = j) : Wn && (t.positionFixed || t.positionAbsolute) && (_.position = "absolute")
    }
    return cg(t, _), EC(t, _), E && sg(_), Object.assign(_, t.style), k(tn.div, {
        id: r,
        ref: Te, ...me,
        style: _,
        layoutId: ee,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": b,
        className: Cu(p, m, $$),
        transformTemplate: bt,
        dangerouslySetInnerHTML: {__html: ja}
    })
});

function WT(e) {
    switch (e) {
        case"top":
            return "flex-start";
        case"center":
            return "center";
        case"bottom":
            return "flex-end"
    }
}

function UT(e, t, n) {
    let r = V([]);
    _$(r.current, e) || (r.current = e, yu.loadFonts(e).then(({newlyLoadedFontCount: i}) => {
        !t || !n.current || ue.current() !== ue.canvas || i > 0 && DD(n.current)
    }))
}

function Um() {
    return {current: null}
}

async function GT(e, t) {
    let n = e.current;
    if (n) return n;
    let r, i = new Promise((o, s) => {
        r = o, t.signal.addEventListener("abort", () => s())
    });
    return Object.defineProperty(e, "current", {
        get() {
            return n
        }, set(o) {
            if (n = o, o === null) {
                t.abort();
                return
            }
            r(o)
        }, configurable: !0
    }), i
}

var qT = {opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0, filter: "none"};

function j$(e) {
    return e in qT
}

function H$(e) {
    let t = {};
    for (let n in e) {
        if (!j$(n)) continue;
        let r = e[n], i = qT[n];
        Ge(r) || Ge(i) || (t[n] = [r, i])
    }
    return t
}

var W$ = /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu;

function U$(e, t = "character", n, r) {
    switch (t) {
        case"character":
        case"line": {
            let i = e.split(" "), o = i.length - 1;
            return i.map((s, a) => {
                var l;
                let c = a === o, u = s.length <= 12;
                return ge(gn, {
                    children: [k("span", {
                        style: {whiteSpace: u ? "nowrap" : "unset"},
                        children: (l = s.match(W$)) == null ? void 0 : l.map((f, d) => {
                            let h = Um();
                            return n.add(h), k("span", {ref: h, style: r, children: f}, f + d)
                        })
                    }), c ? null : " "]
                }, s + a + c)
            })
        }
        case"word": {
            let i = e.split(" "), o = i.length - 1;
            return i.map((s, a) => {
                let l = a === o, c = Um();
                return n.add(c), ge(gn, {
                    children: [k("span", {
                        ref: c,
                        style: r,
                        children: s
                    }), l ? null : " "]
                }, s + a + l)
            })
        }
        case"element":
        default:
            return e
    }
}

function G$(e) {
    let t = e.type;
    switch (t) {
        case"appear":
            return e.tokenization ?? "character";
        default:
            Ce(t)
    }
}

function gk(e) {
    let t = [];
    return Ue(e.x) && t.push(`translateX(${e.x}px)`), Ue(e.y) && t.push(`translateY(${e.y}px)`), Ue(e.scale) && t.push(`scale(${e.scale})`), Ue(e.rotate) && t.push(`rotate(${e.rotate}deg)`), Ue(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`), Ue(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`), Ue(e.skewX) && t.push(`skewX(${e.skewX}deg)`), Ue(e.skewY) && t.push(`skewY(${e.skewY}deg)`), t.join(" ")
}

function q$(e, t, n) {
    if (!n || !n.effect) return;
    let r = n.type;
    switch (r) {
        case"appear":
            switch (n.tokenization) {
                case"element":
                    return !e || !t ? void 0 : {
                        opacity: n.effect.opacity,
                        filter: n.effect.filter,
                        transform: gk(n.effect)
                    };
                case"line":
                case"word":
                case"character":
                default:
                    return !e || !t ? {display: "inline-block"} : {
                        display: "inline-block",
                        opacity: n.effect.opacity,
                        filter: n.effect.filter,
                        transform: gk(n.effect)
                    }
            }
        default:
            Ce(r)
    }
}

function X$(e, t, n) {
    let r = ut(() => new Set), i = qu(), o = n || !i,
        s = V({hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e});
    s.current.effect = e;
    let a = e?.trigger ?? "onMount", l = e?.target, c = e?.threshold;
    $(() => {
        if (!o || n) return;
        s.current.hasMounted = !0;

        function d() {
            let {effect: h} = s.current;
            if (!o || !h || h?.repeat !== !0 && s.current.hasAnimatedOnce || h?.type === "appear" && s.current.isAnimating) return;
            Object.assign(s.current, {hasAnimatedOnce: !0, isAnimating: !0});
            let v = h.type;
            switch (v) {
                case"appear": {
                    let {transition: g, startDelay: b, repeat: p, tokenization: m} = h, y = {current: void 0};
                    return vk(m, h.effect, r, g, b, p, () => {
                        Object.assign(s.current, {isAnimating: !1})
                    }, y), () => {
                        var w;
                        return (w = y.current) == null ? void 0 : w.call(y)
                    }
                }
                default:
                    Ce(v)
            }
        }

        switch (a) {
            case"onMount":
                d();
                return;
            case"onInView": {
                let h = t?.current;
                return h ? El(h, d, {amount: c ?? 0}) : void 0
            }
            case"onScrollTarget": {
                let h = l?.ref.current;
                return h ? El(h, d, {
                    amount: c ?? 0,
                    root: document,
                    margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0
                }) : void 0
            }
            default:
                Ce(a)
        }
    }, [o, r, n, t, l, c, a]);
    let u = !!e, f = e ? G$(e) : void 0;
    return oe(() => ({
        getTokenizer: () => {
            if (r.clear(), !u) return;
            let {hasMounted: d, hasAnimatedOnce: h, effect: v} = s.current,
                g = q$(o, n || Y$(d, h, v), s.current.effect);
            return {
                text: b => U$(b, f, r, g), props: b => {
                    if (v?.tokenization !== "element") return;
                    let p = Um();
                    return r.add(p), {ref: p, style: {...b, ...g}}
                }
            }
        }, play: () => {
            let {effect: d} = s.current;
            if (!d) return;
            let h = d.type;
            switch (h) {
                case"appear": {
                    let {transition: v, startDelay: g} = d;
                    vk(f, d.effect, r, v, g);
                    break
                }
                default:
                    Ce(h)
            }
        }
    }), [o, u, r, n, f])
}

function Y$(e, t, n) {
    return !(e && n?.trigger === "onMount" || t && !n?.repeat && (n?.trigger === "onInView" || n?.trigger === "onScrollTarget"))
}

async function vk(e = "character", t, n, r, i = 0, o = !1, s, a) {
    let l = H$(t), c = new AbortController;
    switch (a && (a.current = () => c.abort()), e) {
        case"character":
        case"element":
        case"word": {
            let u = await K$(n, c);
            if (u === null || (Mn(u, l, {
                ...r,
                restDelta: .001,
                delay: Hd(r?.delay ?? 0, {startDelay: i})
            }).then(() => s?.()), !o || !a)) return;
            a.current = () => void Mn(u, t, {...r, restDelta: .001, delay: Hd(r?.delay ?? 0, {startDelay: i})});
            return
        }
        case"line": {
            try {
                for (let f of n) await GT(f, c)
            } catch {
                return
            }
            let u;
            if (Z.read(() => {
                u = Q$(n), u.length !== 0 && Z.update(() => {
                    let f = u.map((d, h) => Mn(d, l, {...r, restDelta: .001, delay: i + h * (r?.delay ?? 0)}));
                    Promise.all(f).then(() => s?.())
                })
            }), !o || !a) return;
            a.current = () => {
                u.length !== 0 && u.forEach((f, d) => {
                    Mn(f, t, {...r, restDelta: .001, delay: i + d * (r?.delay ?? 0)})
                })
            };
            return
        }
        default:
            Ce(e)
    }
}

async function K$(e, t) {
    if (e.size === 0) return null;
    let n = [];
    for (let r of e) try {
        let i = await GT(r, t);
        i && n.push(i)
    } catch {
        return null
    }
    return n
}

function Q$(e) {
    let t = [], n = [], r = null;
    for (let i of e) {
        if (!i.current) continue;
        let o = i.current.offsetTop, s = i.current.offsetHeight;
        !s || r === null || o === r ? n.push(i.current) : (t.push(n), n = [i.current]), s && (r = o)
    }
    return t.push(n), t
}

var yk = Oe(({viewBoxScale: e, viewBox: t, children: n, ...r}, i) => k(tn.svg, {
    ref: i, ...r,
    viewBox: t,
    children: k(tn.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: {overflow: "visible", transformOrigin: "center center"},
        children: n
    })
})), Z$ = Oe((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = ue.current,
        fonts: d = [],
        height: h,
        isEditable: v = !1,
        left: g,
        name: b,
        opacity: p,
        positionSticky: m,
        positionStickyBottom: y,
        positionStickyLeft: w,
        positionStickyRight: C,
        positionStickyTop: S,
        right: R,
        rotation: E = 0,
        style: I,
        _initialStyle: O,
        stylesPresetsClassNames: H,
        text: z,
        top: B,
        verticalAlignment: Q = "top",
        visible: j = !0,
        width: se,
        willChangeTransform: K,
        withExternalLayout: te = !1,
        viewBox: X,
        viewBoxScale: G = 1,
        effect: de,
        ...me
    } = e, le = Va(), ee = Na(), Fe = A(ns), Te = za(e), De = V(null), Pe = t ?? De;
    Ku(e, Pe), UT(d, n, Pe), et(() => {
        Aa()
    }, []);
    let In = X$(de, Pe), ft = oe(() => {
        if (u) return XT(u, H, z, s, void 0, In.getTokenizer())
    }, [u, H, z, s, In]);
    if (!j) return null;
    let Wn = v && f() === ue.canvas, he = {
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: WT(Q),
            opacity: Wn ? 0 : p,
            flexShrink: 0
        }, Qt = ue.hasRestrictions(), dt = Fa(e, le || 0, !1), hn = o && (se === "auto" || h === "auto"),
        P = !!e.transformTemplate || !dt || !Qt || n || hn ? e.transformTemplate ?? Xu(c) : void 0;
    te || (dt && Qt && !hn ? (he.x = dt.x, he.y = dt.y, he.rotate = nt.getNumber(E), he.width = dt.width, he.minWidth = dt.width, he.height = dt.height) : (he.left = g, he.right = R, he.top = B, he.bottom = l, he.width = se, he.height = h, he.rotate = E), m ? (!ee || Fe) && (he.position = "sticky", he.willChange = "transform", he.zIndex = 1, he.top = S, he.right = C, he.bottom = y, he.left = w) : ee && (e.positionFixed || e.positionAbsolute) && (he.position = "absolute")), cg(e, he), EC(e, he), K && sg(he), Object.assign(he, O, I), Te && (me.layout = "preserve-aspect");
    let _ = Da(e.as);
    return ce(e.viewBox) ? e.as !== void 0 ? k(_, {
        ...me,
        ref: Pe,
        style: he,
        layoutId: Te,
        transformTemplate: P,
        "data-framer-name": me["data-framer-name"] ?? b,
        "data-framer-component-type": "RichTextContainer",
        children: k(yk, {viewBox: X, viewBoxScale: G, style: {width: "100%", height: "100%"}, children: ft})
    }) : k(yk, {
        ...me,
        ref: Pe,
        style: he,
        layoutId: Te,
        viewBox: X,
        viewBoxScale: G,
        transformTemplate: P,
        "data-framer-name": me["data-framer-name"] ?? b,
        "data-framer-component-type": "RichTextContainer",
        children: ft
    }) : k(_, {
        ...me,
        ref: Pe,
        style: he,
        layoutId: Te,
        transformTemplate: P,
        "data-framer-name": me["data-framer-name"] ?? b,
        "data-framer-component-type": "RichTextContainer",
        children: ft
    })
});

function J$(e) {
    return e.type === gn
}

function eN(e) {
    return e.type === "br"
}

function XT(e, t, n, r, i = {}, o, s = J$(e) ? -1 : 0) {
    let a = mn.toArray(e.props.children);
    ce(n) && (a = a.slice(0, 1));
    let l = !0;
    a = a.map(f => {
        if ((!Vt(f) || !eN(f)) && (l = !1), Vt(f)) return XT(f, t, n, r, i, o, s + 1);
        let d = ce(n) ? n : f;
        return ce(d) && o ? o.text(d) : d
    });
    let {["data-preset-tag"]: c, ...u} = e.props;
    if (ce(e.type) || Fl(e.type)) {
        let f = Nd(e.type) || e.type, d = c || f, h = ce(d) ? t?.[d] : void 0;
        u.className = Cu("framer-text", u.className, h), o && s === 0 && !l && Object.assign(u, o.props(u.style));
        let v = f === "h1" || f === "h2" || f === "h3" || f === "h4" || f === "h5" || f === "h6", g = t?.anchor;
        if (v && g) {
            let b = tN(a, i);
            u.id = b;
            let p = Cu("framer-text", g), m = k("a", {href: `#${b}`, className: p, children: a});
            u.style = {...u.style ?? {}, scrollMarginTop: r}, a = [m]
        }
    }
    return gr(e, u, ...a)
}

function tN(e, t) {
    let n = e.map(Gm).join(""), r = M$(n), i = t[r] ?? 0;
    return i > 0 && (r += `-${i}`), t[r] = i + 1, r
}

function Gm(e) {
    return ce(e) || Ue(e) ? e.toString() : Vt(e) ? Gm(e.props.children) : Array.isArray(e) ? e.map(Gm).join("") : ""
}

var w9 = Oe(({children: e, html: t, htmlFromDesign: n, ...r}, i) => {
    let o = t || e || n;
    if (ce(o)) {
        !r.stylesPresetsClassName && ve(r.stylesPresetsClassNames) && (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(" "));
        let s = {[ce(t) ? "html" : "htmlFromDesign"]: o};
        return k(N$, {...r, ...s, ref: i})
    }
    if (!r.stylesPresetsClassNames && ce(r.stylesPresetsClassName)) {
        let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
        s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`) : r.stylesPresetsClassNames = {
            h1: s,
            h2: a,
            h3: l,
            p: c,
            a: u
        }
    }
    return k(Z$, {...r, ref: i, children: Vt(o) ? o : void 0})
});

function nN(e) {
    var t, n;
    let r = e * Math.PI / 180, i = {x: -Math.sin(r) * 100, y: Math.cos(r) * 100}, o = Qe(i.x, i.y),
        s = En(Qe(.5, .5), o), a = re.points({x: 0, y: 0, width: 1, height: 1}),
        l = a.map(g => ({point: g, distance: Qe.distance(o, g)})).sort((g, b) => g.distance - b.distance),
        c = (t = l[0]) == null ? void 0 : t.point, u = (n = l[1]) == null ? void 0 : n.point;
    D(c && u, "linearGradientLine: Must have 2 closest points.");
    let [f, d] = a.filter(g => !Qe.isEqual(g, c) && !Qe.isEqual(g, u));
    D(f && d, "linearGradientLine: Must have 2 opposing points.");
    let h = En.intersection(s, En(c, u)), v = En.intersection(s, En(f, d));
    return D(h && v, "linearGradientLine: Must have a start and end point."), En(h, v)
}

function rN(e, t) {
    var n, r;
    let i = nN(e.angle), o = Ba(e), s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
        a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1, l = En.pointAtPercentDistance(i, s),
        c = En.pointAtPercentDistance(i, a), u = ho([s, a], [0, 1]);
    return {
        id: `id${t}g${Pa.hash(e)}`,
        x1: l.x,
        y1: l.y,
        x2: c.x,
        y2: c.y,
        stops: o.map(f => ({color: f.value, alpha: ag.getAlpha(f.value) * e.alpha, position: u(f.position)}))
    }
}

function iN(e, t) {
    return {
        id: `id${t}g${_a.hash(e)}`,
        widthFactor: e.widthFactor,
        heightFactor: e.heightFactor,
        centerAnchorX: e.centerAnchorX,
        centerAnchorY: e.centerAnchorY,
        stops: Ba(e).map(n => ({color: n.value, alpha: ag.getAlpha(n.value) * e.alpha, position: n.position}))
    }
}

function YT(e) {
    if (!ce(e) || e.charAt(e.length - 1) !== "%") return !1;
    let n = e.slice(0, -1), r = parseFloat(n);
    return Ue(r)
}

function KT(e) {
    let t = e.slice(0, -1), n = parseFloat(t);
    return Ue(n) ? n : 50
}

function bk(e) {
    return YT(e) ? KT(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : .5
}

function xk(e) {
    return YT(e) ? KT(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : .5
}

function oN(e, t, n, r) {
    if (e = nt.get(e, "#09F"), !Wi.isImageObject(e) || !e.pixelWidth || !e.pixelHeight) return;
    let i = e.pixelWidth, o = e.pixelHeight, s, {fit: a} = e, l = 1, c = 1, u = 0, f = 0;
    if (a === "fill" || a === "fit" || a === "tile" || !a) {
        let h = 1, v = 1, g = i / o, b = t.height * g, p = t.width / g, m = b / t.width, y = p / t.height;
        if (a === "tile") {
            e.backgroundSize ??= 1, l = Math.round(e.backgroundSize * (i / 2)), c = Math.round(e.backgroundSize * (o / 2));
            let w = t.x ?? 0, C = t.y ?? 0, S = 0, R = 0;
            r && (S = w, R = C), u = (t.width - l) * bk(e.positionX) + S, f = (t.height - c) * xk(e.positionY) + R, s = `translate(${u + w}, ${f + C})`
        } else (a === "fill" || !a ? y > m : y < m) ? (v = y, f = (1 - y) * xk(e.positionY)) : (h = m, u = (1 - m) * bk(e.positionX)), s = `translate(${u}, ${f}) scale(${h}, ${v})`
    }
    return {id: `id${n}g-fillImage`, path: e.src ?? "", transform: s, width: l, height: c, offsetX: u, offsetY: f}
}

var sN = "framer/asset-reference,";

function aN(e) {
    return e.startsWith(`data:${sN}`)
}

function lN(e, t) {
    if (/^\w+:/u.test(e) && !aN(e)) return e;
    typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;
    let n = ue.current() === ue.export;
    return yt.assetResolver(e, {pixelSize: t, isExport: n}) ?? ""
}

var cN = ({id: e, path: t, transform: n, repeat: r, width: i, height: o, offsetX: s, offsetY: a}) => {
    let l = lN(t);
    return k("pattern", {
        id: e,
        width: r ? i : "100%",
        height: r ? o : "100%",
        patternContentUnits: r ? void 0 : "objectBoundingBox",
        patternUnits: r ? "userSpaceOnUse" : void 0,
        x: r ? s : void 0,
        y: r ? a : void 0,
        children: k("image", {
            width: r ? i : 1,
            height: r ? o : 1,
            href: l,
            preserveAspectRatio: "none",
            transform: r ? void 0 : n,
            x: r ? 0 : void 0,
            y: r ? 0 : void 0
        }, l)
    })
};
var wk, uN = (() => !TD() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function")();

function fN(e, t) {
    return uN && !t ? Document.parseHTMLUnsafe(e) : (wk ??= new DOMParser, wk.parseFromString(e, t ?? "text/html"))
}

var Sk = Dr(), dN = class {
        constructor(e, t, n, r, i = 0) {
            this.id = e, this.svg = t, this.innerHTML = n, this.viewBox = r, this.count = i
        }
    }, kk = "position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict",
    hN = class {
        constructor() {
            T(this, "entries", new Map)
        }

        debugGetEntries() {
            return this.entries
        }

        subscribe(e, t, n) {
            if (!e || e === "") return "";
            let r = this.entries.get(e);
            if (!r) {
                n || (n = `svg${String(bC(e))}_${String(e.length)}`);
                let i = e, o, s = pN(e);
                s && (t && mN(s, n), s.id = n, o = bN(s), s.removeAttribute("xmlns"), s.removeAttribute("xlink"), s.removeAttribute("xmlns:xlink"), i = s.outerHTML), r = this.createDOMElementFor(i, n, o), this.entries.set(e, r)
            }
            return r.count += 1, r.innerHTML
        }

        getViewBox(e) {
            if (!e || e === "") return;
            let t = this.entries.get(e);
            return t?.viewBox
        }

        unsubscribe(e) {
            if (!e || e === "") return;
            let t = this.entries.get(e);
            t && (t.count -= 1, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3))
        }

        maybeRemoveEntry(e) {
            let t = this.entries.get(e);
            t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)))
        }

        removeDOMElement(e) {
            if (Sk) {
                let t = document?.getElementById(e.id);
                t?.remove()
            }
        }

        createDOMElementFor(e, t, n) {
            if (Sk) {
                let s = document.getElementById("svg-templates");
                if (s || (s = document.createElement("div"), s.id = "svg-templates", s.ariaHidden = "true", s.style.cssText = kk, document.body.appendChild(s)), !document.getElementById(t)) {
                    let a = document.createElement("div");
                    a.innerHTML = e;
                    let l = a.firstElementChild;
                    l && (l.id = t, s.appendChild(l))
                }
            }
            let r = n ? `0 0 ${n.width} ${n.height}` : void 0,
                o = `<svg style="width:100%;height:100%"${r ? ` viewBox="${r}"` : ""}><use href="#${t}"/></svg>`;
            return new dN(t, e, o, r)
        }

        clear() {
            this.entries.clear()
        }

        generateTemplates() {
            let e = [];
            return e.push(`<div id="svg-templates" style="${kk}" aria-hidden="true">`), this.entries.forEach(t => e.push(t.svg)), e.push("</div>"), e.join(`
`)
        }
    }, qo = new hN;

function pN(e) {
    try {
        let n = fN(e).getElementsByTagName("svg")[0];
        if (!n) throw Error("no svg element found");
        return n
    } catch {
        return
    }
}

function mN(e, t) {
    let n = gN(t);
    QT(e, n)
}

function gN(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "")
}

function QT(e, t) {
    vN(e, t), Array.from(e.children).forEach(r => {
        QT(r, t)
    })
}

function vN(e, t) {
    e.getAttributeNames().forEach(r => {
        let i = e.getAttribute(r);
        if (!i) return;
        if (r === "id" && e.setAttribute(r, `${t}_${i}`), r === "href" || r === "xlink:href") {
            let [s, a] = i.split("#");
            if (s) return;
            e.setAttribute(r, `#${t}_${a}`);
            return
        }
        let o = "url(#";
        if (i.includes(o)) {
            let s = i.replace(o, `${o}${t}_`);
            e.setAttribute(r, s)
        }
    })
}

var yN = (() => ({
    cm: 96 / 2.54,
    mm: 96 / 2.54 / 10,
    Q: 96 / 2.54 / 40,
    in: 96,
    pc: 96 / 6,
    pt: 96 / 72,
    px: 1,
    em: 16,
    ex: 8,
    ch: 8,
    rem: 16
}))();

function Ck(e) {
    var t;
    if (!e) return;
    let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
    if (!(n?.[1] === void 0 || n?.[2] === void 0) && !((t = n[2]) != null && t.startsWith("%"))) return Math.round(parseFloat(n[1]) * (yN[n[2]] || 1))
}

function bN(e) {
    let t = Ck(e.getAttribute("width")), n = Ck(e.getAttribute("height"));
    if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0)) return {width: t, height: n}
}

function T9(e) {
    let t = Va(), n = za(e), r = x.useRef(null), i = i$();
    return Ku(e, r), k(TN, {...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i})
}

var xN = 5e4;

function wN(e) {
    return e.indexOf("image") >= 0
}

function SN(e) {
    return e.indexOf("var(--") >= 0
}

function kN(e) {
    return !!(e.borderRadius || e.borderBottomLeftRadius || e.borderBottomRightRadius || e.borderTopLeftRadius || e.borderTopRightRadius)
}

function Tk(e, t) {
    var n, r;
    let i = e.current;
    if (!i) return;
    let o = t.providedWindow ?? ot, s = i.firstElementChild;
    if (!s || !(s instanceof o.SVGSVGElement)) return;
    if (!s.getAttribute("viewBox")) {
        let h = qo.getViewBox(t.svg);
        h && s.setAttribute("viewBox", h)
    }
    let {withExternalLayout: a, parentSize: l} = t;
    if (!a && La(t) && l !== 1 && l !== 2) return;
    let {intrinsicWidth: u, intrinsicHeight: f, _constraints: d} = t;
    ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 && ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 && ie(u) && ie(f) && s.setAttribute("viewBox", `0 0 ${u} ${f}`), d && d.aspectRatio ? s.setAttribute("preserveAspectRatio", "") : s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%")
}

function CN() {
    return x.useInsertionEffect(() => {
        Aa()
    }, []), null
}

var TN = (() => {
    var e;
    return e = class extends fu {
        constructor() {
            super(...arguments), T(this, "container", x.createRef()), T(this, "svgElement", null), T(this, "setSVGElement", t => {
                this.svgElement = t, this.setLayerElement(t)
            }), T(this, "previouslyRenderedSVG", ""), T(this, "unmountedSVG", "")
        }

        static frame(t) {
            return Fa(t, t.parentSize || 0)
        }

        get frame() {
            return Fa(this.props, this.props.parentSize || 0)
        }

        componentDidMount() {
            if (this.unmountedSVG) {
                let {svgContentId: t} = this.props, n = t ? `svg${t}` : null;
                qo.subscribe(this.unmountedSVG, !t, n), this.previouslyRenderedSVG = this.unmountedSVG
            }
            this.props.svgContentId || Tk(this.container, this.props)
        }

        componentWillUnmount() {
            qo.unsubscribe(this.previouslyRenderedSVG), this.unmountedSVG = this.previouslyRenderedSVG, this.previouslyRenderedSVG = ""
        }

        componentDidUpdate(t) {
            if (super.componentDidUpdate(t), this.props.svgContentId) return;
            let {fill: n} = this.props;
            Wi.isImageObject(n) && Wi.isImageObject(t.fill) && n.src !== t.fill.src && yC(this.svgElement, "fill", null, !1), Tk(this.container, this.props)
        }

        collectLayout(t, n) {
            if (this.props.withExternalLayout) {
                n.width = "100%", n.height = "100%", n.aspectRatio = "inherit";
                return
            }
            let r = this.frame, {rotation: i, intrinsicWidth: o, intrinsicHeight: s, width: a, height: l} = this.props,
                c = nt.getNumber(i);
            if (t.opacity = ie(this.props.opacity) ? this.props.opacity : 1, ue.hasRestrictions() && r) {
                Object.assign(t, {
                    transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(4)}deg)`,
                    width: `${r.width}px`,
                    height: `${r.height}px`
                }), La(this.props) && (t.position = "absolute");
                let v = r.width / (o || 1), g = r.height / (s || 1);
                n.transformOrigin = "top left";
                let {zoom: b, target: p} = xu;
                if (p === ue.export) {
                    let m = b > 1 ? b : 1;
                    n.transform = `scale(${v * m}, ${g * m})`, n.zoom = 1 / m
                } else n.transform = `scale(${v}, ${g})`;
                o && s && (n.width = o, n.height = s);
                return
            }
            let {left: u, right: f, top: d, bottom: h} = this.props;
            Object.assign(t, {
                left: u,
                right: f,
                top: d,
                bottom: h,
                width: a,
                height: l,
                rotate: c
            }), Object.assign(n, {left: 0, top: 0, bottom: 0, right: 0, position: "absolute"})
        }

        render() {
            let {
                id: t,
                visible: n,
                style: r,
                fill: i,
                svg: o,
                intrinsicHeight: s,
                intrinsicWidth: a,
                title: l,
                description: c,
                layoutId: u,
                className: f,
                variants: d,
                withExternalLayout: h,
                innerRef: v,
                svgContentId: g,
                height: b,
                opacity: p,
                width: m,
                ...y
            } = this.props;
            if (!h && (!n || !t)) return null;
            let w = t ?? u ?? "svg", C = this.frame, S = C || {width: a || 100, height: s || 100},
                R = {...r, imageRendering: "pixelated", flexShrink: 0}, E = {};
            this.collectLayout(R, E), M3(this.props, R), cg(this.props, R), fu.applyWillChange(this.props, R, !1);
            let I = null;
            if (typeof i == "string" || U.isColorObject(i)) {
                let G = U.isColorObject(i) ? i.initialValue || U.toRgbString(i) : i;
                R.fill = G, R.color = G
            } else if (Pa.isLinearGradient(i)) {
                let G = i, de = `${encodeURI(t || "")}g${Pa.hash(G)}`;
                R.fill = `url(#${de})`;
                let {stops: me, x1: le, x2: ee, y1: Fe, y2: Te} = rN(G, w);
                I = k("svg", {
                    ref: this.setSVGElement,
                    width: "100%",
                    height: "100%",
                    style: {position: "absolute"},
                    children: k("linearGradient", {
                        id: de,
                        x1: le,
                        x2: ee,
                        y1: Fe,
                        y2: Te,
                        children: me.map((De, Pe) => k("stop", {
                            offset: De.position,
                            stopColor: De.color,
                            stopOpacity: De.alpha
                        }, Pe))
                    })
                })
            } else if (_a.isRadialGradient(i)) {
                let G = i, de = `${encodeURI(t || "")}g${_a.hash(G)}`;
                R.fill = `url(#${de})`;
                let me = iN(G, w);
                I = k("svg", {
                    ref: this.setSVGElement,
                    width: "100%",
                    height: "100%",
                    style: {position: "absolute"},
                    children: k("radialGradient", {
                        id: de,
                        cy: G.centerAnchorY,
                        cx: G.centerAnchorX,
                        r: G.widthFactor,
                        children: me.stops.map((le, ee) => k("stop", {
                            offset: le.position,
                            stopColor: le.color,
                            stopOpacity: le.alpha
                        }, ee))
                    })
                })
            } else if (Wi.isImageObject(i)) {
                let G = oN(i, S, w);
                G && (R.fill = `url(#${G.id})`, I = k("svg", {
                    ref: this.setSVGElement,
                    width: "100%",
                    height: "100%",
                    style: {position: "absolute"},
                    children: k("defs", {children: k(cN, {...G})})
                }))
            }
            let O = {"data-framer-component-type": "SVG"}, H = !C;
            H && Object.assign(O, hC(this.props.center));
            let z = !I && !R.fill && !R.background && !R.backgroundImage && o.length < xN && !wN(o) && !SN(o), B = null;
            if (z) R.backgroundSize = "100% 100%", R.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(o)}')`, qo.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = ""; else {
                let G = g ? `svg${g}` : null, de = qo.subscribe(o, !g, G);
                qo.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = o, kN(R) && (R.overflow = "hidden"), B = ge(at, {
                    children: [I, k("div", {
                        className: "svgContainer",
                        style: E,
                        ref: this.container,
                        dangerouslySetInnerHTML: {__html: de}
                    }, Wi.isImageObject(i) ? i.src : "")]
                })
            }
            let Q = Da(this.props.as), {href: j, target: se, rel: K, onClick: te} = this.props, X = l || c;
            return ge(Q, {
                ...O, ...y,
                layoutId: u,
                transformTemplate: H ? Xu(this.props.center) : void 0,
                id: t,
                ref: v,
                style: R,
                className: f,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: X ? "img" : void 0,
                "aria-label": l,
                "aria-description": c,
                "aria-hidden": X ? void 0 : "true",
                href: j,
                target: se,
                rel: K,
                onClick: te,
                children: [B, k(CN, {})]
            })
        }
    }, T(e, "supportsConstraints", !0), T(e, "defaultSVGProps", {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        style: void 0,
        _constraints: {enabled: !0, aspectRatio: null},
        parentSize: 0,
        rotation: 0,
        visible: !0,
        svg: "",
        shadows: []
    }), T(e, "defaultProps", {...fu.defaultProps, ...e.defaultSVGProps}), e
})();

function V9(e, t, n) {
    let r = ZT(t);
    !n?.supportsExplicitInterCodegen && !r.some(i => i.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }), Object.assign(e, {fonts: r})
}

function A9(e) {
    return e.fonts ?? []
}

function D9(e) {
    return e.length === 0 ? [{explicitInter: !1, fonts: []}] : ZT(e)
}

function ZT(e) {
    let t = {explicitInter: !1, fonts: []}, n = [];
    for (let r of e) EN(r) ? n.push(r) : t.fonts.push(FN(r));
    return t.fonts.length > 0 && n.push(t), n
}

var RN = "explicitInter";

function EN(e) {
    return RN in e
}

function FN(e) {
    let t;
    return e.url.startsWith("https://fonts.gstatic.com/s/") ? t = "google" : e.url.startsWith("https://framerusercontent.com/third-party-assets/fontshare/") ? t = "fontshare" : t = "custom", {
        ...e,
        source: t
    }
}

function z9(e, t) {
    let n = `${e}-start`;
    performance.mark(n), t();
    let r = `${e}-end`;
    performance.mark(r), performance.measure(e, n, r)
}

vl.prototype.addChild = function ({transformer: e = t => t}) {
    let t = Ye(e(this.get()));
    return this.onChange(n => t.set(e(n))), t
};/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *//*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
export {
    x as a,
    mn as b,
    gn as c,
    gr as d,
    Ji as e,
    Hg as f,
    Oe as g,
    Xa as h,
    ht as i,
    W as j,
    A as k,
    $ as l,
    vr as m,
    et as n,
    ze as o,
    oe as p,
    V as q,
    _e as r,
    Tt as s,
    k as t,
    ge as u,
    vl as v,
    Ye as w,
    Be as x,
    Kn as y,
    tn as z,
    J0 as A,
    Jn as B,
    At as C,
    N_ as D,
    pI as E,
    ab as F,
    cb as G,
    Mn as H,
    pb as I,
    AI as J,
    GI as K,
    VS as L,
    FM as M,
    Hj as N,
    Ki as O,
    Qj as P,
    Zj as Q,
    oH as R,
    Zm as S,
    uH as T,
    dH as U,
    pH as V,
    LL as W,
    Xk as X,
    U as Y,
    ue as Z,
    yH as _,
    CH as $,
    JV as aa,
    PH as ba,
    ZA as ca,
    _H as da,
    iD as ea,
    x8 as fa,
    Cu as ga,
    mW as ha,
    wW as ia,
    SW as ja,
    o5 as ka,
    AW as la,
    F5 as ma,
    WC as na,
    jW as oa,
    UC as pa,
    YW as qa,
    A5 as ra,
    B5 as sa,
    Na as ta,
    J5 as ua,
    tU as va,
    fU as wa,
    mU as xa,
    vU as ya,
    FB as za,
    IB as Aa,
    xU as Ba,
    OB as Ca,
    MB as Da,
    wU as Ea,
    kU as Fa,
    RU as Ga,
    EU as Ha,
    MU as Ia,
    DU as Ja,
    zU as Ka,
    jU as La,
    HU as Ma,
    yu as Na,
    m9 as Oa,
    w9 as Pa,
    qo as Qa,
    T9 as Ra,
    V9 as Sa,
    A9 as Ta,
    D9 as Ua,
    z9 as Va
};
//# sourceMappingURL=chunk-MQBELU27.mjs.map
