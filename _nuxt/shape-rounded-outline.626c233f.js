import{f as t,e,b as o,r,j as s,E as n,X as a,o as i,l as u,q as l,u as h}from"./entry.40e762a9.js";import{B as d}from"./button-base.f7922683.js";const c=t({__name:"shape-rounded-outline",props:{active:{default:!1},rollover:{default:!1}},emits:["loaded","hover","unhover"],setup(t,{emit:c}){const p=t;e();const{$gsap:f,$ScrollTrigger:v}=o(),g=r(null);let w=null,b=null;const m={height:0,width:0,dropdown:0,cornerCutSize:0};s((()=>{b=g.value.querySelector(".path"),w=g.value.querySelector(".svgBase")}));n((()=>p.active),(t=>{})),n((()=>p.rollover),(t=>{const e=t?0:12;f.killTweensOf(m),f.to(m,{cornerCutSize:e,ease:"quint.out",duration:.4,onUpdate:S})}));a(g,(t=>{const{width:e,height:o}=t[0].contentRect;m.width=Math.round(e),m.height=Math.round(o),w.setAttribute("width",m.width+"px"),w.setAttribute("height",m.height+"px"),w.setAttribute("viewBox","0 0 "+m.width+" "+m.height),f.set(m,{cornerCutSize:12}),S()}));const S=function(){let t="";const e=m.cornerCutSize,o=m.width,r=m.height*(1+m.dropdown);t+=L("M",0,4,0,0,5,0),t+=L("L",o-4,0,o,0,o,4),e>4?(t+=L("L",o,r-e-2,o-0,r-e-1,o-2,r-e+2),t+=L("L",o-e+4,r-4,o-e+1,r-1,o-e-2,r)):t+=L("L",o,r-4,o,r,o-4,r),t+=L("L",4,r,0,r,0,r-4),t+="L 0 4",b.setAttribute("d",t)},L=function(t,e,o,r,s,n,a){return t+" "+e+" "+o+" Q "+r+" "+s+", "+n+" "+a};return(t,e)=>(i(),u("div",{class:"btnOutline",ref_key:"refRoot",ref:g},[l(h(d),{class:"svgBase"})],512))}},[["__scopeId","data-v-fa2781be"]]);export{c as default};