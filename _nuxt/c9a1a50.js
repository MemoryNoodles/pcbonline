(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{386:function(e,t,l){},511:function(e,t,l){"use strict";l(386)},512:function(e,t,l){"use strict";l.r(t);l(19),l(27),l(49),l(50);var o=l(13),r=l(3);l(48),l(21),l(26);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"WhyChooseMobile",data:function(){return{productDataList:this.flexible,pages:[],productTitle1:'<span class="yel">Contact Us in One-Click<span> and ',productTitle2:'<span class="yel">We Will Reply S</span>oon',formData:{name:null,email:null,message:null},key:"6LdM76QZAAAAAI3w4p5NullSi3-ClMmGWGygh-8v",flagNullField:[],isNext:!1,validateCode:!1,notify:!1,recab:{}}},methods:{submitForm:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var l,o,r,n,m,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=c({},e.formData),o=[],Object.keys(l).forEach((function(e){l[e]||o.push(e)})),e.flagNullField=o,o.length>0&&Message.error("Form validate error;"+JSON.stringify(o)),r=new FormData,n=e.formData,m=n.name,d=n.email,f=n.message,r.append("email",d),r.append("msg",f),r.append("name",m),e.$axios.post("https://www.pcbonline.com/api/sendContactEmail",r).then((function(t){e.formData.name=null,e.formData.email=null,e.formData.message=null,e.notify=!0,Message.success("Your email has been sent. We will contact you ASAP!"),setTimeout((function(){e.notify=!1}),1e4)}));case 11:case"end":return t.stop()}}),t)})))()}}},d=(l(511),l(2)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"contact-us-mobile col-12 e c",staticStyle:{"margin-top":"68px"}},[l("div",{staticClass:"col-12 e c"},[l("h2",{staticClass:"header col-12",staticStyle:{"margin-top":"60px"},domProps:{innerHTML:e._s(e.productTitle1)}}),e._v(" "),l("h2",{staticClass:"header col-12",domProps:{innerHTML:e._s(e.productTitle2)}})]),e._v(" "),l("div",{staticClass:"middle-part col-12 e c"},[l("div",{staticClass:"card col-11 e c"},[l("div",{staticClass:"form-box col-12"},[l("div",{staticClass:"bx-con col-12"},[l("div",{staticClass:"inp cpl-12 col-s"},[l("div",{staticClass:"col-12 col-s input-item"},[l("strong",[e._v("Your Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.name,expression:"formData.name"}],class:{flagNullField:e.flagNullField.indexOf("name")>-1},attrs:{type:"text","aria-label":"name"},domProps:{value:e.formData.name},on:{input:function(t){t.target.composing||e.$set(e.formData,"name",t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-12 col-s input-item",staticStyle:{"margin-top":"50px"}},[l("strong",[e._v("Your Email")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],class:{flagNullField:e.flagNullField.indexOf("email")>-1},attrs:{type:"text","aria-label":"email"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}})])]),e._v(" "),l("div",{staticClass:"inp two col-12"},[l("div",{staticClass:"input-item col-12 col-s"},[l("strong",[e._v("Your Message")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.message,expression:"formData.message"}],class:{flagNullField:e.flagNullField.indexOf("message")>-1},attrs:{"aria-label":"message"},domProps:{value:e.formData.message},on:{input:function(t){t.target.composing||e.$set(e.formData,"message",t.target.value)}}})])])])])])]),e._v(" "),l("div",{staticClass:"lower-part col-12 e c"},[l("div",{staticClass:"col-11 e c",staticStyle:{"margin-top":"41px"}},[l("div",{staticClass:"col-12 row-s"},[l("div",{staticClass:"submit btn-reversal primary col-12 e c",class:(!e.formData.name||!e.formData.email||!e.formData.message)&&"disabled",attrs:{disabled:!e.formData.name||!e.formData.email||!e.formData.message},on:{click:e.submitForm}},[e._v("\n          Send an Email\n        ")])])])])])}),[],!1,null,"4fb4d756",null);t.default=component.exports}}]);