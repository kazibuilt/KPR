"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2217], {
        57962: function (e, t, n) {
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function (t) {
                        var r, o;
                        r = t, o = n[t], (r = function (e) {
                            var t = function (e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function i(e) {
                return "span" === e._type && "text" in e && "string" == typeof e.text && (void 0 === e.marks || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
            }

            function u(e) {
                return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
            }

            function l(e) {
                return u(e) && "listItem" in e && "string" == typeof e.listItem && (void 0 === e.level || "number" == typeof e.level)
            }

            function c(e) {
                return "@list" === e._type
            }

            function s(e) {
                return "@span" === e._type
            }

            function a(e) {
                return "@text" === e._type
            }
            n.d(t, {
                YI: function () {
                    return z
                }
            });
            let f = ["strong", "em", "code", "underline", "strike-through"];

            function y(e, t, n) {
                if (!i(e) || !e.marks || !e.marks.length) return [];
                let r = e.marks.slice(),
                    o = {};
                return r.forEach(e => {
                    o[e] = 1;
                    for (let r = t + 1; r < n.length; r++) {
                        let t = n[r];
                        if (t && i(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) o[e]++;
                        else break
                    }
                }), r.sort((e, t) => (function (e, t, n) {
                    let r = e[t],
                        o = e[n];
                    if (r !== o) return o - r;
                    let i = f.indexOf(t),
                        u = f.indexOf(n);
                    return i !== u ? i - u : t.localeCompare(n)
                })(o, e, t))
            }

            function p(e, t, n) {
                return {
                    _type: "@list",
                    _key: "".concat(e._key || "".concat(t), "-parent"),
                    mode: n,
                    level: e.level || 1,
                    listItem: e.listItem,
                    children: [e]
                }
            }

            function m(e, t) {
                let n = t.level || 1,
                    r = t.listItem || "normal",
                    o = "string" == typeof t.listItem;
                if (c(e) && (e.level || 1) === n && o && (e.listItem || "normal") === r) return e;
                if (!("children" in e)) return;
                let u = e.children[e.children.length - 1];
                return u && !i(u) ? m(u, t) : void 0
            }
            var h = n(32835),
                d = n(59686);
            let k = ["block", "list", "listItem", "marks", "types"],
                b = ["listItem"],
                g = ["_key"];

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach(function (t) {
                        var r, o;
                        r = t, o = n[t], (r = function (e) {
                            var t = function (e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : String(t)
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function w(e, t, n) {
                let r = t[n],
                    o = e[n];
                return "function" == typeof r || r && "function" == typeof o ? r : r ? j(j({}, o), r) : o
            }
            let x = {
                    textDecoration: "underline"
                },
                A = (e, t) => "[@portabletext/react] Unknown ".concat(e, ", specify a component for it in the `components.").concat(t, "` prop"),
                E = e => A('block type "'.concat(e, '"'), "types"),
                I = e => A('mark type "'.concat(e, '"'), "marks"),
                _ = e => A('block style "'.concat(e, '"'), "block"),
                S = e => A('list style "'.concat(e, '"'), "list"),
                P = e => A('list item style "'.concat(e, '"'), "listItem");

            function D(e) {
                console.warn(e)
            }
            let Y = {
                    display: "none"
                },
                T = {
                    types: {},
                    block: {
                        normal: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("p", {
                                children: t
                            })
                        },
                        blockquote: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("blockquote", {
                                children: t
                            })
                        },
                        h1: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("h1", {
                                children: t
                            })
                        },
                        h2: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("h2", {
                                children: t
                            })
                        },
                        h3: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("h3", {
                                children: t
                            })
                        },
                        h4: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("h4", {
                                children: t
                            })
                        },
                        h5: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("h5", {
                                children: t
                            })
                        },
                        h6: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("h6", {
                                children: t
                            })
                        }
                    },
                    marks: {
                        em: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("em", {
                                children: t
                            })
                        },
                        strong: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("strong", {
                                children: t
                            })
                        },
                        code: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("code", {
                                children: t
                            })
                        },
                        underline: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("span", {
                                style: x,
                                children: t
                            })
                        },
                        "strike-through": e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("del", {
                                children: t
                            })
                        },
                        link: e => {
                            let {
                                children: t,
                                value: n
                            } = e;
                            return (0, h.jsx)("a", {
                                href: null == n ? void 0 : n.href,
                                children: t
                            })
                        }
                    },
                    list: {
                        number: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("ol", {
                                children: t
                            })
                        },
                        bullet: e => {
                            let {
                                children: t
                            } = e;
                            return (0, h.jsx)("ul", {
                                children: t
                            })
                        }
                    },
                    listItem: e => {
                        let {
                            children: t
                        } = e;
                        return (0, h.jsx)("li", {
                            children: t
                        })
                    },
                    hardBreak: () => (0, h.jsx)("br", {}),
                    unknownType: e => {
                        let {
                            value: t,
                            isInline: n
                        } = e, r = E(t._type);
                        return n ? (0, h.jsx)("span", {
                            style: Y,
                            children: r
                        }) : (0, h.jsx)("div", {
                            style: Y,
                            children: r
                        })
                    },
                    unknownMark: e => {
                        let {
                            markType: t,
                            children: n
                        } = e;
                        return (0, h.jsx)("span", {
                            className: "unknown__pt__mark__".concat(t),
                            children: n
                        })
                    },
                    unknownList: e => {
                        let {
                            children: t
                        } = e;
                        return (0, h.jsx)("ul", {
                            children: t
                        })
                    },
                    unknownListItem: e => {
                        let {
                            children: t
                        } = e;
                        return (0, h.jsx)("li", {
                            children: t
                        })
                    },
                    unknownBlockStyle: e => {
                        let {
                            children: t
                        } = e;
                        return (0, h.jsx)("p", {
                            children: t
                        })
                    }
                };

            function z(e) {
                let {
                    value: t,
                    components: n,
                    listNestingMode: r,
                    onMissingComponent: i = D
                } = e, u = i || C, c = function (e, t) {
                    let n;
                    let r = [];
                    for (let u = 0; u < e.length; u++) {
                        let c = e[u];
                        if (c) {
                            var i;
                            if (!l(c)) {
                                r.push(c), n = void 0;
                                continue
                            }
                            if (!n) {
                                n = p(c, u, t), r.push(n);
                                continue
                            }
                            if (i = n, (c.level || 1) === i.level && c.listItem === i.listItem) {
                                n.children.push(c);
                                continue
                            }
                            if ((c.level || 1) > n.level) {
                                let e = p(c, u, t);
                                if ("html" === t) {
                                    let t = n.children[n.children.length - 1],
                                        r = o(o({}, t), {}, {
                                            children: [...t.children, e]
                                        });
                                    n.children[n.children.length - 1] = r
                                } else n.children.push(e);
                                n = e;
                                continue
                            }
                            if ((c.level || 1) < n.level) {
                                let e = r[r.length - 1],
                                    o = e && m(e, c);
                                if (o) {
                                    (n = o).children.push(c);
                                    continue
                                }
                                n = p(c, u, t), r.push(n);
                                continue
                            }
                            if (c.listItem !== n.listItem) {
                                let e = r[r.length - 1],
                                    o = e && m(e, {
                                        level: c.level || 1
                                    });
                                if (o && o.listItem === c.listItem) {
                                    (n = o).children.push(c);
                                    continue
                                }
                                n = p(c, u, t), r.push(n);
                                continue
                            }
                            console.warn("Unknown state encountered for block", c), r.push(c)
                        }
                    }
                    return r
                }(Array.isArray(t) ? t : [t], r || "html"), s = (0, d.useMemo)(() => n ? function (e, t) {
                    let {
                        block: n,
                        list: r,
                        listItem: o,
                        marks: i,
                        types: u
                    } = t, l = O(t, k);
                    return j(j({}, e), {}, {
                        block: w(e, t, "block"),
                        list: w(e, t, "list"),
                        listItem: w(e, t, "listItem"),
                        marks: w(e, t, "marks"),
                        types: w(e, t, "types")
                    }, l)
                }(T, n) : T, [n]), a = (0, d.useMemo)(() => N(s, u), [s, u]), f = c.map((e, t) => a({
                    node: e,
                    index: t,
                    isInline: !1,
                    renderNode: a
                }));
                return (0, h.jsx)(h.Fragment, {
                    children: f
                })
            }
            let N = (e, t) => function n(r) {
                let {
                    node: o,
                    index: i,
                    isInline: f
                } = r, y = o._key || "node-".concat(i);
                return c(o) ? function (r, o, i) {
                    let u = r.children.map((e, t) => n({
                            node: e._key ? e : j(j({}, e), {}, {
                                _key: "li-".concat(o, "-").concat(t)
                            }),
                            index: t,
                            isInline: !1,
                            renderNode: n
                        })),
                        l = e.list,
                        c = ("function" == typeof l ? l : l[r.listItem]) || e.unknownList;
                    if (c === e.unknownList) {
                        let e = r.listItem || "bullet";
                        t(S(e), {
                            nodeType: "listStyle",
                            type: e
                        })
                    }
                    return (0, h.jsx)(c, {
                        value: r,
                        index: o,
                        isInline: !1,
                        renderNode: n,
                        children: u
                    }, i)
                }(o, i, y) : l(o) ? function (r, o, i) {
                    let u = U({
                            node: r,
                            index: o,
                            isInline: !1,
                            renderNode: n
                        }),
                        l = e.listItem,
                        c = ("function" == typeof l ? l : l[r.listItem]) || e.unknownListItem;
                    if (c === e.unknownListItem) {
                        let e = r.listItem || "bullet";
                        t(P(e), {
                            type: e,
                            nodeType: "listItemStyle"
                        })
                    }
                    let s = u.children;
                    if (r.style && "normal" !== r.style) {
                        let {
                            listItem: e
                        } = r;
                        s = n({
                            node: O(r, b),
                            index: o,
                            isInline: !1,
                            renderNode: n
                        })
                    }
                    return (0, h.jsx)(c, {
                        value: r,
                        index: o,
                        isInline: !1,
                        renderNode: n,
                        children: s
                    }, i)
                }(o, i, y) : s(o) ? function (r, o, i) {
                    let {
                        markDef: u,
                        markType: l,
                        markKey: c
                    } = r, f = e.marks[l] || e.unknownMark, y = r.children.map((e, t) => n({
                        node: e,
                        index: t,
                        isInline: !0,
                        renderNode: n
                    }));
                    return f === e.unknownMark && t(I(l), {
                        nodeType: "mark",
                        type: l
                    }), (0, h.jsx)(f, {
                        text: function e(t) {
                            let n = "";
                            return t.children.forEach(t => {
                                a(t) ? n += t.text : s(t) && (n += e(t))
                            }), n
                        }(r),
                        value: u,
                        markType: l,
                        markKey: c,
                        renderNode: n,
                        children: y
                    }, i)
                }(o, 0, y) : o._type in e.types ? function (t, r, o, i) {
                    let u = e.types[t._type];
                    return u ? (0, h.jsx)(u, j({}, {
                        value: t,
                        isInline: i,
                        index: r,
                        renderNode: n
                    }), o) : null
                }(o, i, y, f) : u(o) ? function (r, o, i, u) {
                    let l = U({
                            node: r,
                            index: o,
                            isInline: u,
                            renderNode: n
                        }),
                        {
                            _key: c
                        } = l,
                        s = O(l, g),
                        a = s.node.style || "normal",
                        f = ("function" == typeof e.block ? e.block : e.block[a]) || e.unknownBlockStyle;
                    return f === e.unknownBlockStyle && t(_(a), {
                        nodeType: "blockStyle",
                        type: a
                    }), (0, h.jsx)(f, j(j({}, s), {}, {
                        value: s.node,
                        renderNode: n
                    }), i)
                }(o, i, y, f) : a(o) ? function (t, n) {
                    if ("\n" === t.text) {
                        let t = e.hardBreak;
                        return t ? (0, h.jsx)(t, {}, n) : "\n"
                    }
                    return t.text
                }(o, y) : function (r, o, i, u) {
                    t(E(r._type), {
                        nodeType: "block",
                        type: r._type
                    });
                    let l = e.unknownType;
                    return (0, h.jsx)(l, j({}, {
                        value: r,
                        isInline: u,
                        index: o,
                        renderNode: n
                    }), i)
                }(o, i, y, f)
            };

            function U(e) {
                let {
                    node: t,
                    index: n,
                    isInline: r,
                    renderNode: o
                } = e, u = (function (e) {
                    var t;
                    let {
                        children: n,
                        markDefs: r = []
                    } = e;
                    if (!n || !n.length) return [];
                    let o = n.map(y),
                        u = {
                            _type: "@span",
                            children: [],
                            markType: "<unknown>"
                        },
                        l = [u];
                    for (let e = 0; e < n.length; e++) {
                        let u = n[e];
                        if (!u) continue;
                        let c = o[e] || [],
                            s = 1;
                        if (l.length > 1)
                            for (; s < l.length; s++) {
                                let e = (null == (t = l[s]) ? void 0 : t.markKey) || "",
                                    n = c.indexOf(e);
                                if (-1 === n) break;
                                c.splice(n, 1)
                            }
                        let a = (l = l.slice(0, s))[l.length - 1];
                        if (a) {
                            for (let e of c) {
                                let t = r.find(t => t._key === e),
                                    n = t ? t._type : e,
                                    o = {
                                        _type: "@span",
                                        _key: u._key,
                                        children: [],
                                        markDef: t,
                                        markType: n,
                                        markKey: e
                                    };
                                a.children.push(o), l.push(o), a = o
                            }
                            if (i(u)) {
                                let e = u.text.split("\n");
                                for (let t = e.length; t-- > 1;) e.splice(t, 0, "\n");
                                a.children = a.children.concat(e.map(e => ({
                                    _type: "@text",
                                    text: e
                                })))
                            } else a.children = a.children.concat(u)
                        }
                    }
                    return u.children
                })(t).map((e, t) => o({
                    node: e,
                    isInline: !0,
                    index: t,
                    renderNode: o
                }));
                return {
                    _key: t._key || "block-".concat(n),
                    children: u,
                    index: n,
                    isInline: r,
                    node: t
                }
            }

            function C() {}
        },
        37973: function (e, t, n) {
            n.d(t, {
                w_: function () {
                    return c
                }
            });
            var r = n(59686),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = r.createContext && r.createContext(o),
                u = function () {
                    return (u = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                l = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n
                };

            function c(e) {
                return function (t) {
                    return r.createElement(s, u({
                        attr: u({}, e.attr)
                    }, t), function e(t) {
                        return t && t.map(function (t, n) {
                            return r.createElement(t.tag, u({
                                key: n
                            }, t.attr), e(t.child))
                        })
                    }(e.child))
                }
            }

            function s(e) {
                var t = function (t) {
                    var n, o = e.attr,
                        i = e.size,
                        c = e.title,
                        s = l(e, ["attr", "size", "title"]),
                        a = i || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", u({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, s, {
                        className: n,
                        style: u(u({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: a,
                        width: a,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && r.createElement("title", null, c), e.children)
                };
                return void 0 !== i ? r.createElement(i.Consumer, null, function (e) {
                    return t(e)
                }) : t(o)
            }
        },
        93714: function (e, t, n) {
            function r(e) {
                return "object" == typeof e && null !== e && !Array.isArray(e)
            }

            function o(e) {
                return r(e) && "string" == typeof e._ref
            }

            function i(e) {
                return r(e) && o(e.asset) && e.asset._ref.startsWith("image-")
            }

            function u(e) {
                return r(e) && "string" == typeof e._ref && "string" == typeof e._dataset && "string" == typeof e._projectId
            }

            function l(e) {
                return r(e) && "string" == typeof e._id && "string" == typeof e._type
            }

            function c(e) {
                return r(e) && "string" == typeof e._type
            }

            function s(e) {
                return r(e) && "string" == typeof e._key
            }

            function a(e) {
                return "error" === e.level
            }
            n.d(t, {
                AY: function () {
                    return T
                },
                DG: function () {
                    return k
                },
                EG: function () {
                    return x
                },
                Fd: function () {
                    return m
                },
                J1: function () {
                    return E
                },
                M1: function () {
                    return O
                },
                NG: function () {
                    return b
                },
                Or: function () {
                    return i
                },
                Si: function () {
                    return l
                },
                YN: function () {
                    return a
                },
                Yk: function () {
                    return o
                },
                Yz: function () {
                    return u
                },
                Z2: function () {
                    return P
                },
                aj: function () {
                    return A
                },
                ay: function () {
                    return c
                },
                d7: function () {
                    return w
                },
                dD: function () {
                    return function e(t) {
                        return g(t) && ("reference" === t.name || e(t.type))
                    }
                },
                dw: function () {
                    return p
                },
                fU: function () {
                    return s
                },
                fe: function () {
                    return S
                },
                jB: function () {
                    return j
                },
                jp: function () {
                    return I
                },
                lo: function () {
                    return h
                },
                m$: function () {
                    return v
                },
                mz: function () {
                    return function e(t) {
                        return g(t) && ("crossDatasetReference" === t.name || e(t.type))
                    }
                },
                n4: function () {
                    return _
                },
                qu: function () {
                    return D
                },
                z1: function () {
                    return Y
                }
            });
            let f = /_key\s*==\s*['"](.*)['"]/,
                y = /^\d*:\d*$/;

            function p(e) {
                return "number" == typeof e || "string" == typeof e && /^\[\d+\]$/.test(e)
            }

            function m(e) {
                return "string" == typeof e ? f.test(e.trim()) : "object" == typeof e && "_key" in e
            }

            function h(e) {
                if ("string" == typeof e && y.test(e)) return !0;
                if (!Array.isArray(e) || 2 !== e.length) return !1;
                let [t, n] = e;
                return ("number" == typeof t || "" === t) && ("number" == typeof n || "" === n)
            }

            function d(e) {
                return !!e && ("object" == typeof e || "function" == typeof e)
            }

            function k(e) {
                return d(e) && "string" == typeof e._type && Array.isArray(e.children) && e.children.every(e => d(e)) && "markDefs" in e && Array.isArray(e.markDefs) && e.markDefs.every(e => d(e)) && (!("style" in e) || "string" == typeof e.style)
            }

            function b(e) {
                return d(e) && "span" === e._type && "string" == typeof e.text && (!("marks" in e) || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
            }

            function g(e) {
                return !!e && ("object" == typeof e || "function" == typeof e)
            }

            function v(e) {
                return !!g(e) && "object" === e.jsonType
            }

            function j(e) {
                return !!g(e) && "array" === e.jsonType
            }

            function O(e) {
                return j(e) && e.of.every(e => v(e))
            }

            function w(e) {
                return j(e) && e.of.every(e => I(e))
            }

            function x(e) {
                return !!g(e) && "boolean" === e.jsonType
            }

            function A(e) {
                return !!g(e) && "string" === e.jsonType
            }

            function E(e) {
                return !!g(e) && "number" === e.jsonType
            }

            function I(e) {
                return x(e) || A(e) || E(e)
            }

            function _(e) {
                return "object" == typeof e && null !== e && "title" in e && "value" in e
            }

            function S(e, t) {
                return e
            }

            function P(e, t) {
                return e
            }

            function D(e, t) {
                return e
            }

            function Y(e) {
                return "error" === e.level
            }

            function T(e) {
                return "warning" === e.level
            }
        },
        21661: function (e) {
            var t;
            t = function () {
                var e = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),
                    t = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","∑":"soma","\xa3":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');

                function n(n, r) {
                    if ("string" != typeof n) throw Error("slugify: string argument expected");
                    var o = t[(r = "string" == typeof r ? {
                            replacement: r
                        } : r || {}).locale] || {},
                        i = void 0 === r.replacement ? "-" : r.replacement,
                        u = void 0 === r.trim || r.trim,
                        l = n.normalize().split("").reduce(function (t, n) {
                            var u = o[n];
                            return void 0 === u && (u = e[n]), void 0 === u && (u = n), u === i && (u = " "), t + u.replace(r.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
                        }, "");
                    return r.strict && (l = l.replace(/[^A-Za-z0-9\s]/g, "")), u && (l = l.trim()), l = l.replace(/\s+/g, i), r.lower && (l = l.toLowerCase()), l
                }
                return n.extend = function (t) {
                    Object.assign(e, t)
                }, n
            }, e.exports = t(), e.exports.default = t()
        }
    }
]);