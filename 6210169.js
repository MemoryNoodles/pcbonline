(window.webpackJsonp=window.webpackJsonp||[]).push([[291,50],{1358:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAE5JREFUSA1jYCABzJw58z8Ik6CFgYkUxeSoHbWAYKiNBtFoEBEMAYIKGEnN+gRNRFNA82SKZh9+7mhhhz98yJSleSSPWkAwZkaDiGAQAQBhuw4eGCl7OwAAAABJRU5ErkJggg=="},1359:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAADCAYAAACJZs+gAAAABGdBTUEAALGPC/xhBQAAACBJREFUGBljnDlz5mcGGgIWoNk8NDSfgYWVlVWOlhYAADb2AwHnecSkAAAAAElFTkSuQmCC"},1454:function(t,e,n){},1724:function(t,e,n){"use strict";n(1454)},1876:function(t,e,n){t.exports=n.p+"img/help_icon2.png"},1877:function(t,e,n){t.exports=n.p+"img/help_icon3.png"},1878:function(t,e,n){t.exports=n.p+"img/help_icon4.png"},1879:function(t,e,n){t.exports=n.p+"img/help_icon5.png"},1880:function(t,e,n){},1976:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{plus:n(1358),reduce:n(1359),activeIndex:-1,questionsList:[]}},mounted:function(){},methods:{showContent:function(t){this.activeIndex=t},hideContent:function(t){this.activeIndex=-1}},props:{content:{type:Array,default:function(){}}}},r=(n(1724),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"support-center"}},t._l(t.content,(function(e,o){return n("div",{key:o,staticClass:"support-center"},[n("p",{staticClass:"title"},[t._v(t._s(e.classifyTwo))]),t._v(" "),n("div",{staticClass:"questions-center"},[n("div",{staticClass:"questions"},[n("p",{staticClass:"questions-title"},[t._v(t._s(e.title))]),t._v(" "),t.activeIndex===o?n("div",{staticClass:"questions-icon",on:{click:function(e){return t.hideContent(o)}}},[n("img",{attrs:{loading:"lazy",src:t.reduce,alt:"icon"}})]):n("div",{staticClass:"questions-icon",on:{click:function(e){return t.showContent(o)}}},[n("img",{attrs:{loading:"lazy",src:t.plus,alt:"icon"}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===o,expression:"activeIndex===index"}],staticClass:"solution",domProps:{innerHTML:t._s(e.content)}})])])})),0)}),[],!1,null,"6f7d2f18",null);e.default=component.exports},2039:function(t,e,n){"use strict";n(1880)},2229:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{loading:"lazy",src:n(1876),alt:"help-icon-02"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{loading:"lazy",src:n(1877),alt:"help-icon-03"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{loading:"lazy",src:n(1878),alt:"help-icon-04"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{loading:"lazy",src:n(1879),alt:"help-icon-05"}})])}],r=n(2),c=(n(43),n(57)),h=n.n(c),l={head:function(){return{title:"PCB Help | PCBONLINE Support | Frequently-Asked Questions",meta:[{hid:"description",name:"description",content:"Do you need any help with PCB or PCBA? Here you can see the most frequently asked questions and answers about PCB manufacturing, quality-related and so on."}],link:[{rel:"canonical",href:"https://www.pcbonline.com/support/home/"}]}},data:function(){return{websiteContent:[],isMobile:!1,pages:[{imgLink:n(1876),title:"common problem",add:"common problem"},{imgLink:n(1877),title:"Technical knowledge",add:"technical knowledge"},{imgLink:n(1878),title:"Coupon usage",add:"coupon usage"},{imgLink:n(1879),title:"Quality related",add:"quality related"}],temporaryData:{isStackClick:!0,offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",lastZindex:"",rotate:0,lastRotate:0,visible:3,tracking:!1,animation:!1,currentPage:0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10},basicdata:{start:{},end:{}}}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/articlehelp?pageNo=1&pageSize=6&classifyOne=common problem");case 2:data=e.sent,t.websiteContent=data.data.result.data||[],t.mobileHeadLoading(),window.addEventListener("resize",t.mobileHeadLoading,{passive:!0});case 6:case"end":return e.stop()}}),e)})))()},methods:{getContent:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("/api/articlehelp?pageNo=1&pageSize=6&classifyOne="+t);case 2:data=n.sent,e.websiteContent=data.data.result.data||[];case 4:case"end":return n.stop()}}),n)})))()},mobileHeadLoading:function(){var t=document.documentElement.clientWidth;this.isMobile=t<850},touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.isStackClick=!1,this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var e=this.rotateDirection(),n=this.angleRatio();this.temporaryData.rotate=e*this.offsetWidthRatio*15*n}},touchend:function(t,e){if(this.temporaryData.isStackClick&&(this.$emit("click",e),this.temporaryData.isStackClick=!1),this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!1,this.temporaryData.animation=!0,this.offsetRatio>=.2){var n=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*n):-Math.abs(this.temporaryData.poswidth*n),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.lastZindex=20,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick((function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0}))},onTransitionEnd:function(t){var e=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===e&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1,this.temporaryData.lastZindex=-1)},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight;return-1*(2*this.temporaryData.offsetY/t-1)||0},inStack:function(t,e){for(var n=[],o=this.temporaryData.visible,r=this.pages.length,i=0;i<o;i++)e+i<r?n.push(e+i):n.push(e+i-r);return n.indexOf(t)>=0},transform:function(t){var e=this.temporaryData.currentPage,n=this.pages.length,o=0===e?this.pages.length-1:e-1,style={},r=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,e)){var c=t-e>0?t-e:t-e+n;style.opacity="1",style.transform="translate3D(0,0,"+-60*(c-this.offsetRatio)+"px)",style.zIndex=r-c,this.temporaryData.tracking||(style.transitionTimingFunction="ease",style.transitionDuration="300ms")}else t===o?(style.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",style.opacity=this.temporaryData.lastOpacity,style.zIndex=this.temporaryData.lastZindex,style.transitionTimingFunction="ease",style.transitionDuration="300ms"):(style.zIndex="-1",style.transform="translate3D(0,0,"+-1*r*60+"px)");return style}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var style={};return style.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",style.opacity=this.temporaryData.opacity,style.zIndex=10,this.temporaryData.animation&&(style.transitionTimingFunction="ease",style.transitionDuration=(this.temporaryData.animation?300:0)+"ms"),style}}},computed:{offsetRatio:function(){var t=1-(414-Math.abs(this.temporaryData.poswidth))*(500-Math.abs(this.temporaryData.posheight))/207e3||0;return t>1?1:t},offsetWidthRatio:function(){return 1-(414-Math.abs(this.temporaryData.poswidth))/414||0}}},d=(n(2039),n(7)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"support"}},[n("div",{staticClass:"support"},[n("div",{staticClass:"help-center"},[n("h1",[t._v("How can we help you?")]),t._v(" "),n("p",{staticClass:"info-center"},[t._v("\n        Here you can find frequently asked questions and answers. You can find\n        and click the question and see our answer following it.\n      ")]),t._v(" "),n("div",{staticClass:"article-center"},[n("div",{staticClass:"common",on:{click:function(e){return t.getContent("common problem")}}},[t._m(0),t._v("\n          common problem\n        ")]),t._v(" "),n("div",{staticClass:"technical",on:{click:function(e){return t.getContent("technical knowledge")}}},[t._m(1),t._v("\n          Technical knowledge\n        ")]),t._v(" "),n("div",{staticClass:"coupon",on:{click:function(e){return t.getContent("coupon usage")}}},[t._m(2),t._v("\n          Coupon usage\n        ")]),t._v(" "),n("div",{staticClass:"quality",on:{click:function(e){return t.getContent("quality related")}}},[t._m(3),t._v("\n          Quality related\n        ")])]),t._v(" "),n("div",{staticClass:"mobile-prodct-swiper"},t._l(t.pages,(function(e,o){return n("div",{key:o,staticClass:"mobile-product",style:[t.transformIndex(o),t.transform(o)],on:{"!touchmove":function(e){return e.stopPropagation(),t.touchmove.apply(null,arguments)},"!touchstart":function(e){return e.stopPropagation(),t.touchstart.apply(null,arguments)},"!touchend":function(e){return e.stopPropagation(),t.touchend(e,o)},"!touchcancel":function(e){return e.stopPropagation(),t.touchend(e,o)},"!mousedown":function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart.apply(null,arguments)},"!mouseup":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,o)},"!mousemove":function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove.apply(null,arguments)},"!mouseout":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,o)},"webkit-transition-end":function(e){return t.onTransitionEnd(o)},transitionend:function(e){return t.onTransitionEnd(o)},click:function(n){return t.getContent(e.add)}}},[n("div",{staticClass:"mobile-content"},[n("div",{staticClass:"roof-icon"},[n("img",{attrs:{loading:"lazy",src:e.imgLink}})]),t._v(" "),n("p",[t._v(t._s(e.title))])])])})),0)])]),t._v(" "),n("div",{staticClass:"support-content"},[n("FunctionalSupport",{attrs:{content:t.websiteContent}})],1)])}),o,!1,null,"4665eef2",null);e.default=component.exports;installComponents(component,{FunctionalSupport:n(1976).default})}}]);