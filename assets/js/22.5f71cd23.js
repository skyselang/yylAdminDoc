(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{279:function(t,e,n){},309:function(t,e,n){"use strict";n(279)},333:function(t,e,n){"use strict";n.r(e);var i=n(11),s={data:()=>({bgImg:"",opacity:.5}),mounted(){let{bodyBgImg:t,bodyBgImgOpacity:e,bodyBgImgInterval:n=15}=this.$themeConfig;if("string"===Object(i.n)(t))this.bgImg=t;else if("array"===Object(i.n)(t)){let e=0,i=null;this.bgImg=t[e],clearInterval(i),i=setInterval(()=>{if(++e>=t.length&&(e=0),this.bgImg=t[e],t[e+1]){(new Image).src=t[e+1]}},1e3*n)}void 0!==e&&(this.opacity=e)}},c=(n(309),n(8)),a=Object(c.a)(s,(function(){return(0,this._self._c)("div",{staticClass:"body-bg",style:`background: url(${this.bgImg}) center center / cover no-repeat;opacity:${this.opacity}`})}),[],!1,null,null,null);e.default=a.exports}}]);