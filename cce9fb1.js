(window.webpackJsonp=window.webpackJsonp||[]).push([[124,50],{1546:function(t,e,l){},1861:function(t,e,l){"use strict";l(1546)},2024:function(t,e,l){"use strict";l.r(e);var c={name:"HomeVideo",components:{LiteYoutube:l(546).default}},o=(l(1861),l(6)),component=Object(o.a)(c,(function(){var t=this,e=this,l=e.$createElement,c=e._self._c||l;return c("div",{staticClass:"HomeVideo"},[c("div",{staticClass:"close-video"},[c("i",{staticClass:"el-icon-circle-close",on:{click:function(){t.$emit("handlerCloseVideo")}}})]),e._v(" "),c("LiteYoutube",{attrs:{width:"100%",height:500,className:"videoShow",src:"https://www.youtube.com/embed/E5_3yi2bTdk?autoplay=1"}})],1)}),[],!1,null,"185653da",null);e.default=component.exports},485:function(t,e,l){t.exports=l.p+"img/vediofallback.jpg"},486:function(t,e,l){},536:function(t,e,l){"use strict";l(486)},546:function(t,e,l){"use strict";l.r(e);var c={data:function(){return{playVideo:!0}},methods:{play:function(){this.playVideo=!this.playVideo}},props:{src:{type:String,default:""},fallback:{type:String,default:l(485)},className:{type:String,default:""},width:{type:String,default:560},height:{type:String,default:315}}},o=(l(536),l(6)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.playVideo?c("div",{staticClass:"fallback",class:t.className,on:{click:t.play}},[c("img",{staticClass:"fallback_img",attrs:{src:l(485),alt:""}}),t._v(" "),c("button",{staticClass:"lty-playbtn"})]):c("iframe",{attrs:{width:t.width,height:t.height,src:t.src,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",rel:"nofollow"}})}),[],!1,null,"52a322fe",null);e.default=component.exports}}]);