import e from"./audio-player.56afbafc.js";import{a,e as r,b as s,j as l,h as o,r as t,E as i,o as d,l as u,q as n,u as p,U as m,f as c}from"./entry.40e762a9.js";import"./dot-caption.f385565b.js";import"./dot.36dd12fe.js";import"./hacky-text.bd3e68e0.js";import"./useScrollTrigger.934dab30.js";import"./link-hover.6073cf81.js";import"./audio-bar-wave.04aa41d2.js";import"./useRaf.5395a270.js";import"./useTouch.fea93067.js";const f=c(a({__name:"media-audio",props:{blok:{type:Object,required:!0},layer:{}},emits:["loaded"],setup(a,{emit:c}){const f=a,{app:y,browser:j}=r();s(),l((()=>{c("loaded")}));const b=o((()=>{if(f.blok.title)return f.blok.title;let e=f.blok.asset.filename.replace(/^.*[\\\/]/,"");return e=e.replace(/\.[^/.]+$/,""),e=e.replaceAll("-"," "),e=e.replaceAll("_"," "),e})),k=t(null),_=function(){y.setMediaPlaying(f.blok._uid)};return i((()=>y.mediaPlaying),(()=>{var e;y.mediaPlaying!=f.blok._uid&&(null==(e=k.value)||e.pause())})),(r,s)=>{const l=e;return d(),u("div",m({class:"media-audio"},r.$attrs,{class:[`media-audio-layer-${a.layer}`]}),[n(l,{ref_key:"refAudioPlayer",ref:k,name:p(b),src:a.blok.asset.filename,onPlay:_},null,8,["name","src"])],16)}}}),[["__scopeId","data-v-1c326fdf"]]);export{f as default};
