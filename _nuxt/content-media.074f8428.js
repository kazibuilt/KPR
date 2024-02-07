import {
    _ as s
} from "./media-items.vue.e1bd6a93.js";
import t from "./layer-under.8688bd71.js";
import {
    e as o,
    E as e,
    a,
    b as r,
    ab as i,
    h as n,
    j as m,
    r as p,
    o as l,
    l as d,
    m as c,
    q as u,
    w as j,
    u as f,
    aC as v,
    f as y
} from "./entry.40e762a9.js";
import {
    u as g
} from "./useComponentLoad.f16c13de.js";
import "./scroll-scale.f426de23.js";
import "./useScrollTrigger.934dab30.js";
import "./touching-line.dba28028.js";
import "./random-offset.0fe9d36a.js";
import "./flicker-animation.vue.0d4b5aba.js";
import "./useRaf.5395a270.js";
import "./console-text.4537bc5d.js";
import "./dot-caption.f385565b.js";
import "./dot.36dd12fe.js";
import "./hacky-text.bd3e68e0.js";
import "./link-hover.6073cf81.js";
import "./image-gallery.14bbdb9d.js";
import "./btn-close.617c7166.js";
import "./hover-sfx.01594b28.js";
import "./close-stroke.cb61bb4d.js";
import "./media-intrinsic-size.22d18930.js";
import "./intrinsic-scale.es-modules.1631ed54.js";
import "./icon-download.8f6b4887.js";
import "./download.543cc28a.js";
import "./icon-prev.58f92ece.js";
import "./next.c6e616d1.js";
import "./icon-next.009aa529.js";
import "./useAnimateIn.00988aac.js";
import "./detail-corner.e06fbc3b.js";
import "./dayjs.min.34102b5f.js";
import "./Share.bfa2527b.js";
const b = function (s) {
        const {
            app: t
        } = o();
        e((() => t.pageReady), (async (o, e) => {
            t.pageReady || s()
        }))
    },
    _ = {
        class: "content-media relative"
    },
    k = y(a({
        __name: "content-media",
        props: {},
        emits: [],
        setup(a, {
            emit: y
        }) {
            const {
                $gsap: k,
                $ScrollTrigger: h
            } = r(), w = i("story"), {
                app: x,
                browser: C,
                debug: R,
                storyblok: S
            } = o(), E = n((() => w.value.content)), I = n((() => 1)), {
                ids: L,
                loaded: M,
                onComponentLoad: P
            } = g(I.value), T = () => {
                M.value && x.setPreload(v)
            };
            e((() => M.value), T), m((() => {
                T()
            }));
            const $ = p(null),
                q = p(null);
            return b((() => {
                ! function () {
                    let s = new k.timeline;
                    s.add("start"), s.to($.value, {
                        opacity: 0,
                        duration: .3
                    }, "start"), s.to(q.value, {
                        opacity: 0,
                        duration: .3
                    }, "start")
                }()
            })), m(x.setEntered), (o, e) => {
                const a = s,
                    r = t;
                return l(), d("div", _, [c("main", {
                    ref_key: "refMain",
                    ref: $
                }, [u(r, {
                    useBasicMask: !0
                }, {
                    default: j((() => [u(a, {
                        items: f(E).items,
                        onLoaded: e[0] || (e[0] = s => f(P)("media-items")),
                        layer: "under"
                    }, null, 8, ["items"])])),
                    _: 1
                })], 512)])
            }
        }
    }), [
        ["__scopeId", "data-v-65d9a199"]
    ]);
export {
    k as
    default
};