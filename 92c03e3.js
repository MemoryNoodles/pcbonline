(window.webpackJsonp=window.webpackJsonp||[]).push([[128,129,130],{1331:function(e){e.exports=JSON.parse('{"DirectoryCommonData":["PCB Fabrication Process and Prices","OEMs are responsible for the design and development of the electronic products","In the OEM PCB assembly working mode","FR4 and aluminum PCBs are cheaper than copper-based","more And then the OEM entrusts the PCB manufacturing layers and higher copper"]}')},1332:function(e,t,n){"use strict";n(653)},1333:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABoUlEQVQ4EY1RPUhCURT+3nuKhYUgFEVUBEG4NAURDUG0SOAcQQQtjU0FTTU0BC1tIQQRLRUNQUSEDiKFEBQhLZHQENEmmP08f2/nXL1PRX124Lxz7vm+8/sAEiHEEVtsH3wJ+aKIgdXdT7JCSMj2oxHrgxhhUo+maQEuEqlJ4ULRh4zYOaQWLHWMRkEmkQYZ08oEEYvnisP9Bn5MAYehoa9bBzU1dCawbAbT+s1jTj++NnUCOW5h3PdOshp8VIvSNUqEfTLTVH6jAb8UooorpImmBAaIEGHrIKcQf8nj+1fA69GRTBUxMepkTLbnW8oLXd1mcBHNYKDHAO+wtujmNTUHU5e3UnL/Trcu91+YbeewvagZKsew51embsbjiqRzpOekXXU8JtQFqwKEj5COlfVeQXJJ9bCzdJBnhVORtPLVr5SnPA2ZeErkEYtnsb7UgbOwicFeA6/vBWRzAjPjLsz722Qun5idmiP5hhxIvOUR2vPCWTUbJ/snXQhMuVRjy9ZMYEX/4agJLCrtFbEeLZxqbtWgOCHgknKTLfIZ9inOHym40+v9/QreAAAAAElFTkSuQmCC"},1334:function(e,t,n){},1335:function(e,t,n){},1336:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=97)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,c,l,d){var f,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=n,m._compiled=!0),r&&(m.functional=!0),c&&(m._scopeId="data-v-"+c),l?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},m._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(m.functional){m._injectStyles=f;var h=m.render;m.render=function(e,t){return f.call(t),h(e,t)}}else{var A=m.beforeCreate;m.beforeCreate=A?[].concat(A,f):[f]}return{exports:e,options:m}}n.d(t,"a",(function(){return r}))},97:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.buttonSize?"el-button--"+e.buttonSize:"",{"is-disabled":e.buttonDisabled,"is-loading":e.loading,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle}],attrs:{disabled:e.buttonDisabled||e.loading,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?n("i",{staticClass:"el-icon-loading"}):e._e(),e.icon&&!e.loading?n("i",{class:e.icon}):e._e(),e.$slots.default?n("span",[e._t("default")],2):e._e()])};r._withStripped=!0;var o={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(e){this.$emit("click",e)}}},c=n(0),component=Object(c.a)(o,r,[],!1,null,null,null);component.options.__file="packages/button/src/button.vue";var l=component.exports;l.install=function(e){e.component(l.name,l)};t.default=l}})},1337:function(e,t,n){"use strict";n(654)},1366:function(e,t,n){"use strict";n.r(t);var r=n(1331),o={name:"index",data:function(){return{directoryArray:r.DirectoryCommonData}},computed:{},created:function(){},mounted:function(){console.log(this.directoryArray)},methods:{}},c=(n(1332),n(7)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"directory_warp"},[n("div",{staticClass:"of_title"},[e._v("Table of Contents")]),e._v(" "),e._l(e.directoryArray,(function(t,r){return n("div",{key:r,staticClass:"of_rigid"},[e._v("\n    "+e._s(t)+"\n  ")])}))],2)}),[],!1,null,"75b26eac",null);t.default=component.exports},1367:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"btn_smt"},[r("img",{attrs:{src:n(1333),alt:""}}),e._v("\n      SMT Stencil.zip\n    ")])}],o=(n(1334),n(241),n(1361)),c=n.n(o),l=(n(1335),n(1336)),d=n.n(l),f=n(1);f.default.use(d.a),f.default.use(c.a);var m={name:"index",data:function(){return{formData:{}}},computed:{},created:function(){},mounted:function(){},methods:{selectFileClick:function(){this.$emit("selectFile",111)},submitClick:function(){this.$emit("submit",this.formData)}}},h=(n(1337),n(7)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"free_qoute"},[n("h4",{staticClass:"title"},[e._v("GET A FREE QUOTE")]),e._v(" "),n("div",{staticClass:"search-form"},[n("el-input",{attrs:{type:"text",placeholder:"Name"},model:{value:e.formData.aaaa,callback:function(t){e.$set(e.formData,"aaaa",t)},expression:"formData.aaaa"}})],1),e._v(" "),n("div",{staticClass:"search-form"},[n("el-input",{attrs:{type:"text",placeholder:"Email"},model:{value:e.formData.bbbb,callback:function(t){e.$set(e.formData,"bbbb",t)},expression:"formData.bbbb"}})],1),e._v(" "),n("div",{staticClass:"search-form"},[n("el-input",{attrs:{type:"textarea",placeholder:"Message",rows:8,name:"textarea"},model:{value:e.formData.cccc,callback:function(t){e.$set(e.formData,"cccc",t)},expression:"formData.cccc"}})],1),e._v(" "),n("div",{staticClass:"upload"},[e._v("File Upload")]),e._v(" "),n("div",{staticClass:"stencil"},[n("el-button",{staticClass:"btn_file",attrs:{type:"primary"},on:{click:e.selectFileClick}},[e._v("Select file")]),e._v(" "),e._m(0)],1),e._v(" "),n("div",{staticClass:"sub_btn"},[n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.submitClick}},[e._v("Submit")])],1)])}),r,!1,null,"30006e23",null);t.default=component.exports},1373:function(e,t,n){"use strict";t.__esModule=!0,t.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.isHtmlElement=function(e){return e&&e.nodeType===Node.ELEMENT_NODE};t.isFunction=function(e){return e&&"[object Function]"==={}.toString.call(e)},t.isUndefined=function(e){return void 0===e},t.isDefined=function(e){return null!=e}},1408:function(e,t,n){e.exports=n.p+"img/img7.png"},1409:function(e,t,n){},1533:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){for(var i=1,t=arguments.length;i<t;i++){var source=arguments[i]||{};for(var n in source)if(source.hasOwnProperty(n)){var r=source[n];void 0!==r&&(e[n]=r)}}return e}},1613:function(e,t,n){e.exports=n.p+"img/img8.png"},1614:function(e,t,n){e.exports=n.p+"img/img9.png"},1615:function(e,t,n){e.exports=n.p+"img/p.png"},1616:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAAXnVPIAAABl0lEQVQ4EcVTMUvDUBB+L6XQNGAzOYhoQRxEcHBxdHUSBKmgtm4pdCk4iGOdRAVHoRlrO1iE/pMOgjhIsYiTS6JgAkoTvy+8F6rgWDw4vrvvLnf37r0IoUS6rtuO43hPE0I2m81PeFlJCmEPUICeGyRyudws8nuO4xzT/yGy2+2anucFZKvVqmSxWKUsAR8MsjAuoGvKVvE/gCXY3mdcSnmN7mXgDvAG1JAl32D0mQB5gdYRbCeeEOsKJwl6V2foe4ThADFA+rZtz5RKpZCneMIERT05MDkJp7Isq8DlFungyzuFZeAX7SAIrpgwTwfChDoqnAKz0D5uYz+ZAY5AqwPAJnRgmuZJpVL5ID95SUfQrVqtlhWG4Tb8ZeiC4gfAe4x2+3u0pADmn0NCD7qqPng3DOMQB36ljw1NR1F0CXNKxXn3W3gHz9xzB86uChDCTCazMhqNHsc4AW4RHDdpah4NOlxzDTrUJNBE4gYvTHO0yTGmOeAwn8/X0h3wX/B9v4GAg5HtscTURCG+axfPpMFnkgb+1fgGVlSeWGnoAWEAAAAASUVORK5CYII="},1617:function(e,t,n){e.exports=n.p+"img/img10.png"},1618:function(e,t,n){e.exports=n.p+"img/img11.png"},1619:function(e,t,n){"use strict";n(1409)},1936:function(e,t,n){"use strict";n.r(t);var r={name:"PcbRule",data:function(){return{teamArray:[{img:n(1615),value:" PCBONLINE Team Wed, May 24, 2023"},{img:n(1616),value:"800"}],electronArray:["PCBA is a printed circuit board assembly. It is an electronic mainboard or module created by soldering components on a blank PCB.","A blank PCB consists of insulating material sheets, copper foil, and solder masks. When the PCB is soldered with desired components and passes inspections, it is a PCBA.","The following is what this article reveals details of PCBA:"],imagineArray:["A PCBA includes a PCB and components. A PCB uses conductive traces and pads that are etched from copper layers, which are laminated between the sheet layers that are non-conductive. The components are soldered on the PCB to connect electrically and mechanically.","To ensure that the connection between the PCB and components works adequately, solder is welded or inserted into a blank circuit board and inspected to test its performance.","You can imagine a PCBA as a cake. Non-conductive layers are the bread, the copper layers between are cream, the solder mask is the chocolate shell, and the components are the fruit and decoration on the top.","However, a PCBA is more complex, as copper traces in different layers are interconnected by copper-filled holes, and PCB pads are not covered by solder masks but by a surface finish. Besides, a PCBA can have dual component-mounting sides."],productArray:["A PCBA is a semi-electrical product for everything, from a small LED light to a large industrial control system. When PCBAs are installed with enclosures, they are box builds or end products."],stepArray:[{title:"Step1.",img:n(1408),value:["The first step in designing a custom PCB is in creating a schematic view.","The required component is placed on a canvas and their pins are connected with lines that represent the electrical connections. The components usually are taken from a component library which is a part of the design software.","There may be multiple variations of the same components depending upon the type of package being used e.g. dual inline package or a surface-mounted chip. The packages may seem the same in the schematic view but are very different in the layout view where the board is actually designed.","Apart from the components and their electrical connections, power and ground signals are also needed. Also, connectors have to be placed on the PCB to make a place for power and ground. The board is also required to be connected to external devices, such as potentiometers and LEDs, etc."]},{title:"Step2.",img:n(1617),value:["Once everything is placed in its place, an electric rule check is run to ensure no evident faults.","These may include breaks in wires or connections or any missing connection to ground or power etc.Once the schematic is done, the board layout view is checked."]},{title:"Step3.",value:["The components are moved to proper places that make good sense."]},{title:"Step4.",value:["For the board production, signals are assigned to each layer and varying signals on a single layer cannot touch."]},{title:"Step5.",value:["After the signals are laid, a design rule check needs to run to ensure the proper placement of holes, traces, etc. These rules can be customized as well."]},{title:"Step6.",value:["If the design is approved, the design files can be uploaded.","The communication language of PCB fabrication is a Gerber file. Each board has multiple files, one for each layer. Another file known as the drill file is used to define where holes need to be drilled."]},{title:"Step7.",value:["Go to PCBONLINE's online quotation system and click Browse Files to upload Gerber.","When the Gerber is uploaded, it will run its own error check procedure. It produces an image file of the PCB. You'll need to enter the PCB quantity you want."]},{title:"Step8.",img:n(1618),value:["Check PCB specifications, choose the lead time, and click Buy Now. Follow the next on-screen instructions. After that, it will take half an hour for PCBONLINE to audit your inquiry. Later, PCBONLINE will send an email to notify you about the order. You can send your bill of materials (BOM) and pick-and-place file to info@pcbonline.com for PCB assembly."]}],ensuresArray:["The one-stop PCBA manufacturer PCBONLINE ensures customer satisfaction and reliability. They build and assemble nearly perfect PCBAs with perfect working and neatness. The pricing also goes down with an increase in the number of PCBAs.","Throughout your PCBA project, one-on-one engineering support and considerate customer services from PCBONLINE are offered to you."],batchArray:["PCBONLINE is a PCBA source-factory manufacturer with a group of in-house R & D teams of 100+ engineers and 500+ technicians.","It manufactures 1 to 64-layer PCBs/PCBAs that are quite advanced, such as high-frequency PCBA, ceramic PCBA, rigid-flex PCBA, HDI PCBA, etc.","It accepts custom PCBA orders for prototypes, small-batch, and massive production.","It has a two-shift work system and the delivery is speedy (the fastest build time is 8 hours)."],makesArray:["Suffice it to say that, PCBAs have a diverse range of benefits and applications that clearly indicates their important use in everyday life. Additionally, PCBAs are cost-friendly, which in turn makes it easier to use them in different industries. PCBA with its application in different technologies can be used in different situations.","PCBONLINE provides one-stop PCBA manufacturing reliably, on time, and cost-effectively. If you need to design and build an efficient and durable PCBA for your system, PCBONLINE is your best choice."]}},computed:{},created:function(){},mounted:function(){},methods:{selectFile:function(e){console.log(e,"选择文件")},submit:function(e){console.log(e,"提交")}}},o=(n(1619),n(7)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"blog_wrap"},[r("div",{staticClass:"header"},[r("div",{staticClass:"line_top"}),e._v(" "),r("p",{staticClass:"blog_des"},[e._v("\n      Home > Blog > Home > Blog > What is PCBA and How to Custom PCB Assembly\n      [Solved in 2023]\n    ")]),e._v(" "),r("h3",{staticClass:"title_custom"},[e._v("\n      What is PCBA and How to Custom PCB Assembly [Solved in 2023]\n    ")]),e._v(" "),r("p",{staticClass:"ass_des"},[e._v("PCB assembly")]),e._v(" "),r("div",{staticClass:"team_des"},e._l(e.teamArray,(function(t,n){return r("div",{key:n,staticClass:"team_item"},[r("img",{class:0==n?"left_img":"eye_img",attrs:{src:t.img,alt:""}}),e._v(" "),r("span",[e._v(e._s(t.value))])])})),0)]),e._v(" "),r("div",{staticClass:"main"},[r("div",{staticClass:"pcb_rule_des"},[r("div",{staticClass:"introduce_box"},[r("div",{staticClass:"left_des"},[r("div",[r("img",{staticClass:"common_img_pcb",attrs:{src:n(1408),alt:""}}),e._v(" "),r("div",{staticClass:"common_des_pcb"},e._l(e.electronArray,(function(t,n){return r("span",{key:n,staticClass:"common_margin"},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",[r("h4",{staticClass:"common_small_title"},[e._v("Part 1: What is a PCBA?")]),e._v(" "),e._m(0),e._v(" "),r("img",{staticClass:"common_img_pcb",attrs:{src:n(1613),alt:""}}),e._v(" "),r("div",{staticClass:"common_des_pcb"},e._l(e.imagineArray,(function(t,n){return r("span",{key:n,staticClass:"common_margin"},[e._v(e._s(t))])})),0),e._v(" "),r("img",{staticClass:"common_img_pcb",attrs:{src:n(1614),alt:""}}),e._v(" "),r("div",{staticClass:"common_des_pcb"},e._l(e.productArray,(function(t,n){return r("span",{key:n,staticClass:"common_margin"},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",[r("h4",{staticClass:"common_small_title"},[e._v("\n              Part 2: How do You Get a Custom PCBA\n            ")]),e._v(" "),r("p",[e._v("\n              In this section, we will have a look at how to create a custom\n              PCB assembly.\n            ")]),e._v(" "),e._l(e.stepArray,(function(t,n){return r("div",{key:n},[t.img?r("img",{staticClass:"common_img_pcb",attrs:{src:t.img,alt:""}}):e._e(),e._v(" "),r("div",{staticClass:"common_des_pcb"},e._l(t.value,(function(n,o){return r("div",{key:o,staticClass:"common_margin common_left"},[o?e._e():r("span",{staticClass:"common_log_serial"}),e._v(" "),r("div",{staticClass:"info_list"},[r("span",{staticClass:"common_son_pcb"},[o?e._e():r("span",{staticClass:"common_step_pcb"},[e._v(e._s(t.title))]),e._v(e._s(n))])])])})),0)])}))],2),e._v(" "),e._l(e.ensuresArray,(function(t,n){return r("div",{key:n,staticClass:"common_margin"},[e._v("\n            "+e._s(t)+"\n          ")])})),e._v(" "),r("div",{staticClass:"batch_des"},[r("div",{staticClass:"blue_pcb"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[r("rect",{attrs:{opacity:"0.01",width:"24",height:"24",fill:"black"}}),e._v(" "),r("path",{attrs:{d:"M12.5 0H17.5C18.875 0 20 1.05 20 2.33333V11.6667C20 12.95 18.875 14 17.5 14H12.5C11.125 14 10 12.95 10 11.6667V2.33333C10 1.05 11.125 0 12.5 0Z",fill:"#FFCA00"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.4286 0H5.57143C4.15714 0 3 1.08 3 2.4V22.8C3 23.04 3.12857 23.28 3.25714 23.52C3.64286 24 4.54286 24.12 5.05714 23.76L11.2286 19.56C11.7429 19.32 12.3857 19.32 12.7714 19.56L18.9429 23.76C19.2 23.88 19.4571 24 19.7143 24C20.4857 24 21 23.52 21 22.8V2.4C21 1.08 19.8429 0 18.4286 0ZM4.28571 2.4C4.28571 1.68 4.8 1.2 5.57143 1.2H18.4286C19.2 1.2 19.7143 1.68 19.7143 2.4V22.8L13.4143 18.6C12.5143 18 11.3571 18 10.4571 18.6L4.28571 22.8V2.4Z",fill:"#2951EA"}})]),e._v("\n              Here are some details of the PCBONLINE:\n            ")]),e._v(" "),e._l(e.batchArray,(function(t,n){return r("div",{key:n},[e._v("\n              "+e._s(t)+"\n            ")])}))],2),e._v(" "),r("div",[r("h3",{staticClass:"common_small_title"},[e._v("Wrapping Up")]),e._v(" "),e._l(e.makesArray,(function(t,n){return r("div",{key:n,staticClass:"common_margin"},[e._v("\n              "+e._s(t)+"\n            ")])}))],2),e._v(" "),r("div",[r("div",{staticClass:"reprint_des"},[e._v("\n              © This article is an original work of the PCBONLINE team. Please\n              indicate the author PCBONLINE if you reprint. If the article is\n              reproduced without permission or indicating the author's source,\n              PCBONLINE reserves the right to investigate the infringement.\n            ")]),e._v(" "),r("h3",{staticClass:"common_small_title"},[e._v("\n              View and save our product information\n            ")]),e._v(" "),r("div",{staticClass:"assembly_des"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"38",height:"34",viewBox:"0 0 38 34",fill:"none"}},[r("path",{attrs:{d:"M23.1194 1.33765L23.4687 9.48005L26.2782 10.7349L32.3291 10.0926L23.1194 1.33765Z",fill:"#FFCA00"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.10625 11.7469V11.7422H24.6047V25.5797H5.19844H0V11.7422H5.19375V11.7469H7.10625ZM31.3359 11.1516V16.3594C31.3359 16.8844 31.7625 17.3109 32.2875 17.3109C32.8125 17.3109 33.2391 16.8844 33.2391 16.3594V10.6031C33.2391 9.47812 32.7703 8.40938 31.9453 7.64531L24.8625 1.09687C24.1172 0.407812 23.1422 0.0234375 22.125 0.0234375H9.225C6.99844 0.0234375 5.19375 1.82813 5.19375 4.05V11.7422H7.10625V4.05C7.10625 2.87813 8.05781 1.92656 9.22969 1.92656H22.1109V7.125C22.1109 9.35156 23.9156 11.1516 26.1375 11.1516H31.3359ZM30.8418 9.24375H32.2875V11.1516H31.3359V10.6078C31.3359 10.1079 31.158 9.6248 30.8418 9.24375ZM24.0187 2.90137L30.6562 9.04688C30.7225 9.1088 30.7844 9.17459 30.8418 9.24375H26.1422C24.9703 9.24375 24.0187 8.29219 24.0187 7.12031V2.90137ZM24.0187 2.90137V0.975H22.1109V1.92656H22.1344C22.6687 1.92656 23.1844 2.12812 23.5734 2.48906L24.0187 2.90137ZM5.19844 25.5797V28.6547C5.19844 29.7234 5.625 30.75 6.37969 31.5047C7.13438 32.2594 8.16094 32.6859 9.22969 32.6859H23.625C24.15 32.6859 24.5766 32.2594 24.5766 31.7344C24.5766 31.2094 24.15 30.7828 23.625 30.7828H9.225C8.6625 30.7828 8.12344 30.5578 7.725 30.1594C7.32656 29.7609 7.10156 29.2219 7.10156 28.6594V25.5844L5.19844 25.5797ZM31.3359 29.598V31.7297H33.2438V29.5078L35.9203 26.8313C36.375 26.5219 36.8016 26.5453 37.1906 26.9062C37.5797 27.2625 37.6031 27.6891 37.2656 28.1766L32.2406 33.2016L27.2156 28.1766C26.9016 27.6844 26.9156 27.2578 27.2578 26.9062C27.6047 26.5547 28.0359 26.5266 28.5656 26.8313L31.3359 29.598ZM31.3359 29.598V20.9672C31.4719 20.4328 31.7906 20.1656 32.2922 20.1609C32.7938 20.1516 33.1078 20.4234 33.2438 20.9672V29.5078L32.2453 30.5063L31.3359 29.598ZM4.06406 20.1281H2.70469V24.0375H1.35469V13.5703H4.33125C5.46094 13.5703 6.3375 13.8422 6.96094 14.3859C7.58437 14.9297 7.89844 15.7078 7.89844 16.725C7.89844 17.7516 7.53281 18.5859 6.80156 19.2234C6.07031 19.8609 5.16094 20.1656 4.06406 20.1281ZM2.70469 14.7656H4.08281C5.67656 14.7656 6.47344 15.4406 6.47344 16.7859C6.47344 17.4797 6.25781 18.0141 5.83125 18.3844C5.40469 18.7547 4.77656 18.9422 3.95156 18.9422H2.7V14.7656H2.70469ZM11.8172 24.0422H8.93906V13.5703H11.925C13.5094 13.5703 14.8312 14.0344 15.8812 14.9578C16.9359 15.8813 17.4609 17.1187 17.4609 18.675C17.4609 20.3016 16.9312 21.6 15.8812 22.575C14.8312 23.5547 13.4766 24.0422 11.8172 24.0422ZM10.2937 14.7797H11.8734C13.1203 14.7797 14.1281 15.1078 14.8922 15.7688C15.6562 16.425 16.0406 17.4094 16.0406 18.7172C16.0406 20.025 15.6703 21.0375 14.925 21.7641C14.1797 22.4906 13.1391 22.8516 11.8125 22.8516H10.2937V14.7797ZM23.9859 13.575V14.775H19.9453V18.2766H23.6906V19.4672H19.95V24.0422H18.5953V13.575H23.9859Z",fill:"#2951EA"}})]),e._v(" "),r("span",{staticClass:"blue_pcb"},[e._v("PCB Assembly from PCBONLINE.pdf")])])])],2)])]),e._v(" "),r("div",{staticClass:"rigid_right"},[r("ProductNewProjectBDirectoryCommon"),e._v(" "),r("ProductNewProjectBQuotationCommon",{on:{selectFile:e.selectFile,submit:e.submit}})],1)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"common_des_pcb common_margin"},[e._v("\n              PCBA or Printed Circuit Board Assembly is a term that refers to\n              circuit boards surface mounted and/or through-hole mounted with\n              electronic components, such as capacitors, resistors, and ICs.\n              Some PCBAs can embed components, such as\n              "),n("span",{staticClass:"blue_pcb"},[e._v("LTCC ceramic PCBs.")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ProductNewProjectBDirectoryCommon:n(1366).default,ProductNewProjectBQuotationCommon:n(1367).default})},241:function(e,t,n){},291:function(e,t,n){"use strict";t.__esModule=!0,t.isEmpty=t.isEqual=t.arrayEquals=t.looseEqual=t.capitalize=t.kebabCase=t.autoprefixer=t.isFirefox=t.isEdge=t.isIE=t.coerceTruthyValueToArray=t.arrayFind=t.arrayFindIndex=t.escapeRegexpString=t.valueEquals=t.generateId=t.getValueByPath=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.noop=function(){},t.hasOwn=function(e,t){return f.call(e,t)},t.toObject=function(e){for(var t={},i=0;i<e.length;i++)e[i]&&m(t,e[i]);return t},t.getPropByPath=function(e,path,t){for(var n=e,r=(path=(path=path.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i=0,o=r.length;i<o-1&&(n||t);++i){var c=r[i];if(!(c in n)){if(t)throw new Error("please transfer a valid prop path to form item!");break}n=n[c]}return{o:n,k:r[i],v:n?n[r[i]]:null}},t.rafThrottle=function(e){var t=!1;return function(){for(var n=this,r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];t||(t=!0,window.requestAnimationFrame((function(r){e.apply(n,o),t=!1})))}},t.objToArray=function(e){if(Array.isArray(e))return e;return C(e)?[]:[e]};var o,c=n(1),l=(o=c)&&o.__esModule?o:{default:o},d=n(1373);var f=Object.prototype.hasOwnProperty;function m(e,t){for(var n in t)e[n]=t[n];return e}t.getValueByPath=function(object,e){for(var t=(e=e||"").split("."),n=object,r=null,i=0,o=t.length;i<o;i++){var path=t[i];if(!n)break;if(i===o-1){r=n[path];break}n=n[path]}return r};t.generateId=function(){return Math.floor(1e4*Math.random())},t.valueEquals=function(a,b){if(a===b)return!0;if(!(a instanceof Array))return!1;if(!(b instanceof Array))return!1;if(a.length!==b.length)return!1;for(var i=0;i!==a.length;++i)if(a[i]!==b[i])return!1;return!0},t.escapeRegexpString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var h=t.arrayFindIndex=function(e,t){for(var i=0;i!==e.length;++i)if(t(e[i]))return i;return-1},A=(t.arrayFind=function(e,t){var n=h(e,t);return-1!==n?e[n]:void 0},t.coerceTruthyValueToArray=function(e){return Array.isArray(e)?e:e?[e]:[]},t.isIE=function(){return!l.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},t.isEdge=function(){return!l.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},t.isFirefox=function(){return!l.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},t.autoprefixer=function(style){if("object"!==(void 0===style?"undefined":r(style)))return style;var e=["ms-","webkit-"];return["transform","transition","animation"].forEach((function(t){var n=style[t];t&&n&&e.forEach((function(e){style[e+t]=n}))})),style},t.kebabCase=function(e){var t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()},t.capitalize=function(e){return(0,d.isString)(e)?e.charAt(0).toUpperCase()+e.slice(1):e},t.looseEqual=function(a,b){var e=(0,d.isObject)(a),t=(0,d.isObject)(b);return e&&t?JSON.stringify(a)===JSON.stringify(b):!e&&!t&&String(a)===String(b)}),v=t.arrayEquals=function(e,t){if(t=t||[],(e=e||[]).length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!A(e[i],t[i]))return!1;return!0},C=(t.isEqual=function(e,t){return Array.isArray(e)&&Array.isArray(t)?v(e,t):A(e,t)},t.isEmpty=function(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return!e;if(e instanceof Error)return""===e.message;switch(Object.prototype.toString.call(e)){case"[object String]":case"[object Array]":return!e.length;case"[object File]":case"[object Map]":case"[object Set]":return!e.size;case"[object Object]":return!Object.keys(e).length}return!1})},653:function(e,t,n){},654:function(e,t,n){}}]);