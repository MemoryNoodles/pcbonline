(window.webpackJsonp=window.webpackJsonp||[]).push([[115,15],{1357:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAARVBMVEUAAACZmZmdnZ2ampqZmZmfn5+ZmZmampqampqampqampqZmZn///+ampqZmZmampqZmZmampqdnZ2dnZ22traZmZn///9j1LAxAAAAFXRSTlMA+SGFZBDe2ZlI5eLbyq90bFEvJweRJisdAAAAV0lEQVQY063IRxKAMAwEQUu2HMhJ/P+pWFBFMLrBnHbb/FXy9fDCwMxYGHEuFdgLTk9zkA1mRFyOb21s+AycoKyVryoNg4ZRw1FDUrA1Ctod/R2hI/O1DfbBDRQVyC9FAAAAAElFTkSuQmCC"},1389:function(t,e,n){"use strict";n.r(e);var r={name:"BlogRigBanner",methods:{goQuote:function(){window.location.href="https://sys.pcbonline.com/instant-quote"}}},o=(n(722),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advertising"},[n("div",{staticClass:"banner-container"},[n("div",{staticClass:"banner-box"},[t._m(0),t._v(" "),n("div",{staticClass:"instant btn-reversal warning"},[n("div",{staticClass:"instant-drag",on:{click:t.goQuote}},[n("i",{staticClass:"el-icon-shopping-cart-1",staticStyle:{"font-size":"20px"}}),t._v("\n           Online Quote\n        ")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        Better, Quicker, Cheaper\n        "),n("br"),t._v("Online PCBs, PCBA, Components\n      ")])}],!1,null,"1f6b3dea",null);e.default=component.exports},1425:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAGCAYAAADkOT91AAAABGdBTUEAALGPC/xhBQAAAEtJREFUCB1jSEtLWwDEXAxQwASk4xkZGU+np6drgcQYgbL/oZLfmJiYskEq4ODfv3//WUA8oJZrQCp05syZ10AqFv7//98UxAFJAgDorhd6hLVqSwAAAABJRU5ErkJggg=="},1629:function(t,e,n){},1630:function(t,e,n){t.exports=n.p+"img/mask.png"},1956:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-box"},[n("textarea"),t._v(" "),n("button",{staticClass:"btn-reversal primary"},[t._v("Submit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("1 Comment")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{loading:"lazy",src:n(1357),alt:"icon"}})])}],o=(n(1629),{components:{BlogRigBanner:n(1389).default},data:function(){return{activeTabs:0,tabs:["oldest","newest","liked"],words:[{avator:n(1630),name:"Cara Wang",message:"Dear visitors, I am sorry you can't see PCBONLINE's factory live stream here, but you can see it in the online meeting with our guys. We can't display the PCB manufacturing factory live stream because we don't have a network interface between the monitor and our web server to support multiple real-time watches. When we finish the monitor online network interface, this factory live stream web page can be available. You can contact PCBONLINE by email at info@pcbonline.com and tell our team that you want to see our PCB/PCBA factory, and we can show you a real-time PCB/PCBA factory live stream through the online meeting.",praise:"0"}]}},methods:{handle:function(t){this.activeTabs=t},jumpWhere:function(t){document.querySelector("#jump_0").scrollIntoView(!0);var e=["PCB Production","SMT Production","EMS Assembly"].indexOf(t);this.$store.commit("setVideoType",e)}},props:{handTypes:{type:Array,default:function(){return["SMT Production","EMS Assembly"]}}}}),c=n(7),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"live-comment"},[r("div",{staticClass:"live-contain"},[r("div",{staticClass:"live-message"},[t._m(0),t._v(" "),r("div",{staticClass:"message-use"},[r("div",{staticClass:"response"},[t._m(1),t._v(" "),r("div",{staticClass:"tabs"},t._l(t.tabs,(function(e,n){return r("p",{key:n,class:n===t.activeTabs&&"active",on:{click:function(e){return t.handle(n)}}},[t._v("\n                                "+t._s(e)+"\n                            ")])})),0)]),t._v(" "),t._l(t.words,(function(e,n){return r("div",{key:n,staticClass:"leave-word"},[r("div",{staticClass:"avator-head"},[r("img",{attrs:{loading:"lazy",src:e.avator}})]),t._v(" "),r("div",{staticClass:"relevant-information"},[r("p",[t._v(t._s(e.name))]),t._v(" "),r("p",[t._v(t._s(e.message))]),t._v(" "),r("div",[t._m(2,!0),t._v("\n                                "+t._s(e.praise)+"\n                            ")])])])}))],2)]),t._v(" "),r("div",{staticClass:"live-advert"},[r("div",{staticClass:"view-broadcasts"},[r("p",[t._v("View other live broadcasts")]),t._v(" "),r("p",{on:{click:function(e){return t.jumpWhere(t.handTypes[0])}}},[t._v("\n                        "+t._s(t.handTypes[0])+"\n                         "),r("img",{attrs:{loading:"lazy",src:n(1425),alt:"icon"}})]),t._v(" "),r("p",{on:{click:function(e){return t.jumpWhere(t.handTypes[1])}}},[t._v("\n                        "+t._s(t.handTypes[1])+"\n                         "),r("img",{attrs:{loading:"lazy",src:n(1425),alt:"icon"}})])]),t._v(" "),r("BlogRigBanner")],1)])])}),r,!1,null,null,null);e.default=component.exports},630:function(t,e,n){},722:function(t,e,n){"use strict";n(630)}}]);