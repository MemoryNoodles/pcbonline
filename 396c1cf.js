(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{2315:function(e,t,n){"use strict";n.r(t);n(242);var o={data:function(){return{processShow:!0,gerberShow:!0,techShow:!0,dragShowOne:!1,dragShowTwo:!1,dragShowThree:!1}},props:{flexible:{type:Object,default:function(){}}},methods:{isShowProgerss:function(){this.processShow=!this.processShow,this.gerberShow=!1,this.techShow=!1},isShowGreber:function(){this.gerberShow=!this.gerberShow,this.processShow=!1,this.techShow=!1},isShowTech:function(){this.techShow=!this.techShow,this.processShow=!1,this.gerberShow=!1},dragChange:function(){this.dragShowOne=!0},dragHide:function(){this.dragShowOne=!1},dragChangeTwo:function(){this.dragShowTwo=!0},dragHideTwo:function(){this.dragShowTwo=!1},dragChangeThree:function(){this.dragShowThree=!0},dragHideThree:function(){this.dragShowThree=!1}}},r=n(7),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"m_tech_specs"},[o("div",{staticClass:"m_tech_specs_inner"},[o("h2",[e._v("Multilayer PCB - Manufacturing and Tech Specs")]),e._v(" "),o("div",{staticClass:"m_process",on:{click:e.isShowProgerss,mouseover:e.dragChange,mouseout:e.dragHide}},[e.dragShowOne?o("img",{attrs:{loading:"lazy",src:e.processShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.processShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("Manufacturing Process")])]),e._v(" "),e.processShow?o("div",{staticClass:"m_show_word"},[e._m(0)]):e._e(),e._v(" "),o("div",{staticClass:"m_gerber",on:{click:e.isShowGreber,mouseover:e.dragChangeTwo,mouseout:e.dragHideTwo}},[e.dragShowTwo?o("img",{attrs:{loading:"lazy",src:e.gerberShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.gerberShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("Tech Specifications")])]),e._v(" "),e.gerberShow?o("div",{staticClass:"m_show_word"},[o("p",[e._v("\n                Leading manufacturing capability of leads to multilayer\n                circuit boards of prominent quality. Here is the tech specs\n                of our multilayer PCB:\n            ")]),e._v(" "),o("MultilayerTable")],1):e._e(),e._v(" "),o("div",{staticClass:"m_tech",on:{click:e.isShowTech,mouseover:e.dragChangeThree,mouseout:e.dragHideThree}},[e.dragShowThree?o("img",{attrs:{loading:"lazy",src:e.techShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.techShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("Applications")])]),e._v(" "),e.techShow?o("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[e._m(1)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hight_tg"},[n("li",[e._v("\n                    Below you can learn about how PCBONLINE produces your\n                    multilayer PCB in our standard process. The steps seems\n                    easy, but in-fact not many PCB manufacturers have\n                    quality control over the entire whole process like\n                    PCBONLINE does which makes PCBONLINE the best complex\n                    PCB supplier available.\n                ")]),e._v(" "),n("li",[n("p",[e._v("Step 1. Cut lamination")]),e._v(" "),n("p",[e._v("\n                        We will prepare each dielectric layer for the\n                        adhesive application process using polyimide or\n                        flexible materials respectively.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 2. Inner Layer Imaging")]),e._v(" "),n("p",[e._v("\n                        In this step, we place the required circuit layout\n                        and design onto the resistive film layers for\n                        manufacturing of the inner layer.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 3. Lamination")]),e._v(" "),n("p",[e._v("\n                        We then place copper layers and dielectric materials\n                        together after being positioned accurately and\n                        laminate them together into a single sheet known as\n                        a stack-up.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 4. Drill")]),e._v(" "),n("p",[e._v("\n                        We will then drill through the stack-up of flexible\n                        and rigid materials as needed.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 5. Electroless copper deposition")]),e._v(" "),n("p",[e._v("\n                        We then carry the panels that have your PCBs through\n                        a series of chemical and rinsing baths, and then\n                        plate the walls of drilled holes with\n                        micro-particles of palladium before deposit them\n                        with copper.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 6. Panel Plating")]),e._v(" "),n("p",[e._v("\n                        At last we deposit the copper onto the surface of\n                        the circuit board, and inside the plated\n                        through-holes.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 7. Outer Layer Imaging")]),e._v(" "),n("p",[e._v("\n                        We then use a dry film to image the required traces\n                        onto the PCB and then wash away the areas that don't\n                        need it.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 8. Pattern Plating")]),e._v(" "),n("p",[e._v("\n                        We then deposit copper onto the board one more time\n                        to meet our clients’ copper thickness requirements.\n                        Then the board is plated with tin as a protective\n                        layer during etching in the next stage.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 9. Etching")]),e._v(" "),n("p",[e._v("\n                        The dry film is washed away using chemicals, and\n                        copper is etched away etched away where it is not\n                        needed. Then we remove the protective tin layer from\n                        the circuit board to leave exposed copper.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 10. Solder Mask Applying")]),e._v(" "),n("p",[e._v("\n                        In this step, the exposed copper of the PCB is\n                        coated using soldermask which is usually green and\n                        protects the PCB from short circuits and damage from\n                        the environment.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 11. Silkscreen Printing")]),e._v(" "),n("p",[e._v("\n                        We then print the silkscreen legend, which is a\n                        layer of ink on the PCB to identify the components,\n                        test points, marks, and so on.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 12. Surface Finish Treatment")]),e._v(" "),n("p",[e._v("\n                        The PCB is then coated with the required surface\n                        finishes to ensure solderability of components and\n                        to protect the copper circuitry from oxidation. At\n                        PCBONLINE, we have many types of surface finishes\n                        that are readily available: HASL, lead-free HASL,\n                        ENIG, OSP, immersion tin, immersion silver, hard\n                        gold plating, peelable mask, and carbon ink.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 13. Final Shaping")]),e._v(" "),n("p",[e._v("\n                        We then cut the circuit board to its required size\n                        and de-panelize each PCB with either V-cut or\n                        routing.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 14. Tests")]),e._v(" "),n("p",[e._v("\n                        Finally, all our PCBs go through a series of tests,\n                        including flying probe tests, the surface\n                        inspections, the dimension measurements, and the\n                        reliability tests. You can refer to our quality\n                        control for more information.\n                    ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hight_tg"},[n("li",[e._v("\n                    You can use multilayer PCBs in a variety of industries.\n                    Applications where multilayer PCBs are widely used\n                    include the following:\n                ")]),e._v(" "),n("li",[n("p",[e._v("1. Computer Electronics:")]),e._v(" "),n("p",[e._v("\n                        From servers to motherboards, multilayer PCBs are\n                        used in almost everything due to their high\n                        functionality and space saving benefits.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("2. Telecommunication:")]),e._v(" "),n("p",[e._v("\n                        Devices in telecom often take advantage of\n                        multilayer PCBs such as mobile phones, satellites\n                        and GPS applications, due to all of their benefits\n                        and their ability to properly manage signal\n                        transmissions.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("3. Industrial:")]),e._v(" "),n("p",[e._v("\n                        Multilayer PCBs are also popular in various\n                        industrial applications that run machinery. The most\n                        important industrial use for these designs is in\n                        controls machinery.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("4. Medical Equipment:")]),e._v(" "),n("p",[e._v("\n                        In the health industry, electronics are an essential\n                        part of diagnosis through treatment. Multilayer PCBs\n                        can be used in medical testing devices such as CAT\n                        scan equipment, heart monitors, and modern X-ray\n                        devices.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("5. Defense and Military:")]),e._v(" "),n("p",[e._v("\n                        Multilayer PCBs feature high functionality,\n                        durability, as well as being lightweight. Thus, they\n                        are desirable in military applications. Due to the\n                        increased movement of defense industry towards\n                        highly robust engineering designs, the need for\n                        multilayer PCBs is high due to their small size and\n                        high reliability.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("6. Automotive:")]),e._v(" "),n("p",[e._v("\n                        Multilayer PCBs are also fit for the internal\n                        environments of automobile. They are used to\n                        manufacture automotive devices such as headlight\n                        switches, engine sensors, GPS's, and on-board\n                        computers.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("7. Aerospace:")]),e._v(" "),n("p",[e._v("\n                        From ground computers to the cockpit, multilayer\n                        PCBs are always in consideration for their design\n                        manufacturing.\n                    ")])])])}],!1,null,null,null);t.default=component.exports},242:function(e,t,n){},247:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABAklEQVQ4T5XTPUrDQRAF8N8kUQmI4A3E2kawVERQGysvEBCtBAtBj2AliIVgq2JpHTBBvIcWFpJaGw1CyEpC1L8x5mO63Zk3b97O20gVT3IOY9WNPpGqNiTHkSpSp+7am73Y9JrFpXuTGk6wI4ksoFX3jK1Yd9c6pKpFySVmv5q0AB8Yz3Rt4gx1HCCfyTUiVc1LrjDXTwMehVK0qcsmFBxJ9oVcFzAJ56YdxoL3NuArUsUyLjDTvgs1bMea228N3WOksikFpygq2o0lL9maXwwDNHRIuwceheGPBmqih4aRXmnoPYQHeaX/N51T1+y16R/zDe2lH7eO2YuVwW4d6T98AnETbV6YxjpXAAAAAElFTkSuQmCC"},253:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABM0lEQVQ4T5VTvUvDcBB9Lw2RgIiCH6tKBxtc3AXn4tSIa0F0EjoI9k/oVBCHgquKY5WCODj4V0gd6mBB6pAoKoilaH8nqdr+mkpib7sv3r27d0TIkumnMdNu7xOwzZa1fX0x/qyXUHcWMv4KKYcAZoO4AI0EZbN6OnP5W9dpSKZlxLK9ggJ3CBghUAFw8PoxlX845zudNW9JBMcAFsPj9fuskcwy5fotQKxekopkSUQ1BdglkNByn0y5XgD5Y7ynwY2b8uRVEHAy3rIijgjMdyu6DeRJs23m6pWJF30UZ90bFcU9CLYAYYBwZwD56tl0OYpDyvVXASn2rTWa9Hd2SAQUe6Q7HN5y9cpcLIdhtzR4B6GUKPj7Dv+/NG4BldW09FhQkHgtRakVYMOgGlSr3hT3D1+h0JkWcfmeYwAAAABJRU5ErkJggg=="},257:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABQ0lEQVQ4T32SPUvDUBSGn5PUSkEEEXUVZxfB0Q+EqIObi4MgiE7FooL9CboIfmDRVcVFEMdCmoj/w8VBHLSITopQc6RpU27SkLudc+573497hMTRKv3kOAEKFCjKNJ/mFTELrTELXAKj7f4rwobM40b3QoBW6SXHPsougpUkRbhggLJM8i3qMYFyDYwn5cVq4QmbNdEav0DeGAZABYsfAvYA25g1mgA1Gi/AuizwEEr1mEK5AsY6HgzADT2UZI6vWBCP9NHgCNhEkSbDMxZlcbjL8qAeSyiHsVgzTbeHoj4H5DmWGeqZDC7D2OxEputYlMThNg2kPisEnAFD8ZSEe4SiOLyFKfmMoJyjLKelFPU+ULbDQjgFBmO7pC6raYMUaeFDrV1KoU6sRUdqfFsNc21AVxhd/6Ct+Coh4I8tWeTdZPsH5qlsNeLWS5sAAAAASUVORK5CYII="}}]);