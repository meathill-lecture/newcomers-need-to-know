!function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,t){"use strict";var r=t(1),o=(0,r.getSearchParams)(location.search);Reveal.initialize({history:!0,controls:!("controls"in o)||o.controls,transition:o.transition||"slide",dependencies:[{src:"//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/plugin/highlight/highlight.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}}]}),o.print&&(0,r.load)("//cdnjs.cloudflare.com/ajax/libs/reveal.js/3.5.0/css/print/pdf.css"),o.platform&&document.body.classList.add(o.platform)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSearchParams=function(e){var n={};if(e){e=(e=e.substr(1)).split("&");for(var t=0,r=e.length;t<r;t++){var o=e[t].split("=");isNaN(o[1])||(o[1]=Number(o[1])),/^true|false$/i.test(o[1])&&(o[1]=Boolean(o[1])),n[o[0]]=o[1]}}return n},n.load=function(e){if(/\.css$/.test(e))return n=e,(t=document.createElement("link")).rel="stylesheet",t.type="text/css",t.href=n,document.head.appendChild(t),new Promise(function(e,n){t.onload=e,t.onerror=n});var n,t}}]);