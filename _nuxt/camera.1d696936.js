var t = Object.defineProperty,
    s = (s, i, e) => (((s, i, e) => {
        i in s ? t(s, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : s[i] = e
    })(s, "symbol" != typeof i ? i + "" : i, e), e);
import {
    C as i
} from "./index.6c8f1534.js";
import {
    a as e,
    l as h,
    i as r,
    M as a
} from "./three.module.522d90d0.js";
import {
    aT as o
} from "./entry.40e762a9.js";
import {
    O as p,
    m as n
} from "./MathUtils.b3e07139.js";
import {
    s as c
} from "./store.4d67c1b5.js";
const m = "#define GLSLIFY 1\nfloat cubicPulse(float c,float w,float x){x=abs(x-c);if(x>w)return 0.0;x/=w;return 1.0-x*x*(3.0-2.0*x);}";
class u extends i {
    constructor() {
        super(...arguments), s(this, "options", {
            vInit: new e,
            vTarget: new e
        }), s(this, "props", {
            fov: 24,
            damp: 3,
            distOrbit: .06 * Math.PI,
            viewport: () => c().state.viewport
        })
    }
    async onSetup() {
        const {
            vInit: t,
            vTarget: s
        } = this.options, {
            fov: i
        } = this.props;
        this.vInit = t, this.vOffset = new e, this.vPointer = new e, this.camera = new h(i, 1, .01, 56), this.camera.position.copy(this.vInit), this.sphTarget = new r, this.sphCurrent = new r, this.sphVelocity = new r, this.sphLast = new r, this.orbit = new p(this.camera, {
            vTarget: s,
            sphVelocity: this.sphVelocity
        }), this.pointer = o()
    }
    setFov(t) {
        this.camera.fov = t, this.camera.updateProjectionMatrix()
    }
    whileActive() {
        const t = performance.now();
        this.tLast || (this.tLast = t);
        const s = t - this.tLast;
        this.tLast = t, this.update(s / 1e3)
    }
    update(t) {
        const {
            x: s,
            y: i
        } = this.pointer, {
            width: e,
            height: h
        } = this.props.viewport, {
            distOrbit: r,
            damp: o
        } = this.props;
        this.sphTarget.theta = n(s.value, 0, e, -r, r), this.sphTarget.phi = n(i.value, 0, h, -r, r);
        for (const p in this.sphCurrent) "phi" !== p && "theta" !== p || (this.sphCurrent[p] = a.damp(this.sphCurrent[p], this.sphTarget[p], o, t), this.sphVelocity[p] = this.sphCurrent[p] - this.sphLast[p]);
        this.sphLast.copy(this.sphCurrent), this.orbit.update()
    }
    setViewport({
        width: t,
        height: s,
        height100vh: i
    }) {
        this.camera.aspect = t / i, this.camera.updateProjectionMatrix()
    }
}
export {
    u as C, m as g
};