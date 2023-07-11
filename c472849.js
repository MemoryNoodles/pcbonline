(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{2391:function(e,t,o){"use strict";o.r(t);o(251);var r={data:function(){return{processShow:!0,gerberShow:!0,techShow:!0,dragShowOne:!1,dragShowTwo:!1,dragShowThree:!1}},props:{flexible:{type:Object,default:function(){}}},methods:{isShowProgerss:function(){this.processShow=!this.processShow,this.gerberShow=!1,this.techShow=!1},isShowGreber:function(){this.gerberShow=!this.gerberShow,this.processShow=!1,this.techShow=!1},isShowTech:function(){this.techShow=!this.techShow,this.processShow=!1,this.gerberShow=!1},dragChange:function(){this.dragShowOne=!0},dragHide:function(){this.dragShowOne=!1},dragChangeTwo:function(){this.dragShowTwo=!0},dragHideTwo:function(){this.dragShowTwo=!1},dragChangeThree:function(){this.dragShowThree=!0},dragHideThree:function(){this.dragShowThree=!1}}},n=o(6),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m_tech_specs"},[r("div",{staticClass:"m_tech_specs_inner"},[r("h2",[e._v("PCB Prototypes at PCBONLINE - Manufacturing and Tech Specs")]),e._v(" "),r("div",{staticClass:"m_process",on:{click:e.isShowProgerss,mouseover:e.dragChange,mouseout:e.dragHide}},[e.dragShowOne?r("img",{attrs:{loading:"lazy",src:e.processShow?o(256):o(266),alt:"icon"}}):r("img",{attrs:{loading:"lazy",src:e.processShow?o(256):o(265),alt:"icon"}}),e._v(" "),r("p",[e._v("Quick-Turn PCBs")])]),e._v(" "),e.processShow?r("div",{staticClass:"m_show_word"},[e._m(0)]):e._e(),e._v(" "),r("div",{staticClass:"m_gerber",on:{click:e.isShowGreber,mouseover:e.dragChangeTwo,mouseout:e.dragHideTwo}},[e.dragShowTwo?r("img",{attrs:{loading:"lazy",src:e.gerberShow?o(256):o(266),alt:"icon"}}):r("img",{attrs:{loading:"lazy",src:e.gerberShow?o(256):o(265),alt:"icon"}}),e._v(" "),r("p",[e._v("Gerber Files for Manufacturing")])]),e._v(" "),e.gerberShow?r("div",{staticClass:"m_show_word"},[r("p",[e._v("\n                Gerber files are the first step in any PCB fabrication\n                process. When you design a PCB with any piece of software,\n                you will see the copper of the PCB as many different shapes,\n                lines, and sizes. Those graphical representations of the\n                copper need to be converted into data that PCB manufacturers\n                can use to produce a circuit board. This data is stored in\n                what are called Gerber files!\n            ")]),e._v(" "),r("p",[e._v("\n                A Gerber file has four main elements which include\n                configuration parameters, aperture settings, XY coordinates,\n                and flash command codes. Each portion of the PCB requires a\n                different Gerber file. This means that each conductor layer,\n                soldermask layer, silkscreen layer, etc. all need to have\n                their own Gerber files.\n            ")]),e._v(" "),r("p",[e._v("\n                Gerber data can be modified and generated directly with a\n                text editor, but there are various types of software that\n                can be used to view and guide the Gerber file creation.\n            ")]),e._v(" "),r("p",[e._v("\n                PCBONLINE accepts Gerber files in RS-274X and RS-274-D\n                formats as well as the following layout file formats:\n            ")]),e._v(" "),r("p",[e._v("• PCB files from PADS")]),e._v(" "),r("p",[e._v("• PCB and .DDB files from Protel")]),e._v(" "),r("p",[e._v("• .BRD files from Eagle")]),e._v(" "),r("p",[e._v("• PCB and/or .DDB files from Altium Designer")])]):e._e(),e._v(" "),r("div",{staticClass:"m_tech",on:{click:e.isShowTech,mouseover:e.dragChangeThree,mouseout:e.dragHideThree}},[e.dragShowThree?r("img",{attrs:{loading:"lazy",src:e.techShow?o(256):o(266),alt:"icon"}}):r("img",{attrs:{loading:"lazy",src:e.techShow?o(256):o(265),alt:"icon"}}),e._v(" "),r("p",[e._v("Technical Specifications")])]),e._v(" "),e.techShow?r("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[r("p",[e._v("\n                The standard specifications that we implement are derived\n                from current IPC standards, but we go above and beyond what\n                is required.\n            ")]),e._v(" "),r("PrototypeTable"),e._v(" "),r("p",[e._v("\n                This is an overview page for our prototype PCBs. Different \n                types of PCBs have different technical specifications and \n                capabilities, which cannot all be shown here. Click on the \n                links below for the technical specifications and capabilities \n                of the specific type of PCBs that you are looking for:\n            ")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/HDI-PCB/"}},[e._v("1. HDI PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Flexible-PCBs/"}},[e._v("2. Flexible PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/High-TG-PCBs/"}},[e._v("3. High-TG PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Multilayer-PCBs/"}},[e._v("4. Multilayer PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Halogen-Free-PCBs/"}},[e._v("5. Halogen-Free PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Aluminum-Nitride/"}},[e._v("6. Alumina PCBs and aluminum nitride PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Carbon-Nanotube/"}},[e._v("7. Carbon Nanotube PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Rigid-Flex-PCBs/"}},[e._v("8. Rigid-Flex PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/High-Frequency-PCBs/"}},[e._v("9. High Frequency PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Thick-Copper-PCBs/"}},[e._v("10. Thick-Copper PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Lead-Free-PCBs/"}},[e._v("11. Lead-Free PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/LED-PCB/"}},[e._v("12. LED PCBs")]),e._v(" "),r("a",{attrs:{href:"https://www.pcbonline.com/PCB-FAB/Carbon-PCBs/"}},[e._v("13. Carbon Ink PCBs")]),e._v(" "),r("p",[e._v("\n                For more information, you are welcome to contact us by email\n                at info@pcbonline.com.\n            ")])],1):e._e()])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("\n                    PCBONLINE provides our client with a guarantee that they\n                    will get their PCB prototypes in the originally quoted\n                    number of days. Quick-turn PCBs means that the circuit\n                    board is manufactured and assembled as quickly as\n                    possible - sometimes only in 24-hours! PCBONLINE can\n                    provide you with this guarantee while also maintaining\n                    excellent product quality.\n                ")]),e._v(" "),o("li",[e._v("\n                    PCBONLINE provides quick-turn PCB services for all types\n                    of circuits boards including, but not limited to the\n                    following: single-layer and double-layer PCBs,\n                    multilayer constructions, aluminum core PCBs,\n                    halogen-free boards, HDI designs, high-frequency PCBs,\n                    flexible constructions, rigid-flex boards, heavy copper\n                    boards, lead-free PCBs, and many more! You can quickly\n                    order all kinds of quick-turn PCBs from us on our quote\n                    page!\n                ")])])}],!1,null,null,null);t.default=component.exports},251:function(e,t,o){},256:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABAklEQVQ4T5XTPUrDQRAF8N8kUQmI4A3E2kawVERQGysvEBCtBAtBj2AliIVgq2JpHTBBvIcWFpJaGw1CyEpC1L8x5mO63Zk3b97O20gVT3IOY9WNPpGqNiTHkSpSp+7am73Y9JrFpXuTGk6wI4ksoFX3jK1Yd9c6pKpFySVmv5q0AB8Yz3Rt4gx1HCCfyTUiVc1LrjDXTwMehVK0qcsmFBxJ9oVcFzAJ56YdxoL3NuArUsUyLjDTvgs1bMea228N3WOksikFpygq2o0lL9maXwwDNHRIuwceheGPBmqih4aRXmnoPYQHeaX/N51T1+y16R/zDe2lH7eO2YuVwW4d6T98AnETbV6YxjpXAAAAAElFTkSuQmCC"},265:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABM0lEQVQ4T5VTvUvDcBB9Lw2RgIiCH6tKBxtc3AXn4tSIa0F0EjoI9k/oVBCHgquKY5WCODj4V0gd6mBB6pAoKoilaH8nqdr+mkpib7sv3r27d0TIkumnMdNu7xOwzZa1fX0x/qyXUHcWMv4KKYcAZoO4AI0EZbN6OnP5W9dpSKZlxLK9ggJ3CBghUAFw8PoxlX845zudNW9JBMcAFsPj9fuskcwy5fotQKxekopkSUQ1BdglkNByn0y5XgD5Y7ynwY2b8uRVEHAy3rIijgjMdyu6DeRJs23m6pWJF30UZ90bFcU9CLYAYYBwZwD56tl0OYpDyvVXASn2rTWa9Hd2SAQUe6Q7HN5y9cpcLIdhtzR4B6GUKPj7Dv+/NG4BldW09FhQkHgtRakVYMOgGlSr3hT3D1+h0JkWcfmeYwAAAABJRU5ErkJggg=="},266:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABQ0lEQVQ4T32SPUvDUBSGn5PUSkEEEXUVZxfB0Q+EqIObi4MgiE7FooL9CboIfmDRVcVFEMdCmoj/w8VBHLSITopQc6RpU27SkLudc+573497hMTRKv3kOAEKFCjKNJ/mFTELrTELXAKj7f4rwobM40b3QoBW6SXHPsougpUkRbhggLJM8i3qMYFyDYwn5cVq4QmbNdEav0DeGAZABYsfAvYA25g1mgA1Gi/AuizwEEr1mEK5AsY6HgzADT2UZI6vWBCP9NHgCNhEkSbDMxZlcbjL8qAeSyiHsVgzTbeHoj4H5DmWGeqZDC7D2OxEputYlMThNg2kPisEnAFD8ZSEe4SiOLyFKfmMoJyjLKelFPU+ULbDQjgFBmO7pC6raYMUaeFDrV1KoU6sRUdqfFsNc21AVxhd/6Ct+Coh4I8tWeTdZPsH5qlsNeLWS5sAAAAASUVORK5CYII="}}]);