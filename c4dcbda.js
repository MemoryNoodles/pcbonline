(window.webpackJsonp=window.webpackJsonp||[]).push([[116,38],{1130:function(t,e,l){},1395:function(t,e,l){"use strict";l(1130)},1553:function(t,e,l){"use strict";l.r(e);var c={name:"HomeVideo",components:{LiteYoutube:l(509).default}},o=(l(1395),l(7)),component=Object(o.a)(c,(function(){var t=this,e=this,l=e.$createElement,c=e._self._c||l;return c("div",{staticClass:"HomeVideo"},[c("div",{staticClass:"close-video"},[c("i",{staticClass:"el-icon-circle-close",on:{click:function(){t.$emit("handlerCloseVideo")}}})]),e._v(" "),c("LiteYoutube",{attrs:{width:"100%",height:500,className:"videoShow",src:"https://www.youtube.com/embed/TJDiuYi2HqU?autoplay=1"}})],1)}),[],!1,null,"7a298840",null);e.default=component.exports},436:function(t,e,l){t.exports=l.p+"img/pcba-service-video.webp"},437:function(t,e,l){},506:function(t,e,l){"use strict";l(437)},509:function(t,e,l){"use strict";l.r(e);var c={data:function(){return{playVideo:!0}},methods:{play:function(){this.playVideo=!this.playVideo}},props:{src:{type:String,default:""},fallback:{type:String,default:l(436)},className:{type:String,default:""},width:{type:String,default:560},height:{type:String,default:315}}},o=(l(506),l(7)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.playVideo?c("div",{staticClass:"fallback",class:t.className,on:{click:t.play}},[c("img",{staticClass:"fallback_img",attrs:{src:l(436),alt:"PCB assembly service video"}}),t._v(" "),c("button",{staticClass:"lty-playbtn"})]):c("iframe",{attrs:{width:t.width,height:t.height,src:t.src+"&vq=hd1080",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",rel:"nofollow"}})}),[],!1,null,"13794ce8",null);e.default=component.exports}}]);