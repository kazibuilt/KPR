import a from "./btn-audio.6205dcb2.js";
import {
    _ as s
} from "./client-only.d9a7fe3e.js";
import {
    a as e,
    e as E,
    b as R,
    r as l,
    j as T,
    P as S,
    aj as A,
    ak as P,
    E as t,
    o as O,
    l as r,
    m as i,
    J as o,
    u as I,
    t as n,
    F as C,
    p as u,
    A as M,
    q as c,
    w as N,
    z as d,
    M as K,
    T as H,
    G as D,
    al as f,
    B as m,
    C as L,
    f as _
} from "./entry.40e762a9.js";
import {
    u as V
} from "./useRaf.5395a270.js";
const v = "" + new URL("loading-triangles.8c5d75b0.svg?inline",
        import.meta.url).href,
    p = "" + new URL("loading-audio-cta-ring.ac9090b0.svg?inline",
        import.meta.url).href,
    g = "" + new URL("loading-audio-cta-ring-m.9405220e.svg?inline",
        import.meta.url).href,
    w = a => (m("data-v-e2914a25"), a = a(), L(), a),
    W = w((() => i("div", {
        class: "bg full"
    }, null, -1))),
    G = {
        class: "bar relative"
    },
    U = {
        class: "details w-full flex-row justify-between items-start"
    },
    y = {
        class: "left flex-row justify-start"
    },
    b = w((() => i("img", {
        class: "icon",
        src: v
    }, null, -1))),
    h = {
        class: "label"
    },
    Y = {
        class: "right filenames desktop-only"
    },
    x = {
        class: "filename"
    },
    k = {
        key: 0,
        class: "name"
    },
    j = {
        class: "icon"
    },
    B = w((() => i("img", {
        class: "desktop-only",
        src: p
    }, null, -1))),
    Z = w((() => i("img", {
        class: "mobile-only",
        src: g
    }, null, -1))),
    F = {
        class: "copy"
    },
    J = _(e({
        __name: "preloader",
        props: {
            show: {}
        },
        emits: [],
        setup(e, {
            emit: m
        }) {
            const L = e,
                {
                    app: _,
                    browser: v,
                    storyblok: p,
                    debug: g
                } = E(),
                {
                    $gsap: w,
                    $ScrollTrigger: J
                } = R(),
                $ = l(null),
                q = l(null),
                z = ["HTTPS://KPRVERSE.COM/KPCO/KAI-14/REACTOR/ISOTOPE-C/43LK2L", "HTTPS://KPRVERSE.COM/KPCO/KAI-14/REACTOR/ISOTOPE-B/4GHBZ", "HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/A/SE_23KJ4L", "HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/A/LM_332K4J3", "HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/A/SE_439592", "HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/MOUNTAIN/DATA/", "HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/CO2_LEVELS", "HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/MOUNTAIN/DATA/SECTOR/C/", "HTTPS://KPRVERSE.COM/KPCO/FOUNDATION/HIDDEN_FILES", "HTTPS://KPRVERSE.COM/KPCO/EMPLOYEES/COUNT", "HTTPS://KPRVERSE.COM/INITIALIZERS/TEMP_MEASURING_TOOL", "HTTPS://KPRVERSE.COM/INITIALIZERS/DRONES/CAPTURE", "HTTPS://KPRVERSE.COM/INITIALIZERS/SPACESHIP", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-4/TITANIUM_SWORD/DURABILITY", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-4/TITANIUM_SWORD/POWER", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-4/TITANIUM_SWORD/DAMAGE", "INITIALIZING SYSTEM…..12", "INITIALIZING SYSTEM…..48", "INITIALIZING SYSTEM…..72", "READY", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-4/WHITE_CRYSTAL_SWORD/DURABILITY", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-4/WHITE_CRYSTAL_SWORD/POWER", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-4/WHITE_CRYSTAL_SWORD/DAMAGE", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-3/HORN_OF_VITALITY/DURABILITY", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-3/HORN_OF_VITALITY/POWER", "HTTPS://KPRVERSE.COM/WEAPONS/GRADE-3/HORN_-OF_VITALITY/DAMAGE", "HTTPS://KPRVERSE.COM/JOURNAL/ORIGIN_STORY", "HTTPS://KPRVERSE.COM/JOURNAL/LORE", "HTTPS://KPRVERSE.COM/JOURNAL/HIDDEN_STORIES", "HTTPS://KPRVERSE.COM/MEDIA/PUBLIC", "HTTPS://KPRVERSE.COM/MEDIA/HIDDEN", "LOADING ATTRIBUTES"],
                X = l(0);
            let Q;
            const aa = function () {
                Q = setTimeout((() => {
                    X.value += 1, X.value >= z.length - 1 || aa()
                }), f(150, 400))
            };
            T(aa), S((() => {
                clearTimeout(Q)
            }));
            const {
                x: sa,
                y: ea
            } = A();
            let Ea = {
                x: new P({
                    current: .5 * v.windowWidth,
                    ease: .4
                }),
                y: new P({
                    current: .75 * v.windowHeight,
                    ease: .4
                })
            };
            V((() => {
                v.isMobile || sa.value <= 0 && ea.value <= 0 || (Ea.x.update(sa.value), Ea.y.update(ea.value), q.value.style.transform = `translate(${Ea.x.current}px, ${Ea.y.current}px)`)
            }));
            return t((() => L.show), (() => {
                L.show ? (new w.timeline).to($.value, {
                    autoAlpha: 1
                }) : (new w.timeline).to($.value, {
                    autoAlpha: 0
                })
            })), (E, R) => {
                const l = a,
                    T = s;
                return O(), r("div", {
                    class: D(["preloader full flex-center", {
                        show: e.show,
                        "no-cursor": I(_).isMuted
                    }]),
                    ref_key: "refRoot",
                    ref: $
                }, [W, i("div", G, [i("div", {
                    class: "progress",
                    style: o({
                        transform: `scaleX(${I(_).loadProgress})`
                    })
                }, null, 4), i("div", U, [i("div", y, [b, i("div", h, "LOADING - " + n(Math.floor(100 * I(_).loadProgress)) + "%", 1)]), i("div", Y, [(O(), r(C, null, u(z, ((a, s) => i("div", x, [s == I(X) ? (O(), r("div", k, n(a), 1)) : M("", !0)]))), 64))])])]), c(H, {
                    name: "fade"
                }, {
                    default: N((() => [d(i("div", {
                        class: "cta-audio",
                        ref_key: "refCta",
                        ref: q
                    }, [i("div", j, [B, Z, c(T, null, {
                        default: N((() => [c(l, {
                            clickable: !1,
                            isMuted: !1,
                            active: e.show && I(_).isMuted
                        }, null, 8, ["active"]), i("div", F, n(I(v).isMobile ? "Tap" : "Click") + " to Enable Sound", 1)])),
                        _: 1
                    })])], 512), [
                        [K, I(_).isMuted]
                    ])])),
                    _: 1
                })], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-e2914a25"]
    ]);
export {
    J as
    default
};