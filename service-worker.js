if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return o[e]||(i=new Promise((async i=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]}))},i=(i,o)=>{Promise.all(i.map(e)).then((e=>o(1===e.length?e[0]:e)))},o={require:Promise.resolve(i)};self.define=(i,t,s)=>{o[i]||(o[i]=Promise.resolve().then((()=>{let o={};const c={uri:location.origin+i.slice(1)};return Promise.all(t.map((i=>{switch(i){case"exports":return o;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return o.default||(o.default=i),o}))})))}}define("./service-worker.js",["./workbox-cf684d81"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"https://edxmo.github.io/eNote/bundle.js",revision:"55aa80edba01299eb13285fd1408c306"},{url:"https://edxmo.github.io/eNote/bundle.js.LICENSE.txt",revision:"b6ae98c78bcfcf7f2ab74e86b824e4c8"},{url:"https://edxmo.github.io/eNote/images/SVG/back.svg",revision:"d648020dc8433d8736299c85c8bedb50"},{url:"https://edxmo.github.io/eNote/images/SVG/check.svg",revision:"098d32d882c88cb4c403961b70541c9d"},{url:"https://edxmo.github.io/eNote/images/SVG/delete.svg",revision:"5a226e36b139f8e3415d5de7358db0ed"},{url:"https://edxmo.github.io/eNote/images/SVG/loupe.svg",revision:"b2feb1c702b9b4c46343cfc222770c0d"},{url:"https://edxmo.github.io/eNote/images/SVG/more.svg",revision:"5d14e7e5475ebf20459756d6f9b93912"},{url:"https://edxmo.github.io/eNote/images/SVG/notes.svg",revision:"50b96fec571cdec6c6d6992c176cadef"},{url:"https://edxmo.github.io/eNote/images/SVG/plus.svg",revision:"fbcff910ed9a979e6fd1e9e051b531ea"},{url:"https://edxmo.github.io/eNote/images/SVG/settings.svg",revision:"7583439544b337fa43d28992def1579e"},{url:"https://edxmo.github.io/eNote/images/SVG/tick.svg",revision:"c0cbd0847616c5b88e858a5e2abacdbe"},{url:"https://edxmo.github.io/eNote/images/icons/android-icon-192x192.png",revision:"3aa8454e16f804d15cda701491684d3c"},{url:"https://edxmo.github.io/eNote/images/icons/android-icon-36x36.png",revision:"127bac41a1f38881f80de2272006249b"},{url:"https://edxmo.github.io/eNote/images/icons/android-icon-48x48.png",revision:"b93961e26f56e5a7e63213b7b56e8c4d"},{url:"https://edxmo.github.io/eNote/images/icons/android-icon-72x72.png",revision:"a3f9d9e73041939bce5a3b4825319e49"},{url:"https://edxmo.github.io/eNote/images/icons/android-icon-96x96.png",revision:"dc3127510b9c092a0b4b17d36a0cd5ba"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-114x114.png",revision:"dd0a63507a510d943df6cb745cc7ceed"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-120x120.png",revision:"dff1bdfb8f571e396007c11ded150b6f"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-144x144.png",revision:"9d93bd741238c2b57b3e77cbec186f2c"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-152x152.png",revision:"c44fc7d80047bbadf626e70d43e90362"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-180x180.png",revision:"3e5f6766771bfd365793606cfddd4e21"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-57x57.png",revision:"b0c910a1da44ae3a597588d596179359"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-60x60.png",revision:"b14bc1403b3f885705086277a8abd350"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-72x72.png",revision:"a3f9d9e73041939bce5a3b4825319e49"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-76x76.png",revision:"8b306a855491f418ab7015219d91bfad"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon-precomposed.png",revision:"3511bb936e4967789c87e651b3d0114b"},{url:"https://edxmo.github.io/eNote/images/icons/apple-icon.png",revision:"3511bb936e4967789c87e651b3d0114b"},{url:"https://edxmo.github.io/eNote/images/icons/favicon-16x16.png",revision:"a5fdbf9659e8d68ab185381023e4ba51"},{url:"https://edxmo.github.io/eNote/images/icons/favicon-32x32.png",revision:"14fbc11b7269e73681fefbef7c327942"},{url:"https://edxmo.github.io/eNote/images/icons/favicon-96x96.png",revision:"dc3127510b9c092a0b4b17d36a0cd5ba"},{url:"https://edxmo.github.io/eNote/images/icons/favicon.ico",revision:"db786fd987c0aba9cc8f52f4475c478b"},{url:"https://edxmo.github.io/eNote/images/icons/ms-icon-144x144.png",revision:"9d93bd741238c2b57b3e77cbec186f2c"},{url:"https://edxmo.github.io/eNote/images/icons/ms-icon-150x150.png",revision:"f26ce7423bdc960e8f7e79f5dacc9b94"},{url:"https://edxmo.github.io/eNote/images/icons/ms-icon-310x310.png",revision:"23309649a106859cb2177f9549bfdc1b"},{url:"https://edxmo.github.io/eNote/images/icons/ms-icon-70x70.png",revision:"b19661f306dc420b867adb89d29c8fd0"},{url:"https://edxmo.github.io/eNote/index.html",revision:"b1ef24efd6b2ad044aa87023ec8a7fcc"},{url:"https://edxmo.github.io/eNote/manifest.json",revision:"d08e8381d6462ea3707cd02e03b55e27"},{url:"https://edxmo.github.io/eNote/registerServiceWorker.js",revision:"0a8f9bc4f82f37f117c028d2f033bb02"}],{})}));
//# sourceMappingURL=service-worker.js.map
