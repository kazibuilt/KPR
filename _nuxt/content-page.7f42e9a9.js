import o from "./render-bloks.f446adcf.js";
import s from "./layer-under.8688bd71.js";
import e from "./layer-over.65481457.js";
import t from "./the-footer.29ba7c67.js";
import {
    a as r,
    b as a,
    ab as n,
    e as l,
    h as i,
    E as m,
    j as p,
    o as u,
    l as d,
    m as j,
    q as c,
    w as b,
    u as k,
    z as v,
    M as f,
    aC as y,
    f as h
} from "./entry.40e762a9.js";
import {
    u as g
} from "./useComponentLoad.f16c13de.js";
import "./useScrollTrigger.934dab30.js";
import "./useRaf.5395a270.js";
import "./hacky-text.bd3e68e0.js";
import "./dot-caption.f385565b.js";
import "./dot.36dd12fe.js";
import "./link-hover.6073cf81.js";
import "./footer-link.da88b1bd.js";
import "./hover-sfx.01594b28.js";
import "./nuxt-link.6ec7a40c.js";
import "./external.17077abd.js";
import "./Storyblok.57ca1dcc.js";
import "./icon-download.8f6b4887.js";
import "./download.543cc28a.js";
import "./btn-main.f5b9edb2.js";
import "./button-base.f7922683.js";
import "./btn-region.dd76d808.js";
import "./chevron.e828f79f.js";
import "./useStory.e04fbd2e.js";
const x = {
        class: "content-page"
    },
    M = {
        class: "layer-under"
    },
    _ = h(r({
        __name: "content-page",
        props: {},
        emits: [],
        setup(r, {
            emit: h
        }) {
            a();
            const _ = n("story"),
                {
                    app: L,
                    browser: w,
                    debug: B,
                    storyblok: C
                } = l(),
                S = i((() => _.value.content.body)),
                E = i((() => {
                    var o;
                    let s = 0;
                    return (null == (o = S.value) ? void 0 : o.length) && s++, s
                })),
                {
                    ids: P,
                    loaded: q,
                    onComponentLoad: z
                } = g(E.value),
                D = () => {
                    q.value && L.setPreload(y)
                };
            return m((() => q.value), D), p((() => {
                D()
            })), p(L.setEntered), (r, a) => {
                const n = o,
                    l = s,
                    i = e,
                    m = t;
                return u(), d("div", x, [j("main", null, [c(l, {
                    useBasicMask: k(_).content.useBasicMask
                }, {
                    default: b((() => [c(n, {
                        blok: k(S),
                        onLoaded: a[0] || (a[0] = o => k(z)("layer-under")),
                        layer: "under"
                    }, null, 8, ["blok"])])),
                    _: 1
                }, 8, ["useBasicMask"]), v(c(i, null, {
                    default: b((() => [c(n, {
                        blok: k(S),
                        onLoaded: a[1] || (a[1] = o => k(z)("layer-over")),
                        layer: "over"
                    }, null, 8, ["blok"])])),
                    _: 1
                }, 512), [
                    [f, k(w).isDesktop && !k(_).content.useBasicMask]
                ])]), v(j("div", M, [c(m)], 512), [
                    [f, !k(_).content.hideFooter]
                ])])
            }
        }
    }), [
        ["__scopeId", "data-v-cc24050b"]
    ]);
export {
    _ as
    default
};