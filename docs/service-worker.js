if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.0c401ea1.css",revision:"3a9cd63f56b9d78a6542ffa56070addd"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/31.f789aabd.js",revision:"16ed28fa0f69781889710d4989c12983"},{url:"assets/js/32.b873ae24.js",revision:"9333f7fe5569d1ba9b947900098b6682"},{url:"assets/js/33.437bad02.js",revision:"b15d5dbcb41d0e9a96adcb88c3df923f"},{url:"assets/js/34.6cfdd2e5.js",revision:"c8e776cb44724e428f61abe767376163"},{url:"assets/js/35.6593cd22.js",revision:"c861c1e70c6bd1baaa4ccdf6fbfd5c44"},{url:"assets/js/36.ac8ce24b.js",revision:"bb8b2d2e148b3054768745dc2d554c1d"},{url:"assets/js/app.6bb886c0.js",revision:"6abca4efe4ce35d2bfdfba69a870e833"},{url:"assets/js/layout-Blog.03ee8832.js",revision:"85ab04804d5985b1196a9b2313e31fba"},{url:"assets/js/layout-Layout.fe4fa39f.js",revision:"97b6ee8368f2ee242c8d97d7260778f8"},{url:"assets/js/layout-NotFound.daa7bcf7.js",revision:"7d4fd83c0d913456e46492d2a561b719"},{url:"assets/js/layout-Slide.38409e5e.js",revision:"0d3a66ba40a918aff1193d40157e29ff"},{url:"assets/js/mermaid.e8586cf7.js",revision:"ea58a8a36367db33c0ecab28e8434540"},{url:"assets/js/page-yylAdmin.62dd5dba.js",revision:"2be68ac46f6cbee69c27c8d59dea4588"},{url:"assets/js/page-yylAdmin前后端部署到同一域名.902358a0.js",revision:"5b2d67bcbaa37adc915d598ff97029f0"},{url:"assets/js/page-介绍.cbb6a94b.js",revision:"b5975e4f02608571f240b979cfbb034e"},{url:"assets/js/page-刷新后台权限.d77448bf.js",revision:"11470735e50e000628c60d9e0eeb4e2a"},{url:"assets/js/page-基础.2c40bd85.js",revision:"ffc12585aedb39ad2c8ed3a0af3949d0"},{url:"assets/js/page-安装.edbd2d80.js",revision:"d095521e7010a1ed38d17b3d293a9453"},{url:"assets/js/page-常见问题.e6fbcd4a.js",revision:"001c30f4e76333d4ab1d8293cd0f78a0"},{url:"assets/js/page-接口文档调试.9039dd35.js",revision:"eff7262f26b6e954fa2dbea5ecacdfb9"},{url:"assets/js/page-教程.06c54cd2.js",revision:"56eea196ddc9f32ff0539adf87b599fe"},{url:"assets/js/page-新增功能.c25e100b.js",revision:"2d4fff601472afeb67af090836cc5bb1"},{url:"assets/js/page-添加前台接口.13fd482b.js",revision:"47e9f5d787b09bffc9505d4be86c5eb0"},{url:"assets/js/page-添加后台接口.6a1558ac.js",revision:"6677adfc0fe62f0c0c26da7b6a4390ba"},{url:"assets/js/page-添加后台页面.89561ec0.js",revision:"8a062ef6b93edfe033809a937a1b1c21"},{url:"assets/js/page-目录.949aa812.js",revision:"1aba79f2b31ac63492f212479dea511a"},{url:"assets/js/page-跨域问题.9567fdd9.js",revision:"f873316894730398d73d9b4167f946c5"},{url:"assets/js/page-配置.c1dd148f.js",revision:"868c1db2bb614e0682d65884d2be54d1"},{url:"assets/js/page-鸣谢.0be54ade.js",revision:"29f00b3ba5b06176a547b6765d00e622"},{url:"assets/js/vendors~flowchart.45da89d4.js",revision:"61d35f1ccb21db6ff339de7153d465c3"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.018e19c3.js",revision:"fa0eda342fab3cf07d5ee58629a5c609"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.4737b1c8.js",revision:"1132adfe4313de36f7d72c48fe0fcd30"},{url:"assets/js/vendors~layout-Layout.c0960030.js",revision:"3a14a72eb8cdf63dabe589b73b0acbf0"},{url:"assets/js/vendors~mermaid.1b29627e.js",revision:"2b515f372fa26afe6ce0bc845a1e0aeb"},{url:"assets/js/vendors~photo-swipe.14405777.js",revision:"f864aeeac8959f6e24d2f439c8097787"},{url:"assets/js/vendors~reveal.b373204a.js",revision:"2d84051b4b533eb7f26be723560b9b33"},{url:"logo.svg",revision:"c9028322ca6439991dcff8e8ddb09c23"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"7b441cbb6bf616dd9b0e6e93955ba91b"},{url:"config/index.html",revision:"5f9290b06f3a3adc7152ef013b9bb648"},{url:"course/index.html",revision:"9dba2d8c61ebd7371eaf82678821e742"},{url:"course/same-domain-name/index.html",revision:"dbc13e372e85c4d4f7a7138d3b94dc3c"},{url:"fqa/cross-domain/index.html",revision:"645136ef2b96fd0ca85385dbf1d86345"},{url:"fqa/index.html",revision:"01fffc31d730c757a53f06611c30be86"},{url:"guide/base/index.html",revision:"250f9858643f16d9b57c45aa3cc2091a"},{url:"guide/catalog/index.html",revision:"c8aa3ad4ac25c911d8f9c4fcd05eed5d"},{url:"guide/index.html",revision:"5f31a42b0cc15cb5ed8e52561b8ef9fb"},{url:"guide/install/index.html",revision:"67f181b3f8c3fea7c71aaabc10e648e6"},{url:"guide/thank/index.html",revision:"d498233555cb54cde57fc4060b916bae"},{url:"index.html",revision:"89ff2bffa27f55fdcd81c935084501d4"},{url:"use/adminapi/index.html",revision:"b167cabac6291e0a13d5d8ee9ee26ad6"},{url:"use/adminpage/index.html",revision:"ff370c9137a5e72abb26e294519c9ef8"},{url:"use/adminrule/index.html",revision:"7ffa101323ade4e7c7dd8995f19abcb1"},{url:"use/apidoc/index.html",revision:"fd057623dfa1c1046caa7879eb626923"},{url:"use/index.html",revision:"2785b37598200c419abf8ce6f1d598bc"},{url:"use/indexapi/index.html",revision:"3b0c5819ceecbdf675717c23252abc98"},{url:"assets/icon/apple-icon-152.png",revision:"4681736dd42d191b9a64dc0b34464518"},{url:"assets/icon/chrome-192.png",revision:"8b2d5a2ca672492d53f5519ae98812d0"},{url:"assets/icon/chrome-512.png",revision:"bb924c8cda1d4fcdba94bd468b8912f2"},{url:"assets/icon/chrome-mask-192.png",revision:"8b2d5a2ca672492d53f5519ae98812d0"},{url:"assets/icon/chrome-mask-512.png",revision:"bb924c8cda1d4fcdba94bd468b8912f2"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2c4e29e229b217c511011289f9a27564"},{url:"image/course/same-domain-name/1-env-prod.png",revision:"18efd7a126199e5f265743a807511e11"},{url:"image/course/same-domain-name/2-vue-config-js.png",revision:"b941bdb09ab5594980e3fdee4c1ffa3d"},{url:"image/course/same-domain-name/3-copy-yyladmin-public.png",revision:"910b2f2f50dc9b1622ba61aa3d8b7275"},{url:"image/course/same-domain-name/4-localhost-open.png",revision:"a42eb3ec88562d5d0f0b264a64c5287c"},{url:"image/course/same-domain-name/5-pro-open.png",revision:"63bca78d244d00115c25e063c13104b0"},{url:"image/use/adminapi.jpg",revision:"b0f9edf3ff1dbec93cc682a7c462598e"},{url:"image/use/adminmenu.jpg",revision:"afa2f5143100300836bc27a8e1f02cc7"},{url:"image/use/adminrole.jpg",revision:"0495bd9e2ac8e419a72960a3923476d4"},{url:"image/use/adminwebapi.jpg",revision:"269c0260946131794aff6dbfbc27a589"},{url:"image/use/adminweblogout.jpg",revision:"464c4d372246f039b23e6c58c367505d"},{url:"image/use/adminwebpage.jpg",revision:"8c3820d2849a24dff8be1125af3b934b"},{url:"image/use/adminwebrouter.jpg",revision:"38cc57466819f547b4e39396472a438c"},{url:"image/use/apidoc.png",revision:"85e04688fae9e510603ea5f97d348a5b"},{url:"image/use/apidocadmin.jpg",revision:"08d694c0468dffadfc3fe674c5c119bf"},{url:"image/use/apidocindex.jpg",revision:"1c4a7652e406b70cb9c7a08723a11a91"},{url:"image/use/indexapi.jpg",revision:"c930c53b1ec6804857a82694e1eefd07"},{url:"image/use/indexapirule.jpg",revision:"0eef12cfb6f07ceb1d0b8dff7ba928d9"},{url:"image/use/indexapiunauth.jpg",revision:"8c7326d0f84ba489fdc57026c8963e60"},{url:"logo.png",revision:"b1a6d3c634fd05538560765ff25be35e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
