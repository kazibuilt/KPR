import{a as e,e as t,b as a,r as o,j as n,o as r,l as s,m as l,s as i,t as p,u,f}from"./entry.40e762a9.js";import{u as c}from"./useRaf.5395a270.js";import{u as d}from"./useScrollTrigger.934dab30.js";const m=f(e({__name:"console-text",props:{externalHovering:{},scrollAppear:{default:!1},autoAppear:{default:!1},autoAppearSpeed:{default:1},autoAppearBlinks:{default:.75}},emits:["loaded"],setup(e,{expose:f,emit:m}){const g=e;t();const{$gsap:A,$SplitText:v,$ScrollTrigger:_}=a(),k=o(null),x=o(null),y=o(null);o([]);const S=o();let T="",b=[],h=0,j=!1;const $={inLine:0,at:0,glitch:0,lines:[]};n((function(){T=y.value.innerText,b=T.split("\n");for(let e of b)h+=e.length;g.autoAppear&&M(g.autoAppearSpeed,g.autoAppearBlinks),S.value=""}));const B=function(){const e=Math.floor(performance.now()/80)%2;let t=Math.floor($.at);for(let o in b){const e=b[o];$.lines[o]=e.substring(0,t),t-=e.length}let a=$.lines.join("\n");e&&t&&(a+="_"),S.value=a};c((()=>{j&&B()}));const w=function(){j=!1,B()};let I=!1;g.scrollAppear&&d((()=>_.create({trigger:y.value,triggerAction:"play none none none",toggleActions:"play none none none",start:"center bottom",onEnter:()=>{I||(I=!0,M(g.autoAppearSpeed,g.autoAppearBlinks))}})));const M=function(e=1,t=.75){j=!0,A.killTweensOf($),S.value="",A.fromTo($,{at:0},{at:h,ease:"linear",onComplete:w,duration:.04*h*1*e,delay:t})};return f({animateIn:function(e=1,t=.75){M(e,t)}}),(e,t)=>(r(),s("div",{class:"console-text relative",ref_key:"refRoot",ref:k},[l("div",{class:"spacer",ref_key:"refSpacer",ref:y},[i(e.$slots,"default",{},void 0,!0)],512),l("div",{class:"animation",ref_key:"refAnimation",ref:x},p(u(S)),513)],512))}}),[["__scopeId","data-v-7ef52b1b"]]);export{m as default};
