var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var o=n(2),r=n.n(o)()((function(e){return e[1]}));r.push([e.i,'body{display:grid;width:100%;margin:0;padding:0;grid-template-rows:60px 1fr;grid-gap:0;justify-content:center;background:#ebebcd;font-family:-apple-system, BlinkMacSystemFont, sans-serif}@media only screen and (min-width: 451px){#app{grid-template-columns:repeat(2, 1fr);display:grid;grid-auto-rows:minmax(auto, auto);height:100vh;background:#ebebcd;color:black;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald", sans-serif}}@media only screen and (max-width: 450px){#app{grid-template-columns:repeat(1, 1fr);display:grid;grid-auto-rows:minmax(auto, auto);height:100vh;background:#ebebcd;color:black;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald", sans-serif}}#holder{display:flex;flex-flow:row wrap;align-items:center;padding:0;margin:0;justify-content:center;text-align:center;width:80%}#holderImg{display:flex;flex-flow:row wrap;align-items:center;padding:0;margin:0;justify-content:center;text-align:center;width:80%;height:auto;object-fit:cover}.entry{background:rgba(14,99,226,0.4)}#entryHolder{border-collapse:collapse;width:50%;margin-bottom:10px}th{justify-content:center;align-items:center;padding:0 0 0 10px}#date{display:flex;justify-content:center;align-items:center;padding:0 0 0 10px}#city{display:flex;justify-content:center;align-items:center;padding:0 0 0 10px}#temp{display:flex;justify-content:center;align-items:center;padding:0 0 0 50px}#content{display:flex;justify-content:center;align-items:center;padding:0 0 0 10px}#headline{font-size:35px;font-weight:bold;color:#3813df;text-decoration:underline}.title{font-size:27px;margin-bottom:10px;font-weight:bold}label{display:block;font-size:27px;margin-bottom:10px}input{display:block;height:60px;width:100%;background:black;color:yellow;font-size:20px;font-family:"Oswald", sans-serif;border:none;justify-content:center;text-align:center}input:hover{background-color:#4caf50;color:white}#generate{margin-top:15px;width:50%}button{width:50%;height:60px;background:blue;color:yellow;font-size:26px;font-family:"Oswald", sans-serif;border:none;box-shadow:2px 4px 5px #444}button:hover{background-color:#4caf50;color:white}textarea{background:black;height:100px;color:yellow;font-size:20px;font-family:"Oswald", sans-serif}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#f0d43a;font-family:"Oswald", sans-serif}:-ms-input-placeholder{color:#f0d43a;font-family:"Oswald", sans-serif}::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald", sans-serif}\n',""]),t.a=r},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:y(f,t),references:1}),o.push(d)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,g=0;function y(e,t){var n,o,r;if(t.singleton){var a=g++;n=m||(m=s(t)),o=f.bind(null,n,a,!1),r=f.bind(null,n,a,!0)}else n=s(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"performActionGeoname",(function(){return o})),n.d(t,"checkForName",(function(){return s})),n.d(t,"handleSubmitApp",(function(){}));const o=document.getElementById("generate").addEventListener("click",(function(e){const t=document.getElementById("zip").value,n=document.getElementById("depDate").value,o=document.getElementById("endDate").value,s=Date.now()/1e3,d=new Date(n).getTime()/1e3,u=new Date(o).getTime()/1e3,f=Math.round((d-s)/86400),p=Math.round((u-d)/86400);r("http://api.geonames.org",t,"vacaauto3").then(e=>{a("https://api.weatherbit.io/v2.0/forecast/daily?",t,"feec0427dfbf4e879f4f58e95f6626f6").then(n=>{i("https://pixabay.com/api/","21617916-cb494d32b89647fabfb7fa206",t).then(t=>{let o={appLat:e.geonames[0].lat,appLng:e.geonames[0].lng,appCtry:e.geonames[0].countryName,appTemp:n.data[0].high_temp,appImg:t.hits[0].webformatURL,appdaysLeft:f,apptripLen:p};console.log(o),c("/add",o).then(()=>{l()})})})})}));const r=async(e,t,n)=>{const o=await fetch(e+"/searchJSON?q="+t+"&maxRows=10&username="+n);try{const e=await o.json();return console.log(e),e}catch(e){console.log("error",e)}},a=async(e,t,n)=>{const o=await fetch(e+"city="+t+"&key="+n);try{const e=await o.json();return console.log(e),e}catch(e){console.log("error",e)}},i=async(e,t,n)=>{const o=await fetch(e+"?key="+t+"&q="+n+"+city&image_type=photo");try{const e=await o.json();return console.log(e),e}catch(e){console.log("error",e)}},c=async(e="",t={})=>{console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("error",e)}},l=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log(t),document.getElementById("Lat").innerHTML=t.appLat,document.getElementById("Lng").innerHTML=t.appLng,document.getElementById("Ctry").innerHTML=t.appCtry,document.getElementById("Temp").innerHTML=t.appTemp,document.getElementById("daysLeftUI").innerHTML=t.appdaysLeft,document.getElementById("tripLenUI").innerHTML=t.apptripLen,document.getElementById("img").src=t.appImg}catch(e){console.log("error",e)}};function s(e){console.log("::: Running checkForName :::",e);let t=[A-Za-z];return!!e.match(t)}var d=n(1),u=n.n(d),f=n(0),p={insert:"head",singleton:!1};u()(f.a,p),f.a.locals;console.log(o),console.log(s),console.log("All good!!")}]);