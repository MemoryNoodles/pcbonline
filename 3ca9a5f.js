(window.webpackJsonp=window.webpackJsonp||[]).push([[5,27,28,29,30,31],{403:function(t,e,n){"use strict";n.r(e);var r={name:"s-header",props:{info:{type:String,default:"Hot Searches"},loading:{type:Boolean,default:!1}}},o=(n(468),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-header"},[t.loading?[n("div",{staticClass:"animate-box"},[t._m(0),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("defs",[n("filter",{attrs:{id:"goo"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"17",result:"blur"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -6",result:"goo"}}),t._v(" "),n("feBlend",{attrs:{in:"SourceGraphic",in2:"goo"}})],1)])])])]:[t._v("\n    "+t._s(this.info)+"\n  ")]],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blobs"},[n("div",{staticClass:"blob active"}),t._v(" "),n("div",{staticClass:"blob active"})])}],!1,null,"095a87a6",null);e.default=component.exports},428:function(t,e,n){},455:function(t,e,n){},456:function(t,e,n){},457:function(t,e,n){},458:function(t,e,n){},463:function(t,e,n){"use strict";n.r(e);n(461),n(241);var r=n(462),o=n.n(r),c=(n(301),n(1)),l=n(509),d=n(510),f=n(511),h=n(508);c.default.use(o.a);var v={name:"SearchForm",props:{isHome:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},components:{SearchList:h.default,SearchEmpty:f.default,SearchLoading:d.default,SearchHot:l.default},data:function(){return{search_icon:"",keyword:null,status:"init"}},watch:{keyword:function(t){this.status=t?"loading":"init"}},methods:{setStatus:function(t){this.status=t},getClass:function(){return this.fixed?"search-btn_fixed":this.isHome?"search-btn_normal":void 0}}},m=(n(513),n(514),n(7)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",{staticStyle:{"margin-top":"1px !important"},attrs:{placement:"bottom",width:"544","visible-arrow":!1,trigger:"click",offset:-120}},[n("search-hot",{directives:[{name:"show",rawName:"v-show",value:"init"===t.status,expression:"status === 'init'"}],on:{handleSearch:function(e){return t.keyword=e}}}),t._v(" "),n("search-empty",{directives:[{name:"show",rawName:"v-show",value:"empty"===t.status,expression:"status === 'empty'"}]}),t._v(" "),n("search-loading",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status,expression:"status === 'loading'"}]}),t._v(" "),n("SearchList",{directives:[{name:"show",rawName:"v-show",value:"done"===t.status,expression:"status === 'done'"}],attrs:{keyword:t.keyword},on:{setStatus:t.setStatus}}),t._v(" "),n("div",{staticClass:"search-form",class:t.getClass(),attrs:{slot:"reference"},slot:"reference"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"Type in to Search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),n("div",{staticClass:"search-btn"})])],1)}),[],!1,null,"80a800e8",null);e.default=component.exports},464:function(t,e,n){},465:function(t,e,n){},468:function(t,e,n){"use strict";n(428)},477:function(t,e,n){"use strict";n(455)},478:function(t,e,n){"use strict";n(456)},479:function(t,e,n){"use strict";n(457)},480:function(t,e,n){"use strict";n(458)},508:function(t,e,n){"use strict";n.r(e);var r=n(403),o=(n(80),n(25),n(1)),c=function(t,time,e,n){var r;return function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];if(clearTimeout(r),n){var d=!r;r=setTimeout((function(){r=null}),time),d&&t.apply(e,c)}else r=setTimeout((function(){t.apply(e,c)}),time)}};o.default.component("Debounce",{abstract:!0,props:["time","events","immediate"],created:function(){this.eventKeys=this.events&&this.events.split(",")},render:function(){var t=this,e=this.$slots.default[0];return this.eventKeys||(this.eventKeys=Object.keys(e.data.on)),this.eventKeys.forEach((function(n){e.data.on[n]=c(e.data.on[n],t.time,e,t.immediate)})),e}});var l=n(81),d={name:"search-list",components:{SHeader:r.default},props:{keyword:{type:String,default:null}},data:function(){return{list:[]}},watch:{keyword:function(t){t&&this.getList(this,t)}},methods:{getList:c((function(t,e){var n=t;n.$emit("setStatus","loading"),n.$axios.get("https://www.pcbonline.com/"+"/v1/search/keyword?keyword=".concat(e)).then((function(t){var data=t.data.data;data=Object(l.c)(data,["articleTitle","articleDescribe"],e),n.list=data,n.$emit("setStatus",data.length>0?"done":"empty")}))}),500,!0),redirectResView:function(){this.$router.push({path:"/search-result?keyword=".concat(this.keyword)}),window.location.href="/search-result?keyword=".concat(this.keyword)},redirectArticle:function(t){var e=t.articleName,n=t.id,r=t.articleType,o=["","blog","help"],c={blog:"/blog/".concat(e,".html"),help:"/support/home/"};if(window.localStorage.setItem("isFeedBack",!1),"blog"===o[r])this.$router.push({name:"blog-id",params:{id:e+".html"}});else{var l=c[o[r]];window.localStorage.setItem("article",n),window.location.href=l}}}},f=(n(480),n(7)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-list"},[n("s-header",{attrs:{info:"RELATED BLOG ("+t.list.length+")"}}),t._v(" "),n("div",{staticClass:"list-box"},t._l(t.list,(function(e){return n("div",{key:e.id,staticClass:"article-li animated fadeInDownBig",on:{click:function(n){return t.redirectArticle(e)}}},[n("div",{staticClass:"lef"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{loading:"lazy",src:e.articleImg,alt:""}})])]),t._v(" "),n("div",{staticClass:"rig"},[n("span",{staticClass:"article-title",domProps:{innerHTML:t._s(e.articleTitle)}}),t._v(" "),n("span",{staticClass:"article-time"},[t._v(t._s(e.articleTime))]),t._v(" "),n("span",{staticClass:"article-content",domProps:{innerHTML:t._s(e.articleDescribe)}})])])})),0),t._v(" "),n("div",{staticClass:"bot-fix",on:{click:function(e){return t.redirectResView()}}},[t._v("\n    VIEW ALL RESULTS FOR PCB\n    "),n("i",{staticClass:"el-icon-caret-right"})])],1)}),[],!1,null,"4c57a9c8",null);e.default=component.exports},509:function(t,e,n){"use strict";n.r(e);var r=n(102),o={name:"search-hot",components:{SHeader:n(403).default},data:function(){return{hotList:["Coupon","PCB sponsorship","pcb assembly","4-wire sensing","volume production","buy PCB online","PCBA online","PCB manufacturing","flexible PCB","electronic components","PCBA","aluminum PCB","Rogers PCB","PCB design","FPGA"]}},methods:{getHotTags:function(){var t=this;this.$axios.get("/v1/search/allTab").then((function(e){var data=e.data.data;t.hotList=Object(r.a)(data)}))},handleClick:function(t){this.$emit("handleSearch",t)}}},c=(n(477),n(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-hot"},[n("s-header"),t._v(" "),n("div",{staticClass:"tags-box"},[t._l(t.hotList,(function(e,r){return n("div",{key:r,staticClass:"tags-li"},[n("span",{on:{click:function(n){return t.handleClick(e)}}},[t._v(t._s(e))])])})),t._v(" "),0===t.hotList.length?n("div",{staticStyle:{"text-align":"center","margin-top":"16px"}},[t._v("\n      Nothing\n    ")]):t._e()],2)],1)}),[],!1,null,"6ff6261f",null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);var r={name:"search-loading",components:{SHeader:n(403).default}},o=(n(478),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-loading"},[n("s-header",{attrs:{loading:""}}),t._v(" "),n("div",{staticClass:"loading-tmp"},t._l(2,(function(i){return n("div",{key:i,staticClass:"li-l"},[t._m(0,!0),t._v(" "),t._m(1,!0)])})),0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lef"},[e("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rig"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,"35e7ba1c",null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r={name:"search-empty"},o=(n(479),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-empty"},[n("span",[t._v("Sorry, nothing found for “PCB”.")])])}],!1,null,"e9bea176",null);e.default=component.exports},513:function(t,e,n){"use strict";n(464)},514:function(t,e,n){"use strict";n(465)}}]);