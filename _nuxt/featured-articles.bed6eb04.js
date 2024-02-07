import e from"./media.20a994eb.js";import a from"./parallax-image.2a47334f.js";import t from"./dot.36dd12fe.js";import l from"./fade-text.dc6fad95.js";import s from"./hacky-text.bd3e68e0.js";import r from"./link-hover.6073cf81.js";import i from"./link-arrow.b081a0d0.js";import{_ as o}from"./nuxt-link.6ec7a40c.js";import n from"./icon-next.009aa529.js";import d from"./icon-prev.58f92ece.js";import{a as u,e as c,b as f,r as v,j as m,i as p,h as g,E as x,Y as h,y as b,o as y,l as _,u as k,q as j,w,F as I,p as A,m as X,z as T,M as $,T as M,A as C,v as S,t as H,G as L,c as U,W as q,B as P,C as F,f as R}from"./entry.40e762a9.js";import{u as Y}from"./useComponentLoad.f16c13de.js";import{u as z}from"./useScrollTrigger.934dab30.js";import{_ as B,a as E}from"./bottom-0.faa1e436.js";import{d as O}from"./dayjs.min.34102b5f.js";import{g as D}from"./Storyblok.57ca1dcc.js";import"./next.c6e616d1.js";const G=e=>(P("data-v-f4214549"),e=e(),F(),e),J={key:0,class:"bg under-only w-full"},K={class:"darken"},W=q('<div class="mask-top" data-v-f4214549><div class="spacer" data-v-f4214549></div><img src="'+B+'" data-v-f4214549><div class="white" data-v-f4214549></div></div><div class="mask-bottom" data-v-f4214549><div class="white" data-v-f4214549></div><img src="'+E+'" data-v-f4214549><div class="spacer" data-v-f4214549></div></div>',2),Z={class:"content full frame-container over-only"},N={class:"inner w-full h-full relative"},Q={class:"date type-caption2"},V={key:0,class:"pagination"},ee={class:"bottom"},ae={class:"left"},te={class:"links"},le={class:"read type-caption2 flex-row"},se=G((()=>X("div",{class:"label"},"Read Story",-1))),re={key:0,class:"right"},ie=R(u({__name:"featured-articles",props:{articles:{},layer:{}},emits:["loaded"],setup(u,{expose:q,emit:P}){const F=u,{app:R,browser:B,storyblok:E}=c(),{$gsap:G,$ScrollTrigger:ie}=f(),oe=v(null),ne=v(null),de=[];m((()=>{for(let e=0;e<ue.value.length;e++)de.push({scaleX:1,x:0,brightness:1})}));const ue=p(),ce=p(),fe=g((()=>{var e;return(null==(e=F.articles)?void 0:e.length)||0})),{count:ve,loaded:me,onComponentLoad:pe}=Y(fe.value);x((()=>[ve.value,me.value]),(()=>{me.value&&P("loaded")}),{immediate:!0});const ge=g((()=>F.articles.filter((e=>{var a;return null==(a=null==e?void 0:e.content.body)?void 0:a.find((e=>"ArticleHero"==e.component))})))),xe=function(e){var a;return null==(a=null==e?void 0:e.content.body)?void 0:a.find((e=>"ArticleHero"==e.component))},he=function(e){if(!e)return;let a=e.first_published_at||e.published_at||e.created_at;return O(a).format("DD.MM.YY")};q({animateIn:function(e=0){ne.value.animateIn(e)}});const be=function(){if(ke.value)return;let e=R.featuredArticleIdx;e++,e>ge.value.length-1&&(e=0),R.featuredArticleIdx=e},ye=function(){if(ke.value)return;let e=R.featuredArticleIdx;e--,e<0&&(e=ge.value.length-1),R.featuredArticleIdx=e},_e=function(e){const a=ue.value[e],t=ce.value[e],l=de[e];a.style.transform="translate("+l.x+"%, 0) scale("+l.scaleX+", 1)",t.style.transform="translate("+1*-l.x+"%, 0) scale("+1/Math.max(.01,l.scaleX)+", 1)",t.style.filter="brightness("+l.brightness+")"},ke=v(!1);x((()=>R.featuredArticleIdx),(async(e,a)=>{ke.value=!0;let t=new G.timeline;t.add("start");let l=e>a?1:-1;var s;0==e&&a==ge.value.length-1&&(l=1),e==ge.value.length-1&&0==a&&(l=-1),ue.value[e].style.zIndex=2,ue.value[a].style.zIndex=1,t.fromTo(de[e],{brightness:1.5},{brightness:1,duration:1.5,ease:"sine.inOut",onUpdate:_e,onUpdateParams:[e]},"start"),t.to(de[a],{brightness:.2,ease:"sine.inOut"},"start"),1==l?(t.fromTo(de[a],{scaleX:1,x:0},{scaleX:0,x:-50,ease:"quad.in",onUpdate:_e,onUpdateParams:[a]},"start"),t.fromTo(de[e],{scaleX:0,x:50},{scaleX:1,x:0,ease:"quad.out"},"start")):(t.fromTo(de[a],{scaleX:1,x:0},{scaleX:0,x:50,ease:"quad.in",onUpdate:_e,onUpdateParams:[a]},"start"),t.fromTo(de[e],{scaleX:0,x:-50},{scaleX:1,x:0,ease:"quad.out"},"start")),await(s=450,new Promise((e=>setTimeout(e,s)))),ke.value=!1}));const je=v(null),{isSwiping:we,direction:Ie}=h(je),Ae=v(!1);x((()=>[we.value,Ie.value]),(()=>{we.value?Ae.value||(Ae.value=!0,"LEFT"==Ie.value?be():ye()):Ae.value=!1}));const Xe=v(B.isMobile);return z((()=>{if(!B.isMobile)return ie.create({trigger:oe.value,start:()=>`top top+=${oe.value.getBoundingClientRect().top-100}px`,onEnter:()=>{Xe.value=!0},onLeaveBack:()=>{Xe.value=!1}})})),(c,f)=>{const v=e,m=a,p=t,g=l,x=s,h=r,q=i,P=o,F=n,Y=d,z=b("hover");return y(),_("div",{class:"featured-articles",ref_key:"refRoot",ref:oe},["under"==u.layer||k(B).isMobile?(y(),_("div",J,[j(m,{full:!0,scale:1.2,maskAnimation:!0,disabled:"over"==u.layer,ref_key:"refParallax",ref:ne},{default:w((()=>[(y(!0),_(I,null,A(k(ge),((e,a)=>(y(),_("div",{class:"move full",ref_for:!0,ref:k(ue).set},[X("div",{class:"counterscale full",ref_for:!0,ref:k(ce).set},[j(v,{class:"full object-cover",blok:xe(e).hero,onLoaded:a=>k(pe)(`FeaturedArticles-${e.uuid}`)},null,8,["blok","onLoaded"])],512)],512)))),256))])),_:1},8,["scale","disabled"]),j(M,{name:"fade"},{default:w((()=>[T(X("div",K,null,512),[[$,k(Xe)]])])),_:1}),W])):C("",!0),j(M,{name:"fade"},{default:w((()=>[T(X("div",Z,[X("div",N,[X("div",{class:"swipe-target flex-1",ref_key:"refSwipeTarget",ref:je},null,512),(y(!0),_(I,null,A(k(ge),((e,a)=>T((y(),_("div",Q,[S("Featured"),j(p),S(H(he(e)),1)],512)),[[$,a==k(R).featuredArticleIdx]]))),256)),k(ge).length>1?(y(),_("div",V,[(y(!0),_(I,null,A(k(ge),((e,a)=>(y(),_("div",{class:L(["dot",{active:a==k(R).featuredArticleIdx}])},null,2)))),256))])):C("",!0),X("div",ee,[X("div",ae,[X("div",te,[(y(!0),_(I,null,A(k(ge),((e,a)=>T((y(),U(P,{class:"link",href:k(D)(e.full_slug)},{default:w((()=>[a==k(R).featuredArticleIdx?(y(),U(g,{key:0,class:"title type-h1",appearOnMounted:!0},{default:w((()=>[S(H(e.name),1)])),_:2},1024)):C("",!0),X("div",le,[j(h,{externalHovering:k(R).hovering==`featured-article-${e._uid}`},{default:w((()=>[j(x,{externalHovering:k(R).hovering==`featured-article-${e._uid}`},{default:w((()=>[se])),_:2},1032,["externalHovering"])])),_:2},1032,["externalHovering"]),j(q,{class:"link-arrow"})])])),_:2},1032,["href"])),[[$,a==k(R).featuredArticleIdx],[z,`featured-article-${e._uid}`]]))),256))])]),k(ge).length>1?(y(),_("div",re,[X("div",{class:"btn btn-next relative",onClick:be},[j(F,{class:"icon"})]),X("div",{class:"btn btn-prev relative",onClick:ye},[j(Y,{class:"icon"})])])):C("",!0)])])],512),[[$,k(Xe)]])])),_:1})],512)}}}),[["__scopeId","data-v-f4214549"]]);export{ie as default};