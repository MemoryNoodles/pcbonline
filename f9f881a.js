(window.webpackJsonp=window.webpackJsonp||[]).push([[220,13,42,43,127],{1882:function(t,e,n){},2095:function(t,e,n){"use strict";n(1882)},2250:function(t,e,n){"use strict";n.r(e);n(248),n(241);var l=n(249),o=n.n(l),r=(n(250),n(251)),c=n.n(r),d=(n(297),n(298)),_=n.n(d),f=n(246),v=n(245),h=n(244),m=n(1);n(242);m.default.use(_.a),m.default.use(c.a),m.default.use(o.a);var C={components:{TechTable:f.default,TechClause:v.default,ButtonHref:h.default},data:function(){return{dialogTableVisibleImg:!1,carouselActive:1}},props:{datad:{type:Object,default:function(){}},table:{type:Array,default:function(){}},carouselList:{type:Array,default:function(){}}},methods:{showImg:function(){},handleCarouse:function(t){var e;"left"===t&&(e=this.carouselActive-1),"right"===t&&(e=this.carouselActive+1),e>this.carouselList.length?e-=this.carouselList.length:e<1&&(e=1),this.carouselActive=e},handleDialog:function(){window.location.href.indexOf("PCB-FAB/")>-1?this.dialogTableVisibleImg=!0:this.showImg()}},mounted:function(){window.addEventListener("mousewheel",null,{passive:!0})}},y=(n(2095),n(7)),component=Object(y.a)(C,(function(){var t=this,e=this,l=e.$createElement,o=e._self._c||l;return o("el-row",{staticClass:"main-container-coma",attrs:{align:"center",justify:"end"}},[o("el-row",{staticClass:"main",attrs:{align:"center",justify:"end"}},[o("el-row",{staticClass:"cont col-12",staticStyle:{"margin-top":"89px"},attrs:{align:"center",justify:"center"}},[o("el-col",{staticClass:"comp m-l col-8 e c",attrs:{type:"flex"}},[o("h2",{staticClass:"header",domProps:{innerHTML:e._s(e.datad.title)}})])],1),e._v(" "),o("div",{staticClass:"center-every-thing col-12 row-s",staticStyle:{"margin-top":"62px"}},[o("div",{staticClass:"comp col-4",staticStyle:{"margin-right":"40px","align-self":"flex-start"},attrs:{type:"flex"}},[o("el-row",{staticClass:"col-12",staticStyle:{cursor:"pointer"}},[o("div",{staticClass:"product-img",staticStyle:{position:"relative","margin-top":"0px"}},[o("img",{staticClass:"product-img",staticStyle:{"margin-top":"0px"},attrs:{loading:"lazy",src:n(243)("./"+e.datad.img),alt:e.datad.alt},on:{click:e.handleDialog}}),e._v(" "),o("div",{staticClass:"pa1"},[o("div",{staticClass:"pre",on:{click:e.handleDialog}},[o("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),o("div",{staticClass:"next",on:{click:e.handleDialog}},[o("i",{staticClass:"el-icon-arrow-right"})])])])]),e._v(" "),o("el-row",{staticClass:"col-12 under-pic"},[o("h3",{staticClass:"heaser-small-note",domProps:{innerHTML:e._s(e.datad.app.title)}}),e._v(" "),o("ul",{staticClass:"application-list"},e._l(e.datad.app.points,(function(t,n){return o("li",{key:n,staticClass:"list-ele"},[e._v("\n              "+e._s(t)+"\n            ")])})),0)]),e._v(" "),o("el-row",{staticClass:"col-12",staticStyle:{"margin-top":"20px"}})],1),e._v(" "),o("div",{staticClass:"comp col-8",attrs:{type:"flex"}},[o("div",{staticClass:"col-10 sep",staticStyle:{"margin-top":"0px"}},[o("CommonTableWithMore",{attrs:{datad:e.table}})],1)])])],1),e._v(" "),o("el-dialog",{attrs:{width:"800px",visible:e.dialogTableVisibleImg},on:{"update:visible":function(t){e.dialogTableVisibleImg=t}}},[o("div",{staticClass:"carousel-box"},[o("div",{staticClass:"img-box"},[o("img",{staticClass:"animated fadeIn",attrs:{loading:"lazy",src:n(243)("./"+this.carouselList.find((function(e){return e.id===t.carouselActive})).img),alt:e.carouselList.find((function(t){return t.id===e.carouselActive})).alt}}),e._v(" "),o("div",{staticClass:"pa"},[o("div",{staticClass:"pre",on:{click:function(t){return e.handleCarouse("left")}}},[o("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),o("div",{staticClass:"next",on:{click:function(t){return e.handleCarouse("right")}}},[o("i",{staticClass:"el-icon-arrow-right"})])])]),e._v(" "),o("div",{staticClass:"tips-num"},[o("div",{staticClass:"lef"},[o("span",[e._v(e._s(e.carouselActive)+"/"+e._s(e.carouselList.length))])]),e._v(" "),o("div",{staticClass:"right-close",on:{click:function(t){e.dialogTableVisibleImg=!1}}},[o("i",{staticClass:"el-icon-close"})])])])])],1)}),[],!1,null,"3d34d006",null);e.default=component.exports;installComponents(component,{CommonTableWithMore:n(300).default})},244:function(t,e,n){"use strict";n.r(e);var l={},o=(n(262),n(7)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link_href"},[n("a",{attrs:{href:"https://sys.pcbonline.com/instant-quote",target:"_blank",alt:"quote"}},[n("button",{staticClass:"quote btn-reversal warning"},[n("i",{staticClass:"el-icon-shopping-cart-1"}),t._v("\n      Online Quote\n    ")])]),t._v(" "),n("a",{attrs:{href:"mailto:info@pcbonline.com?subject=I want to get a quote from PCBONLINE&body=Hi PCBONLINE,"}},[n("button",{staticClass:"support btn-reversal primary",staticStyle:{"margin-right":"0px"}},[n("i",{staticClass:"el-icon-message"}),t._v("\n      Email Quote\n    ")])])])}],!1,null,"265639c2",null);e.default=component.exports},245:function(t,e,n){"use strict";n.r(e);var l={props:{flexible:{type:Object,default:function(){}}}},o=(n(264),n(7)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"terms"},[n("p",{staticClass:"intro_in"},[t._v("\n            "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_title)+"\n        ")]),t._v(" "),n("ul",{staticClass:"manufacturing"},[n("li",[n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_flexural)+"\n                ")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_flexural_one)+"\n                ")])]),t._v(" "),n("li",[n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft)+"\n                ")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_one)+"\n                ")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_two)+"\n                    "),n("a",{attrs:{href:"/pdf/flexible-pcb-terms.pdf",target:"_blank"}},[t._v(t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_three))])])])])])])}),[],!1,null,"75bdb3c5",null);e.default=component.exports},246:function(t,e,n){"use strict";n.r(e);n(263);var l=n(7),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tech_of_table"},[n("p",[t._v("\n        PCBONLINE is able to meet the following technical capabilities for\n        all of our flexible designs:\n    ")]),t._v(" "),n("div",{staticClass:"table_cs_show"},[n("div",{staticClass:"table_show",attrs:{id:"head_table"}},[n("div",[t._v("Parameter")]),t._v(" "),n("div",[t._v("Fabrication Process")]),t._v(" "),n("div",[t._v("Data")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Layer Count")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("1-10")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Final Board Thickness")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("0.05-0.6mm")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Aspect Ratio")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("3:1")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Copper Thickness")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("1/3~3oz")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Impedance Control")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("50±5Ω,90±9Ω,100±10Ω")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Line/Space")]),t._v(" "),n("div",[t._v("Inner Layer "),n("br"),t._v("External Layer")]),t._v(" "),n("div",[t._v("\n                1.6/1.6mil\n                "),n("br"),t._v("1.6/1.6mil\n            ")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Min Drill Bit Size")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("6mil")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Hole Size Tolerance")]),t._v(" "),n("div",[t._v("PTH "),n("br"),t._v("NPTH")]),t._v(" "),n("div",[t._v("\n                ±3mil\n                "),n("br"),t._v("±2mil\n            ")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Hole Position Tolerance")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("±3mil")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Coverlayer")]),t._v(" "),n("div",[t._v("Line to PAD Registration")]),t._v(" "),n("div",[t._v("6mil±2mil")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Profile Tolerance")]),t._v(" "),n("div",[t._v("\n                Puching\n                "),n("br"),t._v("Laser Cutting\n            ")]),t._v(" "),n("div",[t._v("\n                ±3mil\n                "),n("br"),t._v("±2mil\n            ")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Surface Finish")]),t._v(" "),n("div",[t._v("\n                ENIG\n                "),n("br"),t._v("OSP "),n("br"),t._v("Immersion Tin "),n("br"),t._v("Immersion Silver\n                "),n("br"),t._v("Hard Gold Plating\n            ")]),t._v(" "),n("div",[t._v('\n                Au 1-3u",Ni 120-200u"\n                '),n("br"),t._v("0.25-0.5um "),n("br"),t._v("0.5-1um "),n("br"),t._v("0.05-0.12um "),n("br"),t._v('Au\n                5-40u",Ni 120-200u"\n            ')])])])])}],!1,null,"1eacb96a",null);e.default=component.exports},252:function(t,e,n){"use strict";var l=n(5),o=n(30),r=n(31),c=n(154),d=n(79),_=n(11),f=n(61).f,v=n(62).f,h=n(15).f,m=n(268).trim,C="Number",y=l.Number,w=y,x=y.prototype,S=r(n(99)(x))==C,T="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,l,o,r=(e=T?e.trim():m(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,_=c.length;i<_;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,l)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(S?_((function(){x.valueOf.call(n)})):r(n)!=C)?c(new w(I(e)),n,y):I(e)};for(var E,$=n(9)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;$.length>N;N++)o(w,E=$[N])&&!o(y,E)&&h(y,E,v(w,E));y.prototype=x,x.constructor=y,n(17)(l,C,y)}},254:function(t,e,n){},255:function(t,e,n){},256:function(t,e,n){},262:function(t,e,n){"use strict";n(254)},263:function(t,e,n){"use strict";n(255)},264:function(t,e,n){"use strict";n(256)},265:function(t,e,n){},268:function(t,e,n){var l=n(4),o=n(40),r=n(11),c=n(269),d="["+c+"]",_=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=r((function(){return!!c[t]()||"​"!="​"[t]()})),_=o[t]=d?e(h):c[t];n&&(o[n]=_),l(l.P+l.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(_,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},269:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},289:function(t,e,n){"use strict";function l(t,e,n){this.$children.forEach((function(o){o.$options.componentName===t?o.$emit.apply(o,[e].concat(n)):l.apply(o,[t,e].concat([n]))}))}e.__esModule=!0,e.default={methods:{dispatch:function(t,e,n){for(var l=this.$parent||this.$root,o=l.$options.componentName;l&&(!o||o!==t);)(l=l.$parent)&&(o=l.$options.componentName);l&&l.$emit.apply(l,[e].concat(n))},broadcast:function(t,e,n){l.call(this,t,e,n)}}}},293:function(t,e,n){"use strict";e.__esModule=!0;n(291);e.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},297:function(t,e,n){},298:function(t,e,n){t.exports=function(t){var e={};function n(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return t[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(l,o,function(e){return t[e]}.bind(null,o));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=89)}({0:function(t,e,n){"use strict";function l(t,e,n,l,o,r,c,d){var _,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),l&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),c?(_=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=_):o&&(_=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),_)if(f.functional){f._injectStyles=_;var v=f.render;f.render=function(t,e){return _.call(e),v(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,_):[_]}return{exports:t,options:f}}n.d(e,"a",(function(){return l}))},11:function(t,e){t.exports=n(293)},15:function(t,e){t.exports=n(450)},4:function(t,e){t.exports=n(289)},89:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-dialog__wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.handleWrapperClick(e)}}},[n("div",{key:t.key,ref:"dialog",class:["el-dialog",{"is-fullscreen":t.fullscreen,"el-dialog--center":t.center},t.customClass],style:t.style,attrs:{role:"dialog","aria-modal":"true","aria-label":t.title||"dialog"}},[n("div",{staticClass:"el-dialog__header"},[t._t("title",[n("span",{staticClass:"el-dialog__title"},[t._v(t._s(t.title))])]),t.showClose?n("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.handleClose}},[n("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]):t._e()],2),t.rendered?n("div",{staticClass:"el-dialog__body"},[t._t("default")],2):t._e(),t.$slots.footer?n("div",{staticClass:"el-dialog__footer"},[t._t("footer")],2):t._e()])])])};l._withStripped=!0;var o=n(15),r=n.n(o),c=n(11),d=n.n(c),_=n(4),f=n.n(_),v={name:"ElDialog",mixins:[r.a,f.a,d.a],props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1},destroyOnClose:Boolean},data:function(){return{closed:!1,key:0}},watch:{visible:function(t){var e=this;t?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick((function(){e.$refs.dialog.scrollTop=0})),this.appendToBody&&document.body.appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"),this.destroyOnClose&&this.$nextTick((function(){e.key++})))}},computed:{style:function(){var style={};return this.fullscreen||(style.marginTop=this.top,this.width&&(style.width=this.width)),style}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(t){!1!==t&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:function(){this.broadcast("ElSelectDropdown","updatePopper"),this.broadcast("ElDropdownMenu","updatePopper")},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&document.body.appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},h=n(0),component=Object(h.a)(v,l,[],!1,null,null,null);component.options.__file="packages/dialog/src/component.vue";var m=component.exports;m.install=function(t){t.component(m.name,m)};e.default=m}})},299:function(t,e,n){"use strict";n(265)},300:function(t,e,n){"use strict";n.r(e);n(248),n(241);var l=n(249),o=n.n(l),r=(n(250),n(251)),c=n.n(r),d=(n(252),n(1));d.default.use(c.a),d.default.use(o.a);var _={components:{},data:function(){return{show:!1}},props:{datad:{type:Array,default:function(){}},customIndex:{type:Number,default:function(){return 0}}},methods:{showTable:function(){this.show=!0}}},f=(n(299),n(7)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"tech_of_table111 table-width"},[n("el-row",{staticClass:"table_cs_show",attrs:{span:24}},[n("el-col",{staticClass:"table_show",attrs:{type:"flex",span:24,id:"head_table"}},[n("el-col",{staticClass:"col-4s e c",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"},attrs:{span:8}},[t._v("Specifications")]),t._v(" "),n("el-col",{staticClass:"col-8s e c",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"},attrs:{span:16}},[t._v(t._s(t.datad[0].title))])],1),t._v(" "),t._l(t.datad,(function(e,l){return n("div",{key:l,staticClass:"col-12"},[l<t.customIndex?n("div",{staticClass:"table_show col-12",attrs:{type:"flex"}},[n("div",{staticClass:"col-4 c",staticStyle:{display:"flex"}},[n("p",{domProps:{innerHTML:t._s(e.spec)}})]),t._v(" "),n("div",{staticClass:"col-8 c",staticStyle:{display:"flex"}},[n("p",{domProps:{innerHTML:t._s(e.cap)}})])]):t._e(),t._v(" "),l==t.customIndex?n("el-col",{staticClass:"table_show col-12",staticStyle:{position:"relative"},attrs:{span:24}},[n("div",{staticClass:"col-4 c",class:[0==t.show?"hide-a-little-more":""],staticStyle:{display:"flex"}},[n("p",{domProps:{innerHTML:t._s(e.spec)}})]),t._v(" "),n("div",{staticClass:"col-8 c",class:[0==t.show?"hide-a-little-more":""],staticStyle:{display:"flex"}},[n("p",{domProps:{innerHTML:t._s(e.cap)}})]),t._v(" "),0==t.show?n("div",{staticStyle:{position:"absolute",bottom:"0px"},on:{click:function(e){return t.showTable()}}},[n("div",{staticClass:"blueCube e c"},[n("div",{staticClass:"tringlWhite"})])]):t._e()]):t._e(),t._v(" "),l>t.customIndex&&1==t.show?n("el-col",{staticClass:"table_show col-12",attrs:{span:24}},[l>t.customIndex&&1==t.show?n("div",{staticClass:"col-4 c",staticStyle:{display:"flex"}},[n("p",{domProps:{innerHTML:t._s(e.spec)}})]):t._e(),t._v(" "),l>t.customIndex&&1==t.show?n("div",{staticClass:"col-8 c",staticStyle:{display:"flex"}},[n("p",{domProps:{innerHTML:t._s(e.cap)}})]):t._e()]):t._e()],1)}))],2)],1)}),[],!1,null,"3b021a2c",null);e.default=component.exports}}]);