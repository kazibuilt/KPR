const t = (t = 1, e = 1, i = !0, h = 2) => {
    const a = document.createElement("canvas"),
        n = a.getContext("2d");
    let c = window.devicePixelRatio ? window.devicePixelRatio : 1;
    return c = Math.max(c, 1), a.width = t, a.height = e, a.style.width = `${t}px`, a.style.height = `${e}px`, i && (h && (c = Math.min(c, h)), a.width = t * c, a.height = e * c, n.scale(c, c)), n
};
export {
    t as c
};