var e = Object.defineProperty,
  t = (t, s, i) => (((t, s, i) => {
    s in t ? e(t, s, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    }) : t[s] = i
  })(t, "symbol" != typeof s ? s + "" : s, i), i);
import {
  aT as s,
  as as i,
  x as o,
  X as n,
  aZ as a,
  a_ as r,
  a$ as l,
  E as p,
  r as c,
  e as h,
  j as d,
  b as u,
  H as m,
  o as f,
  l as v
} from "./entry.40e762a9.js";
import {
  d as g,
  h as w,
  l as y,
  L as b
} from "./loader-globals.34132154.js";
import {
  g as x,
  s as S
} from "./globals.af653001.js";
import {
  s as T,
  d as A
} from "./store.4d67c1b5.js";
import {
  L as _,
  g as k
} from "./LoaderMixin.816c27e0.js";
import {
  g as C,
  S as L,
  p as P,
  t as M,
  a as R,
  H as I,
  s as E,
  k as O,
  T as F,
  b as D,
  l as B,
  w as U,
  c as j,
  d as N,
  o as z,
  B as $,
  G as H,
  e as G,
  f as X,
  h as V,
  i as Y,
  C as K,
  W,
  j as q,
  m as Z,
  n as Q,
  q as J,
  r as ee
} from "./custom-material.3ceafdc3.js";
import {
  C as te,
  b as se,
  e as ie,
  t as oe,
  g as ne
} from "./index.6c8f1534.js";
import {
  D as ae,
  x as re
} from "./dom-component.59802661.js";
import {
  ai as le,
  a8 as pe,
  x as ce,
  aJ as he,
  V as de,
  g as ue,
  M as me,
  O as fe,
  aK as ve,
  aL as ge,
  aM as we,
  d as ye,
  l as be,
  e as xe,
  W as Se,
  P as Te,
  f as Ae,
  m as _e,
  L as ke,
  C as Ce,
  S as Le,
  a as Pe,
  t as Me,
  R as Re,
  N as Ie,
  aB as Ee,
  ak as Oe,
  aC as Fe,
  n as De,
  o as Be,
  p as Ue,
  q as je,
  r as Ne,
  s as ze,
  u as $e,
  v as He,
  w as Ge,
  y as Xe,
  z as Ve,
  c as Ye,
  I as Ke,
  H as We,
  J as qe,
  B as Ze,
  K as Qe,
  X as Je,
  Y as et,
  Z as tt,
  _ as st,
  $ as it,
  a0 as ot,
  a1 as nt,
  a2 as at,
  a3 as rt,
  a4 as lt,
  a5 as pt,
  a6 as ct,
  a7 as ht,
  a9 as dt,
  aa as ut,
  ab as mt,
  ac as ft,
  Q as vt,
  ad as gt,
  ae as wt,
  af as yt,
  ag as bt,
  ah as xt,
  aj as St,
  al as Tt,
  am as At,
  an as _t,
  ao as kt,
  ap as Ct,
  aq as Lt,
  aN as Pt,
  aO as Mt,
  aP as Rt
} from "./three.module.522d90d0.js";
import {
  R as It
} from "./index.82028ee2.js";
import {
  T as Et
} from "./three-object.387dbe05.js";
import {
  L as Ot,
  C as Ft
} from "./constants.a4ba8ea6.js";
import {
  a as Dt,
  g as Bt,
  t as Ut
} from "./index-default.25f36e61.js";
import {
  m as jt,
  w as Nt,
  l as zt,
  d as $t,
  a as Ht
} from "./MathUtils.b3e07139.js";
import {
  i as Gt,
  a as Xt
} from "./gozer-env.ed057cb2.js";
import {
  a as Vt,
  b as Yt,
  c as Kt,
  s as Wt,
  m as qt,
  d as Zt
} from "./simple-three.8301cfdd.js";
import {
  p as Qt
} from "./number-pad.7e255fcb.js";
import {
  r as Jt
} from "./resize-observer.8438de8e.js";
import {
  l as es
} from "./lerp.a6fc2763.js";
import {
  W as ts,
  p as ss,
  g as is,
  u as os
} from "./tweakpane.cfae8375.js";
import {
  r as ns
} from "./random-int.6625ac30.js";
import {
  m as as
} from "./modulo.a5a4be50.js";
import {
  C as rs,
  g as ls
} from "./camera.1d696936.js";
import {
  g as ps,
  a as cs,
  b as hs,
  S as ds
} from "./rotate.34bd89a7.js";
import {
  g as us
} from "./drawing.d211013c.js";
import {
  D as ms
} from "./dom-element.35f09cfb.js";
import {
  i as fs
} from "./in-range.d69fbb78.js";
import "./index.77e4f8bb.js";
import "./load-font.bdf13add.js";
const vs = (e, t) => {
  const s = x.copy.find((t => t.component === e));
  return s
};
class gs extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.STENCIL,
      idPath: "mask0",
      side: le,
      color: "pink",
      shader: null,
      hasStroke: !1
    }), t(this, "props", {})
  }
  async onSetup() {
    const {
      layer: e,
      side: t,
      color: s,
      idPath: i,
      shader: o,
      hasStroke: n
    } = this.options, a = C(i), {
      viewbox: r
    } = a, l = r.slice(2), p = this.group = new pe;
    p.scale.y *= -1, p.scale.multiplyScalar(1 / Math.max(l[0], l[1]));
    const c = o ? ? new ce({
      color: s,
      side: t
    });
    let h;
    if (n) h = L.pointsToStroke(a.currentPath.getPoints(), {
      strokeWidth: .1
    });
    else {
      const e = L.createShapes(a);
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        h = new he(s)
      }
    }
    this.vSize = new de, h.computeBoundingBox(), h.boundingBox.getSize(this.vSize);
    const d = new ue(h, c);
    d.position.set(-l[0] / 2, -l[1] / 2, 0), d.layers.set(e), p.add(d), this.object.add(p)
  }
  onDestroy() {
    this.group.traverse((e => {
      var t, s;
      null == (t = e.material) || t.dispose(), null == (s = e.geometry) || s.dispose()
    }))
  }
}
Dt(gs, [Et]);
class ws extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      object: null
    }), t(this, "props", {
      active: !1,
      rotAngle: .25,
      rotStrength: 1,
      dir: 1,
      easing: 3
    }), t(this, "rx", 0), t(this, "ry", 0)
  }
  async onSetup() {
    this.object = this.options.object, this.pointer = s()
  }
  whileActive() {
    this.update()
  }
  update() {
    const {
      delta: e
    } = It.getInstance(), {
      vw: t,
      vh: s
    } = T().state, {
      x: i,
      y: o
    } = this.pointer, {
      rotAngle: n,
      rotStrength: a,
      dir: r,
      easing: l
    } = this.props;
    !this.pointerStarted && i.value && (this.pointerStarted = !0);
    const p = this.pointerStarted ? i.value : t / 2,
      c = this.pointerStarted ? o.value : s / 2,
      h = jt(c, 0, s, n * -r, n * r) * a,
      d = jt(p, 0, t, n * -r, n * r) * a;
    this.rx = me.damp(this.rx, h, l, e), this.ry = me.damp(this.ry, d, l, e), this.object.rotation.set(this.rx, this.ry, 0)
  }
}
class ys extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      name: "PersistentCard"
    }), t(this, "props", {
      rotStrength: 0
    }), t(this, "rx", 0), t(this, "ry", 0), t(this, "tweenProps", {
      pX: 0,
      pY: 0,
      pZ: 0,
      rX: 0,
      rY: 0,
      rZ: 0,
      s: 1,
      rotStrength: 0
    })
  }
  updateTweenProps() {
    this.props.pX = this.tweenProps.pX, this.props.pY = this.tweenProps.pY, this.props.pZ = this.tweenProps.pZ, this.props.rX = this.tweenProps.rX, this.props.rY = this.tweenProps.rY, this.props.rZ = this.tweenProps.rZ, this.props.s = this.tweenProps.s, this.props.rotStrength = this.tweenProps.rotStrength
  }
  async onSetup() {
    this.cardContainer = new fe, this.object.add(this.cardContainer), this.frontFace = await (new gs).setup({
      options: {
        addTo: this.cardContainer,
        side: le,
        color: "red",
        layer: 0,
        idPath: "mask3"
      }
    }), this.backFace = await (new gs).setup({
      options: {
        addTo: this.cardContainer,
        side: ve,
        color: "blue",
        layer: 0,
        idPath: "mask3"
      }
    }), Gt || (this.cardMotion = await (new ws).setup({
      options: {
        object: this.cardContainer
      },
      props: {
        rotStrength: () => this.props.rotStrength,
        active: () => this.props.active
      }
    }))
  }
  showFrontSide() {
    this.frontFace.object.visible = !0, this.backFace.object.visible = !1
  }
  showBackSide() {
    this.frontFace.object.visible = !1, this.backFace.object.visible = !0
  }
  showBothSides() {
    this.frontFace.object.visible = !0, this.backFace.object.visible = !0
  }
}
Dt(ys, [Et]);
const bs = ({
    layer: e,
    renderer: t,
    camera: s,
    scene: i,
    fbo: o,
    disabled: n
  }) => {
    const a = t.state,
      r = t.getContext();
    n || (a.buffers.color.setMask(!1), a.buffers.depth.setMask(!1), a.buffers.color.setLocked(!0), a.buffers.depth.setLocked(!0), a.buffers.stencil.setTest(!0), a.buffers.stencil.setFunc(r.ALWAYS, 1, 255), a.buffers.stencil.setOp(r.KEEP, r.KEEP, r.REPLACE), a.buffers.stencil.setClear(0), a.buffers.stencil.setLocked(!0)), void 0 !== e && s.layers.set(e), o && t.setRenderTarget(o), t.render(i, s)
  },
  xs = ({
    layer: e,
    renderer: t,
    camera: s,
    scene: i,
    fbo: o,
    disabled: n
  }) => {
    const a = t.state,
      r = t.getContext();
    n || (a.buffers.color.setMask(!0), a.buffers.depth.setMask(!0), a.buffers.color.setLocked(!1), a.buffers.depth.setLocked(!1), a.buffers.stencil.setLocked(!1), a.buffers.stencil.setFunc(r.EQUAL, 1, 255), a.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), a.buffers.stencil.setLocked(!0)), void 0 !== e && s.layers.set(e), o && t.setRenderTarget(o), t.render(i, s)
  },
  Ss = function (e) {
    const t = e.state;
    t.buffers.stencil.setLocked(!1), t.buffers.stencil.setTest(!1)
  },
  Ts = ((e = 0, t = 0, s = 1, i = 1, o = .05) => {
    const n = new ge;
    e = -s / 2, t = -i / 2, n.moveTo(e, t + o), n.lineTo(e, t + i - o), n.quadraticCurveTo(e, t + i, e + o, t + i), n.lineTo(e + s - o, t + i), n.quadraticCurveTo(e + s, t + i, e + s, t + i - o), n.lineTo(e + s, t + o), n.quadraticCurveTo(e + s, t, e + s - o, t), n.lineTo(e + o, t), n.quadraticCurveTo(e, t, e, t + o);
    return new we(n)
  })();
class As extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      name: "BgPlane",
      color: "red",
      layer: Ot.BG
    }), t(this, "tweenProps", {
      pY: 0,
      s: 1
    })
  }
  updateTweenProps() {
    this.props.pY = this.tweenProps.pY, this.props.s = this.tweenProps.s
  }
  async onSetup() {
    const {
      layer: e,
      color: t
    } = this.options;
    this.mesh = new ue(Ts, Vt(t)), this.object.add(this.mesh), this.mesh.layers.set(e)
  }
}
Dt(As, [Et]);
class _s extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      name: "PersistentCardMask"
    }), t(this, "props", {
      counter: 0,
      active: !0,
      visible: !0,
      viewport: () => T().state.viewport
    }), t(this, "onTlUpdate", (() => {
      this.card.updateTweenProps(), this.bgPlanes.forEach((e => {
        e.updateTweenProps()
      }))
    }))
  }
  async onSetup() {
    this.tweens = {}, this.scene = new ye, this.camera = new be(32, 1, .01, 100), this.camera.position.set(0, 0, 4), this.setupCardContainer(), await this.setupCard(), await this.setupBgPlanes(), P("persistentCard", this.scene)
  }
  setupCardContainer() {
    this.cardContainer = new fe, this.scene.add(this.cardContainer), i.set(this.cardContainer.rotation, {
      y: M(90)
    }), i.set(this.cardContainer.scale, {
      x: .3,
      y: .3,
      z: .3
    })
  }
  async setupCard() {
    this.card = await (new ys).setup({
      options: {
        addTo: this.cardContainer
      },
      props: {
        active: () => this.props.active
      }
    })
  }
  async setupBgPlanes() {
    this.bgContainer = new fe, this.bgContainer.visible = !1, this.scene.add(this.bgContainer), this.bgPlanes = await Promise.all(new Array(3).fill().map(((e, t) => {
      const s = t % 2 == 0 ? Ft.LAVENDER : Ft.DARK_LAVENDER;
      return (new As).setup({
        options: {
          addTo: this.bgContainer,
          color: s
        },
        props: {
          s: 1
        }
      })
    })))
  }
  setupTimelines() {
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill());
    const e = R("project-intro"),
      t = R("project-story"),
      s = R("collection-intro"),
      o = R("collection-gallery");
    let n, a, r, l;
    R("keep"), this.tl = i.timeline({
      onUpdate: this.onTlUpdate
    });
    const {
      tl: p
    } = this, {
      vw: c,
      vh: h,
      vh100: d,
      scale: u
    } = T().state, m = "power3.inOut", [f, v] = Nt(0, this.camera), g = c / d > 1 ? 1.2 * f : 1.1 * v;
    if (e) {
      const {
        heroBounds: t
      } = e;
      n = d, a = t.width / c * f;
      const s = .5 * n;
      r = f / -2 + t.left / c * f + a / 2;
      const i = t.top / d * v;
      l = v / 2 - i - a / 2, p.addLabel("projectIntro", e.props.start), p.fromTo(this.card.tweenProps, {
        s: g
      }, {
        s: a,
        duration: n,
        ease: "sine.inOut"
      }, "projectIntro"), p.fromTo(this.card.tweenProps, {
        pX: 0,
        pY: 0,
        rY: 0,
        rotStrength: 0
      }, {
        rotStrength: 1,
        rY: M(-30),
        duration: s,
        ease: "sine.inOut"
      }, "projectIntro"), p.to(this.card.tweenProps, {
        pX: r,
        pY: l,
        rY: 0,
        duration: s,
        ease: "sine.inOut"
      }, `projectIntro+=${s}`)
    }
    if (t && (n = d, p.addLabel("storyFlip", t.props.start), p.to(this.card.tweenProps, {
        rX: -.3,
        rZ: -.05,
        duration: n / 2,
        ease: m
      }, "storyFlip"), p.to(this.card.tweenProps, {
        rX: 0,
        rZ: 0,
        duration: n / 2,
        ease: m
      }, "storyFlip+=" + .5 * n), p.to(this.card.tweenProps, {
        s: g,
        pX: 0,
        pY: 0,
        rY: M(-180),
        rotStrength: 0,
        duration: n,
        ease: m
      }, "storyFlip")), s) {
      const {
        heroBounds: e
      } = s;
      n = d, a = e.width / c * f;
      r = f / -2 + e.left / c * f + a / 2;
      const t = e.top / d * v;
      l = v / 2 - t - a / 2;
      const i = .4 * d;
      p.set(this.card.tweenProps, {
        s: g
      }), p.addLabel("collectionIn", s.props.start), p.to(this.card.tweenProps, {
        s: a,
        duration: .75 * d,
        ease: "power3.inOut"
      }, "collectionIn"), p.to(this.card.tweenProps, {
        pX: r,
        pY: l,
        rY: 0,
        rotStrength: 1,
        duration: n,
        ease: "power3.inOut"
      }, "collectionIn"), p.to(this.card.tweenProps, {
        rX: -.3,
        duration: i,
        ease: "power1.inOut"
      }, "collectionIn"), p.to(this.card.tweenProps, {
        rX: 0,
        duration: i,
        ease: "power1.inOut"
      }, `collectionIn+=${i}`)
    }
    if (o) {
      const e = 300 * u,
        t = Xt ? .75 : 1;
      p.addLabel("galleryIn", o.props.start), p.to(this.card.tweenProps, {
        s: t,
        rotStrength: 0,
        duration: e,
        ease: "power2.in"
      }, "galleryIn"), p.add((() => this.card.props.v = !0), "+=1px"), p.add((() => this.card.props.v = !1), "+=1px"), p.add((() => this.bgContainer.visible = !1), "galleryIn-=1px"), p.add((() => this.bgContainer.visible = !0), "galleryIn");
      const i = o.props.end + h;
      p.add((() => this.bgContainer.visible = !0), i - 1), p.add((() => this.bgContainer.visible = !1), i);
      const {
        heroBounds: r
      } = s;
      a = r.width / c * f;
      const m = r.top / d * v;
      l = v / 2 - m - a / 2, this.bgPlanes.forEach(((e, t) => {
        const s = Xt ? .6 : .8,
          i = (100 * t + 100) * u;
        n = 300 * u, p.fromTo(e.tweenProps, {
          s: s,
          pY: l
        }, {
          s: g,
          pY: 0,
          duration: n,
          ease: "power3.out"
        }, `galleryIn+=${i}`)
      }))
    }
    p.seek(.001), this.options.tl.add(p, 0), this.onTlUpdate()
  }
  show({
    delay: e = 0
  }) {
    const t = "power3.inOut";
    i.to(this.cardContainer.rotation, {
      y: 0,
      duration: 3,
      delay: e,
      ease: t
    }), i.to(this.cardContainer.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 3,
      delay: e,
      ease: t
    })
  }
  showFrontSide() {
    this.card.showFrontSide()
  }
  showBackSide() {
    this.card.showBackSide()
  }
  showBothSides() {
    this.card.showBothSides()
  }
  whileActive() {}
  update() {}
  render() {
    if (!this.props.visible) return;
    const {
      renderer: e,
      orthoCamera: t
    } = It.getInstance();
    this.camera.layers.set(Ot.BG), e.render(this.scene, this.camera), this.camera.layers.set(Ot.MAIN)
  }
  resize({
    width: e,
    height: t,
    height100vh: s
  }) {
    this.camera.aspect = e / s, this.camera.updateProjectionMatrix(), this.setupTimelines()
  }
  onBeforeDestroy() {
    this.bgPlanes.forEach((e => e.destroy())), this.bgPlanes = null
  }
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill(), i.killTweensOf(this.cardContainer)
  }
}
const ks = ({
  context: e
}) => re ` <div class="scrollIndicator type-caption3">
    <div
      data-ui="text"
      class="scrollIndicator__text"
    >
      Scroll
    </div>
    <div class="scrollIndicator__arrow">
      <div
        data-ui="leftLine"
        class="leftLine"
      ></div>
      <div
        data-ui="rightLine"
        class="rightLine"
      ></div>
    </div>
  </div>`;
class Cs extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ks,
      onClick: () => {}
    }), t(this, "props", {
      active: !1
    }), t(this, "show", (({
      delay: e = 0
    } = {}) => {
      this.props.active = !0, this.hackyText.show({
        delay: e,
        speed: 1.5
      }), this.tl.timeScale(1).delay(e).restart(!0)
    })), t(this, "onComplete", (() => {
      this.delay = i.delayedCall(6, this.show)
    }))
  }
  async onSetup() {
    this.lines = [this.ui.leftLine, this.ui.rightLin], this.hackyText = await (new I).setup({
      options: {
        el: this.ui.text
      }
    }), this.setupAnimation()
  }
  setupAnimation() {
    this.tl = i.timeline({
      paused: !0,
      onComplete: this.onComplete
    });
    const e = "sine.out";
    this.tl.from(this.ui.leftLine, {
      y: -10,
      scaleY: 0,
      duration: .6,
      ease: e
    }), this.tl.from(this.ui.rightLine, {
      x: 10,
      scaleX: 0,
      duration: .6,
      ease: e
    }, .05), i.set(this.ui.leftLine, {
      scaleX: 1.5
    }), i.set(this.ui.rightLine, {
      scaleY: 1.5
    })
  }
  hide({
    delay: e = 0
  } = {}) {
    var t;
    this.props.active = !1, this.tl.timeScale(2).reverse(), null == (t = this.delay) || t.kill(), this.hackyText.hide()
  }
  onDestroy() {
    var e;
    null == (e = this.delay) || e.kill(), this.tl.kill()
  }
}
Dt(Cs, [ae]);
const Ls = ({
  options: e,
  context: t
}) => re ` <section
    @pointerdown=${t.handlePointerDown}
    @pointerup=${t.handlePointerUp}
    class="homeLanding  homeSection"
  >
    <div class="sectionInner">
      <div
        data-ui="inner"
        class="homeLanding__inner"
      >
        <p
          data-ui="body"
          class="homeLanding__description  type-body1"
        >
          ${e.copy.desc}
        </p>

        <div class="homeLanding__titleBlock">
          <h1 class="js-title  homeLanding__title keep">
            <span class="sub">01K</span>
            ${e.copy.keep}
            <span class="dot">.</span>
          </h1>
          <h1 class="js-title  homeLanding__title protect">
            <span class="sub">02P</span>
            ${e.copy.protect}
            <span class="dot">.</span>
          </h1>
          <h1 class="js-title  homeLanding__title reimagine">
            <span class="sub">03R</span>
            ${e.copy.reimagine}
            <span class="dot">.</span>
          </h1>
        </div>
      </div>
    </div>
  </section>`;
class Ps extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Ls,
      id: "landing",
      stStart: "top top+=1px",
      stEnd: "bottom top"
    }), t(this, "props", {
      counter: 0,
      name: "Hello Props",
      active: !0,
      hideText: !1
    }), t(this, "handlePointerDown", (() => {
      T().state.landingPointerDown = !0
    })), t(this, "handlePointerUp", (() => {
      T().state.landingPointerDown = !1
    }))
  }
  onEnter() {
    var e;
    null == (e = x.app) || e.setActiveSection("")
  }
  setVh(e) {
    this.el.style.height = `${e}px`
  }
  async onSetup() {
    this.titles = this.el.querySelectorAll(".js-title"), this.bodyCopy = await (new I).setup({
      options: {
        el: this.ui.body
      }
    }), Gt || (this.scrollIndicator = await (new Cs).setup({
      options: {
        appendTo: this.ui.inner
      }
    })), this.sound = new o.Howl({
      loop: !0,
      src: ["/audio/FX_text_animation_loop.mp3"]
    })
  }
  setupTimeline() {
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill());
    const e = this.tl = i.timeline(),
      t = 100 * T().state.scale,
      {
        vh: s
      } = T().state,
      o = .3 * s;
    e.add((() => this.props.hideText = !1), o - 1), e.add((() => this.props.hideText = !0), o), e.fromTo(this.ui.inner, {
      alpha: 1
    }, {
      alpha: 0,
      duration: t
    }), e.seek(.001), this.options.tl.add(e, 0)
  }
  show({
    delay: e = 0
  } = {}) {
    var t;
    const {
      scale: s
    } = T().state;
    i.fromTo(this.titles, {
      alpha: 0
    }, {
      alpha: 1,
      duration: .1,
      stagger: .1,
      delay: e
    }), i.fromTo(this.titles, {
      x: -200 * s
    }, {
      x: 0,
      duration: 2,
      delay: e,
      stagger: .1,
      ease: "expo.out"
    });
    const o = this.bodyCopy.show({
      delay: e,
      speed: .4
    });
    null == (t = this.scrollIndicator) || t.show({
      delay: e + .5
    }), i.delayedCall(e, (() => {
      this.sound.play(), i.delayedCall(o, (() => this.sound.stop()))
    }))
  }
  offHideText({
    firstTrigger: e
  }) {
    var t;
    e || null == (t = this.scrollIndicator) || t.show()
  }
  onHideText() {
    var e;
    null == (e = this.scrollIndicator) || e.hide()
  }
  resize() {
    this.setupTimeline()
  }
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill()
  }
}
Dt(Ps, [E, ae]);
class Ms extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      el: null,
      useScrollPos: !0
    }), t(this, "props", {
      y: 0
    }), t(this, "bounds", {
      height: 1,
      left: 0,
      top: 0,
      width: 1,
      topFromSection: 0
    })
  }
  async onSetup() {
    this.el = this.options.el
  }
  resize({
    offset: e = 0
  } = {}) {
    const {
      scrollSmoother: t
    } = x, {
      useScrollPos: s
    } = this.options, i = s ? t ? t.scrollTop() : T().state.scroll : 0, {
      height: o,
      left: n,
      top: a,
      width: r
    } = this.el.getBoundingClientRect(), l = a + i, p = l - e;
    this.bounds = {
      height: o,
      left: n,
      width: r,
      top: l,
      topFromSection: p
    }
  }
}
const Rs = Xt ? {} : {
    backSide: `${O}project-intro/back-face.ktx2`
  },
  Is = Gt ? "-mobile" : "";
class Es extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      id: "landing",
      useMasking: !0
    }), t(this, "props", {
      active: !1,
      viewport: () => T().state.viewport
    }), t(this, "assets", {
      ...Rs,
      frontSide: `${O}project-intro/front-face${Is}.ktx2`
    }), t(this, "frontLayer", 0), t(this, "backLayer", 1), t(this, "onTlUpdate", (() => {
      this.cardMask.updateTweenProps()
    }))
  }
  async onSetup() {
    await this.setupScene(), await this.setupCard(), P("projectIntroMedia", this.scene)
  }
  async setupScene() {
    this.scene = new ye, this.bgObj = new fe, this.scene.add(this.bgObj);
    const {
      backSide: e,
      frontSide: t
    } = this.assets;
    this.envBack = new ue(Yt, Kt(e)), this.envFront = new ue(Yt, Kt(t)), this.envBack.layers.set(0), this.envFront.layers.set(1), this.bgObj.add(this.envBack), this.bgObj.add(this.envFront)
  }
  async setupCard() {
    this.cardMask = await (new Os).setup({
      options: {
        addTo: this.scene,
        layer: Ot.STENCIL
      },
      props: {
        active: () => this.props.active
      }
    })
  }
  setupTimeline() {
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill());
    const e = this.tl = i.timeline({
        onUpdate: this.onTlUpdate
      }),
      {
        perspCamera: t
      } = It.getInstance(),
      {
        vw: s,
        vh: o,
        vh100: n
      } = T().state,
      {
        bounds: a
      } = this.options.boundingBox,
      [r, l] = Nt(0, t),
      p = o,
      c = a.width / s * r,
      h = c / (a.width / a.height),
      d = r / -2 + a.left / s * r + c / 2,
      u = l / 2 - a.top / n * l - h / 2;
    this.cardMask.props.aspect = a.width / a.height;
    const m = R("project-intro"),
      f = o,
      v = m.props.start;
    e.addLabel("down", v), e.add((() => {
      this.cardMask.props.v = !1
    }), 0), e.add((() => {
      this.cardMask.props.v = !0
    }), "down"), e.fromTo(this.cardMask.tweenProps, {
      s: c,
      rotStrength: .3,
      rY: Xt ? 0 : M(160),
      pX: 0,
      pY: Xt ? -.2 : 0
    }, {
      rY: 0,
      pX: d,
      pY: u,
      duration: f,
      ease: "sine.inOut"
    }, "down");
    const g = .5 * f;
    e.fromTo(this.cardMask.tweenProps, {
      pZ: 0
    }, {
      pZ: Xt ? 0 : -.75,
      duration: g,
      ease: "sine.inOut"
    }, "down"), e.to(this.cardMask.tweenProps, {
      pZ: 0,
      duration: g,
      ease: "sine.inOut"
    }, `down+=${g}`), e.fromTo(this.bgObj.position, {
      x: 0,
      y: Xt ? -.1 : 0
    }, {
      x: Xt ? 0 : d,
      y: Xt ? u : 0,
      duration: p,
      ease: "sine.inOut"
    }, "down"), e.addLabel("out", m.props.end - o), e.add((() => {
      this.cardMask.showBothSides()
    }), "out"), e.add((() => {
      this.cardMask.showFrontSide()
    }), "out+=1px"), e.to(this.cardMask.tweenProps, {
      pY: Xt ? l : .3 * l,
      rY: Xt ? 0 : M(180),
      duration: Xt ? o : .75 * o,
      ease: "power3.inOut"
    }, "out"), e.to(this.cardMask.tweenProps, {
      rotStrength: 0,
      duration: .2 * o,
      ease: "power3.inOut"
    }, "out"), e.to(this.bgObj.position, {
      y: Xt ? .5 * l : .25 * l,
      duration: o,
      ease: "power3.inOut"
    }, "out"), e.seek(.001), this.options.tl.add(e, 0)
  }
  updateDesktopTimeline() {}
  updateMobileTimeline() {}
  whileActive() {}
  render() {
    const {
      renderer: e,
      perspCamera: t
    } = It.getInstance(), {
      useMasking: s
    } = this.options;
    let i = this.cardMask.props.rY > 1.4 ? 0 : this.cardMask.props.rY < -1.85 ? 100 : 1;
    return s ? (e.clearDepth(), e.clearStencil(), bs({
      renderer: e,
      layer: Ot.STENCIL,
      camera: t,
      scene: this.scene
    }), xs({
      renderer: e,
      layer: i,
      camera: t,
      scene: this.scene
    }), Ss(e)) : (t.layers.set(i), e.render(this.scene, t)), null
  }
  resize() {
    this.resizeBgObj(), this.setupTimeline()
  }
  resizeBgObj() {
    const {
      perspCamera: e
    } = It.getInstance(), [t, s] = Nt(0, e), i = R("project-intro"), {
      width: o,
      height: n
    } = i.mediaBoundingBox.bounds, {
      vw: a,
      vh: r,
      vh100: l
    } = T().state;
    let p = 1.3 * o,
      c = p / 1;
    o / n < 1 && (c = 1.3 * n, p = 1 * c), p = p / a * t, c = c / r * s, this.bgObj.scale.set(p, c)
  }
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill()
  }
}
class Os extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: 0
    }), t(this, "props", {
      active: !1,
      aspect: 3 / 4,
      width: 1,
      rotStrength: .3,
      height: e => e.width / e.aspect,
      rollover: () => T().state.trailerVideoRollover
    }), t(this, "tweenProps", {
      pX: 0,
      pY: 0,
      pZ: 0,
      rX: 0,
      rY: 0,
      rZ: 0,
      s: 1,
      rotStrength: 1
    })
  }
  updateTweenProps() {
    this.props.pX = this.tweenProps.pX, this.props.pY = this.tweenProps.pY, this.props.pZ = this.tweenProps.pZ, this.props.rX = this.tweenProps.rX, this.props.rY = this.tweenProps.rY, this.props.rZ = this.tweenProps.rZ, this.props.s = this.tweenProps.s, this.props.rotStrength = this.tweenProps.rotStrength
  }
  async onSetup() {
    const {
      layer: e
    } = this.options;
    this.tweens = {
      rolloverScale: 1
    }, this.innerObj = new fe, this.object.add(this.innerObj), this.frontFace = await (new gs).setup({
      options: {
        addTo: this.innerObj,
        side: le,
        color: "red",
        layer: e,
        idPath: "mask4"
      }
    }), this.backFace = await (new gs).setup({
      options: {
        addTo: this.innerObj,
        side: ve,
        color: "blue",
        layer: e,
        idPath: "mask4"
      }
    }), Gt || (this.cardMaskMotion = await (new ws).setup({
      options: {
        object: this.innerObj
      },
      props: {
        rotStrength: () => this.props.rotStrength,
        dir: -1,
        active: () => this.props.active
      }
    }))
  }
  setRollover(e) {
    const t = e ? 1.03 : 1;
    i.killTweensOf(this.tweens.rolloverScale), i.to(this.tweens, {
      rolloverScale: t,
      duration: 1.2,
      ease: "expo.out",
      onUpdate: () => {
        this.innerObj.scale.setScalar(this.tweens.rolloverScale)
      }
    })
  }
  showFrontSide() {
    this.frontFace.object.visible = !0, this.backFace.object.visible = !1
  }
  showBackSide() {
    this.frontFace.object.visible = !1, this.backFace.object.visible = !0
  }
  showBothSides() {
    this.frontFace.object.visible = !0, this.backFace.object.visible = !0
  }
  setAspect(e) {
    const t = 1 / e;
    this.frontFace.props.s = [1, t, 1], this.backFace.props.s = [1, t, 1]
  }
}
Dt(Es, [_()]), Dt(Os, [Et]);
const Fs = ({
  context: e
}) => re ` <button class="btnPlay">
    <svg
      class="btnPlay__icon"
      data-ui="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61.2 61.2"
      overflow="visible"
    >
      <circle
        cx="30.6"
        cy="30.6"
        r="30.11"
        fill="none"
        stroke="currentColor"
        stroke-width="0.99"
        data-ui="ring"
      />
      <path
        data-ui="play"
        d="M27.64,32.45v-5.1a1.09,1.09,0,0,1,1.81-.64l4.73,4.06a.82.82,0,0,1,0,1.32L29.32,35.7A1,1,0,0,1,27.64,35h0"
        transform="translate(0 -0.48)"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.99"
      />
    </svg>
  </button>`;
class Ds extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Fs,
      onClick: () => {}
    }), t(this, "props", {
      active: !1,
      rollover: !1
    })
  }
  async onSetup() {
    this.lines = [this.ui.ring, this.ui.play], this.setupAnimation()
  }
  setupAnimation() {
    this.tl = new i.timeline({
      paused: !0
    }), i.set(this.ui.play, {
      drawSVG: "0% 0%"
    }), i.set(this.ui.ring, {
      scale: 0,
      transformOrigin: "center"
    })
  }
  show({
    delay: e = 0
  } = {}) {
    this.props.active = !0, i.killTweensOf(this.lines), i.to(this.ui.play, {
      drawSVG: "0% 100%",
      duration: 1,
      delay: e,
      ease: "power3.inOut"
    }), i.to(this.ui.ring, {
      scale: 1,
      duration: 1,
      delay: e,
      ease: "expo.out"
    })
  }
  hide({
    delay: e = 0
  } = {}) {
    this.props.active = !1, i.killTweensOf(this.lines), i.to(this.ui.play, {
      drawSVG: "100% 100%",
      duration: 1,
      delay: e,
      stagger: .2,
      ease: "power3.inOut"
    }), i.to(this.ui.ring, {
      scale: 0,
      duration: .5,
      delay: e,
      ease: "power2.in"
    })
  }
  onRollover() {
    i.killTweensOf(this.lines), i.to(this.ui.ring, {
      scale: 1.1,
      duration: 1,
      ease: "expo.out"
    })
  }
  offRollover({
    firstTrigger: e
  }) {
    e || (i.killTweensOf(this.lines), i.to(this.ui.ring, {
      scale: 1,
      duration: 1,
      ease: "expo.out"
    }))
  }
}
Dt(Ds, [ae]);
const Bs = ({
  options: e,
  context: t
}) => re `<section class="homeProjectIntro  homeSection  darkTheme">
    <div
      data-ui="pin"
      class="homeProjectIntro__inner  sectionInner  fill"
    >
      <!-- <div class="block--left"> -->
      <div
        data-ui="leftContainer"
        class="homeProjectIntro__leftContainer  d-only"
      ></div>
      <div
        data-ui="topLeft"
        class="block--topleft  block"
      >
        ${B("right")} ${B("bottom")}
      </div>
      <div class="block--right  block">
        <div
          @click=${t.handleVideoClick}
          @pointerenter=${t.handleVideoEnter}
          @pointerleave=${t.handleVideoLeave}
          data-ui="media"
          class="homeProjectIntro__media"
        ></div>
      </div>
      <div
        data-ui="bottomLeft"
        class="block--bottomleft  block"
      >
        ${B("right")}
        <div
          data-ui="img1"
          class="homeProjectIntro__img1Wrap  "
        >
          <img
            class="homeProjectIntro__img1"
            src="${U}project-intro/trailer-side-media.webp"
            alt="trailer-side-media"
          />
        </div>
        <div
          data-ui="hero"
          class="homeProjectIntro__hero"
        ></div>
        <p
          data-ui="description"
          class="homeProjectIntro__description  type-body1"
        >
          ${e.copy.body}
        </p>
      </div>
      <!-- </div> -->
    </div>
  </section>`;
class Us extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Bs,
      id: "project-intro",
      stStart: "top bottom-=1px",
      stEnd: "bottom top"
    }), t(this, "props", {
      active: !1,
      showUi: !1
    }), t(this, "handleVideoEnter", (() => {
      this.props.showUi && (T().state.trailerVideoRollover = !0)
    })), t(this, "handleVideoLeave", (() => {
      this.props.showUi && (T().state.trailerVideoRollover = !1)
    })), t(this, "handleVideoClick", (() => {
      const {
        app: e
      } = x;
      e && e.setVideoOverlay({
        title: "Trailer",
        src: "/videos/trailer/keepers-teaser-1080.mp4"
      })
    }))
  }
  onEnter() {
    var e;
    null == (e = x.app) || e.setActiveSection("#project")
  }
  async onSetup() {
    Xt || (this.ui.leftContainer.appendChild(this.ui.topLeft), this.ui.leftContainer.appendChild(this.ui.bottomLeft)), this.lines = this.el.querySelectorAll(".js-line"), this.heroBoundingBox = await (new Ms).setup({
      options: {
        el: this.ui.hero,
        useScrollPos: !1
      }
    }), this.mediaBoundingBox = await (new Ms).setup({
      options: {
        el: this.ui.media,
        useScrollPos: !1
      }
    }), this.mediaCard = await (new Es).setup({
      options: {
        el: this.ui.media,
        tl: this.options.tl,
        boundingBox: this.mediaBoundingBox
      },
      props: {
        active: () => this.props.enter,
        start: () => this.props.start
      }
    }), this.btnPlay = await (new Ds).setup({
      options: {
        appendTo: this.ui.media
      },
      props: {
        rollover: () => T().state.trailerVideoRollover
      }
    }), await this.setupTitle(), await this.setupCaptions(), this.waitForFonts()
  }
  waitForFonts() {
    this.stopEffect = se((() => this.title.props.fontLoaded), (({
      firstTrigger: e
    }) => {
      this.setupTimeline()
    }))
  }
  async setupTitle() {
    const {
      copy: e
    } = this.options;
    this.title = await (new F).setup({
      options: {
        className: "homeProjectIntro__title",
        appendTo: this.ui.topLeft,
        text: e.title,
        caption: "001"
      }
    })
  }
  async setupCaptions() {
    this.options, this.body = await (new I).setup({
      options: {
        el: this.ui.description
      }
    }), this.img1Caption = await (new D).setup({
      options: {
        appendTo: this.ui.img1,
        text: ""
      }
    }), this.heroCaption = await (new D).setup({
      options: {
        appendTo: this.ui.hero,
        text: this.options.copy.character_caption
      }
    }), this.mediaCaption = await (new D).setup({
      options: {
        appendTo: this.ui.media,
        text: this.options.copy.video_caption
      }
    }), Xt && (this.edenCaption = await (new D).setup({
      options: {
        appendTo: this.ui.bottomLeft,
        text: "The new eden",
        textClass: "newEden"
      }
    }))
  }
  setupTimeline() {
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill()), this.animEls = [...this.title.lines, this.ui.img1];
    const e = this.tl = i.timeline(),
      {
        start: t,
        end: s
      } = this.props,
      {
        vh: o,
        scale: n
      } = T().state;
    let a = .4 * o;
    const r = o * (Xt ? .05 : .1);
    let l = this.props.start + .7 * o;
    e.addLabel("in", l), e.fromTo(this.body.el, {
      alpha: 0
    }, {
      alpha: 1,
      duration: .2 * o
    }, l);
    const p = (t, s) => {
        e.fromTo(t, {
          y: r,
          alpha: 0
        }, {
          y: 0,
          alpha: 1,
          duration: a,
          ease: "power2.out"
        }, s)
      },
      c = (t, s) => {
        e.to(t, {
          y: -r,
          alpha: 0,
          duration: a,
          ease: "power2.in"
        }, s)
      };
    this.animEls.forEach(((e, t) => {
      const s = l + t * o * .05;
      p(e, s), t || p(this.title.caption.el, s)
    }));
    const h = t + .95 * o,
      d = s - .8 * o;
    e.add((() => this.props.showUi = !1), h - 1), e.add((() => this.props.showUi = !0), h), e.add((() => this.props.showUi = !0), d - 1), e.add((() => this.props.showUi = !1), d), this.btnPlay && e.fromTo(this.btnPlay.el, {
      alpha: 0
    }, {
      alpha: 1,
      duration: .05 * o
    }, h - .05 * o), e.fromTo(this.lines, {
      alpha: 0
    }, {
      alpha: 1,
      duration: .2 * o
    }, t + .8 * o);
    let u = s - o;
    e.addLabel("out", u), e.to(this.body.el, {
      alpha: 0,
      duration: .2 * o
    }, u), this.animEls.forEach(((e, t) => {
      const s = u + t * o * .05;
      c(e, s), t || c(this.title.caption.el, s)
    })), e.to(this.lines, {
      alpha: 0,
      duration: .3 * o
    }, u), this.btnPlay && e.to(this.btnPlay.el, {
      alpha: 0,
      duration: .1 * o
    }, u), Xt || this.btnPlay && e.to(this.btnPlay.el, {
      y: .5 * -o,
      duration: o,
      ease: "power3.inOut"
    }, u), this.options.tl.add(e, 0)
  }
  onShowUi({
    firstTrigger: e
  }) {
    var t, s;
    const i = .03;
    this.heroCaption.show({
      delay: 0,
      stagger: i
    }), this.mediaCaption.show({
      delay: .2,
      stagger: i
    }), null == (t = this.edenCaption) || t.show({
      delay: .2,
      stagger: i
    }), null == (s = this.btnPlay) || s.show({
      delay: .2
    }), this.firstBodyShow || this.body.show({
      speed: .5
    }), this.firstBodyShow = !0
  }
  offShowUi({
    firstTrigger: e
  }) {
    var t, s;
    if (e) return;
    const i = .005;
    this.heroCaption.hide({
      stagger: i
    }), this.mediaCaption.hide({
      stagger: i
    }), null == (t = this.edenCaption) || t.hide({
      stagger: i
    }), this.img1Caption.hide({
      stagger: i
    }), null == (s = this.btnPlay) || s.hide()
  }
  render() {
    var e;
    null == (e = this.mediaCard) || e.render()
  }
  resize() {
    var e;
    this.title.props.fontLoaded && this.setupTimeline(), this.heroBoundingBox.resize({
      offset: this.props.top
    }), this.mediaBoundingBox.resize({
      offset: this.props.top
    }), null == (e = this.mediaCard) || e.resize()
  }
  get heroBounds() {
    return this.heroBoundingBox.bounds
  }
}
Dt(Us, [E, ae]);
const js = ({
  options: e,
  props: t
}) => re `<section class="homeProjectStory  homeSection  lightTheme">
    <div class="sectionInner">
      <div class="row1 row">
        ${B("top")}
        <div class="rowBlock">
          ${B("right")}
          <div
            data-ui="title1"
            class="title1"
          ></div>
        </div>
        <div class="rowBlock small  d-only">
          <div
            data-ui="terminalInfo"
            class="terminalInfo  textHacky"
          >
            ${e.copy.console_text_loading}
          </div>
        </div>
      </div>
      <div class="row2 row">
        ${B("top")}
        <div class="rowBlock">${B("right")}</div>
        <div
          data-ui="videoWrap"
          class="rowBlock small"
        >
          <div
            data-ui="coords"
            class="coords  textHacky"
          >
            ${e.copy.console_text_coordinates}
          </div>
          <img
            src="/svg/degrees.svg"
            alt=""
            class="degrees"
          />
        </div>
      </div>
      <div class="row3 row">
        ${B("top")}
        <div
          data-ui="diagLineBlock"
          class="rowBlock small d-only"
        >
          ${B("right")} ${B("diagonal")}
        </div>
        <div class="rowBlock">
          <div
            data-ui="title2"
            class="title2"
          ></div>
        </div>
      </div>
      <div class="row4 row">
        ${B("top")}
        <div class="rowBlock small  d-only">${B("right")}</div>
        <div
          data-ui="logoBoundingBox"
          class="rowBlock"
        >
          ${B("right")} ${B("top","m-only")}
        </div>
        <div
          data-ui="lastRowBlock"
          class="rowBlock small  d-only"
        >
          <!-- <p class="body">
            Our all-star team is not new in this world, we know our trade and
            we're are here to be transparent. A group of storytellers and
            artists with past experiences at XXXX have teamed up to deliver a
            new horizon in the Metaverse.
          </p> -->
        </div>
      </div>
    </div>
  </section>`;
class Ns extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: js,
      id: "project-story"
    }), t(this, "props", {
      active: !1,
      showHackyText: !1
    })
  }
  async onSetup() {
    this.lines = this.el.querySelectorAll(".js-line"), await this.setupTitles(), await this.setupCaptions(), await this.setupTerminalInfo(), await this.setupBoundingBox(), this.setupVideo(), this.waitForFonts()
  }
  async setupBoundingBox() {
    this.logoBoundingBox = await (new Ms).setup({
      options: {
        el: this.ui.logoBoundingBox,
        useScrollPos: !1
      }
    })
  }
  async setupTitles() {
    const {
      copy: e
    } = this.options;
    this.title1 = await (new F).setup({
      options: {
        appendTo: this.ui.title1,
        text: e.story_strapline_1,
        caption: "002"
      }
    }), this.title2 = await (new F).setup({
      options: {
        appendTo: this.ui.title2,
        text: e.story_strapline_2,
        caption: "003"
      }
    })
  }
  async setupCaptions() {
    const {
      copy: e
    } = this.options;
    Xt || (this.logoCaption = await (new D).setup({
      options: {
        appendTo: this.ui.logoBoundingBox,
        text: e.symbol_caption || "Keepers <br>Symbol"
      },
      props: {
        active: !0
      }
    }))
  }
  async setupTerminalInfo() {
    Xt || (this.hackyCoords = await (new I).setup({
      options: {
        el: this.ui.coords
      }
    }), this.hackyTerminalinfo = await (new I).setup({
      options: {
        el: this.ui.terminalInfo
      }
    }))
  }
  setupVideo() {
    const e = this.video = document.createElement("video");
    e.playsInline = !0, e.muted = !0, e.loop = !0;
    const t = "/videos/project/topo-landing",
      s = `${t}.mp4`,
      i = `${t}.webm`;
    e.appendChild(j(`<source src="${s}" type='video/mp4; codecs="hvc1"' />`)), e.appendChild(j(`<source src="${i}" type="video/webm" />`)), this.ui.videoWrap.appendChild(this.video)
  }
  waitForFonts() {}
  onShowHackyText() {
    var e, t;
    null == (e = this.hackyTerminalinfo) || e.show({
      speed: .6
    }), null == (t = this.hackyCoords) || t.show({
      speed: .6,
      delay: .2
    })
  }
  offShowHackyText({
    firstTrigger: e
  }) {
    var t;
    e || null == (t = this.hackyTerminalinfo) || t.reset()
  }
  setupTimeline() {
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill());
    const e = this.tl = i.timeline({}),
      {
        vh: t,
        scale: s
      } = T().state,
      {
        bounds: o,
        top: n,
        start: a,
        end: r
      } = this.props,
      l = t,
      p = o.height + (Xt ? t : 0),
      c = l - p,
      h = t * (Xt ? .5 : .8),
      d = t * (Xt ? .03 : .05),
      u = Xt ? 20 : 30;
    e.fromTo(this.el, {
      y: l
    }, {
      y: c,
      duration: p,
      ease: "none"
    }, a), e.add((() => this.props.showHackyText = !1), a + .6 * t - 1), e.add((() => this.props.showHackyText = !0), a + .6 * t);
    const m = a + t * (Xt ? .6 : .5);
    if (e.addLabel("title1In", m), this.title1.lines.forEach(((t, s) => {
        const i = s * u,
          o = s * d;
        e.fromTo(t, {
          y: o
        }, {
          y: 0,
          delay: i,
          duration: h,
          ease: "expo.out"
        }, "title1In"), e.fromTo(t, {
          alpha: 0
        }, {
          alpha: 1,
          delay: i,
          duration: .7 * h,
          ease: "sine.out"
        }, "title1In")
      })), e.fromTo(this.lines, {
        alpha: 0
      }, {
        alpha: 1,
        duration: .3 * t
      }, "title1In"), !Xt) {
      const s = a + t * (Xt ? 1.1 : 1.2);
      e.addLabel("title2In", s), this.title2.lines.forEach(((t, s) => {
        const i = s * u,
          o = s * d;
        e.fromTo(t, {
          y: o,
          alpha: 0
        }, {
          y: 0,
          alpha: 1,
          delay: i,
          duration: h,
          ease: "expo.out"
        }, "title2In"), e.fromTo(t, {
          alpha: 0
        }, {
          alpha: 1,
          delay: i,
          duration: .7 * h,
          ease: "sine.out"
        }, "title2In")
      }))
    }
    e.to(this.lines, {
      alpha: 0,
      duration: .3 * t
    }, r - .8 * t), e.add((() => {
      var e;
      return null == (e = this.logoCaption) ? void 0 : e.show()
    }), r - t - 1), e.add((() => {
      var e;
      return null == (e = this.logoCaption) ? void 0 : e.hide()
    }), r - t), this.options.tl.add(e, 0)
  }
  onEnter() {
    this.video.play()
  }
  offEnter() {
    this.video.pause()
  }
  preResize() {
    this.props.bounds.height = this.el.clientHeight, this.options.triggerEl.style.height = `${this.props.bounds.height}px`, this.el.style.transform = "", this.logoBoundingBox.resize()
  }
  resize() {
    this.setupTimeline();
    const {
      width: e,
      height: t
    } = this.ui.diagLineBlock.getBoundingClientRect(), s = Math.atan(e / t) * (180 / Math.PI);
    this.ui.diagLineBlock.style.setProperty("--angle", -s + "deg")
  }
}
Dt(Ns, [E, ae]);
const zs = ({
  options: e,
  props: t
}) => re `<div class="collectionIntroCount">
    <h2
      data-ui="countText"
      class="collectionIntroCount__count"
    >
      <span data-ui="count">00</span>
      <span>k</span>
    </h2>
    <footer class="collectionIntroCount__countFooter  type-caption2">
      <div class="left">
        <img
          class="arrows"
          src="/svg/double-arrow-right.svg"
          alt=""
        />
        <p>${e.caption}</p>
      </div>
      <div class="right">
        <!-- <p>
          ${e.copy.Launch_Label}
          <span class="date">${e.copy.Launch_Date}</span>
        </p> -->
      </div>
    </footer>
  </div>`;
class $s extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: zs,
      container: null,
      subtitle: null,
      caption: "Caption"
    }), t(this, "props", {
      active: !1,
      countUp: !1,
      containerHeight: 1,
      textHeight: 1,
      textScale: e => Math.min(1, e.containerHeight / e.textHeight)
    }), t(this, "handleCounterUpdate", (() => {
      const e = Qt(Math.round(es(this.tweens.counterPr, 0, 10)));
      this.ui.count.innerText = e
    }))
  }
  setTextScale(e) {
    this.ui.countText.style.transform = `scale(${e})`
  }
  async onSetup() {
    this.tweens = {
      counterPr: 0,
      faceTraitsPr: 0
    }, Jt().observe(this.options.container, (e => {
      const {
        width: t
      } = e.contentRect;
      this.props.containerHeight = t
    })), Jt().observe(this.el, (e => {
      const {
        height: t
      } = e.contentRect;
      this.props.textHeight = t
    }))
  }
  offCountUp() {
    i.killTweensOf(this.tweens, "counterPr"), i.set(this.tweens, {
      counterPr: 0,
      onUpdate: this.handleCounterUpdate
    })
  }
  onCountUp() {
    i.to(this.tweens, {
      counterPr: 1,
      duration: .8,
      onUpdate: this.handleCounterUpdate
    })
  }
  onDestroy() {
    Jt().unobserve(this.options.container), Jt().unobserve(this.el)
  }
}
Dt($s, [ae]);
const Hs = ({
  options: e,
  props: t
}) => re `<section class="homeCollectionIntro  homeSection darkTheme">
    <div
      data-ui="inner"
      class="homeCollectionIntro__inner  sectionInner  fill"
    >
      <div
        data-ui="blocks"
        class="blocks"
      >
        <div
          data-ui="left"
          class="block--left"
        ></div>
        <div class="block--middle  block">
          <div
            data-ui="heroWrap"
            class="homeCollectionIntro__heroWrap"
          >
            <div
              data-ui="hero"
              class="homeCollectionIntro__hero"
            ></div>
          </div>
          ${B("right")}
        </div>
        <div
          data-ui="right"
          class="block--right  d-only"
        >
          <div
            data-ui="topRight"
            class="block--rightTop  block"
          >
            <div
              data-ui="crystalVideo"
              class="homeCollectionIntro__mediaWrap"
            >
              <img
                class="homeCollectionIntro__videoBg"
                src="/svg/measurement-lines.svg"
                alt=""
              />
            </div>
            ${B("bottom")}
          </div>
          <div
            data-ui="bottomRight"
            class="block--rightBottom  block"
          >
            <div
              data-ui="mediaWrap"
              class="homeCollectionIntro__mediaWrap"
            >
              <div class="mediaInner">
                <img
                  src="${U}collection/face-traits.webp"
                  alt="image"
                  class="mediaEl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
class Gs extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Hs,
      id: "collection-intro"
    }), t(this, "props", {
      active: !1
    }), t(this, "handleFaceTraitsUpdate", (() => {
      this.ui.mediaWrap.style.setProperty("--inPr", this.tweens.faceTraitsPr)
    }))
  }
  async onSetup() {
    this.tweens = {
      faceTraitsPr: 0
    }, this.lines = this.el.querySelectorAll(".js-line"), this.heroBoundingBox = await (new Ms).setup({
      options: {
        el: this.ui.hero,
        useScrollPos: !1
      }
    }), await this.setupCount(), await this.setupCaptions(), Xt || await this.setupCrystalVideo()
  }
  async setupCount() {
    this.count = await (new $s).setup({
      options: {
        appendTo: this.ui.left,
        container: this.ui.left,
        copy: this.options.copy,
        caption: this.options.copy.Collection_Name
      }
    })
  }
  async setupCaptions() {
    const {
      copy: e
    } = this.options;
    this.videoCaption = await (new D).setup({
      options: {
        appendTo: this.ui.topRight,
        text: e.Image_Caption_1 || "REFINED<br>KAI"
      }
    }), this.bottomRightCaption = await (new D).setup({
      options: {
        appendTo: this.ui.bottomRight,
        text: e.Image_Caption_2
      }
    })
  }
  async setupCrystalVideo() {
    this.crystalVideo = await (new N).setup({
      options: {
        appendTo: this.ui.crystalVideo,
        src: "/videos/collection/OBJECT-FX_001_CLEAN_1",
        poster: `${U}collection/crystal.webp`
      },
      props: {
        active: () => this.props.enter
      }
    })
  }
  setupTimeline() {
    this.tl && (this.options.tl && this.options.tl.remove(this.tl), this.tl.kill());
    const {
      start: e,
      end: t
    } = this.props, {
      vh: s,
      scale: o
    } = T().state, n = this.tl = i.timeline({}), a = .7 * s, r = e + .3 * s, l = e + .5 * s, p = t - s;
    n.fromTo([this.ui.left, this.ui.right], {
      y: s,
      alpha: 1
    }, {
      y: 0,
      alpha: 1,
      duration: a,
      ease: "power3.out"
    }, r), n.fromTo(this.tweens, {
      faceTraitsPr: 0
    }, {
      faceTraitsPr: 1,
      duration: a,
      ease: "sine.inOut",
      onUpdate: this.handleFaceTraitsUpdate
    }, r), n.fromTo(this.lines, {
      alpha: 0
    }, {
      alpha: 1,
      duration: 200,
      ease: "expo.out"
    }, e + s - 200), n.add((() => {
      this.count.props.countUp = !1, this.videoCaption.hide(), this.bottomRightCaption.hide()
    }), l - 1), n.add((() => {
      this.count.props.countUp = !0, this.videoCaption.show(), this.bottomRightCaption.show()
    }), l), n.to([this.ui.left, this.ui.right], {
      alpha: 0,
      y: Xt ? 0 : -50 * o,
      duration: .2 * s
    }, p), n.to(this.lines, {
      alpha: 0,
      duration: .2 * s
    }, p), n.seek(.001), this.options.tl && this.options.tl.add(n, 0)
  }
  onEnter() {}
  offEnter() {}
  resize() {
    var e;
    this.ui.heroWrap.style.setProperty("--height", `${this.ui.heroWrap.clientHeight}px`), this.heroBoundingBox.resize(), null == (e = this.tl) || e.kill(), this.setupTimeline()
  }
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill()
  }
  get heroBounds() {
    return this.heroBoundingBox.bounds
  }
}
Dt(Gs, [E, ae]);
const Xs = {
    left: [{
      src: `${U}collection/card-left-01.webp`
    }, {
      src: `${U}collection/card-left-02.webp`
    }, {
      src: `${U}collection/card-left-03.webp`
    }, {
      src: `${U}collection/card-left-04.webp`
    }, {
      src: `${U}collection/card-left-05.webp`
    }, {
      src: `${U}collection/card-left-06.webp`
    }],
    right: [{
      src: `${U}collection/card-right-01.webp`
    }, {
      src: `${U}collection/card-right-02.webp`
    }, {
      src: `${U}collection/card-right-03.webp`
    }, {
      src: `${U}collection/card-right-04.webp`
    }, {
      src: `${U}collection/card-right-05.webp`
    }, {
      src: `${U}collection/card-right-06.webp`
    }]
  },
  Vs = ({
    options: e,
    props: t
  }) => re `<div class="collectionGallery">
    <img
      data-ui="arrowUp"
      class="collectionGallery__arrowUp"
      src="/svg/arrow-down.svg"
      alt=""
    />
    <img
      data-ui="arrowDown"
      class="collectionGallery__arrowDown"
      src="/svg/arrow-down.svg"
      alt=""
    />
    <div
      data-ui="left"
      class="collectionGallery__left"
    >
      <div
        data-ui="leftInner"
        class="collectionGallery__inner"
      ></div>
    </div>
    <div
      data-ui="right"
      class="collectionGallery__right"
    >
      <div
        data-ui="rightInner"
        class="collectionGallery__inner"
      ></div>
    </div>
  </div>`;
class Ys extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Vs,
      id: "collection-gallery"
    }), t(this, "props", {
      active: !1,
      loopCards: !1,
      index: 0,
      time: 0,
      timeline: null,
      nextItemDuration: Xt ? 1.6 : .8
    }), t(this, "loopCards", (() => {
      var e;
      const {
        nextItemDuration: t
      } = this.props;
      this.props.index++, null == (e = this.loopDelay) || e.kill(), this.loopDelay = i.delayedCall(t, this.loopCards)
    })), t(this, "updateItems", (e => {
      (this.props.active || e) && (this.leftGroup.update(), this.rightGroup.update(), this.props.loopCards = 0 === this.tweens.outPr && this.tweens.inPr >= (Xt ? .8 : .4))
    }))
  }
  async onSetup() {
    this.tweens = {
      inPr: 0,
      outPr: 0,
      outRotPr: 0,
      indexPr: 0
    }, this.leftGroup = await (new Ks).setup({
      options: {
        el: this.ui.left,
        inner: this.ui.leftInner,
        items: Xs.left,
        dir: -1,
        tweens: this.tweens
      },
      props: {
        active: () => this.props.active,
        index: () => this.props.index,
        zIndex: 1
      }
    }), this.rightGroup = await (new Ks).setup({
      options: {
        el: this.ui.right,
        inner: this.ui.rightInner,
        items: Xs.right,
        dir: 1,
        tweens: this.tweens
      },
      props: {
        active: () => this.props.active,
        index: () => this.props.index
      }
    }), this.setupSounds()
  }
  setupSounds() {
    this.sounds = ["/audio/FX_character_carousel_1.mp3", "/audio/FX_character_carousel_2.mp3", "/audio/FX_character_carousel_3.mp3"].map((e => new Howl({
      src: [e]
    })))
  }
  setBoundaries({
    start: e,
    end: t
  }) {
    this.setupTimeline()
  }
  setupTimeline() {
    this.tl && (this.options.tl && this.options.tl.remove(this.tl), this.tl.kill());
    const {
      start: e,
      end: t
    } = this.props.boundaries, {
      vh: s,
      scale: o
    } = T().state, n = this.tl = i.timeline({
      onUpdate: this.updateItems
    }), a = s, r = e + 300 * o, l = t - s, p = .5 * s;
    n.fromTo(this.tweens, {
      inPr: 0
    }, {
      inPr: 1,
      duration: a,
      ease: "power2.out"
    }, r);
    const c = (Xt ? 100 : 200) * o;
    n.fromTo([this.ui.arrowUp, this.ui.arrowDown], {
      alpha: 0
    }, {
      alpha: 1,
      duration: 1,
      ease: "power3.out"
    }, r), n.fromTo(this.ui.arrowUp, {
      y: -c
    }, {
      y: 0,
      duration: a,
      ease: "power3.out"
    }, r), n.fromTo(this.ui.arrowDown, {
      y: c
    }, {
      y: 0,
      duration: a,
      ease: "power3.out"
    }, r), n.fromTo(this.tweens, {
      outPr: 0
    }, {
      outPr: 1,
      duration: p,
      ease: "power2.out"
    }, l), n.fromTo(this.tweens, {
      outRotPr: 0
    }, {
      outRotPr: 1,
      duration: p,
      ease: "power2.inOut"
    }, l + .2 * p), n.to(this.ui.arrowUp, {
      y: -c,
      duration: p,
      ease: "power2.inOut"
    }, l), n.to(this.ui.arrowDown, {
      y: c,
      duration: p,
      ease: "power2.inOut"
    }, l), n.to([this.ui.arrowUp, this.ui.arrowDown], {
      alpha: 0,
      duration: 1
    }, l + .5 * p), n.seek(.001), this.options.tl && this.options.tl.add(n, .001)
  }
  onActive() {
    this.updateItems()
  }
  onLoopCards() {
    this.loopCards()
  }
  offLoopCards({
    firstTrigger: e
  }) {
    var t;
    e || null == (t = this.loopDelay) || t.kill()
  }
  setIndex(e, {
    firstTrigger: t
  }) {
    if (t) return;
    this.sounds[ns(0, this.sounds.length - 1)].play();
    const {
      nextItemDuration: s
    } = this.props;
    i.killTweensOf(this.tweens, "indexPr"), i.to(this.tweens, {
      indexPr: e,
      ease: "expo.out",
      delay: .2,
      duration: s,
      onUpdate: this.updateItems,
      onStart: () => {
        this.leftGroup.updateIndex(e), this.rightGroup.updateIndex(e)
      }
    })
  }
  setTime(e) {
    this.options.tl.seek(e, !1), T().state
  }
  resize() {
    this.updateItems(!0)
  }
  onDestroy() {
    var e, t;
    null == (e = this.tl) || e.kill(), null == (t = this.loopDelay) || t.kill(), i.killTweensOf(this.tweens)
  }
}
Dt(Ys, [ae, ts(ss, {
  expanded: !0,
  keysOptions: {
    time: {
      min: 0,
      max: 1400,
      step: 1
    }
  },
  withoutViews: "leftGroup rightGroup"
})]);
class Ks extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Ws,
      dir: -1,
      items: [],
      tweens: null
    }), t(this, "props", {
      active: !1,
      index: 0,
      zIndex: 0
    })
  }
  async onSetup() {
    this.el = this.options.el, this.inner = this.options.inner, await this.setupItems(), this.totalItems = this.items.length
  }
  async setupItems() {
    this.items = await Promise.all(this.options.items.map(((e, t) => (new qs).setup({
      options: {
        appendTo: this.inner,
        index: t,
        ...e
      }
    }))))
  }
  updateIndex(e) {
    this.props.index = e;
    const {
      dir: t
    } = this.options, s = t > 0, i = e % 2 == 0;
    Xt && (this.props.zIndex = s && i ? 1 : s || i ? 0 : 1)
  }
  setZIndex(e) {
    this.el.style.zIndex = this.props.zIndex
  }
  update() {
    const {
      dir: e,
      tweens: t
    } = this.options, {
      zIndex: s
    } = this.props, {
      totalItems: i
    } = this;
    T().state, this.items.forEach(((o, n) => {
      const a = o.el,
        {
          width: r
        } = o.bounds,
        l = Xt ? .5 * r : .75 * r,
        p = as(t.indexPr + n + 1, i),
        c = (Xt ? 2 * l : l) - 1;
      let h = p * l - c,
        d = jt(h, -c, -l, 45, 0, !0) * e;
      d = Xt ? d : 0, d = es(t.outRotPr, d, -100);
      let u = jt(p, i - 1, i, 1, 0, !0);
      u *= t.inPr > 0 ? 1 : 0, u *= Math.ceil(p), Xt && (u *= p <= 1 && !s ? 0 : 1), h = es(t.inPr, -r / 2, h), h = es(t.outPr, h, -r / 2);
      let m = jt(p, 1, i, 0, Xt ? -600 : -400, !0);
      Xt && (m = jt(p, 0, 1, 50, m, !0)), a.style.opacity = u, a.style.transform = `translate3d(${h*e}px, 0, ${m}px) rotateY(${d}deg)`
    }))
  }
  onDestroy() {
    this.items.forEach((e => e.destroy())), this.items = null
  }
}
const Ws = ({
  options: e,
  props: t
}) => re `<div class="collectionGallery__item"></div>`;
class qs extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      index: 0,
      color: "#73304F",
      src: "/images/collection/character-1.png",
      template: Ws
    }), t(this, "props", {
      active: !1
    }), t(this, "bounds", {
      width: 1,
      height: 1
    })
  }
  async onSetup() {
    const {
      color: e,
      src: t
    } = this.options;
    this.el.style.backgroundImage = `url(${t})`, n(this.el, (e => {
      const t = e[0],
        {
          width: s,
          height: i
        } = t.contentRect;
      this.bounds = {
        width: s,
        height: i
      }
    }))
  }
  udpate() {
    index
  }
}
Dt(qs, [ae]);
const Zs = ({
  options: e,
  props: t
}) => re `<section class="homeCollectionGallery  homeSection  darkTheme">
    <div
      data-ui="inner"
      class="homeCollectionGallery__inner  sectionInner  fill"
    >
      <div data-ui="topLeft" class="block--topleft  block">
        ${B("bottom")}
        ${B("top","m-only")}
      </div>

      <div data-ui="topRight" class="block--topright  block">
        ${B("top","m-only")}
        ${B("bottom")}
        <p data-ui="body" class="homeCollectionGallery__body  type-body1">
          ${e.copy.Gallery_Description}
        </p>
      </div>

      <div data-ui="bottom" class="block--bottom">
        <hr class="js-line  lineBase homeCollectionGallery__lineMiddle"></hr>
      </div>
    </div>
  </section>`;
class Qs extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Zs,
      id: "collection-gallery"
    }), t(this, "props", {
      active: !1
    })
  }
  onEnter() {
    var e;
    null == (e = x.app) || e.setActiveSection("#project")
  }
  async onSetup() {
    const {
      copy: e
    } = this.options;
    this.lines = this.el.querySelectorAll(".js-line"), this.title = await (new F).setup({
      options: {
        appendTo: this.ui.topLeft,
        text: e.Gallery_Heading,
        caption: "004"
      }
    }), this.caption = await (new D).setup({
      options: {
        insertBefore: this.ui.body,
        text: e.Console_Text_Preceding_Description
      },
      props: {
        active: !0
      }
    }), this.gallery = await (new Ys).setup({
      options: {
        appendTo: this.ui.bottom,
        tl: this.options.tl
      },
      props: {
        active: () => this.props.enter,
        boundaries: () => ({
          start: this.props.start,
          end: this.props.end
        })
      }
    }), this.waitForFonts()
  }
  waitForFonts() {
    this.stopEffect = se((() => this.title.props.fontLoaded), (({
      firstTrigger: e
    }) => {
      this.setupTimeline()
    }))
  }
  setupTimeline() {
    this.tl && (this.options.tl && this.options.tl.remove(this.tl), this.tl.kill());
    const e = [this.ui.topLeft, this.ui.topRight],
      {
        start: t,
        end: s
      } = this.props,
      {
        vh: o,
        scale: n
      } = T().state,
      a = this.tl = i.timeline({
        onUpdate: this.updateItems
      }),
      r = o,
      l = t + 300 * n,
      p = s - o,
      c = Xt ? 0 : 250 * n;
    a.set(e, {
      alpha: 0
    }, 0), a.set(e, {
      alpha: 1
    }, l), a.fromTo(this.gallery.el, {
      y: -100 * n
    }, {
      y: 0,
      duration: r,
      ease: "power3.out"
    }, l), a.fromTo(e, {
      y: c
    }, {
      y: 0,
      duration: r,
      ease: "power3.out"
    }, l), a.fromTo(this.lines, {
      alpha: 0
    }, {
      alpha: 1,
      duration: .5 * o,
      ease: "sine.out"
    }, l);
    const h = Xt ? -.5 * o : -o;
    a.to(e, {
      y: Xt ? 0 : h,
      duration: r,
      ease: "power3.inOut"
    }, p), a.to(this.gallery.el, {
      y: h,
      duration: r,
      ease: "power3.inOut"
    }, p), a.to(this.lines, {
      alpha: 0,
      duration: .2 * o,
      ease: "power2.in"
    }, p), a.to(e, {
      alpha: Xt ? 0 : 1,
      duration: .2 * o,
      ease: "power2.in"
    }, p), a.seek(.001), this.options.tl && this.options.tl.add(a, 0)
  }
  resize(e) {
    this.title.props.fontLoaded && this.setupTimeline(), this.gallery.resize()
  }
}
Dt(Qs, [E, ae]);
const Js = "#define GLSLIFY 1\n#ifndef FNC_BLENDADD\n#define FNC_BLENDADD\nfloat blendAdd(in float base,in float blend){return min(base+blend,1.);}vec3 blendAdd(in vec3 base,in vec3 blend){return min(base+blend,vec3(1.));}vec3 blendAdd(in vec3 base,in vec3 blend,float opacity){return(blendAdd(base,blend)*opacity+base*(1.-opacity));}\n#endif\n",
  ei = "#define GLSLIFY 1\n#ifndef FNC_RANDOM\n#define FNC_RANDOM\nfloat random(in float x){return fract(sin(x)*43758.5453);}float random(in vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);}float random(in vec3 pos){return fract(sin(dot(pos.xyz,vec3(70.9898,78.233,32.4355)))*43758.5453123);}float random(in vec4 pos){float dot_product=dot(pos,vec4(12.9898,78.233,45.164,94.673));return fract(sin(dot_product)*43758.5453);}\n#ifndef RANDOM_SCALE3\n#define RANDOM_SCALE3 vec3(0.1031, 0.1030, 0.0973)\n#endif\n#ifndef FANDOM_SCALE4\n#define FANDOM_SCALE4 vec4(1031, 0.1030, 0.0973, 0.1099)\n#endif\nvec2 random2(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE3);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(in vec2 st){const vec2 k=vec2(0.3183099,0.3678794);st=st*k+k.yx;return-1.0+2.0*fract(16.0*k*fract(st.x*st.y*(st.x+st.y)));}vec2 random2(vec3 p3){p3=fract(p3*RANDOM_SCALE3);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec3 random3(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE3);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec2 p){vec3 p3=fract(vec3(p.xyx)*RANDOM_SCALE3);p3+=dot(p3,p3.yxz+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(in vec3 p){p=vec3(dot(p,vec3(127.1,311.7,74.7)),dot(p,vec3(269.5,183.3,246.1)),dot(p,vec3(113.5,271.9,124.6)));return-1.0+2.0*fract(sin(p)*43758.5453123);}vec4 random4(float p){vec4 p4=fract(vec4(p)*FANDOM_SCALE4);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec2 p){vec4 p4=fract(vec4(p.xyxy)*FANDOM_SCALE4);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec3 p){vec4 p4=fract(vec4(p.xyzx)*FANDOM_SCALE4);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec4 p4){p4=fract(p4*FANDOM_SCALE4);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}\n#endif\n",
  ti = "#define GLSLIFY 1\n#define CONTAIN 0\n#define COVER 1\nvec2 UVResize(vec2 uvBase,vec2 resolution,vec2 aspect,vec2 scale,int fit){vec2 st=resolution/aspect;float r=fit==COVER ? max(st.x,st.y): min(st.x,st.y);vec2 uv=uvBase;uv-=vec2(0.5);uv*=st;uv*=1.0/r;uv*=1.0/scale;uv+=vec2(0.5);return uv;}";
class si {
  constructor(e, {
    shader: t,
    width: s = 512,
    height: i = 512,
    format: o = Ae,
    type: n = _e,
    minFilter: a = ke,
    magFilter: r = ke,
    wrapS: l = Ce,
    wrapT: p = Ce,
    renderOptions: c = {
      target: null
    }
  } = {}) {
    this.renderer = e, this.shader = t, this.scene = new ye, this.orthoCamera = new xe(s / -2, s / 2, i / 2, i / -2, 1e-5, 1e3), this.renderOptions = c;
    const h = {
      wrapS: l,
      wrapT: p,
      minFilter: a,
      magFilter: r,
      format: o,
      type: n
    };
    this.fbo = {
      read: new Se(s, i, h),
      write: new Se(s, i, h),
      swap: () => {
        [this.fbo.read, this.fbo.write] = [this.fbo.write, this.fbo.read], this.uniform.value = this.fbo.read.texture
      }
    }, this.shader && (this.mesh = new ue(new Te(1, 1), this.shader), this.mesh.scale.set(s, i, 1), this.scene.add(this.mesh))
  }
  setSize(e, t) {
    this.fbo.read.setSize(e, t), this.fbo.write.setSize(e, t), this.orthoCamera.left = -e / 2, this.orthoCamera.right = e / 2, this.orthoCamera.top = t / 2, this.orthoCamera.bottom = -t / 2, this.orthoCamera.updateProjectionMatrix(), this.mesh && this.mesh.scale.set(e, t, 1)
  }
  get texture() {
    return this.fbo.read.texture
  }
  render(e, {
    clear: t = !1
  } = {}) {
    e ? this.renderer.render(this.scene, this.orthoCamera) : (this.renderer.setRenderTarget(this.fbo.read), t && this.renderer.clear(), this.renderer.render(this.scene, this.orthoCamera), this.renderer.setRenderTarget(this.renderOptions.target))
  }
}
var ii = a.registerPlugin(r) || a;
ii.core.Tween;
class oi extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        options: e
      }) => re `<div class="tableauStory">
      <div
        data-ui="caption"
        class="tableauStory__caption type-caption2"
      >
        ${z(e.caption.replace("<dot>",'<span class="dot"></span>'))}
      </div>
      <h2
        data-ui="text"
        class="tableauStory__text type-body1"
      >
        <span class="spacer">&nbsp;</span>
        ${e.text}
      </h2>
    </div>`,
      text: "Lorem",
      caption: "Ipsum"
    }), t(this, "props", {})
  }
  async onSetup() {
    Xt && this.el.parentNode.insertBefore(this.ui.caption, this.el), await this.setupText()
  }
  async setupText() {
    var e;
    null == (e = this.splitText) || e.revert(), this.splitText = new l(this.ui.text, {
      type: "lines",
      linesClass: "line"
    })
  }
  setActive(e, {
    firstTrigger: t
  }) {
    t && ii.set(this.el, {
      alpha: 0
    }), ii.killTweensOf(this.el), ii.to(this.el, {
      alpha: 0 | e,
      duration: .2,
      ease: "steps(2)"
    }), ii.to(this.ui.caption, {
      alpha: 0 | e,
      duration: .2,
      ease: "steps(2)"
    })
  }
  get lines() {
    return this.splitText.lines
  }
}
Dt(oi, [ae]);
const ni = Xt ? [] : [{
    id: "trc",
    slot: "right-top",
    obp: "right top"
  }, {
    id: "brc",
    slot: "right-bottom",
    obp: "right bottom"
  }, {
    id: "blc",
    slot: "left-bottom",
    obp: "left bottom"
  }, {
    id: "crl",
    slot: "center",
    obp: "center right",
    fit: "cover"
  }, {
    id: "crs",
    slot: "center",
    obp: "center right",
    fit: "contain"
  }, {
    id: "cbl",
    slot: "center",
    obp: "center bottom",
    fit: "cover"
  }, {
    id: "cbs",
    slot: "center",
    obp: "center bottom",
    fit: "contain"
  }, {
    id: "cl",
    slot: "center",
    depth: 0,
    fit: "cover"
  }, {
    id: "cs",
    slot: "center",
    depth: 0,
    fit: "contain"
  }],
  ai = ({
    props: e
  }) => re `<div
    class="layer"
    ?active=${e.active}
    ?showmedia=${"video"==e.type}
  >
    <div
      class="layer__media"
      data-ui="media"
    ></div>
    <div
      class="layer__graphics layer__graphics--0"
      data-ui="graphics0"
    ></div>
    <div
      class="layer__graphics layer__graphics--1"
      data-ui="graphics1"
    ></div>
  </div>`;
class ri extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ai,
      layer: Ot.UI
    }), t(this, "props", {
      w: 1,
      h: 1,
      iFlow: 0,
      align: "left",
      sourceSize: [1, 1],
      kfPosition: [0, 0],
      kfScale: [0, 0],
      kfAnchor: [0, 0],
      posLayout: [0, 0],
      sizeLayout: [0, 0],
      sMedia: Xt ? 1.2 : .5,
      sGraphics: e => .25 * Math.min(e.ratio[0], e.ratio[1])
    }), t(this, "propsAnim", {
      alpha: 0,
      blink: 1
    })
  }
  onBeforeSetup() {
    this.object = new fe
  }
  onAfterSetup() {
    this.object.name = this.options.name || this.constructor.name, this.options.addTo && !this.options.preventAddTo && this.options.addTo.add(this.object)
  }
  async onSetup() {
    await this.setupVideo(), await this.setupGraphics(), await this.setupMesh(), this.propsAnim.kfPosition = this.props.kfPosition.slice(), this.propsAnim.kfScale = this.props.kfScale.slice()
  }
  async setupGraphics() {
    const {
      size: e,
      hasFrame: t,
      dataTableau: s
    } = this.options, i = Xt ? 35 : t ? 100 : 75, o = Xt ? 400 : 600;
    this.graphicCaption = await (new li).setup({
      options: {
        appendTo: this.ui.graphics1
      },
      props: {
        v: () => this.props.active,
        padding: i,
        text: null
      }
    }), this.graphics = await Promise.all(ni.map((async t => await (new pi).setup({
      options: {
        appendTo: 0 == t.depth ? this.ui.graphics0 : this.ui.graphics1,
        size: e,
        baseSize: o,
        ...t
      },
      props: {
        v: () => this.props.active,
        iSet: () => this.props.iSet,
        iFlow: () => this.props.iFlow,
        idTableau: s.id,
        sParent: () => this.props.s || [1, 1],
        sGraphics: () => this.props.sGraphics,
        sCenter: t => [e[0] * this.props.kfScale[0] / (o * t.sGraphics) * this.props.ratio[0], e[1] * this.props.kfScale[1] / (o * t.sGraphics) * this.props.ratio[1]],
        s: e => "center" == t.slot ? "cover" == t.fit ? Math.max(e.sCenter[0], e.sCenter[1]) : Math.min(e.sCenter[0], e.sCenter[1]) : 1,
        padding: i,
        paddingInner: 0
      }
    }))))
  }
  async setupVideo() {
    const {
      size: e
    } = this.options, t = this.video = document.createElement("video");
    t.playsInline = !0, t.muted = !0, t.loop = !0, t.appendChild(j('<source src="" type=\'video/mp4; codecs="hvc1"\' />')), t.appendChild(j('<source src="" type="video/webm" />')), this.ui.media.appendChild(t), this.props.w = e[0], this.props.h = e[1]
  }
  updateSource({
    source: e,
    src: t,
    type: s,
    filename: i
  } = {}) {
    if ("video" == s) {
      var o = this.video.getElementsByTagName("source");
      o[0].src = `${t}.mp4`, o[1].src = `${t}.webm`, this.video.load()
    } else this.shader.uniforms.tMap.value = e;
    const n = this.props.sourceSize = "img" === s ? [e.image.width, e.image.height] : [800, 800];
    this.props.type = s, this.shader.uniforms.uAspect.value.set(n[0], n[1]), this.shader.defines.HAS_TEXTURE = "img" === s, this.shader.needsUpdate = !0, this.updateGraphics({
      filename: i
    })
  }
  updateGraphics({
    filename: e
  } = {}) {
    this.graphicCaption.props.text = e.split("-").join(" ")
  }
  async setupMesh() {
    const {
      layer: e,
      size: t,
      hasFrame: s
    } = this.options, i = this.shader = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        varying vec2 vUv;\n        uniform vec2 uAspect;\n        uniform vec2 uResolution;\n        uniform float uScale;\n        uniform float uAlpha;\n        uniform float uFramePush;\n        uniform sampler2D tMap;\n        ${ti}\n        ${ps}\n        ${cs}\n        ${is}\n        ${us}\n        #define GLSLIFY 1\n#ifndef FNC_RECTSDF\n#define FNC_RECTSDF\nfloat sdRect(vec2 p,vec2 b,float r){vec2 d=abs(p-0.5)*4.2-b+vec2(r);return min(max(d.x,d.y),0.0)+length(max(d,0.0))-r;}float sdRect(vec2 p,float b,float r){return sdRect(p,vec2(b),r);}float sdRect(in vec2 st,in vec2 s){st=st*2.-1.;return max(abs(st.x/s.x),abs(st.y/s.y));}float sdRect(in vec2 st,in float s){return sdRect(st,vec2(s));}float sdRect(in vec2 st){return sdRect(st,vec2(1.0));}\n#endif\n#ifndef FNC_ROUNDRECT\n#define FNC_ROUNDRECT\nfloat roundrect(in vec2 st,in vec2 w,in float corner){return fill(sdRect(st,w,corner));}float roundrect(in vec2 st,in vec2 w,in float corner,in float t){return stroke(sdRect(st,w,corner),t);}\n#endif\n\n        void main() {\n          vec2 res = uResolution;\n\n          vec2 stMap = UVResize(vUv, res, uAspect, vec2(uScale), 1);\n          vec2 stSdf =  UVResize(vUv, res, vec2(1.), vec2(1.), 0);\n          \n          vec2 rSize = max(\n            vec2(res.x / res.y, 1.), \n            vec2(1., res.y / res.x)\n          );\n          float rBorder = size(40.);\n          float rStrokeSize = size(2.);\n          float rScale = 1.98;\n\n          #ifdef HAS_FRAME\n            float push = size(uFramePush);\n            rScale -= push * 1.2;\n            rSize.y += smoothstep(\n              0.65 - size(15.), \n              0.65 + size(15.), \n              stSdf.x) * push;\n          #endif\n\n          float sdFill = roundrect(stSdf, rSize * rScale, rBorder);\n          float sdStroke = roundrect(stSdf, rSize * rScale, rBorder, rStrokeSize) * 0.5;\n\n          float a;\n          vec3 color;\n          #ifdef HAS_TEXTURE\n          // a = mix(sdFill * 0.75, sdFill, diffuse.a) - sdStroke;\n          // a += sdStroke * 0.9; */\n          // color = mix(vec3(0.), diffuse.rgb, a * diffuse.a);\n          vec4 diffuse = texture2D(tMap, stMap);\n          a = (sdFill * diffuse.a) + sdStroke;\n          color = mix(diffuse.rgb, vec3(1.), sdStroke);\n          #else\n          // a = ((sdFill - sdStroke) * 0.75) + (sdStroke * 0.9);\n            a = sdStroke;\n            color = mix(vec3(0.), vec3(1.), sdStroke);\n          #endif\n          a *= uAlpha;\n          color.rgb /= a;\n          if(a < 0.1) discard;\n          gl_FragColor = vec4(color, a);\n          // gl_FragColor = vec4(vec3(a), 1.);\n        }`,
      uniforms: {
        tMap: {
          value: null
        },
        uScale: {
          value: 1
        },
        uAlpha: {
          value: 1
        },
        uAspect: {
          value: new de
        },
        uResolution: {
          value: new de
        },
        uFramePush: {
          value: Xt ? 20 : 40
        }
      },
      defines: {
        HAS_TEXTURE: !1,
        HAS_FRAME: s ? ? !1
      },
      transparent: !0
    });
    i.type = "LayerMaterial";
    const o = s ? 1.11 : 1.04,
      n = this.mesh = new ue(new Te(t[0] * o, t[1] * o), i);
    n.name = "LayerMesh", n.layers.set(e), this.object.add(n)
  }
  createTimeline() {
    const {
      keyframesPosition: e,
      keyframesScale: t
    } = this.options, s = this.tl = i.timeline();
    return e.forEach((e => s.to(this.propsAnim.kfPosition, {
      0: e[1][0],
      1: e[1][1],
      duration: .5,
      ease: "expo.inOut",
      onUpdate: () => {
        const [e, t, s] = this.propsAnim.kfPosition;
        this.props.kfPosition[0] = e, this.props.kfPosition[1] = t, this.props.kfPosition[2] = s
      }
    }, e[0]))), t.forEach((e => s.to(this.propsAnim.kfScale, {
      0: e[1][0] / 100,
      1: e[1][1] / 100,
      duration: .5,
      ease: "expo.inOut",
      onUpdate: () => {
        const [e, t, s] = this.propsAnim.kfScale;
        this.props.kfScale[0] = e, this.props.kfScale[1] = t, this.props.kfScale[2] = s
      }
    }, e[0]))), s
  }
  onActive() {
    var e;
    null == (e = this.video) || e.play().then((() => {})).catch((e => {})), this.animateIn(), this.update()
  }
  offActive() {
    var e;
    null == (e = this.video) || e.pause(), this.video && (this.video.currentTime = 0)
  }
  animateIn() {
    let e = 0,
      t = 0;
    const {
      propsAnim: s
    } = this;
    i.fromTo(this.propsAnim, {
      blink: 0
    }, {
      duration: .4,
      blink: 1,
      onUpdate: () => {
        const i = performance.now();
        e || (e = i), t += i - e, e = i, t > 1 && s.blink < 1 ? (t = 0, s.alpha = Math.random()) : 1 == s.blink && (s.alpha = 1)
      }
    })
  }
  setV() {
    this.object.visible = !!this.props.v
  }
  setPAnchorPoint(e) {
    var t, s;
    const {
      size: o
    } = this.options;
    null == (t = this.mesh) || t.position.set(.5 * o[0] - e[0], .5 * -o[1] + e[1], 0), null == (s = this.cardFrame) || s.object.position.set(.5 * o[0] - e[0], .5 * -o[1] + e[1], 0), i.set(this.el, {
      transformOrigin: `${e[0]}px ${e[1]}px`
    })
  }
  whileActive() {
    this.update()
  }
  update() {
    var e;
    const {
      posLayout: t,
      kfPosition: s,
      ratio: o,
      sizeLayout: n,
      sGraphics: a,
      type: r
    } = this.props, {
      size: l
    } = this.options, {
      alpha: p
    } = this.propsAnim;
    this.props.pX = t[0], this.props.pY = t[1], this.props.s = [n[0], n[1], 1], this.props.o = p, this.object.position.x = s[0] * o[0], this.object.position.y = -s[1] * o[1], this.object.scale.fromArray(this.props.s), this.shader && (null == (e = this.shader) || e.uniforms.uResolution.value.set(l[0] * n[0], l[1] * n[1]), this.shader.uniforms.uAlpha.value = p);
    const c = [l[0] * n[0], l[1] * n[1]],
      h = [c[0] / l[0] == 0 ? 0 : 1 / (c[0] / l[0]), c[1] / l[1] == 0 ? 0 : 1 / (c[1] / l[1])];
    if ("video" == r) {
      const e = Math.min(c[0] / 256, c[1] / 256);
      i.set(this.ui.media, {
        scaleX: h[0] * e,
        scaleY: h[1] * e
      })
    }
    i.set([this.ui.graphics0, this.ui.graphics1], {
      scaleX: h[0] * a,
      scaleY: h[1] * a
    }), this.graphics.forEach((e => e.update()))
  }
  onDestroy() {
    this.graphics.forEach((e => e.destroy())), this.graphics = null
  }
}
t(ri, "FrameMaterial"), Dt(ri, [ae, ms]);
class li extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: () => re `<div class="layer__graphicCaption type-caption2"></div>`
    }), t(this, "props", {
      align: "left",
      w: 300,
      h: 300
    })
  }
  async onSetup() {
    this.text = await (new D).setup({
      options: {
        appendTo: this.el,
        textClass: "layer__caption"
      },
      props: {
        v: () => this.props.active
      }
    }), this.update()
  }
  async setText(e) {
    e && this.text.updateText(e.toUpperCase())
  }
  setV(e) {
    var t, s;
    e ? null == (t = this.text) || t.show({
      delay: .33,
      stagger: .01
    }) : null == (s = this.text) || s.hide()
  }
  update() {
    const {
      padding: e
    } = this.props;
    this.props.pX = e, this.props.pY = e
  }
}
Dt(li, [ae, ms]);
class pi extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        props: e,
        options: t
      }) => re `<div
      class="layer__graphic"
      data-slot=${t.slot}
    >
      <img
        class="graphic"
        data-ui="graphic"
        src="${`${U}tableau/${e.idTableau}/second-layer/flow-${e.iFlow}/set-${e.iSet}/${e.prefix}.webp`}"
        alt=""
      />
    </div>`,
      baseSize: 600
    }), t(this, "props", {
      prefix: "trc",
      align: "left",
      iSet: 0,
      iFlow: 0,
      padding: 70
    })
  }
  async onSetup() {
    const {
      id: e,
      obp: t
    } = this.options;
    this.props.prefix = e, this.ui.graphic.style.setProperty("--obj-position", t), this.update()
  }
  setPrefix(e) {
    const {
      baseSize: t
    } = this.options, {
      paddingInner: s
    } = this.props;
    switch (e) {
      case "cbs":
      case "cbl":
        i.set(this.el, {
          transformOrigin: "bottom center"
        });
        break;
      case "crs":
      case "crl":
        i.set(this.el, {
          transformOrigin: "right center"
        })
    }
    this.props.w = 1 * (t - s), this.props.h = 1 * (t - s)
  }
  update() {
    const {
      size: e,
      slot: t
    } = this.options, {
      sParent: s,
      sGraphics: i,
      w: o,
      h: n,
      padding: a,
      prefix: r
    } = this.props;
    let l = e[0] * s[0] * (1 / i),
      p = e[1] * s[1] * (1 / i);
    "right-bottom" == t ? (l *= 1, p *= 1, l -= a + o, p -= a + n) : "left-bottom" == t ? (l *= 0, p *= 1, l += a, p -= a + n) : "center" == t ? "crl" == r || "crs" == r ? (l *= 1, p *= .5, l -= a + o, p -= .5 * n) : "cbl" == r || "cbs" == r ? (l *= .5, l -= .5 * o, p -= a + n) : (l *= .5, p *= .5, l -= .5 * o, p -= .5 * n) : (l *= 1, l -= o + a, p *= 0, p += a), this.props.pX = l, this.props.pY = p
  }
}
Dt(pi, [ae, ms]);
class ci extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        props: e
      }) => re `<div
        class="btnHold"
        ?display=${e.visible}
      >
        <div
          class="btnHold__icon"
          data-ui="icon"
        >
          <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="17.263"
              cy="17.2293"
              r="3.52935"
              transform="rotate(-180 17.263 17.2293)"
              stroke="white"
              stroke-width="0.933906"
              fill="none"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5571 21.2141C17.4594 21.2213 17.3607 21.2249 17.2612 21.2249C17.1272 21.2249 16.9948 21.2183 16.8642 21.2054V33.1689H17.5571V21.2141ZM13.2727 17.4807C13.2675 17.3973 13.2649 17.3133 13.2649 17.2286C13.2649 17.0796 13.2731 16.9326 13.2889 16.7878H0.187183V17.4807H13.2727ZM16.8642 13.2518C16.9948 13.2389 17.1272 13.2323 17.2612 13.2323C17.3607 13.2323 17.4594 13.2359 17.5571 13.2431V0.210129H16.8642V13.2518ZM21.2335 16.7878C21.2494 16.9326 21.2575 17.0796 21.2575 17.2286C21.2575 17.3133 21.2549 17.3973 21.2497 17.4807H34.2446V16.7878H21.2335Z"
              fill="white"
            />
          </svg>
        </div>
        <p
          class="btnHold__label label--0 type-caption2"
          data-ui="label0"
        >
          CLICK & HOLD
        </p>
        <p
          class="btnHold__label label--1 type-caption2"
          data-ui="label1"
        >
          HOLD
        </p>
      </div>`,
      layer: Ot.UI
    }), t(this, "props", {
      visible: !1,
      active: !1,
      hovering: !1,
      canShow: e => e.active && e.hovering,
      hold: !1,
      draw: 0,
      w: () => Math.max(90 * T().state.scale, 90),
      h: () => Math.max(90 * T().state.scale, 90)
    }), t(this, "propsAnim", {
      pRot: 0,
      pLength: 0,
      pGap: .05 * Math.PI
    })
  }
  async onSetup() {
    const {
      addTo: e
    } = this.options;
    this.object = new fe, e.add(this.object), this.vPosDamped = new de, this.shapes = [], await this.createArrows(), await this.createCircles()
  }
  async createArrows() {
    const {
      layer: e
    } = this.options;
    this.groupArrows = new pe, this.object.add(this.groupArrows);
    const t = {
      s: () => this.props.w
    };
    this.aL = await (new di).setup({
      options: {
        addTo: this.groupArrows,
        layer: e,
        side: 1
      },
      props: t
    }), this.aR = await (new di).setup({
      options: {
        addTo: this.groupArrows,
        layer: e
      },
      props: t
    }), this.shapes.push(this.aR, this.aL)
  }
  async createCircles() {
    const {
      layer: e
    } = this.options;
    this.groupCircle = new pe, this.object.add(this.groupCircle);
    const t = {
        addTo: this.groupCircle,
        layer: e
      },
      s = {
        s: () => this.props.w
      };
    this.cL = await (new hi).setup({
      options: t,
      props: s
    }), this.cR = await (new hi).setup({
      options: t,
      props: s
    }), this.cC = await (new hi).setup({
      options: t,
      props: {
        draw: () => this.props.draw,
        alpha: 0,
        ...s
      }
    }), this.shapes.push(this.cL, this.cR, this.cC)
  }
  getAnimation({
    type: e = "active",
    bool: t
  } = {}) {
    const {
      propsAnim: s
    } = this, o = i.timeline({
      onStart: () => "active" == e ? this.props.visible = !0 : null,
      onComplete: () => "active" == e && (this.props.visible = t)
    });
    switch (e) {
      case "active":
        t ? o.fromTo(s, {
          pLength: 0
        }, {
          pLength: 1,
          duration: 1,
          ease: "power3.out"
        }, .1).fromTo(s, {
          pRot: Math.PI
        }, {
          pRot: 0,
          duration: 1.2,
          ease: "power2.out"
        }, 0).fromTo([this.aL.propsAnim, this.aR.propsAnim], {
          offset: .4,
          alpha: 0
        }, {
          offset: .36,
          alpha: .4,
          duration: .6,
          ease: "power3.out"
        }, .54).fromTo(this.ui.icon, {
          scale: .8,
          alpha: 0
        }, {
          scale: 1,
          alpha: 1,
          duration: .6,
          ease: "power3.out"
        }, .54).set([this.cL.propsAnim, this.cR.propsAnim], {
          radius: 1,
          alpha: .4
        }, 0).to(this.ui.label0, {
          alpha: 1,
          duration: .5
        }, .5) : o.to(this.shapes.map((e => e.propsAnim)), {
          alpha: 0,
          duration: .4,
          ease: "power2.out"
        }, 0).to([this.cL.propsAnim, this.cR.propsAnim], {
          radius: .88,
          duration: .4,
          ease: "power2.out"
        }, 0).to([this.ui.label0, this.ui.label1], {
          alpha: 0,
          duration: .5
        }, 0);
        break;
      case "hold":
        o.to([this.cL.propsAnim, this.cR.propsAnim], {
          radius: t ? .92 : 1,
          alpha: t ? .2 : .4,
          duration: .4,
          ease: "power2.out"
        }, t ? .04 : 0).to(this.cC.propsAnim, {
          radius: t ? .82 : 1,
          duration: .4,
          ease: "power2.out"
        }, 0).to(s, {
          pGap: 0 | t,
          duration: .2,
          ease: "power2.out"
        }, 0).to(this.ui.icon, {
          alpha: 0 | !t,
          scale: t ? .8 : 1,
          duration: .3,
          ease: "power3.out"
        }, 0).to([this.aL.propsAnim, this.aR.propsAnim], {
          offset: t ? .48 : .36,
          alpha: t ? 1 : .2,
          duration: .3,
          ease: "power3.out"
        }, 0).to(this.ui.label0, {
          alpha: 0 | !t,
          duration: .2,
          ease: "sine.out"
        }, 0).to(this.ui.label1, {
          alpha: 0 | t,
          duration: .2,
          ease: "sine.out"
        }, 0)
    }
    return o
  }
  setActive(e, {
    firstTrigger: t
  }) {}
  setCanShow(e, {
    firstTrigger: t
  }) {
    var s, o;
    t && (i.set([this.ui.label0, this.ui.label1, this.ui.icon], {
      alpha: 0
    }), i.set(this.shapes.map((e => e.propsAnim)), {
      alpha: 0
    })), null == (s = this.tlHold) || s.kill(), null == (o = this.tlActive) || o.kill(), this.tlActive = this.getAnimation({
      type: "active",
      bool: e
    }), this.update()
  }
  setHold(e, {
    firstTrigger: t
  }) {
    var s, i;
    t || (null == (s = this.tlActive) || s.kill(), null == (i = this.tlHold) || i.kill(), this.tlHold = this.getAnimation({
      type: "hold",
      bool: e
    }))
  }
  whileVisible() {
    this.update()
  }
  update() {
    const {
      pRot: e,
      pLength: t,
      pGap: s
    } = this.propsAnim, {
      delta: o
    } = It.getInstance(), n = zt(.1 * Math.PI, 0, s);
    this.groupCircle.rotation.z = e, this.cL.props.offset = 1.5 * Math.PI + n, this.cR.props.offset = .5 * Math.PI + n, this.cC.props.offset = .5 * Math.PI;
    const a = Math.PI - 2 * n;
    this.cL.props.length = this.cR.props.length = zt(0, a, t), i.set(this.ui.label0, {
      x: this.vPosDamped.x - this.props.pX,
      y: this.vPosDamped.y - this.props.pY
    }), this.vPosDamped.x = $t(this.vPosDamped.x, this.props.pX, o, 16), this.vPosDamped.y = $t(this.vPosDamped.y, this.props.pY, o, 16), this.object.position.set(this.vPosDamped.x, -this.vPosDamped.y, 0);
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].update()
    }
  }
}
Dt(ci, [ae, ms]);
class hi extends te {
  constructor() {
    super(...arguments), t(this, "options", {}), t(this, "props", {
      s: 100,
      draw: 0,
      offset: 0,
      length: 2 * Math.PI
    }), t(this, "propsAnim", {
      alpha: .7,
      radius: 1
    })
  }
  async onSetup() {
    const {
      layer: e
    } = this.options, t = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        #include <common>\n        varying vec2 vUv;\n        uniform vec2 uResolution;\n        uniform float uDraw;\n        uniform float uOffset;\n        uniform float uLength;\n        uniform float uRadius;\n        uniform float uAlpha;\n        ${ps}\n        ${cs}\n        ${us}\n        #define GLSLIFY 1\nfloat sArc(in vec2 p,in float w,in float s,in float e){float a=distance(p,w*0.5*vec2(cos(s),sin(s)));float x=-PI;p*=mat2(cos(x-s),-sin(x-s),sin(x-s),cos(x-s));float b=clamp(atan(p.y,p.x),x,x+e);b=distance(p,w*0.5*vec2(cos(b),sin(b)));return min(a,b)*2.0;}float arc(in vec2 p,in float w,in float s,in float e,in float t){float d=sArc(p,w,s,e);return stroke(d,t);}\n        void main() {\n            vec2 st = vUv - 0.5;\n                 st.x *= -1.;\n            float s = uOffset;\n            float e = uLength;\n            float d = uDraw;\n            float w = uRadius * 0.9;\n            float o = uAlpha;\n            float ss = size(1.5);\n            \n            float d0 = arc(st, w - ss, s, e, ss); // back\n            float d1 = arc(st, w - ss, s, d, ss); // front\n\n            float a = d > 0. ? saturate((d0 * o) + d1) : d0 * o;\n            gl_FragColor = vec4(vec3(1.), a);\n        }`,
      uniforms: {
        uResolution: {
          value: new de
        },
        uDraw: {
          value: 0
        },
        uOffset: {
          value: 0
        },
        uLength: {
          value: 0
        },
        uRadius: {
          value: 1
        },
        uAlpha: {
          value: 0
        }
      },
      transparent: !0
    });
    qt(t);
    const s = this.mesh = new ue(new Te(1, 1), t);
    s.name = "MeshCircle", s.layers.set(e), this.object.add(s)
  }
  setS(e) {
    this.mesh.material.uResolution.set(1.5 * e, 1.5 * e)
  }
  update() {
    const {
      offset: e,
      length: t,
      draw: s
    } = this.props, {
      propsAnim: i
    } = this;
    this.mesh.material.uOffset = e, this.mesh.material.uLength = t, this.mesh.material.uRadius = i.radius, this.mesh.material.uAlpha = i.alpha, this.mesh.material.uDraw = zt(0, 2 * Math.PI, s)
  }
}
Dt(hi, [Et]);
class di extends te {
  constructor() {
    super(...arguments), t(this, "options", {}), t(this, "props", {}), t(this, "options", {}), t(this, "props", {
      s: 100
    }), t(this, "propsAnim", {
      offset: 1,
      alpha: 0
    })
  }
  async onSetup() {
    const {
      layer: e,
      side: t
    } = this.options, s = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        #include <common>\n        varying vec2 vUv;\n        uniform vec2 uResolution;\n        uniform float uAlpha;\n        uniform float uOffset;\n        const float TWO_PI = PI2;\n        ${ps}\n        ${cs}\n        ${us}\n        ${hs}\n        #define GLSLIFY 1\nfloat sPoly(in vec2 p,in float w,in int sides){float a=atan(p.x,p.y)+PI;float r=TWO_PI/float(sides);float d=cos(floor(0.5+a/r)*r-a)*length(max(abs(p)*1.0,0.0));return d*2.0-w;}float poly(in vec2 p,in float w,in int sides){float d=sPoly(p,w,sides);return fill(d);}float poly(in vec2 p,in float w,in int sides,in float t){float d=sPoly(p,w,sides);return stroke(d,t);}\n        void main() {\n            vec2 st = vUv - 0.5;\n                 st.x *= -1.;\n              #ifdef SIDE_LEFT\n              st.x -= uOffset;\n              st = rotate(st, PI * 0.5, vec2(0.));\n              #else\n              st.x += uOffset;\n              st = rotate(st, -PI * 0.5, vec2(0.));\n              #endif\n            float d = poly(st, size(4.), 3);\n            float a = d * uAlpha;\n            gl_FragColor = vec4(vec3(1.), a);\n        }`,
      uniforms: {
        uResolution: {
          value: new de
        },
        uOffset: {
          value: 0
        },
        uAlpha: {
          value: 0
        }
      },
      defines: {
        SIDE_LEFT: t || !1
      },
      transparent: !0
    });
    qt(s);
    const i = this.mesh = new ue(new Te(1, 1), s);
    i.name = "MeshArrow", i.layers.set(e), this.object.add(i)
  }
  setS(e) {
    this.mesh.material.uResolution.set(e, e)
  }
  update() {
    const {
      propsAnim: e
    } = this;
    this.mesh.material.uOffset = e.offset, this.mesh.material.uAlpha = e.alpha
  }
}
Dt(di, [Et]);
const ui = ({
  options: e
}) => re `<div
  class="block__details"
  data-ui="detail"
>
  <img
    src="${U}tableau/${e.data.id}/second-layer/extras/details.webp"
    loading="lazy"
    alt="details"
  />
</div>`;
class mi extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        props: e,
        options: t
      }) => re `<div
        class="sdLayerShell sdLayerShell--${t.data.id}"
        ?visible=${e.v}
      >
        <div class="sdLayerShell__blocks">
          ${Xt?re``:re`<div
                  class="block"
                  style="--blockPaddingExtra: ${e.sInner*t.data.titleFontSize}px"
                >
                  ${"factions"==t.data.id?ui({props:e,options:t}):null}
                  ${"keep"==t.data.id?re`<hr class="lineBase line--right"></hr>`:null}
                </div>
                <div class="block">
                  ${"keep"==t.data.id||"universe"==t.data.id?ui({props:e,options:t}):null}
                </div>`}
        </div>
      </div>`
    }), t(this, "props", {
      sInner: () => Xt ? T().state.scale : T().state.vh / T().state.baseh
    })
  }
  async onSetup() {
    await this.createTitle()
  }
  async createTitle() {
    const {
      data: e
    } = this.options;
    this.title = await (new fi).setup({
      options: {
        appendTo: this.el,
        text0: e.title.split(" ")[0],
        text1: e.title.split(" ")[1],
        caption: e.titleCaption,
        fontSize: e.titleFontSize
      },
      props: {
        active: () => this.props.active,
        sInner: () => this.props.sInner
      }
    })
  }
  setActive(e, {
    firstTrigger: t
  }) {
    t && i.set(this.ui.detail, {
      alpha: 0,
      x: 10
    }), i.to(this.ui.detail, {
      alpha: 0 | e,
      x: e ? 0 : 10,
      delay: .2,
      ease: "steps(2)"
    })
  }
}
Dt(mi, [ae]);
class fi extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        options: e
      }) => re `<div class="sdLayerTitle sdLayerShell__title ">
        <div
          class="sdLayerTitle__outer"
          data-ui="outer"
        >
          <div class="sdLayerTitle__inner">
            <h1
              class="sdLayerTitle__title"
              data-ui="title0"
            >
              ${e.text0}
            </h1>
            ${Xt?re`&nbsp;&nbsp;&nbsp;`:re`<div
                  class="sdLayerTitle__caption type-caption2"
                  data-ui="caption"
                >
                  ${e.caption}
                </div>`}
            <h1
              class="sdLayerTitle__title"
              data-ui="title1"
            >
              ${e.text1}
            </h1>
          </div>
        </div>
      </div>`,
      text0: "0",
      text1: "1"
    }), t(this, "props", {
      sInner: 1,
      fontSize: 150
    }), t(this, "onUpdate", (() => {
      const e = performance.now(),
        t = [...this.split0.chars, ...this.split1.chars];
      if (this.tElapsed += e - this.tLast, this.tLast = e, this.tElapsed > 60) {
        this.tElapsed = 0;
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          i.set(s, {
            alpha: Math.random() > .5 ? 1 : 0
          })
        }
      }
    })), t(this, "onComplete", (e => {
      this.tElapsed = 0;
      const t = [...this.split0.chars, ...this.split1.chars];
      i.set(t, {
        alpha: 1
      })
    }))
  }
  async onSetup() {
    this.tElapsed = 0, this.tLast = 0, this.split0 = new l(this.ui.title0, {
      type: "chars"
    }), this.split1 = new l(this.ui.title1, {
      type: "chars"
    }), this.el.style.setProperty("--font-size-base", `${this.options.fontSize}px`)
  }
  setActive(e, {
    firstTrigger: t
  }) {
    const s = [...this.split0.chars, ...this.split1.chars];
    t && i.set([...s, this.ui.caption], {
      alpha: 0
    }), i.killTweensOf(s), e ? (i.fromTo(s, {
      y: 20
    }, {
      duration: .3,
      y: 0,
      ease: "steps(1)",
      onUpdate: this.onUpdate,
      onComplete: this.onComplete,
      stagger: {
        each: .2,
        from: "random",
        amount: .2,
        ease: "power2.inOut"
      }
    }), i.to(this.ui.caption, {
      alpha: 1,
      duration: .1,
      ease: "power1.out",
      delay: .4
    })) : i.set([...s, this.ui.caption], {
      alpha: 0
    })
  }
  setSInner(e) {
    this.el.style.setProperty("--sInner", e), i.set(this.ui.outer, {
      scale: e
    })
  }
}
Dt(fi, [ae]);
const vi = [{
    id: "keep",
    storyId: "Tableaux_1_Description",
    storyCaptionStart: "001 <dot>",
    storyCaptionId: "Tableaux_1_Console_Text",
    title: "the keep",
    titleFontSize: 150,
    titleCaption: "most needed",
    layersNumFlows: 3,
    layersData: [{
      name: "1",
      options: {
        iSet: 0,
        assets: ["inside-kai-fusion-reactor#img", "keep-mountain-area#img", "mountain-topology-B#video"]
      }
    }, {
      name: "2",
      options: {
        iSet: 1,
        assets: ["main-tower-scan#video", "keep-wireframe-scan#video", "protection-tower-scan#video"],
        hasFrame: !0
      }
    }, {
      name: "3",
      options: {
        iSet: 2,
        assets: ["mining-area-scan#video", "mining-area-scan#video", "kai-fusion-reactor#img"]
      }
    }, {
      name: "4",
      options: {
        iSet: 3,
        assets: ["mountain-topology-A#video", "kpco-mining-machinery#video", "keep-tower-structure#video"],
        hasFrame: !0
      }
    }, {
      name: "5",
      options: {
        iSet: 4,
        assets: ["air-quality-index#img", "keep-cargo-ships#img", "smog-level-scan#img"],
        hasFrame: !1
      }
    }, {
      name: "6",
      options: {
        iSet: 5,
        assets: ["kpco-logo#video", "keep-tower-scan#video", "clouds-scan#video"],
        hasFrame: !0
      }
    }]
  }, {
    id: "factions",
    storyId: "Tableaux_2_Description",
    storyCaptionStart: "002 <dot>",
    storyCaptionId: "Tableaux_2_Console_Text",
    title: "2 factions",
    titleFontSize: 115,
    titleCaption: "divided",
    layersNumFlows: 4,
    layersData: [{
      name: "1",
      options: {
        iSet: 0,
        assets: ["animus-logo#video", "prisma-logo#video", "animus-attributes#img", "prisma-attributes#img"]
      }
    }, {
      name: "2",
      options: {
        iSet: 1,
        assets: ["animus-character-scan#video", "prisma-character-scan#video", "active-crystal-reaction#video", "prisma-hand-tech-scan#video"],
        hasFrame: !0
      }
    }, {
      name: "3",
      options: {
        iSet: 2,
        assets: ["animus-attributes#img", "prisma-attributes#img", "animus-logo#video", "prisma-logo#video"]
      }
    }, {
      name: "4",
      options: {
        iSet: 3,
        assets: ["elixir-1-component#video", "silicon-6-sword#video", "elixir-2-component#video", "carbon-fiber-bow#video"],
        hasFrame: !0
      }
    }, {
      name: "5",
      options: {
        iSet: 4,
        assets: ["animus-attributes#img", "prisma-attributes#img", "animus-attributes#img", "prisma-attributes#img"]
      }
    }, {
      name: "6",
      options: {
        iSet: 5,
        assets: ["blood-star-bow#video", "grade-4-titanium-sword#video", "white-crystal-sword#video", "reinforced-mercurian-sword#video"],
        hasFrame: !0
      }
    }]
  }, {
    id: "universe",
    storyId: "Tableaux_3_Description",
    storyCaptionStart: "003 <dot>",
    storyCaptionId: "Tableaux_3_Console_Text",
    title: "the world",
    titleFontSize: 120,
    titleCaption: "whole new",
    layersNumFlows: 3,
    layersData: [{
      name: "1",
      options: {
        iSet: 0,
        assets: ["boon-noodles#video", "neon-salmon-dish#img", "klmx-portable-transmeter#video"],
        hasFrame: !0
      }
    }, {
      name: "2",
      options: {
        iSet: 1,
        assets: ["boon-food-station#img", "neon-review#img", "encrypted-audio-signal#video"],
        hasFrame: !0
      }
    }, {
      name: "3",
      options: {
        iSet: 2,
        assets: ["boon-packaging#img", "table-view#img", "weekly-hits#img"]
      }
    }, {
      name: "4",
      options: {
        iSet: 3,
        assets: ["boon-logo#video", "neon-logo#video", "klmx-logo#video"],
        hasFrame: !0
      }
    }, {
      name: "5",
      options: {
        iSet: 4,
        assets: ["boon-transmission#img", "neon-transmission#img", "klmx-transmission#img"],
        hasFrame: !0
      }
    }]
  }],
  gi = e => vi.find((t => t.id == e));
class wi extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        props: e
      }) => re `<div
      class="btnHoldMobile"
      ?visible=${e.visible}
    >
      <div
        class="btnHoldMobile__labelWrap"
        data-ui="labelWrap"
      >
        <span
          class="arrow"
          data-ui="arrowL"
          ><img
            class="arrows"
            src="/svg/simple-arrow-right.svg"
            alt="▶"
        /></span>
        <span
          class="btnHoldMobile__label label type-caption2"
          data-ui="label"
          >TAP & HOLD</span
        >
        <span
          class="arrow arrow--right"
          data-ui="arrowR"
          ><img
            class="arrows"
            src="/svg/simple-arrow-right.svg"
            alt="◀"
        /></span>
      </div>
      <div
        class="btnHoldMobile__progress"
        data-ui="progressWrap"
      >
        <div class="progress"></div>
        <div
          class="progress"
          data-ui="progress"
        ></div>
      </div>
    </div>`
    }), t(this, "props", {
      visible: !1,
      draw: 0
    })
  }
  async onSetup() {}
  setActive(e, {
    firstTrigger: t
  }) {
    var s;
    t && ii.set(this.el, {
      alpha: 0
    }), null == (s = this.tlActive) || s.kill(), this.tlActive = ii.timeline({
      onStart: () => this.props.visible = !0,
      onComplete: () => this.props.visible = e
    }).to(this.el, {
      alpha: 0 | e,
      duration: .3,
      ease: "power3.out"
    }).fromTo(this.ui.arrowL, {
      x: e ? 5 : 0
    }, {
      x: e ? 0 : -5,
      duration: .3,
      ease: "power2.out"
    }, .1).fromTo(this.ui.arrowR, {
      x: e ? -5 : 0
    }, {
      x: e ? 0 : 5,
      duration: .3,
      ease: "power2.out"
    }, .1)
  }
  setHold(e) {
    ii.set(this.ui.labelWrap, {
      alpha: e ? 0 : .5
    }), ii.set(this.ui.progressWrap, {
      alpha: e ? 1 : 0
    })
  }
  setDraw(e) {
    ii.set(this.ui.progress, {
      scaleX: e,
      transformOrigin: "0 50%"
    })
  }
}
Dt(wi, [ae]);
const yi = ["keep-mountain-area", "smog-level-scan", "animus-attributes", "-transmission"],
  bi = ({
    props: e,
    options: t
  }) => re `
  <div
    class="sdLayer"
    ?active=${e.active&&(t.debug||e.play)}
  ></div>
`,
  xi = class extends te {
    constructor() {
      super(...arguments), t(this, "options", {
        template: bi,
        scene: It.getInstance().scene,
        hasRendering: !0,
        tableau: "keep",
        numFlows: 3,
        data: gi("keep"),
        soundId: "1_thekeep"
      }), t(this, "props", {
        v: e => e.active,
        active: !1,
        viewport: () => [T().state.viewport.width, T().state.viewport.height100vh],
        bounds: e => ({
          x: 0,
          y: 0,
          w: e.viewport[0],
          h: e.viewport[1]
        }),
        sizeComp: Xt ? [375, 630] : [1920, 1080],
        sizeNorm: e => [e.viewport[0] / e.sizeComp[0], e.viewport[1] / e.sizeComp[1]],
        tSequence: 0,
        play: !1,
        progress: 0,
        iFlow: 0,
        firstUpdate: !0
      }), t(this, "assets", {}), t(this, "onSequenceUpdate", (() => {
        this.props.tSequence = this.tlSequence.time()
      }))
    }
    async onBeforeSetup() {
      await this.createWrapper(), this.options.appendTo = xi.wrapperComp.el
    }
    async onSetup() {
      const {
        scene: e,
        debug: t
      } = this.options;
      this.wrapper = new pe, e.add(this.wrapper), this.assets.aeData = await g("/data/2ndlayer.ae.json").load(), this.pointer = s(), await this.setupLayers(), await this.setupSequence(), await this.setupUI(), this.resize()
    }
    async createWrapper() {
      xi.wrapperComp = xi.wrapperComp || await (new Ti).setup({
        options: {
          appendTo: document.body
        },
        props: {}
      })
    }
    async setupLayers() {
      const {
        aeData: e
      } = this.assets, {
        tableau: t
      } = this.options, s = Xt ? `${t}Mobile0` : `${t}0`, i = this.composition = e.project.compositions.find((e => e.name === s));
      this.layers = await Promise.all(i.layers.map((async (e, t) => await this.createLayer(e, t))))
    }
    async createLayer(e, t) {
      const {
        debug: s
      } = this.options, {
        name: i,
        properties: o,
        inOut: n,
        size: a
      } = e, r = this.options.data.layersData.find((e => e.name === i)), l = {
        ...(null == r ? void 0 : r.options) ? ? {},
        name : i,
        properties : o,
        size: a,
        appendTo: this.el,
        addTo: this.wrapper,
        keyframesPosition: o.position.keyframes,
        keyframesScale: o.scale.keyframes,
        keyframesAnchorpoint: o.anchorpoint.keyframes,
        dataTableau: this.options.data
      };
      return await (new ri).setup({
        options: l,
        props: {
          active: () => this.props.active && (s || this.props.play) && fs(this.props.tSequence, n[0], n[1]),
          v: e => e.active,
          iSet: l.iSet,
          iFlow: () => this.props.iFlow,
          bounds: () => this.props.bounds,
          pAnchorPoint: e => [e.kfAnchor[0], e.kfAnchor[1]],
          posLayoutOffset: e => [-e.kfAnchor[0] * (1 / e.ratio[0]), -e.kfAnchor[1] * (1 / e.ratio[1])],
          posLayout: e => [(e.posLayoutOffset[0] + e.kfPosition[0]) * this.props.sizeNorm[0], (e.posLayoutOffset[1] + e.kfPosition[1]) * this.props.sizeNorm[1]],
          sizeLayout: e => [e.ratio[0] * e.kfScale[0], e.ratio[1] * e.kfScale[1]],
          ratio: () => this.props.sizeNorm,
          kfPosition: l.keyframesPosition[0][1],
          kfScale: l.keyframesScale[0][1].map((e => e / 100)),
          kfAnchor: l.keyframesAnchorpoint[0][1]
        }
      })
    }
    async setupSequence() {
      const e = this.tlSequence = i.timeline({
        paused: !0,
        onUpdate: this.onSequenceUpdate
      });
      for (let t = 0; t < this.layers.length; t++) {
        const s = this.layers[t];
        e.add(s.createTimeline(), 0)
      }
    }
    async setupUI() {
      const {
        scene: e,
        data: t
      } = this.options;
      this.btnHold = await (Xt ? new wi : new ci).setup({
        options: {
          appendTo: xi.wrapperComp.el,
          addTo: e,
          preventAddTo: !1
        },
        props: {
          active: () => this.props.active,
          hovering: () => "tableaux" === T().state.appHovering,
          hold: () => this.props.play
        }
      }), this.shell = await (new mi).setup({
        options: {
          appendTo: this.el,
          data: t
        },
        props: {
          v: e => this.props.active && e.active,
          active: () => this.props.play
        }
      })
    }
    loadSounds() {
      const {
        soundId: e
      } = this.options, t = Xt ? "_MOBILE" : "";
      this.soundIn = new o.Howl({
        src: [`/audio/FX_flow_transition_IN_${e}${t}.mp3`]
      }), this.soundOut = new o.Howl({
        src: ["/audio/FX_flow_transition_RELEASE.mp3"]
      })
    }
    async onActive() {
      this.props.firstUpdate && (await this.updateLayers(), this.loadSounds())
    }
    play() {
      this.props.active && (this.props.play = !0, this.soundIn.play())
    }
    stop() {
      this.props.active && (this.props.play = !1, this.soundIn.stop(), this.soundOut.play())
    }
    async setPlay(e, {
      firstTrigger: t
    }) {
      var s, i, o;
      if (t) return;
      T().state.secondLayerActive = e;
      const n = this.options.data.layersNumFlows;
      e ? (null == (s = this.tlSequence) || s.play(), this.options.onPlay && this.options.onPlay(!0)) : (null == (i = this.tlSequence) || i.restart(), null == (o = this.tlSequence) || o.pause(), this.props.iFlow = (this.props.iFlow + 1) % n, this.props.tSequence = 0, this.options.onPlay && this.options.onPlay(!1), this.btnHold.props.draw = 0, this.updateLayers())
    }
    setActive(e) {
      xi.wrapperComp.props.active = e
    }
    whilePlay() {
      this.btnHold && (this.btnHold.props.draw = this.tlSequence.progress())
    }
    setProgress(e) {
      var t;
      null == (t = this.tlSequence) || t.progress(e)
    }
    async updateLayers() {
      const {
        tableau: e
      } = this.options, {
        iFlow: t
      } = this.props;
      this.layers.forEach((async s => {
        const {
          assets: i,
          iSet: o
        } = s.options, n = i[t], {
          type: a,
          filename: r
        } = (e => {
          const t = e.split("#"),
            s = t[0],
            i = t[1].split(","),
            o = i[0],
            n = s.split("/").slice(-1).join(""),
            a = n.split(".").slice(0, -1).join("");
          return {
            url: s,
            types: i,
            type: o,
            filename: n,
            basename: a
          }
        })(n), l = yi.find((e => n.includes(e))), p = !l, c = `${"img"===a?`/images/${l?"":"compressed/ktx/"}tableau/${e}/second-layer/flow-${t}/set-${o}`:`/images/tableau/${e}/second-layer/flow-${t}/set-${o}`}/${r}${"video"===a?"":l?".png":p?".ktx2":".webp"}`;
        if ("img" === a) {
          (p ? w : y)(c).load().then((e => {
            s.updateSource({
              src: c,
              source: e,
              type: a,
              filename: r
            })
          })).catch((e => {}))
        } else s.updateSource({
          src: c,
          source: null,
          type: a,
          filename: r
        })
      })), this.props.firstUpdate = !1
    }
    resize() {}
    setViewport([e, t]) {
      this.wrapper.position.set(.5 * -e, .5 * t, 0)
    }
    whileActive() {
      const [e, t] = this.props.viewport, {
        x: s,
        y: i
      } = this.pointer;
      if (Xt || (this.btnHold.props.pX = s.value - .5 * e, this.btnHold.props.pY = i.value - .5 * t), this.options.hasRendering) {
        const {
          renderer: e
        } = It.getInstance();
        e.clear(), this.render()
      }
    }
    render() {
      const {
        renderer: e,
        orthoCamera: t
      } = It.getInstance(), {
        scene: s
      } = this.options;
      e.clearDepth(), t.layers.set(Ot.UI), e.render(s, t)
    }
    onDestroy() {
      this.layers.forEach((e => e.destroy())), this.layers = null, xi.wrapperComp && (xi.wrapperComp.destroy(), xi.wrapperComp = null)
    }
  };
let Si = xi;
t(Si, "wrapper"), Dt(Si, [ae, ts(ss, {
  expanded: !0,
  withoutKeys: "viewport sizeComp tSequence iSet iFlow",
  withoutViews: "btnHold",
  keysOptions: {
    progress: {
      min: 0,
      max: 1,
      step: .01
    }
  }
})]);
class Ti extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        props: e
      }) => re `<div
        class="sdLayerWrapper"
        ?active=${e.active}
      ></div>`
    }), t(this, "props", {
      active: !1
    })
  }
}
Dt(Ti, [ae]);
const Ai = {
    options: {
      id: "keep",
      soundId: "1_thekeep",
      posInit: [0, 0, 0],
      distOrbitDefault: .002 * Math.PI,
      distOrbitHold: .001 * Math.PI,
      useMask: !0,
      usePass: !0,
      useControls: T().state.camera.useControls,
      useHelpers: T().state.camera.useHelpers,
      maxLayers: 22,
      zoom0Tg: .5,
      zoom1Tg: .5,
      cBackground: 7495782
    },
    props: {
      progress: 0,
      zoomStart: 0,
      zoom: 0,
      screenUnit: 1,
      play: !1,
      activeLayer: e => e.active && e.pIn >= 1 && e.pOut <= 0
    },
    onBeforeSetup() {
      this.propsAnim = {
        rCard: [0, 0, 0],
        exposure: 0,
        flick: 0,
        zoom0: 0,
        zoom1: 0,
        ppRot: 0,
        ppAmount: 0,
        startAnimStory0: 0
      }
    },
    async onSetup() {
      Bt(this, "handleMouseEnter");
      const {
        useHelpers: e,
        usePass: t
      } = this.options;
      this.vLookAt = new Pe, this.vCamWrap0 = new Pe, this.vCamWrap1 = new Pe, this.tLast = 0, this.tElapsed = 0, this.pointer = s();
      for (const s in this.assets) {
        this.assets[s].name = s
      }
      await this.setupScene(), Xt || await this.setupSceneBG(), await this.setupCamera(), t && await this.setupPass(), e && this.addHelpers(), await this.setupCards(), await this.setupSecondLayer(), await this.setupStoryBlock()
    },
    async setupScene() {
      const {
        objects: e,
        assets: t
      } = this, {
        maxLayers: s
      } = this.options, i = [], o = this.scene = new ye, n = this.assets.gltf, a = this.gltfScene = n.scene;
      a.traverse((n => {
        if (n.isMesh && n.material) {
          const {
            name: a
          } = n.userData, r = e.find((e => e.id === a)), l = (new(r && r.class || $)).setup({
            options: {
              addTo: o,
              gltfRef: n,
              preventAddTo: !0,
              maxLayers: s,
              assets: t,
              data: (null == r ? void 0 : r.options.spritesheets) ? Array.from(new Array(r.options.spritesheets.amount)).map(((e, s) => ({
                json: t[`${r.options.spritesheets.id}${s}`],
                texture: t[`${r.options.spritesheets.id}Map${s}`]
              }))) : null,
              ...null == r ? void 0 : r.options
            },
            props: {
              enter: () => this.props.enter
            }
          });
          i.push(l)
        }
      })), this.scene.add(a), this.sceneObjects = await Promise.all(i);
      const r = a.getObjectByName("camera_target");
      r && (this.vLookAt = (new Pe).copy(r.position))
    },
    async setupSceneBG() {
      const {
        cBackground: e
      } = this.options, t = new Le({
        vertexShader: Wt,
        fragmentShader: "\n        uniform vec3 uColor;\n        void main() {\n          vec3 c = uColor;\n          gl_FragColor = vec4(c, 1.);    \n        }",
        transparent: !0,
        uniforms: {
          uColor: {
            value: new Me(e)
          }
        }
      }), s = this.meshBG = new ue(new Te(1, 1), t);
      s.name = "MeshBG", s.layers.set(Ot.BG), this.scene.add(s)
    },
    async setupCards() {},
    async setupCamera() {
      const {
        useControls: e,
        distOrbitDefault: t,
        posInit: s
      } = this.options;
      this.cameraSystem = await (new rs).setup({
        options: {
          vInit: (new Pe).fromArray(s),
          vTarget: this.vLookAt
        },
        props: {
          active: () => this.props.enter && (!Xt || !this.props.play) && !e,
          fov: 23,
          distOrbit: t
        }
      }), e ? (this.camera = It.getInstance().perspCamera, this.el.style.pointerEvents = "none") : (this.camera = this.cameraSystem.camera, this.cameraWrapper = new fe, this.cameraWrapper.add(this.camera), this.scene.add(this.cameraWrapper))
    },
    async setupSecondLayer() {
      const {
        id: e,
        soundId: t,
        data: s
      } = this.options;
      this.secondLayer = await (new Si).setup({
        options: {
          scene: this.scene,
          tableau: e,
          data: s,
          soundId: t,
          hasRendering: !1,
          onPlay: e => this.onSecondLayerAction(e)
        },
        props: {
          active: () => this.props.activeLayer
        }
      })
    },
    async setupStoryBlock() {
      const {
        data: e,
        copy: t
      } = this.options;
      this.storyBlock = await (new oi).setup({
        options: {
          appendTo: this.ui.pin,
          text: t[e.storyId],
          caption: `${e.storyCaptionStart} ${t[e.storyCaptionId]}`
        },
        props: {
          active: () => this.props.active && (!this.secondLayer || !this.secondLayer.props.play)
        }
      })
    },
    async setupPass() {
      const e = H.instance.assets.noiseTexture;
      e && e.wrapS !== Re && (e.wrapS = e.wrapT = Re, e.needsUpdate = !0);
      const t = H.instance.assets.flickTexture;
      t && t.magFilter !== Ie && (t.magFilter = Ie, t.needsUpdate = !0);
      const s = this.shaderPass = new Le({
        vertexShader: Wt,
        fragmentShader: `\n        varying vec2 vUv;    \n        uniform sampler2D tMap;\n        uniform sampler2D tMapNoise;\n        uniform sampler2D tMapFlick;\n        uniform float uExposure;\n        uniform float uTime;\n        uniform float uNoiseIntensity;\n        uniform vec2 uResolution;\n        uniform float uFlickProgress;\n        uniform vec2 uFlickResolution;\n        uniform float uPurpleRot;\n        uniform float uPurpleAmount;\n        ${ps}\n        ${hs}\n        ${ls}\n        #define GLSLIFY 1\n#ifndef FNC_BLENDCOLORDODGE\n#define FNC_BLENDCOLORDODGE\nfloat blendColorDodge(in float base,in float blend){return(blend==1.)? blend: min(base/(1.-blend),1.);}vec3 blendColorDodge(in vec3 base,in vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(in vec3 base,in vec3 blend,in float opacity){return(blendColorDodge(base,blend)*opacity+base*(1.-opacity));}\n#endif\n\n        #define GLSLIFY 1\n#ifndef FNC_BLENDOVERLAY\n#define FNC_BLENDOVERLAY\nfloat blendOverlay(in float base,in float blend){return(base<.5)?(2.*base*blend):(1.-2.*(1.-base)*(1.-blend));}vec3 blendOverlay(in vec3 base,in vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(in vec3 base,in vec3 blend,in float opacity){return(blendOverlay(base,blend)*opacity+base*(1.-opacity));}\n#endif\n\n        ${Js}\n        #define GLSLIFY 1\n#ifndef FNC_SATURATE\n#define FNC_SATURATE\nfloat saturate(float x){return clamp(x,0.0,1.0);}vec2 saturate(vec2 x){return clamp(x,0.0,1.0);}vec3 saturate(vec3 x){return clamp(x,0.0,1.0);}vec4 saturate(vec4 x){return clamp(x,0.0,1.0);}\n#endif\n#ifndef FNC_MAP\n#define FNC_MAP\nfloat map(float value,float inMin,float inMax){return saturate((value-inMin)/(inMax-inMin));}vec2 map(vec2 value,vec2 inMin,vec2 inMax){return saturate((value-inMin)/(inMax-inMin));}vec3 map(vec3 value,vec3 inMin,vec3 inMax){return saturate((value-inMin)/(inMax-inMin));}vec4 map(vec4 value,vec4 inMin,vec4 inMax){return saturate((value-inMin)/(inMax-inMin));}float map(in float value,in float inMin,in float inMax,in float outMin,in float outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}vec2 map(in vec2 value,in vec2 inMin,in vec2 inMax,in vec2 outMin,in vec2 outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}vec3 map(in vec3 value,in vec3 inMin,in vec3 inMax,in vec3 outMin,in vec3 outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}vec4 map(in vec4 value,in vec4 inMin,in vec4 inMax,in vec4 outMin,in vec4 outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}float map(float value,float inMin,float inMax,float outMin,float outMax,bool clamped){if(clamped)value=min(inMax,max(inMin,value));return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}\n#endif\n\n        ${cs}\n        ${ei}\n        ${G}\n        ${ti}\n      \n        vec3 exposure(vec3 color, float value) {\n          return (1.0 + value) * color;\n        }\n        vec2 nearest(in vec2 st, in vec2 resolution) {\n          vec2 offset = .5 / (resolution - 1.);\n          return floor(st * resolution) / resolution + offset;\n        }\n\n        void main() {\n            vec2 st = vUv;\n            vec2 res = uResolution;\n            vec4 tDiffuse = texture2D(tMap, vUv);\n            float t = uTime;\n\n            // noise\n            #ifdef ALL_FX\n              float noiseTime = floor(mod(t * 20.0, 20.0));\n              vec2 rand =  random2(vec2(noiseTime, noiseTime * 2.0));\n              vec2 stNoise = UVResize(st, res, vec2(1.), vec2(256. / res.y), 0);\n                  stNoise += rand * rand;\n              vec3 noise = texture2D(tMapNoise, stNoise).rgb;\n            #endif\n\n            // flick\n            vec3 flick = texture2D(tMapFlick, nearest(vec2(uFlickProgress, 0.), uFlickResolution)).rgb;\n\n            // gradient\n            // vec2 stGradL = smoothstep(0., size(res.x * 0.08), st); // left\n            // vec2 stGradR = smoothstep(1., 1. - size(res.x * 0.08), st); // left\n            // float gradAmount = \n            //   mix(0., 1. - stGradL.x, uExposure) +\n            //   mix(0., 1. - stGradR.x, uExposure);\n\n            // purple\n            vec2 stPurple = uv0;\n            stPurple = rotate(stPurple, uPurpleRot, vec2(-0., 1.));\n            stPurple.x = cubicPulse(0., 1., stPurple.x);\n            float purple = stPurple.x * uPurpleAmount;\n\n            // bottom gradient\n            float gradient = mix(0.0, 0.5, smoothstep(0.4, 0.0, vUv.y));\n\n            // compositing\n            vec3 c = tDiffuse.rgb;\n            c = mix(c, vec3(0.0), 0.1);\n            c = mix(c, vec3(0.0), gradient);\n            // (sR*sA) + (dR*(1-sA))\n            \n            #ifdef ALL_FX\n            if(uExposure > 0.) {\n                // c = mix(c, levels(c, 0.2, 0.4, 0.8) * 0.6, uExposure);\n                // c = exposure(c, uExposure * -0.5 + mix(0., -0.5, gradAmount));\n                c = exposure(c, uExposure * -0.5);\n                c = mix(c, vec3(0.), uExposure * 0.2);\n              }\n              c = blendOverlay(c, noise, uNoiseIntensity);\n              if(purple > 0.) c = blendAdd(c, vec3(0.75, 0.00, 1.00), purple);\n              c = blendAdd(c, flick, 1.);\n            #else\n              if(purple > 0.) c = blendAdd(c, vec3(0.75, 0.00, 1.00), purple);\n              c = blendAdd(c, flick, 1.);\n            #endif\n            \n            float a = tDiffuse.a;\n            if(a < 0.5) discard;\n            gl_FragColor = vec4(c, 1.);\n            // gl_FragColor = vec4(vec3(stGradL.x), 1.);\n        }`,
        uniforms: {
          tMap: {
            value: null
          },
          tMapNoise: {
            value: e
          },
          tMapFlick: {
            value: t
          },
          uBurn: {
            value: 0
          },
          uExposure: {
            value: 0
          },
          uPurpleRot: {
            value: 0
          },
          uPurpleAmount: {
            value: 0
          },
          uFlickResolution: {
            value: new de(128, 1)
          },
          uFlickProgress: {
            value: 0
          },
          uNoiseIntensity: {
            value: 1
          },
          uTime: {
            value: .5
          },
          uResolution: {
            value: new de
          }
        },
        defines: {
          ALL_FX: !0
        }
      });
      qt(s), this.pass = new si(It.getRenderer(), {
        shader: s
      });
      for (const i in this.pass.fbo) this.pass.fbo[i].stencilBuffer = !0;
      s.uniforms.tMap.value = this.pass.fbo.write.texture
    },
    getAnimHold(e) {
      const {
        zoom0Tg: t,
        zoom1Tg: s
      } = this.options, {
        propsAnim: o
      } = this, n = i.timeline({}).call((() => this.onShellCall(e)), 0);
      return e ? n.fromTo(o, {
        flick: 0
      }, {
        duration: 2,
        flick: 1,
        ease: "none"
      }, 0).to(o, {
        exposure: 1,
        duration: .5,
        ease: "power3.out"
      }, 0).to(o, {
        zoom0: t || 1,
        duration: .5,
        ease: "expo.out"
      }, 0).to(o, {
        zoom1: s || 1,
        duration: 8,
        ease: "sine.out"
      }, 0) : n.set(o, {
        flick: 0
      }, 0).to(o, {
        exposure: 0,
        duration: 1,
        ease: "power3.out"
      }, 0).to(o, {
        zoom0: 0,
        duration: .8,
        ease: "power3.out"
      }, 0).to(o, {
        zoom1: 0,
        duration: .8,
        ease: "power3.out"
      }, 0), n
    },
    getAnimStory() {
      const {
        scale: e,
        vh: t
      } = T().state, s = Xt ? .8 : 1, o = 500 * e * s, n = 30 * e * s, a = 30 * e * s, r = this.props.end - this.props.start, l = [this.storyBlock.ui.caption, ...this.storyBlock.lines], {
        startAnimStory0: p
      } = this.propsAnim;
      return i.timeline({
        paused: !0
      }).fromTo(l, {
        y: n,
        alpha: 0
      }, {
        y: 0,
        alpha: 1,
        duration: o,
        ease: "expo.out",
        stagger: a
      }, p || 1.2 * t).to(l, {
        y: -n,
        alpha: 0,
        duration: .5 * o,
        ease: "power2.in",
        stagger: a
      }, r - 1.8 * t)
    },
    onPointerIn(e) {
      var t;
      e.preventDefault(), Xt ? this.toCallback = setTimeout((() => {
        var e;
        null == (e = this.secondLayer) || e.play()
      }), 50) : null == (t = this.secondLayer) || t.play()
    },
    onPointerOut(e) {
      var t;
      e.preventDefault(), this.toCallback && clearTimeout(this.toCallback), null == (t = this.secondLayer) || t.stop()
    },
    onShellCall(e) {
      T().state.hideShell = e
    },
    onSecondLayerAction(e) {
      var t;
      const {
        distOrbitDefault: s,
        distOrbitHold: i
      } = this.options;
      this.cameraSystem.props.distOrbit = e ? i : s, null == (t = this.tlHold) || t.kill(), this.tlHold = this.getAnimHold(e), this.props.play = e
    },
    setActiveLayer(e) {
      var t;
      e ? this.el.style.cursor = "none" : (null == (t = this.secondLayer) || t.stop(), this.el.style.cursor = "auto")
    },
    onEnter() {
      this.el.addEventListener("mouseenter", this.handleMouseEnter)
    },
    offEnter() {
      this.el.removeEventListener("mouseenter", this.handleMouseEnter)
    },
    handleMouseEnter() {
      const {
        app: e
      } = x;
      e ? e.hovering = "tableaux" : T().state.appHovering = "tableaux"
    },
    whileEnter(e) {
      this.card && this.updateCard(), this.pass && this.updatePass(e)
    },
    updateCard() {
      const {
        rCard: e
      } = this.propsAnim, {
        delta: t
      } = It.getInstance(), {
        width: s,
        height: i
      } = this.props.viewport, {
        x: o,
        y: n
      } = this.pointer;
      !this.pointerStarted && o.value && (this.pointerStarted = !0);
      const a = .25,
        r = this.pointerStarted ? o.value : s / 2,
        l = this.pointerStarted ? n.value : i / 2,
        p = 1 * jt(l, 0, i, -a, a),
        c = 1 * jt(r, 0, s, -a, a);
      e[0] = me.damp(e[0], p, 3, t), e[1] = me.damp(e[1], c, 3, t), this.card.props.rMotion[0] = e[0], this.card.props.rMotion[1] = e[1]
    },
    updatePass(e) {
      const {
        ppRot: t,
        ppAmount: s,
        exposure: i,
        flick: o
      } = this.propsAnim;
      this.shaderPass.uTime = e % 10, this.shaderPass.uExposure = i, this.shaderPass.uFlickProgress = o, this.shaderPass.uPurpleRot = t, this.shaderPass.uPurpleAmount = s
    },
    resize({
      width: e,
      height: t,
      height100vh: s
    }) {
      var i, o, n;
      const {
        id: a
      } = this.options;
      "keep" == a && (this.propsAnim.startAnimStory0 = 1.1 * t), null == (i = this.tlStory) || i.kill(), this.tlStory = null, this.tlStory = this.getAnimStory(), null == (o = this.shaderPass) || o.uResolution.set(e, t), null == (n = this.meshBG) || n.scale.set(e, s, 1)
    },
    onPostResize() {
      var e, t, s;
      const {
        perspCamera: i,
        renderer: o
      } = It.getInstance(), [n, a] = Nt(0, i), {
        width: r,
        height: l
      } = this.props.viewport, {
        height: p
      } = this.props.bounds, c = o.getPixelRatio();
      this.props.screenUnit = l / p, this.card.props.s = [n * (Xt ? 1.8 : 1.1), a * (Xt ? 1.15 : 1.25), 1], null == (e = this.pass) || e.setSize(r * c, l * c), null == (t = this.st) || t.refresh(), null == (s = this.secondLayer) || s.resize()
    },
    setZoom(e) {
      const {
        useControls: t
      } = this.props;
      t || (this.camera.zoom = e, this.camera.updateProjectionMatrix())
    },
    onDestroy() {
      this.sceneObjects.forEach((e => e.destroy())), this.sceneObjects = null, this.scene.traverse((e => {
        var t, s, i, o, n, a, r, l, p, c;
        null == (o = null == (i = null == (s = null == (t = e.material) ? void 0 : t.uniforms) ? void 0 : s.uTexture) ? void 0 : i.value) || o.dispose(), null == (l = null == (r = null == (a = null == (n = e.material) ? void 0 : n.uniforms) ? void 0 : a.tMap) ? void 0 : r.value) || l.dispose(), null == (p = e.material) || p.dispose(), null == (c = e.geometry) || c.dispose()
      }));
      for (const e in this.assets) {
        const t = this.assets[e];
        (t instanceof Ee || t instanceof Oe) && t.dispose()
      }
      for (const e in H.instance.assets) {
        const t = H.instance.assets[e];
        (t instanceof Ee || t instanceof Oe) && t.dispose()
      }
      if (this.pass) {
        this.pass.scene.traverse((e => {
          var t, s, i, o, n, a;
          null == (o = null == (i = null == (s = null == (t = e.material) ? void 0 : t.uniforms) ? void 0 : s.tMap) ? void 0 : i.value) || o.dispose(), null == (n = e.material) || n.dispose(), null == (a = e.geometry) || a.dispose()
        }));
        for (const e in this.pass.fbo) {
          const t = this.pass.fbo[e];
          t instanceof Se && t.dispose()
        }
      }
    }
  },
  _i = "#define GLSLIFY 1\n#ifndef FNC_SATURATE\n#define FNC_SATURATE\nfloat saturate(float x){return clamp(x,0.0,1.0);}vec2 saturate(vec2 x){return clamp(x,0.0,1.0);}vec3 saturate(vec3 x){return clamp(x,0.0,1.0);}vec4 saturate(vec4 x){return clamp(x,0.0,1.0);}\n#endif\n";
class ki extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.MAIN
    }), t(this, "props", {
      enter: !1
    })
  }
  async onSetup() {
    const {
      gltfRef: e,
      layer: t,
      maxLayers: s
    } = this.options, i = this.mesh = e, {
      order: o
    } = i.userData, n = H.instance.assets.mapPNoise;
    n && n.wrapS !== Re && (n.wrapS = Re);
    const a = i.material.map;
    a && (a.encoding = Fe);
    const r = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        varying vec2 vUv;\n        uniform sampler2D tMap;\n        uniform sampler2D tNoise;\n        uniform vec2 uResolution;\n        uniform float uTime;\n        // ${ps}\n        ${_i}\n        ${Js}\n        void main() {\n            vec2 st = vUv;\n            vec2 stNoise = vec2(0.);\n                 stNoise.x += mod(uTime * 0.2, 2.);\n            \n            vec4 tDiffuse = texture2D(tMap, st);\n            vec4 cNoise = texture2D(tNoise, stNoise);\n\n            // float n = mix(0.5, 1., cNoise.r);\n            // float a = tDiffuse.a * n;\n            // vec3 color = tDiffuse.rgb;\n            \n            float n = mix(0., 0.5, cNoise.r);\n            vec3 color = blendAdd(tDiffuse.rgb, tDiffuse.rgb, n);\n            float a = tDiffuse.a;\n            \n            gl_FragColor = vec4(color, a);\n            // gl_FragColor = cNoise;\n        }`,
      uniforms: {
        tMap: {
          value: a
        },
        tNoise: {
          value: n
        },
        uResolution: {
          value: new de(1024, 1024)
        },
        uTime: {
          value: 0
        }
      },
      transparent: !0,
      type: "BeamMaterial"
    });
    qt(r), X(i, {
      w: a.source.data.width,
      h: a.source.data.height
    }), i.material = r, i.matrixAutoUpdate = !1, i.layers.set(t), i.updateMatrix(), o && (i.material.depthWrite = i.material.depthTest = !1, i.renderOrder = s - o)
  }
  whileEnter(e) {
    this.mesh.material.uTime = e % 10
  }
}
Dt(ki, [Et]);
class Ci extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.MAIN
    }), t(this, "props", {
      enter: !1
    })
  }
  async onSetup() {
    const {
      gltfRef: e,
      layer: t,
      maxLayers: s,
      assets: i
    } = this.options, o = this.mesh = e, {
      order: n
    } = o.userData, a = o.material.map;
    a && (a.encoding = Fe);
    const r = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        #include <common>\n        varying vec2 vUv;\n        uniform sampler2D tMap;\n        uniform vec2 uResolution;\n        uniform float uTime;\n        ${hs}\n        ${is}\n        #define GLSLIFY 1\nfloat luma(vec3 color){return dot(color,vec3(0.299,0.587,0.114));}float luma(vec4 color){return dot(color.rgb,vec3(0.299,0.587,0.114));}\n        void main() {\n            vec2 st = vUv;   \n            float t = (uTime * 100.) * 0.5;         \n            vec2 stLuma0 = vUv;\n                 stLuma0 = rotate(stLuma0, -(PI * 0.2) + sin(t * 0.05) * 0.1, vec2(0.5, 0.35));\n                 stLuma0 = scale(stLuma0, 0.8 - (abs(sin(t)) * 0.3), vec2(0.5, 0.35));\n\n              vec2 stLuma1 = vUv;\n                stLuma1 = rotate(stLuma1, (PI * -0.2) + sin(t * 0.1) * -0.2, vec2(0.5, 0.35));\n                stLuma1 = scale(stLuma1, 0.7 - (abs(sin(t * 0.5)) * 0.3), vec2(0.5, 0.35));\n            \n            vec4 tLuma0 = texture2D(tMap, stLuma0);\n            vec4 tLuma1 = texture2D(tMap, stLuma1);\n\n            float m0 = smoothstep(0., 0.5, luma(tLuma0));\n            float m1 = smoothstep(0., 0.5, luma(tLuma1));\n\n            vec3 color = vec3(0.75, 0.78, 0.75);\n            float a = (m0 * m1) * 0.7;\n                  a *= smoothstep(1., 0.93, st.x);\n                  a *= smoothstep(1., 0.93, st.y);\n            \n            gl_FragColor = vec4(color, a);\n            // gl_FragColor = vec4(vec3(a), 1.);\n            // gl_FragColor = vec4(vec3(tLuma0.x), 1.);\n\n        }`,
      uniforms: {
        tMap: {
          value: a
        },
        uResolution: {
          value: new de
        },
        uTime: {
          value: 0
        }
      },
      transparent: !0,
      type: "RayMaterial"
    });
    qt(r), o.material = r, o.matrixAutoUpdate = !1, o.layers.set(t), o.updateMatrix(), n && (o.material.depthWrite = o.material.depthTest = !1, o.renderOrder = s - n)
  }
  whileEnter(e) {
    this.mesh.material.uTime = .01 * e
  }
}
Dt(Ci, [Et]);
const Li = ".ktx2",
  Pi = class extends te {
    constructor() {
      super(...arguments), t(this, "options", {
        id: "keep",
        soundId: "1_thekeep",
        template: ({
          context: e
        }) => re `<section
      class="homeKeep homeSection"
      @pointerdown=${e.onPointerIn.bind(e)}
      @pointerup=${e.onPointerOut.bind(e)}
      @pointercancel=${e.onPointerOut.bind(e)}
    >
      <div
        class="tableau__inner"
        data-ui="pin"
      ></div>
    </section>`,
        posInit: [0, 0, 1.85],
        distOrbitDefault: .002 * Math.PI,
        distOrbitHold: .001 * Math.PI,
        data: gi("keep"),
        zoom0Tg: .4,
        zoom1Tg: .3,
        cBackground: 7495782
      }), t(this, "props", {
        active: e => e.enter && e.time > .46 * T().state.vh,
        mode: e => e.progress < e.screenUnit && !Xt ? Pi.MODES.INTRO : Pi.MODES.DEFAULT,
        zoomStart: Xt ? -.4 : -.1,
        pIn: e => jt(e.progress, 0, e.screenUnit, 0, 1, !0),
        pOut: e => jt(e.progress, 1 - e.screenUnit, 1, 0, 1, !0)
      }), t(this, "objects", [...V.hasMobileFallback ? [] : [{
        id: "kai_fx",
        class: Y,
        options: {
          fps: 60,
          spritesheets: {
            id: "sheetCharacter",
            amount: 3
          },
          sequences: [{
            id: "default",
            from: 0,
            to: 120,
            loop: -1
          }]
        }
      }, {
        id: "ship_fx",
        class: Y,
        options: {
          fps: 30,
          spritesheets: {
            id: "sheetBeamShip",
            amount: 3
          },
          sequences: [{
            id: "default",
            from: 0,
            to: 59,
            loop: -1
          }]
        }
      }, {
        id: "beams_fx",
        class: Y,
        options: {
          fps: 15,
          spritesheets: {
            id: "sheetKai",
            amount: 4
          },
          sequences: [{
            id: "default",
            from: 0,
            to: 67,
            loop: -1
          }]
        }
      }, {
        id: "lower_beam_fx",
        class: ki,
        options: {}
      }], {
        id: "rays_fx",
        class: Ci,
        options: {
          preventAddTo: !1
        }
      }]), t(this, "assets", {
        gltf: `${V.gltfBaseFolder}tableaux-keep/tableaux-keep-${Xt?"mobile":V.textureSize}${V.hasMobileFallback?"-fallback":""}.glb`,
        ...V.hasMobileFallback ? {} : {
          sheetCharacter0: "/images/tableau/keep/character-light/character-light-0.json#json",
          sheetCharacter1: "/images/tableau/keep/character-light/character-light-1.json#json",
          sheetCharacter2: "/images/tableau/keep/character-light/character-light-2.json#json",
          sheetKai0: "/images/tableau/keep/kai/kai-0.json#json",
          sheetKai1: "/images/tableau/keep/kai/kai-1.json#json",
          sheetKai2: "/images/tableau/keep/kai/kai-2.json#json",
          sheetKai3: "/images/tableau/keep/kai/kai-3.json#json",
          sheetBeamShip0: "/images/tableau/keep/beam-ship/beam-ship-0.json#json",
          sheetBeamShip1: "/images/tableau/keep/beam-ship/beam-ship-1.json#json",
          sheetBeamShip2: "/images/tableau/keep/beam-ship/beam-ship-2.json#json",
          sheetCharacterMap0: `${O}tableau/keep/character-light/character-light-0${Li}`,
          sheetCharacterMap1: `${O}tableau/keep/character-light/character-light-1${Li}`,
          sheetCharacterMap2: `${O}tableau/keep/character-light/character-light-2${Li}`,
          sheetKaiMap0: `${O}tableau/keep/kai/kai-0${Li}`,
          sheetKaiMap1: `${O}tableau/keep/kai/kai-1${Li}`,
          sheetKaiMap2: `${O}tableau/keep/kai/kai-2${Li}`,
          sheetKaiMap3: `${O}tableau/keep/kai/kai-3${Li}`,
          sheetBeamShipMap0: `${O}tableau/keep/beam-ship/beam-ship-0${Li}`,
          sheetBeamShipMap1: `${O}tableau/keep/beam-ship/beam-ship-1${Li}`,
          sheetBeamShipMap2: `${O}tableau/keep/beam-ship/beam-ship-2${Li}`
        }
      })
    }
    onEnter() {
      var e;
      null == (e = x.app) || e.setActiveSection("#keep")
    }
    async onAfterSetup() {
      this.options.useControls && (this.camera.position.z = 2), this.tlIn = this.getAnimIn()
    }
    async setupCards() {
      const e = .1 * Math.PI,
        t = .04 * Math.PI;
      this.card = await (new gs).setup({
        options: {
          addTo: this.scene,
          idPath: Xt ? "mask-mobile" : "mask1"
        },
        props: {
          viewport: this.props.viewport,
          pr: () => this.props.progress,
          v: e => this.props.active && e.pr > this.props.screenUnit,
          pOut: () => this.props.pOut,
          pMotion: e => jt(e.pOut, 0, .25, 0, 1, !0),
          pY: e => es(e.pOut, 0, 1.1 * e.s[1]),
          pZ: e => es(e.pOut, 0, -1.3),
          rMotion: [0, 0, 0],
          rX: t => es(t.pOut, 0, -e) + t.rMotion[0] * t.pMotion,
          rY: e => e.rMotion[1] * e.pMotion,
          rZ: e => es(e.pOut, 0, -t)
        }
      });
      const s = [{
        posInit: [0, .06, -2],
        posLerp: [0, 0, 3.4],
        sInit: 1,
        sLerp: .6,
        mapOffset: [0, 0],
        idPath: "mask1"
      }, {
        posInit: [-.55, .4, -1],
        posLerp: [-.8, 0, 3.4],
        rInit: .6 * Math.PI,
        sInit: .8,
        sLerp: 0,
        mapOffset: [.4, .1],
        mapScale: 1.2,
        idPath: "mask2"
      }, {
        posInit: [.5, -.2, -1],
        posLerp: [.6, 0, 3.4],
        sInit: .6,
        sLerp: 0,
        mapOffset: [0, .6],
        mapScale: 1.2,
        idPath: "mask0"
      }];
      this.cardsTableau = await Promise.all(s.map((async (e, t) => await (new Ri).setup({
        options: {
          i: t,
          addTo: this.scene,
          idPath: e.idPath,
          fbo: this.pass ? this.pass.fbo.read : null,
          scene: this.scene,
          useMask: !Xt
        },
        props: {
          viewport: this.props.viewport,
          v: e => this.props.active && e.pr < this.props.screenUnit,
          s: e => e.sInit + es(e.pIn1, 0, e.sLerp),
          pr: () => this.props.progress,
          pIn0: e => jt(e.pr, 0, this.props.screenUnit, 0, 1, !0),
          pIn1: e => jt(e.pr, .5 * this.props.screenUnit, this.props.screenUnit, 0, 1, !0),
          pX: e => e.posInit[0] + es(e.pIn1, 0, e.posLerp[0]),
          pY: e => e.posInit[1] + es(e.pIn1, 0, e.posLerp[1]) + es(e.pIn0, -1.6, .5),
          pZ: e => e.posInit[2] + es(e.pIn1, 0, e.posLerp[2]),
          ...e
        }
      }))))
    }
    getAnimIn() {
      const e = i.timeline({
        paused: !0
      });
      return Xt || e.fromTo(this.vCamWrap1, {
        x: -.08,
        z: .2
      }, {
        x: 0,
        z: 0,
        duration: 2,
        ease: "sine.out"
      }, 0), this.cardsTableau.map(((t, s) => e.add(t.getAnimIn(), .08 * s))), e
    }
    whileEnter() {
      var e, t;
      const {
        zoom0: s,
        zoom1: i
      } = this.propsAnim, {
        progress: o,
        screenUnit: n,
        zoomStart: a
      } = this.props, r = a + (Xt ? 1 : jt(o, .4 * n, n, .9, 1, !0) + es(s, 0, -.1) + es(i, 0, -.2));
      this.props.zoom !== r && (this.props.zoom = r), null == (e = this.cameraWrapper) || e.position.copy(this.vCamWrap0).add(this.vCamWrap1), null == (t = this.meshRef) || t.position.copy(this.vLookAt)
    }
    setProgress(e) {
      const {
        screenUnit: t,
        progress: s
      } = this.props, i = jt(s, 1 - t, 1, 0, 1, !0);
      this.propsAnim.ppRot = es(i, 0, .5 * Math.PI), this.propsAnim.ppAmount = es(i, 0, 1), this.vCamWrap0.y = es(e, Xt ? .06 : .08, Xt ? -.04 : -.06)
    }
    setTime(e) {
      var t, s;
      const i = .46 * (T().state.vh ? T().state.vh : 0),
        o = 1.2 * (T().state.vh ? T().state.vh : 0),
        n = jt(e, i, o, 0, 1, !0);
      null == (t = this.tlIn) || t.progress(n), null == (s = this.tlStory) || s.seek(e)
    }
    render() {
      var e, t, s, i;
      const {
        renderer: o,
        perspCamera: n,
        orthoCamera: a
      } = It.getInstance(), {
        useMask: r
      } = this.options;
      r ? this.props.mode === Pi.MODES.DEFAULT ? (this.props.play && Xt || (this.pass && (o.setRenderTarget(this.pass.fbo.write), o.clear()), o.clearDepth(), o.clearStencil(), bs({
        renderer: o,
        layer: Ot.STENCIL,
        camera: n,
        scene: this.scene
      }), xs({
        renderer: o,
        layer: Ot.BG,
        camera: a,
        scene: this.scene
      }), xs({
        renderer: o,
        layer: Ot.MAIN,
        camera: this.camera,
        scene: this.scene
      }), Ss(o)), o.setRenderTarget(null), null == (e = this.pass) || e.render(!0, {
        clear: !0
      })) : (this.pass && (o.setRenderTarget(this.pass.fbo.write), o.clear()), a.layers.set(Ot.BG), o.render(this.scene, a), this.camera.layers.set(Ot.MAIN), o.render(this.scene, this.camera), o.setRenderTarget(null), null == (t = this.pass) || t.render(!1, {
        clear: !0
      })) : (this.pass && o.setRenderTarget(this.pass.fbo.write), o.clear(), n.layers.set(Ot.MAIN), o.render(this.scene, this.camera), o.setRenderTarget(null), null == (s = this.pass) || s.render(!0)), null == (i = this.secondLayer) || i.render()
    }
    onBeforeDestroy() {
      this.cardsTableau.forEach((e => e.destroy())), this.cardsTableau = null
    }
  };
let Mi = Pi;
t(Mi, "MODES", {
  INTRO: "mode:intro",
  DEFAULT: "mode:default"
}), Dt(Mi, [Ai, E, ae, _(), ts(ss, {
  expanded: !0,
  withoutViews: "cameraSystem secondLayer card",
  withoutKeys: "end",
  keysOptions: {
    progress: {
      min: 0,
      max: 1,
      step: .001
    },
    time: {
      step: 10
    },
    flick: {
      min: 0,
      max: 1,
      step: .001
    }
  }
})]);
class Ri extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      fbo: null
    }), t(this, "props", {
      mapOffset: [0, 0],
      pIn0: 0,
      pIn1: 0
    }), t(this, "propsAnim", {
      rotIn: [0, 0, 0],
      rotMotion: [0, 0, 0]
    })
  }
  async onSetup() {
    const {
      useMask: e
    } = this.options;
    this.pointer = s(), e && await this.setupPass(), await this.setupMesh()
  }
  getAnimIn() {
    return i.timeline({}).fromTo(this.propsAnim.rotIn, {
      1: this.props.rInit || .5 * Math.PI
    }, {
      1: 0,
      duration: Xt ? 3 : 1.5,
      ease: "power2.out"
    }, 0)
  }
  async setupPass() {
    const {
      fbo: e
    } = this.options, {
      mapOffset: t,
      mapScale: s
    } = this.props;
    this.vMapOffset = (new de).fromArray(t);
    const i = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        varying vec2 vUv;    \n        uniform sampler2D tMap;\n        uniform vec2 uMapOffset;\n        uniform float uMapScale;\n        ${is}\n        void main() {\n          vec2 st = vUv;\n          st += uMapOffset;\n          st = scale(st, 1. / uMapScale);\n          vec4 tDiffuse = texture2D(tMap, st);\n          vec3 c = tDiffuse.rgb;\n          float a = tDiffuse.a;\n          if(a < 0.5) discard;\n          gl_FragColor = vec4(c, a);\n        }`,
      uniforms: {
        tMap: {
          value: e ? e.texture : null
        },
        uMapOffset: {
          value: this.vMapOffset
        },
        uMapScale: {
          value: s || 1
        }
      }
    });
    this.pass = new si(It.getRenderer(), {
      shader: i
    })
  }
  async setupMesh() {
    const {
      idPath: e
    } = this.options;
    this.mesh = await (new gs).setup({
      options: {
        addTo: this.object,
        idPath: e
      },
      props: {}
    })
  }
  setV() {
    this.update()
  }
  whileV() {
    this.update(), this.options.useMask && this.renderMask()
  }
  update() {
    const {
      rotIn: e,
      rotMotion: t
    } = this.propsAnim, {
      delta: s
    } = It.getInstance(), {
      width: i,
      height: o
    } = this.props.viewport, {
      x: n,
      y: a
    } = this.pointer;
    !this.pointerStarted && n.value && (this.pointerStarted = !0);
    const r = .25,
      l = this.pointerStarted ? n.value : i / 2,
      p = this.pointerStarted ? a.value : o / 2,
      c = 1 * jt(p, 0, o, -r, r),
      h = 1 * jt(l, 0, i, -r, r);
    t[0] = me.damp(t[0], c, 3, s), t[1] = me.damp(t[1], h, 3, s), this.props.rX = e[0] + t[0], this.props.rY = e[1] + t[1]
  }
  renderMask() {
    const {
      renderer: e,
      perspCamera: t
    } = It.getInstance(), {
      orthoCamera: s,
      scene: i
    } = this.pass, {
      scene: o
    } = this.options;
    e.clearStencil(), e.clearDepth(), this.object.visible = this.props.v, bs({
      renderer: e,
      scene: o,
      layer: Ot.STENCIL,
      camera: t
    }), xs({
      renderer: e,
      scene: i,
      layer: Ot.MAIN,
      camera: s
    }), Ss(e), this.object.visible = !1
  }
}
Dt(Ri, [Et]);
const Ii = ".ktx2";
class Ei extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      id: "factions",
      soundId: "2_thefactions",
      template: ({
        context: e
      }) => re `<section
        class="tableauFactions  homeSection"
        @pointerdown=${e.onPointerIn.bind(e)}
        @pointerup=${e.onPointerOut.bind(e)}
        @pointercancel=${e.onPointerOut.bind(e)}
      >
        <div
          class="tableau__inner"
          data-ui="pin"
        ></div>
      </section>`,
      distOrbitDefault: .014 * Math.PI,
      data: gi("factions"),
      maxLayers: 10,
      posInit: [0, Xt ? .1 : 0, 0],
      cBackground: 7493214
    }), t(this, "props", {
      active: e => e.enter && e.time > .46 * T().state.vh,
      screenUnit: 1,
      zoomStart: Xt ? -.25 : 0,
      pIn: e => jt(e.progress, 0, e.screenUnit, 0, 1, !0),
      pOut: e => jt(e.progress, 1 - e.screenUnit, 1, 0, 1, !0)
    }), t(this, "objects", V.hasMobileFallback ? [] : [{
      id: "energy_left_fx",
      class: Y,
      options: {
        fps: 25,
        spritesheets: {
          id: "sheetLeftHand",
          amount: 2
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 48,
          loop: -1
        }]
      }
    }, {
      id: "energy_right_fx",
      class: Y,
      options: {
        fps: 25,
        spritesheets: {
          id: "sheetRightHand",
          amount: 2
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 48,
          loop: -1
        }]
      }
    }]), t(this, "assets", {
      gltf: `${V.gltfBaseFolder}tableaux-factions/tableaux-factions-${Xt?"mobile":V.textureSize}${V.hasMobileFallback?"-fallback":""}.glb`,
      ...V.hasMobileFallback ? {} : {
        sheetLeftHand0: "/images/tableau/factions/energy-left/energy-left-0.json#json",
        sheetLeftHand1: "/images/tableau/factions/energy-left/energy-left-1.json#json",
        sheetRightHand0: "/images/tableau/factions/energy-right/energy-right-0.json#json",
        sheetRightHand1: "/images/tableau/factions/energy-right/energy-right-1.json#json",
        sheetLeftHandMap0: `${O}tableau/factions/energy-left/energy-left-0${Ii}`,
        sheetLeftHandMap1: `${O}tableau/factions/energy-left/energy-left-1${Ii}`,
        sheetRightHandMap0: `${O}tableau/factions/energy-right/energy-right-0${Ii}`,
        sheetRightHandMap1: `${O}tableau/factions/energy-right/energy-right-1${Ii}`
      }
    })
  }
  onEnter() {
    var e;
    null == (e = x.app) || e.setActiveSection("#factions")
  }
  async onAfterSetup() {
    this.options.useControls && (this.camera.position.z = 1), this.tlStory = this.getAnimStory()
  }
  async setupCards() {
    const e = .1 * Math.PI,
      t = .04 * Math.PI;
    this.card = await (new gs).setup({
      options: {
        addTo: this.scene,
        idPath: Xt ? "mask-mobile" : "mask1"
      },
      props: {
        v: () => this.props.enter,
        pIn: () => this.props.pIn,
        pOut: () => this.props.pOut,
        pMotion: e => jt(e.pIn, .75, 1, 1, 0, !0) + jt(e.pOut, 0, .25, 0, 1, !0),
        pY: e => es(e.pIn, 1.1 * -e.s[1], 0) + es(e.pOut, 0, 1.1 * e.s[1]),
        pZ: e => es(e.pIn, -1.3, 0) + es(e.pOut, 0, -1.3),
        rMotion: [0, 0, 0],
        rX: t => es(t.pIn, e, 0) + es(t.pOut, 0, -e) + t.rMotion[0] * t.pMotion,
        rY: e => e.rMotion[1] * e.pMotion,
        rZ: e => es(e.pIn, t, 0) + es(e.pOut, 0, -t)
      }
    })
  }
  whileEnter() {
    var e, t;
    const {
      zoom0: s,
      zoom1: i
    } = this.propsAnim, {
      progress: o,
      screenUnit: n,
      zoomStart: a
    } = this.props, r = a + (Xt ? 1 : jt(o, .4 * n, n, .9, 1, !0) + es(s, 0, -.1) + es(i, 0, -.2));
    this.props.zoom !== r && (this.props.zoom = r), null == (e = this.cameraWrapper) || e.position.copy(this.vCamWrap0).add(this.vCamWrap1), null == (t = this.meshRef) || t.position.copy(this.vLookAt)
  }
  setProgress(e) {
    const {
      screenUnit: t,
      progress: s
    } = this.props, i = jt(s, 0, t, 0, 1, !0), o = jt(s, 1 - t, 1, 0, 1, !0);
    this.propsAnim.ppRot = es(i, .5 * -Math.PI, .5 * Math.PI) + es(o, 0, .5 * Math.PI), this.propsAnim.ppAmount = es(i, 1, 0) + es(o, 0, 1), this.vCamWrap0.y = es(e, .3, -.3)
  }
  setTime(e) {
    var t;
    null == (t = this.tlStory) || t.seek(e)
  }
  render() {
    var e, t, s;
    const {
      renderer: i,
      perspCamera: o,
      orthoCamera: n
    } = It.getInstance(), {
      useMask: a
    } = this.options;
    a ? (this.props.play && Xt || (this.pass && (i.setRenderTarget(this.pass.fbo.write), i.clear()), i.clearDepth(), i.clearStencil(), bs({
      renderer: i,
      layer: Ot.STENCIL,
      camera: o,
      scene: this.scene
    }), xs({
      renderer: i,
      layer: Ot.BG,
      camera: n,
      scene: this.scene
    }), xs({
      renderer: i,
      layer: Ot.MAIN,
      camera: this.camera,
      scene: this.scene
    }), Ss(i)), i.setRenderTarget(null), null == (e = this.pass) || e.render(!0, {
      clear: !0
    })) : (this.pass && i.setRenderTarget(this.pass.fbo.write), i.clear(), n.layers.set(Ot.BG), i.render(this.scene, n), o.layers.set(Ot.MAIN), i.render(this.scene, this.camera), i.setRenderTarget(null), null == (t = this.pass) || t.render(!0)), null == (s = this.secondLayer) || s.render()
  }
}
Dt(Ei, [Ai, E, ae, _(), ts(ss, {
  expanded: !0,
  withoutViews: "cameraSystem secondLayer card",
  withoutKeys: "end",
  keysOptions: {
    progress: {
      min: 0,
      max: 1,
      step: .001
    },
    time: {
      step: 10
    }
  }
})]);
class Oi extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.MAIN
    }), t(this, "props", {
      enter: !1
    })
  }
  async onSetup() {
    const {
      gltfRef: e,
      layer: t,
      maxLayers: s
    } = this.options, i = this.mesh = e, {
      order: o
    } = i.userData, n = H.instance.assets.mapPNoise;
    n && n.wrapS !== Re && (n.wrapS = Re);
    const a = i.material.map;
    a && (a.encoding = Fe);
    const r = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        varying vec2 vUv;\n        uniform sampler2D tMap;\n        uniform sampler2D tNoise;\n        uniform vec2 uResolution;\n        uniform float uTime;\n        ${_i}\n        ${Js}\n        void main() {\n            vec2 st = vUv;\n            vec2 stNoise = vec2(0.);\n                 stNoise.x += mod(uTime * 0.15, 2.);\n            \n            vec4 tDiffuse = texture2D(tMap, st);\n            vec4 cNoise = texture2D(tNoise, stNoise);\n            \n            float n = cNoise.r;\n            vec3 color = blendAdd(tDiffuse.rgb, tDiffuse.rgb, n * 1.5);\n            float a = tDiffuse.a * 2.;\n            \n            gl_FragColor = vec4(color, a);\n        }`,
      uniforms: {
        tMap: {
          value: a
        },
        tNoise: {
          value: n
        },
        uResolution: {
          value: new de(1024, 1024)
        },
        uTime: {
          value: 0
        }
      },
      transparent: !0,
      type: "GlowMaterial"
    });
    qt(r), X(i, {
      w: a.source.data.width,
      h: a.source.data.height
    }), i.material = r, i.matrixAutoUpdate = !1, i.layers.set(t), i.updateMatrix(), o && (i.material.depthWrite = i.material.depthTest = !1, i.renderOrder = s - o)
  }
  whileEnter(e) {
    this.mesh.material.uTime = e % 10
  }
}
Dt(Oi, [Et]);
const Fi = ".ktx2";
class Di extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      id: "universe",
      soundId: "3_theworld",
      template: ({
        context: e
      }) => re `<section
        class="homeUniverse  homeSection"
        @pointerdown=${e.onPointerIn.bind(e)}
        @pointerup=${e.onPointerOut.bind(e)}
        @pointercancel=${e.onPointerOut.bind(e)}
      >
        <div
          class="tableau__inner"
          data-ui="pin"
        ></div>
      </section>`,
      posInit: [0, 0, 10.3],
      data: gi("universe"),
      maxLayers: 10,
      zoom0Tg: .4,
      zoom1Tg: .3,
      cBackground: 2900795
    }), t(this, "props", {
      active: e => e.enter && e.time > .46 * T().state.vh,
      screenUnit: 1,
      zoomStart: Xt ? -.2 : 0,
      pIn: e => jt(e.progress, 0, e.screenUnit, 0, 1, !0),
      pOut: e => jt(e.progress, 1 - e.screenUnit, 1, 0, 1, !0)
    }), t(this, "objects", [...V.hasMobileFallback ? [] : [{
      id: "beams_fx",
      class: Y,
      options: {
        fps: 30,
        spritesheets: {
          id: "sheetBeam",
          amount: 5
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 59,
          loop: -1
        }]
      }
    }, {
      id: "magic_fx",
      class: Y,
      options: {
        fps: 30,
        spritesheets: {
          id: "sheetMagic",
          amount: 1
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 40,
          loop: -1
        }]
      }
    }, {
      id: "sky_glow_fx",
      class: Oi,
      options: {}
    }]]), t(this, "assets", {
      gltf: `${V.gltfBaseFolder}tableaux-universe/tableaux-universe-${Xt?"mobile":V.textureSize}${V.hasMobileFallback?"-fallback":""}.glb`,
      ...V.hasMobileFallback ? {} : {
        sheetBeam0: "/images/tableau/universe/beam/beam-0.json#json",
        sheetBeam1: "/images/tableau/universe/beam/beam-1.json#json",
        sheetBeam2: "/images/tableau/universe/beam/beam-2.json#json",
        sheetBeam3: "/images/tableau/universe/beam/beam-3.json#json",
        sheetBeam4: "/images/tableau/universe/beam/beam-4.json#json",
        sheetMagic0: "/images/tableau/universe/magic/magic-0.json#json",
        sheetBeamMap0: `${O}tableau/universe/beam/beam-0${Fi}`,
        sheetBeamMap1: `${O}tableau/universe/beam/beam-1${Fi}`,
        sheetBeamMap2: `${O}tableau/universe/beam/beam-2${Fi}`,
        sheetBeamMap3: `${O}tableau/universe/beam/beam-3${Fi}`,
        sheetBeamMap4: `${O}tableau/universe/beam/beam-4${Fi}`,
        sheetMagicMap0: `${O}tableau/universe/magic/magic-0${Fi}`
      }
    })
  }
  onEnter() {
    var e;
    null == (e = x.app) || e.setActiveSection("#universe")
  }
  async onAfterSetup() {
    this.options.useControls && (this.camera.position.z = 10), this.tlStory = this.getAnimStory()
  }
  async setupCards() {
    const e = .1 * Math.PI,
      t = .04 * Math.PI;
    this.card = await (new gs).setup({
      options: {
        addTo: this.scene,
        idPath: Xt ? "mask-mobile" : "mask1"
      },
      props: {
        v: () => this.props.enter,
        pIn: () => this.props.pIn,
        pOut: () => this.props.pOut,
        pMotion: e => jt(e.pIn, .75, 1, 1, 0, !0) + jt(e.pOut, 0, .25, 0, 1, !0),
        pY: e => es(e.pIn, 1.1 * -e.s[1], 0) + es(e.pOut, 0, e.s[1] * (Xt ? 1.4 : 1.2)),
        pZ: e => es(e.pIn, -1.3, 0) + es(e.pOut, 0, -1.3),
        rMotion: [0, 0, 0],
        rX: t => es(t.pIn, e, 0) + es(t.pOut, 0, -e) + t.rMotion[0] * t.pMotion,
        rY: e => e.rMotion[1] * e.pMotion,
        rZ: e => es(e.pIn, t, 0) + es(e.pOut, 0, -t)
      }
    })
  }
  whileEnter() {
    var e, t;
    const {
      zoom0: s,
      zoom1: i
    } = this.propsAnim, {
      progress: o,
      screenUnit: n,
      zoomStart: a
    } = this.props, r = a + (Xt ? 1 : jt(o, .4 * n, n, .9, 1, !0) + es(s, 0, -.1) + es(i, 0, -.2));
    this.props.zoom !== r && (this.props.zoom = r), null == (e = this.cameraWrapper) || e.position.copy(this.vCamWrap0).add(this.vCamWrap1), null == (t = this.meshRef) || t.position.copy(this.vLookAt)
  }
  setProgress(e) {
    const {
      screenUnit: t,
      progress: s
    } = this.props, i = jt(s, 0, t, 0, 1, !0), o = jt(s, 1 - t, 1, 0, 1, !0);
    this.propsAnim.ppRot = es(i, .5 * -Math.PI, .5 * Math.PI) + es(o, 0, .5 * Math.PI), this.propsAnim.ppAmount = es(i, 1, 0) + es(o, 0, 1), this.vCamWrap0.set(0, es(e, .25, -.2), 0)
  }
  setTime(e) {
    var t;
    null == (t = this.tlStory) || t.seek(e)
  }
  render() {
    var e, t, s;
    const {
      renderer: i,
      perspCamera: o,
      orthoCamera: n
    } = It.getInstance(), {
      useMask: a
    } = this.options;
    a ? (this.props.play && Xt || (this.pass && (i.setRenderTarget(this.pass.fbo.write), i.clear()), i.clearDepth(), i.clearStencil(), bs({
      renderer: i,
      layer: Ot.STENCIL,
      camera: o,
      scene: this.scene
    }), xs({
      renderer: i,
      layer: Ot.BG,
      camera: n,
      scene: this.scene
    }), xs({
      renderer: i,
      layer: Ot.MAIN,
      camera: this.camera,
      scene: this.scene
    }), Ss(i)), i.setRenderTarget(null), null == (e = this.pass) || e.render(!0, {
      clear: !0
    })) : (this.pass && i.setRenderTarget(this.pass.fbo.write), i.clear(), n.layers.set(Ot.BG), i.render(this.scene, n), o.layers.set(Ot.MAIN), i.render(this.scene, this.camera), i.setRenderTarget(null), null == (t = this.pass) || t.render(!0)), null == (s = this.secondLayer) || s.render()
  }
}
Dt(Di, [Ai, E, ae, _(), ts(ss, {
  expanded: !0,
  withoutViews: "cameraSystem secondLayer card",
  withoutKeys: "end",
  keysOptions: {
    progress: {
      min: 0,
      max: 1,
      step: .001
    },
    time: {
      step: 10
    }
  }
})]);
const Bi = ({
  options: e
}) => re ` <section class="homeLaunch homeLaunch--${e.state} homeSection">
    <div class="homeLaunch__inner sectionInner">
      <div class="homeLaunch__overflow">
        <div
          data-ui="grid"
          class="homeLaunch__grid"
        >
          ${"launch"==e.state?re`${Xt?re`<div
                      class="homeLaunch__gridItem"
                      data-ui="tl"
                    >
                      <div class="homeLaunch__date">
                        <h1
                          class="js-bigText  date"
                          data-ui="date0"
                        >
                          00
                        </h1>
                      </div>
                      ${B("bottom","homeLaunch__line")}
                    </div>
                    <div
                      class="homeLaunch__gridItem"
                      data-ui="br"
                    >
                      <div class="homeLaunch__date">
                        <h1
                          class="js-bigText  date"
                          data-ui="date1"
                        >
                          00
                        </h1>
                      </div>
                    </div>
                    <div
                      class="homeLaunch__gridItem"
                      data-ui="bl"
                    >
                      ${B("top","homeLaunch__line")}
                      <div
                        class="homeLaunch__launchBtn"
                        data-ui="launch-btn"
                      >
                        <p
                          data-ui="body"
                          class="type-body1"
                        >
                          ${e.copy.Home_Launch_Description}
                        </p>
                        <div
                          class="homeLaunch__btnWrapper"
                          data-ui="btnWrapper"
                        ></div>
                      </div>
                    </div>`:re`<div
                      class="homeLaunch__gridItem"
                      data-ui="tl"
                    >
                      <div class="homeLaunch__date">
                        <h1
                          class="js-bigText  date"
                          data-ui="date0"
                        >
                          00
                        </h1>
                      </div>
                      ${B("bottom","homeLaunch__line")}
                      ${B("right","homeLaunch__line")}
                    </div>
                    <div
                      class="homeLaunch__gridItem"
                      data-ui="tr"
                    >
                      ${B("bottom","homeLaunch__line")}
                    </div>
                    <div
                      class="homeLaunch__gridItem"
                      data-ui="bl"
                    >
                      ${B("right","homeLaunch__line")}
                      <div
                        class="homeLaunch__launchBtn"
                        data-ui="launch-btn"
                      >
                        <p
                          data-ui="body"
                          class="type-body1"
                        >
                          ${e.copy.Home_Launch_Description}
                        </p>
                        <div
                          class="homeLaunch__btnWrapper"
                          data-ui="btnWrapper"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="homeLaunch__gridItem"
                      data-ui="br"
                    >
                      <div class="homeLaunch__date">
                        <h1
                          class="js-bigText  date"
                          data-ui="date1"
                        >
                          00
                        </h1>
                      </div>
                    </div>`}`:re` <div
                  class="homeLaunch__gridItem"
                  data-ui="tl"
                >
                  <div class="homeLaunch__title">
                    <h1 class="js-bigText  title">KEEPERS</h1>
                  </div>
                  ${B("bottom","homeLaunch__line")}
                </div>
                <div
                  class="homeLaunch__gridItem"
                  data-ui="bl"
                >
                  ${Xt?B("top","homeLaunch__line"):null}
                  <div
                    class="homeLaunch__launchBtn"
                    data-ui="launch-btn"
                  >
                    <p
                      data-ui="body"
                      class="type-body1"
                    >
                      ${e.copy.Home_Launch_Description}
                    </p>
                    <div
                      class="homeLaunch__btnWrapper"
                      data-ui="btnWrapper"
                    ></div>
                  </div>
                </div>`}
        </div>
      </div>
    </div>
  </section>`;
class Ui extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Bi,
      id: "launch",
      state: "buy"
    }), t(this, "props", {
      viewport: () => T().state.viewport,
      count: !1,
      time: 0
    }), t(this, "propsAnim", {
      counterPr: 0
    }), t(this, "assets", {
      mapCardKeep: `${O}launch/card-keep.ktx2`,
      mapCardFactions: `${O}launch/card-factions.ktx2`,
      mapCardUniverse: `${O}launch/card-universe.ktx2`
    }), t(this, "scrollTo", (e => {
      const t = document.querySelector(e),
        s = t ? document.documentElement.scrollTop + t.getBoundingClientRect().top : 0,
        o = 3e-4 * Math.abs(s - document.documentElement.scrollTop);
      i.to(window, {
        duration: o,
        scrollTo: s,
        ease: "power2.out"
      })
    })), t(this, "handleCounterUpdate", (() => {
      const {
        copy: e
      } = this.options, t = Qt(Math.round(es(this.propsAnim.counterPr, 0, e.Launch_Day))), s = Qt(Math.round(es(this.propsAnim.counterPr, 0, e.Launch_Month)));
      "launch" == this.options.state && (this.ui.date0.innerText = t, this.ui.date1.innerText = s)
    }))
  }
  async onSetup() {
    this.pinEl = this.ui.pin, this.bigText = this.el.querySelectorAll(".js-bigText"), this.scene = new ye, await this.setupUI(), await this.setupCards()
  }
  async setupCards() {
    const {
      uiContainer: e
    } = x, {
      copy: t
    } = this.options;
    this.cardsContainerWrap = new fe, this.cardsContainer = new pe, this.cardsContainer.position.x = -.08, this.cardsContainer.scale.setScalar(Xt ? .9 : 1.3), this.scene.add(this.cardsContainerWrap), this.cardsContainerWrap.add(this.cardsContainer);
    const s = [{
      pos: [0, .08, 0],
      sObject: .4,
      id: "universe",
      idPath: "maskLaunch0",
      idMap: "mapCardUniverse",
      idTableau: t.Link_Caption_Universe
    }, {
      pos: [.04, -.19, 0],
      rInit: .6 * Math.PI,
      sObject: .32,
      id: "factions",
      idPath: "maskLaunch2",
      idMap: "mapCardFactions",
      idTableau: t.Link_Caption_Factions
    }, {
      pos: [.29, .02, -0],
      sObject: .36,
      id: "keep",
      idPath: "maskLaunch1",
      idMap: "mapCardKeep",
      idTableau: t.Link_Caption_Keep
    }];
    this.cardsWrapper = await (new ji).setup({
      options: {
        appendTo: e
      },
      props: {
        active: () => this.props.enter
      }
    }), this.cards = await Promise.all(s.map((async (e, t) => await (new Ni).setup({
      options: {
        i: t,
        id: e.id,
        addTo: this.cardsContainer,
        appendTo: this.cardsWrapper.el,
        idPath: e.idPath,
        idTableau: e.idTableau,
        map: this.assets[e.idMap],
        cbClick: () => this.scrollTo(`#${e.id}`)
      },
      props: {
        viewport: () => this.props.viewport,
        v: () => this.props.enter,
        ...e
      }
    }))))
  }
  async setupUI() {
    const {
      state: e,
      copy: t
    } = this.options;
    this.lines = this.el.querySelectorAll(".js-line"), this.caption = await (new D).setup({
      options: {
        insertBefore: this.ui["launch-btn"],
        text: t.Home_Launch_Console_Text
      }
    }), this.body = await (new I).setup({
      options: {
        el: this.ui.body
      }
    })
  }
  setupTimeline() {
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill());
    const {
      state: e
    } = this.options, t = "launch" === e, {
      start: s,
      end: o
    } = this.props, {
      vh: n,
      vh100: a
    } = T().state, {
      perspCamera: r
    } = It.getInstance(), [l, p] = Nt(0, r), c = this.cards.map((e => e.propsAnim)), h = (a / 2 - n / 2) / a * p, d = o - n, u = o - s, m = s + 0, f = n * (Xt ? 1.5 : 1), v = m + .7 * n, g = this.tl = i.timeline();
    g.fromTo(this.bigText, {
      y: t ? n : .15 * n
    }, {
      y: 0,
      duration: f,
      ease: "power3.out"
    }, m), g.fromTo(this.lines, {
      alpha: 0
    }, {
      alpha: 1,
      duration: .3 * n
    }, m + .7 * n).to(this.lines, {
      alpha: 0,
      duration: .2 * n
    }, d), Xt ? this.cardsContainerWrap.position.y = h : g.fromTo(this.cardsContainerWrap.position, {
      y: -.15 + h
    }, {
      y: .05 + h,
      duration: u,
      ease: "none"
    }, s), c.forEach(((e, t) => {
      const s = 20 * t;
      g.fromTo(e.rotIn, {
        1: .6 * Math.PI
      }, {
        1: 0,
        duration: .5 * n,
        ease: "power3.out"
      }, m + .3 * n + s)
    })), g.fromTo(this.cardsContainer.position, {
      y: -1
    }, {
      y: 0,
      duration: n,
      ease: "power3.out"
    }, m), g.add((() => {
      var e, t, s;
      null == (e = this.caption) || e.hide(), null == (t = this.button) || t.hide(), null == (s = this.body) || s.hide({
        speed: .5
      }), this.props.count = !1
    }), v - 1).add((() => {
      var e, t, s;
      null == (e = this.caption) || e.show(), null == (t = this.button) || t.show(), null == (s = this.body) || s.show({
        speed: .5,
        delay: .1
      }), this.props.count = !0
    }), v).add((() => {
      this.cards.forEach((e => e.props.active = !1))
    }), s + .8 * n - 1).add((() => {
      this.cards.forEach((e => e.props.active = !0))
    }), s + .8 * n).add((() => {
      var e;
      null == (e = this.caption) || e.show(), this.cards.forEach((e => e.props.active = !0))
    }), d - 1).add((() => {
      var e;
      null == (e = this.caption) || e.hide(), this.cards.forEach((e => e.props.active = !1))
    }), d).to(this.ui.grid, {
      y: -n,
      duration: n,
      ease: "none"
    }, d);
    const w = d - .2 * n;
    c.forEach(((e, t) => {
      const s = 10 * t;
      g.to(e.rotIn, {
        1: -.65 * Math.PI,
        duration: .5 * n,
        ease: "power2.in"
      }, w + s)
    })), g.to(this.cardsContainer.position, {
      y: .3,
      duration: .5 * n,
      ease: "power2.in"
    }, w), g.seek(.001), this.cards.forEach((e => e.update())), this.options.tl.add(g, 0)
  }
  setCount(e) {
    i.killTweensOf(this.propsAnim, "counterPr"), i.to(this.propsAnim, {
      counterPr: 0 | e,
      duration: .6,
      onUpdate: this.handleCounterUpdate
    })
  }
  setTime(e) {
    var t;
    this.options.debug && (null == (t = this.tl) || t.seek(e, !1))
  }
  resize(e) {
    const {
      height: t
    } = e;
    this.options.debug && (this.props.start = this.st.start + t, this.props.end = this.st.end + 3 * t), this.setupTimeline(), this.cards.forEach((t => t.resize(e)))
  }
  whileEnter() {
    this.render()
  }
  render() {
    const {
      renderer: e,
      perspCamera: t
    } = It.getInstance();
    t.layers.set(Ot.MAIN), e.clearDepth(), e.render(this.scene, t)
  }
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill(), this.cards.forEach((e => e.destroy())), this.cards = null, this.scene.traverse((e => {
      var t, s, i, o, n, a;
      null == (o = null == (i = null == (s = null == (t = e.material) ? void 0 : t.uniforms) ? void 0 : s.tMap) ? void 0 : i.value) || o.dispose(), null == (n = e.geometry) || n.dispose(), null == (a = e.material) || a.dispose()
    }));
    for (const t in this.assets) {
      const e = this.assets[t];
      (e instanceof Ee || e instanceof Oe) && e.dispose()
    }
  }
}
Dt(Ui, [E, ae, _(), ts(ss, {
  expanded: !0,
  withoutViews: "cardsWrapper",
  withoutKeys: "end",
  keysOptions: {
    progress: {
      min: 0,
      max: 1,
      step: .001
    },
    time: {
      step: 10
    }
  }
})]);
class ji extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        props: e
      }) => re `<div
        class="launchCards"
        ?visible=${e.active}
      ></div>`
    }), t(this, "props", {})
  }
  async onSetup() {}
}
Dt(ji, [ae]);
class Ni extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: ({
        context: e,
        options: t
      }) => re `<div
        class="singleCard singleCard--${t.id}"
        @click=${e.onClick}
        @pointerover=${e.onPointerOver}
        @pointerout=${e.onPointerOut}
        ?active=${this.props.active}
      ></div>`
    }), t(this, "props", {
      v: !1,
      active: !1,
      mapOffset: [0, 0]
    }), t(this, "propsAnim", {
      rotIn: [0, 0, 0],
      rotMotion: [0, 0, 0],
      sMotion: 0,
      purple: 0
    }), t(this, "onClick", (() => {
      const {
        cbClick: e
      } = this.options;
      e && e()
    })), t(this, "onPointerOver", (() => {
      i.killTweensOf(this.propsAnim, "posMotion"), i.to(this.propsAnim, {
        sMotion: .02,
        duration: 1,
        ease: "power2.out"
      }), i.to(this.propsAnim, {
        purple: .35,
        duration: .6,
        ease: "power2.out",
        delay: .1
      })
    })), t(this, "onPointerOut", (() => {
      i.killTweensOf(this.propsAnim, "sMotion"), i.to(this.propsAnim, {
        sMotion: 0,
        duration: 1,
        ease: "power2.out"
      }), i.to(this.propsAnim, {
        purple: 0,
        duration: .7,
        ease: "power2.out"
      })
    }))
  }
  async onSetup() {
    this.pointer = s(), this.vOffset = new Pe, this.vMapPos = new de, this.vMapSize = new de, this.vResolution = new de, this.object = new fe, this.object.visible = !1, this.options.addTo.add(this.object), await this.setupMesh(), Xt || await this.setupCaption()
  }
  async setupCaption() {
    const {
      idTableau: e
    } = this.options;
    this.caption = await (new D).setup({
      options: {
        appendTo: this.el,
        text: e,
        textClass: "captionCard"
      }
    })
  }
  async setupMesh() {
    const {
      map: e,
      idPath: t
    } = this.options, {
      mapOffset: s
    } = this.props;
    this.vMapOffset = (new de).fromArray(s);
    const i = this.shader = new Le({
      vertexShader: Wt,
      fragmentShader: `\n        varying vec2 vUv;    \n        uniform sampler2D tMap;\n        uniform vec2 uResolution;\n        uniform vec2 uResMap;\n        uniform vec2 uMapPos;\n        uniform vec2 uMapSize;\n        uniform float uPurple;\n        ${ps}\n        ${cs}\n        ${ti}\n        ${Js}\n        void main() {\n          vec2 st = st0 + 0.5;\n          st += uMapPos * rx;\n          st = UVResize(st, vec2(1., 1.), uResMap, vec2(size(uMapSize.x)) * vec2(-1., 1.), 0);\n          \n          vec4 tDiffuse = texture2D(tMap, st);\n          vec3 c = tDiffuse.rgb;\n          if(uPurple > 0.) c = blendAdd(c, vec3(0.75, 0.00, 1.00), uPurple);\n          float a = tDiffuse.a;\n          gl_FragColor = vec4(c, a);\n        }`,
      uniforms: {
        tMap: {
          value: e
        },
        uResolution: {
          value: this.vResolution
        },
        uResMap: {
          value: [e.image.width, e.image.height]
        },
        uMapOffset: {
          value: this.vMapOffset
        },
        uMapPos: {
          value: this.vMapPos
        },
        uMapSize: {
          value: this.vMapSize
        },
        uPurple: {
          value: 0
        }
      }
    });
    this.card = await (new gs).setup({
      options: {
        addTo: this.object,
        layer: Ot.MAIN,
        idPath: t,
        shader: i
      },
      props: {}
    })
  }
  setActive(e, {
    firstTrigger: t
  }) {
    var s, i;
    t || (e ? null == (s = this.caption) || s.show() : null == (i = this.caption) || i.hide())
  }
  whileV() {
    this.update()
  }
  update() {
    this.updateLayout(), this.updateMotion(), this.updateFx()
  }
  setV(e) {
    this.props && (this.object.visible = !!e)
  }
  resize({
    width: e,
    height100vh: t,
    dpr: s
  }) {
    T().state;
    const {
      perspCamera: i
    } = It.getInstance(), {
      sObject: o
    } = this.props, n = this.card.vSize, a = Math.min(n.x / n.y, n.y / n.x), r = Math.min(t / 800, e / 800);
    this.object.scale.setScalar(o);
    const [l, p] = Nt(this.props.pos[2], i);
    this.props.w = e * (1 / l * (Xt ? .4 : .5)) * (n.x < n.y ? a : 1), this.props.h = t * (1 / p * (Xt ? .4 : .5)) * (n.y < n.x ? a : 1), this.vResolution.set(e, t).multiplyScalar(s), this.vMapSize.set((Xt ? 800 : 600) * r, 1)
  }
  updateLayout() {
    const {
      width: e,
      height100vh: t,
      dpr: s
    } = this.props.viewport, {
      perspCamera: i
    } = It.getInstance(), [o, n] = Ht(this.object, i, {
      width: e,
      height: t
    });
    this.props.pX = o, this.props.pY = -n, this.vMapPos.set(o, -n).multiplyScalar(s)
  }
  updateMotion() {
    const {
      rotIn: e,
      rotMotion: t,
      sMotion: s
    } = this.propsAnim, {
      delta: i
    } = It.getInstance(), {
      width: o,
      height: n
    } = this.props.viewport, {
      x: a,
      y: r
    } = this.pointer, {
      pos: l,
      sObject: p
    } = this.props;
    !this.pointerStarted && a.value && (this.pointerStarted = !0);
    const c = .3,
      h = this.pointerStarted ? a.value : o / 2,
      d = this.pointerStarted ? r.value : n / 2,
      u = 1 * jt(d, 0, n, -c, c),
      m = 1 * jt(h, 0, o, -c, c);
    t[0] = me.damp(t[0], u, 3, i), t[1] = me.damp(t[1], m, 3, i), this.object.position.fromArray(l), this.object.scale.setScalar(p + s), this.object.rotation.set(e[0] + t[0], e[1] + t[1], 0)
  }
  updateFx() {
    const {
      purple: e
    } = this.propsAnim;
    this.shader.uniforms.uPurple.value = e
  }
}

function zi(e, t) {
  if (t === De) return e;
  if (t === Be || t === Ue) {
    let s = e.getIndex();
    if (null === s) {
      const t = [],
        i = e.getAttribute("position");
      if (void 0 === i) return e;
      for (let e = 0; e < i.count; e++) t.push(e);
      e.setIndex(t), s = e.getIndex()
    }
    const i = s.count - 2,
      o = [];
    if (t === Be)
      for (let e = 1; e <= i; e++) o.push(s.getX(0)), o.push(s.getX(e)), o.push(s.getX(e + 1));
    else
      for (let e = 0; e < i; e++) e % 2 == 0 ? (o.push(s.getX(e)), o.push(s.getX(e + 1)), o.push(s.getX(e + 2))) : (o.push(s.getX(e + 2)), o.push(s.getX(e + 1)), o.push(s.getX(e)));
    o.length;
    const n = e.clone();
    return n.setIndex(o), n.clearGroups(), n
  }
  return e
}
Dt(Ni, [ae, ms]);

function $i() {
  let e = {};
  return {
    get: function (t) {
      return e[t]
    },
    add: function (t, s) {
      e[t] = s
    },
    remove: function (t) {
      delete e[t]
    },
    removeAll: function () {
      e = {}
    }
  }
}
const Hi = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Gi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_LIGHTS_PUNCTUAL, this.cache = {
      refs: {},
      uses: {}
    }
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const i = t[s];
      i.extensions && i.extensions[this.name] && void 0 !== i.extensions[this.name].light && e._addNodeRef(this.cache, i.extensions[this.name].light)
    }
  }
  _loadLight(e) {
    const t = this.parser,
      s = "light:" + e;
    let i = t.cache.get(s);
    if (i) return i;
    const o = t.json,
      n = ((o.extensions && o.extensions[this.name] || {}).lights || [])[e];
    let a;
    const r = new Me(16777215);
    void 0 !== n.color && r.fromArray(n.color);
    const l = void 0 !== n.range ? n.range : 0;
    switch (n.type) {
      case "directional":
        a = new Ge(r), a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      case "point":
        a = new He(r), a.distance = l;
        break;
      case "spot":
        a = new $e(r), a.distance = l, n.spot = n.spot || {}, n.spot.innerConeAngle = void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0, n.spot.outerConeAngle = void 0 !== n.spot.outerConeAngle ? n.spot.outerConeAngle : Math.PI / 4, a.angle = n.spot.outerConeAngle, a.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + n.type)
    }
    return a.position.set(0, 0, 0), a.decay = 2, Lo(a, n), void 0 !== n.intensity && (a.intensity = n.intensity), a.name = t.createUniqueName(n.name || "light_" + e), i = Promise.resolve(a), t.cache.add(s, i), i
  }
  getDependency(e, t) {
    if ("light" === e) return this._loadLight(t)
  }
  createNodeAttachment(e) {
    const t = this,
      s = this.parser,
      i = s.json.nodes[e],
      o = (i.extensions && i.extensions[this.name] || {}).light;
    return void 0 === o ? null : this._loadLight(o).then((function (e) {
      return s._getNodeRef(t.cache, o, e)
    }))
  }
}
class Xi {
  constructor() {
    this.name = Hi.KHR_MATERIALS_UNLIT
  }
  getMaterialType() {
    return ce
  }
  extendParams(e, t, s) {
    const i = [];
    e.color = new Me(1, 1, 1), e.opacity = 1;
    const o = t.pbrMetallicRoughness;
    if (o) {
      if (Array.isArray(o.baseColorFactor)) {
        const t = o.baseColorFactor;
        e.color.fromArray(t), e.opacity = t[3]
      }
      void 0 !== o.baseColorTexture && i.push(s.assignTexture(e, "map", o.baseColorTexture, Xe))
    }
    return Promise.all(i)
  }
}
class Vi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_EMISSIVE_STRENGTH
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return void 0 !== i && (t.emissiveIntensity = i), Promise.resolve()
  }
}
class Yi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_CLEARCOAT
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser,
      i = s.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const o = [],
      n = i.extensions[this.name];
    if (void 0 !== n.clearcoatFactor && (t.clearcoat = n.clearcoatFactor), void 0 !== n.clearcoatTexture && o.push(s.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), void 0 !== n.clearcoatRoughnessFactor && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), void 0 !== n.clearcoatRoughnessTexture && o.push(s.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), void 0 !== n.clearcoatNormalTexture && (o.push(s.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), void 0 !== n.clearcoatNormalTexture.scale)) {
      const e = n.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new de(e, e)
    }
    return Promise.all(o)
  }
}
class Ki {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_IRIDESCENCE
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser,
      i = s.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const o = [],
      n = i.extensions[this.name];
    return void 0 !== n.iridescenceFactor && (t.iridescence = n.iridescenceFactor), void 0 !== n.iridescenceTexture && o.push(s.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), void 0 !== n.iridescenceIor && (t.iridescenceIOR = n.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== n.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), void 0 !== n.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), void 0 !== n.iridescenceThicknessTexture && o.push(s.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(o)
  }
}
class Wi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_SHEEN
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser,
      i = s.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const o = [];
    t.sheenColor = new Me(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const n = i.extensions[this.name];
    return void 0 !== n.sheenColorFactor && t.sheenColor.fromArray(n.sheenColorFactor), void 0 !== n.sheenRoughnessFactor && (t.sheenRoughness = n.sheenRoughnessFactor), void 0 !== n.sheenColorTexture && o.push(s.assignTexture(t, "sheenColorMap", n.sheenColorTexture, Xe)), void 0 !== n.sheenRoughnessTexture && o.push(s.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(o)
  }
}
class qi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_TRANSMISSION
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser,
      i = s.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const o = [],
      n = i.extensions[this.name];
    return void 0 !== n.transmissionFactor && (t.transmission = n.transmissionFactor), void 0 !== n.transmissionTexture && o.push(s.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(o)
  }
}
class Zi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_VOLUME
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser,
      i = s.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const o = [],
      n = i.extensions[this.name];
    t.thickness = void 0 !== n.thicknessFactor ? n.thicknessFactor : 0, void 0 !== n.thicknessTexture && o.push(s.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || 1 / 0;
    const a = n.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Me(a[0], a[1], a[2]), Promise.all(o)
  }
}
class Qi {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_IOR
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = void 0 !== i.ior ? i.ior : 1.5, Promise.resolve()
  }
}
class Ji {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_MATERIALS_SPECULAR
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Ve : null
  }
  extendMaterialParams(e, t) {
    const s = this.parser,
      i = s.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const o = [],
      n = i.extensions[this.name];
    t.specularIntensity = void 0 !== n.specularFactor ? n.specularFactor : 1, void 0 !== n.specularTexture && o.push(s.assignTexture(t, "specularIntensityMap", n.specularTexture));
    const a = n.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Me(a[0], a[1], a[2]), void 0 !== n.specularColorTexture && o.push(s.assignTexture(t, "specularColorMap", n.specularColorTexture, Xe)), Promise.all(o)
  }
}
class eo {
  constructor(e) {
    this.parser = e, this.name = Hi.KHR_TEXTURE_BASISU
  }
  loadTexture(e) {
    const t = this.parser,
      s = t.json,
      i = s.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const o = i.extensions[this.name],
      n = t.options.ktx2Loader;
    if (!n) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null
    }
    return t.loadTextureImage(e, o.source, n)
  }
}
class to {
  constructor(e) {
    this.parser = e, this.name = Hi.EXT_TEXTURE_WEBP, this.isSupported = null
  }
  loadTexture(e) {
    const t = this.name,
      s = this.parser,
      i = s.json,
      o = i.textures[e];
    if (!o.extensions || !o.extensions[t]) return null;
    const n = o.extensions[t],
      a = i.images[n.source];
    let r = s.textureLoader;
    if (a.uri) {
      const e = s.options.manager.getHandler(a.uri);
      null !== e && (r = e)
    }
    return this.detectSupport().then((function (o) {
      if (o) return s.loadTextureImage(e, n.source, r);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return s.loadTexture(e)
    }))
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise((function (e) {
      const t = new Image;
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function () {
        e(1 === t.height)
      }
    }))), this.isSupported
  }
}
class so {
  constructor(e) {
    this.parser = e, this.name = Hi.EXT_TEXTURE_AVIF, this.isSupported = null
  }
  loadTexture(e) {
    const t = this.name,
      s = this.parser,
      i = s.json,
      o = i.textures[e];
    if (!o.extensions || !o.extensions[t]) return null;
    const n = o.extensions[t],
      a = i.images[n.source];
    let r = s.textureLoader;
    if (a.uri) {
      const e = s.options.manager.getHandler(a.uri);
      null !== e && (r = e)
    }
    return this.detectSupport().then((function (o) {
      if (o) return s.loadTextureImage(e, n.source, r);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return s.loadTexture(e)
    }))
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise((function (e) {
      const t = new Image;
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function () {
        e(1 === t.height)
      }
    }))), this.isSupported
  }
}
class io {
  constructor(e) {
    this.name = Hi.EXT_MESHOPT_COMPRESSION, this.parser = e
  }
  loadBufferView(e) {
    const t = this.parser.json,
      s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const e = s.extensions[this.name],
        i = this.parser.getDependency("buffer", e.buffer),
        o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null
      }
      return i.then((function (t) {
        const s = e.byteOffset || 0,
          i = e.byteLength || 0,
          n = e.count,
          a = e.byteStride,
          r = new Uint8Array(t, s, i);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(n, a, r, e.mode, e.filter).then((function (e) {
          return e.buffer
        })) : o.ready.then((function () {
          const t = new ArrayBuffer(n * a);
          return o.decodeGltfBuffer(new Uint8Array(t), n, a, r, e.mode, e.filter), t
        }))
      }))
    }
    return null
  }
}
class oo {
  constructor(e) {
    this.name = Hi.EXT_MESH_GPU_INSTANCING, this.parser = e
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || void 0 === s.mesh) return null;
    const i = t.meshes[s.mesh];
    for (const r of i.primitives)
      if (r.mode !== vo.TRIANGLES && r.mode !== vo.TRIANGLE_STRIP && r.mode !== vo.TRIANGLE_FAN && void 0 !== r.mode) return null;
    const o = s.extensions[this.name].attributes,
      n = [],
      a = {};
    for (const r in o) n.push(this.parser.getDependency("accessor", o[r]).then((e => (a[r] = e, a[r]))));
    return n.length < 1 ? null : (n.push(this.parser.createNodeMesh(e)), Promise.all(n).then((e => {
      const t = e.pop(),
        s = t.isGroup ? t.children : [t],
        i = e[0].count,
        o = [];
      for (const n of s) {
        const e = new Ye,
          t = new Pe,
          s = new vt,
          r = new Pe(1, 1, 1),
          l = new Ke(n.geometry, n.material, i);
        for (let o = 0; o < i; o++) a.TRANSLATION && t.fromBufferAttribute(a.TRANSLATION, o), a.ROTATION && s.fromBufferAttribute(a.ROTATION, o), a.SCALE && r.fromBufferAttribute(a.SCALE, o), l.setMatrixAt(o, e.compose(t, s, r));
        for (const i in a) "TRANSLATION" !== i && "ROTATION" !== i && "SCALE" !== i && n.geometry.setAttribute(i, a[i]);
        fe.prototype.copy.call(l, n), this.parser.assignFinalMaterial(l), o.push(l)
      }
      return t.isGroup ? (t.clear(), t.add(...o), t) : o[0]
    })))
  }
}
const no = "glTF",
  ao = 1313821514,
  ro = 5130562;
class lo {
  constructor(e) {
    this.name = Hi.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, 12),
      s = new TextDecoder;
    if (this.header = {
        magic: s.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0)
      }, this.header.magic !== no) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - 12,
      o = new DataView(e, 12);
    let n = 0;
    for (; n < i;) {
      const t = o.getUint32(n, !0);
      n += 4;
      const i = o.getUint32(n, !0);
      if (n += 4, i === ao) {
        const i = new Uint8Array(e, 12 + n, t);
        this.content = s.decode(i)
      } else if (i === ro) {
        const s = 12 + n;
        this.body = e.slice(s, s + t)
      }
      n += t
    }
    if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
  }
}
class po {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Hi.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
  }
  decodePrimitive(e, t) {
    const s = this.json,
      i = this.dracoLoader,
      o = e.extensions[this.name].bufferView,
      n = e.extensions[this.name].attributes,
      a = {},
      r = {},
      l = {};
    for (const p in n) {
      const e = xo[p] || p.toLowerCase();
      a[e] = n[p]
    }
    for (const p in e.attributes) {
      const t = xo[p] || p.toLowerCase();
      if (void 0 !== n[p]) {
        const i = s.accessors[e.attributes[p]],
          o = go[i.componentType];
        l[t] = o.name, r[t] = !0 === i.normalized
      }
    }
    return t.getDependency("bufferView", o).then((function (e) {
      return new Promise((function (t) {
        i.decodeDracoFile(e, (function (e) {
          for (const t in e.attributes) {
            const s = e.attributes[t],
              i = r[t];
            void 0 !== i && (s.normalized = i)
          }
          t(e)
        }), a, l)
      }))
    }))
  }
}
class co {
  constructor() {
    this.name = Hi.KHR_TEXTURE_TRANSFORM
  }
  extendTexture(e, t) {
    return void 0 !== t.texCoord && t.texCoord !== e.channel || void 0 !== t.offset || void 0 !== t.rotation || void 0 !== t.scale ? (e = e.clone(), void 0 !== t.texCoord && (e.channel = t.texCoord), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0, e) : e
  }
}
class ho {
  constructor() {
    this.name = Hi.KHR_MESH_QUANTIZATION
  }
}
class uo extends Lt {
  constructor(e, t, s, i) {
    super(e, t, s, i)
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      s = this.sampleValues,
      i = this.valueSize,
      o = e * i * 3 + i;
    for (let n = 0; n !== i; n++) t[n] = s[o + n];
    return t
  }
  interpolate_(e, t, s, i) {
    const o = this.resultBuffer,
      n = this.sampleValues,
      a = this.valueSize,
      r = 2 * a,
      l = 3 * a,
      p = i - t,
      c = (s - t) / p,
      h = c * c,
      d = h * c,
      u = e * l,
      m = u - l,
      f = -2 * d + 3 * h,
      v = d - h,
      g = 1 - f,
      w = v - h + c;
    for (let y = 0; y !== a; y++) {
      const e = n[m + y + a],
        t = n[m + y + r] * p,
        s = n[u + y + a],
        i = n[u + y] * p;
      o[y] = g * e + w * t + f * s + v * i
    }
    return o
  }
}
const mo = new vt;
class fo extends uo {
  interpolate_(e, t, s, i) {
    const o = super.interpolate_(e, t, s, i);
    return mo.fromArray(o).normalize().toArray(o), o
  }
}
const vo = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
  },
  go = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  },
  wo = {
    9728: Ie,
    9729: ke,
    9984: gt,
    9985: wt,
    9986: yt,
    9987: Je
  },
  yo = {
    33071: Ce,
    33648: bt,
    10497: Re
  },
  bo = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  },
  xo = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  },
  So = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  },
  To = {
    CUBICSPLINE: void 0,
    LINEAR: ut,
    STEP: xt
  },
  Ao = "OPAQUE",
  _o = "MASK",
  ko = "BLEND";

function Co(e, t, s) {
  for (const i in s.extensions) void 0 === e[i] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = s.extensions[i])
}

function Lo(e, t) {
  void 0 !== t.extras && "object" == typeof t.extras && Object.assign(e.userData, t.extras)
}

function Po(e, t) {
  if (e.updateMorphTargets(), void 0 !== t.weights)
    for (let s = 0, i = t.weights.length; s < i; s++) e.morphTargetInfluences[s] = t.weights[s];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const s = t.extras.targetNames;
    if (e.morphTargetInfluences.length === s.length) {
      e.morphTargetDictionary = {};
      for (let t = 0, i = s.length; t < i; t++) e.morphTargetDictionary[s[t]] = t
    }
  }
}

function Mo(e) {
  const t = e.extensions && e.extensions[Hi.KHR_DRACO_MESH_COMPRESSION];
  let s;
  return s = t ? "draco:" + t.bufferView + ":" + t.indices + ":" + Ro(t.attributes) : e.indices + ":" + Ro(e.attributes) + ":" + e.mode, s
}

function Ro(e) {
  let t = "";
  const s = Object.keys(e).sort();
  for (let i = 0, o = s.length; i < o; i++) t += s[i] + ":" + e[s[i]] + ";";
  return t
}

function Io(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
  }
}
const Eo = new Ye;
class Oo {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new $i, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
      refs: {},
      uses: {}
    }, this.cameraCache = {
      refs: {},
      uses: {}
    }, this.lightCache = {
      refs: {},
      uses: {}
    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1,
      i = !1,
      o = -1;
    "undefined" != typeof navigator && (s = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent), i = navigator.userAgent.indexOf("Firefox") > -1, o = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), "undefined" == typeof createImageBitmap || s || i && o < 98 ? this.textureLoader = new We(this.options.manager) : this.textureLoader = new qe(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ze(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
  }
  setExtensions(e) {
    this.extensions = e
  }
  setPlugins(e) {
    this.plugins = e
  }
  parse(e, t) {
    const s = this,
      i = this.json,
      o = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll((function (e) {
      return e._markDefs && e._markDefs()
    })), Promise.all(this._invokeAll((function (e) {
      return e.beforeRoot && e.beforeRoot()
    }))).then((function () {
      return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")])
    })).then((function (t) {
      const n = {
        scene: t[0][i.scene || 0],
        scenes: t[0],
        animations: t[1],
        cameras: t[2],
        asset: i.asset,
        parser: s,
        userData: {}
      };
      Co(o, n, i), Lo(n, i), Promise.all(s._invokeAll((function (e) {
        return e.afterRoot && e.afterRoot(n)
      }))).then((function () {
        e(n)
      }))
    })).catch(t)
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      s = this.json.meshes || [];
    for (let i = 0, o = t.length; i < o; i++) {
      const s = t[i].joints;
      for (let t = 0, i = s.length; t < i; t++) e[s[t]].isBone = !0
    }
    for (let i = 0, o = e.length; i < o; i++) {
      const t = e[i];
      void 0 !== t.mesh && (this._addNodeRef(this.meshCache, t.mesh), void 0 !== t.skin && (s[t.mesh].isSkinnedMesh = !0)), void 0 !== t.camera && this._addNodeRef(this.cameraCache, t.camera)
    }
  }
  _addNodeRef(e, t) {
    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
  }
  _getNodeRef(e, t, s) {
    if (e.refs[t] <= 1) return s;
    const i = s.clone(),
      o = (e, t) => {
        const s = this.associations.get(e);
        null != s && this.associations.set(t, s);
        for (const [i, n] of e.children.entries()) o(n, t.children[i])
      };
    return o(s, i), i.name += "_instance_" + e.uses[t]++, i
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      if (i) return i
    }
    return null
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = e(t[i]);
      o && s.push(o)
    }
    return s
  }
  getDependency(e, t) {
    const s = e + ":" + t;
    let i = this.cache.get(s);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne((function (e) {
            return e.loadNode && e.loadNode(t)
          }));
          break;
        case "mesh":
          i = this._invokeOne((function (e) {
            return e.loadMesh && e.loadMesh(t)
          }));
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne((function (e) {
            return e.loadBufferView && e.loadBufferView(t)
          }));
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne((function (e) {
            return e.loadMaterial && e.loadMaterial(t)
          }));
          break;
        case "texture":
          i = this._invokeOne((function (e) {
            return e.loadTexture && e.loadTexture(t)
          }));
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne((function (e) {
            return e.loadAnimation && e.loadAnimation(t)
          }));
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne((function (s) {
              return s != this && s.getDependency && s.getDependency(e, t)
            })), !i) throw new Error("Unknown type: " + e)
      }
      this.cache.add(s, i)
    }
    return i
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const s = this,
        i = this.json[e + ("mesh" === e ? "es" : "s")] || [];
      t = Promise.all(i.map((function (t, i) {
        return s.getDependency(e, i)
      }))), this.cache.add(e, t)
    }
    return t
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      s = this.fileLoader;
    if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[Hi.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise((function (e, o) {
      s.load(Ne.resolveURL(t.uri, i.path), e, void 0, (function () {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
      }))
    }))
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then((function (e) {
      const s = t.byteLength || 0,
        i = t.byteOffset || 0;
      return e.slice(i, i + s)
    }))
  }
  loadAccessor(e) {
    const t = this,
      s = this.json,
      i = this.json.accessors[e];
    if (void 0 === i.bufferView && void 0 === i.sparse) {
      const e = bo[i.type],
        t = go[i.componentType],
        s = !0 === i.normalized,
        o = new t(i.count * e);
      return Promise.resolve(new Ze(o, e, s))
    }
    const o = [];
    return void 0 !== i.bufferView ? o.push(this.getDependency("bufferView", i.bufferView)) : o.push(null), void 0 !== i.sparse && (o.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(o).then((function (e) {
      const o = e[0],
        n = bo[i.type],
        a = go[i.componentType],
        r = a.BYTES_PER_ELEMENT,
        l = r * n,
        p = i.byteOffset || 0,
        c = void 0 !== i.bufferView ? s.bufferViews[i.bufferView].byteStride : void 0,
        h = !0 === i.normalized;
      let d, u;
      if (c && c !== l) {
        const e = Math.floor(p / c),
          s = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + e + ":" + i.count;
        let l = t.cache.get(s);
        l || (d = new a(o, e * c, i.count * c / r), l = new Qe(d, c / r), t.cache.add(s, l)), u = new St(l, n, p % c / r, h)
      } else d = null === o ? new a(i.count * n) : new a(o, p, i.count * n), u = new Ze(d, n, h);
      if (void 0 !== i.sparse) {
        const t = bo.SCALAR,
          s = go[i.sparse.indices.componentType],
          r = i.sparse.indices.byteOffset || 0,
          l = i.sparse.values.byteOffset || 0,
          p = new s(e[1], r, i.sparse.count * t),
          c = new a(e[2], l, i.sparse.count * n);
        null !== o && (u = new Ze(u.array.slice(), u.itemSize, u.normalized));
        for (let e = 0, i = p.length; e < i; e++) {
          const t = p[e];
          if (u.setX(t, c[e * n]), n >= 2 && u.setY(t, c[e * n + 1]), n >= 3 && u.setZ(t, c[e * n + 2]), n >= 4 && u.setW(t, c[e * n + 3]), n >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
        }
      }
      return u
    }))
  }
  loadTexture(e) {
    const t = this.json,
      s = this.options,
      i = t.textures[e].source,
      o = t.images[i];
    let n = this.textureLoader;
    if (o.uri) {
      const e = s.manager.getHandler(o.uri);
      null !== e && (n = e)
    }
    return this.loadTextureImage(e, i, n)
  }
  loadTextureImage(e, t, s) {
    const i = this,
      o = this.json,
      n = o.textures[e],
      a = o.images[t],
      r = (a.uri || a.bufferView) + ":" + n.sampler;
    if (this.textureCache[r]) return this.textureCache[r];
    const l = this.loadImageSource(t, s).then((function (t) {
      t.flipY = !1, t.name = n.name || a.name || "", "" === t.name && "string" == typeof a.uri && !1 === a.uri.startsWith("data:image/") && (t.name = a.uri);
      const s = (o.samplers || {})[n.sampler] || {};
      return t.magFilter = wo[s.magFilter] || ke, t.minFilter = wo[s.minFilter] || Je, t.wrapS = yo[s.wrapS] || Re, t.wrapT = yo[s.wrapT] || Re, i.associations.set(t, {
        textures: e
      }), t
    })).catch((function () {
      return null
    }));
    return this.textureCache[r] = l, l
  }
  loadImageSource(e, t) {
    const s = this,
      i = this.json,
      o = this.options;
    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then((e => e.clone()));
    const n = i.images[e],
      a = self.URL || self.webkitURL;
    let r = n.uri || "",
      l = !1;
    if (void 0 !== n.bufferView) r = s.getDependency("bufferView", n.bufferView).then((function (e) {
      l = !0;
      const t = new Blob([e], {
        type: n.mimeType
      });
      return r = a.createObjectURL(t), r
    }));
    else if (void 0 === n.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const p = Promise.resolve(r).then((function (e) {
      return new Promise((function (s, i) {
        let n = s;
        !0 === t.isImageBitmapLoader && (n = function (e) {
          const t = new Oe(e);
          t.needsUpdate = !0, s(t)
        }), t.load(Ne.resolveURL(e, o.path), n, void 0, i)
      }))
    })).then((function (e) {
      var t;
      return !0 === l && a.revokeObjectURL(r), e.userData.mimeType = n.mimeType || ((t = n.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
    })).catch((function (e) {
      throw e
    }));
    return this.sourceCache[e] = p, p
  }
  assignTexture(e, t, s, i) {
    const o = this;
    return this.getDependency("texture", s.index).then((function (n) {
      if (!n) return null;
      if (void 0 !== s.texCoord && s.texCoord > 0 && ((n = n.clone()).channel = s.texCoord), o.extensions[Hi.KHR_TEXTURE_TRANSFORM]) {
        const e = void 0 !== s.extensions ? s.extensions[Hi.KHR_TEXTURE_TRANSFORM] : void 0;
        if (e) {
          const t = o.associations.get(n);
          n = o.extensions[Hi.KHR_TEXTURE_TRANSFORM].extendTexture(n, e), o.associations.set(n, t)
        }
      }
      return void 0 !== i && (n.encoding = i), e[t] = n, n
    }))
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let s = e.material;
    const i = void 0 === t.attributes.tangent,
      o = void 0 !== t.attributes.color,
      n = void 0 === t.attributes.normal;
    if (e.isPoints) {
      const e = "PointsMaterial:" + s.uuid;
      let t = this.cache.get(e);
      t || (t = new et, tt.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, t.sizeAttenuation = !1, this.cache.add(e, t)), s = t
    } else if (e.isLine) {
      const e = "LineBasicMaterial:" + s.uuid;
      let t = this.cache.get(e);
      t || (t = new st, tt.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, this.cache.add(e, t)), s = t
    }
    if (i || o || n) {
      let e = "ClonedMaterial:" + s.uuid + ":";
      i && (e += "derivative-tangents:"), o && (e += "vertex-colors:"), n && (e += "flat-shading:");
      let t = this.cache.get(e);
      t || (t = s.clone(), o && (t.vertexColors = !0), n && (t.flatShading = !0), i && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(s))), s = t
    }
    e.material = s
  }
  getMaterialType() {
    return it
  }
  loadMaterial(e) {
    const t = this,
      s = this.json,
      i = this.extensions,
      o = s.materials[e];
    let n;
    const a = {},
      r = [];
    if ((o.extensions || {})[Hi.KHR_MATERIALS_UNLIT]) {
      const e = i[Hi.KHR_MATERIALS_UNLIT];
      n = e.getMaterialType(), r.push(e.extendParams(a, o, t))
    } else {
      const s = o.pbrMetallicRoughness || {};
      if (a.color = new Me(1, 1, 1), a.opacity = 1, Array.isArray(s.baseColorFactor)) {
        const e = s.baseColorFactor;
        a.color.fromArray(e), a.opacity = e[3]
      }
      void 0 !== s.baseColorTexture && r.push(t.assignTexture(a, "map", s.baseColorTexture, Xe)), a.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1, a.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1, void 0 !== s.metallicRoughnessTexture && (r.push(t.assignTexture(a, "metalnessMap", s.metallicRoughnessTexture)), r.push(t.assignTexture(a, "roughnessMap", s.metallicRoughnessTexture))), n = this._invokeOne((function (t) {
        return t.getMaterialType && t.getMaterialType(e)
      })), r.push(Promise.all(this._invokeAll((function (t) {
        return t.extendMaterialParams && t.extendMaterialParams(e, a)
      }))))
    }!0 === o.doubleSided && (a.side = ot);
    const l = o.alphaMode || Ao;
    if (l === ko ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, l === _o && (a.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), void 0 !== o.normalTexture && n !== ce && (r.push(t.assignTexture(a, "normalMap", o.normalTexture)), a.normalScale = new de(1, 1), void 0 !== o.normalTexture.scale)) {
      const e = o.normalTexture.scale;
      a.normalScale.set(e, e)
    }
    return void 0 !== o.occlusionTexture && n !== ce && (r.push(t.assignTexture(a, "aoMap", o.occlusionTexture)), void 0 !== o.occlusionTexture.strength && (a.aoMapIntensity = o.occlusionTexture.strength)), void 0 !== o.emissiveFactor && n !== ce && (a.emissive = (new Me).fromArray(o.emissiveFactor)), void 0 !== o.emissiveTexture && n !== ce && r.push(t.assignTexture(a, "emissiveMap", o.emissiveTexture, Xe)), Promise.all(r).then((function () {
      const s = new n(a);
      return o.name && (s.name = o.name), Lo(s, o), t.associations.set(s, {
        materials: e
      }), o.extensions && Co(i, s, o), s
    }))
  }
  createUniqueName(e) {
    const t = nt.sanitizeNodeName(e || "");
    let s = t;
    for (let i = 1; this.nodeNamesUsed[s]; ++i) s = t + "_" + i;
    return this.nodeNamesUsed[s] = !0, s
  }
  loadGeometries(e) {
    const t = this,
      s = this.extensions,
      i = this.primitiveCache;

    function o(e) {
      return s[Hi.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function (s) {
        return Fo(s, e, t)
      }))
    }
    const n = [];
    for (let a = 0, r = e.length; a < r; a++) {
      const s = e[a],
        r = Mo(s),
        l = i[r];
      if (l) n.push(l.promise);
      else {
        let e;
        e = s.extensions && s.extensions[Hi.KHR_DRACO_MESH_COMPRESSION] ? o(s) : Fo(new at, s, t), i[r] = {
          primitive: s,
          promise: e
        }, n.push(e)
      }
    }
    return Promise.all(n)
  }
  loadMesh(e) {
    const t = this,
      s = this.json,
      i = this.extensions,
      o = s.meshes[e],
      n = o.primitives,
      a = [];
    for (let l = 0, p = n.length; l < p; l++) {
      const e = void 0 === n[l].material ? (void 0 === (r = this.cache).DefaultMaterial && (r.DefaultMaterial = new it({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: le
      })), r.DefaultMaterial) : this.getDependency("material", n[l].material);
      a.push(e)
    }
    var r;
    return a.push(t.loadGeometries(n)), Promise.all(a).then((function (s) {
      const a = s.slice(0, s.length - 1),
        r = s[s.length - 1],
        l = [];
      for (let c = 0, h = r.length; c < h; c++) {
        const s = r[c],
          p = n[c];
        let h;
        const d = a[c];
        if (p.mode === vo.TRIANGLES || p.mode === vo.TRIANGLE_STRIP || p.mode === vo.TRIANGLE_FAN || void 0 === p.mode) h = !0 === o.isSkinnedMesh ? new rt(s, d) : new ue(s, d), !0 === h.isSkinnedMesh && h.normalizeSkinWeights(), p.mode === vo.TRIANGLE_STRIP ? h.geometry = zi(h.geometry, Ue) : p.mode === vo.TRIANGLE_FAN && (h.geometry = zi(h.geometry, Be));
        else if (p.mode === vo.LINES) h = new lt(s, d);
        else if (p.mode === vo.LINE_STRIP) h = new pt(s, d);
        else if (p.mode === vo.LINE_LOOP) h = new ct(s, d);
        else {
          if (p.mode !== vo.POINTS) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
          h = new ht(s, d)
        }
        Object.keys(h.geometry.morphAttributes).length > 0 && Po(h, o), h.name = t.createUniqueName(o.name || "mesh_" + e), Lo(h, o), p.extensions && Co(i, h, p), t.assignFinalMaterial(h), l.push(h)
      }
      for (let i = 0, o = l.length; i < o; i++) t.associations.set(l[i], {
        meshes: e,
        primitives: i
      });
      if (1 === l.length) return l[0];
      const p = new pe;
      t.associations.set(p, {
        meshes: e
      });
      for (let e = 0, t = l.length; e < t; e++) p.add(l[e]);
      return p
    }))
  }
  loadCamera(e) {
    let t;
    const s = this.json.cameras[e],
      i = s[s.type];
    if (i) return "perspective" === s.type ? t = new be(me.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : "orthographic" === s.type && (t = new xe(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), s.name && (t.name = this.createUniqueName(s.name)), Lo(t, s), Promise.resolve(t)
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      s = [];
    for (let i = 0, o = t.joints.length; i < o; i++) s.push(this._loadNodeShallow(t.joints[i]));
    return void 0 !== t.inverseBindMatrices ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then((function (e) {
      const t = e.pop(),
        s = e,
        i = [],
        o = [];
      for (let n = 0, a = s.length; n < a; n++) {
        const e = s[n];
        if (e) {
          i.push(e);
          const s = new Ye;
          null !== t && s.fromArray(t.array, 16 * n), o.push(s)
        }
      }
      return new dt(i, o)
    }))
  }
  loadAnimation(e) {
    const t = this.json.animations[e],
      s = t.name ? t.name : "animation_" + e,
      i = [],
      o = [],
      n = [],
      a = [],
      r = [];
    for (let l = 0, p = t.channels.length; l < p; l++) {
      const e = t.channels[l],
        s = t.samplers[e.sampler],
        p = e.target,
        c = p.node,
        h = void 0 !== t.parameters ? t.parameters[s.input] : s.input,
        d = void 0 !== t.parameters ? t.parameters[s.output] : s.output;
      void 0 !== p.node && (i.push(this.getDependency("node", c)), o.push(this.getDependency("accessor", h)), n.push(this.getDependency("accessor", d)), a.push(s), r.push(p))
    }
    return Promise.all([Promise.all(i), Promise.all(o), Promise.all(n), Promise.all(a), Promise.all(r)]).then((function (e) {
      const t = e[0],
        i = e[1],
        o = e[2],
        n = e[3],
        a = e[4],
        r = [];
      for (let s = 0, l = t.length; s < l; s++) {
        const e = t[s],
          l = i[s],
          p = o[s],
          c = n[s],
          h = a[s];
        if (void 0 === e) continue;
        let d;
        switch (e.updateMatrix(), So[h.path]) {
          case So.weights:
            d = _t;
            break;
          case So.rotation:
            d = At;
            break;
          default:
            d = Tt
        }
        const u = e.name ? e.name : e.uuid,
          m = void 0 !== c.interpolation ? To[c.interpolation] : ut,
          f = [];
        So[h.path] === So.weights ? e.traverse((function (e) {
          e.morphTargetInfluences && f.push(e.name ? e.name : e.uuid)
        })) : f.push(u);
        let v = p.array;
        if (p.normalized) {
          const e = Io(v.constructor),
            t = new Float32Array(v.length);
          for (let s = 0, i = v.length; s < i; s++) t[s] = v[s] * e;
          v = t
        }
        for (let t = 0, s = f.length; t < s; t++) {
          const e = new d(f[t] + "." + So[h.path], l.array, v, m);
          "CUBICSPLINE" === c.interpolation && (e.createInterpolant = function (e) {
            return new(this instanceof At ? fo : uo)(this.times, this.values, this.getValueSize() / 3, e)
          }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), r.push(e)
        }
      }
      return new mt(s, void 0, r)
    }))
  }
  createNodeMesh(e) {
    const t = this.json,
      s = this,
      i = t.nodes[e];
    return void 0 === i.mesh ? null : s.getDependency("mesh", i.mesh).then((function (e) {
      const t = s._getNodeRef(s.meshCache, i.mesh, e);
      return void 0 !== i.weights && t.traverse((function (e) {
        if (e.isMesh)
          for (let t = 0, s = i.weights.length; t < s; t++) e.morphTargetInfluences[t] = i.weights[t]
      })), t
    }))
  }
  loadNode(e) {
    const t = this,
      s = this.json.nodes[e],
      i = t._loadNodeShallow(e),
      o = [],
      n = s.children || [];
    for (let r = 0, l = n.length; r < l; r++) o.push(t.getDependency("node", n[r]));
    const a = void 0 === s.skin ? Promise.resolve(null) : t.getDependency("skin", s.skin);
    return Promise.all([i, Promise.all(o), a]).then((function (e) {
      const t = e[0],
        s = e[1],
        i = e[2];
      null !== i && t.traverse((function (e) {
        e.isSkinnedMesh && e.bind(i, Eo)
      }));
      for (let o = 0, n = s.length; o < n; o++) t.add(s[o]);
      return t
    }))
  }
  _loadNodeShallow(e) {
    const t = this.json,
      s = this.extensions,
      i = this;
    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
    const o = t.nodes[e],
      n = o.name ? i.createUniqueName(o.name) : "",
      a = [],
      r = i._invokeOne((function (t) {
        return t.createNodeMesh && t.createNodeMesh(e)
      }));
    return r && a.push(r), void 0 !== o.camera && a.push(i.getDependency("camera", o.camera).then((function (e) {
      return i._getNodeRef(i.cameraCache, o.camera, e)
    }))), i._invokeAll((function (t) {
      return t.createNodeAttachment && t.createNodeAttachment(e)
    })).forEach((function (e) {
      a.push(e)
    })), this.nodeCache[e] = Promise.all(a).then((function (t) {
      let a;
      if (a = !0 === o.isBone ? new ft : t.length > 1 ? new pe : 1 === t.length ? t[0] : new fe, a !== t[0])
        for (let e = 0, s = t.length; e < s; e++) a.add(t[e]);
      if (o.name && (a.userData.name = o.name, a.name = n), Lo(a, o), o.extensions && Co(s, a, o), void 0 !== o.matrix) {
        const e = new Ye;
        e.fromArray(o.matrix), a.applyMatrix4(e)
      } else void 0 !== o.translation && a.position.fromArray(o.translation), void 0 !== o.rotation && a.quaternion.fromArray(o.rotation), void 0 !== o.scale && a.scale.fromArray(o.scale);
      return i.associations.has(a) || i.associations.set(a, {}), i.associations.get(a).nodes = e, a
    })), this.nodeCache[e]
  }
  loadScene(e) {
    const t = this.extensions,
      s = this.json.scenes[e],
      i = this,
      o = new pe;
    s.name && (o.name = i.createUniqueName(s.name)), Lo(o, s), s.extensions && Co(t, o, s);
    const n = s.nodes || [],
      a = [];
    for (let r = 0, l = n.length; r < l; r++) a.push(i.getDependency("node", n[r]));
    return Promise.all(a).then((function (e) {
      for (let t = 0, s = e.length; t < s; t++) o.add(e[t]);
      return i.associations = (e => {
        const t = new Map;
        for (const [s, o] of i.associations)(s instanceof tt || s instanceof Oe) && t.set(s, o);
        return e.traverse((e => {
          const s = i.associations.get(e);
          null != s && t.set(e, s)
        })), t
      })(o), o
    }))
  }
}

function Fo(e, t, s) {
  const i = t.attributes,
    o = [];

  function n(t, i) {
    return s.getDependency("accessor", t).then((function (t) {
      e.setAttribute(i, t)
    }))
  }
  for (const a in i) {
    const t = xo[a] || a.toLowerCase();
    t in e.attributes || o.push(n(i[a], t))
  }
  if (void 0 !== t.indices && !e.index) {
    const i = s.getDependency("accessor", t.indices).then((function (t) {
      e.setIndex(t)
    }));
    o.push(i)
  }
  return Lo(e, t),
    function (e, t, s) {
      const i = t.attributes,
        o = new kt;
      if (void 0 === i.POSITION) return; {
        const e = s.json.accessors[i.POSITION],
          t = e.min,
          n = e.max;
        if (void 0 === t || void 0 === n) return;
        if (o.set(new Pe(t[0], t[1], t[2]), new Pe(n[0], n[1], n[2])), e.normalized) {
          const t = Io(go[e.componentType]);
          o.min.multiplyScalar(t), o.max.multiplyScalar(t)
        }
      }
      const n = t.targets;
      if (void 0 !== n) {
        const e = new Pe,
          t = new Pe;
        for (let i = 0, o = n.length; i < o; i++) {
          const o = n[i];
          if (void 0 !== o.POSITION) {
            const i = s.json.accessors[o.POSITION],
              n = i.min,
              a = i.max;
            if (void 0 !== n && void 0 !== a) {
              if (t.setX(Math.max(Math.abs(n[0]), Math.abs(a[0]))), t.setY(Math.max(Math.abs(n[1]), Math.abs(a[1]))), t.setZ(Math.max(Math.abs(n[2]), Math.abs(a[2]))), i.normalized) {
                const e = Io(go[i.componentType]);
                t.multiplyScalar(e)
              }
              e.max(t)
            }
          }
        }
        o.expandByVector(e)
      }
      e.boundingBox = o;
      const a = new Ct;
      o.getCenter(a.center), a.radius = o.min.distanceTo(o.max) / 2, e.boundingSphere = a
    }(e, t, s), Promise.all(o).then((function () {
      return void 0 !== t.targets ? function (e, t, s) {
        let i = !1,
          o = !1,
          n = !1;
        for (let p = 0, c = t.length; p < c; p++) {
          const e = t[p];
          if (void 0 !== e.POSITION && (i = !0), void 0 !== e.NORMAL && (o = !0), void 0 !== e.COLOR_0 && (n = !0), i && o && n) break
        }
        if (!i && !o && !n) return Promise.resolve(e);
        const a = [],
          r = [],
          l = [];
        for (let p = 0, c = t.length; p < c; p++) {
          const c = t[p];
          if (i) {
            const t = void 0 !== c.POSITION ? s.getDependency("accessor", c.POSITION) : e.attributes.position;
            a.push(t)
          }
          if (o) {
            const t = void 0 !== c.NORMAL ? s.getDependency("accessor", c.NORMAL) : e.attributes.normal;
            r.push(t)
          }
          if (n) {
            const t = void 0 !== c.COLOR_0 ? s.getDependency("accessor", c.COLOR_0) : e.attributes.color;
            l.push(t)
          }
        }
        return Promise.all([Promise.all(a), Promise.all(r), Promise.all(l)]).then((function (t) {
          const s = t[0],
            a = t[1],
            r = t[2];
          return i && (e.morphAttributes.position = s), o && (e.morphAttributes.normal = a), n && (e.morphAttributes.color = r), e.morphTargetsRelative = !0, e
        }))
      }(e, t.targets, s) : e
    }))
}
new class extends je {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register((function (e) {
      return new Yi(e)
    })), this.register((function (e) {
      return new eo(e)
    })), this.register((function (e) {
      return new to(e)
    })), this.register((function (e) {
      return new so(e)
    })), this.register((function (e) {
      return new Wi(e)
    })), this.register((function (e) {
      return new qi(e)
    })), this.register((function (e) {
      return new Zi(e)
    })), this.register((function (e) {
      return new Qi(e)
    })), this.register((function (e) {
      return new Vi(e)
    })), this.register((function (e) {
      return new Ji(e)
    })), this.register((function (e) {
      return new Ki(e)
    })), this.register((function (e) {
      return new Gi(e)
    })), this.register((function (e) {
      return new io(e)
    })), this.register((function (e) {
      return new oo(e)
    }))
  }
  load(e, t, s, i) {
    const o = this;
    let n;
    n = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : Ne.extractUrlBase(e), this.manager.itemStart(e);
    const a = function (t) {
        i && i(t), o.manager.itemError(e), o.manager.itemEnd(e)
      },
      r = new ze(this.manager);
    r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, (function (s) {
      try {
        o.parse(s, n, (function (s) {
          t(s), o.manager.itemEnd(e)
        }), a)
      } catch (i) {
        a(i)
      }
    }), s, a)
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this
  }
  register(e) {
    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
  }
  unregister(e) {
    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
  }
  parse(e, t, s, i) {
    let o;
    const n = {},
      a = {},
      r = new TextDecoder;
    if ("string" == typeof e) o = JSON.parse(e);
    else if (e instanceof ArrayBuffer) {
      if (r.decode(new Uint8Array(e, 0, 4)) === no) {
        try {
          n[Hi.KHR_BINARY_GLTF] = new lo(e)
        } catch (p) {
          return void(i && i(p))
        }
        o = JSON.parse(n[Hi.KHR_BINARY_GLTF].content)
      } else o = JSON.parse(r.decode(e))
    } else o = e;
    if (void 0 === o.asset || o.asset.version[0] < 2) return void(i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
    const l = new Oo(o, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const e = this.pluginCallbacks[c](l);
      a[e.name] = e, n[e.name] = !0
    }
    if (o.extensionsUsed)
      for (let c = 0; c < o.extensionsUsed.length; ++c) {
        const e = o.extensionsUsed[c],
          t = o.extensionsRequired || [];
        switch (e) {
          case Hi.KHR_MATERIALS_UNLIT:
            n[e] = new Xi;
            break;
          case Hi.KHR_DRACO_MESH_COMPRESSION:
            n[e] = new po(o, this.dracoLoader);
            break;
          case Hi.KHR_TEXTURE_TRANSFORM:
            n[e] = new co;
            break;
          case Hi.KHR_MESH_QUANTIZATION:
            n[e] = new ho;
            break;
          default:
            t.indexOf(e) >= 0 && a[e]
        }
      }
    l.setExtensions(n), l.setPlugins(a), l.parse(s, i)
  }
  parseAsync(e, t) {
    const s = this;
    return new Promise((function (i, o) {
      s.parse(e, t, i, o)
    }))
  }
}, new We;
const Do = Xt ? "-mobile" : "";
class Bo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.UI
    }), t(this, "props", {
      color: "black",
      viewport: () => T().state.viewport,
      aspect: 1423 / 493,
      maskStart: 0,
      maskEnd: 1
    }), t(this, "assets", {
      kprTexture: `/images/landing/kpr-texture${Do}.png#texture`,
      kprGradient: `/images/landing/kpr-map${Do}.png#texture`
    })
  }
  async onSetup() {
    const {
      color: e
    } = this.props, {
      layer: t
    } = this.options, s = new K({
      options: {
        name: "KPR"
      },
      uniforms: {
        uMaskStart: 0,
        uMaskEnd: 1,
        uTexture: this.assets.kprTexture,
        uGradient: this.assets.kprGradient,
        uColor: new Me(e)
      },
      fs: "\n        uniform sampler2D uTexture;\n        uniform sampler2D uGradient;\n        uniform float uMaskStart;\n        uniform float uMaskEnd;\n        uniform vec3 uColor;\n\n        varying vec2 vUv;\n\n        float aastep(float threshold, float value) {\n            float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;\n            return smoothstep(threshold - afwidth, threshold + afwidth, value);\n        }\n        /* Signed distance drawing methods */\n        float fill(in float x) { return 1.0 - aastep(0.0, x); }\n        float fill(float x, float size, float edge) {\n            return 1.0 - smoothstep(size - edge, size + edge, x);\n        }\n        float fill(float x, float size) {\n            return 1.0 - aastep(size, x);\n        }\n\n        // #pragma glslify: snoise2 = require(glsl-noise/simplex/2d) \n\n        void main() {\n          vec4 tDiffuse = texture2D(uTexture, vUv);\n          vec4 tGradient = texture2D(uGradient, vUv);\n\n          \n          // float maskStart = smoothstep(tGradient.r + 0.1, tGradient.r, uMaskStart);\n          // float maskEnd = smoothstep(tGradient.r, tGradient.r + 0.1, uMaskEnd);\n          float maskStart = step(uMaskStart, tGradient.r);\n          float maskEnd = step(tGradient.r, uMaskEnd);\n          float mask = maskStart * maskEnd;\n          float alpha = tDiffuse.a * mask;\n\n          gl_FragColor = vec4(uColor, alpha);\n          // gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n          // gl_FragColor = vec4(vec3(noise),1.0);\n        }\n      "
    });
    this.mesh = new ue(Yt, s), this.mesh.layers.set(t), this.object.add(this.mesh)
  }
  setColor(e) {
    this.mesh.material.uColor.set(e)
  }
  setProgress(e) {
    this.mesh.material.uProgress = e
  }
  setMaskStart(e) {
    this.mesh.material.uMaskStart = e
  }
  setMaskEnd(e) {
    this.mesh.material.uMaskEnd = e
  }
  setViewport({
    width: e
  }) {
    const {
      aspect: t
    } = this.props, s = .8 * e, i = s / t;
    this.mesh.scale.set(s, i, 1)
  }
  onDestroy() {
    for (const e in this.assets) {
      const t = this.assets[e];
      (t instanceof Ee || t instanceof Oe) && t.dispose()
    }
  }
}
Dt(Bo, [Et, _()]);
class Uo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      finalFrame: 130,
      json: null,
      atlas: null,
      layer: Ot.UI,
      color: "black"
    }), t(this, "props", {
      active: !1,
      viewport: [1, 1]
    }), t(this, "assets", {})
  }
  async onSetup() {
    await this.createSpritesheet(), await this.createPass()
  }
  async createSpritesheet() {
    const {
      layer: e,
      finalFrame: t,
      json: s,
      atlas: i
    } = this.options;
    this.spritesheet = await (new jo).setup({
      options: {
        id: "spsh-id",
        fps: 30,
        layer: e,
        addTo: this.object,
        data: [{
          json: s,
          texture: i
        }],
        sequences: [{
          id: "in",
          from: 0,
          to: t,
          loop: 1
        }]
      },
      props: {
        aspect: [1, 1],
        s: e => Math.max(e.aspect[0], e.aspect[1]) * Math.max(this.props.viewport[0] / e.aspect[0], this.props.viewport[1] / e.aspect[1])
      }
    })
  }
  async createPass() {
    this.fbo = new Se(512, 512, {
      minFilter: Pt,
      generateMipmaps: !0
    });
    const e = this.shaderBlur = new Le({
      vertexShader: Wt,
      fragmentShader: `\n                varying vec2 vUv;\n                uniform vec2 uRes;\n                uniform vec3 uColor;\n                uniform sampler2D tMap;\n                ${us}\n\n                // #ifndef SAMPLES\n                // #define SAMPLES 20\n                // #endif\n                #ifndef LOD\n                #define LOD 2\n                #endif\n                \n                const int sLOD = 1 << LOD;\n                const float sigma = float(SAMPLES) * 0.25;\n                \n                float gaussian(vec2 i) {\n                    return exp(-0.5 * dot(i /= sigma, i)) / (6.28 * sigma * sigma);\n                }\n                \n                vec4 gaussianBlur(sampler2D sp, vec2 U, vec2 scale) {\n                    vec4 O = vec4(0);\n                    int s = SAMPLES / sLOD;\n                    for(int i = 0; i < s*s; i ++ ) {\n                        vec2 d = vec2(i%s, i / s) * float(sLOD) - float(SAMPLES) / 2.0;\n                        O += gaussian(d) * textureLod(sp, U + scale * d , 1.5);\n                    }\n                    return O / O.a;\n                }\n\n                #define GLSLIFY 1\n#ifndef BOXBLUR2D_FAST9_TYPE\n#ifdef BOXBLUR_TYPE\n#define BOXBLUR2D_FAST9_TYPE BOXBLUR_TYPE\n#else\n#define BOXBLUR2D_FAST9_TYPE vec4\n#endif\n#endif\n#ifndef BOXBLUR2D_FAST9_SAMPLER_FNC\n#ifdef BOXBLUR_SAMPLER_FNC\n#define BOXBLUR2D_FAST9_SAMPLER_FNC(POS_UV) BOXBLUR_SAMPLER_FNC(POS_UV)\n#else\n#define BOXBLUR2D_FAST9_SAMPLER_FNC(POS_UV) texture2D(tex, POS_UV)\n#endif\n#endif\n#ifndef FNC_BOXBLUR2D_FAST9\n#define FNC_BOXBLUR2D_FAST9\nBOXBLUR2D_FAST9_TYPE boxBlur2D_fast9(in sampler2D tex,in vec2 st,in vec2 offset){BOXBLUR2D_FAST9_TYPE color=BOXBLUR2D_FAST9_SAMPLER_FNC(st);color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(-offset.x,offset.y));color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(-offset.x,0.));color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(-offset.x,-offset.y));color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(0.,offset.y));color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(0.,-offset.y));color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+offset);color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(offset.x,0.));color+=BOXBLUR2D_FAST9_SAMPLER_FNC(st+vec2(offset.x,-offset.y));return color*0.1111111111;}\n#endif\n\n                #define GLSLIFY 1\n#ifndef BOXBLUR2D_TYPE\n#ifdef BOXBLUR_TYPE\n#define BOXBLUR2D_TYPE BOXBLUR_TYPE\n#else\n#define BOXBLUR2D_TYPE vec4\n#endif\n#endif\n#ifndef BOXBLUR2D_SAMPLER_FNC\n#ifdef BOXBLUR_SAMPLER_FNC\n#define BOXBLUR2D_SAMPLER_FNC(POS_UV) BOXBLUR_SAMPLER_FNC(POS_UV)\n#else\n#define BOXBLUR2D_SAMPLER_FNC(POS_UV) texture2D(tex, POS_UV)\n#endif\n#endif\n#ifndef FNC_BOXBLUR2D\n#define FNC_BOXBLUR2D\nBOXBLUR2D_TYPE boxBlur2D(in sampler2D tex,in vec2 st,in vec2 pixel,const int kernelSize){BOXBLUR2D_TYPE color=BOXBLUR2D_TYPE(0.);\n#ifndef BOXBLUR2D_KERNELSIZE\n#define BOXBLUR2D_KERNELSIZE kernelSize\n#endif\nfloat accumWeight=0.;float f_kernelSize=float(BOXBLUR2D_KERNELSIZE);float kernelSize2=f_kernelSize*f_kernelSize;float weight=1./kernelSize2;for(int j=0;j<BOXBLUR2D_KERNELSIZE;j++){float y=-.5*(f_kernelSize-1.)+float(j);for(int i=0;i<BOXBLUR2D_KERNELSIZE;i++){float x=-.5*(f_kernelSize-1.)+float(i);color+=BOXBLUR2D_SAMPLER_FNC(st+vec2(x,y)*pixel)*weight;}}return color;}\n#endif\n\n                void main() {\n                    vec4 tDiffuse;\n                    tDiffuse = gaussianBlur(tMap, vUv, 1. / uRes);\n                    float alpha = mix(1.0, 0.0, fill(tDiffuse.r, 0.4));\n                    \n                    gl_FragColor = vec4(uColor, alpha);\n                }`,
      uniforms: {
        uColor: {
          value: new Me(this.options.color)
        },
        tMap: {
          value: this.fbo.texture
        },
        uRes: {
          value: new de
        },
        tSprite: {
          value: this.atlas
        }
      },
      transparent: !0,
      defines: {
        SAMPLES: Xt ? 10 : 20
      }
    });
    this.passBlur = new ds(It.getRenderer(), {
      shader: e
    })
  }
  setViewport([e, t]) {
    var s, i;
    null == (s = this.shaderBlur) || s.uniforms.uRes.value.set(e, t), null == (i = this.passBlur) || i.setSize(e, t)
  }
  whileActive() {
    this.spritesheet.sequence.isTicking && this.spritesheet.sequence.tick()
  }
  render(e, t = !0) {
    const {
      renderer: s,
      orthoCamera: i
    } = It.getInstance();
    s.setRenderTarget(this.fbo), i.layers.set(this.options.layer), s.render(e, i), s.setRenderTarget(null), this.passBlur.render(t, {
      clear: !0
    })
  }
  resetAnimation() {
    this.spritesheet.goToFrame(0)
  }
  playAnimation() {
    this.spritesheet.playSequence("in")
  }
  resize(e, t) {
    this.props.viewport = [e, t]
  }
  get texture() {
    this.passBlur.texture
  }
  onDestroy() {
    this.fbo.dispose(), this.passBlur.scene.traverse((e => {
      var t, s, i, o, n, a;
      null == (o = null == (i = null == (s = null == (t = e.material) ? void 0 : t.uniforms) ? void 0 : s.tMap) ? void 0 : i.value) || o.dispose(), null == (n = e.material) || n.dispose(), null == (a = e.geometry) || a.dispose()
    }));
    for (const e in this.passBlur.fbo) {
      const t = this.passBlur.fbo[e];
      t instanceof Se && t.dispose()
    }
  }
}
Dt(Uo, [Et]);
class jo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      useTrim: !0
    }), t(this, "props", {
      uLod: 0,
      uniforms: e => ({
        uLod: e.uLod
      })
    }), t(this, "assets", {})
  }
  async onSetup() {
    const {
      useTrim: e,
      layer: t
    } = this.options, {
      size: s,
      frame: i,
      atlas: o,
      sourceSize: n,
      spriteSourceSize: a
    } = this.currentFrame, r = `\n\n        varying vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform float uAlpha;\n    \n        uniform float uLod;\n        uniform vec2 uRes;\n        uniform vec2 uResTex;\n        uniform vec4 uFrame;\n        uniform vec2 uSourceSize;\n        uniform vec4 uSpriteSourceSize;\n        ${Z}\n        ${us}\n        void main() {\n            vec2 st = vUv;\n            vec4 O;\n            // O = textureLod(uTexture, getSpriteUVAtFrame(st, uFrame, uResTex, uSpriteSourceSize, uSourceSize), 1.);\n            // O = textureLod(uTexture, getSpriteUVAtFrame(st, uFrame, uResTex), 1.);\n            O = getSpriteAtFrame(uTexture, st, uFrame, uResTex, uSpriteSourceSize, uSourceSize);\n            // O = getSpriteAtFrame(uTexture, st, uFrame, uResTex);\n            // O = blur(uTexture, gl_FragCoord.xy / uRes, 1. / uResTex);\n            // O = blur(uTexture, getSpriteUVAtFrame(st, uFrame, uResTex, uSpriteSourceSize, uSourceSize), 1. / uRes);\n            // O = blur(uTexture, getSpriteUVAtFrame(st, uFrame, uResTex, uSpriteSourceSize, uSourceSize) / uRes, 1. / uRes);\n            // O = blur( uTexture, iChannel0, U/iResolution.xy, 1./iChannelResolution[0].xy );\n   \n /*            #ifdef USE_PREMULTIPLYALPHA\n            tDiffuse.rgb /= a;\n            #endif */\n            float a = O.a;\n            vec3 color = vec3(a);\n            gl_FragColor = vec4(color.rgb, 1.);\n            // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.);\n        }`, l = this.quad = new ue(Yt, null);
    l.layers.set(t), l.material = new q({
      fragmentShader: r,
      uniforms: {
        uRes: {
          value: new de(window.innerWidth, window.innerHeight)
        },
        uResTex: {
          value: Ut(s)
        },
        uFrame: {
          value: i ? Ut(i) : null
        },
        uSourceSize: {
          value: e ? Ut(n) : []
        },
        uSpriteSourceSize: {
          value: e ? Ut(a) : []
        },
        uLod: {
          value: 0
        }
      }
    }, {
      map: o,
      useAtlas: i,
      useTrim: !0
    }), i && X(l, n), this.props.aspect = [n.w, n.h], this.object.add(l)
  }
  setUniforms({
    uLod: e
  }) {
    this.quad.material.uLod = e
  }
  onFrame(e) {
    const t = this.frames[e],
      {
        quad: s
      } = this;
    s.material.uTexture = t.atlas, s.material.uResTex = Ut(t.size), s.material.uSourceSize = Ut(t.sourceSize), s.material.uSpriteSourceSize = Ut(t.spriteSourceSize), s.material.frame = Ut(t.frame)
  }
}
Dt(jo, [Et, W, _()]);
Dt(class extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.UI,
      blending: Mt,
      depthTest: !0,
      depthWrite: !0,
      material: null
    }), t(this, "props", {
      alpha: 1,
      color: "red",
      viewport: () => T().state.viewport
    })
  }
  async onSetup() {
    const {
      color: e
    } = this.props, {
      material: t,
      layer: s,
      blending: i,
      depthTest: o,
      depthWrite: n
    } = this.options, a = t || Vt(e, !0);
    a.blending = i, a.depthTest = o, a.depthWrite = n, this.mesh = new ue(Yt, a), this.mesh.layers.set(s), this.object.add(this.mesh)
  }
  setColor(e) {
    this.mesh.material.color.set(e)
  }
  setAlpha(e) {
    this.mesh.material.opacity = e
  }
  setViewport({
    width: e,
    height: t
  }) {
    this.mesh.scale.set(e, t, 1)
  }
}, [Et]);
class No extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.UI,
      blending: Mt,
      depthTest: !0,
      depthWrite: !0,
      material: null
    }), t(this, "props", {
      alpha: 1,
      color: "red",
      viewport: () => T().state.viewport
    }), t(this, "tweens", {
      gradientPr: 0,
      alphaOverride: 0
    })
  }
  updateTweens() {
    this.mesh.material.uAlphaOverride = this.tweens.alphaOverride
  }
  async onSetup() {
    const {
      color: e
    } = this.props, {
      layer: t
    } = this.options, s = new K({
      uniforms: {
        uColor: new Me(e),
        uAlpha: 1,
        uAlphaOverride: 0,
        uGradientProgress: 0
      },
      vs: Wt,
      fs: "\n        #define PI 3.1415926538\n\n        uniform vec3 uColor;\n        uniform float uAlpha;\n        uniform float uAlphaOverride;\n        uniform float uGradientProgress;\n\n        varying vec2 vUv;\n        void main() {\n          float gradient = sin(vUv.x) * 10.;\n          gradient = 1.0 - distance(0.5, vUv.x);\n          gradient = cos((vUv.x + 0.5) * PI * 2.0) * 0.5 + 0.5;\n          \n          float center = 0.5;\n          float thickness = 0.3;\n          float fadeDist = 1.0;\n          float transitionDist = fadeDist + thickness * 0.5 + 0.5;\n          float x1 = center - thickness * 0.5;\n          float x2 = center + thickness * 0.5;\n          float x = vUv.x + mix(transitionDist, -transitionDist, uGradientProgress);\n\n          gradient = smoothstep(x1 - fadeDist, x1, x) * smoothstep(x2 + fadeDist, x2, x);\n          \n          float alpha = uAlpha * gradient;\n          alpha = mix(alpha, 1.0, uAlphaOverride);\n\n          gl_FragColor = vec4(uColor, alpha);\n        }\n      ",
      options: {
        blending: Rt,
        depthTest: !1,
        depthWrite: !1
      }
    });
    this.mesh = new ue(Yt, s), this.mesh.layers.set(t), this.object.add(this.mesh), this.sheenSound = new o.Howl({
      src: ["/audio/FX_press_sheen.mp3"]
    })
  }
  wipe({
    duration: e = 2,
    delay: t = 0
  } = {}) {
    this.props.wiping || (i.fromTo(this.tweens, {
      gradientPr: 0
    }, {
      gradientPr: 1,
      duration: e,
      delay: t,
      ease: "sine.inOut",
      onUpdate: () => {
        this.mesh.material.uGradientProgress = this.tweens.gradientPr
      },
      onStart: () => this.props.wiping = !0,
      onComplete: () => this.props.wiping = !1
    }), this.sheenSound.play())
  }
  setColor(e) {
    this.mesh.material.uColor.set(e)
  }
  setAlpha(e) {
    this.mesh.material.opacity = e
  }
  setViewport({
    width: e,
    height: t,
    height100vh: s
  }) {
    this.mesh.scale.set(e, s, 1)
  }
}
Dt(No, [Et]);
Dt(class extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: Ot.UI,
      blending: Mt
    }), t(this, "props", {
      viewport: () => T().state.viewport
    })
  }
  async onSetup() {
    this.props;
    const {
      layer: e
    } = this.options, t = H.instance.assets.noiseTexture, s = new K({
      uniforms: {
        uNoise: t,
        uNoiseIntensity: 1,
        uTime: .5,
        uResolution: new de
      },
      vs: Wt,
      fs: `\n        varying vec2 vUv;    \n        uniform sampler2D uNoise;\n        uniform float uTime;\n        uniform float uNoiseIntensity;\n        uniform vec2 uResolution;\n        \n        ${ps}\n        ${ei}\n        ${ti}\n\n        void main() {\n            vec2 st = vUv;\n            vec2 res = uResolution;\n            float t = uTime;\n\n            // noise\n            float noiseTime = floor(mod(t * 20.0, 20.0));\n            vec2 rand =  random2(vec2(noiseTime, noiseTime * 2.0));\n            vec2 stNoise = UVResize(st, res, vec2(1.), vec2(256. / res.y), 0);\n                stNoise += rand * rand;\n            vec3 noise = texture2D(uNoise, stNoise).rgb;\n            \n            gl_FragColor = vec4(noise, 1.0);\n            // gl_FragColor = vec4(vec3(stGradL.x), 1.);\n        }`,
      options: {
        blending: Mt,
        depthTest: !1,
        depthWrite: !1
      }
    });
    this.mesh = new ue(Yt, s), this.mesh.layers.set(e), this.object.add(this.mesh)
  }
  whileActive(e) {
    this.mesh.material.uTime = e % 10
  }
  setViewport({
    width: e,
    height: t,
    height100vh: s
  }) {
    this.mesh.scale.set(e, s, 1), this.mesh.material.uResolution.set(e, s)
  }
}, [Et]);
class zo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      id: "landing",
      persistentCard: null,
      useMasking: !0
    }), t(this, "props", {
      active: !1,
      viewport: () => T().state.viewport,
      maskStart: -.01,
      maskEnd: -.01,
      flashWipePr: 0,
      showComplete: !1,
      pointerDown: () => T().state.landingPointerDown
    }), t(this, "assets", {
      gltf: `${Q}landing/landing-${V.textureSize}.glb`,
      json: "/images/sheets/header-sprite.json#json",
      atlas: `${U}sheets/header-sprite.webp#texture`
    }), t(this, "downPr", 0), t(this, "tweenProps", {
      maskStart: -.01,
      maskEnd: -.01
    }), t(this, "onTlUpdate", (() => {
      this.updateTweenProps(), this.cameraSystem.updateTweenProps()
    })), t(this, "updateTweenProps", (() => {
      this.props.maskStart = this.tweenProps.maskStart, this.props.maskEnd = this.tweenProps.maskEnd, this.props.flashWipePr = this.tweenProps.flashWipePr, this.overlay.updateTweens()
    })), t(this, "handleScroll", (() => {}))
  }
  async onSetup() {
    this.tweens = {
      cameraOffsetPr: 0
    }, await this.setupScene(), await this.setupPattern(), await this.setupLogo(), await this.setupCamera()
  }
  async setupScene() {
    this.scene = new ye;
    this.gltf = this.assets.gltf, this.gltfScene = this.gltf.scene, this.gltfScene.traverse((e => {
      const {
        order: t
      } = e.userData;
      if (e.material) {
        const t = e.material.side;
        e.material.map && (e.material.map.encoding = Fe, e.material = new K({
          uniforms: {
            uTexture: e.material.map
          },
          options: {},
          fs: "\n              uniform sampler2D uTexture;\n                varying vec2 vUv;\n                void main() {\n                  vec4 tDiffuse = texture2D(uTexture, vUv);\n                  vec3 color = mix(tDiffuse.rgb, vec3(0.0), 0.15);\n                  gl_FragColor = vec4(color, tDiffuse.a);\n                }\n            "
        })), e.material.side = t
      }
      t && (e.renderOrder = 20 - t)
    })), this.scene.add(this.gltfScene)
  }
  async setupPattern() {
    this.pattern = await (new Uo).setup({
      options: {
        addTo: this.scene,
        layer: Ot.BG,
        json: this.assets.json,
        atlas: this.assets.atlas
      }
    })
  }
  async setupLogo() {
    this.kprGroup = new fe, this.scene.add(this.kprGroup), this.logoBehind = await (new Bo).setup({
      options: {
        addTo: this.kprGroup,
        layer: Ot.BG
      },
      props: {
        color: "white",
        maskStart: () => this.props.maskStart,
        maskEnd: () => this.props.maskEnd
      }
    }), this.logoInMask = await (new Bo).setup({
      options: {
        addTo: this.kprGroup,
        layer: Ot.UI
      },
      props: {
        color: "white",
        maskStart: () => this.props.maskStart,
        maskEnd: () => this.props.maskEnd
      }
    }), this.overlay = await (new No).setup({
      options: {
        addTo: this.scene,
        layer: Ot.UI
      },
      props: {
        color: Ft.DARK_LAVENDER
      }
    })
  }
  async setupCamera() {
    const e = Xt ? .1 : 0;
    this.scene.position.x = e, this.vCameraLookAt = new Pe(0, .18, 0), this.vCameraPosScroll = new Pe(0, .18, 0), this.vCameraPosPointer = new Pe(0, 0, 0), this.vCameraPos = new Pe(0, 0, 0), this.cameraSystem = await (new J).setup({
      options: {
        vLookAt: this.vCameraLookAt,
        vPos: this.vCameraPos,
        log: !0,
        name: "Landing Camera"
      },
      props: {
        active: () => this.props.active,
        zoom: Xt ? .6 : 1,
        disableInteraction: Gt
      }
    })
  }
  setupTimeline() {
    const {
      vw: e,
      vh: t,
      vh100: s
    } = T().state;
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill()), this.tl = i.timeline({
      onUpdate: this.onTlUpdate
    });
    const {
      tl: o
    } = this, n = R("project-intro"), {
      heroBounds: a
    } = n, r = e / 2 - a.left - a.width / 2, l = s / 2 - a.top - a.height / 2, p = s, c = .5 * p;
    o.addLabel("down", n.props.start), o.fromTo(this.vCameraPosScroll, {
      z: 1.2,
      y: .18
    }, {
      z: 8,
      y: .3,
      duration: p,
      ease: "sine.inOut"
    }, "down"), o.fromTo(this.vCameraLookAt, {
      y: .18
    }, {
      y: .3,
      duration: p,
      ease: "sine.inOut"
    }, "down"), o.fromTo(this.cameraSystem.tweenProps, {
      xOffset: 0,
      yOffset: 0
    }, {
      xOffset: r,
      yOffset: l,
      duration: c,
      ease: "sine.inOut"
    }, `down+=${c}`), o.fromTo(this.overlay.tweens, {
      alphaOverride: 0
    }, {
      alphaOverride: 1,
      duration: c,
      ease: "sine.in"
    }, "down+=" + 0 * t), o.to(this.overlay.tweens, {
      alphaOverride: 0,
      duration: c,
      ease: "sine.out"
    }, `down+=${c}`);
    const h = R("project-story");
    o.addLabel("out", h.props.start), o.to(this.vCameraPosScroll, {
      z: -2,
      duration: p,
      ease: "sine.inOut"
    }, "out"), o.fromTo(this.gltfScene.rotation, {
      y: 0,
      x: 0
    }, {
      y: -1.2,
      x: -.5,
      duration: p,
      ease: "power3.inOut"
    }, "out"), o.to(this.cameraSystem.tweenProps, {
      xOffset: 0,
      yOffset: 0,
      duration: p,
      ease: "sine.inOut"
    }, "out"), o.to(this.overlay.tweens, {
      alphaOverride: 1,
      duration: t,
      ease: "sine.inOut"
    }, "out"), o.seek(.001), this.options.tl.add(o, 0)
  }
  onEnter() {
    globalEvents.on("scroll", this.handleScroll)
  }
  offEnter() {
    globalEvents.off("scroll", this.handleScroll)
  }
  show({
    delay: e = 0,
    maskFlipDelay: t = 0,
    hideKPRDelay: s = 0,
    skipIntro: o
  }) {
    const n = "power3.inOut",
      {
        vh: a,
        vh100: r
      } = T().state,
      l = this.showTl = new i.timeline({
        onUpdate: this.updateTweenProps
      });
    o || (this.pattern.props.active = !0, this.pattern.playAnimation(), l.to(this.tweenProps, {
      maskStart: 0,
      maskEnd: 1,
      duration: 2.5,
      delay: e,
      ease: "none"
    }, 0), l.to(this.tweenProps, {
      maskStart: 1,
      maskEnd: 1,
      duration: 1,
      delay: s,
      ease: "linear"
    }, 0)), l.fromTo(this.overlay.tweens, {
      alphaOverride: 1
    }, {
      alphaOverride: 0,
      duration: 2,
      delay: t + 1
    }, 0), l.fromTo(this.kprGroup.position, {
      y: r / 2 - a / 2
    }, {
      y: r / 2 - a / 2 - .1 * a,
      duration: 2,
      delay: t + .5,
      ease: n
    }, 0), l.fromTo(this.gltfScene.rotation, {
      y: 1
    }, {
      y: 0,
      duration: 3,
      delay: t,
      ease: n
    }, 0), l.fromTo(this.gltfScene.scale, {
      x: .3,
      y: .3,
      z: .3
    }, {
      x: 1,
      y: 1,
      z: 1,
      duration: 3,
      delay: t,
      ease: n,
      onComplete: () => this.props.showComplete = !0
    }, 0)
  }
  onShowComplete() {
    this.pattern.props.v = !1
  }
  update() {
    Gt || (this.updatePointerMotion(), this.updatePointerDownMotion()), this.vCameraPos.copy(this.vCameraPosScroll).add(this.vCameraPosPointer)
  }
  updatePointerMotion() {
    const e = .4,
      t = jt(this.cameraSystem.theta, .18, -.18, -1, 1),
      s = jt(this.cameraSystem.phi, .18, -.18, -1, 1),
      i = Math.cos(t + Math.PI) * e + e,
      o = Math.cos(s + Math.PI) * e + e;
    this.vCameraPosPointer.z = i + o
  }
  updatePointerDownMotion() {
    T().state.pointer
  }
  render() {
    this.update();
    const {
      renderer: e,
      orthoCamera: t
    } = It.getInstance(), {
      persistentCard: s,
      useMasking: i
    } = this.options, {
      camera: o
    } = this.cameraSystem;
    return this.props.showComplete || this.pattern.render(this.scene), e.clearDepth(), i ? (e.clearDepth(), e.clearStencil(), s.showFrontSide(), bs({
      renderer: e,
      camera: s.camera,
      scene: s.scene
    }), xs({
      renderer: e,
      layer: Ot.MAIN,
      camera: o,
      scene: this.scene
    }), xs({
      renderer: e,
      layer: Ot.UI,
      camera: t,
      scene: this.scene
    }), Ss(e)) : (o.layers.set(Ot.MAIN), e.render(this.scene, o), t.layers.set(Ot.UI), e.render(this.scene, t)), null
  }
  onPointerDown() {
    this.props.showComplete && this.props.active && (this.overlay.wipe(), i.killTweensOf(this.gltfScene.position), i.to(this.gltfScene.position, {
      z: -.15,
      duration: 4,
      ease: "expo.out"
    }))
  }
  offPointerDown({
    firstTrigger: e
  }) {
    e || (i.killTweensOf(this.gltfScene.position), i.to(this.gltfScene.position, {
      z: 0,
      duration: 2,
      ease: "expo.out"
    }))
  }
  resize({
    width: e,
    height: t
  }) {
    this.setupTimeline(), this.pattern.resize(e, t)
  }
  onDestroy() {
    var e, t;
    null == (e = this.tl) || e.kill(), null == (t = this.showTl) || t.kill(), this.scene.traverse((e => {
      var t, s, i, o, n, a, r, l, p, c, h, d, u, m;
      null == (t = e.material) || t.dispose(), null == (n = null == (o = null == (i = null == (s = e.material) ? void 0 : s.uniforms) ? void 0 : i.uTexture) ? void 0 : o.value) || n.dispose(), null == (p = null == (l = null == (r = null == (a = e.material) ? void 0 : a.uniforms) ? void 0 : r.uGradient) ? void 0 : l.value) || p.dispose(), null == (u = null == (d = null == (h = null == (c = e.material) ? void 0 : c.uniforms) ? void 0 : h.tMap) ? void 0 : d.value) || u.dispose(), null == (m = e.geometry) || m.dispose()
    }));
    for (const s in this.assets) {
      const e = this.assets[s];
      (e instanceof Ee || e instanceof Oe) && e.dispose()
    }
  }
}
Dt(zo, [_()]);
class $o extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      layer: 0
    }), t(this, "props", {
      active: !1
    }), t(this, "uSize", new de), t(this, "uTextureSize", new de), t(this, "assets", {
      json: "/images/sheets/logo-anim-low-res-0.json#json",
      atlas: `${O}sheets/logo-anim-low-res-0.ktx2`
    }), t(this, "tweenProps", {
      pX: 0,
      pY: 0,
      pZ: 0,
      rX: 0,
      rY: 0,
      rZ: 0
    })
  }
  updateTweenProps() {
    this.props.pX = this.tweenProps.pX, this.props.pY = this.tweenProps.pY, this.props.pZ = this.tweenProps.pZ, this.mesh.rotation.x = this.tweenProps.rX, this.mesh.rotation.y = this.tweenProps.rY, this.mesh.rotation.z = this.tweenProps.rZ
  }
  async onSetup() {
    const {
      layer: e
    } = this.options;
    this.patternScene = new ye, await this.setupPattern(), this.pattern.passBlur;
    const t = new K({
      uniforms: {
        uScale: Xt ? .6 : .9,
        uTexture: this.pattern.passBlur.texture,
        uSize: this.uSize,
        uTextureSize: this.uTextureSize
      },
      fs: `\n        uniform sampler2D uTexture;\n        uniform vec2 uSize;\n        uniform vec2 uTextureSize;\n        uniform float uScale;\n\n        varying vec2 vUv;\n\n        ${ti}\n        void main() {\n            // float aspect = uTextureSize.x / uTextureSize.y;\n            vec2 scale = vec2(uScale);\n            vec2 newUV = UVResize(vUv, uSize, uTextureSize, scale, 1);\n            \n            vec4 tDiffuse = texture2D(uTexture, newUV);\n            \n            gl_FragColor = tDiffuse;\n            // gl_FragColor.a += 0.2;\n        }\n        `
    });
    this.mesh = new ue(Yt, t), this.mesh.layers.set(e), this.object.add(this.mesh), await P(this.constructor.name, this.patternScene)
  }
  async setupPattern() {
    this.pattern = await (new Uo).setup({
      options: {
        addTo: this.patternScene,
        finalFrame: 100,
        json: this.assets.json,
        atlas: this.assets.atlas,
        layer: this.options.layer,
        color: "white"
      }
    })
  }
  offActive() {
    this.pattern.props.active = !1, this.pattern.resetAnimation()
  }
  onActive() {
    this.pattern.props.active = !0, this.pattern.playAnimation()
  }
  render() {
    this.pattern.render(this.patternScene, !1)
  }
  resize(e, t) {
    this.pattern.resize(e, t), this.uTextureSize.set(e, t)
  }
  setS(e) {
    if (e instanceof Array) {
      const [t, s, i] = e;
      this.uSize.set(t, s)
    } else this.uSize.set(e, e)
  }
  onDestroy() {
    this.patternScene.traverse((e => {
      var t, s, i, o, n, a, r, l, p, c;
      null == (o = null == (i = null == (s = null == (t = e.material) ? void 0 : t.uniforms) ? void 0 : s.uTexture) ? void 0 : i.value) || o.dispose(), null == (l = null == (r = null == (a = null == (n = e.material) ? void 0 : n.uniforms) ? void 0 : a.tMap) ? void 0 : r.value) || l.dispose(), null == (p = e.material) || p.dispose(), null == (c = e.geometry) || c.dispose()
    }));
    for (const e in this.assets) {
      const t = this.assets[e];
      (t instanceof Ee || t instanceof Oe) && t.dispose()
    }
  }
}
Dt($o, [Et, _()]);
const Ho = O,
  Go = [{
    id: "female-cloth",
    totalSheets: 3
  }, {
    id: "female-hair",
    totalSheets: 2
  }, {
    id: "male-hair",
    totalSheets: 2
  }],
  Xo = {},
  Vo = Gt ? "-mobile" : "";
V.hasMobileFallback || Go.forEach((e => new Array(e.totalSheets).fill().map(((t, s) => {
  const i = `${e.id}${s}-json`,
    o = `${e.id}${s}-texture`,
    n = `/images/project-story/${e.id}/${e.id}-${s}.json#json`,
    a = `${Ho}project-story/${e.id}/${e.id}-${s}${Vo}.ktx2`;
  Xo[i] = n, Xo[o] = a
}))));
class Yo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      id: "project",
      persistentCard: null,
      useMasking: !0
    }), t(this, "props", {
      active: !1,
      viewport: () => T().state.viewport
    }), t(this, "assets", {
      ...Xo,
      gltf: `${V.gltfBaseFolder}project/project-${V.textureSize}.glb`
    }), t(this, "objects", [...V.hasMobileFallback ? [] : [{
      id: "male_hair_fx",
      class: Y,
      options: {
        fps: 30,
        spritesheets: {
          id: "male-hair",
          amount: 2
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 48,
          loop: -1
        }]
      }
    }, {
      id: "female_hair_fx",
      class: Y,
      options: {
        fps: 30,
        spritesheets: {
          id: "female-hair",
          amount: 2
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 48,
          loop: -1
        }]
      }
    }, {
      id: "female_cloth_fx",
      class: Y,
      options: {
        fps: 30,
        spritesheets: {
          id: "female-cloth",
          amount: 3
        },
        sequences: [{
          id: "default",
          from: 0,
          to: 48,
          loop: -1
        }]
      }
    }]]), t(this, "onTlUpdate", (() => {
      this.logo.updateTweenProps()
    }))
  }
  async onSetup() {
    await this.setupScene(), await this.setupCamera(), await this.setupLogo()
  }
  async setupScene() {
    this.scene = new ye;
    const {
      objects: e,
      assets: t
    } = this, s = [];
    this.gltfScene = this.assets.gltf.scene, this.gltfScene.traverse((i => {
      if (i.isMesh && i.material) {
        const {
          name: o
        } = i.userData, n = e.find((e => e.id === o)), a = n && n.class || $;
        let r = null;
        if (n) {
          const {
            id: e,
            amount: s
          } = n.options.spritesheets;
          r = new Array(s).fill().map(((s, i) => ({
            texture: t[`${e}${i}-texture`],
            json: t[`${e}${i}-json`]
          })))
        }
        const l = (new a).setup({
          options: {
            addTo: this.scene,
            gltfRef: i,
            preventAddTo: !0,
            maxLayers: 10,
            assets: t,
            data: r,
            ...null == n ? void 0 : n.options
          },
          props: {
            enter: () => this.props.active
          }
        });
        s.push(l)
      }
    })), this.scene.add(this.gltfScene), this.sceneObjects = await Promise.all(s)
  }
  async setupCamera() {
    this.vCameraLookAt = new Pe(0, 0, -20), this.vCameraPos = new Pe(0, 0, 1.5), this.cameraSystem = await (new J).setup({
      options: {
        vLookAt: this.vCameraLookAt,
        vPos: this.vCameraPos
      },
      props: {
        disableInteraction: Gt,
        active: () => this.props.active,
        maxRotation: .2,
        fov: 22.9
      }
    })
  }
  async setupLogo() {
    this.logo = await (new $o).setup({
      options: {
        addTo: this.scene,
        scene: this.scene,
        layer: Ot.UI
      }
    })
  }
  setupTimeline() {
    const {
      vw: e,
      vh: t,
      vh100: s
    } = T().state;
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill()), this.tl = i.timeline({
      onUpdate: this.onTlUpdate
    });
    const {
      tl: o
    } = this, n = R("project-story");
    if (n) {
      const {
        bounds: i,
        start: a,
        end: r
      } = n.props;
      let l = i.height + s;
      const p = 2 * s;
      o.addLabel("enter", a);
      const c = Xt ? 3 : 3.5,
        h = Xt ? -.2 : -.5,
        d = Xt ? -.5 : -1,
        u = Xt ? 3 : 1.5;
      o.fromTo(this.gltfScene.rotation, {
        y: .2
      }, {
        y: 0,
        duration: p
      }, "enter"), o.fromTo(this.vCameraPos, {
        z: d
      }, {
        z: u,
        duration: p,
        ease: "sine.inOut"
      }, "enter"), o.fromTo(this.vCameraLookAt, {
        y: c
      }, {
        y: h,
        duration: l
      }, "enter"), o.fromTo(this.vCameraPos, {
        y: c
      }, {
        y: h,
        duration: l
      }, "enter");
      const {
        bounds: m
      } = n.logoBoundingBox, f = e / -2 + m.left + m.width / 2;
      this.logo.props.s = [m.width, m.height, 1];
      let v = s / 2 - m.height / 2 - t - m.top;
      const g = i.height + (Xt ? .15 * s : 0),
        w = r - 2 * s,
        y = r - 1.5 * s,
        b = r - s;
      o.fromTo(this.logo.tweenProps, {
        pY: v
      }, {
        pY: v + g,
        duration: g,
        ease: "none"
      }, a), o.add((() => this.logo.props.active = !1), w), o.add((() => this.logo.props.active = !0), y), o.fromTo(this.logo.tweenProps, {
        pX: f,
        rX: 0,
        rY: 0,
        rZ: 0
      }, {
        pX: .25 * -e,
        rX: -.4,
        rY: 2,
        duration: s,
        ease: "power3.inOut"
      }, b)
    }
    o.seek(.001), this.options.tl.add(o, 0)
  }
  render() {
    const {
      renderer: e,
      orthoCamera: t
    } = It.getInstance(), {
      persistentCard: s,
      useMasking: i
    } = this.options;
    return i ? (e.clearDepth(), e.clearStencil(), s.showBackSide(), bs({
      renderer: e,
      camera: s.camera,
      scene: s.scene
    }), xs({
      renderer: e,
      layer: Ot.MAIN,
      camera: this.cameraSystem.camera,
      scene: this.scene
    }), this.logo.render(), xs({
      renderer: e,
      layer: Ot.UI,
      camera: t,
      scene: this.scene
    }), Ss(e)) : (e.render(this.scene, this.cameraSystem.camera), this.logo.render(), t.layers.set(Ot.UI), e.render(this.scene, t)), null
  }
  resize({
    width: e,
    height: t
  }) {
    this.logo.resize(e, t)
  }
  onPostResize() {
    this.setupTimeline()
  }
  offActive() {}
  onBeforeDestroy() {
    var e;
    null == (e = this.tl) || e.kill(), this.sceneObjects.forEach((e => e.destroy())), this.scene.traverse((e => {
      var t, s, i, o, n, a, r, l, p, c;
      null == (o = null == (i = null == (s = null == (t = e.material) ? void 0 : t.uniforms) ? void 0 : s.uTexture) ? void 0 : i.value) || o.dispose(), null == (l = null == (r = null == (a = null == (n = e.material) ? void 0 : n.uniforms) ? void 0 : a.tMap) ? void 0 : r.value) || l.dispose(), null == (p = e.material) || p.dispose(), null == (c = e.geometry) || c.dispose()
    }));
    for (const t in this.assets) {
      const e = this.assets[t];
      (e instanceof Ee || e instanceof Oe) && e.dispose()
    }
  }
}
Dt(Yo, [_()]);
class Ko extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      id: "collection",
      persistentCard: null,
      useMasking: !0
    }), t(this, "props", {
      active: !1,
      viewport: () => T().state.viewport
    }), t(this, "assets", {
      gltf: `${V.gltfBaseFolder}collection/collection-${V.textureSize}.glb`
    }), t(this, "onTlUpdate", (() => {
      this.cameraSystem.updateTweenProps()
    }))
  }
  async onSetup() {
    await this.setupScene(), await this.setupCamera()
  }
  async setupScene() {
    this.scene = new ye, this.box = new ue(Zt, Vt("#A79BED")), this.box.scale.setScalar(20), this.box.material.side = ve, this.scene.add(this.box);
    this.gltf = this.assets.gltf, this.gltfScene = this.gltf.scene, this.gltfScene.traverse((e => {
      const {
        order: t
      } = e.userData;
      e.material && (e.material.map && (e.material.map.encoding = Fe), e.material = new K({
        uniforms: {
          uTexture: e.material.map
        }
      })), t && (e.renderOrder = 30 - t)
    })), this.scene.add(this.gltfScene)
  }
  async setupCamera() {
    this.vCameraLookAt = new Pe(-.05, .1, 0), this.vCameraPos = new Pe(-.05, .1, 0), this.cameraSystem = await (new J).setup({
      options: {
        vLookAt: this.vCameraLookAt,
        vPos: this.vCameraPos
      },
      props: {
        active: () => this.props.active,
        disableInteraction: Gt
      }
    })
  }
  setupTimeline() {
    const {
      vw: e,
      vh100: t,
      scale: s
    } = T().state;
    this.tl && (this.options.tl.remove(this.tl), this.tl.kill()), this.tl = i.timeline({
      onUpdate: this.onTlUpdate
    });
    const {
      tl: o
    } = this, n = R("collection-intro"), {
      heroBounds: a
    } = n, r = t;
    o.addLabel("enter", n.props.start), o.fromTo(this.scene.rotation, {
      y: -.8
    }, {
      y: 0,
      duration: r,
      ease: "power3.inOut"
    }, "enter"), o.fromTo(this.scene.position, {
      x: .5
    }, {
      x: 0,
      duration: r,
      ease: "power3.inOut"
    }, "enter"), o.fromTo(this.vCameraPos, {
      z: Xt ? 8 : 4.5
    }, {
      z: Xt ? 7 : 4,
      duration: r,
      ease: "power3.inOut"
    }, "enter");
    const l = e / 2 - a.left - a.width / 2,
      p = t / 2 - a.top - a.width / 2;
    o.fromTo(this.cameraSystem.tweenProps, {
      xOffset: 0,
      yOffset: 0
    }, {
      xOffset: l,
      yOffset: p,
      duration: r,
      ease: "power3.inOut"
    }, "enter");
    const c = R("collection-gallery");
    o.addLabel("down", c.props.start), o.to(this.vCameraPos, {
      z: Xt ? 10 : 8,
      duration: 300 * s,
      ease: "power2.in"
    }, "down"), o.seek(.001), this.options.tl.add(o, 0)
  }
  whileActive() {}
  render() {
    const {
      renderer: e
    } = It.getInstance(), {
      persistentCard: t,
      useMasking: s
    } = this.options;
    return s ? (e.clearDepth(), e.clearStencil(), t.showFrontSide(), bs({
      renderer: e,
      camera: t.camera,
      scene: t.scene
    }), xs({
      renderer: e,
      camera: this.cameraSystem.camera,
      scene: this.scene
    }), Ss(e)) : e.render(this.scene, this.cameraSystem.camera), null
  }
  resize() {
    this.setupTimeline()
  }
  offActive() {}
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill(), this.scene.traverse((e => {
      var t, s, i, o, n, a, r, l, p, c;
      null == (t = e.material) || t.dispose(), null == (n = null == (o = null == (i = null == (s = e.material) ? void 0 : s.uniforms) ? void 0 : i.uTexture) ? void 0 : o.value) || n.dispose(), null == (p = null == (l = null == (r = null == (a = e.material) ? void 0 : a.uniforms) ? void 0 : r.tMap) ? void 0 : l.value) || p.dispose(), null == (c = e.geometry) || c.dispose()
    }));
    for (const t in this.assets) {
      const e = this.assets[t];
      (e instanceof Ee || e instanceof Oe) && e.dispose()
    }
  }
}
Dt(Ko, [_()]);
class Wo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      text: "Btn Main",
      textClass: "ShellManager1",
      link: "/"
    }), t(this, "props", {}), t(this, "onUpdate", (() => {}))
  }
  async onSetup() {}
  show({
    delay: e = 0
  }) {
    i.to(x.app.simpleFrame, {
      opacity: 1,
      color: 1,
      delay: e
    })
  }
  setupTimeline() {
    var e;
    null == (e = this.tl) || e.kill(), this.tl = i.timeline({
      onUpdate: this.onUpdate
    });
    const {
      tl: t
    } = this, {
      vw: s,
      vh: o,
      scale: n
    } = T().state, {
      app: a
    } = x;
    R("project-intro");
    const r = R("project-story"),
      l = R("collection-intro"),
      p = R("collection-gallery"),
      c = R("keep"),
      h = R("launch"),
      d = .1 * o,
      u = .2 * o;
    if (t.fromTo(a.simpleFrame, {
        color: 1
      }, {
        color: 0,
        duration: d
      }, u), t.to(a.simpleFrame, {
        color: 1,
        duration: d
      }, r.props.start + .5 * o), t.to(a.simpleFrame, {
        color: 0,
        duration: d
      }, l.props.start + .4 * o), c && t.to(a.simpleFrame, {
        color: 1,
        duration: d
      }, c.props.start + o), h && t.to(a.simpleFrame, {
        color: 0,
        duration: d
      }, h.props.start + .5 * o), a && Xt) {
      const e = p.props.start + .2 * o,
        s = r.props.start + .7 * o,
        i = l.props.start + .3 * o,
        n = c.props.start + 1 * o,
        d = h.props.start + .5 * o;
      t.add((() => a.setNavTheme("")), 9), t.add((() => a.setNavTheme("white")), 10), t.add((() => a.setNavTheme("white")), s - 1), t.add((() => a.setNavTheme("")), s), t.add((() => a.setNavTheme("")), i - 1), t.add((() => a.setNavTheme("white")), i), t.add((() => a.setNavTheme("white")), e - 1), t.add((() => a.setNavTheme("purple")), e), t.add((() => a.setNavTheme("purple")), n - 1), t.add((() => a.setNavTheme("")), n), t.add((() => a.setNavTheme("")), d - 1), t.add((() => a.setNavTheme("white")), d)
    }
    t.seek(.001), this.options.tl.add(t, 0)
  }
  onPostResize() {
    this.setupTimeline()
  }
  onDestroy() {
    var e;
    null == (e = this.tl) || e.kill()
  }
}
class qo extends te {
  constructor() {
    super(...arguments), t(this, "options", {}), t(this, "props", {
      active: !1,
      secondLayerActive: () => T().state.secondLayerActive,
      viewport: () => T().state.viewport,
      currentId: ""
    }), t(this, "currentSound", null), t(this, "setMenuActive", (e => {
      var t;
      const s = e ? .3 : 1;
      null == (t = this.currentSound) || t.fade({
        volume: s
      })
    })), t(this, "setVideoOverlay", (e => {
      const t = e ? 0 : 1,
        s = e ? 0 : .3,
        o = e ? 1 : 2;
      i.killTweensOf(this.tweens, "homeVolume"), i.to(this.tweens, {
        homeVolume: t,
        delay: s,
        duration: o,
        onUpdate: this.handleHomeVolumeUpdate
      })
    })), t(this, "handleHomeVolumeUpdate", (() => {
      o.Howler.volume(this.tweens.homeVolume)
    })), t(this, "onSoundEnd", (() => {
      if (!this.props.active) return;
      const e = this.currentSound;
      e.id === this.props.currentId && (e.current = e.loopTrack, e.volume(0), e.current.play("loop"), e.fade({
        duration: 5
      }))
    })), t(this, "onWindUpdate", (() => {
      const e = es(this.tweens.windPr, 1, .8),
        t = es(this.tweens.windPr, 0, .85);
      this.introSound.volume(e), this.windSound.volume(t)
    }))
  }
  async onSetup() {
    this.tweens = {
      windPr: 0,
      homeVolume: 1
    }, this.setupSounds(), this.addEvents()
  }
  addEvents() {
    const {
      app: e
    } = x;
    e && (this.stopMenuActive = p((() => e.showMenu), this.setMenuActive), this.stopVideoOverlay = p((() => !!e.videoOverlay.src), this.setVideoOverlay))
  }
  removeEvents() {
    this.stopMenuActive && this.stopMenuActive(), this.stopVideoOverlay && this.stopVideoOverlay()
  }
  setupSounds() {
    this.sounds = [{
      id: "intro",
      src: "INTROx_song.mp3",
      loop: {
        src: "INTROx_AFTER_loop.mp3",
        start: 27,
        dur: 13710
      }
    }, {
      id: "keep",
      src: "TBL1_song.mp3",
      loop: {
        src: "TBL1_AFTER_loop.mp3",
        start: 27,
        dur: 16e3
      }
    }, {
      id: "factions",
      src: "TBL2_song.mp3",
      loop: {
        src: "TBL2_AFTER_loop.mp3",
        start: 27,
        dur: 21333
      }
    }, {
      id: "universe",
      src: "TBL3_song.mp3",
      loop: {
        src: "TBL3_AFTER_loop.mp3",
        start: 27,
        dur: 21333
      }
    }].map((({
      id: e,
      src: t,
      loop: s
    }) => {
      const n = {
        current: null,
        playLoop: !1,
        id: e
      };
      return n.mainTrack = new o.Howl({
        src: [`/audio/${t}`],
        onend: this.onSoundEnd
      }), n.loopTrack = new o.Howl({
        src: [`/audio/${s.src}`],
        autoplay: !1,
        loop: !0,
        html5PoolSize: 1,
        sprite: {
          loop: [s.start, s.dur, !0]
        }
      }), n.volume = e => {
        n.mainTrack.volume(e), n.loopTrack.volume(e)
      }, n.fade = ({
        duration: e = 1,
        volume: t = 1,
        stop: s = !1
      } = {}) => {
        const o = n.current;
        o.fade(o.volume(), t, 1e3 * e), s && i.delayedCall(e, (() => {
          o.stop()
        }))
      }, n.play = () => {
        n.current.seek(0), n.current.volume(1), n.current.play()
      }, n
    })), this.introSound = this.sounds.find((e => "intro" === e.id)), this.windSound = new o.Howl({
      src: ["audio/FX_Wind.mp3"],
      volume: 0,
      loop: !0,
      sprite: {
        loop: [27, 8571, !0]
      }
    }), this.transitionSound = new o.Howl({
      src: ["audio/FX_TBL_Transition.mp3"]
    })
  }
  setupTimeline() {
    var e;
    null == (e = this.tl) || e.kill();
    const t = this.tl = i.timeline(),
      {
        vw: s,
        vh: o,
        scale: n
      } = T().state,
      a = R("project-story"),
      r = R("keep"),
      l = R("factions"),
      p = R("universe");
    R("launch");
    t.add((() => this.props.currentId = "intro"), 0), t.add((() => this.props.currentId = "intro"), r.props.start + .5 * o - 1), t.add((() => this.props.currentId = "keep"), r.props.start + .5 * o), t.add((() => this.props.currentId = "keep"), l.props.start - 1), t.add((() => this.props.currentId = "factions"), l.props.start), t.add((() => this.props.currentId = "factions"), p.props.start - 1), t.add((() => this.props.currentId = "universe"), p.props.start);
    const c = a.props.end - 2 * o;
    t.fromTo(this.tweens, {
      windPr: 0
    }, {
      windPr: 1,
      duration: o,
      onUpdate: this.onWindUpdate
    }, c), t.to(this.tweens, {
      windPr: 0,
      duration: o,
      onUpdate: this.onWindUpdate
    }, c + o), t.seek(.001), this.options.tl.add(t, 0)
  }
  setCurrentId(e) {
    var t, s;
    if (!this.props.active) return;
    const n = this.sounds.find((t => t.id === e));
    if (!n) return;
    null == (t = this.startDelay) || t.kill(), this.currentSound && (this.currentSound.fade({
      volume: 0,
      stop: !0
    }), !this.transitionPlaying && o.Howler._audioUnlocked && (this.transitionSound.play(), this.transitionPlaying = !0, null == (s = this.transitionDelay) || s.kill(), this.transitionDelay = i.delayedCall(1.5, (() => this.transitionPlaying = !1))));
    const a = this.currentSound ? 1.3 : 0;
    this.startDelay = i.delayedCall(a, (() => {
      n.current = n.playLoop ? n.loopTrack : n.mainTrack, n.play(), n.playLoop = !0, this.currentSound = n
    }))
  }
  onActive() {
    this.windSound.play("loop"), this.currentSound || this.setCurrentId(this.props.currentId)
  }
  offActive({
    firstTrigger: e
  }) {
    e || this.windSound.pause("loop")
  }
  onSecondLayerActive() {
    this.currentSound.fade({
      duration: .2,
      volume: .7
    })
  }
  offSecondLayerActive({
    firstTrigger: e
  }) {
    e || this.currentSound.fade({
      duration: 1,
      volume: 1
    })
  }
  onPostResize() {
    this.setupTimeline()
  }
  onDestroy() {
    var e, t;
    null == (e = this.tl) || e.kill(), null == (t = this.startDelay) || t.kill(), this.sounds.forEach((e => {
      e.mainTrack.unload(), e.loopTrack.unload()
    })), this.sounds = null, this.removeEvents()
  }
}
const Zo = ({
  options: e,
  props: t
}) => re ` <div class="homePage">
  <div
    data-ui="landingRef"
    class="landingRef ref"
  ></div>
  <div
    data-ui="projectIntroRef"
    id="project"
    class="projectIntroRef ref"
  ></div>
  <div
    data-ui="projectStoryRef"
    class="projectStoryRef ref"
  ></div>
  <div
    data-ui="collectionIntroRef"
    class="collectionIntroRef ref"
  ></div>
  <div
    data-ui="collectionGalleryRef"
    class="collectionGalleryRef ref"
  ></div>
  <div
    data-ui="keepRef"
    class="keepRef ref"
  >
    <div
      id="keep"
      class="keepScrollTo"
    ></div>
  </div>
  <div
    data-ui="factionsRef"
    class="factionsRef ref"
  >
    <div
      id="factions"
      class="factionsScrollTo"
    ></div>
  </div>
  <div
    data-ui="universeRef"
    class="universeRef ref"
  >
    <div
      id="universe"
      class="universeScrollTo"
    ></div>
  </div>
  <div
    data-ui="launchRef"
    class="launchRef ref"
  ></div>
</div>`;
class Qo extends te {
  constructor() {
    super(...arguments), t(this, "options", {
      template: Zo
    }), t(this, "props", {
      counter: 0,
      name: "Hello Props",
      active: !0,
      viewport: () => T().state.viewport
    })
  }
  async onSetup() {
    this.tl = new i.timeline({
      paused: !0
    }), this.persistentCard = await (new _s).setup({
      options: {
        tl: this.tl
      },
      props: {
        active: () => this.props.active
      }
    });
    const e = this.setupIntroSound(),
      t = this.setupSections(),
      s = this.setupScenes(),
      [o, n] = await Promise.all([t, s, e]);
    this.sections = o, this.scenes = n, this.setupSceneActives(), this.shellManager = await (new Wo).setup({
      options: {
        tl: this.tl
      }
    }), this.sounds = await (new qo).setup({
      options: {
        tl: this.tl
      }
    }), this.tl.seek(.001, !1)
  }
  setupIntroSound() {
    return new Promise((e => {
      const t = (null == app ? void 0 : app.isFirstEnter) && !os.get("skipIntro") ? "/audio/FX_logo_intro_animation.mp3" : "/audio/FX_ALT_intro_animation.mp3";
      this.introSound = new o.Howl({
        src: [t]
      }), this.introSound.once("load", e)
    }))
  }
  async setupSections() {
    const {
      uiContainer: e,
      canvasContainer: t,
      copy: s
    } = x, i = {
      appendTo: e,
      uiContainer: e,
      tl: this.tl
    }, o = [{
      view: Ps,
      options: {
        triggerEl: this.ui.landingRef
      },
      copyId: "HomeLanding"
    }, {
      view: Us,
      options: {
        triggerEl: this.ui.projectIntroRef
      },
      copyId: "HomeStoryIntro"
    }, {
      view: Ns,
      options: {
        triggerEl: this.ui.projectStoryRef
      },
      copyId: "HomeStoryProject"
    }, {
      view: Gs,
      options: {
        triggerEl: this.ui.collectionIntroRef
      },
      copyId: "HomeCollectionIntro"
    }, {
      view: Qs,
      options: {
        triggerEl: this.ui.collectionGalleryRef
      },
      copyId: "HomeCollectionGallery"
    }, {
      view: Mi,
      options: {
        triggerEl: this.ui.keepRef
      },
      copyId: "HomeTableauxKeep"
    }, {
      view: Ei,
      options: {
        triggerEl: this.ui.factionsRef
      },
      copyId: "HomeTableauxFactions"
    }, {
      view: Di,
      options: {
        triggerEl: this.ui.universeRef
      },
      copyId: "HomeTableauxUniverse"
    }, {
      view: Ui,
      options: {
        triggerEl: this.ui.launchRef,
        appendTo: t
      },
      copyId: "HomeLaunch"
    }];
    return Promise.all(o.map((({
      view: e,
      options: t,
      copyId: s
    }) => (new e).setup({
      options: {
        ...i,
        ...t,
        copy: vs(s)
      }
    }))))
  }
  async setupScenes() {
    const e = {
        persistentCard: this.persistentCard,
        tl: this.tl
      },
      t = [{
        view: zo
      }, {
        view: Yo
      }, {
        view: Ko
      }];
    return Promise.all(t.map((({
      view: t,
      props: s
    }) => (new t).setup({
      options: e,
      props: s
    }))))
  }
  setupSceneActives() {
    const e = R("landing"),
      t = R("project-intro"),
      s = R("project-story"),
      i = R("collection-intro"),
      o = this.scenes[0],
      n = this.scenes[1],
      a = this.scenes[2];
    this.landingSceneActiveEffect = ie((() => e.props.enter || t.props.enter), (e => {
      o.props.active = e
    })), this.projectSceneActiveEffect = ie((() => s.props.enter), (e => {
      n.props.active = e
    })), this.collectionSceneActiveEffect = ie((() => i.props.enter), (e => {
      a.props.active = e
    }))
  }
  show() {
    var e;
    const {
      app: t
    } = x, s = !((null == t ? void 0 : t.isFirstEnter) && !os.get("skipIntro"));
    null == t || t.setEntered(!1);
    const n = s ? 0 : 3,
      a = n + 3,
      r = R("landing"),
      l = this.scenes[0];
    this.sounds.props.active = !0, null == (e = this.persistentCard) || e.show({
      delay: n
    }), l.show({
      skipIntro: s,
      delay: .5,
      maskFlipDelay: n,
      hideKPRDelay: a - .8
    }), this.shellManager.show({
      delay: n + 1.5
    }), o.Howler._audioUnlocked && this.introSound.play(), r.show({
      delay: a
    }), i.delayedCall(a, (() => {
      T().state.scrollPaused = !1, this.prerenderScenes()
    }))
  }
  prerenderScenes() {
    this.scenes.forEach((async e => {
      await P(e.constructor.name, e.scene)
    })), this.sections.forEach((async e => {
      e.scene && await P(e.constructor.name, e.scene)
    }))
  }
  render() {
    var e, t;
    const {
      renderer: s
    } = It.getInstance();
    return s.clear(), null == (e = this.persistentCard) || e.update(), null == (t = this.persistentCard) || t.render(), this.sections.forEach((e => {
      e.props.enter && e.render()
    })), this.scenes.forEach((e => {
      e.props.active && e.render()
    })), null
  }
  setViewport(e) {
    this.sections.forEach((t => t.preResize(e))), this.sections.forEach((t => t.resize(e))), this.scenes.forEach((t => t.resize(e))), oe("postResize", e)
  }
  onPostResize(e) {
    this.persistentCard.resize(e), this.tl.seek(T().state.scroll, !1)
  }
  setScroll(e) {
    this.tl.seek(e, !1)
  }
  onBeforeDestroy() {}
  onDestroy() {
    this.tl.kill(), this.introSound.unload(), this.sections.forEach((e => e.destroy())), this.sections = [], this.scenes.forEach((e => e.destroy())), this.scenes = []
  }
}
Dt(Qo, [ae]);
const Jo = {
  __name: "Home",
  props: {
    story: {
      type: Object,
      required: !0
    }
  },
  emits: ["loaded"],
  setup(e, {
    emit: t
  }) {
    const s = e,
      i = c(null);
    let o = null;
    const {
      app: n
    } = h();
    return d((async () => {
      {
        const {
          $gsap: e,
          $ScrollTrigger: t,
          $ScrollSmoother: i
        } = u(), {
          app: o
        } = h();
        S({
          app: o,
          gsap: e,
          ScrollTrigger: t,
          ScrollSmoother: i,
          scrollSmoother: null == window ? void 0 : window.scroller,
          copy: s.story.content.body
        })
      }
      k().reset(), k().on(b.LOAD_PROGRESS, (e => {
        n.setLoadProgress(e)
      })), k().once(b.LOAD_COMPLETE, (() => {
        n.setLoadProgress(1), t("loaded")
      })), o = await (new ee).setup({
        options: {
          appendTo: i.value,
          component: Qo
        }
      })
    })), p((() => n.pageReady), (e => {
      setTimeout((() => {
        n.toggleScrollerPause(!0)
      }), 10)
    })), m((() => {
      o && (o.destroy(), o = null), k().removeAllListeners(), A()
    })), (e, t) => (f(), v("div", {
      ref_key: "containerRef",
      ref: i,
      class: "home"
    }, null, 512))
  }
};
export {
  Jo as
  default
};