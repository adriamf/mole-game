if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),f={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-088bfcc4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/mole-game.webmanifest",revision:"b8969481789954a5fa3c3aa31f58f795"},{url:"assets/mole.png",revision:"19e28299df7c6dccbbe27fa72691e497"},{url:"d70875ff.js",revision:"371dec296ca92cb9c2464fc586c97177"},{url:"index.html",revision:"6eab708009b7fffa1988ded92db0f586"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map