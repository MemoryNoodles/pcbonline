(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1412:function(e,t){},1413:function(e,t){},1419:function(e,t,n){},1593:function(e,t,n){"use strict";n(1419)},250:function(e,t,n){},2536:function(e,t,n){"use strict";n.r(t);var r=n(2),l=(n(46),n(79),n(162),n(42),n(30),n(285),n(81)),o=n(1),c=n(1404);o.default.use(c.a,{shortname:"pcbonline"});var A={name:"blog-detail",watchQuery:!0,inject:["isLogin"],data:function(){return{content:"",blog_id:"",articleRest:{},socialMedia:[{link:"https://www.facebook.com/pcbonlinelimited",icon:"facebook"},{link:"https://twitter.com/_PCBONLINE",icon:"tweet"},{link:"https://www.linkedin.com/company/pcbonlineltd/",icon:"link"},{link:"",icon:"copy",fn:!0}],isFeedBack:!1,contents:{url:"https://www.pcbonline.com/blog/",title:"SMT and PTH Assembly - PCBONLINE",description:"PCBONLINE offers quality-guaranteed consignment PCB assembly to simplify your electronic production and save your budget most."},CommentInfo:""}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var r,l,o,c,A,d,m,h,f,C,v,data,w,k,I,B,T,E,_,y,U,R,S,O,time,x,N,P,Q,F,D,K,L,content,M;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.params,l=e.app,o=e.error,c=r.id,A=c.split("."),d=A[0],c,m=l.router.history.current.path,console.log(c.endsWith(".html"),c,m,"articleName"),!m.includes(".html")||m.endsWith(".html")){t.next=10;break}return o({statusCode:404,message:"Page Not Found"}),t.abrupt("return");case 10:return c=c.split(".")[0],h=n(1405),f=new h.Agent({rejectUnauthorized:!1}),C="https://www.pcbonline.com/blogapi/articleInfoByName?articleName=".concat(c),t.next=16,l.$axios.get(C,{httpsAgent:f});case 16:if(v=t.sent,data=v.data.data){t.next=22;break}o({statusCode:404,message:"Page Not Found"}),t.next=86;break;case 22:k=(w=data||{}).articleContent,I=w.articleClick,B=w.articleLike,T=w.articleTime,E=w.articleTitle,_=w.id,y=w.articleKeyword,U=w.articleDescribe,R=w.articleClassify,S=w.articleComment,O=w.articleName,x=(time=T)?time.split(" ")[0]:"",N=x?x.split("-")||0:"",P=N[0],Q=N[1],F=N[2],D="",t.t0=Q,t.next="01"===t.t0?33:"02"===t.t0?35:"03"===t.t0?37:"04"===t.t0?39:"05"===t.t0?41:"06"===t.t0?43:"07"===t.t0?45:"08"===t.t0?47:"09"===t.t0?49:"10"===t.t0?51:"11"===t.t0?53:"12"===t.t0?55:57;break;case 33:case 57:return D="Jan",t.abrupt("break",59);case 35:return D="Feb",t.abrupt("break",59);case 37:return D="Mar",t.abrupt("break",59);case 39:return D="Apr",t.abrupt("break",59);case 41:return D="May",t.abrupt("break",59);case 43:return D="Jun",t.abrupt("break",59);case 45:return D="Jul",t.abrupt("break",59);case 47:return D="Aug",t.abrupt("break",59);case 49:return D="Sept",t.abrupt("break",59);case 51:return D="Oct",t.abrupt("break",59);case 53:return D="Nov",t.abrupt("break",59);case 55:return D="Dec",t.abrupt("break",59);case 59:K="",L=new Date(x).getDay(),t.t1=L,t.next=0===t.t1?64:1===t.t1?66:2===t.t1?68:3===t.t1?70:4===t.t1?72:5===t.t1?74:6===t.t1?76:78;break;case 64:return K="Sun",t.abrupt("break",80);case 66:case 78:return K="Mon",t.abrupt("break",80);case 68:return K="Tues",t.abrupt("break",80);case 70:return K="Wed",t.abrupt("break",80);case 72:return K="Thur",t.abrupt("break",80);case 74:return K="Fri",t.abrupt("break",80);case 76:return K="Sat",t.abrupt("break",80);case 80:return content=k,M={articleClick:I,articleLike:B,dataHandle:K+", "+D+" "+F+", "+P,articleTitle:E,articleKeyword:y,articleDescribe:U,articleClassify:R,articleComment:S,articleId:_,articleName:O},l.head.title=M.articleTitle,l.head.meta=[{hid:"description",name:"description",content:M.articleDescribe}],t.abrupt("return",{content:content,articleRest:M,blog_id:d});case 86:case"end":return t.stop()}}),t)})))()},mounted:function(){var button=document.querySelector(".btn-reversal.primary");button&&button.parentNode.parentNode.remove()},methods:{dateConversion:function(time){var e=time.split(" ")[0],t=e.split("-")||0,n=t[0],r=t[1],l=t[2],o="";switch(r){case"01":default:o="Jan";break;case"02":o="Feb";break;case"03":o="Mar";break;case"04":o="Apr";break;case"05":o="May";break;case"06":o="Jun";break;case"07":o="Jul";break;case"08":o="Aug";break;case"09":o="Sept";break;case"10":o="Oct";break;case"11":o="Nov";break;case"12":o="Dec"}var c="";switch(new Date(e).getDay()){case 0:c="Sun";break;case 1:default:c="Mon";break;case 2:c="Tues";break;case 3:c="Wed";break;case 4:c="Thur";break;case 5:c="Fri";break;case 6:c="Sat"}return c+" "+o+" "+l+" "+n},flagLogin:function(){return Object(l.b)()},redirectLogin:function(){window.location.href="https://sys.pcbonline.com/user/login?title=".concat(this.articleRest.articleName,"&from=blog")},copyLink:function(){var e=window.location.href,t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none",Message.success("Copy Link Success!")},handleComment:function(){var e=this,t=JSON.parse(Cookies.get("user-login"));t=Number(t);var n=this.articleRest.articleId,r=this.CommentInfo;this.$axios.$post("https://www.pcbonline.com//blogapi/addArticleComment",{userId:t,articleId:n,commitContent:r}).then((function(t){Message.success("Comment success!"),e.CommentInfo=""}))}},head:function(){return{title:this.articleRest.articleTitle,meta:[{hid:"description",name:"description",content:this.articleRest.articleDescribe},{hid:"keywords",name:"keywords",content:this.articleRest.articleKeyword}],link:[{rel:"canonical",href:"https://www.pcbonline.com/blog/"+this.articleRest.articleName+".html"},{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[{defer:!0,src:"https://embed.tawk.to/5c8511c8c37db86fcfccf818/default",charset:"UTF-8"}]}}},d=(n(1593),n(7)),component=Object(d.a)(A,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"blog_wrap"},[r("div",{staticClass:"header"},[r("div",{staticClass:"line_top"}),e._v(" "),r("p",{staticClass:"blog_des"},[r("nuxt-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(e._s(">")+"\n        "),r("nuxt-link",{attrs:{to:"/blog/"}},[e._v("Blog")]),e._v(e._s(">")+"\n        "+e._s(e.articleRest.articleTitle)+"\n      ")],1),e._v(" "),r("h1",{staticClass:"title_custom"},[e._v(e._s(e.articleRest.articleTitle))]),e._v(" "),r("div",[r("span",{staticClass:"keyword"},[e._v("\n          "+e._s(e.articleRest.articleKeyword)+"\n        ")])]),e._v(" "),r("div",{staticClass:"team_des"},[r("div",{staticClass:"team_item"},[r("span",[e._v("PCBONLINE Team")]),r("span",[e._v(" "+e._s(e.articleRest.dataHandle))])]),e._v(" "),r("div",{staticClass:"team_item"},[r("img",{staticClass:"eye_img",attrs:{src:n(568),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.articleRest.articleClick))])])])]),e._v(" "),r("div",{staticClass:"main"},[r("div",{staticClass:"article",domProps:{innerHTML:e._s(e.content)}}),e._v(" "),r("div",{staticClass:"rigid_right"},[r("CommonSendEmail",{attrs:{origin:1}})],1)])]),e._v(" "),[r("div",{staticClass:"comments"},[r("Disqus",{attrs:{url:"/articles/"+e.blog_id,identifier:"/articles/"+e.blog_id}})],1)],e._v(" "),r("CommonSlideFix",{attrs:{Share:e.content}})],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonSendEmail:n(283).default,CommonSlideFix:n(380).default})},281:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABoUlEQVQ4EY1RPUhCURT+3nuKhYUgFEVUBEG4NAURDUG0SOAcQQQtjU0FTTU0BC1tIQQRLRUNQUSEDiKFEBQhLZHQENEmmP08f2/nXL1PRX124Lxz7vm+8/sAEiHEEVtsH3wJ+aKIgdXdT7JCSMj2oxHrgxhhUo+maQEuEqlJ4ULRh4zYOaQWLHWMRkEmkQYZ08oEEYvnisP9Bn5MAYehoa9bBzU1dCawbAbT+s1jTj++NnUCOW5h3PdOshp8VIvSNUqEfTLTVH6jAb8UooorpImmBAaIEGHrIKcQf8nj+1fA69GRTBUxMepkTLbnW8oLXd1mcBHNYKDHAO+wtujmNTUHU5e3UnL/Trcu91+YbeewvagZKsew51embsbjiqRzpOekXXU8JtQFqwKEj5COlfVeQXJJ9bCzdJBnhVORtPLVr5SnPA2ZeErkEYtnsb7UgbOwicFeA6/vBWRzAjPjLsz722Qun5idmiP5hhxIvOUR2vPCWTUbJ/snXQhMuVRjy9ZMYEX/4agJLCrtFbEeLZxqbtWgOCHgknKTLfIZ9inOHym40+v9/QreAAAAAElFTkSuQmCC"},282:function(e,t,n){"use strict";n(250)},283:function(e,t,n){"use strict";n.r(t);n(287),n(242);var r=n(288),l=n.n(r),o=(n(289),n(367)),c=n.n(o),A=(n(290),n(291)),d=n.n(A),m=(n(285),n(25),n(292),n(24),n(49)),h=n.n(m),f={name:"index",components:{"el-button":d.a,"el-input":c.a,"el-alert":l.a},props:{origin:Number},data:function(){return{form:{},submitDisable:!0,fileInfo:{},loading:!1,sendEmailStatus:!1,alertType:"success",alertText:""}},watch:{form:{deep:!0,handler:function(e){3===Object.values(e).filter((function(e){return e})).length?this.submitDisable=!1:this.submitDisable=!0}}},methods:{handleFile:function(e){var t=e.target.files[0];this.fileInfo=t},submitClick:function(){var e=this,t=new FormData;t.append("name",this.form.name),t.append("email",this.form.email),t.append("msg",this.form.msg),t.append("file",this.fileInfo),t.append("origin",this.origin||2);var n=sessionStorage.getItem("isAds")?parseInt(sessionStorage.getItem("isAds")):0;t.append("isAds",n),this.loading=!0,h.a.post("https://www.pcbonline.com/api/sendContactEmail",t).then((function(t){200===t.status&&t.data.success?(e.alertType="success",e.alertText="Your email has been sent. We will contact you ASAP",window.gtag_report_conversion()):"1005"===t.data.code?(e.alertType="error",e.alertText="The file size cannot exceed 30MB"):"1006"===t.data.code?(e.alertType="error",e.alertText="Only accept files with file name suffixes in rar, zip, or 7z formats"):"1007"===t.data.code?(e.alertType="error",e.alertText="The mailbox format is incorrect."):(e.alertType="error",e.alertText=t.data.result),e.loading=!1,e.sendEmailStatus=!0,setTimeout((function(){e.sendEmailStatus=!1}),3e3)}))}}},C=(n(282),n(7)),component=Object(C.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"free_qoute"},[r("h4",{staticClass:"title"},[e._v("GET A FREE QUOTE")]),e._v(" "),r("div",{staticClass:"search-form"},[r("el-input",{attrs:{type:"text",placeholder:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("div",{staticClass:"search-form"},[r("el-input",{attrs:{type:"text",placeholder:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("div",{staticClass:"search-form"},[r("el-input",{attrs:{type:"textarea",placeholder:"Message",rows:8,name:"textarea"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1),e._v(" "),r("div",{staticClass:"upload"},[e._v("File Upload")]),e._v(" "),r("div",{staticClass:"uploadFile_wrap"},[r("div",{staticClass:"uploadFile"},[r("el-button",{staticClass:"btn_file",attrs:{type:"primary"}},[r("i",{staticClass:"el-icon-upload2"}),e._v("\n          Select file")]),e._v(" "),r("input",{attrs:{type:"file"},on:{change:e.handleFile}})],1),e._v(" "),e.fileInfo.name?r("div",{staticClass:"file_info"},[r("img",{attrs:{src:n(281),alt:""}}),e._v(e._s(e.fileInfo.name)+"\n      ")]):e._e()]),e._v(" "),r("div",{staticClass:"sub_btn"},[r("el-button",{staticClass:"btn",attrs:{disabled:e.submitDisable,type:"primary",loading:e.loading},on:{click:e.submitClick}},[e._v("Submit")])],1)]),e._v(" "),e.sendEmailStatus?r("el-alert",{attrs:{"show-icon":"",title:e.alertText,type:e.alertType,effect:"dark",closable:!1}}):e._e()],1)}),[],!1,null,"385b7570",null);t.default=component.exports},329:function(e,t,n){},373:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABcSURBVAiZfc6xEURgGIThb4xQA/pSgBL0IVCC5DJCHdyVYkYLZgSPgOD8gw333dndwII2UqFxqHuDPfInONzBGhuGLGmdI2KNiPI/XZ3pH4rUnO7M8TKKLz7pkx0YIG/ZTuM6NgAAAABJRU5ErkJggg=="},374:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABcSURBVAiZdY2xDUBQAAWP/NICKkspDWEQhREkSkoj2IURJIpTIOGHV97lvQdR1EZdYth6pr5BUPsvOLzgJQZ1V6vnbArkwAas8WGmzler/JLTnwzqeMsklkAHFAdu02k+OdCf5wAAAABJRU5ErkJggg=="},375:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIiSURBVFiF7Zgxb9NAGIbfO5+xUC4JLkobqT8BCS8sLWIK6mLmoCgdkPgHqRgYmTpE9B9UYmiE6JwsSEwRMOdHBKWOwEriCBk7dwyujRM5iquYdvEr3eC77773Od9Z8ncE17rsOdWPX9w30zmaY1vser4kyFAqI7KiU6tUQKdR09p1k48AgABA671tfBv4nyeO3M3SdJ3KnFiHBjs6O9EH5LLnVM8+/R7clnkcovXyvqH41ZN3Q0s8Xw1QKEBJdk3K5fzuHxRGtqBsOkczPvDimYa3rzn0Is10xfZM4PTcQbfvRn3TOZrkcX0s4gfu64eHmZvHIZ6++hk9q4xIFjdXKCLzXzNgeAV4i+1MVQXY3wN2ikFuhQILEYx5viSJSxUyG3MgyDG8Wj+eCEBJNuZxiBsB3KZygBwgB8gBcoAcIAfIAXIAlibo+8DFRc/BxBGpkpY5xbHJcWBoG2M3vgHPlzcyB4CJI3DRc1LF3vkWbARQGcGxyVHm6VnDLUijxDMgZFDRhP/zB4aGJ4/uQWXprgw8Xy7Fqsr62LWFyf7e8sS05quxYWm2TkxlRIb14UIEBaRepNgpAg94ALONhPyXw56JqC68BpW0olMrPuH03IE9C6K2NY/nCMvzuCo6tVipgM6PMVphZ7fvott3oWT8fSwSvuJSAR3aqGntMidW0oQs26rKnFiNmtamdZOPDg12lATxvxReUtVNPop2+a6u6f4CALD5cuQNURcAAAAASUVORK5CYII="},376:function(e,t,n){e.exports=n.p+"img/chat.png"},377:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANdSURBVFiF7ZdNbBNHFMf/sxvvTrzGBjsBN+XrgFRQZSoEIYUkTRxaAyGCEokPKSrtrULKDaUScKgQlEMrriCkqIeqPVVqUhmQoEUhIQIBQpDk0iI4AIGIENux116P1/YOh2kSY0KB2LI55Ce9y9PO29++ebvaIfiPEz8by/6+njwaN6wOg3EH5ygpBEAlJQmHXfqtuZb8cOxb96OpPNoPTdQ+fMr/MlLcVVqt2bGrJLqihnzxx6mqW+T7s+Hl565kh98XuSnsKom2NctrZe797sdo3Kovt1A+6SzoeIRoUsKwOsot8zoShtUhJRnXyi3yOpKMa9KuZgpVIeV2mZVqtwTCOefpDEdwIIXzVxmG7mVgsBJ/Y3JQFYK2RhWtDSo2rVVAzl1lfEutAqqKLsYNjss3U+i9wnBjJF0SKaoSNK9X0N5CUeezwVYhXJ6FLJA17eNcqyTYullFWyPFpz7b9MKxCQvBAYZgP8OD0WzRxdattuFLP8XWTSqcmpBiKY7Lt0z09jFcHzaFYO6i33+qhtsJeFyAMuOKkfsZBPsZzg+mEIlZc5aqqZaws4liZxPFyhp5Op9IAuEYsKcrhFhipn5FfoFUGhgLiXBUAm4XsMgB+FZVwLfKga6vNQzeTaO3j2HgtolU+s3zqlGClo0q2ltU1PmU6byZASIxIBQFmClyuXKzCuYST4p4TICFDsDtBJwagX+DAv8GBdG4hYvXTPzZz3Dnn1fndePHNuxuofi8ToVWKbbQ4sCkLrqlJ4A3Pd7/Ck7BORDRRVTIQtTtBFwOCXsDFHsDFA/HsggOMFwbSqNhnYJdTSo+XDyzhfGk6FREB6x3mJC3EswlkwXGIyKoCnicwCInsOIDGZ37NHTum7nWTItOhaJidObCOwvmwlLAk+ciFtjFi6VR0a1wDNCNQqoXQTAX3SiOUD5S8UsWl3nBQpkXLJR5wUKZFywUieadR6L63P/1CiX/3lQhkJZUSfHcZHePXhbJqG6hu0d/KbekSoqT/YcnTw/9ax4sudFb8MlHyhnpQEA56fXI4XLL5OP1yOFvttuOS61+++iOehp4nyS9Hjm8o54Gtn2mjU2/IRf6jKW/XDKPTOrZr55NWA5mlvZsTBUCr0fSXU751wMB5WSr3z4KAC8AN2c+PyvaFTwAAAAASUVORK5CYII="},378:function(e,t,n){"use strict";n(329)},380:function(e,t,n){"use strict";n.r(t);var r=n(1),l=n(371),o=n.n(l);r.default.use(o.a);var c={data:function(){return{collpase:!1,arrowRight:n(373),arrowLeft:n(374),isScrolling:!1,scrollTimer:null,sildeBarList:[{id:1,name:"Phone",icon:n(375),url:"tel:+8618145847849",class:"web_call",mobile_class:"mobile_call"},{id:2,name:"WhatsApp",icon:n(376),url:"whatsapp://send?phone=+8618145847849",class:"web_chat",mobile_class:"mobile_chat"},{id:3,name:"Email",icon:n(377),url:"mailto:info@pcbonline.com?subject= I need a quote for a PCBA project. &body=Hi PCBONLINE, %0D%0A%0D%0APlease quote according to the attached Gerber, BOM, and components coordinate file, the quantity we need is XX pcs.",class:"web_email",mobile_class:"mobile_email"}],showIconPage:!0,showCallPage:!1,isMobile:!1}},methods:{handleToggle:function(){var e=this;this.collpase=!this.collpase,this.showCallPage&&setTimeout((function(){e.showIconPage=!0,e.showCallPage=!1,e.collpase=!e.collpase}),600)},sendEmail:function(){return window.location.href="mailto:info@pcbonline.com?subject= I need a quote for a PCBA project. &body=Hi PCBONLINE, %0D%0A%0D%0APlease quote according to the attached Gerber, BOM, and components coordinate file, the quantity we need is XX pcs.",window.gtag_report_conversion(),!1},handleSlideClick:function(e,t){var n=this;switch(e.id){case 1:"mobile"==t?location.href="tel:+8618145847849":(this.collpase=!this.collpase,setTimeout((function(){n.showIconPage=!1,n.showCallPage=!0,n.collpase=!n.collpase}),600));break;case 2:window.open(e.url,"_blank");break;case 3:this.sendEmail()}},scroll:function(){var e=this;window.addEventListener("scroll",(function(){e.isScrolling=!0,clearTimeout(e.scrollTimer),e.scrollTimer=setTimeout((function(){console.log(e.isScrolling,"isScrolling"),e.isScrolling=!1}),200)}))}},mounted:function(){this.scroll(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.isMobile=!0:this.isMobile=!1}},A=(n(378),n(7)),component=Object(A.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isMobile?n("div",{staticClass:"move_menu"},[n("ul",{staticClass:"move_nav"},e._l(e.sildeBarList,(function(t){return n("li",{key:t.id,on:{click:function(n){return e.handleSlideClick(t,"mobile")}}},[n("img",{class:t.mobile_class,attrs:{src:t.icon,alt:""}})])})),0)]):n("div",{staticClass:"help_menu_sales",class:e.collpase&&"collpase",style:{opacity:e.isScrolling?"0.3":"1"},attrs:{id:"sidebar"}},[n("div",{staticClass:"side_arrow",on:{click:e.handleToggle}},[n("img",{attrs:{id:"arrowImage",src:e.collpase?e.arrowLeft:e.arrowRight,alt:""}})]),e._v(" "),e.showIconPage?n("div",{staticClass:"side_items"},[n("ul",{staticClass:"help_nav"},e._l(e.sildeBarList,(function(t){return n("li",{key:t.id,staticClass:"nav_item",on:{click:function(n){return e.handleSlideClick(t)}}},[n("div",[n("img",{class:t.class,attrs:{src:t.icon,alt:""}}),e._v(" "),n("span",[e._v(e._s(t.name))])])])})),0)]):e._e(),e._v(" "),e.showCallPage?n("div",{staticClass:"call_page"},[n("p",[e._v("Sales Weekdays:")]),e._v(" "),n("p",[e._v("8:30AM-10:30PM UTC+8")]),e._v(" "),n("a",{staticClass:"call_phone",attrs:{href:"tel:+8618145847849"}},[e._v("+8618145847849")])]):e._e()])])}),[],!1,null,"1f43803c",null);t.default=component.exports},568:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABl0lEQVQ4EcVTMUvDUBB+L6XQNGAzOYhoQRxEcHBxdHUSBKmgtm4pdCk4iGOdRAVHoRlrO1iE/pMOgjhIsYiTS6JgAkoTvy+8F6rgWDw4vrvvLnf37r0IoUS6rtuO43hPE0I2m81PeFlJCmEPUICeGyRyudws8nuO4xzT/yGy2+2anucFZKvVqmSxWKUsAR8MsjAuoGvKVvE/gCXY3mdcSnmN7mXgDvAG1JAl32D0mQB5gdYRbCeeEOsKJwl6V2foe4ThADFA+rZtz5RKpZCneMIERT05MDkJp7Isq8DlFungyzuFZeAX7SAIrpgwTwfChDoqnAKz0D5uYz+ZAY5AqwPAJnRgmuZJpVL5ID95SUfQrVqtlhWG4Tb8ZeiC4gfAe4x2+3u0pADmn0NCD7qqPng3DOMQB36ljw1NR1F0CXNKxXn3W3gHz9xzB86uChDCTCazMhqNHsc4AW4RHDdpah4NOlxzDTrUJNBE4gYvTHO0yTGmOeAwn8/X0h3wX/B9v4GAg5HtscTURCG+axfPpMFnkgb+1fgGVlSeWGnoAWEAAAAASUVORK5CYII="}}]);