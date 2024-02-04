import e from"./dot-caption.f385565b.js";import l from"./btn-close.617c7166.js";import{a,e as s,b as t,j as n,r as o,aj as u,E as r,L as c,h as i,aA as d,N as v,ak as m,o as f,l as p,m as y,u as k,q as h,w as b,v as g,t as j,G as x,c as M,J as T,A as w,z as _,M as $,B as C,C as E,f as S}from"./entry.40e762a9.js";import{u as R}from"./useTouch.fea93067.js";import{u as F}from"./useRaf.5395a270.js";import{I as L,a as P}from"./pause.9e304ffb.js";import"./dot.36dd12fe.js";import"./hacky-text.bd3e68e0.js";import"./useScrollTrigger.934dab30.js";import"./link-hover.6073cf81.js";import"./hover-sfx.01594b28.js";import"./close-stroke.cb61bb4d.js";const U=""+new URL("audio-on.7c7aaf3e.svg?inline",import.meta.url).href,X=""+new URL("audio-off.cce427cc.svg?inline",import.meta.url).href,q=""+new URL("fullscreen.342f5cf0.svg?inline",import.meta.url).href,A=e=>(C("data-v-c2cbabd5"),e=e(),E(),e),B={class:"video-overlay full fixed"},D=["src","muted"],I=A((()=>y("div",{class:"darken darken-top"},null,-1))),O=A((()=>y("div",{class:"darken darken-bottom"},null,-1))),W={class:"frame w-full h-full"},z={class:"title"},G={class:"bottom"},J=[A((()=>y("div",{class:"gradient"},null,-1)))],K={class:"time"},N={class:"duration"},Q={class:"icon center-img",src:U},Y={class:"icon center-img",src:X},H=[A((()=>y("img",{src:q},null,-1)))],V=S(a({__name:"video-overlay",props:{title:{},src:{}},emits:["close"],setup(a,{emit:C}){const{app:E,browser:S}=s();t(),n((()=>{fe(),se()}));const U=o(null),X=o(0),q=o(null);o(!1),o(!1);const A=o(!0),{x:V,y:Z}=u();let ee;const le=function(){clearTimeout(ee),ee=setTimeout((()=>{A.value=!1}),2e3)};n(le),r((()=>[V.value,Z.value]),(()=>{A.value=!0,le()}));const ae=o(!1),se=function(){var e,l;U.value&&(U.value.paused?null==(e=U.value)||e.play():null==(l=U.value)||l.pause())},te=function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()},ne=function(){var e;null==(e=document.exitFullscreen)||e.call(document),C("close")},oe=o(null),{elementX:ue,elementWidth:re,isOutside:ce}=c(oe),ie=o(0),de=function(e){let l=ue.value/re.value;U.value.currentTime=l*U.value.duration,U.value.paused&&U.value.play()};R({elRef:oe,onTouchMove:de,onTouchEnd:de}),F((()=>{U.value&&(X.value=U.value.currentTime,ie.value=U.value.currentTime/U.value.duration)}));const ve=i((()=>{if(null==X.value)return;return`${Math.floor(X.value/60)}:${Math.floor(X.value%60).toString().padStart(2,"0")}`})),me=i((()=>{if(null==q.value)return;return`${Math.floor(q.value/60)}:${Math.floor(q.value%60).toString().padStart(2,"0")}`})),fe=function(){var e;(null==(e=U.value)?void 0:e.readyState)>=1&&(q.value=U.value.duration)};d("Escape",(()=>{ne()}));const pe=o(null),ye=o(null),{elementX:ke,elementY:he,isOutside:be}=c(pe),ge=v({x:new m({ease:.4}),y:new m({ease:.4})});F((()=>{ge.x.update(ke.value),ge.y.update(he.value),ye.value.style.transform=`translate(${ge.x.current}px, ${ge.y.current}px)`}));const je=function(e){!document.fullscreenElement&&S.isMobile&&ne()},xe=function(){S.isDesktop||ne()};return(s,t)=>{const n=e,o=l;return f(),p("div",B,[y("video",{class:"full object-cover",src:a.src,ref_key:"refMedia",ref:U,onLoadeddata:fe,onPlay:t[0]||(t[0]=e=>ae.value=!0),onPause:t[1]||(t[1]=e=>ae.value=!1),muted:k(E).isMuted,onFullscreenchange:je,onWebkitendfullscreen:xe},null,40,D),y("div",{class:x(["controls full",{show:k(S).isDesktop&&k(A)}])},[I,O,y("div",W,[y("div",z,[h(n,{class:"type-caption2"},{default:b((()=>[g(j(a.title||"video"),1)])),_:1})]),h(o,{onClick:t[2]||(t[2]=e=>ne())}),y("div",{class:"top",ref_key:"refTop",ref:pe,onClick:t[3]||(t[3]=e=>se())},[y("div",{class:"mouse-pos",ref_key:"refMousePos",ref:ye},[y("div",{class:x(["cursor relative",{hide:k(be)}])},[k(ae)?(f(),M(k(P),{key:1})):(f(),M(k(L),{key:0,class:"icon-play"}))],2)],512)],512),y("div",G,[y("button",{class:"btn-play",onClick:t[4]||(t[4]=e=>se())},[k(ae)?(f(),M(k(P),{key:1})):(f(),M(k(L),{key:0}))]),y("div",{class:"bar type-caption2",ref_key:"refBar",ref:oe},[y("div",{class:"progress",style:T({transform:`translateX(${100*k(ie)-100}%)`})},J,4),y("div",K,j(k(ve)),1),y("div",N,j(k(me)),1),k(ce)?w("",!0):(f(),p("div",{key:0,class:"hover-line",style:T({transform:`translateX(${k(ue)}px)`})},null,4))],512),y("button",{class:"btn-audio",onClick:t[5]||(t[5]=e=>k(E).toggleMute())},[_(y("img",Q,null,512),[[$,!k(E).isMuted]]),_(y("img",Y,null,512),[[$,k(E).isMuted]])]),y("div",{class:"btn-full",onClick:te},H)])])],2)])}}}),[["__scopeId","data-v-c2cbabd5"]]);export{V as default};
