import {
    a as o,
    e as s,
    o as e,
    l as t,
    q as a,
    u as n,
    f as c
} from "./entry.40e762a9.js";
import {
    I as l
} from "./console.1bec7543.js";
const p = c(o({
    __name: "btn-console",
    props: {},
    emits: ["click"],
    setup(o, {
        emit: c
    }) {
        const {
            app: p
        } = s();
        return (o, s) => (e(), t("button", {
            class: "btn-console",
            onClick: s[0] || (s[0] = (...o) => n(p).toggleConsole && n(p).toggleConsole(...o))
        }, [a(n(l), {
            class: "icon-console"
        })]))
    }
}), [
    ["__scopeId", "data-v-d2c597f9"]
]);
export {
    p as
    default
};