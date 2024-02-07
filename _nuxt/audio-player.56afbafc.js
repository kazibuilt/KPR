import e from "./dot-caption.f385565b.js";
import a from "./audio-bar-wave.04aa41d2.js";
import {
    o as l,
    l as t,
    m as s,
    a as r,
    e as u,
    b as o,
    r as n,
    K as i,
    h as v,
    j as c,
    L as d,
    J as f,
    u as p,
    q as m,
    w as y,
    v as w,
    t as h,
    c as g,
    A as x,
    z as j,
    M as k,
    T as M,
    f as S
} from "./entry.40e762a9.js";
import {
    u as b
} from "./useRaf.5395a270.js";
import {
    u as _
} from "./useTouch.fea93067.js";
import "./dot.36dd12fe.js";
import "./hacky-text.bd3e68e0.js";
import "./useScrollTrigger.934dab30.js";
import "./link-hover.6073cf81.js";
const T = {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 4 7"
    },
    $ = [s("path", {
        fill: "#000",
        d: "M.168 1.075c0-.392.477-.586.75-.305l2.527 2.596c.166.17.166.44 0 .61L.918 6.57a.437.437 0 0 1-.75-.305v-5.19Z"
    }, null, -1)];
const P = {
        render: function (e, a) {
            return l(), t("svg", T, $)
        }
    },
    L = {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 5 8"
    },
    A = [s("path", {
        stroke: "#000",
        "stroke-width": "1.5",
        d: "M.75 0v8m3-8v8"
    }, null, -1)];
const R = {
        render: function (e, a) {
            return l(), t("svg", L, A)
        }
    },
    B = ["src"],
    C = {
        class: "top relative w-full flex-row",
        justify: "between",
        items: "start"
    },
    E = {
        class: "duration type-caption2"
    },
    H = {
        class: "center flex-1 w-full relative"
    },
    K = {
        class: "bottom relative w-full flex-row",
        justify: "between"
    },
    U = {
        key: 2
    },
    X = {
        key: 3
    },
    q = S(r({
        __name: "audio-player",
        props: {
            name: {},
            src: {}
        },
        emits: ["loaded", "play", "pause"],
        setup(r, {
            expose: S,
            emit: T
        }) {
            const {
                app: $,
                browser: L
            } = u();
            o();
            const A = n(null),
                q = n(null),
                z = i(A),
                I = n(!1),
                J = n(null),
                Q = v((() => {
                    if (null == J.value) return;
                    let e = Math.floor(J.value / 60),
                        a = Math.floor(J.value % 60);
                    return a = a.toString().padStart(2, "0"), `${e}:${a}`
                })),
                W = function () {
                    var e;
                    (null == (e = q.value) ? void 0 : e.readyState) >= 1 && (J.value = q.value.duration)
                };
            c((() => {
                W(), T("loaded")
            }));
            const Y = n(0),
                Z = n(0),
                D = n(!1);
            b((() => {
                Y.value = q.value.currentTime, Z.value = q.value.currentTime / q.value.duration, D.value = !q.value.paused
            }));
            const F = v((() => {
                    let e = Math.floor(Y.value / 60);
                    e = e.toString().padStart(2, "0");
                    let a = Math.floor(Y.value % 60);
                    a = a.toString().padStart(2, "0");
                    let l = Y.value % 1;
                    return l = Math.round(100 * l), l = l.toString().padStart(2, "0"), `${e}:${a}:${l}`
                })),
                G = n(!1),
                N = function () {
                    var e, a;
                    q.value && (q.value.paused ? (null == (e = q.value) || e.play(), G.value = !0) : null == (a = q.value) || a.pause())
                },
                O = n(null),
                {
                    elementX: V,
                    elementWidth: ee
                } = d(O),
                ae = function (e) {
                    if (!G.value) return q.value.play(), void(G.value = !0);
                    let a = V.value / ee.value;
                    q.value.currentTime = a * q.value.duration, q.value.paused && q.value.play()
                };
            return _({
                elRef: O,
                onTouchMove: function (e) {
                    L.isMobile || ae()
                },
                onTouchEnd: function (e) {
                    L.isMobile ? N() : ae()
                }
            }), S({
                pause: function () {
                    var e;
                    null == (e = q.value) || e.pause()
                }
            }), (u, o) => {
                const n = e,
                    i = a;
                return l(), t("div", {
                    class: "audio-player flex-col",
                    items: "start",
                    ref_key: "refRoot",
                    ref: A
                }, [s("audio", {
                    src: r.src,
                    ref_key: "refMedia",
                    ref: q,
                    onLoadeddata: W,
                    onPlay: o[0] || (o[0] = e => {
                        I.value = !0, T("play")
                    }),
                    onPause: o[1] || (o[1] = e => {
                        I.value = !1, T("pause")
                    })
                }, null, 40, B), s("div", {
                    class: "progress full",
                    style: f({
                        transform: `scaleX(${p(Z)})`
                    })
                }, null, 4), s("div", C, [m(n, {
                    class: "type-caption2",
                    externalHovering: p(z)
                }, {
                    default: y((() => [w(h(r.name || "audio"), 1)])),
                    _: 1
                }, 8, ["externalHovering"]), s("div", E, h(p(Q)), 1)]), s("div", H, [r.src ? (l(), g(i, {
                    key: 0,
                    src: r.src
                }, null, 8, ["src"])) : x("", !0)]), s("div", {
                    class: "underlay full",
                    ref_key: "refUnderlay",
                    ref: O
                }, null, 512), s("div", K, [s("div", {
                    class: "btn-play flex-row type-caption2",
                    justify: "start",
                    items: "end",
                    onClick: N
                }, [p(I) ? (l(), g(p(R), {
                    key: 1,
                    class: "icon"
                })) : (l(), g(p(P), {
                    key: 0,
                    class: "icon"
                })), p(D) ? (l(), t("span", X, "PAUSE")) : (l(), t("span", U, "PLAY"))]), m(M, {
                    name: "fade"
                }, {
                    default: y((() => [j(s("div", {
                        class: "time"
                    }, h(p(F)), 513), [
                        [k, p(I)]
                    ])])),
                    _: 1
                })])], 512)
            }
        }
    }), [
        ["__scopeId", "data-v-9923f136"]
    ]);
export {
    q as
    default
};