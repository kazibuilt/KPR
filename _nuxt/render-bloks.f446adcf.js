import{a as e,ab as o,e as l,h as t,E as a,o as n,l as r,p as s,c as u,U as d,u as b,ac as k,F as v,f as i}from"./entry.40e762a9.js";import{u as c}from"./useComponentLoad.f16c13de.js";const m=i(e({__name:"render-bloks",props:{blok:{type:Object,required:!0},blokPrev:{},blokNext:{}},emits:["loaded"],setup(e,{emit:i}){const m=e,p=o("story");l();const f=t((()=>{var e;return(null==(e=m.blok)?void 0:e.body)?m.blok.body:m.blok})),x=t((()=>{var e;return(null==(e=f.value)?void 0:e.length)||0})),{count:y,loaded:L,onComponentLoad:_}=c(x.value);a((()=>[y.value,L.value]),(()=>{L.value&&i("loaded")}),{immediate:!0});const h=function(e){if(0==e&&m.blokPrev)return m.blokPrev;let o=e-1;return o>=0?f.value[o]:null},N=function(e){if(e==f.value.length-1&&m.blokNext)return m.blokNext;let o=e+1;return o<=f.value.length-1?f.value[o]:null};return(e,o)=>(n(!0),r(v,null,s(b(f),((o,l)=>(n(),u(k(o.component),d({key:o._uid,story:b(p),blok:o,blokIndex:l,blokPrev:h(l),blokNext:N(l),isLastBlok:l==b(f).length-1,onLoaded:e=>b(_)(`${o.component}-${o._uid}`)},e.$attrs),null,16,["story","blok","blokIndex","blokPrev","blokNext","isLastBlok","onLoaded"])))),128))}}),[["__scopeId","data-v-059b3e8f"]]);export{m as default};
