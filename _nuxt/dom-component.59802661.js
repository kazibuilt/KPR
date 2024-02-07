import {
    o as t
} from "./index.6c8f1534.js";
import {
    _ as e
} from "./index-default.25f36e61.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i;
const s = window,
    n = s.trustedTypes,
    o = n ? n.createPolicy("lit-html", {
        createHTML: t => t
    }) : void 0,
    r = "$lit$",
    l = `lit$${(Math.random()+"").slice(9)}$`,
    h = "?" + l,
    d = `<${h}>`,
    a = document,
    p = () => a.createComment(""),
    $ = t => null === t || "object" != typeof t && "function" != typeof t,
    u = Array.isArray,
    _ = "[ \t\n\f\r]",
    c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    A = /-->/g,
    v = />/g,
    m = RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
    g = /'/g,
    f = /"/g,
    y = /^(?:script|style|textarea|title)$/i,
    x = (M = 1, (t, ...e) => ({
        _$litType$: M,
        strings: t,
        values: e
    })),
    H = Symbol.for("lit-noChange"),
    N = Symbol.for("lit-nothing"),
    C = new WeakMap,
    b = a.createTreeWalker(a, 129, null, !1);
var M;
class T {
    constructor({
        strings: t,
        _$litType$: e
    }, i) {
        let s;
        this.parts = [];
        let a = 0,
            $ = 0;
        const u = t.length - 1,
            _ = this.parts,
            [x, H] = ((t, e) => {
                const i = t.length - 1,
                    s = [];
                let n, h = 2 === e ? "<svg>" : "",
                    a = c;
                for (let o = 0; o < i; o++) {
                    const e = t[o];
                    let i, p, $ = -1,
                        u = 0;
                    for (; u < e.length && (a.lastIndex = u, p = a.exec(e), null !== p);) u = a.lastIndex, a === c ? "!--" === p[1] ? a = A : void 0 !== p[1] ? a = v : void 0 !== p[2] ? (y.test(p[2]) && (n = RegExp("</" + p[2], "g")), a = m) : void 0 !== p[3] && (a = m) : a === m ? ">" === p[0] ? (a = null != n ? n : c, $ = -1) : void 0 === p[1] ? $ = -2 : ($ = a.lastIndex - p[2].length, i = p[1], a = void 0 === p[3] ? m : '"' === p[3] ? f : g) : a === f || a === g ? a = m : a === A || a === v ? a = c : (a = m, n = void 0);
                    const _ = a === m && t[o + 1].startsWith("/>") ? " " : "";
                    h += a === c ? e + d : $ >= 0 ? (s.push(i), e.slice(0, $) + r + e.slice($) + l + _) : e + l + (-2 === $ ? (s.push(void 0), o) : _)
                }
                const p = h + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
                if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return [void 0 !== o ? o.createHTML(p) : p, s]
            })(t, e);
        if (this.el = T.createElement(x, i), b.currentNode = this.el.content, 2 === e) {
            const t = this.el.content,
                e = t.firstChild;
            e.remove(), t.append(...e.childNodes)
        }
        for (; null !== (s = b.nextNode()) && _.length < u;) {
            if (1 === s.nodeType) {
                if (s.hasAttributes()) {
                    const t = [];
                    for (const e of s.getAttributeNames())
                        if (e.endsWith(r) || e.startsWith(l)) {
                            const i = H[$++];
                            if (t.push(e), void 0 !== i) {
                                const t = s.getAttribute(i.toLowerCase() + r).split(l),
                                    e = /([.?@])?(.*)/.exec(i);
                                _.push({
                                    type: 1,
                                    index: a,
                                    name: e[2],
                                    strings: t,
                                    ctor: "." === e[1] ? I : "?" === e[1] ? D : "@" === e[1] ? L : E
                                })
                            } else _.push({
                                type: 6,
                                index: a
                            })
                        } for (const e of t) s.removeAttribute(e)
                }
                if (y.test(s.tagName)) {
                    const t = s.textContent.split(l),
                        e = t.length - 1;
                    if (e > 0) {
                        s.textContent = n ? n.emptyScript : "";
                        for (let i = 0; i < e; i++) s.append(t[i], p()), b.nextNode(), _.push({
                            type: 2,
                            index: ++a
                        });
                        s.append(t[e], p())
                    }
                }
            } else if (8 === s.nodeType)
                if (s.data === h) _.push({
                    type: 2,
                    index: a
                });
                else {
                    let t = -1;
                    for (; - 1 !== (t = s.data.indexOf(l, t + 1));) _.push({
                        type: 7,
                        index: a
                    }), t += l.length - 1
                } a++
        }
    }
    static createElement(t, e) {
        const i = a.createElement("template");
        return i.innerHTML = t, i
    }
}

function w(t, e, i = t, s) {
    var n, o, r, l;
    if (e === H) return e;
    let h = void 0 !== s ? null === (n = i._$Co) || void 0 === n ? void 0 : n[s] : i._$Cl;
    const d = $(e) ? void 0 : e._$litDirective$;
    return (null == h ? void 0 : h.constructor) !== d && (null === (o = null == h ? void 0 : h._$AO) || void 0 === o || o.call(h, !1), void 0 === d ? h = void 0 : (h = new d(t), h._$AT(t, i, s)), void 0 !== s ? (null !== (r = (l = i)._$Co) && void 0 !== r ? r : l._$Co = [])[s] = h : i._$Cl = h), void 0 !== h && (e = w(t, h._$AS(t, e.values), h, s)), e
}
class S {
    constructor(t, e) {
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(t) {
        var e;
        const {
            el: {
                content: i
            },
            parts: s
        } = this._$AD, n = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : a).importNode(i, !0);
        b.currentNode = n;
        let o = b.nextNode(),
            r = 0,
            l = 0,
            h = s[0];
        for (; void 0 !== h;) {
            if (r === h.index) {
                let e;
                2 === h.type ? e = new B(o, o.nextSibling, this, t) : 1 === h.type ? e = new h.ctor(o, h.name, h.strings, this, t) : 6 === h.type && (e = new R(o, this, t)), this._$AV.push(e), h = s[++l]
            }
            r !== (null == h ? void 0 : h.index) && (o = b.nextNode(), r++)
        }
        return n
    }
    v(t) {
        let e = 0;
        for (const i of this._$AV) void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++
    }
}
class B {
    constructor(t, e, i, s) {
        var n;
        this.type = 2, this._$AH = N, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cp = null === (n = null == s ? void 0 : s.isConnected) || void 0 === n || n
    }
    get _$AU() {
        var t, e;
        return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const e = this._$AM;
        return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(t, e = this) {
        t = w(this, t, e), $(t) ? t === N || null == t || "" === t ? (this._$AH !== N && this._$AR(), this._$AH = N) : t !== this._$AH && t !== H && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : (t => u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]))(t) ? this.T(t) : this._(t)
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB)
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
    }
    _(t) {
        this._$AH !== N && $(this._$AH) ? this._$AA.nextSibling.data = t : this.$(a.createTextNode(t)), this._$AH = t
    }
    g(t) {
        var e;
        const {
            values: i,
            _$litType$: s
        } = t, n = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = T.createElement(s.h, this.options)), s);
        if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n) this._$AH.v(i);
        else {
            const t = new S(n, this),
                e = t.u(this.options);
            t.v(i), this.$(e), this._$AH = t
        }
    }
    _$AC(t) {
        let e = C.get(t.strings);
        return void 0 === e && C.set(t.strings, e = new T(t)), e
    }
    T(t) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const e = this._$AH;
        let i, s = 0;
        for (const n of t) s === e.length ? e.push(i = new B(this.k(p()), this.k(p()), this, this.options)) : i = e[s], i._$AI(n), s++;
        s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s)
    }
    _$AR(t = this._$AA.nextSibling, e) {
        var i;
        for (null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e); t && t !== this._$AB;) {
            const e = t.nextSibling;
            t.remove(), t = e
        }
    }
    setConnected(t) {
        var e;
        void 0 === this._$AM && (this._$Cp = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
    }
}
class E {
    constructor(t, e, i, s, n) {
        this.type = 1, this._$AH = N, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = N
    }
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(t, e = this, i, s) {
        const n = this.strings;
        let o = !1;
        if (void 0 === n) t = w(this, t, e, 0), o = !$(t) || t !== this._$AH && t !== H, o && (this._$AH = t);
        else {
            const s = t;
            let r, l;
            for (t = n[0], r = 0; r < n.length - 1; r++) l = w(this, s[i + r], e, r), l === H && (l = this._$AH[r]), o || (o = !$(l) || l !== this._$AH[r]), l === N ? t = N : t !== N && (t += (null != l ? l : "") + n[r + 1]), this._$AH[r] = l
        }
        o && !s && this.j(t)
    }
    j(t) {
        t === N ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
    }
}
class I extends E {
    constructor() {
        super(...arguments), this.type = 3
    }
    j(t) {
        this.element[this.name] = t === N ? void 0 : t
    }
}
const j = n ? n.emptyScript : "";
class D extends E {
    constructor() {
        super(...arguments), this.type = 4
    }
    j(t) {
        t && t !== N ? this.element.setAttribute(this.name, j) : this.element.removeAttribute(this.name)
    }
}
class L extends E {
    constructor(t, e, i, s, n) {
        super(t, e, i, s, n), this.type = 5
    }
    _$AI(t, e = this) {
        var i;
        if ((t = null !== (i = w(this, t, e, 0)) && void 0 !== i ? i : N) === H) return;
        const s = this._$AH,
            n = t === N && s !== N || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
            o = t !== N && (s === N || n);
        n && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t
    }
    handleEvent(t) {
        var e, i;
        "function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== i ? i : this.element, t) : this._$AH.handleEvent(t)
    }
}
class R {
    constructor(t, e, i) {
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(t) {
        w(this, t)
    }
}
const P = s.litHtmlPolyfillSupport;
null == P || P(T, B), (null !== (i = s.litHtmlVersions) && void 0 !== i ? i : s.litHtmlVersions = []).push("2.7.2");
const U = (t, e, i) => {
        var s, n;
        const o = null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : e;
        let r = o._$litPart$;
        if (void 0 === r) {
            const t = null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : null;
            o._$litPart$ = r = new B(e.insertBefore(p(), t), t, void 0, null != i ? i : {})
        }
        return r._$AI(t), r
    },
    k = () => {},
    O = {
        onSetup() {
            if (this.options.__log ? this.__domComponentMixinLog = t => {} : this.__domComponentMixinLog = k, this.options.template) {
                let i = !1;
                this.fragment = document.createDocumentFragment();
                const s = {
                    props: this.props,
                    options: this.options,
                    context: this
                };
                let n;
                const o = new Promise((t => {
                        n = t
                    })),
                    r = () => {
                        U(this.options.template(s), this.fragment);
                        let t = !1;
                        i || (t = !0, i = !0, this.__domComponentMixinLog("render template - first render - register element"), this.el = this.fragment.firstElementChild, this.options.appendTo ? this.options.appendTo.appendChild(this.el) : this.options.insertBefore && this.options.insertBefore.parentNode.insertBefore(this.el, this.options.insertBefore), this.ui = ((t, i) => {
                            if (i) {
                                const s = i.map((e => {
                                    const i = t.querySelector(`[data-ui="${e}"]`);
                                    return null === i || i.length, 1 === i.length ? i[0] : i
                                }));
                                return e.object(i, s)
                            }
                            const s = t.querySelectorAll("[data-ui]"),
                                n = [];
                            return e.forEach(s, (t => {
                                n.push(t.dataset.ui)
                            })), e.object(n, s)
                        })(this.el), n()), this.onRender && this.onRender(t)
                    };
                return this.props ? this.__domComponentDisposeObserve = t(r) : r(), o
            }
        },
        onDestroy() {
            this.props && this.__domComponentDisposeObserve(), this.fragment && U(null, this.fragment), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
        }
    };
export {
    N as A, O as D, H as T, x
};