(window.webpackJsonp=window.webpackJsonp||[]).push([[244,56,57,235,245,246,247,249],{1567:function(t,e,n){"use strict";n(718)},1568:function(t,e,n){"use strict";n(719)},1569:function(t,e,n){"use strict";n(720)},1570:function(t,e,n){},1571:function(t,e,n){},1572:function(t,e,n){},1598:function(t,e,n){"use strict";n.r(e);var r=n(102),o={name:"search-hot",components:{SHeader:n(549).default},data:function(){return{hotList:["Coupon","PCB sponsorship","pcb assembly","4-wire sensing","volume production","buy PCB online","PCBA online","PCB manufacturing","flexible PCB","electronic components","PCBA","aluminum PCB","Rogers PCB","PCB design","FPGA"]}},mounted:function(){},methods:{getHotTags:function(){var t=this;this.$axios.get("/v1/search/allTab").then((function(e){var data=e.data.data;t.hotList=Object(r.a)(data)}))},handleClick:function(t){this.$emit("handleSearch",t)}}},l=(n(1567),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-hot"},[n("s-header"),t._v(" "),n("div",{staticClass:"tags-box"},[t._l(t.hotList,(function(e,r){return n("div",{key:r,staticClass:"tags-li"},[n("span",{on:{click:function(n){return t.handleClick(e)}}},[t._v(t._s(e))])])})),t._v(" "),0===t.hotList.length?n("div",{staticStyle:{"text-align":"center","margin-top":"16px"}},[t._v("\n      Nothing\n    ")]):t._e()],2)],1)}),[],!1,null,"d710454a",null);e.default=component.exports},1599:function(t,e,n){"use strict";n.r(e);var r={name:"search-loading",components:{SHeader:n(549).default}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-loading"},[n("s-header",{attrs:{loading:""}}),t._v(" "),n("div",{staticClass:"loading-tmp"},t._l(2,(function(i){return n("div",{key:i,staticClass:"li-l"},[t._m(0,!0),t._v(" "),t._m(1,!0)])})),0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lef"},[e("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rig"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,null,null);e.default=component.exports},1600:function(t,e,n){"use strict";n.r(e);var r={name:"search-empty"},o=(n(1568),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-empty"},[n("span",[t._v("Sorry, nothing found for “PCB”.")])])}],!1,null,"4f73def7",null);e.default=component.exports},1601:function(t,e,n){"use strict";n.r(e);var r=n(549),o=n(462),l=n(81),c={name:"search-list",components:{SHeader:r.default},props:{keyword:{type:String,default:null}},data:function(){return{list:[]}},watch:{keyword:function(t){t&&this.getList(this,t)}},methods:{getList:Object(o.a)((function(t,e){var n=t;n.$emit("setStatus","loading"),n.$axios.get("https://www.pcbonline.com/"+"/v1/search/keyword?keyword=".concat(e)).then((function(t){var data=t.data.data;data=Object(l.c)(data,["articleTitle","articleDescribe"],e),n.list=data,n.$emit("setStatus",data.length>0?"done":"empty")}))}),500,!0),redirectResView:function(){this.$router.push({path:"/search-result?keyword=".concat(this.keyword)}),window.location.href="/search-result?keyword=".concat(this.keyword)},redirectArticle:function(t){var e=t.articleName,n=t.id,r=t.articleType,o=["","blog","help"],l={blog:"/blog/".concat(e,".html"),help:"/support/home/"};if(window.localStorage.setItem("isFeedBack",!1),"blog"===o[r])this.$router.push({name:"blog-id",params:{id:e+".html"}});else{var c=l[o[r]];window.localStorage.setItem("article",n),window.location.href=c}}}},v=(n(1569),n(6)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-list"},[n("s-header",{attrs:{info:"RELATED BLOG ("+t.list.length+")"}}),t._v(" "),n("div",{staticClass:"list-box"},t._l(t.list,(function(e){return n("div",{key:e.id,staticClass:"article-li animated fadeInDownBig",on:{click:function(n){return t.redirectArticle(e)}}},[n("div",{staticClass:"lef"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{loading:"lazy",src:e.articleImg,alt:""}})])]),t._v(" "),n("div",{staticClass:"rig"},[n("span",{staticClass:"article-title",domProps:{innerHTML:t._s(e.articleTitle)}}),t._v(" "),n("span",{staticClass:"article-time"},[t._v(t._s(e.articleTime))]),t._v(" "),n("span",{staticClass:"article-content",domProps:{innerHTML:t._s(e.articleDescribe)}})])])})),0),t._v(" "),n("div",{staticClass:"bot-fix",on:{click:function(e){return t.redirectResView()}}},[t._v("\n    VIEW ALL RESULTS FOR PCB\n    "),n("i",{staticClass:"el-icon-caret-right"})])],1)}),[],!1,null,"5482754a",null);e.default=component.exports},1876:function(t,e,n){"use strict";n(1570)},1877:function(t,e,n){"use strict";n(1571)},1878:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEX///9HcEz///////////////////////////////////////////////////////8jI1VHAAAAEHRSTlP/AFtK8ycI2BXdPH6zwZQyVUDDuwAAAFpJREFUCNdjEIQCBsGkhVDGBSYIQ5SBpRHKYDCESBWwJ0IYCjxQxbIMHyEMUYcZEIagAWcghCHE4LelGMQQNGFgYFAEMeQnMDAcBDEE84CGghmCTbsEGWDOAACLrRDHimAKnAAAAABJRU5ErkJggg=="},1879:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEVHcEz///////////////////////////////////////////8Uel1nAAAAC3RSTlMAZ3PLWPW7QxXaMcf2sB8AAABSSURBVAjXY2DAABxCSkCg2MDAvBsMDBi4skH0tgUMjOzWu3dvXiDAwD2FZfZOB88ABu7d5owCxbtBjN1ZZbshDBDAxoAamMDA4SgIBCINmJYDANbeK0zHdPe5AAAAAElFTkSuQmCC"},1880:function(t,e,n){"use strict";n(1572)},1938:function(t,e,n){t.exports=n.p+"img/logo_blue.png"},1939:function(t,e,n){},2037:function(t,e,n){"use strict";n.r(e);n(458),n(250);var r=n(459),o=n.n(r),l=n(1),c=n(1598),v=n(1599),d=n(1600),_=n(1601);l.default.use(o.a);var f={name:"SearchForm",components:{SearchList:_.default,SearchEmpty:d.default,SearchLoading:v.default,SearchHot:c.default},data:function(){return{keyword:null,status:"init"}},watch:{keyword:function(t){this.status=t?"loading":"init"}},methods:{setStatus:function(t){this.status=t}}},h=(n(1876),n(1877),n(6)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf"},[r("el-popover",{staticStyle:{"margin-top":"1px !important"},attrs:{placement:"bottom",width:"544","visible-arrow":!1,trigger:"click",offset:-120}},[r("search-hot",{directives:[{name:"show",rawName:"v-show",value:"init"===t.status,expression:"status === 'init'"}],on:{handleSearch:function(e){return t.keyword=e}}}),t._v(" "),r("search-empty",{directives:[{name:"show",rawName:"v-show",value:"empty"===t.status,expression:"status === 'empty'"}]}),t._v(" "),r("search-loading",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status,expression:"status === 'loading'"}]}),t._v(" "),r("SearchList",{directives:[{name:"show",rawName:"v-show",value:"done"===t.status,expression:"status === 'done'"}],attrs:{keyword:t.keyword},on:{setStatus:t.setStatus}}),t._v(" "),r("div",{staticClass:"search-form",attrs:{slot:"reference"},slot:"reference"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"Type in to Search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),r("div",{staticClass:"search-btn"},[r("img",{attrs:{loading:"lazy",src:n(472),alt:"search"}})])])],1)],1)}),[],!1,null,"5ed33264",null);e.default=component.exports},2038:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blue_area row-e",attrs:{type:"flex",justify:"center",align:"center"}},[r("div",{staticClass:"inner-box col-12 row-e"},[r("div",{staticClass:"content col-12 row-e"},[r("div",{staticClass:" col-6 row-e"}),t._v(" "),r("div",{staticClass:" col-5 ",staticStyle:{"margin-left":"10px",width:"150px"}},[r("img",{staticClass:"iconphone",attrs:{loading:"lazy",src:n(1878),alt:"phone icon"}}),t._v(" "),r("span",{staticClass:"smallTxt"},[t._v("+86-755-27398155")])]),t._v(" "),r("a",{staticStyle:{cursor:"pointer","text-decoration":"none",color:"#fff",width:"150px"},attrs:{href:"mailto:info@pcbonline.com?subject=I want to share my feedback and discuss to you&body=Hi,Owen Chang"}},[r("div",[r("img",{staticClass:"iconemail",attrs:{loading:"lazy",src:n(1879),alt:"email icon"}}),t._v(" "),r("span",{staticClass:"smallTxt ",staticStyle:{"margin-left":"20px"}},[t._v("info@pcbonline.com")])])])]),t._v(" "),r("div",{staticClass:"flex-width row-e"})])])}],o=n(255),l=n(254),c=(n(251),{components:{TechTable:o.default,TechClause:l.default},data:function(){return{}},props:{},methods:{}}),v=(n(1880),n(6)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"252450c0",null);e.default=component.exports},2160:function(t,e,n){t.exports=n.p+"img/logo_a.png"},2161:function(t,e,n){"use strict";n(1939)},2344:function(t,e,n){"use strict";n.r(e);n(315),n(100),n(157),n(79),n(42);var r=n(2037),o=n(2160),l=n.n(o),c=n(101),v=n.n(c),d={components:{SearchForm:r.default},props:{isHome:{type:Boolean,default:!1}},data:function(){return{fixed:!1,isUser:!1,username:"",routePath:null,cartCount:null,logo:l.a}},watch:{fixed:function(t){t||"/"!==this.routePath?this.logo=n(1938):this.logo=l.a}},methods:{menu:function(){this.scrollDistance=document.documentElement.scrollTop||document.body.scrollTop,this.scrollDistance>=400?this.fixed=!0:"/PCB-FAB/Rigid-Flex-PCBs/"===this.$route.path&&(this.fixed=!1)},loginOut:function(){var t=new Date;t.setTime(t.getTime()-1e4),document.cookie="nuxt_token="+escape("")+";expires="+t.toGMTString(),this.isUser=!1},urlQuery:function(t,e){if(window.location){e=e||window.location.href;var n=new RegExp("[?&]"+t+"=([^&]*)","i"),r=e.match(n),o="";if(r)try{o=decodeURIComponent(r[1])||""}catch(t){}return o}},linkManage:function(){window.open("https://sys.pcbonline.com/home")},goHome:function(){this.$router.push("/")},jumpOrders:function(){window.open("https://sys.pcbonline.com/audit")}},mounted:function(){var t=v.a.get("user-login"),e=v.a.get("user-favicon"),r=v.a.get("cartCount");window.addEventListener("scroll",this.menu,{passive:!0});var o=document.cookie||"",c=new RegExp("(^|(;\\s*))nuxt_token=[^;]+","gi"),d=(o.match(c)||[])[0]||"";d=d.replace(/[\s;]*/gi,"").split("=")[1]||"";var _=sessionStorage.getItem("username");if(this.routePath=this.$route.path,"/PCB-FAB/Rigid-Flex-PCBs/"!==this.$route.path||this.fixed?this.logo=n(1938):this.logo=l.a,d?(this.isUser=!0,this.username=_):this.isUser=!1,t)this.isUser=t,this.username=e,this.cartCount=r;else{var f=this.urlQuery("user"),h=this.urlQuery("head");f&&h&&(this.isUser=f,this.username=h,v.a.set("user-login",f),v.a.set("user-favicon",h))}}},_=(n(2161),n(6)),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.fixed?"immobilization":"header"}},[n("ProductV31BlueColumn"),t._v(" "),n("CommonLayoutHeaderHeight")],1)}),[],!1,null,"53c7fc40",null);e.default=component.exports;installComponents(component,{ProductV31BlueColumn:n(2038).default,CommonLayoutHeaderHeight:n(2026).default})},251:function(t,e,n){},254:function(t,e,n){"use strict";n.r(e);var r={props:{flexible:{type:Object,default:function(){}}}},o=(n(272),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"terms"},[n("p",{staticClass:"intro_in"},[t._v("\n            "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_title)+"\n        ")]),t._v(" "),n("ul",{staticClass:"manufacturing"},[n("li",[n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_flexural)+"\n                ")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_flexural_one)+"\n                ")])]),t._v(" "),n("li",[n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft)+"\n                ")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_one)+"\n                ")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_two)+"\n                    "),n("a",{attrs:{href:"/pdf/flexible-pcb-terms.pdf",target:"_blank"}},[t._v(t._s(t.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_three))])])])])])])}),[],!1,null,"75bdb3c5",null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);n(271);var r=n(6),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tech_of_table"},[n("p",[t._v("\n        PCBONLINE is able to meet the following technical capabilities for\n        all of our flexible designs:\n    ")]),t._v(" "),n("div",{staticClass:"table_cs_show"},[n("div",{staticClass:"table_show",attrs:{id:"head_table"}},[n("div",[t._v("Parameter")]),t._v(" "),n("div",[t._v("Fabrication Process")]),t._v(" "),n("div",[t._v("Data")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Layer Count")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("1-10")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Final Board Thickness")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("0.05-0.6mm")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Aspect Ratio")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("3:1")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Copper Thickness")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("1/3~3oz")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Impedance Control")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("50±5Ω,90±9Ω,100±10Ω")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Line/Space")]),t._v(" "),n("div",[t._v("Inner Layer "),n("br"),t._v("External Layer")]),t._v(" "),n("div",[t._v("\n                1.6/1.6mil\n                "),n("br"),t._v("1.6/1.6mil\n            ")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Min Drill Bit Size")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("6mil")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Hole Size Tolerance")]),t._v(" "),n("div",[t._v("PTH "),n("br"),t._v("NPTH")]),t._v(" "),n("div",[t._v("\n                ±3mil\n                "),n("br"),t._v("±2mil\n            ")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Hole Position Tolerance")]),t._v(" "),n("div"),t._v(" "),n("div",[t._v("±3mil")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Coverlayer")]),t._v(" "),n("div",[t._v("Line to PAD Registration")]),t._v(" "),n("div",[t._v("6mil±2mil")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Profile Tolerance")]),t._v(" "),n("div",[t._v("\n                Puching\n                "),n("br"),t._v("Laser Cutting\n            ")]),t._v(" "),n("div",[t._v("\n                ±3mil\n                "),n("br"),t._v("±2mil\n            ")])]),t._v(" "),n("div",{staticClass:"table_show"},[n("div",[t._v("Surface Finish")]),t._v(" "),n("div",[t._v("\n                ENIG\n                "),n("br"),t._v("OSP "),n("br"),t._v("Immersion Tin "),n("br"),t._v("Immersion Silver\n                "),n("br"),t._v("Hard Gold Plating\n            ")]),t._v(" "),n("div",[t._v('\n                Au 1-3u",Ni 120-200u"\n                '),n("br"),t._v("0.25-0.5um "),n("br"),t._v("0.5-1um "),n("br"),t._v("0.05-0.12um "),n("br"),t._v('Au\n                5-40u",Ni 120-200u"\n            ')])])])])}],!1,null,"1eacb96a",null);e.default=component.exports},262:function(t,e,n){},263:function(t,e,n){},271:function(t,e,n){"use strict";n(262)},272:function(t,e,n){"use strict";n(263)},528:function(t,e,n){},549:function(t,e,n){"use strict";n.r(e);var r={name:"s-header",props:{info:{type:String,default:"Hot Searches"},loading:{type:Boolean,default:!1}}},o=(n(675),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-header"},[t.loading?[n("div",{staticClass:"animate-box"},[t._m(0),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("defs",[n("filter",{attrs:{id:"goo"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"17",result:"blur"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -6",result:"goo"}}),t._v(" "),n("feBlend",{attrs:{in:"SourceGraphic",in2:"goo"}})],1)])])])]:[t._v("\n    "+t._s(this.info)+"\n  ")]],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blobs"},[n("div",{staticClass:"blob active"}),t._v(" "),n("div",{staticClass:"blob active"})])}],!1,null,"1c20f2ec",null);e.default=component.exports},675:function(t,e,n){"use strict";n(528)},718:function(t,e,n){},719:function(t,e,n){},720:function(t,e,n){}}]);