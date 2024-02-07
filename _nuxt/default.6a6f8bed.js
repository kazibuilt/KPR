import o from "./the-frame-simple.95b875ed.js";
import t from "./the-frame.24f5cb81.js";
import r from "./the-smooth-scroll.bf010686.js";
import s from "./the-nav-mobile.0650b977.js";
import e from "./the-subnav-mobile.8570b22a.js";
import i from "./the-popup-gallery.0ce55c3b.js";
import m from "./video-overlay.ae5db8f4.js";
import p from "./transition-wipe.6cfda9d0.js";
import n from "./the-menu.476dd5c9.js";
import a from "./wallet-errors.6369e6ce.js";
import l from "./the-console.12765693.js";
import j from "./widescreen-warning.dbeab87a.js";
import c from "./landscape-warning.8b7f6c60.js";
import u from "./version.93910f8c.js";
import {
    a as d,
    ah as f,
    h as b,
    e as v,
    a9 as h,
    E as g,
    r as y,
    j as w,
    o as k,
    l as x,
    q as z,
    w as S,
    u as _,
    c as O,
    s as q,
    A as C,
    x as M,
    B as T,
    C as H,
    m as N,
    f as U
} from "./entry.40e762a9.js";
import {
    i as B
} from "./gozer-env.ed057cb2.js";
import {
    H as E
} from "./constants.a4ba8ea6.js";
import "./the-frame-layer.d0b666f4.js";
import "./btn-burger.d78a4263.js";
import "./the-frame-progress.b57f55b4.js";
import "./useRaf.5395a270.js";
import "./the-frame-submenu.3b81c5b9.js";
import "./dot-caption.f385565b.js";
import "./dot.36dd12fe.js";
import "./hacky-text.bd3e68e0.js";
import "./useScrollTrigger.934dab30.js";
import "./link-hover.6073cf81.js";
import "./nuxt-link.6ec7a40c.js";
import "./wallet-info.55deb0d2.js";
import "./client-only.d9a7fe3e.js";
import "./disconnect.64c570e2.js";
import "./detail-corner.e06fbc3b.js";
import "./wallet.2a8dacc2.js";
import "./chevron.e828f79f.js";
import "./wallet-store.d6533bc0.js";
import "./index.77e4f8bb.js";
import "./btn-wallet-connect.84406578.js";
import "./btn-close.617c7166.js";
import "./hover-sfx.01594b28.js";
import "./close-stroke.cb61bb4d.js";
import "./wallet-connect.e0bf0890.js";
import "./the-frame-submenu-protocol.183ce2bd.js";
import "./the-frame-submenu-nav.a94090da.js";
import "./scroll-to.c5811ab8.js";
import "./index.6c8f1534.js";
import "./dom-component.59802661.js";
import "./index-default.25f36e61.js";
import "./store.4d67c1b5.js";
import "./index.80933d50.js";
import "./create-canvas.f1f3dfa0.js";
import "./resize-observer.8438de8e.js";
import "./lerp.a6fc2763.js";
import "./BreadCrumbUtils.85e588d3.js";
import "./the-frame-submenu-citizen.865572f9.js";
import "./copy-to-clipboard.1a422321.js";
import "./citizen-store.87c6b519.js";
import "./gallery-store.7012f5b9.js";
import "./index.14014a4f.js";
import "./Share.bfa2527b.js";
import "./icon-mark.3a401251.js";
import "./btn-audio.6205dcb2.js";
import "./btn-console.c3bd3082.js";
import "./console.1bec7543.js";
import "./logo-kpr.5eee7992.js";
import "./btn-main.f5b9edb2.js";
import "./button-base.f7922683.js";
import "./the-popup.e734b133.js";
import "./corner-cut-svg.f06f3274.js";
import "./svg-points.24f22c88.js";
import "./svg-points.vue.baf20d35.js";
import "./get-corner-cut-points.ec30f92c.js"; /* empty css                           */
import "./useTouch.fea93067.js";
import "./pause.9e304ffb.js";
import "./loading-inner-page.2cdf1185.js";
import "./preloader.391a2803.js";
import "./menu-nav-item.06aa7a4b.js";
import "./Storyblok.57ca1dcc.js";
import "./btn-opensea.31bf0294.js";
import "./opensea.c7ab74d4.js";
import "./language-select.2a636078.js";
import "./live-counter.0fe7b8a8.js";
import "./useStory.e04fbd2e.js";
import "./mint-popup-error.b90a4601.js";
import "./the-console-loading.b96f53b3.js";
import "./console-window.d965f654.js";
import "./render-rich-text.3ed5fac6.js";
import "./console-bg.9fa3a6a1.js";
import "./ohno.0f21d8ad.js";
const P = o => (T("data-v-cbb2b504"), o = o(), H(), o),
    R = {
        class: "layout-default",
        id: "layout"
    },
    V = P((() => N("div", {
        id: "canvas-container"
    }, null, -1))),
    $ = P((() => N("div", {
        id: "ui-container"
    }, null, -1))),
    A = P((() => N("div", {
        id: "overlays"
    }, null, -1))),
    I = U(d({
        __name: "default",
        props: {},
        emits: [],
        setup(d, {
            emit: T
        }) {
            f("sandbox", !1);
            const H = ["gallery"],
                N = ["protocol", "citizen"],
                U = b((() => Q.path.includes("citizen"))),
                {
                    app: P,
                    browser: I,
                    debug: J,
                    storyblok: K
                } = v(),
                Q = h(),
                W = b((() => !H.find((o => Q.path.includes(o))) && !B)),
                X = b((() => !!E.test(Q.path) || !!N.find((o => Q.path.includes(o)))));
            g((() => P.isMuted), (o => {
                M.Howler.mute(o)
            }));
            const Y = y(null);
            return w((() => {
                window.TheNavMobile = Y.value
            })), (d, f) => {
                const b = o,
                    v = t,
                    h = r,
                    g = s,
                    y = e,
                    w = i,
                    M = m,
                    T = p,
                    H = n,
                    N = a,
                    B = l,
                    E = j,
                    I = c,
                    K = u;
                return k(), x("div", R, [V, $, z(h, {
                    enabled: _(W)
                }, {
                    default: S((() => [_(X) ? (k(), O(b, {
                        key: 0
                    })) : (k(), O(v, {
                        key: 1
                    })), q(d.$slots, "default", {}, void 0, !0), A])),
                    _: 3
                }, 8, ["enabled"]), z(g, {
                    ref_key: "refNavMobile",
                    ref: Y
                }, null, 512), z(y), z(w), _(P).videoOverlay.src ? (k(), O(M, {
                    key: 0,
                    title: _(P).videoOverlay.title,
                    src: _(P).videoOverlay.src,
                    onClose: f[0] || (f[0] = o => _(P).setVideoOverlay({
                        title: null,
                        src: null
                    }))
                }, null, 8, ["title", "src"])) : C("", !0), z(T), z(H), z(N), _(U) ? C("", !0) : (k(), O(B, {
                    key: 1
                })), z(E), z(I), _(J).enabled ? (k(), O(K, {
                    key: 2
                })) : C("", !0)])
            }
        }
    }), [
        ["__scopeId", "data-v-cbb2b504"]
    ]);
export {
    I as
    default
};