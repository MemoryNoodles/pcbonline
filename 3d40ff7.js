(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1432:function(e,t,n){},1645:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASBAMAAAC+3HPqAAAAG1BMVEXV3v9HcEzW3v/W3v/W4P/W4f/X5P/W3v/h4f8Xb//SAAAACXRSTlP/AJXZakQmuxEkX07DAAAAbklEQVQY01XPPRJAMBCG4R0h6s/4K7mBUsmMA3ADbiBHyLi4JFasbXae7nupI3kJNT8bagdBZQm7sAahEt6cMUWm8C6i+2CczByPL/bIrtkHG2tghtdl8BwNH5Hgs48wwi5CWWEXoSFduenSWPjf3OkPJZDdjwMAAAAASUVORK5CYII="},1646:function(e,t,n){"use strict";n(1432)},1970:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{isSelect:!1,chooseTitle:["PCB","FPC","ALU","SMT"],type:["All the models","PCB","FPC","ALU","SMT"],PCB:[{contentOne:"Layer:",contentValue:"-- 1-24",contentTwo:"Copper Thickness：",twoValue:"-- Inner Finish Copper: 1-4OZ  <br/> -- Outer Finish Copper:1-7OZ"},{contentOne:"Laminate:",contentValue:"-- Normal Tg / High Tg / Lead <br/>free / Halogen Free",contentTwo:"Min.Line Width/Spacing：",twoValue:"-- 0.0635mm/0.0635MM"},{contentOne:"Surface Finishing:",contentValue:"-- OSP/HASL/ENIG/LF HASL/Flash Gold/<br/>Immersion TIN/Immersion Sil",contentTwo:"Min.CNC Drilling Size：",twoValue:"-- 0.15MM"},{contentOne:"Board Thickness：",contentValue:"-- 0.15~3..2mm ",contentTwo:"Min.Laser Drilling Size：",twoValue:"-- 0.075MM "},{contentOne:"-- 0.075MM ",contentValue:"-- 500*580m ",contentTwo:"HDI stack up：",twoValue:"-- 1+N+1, 2+N+2, 3+N+3 "}],FPC:[{contentOne:"Layer：",contentValue:"-- 1-6",contentTwo:"Copper Thickness:",twoValue:"-- 1/3-3OZ"},{contentOne:"Material:",contentValue:"-- Polyimide",contentTwo:"Min.Line Width/Spacing:",twoValue:"-- 0.0635mm/0.0635MM"},{contentOne:"Surface Finishing:",contentValue:"-- OSP/Immersion ENIG/Immersion Tin/Immersion Silver",contentTwo:"Min.CNC Drilling Size:",twoValue:"-- 0.15MM"},{contentOne:"Board Thickness:",contentValue:"-- 0.05~0.6mm",contentTwo:"PI Thickness:",twoValue:"--  0.1~0.4MM"},{contentOne:"Max Board Size:",contentValue:"-- 220mm*500mm",contentTwo:"Impedance Control:",twoValue:"-- +/-10%"}],ALU:[{contentOne:"Layer：",contentValue:"-- 1-4",contentTwo:"Copper Thickness:",twoValue:"-- 1~3-3OZ"},{contentOne:"Material:",contentValue:"-- Aluminum",contentTwo:"Min.Line Width/Spacing:",twoValue:"-- 0.1mm/0.1MM"},{contentOne:"Surface Finishing:",contentValue:"-- OSP/HASL/LF HASL/Immersion ENIG/Immersion Tin/Immersion Silver",contentTwo:"Min.CNC Drilling Size:",twoValue:"-- 1.0mm"},{contentOne:"Board Thickness:",contentValue:"-- 0.6~3.2mm",contentTwo:"Dielectric Thickness:",twoValue:"--  0.075~0.15MM"},{contentOne:"Max Board Size:",contentValue:"-- Single  Layer: 1500*300mm  Double Layer: 300*500mm",contentTwo:"Heat Conductivity:",twoValue:"-- 1~4W/m*K"}],SMT:[{contentOne:"Speed:",contentValue:"-- up to 42,000 cph",contentTwo:"Feeder Inputs:",twoValue:"-- max.112(Using RF feeders)"},{contentOne:"Board Size:",contentValue:"-- Min:50*50mm<br/>-- Max:1 buffer is 650*370mm(single clamping)<br/>-- Max:3 buffer is 500*370mm",contentTwo:"",twoValue:""},{contentOne:"Component Height:",contentValue:"-- 25mm",contentTwo:"",twoValue:""},{contentOne:"Component Size:",contentValue:"-- 0201*~74mm*74mm/50mm*150mm",contentTwo:"",twoValue:""},{contentOne:"Placement Accuracy:",contentValue:"-- +/-0.035mm(Cpk≥1)",contentTwo:"",twoValue:""}],content:[],allAriticle:[]}},methods:{isSelected:function(){this.isSelect=!this.isSelect},chooseProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All the models";this.chooseTitle=e,"PCB"===e?this.allAriticle=[this.PCB]:"FPC"===e?this.allAriticle=[this.FPC]:"ALU"===e?this.allAriticle=[this.ALU]:"SMT"===e?this.allAriticle=[this.SMT]:"All the models"===e&&(this.allAriticle=[this.PCB,this.FPC,this.ALU,this.SMT]),this.isSelect=!1}},mounted:function(){this.allAriticle=[this.PCB,this.FPC,this.ALU,this.SMT],this.content=this.PCB}},c=o,l=(n(1646),n(7)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mobile-spe"},[e._m(0),e._v(" "),o("div",{staticClass:"mobile-model"},[o("p",{staticClass:"mobile-choose"},[e._v(e._s(e.chooseTitle))]),e._v(" "),o("p",{staticClass:"mobile-icon",on:{click:e.isSelected}},[o("img",{attrs:{loading:"lazy",src:n(1645),alt:"icon"}})]),e._v(" "),e.isSelect?o("div",{staticClass:"mobile-select"},e._l(e.type,(function(t,n){return o("p",{key:n,on:{click:function(n){return e.chooseProduct(t)}}},[e._v(e._s(t))])})),0):e._e()]),e._v(" "),e._l(e.allAriticle,(function(t,n){return o("div",{key:n,staticClass:"mobile-content"},[o("div",{staticClass:"content-title"},[e._v(e._s(e.chooseTitle[n]))]),e._v(" "),o("div",{staticClass:"information"},e._l(t,(function(t,n){return o("div",{key:n,class:n%2==0?"board":"add"},[o("div",[o("p",[e._v(e._s(t.contentOne))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(t.contentValue)}})]),e._v(" "),o("div",[o("p",[e._v(e._s(t.contentTwo))]),e._v(" "),o("p",{domProps:{innerHTML:e._s(t.twoValue)}})])])})),0)])}))],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mobile-title"},[n("h2",[e._v("Our product specifications")])])}],!1,null,"614252eb",null);t.default=component.exports}}]);