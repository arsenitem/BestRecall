(function(e){function n(n){for(var r,a,c=n[0],i=n[1],s=n[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"88e9e481","chunk-2d21a3d2":"fc2fdfae","chunk-2d2259e5":"35961ca9","chunk-3c33b921":"5479fe74","chunk-a348989a":"f5f621d8"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3c33b921":1,"chunk-a348989a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2086b7":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d2259e5":"31d6cfe0","chunk-3c33b921":"dd9aedfb","chunk-a348989a":"351ce215"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u={name:"App"},c=u,i=(t("034f"),t("2877")),s=Object(i["a"])(c,a,o,!1,null,null,null),l=s.exports,d=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["default"].use(d["a"]);var f=[{path:"/",name:"Login",component:function(){return t.e("chunk-2d2086b7").then(t.bind(null,"a55b"))}},{path:"/home",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"patients",name:"Patients",component:function(){return t.e("chunk-3c33b921").then(t.bind(null,"2887"))}},{path:"card",name:"Card",component:function(){return t.e("chunk-a348989a").then(t.bind(null,"7cd5"))}},{path:"history",name:"History",component:function(){return t.e("chunk-2d2259e5").then(t.bind(null,"e4bb"))}}]}],p=new d["a"]({mode:"history",routes:f}),h=p,m=t("2f62"),b=t("bc3a"),g=t.n(b),y=g.a.create({baseURL:"https://bestrecall.herokuapp.com/"}),v=y;r["default"].use(m["a"]);var k=new m["a"].Store({state:{user:"",analysedAnamnesText:[],riskRating:null},getters:{analysedAnamnesText:function(e){return e.analysedAnamnesText},riskRating:function(e){return e.riskRating}},mutations:{setUser:function(e,n){return e.user=n},setAnalysedAnamnesText:function(e,n){return e.analysedAnamnesText=n},serRiskRating:function(e,n){return e.riskRating=n}},actions:{analyzeAnamnes:function(e,n){v.post("/analyze",n).then((function(n){e.commit("serRiskRating",n.data.risk_rating),e.commit("setAnalysedAnamnesText",n.data.bag_of_words)}))}}}),w=t("5f5b"),A=t("b1e0"),x=t("5140"),T=t.n(x),_=t("5ff8"),O=t.n(_);t("f9e3"),t("2dd8");r["default"].config.productionTip=!1,r["default"].use(w["a"]),r["default"].use(A["a"]),r["default"].use(T.a,{extComponents:O.a,lang:"ru"}),new r["default"]({router:h,store:k,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.cce1a00d.js.map