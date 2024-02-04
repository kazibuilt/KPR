import e from"./media.20a994eb.js";import a from"./dot-caption.f385565b.js";import t from"./btn-play.5d254a1b.js";import s from"./video-overlay.ae5db8f4.js";import{a as l,e as o,b as i,r,K as n,h as p,j as d,Z as u,N as m,aD as c,ap as v,E as h,y as f,o as k,l as y,z as b,U as j,u as g,q as w,M as _,m as x,c as M,w as D,v as I,t as A,A as H,ar as R,F as C,f as E}from"./entry.40e762a9.js";import{u as P}from"./useIntersecting.cf09188c.js";import{g as T}from"./Video.9ad8bfd5.js";import"./dot.36dd12fe.js";import"./hacky-text.bd3e68e0.js";import"./useScrollTrigger.934dab30.js";import"./link-hover.6073cf81.js";import"./pause.9e304ffb.js";import"./circle.f3c698f2.js";import"./btn-close.617c7166.js";import"./hover-sfx.01594b28.js";import"./close-stroke.cb61bb4d.js";import"./useTouch.fea93067.js";import"./useRaf.5395a270.js";const U=["src","poster","playsinline","loop"],V={class:"overlay full"},$={key:1,class:"video-duration type-caption2 desktop-only"},q=E(l({__name:"media-video",props:{blok:{type:Object,required:!0},layer:{}},emits:["loaded","show"],setup(l,{emit:E}){const q=l,{app:z,browser:K}=o();i();const N=r(null),O=r(null),S=n(N),W=p((()=>q.blok.playsinline)),B=p((()=>{if(q.blok.title)return q.blok.title;let e=q.blok.asset.filename.replace(/^.*[\\\/]/,"");return e=e.replace(/\.[^/.]+$/,""),e=e.replaceAll("-"," "),e=e.replaceAll("_"," "),e})),F=p((()=>{var e;return K.isMobile||W.value||!(null==(e=q.blok.poster)?void 0:e.filename)?"video":"image"})),Q=r(null);d((async()=>{Q.value=q.blok.poster.filename;let e=q.blok.asset.filename;const a=await(t=e,new Promise((e=>{const a=document.createElement("video");a.onloadedmetadata=()=>{e({width:a.videoWidth,height:a.videoHeight})},a.src=t})));var t;X.width=a.width,X.height=a.height,G(),await u(),E("loaded")}));let X=m({width:1,height:1});p((()=>X.height>X.width));const Z=r(c(400,800)),G=function(){let e=c(400,800),a=X.width/X.height,t=.59*K.windowHeight*a;t=Math.min(t,800),e=Math.min(e,t),e=Math.floor(e),Z.value=e},J=r("0:00");v((async()=>{var e;J.value=await T(null==(e=q.blok.asset)?void 0:e.filename)}));const L=r(!1),Y=r(null),ee=function(){W.value?E("show"):K.isDesktop?(L.value=!0,z.setMediaPlaying(q.blok._uid)):Y.value.play()},ae=function(){L.value=!1},{isIntersecting:te}=P(N);return h((()=>te.value),(()=>{W.value&&(te.value?Y.value.play():Y.value.pause())})),(o,i)=>{var r,n;const p=e,d=a,u=t,m=s,c=f("editable");return k(),y(C,null,[b((k(),y("div",j({class:"media-video"},o.$attrs,{style:{width:`${g(Z)}px`},ref_key:"refRoot",ref:N,onClick:ee,class:[l.blok.is_white?"isWhite":""]}),[b(w(p,{ref_key:"refImage",ref:O,path:g(Q)},null,8,["path"]),[[_,"image"==g(F)]]),b(x("video",{class:"full object-cover",ref_key:"refVideo",ref:Y,src:null==(r=l.blok.asset)?void 0:r.filename,poster:l.blok.poster.filename,playsinline:!!g(W)||null,loop:!!g(W)||null,muted:""},null,8,U),[[_,"video"==g(F)]]),x("div",V,[g(K).isDesktop?(k(),M(d,{key:0,class:"type-caption2",externalHovering:g(S)},{default:D((()=>[I(A(g(B)),1)])),_:1},8,["externalHovering"])):H("",!0),!g(W)&&g(K).isDesktop?(k(),y("div",$,"DURATION: "+A(g(J)),1)):H("",!0),g(W)?H("",!0):(k(),M(u,{key:2}))])],16)),[[c,l.blok]]),(k(),M(R,{to:"body"},[g(L)?(k(),M(m,{key:0,title:l.blok.title,src:null==(n=l.blok.asset)?void 0:n.filename,onClose:ae},null,8,["title","src"])):H("",!0)]))],64)}}}),[["__scopeId","data-v-561637da"]]);export{q as default};
