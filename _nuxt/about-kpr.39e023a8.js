import e from"./dot-caption.f385565b.js";import t from"./dot.36dd12fe.js";import{a,e as s,b as l,j as r,r as i,y as o,z as p,o as c,l as n,m as u,t as d,q as v,w as f,v as y,B as k,C as m,f as x}from"./entry.40e762a9.js";import{u as b}from"./useScrollTrigger.934dab30.js";import"./hacky-text.bd3e68e0.js";import"./link-hover.6073cf81.js";const _=""+new URL("k.57c1349e.svg?inline",import.meta.url).href,g=""+new URL("p.cb132707.svg?inline",import.meta.url).href,w=""+new URL("r.b68bd0a5.svg?inline",import.meta.url).href,h=e=>(k("data-v-f8f6571c"),e=e(),m(),e),j=["layer"],R={class:"frame-container main over-only"},D={class:"intro"},K={class:"item"},I={class:"top"},L={class:"title type-h2"},P={class:"bottom"},C={class:"top"},O={class:"bottom"},S=h((()=>u("span",null,"01_K",-1))),T={class:"title type-h2"},U={class:"desc type-body1"},q={class:"top"},z={class:"bottom"},M=h((()=>u("span",null,"02_P",-1))),$={class:"title type-h2"},B={class:"desc type-body1"},H={class:"top"},W={class:"bottom"},A=h((()=>u("span",null,"03_R",-1))),E={class:"title type-h2"},F={class:"desc type-body1"},G=x(a({__name:"about-kpr",props:{blok:{type:Object,required:!0},layer:{default:"under"}},emits:["loaded"],setup(a,{emit:k}){const m=a,{app:x,browser:h}=s(),{$gsap:G}=l();r((()=>{k("loaded")}));const J=i(null),N=i(null),Q=i(null),V=i(null),X=i(null),Y=i(null),Z=i(null),ee=i(null),te=i(null),ae=i(null),se=i(null),le=i(null),re=i(null),ie=i(null),oe=i(null),pe=i(null),ce=i(null),ne=i(null),ue=i(null);b((()=>{if(h.isMobile)return;if("under"==m.layer)return;let e=new G.timeline({scrollTrigger:{trigger:J.value,start:"top bottom",end:"top top",scrub:!0,marker:!0}}),t=[Y.value,ae.value,ie.value];return e.add("reset"),e.set(t,{y:"25%"},"reset"),e.add("start"),e.to(t,{y:"0%",stagger:.1},"start"),e}));return b((function(){if(h.isMobile)return;if("under"==m.layer)return;let e=new G.timeline({scrollTrigger:{trigger:J.value,start:"top top",end:()=>`top+=${3*h.windowHeight} top`,pin:N.value,pinSpacing:!1,scrub:!0}}),t=Q.value.offsetWidth,a=74*h.fontSize,s=(t-a)/2,l=t/3,r="none";e.add("reset"),e.set(X.value,{opacity:0}),e.set(ne.value,{x:l}),e.set(ue.value,{x:2*l}),e.set(Z.value,{x:0*l,opacity:.1,scale:l/a}),e.set(se.value,{x:1*l,opacity:.1,scale:l/a}),e.set(oe.value,{x:2*l,opacity:.1,scale:l/a}),e.set(ee.value,{x:0*l,opacity:.3}),e.set(le.value,{x:1*l,opacity:.3}),e.set(pe.value,{x:2*l,opacity:.3}),e.set(te.value,{x:0*l,opacity:0}),e.set(re.value,{x:1*l,opacity:0}),e.set(ce.value,{x:2*l,opacity:0}),e.add("k");let i=new G.timeline({paused:!0});i.add("k"),i.to(ne.value,{x:a,ease:r},"k"),i.to(ue.value,{x:a+s,ease:r},"k"),i.to(Z.value,{x:0*l,opacity:1,scale:1,ease:r},"k"),i.to(se.value,{x:a,opacity:.1,scale:s/a,ease:r},"k"),i.to(oe.value,{x:a+s,opacity:.1,scale:s/a,ease:r},"k"),i.to(V.value,{opacity:0,ease:r},"k"),i.to(ee.value,{x:0*l,opacity:0,ease:r},"k"),i.to(le.value,{x:a,ease:r},"k"),i.to(pe.value,{x:a+s,ease:r},"k"),i.to(te.value,{x:0*l,opacity:1,duration:.05,ease:r},"k+=0.5"),i.to(X.value,{opacity:1,duration:.05,ease:r},"k+=0.5"),e.to(i,{progress:1,ease:"power3.inOut"},"k"),e.add("p","+=0.1");let o=new G.timeline({paused:!0});o.add("p"),o.to(ne.value,{x:s,ease:r},"p"),o.to(ue.value,{x:a+s,ease:r},"p"),o.to(Z.value,{x:0*l,opacity:.1,scale:s/a,ease:r},"p"),o.to(se.value,{x:s,opacity:1,scale:1,ease:r},"p"),o.to(ee.value,{x:0,opacity:.3,duration:.45,ease:r},"p+=0.05"),o.to(le.value,{x:s,opacity:0,ease:r},"p"),o.to(te.value,{x:0,opacity:0,duration:.01,ease:r},"p"),o.to(re.value,{x:s,ease:r},"p"),o.to(re.value,{opacity:1,duration:.05,ease:r},"p+=0.5"),e.to(o,{progress:1,ease:"power3.inOut"},"p"),e.add("r","+=0.1");let p=new G.timeline({paused:!0});return p.add("r"),p.to(ue.value,{x:2*s,ease:r},"r"),p.to(se.value,{x:1*s,opacity:.1,scale:s/a,ease:r},"r"),p.to(oe.value,{x:2*s,opacity:1,scale:1,ease:r},"r"),p.to(le.value,{x:s,opacity:.3,duration:.45,ease:r},"r+=0.05"),p.to(pe.value,{x:2*s,opacity:0,ease:r},"r"),p.to(re.value,{x:s,opacity:0,duration:.01,ease:r},"r"),p.to(ce.value,{x:2*s,ease:r},"r"),p.to(ce.value,{opacity:1,duration:.05,ease:r},"r+=0.5"),e.to(p,{progress:1,ease:"power3.inOut"},"r"),e})),(s,l)=>{const r=e,i=t,k=o("editable"),m=o("nav");return p((c(),n("div",{class:"about-kpr",id:"kpr",layer:a.layer,ref_key:"refRoot",ref:J,frame:"light"},[u("div",{class:"pin",ref_key:"refPin",ref:N},[u("div",R,[u("div",D,[u("div",K,[u("div",I,[u("div",L,d(a.blok.intro_title),1),v(r,{class:"type-caption2 subtitle"},{default:f((()=>[y(d(a.blok.intro_subtitle),1)])),_:1})]),u("div",P,[u("div",{class:"desc type-body1",ref_key:"refIntroDesc1",ref:V},d(a.blok.intro_desc),513),u("div",{class:"desc desktop-only type-caption2",ref_key:"refIntroDesc2",ref:X},d(a.blok.intro_desc2),513)])])]),u("div",{class:"kpr",ref_key:"refKpr",ref:Q},[u("div",{class:"divider",ref_key:"refDivider1",ref:ne},null,512),u("div",{class:"divider",ref_key:"refDivider2",ref:ue},null,512),u("div",{class:"item k",ref_key:"refItemK",ref:Y},[u("div",C,[u("img",{class:"letter",ref_key:"refLetterK",ref:Z,src:_},null,512)]),u("div",O,[u("div",{class:"caption type-caption2",ref_key:"refCaptionK",ref:ee},[v(i),S],512),u("div",{class:"details flex-row",ref_key:"refDetailsK",ref:te,justify:"between",items:"start"},[u("div",T,d(a.blok.k_title),1),u("div",U,d(a.blok.k_desc),1)],512)])],512),u("div",{class:"item p",ref_key:"refItemP",ref:ae},[u("div",q,[u("img",{class:"letter",ref_key:"refLetterP",ref:se,src:g},null,512)]),u("div",z,[u("div",{class:"caption type-caption2",ref_key:"refCaptionP",ref:le},[v(i),M],512),u("div",{class:"details flex-row",ref_key:"refDetailsP",ref:re,justify:"between",items:"start"},[u("div",$,d(a.blok.p_title),1),u("div",B,d(a.blok.p_desc),1)],512)])],512),u("div",{class:"item r",ref_key:"refItemR",ref:ie},[u("div",H,[u("img",{class:"letter",ref_key:"refLetterR",ref:oe,src:w},null,512)]),u("div",W,[u("div",{class:"caption type-caption2",ref_key:"refCaptionR",ref:pe},[v(i),A],512),u("div",{class:"details flex-row",ref_key:"refDetailsR",ref:ce,justify:"between",items:"start"},[u("div",E,d(a.blok.r_title),1),u("div",F,d(a.blok.r_desc),1)],512)])],512)],512)])],512)],8,j)),[[k,a.blok],[m,"white"]])}}}),[["__scopeId","data-v-f8f6571c"]]);export{G as default};
