import {
    a,
    r as l,
    j as e,
    l as r
} from "./entry.40e762a9.js";
const t = a({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(a, {
        slots: t,
        attrs: s
    }) {
        const c = l(!1);
        return e((() => {
            c.value = !0
        })), a => {
            var l;
            if (c.value) return null == (l = t.default) ? void 0 : l.call(t);
            const e = t.fallback || t.placeholder;
            if (e) return e();
            const n = a.fallback || a.placeholder || "",
                o = a.fallbackTag || a.placeholderTag || "span";
            return r(o, s, n)
        }
    }
});
export {
    t as _
};