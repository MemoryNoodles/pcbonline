(window.webpackJsonp=window.webpackJsonp||[]).push([[295,17,111,113,114,115],{1014:function(t,e,n){"use strict";n(796)},1015:function(t,e,n){t.exports=n.p+"img/live_icon11.png"},1016:function(t,e,n){t.exports=n.p+"img/live_icon12.png"},1017:function(t,e,n){t.exports=n.p+"img/live_icon13.png"},1018:function(t,e,n){"use strict";n(797)},1019:function(t,e,n){"use strict";n(798)},1020:function(t,e,n){},1021:function(t,e,n){t.exports=n.p+"img/mask.png"},1325:function(t,e,n){},1411:function(t,e,n){"use strict";n.r(e);n(27);var o={data:function(){return{activeIndex:0,type:["PCB Production","SMT Production","EMS Assembly"]}},methods:{handlVideo:function(t){var e=this;this.activeIndex=t;var n=this.type.filter((function(t,n){return n!==e.activeIndex}));this.$emit("handChildType",n),this.$store.commit("setVideoType",this.activeIndex)}},mounted:function(){this.$emit("handChildType",["SMT Production","EMS Assembly"])},computed:{setVideoType:function(){return this.$store.state.videoType}}},r=(n(1014),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"live-head"},[o("Header",{attrs:{id:"live-header",isHome:!0}}),t._v(" "),o("div",{staticClass:"live-player"},[o("div",{staticClass:"title"},t._l(t.type,(function(e,r){return o("div",{key:r,class:r===t.setVideoType&&"active-show",on:{click:function(e){return t.handlVideo(r)}}},[o("p",{attrs:{id:"jump_"+r}},[t._v(t._s(e))]),t._v(" "),r===t.setVideoType?o("p",{staticClass:"show-icon"},[o("img",{attrs:{loading:"lazy",src:n(718),alt:"icon"}})]):t._e()])})),0),t._v(" "),o("div",{staticClass:"live-main"},[o("LiveVideo"),t._v(" "),o("LiveBarrage")],1)])],1)}),[],!1,null,"550f44ee",null);e.default=component.exports},1412:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{advantages:[{drag:n(1015),number:"3000+",title:"Skilled workers"},{drag:n(701),number:"500+",title:"production equipment"},{drag:n(1016),number:"300+",title:"testing equipment"},{drag:n(1017),number:"66500+",title:"Production quantity"}]}}},r=(n(1018),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-advantage"},[n("h3",[t._v("Advantages of PCB factory")]),t._v(" "),n("div",{staticClass:"live-card"},t._l(t.advantages,(function(e,o){return n("div",{key:o},[n("p",{staticClass:"live-drag"},[n("img",{attrs:{loading:"lazy",src:e.drag,alt:"icon"}})]),t._v(" "),n("p",{staticClass:"live-number"},[t._v(t._s(e.number))]),t._v(" "),n("p",{staticClass:"live-title"},[t._v(t._s(e.title))])])})),0)])}),[],!1,null,"f887194c",null);e.default=component.exports},1413:function(t,e,n){"use strict";n.r(e);var o={},r=(n(1019),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-shopping"},[n("p",[t._v("Better Quicker Cheaper Make excellence a normal")]),t._v(" "),n("a",{staticClass:"btn-quickprev btn-reversal warning",attrs:{href:"https://sys.pcbonline.com/instant-quote",alt:"quote"}},[n("i",{staticClass:"el-icon-shopping-cart-1"}),t._v("\n            Online Quote\n        ")])])}],!1,null,"75458ede",null);e.default=component.exports},1414:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-box"},[n("textarea"),t._v(" "),n("button",{staticClass:"btn-reversal primary"},[t._v("Submit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("1 Comment")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{loading:"lazy",src:n(800),alt:"icon"}})])}],r=(n(1020),{components:{BlogRigBanner:n(746).default},data:function(){return{activeTabs:0,tabs:["oldest","newest","liked"],words:[{avator:n(1021),name:"Cara Wang",message:"Dear visitors, I am sorry you can't see PCBONLINE's factory live stream here, but you can see it in the online meeting with our guys. We can't display the PCB manufacturing factory live stream because we don't have a network interface between the monitor and our web server to support multiple real-time watches. When we finish the monitor online network interface, this factory live stream web page can be available. You can contact PCBONLINE by email at info@pcbonline.com and tell our team that you want to see our PCB/PCBA factory, and we can show you a real-time PCB/PCBA factory live stream through the online meeting.",praise:"0"}]}},methods:{handle:function(t){this.activeTabs=t},jumpWhere:function(t){document.querySelector("#jump_0").scrollIntoView(!0);var e=["PCB Production","SMT Production","EMS Assembly"].indexOf(t);this.$store.commit("setVideoType",e)}},props:{handTypes:{type:Array,default:function(){return["SMT Production","EMS Assembly"]}}}}),c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"live-comment"},[o("div",{staticClass:"live-contain"},[o("div",{staticClass:"live-message"},[t._m(0),t._v(" "),o("div",{staticClass:"message-use"},[o("div",{staticClass:"response"},[t._m(1),t._v(" "),o("div",{staticClass:"tabs"},t._l(t.tabs,(function(e,n){return o("p",{key:n,class:n===t.activeTabs&&"active",on:{click:function(e){return t.handle(n)}}},[t._v("\n                                "+t._s(e)+"\n                            ")])})),0)]),t._v(" "),t._l(t.words,(function(e,n){return o("div",{key:n,staticClass:"leave-word"},[o("div",{staticClass:"avator-head"},[o("img",{attrs:{loading:"lazy",src:e.avator}})]),t._v(" "),o("div",{staticClass:"relevant-information"},[o("p",[t._v(t._s(e.name))]),t._v(" "),o("p",[t._v(t._s(e.message))]),t._v(" "),o("div",[t._m(2,!0),t._v("\n                                "+t._s(e.praise)+"\n                            ")])])])}))],2)]),t._v(" "),o("div",{staticClass:"live-advert"},[o("div",{staticClass:"view-broadcasts"},[o("p",[t._v("View other live broadcasts")]),t._v(" "),o("p",{on:{click:function(e){return t.jumpWhere(t.handTypes[0])}}},[t._v("\n                        "+t._s(t.handTypes[0])+"\n                         "),o("img",{attrs:{loading:"lazy",src:n(799),alt:"icon"}})]),t._v(" "),o("p",{on:{click:function(e){return t.jumpWhere(t.handTypes[1])}}},[t._v("\n                        "+t._s(t.handTypes[1])+"\n                         "),o("img",{attrs:{loading:"lazy",src:n(799),alt:"icon"}})])]),t._v(" "),o("BlogRigBanner")],1)])])}),o,!1,null,null,null);e.default=component.exports},2150:function(t,e,n){"use strict";n(1325)},2363:function(t,e,n){"use strict";n.r(e);n(513);var o={head:function(){return{title:"PCB Factory Live Video Streaming | PCB Factory Online - PCBONLINE",meta:[{hid:"description",name:"description",content:"Here is PCBONLINE live video streaming. Visit our PCB factories online. Let us know your opinion about PCB production, or leave your comment on this page!"}],link:[{rel:"canonical",href:"https://www.pcbonline.com/factory-live/"}]}},data:function(){return{handType:[]}},methods:{handChildType:function(t){this.handType=t}}},r=(n(2150),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"factory-live"},[n("PageComponentsLiveFactoryLiveHeader",{on:{handChildType:t.handChildType}})],1),t._v(" "),n("PageComponentsLiveFactoryLiveAdvantage"),t._v(" "),n("PageComponentsLiveFactoryLiveShopping"),t._v(" "),n("PageComponentsLiveFactoryLiveComment",{attrs:{handTypes:t.handType}})],1)}),[],!1,null,"4500cced",null);e.default=component.exports;installComponents(component,{PageComponentsLiveFactoryLiveHeader:n(1411).default,PageComponentsLiveFactoryLiveAdvantage:n(1412).default,PageComponentsLiveFactoryLiveShopping:n(1413).default,PageComponentsLiveFactoryLiveComment:n(1414).default})},620:function(t,e,n){},701:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA4CAYAAAC/pKvXAAAABGdBTUEAALGPC/xhBQAAAYNJREFUaAXtWdERATEQdUYL9EAVaqAJJShBCZqgBlXQA0UwmGdMLiSb3TuZZ/3cJNlsdvftvs25ZqD4TRfnq2J7a+tpP2lak5kTw0y56sVGFhYed2OVmtnyotp/30yDiDuizgVjBSY1YpHjWr9oUquYt98jiH4iZS8gqekfsOO/EEHE4X3fzxzEaBARsZa0BrTIoYZy9IgcgcL3A+CcZg56NU+a1MqiXxQ7oq+JnGQvUM4p9gZGSg6oUZYmtV7FflxPagx00qbZ5vyQoUHEHUli3rOAs1bPAU8eF22I6C2HbXQ5qbQrgfnq+TdarEF6sXcV9VK9NIi8OnssEsjJ2FptczSIZNESWKzmazwNIu5IbcX+lbVCY/HqGc7XMKZJrSzWkkb8E8sB0dhdSXpGKE+DiDsSQvvrsSPyawTC82kQETXEMAqpMeg2JWexToOIRTBch2UEiq8ouIZYGnPXVXp9oakRNWtZfY7A54FShGkQcUdKU6CrfTSIqItdW6RWCNEgcgO3HFO6ed2HRQAAAABJRU5ErkJggg=="},718:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiBAMAAADFd2a2AAAAHlBMVEVHcEwsTukpUuo2V+wqUussU+spUuspUewpUuosUemtu506AAAACnRSTlMAF/8PwC/bfJpFGN2fnQAAALtJREFUKM9tkk0KAjEMhSMzgkuDNwjjz7LDnMABBZeK4F48geAB9AaCB3Zsms5r69v1g7wmeSEK6pg7QlXs5QqCrDW0MDLhqHlADMqcRrcWkbrxZS+3B1ZWH/npAJUzUT3jn1UfUHM0VItpa/6viDYBTWXUW7+sAWklnQAtFd0BrRX1gBq1vwJaKRKUtvoHFYWutKeiiWHEvFVHxUDDArOxfWjJcjSMZIUaGS7aTiLGAcd09mSXXJePNr6+2oo8JKii6xIAAAAASUVORK5CYII="},723:function(t,e,n){"use strict";n(620)},746:function(t,e,n){"use strict";n.r(e);var o={name:"BlogRigBanner",methods:{goQuote:function(){window.location.href="https://sys.pcbonline.com/instant-quote"}}},r=(n(723),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advertising"},[n("div",{staticClass:"banner-container"},[n("div",{staticClass:"banner-box"},[t._m(0),t._v(" "),n("div",{staticClass:"instant btn-reversal warning"},[n("div",{staticClass:"instant-drag",on:{click:t.goQuote}},[n("i",{staticClass:"el-icon-shopping-cart-1",staticStyle:{"font-size":"20px"}}),t._v("\n           Online Quote\n        ")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        Better, Quicker, Cheaper\n        "),n("br"),t._v("Online PCBs, PCBA, Components\n      ")])}],!1,null,"1f6b3dea",null);e.default=component.exports},796:function(t,e,n){},797:function(t,e,n){},798:function(t,e,n){},799:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAGCAYAAADkOT91AAAABGdBTUEAALGPC/xhBQAAAEtJREFUCB1jSEtLWwDEXAxQwASk4xkZGU+np6drgcQYgbL/oZLfmJiYskEq4ODfv3//WUA8oJZrQCp05syZ10AqFv7//98UxAFJAgDorhd6hLVqSwAAAABJRU5ErkJggg=="},800:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAARVBMVEUAAACZmZmdnZ2ampqZmZmfn5+ZmZmampqampqampqampqZmZn///+ampqZmZmampqZmZmampqdnZ2dnZ22traZmZn///9j1LAxAAAAFXRSTlMA+SGFZBDe2ZlI5eLbyq90bFEvJweRJisdAAAAV0lEQVQY063IRxKAMAwEQUu2HMhJ/P+pWFBFMLrBnHbb/FXy9fDCwMxYGHEuFdgLTk9zkA1mRFyOb21s+AycoKyVryoNg4ZRw1FDUrA1Ctod/R2hI/O1DfbBDRQVyC9FAAAAAElFTkSuQmCC"}}]);