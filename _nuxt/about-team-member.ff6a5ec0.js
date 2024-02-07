import e from"./dot-caption.f385565b.js";import{_ as l}from"./nuxt-link.6ec7a40c.js";import a from"./media.20a994eb.js";import{o as t,l as s,m as r,a as o,b as n,e as i,j as u,h as c,r as v,L as f,E as d,y,z as m,q as k,w as b,t as p,c as g,u as h,v as x,A as w,G as _,ak as j,B as M,C,f as $}from"./entry.40e762a9.js";import{u as H}from"./useIntersecting.cf09188c.js";import{u as O}from"./useRaf.5395a270.js";import"./dot.36dd12fe.js";import"./hacky-text.bd3e68e0.js";import"./useScrollTrigger.934dab30.js";import"./link-hover.6073cf81.js";const B=""+new URL("twitter.2862a3ee.svg?inline",import.meta.url).href,I=""+new URL("artstation.0a2bb312.svg?inline",import.meta.url).href,T={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 8"},q=[r("path",{d:"M.5 1.684 5.667 6.85l.354.354.354-.354.235-.236-1.528-1.537.113-.113L1.207.977.5 1.684ZM7.55 4.26l.705.71 3.287-3.287-.707-.707L7.55 4.26Z","clip-rule":"evenodd"},null,-1)];const L={render:function(e,l){return t(),s("svg",T,q)}},R=e=>(M("data-v-e0832093"),e=e(),C(),e),S={class:"name type-h2"},z={class:"job type-caption3"},X={class:"number type-caption3 desktop-only"},P={key:0,class:"card"},U={class:"bg full"},Y={class:"info full"},Z={class:"name type-h2"},A=R((()=>r("img",{class:"icon",src:B},null,-1))),D={class:"tag type-caption3"},E=R((()=>r("img",{class:"icon",src:I},null,-1))),G={class:"tag type-caption3"},K=$(o({__name:"about-team-member",props:{blok:{type:Object,required:!0},layer:{},number:{},show:{}},emits:["loaded","click","close"],setup(o,{emit:M}){const C=o,{$gsap:$}=n(),{app:B,browser:I}=i();u((()=>{M("loaded")}));const T=c((()=>{if(!C.blok.twitter)return;return`https://twitter.com/${C.blok.twitter.replace("@","")}`})),q=c((()=>{if(!C.blok.artstation)return;return`https://artstation.com/${C.blok.artstation.replace("/","")}`})),R=c((()=>T.value?T.value:q.value?q.value:null)),K=v(null),W=v(null),F=v(null),J=v(null),N=v(null),Q=v(null),V=v(null),ee=v(null),le=v(null),ae=v(null),{elementX:te,elementY:se,elementWidth:re,elementHeight:oe,isOutside:ne}=f(W),ie=c((()=>te.value/re.value-.5)),ue=c((()=>se.value/oe.value-.5)),ce=c((()=>!ne.value)),ve={y:0},fe=function(){M("click")},de=function(){M("close")};d((()=>ce.value),(()=>{"under"!=C.layer&&(ce.value?function(){const e=.6,l=Math.abs(ye.x.velocity)>Math.abs(ye.y.velocity)?1:0,a=l*Math.sign(ye.x.velocity),t=(1-l)*Math.sign(ye.y.velocity);K.value.style.zIndex="2";const s=[Q.value,V.value,N.value,le.value];for(let r of s)$.killTweensOf(r);$.fromTo(Q.value,{y:-100*t+"%",x:-100*a+"%",scale:.9},{duration:e,y:"0%",x:"0%",scale:1,ease:"quint.out"}),$.fromTo(V.value,{y:100*t+"%",x:100*a+"%",scale:.9},{duration:e,y:"0%",x:"0%",scale:1,ease:"quint.out"}),$.fromTo(ve,{y:0},{duration:1.2,y:1,ease:"quad.out"}),$.to(N.value,{duration:e,scale:1})}():function(){K.value.style.zIndex="1";const e=Math.abs(ye.x.velocity)>Math.abs(ye.y.velocity)?1:0;let l=e*Math.sign(ye.x.velocity),a=(1-e)*Math.sign(ye.y.velocity);0==l&&0==a&&(a=1);const t=[Q.value,V.value,N.value,le.value];for(let s of t)$.killTweensOf(s);$.to(Q.value,{duration:.1,y:100*a+"%",x:100*l+"%",scale:1,ease:"sine.in"}),$.to(V.value,{duration:.1,y:-100*a+"%",x:-100*l+"%",scale:1,ease:"sine.in"}),$.to(N.value,{duration:.1,scale:.8})}())}));let ye={x:new j({ease:.1}),y:new j({ease:.1})},me={x:new j({ease:.25}),y:new j({ease:.25})};const{isIntersecting:ke}=H(K);return O((()=>{var e,l;const a=performance.now()/1e3;le.value&&(le.value.style.transform=`translate(0px, ${-100*ve.y-150*ue.value+10*Math.sin(a)}%)`),ye.x.update(60*ie.value),ye.y.update(60*ue.value),me.x.update(30*-ue.value+5*Math.sin(a)),me.y.update(30*ie.value+5*Math.cos(a)),(null==(e=F.value)?void 0:e.style)&&(null==(l=J.value)?void 0:l.style)&&(F.value.style.transform=`translate(${ye.x.current}px, ${ye.y.current}px)`,J.value.style.transform=` rotateX(${me.x.current+30*(1-ve.y)}deg) rotateY(${me.y.current}deg)`)}),{delegate:ke}),(n,i)=>{const u=e,c=l,v=a,f=y("editable");return m((t(),s("div",{class:_(["about-team-member relative",{show:o.show}]),ref_key:"refBlock",ref:K},[k(c,{class:"content full",ref_key:"refRoot",ref:W,href:h(I).isDesktop?h(R):null,target:"_blank",onClick:fe},{default:b((()=>[r("div",S,p(o.blok.name),1),r("div",z,[o.blok.job?(t(),g(u,{key:0,externalHovering:h(ce)},{default:b((()=>[x(p(o.blok.job),1)])),_:1},8,["externalHovering"])):w("",!0)]),k(h(L),{class:_(["chevron mobile-only",{flip:o.show}])},null,8,["class"]),r("div",X,p(C.number.toString().padStart(3,"0")),1)])),_:1},8,["href"]),h(I).isMobile||"over"==o.layer?(t(),s("div",P,[r("div",{class:"position full",ref_key:"refCardPosition",ref:F},[r("div",{class:"scale full",ref_key:"refCardScale",ref:N},[r("div",{class:"rotation full",ref_key:"refCardRotation",ref:J},[r("div",{class:"mask-outer full",ref_key:"refCardOuter",ref:Q},[r("div",{class:"mask-inner full",ref_key:"refCardInner",ref:V},[r("div",U,[r("div",{class:"bg-inner full",ref_key:"refBg",ref:ee},[k(v,{class:"hero",blok:o.blok.hero},null,8,["blok"])],512),r("div",{class:"bg-overlay-mask",ref_key:"refBgOverlayMask",ref:ae},[r("div",{class:"bg-overlay full",ref_key:"refBgOverlay",ref:le},null,512)],512)]),r("div",Y,[r("div",{class:"close full mobile-only",onClick:de}),r("div",Z,p(o.blok.name),1),o.blok.job?(t(),g(u,{key:0,class:"job type-caption3",externalHovering:h(ce)},{default:b((()=>[x(p(o.blok.job),1)])),_:1},8,["externalHovering"])):w("",!0),o.blok.details?(t(),g(u,{key:1,class:"detail type-caption3",externalHovering:h(ce)},{default:b((()=>[x(p(o.blok.details),1)])),_:1},8,["externalHovering"])):w("",!0),o.blok.twitter?(t(),g(c,{key:2,class:"twitter",href:h(I).isMobile?h(R):null,target:"_blank"},{default:b((()=>[A,r("div",D,"@"+p(o.blok.twitter),1)])),_:1},8,["href"])):o.blok.artstation?(t(),g(c,{key:3,class:"artstation",href:h(I).isMobile?h(R):null,target:"_blank"},{default:b((()=>[E,r("div",G,"@"+p(o.blok.artstation),1)])),_:1},8,["href"])):w("",!0)])],512)],512)],512)],512)],512)])):w("",!0)],2)),[[f,o.blok]])}}}),[["__scopeId","data-v-e0832093"]]);export{K as default};