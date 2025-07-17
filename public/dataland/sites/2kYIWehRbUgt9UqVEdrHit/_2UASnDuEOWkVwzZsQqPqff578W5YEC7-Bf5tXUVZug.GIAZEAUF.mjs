import {a as je, b as Pr, c as zr, d as _r} from "./chunk-Y6UR6WQA.mjs";
import {a as Er} from "./chunk-SZ2KC36Z.mjs";
import {a as dt, b as st, c as lt} from "./chunk-FLZNEFEE.mjs";
import {a as Q1, b as Nr, c as Ee, d as pt, e as ut, f as ht, g as wt, h as Ct, i as yt} from "./chunk-PUEQM2M7.mjs";
import {a as it, b as nt, c as ot, d as mt, e as ft, f as ct, g as gt, h as xt, i as vt} from "./chunk-R7MYYGP6.mjs";
import {
    a as B1,
    b as Mr,
    c as i1,
    d as jr,
    e as Rr,
    f as Y1,
    g as Sr,
    h as X1,
    i as Ir,
    j as rr,
    k as tr,
    l as O1,
    m as H1,
    n as J1,
    o as $1,
    p as et,
    q as n1,
    r as rt,
    s as tt,
    t as at,
    x as o1
} from "./chunk-CJWKE2PX.mjs";
import "./chunk-42U43NKG.mjs";
import {
    A as he,
    B as _1,
    C as Pe,
    D as E1,
    Fa as kr,
    G as Qe,
    Ga as G1,
    H as V1,
    J as F1,
    K as Z1,
    La as $e,
    O as q1,
    Oa as W,
    Pa as P,
    Ra as G,
    S as ze,
    Sa as _e,
    Ta as te,
    Ua as er,
    Z as ke,
    _ as D1,
    aa as a,
    b as e1,
    c as h,
    d as S1,
    da as ie,
    ea as T1,
    f as I1,
    fa as Ur,
    g as ue,
    ga as Me,
    h as Lr,
    ha as a1,
    ia as Je,
    j as Q,
    ja as g,
    k as He,
    l as T,
    la as v,
    m as Ne,
    n as N1,
    na as ge,
    o as r1,
    oa as A1,
    p as $,
    pa as W1,
    q as N,
    r as J,
    t as e,
    u as c,
    v as P1,
    va as Kr,
    w as z1,
    x as t1,
    xa as l,
    y as Ke,
    ya as mr,
    z as u
} from "./chunk-MQBELU27.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";

var fa = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ca = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/, pa = r => fa.test(String(r).toLowerCase()), ua = r => {
        var i;
        let [, o, n] = (i = r.replace("&amp;", "&").match(ca)) !== null && i !== void 0 ? i : [null, null, null];
        return [o, new URLSearchParams(n)]
    }, d1 = ge(function ({url: i, input: o, button: n, layout: m, style: p, gap: f, onSubmit: b, ...d}) {
        let [t, C] = J(o.value), [w, y] = J(!1), [L, x] = J(!1), [q, M] = J(!1),
            j = $(() => ke.current() === ke.canvas, []), {fontFamily: R, fontSize: S, fontWeight: s} = X1(d), U = rr(d),
            Y = O1(d), I = Q(B => B === "" || !pa(B) ? (y(!0), !1) : !0, []), D = Q(B => {
                y(!1), C(B.target.value)
            }, []), ee = Q(() => {
                event.preventDefault();
                let [B, z] = ua(i);
                !I(t) || !B || !z ? x(!1) : (z.set("MERGE0", t), fetch(`https://${B}/subscribe/post`, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
                    body: z.toString()
                }).then(se => {
                    M(!0), b()
                }).catch(() => {
                    x(!1)
                }))
            }, [i, t]), E = Q(() => {
                x(!0)
            }, []);
        return e(u.div, {
            style: {...p, ...B1, "--framer-mailchimp-placeholder-color": o.placeholderColor},
            children: q ? e(u.div, {
                style: {
                    height: "60px",
                    width: "60px",
                    background: n.fill,
                    color: n.color,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                initial: {scale: 0},
                animate: {scale: 1},
                transition: {duration: .3},
                children: e("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    children: e("path", {
                        d: "M 2 14 L 10 22 L 26 6",
                        fill: "transparent",
                        strokeWidth: "4",
                        stroke: "currentColor",
                        strokeLinecap: "round"
                    })
                })
            }) : c("form", {
                style: {
                    width: "100%",
                    display: "grid",
                    gap: f,
                    gridTemplateColumns: m === "vertical" ? "1fr" : "1fr max-content",
                    gridTemplateRows: m === "vertical" ? "1fr 1fr" : "1fr"
                },
                onSubmit: ee,
                method: "POST",
                children: [e("div", {
                    style: {position: "absolute", visibility: "hidden"},
                    "aria-hidden": "true",
                    children: e("input", {type: "text", name: "b_1487cc549a49109c00fe60a80_93cd7be172", tabIndex: -1})
                }), e("input", {
                    type: "email",
                    name: "email",
                    placeholder: o.placeholder,
                    value: j ? o.value : t,
                    className: "framer-mailchimp-input",
                    onChange: D,
                    style: {
                        ...bt,
                        padding: Y,
                        borderRadius: U,
                        fontFamily: R,
                        fontWeight: s,
                        fontSize: S,
                        background: o.fill,
                        color: o.color,
                        boxShadow: `inset 0 0 0 1px ${w ? o.error : "transparent"}`
                    }
                }), c("div", {
                    style: {position: "relative"},
                    children: [e(u.input, {
                        type: "submit",
                        value: n.label,
                        onClick: E,
                        style: {
                            ...bt,
                            cursor: "pointer",
                            borderRadius: U,
                            padding: Y,
                            fontFamily: R,
                            fontWeight: n.fontWeight,
                            fontSize: S,
                            background: n.fill,
                            color: n.color,
                            zIndex: 1
                        },
                        transition: {type: "ease", duration: .3},
                        whileHover: {opacity: .8}
                    }), L && e("div", {
                        style: {
                            borderRadius: U,
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            zIndex: 2,
                            color: n.color,
                            background: n.fill
                        },
                        children: e(u.div, {
                            style: {height: 16, width: 16},
                            initial: {rotate: 0},
                            animate: {rotate: 360},
                            transition: {duration: 2, repeat: 1 / 0},
                            children: c("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                children: [e("path", {
                                    d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
                                    fill: "currentColor",
                                    opacity: "0.2"
                                }), e("path", {
                                    d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
                                    fill: "currentColor"
                                })]
                            })
                        })
                    })]
                })]
            })
        })
    }, [".framer-mailchimp-input::placeholder { color: var(--framer-mailchimp-placeholder-color) !important; }"]);
d1.defaultProps = {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 400,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    topLeftRadius: 8,
    topRightRadius: 8,
    bottomRightRadius: 8,
    bottomLeftRadius: 8,
    gap: 15
};
ie(d1, {
    url: {
        title: "URL",
        placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
        type: a.String,
        description: "Create a [Mailchimp](https://mailchimp.com/) account and copy your embedded form URL. [Learn more\u2026](https://www.framer.com/sites/integrations/mailchimp/)"
    },
    layout: {title: "Layout", type: a.Enum, options: ["horizontal", "vertical"], displaySegmentedControl: !0},
    input: {
        title: "Input",
        type: a.Object,
        controls: {
            placeholder: {title: "Placeholder", type: a.String, defaultValue: "email@framer.com"},
            placeholderColor: {title: " ", type: a.Color, defaultValue: "rgba(0, 0, 0, 0.3)"},
            value: {title: "Value", type: a.String},
            fill: {title: "Fill", type: a.Color, defaultValue: "#EBEBEB"},
            color: {title: "Text", type: a.Color, defaultValue: "#000"},
            error: {title: "Error", type: a.Color, defaultValue: "#EE4444"}
        }
    },
    button: {
        title: "Button",
        type: a.Object,
        controls: {
            label: {title: "Label", type: a.String, defaultValue: "Sign Up"},
            fontWeight: {...i1.fontWeight, defaultValue: 600},
            fill: {title: "Fill", type: a.Color, defaultValue: "#000"},
            color: {title: "Text", type: a.Color, defaultValue: "#FFF"}
        }
    }, ...i1,
    fontSize: {title: "Font Size", type: a.Number, displayStepper: !0, defaultValue: 16}, ...H1, ...tr,
    gap: {title: "Gap", type: a.Number, displayStepper: !0, min: 0},
    onSubmit: {type: a.EventHandler}
});
var bt = {WebkitAppearance: "none", width: "100%", lineHeight: "1.4em", outline: "none", border: "none"}, ar = d1;
var s1 = r => r instanceof P1;

function Lt(r, i) {
    let o = N(i), n = N(), m = N(!1), p = ke.current() === ke.canvas, f = i?.onChangeDeps ? i.onChangeDeps : [],
        b = Q(i?.onChange, [...f]), d = Q(C => {
            var w;
            return !((w = o.current) === null || w === void 0) && w.transform ? o.current.transform(C) : C
        }, []), t = Y1(() => s1(r) ? r : z1(d(r)));
    return T(() => {
        if (!s1(r) && m.current) {
            var C, w;
            let L = d(r);
            if ((C = n.current) === null || C === void 0 || C.stop(), b && b(L, t), !((w = o.current) === null || w === void 0) && w.animate && !p) {
                var y;
                n.current = D1(t, L, (y = o.current) === null || y === void 0 ? void 0 : y.transition)
            } else t.set(L)
        }
        m.current = !0
    }, [r, ...f]), t
}

var Ve;
(function (r) {
    r.Fill = "fill", r.Contain = "contain", r.Cover = "cover", r.None = "none", r.ScaleDown = "scale-down"
})(Ve || (Ve = {}));
var Re;
(function (r) {
    r.Video = "Upload", r.Url = "URL"
})(Re || (Re = {}));

function ha(r) {
    let {width: i, height: o, topLeft: n, topRight: m, bottomRight: p, bottomLeft: f, id: b, children: d, ...t} = r;
    return t
}

function Ce(r) {
    let i = ha(r);
    return e(ga, {...i})
}

var Ut = !1, ga = Lr(function (i) {
    let {
            srcType: o,
            srcFile: n,
            srcUrl: m,
            playing: p,
            canvasPlay: f,
            muted: b,
            playsinline: d,
            controls: t,
            progress: C,
            objectFit: w,
            backgroundColor: y,
            radius: L,
            topLeft: x,
            topRight: q,
            bottomRight: M,
            bottomLeft: j,
            isMixed: R,
            onSeeked: S,
            onPause: s,
            onPlay: U,
            onEnd: Y,
            onClick: I,
            onMouseEnter: D,
            onMouseLeave: ee,
            onMouseDown: E,
            onMouseUp: B,
            poster: z,
            restartOnEnter: se,
            posterEnabled: X,
            startTime: ae,
            volume: oe,
            loop: be
        } = i, _ = Ur(), K = N(), Ie = Sr(), fe = N(!1), De = N(null), ce = N(null), V = Ir(), re = rr(i),
        pe = $(() => ae === 100 ? 99.9 : ae, [ae]), nr = !V || f, or = $(() => p, []), Tr = $(() => V ? !0 : b, [V, b]),
        Te = Q(A => {
            if (!K.current) return;
            let dr = (A === 1 ? .999 : A) * K.current.duration, Ar = Math.abs(K.current.currentTime - dr) < .1;
            K.current.duration > 0 && !Ar && (K.current.currentTime = dr)
        }, []), Ae = Q(() => {
            !(K.current.currentTime > 0 && K.current.onplaying && !K.current.paused && !K.current.ended && K.current.readyState > K.current.HAVE_CURRENT_DATA) && K.current && !fe.current && _ && (fe.current = !0, K.current.play().catch(dr => {
            }).finally(() => fe.current = !1))
        }, []), hr = Q(() => {
            !K.current || fe.current || K.current.pause()
        }, []);
    T(() => {
        p && nr ? Ae() : hr()
    }, [p, f]), T(() => {
        Ut ? Te(pe * .01) : Ut = !0
    }, [pe, n, m]);
    let gr = Lt(C, {
        transform: A => A * .01, onChange: A => {
            Te(A)
        }
    });
    E1(gr, "change", A => {
        V || Te(A)
    }), jr(() => {
        De.current !== null && K.current && (!ce && be || !De.current) && Ae()
    }), Rr(() => {
        K.current && (ce.current = K.current.ended, De.current = K.current.paused, hr())
    });
    let xr = $(() => {
        let A = "";
        if (o === Re.Url) return m + A;
        if (o === Re.Video) return n + A
    }, [o, n, m, pe]);
    return T(() => {
        Ie && K.current && or && setTimeout(() => Ae(), 50)
    }, []), T(() => {
        K.current && !b && (K.current.volume = oe / 100)
    }, [oe]), e("video", {
        onClick: I,
        onMouseEnter: D,
        onMouseLeave: ee,
        onMouseDown: E,
        onMouseUp: B,
        src: xr,
        loop: be,
        ref: K,
        onSeeked: A => S?.(A),
        onPause: A => s?.(A),
        onPlay: A => U?.(A),
        onEnded: A => Y?.(A),
        autoPlay: or && nr,
        poster: X ? z : void 0,
        onLoadedData: () => {
            K.current && K.current.currentTime < .3 && Te(pe * .01), nr && K.current && or && Ae()
        },
        controls: t,
        muted: Tr,
        playsInline: d,
        style: {
            cursor: I ? "pointer" : "auto",
            width: "100%",
            height: "100%",
            borderRadius: re,
            display: "block",
            objectFit: w,
            backgroundColor: y,
            objectPosition: "50% 50%"
        }
    })
});
Ce.displayName = "Video";
Ce.defaultProps = {
    srcType: Re.Url,
    srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    srcFile: "",
    posterEnabled: !1,
    controls: !1,
    autoPlay: !0,
    canvasPlay: !1,
    loop: !0,
    muted: !0,
    playsinline: !0,
    restartOnEnter: !1,
    objectFit: Ve.Cover,
    backgroundColor: "rgba(0,0,0,0)",
    radius: 0,
    volume: 25,
    startTime: 0
};
ie(Ce, {
    srcType: {type: a.Enum, displaySegmentedControl: !0, title: "Source", options: [Re.Url, Re.Video]},
    srcUrl: {
        type: a.String, title: " ", placeholder: "../example.mp4", hidden(r) {
            return r.srcType === Re.Video
        }, description: "Hosted video file URL. For Youtube, use the Youtube component."
    },
    srcFile: {
        type: a.File, title: " ", allowedFileTypes: ["mp4"], hidden(r) {
            return r.srcType === Re.Url
        }
    },
    playing: {type: a.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No"},
    posterEnabled: {type: a.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No"},
    poster: {type: a.Image, title: " ", hidden: ({posterEnabled: r}) => !r},
    backgroundColor: {type: a.Color, title: "Background"}, ...tr,
    startTime: {title: "Start Time", type: a.Number, min: 0, max: 100, step: .1, unit: "%"},
    loop: {type: a.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No"},
    objectFit: {type: a.Enum, title: "Fit", options: [Ve.Cover, Ve.Fill, Ve.Contain, Ve.ScaleDown, Ve.None]},
    canvasPlay: {
        type: a.Boolean, title: "On Canvas", enabledTitle: "Play", disabledTitle: "Pause", hidden(r) {
            return r.autoPlay === !1
        }
    },
    controls: {type: a.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide"},
    muted: {type: a.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No"},
    volume: {type: a.Number, max: 100, min: 0, unit: "%", hidden: ({muted: r}) => r},
    onEnd: {type: a.EventHandler},
    onSeeked: {type: a.EventHandler},
    onPause: {type: a.EventHandler},
    onPlay: {type: a.EventHandler}, ...Mr
});
var Kt;
(function (r) {
    r.Fill = "fill", r.Contain = "contain", r.Cover = "cover", r.None = "none", r.ScaleDown = "scale-down"
})(Kt || (Kt = {}));
var kt;
(function (r) {
    r.Video = "Upload", r.Url = "URL"
})(kt || (kt = {}));

function xa(r) {
    let {width: i, height: o, topLeft: n, topRight: m, bottomRight: p, bottomLeft: f, id: b, children: d, ...t} = r;
    return t
}

function Se(r) {
    let i = xa(r);
    return e(Ca, {...i})
}

function va(r) {
    let i = Ur(), o = N(!1), n = Q(f => {
        if (!r.current) return;
        let b = (f === 1 ? .999 : f) * r.current.duration, d = Math.abs(r.current.currentTime - b) < .1;
        r.current.duration > 0 && !d && (r.current.currentTime = b)
    }, []), m = Q(() => {
        !(r.current.currentTime > 0 && r.current.onplaying && !r.current.paused && !r.current.ended && r.current.readyState > r.current.HAVE_CURRENT_DATA) && r.current && !o.current && i && (o.current = !0, r.current.play().catch(b => {
        }).finally(() => o.current = !1))
    }, []), p = Q(() => {
        !r.current || o.current || r.current.pause()
    }, []);
    return {play: m, pause: p, setProgress: n}
}

function wa({playingProp: r, muted: i, loop: o, playsinline: n, controls: m}) {
    let [p] = J(() => r), [f, b] = J(!1);
    r !== p && !f && b(!0);
    let d = p && i && o && n && !m && !f, t;
    return d ? t = "on-viewport" : p ? t = "on-mount" : t = "no-autoplay", t
}

var Mt = !1, Ca = Lr(function (i) {
    let {
            srcType: o,
            srcFile: n,
            srcUrl: m,
            playing: p,
            muted: f,
            playsinline: b,
            controls: d,
            progress: t,
            objectFit: C,
            backgroundColor: w,
            onSeeked: y,
            onPause: L,
            onPlay: x,
            onEnd: q,
            onClick: M,
            onMouseEnter: j,
            onMouseLeave: R,
            onMouseDown: S,
            onMouseUp: s,
            poster: U,
            posterEnabled: Y,
            startTime: I,
            volume: D,
            loop: ee
        } = i, E = N(), B = Sr(), z = N(null), se = N(null), X = Ir(), ae = rr(i),
        oe = X ? "no-autoplay" : wa({playingProp: p, muted: f, loop: ee, playsinline: b, controls: d}),
        be = X ? !0 : F1(E), _ = I === 100 ? 99.9 : I, {play: K, pause: Ie, setProgress: fe} = va(E);
    T(() => {
        X || (p ? K() : Ie())
    }, [p]), T(() => {
        X || oe === "on-viewport" && (be ? K() : Ie())
    }, [oe, be]), T(() => {
        if (!Mt) {
            Mt = !0;
            return
        }
        let V = t1(t) ? t.get() : (t ?? 0) * .01;
        fe((V ?? 0) || (_ ?? 0) / 100)
    }, [_, n, m, t]), T(() => {
        if (t1(t)) return t.on("change", V => fe(V))
    }, [t]), jr(() => {
        z.current !== null && E.current && (!se && ee || !z.current) && K()
    }), Rr(() => {
        E.current && (se.current = E.current.ended, z.current = E.current.paused, Ie())
    });
    let De = $(() => {
        let V = "";
        if (o === "URL") return m + V;
        if (o === "Upload") return n + V
    }, [o, n, m, _]);
    return T(() => {
        B && E.current && oe === "on-mount" && setTimeout(() => K(), 50)
    }, []), T(() => {
        E.current && !f && (E.current.volume = (D ?? 0) / 100)
    }, [D]), e("video", {
        onClick: M,
        onMouseEnter: j,
        onMouseLeave: R,
        onMouseDown: S,
        onMouseUp: s,
        src: De,
        loop: ee,
        ref: E,
        onSeeked: V => y?.(V),
        onPause: V => L?.(V),
        onPlay: V => x?.(V),
        onEnded: V => q?.(V),
        autoPlay: oe === "on-mount",
        poster: Y ? U : void 0,
        onLoadedData: () => {
            E.current && (E.current.currentTime < .3 && fe((_ ?? 0) * .01), oe === "on-mount" && K())
        },
        controls: d,
        muted: X ? !0 : f,
        playsInline: b,
        style: {
            cursor: M ? "pointer" : "auto",
            width: "100%",
            height: "100%",
            borderRadius: ae,
            display: "block",
            objectFit: C,
            backgroundColor: w,
            objectPosition: "50% 50%"
        }
    })
});
Se.displayName = "Video";
Se.defaultProps = {
    srcType: "URL",
    srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
    srcFile: "",
    posterEnabled: !1,
    controls: !1,
    playing: !0,
    loop: !0,
    muted: !0,
    playsinline: !0,
    restartOnEnter: !1,
    objectFit: "cover",
    backgroundColor: "rgba(0,0,0,0)",
    radius: 0,
    volume: 25,
    startTime: 0
};
var ya = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;

function ba(r) {
    return r.charAt(0).toUpperCase() + r.slice(1)
}

function La(r) {
    return (r.match(ya) || []).map(ba).join(" ")
}

var jt = ["cover", "fill", "contain", "scale-down", "none"];
ie(Se, {
    srcType: {type: a.Enum, displaySegmentedControl: !0, title: "Source", options: ["URL", "Upload"]},
    srcUrl: {
        type: a.String, title: "URL", placeholder: "../example.mp4", hidden(r) {
            return r.srcType === "Upload"
        }, description: "Hosted video file URL. For YouTube, use the YouTube component."
    },
    srcFile: {
        type: a.File, title: "File", allowedFileTypes: ["mp4", "webm"], hidden(r) {
            return r.srcType === "URL"
        }
    },
    playing: {type: a.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No"},
    posterEnabled: {type: a.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No"},
    poster: {type: a.Image, title: " ", hidden: ({posterEnabled: r}) => !r},
    backgroundColor: {type: a.Color, title: "Background"}, ...tr,
    startTime: {title: "Start Time", type: a.Number, min: 0, max: 100, step: .1, unit: "%"},
    loop: {type: a.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No"},
    objectFit: {type: a.Enum, title: "Fit", options: jt, optionTitles: jt.map(La)},
    controls: {type: a.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide"},
    muted: {type: a.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No"},
    volume: {type: a.Number, max: 100, min: 0, unit: "%", hidden: ({muted: r}) => r},
    onEnd: {type: a.EventHandler},
    onSeeked: {type: a.EventHandler},
    onPause: {type: a.EventHandler},
    onPlay: {type: a.EventHandler}, ...Mr
});
var Vr = () => typeof document == "object";

function Ua() {
    if (Vr()) {
        if (typeof document.hidden < "u") return "visibilitychange";
        if (typeof document.msHidden < "u") return "msvisibilitychange";
        if (typeof document.webkitHidden < "u") return "webkitvisibilitychange"
    }
}

function Ka() {
    if (Vr()) {
        if (typeof document.hidden < "u") return "hidden";
        if (typeof document.msHidden < "u") return "msHidden";
        if (typeof document.webkitHidden < "u") return "webkitHidden"
    }
}

function Rt() {
    if (Vr()) return !document[Ka()]
}

function St() {
    if (!Vr()) return;
    let [r, i] = J(Rt()), o = () => i(Rt());
    return T(() => {
        let n = Ua();
        return document.addEventListener(n, o, !1), () => {
            document.removeEventListener(n, o)
        }
    }), r
}

function O(r) {
    let {
            slots: i,
            startFrom: o,
            direction: n,
            effectsOptions: m,
            autoPlayControl: p,
            dragControl: f,
            alignment: b,
            gap: d,
            padding: t,
            paddingPerSide: C,
            paddingTop: w,
            paddingRight: y,
            paddingBottom: L,
            paddingLeft: x,
            itemAmount: q,
            fadeOptions: M,
            intervalControl: j,
            transitionControl: R,
            arrowOptions: S,
            borderRadius: s,
            progressOptions: U,
            style: Y
        } = r, {
            effectsOpacity: I,
            effectsScale: D,
            effectsRotate: ee,
            effectsPerspective: E,
            effectsHover: B
        } = m, {fadeContent: z, overflow: se, fadeWidth: X, fadeInset: ae, fadeAlpha: oe} = M, {
            showMouseControls: be,
            arrowSize: _,
            arrowRadius: K,
            arrowFill: Ie,
            leftArrow: fe,
            rightArrow: De,
            arrowShouldSpace: ce = !0,
            arrowShouldFadeIn: V = !1,
            arrowPosition: re,
            arrowPadding: pe,
            arrowGap: nr,
            arrowPaddingTop: or,
            arrowPaddingRight: Tr,
            arrowPaddingBottom: Te,
            arrowPaddingLeft: Ae
        } = S, {
            showProgressDots: hr,
            dotSize: gr,
            dotsInset: xr,
            dotsRadius: p1,
            dotsPadding: A,
            dotsGap: dr,
            dotsFill: Ar,
            dotsBackground: Zt,
            dotsActiveOpacity: qt,
            dotsOpacity: Dt,
            dotsBlur: u1
        } = U, Tt = C ? `${w}px ${y}px ${L}px ${x}px` : `${t}px`, Le = ke.current() === ke.canvas, We = e1.count(i) > 0,
        F = n === "left" || n === "right", vr = n === "right" || n === "bottom";
    if (!We) return c("section", {
        style: ka,
        children: [e("div", {style: Ma, children: "\u2B50\uFE0F"}), e("p", {
            style: ja,
            children: "Connect to Content"
        }), e("p", {style: Ra, children: "Add layers or components to make infinite auto-playing slideshows."})]
    });
    let sr = N(null), H = $(() => i.map(k => I1()), [i]), Wr = N(void 0), [Z, At] = J({
        parent: null,
        children: null,
        item: null,
        itemWidth: null,
        itemHeight: null
    }), [Wt, h1] = J(!1), [Gt, g1] = J(p), [Bt, x1] = J(!1), [Ge, v1] = J(!1), Gr = [], w1 = 4;
    Le && (w1 = 1);
    let C1 = Q(() => {
        Z1.read(() => {
            if (We && sr.current) {
                let k = i.length - 1, me = F ? sr.current.offsetWidth : sr.current.offsetHeight,
                    de = H[0].current ? F ? H[0].current.offsetLeft : H[0].current.offsetTop : 0,
                    Oe = (H[k].current ? F ? H[k].current.offsetLeft + H[k].current.offsetWidth : H[k].current.offsetTop + H[k].current.offsetHeight : 0) - de + d,
                    yr = H[0].current ? F ? H[0].current.offsetWidth : H[0].current.offsetHeight : 0,
                    Jr = H[0].current ? H[0].current.offsetWidth : 0, $r = H[0].current ? H[0].current.offsetHeight : 0;
                At({parent: me, children: Oe, item: yr, itemWidth: Jr, itemHeight: $r})
            }
        })
    }, [We]);
    r1(() => {
        We && C1()
    }, [We, q]);
    let Br = N(!0);
    T(() => Q1(sr.current, ({contentSize: k}) => {
        !Br.current && (k.width || k.height) && (C1(), v1(!0)), Br.current = !1
    }), []), T(() => {
        if (Ge) {
            let k = setTimeout(() => v1(!1), 500);
            return () => clearTimeout(k)
        }
    }, [Ge]);
    let Be = i?.length, wr = Le ? 0 : Z?.children, Yr = Z?.item + d,
        Yt = o * Yr, [le, lr] = J(o + Be), [Xt, y1] = J(!1), b1 = St(), L1 = vr ? 1 : -1, Ye = _1(wr),
        U1 = F ? -o * (Z?.itemWidth + d) : -o * (Z?.itemHeight + d), Xr = () => L1 * le * Yr,
        Or = Le ? 0 : Pe(Ye, k => {
            let me = Qe(-wr, -wr * 2, k);
            return isNaN(me) ? 0 : me
        }), Ot = Qe(0, Be, le), Ht = Qe(0, -Be, le);
    r1(() => {
        Z?.children !== null && !Br.current && Ge && Ye.set(Xr())
    }, [Z, wr, L1, Yt, le, Yr, Ge]);
    let K1 = () => {
        Le || !We || !Z.parent || Xt || (Ye.get() !== Xr() && V1(Ye, Xr(), R), p && Gt && (Wr.current = setTimeout(() => {
            lr(le + 1), K1()
        }, j * 1e3)))
    }, Xe = k => {
        lr(vr ? le - k : le + k)
    }, Qt = k => {
        let me = Qe(0, Be, le), de = Qe(0, -Be, le), Ue = k - me, Oe = k - Math.abs(de);
        lr(vr ? le - Oe : le + Ue)
    }, Jt = () => {
        y1(!0)
    }, $t = (k, {offset: me, velocity: de}) => {
        y1(!1);
        let Ue = F ? me.x : me.y, Oe = 200, yr = F ? de.x : de.y, Jr = Ue < -Z.item / 2, $r = Ue > Z.item / 2,
            ma = Math.abs(Ue), br = Math.round(ma / Z.item), R1 = br === 0 ? 1 : br;
        yr > Oe ? Xe(-R1) : yr < -Oe ? Xe(R1) : (Jr && Xe(br), $r && Xe(-br))
    };
    T(() => {
        if (!(!b1 || Ge)) return K1(), () => Wr.current && clearTimeout(Wr.current)
    }, [Gr, b1, Ge]);
    let ea = 0, k1 = `calc(${100 / q}% - ${d}px + ${d / q}px)`;
    for (let k = 0; k < w1; k++) Gr.push(...e1.map(i, (me, de) => {
        let Ue;
        return de === 0 && (Ue = H[0]), de === i.length - 1 && (Ue = H[1]), e(Na, {
            ref: H[de],
            slideKey: k + de + "lg",
            index: k,
            width: F && q > 1 ? k1 : "100%",
            height: F ? "100%" : q > 1 ? k1 : "100%",
            size: Z,
            child: me,
            numChildren: i?.length,
            wrappedValue: Or,
            childCounter: ea++,
            gap: d,
            isCanvas: Le,
            isHorizontal: F,
            effectsOpacity: I,
            effectsScale: D,
            effectsRotate: ee,
            children: k + de
        }, k + de + "lg")
    }));
    let ra = F ? "to right" : "to bottom", M1 = X / 2, ta = 100 - X / 2, aa = Ia(ae, 0, M1), ia = 100 - ae,
        Hr = `linear-gradient(${ra}, rgba(0, 0, 0, ${oe}) ${aa}%, rgba(0, 0, 0, 1) ${M1}%, rgba(0, 0, 0, 1) ${ta}%, rgba(0, 0, 0, ${oe}) ${ia}%)`,
        Qr = [], Cr = {};
    if (hr) {
        for (let k = 0; k < i?.length; k++) Qr.push(e(Pa, {
            dotStyle: {
                ..._a,
                width: gr,
                height: gr,
                backgroundColor: Ar
            },
            buttonStyle: l1,
            selectedOpacity: qt,
            opacity: Dt,
            onClick: () => Qt(k),
            wrappedIndex: Ot,
            wrappedIndexInverted: Ht,
            total: Be,
            index: k,
            gap: dr,
            padding: A,
            isHorizontal: F,
            isInverted: vr
        }, k));
        u1 > 0 && (Cr.backdropFilter = Cr.WebkitBackdropFilter = Cr.MozBackdropFilter = `blur(${u1}px)`)
    }
    let na = f ? {
            drag: F ? "x" : "y",
            onDragStart: Jt,
            onDragEnd: $t,
            dragDirectionLock: !0,
            values: {x: Ye, y: Ye},
            dragMomentum: !1
        } : {}, oa = re === "top-left" || re === "top-mid" || re === "top-right",
        da = re === "bottom-left" || re === "bottom-mid" || re === "bottom-right",
        sa = re === "top-left" || re === "bottom-left", la = re === "top-right" || re === "bottom-right",
        j1 = re === "top-mid" || re === "bottom-mid" || re === "auto";
    return c("section", {
        style: {
            ...It,
            padding: Tt,
            WebkitMaskImage: z ? Hr : void 0,
            MozMaskImage: z ? Hr : void 0,
            maskImage: z ? Hr : void 0,
            opacity: Z?.item !== null ? 1 : 0,
            userSelect: "none"
        },
        onMouseEnter: () => {
            h1(!0), B || g1(!1)
        },
        onMouseLeave: () => {
            h1(!1), B || g1(!0)
        },
        onMouseDown: k => {
            k.preventDefault(), x1(!0)
        },
        onMouseUp: () => x1(!1),
        children: [e("div", {
            style: {
                width: "100%",
                height: "100%",
                margin: 0,
                padding: "inherit",
                position: "absolute",
                inset: 0,
                overflow: se ? "visible" : "hidden",
                borderRadius: s,
                userSelect: "none",
                perspective: Le ? "none" : E
            },
            children: e(u.ul, {
                ref: sr, ...na,
                style: {
                    ...It,
                    gap: d,
                    placeItems: b,
                    x: F ? Le ? U1 : Or : 0,
                    y: F ? 0 : Le ? U1 : Or,
                    flexDirection: F ? "row" : "column",
                    transformStyle: ee !== 0 && !Le ? "preserve-3d" : void 0,
                    cursor: f ? Bt ? "grabbing" : "grab" : "auto",
                    userSelect: "none", ...Y
                },
                children: Gr
            })
        }), c("fieldset", {
            style: {...Sa},
            "aria-label": "Slideshow pagination controls",
            className: "framer--slideshow-controls",
            children: [c(u.div, {
                style: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: F ? "row" : "column",
                    justifyContent: ce ? "space-between" : "center",
                    gap: ce ? "unset" : nr,
                    opacity: V ? 0 : 1,
                    alignItems: "center",
                    inset: pe,
                    top: ce ? pe : oa ? or : "unset",
                    left: ce ? pe : sa ? Ae : j1 ? 0 : "unset",
                    right: ce ? pe : la ? Tr : j1 ? 0 : "unset",
                    bottom: ce ? pe : da ? Te : "unset"
                },
                animate: V && {opacity: Wt ? 1 : 0},
                transition: R,
                children: [e(u.button, {
                    type: "button",
                    style: {
                        ...l1,
                        backgroundColor: Ie,
                        width: _,
                        height: _,
                        borderRadius: K,
                        rotate: F ? 0 : 90,
                        display: be ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => Xe(-1),
                    "aria-label": "Previous",
                    whileTap: {scale: .9},
                    transition: {duration: .15},
                    children: e("img", {
                        width: _,
                        height: _,
                        src: fe || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                        alt: "Back Arrow"
                    })
                }), e(u.button, {
                    type: "button",
                    style: {
                        ...l1,
                        backgroundColor: Ie,
                        width: _,
                        height: _,
                        borderRadius: K,
                        rotate: F ? 0 : 90,
                        display: be ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => Xe(1),
                    "aria-label": "Next",
                    whileTap: {scale: .9},
                    transition: {duration: .15},
                    children: e("img", {
                        width: _,
                        height: _,
                        src: De || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                        alt: "Next Arrow"
                    })
                })]
            }), Qr.length > 1 ? e("div", {
                style: {
                    ...za,
                    left: F ? "50%" : xr,
                    top: F ? "unset" : "50%",
                    transform: F ? "translateX(-50%)" : "translateY(-50%)",
                    flexDirection: F ? "row" : "column",
                    bottom: F ? xr : "unset",
                    borderRadius: p1,
                    backgroundColor: Zt,
                    userSelect: "none", ...Cr
                }, children: Qr
            }) : null]
        })]
    })
}

O.defaultProps = {
    direction: "left",
    dragControl: !1,
    startFrom: 0,
    itemAmount: 1,
    infinity: !0,
    gap: 10,
    padding: 10,
    autoPlayControl: !0,
    effectsOptions: {effectsOpacity: 1, effectsScale: 1, effectsRotate: 0, effectsPerspective: 1200, effectsHover: !0},
    transitionControl: {type: "spring", stiffness: 200, damping: 40},
    fadeOptions: {fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0},
    arrowOptions: {
        showMouseControls: !0,
        arrowShouldFadeIn: !1,
        arrowShouldSpace: !0,
        arrowFill: "rgba(0,0,0,0.2)",
        arrowSize: 40
    },
    progressOptions: {showProgressDots: !0}
};
ie(O, {
    slots: {type: a.Array, title: "Content", control: {type: a.ComponentInstance}},
    direction: {
        type: a.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        displaySegmentedControl: !0,
        defaultValue: O.defaultProps.direction
    },
    autoPlayControl: {type: a.Boolean, title: "Auto Play", defaultValue: !0},
    intervalControl: {
        type: a.Number,
        title: "Interval",
        defaultValue: 1.5,
        min: .5,
        max: 10,
        step: .1,
        displayStepper: !0,
        unit: "s",
        hidden: r => !r.autoPlayControl
    },
    dragControl: {type: a.Boolean, title: "Draggable", defaultValue: !1},
    startFrom: {
        type: a.Number,
        title: "Current",
        min: 0,
        max: 10,
        displayStepper: !0,
        defaultValue: O.defaultProps.startFrom
    },
    effectsOptions: {
        type: a.Object,
        title: "Effects",
        controls: {
            effectsOpacity: {
                type: a.Number,
                title: "Opacity",
                defaultValue: O.defaultProps.effectsOptions.effectsOpacity,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsScale: {
                type: a.Number,
                title: "Scale",
                defaultValue: O.defaultProps.effectsOptions.effectsScale,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsPerspective: {
                type: a.Number,
                title: "Perspective",
                defaultValue: O.defaultProps.effectsOptions.effectsPerspective,
                min: 200,
                max: 2e3,
                step: 1
            },
            effectsRotate: {
                type: a.Number,
                title: "Rotate",
                defaultValue: O.defaultProps.effectsOptions.effectsRotate,
                min: -180,
                max: 180,
                step: 1
            },
            effectsHover: {
                type: a.Boolean,
                title: "On Hover",
                enabledTitle: "Play",
                disabledTitle: "Pause",
                defaultValue: O.defaultProps.effectsOptions.effectsHover
            }
        }
    },
    alignment: {
        type: a.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    itemAmount: {
        type: a.Number,
        title: "Items",
        min: 1,
        max: 10,
        displayStepper: !0,
        defaultValue: O.defaultProps.itemAmount
    },
    gap: {type: a.Number, title: "Gap", min: 0},
    padding: {
        title: "Padding",
        type: a.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 0,
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    borderRadius: {type: a.Number, title: "Radius", min: 0, max: 500, displayStepper: !0, defaultValue: 0},
    transitionControl: {type: a.Transition, defaultValue: O.defaultProps.transitionControl, title: "Transition"},
    fadeOptions: {
        type: a.Object,
        title: "Clipping",
        controls: {
            fadeContent: {type: a.Boolean, title: "Fade", defaultValue: !1},
            overflow: {
                type: a.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(r) {
                    return r.fadeContent === !0
                }
            },
            fadeWidth: {
                type: a.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeInset: {
                type: a.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: a.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: .05, hidden(r) {
                    return r.fadeContent === !1
                }
            }
        }
    },
    arrowOptions: {
        type: a.Object, title: "Arrows", controls: {
            showMouseControls: {
                type: a.Boolean,
                title: "Show",
                defaultValue: O.defaultProps.arrowOptions.showMouseControls
            },
            arrowFill: {
                type: a.Color,
                title: "Fill",
                hidden: r => !r.showMouseControls,
                defaultValue: O.defaultProps.arrowOptions.arrowFill
            },
            leftArrow: {type: a.Image, title: "Previous", hidden: r => !r.showMouseControls},
            rightArrow: {type: a.Image, title: "Next", hidden: r => !r.showMouseControls},
            arrowSize: {
                type: a.Number,
                title: "Size",
                min: 0,
                max: 200,
                displayStepper: !0,
                defaultValue: O.defaultProps.arrowOptions.arrowSize,
                hidden: r => !r.showMouseControls
            },
            arrowRadius: {
                type: a.Number,
                title: "Radius",
                min: 0,
                max: 500,
                defaultValue: 40,
                hidden: r => !r.showMouseControls
            },
            arrowShouldFadeIn: {type: a.Boolean, title: "Fade In", defaultValue: !1, hidden: r => !r.showMouseControls},
            arrowShouldSpace: {
                type: a.Boolean,
                title: "Distance",
                enabledTitle: "Space",
                disabledTitle: "Group",
                defaultValue: O.defaultProps.arrowOptions.arrowShouldSpace,
                hidden: r => !r.showMouseControls
            },
            arrowPosition: {
                type: a.Enum,
                title: "Position",
                options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"],
                optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"],
                hidden: r => !r.showMouseControls || r.arrowShouldSpace
            },
            arrowPadding: {
                type: a.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 20,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || !r.arrowShouldSpace
            },
            arrowPaddingTop: {
                type: a.Number,
                title: "Top",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "bottom-mid" || r.arrowPosition === "bottom-left" || r.arrowPosition === "bottom-right"
            },
            arrowPaddingBottom: {
                type: a.Number,
                title: "Bottom",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-mid" || r.arrowPosition === "top-left" || r.arrowPosition === "top-right"
            },
            arrowPaddingRight: {
                type: a.Number,
                title: "Right",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-left" || r.arrowPosition === "top-mid" || r.arrowPosition === "bottom-left" || r.arrowPosition === "bottom-mid"
            },
            arrowPaddingLeft: {
                type: a.Number,
                title: "Left",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-right" || r.arrowPosition === "top-mid" || r.arrowPosition === "bottom-right" || r.arrowPosition === "bottom-mid"
            },
            arrowGap: {
                type: a.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace
            }
        }
    },
    progressOptions: {
        type: a.Object, title: "Dots", controls: {
            showProgressDots: {type: a.Boolean, title: "Show", defaultValue: !1},
            dotSize: {
                type: a.Number,
                title: "Size",
                min: 1,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsInset: {
                type: a.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsGap: {
                type: a.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsPadding: {
                type: a.Number,
                title: "Padding",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsFill: {
                type: a.Color,
                title: "Fill",
                defaultValue: "#fff",
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsBackground: {
                type: a.Color,
                title: "Backdrop",
                defaultValue: "rgba(0,0,0,0.2)",
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsRadius: {
                type: a.Number,
                title: "Radius",
                min: 0,
                max: 200,
                defaultValue: 50,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsOpacity: {
                type: a.Number,
                title: "Opacity",
                min: 0,
                max: 1,
                defaultValue: .5,
                step: .1,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsActiveOpacity: {
                type: a.Number,
                title: "Current",
                min: 0,
                max: 1,
                defaultValue: 1,
                step: .1,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsBlur: {
                type: a.Number,
                title: "Blur",
                min: 0,
                max: 50,
                defaultValue: 0,
                step: 1,
                hidden: r => !r.showProgressDots || r.showScrollbar
            }
        }
    }
});
var It = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textIndent: "none"
    }, ka = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    }, Ma = {fontSize: 32, marginBottom: 10}, ja = {margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center"},
    Ra = {margin: 0, opacity: .7, maxWidth: 180, lineHeight: 1.5, textAlign: "center"}, l1 = {
        border: "none",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        background: "transparent",
        cursor: "pointer",
        margin: 0,
        padding: 0
    }, Sa = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        pointerEvents: "none",
        userSelect: "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0
    }, Ia = (r, i, o) => Math.min(Math.max(r, i), o), Na = ue(function (i, o) {
        var n, m;
        let {
                slideKey: p,
                width: f,
                height: b,
                child: d,
                size: t,
                gap: C,
                wrappedValue: w,
                numChildren: y,
                childCounter: L,
                isCanvas: x,
                effects: q,
                effectsOpacity: M,
                effectsScale: j,
                effectsRotate: R,
                isHorizontal: S,
                isLast: s,
                index: U
            } = i, Y = (t?.item + C) * L, I = [-t?.item, 0, t?.parent - t?.item + C, t?.parent].map(X => X - Y),
            D = !x && Pe(w, I, [-R, 0, 0, R]), ee = !x && Pe(w, I, [R, 0, 0, -R]), E = !x && Pe(w, I, [M, 1, 1, M]),
            B = !x && Pe(w, I, [j, 1, 1, j]), z = !x && Pe(w, I, [1, 1, 0, 0]),
            se = !x && Pe(w, X => X >= I[1] && X <= I[2]);
        return T(() => {
            if (se) return se.onChange(X => {
                var ae;
                (ae = o.current) === null || ae === void 0 || ae.setAttribute("aria-hidden", !X)
            })
        }, []), e(he, {
            inherit: "id",
            children: e("li", {
                style: {display: "contents"},
                "aria-hidden": U !== 0,
                children: S1(d, {
                    ref: o,
                    key: p + "child",
                    style: {
                        ...(n = d.props) === null || n === void 0 ? void 0 : n.style,
                        flexShrink: 0,
                        userSelect: "none",
                        width: f,
                        height: b,
                        opacity: E,
                        scale: B,
                        originX: S ? z : .5,
                        originY: S ? .5 : z,
                        rotateY: S ? D : 0,
                        rotateX: S ? 0 : ee
                    },
                    layoutId: d.props.layoutId ? d.props.layoutId + "-original-" + U : void 0
                }, (m = d.props) === null || m === void 0 ? void 0 : m.children)
            })
        })
    });

function Pa({
                selectedOpacity: r,
                opacity: i,
                total: o,
                index: n,
                wrappedIndex: m,
                wrappedIndexInverted: p,
                dotStyle: f,
                buttonStyle: b,
                gap: d,
                padding: t,
                isHorizontal: C,
                isInverted: w,
                ...y
            }) {
    let L = m === n;
    w && (L = Math.abs(p) === n);
    let x = d / 2, q = !C && n > 0 ? x : t, M = !C && n !== o - 1 ? x : t, j = C && n !== o - 1 ? x : t,
        R = C && n > 0 ? x : t;
    return e("button", {
        "aria-label": `Scroll to page ${n + 1}`,
        type: "button", ...y,
        style: {...b, padding: `${q}px ${j}px ${M}px ${R}px`},
        children: e(u.div, {style: {...f}, initial: !1, animate: {opacity: L ? r : i}, transition: {duration: .3}})
    })
}

var za = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto"
}, _a = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0
};
var Ea = ["KAGg1Gaj7", "qF9iVfGnt", "U9Yokxh7n", "tmyBPu7UN", "XfaM6hYiG", "BY9QIdjWe", "jQdDzMbqs"],
    Va = "framer-BMGY1", Fa = {
        BY9QIdjWe: "framer-v-21cxh8",
        jQdDzMbqs: "framer-v-1ur7n69",
        KAGg1Gaj7: "framer-v-yeaqii",
        qF9iVfGnt: "framer-v-1e51vt",
        tmyBPu7UN: "framer-v-187ygj8",
        U9Yokxh7n: "framer-v-qjnj8k",
        XfaM6hYiG: "framer-v-1gg5wq0"
    };

function fr(r, ...i) {
    let o = {};
    return i?.forEach(n => n && Object.assign(o, r[n])), o
}

var Za = {damping: 47, delay: 0, mass: 1, stiffness: 425, type: "spring"},
    m1 = {damping: 43, delay: 0, mass: 1, stiffness: 358, type: "spring"},
    f1 = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {src: r} : void 0,
    qa = ({value: r, children: i}) => {
        let o = He(Ke), n = r ?? o.transition, m = $(() => ({...o, transition: n}), [JSON.stringify(n)]);
        return e(Ke.Provider, {value: m, children: i})
    }, Da = u(h), Ta = {"Variant 4": "jQdDzMbqs", L: "qF9iVfGnt", M: "tmyBPu7UN", S: "BY9QIdjWe"},
    Aa = ({height: r, id: i, iMG: o, link: n, number: m, rotation: p, service: f, width: b, ...d}) => {
        var t, C, w, y, L;
        return {
            ...d,
            ajqyuruEV: (t = f ?? d.ajqyuruEV) !== null && t !== void 0 ? t : "Data Visualization",
            aRI3sgh8n: p ?? d.aRI3sgh8n,
            cL9cHogzZ: (C = o ?? d.cL9cHogzZ) !== null && C !== void 0 ? C : {
                src: "https://framerusercontent.com/images/p7eekbHD6sFW6h7wIXmx0LEE5I.png?scale-down-to=1024",
                srcSet: "https://framerusercontent.com/images/p7eekbHD6sFW6h7wIXmx0LEE5I.png?scale-down-to=512 512w,https://framerusercontent.com/images/p7eekbHD6sFW6h7wIXmx0LEE5I.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/p7eekbHD6sFW6h7wIXmx0LEE5I.png 1525w"
            },
            DGXqLefor: n ?? d.DGXqLefor,
            variant: (y = (w = Ta[d.variant]) !== null && w !== void 0 ? w : d.variant) !== null && y !== void 0 ? y : "KAGg1Gaj7",
            zhpUNCPPA: (L = m ?? d.zhpUNCPPA) !== null && L !== void 0 ? L : "01/"
        }
    }, Wa = (r, i) => i.join("-") + r.layoutDependency, Ga = ue(function (r, i) {
        let {activeLocale: o, setLocale: n} = ze(), {
                style: m,
                className: p,
                layoutId: f,
                variant: b,
                DGXqLefor: d,
                cL9cHogzZ: t,
                ajqyuruEV: C,
                zhpUNCPPA: w,
                aRI3sgh8n: y,
                ...L
            } = Aa(r), {
                baseVariant: x,
                classNames: q,
                gestureVariant: M,
                setGestureState: j,
                setVariant: R,
                variants: S
            } = $e({cycleOrder: Ea, defaultVariant: "KAGg1Gaj7", variant: b, variantClassNames: Fa}),
            s = Wa(r, S), {activeVariantCallback: U, delay: Y} = kr(x), I = U(async (..._) => {
                R("qF9iVfGnt")
            }), D = U(async (..._) => {
                R("KAGg1Gaj7")
            }), ee = U(async (..._) => {
                R("tmyBPu7UN")
            }), E = U(async (..._) => {
                R("U9Yokxh7n")
            }), B = U(async (..._) => {
                R("BY9QIdjWe")
            }), z = U(async (..._) => {
                R("XfaM6hYiG")
            }), se = N(null), X = () => !["U9Yokxh7n", "XfaM6hYiG", "BY9QIdjWe"].includes(x), ae = Ne(), oe = [at], be = Je();
        return e(he, {
            id: f ?? ae, children: e(Da, {
                animate: S, initial: !1, children: e(qa, {
                    value: Za, ...fr({BY9QIdjWe: {value: m1}, qF9iVfGnt: {value: m1}, tmyBPu7UN: {value: m1}}, x, M),
                    children: e(Kr, {
                        href: d, smoothScroll: !0, children: c(u.a, {
                            ...L,
                            className: `${Me(Va, ...oe, "framer-yeaqii", p, q)} framer-nyyw53`,
                            "data-border": !0,
                            "data-framer-name": "L",
                            "data-highlight": !0,
                            layoutDependency: s,
                            layoutId: "KAGg1Gaj7",
                            onHoverEnd: () => j({isHovered: !1}),
                            onHoverStart: () => j({isHovered: !0}),
                            onMouseEnter: I,
                            onTap: () => j({isPressed: !1}),
                            onTapCancel: () => j({isPressed: !1}),
                            onTapStart: () => j({isPressed: !0}),
                            ref: i ?? se,
                            style: {
                                "--border-bottom-width": "2px",
                                "--border-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                "--border-left-width": "0px",
                                "--border-right-width": "0px",
                                "--border-style": "solid",
                                "--border-top-width": "0px", ...m
                            }, ...fr({
                                BY9QIdjWe: {"data-framer-name": "S", onMouseLeave: z},
                                jQdDzMbqs: {"data-framer-name": "Variant 4"},
                                qF9iVfGnt: {onMouseLeave: D},
                                tmyBPu7UN: {"data-framer-name": "M", onMouseLeave: E},
                                U9Yokxh7n: {"data-framer-name": "M", onMouseEnter: ee},
                                XfaM6hYiG: {"data-framer-name": "S", onMouseEnter: B}
                            }, x, M),
                            children: [e(P, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                    children: e(u.p, {
                                        className: "framer-styles-preset-18v92ny",
                                        "data-styles-preset": "PCUpq0UFw",
                                        children: "01/"
                                    })
                                }),
                                className: "framer-1bvrzr9",
                                "data-framer-name": "01/",
                                layoutDependency: s,
                                layoutId: "HIUQt9QPU",
                                text: w,
                                variants: {
                                    BY9QIdjWe: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                    qF9iVfGnt: {"--extracted-r6o4lv": "rgb(255, 255, 255)"},
                                    tmyBPu7UN: {"--extracted-r6o4lv": "rgb(255, 255, 255)"},
                                    XfaM6hYiG: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"}
                                },
                                verticalAlignment: "center",
                                withExternalLayout: !0, ...fr({
                                    BY9QIdjWe: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                    "--framer-font-family": '"Basis Grotesque Pro Regular", sans-serif',
                                                    "--framer-font-size": "34px",
                                                    "--framer-letter-spacing": "-0.2px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"
                                                }, children: "01/"
                                            })
                                        }), fonts: ["CUSTOM;Basis Grotesque Pro Regular"]
                                    },
                                    qF9iVfGnt: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                className: "framer-styles-preset-18v92ny",
                                                "data-styles-preset": "PCUpq0UFw",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"},
                                                children: "01/"
                                            })
                                        })
                                    },
                                    tmyBPu7UN: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                className: "framer-styles-preset-18v92ny",
                                                "data-styles-preset": "PCUpq0UFw",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"},
                                                children: "01/"
                                            })
                                        })
                                    },
                                    XfaM6hYiG: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                    "--framer-font-family": '"Basis Grotesque Pro Regular", sans-serif',
                                                    "--framer-font-size": "34px",
                                                    "--framer-letter-spacing": "-0.2px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"
                                                }, children: "01/"
                                            })
                                        }), fonts: ["CUSTOM;Basis Grotesque Pro Regular"]
                                    }
                                }, x, M)
                            }), e(P, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                    children: e(u.p, {
                                        className: "framer-styles-preset-18v92ny",
                                        "data-styles-preset": "PCUpq0UFw",
                                        children: "Data Visualization"
                                    })
                                }),
                                className: "framer-gd4i71",
                                "data-framer-name": "Data Visualization",
                                layoutDependency: s,
                                layoutId: "liX02gQKk",
                                text: C,
                                variants: {
                                    BY9QIdjWe: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                    qF9iVfGnt: {"--extracted-r6o4lv": "rgb(255, 255, 255)"},
                                    tmyBPu7UN: {"--extracted-r6o4lv": "rgb(255, 255, 255)"},
                                    XfaM6hYiG: {"--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"}
                                },
                                verticalAlignment: "center",
                                withExternalLayout: !0, ...fr({
                                    BY9QIdjWe: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                    "--framer-font-family": '"Basis Grotesque Pro Regular", sans-serif',
                                                    "--framer-font-size": "34px",
                                                    "--framer-letter-spacing": "-0.2px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"
                                                }, children: "Data Visualization"
                                            })
                                        }), fonts: ["CUSTOM;Basis Grotesque Pro Regular"]
                                    },
                                    qF9iVfGnt: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                className: "framer-styles-preset-18v92ny",
                                                "data-styles-preset": "PCUpq0UFw",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"},
                                                children: "Data Visualization"
                                            })
                                        })
                                    },
                                    tmyBPu7UN: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                className: "framer-styles-preset-18v92ny",
                                                "data-styles-preset": "PCUpq0UFw",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"},
                                                children: "Data Visualization"
                                            })
                                        })
                                    },
                                    XfaM6hYiG: {
                                        children: e(h, {
                                            children: e(u.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                    "--framer-font-family": '"Basis Grotesque Pro Regular", sans-serif',
                                                    "--framer-font-size": "34px",
                                                    "--framer-letter-spacing": "-0.2px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"
                                                }, children: "Data Visualization"
                                            })
                                        }), fonts: ["CUSTOM;Basis Grotesque Pro Regular"]
                                    }
                                }, x, M)
                            }), X() && e(W, {
                                background: {
                                    alt: "",
                                    fit: "fit",
                                    sizes: "70px", ...f1(t),
                                    positionX: "center",
                                    positionY: "center"
                                },
                                className: "framer-1ujeryh",
                                "data-framer-name": "Union",
                                layoutDependency: s,
                                layoutId: "XEY1fJF2v",
                                style: {
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    opacity: 0,
                                    rotate: 0
                                },
                                variants: {
                                    qF9iVfGnt: {
                                        borderBottomLeftRadius: 24,
                                        borderBottomRightRadius: 24,
                                        borderTopLeftRadius: 24,
                                        borderTopRightRadius: 24,
                                        opacity: 1,
                                        rotate: y
                                    }, tmyBPu7UN: {opacity: 1}
                                }, ...fr({
                                    qF9iVfGnt: {background: {alt: "", fit: "fill", sizes: "452px", ...f1(t)}},
                                    tmyBPu7UN: {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            sizes: "340px", ...f1(t),
                                            positionX: "center",
                                            positionY: "center"
                                        }
                                    }
                                }, x, M)
                            })]
                        })
                    })
                })
            })
        })
    }),
    Ba = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BMGY1.framer-nyyw53, .framer-BMGY1 .framer-nyyw53 { display: block; }", ".framer-BMGY1.framer-yeaqii { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 10px 0px; position: relative; text-decoration: none; width: 922px; }", ".framer-BMGY1 .framer-1bvrzr9, .framer-BMGY1 .framer-gd4i71 { flex: 0.6 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-BMGY1 .framer-1ujeryh { flex: none; height: 75px; left: 204px; position: absolute; top: calc(50.00000000000002% - 75px / 2); width: 70px; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BMGY1.framer-yeaqii { gap: 0px; } .framer-BMGY1.framer-yeaqii > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-BMGY1.framer-yeaqii > :first-child { margin-left: 0px; } .framer-BMGY1.framer-yeaqii > :last-child { margin-right: 0px; } }", ".framer-BMGY1.framer-v-1e51vt .framer-1bvrzr9 { order: 0; z-index: 1; }", ".framer-BMGY1.framer-v-1e51vt .framer-gd4i71 { order: 1; z-index: 1; }", ".framer-BMGY1.framer-v-1e51vt .framer-1ujeryh { bottom: -198px; height: unset; left: 132px; order: 2; top: -183px; width: 452px; z-index: 0; }", ".framer-BMGY1.framer-v-qjnj8k.framer-yeaqii, .framer-BMGY1.framer-v-187ygj8.framer-yeaqii { height: 70px; width: 810px; }", ".framer-BMGY1.framer-v-qjnj8k .framer-1bvrzr9, .framer-BMGY1.framer-v-1gg5wq0 .framer-1bvrzr9 { flex: 0.2 0 0px; }", ".framer-BMGY1.framer-v-qjnj8k .framer-gd4i71, .framer-BMGY1.framer-v-1gg5wq0 .framer-gd4i71 { flex: 0.8 0 0px; }", ".framer-BMGY1.framer-v-187ygj8 .framer-1bvrzr9, .framer-BMGY1.framer-v-21cxh8 .framer-1bvrzr9 { flex: 0.2 0 0px; order: 0; }", ".framer-BMGY1.framer-v-187ygj8 .framer-gd4i71, .framer-BMGY1.framer-v-21cxh8 .framer-gd4i71 { flex: 0.8 0 0px; order: 1; }", ".framer-BMGY1.framer-v-187ygj8 .framer-1ujeryh { bottom: -129px; height: unset; left: unset; order: 2; right: 46px; top: -130px; width: 340px; }", ".framer-BMGY1.framer-v-1gg5wq0.framer-yeaqii { align-content: center; align-items: center; height: 50px; padding: 0px 0px 0px 0px; width: 390px; }", ".framer-BMGY1.framer-v-21cxh8.framer-yeaqii { height: 50px; width: 390px; }", ...tt, '.framer-BMGY1[data-border="true"]::after, .framer-BMGY1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    cr = ge(Ga, Ba, "framer-BMGY1"), ye = cr;
cr.displayName = "HOME / Service";
cr.defaultProps = {height: 130, width: 922};
ie(cr, {
    variant: {
        options: ["KAGg1Gaj7", "qF9iVfGnt", "U9Yokxh7n", "tmyBPu7UN", "XfaM6hYiG", "BY9QIdjWe", "jQdDzMbqs"],
        optionTitles: ["L", "L", "M", "M", "S", "S", "Variant 4"],
        title: "Variant",
        type: a.Enum
    },
    DGXqLefor: {title: "Link", type: a.Link},
    cL9cHogzZ: {
        __defaultAssetReference: "data:framer/asset-reference,p7eekbHD6sFW6h7wIXmx0LEE5I.png?originalFilename=Union.png&preferredSize=auto",
        title: "IMG",
        type: a.ResponsiveImage
    },
    ajqyuruEV: {defaultValue: "Data Visualization", displayTextArea: !1, title: "Service", type: a.String},
    zhpUNCPPA: {defaultValue: "01/", displayTextArea: !1, title: "Number", type: a.String},
    aRI3sgh8n: {defaultValue: 0, displayStepper: !1, step: 2, title: "Rotation", type: a.Number, unit: "\xB0"}
});
_e(cr, [{
    family: "Basis Grotesque Pro Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/PXWSbzpi0UzbGXCLBcuijWzlZU.woff2"
}, ...rt]);
var Ya = {kNgmrsJAA: {hover: !0, pressed: !0}}, Xa = ["kNgmrsJAA"], Oa = "framer-JGF8D",
    Ha = {kNgmrsJAA: "framer-v-38i8r6"};

function Nt(r, ...i) {
    let o = {};
    return i?.forEach(n => n && Object.assign(o, r[n])), o
}

var Pt = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"},
    Qa = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {src: r} : void 0,
    zt = ({value: r, children: i}) => {
        let o = He(Ke), n = r ?? o.transition, m = $(() => ({...o, transition: n}), [JSON.stringify(n)]);
        return e(Ke.Provider, {value: m, children: i})
    }, Ja = u(h), $a = ({
                            descriptionOnHover: r,
                            height: i,
                            id: o,
                            jobTitle: n,
                            name1: m,
                            overlayColour: p,
                            photo: f,
                            width: b,
                            ...d
                        }) => {
        var t, C, w, y, L;
        return {
            ...d,
            akQxzQBhe: (t = p ?? d.akQxzQBhe) !== null && t !== void 0 ? t : "rgba(0, 0, 0, 0.4)",
            f7exLnvS8: (C = n ?? d.f7exLnvS8) !== null && C !== void 0 ? C : "Founder",
            hiLYvj_LA: (w = f ?? d.hiLYvj_LA) !== null && w !== void 0 ? w : {
                src: "https://framerusercontent.com/images/RyiTRT87GUjQHM2moAc6iELRy58.jpg?scale-down-to=1024",
                srcSet: "https://framerusercontent.com/images/RyiTRT87GUjQHM2moAc6iELRy58.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/RyiTRT87GUjQHM2moAc6iELRy58.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/RyiTRT87GUjQHM2moAc6iELRy58.jpg?scale-down-to=4096 2730w,https://framerusercontent.com/images/RyiTRT87GUjQHM2moAc6iELRy58.jpg 3518w"
            },
            xORnPh_3Y: (y = r ?? d.xORnPh_3Y) !== null && y !== void 0 ? y : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
            z0clLQ8dy: (L = m ?? d.z0clLQ8dy) !== null && L !== void 0 ? L : "Anne Smith"
        }
    }, e2 = (r, i) => i.join("-") + r.layoutDependency, r2 = ue(function (r, i) {
        let {activeLocale: o, setLocale: n} = ze(), {
                style: m,
                className: p,
                layoutId: f,
                variant: b,
                hiLYvj_LA: d,
                z0clLQ8dy: t,
                f7exLnvS8: C,
                xORnPh_3Y: w,
                akQxzQBhe: y,
                ...L
            } = $a(r), {
                baseVariant: x,
                classNames: q,
                gestureVariant: M,
                setGestureState: j,
                setVariant: R,
                variants: S
            } = $e({cycleOrder: Xa, defaultVariant: "kNgmrsJAA", enabledGestures: Ya, variant: b, variantClassNames: Ha}),
            s = e2(r, S), U = N(null), Y = Ne(), I = [ct, lt], D = Je();
        return e(he, {
            id: f ?? Y, children: e(Ja, {
                animate: S, initial: !1, children: e(zt, {
                    value: Pt, children: c(u.div, {
                        ...L,
                        className: Me(Oa, ...I, "framer-38i8r6", p, q),
                        "data-framer-name": "Variant 1",
                        layoutDependency: s,
                        layoutId: "kNgmrsJAA",
                        onHoverEnd: () => j({isHovered: !1}),
                        onHoverStart: () => j({isHovered: !0}),
                        onTap: () => j({isPressed: !1}),
                        onTapCancel: () => j({isPressed: !1}),
                        onTapStart: () => j({isPressed: !0}),
                        ref: i ?? U,
                        style: {...m}, ...Nt({
                            "kNgmrsJAA-hover": {"data-framer-name": void 0},
                            "kNgmrsJAA-pressed": {"data-framer-name": void 0}
                        }, x, M),
                        children: [e(W, {
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 5277,
                                intrinsicWidth: 3518,
                                pixelHeight: 5277,
                                pixelWidth: 3518,
                                sizes: D?.width || "100vw", ...Qa(d)
                            },
                            className: "framer-fshyz5",
                            "data-framer-name": "Member Photo",
                            layoutDependency: s,
                            layoutId: "IwyoG11GH",
                            style: {
                                borderBottomLeftRadius: 300,
                                borderBottomRightRadius: 300,
                                borderTopLeftRadius: 300,
                                borderTopRightRadius: 300
                            },
                            variants: {
                                "kNgmrsJAA-hover": {
                                    borderBottomLeftRadius: 18,
                                    borderBottomRightRadius: 18,
                                    borderTopLeftRadius: 18,
                                    borderTopRightRadius: 18
                                }
                            },
                            children: e(zt, {
                                value: Pt, children: e(u.div, {
                                    className: "framer-8jfg3t",
                                    "data-framer-name": "Dark Overlay",
                                    layoutDependency: s,
                                    layoutId: "zR3OZAVwL",
                                    style: {backgroundColor: y, opacity: 0},
                                    variants: {"kNgmrsJAA-hover": {opacity: 1}},
                                    children: e(P, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e(u.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO0Jhc2lzIEdyb3Rlc3F1ZSBQcm8gUmVndWxhcg==",
                                                    "--framer-font-family": '"Basis Grotesque Pro Regular", "Basis Grotesque Pro Regular Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "-0.5px",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgba(255, 255, 255, 0))"
                                                },
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus."
                                            })
                                        }),
                                        className: "framer-1u0igzh",
                                        fonts: ["CUSTOM;Basis Grotesque Pro Regular"],
                                        layoutDependency: s,
                                        layoutId: "FcJUA1CZV",
                                        style: {
                                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            opacity: 0
                                        },
                                        text: w,
                                        variants: {"kNgmrsJAA-hover": {opacity: 1}},
                                        verticalAlignment: "top",
                                        withExternalLayout: !0, ...Nt({
                                            "kNgmrsJAA-hover": {
                                                children: e(h, {
                                                    children: e(u.p, {
                                                        className: "framer-styles-preset-1hxyy5i",
                                                        "data-styles-preset": "VL_K2CQO1",
                                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus."
                                                    })
                                                }), fonts: void 0
                                            }
                                        }, x, M)
                                    })
                                })
                            })
                        }), c(u.div, {
                            className: "framer-1vqlqgt",
                            "data-framer-name": "Member Titles",
                            layoutDependency: s,
                            layoutId: "ZBEXqYvM2",
                            children: [e(P, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                    children: e(u.p, {
                                        className: "framer-styles-preset-wr95x8",
                                        "data-styles-preset": "FYQzEtE7W",
                                        children: "Anne Smith"
                                    })
                                }),
                                className: "framer-1b2i3f7",
                                layoutDependency: s,
                                layoutId: "db9ln6BI9",
                                style: {
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                text: t,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(P, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                    children: e(u.p, {
                                        className: "framer-styles-preset-wr95x8",
                                        "data-styles-preset": "FYQzEtE7W",
                                        children: "Founder"
                                    })
                                }),
                                className: "framer-l7ldba",
                                layoutDependency: s,
                                layoutId: "LdUmZrcwX",
                                style: {
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline",
                                    opacity: .7
                                },
                                text: C,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })]
                        })]
                    })
                })
            })
        })
    }),
    t2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-JGF8D.framer-l6f589, .framer-JGF8D .framer-l6f589 { display: block; }", ".framer-JGF8D.framer-38i8r6 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 544px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 400px; }", ".framer-JGF8D .framer-fshyz5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-JGF8D .framer-8jfg3t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }", ".framer-JGF8D .framer-1u0igzh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-JGF8D .framer-1vqlqgt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }", ".framer-JGF8D .framer-1b2i3f7, .framer-JGF8D .framer-l7ldba { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JGF8D.framer-38i8r6, .framer-JGF8D .framer-fshyz5, .framer-JGF8D .framer-8jfg3t, .framer-JGF8D .framer-1vqlqgt { gap: 0px; } .framer-JGF8D.framer-38i8r6 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-JGF8D.framer-38i8r6 > :first-child, .framer-JGF8D .framer-fshyz5 > :first-child, .framer-JGF8D .framer-8jfg3t > :first-child, .framer-JGF8D .framer-1vqlqgt > :first-child { margin-top: 0px; } .framer-JGF8D.framer-38i8r6 > :last-child, .framer-JGF8D .framer-fshyz5 > :last-child, .framer-JGF8D .framer-8jfg3t > :last-child, .framer-JGF8D .framer-1vqlqgt > :last-child { margin-bottom: 0px; } .framer-JGF8D .framer-fshyz5 > *, .framer-JGF8D .framer-8jfg3t > *, .framer-JGF8D .framer-1vqlqgt > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ...ft, ...st],
    pr = ge(r2, t2, "framer-JGF8D"), Fr = pr;
pr.displayName = "Team Member Card";
pr.defaultProps = {height: 544, width: 400};
ie(pr, {
    hiLYvj_LA: {
        __defaultAssetReference: "data:framer/asset-reference,RyiTRT87GUjQHM2moAc6iELRy58.jpg?originalFilename=pexels-cottonbro-studio-4781409.jpg&preferredSize=auto",
        title: "Photo",
        type: a.ResponsiveImage
    },
    z0clLQ8dy: {defaultValue: "Anne Smith", displayTextArea: !1, title: "Name", type: a.String},
    f7exLnvS8: {defaultValue: "Founder", displayTextArea: !1, title: "Job Title", type: a.String},
    xORnPh_3Y: {
        defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
        displayTextArea: !0,
        title: "Description on Hover",
        type: a.String
    },
    akQxzQBhe: {defaultValue: "rgba(0, 0, 0, 0.4)", title: "Overlay Colour", type: a.Color}
});
_e(pr, [{
    family: "Basis Grotesque Pro Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/PXWSbzpi0UzbGXCLBcuijWzlZU.woff2"
}, ...mt, ...dt]);
var i2 = te(Ce), Fe = T1(Ce), n2 = {VM2R5hAn6: {hover: !0}, y9Go0E6hW: {hover: !0}},
    o2 = ["VM2R5hAn6", "y9Go0E6hW", "jnu1ODcju", "s3rmPQyg5", "L2M53tpWx", "RjQz2lrY3"], d2 = "framer-x2uZF", s2 = {
        jnu1ODcju: "framer-v-135r2c4",
        L2M53tpWx: "framer-v-1p8x6tn",
        RjQz2lrY3: "framer-v-ovmola",
        s3rmPQyg5: "framer-v-1ja8ks4",
        VM2R5hAn6: "framer-v-1fdzmls",
        y9Go0E6hW: "framer-v-vvavua"
    };

function ir(r, ...i) {
    let o = {};
    return i?.forEach(n => n && Object.assign(o, r[n])), o
}

var l2 = {damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring"},
    _t = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {src: r} : void 0,
    m2 = (r, i) => `translate(-50%, -50%) ${i}`, f2 = ({value: r, children: i}) => {
        let o = He(Ke), n = r ?? o.transition, m = $(() => ({...o, transition: n}), [JSON.stringify(n)]);
        return e(Ke.Provider, {value: m, children: i})
    }, c2 = u(h), p2 = {
        "Mobile - Vid NO LINK": "RjQz2lrY3",
        "Mobile - Vid": "L2M53tpWx",
        "Variant 3": "jnu1ODcju",
        "Video Alt": "y9Go0E6hW",
        Mobile: "s3rmPQyg5",
        Thumbnail: "VM2R5hAn6"
    }, u2 = ({file: r, height: i, id: o, image: n, link: m, title: p, video: f, width: b, ...d}) => {
        var t, C, w, y, L;
        return {
            ...d,
            DUuVeRWCj: r ?? d.DUuVeRWCj,
            NW0WsLCc6: (t = f ?? d.NW0WsLCc6) !== null && t !== void 0 ? t : "Upload",
            SkEtlNNzS: (C = n ?? d.SkEtlNNzS) !== null && C !== void 0 ? C : {
                src: "https://framerusercontent.com/images/JKbbKRs7v3CYwhPc02gDtcRm1G4.jpg?scale-down-to=2048",
                srcSet: "https://framerusercontent.com/images/JKbbKRs7v3CYwhPc02gDtcRm1G4.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/JKbbKRs7v3CYwhPc02gDtcRm1G4.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/JKbbKRs7v3CYwhPc02gDtcRm1G4.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/JKbbKRs7v3CYwhPc02gDtcRm1G4.jpg 3840w"
            },
            SlsaBTJ3p: (w = p ?? d.SlsaBTJ3p) !== null && w !== void 0 ? w : "Microsoft",
            tvkyi2WUE: m ?? d.tvkyi2WUE,
            variant: (L = (y = p2[d.variant]) !== null && y !== void 0 ? y : d.variant) !== null && L !== void 0 ? L : "VM2R5hAn6"
        }
    }, h2 = (r, i) => i.join("-") + r.layoutDependency, g2 = ue(function (r, i) {
        let {activeLocale: o, setLocale: n} = ze(), {
                style: m,
                className: p,
                layoutId: f,
                variant: b,
                SkEtlNNzS: d,
                tvkyi2WUE: t,
                SlsaBTJ3p: C,
                NW0WsLCc6: w,
                DUuVeRWCj: y,
                ...L
            } = u2(r), {
                baseVariant: x,
                classNames: q,
                gestureVariant: M,
                setGestureState: j,
                setVariant: R,
                variants: S
            } = $e({cycleOrder: o2, defaultVariant: "VM2R5hAn6", enabledGestures: n2, variant: b, variantClassNames: s2}),
            s = h2(r, S), {activeVariantCallback: U, delay: Y} = kr(x), I = U(async (...se) => {
                R("VM2R5hAn6")
            }), D = N(null),
            ee = () => !!(M === "y9Go0E6hW-hover" || ["y9Go0E6hW", "jnu1ODcju", "L2M53tpWx", "RjQz2lrY3"].includes(x)),
            E = Ne(), B = [_r, et], z = Je();
        return e(he, {
            id: f ?? E, children: e(c2, {
                animate: S, initial: !1, children: e(f2, {
                    value: l2, children: e(Kr, {
                        ...ir({
                            "VM2R5hAn6-hover": {href: t, smoothScroll: !1},
                            "y9Go0E6hW-hover": {href: t},
                            L2M53tpWx: {href: t},
                            s3rmPQyg5: {href: t}
                        }, x, M), children: c(u.a, {
                            ...L,
                            className: `${Me(d2, ...B, "framer-1fdzmls", p, q)} framer-yf932d`,
                            "data-framer-name": "Thumbnail",
                            layoutDependency: s,
                            layoutId: "VM2R5hAn6",
                            onHoverEnd: () => j({isHovered: !1}),
                            onHoverStart: () => j({isHovered: !0}),
                            onTap: () => j({isPressed: !1}),
                            onTapCancel: () => j({isPressed: !1}),
                            onTapStart: () => j({isPressed: !0}),
                            ref: i ?? D,
                            style: {
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30, ...m
                            },
                            variants: {
                                L2M53tpWx: {
                                    borderBottomLeftRadius: 17,
                                    borderBottomRightRadius: 17,
                                    borderTopLeftRadius: 17,
                                    borderTopRightRadius: 17
                                },
                                RjQz2lrY3: {
                                    borderBottomLeftRadius: 17,
                                    borderBottomRightRadius: 17,
                                    borderTopLeftRadius: 17,
                                    borderTopRightRadius: 17
                                },
                                s3rmPQyg5: {
                                    borderBottomLeftRadius: 17,
                                    borderBottomRightRadius: 17,
                                    borderTopLeftRadius: 17,
                                    borderTopRightRadius: 17
                                }
                            }, ...ir({
                                "VM2R5hAn6-hover": {"data-framer-name": void 0},
                                "y9Go0E6hW-hover": {"data-framer-name": void 0},
                                jnu1ODcju: {"data-framer-name": "Variant 3"},
                                L2M53tpWx: {"data-framer-name": "Mobile - Vid"},
                                RjQz2lrY3: {"data-framer-name": "Mobile - Vid NO LINK"},
                                s3rmPQyg5: {"data-framer-name": "Mobile"},
                                y9Go0E6hW: {"data-framer-name": "Video Alt"}
                            }, x, M),
                            children: [c(W, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 2725,
                                    intrinsicWidth: 3840,
                                    pixelHeight: 2725,
                                    pixelWidth: 3840,
                                    sizes: z?.width || "100vw", ..._t(d)
                                },
                                className: "framer-1h5ww7t",
                                "data-framer-name": "Image",
                                layoutDependency: s,
                                layoutId: "ON1MPEzuY", ...ir({
                                    "VM2R5hAn6-hover": {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2725,
                                            intrinsicWidth: 3840,
                                            pixelHeight: 2725,
                                            pixelWidth: 3840,
                                            sizes: `calc(${z?.width || "100vw"} * 1.179)`, ..._t(d)
                                        }
                                    },
                                    "y9Go0E6hW-hover": {background: void 0},
                                    jnu1ODcju: {background: void 0},
                                    L2M53tpWx: {background: void 0},
                                    RjQz2lrY3: {background: void 0},
                                    y9Go0E6hW: {background: void 0}
                                }, x, M),
                                children: [ee() && e(g, {
                                    children: e(u.div, {
                                        className: "framer-arbjf2-container",
                                        layoutDependency: s,
                                        layoutId: "hwzIwvUMK-container",
                                        children: e(Ce, {
                                            backgroundColor: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            borderRadius: 0,
                                            bottomLeftRadius: 0,
                                            bottomRightRadius: 0,
                                            canvasPlay: !1,
                                            controls: !1,
                                            height: "100%",
                                            id: "hwzIwvUMK",
                                            isMixedBorderRadius: !1,
                                            layoutId: "hwzIwvUMK",
                                            loop: !0,
                                            muted: !0,
                                            objectFit: "cover",
                                            playing: !0,
                                            posterEnabled: !1,
                                            srcFile: y,
                                            srcType: w,
                                            srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                            startTime: 0,
                                            style: {height: "100%", width: "100%"},
                                            topLeftRadius: 0,
                                            topRightRadius: 0,
                                            volume: 25,
                                            width: "100%"
                                        })
                                    })
                                }), c(u.div, {
                                    className: "framer-5ju8az",
                                    "data-framer-name": "hover button",
                                    layoutDependency: s,
                                    layoutId: "fVmrgoC6A",
                                    style: {opacity: 0, rotate: 45},
                                    variants: {"VM2R5hAn6-hover": {opacity: 1}, "y9Go0E6hW-hover": {opacity: 1}},
                                    children: [e(G, {
                                        className: "framer-1vg5jmz",
                                        "data-framer-name": "Vector",
                                        fill: "rgba(0,0,0,1)",
                                        intrinsicHeight: 272,
                                        intrinsicWidth: 272,
                                        layoutDependency: s,
                                        layoutId: "GTNd6uGqd",
                                        style: {opacity: 1, rotate: -90},
                                        svg: `<svg width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M153.63 20.905C180.558 -6.02309 224.217 -6.0231 251.145 20.905C278.074 47.8331 278.074 91.4922 251.145 118.42L118.471 251.095C91.5425 278.023 47.8834 278.023 20.9553 251.095C-5.97283 224.167 -5.97281 180.508 20.9553 153.58L153.63 20.905Z" fill="#122D8B"/>
<path d="M251.145 153.579C278.073 180.507 278.073 224.167 251.145 251.095C224.217 278.023 180.558 278.023 153.63 251.095L20.9549 118.42C-5.97323 91.4916 -5.97324 47.8325 20.9549 20.9044C47.883 -6.02366 91.542 -6.02364 118.47 20.9044L251.145 153.579Z" fill="#122D8B"/>
</svg>
`,
                                        variants: {
                                            "VM2R5hAn6-hover": {rotate: -45},
                                            "y9Go0E6hW-hover": {rotate: -45},
                                            s3rmPQyg5: {opacity: 0}
                                        },
                                        withExternalLayout: !0
                                    }), e(P, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e(u.p, {
                                                className: "framer-styles-preset-63ckt7",
                                                "data-styles-preset": "Arz7WxDDM",
                                                style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                children: "View"
                                            })
                                        }),
                                        className: "framer-fx2a2f",
                                        "data-framer-name": "VIEW",
                                        layoutDependency: s,
                                        layoutId: "fVMAbx9ci",
                                        style: {
                                            "--extracted-r6o4lv": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            rotate: -45
                                        },
                                        transformTemplate: m2,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0, ...ir({
                                            "VM2R5hAn6-hover": {
                                                children: e(h, {
                                                    children: e(u.p, {
                                                        className: "framer-styles-preset-63ckt7",
                                                        "data-styles-preset": "Arz7WxDDM",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "VIEW"
                                                    })
                                                })
                                            },
                                            "y9Go0E6hW-hover": {
                                                children: e(h, {
                                                    children: e(u.p, {
                                                        className: "framer-styles-preset-63ckt7",
                                                        "data-styles-preset": "Arz7WxDDM",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "VIEW"
                                                    })
                                                })
                                            },
                                            jnu1ODcju: {
                                                children: e(h, {
                                                    children: e(u.p, {
                                                        className: "framer-styles-preset-63ckt7",
                                                        "data-styles-preset": "Arz7WxDDM",
                                                        style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255)))"},
                                                        children: "Coming Soon"
                                                    })
                                                })
                                            }
                                        }, x, M)
                                    })]
                                })]
                            }), e(u.div, {
                                className: "framer-19gl2ev",
                                "data-framer-name": "Client",
                                "data-highlight": !0,
                                layoutDependency: s,
                                layoutId: "iakrrJPmP",
                                onTap: I,
                                style: {
                                    backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                    borderBottomLeftRadius: 49,
                                    borderBottomRightRadius: 49,
                                    borderTopLeftRadius: 49,
                                    borderTopRightRadius: 49
                                },
                                variants: {
                                    "VM2R5hAn6-hover": {backgroundColor: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                    "y9Go0E6hW-hover": {backgroundColor: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"}
                                }, ...ir({
                                    "y9Go0E6hW-hover": {"data-highlight": void 0, onTap: void 0},
                                    jnu1ODcju: {"data-highlight": void 0, onTap: void 0},
                                    L2M53tpWx: {"data-highlight": void 0, onTap: void 0},
                                    RjQz2lrY3: {"data-highlight": void 0, onTap: void 0},
                                    y9Go0E6hW: {"data-highlight": void 0, onTap: void 0}
                                }, x, M),
                                children: e(P, {
                                    __fromCanvasComponent: !0,
                                    children: e(h, {
                                        children: e(u.p, {
                                            className: "framer-styles-preset-10erd1a",
                                            "data-styles-preset": "yVMxki16r",
                                            children: "Microsoft"
                                        })
                                    }),
                                    className: "framer-oqqyl4",
                                    "data-framer-name": "Microsoft",
                                    layoutDependency: s,
                                    layoutId: "SWReOv7fz",
                                    text: C,
                                    variants: {
                                        "VM2R5hAn6-hover": {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"},
                                        "y9Go0E6hW-hover": {"--extracted-r6o4lv": "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))"}
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0, ...ir({
                                        "VM2R5hAn6-hover": {
                                            children: e(h, {
                                                children: e(u.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                    children: "Microsoft"
                                                })
                                            })
                                        },
                                        "y9Go0E6hW-hover": {
                                            children: e(h, {
                                                children: e(u.p, {
                                                    className: "framer-styles-preset-10erd1a",
                                                    "data-styles-preset": "yVMxki16r",
                                                    style: {"--framer-text-color": "var(--extracted-r6o4lv, var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)))"},
                                                    children: "Microsoft"
                                                })
                                            })
                                        }
                                    }, x, M)
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    x2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-x2uZF.framer-yf932d, .framer-x2uZF .framer-yf932d { display: block; }", ".framer-x2uZF.framer-1fdzmls { cursor: pointer; height: 700px; overflow: hidden; position: relative; width: 1229px; will-change: var(--framer-will-change-override, transform); }", ".framer-x2uZF .framer-1h5ww7t { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; }", ".framer-x2uZF .framer-arbjf2-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }", ".framer-x2uZF .framer-5ju8az { flex: none; height: 420px; left: calc(50.04068348250612% - 420px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 420px / 2); width: 420px; }", ".framer-x2uZF .framer-1vg5jmz { flex: none; height: 404px; left: calc(49.76190476190479% - 404px / 2); position: absolute; top: calc(49.76190476190479% - 404px / 2); width: 404px; }", ".framer-x2uZF .framer-fx2a2f { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }", ".framer-x2uZF .framer-19gl2ev { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 30px; overflow: visible; padding: 10px 22px 10px 22px; position: absolute; top: 30px; width: min-content; }", ".framer-x2uZF .framer-oqqyl4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-x2uZF .framer-19gl2ev { gap: 0px; } .framer-x2uZF .framer-19gl2ev > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-x2uZF .framer-19gl2ev > :first-child { margin-left: 0px; } .framer-x2uZF .framer-19gl2ev > :last-child { margin-right: 0px; } }", ".framer-x2uZF.framer-v-vvavua .framer-5ju8az, .framer-x2uZF.framer-v-135r2c4 .framer-5ju8az { height: 380px; left: calc(50.04068348250612% - 380px / 2); top: calc(50.00000000000002% - 380px / 2); width: 380px; }", ".framer-x2uZF.framer-v-vvavua .framer-19gl2ev, .framer-x2uZF.framer-v-135r2c4.framer-1fdzmls, .framer-x2uZF.framer-v-135r2c4 .framer-19gl2ev, .framer-x2uZF.framer-v-ovmola.framer-1fdzmls, .framer-x2uZF.framer-v-vvavua.hover .framer-19gl2ev { cursor: unset; }", ".framer-x2uZF.framer-v-1ja8ks4.framer-1fdzmls, .framer-x2uZF.framer-v-1p8x6tn.framer-1fdzmls, .framer-x2uZF.framer-v-1fdzmls.hover.framer-1fdzmls, .framer-x2uZF.framer-v-vvavua.hover.framer-1fdzmls { text-decoration: none; }", ".framer-x2uZF.framer-v-1ja8ks4 .framer-5ju8az, .framer-x2uZF.framer-v-1p8x6tn .framer-5ju8az, .framer-x2uZF.framer-v-ovmola .framer-5ju8az { height: 1px; left: calc(50.04068348250612% - 1px / 2); top: calc(50.00000000000002% - 1px / 2); width: 1px; }", ".framer-x2uZF.framer-v-1ja8ks4 .framer-1vg5jmz { left: calc(49.76190476190479% - 403px / 2); width: 403px; }", ".framer-x2uZF.framer-v-1ja8ks4 .framer-19gl2ev { left: 10px; padding: 5px 14px 5px 14px; top: 10px; }", ".framer-x2uZF.framer-v-1p8x6tn .framer-19gl2ev, .framer-x2uZF.framer-v-ovmola .framer-19gl2ev { cursor: unset; left: 10px; padding: 5px 14px 5px 14px; top: 10px; }", ".framer-x2uZF.framer-v-ovmola .framer-1h5ww7t { left: calc(49.95931651749392% - 100% / 2); }", ".framer-x2uZF.framer-v-1fdzmls.hover .framer-1h5ww7t { height: 118%; left: calc(49.95931651749392% - 117.90073230268511% / 2); top: calc(50.00000000000002% - 117.85714285714286% / 2); width: 118%; }", ".framer-x2uZF.framer-v-vvavua.hover .framer-1h5ww7t { height: 118%; left: calc(50.04068348250612% - 118% / 2); top: calc(50.00000000000002% - 118% / 2); width: 118%; }", ".framer-x2uZF.framer-v-vvavua.hover .framer-5ju8az { left: calc(50.00000000000002% - 380px / 2); }", ...zr, ...$1],
    ur = ge(g2, x2, "framer-x2uZF"), Ze = ur;
ur.displayName = "Project-Card";
ur.defaultProps = {height: 700, width: 1229};
ie(ur, {
    variant: {
        options: ["VM2R5hAn6", "y9Go0E6hW", "jnu1ODcju", "s3rmPQyg5", "L2M53tpWx", "RjQz2lrY3"],
        optionTitles: ["Thumbnail", "Video Alt", "Variant 3", "Mobile", "Mobile - Vid", "Mobile - Vid NO LINK"],
        title: "Variant",
        type: a.Enum
    },
    SkEtlNNzS: {
        __defaultAssetReference: "data:framer/asset-reference,JKbbKRs7v3CYwhPc02gDtcRm1G4.jpg?originalFilename=On+Stand.jpg&preferredSize=auto",
        title: "Image",
        type: a.ResponsiveImage
    },
    tvkyi2WUE: {title: "Link", type: a.Link},
    SlsaBTJ3p: {defaultValue: "Microsoft", displayTextArea: !1, title: "Title", type: a.String},
    NW0WsLCc6: Fe?.srcType && {
        ...Fe.srcType,
        defaultValue: "Upload",
        description: void 0,
        hidden: void 0,
        title: "Video"
    },
    DUuVeRWCj: Fe?.srcFile && {
        ...Fe.srcFile,
        __defaultAssetReference: "",
        description: void 0,
        hidden: void 0,
        title: "File"
    }
});
_e(ur, [...i2, ...Pr, ...J1]);
var v2 = te(n1), w2 = a1(v), C2 = te(Ce), y2 = te(je), b2 = te(Ze), qe = a1(u.div), L2 = te(Se), U2 = te(O),
    K2 = te(ye), k2 = te(Nr), M2 = te(Fr), j2 = te(Ee), R2 = te(ar), S2 = te(o1);
var I2 = {
        ivZn5n4jd: "(max-width: 809px)",
        oPLt7_M7Y: "(min-width: 1920px)",
        qEJDbn9wX: "(min-width: 810px) and (max-width: 1439px)",
        WQLkyLRf1: "(min-width: 1440px) and (max-width: 1919px)"
    }, Zr = () => typeof document < "u", Et = "framer-1uUKd", N2 = {
        ivZn5n4jd: "framer-v-7gi421",
        oPLt7_M7Y: "framer-v-qs7kru",
        qEJDbn9wX: "framer-v-3v2uua",
        WQLkyLRf1: "framer-v-72rtr7"
    }, P2 = {delay: 0, duration: .1, ease: [.5, -.01, .56, 1], type: "tween"}, z2 = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: -84
    }, _2 = (r, i) => `translateX(-50%) ${i}`, ne = (r, i) => {
        if (!(!r || typeof r != "object")) return {...r, alt: i}
    }, Vt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 150
    }, Ft = {damping: 80, delay: 0, mass: 1, stiffness: 400, type: "spring"}, qr = Er(),
    E2 = {Desktop: "WQLkyLRf1", L: "oPLt7_M7Y", Phone: "ivZn5n4jd", Tablet: "qEJDbn9wX"},
    V2 = ({height: r, id: i, width: o, ...n}) => {
        var m, p;
        return {
            ...n,
            variant: (p = (m = E2[n.variant]) !== null && m !== void 0 ? m : n.variant) !== null && p !== void 0 ? p : "WQLkyLRf1"
        }
    }, F2 = ue(function (r, i) {
        let {activeLocale: o, setLocale: n} = ze(), {style: m, className: p, layoutId: f, variant: b, ...d} = V2(r);
        T(() => {
            let s = Er(void 0, o);
            if (s.robots) {
                let U = document.querySelector('meta[name="robots"]');
                U ? U.setAttribute("content", s.robots) : (U = document.createElement("meta"), U.setAttribute("name", "robots"), U.setAttribute("content", s.robots), document.head.appendChild(U))
            }
        }, [void 0, o]), N1(() => {
            let s = Er(void 0, o);
            if (document.title = s.title || "", s.viewport) {
                var U;
                (U = document.querySelector('meta[name="viewport"]')) === null || U === void 0 || U.setAttribute("content", s.viewport)
            }
            let Y = s.bodyClassName;
            if (Y) {
                let I = document.body;
                I.classList.forEach(D => D.startsWith("framer-body-") && I.classList.remove(D)), I.classList.add(`${s.bodyClassName}-framer-1uUKd`)
            }
            return () => {
                Y && document.body.classList.remove(`${s.bodyClassName}-framer-1uUKd`)
            }
        }, [void 0, o]);
        let [t, C] = G1(b, I2, !1), w = void 0, y = N(null), L = q1(), x = () => Zr() ? t !== "ivZn5n4jd" : !0,
            q = () => !Zr() || t === "oPLt7_M7Y", M = () => Zr() ? !["qEJDbn9wX", "oPLt7_M7Y"].includes(t) : !0,
            j = () => !Zr() || t === "qEJDbn9wX", R = Ne(), S = [ht, ot, vt, yt, _r];
        return A1({}), e(W1.Provider, {
            value: {primaryVariantId: "WQLkyLRf1", variantClassNames: N2}, children: c(he, {
                id: f ?? R, children: [c(u.div, {
                    ...d,
                    className: Me(Et, ...S, "framer-72rtr7", p),
                    ref: i ?? y,
                    style: {...m},
                    children: [e(g, {
                        width: "100vw",
                        children: e(l, {
                            breakpoint: t,
                            overrides: {ivZn5n4jd: {transformTemplate: void 0}},
                            children: e(w2, {
                                __framer__animate: {transition: P2},
                                __framer__animateOnce: !1,
                                __framer__scrollDirection: {direction: "down", target: z2},
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1gw5lgm-container",
                                layoutScroll: !0,
                                style: {transformPerspective: 1200},
                                transformTemplate: _2,
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {variant: "ZJR__45in"},
                                        oPLt7_M7Y: {variant: "V_4fAjlse"},
                                        qEJDbn9wX: {variant: "GXpkPIKyF"}
                                    },
                                    children: e(n1, {
                                        height: "100%",
                                        id: "MqRJArykp",
                                        layoutId: "MqRJArykp",
                                        NB8eDwGVP: "Branding and Data, Together At Last \u2728",
                                        style: {width: "100%"},
                                        variant: "rF6BILRkB",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }), e("div", {
                        className: "framer-8r7hn7", "data-framer-name": "DATALANDS some3", name: "DATALANDS some4", children: e("div", {
                            className: "framer-1s60azr",
                            "data-framer-name": "Datalands some1",
                            name: "Datalands some2",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {
                                    ivZn5n4jd: {
                                        children: e(h, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO09aSUsgQmxhY2s=",
                                                    "--framer-font-family": '"OZIK Black", "OZIK Black Placeholder", sans-serif',
                                                    "--framer-font-size": "94.0357px",
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"
                                                }, children: "Datalands som"
                                            })
                                        }), viewBox: "0 0 362.940357 132"
                                    },
                                    oPLt7_M7Y: {
                                        children: e(h, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO09aSUsgQmxhY2s=",
                                                    "--framer-font-family": '"OZIK Black", "OZIK Black Placeholder", sans-serif',
                                                    "--framer-font-size": "482.0476259159004px",
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"
                                                }, children: "Datalands some6"
                                            })
                                        }), viewBox: "0 0 1859.820476259159 723"
                                    }
                                },
                                children: e(P, {
                                    __fromCanvasComponent: !0,
                                    children: e(h, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO09aSUsgQmxhY2s=",
                                                "--framer-font-family": '"OZIK Black", "OZIK Black Placeholder", sans-serif',
                                                "--framer-font-size": "357.7581px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"
                                            }, children: "Datalands some7"
                                        })
                                    }),
                                    className: "framer-19sq2uk",
                                    fonts: ["CUSTOM;OZIK Black"],
                                    verticalAlignment: "center",
                                    viewBox: "0 0 1380.577581 537",
                                    withExternalLayout: !0
                                })
                            })
                        })
                    }), e("div", {
                        className: "framer-1xsge8z",
                        "data-framer-name": "REEL",
                        name: "REEL",
                        children: e(g, {
                            children: e(v, {
                                className: "framer-1tncfu6-container",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {oPLt7_M7Y: {style: {height: "100%", width: "100%"}}},
                                    children: e(Ce, {
                                        backgroundColor: "var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0))",
                                        borderRadius: 20,
                                        bottomLeftRadius: 20,
                                        bottomRightRadius: 20,
                                        canvasPlay: !1,
                                        controls: !1,
                                        height: "100%",
                                        id: "tG4UXbT8x",
                                        isMixedBorderRadius: !1,
                                        layoutId: "tG4UXbT8x",
                                        loop: !0,
                                        muted: !0,
                                        objectFit: "cover",
                                        playing: !0,
                                        posterEnabled: !1,
                                        srcFile: "https://framerusercontent.com/assets/XukcdTdQbisd1V1ArlbgPNh907E.mp4",
                                        srcType: "Upload",
                                        srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                        startTime: 0,
                                        style: {width: "100%"},
                                        topLeftRadius: 20,
                                        topRightRadius: 20,
                                        volume: 52,
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }), c("div", {
                        className: "framer-zyik20",
                        "data-framer-name": "INFO",
                        name: "INFO",
                        children: [e(P, {
                            __fromCanvasComponent: !0,
                            children: e(h, {
                                children: e("h3", {
                                    className: "framer-styles-preset-6vph8c",
                                    "data-styles-preset": "jH2SQvbsf",
                                    style: {"--framer-text-alignment": "left"},
                                    children: "Datalands some is a visual communication and information design studio. "
                                })
                            }),
                            className: "framer-zyf7e7",
                            fonts: ["Inter"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        }), e(P, {
                            __fromCanvasComponent: !0,
                            children: e(h, {
                                children: e("p", {
                                    className: "framer-styles-preset-7kw3ld",
                                    "data-styles-preset": "K40Y92M_4",
                                    children: "We produce groundbreaking, thrilling projects\u2014shaping the aesthetics and essence of forward-thinking brands."
                                })
                            }),
                            className: "framer-1grja8k",
                            fonts: ["Inter"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        })]
                    }), c("div", {
                        className: "framer-1k9ieku",
                        "data-border": !0,
                        "data-framer-name": "PROJECTS",
                        name: "PROJECTS",
                        children: [e("div", {
                            className: "framer-1tzt9yq",
                            "data-framer-name": "HEAD",
                            name: "HEAD",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {
                                    ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                    qEJDbn9wX: {width: "max(100vw - 40px, 1px)"}
                                },
                                children: e(g, {
                                    width: "max(100vw - 60px, 1px)",
                                    children: e(v, {
                                        className: "framer-1axhh31-container",
                                        children: e(je, {
                                            FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            H7OM7RY2F: "CASE STUDIES",
                                            height: "100%",
                                            id: "sso5nENOu",
                                            ige6Om3tR: "\u2B24",
                                            layoutId: "sso5nENOu",
                                            style: {width: "100%"},
                                            variant: "AjLrTmY9B",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), e("div", {
                            className: "framer-rjuf0a", "data-framer-name": "01", name: "01", children: c(qe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 90
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-sjkpd0",
                                "data-framer-name": "Project",
                                name: "Project",
                                style: {transformPerspective: 1200},
                                children: [e(mr, {
                                    links: [{
                                        href: {
                                            pathVariables: {rbKd64v28: "nike-viz"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "mJUm6hVMp"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "nike-viz"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "mJUm6hVMp"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "nike-viz"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "mJUm6hVMp"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "nike-viz"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "mJUm6hVMp"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }],
                                    children: s => e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                            qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                        },
                                        children: e(g, {
                                            width: "911px",
                                            children: e(v, {
                                                className: "framer-3yq6wn-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {tvkyi2WUE: s[2], variant: "L2M53tpWx"},
                                                        oPLt7_M7Y: {tvkyi2WUE: s[3]},
                                                        qEJDbn9wX: {
                                                            style: {width: "100%"},
                                                            tvkyi2WUE: s[1],
                                                            variant: "L2M53tpWx"
                                                        }
                                                    },
                                                    children: e(Ze, {
                                                        DUuVeRWCj: "https://framerusercontent.com/assets/ciAw2OHkMJnDU8Q9rYV3QPNBUVU.mp4",
                                                        height: "100%",
                                                        id: "QxP9STTAc",
                                                        layoutId: "QxP9STTAc",
                                                        NW0WsLCc6: "Upload",
                                                        SlsaBTJ3p: "Nike",
                                                        style: {height: "100%", width: "100%"},
                                                        tvkyi2WUE: s[0],
                                                        variant: "y9Go0E6hW",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-1tyryfq",
                                    "data-framer-name": "Info",
                                    name: "Info",
                                    children: e("div", {
                                        className: "framer-hh9uzm",
                                        "data-framer-name": "Proj-Card-Text",
                                        name: "Proj-Card-Text",
                                        children: e(P, {
                                            __fromCanvasComponent: !0,
                                            children: e(h, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-yy04ro",
                                                    "data-styles-preset": "L542E8JoR",
                                                    style: {"--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"},
                                                    children: "Overhauling how a beloved sportswear company visualizes data. "
                                                })
                                            }),
                                            className: "framer-5u591x",
                                            "data-framer-name": "Desc",
                                            fonts: ["Inter"],
                                            name: "Desc",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            })
                        }), c("div", {
                            className: "framer-urqmsp", "data-framer-name": "02-03", name: "02-03", children: [c(qe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 90
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-p6yslu",
                                "data-framer-name": "Project",
                                name: "Project",
                                style: {transformPerspective: 1200},
                                children: [e(mr, {
                                    links: [{
                                        href: {
                                            pathVariables: {rbKd64v28: "microsoft-praise"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "lsp0_P0jA"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "microsoft-praise"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "lsp0_P0jA"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "microsoft-praise"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "lsp0_P0jA"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }],
                                    children: s => e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                            qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                        },
                                        children: e(g, {
                                            width: "calc(100vw - 60px)",
                                            children: e(v, {
                                                className: "framer-f2ubty-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {tvkyi2WUE: s[2], variant: "L2M53tpWx"},
                                                        oPLt7_M7Y: {tvkyi2WUE: void 0},
                                                        qEJDbn9wX: {
                                                            style: {width: "100%"},
                                                            tvkyi2WUE: s[1],
                                                            variant: "L2M53tpWx"
                                                        }
                                                    },
                                                    children: e(Ze, {
                                                        DUuVeRWCj: "https://framerusercontent.com/assets/4Y5bBzDf57vZKjQM2mSMRRYQ8EA.mp4",
                                                        height: "100%",
                                                        id: "RckojiEEg",
                                                        layoutId: "RckojiEEg",
                                                        NW0WsLCc6: "Upload",
                                                        SlsaBTJ3p: "Microsoft",
                                                        style: {height: "100%", width: "100%"},
                                                        tvkyi2WUE: s[0],
                                                        variant: "y9Go0E6hW",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-r3lo3v",
                                    "data-framer-name": "Info",
                                    name: "Info",
                                    children: e("div", {
                                        className: "framer-106n3q5",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: e(P, {
                                            __fromCanvasComponent: !0,
                                            children: e(h, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-yy04ro",
                                                    "data-styles-preset": "L542E8JoR",
                                                    children: "Reimagining how a Fortune 50 brand visually communicates key user moments."
                                                })
                                            }),
                                            className: "framer-17tily5",
                                            "data-framer-name": "Desc",
                                            fonts: ["Inter"],
                                            name: "Desc",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            }), c(qe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 90
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-93jnv2",
                                "data-framer-name": "Project",
                                name: "Project",
                                style: {transformPerspective: 1200},
                                children: [e(mr, {
                                    links: [{
                                        href: {
                                            pathVariables: {rbKd64v28: "volta-campaign"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "J026iQwzN"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "volta-campaign"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "J026iQwzN"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "volta-campaign"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "J026iQwzN"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "volta-campaign"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "J026iQwzN"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }], children: s => e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                            qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                        },
                                        children: e(g, {
                                            width: "calc(100vw - 60px)", children: e(v, {
                                                className: "framer-kcxvpq-container", children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {
                                                            SkEtlNNzS: ne({
                                                                positionX: "2.9%",
                                                                positionY: "50.2%",
                                                                src: "https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg",
                                                                srcSet: "https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg 1970w"
                                                            }, ""), tvkyi2WUE: s[2], variant: "s3rmPQyg5"
                                                        },
                                                        oPLt7_M7Y: {tvkyi2WUE: s[3]},
                                                        qEJDbn9wX: {
                                                            SkEtlNNzS: ne({
                                                                positionX: "10.3%",
                                                                positionY: "47.2%",
                                                                src: "https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg",
                                                                srcSet: "https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg 1970w"
                                                            }, ""), tvkyi2WUE: s[1], variant: "s3rmPQyg5"
                                                        }
                                                    },
                                                    children: e(Ze, {
                                                        height: "100%",
                                                        id: "Ft7ZNkW26",
                                                        layoutId: "Ft7ZNkW26",
                                                        NW0WsLCc6: "Upload",
                                                        SkEtlNNzS: ne({
                                                            src: "https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg",
                                                            srcSet: "https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg 1970w"
                                                        }, ""),
                                                        SlsaBTJ3p: "Volta",
                                                        style: {height: "100%", width: "100%"},
                                                        tvkyi2WUE: s[0],
                                                        variant: "VM2R5hAn6",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-dv86s9",
                                    "data-framer-name": "Info",
                                    name: "Info",
                                    children: e("div", {
                                        className: "framer-1mtnqg2",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: e(P, {
                                            __fromCanvasComponent: !0,
                                            children: e(h, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-yy04ro",
                                                    "data-styles-preset": "L542E8JoR",
                                                    children: "A comprehensive report and social campaign for CPG climate consciousness."
                                                })
                                            }),
                                            className: "framer-qh7chi",
                                            "data-framer-name": "Desc",
                                            fonts: ["Inter"],
                                            name: "Desc",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            })]
                        }), e("div", {
                            className: "framer-1heno13", "data-framer-name": "04", name: "04", children: c(qe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 90
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-km39ds",
                                "data-framer-name": "Project",
                                name: "Project",
                                style: {transformPerspective: 1200},
                                children: [e(mr, {
                                    links: [{
                                        href: {
                                            pathVariables: {rbKd64v28: "lululemon-studio-mirror"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "AOQuk7yDJ"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "lululemon-studio-mirror"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "AOQuk7yDJ"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "lululemon-studio-mirror"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "AOQuk7yDJ"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            pathVariables: {rbKd64v28: "lululemon-studio-mirror"},
                                            unresolvedPathSlugs: {
                                                rbKd64v28: {
                                                    collectionId: "rm1Es5roQ",
                                                    collectionItemId: "AOQuk7yDJ"
                                                }
                                            },
                                            webPageId: "XF8IlhY4K"
                                        }, implicitPathVariables: void 0
                                    }],
                                    children: s => e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                            oPLt7_M7Y: {width: "calc((100vw - 140px) * 0.8)"},
                                            qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                        },
                                        children: e(g, {
                                            width: "calc((100vw - 140px) * 0.66)",
                                            children: e(v, {
                                                className: "framer-fqzzl8-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {tvkyi2WUE: s[2], variant: "L2M53tpWx"},
                                                        oPLt7_M7Y: {tvkyi2WUE: s[3]},
                                                        qEJDbn9wX: {
                                                            style: {width: "100%"},
                                                            tvkyi2WUE: s[1],
                                                            variant: "L2M53tpWx"
                                                        }
                                                    },
                                                    children: e(Ze, {
                                                        DUuVeRWCj: "https://framerusercontent.com/assets/wModeEICIsVzdJMH12KucakUA.mp4",
                                                        height: "100%",
                                                        id: "CZosBkbR9",
                                                        layoutId: "CZosBkbR9",
                                                        NW0WsLCc6: "Upload",
                                                        SlsaBTJ3p: "LULULEMON STUDIO",
                                                        style: {height: "100%", width: "100%"},
                                                        tvkyi2WUE: s[0],
                                                        variant: "y9Go0E6hW",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-4v34gl",
                                    "data-framer-name": "Info",
                                    name: "Info",
                                    children: e("div", {
                                        className: "framer-4q0vwi",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: e(P, {
                                            __fromCanvasComponent: !0,
                                            children: e(h, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-yy04ro",
                                                    "data-styles-preset": "L542E8JoR",
                                                    children: "Establishing a visual performance dashboard for an exciting new fitness hardware."
                                                })
                                            }),
                                            className: "framer-c3oa8w",
                                            "data-framer-name": "Desc",
                                            fonts: ["Inter"],
                                            name: "Desc",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            })
                        }), c("div", {
                            className: "framer-1f100b8", "data-framer-name": "05-06", name: "05-06", children: [c(qe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 90
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-134tiz1",
                                "data-framer-name": "Project",
                                name: "Project",
                                style: {transformPerspective: 1200},
                                children: [e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-14btuk4-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {variant: "L2M53tpWx"},
                                                    qEJDbn9wX: {variant: "RjQz2lrY3"}
                                                },
                                                children: e(Ze, {
                                                    DUuVeRWCj: "https://framerusercontent.com/assets/fEjWHWbygc7GTnmh2JZf9wPXoaQ.mp4",
                                                    height: "100%",
                                                    id: "G7o3Q3ZrE",
                                                    layoutId: "G7o3Q3ZrE",
                                                    NW0WsLCc6: "Upload",
                                                    SlsaBTJ3p: "Dreams Never Die",
                                                    style: {height: "100%", width: "100%"},
                                                    variant: "jnu1ODcju",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-1vk8qu5",
                                    "data-framer-name": "Info",
                                    name: "Info",
                                    children: e("div", {
                                        className: "framer-108ye",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: e(P, {
                                            __fromCanvasComponent: !0,
                                            children: e(h, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-yy04ro",
                                                    "data-styles-preset": "L542E8JoR",
                                                    children: "A Web3 music company reinventing artist management "
                                                })
                                            }),
                                            className: "framer-1c1pxqq",
                                            "data-framer-name": "Desc",
                                            fonts: ["Inter"],
                                            name: "Desc",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            }), c(qe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 90
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1hix2zt",
                                "data-framer-name": "Project",
                                name: "Project",
                                style: {transformPerspective: 1200},
                                children: [e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-1hqfrqc-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {variant: "L2M53tpWx"},
                                                    qEJDbn9wX: {variant: "RjQz2lrY3"}
                                                },
                                                children: e(Ze, {
                                                    DUuVeRWCj: "https://framerusercontent.com/assets/3DJLwIVXWem5unFe6M2TRWLFs.mp4",
                                                    height: "100%",
                                                    id: "t0pWUXzaC",
                                                    layoutId: "t0pWUXzaC",
                                                    NW0WsLCc6: "Upload",
                                                    SlsaBTJ3p: "TSZ",
                                                    style: {height: "100%", width: "100%"},
                                                    variant: "jnu1ODcju",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-111kk86",
                                    "data-framer-name": "Info",
                                    name: "Info",
                                    children: e("div", {
                                        className: "framer-17cu6kx",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: e(P, {
                                            __fromCanvasComponent: !0,
                                            children: e(h, {
                                                children: e("p", {
                                                    className: "framer-styles-preset-yy04ro",
                                                    "data-styles-preset": "L542E8JoR",
                                                    children: "Telling the visual story of a revolutionary media company"
                                                })
                                            }),
                                            className: "framer-1rbgaf5",
                                            "data-framer-name": "Desc",
                                            fonts: ["Inter"],
                                            name: "Desc",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), c("div", {
                        className: "framer-fds42v",
                        "data-border": !0,
                        "data-framer-name": "MORE WORK",
                        name: "MORE WORK",
                        children: [e(l, {
                            breakpoint: t,
                            overrides: {ivZn5n4jd: {width: "calc(100vw - 20px)"}, qEJDbn9wX: {width: "calc(100vw - 40px)"}},
                            children: e(g, {
                                width: "calc(100vw - 60px)",
                                children: e(v, {
                                    className: "framer-jmidz4-container",
                                    children: e(je, {
                                        FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                        H7OM7RY2F: "SOME MORE WORK THAT WE LOVE",
                                        height: "100%",
                                        id: "AeSc29Xmc",
                                        ige6Om3tR: "\u2B24",
                                        layoutId: "AeSc29Xmc",
                                        style: {width: "100%"},
                                        variant: "AjLrTmY9B",
                                        width: "100%"
                                    })
                                })
                            })
                        }), e("div", {
                            className: "framer-e11v2v", "data-framer-name": "04", name: "04", children: e("div", {
                                className: "framer-1byiler", children: e(g, {
                                    children: e(v, {
                                        className: "framer-jrt9h-container", children: e(l, {
                                            breakpoint: t,
                                            overrides: {
                                                ivZn5n4jd: {
                                                    arrowOptions: {
                                                        arrowFill: "rgba(56, 50, 50, 0.51)",
                                                        arrowGap: 10,
                                                        arrowPadding: 8,
                                                        arrowPaddingBottom: 0,
                                                        arrowPaddingLeft: 0,
                                                        arrowPaddingRight: 0,
                                                        arrowPaddingTop: 0,
                                                        arrowPosition: "auto",
                                                        arrowRadius: 8,
                                                        arrowShouldFadeIn: !1,
                                                        arrowShouldSpace: !0,
                                                        arrowSize: 30,
                                                        showMouseControls: !0
                                                    }
                                                }, oPLt7_M7Y: {intervalControl: 2.5}, qEJDbn9wX: {borderRadius: 17}
                                            },
                                            children: e(O, {
                                                alignment: "center",
                                                arrowOptions: {
                                                    arrowFill: "rgba(56, 50, 50, 0.51)",
                                                    arrowGap: 10,
                                                    arrowPadding: 20,
                                                    arrowPaddingBottom: 0,
                                                    arrowPaddingLeft: 0,
                                                    arrowPaddingRight: 0,
                                                    arrowPaddingTop: 0,
                                                    arrowPosition: "auto",
                                                    arrowRadius: 8,
                                                    arrowShouldFadeIn: !1,
                                                    arrowShouldSpace: !0,
                                                    arrowSize: 40,
                                                    showMouseControls: !0
                                                },
                                                autoPlayControl: !0,
                                                borderRadius: 30,
                                                direction: "left",
                                                dragControl: !0,
                                                effectsOptions: {
                                                    effectsHover: !0,
                                                    effectsOpacity: 0,
                                                    effectsPerspective: 1200,
                                                    effectsRotate: 0,
                                                    effectsScale: 1
                                                },
                                                fadeOptions: {
                                                    fadeAlpha: 0,
                                                    fadeContent: !1,
                                                    fadeInset: 0,
                                                    fadeWidth: 2,
                                                    overflow: !1
                                                },
                                                gap: 10,
                                                height: "100%",
                                                id: "Ri83g3Btx",
                                                intervalControl: 2,
                                                itemAmount: 1,
                                                layoutId: "Ri83g3Btx",
                                                padding: 0,
                                                paddingBottom: 0,
                                                paddingLeft: 0,
                                                paddingPerSide: !1,
                                                paddingRight: 0,
                                                paddingTop: 0,
                                                progressOptions: {
                                                    dotsActiveOpacity: .9,
                                                    dotsBackground: "rgba(0, 0, 0, 0)",
                                                    dotsBlur: 50,
                                                    dotsFill: "rgb(255, 255, 255)",
                                                    dotsGap: 8,
                                                    dotsInset: 8,
                                                    dotSize: 6,
                                                    dotsOpacity: .5,
                                                    dotsPadding: 10,
                                                    dotsRadius: 0,
                                                    showProgressDots: !0
                                                },
                                                slots: [e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 883.5,
                                                        intrinsicWidth: 886.5,
                                                        pixelHeight: 1767,
                                                        pixelWidth: 1773,
                                                        sizes: "887.0017px",
                                                        src: "https://framerusercontent.com/images/DI83a8W9Vy4cIjVTZIFyFSnUHQI.jpg?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/DI83a8W9Vy4cIjVTZIFyFSnUHQI.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/DI83a8W9Vy4cIjVTZIFyFSnUHQI.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/DI83a8W9Vy4cIjVTZIFyFSnUHQI.jpg 1773w"
                                                    },
                                                    className: "framer-1i64a2n",
                                                    "data-framer-name": "HBR_Marvel_Update02",
                                                    name: "HBR_Marvel_Update02"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 511.5,
                                                        intrinsicWidth: 887.5,
                                                        pixelHeight: 1023,
                                                        pixelWidth: 1775,
                                                        sizes: "888px",
                                                        src: "https://framerusercontent.com/images/oJYuZ8IQGBoZl9wA65ZW5hnP8s.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/oJYuZ8IQGBoZl9wA65ZW5hnP8s.png?scale-down-to=512 512w,https://framerusercontent.com/images/oJYuZ8IQGBoZl9wA65ZW5hnP8s.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/oJYuZ8IQGBoZl9wA65ZW5hnP8s.png 1775w"
                                                    },
                                                    className: "framer-1xz9ydr",
                                                    "data-framer-name": "Metropolis_Timeline",
                                                    name: "Metropolis_Timeline"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 704.5,
                                                        intrinsicWidth: 1024,
                                                        pixelHeight: 1409,
                                                        pixelWidth: 2048,
                                                        sizes: "1024.7268px",
                                                        src: "https://framerusercontent.com/images/s2sVCl1q0tZAShQ4bYOHVp9XX20.jpg?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/s2sVCl1q0tZAShQ4bYOHVp9XX20.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/s2sVCl1q0tZAShQ4bYOHVp9XX20.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/s2sVCl1q0tZAShQ4bYOHVp9XX20.jpg 2048w"
                                                    },
                                                    className: "framer-1suqza8",
                                                    "data-framer-name": "Howler_2",
                                                    name: "Howler_2"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 523.5,
                                                        intrinsicWidth: 680,
                                                        pixelHeight: 1047,
                                                        pixelWidth: 1360,
                                                        sizes: "680px",
                                                        src: "https://framerusercontent.com/images/nYZViNd65YtRcE3Io1QcbSmjxw.gif?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/nYZViNd65YtRcE3Io1QcbSmjxw.gif?scale-down-to=512 512w,https://framerusercontent.com/images/nYZViNd65YtRcE3Io1QcbSmjxw.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/nYZViNd65YtRcE3Io1QcbSmjxw.gif 1360w"
                                                    },
                                                    className: "framer-1mtmf34",
                                                    "data-framer-name": "POSTNUM2",
                                                    name: "POSTNUM2"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 785,
                                                        intrinsicWidth: 1024,
                                                        pixelHeight: 1570,
                                                        pixelWidth: 2048,
                                                        sizes: "1024px",
                                                        src: "https://framerusercontent.com/images/pxaGFdiooUqV6C9aUAI7risDGi4.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/pxaGFdiooUqV6C9aUAI7risDGi4.png?scale-down-to=512 512w,https://framerusercontent.com/images/pxaGFdiooUqV6C9aUAI7risDGi4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/pxaGFdiooUqV6C9aUAI7risDGi4.png 2048w"
                                                    },
                                                    className: "framer-g9cy2v",
                                                    "data-framer-name": "NikeFuel_Week4",
                                                    name: "NikeFuel_Week4"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 286,
                                                        intrinsicWidth: 453,
                                                        pixelHeight: 572,
                                                        pixelWidth: 906,
                                                        sizes: "453px",
                                                        src: "https://framerusercontent.com/images/vbv3h8O5ynFTIUCSRGftFay9GQ.gif?scale-down-to=512",
                                                        srcSet: "https://framerusercontent.com/images/vbv3h8O5ynFTIUCSRGftFay9GQ.gif?scale-down-to=512 512w,https://framerusercontent.com/images/vbv3h8O5ynFTIUCSRGftFay9GQ.gif 906w"
                                                    },
                                                    className: "framer-11hcg7u",
                                                    "data-framer-name": "Aetna_HealthEcosystem_Animation",
                                                    name: "Aetna_HealthEcosystem_Animation"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 785,
                                                        intrinsicWidth: 1024,
                                                        pixelHeight: 1570,
                                                        pixelWidth: 2048,
                                                        sizes: "1024px",
                                                        src: "https://framerusercontent.com/images/mDzG7UGLQVhKxxT004KO0oP0sQ.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/mDzG7UGLQVhKxxT004KO0oP0sQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/mDzG7UGLQVhKxxT004KO0oP0sQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/mDzG7UGLQVhKxxT004KO0oP0sQ.png 2048w"
                                                    },
                                                    className: "framer-6akom5",
                                                    "data-framer-name": "NikeFuel_Week7",
                                                    name: "NikeFuel_Week7"
                                                }), e(g, {
                                                    children: e(v, {
                                                        className: "framer-1k789za-container",
                                                        children: e(Se, {
                                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                                            borderRadius: 0,
                                                            bottomLeftRadius: 0,
                                                            bottomRightRadius: 0,
                                                            controls: !1,
                                                            height: "100%",
                                                            id: "m8KZ9Q0wy",
                                                            isMixedBorderRadius: !1,
                                                            layoutId: "m8KZ9Q0wy",
                                                            loop: !0,
                                                            muted: !0,
                                                            objectFit: "cover",
                                                            playing: !0,
                                                            posterEnabled: !1,
                                                            srcFile: "https://framerusercontent.com/assets/pVwibjP3n1kYXbXfRrweBzeAGw.mp4",
                                                            srcType: "Upload",
                                                            srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                                            startTime: 0,
                                                            style: {height: "100%", width: "100%"},
                                                            topLeftRadius: 0,
                                                            topRightRadius: 0,
                                                            volume: 25,
                                                            width: "100%"
                                                        })
                                                    })
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 620,
                                                        intrinsicWidth: 863.5,
                                                        pixelHeight: 1240,
                                                        pixelWidth: 1727,
                                                        sizes: "864px",
                                                        src: "https://framerusercontent.com/images/p3Zg0XDcYdFDywkXoZWq3Wlt8.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/p3Zg0XDcYdFDywkXoZWq3Wlt8.png?scale-down-to=512 512w,https://framerusercontent.com/images/p3Zg0XDcYdFDywkXoZWq3Wlt8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/p3Zg0XDcYdFDywkXoZWq3Wlt8.png 1727w"
                                                    },
                                                    className: "framer-1o46ym1",
                                                    "data-framer-name": "Visual_02",
                                                    name: "Visual_02"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 749,
                                                        intrinsicWidth: 1646,
                                                        pixelHeight: 1498,
                                                        pixelWidth: 3292,
                                                        sizes: "1646px",
                                                        src: "https://framerusercontent.com/images/oIoGyTffpMKG59imu4Uo34uhXps.png?scale-down-to=2048",
                                                        srcSet: "https://framerusercontent.com/images/oIoGyTffpMKG59imu4Uo34uhXps.png?scale-down-to=512 512w,https://framerusercontent.com/images/oIoGyTffpMKG59imu4Uo34uhXps.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/oIoGyTffpMKG59imu4Uo34uhXps.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/oIoGyTffpMKG59imu4Uo34uhXps.png 3292w"
                                                    },
                                                    className: "framer-c18txx",
                                                    "data-framer-name": "Google_Apollo_Icons",
                                                    name: "Google_Apollo_Icons"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 447,
                                                        intrinsicWidth: 1282,
                                                        pixelHeight: 894,
                                                        pixelWidth: 2564,
                                                        sizes: "1640.5011px",
                                                        src: "https://framerusercontent.com/images/9QpccXc6m8Oa2z7at1baXwhDl8.png?scale-down-to=2048",
                                                        srcSet: "https://framerusercontent.com/images/9QpccXc6m8Oa2z7at1baXwhDl8.png?scale-down-to=512 512w,https://framerusercontent.com/images/9QpccXc6m8Oa2z7at1baXwhDl8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9QpccXc6m8Oa2z7at1baXwhDl8.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9QpccXc6m8Oa2z7at1baXwhDl8.png 2564w"
                                                    },
                                                    className: "framer-adtcg8",
                                                    "data-framer-name": "Ta9_wO_4",
                                                    name: "Ta9_wO_4"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 547.5,
                                                        intrinsicWidth: 1e3,
                                                        pixelHeight: 1095,
                                                        pixelWidth: 2e3,
                                                        sizes: "1150.6849px",
                                                        src: "https://framerusercontent.com/images/1HtlraFW5vq1rhJf3Am7QFbfZBA.jpg?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/1HtlraFW5vq1rhJf3Am7QFbfZBA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/1HtlraFW5vq1rhJf3Am7QFbfZBA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/1HtlraFW5vq1rhJf3Am7QFbfZBA.jpg 2000w"
                                                    },
                                                    className: "framer-63q9gr",
                                                    "data-framer-name": "GOODMag_CashforClunkers_Aug2009",
                                                    name: "GOODMag_CashforClunkers_Aug2009"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 604.5,
                                                        intrinsicWidth: 951,
                                                        pixelHeight: 1209,
                                                        pixelWidth: 1902,
                                                        sizes: "951.7866px",
                                                        src: "https://framerusercontent.com/images/HMG9NKptNHJv5VDW35o27D7YUCo.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/HMG9NKptNHJv5VDW35o27D7YUCo.png?scale-down-to=512 512w,https://framerusercontent.com/images/HMG9NKptNHJv5VDW35o27D7YUCo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HMG9NKptNHJv5VDW35o27D7YUCo.png 1902w"
                                                    },
                                                    className: "framer-1mkpu9",
                                                    "data-framer-name": "image_2_",
                                                    name: "image_2_"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 553,
                                                        intrinsicWidth: 903.5,
                                                        pixelHeight: 1106,
                                                        pixelWidth: 1807,
                                                        sizes: "905.1338px",
                                                        src: "https://framerusercontent.com/images/uaiTRUGAsE2CilDgLc0Sgf4CSw.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/uaiTRUGAsE2CilDgLc0Sgf4CSw.png?scale-down-to=512 512w,https://framerusercontent.com/images/uaiTRUGAsE2CilDgLc0Sgf4CSw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/uaiTRUGAsE2CilDgLc0Sgf4CSw.png 1807w"
                                                    },
                                                    className: "framer-1t1y1jt",
                                                    "data-framer-name": "Map_darker",
                                                    name: "Map_darker"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 1375,
                                                        intrinsicWidth: 2967,
                                                        pixelHeight: 2750,
                                                        pixelWidth: 5934,
                                                        sizes: "1760.7796px",
                                                        src: "https://framerusercontent.com/images/Y0bCPo4nLQ9CC6vseoIG6jZ5FWs.png?scale-down-to=4096",
                                                        srcSet: "https://framerusercontent.com/images/Y0bCPo4nLQ9CC6vseoIG6jZ5FWs.png?scale-down-to=512 512w,https://framerusercontent.com/images/Y0bCPo4nLQ9CC6vseoIG6jZ5FWs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Y0bCPo4nLQ9CC6vseoIG6jZ5FWs.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Y0bCPo4nLQ9CC6vseoIG6jZ5FWs.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/Y0bCPo4nLQ9CC6vseoIG6jZ5FWs.png 5934w"
                                                    },
                                                    className: "framer-14ewrkd",
                                                    "data-framer-name": "Playground_Header_ExpandedLogo",
                                                    name: "Playground_Header_ExpandedLogo"
                                                }), e(W, {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 1819,
                                                        intrinsicWidth: 1369,
                                                        pixelHeight: 3638,
                                                        pixelWidth: 2738,
                                                        sizes: "1369px",
                                                        src: "https://framerusercontent.com/images/xVz7bApJ3ZXuFxQfvyInkbYgmvQ.png?scale-down-to=2048",
                                                        srcSet: "https://framerusercontent.com/images/xVz7bApJ3ZXuFxQfvyInkbYgmvQ.png?scale-down-to=1024 770w,https://framerusercontent.com/images/xVz7bApJ3ZXuFxQfvyInkbYgmvQ.png?scale-down-to=2048 1541w,https://framerusercontent.com/images/xVz7bApJ3ZXuFxQfvyInkbYgmvQ.png 2738w"
                                                    },
                                                    className: "framer-3rs4t6",
                                                    "data-framer-name": "Intercom",
                                                    name: "Intercom"
                                                })],
                                                startFrom: 0,
                                                style: {height: "100%", width: "100%"},
                                                transitionControl: {damping: 40, stiffness: 200, type: "spring"},
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    }), c("div", {
                        className: "framer-164y534",
                        "data-border": !0,
                        "data-framer-name": "SERVICES",
                        name: "SERVICES",
                        children: [e("div", {
                            className: "framer-1a9aau8",
                            "data-framer-name": "HEAD",
                            name: "HEAD",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {ivZn5n4jd: {width: "calc(100vw - 20px)"}},
                                children: e(g, {
                                    children: e(v, {
                                        className: "framer-ujm4ai-container",
                                        children: e(l, {
                                            breakpoint: t,
                                            overrides: {ivZn5n4jd: {style: {width: "100%"}}},
                                            children: e(je, {
                                                FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                                H7OM7RY2F: "Services",
                                                height: "100%",
                                                id: "EVG1ou74z",
                                                ige6Om3tR: "\u2B24",
                                                layoutId: "EVG1ou74z",
                                                variant: "AjLrTmY9B",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })
                        }), c("div", {
                            className: "framer-1bqnazj",
                            "data-framer-name": "List",
                            name: "List",
                            children: [e("div", {
                                className: "framer-1yazcc2",
                                "data-framer-name": "service-1",
                                name: "service-1",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-pprf3j-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Data Visualization",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/mU1KIR3f1ePdMZdxn0CEE8yWJg.png",
                                                        srcSet: "https://framerusercontent.com/images/mU1KIR3f1ePdMZdxn0CEE8yWJg.png 700w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "iw8qRNti5",
                                                    layoutId: "iw8qRNti5",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "01/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-kag27y",
                                "data-framer-name": "service-2",
                                name: "service-2",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-wet9l8-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Brand Identity",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/x9shw6BvjLKWZGgl4FfWPd9k.png",
                                                        srcSet: "https://framerusercontent.com/images/x9shw6BvjLKWZGgl4FfWPd9k.png?scale-down-to=512 512w,https://framerusercontent.com/images/x9shw6BvjLKWZGgl4FfWPd9k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/x9shw6BvjLKWZGgl4FfWPd9k.png 1060w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "TT2XDRnVM",
                                                    layoutId: "TT2XDRnVM",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "02/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-1h0pyzm",
                                "data-framer-name": "service-3",
                                name: "service-3",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-19g578p-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Reports",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/K6WxuYkE1kZ46E6u3fwMkyll8k.png",
                                                        srcSet: "https://framerusercontent.com/images/K6WxuYkE1kZ46E6u3fwMkyll8k.png?scale-down-to=512 512w,https://framerusercontent.com/images/K6WxuYkE1kZ46E6u3fwMkyll8k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/K6WxuYkE1kZ46E6u3fwMkyll8k.png 1281w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "TPIek_Crh",
                                                    layoutId: "TPIek_Crh",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "03/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-ulul0d",
                                "data-framer-name": "service-4",
                                name: "service-4",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-1d0xwea-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Deck Design",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/5Cs05meFL4tix3XaBRezHUKaM.png",
                                                        srcSet: "https://framerusercontent.com/images/5Cs05meFL4tix3XaBRezHUKaM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5Cs05meFL4tix3XaBRezHUKaM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5Cs05meFL4tix3XaBRezHUKaM.png 1436w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "idtiNfVrq",
                                                    layoutId: "idtiNfVrq",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "04/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-idkd7l",
                                "data-framer-name": "service-5",
                                name: "service-5",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-fc2nt8-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        ajqyuruEV: "Brand Systems",
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Brand Design Extension",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/GNU2O61fT4vUhmjcJ5G5iyiKiA.png",
                                                        srcSet: "https://framerusercontent.com/images/GNU2O61fT4vUhmjcJ5G5iyiKiA.png?scale-down-to=512 512w,https://framerusercontent.com/images/GNU2O61fT4vUhmjcJ5G5iyiKiA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/GNU2O61fT4vUhmjcJ5G5iyiKiA.png 1210w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "dEV0YMfXL",
                                                    layoutId: "dEV0YMfXL",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "05/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-d42wqa",
                                "data-framer-name": "service-6",
                                name: "service-6",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-8wr03e-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Web Design",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/wXG4bgMePprvfwOj0nVAY6gk0Eo.png",
                                                        srcSet: "https://framerusercontent.com/images/wXG4bgMePprvfwOj0nVAY6gk0Eo.png 700w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "FsTZuRfaR",
                                                    layoutId: "FsTZuRfaR",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "06/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-17ik98o",
                                "data-framer-name": "service-7",
                                name: "service-7",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-1jbuoxf-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Packaging Design",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/qZEqybrqd05xqt1msKF1fZ5ak.png",
                                                        srcSet: "https://framerusercontent.com/images/qZEqybrqd05xqt1msKF1fZ5ak.png?scale-down-to=1024 945w,https://framerusercontent.com/images/qZEqybrqd05xqt1msKF1fZ5ak.png 1246w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "rhWasZgEO",
                                                    layoutId: "rhWasZgEO",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "07/"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), e("div", {
                                className: "framer-11qmsr7",
                                "data-framer-name": "service-8",
                                name: "service-8",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        ivZn5n4jd: {width: "calc(100vw - 20px)"},
                                        qEJDbn9wX: {width: "calc(100vw - 40px)"}
                                    },
                                    children: e(g, {
                                        width: "calc(100vw - 60px)",
                                        children: e(v, {
                                            className: "framer-se75j4-container",
                                            children: e(l, {
                                                breakpoint: t,
                                                overrides: {
                                                    ivZn5n4jd: {
                                                        style: {height: "100%", width: "100%"},
                                                        variant: "XfaM6hYiG"
                                                    }, qEJDbn9wX: {variant: "U9Yokxh7n"}
                                                },
                                                children: e(ye, {
                                                    ajqyuruEV: "Campaigns",
                                                    aRI3sgh8n: 0,
                                                    cL9cHogzZ: ne({
                                                        src: "https://framerusercontent.com/images/e8YRMHheFWh5XoKiNm3V0PXxJk.png",
                                                        srcSet: "https://framerusercontent.com/images/e8YRMHheFWh5XoKiNm3V0PXxJk.png?scale-down-to=512 512w,https://framerusercontent.com/images/e8YRMHheFWh5XoKiNm3V0PXxJk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/e8YRMHheFWh5XoKiNm3V0PXxJk.png 1080w"
                                                    }, ""),
                                                    height: "100%",
                                                    id: "e6BnOfEoj",
                                                    layoutId: "e6BnOfEoj",
                                                    style: {width: "100%"},
                                                    variant: "KAGg1Gaj7",
                                                    width: "100%",
                                                    zhpUNCPPA: "08/"
                                                })
                                            })
                                        })
                                    })
                                })
                            })]
                        }), c("div", {
                            className: "framer-bhg7lo",
                            "data-framer-name": "Service-Copy",
                            name: "Service-Copy",
                            children: [x() && e("div", {
                                className: "framer-57d25c hidden-7gi421",
                                "data-framer-name": "Space",
                                name: "Space"
                            }), e("div", {
                                className: "framer-mvfaa9",
                                "data-framer-name": "Text",
                                name: "Text",
                                children: e(P, {
                                    __fromCanvasComponent: !0,
                                    children: e(h, {
                                        children: e("p", {
                                            className: "framer-styles-preset-yy04ro",
                                            "data-styles-preset": "L542E8JoR",
                                            children: "We specialize in telling the most brilliant stories for innovative brands. We transform data, but also extend brand design guidelines into new spaces."
                                        })
                                    }),
                                    className: "framer-112gjop",
                                    fonts: ["Inter"],
                                    verticalAlignment: "center",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    }), c("div", {
                        className: "framer-uvv61y",
                        "data-border": !0,
                        "data-framer-name": "CLIENTS",
                        name: "CLIENTS",
                        children: [e("div", {
                            className: "framer-cyt9n9",
                            "data-framer-name": "HEAD",
                            name: "HEAD",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {ivZn5n4jd: {width: "max(100vw - 20px, 1px)"}},
                                children: e(g, {
                                    children: e(v, {
                                        className: "framer-1yvxugs-container",
                                        children: e(l, {
                                            breakpoint: t,
                                            overrides: {ivZn5n4jd: {style: {width: "100%"}}},
                                            children: e(je, {
                                                FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                                H7OM7RY2F: "Clients",
                                                height: "100%",
                                                id: "Uas2Cn2gg",
                                                ige6Om3tR: "\u2B24",
                                                layoutId: "Uas2Cn2gg",
                                                variant: "AjLrTmY9B",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })
                        }), e("div", {
                            className: "framer-1e91l49", "data-framer-name": "Scroller", name: "Scroller", children: e(g, {
                                children: e(v, {
                                    className: "framer-17jm2fe-container",
                                    "data-framer-name": "CLIENTS",
                                    name: "CLIENTS",
                                    children: e(l, {
                                        breakpoint: t,
                                        overrides: {ivZn5n4jd: {gap: 56}, qEJDbn9wX: {gap: 67}},
                                        children: e(Nr, {
                                            alignment: "center",
                                            direction: "left",
                                            fadeOptions: {
                                                fadeAlpha: 0,
                                                fadeContent: !0,
                                                fadeInset: 0,
                                                fadeWidth: 20,
                                                overflow: !1
                                            },
                                            gap: 83,
                                            height: "100%",
                                            hoverFactor: 1,
                                            id: "wFpCim9MS",
                                            layoutId: "wFpCim9MS",
                                            name: "CLIENTS",
                                            padding: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 10,
                                            paddingPerSide: !1,
                                            paddingRight: 10,
                                            paddingTop: 10,
                                            sizingOptions: {heightType: !0, widthType: !0},
                                            slots: [e(G, {
                                                className: "framer-yucsl4",
                                                "data-framer-name": "Microsoft",
                                                layout: "position",
                                                name: "Microsoft",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 161 46"><path d="M 160.96 21.323 L 160.96 18.456 L 157.445 18.456 L 157.445 13.998 L 157.327 14.035 L 154.025 15.058 L 153.96 15.078 L 153.96 18.456 L 148.749 18.456 L 148.749 16.574 C 148.749 15.698 148.942 15.027 149.323 14.58 C 149.702 14.138 150.243 13.914 150.934 13.914 C 151.43 13.914 151.944 14.032 152.461 14.266 L 152.591 14.324 L 152.591 11.305 L 152.53 11.282 C 152.048 11.106 151.391 11.018 150.578 11.018 C 149.552 11.018 148.621 11.244 147.808 11.692 C 146.995 12.14 146.356 12.781 145.908 13.595 C 145.461 14.408 145.235 15.347 145.235 16.387 L 145.235 18.456 L 142.787 18.456 L 142.787 21.323 L 145.235 21.323 L 145.235 33.403 L 148.749 33.403 L 148.749 21.323 L 153.96 21.323 L 153.96 29 C 153.96 32.161 155.432 33.764 158.336 33.764 C 158.813 33.764 159.315 33.707 159.828 33.596 C 160.35 33.482 160.705 33.369 160.914 33.247 L 160.961 33.219 L 160.961 30.325 L 160.818 30.421 C 160.627 30.55 160.389 30.655 160.111 30.733 C 159.831 30.813 159.598 30.853 159.417 30.853 C 158.737 30.853 158.234 30.667 157.921 30.301 C 157.606 29.931 157.445 29.285 157.445 28.38 L 157.445 21.323 Z M 134.94 30.853 C 133.665 30.853 132.659 30.425 131.951 29.581 C 131.238 28.733 130.877 27.524 130.877 25.988 C 130.877 24.403 131.238 23.162 131.951 22.299 C 132.66 21.441 133.656 21.006 134.912 21.006 C 136.13 21.006 137.1 21.422 137.795 22.242 C 138.493 23.067 138.847 24.297 138.847 25.901 C 138.847 27.524 138.514 28.771 137.857 29.605 C 137.204 30.433 136.223 30.853 134.94 30.853 M 135.096 18.095 C 132.663 18.095 130.731 18.818 129.353 20.242 C 127.976 21.667 127.277 23.638 127.277 26.102 C 127.277 28.443 127.959 30.325 129.303 31.696 C 130.648 33.068 132.477 33.763 134.741 33.763 C 137.099 33.763 138.993 33.031 140.371 31.587 C 141.748 30.144 142.446 28.191 142.446 25.785 C 142.446 23.408 141.791 21.512 140.499 20.149 C 139.207 18.786 137.389 18.095 135.096 18.095 M 121.612 18.095 C 119.957 18.095 118.588 18.524 117.542 19.37 C 116.49 20.221 115.956 21.336 115.956 22.686 C 115.956 23.388 116.071 24.011 116.298 24.54 C 116.526 25.07 116.879 25.537 117.348 25.929 C 117.813 26.318 118.532 26.725 119.484 27.14 C 120.284 27.473 120.881 27.756 121.26 27.978 C 121.631 28.196 121.894 28.415 122.042 28.628 C 122.186 28.837 122.26 29.123 122.26 29.476 C 122.26 30.48 121.517 30.969 119.99 30.969 C 119.423 30.969 118.777 30.849 118.069 30.612 C 117.366 30.38 116.702 30.039 116.101 29.602 L 115.955 29.496 L 115.955 32.923 L 116.009 32.948 C 116.506 33.181 117.133 33.377 117.872 33.531 C 118.609 33.685 119.279 33.764 119.861 33.764 C 121.657 33.764 123.104 33.333 124.159 32.482 C 125.221 31.626 125.76 30.484 125.76 29.087 C 125.76 28.08 125.47 27.216 124.899 26.519 C 124.331 25.828 123.347 25.193 121.974 24.632 C 120.88 24.188 120.179 23.818 119.89 23.535 C 119.611 23.261 119.469 22.874 119.469 22.383 C 119.469 21.949 119.644 21.6 120.003 21.318 C 120.364 21.035 120.867 20.891 121.498 20.891 C 122.084 20.891 122.683 20.985 123.278 21.168 C 123.874 21.352 124.396 21.598 124.833 21.898 L 124.976 21.998 L 124.976 18.747 L 124.921 18.723 C 124.519 18.548 123.988 18.398 123.343 18.277 C 122.701 18.156 122.118 18.095 121.612 18.095 M 106.795 30.853 C 105.52 30.853 104.515 30.425 103.806 29.581 C 103.093 28.733 102.732 27.524 102.732 25.988 C 102.732 24.403 103.093 23.162 103.807 22.299 C 104.515 21.441 105.511 21.006 106.767 21.006 C 107.985 21.006 108.955 21.422 109.65 22.242 C 110.348 23.067 110.703 24.297 110.703 25.901 C 110.703 27.524 110.369 28.771 109.712 29.605 C 109.06 30.433 108.079 30.853 106.795 30.853 M 106.952 18.095 C 104.518 18.095 102.585 18.818 101.208 20.242 C 99.831 21.667 99.133 23.638 99.133 26.102 C 99.133 28.444 99.815 30.325 101.159 31.696 C 102.503 33.068 104.333 33.763 106.596 33.763 C 108.954 33.763 110.849 33.031 112.226 31.587 C 113.603 30.144 114.301 28.191 114.301 25.785 C 114.301 23.408 113.647 21.512 112.354 20.149 C 111.062 18.786 109.244 18.095 106.952 18.095 M 93.799 21.044 L 93.799 18.456 L 90.328 18.456 L 90.328 33.403 L 93.799 33.403 L 93.799 25.757 C 93.799 24.457 94.09 23.388 94.664 22.582 C 95.231 21.785 95.986 21.381 96.909 21.381 C 97.221 21.381 97.572 21.433 97.952 21.536 C 98.329 21.639 98.601 21.75 98.762 21.868 L 98.908 21.975 L 98.908 18.43 L 98.852 18.406 C 98.528 18.266 98.071 18.196 97.492 18.196 C 96.62 18.196 95.84 18.48 95.171 19.039 C 94.584 19.53 94.16 20.204 93.836 21.044 Z M 84.112 18.095 C 82.519 18.095 81.099 18.441 79.891 19.123 C 78.68 19.807 77.744 20.782 77.107 22.023 C 76.473 23.261 76.151 24.706 76.151 26.319 C 76.151 27.731 76.463 29.027 77.08 30.169 C 77.697 31.314 78.571 32.209 79.677 32.829 C 80.782 33.449 82.059 33.764 83.472 33.764 C 85.122 33.764 86.53 33.43 87.659 32.771 L 87.705 32.744 L 87.705 29.523 L 87.559 29.631 C 87.047 30.008 86.476 30.31 85.861 30.527 C 85.247 30.744 84.688 30.853 84.198 30.853 C 82.836 30.853 81.742 30.422 80.949 29.57 C 80.153 28.718 79.75 27.522 79.75 26.016 C 79.75 24.5 80.171 23.273 80.999 22.367 C 81.826 21.464 82.921 21.006 84.255 21.006 C 85.396 21.006 86.507 21.398 87.559 22.171 L 87.705 22.278 L 87.705 18.883 L 87.658 18.857 C 87.262 18.632 86.722 18.447 86.052 18.306 C 85.385 18.166 84.732 18.095 84.112 18.095 M 73.76 18.456 L 70.289 18.456 L 70.289 33.403 L 73.76 33.403 Z M 72.06 12.088 C 71.489 12.088 70.991 12.285 70.581 12.675 C 70.17 13.067 69.962 13.56 69.962 14.142 C 69.962 14.714 70.168 15.198 70.575 15.579 C 70.98 15.959 71.479 16.152 72.06 16.152 C 72.641 16.152 73.143 15.959 73.552 15.58 C 73.964 15.198 74.173 14.714 74.173 14.142 C 74.173 13.58 73.97 13.092 73.569 12.691 C 73.169 12.291 72.661 12.088 72.06 12.088 M 63.4 17.353 L 63.4 33.403 L 66.942 33.403 L 66.942 12.546 L 62.039 12.546 L 55.808 28.038 L 49.76 12.546 L 44.658 12.546 L 44.658 33.403 L 47.987 33.403 L 47.987 17.351 L 48.101 17.351 L 54.487 33.403 L 56.999 33.403 L 63.286 17.353 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 16.329 22.116 L 0 22.116 L 0 5.576 L 16.329 5.576 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 34.357 22.116 L 18.029 22.116 L 18.029 5.576 L 34.357 5.576 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 16.328 40.386 L 0 40.386 L 0 23.845 L 16.328 23.845 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 34.357 40.386 L 18.029 40.386 L 18.029 23.845 L 34.357 23.845 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 4032197043,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-2zqhib",
                                                "data-framer-name": "Dashlane",
                                                layout: "position",
                                                name: "Dashlane",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 147 40"><path d="M 9.434 25.701 L 9.488 25.719 L 13.574 27.251 C 13.875 27.36 14.069 27.564 14.091 27.789 L 14.093 27.831 L 14.093 39.312 C 14.093 39.799 13.337 40.113 12.687 39.91 L 12.633 39.892 L 8.54 38.359 C 8.239 38.25 8.045 38.047 8.024 37.821 L 8.022 37.779 L 8.022 26.298 C 8.022 25.812 8.783 25.498 9.434 25.701 Z M 1.854 0.742 L 1.907 0.76 L 5.999 2.293 C 6.3 2.408 6.495 2.606 6.517 2.831 L 6.519 2.873 L 6.519 38.882 C 6.519 39.368 5.757 39.682 5.107 39.48 L 5.053 39.462 L 0.96 37.928 C 0.659 37.82 0.465 37.616 0.443 37.391 L 0.441 37.348 L 0.441 1.34 C 0.441 0.854 1.203 0.539 1.854 0.742 Z M 17.014 23.773 L 17.068 23.791 L 21.16 25.324 C 21.462 25.433 21.655 25.636 21.677 25.861 L 21.679 25.904 L 21.679 36.484 C 21.679 36.97 20.917 37.284 20.267 37.081 L 20.213 37.063 L 16.12 35.53 C 15.82 35.42 15.625 35.216 15.603 34.991 L 15.601 34.949 L 15.601 24.371 C 15.601 23.885 16.363 23.57 17.014 23.773 Z M 72.921 14.131 C 74.09 14.131 75.12 14.347 76.011 14.778 C 76.858 15.172 77.578 15.804 78.085 16.601 C 78.543 17.348 78.797 18.207 78.818 19.088 C 78.821 19.157 78.797 19.224 78.75 19.274 C 78.703 19.325 78.638 19.353 78.57 19.353 L 75.331 19.353 C 75.2 19.353 75.091 19.249 75.084 19.115 C 75.048 18.462 74.858 17.953 74.514 17.589 C 74.13 17.181 73.577 16.977 72.855 16.978 C 72.255 16.978 71.784 17.122 71.437 17.412 C 71.091 17.703 70.899 18.143 70.919 18.601 C 70.914 19.045 71.099 19.47 71.425 19.765 C 71.763 20.087 72.332 20.412 73.131 20.741 L 75.806 21.823 C 76.911 22.263 77.73 22.866 78.261 23.634 C 78.791 24.402 79.056 25.343 79.055 26.457 C 79.075 27.406 78.818 28.339 78.318 29.138 C 77.808 29.922 77.088 30.539 76.244 30.914 C 75.352 31.329 74.315 31.537 73.131 31.538 C 71.149 31.538 69.597 31.024 68.474 29.997 C 67.407 29.02 66.845 27.668 66.79 25.943 C 66.788 25.874 66.813 25.807 66.86 25.758 C 66.906 25.708 66.971 25.68 67.038 25.68 L 70.285 25.68 C 70.416 25.68 70.524 25.785 70.532 25.919 C 70.57 26.699 70.802 27.317 71.229 27.774 C 71.697 28.276 72.339 28.527 73.153 28.527 C 73.844 28.527 74.379 28.37 74.756 28.056 C 75.133 27.742 75.32 27.295 75.317 26.715 C 75.317 26.213 75.175 25.81 74.892 25.504 C 74.608 25.198 74.097 24.897 73.359 24.599 L 70.454 23.446 C 69.378 23.038 68.564 22.454 68.011 21.694 C 67.457 20.934 67.181 20.021 67.181 18.953 C 67.163 18.058 67.408 17.177 67.884 16.425 C 68.378 15.674 69.074 15.086 69.889 14.731 C 70.758 14.331 71.768 14.131 72.921 14.131 Z M 146.505 14.602 C 146.641 14.602 146.753 14.714 146.754 14.854 L 146.754 17.407 C 146.754 17.546 146.642 17.66 146.505 17.66 L 140.869 17.66 C 140.733 17.66 140.622 17.773 140.621 17.912 L 140.621 21.147 C 140.621 21.286 140.732 21.4 140.869 21.4 L 146.505 21.4 C 146.572 21.399 146.636 21.427 146.683 21.475 C 146.729 21.524 146.754 21.589 146.754 21.658 L 146.754 24.14 C 146.754 24.208 146.727 24.272 146.68 24.319 C 146.634 24.366 146.57 24.393 146.505 24.393 L 140.869 24.393 C 140.733 24.393 140.622 24.505 140.621 24.645 L 140.621 27.762 C 140.621 27.829 140.647 27.894 140.694 27.941 C 140.74 27.988 140.803 28.015 140.869 28.014 L 146.505 28.014 C 146.642 28.014 146.754 28.128 146.754 28.268 L 146.754 30.821 C 146.753 30.96 146.641 31.073 146.505 31.073 L 137.134 31.073 C 136.998 31.073 136.887 30.96 136.887 30.821 L 136.887 14.854 C 136.887 14.715 136.998 14.602 137.134 14.602 Z M 125.945 14.602 C 126.036 14.602 126.119 14.653 126.163 14.735 L 131.228 24.372 C 131.282 24.473 131.397 24.524 131.507 24.496 C 131.616 24.468 131.694 24.367 131.694 24.252 L 131.694 14.856 C 131.695 14.717 131.805 14.605 131.941 14.604 L 135.019 14.604 C 135.085 14.604 135.148 14.63 135.194 14.677 C 135.241 14.725 135.267 14.789 135.267 14.856 L 135.267 30.817 C 135.267 30.884 135.241 30.948 135.194 30.996 C 135.148 31.043 135.085 31.069 135.019 31.069 L 131.594 31.069 C 131.501 31.072 131.414 31.022 131.37 30.939 L 126.303 21.301 C 126.25 21.2 126.137 21.148 126.027 21.175 C 125.918 21.202 125.84 21.301 125.838 21.416 L 125.838 30.811 C 125.837 30.951 125.726 31.063 125.59 31.063 L 122.512 31.063 C 122.376 31.063 122.265 30.951 122.265 30.811 L 122.265 14.854 C 122.265 14.715 122.376 14.602 122.512 14.602 Z M 61.038 14.602 C 61.106 14.602 61.167 14.64 61.198 14.701 L 61.209 14.728 L 66.572 30.824 L 66.568 30.824 C 66.587 30.881 66.577 30.943 66.543 30.991 C 66.515 31.032 66.472 31.059 66.425 31.067 L 66.396 31.069 L 62.895 31.069 C 62.795 31.069 62.707 31.008 62.668 30.917 L 62.657 30.886 L 61.983 28.448 L 56.613 28.448 L 55.94 30.886 C 55.912 30.984 55.831 31.054 55.734 31.067 L 55.702 31.069 L 52.2 31.069 C 52.142 31.069 52.087 31.04 52.053 30.991 C 52.025 30.951 52.014 30.901 52.022 30.853 L 52.029 30.824 L 57.369 14.728 C 57.39 14.662 57.446 14.614 57.512 14.604 L 57.541 14.602 Z M 115.293 14.604 C 115.361 14.604 115.423 14.642 115.454 14.703 L 115.465 14.73 L 120.828 30.824 L 120.823 30.824 C 120.842 30.881 120.833 30.943 120.799 30.991 C 120.771 31.032 120.728 31.059 120.68 31.067 L 120.652 31.069 L 117.151 31.069 C 117.051 31.069 116.962 31.008 116.924 30.917 L 116.913 30.886 L 116.239 28.448 L 110.87 28.448 L 110.197 30.886 C 110.169 30.984 110.087 31.054 109.99 31.067 L 109.958 31.069 L 106.457 31.069 C 106.399 31.069 106.344 31.041 106.309 30.992 C 106.28 30.951 106.269 30.901 106.277 30.853 L 106.284 30.824 L 111.625 14.73 C 111.646 14.664 111.702 14.617 111.768 14.606 L 111.796 14.604 Z M 44.428 14.602 C 46.102 14.602 47.561 14.974 48.807 15.719 C 50.014 16.423 51.004 17.458 51.666 18.706 C 52.988 21.297 52.988 24.383 51.666 26.974 C 51.008 28.225 50.017 29.261 48.807 29.962 C 47.563 30.699 46.103 31.067 44.428 31.067 L 38.589 31.067 C 38.523 31.067 38.46 31.041 38.413 30.993 C 38.367 30.946 38.341 30.882 38.341 30.815 L 38.341 14.854 C 38.341 14.787 38.367 14.722 38.413 14.675 C 38.46 14.628 38.523 14.601 38.589 14.602 Z M 98.918 14.35 C 98.984 14.349 99.047 14.376 99.093 14.423 C 99.14 14.47 99.165 14.535 99.165 14.602 L 99.165 27.428 C 99.165 27.567 99.277 27.68 99.413 27.68 L 104.916 27.68 C 105.052 27.68 105.163 27.793 105.164 27.932 L 105.164 30.815 C 105.164 30.882 105.137 30.946 105.091 30.993 C 105.044 31.041 104.981 31.067 104.916 31.067 L 95.681 31.067 C 95.616 31.067 95.552 31.041 95.506 30.993 C 95.46 30.946 95.433 30.882 95.434 30.815 L 95.434 14.602 C 95.433 14.535 95.46 14.47 95.506 14.423 C 95.552 14.376 95.616 14.349 95.681 14.35 Z M 84.17 14.476 C 84.297 14.476 84.401 14.572 84.416 14.696 L 84.418 14.728 L 84.418 21.006 C 84.418 21.073 84.444 21.137 84.49 21.185 C 84.529 21.224 84.579 21.249 84.633 21.257 L 84.665 21.259 L 89.748 21.259 C 89.875 21.259 89.98 21.162 89.995 21.037 L 89.996 21.006 L 89.996 14.854 C 89.996 14.725 90.091 14.619 90.213 14.604 L 90.244 14.602 L 93.484 14.602 C 93.61 14.602 93.713 14.698 93.729 14.822 L 93.73 14.854 L 93.73 30.815 C 93.73 30.943 93.636 31.049 93.515 31.065 L 93.484 31.067 L 90.244 31.067 C 90.118 31.067 90.014 30.971 89.999 30.846 L 89.996 30.815 L 89.996 24.78 C 89.996 24.651 89.901 24.545 89.779 24.53 L 89.748 24.528 L 84.665 24.528 C 84.539 24.528 84.435 24.624 84.42 24.748 L 84.418 24.78 L 84.418 30.815 C 84.418 30.943 84.323 31.049 84.201 31.065 L 84.17 31.067 L 80.931 31.067 C 80.805 31.066 80.702 30.97 80.686 30.846 L 80.683 30.815 L 80.683 14.728 C 80.684 14.599 80.778 14.494 80.9 14.478 L 80.931 14.476 Z M 24.591 10.881 L 24.645 10.9 L 28.738 12.433 L 28.743 12.433 C 29.044 12.542 29.239 12.745 29.261 12.97 L 29.263 13.012 L 29.263 30.39 C 29.263 30.876 28.501 31.189 27.851 30.986 L 27.797 30.968 L 23.704 29.435 C 23.403 29.327 23.209 29.124 23.187 28.899 L 23.185 28.857 L 23.185 11.479 C 23.185 10.993 23.941 10.679 24.591 10.881 Z M 44.081 17.803 L 42.325 17.803 C 42.188 17.804 42.078 17.916 42.078 18.055 L 42.078 27.616 C 42.078 27.755 42.188 27.868 42.325 27.868 L 44.081 27.868 C 45.095 27.868 45.959 27.636 46.674 27.173 C 47.373 26.729 47.93 26.087 48.276 25.324 C 48.983 23.74 48.983 21.922 48.276 20.338 C 47.929 19.576 47.372 18.935 46.674 18.491 C 45.959 18.032 45.095 17.803 44.081 17.803 Z M 59.3 19.261 C 59.228 19.261 59.163 19.305 59.134 19.371 L 59.125 19.397 L 57.531 25.147 C 57.51 25.22 57.525 25.299 57.57 25.36 C 57.609 25.412 57.666 25.446 57.729 25.455 L 57.761 25.457 L 60.84 25.457 C 60.915 25.458 60.986 25.422 61.031 25.361 C 61.07 25.308 61.086 25.242 61.077 25.178 L 61.07 25.147 L 59.476 19.397 C 59.454 19.317 59.382 19.261 59.3 19.261 Z M 113.556 19.261 C 113.483 19.261 113.419 19.305 113.39 19.371 L 113.381 19.397 L 111.786 25.147 L 111.792 25.147 C 111.772 25.219 111.786 25.297 111.83 25.358 C 111.867 25.41 111.924 25.444 111.985 25.454 L 112.016 25.457 L 115.096 25.457 C 115.17 25.457 115.241 25.421 115.286 25.36 C 115.326 25.308 115.342 25.242 115.333 25.178 L 115.327 25.147 L 113.731 19.397 C 113.709 19.317 113.638 19.261 113.556 19.261 Z M 17.014 4.786 L 17.068 4.804 L 21.16 6.337 C 21.462 6.445 21.655 6.643 21.677 6.868 L 21.679 6.91 L 21.679 17.49 C 21.679 17.976 20.917 18.291 20.267 18.088 L 20.213 18.07 L 16.12 16.537 C 15.82 16.428 15.625 16.225 15.603 16 L 15.601 15.957 L 15.601 5.377 C 15.601 4.896 16.363 4.583 17.014 4.786 Z M 9.434 0.311 L 9.488 0.33 L 13.574 1.862 C 13.875 1.97 14.069 2.174 14.091 2.399 L 14.093 2.441 L 14.093 13.952 C 14.093 14.438 13.337 14.753 12.687 14.55 L 12.633 14.532 L 8.54 12.999 C 8.239 12.891 8.045 12.687 8.024 12.461 L 8.022 12.419 L 8.022 0.902 C 8.022 0.422 8.783 0.109 9.434 0.311 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 1668489705,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-f2g4tg",
                                                "data-framer-name": "Shopify",
                                                layout: "position",
                                                name: "Shopify",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 138 39"><path d="M 34.794 36.18 L 24.567 38.741 L 0.97 34.629 C 0.97 34.629 3.785 12.697 3.893 11.925 C 4.035 10.904 4.069 10.87 5.144 10.53 C 5.175 10.521 6.667 10.057 8.799 9.391 C 9.028 7.751 9.828 5.628 10.885 3.941 C 12.384 1.541 14.231 0.19 16.088 0.137 C 17.049 0.109 17.853 0.436 18.48 1.111 C 18.526 1.158 18.566 1.211 18.61 1.261 C 18.712 1.251 18.81 1.242 18.909 1.242 L 18.916 1.242 C 20.352 1.245 21.542 2.07 22.355 3.633 C 22.608 4.115 22.784 4.598 22.904 4.99 C 23.621 4.766 24.048 4.632 24.051 4.632 C 24.224 4.582 24.663 4.513 24.888 4.741 C 25.114 4.968 27.394 7.2 27.394 7.2 C 27.394 7.2 30.122 7.24 30.261 7.253 C 30.404 7.265 30.57 7.371 30.598 7.567 C 30.623 7.763 34.797 36.183 34.794 36.18 Z M 19.323 2.531 C 19.762 3.667 19.876 4.987 19.889 5.933 C 20.559 5.721 21.177 5.528 21.721 5.36 C 21.428 4.401 20.735 2.795 19.323 2.531 Z M 18.044 2.677 C 17.497 2.904 17.037 3.303 16.706 3.657 C 15.82 4.613 15.096 6.076 14.716 7.545 C 16.07 7.122 17.42 6.702 18.656 6.316 C 18.668 5.282 18.557 3.754 18.044 2.677 Z M 10.122 8.974 C 11.132 8.66 12.232 8.317 13.357 7.966 C 13.718 6.057 14.621 4.078 15.801 2.805 C 16.258 2.313 16.743 1.936 17.244 1.675 C 16.932 1.466 16.564 1.37 16.128 1.379 C 13.261 1.463 10.761 5.973 10.122 8.974 Z M 15.884 12.158 C 10.69 12.488 8.336 16.149 8.561 19.76 C 8.83 24.049 13.088 23.897 13.252 26.508 C 13.289 27.14 12.9 28.033 11.812 28.102 C 10.143 28.211 8.061 26.626 8.061 26.626 L 7.264 30.041 C 7.264 30.041 9.334 32.276 13.091 32.036 C 16.221 31.837 18.396 29.313 18.165 25.624 C 17.871 20.936 12.643 20.497 12.516 18.496 C 12.495 18.129 12.52 16.666 14.821 16.519 C 16.391 16.42 17.717 17.027 17.717 17.027 L 18.903 12.551 C 18.903 12.551 17.877 12.037 15.884 12.158 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 46.798 17.901 C 45.612 17.254 45.003 16.706 45.003 15.956 C 45.003 15 45.85 14.387 47.172 14.387 C 48.711 14.387 50.086 15.035 50.086 15.035 L 51.17 11.692 C 51.17 11.692 50.172 10.907 47.243 10.907 C 43.161 10.907 40.334 13.26 40.334 16.572 C 40.334 18.449 41.654 19.881 43.415 20.905 C 44.836 21.724 45.346 22.303 45.346 23.156 C 45.346 24.043 44.635 24.759 43.313 24.759 C 41.345 24.759 39.485 23.735 39.485 23.735 L 38.332 27.078 C 38.332 27.078 40.05 28.239 42.939 28.239 C 47.138 28.239 50.154 26.156 50.154 22.406 C 50.151 20.392 48.627 18.96 46.798 17.901 Z M 63.53 10.873 C 61.463 10.873 59.837 11.863 58.586 13.363 L 58.518 13.329 L 60.313 3.878 L 55.638 3.878 L 51.099 27.934 L 55.774 27.934 L 57.331 19.71 C 57.94 16.607 59.531 14.695 61.024 14.695 C 62.074 14.695 62.479 15.411 62.479 16.435 C 62.479 17.083 62.411 17.867 62.275 18.518 L 60.514 27.934 L 65.189 27.934 L 67.018 18.21 C 67.222 17.186 67.358 15.959 67.358 15.137 C 67.355 12.476 65.967 10.873 63.53 10.873 Z M 77.922 10.873 C 72.299 10.873 68.575 15.99 68.575 21.69 C 68.575 25.341 70.809 28.273 75.011 28.273 C 80.533 28.273 84.256 23.293 84.256 17.456 C 84.256 14.079 82.291 10.873 77.922 10.873 Z M 75.62 24.656 C 74.029 24.656 73.352 23.293 73.352 21.587 C 73.352 18.891 74.74 14.49 77.279 14.49 C 78.939 14.49 79.479 15.922 79.479 17.322 C 79.482 20.22 78.092 24.656 75.62 24.656 Z M 96.211 10.873 C 93.056 10.873 91.267 13.671 91.267 13.671 L 91.199 13.671 L 91.471 11.147 L 87.34 11.147 C 87.136 12.853 86.765 15.445 86.391 17.391 L 83.141 34.62 L 87.816 34.62 L 89.101 27.66 L 89.203 27.66 C 89.203 27.66 90.164 28.273 91.947 28.273 C 97.434 28.273 101.025 22.608 101.025 16.877 C 101.022 13.705 99.634 10.873 96.211 10.873 Z M 91.743 24.725 C 90.529 24.725 89.812 24.043 89.812 24.043 L 90.59 19.641 C 91.131 16.706 92.657 14.764 94.283 14.764 C 95.704 14.764 96.146 16.093 96.146 17.357 C 96.146 20.392 94.351 24.725 91.743 24.725 Z M 107.693 4.118 C 106.203 4.118 105.017 5.313 105.017 6.848 C 105.017 8.246 105.897 9.201 107.217 9.201 L 107.285 9.201 C 108.74 9.201 109.995 8.211 110.029 6.471 C 110.032 5.108 109.117 4.118 107.693 4.118 Z M 101.158 27.934 L 105.833 27.934 L 109.015 11.249 L 104.306 11.249 Z M 120.902 11.215 L 117.651 11.215 L 117.821 10.431 C 118.093 8.828 119.042 7.393 120.599 7.393 C 121.43 7.393 122.088 7.632 122.088 7.632 L 123.003 3.947 C 123.003 3.947 122.19 3.536 120.463 3.536 C 118.804 3.536 117.144 4.012 115.89 5.105 C 114.299 6.468 113.554 8.448 113.18 10.428 L 113.044 11.212 L 110.875 11.212 L 110.198 14.761 L 112.368 14.761 L 109.896 27.931 L 114.571 27.931 L 117.042 14.761 L 120.259 14.761 Z M 132.146 11.249 C 132.146 11.249 129.223 18.664 127.912 22.714 L 127.844 22.714 C 127.755 21.41 126.692 11.249 126.692 11.249 L 121.782 11.249 L 124.594 26.57 C 124.662 26.913 124.628 27.115 124.492 27.355 C 123.951 28.413 123.037 29.437 121.952 30.187 C 121.072 30.835 120.089 31.246 119.31 31.52 L 120.596 35.513 C 121.544 35.308 123.509 34.524 125.169 32.955 C 127.304 30.941 129.266 27.837 131.299 23.607 L 137.021 11.256 L 132.146 11.256 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 588168854,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1bxgpi3",
                                                "data-framer-name": "Google",
                                                layout: "position",
                                                name: "Google",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 105 34"><path d="M 26.408 12.552 L 13.887 12.552 L 13.887 16.188 L 22.767 16.188 C 22.327 21.278 17.994 23.462 13.902 23.462 C 12.605 23.468 11.321 23.221 10.123 22.735 C 8.925 22.249 7.839 21.535 6.926 20.634 C 6.013 19.733 5.293 18.662 4.808 17.486 C 4.323 16.309 4.082 15.05 4.099 13.781 C 4.099 8.276 8.454 4.038 13.914 4.038 C 18.126 4.038 20.608 6.666 20.608 6.666 L 23.208 4.03 C 23.208 4.03 19.868 0.391 13.778 0.391 C 6.022 0.391 0.023 6.798 0.023 13.717 C 0.023 20.497 5.666 27.108 13.974 27.108 C 21.281 27.108 26.631 22.208 26.631 14.964 C 26.631 13.435 26.404 12.552 26.404 12.552 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 36.665 9.918 C 31.527 9.918 27.845 13.85 27.845 18.433 C 27.845 23.086 31.415 27.091 36.725 27.091 C 41.532 27.091 45.469 23.496 45.469 18.533 C 45.469 12.856 40.889 9.917 36.665 9.917 Z M 36.715 13.291 C 39.241 13.291 41.636 15.29 41.636 18.512 C 41.636 21.663 39.251 23.721 36.703 23.721 C 33.903 23.721 31.703 21.526 31.703 18.486 C 31.703 15.511 33.883 13.291 36.723 13.291 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 55.847 9.918 C 50.709 9.918 47.027 13.85 47.027 18.433 C 47.027 23.086 50.597 27.091 55.907 27.091 C 60.714 27.091 64.651 23.496 64.651 18.533 C 64.651 12.856 60.071 9.917 55.847 9.917 Z M 55.897 13.291 C 58.424 13.291 60.818 15.29 60.818 18.512 C 60.818 21.663 58.434 23.721 55.885 23.721 C 53.085 23.721 50.885 21.526 50.885 18.486 C 50.885 15.511 53.065 13.291 55.906 13.291 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 74.662 9.928 C 69.946 9.928 66.239 13.97 66.239 18.508 C 66.239 23.676 70.537 27.103 74.58 27.103 C 77.08 27.103 78.41 26.131 79.38 25.017 L 79.38 26.71 C 79.38 29.673 77.542 31.447 74.768 31.447 C 72.088 31.447 70.744 29.496 70.268 28.39 L 66.895 29.761 C 68.091 32.237 70.5 34.818 74.796 34.818 C 79.497 34.818 83.059 31.928 83.059 25.865 L 83.059 10.443 L 79.394 10.443 L 79.394 11.898 C 78.264 10.704 76.716 9.928 74.664 9.928 Z M 75.002 13.295 C 77.314 13.295 79.688 15.227 79.688 18.526 C 79.688 21.881 77.318 23.728 74.951 23.728 C 72.437 23.728 70.098 21.732 70.098 18.558 C 70.098 15.261 72.528 13.295 75.002 13.295 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 99.436 9.907 C 94.987 9.907 91.252 13.372 91.252 18.481 C 91.252 23.89 95.416 27.098 99.852 27.098 C 103.565 27.098 105.853 25.111 107.203 23.329 L 104.17 21.354 C 103.383 22.548 102.066 23.718 99.872 23.718 C 97.406 23.718 96.272 22.396 95.568 21.114 L 107.332 16.338 L 106.732 14.938 C 105.596 12.198 102.944 9.907 99.436 9.907 Z M 99.588 13.21 C 101.192 13.21 102.345 14.044 102.835 15.044 L 94.978 18.257 C 94.638 15.769 97.049 13.21 99.579 13.21 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 85.635 26.588 L 89.499 26.588 L 89.499 1.28 L 85.635 1.28 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 1427495933,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1371h8u",
                                                "data-framer-name": "Asana",
                                                layout: "position",
                                                name: "Asana",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 137 28"><path d="M 133.181 21.27 C 133.264 22.225 134.016 23.44 135.317 23.44 L 136.079 23.44 C 136.374 23.44 136.616 23.194 136.616 22.894 L 136.616 5.869 L 136.612 5.869 C 136.597 5.582 136.364 5.352 136.079 5.352 L 133.719 5.352 C 133.434 5.352 133.2 5.582 133.185 5.869 L 133.181 5.869 L 133.181 7.252 C 131.736 5.441 129.456 4.689 127.171 4.689 C 121.975 4.689 117.763 8.973 117.763 14.259 C 117.763 19.545 121.975 23.83 127.171 23.83 L 127.171 23.831 C 129.456 23.831 131.948 22.929 133.181 21.268 Z M 127.18 20.481 C 123.876 20.481 121.196 17.696 121.196 14.259 C 121.196 10.824 123.876 8.038 127.18 8.038 C 130.484 8.038 133.163 10.824 133.163 14.259 C 133.163 17.696 130.484 20.481 127.18 20.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 114.78 21.855 L 114.778 13.046 L 114.779 13.046 C 114.779 8.08 111.699 4.73 106.789 4.73 C 104.445 4.73 102.522 6.109 101.844 7.293 C 101.698 6.367 101.214 5.393 99.715 5.393 L 98.951 5.393 C 98.655 5.393 98.414 5.639 98.414 5.94 L 98.414 21.312 C 98.414 21.313 98.414 21.314 98.414 21.315 L 98.414 22.966 L 98.417 22.966 C 98.433 23.252 98.666 23.482 98.951 23.482 L 101.311 23.482 C 101.347 23.482 101.382 23.478 101.416 23.471 C 101.432 23.468 101.447 23.462 101.462 23.457 C 101.479 23.452 101.497 23.448 101.514 23.441 C 101.536 23.432 101.555 23.42 101.574 23.409 C 101.584 23.403 101.594 23.399 101.603 23.392 C 101.626 23.377 101.648 23.359 101.669 23.34 C 101.672 23.336 101.676 23.334 101.68 23.331 C 101.703 23.307 101.724 23.282 101.744 23.255 C 101.744 23.255 101.744 23.255 101.744 23.255 C 101.803 23.173 101.839 23.073 101.845 22.966 L 101.848 22.966 L 101.848 12.909 C 101.848 10.242 103.973 8.08 106.595 8.08 C 109.217 8.08 111.343 10.242 111.343 12.909 L 111.345 21.315 L 111.345 21.312 C 111.345 21.32 111.346 21.327 111.346 21.335 L 111.346 22.966 L 111.35 22.966 C 111.365 23.252 111.598 23.482 111.883 23.482 L 114.244 23.482 C 114.28 23.482 114.315 23.478 114.349 23.471 C 114.363 23.468 114.376 23.463 114.389 23.459 C 114.409 23.453 114.428 23.448 114.447 23.441 C 114.467 23.433 114.484 23.421 114.502 23.411 C 114.513 23.405 114.525 23.4 114.536 23.392 C 114.557 23.378 114.578 23.36 114.597 23.343 C 114.602 23.338 114.608 23.335 114.612 23.33 C 114.635 23.308 114.655 23.284 114.673 23.26 C 114.674 23.258 114.676 23.256 114.677 23.254 C 114.735 23.173 114.77 23.074 114.777 22.967 C 114.777 22.967 114.777 22.966 114.777 22.966 L 114.781 22.966 L 114.781 21.855 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 90.205 21.27 C 90.287 22.225 91.038 23.44 92.339 23.44 L 93.101 23.44 C 93.396 23.44 93.638 23.194 93.638 22.894 L 93.638 5.869 L 93.635 5.869 C 93.62 5.582 93.386 5.352 93.101 5.352 L 90.742 5.352 C 90.456 5.352 90.224 5.582 90.208 5.869 L 90.205 5.869 L 90.205 7.252 C 88.759 5.441 86.48 4.689 84.193 4.689 C 78.998 4.689 74.786 8.973 74.786 14.259 C 74.786 19.545 78.998 23.83 84.193 23.83 L 84.193 23.831 C 86.48 23.831 88.97 22.929 90.204 21.268 Z M 84.203 20.481 C 80.898 20.481 78.22 17.696 78.22 14.259 C 78.22 10.824 80.898 8.038 84.203 8.038 C 87.507 8.038 90.186 10.824 90.186 14.259 C 90.186 17.696 87.507 20.481 84.203 20.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 60.831 18.831 C 62.406 19.942 64.126 20.481 65.778 20.481 C 67.352 20.481 68.98 19.651 68.98 18.206 C 68.98 16.276 65.434 15.976 63.205 15.206 C 60.977 14.435 59.058 12.843 59.058 10.264 C 59.058 6.318 62.514 4.688 65.74 4.688 C 67.784 4.688 69.893 5.374 71.26 6.356 C 71.731 6.719 71.444 7.136 71.444 7.136 L 70.139 9.032 C 69.992 9.246 69.736 9.43 69.368 9.199 C 68.999 8.968 67.708 8.038 65.74 8.038 C 63.772 8.038 62.586 8.963 62.586 10.109 C 62.586 11.483 64.127 11.915 65.932 12.384 C 69.077 13.246 72.508 14.283 72.508 18.206 C 72.508 21.682 69.311 23.831 65.778 23.831 C 63.101 23.831 60.821 23.054 58.909 21.627 C 58.511 21.222 58.789 20.845 58.789 20.845 L 60.088 18.959 C 60.352 18.606 60.685 18.729 60.831 18.831 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 51.76 21.27 C 51.842 22.225 52.593 23.44 53.895 23.44 L 54.657 23.44 C 54.952 23.44 55.194 23.194 55.194 22.894 L 55.194 5.869 L 55.19 5.869 C 55.175 5.582 54.942 5.352 54.657 5.352 L 52.297 5.352 C 52.012 5.352 51.778 5.582 51.762 5.869 L 51.76 5.869 L 51.76 7.252 C 50.314 5.441 48.034 4.689 45.749 4.689 C 40.553 4.689 36.341 8.973 36.341 14.259 C 36.341 19.545 40.553 23.83 45.749 23.83 L 45.749 23.831 C 48.034 23.831 50.526 22.929 51.759 21.268 Z M 45.758 20.481 C 42.453 20.481 39.775 17.696 39.775 14.259 C 39.775 10.824 42.453 8.038 45.758 8.038 C 49.062 8.038 51.741 10.824 51.741 14.259 C 51.741 17.696 49.062 20.481 45.758 20.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 23.152 14.91 C 19.655 14.91 16.821 17.792 16.821 21.346 C 16.821 24.9 19.655 27.782 23.152 27.782 C 26.648 27.782 29.483 24.9 29.483 21.346 C 29.483 17.792 26.648 14.91 23.152 14.91 Z M 6.703 14.911 C 3.207 14.911 0.372 17.792 0.372 21.346 C 0.372 24.9 3.207 27.782 6.703 27.782 C 10.2 27.782 13.035 24.9 13.035 21.346 C 13.035 17.792 10.2 14.911 6.703 14.911 Z M 21.258 6.866 C 21.258 10.42 18.424 13.302 14.928 13.302 C 11.431 13.302 8.597 10.42 8.597 6.866 C 8.597 3.312 11.431 0.43 14.928 0.43 C 18.424 0.43 21.258 3.312 21.258 6.866 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 1176428350,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-dybfq1",
                                                "data-framer-name": "Lululemon",
                                                layout: "position",
                                                name: "Lululemon",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151 29"><path d="M 41.572 23.302 L 38.541 23.302 L 38.541 3.858 L 41.577 3.858 Z M 56.556 23.302 L 53.503 23.302 L 53.503 22.046 C 52.579 23.049 51.265 23.614 49.89 23.599 C 46.826 23.599 45.157 21.597 45.157 18.664 L 45.157 10.006 L 48.194 10.006 L 48.194 18.123 C 48.194 19.747 48.984 20.829 50.714 20.829 C 52.035 20.853 53.196 19.972 53.509 18.707 L 53.509 10.022 L 56.556 10.022 Z M 63.338 23.302 L 60.301 23.302 L 60.301 3.858 L 63.338 3.858 Z M 78.3 23.302 L 75.264 23.302 L 75.264 22.046 C 74.34 23.049 73.025 23.614 71.651 23.599 C 68.587 23.599 66.918 21.597 66.918 18.664 L 66.918 10.006 L 69.954 10.006 L 69.954 18.123 C 69.954 19.747 70.745 20.829 72.475 20.829 C 73.795 20.853 74.956 19.972 75.269 18.707 L 75.269 10.022 L 78.306 10.022 Z M 85.109 23.302 L 82.073 23.302 L 82.073 3.858 L 85.109 3.858 Z M 99.973 19.173 C 99.517 21.803 97.546 23.599 94.295 23.599 C 90.534 23.599 87.92 20.786 87.92 16.689 C 87.92 12.712 90.562 9.719 94.235 9.719 C 98.029 9.719 100.094 12.381 100.094 16.267 L 100.094 17.349 L 90.897 17.349 C 90.99 19.682 92.352 21.089 94.295 21.089 C 95.75 21.089 96.843 20.461 97.178 19.173 Z M 90.99 15.152 L 97.09 15.152 C 97.063 13.529 96.118 12.219 94.268 12.219 C 92.599 12.235 91.352 13.253 90.99 15.152 Z M 116.847 9.741 C 119.592 9.741 121.239 11.656 121.239 14.676 L 121.239 23.334 L 118.203 23.334 L 118.203 15.152 C 118.203 13.529 117.473 12.446 116.006 12.446 C 114.819 12.423 113.796 13.266 113.607 14.422 L 113.607 23.302 L 110.532 23.302 L 110.532 15.152 C 110.532 13.529 109.802 12.446 108.336 12.446 C 107.148 12.423 106.125 13.266 105.936 14.422 L 105.936 23.302 L 102.9 23.302 L 102.9 10.022 L 105.936 10.022 L 105.936 11.104 C 106.777 10.171 108.005 9.669 109.269 9.741 C 110.674 9.725 111.999 10.383 112.822 11.505 C 113.811 10.331 115.299 9.679 116.847 9.741 Z M 130.261 23.599 C 126.467 23.599 123.858 20.726 123.858 16.662 C 123.858 12.598 126.467 9.741 130.261 9.741 C 134.055 9.741 136.663 12.614 136.663 16.678 C 136.663 20.742 134.055 23.599 130.261 23.599 Z M 130.261 12.295 C 128.064 12.295 126.895 14.151 126.895 16.662 C 126.895 19.173 128.081 21.029 130.261 21.029 C 132.441 21.029 133.632 19.173 133.632 16.662 C 133.632 14.151 132.446 12.295 130.261 12.295 Z M 139.469 10.022 L 142.506 10.022 L 142.506 11.278 C 143.449 10.275 144.781 9.716 146.168 9.741 C 149.232 9.741 150.934 11.743 150.934 14.676 L 150.934 23.334 L 147.898 23.334 L 147.898 15.152 C 147.898 13.529 147.079 12.446 145.35 12.446 C 144.023 12.421 142.854 13.3 142.528 14.568 L 142.528 23.302 L 139.469 23.302 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 14.474 0 C 18.314 -0.001 21.997 1.501 24.712 4.176 C 27.428 6.851 28.954 10.481 28.954 14.265 C 28.954 22.142 22.474 28.528 14.481 28.529 C 6.488 28.53 0.008 22.146 0.005 14.268 C 0.003 6.391 6.481 0.003 14.474 0 Z M 24.583 20.602 C 23.804 21.015 22.945 21.262 22.062 21.327 C 21.595 21.324 21.139 21.18 20.756 20.915 C 18.411 19.379 19.213 17.539 20.811 14.681 C 21.543 13.512 22.115 12.253 22.513 10.937 C 22.848 9.551 23.15 7.533 21.931 6.007 C 21.248 5.228 20.349 4.663 19.344 4.383 C 17.865 3.953 16.329 3.743 14.787 3.761 L 14.178 3.761 C 12.635 3.744 11.099 3.953 9.62 4.383 C 8.615 4.663 7.716 5.228 7.034 6.007 C 5.815 7.533 6.117 9.551 6.457 10.937 C 6.848 12.253 7.415 13.512 8.143 14.681 C 9.741 17.533 10.543 19.379 8.198 20.915 C 7.815 21.181 7.359 21.324 6.891 21.327 C 6.016 21.259 5.165 21.012 4.393 20.602 L 4.53 20.84 C 5.661 22.55 7.138 23.459 8.785 23.459 C 9.573 23.437 10.348 23.253 11.059 22.918 C 11.925 22.523 12.643 21.87 13.112 21.051 C 13.59 20.286 13.784 19.381 13.661 18.491 C 13.393 17.54 13.067 16.605 12.684 15.693 C 11.531 12.749 9.939 8.729 11.317 6.764 C 11.866 5.936 12.926 5.531 14.474 5.525 C 16.022 5.52 17.06 5.936 17.631 6.764 C 18.993 8.729 17.417 12.749 16.264 15.688 C 15.875 16.607 15.544 17.549 15.27 18.507 C 15.146 19.399 15.34 20.306 15.819 21.072 C 16.288 21.893 17.006 22.548 17.873 22.945 C 18.584 23.279 19.358 23.464 20.146 23.486 C 21.793 23.486 23.287 22.577 24.451 20.856 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 3201482784,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1vl8ne2",
                                                "data-framer-name": "Volta",
                                                layout: "position",
                                                name: "Volta",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 130 78"><path d="M 85.756 65.419 C 84.041 64.263 82.028 63.634 79.974 63.634 L 66.276 63.634 C 64.621 62.255 63.245 60.531 62.268 58.522 L 33.676 0.324 C 33.138 0.912 32.62 1.52 32.101 2.109 L 47.275 32.983 L 30.347 4.34 C 29.868 4.989 29.39 5.638 28.951 6.287 L 46.218 35.539 L 27.396 8.641 C 26.977 9.33 26.558 10.04 26.179 10.73 L 45.38 38.136 L 24.883 13.266 C 24.525 13.996 24.186 14.746 23.867 15.497 L 44.742 40.854 L 22.83 18.134 C 22.551 18.905 22.271 19.696 22.032 20.487 L 44.304 43.592 L 21.255 23.165 C 21.035 23.976 20.856 24.788 20.676 25.619 L 44.064 46.331 L 20.178 28.317 C 20.038 29.149 19.939 30.001 19.839 30.833 L 44.064 49.09 L 19.6 33.531 C 19.54 34.383 19.5 35.235 19.5 36.087 L 44.264 51.828 L 19.5 38.744 C 19.52 39.616 19.56 40.468 19.62 41.32 L 44.643 54.546 L 19.879 43.897 C 19.979 44.769 20.098 45.621 20.238 46.473 L 45.241 57.224 L 20.696 48.948 C 20.876 49.8 21.075 50.652 21.294 51.504 L 46.038 59.841 L 21.952 53.836 C 22.212 54.688 22.491 55.52 22.77 56.332 L 47.015 62.377 L 23.607 58.522 C 23.946 59.354 24.285 60.165 24.664 60.957 L 48.192 64.831 L 25.661 62.985 C 26.08 63.797 26.518 64.567 26.977 65.338 L 49.268 67.164 L 5.383 67.164 L 5.383 69.395 L 95.905 69.395 L 86.992 66.251 Z M 75.986 67.164 C 73.833 67.164 71.739 66.697 69.845 65.845 L 79.954 65.845 C 81.529 65.845 83.064 66.292 84.4 67.164 Z M 75.468 51.26 L 82.048 33.794 L 78.718 33.794 L 73.972 46.371 L 69.227 33.794 L 65.897 33.794 L 72.477 51.26 Z M 89.325 33.531 C 84.56 33.531 81.37 37.162 81.37 42.598 C 81.37 48.015 84.56 51.666 89.325 51.666 C 94.09 51.666 97.281 48.035 97.281 42.598 C 97.281 37.162 94.09 33.531 89.325 33.531 Z M 89.325 48.481 C 86.294 48.481 84.48 46.27 84.48 42.578 C 84.48 38.886 86.294 36.675 89.325 36.675 C 92.356 36.675 94.17 38.886 94.17 42.578 C 94.17 46.29 92.356 48.481 89.325 48.481 Z M 98.956 51.26 L 102.066 51.26 L 102.066 28.784 L 98.956 28.784 Z M 119.871 33.815 L 109.005 33.815 L 109.005 28.784 L 105.874 28.784 L 105.874 33.815 L 103.681 33.815 L 103.681 36.979 L 105.874 36.979 L 105.874 51.26 L 108.985 51.26 L 108.985 36.979 L 119.851 36.979 C 120.968 36.979 121.885 37.912 121.885 39.048 L 121.885 40.083 C 120.788 39.292 119.373 38.846 117.758 38.846 C 113.83 38.846 111.078 41.483 111.078 45.235 C 111.078 48.988 113.83 51.625 117.758 51.625 C 119.373 51.625 120.768 51.179 121.885 50.388 L 121.885 51.24 L 125.015 51.24 L 125.015 39.028 C 125.015 36.168 122.702 33.815 119.871 33.815 Z M 117.778 48.481 C 116.063 48.481 114.209 47.629 114.209 45.256 C 114.209 42.882 116.043 42.03 117.778 42.03 C 119.492 42.03 121.347 42.882 121.347 45.256 C 121.327 47.629 119.492 48.481 117.778 48.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2262912567,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1jtuqso",
                                                "data-framer-name": "Adobe",
                                                layout: "position",
                                                name: "Adobe",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 32"><path d="M 13.324 0 L 0 0 L 0 32.492 Z M 22.7 0 L 36.007 0 L 36.007 32.492 Z M 18.011 11.975 L 26.493 32.492 L 20.929 32.492 L 18.396 25.959 L 12.184 25.959 Z M 57.744 20.664 L 59.316 25.257 C 59.369 25.37 59.447 25.424 59.584 25.424 L 62.607 25.424 C 62.771 25.424 62.798 25.345 62.771 25.175 L 56.529 7.502 C 56.504 7.359 56.478 7.332 56.338 7.332 L 52.589 7.332 C 52.484 7.332 52.424 7.414 52.424 7.527 C 52.371 8.456 52.293 8.741 52.18 9.016 L 46.616 25.148 C 46.591 25.345 46.651 25.424 46.807 25.424 L 49.507 25.424 C 49.671 25.424 49.751 25.37 49.811 25.202 L 51.296 20.662 Z M 52.156 17.66 C 52.971 15.145 54.047 11.925 54.482 10.083 L 54.507 10.083 C 55.044 12.013 56.313 15.838 56.884 17.66 Z M 70.796 25.699 C 72.551 25.702 74.289 25.337 75.9 24.627 C 76.038 24.575 76.064 24.514 76.064 24.378 C 75.999 23.794 75.961 23.207 75.951 22.619 L 75.951 5.979 C 75.951 5.873 75.951 5.821 75.82 5.821 L 72.878 5.821 C 72.767 5.821 72.713 5.873 72.713 6.013 L 72.713 11.653 C 72.328 11.603 71.94 11.576 71.551 11.574 C 66.802 11.574 63.884 14.768 63.884 18.759 C 63.884 23.388 66.88 25.699 70.796 25.699 Z M 72.713 22.617 C 72.227 22.776 71.689 22.839 71.142 22.839 C 68.989 22.839 67.227 21.6 67.227 18.591 C 67.227 15.926 69.042 14.354 71.447 14.354 C 71.931 14.354 72.358 14.406 72.713 14.546 Z M 85.451 11.574 C 81.398 11.574 78.889 14.741 78.889 18.654 C 78.889 22.148 80.887 25.699 85.391 25.699 C 89.202 25.699 91.876 22.839 91.876 18.564 C 91.876 14.793 89.609 11.574 85.453 11.574 Z M 85.287 14.352 C 87.578 14.352 88.551 16.361 88.551 18.654 C 88.551 21.487 87.118 22.891 85.451 22.891 C 83.396 22.891 82.18 21.131 82.18 18.591 C 82.18 15.981 83.473 14.354 85.287 14.354 Z M 94.918 5.819 C 94.807 5.819 94.727 5.873 94.727 6.013 L 94.727 24.849 C 94.727 24.928 94.804 25.071 94.918 25.098 C 96.229 25.503 97.592 25.706 98.962 25.699 C 102.964 25.699 106.853 23.168 106.853 18.07 C 106.853 14.376 104.371 11.574 100.482 11.574 C 99.648 11.568 98.818 11.699 98.024 11.961 L 97.991 6.041 C 97.991 5.846 97.938 5.819 97.747 5.819 Z M 103.529 18.405 C 103.529 21.459 101.48 22.891 99.267 22.891 C 98.807 22.891 98.4 22.866 98.024 22.751 L 98.024 14.714 C 98.451 14.546 98.962 14.406 99.909 14.406 C 102.044 14.406 103.529 15.786 103.529 18.405 Z M 117.836 19.395 C 119.156 19.395 120.24 19.37 120.613 19.282 C 120.753 19.255 120.804 19.203 120.831 19.087 C 120.909 18.786 120.942 18.158 120.942 17.388 C 120.942 14.768 119.398 11.574 115.404 11.574 C 111.324 11.574 109.06 14.963 109.06 18.786 C 109.06 22.175 110.813 25.696 115.727 25.696 C 117.567 25.696 118.756 25.397 119.78 24.903 C 119.884 24.849 119.936 24.761 119.936 24.602 L 119.936 22.309 C 119.936 22.175 119.858 22.15 119.78 22.203 C 118.758 22.644 117.647 22.866 116.429 22.866 C 113.678 22.866 112.429 21.317 112.349 19.397 Z M 112.349 17.025 C 112.567 15.679 113.4 14.218 115.267 14.218 C 117.324 14.218 117.862 15.981 117.862 16.778 L 117.862 16.998 C 117.749 17.025 117.402 17.025 116.378 17.025 Z M 112.349 17.025" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 524820037,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1cdupoq",
                                                "data-framer-name": "Nike",
                                                layout: "position",
                                                name: "Nike",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 116 41"><path d="M 12.553 40.541 C 9.162 40.406 6.388 39.478 4.219 37.755 C 3.805 37.426 2.818 36.439 2.487 36.022 C 1.608 34.916 1.01 33.84 0.611 32.646 C -0.616 28.969 0.015 24.145 2.418 18.85 C 4.475 14.317 7.649 9.822 13.187 3.595 C 14.002 2.679 16.432 -0.001 16.447 -0.001 C 16.453 -0.001 16.321 0.229 16.154 0.508 C 14.714 2.92 13.482 5.761 12.811 8.22 C 11.733 12.167 11.863 15.553 13.192 18.18 C 14.109 19.989 15.68 21.556 17.448 22.422 C 20.542 23.938 25.072 24.063 30.604 22.789 C 30.984 22.701 49.857 17.691 72.544 11.655 C 95.23 5.619 113.795 0.685 113.797 0.689 C 113.804 0.694 61.091 23.251 33.727 34.953 C 29.393 36.806 28.234 37.274 26.197 37.989 C 20.989 39.818 16.324 40.691 12.553 40.541 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2672512230,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-xmrv6v",
                                                "data-framer-name": "Microsoft",
                                                layout: "position",
                                                name: "Microsoft",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 161 46"><path d="M 160.96 21.323 L 160.96 18.456 L 157.445 18.456 L 157.445 13.998 L 157.327 14.035 L 154.025 15.058 L 153.96 15.078 L 153.96 18.456 L 148.749 18.456 L 148.749 16.574 C 148.749 15.698 148.942 15.027 149.323 14.58 C 149.702 14.138 150.243 13.914 150.934 13.914 C 151.43 13.914 151.944 14.032 152.461 14.266 L 152.591 14.324 L 152.591 11.305 L 152.53 11.282 C 152.048 11.106 151.391 11.018 150.578 11.018 C 149.552 11.018 148.621 11.244 147.808 11.692 C 146.995 12.14 146.356 12.781 145.908 13.595 C 145.461 14.408 145.235 15.347 145.235 16.387 L 145.235 18.456 L 142.787 18.456 L 142.787 21.323 L 145.235 21.323 L 145.235 33.403 L 148.749 33.403 L 148.749 21.323 L 153.96 21.323 L 153.96 29 C 153.96 32.161 155.432 33.764 158.336 33.764 C 158.813 33.764 159.315 33.707 159.828 33.596 C 160.35 33.482 160.705 33.369 160.914 33.247 L 160.961 33.219 L 160.961 30.325 L 160.818 30.421 C 160.627 30.55 160.389 30.655 160.111 30.733 C 159.831 30.813 159.598 30.853 159.417 30.853 C 158.737 30.853 158.234 30.667 157.921 30.301 C 157.606 29.931 157.445 29.285 157.445 28.38 L 157.445 21.323 Z M 134.94 30.853 C 133.665 30.853 132.659 30.425 131.951 29.581 C 131.238 28.733 130.877 27.524 130.877 25.988 C 130.877 24.403 131.238 23.162 131.951 22.299 C 132.66 21.441 133.656 21.006 134.912 21.006 C 136.13 21.006 137.1 21.422 137.795 22.242 C 138.493 23.067 138.847 24.297 138.847 25.901 C 138.847 27.524 138.514 28.771 137.857 29.605 C 137.204 30.433 136.223 30.853 134.94 30.853 M 135.096 18.095 C 132.663 18.095 130.731 18.818 129.353 20.242 C 127.976 21.667 127.277 23.638 127.277 26.102 C 127.277 28.443 127.959 30.325 129.303 31.696 C 130.648 33.068 132.477 33.763 134.741 33.763 C 137.099 33.763 138.993 33.031 140.371 31.587 C 141.748 30.144 142.446 28.191 142.446 25.785 C 142.446 23.408 141.791 21.512 140.499 20.149 C 139.207 18.786 137.389 18.095 135.096 18.095 M 121.612 18.095 C 119.957 18.095 118.588 18.524 117.542 19.37 C 116.49 20.221 115.956 21.336 115.956 22.686 C 115.956 23.388 116.071 24.011 116.298 24.54 C 116.526 25.07 116.879 25.537 117.348 25.929 C 117.813 26.318 118.532 26.725 119.484 27.14 C 120.284 27.473 120.881 27.756 121.26 27.978 C 121.631 28.196 121.894 28.415 122.042 28.628 C 122.186 28.837 122.26 29.123 122.26 29.476 C 122.26 30.48 121.517 30.969 119.99 30.969 C 119.423 30.969 118.777 30.849 118.069 30.612 C 117.366 30.38 116.702 30.039 116.101 29.602 L 115.955 29.496 L 115.955 32.923 L 116.009 32.948 C 116.506 33.181 117.133 33.377 117.872 33.531 C 118.609 33.685 119.279 33.764 119.861 33.764 C 121.657 33.764 123.104 33.333 124.159 32.482 C 125.221 31.626 125.76 30.484 125.76 29.087 C 125.76 28.08 125.47 27.216 124.899 26.519 C 124.331 25.828 123.347 25.193 121.974 24.632 C 120.88 24.188 120.179 23.818 119.89 23.535 C 119.611 23.261 119.469 22.874 119.469 22.383 C 119.469 21.949 119.644 21.6 120.003 21.318 C 120.364 21.035 120.867 20.891 121.498 20.891 C 122.084 20.891 122.683 20.985 123.278 21.168 C 123.874 21.352 124.396 21.598 124.833 21.898 L 124.976 21.998 L 124.976 18.747 L 124.921 18.723 C 124.519 18.548 123.988 18.398 123.343 18.277 C 122.701 18.156 122.118 18.095 121.612 18.095 M 106.795 30.853 C 105.52 30.853 104.515 30.425 103.806 29.581 C 103.093 28.733 102.732 27.524 102.732 25.988 C 102.732 24.403 103.093 23.162 103.807 22.299 C 104.515 21.441 105.511 21.006 106.767 21.006 C 107.985 21.006 108.955 21.422 109.65 22.242 C 110.348 23.067 110.703 24.297 110.703 25.901 C 110.703 27.524 110.369 28.771 109.712 29.605 C 109.06 30.433 108.079 30.853 106.795 30.853 M 106.952 18.095 C 104.518 18.095 102.585 18.818 101.208 20.242 C 99.831 21.667 99.133 23.638 99.133 26.102 C 99.133 28.444 99.815 30.325 101.159 31.696 C 102.503 33.068 104.333 33.763 106.596 33.763 C 108.954 33.763 110.849 33.031 112.226 31.587 C 113.603 30.144 114.301 28.191 114.301 25.785 C 114.301 23.408 113.647 21.512 112.354 20.149 C 111.062 18.786 109.244 18.095 106.952 18.095 M 93.799 21.044 L 93.799 18.456 L 90.328 18.456 L 90.328 33.403 L 93.799 33.403 L 93.799 25.757 C 93.799 24.457 94.09 23.388 94.664 22.582 C 95.231 21.785 95.986 21.381 96.909 21.381 C 97.221 21.381 97.572 21.433 97.952 21.536 C 98.329 21.639 98.601 21.75 98.762 21.868 L 98.908 21.975 L 98.908 18.43 L 98.852 18.406 C 98.528 18.266 98.071 18.196 97.492 18.196 C 96.62 18.196 95.84 18.48 95.171 19.039 C 94.584 19.53 94.16 20.204 93.836 21.044 Z M 84.112 18.095 C 82.519 18.095 81.099 18.441 79.891 19.123 C 78.68 19.807 77.744 20.782 77.107 22.023 C 76.473 23.261 76.151 24.706 76.151 26.319 C 76.151 27.731 76.463 29.027 77.08 30.169 C 77.697 31.314 78.571 32.209 79.677 32.829 C 80.782 33.449 82.059 33.764 83.472 33.764 C 85.122 33.764 86.53 33.43 87.659 32.771 L 87.705 32.744 L 87.705 29.523 L 87.559 29.631 C 87.047 30.008 86.476 30.31 85.861 30.527 C 85.247 30.744 84.688 30.853 84.198 30.853 C 82.836 30.853 81.742 30.422 80.949 29.57 C 80.153 28.718 79.75 27.522 79.75 26.016 C 79.75 24.5 80.171 23.273 80.999 22.367 C 81.826 21.464 82.921 21.006 84.255 21.006 C 85.396 21.006 86.507 21.398 87.559 22.171 L 87.705 22.278 L 87.705 18.883 L 87.658 18.857 C 87.262 18.632 86.722 18.447 86.052 18.306 C 85.385 18.166 84.732 18.095 84.112 18.095 M 73.76 18.456 L 70.289 18.456 L 70.289 33.403 L 73.76 33.403 Z M 72.06 12.088 C 71.489 12.088 70.991 12.285 70.581 12.675 C 70.17 13.067 69.962 13.56 69.962 14.142 C 69.962 14.714 70.168 15.198 70.575 15.579 C 70.98 15.959 71.479 16.152 72.06 16.152 C 72.641 16.152 73.143 15.959 73.552 15.58 C 73.964 15.198 74.173 14.714 74.173 14.142 C 74.173 13.58 73.97 13.092 73.569 12.691 C 73.169 12.291 72.661 12.088 72.06 12.088 M 63.4 17.353 L 63.4 33.403 L 66.942 33.403 L 66.942 12.546 L 62.039 12.546 L 55.808 28.038 L 49.76 12.546 L 44.658 12.546 L 44.658 33.403 L 47.987 33.403 L 47.987 17.351 L 48.101 17.351 L 54.487 33.403 L 56.999 33.403 L 63.286 17.353 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 16.329 22.116 L 0 22.116 L 0 5.576 L 16.329 5.576 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 34.357 22.116 L 18.029 22.116 L 18.029 5.576 L 34.357 5.576 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 16.328 40.386 L 0 40.386 L 0 23.845 L 16.328 23.845 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 34.357 40.386 L 18.029 40.386 L 18.029 23.845 L 34.357 23.845 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 4222929170,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-udcx3f",
                                                "data-framer-name": "Dashlane",
                                                layout: "position",
                                                name: "Dashlane",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 147 40"><path d="M 9.434 25.701 L 9.488 25.719 L 13.574 27.251 C 13.875 27.36 14.069 27.564 14.091 27.789 L 14.093 27.831 L 14.093 39.312 C 14.093 39.799 13.337 40.113 12.687 39.91 L 12.633 39.892 L 8.54 38.359 C 8.239 38.25 8.045 38.047 8.024 37.821 L 8.022 37.779 L 8.022 26.298 C 8.022 25.812 8.783 25.498 9.434 25.701 Z M 1.854 0.742 L 1.907 0.76 L 5.999 2.293 C 6.3 2.408 6.495 2.606 6.517 2.831 L 6.519 2.873 L 6.519 38.882 C 6.519 39.368 5.757 39.682 5.107 39.48 L 5.053 39.462 L 0.96 37.928 C 0.659 37.82 0.465 37.616 0.443 37.391 L 0.441 37.348 L 0.441 1.34 C 0.441 0.854 1.203 0.539 1.854 0.742 Z M 17.014 23.773 L 17.068 23.791 L 21.16 25.324 C 21.462 25.433 21.655 25.636 21.677 25.861 L 21.679 25.904 L 21.679 36.484 C 21.679 36.97 20.917 37.284 20.267 37.081 L 20.213 37.063 L 16.12 35.53 C 15.82 35.42 15.625 35.216 15.603 34.991 L 15.601 34.949 L 15.601 24.371 C 15.601 23.885 16.363 23.57 17.014 23.773 Z M 72.921 14.131 C 74.09 14.131 75.12 14.347 76.011 14.778 C 76.858 15.172 77.578 15.804 78.085 16.601 C 78.543 17.348 78.797 18.207 78.818 19.088 C 78.821 19.157 78.797 19.224 78.75 19.274 C 78.703 19.325 78.638 19.353 78.57 19.353 L 75.331 19.353 C 75.2 19.353 75.091 19.249 75.084 19.115 C 75.048 18.462 74.858 17.953 74.514 17.589 C 74.13 17.181 73.577 16.977 72.855 16.978 C 72.255 16.978 71.784 17.122 71.437 17.412 C 71.091 17.703 70.899 18.143 70.919 18.601 C 70.914 19.045 71.099 19.47 71.425 19.765 C 71.763 20.087 72.332 20.412 73.131 20.741 L 75.806 21.823 C 76.911 22.263 77.73 22.866 78.261 23.634 C 78.791 24.402 79.056 25.343 79.055 26.457 C 79.075 27.406 78.818 28.339 78.318 29.138 C 77.808 29.922 77.088 30.539 76.244 30.914 C 75.352 31.329 74.315 31.537 73.131 31.538 C 71.149 31.538 69.597 31.024 68.474 29.997 C 67.407 29.02 66.845 27.668 66.79 25.943 C 66.788 25.874 66.813 25.807 66.86 25.758 C 66.906 25.708 66.971 25.68 67.038 25.68 L 70.285 25.68 C 70.416 25.68 70.524 25.785 70.532 25.919 C 70.57 26.699 70.802 27.317 71.229 27.774 C 71.697 28.276 72.339 28.527 73.153 28.527 C 73.844 28.527 74.379 28.37 74.756 28.056 C 75.133 27.742 75.32 27.295 75.317 26.715 C 75.317 26.213 75.175 25.81 74.892 25.504 C 74.608 25.198 74.097 24.897 73.359 24.599 L 70.454 23.446 C 69.378 23.038 68.564 22.454 68.011 21.694 C 67.457 20.934 67.181 20.021 67.181 18.953 C 67.163 18.058 67.408 17.177 67.884 16.425 C 68.378 15.674 69.074 15.086 69.889 14.731 C 70.758 14.331 71.768 14.131 72.921 14.131 Z M 146.505 14.602 C 146.641 14.602 146.753 14.714 146.754 14.854 L 146.754 17.407 C 146.754 17.546 146.642 17.66 146.505 17.66 L 140.869 17.66 C 140.733 17.66 140.622 17.773 140.621 17.912 L 140.621 21.147 C 140.621 21.286 140.732 21.4 140.869 21.4 L 146.505 21.4 C 146.572 21.399 146.636 21.427 146.683 21.475 C 146.729 21.524 146.754 21.589 146.754 21.658 L 146.754 24.14 C 146.754 24.208 146.727 24.272 146.68 24.319 C 146.634 24.366 146.57 24.393 146.505 24.393 L 140.869 24.393 C 140.733 24.393 140.622 24.505 140.621 24.645 L 140.621 27.762 C 140.621 27.829 140.647 27.894 140.694 27.941 C 140.74 27.988 140.803 28.015 140.869 28.014 L 146.505 28.014 C 146.642 28.014 146.754 28.128 146.754 28.268 L 146.754 30.821 C 146.753 30.96 146.641 31.073 146.505 31.073 L 137.134 31.073 C 136.998 31.073 136.887 30.96 136.887 30.821 L 136.887 14.854 C 136.887 14.715 136.998 14.602 137.134 14.602 Z M 125.945 14.602 C 126.036 14.602 126.119 14.653 126.163 14.735 L 131.228 24.372 C 131.282 24.473 131.397 24.524 131.507 24.496 C 131.616 24.468 131.694 24.367 131.694 24.252 L 131.694 14.856 C 131.695 14.717 131.805 14.605 131.941 14.604 L 135.019 14.604 C 135.085 14.604 135.148 14.63 135.194 14.677 C 135.241 14.725 135.267 14.789 135.267 14.856 L 135.267 30.817 C 135.267 30.884 135.241 30.948 135.194 30.996 C 135.148 31.043 135.085 31.069 135.019 31.069 L 131.594 31.069 C 131.501 31.072 131.414 31.022 131.37 30.939 L 126.303 21.301 C 126.25 21.2 126.137 21.148 126.027 21.175 C 125.918 21.202 125.84 21.301 125.838 21.416 L 125.838 30.811 C 125.837 30.951 125.726 31.063 125.59 31.063 L 122.512 31.063 C 122.376 31.063 122.265 30.951 122.265 30.811 L 122.265 14.854 C 122.265 14.715 122.376 14.602 122.512 14.602 Z M 61.038 14.602 C 61.106 14.602 61.167 14.64 61.198 14.701 L 61.209 14.728 L 66.572 30.824 L 66.568 30.824 C 66.587 30.881 66.577 30.943 66.543 30.991 C 66.515 31.032 66.472 31.059 66.425 31.067 L 66.396 31.069 L 62.895 31.069 C 62.795 31.069 62.707 31.008 62.668 30.917 L 62.657 30.886 L 61.983 28.448 L 56.613 28.448 L 55.94 30.886 C 55.912 30.984 55.831 31.054 55.734 31.067 L 55.702 31.069 L 52.2 31.069 C 52.142 31.069 52.087 31.04 52.053 30.991 C 52.025 30.951 52.014 30.901 52.022 30.853 L 52.029 30.824 L 57.369 14.728 C 57.39 14.662 57.446 14.614 57.512 14.604 L 57.541 14.602 Z M 115.293 14.604 C 115.361 14.604 115.423 14.642 115.454 14.703 L 115.465 14.73 L 120.828 30.824 L 120.823 30.824 C 120.842 30.881 120.833 30.943 120.799 30.991 C 120.771 31.032 120.728 31.059 120.68 31.067 L 120.652 31.069 L 117.151 31.069 C 117.051 31.069 116.962 31.008 116.924 30.917 L 116.913 30.886 L 116.239 28.448 L 110.87 28.448 L 110.197 30.886 C 110.169 30.984 110.087 31.054 109.99 31.067 L 109.958 31.069 L 106.457 31.069 C 106.399 31.069 106.344 31.041 106.309 30.992 C 106.28 30.951 106.269 30.901 106.277 30.853 L 106.284 30.824 L 111.625 14.73 C 111.646 14.664 111.702 14.617 111.768 14.606 L 111.796 14.604 Z M 44.428 14.602 C 46.102 14.602 47.561 14.974 48.807 15.719 C 50.014 16.423 51.004 17.458 51.666 18.706 C 52.988 21.297 52.988 24.383 51.666 26.974 C 51.008 28.225 50.017 29.261 48.807 29.962 C 47.563 30.699 46.103 31.067 44.428 31.067 L 38.589 31.067 C 38.523 31.067 38.46 31.041 38.413 30.993 C 38.367 30.946 38.341 30.882 38.341 30.815 L 38.341 14.854 C 38.341 14.787 38.367 14.722 38.413 14.675 C 38.46 14.628 38.523 14.601 38.589 14.602 Z M 98.918 14.35 C 98.984 14.349 99.047 14.376 99.093 14.423 C 99.14 14.47 99.165 14.535 99.165 14.602 L 99.165 27.428 C 99.165 27.567 99.277 27.68 99.413 27.68 L 104.916 27.68 C 105.052 27.68 105.163 27.793 105.164 27.932 L 105.164 30.815 C 105.164 30.882 105.137 30.946 105.091 30.993 C 105.044 31.041 104.981 31.067 104.916 31.067 L 95.681 31.067 C 95.616 31.067 95.552 31.041 95.506 30.993 C 95.46 30.946 95.433 30.882 95.434 30.815 L 95.434 14.602 C 95.433 14.535 95.46 14.47 95.506 14.423 C 95.552 14.376 95.616 14.349 95.681 14.35 Z M 84.17 14.476 C 84.297 14.476 84.401 14.572 84.416 14.696 L 84.418 14.728 L 84.418 21.006 C 84.418 21.073 84.444 21.137 84.49 21.185 C 84.529 21.224 84.579 21.249 84.633 21.257 L 84.665 21.259 L 89.748 21.259 C 89.875 21.259 89.98 21.162 89.995 21.037 L 89.996 21.006 L 89.996 14.854 C 89.996 14.725 90.091 14.619 90.213 14.604 L 90.244 14.602 L 93.484 14.602 C 93.61 14.602 93.713 14.698 93.729 14.822 L 93.73 14.854 L 93.73 30.815 C 93.73 30.943 93.636 31.049 93.515 31.065 L 93.484 31.067 L 90.244 31.067 C 90.118 31.067 90.014 30.971 89.999 30.846 L 89.996 30.815 L 89.996 24.78 C 89.996 24.651 89.901 24.545 89.779 24.53 L 89.748 24.528 L 84.665 24.528 C 84.539 24.528 84.435 24.624 84.42 24.748 L 84.418 24.78 L 84.418 30.815 C 84.418 30.943 84.323 31.049 84.201 31.065 L 84.17 31.067 L 80.931 31.067 C 80.805 31.066 80.702 30.97 80.686 30.846 L 80.683 30.815 L 80.683 14.728 C 80.684 14.599 80.778 14.494 80.9 14.478 L 80.931 14.476 Z M 24.591 10.881 L 24.645 10.9 L 28.738 12.433 L 28.743 12.433 C 29.044 12.542 29.239 12.745 29.261 12.97 L 29.263 13.012 L 29.263 30.39 C 29.263 30.876 28.501 31.189 27.851 30.986 L 27.797 30.968 L 23.704 29.435 C 23.403 29.327 23.209 29.124 23.187 28.899 L 23.185 28.857 L 23.185 11.479 C 23.185 10.993 23.941 10.679 24.591 10.881 Z M 44.081 17.803 L 42.325 17.803 C 42.188 17.804 42.078 17.916 42.078 18.055 L 42.078 27.616 C 42.078 27.755 42.188 27.868 42.325 27.868 L 44.081 27.868 C 45.095 27.868 45.959 27.636 46.674 27.173 C 47.373 26.729 47.93 26.087 48.276 25.324 C 48.983 23.74 48.983 21.922 48.276 20.338 C 47.929 19.576 47.372 18.935 46.674 18.491 C 45.959 18.032 45.095 17.803 44.081 17.803 Z M 59.3 19.261 C 59.228 19.261 59.163 19.305 59.134 19.371 L 59.125 19.397 L 57.531 25.147 C 57.51 25.22 57.525 25.299 57.57 25.36 C 57.609 25.412 57.666 25.446 57.729 25.455 L 57.761 25.457 L 60.84 25.457 C 60.915 25.458 60.986 25.422 61.031 25.361 C 61.07 25.308 61.086 25.242 61.077 25.178 L 61.07 25.147 L 59.476 19.397 C 59.454 19.317 59.382 19.261 59.3 19.261 Z M 113.556 19.261 C 113.483 19.261 113.419 19.305 113.39 19.371 L 113.381 19.397 L 111.786 25.147 L 111.792 25.147 C 111.772 25.219 111.786 25.297 111.83 25.358 C 111.867 25.41 111.924 25.444 111.985 25.454 L 112.016 25.457 L 115.096 25.457 C 115.17 25.457 115.241 25.421 115.286 25.36 C 115.326 25.308 115.342 25.242 115.333 25.178 L 115.327 25.147 L 113.731 19.397 C 113.709 19.317 113.638 19.261 113.556 19.261 Z M 17.014 4.786 L 17.068 4.804 L 21.16 6.337 C 21.462 6.445 21.655 6.643 21.677 6.868 L 21.679 6.91 L 21.679 17.49 C 21.679 17.976 20.917 18.291 20.267 18.088 L 20.213 18.07 L 16.12 16.537 C 15.82 16.428 15.625 16.225 15.603 16 L 15.601 15.957 L 15.601 5.377 C 15.601 4.896 16.363 4.583 17.014 4.786 Z M 9.434 0.311 L 9.488 0.33 L 13.574 1.862 C 13.875 1.97 14.069 2.174 14.091 2.399 L 14.093 2.441 L 14.093 13.952 C 14.093 14.438 13.337 14.753 12.687 14.55 L 12.633 14.532 L 8.54 12.999 C 8.239 12.891 8.045 12.687 8.024 12.461 L 8.022 12.419 L 8.022 0.902 C 8.022 0.422 8.783 0.109 9.434 0.311 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 639780853,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-40i2vn",
                                                "data-framer-name": "Shopify",
                                                layout: "position",
                                                name: "Shopify",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 138 39"><path d="M 34.794 36.228 L 24.567 38.79 L 0.97 34.678 C 0.97 34.678 3.785 12.745 3.893 11.973 C 4.035 10.952 4.069 10.918 5.144 10.579 C 5.175 10.57 6.667 10.106 8.799 9.44 C 9.028 7.799 9.828 5.676 10.885 3.989 C 12.384 1.589 14.231 0.238 16.088 0.185 C 17.049 0.157 17.853 0.484 18.48 1.16 C 18.526 1.206 18.566 1.259 18.61 1.309 C 18.712 1.3 18.81 1.29 18.909 1.29 L 18.916 1.29 C 20.352 1.294 21.542 2.118 22.355 3.681 C 22.608 4.164 22.784 4.646 22.904 5.038 C 23.621 4.814 24.048 4.68 24.051 4.68 C 24.224 4.63 24.663 4.562 24.888 4.789 C 25.114 5.016 27.394 7.248 27.394 7.248 C 27.394 7.248 30.122 7.289 30.261 7.301 C 30.404 7.314 30.57 7.419 30.598 7.616 C 30.623 7.812 34.797 36.231 34.794 36.228 Z M 19.323 2.579 C 19.762 3.715 19.876 5.035 19.889 5.981 C 20.559 5.77 21.177 5.577 21.721 5.409 C 21.428 4.45 20.735 2.844 19.323 2.579 Z M 18.044 2.725 C 17.497 2.953 17.037 3.351 16.706 3.706 C 15.82 4.662 15.096 6.125 14.716 7.594 C 16.07 7.17 17.42 6.75 18.656 6.364 C 18.668 5.331 18.557 3.802 18.044 2.725 Z M 10.122 9.023 C 11.132 8.708 12.232 8.366 13.357 8.014 C 13.718 6.106 14.621 4.126 15.801 2.853 C 16.258 2.361 16.743 1.985 17.244 1.723 C 16.932 1.515 16.564 1.418 16.128 1.427 C 13.261 1.511 10.761 6.022 10.122 9.023 Z M 15.884 12.207 C 10.69 12.537 8.336 16.197 8.561 19.808 C 8.83 24.098 13.088 23.945 13.252 26.557 C 13.289 27.189 12.9 28.082 11.812 28.15 C 10.143 28.259 8.061 26.675 8.061 26.675 L 7.264 30.09 C 7.264 30.09 9.334 32.325 13.091 32.085 C 16.221 31.886 18.396 29.361 18.165 25.673 C 17.871 20.985 12.643 20.546 12.516 18.544 C 12.495 18.177 12.52 16.714 14.821 16.568 C 16.391 16.468 17.717 17.075 17.717 17.075 L 18.903 12.599 C 18.903 12.599 17.877 12.086 15.884 12.207 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 46.798 17.95 C 45.612 17.302 45.003 16.755 45.003 16.004 C 45.003 15.049 45.85 14.436 47.172 14.436 C 48.711 14.436 50.086 15.083 50.086 15.083 L 51.17 11.74 C 51.17 11.74 50.172 10.956 47.243 10.956 C 43.161 10.956 40.334 13.309 40.334 16.621 C 40.334 18.498 41.654 19.93 43.415 20.954 C 44.836 21.772 45.346 22.351 45.346 23.204 C 45.346 24.091 44.635 24.807 43.313 24.807 C 41.345 24.807 39.485 23.783 39.485 23.783 L 38.332 27.126 C 38.332 27.126 40.05 28.287 42.939 28.287 C 47.138 28.287 50.154 26.205 50.154 22.454 C 50.151 20.44 48.627 19.008 46.798 17.95 Z M 63.53 10.921 C 61.463 10.921 59.837 11.911 58.586 13.412 L 58.518 13.377 L 60.313 3.927 L 55.638 3.927 L 51.099 27.982 L 55.774 27.982 L 57.331 19.758 C 57.94 16.655 59.531 14.744 61.024 14.744 C 62.074 14.744 62.479 15.46 62.479 16.484 C 62.479 17.131 62.411 17.916 62.275 18.566 L 60.514 27.982 L 65.189 27.982 L 67.018 18.258 C 67.222 17.234 67.358 16.008 67.358 15.186 C 67.355 12.524 65.967 10.921 63.53 10.921 Z M 77.922 10.921 C 72.299 10.921 68.575 16.039 68.575 21.738 C 68.575 25.389 70.809 28.322 75.011 28.322 C 80.533 28.322 84.256 23.341 84.256 17.505 C 84.256 14.127 82.291 10.921 77.922 10.921 Z M 75.62 24.705 C 74.029 24.705 73.352 23.341 73.352 21.635 C 73.352 18.94 74.74 14.538 77.279 14.538 C 78.939 14.538 79.479 15.97 79.479 17.371 C 79.482 20.269 78.092 24.705 75.62 24.705 Z M 96.211 10.921 C 93.056 10.921 91.267 13.72 91.267 13.72 L 91.199 13.72 L 91.471 11.195 L 87.34 11.195 C 87.136 12.901 86.765 15.494 86.391 17.439 L 83.141 34.669 L 87.816 34.669 L 89.101 27.708 L 89.203 27.708 C 89.203 27.708 90.164 28.322 91.947 28.322 C 97.434 28.322 101.025 22.656 101.025 16.926 C 101.022 13.754 99.634 10.921 96.211 10.921 Z M 91.743 24.773 C 90.529 24.773 89.812 24.091 89.812 24.091 L 90.59 19.69 C 91.131 16.755 92.657 14.812 94.283 14.812 C 95.704 14.812 96.146 16.141 96.146 17.405 C 96.146 20.44 94.351 24.773 91.743 24.773 Z M 107.693 4.167 C 106.203 4.167 105.017 5.362 105.017 6.897 C 105.017 8.294 105.897 9.25 107.217 9.25 L 107.285 9.25 C 108.74 9.25 109.995 8.26 110.029 6.52 C 110.032 5.157 109.117 4.167 107.693 4.167 Z M 101.158 27.982 L 105.833 27.982 L 109.015 11.298 L 104.306 11.298 Z M 120.902 11.264 L 117.651 11.264 L 117.821 10.479 C 118.093 8.876 119.042 7.441 120.599 7.441 C 121.43 7.441 122.088 7.681 122.088 7.681 L 123.003 3.995 C 123.003 3.995 122.19 3.585 120.463 3.585 C 118.804 3.585 117.144 4.061 115.89 5.153 C 114.299 6.517 113.554 8.496 113.18 10.476 L 113.044 11.261 L 110.875 11.261 L 110.198 14.809 L 112.368 14.809 L 109.896 27.979 L 114.571 27.979 L 117.042 14.809 L 120.259 14.809 Z M 132.146 11.298 C 132.146 11.298 129.223 18.713 127.912 22.762 L 127.844 22.762 C 127.755 21.458 126.692 11.298 126.692 11.298 L 121.782 11.298 L 124.594 26.619 C 124.662 26.961 124.628 27.164 124.492 27.403 C 123.951 28.462 123.037 29.486 121.952 30.236 C 121.072 30.883 120.089 31.294 119.31 31.568 L 120.596 35.562 C 121.544 35.356 123.509 34.572 125.169 33.003 C 127.304 30.989 129.266 27.886 131.299 23.656 L 137.021 11.304 L 132.146 11.304 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 1517073173,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-8fbtn0",
                                                "data-framer-name": "Google",
                                                layout: "position",
                                                name: "Google",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 105 34"><path d="M 26.408 12.552 L 13.887 12.552 L 13.887 16.188 L 22.767 16.188 C 22.327 21.278 17.994 23.462 13.902 23.462 C 12.605 23.468 11.321 23.221 10.123 22.735 C 8.925 22.249 7.839 21.535 6.926 20.634 C 6.013 19.733 5.293 18.662 4.808 17.486 C 4.323 16.309 4.082 15.05 4.099 13.781 C 4.099 8.276 8.454 4.038 13.914 4.038 C 18.126 4.038 20.608 6.666 20.608 6.666 L 23.208 4.03 C 23.208 4.03 19.868 0.391 13.778 0.391 C 6.022 0.391 0.023 6.798 0.023 13.717 C 0.023 20.497 5.666 27.108 13.974 27.108 C 21.281 27.108 26.631 22.208 26.631 14.964 C 26.631 13.435 26.404 12.552 26.404 12.552 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 36.665 9.918 C 31.527 9.918 27.845 13.85 27.845 18.433 C 27.845 23.086 31.415 27.091 36.725 27.091 C 41.532 27.091 45.469 23.496 45.469 18.533 C 45.469 12.856 40.889 9.917 36.665 9.917 Z M 36.715 13.291 C 39.241 13.291 41.636 15.29 41.636 18.512 C 41.636 21.663 39.251 23.721 36.703 23.721 C 33.903 23.721 31.703 21.526 31.703 18.486 C 31.703 15.511 33.883 13.291 36.723 13.291 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 55.847 9.918 C 50.709 9.918 47.027 13.85 47.027 18.433 C 47.027 23.086 50.597 27.091 55.907 27.091 C 60.714 27.091 64.651 23.496 64.651 18.533 C 64.651 12.856 60.071 9.917 55.847 9.917 Z M 55.897 13.291 C 58.424 13.291 60.818 15.29 60.818 18.512 C 60.818 21.663 58.434 23.721 55.885 23.721 C 53.085 23.721 50.885 21.526 50.885 18.486 C 50.885 15.511 53.065 13.291 55.906 13.291 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 74.662 9.928 C 69.946 9.928 66.239 13.97 66.239 18.508 C 66.239 23.676 70.537 27.103 74.58 27.103 C 77.08 27.103 78.41 26.131 79.38 25.017 L 79.38 26.71 C 79.38 29.673 77.542 31.447 74.768 31.447 C 72.088 31.447 70.744 29.496 70.268 28.39 L 66.895 29.761 C 68.091 32.237 70.5 34.818 74.796 34.818 C 79.497 34.818 83.059 31.928 83.059 25.865 L 83.059 10.443 L 79.394 10.443 L 79.394 11.898 C 78.264 10.704 76.716 9.928 74.664 9.928 Z M 75.002 13.295 C 77.314 13.295 79.688 15.227 79.688 18.526 C 79.688 21.881 77.318 23.728 74.951 23.728 C 72.437 23.728 70.098 21.732 70.098 18.558 C 70.098 15.261 72.528 13.295 75.002 13.295 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 99.436 9.907 C 94.987 9.907 91.252 13.372 91.252 18.481 C 91.252 23.89 95.416 27.098 99.852 27.098 C 103.565 27.098 105.853 25.111 107.203 23.329 L 104.17 21.354 C 103.383 22.548 102.066 23.718 99.872 23.718 C 97.406 23.718 96.272 22.396 95.568 21.114 L 107.332 16.338 L 106.732 14.938 C 105.596 12.198 102.944 9.907 99.436 9.907 Z M 99.588 13.21 C 101.192 13.21 102.345 14.044 102.835 15.044 L 94.978 18.257 C 94.638 15.769 97.049 13.21 99.579 13.21 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 85.635 26.588 L 89.499 26.588 L 89.499 1.28 L 85.635 1.28 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2161057588,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-uvcmr2",
                                                "data-framer-name": "Asana",
                                                layout: "position",
                                                name: "Asana",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 137 28"><path d="M 133.181 21.27 C 133.264 22.225 134.016 23.44 135.317 23.44 L 136.079 23.44 C 136.374 23.44 136.616 23.194 136.616 22.894 L 136.616 5.869 L 136.612 5.869 C 136.597 5.582 136.364 5.352 136.079 5.352 L 133.719 5.352 C 133.434 5.352 133.2 5.582 133.185 5.869 L 133.181 5.869 L 133.181 7.252 C 131.736 5.441 129.456 4.689 127.171 4.689 C 121.975 4.689 117.763 8.973 117.763 14.259 C 117.763 19.545 121.975 23.83 127.171 23.83 L 127.171 23.831 C 129.456 23.831 131.948 22.929 133.181 21.268 Z M 127.18 20.481 C 123.876 20.481 121.196 17.696 121.196 14.259 C 121.196 10.824 123.876 8.038 127.18 8.038 C 130.484 8.038 133.163 10.824 133.163 14.259 C 133.163 17.696 130.484 20.481 127.18 20.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 114.78 21.855 L 114.778 13.046 L 114.779 13.046 C 114.779 8.08 111.699 4.73 106.789 4.73 C 104.445 4.73 102.522 6.109 101.844 7.293 C 101.698 6.367 101.214 5.393 99.715 5.393 L 98.951 5.393 C 98.655 5.393 98.414 5.639 98.414 5.94 L 98.414 21.312 C 98.414 21.313 98.414 21.314 98.414 21.315 L 98.414 22.966 L 98.417 22.966 C 98.433 23.252 98.666 23.482 98.951 23.482 L 101.311 23.482 C 101.347 23.482 101.382 23.478 101.416 23.471 C 101.432 23.468 101.447 23.462 101.462 23.457 C 101.479 23.452 101.497 23.448 101.514 23.441 C 101.536 23.432 101.555 23.42 101.574 23.409 C 101.584 23.403 101.594 23.399 101.603 23.392 C 101.626 23.377 101.648 23.359 101.669 23.34 C 101.672 23.336 101.676 23.334 101.68 23.331 C 101.703 23.307 101.724 23.282 101.744 23.255 C 101.744 23.255 101.744 23.255 101.744 23.255 C 101.803 23.173 101.839 23.073 101.845 22.966 L 101.848 22.966 L 101.848 12.909 C 101.848 10.242 103.973 8.08 106.595 8.08 C 109.217 8.08 111.343 10.242 111.343 12.909 L 111.345 21.315 L 111.345 21.312 C 111.345 21.32 111.346 21.327 111.346 21.335 L 111.346 22.966 L 111.35 22.966 C 111.365 23.252 111.598 23.482 111.883 23.482 L 114.244 23.482 C 114.28 23.482 114.315 23.478 114.349 23.471 C 114.363 23.468 114.376 23.463 114.389 23.459 C 114.409 23.453 114.428 23.448 114.447 23.441 C 114.467 23.433 114.484 23.421 114.502 23.411 C 114.513 23.405 114.525 23.4 114.536 23.392 C 114.557 23.378 114.578 23.36 114.597 23.343 C 114.602 23.338 114.608 23.335 114.612 23.33 C 114.635 23.308 114.655 23.284 114.673 23.26 C 114.674 23.258 114.676 23.256 114.677 23.254 C 114.735 23.173 114.77 23.074 114.777 22.967 C 114.777 22.967 114.777 22.966 114.777 22.966 L 114.781 22.966 L 114.781 21.855 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 90.205 21.27 C 90.287 22.225 91.038 23.44 92.339 23.44 L 93.101 23.44 C 93.396 23.44 93.638 23.194 93.638 22.894 L 93.638 5.869 L 93.635 5.869 C 93.62 5.582 93.386 5.352 93.101 5.352 L 90.742 5.352 C 90.456 5.352 90.224 5.582 90.208 5.869 L 90.205 5.869 L 90.205 7.252 C 88.759 5.441 86.48 4.689 84.193 4.689 C 78.998 4.689 74.786 8.973 74.786 14.259 C 74.786 19.545 78.998 23.83 84.193 23.83 L 84.193 23.831 C 86.48 23.831 88.97 22.929 90.204 21.268 Z M 84.203 20.481 C 80.898 20.481 78.22 17.696 78.22 14.259 C 78.22 10.824 80.898 8.038 84.203 8.038 C 87.507 8.038 90.186 10.824 90.186 14.259 C 90.186 17.696 87.507 20.481 84.203 20.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 60.831 18.831 C 62.406 19.942 64.126 20.481 65.778 20.481 C 67.352 20.481 68.98 19.651 68.98 18.206 C 68.98 16.276 65.434 15.976 63.205 15.206 C 60.977 14.435 59.058 12.843 59.058 10.264 C 59.058 6.318 62.514 4.688 65.74 4.688 C 67.784 4.688 69.893 5.374 71.26 6.356 C 71.731 6.719 71.444 7.136 71.444 7.136 L 70.139 9.032 C 69.992 9.246 69.736 9.43 69.368 9.199 C 68.999 8.968 67.708 8.038 65.74 8.038 C 63.772 8.038 62.586 8.963 62.586 10.109 C 62.586 11.483 64.127 11.915 65.932 12.384 C 69.077 13.246 72.508 14.283 72.508 18.206 C 72.508 21.682 69.311 23.831 65.778 23.831 C 63.101 23.831 60.821 23.054 58.909 21.627 C 58.511 21.222 58.789 20.845 58.789 20.845 L 60.088 18.959 C 60.352 18.606 60.685 18.729 60.831 18.831 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 51.76 21.27 C 51.842 22.225 52.593 23.44 53.895 23.44 L 54.657 23.44 C 54.952 23.44 55.194 23.194 55.194 22.894 L 55.194 5.869 L 55.19 5.869 C 55.175 5.582 54.942 5.352 54.657 5.352 L 52.297 5.352 C 52.012 5.352 51.778 5.582 51.762 5.869 L 51.76 5.869 L 51.76 7.252 C 50.314 5.441 48.034 4.689 45.749 4.689 C 40.553 4.689 36.341 8.973 36.341 14.259 C 36.341 19.545 40.553 23.83 45.749 23.83 L 45.749 23.831 C 48.034 23.831 50.526 22.929 51.759 21.268 Z M 45.758 20.481 C 42.453 20.481 39.775 17.696 39.775 14.259 C 39.775 10.824 42.453 8.038 45.758 8.038 C 49.062 8.038 51.741 10.824 51.741 14.259 C 51.741 17.696 49.062 20.481 45.758 20.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 23.152 14.91 C 19.655 14.91 16.821 17.792 16.821 21.346 C 16.821 24.9 19.655 27.782 23.152 27.782 C 26.648 27.782 29.483 24.9 29.483 21.346 C 29.483 17.792 26.648 14.91 23.152 14.91 Z M 6.703 14.911 C 3.207 14.911 0.372 17.792 0.372 21.346 C 0.372 24.9 3.207 27.782 6.703 27.782 C 10.2 27.782 13.035 24.9 13.035 21.346 C 13.035 17.792 10.2 14.911 6.703 14.911 Z M 21.258 6.866 C 21.258 10.42 18.424 13.302 14.928 13.302 C 11.431 13.302 8.597 10.42 8.597 6.866 C 8.597 3.312 11.431 0.43 14.928 0.43 C 18.424 0.43 21.258 3.312 21.258 6.866 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2367042156,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1kst4a5",
                                                "data-framer-name": "Lululemon",
                                                layout: "position",
                                                name: "Lululemon",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151 29"><path d="M 41.572 23.302 L 38.541 23.302 L 38.541 3.858 L 41.577 3.858 Z M 56.556 23.302 L 53.503 23.302 L 53.503 22.046 C 52.579 23.049 51.265 23.614 49.89 23.599 C 46.826 23.599 45.157 21.597 45.157 18.664 L 45.157 10.006 L 48.194 10.006 L 48.194 18.123 C 48.194 19.747 48.984 20.829 50.714 20.829 C 52.035 20.853 53.196 19.972 53.509 18.707 L 53.509 10.022 L 56.556 10.022 Z M 63.338 23.302 L 60.301 23.302 L 60.301 3.858 L 63.338 3.858 Z M 78.3 23.302 L 75.264 23.302 L 75.264 22.046 C 74.34 23.049 73.025 23.614 71.651 23.599 C 68.587 23.599 66.918 21.597 66.918 18.664 L 66.918 10.006 L 69.954 10.006 L 69.954 18.123 C 69.954 19.747 70.745 20.829 72.475 20.829 C 73.795 20.853 74.956 19.972 75.269 18.707 L 75.269 10.022 L 78.306 10.022 Z M 85.109 23.302 L 82.073 23.302 L 82.073 3.858 L 85.109 3.858 Z M 99.973 19.173 C 99.517 21.803 97.546 23.599 94.295 23.599 C 90.534 23.599 87.92 20.786 87.92 16.689 C 87.92 12.712 90.562 9.719 94.235 9.719 C 98.029 9.719 100.094 12.381 100.094 16.267 L 100.094 17.349 L 90.897 17.349 C 90.99 19.682 92.352 21.089 94.295 21.089 C 95.75 21.089 96.843 20.461 97.178 19.173 Z M 90.99 15.152 L 97.09 15.152 C 97.063 13.529 96.118 12.219 94.268 12.219 C 92.599 12.235 91.352 13.253 90.99 15.152 Z M 116.847 9.741 C 119.592 9.741 121.239 11.656 121.239 14.676 L 121.239 23.334 L 118.203 23.334 L 118.203 15.152 C 118.203 13.529 117.473 12.446 116.006 12.446 C 114.819 12.423 113.796 13.266 113.607 14.422 L 113.607 23.302 L 110.532 23.302 L 110.532 15.152 C 110.532 13.529 109.802 12.446 108.336 12.446 C 107.148 12.423 106.125 13.266 105.936 14.422 L 105.936 23.302 L 102.9 23.302 L 102.9 10.022 L 105.936 10.022 L 105.936 11.104 C 106.777 10.171 108.005 9.669 109.269 9.741 C 110.674 9.725 111.999 10.383 112.822 11.505 C 113.811 10.331 115.299 9.679 116.847 9.741 Z M 130.261 23.599 C 126.467 23.599 123.858 20.726 123.858 16.662 C 123.858 12.598 126.467 9.741 130.261 9.741 C 134.055 9.741 136.663 12.614 136.663 16.678 C 136.663 20.742 134.055 23.599 130.261 23.599 Z M 130.261 12.295 C 128.064 12.295 126.895 14.151 126.895 16.662 C 126.895 19.173 128.081 21.029 130.261 21.029 C 132.441 21.029 133.632 19.173 133.632 16.662 C 133.632 14.151 132.446 12.295 130.261 12.295 Z M 139.469 10.022 L 142.506 10.022 L 142.506 11.278 C 143.449 10.275 144.781 9.716 146.168 9.741 C 149.232 9.741 150.934 11.743 150.934 14.676 L 150.934 23.334 L 147.898 23.334 L 147.898 15.152 C 147.898 13.529 147.079 12.446 145.35 12.446 C 144.023 12.421 142.854 13.3 142.528 14.568 L 142.528 23.302 L 139.469 23.302 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path><path d="M 14.474 0 C 18.314 -0.001 21.997 1.501 24.712 4.176 C 27.428 6.851 28.954 10.481 28.954 14.265 C 28.954 22.142 22.474 28.528 14.481 28.529 C 6.488 28.53 0.008 22.146 0.005 14.268 C 0.003 6.391 6.481 0.003 14.474 0 Z M 24.583 20.602 C 23.804 21.015 22.945 21.262 22.062 21.327 C 21.595 21.324 21.139 21.18 20.756 20.915 C 18.411 19.379 19.213 17.539 20.811 14.681 C 21.543 13.512 22.115 12.253 22.513 10.937 C 22.848 9.551 23.15 7.533 21.931 6.007 C 21.248 5.228 20.349 4.663 19.344 4.383 C 17.865 3.953 16.329 3.743 14.787 3.761 L 14.178 3.761 C 12.635 3.744 11.099 3.953 9.62 4.383 C 8.615 4.663 7.716 5.228 7.034 6.007 C 5.815 7.533 6.117 9.551 6.457 10.937 C 6.848 12.253 7.415 13.512 8.143 14.681 C 9.741 17.533 10.543 19.379 8.198 20.915 C 7.815 21.181 7.359 21.324 6.891 21.327 C 6.016 21.259 5.165 21.012 4.393 20.602 L 4.53 20.84 C 5.661 22.55 7.138 23.459 8.785 23.459 C 9.573 23.437 10.348 23.253 11.059 22.918 C 11.925 22.523 12.643 21.87 13.112 21.051 C 13.59 20.286 13.784 19.381 13.661 18.491 C 13.393 17.54 13.067 16.605 12.684 15.693 C 11.531 12.749 9.939 8.729 11.317 6.764 C 11.866 5.936 12.926 5.531 14.474 5.525 C 16.022 5.52 17.06 5.936 17.631 6.764 C 18.993 8.729 17.417 12.749 16.264 15.688 C 15.875 16.607 15.544 17.549 15.27 18.507 C 15.146 19.399 15.34 20.306 15.819 21.072 C 16.288 21.893 17.006 22.548 17.873 22.945 C 18.584 23.279 19.358 23.464 20.146 23.486 C 21.793 23.486 23.287 22.577 24.451 20.856 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2626323207,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-fucwkv",
                                                "data-framer-name": "Volta",
                                                layout: "position",
                                                name: "Volta",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 130 78"><path d="M 85.756 65.419 C 84.041 64.263 82.028 63.634 79.974 63.634 L 66.276 63.634 C 64.621 62.255 63.245 60.531 62.268 58.522 L 33.676 0.324 C 33.138 0.912 32.62 1.52 32.101 2.109 L 47.275 32.983 L 30.347 4.34 C 29.868 4.989 29.39 5.638 28.951 6.287 L 46.218 35.539 L 27.396 8.641 C 26.977 9.33 26.558 10.04 26.179 10.73 L 45.38 38.136 L 24.883 13.266 C 24.525 13.996 24.186 14.746 23.867 15.497 L 44.742 40.854 L 22.83 18.134 C 22.551 18.905 22.271 19.696 22.032 20.487 L 44.304 43.592 L 21.255 23.165 C 21.035 23.976 20.856 24.788 20.676 25.619 L 44.064 46.331 L 20.178 28.317 C 20.038 29.149 19.939 30.001 19.839 30.833 L 44.064 49.09 L 19.6 33.531 C 19.54 34.383 19.5 35.235 19.5 36.087 L 44.264 51.828 L 19.5 38.744 C 19.52 39.616 19.56 40.468 19.62 41.32 L 44.643 54.546 L 19.879 43.897 C 19.979 44.769 20.098 45.621 20.238 46.473 L 45.241 57.224 L 20.696 48.948 C 20.876 49.8 21.075 50.652 21.294 51.504 L 46.038 59.841 L 21.952 53.836 C 22.212 54.688 22.491 55.52 22.77 56.332 L 47.015 62.377 L 23.607 58.522 C 23.946 59.354 24.285 60.165 24.664 60.957 L 48.192 64.831 L 25.661 62.985 C 26.08 63.797 26.518 64.567 26.977 65.338 L 49.268 67.164 L 5.383 67.164 L 5.383 69.395 L 95.905 69.395 L 86.992 66.251 Z M 75.986 67.164 C 73.833 67.164 71.739 66.697 69.845 65.845 L 79.954 65.845 C 81.529 65.845 83.064 66.292 84.4 67.164 Z M 75.468 51.26 L 82.048 33.794 L 78.718 33.794 L 73.972 46.371 L 69.227 33.794 L 65.897 33.794 L 72.477 51.26 Z M 89.325 33.531 C 84.56 33.531 81.37 37.162 81.37 42.598 C 81.37 48.015 84.56 51.666 89.325 51.666 C 94.09 51.666 97.281 48.035 97.281 42.598 C 97.281 37.162 94.09 33.531 89.325 33.531 Z M 89.325 48.481 C 86.294 48.481 84.48 46.27 84.48 42.578 C 84.48 38.886 86.294 36.675 89.325 36.675 C 92.356 36.675 94.17 38.886 94.17 42.578 C 94.17 46.29 92.356 48.481 89.325 48.481 Z M 98.956 51.26 L 102.066 51.26 L 102.066 28.784 L 98.956 28.784 Z M 119.871 33.815 L 109.005 33.815 L 109.005 28.784 L 105.874 28.784 L 105.874 33.815 L 103.681 33.815 L 103.681 36.979 L 105.874 36.979 L 105.874 51.26 L 108.985 51.26 L 108.985 36.979 L 119.851 36.979 C 120.968 36.979 121.885 37.912 121.885 39.048 L 121.885 40.083 C 120.788 39.292 119.373 38.846 117.758 38.846 C 113.83 38.846 111.078 41.483 111.078 45.235 C 111.078 48.988 113.83 51.625 117.758 51.625 C 119.373 51.625 120.768 51.179 121.885 50.388 L 121.885 51.24 L 125.015 51.24 L 125.015 39.028 C 125.015 36.168 122.702 33.815 119.871 33.815 Z M 117.778 48.481 C 116.063 48.481 114.209 47.629 114.209 45.256 C 114.209 42.882 116.043 42.03 117.778 42.03 C 119.492 42.03 121.347 42.882 121.347 45.256 C 121.327 47.629 119.492 48.481 117.778 48.481 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2955833818,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-dmjwkq",
                                                "data-framer-name": "Adobe",
                                                layout: "position",
                                                name: "Adobe",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 32"><path d="M 13.324 0 L 0 0 L 0 32.492 Z M 22.7 0 L 36.007 0 L 36.007 32.492 Z M 18.011 11.975 L 26.493 32.492 L 20.929 32.492 L 18.396 25.959 L 12.184 25.959 Z M 57.744 20.664 L 59.316 25.257 C 59.369 25.37 59.447 25.424 59.584 25.424 L 62.607 25.424 C 62.771 25.424 62.798 25.345 62.771 25.175 L 56.529 7.502 C 56.504 7.359 56.478 7.332 56.338 7.332 L 52.589 7.332 C 52.484 7.332 52.424 7.414 52.424 7.527 C 52.371 8.456 52.293 8.741 52.18 9.016 L 46.616 25.148 C 46.591 25.345 46.651 25.424 46.807 25.424 L 49.507 25.424 C 49.671 25.424 49.751 25.37 49.811 25.202 L 51.296 20.662 Z M 52.156 17.66 C 52.971 15.145 54.047 11.925 54.482 10.083 L 54.507 10.083 C 55.044 12.013 56.313 15.838 56.884 17.66 Z M 70.796 25.699 C 72.551 25.702 74.289 25.337 75.9 24.627 C 76.038 24.575 76.064 24.514 76.064 24.378 C 75.999 23.794 75.961 23.207 75.951 22.619 L 75.951 5.979 C 75.951 5.873 75.951 5.821 75.82 5.821 L 72.878 5.821 C 72.767 5.821 72.713 5.873 72.713 6.013 L 72.713 11.653 C 72.328 11.603 71.94 11.576 71.551 11.574 C 66.802 11.574 63.884 14.768 63.884 18.759 C 63.884 23.388 66.88 25.699 70.796 25.699 Z M 72.713 22.617 C 72.227 22.776 71.689 22.839 71.142 22.839 C 68.989 22.839 67.227 21.6 67.227 18.591 C 67.227 15.926 69.042 14.354 71.447 14.354 C 71.931 14.354 72.358 14.406 72.713 14.546 Z M 85.451 11.574 C 81.398 11.574 78.889 14.741 78.889 18.654 C 78.889 22.148 80.887 25.699 85.391 25.699 C 89.202 25.699 91.876 22.839 91.876 18.564 C 91.876 14.793 89.609 11.574 85.453 11.574 Z M 85.287 14.352 C 87.578 14.352 88.551 16.361 88.551 18.654 C 88.551 21.487 87.118 22.891 85.451 22.891 C 83.396 22.891 82.18 21.131 82.18 18.591 C 82.18 15.981 83.473 14.354 85.287 14.354 Z M 94.918 5.819 C 94.807 5.819 94.727 5.873 94.727 6.013 L 94.727 24.849 C 94.727 24.928 94.804 25.071 94.918 25.098 C 96.229 25.503 97.592 25.706 98.962 25.699 C 102.964 25.699 106.853 23.168 106.853 18.07 C 106.853 14.376 104.371 11.574 100.482 11.574 C 99.648 11.568 98.818 11.699 98.024 11.961 L 97.991 6.041 C 97.991 5.846 97.938 5.819 97.747 5.819 Z M 103.529 18.405 C 103.529 21.459 101.48 22.891 99.267 22.891 C 98.807 22.891 98.4 22.866 98.024 22.751 L 98.024 14.714 C 98.451 14.546 98.962 14.406 99.909 14.406 C 102.044 14.406 103.529 15.786 103.529 18.405 Z M 117.836 19.395 C 119.156 19.395 120.24 19.37 120.613 19.282 C 120.753 19.255 120.804 19.203 120.831 19.087 C 120.909 18.786 120.942 18.158 120.942 17.388 C 120.942 14.768 119.398 11.574 115.404 11.574 C 111.324 11.574 109.06 14.963 109.06 18.786 C 109.06 22.175 110.813 25.696 115.727 25.696 C 117.567 25.696 118.756 25.397 119.78 24.903 C 119.884 24.849 119.936 24.761 119.936 24.602 L 119.936 22.309 C 119.936 22.175 119.858 22.15 119.78 22.203 C 118.758 22.644 117.647 22.866 116.429 22.866 C 113.678 22.866 112.429 21.317 112.349 19.397 Z M 112.349 17.025 C 112.567 15.679 113.4 14.218 115.267 14.218 C 117.324 14.218 117.862 15.981 117.862 16.778 L 117.862 16.998 C 117.749 17.025 117.402 17.025 116.378 17.025 Z M 112.349 17.025" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 498162375,
                                                withExternalLayout: !0
                                            }), e(G, {
                                                className: "framer-1eqrrsj",
                                                "data-framer-name": "Nike",
                                                layout: "position",
                                                name: "Nike",
                                                opacity: 1,
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 116 41"><path d="M 12.553 40.541 C 9.162 40.406 6.388 39.478 4.219 37.755 C 3.805 37.426 2.818 36.439 2.487 36.022 C 1.608 34.916 1.01 33.84 0.611 32.646 C -0.616 28.969 0.015 24.145 2.418 18.85 C 4.475 14.317 7.649 9.822 13.187 3.595 C 14.002 2.679 16.432 -0.001 16.447 -0.001 C 16.453 -0.001 16.321 0.229 16.154 0.508 C 14.714 2.92 13.482 5.761 12.811 8.22 C 11.733 12.167 11.863 15.553 13.192 18.18 C 14.109 19.989 15.68 21.556 17.448 22.422 C 20.542 23.938 25.072 24.063 30.604 22.789 C 30.984 22.701 49.857 17.691 72.544 11.655 C 95.23 5.619 113.795 0.685 113.797 0.689 C 113.804 0.694 61.091 23.251 33.727 34.953 C 29.393 36.806 28.234 37.274 26.197 37.989 C 20.989 39.818 16.324 40.691 12.553 40.541 Z" fill="var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"></path></svg>',
                                                svgContentId: 2615665162,
                                                withExternalLayout: !0
                                            })],
                                            speed: 80,
                                            style: {height: "100%", width: "100%"},
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        })]
                    }), c("div", {
                        className: "framer-12m9imc",
                        "data-border": !0,
                        "data-framer-name": "ABOUT US",
                        name: "ABOUT US",
                        children: [e("div", {
                            className: "framer-4s4v5y",
                            "data-framer-name": "HEAD",
                            name: "HEAD",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {
                                    ivZn5n4jd: {width: "calc((100vw - 20px) / 2)"},
                                    qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                },
                                children: e(g, {
                                    width: "calc((100vw - 60px) / 2)",
                                    children: e(v, {
                                        className: "framer-rem6r8-container",
                                        children: e(je, {
                                            FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            H7OM7RY2F: "About us",
                                            height: "100%",
                                            id: "a1uWbmTx9",
                                            ige6Om3tR: "\u2B24",
                                            layoutId: "a1uWbmTx9",
                                            style: {width: "100%"},
                                            variant: "AjLrTmY9B",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), c("div", {
                            className: "framer-pnculx",
                            "data-framer-name": "Team Members Wrapper",
                            name: "Team Members Wrapper",
                            children: [e("div", {
                                className: "framer-1njmghe",
                                "data-framer-name": "Left",
                                name: "Left",
                                children: c("div", {
                                    className: "framer-16kk5lq",
                                    "data-framer-name": "Text",
                                    name: "Text",
                                    children: [e(P, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h4", {
                                                className: "framer-styles-preset-dldat8",
                                                "data-styles-preset": "ZBamfng0Y",
                                                children: "Design obsessed duo."
                                            })
                                        }),
                                        className: "framer-ww3jrh",
                                        fonts: ["Inter"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0
                                    }), e(P, {
                                        __fromCanvasComponent: !0,
                                        children: c(h, {
                                            children: [e("p", {
                                                className: "framer-styles-preset-7kw3ld",
                                                "data-styles-preset": "K40Y92M_4",
                                                children: "We know brands, we know design. Our experience spans a combined 30 years."
                                            }), e("p", {
                                                className: "framer-styles-preset-7kw3ld",
                                                "data-styles-preset": "K40Y92M_4",
                                                children: "While we're a small core duo, our network of collaborators runs deep\u2014if we can't build it, we know who can."
                                            })]
                                        }),
                                        className: "framer-24vz5v",
                                        fonts: ["Inter"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0
                                    })]
                                })
                            }), c("div", {
                                className: "framer-1f87ew3", "data-framer-name": "Right", name: "Right", children: [e(qe, {
                                    __framer__animate: {transition: Ft},
                                    __framer__animateOnce: !0,
                                    __framer__enter: Vt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-kwtyu6",
                                    "data-framer-name": "Card Holder",
                                    name: "Card Holder",
                                    style: {transformPerspective: 1200},
                                    children: e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "max((100vw - 30px) / 2, 1px)"},
                                            oPLt7_M7Y: {width: "max((max((100vw - 60px) / 2, 1px) - 36px) / 2, 1px)"},
                                            qEJDbn9wX: {width: "max((max((100vw - 40px) * 0.5649, 1px) - 20px) / 2, 1px)"}
                                        },
                                        children: e(g, {
                                            width: "max((max((100vw - 60px) / 2, 1px) - 60px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-nqz5ee-container",
                                                children: e(Fr, {
                                                    akQxzQBhe: "rgba(0, 0, 0, 0.4)",
                                                    f7exLnvS8: "Co-Founder / Design",
                                                    height: "100%",
                                                    hiLYvj_LA: ne({
                                                        src: "https://framerusercontent.com/images/UwPwt0Z6qAiByDNOpASxwq0iYas.png?scale-down-to=1024",
                                                        srcSet: "https://framerusercontent.com/images/UwPwt0Z6qAiByDNOpASxwq0iYas.png?scale-down-to=512 512w,https://framerusercontent.com/images/UwPwt0Z6qAiByDNOpASxwq0iYas.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/UwPwt0Z6qAiByDNOpASxwq0iYas.png 1142w"
                                                    }, ""),
                                                    id: "aqr9WYvq8",
                                                    layoutId: "aqr9WYvq8",
                                                    style: {height: "100%", width: "100%"},
                                                    width: "100%",
                                                    xORnPh_3Y: "Gavin is a designer who gets a little obsessed with the small details. From pixels to full data visualization, Gavin has been working in design for 18 years to elevate and amplify design that intrigues and illustrates big ideas.",
                                                    z0clLQ8dy: "Gavin Potenza"
                                                })
                                            })
                                        })
                                    })
                                }), e(qe, {
                                    __framer__animate: {transition: Ft},
                                    __framer__animateOnce: !0,
                                    __framer__enter: Vt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-gbh0ez",
                                    "data-framer-name": "Card Holder",
                                    name: "Card Holder",
                                    style: {transformPerspective: 1200},
                                    children: e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "max((100vw - 30px) / 2, 1px)"},
                                            oPLt7_M7Y: {width: "max((max((100vw - 60px) / 2, 1px) - 36px) / 2, 1px)"},
                                            qEJDbn9wX: {width: "max((max((100vw - 40px) * 0.5649, 1px) - 20px) / 2, 1px)"}
                                        },
                                        children: e(g, {
                                            width: "max((max((100vw - 60px) / 2, 1px) - 60px) / 2, 1px)", children: e(v, {
                                                className: "framer-pooinv-container", children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {xORnPh_3Y: "Liz is a brand designer and illustrator with 15 years of experience\u2014 working with companies from Fortune 500 to pre-seed startups, Liz revels in the quest to help every brand find their visual identity."},
                                                        oPLt7_M7Y: {
                                                            hiLYvj_LA: ne({
                                                                positionX: "44.8%",
                                                                positionY: "49.8%",
                                                                src: "https://framerusercontent.com/images/C4jY9ziujGt4PBareVv9ju4JEk.jpg",
                                                                srcSet: "https://framerusercontent.com/images/C4jY9ziujGt4PBareVv9ju4JEk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/C4jY9ziujGt4PBareVv9ju4JEk.jpg 929w"
                                                            }, "Liz Meyer - Brand")
                                                        },
                                                        qEJDbn9wX: {xORnPh_3Y: "Liz is a brand designer and illustrator with 15 years of experience\u2014 working with companies from Fortune 500 to pre-seed startups, Liz revels in the quest to help every brand find their visual identity."}
                                                    },
                                                    children: e(Fr, {
                                                        akQxzQBhe: "rgba(0, 0, 0, 0.4)",
                                                        f7exLnvS8: "Co-Founder / Brand",
                                                        height: "100%",
                                                        hiLYvj_LA: ne({
                                                            positionX: "44.4%",
                                                            positionY: "52.1%",
                                                            src: "https://framerusercontent.com/images/BYGyzE6llsNcu1Xh4mg8BvFqCnQ.png",
                                                            srcSet: "https://framerusercontent.com/images/BYGyzE6llsNcu1Xh4mg8BvFqCnQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/BYGyzE6llsNcu1Xh4mg8BvFqCnQ.png 929w"
                                                        }, "Liz Meyer - Brand"),
                                                        id: "GUz5dBzsL",
                                                        layoutId: "GUz5dBzsL",
                                                        style: {height: "100%", width: "100%"},
                                                        width: "100%",
                                                        xORnPh_3Y: "Liz is a brand designer and illustrator with 15 years of experience\u2014 working with companies from Fortune 500 to pre-seed startups, Liz revels in the quest to help every brand find their visual identity. ",
                                                        z0clLQ8dy: "Liz Meyer"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), c("div", {
                        className: "framer-cpv6oe",
                        "data-border": !0,
                        "data-framer-name": "PROCESS",
                        name: "PROCESS",
                        children: [e("div", {
                            className: "framer-1bf6cq0",
                            "data-framer-name": "HEAD",
                            name: "HEAD",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {
                                    ivZn5n4jd: {width: "calc((100vw - 20px) / 2)"},
                                    qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                },
                                children: e(g, {
                                    width: "calc((100vw - 60px) / 2)",
                                    children: e(v, {
                                        className: "framer-s5j1ry-container",
                                        children: e(je, {
                                            FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            H7OM7RY2F: "Process",
                                            height: "100%",
                                            id: "Q0GGKmbjX",
                                            ige6Om3tR: "\u2B24",
                                            layoutId: "Q0GGKmbjX",
                                            style: {width: "100%"},
                                            variant: "AjLrTmY9B",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), c("div", {
                            className: "framer-7ze1hq",
                            "data-framer-name": "VISUAL",
                            name: "VISUAL",
                            children: [q() && e(g, {
                                children: e(v, {
                                    className: "framer-q2ugfr-container hidden-72rtr7 hidden-3v2uua hidden-7gi421",
                                    children: e(Se, {
                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: "100%",
                                        id: "TnS5wag2O",
                                        isMixedBorderRadius: !1,
                                        layoutId: "TnS5wag2O",
                                        loop: !0,
                                        muted: !0,
                                        objectFit: "cover",
                                        playing: !0,
                                        posterEnabled: !1,
                                        srcFile: "https://framerusercontent.com/assets/cAfXkww6hB2YYXbFNmeZmMWv80.mp4",
                                        srcType: "Upload",
                                        srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                        startTime: 0,
                                        style: {width: "100%"},
                                        topLeftRadius: 0,
                                        topRightRadius: 0,
                                        volume: 25,
                                        width: "100%"
                                    })
                                })
                            }), M() && e(g, {
                                children: e(v, {
                                    className: "framer-1q0cjsa-container hidden-3v2uua hidden-qs7kru",
                                    children: e(l, {
                                        breakpoint: t,
                                        overrides: {ivZn5n4jd: {objectFit: "contain"}},
                                        children: e(Se, {
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderRadius: 0,
                                            bottomLeftRadius: 0,
                                            bottomRightRadius: 0,
                                            controls: !1,
                                            height: "100%",
                                            id: "ezMEL_lq4",
                                            isMixedBorderRadius: !1,
                                            layoutId: "ezMEL_lq4",
                                            loop: !0,
                                            muted: !0,
                                            objectFit: "cover",
                                            playing: !0,
                                            posterEnabled: !1,
                                            srcFile: "https://framerusercontent.com/assets/cAfXkww6hB2YYXbFNmeZmMWv80.mp4",
                                            srcType: "Upload",
                                            srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                            startTime: 0,
                                            style: {width: "100%"},
                                            topLeftRadius: 0,
                                            topRightRadius: 0,
                                            volume: 25,
                                            width: "100%"
                                        })
                                    })
                                })
                            }), j() && e(g, {
                                children: e(v, {
                                    className: "framer-6twcid-container hidden-72rtr7 hidden-7gi421 hidden-qs7kru",
                                    children: e(Se, {
                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: "100%",
                                        id: "dddbrsNmI",
                                        isMixedBorderRadius: !1,
                                        layoutId: "dddbrsNmI",
                                        loop: !0,
                                        muted: !0,
                                        objectFit: "cover",
                                        playing: !0,
                                        posterEnabled: !1,
                                        srcFile: "https://framerusercontent.com/assets/cAfXkww6hB2YYXbFNmeZmMWv80.mp4",
                                        srcType: "Upload",
                                        srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                        startTime: 0,
                                        style: {width: "100%"},
                                        topLeftRadius: 0,
                                        topRightRadius: 0,
                                        volume: 25,
                                        width: "100%"
                                    })
                                })
                            })]
                        }), c("div", {
                            className: "framer-1ep8wbw",
                            "data-framer-name": "PROCESS",
                            name: "PROCESS",
                            children: [e("div", {
                                className: "framer-1gtzrnb",
                                "data-framer-name": "Statement",
                                name: "Statement",
                                children: e(l, {
                                    breakpoint: t,
                                    overrides: {
                                        oPLt7_M7Y: {
                                            children: e(h, {
                                                children: c("h4", {
                                                    className: "framer-styles-preset-dldat8",
                                                    "data-styles-preset": "ZBamfng0Y",
                                                    children: ["A creative studio from ", e("br", {}), "the mythical Lands of Data."]
                                                })
                                            })
                                        }
                                    },
                                    children: e(P, {
                                        __fromCanvasComponent: !0,
                                        children: e(h, {
                                            children: e("h4", {
                                                className: "framer-styles-preset-dldat8",
                                                "data-styles-preset": "ZBamfng0Y",
                                                children: "Big vibes, small core."
                                            })
                                        }),
                                        className: "framer-gpouyx",
                                        fonts: ["Inter"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0
                                    })
                                })
                            }), c("div", {
                                className: "framer-1phqgvb", "data-framer-name": "Rows", name: "Rows", children: [c("div", {
                                    className: "framer-1sl7ox6",
                                    "data-border": !0,
                                    "data-framer-name": "Row 1",
                                    name: "Row 1",
                                    children: [e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 40px)"},
                                            qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                        },
                                        children: e(g, {
                                            width: "max(((100vw - 60px) / 2 - 12px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-ja3o0r-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {variant: "SxXm30V8Q"},
                                                        qEJDbn9wX: {variant: "H8T6W62KG"}
                                                    },
                                                    children: e(Ee, {
                                                        height: "100%",
                                                        id: "PTRK1tipD",
                                                        JmVoBIitG: "1",
                                                        layoutId: "PTRK1tipD",
                                                        ol_gXehAe: "During the pre-project planning phase, we take the time to learn all about a prospective client and to prepare a detailed workback schedule which lays out a complete roadmap of our project.",
                                                        Q_Z8VmoSW: "PLANNING",
                                                        style: {width: "100%"},
                                                        variant: "zN0Fp9wV7",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 40px)"},
                                            qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                        },
                                        children: e(g, {
                                            width: "max(((100vw - 60px) / 2 - 12px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-89zh4k-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {variant: "SxXm30V8Q"},
                                                        qEJDbn9wX: {variant: "H8T6W62KG"}
                                                    },
                                                    children: e(Ee, {
                                                        height: "100%",
                                                        id: "gbcmYvoSN",
                                                        JmVoBIitG: "2",
                                                        layoutId: "gbcmYvoSN",
                                                        ol_gXehAe: "In this first phase of the project, we perform a visual audit of the client\u2019s current and past visual design work, and reflect on how these elements connect. ",
                                                        Q_Z8VmoSW: "DISCOVERY",
                                                        style: {width: "100%"},
                                                        variant: "zN0Fp9wV7",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                }), c("div", {
                                    className: "framer-kg2z14",
                                    "data-border": !0,
                                    "data-framer-name": "Row 2",
                                    name: "Row 2",
                                    children: [e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 40px)"},
                                            qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                        },
                                        children: e(g, {
                                            width: "max(((100vw - 60px) / 2 - 12px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-13jdxa4-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {variant: "SxXm30V8Q"},
                                                        qEJDbn9wX: {variant: "H8T6W62KG"}
                                                    },
                                                    children: e(Ee, {
                                                        height: "100%",
                                                        id: "wJtkroDyp",
                                                        JmVoBIitG: "3",
                                                        layoutId: "wJtkroDyp",
                                                        ol_gXehAe: "Next, we research external visual design references and pull together a moodboard to better explain our vision for the project, and to align with stakeholders on style preferences.",
                                                        Q_Z8VmoSW: "MOODBOARDING",
                                                        style: {width: "100%"},
                                                        variant: "zN0Fp9wV7",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 40px)"},
                                            qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                        },
                                        children: e(g, {
                                            width: "max(((100vw - 60px) / 2 - 12px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-1okvq9h-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {variant: "SxXm30V8Q"},
                                                        qEJDbn9wX: {variant: "H8T6W62KG"}
                                                    },
                                                    children: e(Ee, {
                                                        height: "100%",
                                                        id: "vrTTxzjl3",
                                                        JmVoBIitG: "4",
                                                        layoutId: "vrTTxzjl3",
                                                        ol_gXehAe: "After style approval (or consolidation of several style references), we get to work. In this phase, we design with your brand in mind, pulling from our years of experience in design and create work that is fresh, exciting and brand new. This phase includes 3 distinct sketch options and 2 rounds of revisions.",
                                                        Q_Z8VmoSW: "DESIGN + REFINE",
                                                        style: {width: "100%"},
                                                        variant: "zN0Fp9wV7",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                }), c("div", {
                                    className: "framer-ik2eey",
                                    "data-border": !0,
                                    "data-framer-name": "Row 3",
                                    name: "Row 3",
                                    children: [e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 40px)"},
                                            qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                        },
                                        children: e(g, {
                                            width: "max(((100vw - 60px) / 2 - 12px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-5qkpne-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {variant: "SxXm30V8Q"},
                                                        qEJDbn9wX: {variant: "H8T6W62KG"}
                                                    },
                                                    children: e(Ee, {
                                                        height: "100%",
                                                        id: "ZGz67vv03",
                                                        JmVoBIitG: "5",
                                                        layoutId: "ZGz67vv03",
                                                        ol_gXehAe: "Once the final style is approved and work begins to wrap up, we prepare the final deliverables for delivery. All files are handed over in the manner as described in client\u2019s customized SOW, and we also offer a detailed offboarding document if requested. ",
                                                        Q_Z8VmoSW: "HANDOFF",
                                                        style: {width: "100%"},
                                                        variant: "zN0Fp9wV7",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    }), e(l, {
                                        breakpoint: t,
                                        overrides: {
                                            ivZn5n4jd: {width: "calc(100vw - 40px)"},
                                            qEJDbn9wX: {width: "calc((100vw - 40px) / 2)"}
                                        },
                                        children: e(g, {
                                            width: "max(((100vw - 60px) / 2 - 12px) / 2, 1px)",
                                            children: e(v, {
                                                className: "framer-5rfp8d-container",
                                                children: e(l, {
                                                    breakpoint: t,
                                                    overrides: {
                                                        ivZn5n4jd: {variant: "SxXm30V8Q"},
                                                        qEJDbn9wX: {variant: "H8T6W62KG"}
                                                    },
                                                    children: e(Ee, {
                                                        height: "100%",
                                                        id: "s6SQw7WsU",
                                                        JmVoBIitG: "6",
                                                        layoutId: "s6SQw7WsU",
                                                        ol_gXehAe: "We are always happy to offer retainer services, if ongoing design support is needed.  Rates for this work are flexible, and we\u2019re happy to create a plan that works for all parties, and is highly competitive with the big agencies. ",
                                                        Q_Z8VmoSW: "SUPPORT",
                                                        style: {width: "100%"},
                                                        variant: "zN0Fp9wV7",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    }), c("div", {
                        className: "framer-1ippxii",
                        "data-framer-name": "Newsletter",
                        name: "Newsletter",
                        children: [e("div", {
                            className: "framer-tovmyh",
                            "data-framer-name": "Section-Head",
                            name: "Section-Head",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {
                                    ivZn5n4jd: {width: "max(100vw - 20px, 1px)"},
                                    qEJDbn9wX: {width: "max(100vw - 40px, 1px)"}
                                },
                                children: e(g, {
                                    width: "max(100vw - 60px, 1px)",
                                    children: e(v, {
                                        className: "framer-qm1bwt-container",
                                        children: e(je, {
                                            FrASgcrqe: "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))",
                                            H7OM7RY2F: "Newsletter",
                                            height: "100%",
                                            id: "gOedOK1Og",
                                            ige6Om3tR: "\u2B24",
                                            layoutId: "gOedOK1Og",
                                            style: {width: "100%"},
                                            variant: "AjLrTmY9B",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), c("div", {
                            className: "framer-xa256m",
                            "data-framer-name": "Text",
                            name: "Text",
                            children: [x() && e(P, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                    children: e("p", {
                                        className: "framer-styles-preset-7kw3ld",
                                        "data-styles-preset": "K40Y92M_4",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-0c906f90-a26c-424a-b845-7c5f33f0a3eb, rgb(217, 217, 217))"
                                        },
                                        children: "Sign up for our extremely infrequent newsletter!"
                                    })
                                }),
                                className: "framer-9m98mu hidden-7gi421",
                                fonts: ["Inter"],
                                verticalAlignment: "center",
                                withExternalLayout: !0
                            }), e(P, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                    children: e("p", {
                                        className: "framer-styles-preset-63ckt7",
                                        "data-styles-preset": "Arz7WxDDM",
                                        style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-dde820d5-4982-458b-9d0e-a9d9507dbf7c, rgb(255, 255, 255))"
                                        },
                                        children: "Our newsletter is the best way to keep up with our latest work, and our latest clothing drops. you can expect 3-6 emails per year."
                                    })
                                }),
                                className: "framer-j3cidv",
                                fonts: ["Inter"],
                                verticalAlignment: "center",
                                withExternalLayout: !0
                            })]
                        }), e("div", {
                            className: "framer-1in1jg6", "data-framer-name": "Content", name: "Content", children: e(g, {
                                children: e(v, {
                                    className: "framer-1i96v8o-container",
                                    "data-framer-name": "Subscribe",
                                    name: "Subscribe",
                                    children: e(Nr, {
                                        alignment: "center",
                                        direction: "right",
                                        fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 25,
                                            overflow: !1
                                        },
                                        gap: 12,
                                        height: "100%",
                                        hoverFactor: .1,
                                        id: "HBVmhH6b_",
                                        layoutId: "HBVmhH6b_",
                                        name: "Subscribe",
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        sizingOptions: {heightType: !0, widthType: !0},
                                        slots: [e(g, {
                                            children: e(v, {
                                                className: "framer-z24pdu-container", children: e(ar, {
                                                    borderRadius: 96,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    button: {
                                                        color: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        fill: "var(--token-140c0d26-c6f5-4a43-9526-f24b952c69c7, rgb(252, 116, 221))",
                                                        fontWeight: 600,
                                                        label: "\u2714\uFE0F"
                                                    },
                                                    font: !0,
                                                    fontFamily: "Martian Mono Std xLt",
                                                    fontSize: 18,
                                                    fontWeight: 200,
                                                    gap: 12,
                                                    height: "100%",
                                                    id: "VOJZkgx8m",
                                                    input: {
                                                        color: "var(--token-d85d8d2e-a90b-41e9-8852-32af98456a8d, rgb(17, 18, 18))",
                                                        error: "var(--token-ab3bf83d-47e6-418c-8d83-04f430bdd4f1, rgb(255, 137, 255))",
                                                        fill: "var(--token-8856508d-3cdd-4b9d-93c5-9410ff7516dc, rgb(243, 243, 239))",
                                                        placeholder: "SIGN UP FOR OUR NEWSLETTER",
                                                        placeholderColor: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        value: ""
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "horizontal",
                                                    layoutId: "VOJZkgx8m",
                                                    padding: 6,
                                                    paddingBottom: 48,
                                                    paddingLeft: 36,
                                                    paddingPerSide: !0,
                                                    paddingRight: 36,
                                                    paddingTop: 48,
                                                    style: {width: "100%"},
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
                                                    url: "https://datalands.us5.list-manage.com/subscribe/post?u=8b60ada3fce422484fd1e0e0b&amp;id=51ec3d656b&amp;f_id=006b26eaf0",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(g, {
                                            children: e(v, {
                                                className: "framer-y1ux6w-container", children: e(ar, {
                                                    borderRadius: 96,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    button: {
                                                        color: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        fill: "var(--token-140c0d26-c6f5-4a43-9526-f24b952c69c7, rgb(252, 116, 221))",
                                                        fontWeight: 600,
                                                        label: "\u2714\uFE0F"
                                                    },
                                                    font: !0,
                                                    fontFamily: "Martian Mono Std xLt",
                                                    fontSize: 18,
                                                    fontWeight: 200,
                                                    gap: 12,
                                                    height: "100%",
                                                    id: "TJ0jURV1f",
                                                    input: {
                                                        color: "var(--token-d85d8d2e-a90b-41e9-8852-32af98456a8d, rgb(17, 18, 18))",
                                                        error: "var(--token-ab3bf83d-47e6-418c-8d83-04f430bdd4f1, rgb(255, 137, 255))",
                                                        fill: "var(--token-8856508d-3cdd-4b9d-93c5-9410ff7516dc, rgb(243, 243, 239))",
                                                        placeholder: "IT'S GREAT",
                                                        placeholderColor: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        value: ""
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "horizontal",
                                                    layoutId: "TJ0jURV1f",
                                                    padding: 6,
                                                    paddingBottom: 48,
                                                    paddingLeft: 36,
                                                    paddingPerSide: !0,
                                                    paddingRight: 36,
                                                    paddingTop: 48,
                                                    style: {width: "100%"},
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
                                                    url: "https://datalands.us5.list-manage.com/subscribe/post?u=8b60ada3fce422484fd1e0e0b&amp;id=51ec3d656b&amp;f_id=006b26eaf0",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(g, {
                                            children: e(v, {
                                                className: "framer-byoa3f-container", children: e(ar, {
                                                    borderRadius: 96,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    button: {
                                                        color: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        fill: "var(--token-140c0d26-c6f5-4a43-9526-f24b952c69c7, rgb(252, 116, 221))",
                                                        fontWeight: 600,
                                                        label: "\u2714\uFE0F"
                                                    },
                                                    font: !0,
                                                    fontFamily: "Martian Mono Std xLt",
                                                    fontSize: 18,
                                                    fontWeight: 200,
                                                    gap: 12,
                                                    height: "100%",
                                                    id: "cz5BXyv2W",
                                                    input: {
                                                        color: "var(--token-d85d8d2e-a90b-41e9-8852-32af98456a8d, rgb(17, 18, 18))",
                                                        error: "var(--token-ab3bf83d-47e6-418c-8d83-04f430bdd4f1, rgb(255, 137, 255))",
                                                        fill: "var(--token-8856508d-3cdd-4b9d-93c5-9410ff7516dc, rgb(243, 243, 239))",
                                                        placeholder: "YOUR EMAIL GOES RIGHT HERE BY THE WAY",
                                                        placeholderColor: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        value: ""
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "horizontal",
                                                    layoutId: "cz5BXyv2W",
                                                    padding: 6,
                                                    paddingBottom: 48,
                                                    paddingLeft: 36,
                                                    paddingPerSide: !0,
                                                    paddingRight: 36,
                                                    paddingTop: 48,
                                                    style: {width: "100%"},
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
                                                    url: "https://datalands.us5.list-manage.com/subscribe/post?u=8b60ada3fce422484fd1e0e0b&amp;id=51ec3d656b&amp;f_id=006b26eaf0",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(g, {
                                            children: e(v, {
                                                className: "framer-h2q3cr-container", children: e(ar, {
                                                    borderRadius: 96,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    button: {
                                                        color: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        fill: "var(--token-140c0d26-c6f5-4a43-9526-f24b952c69c7, rgb(252, 116, 221))",
                                                        fontWeight: 600,
                                                        label: "\u2714\uFE0F"
                                                    },
                                                    font: !0,
                                                    fontFamily: "Martian Mono Std xLt",
                                                    fontSize: 18,
                                                    fontWeight: 200,
                                                    gap: 12,
                                                    height: "100%",
                                                    id: "IkkHWmqLC",
                                                    input: {
                                                        color: "var(--token-d85d8d2e-a90b-41e9-8852-32af98456a8d, rgb(17, 18, 18))",
                                                        error: "var(--token-ab3bf83d-47e6-418c-8d83-04f430bdd4f1, rgb(255, 137, 255))",
                                                        fill: "var(--token-8856508d-3cdd-4b9d-93c5-9410ff7516dc, rgb(243, 243, 239))",
                                                        placeholder: ":--)",
                                                        placeholderColor: "var(--token-047f7854-564e-41e1-8aea-b94df4666610, rgb(61, 61, 61))",
                                                        value: ""
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "horizontal",
                                                    layoutId: "IkkHWmqLC",
                                                    padding: 6,
                                                    paddingBottom: 48,
                                                    paddingLeft: 36,
                                                    paddingPerSide: !0,
                                                    paddingRight: 36,
                                                    paddingTop: 48,
                                                    style: {width: "100%"},
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
                                                    url: "https://datalands.us5.list-manage.com/subscribe/post?u=8b60ada3fce422484fd1e0e0b&amp;id=51ec3d656b&amp;f_id=006b26eaf0",
                                                    width: "100%"
                                                })
                                            })
                                        })],
                                        speed: 100,
                                        style: {height: "100%", width: "100%"},
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    }), e(g, {
                        width: "100vw",
                        children: e(v, {
                            className: "framer-il7xrj-container",
                            children: e(l, {
                                breakpoint: t,
                                overrides: {ivZn5n4jd: {variant: "mt31XYL_Q"}, qEJDbn9wX: {variant: "PqkgxzN0r"}},
                                children: e(o1, {
                                    CIKCwTqeQ: "var(--token-e7343ed1-e04b-4450-93e5-a8b014ac981a, rgb(148, 188, 238))",
                                    height: "100%",
                                    id: "VkWl9h7e2",
                                    layoutId: "VkWl9h7e2",
                                    style: {width: "100%"},
                                    variant: "YyQwSl1BQ",
                                    width: "100%"
                                })
                            })
                        })
                    })]
                }), e("div", {className: Me(Et, ...S), id: "overlay"})]
            })
        })
    }),
    Z2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${qr.bodyClassName}-framer-1uUKd { background: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)); }`, ".framer-1uUKd.framer-lux5qc, .framer-1uUKd .framer-lux5qc { display: block; }", ".framer-1uUKd.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }", ".framer-1uUKd .framer-1gw5lgm-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }", ".framer-1uUKd .framer-8r7hn7 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1s60azr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-19sq2uk { flex: none; height: auto; position: relative; white-space: pre; width: 100%; }", ".framer-1uUKd .framer-1xsge8z { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 20px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1tncfu6-container, .framer-1uUKd .framer-1axhh31-container, .framer-1uUKd .framer-ja3o0r-container, .framer-1uUKd .framer-89zh4k-container, .framer-1uUKd .framer-13jdxa4-container, .framer-1uUKd .framer-1okvq9h-container, .framer-1uUKd .framer-5qkpne-container, .framer-1uUKd .framer-5rfp8d-container, .framer-1uUKd .framer-qm1bwt-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-1uUKd .framer-zyik20 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 47px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-zyf7e7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 50%; word-break: break-word; word-wrap: break-word; }", ".framer-1uUKd .framer-1grja8k, .framer-1uUKd .framer-112gjop, .framer-1uUKd .framer-9m98mu { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-1uUKd .framer-1k9ieku { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: hidden; padding: 45px 30px 80px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1tzt9yq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-rjuf0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-1uUKd .framer-sjkpd0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 911px; }", ".framer-1uUKd .framer-3yq6wn-container, .framer-1uUKd .framer-fqzzl8-container { flex: none; height: 600px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1tyryfq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 80%; }", ".framer-1uUKd .framer-hh9uzm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-5u591x, .framer-1uUKd .framer-ww3jrh, .framer-1uUKd .framer-24vz5v, .framer-1uUKd .framer-gpouyx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-1uUKd .framer-urqmsp, .framer-1uUKd .framer-1f100b8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-p6yslu, .framer-1uUKd .framer-134tiz1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-f2ubty-container { flex: none; height: 500px; position: relative; width: 100%; }", ".framer-1uUKd .framer-r3lo3v, .framer-1uUKd .framer-1vk8qu5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-106n3q5, .framer-1uUKd .framer-4q0vwi, .framer-1uUKd .framer-108ye { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-17tily5, .framer-1uUKd .framer-qh7chi, .framer-1uUKd .framer-c3oa8w, .framer-1uUKd .framer-1c1pxqq, .framer-1uUKd .framer-1rbgaf5 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-1uUKd .framer-93jnv2, .framer-1uUKd .framer-1hix2zt { align-content: center; align-items: center; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 398px 0px 27px 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-kcxvpq-container { flex: none; height: 401px; position: relative; width: 100%; }", ".framer-1uUKd .framer-dv86s9, .framer-1uUKd .framer-111kk86 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1mtnqg2, .framer-1uUKd .framer-17cu6kx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-1heno13 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 80px; position: relative; width: 100%; }", ".framer-1uUKd .framer-km39ds { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 66%; }", ".framer-1uUKd .framer-4v34gl, .framer-1uUKd .framer-1bf6cq0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-14btuk4-container { flex: none; height: 548px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1hqfrqc-container { flex: none; height: 450px; position: relative; width: 100%; }", ".framer-1uUKd .framer-fds42v { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 30px 40px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-jmidz4-container, .framer-1uUKd .framer-q2ugfr-container, .framer-1uUKd .framer-1q0cjsa-container, .framer-1uUKd .framer-6twcid-container, .framer-1uUKd .framer-il7xrj-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-1uUKd .framer-e11v2v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 40px 0px 40px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1byiler { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 80%; z-index: 1; }", ".framer-1uUKd .framer-jrt9h-container { flex: 1 0 0px; height: 800px; position: relative; width: 1px; }", ".framer-1uUKd .framer-1i64a2n { aspect-ratio: 1.00339558573854 / 1; height: var(--framer-aspect-ratio-supported, 884px); overflow: visible; position: relative; width: 887px; }", ".framer-1uUKd .framer-1xz9ydr { aspect-ratio: 1.7350928641251222 / 1; height: var(--framer-aspect-ratio-supported, 512px); overflow: visible; position: relative; width: 888px; }", ".framer-1uUKd .framer-1suqza8 { aspect-ratio: 1.453513129879347 / 1; height: var(--framer-aspect-ratio-supported, 705px); overflow: visible; position: relative; width: 1024px; }", ".framer-1uUKd .framer-1mtmf34 { aspect-ratio: 1.2989493791786055 / 1; height: var(--framer-aspect-ratio-supported, 524px); overflow: visible; position: relative; width: 680px; }", ".framer-1uUKd .framer-g9cy2v, .framer-1uUKd .framer-6akom5 { aspect-ratio: 1.3044585987261146 / 1; height: var(--framer-aspect-ratio-supported, 785px); overflow: visible; position: relative; width: 1024px; }", ".framer-1uUKd .framer-11hcg7u { aspect-ratio: 1.583916083916084 / 1; height: var(--framer-aspect-ratio-supported, 286px); overflow: visible; position: relative; width: 453px; }", ".framer-1uUKd .framer-1k789za-container { height: 393px; position: relative; width: 658px; }", ".framer-1uUKd .framer-1o46ym1 { aspect-ratio: 1.392741935483871 / 1; height: var(--framer-aspect-ratio-supported, 621px); overflow: visible; position: relative; width: 864px; }", ".framer-1uUKd .framer-c18txx { aspect-ratio: 2.197596795727637 / 1; height: var(--framer-aspect-ratio-supported, 749px); overflow: visible; position: relative; width: 1646px; }", ".framer-1uUKd .framer-adtcg8 { aspect-ratio: 2.868008948545861 / 1; height: var(--framer-aspect-ratio-supported, 572px); overflow: visible; position: relative; width: 1641px; }", ".framer-1uUKd .framer-63q9gr { aspect-ratio: 1.82648401826484 / 1; height: var(--framer-aspect-ratio-supported, 630px); overflow: visible; position: relative; width: 1151px; }", ".framer-1uUKd .framer-1mkpu9 { aspect-ratio: 1.5732009925558312 / 1; height: var(--framer-aspect-ratio-supported, 605px); overflow: visible; position: relative; width: 951px; }", ".framer-1uUKd .framer-1t1y1jt { aspect-ratio: 1.6338155515370705 / 1; height: var(--framer-aspect-ratio-supported, 554px); overflow: visible; position: relative; width: 904px; }", ".framer-1uUKd .framer-14ewrkd { aspect-ratio: 2.1578181818181816 / 1; height: var(--framer-aspect-ratio-supported, 816px); overflow: visible; position: relative; width: 1761px; }", ".framer-1uUKd .framer-3rs4t6 { aspect-ratio: 0.7526113249037933 / 1; height: var(--framer-aspect-ratio-supported, 1819px); overflow: visible; position: relative; width: 1369px; }", ".framer-1uUKd .framer-164y534 { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 20px 30px 80px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1a9aau8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 60px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-ujm4ai-container, .framer-1uUKd .framer-1yvxugs-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-1uUKd .framer-1bqnazj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1yazcc2, .framer-1uUKd .framer-kag27y, .framer-1uUKd .framer-1h0pyzm, .framer-1uUKd .framer-ulul0d, .framer-1uUKd .framer-idkd7l, .framer-1uUKd .framer-d42wqa, .framer-1uUKd .framer-17ik98o, .framer-1uUKd .framer-11qmsr7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-pprf3j-container, .framer-1uUKd .framer-wet9l8-container, .framer-1uUKd .framer-19g578p-container, .framer-1uUKd .framer-1d0xwea-container, .framer-1uUKd .framer-fc2nt8-container, .framer-1uUKd .framer-8wr03e-container, .framer-1uUKd .framer-1jbuoxf-container, .framer-1uUKd .framer-se75j4-container { cursor: pointer; flex: none; height: auto; position: relative; width: 100%; }", ".framer-1uUKd .framer-bhg7lo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 80px 0px 0px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-57d25c { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 50%; }", ".framer-1uUKd .framer-mvfaa9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 10px 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-uvv61y { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 0px 20px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-cyt9n9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 30px 20px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1e91l49 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 180px; justify-content: center; overflow: hidden; padding: 100px 0px 130px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-17jm2fe-container { flex: none; height: 121px; position: relative; width: 100%; }", ".framer-1uUKd .framer-yucsl4, .framer-1uUKd .framer-xmrv6v { height: 46px; position: relative; width: 161px; }", ".framer-1uUKd .framer-2zqhib, .framer-1uUKd .framer-udcx3f { height: 40px; position: relative; width: 147px; }", ".framer-1uUKd .framer-f2g4tg, .framer-1uUKd .framer-40i2vn { height: 39px; position: relative; width: 138px; }", ".framer-1uUKd .framer-1bxgpi3, .framer-1uUKd .framer-8fbtn0 { height: 34px; position: relative; width: 105px; }", ".framer-1uUKd .framer-1371h8u, .framer-1uUKd .framer-uvcmr2 { height: 28px; position: relative; width: 137px; }", ".framer-1uUKd .framer-dybfq1, .framer-1uUKd .framer-1kst4a5 { height: 29px; position: relative; width: 151px; }", ".framer-1uUKd .framer-1vl8ne2, .framer-1uUKd .framer-fucwkv { height: 78px; position: relative; width: 130px; }", ".framer-1uUKd .framer-1jtuqso, .framer-1uUKd .framer-dmjwkq { height: 32px; position: relative; width: 120px; }", ".framer-1uUKd .framer-1cdupoq, .framer-1uUKd .framer-1eqrrsj { height: 41px; position: relative; width: 116px; }", ".framer-1uUKd .framer-12m9imc { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 80px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-4s4v5y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 30px 60px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-rem6r8-container, .framer-1uUKd .framer-s5j1ry-container { flex: none; height: auto; position: relative; width: 50%; }", ".framer-1uUKd .framer-pnculx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 30px 40px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1njmghe { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: hidden; padding: 0px 120px 0px 0px; position: relative; width: 50%; }", ".framer-1uUKd .framer-16kk5lq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-1f87ew3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-kwtyu6, .framer-1uUKd .framer-gbh0ez { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 480px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-nqz5ee-container, .framer-1uUKd .framer-pooinv-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }", ".framer-1uUKd .framer-cpv6oe { --border-bottom-width: 1px; --border-color: var(--token-31a84c45-8582-4bb5-832b-8084ad7108d4, #595959); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 30px 80px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-7ze1hq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 390px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1ep8wbw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1gtzrnb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 120px 0px 0px; position: relative; width: 1px; }", ".framer-1uUKd .framer-1phqgvb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; }", ".framer-1uUKd .framer-1sl7ox6, .framer-1uUKd .framer-kg2z14, .framer-1uUKd .framer-ik2eey { --border-bottom-width: 0.5px; --border-color: #ffffff; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 50px 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1ippxii { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-1uUKd .framer-tovmyh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 30px 60px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-xa256m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 30px; position: relative; width: 100%; }", ".framer-1uUKd .framer-j3cidv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 51%; word-break: break-word; word-wrap: break-word; }", ".framer-1uUKd .framer-1in1jg6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-1uUKd .framer-1i96v8o-container { flex: none; height: 200px; position: relative; width: 100%; }", ".framer-1uUKd .framer-z24pdu-container { height: auto; position: relative; width: 660px; }", ".framer-1uUKd .framer-y1ux6w-container { height: auto; position: relative; width: 420px; }", ".framer-1uUKd .framer-byoa3f-container { height: auto; position: relative; width: 900px; }", ".framer-1uUKd .framer-h2q3cr-container { height: auto; position: relative; width: 360px; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-1uUKd.framer-72rtr7, .framer-1uUKd .framer-8r7hn7, .framer-1uUKd .framer-1s60azr, .framer-1uUKd .framer-1xsge8z, .framer-1uUKd .framer-zyik20, .framer-1uUKd .framer-1k9ieku, .framer-1uUKd .framer-1tzt9yq, .framer-1uUKd .framer-rjuf0a, .framer-1uUKd .framer-sjkpd0, .framer-1uUKd .framer-1tyryfq, .framer-1uUKd .framer-hh9uzm, .framer-1uUKd .framer-urqmsp, .framer-1uUKd .framer-p6yslu, .framer-1uUKd .framer-106n3q5, .framer-1uUKd .framer-93jnv2, .framer-1uUKd .framer-dv86s9, .framer-1uUKd .framer-1mtnqg2, .framer-1uUKd .framer-1heno13, .framer-1uUKd .framer-km39ds, .framer-1uUKd .framer-4v34gl, .framer-1uUKd .framer-4q0vwi, .framer-1uUKd .framer-1f100b8, .framer-1uUKd .framer-134tiz1, .framer-1uUKd .framer-108ye, .framer-1uUKd .framer-1hix2zt, .framer-1uUKd .framer-111kk86, .framer-1uUKd .framer-17cu6kx, .framer-1uUKd .framer-fds42v, .framer-1uUKd .framer-e11v2v, .framer-1uUKd .framer-1byiler, .framer-1uUKd .framer-164y534, .framer-1uUKd .framer-1bqnazj, .framer-1uUKd .framer-1yazcc2, .framer-1uUKd .framer-kag27y, .framer-1uUKd .framer-1h0pyzm, .framer-1uUKd .framer-ulul0d, .framer-1uUKd .framer-idkd7l, .framer-1uUKd .framer-d42wqa, .framer-1uUKd .framer-17ik98o, .framer-1uUKd .framer-11qmsr7, .framer-1uUKd .framer-57d25c, .framer-1uUKd .framer-mvfaa9, .framer-1uUKd .framer-uvv61y, .framer-1uUKd .framer-1e91l49, .framer-1uUKd .framer-12m9imc, .framer-1uUKd .framer-4s4v5y, .framer-1uUKd .framer-pnculx, .framer-1uUKd .framer-16kk5lq, .framer-1uUKd .framer-1f87ew3, .framer-1uUKd .framer-kwtyu6, .framer-1uUKd .framer-gbh0ez, .framer-1uUKd .framer-cpv6oe, .framer-1uUKd .framer-1bf6cq0, .framer-1uUKd .framer-7ze1hq, .framer-1uUKd .framer-1ep8wbw, .framer-1uUKd .framer-1gtzrnb, .framer-1uUKd .framer-1phqgvb, .framer-1uUKd .framer-1sl7ox6, .framer-1uUKd .framer-kg2z14, .framer-1uUKd .framer-ik2eey, .framer-1uUKd .framer-1ippxii, .framer-1uUKd .framer-xa256m, .framer-1uUKd .framer-1in1jg6 { gap: 0px; } .framer-1uUKd.framer-72rtr7 > *, .framer-1uUKd .framer-1s60azr > *, .framer-1uUKd .framer-1mtnqg2 > *, .framer-1uUKd .framer-17cu6kx > *, .framer-1uUKd .framer-fds42v > *, .framer-1uUKd .framer-164y534 > *, .framer-1uUKd .framer-1yazcc2 > *, .framer-1uUKd .framer-kag27y > *, .framer-1uUKd .framer-1h0pyzm > *, .framer-1uUKd .framer-ulul0d > *, .framer-1uUKd .framer-idkd7l > *, .framer-1uUKd .framer-d42wqa > *, .framer-1uUKd .framer-17ik98o > *, .framer-1uUKd .framer-11qmsr7 > *, .framer-1uUKd .framer-uvv61y > *, .framer-1uUKd .framer-12m9imc > *, .framer-1uUKd .framer-7ze1hq > *, .framer-1uUKd .framer-1gtzrnb > *, .framer-1uUKd .framer-1ippxii > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-1uUKd.framer-72rtr7 > :first-child, .framer-1uUKd .framer-1s60azr > :first-child, .framer-1uUKd .framer-1k9ieku > :first-child, .framer-1uUKd .framer-sjkpd0 > :first-child, .framer-1uUKd .framer-hh9uzm > :first-child, .framer-1uUKd .framer-p6yslu > :first-child, .framer-1uUKd .framer-106n3q5 > :first-child, .framer-1uUKd .framer-93jnv2 > :first-child, .framer-1uUKd .framer-1mtnqg2 > :first-child, .framer-1uUKd .framer-km39ds > :first-child, .framer-1uUKd .framer-4q0vwi > :first-child, .framer-1uUKd .framer-134tiz1 > :first-child, .framer-1uUKd .framer-108ye > :first-child, .framer-1uUKd .framer-1hix2zt > :first-child, .framer-1uUKd .framer-17cu6kx > :first-child, .framer-1uUKd .framer-fds42v > :first-child, .framer-1uUKd .framer-164y534 > :first-child, .framer-1uUKd .framer-1bqnazj > :first-child, .framer-1uUKd .framer-1yazcc2 > :first-child, .framer-1uUKd .framer-kag27y > :first-child, .framer-1uUKd .framer-1h0pyzm > :first-child, .framer-1uUKd .framer-ulul0d > :first-child, .framer-1uUKd .framer-idkd7l > :first-child, .framer-1uUKd .framer-d42wqa > :first-child, .framer-1uUKd .framer-17ik98o > :first-child, .framer-1uUKd .framer-11qmsr7 > :first-child, .framer-1uUKd .framer-uvv61y > :first-child, .framer-1uUKd .framer-12m9imc > :first-child, .framer-1uUKd .framer-16kk5lq > :first-child, .framer-1uUKd .framer-cpv6oe > :first-child, .framer-1uUKd .framer-7ze1hq > :first-child, .framer-1uUKd .framer-1gtzrnb > :first-child, .framer-1uUKd .framer-1phqgvb > :first-child, .framer-1uUKd .framer-1ippxii > :first-child, .framer-1uUKd .framer-1in1jg6 > :first-child { margin-top: 0px; } .framer-1uUKd.framer-72rtr7 > :last-child, .framer-1uUKd .framer-1s60azr > :last-child, .framer-1uUKd .framer-1k9ieku > :last-child, .framer-1uUKd .framer-sjkpd0 > :last-child, .framer-1uUKd .framer-hh9uzm > :last-child, .framer-1uUKd .framer-p6yslu > :last-child, .framer-1uUKd .framer-106n3q5 > :last-child, .framer-1uUKd .framer-93jnv2 > :last-child, .framer-1uUKd .framer-1mtnqg2 > :last-child, .framer-1uUKd .framer-km39ds > :last-child, .framer-1uUKd .framer-4q0vwi > :last-child, .framer-1uUKd .framer-134tiz1 > :last-child, .framer-1uUKd .framer-108ye > :last-child, .framer-1uUKd .framer-1hix2zt > :last-child, .framer-1uUKd .framer-17cu6kx > :last-child, .framer-1uUKd .framer-fds42v > :last-child, .framer-1uUKd .framer-164y534 > :last-child, .framer-1uUKd .framer-1bqnazj > :last-child, .framer-1uUKd .framer-1yazcc2 > :last-child, .framer-1uUKd .framer-kag27y > :last-child, .framer-1uUKd .framer-1h0pyzm > :last-child, .framer-1uUKd .framer-ulul0d > :last-child, .framer-1uUKd .framer-idkd7l > :last-child, .framer-1uUKd .framer-d42wqa > :last-child, .framer-1uUKd .framer-17ik98o > :last-child, .framer-1uUKd .framer-11qmsr7 > :last-child, .framer-1uUKd .framer-uvv61y > :last-child, .framer-1uUKd .framer-12m9imc > :last-child, .framer-1uUKd .framer-16kk5lq > :last-child, .framer-1uUKd .framer-cpv6oe > :last-child, .framer-1uUKd .framer-7ze1hq > :last-child, .framer-1uUKd .framer-1gtzrnb > :last-child, .framer-1uUKd .framer-1phqgvb > :last-child, .framer-1uUKd .framer-1ippxii > :last-child, .framer-1uUKd .framer-1in1jg6 > :last-child { margin-bottom: 0px; } .framer-1uUKd .framer-8r7hn7 > *, .framer-1uUKd .framer-1xsge8z > *, .framer-1uUKd .framer-rjuf0a > *, .framer-1uUKd .framer-1tyryfq > *, .framer-1uUKd .framer-dv86s9 > *, .framer-1uUKd .framer-1heno13 > *, .framer-1uUKd .framer-4v34gl > *, .framer-1uUKd .framer-111kk86 > *, .framer-1uUKd .framer-e11v2v > *, .framer-1uUKd .framer-1e91l49 > *, .framer-1uUKd .framer-4s4v5y > *, .framer-1uUKd .framer-pnculx > *, .framer-1uUKd .framer-kwtyu6 > *, .framer-1uUKd .framer-gbh0ez > *, .framer-1uUKd .framer-1bf6cq0 > *, .framer-1uUKd .framer-1ep8wbw > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-1uUKd .framer-8r7hn7 > :first-child, .framer-1uUKd .framer-1xsge8z > :first-child, .framer-1uUKd .framer-zyik20 > :first-child, .framer-1uUKd .framer-1tzt9yq > :first-child, .framer-1uUKd .framer-rjuf0a > :first-child, .framer-1uUKd .framer-1tyryfq > :first-child, .framer-1uUKd .framer-urqmsp > :first-child, .framer-1uUKd .framer-dv86s9 > :first-child, .framer-1uUKd .framer-1heno13 > :first-child, .framer-1uUKd .framer-4v34gl > :first-child, .framer-1uUKd .framer-1f100b8 > :first-child, .framer-1uUKd .framer-111kk86 > :first-child, .framer-1uUKd .framer-e11v2v > :first-child, .framer-1uUKd .framer-1byiler > :first-child, .framer-1uUKd .framer-57d25c > :first-child, .framer-1uUKd .framer-mvfaa9 > :first-child, .framer-1uUKd .framer-1e91l49 > :first-child, .framer-1uUKd .framer-4s4v5y > :first-child, .framer-1uUKd .framer-pnculx > :first-child, .framer-1uUKd .framer-1f87ew3 > :first-child, .framer-1uUKd .framer-kwtyu6 > :first-child, .framer-1uUKd .framer-gbh0ez > :first-child, .framer-1uUKd .framer-1bf6cq0 > :first-child, .framer-1uUKd .framer-1ep8wbw > :first-child, .framer-1uUKd .framer-1sl7ox6 > :first-child, .framer-1uUKd .framer-kg2z14 > :first-child, .framer-1uUKd .framer-ik2eey > :first-child, .framer-1uUKd .framer-xa256m > :first-child { margin-left: 0px; } .framer-1uUKd .framer-8r7hn7 > :last-child, .framer-1uUKd .framer-1xsge8z > :last-child, .framer-1uUKd .framer-zyik20 > :last-child, .framer-1uUKd .framer-1tzt9yq > :last-child, .framer-1uUKd .framer-rjuf0a > :last-child, .framer-1uUKd .framer-1tyryfq > :last-child, .framer-1uUKd .framer-urqmsp > :last-child, .framer-1uUKd .framer-dv86s9 > :last-child, .framer-1uUKd .framer-1heno13 > :last-child, .framer-1uUKd .framer-4v34gl > :last-child, .framer-1uUKd .framer-1f100b8 > :last-child, .framer-1uUKd .framer-111kk86 > :last-child, .framer-1uUKd .framer-e11v2v > :last-child, .framer-1uUKd .framer-1byiler > :last-child, .framer-1uUKd .framer-57d25c > :last-child, .framer-1uUKd .framer-mvfaa9 > :last-child, .framer-1uUKd .framer-1e91l49 > :last-child, .framer-1uUKd .framer-4s4v5y > :last-child, .framer-1uUKd .framer-pnculx > :last-child, .framer-1uUKd .framer-1f87ew3 > :last-child, .framer-1uUKd .framer-kwtyu6 > :last-child, .framer-1uUKd .framer-gbh0ez > :last-child, .framer-1uUKd .framer-1bf6cq0 > :last-child, .framer-1uUKd .framer-1ep8wbw > :last-child, .framer-1uUKd .framer-1sl7ox6 > :last-child, .framer-1uUKd .framer-kg2z14 > :last-child, .framer-1uUKd .framer-ik2eey > :last-child, .framer-1uUKd .framer-xa256m > :last-child { margin-right: 0px; } .framer-1uUKd .framer-zyik20 > * { margin: 0px; margin-left: calc(47px / 2); margin-right: calc(47px / 2); } .framer-1uUKd .framer-1k9ieku > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-1uUKd .framer-1tzt9yq > * { margin: 0px; margin-left: calc(44px / 2); margin-right: calc(44px / 2); } .framer-1uUKd .framer-sjkpd0 > *, .framer-1uUKd .framer-p6yslu > *, .framer-1uUKd .framer-93jnv2 > *, .framer-1uUKd .framer-km39ds > *, .framer-1uUKd .framer-134tiz1 > *, .framer-1uUKd .framer-1hix2zt > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-1uUKd .framer-hh9uzm > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-1uUKd .framer-urqmsp > *, .framer-1uUKd .framer-1f100b8 > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-1uUKd .framer-106n3q5 > *, .framer-1uUKd .framer-4q0vwi > *, .framer-1uUKd .framer-108ye > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-1uUKd .framer-1byiler > *, .framer-1uUKd .framer-mvfaa9 > *, .framer-1uUKd .framer-xa256m > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1uUKd .framer-1bqnazj > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-1uUKd .framer-57d25c > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-1uUKd .framer-16kk5lq > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1uUKd .framer-1f87ew3 > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-1uUKd .framer-cpv6oe > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-1uUKd .framer-1phqgvb > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-1uUKd .framer-1sl7ox6 > *, .framer-1uUKd .framer-kg2z14 > *, .framer-1uUKd .framer-ik2eey > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-1uUKd .framer-1in1jg6 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", "@media (min-width: 1440px) and (max-width: 1919px) { .framer-1uUKd .hidden-72rtr7 { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1439px) { .framer-1uUKd .hidden-3v2uua { display: none !important; } .${qr.bodyClassName}-framer-1uUKd { background: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)); } .framer-1uUKd.framer-72rtr7 { width: 810px; } .framer-1uUKd .framer-1gw5lgm-container { order: 0; } .framer-1uUKd .framer-8r7hn7 { order: 1; padding: 10px 20px 10px 20px; } .framer-1uUKd .framer-1s60azr, .framer-1uUKd .framer-19sq2uk, .framer-1uUKd .framer-1tyryfq, .framer-1uUKd .framer-hh9uzm, .framer-1uUKd .framer-5u591x { overflow: visible; } .framer-1uUKd .framer-1xsge8z { order: 2; padding: 0px 20px 20px 20px; } .framer-1uUKd .framer-zyik20 { order: 3; padding: 40px 20px 80px 20px; } .framer-1uUKd .framer-1k9ieku { gap: 80px; order: 4; padding: 20px 20px 19px 20px; } .framer-1uUKd .framer-rjuf0a { align-content: flex-start; align-items: flex-start; justify-content: flex-start; width: 100%; } .framer-1uUKd .framer-sjkpd0 { flex: 1 0 0px; overflow: visible; width: 1px; } .framer-1uUKd .framer-3yq6wn-container, .framer-1uUKd .framer-f2ubty-container, .framer-1uUKd .framer-fqzzl8-container { height: auto; } .framer-1uUKd .framer-urqmsp, .framer-1uUKd .framer-1f100b8 { flex-direction: column; } .framer-1uUKd .framer-p6yslu { flex: none; padding: 40px 0px 20px 0px; width: 100%; } .framer-1uUKd .framer-93jnv2 { flex: none; padding: 0px; width: 100%; } .framer-1uUKd .framer-kcxvpq-container { height: 470px; } .framer-1uUKd .framer-1heno13, .framer-1uUKd .framer-e11v2v { align-content: flex-start; align-items: flex-start; flex-direction: column; padding: 0px; } .framer-1uUKd .framer-km39ds, .framer-1uUKd .framer-1byiler { width: 100%; } .framer-1uUKd .framer-4q0vwi, .framer-1uUKd .framer-1phqgvb { gap: 0px; } .framer-1uUKd .framer-134tiz1, .framer-1uUKd .framer-ja3o0r-container, .framer-1uUKd .framer-89zh4k-container, .framer-1uUKd .framer-13jdxa4-container, .framer-1uUKd .framer-1okvq9h-container, .framer-1uUKd .framer-5qkpne-container, .framer-1uUKd .framer-5rfp8d-container { flex: none; width: 100%; } .framer-1uUKd .framer-14btuk4-container, .framer-1uUKd .framer-jrt9h-container { height: 450px; } .framer-1uUKd .framer-1hix2zt { flex: none; padding: 0px 0px 27px 0px; width: 100%; } .framer-1uUKd .framer-fds42v { gap: 20px; order: 5; padding: 20px 20px 0px 20px; } .framer-1uUKd .framer-164y534 { order: 6; padding: 20px; } .framer-1uUKd .framer-bhg7lo { padding: 80px 0px 40px 0px; } .framer-1uUKd .framer-57d25c { gap: 0px; width: 20%; } .framer-1uUKd .framer-mvfaa9 { flex: none; width: 80%; } .framer-1uUKd .framer-uvv61y { order: 7; padding: 20px 0px 40px 0px; } .framer-1uUKd .framer-cyt9n9, .framer-1uUKd .framer-tovmyh { padding: 0px 20px 20px 20px; } .framer-1uUKd .framer-1e91l49 { height: 200px; padding: 0px; } .framer-1uUKd .framer-12m9imc { order: 8; padding: 20px 0px 30px 0px; } .framer-1uUKd .framer-4s4v5y { flex-direction: column; gap: 40px; padding: 0px 20px 40px 20px; } .framer-1uUKd .framer-pnculx { padding: 0px 20px 40px 20px; } .framer-1uUKd .framer-1njmghe { order: 0; width: 44%; } .framer-1uUKd .framer-16kk5lq { flex: none; width: 126%; } .framer-1uUKd .framer-1f87ew3, .framer-1uUKd .framer-1in1jg6 { gap: 20px; } .framer-1uUKd .framer-kwtyu6, .framer-1uUKd .framer-gbh0ez, .framer-1uUKd .framer-7ze1hq { height: min-content; } .framer-1uUKd .framer-nqz5ee-container, .framer-1uUKd .framer-pooinv-container { height: 440px; } .framer-1uUKd .framer-cpv6oe { align-content: center; align-items: center; gap: 7px; order: 9; padding: 20px 20px 40px 20px; } .framer-1uUKd .framer-1bf6cq0 { flex-direction: column; padding: 0px 0px 20px 0px; } .framer-1uUKd .framer-1ep8wbw { padding: 20px 0px 0px 0px; } .framer-1uUKd .framer-1sl7ox6 { --border-color: #000000; flex-direction: column; gap: 40px; padding: 0px; } .framer-1uUKd .framer-kg2z14 { --border-color: #000000; flex-direction: column; gap: 40px; overflow: auto; padding: 40px 0px 0px 0px; } .framer-1uUKd .framer-ik2eey { --border-color: #000000; flex-direction: column; gap: 40px; padding: 40px 0px 0px 0px; } .framer-1uUKd .framer-1ippxii { order: 11; } .framer-1uUKd .framer-xa256m { gap: 103px; padding: 0px 30px 0px 30px; } .framer-1uUKd .framer-9m98mu { flex: none; width: 29%; } .framer-1uUKd .framer-j3cidv { width: 55%; } .framer-1uUKd .framer-il7xrj-container { order: 13; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-1uUKd .framer-1k9ieku, .framer-1uUKd .framer-urqmsp, .framer-1uUKd .framer-1heno13, .framer-1uUKd .framer-4q0vwi, .framer-1uUKd .framer-1f100b8, .framer-1uUKd .framer-fds42v, .framer-1uUKd .framer-e11v2v, .framer-1uUKd .framer-57d25c, .framer-1uUKd .framer-4s4v5y, .framer-1uUKd .framer-1f87ew3, .framer-1uUKd .framer-cpv6oe, .framer-1uUKd .framer-1bf6cq0, .framer-1uUKd .framer-1phqgvb, .framer-1uUKd .framer-1sl7ox6, .framer-1uUKd .framer-kg2z14, .framer-1uUKd .framer-ik2eey, .framer-1uUKd .framer-xa256m, .framer-1uUKd .framer-1in1jg6 { gap: 0px; } .framer-1uUKd .framer-1k9ieku > *, .framer-1uUKd .framer-urqmsp > *, .framer-1uUKd .framer-1f100b8 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-1uUKd .framer-1k9ieku > :first-child, .framer-1uUKd .framer-urqmsp > :first-child, .framer-1uUKd .framer-1heno13 > :first-child, .framer-1uUKd .framer-4q0vwi > :first-child, .framer-1uUKd .framer-1f100b8 > :first-child, .framer-1uUKd .framer-fds42v > :first-child, .framer-1uUKd .framer-e11v2v > :first-child, .framer-1uUKd .framer-4s4v5y > :first-child, .framer-1uUKd .framer-cpv6oe > :first-child, .framer-1uUKd .framer-1bf6cq0 > :first-child, .framer-1uUKd .framer-1phqgvb > :first-child, .framer-1uUKd .framer-1sl7ox6 > :first-child, .framer-1uUKd .framer-kg2z14 > :first-child, .framer-1uUKd .framer-ik2eey > :first-child, .framer-1uUKd .framer-1in1jg6 > :first-child { margin-top: 0px; } .framer-1uUKd .framer-1k9ieku > :last-child, .framer-1uUKd .framer-urqmsp > :last-child, .framer-1uUKd .framer-1heno13 > :last-child, .framer-1uUKd .framer-4q0vwi > :last-child, .framer-1uUKd .framer-1f100b8 > :last-child, .framer-1uUKd .framer-fds42v > :last-child, .framer-1uUKd .framer-e11v2v > :last-child, .framer-1uUKd .framer-4s4v5y > :last-child, .framer-1uUKd .framer-cpv6oe > :last-child, .framer-1uUKd .framer-1bf6cq0 > :last-child, .framer-1uUKd .framer-1phqgvb > :last-child, .framer-1uUKd .framer-1sl7ox6 > :last-child, .framer-1uUKd .framer-kg2z14 > :last-child, .framer-1uUKd .framer-ik2eey > :last-child, .framer-1uUKd .framer-1in1jg6 > :last-child { margin-bottom: 0px; } .framer-1uUKd .framer-1heno13 > *, .framer-1uUKd .framer-4q0vwi > *, .framer-1uUKd .framer-e11v2v > *, .framer-1uUKd .framer-1bf6cq0 > *, .framer-1uUKd .framer-1phqgvb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-1uUKd .framer-fds42v > *, .framer-1uUKd .framer-1in1jg6 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1uUKd .framer-57d25c > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-1uUKd .framer-57d25c > :first-child, .framer-1uUKd .framer-1f87ew3 > :first-child, .framer-1uUKd .framer-xa256m > :first-child { margin-left: 0px; } .framer-1uUKd .framer-57d25c > :last-child, .framer-1uUKd .framer-1f87ew3 > :last-child, .framer-1uUKd .framer-xa256m > :last-child { margin-right: 0px; } .framer-1uUKd .framer-4s4v5y > *, .framer-1uUKd .framer-1sl7ox6 > *, .framer-1uUKd .framer-kg2z14 > *, .framer-1uUKd .framer-ik2eey > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-1uUKd .framer-1f87ew3 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-1uUKd .framer-cpv6oe > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-1uUKd .framer-xa256m > * { margin: 0px; margin-left: calc(103px / 2); margin-right: calc(103px / 2); } }}`, `@media (max-width: 809px) { .framer-1uUKd .hidden-7gi421 { display: none !important; } .${qr.bodyClassName}-framer-1uUKd { background: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)); } .framer-1uUKd.framer-72rtr7 { width: 390px; } .framer-1uUKd .framer-1gw5lgm-container { left: unset; order: 0; position: sticky; transform: unset; will-change: transform; } .framer-1uUKd .framer-8r7hn7 { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 1; padding: 10px; } .framer-1uUKd .framer-1s60azr { align-content: flex-end; align-items: flex-end; flex: none; flex-direction: row; justify-content: flex-start; width: 100%; } .framer-1uUKd .framer-19sq2uk, .framer-1uUKd .framer-1byiler, .framer-1uUKd .framer-1yvxugs-container, .framer-1uUKd .framer-j3cidv { flex: 1 0 0px; width: 1px; } .framer-1uUKd .framer-1xsge8z { flex-direction: column; order: 2; padding: 0px 10px 20px 10px; } .framer-1uUKd .framer-1tncfu6-container, .framer-1uUKd .framer-1axhh31-container, .framer-1uUKd .framer-ja3o0r-container, .framer-1uUKd .framer-89zh4k-container, .framer-1uUKd .framer-13jdxa4-container, .framer-1uUKd .framer-1okvq9h-container, .framer-1uUKd .framer-5qkpne-container, .framer-1uUKd .framer-5rfp8d-container { flex: none; width: 100%; } .framer-1uUKd .framer-zyik20 { align-content: center; align-items: center; flex-direction: column; gap: 37px; order: 3; padding: 20px 10px 35px 10px; } .framer-1uUKd .framer-zyf7e7 { width: 350px; } .framer-1uUKd .framer-1grja8k { flex: none; width: 350px; } .framer-1uUKd .framer-1k9ieku { gap: 31px; order: 4; padding: 30px 10px 0px 10px; } .framer-1uUKd .framer-1tzt9yq, .framer-1uUKd .framer-1ep8wbw { flex-direction: column; } .framer-1uUKd .framer-rjuf0a, .framer-1uUKd .framer-ujm4ai-container { width: 100%; } .framer-1uUKd .framer-sjkpd0 { gap: 8px; width: 100%; } .framer-1uUKd .framer-3yq6wn-container, .framer-1uUKd .framer-f2ubty-container, .framer-1uUKd .framer-nqz5ee-container, .framer-1uUKd .framer-pooinv-container { height: 300px; } .framer-1uUKd .framer-urqmsp { flex-direction: column; gap: 31px; } .framer-1uUKd .framer-p6yslu { flex: none; gap: 8px; width: 100%; } .framer-1uUKd .framer-93jnv2 { flex: none; gap: 8px; padding: 0px; width: 100%; } .framer-1uUKd .framer-kcxvpq-container, .framer-1uUKd .framer-fqzzl8-container, .framer-1uUKd .framer-14btuk4-container, .framer-1uUKd .framer-1hqfrqc-container, .framer-1uUKd .framer-jrt9h-container { height: 262px; } .framer-1uUKd .framer-1heno13, .framer-1uUKd .framer-e11v2v { padding: 0px; } .framer-1uUKd .framer-km39ds { flex: 1 0 0px; gap: 8px; width: 1px; } .framer-1uUKd .framer-1f100b8 { flex-direction: column; gap: 31px; padding: 0px 0px 40px 0px; } .framer-1uUKd .framer-134tiz1 { align-content: flex-start; align-items: flex-start; flex: none; gap: 8px; justify-content: center; width: 100%; } .framer-1uUKd .framer-1hix2zt { align-content: flex-start; align-items: flex-start; flex: none; gap: 8px; justify-content: center; padding: 0px; width: 100%; } .framer-1uUKd .framer-fds42v { gap: 36px; order: 5; padding: 20px 10px 40px 10px; } .framer-1uUKd .framer-164y534 { order: 6; padding: 20px 10px 10px 10px; } .framer-1uUKd .framer-1a9aau8 { flex-direction: column; padding: 0px 0px 30px 0px; } .framer-1uUKd .framer-1yazcc2, .framer-1uUKd .framer-kag27y, .framer-1uUKd .framer-1h0pyzm, .framer-1uUKd .framer-ulul0d, .framer-1uUKd .framer-idkd7l, .framer-1uUKd .framer-d42wqa, .framer-1uUKd .framer-17ik98o, .framer-1uUKd .framer-11qmsr7 { height: 60px; } .framer-1uUKd .framer-pprf3j-container, .framer-1uUKd .framer-wet9l8-container, .framer-1uUKd .framer-19g578p-container, .framer-1uUKd .framer-1d0xwea-container, .framer-1uUKd .framer-fc2nt8-container, .framer-1uUKd .framer-8wr03e-container, .framer-1uUKd .framer-1jbuoxf-container, .framer-1uUKd .framer-se75j4-container { flex: 1 0 0px; height: 1px; } .framer-1uUKd .framer-bhg7lo { gap: 0px; justify-content: center; padding: 50px 0px 30px 0px; } .framer-1uUKd .framer-uvv61y { order: 7; padding: 20px 0px 40px 0px; } .framer-1uUKd .framer-cyt9n9 { padding: 0px 10px 20px 10px; } .framer-1uUKd .framer-1e91l49 { padding: 30px 0px 30px 0px; } .framer-1uUKd .framer-12m9imc { gap: 30px; order: 8; padding: 20px 10px 80px 10px; } .framer-1uUKd .framer-4s4v5y { flex-direction: column; gap: 20px; padding: 0px; } .framer-1uUKd .framer-pnculx { flex-direction: column; gap: 48px; padding: 0px; } .framer-1uUKd .framer-1njmghe { align-self: unset; height: min-content; order: 0; padding: 0px; width: 100%; } .framer-1uUKd .framer-16kk5lq, .framer-1uUKd .framer-kwtyu6, .framer-1uUKd .framer-gbh0ez, .framer-1uUKd .framer-7ze1hq { height: min-content; } .framer-1uUKd .framer-1f87ew3 { flex: none; gap: 10px; width: 100%; } .framer-1uUKd .framer-cpv6oe { gap: 17px; order: 9; padding: 10px 10px 45px 10px; } .framer-1uUKd .framer-1bf6cq0 { flex-direction: column; padding: 0px 0px 10px 0px; } .framer-1uUKd .framer-1gtzrnb { flex: none; padding: 0px 0px 20px 0px; width: 100%; } .framer-1uUKd .framer-1phqgvb { gap: 42px; padding: 0px 0px 0px 20px; width: 100%; } .framer-1uUKd .framer-1sl7ox6, .framer-1uUKd .framer-kg2z14, .framer-1uUKd .framer-ik2eey { --border-color: #000000; flex-direction: column; gap: 42px; padding: 20px 0px 0px 0px; } .framer-1uUKd .framer-1ippxii { gap: 16px; order: 11; padding: 20px 0px 20px 0px; } .framer-1uUKd .framer-tovmyh { padding: 0px 10px 4px 10px; } .framer-1uUKd .framer-1in1jg6 { gap: 0px; } .framer-1uUKd .framer-1i96v8o-container { height: 150px; } .framer-1uUKd .framer-il7xrj-container { order: 13; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-1uUKd .framer-8r7hn7, .framer-1uUKd .framer-1s60azr, .framer-1uUKd .framer-1xsge8z, .framer-1uUKd .framer-zyik20, .framer-1uUKd .framer-1k9ieku, .framer-1uUKd .framer-1tzt9yq, .framer-1uUKd .framer-sjkpd0, .framer-1uUKd .framer-urqmsp, .framer-1uUKd .framer-p6yslu, .framer-1uUKd .framer-93jnv2, .framer-1uUKd .framer-km39ds, .framer-1uUKd .framer-1f100b8, .framer-1uUKd .framer-134tiz1, .framer-1uUKd .framer-1hix2zt, .framer-1uUKd .framer-fds42v, .framer-1uUKd .framer-1a9aau8, .framer-1uUKd .framer-bhg7lo, .framer-1uUKd .framer-12m9imc, .framer-1uUKd .framer-4s4v5y, .framer-1uUKd .framer-pnculx, .framer-1uUKd .framer-1f87ew3, .framer-1uUKd .framer-cpv6oe, .framer-1uUKd .framer-1bf6cq0, .framer-1uUKd .framer-1ep8wbw, .framer-1uUKd .framer-1phqgvb, .framer-1uUKd .framer-1sl7ox6, .framer-1uUKd .framer-kg2z14, .framer-1uUKd .framer-ik2eey, .framer-1uUKd .framer-1ippxii, .framer-1uUKd .framer-1in1jg6 { gap: 0px; } .framer-1uUKd .framer-8r7hn7 > *, .framer-1uUKd .framer-1xsge8z > *, .framer-1uUKd .framer-1bf6cq0 > *, .framer-1uUKd .framer-1ep8wbw > *, .framer-1uUKd .framer-1in1jg6 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-1uUKd .framer-8r7hn7 > :first-child, .framer-1uUKd .framer-1xsge8z > :first-child, .framer-1uUKd .framer-zyik20 > :first-child, .framer-1uUKd .framer-1k9ieku > :first-child, .framer-1uUKd .framer-1tzt9yq > :first-child, .framer-1uUKd .framer-sjkpd0 > :first-child, .framer-1uUKd .framer-urqmsp > :first-child, .framer-1uUKd .framer-p6yslu > :first-child, .framer-1uUKd .framer-93jnv2 > :first-child, .framer-1uUKd .framer-km39ds > :first-child, .framer-1uUKd .framer-1f100b8 > :first-child, .framer-1uUKd .framer-134tiz1 > :first-child, .framer-1uUKd .framer-1hix2zt > :first-child, .framer-1uUKd .framer-fds42v > :first-child, .framer-1uUKd .framer-12m9imc > :first-child, .framer-1uUKd .framer-4s4v5y > :first-child, .framer-1uUKd .framer-pnculx > :first-child, .framer-1uUKd .framer-cpv6oe > :first-child, .framer-1uUKd .framer-1bf6cq0 > :first-child, .framer-1uUKd .framer-1ep8wbw > :first-child, .framer-1uUKd .framer-1phqgvb > :first-child, .framer-1uUKd .framer-1sl7ox6 > :first-child, .framer-1uUKd .framer-kg2z14 > :first-child, .framer-1uUKd .framer-ik2eey > :first-child, .framer-1uUKd .framer-1ippxii > :first-child, .framer-1uUKd .framer-1in1jg6 > :first-child { margin-top: 0px; } .framer-1uUKd .framer-8r7hn7 > :last-child, .framer-1uUKd .framer-1xsge8z > :last-child, .framer-1uUKd .framer-zyik20 > :last-child, .framer-1uUKd .framer-1k9ieku > :last-child, .framer-1uUKd .framer-1tzt9yq > :last-child, .framer-1uUKd .framer-sjkpd0 > :last-child, .framer-1uUKd .framer-urqmsp > :last-child, .framer-1uUKd .framer-p6yslu > :last-child, .framer-1uUKd .framer-93jnv2 > :last-child, .framer-1uUKd .framer-km39ds > :last-child, .framer-1uUKd .framer-1f100b8 > :last-child, .framer-1uUKd .framer-134tiz1 > :last-child, .framer-1uUKd .framer-1hix2zt > :last-child, .framer-1uUKd .framer-fds42v > :last-child, .framer-1uUKd .framer-12m9imc > :last-child, .framer-1uUKd .framer-4s4v5y > :last-child, .framer-1uUKd .framer-pnculx > :last-child, .framer-1uUKd .framer-cpv6oe > :last-child, .framer-1uUKd .framer-1bf6cq0 > :last-child, .framer-1uUKd .framer-1ep8wbw > :last-child, .framer-1uUKd .framer-1phqgvb > :last-child, .framer-1uUKd .framer-1sl7ox6 > :last-child, .framer-1uUKd .framer-kg2z14 > :last-child, .framer-1uUKd .framer-ik2eey > :last-child, .framer-1uUKd .framer-1ippxii > :last-child, .framer-1uUKd .framer-1in1jg6 > :last-child { margin-bottom: 0px; } .framer-1uUKd .framer-1s60azr > *, .framer-1uUKd .framer-bhg7lo > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-1uUKd .framer-1s60azr > :first-child, .framer-1uUKd .framer-bhg7lo > :first-child, .framer-1uUKd .framer-1f87ew3 > :first-child { margin-left: 0px; } .framer-1uUKd .framer-1s60azr > :last-child, .framer-1uUKd .framer-bhg7lo > :last-child, .framer-1uUKd .framer-1f87ew3 > :last-child { margin-right: 0px; } .framer-1uUKd .framer-zyik20 > * { margin: 0px; margin-bottom: calc(37px / 2); margin-top: calc(37px / 2); } .framer-1uUKd .framer-1k9ieku > *, .framer-1uUKd .framer-urqmsp > *, .framer-1uUKd .framer-1f100b8 > * { margin: 0px; margin-bottom: calc(31px / 2); margin-top: calc(31px / 2); } .framer-1uUKd .framer-1tzt9yq > * { margin: 0px; margin-bottom: calc(44px / 2); margin-top: calc(44px / 2); } .framer-1uUKd .framer-sjkpd0 > *, .framer-1uUKd .framer-p6yslu > *, .framer-1uUKd .framer-93jnv2 > *, .framer-1uUKd .framer-km39ds > *, .framer-1uUKd .framer-134tiz1 > *, .framer-1uUKd .framer-1hix2zt > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-1uUKd .framer-fds42v > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-1uUKd .framer-1a9aau8 > *, .framer-1uUKd .framer-1a9aau8 > :first-child, .framer-1uUKd .framer-1a9aau8 > :last-child { margin: 0px; } .framer-1uUKd .framer-12m9imc > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-1uUKd .framer-4s4v5y > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1uUKd .framer-pnculx > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-1uUKd .framer-1f87ew3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1uUKd .framer-cpv6oe > * { margin: 0px; margin-bottom: calc(17px / 2); margin-top: calc(17px / 2); } .framer-1uUKd .framer-1phqgvb > *, .framer-1uUKd .framer-1sl7ox6 > *, .framer-1uUKd .framer-kg2z14 > *, .framer-1uUKd .framer-ik2eey > * { margin: 0px; margin-bottom: calc(42px / 2); margin-top: calc(42px / 2); } .framer-1uUKd .framer-1ippxii > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }}`, `@media (min-width: 1920px) { .framer-1uUKd .hidden-qs7kru { display: none !important; } .${qr.bodyClassName}-framer-1uUKd { background: var(--token-03833126-8112-475c-b89e-8e35620cc6ef, rgb(0, 0, 0)); } .framer-1uUKd.framer-72rtr7 { width: 1920px; } .framer-1uUKd .framer-1tncfu6-container { height: 900px; } .framer-1uUKd .framer-zyik20 { gap: 25px; } .framer-1uUKd .framer-zyf7e7 { height: 100%; order: 0; } .framer-1uUKd .framer-1grja8k { height: 100%; order: 1; } .framer-1uUKd .framer-3yq6wn-container { height: 700px; } .framer-1uUKd .framer-f2ubty-container { height: 650px; } .framer-1uUKd .framer-kcxvpq-container { height: 527px; } .framer-1uUKd .framer-km39ds { width: 80%; } .framer-1uUKd .framer-fqzzl8-container { height: 800px; } .framer-1uUKd .framer-4v34gl { width: 60%; } .framer-1uUKd .framer-1byiler { width: 66%; } .framer-1uUKd .framer-bhg7lo { padding: 75px 0px 0px 0px; } .framer-1uUKd .framer-uvv61y { padding: 20px 0px 0px 0px; } .framer-1uUKd .framer-12m9imc { height: 873px; } .framer-1uUKd .framer-4s4v5y, .framer-1uUKd .framer-q2ugfr-container { order: 0; } .framer-1uUKd .framer-pnculx { flex: 1 0 0px; height: 1px; order: 1; } .framer-1uUKd .framer-1njmghe { align-self: unset; flex-direction: column; height: 100%; order: 0; } .framer-1uUKd .framer-16kk5lq { height: 1px; width: 100%; } .framer-1uUKd .framer-1f87ew3 { gap: 36px; } .framer-1uUKd .framer-kwtyu6 { height: 640px; order: 0; } .framer-1uUKd .framer-gbh0ez { height: 640px; justify-content: center; order: 1; } .framer-1uUKd .framer-cpv6oe { gap: 20px; height: 1537px; } .framer-1uUKd .framer-7ze1hq { flex: 1 0 0px; height: 1px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-1uUKd .framer-zyik20, .framer-1uUKd .framer-1njmghe, .framer-1uUKd .framer-1f87ew3, .framer-1uUKd .framer-cpv6oe { gap: 0px; } .framer-1uUKd .framer-zyik20 > * { margin: 0px; margin-left: calc(25px / 2); margin-right: calc(25px / 2); } .framer-1uUKd .framer-zyik20 > :first-child, .framer-1uUKd .framer-1f87ew3 > :first-child { margin-left: 0px; } .framer-1uUKd .framer-zyik20 > :last-child, .framer-1uUKd .framer-1f87ew3 > :last-child { margin-right: 0px; } .framer-1uUKd .framer-1njmghe > *, .framer-1uUKd .framer-1njmghe > :first-child, .framer-1uUKd .framer-1njmghe > :last-child { margin: 0px; } .framer-1uUKd .framer-1f87ew3 > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-1uUKd .framer-cpv6oe > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-1uUKd .framer-cpv6oe > :first-child { margin-top: 0px; } .framer-1uUKd .framer-cpv6oe > :last-child { margin-bottom: 0px; } }}`, ...ut, ...nt, ...xt, ...Ct, ...zr, '.framer-1uUKd[data-border="true"]::after, .framer-1uUKd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    Dr = ge(F2, Z2, "framer-1uUKd"), hn = Dr;
Dr.displayName = "Home";
Dr.defaultProps = {height: 11309.5, width: 1440};
_e(Dr, [{
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
}, ...v2, ...C2, ...y2, ...b2, ...L2, ...U2, ...K2, ...k2, ...M2, ...j2, ...R2, ...S2, ...er(pt), ...er(it), ...er(gt), ...er(wt), ...er(Pr)], {supportsExplicitInterCodegen: !0});
var gn = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerImmutableVariables: "true",
                framerComponentViewportWidth: "true",
                framerResponsiveScreen: "",
                framerIntrinsicWidth: "1440",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qEJDbn9wX":{"layout":["fixed","auto"]},"ivZn5n4jd":{"layout":["fixed","auto"]},"oPLt7_M7Y":{"layout":["fixed","auto"]}}}',
                framerDisplayContentsDiv: "false",
                framerContractVersion: "1",
                framerIntrinsicHeight: "11309.5"
            }
        }, Props: {type: "tsType", annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}
    }
};
export {gn as __FramerMetadata__, hn as default};
//# sourceMappingURL=_2UASnDuEOWkVwzZsQqPqff578W5YEC7-Bf5tXUVZug.GIAZEAUF.mjs.map
