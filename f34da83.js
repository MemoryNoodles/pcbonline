(window.webpackJsonp=window.webpackJsonp||[]).push([[115,38],{1143:function(t,e,l){t.exports=l.p+"img/vediofallback.jpg"},1144:function(t,e,l){},1193:function(t,e,l){"use strict";l(1144)},1202:function(t,e,l){"use strict";l.r(e);var c={data:function(){return{playVideo:!0}},methods:{play:function(){this.playVideo=!this.playVideo}},props:{src:{type:String,default:""},fallback:{type:String,default:l(1143)},className:{type:String,default:""},width:{type:String,default:560},height:{type:String,default:315}}},o=(l(1193),l(7)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.playVideo?c("div",{staticClass:"fallback",class:t.className,on:{click:t.play}},[c("img",{staticClass:"fallback_img",attrs:{src:l(1143),alt:""}}),t._v(" "),c("button",{staticClass:"lty-playbtn"})]):c("iframe",{attrs:{width:t.width,height:t.height,src:t.src,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",rel:"nofollow"}})}),[],!1,null,"52a322fe",null);e.default=component.exports},1795:function(t,e,l){},2071:function(t,e,l){"use strict";l(1795)},2203:function(t,e,l){"use strict";l.r(e);var c={name:"HomeVideo",components:{LiteYoutube:l(1202).default}},o=(l(2071),l(7)),component=Object(o.a)(c,(function(){var t=this,e=this,l=e.$createElement,c=e._self._c||l;return c("div",{staticClass:"HomeVideo"},[c("div",{staticClass:"close-video"},[c("i",{staticClass:"el-icon-circle-close",on:{click:function(){t.$emit("handlerCloseVideo")}}})]),e._v(" "),c("LiteYoutube",{attrs:{width:"100%",height:500,className:"videoShow",src:"https://www.youtube.com/embed/E5_3yi2bTdk?autoplay=1"}})],1)}),[],!1,null,"185653da",null);e.default=component.exports}}]);