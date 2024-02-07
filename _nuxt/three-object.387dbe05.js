import {
    O as t
} from "./three.module.522d90d0.js";
const s = {
    props: {
        pX: 0,
        pY: 0,
        pZ: 0,
        s: 1,
        rX: 0,
        rY: 0,
        rZ: 0,
        v: !0
    },
    onBeforeSetup() {
        this.object = new t
    },
    onAfterSetup() {
        this.object.name = this.options.name || this.constructor.name, this.options.addTo && !this.options.preventAddTo && (this.options.addTo.add(this.object), this.options.gltfRef && this.options.gltfRef !== this.object && this.object.add(this.options.gltfRef))
    },
    onDestroy() {
        this.object.parent && this.object.parent.remove(this.object)
    },
    setPX(t) {
        this.object.position.x = t
    },
    setPY(t) {
        this.object.position.y = t
    },
    setPZ(t) {
        this.object.position.z = t
    },
    setS(t) {
        if (this.props)
            if (t instanceof Array) this.object.scale.fromArray(t);
            else {
                const s = Math.max(.01, t);
                this.object.scale.setScalar(s)
            }
    },
    setRX() {
        this.props && this.setR()
    },
    setRY() {
        this.props && this.setR()
    },
    setRZ() {
        this.props && this.setR()
    },
    setR() {
        this.props && this.object.rotation.set(this.props.rX, this.props.rY, this.props.rZ)
    },
    setV() {
        this.props && (this.object.visible = !!this.props.v)
    }
};
export {
    s as T
};