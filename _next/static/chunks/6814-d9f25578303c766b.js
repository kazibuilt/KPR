"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6814], {
        35439: function (e, t, a) {
            a.r(t), a.d(t, {
                clickable: function () {
                    return i
                },
                clickableIcon: function () {
                    return n
                }
            }), a(14468), a(1061), a(95356);
            var r = a(80947),
                i = (0, r.c)({
                    defaultClassName: "_17w06xpo",
                    variantClassNames: {
                        appearance: {
                            primary: "_17w06xpp _17w06xpc _17w06xpf _17w06xpe",
                            primarySmall: "_17w06xpq _17w06xpc _17w06xpf _17w06xpd",
                            secondary: "_17w06xpr _17w06xpc _17w06xpg _17w06xpe",
                            tertiary: "_17w06xps _17w06xpc _17w06xph _17w06xpe",
                            plainText: "ektxjy0 _17w06xpi",
                            nav: "ektxjy0 _17w06xpj",
                            empty: "ektxjy0"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                n = (0, r.c)({
                    defaultClassName: "_17w06xpk",
                    variantClassNames: {
                        size: {
                            big: "_17w06xpl",
                            small: "_17w06xpm"
                        },
                        hideOnMobile: {
                            true: "_17w06xpn"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                })
        },
        97952: function (e, t, a) {
            a.r(t), a.d(t, {
                buttonsWrapper: function () {
                    return r
                }
            }), a(14468), a(46104);
            var r = "_1qkpuxg0"
        },
        57102: function (e, t, a) {
            a.r(t), a.d(t, {
                _backgroundColor: function () {
                    return i
                },
                breakout: function () {
                    return n
                },
                contentContainer: function () {
                    return l
                },
                sectionContainer: function () {
                    return o
                }
            }), a(14468), a(11694);
            var r = a(80947),
                i = "var(--_80a5p00)",
                n = "_80a5p08",
                l = (0, r.c)({
                    defaultClassName: "_80a5p06",
                    variantClassNames: {
                        hasBlockSpacings: {
                            true: "_80a5p07"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                o = (0, r.c)({
                    defaultClassName: "_80a5p01",
                    variantClassNames: {
                        hasMarginTop: {
                            true: "_80a5p02"
                        },
                        isStickyNav: {
                            true: "_80a5p03"
                        },
                        hasMarginBottom: {
                            true: "_80a5p04"
                        },
                        hasExtraPadding: {
                            true: "_80a5p05"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                })
        },
        25203: function (e, t, a) {
            a.r(t), a.d(t, {
                breakpoints: function () {
                    return r
                },
                screenSizes: function () {
                    return i
                }
            });
            var r = {
                    xxs: "(min-width: 0px)",
                    xs: "(min-width: 375px)",
                    sm: "(min-width: 430px)",
                    md: "(min-width: 740px)",
                    lg: "(min-width: 1000px)",
                    xl: "(min-width: 1300px)",
                    xxl: "(min-width: 1900px)"
                },
                i = {
                    xxs: 0,
                    xs: 375,
                    sm: 430,
                    md: 740,
                    lg: 1e3,
                    xl: 1300,
                    xxl: 1900
                }
        },
        21334: function (e, t, a) {
            a.r(t), a.d(t, {
                Button: function () {
                    return o
                }
            });
            var r = a(32835),
                i = a(35439),
                n = a(5156),
                l = a.n(n);
            let o = e => {
                let {
                    children: t,
                    appearance: a,
                    type: n,
                    className: o,
                    ...s
                } = e;
                return (0, r.jsx)("button", {
                    className: l()((0, i.clickable)({
                        appearance: a
                    }), o),
                    ...s,
                    children: t
                })
            }
        },
        12237: function (e, t, a) {
            a.r(t), a.d(t, {
                LinkAction: function () {
                    return i
                }
            });
            var r = a(32835);
            let i = e => {
                let {
                    action: t,
                    renderButton: a
                } = e;
                switch (t.type) {
                    case "linkPayloadActionAlert":
                        return (0, r.jsx)(r.Fragment, {
                            children: a({
                                onClick: () => alert(t.payload.alert)
                            })
                        });
                    case "linkPayloadActionModal":
                        return (0, r.jsx)(r.Fragment, {
                            children: a({
                                onClick: () => alert(t.payload.modalContent)
                            })
                        })
                }
            }
        },
        99756: function (e, t, a) {
            a.r(t), a.d(t, {
                Disclosure: function () {
                    return m
                },
                DisclosureBody: function () {
                    return u
                }
            });
            var r = a(32835),
                i = a(59686);
            a(14468), a(24652);
            var n = a(80947),
                l = (0, n.c)({
                    defaultClassName: "_1rn2xcc2",
                    variantClassNames: {
                        isOpen: {
                            true: "_1rn2xcc3"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                o = a(47052);
            let s = (0, i.forwardRef)((e, t) => {
                let {
                    onClick: a,
                    children: i,
                    isOpen: n
                } = e;
                return (0, r.jsxs)("div", {
                    className: "_1rn2xcc0",
                    onClick: a,
                    ref: t,
                    children: [(0, r.jsx)("h4", {
                        className: "_1rn2xcc1",
                        children: i
                    }), (0, r.jsx)(o.x, {
                        className: l({
                            isOpen: n
                        })
                    })]
                })
            });
            a(1061), a(9114);
            var d = (0, n.c)({
                    defaultClassName: "_93olzz0 ektxjy1",
                    variantClassNames: {},
                    defaultVariants: {},
                    compoundVariants: []
                }),
                c = (0, n.c)({
                    defaultClassName: "_93olzz1",
                    variantClassNames: {
                        isOpen: {
                            true: "_93olzz2"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                });
            let u = e => {
                    let {
                        isOpen: t,
                        itemId: a,
                        children: i
                    } = e;
                    return (0, r.jsx)("div", {
                        className: c({
                            isOpen: t
                        }),
                        role: "region",
                        id: "sect".concat(a),
                        "aria-labelledby": "accordion-".concat(a),
                        children: (0, r.jsx)("div", {
                            className: "_93olzz3",
                            children: i
                        })
                    })
                },
                m = e => {
                    let {
                        itemId: t,
                        isOpen: a = !1,
                        onRequestClose: i,
                        onRequestOpen: n,
                        label: l,
                        children: o,
                        renderHeader: c
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("button", {
                            className: d(),
                            onClick: () => {
                                i && n && void 0 !== t && (a ? i(t) : n(t))
                            },
                            "aria-expanded": a,
                            "aria-controls": "sect".concat(t),
                            id: "accordion-".concat(t),
                            "aria-disabled": a,
                            children: c ? c() : (0, r.jsx)(s, {
                                isOpen: a,
                                children: l || ""
                            })
                        }), (0, r.jsx)(u, {
                            isOpen: a,
                            itemId: t,
                            children: o
                        })]
                    })
                }
        },
        1577: function (e, t, a) {
            a.r(t), a.d(t, {
                DisclosuresList: function () {
                    return n
                }
            });
            var r = a(32835),
                i = a(59686);
            a(11039);
            let n = e => {
                let {
                    allowMultipleActiveItems: t = !0,
                    initiallyOpenedItemsIds: a = [],
                    children: n,
                    className: l
                } = e, [o, s] = (0, i.useState)(a), d = "".concat("vi1r8e0", " ").concat(l);
                return (0, r.jsx)("div", {
                    className: d,
                    children: n(e => s(t ? o.includes(e) ? [...o] : [...o, e] : [e]), e => s(t ? [...o.filter(t => t !== e)] : []), e => o.includes(e))
                })
            }
        },
        97426: function (e, t, a) {
            a.r(t), a.d(t, {
                Media: function () {
                    return A
                },
                MediaAdapter: function () {
                    return B
                }
            });
            var r = a(32835),
                i = a(62338),
                n = a.n(i),
                l = a(88454);
            let o = {
                    square: 1,
                    landscape1: .42,
                    landscape2: .64,
                    portrait1: 1.1,
                    portrait2: 1.32,
                    largeExtraPromo: 1.25,
                    smallExtraPromo: 1.75,
                    landscape: 1 / (4 / 3),
                    portrait: 1 / (3 / 4),
                    sixteenByNine: 1 / (16 / 9),
                    ultraportrait: 1 / (9 / 16),
                    panoramic: .5
                },
                s = e => {
                    let {
                        width: t,
                        ratioType: a,
                        height: r,
                        crop: i
                    } = e, n = (() => {
                        if (!a) return;
                        if ("string" == typeof a) return o[a];
                        let e = a["".concat(t)];
                        return e ? o[e] : void 0
                    })();
                    return n ? [t, Math.floor(t * n)] : i && r ? [t * (1 - (i.left, i.right)), r * (1 - (i.bottom + i.top))] : [t, r]
                };
            var d = a(34051);
            let c = e => {
                    let {
                        layout: t,
                        alt: a,
                        width: i,
                        src: n,
                        height: l,
                        objectFit: o,
                        sizes: s,
                        priority: c,
                        placeholder: u,
                        loader: m,
                        blurDataURL: p,
                        objectPosition: h,
                        className: f,
                        unoptimized: v,
                        fetchPriority: y
                    } = e, w = "fill" === t;
                    return (0, r.jsx)(d.default, {
                        fetchPriority: y,
                        src: n,
                        fill: w,
                        width: w ? void 0 : i,
                        height: w ? void 0 : l,
                        alt: a,
                        loader: m,
                        sizes: s,
                        placeholder: u,
                        blurDataURL: p,
                        priority: c,
                        className: f,
                        unoptimized: v,
                        style: {
                            ...w ? {
                                objectFit: "cover"
                            } : {},
                            ...o ? {
                                objectFit: o
                            } : {},
                            ...h ? {
                                objectPosition: h
                            } : {},
                            ..."responsive" === t ? {
                                width: "100%",
                                height: "auto"
                            } : {},
                            ..."responsive-cover" === t ? {
                                width: "100%",
                                height: "100%"
                            } : {}
                        }
                    })
                },
                u = n()(l.U),
                m = e => {
                    var t;
                    let {
                        ratio: a,
                        objectFit: i,
                        priority: n,
                        sizes: l,
                        layout: o,
                        mediaPayload: d,
                        className: m,
                        imgClassName: p
                    } = e, {
                        image: h
                    } = d;
                    if (!(null == h ? void 0 : h.asset)) return null;
                    let f = u.image(h),
                        [v, y] = s({
                            width: h.width,
                            crop: h.crop,
                            ratioType: a,
                            height: h.height
                        }),
                        w = (() => {
                            try {
                                return f.url()
                            } catch (e) {
                                return
                            }
                        })();
                    return w ? (0, r.jsx)("div", {
                        className: m,
                        children: (0, r.jsx)(c, {
                            alt: null !== (t = h.alt) && void 0 !== t ? t : "",
                            objectFit: i,
                            priority: n,
                            src: w,
                            sizes: l,
                            layout: o,
                            width: v,
                            height: y,
                            loader: e => {
                                let {
                                    width: t,
                                    quality: r
                                } = e, [i, n] = s({
                                    width: t,
                                    ratioType: a
                                });
                                return n && i ? f.width(i).height(n).quality(r || 80).auto("format").url() || "" : i ? f.width(i).quality(r || 80).auto("format").url() || "" : f.quality(r || 80).auto("format").url() || ""
                            },
                            unoptimized: h.unoptimized,
                            className: p
                        })
                    }) : null
                };
            var p = a(59686);
            let h = e => {
                let {
                    mediaPayload: t,
                    priority: a,
                    sizes: i,
                    layout: n,
                    originalWidth: l,
                    objectPosition: o
                } = e;
                if ((null == t ? void 0 : t.type) !== "mux-image" || !t.image) return null;
                let {
                    image: s
                } = t;
                return (0, r.jsx)(c, {
                    alt: s.alt || "",
                    objectFit: "cover",
                    priority: a,
                    src: t.image.src,
                    sizes: i,
                    layout: n,
                    loader: e => {
                        let {
                            width: t,
                            src: a
                        } = e, r = new URLSearchParams, i = t > l ? l : t;
                        return i && r.append("width", "".concat(i)), "".concat(a, "&").concat(r.toString())
                    },
                    placeholder: "empty",
                    objectPosition: o
                })
            };
            var f = a(1231);
            a(66960);
            var v = a(80947),
                y = (0, v.c)({
                    defaultClassName: "_1a8f2hv4",
                    variantClassNames: {
                        objectPosition: {
                            top: "_1a8f2hv5",
                            center: "_1a8f2hv6",
                            bottom: "_1a8f2hv7"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                w = (0, v.c)({
                    defaultClassName: "_1a8f2hv0",
                    variantClassNames: {
                        layout: {
                            fill: "_1a8f2hv1",
                            responsive: "_1a8f2hv2",
                            "responsive-cover": "_1a8f2hv3"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                });
            let x = (0, p.forwardRef)((e, t) => {
                let {
                    layout: a,
                    width: i,
                    height: n,
                    sizes: l,
                    firstFrame: s,
                    priority: d,
                    alt: c,
                    loop: u = !0,
                    muted: m = !0,
                    preload: v = "none",
                    autoplay: x = !1,
                    src: g,
                    play: _,
                    load: j,
                    onPlaying: C,
                    onPause: N,
                    onCanPlay: b,
                    onLoadedData: V,
                    onLoadStart: k,
                    onWaiting: P,
                    onEnded: L,
                    onNotAllowed: M,
                    onError: E,
                    ratio: q,
                    objectPosition: S
                } = e, z = null != S ? S : "bottom", O = (() => {
                    if ("responsive" === a) {
                        if (q && "string" == typeof q) {
                            let e = o[q];
                            return {
                                paddingBottom: "".concat(100 * e, "%")
                            }
                        }
                        return {
                            paddingBottom: "".concat(n / i * 100, "%")
                        }
                    }
                })(), T = (0, p.useRef)(!1), R = (0, p.useRef)(null);
                return (0, p.useEffect)(() => {
                    if (void 0 === _) return;
                    let e = R.current;
                    (async () => {
                        if (e && _) {
                            T.current = !0, await e.play().catch(e => {
                                "NotAllowedError" === e.name ? M && M() : ((0, f.Tb)(e), E && E())
                            }), T.current = !1;
                            return
                        }!e || _ || T.current || null == e || e.pause()
                    })()
                }, [_, g]), (0, p.useEffect)(() => {
                    if (void 0 === j) return;
                    let e = R.current;
                    if (e && j) {
                        null == e || e.load();
                        return
                    }
                }, [j]), (0, r.jsxs)("div", {
                    style: O,
                    className: w({
                        layout: a
                    }),
                    ref: t,
                    children: [(0, r.jsx)(h, {
                        mediaPayload: {
                            type: "mux-image",
                            image: {
                                src: s,
                                alt: c
                            }
                        },
                        priority: d,
                        layout: "fill",
                        sizes: l,
                        originalWidth: i,
                        objectPosition: z
                    }), (0, r.jsx)("video", {
                        className: y({
                            objectPosition: z
                        }),
                        ref: R,
                        preload: v,
                        autoPlay: x,
                        muted: m,
                        loop: u,
                        playsInline: !0,
                        title: c,
                        src: g,
                        onEnded: L,
                        onPlaying: C,
                        onPause: N,
                        onCanPlayThrough: b,
                        onWaiting: P,
                        onLoadedData: V,
                        onLoadStart: k
                    })]
                })
            });
            var g = a(10472);
            let _ = e => {
                    let {
                        autoplay: t,
                        isMuted: a
                    } = e, [r, i] = (0, p.useState)(void 0), [n, l] = (0, p.useState)(void 0), [o, s] = (0, p.useState)(a), [d, c] = (0, p.useState)(void 0), [u, m] = (0, p.useState)(void 0), [h, f] = (0, p.useState)(!1), {
                        ref: v,
                        inView: y,
                        entry: w
                    } = (0, g.YD)({
                        rootMargin: "300px",
                        triggerOnce: !0
                    });
                    return (0, p.useEffect)(() => {
                        if (!(null == w ? void 0 : w.target)) return;
                        let e = "none" === window.getComputedStyle(null == w ? void 0 : w.target).display;
                        y && !e && t && m(!0), !y || e || t || (l(!1), i(!1))
                    }, [y, w, t]), {
                        containerRef: v,
                        videoControlProps: {
                            onPlaying: () => {
                                i(!0), l(!1), f(!1)
                            },
                            onPause: () => {
                                i(!1)
                            },
                            onCanPlay: () => {
                                t && !r && c(!0), t || r || !h || c(!0), t || r || h || l(!1)
                            },
                            onWaiting: () => {
                                c(!1), i(!1), l(!0), f(!0)
                            },
                            onError: () => {
                                c(void 0), i(void 0), l(void 0)
                            },
                            onNotAllowed: () => {
                                c(!1), i(!1), l(!1)
                            },
                            onLoadStart: () => {
                                l(!0)
                            },
                            play: d,
                            load: u,
                            muted: o
                        },
                        controlsProps: {
                            isPlaying: r,
                            isLoading: n,
                            muted: o,
                            onRequestPlay: () => {
                                c(!0)
                            },
                            onRequestPause: () => {
                                c(!1)
                            },
                            onRequestUnmute: () => {
                                s(!1)
                            },
                            onRequestMute: () => {
                                s(!0)
                            }
                        }
                    }
                },
                j = () => null,
                C = e => {
                    let {
                        layout: t,
                        priority: a,
                        video: i,
                        loop: n,
                        muted: l = !0,
                        controlsPosition: o,
                        autoplay: s = !0,
                        sizes: d,
                        className: c,
                        ratio: u,
                        objectFit: m
                    } = e, {
                        firstFrame: h,
                        mp4: f,
                        width: v,
                        height: y,
                        alt: w,
                        cropAlignment: g
                    } = i;
                    (0, p.useEffect)(() => {
                        "contain" === m && console.warn("object-fit:contain not working with video!")
                    }, []);
                    let {
                        containerRef: C,
                        videoControlProps: N,
                        controlsProps: b
                    } = _({
                        autoplay: s,
                        isMuted: l
                    });
                    return (0, r.jsxs)("div", {
                        ref: C,
                        className: c,
                        children: [(0, r.jsx)(x, {
                            src: f,
                            width: v,
                            height: y,
                            layout: t,
                            sizes: d,
                            firstFrame: h,
                            alt: w,
                            loop: n,
                            priority: a,
                            ratio: u,
                            objectPosition: "middle" === g ? "center" : g,
                            ...N
                        }), (0, r.jsx)(j, {
                            ...b,
                            controlsPosition: o,
                            withSoundControl: !1
                        })]
                    })
                },
                N = e => {
                    let {
                        mediaPayload: t,
                        videoOverride: a,
                        ...i
                    } = e, {
                        video: n
                    } = t;
                    return a ? a(n) : (0, r.jsx)(C, {
                        video: n,
                        ...i
                    })
                },
                b = e => {
                    let {
                        width: t,
                        height: a,
                        src: r,
                        cropTo: i = "center"
                    } = e;
                    return r + "&" + [...t ? ["width=".concat(t)] : [], ...a ? ["height=".concat(a)] : [], ...i ? ["crop=".concat(i)] : []].join("&")
                },
                V = "production" !== a(692).env.CONTEXT,
                k = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return V && console.error(...t)
                },
                P = (e, t, a, r) => {
                    let i = e > t ? t : e,
                        [, n] = s({
                            width: i,
                            ratioType: r
                        });
                    if (n && n > a && r) {
                        if ("string" != typeof r) throw Error("Responsive hardcrop ratio is not supported by Shopify images");
                        let e = Math.floor(a / o[r]),
                            [, t] = s({
                                width: e,
                                ratioType: r,
                                height: a
                            });
                        return [e, t]
                    }
                    return [i, n]
                },
                L = e => {
                    let {
                        ratio: t,
                        objectFit: a,
                        priority: i,
                        sizes: n,
                        layout: l,
                        mediaPayload: o,
                        className: d
                    } = e, {
                        image: u
                    } = o, {
                        src: m,
                        width: p,
                        height: h,
                        alt: f
                    } = u;
                    if (!(p && h)) return k("Shopify image has no width or height"), null;
                    let [, v] = s({
                        width: p,
                        ratioType: t,
                        height: h
                    });
                    return (0, r.jsx)("div", {
                        className: d,
                        children: (0, r.jsx)(c, {
                            alt: null != f ? f : "",
                            objectFit: a,
                            priority: i,
                            sizes: n,
                            layout: l,
                            src: m,
                            width: p,
                            height: v,
                            loader: e => {
                                let {
                                    width: a,
                                    src: r
                                } = e, [i, n] = P(a, p, h, t);
                                return b({
                                    width: i,
                                    height: n,
                                    src: r
                                })
                            }
                        })
                    })
                };
            a(61190);
            var M = (0, v.c)({
                defaultClassName: "tmw5200",
                variantClassNames: {
                    layout: {
                        fill: "tmw5201",
                        responsive: "tmw5202",
                        "responsive-cover": "tmw5203"
                    }
                },
                defaultVariants: {},
                compoundVariants: []
            });

            function E(e) {
                var t, a, i, n, l;
                let {
                    mediaPayload: s,
                    priority: d,
                    previewImageOptions: u = {},
                    id: m = s.id,
                    playsInline: h = !0,
                    controls: f = !1,
                    sourceProps: v = {},
                    layout: y,
                    loop: w = !0,
                    ratio: x
                } = e, g = b({
                    src: null !== (l = null === (t = s.previewImage) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : "",
                    width: (null === (a = s.previewImage) || void 0 === a ? void 0 : a.width) || 0,
                    ...u
                });
                if (!s.sources) throw Error("<Video/> requires a 'data.sources' array");
                let _ = (null === (i = s.previewImage) || void 0 === i ? void 0 : i.height) || 1,
                    j = (null === (n = s.previewImage) || void 0 === n ? void 0 : n.width) || 1,
                    C = (() => {
                        if ("responsive" === y) {
                            if (x && "string" == typeof x) {
                                let e = o[x];
                                return {
                                    paddingBottom: "".concat(100 * e, "%")
                                }
                            }
                            return {
                                paddingBottom: "".concat(_ / j * 100, "%")
                            }
                        }
                    })();
                return (0, r.jsxs)("div", {
                    style: C,
                    className: M({
                        layout: y
                    }),
                    children: [(0, r.jsx)(c, {
                        src: g,
                        priority: d,
                        layout: "fill",
                        alt: s.alt || ""
                    }), (0, r.jsx)("video", {
                        className: "tmw5204",
                        autoPlay: !0,
                        muted: !0,
                        loop: w,
                        id: m,
                        playsInline: h,
                        controls: f,
                        poster: g,
                        children: s.sources.map(e => {
                            if (!((null == e ? void 0 : e.url) && (null == e ? void 0 : e.mimeType))) throw Error("<Video/> needs 'source.url' and 'source.mimeType'");
                            return (0, p.createElement)("source", {
                                ...v,
                                key: e.url,
                                src: e.url,
                                type: e.mimeType
                            })
                        })
                    })]
                })
            }
            a(14465);
            var q = (0, v.c)({
                defaultClassName: "_3kln5b0",
                variantClassNames: {
                    layout: {
                        fill: "_3kln5b1",
                        responsive: "_3kln5b2",
                        raw: "_3kln5b3",
                        "responsive-cover": "_3kln5b4"
                    }
                },
                defaultVariants: {},
                compoundVariants: []
            });

            function S(e) {
                var t, a, i;
                let {
                    mediaPayload: n,
                    options: l,
                    id: o = n.id,
                    frameBorder: s = "0",
                    allow: d = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: u = !0,
                    loading: m = "lazy",
                    layout: h,
                    priority: f,
                    loop: v = !0
                } = e;
                if (!n.embedUrl) throw Error("<ExternalVideo/> requires the 'embedUrl' property");
                let y = (a = n.embedUrl, i = {
                        autoplay: 1,
                        controls: 0,
                        loop: v ? 1 : 0,
                        muted: 1,
                        playsinline: 1,
                        ...l
                    }, (0, p.useMemo)(() => i ? function (e, t) {
                        if (null == t) return e;
                        let a = Object.keys(t).reduce((e, a) => {
                            let r = t[a];
                            return null == r ? e : e + "&".concat(a, "=").concat(r)
                        }, "");
                        return "".concat(e, "?").concat(a)
                    }(a, i) : a, [a, i])),
                    w = n.previewImage,
                    x = ((null == w ? void 0 : w.height) || 1) / ((null == w ? void 0 : w.width) || 1) * 100;
                return (0, r.jsxs)("div", {
                    style: "responsive" === h ? {
                        paddingBottom: "".concat(x, "%")
                    } : void 0,
                    className: q({
                        layout: h
                    }),
                    children: [(null == w ? void 0 : w.url) && (0, r.jsx)(c, {
                        src: null == w ? void 0 : w.url,
                        priority: f,
                        layout: "fill",
                        alt: w.altText || ""
                    }), (0, r.jsx)("iframe", {
                        className: "_3kln5b5",
                        title: null !== (t = n.alt) && void 0 !== t ? t : n.id,
                        id: null != o ? o : n.embedUrl,
                        frameBorder: s,
                        allow: d,
                        allowFullScreen: u,
                        src: y,
                        loading: m
                    })]
                })
            }
            var z = a(5156),
                O = a.n(z);
            a(68741);
            var T = (0, v.c)({
                    defaultClassName: "_1j8fq3a0",
                    variantClassNames: {
                        shouldHideOnMobile: {
                            true: "_1j8fq3a1"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                R = (0, v.c)({
                    defaultClassName: "_1j8fq3a3",
                    variantClassNames: {
                        layout: {
                            fill: "_1j8fq3a4",
                            responsive: "_1j8fq3a5",
                            "responsive-cover": "_1j8fq3a6"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                });
            let B = e => {
                    let {
                        layout: t = "responsive",
                        objectFit: a,
                        sizes: i,
                        priority: n,
                        mediaPayload: l,
                        loop: o,
                        autoplay: s,
                        muted: d,
                        ratio: c,
                        controlsPosition: u,
                        videoOverride: p,
                        className: h,
                        imgClassName: f
                    } = e;
                    switch (null == l ? void 0 : l.type) {
                        case "sanity-image":
                            return (0, r.jsx)(m, {
                                mediaPayload: l,
                                sizes: i,
                                objectFit: a,
                                priority: n,
                                layout: t,
                                ratio: c,
                                className: h,
                                imgClassName: f
                            });
                        case "mux-video":
                            return (0, r.jsx)(N, {
                                mediaPayload: l,
                                layout: t,
                                priority: n,
                                ratio: c,
                                objectFit: a,
                                loop: o,
                                sizes: i,
                                muted: d,
                                controlsPosition: u,
                                autoplay: s,
                                videoOverride: p,
                                className: h
                            });
                        case "shopify-image":
                            return (0, r.jsx)(L, {
                                sizes: i,
                                objectFit: a,
                                mediaPayload: l,
                                layout: t,
                                priority: n,
                                loop: o,
                                ratio: c,
                                className: h
                            });
                        case "shopify-media-video":
                            return (0, r.jsx)(E, {
                                mediaPayload: l.video,
                                layout: t,
                                priority: n,
                                loop: o
                            });
                        case "shopify-media-external-video":
                            return (0, r.jsx)(S, {
                                mediaPayload: l.video,
                                layout: t,
                                priority: n,
                                loop: o
                            });
                        default:
                            return (0, r.jsx)("div", {
                                children: "Unsupported media source"
                            })
                    }
                },
                A = e => {
                    let {
                        mediaPayload: t,
                        mediaPayloadMobile: a,
                        layout: i,
                        videoOverride: n,
                        videoOverrideMobile: l,
                        className: o,
                        ...s
                    } = e;
                    return t ? (0, r.jsxs)("div", {
                        className: O()(R({
                            layout: i
                        }), o),
                        children: [(0, r.jsx)(B, {
                            mediaPayload: t,
                            layout: i,
                            ...s,
                            videoOverride: n,
                            className: T({
                                shouldHideOnMobile: !!a
                            })
                        }), a && (0, r.jsx)(B, {
                            mediaPayload: a,
                            layout: i,
                            ...s,
                            videoOverride: l,
                            className: "_1j8fq3a2"
                        })]
                    }) : null
                }
        },
        34453: function (e, t, a) {
            a.r(t), a.d(t, {
                MODAL_CLOSE_TIME: function () {
                    return y
                },
                MODAL_OPEN_TIME: function () {
                    return v
                },
                Modal: function () {
                    return w
                }
            });
            var r = a(32835),
                i = a(75293),
                n = a.n(i),
                l = a(59686);
            a(14468), a(19446);
            var o = a(80947),
                s = (0, o.c)({
                    defaultClassName: "_1hg784m4",
                    variantClassNames: {
                        overlayVariant: {
                            transparent: "_1hg784m5",
                            blur: "_1hg784m6",
                            light: "_1hg784m7",
                            dark: "_1hg784m8"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                d = (0, o.c)({
                    defaultClassName: "_1hg784m0",
                    variantClassNames: {
                        hasPadding: {
                            true: "_1hg784m1"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                c = a(46427);
            let u = l.forwardRef((e, t) => {
                let {
                    overlayCloseButton: a,
                    overlayCloseButtonLabel: i,
                    openTime: n,
                    closeTime: l,
                    children: o,
                    hasPadding: d,
                    overlayVariant: u,
                    ...m
                } = e;
                return (0, r.jsxs)("div", {
                    ...m,
                    ref: t,
                    style: (0, c.L)({
                        "var(--_1hg784m9)": "".concat(n, "ms"),
                        "var(--_1hg784ma)": "".concat(l, "ms")
                    }),
                    children: [(0, r.jsx)("div", {
                        className: s({
                            overlayVariant: u
                        })
                    }), o]
                })
            });
            u.displayName = "Overlay", a(75644);
            var m = (0, o.c)({
                    defaultClassName: "_141wilhk",
                    variantClassNames: {
                        transition: {
                            "slide-from-right": "_141wilhl",
                            "slide-from-top": "_141wilhm",
                            "slide-from-left": "_141wilhn",
                            "slide-from-bottom": "_141wilho",
                            fade: "_141wilhp"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                p = (0, o.c)({
                    defaultClassName: "_141wilh2",
                    variantClassNames: {
                        position: {
                            center: "_141wilh3",
                            bottom: "_141wilh4",
                            right: "_141wilh5",
                            left: "_141wilh6",
                            top: "_141wilh7"
                        },
                        size: {
                            intrinsic: "_141wilh8",
                            stretch: "_141wilh9",
                            "stretch-x": "_141wilha",
                            "stretch-y": "_141wilhb"
                        },
                        variant: {
                            default: "_141wilhc",
                            "white-rounded": "_141wilhd",
                            rounded: "_141wilhe"
                        },
                        transition: {
                            "slide-from-right": "_141wilhf",
                            "slide-from-top": "_141wilhg",
                            "slide-from-left": "_141wilhh",
                            "slide-from-bottom": "_141wilhi",
                            fade: "_141wilhj"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                h = (0, o.c)({
                    defaultClassName: "_141wilhq",
                    variantClassNames: {
                        transition: {
                            "slide-from-right": "_141wilhr",
                            "slide-from-top": "_141wilhs",
                            "slide-from-left": "_141wilht",
                            "slide-from-bottom": "_141wilhu",
                            fade: "_141wilhv"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                });
            let f = l.forwardRef((e, t) => {
                let {
                    children: a,
                    openTime: i,
                    closeTime: n,
                    transition: l,
                    variant: o,
                    position: s,
                    size: d,
                    onRequestClose: u,
                    className: m,
                    ...p
                } = e;
                return (0, r.jsx)("div", {
                    className: m,
                    ...p,
                    ref: t,
                    style: (0, c.L)({
                        "var(--_141wilh0)": "".concat(i, "ms"),
                        "var(--_141wilh1)": "".concat(n, "ms")
                    }),
                    children: a
                })
            });
            f.displayName = "Content";
            let v = 400,
                y = 200,
                w = e => {
                    let {
                        variant: t = "default",
                        position: a = "center",
                        size: i = "intrinsic",
                        overlayCloseButton: l,
                        overlayCloseButtonLabel: o,
                        overlayVariant: s = "dark",
                        transition: c = "fade",
                        isOpen: w,
                        onRequestClose: x,
                        children: g,
                        ..._
                    } = e, j = {
                        base: d({
                            hasPadding: "center" === a && "intrinsic" === i
                        }),
                        afterOpen: "_1hg784m2",
                        beforeClose: "_1hg784m3"
                    }, C = {
                        base: p({
                            variant: t,
                            position: a,
                            size: i,
                            transition: c
                        }),
                        afterOpen: m({
                            transition: c
                        }),
                        beforeClose: h({
                            transition: c
                        })
                    }, N = {
                        variant: t,
                        position: a,
                        size: i,
                        transition: c,
                        closeTime: y,
                        openTime: v,
                        onRequestClose: x
                    }, b = {
                        overlayCloseButton: l,
                        overlayCloseButtonLabel: o,
                        overlayVariant: s,
                        closeTime: y,
                        openTime: v
                    };
                    return (0, r.jsx)(n(), {
                        ..._,
                        isOpen: w,
                        onRequestClose: x,
                        overlayElement: (e, t) => (0, r.jsx)(u, {
                            ...e,
                            ...b,
                            children: t
                        }),
                        contentElement: (e, t) => (0, r.jsx)(f, {
                            ...e,
                            ...N,
                            children: t
                        }),
                        className: C,
                        overlayClassName: j,
                        closeTimeoutMS: y,
                        children: g
                    })
                }
        },
        38118: function (e, t, a) {
            a.r(t), a.d(t, {
                AsyncSyntaxHighliter: function () {
                    return y
                }
            });
            var r = a(32835),
                i = a(10472),
                n = a(97399),
                l = a(59686);
            let o = {
                    hljs: {
                        fontFamily: "inherit",
                        color: "white",
                        display: "grid",
                        padding: "20px",
                        margin: "0"
                    }
                },
                s = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: t,
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.2637 4.36966C11.5566 4.66256 11.5566 5.13743 11.2637 5.43032L6.13033 10.5637C5.98967 10.7043 5.79891 10.7833 5.6 10.7833C5.40108 10.7833 5.21032 10.7043 5.06967 10.5637L2.73633 8.23032C2.44344 7.93743 2.44344 7.46256 2.73633 7.16966C3.02923 6.87677 3.5041 6.87677 3.79699 7.16966L5.6 8.97267L10.203 4.36966C10.4959 4.07677 10.9708 4.07677 11.2637 4.36966Z",
                            fill: "currentColor"
                        })
                    })
                },
                d = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: t,
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.95455 2.71429V1.85714H9.04545V2.71429H4.95455ZM4.75 1C4.4111 1 4.13636 1.28782 4.13636 1.64286V1.85714H3.72727C3.04947 1.85714 2.5 2.43277 2.5 3.14286V11.7143C2.5 12.4243 3.04947 13 3.72727 13H10.2727C10.9505 13 11.5 12.4243 11.5 11.7143V3.14286C11.5 2.43277 10.9505 1.85714 10.2727 1.85714H9.86364V1.64286C9.86364 1.28782 9.58889 1 9.25 1H4.75ZM9.86364 2.71429V2.92857C9.86364 3.28361 9.58889 3.57143 9.25 3.57143H4.75C4.4111 3.57143 4.13636 3.28361 4.13636 2.92857V2.71429H3.72727C3.50134 2.71429 3.31818 2.90617 3.31818 3.14286V11.7143C3.31818 11.9509 3.50134 12.1429 3.72727 12.1429H10.2727C10.4986 12.1429 10.6818 11.9509 10.6818 11.7143V3.14286C10.6818 2.90617 10.4986 2.71429 10.2727 2.71429H9.86364Z",
                            fill: "currentColor"
                        })
                    })
                };
            var c = a(21334);
            a(14468), a(28194);
            var u = a(80947),
                m = "var(--_1yalldh0)",
                p = (0, u.c)({
                    defaultClassName: "_1yalldh7",
                    variantClassNames: {
                        isCopied: {
                            true: "_1yalldh8"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                h = (0, u.c)({
                    defaultClassName: "_1yalldh4",
                    variantClassNames: {
                        isCopied: {
                            true: "_1yalldh5"
                        }
                    },
                    defaultVariants: {},
                    compoundVariants: []
                }),
                f = a(46427);
            let v = (0, n.default)(() => Promise.all([a.e(8418), a.e(5035)]).then(a.bind(a, 45035)).then(e => e.Light), {
                    loadableGenerated: {
                        webpack: () => [45035]
                    },
                    ssr: !0
                }),
                y = e => {
                    let {
                        codeSnippet: t
                    } = e, {
                        ref: a,
                        inView: n
                    } = (0, i.YD)({
                        rootMargin: "-150px",
                        triggerOnce: !0
                    }), [u, y] = (0, l.useState)(!1);
                    return (0, r.jsx)("div", {
                        ref: a,
                        children: n ? (0, r.jsxs)("div", {
                            className: "_1yalldh1",
                            children: [(0, r.jsxs)(c.Button, {
                                onClick: () => {
                                    navigator.clipboard.writeText(t.code).then(() => {
                                        y(!0), setTimeout(() => {
                                            y(!1)
                                        }, 1200)
                                    })
                                },
                                className: "_1yalldh2",
                                "aria-label": "Copy to clipboard",
                                children: [(0, r.jsx)("div", {
                                    className: h({
                                        isCopied: u
                                    }),
                                    style: (0, f.L)({
                                        [m]: "".concat(1200, "ms")
                                    }),
                                    children: (0, r.jsx)(s, {})
                                }), (0, r.jsx)("div", {
                                    className: p({
                                        isCopied: u
                                    }),
                                    style: (0, f.L)({
                                        [m]: "".concat(1200, "ms")
                                    }),
                                    children: (0, r.jsx)(d, {})
                                })]
                            }), (0, r.jsx)(v, {
                                style: o,
                                language: t.language,
                                children: t.code
                            })]
                        }) : (0, r.jsx)("pre", {
                            children: t.code
                        })
                    })
                }
        },
        55833: function (e, t, a) {
            a.r(t), a.d(t, {
                Toggle: function () {
                    return l
                }
            });
            var r = a(32835),
                i = a(21334);
            a(14468), a(28295);
            var n = (0, a(80947).c)({
                defaultClassName: "n6qyvc0",
                variantClassNames: {
                    isActive: {
                        true: "n6qyvc1"
                    },
                    theme: {
                        light: "n6qyvc2",
                        dark: "n6qyvc3"
                    }
                },
                defaultVariants: {},
                compoundVariants: [
                    [{
                        isActive: !0,
                        theme: "light"
                    }, "n6qyvc4"],
                    [{
                        isActive: !0,
                        theme: "dark"
                    }, "n6qyvc5"]
                ]
            });
            let l = e => {
                let {
                    onClick: t,
                    isActive: a,
                    children: l,
                    theme: o = "light"
                } = e;
                return (0, r.jsx)(i.Button, {
                    onClick: t,
                    appearance: "empty",
                    className: n({
                        isActive: a,
                        theme: o
                    }),
                    children: l
                })
            }
        },
        84439: function (e, t, a) {
            a.r(t), a.d(t, {
                AsyncMuxPlayer: function () {
                    return l
                }
            });
            var r = a(32835),
                i = a(10472);
            let n = (0, a(97399).default)(() => Promise.all([a.e(3368), a.e(2189), a.e(5888), a.e(8836)]).then(a.bind(a, 38836)), {
                    loadableGenerated: {
                        webpack: () => [null]
                    },
                    ssr: !1
                }),
                l = e => {
                    let {
                        video: t
                    } = e, {
                        firstFrame: a,
                        width: l,
                        height: o,
                        playbackId: s
                    } = t, {
                        ref: d,
                        inView: c
                    } = (0, i.YD)({
                        rootMargin: "-150px",
                        triggerOnce: !0
                    });
                    return (0, r.jsx)("div", {
                        ref: d,
                        children: c && (0, r.jsx)(n, {
                            style: {
                                aspectRatio: l / o
                            },
                            playbackId: s,
                            streamType: "on-demand",
                            poster: a,
                            autoPlay: !1
                        })
                    })
                }
        },
        47052: function (e, t, a) {
            a.d(t, {
                x: function () {
                    return i
                }
            });
            var r = a(32835);
            a(59686);
            let i = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("svg", {
                    className: t,
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.6356 2.22183L2.22138 3.63604L8.58534 10L2.22138 16.364L3.6356 17.7782L9.99956 11.4142L16.3635 17.7782L17.7777 16.364L11.4138 10L17.7777 3.63604L16.3635 2.22183L9.99956 8.58579L3.6356 2.22183Z"
                    })
                })
            }
        },
        88454: function (e, t, a) {
            a.d(t, {
                U: function () {
                    return r
                }
            });
            let r = {
                dataset: "production",
                projectId: "s18ewfw4",
                apiVersion: "2023-10-27",
                useCdn: !1,
                perspective: "published",
                studioUrl: "/studio",
                encodeSourceMap: !1
            }
        },
        84886: function (e, t, a) {
            a.r(t), a.d(t, {
                useMediaQuery: function () {
                    return n
                }
            });
            var r = a(59686),
                i = a(25203);

            function n(e) {
                let [t, a] = (0, r.useState)(!1), n = i.breakpoints[e];
                return (0, r.useEffect)(() => {
                    let e = e => {
                            a(e.matches)
                        },
                        t = window.matchMedia(n);
                    return (a(t.matches), t.addEventListener) ? (t.addEventListener("change", e), () => {
                        t.removeEventListener("change", e)
                    }) : (t.addListener(e), () => {
                        t.removeListener(e)
                    })
                }, [t]), t
            }
        }
    }
]);