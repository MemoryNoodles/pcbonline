(window.webpackJsonp=window.webpackJsonp||[]).push([[6,36,43,44,45,46,47],{1552:function(e,t,n){},1553:function(e,t,n){},1554:function(e,t,n){},1555:function(e,t,n){},1863:function(e,t,n){"use strict";n(1552)},1864:function(e,t,n){"use strict";n(1553)},1865:function(e,t,n){"use strict";n(1554)},1866:function(e,t,n){"use strict";n(1555)},1922:function(e,t,n){},1923:function(e,t,n){},2027:function(e,t,n){"use strict";n.r(t);var o=n(102),r={name:"search-hot",components:{SHeader:n(684).default},data:function(){return{hotList:["Coupon","PCB sponsorship","pcb assembly","4-wire sensing","volume production","buy PCB online","PCBA online","PCB manufacturing","flexible PCB","electronic components","PCBA","aluminum PCB","Rogers PCB","PCB design","FPGA"]}},mounted:function(){},methods:{getHotTags:function(){var e=this;this.$axios.get("/v1/search/allTab").then((function(t){var data=t.data.data;e.hotList=Object(o.a)(data)}))},handleClick:function(e){this.$emit("handleSearch",e)}}},c=(n(1863),n(6)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-hot"},[n("s-header"),e._v(" "),n("div",{staticClass:"tags-box"},[e._l(e.hotList,(function(t,o){return n("div",{key:o,staticClass:"tags-li"},[n("span",{on:{click:function(n){return e.handleClick(t)}}},[e._v(e._s(t))])])})),e._v(" "),0===e.hotList.length?n("div",{staticStyle:{"text-align":"center","margin-top":"16px"}},[e._v("\n      Nothing\n    ")]):e._e()],2)],1)}),[],!1,null,"213184bd",null);t.default=component.exports},2028:function(e,t,n){"use strict";n.r(t);var o={name:"search-loading",components:{SHeader:n(684).default}},r=(n(1864),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-loading"},[n("s-header",{attrs:{loading:""}}),e._v(" "),n("div",{staticClass:"loading-tmp"},e._l(2,(function(i){return n("div",{key:i,staticClass:"li-l"},[e._m(0,!0),e._v(" "),e._m(1,!0)])})),0)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lef"},[t("div")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rig"},[n("div"),e._v(" "),n("div"),e._v(" "),n("div")])}],!1,null,"63ee8420",null);t.default=component.exports},2029:function(e,t,n){"use strict";n.r(t);var o={name:"search-empty"},r=(n(1865),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-empty"},[n("span",[e._v("Sorry, nothing found for “PCB”.")])])}],!1,null,"3ab10855",null);t.default=component.exports},2030:function(e,t,n){"use strict";n.r(t);var o=n(684),r=n(462),c=n(81),l={name:"search-list",components:{SHeader:o.default},props:{keyword:{type:String,default:null}},data:function(){return{list:[]}},watch:{keyword:function(e){e&&this.getList(this,e)}},methods:{getList:Object(r.a)((function(e,t){var n=e;n.$emit("setStatus","loading"),n.$axios.get("https://www.pcbonline.com/"+"/v1/search/keyword?keyword=".concat(t)).then((function(e){var data=e.data.data;data=Object(c.c)(data,["articleTitle","articleDescribe"],t),n.list=data,n.$emit("setStatus",data.length>0?"done":"empty")}))}),500,!0),redirectResView:function(){this.$router.push({path:"/search-result?keyword=".concat(this.keyword)}),window.location.href="/search-result?keyword=".concat(this.keyword)},redirectArticle:function(e){var t=e.articleName,n=e.id,o=e.articleType,r=["","blog","help"],c={blog:"/blog/".concat(t,".html"),help:"/support/home/"};if(window.localStorage.setItem("isFeedBack",!1),"blog"===r[o])this.$router.push({name:"blog-id",params:{id:t+".html"}});else{var l=c[r[o]];window.localStorage.setItem("article",n),window.location.href=l}}}},d=(n(1866),n(6)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-list"},[n("s-header",{attrs:{info:"RELATED BLOG ("+e.list.length+")"}}),e._v(" "),n("div",{staticClass:"list-box"},e._l(e.list,(function(t){return n("div",{key:t.id,staticClass:"article-li animated fadeInDownBig",on:{click:function(n){return e.redirectArticle(t)}}},[n("div",{staticClass:"lef"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{loading:"lazy",src:t.articleImg,alt:""}})])]),e._v(" "),n("div",{staticClass:"rig"},[n("span",{staticClass:"article-title",domProps:{innerHTML:e._s(t.articleTitle)}}),e._v(" "),n("span",{staticClass:"article-time"},[e._v(e._s(t.articleTime))]),e._v(" "),n("span",{staticClass:"article-content",domProps:{innerHTML:e._s(t.articleDescribe)}})])])})),0),e._v(" "),n("div",{staticClass:"bot-fix",on:{click:function(t){return e.redirectResView()}}},[e._v("\n    VIEW ALL RESULTS FOR PCB\n    "),n("i",{staticClass:"el-icon-caret-right"})])],1)}),[],!1,null,"4851cda8",null);t.default=component.exports},2124:function(e,t,n){"use strict";n(1922)},2125:function(e,t,n){"use strict";n(1923)},2269:function(e,t,n){"use strict";n.r(t);n(458),n(250);var o=n(459),r=n.n(o),c=n(1),l=n(2027),d=n(2028),f=n(2029),h=n(2030);c.default.use(r.a);var v={name:"SearchForm",components:{SearchList:h.default,SearchEmpty:f.default,SearchLoading:d.default,SearchHot:l.default},data:function(){return{keyword:null,status:"init"}},watch:{keyword:function(e){this.status=e?"loading":"init"}},methods:{setStatus:function(e){this.status=e}}},m=(n(2124),n(2125),n(6)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sf"},[o("el-popover",{staticStyle:{"margin-top":"1px !important"},attrs:{placement:"bottom",width:"544","visible-arrow":!1,trigger:"click",offset:-120}},[o("search-hot",{directives:[{name:"show",rawName:"v-show",value:"init"===e.status,expression:"status === 'init'"}],on:{handleSearch:function(t){return e.keyword=t}}}),e._v(" "),o("search-empty",{directives:[{name:"show",rawName:"v-show",value:"empty"===e.status,expression:"status === 'empty'"}]}),e._v(" "),o("search-loading",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.status,expression:"status === 'loading'"}]}),e._v(" "),o("SearchList",{directives:[{name:"show",rawName:"v-show",value:"done"===e.status,expression:"status === 'done'"}],attrs:{keyword:e.keyword},on:{setStatus:e.setStatus}}),e._v(" "),o("div",{staticClass:"search-form",attrs:{slot:"reference"},slot:"reference"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"Type in to Search"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e._v(" "),o("div",{staticClass:"search-btn"},[o("img",{attrs:{loading:"lazy",src:n(472),alt:"search"}})])])],1)],1)}),[],!1,null,"5fff9642",null);t.default=component.exports},458:function(e,t,n){},459:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=74)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,c,l,d){var f,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=n,h._compiled=!0),o&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},h._ssrRegister=f):r&&(f=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(h.functional){h._injectStyles=f;var v=h.render;h.render=function(e,t){return f.call(t),v(e,t)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,f):[f]}return{exports:e,options:h}}n.d(t,"a",(function(){return o}))},2:function(e,t){e.exports=n(470)},3:function(e,t){e.exports=n(298)},5:function(e,t){e.exports=n(475)},7:function(e,t){e.exports=n(1)},74:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("transition",{attrs:{name:e.transition},on:{"after-enter":e.handleAfterEnter,"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&e.showPopper,expression:"!disabled && showPopper"}],ref:"popper",staticClass:"el-popover el-popper",class:[e.popperClass,e.content&&"el-popover--plain"],style:{width:e.width+"px"},attrs:{role:"tooltip",id:e.tooltipId,"aria-hidden":e.disabled||!e.showPopper?"true":"false"}},[e.title?n("div",{staticClass:"el-popover__title",domProps:{textContent:e._s(e.title)}}):e._e(),e._t("default",[e._v(e._s(e.content))])],2)]),n("span",{ref:"wrapper",staticClass:"el-popover__reference-wrapper"},[e._t("reference")],2)],1)};o._withStripped=!0;var r=n(5),c=n.n(r),l=n(2),d=n(3),f={name:"ElPopover",mixins:[c.a],props:{trigger:{type:String,default:"click",validator:function(e){return["click","focus","hover","manual"].indexOf(e)>-1}},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:200},title:String,disabled:Boolean,content:String,reference:{},popperClass:String,width:{},visibleArrow:{default:!0},arrowOffset:{type:Number,default:0},transition:{type:String,default:"fade-in-linear"},tabindex:{type:Number,default:0}},computed:{tooltipId:function(){return"el-popover-"+Object(d.generateId)()}},watch:{showPopper:function(e){this.disabled||(e?this.$emit("show"):this.$emit("hide"))}},mounted:function(){var e=this,t=this.referenceElm=this.reference||this.$refs.reference,n=this.popper||this.$refs.popper;!t&&this.$refs.wrapper.children&&(t=this.referenceElm=this.$refs.wrapper.children[0]),t&&(Object(l.addClass)(t,"el-popover__reference"),t.setAttribute("aria-describedby",this.tooltipId),t.setAttribute("tabindex",this.tabindex),n.setAttribute("tabindex",0),"click"!==this.trigger&&(Object(l.on)(t,"focusin",(function(){e.handleFocus();var n=t.__vue__;n&&"function"==typeof n.focus&&n.focus()})),Object(l.on)(n,"focusin",this.handleFocus),Object(l.on)(t,"focusout",this.handleBlur),Object(l.on)(n,"focusout",this.handleBlur)),Object(l.on)(t,"keydown",this.handleKeydown),Object(l.on)(t,"click",this.handleClick)),"click"===this.trigger?(Object(l.on)(t,"click",this.doToggle),Object(l.on)(document,"click",this.handleDocumentClick)):"hover"===this.trigger?(Object(l.on)(t,"mouseenter",this.handleMouseEnter),Object(l.on)(n,"mouseenter",this.handleMouseEnter),Object(l.on)(t,"mouseleave",this.handleMouseLeave),Object(l.on)(n,"mouseleave",this.handleMouseLeave)):"focus"===this.trigger&&(this.tabindex<0&&console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"),t.querySelector("input, textarea")?(Object(l.on)(t,"focusin",this.doShow),Object(l.on)(t,"focusout",this.doClose)):(Object(l.on)(t,"mousedown",this.doShow),Object(l.on)(t,"mouseup",this.doClose)))},beforeDestroy:function(){this.cleanup()},deactivated:function(){this.cleanup()},methods:{doToggle:function(){this.showPopper=!this.showPopper},doShow:function(){this.showPopper=!0},doClose:function(){this.showPopper=!1},handleFocus:function(){Object(l.addClass)(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!0)},handleClick:function(){Object(l.removeClass)(this.referenceElm,"focusing")},handleBlur:function(){Object(l.removeClass)(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!1)},handleMouseEnter:function(){var e=this;clearTimeout(this._timer),this.openDelay?this._timer=setTimeout((function(){e.showPopper=!0}),this.openDelay):this.showPopper=!0},handleKeydown:function(e){27===e.keyCode&&"manual"!==this.trigger&&this.doClose()},handleMouseLeave:function(){var e=this;clearTimeout(this._timer),this.closeDelay?this._timer=setTimeout((function(){e.showPopper=!1}),this.closeDelay):this.showPopper=!1},handleDocumentClick:function(e){var t=this.reference||this.$refs.reference,n=this.popper||this.$refs.popper;!t&&this.$refs.wrapper.children&&(t=this.referenceElm=this.$refs.wrapper.children[0]),this.$el&&t&&!this.$el.contains(e.target)&&!t.contains(e.target)&&n&&!n.contains(e.target)&&(this.showPopper=!1)},handleAfterEnter:function(){this.$emit("after-enter")},handleAfterLeave:function(){this.$emit("after-leave"),this.doDestroy()},cleanup:function(){(this.openDelay||this.closeDelay)&&clearTimeout(this._timer)}},destroyed:function(){var e=this.reference;Object(l.off)(e,"click",this.doToggle),Object(l.off)(e,"mouseup",this.doClose),Object(l.off)(e,"mousedown",this.doShow),Object(l.off)(e,"focusin",this.doShow),Object(l.off)(e,"focusout",this.doClose),Object(l.off)(e,"mousedown",this.doShow),Object(l.off)(e,"mouseup",this.doClose),Object(l.off)(e,"mouseleave",this.handleMouseLeave),Object(l.off)(e,"mouseenter",this.handleMouseEnter),Object(l.off)(document,"click",this.handleDocumentClick)}},h=n(0),component=Object(h.a)(f,o,[],!1,null,null,null);component.options.__file="packages/popover/src/main.vue";var main=component.exports,v=function(e,t,n){var o=t.expression?t.value:t.arg,r=n.context.$refs[o];r&&(Array.isArray(r)?r[0].$refs.reference=e:r.$refs.reference=e)},m={bind:function(e,t,n){v(e,t,n)},inserted:function(e,t,n){v(e,t,n)}},w=n(7);n.n(w).a.directive("popover",m),main.install=function(e){e.directive("popover",m),e.component(main.name,main)},main.directive=m;t.default=main}})},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(79),n(25);var o=n(1),r=function(e,time,t,n){var o;return function(){for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];if(clearTimeout(o),n){var d=!o;o=setTimeout((function(){o=null}),time),d&&e.apply(t,c)}else o=setTimeout((function(){e.apply(t,c)}),time)}};o.default.component("Debounce",{abstract:!0,props:["time","events","immediate"],created:function(){this.eventKeys=this.events&&this.events.split(",")},render:function(){var e=this,t=this.$slots.default[0];return this.eventKeys||(this.eventKeys=Object.keys(t.data.on)),this.eventKeys.forEach((function(n){t.data.on[n]=r(t.data.on[n],e.time,t,e.immediate)})),t}})},472:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAATdJREFUOBG1k71OQkEQhQmlsaLSktfQN7AyocEHtKLzCbSg86fSxsQSo4kVBaFav+9mNywwl4tETnIyu3POHWaH3V6vQkqpD8fwDs7gMkf3N7Bf2XcvMQ/hE6wxrzes1Ye7K6Fqgt9QvMMRPPNDY96bF1+wvSiixyyd3bI+iTowD9WF/vj4CM5G2EFYrPyAevYR0rjk1yKCAxejNaFlo69x811oQfzMhmZmoalK4j3P/lmVXi0RvRrzVaZ7pR8uIqeD/YGnGPbuUD/8gFuw4GPOXm6pceIip99Cmc58GeKv//JVW8FD7uF9WKwk6c6X4gsQXS9FzwsclO/DiGGft/yQixHSM+ws6vF9OV527+cCvsIJbGZGHEA7FN1Fw/Y3khQ6WlE7FP/a6VGLTjemc9iWIzvTKbz+Bep1FLkEMcgxAAAAAElFTkSuQmCC"},544:function(e,t,n){},684:function(e,t,n){"use strict";n.r(t);var o={name:"s-header",props:{info:{type:String,default:"Hot Searches"},loading:{type:Boolean,default:!1}}},r=(n(691),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"s-header"},[e.loading?[n("div",{staticClass:"animate-box"},[e._m(0),e._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("defs",[n("filter",{attrs:{id:"goo"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"17",result:"blur"}}),e._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -6",result:"goo"}}),e._v(" "),n("feBlend",{attrs:{in:"SourceGraphic",in2:"goo"}})],1)])])])]:[e._v("\n    "+e._s(this.info)+"\n  ")]],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blobs"},[n("div",{staticClass:"blob active"}),e._v(" "),n("div",{staticClass:"blob active"})])}],!1,null,"8a61c328",null);t.default=component.exports},691:function(e,t,n){"use strict";n(544)}}]);