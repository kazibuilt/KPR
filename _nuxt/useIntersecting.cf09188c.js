import{u as e,r as t,j as n,P as o}from"./entry.40e762a9.js";const r=t=>(t=e(t))instanceof HTMLElement?t:t.$el,s=function(e,s={root:null,rootMargin:"0px",threshold:[0,.001]}){const i=t(0),a=t(!1),u=t(!1);let c;const l=()=>{const t=r(e);t&&c.observe(t)},v=()=>{if(!c)return;const t=r(e);t&&c.unobserve(t)};return n((()=>{c=new IntersectionObserver((([e])=>{if(i.value=e.intersectionRatio,e.intersectionRatio>0)return a.value=!0,void(u.value=e.intersectionRatio>=1);a.value=!1}),s),l()})),o(v),{intersectionRatio:i,isIntersecting:a,isFullyInView:u,observe:l,unobserve:v}};export{s as u};
