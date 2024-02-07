/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const t = "151",
    e = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    },
    n = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    },
    i = 1,
    r = 2,
    s = 3,
    a = 0,
    o = 1,
    l = 2,
    c = 0,
    h = 1,
    u = 2,
    d = 100,
    p = 0,
    f = 1,
    m = 2,
    g = 0,
    v = 1,
    _ = 2,
    x = 3,
    y = 4,
    M = 5,
    S = 300,
    b = 301,
    w = 302,
    T = 306,
    A = 1e3,
    E = 1001,
    C = 1002,
    P = 1003,
    L = 1004,
    D = 1005,
    R = 1006,
    I = 1007,
    U = 1008,
    N = 1008,
    O = 1009,
    z = 1014,
    F = 1015,
    B = 1016,
    V = 1020,
    k = 1023,
    G = 1026,
    H = 1027,
    W = 1028,
    X = 1030,
    j = 33776,
    q = 33777,
    Y = 33778,
    Z = 33779,
    J = 35840,
    K = 35842,
    Q = 36196,
    $ = 37492,
    tt = 37496,
    et = 37808,
    nt = 36492,
    it = 2300,
    rt = 2301,
    st = 2302,
    at = 0,
    ot = 1,
    lt = 2,
    ct = 3e3,
    ht = 3001,
    ut = 0,
    dt = "srgb",
    pt = "srgb-linear",
    ft = "display-p3",
    mt = 7680,
    gt = 35044,
    vt = "300 es",
    _t = 1035;
class xt {
    addEventListener(t, e) {
        void 0 === this._listeners && (this._listeners = {});
        const n = this._listeners;
        void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
    }
    hasEventListener(t, e) {
        if (void 0 === this._listeners) return !1;
        const n = this._listeners;
        return void 0 !== n[t] && -1 !== n[t].indexOf(e)
    }
    removeEventListener(t, e) {
        if (void 0 === this._listeners) return;
        const n = this._listeners[t];
        if (void 0 !== n) {
            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
        }
    }
    dispatchEvent(t) {
        if (void 0 === this._listeners) return;
        const e = this._listeners[t.type];
        if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null
        }
    }
}
const yt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Mt = 1234567;
const St = Math.PI / 180,
    bt = 180 / Math.PI;

function wt() {
    const t = 4294967295 * Math.random() | 0,
        e = 4294967295 * Math.random() | 0,
        n = 4294967295 * Math.random() | 0,
        i = 4294967295 * Math.random() | 0;
    return (yt[255 & t] + yt[t >> 8 & 255] + yt[t >> 16 & 255] + yt[t >> 24 & 255] + "-" + yt[255 & e] + yt[e >> 8 & 255] + "-" + yt[e >> 16 & 15 | 64] + yt[e >> 24 & 255] + "-" + yt[63 & n | 128] + yt[n >> 8 & 255] + "-" + yt[n >> 16 & 255] + yt[n >> 24 & 255] + yt[255 & i] + yt[i >> 8 & 255] + yt[i >> 16 & 255] + yt[i >> 24 & 255]).toLowerCase()
}

function Tt(t, e, n) {
    return Math.max(e, Math.min(n, t))
}

function At(t, e) {
    return (t % e + e) % e
}

function Et(t, e, n) {
    return (1 - n) * t + n * e
}

function Ct(t) {
    return 0 == (t & t - 1) && 0 !== t
}

function Pt(t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
}

function Lt(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
}

function Dt(t, e) {
    switch (e.constructor) {
        case Float32Array:
            return t;
        case Uint16Array:
            return t / 65535;
        case Uint8Array:
            return t / 255;
        case Int16Array:
            return Math.max(t / 32767, -1);
        case Int8Array:
            return Math.max(t / 127, -1);
        default:
            throw new Error("Invalid component type.")
    }
}

function Rt(t, e) {
    switch (e.constructor) {
        case Float32Array:
            return t;
        case Uint16Array:
            return Math.round(65535 * t);
        case Uint8Array:
            return Math.round(255 * t);
        case Int16Array:
            return Math.round(32767 * t);
        case Int8Array:
            return Math.round(127 * t);
        default:
            throw new Error("Invalid component type.")
    }
}
const It = {
    DEG2RAD: St,
    RAD2DEG: bt,
    generateUUID: wt,
    clamp: Tt,
    euclideanModulo: At,
    mapLinear: function (t, e, n, i, r) {
        return i + (t - e) * (r - i) / (n - e)
    },
    inverseLerp: function (t, e, n) {
        return t !== e ? (n - t) / (e - t) : 0
    },
    lerp: Et,
    damp: function (t, e, n, i) {
        return Et(t, e, 1 - Math.exp(-n * i))
    },
    pingpong: function (t, e = 1) {
        return e - Math.abs(At(t, 2 * e) - e)
    },
    smoothstep: function (t, e, n) {
        return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
    },
    smootherstep: function (t, e, n) {
        return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
    },
    randInt: function (t, e) {
        return t + Math.floor(Math.random() * (e - t + 1))
    },
    randFloat: function (t, e) {
        return t + Math.random() * (e - t)
    },
    randFloatSpread: function (t) {
        return t * (.5 - Math.random())
    },
    seededRandom: function (t) {
        void 0 !== t && (Mt = t);
        let e = Mt += 1831565813;
        return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296
    },
    degToRad: function (t) {
        return t * St
    },
    radToDeg: function (t) {
        return t * bt
    },
    isPowerOfTwo: Ct,
    ceilPowerOfTwo: Pt,
    floorPowerOfTwo: Lt,
    setQuaternionFromProperEuler: function (t, e, n, i, r) {
        const s = Math.cos,
            a = Math.sin,
            o = s(n / 2),
            l = a(n / 2),
            c = s((e + i) / 2),
            h = a((e + i) / 2),
            u = s((e - i) / 2),
            d = a((e - i) / 2),
            p = s((i - e) / 2),
            f = a((i - e) / 2);
        switch (r) {
            case "XYX":
                t.set(o * h, l * u, l * d, o * c);
                break;
            case "YZY":
                t.set(l * d, o * h, l * u, o * c);
                break;
            case "ZXZ":
                t.set(l * u, l * d, o * h, o * c);
                break;
            case "XZX":
                t.set(o * h, l * f, l * p, o * c);
                break;
            case "YXY":
                t.set(l * p, o * h, l * f, o * c);
                break;
            case "ZYZ":
                t.set(l * f, l * p, o * h, o * c)
        }
    },
    normalize: Rt,
    denormalize: Dt
};
class Ut {
    constructor(t = 0, e = 0) {
        Ut.prototype.isVector2 = !0, this.x = t, this.y = e
    }
    get width() {
        return this.x
    }
    set width(t) {
        this.x = t
    }
    get height() {
        return this.y
    }
    set height(t) {
        this.y = t
    }
    set(t, e) {
        return this.x = t, this.y = e, this
    }
    setScalar(t) {
        return this.x = t, this.y = t, this
    }
    setX(t) {
        return this.x = t, this
    }
    setY(t) {
        return this.y = t, this
    }
    setComponent(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y)
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this
    }
    addScalar(t) {
        return this.x += t, this.y += t, this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this
    }
    sub(t) {
        return this.x -= t.x, this.y -= t.y, this
    }
    subScalar(t) {
        return this.x -= t, this.y -= t, this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this
    }
    divide(t) {
        return this.x /= t.x, this.y /= t.y, this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    applyMatrix3(t) {
        const e = this.x,
            n = this.y,
            i = t.elements;
        return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y
    }
    cross(t) {
        return this.x * t.y - this.y * t.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(Tt(n, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x,
            n = this.y - t.y;
        return e * e + n * n
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this
    }
    rotateAround(t, e) {
        const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y;
        return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y
    }
}
class Nt {
    constructor() {
        Nt.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
    }
    set(t, e, n, i, r, s, a, o, l) {
        const c = this.elements;
        return c[0] = t, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }
    copy(t) {
        const e = this.elements,
            n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
    }
    extractBasis(t, e, n) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
    }
    setFromMatrix4(t) {
        const e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            h = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            f = i[0],
            m = i[3],
            g = i[6],
            v = i[1],
            _ = i[4],
            x = i[7],
            y = i[2],
            M = i[5],
            S = i[8];
        return r[0] = s * f + a * v + o * y, r[3] = s * m + a * _ + o * M, r[6] = s * g + a * x + o * S, r[1] = l * f + c * v + h * y, r[4] = l * m + c * _ + h * M, r[7] = l * g + c * x + h * S, r[2] = u * f + d * v + p * y, r[5] = u * m + d * _ + p * M, r[8] = u * g + d * x + p * S, this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    }
    determinant() {
        const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
        return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
    }
    invert() {
        const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = c * s - a * l,
            u = a * o - c * r,
            d = l * r - s * o,
            p = e * h + n * u + i * d;
        if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const f = 1 / p;
        return t[0] = h * f, t[1] = (i * l - c * n) * f, t[2] = (a * n - i * s) * f, t[3] = u * f, t[4] = (c * e - i * o) * f, t[5] = (i * r - a * e) * f, t[6] = d * f, t[7] = (n * o - l * e) * f, t[8] = (s * e - n * r) * f, this
    }
    transpose() {
        let t;
        const e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    }
    getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose()
    }
    transposeIntoArray(t) {
        const e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    }
    setUvTransform(t, e, n, i, r, s, a) {
        const o = Math.cos(r),
            l = Math.sin(r);
        return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this
    }
    scale(t, e) {
        return this.premultiply(Ot.makeScale(t, e)), this
    }
    rotate(t) {
        return this.premultiply(Ot.makeRotation(-t)), this
    }
    translate(t, e) {
        return this.premultiply(Ot.makeTranslation(t, e)), this
    }
    makeTranslation(t, e) {
        return this.set(1, 0, t, 0, 1, e, 0, 0, 1), this
    }
    makeRotation(t) {
        const e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this
    }
    makeScale(t, e) {
        return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this
    }
    equals(t) {
        const e = this.elements,
            n = t.elements;
        for (let i = 0; i < 9; i++)
            if (e[i] !== n[i]) return !1;
        return !0
    }
    fromArray(t, e = 0) {
        for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
        return this
    }
    toArray(t = [], e = 0) {
        const n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
    }
    clone() {
        return (new this.constructor).fromArray(this.elements)
    }
}
const Ot = new Nt;

function zt(t) {
    for (let e = t.length - 1; e >= 0; --e)
        if (t[e] >= 65535) return !0;
    return !1
}

function Ft(t) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t)
}

function Bt(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
}

function Vt(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
}
const kt = (new Nt).fromArray([.8224621, .0331941, .0170827, .177538, .9668058, .0723974, -1e-7, 1e-7, .9105199]),
    Gt = (new Nt).fromArray([1.2249401, -.0420569, -.0196376, -.2249404, 1.0420571, -.0786361, 1e-7, 0, 1.0982735]);
const Ht = {
        [pt]: t => t,
        [dt]: t => t.convertSRGBToLinear(),
        [ft]: function (t) {
            return t.convertSRGBToLinear().applyMatrix3(Gt)
        }
    },
    Wt = {
        [pt]: t => t,
        [dt]: t => t.convertLinearToSRGB(),
        [ft]: function (t) {
            return t.applyMatrix3(kt).convertLinearToSRGB()
        }
    },
    Xt = {
        enabled: !1,
        get legacyMode() {
            return !this.enabled
        },
        set legacyMode(t) {
            this.enabled = !t
        },
        get workingColorSpace() {
            return pt
        },
        set workingColorSpace(t) {},
        convert: function (t, e, n) {
            if (!1 === this.enabled || e === n || !e || !n) return t;
            const i = Ht[e],
                r = Wt[n];
            if (void 0 === i || void 0 === r) throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);
            return r(i(t))
        },
        fromWorkingColorSpace: function (t, e) {
            return this.convert(t, this.workingColorSpace, e)
        },
        toWorkingColorSpace: function (t, e) {
            return this.convert(t, e, this.workingColorSpace)
        }
    };
let jt;
class qt {
    static getDataURL(t) {
        if (/^data:/i.test(t.src)) return t.src;
        if ("undefined" == typeof HTMLCanvasElement) return t.src;
        let e;
        if (t instanceof HTMLCanvasElement) e = t;
        else {
            void 0 === jt && (jt = Ft("canvas")), jt.width = t.width, jt.height = t.height;
            const n = jt.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = jt
        }
        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
    }
    static sRGBToLinear(t) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const e = Ft("canvas");
            e.width = t.width, e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height),
                r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * Bt(r[t] / 255);
            return n.putImageData(i, 0, 0), e
        }
        if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * Bt(e[t] / 255)) : e[t] = Bt(e[t]);
            return {
                data: e,
                width: t.width,
                height: t.height
            }
        }
        return t
    }
}
class Yt {
    constructor(t = null) {
        this.isSource = !0, this.uuid = wt(), this.data = t, this.version = 0
    }
    set needsUpdate(t) {
        !0 === t && this.version++
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
        const n = {
                uuid: this.uuid,
                url: ""
            },
            i = this.data;
        if (null !== i) {
            let t;
            if (Array.isArray(i)) {
                t = [];
                for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(Zt(i[e].image)) : t.push(Zt(i[e]))
            } else t = Zt(i);
            n.url = t
        }
        return e || (t.images[this.uuid] = n), n
    }
}

function Zt(t) {
    return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? qt.getDataURL(t) : t.data ? {
        data: Array.from(t.data),
        width: t.width,
        height: t.height,
        type: t.data.constructor.name
    } : {}
}
let Jt = 0;
class Kt extends xt {
    constructor(t = Kt.DEFAULT_IMAGE, e = Kt.DEFAULT_MAPPING, n = E, i = E, r = R, s = U, a = k, o = O, l = Kt.DEFAULT_ANISOTROPY, c = ct) {
        super(), this.isTexture = !0, Object.defineProperty(this, "id", {
            value: Jt++
        }), this.uuid = wt(), this.name = "", this.source = new Yt(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Ut(0, 0), this.repeat = new Ut(1, 1), this.center = new Ut(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Nt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
    }
    get image() {
        return this.source.data
    }
    set image(t = null) {
        this.source.data = t
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(t) {
        if (300 !== this.mapping) return t;
        if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case A:
                t.x = t.x - Math.floor(t.x);
                break;
            case E:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case C:
                1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
        }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case A:
                t.y = t.y - Math.floor(t.y);
                break;
            case E:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case C:
                1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
        }
        return this.flipY && (t.y = 1 - t.y), t
    }
    set needsUpdate(t) {
        !0 === t && (this.version++, this.source.needsUpdate = !0)
    }
}
Kt.DEFAULT_IMAGE = null, Kt.DEFAULT_MAPPING = 300, Kt.DEFAULT_ANISOTROPY = 1;
class Qt {
    constructor(t = 0, e = 0, n = 0, i = 1) {
        Qt.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i
    }
    get width() {
        return this.z
    }
    set width(t) {
        this.z = t
    }
    get height() {
        return this.w
    }
    set height(t) {
        this.w = t
    }
    set(t, e, n, i) {
        return this.x = t, this.y = e, this.z = n, this.w = i, this
    }
    setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this
    }
    setX(t) {
        return this.x = t, this
    }
    setY(t) {
        return this.y = t, this
    }
    setZ(t) {
        return this.z = t, this
    }
    setW(t) {
        return this.w = t, this
    }
    setComponent(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
    }
    addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    }
    sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
    }
    subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    }
    applyMatrix4(t) {
        const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            s = t.elements;
        return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        const e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    }
    setAxisAngleFromRotationMatrix(t) {
        let e, n, i, r;
        const s = .01,
            a = .1,
            o = t.elements,
            l = o[0],
            c = o[4],
            h = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            f = o[2],
            m = o[6],
            g = o[10];
        if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
            if (Math.abs(c + u) < a && Math.abs(h + f) < a && Math.abs(p + m) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
                o = (d + 1) / 2,
                v = (g + 1) / 2,
                _ = (c + u) / 4,
                x = (h + f) / 4,
                y = (p + m) / 4;
            return t > o && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = _ / n, r = x / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = _ / i, r = y / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = y / r), this.set(n, i, r, e), this
        }
        let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
        return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    }
    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w
    }
}
class $t extends xt {
    constructor(t = 1, e = 1, n = {}) {
        super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Qt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Qt(0, 0, t, e);
        const i = {
            width: t,
            height: e,
            depth: 1
        };
        this.texture = new Kt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : R, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0
    }
    setSize(t, e, n = 1) {
        this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
        const e = Object.assign({}, t.texture.image);
        return this.texture.source = new Yt(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class te extends Kt {
    constructor(t = null, e = 1, n = 1, i = 1) {
        super(null), this.isDataArrayTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        }, this.magFilter = P, this.minFilter = P, this.wrapR = E, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}
class ee extends Kt {
    constructor(t = null, e = 1, n = 1, i = 1) {
        super(null), this.isData3DTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        }, this.magFilter = P, this.minFilter = P, this.wrapR = E, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}
class ne {
    constructor(t = 0, e = 0, n = 0, i = 1) {
        this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i
    }
    static slerpFlat(t, e, n, i, r, s, a) {
        let o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3];
        const u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            f = r[s + 3];
        if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void(t[e + 3] = h);
        if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = f);
        if (h !== f || o !== u || l !== d || c !== p) {
            let t = 1 - a;
            const e = o * u + l * d + c * p + h * f,
                n = e >= 0 ? 1 : -1,
                i = 1 - e * e;
            if (i > Number.EPSILON) {
                const r = Math.sqrt(i),
                    s = Math.atan2(r, e * n);
                t = Math.sin(t * s) / r, a = Math.sin(a * s) / r
            }
            const r = a * n;
            if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + f * r, t === 1 - a) {
                const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                o *= t, l *= t, c *= t, h *= t
            }
        }
        t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, s) {
        const a = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            h = r[s],
            u = r[s + 1],
            d = r[s + 2],
            p = r[s + 3];
        return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t, this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t, this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t, this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(t) {
        this._w = t, this._onChangeCallback()
    }
    set(t, e, n, i) {
        return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    }
    copy(t) {
        return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
    }
    setFromEuler(t, e) {
        const n = t._x,
            i = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(n / 2),
            c = a(i / 2),
            h = a(r / 2),
            u = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);
        switch (s) {
            case "XYZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p
        }
        return !1 !== e && this._onChangeCallback(), this
    }
    setFromAxisAngle(t, e) {
        const n = e / 2,
            i = Math.sin(n);
        return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
    }
    setFromRotationMatrix(t) {
        const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            h = e[10],
            u = n + a + h;
        if (u > 0) {
            const t = .5 / Math.sqrt(u + 1);
            this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - i) * t
        } else if (n > a && n > h) {
            const t = 2 * Math.sqrt(1 + n - a - h);
            this._w = (c - o) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + l) / t
        } else if (a > h) {
            const t = 2 * Math.sqrt(1 + a - n - h);
            this._w = (r - l) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (o + c) / t
        } else {
            const t = 2 * Math.sqrt(1 + h - n - a);
            this._w = (s - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t
        }
        return this._onChangeCallback(), this
    }
    setFromUnitVectors(t, e) {
        let n = t.dot(e) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
    }
    angleTo(t) {
        return 2 * Math.acos(Math.abs(Tt(this.dot(t), -1, 1)))
    }
    rotateTowards(t, e) {
        const n = this.angleTo(t);
        if (0 === n) return this;
        const i = Math.min(1, e / n);
        return this.slerp(t, i), this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    }
    dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let t = this.length();
        return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
    }
    multiply(t) {
        return this.multiplyQuaternions(this, t)
    }
    premultiply(t) {
        return this.multiplyQuaternions(t, this)
    }
    multiplyQuaternions(t, e) {
        const n = t._x,
            i = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
        return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this
    }
    slerp(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        const n = this._x,
            i = this._y,
            r = this._z,
            s = this._w;
        let a = s * t._w + n * t._x + i * t._y + r * t._z;
        if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
        const o = 1 - a * a;
        if (o <= Number.EPSILON) {
            const t = 1 - e;
            return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
        }
        const l = Math.sqrt(o),
            c = Math.atan2(l, a),
            h = Math.sin((1 - e) * c) / l,
            u = Math.sin(e * c) / l;
        return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
    }
    slerpQuaternions(t, e, n) {
        return this.copy(t).slerp(e, n)
    }
    random() {
        const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
        return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    }
    fromArray(t, e = 0) {
        return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
    }
    toArray(t = [], e = 0) {
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    }
    fromBufferAttribute(t, e) {
        return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(t) {
        return this._onChangeCallback = t, this
    }
    _onChangeCallback() {}*[Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._w
    }
}
class ie {
    constructor(t = 0, e = 0, n = 0) {
        ie.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n
    }
    set(t, e, n) {
        return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
    }
    setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this
    }
    setX(t) {
        return this.x = t, this
    }
    setY(t) {
        return this.y = t, this
    }
    setZ(t) {
        return this.z = t, this
    }
    setComponent(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z)
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this
    }
    addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    }
    sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
    }
    subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this
    }
    multiplyVectors(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    }
    applyEuler(t) {
        return this.applyQuaternion(se.setFromEuler(t))
    }
    applyAxisAngle(t, e) {
        return this.applyQuaternion(se.setFromAxisAngle(t, e))
    }
    applyMatrix3(t) {
        const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
    }
    applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize()
    }
    applyMatrix4(t) {
        const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this
    }
    applyQuaternion(t) {
        const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * i - a * n,
            c = o * n + a * e - r * i,
            h = o * i + r * n - s * e,
            u = -r * e - s * n - a * i;
        return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this
    }
    project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    }
    unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    }
    transformDirection(t) {
        const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
    }
    divide(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
    }
    cross(t) {
        return this.crossVectors(this, t)
    }
    crossVectors(t, e) {
        const n = t.x,
            i = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z;
        return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this
    }
    projectOnVector(t) {
        const e = t.lengthSq();
        if (0 === e) return this.set(0, 0, 0);
        const n = t.dot(this) / e;
        return this.copy(t).multiplyScalar(n)
    }
    projectOnPlane(t) {
        return re.copy(this).projectOnVector(t), this.sub(re)
    }
    reflect(t) {
        return this.sub(re.copy(t).multiplyScalar(2 * this.dot(t)))
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(Tt(n, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
        return e * e + n * n + i * i
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    }
    setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    }
    setFromSphericalCoords(t, e, n) {
        const i = Math.sin(e) * t;
        return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
    }
    setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    }
    setFromCylindricalCoords(t, e, n) {
        return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this
    }
    setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
        return this.x = e, this.y = n, this.z = i, this
    }
    setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, 4 * e)
    }
    setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, 3 * e)
    }
    setFromEuler(t) {
        return this.x = t._x, this.y = t._y, this.z = t._z, this
    }
    setFromColor(t) {
        return this.x = t.r, this.y = t.g, this.z = t.b, this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
    }
    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }
    randomDirection() {
        const t = 2 * (Math.random() - .5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2);
        return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z
    }
}
const re = new ie,
    se = new ne;
class ae {
    constructor(t = new ie(1 / 0, 1 / 0, 1 / 0), e = new ie(-1 / 0, -1 / 0, -1 / 0)) {
        this.isBox3 = !0, this.min = t, this.max = e
    }
    set(t, e) {
        return this.min.copy(t), this.max.copy(e), this
    }
    setFromArray(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(le.fromArray(t, e));
        return this
    }
    setFromBufferAttribute(t) {
        this.makeEmpty();
        for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(le.fromBufferAttribute(t, e));
        return this
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
        return this
    }
    setFromCenterAndSize(t, e) {
        const n = le.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
    }
    setFromObject(t, e = !1) {
        return this.makeEmpty(), this.expandByObject(t, e)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    }
    expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this
    }
    expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this
    }
    expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this
    }
    expandByObject(t, e = !1) {
        if (t.updateWorldMatrix(!1, !1), void 0 !== t.boundingBox) null === t.boundingBox && t.computeBoundingBox(), ce.copy(t.boundingBox), ce.applyMatrix4(t.matrixWorld), this.union(ce);
        else {
            const n = t.geometry;
            if (void 0 !== n)
                if (e && void 0 !== n.attributes && void 0 !== n.attributes.position) {
                    const e = n.attributes.position;
                    for (let n = 0, i = e.count; n < i; n++) le.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), this.expandByPoint(le)
                } else null === n.boundingBox && n.computeBoundingBox(), ce.copy(n.boundingBox), ce.applyMatrix4(t.matrixWorld), this.union(ce)
        }
        const n = t.children;
        for (let i = 0, r = n.length; i < r; i++) this.expandByObject(n[i], e);
        return this
    }
    containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    }
    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    }
    intersectsSphere(t) {
        return this.clampPoint(t.center, le), le.distanceToSquared(t.center) <= t.radius * t.radius
    }
    intersectsPlane(t) {
        let e, n;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
    }
    intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(ge), ve.subVectors(this.max, ge), he.subVectors(t.a, ge), ue.subVectors(t.b, ge), de.subVectors(t.c, ge), pe.subVectors(ue, he), fe.subVectors(de, ue), me.subVectors(he, de);
        let e = [0, -pe.z, pe.y, 0, -fe.z, fe.y, 0, -me.z, me.y, pe.z, 0, -pe.x, fe.z, 0, -fe.x, me.z, 0, -me.x, -pe.y, pe.x, 0, -fe.y, fe.x, 0, -me.y, me.x, 0];
        return !!ye(e, he, ue, de, ve) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!ye(e, he, ue, de, ve) && (_e.crossVectors(pe, fe), e = [_e.x, _e.y, _e.z], ye(e, he, ue, de, ve)))
    }
    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
    }
    distanceToPoint(t) {
        return this.clampPoint(t, le).distanceTo(t)
    }
    getBoundingSphere(t) {
        return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = .5 * this.getSize(le).length()), t
    }
    intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    }
    union(t) {
        return this.min.min(t.min), this.max.max(t.max), this
    }
    applyMatrix4(t) {
        return this.isEmpty() || (oe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), oe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), oe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), oe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), oe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), oe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), oe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), oe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(oe)), this
    }
    translate(t) {
        return this.min.add(t), this.max.add(t), this
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
}
const oe = [new ie, new ie, new ie, new ie, new ie, new ie, new ie, new ie],
    le = new ie,
    ce = new ae,
    he = new ie,
    ue = new ie,
    de = new ie,
    pe = new ie,
    fe = new ie,
    me = new ie,
    ge = new ie,
    ve = new ie,
    _e = new ie,
    xe = new ie;

function ye(t, e, n, i, r) {
    for (let s = 0, a = t.length - 3; s <= a; s += 3) {
        xe.fromArray(t, s);
        const a = r.x * Math.abs(xe.x) + r.y * Math.abs(xe.y) + r.z * Math.abs(xe.z),
            o = e.dot(xe),
            l = n.dot(xe),
            c = i.dot(xe);
        if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1
    }
    return !0
}
const Me = new ae,
    Se = new ie,
    be = new ie;
class we {
    constructor(t = new ie, e = -1) {
        this.center = t, this.radius = e
    }
    set(t, e) {
        return this.center.copy(t), this.radius = e, this
    }
    setFromPoints(t, e) {
        const n = this.center;
        void 0 !== e ? n.copy(e) : Me.setFromPoints(t).getCenter(n);
        let i = 0;
        for (let r = 0, s = t.length; r < s; r++) i = Math.max(i, n.distanceToSquared(t[r]));
        return this.radius = Math.sqrt(i), this
    }
    copy(t) {
        return this.center.copy(t.center), this.radius = t.radius, this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this
    }
    containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius
    }
    intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
    }
    intersectsBox(t) {
        return t.intersectsSphere(this)
    }
    intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(t, e) {
        const n = this.center.distanceToSquared(t);
        return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    }
    getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
    }
    applyMatrix4(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    }
    translate(t) {
        return this.center.add(t), this
    }
    expandByPoint(t) {
        if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
        Se.subVectors(t, this.center);
        const e = Se.lengthSq();
        if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
                n = .5 * (t - this.radius);
            this.center.addScaledVector(Se, n / t), this.radius += n
        }
        return this
    }
    union(t) {
        return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? this.radius = Math.max(this.radius, t.radius) : (be.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Se.copy(t.center).add(be)), this.expandByPoint(Se.copy(t.center).sub(be))), this)
    }
    equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const Te = new ie,
    Ae = new ie,
    Ee = new ie,
    Ce = new ie,
    Pe = new ie,
    Le = new ie,
    De = new ie;
class Re {
    constructor(t = new ie, e = new ie(0, 0, -1)) {
        this.origin = t, this.direction = e
    }
    set(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this
    }
    copy(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    }
    at(t, e) {
        return e.copy(this.origin).addScaledVector(this.direction, t)
    }
    lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this
    }
    recast(t) {
        return this.origin.copy(this.at(t, Te)), this
    }
    closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const n = e.dot(this.direction);
        return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
    }
    distanceSqToPoint(t) {
        const e = Te.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (Te.copy(this.origin).addScaledVector(this.direction, e), Te.distanceToSquared(t))
    }
    distanceSqToSegment(t, e, n, i) {
        Ae.copy(t).add(e).multiplyScalar(.5), Ee.copy(e).sub(t).normalize(), Ce.copy(this.origin).sub(Ae);
        const r = .5 * t.distanceTo(e),
            s = -this.direction.dot(Ee),
            a = Ce.dot(this.direction),
            o = -Ce.dot(Ee),
            l = Ce.lengthSq(),
            c = Math.abs(1 - s * s);
        let h, u, d, p;
        if (c > 0)
            if (h = s * o - a, u = s * a - o, p = r * c, h >= 0)
                if (u >= -p)
                    if (u <= p) {
                        const t = 1 / c;
                        h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
                    } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
        else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
        else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
        else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
        return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(Ae).addScaledVector(Ee, u), d
    }
    intersectSphere(t, e) {
        Te.subVectors(t.center, this.origin);
        const n = Te.dot(this.direction),
            i = Te.dot(Te) - n * n,
            r = t.radius * t.radius;
        if (i > r) return null;
        const s = Math.sqrt(r - i),
            a = n - s,
            o = n + s;
        return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
    }
    intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    }
    distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        const n = -(this.origin.dot(t.normal) + t.constant) / e;
        return n >= 0 ? n : null
    }
    intersectPlane(t, e) {
        const n = this.distanceToPlane(t);
        return null === n ? null : this.at(n, e)
    }
    intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        if (0 === e) return !0;
        return t.normal.dot(this.direction) * e < 0
    }
    intersectBox(t, e) {
        let n, i, r, s, a, o;
        const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            h = 1 / this.direction.z,
            u = this.origin;
        return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), n > s || r > i ? null : ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
    }
    intersectsBox(t) {
        return null !== this.intersectBox(t, Te)
    }
    intersectTriangle(t, e, n, i, r) {
        Pe.subVectors(e, t), Le.subVectors(n, t), De.crossVectors(Pe, Le);
        let s, a = this.direction.dot(De);
        if (a > 0) {
            if (i) return null;
            s = 1
        } else {
            if (!(a < 0)) return null;
            s = -1, a = -a
        }
        Ce.subVectors(this.origin, t);
        const o = s * this.direction.dot(Le.crossVectors(Ce, Le));
        if (o < 0) return null;
        const l = s * this.direction.dot(Pe.cross(Ce));
        if (l < 0) return null;
        if (o + l > a) return null;
        const c = -s * Ce.dot(De);
        return c < 0 ? null : this.at(c / a, r)
    }
    applyMatrix4(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    }
    equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class Ie {
    constructor() {
        Ie.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, f, m) {
        const g = this.elements;
        return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    clone() {
        return (new Ie).fromArray(this.elements)
    }
    copy(t) {
        const e = this.elements,
            n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
    }
    copyPosition(t) {
        const e = this.elements,
            n = t.elements;
        return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
    }
    setFromMatrix3(t) {
        const e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
    }
    extractBasis(t, e, n) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
    }
    makeBasis(t, e, n) {
        return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
    }
    extractRotation(t) {
        const e = this.elements,
            n = t.elements,
            i = 1 / Ue.setFromMatrixColumn(t, 0).length(),
            r = 1 / Ue.setFromMatrixColumn(t, 1).length(),
            s = 1 / Ue.setFromMatrixColumn(t, 2).length();
        return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }
    makeRotationFromEuler(t) {
        const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            s = Math.cos(n),
            a = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            h = Math.sin(r);
        if ("XYZ" === t.order) {
            const t = s * c,
                n = s * h,
                i = a * c,
                r = a * h;
            e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = s * o
        } else if ("YXZ" === t.order) {
            const t = o * c,
                n = o * h,
                i = l * c,
                r = l * h;
            e[0] = t + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n * a - i, e[6] = r + t * a, e[10] = s * o
        } else if ("ZXY" === t.order) {
            const t = o * c,
                n = o * h,
                i = l * c,
                r = l * h;
            e[0] = t - r * a, e[4] = -s * h, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o
        } else if ("ZYX" === t.order) {
            const t = s * c,
                n = s * h,
                i = a * c,
                r = a * h;
            e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o
        } else if ("YZX" === t.order) {
            const t = s * o,
                n = s * l,
                i = a * o,
                r = a * l;
            e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h
        } else if ("XZY" === t.order) {
            const t = s * o,
                n = s * l,
                i = a * o,
                r = a * l;
            e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = a * c, e[10] = r * h + t
        }
        return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }
    makeRotationFromQuaternion(t) {
        return this.compose(Oe, t, ze)
    }
    lookAt(t, e, n) {
        const i = this.elements;
        return Ve.subVectors(t, e), 0 === Ve.lengthSq() && (Ve.z = 1), Ve.normalize(), Fe.crossVectors(n, Ve), 0 === Fe.lengthSq() && (1 === Math.abs(n.z) ? Ve.x += 1e-4 : Ve.z += 1e-4, Ve.normalize(), Fe.crossVectors(n, Ve)), Fe.normalize(), Be.crossVectors(Ve, Fe), i[0] = Fe.x, i[4] = Be.x, i[8] = Ve.x, i[1] = Fe.y, i[5] = Be.y, i[9] = Ve.y, i[2] = Fe.z, i[6] = Be.z, i[10] = Ve.z, this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            h = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            f = n[6],
            m = n[10],
            g = n[14],
            v = n[3],
            _ = n[7],
            x = n[11],
            y = n[15],
            M = i[0],
            S = i[4],
            b = i[8],
            w = i[12],
            T = i[1],
            A = i[5],
            E = i[9],
            C = i[13],
            P = i[2],
            L = i[6],
            D = i[10],
            R = i[14],
            I = i[3],
            U = i[7],
            N = i[11],
            O = i[15];
        return r[0] = s * M + a * T + o * P + l * I, r[4] = s * S + a * A + o * L + l * U, r[8] = s * b + a * E + o * D + l * N, r[12] = s * w + a * C + o * R + l * O, r[1] = c * M + h * T + u * P + d * I, r[5] = c * S + h * A + u * L + d * U, r[9] = c * b + h * E + u * D + d * N, r[13] = c * w + h * C + u * R + d * O, r[2] = p * M + f * T + m * P + g * I, r[6] = p * S + f * A + m * L + g * U, r[10] = p * b + f * E + m * D + g * N, r[14] = p * w + f * C + m * R + g * O, r[3] = v * M + _ * T + x * P + y * I, r[7] = v * S + _ * A + x * L + y * U, r[11] = v * b + _ * E + x * D + y * N, r[15] = v * w + _ * C + x * R + y * O, this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    }
    determinant() {
        const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            h = t[6],
            u = t[10],
            d = t[14];
        return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
    }
    transpose() {
        const t = this.elements;
        let e;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    }
    setPosition(t, e, n) {
        const i = this.elements;
        return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
    }
    invert() {
        const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = t[9],
            u = t[10],
            d = t[11],
            p = t[12],
            f = t[13],
            m = t[14],
            g = t[15],
            v = h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g,
            _ = p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g,
            x = c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g,
            y = p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m,
            M = e * v + n * _ + i * x + r * y;
        if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const S = 1 / M;
        return t[0] = v * S, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * S, t[2] = (a * m * r - f * o * r + f * i * l - n * m * l - a * i * g + n * o * g) * S, t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * S, t[4] = _ * S, t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * S, t[6] = (p * o * r - s * m * r - p * i * l + e * m * l + s * i * g - e * o * g) * S, t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * S, t[8] = x * S, t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * S, t[10] = (s * f * r - p * a * r + p * n * l - e * f * l - s * n * g + e * a * g) * S, t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * S, t[12] = y * S, t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * S, t[14] = (p * a * i - s * f * i - p * n * o + e * f * o + s * n * m - e * a * m) * S, t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * S, this
    }
    scale(t) {
        const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
        return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
    }
    getMaxScaleOnAxis() {
        const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, n, i))
    }
    makeTranslation(t, e, n) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
    }
    makeRotationX(t) {
        const e = Math.cos(t),
            n = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
    }
    makeRotationY(t) {
        const e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
    }
    makeRotationZ(t) {
        const e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    makeRotationAxis(t, e) {
        const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            c = r * a;
        return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this
    }
    makeScale(t, e, n) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    }
    makeShear(t, e, n, i, r, s) {
        return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this
    }
    compose(t, e, n) {
        const i = this.elements,
            r = e._x,
            s = e._y,
            a = e._z,
            o = e._w,
            l = r + r,
            c = s + s,
            h = a + a,
            u = r * l,
            d = r * c,
            p = r * h,
            f = s * c,
            m = s * h,
            g = a * h,
            v = o * l,
            _ = o * c,
            x = o * h,
            y = n.x,
            M = n.y,
            S = n.z;
        return i[0] = (1 - (f + g)) * y, i[1] = (d + x) * y, i[2] = (p - _) * y, i[3] = 0, i[4] = (d - x) * M, i[5] = (1 - (u + g)) * M, i[6] = (m + v) * M, i[7] = 0, i[8] = (p + _) * S, i[9] = (m - v) * S, i[10] = (1 - (u + f)) * S, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
    }
    decompose(t, e, n) {
        const i = this.elements;
        let r = Ue.set(i[0], i[1], i[2]).length();
        const s = Ue.set(i[4], i[5], i[6]).length(),
            a = Ue.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ne.copy(this);
        const o = 1 / r,
            l = 1 / s,
            c = 1 / a;
        return Ne.elements[0] *= o, Ne.elements[1] *= o, Ne.elements[2] *= o, Ne.elements[4] *= l, Ne.elements[5] *= l, Ne.elements[6] *= l, Ne.elements[8] *= c, Ne.elements[9] *= c, Ne.elements[10] *= c, e.setFromRotationMatrix(Ne), n.x = r, n.y = s, n.z = a, this
    }
    makePerspective(t, e, n, i, r, s) {
        const a = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (n - i),
            c = (e + t) / (e - t),
            h = (n + i) / (n - i),
            u = -(s + r) / (s - r),
            d = -2 * s * r / (s - r);
        return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
    }
    makeOrthographic(t, e, n, i, r, s) {
        const a = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (s - r),
            h = (e + t) * o,
            u = (n + i) * l,
            d = (s + r) * c;
        return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
    }
    equals(t) {
        const e = this.elements,
            n = t.elements;
        for (let i = 0; i < 16; i++)
            if (e[i] !== n[i]) return !1;
        return !0
    }
    fromArray(t, e = 0) {
        for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
        return this
    }
    toArray(t = [], e = 0) {
        const n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
    }
}
const Ue = new ie,
    Ne = new Ie,
    Oe = new ie(0, 0, 0),
    ze = new ie(1, 1, 1),
    Fe = new ie,
    Be = new ie,
    Ve = new ie,
    ke = new Ie,
    Ge = new ne;
class He {
    constructor(t = 0, e = 0, n = 0, i = He.DEFAULT_ORDER) {
        this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t, this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t, this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t, this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(t) {
        this._order = t, this._onChangeCallback()
    }
    set(t, e, n, i = this._order) {
        return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    }
    copy(t) {
        return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
        const i = t.elements,
            r = i[0],
            s = i[4],
            a = i[8],
            o = i[1],
            l = i[5],
            c = i[9],
            h = i[2],
            u = i[6],
            d = i[10];
        switch (e) {
            case "XYZ":
                this._y = Math.asin(Tt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-Tt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(Tt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                break;
            case "ZYX":
                this._y = Math.asin(-Tt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                break;
            case "YZX":
                this._z = Math.asin(Tt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                break;
            case "XZY":
                this._z = Math.asin(-Tt(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0)
        }
        return this._order = e, !0 === n && this._onChangeCallback(), this
    }
    setFromQuaternion(t, e, n) {
        return ke.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ke, e, n)
    }
    setFromVector3(t, e = this._order) {
        return this.set(t.x, t.y, t.z, e)
    }
    reorder(t) {
        return Ge.setFromEuler(this), this.setFromQuaternion(Ge, t)
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    }
    fromArray(t) {
        return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
    }
    toArray(t = [], e = 0) {
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    }
    _onChange(t) {
        return this._onChangeCallback = t, this
    }
    _onChangeCallback() {}*[Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._order
    }
}
He.DEFAULT_ORDER = "XYZ";
class We {
    constructor() {
        this.mask = 1
    }
    set(t) {
        this.mask = (1 << t | 0) >>> 0
    }
    enable(t) {
        this.mask |= 1 << t | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(t) {
        this.mask ^= 1 << t | 0
    }
    disable(t) {
        this.mask &= ~(1 << t | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(t) {
        return 0 != (this.mask & t.mask)
    }
    isEnabled(t) {
        return 0 != (this.mask & (1 << t | 0))
    }
}
let Xe = 0;
const je = new ie,
    qe = new ne,
    Ye = new Ie,
    Ze = new ie,
    Je = new ie,
    Ke = new ie,
    Qe = new ne,
    $e = new ie(1, 0, 0),
    tn = new ie(0, 1, 0),
    en = new ie(0, 0, 1),
    nn = {
        type: "added"
    },
    rn = {
        type: "removed"
    };
class sn extends xt {
    constructor() {
        super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
            value: Xe++
        }), this.uuid = wt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = sn.DEFAULT_UP.clone();
        const t = new ie,
            e = new He,
            n = new ne,
            i = new ie(1, 1, 1);
        e._onChange((function () {
            n.setFromEuler(e, !1)
        })), n._onChange((function () {
            e.setFromQuaternion(n, void 0, !1)
        })), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new Ie
            },
            normalMatrix: {
                value: new Nt
            }
        }), this.matrix = new Ie, this.matrixWorld = new Ie, this.matrixAutoUpdate = sn.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new We, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(t) {
        return this.quaternion.premultiply(t), this
    }
    setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e)
    }
    setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0)
    }
    setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t)
    }
    setRotationFromQuaternion(t) {
        this.quaternion.copy(t)
    }
    rotateOnAxis(t, e) {
        return qe.setFromAxisAngle(t, e), this.quaternion.multiply(qe), this
    }
    rotateOnWorldAxis(t, e) {
        return qe.setFromAxisAngle(t, e), this.quaternion.premultiply(qe), this
    }
    rotateX(t) {
        return this.rotateOnAxis($e, t)
    }
    rotateY(t) {
        return this.rotateOnAxis(tn, t)
    }
    rotateZ(t) {
        return this.rotateOnAxis(en, t)
    }
    translateOnAxis(t, e) {
        return je.copy(t).applyQuaternion(this.quaternion), this.position.add(je.multiplyScalar(e)), this
    }
    translateX(t) {
        return this.translateOnAxis($e, t)
    }
    translateY(t) {
        return this.translateOnAxis(tn, t)
    }
    translateZ(t) {
        return this.translateOnAxis(en, t)
    }
    localToWorld(t) {
        return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(t) {
        return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Ye.copy(this.matrixWorld).invert())
    }
    lookAt(t, e, n) {
        t.isVector3 ? Ze.copy(t) : Ze.set(t, e, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1), Je.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ye.lookAt(Je, Ze, this.up) : Ye.lookAt(Ze, Je, this.up), this.quaternion.setFromRotationMatrix(Ye), i && (Ye.extractRotation(i.matrixWorld), qe.setFromRotationMatrix(Ye), this.quaternion.premultiply(qe.invert()))
    }
    add(t) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
        }
        return t === this || t && t.isObject3D && (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(nn)), this
    }
    remove(t) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
            return this
        }
        const e = this.children.indexOf(t);
        return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(rn)), this
    }
    removeFromParent() {
        const t = this.parent;
        return null !== t && t.remove(this), this
    }
    clear() {
        for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            e.parent = null, e.dispatchEvent(rn)
        }
        return this.children.length = 0, this
    }
    attach(t) {
        return this.updateWorldMatrix(!0, !1), Ye.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Ye.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ye), this.add(t), t.updateWorldMatrix(!1, !0), this
    }
    getObjectById(t) {
        return this.getObjectByProperty("id", t)
    }
    getObjectByName(t) {
        return this.getObjectByProperty("name", t)
    }
    getObjectByProperty(t, e) {
        if (this[t] === e) return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i
        }
    }
    getObjectsByProperty(t, e) {
        let n = [];
        this[t] === e && n.push(this);
        for (let i = 0, r = this.children.length; i < r; i++) {
            const r = this.children[i].getObjectsByProperty(t, e);
            r.length > 0 && (n = n.concat(r))
        }
        return n
    }
    getWorldPosition(t) {
        return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(t) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Je, t, Ke), t
    }
    getWorldScale(t) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Je, Qe, t), t
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize()
    }
    raycast() {}
    traverse(t) {
        t(this);
        const e = this.children;
        for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
    }
    traverseVisible(t) {
        if (!1 === this.visible) return;
        t(this);
        const e = this.children;
        for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
    }
    traverseAncestors(t) {
        const e = this.parent;
        null !== e && (t(e), e.traverseAncestors(t))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        const e = this.children;
        for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            !0 !== i.matrixWorldAutoUpdate && !0 !== t || i.updateMatrixWorld(t)
        }
    }
    updateWorldMatrix(t, e) {
        const n = this.parent;
        if (!0 === t && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0)
            }
        }
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t,
            n = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};

        function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
        }
        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
                const n = e.shapes;
                if (Array.isArray(n))
                    for (let e = 0, i = n.length; e < i; e++) {
                        const i = n[e];
                        r(t.shapes, i)
                    } else r(t.shapes, n)
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) {
                const e = [];
                for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
                i.material = e
            } else i.material = r(t.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
                const n = this.animations[e];
                i.animations.push(r(t.animations, n))
            }
        }
        if (e) {
            const e = s(t.geometries),
                i = s(t.materials),
                r = s(t.textures),
                a = s(t.images),
                o = s(t.shapes),
                l = s(t.skeletons),
                c = s(t.animations),
                h = s(t.nodes);
            e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h)
        }
        return n.object = i, n;

        function s(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                delete i.metadata, e.push(i)
            }
            return e
        }
    }
    clone(t) {
        return (new this.constructor).copy(this, t)
    }
    copy(t, e = !0) {
        if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
            for (let n = 0; n < t.children.length; n++) {
                const e = t.children[n];
                this.add(e.clone())
            }
        return this
    }
}
sn.DEFAULT_UP = new ie(0, 1, 0), sn.DEFAULT_MATRIX_AUTO_UPDATE = !0, sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const an = new ie,
    on = new ie,
    ln = new ie,
    cn = new ie,
    hn = new ie,
    un = new ie,
    dn = new ie,
    pn = new ie,
    fn = new ie,
    mn = new ie;
let gn = !1;
class vn {
    constructor(t = new ie, e = new ie, n = new ie) {
        this.a = t, this.b = e, this.c = n
    }
    static getNormal(t, e, n, i) {
        i.subVectors(n, e), an.subVectors(t, e), i.cross(an);
        const r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
    }
    static getBarycoord(t, e, n, i, r) {
        an.subVectors(i, e), on.subVectors(n, e), ln.subVectors(t, e);
        const s = an.dot(an),
            a = an.dot(on),
            o = an.dot(ln),
            l = on.dot(on),
            c = on.dot(ln),
            h = s * l - a * a;
        if (0 === h) return r.set(-2, -1, -1);
        const u = 1 / h,
            d = (l * o - a * c) * u,
            p = (s * c - a * o) * u;
        return r.set(1 - d - p, p, d)
    }
    static containsPoint(t, e, n, i) {
        return this.getBarycoord(t, e, n, i, cn), cn.x >= 0 && cn.y >= 0 && cn.x + cn.y <= 1
    }
    static getUV(t, e, n, i, r, s, a, o) {
        return !1 === gn && (gn = !0), this.getInterpolation(t, e, n, i, r, s, a, o)
    }
    static getInterpolation(t, e, n, i, r, s, a, o) {
        return this.getBarycoord(t, e, n, i, cn), o.setScalar(0), o.addScaledVector(r, cn.x), o.addScaledVector(s, cn.y), o.addScaledVector(a, cn.z), o
    }
    static isFrontFacing(t, e, n, i) {
        return an.subVectors(n, e), on.subVectors(t, e), an.cross(on).dot(i) < 0
    }
    set(t, e, n) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
    }
    setFromPointsAndIndices(t, e, n, i) {
        return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
    }
    setFromAttributeAndIndices(t, e, n, i) {
        return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    }
    getArea() {
        return an.subVectors(this.c, this.b), on.subVectors(this.a, this.b), .5 * an.cross(on).length()
    }
    getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(t) {
        return vn.getNormal(this.a, this.b, this.c, t)
    }
    getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(t, e) {
        return vn.getBarycoord(t, this.a, this.b, this.c, e)
    }
    getUV(t, e, n, i, r) {
        return !1 === gn && (gn = !0), vn.getInterpolation(t, this.a, this.b, this.c, e, n, i, r)
    }
    getInterpolation(t, e, n, i, r) {
        return vn.getInterpolation(t, this.a, this.b, this.c, e, n, i, r)
    }
    containsPoint(t) {
        return vn.containsPoint(t, this.a, this.b, this.c)
    }
    isFrontFacing(t) {
        return vn.isFrontFacing(this.a, this.b, this.c, t)
    }
    intersectsBox(t) {
        return t.intersectsTriangle(this)
    }
    closestPointToPoint(t, e) {
        const n = this.a,
            i = this.b,
            r = this.c;
        let s, a;
        hn.subVectors(i, n), un.subVectors(r, n), pn.subVectors(t, n);
        const o = hn.dot(pn),
            l = un.dot(pn);
        if (o <= 0 && l <= 0) return e.copy(n);
        fn.subVectors(t, i);
        const c = hn.dot(fn),
            h = un.dot(fn);
        if (c >= 0 && h <= c) return e.copy(i);
        const u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(hn, s);
        mn.subVectors(t, r);
        const d = hn.dot(mn),
            p = un.dot(mn);
        if (p >= 0 && d <= p) return e.copy(r);
        const f = d * l - o * p;
        if (f <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(un, a);
        const m = c * p - d * h;
        if (m <= 0 && h - c >= 0 && d - p >= 0) return dn.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(dn, a);
        const g = 1 / (m + f + u);
        return s = f * g, a = u * g, e.copy(n).addScaledVector(hn, s).addScaledVector(un, a)
    }
    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
}
let _n = 0;
class xn extends xt {
    constructor() {
        super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
            value: _n++
        }), this.uuid = wt(), this.name = "", this.type = "Material", this.blending = h, this.side = a, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = d, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = mt, this.stencilZFail = mt, this.stencilZPass = mt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(t) {
        this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(t) {
        if (void 0 !== t)
            for (const e in t) {
                const n = t[e];
                if (void 0 === n) continue;
                const i = this[e];
                void 0 !== i && (i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n)
            }
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t;
        e && (t = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };

        function i(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                delete i.metadata, e.push(i)
            }
            return e
        }
        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== h && (n.blending = this.blending), this.side !== a && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.forceSinglePass && (n.forceSinglePass = this.forceSinglePass), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
            const e = i(t.textures),
                r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
        }
        return n
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let n = null;
        if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
        }
        return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(t) {
        !0 === t && this.version++
    }
}
const yn = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    Mn = {
        h: 0,
        s: 0,
        l: 0
    },
    Sn = {
        h: 0,
        s: 0,
        l: 0
    };

function bn(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
}
class wn {
    constructor(t, e, n) {
        return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }
    set(t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
    }
    setScalar(t) {
        return this.r = t, this.g = t, this.b = t, this
    }
    setHex(t, e = dt) {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, Xt.toWorkingColorSpace(this, e), this
    }
    setRGB(t, e, n, i = Xt.workingColorSpace) {
        return this.r = t, this.g = e, this.b = n, Xt.toWorkingColorSpace(this, i), this
    }
    setHSL(t, e, n, i = Xt.workingColorSpace) {
        if (t = At(t, 1), e = Tt(e, 0, 1), n = Tt(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
        else {
            const i = n <= .5 ? n * (1 + e) : n + e - n * e,
                r = 2 * n - i;
            this.r = bn(r, i, t + 1 / 3), this.g = bn(r, i, t), this.b = bn(r, i, t - 1 / 3)
        }
        return Xt.toWorkingColorSpace(this, i), this
    }
    setStyle(t, e = dt) {
        function n(t) {
            void 0 !== t && parseFloat(t)
        }
        let i;
        if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
            let t;
            const r = i[1],
                s = i[2];
            switch (r) {
                case "rgb":
                case "rgba":
                    if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, Xt.toWorkingColorSpace(this, e), n(t[4]), this;
                    if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, Xt.toWorkingColorSpace(this, e), n(t[4]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                        const i = parseFloat(t[1]) / 360,
                            r = parseFloat(t[2]) / 100,
                            s = parseFloat(t[3]) / 100;
                        return n(t[4]), this.setHSL(i, r, s, e)
                    }
            }
        } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = i[1],
                n = t.length;
            if (3 === n) return this.setRGB(parseInt(t.charAt(0), 16) / 15, parseInt(t.charAt(1), 16) / 15, parseInt(t.charAt(2), 16) / 15, e);
            if (6 === n) return this.setHex(parseInt(t, 16), e)
        } else if (t && t.length > 0) return this.setColorName(t, e);
        return this
    }
    setColorName(t, e = dt) {
        const n = yn[t.toLowerCase()];
        return void 0 !== n && this.setHex(n, e), this
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b)
    }
    copy(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this
    }
    copySRGBToLinear(t) {
        return this.r = Bt(t.r), this.g = Bt(t.g), this.b = Bt(t.b), this
    }
    copyLinearToSRGB(t) {
        return this.r = Vt(t.r), this.g = Vt(t.g), this.b = Vt(t.b), this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this
    }
    getHex(t = dt) {
        return Xt.fromWorkingColorSpace(Tn.copy(this), t), Tt(255 * Tn.r, 0, 255) << 16 ^ Tt(255 * Tn.g, 0, 255) << 8 ^ Tt(255 * Tn.b, 0, 255) << 0
    }
    getHexString(t = dt) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6)
    }
    getHSL(t, e = Xt.workingColorSpace) {
        Xt.fromWorkingColorSpace(Tn.copy(this), e);
        const n = Tn.r,
            i = Tn.g,
            r = Tn.b,
            s = Math.max(n, i, r),
            a = Math.min(n, i, r);
        let o, l;
        const c = (a + s) / 2;
        if (a === s) o = 0, l = 0;
        else {
            const t = s - a;
            switch (l = c <= .5 ? t / (s + a) : t / (2 - s - a), s) {
                case n:
                    o = (i - r) / t + (i < r ? 6 : 0);
                    break;
                case i:
                    o = (r - n) / t + 2;
                    break;
                case r:
                    o = (n - i) / t + 4
            }
            o /= 6
        }
        return t.h = o, t.s = l, t.l = c, t
    }
    getRGB(t, e = Xt.workingColorSpace) {
        return Xt.fromWorkingColorSpace(Tn.copy(this), e), t.r = Tn.r, t.g = Tn.g, t.b = Tn.b, t
    }
    getStyle(t = dt) {
        Xt.fromWorkingColorSpace(Tn.copy(this), t);
        const e = Tn.r,
            n = Tn.g,
            i = Tn.b;
        return t !== dt ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${255*e|0},${255*n|0},${255*i|0})`
    }
    offsetHSL(t, e, n) {
        return this.getHSL(Mn), Mn.h += t, Mn.s += e, Mn.l += n, this.setHSL(Mn.h, Mn.s, Mn.l), this
    }
    add(t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this
    }
    addColors(t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    }
    addScalar(t) {
        return this.r += t, this.g += t, this.b += t, this
    }
    sub(t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    }
    multiply(t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    }
    multiplyScalar(t) {
        return this.r *= t, this.g *= t, this.b *= t, this
    }
    lerp(t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    }
    lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
    }
    lerpHSL(t, e) {
        this.getHSL(Mn), t.getHSL(Sn);
        const n = Et(Mn.h, Sn.h, e),
            i = Et(Mn.s, Sn.s, e),
            r = Et(Mn.l, Sn.l, e);
        return this.setHSL(n, i, r), this
    }
    setFromVector3(t) {
        return this.r = t.x, this.g = t.y, this.b = t.z, this
    }
    applyMatrix3(t) {
        const e = this.r,
            n = this.g,
            i = this.b,
            r = t.elements;
        return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this
    }
    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    }
    fromArray(t, e = 0) {
        return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    }
    fromBufferAttribute(t, e) {
        return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
    }
    toJSON() {
        return this.getHex()
    }*[Symbol.iterator]() {
        yield this.r, yield this.g, yield this.b
    }
}
const Tn = new wn;
wn.NAMES = yn;
class An extends xn {
    constructor(t) {
        super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new wn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = p, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
    }
}
const En = new ie,
    Cn = new Ut;
class Pn {
    constructor(t, e, n = !1) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = n, this.usage = gt, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        !0 === t && this.version++
    }
    setUsage(t) {
        return this.usage = t, this
    }
    copy(t) {
        return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
    }
    copyAt(t, e, n) {
        t *= this.itemSize, n *= e.itemSize;
        for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
        return this
    }
    copyArray(t) {
        return this.array.set(t), this
    }
    applyMatrix3(t) {
        if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) Cn.fromBufferAttribute(this, e), Cn.applyMatrix3(t), this.setXY(e, Cn.x, Cn.y);
        else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) En.fromBufferAttribute(this, e), En.applyMatrix3(t), this.setXYZ(e, En.x, En.y, En.z);
        return this
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.count; e < n; e++) En.fromBufferAttribute(this, e), En.applyMatrix4(t), this.setXYZ(e, En.x, En.y, En.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++) En.fromBufferAttribute(this, e), En.applyNormalMatrix(t), this.setXYZ(e, En.x, En.y, En.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++) En.fromBufferAttribute(this, e), En.transformDirection(t), this.setXYZ(e, En.x, En.y, En.z);
        return this
    }
    set(t, e = 0) {
        return this.array.set(t, e), this
    }
    getX(t) {
        let e = this.array[t * this.itemSize];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    setX(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.array[t * this.itemSize] = e, this
    }
    getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    setY(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.array[t * this.itemSize + 1] = e, this
    }
    getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    setZ(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.array[t * this.itemSize + 2] = e, this
    }
    getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    setW(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.array[t * this.itemSize + 3] = e, this
    }
    setXY(t, e, n) {
        return t *= this.itemSize, this.normalized && (e = Rt(e, this.array), n = Rt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this
    }
    setXYZ(t, e, n, i) {
        return t *= this.itemSize, this.normalized && (e = Rt(e, this.array), n = Rt(n, this.array), i = Rt(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
    }
    setXYZW(t, e, n, i, r) {
        return t *= this.itemSize, this.normalized && (e = Rt(e, this.array), n = Rt(n, this.array), i = Rt(i, this.array), r = Rt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
    }
    onUpload(t) {
        return this.onUploadCallback = t, this
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this)
    }
    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return "" !== this.name && (t.name = this.name), this.usage !== gt && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
    }
    copyColorsArray() {}
    copyVector2sArray() {}
    copyVector3sArray() {}
    copyVector4sArray() {}
}
class Ln extends Pn {
    constructor(t, e, n) {
        super(new Uint16Array(t), e, n)
    }
}
class Dn extends Pn {
    constructor(t, e, n) {
        super(new Uint32Array(t), e, n)
    }
}
class Rn extends Pn {
    constructor(t, e, n) {
        super(new Float32Array(t), e, n)
    }
}
let In = 0;
const Un = new Ie,
    Nn = new sn,
    On = new ie,
    zn = new ae,
    Fn = new ae,
    Bn = new ie;
class Vn extends xt {
    constructor() {
        super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
            value: In++
        }), this.uuid = wt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(t) {
        return Array.isArray(t) ? this.index = new(zt(t) ? Dn : Ln)(t, 1) : this.index = t, this
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    setAttribute(t, e) {
        return this.attributes[t] = e, this
    }
    deleteAttribute(t) {
        return delete this.attributes[t], this
    }
    hasAttribute(t) {
        return void 0 !== this.attributes[t]
    }
    addGroup(t, e, n = 0) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e
    }
    applyMatrix4(t) {
        const e = this.attributes.position;
        void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
        const n = this.attributes.normal;
        if (void 0 !== n) {
            const e = (new Nt).getNormalMatrix(t);
            n.applyNormalMatrix(e), n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    }
    applyQuaternion(t) {
        return Un.makeRotationFromQuaternion(t), this.applyMatrix4(Un), this
    }
    rotateX(t) {
        return Un.makeRotationX(t), this.applyMatrix4(Un), this
    }
    rotateY(t) {
        return Un.makeRotationY(t), this.applyMatrix4(Un), this
    }
    rotateZ(t) {
        return Un.makeRotationZ(t), this.applyMatrix4(Un), this
    }
    translate(t, e, n) {
        return Un.makeTranslation(t, e, n), this.applyMatrix4(Un), this
    }
    scale(t, e, n) {
        return Un.makeScale(t, e, n), this.applyMatrix4(Un), this
    }
    lookAt(t) {
        return Nn.lookAt(t), Nn.updateMatrix(), this.applyMatrix4(Nn.matrix), this
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(On).negate(), this.translate(On.x, On.y, On.z), this
    }
    setFromPoints(t) {
        const e = [];
        for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0)
        }
        return this.setAttribute("position", new Rn(e, 3)), this
    }
    computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new ae);
        const t = this.attributes.position,
            e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) this.boundingBox.set(new ie(-1 / 0, -1 / 0, -1 / 0), new ie(1 / 0, 1 / 0, 1 / 0));
        else {
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t), e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        zn.setFromBufferAttribute(n), this.morphTargetsRelative ? (Bn.addVectors(this.boundingBox.min, zn.min), this.boundingBox.expandByPoint(Bn), Bn.addVectors(this.boundingBox.max, zn.max), this.boundingBox.expandByPoint(Bn)) : (this.boundingBox.expandByPoint(zn.min), this.boundingBox.expandByPoint(zn.max))
                    }
            } else this.boundingBox.makeEmpty();
            isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
        }
    }
    computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new we);
        const t = this.attributes.position,
            e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) this.boundingSphere.set(new ie, 1 / 0);
        else if (t) {
            const n = this.boundingSphere.center;
            if (zn.setFromBufferAttribute(t), e)
                for (let t = 0, r = e.length; t < r; t++) {
                    const n = e[t];
                    Fn.setFromBufferAttribute(n), this.morphTargetsRelative ? (Bn.addVectors(zn.min, Fn.min), zn.expandByPoint(Bn), Bn.addVectors(zn.max, Fn.max), zn.expandByPoint(Bn)) : (zn.expandByPoint(Fn.min), zn.expandByPoint(Fn.max))
                }
            zn.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++) Bn.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(Bn));
            if (e)
                for (let r = 0, s = e.length; r < s; r++) {
                    const s = e[r],
                        a = this.morphTargetsRelative;
                    for (let e = 0, r = s.count; e < r; e++) Bn.fromBufferAttribute(s, e), a && (On.fromBufferAttribute(t, e), Bn.add(On)), i = Math.max(i, n.distanceToSquared(Bn))
                }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius)
        }
    }
    computeTangents() {
        const t = this.index,
            e = this.attributes;
        if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return;
        const n = t.array,
            i = e.position.array,
            r = e.normal.array,
            s = e.uv.array,
            a = i.length / 3;
        !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Pn(new Float32Array(4 * a), 4));
        const o = this.getAttribute("tangent").array,
            l = [],
            c = [];
        for (let T = 0; T < a; T++) l[T] = new ie, c[T] = new ie;
        const h = new ie,
            u = new ie,
            d = new ie,
            p = new Ut,
            f = new Ut,
            m = new Ut,
            g = new ie,
            v = new ie;

        function _(t, e, n) {
            h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), f.fromArray(s, 2 * e), m.fromArray(s, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
            const r = 1 / (f.x * m.y - m.x * f.y);
            isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v))
        }
        let x = this.groups;
        0 === x.length && (x = [{
            start: 0,
            count: n.length
        }]);
        for (let T = 0, A = x.length; T < A; ++T) {
            const t = x[T],
                e = t.start;
            for (let i = e, r = e + t.count; i < r; i += 3) _(n[i + 0], n[i + 1], n[i + 2])
        }
        const y = new ie,
            M = new ie,
            S = new ie,
            b = new ie;

        function w(t) {
            S.fromArray(r, 3 * t), b.copy(S);
            const e = l[t];
            y.copy(e), y.sub(S.multiplyScalar(S.dot(e))).normalize(), M.crossVectors(b, e);
            const n = M.dot(c[t]) < 0 ? -1 : 1;
            o[4 * t] = y.x, o[4 * t + 1] = y.y, o[4 * t + 2] = y.z, o[4 * t + 3] = n
        }
        for (let T = 0, A = x.length; T < A; ++T) {
            const t = x[T],
                e = t.start;
            for (let i = e, r = e + t.count; i < r; i += 3) w(n[i + 0]), w(n[i + 1]), w(n[i + 2])
        }
    }
    computeVertexNormals() {
        const t = this.index,
            e = this.getAttribute("position");
        if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n) n = new Pn(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
            else
                for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new ie,
                r = new ie,
                s = new ie,
                a = new ie,
                o = new ie,
                l = new ie,
                c = new ie,
                h = new ie;
            if (t)
                for (let u = 0, d = t.count; u < d; u += 3) {
                    const d = t.getX(u + 0),
                        p = t.getX(u + 1),
                        f = t.getX(u + 2);
                    i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, f), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), a.add(c), o.add(c), l.add(c), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(f, l.x, l.y, l.z)
                } else
                    for (let t = 0, u = e.count; t < u; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), n.needsUpdate = !0
        }
    }
    merge() {
        return this
    }
    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, n = t.count; e < n; e++) Bn.fromBufferAttribute(t, e), Bn.normalize(), t.setXYZ(e, Bn.x, Bn.y, Bn.z)
    }
    toNonIndexed() {
        function t(t, e) {
            const n = t.array,
                i = t.itemSize,
                r = t.normalized,
                s = new n.constructor(e.length * i);
            let a = 0,
                o = 0;
            for (let l = 0, c = e.length; l < c; l++) {
                a = t.isInterleavedBufferAttribute ? e[l] * t.data.stride + t.offset : e[l] * i;
                for (let t = 0; t < i; t++) s[o++] = n[a++]
            }
            return new Pn(s, i, r)
        }
        if (null === this.index) return this;
        const e = new Vn,
            n = this.index.array,
            i = this.attributes;
        for (const a in i) {
            const r = t(i[a], n);
            e.setAttribute(a, r)
        }
        const r = this.morphAttributes;
        for (const a in r) {
            const i = [],
                s = r[a];
            for (let e = 0, r = s.length; e < r; e++) {
                const r = t(s[e], n);
                i.push(r)
            }
            e.morphAttributes[a] = i
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const s = this.groups;
        for (let a = 0, o = s.length; a < o; a++) {
            const t = s[a];
            e.addGroup(t.start, t.count, t.materialIndex)
        }
        return e
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t
        }
        t.data = {
            attributes: {}
        };
        const e = this.index;
        null !== e && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
        });
        const n = this.attributes;
        for (const o in n) {
            const e = n[o];
            t.data.attributes[o] = e.toJSON(t.data)
        }
        const i = {};
        let r = !1;
        for (const o in this.morphAttributes) {
            const e = this.morphAttributes[o],
                n = [];
            for (let i = 0, r = e.length; i < r; i++) {
                const r = e[i];
                n.push(r.toJSON(t.data))
            }
            n.length > 0 && (i[o] = n, r = !0)
        }
        r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
        const s = this.groups;
        s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
        const a = this.boundingSphere;
        return null !== a && (t.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }), t
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const n = t.index;
        null !== n && this.setIndex(n.clone(e));
        const i = t.attributes;
        for (const l in i) {
            const t = i[l];
            this.setAttribute(l, t.clone(e))
        }
        const r = t.morphAttributes;
        for (const l in r) {
            const t = [],
                n = r[l];
            for (let i = 0, r = n.length; i < r; i++) t.push(n[i].clone(e));
            this.morphAttributes[l] = t
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const s = t.groups;
        for (let l = 0, c = s.length; l < c; l++) {
            const t = s[l];
            this.addGroup(t.start, t.count, t.materialIndex)
        }
        const a = t.boundingBox;
        null !== a && (this.boundingBox = a.clone());
        const o = t.boundingSphere;
        return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const kn = new Ie,
    Gn = new Re,
    Hn = new we,
    Wn = new ie,
    Xn = new ie,
    jn = new ie,
    qn = new ie,
    Yn = new ie,
    Zn = new ie,
    Jn = new Ut,
    Kn = new Ut,
    Qn = new Ut,
    $n = new ie,
    ti = new ie,
    ei = new ie,
    ni = new ie,
    ii = new ie;
class ri extends sn {
    constructor(t = new Vn, e = new An) {
        super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes,
            e = Object.keys(t);
        if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
                }
            }
        }
    }
    getVertexPosition(t, e) {
        const n = this.geometry,
            i = n.attributes.position,
            r = n.morphAttributes.position,
            s = n.morphTargetsRelative;
        e.fromBufferAttribute(i, t);
        const a = this.morphTargetInfluences;
        if (r && a) {
            Zn.set(0, 0, 0);
            for (let n = 0, i = r.length; n < i; n++) {
                const i = a[n],
                    o = r[n];
                0 !== i && (Yn.fromBufferAttribute(o, t), s ? Zn.addScaledVector(Yn, i) : Zn.addScaledVector(Yn.sub(e), i))
            }
            e.add(Zn)
        }
        return this.isSkinnedMesh && this.applyBoneTransform(t, e), e
    }
    raycast(t, e) {
        const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
        if (void 0 === i) return;
        if (null === n.boundingSphere && n.computeBoundingSphere(), Hn.copy(n.boundingSphere), Hn.applyMatrix4(r), Gn.copy(t.ray).recast(t.near), !1 === Hn.containsPoint(Gn.origin)) {
            if (null === Gn.intersectSphere(Hn, Wn)) return;
            if (Gn.origin.distanceToSquared(Wn) > (t.far - t.near) ** 2) return
        }
        if (kn.copy(r).invert(), Gn.copy(t.ray).applyMatrix4(kn), null !== n.boundingBox && !1 === Gn.intersectsBox(n.boundingBox)) return;
        let s;
        const a = n.index,
            o = n.attributes.position,
            l = n.attributes.uv,
            c = n.attributes.uv2,
            h = n.attributes.normal,
            u = n.groups,
            d = n.drawRange;
        if (null !== a)
            if (Array.isArray(i))
                for (let p = 0, f = u.length; p < f; p++) {
                    const n = u[p],
                        r = i[n.materialIndex];
                    for (let i = Math.max(n.start, d.start), o = Math.min(a.count, Math.min(n.start + n.count, d.start + d.count)); i < o; i += 3) {
                        const o = a.getX(i),
                            u = a.getX(i + 1),
                            d = a.getX(i + 2);
                        s = si(this, r, t, Gn, l, c, h, o, u, d), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = n.materialIndex, e.push(s))
                    }
                } else {
                    for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3) {
                        const r = a.getX(n),
                            o = a.getX(n + 1),
                            u = a.getX(n + 2);
                        s = si(this, i, t, Gn, l, c, h, r, o, u), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
                    }
                } else if (void 0 !== o)
                    if (Array.isArray(i))
                        for (let p = 0, f = u.length; p < f; p++) {
                            const n = u[p],
                                r = i[n.materialIndex];
                            for (let i = Math.max(n.start, d.start), a = Math.min(o.count, Math.min(n.start + n.count, d.start + d.count)); i < a; i += 3) {
                                s = si(this, r, t, Gn, l, c, h, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = n.materialIndex, e.push(s))
                            }
                        } else {
                            for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3) {
                                s = si(this, i, t, Gn, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
                            }
                        }
    }
}

function si(t, e, n, i, r, s, l, c, h, u) {
    t.getVertexPosition(c, Xn), t.getVertexPosition(h, jn), t.getVertexPosition(u, qn);
    const d = function (t, e, n, i, r, s, l, c) {
        let h;
        if (h = e.side === o ? i.intersectTriangle(l, s, r, !0, c) : i.intersectTriangle(r, s, l, e.side === a, c), null === h) return null;
        ii.copy(c), ii.applyMatrix4(t.matrixWorld);
        const u = n.ray.origin.distanceTo(ii);
        return u < n.near || u > n.far ? null : {
            distance: u,
            point: ii.clone(),
            object: t
        }
    }(t, e, n, i, Xn, jn, qn, ni);
    if (d) {
        r && (Jn.fromBufferAttribute(r, c), Kn.fromBufferAttribute(r, h), Qn.fromBufferAttribute(r, u), d.uv = vn.getInterpolation(ni, Xn, jn, qn, Jn, Kn, Qn, new Ut)), s && (Jn.fromBufferAttribute(s, c), Kn.fromBufferAttribute(s, h), Qn.fromBufferAttribute(s, u), d.uv2 = vn.getInterpolation(ni, Xn, jn, qn, Jn, Kn, Qn, new Ut)), l && ($n.fromBufferAttribute(l, c), ti.fromBufferAttribute(l, h), ei.fromBufferAttribute(l, u), d.normal = vn.getInterpolation(ni, Xn, jn, qn, $n, ti, ei, new ie), d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1));
        const t = {
            a: c,
            b: h,
            c: u,
            normal: new ie,
            materialIndex: 0
        };
        vn.getNormal(Xn, jn, qn, t.normal), d.face = t
    }
    return d
}
class ai extends Vn {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
        super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: s
        };
        const a = this;
        i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
        const o = [],
            l = [],
            c = [],
            h = [];
        let u = 0,
            d = 0;

        function p(t, e, n, i, r, s, p, f, m, g, v) {
            const _ = s / m,
                x = p / g,
                y = s / 2,
                M = p / 2,
                S = f / 2,
                b = m + 1,
                w = g + 1;
            let T = 0,
                A = 0;
            const E = new ie;
            for (let a = 0; a < w; a++) {
                const s = a * x - M;
                for (let o = 0; o < b; o++) {
                    const u = o * _ - y;
                    E[t] = u * i, E[e] = s * r, E[n] = S, l.push(E.x, E.y, E.z), E[t] = 0, E[e] = 0, E[n] = f > 0 ? 1 : -1, c.push(E.x, E.y, E.z), h.push(o / m), h.push(1 - a / g), T += 1
                }
            }
            for (let a = 0; a < g; a++)
                for (let t = 0; t < m; t++) {
                    const e = u + t + b * a,
                        n = u + t + b * (a + 1),
                        i = u + (t + 1) + b * (a + 1),
                        r = u + (t + 1) + b * a;
                    o.push(e, n, r), o.push(n, i, r), A += 6
                }
            a.addGroup(d, A, v), d += A, u += T
        }
        p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Rn(l, 3)), this.setAttribute("normal", new Rn(c, 3)), this.setAttribute("uv", new Rn(h, 2))
    }
    copy(t) {
        return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
    }
    static fromJSON(t) {
        return new ai(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
    }
}

function oi(t) {
    const e = {};
    for (const n in t) {
        e[n] = {};
        for (const i in t[n]) {
            const r = t[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? e[n][i] = null : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
        }
    }
    return e
}

function li(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const i = oi(t[n]);
        for (const t in i) e[t] = i[t]
    }
    return e
}

function ci(t) {
    return null === t.getRenderTarget() && t.outputEncoding === ht ? dt : pt
}
const hi = {
    clone: oi,
    merge: li
};
class ui extends xn {
    constructor(t) {
        super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = oi(t.uniforms), this.uniformsGroups = function (t) {
            const e = [];
            for (let n = 0; n < t.length; n++) e.push(t[n].clone());
            return e
        }(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        e.glslVersion = this.glslVersion, e.uniforms = {};
        for (const i in this.uniforms) {
            const n = this.uniforms[i].value;
            n && n.isTexture ? e.uniforms[i] = {
                type: "t",
                value: n.toJSON(t).uuid
            } : n && n.isColor ? e.uniforms[i] = {
                type: "c",
                value: n.getHex()
            } : n && n.isVector2 ? e.uniforms[i] = {
                type: "v2",
                value: n.toArray()
            } : n && n.isVector3 ? e.uniforms[i] = {
                type: "v3",
                value: n.toArray()
            } : n && n.isVector4 ? e.uniforms[i] = {
                type: "v4",
                value: n.toArray()
            } : n && n.isMatrix3 ? e.uniforms[i] = {
                type: "m3",
                value: n.toArray()
            } : n && n.isMatrix4 ? e.uniforms[i] = {
                type: "m4",
                value: n.toArray()
            } : e.uniforms[i] = {
                value: n
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
        const n = {};
        for (const i in this.extensions) !0 === this.extensions[i] && (n[i] = !0);
        return Object.keys(n).length > 0 && (e.extensions = n), e
    }
}
class di extends sn {
    constructor() {
        super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ie, this.projectionMatrix = new Ie, this.projectionMatrixInverse = new Ie
    }
    copy(t, e) {
        return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(-e[8], -e[9], -e[10]).normalize()
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(t, e) {
        super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class pi extends di {
    constructor(t = 50, e = 1, n = .1, i = 2e3) {
        super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    }
    setFocalLength(t) {
        const e = .5 * this.getFilmHeight() / t;
        this.fov = 2 * bt * Math.atan(e), this.updateProjectionMatrix()
    }
    getFocalLength() {
        const t = Math.tan(.5 * St * this.fov);
        return .5 * this.getFilmHeight() / t
    }
    getEffectiveFOV() {
        return 2 * bt * Math.atan(Math.tan(.5 * St * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(t, e, n, i, r, s) {
        this.aspect = t / e, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = this.near;
        let e = t * Math.tan(.5 * St * this.fov) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            r = -.5 * i;
        const s = this.view;
        if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth,
                a = s.fullHeight;
            r += s.offsetX * i / t, e -= s.offsetY * n / a, i *= s.width / t, n *= s.height / a
        }
        const a = this.filmOffset;
        0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
}
const fi = -90;
class mi extends sn {
    constructor(t, e, n) {
        super(), this.type = "CubeCamera", this.renderTarget = n;
        const i = new pi(fi, 1, t, e);
        i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
        const r = new pi(fi, 1, t, e);
        r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
        const s = new pi(fi, 1, t, e);
        s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(0, 1, 0), this.add(s);
        const a = new pi(fi, 1, t, e);
        a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
        const o = new pi(fi, 1, t, e);
        o.layers = this.layers, o.up.set(0, 1, 0), o.lookAt(0, 0, 1), this.add(o);
        const l = new pi(fi, 1, t, e);
        l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l)
    }
    update(t, e) {
        null === this.parent && this.updateMatrixWorld();
        const n = this.renderTarget,
            [i, r, s, a, o, l] = this.children,
            c = t.getRenderTarget(),
            h = t.toneMapping,
            u = t.xr.enabled;
        t.toneMapping = g, t.xr.enabled = !1;
        const d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = d, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = h, t.xr.enabled = u, n.texture.needsPMREMUpdate = !0
    }
}
class gi extends Kt {
    constructor(t, e, n, i, r, s, a, o, l, c) {
        super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : b, n, i, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(t) {
        this.image = t
    }
}
class vi extends $t {
    constructor(t = 1, e = {}) {
        super(t, t, e), this.isWebGLCubeRenderTarget = !0;
        const n = {
                width: t,
                height: t,
                depth: 1
            },
            i = [n, n, n, n, n, n];
        this.texture = new gi(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : R
    }
    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
        const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
            },
            i = new ai(5, 5, 5),
            r = new ui({
                name: "CubemapFromEquirect",
                uniforms: oi(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: o,
                blending: c
            });
        r.uniforms.tEquirect.value = e;
        const s = new ri(i, r),
            a = e.minFilter;
        e.minFilter === U && (e.minFilter = R);
        return new mi(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this
    }
    clear(t, e, n, i) {
        const r = t.getRenderTarget();
        for (let s = 0; s < 6; s++) t.setRenderTarget(this, s), t.clear(e, n, i);
        t.setRenderTarget(r)
    }
}
const _i = new ie,
    xi = new ie,
    yi = new Nt;
class Mi {
    constructor(t = new ie(1, 0, 0), e = 0) {
        this.isPlane = !0, this.normal = t, this.constant = e
    }
    set(t, e) {
        return this.normal.copy(t), this.constant = e, this
    }
    setComponents(t, e, n, i) {
        return this.normal.set(t, e, n), this.constant = i, this
    }
    setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    }
    setFromCoplanarPoints(t, e, n) {
        const i = _i.subVectors(n, e).cross(xi.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, t), this
    }
    copy(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this
    }
    normalize() {
        const t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this
    }
    negate() {
        return this.constant *= -1, this.normal.negate(), this
    }
    distanceToPoint(t) {
        return this.normal.dot(t) + this.constant
    }
    distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius
    }
    projectPoint(t, e) {
        return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
    }
    intersectLine(t, e) {
        const n = t.delta(_i),
            i = this.normal.dot(n);
        if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
        const r = -(t.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r)
    }
    intersectsLine(t) {
        const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
        return e < 0 && n > 0 || n < 0 && e > 0
    }
    intersectsBox(t) {
        return t.intersectsPlane(this)
    }
    intersectsSphere(t) {
        return t.intersectsPlane(this)
    }
    coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(t, e) {
        const n = e || yi.getNormalMatrix(t),
            i = this.coplanarPoint(_i).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r), this
    }
    translate(t) {
        return this.constant -= t.dot(this.normal), this
    }
    equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const Si = new we,
    bi = new ie;
class wi {
    constructor(t = new Mi, e = new Mi, n = new Mi, i = new Mi, r = new Mi, s = new Mi) {
        this.planes = [t, e, n, i, r, s]
    }
    set(t, e, n, i, r, s) {
        const a = this.planes;
        return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this
    }
    copy(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
        return this
    }
    setFromProjectionMatrix(t) {
        const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            h = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            f = n[11],
            m = n[12],
            g = n[13],
            v = n[14],
            _ = n[15];
        return e[0].setComponents(a - i, h - o, f - u, _ - m).normalize(), e[1].setComponents(a + i, h + o, f + u, _ + m).normalize(), e[2].setComponents(a + r, h + l, f + d, _ + g).normalize(), e[3].setComponents(a - r, h - l, f - d, _ - g).normalize(), e[4].setComponents(a - s, h - c, f - p, _ - v).normalize(), e[5].setComponents(a + s, h + c, f + p, _ + v).normalize(), this
    }
    intersectsObject(t) {
        if (void 0 !== t.boundingSphere) null === t.boundingSphere && t.computeBoundingSphere(), Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
        else {
            const e = t.geometry;
            null === e.boundingSphere && e.computeBoundingSphere(), Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
        }
        return this.intersectsSphere(Si)
    }
    intersectsSprite(t) {
        return Si.center.set(0, 0, 0), Si.radius = .7071067811865476, Si.applyMatrix4(t.matrixWorld), this.intersectsSphere(Si)
    }
    intersectsSphere(t) {
        const e = this.planes,
            n = t.center,
            i = -t.radius;
        for (let r = 0; r < 6; r++) {
            if (e[r].distanceToPoint(n) < i) return !1
        }
        return !0
    }
    intersectsBox(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (bi.x = i.normal.x > 0 ? t.max.x : t.min.x, bi.y = i.normal.y > 0 ? t.max.y : t.min.y, bi.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(bi) < 0) return !1
        }
        return !0
    }
    containsPoint(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
        return !0
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}

function Ti() {
    let t = null,
        e = !1,
        n = null,
        i = null;

    function r(e, s) {
        n(e, s), i = t.requestAnimationFrame(r)
    }
    return {
        start: function () {
            !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
        },
        stop: function () {
            t.cancelAnimationFrame(i), e = !1
        },
        setAnimationLoop: function (t) {
            n = t
        },
        setContext: function (e) {
            t = e
        }
    }
}

function Ai(t, e) {
    const n = e.isWebGL2,
        i = new WeakMap;
    return {
        get: function (t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
        },
        remove: function (e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e))
        },
        update: function (e, r) {
            if (e.isGLBufferAttribute) {
                const t = i.get(e);
                return void((!t || t.version < e.version) && i.set(e, {
                    buffer: e.buffer,
                    type: e.type,
                    bytesPerElement: e.elementSize,
                    version: e.version
                }))
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const s = i.get(e);
            void 0 === s ? i.set(e, function (e, i) {
                const r = e.array,
                    s = e.usage,
                    a = t.createBuffer();
                let o;
                if (t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
                else if (r instanceof Uint16Array)
                    if (e.isFloat16BufferAttribute) {
                        if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                        o = 5131
                    } else o = 5123;
                else if (r instanceof Int16Array) o = 5122;
                else if (r instanceof Uint32Array) o = 5125;
                else if (r instanceof Int32Array) o = 5124;
                else if (r instanceof Int8Array) o = 5120;
                else if (r instanceof Uint8Array) o = 5121;
                else {
                    if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                    o = 5121
                }
                return {
                    buffer: a,
                    type: o,
                    bytesPerElement: r.BYTES_PER_ELEMENT,
                    version: e.version
                }
            }(e, r)) : s.version < e.version && (! function (e, i, r) {
                const s = i.array,
                    a = i.updateRange;
                t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1), i.onUploadCallback()
            }(s.buffer, e, r), s.version = e.version)
        }
    }
}
class Ei extends Vn {
    constructor(t = 1, e = 1, n = 1, i = 1) {
        super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        };
        const r = t / 2,
            s = e / 2,
            a = Math.floor(n),
            o = Math.floor(i),
            l = a + 1,
            c = o + 1,
            h = t / a,
            u = e / o,
            d = [],
            p = [],
            f = [],
            m = [];
        for (let g = 0; g < c; g++) {
            const t = g * u - s;
            for (let e = 0; e < l; e++) {
                const n = e * h - r;
                p.push(n, -t, 0), f.push(0, 0, 1), m.push(e / a), m.push(1 - g / o)
            }
        }
        for (let g = 0; g < o; g++)
            for (let t = 0; t < a; t++) {
                const e = t + l * g,
                    n = t + l * (g + 1),
                    i = t + 1 + l * (g + 1),
                    r = t + 1 + l * g;
                d.push(e, n, r), d.push(n, i, r)
            }
        this.setIndex(d), this.setAttribute("position", new Rn(p, 3)), this.setAttribute("normal", new Rn(f, 3)), this.setAttribute("uv", new Rn(m, 2))
    }
    copy(t) {
        return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
    }
    static fromJSON(t) {
        return new Ei(t.width, t.height, t.widthSegments, t.heightSegments)
    }
}
const Ci = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
        iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
        lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_NORMALMAP_TANGENTSPACE\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
        iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
        output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\t\n\t\tvec2 lodFudge = pow( 1.95, lod ) / fullSize;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec2 fullSize = vec2( textureSize( sampler, 0 ) );\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
        uv_pars_fragment: "#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_UV2\n\tattribute vec2 uv2;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
        uv_vertex: "#ifdef USE_UV\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
    },
    Pi = {
        common: {
            diffuse: {
                value: new wn(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new Nt
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new Nt
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            },
            specularMapTransform: {
                value: new Nt
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            },
            aoMapTransform: {
                value: new Nt
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            },
            lightMapTransform: {
                value: new Nt
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpMapTransform: {
                value: new Nt
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalMapTransform: {
                value: new Nt
            },
            normalScale: {
                value: new Ut(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementMapTransform: {
                value: new Nt
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            },
            emissiveMapTransform: {
                value: new Nt
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            },
            metalnessMapTransform: {
                value: new Nt
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            },
            roughnessMapTransform: {
                value: new Nt
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new wn(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotLightMap: {
                value: []
            },
            spotShadowMap: {
                value: []
            },
            spotLightMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new wn(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Nt
            }
        },
        sprite: {
            diffuse: {
                value: new wn(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new Ut(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new Nt
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        }
    },
    Li = {
        basic: {
            uniforms: li([Pi.common, Pi.specularmap, Pi.envmap, Pi.aomap, Pi.lightmap, Pi.fog]),
            vertexShader: Ci.meshbasic_vert,
            fragmentShader: Ci.meshbasic_frag
        },
        lambert: {
            uniforms: li([Pi.common, Pi.specularmap, Pi.envmap, Pi.aomap, Pi.lightmap, Pi.emissivemap, Pi.bumpmap, Pi.normalmap, Pi.displacementmap, Pi.fog, Pi.lights, {
                emissive: {
                    value: new wn(0)
                }
            }]),
            vertexShader: Ci.meshlambert_vert,
            fragmentShader: Ci.meshlambert_frag
        },
        phong: {
            uniforms: li([Pi.common, Pi.specularmap, Pi.envmap, Pi.aomap, Pi.lightmap, Pi.emissivemap, Pi.bumpmap, Pi.normalmap, Pi.displacementmap, Pi.fog, Pi.lights, {
                emissive: {
                    value: new wn(0)
                },
                specular: {
                    value: new wn(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Ci.meshphong_vert,
            fragmentShader: Ci.meshphong_frag
        },
        standard: {
            uniforms: li([Pi.common, Pi.envmap, Pi.aomap, Pi.lightmap, Pi.emissivemap, Pi.bumpmap, Pi.normalmap, Pi.displacementmap, Pi.roughnessmap, Pi.metalnessmap, Pi.fog, Pi.lights, {
                emissive: {
                    value: new wn(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Ci.meshphysical_vert,
            fragmentShader: Ci.meshphysical_frag
        },
        toon: {
            uniforms: li([Pi.common, Pi.aomap, Pi.lightmap, Pi.emissivemap, Pi.bumpmap, Pi.normalmap, Pi.displacementmap, Pi.gradientmap, Pi.fog, Pi.lights, {
                emissive: {
                    value: new wn(0)
                }
            }]),
            vertexShader: Ci.meshtoon_vert,
            fragmentShader: Ci.meshtoon_frag
        },
        matcap: {
            uniforms: li([Pi.common, Pi.bumpmap, Pi.normalmap, Pi.displacementmap, Pi.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Ci.meshmatcap_vert,
            fragmentShader: Ci.meshmatcap_frag
        },
        points: {
            uniforms: li([Pi.points, Pi.fog]),
            vertexShader: Ci.points_vert,
            fragmentShader: Ci.points_frag
        },
        dashed: {
            uniforms: li([Pi.common, Pi.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Ci.linedashed_vert,
            fragmentShader: Ci.linedashed_frag
        },
        depth: {
            uniforms: li([Pi.common, Pi.displacementmap]),
            vertexShader: Ci.depth_vert,
            fragmentShader: Ci.depth_frag
        },
        normal: {
            uniforms: li([Pi.common, Pi.bumpmap, Pi.normalmap, Pi.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ci.meshnormal_vert,
            fragmentShader: Ci.meshnormal_frag
        },
        sprite: {
            uniforms: li([Pi.sprite, Pi.fog]),
            vertexShader: Ci.sprite_vert,
            fragmentShader: Ci.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Nt
                },
                t2D: {
                    value: null
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Ci.background_vert,
            fragmentShader: Ci.background_frag
        },
        backgroundCube: {
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                backgroundBlurriness: {
                    value: 0
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Ci.backgroundCube_vert,
            fragmentShader: Ci.backgroundCube_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Ci.cube_vert,
            fragmentShader: Ci.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Ci.equirect_vert,
            fragmentShader: Ci.equirect_frag
        },
        distanceRGBA: {
            uniforms: li([Pi.common, Pi.displacementmap, {
                referencePosition: {
                    value: new ie
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Ci.distanceRGBA_vert,
            fragmentShader: Ci.distanceRGBA_frag
        },
        shadow: {
            uniforms: li([Pi.lights, Pi.fog, {
                color: {
                    value: new wn(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ci.shadow_vert,
            fragmentShader: Ci.shadow_frag
        }
    };
Li.physical = {
    uniforms: li([Li.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new Nt
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new Nt
        },
        clearcoatNormalScale: {
            value: new Ut(1, 1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new Nt
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new Nt
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new Nt
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new wn(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new Nt
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new Nt
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new Nt
        },
        transmissionSamplerSize: {
            value: new Ut
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new Nt
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new wn(0)
        },
        specularColor: {
            value: new wn(1, 1, 1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new Nt
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new Nt
        }
    }]),
    vertexShader: Ci.meshphysical_vert,
    fragmentShader: Ci.meshphysical_frag
};
const Di = {
    r: 0,
    b: 0,
    g: 0
};

function Ri(t, e, n, i, r, s, l) {
    const c = new wn(0);
    let h, u, d = !0 === s ? 0 : 1,
        p = null,
        f = 0,
        m = null;

    function g(e, n) {
        e.getRGB(Di, ci(t)), i.buffers.color.setClear(Di.r, Di.g, Di.b, n, l)
    }
    return {
        getClearColor: function () {
            return c
        },
        setClearColor: function (t, e = 1) {
            c.set(t), d = e, g(c, d)
        },
        getClearAlpha: function () {
            return d
        },
        setClearAlpha: function (t) {
            d = t, g(c, d)
        },
        render: function (i, s) {
            let l = !1,
                v = !0 === s.isScene ? s.background : null;
            if (v && v.isTexture) {
                v = (s.backgroundBlurriness > 0 ? n : e).get(v)
            }
            const _ = t.xr,
                x = _.getSession && _.getSession();
            x && "additive" === x.environmentBlendMode && (v = null), null === v ? g(c, d) : v && v.isColor && (g(v, 1), l = !0), (t.autoClear || l) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), v && (v.isCubeTexture || v.mapping === T) ? (void 0 === u && (u = new ri(new ai(1, 1, 1), new ui({
                name: "BackgroundCubeMaterial",
                uniforms: oi(Li.backgroundCube.uniforms),
                vertexShader: Li.backgroundCube.vertexShader,
                fragmentShader: Li.backgroundCube.fragmentShader,
                side: o,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function (t, e, n) {
                this.matrixWorld.copyPosition(n.matrixWorld)
            }, Object.defineProperty(u.material, "envMap", {
                get: function () {
                    return this.uniforms.envMap.value
                }
            }), r.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && !1 === v.isRenderTargetTexture ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = s.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = s.backgroundIntensity, u.material.toneMapped = v.encoding !== ht, p === v && f === v.version && m === t.toneMapping || (u.material.needsUpdate = !0, p = v, f = v.version, m = t.toneMapping), u.layers.enableAll(), i.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (void 0 === h && (h = new ri(new Ei(2, 2), new ui({
                name: "BackgroundMaterial",
                uniforms: oi(Li.background.uniforms),
                vertexShader: Li.background.vertexShader,
                fragmentShader: Li.background.fragmentShader,
                side: a,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), h.geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
                get: function () {
                    return this.uniforms.t2D.value
                }
            }), r.update(h)), h.material.uniforms.t2D.value = v, h.material.uniforms.backgroundIntensity.value = s.backgroundIntensity, h.material.toneMapped = v.encoding !== ht, !0 === v.matrixAutoUpdate && v.updateMatrix(), h.material.uniforms.uvTransform.value.copy(v.matrix), p === v && f === v.version && m === t.toneMapping || (h.material.needsUpdate = !0, p = v, f = v.version, m = t.toneMapping), h.layers.enableAll(), i.unshift(h, h.geometry, h.material, 0, 0, null))
        }
    }
}

function Ii(t, e, n, i) {
    const r = t.getParameter(34921),
        s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        a = i.isWebGL2 || null !== s,
        o = {},
        l = p(null);
    let c = l,
        h = !1;

    function u(e) {
        return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
    }

    function d(e) {
        return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
    }

    function p(t) {
        const e = [],
            n = [],
            i = [];
        for (let s = 0; s < r; s++) e[s] = 0, n[s] = 0, i[s] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null
        }
    }

    function f() {
        const t = c.newAttributes;
        for (let e = 0, n = t.length; e < n; e++) t[e] = 0
    }

    function m(t) {
        g(t, 0)
    }

    function g(n, r) {
        const s = c.newAttributes,
            a = c.enabledAttributes,
            o = c.attributeDivisors;
        if (s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) {
            (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r
        }
    }

    function v() {
        const e = c.newAttributes,
            n = c.enabledAttributes;
        for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
    }

    function _(e, n, r, s, a, o) {
        !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o)
    }

    function x() {
        y(), h = !0, c !== l && (c = l, u(c.object))
    }

    function y() {
        l.geometry = null, l.program = null, l.wireframe = !1
    }
    return {
        setup: function (r, l, d, x, y) {
            let M = !1;
            if (a) {
                const e = function (e, n, r) {
                    const a = !0 === r.wireframe;
                    let l = o[e.id];
                    void 0 === l && (l = {}, o[e.id] = l);
                    let c = l[n.id];
                    void 0 === c && (c = {}, l[n.id] = c);
                    let h = c[a];
                    void 0 === h && (h = p(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
                    return h
                }(x, d, l);
                c !== e && (c = e, u(c.object)), M = function (t, e, n, i) {
                    const r = c.attributes,
                        s = e.attributes;
                    let a = 0;
                    const o = n.getAttributes();
                    for (const l in o) {
                        if (o[l].location >= 0) {
                            const e = r[l];
                            let n = s[l];
                            if (void 0 === n && ("instanceMatrix" === l && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === l && t.instanceColor && (n = t.instanceColor)), void 0 === e) return !0;
                            if (e.attribute !== n) return !0;
                            if (n && e.data !== n.data) return !0;
                            a++
                        }
                    }
                    return c.attributesNum !== a || c.index !== i
                }(r, x, d, y), M && function (t, e, n, i) {
                    const r = {},
                        s = e.attributes;
                    let a = 0;
                    const o = n.getAttributes();
                    for (const l in o) {
                        if (o[l].location >= 0) {
                            let e = s[l];
                            void 0 === e && ("instanceMatrix" === l && t.instanceMatrix && (e = t.instanceMatrix), "instanceColor" === l && t.instanceColor && (e = t.instanceColor));
                            const n = {};
                            n.attribute = e, e && e.data && (n.data = e.data), r[l] = n, a++
                        }
                    }
                    c.attributes = r, c.attributesNum = a, c.index = i
                }(r, x, d, y)
            } else {
                const t = !0 === l.wireframe;
                c.geometry === x.id && c.program === d.id && c.wireframe === t || (c.geometry = x.id, c.program = d.id, c.wireframe = t, M = !0)
            }
            null !== y && n.update(y, 34963), (M || h) && (h = !1, function (r, s, a, o) {
                if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                f();
                const l = o.attributes,
                    c = a.getAttributes(),
                    h = s.defaultAttributeValues;
                for (const e in c) {
                    const i = c[e];
                    if (i.location >= 0) {
                        let s = l[e];
                        if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                            const e = s.normalized,
                                a = s.itemSize,
                                l = n.get(s);
                            if (void 0 === l) continue;
                            const c = l.buffer,
                                h = l.type,
                                u = l.bytesPerElement;
                            if (s.isInterleavedBufferAttribute) {
                                const n = s.data,
                                    l = n.stride,
                                    d = s.offset;
                                if (n.isInstancedInterleavedBuffer) {
                                    for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);
                                    !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                                } else
                                    for (let t = 0; t < i.locationSize; t++) m(i.location + t);
                                t.bindBuffer(34962, c);
                                for (let t = 0; t < i.locationSize; t++) _(i.location + t, a / i.locationSize, h, e, l * u, (d + a / i.locationSize * t) * u)
                            } else {
                                if (s.isInstancedBufferAttribute) {
                                    for (let t = 0; t < i.locationSize; t++) g(i.location + t, s.meshPerAttribute);
                                    !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)
                                } else
                                    for (let t = 0; t < i.locationSize; t++) m(i.location + t);
                                t.bindBuffer(34962, c);
                                for (let t = 0; t < i.locationSize; t++) _(i.location + t, a / i.locationSize, h, e, a * u, a / i.locationSize * t * u)
                            }
                        } else if (void 0 !== h) {
                            const n = h[e];
                            if (void 0 !== n) switch (n.length) {
                                case 2:
                                    t.vertexAttrib2fv(i.location, n);
                                    break;
                                case 3:
                                    t.vertexAttrib3fv(i.location, n);
                                    break;
                                case 4:
                                    t.vertexAttrib4fv(i.location, n);
                                    break;
                                default:
                                    t.vertexAttrib1fv(i.location, n)
                            }
                        }
                    }
                }
                v()
            }(r, l, d, x), null !== y && t.bindBuffer(34963, n.get(y).buffer))
        },
        reset: x,
        resetDefaultState: y,
        dispose: function () {
            x();
            for (const t in o) {
                const e = o[t];
                for (const t in e) {
                    const n = e[t];
                    for (const t in n) d(n[t].object), delete n[t];
                    delete e[t]
                }
                delete o[t]
            }
        },
        releaseStatesOfGeometry: function (t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const n in e) {
                const t = e[n];
                for (const e in t) d(t[e].object), delete t[e];
                delete e[n]
            }
            delete o[t.id]
        },
        releaseStatesOfProgram: function (t) {
            for (const e in o) {
                const n = o[e];
                if (void 0 === n[t.id]) continue;
                const i = n[t.id];
                for (const t in i) d(i[t].object), delete i[t];
                delete n[t.id]
            }
        },
        initAttributes: f,
        enableAttribute: m,
        disableUnusedAttributes: v
    }
}

function Ui(t, e, n, i) {
    const r = i.isWebGL2;
    let s;
    this.setMode = function (t) {
        s = t
    }, this.render = function (e, i) {
        t.drawArrays(s, e, i), n.update(i, s, 1)
    }, this.renderInstances = function (i, a, o) {
        if (0 === o) return;
        let l, c;
        if (r) l = t, c = "drawArraysInstanced";
        else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return;
        l[c](s, i, a, o), n.update(a, s, o)
    }
}

function Ni(t, e, n) {
    let i;

    function r(e) {
        if ("highp" === e) {
            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump"
        }
        return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    const s = "undefined" != typeof WebGL2RenderingContext && "WebGL2RenderingContext" === t.constructor.name;
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a && (a = o);
    const l = s || e.has("WEBGL_draw_buffers"),
        c = !0 === n.logarithmicDepthBuffer,
        h = t.getParameter(34930),
        u = t.getParameter(35660),
        d = t.getParameter(3379),
        p = t.getParameter(34076),
        f = t.getParameter(34921),
        m = t.getParameter(36347),
        g = t.getParameter(36348),
        v = t.getParameter(36349),
        _ = u > 0,
        x = s || e.has("OES_texture_float");
    return {
        isWebGL2: s,
        drawBuffers: l,
        getMaxAnisotropy: function () {
            if (void 0 !== i) return i;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                const n = e.get("EXT_texture_filter_anisotropic");
                i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else i = 0;
            return i
        },
        getMaxPrecision: r,
        precision: a,
        logarithmicDepthBuffer: c,
        maxTextures: h,
        maxVertexTextures: u,
        maxTextureSize: d,
        maxCubemapSize: p,
        maxAttributes: f,
        maxVertexUniforms: m,
        maxVaryings: g,
        maxFragmentUniforms: v,
        vertexTextures: _,
        floatFragmentTextures: x,
        floatVertexTextures: _ && x,
        maxSamples: s ? t.getParameter(36183) : 0
    }
}

function Oi(t) {
    const e = this;
    let n = null,
        i = 0,
        r = !1,
        s = !1;
    const a = new Mi,
        o = new Nt,
        l = {
            value: null,
            needsUpdate: !1
        };

    function c(t, n, i, r) {
        const s = null !== t ? t.length : 0;
        let c = null;
        if (0 !== s) {
            if (c = l.value, !0 !== r || null === c) {
                const e = i + 4 * s,
                    r = n.matrixWorldInverse;
                o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                for (let n = 0, l = i; n !== s; ++n, l += 4) a.copy(t[n]).applyMatrix4(r, o), a.normal.toArray(c, l), c[l + 3] = a.constant
            }
            l.value = c, l.needsUpdate = !0
        }
        return e.numPlanes = s, e.numIntersection = 0, c
    }
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e) {
        const n = 0 !== t.length || e || 0 !== i || r;
        return r = e, i = t.length, n
    }, this.beginShadows = function () {
        s = !0, c(null)
    }, this.endShadows = function () {
        s = !1
    }, this.setGlobalState = function (t, e) {
        n = c(t, e, 0)
    }, this.setState = function (a, o, h) {
        const u = a.clippingPlanes,
            d = a.clipIntersection,
            p = a.clipShadows,
            f = t.get(a);
        if (!r || null === u || 0 === u.length || s && !p) s ? c(null) : function () {
            l.value !== n && (l.value = n, l.needsUpdate = i > 0);
            e.numPlanes = i, e.numIntersection = 0
        }();
        else {
            const t = s ? 0 : i,
                e = 4 * t;
            let r = f.clippingState || null;
            l.value = r, r = c(u, o, e, h);
            for (let i = 0; i !== e; ++i) r[i] = n[i];
            f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
        }
    }
}

function zi(t) {
    let e = new WeakMap;

    function n(t, e) {
        return 303 === e ? t.mapping = b : 304 === e && (t.mapping = w), t
    }

    function i(t) {
        const n = t.target;
        n.removeEventListener("dispose", i);
        const r = e.get(n);
        void 0 !== r && (e.delete(n), r.dispose())
    }
    return {
        get: function (r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                const s = r.mapping;
                if (303 === s || 304 === s) {
                    if (e.has(r)) {
                        return n(e.get(r).texture, r.mapping)
                    } {
                        const s = r.image;
                        if (s && s.height > 0) {
                            const a = new vi(s.height / 2);
                            return a.fromEquirectangularTexture(t, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping)
                        }
                        return null
                    }
                }
            }
            return r
        },
        dispose: function () {
            e = new WeakMap
        }
    }
}
class Fi extends di {
    constructor(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3) {
        super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
    }
    setViewOffset(t, e, n, i, r, s) {
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
        let r = n - t,
            s = n + t,
            a = i + e,
            o = i - e;
        if (null !== this.view && this.view.enabled) {
            const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
                e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
    }
}
const Bi = 4,
    Vi = [.125, .215, .35, .446, .526, .582],
    ki = 20,
    Gi = new Fi,
    Hi = new wn;
let Wi = null;
const Xi = (1 + Math.sqrt(5)) / 2,
    ji = 1 / Xi,
    qi = [new ie(1, 1, 1), new ie(-1, 1, 1), new ie(1, 1, -1), new ie(-1, 1, -1), new ie(0, Xi, ji), new ie(0, Xi, -ji), new ie(ji, 0, Xi), new ie(-ji, 0, Xi), new ie(Xi, ji, 0), new ie(-Xi, ji, 0)];
class Yi {
    constructor(t) {
        this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
    }
    fromScene(t, e = 0, n = .1, i = 100) {
        Wi = this._renderer.getRenderTarget(), this._setSize(256);
        const r = this._allocateTargets();
        return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
    }
    fromEquirectangular(t, e = null) {
        return this._fromTexture(t, e)
    }
    fromCubemap(t, e = null) {
        return this._fromTexture(t, e)
    }
    compileCubemapShader() {
        null === this._cubemapMaterial && (this._cubemapMaterial = Qi(), this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        null === this._equirectMaterial && (this._equirectMaterial = Ki(), this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
    }
    _setSize(t) {
        this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
        for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
    }
    _cleanup(t) {
        this._renderer.setRenderTarget(Wi), t.scissorTest = !1, Ji(t, 0, 0, t.width, t.height)
    }
    _fromTexture(t, e) {
        t.mapping === b || t.mapping === w ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Wi = this._renderer.getRenderTarget();
        const n = e || this._allocateTargets();
        return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
    }
    _allocateTargets() {
        const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize,
            n = {
                magFilter: R,
                minFilter: R,
                generateMipmaps: !1,
                type: B,
                format: k,
                encoding: ct,
                depthBuffer: !1
            },
            i = Zi(t, e, n);
        if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Zi(t, e, n);
            const {
                _lodMax: i
            } = this;
            ({
                sizeLods: this._sizeLods,
                lodPlanes: this._lodPlanes,
                sigmas: this._sigmas
            } = function (t) {
                const e = [],
                    n = [],
                    i = [];
                let r = t;
                const s = t - Bi + 1 + Vi.length;
                for (let a = 0; a < s; a++) {
                    const s = Math.pow(2, r);
                    n.push(s);
                    let o = 1 / s;
                    a > t - Bi ? o = Vi[a - t + Bi - 1] : 0 === a && (o = 0), i.push(o);
                    const l = 1 / (s - 2),
                        c = -l,
                        h = 1 + l,
                        u = [c, c, h, c, h, h, c, c, h, h, c, h],
                        d = 6,
                        p = 6,
                        f = 3,
                        m = 2,
                        g = 1,
                        v = new Float32Array(f * p * d),
                        _ = new Float32Array(m * p * d),
                        x = new Float32Array(g * p * d);
                    for (let t = 0; t < d; t++) {
                        const e = t % 3 * 2 / 3 - 1,
                            n = t > 2 ? 0 : -1,
                            i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                        v.set(i, f * p * t), _.set(u, m * p * t);
                        const r = [t, t, t, t, t, t];
                        x.set(r, g * p * t)
                    }
                    const y = new Vn;
                    y.setAttribute("position", new Pn(v, f)), y.setAttribute("uv", new Pn(_, m)), y.setAttribute("faceIndex", new Pn(x, g)), e.push(y), r > Bi && r--
                }
                return {
                    lodPlanes: e,
                    sizeLods: n,
                    sigmas: i
                }
            }(i)), this._blurMaterial = function (t, e, n) {
                const i = new Float32Array(ki),
                    r = new ie(0, 1, 0),
                    s = new ui({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: ki,
                            CUBEUV_TEXEL_WIDTH: 1 / e,
                            CUBEUV_TEXEL_HEIGHT: 1 / n,
                            CUBEUV_MAX_MIP: `${t}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: i
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: $i(),
                        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                        blending: c,
                        depthTest: !1,
                        depthWrite: !1
                    });
                return s
            }(i, t, e)
        }
        return i
    }
    _compileMaterial(t) {
        const e = new ri(this._lodPlanes[0], t);
        this._renderer.compile(e, Gi)
    }
    _sceneToCubeUV(t, e, n, i) {
        const r = new pi(90, 1, e, n),
            s = [1, -1, 1, 1, 1, 1],
            a = [1, 1, 1, -1, -1, -1],
            l = this._renderer,
            c = l.autoClear,
            h = l.toneMapping;
        l.getClearColor(Hi), l.toneMapping = g, l.autoClear = !1;
        const u = new An({
                name: "PMREM.Background",
                side: o,
                depthWrite: !1,
                depthTest: !1
            }),
            d = new ri(new ai, u);
        let p = !1;
        const f = t.background;
        f ? f.isColor && (u.color.copy(f), t.background = null, p = !0) : (u.color.copy(Hi), p = !0);
        for (let o = 0; o < 6; o++) {
            const e = o % 3;
            0 === e ? (r.up.set(0, s[o], 0), r.lookAt(a[o], 0, 0)) : 1 === e ? (r.up.set(0, 0, s[o]), r.lookAt(0, a[o], 0)) : (r.up.set(0, s[o], 0), r.lookAt(0, 0, a[o]));
            const n = this._cubeSize;
            Ji(i, e * n, o > 2 ? n : 0, n, n), l.setRenderTarget(i), p && l.render(d, r), l.render(t, r)
        }
        d.geometry.dispose(), d.material.dispose(), l.toneMapping = h, l.autoClear = c, t.background = f
    }
    _textureToCubeUV(t, e) {
        const n = this._renderer,
            i = t.mapping === b || t.mapping === w;
        i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Qi()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ki());
        const r = i ? this._cubemapMaterial : this._equirectMaterial,
            s = new ri(this._lodPlanes[0], r);
        r.uniforms.envMap.value = t;
        const a = this._cubeSize;
        Ji(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Gi)
    }
    _applyPMREM(t) {
        const e = this._renderer,
            n = e.autoClear;
        e.autoClear = !1;
        for (let i = 1; i < this._lodPlanes.length; i++) {
            const e = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]),
                n = qi[(i - 1) % qi.length];
            this._blur(t, i - 1, i, e, n)
        }
        e.autoClear = n
    }
    _blur(t, e, n, i, r) {
        const s = this._pingPongRenderTarget;
        this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r)
    }
    _halfBlur(t, e, n, i, r, s, a) {
        const o = this._renderer,
            l = this._blurMaterial,
            c = new ri(this._lodPlanes[i], l),
            h = l.uniforms,
            u = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / (2 * ki - 1),
            p = r / d,
            f = isFinite(r) ? 1 + Math.floor(3 * p) : ki,
            m = [];
        let g = 0;
        for (let x = 0; x < ki; ++x) {
            const t = x / p,
                e = Math.exp(-t * t / 2);
            m.push(e), 0 === x ? g += e : x < f && (g += 2 * e)
        }
        for (let x = 0; x < m.length; x++) m[x] = m[x] / g;
        h.envMap.value = t.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
        const {
            _lodMax: v
        } = this;
        h.dTheta.value = d, h.mipInt.value = v - n;
        const _ = this._sizeLods[i];
        Ji(e, 3 * _ * (i > v - Bi ? i - v + Bi : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _), o.setRenderTarget(e), o.render(c, Gi)
    }
}

function Zi(t, e, n) {
    const i = new $t(t, e, n);
    return i.texture.mapping = T, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i
}

function Ji(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
}

function Ki() {
    return new ui({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: $i(),
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
        blending: c,
        depthTest: !1,
        depthWrite: !1
    })
}

function Qi() {
    return new ui({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: $i(),
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
        blending: c,
        depthTest: !1,
        depthWrite: !1
    })
}

function $i() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"
}

function tr(t) {
    let e = new WeakMap,
        n = null;

    function i(t) {
        const n = t.target;
        n.removeEventListener("dispose", i);
        const r = e.get(n);
        void 0 !== r && (e.delete(n), r.dispose())
    }
    return {
        get: function (r) {
            if (r && r.isTexture) {
                const s = r.mapping,
                    a = 303 === s || 304 === s,
                    o = s === b || s === w;
                if (a || o) {
                    if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                        r.needsPMREMUpdate = !1;
                        let i = e.get(r);
                        return null === n && (n = new Yi(t)), i = a ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i), e.set(r, i), i.texture
                    }
                    if (e.has(r)) return e.get(r).texture; {
                        const s = r.image;
                        if (a && s && s.height > 0 || o && s && function (t) {
                                let e = 0;
                                const n = 6;
                                for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                                return e === n
                            }(s)) {
                            null === n && (n = new Yi(t));
                            const s = a ? n.fromEquirectangular(r) : n.fromCubemap(r);
                            return e.set(r, s), r.addEventListener("dispose", i), s.texture
                        }
                        return null
                    }
                }
            }
            return r
        },
        dispose: function () {
            e = new WeakMap, null !== n && (n.dispose(), n = null)
        }
    }
}

function er(t) {
    const e = {};

    function n(n) {
        if (void 0 !== e[n]) return e[n];
        let i;
        switch (n) {
            case "WEBGL_depth_texture":
                i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = t.getExtension(n)
        }
        return e[n] = i, i
    }
    return {
        has: function (t) {
            return null !== n(t)
        },
        init: function (t) {
            t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
        },
        get: function (t) {
            const e = n(t);
            return e
        }
    }
}

function nr(t, e, n, i) {
    const r = {},
        s = new WeakMap;

    function a(t) {
        const o = t.target;
        null !== o.index && e.remove(o.index);
        for (const n in o.attributes) e.remove(o.attributes[n]);
        o.removeEventListener("dispose", a), delete r[o.id];
        const l = s.get(o);
        l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
    }

    function o(t) {
        const n = [],
            i = t.index,
            r = t.attributes.position;
        let a = 0;
        if (null !== i) {
            const t = i.array;
            a = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
                const i = t[e + 0],
                    r = t[e + 1],
                    s = t[e + 2];
                n.push(i, r, r, s, s, i)
            }
        } else {
            const t = r.array;
            a = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                const t = e + 0,
                    i = e + 1,
                    r = e + 2;
                n.push(t, i, i, r, r, t)
            }
        }
        const o = new(zt(n) ? Dn : Ln)(n, 1);
        o.version = a;
        const l = s.get(t);
        l && e.remove(l), s.set(t, o)
    }
    return {
        get: function (t, e) {
            return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e
        },
        update: function (t) {
            const n = t.attributes;
            for (const r in n) e.update(n[r], 34962);
            const i = t.morphAttributes;
            for (const r in i) {
                const t = i[r];
                for (let n = 0, i = t.length; n < i; n++) e.update(t[n], 34962)
            }
        },
        getWireframeAttribute: function (t) {
            const e = s.get(t);
            if (e) {
                const n = t.index;
                null !== n && e.version < n.version && o(t)
            } else o(t);
            return s.get(t)
        }
    }
}

function ir(t, e, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    this.setMode = function (t) {
        s = t
    }, this.setIndex = function (t) {
        a = t.type, o = t.bytesPerElement
    }, this.render = function (e, i) {
        t.drawElements(s, i, a, e * o), n.update(i, s, 1)
    }, this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) h = t, u = "drawElementsInstanced";
        else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return;
        h[u](s, l, a, i * o, c), n.update(l, s, c)
    }
}

function rr(t) {
    const e = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: e,
        programs: null,
        autoReset: !0,
        reset: function () {
            e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
        },
        update: function (t, n, i) {
            switch (e.calls++, n) {
                case 4:
                    e.triangles += i * (t / 3);
                    break;
                case 1:
                    e.lines += i * (t / 2);
                    break;
                case 3:
                    e.lines += i * (t - 1);
                    break;
                case 2:
                    e.lines += i * t;
                    break;
                case 0:
                    e.points += i * t
            }
        }
    }
}

function sr(t, e) {
    return t[0] - e[0]
}

function ar(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1])
}

function or(t, e, n) {
    const i = {},
        r = new Float32Array(8),
        s = new WeakMap,
        a = new Qt,
        o = [];
    for (let l = 0; l < 8; l++) o[l] = [l, 0];
    return {
        update: function (l, c, h) {
            const u = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
                const i = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
                    r = void 0 !== i ? i.length : 0;
                let o = s.get(c);
                if (void 0 === o || o.count !== r) {
                    let t = function () {
                        v.dispose(), s.delete(c), c.removeEventListener("dispose", t)
                    };
                    void 0 !== o && o.texture.dispose();
                    const n = void 0 !== c.morphAttributes.position,
                        i = void 0 !== c.morphAttributes.normal,
                        l = void 0 !== c.morphAttributes.color,
                        h = c.morphAttributes.position || [],
                        u = c.morphAttributes.normal || [],
                        d = c.morphAttributes.color || [];
                    let p = 0;
                    !0 === n && (p = 1), !0 === i && (p = 2), !0 === l && (p = 3);
                    let f = c.attributes.position.count * p,
                        m = 1;
                    f > e.maxTextureSize && (m = Math.ceil(f / e.maxTextureSize), f = e.maxTextureSize);
                    const g = new Float32Array(f * m * 4 * r),
                        v = new te(g, f, m, r);
                    v.type = F, v.needsUpdate = !0;
                    const _ = 4 * p;
                    for (let e = 0; e < r; e++) {
                        const t = h[e],
                            r = u[e],
                            s = d[e],
                            o = f * m * 4 * e;
                        for (let e = 0; e < t.count; e++) {
                            const c = e * _;
                            !0 === n && (a.fromBufferAttribute(t, e), g[o + c + 0] = a.x, g[o + c + 1] = a.y, g[o + c + 2] = a.z, g[o + c + 3] = 0), !0 === i && (a.fromBufferAttribute(r, e), g[o + c + 4] = a.x, g[o + c + 5] = a.y, g[o + c + 6] = a.z, g[o + c + 7] = 0), !0 === l && (a.fromBufferAttribute(s, e), g[o + c + 8] = a.x, g[o + c + 9] = a.y, g[o + c + 10] = a.z, g[o + c + 11] = 4 === s.itemSize ? a.w : 1)
                        }
                    }
                    o = {
                        count: r,
                        texture: v,
                        size: new Ut(f, m)
                    }, s.set(c, o), c.addEventListener("dispose", t)
                }
                let l = 0;
                for (let t = 0; t < u.length; t++) l += u[t];
                const d = c.morphTargetsRelative ? 1 : 1 - l;
                h.getUniforms().setValue(t, "morphTargetBaseInfluence", d), h.getUniforms().setValue(t, "morphTargetInfluences", u), h.getUniforms().setValue(t, "morphTargetsTexture", o.texture, n), h.getUniforms().setValue(t, "morphTargetsTextureSize", o.size)
            } else {
                const e = void 0 === u ? 0 : u.length;
                let n = i[c.id];
                if (void 0 === n || n.length !== e) {
                    n = [];
                    for (let t = 0; t < e; t++) n[t] = [t, 0];
                    i[c.id] = n
                }
                for (let t = 0; t < e; t++) {
                    const e = n[t];
                    e[0] = t, e[1] = u[t]
                }
                n.sort(ar);
                for (let t = 0; t < 8; t++) t < e && n[t][1] ? (o[t][0] = n[t][0], o[t][1] = n[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, o[t][1] = 0);
                o.sort(sr);
                const s = c.morphAttributes.position,
                    a = c.morphAttributes.normal;
                let l = 0;
                for (let t = 0; t < 8; t++) {
                    const e = o[t],
                        n = e[0],
                        i = e[1];
                    n !== Number.MAX_SAFE_INTEGER && i ? (s && c.getAttribute("morphTarget" + t) !== s[n] && c.setAttribute("morphTarget" + t, s[n]), a && c.getAttribute("morphNormal" + t) !== a[n] && c.setAttribute("morphNormal" + t, a[n]), r[t] = i, l += i) : (s && !0 === c.hasAttribute("morphTarget" + t) && c.deleteAttribute("morphTarget" + t), a && !0 === c.hasAttribute("morphNormal" + t) && c.deleteAttribute("morphNormal" + t), r[t] = 0)
                }
                const d = c.morphTargetsRelative ? 1 : 1 - l;
                h.getUniforms().setValue(t, "morphTargetBaseInfluence", d), h.getUniforms().setValue(t, "morphTargetInfluences", r)
            }
        }
    }
}

function lr(t, e, n, i) {
    let r = new WeakMap;

    function s(t) {
        const e = t.target;
        e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
    }
    return {
        update: function (t) {
            const a = i.render.frame,
                o = t.geometry,
                l = e.get(t, o);
            return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l
        },
        dispose: function () {
            r = new WeakMap
        }
    }
}
const cr = new Kt,
    hr = new te,
    ur = new ee,
    dr = new gi,
    pr = [],
    fr = [],
    mr = new Float32Array(16),
    gr = new Float32Array(9),
    vr = new Float32Array(4);

function _r(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let s = pr[r];
    if (void 0 === s && (s = new Float32Array(r), pr[r] = s), 0 !== e) {
        i.toArray(s, 0);
        for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(s, r)
    }
    return s
}

function xr(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++)
        if (t[n] !== e[n]) return !1;
    return !0
}

function yr(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
}

function Mr(t, e) {
    let n = fr[e];
    void 0 === n && (n = new Int32Array(e), fr[e] = n);
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n
}

function Sr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
}

function br(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
        if (xr(n, e)) return;
        t.uniform2fv(this.addr, e), yr(n, e)
    }
}

function wr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
    else {
        if (xr(n, e)) return;
        t.uniform3fv(this.addr, e), yr(n, e)
    }
}

function Tr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
        if (xr(n, e)) return;
        t.uniform4fv(this.addr, e), yr(n, e)
    }
}

function Ar(t, e) {
    const n = this.cache,
        i = e.elements;
    if (void 0 === i) {
        if (xr(n, e)) return;
        t.uniformMatrix2fv(this.addr, !1, e), yr(n, e)
    } else {
        if (xr(n, i)) return;
        vr.set(i), t.uniformMatrix2fv(this.addr, !1, vr), yr(n, i)
    }
}

function Er(t, e) {
    const n = this.cache,
        i = e.elements;
    if (void 0 === i) {
        if (xr(n, e)) return;
        t.uniformMatrix3fv(this.addr, !1, e), yr(n, e)
    } else {
        if (xr(n, i)) return;
        gr.set(i), t.uniformMatrix3fv(this.addr, !1, gr), yr(n, i)
    }
}

function Cr(t, e) {
    const n = this.cache,
        i = e.elements;
    if (void 0 === i) {
        if (xr(n, e)) return;
        t.uniformMatrix4fv(this.addr, !1, e), yr(n, e)
    } else {
        if (xr(n, i)) return;
        mr.set(i), t.uniformMatrix4fv(this.addr, !1, mr), yr(n, i)
    }
}

function Pr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
}

function Lr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
        if (xr(n, e)) return;
        t.uniform2iv(this.addr, e), yr(n, e)
    }
}

function Dr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
        if (xr(n, e)) return;
        t.uniform3iv(this.addr, e), yr(n, e)
    }
}

function Rr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
        if (xr(n, e)) return;
        t.uniform4iv(this.addr, e), yr(n, e)
    }
}

function Ir(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
}

function Ur(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
        if (xr(n, e)) return;
        t.uniform2uiv(this.addr, e), yr(n, e)
    }
}

function Nr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
        if (xr(n, e)) return;
        t.uniform3uiv(this.addr, e), yr(n, e)
    }
}

function Or(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
        if (xr(n, e)) return;
        t.uniform4uiv(this.addr, e), yr(n, e)
    }
}

function zr(t, e, n) {
    const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || cr, r)
}

function Fr(t, e, n) {
    const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || ur, r)
}

function Br(t, e, n) {
    const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || dr, r)
}

function Vr(t, e, n) {
    const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || hr, r)
}

function kr(t, e) {
    t.uniform1fv(this.addr, e)
}

function Gr(t, e) {
    const n = _r(e, this.size, 2);
    t.uniform2fv(this.addr, n)
}

function Hr(t, e) {
    const n = _r(e, this.size, 3);
    t.uniform3fv(this.addr, n)
}

function Wr(t, e) {
    const n = _r(e, this.size, 4);
    t.uniform4fv(this.addr, n)
}

function Xr(t, e) {
    const n = _r(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n)
}

function jr(t, e) {
    const n = _r(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n)
}

function qr(t, e) {
    const n = _r(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n)
}

function Yr(t, e) {
    t.uniform1iv(this.addr, e)
}

function Zr(t, e) {
    t.uniform2iv(this.addr, e)
}

function Jr(t, e) {
    t.uniform3iv(this.addr, e)
}

function Kr(t, e) {
    t.uniform4iv(this.addr, e)
}

function Qr(t, e) {
    t.uniform1uiv(this.addr, e)
}

function $r(t, e) {
    t.uniform2uiv(this.addr, e)
}

function ts(t, e) {
    t.uniform3uiv(this.addr, e)
}

function es(t, e) {
    t.uniform4uiv(this.addr, e)
}

function ns(t, e, n) {
    const i = this.cache,
        r = e.length,
        s = Mr(n, r);
    xr(i, s) || (t.uniform1iv(this.addr, s), yr(i, s));
    for (let a = 0; a !== r; ++a) n.setTexture2D(e[a] || cr, s[a])
}

function is(t, e, n) {
    const i = this.cache,
        r = e.length,
        s = Mr(n, r);
    xr(i, s) || (t.uniform1iv(this.addr, s), yr(i, s));
    for (let a = 0; a !== r; ++a) n.setTexture3D(e[a] || ur, s[a])
}

function rs(t, e, n) {
    const i = this.cache,
        r = e.length,
        s = Mr(n, r);
    xr(i, s) || (t.uniform1iv(this.addr, s), yr(i, s));
    for (let a = 0; a !== r; ++a) n.setTextureCube(e[a] || dr, s[a])
}

function ss(t, e, n) {
    const i = this.cache,
        r = e.length,
        s = Mr(n, r);
    xr(i, s) || (t.uniform1iv(this.addr, s), yr(i, s));
    for (let a = 0; a !== r; ++a) n.setTexture2DArray(e[a] || hr, s[a])
}
class as {
    constructor(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
            switch (t) {
                case 5126:
                    return Sr;
                case 35664:
                    return br;
                case 35665:
                    return wr;
                case 35666:
                    return Tr;
                case 35674:
                    return Ar;
                case 35675:
                    return Er;
                case 35676:
                    return Cr;
                case 5124:
                case 35670:
                    return Pr;
                case 35667:
                case 35671:
                    return Lr;
                case 35668:
                case 35672:
                    return Dr;
                case 35669:
                case 35673:
                    return Rr;
                case 5125:
                    return Ir;
                case 36294:
                    return Ur;
                case 36295:
                    return Nr;
                case 36296:
                    return Or;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return zr;
                case 35679:
                case 36299:
                case 36307:
                    return Fr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return Br;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return Vr
            }
        }(e.type)
    }
}
class os {
    constructor(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
            switch (t) {
                case 5126:
                    return kr;
                case 35664:
                    return Gr;
                case 35665:
                    return Hr;
                case 35666:
                    return Wr;
                case 35674:
                    return Xr;
                case 35675:
                    return jr;
                case 35676:
                    return qr;
                case 5124:
                case 35670:
                    return Yr;
                case 35667:
                case 35671:
                    return Zr;
                case 35668:
                case 35672:
                    return Jr;
                case 35669:
                case 35673:
                    return Kr;
                case 5125:
                    return Qr;
                case 36294:
                    return $r;
                case 36295:
                    return ts;
                case 36296:
                    return es;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return ns;
                case 35679:
                case 36299:
                case 36307:
                    return is;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return rs;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return ss
            }
        }(e.type)
    }
}
class ls {
    constructor(t) {
        this.id = t, this.seq = [], this.map = {}
    }
    setValue(t, e, n) {
        const i = this.seq;
        for (let r = 0, s = i.length; r !== s; ++r) {
            const s = i[r];
            s.setValue(t, e[s.id], n)
        }
    }
}
const cs = /(\w+)(\])?(\[|\.)?/g;

function hs(t, e) {
    t.seq.push(e), t.map[e.id] = e
}

function us(t, e, n) {
    const i = t.name,
        r = i.length;
    for (cs.lastIndex = 0;;) {
        const s = cs.exec(i),
            a = cs.lastIndex;
        let o = s[1];
        const l = "]" === s[2],
            c = s[3];
        if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
            hs(n, void 0 === c ? new as(o, t, e) : new os(o, t, e));
            break
        } {
            let t = n.map[o];
            void 0 === t && (t = new ls(o), hs(n, t)), n = t
        }
    }
}
class ds {
    constructor(t, e) {
        this.seq = [], this.map = {};
        const n = t.getProgramParameter(e, 35718);
        for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            us(n, t.getUniformLocation(e, n.name), this)
        }
    }
    setValue(t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i)
    }
    setOptional(t, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t, n, i)
    }
    static upload(t, e, n, i) {
        for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r],
                a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i)
        }
    }
    static seqWithValue(t, e) {
        const n = [];
        for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r)
        }
        return n
    }
}

function ps(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i
}
let fs = 0;

function ms(t, e, n) {
    const i = t.getShaderParameter(e, 35713),
        r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
        const i = parseInt(s[1]);
        return n.toUpperCase() + "\n\n" + r + "\n\n" + function (t, e) {
            const n = t.split("\n"),
                i = [],
                r = Math.max(e - 6, 0),
                s = Math.min(e + 6, n.length);
            for (let a = r; a < s; a++) {
                const t = a + 1;
                i.push(`${t===e?">":" "} ${t}: ${n[a]}`)
            }
            return i.join("\n")
        }(t.getShaderSource(e), i)
    }
    return r
}

function gs(t, e) {
    const n = function (t) {
        switch (t) {
            case ct:
                return ["Linear", "( value )"];
            case ht:
                return ["sRGB", "( value )"];
            default:
                return ["Linear", "( value )"]
        }
    }(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
}

function vs(t, e) {
    let n;
    switch (e) {
        case v:
            n = "Linear";
            break;
        case _:
            n = "Reinhard";
            break;
        case x:
            n = "OptimizedCineon";
            break;
        case y:
            n = "ACESFilmic";
            break;
        case M:
            n = "Custom";
            break;
        default:
            n = "Linear"
    }
    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
}

function _s(t) {
    return "" !== t
}

function xs(t, e) {
    const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}

function ys(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Ms = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Ss(t) {
    return t.replace(Ms, bs)
}

function bs(t, e) {
    const n = Ci[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Ss(n)
}
const ws = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Ts(t) {
    return t.replace(ws, As)
}

function As(t, e, n, i) {
    let r = "";
    for (let s = parseInt(e); s < parseInt(n); s++) r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return r
}

function Es(t) {
    let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
}

function Cs(t, e, n, a) {
    const o = t.getContext(),
        l = n.defines;
    let c = n.vertexShader,
        h = n.fragmentShader;
    const u = function (t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return t.shadowMapType === i ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === r ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === s && (e = "SHADOWMAP_TYPE_VSM"), e
        }(n),
        d = function (t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch (t.envMapMode) {
                case b:
                case w:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case T:
                    e = "ENVMAP_TYPE_CUBE_UV"
            }
            return e
        }(n),
        v = function (t) {
            let e = "ENVMAP_MODE_REFLECTION";
            t.envMap && t.envMapMode === w && (e = "ENVMAP_MODE_REFRACTION");
            return e
        }(n),
        _ = function (t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch (t.combine) {
                case p:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case f:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case m:
                    e = "ENVMAP_BLENDING_ADD"
            }
            return e
        }(n),
        x = function (t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e) - 2,
                i = 1 / e;
            return {
                texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
                texelHeight: i,
                maxMip: n
            }
        }(n),
        y = n.isWebGL2 ? "" : function (t) {
            return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.normalMapTangentSpace || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(_s).join("\n")
        }(n),
        M = function (t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                !1 !== i && e.push("#define " + n + " " + i)
            }
            return e.join("\n")
        }(l),
        S = o.createProgram();
    let A, E, C = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (A = [M].filter(_s).join("\n"), A.length > 0 && (A += "\n"), E = [y, M].filter(_s).join("\n"), E.length > 0 && (E += "\n")) : (A = [Es(n), "#define SHADER_NAME " + n.shaderName, M, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + v : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs2 ? "#define USE_UV2" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(_s).join("\n"), E = [y, Es(n), "#define SHADER_NAME " + n.shaderName, M, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + v : "", n.envMap ? "#define " + _ : "", x ? "#define CUBEUV_TEXEL_WIDTH " + x.texelWidth : "", x ? "#define CUBEUV_TEXEL_HEIGHT " + x.texelHeight : "", x ? "#define CUBEUV_MAX_MIP " + x.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs2 ? "#define USE_UV2" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== g ? "#define TONE_MAPPING" : "", n.toneMapping !== g ? Ci.tonemapping_pars_fragment : "", n.toneMapping !== g ? vs("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", Ci.encodings_pars_fragment, gs("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(_s).join("\n")), c = Ss(c), c = xs(c, n), c = ys(c, n), h = Ss(h), h = xs(h, n), h = ys(h, n), c = Ts(c), h = Ts(h), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (C = "#version 300 es\n", A = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + A, E = ["#define varying in", n.glslVersion === vt ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === vt ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + E);
    const P = C + E + h,
        L = ps(o, 35633, C + A + c),
        D = ps(o, 35632, P);
    if (o.attachShader(S, L), o.attachShader(S, D), void 0 !== n.index0AttributeName ? o.bindAttribLocation(S, 0, n.index0AttributeName) : !0 === n.morphTargets && o.bindAttribLocation(S, 0, "position"), o.linkProgram(S), t.debug.checkShaderErrors) {
        const e = o.getProgramInfoLog(S).trim(),
            n = o.getShaderInfoLog(L).trim(),
            i = o.getShaderInfoLog(D).trim();
        let r = !0,
            s = !0;
        if (!1 === o.getProgramParameter(S, 35714))
            if (r = !1, "function" == typeof t.debug.onShaderError) t.debug.onShaderError(o, S, L, D);
            else {
                ms(o, L, "vertex"), ms(o, D, "fragment")
            }
        else "" !== e || "" !== n && "" !== i || (s = !1);
        s && (this.diagnostics = {
            runnable: r,
            programLog: e,
            vertexShader: {
                log: n,
                prefix: A
            },
            fragmentShader: {
                log: i,
                prefix: E
            }
        })
    }
    let R, I;
    return o.deleteShader(L), o.deleteShader(D), this.getUniforms = function () {
        return void 0 === R && (R = new ds(o, S)), R
    }, this.getAttributes = function () {
        return void 0 === I && (I = function (t, e) {
            const n = {},
                i = t.getProgramParameter(e, 35721);
            for (let r = 0; r < i; r++) {
                const i = t.getActiveAttrib(e, r),
                    s = i.name;
                let a = 1;
                35674 === i.type && (a = 2), 35675 === i.type && (a = 3), 35676 === i.type && (a = 4), n[s] = {
                    type: i.type,
                    location: t.getAttribLocation(e, s),
                    locationSize: a
                }
            }
            return n
        }(o, S)), I
    }, this.destroy = function () {
        a.releaseStatesOfProgram(this), o.deleteProgram(S), this.program = void 0
    }, this.name = n.shaderName, this.id = fs++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = L, this.fragmentShader = D, this
}
let Ps = 0;
class Ls {
    constructor() {
        this.shaderCache = new Map, this.materialCache = new Map
    }
    update(t) {
        const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            s = this._getShaderCacheForMaterial(t);
        return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this
    }
    remove(t) {
        const e = this.materialCache.get(t);
        for (const n of e) n.usedTimes--, 0 === n.usedTimes && this.shaderCache.delete(n.code);
        return this.materialCache.delete(t), this
    }
    getVertexShaderID(t) {
        return this._getShaderStage(t.vertexShader).id
    }
    getFragmentShaderID(t) {
        return this._getShaderStage(t.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(), this.materialCache.clear()
    }
    _getShaderCacheForMaterial(t) {
        const e = this.materialCache;
        let n = e.get(t);
        return void 0 === n && (n = new Set, e.set(t, n)), n
    }
    _getShaderStage(t) {
        const e = this.shaderCache;
        let n = e.get(t);
        return void 0 === n && (n = new Ds(t), e.set(t, n)), n
    }
}
class Ds {
    constructor(t) {
        this.id = Ps++, this.code = t, this.usedTimes = 0
    }
}

function Rs(t, e, n, i, r, s, a) {
    const c = new We,
        u = new Ls,
        d = [],
        p = r.isWebGL2,
        f = r.logarithmicDepthBuffer,
        m = r.vertexTextures;
    let v = r.precision;
    const _ = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };

    function x(t) {
        return 1 === t ? "uv2" : "uv"
    }
    return {
        getParameters: function (s, c, d, y, M) {
            const S = y.fog,
                b = M.geometry,
                w = s.isMeshStandardMaterial ? y.environment : null,
                A = (s.isMeshStandardMaterial ? n : e).get(s.envMap || w),
                E = A && A.mapping === T ? A.image.height : null,
                C = _[s.type];
            null !== s.precision && (v = r.getMaxPrecision(s.precision), s.precision);
            const P = b.morphAttributes.position || b.morphAttributes.normal || b.morphAttributes.color,
                L = void 0 !== P ? P.length : 0;
            let D, R, I, U, N = 0;
            if (void 0 !== b.morphAttributes.position && (N = 1), void 0 !== b.morphAttributes.normal && (N = 2), void 0 !== b.morphAttributes.color && (N = 3), C) {
                const t = Li[C];
                D = t.vertexShader, R = t.fragmentShader
            } else D = s.vertexShader, R = s.fragmentShader, u.update(s), I = u.getVertexShaderID(s), U = u.getFragmentShaderID(s);
            const O = t.getRenderTarget(),
                z = !0 === M.isInstancedMesh,
                F = !!s.map,
                B = !!s.matcap,
                V = !!A,
                k = !!s.aoMap,
                G = !!s.lightMap,
                H = !!s.bumpMap,
                W = !!s.normalMap,
                X = !!s.displacementMap,
                j = !!s.emissiveMap,
                q = !!s.metalnessMap,
                Y = !!s.roughnessMap,
                Z = s.clearcoat > 0,
                J = s.iridescence > 0,
                K = s.sheen > 0,
                Q = s.transmission > 0,
                $ = Z && !!s.clearcoatMap,
                tt = Z && !!s.clearcoatNormalMap,
                et = Z && !!s.clearcoatRoughnessMap,
                nt = J && !!s.iridescenceMap,
                it = J && !!s.iridescenceThicknessMap,
                rt = K && !!s.sheenColorMap,
                st = K && !!s.sheenRoughnessMap,
                at = !!s.specularMap,
                ot = !!s.specularColorMap,
                lt = !!s.specularIntensityMap,
                dt = Q && !!s.transmissionMap,
                pt = Q && !!s.thicknessMap,
                ft = !!s.gradientMap,
                mt = !!s.alphaMap,
                gt = s.alphaTest > 0,
                vt = !!s.extensions,
                _t = !!b.attributes.uv2;
            return {
                isWebGL2: p,
                shaderID: C,
                shaderName: s.type,
                vertexShader: D,
                fragmentShader: R,
                defines: s.defines,
                customVertexShaderID: I,
                customFragmentShaderID: U,
                isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                glslVersion: s.glslVersion,
                precision: v,
                instancing: z,
                instancingColor: z && null !== M.instanceColor,
                supportsVertexTextures: m,
                outputEncoding: null === O ? t.outputEncoding : !0 === O.isXRRenderTarget ? O.texture.encoding : ct,
                map: F,
                matcap: B,
                envMap: V,
                envMapMode: V && A.mapping,
                envMapCubeUVHeight: E,
                aoMap: k,
                lightMap: G,
                bumpMap: H,
                normalMap: W,
                displacementMap: m && X,
                emissiveMap: j,
                normalMapObjectSpace: W && 1 === s.normalMapType,
                normalMapTangentSpace: W && s.normalMapType === ut,
                decodeVideoTexture: F && !0 === s.map.isVideoTexture && s.map.encoding === ht,
                metalnessMap: q,
                roughnessMap: Y,
                clearcoat: Z,
                clearcoatMap: $,
                clearcoatNormalMap: tt,
                clearcoatRoughnessMap: et,
                iridescence: J,
                iridescenceMap: nt,
                iridescenceThicknessMap: it,
                sheen: K,
                sheenColorMap: rt,
                sheenRoughnessMap: st,
                specularMap: at,
                specularColorMap: ot,
                specularIntensityMap: lt,
                transmission: Q,
                transmissionMap: dt,
                thicknessMap: pt,
                gradientMap: ft,
                opaque: !1 === s.transparent && s.blending === h,
                alphaMap: mt,
                alphaTest: gt,
                combine: s.combine,
                mapUv: F && x(s.map.channel),
                aoMapUv: k && x(s.aoMap.channel),
                lightMapUv: G && x(s.lightMap.channel),
                bumpMapUv: H && x(s.bumpMap.channel),
                normalMapUv: W && x(s.normalMap.channel),
                displacementMapUv: X && x(s.displacementMap.channel),
                emissiveMapUv: j && x(s.emissiveMap.channel),
                metalnessMapUv: q && x(s.metalnessMap.channel),
                roughnessMapUv: Y && x(s.roughnessMap.channel),
                clearcoatMapUv: $ && x(s.clearcoatMap.channel),
                clearcoatNormalMapUv: tt && x(s.clearcoatNormalMap.channel),
                clearcoatRoughnessMapUv: et && x(s.clearcoatRoughnessMap.channel),
                iridescenceMapUv: nt && x(s.iridescenceMap.channel),
                iridescenceThicknessMapUv: it && x(s.iridescenceThicknessMap.channel),
                sheenColorMapUv: rt && x(s.sheenColorMap.channel),
                sheenRoughnessMapUv: st && x(s.sheenRoughnessMap.channel),
                specularMapUv: at && x(s.specularMap.channel),
                specularColorMapUv: ot && x(s.specularColorMap.channel),
                specularIntensityMapUv: lt && x(s.specularIntensityMap.channel),
                transmissionMapUv: dt && x(s.transmissionMap.channel),
                thicknessMapUv: pt && x(s.thicknessMap.channel),
                alphaMapUv: mt && x(s.alphaMap.channel),
                vertexTangents: W && !!b.attributes.tangent,
                vertexColors: s.vertexColors,
                vertexAlphas: !0 === s.vertexColors && !!b.attributes.color && 4 === b.attributes.color.itemSize,
                vertexUvs2: _t,
                pointsUvs: !0 === M.isPoints && !!b.attributes.uv && (F || mt),
                fog: !!S,
                useFog: !0 === s.fog,
                fogExp2: S && S.isFogExp2,
                flatShading: !0 === s.flatShading,
                sizeAttenuation: !0 === s.sizeAttenuation,
                logarithmicDepthBuffer: f,
                skinning: !0 === M.isSkinnedMesh,
                morphTargets: void 0 !== b.morphAttributes.position,
                morphNormals: void 0 !== b.morphAttributes.normal,
                morphColors: void 0 !== b.morphAttributes.color,
                morphTargetsCount: L,
                morphTextureStride: N,
                numDirLights: c.directional.length,
                numPointLights: c.point.length,
                numSpotLights: c.spot.length,
                numSpotLightMaps: c.spotLightMap.length,
                numRectAreaLights: c.rectArea.length,
                numHemiLights: c.hemi.length,
                numDirLightShadows: c.directionalShadowMap.length,
                numPointLightShadows: c.pointShadowMap.length,
                numSpotLightShadows: c.spotShadowMap.length,
                numSpotLightShadowsWithMaps: c.numSpotLightShadowsWithMaps,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: s.dithering,
                shadowMapEnabled: t.shadowMap.enabled && d.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: s.toneMapped ? t.toneMapping : g,
                useLegacyLights: t.useLegacyLights,
                premultipliedAlpha: s.premultipliedAlpha,
                doubleSided: s.side === l,
                flipSided: s.side === o,
                useDepthPacking: s.depthPacking >= 0,
                depthPacking: s.depthPacking || 0,
                index0AttributeName: s.index0AttributeName,
                extensionDerivatives: vt && !0 === s.extensions.derivatives,
                extensionFragDepth: vt && !0 === s.extensions.fragDepth,
                extensionDrawBuffers: vt && !0 === s.extensions.drawBuffers,
                extensionShaderTextureLOD: vt && !0 === s.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: p || i.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: p || i.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: p || i.has("EXT_shader_texture_lod"),
                customProgramCacheKey: s.customProgramCacheKey()
            }
        },
        getProgramCacheKey: function (e) {
            const n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines)
                for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return !1 === e.isRawShaderMaterial && (! function (t, e) {
                t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.mapUv), t.push(e.alphaMapUv), t.push(e.lightMapUv), t.push(e.aoMapUv), t.push(e.bumpMapUv), t.push(e.normalMapUv), t.push(e.displacementMapUv), t.push(e.emissiveMapUv), t.push(e.metalnessMapUv), t.push(e.roughnessMapUv), t.push(e.clearcoatMapUv), t.push(e.clearcoatNormalMapUv), t.push(e.clearcoatRoughnessMapUv), t.push(e.iridescenceMapUv), t.push(e.iridescenceThicknessMapUv), t.push(e.sheenColorMapUv), t.push(e.sheenRoughnessMapUv), t.push(e.specularMapUv), t.push(e.specularColorMapUv), t.push(e.specularIntensityMapUv), t.push(e.transmissionMapUv), t.push(e.thicknessMapUv), t.push(e.combine), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
            }(n, e), function (t, e) {
                c.disableAll(), e.isWebGL2 && c.enable(0);
                e.supportsVertexTextures && c.enable(1);
                e.instancing && c.enable(2);
                e.instancingColor && c.enable(3);
                e.matcap && c.enable(4);
                e.envMap && c.enable(5);
                e.normalMapObjectSpace && c.enable(6);
                e.normalMapTangentSpace && c.enable(7);
                e.clearcoat && c.enable(8);
                e.iridescence && c.enable(9);
                e.alphaTest && c.enable(10);
                e.vertexColors && c.enable(11);
                e.vertexAlphas && c.enable(12);
                e.vertexUvs2 && c.enable(13);
                e.vertexTangents && c.enable(14);
                t.push(c.mask), c.disableAll(), e.fog && c.enable(0);
                e.useFog && c.enable(1);
                e.flatShading && c.enable(2);
                e.logarithmicDepthBuffer && c.enable(3);
                e.skinning && c.enable(4);
                e.morphTargets && c.enable(5);
                e.morphNormals && c.enable(6);
                e.morphColors && c.enable(7);
                e.premultipliedAlpha && c.enable(8);
                e.shadowMapEnabled && c.enable(9);
                e.useLegacyLights && c.enable(10);
                e.doubleSided && c.enable(11);
                e.flipSided && c.enable(12);
                e.useDepthPacking && c.enable(13);
                e.dithering && c.enable(14);
                e.transmission && c.enable(15);
                e.sheen && c.enable(16);
                e.decodeVideoTexture && c.enable(17);
                e.opaque && c.enable(18);
                e.pointsUvs && c.enable(19);
                t.push(c.mask)
            }(n, e), n.push(t.outputEncoding)), n.push(e.customProgramCacheKey), n.join()
        },
        getUniforms: function (t) {
            const e = _[t.type];
            let n;
            if (e) {
                const t = Li[e];
                n = hi.clone(t.uniforms)
            } else n = t.uniforms;
            return n
        },
        acquireProgram: function (e, n) {
            let i;
            for (let t = 0, r = d.length; t < r; t++) {
                const e = d[t];
                if (e.cacheKey === n) {
                    i = e, ++i.usedTimes;
                    break
                }
            }
            return void 0 === i && (i = new Cs(t, n, e, s), d.push(i)), i
        },
        releaseProgram: function (t) {
            if (0 == --t.usedTimes) {
                const e = d.indexOf(t);
                d[e] = d[d.length - 1], d.pop(), t.destroy()
            }
        },
        releaseShaderCache: function (t) {
            u.remove(t)
        },
        programs: d,
        dispose: function () {
            u.dispose()
        }
    }
}

function Is() {
    let t = new WeakMap;
    return {
        get: function (e) {
            let n = t.get(e);
            return void 0 === n && (n = {}, t.set(e, n)), n
        },
        remove: function (e) {
            t.delete(e)
        },
        update: function (e, n, i) {
            t.get(e)[n] = i
        },
        dispose: function () {
            t = new WeakMap
        }
    }
}

function Us(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
}

function Ns(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
}

function Os() {
    const t = [];
    let e = 0;
    const n = [],
        i = [],
        r = [];

    function s(n, i, r, s, a, o) {
        let l = t[e];
        return void 0 === l ? (l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: s,
            renderOrder: n.renderOrder,
            z: a,
            group: o
        }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = s, l.renderOrder = n.renderOrder, l.z = a, l.group = o), e++, l
    }
    return {
        opaque: n,
        transmissive: i,
        transparent: r,
        init: function () {
            e = 0, n.length = 0, i.length = 0, r.length = 0
        },
        push: function (t, e, a, o, l, c) {
            const h = s(t, e, a, o, l, c);
            a.transmission > 0 ? i.push(h) : !0 === a.transparent ? r.push(h) : n.push(h)
        },
        unshift: function (t, e, a, o, l, c) {
            const h = s(t, e, a, o, l, c);
            a.transmission > 0 ? i.unshift(h) : !0 === a.transparent ? r.unshift(h) : n.unshift(h)
        },
        finish: function () {
            for (let n = e, i = t.length; n < i; n++) {
                const e = t[n];
                if (null === e.id) break;
                e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
            }
        },
        sort: function (t, e) {
            n.length > 1 && n.sort(t || Us), i.length > 1 && i.sort(e || Ns), r.length > 1 && r.sort(e || Ns)
        }
    }
}

function zs() {
    let t = new WeakMap;
    return {
        get: function (e, n) {
            const i = t.get(e);
            let r;
            return void 0 === i ? (r = new Os, t.set(e, [r])) : n >= i.length ? (r = new Os, i.push(r)) : r = i[n], r
        },
        dispose: function () {
            t = new WeakMap
        }
    }
}

function Fs() {
    const t = {};
    return {
        get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
                case "DirectionalLight":
                    n = {
                        direction: new ie,
                        color: new wn
                    };
                    break;
                case "SpotLight":
                    n = {
                        position: new ie,
                        direction: new ie,
                        color: new wn,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    n = {
                        position: new ie,
                        color: new wn,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    n = {
                        direction: new ie,
                        skyColor: new wn,
                        groundColor: new wn
                    };
                    break;
                case "RectAreaLight":
                    n = {
                        color: new wn,
                        position: new ie,
                        halfWidth: new ie,
                        halfHeight: new ie
                    }
            }
            return t[e.id] = n, n
        }
    }
}
let Bs = 0;

function Vs(t, e) {
    return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0)
}

function ks(t, e) {
    const n = new Fs,
        i = function () {
            const t = {};
            return {
                get: function (e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    let n;
                    switch (e.type) {
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Ut
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Ut,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            }
                    }
                    return t[e.id] = n, n
                }
            }
        }(),
        r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1,
                numSpotMaps: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0
        };
    for (let l = 0; l < 9; l++) r.probe.push(new ie);
    const s = new ie,
        a = new Ie,
        o = new Ie;
    return {
        setup: function (s, a) {
            let o = 0,
                l = 0,
                c = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let h = 0,
                u = 0,
                d = 0,
                p = 0,
                f = 0,
                m = 0,
                g = 0,
                v = 0,
                _ = 0,
                x = 0;
            s.sort(Vs);
            const y = !0 === a ? Math.PI : 1;
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t],
                    a = e.color,
                    M = e.intensity,
                    S = e.distance,
                    b = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                if (e.isAmbientLight) o += a.r * M * y, l += a.g * M * y, c += a.b * M * y;
                else if (e.isLightProbe)
                    for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], M);
                else if (e.isDirectionalLight) {
                    const t = n.get(e);
                    if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                        const t = e.shadow,
                            n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = b, r.directionalShadowMatrix[h] = e.shadow.matrix, m++
                    }
                    r.directional[h] = t, h++
                } else if (e.isSpotLight) {
                    const t = n.get(e);
                    t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(M * y), t.distance = S, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, r.spot[d] = t;
                    const s = e.shadow;
                    if (e.map && (r.spotLightMap[_] = e.map, _++, s.updateMatrices(e), e.castShadow && x++), r.spotLightMatrix[d] = s.matrix, e.castShadow) {
                        const t = i.get(e);
                        t.shadowBias = s.bias, t.shadowNormalBias = s.normalBias, t.shadowRadius = s.radius, t.shadowMapSize = s.mapSize, r.spotShadow[d] = t, r.spotShadowMap[d] = b, v++
                    }
                    d++
                } else if (e.isRectAreaLight) {
                    const t = n.get(e);
                    t.color.copy(a).multiplyScalar(M), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++
                } else if (e.isPointLight) {
                    const t = n.get(e);
                    if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                        const t = e.shadow,
                            n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = b, r.pointShadowMatrix[u] = e.shadow.matrix, g++
                    }
                    r.point[u] = t, u++
                } else if (e.isHemisphereLight) {
                    const t = n.get(e);
                    t.skyColor.copy(e.color).multiplyScalar(M * y), t.groundColor.copy(e.groundColor).multiplyScalar(M * y), r.hemi[f] = t, f++
                }
            }
            p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Pi.LTC_FLOAT_1, r.rectAreaLTC2 = Pi.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") && (r.rectAreaLTC1 = Pi.LTC_HALF_1, r.rectAreaLTC2 = Pi.LTC_HALF_2)), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
            const M = r.hash;
            M.directionalLength === h && M.pointLength === u && M.spotLength === d && M.rectAreaLength === p && M.hemiLength === f && M.numDirectionalShadows === m && M.numPointShadows === g && M.numSpotShadows === v && M.numSpotMaps === _ || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = f, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = v + _ - x, r.spotLightMap.length = _, r.numSpotLightShadowsWithMaps = x, M.directionalLength = h, M.pointLength = u, M.spotLength = d, M.rectAreaLength = p, M.hemiLength = f, M.numDirectionalShadows = m, M.numPointShadows = g, M.numSpotShadows = v, M.numSpotMaps = _, r.version = Bs++)
        },
        setupView: function (t, e) {
            let n = 0,
                i = 0,
                l = 0,
                c = 0,
                h = 0;
            const u = e.matrixWorldInverse;
            for (let d = 0, p = t.length; d < p; d++) {
                const e = t[d];
                if (e.isDirectionalLight) {
                    const t = r.directional[n];
                    t.direction.setFromMatrixPosition(e.matrixWorld), s.setFromMatrixPosition(e.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++
                } else if (e.isSpotLight) {
                    const t = r.spot[l];
                    t.position.setFromMatrixPosition(e.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(e.matrixWorld), s.setFromMatrixPosition(e.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++
                } else if (e.isRectAreaLight) {
                    const t = r.rectArea[c];
                    t.position.setFromMatrixPosition(e.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(e.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
                } else if (e.isPointLight) {
                    const t = r.point[i];
                    t.position.setFromMatrixPosition(e.matrixWorld), t.position.applyMatrix4(u), i++
                } else if (e.isHemisphereLight) {
                    const t = r.hemi[h];
                    t.direction.setFromMatrixPosition(e.matrixWorld), t.direction.transformDirection(u), h++
                }
            }
        },
        state: r
    }
}

function Gs(t, e) {
    const n = new ks(t, e),
        i = [],
        r = [];
    return {
        init: function () {
            i.length = 0, r.length = 0
        },
        state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
        },
        setupLights: function (t) {
            n.setup(i, t)
        },
        setupLightsView: function (t) {
            n.setupView(i, t)
        },
        pushLight: function (t) {
            i.push(t)
        },
        pushShadow: function (t) {
            r.push(t)
        }
    }
}

function Hs(t, e) {
    let n = new WeakMap;
    return {
        get: function (i, r = 0) {
            const s = n.get(i);
            let a;
            return void 0 === s ? (a = new Gs(t, e), n.set(i, [a])) : r >= s.length ? (a = new Gs(t, e), s.push(a)) : a = s[r], a
        },
        dispose: function () {
            n = new WeakMap
        }
    }
}
class Ws extends xn {
    constructor(t) {
        super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }
}
class Xs extends xn {
    constructor(t) {
        super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }
}

function js(t, e, n) {
    let r = new wi;
    const h = new Ut,
        u = new Ut,
        d = new Qt,
        p = new Ws({
            depthPacking: 3201
        }),
        f = new Xs,
        m = {},
        g = n.maxTextureSize,
        v = {
            [a]: o,
            [o]: a,
            [l]: l
        },
        _ = new ui({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new Ut
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }),
        x = _.clone();
    x.defines.HORIZONTAL_PASS = 1;
    const y = new Vn;
    y.setAttribute("position", new Pn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    const M = new ri(y, _),
        S = this;

    function b(n, i) {
        const r = e.update(M);
        _.defines.VSM_SAMPLES !== n.blurSamples && (_.defines.VSM_SAMPLES = n.blurSamples, x.defines.VSM_SAMPLES = n.blurSamples, _.needsUpdate = !0, x.needsUpdate = !0), null === n.mapPass && (n.mapPass = new $t(h.x, h.y)), _.uniforms.shadow_pass.value = n.map.texture, _.uniforms.resolution.value = n.mapSize, _.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, _, M, null), x.uniforms.shadow_pass.value = n.mapPass.texture, x.uniforms.resolution.value = n.mapSize, x.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, x, M, null)
    }

    function w(e, n, i, r) {
        let a = null;
        const o = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
        if (void 0 !== o) a = o;
        else if (a = !0 === i.isPointLight ? f : p, t.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
            const t = a.uuid,
                e = n.uuid;
            let i = m[t];
            void 0 === i && (i = {}, m[t] = i);
            let r = i[e];
            void 0 === r && (r = a.clone(), i[e] = r), a = r
        }
        if (a.visible = n.visible, a.wireframe = n.wireframe, a.side = r === s ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : v[n.side], a.alphaMap = n.alphaMap, a.alphaTest = n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, !0 === i.isPointLight && !0 === a.isMeshDistanceMaterial) {
            t.properties.get(a).light = i
        }
        return a
    }

    function T(n, i, a, o, l) {
        if (!1 === n.visible) return;
        if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && l === s) && (!n.frustumCulled || r.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            const i = e.update(n),
                r = n.material;
            if (Array.isArray(r)) {
                const e = i.groups;
                for (let s = 0, c = e.length; s < c; s++) {
                    const c = e[s],
                        h = r[c.materialIndex];
                    if (h && h.visible) {
                        const e = w(n, h, o, l);
                        t.renderBufferDirect(a, null, i, e, n, c)
                    }
                }
            } else if (r.visible) {
                const e = w(n, r, o, l);
                t.renderBufferDirect(a, null, i, e, n, null)
            }
        }
        const c = n.children;
        for (let t = 0, e = c.length; t < e; t++) T(c[t], i, a, o, l)
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = i, this.render = function (e, n, i) {
        if (!1 === S.enabled) return;
        if (!1 === S.autoUpdate && !1 === S.needsUpdate) return;
        if (0 === e.length) return;
        const a = t.getRenderTarget(),
            o = t.getActiveCubeFace(),
            l = t.getActiveMipmapLevel(),
            p = t.state;
        p.setBlending(c), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
        for (let c = 0, f = e.length; c < f; c++) {
            const a = e[c],
                o = a.shadow;
            if (void 0 === o) continue;
            if (!1 === o.autoUpdate && !1 === o.needsUpdate) continue;
            h.copy(o.mapSize);
            const l = o.getFrameExtents();
            if (h.multiply(l), u.copy(o.mapSize), (h.x > g || h.y > g) && (h.x > g && (u.x = Math.floor(g / l.x), h.x = u.x * l.x, o.mapSize.x = u.x), h.y > g && (u.y = Math.floor(g / l.y), h.y = u.y * l.y, o.mapSize.y = u.y)), null === o.map) {
                const t = this.type !== s ? {
                    minFilter: P,
                    magFilter: P
                } : {};
                o.map = new $t(h.x, h.y, t), o.map.texture.name = a.name + ".shadowMap", o.camera.updateProjectionMatrix()
            }
            t.setRenderTarget(o.map), t.clear();
            const f = o.getViewportCount();
            for (let t = 0; t < f; t++) {
                const e = o.getViewport(t);
                d.set(u.x * e.x, u.y * e.y, u.x * e.z, u.y * e.w), p.viewport(d), o.updateMatrices(a, t), r = o.getFrustum(), T(n, i, o.camera, a, this.type)
            }!0 !== o.isPointLightShadow && this.type === s && b(o, i), o.needsUpdate = !1
        }
        S.needsUpdate = !1, t.setRenderTarget(a, o, l)
    }
}

function qs(t, e, n) {
    const i = n.isWebGL2;
    const r = new function () {
            let e = !1;
            const n = new Qt;
            let i = null;
            const r = new Qt(0, 0, 0, 0);
            return {
                setMask: function (n) {
                    i === n || e || (t.colorMask(n, n, n, n), i = n)
                },
                setLocked: function (t) {
                    e = t
                },
                setClear: function (e, i, s, a, o) {
                    !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n))
                },
                reset: function () {
                    e = !1, i = null, r.set(-1, 0, 0, 0)
                }
            }
        },
        s = new function () {
            let e = !1,
                n = null,
                i = null,
                r = null;
            return {
                setTest: function (t) {
                    t ? j(2929) : q(2929)
                },
                setMask: function (i) {
                    n === i || e || (t.depthMask(i), n = i)
                },
                setFunc: function (e) {
                    if (i !== e) {
                        switch (e) {
                            case 0:
                                t.depthFunc(512);
                                break;
                            case 1:
                                t.depthFunc(519);
                                break;
                            case 2:
                                t.depthFunc(513);
                                break;
                            case 3:
                            default:
                                t.depthFunc(515);
                                break;
                            case 4:
                                t.depthFunc(514);
                                break;
                            case 5:
                                t.depthFunc(518);
                                break;
                            case 6:
                                t.depthFunc(516);
                                break;
                            case 7:
                                t.depthFunc(517)
                        }
                        i = e
                    }
                },
                setLocked: function (t) {
                    e = t
                },
                setClear: function (e) {
                    r !== e && (t.clearDepth(e), r = e)
                },
                reset: function () {
                    e = !1, n = null, i = null, r = null
                }
            }
        },
        a = new function () {
            let e = !1,
                n = null,
                i = null,
                r = null,
                s = null,
                a = null,
                o = null,
                l = null,
                c = null;
            return {
                setTest: function (t) {
                    e || (t ? j(2960) : q(2960))
                },
                setMask: function (i) {
                    n === i || e || (t.stencilMask(i), n = i)
                },
                setFunc: function (e, n, a) {
                    i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a)
                },
                setOp: function (e, n, i) {
                    a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i)
                },
                setLocked: function (t) {
                    e = t
                },
                setClear: function (e) {
                    c !== e && (t.clearStencil(e), c = e)
                },
                reset: function () {
                    e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null
                }
            }
        },
        p = new WeakMap,
        f = new WeakMap;
    let m = {},
        g = {},
        v = new WeakMap,
        _ = [],
        x = null,
        y = !1,
        M = null,
        S = null,
        b = null,
        w = null,
        T = null,
        A = null,
        E = null,
        C = !1,
        P = null,
        L = null,
        D = null,
        R = null,
        I = null;
    const U = t.getParameter(35661);
    let N = !1,
        O = 0;
    const z = t.getParameter(7938); - 1 !== z.indexOf("WebGL") ? (O = parseFloat(/^WebGL (\d)/.exec(z)[1]), N = O >= 1) : -1 !== z.indexOf("OpenGL ES") && (O = parseFloat(/^OpenGL ES (\d)/.exec(z)[1]), N = O >= 2);
    let F = null,
        B = {};
    const V = t.getParameter(3088),
        k = t.getParameter(2978),
        G = (new Qt).fromArray(V),
        H = (new Qt).fromArray(k);

    function W(e, n, i) {
        const r = new Uint8Array(4),
            s = t.createTexture();
        t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
        for (let a = 0; a < i; a++) t.texImage2D(n + a, 0, 6408, 1, 1, 0, 6408, 5121, r);
        return s
    }
    const X = {};

    function j(e) {
        !0 !== m[e] && (t.enable(e), m[e] = !0)
    }

    function q(e) {
        !1 !== m[e] && (t.disable(e), m[e] = !1)
    }
    X[3553] = W(3553, 3553, 1), X[34067] = W(34067, 34069, 6), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), j(2929), s.setFunc(3), K(!1), Q(1), j(2884), J(c);
    const Y = {
        [d]: 32774,
        101: 32778,
        102: 32779
    };
    if (i) Y[103] = 32775, Y[104] = 32776;
    else {
        const t = e.get("EXT_blend_minmax");
        null !== t && (Y[103] = t.MIN_EXT, Y[104] = t.MAX_EXT)
    }
    const Z = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };

    function J(e, n, i, r, s, a, o, l) {
        if (e !== c) {
            if (!1 === y && (j(3042), y = !0), 5 === e) s = s || n, a = a || i, o = o || r, n === S && s === T || (t.blendEquationSeparate(Y[n], Y[s]), S = n, T = s), i === b && r === w && a === A && o === E || (t.blendFuncSeparate(Z[i], Z[r], Z[a], Z[o]), b = i, w = r, A = a, E = o), M = e, C = !1;
            else if (e !== M || l !== C) {
                if (S === d && T === d || (t.blendEquation(32774), S = d, T = d), l) switch (e) {
                    case h:
                        t.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case u:
                        t.blendFunc(1, 1);
                        break;
                    case 3:
                        t.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case 4:
                        t.blendFuncSeparate(0, 768, 0, 770)
                } else switch (e) {
                    case h:
                        t.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case u:
                        t.blendFunc(770, 1);
                        break;
                    case 3:
                        t.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case 4:
                        t.blendFunc(0, 768)
                }
                b = null, w = null, A = null, E = null, M = e, C = l
            }
        } else !0 === y && (q(3042), y = !1)
    }

    function K(e) {
        P !== e && (e ? t.frontFace(2304) : t.frontFace(2305), P = e)
    }

    function Q(e) {
        0 !== e ? (j(2884), e !== L && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : q(2884), L = e
    }

    function $(e, n, i) {
        e ? (j(32823), R === n && I === i || (t.polygonOffset(n, i), R = n, I = i)) : q(32823)
    }
    return {
        buffers: {
            color: r,
            depth: s,
            stencil: a
        },
        enable: j,
        disable: q,
        bindFramebuffer: function (e, n) {
            return g[e] !== n && (t.bindFramebuffer(e, n), g[e] = n, i && (36009 === e && (g[36160] = n), 36160 === e && (g[36009] = n)), !0)
        },
        drawBuffers: function (i, r) {
            let s = _,
                a = !1;
            if (i)
                if (s = v.get(r), void 0 === s && (s = [], v.set(r, s)), i.isWebGLMultipleRenderTargets) {
                    const t = i.texture;
                    if (s.length !== t.length || 36064 !== s[0]) {
                        for (let e = 0, n = t.length; e < n; e++) s[e] = 36064 + e;
                        s.length = t.length, a = !0
                    }
                } else 36064 !== s[0] && (s[0] = 36064, a = !0);
            else 1029 !== s[0] && (s[0] = 1029, a = !0);
            a && (n.isWebGL2 ? t.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))
        },
        useProgram: function (e) {
            return x !== e && (t.useProgram(e), x = e, !0)
        },
        setBlending: J,
        setMaterial: function (t, e) {
            t.side === l ? q(2884) : j(2884);
            let n = t.side === o;
            e && (n = !n), K(n), t.blending === h && !1 === t.transparent ? J(c) : J(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite);
            const i = t.stencilWrite;
            a.setTest(i), i && (a.setMask(t.stencilWriteMask), a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), $(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? j(32926) : q(32926)
        },
        setFlipSided: K,
        setCullFace: Q,
        setLineWidth: function (e) {
            e !== D && (N && t.lineWidth(e), D = e)
        },
        setPolygonOffset: $,
        setScissorTest: function (t) {
            t ? j(3089) : q(3089)
        },
        activeTexture: function (e) {
            void 0 === e && (e = 33984 + U - 1), F !== e && (t.activeTexture(e), F = e)
        },
        bindTexture: function (e, n, i) {
            void 0 === i && (i = null === F ? 33984 + U - 1 : F);
            let r = B[i];
            void 0 === r && (r = {
                type: void 0,
                texture: void 0
            }, B[i] = r), r.type === e && r.texture === n || (F !== i && (t.activeTexture(i), F = i), t.bindTexture(e, n || X[e]), r.type = e, r.texture = n)
        },
        unbindTexture: function () {
            const e = B[F];
            void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
        },
        compressedTexImage2D: function () {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (e) {}
        },
        compressedTexImage3D: function () {
            try {
                t.compressedTexImage3D.apply(t, arguments)
            } catch (e) {}
        },
        texImage2D: function () {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (e) {}
        },
        texImage3D: function () {
            try {
                t.texImage3D.apply(t, arguments)
            } catch (e) {}
        },
        updateUBOMapping: function (e, n) {
            let i = f.get(n);
            void 0 === i && (i = new WeakMap, f.set(n, i));
            let r = i.get(e);
            void 0 === r && (r = t.getUniformBlockIndex(n, e.name), i.set(e, r))
        },
        uniformBlockBinding: function (e, n) {
            const i = f.get(n).get(e);
            p.get(n) !== i && (t.uniformBlockBinding(n, i, e.__bindingPointIndex), p.set(n, i))
        },
        texStorage2D: function () {
            try {
                t.texStorage2D.apply(t, arguments)
            } catch (e) {}
        },
        texStorage3D: function () {
            try {
                t.texStorage3D.apply(t, arguments)
            } catch (e) {}
        },
        texSubImage2D: function () {
            try {
                t.texSubImage2D.apply(t, arguments)
            } catch (e) {}
        },
        texSubImage3D: function () {
            try {
                t.texSubImage3D.apply(t, arguments)
            } catch (e) {}
        },
        compressedTexSubImage2D: function () {
            try {
                t.compressedTexSubImage2D.apply(t, arguments)
            } catch (e) {}
        },
        compressedTexSubImage3D: function () {
            try {
                t.compressedTexSubImage3D.apply(t, arguments)
            } catch (e) {}
        },
        scissor: function (e) {
            !1 === G.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), G.copy(e))
        },
        viewport: function (e) {
            !1 === H.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), H.copy(e))
        },
        reset: function () {
            t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === i && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), m = {}, F = null, B = {}, g = {}, v = new WeakMap, _ = [], x = null, y = !1, M = null, S = null, b = null, w = null, T = null, A = null, E = null, C = !1, P = null, L = null, D = null, R = null, I = null, G.set(0, 0, t.canvas.width, t.canvas.height), H.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), a.reset()
        }
    }
}

function Ys(t, e, n, i, r, s, a) {
    const o = r.isWebGL2,
        l = (r.maxTextures, r.maxCubemapSize),
        c = r.maxTextureSize,
        h = r.maxSamples,
        u = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
        d = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent),
        p = new WeakMap;
    let f;
    const m = new WeakMap;
    let g = !1;
    try {
        g = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
    } catch (it) {}

    function v(t, e) {
        return g ? new OffscreenCanvas(t, e) : Ft("canvas")
    }

    function _(t, e, n, i) {
        let r = 1;
        if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                const i = e ? Lt : Math.floor,
                    s = i(r * t.width),
                    a = i(r * t.height);
                void 0 === f && (f = v(s, a));
                const o = n ? v(s, a) : f;
                o.width = s, o.height = a;
                return o.getContext("2d").drawImage(t, 0, 0, s, a), o
            }
            return t
        }
        return t
    }

    function x(t) {
        return Ct(t.width) && Ct(t.height)
    }

    function y(t, e) {
        return t.generateMipmaps && e && t.minFilter !== P && t.minFilter !== R
    }

    function M(e) {
        t.generateMipmap(e)
    }

    function S(n, i, r, s, a = !1) {
        if (!1 === o) return i;
        if (null !== n && void 0 !== t[n]) return t[n];
        let l = i;
        return 6403 === i && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === i && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === i && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === ht && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l
    }

    function b(t, e, n) {
        return !0 === y(t, n) || t.isFramebufferTexture && t.minFilter !== P && t.minFilter !== R ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
    }

    function w(t) {
        return t === P || t === L || t === D ? 9728 : 9729
    }

    function T(t) {
        const e = t.target;
        e.removeEventListener("dispose", T),
            function (t) {
                const e = i.get(t);
                if (void 0 === e.__webglInit) return;
                const n = t.source,
                    r = m.get(n);
                if (r) {
                    const i = r[e.__cacheKey];
                    i.usedTimes--, 0 === i.usedTimes && O(t), 0 === Object.keys(r).length && m.delete(n)
                }
                i.remove(t)
            }(e), e.isVideoTexture && p.delete(e)
    }

    function N(e) {
        const n = e.target;
        n.removeEventListener("dispose", N),
            function (e) {
                const n = e.texture,
                    r = i.get(e),
                    s = i.get(n);
                void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget)
                    for (let i = 0; i < 6; i++) t.deleteFramebuffer(r.__webglFramebuffer[i]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[i]);
                else {
                    if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
                        for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                    r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
                }
                if (e.isWebGLMultipleRenderTargets)
                    for (let o = 0, l = n.length; o < l; o++) {
                        const e = i.get(n[o]);
                        e.__webglTexture && (t.deleteTexture(e.__webglTexture), a.memory.textures--), i.remove(n[o])
                    }
                i.remove(n), i.remove(e)
            }(n)
    }

    function O(e) {
        const n = i.get(e);
        t.deleteTexture(n.__webglTexture);
        const r = e.source;
        delete m.get(r)[n.__cacheKey], a.memory.textures--
    }
    let W = 0;

    function X(t, e) {
        const r = i.get(t);
        if (t.isVideoTexture && function (t) {
                const e = a.render.frame;
                p.get(t) !== e && (p.set(t, e), t.update())
            }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) {
            const n = t.image;
            if (null === n);
            else if (!1 !== n.complete) return void J(r, t, e)
        }
        n.bindTexture(3553, r.__webglTexture, 33984 + e)
    }
    const j = {
            [A]: 10497,
            [E]: 33071,
            [C]: 33648
        },
        q = {
            [P]: 9728,
            [L]: 9984,
            [D]: 9986,
            [R]: 9729,
            [I]: 9985,
            [U]: 9987
        };

    function Y(n, s, a) {
        if (a ? (t.texParameteri(n, 10242, j[s.wrapS]), t.texParameteri(n, 10243, j[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, j[s.wrapR]), t.texParameteri(n, 10240, q[s.magFilter]), t.texParameteri(n, 10241, q[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS !== E || s.wrapT, t.texParameteri(n, 10240, w(s.magFilter)), t.texParameteri(n, 10241, w(s.minFilter)), s.minFilter !== P && s.minFilter), !0 === e.has("EXT_texture_filter_anisotropic")) {
            const a = e.get("EXT_texture_filter_anisotropic");
            if (s.magFilter === P) return;
            if (s.minFilter !== D && s.minFilter !== U) return;
            if (s.type === F && !1 === e.has("OES_texture_float_linear")) return;
            if (!1 === o && s.type === B && !1 === e.has("OES_texture_half_float_linear")) return;
            (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy)
        }
    }

    function Z(e, n) {
        let i = !1;
        void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", T));
        const r = n.source;
        let s = m.get(r);
        void 0 === s && (s = {}, m.set(r, s));
        const o = function (t) {
            const e = [];
            return e.push(t.wrapS), e.push(t.wrapT), e.push(t.wrapR || 0), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join()
        }(n);
        if (o !== e.__cacheKey) {
            void 0 === s[o] && (s[o] = {
                texture: t.createTexture(),
                usedTimes: 0
            }, a.memory.textures++, i = !0), s[o].usedTimes++;
            const r = s[e.__cacheKey];
            void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && O(n)), e.__cacheKey = o, e.__webglTexture = s[o].texture
        }
        return i
    }

    function J(e, r, a) {
        let l = 3553;
        (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = 35866), r.isData3DTexture && (l = 32879);
        const h = Z(e, r),
            u = r.source;
        n.bindTexture(l, e.__webglTexture, 33984 + a);
        const d = i.get(u);
        if (u.version !== d.__version || !0 === h) {
            n.activeTexture(33984 + a), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
            const e = function (t) {
                return !o && (t.wrapS !== E || t.wrapT !== E || t.minFilter !== P && t.minFilter !== R)
            }(r) && !1 === x(r.image);
            let i = _(r.image, e, !1, c);
            i = nt(r, i);
            const p = x(i) || o,
                f = s.convert(r.format, r.encoding);
            let m, g = s.convert(r.type),
                v = S(r.internalFormat, f, g, r.encoding, r.isVideoTexture);
            Y(l, r, p);
            const w = r.mipmaps,
                T = o && !0 !== r.isVideoTexture,
                A = void 0 === d.__version || !0 === h,
                C = b(r, i, p);
            if (r.isDepthTexture) v = 6402, o ? v = r.type === F ? 36012 : r.type === z ? 33190 : r.type === V ? 35056 : 33189 : r.type, r.format === G && 6402 === v && 1012 !== r.type && r.type !== z && (r.type = z, g = s.convert(r.type)), r.format === H && 6402 === v && (v = 34041, r.type !== V && (r.type = V, g = s.convert(r.type))), A && (T ? n.texStorage2D(3553, 1, v, i.width, i.height) : n.texImage2D(3553, 0, v, i.width, i.height, 0, f, g, null));
            else if (r.isDataTexture)
                if (w.length > 0 && p) {
                    T && A && n.texStorage2D(3553, C, v, w[0].width, w[0].height);
                    for (let t = 0, e = w.length; t < e; t++) m = w[t], T ? n.texSubImage2D(3553, t, 0, 0, m.width, m.height, f, g, m.data) : n.texImage2D(3553, t, v, m.width, m.height, 0, f, g, m.data);
                    r.generateMipmaps = !1
                } else T ? (A && n.texStorage2D(3553, C, v, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, i.width, i.height, f, g, i.data)) : n.texImage2D(3553, 0, v, i.width, i.height, 0, f, g, i.data);
            else if (r.isCompressedTexture)
                if (r.isCompressedArrayTexture) {
                    T && A && n.texStorage3D(35866, C, v, w[0].width, w[0].height, i.depth);
                    for (let t = 0, e = w.length; t < e; t++) m = w[t], r.format !== k ? null !== f && (T ? n.compressedTexSubImage3D(35866, t, 0, 0, 0, m.width, m.height, i.depth, f, m.data, 0, 0) : n.compressedTexImage3D(35866, t, v, m.width, m.height, i.depth, 0, m.data, 0, 0)) : T ? n.texSubImage3D(35866, t, 0, 0, 0, m.width, m.height, i.depth, f, g, m.data) : n.texImage3D(35866, t, v, m.width, m.height, i.depth, 0, f, g, m.data)
                } else {
                    T && A && n.texStorage2D(3553, C, v, w[0].width, w[0].height);
                    for (let t = 0, e = w.length; t < e; t++) m = w[t], r.format !== k ? null !== f && (T ? n.compressedTexSubImage2D(3553, t, 0, 0, m.width, m.height, f, m.data) : n.compressedTexImage2D(3553, t, v, m.width, m.height, 0, m.data)) : T ? n.texSubImage2D(3553, t, 0, 0, m.width, m.height, f, g, m.data) : n.texImage2D(3553, t, v, m.width, m.height, 0, f, g, m.data)
                }
            else if (r.isDataArrayTexture) T ? (A && n.texStorage3D(35866, C, v, i.width, i.height, i.depth), n.texSubImage3D(35866, 0, 0, 0, 0, i.width, i.height, i.depth, f, g, i.data)) : n.texImage3D(35866, 0, v, i.width, i.height, i.depth, 0, f, g, i.data);
            else if (r.isData3DTexture) T ? (A && n.texStorage3D(32879, C, v, i.width, i.height, i.depth), n.texSubImage3D(32879, 0, 0, 0, 0, i.width, i.height, i.depth, f, g, i.data)) : n.texImage3D(32879, 0, v, i.width, i.height, i.depth, 0, f, g, i.data);
            else if (r.isFramebufferTexture) {
                if (A)
                    if (T) n.texStorage2D(3553, C, v, i.width, i.height);
                    else {
                        let t = i.width,
                            e = i.height;
                        for (let i = 0; i < C; i++) n.texImage2D(3553, i, v, t, e, 0, f, g, null), t >>= 1, e >>= 1
                    }
            } else if (w.length > 0 && p) {
                T && A && n.texStorage2D(3553, C, v, w[0].width, w[0].height);
                for (let t = 0, e = w.length; t < e; t++) m = w[t], T ? n.texSubImage2D(3553, t, 0, 0, f, g, m) : n.texImage2D(3553, t, v, f, g, m);
                r.generateMipmaps = !1
            } else T ? (A && n.texStorage2D(3553, C, v, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, f, g, i)) : n.texImage2D(3553, 0, v, f, g, i);
            y(r, p) && M(l), d.__version = u.version, r.onUpdate && r.onUpdate(r)
        }
        e.__version = r.version
    }

    function K(e, r, a, o, l) {
        const c = s.convert(a.format, a.encoding),
            h = s.convert(a.type),
            d = S(a.internalFormat, c, h, a.encoding);
        i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, d, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, d, r.width, r.height, 0, c, h, null)), n.bindFramebuffer(36160, e), et(r) ? u.framebufferTexture2DMultisampleEXT(36160, o, l, i.get(a).__webglTexture, 0, tt(r)) : (3553 === l || l >= 34069 && l <= 34074) && t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null)
    }

    function Q(e, n, i) {
        if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i || et(n)) {
                const e = n.depthTexture;
                e && e.isDepthTexture && (e.type === F ? r = 36012 : e.type === z && (r = 33190));
                const i = tt(n);
                et(n) ? u.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
            } else t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e)
        } else if (n.depthBuffer && n.stencilBuffer) {
            const r = tt(n);
            i && !1 === et(n) ? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : et(n) ? u.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t.renderbufferStorage(36161, 34041, n.width, n.height), t.framebufferRenderbuffer(36160, 33306, 36161, e)
        } else {
            const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
            for (let r = 0; r < e.length; r++) {
                const a = e[r],
                    o = s.convert(a.format, a.encoding),
                    l = s.convert(a.type),
                    c = S(a.internalFormat, o, l, a.encoding),
                    h = tt(n);
                i && !1 === et(n) ? t.renderbufferStorageMultisample(36161, h, c, n.width, n.height) : et(n) ? u.renderbufferStorageMultisampleEXT(36161, h, c, n.width, n.height) : t.renderbufferStorage(36161, c, n.width, n.height)
            }
        }
        t.bindRenderbuffer(36161, null)
    }

    function $(e) {
        const r = i.get(e),
            s = !0 === e.isWebGLCubeRenderTarget;
        if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (s) throw new Error("target.depthTexture not supported in Cube render targets");
            ! function (e, r) {
                if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), X(r.depthTexture, 0);
                const s = i.get(r.depthTexture).__webglTexture,
                    a = tt(r);
                if (r.depthTexture.format === G) et(r) ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                else {
                    if (r.depthTexture.format !== H) throw new Error("Unknown depthTexture format");
                    et(r) ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t.framebufferTexture2D(36160, 33306, 3553, s, 0)
                }
            }(r.__webglFramebuffer, e)
        } else if (s) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), Q(r.__webglDepthbuffer[i], e, !1)
        } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), Q(r.__webglDepthbuffer, e, !1);
        n.bindFramebuffer(36160, null)
    }

    function tt(t) {
        return Math.min(h, t.samples)
    }

    function et(t) {
        const n = i.get(t);
        return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
    }

    function nt(t, n) {
        const i = t.encoding,
            r = t.format;
        t.type;
        return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === _t || i !== ct && i === ht && !1 === o && (!0 === e.has("EXT_sRGB") && r === k ? (t.format = _t, t.minFilter = R, t.generateMipmaps = !1) : n = qt.sRGBToLinear(n)), n
    }
    this.allocateTextureUnit = function () {
        const t = W;
        return W += 1, t
    }, this.resetTextureUnits = function () {
        W = 0
    }, this.setTexture2D = X, this.setTexture2DArray = function (t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? J(r, t, e) : n.bindTexture(35866, r.__webglTexture, 33984 + e)
    }, this.setTexture3D = function (t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? J(r, t, e) : n.bindTexture(32879, r.__webglTexture, 33984 + e)
    }, this.setTextureCube = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version ? function (e, r, a) {
            if (6 !== r.image.length) return;
            const c = Z(e, r),
                h = r.source;
            n.bindTexture(34067, e.__webglTexture, 33984 + a);
            const u = i.get(h);
            if (h.version !== u.__version || !0 === c) {
                n.activeTexture(33984 + a), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
                const e = r.isCompressedTexture || r.image[0].isCompressedTexture,
                    i = r.image[0] && r.image[0].isDataTexture,
                    d = [];
                for (let t = 0; t < 6; t++) d[t] = e || i ? i ? r.image[t].image : r.image[t] : _(r.image[t], !1, !0, l), d[t] = nt(r, d[t]);
                const p = d[0],
                    f = x(p) || o,
                    m = s.convert(r.format, r.encoding),
                    g = s.convert(r.type),
                    v = S(r.internalFormat, m, g, r.encoding),
                    w = o && !0 !== r.isVideoTexture,
                    T = void 0 === u.__version || !0 === c;
                let A, E = b(r, p, f);
                if (Y(34067, r, f), e) {
                    w && T && n.texStorage2D(34067, E, v, p.width, p.height);
                    for (let t = 0; t < 6; t++) {
                        A = d[t].mipmaps;
                        for (let e = 0; e < A.length; e++) {
                            const i = A[e];
                            r.format !== k ? null !== m && (w ? n.compressedTexSubImage2D(34069 + t, e, 0, 0, i.width, i.height, m, i.data) : n.compressedTexImage2D(34069 + t, e, v, i.width, i.height, 0, i.data)) : w ? n.texSubImage2D(34069 + t, e, 0, 0, i.width, i.height, m, g, i.data) : n.texImage2D(34069 + t, e, v, i.width, i.height, 0, m, g, i.data)
                        }
                    }
                } else {
                    A = r.mipmaps, w && T && (A.length > 0 && E++, n.texStorage2D(34067, E, v, d[0].width, d[0].height));
                    for (let t = 0; t < 6; t++)
                        if (i) {
                            w ? n.texSubImage2D(34069 + t, 0, 0, 0, d[t].width, d[t].height, m, g, d[t].data) : n.texImage2D(34069 + t, 0, v, d[t].width, d[t].height, 0, m, g, d[t].data);
                            for (let e = 0; e < A.length; e++) {
                                const i = A[e].image[t].image;
                                w ? n.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, m, g, i.data) : n.texImage2D(34069 + t, e + 1, v, i.width, i.height, 0, m, g, i.data)
                            }
                        } else {
                            w ? n.texSubImage2D(34069 + t, 0, 0, 0, m, g, d[t]) : n.texImage2D(34069 + t, 0, v, m, g, d[t]);
                            for (let e = 0; e < A.length; e++) {
                                const i = A[e];
                                w ? n.texSubImage2D(34069 + t, e + 1, 0, 0, m, g, i.image[t]) : n.texImage2D(34069 + t, e + 1, v, m, g, i.image[t])
                            }
                        }
                }
                y(r, f) && M(34067), u.__version = h.version, r.onUpdate && r.onUpdate(r)
            }
            e.__version = r.version
        }(a, e, r) : n.bindTexture(34067, a.__webglTexture, 33984 + r)
    }, this.rebindTextures = function (t, e, n) {
        const r = i.get(t);
        void 0 !== e && K(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && $(t)
    }, this.setupRenderTarget = function (e) {
        const l = e.texture,
            c = i.get(e),
            h = i.get(l);
        e.addEventListener("dispose", N), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t.createTexture()), h.__version = l.version, a.memory.textures++);
        const u = !0 === e.isWebGLCubeRenderTarget,
            d = !0 === e.isWebGLMultipleRenderTargets,
            p = x(e) || o;
        if (u) {
            c.__webglFramebuffer = [];
            for (let e = 0; e < 6; e++) c.__webglFramebuffer[e] = t.createFramebuffer()
        } else {
            if (c.__webglFramebuffer = t.createFramebuffer(), d && r.drawBuffers) {
                const n = e.texture;
                for (let e = 0, r = n.length; e < r; e++) {
                    const r = i.get(n[e]);
                    void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++)
                }
            }
            if (o && e.samples > 0 && !1 === et(e)) {
                const i = d ? l : [l];
                c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = [], n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                for (let n = 0; n < i.length; n++) {
                    const r = i[n];
                    c.__webglColorRenderbuffer[n] = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
                    const a = s.convert(r.format, r.encoding),
                        o = s.convert(r.type),
                        l = S(r.internalFormat, a, o, r.encoding, !0 === e.isXRRenderTarget),
                        h = tt(e);
                    t.renderbufferStorageMultisample(36161, h, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + n, 36161, c.__webglColorRenderbuffer[n])
                }
                t.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), Q(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null)
            }
        }
        if (u) {
            n.bindTexture(34067, h.__webglTexture), Y(34067, l, p);
            for (let t = 0; t < 6; t++) K(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
            y(l, p) && M(34067), n.unbindTexture()
        } else if (d) {
            const t = e.texture;
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r],
                    a = i.get(s);
                n.bindTexture(3553, a.__webglTexture), Y(3553, s, p), K(c.__webglFramebuffer, e, s, 36064 + r, 3553), y(s, p) && M(3553)
            }
            n.unbindTexture()
        } else {
            let t = 3553;
            (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && o && (t = e.isWebGL3DRenderTarget ? 32879 : 35866), n.bindTexture(t, h.__webglTexture), Y(t, l, p), K(c.__webglFramebuffer, e, l, 36064, t), y(l, p) && M(t), n.unbindTexture()
        }
        e.depthBuffer && $(e)
    }, this.updateRenderTargetMipmap = function (t) {
        const e = x(t) || o,
            r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
        for (let s = 0, a = r.length; s < a; s++) {
            const a = r[s];
            if (y(a, e)) {
                const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                    r = i.get(a).__webglTexture;
                n.bindTexture(e, r), M(e), n.unbindTexture()
            }
        }
    }, this.updateMultisampleRenderTarget = function (e) {
        if (o && e.samples > 0 && !1 === et(e)) {
            const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
                s = e.width,
                a = e.height;
            let o = 16384;
            const l = [],
                c = e.stencilBuffer ? 33306 : 36096,
                h = i.get(e),
                u = !0 === e.isWebGLMultipleRenderTargets;
            if (u)
                for (let e = 0; e < r.length; e++) n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), n.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
            n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, h.__webglFramebuffer);
            for (let n = 0; n < r.length; n++) {
                l.push(36064 + n), e.depthBuffer && l.push(c);
                const p = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                if (!1 === p && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[n]), !0 === p && (t.invalidateFramebuffer(36008, [c]), t.invalidateFramebuffer(36009, [c])), u) {
                    const e = i.get(r[n]).__webglTexture;
                    t.framebufferTexture2D(36009, 36064, 3553, e, 0)
                }
                t.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), d && t.invalidateFramebuffer(36008, l)
            }
            if (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), u)
                for (let e = 0; e < r.length; e++) {
                    n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, h.__webglColorRenderbuffer[e]);
                    const s = i.get(r[e]).__webglTexture;
                    n.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, s, 0)
                }
            n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer)
        }
    }, this.setupDepthRenderbuffer = $, this.setupFrameBufferTexture = K, this.useMultisampledRTT = et
}

function Zs(t, e, n) {
    const i = n.isWebGL2;
    return {
        convert: function (n, r = null) {
            let s;
            if (n === O) return 5121;
            if (1017 === n) return 32819;
            if (1018 === n) return 32820;
            if (1010 === n) return 5120;
            if (1011 === n) return 5122;
            if (1012 === n) return 5123;
            if (1013 === n) return 5124;
            if (n === z) return 5125;
            if (n === F) return 5126;
            if (n === B) return i ? 5131 : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
            if (1021 === n) return 6406;
            if (n === k) return 6408;
            if (1024 === n) return 6409;
            if (1025 === n) return 6410;
            if (n === G) return 6402;
            if (n === H) return 34041;
            if (n === _t) return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
            if (n === W) return 6403;
            if (1029 === n) return 36244;
            if (n === X) return 33319;
            if (1031 === n) return 33320;
            if (1033 === n) return 36249;
            if (n === j || n === q || n === Y || n === Z)
                if (r === ht) {
                    if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
                    if (n === j) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === q) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === Y) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === Z) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else {
                    if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
                    if (n === j) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (n === q) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (n === Y) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (n === Z) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
                } if (n === J || 35841 === n || n === K || 35843 === n) {
                if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
                if (n === J) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (35841 === n) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === K) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (35843 === n) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (n === Q) return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (n === $ || n === tt) {
                if (s = e.get("WEBGL_compressed_texture_etc"), null === s) return null;
                if (n === $) return r === ht ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (n === tt) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC
            }
            if (n === et || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) {
                if (s = e.get("WEBGL_compressed_texture_astc"), null === s) return null;
                if (n === et) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (37809 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (37810 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (37811 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (37812 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (37813 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (37814 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (37815 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (37816 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (37817 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (37818 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (37819 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (37820 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (37821 === n) return r === ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
            }
            if (n === nt) {
                if (s = e.get("EXT_texture_compression_bptc"), null === s) return null;
                if (n === nt) return r === ht ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT
            }
            if (36283 === n || 36284 === n || 36285 === n || 36286 === n) {
                if (s = e.get("EXT_texture_compression_rgtc"), null === s) return null;
                if (n === nt) return s.COMPRESSED_RED_RGTC1_EXT;
                if (36284 === n) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (36285 === n) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (36286 === n) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            }
            return n === V ? i ? 34042 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[n] ? t[n] : null
        }
    }
}
class Js extends pi {
    constructor(t = []) {
        super(), this.isArrayCamera = !0, this.cameras = t
    }
}
class Ks extends sn {
    constructor() {
        super(), this.isGroup = !0, this.type = "Group"
    }
}
const Qs = {
    type: "move"
};
class $s {
    constructor() {
        this._targetRay = null, this._grip = null, this._hand = null
    }
    getHandSpace() {
        return null === this._hand && (this._hand = new Ks, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand
    }
    getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new Ks, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new ie, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new ie), this._targetRay
    }
    getGripSpace() {
        return null === this._grip && (this._grip = new Ks, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new ie, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new ie), this._grip
    }
    dispatchEvent(t) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
    }
    connect(t) {
        if (t && t.hand) {
            const e = this._hand;
            if (e)
                for (const n of t.hand.values()) this._getHandJoint(e, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: t
        }), this
    }
    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
    }
    update(t, e, n) {
        let i = null,
            r = null,
            s = null;
        const a = this._targetRay,
            o = this._grip,
            l = this._hand;
        if (t && "visible-blurred" !== e.session.visibilityState) {
            if (l && t.hand) {
                s = !0;
                for (const s of t.hand.values()) {
                    const t = e.getJointPose(s, n),
                        i = this._getHandJoint(l, s);
                    null !== t && (i.matrix.fromArray(t.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.jointRadius = t.radius), i.visible = null !== t
                }
                const i = l.joints["index-finger-tip"],
                    r = l.joints["thumb-tip"],
                    a = i.position.distanceTo(r.position),
                    o = .02,
                    c = .005;
                l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }))
            } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            null !== a && (i = e.getPose(t.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Qs)))
        }
        return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this
    }
    _getHandJoint(t, e) {
        if (void 0 === t.joints[e.jointName]) {
            const n = new Ks;
            n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n)
        }
        return t.joints[e.jointName]
    }
}
class ta extends Kt {
    constructor(t, e, n, i, r, s, a, o, l, c) {
        if ((c = void 0 !== c ? c : G) !== G && c !== H) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && c === G && (n = z), void 0 === n && c === H && (n = V), super(null, i, r, s, a, o, c, n, l), this.isDepthTexture = !0, this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== a ? a : P, this.minFilter = void 0 !== o ? o : P, this.flipY = !1, this.generateMipmaps = !1
    }
}
class ea extends xt {
    constructor(t, e) {
        super();
        const n = this;
        let i = null,
            r = 1,
            s = null,
            a = "local-floor",
            o = 1,
            l = null,
            c = null,
            h = null,
            u = null,
            d = null,
            p = null;
        const f = e.getContextAttributes();
        let m = null,
            g = null;
        const v = [],
            _ = [],
            x = new Set,
            y = new Map,
            M = new pi;
        M.layers.enable(1), M.viewport = new Qt;
        const S = new pi;
        S.layers.enable(2), S.viewport = new Qt;
        const b = [M, S],
            w = new Js;
        w.layers.enable(1), w.layers.enable(2);
        let T = null,
            A = null;

        function E(t) {
            const e = _.indexOf(t.inputSource);
            if (-1 === e) return;
            const n = v[e];
            void 0 !== n && n.dispatchEvent({
                type: t.type,
                data: t.inputSource
            })
        }

        function C() {
            i.removeEventListener("select", E), i.removeEventListener("selectstart", E), i.removeEventListener("selectend", E), i.removeEventListener("squeeze", E), i.removeEventListener("squeezestart", E), i.removeEventListener("squeezeend", E), i.removeEventListener("end", C), i.removeEventListener("inputsourceschange", P);
            for (let t = 0; t < v.length; t++) {
                const e = _[t];
                null !== e && (_[t] = null, v[t].disconnect(e))
            }
            T = null, A = null, t.setRenderTarget(m), d = null, u = null, h = null, i = null, g = null, U.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            })
        }

        function P(t) {
            for (let e = 0; e < t.removed.length; e++) {
                const n = t.removed[e],
                    i = _.indexOf(n);
                i >= 0 && (_[i] = null, v[i].disconnect(n))
            }
            for (let e = 0; e < t.added.length; e++) {
                const n = t.added[e];
                let i = _.indexOf(n);
                if (-1 === i) {
                    for (let t = 0; t < v.length; t++) {
                        if (t >= _.length) {
                            _.push(n), i = t;
                            break
                        }
                        if (null === _[t]) {
                            _[t] = n, i = t;
                            break
                        }
                    }
                    if (-1 === i) break
                }
                const r = v[i];
                r && r.connect(n)
            }
        }
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
            let e = v[t];
            return void 0 === e && (e = new $s, v[t] = e), e.getTargetRaySpace()
        }, this.getControllerGrip = function (t) {
            let e = v[t];
            return void 0 === e && (e = new $s, v[t] = e), e.getGripSpace()
        }, this.getHand = function (t) {
            let e = v[t];
            return void 0 === e && (e = new $s, v[t] = e), e.getHandSpace()
        }, this.setFramebufferScaleFactor = function (t) {
            r = t, n.isPresenting
        }, this.setReferenceSpaceType = function (t) {
            a = t, n.isPresenting
        }, this.getReferenceSpace = function () {
            return l || s
        }, this.setReferenceSpace = function (t) {
            l = t
        }, this.getBaseLayer = function () {
            return null !== u ? u : d
        }, this.getBinding = function () {
            return h
        }, this.getFrame = function () {
            return p
        }, this.getSession = function () {
            return i
        }, this.setSession = async function (c) {
            if (i = c, null !== i) {
                if (m = t.getRenderTarget(), i.addEventListener("select", E), i.addEventListener("selectstart", E), i.addEventListener("selectend", E), i.addEventListener("squeeze", E), i.addEventListener("squeezestart", E), i.addEventListener("squeezeend", E), i.addEventListener("end", C), i.addEventListener("inputsourceschange", P), !0 !== f.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) {
                    const n = {
                        antialias: void 0 !== i.renderState.layers || f.antialias,
                        alpha: f.alpha,
                        depth: f.depth,
                        stencil: f.stencil,
                        framebufferScaleFactor: r
                    };
                    d = new XRWebGLLayer(i, e, n), i.updateRenderState({
                        baseLayer: d
                    }), g = new $t(d.framebufferWidth, d.framebufferHeight, {
                        format: k,
                        type: O,
                        encoding: t.outputEncoding,
                        stencilBuffer: f.stencil
                    })
                } else {
                    let n = null,
                        s = null,
                        a = null;
                    f.depth && (a = f.stencil ? 35056 : 33190, n = f.stencil ? H : G, s = f.stencil ? V : z);
                    const o = {
                        colorFormat: 32856,
                        depthFormat: a,
                        scaleFactor: r
                    };
                    h = new XRWebGLBinding(i, e), u = h.createProjectionLayer(o), i.updateRenderState({
                        layers: [u]
                    }), g = new $t(u.textureWidth, u.textureHeight, {
                        format: k,
                        type: O,
                        depthTexture: new ta(u.textureWidth, u.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, n),
                        stencilBuffer: f.stencil,
                        encoding: t.outputEncoding,
                        samples: f.antialias ? 4 : 0
                    });
                    t.properties.get(g).__ignoreDepthValues = u.ignoreDepthValues
                }
                g.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await i.requestReferenceSpace(a), U.setContext(i), U.start(), n.isPresenting = !0, n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        };
        const L = new ie,
            D = new ie;

        function R(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
        }
        this.updateCamera = function (t) {
            if (null === i) return;
            w.near = S.near = M.near = t.near, w.far = S.far = M.far = t.far, T === w.near && A === w.far || (i.updateRenderState({
                depthNear: w.near,
                depthFar: w.far
            }), T = w.near, A = w.far);
            const e = t.parent,
                n = w.cameras;
            R(w, e);
            for (let i = 0; i < n.length; i++) R(n[i], e);
            2 === n.length ? function (t, e, n) {
                    L.setFromMatrixPosition(e.matrixWorld), D.setFromMatrixPosition(n.matrixWorld);
                    const i = L.distanceTo(D),
                        r = e.projectionMatrix.elements,
                        s = n.projectionMatrix.elements,
                        a = r[14] / (r[10] - 1),
                        o = r[14] / (r[10] + 1),
                        l = (r[9] + 1) / r[5],
                        c = (r[9] - 1) / r[5],
                        h = (r[8] - 1) / r[0],
                        u = (s[8] + 1) / s[0],
                        d = a * h,
                        p = a * u,
                        f = i / (-h + u),
                        m = f * -h;
                    e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                    const g = a + f,
                        v = o + f,
                        _ = d - m,
                        x = p + (i - m),
                        y = l * o / v * g,
                        M = c * o / v * g;
                    t.projectionMatrix.makePerspective(_, x, y, M, g, v), t.projectionMatrixInverse.copy(t.projectionMatrix).invert()
                }(w, M, S) : w.projectionMatrix.copy(M.projectionMatrix),
                function (t, e, n) {
                    null === n ? t.matrix.copy(e.matrixWorld) : (t.matrix.copy(n.matrixWorld), t.matrix.invert(), t.matrix.multiply(e.matrixWorld));
                    t.matrix.decompose(t.position, t.quaternion, t.scale), t.updateMatrixWorld(!0);
                    const i = t.children;
                    for (let r = 0, s = i.length; r < s; r++) i[r].updateMatrixWorld(!0);
                    t.projectionMatrix.copy(e.projectionMatrix), t.projectionMatrixInverse.copy(e.projectionMatrixInverse), t.isPerspectiveCamera && (t.fov = 2 * bt * Math.atan(1 / t.projectionMatrix.elements[5]), t.zoom = 1)
                }(t, w, e)
        }, this.getCamera = function () {
            return w
        }, this.getFoveation = function () {
            if (null !== u || null !== d) return o
        }, this.setFoveation = function (t) {
            o = t, null !== u && (u.fixedFoveation = t), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t)
        }, this.getPlanes = function () {
            return x
        };
        let I = null;
        const U = new Ti;
        U.setAnimationLoop((function (e, i) {
            if (c = i.getViewerPose(l || s), p = i, null !== c) {
                const e = c.views;
                null !== d && (t.setRenderTargetFramebuffer(g, d.framebuffer), t.setRenderTarget(g));
                let n = !1;
                e.length !== w.cameras.length && (w.cameras.length = 0, n = !0);
                for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    let s = null;
                    if (null !== d) s = d.getViewport(r);
                    else {
                        const e = h.getViewSubImage(u, r);
                        s = e.viewport, 0 === i && (t.setRenderTargetTextures(g, e.colorTexture, u.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(g))
                    }
                    let a = b[i];
                    void 0 === a && (a = new pi, a.layers.enable(i), a.viewport = new Qt, b[i] = a), a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.quaternion, a.scale), a.projectionMatrix.fromArray(r.projectionMatrix), a.projectionMatrixInverse.copy(a.projectionMatrix).invert(), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && (w.matrix.copy(a.matrix), w.matrix.decompose(w.position, w.quaternion, w.scale)), !0 === n && w.cameras.push(a)
                }
            }
            for (let t = 0; t < v.length; t++) {
                const e = _[t],
                    n = v[t];
                null !== e && void 0 !== n && n.update(e, i, l || s)
            }
            if (I && I(e, i), i.detectedPlanes) {
                n.dispatchEvent({
                    type: "planesdetected",
                    data: i.detectedPlanes
                });
                let t = null;
                for (const e of x) i.detectedPlanes.has(e) || (null === t && (t = []), t.push(e));
                if (null !== t)
                    for (const e of t) x.delete(e), y.delete(e), n.dispatchEvent({
                        type: "planeremoved",
                        data: e
                    });
                for (const e of i.detectedPlanes)
                    if (x.has(e)) {
                        const t = y.get(e);
                        e.lastChangedTime > t && (y.set(e, e.lastChangedTime), n.dispatchEvent({
                            type: "planechanged",
                            data: e
                        }))
                    } else x.add(e), y.set(e, i.lastChangedTime), n.dispatchEvent({
                        type: "planeadded",
                        data: e
                    })
            }
            p = null
        })), this.setAnimationLoop = function (t) {
            I = t
        }, this.dispose = function () {}
    }
}

function na(t, e) {
    function n(t, e) {
        !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix)
    }

    function i(i, r) {
        i.opacity.value = r.opacity, r.color && i.diffuse.value.copy(r.color), r.emissive && i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (i.map.value = r.map, n(r.map, i.mapTransform)), r.alphaMap && (i.alphaMap.value = r.alphaMap, n(r.alphaMap, i.alphaMapTransform)), r.bumpMap && (i.bumpMap.value = r.bumpMap, n(r.bumpMap, i.bumpMapTransform), i.bumpScale.value = r.bumpScale, r.side === o && (i.bumpScale.value *= -1)), r.normalMap && (i.normalMap.value = r.normalMap, n(r.normalMap, i.normalMapTransform), i.normalScale.value.copy(r.normalScale), r.side === o && i.normalScale.value.negate()), r.displacementMap && (i.displacementMap.value = r.displacementMap, n(r.displacementMap, i.displacementMapTransform), i.displacementScale.value = r.displacementScale, i.displacementBias.value = r.displacementBias), r.emissiveMap && (i.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, i.emissiveMapTransform)), r.specularMap && (i.specularMap.value = r.specularMap, n(r.specularMap, i.specularMapTransform)), r.alphaTest > 0 && (i.alphaTest.value = r.alphaTest);
        const s = e.get(r).envMap;
        if (s && (i.envMap.value = s, i.flipEnvMap.value = s.isCubeTexture && !1 === s.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = r.reflectivity, i.ior.value = r.ior, i.refractionRatio.value = r.refractionRatio), r.lightMap) {
            i.lightMap.value = r.lightMap;
            const e = !0 === t.useLegacyLights ? Math.PI : 1;
            i.lightMapIntensity.value = r.lightMapIntensity * e, n(r.lightMap, i.lightMapTransform)
        }
        r.aoMap && (i.aoMap.value = r.aoMap, i.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, i.aoMapTransform))
    }
    return {
        refreshFogUniforms: function (e, n) {
            n.color.getRGB(e.fogColor.value, ci(t)), n.isFog ? (e.fogNear.value = n.near, e.fogFar.value = n.far) : n.isFogExp2 && (e.fogDensity.value = n.density)
        },
        refreshMaterialUniforms: function (t, r, s, a, l) {
            r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t, r) : r.isMeshToonMaterial ? (i(t, r), function (t, e) {
                e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(t, r)) : r.isMeshPhongMaterial ? (i(t, r), function (t, e) {
                t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
            }(t, r)) : r.isMeshStandardMaterial ? (i(t, r), function (t, i) {
                t.metalness.value = i.metalness, i.metalnessMap && (t.metalnessMap.value = i.metalnessMap, n(i.metalnessMap, t.metalnessMapTransform));
                t.roughness.value = i.roughness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap, n(i.roughnessMap, t.roughnessMapTransform));
                const r = e.get(i).envMap;
                r && (t.envMapIntensity.value = i.envMapIntensity)
            }(t, r), r.isMeshPhysicalMaterial && function (t, e, i) {
                t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap, n(e.sheenColorMap, t.sheenColorMapTransform)), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap, n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform)));
                e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap, n(e.clearcoatMap, t.clearcoatMapTransform)), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap, n(e.clearcoatRoughnessMap, t.clearcoatRoughnessMapTransform)), e.clearcoatNormalMap && (t.clearcoatNormalMap.value = e.clearcoatNormalMap, n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform), t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), e.side === o && t.clearcoatNormalScale.value.negate()));
                e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap, n(e.iridescenceMap, t.iridescenceMapTransform)), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap, n(e.iridescenceThicknessMap, t.iridescenceThicknessMapTransform)));
                e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap, n(e.transmissionMap, t.transmissionMapTransform)), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap, n(e.thicknessMap, t.thicknessMapTransform)), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
                t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularColorMap && (t.specularColorMap.value = e.specularColorMap, n(e.specularColorMap, t.specularColorMapTransform));
                e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap, n(e.specularIntensityMap, t.specularIntensityMapTransform))
            }(t, r, l)) : r.isMeshMatcapMaterial ? (i(t, r), function (t, e) {
                e.matcap && (t.matcap.value = e.matcap)
            }(t, r)) : r.isMeshDepthMaterial ? i(t, r) : r.isMeshDistanceMaterial ? (i(t, r), function (t, n) {
                const i = e.get(n).light;
                t.referencePosition.value.setFromMatrixPosition(i.matrixWorld), t.nearDistance.value = i.shadow.camera.near, t.farDistance.value = i.shadow.camera.far
            }(t, r)) : r.isMeshNormalMaterial ? i(t, r) : r.isLineBasicMaterial ? (function (t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, e.map && (t.map.value = e.map, n(e.map, t.mapTransform))
            }(t, r), r.isLineDashedMaterial && function (t, e) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }(t, r)) : r.isPointsMaterial ? function (t, e, i, r) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * r, e.map && (t.map.value = e.map, n(e.map, t.uvTransform));
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest)
            }(t, r, s, a) : r.isSpriteMaterial ? function (t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map, n(e.map, t.mapTransform));
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest)
            }(t, r) : r.isShadowMaterial ? (t.color.value.copy(r.color), t.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1)
        }
    }
}

function ia(t, e, n, i) {
    let r = {},
        s = {},
        a = [];
    const o = n.isWebGL2 ? t.getParameter(35375) : 0;

    function l(t, e, n) {
        const i = t.value;
        if (void 0 === n[e]) {
            if ("number" == typeof i) n[e] = i;
            else {
                const t = Array.isArray(i) ? i : [i],
                    r = [];
                for (let e = 0; e < t.length; e++) r.push(t[e].clone());
                n[e] = r
            }
            return !0
        }
        if ("number" == typeof i) {
            if (n[e] !== i) return n[e] = i, !0
        } else {
            const t = Array.isArray(n[e]) ? n[e] : [n[e]],
                r = Array.isArray(i) ? i : [i];
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (!1 === n.equals(r[e])) return n.copy(r[e]), !0
            }
        }
        return !1
    }

    function c(t) {
        const e = {
            boundary: 0,
            storage: 0
        };
        return "number" == typeof t ? (e.boundary = 4, e.storage = 4) : t.isVector2 ? (e.boundary = 8, e.storage = 8) : t.isVector3 || t.isColor ? (e.boundary = 16, e.storage = 12) : t.isVector4 ? (e.boundary = 16, e.storage = 16) : t.isMatrix3 ? (e.boundary = 48, e.storage = 48) : t.isMatrix4 ? (e.boundary = 64, e.storage = 64) : t.isTexture, e
    }

    function h(e) {
        const n = e.target;
        n.removeEventListener("dispose", h);
        const i = a.indexOf(n.__bindingPointIndex);
        a.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete s[n.id]
    }
    return {
        bind: function (t, e) {
            const n = e.program;
            i.uniformBlockBinding(t, n)
        },
        update: function (n, u) {
            let d = r[n.id];
            void 0 === d && (! function (t) {
                const e = t.uniforms;
                let n = 0;
                const i = 16;
                let r = 0;
                for (let s = 0, a = e.length; s < a; s++) {
                    const t = e[s],
                        a = {
                            boundary: 0,
                            storage: 0
                        },
                        o = Array.isArray(t.value) ? t.value : [t.value];
                    for (let e = 0, n = o.length; e < n; e++) {
                        const t = c(o[e]);
                        a.boundary += t.boundary, a.storage += t.storage
                    }
                    if (t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, s > 0) {
                        r = n % i;
                        0 !== r && i - r - a.boundary < 0 && (n += i - r, t.__offset = n)
                    }
                    n += a.storage
                }
                r = n % i, r > 0 && (n += i - r);
                t.__size = n, t.__cache = {}
            }(n), d = function (e) {
                const n = function () {
                    for (let t = 0; t < o; t++)
                        if (-1 === a.indexOf(t)) return a.push(t), t;
                    return 0
                }();
                e.__bindingPointIndex = n;
                const i = t.createBuffer(),
                    r = e.__size,
                    s = e.usage;
                return t.bindBuffer(35345, i), t.bufferData(35345, r, s), t.bindBuffer(35345, null), t.bindBufferBase(35345, n, i), i
            }(n), r[n.id] = d, n.addEventListener("dispose", h));
            const p = u.program;
            i.updateUBOMapping(n, p);
            const f = e.render.frame;
            s[n.id] !== f && (! function (e) {
                const n = r[e.id],
                    i = e.uniforms,
                    s = e.__cache;
                t.bindBuffer(35345, n);
                for (let r = 0, a = i.length; r < a; r++) {
                    const e = i[r];
                    if (!0 === l(e, r, s)) {
                        const n = e.__offset,
                            i = Array.isArray(e.value) ? e.value : [e.value];
                        let r = 0;
                        for (let s = 0; s < i.length; s++) {
                            const a = i[s],
                                o = c(a);
                            "number" == typeof a ? (e.__data[0] = a, t.bufferSubData(35345, n + r, e.__data)) : a.isMatrix3 ? (e.__data[0] = a.elements[0], e.__data[1] = a.elements[1], e.__data[2] = a.elements[2], e.__data[3] = a.elements[0], e.__data[4] = a.elements[3], e.__data[5] = a.elements[4], e.__data[6] = a.elements[5], e.__data[7] = a.elements[0], e.__data[8] = a.elements[6], e.__data[9] = a.elements[7], e.__data[10] = a.elements[8], e.__data[11] = a.elements[0]) : (a.toArray(e.__data, r), r += o.storage / Float32Array.BYTES_PER_ELEMENT)
                        }
                        t.bufferSubData(35345, n, e.__data)
                    }
                }
                t.bindBuffer(35345, null)
            }(n), s[n.id] = f)
        },
        dispose: function () {
            for (const e in r) t.deleteBuffer(r[e]);
            a = [], r = {}, s = {}
        }
    }
}

function ra() {
    const t = Ft("canvas");
    return t.style.display = "block", t
}
class sa {
    constructor(e = {}) {
        const {
            canvas: n = ra(),
            context: i = null,
            depth: r = !0,
            stencil: s = !0,
            alpha: c = !1,
            antialias: h = !1,
            premultipliedAlpha: u = !0,
            preserveDrawingBuffer: d = !1,
            powerPreference: p = "default",
            failIfMajorPerformanceCaveat: f = !1
        } = e;
        let m;
        this.isWebGLRenderer = !0, m = null !== i ? i.getContextAttributes().alpha : c;
        let v = null,
            _ = null;
        const x = [],
            y = [];
        this.domElement = n, this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = ct, this.useLegacyLights = !0, this.toneMapping = g, this.toneMappingExposure = 1;
        const M = this;
        let S = !1,
            b = 0,
            w = 0,
            T = null,
            A = -1,
            E = null;
        const C = new Qt,
            P = new Qt;
        let L = null,
            D = n.width,
            R = n.height,
            I = 1,
            N = null,
            z = null;
        const V = new Qt(0, 0, D, R),
            G = new Qt(0, 0, D, R);
        let H = !1;
        const W = new wi;
        let X = !1,
            j = !1,
            q = null;
        const Y = new Ie,
            Z = new ie,
            J = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };

        function K() {
            return null === T ? I : 1
        }
        let Q, $, tt, et, nt, it, rt, st, at, ot, lt, ht, ut, dt, pt, ft, mt, gt, vt, _t, xt, yt, Mt, St, bt = i;

        function wt(t, e) {
            for (let i = 0; i < t.length; i++) {
                const r = t[i],
                    s = n.getContext(r, e);
                if (null !== s) return s
            }
            return null
        }
        try {
            const e = {
                alpha: !0,
                depth: r,
                stencil: s,
                antialias: h,
                premultipliedAlpha: u,
                preserveDrawingBuffer: d,
                powerPreference: p,
                failIfMajorPerformanceCaveat: f
            };
            if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${t}`), n.addEventListener("webglcontextlost", Et, !1), n.addEventListener("webglcontextrestored", Ct, !1), n.addEventListener("webglcontextcreationerror", Pt, !1), null === bt) {
                const t = ["webgl2", "webgl", "experimental-webgl"];
                if (!0 === M.isWebGL1Renderer && t.shift(), bt = wt(t, e), null === bt) throw wt(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
            void 0 === bt.getShaderPrecisionFormat && (bt.getShaderPrecisionFormat = function () {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (kt) {
            throw kt
        }

        function Tt() {
            Q = new er(bt), $ = new Ni(bt, Q, e), Q.init($), yt = new Zs(bt, Q, $), tt = new qs(bt, Q, $), et = new rr, nt = new Is, it = new Ys(bt, Q, tt, nt, $, yt, et), rt = new zi(M), st = new tr(M), at = new Ai(bt, $), Mt = new Ii(bt, Q, at, $), ot = new nr(bt, at, et, Mt), lt = new lr(bt, ot, at, et), vt = new or(bt, $, it), ft = new Oi(nt), ht = new Rs(M, rt, st, Q, $, Mt, ft), ut = new na(M, nt), dt = new zs, pt = new Hs(Q, $), gt = new Ri(M, rt, st, tt, lt, m, u), mt = new js(M, lt, $), St = new ia(bt, et, $, tt), _t = new Ui(bt, Q, et, $), xt = new ir(bt, Q, et, $), et.programs = ht.programs, M.capabilities = $, M.extensions = Q, M.properties = nt, M.renderLists = dt, M.shadowMap = mt, M.state = tt, M.info = et
        }
        Tt();
        const At = new ea(M, bt);

        function Et(t) {
            t.preventDefault(), S = !0
        }

        function Ct() {
            S = !1;
            const t = et.autoReset,
                e = mt.enabled,
                n = mt.autoUpdate,
                i = mt.needsUpdate,
                r = mt.type;
            Tt(), et.autoReset = t, mt.enabled = e, mt.autoUpdate = n, mt.needsUpdate = i, mt.type = r
        }

        function Pt(t) {}

        function Lt(t) {
            const e = t.target;
            e.removeEventListener("dispose", Lt),
                function (t) {
                    (function (t) {
                        const e = nt.get(t).programs;
                        void 0 !== e && (e.forEach((function (t) {
                            ht.releaseProgram(t)
                        })), t.isShaderMaterial && ht.releaseShaderCache(t))
                    })(t), nt.remove(t)
                }(e)
        }
        this.xr = At, this.getContext = function () {
            return bt
        }, this.getContextAttributes = function () {
            return bt.getContextAttributes()
        }, this.forceContextLoss = function () {
            const t = Q.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function () {
            const t = Q.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function () {
            return I
        }, this.setPixelRatio = function (t) {
            void 0 !== t && (I = t, this.setSize(D, R, !1))
        }, this.getSize = function (t) {
            return t.set(D, R)
        }, this.setSize = function (t, e, i = !0) {
            At.isPresenting || (D = t, R = e, n.width = Math.floor(t * I), n.height = Math.floor(e * I), !0 === i && (n.style.width = t + "px", n.style.height = e + "px"), this.setViewport(0, 0, t, e))
        }, this.getDrawingBufferSize = function (t) {
            return t.set(D * I, R * I).floor()
        }, this.setDrawingBufferSize = function (t, e, i) {
            D = t, R = e, I = i, n.width = Math.floor(t * i), n.height = Math.floor(e * i), this.setViewport(0, 0, t, e)
        }, this.getCurrentViewport = function (t) {
            return t.copy(C)
        }, this.getViewport = function (t) {
            return t.copy(V)
        }, this.setViewport = function (t, e, n, i) {
            t.isVector4 ? V.set(t.x, t.y, t.z, t.w) : V.set(t, e, n, i), tt.viewport(C.copy(V).multiplyScalar(I).floor())
        }, this.getScissor = function (t) {
            return t.copy(G)
        }, this.setScissor = function (t, e, n, i) {
            t.isVector4 ? G.set(t.x, t.y, t.z, t.w) : G.set(t, e, n, i), tt.scissor(P.copy(G).multiplyScalar(I).floor())
        }, this.getScissorTest = function () {
            return H
        }, this.setScissorTest = function (t) {
            tt.setScissorTest(H = t)
        }, this.setOpaqueSort = function (t) {
            N = t
        }, this.setTransparentSort = function (t) {
            z = t
        }, this.getClearColor = function (t) {
            return t.copy(gt.getClearColor())
        }, this.setClearColor = function () {
            gt.setClearColor.apply(gt, arguments)
        }, this.getClearAlpha = function () {
            return gt.getClearAlpha()
        }, this.setClearAlpha = function () {
            gt.setClearAlpha.apply(gt, arguments)
        }, this.clear = function (t = !0, e = !0, n = !0) {
            let i = 0;
            t && (i |= 16384), e && (i |= 256), n && (i |= 1024), bt.clear(i)
        }, this.clearColor = function () {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function () {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function () {
            this.clear(!1, !1, !0)
        }, this.dispose = function () {
            n.removeEventListener("webglcontextlost", Et, !1), n.removeEventListener("webglcontextrestored", Ct, !1), n.removeEventListener("webglcontextcreationerror", Pt, !1), dt.dispose(), pt.dispose(), nt.dispose(), rt.dispose(), st.dispose(), lt.dispose(), Mt.dispose(), St.dispose(), ht.dispose(), At.dispose(), At.removeEventListener("sessionstart", Rt), At.removeEventListener("sessionend", It), q && (q.dispose(), q = null), Ut.stop()
        }, this.renderBufferDirect = function (t, e, n, i, r, s) {
            null === e && (e = J);
            const a = r.isMesh && r.matrixWorld.determinant() < 0,
                o = function (t, e, n, i, r) {
                    !0 !== e.isScene && (e = J);
                    it.resetTextureUnits();
                    const s = e.fog,
                        a = i.isMeshStandardMaterial ? e.environment : null,
                        o = null === T ? M.outputEncoding : !0 === T.isXRRenderTarget ? T.texture.encoding : ct,
                        l = (i.isMeshStandardMaterial ? st : rt).get(i.envMap || a),
                        c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
                        h = !!i.normalMap && !!n.attributes.tangent,
                        u = !!n.morphAttributes.position,
                        d = !!n.morphAttributes.normal,
                        p = !!n.morphAttributes.color,
                        f = i.toneMapped ? M.toneMapping : g,
                        m = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
                        v = void 0 !== m ? m.length : 0,
                        x = nt.get(i),
                        y = _.state.lights;
                    if (!0 === X && (!0 === j || t !== E)) {
                        const e = t === E && i.id === A;
                        ft.setState(i, t, e)
                    }
                    let S = !1;
                    i.version === x.__version ? x.needsLights && x.lightsStateVersion !== y.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? S = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? S = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === i.fog && x.fog !== s ? S = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === ft.numPlanes && x.numIntersection === ft.numIntersection ? (x.vertexAlphas !== c || x.vertexTangents !== h || x.morphTargets !== u || x.morphNormals !== d || x.morphColors !== p || x.toneMapping !== f || !0 === $.isWebGL2 && x.morphTargetsCount !== v) && (S = !0) : S = !0 : S = !0 : S = !0 : (S = !0, x.__version = i.version);
                    let b = x.currentProgram;
                    !0 === S && (b = Bt(i, e, r));
                    let w = !1,
                        C = !1,
                        P = !1;
                    const L = b.getUniforms(),
                        D = x.uniforms;
                    tt.useProgram(b.program) && (w = !0, C = !0, P = !0);
                    i.id !== A && (A = i.id, C = !0);
                    if (w || E !== t) {
                        if (L.setValue(bt, "projectionMatrix", t.projectionMatrix), $.logarithmicDepthBuffer && L.setValue(bt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), E !== t && (E = t, C = !0, P = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                            const e = L.map.cameraPosition;
                            void 0 !== e && e.setValue(bt, Z.setFromMatrixPosition(t.matrixWorld))
                        }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && L.setValue(bt, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && L.setValue(bt, "viewMatrix", t.matrixWorldInverse)
                    }
                    if (r.isSkinnedMesh) {
                        L.setOptional(bt, r, "bindMatrix"), L.setOptional(bt, r, "bindMatrixInverse");
                        const t = r.skeleton;
                        t && $.floatVertexTextures && (null === t.boneTexture && t.computeBoneTexture(), L.setValue(bt, "boneTexture", t.boneTexture, it), L.setValue(bt, "boneTextureSize", t.boneTextureSize))
                    }
                    const U = n.morphAttributes;
                    (void 0 !== U.position || void 0 !== U.normal || void 0 !== U.color && !0 === $.isWebGL2) && vt.update(r, n, b);
                    (C || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, L.setValue(bt, "receiveShadow", r.receiveShadow));
                    i.isMeshGouraudMaterial && null !== i.envMap && (D.envMap.value = l, D.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
                    C && (L.setValue(bt, "toneMappingExposure", M.toneMappingExposure), x.needsLights && (O = P, (N = D).ambientLightColor.needsUpdate = O, N.lightProbe.needsUpdate = O, N.directionalLights.needsUpdate = O, N.directionalLightShadows.needsUpdate = O, N.pointLights.needsUpdate = O, N.pointLightShadows.needsUpdate = O, N.spotLights.needsUpdate = O, N.spotLightShadows.needsUpdate = O, N.rectAreaLights.needsUpdate = O, N.hemisphereLights.needsUpdate = O), s && !0 === i.fog && ut.refreshFogUniforms(D, s), ut.refreshMaterialUniforms(D, i, I, R, q), ds.upload(bt, x.uniformsList, D, it));
                    var N, O;
                    i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (ds.upload(bt, x.uniformsList, D, it), i.uniformsNeedUpdate = !1);
                    i.isSpriteMaterial && L.setValue(bt, "center", r.center);
                    if (L.setValue(bt, "modelViewMatrix", r.modelViewMatrix), L.setValue(bt, "normalMatrix", r.normalMatrix), L.setValue(bt, "modelMatrix", r.matrixWorld), i.isShaderMaterial || i.isRawShaderMaterial) {
                        const t = i.uniformsGroups;
                        for (let e = 0, n = t.length; e < n; e++)
                            if ($.isWebGL2) {
                                const n = t[e];
                                St.update(n, b), St.bind(n, b)
                            }
                    }
                    return b
                }(t, e, n, i, r);
            tt.setMaterial(i, a);
            let l = n.index,
                c = 1;
            !0 === i.wireframe && (l = ot.getWireframeAttribute(n), c = 2);
            const h = n.drawRange,
                u = n.attributes.position;
            let d = h.start * c,
                p = (h.start + h.count) * c;
            null !== s && (d = Math.max(d, s.start * c), p = Math.min(p, (s.start + s.count) * c)), null !== l ? (d = Math.max(d, 0), p = Math.min(p, l.count)) : null != u && (d = Math.max(d, 0), p = Math.min(p, u.count));
            const f = p - d;
            if (f < 0 || f === 1 / 0) return;
            let m;
            Mt.setup(r, i, o, n, l);
            let v = _t;
            if (null !== l && (m = at.get(l), v = xt, v.setIndex(m)), r.isMesh) !0 === i.wireframe ? (tt.setLineWidth(i.wireframeLinewidth * K()), v.setMode(1)) : v.setMode(4);
            else if (r.isLine) {
                let t = i.linewidth;
                void 0 === t && (t = 1), tt.setLineWidth(t * K()), r.isLineSegments ? v.setMode(1) : r.isLineLoop ? v.setMode(2) : v.setMode(3)
            } else r.isPoints ? v.setMode(0) : r.isSprite && v.setMode(4);
            if (r.isInstancedMesh) v.renderInstances(d, f, r.count);
            else if (n.isInstancedBufferGeometry) {
                const t = void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
                    e = Math.min(n.instanceCount, t);
                v.renderInstances(d, f, e)
            } else v.render(d, f)
        }, this.compile = function (t, e) {
            function n(t, e, n) {
                !0 === t.transparent && t.side === l && !1 === t.forceSinglePass ? (t.side = o, t.needsUpdate = !0, Bt(t, e, n), t.side = a, t.needsUpdate = !0, Bt(t, e, n), t.side = l) : Bt(t, e, n)
            }
            _ = pt.get(t), _.init(), y.push(_), t.traverseVisible((function (t) {
                t.isLight && t.layers.test(e.layers) && (_.pushLight(t), t.castShadow && _.pushShadow(t))
            })), _.setupLights(M.useLegacyLights), t.traverse((function (e) {
                const i = e.material;
                if (i)
                    if (Array.isArray(i))
                        for (let r = 0; r < i.length; r++) {
                            n(i[r], t, e)
                        } else n(i, t, e)
            })), y.pop(), _ = null
        };
        let Dt = null;

        function Rt() {
            Ut.stop()
        }

        function It() {
            Ut.start()
        }
        const Ut = new Ti;

        function Nt(t, e, n, i) {
            if (!1 === t.visible) return;
            if (t.layers.test(e.layers))
                if (t.isGroup) n = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
            else if (t.isLight) _.pushLight(t), t.castShadow && _.pushShadow(t);
            else if (t.isSprite) {
                if (!t.frustumCulled || W.intersectsSprite(t)) {
                    i && Z.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Y);
                    const e = lt.update(t),
                        r = t.material;
                    r.visible && v.push(t, e, r, n, Z.z, null)
                }
            } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== et.render.frame && (t.skeleton.update(), t.skeleton.frame = et.render.frame), !t.frustumCulled || W.intersectsObject(t))) {
                i && Z.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Y);
                const e = lt.update(t),
                    r = t.material;
                if (Array.isArray(r)) {
                    const i = e.groups;
                    for (let s = 0, a = i.length; s < a; s++) {
                        const a = i[s],
                            o = r[a.materialIndex];
                        o && o.visible && v.push(t, e, o, n, Z.z, a)
                    }
                } else r.visible && v.push(t, e, r, n, Z.z, null)
            }
            const r = t.children;
            for (let s = 0, a = r.length; s < a; s++) Nt(r[s], e, n, i)
        }

        function Ot(t, e, n, i) {
            const r = t.opaque,
                s = t.transmissive,
                a = t.transparent;
            _.setupLightsView(n), !0 === X && ft.setGlobalState(M.clippingPlanes, n), s.length > 0 && function (t, e, n, i) {
                if (null === q) {
                    const t = $.isWebGL2;
                    q = new $t(1024, 1024, {
                        generateMipmaps: !0,
                        type: Q.has("EXT_color_buffer_half_float") ? B : O,
                        minFilter: U,
                        samples: t && !0 === h ? 4 : 0
                    })
                }
                const r = M.getRenderTarget();
                M.setRenderTarget(q), M.clear();
                const s = M.toneMapping;
                M.toneMapping = g, zt(t, n, i), it.updateMultisampleRenderTarget(q), it.updateRenderTargetMipmap(q);
                let a = !1;
                for (let c = 0, h = e.length; c < h; c++) {
                    const t = e[c],
                        r = t.object,
                        s = t.geometry,
                        h = t.material,
                        u = t.group;
                    if (h.side === l && r.layers.test(i.layers)) {
                        const t = h.side;
                        h.side = o, h.needsUpdate = !0, Ft(r, n, i, s, h, u), h.side = t, h.needsUpdate = !0, a = !0
                    }
                }!0 === a && (it.updateMultisampleRenderTarget(q), it.updateRenderTargetMipmap(q));
                M.setRenderTarget(r), M.toneMapping = s
            }(r, s, e, n), i && tt.viewport(C.copy(i)), r.length > 0 && zt(r, e, n), s.length > 0 && zt(s, e, n), a.length > 0 && zt(a, e, n), tt.buffers.depth.setTest(!0), tt.buffers.depth.setMask(!0), tt.buffers.color.setMask(!0), tt.setPolygonOffset(!1)
        }

        function zt(t, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r],
                    a = s.object,
                    o = s.geometry,
                    l = null === i ? s.material : i,
                    c = s.group;
                a.layers.test(n.layers) && Ft(a, e, n, o, l, c)
            }
        }

        function Ft(t, e, n, i, r, s) {
            t.onBeforeRender(M, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(M, e, n, i, t, s), !0 === r.transparent && r.side === l && !1 === r.forceSinglePass ? (r.side = o, r.needsUpdate = !0, M.renderBufferDirect(n, e, i, r, t, s), r.side = a, r.needsUpdate = !0, M.renderBufferDirect(n, e, i, r, t, s), r.side = l) : M.renderBufferDirect(n, e, i, r, t, s), t.onAfterRender(M, e, n, i, r, s)
        }

        function Bt(t, e, n) {
            !0 !== e.isScene && (e = J);
            const i = nt.get(t),
                r = _.state.lights,
                s = _.state.shadowsArray,
                a = r.state.version,
                o = ht.getParameters(t, r.state, s, e, n),
                l = ht.getProgramCacheKey(o);
            let c = i.programs;
            i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? st : rt).get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Lt), c = new Map, i.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (i.currentProgram === h && i.lightsStateVersion === a) return Vt(t, o), h
            } else o.uniforms = ht.getUniforms(t), t.onBuild(n, o, M), t.onBeforeCompile(o, M), h = ht.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
            const u = i.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ft.uniform), Vt(t, o), i.needsLights = function (t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
            }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const d = h.getUniforms(),
                p = ds.seqWithValue(d.seq, u);
            return i.currentProgram = h, i.uniformsList = p, h
        }

        function Vt(t, e) {
            const n = nt.get(t);
            n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping
        }
        Ut.setAnimationLoop((function (t) {
            Dt && Dt(t)
        })), "undefined" != typeof self && Ut.setContext(self), this.setAnimationLoop = function (t) {
            Dt = t, At.setAnimationLoop(t), null === t ? Ut.stop() : Ut.start()
        }, At.addEventListener("sessionstart", Rt), At.addEventListener("sessionend", It), this.render = function (t, e) {
            if (void 0 !== e && !0 !== e.isCamera) return;
            if (!0 === S) return;
            !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === At.enabled && !0 === At.isPresenting && (!0 === At.cameraAutoUpdate && At.updateCamera(e), e = At.getCamera()), !0 === t.isScene && t.onBeforeRender(M, t, e, T), _ = pt.get(t, y.length), _.init(), y.push(_), Y.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), W.setFromProjectionMatrix(Y), j = this.localClippingEnabled, X = ft.init(this.clippingPlanes, j), v = dt.get(t, x.length), v.init(), x.push(v), Nt(t, e, 0, M.sortObjects), v.finish(), !0 === M.sortObjects && v.sort(N, z), !0 === X && ft.beginShadows();
            const n = _.state.shadowsArray;
            if (mt.render(n, t, e), !0 === X && ft.endShadows(), !0 === this.info.autoReset && this.info.reset(), gt.render(v, t), _.setupLights(M.useLegacyLights), e.isArrayCamera) {
                const n = e.cameras;
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    Ot(v, t, i, i.viewport)
                }
            } else Ot(v, t, e);
            null !== T && (it.updateMultisampleRenderTarget(T), it.updateRenderTargetMipmap(T)), !0 === t.isScene && t.onAfterRender(M, t, e), Mt.resetDefaultState(), A = -1, E = null, y.pop(), _ = y.length > 0 ? y[y.length - 1] : null, x.pop(), v = x.length > 0 ? x[x.length - 1] : null
        }, this.getActiveCubeFace = function () {
            return b
        }, this.getActiveMipmapLevel = function () {
            return w
        }, this.getRenderTarget = function () {
            return T
        }, this.setRenderTargetTextures = function (t, e, n) {
            nt.get(t.texture).__webglTexture = e, nt.get(t.depthTexture).__webglTexture = n;
            const i = nt.get(t);
            i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === Q.has("WEBGL_multisampled_render_to_texture") && (i.__useRenderToTexture = !1))
        }, this.setRenderTargetFramebuffer = function (t, e) {
            const n = nt.get(t);
            n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e
        }, this.setRenderTarget = function (t, e = 0, n = 0) {
            T = t, b = e, w = n;
            let i = !0,
                r = null,
                s = !1,
                a = !1;
            if (t) {
                const n = nt.get(t);
                void 0 !== n.__useDefaultFramebuffer ? (tt.bindFramebuffer(36160, null), i = !1) : void 0 === n.__webglFramebuffer ? it.setupRenderTarget(t) : n.__hasExternalTextures && it.rebindTextures(t, nt.get(t.texture).__webglTexture, nt.get(t.depthTexture).__webglTexture);
                const o = t.texture;
                (o.isData3DTexture || o.isDataArrayTexture || o.isCompressedArrayTexture) && (a = !0);
                const l = nt.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (r = l[e], s = !0) : r = $.isWebGL2 && t.samples > 0 && !1 === it.useMultisampledRTT(t) ? nt.get(t).__webglMultisampledFramebuffer : l, C.copy(t.viewport), P.copy(t.scissor), L = t.scissorTest
            } else C.copy(V).multiplyScalar(I).floor(), P.copy(G).multiplyScalar(I).floor(), L = H;
            if (tt.bindFramebuffer(36160, r) && $.drawBuffers && i && tt.drawBuffers(t, r), tt.viewport(C), tt.scissor(P), tt.setScissorTest(L), s) {
                const i = nt.get(t.texture);
                bt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
            } else if (a) {
                const i = nt.get(t.texture),
                    r = e || 0;
                bt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
            }
            A = -1
        }, this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
            if (!t || !t.isWebGLRenderTarget) return;
            let o = nt.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                tt.bindFramebuffer(36160, o);
                try {
                    const a = t.texture,
                        o = a.format,
                        l = a.type;
                    if (o !== k && yt.convert(o) !== bt.getParameter(35739)) return;
                    const c = l === B && (Q.has("EXT_color_buffer_half_float") || $.isWebGL2 && Q.has("EXT_color_buffer_float"));
                    if (!(l === O || yt.convert(l) === bt.getParameter(35738) || l === F && ($.isWebGL2 || Q.has("OES_texture_float") || Q.has("WEBGL_color_buffer_float")) || c)) return;
                    e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && bt.readPixels(e, n, i, r, yt.convert(o), yt.convert(l), s)
                } finally {
                    const t = null !== T ? nt.get(T).__webglFramebuffer : null;
                    tt.bindFramebuffer(36160, t)
                }
            }
        }, this.copyFramebufferToTexture = function (t, e, n = 0) {
            const i = Math.pow(2, -n),
                r = Math.floor(e.image.width * i),
                s = Math.floor(e.image.height * i);
            it.setTexture2D(e, 0), bt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s), tt.unbindTexture()
        }, this.copyTextureToTexture = function (t, e, n, i = 0) {
            const r = e.image.width,
                s = e.image.height,
                a = yt.convert(n.format),
                o = yt.convert(n.type);
            it.setTexture2D(n, 0), bt.pixelStorei(37440, n.flipY), bt.pixelStorei(37441, n.premultiplyAlpha), bt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? bt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? bt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : bt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && bt.generateMipmap(3553), tt.unbindTexture()
        }, this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
            if (M.isWebGL1Renderer) return;
            const s = t.max.x - t.min.x + 1,
                a = t.max.y - t.min.y + 1,
                o = t.max.z - t.min.z + 1,
                l = yt.convert(i.format),
                c = yt.convert(i.type);
            let h;
            if (i.isData3DTexture) it.setTexture3D(i, 0), h = 32879;
            else {
                if (!i.isDataArrayTexture) return;
                it.setTexture2DArray(i, 0), h = 35866
            }
            bt.pixelStorei(37440, i.flipY), bt.pixelStorei(37441, i.premultiplyAlpha), bt.pixelStorei(3317, i.unpackAlignment);
            const u = bt.getParameter(3314),
                d = bt.getParameter(32878),
                p = bt.getParameter(3316),
                f = bt.getParameter(3315),
                m = bt.getParameter(32877),
                g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            bt.pixelStorei(3314, g.width), bt.pixelStorei(32878, g.height), bt.pixelStorei(3316, t.min.x), bt.pixelStorei(3315, t.min.y), bt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isData3DTexture ? bt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data) : n.isCompressedArrayTexture ? bt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, g.data) : bt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g), bt.pixelStorei(3314, u), bt.pixelStorei(32878, d), bt.pixelStorei(3316, p), bt.pixelStorei(3315, f), bt.pixelStorei(32877, m), 0 === r && i.generateMipmaps && bt.generateMipmap(h), tt.unbindTexture()
        }, this.initTexture = function (t) {
            t.isCubeTexture ? it.setTextureCube(t, 0) : t.isData3DTexture ? it.setTexture3D(t, 0) : t.isDataArrayTexture || t.isCompressedArrayTexture ? it.setTexture2DArray(t, 0) : it.setTexture2D(t, 0), tt.unbindTexture()
        }, this.resetState = function () {
            b = 0, w = 0, T = null, tt.reset(), Mt.reset()
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }
    get physicallyCorrectLights() {
        return !this.useLegacyLights
    }
    set physicallyCorrectLights(t) {
        this.useLegacyLights = !t
    }
}(class extends sa {}).prototype.isWebGL1Renderer = !0;
class aa extends sn {
    constructor() {
        super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }
    copy(t, e) {
        return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e
    }
    get autoUpdate() {
        return this.matrixWorldAutoUpdate
    }
    set autoUpdate(t) {
        this.matrixWorldAutoUpdate = t
    }
}
class oa {
    constructor(t, e) {
        this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = gt, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = wt()
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        !0 === t && this.version++
    }
    setUsage(t) {
        return this.usage = t, this
    }
    copy(t) {
        return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
    }
    copyAt(t, e, n) {
        t *= this.stride, n *= e.stride;
        for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
        return this
    }
    set(t, e = 0) {
        return this.array.set(t, e), this
    }
    clone(t) {
        void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = wt()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(e, this.stride);
        return n.setUsage(this.usage), n
    }
    onUpload(t) {
        return this.onUploadCallback = t, this
    }
    toJSON(t) {
        return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = wt()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
const la = new ie;
class ca {
    constructor(t, e, n, i = !1) {
        this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(t) {
        this.data.needsUpdate = t
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.data.count; e < n; e++) la.fromBufferAttribute(this, e), la.applyMatrix4(t), this.setXYZ(e, la.x, la.y, la.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++) la.fromBufferAttribute(this, e), la.applyNormalMatrix(t), this.setXYZ(e, la.x, la.y, la.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++) la.fromBufferAttribute(this, e), la.transformDirection(t), this.setXYZ(e, la.x, la.y, la.z);
        return this
    }
    setX(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this
    }
    setY(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this
    }
    setZ(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this
    }
    setW(t, e) {
        return this.normalized && (e = Rt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this
    }
    getX(t) {
        let e = this.data.array[t * this.data.stride + this.offset];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    getY(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 1];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    getZ(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 2];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    getW(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 3];
        return this.normalized && (e = Dt(e, this.array)), e
    }
    setXY(t, e, n) {
        return t = t * this.data.stride + this.offset, this.normalized && (e = Rt(e, this.array), n = Rt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
    }
    setXYZ(t, e, n, i) {
        return t = t * this.data.stride + this.offset, this.normalized && (e = Rt(e, this.array), n = Rt(n, this.array), i = Rt(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
    }
    setXYZW(t, e, n, i, r) {
        return t = t * this.data.stride + this.offset, this.normalized && (e = Rt(e, this.array), n = Rt(n, this.array), i = Rt(i, this.array), r = Rt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
    }
    clone(t) {
        if (void 0 === t) {
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const n = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
            }
            return new Pn(new this.array.constructor(t), this.itemSize, this.normalized)
        }
        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ca(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
    }
    toJSON(t) {
        if (void 0 === t) {
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const n = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        }
        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        }
    }
}
const ha = new ie,
    ua = new Qt,
    da = new Qt,
    pa = new ie,
    fa = new Ie,
    ma = new ie;
class ga extends ri {
    constructor(t, e) {
        super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ie, this.bindMatrixInverse = new Ie, this.boundingBox = null, this.boundingSphere = null
    }
    computeBoundingBox() {
        const t = this.geometry;
        null === this.boundingBox && (this.boundingBox = new ae), this.boundingBox.makeEmpty();
        const e = t.getAttribute("position");
        for (let n = 0; n < e.count; n++) ma.fromBufferAttribute(e, n), this.applyBoneTransform(n, ma), this.boundingBox.expandByPoint(ma)
    }
    computeBoundingSphere() {
        const t = this.geometry;
        null === this.boundingSphere && (this.boundingSphere = new we), this.boundingSphere.makeEmpty();
        const e = t.getAttribute("position");
        for (let n = 0; n < e.count; n++) ma.fromBufferAttribute(e, n), this.applyBoneTransform(n, ma), this.boundingSphere.expandByPoint(ma)
    }
    copy(t, e) {
        return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
    }
    bind(t, e) {
        this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const t = new Qt,
            e = this.geometry.attributes.skinWeight;
        for (let n = 0, i = e.count; n < i; n++) {
            t.fromBufferAttribute(e, n);
            const i = 1 / t.manhattanLength();
            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
        }
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode && this.bindMatrixInverse.copy(this.bindMatrix).invert()
    }
    applyBoneTransform(t, e) {
        const n = this.skeleton,
            i = this.geometry;
        ua.fromBufferAttribute(i.attributes.skinIndex, t), da.fromBufferAttribute(i.attributes.skinWeight, t), ha.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
        for (let r = 0; r < 4; r++) {
            const t = da.getComponent(r);
            if (0 !== t) {
                const i = ua.getComponent(r);
                fa.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]), e.addScaledVector(pa.copy(ha).applyMatrix4(fa), t)
            }
        }
        return e.applyMatrix4(this.bindMatrixInverse)
    }
    boneTransform(t, e) {
        return this.applyBoneTransform(t, e)
    }
}
class va extends sn {
    constructor() {
        super(), this.isBone = !0, this.type = "Bone"
    }
}
class _a extends Kt {
    constructor(t = null, e = 1, n = 1, i, r, s, a, o, l = P, c = P, h, u) {
        super(null, s, a, o, l, c, i, r, h, u), this.isDataTexture = !0, this.image = {
            data: t,
            width: e,
            height: n
        }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}
const xa = new Ie,
    ya = new Ie;
class Ma {
    constructor(t = [], e = []) {
        this.uuid = wt(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
    }
    init() {
        const t = this.bones,
            e = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
        else if (t.length !== e.length) {
            this.boneInverses = [];
            for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new Ie)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = new Ie;
            this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e)
        }
    }
    pose() {
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && e.matrixWorld.copy(this.boneInverses[t]).invert()
        }
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
        }
    }
    update() {
        const t = this.bones,
            e = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture;
        for (let r = 0, s = t.length; r < s; r++) {
            const i = t[r] ? t[r].matrixWorld : ya;
            xa.multiplyMatrices(i, e[r]), xa.toArray(n, 16 * r)
        }
        null !== i && (i.needsUpdate = !0)
    }
    clone() {
        return new Ma(this.bones, this.boneInverses)
    }
    computeBoneTexture() {
        let t = Math.sqrt(4 * this.bones.length);
        t = Pt(t), t = Math.max(t, 4);
        const e = new Float32Array(t * t * 4);
        e.set(this.boneMatrices);
        const n = new _a(e, t, t, k, F);
        return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this
    }
    getBoneByName(t) {
        for (let e = 0, n = this.bones.length; e < n; e++) {
            const n = this.bones[e];
            if (n.name === t) return n
        }
    }
    dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
    }
    fromJSON(t, e) {
        this.uuid = t.uuid;
        for (let n = 0, i = t.bones.length; n < i; n++) {
            let i = e[t.bones[n]];
            void 0 === i && (i = new va), this.bones.push(i), this.boneInverses.push((new Ie).fromArray(t.boneInverses[n]))
        }
        return this.init(), this
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        t.uuid = this.uuid;
        const e = this.bones,
            n = this.boneInverses;
        for (let i = 0, r = e.length; i < r; i++) {
            const r = e[i];
            t.bones.push(r.uuid);
            const s = n[i];
            t.boneInverses.push(s.toArray())
        }
        return t
    }
}
class Sa extends Pn {
    constructor(t, e, n, i = 1) {
        super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i
    }
    copy(t) {
        return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
    }
    toJSON() {
        const t = super.toJSON();
        return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
    }
}
const ba = new Ie,
    wa = new Ie,
    Ta = [],
    Aa = new ae,
    Ea = new Ie,
    Ca = new ri,
    Pa = new we;
class La extends ri {
    constructor(t, e, n) {
        super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Sa(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
        for (let i = 0; i < n; i++) this.setMatrixAt(i, Ea)
    }
    computeBoundingBox() {
        const t = this.geometry,
            e = this.count;
        null === this.boundingBox && (this.boundingBox = new ae), null === t.boundingBox && t.computeBoundingBox(), this.boundingBox.makeEmpty();
        for (let n = 0; n < e; n++) this.getMatrixAt(n, ba), Aa.copy(t.boundingBox).applyMatrix4(ba), this.boundingBox.union(Aa)
    }
    computeBoundingSphere() {
        const t = this.geometry,
            e = this.count;
        null === this.boundingSphere && (this.boundingSphere = new we), null === t.boundingSphere && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
        for (let n = 0; n < e; n++) this.getMatrixAt(n, ba), Pa.copy(t.boundingSphere).applyMatrix4(ba), this.boundingSphere.union(Pa)
    }
    copy(t, e) {
        return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this
    }
    getColorAt(t, e) {
        e.fromArray(this.instanceColor.array, 3 * t)
    }
    getMatrixAt(t, e) {
        e.fromArray(this.instanceMatrix.array, 16 * t)
    }
    raycast(t, e) {
        const n = this.matrixWorld,
            i = this.count;
        if (Ca.geometry = this.geometry, Ca.material = this.material, void 0 !== Ca.material && (null === this.boundingSphere && this.computeBoundingSphere(), Pa.copy(this.boundingSphere), Pa.applyMatrix4(n), !1 !== t.ray.intersectsSphere(Pa)))
            for (let r = 0; r < i; r++) {
                this.getMatrixAt(r, ba), wa.multiplyMatrices(n, ba), Ca.matrixWorld = wa, Ca.raycast(t, Ta);
                for (let t = 0, n = Ta.length; t < n; t++) {
                    const n = Ta[t];
                    n.instanceId = r, n.object = this, e.push(n)
                }
                Ta.length = 0
            }
    }
    setColorAt(t, e) {
        null === this.instanceColor && (this.instanceColor = new Sa(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
    }
    setMatrixAt(t, e) {
        e.toArray(this.instanceMatrix.array, 16 * t)
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Da extends xn {
    constructor(t) {
        super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new wn(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this
    }
}
const Ra = new ie,
    Ia = new ie,
    Ua = new Ie,
    Na = new Re,
    Oa = new we;
class za extends sn {
    constructor(t = new Vn, e = new Da) {
        super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
    }
    computeLineDistances() {
        const t = this.geometry;
        if (null === t.index) {
            const e = t.attributes.position,
                n = [0];
            for (let t = 1, i = e.count; t < i; t++) Ra.fromBufferAttribute(e, t - 1), Ia.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += Ra.distanceTo(Ia);
            t.setAttribute("lineDistance", new Rn(n, 1))
        }
        return this
    }
    raycast(t, e) {
        const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Line.threshold,
            s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(), Oa.copy(n.boundingSphere), Oa.applyMatrix4(i), Oa.radius += r, !1 === t.ray.intersectsSphere(Oa)) return;
        Ua.copy(i).invert(), Na.copy(t.ray).applyMatrix4(Ua);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = new ie,
            c = new ie,
            h = new ie,
            u = new ie,
            d = this.isLineSegments ? 2 : 1,
            p = n.index,
            f = n.attributes.position;
        if (null !== p) {
            for (let n = Math.max(0, s.start), i = Math.min(p.count, s.start + s.count) - 1; n < i; n += d) {
                const i = p.getX(n),
                    r = p.getX(n + 1);
                l.fromBufferAttribute(f, i), c.fromBufferAttribute(f, r);
                if (Na.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const s = t.ray.origin.distanceTo(u);
                s < t.near || s > t.far || e.push({
                    distance: s,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        } else {
            for (let n = Math.max(0, s.start), i = Math.min(f.count, s.start + s.count) - 1; n < i; n += d) {
                l.fromBufferAttribute(f, n), c.fromBufferAttribute(f, n + 1);
                if (Na.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const i = t.ray.origin.distanceTo(u);
                i < t.near || i > t.far || e.push({
                    distance: i,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes,
            e = Object.keys(t);
        if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
                }
            }
        }
    }
}
const Fa = new ie,
    Ba = new ie;
class Va extends za {
    constructor(t, e) {
        super(t, e), this.isLineSegments = !0, this.type = "LineSegments"
    }
    computeLineDistances() {
        const t = this.geometry;
        if (null === t.index) {
            const e = t.attributes.position,
                n = [];
            for (let t = 0, i = e.count; t < i; t += 2) Fa.fromBufferAttribute(e, t), Ba.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + Fa.distanceTo(Ba);
            t.setAttribute("lineDistance", new Rn(n, 1))
        }
        return this
    }
}
class ka extends za {
    constructor(t, e) {
        super(t, e), this.isLineLoop = !0, this.type = "LineLoop"
    }
}
class Ga extends xn {
    constructor(t) {
        super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new wn(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
    }
}
const Ha = new Ie,
    Wa = new Re,
    Xa = new we,
    ja = new ie;
class qa extends sn {
    constructor(t = new Vn, e = new Ga) {
        super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
    }
    raycast(t, e) {
        const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Points.threshold,
            s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(), Xa.copy(n.boundingSphere), Xa.applyMatrix4(i), Xa.radius += r, !1 === t.ray.intersectsSphere(Xa)) return;
        Ha.copy(i).invert(), Wa.copy(t.ray).applyMatrix4(Ha);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = n.index,
            c = n.attributes.position;
        if (null !== l) {
            for (let n = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); n < r; n++) {
                const r = l.getX(n);
                ja.fromBufferAttribute(c, r), Ya(ja, r, o, i, t, e, this)
            }
        } else {
            for (let n = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count); n < r; n++) ja.fromBufferAttribute(c, n), Ya(ja, n, o, i, t, e, this)
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes,
            e = Object.keys(t);
        if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
                }
            }
        }
    }
}

function Ya(t, e, n, i, r, s, a) {
    const o = Wa.distanceSqToPoint(t);
    if (o < n) {
        const n = new ie;
        Wa.closestPointToPoint(t, n), n.applyMatrix4(i);
        const l = r.ray.origin.distanceTo(n);
        if (l < r.near || l > r.far) return;
        s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: e,
            face: null,
            object: a
        })
    }
}
class Za extends Kt {
    constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
        super(null, s, a, o, l, c, i, r, h, u), this.isCompressedTexture = !0, this.image = {
            width: e,
            height: n
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }
}
class Ja extends Za {
    constructor(t, e, n, i, r, s) {
        super(t, e, n, r, s), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = E
    }
}
class Ka {
    constructor() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }
    getPoint() {
        return null
    }
    getPointAt(t, e) {
        const n = this.getUtoTmapping(t);
        return this.getPoint(n, e)
    }
    getPoints(t = 5) {
        const e = [];
        for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
        return e
    }
    getSpacedPoints(t = 5) {
        const e = [];
        for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
        return e
    }
    getLength() {
        const t = this.getLengths();
        return t[t.length - 1]
    }
    getLengths(t = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        const e = [];
        let n, i = this.getPoint(0),
            r = 0;
        e.push(0);
        for (let s = 1; s <= t; s++) n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
        return this.cacheArcLengths = e, e
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths()
    }
    getUtoTmapping(t, e) {
        const n = this.getLengths();
        let i = 0;
        const r = n.length;
        let s;
        s = e || t * n[r - 1];
        let a, o = 0,
            l = r - 1;
        for (; o <= l;)
            if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else {
                if (!(a > 0)) {
                    l = i;
                    break
                }
                l = i - 1
            } if (i = l, n[i] === s) return i / (r - 1);
        const c = n[i];
        return (i + (s - c) / (n[i + 1] - c)) / (r - 1)
    }
    getTangent(t, e) {
        const n = 1e-4;
        let i = t - n,
            r = t + n;
        i < 0 && (i = 0), r > 1 && (r = 1);
        const s = this.getPoint(i),
            a = this.getPoint(r),
            o = e || (s.isVector2 ? new Ut : new ie);
        return o.copy(a).sub(s).normalize(), o
    }
    getTangentAt(t, e) {
        const n = this.getUtoTmapping(t);
        return this.getTangent(n, e)
    }
    computeFrenetFrames(t, e) {
        const n = new ie,
            i = [],
            r = [],
            s = [],
            a = new ie,
            o = new Ie;
        for (let d = 0; d <= t; d++) {
            const e = d / t;
            i[d] = this.getTangentAt(e, new ie)
        }
        r[0] = new ie, s[0] = new ie;
        let l = Number.MAX_VALUE;
        const c = Math.abs(i[0].x),
            h = Math.abs(i[0].y),
            u = Math.abs(i[0].z);
        c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
        for (let d = 1; d <= t; d++) {
            if (r[d] = r[d - 1].clone(), s[d] = s[d - 1].clone(), a.crossVectors(i[d - 1], i[d]), a.length() > Number.EPSILON) {
                a.normalize();
                const t = Math.acos(Tt(i[d - 1].dot(i[d]), -1, 1));
                r[d].applyMatrix4(o.makeRotationAxis(a, t))
            }
            s[d].crossVectors(i[d], r[d])
        }
        if (!0 === e) {
            let e = Math.acos(Tt(r[0].dot(r[t]), -1, 1));
            e /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
            for (let n = 1; n <= t; n++) r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n])
        }
        return {
            tangents: i,
            normals: r,
            binormals: s
        }
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    }
    fromJSON(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
}
class Qa extends Ka {
    constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0) {
        super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o
    }
    getPoint(t, e) {
        const n = e || new Ut,
            i = 2 * Math.PI;
        let r = this.aEndAngle - this.aStartAngle;
        const s = Math.abs(r) < Number.EPSILON;
        for (; r < 0;) r += i;
        for (; r > i;) r -= i;
        r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
        const a = this.aStartAngle + t * r;
        let o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a);
        if (0 !== this.aRotation) {
            const t = Math.cos(this.aRotation),
                e = Math.sin(this.aRotation),
                n = o - this.aX,
                i = l - this.aY;
            o = n * t - i * e + this.aX, l = n * e + i * t + this.aY
        }
        return n.set(o, l)
    }
    copy(t) {
        return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }
    toJSON() {
        const t = super.toJSON();
        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }
    fromJSON(t) {
        return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }
}

function $a() {
    let t = 0,
        e = 0,
        n = 0,
        i = 0;

    function r(r, s, a, o) {
        t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o
    }
    return {
        initCatmullRom: function (t, e, n, i, s) {
            r(e, n, s * (n - t), s * (i - e))
        },
        initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
            let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
                c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
            l *= a, c *= a, r(e, n, l, c)
        },
        calc: function (r) {
            const s = r * r;
            return t + e * r + n * s + i * (s * r)
        }
    }
}
const to = new ie,
    eo = new $a,
    no = new $a,
    io = new $a;

function ro(t, e, n, i, r) {
    const s = .5 * (i - e),
        a = .5 * (r - n),
        o = t * t;
    return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n
}

function so(t, e, n, i) {
    return function (t, e) {
        const n = 1 - t;
        return n * n * e
    }(t, e) + function (t, e) {
        return 2 * (1 - t) * t * e
    }(t, n) + function (t, e) {
        return t * t * e
    }(t, i)
}

function ao(t, e, n, i, r) {
    return function (t, e) {
        const n = 1 - t;
        return n * n * n * e
    }(t, e) + function (t, e) {
        const n = 1 - t;
        return 3 * n * n * t * e
    }(t, n) + function (t, e) {
        return 3 * (1 - t) * t * t * e
    }(t, i) + function (t, e) {
        return t * t * t * e
    }(t, r)
}
class oo extends Ka {
    constructor(t = new Ut, e = new Ut, n = new Ut, i = new Ut) {
        super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
    }
    getPoint(t, e = new Ut) {
        const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
        return n.set(ao(t, i.x, r.x, s.x, a.x), ao(t, i.y, r.y, s.y, a.y)), n
    }
    copy(t) {
        return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }
    fromJSON(t) {
        return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }
}
class lo extends Ka {
    constructor(t = new Ut, e = new Ut) {
        super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e
    }
    getPoint(t, e = new Ut) {
        const n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
    }
    getPointAt(t, e) {
        return this.getPoint(t, e)
    }
    getTangent(t, e = new Ut) {
        return e.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(t, e) {
        return this.getTangent(t, e)
    }
    copy(t) {
        return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }
    fromJSON(t) {
        return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
}
class co extends Ka {
    constructor(t = new Ut, e = new Ut, n = new Ut) {
        super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n
    }
    getPoint(t, e = new Ut) {
        const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
        return n.set(so(t, i.x, r.x, s.x), so(t, i.y, r.y, s.y)), n
    }
    copy(t) {
        return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }
    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }
    fromJSON(t) {
        return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
}
class ho extends Ka {
    constructor(t = []) {
        super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t
    }
    getPoint(t, e = new Ut) {
        const n = e,
            i = this.points,
            r = (i.length - 1) * t,
            s = Math.floor(r),
            a = r - s,
            o = i[0 === s ? s : s - 1],
            l = i[s],
            c = i[s > i.length - 2 ? i.length - 1 : s + 1],
            h = i[s > i.length - 3 ? i.length - 1 : s + 2];
        return n.set(ro(a, o.x, l.x, c.x, h.x), ro(a, o.y, l.y, c.y, h.y)), n
    }
    copy(t) {
        super.copy(t), this.points = [];
        for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone())
        }
        return this
    }
    toJSON() {
        const t = super.toJSON();
        t.points = [];
        for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray())
        }
        return t
    }
    fromJSON(t) {
        super.fromJSON(t), this.points = [];
        for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push((new Ut).fromArray(n))
        }
        return this
    }
}
var uo = Object.freeze({
    __proto__: null,
    ArcCurve: class extends Qa {
        constructor(t, e, n, i, r, s) {
            super(t, e, n, n, i, r, s), this.isArcCurve = !0, this.type = "ArcCurve"
        }
    },
    CatmullRomCurve3: class extends Ka {
        constructor(t = [], e = !1, n = "centripetal", i = .5) {
            super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i
        }
        getPoint(t, e = new ie) {
            const n = e,
                i = this.points,
                r = i.length,
                s = (r - (this.closed ? 0 : 1)) * t;
            let a, o, l = Math.floor(s),
                c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (to.subVectors(i[0], i[1]).add(i[0]), a = to);
            const h = i[l % r],
                u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (to.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = to), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t),
                    n = Math.pow(h.distanceToSquared(u), t),
                    i = Math.pow(u.distanceToSquared(o), t);
                n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), eo.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i), no.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i), io.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i)
            } else "catmullrom" === this.curveType && (eo.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), no.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), io.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(eo.calc(c), no.calc(c), io.calc(c)), n
        }
        copy(t) {
            super.copy(t), this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone())
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray())
            }
            return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push((new ie).fromArray(n))
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }
    },
    CubicBezierCurve: oo,
    CubicBezierCurve3: class extends Ka {
        constructor(t = new ie, e = new ie, n = new ie, i = new ie) {
            super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
        }
        getPoint(t, e = new ie) {
            const n = e,
                i = this.v0,
                r = this.v1,
                s = this.v2,
                a = this.v3;
            return n.set(ao(t, i.x, r.x, s.x, a.x), ao(t, i.y, r.y, s.y, a.y), ao(t, i.z, r.z, s.z, a.z)), n
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
        }
    },
    EllipseCurve: Qa,
    LineCurve: lo,
    LineCurve3: class extends Ka {
        constructor(t = new ie, e = new ie) {
            super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e
        }
        getPoint(t, e = new ie) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
        }
        getPointAt(t, e) {
            return this.getPoint(t, e)
        }
        getTangent(t, e = new ie) {
            return e.subVectors(this.v2, this.v1).normalize()
        }
        getTangentAt(t, e) {
            return this.getTangent(t, e)
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }
    },
    QuadraticBezierCurve: co,
    QuadraticBezierCurve3: class extends Ka {
        constructor(t = new ie, e = new ie, n = new ie) {
            super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n
        }
        getPoint(t, e = new ie) {
            const n = e,
                i = this.v0,
                r = this.v1,
                s = this.v2;
            return n.set(so(t, i.x, r.x, s.x), so(t, i.y, r.y, s.y), so(t, i.z, r.z, s.z)), n
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }
    },
    SplineCurve: ho
});
class po extends Ka {
    constructor() {
        super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }
    add(t) {
        this.curves.push(t)
    }
    closePath() {
        const t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new lo(e, t))
    }
    getPoint(t, e) {
        const n = t * this.getLength(),
            i = this.getCurveLengths();
        let r = 0;
        for (; r < i.length;) {
            if (i[r] >= n) {
                const t = i[r] - n,
                    s = this.curves[r],
                    a = s.getLength(),
                    o = 0 === a ? 0 : 1 - t / a;
                return s.getPointAt(o, e)
            }
            r++
        }
        return null
    }
    getLength() {
        const t = this.getCurveLengths();
        return t[t.length - 1]
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        const t = [];
        let e = 0;
        for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
        return this.cacheLengths = t, t
    }
    getSpacedPoints(t = 40) {
        const e = [];
        for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
        return this.autoClose && e.push(e[0]), e
    }
    getPoints(t = 12) {
        const e = [];
        let n;
        for (let i = 0, r = this.curves; i < r.length; i++) {
            const s = r[i],
                a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t,
                o = s.getPoints(a);
            for (let t = 0; t < o.length; t++) {
                const i = o[t];
                n && n.equals(i) || (e.push(i), n = i)
            }
        }
        return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
    }
    copy(t) {
        super.copy(t), this.curves = [];
        for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push(n.clone())
        }
        return this.autoClose = t.autoClose, this
    }
    toJSON() {
        const t = super.toJSON();
        t.autoClose = this.autoClose, t.curves = [];
        for (let e = 0, n = this.curves.length; e < n; e++) {
            const n = this.curves[e];
            t.curves.push(n.toJSON())
        }
        return t
    }
    fromJSON(t) {
        super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
        for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push((new uo[n.type]).fromJSON(n))
        }
        return this
    }
}
class fo extends po {
    constructor(t) {
        super(), this.type = "Path", this.currentPoint = new Ut, t && this.setFromPoints(t)
    }
    setFromPoints(t) {
        this.moveTo(t[0].x, t[0].y);
        for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
        return this
    }
    moveTo(t, e) {
        return this.currentPoint.set(t, e), this
    }
    lineTo(t, e) {
        const n = new lo(this.currentPoint.clone(), new Ut(t, e));
        return this.curves.push(n), this.currentPoint.set(t, e), this
    }
    quadraticCurveTo(t, e, n, i) {
        const r = new co(this.currentPoint.clone(), new Ut(t, e), new Ut(n, i));
        return this.curves.push(r), this.currentPoint.set(n, i), this
    }
    bezierCurveTo(t, e, n, i, r, s) {
        const a = new oo(this.currentPoint.clone(), new Ut(t, e), new Ut(n, i), new Ut(r, s));
        return this.curves.push(a), this.currentPoint.set(r, s), this
    }
    splineThru(t) {
        const e = [this.currentPoint.clone()].concat(t),
            n = new ho(e);
        return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
    }
    arc(t, e, n, i, r, s) {
        const a = this.currentPoint.x,
            o = this.currentPoint.y;
        return this.absarc(t + a, e + o, n, i, r, s), this
    }
    absarc(t, e, n, i, r, s) {
        return this.absellipse(t, e, n, n, i, r, s), this
    }
    ellipse(t, e, n, i, r, s, a, o) {
        const l = this.currentPoint.x,
            c = this.currentPoint.y;
        return this.absellipse(t + l, e + c, n, i, r, s, a, o), this
    }
    absellipse(t, e, n, i, r, s, a, o) {
        const l = new Qa(t, e, n, i, r, s, a, o);
        if (this.curves.length > 0) {
            const t = l.getPoint(0);
            t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
        }
        this.curves.push(l);
        const c = l.getPoint(1);
        return this.currentPoint.copy(c), this
    }
    copy(t) {
        return super.copy(t), this.currentPoint.copy(t.currentPoint), this
    }
    toJSON() {
        const t = super.toJSON();
        return t.currentPoint = this.currentPoint.toArray(), t
    }
    fromJSON(t) {
        return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
    }
}
class mo extends fo {
    constructor(t) {
        super(t), this.uuid = wt(), this.type = "Shape", this.holes = []
    }
    getPointsHoles(t) {
        const e = [];
        for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
        return e
    }
    extractPoints(t) {
        return {
            shape: this.getPoints(t),
            holes: this.getPointsHoles(t)
        }
    }
    copy(t) {
        super.copy(t), this.holes = [];
        for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push(n.clone())
        }
        return this
    }
    toJSON() {
        const t = super.toJSON();
        t.uuid = this.uuid, t.holes = [];
        for (let e = 0, n = this.holes.length; e < n; e++) {
            const n = this.holes[e];
            t.holes.push(n.toJSON())
        }
        return t
    }
    fromJSON(t) {
        super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
        for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push((new fo).fromJSON(n))
        }
        return this
    }
}
const go = function (t, e, n = 2) {
    const i = e && e.length,
        r = i ? e[0] * n : t.length;
    let s = vo(t, 0, r, n, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, h, u, d, p;
    if (i && (s = function (t, e, n, i) {
            const r = [];
            let s, a, o, l, c;
            for (s = 0, a = e.length; s < a; s++) o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, c = vo(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(Co(c));
            for (r.sort(wo), s = 0; s < r.length; s++) n = To(r[s], n);
            return n
        }(t, e, s, n)), t.length > 80 * n) {
        o = c = t[0], l = h = t[1];
        for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
        p = Math.max(c - o, h - l), p = 0 !== p ? 32767 / p : 0
    }
    return xo(s, a, n, o, l, p, 0), a
};

function vo(t, e, n, i, r) {
    let s, a;
    if (r === function (t, e, n, i) {
            let r = 0;
            for (let s = e, a = n - i; s < n; s += i) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
            return r
        }(t, e, n, i) > 0)
        for (s = e; s < n; s += i) a = Fo(s, t[s], t[s + 1], a);
    else
        for (s = n - i; s >= e; s -= i) a = Fo(s, t[s], t[s + 1], a);
    return a && Ro(a, a.next) && (Bo(a), a = a.next), a
}

function _o(t, e) {
    if (!t) return t;
    e || (e = t);
    let n, i = t;
    do {
        if (n = !1, i.steiner || !Ro(i, i.next) && 0 !== Do(i.prev, i, i.next)) i = i.next;
        else {
            if (Bo(i), i = e = i.prev, i === i.next) break;
            n = !0
        }
    } while (n || i !== e);
    return e
}

function xo(t, e, n, i, r, s, a) {
    if (!t) return;
    !a && s && function (t, e, n, i) {
        let r = t;
        do {
            0 === r.z && (r.z = Eo(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
        } while (r !== t);
        r.prevZ.nextZ = null, r.prevZ = null,
            function (t) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for (n = t, t = null, s = null, a = 0; n;) {
                        for (a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++);
                        for (l = c; o > 0 || l > 0 && i;) 0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                        n = i
                    }
                    s.nextZ = null, c *= 2
                } while (a > 1)
            }(r)
    }(t, i, r, s);
    let o, l, c = t;
    for (; t.prev !== t.next;)
        if (o = t.prev, l = t.next, s ? Mo(t, i, r, s) : yo(t)) e.push(o.i / n | 0), e.push(t.i / n | 0), e.push(l.i / n | 0), Bo(t), t = l.next, c = l.next;
        else if ((t = l) === c) {
        a ? 1 === a ? xo(t = So(_o(t), e, n), e, n, i, r, s, 2) : 2 === a && bo(t, e, n, i, r, s) : xo(_o(t), e, n, i, r, s, 1);
        break
    }
}

function yo(t) {
    const e = t.prev,
        n = t,
        i = t.next;
    if (Do(e, n, i) >= 0) return !1;
    const r = e.x,
        s = n.x,
        a = i.x,
        o = e.y,
        l = n.y,
        c = i.y,
        h = r < s ? r < a ? r : a : s < a ? s : a,
        u = o < l ? o < c ? o : c : l < c ? l : c,
        d = r > s ? r > a ? r : a : s > a ? s : a,
        p = o > l ? o > c ? o : c : l > c ? l : c;
    let f = i.next;
    for (; f !== e;) {
        if (f.x >= h && f.x <= d && f.y >= u && f.y <= p && Po(r, o, s, l, a, c, f.x, f.y) && Do(f.prev, f, f.next) >= 0) return !1;
        f = f.next
    }
    return !0
}

function Mo(t, e, n, i) {
    const r = t.prev,
        s = t,
        a = t.next;
    if (Do(r, s, a) >= 0) return !1;
    const o = r.x,
        l = s.x,
        c = a.x,
        h = r.y,
        u = s.y,
        d = a.y,
        p = o < l ? o < c ? o : c : l < c ? l : c,
        f = h < u ? h < d ? h : d : u < d ? u : d,
        m = o > l ? o > c ? o : c : l > c ? l : c,
        g = h > u ? h > d ? h : d : u > d ? u : d,
        v = Eo(p, f, e, n, i),
        _ = Eo(m, g, e, n, i);
    let x = t.prevZ,
        y = t.nextZ;
    for (; x && x.z >= v && y && y.z <= _;) {
        if (x.x >= p && x.x <= m && x.y >= f && x.y <= g && x !== r && x !== a && Po(o, h, l, u, c, d, x.x, x.y) && Do(x.prev, x, x.next) >= 0) return !1;
        if (x = x.prevZ, y.x >= p && y.x <= m && y.y >= f && y.y <= g && y !== r && y !== a && Po(o, h, l, u, c, d, y.x, y.y) && Do(y.prev, y, y.next) >= 0) return !1;
        y = y.nextZ
    }
    for (; x && x.z >= v;) {
        if (x.x >= p && x.x <= m && x.y >= f && x.y <= g && x !== r && x !== a && Po(o, h, l, u, c, d, x.x, x.y) && Do(x.prev, x, x.next) >= 0) return !1;
        x = x.prevZ
    }
    for (; y && y.z <= _;) {
        if (y.x >= p && y.x <= m && y.y >= f && y.y <= g && y !== r && y !== a && Po(o, h, l, u, c, d, y.x, y.y) && Do(y.prev, y, y.next) >= 0) return !1;
        y = y.nextZ
    }
    return !0
}

function So(t, e, n) {
    let i = t;
    do {
        const r = i.prev,
            s = i.next.next;
        !Ro(r, s) && Io(r, i, i.next, s) && Oo(r, s) && Oo(s, r) && (e.push(r.i / n | 0), e.push(i.i / n | 0), e.push(s.i / n | 0), Bo(i), Bo(i.next), i = t = s), i = i.next
    } while (i !== t);
    return _o(i)
}

function bo(t, e, n, i, r, s) {
    let a = t;
    do {
        let t = a.next.next;
        for (; t !== a.prev;) {
            if (a.i !== t.i && Lo(a, t)) {
                let o = zo(a, t);
                return a = _o(a, a.next), o = _o(o, o.next), xo(a, e, n, i, r, s, 0), void xo(o, e, n, i, r, s, 0)
            }
            t = t.next
        }
        a = a.next
    } while (a !== t)
}

function wo(t, e) {
    return t.x - e.x
}

function To(t, e) {
    const n = function (t, e) {
        let n, i = e,
            r = -1 / 0;
        const s = t.x,
            a = t.y;
        do {
            if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
                const t = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                if (t <= s && t > r && (r = t, n = i.x < i.next.x ? i : i.next, t === s)) return n
            }
            i = i.next
        } while (i !== e);
        if (!n) return null;
        const o = n,
            l = n.x,
            c = n.y;
        let h, u = 1 / 0;
        i = n;
        do {
            s >= i.x && i.x >= l && s !== i.x && Po(a < c ? s : r, a, l, c, a < c ? r : s, a, i.x, i.y) && (h = Math.abs(a - i.y) / (s - i.x), Oo(i, t) && (h < u || h === u && (i.x > n.x || i.x === n.x && Ao(n, i))) && (n = i, u = h)), i = i.next
        } while (i !== o);
        return n
    }(t, e);
    if (!n) return e;
    const i = zo(n, t);
    return _o(i, i.next), _o(n, n.next)
}

function Ao(t, e) {
    return Do(t.prev, t, e.prev) < 0 && Do(e.next, t, t.next) < 0
}

function Eo(t, e, n, i, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - n) * r | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
}

function Co(t) {
    let e = t,
        n = t;
    do {
        (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
    } while (e !== t);
    return n
}

function Po(t, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) >= (t - a) * (s - o) && (t - a) * (i - o) >= (n - a) * (e - o) && (n - a) * (s - o) >= (r - a) * (i - o)
}

function Lo(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && ! function (t, e) {
        let n = t;
        do {
            if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Io(n, n.next, t, e)) return !0;
            n = n.next
        } while (n !== t);
        return !1
    }(t, e) && (Oo(t, e) && Oo(e, t) && function (t, e) {
        let n = t,
            i = !1;
        const r = (t.x + e.x) / 2,
            s = (t.y + e.y) / 2;
        do {
            n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
        } while (n !== t);
        return i
    }(t, e) && (Do(t.prev, t, e.prev) || Do(t, e.prev, e)) || Ro(t, e) && Do(t.prev, t, t.next) > 0 && Do(e.prev, e, e.next) > 0)
}

function Do(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
}

function Ro(t, e) {
    return t.x === e.x && t.y === e.y
}

function Io(t, e, n, i) {
    const r = No(Do(t, e, n)),
        s = No(Do(t, e, i)),
        a = No(Do(n, i, t)),
        o = No(Do(n, i, e));
    return r !== s && a !== o || (!(0 !== r || !Uo(t, n, e)) || (!(0 !== s || !Uo(t, i, e)) || (!(0 !== a || !Uo(n, t, i)) || !(0 !== o || !Uo(n, e, i)))))
}

function Uo(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
}

function No(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0
}

function Oo(t, e) {
    return Do(t.prev, t, t.next) < 0 ? Do(t, e, t.next) >= 0 && Do(t, t.prev, e) >= 0 : Do(t, e, t.prev) < 0 || Do(t, t.next, e) < 0
}

function zo(t, e) {
    const n = new Vo(t.i, t.x, t.y),
        i = new Vo(e.i, e.x, e.y),
        r = t.next,
        s = e.prev;
    return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i
}

function Fo(t, e, n, i) {
    const r = new Vo(t, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
}

function Bo(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
}

function Vo(t, e, n) {
    this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
}
class ko {
    static area(t) {
        const e = t.length;
        let n = 0;
        for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
        return .5 * n
    }
    static isClockWise(t) {
        return ko.area(t) < 0
    }
    static triangulateShape(t, e) {
        const n = [],
            i = [],
            r = [];
        Go(t), Ho(n, t);
        let s = t.length;
        e.forEach(Go);
        for (let o = 0; o < e.length; o++) i.push(s), s += e[o].length, Ho(n, e[o]);
        const a = go(n, i);
        for (let o = 0; o < a.length; o += 3) r.push(a.slice(o, o + 3));
        return r
    }
}

function Go(t) {
    const e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop()
}

function Ho(t, e) {
    for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
}
class Wo extends Vn {
    constructor(t = new mo([new Ut(0, .5), new Ut(-.5, -.5), new Ut(.5, -.5)]), e = 12) {
        super(), this.type = "ShapeGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
        };
        const n = [],
            i = [],
            r = [],
            s = [];
        let a = 0,
            o = 0;
        if (!1 === Array.isArray(t)) l(t);
        else
            for (let c = 0; c < t.length; c++) l(t[c]), this.addGroup(a, o, c), a += o, o = 0;

        function l(t) {
            const a = i.length / 3,
                l = t.extractPoints(e);
            let c = l.shape;
            const h = l.holes;
            !1 === ko.isClockWise(c) && (c = c.reverse());
            for (let e = 0, n = h.length; e < n; e++) {
                const t = h[e];
                !0 === ko.isClockWise(t) && (h[e] = t.reverse())
            }
            const u = ko.triangulateShape(c, h);
            for (let e = 0, n = h.length; e < n; e++) {
                const t = h[e];
                c = c.concat(t)
            }
            for (let e = 0, n = c.length; e < n; e++) {
                const t = c[e];
                i.push(t.x, t.y, 0), r.push(0, 0, 1), s.push(t.x, t.y)
            }
            for (let e = 0, i = u.length; e < i; e++) {
                const t = u[e],
                    i = t[0] + a,
                    r = t[1] + a,
                    s = t[2] + a;
                n.push(i, r, s), o += 3
            }
        }
        this.setIndex(n), this.setAttribute("position", new Rn(i, 3)), this.setAttribute("normal", new Rn(r, 3)), this.setAttribute("uv", new Rn(s, 2))
    }
    copy(t) {
        return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
    }
    toJSON() {
        const t = super.toJSON();
        return function (t, e) {
            if (e.shapes = [], Array.isArray(t))
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = t[n];
                    e.shapes.push(i.uuid)
                } else e.shapes.push(t.uuid);
            return e
        }(this.parameters.shapes, t)
    }
    static fromJSON(t, e) {
        const n = [];
        for (let i = 0, r = t.shapes.length; i < r; i++) {
            const r = e[t.shapes[i]];
            n.push(r)
        }
        return new Wo(n, t.curveSegments)
    }
}
class Xo extends Vn {
    constructor(t = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI) {
        super(), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: s,
            thetaLength: a
        }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
        const o = Math.min(s + a, Math.PI);
        let l = 0;
        const c = [],
            h = new ie,
            u = new ie,
            d = [],
            p = [],
            f = [],
            m = [];
        for (let g = 0; g <= n; g++) {
            const d = [],
                v = g / n;
            let _ = 0;
            0 === g && 0 === s ? _ = .5 / e : g === n && o === Math.PI && (_ = -.5 / e);
            for (let n = 0; n <= e; n++) {
                const o = n / e;
                h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a), h.y = t * Math.cos(s + v * a), h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), f.push(u.x, u.y, u.z), m.push(o + _, 1 - v), d.push(l++)
            }
            c.push(d)
        }
        for (let g = 0; g < n; g++)
            for (let t = 0; t < e; t++) {
                const e = c[g][t + 1],
                    i = c[g][t],
                    r = c[g + 1][t],
                    a = c[g + 1][t + 1];
                (0 !== g || s > 0) && d.push(e, i, a), (g !== n - 1 || o < Math.PI) && d.push(i, r, a)
            }
        this.setIndex(d), this.setAttribute("position", new Rn(p, 3)), this.setAttribute("normal", new Rn(f, 3)), this.setAttribute("uv", new Rn(m, 2))
    }
    copy(t) {
        return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
    }
    static fromJSON(t) {
        return new Xo(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength)
    }
}
class jo extends xn {
    constructor(t) {
        super(), this.isMeshStandardMaterial = !0, this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new wn(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new wn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ut, this.normalScale = new Ut(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
    }
    copy(t) {
        return super.copy(t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
    }
}
class qo extends jo {
    constructor(t) {
        super(), this.isMeshPhysicalMaterial = !0, this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ut(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function () {
                return Tt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function (t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new wn(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new wn(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new wn(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t)
    }
    get sheen() {
        return this._sheen
    }
    set sheen(t) {
        this._sheen > 0 != t > 0 && this.version++, this._sheen = t
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(t) {
        this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(t) {
        this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t
    }
    get transmission() {
        return this._transmission
    }
    set transmission(t) {
        this._transmission > 0 != t > 0 && this.version++, this._transmission = t
    }
    copy(t) {
        return super.copy(t), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this
    }
}

function Yo(t, e, n) {
    return Jo(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
}

function Zo(t, e, n) {
    return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
}

function Jo(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView)
}

function Ko(t) {
    const e = t.length,
        n = new Array(e);
    for (let i = 0; i !== e; ++i) n[i] = i;
    return n.sort((function (e, n) {
        return t[e] - t[n]
    })), n
}

function Qo(t, e, n) {
    const i = t.length,
        r = new t.constructor(i);
    for (let s = 0, a = 0; a !== i; ++s) {
        const i = n[s] * e;
        for (let n = 0; n !== e; ++n) r[a++] = t[i + n]
    }
    return r
}

function $o(t, e, n, i) {
    let r = 1,
        s = t[0];
    for (; void 0 !== s && void 0 === s[i];) s = t[r++];
    if (void 0 === s) return;
    let a = s[i];
    if (void 0 !== a)
        if (Array.isArray(a))
            do {
                a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++]
            } while (void 0 !== s);
        else if (void 0 !== a.toArray)
        do {
            a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++]
        } while (void 0 !== s);
    else
        do {
            a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++]
        } while (void 0 !== s)
}
class tl {
    constructor(t, e, n, i) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
    }
    evaluate(t) {
        const e = this.parameterPositions;
        let n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];
        t: {
            e: {
                let s;n: {
                    i: if (!(t < i)) {
                        for (let s = n + 2;;) {
                            if (void 0 === i) {
                                if (t < r) break i;
                                return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1)
                            }
                            if (n === s) break;
                            if (r = i, i = e[++n], t < i) break e
                        }
                        s = e.length;
                        break n
                    }if (t >= r) break t; {
                        const a = e[1];
                        t < a && (n = 2, r = a);
                        for (let s = n - 2;;) {
                            if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                            if (n === s) break;
                            if (i = r, r = e[--n - 1], t >= r) break e
                        }
                        s = n, n = 0
                    }
                }
                for (; n < s;) {
                    const i = n + s >>> 1;
                    t < e[i] ? s = i : n = i + 1
                }
                if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0,
                this.copySampleValue_(0);
                if (void 0 === i) return n = e.length,
                this._cachedIndex = n,
                this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, i)
        }
        return this.interpolate_(n, r, t, i)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(t) {
        const e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i;
        for (let s = 0; s !== i; ++s) e[s] = n[r + s];
        return e
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
class el extends tl {
    constructor(t, e, n, i) {
        super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: 2400,
            endingEnd: 2400
        }
    }
    intervalChanged_(t, e, n) {
        const i = this.parameterPositions;
        let r = t - 2,
            s = t + 1,
            a = i[r],
            o = i[s];
        if (void 0 === a) switch (this.getSettings_().endingStart) {
            case 2401:
                r = t, a = 2 * e - n;
                break;
            case 2402:
                r = i.length - 2, a = e + i[r] - i[r + 1];
                break;
            default:
                r = t, a = n
        }
        if (void 0 === o) switch (this.getSettings_().endingEnd) {
            case 2401:
                s = t, o = 2 * n - e;
                break;
            case 2402:
                s = 1, o = n + i[1] - i[0];
                break;
            default:
                s = t - 1, o = e
        }
        const l = .5 * (n - e),
            c = this.valueSize;
        this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            c = this._offsetPrev,
            h = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (n - e) / (i - e),
            f = p * p,
            m = f * p,
            g = -u * m + 2 * u * f - u * p,
            v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1,
            _ = (-1 - d) * m + (1.5 + d) * f + .5 * p,
            x = d * m - d * f;
        for (let y = 0; y !== a; ++y) r[y] = g * s[c + y] + v * s[l + y] + _ * s[o + y] + x * s[h + y];
        return r
    }
}
class nl extends tl {
    constructor(t, e, n, i) {
        super(t, e, n, i)
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            c = (n - e) / (i - e),
            h = 1 - c;
        for (let u = 0; u !== a; ++u) r[u] = s[l + u] * h + s[o + u] * c;
        return r
    }
}
class il extends tl {
    constructor(t, e, n, i) {
        super(t, e, n, i)
    }
    interpolate_(t) {
        return this.copySampleValue_(t - 1)
    }
}
class rl {
    constructor(t, e, n, i) {
        if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = Zo(e, this.TimeBufferType), this.values = Zo(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }
    static toJSON(t) {
        const e = t.constructor;
        let n;
        if (e.toJSON !== this.toJSON) n = e.toJSON(t);
        else {
            n = {
                name: t.name,
                times: Zo(t.times, Array),
                values: Zo(t.values, Array)
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e)
        }
        return n.type = t.ValueTypeName, n
    }
    InterpolantFactoryMethodDiscrete(t) {
        return new il(this.times, this.values, this.getValueSize(), t)
    }
    InterpolantFactoryMethodLinear(t) {
        return new nl(this.times, this.values, this.getValueSize(), t)
    }
    InterpolantFactoryMethodSmooth(t) {
        return new el(this.times, this.values, this.getValueSize(), t)
    }
    setInterpolation(t) {
        let e;
        switch (t) {
            case it:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case rt:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case st:
                e = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === e) {
            const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation) throw new Error(e);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return this
        }
        return this.createInterpolant = e, this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return it;
            case this.InterpolantFactoryMethodLinear:
                return rt;
            case this.InterpolantFactoryMethodSmooth:
                return st
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(t) {
        if (0 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
        }
        return this
    }
    scale(t) {
        if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
        }
        return this
    }
    trim(t, e) {
        const n = this.times,
            i = n.length;
        let r = 0,
            s = i - 1;
        for (; r !== i && n[r] < t;) ++r;
        for (; - 1 !== s && n[s] > e;) --s;
        if (++s, 0 !== r || s !== i) {
            r >= s && (s = Math.max(s, 1), r = s - 1);
            const t = this.getValueSize();
            this.times = Yo(n, r, s), this.values = Yo(this.values, r * t, s * t)
        }
        return this
    }
    validate() {
        let t = !0;
        const e = this.getValueSize();
        e - Math.floor(e) != 0 && (t = !1);
        const n = this.times,
            i = this.values,
            r = n.length;
        0 === r && (t = !1);
        let s = null;
        for (let a = 0; a !== r; a++) {
            const e = n[a];
            if ("number" == typeof e && isNaN(e)) {
                t = !1;
                break
            }
            if (null !== s && s > e) {
                t = !1;
                break
            }
            s = e
        }
        if (void 0 !== i && Jo(i))
            for (let a = 0, o = i.length; a !== o; ++a) {
                const e = i[a];
                if (isNaN(e)) {
                    t = !1;
                    break
                }
            }
        return t
    }
    optimize() {
        const t = Yo(this.times),
            e = Yo(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === st,
            r = t.length - 1;
        let s = 1;
        for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = t[a];
            if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                if (i) r = !0;
                else {
                    const t = a * n,
                        i = t - n,
                        s = t + n;
                    for (let a = 0; a !== n; ++a) {
                        const n = e[t + a];
                        if (n !== e[i + a] || n !== e[s + a]) {
                            r = !0;
                            break
                        }
                    }
                } if (r) {
                if (a !== s) {
                    t[s] = t[a];
                    const i = a * n,
                        r = s * n;
                    for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
                }++s
            }
        }
        if (r > 0) {
            t[s] = t[r];
            for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];
            ++s
        }
        return s !== t.length ? (this.times = Yo(t, 0, s), this.values = Yo(e, 0, s * n)) : (this.times = t, this.values = e), this
    }
    clone() {
        const t = Yo(this.times, 0),
            e = Yo(this.values, 0),
            n = new(0, this.constructor)(this.name, t, e);
        return n.createInterpolant = this.createInterpolant, n
    }
}
rl.prototype.TimeBufferType = Float32Array, rl.prototype.ValueBufferType = Float32Array, rl.prototype.DefaultInterpolation = rt;
class sl extends rl {}
sl.prototype.ValueTypeName = "bool", sl.prototype.ValueBufferType = Array, sl.prototype.DefaultInterpolation = it, sl.prototype.InterpolantFactoryMethodLinear = void 0, sl.prototype.InterpolantFactoryMethodSmooth = void 0;
class al extends rl {}
al.prototype.ValueTypeName = "color";
class ol extends rl {}
ol.prototype.ValueTypeName = "number";
class ll extends tl {
    constructor(t, e, n, i) {
        super(t, e, n, i)
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = (n - e) / (i - e);
        let l = t * a;
        for (let c = l + a; l !== c; l += 4) ne.slerpFlat(r, 0, s, l - a, s, l, o);
        return r
    }
}
class cl extends rl {
    InterpolantFactoryMethodLinear(t) {
        return new ll(this.times, this.values, this.getValueSize(), t)
    }
}
cl.prototype.ValueTypeName = "quaternion", cl.prototype.DefaultInterpolation = rt, cl.prototype.InterpolantFactoryMethodSmooth = void 0;
class hl extends rl {}
hl.prototype.ValueTypeName = "string", hl.prototype.ValueBufferType = Array, hl.prototype.DefaultInterpolation = it, hl.prototype.InterpolantFactoryMethodLinear = void 0, hl.prototype.InterpolantFactoryMethodSmooth = void 0;
class ul extends rl {}
ul.prototype.ValueTypeName = "vector";
class dl {
    constructor(t, e = -1, n, i = 2500) {
        this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = wt(), this.duration < 0 && this.resetDuration()
    }
    static parse(t) {
        const e = [],
            n = t.tracks,
            i = 1 / (t.fps || 1);
        for (let s = 0, a = n.length; s !== a; ++s) e.push(pl(n[s]).scale(i));
        const r = new this(t.name, t.duration, e, t.blendMode);
        return r.uuid = t.uuid, r
    }
    static toJSON(t) {
        const e = [],
            n = t.tracks,
            i = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
        for (let r = 0, s = n.length; r !== s; ++r) e.push(rl.toJSON(n[r]));
        return i
    }
    static CreateFromMorphTargetSequence(t, e, n, i) {
        const r = e.length,
            s = [];
        for (let a = 0; a < r; a++) {
            let t = [],
                o = [];
            t.push((a + r - 1) % r, a, (a + 1) % r), o.push(0, 1, 0);
            const l = Ko(t);
            t = Qo(t, 1, l), o = Qo(o, 1, l), i || 0 !== t[0] || (t.push(r), o.push(o[0])), s.push(new ol(".morphTargetInfluences[" + e[a].name + "]", t, o).scale(1 / n))
        }
        return new this(t, -1, s)
    }
    static findByName(t, e) {
        let n = t;
        if (!Array.isArray(t)) {
            const e = t;
            n = e.geometry && e.geometry.animations || e.animations
        }
        for (let i = 0; i < n.length; i++)
            if (n[i].name === e) return n[i];
        return null
    }
    static CreateClipsFromMorphTargetSequences(t, e, n) {
        const i = {},
            r = /^([\w-]*?)([\d]+)$/;
        for (let a = 0, o = t.length; a < o; a++) {
            const e = t[a],
                n = e.name.match(r);
            if (n && n.length > 1) {
                const t = n[1];
                let r = i[t];
                r || (i[t] = r = []), r.push(e)
            }
        }
        const s = [];
        for (const a in i) s.push(this.CreateFromMorphTargetSequence(a, i[a], e, n));
        return s
    }
    static parseAnimation(t, e) {
        if (!t) return null;
        const n = function (t, e, n, i, r) {
                if (0 !== n.length) {
                    const s = [],
                        a = [];
                    $o(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a))
                }
            },
            i = [],
            r = t.name || "default",
            s = t.fps || 30,
            a = t.blendMode;
        let o = t.length || -1;
        const l = t.hierarchy || [];
        for (let c = 0; c < l.length; c++) {
            const t = l[c].keys;
            if (t && 0 !== t.length)
                if (t[0].morphTargets) {
                    const e = {};
                    let n;
                    for (n = 0; n < t.length; n++)
                        if (t[n].morphTargets)
                            for (let i = 0; i < t[n].morphTargets.length; i++) e[t[n].morphTargets[i]] = -1;
                    for (const r in e) {
                        const e = [],
                            s = [];
                        for (let i = 0; i !== t[n].morphTargets.length; ++i) {
                            const i = t[n];
                            e.push(i.time), s.push(i.morphTarget === r ? 1 : 0)
                        }
                        i.push(new ol(".morphTargetInfluence[" + r + "]", e, s))
                    }
                    o = e.length * s
                } else {
                    const r = ".bones[" + e[c].name + "]";
                    n(ul, r + ".position", t, "pos", i), n(cl, r + ".quaternion", t, "rot", i), n(ul, r + ".scale", t, "scl", i)
                }
        }
        if (0 === i.length) return null;
        return new this(r, o, i, a)
    }
    resetDuration() {
        let t = 0;
        for (let e = 0, n = this.tracks.length; e !== n; ++e) {
            const n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1])
        }
        return this.duration = t, this
    }
    trim() {
        for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
        return this
    }
    validate() {
        let t = !0;
        for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
        return t
    }
    optimize() {
        for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
        return this
    }
    clone() {
        const t = [];
        for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
        return new this.constructor(this.name, this.duration, t, this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}

function pl(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = function (t) {
        switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return ol;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return ul;
            case "color":
                return al;
            case "quaternion":
                return cl;
            case "bool":
            case "boolean":
                return sl;
            case "string":
                return hl
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }(t.type);
    if (void 0 === t.times) {
        const e = [],
            n = [];
        $o(t.keys, e, n, "value"), t.times = e, t.values = n
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
}
const fl = {
    enabled: !1,
    files: {},
    add: function (t, e) {
        !1 !== this.enabled && (this.files[t] = e)
    },
    get: function (t) {
        if (!1 !== this.enabled) return this.files[t]
    },
    remove: function (t) {
        delete this.files[t]
    },
    clear: function () {
        this.files = {}
    }
};
class ml {
    constructor(t, e, n) {
        const i = this;
        let r, s = !1,
            a = 0,
            o = 0;
        const l = [];
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
            o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0
        }, this.itemEnd = function (t) {
            a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad())
        }, this.itemError = function (t) {
            void 0 !== i.onError && i.onError(t)
        }, this.resolveURL = function (t) {
            return r ? r(t) : t
        }, this.setURLModifier = function (t) {
            return r = t, this
        }, this.addHandler = function (t, e) {
            return l.push(t, e), this
        }, this.removeHandler = function (t) {
            const e = l.indexOf(t);
            return -1 !== e && l.splice(e, 2), this
        }, this.getHandler = function (t) {
            for (let e = 0, n = l.length; e < n; e += 2) {
                const n = l[e],
                    i = l[e + 1];
                if (n.global && (n.lastIndex = 0), n.test(t)) return i
            }
            return null
        }
    }
}
const gl = new ml;
class vl {
    constructor(t) {
        this.manager = void 0 !== t ? t : gl, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
    }
    load() {}
    loadAsync(t, e) {
        const n = this;
        return new Promise((function (i, r) {
            n.load(t, i, e, r)
        }))
    }
    parse() {}
    setCrossOrigin(t) {
        return this.crossOrigin = t, this
    }
    setWithCredentials(t) {
        return this.withCredentials = t, this
    }
    setPath(t) {
        return this.path = t, this
    }
    setResourcePath(t) {
        return this.resourcePath = t, this
    }
    setRequestHeader(t) {
        return this.requestHeader = t, this
    }
}
const _l = {};
class xl extends Error {
    constructor(t, e) {
        super(t), this.response = e
    }
}
class yl extends vl {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        const r = fl.get(t);
        if (void 0 !== r) return this.manager.itemStart(t), setTimeout((() => {
            e && e(r), this.manager.itemEnd(t)
        }), 0), r;
        if (void 0 !== _l[t]) return void _l[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
        });
        _l[t] = [], _l[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
        });
        const s = new Request(t, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }),
            a = this.mimeType,
            o = this.responseType;
        fetch(s).then((e => {
            if (200 === e.status || 0 === e.status) {
                if (e.status, "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
                const n = _l[t],
                    i = e.body.getReader(),
                    r = e.headers.get("Content-Length") || e.headers.get("X-File-Size"),
                    s = r ? parseInt(r) : 0,
                    a = 0 !== s;
                let o = 0;
                const l = new ReadableStream({
                    start(t) {
                        ! function e() {
                            i.read().then((({
                                done: i,
                                value: r
                            }) => {
                                if (i) t.close();
                                else {
                                    o += r.byteLength;
                                    const i = new ProgressEvent("progress", {
                                        lengthComputable: a,
                                        loaded: o,
                                        total: s
                                    });
                                    for (let t = 0, e = n.length; t < e; t++) {
                                        const e = n[t];
                                        e.onProgress && e.onProgress(i)
                                    }
                                    t.enqueue(r), e()
                                }
                            }))
                        }()
                    }
                });
                return new Response(l)
            }
            throw new xl(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e)
        })).then((t => {
            switch (o) {
                case "arraybuffer":
                    return t.arrayBuffer();
                case "blob":
                    return t.blob();
                case "document":
                    return t.text().then((t => (new DOMParser).parseFromString(t, a)));
                case "json":
                    return t.json();
                default:
                    if (void 0 === a) return t.text(); {
                        const e = /charset="?([^;"\s]*)"?/i.exec(a),
                            n = e && e[1] ? e[1].toLowerCase() : void 0,
                            i = new TextDecoder(n);
                        return t.arrayBuffer().then((t => i.decode(t)))
                    }
            }
        })).then((e => {
            fl.add(t, e);
            const n = _l[t];
            delete _l[t];
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onLoad && i.onLoad(e)
            }
        })).catch((e => {
            const n = _l[t];
            if (void 0 === n) throw this.manager.itemError(t), e;
            delete _l[t];
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onError && i.onError(e)
            }
            this.manager.itemError(t)
        })).finally((() => {
            this.manager.itemEnd(t)
        })), this.manager.itemStart(t)
    }
    setResponseType(t) {
        return this.responseType = t, this
    }
    setMimeType(t) {
        return this.mimeType = t, this
    }
}
class Ml extends vl {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        const r = this,
            s = fl.get(t);
        if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
            e && e(s), r.manager.itemEnd(t)
        }), 0), s;
        const a = Ft("img");

        function o() {
            c(), fl.add(t, this), e && e(this), r.manager.itemEnd(t)
        }

        function l(e) {
            c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
        }

        function c() {
            a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1)
        }
        return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
    }
}
class Sl extends vl {
    constructor(t) {
        super(t)
    }
    load(t, e, n, i) {
        const r = new Kt,
            s = new Ml(this.manager);
        return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function (t) {
            r.image = t, r.needsUpdate = !0, void 0 !== e && e(r)
        }), n, i), r
    }
}
class bl extends sn {
    constructor(t, e = 1) {
        super(), this.isLight = !0, this.type = "Light", this.color = new wn(t), this.intensity = e
    }
    dispose() {}
    copy(t, e) {
        return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
    }
}
const wl = new Ie,
    Tl = new ie,
    Al = new ie;
class El {
    constructor(t) {
        this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ut(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ie, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new wi, this._frameExtents = new Ut(1, 1), this._viewportCount = 1, this._viewports = [new Qt(0, 0, 1, 1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(t) {
        const e = this.camera,
            n = this.matrix;
        Tl.setFromMatrixPosition(t.matrixWorld), e.position.copy(Tl), Al.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Al), e.updateMatrixWorld(), wl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(wl), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(wl)
    }
    getViewport(t) {
        return this._viewports[t]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
    }
    copy(t) {
        return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const t = {};
        return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
}
class Cl extends El {
    constructor() {
        super(new pi(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1
    }
    updateMatrices(t) {
        const e = this.camera,
            n = 2 * bt * t.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
        n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t)
    }
    copy(t) {
        return super.copy(t), this.focus = t.focus, this
    }
}
class Pl extends bl {
    constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 2) {
        super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(sn.DEFAULT_UP), this.updateMatrix(), this.target = new sn, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new Cl
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(t) {
        this.intensity = t / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t, e) {
        return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
}
const Ll = new Ie,
    Dl = new ie,
    Rl = new ie;
class Il extends El {
    constructor() {
        super(new pi(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ut(4, 2), this._viewportCount = 6, this._viewports = [new Qt(2, 1, 1, 1), new Qt(0, 1, 1, 1), new Qt(3, 1, 1, 1), new Qt(1, 1, 1, 1), new Qt(3, 0, 1, 1), new Qt(1, 0, 1, 1)], this._cubeDirections = [new ie(1, 0, 0), new ie(-1, 0, 0), new ie(0, 0, 1), new ie(0, 0, -1), new ie(0, 1, 0), new ie(0, -1, 0)], this._cubeUps = [new ie(0, 1, 0), new ie(0, 1, 0), new ie(0, 1, 0), new ie(0, 1, 0), new ie(0, 0, 1), new ie(0, 0, -1)]
    }
    updateMatrices(t, e = 0) {
        const n = this.camera,
            i = this.matrix,
            r = t.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), Dl.setFromMatrixPosition(t.matrixWorld), n.position.copy(Dl), Rl.copy(n.position), Rl.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Rl), n.updateMatrixWorld(), i.makeTranslation(-Dl.x, -Dl.y, -Dl.z), Ll.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ll)
    }
}
class Ul extends bl {
    constructor(t, e, n = 0, i = 2) {
        super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Il
    }
    get power() {
        return 4 * this.intensity * Math.PI
    }
    set power(t) {
        this.intensity = t / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t, e) {
        return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
}
class Nl extends El {
    constructor() {
        super(new Fi(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0
    }
}
class Ol extends bl {
    constructor(t, e) {
        super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(sn.DEFAULT_UP), this.updateMatrix(), this.target = new sn, this.shadow = new Nl
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(t) {
        return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
}
class zl {
    static decodeText(t) {
        if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
        let e = "";
        for (let i = 0, r = t.length; i < r; i++) e += String.fromCharCode(t[i]);
        try {
            return decodeURIComponent(escape(e))
        } catch (n) {
            return e
        }
    }
    static extractUrlBase(t) {
        const e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.slice(0, e + 1)
    }
    static resolveURL(t, e) {
        return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
    }
}
class Fl extends vl {
    constructor(t) {
        super(t), this.isImageBitmapLoader = !0, this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(t) {
        return this.options = t, this
    }
    load(t, e, n, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        const r = this,
            s = fl.get(t);
        if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
            e && e(s), r.manager.itemEnd(t)
        }), 0), s;
        const a = {};
        a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function (t) {
            return t.blob()
        })).then((function (t) {
            return createImageBitmap(t, Object.assign(r.options, {
                colorSpaceConversion: "none"
            }))
        })).then((function (n) {
            fl.add(t, n), e && e(n), r.manager.itemEnd(t)
        })).catch((function (e) {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
        })), r.manager.itemStart(t)
    }
}
class Bl {
    constructor(t = !0) {
        this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }
    start() {
        this.startTime = Vl(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    }
    stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1
    }
    getElapsedTime() {
        return this.getDelta(), this.elapsedTime
    }
    getDelta() {
        let t = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
            const e = Vl();
            t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
        }
        return t
    }
}

function Vl() {
    return ("undefined" == typeof performance ? Date : performance).now()
}
const kl = "\\[\\]\\.:\\/",
    Gl = new RegExp("[" + kl + "]", "g"),
    Hl = "[^" + kl + "]",
    Wl = "[^" + kl.replace("\\.", "") + "]",
    Xl = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Hl) + /(WCOD+)?/.source.replace("WCOD", Wl) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Hl) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Hl) + "$"),
    jl = ["material", "materials", "bones", "map"];
class ql {
    constructor(t, e, n) {
        this.path = e, this.parsedPath = n || ql.parseTrackName(e), this.node = ql.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
    static create(t, e, n) {
        return t && t.isAnimationObjectGroup ? new ql.Composite(t, e, n) : new ql(t, e, n)
    }
    static sanitizeNodeName(t) {
        return t.replace(/\s/g, "_").replace(Gl, "")
    }
    static parseTrackName(t) {
        const e = Xl.exec(t);
        if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1); - 1 !== jl.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
        }
        if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        return n
    }
    static findNode(t, e) {
        if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
        if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n) return n
        }
        if (t.children) {
            const n = function (t) {
                    for (let i = 0; i < t.length; i++) {
                        const r = t[i];
                        if (r.name === e || r.uuid === e) return r;
                        const s = n(r.children);
                        if (s) return s
                    }
                    return null
                },
                i = n(t.children);
            if (i) return i
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
        t[e] = this.targetObject[this.propertyName]
    }
    _getValue_array(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
    }
    _getValue_arrayElement(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(t, e) {
        this.resolvedProperty.toArray(t, e)
    }
    _setValue_direct(t, e) {
        this.targetObject[this.propertyName] = t[e]
    }
    _setValue_direct_setNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
    }
    _setValue_array_setNeedsUpdate(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e]
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(t, e) {
        this.resolvedProperty.fromArray(t, e)
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(t, e) {
        this.bind(), this.getValue(t, e)
    }
    _setValue_unbound(t, e) {
        this.bind(), this.setValue(t, e)
    }
    bind() {
        let t = this.node;
        const e = this.parsedPath,
            n = e.objectName,
            i = e.propertyName;
        let r = e.propertyIndex;
        if (t || (t = ql.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return;
        if (n) {
            let i = e.objectIndex;
            switch (n) {
                case "materials":
                    if (!t.material) return;
                    if (!t.material.materials) return;
                    t = t.material.materials;
                    break;
                case "bones":
                    if (!t.skeleton) return;
                    t = t.skeleton.bones;
                    for (let e = 0; e < t.length; e++)
                        if (t[e].name === i) {
                            i = e;
                            break
                        } break;
                case "map":
                    if ("map" in t) {
                        t = t.map;
                        break
                    }
                    if (!t.material) return;
                    if (!t.material.map) return;
                    t = t.material.map;
                    break;
                default:
                    if (void 0 === t[n]) return;
                    t = t[n]
            }
            if (void 0 !== i) {
                if (void 0 === t[i]) return;
                t = t[i]
            }
        }
        const s = t[i];
        if (void 0 === s) {
            e.nodeName;
            return
        }
        let a = this.Versioning.None;
        this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
        let o = this.BindingType.Direct;
        if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
                if (!t.geometry) return;
                if (!t.geometry.morphAttributes) return;
                void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
            }
            o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
        } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
}
ql.Composite = class {
    constructor(t, e, n) {
        const i = n || ql.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, i)
    }
    getValue(t, e) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        void 0 !== i && i.getValue(t, e)
    }
    setValue(t, e) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
    }
    bind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
    }
    unbind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
    }
}, ql.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
}, ql.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
}, ql.prototype.GetterByBindingType = [ql.prototype._getValue_direct, ql.prototype._getValue_array, ql.prototype._getValue_arrayElement, ql.prototype._getValue_toArray], ql.prototype.SetterByBindingTypeAndVersioning = [
    [ql.prototype._setValue_direct, ql.prototype._setValue_direct_setNeedsUpdate, ql.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
    [ql.prototype._setValue_array, ql.prototype._setValue_array_setNeedsUpdate, ql.prototype._setValue_array_setMatrixWorldNeedsUpdate],
    [ql.prototype._setValue_arrayElement, ql.prototype._setValue_arrayElement_setNeedsUpdate, ql.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
    [ql.prototype._setValue_fromArray, ql.prototype._setValue_fromArray_setNeedsUpdate, ql.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class Yl {
    constructor(t = 1, e = 0, n = 0) {
        return this.radius = t, this.phi = e, this.theta = n, this
    }
    set(t, e, n) {
        return this.radius = t, this.phi = e, this.theta = n, this
    }
    copy(t) {
        return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    }
    makeSafe() {
        const t = 1e-6;
        return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
    }
    setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    }
    setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Tt(e / this.radius, -1, 1))), this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const Zl = new Ut;
class Jl {
    constructor(t = new Ut(1 / 0, 1 / 0), e = new Ut(-1 / 0, -1 / 0)) {
        this.isBox2 = !0, this.min = t, this.max = e
    }
    set(t, e) {
        return this.min.copy(t), this.max.copy(e), this
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
        return this
    }
    setFromCenterAndSize(t, e) {
        const n = Zl.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this
    }
    makeEmpty() {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }
    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(t) {
        return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    }
    expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this
    }
    expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this
    }
    expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this
    }
    containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    }
    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    }
    intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    }
    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
    }
    distanceToPoint(t) {
        return this.clampPoint(t, Zl).distanceTo(t)
    }
    intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    }
    union(t) {
        return this.min.min(t.min), this.max.max(t.max), this
    }
    translate(t) {
        return this.min.add(t), this.max.add(t), this
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
}
class Kl extends Va {
    constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
        n = new wn(n), i = new wn(i);
        const r = e / 2,
            s = t / e,
            a = t / 2,
            o = [],
            l = [];
        for (let h = 0, u = 0, d = -a; h <= e; h++, d += s) {
            o.push(-a, 0, d, a, 0, d), o.push(d, 0, -a, d, 0, a);
            const t = h === r ? n : i;
            t.toArray(l, u), u += 3, t.toArray(l, u), u += 3, t.toArray(l, u), u += 3, t.toArray(l, u), u += 3
        }
        const c = new Vn;
        c.setAttribute("position", new Rn(o, 3)), c.setAttribute("color", new Rn(l, 3));
        super(c, new Da({
            vertexColors: !0,
            toneMapped: !1
        })), this.type = "GridHelper"
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose()
    }
}
const Ql = new ie,
    $l = new di;
class tc extends Va {
    constructor(t) {
        const e = new Vn,
            n = new Da({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }),
            i = [],
            r = [],
            s = {};

        function a(t, e) {
            o(t), o(e)
        }

        function o(t) {
            i.push(0, 0, 0), r.push(0, 0, 0), void 0 === s[t] && (s[t] = []), s[t].push(i.length / 3 - 1)
        }
        a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4"), e.setAttribute("position", new Rn(i, 3)), e.setAttribute("color", new Rn(r, 3)), super(e, n), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
        const l = new wn(16755200),
            c = new wn(16711680),
            h = new wn(43775),
            u = new wn(16777215),
            d = new wn(3355443);
        this.setColors(l, c, h, u, d)
    }
    setColors(t, e, n, i, r) {
        const s = this.geometry.getAttribute("color");
        s.setXYZ(0, t.r, t.g, t.b), s.setXYZ(1, t.r, t.g, t.b), s.setXYZ(2, t.r, t.g, t.b), s.setXYZ(3, t.r, t.g, t.b), s.setXYZ(4, t.r, t.g, t.b), s.setXYZ(5, t.r, t.g, t.b), s.setXYZ(6, t.r, t.g, t.b), s.setXYZ(7, t.r, t.g, t.b), s.setXYZ(8, t.r, t.g, t.b), s.setXYZ(9, t.r, t.g, t.b), s.setXYZ(10, t.r, t.g, t.b), s.setXYZ(11, t.r, t.g, t.b), s.setXYZ(12, t.r, t.g, t.b), s.setXYZ(13, t.r, t.g, t.b), s.setXYZ(14, t.r, t.g, t.b), s.setXYZ(15, t.r, t.g, t.b), s.setXYZ(16, t.r, t.g, t.b), s.setXYZ(17, t.r, t.g, t.b), s.setXYZ(18, t.r, t.g, t.b), s.setXYZ(19, t.r, t.g, t.b), s.setXYZ(20, t.r, t.g, t.b), s.setXYZ(21, t.r, t.g, t.b), s.setXYZ(22, t.r, t.g, t.b), s.setXYZ(23, t.r, t.g, t.b), s.setXYZ(24, e.r, e.g, e.b), s.setXYZ(25, e.r, e.g, e.b), s.setXYZ(26, e.r, e.g, e.b), s.setXYZ(27, e.r, e.g, e.b), s.setXYZ(28, e.r, e.g, e.b), s.setXYZ(29, e.r, e.g, e.b), s.setXYZ(30, e.r, e.g, e.b), s.setXYZ(31, e.r, e.g, e.b), s.setXYZ(32, n.r, n.g, n.b), s.setXYZ(33, n.r, n.g, n.b), s.setXYZ(34, n.r, n.g, n.b), s.setXYZ(35, n.r, n.g, n.b), s.setXYZ(36, n.r, n.g, n.b), s.setXYZ(37, n.r, n.g, n.b), s.setXYZ(38, i.r, i.g, i.b), s.setXYZ(39, i.r, i.g, i.b), s.setXYZ(40, r.r, r.g, r.b), s.setXYZ(41, r.r, r.g, r.b), s.setXYZ(42, r.r, r.g, r.b), s.setXYZ(43, r.r, r.g, r.b), s.setXYZ(44, r.r, r.g, r.b), s.setXYZ(45, r.r, r.g, r.b), s.setXYZ(46, r.r, r.g, r.b), s.setXYZ(47, r.r, r.g, r.b), s.setXYZ(48, r.r, r.g, r.b), s.setXYZ(49, r.r, r.g, r.b), s.needsUpdate = !0
    }
    update() {
        const t = this.geometry,
            e = this.pointMap;
        $l.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), ec("c", e, t, $l, 0, 0, -1), ec("t", e, t, $l, 0, 0, 1), ec("n1", e, t, $l, -1, -1, -1), ec("n2", e, t, $l, 1, -1, -1), ec("n3", e, t, $l, -1, 1, -1), ec("n4", e, t, $l, 1, 1, -1), ec("f1", e, t, $l, -1, -1, 1), ec("f2", e, t, $l, 1, -1, 1), ec("f3", e, t, $l, -1, 1, 1), ec("f4", e, t, $l, 1, 1, 1), ec("u1", e, t, $l, .7, 1.1, -1), ec("u2", e, t, $l, -.7, 1.1, -1), ec("u3", e, t, $l, 0, 2, -1), ec("cf1", e, t, $l, -1, 0, 1), ec("cf2", e, t, $l, 1, 0, 1), ec("cf3", e, t, $l, 0, -1, 1), ec("cf4", e, t, $l, 0, 1, 1), ec("cn1", e, t, $l, -1, 0, -1), ec("cn2", e, t, $l, 1, 0, -1), ec("cn3", e, t, $l, 0, -1, -1), ec("cn4", e, t, $l, 0, 1, -1), t.getAttribute("position").needsUpdate = !0
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose()
    }
}

function ec(t, e, n, i, r, s, a) {
    Ql.set(r, s, a).unproject(i);
    const o = e[t];
    if (void 0 !== o) {
        const t = n.getAttribute("position");
        for (let e = 0, n = o.length; e < n; e++) t.setXYZ(o[e], Ql.x, Ql.y, Ql.z)
    }
}
class nc extends Va {
    constructor(t = 1) {
        const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            n = new Vn;
        n.setAttribute("position", new Rn(e, 3)), n.setAttribute("color", new Rn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
        super(n, new Da({
            vertexColors: !0,
            toneMapped: !1
        })), this.type = "AxesHelper"
    }
    setColors(t, e, n) {
        const i = new wn,
            r = this.geometry.attributes.color.array;
        return i.set(t), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose()
    }
}
class ic {
    constructor() {
        this.type = "ShapePath", this.color = new wn, this.subPaths = [], this.currentPath = null
    }
    moveTo(t, e) {
        return this.currentPath = new fo, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
    }
    lineTo(t, e) {
        return this.currentPath.lineTo(t, e), this
    }
    quadraticCurveTo(t, e, n, i) {
        return this.currentPath.quadraticCurveTo(t, e, n, i), this
    }
    bezierCurveTo(t, e, n, i, r, s) {
        return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this
    }
    splineThru(t) {
        return this.currentPath.splineThru(t), this
    }
    toShapes(t) {
        function e(t, e) {
            const n = e.length;
            let i = !1;
            for (let r = n - 1, s = 0; s < n; r = s++) {
                let n = e[r],
                    a = e[s],
                    o = a.x - n.x,
                    l = a.y - n.y;
                if (Math.abs(l) > Number.EPSILON) {
                    if (l < 0 && (n = e[s], o = -o, a = e[r], l = -l), t.y < n.y || t.y > a.y) continue;
                    if (t.y === n.y) {
                        if (t.x === n.x) return !0
                    } else {
                        const e = l * (t.x - n.x) - o * (t.y - n.y);
                        if (0 === e) return !0;
                        if (e < 0) continue;
                        i = !i
                    }
                } else {
                    if (t.y !== n.y) continue;
                    if (a.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= a.x) return !0
                }
            }
            return i
        }
        const n = ko.isClockWise,
            i = this.subPaths;
        if (0 === i.length) return [];
        let r, s, a;
        const o = [];
        if (1 === i.length) return s = i[0], a = new mo, a.curves = s.curves, o.push(a), o;
        let l = !n(i[0].getPoints());
        l = t ? !l : l;
        const c = [],
            h = [];
        let u, d, p = [],
            f = 0;
        h[f] = void 0, p[f] = [];
        for (let m = 0, g = i.length; m < g; m++) s = i[m], u = s.getPoints(), r = n(u), r = t ? !r : r, r ? (!l && h[f] && f++, h[f] = {
            s: new mo,
            p: u
        }, h[f].s.curves = s.curves, l && f++, p[f] = []) : p[f].push({
            h: s,
            p: u[0]
        });
        if (!h[0]) return function (t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n],
                    r = new mo;
                r.curves = i.curves, e.push(r)
            }
            return e
        }(i);
        if (h.length > 1) {
            let t = !1,
                n = 0;
            for (let e = 0, i = h.length; e < i; e++) c[e] = [];
            for (let i = 0, r = h.length; i < r; i++) {
                const r = p[i];
                for (let s = 0; s < r.length; s++) {
                    const a = r[s];
                    let o = !0;
                    for (let r = 0; r < h.length; r++) e(a.p, h[r].p) && (i !== r && n++, o ? (o = !1, c[r].push(a)) : t = !0);
                    o && c[i].push(a)
                }
            }
            n > 0 && !1 === t && (p = c)
        }
        for (let m = 0, g = h.length; m < g; m++) {
            a = h[m].s, o.push(a), d = p[m];
            for (let t = 0, e = d.length; t < e; t++) a.holes.push(d[t].h)
        }
        return o
    }
}
class rc extends Wo {
    constructor(t, e) {
        super(t, e)
    }
}
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: t
    }
})), "undefined" != typeof window && (window.__THREE__ || (window.__THREE__ = t));
export {
    jo as $, nc as A, Pn as B, E as C, _a as D, xt as E, F, Kl as G, Sl as H, La as I, Fl as J, oa as K, R as L, It as M, P as N, sn as O, Ei as P, ne as Q, A as R, ui as S, n as T, S as U, Ut as V, $t as W, U as X, Ga as Y, xn as Z, Da as _, ie as a, l as a0, ql as a1, Vn as a2, ga as a3, Va as a4, za as a5, ka as a6, qa as a7, Ks as a8, Ma as a9, Ja as aA, Za as aB, ct as aC, B as aD, ee as aE, X as aF, W as aG, Xo as aH, ai as aI, Wo as aJ, o as aK, mo as aL, rc as aM, N as aN, h as aO, u as aP, Nt as aQ, ko as aR, Jl as aS, fo as aT, Rn as aU, ic as aV, di as aW, rt as aa, dl as ab, va as ac, L as ad, I as ae, D as af, C as ag, it as ah, a as ai, ca as aj, Kt as ak, ul as al, cl as am, ol as an, ae as ao, we as ap, tl as aq, et as ar, nt as as, tt as at, K as au, Z as av, Q as aw, $ as ax, J as ay, j as az, tc as b, Ie as c, aa as d, Fi as e, k as f, ri as g, e as h, Yl as i, Bl as j, sa as k, pi as l, O as m, at as n, lt as o, ot as p, vl as q, zl as r, yl as s, wn as t, Pl as u, Ul as v, Ol as w, An as x, ht as y, qo as z
};