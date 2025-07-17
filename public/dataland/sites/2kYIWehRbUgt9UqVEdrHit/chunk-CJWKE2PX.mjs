import {
    A as te,
    I as Rt,
    La as se,
    Na as ke,
    O as Hr,
    Pa as G,
    S as re,
    Sa as ie,
    Ta as ve,
    Ua as ut,
    Z as Lt,
    aa as f,
    c as b,
    da as A,
    fa as Ur,
    g as J,
    ga as ae,
    ia as ne,
    ja as me,
    k as K,
    l as X,
    m as ee,
    na as oe,
    p as z,
    q as W,
    r as Re,
    t as l,
    u as N,
    va as $,
    y as B,
    ya as Ar,
    z as d
} from "./chunk-MQBELU27.mjs";
import {b as F} from "./chunk-RIUMFBNJ.mjs";

ke.loadFonts(["CUSTOM;Martian Mono sWd Rg"]);
var Le = [{
        family: "Martian Mono sWd Rg",
        source: "custom",
        url: "https://framerusercontent.com/assets/PdRMkWERqi1oLvjbWg6YBccKxLI.woff2"
    }],
    Ne = ['.framer-tkNsP .framer-styles-preset-10erd1a:not(.rich-text-wrapper), .framer-tkNsP .framer-styles-preset-10erd1a.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.25em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; }', '@media (max-width: 1919px) and (min-width: 1440px) { .framer-tkNsP .framer-styles-preset-10erd1a:not(.rich-text-wrapper), .framer-tkNsP .framer-styles-preset-10erd1a.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 12.5px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.25em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }', '@media (max-width: 1439px) and (min-width: 810px) { .framer-tkNsP .framer-styles-preset-10erd1a:not(.rich-text-wrapper), .framer-tkNsP .framer-styles-preset-10erd1a.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 10px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.25em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-tkNsP .framer-styles-preset-10erd1a:not(.rich-text-wrapper), .framer-tkNsP .framer-styles-preset-10erd1a.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 9px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.25em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }'],
    Ie = "framer-tkNsP";
var ft = '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    qr = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, _n = {
        ...qr,
        borderRadius: 6,
        background: "rgba(136, 85, 255, 0.3)",
        color: "#85F",
        border: "1px dashed #85F",
        flexDirection: "column"
    }, Gn = {onClick: {type: f.EventHandler}, onMouseEnter: {type: f.EventHandler}, onMouseLeave: {type: f.EventHandler}},
    nr = {type: f.Number, title: "Font Size", min: 2, max: 200, step: 1, displayStepper: !0}, or = {
        font: {type: f.Boolean, title: "Font", defaultValue: !1, disabledTitle: "Default", enabledTitle: "Custom"},
        fontFamily: {type: f.String, title: "Family", placeholder: "Inter", hidden: ({font: t}) => !t},
        fontWeight: {
            type: f.Enum,
            title: "Weight",
            options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
            hidden: ({font: t}) => !t
        }
    };

function jn(t, e) {
    return Wr(!0, t, e)
}

function zn(t, e) {
    return Wr(!1, t, e)
}

function Wr(t, e, r = !0) {
    let a = Ur();
    X(() => {
        r && a === t && e()
    }, [a])
}

function Zr(t) {
    let e = W(null);
    return e.current === null && (e.current = t()), e.current
}

var Bn = () => {
    if (typeof F < "u") {
        let t = F.userAgent.toLowerCase();
        return (t.indexOf("safari") > -1 || t.indexOf("framermobile") > -1 || t.indexOf("framerx") > -1) && t.indexOf("chrome") < 0
    } else return !1
}, Qn = () => z(() => Bn(), []);
var Hn = {
    100: "Thin",
    200: "Extra-light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semi-bold",
    700: "Bold",
    800: "Extra-bold",
    900: "Black"
};

function sr(t) {
    let {fontFamily: e = "Inter", fontSize: r = 16, fontWeight: a = 400, font: n = !1} = t, s = Hn[a],
        o = `"${e} ${s}", "${e}", ${ft}`,
        i = e ? {fontSize: r, fontWeight: a, fontFamily: o} : {fontSize: r, fontWeight: a}, c = async () => {
            await ke.loadWebFontsFromSelectors([`CUSTOM;${e}`, `CUSTOM;${e} ${s}`, `GF;${e}-${s.toLowerCase()}`]).catch(m => console.error(m))
        };
    return X(() => {
        n && c()
    }, [n, e, a]), i
}

function Un() {
    return z(() => Lt.current() === Lt.canvas, [])
}

function An(t) {
    let {
        borderRadius: e,
        isMixedBorderRadius: r,
        topLeftRadius: a,
        topRightRadius: n,
        bottomRightRadius: s,
        bottomLeftRadius: o
    } = t;
    return z(() => r ? `${a}px ${n}px ${s}px ${o}px` : `${e}px`, [e, r, a, n, s, o])
}

var qn = {
    borderRadius: {
        title: "Radius",
        type: f.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0
    }
};

function Wn(t) {
    let {padding: e, paddingPerSide: r, paddingTop: a, paddingRight: n, paddingBottom: s, paddingLeft: o} = t;
    return z(() => r ? `${a}px ${n}px ${s}px ${o}px` : e, [e, r, a, n, s, o])
}

var Zn = {
    padding: {
        type: f.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding"
    }
};
var ht = function (e) {
    let [r, a] = Re(new Date), {textColor: n, fontFamily: s, lineHeight: o, style: i, transform: c} = e, m = sr(e);

    function u() {
        a(new Date)
    }

    return X(() => {
        let v = setInterval(u, 1e3);
        return function () {
            clearInterval(v)
        }
    }, []), l("div", {
        style: {
            ...$n,
            color: n,
            lineHeight: o, ...i,
            flex: "auto",
            width: "max-content",
            display: "block",
            margin: "auto", ...m
        }, children: r.toLocaleTimeString("en-US").toLowerCase().toString()
    })
};
ht.defaultProps = {
    textColor: "#fff",
    fontFamily: "Martian Mono ExtraLight",
    textAlign: "left",
    fontSize: 16,
    fontWeight: 200,
    lineHeight: 1
};
A(ht, {
    textColor: {type: f.Color, title: "Color"}, ...or,
    fontSize: {...nr},
    lineHeight: {type: f.Number, min: 0, step: .1, max: 2, displayStepper: !0}
});
var $n = {fontFamily: ft};
var Me = class extends Error {
    }, hr = class extends Me {
        constructor(e) {
            super(`Invalid DateTime: ${e.toMessage()}`)
        }
    }, pr = class extends Me {
        constructor(e) {
            super(`Invalid Interval: ${e.toMessage()}`)
        }
    }, yr = class extends Me {
        constructor(e) {
            super(`Invalid Duration: ${e.toMessage()}`)
        }
    }, Ye = class extends Me {
    }, Bt = class extends Me {
        constructor(e) {
            super(`Invalid unit ${e}`)
        }
    }, le = class extends Me {
    }, Ce = class extends Me {
        constructor() {
            super("Zone is an abstract class")
        }
    }, p = "numeric", Se = "short", ue = "long", Qt = {year: p, month: p, day: p}, Sa = {year: p, month: Se, day: p},
    Yn = {year: p, month: Se, day: p, weekday: Se}, ka = {year: p, month: ue, day: p},
    Ca = {year: p, month: ue, day: p, weekday: ue}, Ta = {hour: p, minute: p}, Fa = {hour: p, minute: p, second: p},
    Va = {hour: p, minute: p, second: p, timeZoneName: Se}, Oa = {hour: p, minute: p, second: p, timeZoneName: ue},
    Ma = {hour: p, minute: p, hourCycle: "h23"}, Ra = {hour: p, minute: p, second: p, hourCycle: "h23"},
    La = {hour: p, minute: p, second: p, hourCycle: "h23", timeZoneName: Se},
    Na = {hour: p, minute: p, second: p, hourCycle: "h23", timeZoneName: ue},
    Ia = {year: p, month: p, day: p, hour: p, minute: p},
    Ea = {year: p, month: p, day: p, hour: p, minute: p, second: p},
    Da = {year: p, month: Se, day: p, hour: p, minute: p},
    Pa = {year: p, month: Se, day: p, hour: p, minute: p, second: p},
    Jn = {year: p, month: Se, day: p, weekday: Se, hour: p, minute: p},
    _a = {year: p, month: ue, day: p, hour: p, minute: p, timeZoneName: Se},
    Ga = {year: p, month: ue, day: p, hour: p, minute: p, second: p, timeZoneName: Se},
    ja = {year: p, month: ue, day: p, weekday: ue, hour: p, minute: p, timeZoneName: ue},
    za = {year: p, month: ue, day: p, weekday: ue, hour: p, minute: p, second: p, timeZoneName: ue}, Xe = class {
        get type() {
            throw new Ce
        }

        get name() {
            throw new Ce
        }

        get ianaName() {
            return this.name
        }

        get isUniversal() {
            throw new Ce
        }

        offsetName(e, r) {
            throw new Ce
        }

        formatOffset(e, r) {
            throw new Ce
        }

        offset(e) {
            throw new Ce
        }

        equals(e) {
            throw new Ce
        }

        get isValid() {
            throw new Ce
        }
    }, ir = null, nt = class extends Xe {
        static get instance() {
            return ir === null && (ir = new nt), ir
        }

        get type() {
            return "system"
        }

        get name() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone
        }

        get isUniversal() {
            return !1
        }

        offsetName(e, {format: r, locale: a}) {
            return Qa(e, r, a)
        }

        formatOffset(e, r) {
            return vt(this.offset(e), r)
        }

        offset(e) {
            return -new Date(e).getTimezoneOffset()
        }

        equals(e) {
            return e.type === "system"
        }

        get isValid() {
            return !0
        }
    }, jt = {};

function Kn(t) {
    return jt[t] || (jt[t] = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: t,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
    })), jt[t]
}

var Xn = {year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6};

function eo(t, e) {
    let r = t.format(e).replace(/\u200E/g, ""),
        a = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, n, s, o, i, c, m, u] = a;
    return [o, n, s, i, c, m, u]
}

function to(t, e) {
    let r = t.formatToParts(e), a = [];
    for (let n = 0; n < r.length; n++) {
        let {type: s, value: o} = r[n], i = Xn[s];
        s === "era" ? a[i] = o : k(i) || (a[i] = parseInt(o, 10))
    }
    return a
}

var It = {}, Y = class extends Xe {
    static create(e) {
        return It[e] || (It[e] = new Y(e)), It[e]
    }

    static resetCache() {
        It = {}, jt = {}
    }

    static isValidSpecifier(e) {
        return this.isValidZone(e)
    }

    static isValidZone(e) {
        if (!e) return !1;
        try {
            return new Intl.DateTimeFormat("en-US", {timeZone: e}).format(), !0
        } catch {
            return !1
        }
    }

    constructor(e) {
        super(), this.zoneName = e, this.valid = Y.isValidZone(e)
    }

    get type() {
        return "iana"
    }

    get name() {
        return this.zoneName
    }

    get isUniversal() {
        return !1
    }

    offsetName(e, {format: r, locale: a}) {
        return Qa(e, r, a, this.name)
    }

    formatOffset(e, r) {
        return vt(this.offset(e), r)
    }

    offset(e) {
        let r = new Date(e);
        if (isNaN(r)) return NaN;
        let a = Kn(this.name), [n, s, o, i, c, m, u] = a.formatToParts ? to(a, r) : eo(a, r);
        i === "BC" && (n = 1 - Math.abs(n));
        let g = Wt({year: n, month: s, day: o, hour: c === 24 ? 0 : c, minute: m, second: u, millisecond: 0}), h = +r,
            S = h % 1e3;
        return h -= S >= 0 ? S : 1e3 + S, (g - h) / 6e4
    }

    equals(e) {
        return e.type === "iana" && e.name === this.name
    }

    get isValid() {
        return this.valid
    }
}, Yr = {};

function ro(t, e = {}) {
    let r = JSON.stringify([t, e]), a = Yr[r];
    return a || (a = new Intl.ListFormat(t, e), Yr[r] = a), a
}

var gr = {};

function xr(t, e = {}) {
    let r = JSON.stringify([t, e]), a = gr[r];
    return a || (a = new Intl.DateTimeFormat(t, e), gr[r] = a), a
}

var vr = {};

function ao(t, e = {}) {
    let r = JSON.stringify([t, e]), a = vr[r];
    return a || (a = new Intl.NumberFormat(t, e), vr[r] = a), a
}

var br = {};

function no(t, e = {}) {
    let {base: r, ...a} = e, n = JSON.stringify([t, a]), s = br[n];
    return s || (s = new Intl.RelativeTimeFormat(t, e), br[n] = s), s
}

var gt = null;

function oo() {
    return gt || (gt = new Intl.DateTimeFormat().resolvedOptions().locale, gt)
}

function so(t) {
    let e = t.indexOf("-x-");
    e !== -1 && (t = t.substring(0, e));
    let r = t.indexOf("-u-");
    if (r === -1) return [t];
    {
        let a, n;
        try {
            a = xr(t).resolvedOptions(), n = t
        } catch {
            let c = t.substring(0, r);
            a = xr(c).resolvedOptions(), n = c
        }
        let {numberingSystem: s, calendar: o} = a;
        return [n, s, o]
    }
}

function io(t, e, r) {
    return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t
}

function lo(t) {
    let e = [];
    for (let r = 1; r <= 12; r++) {
        let a = w.utc(2009, r, 1);
        e.push(t(a))
    }
    return e
}

function co(t) {
    let e = [];
    for (let r = 1; r <= 7; r++) {
        let a = w.utc(2016, 11, 13 + r);
        e.push(t(a))
    }
    return e
}

function Et(t, e, r, a) {
    let n = t.listingMode();
    return n === "error" ? null : n === "en" ? r(e) : a(e)
}

function mo(t) {
    return (!t.numberingSystem || t.numberingSystem === "latn") && (t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn")
}

var wr = class {
    constructor(e, r, a) {
        this.padTo = a.padTo || 0, this.floor = a.floor || !1;
        let {padTo: n, floor: s, ...o} = a;
        if (!r || Object.keys(o).length > 0) {
            let i = {useGrouping: !1, ...a};
            a.padTo > 0 && (i.minimumIntegerDigits = a.padTo), this.inf = ao(e, i)
        }
    }

    format(e) {
        if (this.inf) {
            let r = this.floor ? Math.floor(e) : e;
            return this.inf.format(r)
        }
        {
            let r = this.floor ? Math.floor(e) : Or(e, 3);
            return Q(r, this.padTo)
        }
    }
}, Sr = class {
    constructor(e, r, a) {
        this.opts = a, this.originalZone = void 0;
        let n;
        if (this.opts.timeZone) this.dt = e; else if (e.zone.type === "fixed") {
            let o = e.offset / 60 * -1, i = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
            e.offset !== 0 && Y.create(i).valid ? (n = i, this.dt = e) : (n = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({minutes: e.offset}), this.originalZone = e.zone)
        } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, n = e.zone.name) : (n = "UTC", this.dt = e.setZone("UTC").plus({minutes: e.offset}), this.originalZone = e.zone);
        let s = {...this.opts};
        s.timeZone = s.timeZone || n, this.dtf = xr(r, s)
    }

    format() {
        return this.originalZone ? this.formatToParts().map(({value: e}) => e).join("") : this.dtf.format(this.dt.toJSDate())
    }

    formatToParts() {
        let e = this.dtf.formatToParts(this.dt.toJSDate());
        return this.originalZone ? e.map(r => {
            if (r.type === "timeZoneName") {
                let a = this.originalZone.offsetName(this.dt.ts, {
                    locale: this.dt.locale,
                    format: this.opts.timeZoneName
                });
                return {...r, value: a}
            }
            return r
        }) : e
    }

    resolvedOptions() {
        return this.dtf.resolvedOptions()
    }
}, kr = class {
    constructor(e, r, a) {
        this.opts = {style: "long", ...a}, !r && Ba() && (this.rtf = no(e, a))
    }

    format(e, r) {
        return this.rtf ? this.rtf.format(e, r) : Vo(r, e, this.opts.numeric, this.opts.style !== "long")
    }

    formatToParts(e, r) {
        return this.rtf ? this.rtf.formatToParts(e, r) : []
    }
}, I = class {
    static fromOpts(e) {
        return I.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN)
    }

    static create(e, r, a, n = !1) {
        let s = e || j.defaultLocale, o = s || (n ? "en-US" : oo()), i = r || j.defaultNumberingSystem,
            c = a || j.defaultOutputCalendar;
        return new I(o, i, c, s)
    }

    static resetCache() {
        gt = null, gr = {}, vr = {}, br = {}
    }

    static fromObject({locale: e, numberingSystem: r, outputCalendar: a} = {}) {
        return I.create(e, r, a)
    }

    constructor(e, r, a, n) {
        let [s, o, i] = so(e);
        this.locale = s, this.numberingSystem = r || o || null, this.outputCalendar = a || i || null, this.intl = io(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
            format: {},
            standalone: {}
        }, this.monthsCache = {
            format: {},
            standalone: {}
        }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = n, this.fastNumbersCached = null
    }

    get fastNumbers() {
        return this.fastNumbersCached == null && (this.fastNumbersCached = mo(this)), this.fastNumbersCached
    }

    listingMode() {
        let e = this.isEnglish(),
            r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return e && r ? "en" : "intl"
    }

    clone(e) {
        return e && Object.getOwnPropertyNames(e).length !== 0 ? I.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1) : this
    }

    redefaultToEN(e = {}) {
        return this.clone({...e, defaultToEN: !0})
    }

    redefaultToSystem(e = {}) {
        return this.clone({...e, defaultToEN: !1})
    }

    months(e, r = !1) {
        return Et(this, e, Aa, () => {
            let a = r ? {month: e, day: "numeric"} : {month: e}, n = r ? "format" : "standalone";
            return this.monthsCache[n][e] || (this.monthsCache[n][e] = lo(s => this.extract(s, a, "month"))), this.monthsCache[n][e]
        })
    }

    weekdays(e, r = !1) {
        return Et(this, e, Za, () => {
            let a = r ? {weekday: e, year: "numeric", month: "long", day: "numeric"} : {weekday: e},
                n = r ? "format" : "standalone";
            return this.weekdaysCache[n][e] || (this.weekdaysCache[n][e] = co(s => this.extract(s, a, "weekday"))), this.weekdaysCache[n][e]
        })
    }

    meridiems() {
        return Et(this, void 0, () => $a, () => {
            if (!this.meridiemCache) {
                let e = {hour: "numeric", hourCycle: "h12"};
                this.meridiemCache = [w.utc(2016, 11, 13, 9), w.utc(2016, 11, 13, 19)].map(r => this.extract(r, e, "dayperiod"))
            }
            return this.meridiemCache
        })
    }

    eras(e) {
        return Et(this, e, Ya, () => {
            let r = {era: e};
            return this.eraCache[e] || (this.eraCache[e] = [w.utc(-40, 1, 1), w.utc(2017, 1, 1)].map(a => this.extract(a, r, "era"))), this.eraCache[e]
        })
    }

    extract(e, r, a) {
        let n = this.dtFormatter(e, r), s = n.formatToParts(), o = s.find(i => i.type.toLowerCase() === a);
        return o ? o.value : null
    }

    numberFormatter(e = {}) {
        return new wr(this.intl, e.forceSimple || this.fastNumbers, e)
    }

    dtFormatter(e, r = {}) {
        return new Sr(e, this.intl, r)
    }

    relFormatter(e = {}) {
        return new kr(this.intl, this.isEnglish(), e)
    }

    listFormatter(e = {}) {
        return ro(this.intl, e)
    }

    isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    }

    equals(e) {
        return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
    }
}, lr = null, Z = class extends Xe {
    static get utcInstance() {
        return lr === null && (lr = new Z(0)), lr
    }

    static instance(e) {
        return e === 0 ? Z.utcInstance : new Z(e)
    }

    static parseSpecifier(e) {
        if (e) {
            let r = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) return new Z(Zt(r[1], r[2]))
        }
        return null
    }

    constructor(e) {
        super(), this.fixed = e
    }

    get type() {
        return "fixed"
    }

    get name() {
        return this.fixed === 0 ? "UTC" : `UTC${vt(this.fixed, "narrow")}`
    }

    get ianaName() {
        return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${vt(-this.fixed, "narrow")}`
    }

    offsetName() {
        return this.name
    }

    formatOffset(e, r) {
        return vt(this.fixed, r)
    }

    get isUniversal() {
        return !0
    }

    offset() {
        return this.fixed
    }

    equals(e) {
        return e.type === "fixed" && e.fixed === this.fixed
    }

    get isValid() {
        return !0
    }
}, Cr = class extends Xe {
    constructor(e) {
        super(), this.zoneName = e
    }

    get type() {
        return "invalid"
    }

    get name() {
        return this.zoneName
    }

    get isUniversal() {
        return !1
    }

    offsetName() {
        return null
    }

    formatOffset() {
        return ""
    }

    offset() {
        return NaN
    }

    equals() {
        return !1
    }

    get isValid() {
        return !1
    }
};

function _e(t, e) {
    if (k(t) || t === null) return e;
    if (t instanceof Xe) return t;
    if (uo(t)) {
        let r = t.toLowerCase();
        return r === "default" ? e : r === "local" || r === "system" ? nt.instance : r === "utc" || r === "gmt" ? Z.utcInstance : Z.parseSpecifier(r) || Y.create(t)
    }
    return Ke(t) ? Z.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Cr(t)
}

var Jr, Kr = () => Date.now(), Xr = "system", ea = null, ta = null, ra = null, aa = 60, j = class {
    static get now() {
        return Kr
    }

    static set now(e) {
        Kr = e
    }

    static set defaultZone(e) {
        Xr = e
    }

    static get defaultZone() {
        return _e(Xr, nt.instance)
    }

    static get defaultLocale() {
        return ea
    }

    static set defaultLocale(e) {
        ea = e
    }

    static get defaultNumberingSystem() {
        return ta
    }

    static set defaultNumberingSystem(e) {
        ta = e
    }

    static get defaultOutputCalendar() {
        return ra
    }

    static set defaultOutputCalendar(e) {
        ra = e
    }

    static get twoDigitCutoffYear() {
        return aa
    }

    static set twoDigitCutoffYear(e) {
        aa = e % 100
    }

    static get throwOnInvalid() {
        return Jr
    }

    static set throwOnInvalid(e) {
        Jr = e
    }

    static resetCaches() {
        I.resetCache(), Y.resetCache()
    }
};

function k(t) {
    return typeof t > "u"
}

function Ke(t) {
    return typeof t == "number"
}

function qt(t) {
    return typeof t == "number" && t % 1 === 0
}

function uo(t) {
    return typeof t == "string"
}

function fo(t) {
    return Object.prototype.toString.call(t) === "[object Date]"
}

function Ba() {
    try {
        return typeof Intl < "u" && !!Intl.RelativeTimeFormat
    } catch {
        return !1
    }
}

function ho(t) {
    return Array.isArray(t) ? t : [t]
}

function na(t, e, r) {
    if (t.length !== 0) return t.reduce((a, n) => {
        let s = [e(n), n];
        return a && r(a[0], s[0]) === a[0] ? a : s
    }, null)[1]
}

function po(t, e) {
    return e.reduce((r, a) => (r[a] = t[a], r), {})
}

function ot(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
}

function Oe(t, e, r) {
    return qt(t) && t >= e && t <= r
}

function yo(t, e) {
    return t - e * Math.floor(t / e)
}

function Q(t, e = 2) {
    let r = t < 0, a;
    return a = r ? "-" + ("" + -t).padStart(e, "0") : ("" + t).padStart(e, "0"), a
}

function Pe(t) {
    return k(t) || t === null || t === "" ? void 0 : parseInt(t, 10)
}

function Ze(t) {
    return k(t) || t === null || t === "" ? void 0 : parseFloat(t)
}

function Vr(t) {
    if (!k(t) && t !== null && t !== "") {
        let e = 1e3 * parseFloat("0." + t);
        return Math.floor(e)
    }
}

function Or(t, e, r = !1) {
    let a = 10 ** e;
    return (r ? Math.trunc : Math.round)(t * a) / a
}

function bt(t) {
    return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0)
}

function xt(t) {
    return bt(t) ? 366 : 365
}

function Ht(t, e) {
    let r = yo(e - 1, 12) + 1, a = t + (e - r) / 12;
    return r === 2 ? bt(a) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1]
}

function Wt(t) {
    let e = Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second, t.millisecond);
    return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e
}

function Ut(t) {
    let e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7, r = t - 1,
        a = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7;
    return e === 4 || a === 3 ? 53 : 52
}

function Tr(t) {
    return t > 99 ? t : t > j.twoDigitCutoffYear ? 1900 + t : 2e3 + t
}

function Qa(t, e, r, a = null) {
    let n = new Date(t),
        s = {hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"};
    a && (s.timeZone = a);
    let o = {timeZoneName: e, ...s},
        i = new Intl.DateTimeFormat(r, o).formatToParts(n).find(c => c.type.toLowerCase() === "timezonename");
    return i ? i.value : null
}

function Zt(t, e) {
    let r = parseInt(t, 10);
    Number.isNaN(r) && (r = 0);
    let a = parseInt(e, 10) || 0, n = r < 0 || Object.is(r, -0) ? -a : a;
    return 60 * r + n
}

function Ha(t) {
    let e = Number(t);
    if (typeof t == "boolean" || t === "" || Number.isNaN(e)) throw new le(`Invalid unit value ${t}`);
    return e
}

function At(t, e) {
    let r = {};
    for (let a in t) if (ot(t, a)) {
        let n = t[a];
        if (n == null) continue;
        r[e(a)] = Ha(n)
    }
    return r
}

function vt(t, e) {
    let r = Math.trunc(Math.abs(t / 60)), a = Math.trunc(Math.abs(t % 60)), n = t >= 0 ? "+" : "-";
    switch (e) {
        case"short":
            return `${n}${Q(r, 2)}:${Q(a, 2)}`;
        case"narrow":
            return `${n}${r}${a > 0 ? `:${a}` : ""}`;
        case"techie":
            return `${n}${Q(r, 2)}${Q(a, 2)}`;
        default:
            throw new RangeError(`Value format ${e} is out of range for property format`)
    }
}

function $t(t) {
    return po(t, ["hour", "minute", "second", "millisecond"])
}

var go = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    Ua = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    xo = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function Aa(t) {
    switch (t) {
        case"narrow":
            return [...xo];
        case"short":
            return [...Ua];
        case"long":
            return [...go];
        case"numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        case"2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        default:
            return null
    }
}

var qa = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    Wa = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], vo = ["M", "T", "W", "T", "F", "S", "S"];

function Za(t) {
    switch (t) {
        case"narrow":
            return [...vo];
        case"short":
            return [...Wa];
        case"long":
            return [...qa];
        case"numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
        default:
            return null
    }
}

var $a = ["AM", "PM"], bo = ["Before Christ", "Anno Domini"], wo = ["BC", "AD"], So = ["B", "A"];

function Ya(t) {
    switch (t) {
        case"narrow":
            return [...So];
        case"short":
            return [...wo];
        case"long":
            return [...bo];
        default:
            return null
    }
}

function ko(t) {
    return $a[t.hour < 12 ? 0 : 1]
}

function Co(t, e) {
    return Za(e)[t.weekday - 1]
}

function To(t, e) {
    return Aa(e)[t.month - 1]
}

function Fo(t, e) {
    return Ya(e)[t.year < 0 ? 0 : 1]
}

function Vo(t, e, r = "always", a = !1) {
    let n = {
        years: ["year", "yr."],
        quarters: ["quarter", "qtr."],
        months: ["month", "mo."],
        weeks: ["week", "wk."],
        days: ["day", "day", "days"],
        hours: ["hour", "hr."],
        minutes: ["minute", "min."],
        seconds: ["second", "sec."]
    }, s = ["hours", "minutes", "seconds"].indexOf(t) === -1;
    if (r === "auto" && s) {
        let v = t === "days";
        switch (e) {
            case 1:
                return v ? "tomorrow" : `next ${n[t][0]}`;
            case-1:
                return v ? "yesterday" : `last ${n[t][0]}`;
            case 0:
                return v ? "today" : `this ${n[t][0]}`;
            default:
        }
    }
    let o = Object.is(e, -0) || e < 0, i = Math.abs(e), c = i === 1, m = n[t],
        u = a ? c ? m[1] : m[2] || m[1] : c ? n[t][0] : t;
    return o ? `${i} ${u} ago` : `in ${i} ${u}`
}

function oa(t, e) {
    let r = "";
    for (let a of t) a.literal ? r += a.val : r += e(a.val);
    return r
}

var Oo = {
    D: Qt,
    DD: Sa,
    DDD: ka,
    DDDD: Ca,
    t: Ta,
    tt: Fa,
    ttt: Va,
    tttt: Oa,
    T: Ma,
    TT: Ra,
    TTT: La,
    TTTT: Na,
    f: Ia,
    ff: Da,
    fff: _a,
    ffff: ja,
    F: Ea,
    FF: Pa,
    FFF: Ga,
    FFFF: za
}, q = class {
    static create(e, r = {}) {
        return new q(e, r)
    }

    static parseFormat(e) {
        let r = null, a = "", n = !1, s = [];
        for (let o = 0; o < e.length; o++) {
            let i = e.charAt(o);
            i === "'" ? (a.length > 0 && s.push({
                literal: n || /^\s+$/.test(a),
                val: a
            }), r = null, a = "", n = !n) : n || i === r ? a += i : (a.length > 0 && s.push({
                literal: /^\s+$/.test(a),
                val: a
            }), a = i, r = i)
        }
        return a.length > 0 && s.push({literal: n || /^\s+$/.test(a), val: a}), s
    }

    static macroTokenToFormatOpts(e) {
        return Oo[e]
    }

    constructor(e, r) {
        this.opts = r, this.loc = e, this.systemLoc = null
    }

    formatWithSystemDefault(e, r) {
        return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, {...this.opts, ...r}).format()
    }

    dtFormatter(e, r = {}) {
        return this.loc.dtFormatter(e, {...this.opts, ...r})
    }

    formatDateTime(e, r) {
        return this.dtFormatter(e, r).format()
    }

    formatDateTimeParts(e, r) {
        return this.dtFormatter(e, r).formatToParts()
    }

    formatInterval(e, r) {
        return this.dtFormatter(e.start, r).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate())
    }

    resolvedOptions(e, r) {
        return this.dtFormatter(e, r).resolvedOptions()
    }

    num(e, r = 0) {
        if (this.opts.forceSimple) return Q(e, r);
        let a = {...this.opts};
        return r > 0 && (a.padTo = r), this.loc.numberFormatter(a).format(e)
    }

    formatDateTimeFromString(e, r) {
        let a = this.loc.listingMode() === "en", n = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
            s = (h, S) => this.loc.extract(e, h, S),
            o = h => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "",
            i = () => a ? ko(e) : s({hour: "numeric", hourCycle: "h12"}, "dayperiod"),
            c = (h, S) => a ? To(e, h) : s(S ? {month: h} : {month: h, day: "numeric"}, "month"),
            m = (h, S) => a ? Co(e, h) : s(S ? {weekday: h} : {weekday: h, month: "long", day: "numeric"}, "weekday"),
            u = h => {
                let S = q.macroTokenToFormatOpts(h);
                return S ? this.formatWithSystemDefault(e, S) : h
            }, v = h => a ? Fo(e, h) : s({era: h}, "era"), g = h => {
                switch (h) {
                    case"S":
                        return this.num(e.millisecond);
                    case"u":
                    case"SSS":
                        return this.num(e.millisecond, 3);
                    case"s":
                        return this.num(e.second);
                    case"ss":
                        return this.num(e.second, 2);
                    case"uu":
                        return this.num(Math.floor(e.millisecond / 10), 2);
                    case"uuu":
                        return this.num(Math.floor(e.millisecond / 100));
                    case"m":
                        return this.num(e.minute);
                    case"mm":
                        return this.num(e.minute, 2);
                    case"h":
                        return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
                    case"hh":
                        return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
                    case"H":
                        return this.num(e.hour);
                    case"HH":
                        return this.num(e.hour, 2);
                    case"Z":
                        return o({format: "narrow", allowZ: this.opts.allowZ});
                    case"ZZ":
                        return o({format: "short", allowZ: this.opts.allowZ});
                    case"ZZZ":
                        return o({format: "techie", allowZ: this.opts.allowZ});
                    case"ZZZZ":
                        return e.zone.offsetName(e.ts, {format: "short", locale: this.loc.locale});
                    case"ZZZZZ":
                        return e.zone.offsetName(e.ts, {format: "long", locale: this.loc.locale});
                    case"z":
                        return e.zoneName;
                    case"a":
                        return i();
                    case"d":
                        return n ? s({day: "numeric"}, "day") : this.num(e.day);
                    case"dd":
                        return n ? s({day: "2-digit"}, "day") : this.num(e.day, 2);
                    case"c":
                        return this.num(e.weekday);
                    case"ccc":
                        return m("short", !0);
                    case"cccc":
                        return m("long", !0);
                    case"ccccc":
                        return m("narrow", !0);
                    case"E":
                        return this.num(e.weekday);
                    case"EEE":
                        return m("short", !1);
                    case"EEEE":
                        return m("long", !1);
                    case"EEEEE":
                        return m("narrow", !1);
                    case"L":
                        return n ? s({month: "numeric", day: "numeric"}, "month") : this.num(e.month);
                    case"LL":
                        return n ? s({month: "2-digit", day: "numeric"}, "month") : this.num(e.month, 2);
                    case"LLL":
                        return c("short", !0);
                    case"LLLL":
                        return c("long", !0);
                    case"LLLLL":
                        return c("narrow", !0);
                    case"M":
                        return n ? s({month: "numeric"}, "month") : this.num(e.month);
                    case"MM":
                        return n ? s({month: "2-digit"}, "month") : this.num(e.month, 2);
                    case"MMM":
                        return c("short", !1);
                    case"MMMM":
                        return c("long", !1);
                    case"MMMMM":
                        return c("narrow", !1);
                    case"y":
                        return n ? s({year: "numeric"}, "year") : this.num(e.year);
                    case"yy":
                        return n ? s({year: "2-digit"}, "year") : this.num(e.year.toString().slice(-2), 2);
                    case"yyyy":
                        return n ? s({year: "numeric"}, "year") : this.num(e.year, 4);
                    case"yyyyyy":
                        return n ? s({year: "numeric"}, "year") : this.num(e.year, 6);
                    case"G":
                        return v("short");
                    case"GG":
                        return v("long");
                    case"GGGGG":
                        return v("narrow");
                    case"kk":
                        return this.num(e.weekYear.toString().slice(-2), 2);
                    case"kkkk":
                        return this.num(e.weekYear, 4);
                    case"W":
                        return this.num(e.weekNumber);
                    case"WW":
                        return this.num(e.weekNumber, 2);
                    case"o":
                        return this.num(e.ordinal);
                    case"ooo":
                        return this.num(e.ordinal, 3);
                    case"q":
                        return this.num(e.quarter);
                    case"qq":
                        return this.num(e.quarter, 2);
                    case"X":
                        return this.num(Math.floor(e.ts / 1e3));
                    case"x":
                        return this.num(e.ts);
                    default:
                        return u(h)
                }
            };
        return oa(q.parseFormat(r), g)
    }

    formatDurationFromString(e, r) {
        let a = c => {
                switch (c[0]) {
                    case"S":
                        return "millisecond";
                    case"s":
                        return "second";
                    case"m":
                        return "minute";
                    case"h":
                        return "hour";
                    case"d":
                        return "day";
                    case"w":
                        return "week";
                    case"M":
                        return "month";
                    case"y":
                        return "year";
                    default:
                        return null
                }
            }, n = c => m => {
                let u = a(m);
                return u ? this.num(c.get(u), m.length) : m
            }, s = q.parseFormat(r), o = s.reduce((c, {literal: m, val: u}) => m ? c : c.concat(u), []),
            i = e.shiftTo(...o.map(a).filter(c => c));
        return oa(s, n(i))
    }
}, de = class {
    constructor(e, r) {
        this.reason = e, this.explanation = r
    }

    toMessage() {
        return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason
    }
}, Ja = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

function st(...t) {
    let e = t.reduce((r, a) => r + a.source, "");
    return RegExp(`^${e}$`)
}

function it(...t) {
    return e => t.reduce(([r, a, n], s) => {
        let [o, i, c] = s(e, n);
        return [{...r, ...o}, i || a, c]
    }, [{}, null, 1]).slice(0, 2)
}

function lt(t, ...e) {
    if (t == null) return [null, null];
    for (let [r, a] of e) {
        let n = r.exec(t);
        if (n) return a(n)
    }
    return [null, null]
}

function Ka(...t) {
    return (e, r) => {
        let a = {}, n;
        for (n = 0; n < t.length; n++) a[t[n]] = Pe(e[r + n]);
        return [a, null, r + n]
    }
}

var Xa = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Mo = `(?:${Xa.source}?(?:\\[(${Ja.source})\\])?)?`,
    Mr = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, en = RegExp(`${Mr.source}${Mo}`),
    Rr = RegExp(`(?:T${en.source})?`), Ro = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    Lo = /(\d{4})-?W(\d\d)(?:-?(\d))?/, No = /(\d{4})-?(\d{3})/, Io = Ka("weekYear", "weekNumber", "weekDay"),
    Eo = Ka("year", "ordinal"), Do = /(\d{4})-(\d\d)-(\d\d)/,
    tn = RegExp(`${Mr.source} ?(?:${Xa.source}|(${Ja.source}))?`), Po = RegExp(`(?: ${tn.source})?`);

function at(t, e, r) {
    let a = t[e];
    return k(a) ? r : Pe(a)
}

function _o(t, e) {
    return [{year: at(t, e), month: at(t, e + 1, 1), day: at(t, e + 2, 1)}, null, e + 3]
}

function ct(t, e) {
    return [{
        hours: at(t, e, 0),
        minutes: at(t, e + 1, 0),
        seconds: at(t, e + 2, 0),
        milliseconds: Vr(t[e + 3])
    }, null, e + 4]
}

function wt(t, e) {
    let r = !t[e] && !t[e + 1], a = Zt(t[e + 1], t[e + 2]), n = r ? null : Z.instance(a);
    return [{}, n, e + 3]
}

function St(t, e) {
    let r = t[e] ? Y.create(t[e]) : null;
    return [{}, r, e + 1]
}

var Go = RegExp(`^T?${Mr.source}$`),
    jo = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function zo(t) {
    let [e, r, a, n, s, o, i, c, m] = t, u = e[0] === "-", v = c && c[0] === "-",
        g = (h, S = !1) => h !== void 0 && (S || h && u) ? -h : h;
    return [{
        years: g(Ze(r)),
        months: g(Ze(a)),
        weeks: g(Ze(n)),
        days: g(Ze(s)),
        hours: g(Ze(o)),
        minutes: g(Ze(i)),
        seconds: g(Ze(c), c === "-0"),
        milliseconds: g(Vr(m), v)
    }]
}

var Bo = {GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};

function Lr(t, e, r, a, n, s, o) {
    let i = {
        year: e.length === 2 ? Tr(Pe(e)) : Pe(e),
        month: Ua.indexOf(r) + 1,
        day: Pe(a),
        hour: Pe(n),
        minute: Pe(s)
    };
    return o && (i.second = Pe(o)), t && (i.weekday = t.length > 3 ? qa.indexOf(t) + 1 : Wa.indexOf(t) + 1), i
}

var Qo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function Ho(t) {
    let [, e, r, a, n, s, o, i, c, m, u, v] = t, g = Lr(e, n, a, r, s, o, i), h;
    return h = c ? Bo[c] : m ? 0 : Zt(u, v), [g, new Z(h)]
}

function Uo(t) {
    return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
}

var Ao = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    qo = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    Wo = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function sa(t) {
    let [, e, r, a, n, s, o, i] = t;
    return [Lr(e, n, a, r, s, o, i), Z.utcInstance]
}

function Zo(t) {
    let [, e, r, a, n, s, o, i] = t;
    return [Lr(e, i, r, a, n, s, o), Z.utcInstance]
}

var $o = st(Ro, Rr), Yo = st(Lo, Rr), Jo = st(No, Rr), Ko = st(en), rn = it(_o, ct, wt, St), Xo = it(Io, ct, wt, St),
    es = it(Eo, ct, wt, St), ts = it(ct, wt, St);

function rs(t) {
    return lt(t, [$o, rn], [Yo, Xo], [Jo, es], [Ko, ts])
}

function as(t) {
    return lt(Uo(t), [Qo, Ho])
}

function ns(t) {
    return lt(t, [Ao, sa], [qo, sa], [Wo, Zo])
}

function os(t) {
    return lt(t, [jo, zo])
}

var ss = it(ct);

function is(t) {
    return lt(t, [Go, ss])
}

var ls = st(Do, Po), cs = st(tn), ms = it(ct, wt, St);

function ds(t) {
    return lt(t, [ls, rn], [cs, ms])
}

var ia = "Invalid Duration", an = {
        weeks: {days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5},
        days: {hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5},
        hours: {minutes: 60, seconds: 3600, milliseconds: 36e5},
        minutes: {seconds: 60, milliseconds: 6e4},
        seconds: {milliseconds: 1e3}
    }, us = {
        years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 8760,
            minutes: 525600,
            seconds: 31536e3,
            milliseconds: 31536e6
        },
        quarters: {months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5},
        months: {weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6}, ...an
    }, fe = 365.2425, et = 30.436875, fs = {
        years: {
            quarters: 4,
            months: 12,
            weeks: fe / 7,
            days: fe,
            hours: 24 * fe,
            minutes: 24 * fe * 60,
            seconds: 24 * fe * 60 * 60,
            milliseconds: 24 * fe * 60 * 60 * 1e3
        },
        quarters: {
            months: 3,
            weeks: fe / 28,
            days: fe / 4,
            hours: 24 * fe / 4,
            minutes: 24 * fe * 60 / 4,
            seconds: 24 * fe * 60 * 60 / 4,
            milliseconds: 24 * fe * 60 * 60 * 1e3 / 4
        },
        months: {
            weeks: et / 7,
            days: et,
            hours: 24 * et,
            minutes: 24 * et * 60,
            seconds: 24 * et * 60 * 60,
            milliseconds: 24 * et * 60 * 60 * 1e3
        }, ...an
    }, Je = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
    hs = Je.slice(0).reverse();

function De(t, e, r = !1) {
    let a = {
        values: r ? e.values : {...t.values, ...e.values || {}},
        loc: t.loc.clone(e.loc),
        conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
        matrix: e.matrix || t.matrix
    };
    return new C(a)
}

function nn(t, e) {
    let r = e.milliseconds ?? 0;
    for (let a of hs.slice(1)) e[a] && (r += e[a] * t[a].milliseconds);
    return r
}

function la(t, e) {
    let r = nn(t, e) < 0 ? -1 : 1;
    Je.reduceRight((a, n) => {
        if (k(e[n])) return a;
        if (a) {
            let s = e[a] * r, o = t[n][a], i = Math.floor(s / o);
            e[n] += i * r, e[a] -= i * o * r
        }
        return n
    }, null), Je.reduce((a, n) => {
        if (k(e[n])) return a;
        if (a) {
            let s = e[a] % 1;
            e[a] -= s, e[n] += s * t[a][n]
        }
        return n
    }, null)
}

function ps(t) {
    let e = {};
    for (let [r, a] of Object.entries(t)) a !== 0 && (e[r] = a);
    return e
}

var C = class {
    constructor(e) {
        let r = e.conversionAccuracy === "longterm" || !1, a = r ? fs : us;
        e.matrix && (a = e.matrix), this.values = e.values, this.loc = e.loc || I.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = a, this.isLuxonDuration = !0
    }

    static fromMillis(e, r) {
        return C.fromObject({milliseconds: e}, r)
    }

    static fromObject(e, r = {}) {
        if (e == null || typeof e != "object") throw new le("Duration.fromObject: argument expected to be an object, got " + (e === null ? "null" : typeof e));
        return new C({
            values: At(e, C.normalizeUnit),
            loc: I.fromObject(r),
            conversionAccuracy: r.conversionAccuracy,
            matrix: r.matrix
        })
    }

    static fromDurationLike(e) {
        if (Ke(e)) return C.fromMillis(e);
        if (C.isDuration(e)) return e;
        if (typeof e == "object") return C.fromObject(e);
        throw new le(`Unknown duration argument ${e} of type ${typeof e}`)
    }

    static fromISO(e, r) {
        let [a] = os(e);
        return a ? C.fromObject(a, r) : C.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
    }

    static fromISOTime(e, r) {
        let [a] = is(e);
        return a ? C.fromObject(a, r) : C.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
    }

    static invalid(e, r = null) {
        if (!e) throw new le("need to specify a reason the Duration is invalid");
        let a = e instanceof de ? e : new de(e, r);
        if (j.throwOnInvalid) throw new yr(a);
        return new C({invalid: a})
    }

    static normalizeUnit(e) {
        let r = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[e && e.toLowerCase()];
        if (!r) throw new Bt(e);
        return r
    }

    static isDuration(e) {
        return e && e.isLuxonDuration || !1
    }

    get locale() {
        return this.isValid ? this.loc.locale : null
    }

    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null
    }

    toFormat(e, r = {}) {
        let a = {...r, floor: r.round !== !1 && r.floor !== !1};
        return this.isValid ? q.create(this.loc, a).formatDurationFromString(this, e) : ia
    }

    toHuman(e = {}) {
        if (!this.isValid) return ia;
        let r = Je.map(a => {
            let n = this.values[a];
            return k(n) ? null : this.loc.numberFormatter({
                style: "unit",
                unitDisplay: "long", ...e,
                unit: a.slice(0, -1)
            }).format(n)
        }).filter(a => a);
        return this.loc.listFormatter({type: "conjunction", style: e.listStyle || "narrow", ...e}).format(r)
    }

    toObject() {
        return this.isValid ? {...this.values} : {}
    }

    toISO() {
        if (!this.isValid) return null;
        let e = "P";
        return this.years !== 0 && (e += this.years + "Y"), this.months === 0 && this.quarters === 0 || (e += this.months + 3 * this.quarters + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0 || (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), this.seconds === 0 && this.milliseconds === 0 || (e += Or(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e
    }

    toISOTime(e = {}) {
        if (!this.isValid) return null;
        let r = this.toMillis();
        return r < 0 || r >= 864e5 ? null : (e = {
            suppressMilliseconds: !1,
            suppressSeconds: !1,
            includePrefix: !1,
            format: "extended", ...e,
            includeOffset: !1
        }, w.fromMillis(r, {zone: "UTC"}).toISOTime(e))
    }

    toJSON() {
        return this.toISO()
    }

    toString() {
        return this.toISO()
    }

    toMillis() {
        return this.isValid ? nn(this.matrix, this.values) : NaN
    }

    valueOf() {
        return this.toMillis()
    }

    plus(e) {
        if (!this.isValid) return this;
        let r = C.fromDurationLike(e), a = {};
        for (let n of Je) (ot(r.values, n) || ot(this.values, n)) && (a[n] = r.get(n) + this.get(n));
        return De(this, {values: a}, !0)
    }

    minus(e) {
        if (!this.isValid) return this;
        let r = C.fromDurationLike(e);
        return this.plus(r.negate())
    }

    mapUnits(e) {
        if (!this.isValid) return this;
        let r = {};
        for (let a of Object.keys(this.values)) r[a] = Ha(e(this.values[a], a));
        return De(this, {values: r}, !0)
    }

    get(e) {
        return this[C.normalizeUnit(e)]
    }

    set(e) {
        if (!this.isValid) return this;
        let r = {...this.values, ...At(e, C.normalizeUnit)};
        return De(this, {values: r})
    }

    reconfigure({locale: e, numberingSystem: r, conversionAccuracy: a, matrix: n} = {}) {
        let o = {loc: this.loc.clone({locale: e, numberingSystem: r}), matrix: n, conversionAccuracy: a};
        return De(this, o)
    }

    as(e) {
        return this.isValid ? this.shiftTo(e).get(e) : NaN
    }

    normalize() {
        if (!this.isValid) return this;
        let e = this.toObject();
        return la(this.matrix, e), De(this, {values: e}, !0)
    }

    rescale() {
        if (!this.isValid) return this;
        let e = ps(this.normalize().shiftToAll().toObject());
        return De(this, {values: e}, !0)
    }

    shiftTo(...e) {
        if (!this.isValid) return this;
        if (e.length === 0) return this;
        e = e.map(o => C.normalizeUnit(o));
        let r = {}, a = {}, n = this.toObject(), s;
        for (let o of Je) if (e.indexOf(o) >= 0) {
            s = o;
            let i = 0;
            for (let m in a) i += this.matrix[m][o] * a[m], a[m] = 0;
            Ke(n[o]) && (i += n[o]);
            let c = Math.trunc(i);
            r[o] = c, a[o] = (1e3 * i - 1e3 * c) / 1e3
        } else Ke(n[o]) && (a[o] = n[o]);
        for (let o in a) a[o] !== 0 && (r[s] += o === s ? a[o] : a[o] / this.matrix[s][o]);
        return la(this.matrix, r), De(this, {values: r}, !0)
    }

    shiftToAll() {
        return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
    }

    negate() {
        if (!this.isValid) return this;
        let e = {};
        for (let r of Object.keys(this.values)) e[r] = this.values[r] === 0 ? 0 : -this.values[r];
        return De(this, {values: e}, !0)
    }

    get years() {
        return this.isValid ? this.values.years || 0 : NaN
    }

    get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN
    }

    get months() {
        return this.isValid ? this.values.months || 0 : NaN
    }

    get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN
    }

    get days() {
        return this.isValid ? this.values.days || 0 : NaN
    }

    get hours() {
        return this.isValid ? this.values.hours || 0 : NaN
    }

    get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN
    }

    get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN
    }

    get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN
    }

    get isValid() {
        return this.invalid === null
    }

    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }

    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }

    equals(e) {
        if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return !1;

        function r(a, n) {
            return a === void 0 || a === 0 ? n === void 0 || n === 0 : a === n
        }

        for (let a of Je) if (!r(this.values[a], e.values[a])) return !1;
        return !0
    }
}, tt = "Invalid Interval";

function ys(t, e) {
    return t && t.isValid ? e && e.isValid ? e < t ? P.invalid("end before start", `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`) : null : P.invalid("missing or invalid end") : P.invalid("missing or invalid start")
}

var P = class {
    constructor(e) {
        this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0
    }

    static invalid(e, r = null) {
        if (!e) throw new le("need to specify a reason the Interval is invalid");
        let a = e instanceof de ? e : new de(e, r);
        if (j.throwOnInvalid) throw new pr(a);
        return new P({invalid: a})
    }

    static fromDateTimes(e, r) {
        let a = yt(e), n = yt(r), s = ys(a, n);
        return s ?? new P({start: a, end: n})
    }

    static after(e, r) {
        let a = C.fromDurationLike(r), n = yt(e);
        return P.fromDateTimes(n, n.plus(a))
    }

    static before(e, r) {
        let a = C.fromDurationLike(r), n = yt(e);
        return P.fromDateTimes(n.minus(a), n)
    }

    static fromISO(e, r) {
        let [a, n] = (e || "").split("/", 2);
        if (a && n) {
            let s, o;
            try {
                s = w.fromISO(a, r), o = s.isValid
            } catch {
                o = !1
            }
            let i, c;
            try {
                i = w.fromISO(n, r), c = i.isValid
            } catch {
                c = !1
            }
            if (o && c) return P.fromDateTimes(s, i);
            if (o) {
                let m = C.fromISO(n, r);
                if (m.isValid) return P.after(s, m)
            } else if (c) {
                let m = C.fromISO(a, r);
                if (m.isValid) return P.before(i, m)
            }
        }
        return P.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
    }

    static isInterval(e) {
        return e && e.isLuxonInterval || !1
    }

    get start() {
        return this.isValid ? this.s : null
    }

    get end() {
        return this.isValid ? this.e : null
    }

    get isValid() {
        return this.invalidReason === null
    }

    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }

    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }

    length(e = "milliseconds") {
        return this.isValid ? this.toDuration(e).get(e) : NaN
    }

    count(e = "milliseconds") {
        if (!this.isValid) return NaN;
        let r = this.start.startOf(e), a = this.end.startOf(e);
        return Math.floor(a.diff(r, e).get(e)) + (a.valueOf() !== this.end.valueOf())
    }

    hasSame(e) {
        return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
    }

    isEmpty() {
        return this.s.valueOf() === this.e.valueOf()
    }

    isAfter(e) {
        return !!this.isValid && this.s > e
    }

    isBefore(e) {
        return !!this.isValid && this.e <= e
    }

    contains(e) {
        return !!this.isValid && this.s <= e && this.e > e
    }

    set({start: e, end: r} = {}) {
        return this.isValid ? P.fromDateTimes(e || this.s, r || this.e) : this
    }

    splitAt(...e) {
        if (!this.isValid) return [];
        let r = e.map(yt).filter(o => this.contains(o)).sort(), a = [], {s: n} = this, s = 0;
        for (; n < this.e;) {
            let o = r[s] || this.e, i = +o > +this.e ? this.e : o;
            a.push(P.fromDateTimes(n, i)), n = i, s += 1
        }
        return a
    }

    splitBy(e) {
        let r = C.fromDurationLike(e);
        if (!this.isValid || !r.isValid || r.as("milliseconds") === 0) return [];
        let a, {s: n} = this, s = 1, o = [];
        for (; n < this.e;) {
            let i = this.start.plus(r.mapUnits(c => c * s));
            a = +i > +this.e ? this.e : i, o.push(P.fromDateTimes(n, a)), n = a, s += 1
        }
        return o
    }

    divideEqually(e) {
        return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
    }

    overlaps(e) {
        return this.e > e.s && this.s < e.e
    }

    abutsStart(e) {
        return !!this.isValid && +this.e == +e.s
    }

    abutsEnd(e) {
        return !!this.isValid && +e.e == +this.s
    }

    engulfs(e) {
        return !!this.isValid && this.s <= e.s && this.e >= e.e
    }

    equals(e) {
        return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
    }

    intersection(e) {
        if (!this.isValid) return this;
        let r = this.s > e.s ? this.s : e.s, a = this.e < e.e ? this.e : e.e;
        return r >= a ? null : P.fromDateTimes(r, a)
    }

    union(e) {
        if (!this.isValid) return this;
        let r = this.s < e.s ? this.s : e.s, a = this.e > e.e ? this.e : e.e;
        return P.fromDateTimes(r, a)
    }

    static merge(e) {
        let [r, a] = e.sort((n, s) => n.s - s.s).reduce(([n, s], o) => s ? s.overlaps(o) || s.abutsStart(o) ? [n, s.union(o)] : [n.concat([s]), o] : [n, o], [[], null]);
        return a && r.push(a), r
    }

    static xor(e) {
        let r = null, a = 0, n = [], s = e.map(c => [{time: c.s, type: "s"}, {time: c.e, type: "e"}]),
            o = Array.prototype.concat(...s), i = o.sort((c, m) => c.time - m.time);
        for (let c of i) a += c.type === "s" ? 1 : -1, a === 1 ? r = c.time : (r && +r != +c.time && n.push(P.fromDateTimes(r, c.time)), r = null);
        return P.merge(n)
    }

    difference(...e) {
        return P.xor([this].concat(e)).map(r => this.intersection(r)).filter(r => r && !r.isEmpty())
    }

    toString() {
        return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : tt
    }

    toLocaleString(e = Qt, r = {}) {
        return this.isValid ? q.create(this.s.loc.clone(r), e).formatInterval(this) : tt
    }

    toISO(e) {
        return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : tt
    }

    toISODate() {
        return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : tt
    }

    toISOTime(e) {
        return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : tt
    }

    toFormat(e, {separator: r = " \u2013 "} = {}) {
        return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : tt
    }

    toDuration(e, r) {
        return this.isValid ? this.e.diff(this.s, e, r) : C.invalid(this.invalidReason)
    }

    mapEndpoints(e) {
        return P.fromDateTimes(e(this.s), e(this.e))
    }
}, rt = class {
    static hasDST(e = j.defaultZone) {
        let r = w.now().setZone(e).set({month: 12});
        return !e.isUniversal && r.offset !== r.set({month: 6}).offset
    }

    static isValidIANAZone(e) {
        return Y.isValidZone(e)
    }

    static normalizeZone(e) {
        return _e(e, j.defaultZone)
    }

    static months(e = "long", {
        locale: r = null,
        numberingSystem: a = null,
        locObj: n = null,
        outputCalendar: s = "gregory"
    } = {}) {
        return (n || I.create(r, a, s)).months(e)
    }

    static monthsFormat(e = "long", {
        locale: r = null,
        numberingSystem: a = null,
        locObj: n = null,
        outputCalendar: s = "gregory"
    } = {}) {
        return (n || I.create(r, a, s)).months(e, !0)
    }

    static weekdays(e = "long", {locale: r = null, numberingSystem: a = null, locObj: n = null} = {}) {
        return (n || I.create(r, a, null)).weekdays(e)
    }

    static weekdaysFormat(e = "long", {locale: r = null, numberingSystem: a = null, locObj: n = null} = {}) {
        return (n || I.create(r, a, null)).weekdays(e, !0)
    }

    static meridiems({locale: e = null} = {}) {
        return I.create(e).meridiems()
    }

    static eras(e = "short", {locale: r = null} = {}) {
        return I.create(r, null, "gregory").eras(e)
    }

    static features() {
        return {relative: Ba()}
    }
};

function ca(t, e) {
    let r = n => n.toUTC(0, {keepLocalTime: !0}).startOf("day").valueOf(), a = r(e) - r(t);
    return Math.floor(C.fromMillis(a).as("days"))
}

function gs(t, e, r) {
    let a = [["years", (c, m) => m.year - c.year], ["quarters", (c, m) => m.quarter - c.quarter + 4 * (m.year - c.year)], ["months", (c, m) => m.month - c.month + 12 * (m.year - c.year)], ["weeks", (c, m) => {
        let u = ca(c, m);
        return (u - u % 7) / 7
    }], ["days", ca]], n = {}, s = t, o, i;
    for (let [c, m] of a) r.indexOf(c) >= 0 && (o = c, n[c] = m(t, e), i = s.plus(n), i > e ? (n[c]--, t = s.plus(n), t > e && (i = t, n[c]--, t = s.plus(n))) : t = i);
    return [t, n, i, o]
}

function xs(t, e, r, a) {
    let [n, s, o, i] = gs(t, e, r), c = e - n,
        m = r.filter(v => ["hours", "minutes", "seconds", "milliseconds"].indexOf(v) >= 0);
    m.length === 0 && (o < e && (o = n.plus({[i]: 1})), o !== n && (s[i] = (s[i] || 0) + c / (o - n)));
    let u = C.fromObject(s, a);
    return m.length > 0 ? C.fromMillis(c, a).shiftTo(...m).plus(u) : u
}

var Nr = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
}, ma = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881]
}, vs = Nr.hanidec.replace(/[\[|\]]/g, "").split("");

function bs(t) {
    let e = parseInt(t, 10);
    if (isNaN(e)) {
        e = "";
        for (let r = 0; r < t.length; r++) {
            let a = t.charCodeAt(r);
            if (t[r].search(Nr.hanidec) !== -1) e += vs.indexOf(t[r]); else for (let n in ma) {
                let [s, o] = ma[n];
                a >= s && a <= o && (e += a - s)
            }
        }
        return parseInt(e, 10)
    }
    return e
}

function be({numberingSystem: t}, e = "") {
    return new RegExp(`${Nr[t || "latn"]}${e}`)
}

var ws = "missing Intl.DateTimeFormat.formatToParts support";

function M(t, e = r => r) {
    return {regex: t, deser: ([r]) => e(bs(r))}
}

var Ss = String.fromCharCode(160), on = `[ ${Ss}]`, sn = new RegExp(on, "g");

function ks(t) {
    return t.replace(/\./g, "\\.?").replace(sn, on)
}

function da(t) {
    return t.replace(/\./g, "").replace(sn, " ").toLowerCase()
}

function we(t, e) {
    return t === null ? null : {
        regex: RegExp(t.map(ks).join("|")),
        deser: ([r]) => t.findIndex(a => da(r) === da(a)) + e
    }
}

function ua(t, e) {
    return {regex: t, deser: ([, r, a]) => Zt(r, a), groups: e}
}

function Dt(t) {
    return {regex: t, deser: ([e]) => e}
}

function Cs(t) {
    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
}

function Ts(t, e) {
    let r = be(e), a = be(e, "{2}"), n = be(e, "{3}"), s = be(e, "{4}"), o = be(e, "{6}"), i = be(e, "{1,2}"),
        c = be(e, "{1,3}"), m = be(e, "{1,6}"), u = be(e, "{1,9}"), v = be(e, "{2,4}"), g = be(e, "{4,6}"),
        h = x => ({regex: RegExp(Cs(x.val)), deser: ([R]) => R, literal: !0}), T = (x => {
            if (t.literal) return h(x);
            switch (x.val) {
                case"G":
                    return we(e.eras("short"), 0);
                case"GG":
                    return we(e.eras("long"), 0);
                case"y":
                    return M(m);
                case"yy":
                    return M(v, Tr);
                case"yyyy":
                    return M(s);
                case"yyyyy":
                    return M(g);
                case"yyyyyy":
                    return M(o);
                case"M":
                    return M(i);
                case"MM":
                    return M(a);
                case"MMM":
                    return we(e.months("short", !0), 1);
                case"MMMM":
                    return we(e.months("long", !0), 1);
                case"L":
                    return M(i);
                case"LL":
                    return M(a);
                case"LLL":
                    return we(e.months("short", !1), 1);
                case"LLLL":
                    return we(e.months("long", !1), 1);
                case"d":
                    return M(i);
                case"dd":
                    return M(a);
                case"o":
                    return M(c);
                case"ooo":
                    return M(n);
                case"HH":
                    return M(a);
                case"H":
                    return M(i);
                case"hh":
                    return M(a);
                case"h":
                    return M(i);
                case"mm":
                    return M(a);
                case"m":
                    return M(i);
                case"q":
                    return M(i);
                case"qq":
                    return M(a);
                case"s":
                    return M(i);
                case"ss":
                    return M(a);
                case"S":
                    return M(c);
                case"SSS":
                    return M(n);
                case"u":
                    return Dt(u);
                case"uu":
                    return Dt(i);
                case"uuu":
                    return M(r);
                case"a":
                    return we(e.meridiems(), 0);
                case"kkkk":
                    return M(s);
                case"kk":
                    return M(v, Tr);
                case"W":
                    return M(i);
                case"WW":
                    return M(a);
                case"E":
                case"c":
                    return M(r);
                case"EEE":
                    return we(e.weekdays("short", !1), 1);
                case"EEEE":
                    return we(e.weekdays("long", !1), 1);
                case"ccc":
                    return we(e.weekdays("short", !0), 1);
                case"cccc":
                    return we(e.weekdays("long", !0), 1);
                case"Z":
                case"ZZ":
                    return ua(new RegExp(`([+-]${i.source})(?::(${a.source}))?`), 2);
                case"ZZZ":
                    return ua(new RegExp(`([+-]${i.source})(${a.source})?`), 2);
                case"z":
                    return Dt(/[a-z_+-/]{1,256}?/i);
                case" ":
                    return Dt(/[^\S\n\r]/);
                default:
                    return h(x)
            }
        })(t) || {invalidReason: ws};
    return T.token = t, T
}

var Fs = {
    year: {"2-digit": "yy", numeric: "yyyyy"},
    month: {numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM"},
    day: {numeric: "d", "2-digit": "dd"},
    weekday: {short: "EEE", long: "EEEE"},
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {numeric: "h", "2-digit": "hh"},
    hour24: {numeric: "H", "2-digit": "HH"},
    minute: {numeric: "m", "2-digit": "mm"},
    second: {numeric: "s", "2-digit": "ss"},
    timeZoneName: {long: "ZZZZZ", short: "ZZZ"}
};

function Vs(t, e, r) {
    let {type: a, value: n} = t;
    if (a === "literal") {
        let c = /^\s+$/.test(n);
        return {literal: !c, val: c ? " " : n}
    }
    let s = e[a], o = a;
    a === "hour" && (o = e.hour12 != null ? e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? "hour12" : "hour24" : r.hour12 ? "hour12" : "hour24");
    let i = Fs[o];
    if (typeof i == "object" && (i = i[s]), i) return {literal: !1, val: i}
}

function Os(t) {
    return [`^${t.map(r => r.regex).reduce((r, a) => `${r}(${a.source})`, "")}$`, t]
}

function Ms(t, e, r) {
    let a = t.match(e);
    if (a) {
        let n = {}, s = 1;
        for (let o in r) if (ot(r, o)) {
            let i = r[o], c = i.groups ? i.groups + 1 : 1;
            !i.literal && i.token && (n[i.token.val[0]] = i.deser(a.slice(s, s + c))), s += c
        }
        return [a, n]
    }
    return [a, {}]
}

function Rs(t) {
    let e = s => {
        switch (s) {
            case"S":
                return "millisecond";
            case"s":
                return "second";
            case"m":
                return "minute";
            case"h":
            case"H":
                return "hour";
            case"d":
                return "day";
            case"o":
                return "ordinal";
            case"L":
            case"M":
                return "month";
            case"y":
                return "year";
            case"E":
            case"c":
                return "weekday";
            case"W":
                return "weekNumber";
            case"k":
                return "weekYear";
            case"q":
                return "quarter";
            default:
                return null
        }
    }, r = null, a;
    return k(t.z) || (r = Y.create(t.z)), k(t.Z) || (r || (r = new Z(t.Z)), a = t.Z), k(t.q) || (t.M = 3 * (t.q - 1) + 1), k(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), k(t.u) || (t.S = Vr(t.u)), [Object.keys(t).reduce((s, o) => {
        let i = e(o);
        return i && (s[i] = t[o]), s
    }, {}), r, a]
}

var cr = null;

function Ls() {
    return cr || (cr = w.fromMillis(1555555555555)), cr
}

function Ns(t, e) {
    if (t.literal) return t;
    let r = q.macroTokenToFormatOpts(t.val), a = mn(r, e);
    return a == null || a.includes(void 0) ? t : a
}

function ln(t, e) {
    return Array.prototype.concat(...t.map(r => Ns(r, e)))
}

function cn(t, e, r) {
    let a = ln(q.parseFormat(r), t), n = a.map(o => Ts(o, t)), s = n.find(o => o.invalidReason);
    if (s) return {input: e, tokens: a, invalidReason: s.invalidReason};
    {
        let [o, i] = Os(n), c = RegExp(o, "i"), [m, u] = Ms(e, c, i), [v, g, h] = u ? Rs(u) : [null, null, void 0];
        if (ot(u, "a") && ot(u, "H")) throw new Ye("Can't include meridiem when specifying 24-hour format");
        return {input: e, tokens: a, regex: c, rawMatches: m, matches: u, result: v, zone: g, specificOffset: h}
    }
}

function Is(t, e, r) {
    let {result: a, zone: n, specificOffset: s, invalidReason: o} = cn(t, e, r);
    return [a, n, s, o]
}

function mn(t, e) {
    if (!t) return null;
    let a = q.create(e, t).dtFormatter(Ls()), n = a.formatToParts(), s = a.resolvedOptions();
    return n.map(o => Vs(o, t, s))
}

var dn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    un = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function he(t, e) {
    return new de("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)
}

function fn(t, e, r) {
    let a = new Date(Date.UTC(t, e - 1, r));
    t < 100 && t >= 0 && a.setUTCFullYear(a.getUTCFullYear() - 1900);
    let n = a.getUTCDay();
    return n === 0 ? 7 : n
}

function hn(t, e, r) {
    return r + (bt(t) ? un : dn)[e - 1]
}

function pn(t, e) {
    let r = bt(t) ? un : dn, a = r.findIndex(s => s < e), n = e - r[a];
    return {month: a + 1, day: n}
}

function Fr(t) {
    let {year: e, month: r, day: a} = t, n = hn(e, r, a), s = fn(e, r, a), o, i = Math.floor((n - s + 10) / 7);
    return i < 1 ? (o = e - 1, i = Ut(o)) : i > Ut(e) ? (o = e + 1, i = 1) : o = e, {
        weekYear: o,
        weekNumber: i,
        weekday: s, ...$t(t)
    }
}

function fa(t) {
    let {weekYear: e, weekNumber: r, weekday: a} = t, n = fn(e, 1, 4), s = xt(e), o, i = 7 * r + a - n - 3;
    i < 1 ? (o = e - 1, i += xt(o)) : i > s ? (o = e + 1, i -= xt(e)) : o = e;
    let {month: c, day: m} = pn(o, i);
    return {year: o, month: c, day: m, ...$t(t)}
}

function mr(t) {
    let {year: e, month: r, day: a} = t, n = hn(e, r, a);
    return {year: e, ordinal: n, ...$t(t)}
}

function ha(t) {
    let {year: e, ordinal: r} = t, {month: a, day: n} = pn(e, r);
    return {year: e, month: a, day: n, ...$t(t)}
}

function Es(t) {
    let e = qt(t.weekYear), r = Oe(t.weekNumber, 1, Ut(t.weekYear)), a = Oe(t.weekday, 1, 7);
    return e ? r ? !a && he("weekday", t.weekday) : he("week", t.week) : he("weekYear", t.weekYear)
}

function Ds(t) {
    let e = qt(t.year), r = Oe(t.ordinal, 1, xt(t.year));
    return e ? !r && he("ordinal", t.ordinal) : he("year", t.year)
}

function yn(t) {
    let e = qt(t.year), r = Oe(t.month, 1, 12), a = Oe(t.day, 1, Ht(t.year, t.month));
    return e ? r ? !a && he("day", t.day) : he("month", t.month) : he("year", t.year)
}

function gn(t) {
    let {hour: e, minute: r, second: a, millisecond: n} = t,
        s = Oe(e, 0, 23) || e === 24 && r === 0 && a === 0 && n === 0, o = Oe(r, 0, 59), i = Oe(a, 0, 59),
        c = Oe(n, 0, 999);
    return s ? o ? i ? !c && he("millisecond", n) : he("second", a) : he("minute", r) : he("hour", e)
}

var dr = "Invalid DateTime", pa = 864e13;

function Pt(t) {
    return new de("unsupported zone", `the zone "${t.name}" is not supported`)
}

function ur(t) {
    return t.weekData === null && (t.weekData = Fr(t.c)), t.weekData
}

function $e(t, e) {
    let r = {ts: t.ts, zone: t.zone, c: t.c, o: t.o, loc: t.loc, invalid: t.invalid};
    return new w({...r, ...e, old: r})
}

function xn(t, e, r) {
    let a = t - 60 * e * 1e3, n = r.offset(a);
    if (e === n) return [a, e];
    a -= 60 * (n - e) * 1e3;
    let s = r.offset(a);
    return n === s ? [a, n] : [t - 60 * Math.min(n, s) * 1e3, Math.max(n, s)]
}

function _t(t, e) {
    t += 60 * e * 1e3;
    let r = new Date(t);
    return {
        year: r.getUTCFullYear(),
        month: r.getUTCMonth() + 1,
        day: r.getUTCDate(),
        hour: r.getUTCHours(),
        minute: r.getUTCMinutes(),
        second: r.getUTCSeconds(),
        millisecond: r.getUTCMilliseconds()
    }
}

function zt(t, e, r) {
    return xn(Wt(t), e, r)
}

function ya(t, e) {
    let r = t.o, a = t.c.year + Math.trunc(e.years), n = t.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters),
        s = {
            ...t.c,
            year: a,
            month: n,
            day: Math.min(t.c.day, Ht(a, n)) + Math.trunc(e.days) + 7 * Math.trunc(e.weeks)
        }, o = C.fromObject({
            years: e.years - Math.trunc(e.years),
            quarters: e.quarters - Math.trunc(e.quarters),
            months: e.months - Math.trunc(e.months),
            weeks: e.weeks - Math.trunc(e.weeks),
            days: e.days - Math.trunc(e.days),
            hours: e.hours,
            minutes: e.minutes,
            seconds: e.seconds,
            milliseconds: e.milliseconds
        }).as("milliseconds"), i = Wt(s), [c, m] = xn(i, r, t.zone);
    return o !== 0 && (c += o, m = t.zone.offset(c)), {ts: c, o: m}
}

function pt(t, e, r, a, n, s) {
    let {setZone: o, zone: i} = r;
    if (t && Object.keys(t).length !== 0 || e) {
        let c = e || i, m = w.fromObject(t, {...r, zone: c, specificOffset: s});
        return o ? m : m.setZone(i)
    }
    return w.invalid(new de("unparsable", `the input "${n}" can't be parsed as ${a}`))
}

function Gt(t, e, r = !0) {
    return t.isValid ? q.create(I.create("en-US"), {allowZ: r, forceSimple: !0}).formatDateTimeFromString(t, e) : null
}

function fr(t, e) {
    let r = t.c.year > 9999 || t.c.year < 0, a = "";
    return r && t.c.year >= 0 && (a += "+"), a += Q(t.c.year, r ? 6 : 4), e ? (a += "-", a += Q(t.c.month), a += "-", a += Q(t.c.day)) : (a += Q(t.c.month), a += Q(t.c.day)), a
}

function ga(t, e, r, a, n, s) {
    let o = Q(t.c.hour);
    return e ? (o += ":", o += Q(t.c.minute), t.c.millisecond === 0 && t.c.second === 0 && r || (o += ":")) : o += Q(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (o += Q(t.c.second), (t.c.millisecond !== 0 || !a) && (o += ".", o += Q(t.c.millisecond, 3))), n && (t.isOffsetFixed && t.offset === 0 && !s ? o += "Z" : t.o < 0 ? (o += "-", o += Q(Math.trunc(-t.o / 60)), o += ":", o += Q(Math.trunc(-t.o % 60))) : (o += "+", o += Q(Math.trunc(t.o / 60)), o += ":", o += Q(Math.trunc(t.o % 60)))), s && (o += "[" + t.zone.ianaName + "]"), o
}

var vn = {month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0},
    Ps = {weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0},
    _s = {ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0},
    bn = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    Gs = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    js = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

function xa(t) {
    let e = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[t.toLowerCase()];
    if (!e) throw new Bt(t);
    return e
}

function va(t, e) {
    let r = _e(e.zone, j.defaultZone), a = I.fromObject(e), n = j.now(), s, o;
    if (k(t.year)) s = n; else {
        for (let m of bn) k(t[m]) && (t[m] = vn[m]);
        let i = yn(t) || gn(t);
        if (i) return w.invalid(i);
        let c = r.offset(n);
        [s, o] = zt(t, c, r)
    }
    return new w({ts: s, zone: r, loc: a, o})
}

function ba(t, e, r) {
    let a = !!k(r.round) || r.round,
        n = (o, i) => (o = Or(o, a || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(o, i)),
        s = o => r.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
    if (r.unit) return n(s(r.unit), r.unit);
    for (let o of r.units) {
        let i = s(o);
        if (Math.abs(i) >= 1) return n(i, o)
    }
    return n(t > e ? -0 : 0, r.units[r.units.length - 1])
}

function wa(t) {
    let e, r = {};
    return t.length > 0 && typeof t[t.length - 1] == "object" ? (r = t[t.length - 1], e = Array.from(t).slice(0, t.length - 1)) : e = Array.from(t), [r, e]
}

var w = class {
    constructor(e) {
        let r = e.zone || j.defaultZone,
            a = e.invalid || (Number.isNaN(e.ts) ? new de("invalid input") : null) || (r.isValid ? null : Pt(r));
        this.ts = k(e.ts) ? j.now() : e.ts;
        let n = null, s = null;
        if (!a) if (e.old && e.old.ts === this.ts && e.old.zone.equals(r)) [n, s] = [e.old.c, e.old.o]; else {
            let i = r.offset(this.ts);
            n = _t(this.ts, i), a = Number.isNaN(n.year) ? new de("invalid input") : null, n = a ? null : n, s = a ? null : i
        }
        this._zone = r, this.loc = e.loc || I.create(), this.invalid = a, this.weekData = null, this.c = n, this.o = s, this.isLuxonDateTime = !0
    }

    static now() {
        return new w({})
    }

    static local() {
        let [e, r] = wa(arguments), [a, n, s, o, i, c, m] = r;
        return va({year: a, month: n, day: s, hour: o, minute: i, second: c, millisecond: m}, e)
    }

    static utc() {
        let [e, r] = wa(arguments), [a, n, s, o, i, c, m] = r;
        return e.zone = Z.utcInstance, va({year: a, month: n, day: s, hour: o, minute: i, second: c, millisecond: m}, e)
    }

    static fromJSDate(e, r = {}) {
        let a = fo(e) ? e.valueOf() : NaN;
        if (Number.isNaN(a)) return w.invalid("invalid input");
        let n = _e(r.zone, j.defaultZone);
        return n.isValid ? new w({ts: a, zone: n, loc: I.fromObject(r)}) : w.invalid(Pt(n))
    }

    static fromMillis(e, r = {}) {
        if (Ke(e)) return e < -pa || e > pa ? w.invalid("Timestamp out of range") : new w({
            ts: e,
            zone: _e(r.zone, j.defaultZone),
            loc: I.fromObject(r)
        });
        throw new le(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)
    }

    static fromSeconds(e, r = {}) {
        if (Ke(e)) return new w({ts: 1e3 * e, zone: _e(r.zone, j.defaultZone), loc: I.fromObject(r)});
        throw new le("fromSeconds requires a numerical input")
    }

    static fromObject(e, r = {}) {
        e = e || {};
        let a = _e(r.zone, j.defaultZone);
        if (!a.isValid) return w.invalid(Pt(a));
        let n = j.now(), s = k(r.specificOffset) ? a.offset(n) : r.specificOffset, o = At(e, xa), i = !k(o.ordinal),
            c = !k(o.year), m = !k(o.month) || !k(o.day), u = c || m, v = o.weekYear || o.weekNumber,
            g = I.fromObject(r);
        if ((u || i) && v) throw new Ye("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (m && i) throw new Ye("Can't mix ordinal dates with month/day");
        let h = v || o.weekday && !u, S, T, x = _t(n, s);
        h ? (S = Gs, T = Ps, x = Fr(x)) : i ? (S = js, T = _s, x = mr(x)) : (S = bn, T = vn);
        let R = !1;
        for (let Te of S) {
            let Fe = o[Te];
            k(Fe) ? o[Te] = R ? T[Te] : x[Te] : R = !0
        }
        let _ = h ? Es(o) : i ? Ds(o) : yn(o), E = _ || gn(o);
        if (E) return w.invalid(E);
        let D = h ? fa(o) : i ? ha(o) : o, [H, ce] = zt(D, s, a), y = new w({ts: H, zone: a, o: ce, loc: g});
        return o.weekday && u && e.weekday !== y.weekday ? w.invalid("mismatched weekday", `you can't specify both a weekday of ${o.weekday} and a date of ${y.toISO()}`) : y
    }

    static fromISO(e, r = {}) {
        let [a, n] = rs(e);
        return pt(a, n, r, "ISO 8601", e)
    }

    static fromRFC2822(e, r = {}) {
        let [a, n] = as(e);
        return pt(a, n, r, "RFC 2822", e)
    }

    static fromHTTP(e, r = {}) {
        let [a, n] = ns(e);
        return pt(a, n, r, "HTTP", r)
    }

    static fromFormat(e, r, a = {}) {
        if (k(e) || k(r)) throw new le("fromFormat requires an input string and a format");
        let {locale: n = null, numberingSystem: s = null} = a,
            o = I.fromOpts({locale: n, numberingSystem: s, defaultToEN: !0}), [i, c, m, u] = Is(o, e, r);
        return u ? w.invalid(u) : pt(i, c, a, `format ${r}`, e, m)
    }

    static fromString(e, r, a = {}) {
        return w.fromFormat(e, r, a)
    }

    static fromSQL(e, r = {}) {
        let [a, n] = ds(e);
        return pt(a, n, r, "SQL", e)
    }

    static invalid(e, r = null) {
        if (!e) throw new le("need to specify a reason the DateTime is invalid");
        let a = e instanceof de ? e : new de(e, r);
        if (j.throwOnInvalid) throw new hr(a);
        return new w({invalid: a})
    }

    static isDateTime(e) {
        return e && e.isLuxonDateTime || !1
    }

    static parseFormatForOpts(e, r = {}) {
        let a = mn(e, I.fromObject(r));
        return a ? a.map(n => n ? n.val : null).join("") : null
    }

    static expandFormat(e, r = {}) {
        return ln(q.parseFormat(e), I.fromObject(r)).map(n => n.val).join("")
    }

    get(e) {
        return this[e]
    }

    get isValid() {
        return this.invalid === null
    }

    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }

    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }

    get locale() {
        return this.isValid ? this.loc.locale : null
    }

    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null
    }

    get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null
    }

    get zone() {
        return this._zone
    }

    get zoneName() {
        return this.isValid ? this.zone.name : null
    }

    get year() {
        return this.isValid ? this.c.year : NaN
    }

    get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN
    }

    get month() {
        return this.isValid ? this.c.month : NaN
    }

    get day() {
        return this.isValid ? this.c.day : NaN
    }

    get hour() {
        return this.isValid ? this.c.hour : NaN
    }

    get minute() {
        return this.isValid ? this.c.minute : NaN
    }

    get second() {
        return this.isValid ? this.c.second : NaN
    }

    get millisecond() {
        return this.isValid ? this.c.millisecond : NaN
    }

    get weekYear() {
        return this.isValid ? ur(this).weekYear : NaN
    }

    get weekNumber() {
        return this.isValid ? ur(this).weekNumber : NaN
    }

    get weekday() {
        return this.isValid ? ur(this).weekday : NaN
    }

    get ordinal() {
        return this.isValid ? mr(this.c).ordinal : NaN
    }

    get monthShort() {
        return this.isValid ? rt.months("short", {locObj: this.loc})[this.month - 1] : null
    }

    get monthLong() {
        return this.isValid ? rt.months("long", {locObj: this.loc})[this.month - 1] : null
    }

    get weekdayShort() {
        return this.isValid ? rt.weekdays("short", {locObj: this.loc})[this.weekday - 1] : null
    }

    get weekdayLong() {
        return this.isValid ? rt.weekdays("long", {locObj: this.loc})[this.weekday - 1] : null
    }

    get offset() {
        return this.isValid ? +this.o : NaN
    }

    get offsetNameShort() {
        return this.isValid ? this.zone.offsetName(this.ts, {format: "short", locale: this.locale}) : null
    }

    get offsetNameLong() {
        return this.isValid ? this.zone.offsetName(this.ts, {format: "long", locale: this.locale}) : null
    }

    get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null
    }

    get isInDST() {
        return !this.isOffsetFixed && (this.offset > this.set({
            month: 1,
            day: 1
        }).offset || this.offset > this.set({month: 5}).offset)
    }

    getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) return [this];
        let e = 864e5, r = 6e4, a = Wt(this.c), n = this.zone.offset(a - e), s = this.zone.offset(a + e),
            o = this.zone.offset(a - n * r), i = this.zone.offset(a - s * r);
        if (o === i) return [this];
        let c = a - o * r, m = a - i * r, u = _t(c, o), v = _t(m, i);
        return u.hour === v.hour && u.minute === v.minute && u.second === v.second && u.millisecond === v.millisecond ? [$e(this, {ts: c}), $e(this, {ts: m})] : [this]
    }

    get isInLeapYear() {
        return bt(this.year)
    }

    get daysInMonth() {
        return Ht(this.year, this.month)
    }

    get daysInYear() {
        return this.isValid ? xt(this.year) : NaN
    }

    get weeksInWeekYear() {
        return this.isValid ? Ut(this.weekYear) : NaN
    }

    resolvedLocaleOptions(e = {}) {
        let {locale: r, numberingSystem: a, calendar: n} = q.create(this.loc.clone(e), e).resolvedOptions(this);
        return {locale: r, numberingSystem: a, outputCalendar: n}
    }

    toUTC(e = 0, r = {}) {
        return this.setZone(Z.instance(e), r)
    }

    toLocal() {
        return this.setZone(j.defaultZone)
    }

    setZone(e, {keepLocalTime: r = !1, keepCalendarTime: a = !1} = {}) {
        if (e = _e(e, j.defaultZone), e.equals(this.zone)) return this;
        if (e.isValid) {
            let n = this.ts;
            if (r || a) {
                let s = e.offset(this.ts), o = this.toObject();
                [n] = zt(o, s, e)
            }
            return $e(this, {ts: n, zone: e})
        }
        return w.invalid(Pt(e))
    }

    reconfigure({locale: e, numberingSystem: r, outputCalendar: a} = {}) {
        let n = this.loc.clone({locale: e, numberingSystem: r, outputCalendar: a});
        return $e(this, {loc: n})
    }

    setLocale(e) {
        return this.reconfigure({locale: e})
    }

    set(e) {
        if (!this.isValid) return this;
        let r = At(e, xa), a = !k(r.weekYear) || !k(r.weekNumber) || !k(r.weekday), n = !k(r.ordinal), s = !k(r.year),
            o = !k(r.month) || !k(r.day), i = s || o, c = r.weekYear || r.weekNumber;
        if ((i || n) && c) throw new Ye("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (o && n) throw new Ye("Can't mix ordinal dates with month/day");
        let m;
        a ? m = fa({...Fr(this.c), ...r}) : k(r.ordinal) ? (m = {...this.toObject(), ...r}, k(r.day) && (m.day = Math.min(Ht(m.year, m.month), m.day))) : m = ha({...mr(this.c), ...r});
        let [u, v] = zt(m, this.o, this.zone);
        return $e(this, {ts: u, o: v})
    }

    plus(e) {
        if (!this.isValid) return this;
        let r = C.fromDurationLike(e);
        return $e(this, ya(this, r))
    }

    minus(e) {
        if (!this.isValid) return this;
        let r = C.fromDurationLike(e).negate();
        return $e(this, ya(this, r))
    }

    startOf(e) {
        if (!this.isValid) return this;
        let r = {}, a = C.normalizeUnit(e);
        switch (a) {
            case"years":
                r.month = 1;
            case"quarters":
            case"months":
                r.day = 1;
            case"weeks":
            case"days":
                r.hour = 0;
            case"hours":
                r.minute = 0;
            case"minutes":
                r.second = 0;
            case"seconds":
                r.millisecond = 0;
                break;
            case"milliseconds":
                break
        }
        if (a === "weeks" && (r.weekday = 1), a === "quarters") {
            let n = Math.ceil(this.month / 3);
            r.month = 3 * (n - 1) + 1
        }
        return this.set(r)
    }

    endOf(e) {
        return this.isValid ? this.plus({[e]: 1}).startOf(e).minus(1) : this
    }

    toFormat(e, r = {}) {
        return this.isValid ? q.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : dr
    }

    toLocaleString(e = Qt, r = {}) {
        return this.isValid ? q.create(this.loc.clone(r), e).formatDateTime(this) : dr
    }

    toLocaleParts(e = {}) {
        return this.isValid ? q.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
    }

    toISO({
              format: e = "extended",
              suppressSeconds: r = !1,
              suppressMilliseconds: a = !1,
              includeOffset: n = !0,
              extendedZone: s = !1
          } = {}) {
        if (!this.isValid) return null;
        let o = e === "extended", i = fr(this, o);
        return i += "T", i += ga(this, o, r, a, n, s), i
    }

    toISODate({format: e = "extended"} = {}) {
        return this.isValid ? fr(this, e === "extended") : null
    }

    toISOWeekDate() {
        return Gt(this, "kkkk-'W'WW-c")
    }

    toISOTime({
                  suppressMilliseconds: e = !1,
                  suppressSeconds: r = !1,
                  includeOffset: a = !0,
                  includePrefix: n = !1,
                  extendedZone: s = !1,
                  format: o = "extended"
              } = {}) {
        return this.isValid ? (n ? "T" : "") + ga(this, o === "extended", r, e, a, s) : null
    }

    toRFC2822() {
        return Gt(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
    }

    toHTTP() {
        return Gt(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
    }

    toSQLDate() {
        return this.isValid ? fr(this, !0) : null
    }

    toSQLTime({includeOffset: e = !0, includeZone: r = !1, includeOffsetSpace: a = !0} = {}) {
        let n = "HH:mm:ss.SSS";
        return (r || e) && (a && (n += " "), r ? n += "z" : e && (n += "ZZ")), Gt(this, n, !0)
    }

    toSQL(e = {}) {
        return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null
    }

    toString() {
        return this.isValid ? this.toISO() : dr
    }

    valueOf() {
        return this.toMillis()
    }

    toMillis() {
        return this.isValid ? this.ts : NaN
    }

    toSeconds() {
        return this.isValid ? this.ts / 1e3 : NaN
    }

    toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1e3) : NaN
    }

    toJSON() {
        return this.toISO()
    }

    toBSON() {
        return this.toJSDate()
    }

    toObject(e = {}) {
        if (!this.isValid) return {};
        let r = {...this.c};
        return e.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r
    }

    toJSDate() {
        return new Date(this.isValid ? this.ts : NaN)
    }

    diff(e, r = "milliseconds", a = {}) {
        if (!this.isValid || !e.isValid) return C.invalid("created by diffing an invalid DateTime");
        let n = {locale: this.locale, numberingSystem: this.numberingSystem, ...a}, s = ho(r).map(C.normalizeUnit),
            o = e.valueOf() > this.valueOf(), i = o ? this : e, c = o ? e : this, m = xs(i, c, s, n);
        return o ? m.negate() : m
    }

    diffNow(e = "milliseconds", r = {}) {
        return this.diff(w.now(), e, r)
    }

    until(e) {
        return this.isValid ? P.fromDateTimes(this, e) : this
    }

    hasSame(e, r) {
        if (!this.isValid) return !1;
        let a = e.valueOf(), n = this.setZone(e.zone, {keepLocalTime: !0});
        return n.startOf(r) <= a && a <= n.endOf(r)
    }

    equals(e) {
        return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
    }

    toRelative(e = {}) {
        if (!this.isValid) return null;
        let r = e.base || w.fromObject({}, {zone: this.zone}), a = e.padding ? this < r ? -e.padding : e.padding : 0,
            n = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
        return Array.isArray(e.unit) && (n = e.unit, s = void 0), ba(r, this.plus(a), {
            ...e,
            numeric: "always",
            units: n,
            unit: s
        })
    }

    toRelativeCalendar(e = {}) {
        return this.isValid ? ba(e.base || w.fromObject({}, {zone: this.zone}), this, {
            ...e,
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: !0
        }) : null
    }

    static min(...e) {
        if (!e.every(w.isDateTime)) throw new le("min requires all arguments be DateTimes");
        return na(e, r => r.valueOf(), Math.min)
    }

    static max(...e) {
        if (!e.every(w.isDateTime)) throw new le("max requires all arguments be DateTimes");
        return na(e, r => r.valueOf(), Math.max)
    }

    static fromFormatExplain(e, r, a = {}) {
        let {locale: n = null, numberingSystem: s = null} = a,
            o = I.fromOpts({locale: n, numberingSystem: s, defaultToEN: !0});
        return cn(o, e, r)
    }

    static fromStringExplain(e, r, a = {}) {
        return w.fromFormatExplain(e, r, a)
    }

    static get DATE_SHORT() {
        return Qt
    }

    static get DATE_MED() {
        return Sa
    }

    static get DATE_MED_WITH_WEEKDAY() {
        return Yn
    }

    static get DATE_FULL() {
        return ka
    }

    static get DATE_HUGE() {
        return Ca
    }

    static get TIME_SIMPLE() {
        return Ta
    }

    static get TIME_WITH_SECONDS() {
        return Fa
    }

    static get TIME_WITH_SHORT_OFFSET() {
        return Va
    }

    static get TIME_WITH_LONG_OFFSET() {
        return Oa
    }

    static get TIME_24_SIMPLE() {
        return Ma
    }

    static get TIME_24_WITH_SECONDS() {
        return Ra
    }

    static get TIME_24_WITH_SHORT_OFFSET() {
        return La
    }

    static get TIME_24_WITH_LONG_OFFSET() {
        return Na
    }

    static get DATETIME_SHORT() {
        return Ia
    }

    static get DATETIME_SHORT_WITH_SECONDS() {
        return Ea
    }

    static get DATETIME_MED() {
        return Da
    }

    static get DATETIME_MED_WITH_SECONDS() {
        return Pa
    }

    static get DATETIME_MED_WITH_WEEKDAY() {
        return Jn
    }

    static get DATETIME_FULL() {
        return _a
    }

    static get DATETIME_FULL_WITH_SECONDS() {
        return Ga
    }

    static get DATETIME_HUGE() {
        return ja
    }

    static get DATETIME_HUGE_WITH_SECONDS() {
        return za
    }
};

function yt(t) {
    if (w.isDateTime(t)) return t;
    if (t && t.valueOf && Ke(t.valueOf())) return w.fromJSDate(t);
    if (t && typeof t == "object") return w.fromObject(t);
    throw new le(`Unknown datetime argument: ${t}, of type ${typeof t}`)
}

function wn({
                textStyling: t,
                dotIndicatorVisible: e,
                dotIndicatorFlashing: r,
                shopLocationTimezone: a,
                displayFormat: n,
                sundayStatus: s,
                mondayStatus: o,
                tuesdayStatus: i,
                wednesdayStatus: c,
                thursdayStatus: m,
                fridayStatus: u,
                saturdayStatus: v,
                sundayHours: g,
                mondayHours: h,
                tuesdayHours: S,
                wednesdayHours: T,
                thursdayHours: x,
                fridayHours: R,
                saturdayHours: _
            }) {
    var E, D, H;
    let ce = Y.create(a), [y, Te] = Re(w.now().setZone(ce)),
        Fe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Ve = {
            Sunday: {status: s, hours: g},
            Monday: {status: o, hours: h},
            Tuesday: {status: i, hours: S},
            Wednesday: {status: c, hours: T},
            Thursday: {status: m, hours: x},
            Friday: {status: u, hours: R},
            Saturday: {status: v, hours: _}
        }, mt = () => {
            let U = y.weekday % 7 + 1;
            for (; U !== y.weekday % 7;) {
                let L = Fe[U];
                if (Ve[L].status === "Open") return `${L} ${Ve[L].hours}`;
                U = (U + 1) % 7
            }
            return ""
        }, Jt = () => {
            let U = Fe[y.weekday % 7], L = Ve[U];
            if (!L || !L.hours) return "";
            let {status: Ge, hours: je} = L;
            if (Ge === "Closed") {
                let ge = mt();
                if (ge) {
                    let xe = n === "12 hours" ? {hour: "numeric", minute: "2-digit", hour12: !0} : {
                            hour: "2-digit",
                            minute: "2-digit"
                        },
                        rr = ge.replace(/(\d{1,2}:\d{2}) - (\d{1,2}:\d{2})/g, (ar, qe, We) => `${w.fromFormat(qe, "HH:mm").toLocaleString(xe).replace(",", "")} - ${w.fromFormat(We, "HH:mm").toLocaleString(xe).replace(",", "")}`);
                    return " "
                } else return " "
            }
            let [ze, Be] = je.split(" - "), [Qe, He] = ze.split(":"), [Ue, Ae] = Be.split(":"),
                dt = y.set({hour: Qe, minute: He}), tr = y.set({hour: Ue, minute: Ae}),
                Pn = n === "12 hours" ? {hour: "numeric", minute: "2-digit", hour12: !0} : {
                    hour: "2-digit",
                    minute: "2-digit"
                };
            if (y >= dt && y <= tr) return "CLOSED";
            if (y < dt) return "CLOSED";
            {
                let ge = mt();
                if (ge) {
                    let xe = n === "12 hours" ? {hour: "numeric", minute: "2-digit", hour12: !0} : {
                            hour: "2-digit",
                            minute: "2-digit"
                        },
                        rr = ge.replace(/(\d{1,2}:\d{2}) - (\d{1,2}:\d{2})/g, (ar, qe, We) => `${w.fromFormat(qe, "HH:mm").toLocaleString(xe).replace(",", "")} - ${w.fromFormat(We, "HH:mm").toLocaleString(xe).replace(",", "")}`);
                    return "OPEN"
                } else return "OPEN"
            }
        }, Kt = () => {
            let U = Fe[y.weekday % 7], L = Ve[U];
            if (L && L.status === "Open" && L.hours) {
                let [Ge, je] = L.hours.split(" - "), [ze, Be] = Ge.split(":"), [Qe, He] = je.split(":"),
                    Ue = y.set({hour: ze, minute: Be}), Ae = y.set({hour: Qe, minute: He});
                if (y >= Ue && y <= Ae) return "#3DCD8B"
            }
            return "#FF4C33"
        }, ye = Rt();
    X(() => {
        if (r) {
            let L = setInterval(async () => {
                await ye.start({scale: 1.2}), await ye.start({scale: 1})
            }, 2e3);
            return () => clearInterval(L)
        } else ye.stop()
    }, [r, ye]);
    let Xt = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: Kt(),
        marginRight: "0px",
        display: e ? "block" : "none"
    }, er = {
        fontFamily: (E = t.font) === null || E === void 0 ? void 0 : E.fontFamily,
        fontWeight: (D = t.font) === null || D === void 0 ? void 0 : D.fontWeight,
        fontSize: (H = t.font) === null || H === void 0 ? void 0 : H.fontSize,
        color: t.color
    };
    return l(d.div, {
        children: N("div", {
            style: {display: "flex", alignItems: "center"},
            children: [l(d.div, {style: {...Xt}, animate: ye}), l("p", {style: er, children: Jt()})]
        })
    })
}

var zs = Intl.supportedValuesOf("timeZone");
A(wn, {
    textStyling: {
        title: "Text Styling",
        type: f.Object,
        controls: {
            font: {type: f.Font, title: "Font", controls: "extended"},
            color: {type: f.Color, title: "Color", defaultValue: "#000000"}
        }
    },
    dotIndicatorVisible: {
        type: f.Boolean,
        title: "Dot Indicator Visible",
        defaultValue: !0,
        enabledTitle: "On",
        disabledTitle: "Off"
    },
    dotIndicatorFlashing: {
        type: f.Boolean,
        title: "Dot Indicator Flashing",
        defaultValue: !1,
        enabledTitle: "On",
        disabledTitle: "Off"
    },
    shopLocationTimezone: {
        type: f.Enum,
        title: "Shop Location Timezone",
        options: zs,
        defaultValue: "America/New_York"
    },
    displayFormat: {type: f.Enum, title: "Display Format", options: ["12 hours", "24 hours"], defaultValue: "24 hours"},
    sundayStatus: {type: f.Enum, title: "Sunday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    mondayStatus: {type: f.Enum, title: "Monday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    tuesdayStatus: {type: f.Enum, title: "Tuesday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    wednesdayStatus: {type: f.Enum, title: "Wednesday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    thursdayStatus: {type: f.Enum, title: "Thursday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    fridayStatus: {type: f.Enum, title: "Friday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    saturdayStatus: {type: f.Enum, title: "Saturday Status", options: ["Open", "Closed"], defaultValue: "Closed"},
    sundayHours: {
        type: f.String, title: "Sunday Opening Hours", defaultValue: "10:00 - 16:00", hidden(t) {
            return t.sundayStatus === "Closed"
        }
    },
    mondayHours: {
        type: f.String, title: "Monday Opening Hours", defaultValue: "Closed", hidden(t) {
            return t.mondayStatus === "Closed"
        }
    },
    tuesdayHours: {
        type: f.String, title: "Tuesday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.tuesdayStatus === "Closed"
        }
    },
    wednesdayHours: {
        type: f.String, title: "Wednesday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.wednesdayStatus === "Closed"
        }
    },
    thursdayHours: {
        type: f.String, title: "Thursday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.thursdayStatus === "Closed"
        }
    },
    fridayHours: {
        type: f.String, title: "Friday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.fridayStatus === "Closed"
        }
    },
    saturdayHours: {
        type: f.String, title: "Saturday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.saturdayStatus === "Closed"
        }
    }
});
var Ir = wn;

function Sn({
                textStyling: t,
                dotIndicatorVisible: e,
                dotIndicatorFlashing: r,
                shopLocationTimezone: a,
                displayFormat: n,
                sundayStatus: s,
                mondayStatus: o,
                tuesdayStatus: i,
                wednesdayStatus: c,
                thursdayStatus: m,
                fridayStatus: u,
                saturdayStatus: v,
                sundayHours: g,
                mondayHours: h,
                tuesdayHours: S,
                wednesdayHours: T,
                thursdayHours: x,
                fridayHours: R,
                saturdayHours: _
            }) {
    var E, D, H;
    let ce = Y.create(a), [y, Te] = Re(w.now().setZone(ce)),
        Fe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Ve = {
            Sunday: {status: s, hours: g},
            Monday: {status: o, hours: h},
            Tuesday: {status: i, hours: S},
            Wednesday: {status: c, hours: T},
            Thursday: {status: m, hours: x},
            Friday: {status: u, hours: R},
            Saturday: {status: v, hours: _}
        }, mt = () => {
            let U = y.weekday % 7 + 1;
            for (; U !== y.weekday % 7;) {
                let L = Fe[U];
                if (Ve[L].status === "Open") return `${L} ${Ve[L].hours}`;
                U = (U + 1) % 7
            }
            return ""
        }, Jt = () => {
            let U = Fe[y.weekday % 7], L = Ve[U];
            if (!L || !L.hours) return "";
            let {status: Ge, hours: je} = L;
            if (Ge === "Closed") {
                let ge = mt();
                if (ge) {
                    let xe = n === "12 hours" ? {hour: "numeric", minute: "2-digit", hour12: !0} : {
                            hour: "2-digit",
                            minute: "2-digit"
                        },
                        rr = ge.replace(/(\d{1,2}:\d{2}) - (\d{1,2}:\d{2})/g, (ar, qe, We) => `${w.fromFormat(qe, "HH:mm").toLocaleString(xe).replace(",", "")} - ${w.fromFormat(We, "HH:mm").toLocaleString(xe).replace(",", "")}`);
                    return "(WE'RE CLOSED)"
                } else return "(WE'RE CLOSED)"
            }
            let [ze, Be] = je.split(" - "), [Qe, He] = ze.split(":"), [Ue, Ae] = Be.split(":"),
                dt = y.set({hour: Qe, minute: He}), tr = y.set({hour: Ue, minute: Ae}),
                Pn = n === "12 hours" ? {hour: "numeric", minute: "2-digit", hour12: !0} : {
                    hour: "2-digit",
                    minute: "2-digit"
                };
            if (y >= dt && y <= tr) return "(WE'RE OPEN)";
            if (y < dt) return "(WE'RE CLOSED)";
            {
                let ge = mt();
                if (ge) {
                    let xe = n === "12 hours" ? {hour: "numeric", minute: "2-digit", hour12: !0} : {
                            hour: "2-digit",
                            minute: "2-digit"
                        },
                        rr = ge.replace(/(\d{1,2}:\d{2}) - (\d{1,2}:\d{2})/g, (ar, qe, We) => `${w.fromFormat(qe, "HH:mm").toLocaleString(xe).replace(",", "")} - ${w.fromFormat(We, "HH:mm").toLocaleString(xe).replace(",", "")}`);
                    return "CLOSED"
                } else return "CLOSED"
            }
        }, Kt = () => {
            let U = Fe[y.weekday % 7], L = Ve[U];
            if (L && L.status === "Open" && L.hours) {
                let [Ge, je] = L.hours.split(" - "), [ze, Be] = Ge.split(":"), [Qe, He] = je.split(":"),
                    Ue = y.set({hour: ze, minute: Be}), Ae = y.set({hour: Qe, minute: He});
                if (y >= Ue && y <= Ae) return "green"
            }
            return "red"
        }, ye = Rt();
    X(() => {
        if (r) {
            let L = setInterval(async () => {
                await ye.start({scale: 1.2}), await ye.start({scale: 1})
            }, 2e3);
            return () => clearInterval(L)
        } else ye.stop()
    }, [r, ye]);
    let Xt = {
        width: "0px",
        height: "0px",
        borderRadius: "0%",
        backgroundColor: Kt(),
        marginRight: "0px",
        display: e ? "block" : "none"
    }, er = {
        fontFamily: (E = t.font) === null || E === void 0 ? void 0 : E.fontFamily,
        fontWeight: (D = t.font) === null || D === void 0 ? void 0 : D.fontWeight,
        fontSize: (H = t.font) === null || H === void 0 ? void 0 : H.fontSize,
        color: t.color
    };
    return l(d.div, {
        children: N("div", {
            style: {display: "flex", alignItems: "center"},
            children: [l(d.div, {style: {...Xt}, animate: ye}), l("p", {style: er, children: Jt()})]
        })
    })
}

var Bs = Intl.supportedValuesOf("timeZone");
A(Sn, {
    textStyling: {
        title: "Text Styling",
        type: f.Object,
        controls: {
            font: {type: f.Font, title: "Font", controls: "extended"},
            color: {type: f.Color, title: "Color", defaultValue: "#000000"}
        }
    },
    dotIndicatorVisible: {
        type: f.Boolean,
        title: "Dot Indicator Visible",
        defaultValue: !0,
        enabledTitle: "On",
        disabledTitle: "Off"
    },
    dotIndicatorFlashing: {
        type: f.Boolean,
        title: "Dot Indicator Flashing",
        defaultValue: !1,
        enabledTitle: "On",
        disabledTitle: "Off"
    },
    shopLocationTimezone: {
        type: f.Enum,
        title: "Shop Location Timezone",
        options: Bs,
        defaultValue: "America/New_York"
    },
    displayFormat: {type: f.Enum, title: "Display Format", options: ["12 hours", "24 hours"], defaultValue: "24 hours"},
    sundayStatus: {type: f.Enum, title: "Sunday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    mondayStatus: {type: f.Enum, title: "Monday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    tuesdayStatus: {type: f.Enum, title: "Tuesday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    wednesdayStatus: {type: f.Enum, title: "Wednesday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    thursdayStatus: {type: f.Enum, title: "Thursday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    fridayStatus: {type: f.Enum, title: "Friday Status", options: ["Open", "Closed"], defaultValue: "Open"},
    saturdayStatus: {type: f.Enum, title: "Saturday Status", options: ["Open", "Closed"], defaultValue: "Closed"},
    sundayHours: {
        type: f.String, title: "Sunday Opening Hours", defaultValue: "10:00 - 16:00", hidden(t) {
            return t.sundayStatus === "Closed"
        }
    },
    mondayHours: {
        type: f.String, title: "Monday Opening Hours", defaultValue: "Closed", hidden(t) {
            return t.mondayStatus === "Closed"
        }
    },
    tuesdayHours: {
        type: f.String, title: "Tuesday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.tuesdayStatus === "Closed"
        }
    },
    wednesdayHours: {
        type: f.String, title: "Wednesday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.wednesdayStatus === "Closed"
        }
    },
    thursdayHours: {
        type: f.String, title: "Thursday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.thursdayStatus === "Closed"
        }
    },
    fridayHours: {
        type: f.String, title: "Friday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.fridayStatus === "Closed"
        }
    },
    saturdayHours: {
        type: f.String, title: "Saturday Opening Hours", defaultValue: "10:00 - 18:00", hidden(t) {
            return t.saturdayStatus === "Closed"
        }
    }
});
var Er = Sn;
var Qs = ve(Ir), Hs = ve(Er), Us = ve(ht), As = {VPUDay5gO: {hover: !0}}, qs = ["VPUDay5gO"], Ws = "framer-4tFP3",
    Zs = {VPUDay5gO: "framer-v-17xn5w7"};

function kn(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var $s = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"}, Ys = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, Js = d(b), Ks = ({height: t, id: e, width: r, ...a}) => ({...a}), Xs = (t, e) => e.join("-") + t.layoutDependency,
    ei = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                ...c
            } = Ks(t), {
                baseVariant: m,
                classNames: u,
                gestureVariant: v,
                setGestureState: g,
                setVariant: h,
                variants: S
            } = se({cycleOrder: qs, defaultVariant: "VPUDay5gO", enabledGestures: As, variant: i, variantClassNames: Zs}),
            T = Xs(t, S), x = W(null), R = ee(), _ = [], E = ne();
        return l(te, {
            id: o ?? R, children: l(Js, {
                animate: S, initial: !1, children: l(Ys, {
                    value: $s, children: N(d.div, {
                        ...c,
                        className: ae(Ws, ..._, "framer-17xn5w7", s, u),
                        "data-framer-name": "Variant 1",
                        layoutDependency: T,
                        layoutId: "VPUDay5gO",
                        onHoverEnd: () => g({isHovered: !1}),
                        onHoverStart: () => g({isHovered: !0}),
                        onTap: () => g({isPressed: !1}),
                        onTapCancel: () => g({isPressed: !1}),
                        onTapStart: () => g({isPressed: !0}),
                        ref: e ?? x,
                        style: {...n}, ...kn({"VPUDay5gO-hover": {"data-framer-name": void 0}}, m, v),
                        children: [l(me, {
                            children: l(d.div, {
                                className: "framer-1tj1fam-container",
                                "data-framer-name": "DOT",
                                layoutDependency: T,
                                layoutId: "coQxDDkvj-container",
                                name: "DOT",
                                children: l(Ir, {
                                    displayFormat: "12 hours",
                                    dotIndicatorFlashing: !0,
                                    dotIndicatorVisible: !0,
                                    fridayHours: "10:00 - 18:00",
                                    fridayStatus: "Open",
                                    height: "100%",
                                    id: "coQxDDkvj",
                                    layoutId: "coQxDDkvj",
                                    mondayHours: "10:00 - 18:00",
                                    mondayStatus: "Open",
                                    name: "DOT",
                                    saturdayHours: "10:00 - 18:00",
                                    saturdayStatus: "Open",
                                    shopLocationTimezone: "America/New_York",
                                    sundayHours: "10:00 - 18:00",
                                    sundayStatus: "Open",
                                    textStyling: {
                                        color: "rgba(255, 255, 255, 0)",
                                        font: {
                                            fontFamily: '"Martian Mono ExtraLight", "Martian Mono ExtraLight Placeholder", monospace',
                                            fontSize: "0px",
                                            letterSpacing: "0em",
                                            lineHeight: "1em"
                                        }
                                    },
                                    thursdayHours: "10:00 - 18:00",
                                    thursdayStatus: "Open",
                                    tuesdayHours: "10:00 - 18:00",
                                    tuesdayStatus: "Open",
                                    wednesdayHours: "10:00 - 18:00",
                                    wednesdayStatus: "Open",
                                    width: "100%"
                                })
                            })
                        }), l(me, {
                            children: l(d.div, {
                                className: "framer-1dxg10a-container",
                                "data-framer-name": "OPENCLOSED",
                                layoutDependency: T,
                                layoutId: "Fu4HjjApO-container",
                                name: "OPENCLOSED",
                                style: {opacity: 0},
                                variants: {"VPUDay5gO-hover": {opacity: 1}},
                                children: l(Er, {
                                    displayFormat: "12 hours",
                                    dotIndicatorFlashing: !1,
                                    dotIndicatorVisible: !1,
                                    fridayHours: "10:00 - 18:00",
                                    fridayStatus: "Open",
                                    height: "100%",
                                    id: "Fu4HjjApO",
                                    layoutId: "Fu4HjjApO",
                                    mondayHours: "10:00 - 18:00",
                                    mondayStatus: "Open",
                                    name: "OPENCLOSED",
                                    saturdayHours: "10:00 - 18:00",
                                    saturdayStatus: "Open",
                                    shopLocationTimezone: "America/New_York",
                                    style: {width: "100%"},
                                    sundayHours: "10:00 - 18:00",
                                    sundayStatus: "Closed",
                                    textStyling: {
                                        color: "rgba(255, 255, 255, 0)",
                                        font: {
                                            fontFamily: '"Martian Mono Nr xLt", "Martian Mono Nr xLt Placeholder", monospace',
                                            fontSize: "12px",
                                            letterSpacing: "0em",
                                            lineHeight: "1em"
                                        }
                                    },
                                    thursdayHours: "10:00 - 18:00",
                                    thursdayStatus: "Open",
                                    tuesdayHours: "10:00 - 18:00",
                                    tuesdayStatus: "Open",
                                    wednesdayHours: "10:00 - 18:00",
                                    wednesdayStatus: "Open",
                                    width: "100%", ...kn({
                                        "VPUDay5gO-hover": {
                                            sundayStatus: "Open",
                                            textStyling: {
                                                color: "rgba(255, 255, 255, 0.5)",
                                                font: {
                                                    fontFamily: '"Martian Mono Nr xLt", "Martian Mono Nr xLt Placeholder", monospace',
                                                    fontSize: "12px",
                                                    letterSpacing: "0em",
                                                    lineHeight: "1em"
                                                }
                                            }
                                        }
                                    }, m, v)
                                })
                            })
                        }), l(me, {
                            children: l(d.div, {
                                className: "framer-13bnu02-container",
                                layoutDependency: T,
                                layoutId: "ZQg_GE5Wq-container",
                                children: l(ht, {
                                    font: !0,
                                    fontFamily: "Martian Mono",
                                    fontSize: 12,
                                    fontWeight: 200,
                                    height: "100%",
                                    id: "ZQg_GE5Wq",
                                    layoutId: "ZQg_GE5Wq",
                                    lineHeight: 1,
                                    textColor: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                    width: "100%"
                                })
                            })
                        })]
                    })
                })
            })
        })
    }),
    ti = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-4tFP3.framer-ntud7y, .framer-4tFP3 .framer-ntud7y { display: block; }", ".framer-4tFP3.framer-17xn5w7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 40px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 180px; }", ".framer-4tFP3 .framer-1tj1fam-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-4tFP3 .framer-1dxg10a-container { flex: none; height: auto; position: relative; width: 1px; }", ".framer-4tFP3 .framer-13bnu02-container { flex: none; height: auto; pointer-events: none; position: relative; width: auto; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4tFP3.framer-17xn5w7 { gap: 0px; } .framer-4tFP3.framer-17xn5w7 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-4tFP3.framer-17xn5w7 > :first-child { margin-left: 0px; } .framer-4tFP3.framer-17xn5w7 > :last-child { margin-right: 0px; } }", ".framer-4tFP3.framer-v-17xn5w7.hover.framer-17xn5w7 { overflow: visible; width: 200px; }", ".framer-4tFP3.framer-v-17xn5w7.hover .framer-1tj1fam-container { order: 1; }", ".framer-4tFP3.framer-v-17xn5w7.hover .framer-1dxg10a-container { order: 2; width: auto; z-index: 1; }", ".framer-4tFP3.framer-v-17xn5w7.hover .framer-13bnu02-container { order: 3; }"],
    Yt = oe(ei, ti, "framer-4tFP3"), Dr = Yt;
Yt.displayName = "NAV / Clock";
Yt.defaultProps = {height: 40, width: 180};
ie(Yt, [{
    explicitInter: !0,
    fonts: [{
        family: "Martian Mono Nr xLt",
        source: "custom",
        url: "https://framerusercontent.com/assets/1TvF3KZQoOWkAh39QJql4V02Xo.woff2"
    }]
}, ...Qs, ...Hs, ...Us], {supportsExplicitInterCodegen: !0});
var ri = {CZPEuPyFx: {hover: !0}, GUKnPL2vM: {hover: !0}, Zilc2JnDX: {hover: !0}},
    ai = ["Zilc2JnDX", "iLoISnweI", "GUKnPL2vM", "CZPEuPyFx"], ni = "framer-yPlB3", oi = {
        CZPEuPyFx: "framer-v-re0km9",
        GUKnPL2vM: "framer-v-lbr28j",
        iLoISnweI: "framer-v-131g8e5",
        Zilc2JnDX: "framer-v-hcgp9g"
    };

function Cn(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var si = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"}, ii = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, li = d(b),
    ci = {"Light / Desktop": "GUKnPL2vM", "Light / Mobile": "CZPEuPyFx", "Variant 1": "Zilc2JnDX", Mobile: "iLoISnweI"},
    mi = ({height: t, id: e, title: r, width: a, ...n}) => {
        var s, o, i;
        return {
            ...n,
            qLZaWWgna: (s = r ?? n.qLZaWWgna) !== null && s !== void 0 ? s : "Let\u2019s talk",
            variant: (i = (o = ci[n.variant]) !== null && o !== void 0 ? o : n.variant) !== null && i !== void 0 ? i : "Zilc2JnDX"
        }
    }, di = (t, e) => e.join("-") + t.layoutDependency, ui = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                qLZaWWgna: c,
                ...m
            } = mi(t), {
                baseVariant: u,
                classNames: v,
                gestureVariant: g,
                setGestureState: h,
                setVariant: S,
                variants: T
            } = se({cycleOrder: ai, defaultVariant: "Zilc2JnDX", enabledGestures: ri, variant: i, variantClassNames: oi}),
            x = di(t, T), R = W(null), _ = ee(), E = [Ie], D = ne();
        return l(te, {
            id: o ?? _, children: l(li, {
                animate: T, initial: !1, children: l(ii, {
                    value: si, children: l($, {
                        href: "mailto:hi@datalands.co", openInNewTab: !0, children: N(d.a, {
                            ...m,
                            className: `${ae(ni, ...E, "framer-hcgp9g", s, v)} framer-16eoo7x`,
                            "data-framer-name": "Variant 1",
                            layoutDependency: x,
                            layoutId: "Zilc2JnDX",
                            onHoverEnd: () => h({isHovered: !1}),
                            onHoverStart: () => h({isHovered: !0}),
                            onTap: () => h({isPressed: !1}),
                            onTapCancel: () => h({isPressed: !1}),
                            onTapStart: () => h({isPressed: !0}),
                            ref: e ?? R,
                            style: {...n}, ...Cn({
                                "CZPEuPyFx-hover": {"data-framer-name": void 0},
                                "GUKnPL2vM-hover": {"data-framer-name": void 0},
                                "Zilc2JnDX-hover": {"data-framer-name": void 0},
                                CZPEuPyFx: {"data-framer-name": "Light / Mobile"},
                                GUKnPL2vM: {"data-framer-name": "Light / Desktop"},
                                iLoISnweI: {"data-framer-name": "Mobile"}
                            }, u, g),
                            children: [l(d.button, {
                                className: "framer-1jc2y68",
                                "data-border": !0,
                                "data-framer-name": "contact-button",
                                "data-reset": "button",
                                layoutDependency: x,
                                layoutId: "GLuwA5cRS",
                                style: {
                                    "--border-bottom-width": "1px",
                                    "--border-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    borderBottomLeftRadius: 34,
                                    borderBottomRightRadius: 34,
                                    borderTopLeftRadius: 34,
                                    borderTopRightRadius: 34
                                },
                                children: l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            className: "framer-styles-preset-10erd1a",
                                            "data-styles-preset": "yVMxki16r",
                                            children: "Let\u2019s talk"
                                        })
                                    }),
                                    className: "framer-mwyuf",
                                    layoutDependency: x,
                                    layoutId: "tjt9Ssmut",
                                    text: c,
                                    variants: {
                                        CZPEuPyFx: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                        GUKnPL2vM: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"}
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0, ...Cn({
                                        CZPEuPyFx: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                    children: "Let\u2019s talk"
                                                })
                                            })
                                        },
                                        GUKnPL2vM: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                    children: "Let\u2019s talk"
                                                })
                                            })
                                        }
                                    }, u, g)
                                })
                            }), l(d.div, {
                                className: "framer-1ems98u",
                                "data-border": !0,
                                "data-framer-name": "Arrow",
                                layoutDependency: x,
                                layoutId: "tGW07JKAv",
                                style: {
                                    "--border-bottom-width": "1px",
                                    "--border-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderBottomLeftRadius: 60,
                                    borderBottomRightRadius: 60,
                                    borderTopLeftRadius: 60,
                                    borderTopRightRadius: 60
                                },
                                variants: {
                                    "CZPEuPyFx-hover": {backgroundColor: "rgb(252, 116, 221)"},
                                    "GUKnPL2vM-hover": {backgroundColor: "var(--token-140c0d26-c6f5-4a43-9526-f24b952c69c7, rgb(252, 116, 221))"},
                                    "Zilc2JnDX-hover": {backgroundColor: "rgb(252, 116, 221)"}
                                },
                                children: l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBFeHRyYUxpZ2h0",
                                                "--framer-font-family": '"Martian Mono ExtraLight", "Martian Mono ExtraLight Placeholder", monospace',
                                                "--framer-font-size": "15px",
                                                "--framer-letter-spacing": "0.02em",
                                                "--framer-line-height": "1.25em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))",
                                                "--framer-text-transform": "uppercase"
                                            }, children: "\u2192"
                                        })
                                    }),
                                    className: "framer-52sbb4",
                                    fonts: ["CUSTOM;Martian Mono ExtraLight"],
                                    layoutDependency: x,
                                    layoutId: "x_cnItvdC",
                                    style: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    fi = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yPlB3.framer-16eoo7x, .framer-yPlB3 .framer-16eoo7x { display: block; }", ".framer-yPlB3.framer-hcgp9g { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-yPlB3 .framer-1jc2y68 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; padding: 10px 24px 10px 24px; position: relative; width: min-content; }", ".framer-yPlB3 .framer-mwyuf, .framer-yPlB3 .framer-52sbb4 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", ".framer-yPlB3 .framer-1ems98u { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 32px); justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: 32px; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yPlB3.framer-hcgp9g, .framer-yPlB3 .framer-1jc2y68, .framer-yPlB3 .framer-1ems98u { gap: 0px; } .framer-yPlB3.framer-hcgp9g > *, .framer-yPlB3 .framer-1jc2y68 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-yPlB3.framer-hcgp9g > :first-child, .framer-yPlB3 .framer-1jc2y68 > :first-child, .framer-yPlB3 .framer-1ems98u > :first-child { margin-left: 0px; } .framer-yPlB3.framer-hcgp9g > :last-child, .framer-yPlB3 .framer-1jc2y68 > :last-child, .framer-yPlB3 .framer-1ems98u > :last-child { margin-right: 0px; } .framer-yPlB3 .framer-1ems98u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-yPlB3.framer-v-131g8e5.framer-hcgp9g { cursor: unset; }", ".framer-yPlB3.framer-v-131g8e5 .framer-1jc2y68, .framer-yPlB3.framer-v-re0km9 .framer-1jc2y68 { width: 320px; }", ".framer-yPlB3.framer-v-hcgp9g.hover .framer-1jc2y68 { order: 0; }", ".framer-yPlB3.framer-v-hcgp9g.hover .framer-1ems98u { order: 1; }", ...Ne, '.framer-yPlB3[data-border="true"]::after, .framer-yPlB3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    kt = oe(ui, fi, "framer-yPlB3"), Pr = kt;
kt.displayName = "Nav / Email";
kt.defaultProps = {height: 32, width: 176};
A(kt, {
    variant: {
        options: ["Zilc2JnDX", "iLoISnweI", "GUKnPL2vM", "CZPEuPyFx"],
        optionTitles: ["Variant 1", "Mobile", "Light / Desktop", "Light / Mobile"],
        title: "Variant",
        type: f.Enum
    }, qLZaWWgna: {defaultValue: "Let\u2019s talk", displayTextArea: !1, title: "Title", type: f.String}
});
ie(kt, [...Le]);
var hi = {sA4_FXYHL: {hover: !0}}, pi = ["sA4_FXYHL"], yi = "framer-yuOc9", gi = {sA4_FXYHL: "framer-v-5ix1l0"};

function _r(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var Tn = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"}, Fn = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, xi = d(b), vi = ({datalands: t, height: e, hoverText: r, id: a, width: n, ...s}) => {
        var o, i;
        return {
            ...s,
            cR5jts_nT: (o = t ?? s.cR5jts_nT) !== null && o !== void 0 ? o : "Datalands",
            Qepu5nnoh: (i = r ?? s.Qepu5nnoh) !== null && i !== void 0 ? i : "Back home"
        }
    }, bi = (t, e) => e.join("-") + t.layoutDependency, wi = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                cR5jts_nT: c,
                Qepu5nnoh: m,
                ...u
            } = vi(t), {
                baseVariant: v,
                classNames: g,
                gestureVariant: h,
                setGestureState: S,
                setVariant: T,
                variants: x
            } = se({cycleOrder: pi, defaultVariant: "sA4_FXYHL", enabledGestures: hi, variant: i, variantClassNames: gi}),
            R = bi(t, x), _ = W(null), E = () => h === "sA4_FXYHL-hover", D = ee(), H = [Ie], ce = ne();
        return l(te, {
            id: o ?? D, children: l(xi, {
                animate: x, initial: !1, children: l(Fn, {
                    value: Tn, children: l($, {
                        href: {webPageId: "augiA20Il"}, children: l(d.a, {
                            ...u,
                            className: `${ae(yi, ...H, "framer-5ix1l0", s, g)} framer-1ws2c2a`,
                            "data-framer-name": "Datalands Link",
                            layoutDependency: R,
                            layoutId: "sA4_FXYHL",
                            onHoverEnd: () => S({isHovered: !1}),
                            onHoverStart: () => S({isHovered: !0}),
                            onTap: () => S({isPressed: !1}),
                            onTapCancel: () => S({isPressed: !1}),
                            onTapStart: () => S({isPressed: !0}),
                            ref: e ?? _,
                            style: {...n}, ..._r({"sA4_FXYHL-hover": {"data-framer-name": void 0}}, v, h),
                            children: N(d.div, {
                                className: "framer-vk3gy2",
                                "data-framer-name": "Datalands",
                                layoutDependency: R,
                                layoutId: "JH1rNE4zj",
                                children: [E() && l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            className: "framer-styles-preset-10erd1a",
                                            "data-styles-preset": "yVMxki16r",
                                            style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae2f69b-14a9-4644-805f-09bf4a7f4f87, rgb(216, 255, 165)))"},
                                            children: "\u2190"
                                        })
                                    }),
                                    className: "framer-177dszi",
                                    layoutDependency: R,
                                    layoutId: "ULATRJ8JN",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-2ae2f69b-14a9-4644-805f-09bf4a7f4f87, rgb(216, 255, 165))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), l(Fn, {
                                    ..._r({"sA4_FXYHL-hover": {value: Tn}}, v, h), children: l(G, {
                                        __fromCanvasComponent: !0,
                                        children: l(b, {
                                            children: l(d.p, {
                                                className: "framer-styles-preset-10erd1a",
                                                "data-styles-preset": "yVMxki16r",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                children: "Datalands"
                                            })
                                        }),
                                        className: "framer-10vw9xu",
                                        layoutDependency: R,
                                        layoutId: "HKE9YSMBk",
                                        style: {
                                            "--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline"
                                        },
                                        text: c,
                                        variants: {"sA4_FXYHL-hover": {"--extracted-r6o4lv": "var(--token-2ae2f69b-14a9-4644-805f-09bf4a7f4f87, rgb(216, 255, 165))"}},
                                        verticalAlignment: "top",
                                        withExternalLayout: !0, ..._r({
                                            "sA4_FXYHL-hover": {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-10erd1a",
                                                        "data-styles-preset": "yVMxki16r",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae2f69b-14a9-4644-805f-09bf4a7f4f87, rgb(216, 255, 165)))"},
                                                        children: "Back home"
                                                    })
                                                }), text: m
                                            }
                                        }, v, h)
                                    })
                                })]
                            })
                        })
                    })
                })
            })
        })
    }),
    Si = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yuOc9.framer-1ws2c2a, .framer-yuOc9 .framer-1ws2c2a { display: block; }", ".framer-yuOc9.framer-5ix1l0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-yuOc9 .framer-vk3gy2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-yuOc9 .framer-177dszi, .framer-yuOc9 .framer-10vw9xu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yuOc9.framer-5ix1l0, .framer-yuOc9 .framer-vk3gy2 { gap: 0px; } .framer-yuOc9.framer-5ix1l0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yuOc9.framer-5ix1l0 > :first-child { margin-top: 0px; } .framer-yuOc9.framer-5ix1l0 > :last-child { margin-bottom: 0px; } .framer-yuOc9 .framer-vk3gy2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yuOc9 .framer-vk3gy2 > :first-child { margin-left: 0px; } .framer-yuOc9 .framer-vk3gy2 > :last-child { margin-right: 0px; } }", ...Ne],
    Ct = oe(wi, Si, "framer-yuOc9"), Gr = Ct;
Ct.displayName = "NAV / Home";
Ct.defaultProps = {height: 15, width: 86.5};
A(Ct, {
    cR5jts_nT: {defaultValue: "Datalands", displayTextArea: !1, title: "Datalands", type: f.String},
    Qepu5nnoh: {
        defaultValue: "Back home",
        displayTextArea: !1,
        placeholder: "Back home",
        title: "Hover Text",
        type: f.String
    }
});
ie(Ct, [...Le]);
var ki = ve(Gr), Ci = ve(Dr), Ti = ve(Pr),
    Fi = ["rF6BILRkB", "V_4fAjlse", "GXpkPIKyF", "ZJR__45in", "p1xz__ec1", "hYkybGFLQ", "x39JGlzBF"],
    Vi = "framer-CQ1GR", Oi = {
        GXpkPIKyF: "framer-v-1qkl74q",
        hYkybGFLQ: "framer-v-ohkdvm",
        p1xz__ec1: "framer-v-4hc0ns",
        rF6BILRkB: "framer-v-cac55c",
        V_4fAjlse: "framer-v-mt0ht7",
        x39JGlzBF: "framer-v-c5vzci",
        ZJR__45in: "framer-v-1aa4psi"
    };

function jr(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var Mi = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"}, Ri = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, Li = d(b), Ni = {
        "Project / Desktop": "p1xz__ec1",
        "Project / Mobile": "x39JGlzBF",
        "Project / Tablet": "hYkybGFLQ",
        Desktop: "rF6BILRkB",
        Mobile: "ZJR__45in",
        Tablet: "GXpkPIKyF",
        XL: "V_4fAjlse"
    }, Ii = ({height: t, id: e, title: r, width: a, ...n}) => {
        var s, o, i;
        return {
            ...n,
            NB8eDwGVP: (s = r ?? n.NB8eDwGVP) !== null && s !== void 0 ? s : "Branding and Data, Together At Last\u2728",
            variant: (i = (o = Ni[n.variant]) !== null && o !== void 0 ? o : n.variant) !== null && i !== void 0 ? i : "rF6BILRkB"
        }
    }, Ei = (t, e) => e.join("-") + t.layoutDependency, Di = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                NB8eDwGVP: c,
                ...m
            } = Ii(t), {
                baseVariant: u,
                classNames: v,
                gestureVariant: g,
                setGestureState: h,
                setVariant: S,
                variants: T
            } = se({cycleOrder: Fi, defaultVariant: "rF6BILRkB", variant: i, variantClassNames: Oi}), x = Ei(t, T), R = W(null),
            _ = () => !!["p1xz__ec1", "hYkybGFLQ", "x39JGlzBF"].includes(u),
            E = () => !["ZJR__45in", "x39JGlzBF"].includes(u), D = ee(), H = [Ie], ce = ne();
        return l(te, {
            id: o ?? D, children: l(Li, {
                animate: T, initial: !1, children: l(Ri, {
                    value: Mi, children: l(d.nav, {
                        ...m,
                        className: ae(Vi, ...H, "framer-cac55c", s, v),
                        "data-framer-name": "Desktop",
                        layoutDependency: x,
                        layoutId: "rF6BILRkB",
                        onHoverEnd: () => h({isHovered: !1}),
                        onHoverStart: () => h({isHovered: !0}),
                        onTap: () => h({isPressed: !1}),
                        onTapCancel: () => h({isPressed: !1}),
                        onTapStart: () => h({isPressed: !0}),
                        ref: e ?? R,
                        style: {...n}, ...jr({
                            GXpkPIKyF: {"data-framer-name": "Tablet"},
                            hYkybGFLQ: {"data-framer-name": "Project / Tablet"},
                            p1xz__ec1: {"data-framer-name": "Project / Desktop"},
                            V_4fAjlse: {"data-framer-name": "XL"},
                            x39JGlzBF: {"data-framer-name": "Project / Mobile"},
                            ZJR__45in: {"data-framer-name": "Mobile"}
                        }, u, g),
                        children: N(d.div, {
                            className: "framer-oe6j8g",
                            "data-framer-name": "Nav",
                            layoutDependency: x,
                            layoutId: "F2gfrbj96",
                            children: [N(d.div, {
                                className: "framer-12n6je2",
                                "data-framer-name": "L",
                                layoutDependency: x,
                                layoutId: "a8MAmH_71",
                                children: [_() && l(me, {
                                    children: l(d.div, {
                                        className: "framer-162hx50-container",
                                        layoutDependency: x,
                                        layoutId: "jQ8LLzjsE-container",
                                        children: l(Gr, {
                                            cR5jts_nT: "Datalands",
                                            height: "100%",
                                            id: "jQ8LLzjsE",
                                            layoutId: "jQ8LLzjsE",
                                            Qepu5nnoh: "Back home",
                                            width: "100%"
                                        })
                                    })
                                }), _() && l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            className: "framer-styles-preset-10erd1a",
                                            "data-styles-preset": "yVMxki16r",
                                            style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                            children: "/"
                                        })
                                    }),
                                    className: "framer-1hx0g7g",
                                    fonts: ["Inter"],
                                    layoutDependency: x,
                                    layoutId: "il9LKrfF_",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            className: "framer-styles-preset-10erd1a",
                                            "data-styles-preset": "yVMxki16r",
                                            children: "Branding and Data, Together At Last\u2728"
                                        })
                                    }),
                                    className: "framer-1pi9yet",
                                    fonts: ["Inter"],
                                    layoutDependency: x,
                                    layoutId: "fX5HwqiSG",
                                    style: {
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    text: c,
                                    variants: {
                                        hYkybGFLQ: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                        p1xz__ec1: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                        x39JGlzBF: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"}
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0, ...jr({
                                        hYkybGFLQ: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                    children: "datalands"
                                                })
                                            })
                                        },
                                        p1xz__ec1: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                    children: "DATALANDS"
                                                })
                                            })
                                        },
                                        x39JGlzBF: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                    children: "Datalands"
                                                })
                                            })
                                        }
                                    }, u, g)
                                })]
                            }), N(d.div, {
                                className: "framer-pu97jw",
                                "data-framer-name": "R",
                                layoutDependency: x,
                                layoutId: "SoCwok8qO",
                                children: [E() && l(d.div, {
                                    className: "framer-1urxptm",
                                    "data-framer-name": "Clock",
                                    layoutDependency: x,
                                    layoutId: "ZYgV9iljP",
                                    children: l(me, {
                                        children: l(d.div, {
                                            className: "framer-12awx9v-container",
                                            layoutDependency: x,
                                            layoutId: "dJ_93TFHj-container",
                                            children: l(Dr, {
                                                height: "100%",
                                                id: "dJ_93TFHj",
                                                layoutId: "dJ_93TFHj",
                                                width: "100%"
                                            })
                                        })
                                    })
                                }), l(d.div, {
                                    className: "framer-kgl5kx",
                                    "data-framer-name": "Contact",
                                    layoutDependency: x,
                                    layoutId: "c_zRh0IWN",
                                    children: l(me, {
                                        children: l(d.div, {
                                            className: "framer-pav281-container",
                                            layoutDependency: x,
                                            layoutId: "Sx3lXpQoS-container",
                                            children: l(Pr, {
                                                height: "100%",
                                                id: "Sx3lXpQoS",
                                                layoutId: "Sx3lXpQoS",
                                                qLZaWWgna: "Let\u2019s talk",
                                                variant: "Zilc2JnDX",
                                                width: "100%", ...jr({
                                                    hYkybGFLQ: {variant: "GUKnPL2vM"},
                                                    p1xz__ec1: {variant: "GUKnPL2vM"},
                                                    x39JGlzBF: {variant: "CZPEuPyFx"},
                                                    ZJR__45in: {variant: "iLoISnweI"}
                                                }, u, g)
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        })
    }),
    Pi = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-CQ1GR.framer-1p06kzc, .framer-CQ1GR .framer-1p06kzc { display: block; }", ".framer-CQ1GR.framer-cac55c { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 10px 30px 0px 30px; position: relative; width: 1440px; }", ".framer-CQ1GR .framer-oe6j8g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-CQ1GR .framer-12n6je2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-CQ1GR .framer-162hx50-container, .framer-CQ1GR .framer-12awx9v-container, .framer-CQ1GR .framer-pav281-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-CQ1GR .framer-1hx0g7g, .framer-CQ1GR .framer-1pi9yet { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-CQ1GR .framer-pu97jw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-CQ1GR .framer-1urxptm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-CQ1GR .framer-kgl5kx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CQ1GR.framer-cac55c, .framer-CQ1GR .framer-12n6je2, .framer-CQ1GR .framer-pu97jw, .framer-CQ1GR .framer-1urxptm, .framer-CQ1GR .framer-kgl5kx { gap: 0px; } .framer-CQ1GR.framer-cac55c > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-CQ1GR.framer-cac55c > :first-child { margin-top: 0px; } .framer-CQ1GR.framer-cac55c > :last-child { margin-bottom: 0px; } .framer-CQ1GR .framer-12n6je2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-CQ1GR .framer-12n6je2 > :first-child, .framer-CQ1GR .framer-pu97jw > :first-child, .framer-CQ1GR .framer-1urxptm > :first-child, .framer-CQ1GR .framer-kgl5kx > :first-child { margin-left: 0px; } .framer-CQ1GR .framer-12n6je2 > :last-child, .framer-CQ1GR .framer-pu97jw > :last-child, .framer-CQ1GR .framer-1urxptm > :last-child, .framer-CQ1GR .framer-kgl5kx > :last-child { margin-right: 0px; } .framer-CQ1GR .framer-pu97jw > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-CQ1GR .framer-1urxptm > *, .framer-CQ1GR .framer-kgl5kx > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }", ".framer-CQ1GR.framer-v-1qkl74q.framer-cac55c, .framer-CQ1GR.framer-v-ohkdvm.framer-cac55c { padding: 10px 20px 0px 20px; width: 810px; }", ".framer-CQ1GR.framer-v-1aa4psi.framer-cac55c, .framer-CQ1GR.framer-v-c5vzci.framer-cac55c { padding: 10px 10px 10px 10px; width: 390px; }", ".framer-CQ1GR.framer-v-1aa4psi .framer-oe6j8g, .framer-CQ1GR.framer-v-c5vzci .framer-oe6j8g { flex-direction: column; gap: 16px; justify-content: center; }", ".framer-CQ1GR.framer-v-1aa4psi .framer-pu97jw, .framer-CQ1GR.framer-v-c5vzci .framer-pu97jw { flex-direction: column; gap: 0px; width: 100%; }", ".framer-CQ1GR.framer-v-1aa4psi .framer-kgl5kx, .framer-CQ1GR.framer-v-c5vzci .framer-kgl5kx { justify-content: center; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CQ1GR.framer-v-1aa4psi .framer-oe6j8g, .framer-CQ1GR.framer-v-1aa4psi .framer-pu97jw { gap: 0px; } .framer-CQ1GR.framer-v-1aa4psi .framer-oe6j8g > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-CQ1GR.framer-v-1aa4psi .framer-oe6j8g > :first-child, .framer-CQ1GR.framer-v-1aa4psi .framer-pu97jw > :first-child { margin-top: 0px; } .framer-CQ1GR.framer-v-1aa4psi .framer-oe6j8g > :last-child, .framer-CQ1GR.framer-v-1aa4psi .framer-pu97jw > :last-child { margin-bottom: 0px; } .framer-CQ1GR.framer-v-1aa4psi .framer-pu97jw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ".framer-CQ1GR.framer-v-4hc0ns .framer-12n6je2 { gap: 22px; }", ".framer-CQ1GR.framer-v-4hc0ns .framer-162hx50-container { order: 0; }", ".framer-CQ1GR.framer-v-4hc0ns .framer-1hx0g7g { order: 1; }", ".framer-CQ1GR.framer-v-4hc0ns .framer-1pi9yet { order: 2; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CQ1GR.framer-v-4hc0ns .framer-12n6je2 { gap: 0px; } .framer-CQ1GR.framer-v-4hc0ns .framer-12n6je2 > * { margin: 0px; margin-left: calc(22px / 2); margin-right: calc(22px / 2); } .framer-CQ1GR.framer-v-4hc0ns .framer-12n6je2 > :first-child { margin-left: 0px; } .framer-CQ1GR.framer-v-4hc0ns .framer-12n6je2 > :last-child { margin-right: 0px; } }", ".framer-CQ1GR.framer-v-c5vzci .framer-12n6je2 { flex-wrap: wrap; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CQ1GR.framer-v-c5vzci .framer-oe6j8g, .framer-CQ1GR.framer-v-c5vzci .framer-pu97jw { gap: 0px; } .framer-CQ1GR.framer-v-c5vzci .framer-oe6j8g > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-CQ1GR.framer-v-c5vzci .framer-oe6j8g > :first-child, .framer-CQ1GR.framer-v-c5vzci .framer-pu97jw > :first-child { margin-top: 0px; } .framer-CQ1GR.framer-v-c5vzci .framer-oe6j8g > :last-child, .framer-CQ1GR.framer-v-c5vzci .framer-pu97jw > :last-child { margin-bottom: 0px; } .framer-CQ1GR.framer-v-c5vzci .framer-pu97jw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ...Ne],
    Tt = oe(Di, Pi, "framer-CQ1GR"), ed = Tt;
Tt.displayName = "NAV / Nav";
Tt.defaultProps = {height: 210, width: 1440};
A(Tt, {
    variant: {
        options: ["rF6BILRkB", "V_4fAjlse", "GXpkPIKyF", "ZJR__45in", "p1xz__ec1", "hYkybGFLQ", "x39JGlzBF"],
        optionTitles: ["Desktop", "XL", "Tablet", "Mobile", "Project / Desktop", "Project / Tablet", "Project / Mobile"],
        title: "Variant",
        type: f.Enum
    },
    NB8eDwGVP: {
        defaultValue: "Branding and Data, Together At Last\u2728",
        displayTextArea: !1,
        title: "Title",
        type: f.String
    }
});
ie(Tt, [{
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
}, ...ki, ...Ci, ...Ti, ...ut(Le)], {supportsExplicitInterCodegen: !0});
ke.loadFonts(["CUSTOM;Basis Grotesque Pro Regular", "CUSTOM;Basis Grotesque Pro Regular", "CUSTOM;Basis Grotesque Pro Regular", "CUSTOM;Basis Grotesque Pro Regular"]);
var Vn = [{
        explicitInter: !0,
        fonts: [{
            family: "Basis Grotesque Pro Regular",
            source: "custom",
            url: "https://framerusercontent.com/assets/PXWSbzpi0UzbGXCLBcuijWzlZU.woff2"
        }]
    }],
    On = ['.framer-QRi35 .framer-styles-preset-18v92ny:not(.rich-text-wrapper), .framer-QRi35 .framer-styles-preset-18v92ny.rich-text-wrapper p { --framer-font-family: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-bold: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-bold-italic: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-italic: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-QRi35 .framer-styles-preset-18v92ny:not(.rich-text-wrapper), .framer-QRi35 .framer-styles-preset-18v92ny.rich-text-wrapper p { --framer-font-family: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-bold: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-bold-italic: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-italic: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-QRi35 .framer-styles-preset-18v92ny:not(.rich-text-wrapper), .framer-QRi35 .framer-styles-preset-18v92ny.rich-text-wrapper p { --framer-font-family: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-bold: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-bold-italic: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-family-italic: "Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }'],
    Mn = "framer-QRi35";
ke.loadFonts([]);
var Rn = [{explicitInter: !0, fonts: []}],
    Ln = ['.framer-l2hF2 .framer-styles-preset-112mw6g:not(.rich-text-wrapper), .framer-l2hF2 .framer-styles-preset-112mw6g.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, #000000) /* {"name":"Black"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, #000000); --framer-link-text-decoration: none; transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s; }'],
    Nn = "framer-l2hF2";
var ji = {iUjfqRG6z: {hover: !0}}, zi = ["iUjfqRG6z", "m5ywsJDmp", "ebK7_kN9t"], Bi = "framer-E2Lj2",
    Qi = {ebK7_kN9t: "framer-v-hy0e6l", iUjfqRG6z: "framer-v-1lby3bh", m5ywsJDmp: "framer-v-1ebsmxy"};

function zr(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var Hi = {damping: 28, delay: 0, mass: 1, stiffness: 315, type: "spring"}, Ui = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, Ai = d(b), qi = {L: "iUjfqRG6z", M: "m5ywsJDmp", S: "ebK7_kN9t"},
    Wi = ({background: t, height: e, hoverText: r, id: a, link: n, text: s, title: o, width: i, ...c}) => {
        var m, u, v, g, h, S;
        return {
            ...c,
            DiHcofl1Q: n ?? c.DiHcofl1Q,
            ElhnrKOY8: (m = s ?? c.ElhnrKOY8) !== null && m !== void 0 ? m : "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
            MZ2Epyfww: (u = r ?? c.MZ2Epyfww) !== null && u !== void 0 ? u : "rgb(255, 255, 255)",
            variant: (g = (v = qi[c.variant]) !== null && v !== void 0 ? v : c.variant) !== null && g !== void 0 ? g : "iUjfqRG6z",
            wKRXs1_xQ: (h = o ?? c.wKRXs1_xQ) !== null && h !== void 0 ? h : "New Business",
            XuFRwjIwm: (S = t ?? c.XuFRwjIwm) !== null && S !== void 0 ? S : "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"
        }
    }, Zi = (t, e) => e.join("-") + t.layoutDependency, $i = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                DiHcofl1Q: c,
                wKRXs1_xQ: m,
                XuFRwjIwm: u,
                ElhnrKOY8: v,
                MZ2Epyfww: g,
                ...h
            } = Wi(t), {
                baseVariant: S,
                classNames: T,
                gestureVariant: x,
                setGestureState: R,
                setVariant: _,
                variants: E
            } = se({cycleOrder: zi, defaultVariant: "iUjfqRG6z", enabledGestures: ji, variant: i, variantClassNames: Qi}),
            D = Zi(t, E), H = W(null), ce = ee(), y = [], Te = ne();
        return l(te, {
            id: o ?? ce, children: l(Ai, {
                animate: E, initial: !1, children: l(Ui, {
                    value: Hi, children: l($, {
                        href: c, smoothScroll: !0, children: N(d.a, {
                            ...h,
                            className: `${ae(Bi, ...y, "framer-1lby3bh", s, T)} framer-ixqh2a`,
                            "data-framer-name": "L",
                            layoutDependency: D,
                            layoutId: "iUjfqRG6z",
                            onHoverEnd: () => R({isHovered: !1}),
                            onHoverStart: () => R({isHovered: !0}),
                            onTap: () => R({isPressed: !1}),
                            onTapCancel: () => R({isPressed: !1}),
                            onTapStart: () => R({isPressed: !0}),
                            ref: e ?? H,
                            style: {...n}, ...zr({
                                "iUjfqRG6z-hover": {"data-framer-name": void 0},
                                ebK7_kN9t: {"data-framer-name": "S"},
                                m5ywsJDmp: {"data-framer-name": "M"}
                            }, S, x),
                            children: [N(d.div, {
                                className: "framer-uw36d1",
                                "data-framer-name": "Text",
                                layoutDependency: D,
                                layoutId: "H58gvJQfO",
                                children: [l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                "--framer-font-size": "80px",
                                                "--framer-letter-spacing": "-0.2px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ElhnrKOY8-Iytzg4y6q))"
                                            }, children: "New Business"
                                        })
                                    }),
                                    className: "framer-1hqc52d",
                                    "data-framer-name": "01/",
                                    fonts: ["CUSTOM;Basis Grotesque Pro Regular"],
                                    layoutDependency: D,
                                    layoutId: "A4QVL9OLc",
                                    style: {
                                        "--extracted-r6o4lv": "var(--variable-reference-ElhnrKOY8-Iytzg4y6q)",
                                        "--variable-reference-ElhnrKOY8-Iytzg4y6q": v,
                                        "--variable-reference-MZ2Epyfww-Iytzg4y6q": g
                                    },
                                    text: m,
                                    variants: {
                                        "iUjfqRG6z-hover": {
                                            "--extracted-r6o4lv": "var(--variable-reference-MZ2Epyfww-Iytzg4y6q)",
                                            "--variable-reference-MZ2Epyfww-Iytzg4y6q": g
                                        }
                                    },
                                    verticalAlignment: "center",
                                    withExternalLayout: !0, ...zr({
                                        "iUjfqRG6z-hover": {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                        "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "80px",
                                                        "--framer-letter-spacing": "-0.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MZ2Epyfww-Iytzg4y6q))"
                                                    }, children: "New Business"
                                                })
                                            })
                                        },
                                        ebK7_kN9t: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                        "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "27px",
                                                        "--framer-letter-spacing": "-0.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ElhnrKOY8-Iytzg4y6q))"
                                                    }, children: "New Business"
                                                })
                                            })
                                        },
                                        m5ywsJDmp: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                        "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "50px",
                                                        "--framer-letter-spacing": "-0.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ElhnrKOY8-Iytzg4y6q))"
                                                    }, children: "New Business"
                                                })
                                            })
                                        }
                                    }, S, x)
                                }), l(G, {
                                    __fromCanvasComponent: !0,
                                    children: l(b, {
                                        children: l(d.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                "--framer-font-size": "80px",
                                                "--framer-letter-spacing": "-0.2px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "right",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ElhnrKOY8-Iytzg4y6q))"
                                            }, children: "hi@datalands.co"
                                        })
                                    }),
                                    className: "framer-16npkx7",
                                    "data-framer-name": "Data Visualization",
                                    fonts: ["CUSTOM;Basis Grotesque Pro Regular"],
                                    layoutDependency: D,
                                    layoutId: "FBNkw96xP",
                                    style: {
                                        "--extracted-r6o4lv": "var(--variable-reference-ElhnrKOY8-Iytzg4y6q)",
                                        "--variable-reference-ElhnrKOY8-Iytzg4y6q": v,
                                        "--variable-reference-MZ2Epyfww-Iytzg4y6q": g
                                    },
                                    variants: {
                                        "iUjfqRG6z-hover": {
                                            "--extracted-r6o4lv": "var(--variable-reference-MZ2Epyfww-Iytzg4y6q)",
                                            "--variable-reference-MZ2Epyfww-Iytzg4y6q": g
                                        }
                                    },
                                    verticalAlignment: "center",
                                    withExternalLayout: !0, ...zr({
                                        "iUjfqRG6z-hover": {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                        "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "80px",
                                                        "--framer-letter-spacing": "-0.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "right",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MZ2Epyfww-Iytzg4y6q))"
                                                    }, children: "hi@datalands.co"
                                                })
                                            })
                                        },
                                        ebK7_kN9t: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                        "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "27px",
                                                        "--framer-letter-spacing": "-0.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "right",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ElhnrKOY8-Iytzg4y6q))"
                                                    }, children: "hi@datalands.co"
                                                })
                                            })
                                        },
                                        m5ywsJDmp: {
                                            children: l(b, {
                                                children: l(d.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                        "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "50px",
                                                        "--framer-letter-spacing": "-0.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "right",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ElhnrKOY8-Iytzg4y6q))"
                                                    }, children: "hi@datalands.co"
                                                })
                                            })
                                        }
                                    }, S, x)
                                })]
                            }), l(d.div, {
                                className: "framer-ack39s",
                                "data-framer-name": "Color Frame",
                                layoutDependency: D,
                                layoutId: "owxP03PnO",
                                style: {backgroundColor: u}
                            })]
                        })
                    })
                })
            })
        })
    }),
    Yi = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-E2Lj2.framer-ixqh2a, .framer-E2Lj2 .framer-ixqh2a { display: block; }", ".framer-E2Lj2.framer-1lby3bh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 1360px; }", ".framer-E2Lj2 .framer-uw36d1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 15px 0px; position: relative; width: 100%; }", ".framer-E2Lj2 .framer-1hqc52d, .framer-E2Lj2 .framer-16npkx7 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-E2Lj2 .framer-ack39s { bottom: -100px; flex: none; height: 106px; left: 0px; overflow: visible; position: absolute; width: 100%; z-index: 0; }", ".framer-E2Lj2.framer-v-1ebsmxy.framer-1lby3bh { cursor: unset; height: 70px; width: 810px; }", ".framer-E2Lj2.framer-v-1ebsmxy .framer-1hqc52d { align-self: stretch; }", ".framer-E2Lj2.framer-v-hy0e6l.framer-1lby3bh { cursor: unset; height: 44px; width: 390px; }", ".framer-E2Lj2.framer-v-hy0e6l .framer-1hqc52d, .framer-E2Lj2.framer-v-hy0e6l .framer-16npkx7 { flex: none; white-space: pre; width: auto; }", ".framer-E2Lj2.framer-v-hy0e6l .framer-ack39s { bottom: -104px; }", ".framer-E2Lj2.framer-v-1lby3bh.hover .framer-uw36d1 { z-index: 1; }", ".framer-E2Lj2.framer-v-1lby3bh.hover .framer-ack39s { bottom: -1px; height: unset; top: 0px; }"],
    Ft = oe($i, Yi, "framer-E2Lj2"), Br = Ft;
Ft.displayName = "FOOTER / Email";
Ft.defaultProps = {height: 105, width: 1360};
A(Ft, {
    variant: {
        options: ["iUjfqRG6z", "m5ywsJDmp", "ebK7_kN9t"],
        optionTitles: ["L", "M", "S"],
        title: "Variant",
        type: f.Enum
    },
    DiHcofl1Q: {title: "Link", type: f.Link},
    wKRXs1_xQ: {defaultValue: "New Business", displayTextArea: !1, title: "Title", type: f.String},
    XuFRwjIwm: {
        defaultValue: 'var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)) /* {"name":"Black"} */',
        title: "Background",
        type: f.Color
    },
    ElhnrKOY8: {
        defaultValue: 'var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)) /* {"name":"Black"} */',
        title: "Text",
        type: f.Color
    },
    MZ2Epyfww: {defaultValue: "rgb(255, 255, 255)", title: "Hover Text", type: f.Color}
});
ie(Ft, [{
    family: "Basis Grotesque Pro Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/PXWSbzpi0UzbGXCLBcuijWzlZU.woff2"
}]);
ke.loadFonts(["CUSTOM;Martian Mono sWd Rg"]);
var In = [{
        family: "Martian Mono sWd Rg",
        source: "custom",
        url: "https://framerusercontent.com/assets/PdRMkWERqi1oLvjbWg6YBccKxLI.woff2"
    }],
    En = ['.framer-Iggn9 .framer-styles-preset-9ebbf9:not(.rich-text-wrapper), .framer-Iggn9 .framer-styles-preset-9ebbf9.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.1em; --framer-line-height: 1.45em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; }', '@media (max-width: 1439px) and (min-width: 810px) { .framer-Iggn9 .framer-styles-preset-9ebbf9:not(.rich-text-wrapper), .framer-Iggn9 .framer-styles-preset-9ebbf9.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.1em; --framer-line-height: 1.45em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-Iggn9 .framer-styles-preset-9ebbf9:not(.rich-text-wrapper), .framer-Iggn9 .framer-styles-preset-9ebbf9.rich-text-wrapper p { --framer-font-family: "Martian Mono sWd Rg", "Martian Mono sWd Rg Placeholder", monospace; --framer-font-size: 10px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.1em; --framer-line-height: 1.45em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }'],
    Dn = "framer-Iggn9";
var Ki = {
    amGkgikV3: {hover: !0},
    cataEYT1T: {hover: !0},
    MvWW28SGA: {hover: !0},
    sh_G3fO7r: {hover: !0},
    t8j5DSe2J: {hover: !0}
}, Xi = ["MvWW28SGA", "t8j5DSe2J", "cataEYT1T", "amGkgikV3", "sh_G3fO7r"], el = "framer-QSmH6", tl = {
    amGkgikV3: "framer-v-18da9ja",
    cataEYT1T: "framer-v-r1i7z2",
    MvWW28SGA: "framer-v-17cmpp7",
    sh_G3fO7r: "framer-v-17z54xu",
    t8j5DSe2J: "framer-v-18fusu9"
};

function Qr(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var rl = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"}, al = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, nl = d(b),
    ol = {"BACK-HOME": "sh_G3fO7r", Circle: "MvWW28SGA", Mobile: "amGkgikV3", Square: "t8j5DSe2J", Tablet: "cataEYT1T"},
    sl = ({height: t, id: e, link: r, title: a, username: n, width: s, ...o}) => {
        var i, c, m, u;
        return {
            ...o,
            bFFMwtYkc: r ?? o.bFFMwtYkc,
            Dn__nSJld: (i = a ?? o.Dn__nSJld) !== null && i !== void 0 ? i : "IG",
            variant: (m = (c = ol[o.variant]) !== null && c !== void 0 ? c : o.variant) !== null && m !== void 0 ? m : "MvWW28SGA",
            xmGPpz7yc: (u = n ?? o.xmGPpz7yc) !== null && u !== void 0 ? u : "@datalands"
        }
    }, il = (t, e) => e.join("-") + t.layoutDependency, ll = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                Dn__nSJld: c,
                bFFMwtYkc: m,
                xmGPpz7yc: u,
                ...v
            } = sl(t), {
                baseVariant: g,
                classNames: h,
                gestureVariant: S,
                setGestureState: T,
                setVariant: x,
                variants: R
            } = se({cycleOrder: Xi, defaultVariant: "MvWW28SGA", enabledGestures: Ki, variant: i, variantClassNames: tl}),
            _ = il(t, R), E = W(null),
            D = () => S === "amGkgikV3-hover" ? !0 : !(["cataEYT1T-hover", "sh_G3fO7r-hover"].includes(S) || ["cataEYT1T", "amGkgikV3", "sh_G3fO7r"].includes(g)),
            H = ee(), ce = [Mn, Dn], y = ne();
        return l(te, {
            id: o ?? H, children: l(nl, {
                animate: R, initial: !1, children: l(al, {
                    value: rl, children: l($, {
                        href: m, openInNewTab: !0, children: N(d.a, {
                            ...v,
                            className: `${ae(el, ...ce, "framer-17cmpp7", s, h)} framer-ked2fs`,
                            "data-border": !0,
                            "data-framer-name": "Circle",
                            layoutDependency: _,
                            layoutId: "MvWW28SGA",
                            onHoverEnd: () => T({isHovered: !1}),
                            onHoverStart: () => T({isHovered: !0}),
                            onTap: () => T({isPressed: !1}),
                            onTapCancel: () => T({isPressed: !1}),
                            onTapStart: () => T({isPressed: !0}),
                            ref: e ?? E,
                            style: {
                                "--border-bottom-width": "2px",
                                "--border-color": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                "--border-left-width": "2px",
                                "--border-right-width": "2px",
                                "--border-style": "solid",
                                "--border-top-width": "2px",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderBottomLeftRadius: 300,
                                borderBottomRightRadius: 300,
                                borderTopLeftRadius: 300,
                                borderTopRightRadius: 300, ...n
                            },
                            variants: {
                                "amGkgikV3-hover": {backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                "cataEYT1T-hover": {backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                "MvWW28SGA-hover": {
                                    "--border-color": "var(--token-d85d8d2e-a90b-41e9-8852-32af98456a8d, rgb(1, 1, 1))",
                                    backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"
                                },
                                "sh_G3fO7r-hover": {backgroundColor: "rgb(148, 188, 238)"},
                                "t8j5DSe2J-hover": {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px",
                                    backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                },
                                amGkgikV3: {
                                    "--border-bottom-width": "1px",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-top-width": "1px"
                                },
                                sh_G3fO7r: {
                                    "--border-color": "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))",
                                    backgroundColor: "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))"
                                },
                                t8j5DSe2J: {
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                }
                            }, ...Qr({
                                "amGkgikV3-hover": {"data-framer-name": void 0},
                                "cataEYT1T-hover": {"data-framer-name": void 0},
                                "MvWW28SGA-hover": {"data-framer-name": void 0},
                                "sh_G3fO7r-hover": {"data-framer-name": void 0},
                                "t8j5DSe2J-hover": {"data-framer-name": void 0},
                                amGkgikV3: {"data-framer-name": "Mobile"},
                                cataEYT1T: {"data-framer-name": "Tablet"},
                                sh_G3fO7r: {"data-framer-name": "BACK-HOME"},
                                t8j5DSe2J: {"data-framer-name": "Square"}
                            }, g, S),
                            children: [l(d.div, {
                                className: "framer-11ts9ks",
                                layoutDependency: _,
                                layoutId: "dr7XL7nAd",
                                children: l(d.div, {
                                    className: "framer-ws4vgg", layoutDependency: _, layoutId: "PUxNOohI1", children: l(G, {
                                        __fromCanvasComponent: !0,
                                        children: l(b, {
                                            children: l(d.p, {
                                                className: "framer-styles-preset-18v92ny",
                                                "data-styles-preset": "PCUpq0UFw",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                children: "IG"
                                            })
                                        }),
                                        className: "framer-5nmpj1",
                                        layoutDependency: _,
                                        layoutId: "jOieqou6d",
                                        style: {
                                            "--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline"
                                        },
                                        text: c,
                                        variants: {
                                            "amGkgikV3-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                            "cataEYT1T-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                            "MvWW28SGA-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                            "t8j5DSe2J-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                            sh_G3fO7r: {"--extracted-r6o4lv": "var(--token-8649cc0c-a3f1-4b5f-b6f4-2d62229c07ab, rgb(231, 229, 221))"}
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0, ...Qr({
                                            "amGkgikV3-hover": {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-18v92ny",
                                                        "data-styles-preset": "PCUpq0UFw",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "IG"
                                                    })
                                                })
                                            },
                                            "cataEYT1T-hover": {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-18v92ny",
                                                        "data-styles-preset": "PCUpq0UFw",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "IG"
                                                    })
                                                })
                                            },
                                            "MvWW28SGA-hover": {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-18v92ny",
                                                        "data-styles-preset": "PCUpq0UFw",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "IG"
                                                    })
                                                })
                                            },
                                            "sh_G3fO7r-hover": {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-18v92ny",
                                                        "data-styles-preset": "PCUpq0UFw",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-8649cc0c-a3f1-4b5f-b6f4-2d62229c07ab, rgb(231, 229, 221)))"},
                                                        children: "IG"
                                                    })
                                                })
                                            },
                                            "t8j5DSe2J-hover": {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-18v92ny",
                                                        "data-styles-preset": "PCUpq0UFw",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "IG"
                                                    })
                                                })
                                            },
                                            sh_G3fO7r: {
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-9ebbf9",
                                                        "data-styles-preset": "XXW7z6iRw",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-8649cc0c-a3f1-4b5f-b6f4-2d62229c07ab, rgb(231, 229, 221)))"},
                                                        children: "IG"
                                                    })
                                                })
                                            }
                                        }, g, S)
                                    })
                                })
                            }), D() && l(G, {
                                __fromCanvasComponent: !0,
                                children: l(b, {
                                    children: l(d.p, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBTZW1pQ29uZGVuc2VkIEV4dHJhTGlnaHQ=",
                                            "--framer-font-family": '"Martian Mono SemiCondensed ExtraLight", "Martian Mono SemiCondensed ExtraLight Placeholder", monospace',
                                            "--framer-font-size": "12px",
                                            "--framer-letter-spacing": "0.08em",
                                            "--framer-line-height": "1.25em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))",
                                            "--framer-text-transform": "uppercase"
                                        }, children: "@datalands"
                                    })
                                }),
                                className: "framer-aeh4ay",
                                fonts: ["CUSTOM;Martian Mono SemiCondensed ExtraLight"],
                                layoutDependency: _,
                                layoutId: "UEgNhOHrs",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                text: u,
                                variants: {
                                    "amGkgikV3-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                    "MvWW28SGA-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                    "t8j5DSe2J-hover": {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"}
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0, ...Qr({
                                    "amGkgikV3-hover": {
                                        children: l(b, {
                                            children: l(d.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBTZW1pQ29uZGVuc2VkIEV4dHJhTGlnaHQ=",
                                                    "--framer-font-family": '"Martian Mono SemiCondensed ExtraLight", "Martian Mono SemiCondensed ExtraLight Placeholder", monospace',
                                                    "--framer-font-size": "10px",
                                                    "--framer-letter-spacing": "0.08em",
                                                    "--framer-line-height": "1.25em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))",
                                                    "--framer-text-transform": "uppercase"
                                                }, children: "@datalands"
                                            })
                                        })
                                    },
                                    "MvWW28SGA-hover": {
                                        children: l(b, {
                                            children: l(d.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBTZW1pQ29uZGVuc2VkIEV4dHJhTGlnaHQ=",
                                                    "--framer-font-family": '"Martian Mono SemiCondensed ExtraLight", "Martian Mono SemiCondensed ExtraLight Placeholder", monospace',
                                                    "--framer-font-size": "12px",
                                                    "--framer-letter-spacing": "0.08em",
                                                    "--framer-line-height": "1.25em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))",
                                                    "--framer-text-transform": "uppercase"
                                                }, children: "@datalands"
                                            })
                                        })
                                    },
                                    "t8j5DSe2J-hover": {
                                        children: l(b, {
                                            children: l(d.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBTZW1pQ29uZGVuc2VkIEV4dHJhTGlnaHQ=",
                                                    "--framer-font-family": '"Martian Mono SemiCondensed ExtraLight", "Martian Mono SemiCondensed ExtraLight Placeholder", monospace',
                                                    "--framer-font-size": "12px",
                                                    "--framer-letter-spacing": "0.08em",
                                                    "--framer-line-height": "1.25em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))",
                                                    "--framer-text-transform": "uppercase"
                                                }, children: "@datalands"
                                            })
                                        })
                                    }
                                }, g, S)
                            })]
                        })
                    })
                })
            })
        })
    }),
    cl = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QSmH6.framer-ked2fs, .framer-QSmH6 .framer-ked2fs { display: block; }", ".framer-QSmH6.framer-17cmpp7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: 400px; justify-content: center; overflow: visible; padding: 48px 48px 48px 48px; position: relative; text-decoration: none; width: 400px; }", ".framer-QSmH6 .framer-11ts9ks { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-QSmH6 .framer-ws4vgg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 38px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-QSmH6 .framer-5nmpj1, .framer-QSmH6 .framer-aeh4ay { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QSmH6.framer-17cmpp7, .framer-QSmH6 .framer-11ts9ks, .framer-QSmH6 .framer-ws4vgg { gap: 0px; } .framer-QSmH6.framer-17cmpp7 > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-QSmH6.framer-17cmpp7 > :first-child { margin-top: 0px; } .framer-QSmH6.framer-17cmpp7 > :last-child { margin-bottom: 0px; } .framer-QSmH6 .framer-11ts9ks > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-QSmH6 .framer-11ts9ks > :first-child, .framer-QSmH6 .framer-ws4vgg > :first-child { margin-left: 0px; } .framer-QSmH6 .framer-11ts9ks > :last-child, .framer-QSmH6 .framer-ws4vgg > :last-child { margin-right: 0px; } .framer-QSmH6 .framer-ws4vgg > * { margin: 0px; margin-left: calc(38px / 2); margin-right: calc(38px / 2); } }", ".framer-QSmH6.framer-v-r1i7z2.framer-17cmpp7 { height: 280px; width: 280px; }", ".framer-QSmH6.framer-v-18da9ja.framer-17cmpp7 { height: 180px; padding: 32px 32px 32px 32px; width: 180px; }", ".framer-QSmH6.framer-v-17z54xu.framer-17cmpp7 { height: 160px; width: min-content; }", ".framer-QSmH6.framer-v-17z54xu .framer-11ts9ks { width: 756px; }", ".framer-QSmH6.framer-v-17z54xu .framer-ws4vgg, .framer-QSmH6.framer-v-17z54xu .framer-5nmpj1, .framer-QSmH6.framer-v-17cmpp7.hover .framer-aeh4ay, .framer-QSmH6.framer-v-18fusu9.hover .framer-aeh4ay { order: 0; }", ".framer-QSmH6.framer-v-17cmpp7.hover .framer-11ts9ks { order: 1; }", ".framer-QSmH6.framer-v-18fusu9.hover .framer-11ts9ks { order: 2; }", ...On, ...En, '.framer-QSmH6[data-border="true"]::after, .framer-QSmH6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    Vt = oe(ll, cl, "framer-QSmH6"), Ot = Vt;
Vt.displayName = "FOOTER / Socials";
Vt.defaultProps = {height: 400, width: 400};
A(Vt, {
    variant: {
        options: ["MvWW28SGA", "t8j5DSe2J", "cataEYT1T", "amGkgikV3", "sh_G3fO7r"],
        optionTitles: ["Circle", "Square", "Tablet", "Mobile", "BACK-HOME"],
        title: "Variant",
        type: f.Enum
    },
    Dn__nSJld: {defaultValue: "IG", displayTextArea: !1, title: "Title", type: f.String},
    bFFMwtYkc: {title: "Link", type: f.Link},
    xmGPpz7yc: {defaultValue: "@datalands", displayTextArea: !1, title: "Username", type: f.String}
});
ie(Vt, [...Vn, ...In]);
var ml = ve(Ot), dl = ve(Br), ul = ["YyQwSl1BQ", "PqkgxzN0r", "mt31XYL_Q", "aykFk6tQL"], fl = "framer-TFLm5", hl = {
    aykFk6tQL: "framer-v-tzk43m",
    mt31XYL_Q: "framer-v-bcsr7t",
    PqkgxzN0r: "framer-v-1vsfom",
    YyQwSl1BQ: "framer-v-cdzk7k"
};

function pe(t, ...e) {
    let r = {};
    return e?.forEach(a => a && Object.assign(r, t[a])), r
}

var pl = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"}, yl = ({value: t, children: e}) => {
        let r = K(B), a = t ?? r.transition, n = z(() => ({...r, transition: a}), [JSON.stringify(a)]);
        return l(B.Provider, {value: n, children: e})
    }, gl = d(b), xl = {"Project-Footer": "aykFk6tQL", Desktop: "YyQwSl1BQ", Mobile: "mt31XYL_Q", Tablet: "PqkgxzN0r"},
    vl = ({background: t, height: e, id: r, width: a, ...n}) => {
        var s, o, i;
        return {
            ...n,
            CIKCwTqeQ: (s = t ?? n.CIKCwTqeQ) !== null && s !== void 0 ? s : "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))",
            variant: (i = (o = xl[n.variant]) !== null && o !== void 0 ? o : n.variant) !== null && i !== void 0 ? i : "YyQwSl1BQ"
        }
    }, bl = (t, e) => e.join("-") + t.layoutDependency, wl = J(function (t, e) {
        let {activeLocale: r, setLocale: a} = re(), {
                style: n,
                className: s,
                layoutId: o,
                variant: i,
                CIKCwTqeQ: c,
                ...m
            } = vl(t), {
                baseVariant: u,
                classNames: v,
                gestureVariant: g,
                setGestureState: h,
                setVariant: S,
                variants: T
            } = se({cycleOrder: ul, defaultVariant: "YyQwSl1BQ", variant: i, variantClassNames: hl}), x = bl(t, T), R = W(null),
            _ = Hr(), E = () => u !== "aykFk6tQL", D = () => u !== "mt31XYL_Q", H = ee(), ce = [Ie, Nn], y = ne();
        return l(te, {
            id: o ?? H, children: l(gl, {
                animate: T, initial: !1, children: l(yl, {
                    value: pl, children: N(d.div, {
                        ...m,
                        className: ae(fl, ...ce, "framer-cdzk7k", s, v),
                        "data-framer-name": "Desktop",
                        layoutDependency: x,
                        layoutId: "YyQwSl1BQ",
                        onHoverEnd: () => h({isHovered: !1}),
                        onHoverStart: () => h({isHovered: !0}),
                        onTap: () => h({isPressed: !1}),
                        onTapCancel: () => h({isPressed: !1}),
                        onTapStart: () => h({isPressed: !0}),
                        ref: e ?? R,
                        style: {backgroundColor: c, ...n},
                        variants: {aykFk6tQL: {backgroundColor: "var(--token-8649cc0c-a3f1-4b5f-b6f4-2d62229c07ab, rgb(231, 229, 221))"}}, ...pe({
                            aykFk6tQL: {"data-framer-name": "Project-Footer"},
                            mt31XYL_Q: {"data-framer-name": "Mobile"},
                            PqkgxzN0r: {"data-framer-name": "Tablet"}
                        }, u, g),
                        children: [l(G, {
                            __fromCanvasComponent: !0,
                            children: l(b, {
                                children: l(d.p, {
                                    style: {
                                        "--font-selector": "Q1VTVE9NO09aSUsgQmxhY2s=",
                                        "--framer-font-family": '"OZIK Black", "OZIK Black Placeholder", sans-serif',
                                        "--framer-font-size": "357.579px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "0.83em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"
                                    }, children: "Datalands"
                                })
                            }),
                            className: "framer-13xba8i",
                            fonts: ["CUSTOM;OZIK Black"],
                            layoutDependency: x,
                            layoutId: "qpAzShpx0",
                            style: {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                            variants: {aykFk6tQL: {"--extracted-r6o4lv": "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))"}},
                            verticalAlignment: "center",
                            viewBox: "0 0 1379.57579 297",
                            withExternalLayout: !0, ...pe({
                                aykFk6tQL: {
                                    children: l(b, {
                                        children: l(d.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO09aSUsgQmxhY2s=",
                                                "--framer-font-family": '"OZIK Black", "OZIK Black Placeholder", sans-serif',
                                                "--framer-font-size": "357.579px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "0.83em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238)))"
                                            }, children: "Datalands"
                                        })
                                    })
                                }
                            }, u, g)
                        }), N(d.div, {
                            className: "framer-1hotl93",
                            "data-framer-name": "SOCIAL",
                            layoutDependency: x,
                            layoutId: "cSjAaxcF3",
                            children: [l(Ar, {
                                links: [{href: {webPageId: "augiA20Il"}, implicitPathVariables: void 0}],
                                children: Te => l(me, {
                                    width: `max((${y?.width || "100vw"} - 180px) / 3, 0px)`, ...pe({
                                        aykFk6tQL: {width: `max(${y?.width || "100vw"} - 60px, 0px)`},
                                        mt31XYL_Q: {width: `max((${y?.width || "100vw"} - 36px) / 3, 0px)`},
                                        PqkgxzN0r: {width: `max((${y?.width || "100vw"} - 64px) / 3, 0px)`}
                                    }, u, g),
                                    children: l(d.div, {
                                        className: "framer-deul6n-container",
                                        layoutDependency: x,
                                        layoutId: "FwmG_TSLZ-container",
                                        children: l(Ot, {
                                            bFFMwtYkc: "https://instagram.com/datalands",
                                            Dn__nSJld: "IG",
                                            height: "100%",
                                            id: "FwmG_TSLZ",
                                            layoutId: "FwmG_TSLZ",
                                            style: {width: "100%"},
                                            variant: "MvWW28SGA",
                                            width: "100%",
                                            xmGPpz7yc: "@datalands", ...pe({
                                                aykFk6tQL: {
                                                    bFFMwtYkc: Te[0],
                                                    Dn__nSJld: "BACK HOME",
                                                    variant: "sh_G3fO7r"
                                                }, mt31XYL_Q: {variant: "amGkgikV3"}, PqkgxzN0r: {variant: "cataEYT1T"}
                                            }, u, g)
                                        })
                                    })
                                })
                            }), E() && l(me, {
                                width: `max((${y?.width || "100vw"} - 180px) / 3, 0px)`, ...pe({
                                    mt31XYL_Q: {width: `max((${y?.width || "100vw"} - 36px) / 3, 0px)`},
                                    PqkgxzN0r: {width: `max((${y?.width || "100vw"} - 64px) / 3, 0px)`}
                                }, u, g),
                                children: l(d.div, {
                                    className: "framer-1m835m3-container",
                                    layoutDependency: x,
                                    layoutId: "bEneGy86T-container",
                                    children: l(Ot, {
                                        bFFMwtYkc: "https://twitter.com/wearedatalands",
                                        Dn__nSJld: "TW",
                                        height: "100%",
                                        id: "bEneGy86T",
                                        layoutId: "bEneGy86T",
                                        style: {width: "100%"},
                                        variant: "t8j5DSe2J",
                                        width: "100%",
                                        xmGPpz7yc: "@wearedatalands", ...pe({
                                            mt31XYL_Q: {variant: "amGkgikV3"},
                                            PqkgxzN0r: {variant: "cataEYT1T"}
                                        }, u, g)
                                    })
                                })
                            }), E() && l(me, {
                                width: `max((${y?.width || "100vw"} - 180px) / 3, 0px)`, ...pe({
                                    mt31XYL_Q: {width: `max((${y?.width || "100vw"} - 36px) / 3, 0px)`},
                                    PqkgxzN0r: {width: `max((${y?.width || "100vw"} - 64px) / 3, 0px)`}
                                }, u, g),
                                children: l(d.div, {
                                    className: "framer-1m8p2ot-container",
                                    layoutDependency: x,
                                    layoutId: "UvkG10nTr-container",
                                    children: l(Ot, {
                                        bFFMwtYkc: "https://behance.net/datalands",
                                        Dn__nSJld: "BE",
                                        height: "100%",
                                        id: "UvkG10nTr",
                                        layoutId: "UvkG10nTr",
                                        style: {width: "100%"},
                                        variant: "MvWW28SGA",
                                        width: "100%",
                                        xmGPpz7yc: "/datalands", ...pe({
                                            mt31XYL_Q: {variant: "amGkgikV3"},
                                            PqkgxzN0r: {variant: "cataEYT1T"}
                                        }, u, g)
                                    })
                                })
                            })]
                        }), l(d.div, {
                            className: "framer-121r83o",
                            "data-framer-name": "Contact",
                            layoutDependency: x,
                            layoutId: "FGP8i4eJx",
                            children: N(d.div, {
                                className: "framer-1xm7pyg",
                                "data-framer-name": "Contact-Box",
                                layoutDependency: x,
                                layoutId: "XpqGd8fxE",
                                children: [l(d.div, {
                                    className: "framer-13n1x8x",
                                    "data-framer-name": "Contact-Part",
                                    layoutDependency: x,
                                    layoutId: "YgTA0I4C5",
                                    children: l(me, {
                                        width: `calc(${y?.width || "100vw"} - 60px)`, ...pe({
                                            mt31XYL_Q: {width: `calc(${y?.width || "100vw"} - 20px)`},
                                            PqkgxzN0r: {width: `calc(${y?.width || "100vw"} - 40px)`}
                                        }, u, g),
                                        children: l(d.div, {
                                            className: "framer-1028idn-container",
                                            layoutDependency: x,
                                            layoutId: "rD5Sup4kA-container",
                                            children: l(Br, {
                                                DiHcofl1Q: "mailto:hi@datalands.co",
                                                ElhnrKOY8: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                                height: "100%",
                                                id: "rD5Sup4kA",
                                                layoutId: "rD5Sup4kA",
                                                MZ2Epyfww: "rgb(255, 255, 255)",
                                                style: {width: "100%"},
                                                variant: "iUjfqRG6z",
                                                width: "100%",
                                                wKRXs1_xQ: "New Business",
                                                XuFRwjIwm: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))", ...pe({
                                                    aykFk6tQL: {
                                                        ElhnrKOY8: "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))",
                                                        MZ2Epyfww: "var(--token-8649cc0c-a3f1-4b5f-b6f4-2d62229c07ab, rgb(231, 229, 221))",
                                                        XuFRwjIwm: "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))"
                                                    }, mt31XYL_Q: {variant: "ebK7_kN9t"}, PqkgxzN0r: {variant: "m5ywsJDmp"}
                                                }, u, g)
                                            })
                                        })
                                    })
                                }), N(d.div, {
                                    className: "framer-1frw3v2",
                                    "data-framer-name": "TM",
                                    layoutDependency: x,
                                    layoutId: "Abw7hgTFr",
                                    children: [l(d.div, {
                                        className: "framer-1ui4kwx",
                                        "data-framer-name": "TM",
                                        layoutDependency: x,
                                        layoutId: "c1O5Tb9pB",
                                        children: l(G, {
                                            __fromCanvasComponent: !0,
                                            children: l(b, {
                                                children: l(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                    children: "\xA92019-24 Datalands\u2122 | Lands of Data\xAE LLC"
                                                })
                                            }),
                                            className: "framer-gutzrk",
                                            "data-framer-name": "2023 Datalands\xAE LLC",
                                            fonts: ["Inter"],
                                            layoutDependency: x,
                                            layoutId: "CE25nyV9C",
                                            style: {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                            variants: {aykFk6tQL: {"--extracted-r6o4lv": "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))"}},
                                            verticalAlignment: "center",
                                            withExternalLayout: !0, ...pe({
                                                aykFk6tQL: {
                                                    children: l(b, {
                                                        children: l(d.p, {
                                                            className: "framer-styles-preset-10erd1a",
                                                            "data-styles-preset": "yVMxki16r",
                                                            style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238)))"},
                                                            children: "\xA92019-24 Datalands\u2122 | Lands of Data\xAE LLC"
                                                        })
                                                    })
                                                },
                                                mt31XYL_Q: {
                                                    children: l(b, {
                                                        children: l(d.p, {
                                                            style: {
                                                                "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBFeHRyYUxpZ2h0",
                                                                "--framer-font-family": '"Martian Mono ExtraLight", "Martian Mono ExtraLight Placeholder", monospace',
                                                                "--framer-font-size": "10.5px",
                                                                "--framer-letter-spacing": "0.02em",
                                                                "--framer-line-height": "1.25em",
                                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))",
                                                                "--framer-text-transform": "uppercase"
                                                            },
                                                            children: "\xA92019-24 Datalands\u2122 | Lands of Data\xAE LLC"
                                                        })
                                                    }), fonts: ["CUSTOM;Martian Mono ExtraLight"]
                                                }
                                            }, u, g)
                                        })
                                    }), l(d.div, {
                                        className: "framer-g4579x",
                                        "data-framer-name": "Socials",
                                        layoutDependency: x,
                                        layoutId: "DBvVBSQJI",
                                        children: D() && N(d.div, {
                                            className: "framer-158vx9f",
                                            layoutDependency: x,
                                            layoutId: "J5Y9hktEq",
                                            children: [l(G, {
                                                __fromCanvasComponent: !0,
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-10erd1a",
                                                        "data-styles-preset": "yVMxki16r",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                        children: l($, {
                                                            href: "instagram.com/datalands",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: l(d.a, {
                                                                className: "framer-styles-preset-112mw6g",
                                                                "data-styles-preset": "FG5t4ckx5",
                                                                children: "IG,"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-15rra3n",
                                                "data-framer-name": "IG",
                                                fonts: ["Inter"],
                                                layoutDependency: x,
                                                layoutId: "LHrcoOPlB",
                                                style: {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), l(G, {
                                                __fromCanvasComponent: !0,
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-10erd1a",
                                                        "data-styles-preset": "yVMxki16r",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                        children: l($, {
                                                            href: "twitter.com/wearedatalands",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: l(d.a, {
                                                                className: "framer-styles-preset-112mw6g",
                                                                "data-styles-preset": "FG5t4ckx5",
                                                                children: "TW,"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1nonhy2",
                                                "data-framer-name": "TW",
                                                fonts: ["Inter"],
                                                layoutDependency: x,
                                                layoutId: "F4RwfGaNA",
                                                style: {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), l(G, {
                                                __fromCanvasComponent: !0,
                                                children: l(b, {
                                                    children: l(d.p, {
                                                        className: "framer-styles-preset-10erd1a",
                                                        "data-styles-preset": "yVMxki16r",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                        children: l($, {
                                                            href: "behance.net/datalands",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: l(d.a, {
                                                                className: "framer-styles-preset-112mw6g",
                                                                "data-styles-preset": "FG5t4ckx5",
                                                                children: "BE,"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1xhchkh",
                                                "data-framer-name": "BE",
                                                fonts: ["Inter"],
                                                layoutDependency: x,
                                                layoutId: "UPskWQrrM",
                                                style: {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })]
                                        })
                                    }), l(d.div, {
                                        className: "framer-18g2h7o",
                                        "data-framer-name": "Email",
                                        layoutDependency: x,
                                        layoutId: "RwdiE_xTf",
                                        children: l(G, {
                                            __fromCanvasComponent: !0,
                                            children: l(b, {
                                                children: N(d.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                    children: ["hi", l($, {
                                                        href: "mailto:Gavin%20Potenza%20%3Cgavin%40datalands.co%3E",
                                                        openInNewTab: !1,
                                                        smoothScroll: !1,
                                                        children: l(d.a, {children: "@datalands.co"})
                                                    })]
                                                })
                                            }),
                                            className: "framer-1jj08vo",
                                            "data-framer-name": "Contact @datalands.co",
                                            fonts: ["Inter"],
                                            layoutDependency: x,
                                            layoutId: "hsKhjF95W",
                                            style: {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                            variants: {aykFk6tQL: {"--extracted-r6o4lv": "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))"}},
                                            verticalAlignment: "center",
                                            withExternalLayout: !0, ...pe({
                                                aykFk6tQL: {
                                                    children: l(b, {
                                                        children: N(d.p, {
                                                            className: "framer-styles-preset-10erd1a",
                                                            "data-styles-preset": "yVMxki16r",
                                                            style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238)))"},
                                                            children: ["hi", l($, {
                                                                href: "mailto:Gavin%20Potenza%20%3Cgavin%40datalands.co%3E",
                                                                openInNewTab: !1,
                                                                smoothScroll: !1,
                                                                children: l(d.a, {children: "@datalands.co"})
                                                            })]
                                                        })
                                                    })
                                                },
                                                mt31XYL_Q: {
                                                    children: l(b, {
                                                        children: N(d.p, {
                                                            style: {
                                                                "--font-selector": "Q1VTVE9NO01hcnRpYW4gTW9ubyBFeHRyYUxpZ2h0",
                                                                "--framer-font-family": '"Martian Mono ExtraLight", "Martian Mono ExtraLight Placeholder", monospace',
                                                                "--framer-font-size": "10.5px",
                                                                "--framer-letter-spacing": "0.02em",
                                                                "--framer-line-height": "1.25em",
                                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))",
                                                                "--framer-text-transform": "uppercase"
                                                            },
                                                            children: ["hi", l($, {
                                                                href: "mailto:Gavin%20Potenza%20%3Cgavin%40datalands.co%3E",
                                                                openInNewTab: !1,
                                                                smoothScroll: !1,
                                                                children: l(d.a, {children: "@datalands.co"})
                                                            })]
                                                        })
                                                    }), fonts: ["CUSTOM;Martian Mono ExtraLight"]
                                                }
                                            }, u, g)
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })
        })
    }),
    Sl = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-TFLm5.framer-1tnusoc, .framer-TFLm5 .framer-1tnusoc { display: block; }", ".framer-TFLm5.framer-cdzk7k { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 40px 30px; position: relative; width: 1440px; }", ".framer-TFLm5 .framer-13xba8i { flex: none; height: auto; position: relative; white-space: pre; width: 100%; }", ".framer-TFLm5 .framer-1hotl93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 20px 0px 20px 0px; position: relative; width: 100%; }", ".framer-TFLm5 .framer-deul6n-container, .framer-TFLm5 .framer-1m835m3-container, .framer-TFLm5 .framer-1m8p2ot-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-TFLm5 .framer-121r83o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TFLm5 .framer-1xm7pyg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TFLm5 .framer-13n1x8x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TFLm5 .framer-1028idn-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-TFLm5 .framer-1frw3v2 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 50px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TFLm5 .framer-1ui4kwx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }", ".framer-TFLm5 .framer-gutzrk, .framer-TFLm5 .framer-15rra3n, .framer-TFLm5 .framer-1nonhy2, .framer-TFLm5 .framer-1xhchkh, .framer-TFLm5 .framer-1jj08vo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-TFLm5 .framer-g4579x, .framer-TFLm5 .framer-18g2h7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }", ".framer-TFLm5 .framer-158vx9f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TFLm5.framer-cdzk7k, .framer-TFLm5 .framer-1hotl93, .framer-TFLm5 .framer-121r83o, .framer-TFLm5 .framer-13n1x8x, .framer-TFLm5 .framer-1ui4kwx, .framer-TFLm5 .framer-g4579x, .framer-TFLm5 .framer-158vx9f, .framer-TFLm5 .framer-18g2h7o { gap: 0px; } .framer-TFLm5.framer-cdzk7k > *, .framer-TFLm5 .framer-13n1x8x > *, .framer-TFLm5 .framer-1ui4kwx > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TFLm5.framer-cdzk7k > :first-child, .framer-TFLm5 .framer-13n1x8x > :first-child, .framer-TFLm5 .framer-1ui4kwx > :first-child { margin-top: 0px; } .framer-TFLm5.framer-cdzk7k > :last-child, .framer-TFLm5 .framer-13n1x8x > :last-child, .framer-TFLm5 .framer-1ui4kwx > :last-child { margin-bottom: 0px; } .framer-TFLm5 .framer-1hotl93 > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-TFLm5 .framer-1hotl93 > :first-child, .framer-TFLm5 .framer-121r83o > :first-child, .framer-TFLm5 .framer-g4579x > :first-child, .framer-TFLm5 .framer-158vx9f > :first-child, .framer-TFLm5 .framer-18g2h7o > :first-child { margin-left: 0px; } .framer-TFLm5 .framer-1hotl93 > :last-child, .framer-TFLm5 .framer-121r83o > :last-child, .framer-TFLm5 .framer-g4579x > :last-child, .framer-TFLm5 .framer-158vx9f > :last-child, .framer-TFLm5 .framer-18g2h7o > :last-child { margin-right: 0px; } .framer-TFLm5 .framer-121r83o > *, .framer-TFLm5 .framer-g4579x > *, .framer-TFLm5 .framer-158vx9f > *, .framer-TFLm5 .framer-18g2h7o > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-TFLm5.framer-v-1vsfom.framer-cdzk7k { padding: 0px 20px 10px 20px; width: 810px; }", ".framer-TFLm5.framer-v-1vsfom .framer-1hotl93 { gap: 12px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TFLm5.framer-v-1vsfom .framer-1hotl93 { gap: 0px; } .framer-TFLm5.framer-v-1vsfom .framer-1hotl93 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-TFLm5.framer-v-1vsfom .framer-1hotl93 > :first-child { margin-left: 0px; } .framer-TFLm5.framer-v-1vsfom .framer-1hotl93 > :last-child { margin-right: 0px; } }", ".framer-TFLm5.framer-v-bcsr7t.framer-cdzk7k { padding: 0px 10px 10px 10px; width: 390px; }", ".framer-TFLm5.framer-v-bcsr7t .framer-1hotl93 { gap: 8px; }", ".framer-TFLm5.framer-v-bcsr7t .framer-1frw3v2 { padding: 0px 0px 0px 0px; }", ".framer-TFLm5.framer-v-bcsr7t .framer-1ui4kwx { order: 0; }", ".framer-TFLm5.framer-v-bcsr7t .framer-g4579x { order: 1; }", ".framer-TFLm5.framer-v-bcsr7t .framer-18g2h7o { order: 2; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TFLm5.framer-v-bcsr7t .framer-1hotl93 { gap: 0px; } .framer-TFLm5.framer-v-bcsr7t .framer-1hotl93 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-TFLm5.framer-v-bcsr7t .framer-1hotl93 > :first-child { margin-left: 0px; } .framer-TFLm5.framer-v-bcsr7t .framer-1hotl93 > :last-child { margin-right: 0px; } }", ".framer-TFLm5.framer-v-tzk43m .framer-1hotl93 { gap: 0px; justify-content: flex-start; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TFLm5.framer-v-tzk43m .framer-1hotl93 { gap: 0px; } .framer-TFLm5.framer-v-tzk43m .framer-1hotl93 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-TFLm5.framer-v-tzk43m .framer-1hotl93 > :first-child { margin-left: 0px; } .framer-TFLm5.framer-v-tzk43m .framer-1hotl93 > :last-child { margin-right: 0px; } }", ...Ne, ...Ln],
    Mt = oe(wl, Sl, "framer-TFLm5"), Cd = Mt;
Mt.displayName = "FOOTER / Foot";
Mt.defaultProps = {height: 947, width: 1440};
A(Mt, {
    variant: {
        options: ["YyQwSl1BQ", "PqkgxzN0r", "mt31XYL_Q", "aykFk6tQL"],
        optionTitles: ["Desktop", "Tablet", "Mobile", "Project-Footer"],
        title: "Variant",
        type: f.Enum
    },
    CIKCwTqeQ: {
        defaultValue: 'var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238)) /* {"name":"Light Blue"} */',
        title: "Background",
        type: f.Color
    }
});
ie(Mt, [{
    explicitInter: !0,
    fonts: [{
        family: "OZIK Black",
        source: "custom",
        url: "https://framerusercontent.com/assets/WuGWnNk7CvNm29iKyB8LheLjE.woff2"
    }, {
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
}, ...ml, ...dl, ...ut(Le), ...ut(Rn)], {supportsExplicitInterCodegen: !0});
export {
    qr as a,
    Gn as b,
    or as c,
    jn as d,
    zn as e,
    Zr as f,
    Qn as g,
    sr as h,
    Un as i,
    An as j,
    qn as k,
    Wn as l,
    Zn as m,
    Le as n,
    Ne as o,
    Ie as p,
    ed as q,
    Vn as r,
    On as s,
    Mn as t,
    In as u,
    En as v,
    Dn as w,
    Cd as x
};
//# sourceMappingURL=chunk-CJWKE2PX.mjs.map
