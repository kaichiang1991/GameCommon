(function(e){function t(t){for(var r,o,c=t[0],i=t[1],f=t[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(l.length)l.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={BN80:0},a={BN80:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-73be3efa":"d8eb3da6","chunk-478e57d8":"bc21b88c","chunk-6608de13":"b54c29bb","chunk-9a84418e":"cc66dbba"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-73be3efa":1,"chunk-478e57d8":1,"chunk-6608de13":1,"chunk-9a84418e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-73be3efa":"af093e93","chunk-478e57d8":"8eb9e44e","chunk-6608de13":"8eb9e44e","chunk-9a84418e":"dfd67aa2"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],d=f.getAttribute("data-href");if(d===r||d===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),n(u)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;f=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=d;u.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(e,t,n){e.exports=n("67f1")},"67f1":function(e,t,n){"use strict";n.r(t);n("aaa5"),n("450d");var r=n("a578"),o=n.n(r),a=(n("1951"),n("eedf")),u=n.n(a),c=(n("10cb"),n("f3ad")),i=n.n(c),f=(n("826b"),n("c263")),d=n.n(f),l=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=n("4360"),p=n("9923"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Main")},b=[],m=n("5530"),v=n("2f62"),g=n("b175"),y={name:"BN80",components:{Main:g["a"]},data:function(){return{gameToken:"79fcfdb73cf54c81966e8a895db3d8e6"}},computed:Object(m["a"])({},Object(v["b"])({openMode:function(e){return e.openMode}})),created:function(){this.openMode,0}},k=y,w=n("2877"),O=Object(w["a"])(k,h,b,!1,null,"0e050497",null),j=O.exports;l["default"].config.productionTip=!1,l["default"].use(d.a),l["default"].use(i.a),l["default"].use(u.a),l["default"].use(o.a),new l["default"]({store:s["a"],i18n:p["a"],render:function(e){return e(j)}}).$mount("#app")}});