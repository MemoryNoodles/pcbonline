(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1422:function(t,e,r){t.exports=r.p+"img/mobile_quality_img2.jpg"},1423:function(t,e,r){},1669:function(t,e,r){t.exports=r.p+"img/mobile_quality_img8.png"},1670:function(t,e,r){"use strict";r(1423)},1945:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-control-drags"},[e("img",{attrs:{loading:"lazy",src:r(1669),alt:"pcbonline-quality-img8"}})])}],n={data:function(){return{pages:[{imgLink:r(1422),productWord:"PCB quality control process",boxColor:"#ffca00"},{imgLink:r(1422),productWord:"Assemble quality control process",boxColor:"#2952ea"}],temporaryData:{isStackClick:!0,offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",lastZindex:"",rotate:0,lastRotate:0,visible:3,tracking:!1,animation:!1,currentPage:0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10},basicdata:{start:{},end:{}}}},methods:{touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.isStackClick=!1,this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var e=this.rotateDirection(),r=this.angleRatio();this.temporaryData.rotate=e*this.offsetWidthRatio*15*r}},touchend:function(t,e){if(this.temporaryData.isStackClick&&(this.$emit("click",e),this.temporaryData.isStackClick=!1),this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!1,this.temporaryData.animation=!0,this.offsetRatio>=.2){var r=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*r):-Math.abs(this.temporaryData.poswidth*r),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.lastZindex=20,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick((function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0}))},onTransitionEnd:function(t){var e=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===e&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1,this.temporaryData.lastZindex=-1)},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight;return-1*(2*this.temporaryData.offsetY/t-1)||0},inStack:function(t,e){for(var r=[],o=this.temporaryData.visible,n=this.pages.length,i=0;i<o;i++)e+i<n?r.push(e+i):r.push(e+i-n);return r.indexOf(t)>=0},transform:function(t){var e=this.temporaryData.currentPage,r=this.pages.length,o=0===e?this.pages.length-1:e-1,style={},n=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,e)){var h=t-e>0?t-e:t-e+r;style.opacity="1",style.transform="translate3D(0,0,"+-60*(h-this.offsetRatio)+"px)",style.zIndex=n-h,this.temporaryData.tracking||(style.transitionTimingFunction="ease",style.transitionDuration="300ms")}else t===o?(style.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",style.opacity=this.temporaryData.lastOpacity,style.zIndex=this.temporaryData.lastZindex,style.transitionTimingFunction="ease",style.transitionDuration="300ms"):(style.zIndex="-1",style.transform="translate3D(0,0,"+-1*n*60+"px)");return style}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var style={};return style.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",style.opacity=this.temporaryData.opacity,style.zIndex=10,this.temporaryData.animation&&(style.transitionTimingFunction="ease",style.transitionDuration=(this.temporaryData.animation?300:0)+"ms"),style}}},computed:{offsetRatio:function(){var t=1-(414-Math.abs(this.temporaryData.poswidth))*(500-Math.abs(this.temporaryData.posheight))/207e3||0;return t>1?1:t},offsetWidthRatio:function(){return 1-(414-Math.abs(this.temporaryData.poswidth))/414||0}}},h=(r(1670),r(7)),component=Object(h.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mobile-management"},[r("h3",[t._v("Quality Management Process")]),t._v(" "),t._l(t.pages,(function(e,o){return r("div",{key:o,staticClass:"mobile-product",style:[t.transformIndex(o),t.transform(o),{background:e.boxColor}],on:{"!touchmove":function(e){return e.stopPropagation(),t.touchmove.apply(null,arguments)},"!touchstart":function(e){return e.stopPropagation(),t.touchstart.apply(null,arguments)},"!touchend":function(e){return e.stopPropagation(),t.touchend(e,o)},"!touchcancel":function(e){return e.stopPropagation(),t.touchend(e,o)},"!mousedown":function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart.apply(null,arguments)},"!mouseup":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,o)},"!mousemove":function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove.apply(null,arguments)},"!mouseout":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,o)},"webkit-transition-end":function(e){return t.onTransitionEnd(o)},transitionend:function(e){return t.onTransitionEnd(o)}}},[r("div",{staticClass:"mobile-content"},[r("div",{staticClass:"roof-icon"},[r("img",{attrs:{loading:"lazy",src:e.imgLink}})]),t._v(" "),r("p",[t._v(t._s(e.productWord))])])])})),t._v(" "),r("div",{staticClass:"mobile-control-word"},[t._v("\n    We set up a complete training mechanism to ensure standard operations.\n    Meanwhile, we constantly optimize and update process, insist on equipment\n    maintenance, and promote abnormality solving mechanism. Every effort is\n    made to optimize quality management and meet product quality requirements\n  ")]),t._v(" "),t._m(0)],2)}),o,!1,null,"58a2a863",null);e.default=component.exports}}]);