import{a1 as t,a as e,aa as o,r as a,E as s,j as r,o as n,l as c,u as p,c as i,A as d,G as v,Z as m,f as u}from"./entry.40e762a9.js";var f=function(t,e,o){if(!e.hasOwnProperty(o)){var a=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,a)}};const h={props:{template:String,parent:Object,templateProps:{type:Object,default:function(){return{}}}},render:function(){if(this.template){var e=this.parent||this.$parent,o=e.$data;void 0===o&&(o={});var a=e.$props;void 0===a&&(a={});var s=e.$options;void 0===s&&(s={});var r=s.components;void 0===r&&(r={});var n=s.computed;void 0===n&&(n={});var c=s.methods;void 0===c&&(c={});var p=this.$data;void 0===p&&(p={});var i=this.$props;void 0===i&&(i={});var d=this.$options;void 0===d&&(d={});var v=d.methods;void 0===v&&(v={});var m=d.computed;void 0===m&&(m={});var u=d.components;void 0===u&&(u={});var h={$data:{},$props:{},$options:{},components:{},computed:{},methods:{}};Object.keys(o).forEach((function(t){void 0===p[t]&&(h.$data[t]=o[t])})),Object.keys(a).forEach((function(t){void 0===i[t]&&(h.$props[t]=a[t])})),Object.keys(c).forEach((function(t){void 0===v[t]&&(h.methods[t]=c[t])})),Object.keys(n).forEach((function(t){void 0===m[t]&&(h.computed[t]=n[t])})),Object.keys(r).forEach((function(t){void 0===u[t]&&(h.components[t]=r[t])}));var l=Object.keys(h.methods||{}),y=Object.keys(h.$data||{}),$=Object.keys(h.$props||{}),O=Object.keys(this.templateProps),b=y.concat($).concat(l).concat(O),j=(g=e,w={},l.forEach((function(t){return f(g,w,t)})),w),k=(E=[h.$data,h.$props,j,this.templateProps],P={},E.forEach((function(t){t&&Object.getOwnPropertyNames(t).forEach((function(e){return f(t,P,e)}))})),P);return t({template:this.template||"<div></div>",props:b,computed:h.computed,components:h.components,provide:this.$parent.$.provides?this.$parent.$.provides:{}},Object.assign({},k))}var E,P,g,w}},l=u(e({__name:"render-rich-text",props:{document:{type:Object,required:!0},styled:{default:!0}},emits:["loaded"],setup(t,{emit:e}){const u=t,f=o();f.setComponentResolver(((t,e)=>`<component \n            :blok='${JSON.stringify(e)}'\n            :is="'${t}'">\n          </component>`));const l=a(null),y=async function(){l.value=f.richTextResolver.render(u.document),await m(),e("loaded")};return s((()=>u.document),y),r((()=>{y()})),(e,o)=>(n(),c("div",{class:v(["richtext",{styled:t.styled}])},[p(l)?(n(),i(p(h),{key:0,template:p(l)},null,8,["template"])):d("",!0)],2))}}),[["__scopeId","data-v-b53be460"]]);export{l as default};