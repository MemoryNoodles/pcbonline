(window.webpackJsonp=window.webpackJsonp||[]).push([[272,11,37,44,49],{1364:function(t,e,n){"use strict";n.r(e);n(693),n(241);var r=n(694),o=n.n(r);n(252);n(1).default.use(o.a);var l={data:function(){return{tagNumber:1,currentPage:1}},props:{total:{type:Number,default:0},defaultPageSize:{type:Number,default:10},count:{type:Number,default:5}},methods:{getPage:function(t){this.currentPage=t,this.$emit("spot",this.currentPage)},nextPage:function(){this.currentPage>=this.tagNumber&&(this.currentPage=this.tagNumber),this.currentPage=this.currentPage,this.$emit("spot",this.currentPage)},handleCurrentChange:function(t){this.getPage(t)},nextPageV1:function(t){this.currentPage>=t&&(this.currentPage=t),this.currentPage=this.currentPage,this.$emit("spot",this.currentPage)}},watch:{changePage:function(t){0!==t.total&&0!==t.defaultPageSize&&(this.tagNubmer=Math.ceil(Number(t.total)/Number(t.defaultPageSize)))},deep:!0},computed:{changePage:function(){var t=this.total,e=this.defaultPageSize,n=Math.ceil(Number(t)/Number(e));return this.tagNumber=n,{total:t,defaultPageSize:e}}}},c=(n(696),n(7)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tagNumber>1?n("div",{attrs:{id:"pagination"}},[n("ul",{staticClass:"pagination e c"},[n("el-pagination",{attrs:{background:"","page-size":t.defaultPageSize,"current-page":t.currentPage,"pager-count":t.count,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)]):t._e()}),[],!1,null,"53e94475",null);e.default=component.exports},1392:function(t,e,n){"use strict";n(675)},1532:function(t,e,n){"use strict";n.r(e);n(25),n(18),n(26),n(41),n(42);var r=n(12),o=(n(693),n(241),n(694)),l=n.n(o);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{LoadView:n(673).default,Pagination:l.a},name:"TmpBlog",props:{articleData:{type:Array,default:function(){return[]}},pageOptions:{type:Object,default:{total:0,defaultPageSize:3}},bannerParams:{type:Object,default:{title:"Blogs of PCBONLINE",txt:"On this page, you will learn various knowledge and tips about PCB, PCBA, electronic components and other EMS-related service."}}},data:function(){return{total:0,articleList:[],isMobile:!1,loadDrag:!1,content:{url:"https://www.pcbonline.com/blog/",title:"PCB Basics and Tips | PCBONLINE Blogs",description:"PCB Basics and Tips | PCBONLINE Blogs | Archived Articles"},bannerOptions:{title:null,txt:null},Pagination:l.a}},watch:{articleData:function(t){this.loadDrag=!!(Array.isArray(t)&&t.length>0),this.articleList=t},deep:!0},mounted:function(){this.bannerOptions=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.bannerParams),window.addEventListener("resize",this.mobileHeadLoading,{passive:!0})},methods:{spot:function(data){this.$emit("handlePage",data)},article:function(t){var e=t.articleName,n=t.id;window.localStorage.setItem("article",n),window.localStorage.setItem("isFeedBack",!1),this.$router.push({name:"blog-id",params:{id:e+".html"}})}},head:function(){return{title:"PCB Basics and Tips | PCBONLINE Blogs | Archived Articles",meta:[{hid:"description",name:"description",content:"Our blogs offer PCB basics and related tips about PCB, PCB assembly, PCB design, etc. Explore our PCB posts for both senior engineers and beginners now."}],link:[{rel:"canonical",href:"https://www.pcbonline.com/blog/"},{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[]}}},h=d,m=(n(1392),n(7)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog"}},[n("div",{staticClass:"blog"},[n("div",{staticClass:"blog-drag"},[n("h1",{staticStyle:{color:"#333333"}},[t._v(t._s(t.bannerOptions.title))]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t._t("bannerOptionsTxt")],2),t._v(" "),n("p",[t._v("\n        "+t._s(t.bannerOptions.txt)+"\n      ")])]),t._v(" "),0==t.articleList.length?n("div",{staticClass:"loadContain"},[n("LoadView")],1):n("div",{staticClass:"blog-article"},[t._l(t.articleList,(function(e,r){return n("div",{key:r,staticClass:"article animated",on:{click:function(n){return t.article(e)}}},[n("h2",{staticStyle:{"font-family":"'Roboto-Bold','Roboto'","font-size":"21px",color:"#333333"},domProps:{innerHTML:t._s(e.articleTitle)}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.articleDescribe)}}),t._v(" "),n("span",[t._v(t._s(e.articleTime))])])})),t._v(" "),n("div",{staticClass:"blog-pagination"},[n("div",{staticClass:"computer"},[n("FunctionalPagination",{attrs:{total:t.pageOptions.total,defaultPageSize:t.pageOptions.defaultPageSize,count:10},on:{spot:t.spot}})],1),t._v(" "),n("div",{staticClass:"mobile"},[n("FunctionalPagination",{attrs:{total:t.pageOptions.total,defaultPageSize:t.pageOptions.defaultPageSize,count:5},on:{spot:t.spot}})],1)])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loadDrag,expression:"loadDrag"}],staticClass:"blog-footer"},[t._m(0),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduce"},[n("p",[t._v("PCB, PCBA, & Components")]),t._v(" "),n("p",[t._v("One-stop EMS shop without minimum order requirements")]),t._v(" "),n("p",[t._v("\n          Three production bases, in-house R&D team, 100+ engineers, 500+\n          technicians\n        ")]),t._v(" "),n("p",[t._v("All products go through full tests such as AOI, ICT, and FCT")]),t._v(" "),n("p",[t._v("\n          UL, ISO, and IPC certified standard compliances, with free\n          DFT/DFM/DFX\n        ")]),t._v(" "),n("p",[t._v("Fast delivery, instant online quotation, reasonable price")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-bottom"},[n("a",{attrs:{href:"https://sys.pcbonline.com/instant-quote",target:"_blank"}},[n("button",{staticClass:"btn-quickprev btn-reversal warning"},[n("i",{staticClass:"el-icon-shopping-cart-1",staticStyle:{"font-size":"14px"}}),t._v("\n            Online Quote\n          ")])]),t._v(" "),n("a",{attrs:{href:"mailto:info@pcbonline.com?subject=I want to share my feedback and discuss to you&body=Hi,Owen Chang"}},[n("button",{staticClass:"btn-quickprev btn-reversal primary"},[n("i",{staticClass:"el-icon-message",staticStyle:{"font-size":"14px"}}),t._v("\n            Email Quote\n          ")])])])}],!1,null,"e025b704",null);e.default=component.exports;installComponents(component,{LoadView:n(673).default,FunctionalPagination:n(1364).default})},2180:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(43),n(32),n(80),{components:{TmpBlog:n(1532).default},data:function(){return{articleListLoading:!0,total:0,articleList:[],content:{url:"https://www.pcbonline.com/blog/",title:"PCB Basics and Tips | PCBONLINE Blogs | Archived Articles",description:"Our blogs offer PCB basics and related tips about PCB, PCB assembly, PCB design and etc. Explore our PCB posts for both advanced engineers and beginners here."}}},methods:{getArticle:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.length>0&&void 0!==t[0]?t[0]:1,o=e.$axios.get("https://www.pcbonline.com/"+"blogapi/allBlog?at=1&page=".concat(r)),l=e,o.then((function(t){var n=t.data,data=n.data,r=n.count;n.code;l.total=r;var o=data&&data.map((function(t,e){return{articleTitle:t.articleTitle,articleDescribe:t.articleDescribe,id:t.id,articleTime:l.dateConversion(t.articleTime),articleName:t.articleName||""}}));e.articleListLoading=!1,l.articleList=o}));case 4:case"end":return n.stop()}}),n)})))()},dateConversion:function(time){var t=time.split(" ")[0].split("-")||0,e=t[0],n=t[1],r=t[2],o="";switch(n){case"01":default:o="Jan";break;case"02":o="Feb";break;case"03":o="Mar";break;case"04":o="Apr";break;case"05":o="May";break;case"06":o="Jun";break;case"07":o="Jul";break;case"08":o="Aug";break;case"09":o="Sept";break;case"10":o="Oct";break;case"11":o="Nov";break;case"12":o="Dec"}return o+" "+r+" "+e},article:function(t){var e=t.articleName,n=t.id;window.localStorage.setItem("article",n),window.localStorage.setItem("isFeedBack",!1),window.location.href="/blog/".concat(e,".html")}},mounted:function(){this.getArticle(1)}}),l=o,c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TmpBlog",{attrs:{articleData:t.articleList,pageOptions:{total:t.total},bannerParams:{title:"Blogs of PCBONLINE",txt:"In this page, you will learn various knowledge and tips about PCB, PCBA, electronic components and other EMS-related service."}},on:{handlePage:this.getArticle}}),t._v(" "),n("CommonSlideFix",{attrs:{Share:t.content}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonSlideFix:n(460).default})},302:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAcFJREFUSA3tV7GKwkAQnZiAImIhWignmEqwuQ+w0NZPuMLaP7hC/IKrrVJrhPgT/sKVFmoTzkailSiouRnBZRNNbjeau+J8sPBmdnceO5Mdsgogttvty263+0DaxFHEEQeWGHSSSqXe0+m0rZDofr//dF03F4eaP6aiKE4ymXxVHMcxcfLNvyBme5RAgWbMIrfCNzX0Rq7per2G6XQKtm0Dlgs0TYNsNgutVuuWGO8rkrA0jscjDIdDsCzrLOgPICAMkYQHgwHQuAfSwqvVCkyTvsdrqKp67QzwSAvPZjM4nU6ecL1eD+r1+rnGnokQQ1qYPiQehUIBGo0G7xLidJ2kcDgcPOtzuWh9R1rYo3qHQZ3L/Wl/p9NhSzabDeAeZmP7g1KpxOxKpQLdbpfZQUSoxvP5PGj/+R4vFgs2Xy6XGQ8jD081f/owYaETUxu8gFojjQvo7mYymYsJuq4zHkaEaswHGI/HYBgGc1WrVej3+8wWJQ9P9VM4KAPPVAdl5uH+/5dqoc7F57lWq0G73WaufD7PuAyhzvWFGyL/acqIcWuXVOMJ5/gtOvmzJ0yCHlD0lsGjjnDQwyouUOwRaZHmN7iMhs1/fc0yAAAAAElFTkSuQmCC"},303:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAfBJREFUSA3tl72KwkAQxydn/EDBQkRQrlTbw8rWJxAsD2wEnyFgoaXFlYI+wsVWBC31FQ4UESwUDmwkooUoKLmZgHskt3sfbKLNDSzZmd39//Yj2c0qgHY4HB6Px+MLZguYkpi8sDWKjkOhkBYOh98Vgp5OpzfTNGNe0JyaiqIYwWDwSTEM4xULn50VPPb1BwQUPIbw5AsE9mpNecBrLEngu5gQPJ/PoVqtQqlUgm6363rn6OUyeaoEXa1WrKjdbkM2m2W+bEY44s1mY9Pebrc2X9YRgovFItNOp9OQy+WY70ZGONUkPpvNYL/fW9BAIOAGj2l8C2a1fpHBHRCWyyXE43FIJBI/tlBFNZrNJoxGI1Y8HA5BVVVotVrQ7/etOG59oOs6NBoNmE6ngNuuFY9Go6BpGuTzedbemRGusbMiz79cLlCr1WAymTAo1aPlqdfrsFgseM2smBT4fD4Dfe88o9EPBgNekTyYFFKpFHQ6Hej1elAul20gmgmRSY2YRCuVCmQyGcAz1gLHYp+nK25OIi5Ig+kbv5rP57O90bvd7lr05SkNjkQiNlG/32/zRY402CmMfxjOENd3HcylcIL/YM6keBNy7ZD4a/fuusb0h39rW9OIx7emEvNuV5gHukDRXQZ7oWPyctpJWycWMT8AFfefGTSG2C8AAAAASUVORK5CYII="},304:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAwJJREFUSA3FV89LKlEU/tTMKDKICA2JFlItghdCCWXYJqhVLRR869JF63Bp0CoEDfwPgtCNFv0HLaIo+mUEtQkiHkVBttFIiXz3DG/mzUz3TmJYBy5zz5zvnG/m3nPumTGBycvLi+v19TXOppNsONlohNyzoDstLS3R1tbWPyYiLZfL+Wq12tkINn1Mk8lUsNlsv0yFQiHNjL/1gAbrGTMjmGwwCS/8JBE3ak95hPI9JxH/iDSJWN/e3tDUJDRr3G5vb7G+vo6rqytUKhUMDAwgFAphaGhIwp2fn8PlcqGz83/+UnJVNVGYcnl5iY2NDSwvL6O5uVlv1ugHBwdYWVmRCNUGlr0YHx/H9fU1enp6sLq6qjaDu9T5fB6Hh4eIxWIolUoaB7VSLBaRSCQ+kBKGlSd2d3fx/v6OwcFBbG9vq135xKyuJdDx8THm5+ext7encZKV09NTPD8/yyr3+vDwAHqRqakpjZ27if39/Qro6elJWvLh4WHMzMzA5/Mpy39zc6PgRBO32414PA6r1aqBcIlHR0elxLi4uFDAZ2dnoNHW1gYK1tvbi8fHR8UumtD+6kkJyyU+OjrC3NycFFgfnPaclo5GLaLOZDWeS0zLu7a2psbVPXc6+ecTN6snJiZgt9vrJlM7ejwetarMucTt7e2IRqNgXUQB1jNxOBzo6+vjunKJCen1epFMJjE2NsZ1rOVmIBAQwoTE5JFOp4U1LIz4z0BJReUnEkPixcVFdHd3i3wN7y8tLSn1zgMaEhNpKpXC9PQ0aN9rFWoQIyMjhnBuk9B70BG6tbUlNQ75ONVjZD0YDCISiciq8PqhjulQN5vN9AGIu7s7nJycYHNzE1TbRsI+4rCwsIDZ2VkjmGL7QExvlMvlkM1mDTuTHMFiscDv9yMcDqOrq0u+/elVuNTU0Pf390Ediho8vTEdlx0dHVJDpxqlM516bj2HjZD400f+IsAwq78Y29CdiOkL/7vlnoh3vpuVOH/sF8ZMP1D0L8OeIsNGI5edYmeIizj/Ap//D0J1rzXLAAAAAElFTkSuQmCC"},305:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAsFJREFUSA3Fl79rYkEQx7/GIzHByggSsDAgEUEiUUiws7PxF1hdGf+ISxkUIeTID2wlYHemsNJGLCQoCFYqiI2FKAdJE1GCIT/U3M67U/Tx9hG9mAwsvt2dmc/bmZ1dnwJMHh8f9U9PTz/Zo5O1LdaWIbfM6Y1KpfqxsbHxW0HQ5+fn6tvbm2YZNLFPhULRWVtbsyo6nc4vNvldrLDkfmKFAZxLhki5dxJ4WTmVAo7Htgj8JfKNR43H40gmk3h9feWpyI6r1WocHR3h4OBAUo+7YoK+vLyA7faF2sPDA9LptCSUBrngRVbqcrlweXkJq9UqAOV8cMHcV5WZcDgcsFgs2N3dldH6O8XNMYWYJ5Q3o9EIdvCgWq2i0WgIqrQvKpUK8vk8z3QyzgWzE0bI7USTPWxubiIUCsFkMmEwGECpVIL0stkszs/P0Wq1hDZtw3vmgsUGBAiHw9DpdDg+PkapVAI7+uD1ehEMBtHr9RCLxcRm3P67c7y3t4ednR1cXFygWCxiOBzS5YLr62ukUil4PB6sr69zQeIJOqslk3l3dzejS3XJbha43W4BOj1Ju/js7Az39/czdb+6ugqNRvru4Ya6XC7P5NhgMMBsNgvhpZVOy3il9XodVL9j0Wq12N/fH3dnfrlgqsfpnb29vS3kkHJK4Z0Wv98PFjlEIhGMRqPJlM1mmx88sf730Gw2kclkhI1EKykUCkJOCWq323FycjIDFduL+9wVixWpH41Ghd0bCATg8/kElW63i9PTU+RyOSkT7thcYKrdq6srJBIJUOgp1+12W6hpLoEzMRd47KPf76NWq427C/2+u44X8i5jxAVT3f6vyPngHiB0JNJ9Kne1yb0YQQ8PD6HX6yXVuGBJ7Q8c5Ib6AxmSrghM//A/W24JfPPZVGJ+2SfMCn1A0bcMe4sEa8sMO/lOEIuYfwCRXi0W0+ZNwQAAAABJRU5ErkJggg=="},306:function(t,e,n){},451:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAArlBMVEXu7u7u7u729vbv7+8AAADu7u4WcPcWb/QXbvLk5OQdYckYbOkYa+YcaNoXbe0da+BnlNgbZdXU1NQgZ9AfXbqzs7Ourq4vXKCNjY1qamrr6+vj5+vb4OfP1Nva2tqas9myv9O5w9LNzc1bh8wmZ8g9dMaqtMK3ur9Edb2ClrVggbM6aa+Unq2fo6pofqAjVZ8nVp59iZk0XJgnVJhSao4wVY04VoSDg4NdZ3ZAVHKqWTwVAAAABXRSTlPmphztAPMTpaIAAADASURBVCjPzdO3EsJADEXRtUFvtQ7knHPOmf//MVhoNGOwGwpuo+KMyqfSrqPoY8px08pN0ddSrnIoJkepOLYa1y94UmQAOvQZ7IdeoLOXqeA7Ih0Er4p4ldHQ9j7PWjCZDUOkr4YEn3o0WJb49clAtkv9m+BSMO5QpZqxnK9WqD3TLFjD29VMa3HMB97emBoDEAwbDxuFer3QnJ+3PqAlvwvLROUR3kUZHmxfGf/HuajmBH/qF6xiNWEGCSNKmOADz88Yh5pLF68AAAAASUVORK5CYII="},452:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAkNJREFUSA3tVz3PYUEUfi4rr1BINj4i8Qc0RK25jUo0orAKIREFjUI2olJvokVCgcSKQqNQUNBoJW/lD0jERyQKQiTszM1eBUd2WTeanWQyc885z/M4M3PPNQJY2+12tv1+/4NNRdatrCvRZox0qNVqv+t0uqnARQ+Hw+f5fP6qhNo1pyAI64+PD6ewXq9/Mue36wCFn5sqJiAqLELRi1xYqT2lBGWblQu/pb1N+AuV7ng8Rj6fx2KxoNx/bTObzUin03C5XDcYfqrP19ZwOIzZjL92/96sVivq9foNEbnUwWAQBoPhJvhRA+cIhUIkjMyYR263W1SrVXQ6HZxOJxJ8z6hWq+Hz+RCJRKDX68kwMuNsNivtbzKZRKlUgsPhIMGU0el0olgsgmP5GclkMlQYyIw9Hg9YaQMfo9EojEYjBoMByuUylsslSWQymRCPxyGKIlarlbRavV4PrBSj3+/fYO4Ky5GsrsLv94Pvu0qlQqPRQLvdxvF4lEI0Gg0CgYC0l3xLWq2W5Gf1X6Z4TlhG84PCT7vX68V8PkehUJBciUQCFosF3W4XtVoNm81GhlzGpzK+oH9PbDYbYrEY3G63ZBmNRqhUKphOp9ehl2dKmCwgFwQx4QK5XA52u13yTiYTIurPpoeFZcpnBWU8+TrJTiXH/8LS6vKvyqvaPS5yqVOpFO4BHvlBnINzUY2sXFTgq21kxq8WofjeKvyavxpUWvdtM57x8L5fMc/wbVcYFb9A8bsMy63JupLLzrmbXItr/gLGZtEMZnVR4AAAAABJRU5ErkJggg=="},453:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"ShareNetwork",(function(){return o}));var i={baidu:"http://cang.baidu.com/do/add?iu=@u&it=@t",buffer:"https://bufferapp.com/add?text=@t&url=@u",email:"mailto:?subject=@t&body=@u%0D%0A@d",evernote:"https://www.evernote.com/clip.action?url=@u&title=@t",facebook:"https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",flipboard:"https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",hackernews:"https://news.ycombinator.com/submitlink?u=@u&t=@t",instapaper:"http://www.instapaper.com/edit?url=@u&title=@t&description=@d",line:"http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",linkedin:"https://www.linkedin.com/shareArticle?url=@u",messenger:"fb-messenger://share/?link=@u",odnoklassniki:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",pinterest:"https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",pocket:"https://getpocket.com/save?url=@u&title=@t",quora:"https://www.quora.com/share?url=@u&title=@t",reddit:"https://www.reddit.com/submit?url=@u&title=@t",skype:"https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",sms:"sms:?body=@t%0D%0A@u%0D%0A@d",stumbleupon:"https://www.stumbleupon.com/submit?url=@u&title=@t",telegram:"https://t.me/share/url?url=@u&text=@t%0D%0A@d",tumblr:"https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",twitter:"https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h@tu",viber:"viber://forward?text=@t%0D%0A@u%0D%0A@d",vk:"https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",weibo:"http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",whatsapp:"https://api.whatsapp.com/send?text=@t%0D%0A@u%0D%0A@d",wordpress:"https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",xing:"https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",yammer:"https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d"},r="undefined"!=typeof window?window:null,o={name:"ShareNetwork",props:{network:{type:String,required:!0},url:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""},twitterUser:{type:String,default:""},media:{type:String,default:""},tag:{type:String,default:"a"},popup:{type:Object,default:function(){return{width:626,height:436}}}},data:function(){return{popupTop:0,popupLeft:0,popupWindow:void 0,popupInterval:null}},computed:{networks:function(){return this.$SocialSharing?this.$SocialSharing.options.networks:i},key:function(){return this.network.toLowerCase()},rawLink:function(){var t=navigator.userAgent.toLowerCase();return"sms"===this.key&&(t.indexOf("iphone")>-1||t.indexOf("ipad")>-1)?this.networks[this.key].replace(":?",":&"):this.networks[this.key]},shareLink:function(){var t=this.rawLink;return"twitter"===this.key&&(this.hashtags.length||(t=t.replace("&hashtags=@h","")),this.twitterUser.length||(t=t.replace("@tu",""))),t.replace(/@tu/g,"&via="+encodeURIComponent(this.twitterUser)).replace(/@u/g,encodeURIComponent(this.url)).replace(/@t/g,encodeURIComponent(this.title)).replace(/@d/g,encodeURIComponent(this.description)).replace(/@q/g,encodeURIComponent(this.quote)).replace(/@h/g,this.encodedHashtags).replace(/@m/g,encodeURIComponent(this.media))},encodedHashtags:function(){return"facebook"===this.key&&this.hashtags.length?"%23"+this.hashtags.split(",")[0]:this.hashtags}},render:function(t){var e=this;if(!this.networks.hasOwnProperty(this.key))throw new Error("Network "+this.key+" does not exist");var n={class:"share-network-"+this.key,on:{click:function(){return e["http"===e.rawLink.substring(0,4)?"share":"touch"]()}}};return"a"===this.tag&&(n.attrs={href:"javascript:void(0)"}),t(this.tag,n,this.$slots.default)},methods:{resizePopup:function(){var t=r.innerWidth||document.documentElement.clientWidth||r.screenX,e=r.innerHeight||document.documentElement.clientHeight||r.screenY,n=t/r.screen.availWidth;this.popupLeft=(t-this.popup.width)/2/n+(void 0!==r.screenLeft?r.screenLeft:r.screenX),this.popupTop=(e-this.popup.height)/2/n+(void 0!==r.screenTop?r.screenTop:r.screenY)},share:function(){var t=this;this.resizePopup(),this.popupWindow&&this.popupInterval&&(clearInterval(this.popupInterval),this.popupWindow.close(),this.emit("change")),this.popupWindow=r.open(this.shareLink,"sharer-"+this.key,",height="+this.popup.height+",width="+this.popup.width+",left="+this.popupLeft+",top="+this.popupTop+",screenX="+this.popupLeft+",screenY="+this.popupTop),this.popupWindow&&(this.popupWindow.focus(),this.popupInterval=setInterval((function(){t.popupWindow&&!t.popupWindow.closed||(clearInterval(t.popupInterval),t.popupWindow=null,t.emit("close"))}),500),this.emit("open"))},touch:function(){window.open(this.shareLink,"_blank"),this.emit("open")},emit:function(t){this.$root.$emit("share_network_"+t,this.key,this.url),this.$emit(t,this.key,this.url)}}};e.default={install:function(t,e){t.component(o.name,o),t.prototype.$SocialSharing={options:{networks:e&&e.hasOwnProperty("networks")?Object.assign(i,e.networks):i}}}}}])},454:function(t,e,n){"use strict";n(306)},460:function(t,e,n){"use strict";n.r(e);n(24);var r=n(1),o=n(453),l=n.n(o);r.default.use(l.a);var c={data:function(){return{socialMedia:!0,fackbockSmall:!1,instagramSmall:!1,twitterSmall:!1,emailSmall:!1,chatSmall:!1,linkSmall:!1,Share:{url:"https://www.pcbonline.com/PCB-Assembly/smt-and-tht/",title:"SMT and PTH Assembly - PCBONLINE",description:"PCBONLINE offers quality-guaranteed consignment PCB assembly to simplify your electronic production and save your budget most."}}},methods:{media:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.socialMedia=t>=453},small:function(){this.fackbockSmall=!0},bigDrag:function(){this.fackbockSmall=!1},instagramToSmall:function(){this.instagramSmall=!0},instagramBig:function(){this.instagramSmall=!1},twitterToSmall:function(){this.twitterSmall=!0},twitterBig:function(){this.twitterSmall=!1},emailToSmall:function(){this.emailSmall=!0},emailBig:function(){this.emailSmall=!1},chatToSmall:function(){this.chatSmall=!0},chatBig:function(){this.chatSmall=!1},linkToSmall:function(){this.linkSmall=!0},linkBig:function(){this.linkSmall=!1}},mounted:function(){var title=window.document.title,t=window.location.href,meta=window.document.getElementsByTagName("meta"),e="";for(var i in meta)void 0!==meta[i].name&&"description"==meta[i].name.toLowerCase()&&(e=meta[i].content);this.Share={title:title,url:t,description:e}}},d=(n(454),n(7)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.socialMedia&&t.Share.url?r("div",{staticClass:"slide_fix"},[r("div",{staticClass:"hvr-ripple-out",on:{mouseover:t.small,mouseout:t.bigDrag}},[r("ShareNetwork",{attrs:{network:"Facebook",url:t.Share.url,title:t.Share.title,description:t.Share.description,quote:t.Share.description,popup:{width:700,height:500},tag:"div"}},[t.fackbockSmall?r("img",{staticClass:"facebook_small_img",attrs:{alt:"facebook_img",loading:"lazy",src:n(302)}}):r("img",{staticClass:"facebook_img",attrs:{alt:"facebook_img",loading:"lazy",src:n(302)}})])],1),t._v(" "),r("div",{staticClass:"hvr-ripple-out",on:{mouseover:t.linkToSmall,mouseout:t.linkBig}},[r("ShareNetwork",{attrs:{network:"LinkedIn",url:t.Share.url,title:t.Share.title,description:t.Share.description,popup:{width:700,height:500},tag:"div"}},[t.linkSmall?r("img",{staticClass:"linked_small_img",attrs:{loading:"lazy",alt:"linked_img",src:n(303)}}):r("img",{staticClass:"linked_img",attrs:{alt:"linked_img",loading:"lazy",src:n(303)}})])],1),t._v(" "),r("div",{staticClass:"hvr-ripple-out",on:{mouseover:t.twitterToSmall,mouseout:t.twitterBig}},[r("ShareNetwork",{attrs:{network:"twitter",url:t.Share.url,title:t.Share.title,description:t.Share.description,popup:{width:700,height:500},tag:"div"}},[t.twitterSmall?r("img",{staticClass:"twitter_small_img",attrs:{alt:"twitter_img",loading:"lazy",src:n(304)}}):r("img",{staticClass:"twitter_img",attrs:{alt:"twitter_img",loading:"lazy",src:n(304)}})])],1),t._v(" "),r("div",{staticClass:"hvr-ripple-out",on:{mouseover:t.instagramToSmall,mouseout:t.instagramBig}},[t.instagramSmall?r("a",{attrs:{href:"https://www.instagram.com/pcbonline_official/",target:"_blank"}},[r("img",{staticClass:"instagram_small_img",attrs:{alt:"instagram_img",loading:"lazy",src:n(305)}}),t._v(" "),r("div",{staticClass:"ripple"})]):r("a",{attrs:{href:"https://www.instagram.com/pcbonline_official/",target:"_blank",rel:"nofollow"}},[r("img",{staticClass:"instagram_img",attrs:{alt:"instagram_img",loading:"lazy",src:n(305)}})])]),t._v(" "),r("div",{staticClass:"hvr-ripple-out",on:{mouseover:t.emailToSmall,mouseout:t.emailBig}},[t.emailSmall?r("a",{attrs:{href:"mailto:info@pcbonline.com?subject=I want to get a quote from PCBONLINE&body=Hi PCBONLINE,",target:"_blank"}},[r("img",{staticClass:"email_small_img",attrs:{alt:"email_img",loading:"lazy",src:n(452)}}),t._v(" "),r("div",{staticClass:"ripple"})]):r("a",{attrs:{href:"mailto:info@pcbonline.com?subject=I want to get a quote from PCBONLINE&body=Hi PCBONLINE,",target:"_blank"}},[r("img",{staticClass:"email_img",attrs:{alt:"email_img",loading:"lazy",src:n(451)}})])])]):t._e()}),[],!1,null,"696177f3",null);e.default=component.exports},615:function(t,e,n){},616:function(t,e,n){},673:function(t,e,n){"use strict";n.r(e);var r={name:"LoadView"},o=(n(695),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("div",{staticClass:"line_scale"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])}],!1,null,"c5574018",null);e.default=component.exports},675:function(t,e,n){},695:function(t,e,n){"use strict";n(615)},696:function(t,e,n){"use strict";n(616)}}]);