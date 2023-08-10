(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{2312:function(e,t,n){"use strict";n.r(t);n(242);var o={data:function(){return{processShow:!0,gerberShow:!1,techShow:!1,specificationsShow:!1,gerberShowSix:!1,dragShowOne:!1,dragShowTwo:!1,dragShowThree:!1,dragShowFour:!1}},props:{flexible:{type:Object,default:function(){}}},methods:{isShowProgerss:function(){this.processShow=!this.processShow,this.gerberShow=!1,this.techShow=!1,this.specificationsShow=!1,this.gerberShowSix=!1},isShowGreber:function(){this.gerberShow=!this.gerberShow,this.processShow=!1,this.techShow=!1,this.specificationsShow=!1,this.gerberShowSix=!1},isShowTech:function(){this.techShow=!this.techShow,this.processShow=!1,this.gerberShow=!1,this.specificationsShow=!1,this.gerberShowSix=!1},isShowSpecifications:function(){this.specificationsShow=!this.specificationsShow,this.techShow=!1,this.processShow=!1,this.gerberShow=!1,this.gerberShowSix=!1},isShowSix:function(){this.gerberShowSix=!this.gerberShowSix,this.techShow=!1,this.processShow=!1,this.gerberShow=!1,this.specificationsShow=!1},dragChange:function(){this.dragShowOne=!0},dragHide:function(){this.dragShowOne=!1},dragChangeTwo:function(){this.dragShowTwo=!0},dragHideTwo:function(){this.dragShowTwo=!1},dragChangeThree:function(){this.dragShowThree=!0},dragHideThree:function(){this.dragShowThree=!1},dragChangeFour:function(){this.dragShowFour=!0},dragHideFour:function(){this.dragShowFour=!1}}},r=n(7),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"m_tech_specs"},[o("div",{staticClass:"m_tech_specs_inner"},[o("h2",[e._v("Lead-Free PCB - Manufacturing and Tech Specs")]),e._v(" "),o("div",{staticClass:"m_process",on:{click:e.isShowProgerss,mouseover:e.dragChange,mouseout:e.dragHide}},[e.dragShowOne?o("img",{attrs:{loading:"lazy",src:e.processShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.processShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("Lead-Free PCB Materials and Process")])]),e._v(" "),e.processShow?o("div",{staticClass:"m_show_word"},[o("ul",{staticClass:"hight_tg"},[o("li",[e._v("Selection of lead-free base materials")]),e._v(" "),o("li",[e._v("\n                    Choosing the correct base material for lead-free PCB is\n                    critical as the solder joint of HASL lead-free is 34°C\n                    higher than that of with lead. One should consider the\n                    heat resistance, CAF resistance, and machinability while\n                    choosing.\n                ")]),e._v(" "),o("li",[e._v("\n                    It is most important to use the base material with high\n                    thermal decomposition temperature resin as the heat\n                    resistance of CCL mainly depends on it, and only by\n                    increasing the thermal decomposition temperature of\n                    resin in CCL can the thermal reliability of lead-free\n                    soldering PCB be guaranteed. In addition, IPC-4101c\n                    stipulates that the Td value of lead-free base material\n                    should be greater than or equal to 325°C.\n                ")]),e._v(" "),o("li",[e._v("\n                    To choose the correct base materials, PCBONLINE\n                    engineers carry out experiments and find that only use\n                    only using base material with high Tg and Z-CTE is not\n                    enough, which increases the cost and can't improve the\n                    heat resistance either. Under the same Tg and Z-CTE\n                    conditions, after the T260 test, the delamination time\n                    of the base material with Td at 350°C lags behind the\n                    base material with Td at 320°C by 10s. Therefore, we\n                    suggest that it is better to choose the lead-free base\n                    material with Td value greater than 350°C in actual\n                    production.\n                ")]),e._v(" "),o("li",[e._v("\n                    Lead-free base material have different machinability\n                    with lead base material. The following is the commonly\n                    used material comparison table used in PCBONLINE.\n                ")]),e._v(" "),o("li",[o("LeadFreeTable")],1)])]):e._e(),e._v(" "),o("div",{staticClass:"m_gerber",on:{click:e.isShowGreber,mouseover:e.dragChangeTwo,mouseout:e.dragHideTwo}},[e.dragShowTwo?o("img",{attrs:{loading:"lazy",src:e.gerberShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.gerberShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("Manufacturing Process")])]),e._v(" "),e.gerberShow?o("div",{staticClass:"m_show_word"},[e._m(0)]):e._e(),e._v(" "),o("div",{staticClass:"m_tech",on:{click:e.isShowTech,mouseover:e.dragChangeThree,mouseout:e.dragHideThree}},[e.dragShowThree?o("img",{attrs:{loading:"lazy",src:e.techShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.techShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("Lead Free PCB Assembly")])]),e._v(" "),e.techShow?o("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[e._m(1)]):e._e(),e._v(" "),o("div",{staticClass:"m_tech",on:{click:e.isShowSpecifications,mouseover:e.dragChangeFour,mouseout:e.dragHideFour}},[e.dragShowFour?o("img",{attrs:{loading:"lazy",src:e.specificationsShow?n(247):n(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.specificationsShow?n(247):n(253),alt:"icon"}}),e._v(" "),o("p",[e._v("What is the RoHS")])]),e._v(" "),e.specificationsShow?o("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[e._m(2)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hight_tg"},[n("li",[n("p",[e._v("Rigid-flex PCB Layout:")]),e._v(" "),n("p",[e._v("\n                        PCB layout is the important process before\n                        manufacturing. The design is different according to\n                        your need, but three aspects need considering: 1)\n                        spatial efficiency; 2) stackup design; 3) high\n                        performance relationships. If you need us to design\n                        the PCB layout for you, we can make sure that there\n                        is coordination in designing and fabrication\n                        portions.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("PCB Manufacturing:")]),e._v(" "),n("p",[e._v("Step 1. Cut lamination")]),e._v(" "),n("p",[e._v("\n                        The flexible part: we will prepare the adhesive,\n                        polymide, flexible materials respectively.\n                    ")]),e._v(" "),n("p",[e._v("\n                        The rigid part: we will also prepare the rigid\n                        material for the next process.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 2. Process the above four materials")]),e._v(" "),n("p",[e._v("\n                        In this step, we will press fit holes on the\n                        adhesive and polymide respectively, and make the\n                        inner layer out of the flexible and rigid material\n                        respectively.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 3. Laminate into stack-up")]),e._v(" "),n("p",[e._v("\n                        We will place the above processed materials in\n                        appropriate positions accurately and laminate them\n                        into the stack-up. Then the frame of the rigid-flex\n                        board is built.\n                    ")])]),e._v(" "),n("li",[n("p",[e._v("Step 4. Finish the outer layer")]),e._v(" "),n("p",[e._v("\n                        We will finish the outer layer and its following\n                        steps.\n                    ")])]),e._v(" "),n("li"),e._v(" "),n("li",[n("p",[e._v("Key points during manufacturing process")]),e._v(" "),n("p",[e._v("\n                        We will lengthen the curing time in laminating\n                        process. This is because the lead-free base material\n                        have different machinability with lead base\n                        material. The Tg of lead-free base material is\n                        higher, and the curing time is longer. If the curing\n                        is not complete, the secondary curing will occur in\n                        the subsequent PCB production processes, which will\n                        lead to serious expansion and shrinkage of the board\n                        size.\n                    ")]),e._v(" "),n("p",[e._v("\n                        In machining processes, the lead-free base material\n                        are harder and more brittle, we reduce tool rotation\n                        and cutting speed to prevent board splitting.\n                    ")]),e._v(" "),n("p",[e._v("\n                        In plug hole process, we will consider whether the\n                        heat resistance of plug hole ink is reliable,\n                        whether its Tg, CTE and other characteristics are\n                        suitable for lead-free base material, etc.\n                    ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hight_tg"},[n("li",[e._v("\n                    PCBONLINE provides comprehensive lead-free PCB assembly\n                    for your manufacturing. Our team is trained in all\n                    aspects of lead-free soldering, including solder tip\n                    selection, solder paste assessment, wave soldering\n                    assessment, process optimization, design principles,\n                    device assessment, reliability and equipment assessment,\n                    quality inspection and production cost.\n                ")]),e._v(" "),n("li",[e._v("\n                    For the utterly lead-free PCB soldering, PCBONLINE\n                    always uses the lead-free welding materials in\n                    production, such as solder paste for reflow soldering,\n                    tin bars for wave soldering, and tin wire for hand\n                    soldering.\n                ")]),e._v(" "),n("li",[e._v('\n                    For the correct reflow furnace temperature curves, we\n                    will replaces the actual parts with non-functional\n                    "samples".\n                ')]),e._v(" "),n("li",[e._v("\n                    Our well-trained inspectors will make sure the lead-free\n                    PCB assembly meets IPC-610D standards, and we will also\n                    uses our advanced equipment to check if there are any\n                    defect.\n                ")]),e._v(" "),n("li",[e._v("\n                    The process of lead free PCB design and assembly by\n                    PCBONLINE can be summarized as below.\n                ")]),e._v(" "),n("li",[n("p",[e._v("Step 1. Monitoring and inspection of material")]),e._v(" "),n("p",[e._v("Step 2. Expenditures assessment")]),e._v(" "),n("p",[e._v("\n                        Step 3. Application of board stencil and putting\n                        solder\n                    ")]),e._v(" "),n("p",[e._v("\n                        Step 4. Placing the components in an arranged manner\n                        through holes and manual solder\n                    ")]),e._v(" "),n("p",[e._v("\n                        Step 5. Arranging a reflow oven for placing the\n                        board\n                    ")]),e._v(" "),n("p",[e._v("Step 6. Testing and packaging of the board")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hight_tg"},[n("li",[e._v('\n                    RoHS is a mandatory standard established by EU\n                    legislation and officially implemented since July 1,\n                    2006. Its full name is "Restriction of Hazardous\n                    Substances". It is mainly used to standardize materials\n                    and process for electronic and electrical products,\n                    making them more beneficial to human health and\n                    environment. The RoHS standard is to eliminate lead,\n                    mercury, cadmium, hexavalent chromium, polybrominated\n                    biphenyls, and polybrominated diphenyl ethers in\n                    electrical and electronic products. It is important to\n                    stipulate that the content of cadmium cannot exceed\n                    0.01%. And the lead-free PCB is made to follow the RoHS\n                    so that the EU allows it to be used.\n                ')]),e._v(" "),n("li",[e._v("\n                    RoHS targets all electrical and electronic products that\n                    may contain the above six harmful substances in the\n                    production process and raw materials, mainly including:\n                    white appliances, such as refrigerators, washing\n                    machines, microwave ovens, air conditioners, vacuum\n                    cleaners, water heaters, etc.;\n                ")]),e._v(" "),n("li",[e._v("\n                    black appliances, such as audio and video products ,\n                    DVD, CD, TV receiver, IT products, digital products,\n                    communication products, etc .;\n                ")]),e._v(" "),n("li",[e._v("\n                    power tools, electric electronic toys, medical\n                    electrical equipment.\n                ")]),e._v(" "),n("li",[n("p",[e._v("\n                        Industries that need to follow the RoHS according to\n                        the substance include:\n                    ")]),e._v(" "),n("p",[e._v("\n                        Lead (Pb) < 0.1%: solder, glass, PVC stabilizer.\n                    ")]),e._v(" "),n("p",[e._v("\n                        Mercury (Hg) < 0.1%: thermostat, sensor, switch\n                        and relay, bulb.\n                    ")]),e._v(" "),n("p",[e._v("\n                        Cadmium (Cd) < 0.1%: switches, springs,\n                        connectors, housings and PCBs, contacts, batteries.\n                    ")]),e._v(" "),n("p",[e._v("\n                        Hexavalent chromium (Cr 6+) < 0.1%: metal\n                        anti-corrosion coating.\n                    ")]),e._v(" "),n("p",[e._v("\n                        Polybrominated biphenyls (PBBS) < 0.1%: flame\n                        retardant, PCB, connector, plastic housing.\n                    ")]),e._v(" "),n("p",[e._v("\n                        Polybrominated diphenyl ether (PBDE) < 0.1%:\n                        flame retardant, PCB, connector, plastic housing.\n                    ")]),e._v(" "),n("p",[e._v("\n                        To sum up, if you are targeting the EU market and\n                        other regions that post restrictions on the harmful\n                        substances contained in the electronic devices, you\n                        should used lead-free PCB and components for your\n                        products.\n                    ")])])])}],!1,null,null,null);t.default=component.exports},242:function(e,t,n){},247:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABAklEQVQ4T5XTPUrDQRAF8N8kUQmI4A3E2kawVERQGysvEBCtBAtBj2AliIVgq2JpHTBBvIcWFpJaGw1CyEpC1L8x5mO63Zk3b97O20gVT3IOY9WNPpGqNiTHkSpSp+7am73Y9JrFpXuTGk6wI4ksoFX3jK1Yd9c6pKpFySVmv5q0AB8Yz3Rt4gx1HCCfyTUiVc1LrjDXTwMehVK0qcsmFBxJ9oVcFzAJ56YdxoL3NuArUsUyLjDTvgs1bMea228N3WOksikFpygq2o0lL9maXwwDNHRIuwceheGPBmqih4aRXmnoPYQHeaX/N51T1+y16R/zDe2lH7eO2YuVwW4d6T98AnETbV6YxjpXAAAAAElFTkSuQmCC"},253:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABM0lEQVQ4T5VTvUvDcBB9Lw2RgIiCH6tKBxtc3AXn4tSIa0F0EjoI9k/oVBCHgquKY5WCODj4V0gd6mBB6pAoKoilaH8nqdr+mkpib7sv3r27d0TIkumnMdNu7xOwzZa1fX0x/qyXUHcWMv4KKYcAZoO4AI0EZbN6OnP5W9dpSKZlxLK9ggJ3CBghUAFw8PoxlX845zudNW9JBMcAFsPj9fuskcwy5fotQKxekopkSUQ1BdglkNByn0y5XgD5Y7ynwY2b8uRVEHAy3rIijgjMdyu6DeRJs23m6pWJF30UZ90bFcU9CLYAYYBwZwD56tl0OYpDyvVXASn2rTWa9Hd2SAQUe6Q7HN5y9cpcLIdhtzR4B6GUKPj7Dv+/NG4BldW09FhQkHgtRakVYMOgGlSr3hT3D1+h0JkWcfmeYwAAAABJRU5ErkJggg=="},257:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABQ0lEQVQ4T32SPUvDUBSGn5PUSkEEEXUVZxfB0Q+EqIObi4MgiE7FooL9CboIfmDRVcVFEMdCmoj/w8VBHLSITopQc6RpU27SkLudc+573497hMTRKv3kOAEKFCjKNJ/mFTELrTELXAKj7f4rwobM40b3QoBW6SXHPsougpUkRbhggLJM8i3qMYFyDYwn5cVq4QmbNdEav0DeGAZABYsfAvYA25g1mgA1Gi/AuizwEEr1mEK5AsY6HgzADT2UZI6vWBCP9NHgCNhEkSbDMxZlcbjL8qAeSyiHsVgzTbeHoj4H5DmWGeqZDC7D2OxEputYlMThNg2kPisEnAFD8ZSEe4SiOLyFKfmMoJyjLKelFPU+ULbDQjgFBmO7pC6raYMUaeFDrV1KoU6sRUdqfFsNc21AVxhd/6Ct+Coh4I8tWeTdZPsH5qlsNeLWS5sAAAAASUVORK5CYII="}}]);