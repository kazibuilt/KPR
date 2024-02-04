var t=Object.defineProperty,e=(e,i,n)=>(((e,i,n)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n})(e,"symbol"!=typeof i?i+"":i,n),n);import{Q as i,S as n,r as s,j as o,H as h}from"./entry.40e762a9.js";const u={START:"touchstart",MOVE:"touchmove",END:"touchend"};class r{constructor(t){e(this,"_onTouchStart",(t=>{n.mobile?(window.addEventListener("touchmove",this._onTouchMove),window.addEventListener("touchend",this._onTouchEnd)):(window.addEventListener("mousemove",this._onTouchMove),window.addEventListener("mouseup",this._onTouchEnd));let e=t.touches&&t.touches[0]?t.touches[0]:t;this.x=e.pageX/window.innerWidth-.5,this.y=e.pageY/window.innerHeight-.5,this.px=e.pageX,this.py=e.pageY,this.start={x:this.x,y:this.y,px:this.px,py:this.py},this.touching=!0,this.dragging=!1,this.touchStartTime=window.performance.now(),this.emit(u.START,{...this.start,originalEvent:t})})),e(this,"_onTouchMove",(t=>{let e=t.touches&&t.touches[0]?t.touches[0]:t,i=e.pageX/window.innerWidth-.5,n=e.pageY/window.innerHeight-.5,s=e.pageX,o=e.pageY,h={x:i-this.start.x,y:n-this.start.y,px:s-this.start.px,py:o-this.start.py},r={x:(i-this.x)*window.innerWidth,y:(n-this.y)*window.innerHeight,px:s-this.px,py:o-this.py};this.x=i,this.y=n,this.px=s,this.py=o,(Math.abs(r.x)>2||Math.abs(r.y)>2)&&(this.dragging=!0),this.emit(u.MOVE,{x:this.x,y:this.y,start:this.start,diff:r,diffFromStart:h,originalEvent:t})})),e(this,"_onTouchEnd",(t=>{n.mobile?(window.removeEventListener("touchmove",this._onTouchMove),window.removeEventListener("touchend",this._onTouchEnd)):(window.removeEventListener("mousemove",this._onTouchMove),window.removeEventListener("mouseup",this._onTouchEnd));let e=window.performance.now()-this.touchStartTime<1e3&&!this.dragging;this.dragging=!1,this.touching=!1,this.emit(u.END,{x:this.x,y:this.y,isClick:e,originalEvent:t})})),Object.assign(this,i),this.el=t,this.x=null,this.y=null,this.touching=!1,this.listening=!1,this.dragging=!1,this.listen()}listen(){this.listening||(this.listening=!0,n.mobile?this.el.addEventListener("touchstart",this._onTouchStart):this.el.addEventListener("mousedown",this._onTouchStart))}unlisten(){this.listening&&(this.listening=!1,this.touching=!1,n.mobile?(this.el.removeEventListener("touchstart",this._onTouchStart),window.removeEventListener("touchmove",this._onTouchMove),window.removeEventListener("touchend",this._onTouchEnd)):(this.el.removeEventListener("mousedown",this._onTouchStart),window.removeEventListener("mousemove",this._onTouchMove),window.removeEventListener("mouseup",this._onTouchEnd)))}destroy(){this.unlisten(),this.el=null,this.x=null,this.y=null,this.touching=null,this.listening=null}}r.Events=u;const a=function({elRef:t,onTouchStart:e,onTouchMove:i,onTouchEnd:n}){let u=s(),a=s(!1),v=s(!1);const l=function(t){a.value=!0,null==e||e(t)},c=function(t){v.value=!0,null==i||i(t)},d=function(t){a.value=!1,v.value=!1,null==n||n(t)};return o((()=>{u.value=new r(t.value),u.value.addEventListener(r.Events.START,l),u.value.addEventListener(r.Events.MOVE,c),u.value.addEventListener(r.Events.END,d)})),h((()=>{u.value.removeEventListener(r.Events.START,l),u.value.removeEventListener(r.Events.MOVE,c),u.value.removeEventListener(r.Events.END,d)})),{touch:u,isTouching:a,isDragging:v}};export{a as u};
