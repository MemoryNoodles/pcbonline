(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1500:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{productTitle1:"",productTitle2:"",productDataList:this.flexible,pages:[],temporaryData:{isStackClick:!0,offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",lastZindex:"",rotate:0,lastRotate:0,visible:3,tracking:!1,animation:!1,currentPage:0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10},basicdata:{start:{},end:{}}}},props:{flexible:{type:Object,default:function(){}}},watch:{productDataList:function(t){this.productDataList=t}},mounted:function(){if(this.productDataList){var t=this.productDataList,e=t.title_1,r=t.title_2,img=t.img,title=t.title,ul=t.ul;this.pages=[{img:img[0],imgIcon:o(1775),imgAlt:title[0],title:title[0],ul:ul[0]},{img:img[1],imgIcon:o(1776),imgAlt:title[1],title:title[1],ul:ul[1]},{img:img[2],imgIcon:o(1777),imgAlt:title[2],title:title[2],ul:ul[2]},{img:img[3],imgIcon:o(1778),imgAlt:title[3],title:title[3],ul:ul[3]}],this.productTitle1=e,this.productTitle2=r}},methods:{touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.isStackClick=!1,this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var e=this.rotateDirection(),o=this.angleRatio();this.temporaryData.rotate=e*this.offsetWidthRatio*15*o}},touchend:function(t,e){if(this.temporaryData.isStackClick&&(this.$emit("click",e),this.temporaryData.isStackClick=!1),this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!1,this.temporaryData.animation=!0,this.offsetRatio>=.2){var o=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*o):-Math.abs(this.temporaryData.poswidth*o),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.lastZindex=20,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick((function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0}))},onTransitionEnd:function(t){var e=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===e&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1,this.temporaryData.lastZindex=-1)},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight;return-1*(2*this.temporaryData.offsetY/t-1)||0},inStack:function(t,e){for(var o=[],r=this.temporaryData.visible,n=this.pages.length,i=0;i<r;i++)e+i<n?o.push(e+i):o.push(e+i-n);return o.indexOf(t)>=0},transform:function(t){var e=this.temporaryData.currentPage,o=this.pages.length,r=0===e?this.pages.length-1:e-1,style={},n=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,e)){var c=t-e>0?t-e:t-e+o;style.opacity="1",style.transform="translate3D(0,0,"+-60*(c-this.offsetRatio)+"px)",style.zIndex=n-c,this.temporaryData.tracking||(style.transitionTimingFunction="ease",style.transitionDuration="300ms")}else t===r?(style.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",style.opacity=this.temporaryData.lastOpacity,style.zIndex=this.temporaryData.lastZindex,style.transitionTimingFunction="ease",style.transitionDuration="300ms"):(style.zIndex="-1",style.transform="translate3D(0,0,"+-1*n*60+"px)");return style}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var style={};return style.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",style.opacity=this.temporaryData.opacity,style.zIndex=10,this.temporaryData.animation&&(style.transitionTimingFunction="ease",style.transitionDuration=(this.temporaryData.animation?300:0)+"ms"),style}}},computed:{offsetRatio:function(){var t=1-(414-Math.abs(this.temporaryData.poswidth))*(500-Math.abs(this.temporaryData.posheight))/207e3||0;return t>1?1:t},offsetWidthRatio:function(){return 1-(414-Math.abs(this.temporaryData.poswidth))/414||0}}},n=(o(2005),o(7)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 e c",staticStyle:{position:"relative"}},[r("div",{staticClass:"back-sp-color"}),t._v(" "),r("div",{staticClass:"mobile-product col-10 e c",staticStyle:{position:"relative","margin-top":"50px"}},[r("div",{staticClass:"col-12 e c"},[r("h2",{staticClass:"col-12 header",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"}},[r("span",{domProps:{innerHTML:t._s(t.productTitle1+t.productTitle2)}})])]),t._v(" "),t._l(t.pages,(function(e,n){return r("div",{key:n,staticClass:"product-card",style:[t.transformIndex(n),t.transform(n)],on:{"!touchmove":function(e){return e.stopPropagation(),t.touchmove.apply(null,arguments)},"!touchstart":function(e){return e.stopPropagation(),t.touchstart.apply(null,arguments)},"!touchend":function(e){return e.stopPropagation(),t.touchend(e,n)},"!touchcancel":function(e){return e.stopPropagation(),t.touchend(e,n)},"!mousedown":function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart.apply(null,arguments)},"!mouseup":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,n)},"!mousemove":function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove.apply(null,arguments)},"!mouseout":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,n)},"webkit-transition-end":function(e){return t.onTransitionEnd(n)},transitionend:function(e){return t.onTransitionEnd(n)}}},[r("div",{staticClass:"product-content e c"},[r("img",{staticClass:"img-prod col-11",attrs:{loading:"lazy",src:o(1996)(""+e.img),alt:e.imgAlt,title:e.imgAlt,format:"webp"}}),t._v(" "),r("div",{staticClass:"lower-content"},[r("div",{staticStyle:{position:"relative"}},[r("img",{staticClass:"icon-img",attrs:{alt:"order_icon",loading:"lazy",src:e.imgIcon}}),t._v(" "),r("h2",{staticClass:"product-title",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"}},[t._v("\n              "+t._s(e.title)+"\n            ")])]),t._v(" "),t._l(e.ul,(function(e,o){return r("div",{key:o,staticClass:"content",staticStyle:{"align-self":"flex-start","font-family":"'Roboto'"}},[t._v("\n            ·"+t._s(e)+"\n          ")])}))],2)])])})),t._v(" "),r("div",{staticClass:"col-12 e c",staticStyle:{position:"absolute",top:"731px"}},[r("div",{staticClass:"row-s"},[r("div",{staticClass:"col-1 e c row-s block-point",class:[0==t.temporaryData.currentPage?"blue-point":"gray-point"],staticStyle:{"margin-right":"13px"}}),t._v(" "),r("div",{staticClass:"col-1 e c row-s block-point",class:[1==t.temporaryData.currentPage?"blue-point":"gray-point"],staticStyle:{"margin-right":"13px"}}),t._v(" "),r("div",{staticClass:"col-1 e c row-s block-point",class:[2==t.temporaryData.currentPage?"blue-point":"gray-point"],staticStyle:{"margin-right":"13px"}}),t._v(" "),r("div",{staticClass:"col-1 e c row-s block-point",class:[3==t.temporaryData.currentPage?"blue-point":"gray-point"]})])])],2)])}),[],!1,null,"6fc7e8ef",null);e.default=component.exports},1775:function(t,e,o){t.exports=o.p+"img/1.png"},1776:function(t,e,o){t.exports=o.p+"img/2.png"},1777:function(t,e,o){t.exports=o.p+"img/3.png"},1778:function(t,e,o){t.exports=o.p+"img/4.png"},1779:function(t,e,o){},1996:function(t,e,o){var map={".":1500,"./":1500,"./img/1.png":1775,"./img/2.png":1776,"./img/3.png":1777,"./img/4.png":1778,"./img/home_img10.jpg":1997,"./img/home_img10.webp":1998,"./img/home_img7.jpg":1999,"./img/home_img7.webp":2e3,"./img/home_img8.jpg":2001,"./img/home_img8.webp":2002,"./img/home_img9.jpg":2003,"./img/home_img9.webp":2004,"./index":1500,"./index.vue":1500};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=1996},1997:function(t,e,o){t.exports=o.p+"img/home_img10.jpg"},1998:function(t,e,o){t.exports=o.p+"img/home_img10.webp"},1999:function(t,e,o){t.exports=o.p+"img/home_img7.jpg"},2e3:function(t,e,o){t.exports=o.p+"img/home_img7.webp"},2001:function(t,e,o){t.exports=o.p+"img/home_img8.jpg"},2002:function(t,e,o){t.exports=o.p+"img/home_img8.webp"},2003:function(t,e,o){t.exports=o.p+"img/home_img9.jpg"},2004:function(t,e,o){t.exports=o.p+"img/home_img9.webp"},2005:function(t,e,o){"use strict";o(1779)}}]);