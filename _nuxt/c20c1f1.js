(window.webpackJsonp=window.webpackJsonp||[]).push([[136,15],{346:function(t,c,n){"use strict";n.r(c);var e={},l=(n(361),n(2)),component=Object(l.a)(e,(function(){var t=this,c=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"link_href"},[n("a",{attrs:{href:"https://sys.pcbonline.com/instant-quote",target:"_blank",alt:"quote"}},[n("button",{staticClass:"quote btn-reversal warning"},[n("i",{staticClass:"el-icon-shopping-cart-1"}),t._v("\n      Online Quote\n    ")])]),t._v(" "),n("a",{attrs:{href:"mailto:info@pcbonline.com?subject=I want to get a quote from PCBONLINE&body=Hi PCBONLINE,"}},[n("button",{staticClass:"support btn-reversal primary",staticStyle:{"margin-right":"0px"}},[n("i",{staticClass:"el-icon-message"}),t._v("\n      Email Quote\n    ")])])])}],!1,null,"265639c2",null);c.default=component.exports},354:function(t,c,n){},357:function(t,c){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIAgMAAACNGJcEAAAACVBMVEXKyspHcEzJyclxMn1uAAAAAnRSTlOBAFQLZDIAAAAsSURBVAjXDcQxEQAACAJAStiBLIycRDKITfWHR7qCeD7tRwa9Kng8UPWCCQ/S/wp0wjKFRwAAAABJRU5ErkJggg=="},358:function(t,c){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIAgMAAACNGJcEAAAACVBMVEXKyspHcEzJyclxMn1uAAAAAnRSTlOBAFQLZDIAAAAsSURBVAjXDcQxEQAACAJAStiBLIycRDKITfWHBxNC1QuPB70qhAyi/TxfVw7OaAp0jAeykQAAAABJRU5ErkJggg=="},361:function(t,c,n){"use strict";n(354)},367:function(t,c,n){var map={"./Aluminum PCB.mp4":391,"./expedited-low-volume-pcb-assembly.mp4":402};function e(t){var c=l(t);return n(c)}function l(t){if(!n.o(map,t)){var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=l,t.exports=e,e.id=367},372:function(t,c,n){t.exports=n.p+"img/pdf.svg"},373:function(t,c,n){},391:function(t,c,n){t.exports=n.p+"videos/Aluminum PCB.ace7af9.mp4"},402:function(t,c,n){t.exports=n.p+"videos/expedited-low-volume-pcb-assembly.c043754.mp4"},461:function(t,c,n){"use strict";n(373)},499:function(t,c,n){"use strict";n.r(c);var e=[function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"cont e c"},[e("div",{staticClass:"row-s"},[e("img",{staticClass:"download-pic",attrs:{loading:"lazy",src:n(372)}}),t._v(" "),e("div",{staticClass:"inner-blue"},[t._v("Laminates")])])])},function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"cont e c"},[e("div",{staticClass:"row-s"},[e("img",{staticClass:"download-pic",attrs:{loading:"lazy",src:n(372),alt:"download icon"}}),t._v(" "),e("div",{staticClass:"inner-blue"},[t._v("Laminates")])])])}],l=n(112),o=n(111),d=n(346),r=(n(205),{components:{TechTable:l.default,TechClause:o.default,ButtonHref:d.default},data:function(){return{showp1:!0,showp2:!0,showp3:!0,model1:!0,model2:!1}},props:{datad:{type:Object,default:function(){}}},mounted:function(){1===this.datad.type?(console.log("setting the model 1"),this.model1=!0,this.model2=!1):(console.log("setting the model 2"),this.model1=!1,this.model2=!0)},methods:{download:function(t){var c="/pdf/newFile/".concat(t),n=document.createElement("a");n.setAttribute("href",c),n.setAttribute("target","_blank"),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},goToPage:function(t){"home"==t?this.$router.push("/"):this.$router.push("/"+t+"/")},changeStatus:function(){this.showp1=!this.showp1},changeStatus2:function(){this.showp2=!this.showp2},changeStatus3:function(){this.showp3=!this.showp3}}}),m=(n(461),n(2)),component=Object(m.a)(r,(function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"main-container-content-phone col-12 e c col-s"},[e("div",{staticClass:"main col-12 e c col-s",staticStyle:{"margin-top":"65px"}},[e("div",{staticClass:"col-12 e c"},[e("div",[1===t.datad.video?e("div",[e("div",{staticClass:"cont col-12 e c"},[e("div",{staticClass:"comp col-11 row-b",attrs:{type:"flex"}},[e("h3",{staticClass:"header",on:{click:function(c){return t.changeStatus()}}},[t._v("\n                  "+t._s(t.datad.title1)+"\n                ")]),t._v(" "),t.showp1?e("img",{staticClass:"up-pic",attrs:{loading:"lazy",src:n(357)},on:{click:function(c){return t.changeStatus()}}}):e("img",{staticClass:"down-pic",attrs:{loading:"lazy",src:n(358)},on:{click:function(c){return t.changeStatus()}}})])]),t._v(" "),e("div",{staticClass:"cont col-12 animated e c"},[e("div",{staticClass:"comp col-11",attrs:{type:"flex"}},[e("div",{staticClass:"desc-1 col-s",staticStyle:{"min-height":"90px"}},[1===t.datad.type1?e("div",{staticClass:"col-s"},[e("div",{domProps:{innerHTML:t._s(t.datad.subtitle1)}}),t._v(" "),e("div",[e("img",{staticClass:"inner-pic",staticStyle:{"margin-bottom":"0px"},attrs:{loading:"lazy",src:n(347)("./"+t.datad.imgPh),alt:t.datad.alt}})])]):t._e(),t._v(" "),2===t.datad.type1?e("div",{staticClass:"col-s"},[e("div",[e("ul",{staticClass:"application-list"},t._l(t.datad.subtitle1,(function(c,n){return e("li",{key:n,staticClass:"list-ele row-s",domProps:{innerHTML:t._s(c)}})})),0)]),t._v(" "),e("div",[e("img",{staticClass:"inner-pic",staticStyle:{"margin-bottom":"0px"},attrs:{loading:"lazy",src:n(347)("./"+t.datad.imgPh),alt:t.datad.alt}})])]):t._e()])])]),t._v(" "),e("div",{staticClass:"cont col-12 e c",staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"comp col-11 row-b",attrs:{type:"flex"}},[e("h3",{staticClass:"header",on:{click:function(c){return t.changeStatus2()}}},[t._v("\n                  "+t._s(t.datad.title2)+"\n                ")]),t._v(" "),t.showp2?e("img",{staticClass:"up-pic",attrs:{loading:"lazy",src:n(357)},on:{click:function(c){return t.changeStatus2()}}}):e("img",{staticClass:"down-pic",attrs:{loading:"lazy",src:n(358)},on:{click:function(c){return t.changeStatus2()}}})])]),t._v(" "),e("div",{staticClass:"cont col-12 animated e c"},[e("div",{staticClass:"comp col-11"},[e("li",{staticClass:"video-show e c",staticStyle:{"margin-top":"30px"}},[e("video",{attrs:{src:n(367)("./"+t.datad.ved),autoplay:"",loop:"",muted:"",width:"300px"},domProps:{muted:!0}})]),t._v(" "),e("div",{staticClass:"desc-1 e c",staticStyle:{"margin-top":"0px"}},[t._l(t.datad.subtitle2,(function(c,n){return e("div",{key:n,staticClass:"row-s do-margin",staticStyle:{"align-self":"flex-start"},domProps:{innerHTML:t._s(c)}})})),t._v(" "),e("div",{staticClass:"row-s do-margin",staticStyle:{"margin-bottom":"20px","align-self":"flex-start"}})],2)])])]):e("div",[e("div",{staticClass:"cont col-12 e c"},[e("div",{staticClass:"comp col-11 row-b",attrs:{type:"flex"}},[e("h3",{staticClass:"header",on:{click:function(c){return t.changeStatus()}}},[t._v("\n                  "+t._s(t.datad.title1)+"\n                ")]),t._v(" "),t.showp1?e("img",{staticClass:"up-pic",attrs:{loading:"lazy",src:n(357)},on:{click:function(c){return t.changeStatus()}}}):e("img",{staticClass:"down-pic",attrs:{loading:"lazy",src:n(358)},on:{click:function(c){return t.changeStatus()}}})])]),t._v(" "),e("div",{staticClass:"cont col-12 animated e c"},[e("div",{staticClass:"comp col-11",attrs:{type:"flex"}},[e("div",{staticClass:"desc-1 col-s",staticStyle:{"min-height":"90px"}},[1===t.datad.type1?e("div",{staticClass:"col-s"},[e("div",[1===t.datad.picTwo?e("img",{staticClass:"inner-pic",staticStyle:{"margin-bottom":"0px"},attrs:{loading:"lazy",src:n(347)("./"+t.datad.imgPh2),alt:t.datad.alt2}}):t._e()]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.datad.subtitle1)}})]):t._e(),t._v(" "),2===t.datad.type1?e("div",{staticClass:"col-s"},[e("div",[1===t.datad.picTwo?e("img",{staticClass:"inner-pic",staticStyle:{"margin-bottom":"0px"},attrs:{loading:"lazy",src:n(347)("./"+t.datad.imgPh2),alt:t.datad.alt2}}):t._e()]),t._v(" "),e("div",[e("ul",{staticClass:"application-list"},t._l(t.datad.subtitle1,(function(c,n){return e("li",{key:n,staticClass:"list-ele row-s",domProps:{innerHTML:t._s(c)}})})),0)])]):t._e()])])]),t._v(" "),e("div",{staticClass:"cont col-12 e c",staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"comp col-11 row-b",attrs:{type:"flex"}},[e("h3",{staticClass:"header",on:{click:function(c){return t.changeStatus2()}}},[t._v("\n                  "+t._s(t.datad.title2)+"\n                ")]),t._v(" "),t.showp2?e("img",{staticClass:"up-pic",attrs:{loading:"lazy",src:n(357)},on:{click:function(c){return t.changeStatus2()}}}):e("img",{staticClass:"down-pic",attrs:{loading:"lazy",src:n(358)},on:{click:function(c){return t.changeStatus2()}}})])]),t._v(" "),e("div",{staticClass:"cont col-12 animated e c"},[e("div",{staticClass:"comp col-11"},[e("img",{staticClass:"inner-pic",staticStyle:{"margin-bottom":"0px"},attrs:{loading:"lazy",src:n(347)("./"+t.datad.imgPh),alt:t.datad.alt}}),t._v(" "),e("div",{staticClass:"desc-1 e c",staticStyle:{"margin-top":"0px"}},[t._l(t.datad.subtitle2,(function(c,n){return e("div",{key:n,staticClass:"row-s do-margin",staticStyle:{"align-self":"flex-start"},domProps:{innerHTML:t._s(c)}})})),t._v(" "),e("div",{staticClass:"row-s do-margin",staticStyle:{"margin-bottom":"20px","align-self":"flex-start"}})],2)])])])]),t._v(" "),e("div",{staticClass:"cont col-12 e c",staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"comp col-11 row-b",attrs:{type:"flex"}},[e("h3",{staticClass:"header",on:{click:function(c){return t.changeStatus3()}}},[t._v(t._s(t.datad.title3))]),t._v(" "),t.showp3?e("img",{staticClass:"up-pic",attrs:{loading:"lazy",src:n(357)},on:{click:function(c){return t.changeStatus3()}}}):e("img",{staticClass:"down-pic",attrs:{loading:"lazy",src:n(358)},on:{click:function(c){return t.changeStatus3()}}})])]),t._v(" "),e("div",{staticClass:"cont col-12 animated e c"},[e("div",{staticClass:"comp col-11",attrs:{type:"flex"}},[e("div",{staticClass:"desc-1",staticStyle:{"min-height":"140px"}},[1===t.datad.type3?e("span",{domProps:{innerHTML:t._s(t.datad.subtitle3)}}):t._e(),t._v(" "),2===t.datad.type3?e("ul",{staticClass:"application-list"},t._l(t.datad.subtitle3,(function(c,n){return e("li",{key:n,staticClass:"list-ele row-s",domProps:{innerHTML:t._s(c)}})})),0):t._e()]),t._v(" "),e("div",{staticClass:"inner-btn e c",staticStyle:{"margin-top":"0px"}},[1==t.datad.linkPdf?e("div",{on:{click:function(){t.download(t.datad.fileName)}}},[t._m(0)]):e("div",[1==t.datad.removeLaminate?e("div"):e("a",{attrs:{href:"/laminates/",target:"_blank"}},[t._m(1)])])])])])])])])}),e,!1,null,"6c1b41fc",null);c.default=component.exports}}]);