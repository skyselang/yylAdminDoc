if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.dc9472be.css",revision:"dbf890c957a993faaea959fb45d7f6b7"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/28.ad7211b2.js",revision:"d676c849159e4ca8b75dad0950bd63d8"},{url:"assets/js/29.dc84eab9.js",revision:"9ebadb479d39d1733e6085719ffecdde"},{url:"assets/js/30.e033f00f.js",revision:"62b7daeab9de055d788e83c5d3ef3417"},{url:"assets/js/31.f796986f.js",revision:"daa917de3d722ac6d3d5f5e762e0d6da"},{url:"assets/js/32.7e541491.js",revision:"89b23b6cb39ab6e1ff6386a0c49f6197"},{url:"assets/js/33.32b0de5d.js",revision:"5b4cd7828c07c3c95103dd8749679ddb"},{url:"assets/js/34.a26694fc.js",revision:"03b61d9b49fd75fe7beffbd0b1aacbd3"},{url:"assets/js/app.0f7a800e.js",revision:"3a72c60c446d1ddfb060fdfb8fba9d19"},{url:"assets/js/layout-Blog.60af96ab.js",revision:"afe2c187220e33c83ddee4619609d128"},{url:"assets/js/layout-Layout.9e26acae.js",revision:"affe4f6f4a9e0118ee856ad58209e00d"},{url:"assets/js/layout-NotFound.436040a7.js",revision:"34e2075480b615def5a64fe4ddde048b"},{url:"assets/js/layout-Slide.98184ec6.js",revision:"5cd21dbe12d1a1e0af801a8064c0d7b7"},{url:"assets/js/mermaid.64594bfe.js",revision:"f796fd92f1272ee870030179375b5a3e"},{url:"assets/js/page-yylAdmin.5c38262c.js",revision:"05ee9cc2e66747d422ef3037c229a91c"},{url:"assets/js/page-介绍.b73a1ec0.js",revision:"3ebd003237a3dd84eaeb28d4860b742b"},{url:"assets/js/page-基础.7488b76e.js",revision:"0018fac26a9cf0eef986f83a79fb9ae2"},{url:"assets/js/page-安装.6edbcef8.js",revision:"77f1235a57c5d3916a1cd36435ad5d2b"},{url:"assets/js/page-常见问题.85c73d6f.js",revision:"7f888678afc9383ae7a2f6b85c629c74"},{url:"assets/js/page-接口文档调试.0831c51b.js",revision:"40c03fbdbdbd3b664da5a9862cba10b8"},{url:"assets/js/page-教程.4485be64.js",revision:"8ca1c3dccfa333858a6d19aa19b9c5dc"},{url:"assets/js/page-新增功能.dc5dd7ef.js",revision:"c23eceac06085f588d19dda2b1edf5d3"},{url:"assets/js/page-添加前台接口.5f44ae6b.js",revision:"96151e13bc74a840af7a118b77b54786"},{url:"assets/js/page-添加后台接口.2d213a0d.js",revision:"aa2df7611470c8cd6f2dfe7826cf4ddf"},{url:"assets/js/page-添加后台页面.d85ed88f.js",revision:"9069f1693bf2f034fdf25c63c6daf956"},{url:"assets/js/page-目录.ca4fac3a.js",revision:"924163cfb0dfff46d34e4527eabca1f0"},{url:"assets/js/page-配置.29911350.js",revision:"b062a2680cd1a251b805efa78f52e108"},{url:"assets/js/page-鸣谢.22fa907e.js",revision:"2867f77a0ecaf071dda6cbfe4c98a2d4"},{url:"assets/js/vendors~flowchart.ba20d02d.js",revision:"3461c0cde80df7d71131631b4d641727"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d88d709a.js",revision:"5817cd34b2bd6d93c1586f7f7004223a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.705cfb1e.js",revision:"e5e351b829c9cbbdefe40edae956a012"},{url:"assets/js/vendors~layout-Layout.d224e0f6.js",revision:"aa305a22096aa71a33bfca9741036b5f"},{url:"assets/js/vendors~mermaid.7dcef07f.js",revision:"c4f713a9016b4e8b77e637e9a524ee53"},{url:"assets/js/vendors~photo-swipe.a9c3ec35.js",revision:"65f6cde37fa704e14d6359369957c1e4"},{url:"assets/js/vendors~reveal.57346d83.js",revision:"b73dbd0b478a34bb555542b3222dd9f9"},{url:"logo.svg",revision:"c9028322ca6439991dcff8e8ddb09c23"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"bcdd34a2cb8a78ab79030c79456ef331"},{url:"config/index.html",revision:"eed2ba303fe6d87d7b9e6643a4cd2003"},{url:"course/index.html",revision:"57b6df8389693c493a6fb4eb2605c6f0"},{url:"fqa/index.html",revision:"b3ecf2210268b02d3375f21eb7364e2a"},{url:"guide/base/index.html",revision:"4d56cb1627db6c7b7ad82e1fe5b9167f"},{url:"guide/catalog/index.html",revision:"8115214f4188163e76713be29d89ba3f"},{url:"guide/index.html",revision:"f5a4f5417ea080a78e63735b6ffb30e3"},{url:"guide/install/index.html",revision:"81ed90ccaaa258689e349afd8e8d8cd8"},{url:"guide/thank/index.html",revision:"90e2de5684398b2914a73a6bf3e9e5ea"},{url:"index.html",revision:"55a0ecea08460f36bfcdfc3a95e0f965"},{url:"use/adminapi/index.html",revision:"7cd1cbb1efeca6a9bf57d74199ed8050"},{url:"use/adminpage/index.html",revision:"ac93333bba48dc82d23670941e6f89bc"},{url:"use/apidoc/index.html",revision:"7ce0ba6299aa8387ddce8e4cb71e8954"},{url:"use/index.html",revision:"c9b00c3ca211342c66815db9b43ff4cd"},{url:"use/indexapi/index.html",revision:"bf8234cef4d8b19dbee04c4a0737fd91"},{url:"apidoc.png",revision:"85e04688fae9e510603ea5f97d348a5b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1a6d3c634fd05538560765ff25be35e"}],{}),e.cleanupOutdatedCaches()}));
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
