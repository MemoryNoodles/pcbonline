(window.webpackJsonp=window.webpackJsonp||[]).push([[46,43],{1555:function(t,e,n){},1866:function(t,e,n){"use strict";n(1555)},2030:function(t,e,n){"use strict";n.r(e);var r=n(684),c=n(462),o=n(81),l={name:"search-list",components:{SHeader:r.default},props:{keyword:{type:String,default:null}},data:function(){return{list:[]}},watch:{keyword:function(t){t&&this.getList(this,t)}},methods:{getList:Object(c.a)((function(t,e){var n=t;n.$emit("setStatus","loading"),n.$axios.get("https://www.pcbonline.com/"+"/v1/search/keyword?keyword=".concat(e)).then((function(t){var data=t.data.data;data=Object(o.c)(data,["articleTitle","articleDescribe"],e),n.list=data,n.$emit("setStatus",data.length>0?"done":"empty")}))}),500,!0),redirectResView:function(){this.$router.push({path:"/search-result?keyword=".concat(this.keyword)}),window.location.href="/search-result?keyword=".concat(this.keyword)},redirectArticle:function(t){var e=t.articleName,n=t.id,r=t.articleType,c=["","blog","help"],o={blog:"/blog/".concat(e,".html"),help:"/support/home/"};if(window.localStorage.setItem("isFeedBack",!1),"blog"===c[r])this.$router.push({name:"blog-id",params:{id:e+".html"}});else{var l=o[c[r]];window.localStorage.setItem("article",n),window.location.href=l}}}},d=(n(1866),n(6)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-list"},[n("s-header",{attrs:{info:"RELATED BLOG ("+t.list.length+")"}}),t._v(" "),n("div",{staticClass:"list-box"},t._l(t.list,(function(e){return n("div",{key:e.id,staticClass:"article-li animated fadeInDownBig",on:{click:function(n){return t.redirectArticle(e)}}},[n("div",{staticClass:"lef"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{loading:"lazy",src:e.articleImg,alt:""}})])]),t._v(" "),n("div",{staticClass:"rig"},[n("span",{staticClass:"article-title",domProps:{innerHTML:t._s(e.articleTitle)}}),t._v(" "),n("span",{staticClass:"article-time"},[t._v(t._s(e.articleTime))]),t._v(" "),n("span",{staticClass:"article-content",domProps:{innerHTML:t._s(e.articleDescribe)}})])])})),0),t._v(" "),n("div",{staticClass:"bot-fix",on:{click:function(e){return t.redirectResView()}}},[t._v("\n    VIEW ALL RESULTS FOR PCB\n    "),n("i",{staticClass:"el-icon-caret-right"})])],1)}),[],!1,null,"4851cda8",null);e.default=component.exports},462:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(79),n(25);var r=n(1),c=function(t,time,e,n){var r;return function(){for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];if(clearTimeout(r),n){var d=!r;r=setTimeout((function(){r=null}),time),d&&t.apply(e,o)}else r=setTimeout((function(){t.apply(e,o)}),time)}};r.default.component("Debounce",{abstract:!0,props:["time","events","immediate"],created:function(){this.eventKeys=this.events&&this.events.split(",")},render:function(){var t=this,e=this.$slots.default[0];return this.eventKeys||(this.eventKeys=Object.keys(e.data.on)),this.eventKeys.forEach((function(n){e.data.on[n]=c(e.data.on[n],t.time,e,t.immediate)})),e}})},544:function(t,e,n){},684:function(t,e,n){"use strict";n.r(e);var r={name:"s-header",props:{info:{type:String,default:"Hot Searches"},loading:{type:Boolean,default:!1}}},c=(n(691),n(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-header"},[t.loading?[n("div",{staticClass:"animate-box"},[t._m(0),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("defs",[n("filter",{attrs:{id:"goo"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"17",result:"blur"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -6",result:"goo"}}),t._v(" "),n("feBlend",{attrs:{in:"SourceGraphic",in2:"goo"}})],1)])])])]:[t._v("\n    "+t._s(this.info)+"\n  ")]],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blobs"},[n("div",{staticClass:"blob active"}),t._v(" "),n("div",{staticClass:"blob active"})])}],!1,null,"8a61c328",null);e.default=component.exports},691:function(t,e,n){"use strict";n(544)}}]);