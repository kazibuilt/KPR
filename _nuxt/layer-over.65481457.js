import{a as s,b as r,e,ah as a,r as l,o,l as t,m as c,G as f,u as n,s as u,f as i}from"./entry.40e762a9.js";import{u as p}from"./useScrollTrigger.934dab30.js";import{u as d}from"./useRaf.5395a270.js";const m=i(s({__name:"layer-over",setup(s){const{$ScrollTrigger:i}=r(),{app:m,debug:v}=e();a("layer","over");const g=l(null),y=l(null);p((function(){return i.create({trigger:g.value,start:"top top",end:()=>`top+=${document.body.scrollHeight} bottom`,pin:y.value,pinSpacing:!1,scrub:!0})}));const _=l(null);return d((()=>{let s=m.scrollTop();_.value.style.transform=`translateY(${-s}px)`})),(s,r)=>(o(),t("div",{class:"layer-over",ref_key:"refRoot",ref:g},[c("div",{class:"pin full",ref_key:"refPin",ref:y},[c("div",{class:f(["mask full",[`mask-${n(v).mask||"clip"}`]])},[c("div",{class:"scroll",ref_key:"refScroll",ref:_},[u(s.$slots,"default",{},void 0,!0)],512)],2)],512)],512))}}),[["__scopeId","data-v-df9c31fb"]]);export{m as default};