import{ag as t}from"./entry.40e762a9.js";var e={},o={get exports(){return e},set exports(t){e=t}};function r(t){if(!(this instanceof r))return new r(t);this.currentPath=(t||"")+" ",this.isRelative=!1}var n=r;r.prototype.toString=function(){return this.end()},r.prototype.moveTo=function(){return this._appendData("M",arguments),this},r.prototype.close=r.prototype.closePath=function(){return this._appendData("Z",[]),this},r.prototype.lineTo=function(){return this._appendData("L",arguments),this},r.prototype.horizontalLineTo=function(t){return this._appendData("H",[t]),this},r.prototype.verticalLineTo=function(t){return this._appendData("V",[t]),this},r.prototype.curveTo=function(){return this._appendData("C",arguments),this},r.prototype.smoothCurveTo=function(){return this._appendData("S",arguments),this},r.prototype.bezierCurveTo=function(){return this._appendData("Q",arguments),this},r.prototype.smoothBezierCurveTo=function(){return this._appendData("T",arguments),this},r.prototype.ellipticalArc=function(){return this._appendData("A",arguments),this},r.prototype.relative=function(){return this.isRelative=!0,this},r.prototype.end=function(){return this.currentPath.trim()},r.prototype._appendData=function(t,e){e=Array.prototype.slice.call(e),this.isRelative&&(t=t.toLowerCase(),this.isRelative=!1),this.currentPath+=t+" "+e.join(" ")+" "},o.exports=n;const i=t(e);export{i as P};
