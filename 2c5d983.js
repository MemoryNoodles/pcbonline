(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1969:function(e,n,t){"use strict";t.r(n);t(242);var o={data:function(){return{processShow:!0,gerberShow:!0,techShow:!0,specificationsShow:!0,dragShowOne:!1,dragShowTwo:!1,dragShowThree:!1,dragShowFour:!1}},props:{flexible:{type:Object,default:function(){}}},methods:{isShowProgerss:function(){this.processShow=!this.processShow,this.gerberShow=!1,this.techShow=!1,this.specificationsShow=!1},isShowGreber:function(){this.gerberShow=!this.gerberShow,this.processShow=!1,this.techShow=!1,this.specificationsShow=!1},isShowTech:function(){this.techShow=!this.techShow,this.processShow=!1,this.gerberShow=!1,this.specificationsShow=!1},isShowSpecifications:function(){this.specificationsShow=!this.specificationsShow,this.techShow=!1,this.processShow=!1,this.gerberShow=!1},dragChange:function(){this.dragShowOne=!0},dragHide:function(){this.dragShowOne=!1},dragChangeTwo:function(){this.dragShowTwo=!0},dragHideTwo:function(){this.dragShowTwo=!1},dragChangeThree:function(){this.dragShowThree=!0},dragHideThree:function(){this.dragShowThree=!1},dragChangeFour:function(){this.dragShowFour=!0},dragHideFour:function(){this.dragShowFour=!1}}},r=t(7),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"m_tech_specs"},[o("div",{staticClass:"m_tech_specs_inner"},[o("h2",[e._v("About PCB Materials")]),e._v(" "),o("div",{staticClass:"m_process",on:{click:e.isShowProgerss,mouseover:e.dragChange,mouseout:e.dragHide}},[e.dragShowOne?o("img",{attrs:{loading:"lazy",src:e.processShow?t(247):t(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.processShow?t(247):t(253),alt:"icon"}}),e._v(" "),o("p",[e._v("About the copper clad laminates")])]),e._v(" "),e.processShow?o("div",{staticClass:"m_show_word"},[e._m(0)]):e._e(),e._v(" "),o("div",{staticClass:"m_gerber",on:{click:e.isShowGreber,mouseover:e.dragChangeTwo,mouseout:e.dragHideTwo}},[e.dragShowTwo?o("img",{attrs:{loading:"lazy",src:e.gerberShow?t(247):t(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.gerberShow?t(247):t(253),alt:"icon"}}),e._v(" "),o("p",[e._v("PCB Materials for Rigid CCL")])]),e._v(" "),e.gerberShow?o("div",{staticClass:"m_show_word"},[o("p",[e._v("Rigid CCL is made of copper foil and PP.")]),e._v(" "),o("ul",{staticClass:"hight_tg"},[e._m(1),e._v(" "),e._m(2),e._v(" "),o("li",[o("MaterialTable")],1)])]):e._e(),e._v(" "),o("div",{staticClass:"m_tech",on:{click:e.isShowTech,mouseover:e.dragChangeThree,mouseout:e.dragHideThree}},[e.dragShowThree?o("img",{attrs:{loading:"lazy",src:e.techShow?t(247):t(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.techShow?t(247):t(253),alt:"icon"}}),e._v(" "),o("p",[e._v("PCB Materials to reinforce PCB")])]),e._v(" "),e.techShow?o("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[o("p",[e._v("\n                The PCB materials below are used for a dielectric layer to\n                reinforce the PCB.\n            ")]),e._v(" "),o("ul",{staticClass:"hight_tg"},[o("li",[e._v("\n                    1. Phenolic material：it is used for\n                    a dielectric layer that uses phenolic resin as adhesive\n                    and wood pulp fiber paper as reinforcing material.\n                    Its specifications include FR-1, FR-2, XPC, and XXX PC.\n                    It can be punched, and it has the advantages of low\n                    price and small specific gravity.\n                ")]),e._v(" "),o("li",[e._v("\n                    2. Epoxy material: it is used for a dielectric layer\n                    that uses epoxy resin as adhesive and glass fiber cloth\n                    as reinforcing material. Its specifications\n                    include "),o("nuxt-link",{staticClass:"words-link",attrs:{to:"/PCB-FAB/PCB-prototype/",alt:"fr-4"}},[e._v("FR-4")]),e._v("\n                    and FR-5. This kind of PCB material has high dimensional\n                    stability and impact/moisture resistance, and it\n                    is used most.\n                ")],1),e._v(" "),o("li",[e._v('\n                    3.Composite epoxy material: it is used for a dielectric\n                    layer that uses epoxy resin as adhesive, wood pulp fiber\n                    paper as the reinforcing material’s inner core, and\n                    glass fiber cloth" as reinforcing material’s surface.\n                    Its specifications include CEM-1 and CEM-3. Its\n                    performance is between phenolic material and epoxy\n                    material.\n                ')]),e._v(" "),o("li",[e._v("\n                    4. Metal material: It consists of a metal layer,\n                    dielectric layer, and copper foil. Its specifications\n                    include\n                    "),o("nuxt-link",{staticClass:"words-link",attrs:{to:"/PCB-FAB/Aluminum-PCB/",alt:"aluminum base"}},[e._v("aluminum base")]),e._v("\n                    and copper base. It features good heat dissipation.\n                ")],1),e._v(" "),o("li",[e._v("\n                    5."),o("nuxt-link",{staticClass:"words-link",attrs:{to:"/PCB-FAB/Aluminum-Nitride/",alt:"ceramic material"}},[e._v("Ceramic material:")]),e._v("\n                    this kind of PCB material includes AL2O3, AIN, and SiC.\n                ")],1),e._v(" "),o("li",[e._v("\n                    6. Other material: other material is used for a\n                    dielectric layer that uses other special resin as\n                    adhesive and glass fiber cloth as reinforcing material.\n                    Its specifications include PI (Polyimide), PTFE\n                    (Teflon), and BT. It has the advantages of\n                    "),o("nuxt-link",{staticClass:"words-link",attrs:{to:"/PCB-FAB/High-TG-PCBs/",alt:"high tg"}},[e._v("high TG")]),e._v(", low water absorption,\n                    "),o("nuxt-link",{staticClass:"words-link",attrs:{to:"/PCB-FAB/High-Frequency-PCBs/",alt:"low dielectric constant"}},[e._v("low dielectric constant")]),e._v(", and low dielectric loss.\n                ")],1),e._v(" "),o("li",[e._v("\n                    According to rigid CCL’s flame-retardant\n                    characteristics, PCB materials can be divided into\n                    UL94-V0 and UL94-HB.\n                ")]),e._v(" "),o("li",[e._v("\n                    According to rigid CCL’s performance, PCB materials and\n                    boards themselves can be divided into the\n                    high-frequency, high-TG, and low-CTE.\n                ")])])]):e._e(),e._v(" "),o("div",{staticClass:"m_tech",on:{click:e.isShowSpecifications,mouseover:e.dragChangeFour,mouseout:e.dragHideFour}},[e.dragShowFour?o("img",{attrs:{loading:"lazy",src:e.specificationsShow?t(247):t(257),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:e.specificationsShow?t(247):t(253),alt:"icon"}}),e._v(" "),o("p",[e._v("PCB Materials for Flexible CCL")])]),e._v(" "),e.specificationsShow?o("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[o("p",[e._v("\n                Flexible CCL is made of copper foil, an insulating film, and\n                inter-layer adhesive.\n            ")]),e._v(" "),e._m(3)]):e._e()])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"hight_tg"},[t("li",[e._v("\n                    PCBs’ performance, quality, manufacturing cost, and\n                    manufacturing level all depend on CCL (copper clad\n                    laminates). CCL can be divided into a rigid type and\n                    flexible type according to the used PCB materials. Rigid\n                    CCL is made of reinforced material, impregnated with\n                    resin adhesive, dried, cut, and laminated, then covered\n                    with copper foil and steel plate, and formed in a hot\n                    pressing machine at high temperature and high pressure.\n                    While flexible CCL is composed of copper foil, an\n                    insulating film, and an interlayer adhesive, which are\n                    compounded and processed by hot pressing. Below we use\n                    CCL to let you understand PCB materials clearly.\n                ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",[t("p",[e._v("\n                        Copper foil is an indispensable raw material for CCL\n                        production. It is divided into RA (rolled annealed)\n                        copper and ED (electrodeposited) copper.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • RA copper foil is made by rolling a copper plate\n                        repeatedly. It is mainly used for FPC CCL.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • ED copper foil is a primary product produced by a\n                        special electrolytic machine and then processed by\n                        the finishing process. According to the thickness,\n                        its specifications can be divided into 9um, 12um,\n                        18um, 35um, and 70um.v\n                    ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",[t("p",[e._v("\n                        PP means that fibers are woven, and resin (epoxy\n                        resin or phenolic resin) is used to bond them\n                        together in the manufacturing process. To decide\n                        which type of PP meeting for your requirements, you\n                        can consider its quality characteristics of resin\n                        content, resin flow, gel time, and volatile content.\n                        Its different types are:\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Woven glass fabric: it is made of glass fiber, and\n                        its composition is Aluminum borosilicate, which has\n                        high insulation performance. It has the advantages\n                        of a large breaking strength coefficient, good\n                        dimensional stability, not easy deformation, and\n                        uniform weight and thickness.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Glass fabric paper: also known as glass fiber\n                        non-woven fabric, it is one of the main raw\n                        materials of CEM-3. It uses E-type glass fiber with\n                        a diameter of 5-10um chopped by a paper-making\n                        process and dispersed in an aqueous solution. After\n                        eliminating lumps, it is made into a uniform paper\n                        product on a short mesh paper machine. This kind of\n                        PCB material’s price is much lower than that of\n                        glass cloth.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Impregnated fiber paper is a material composed of\n                        pulp components\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Resin: it includes Phenolic resin and epoxy resin.\n                    ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"hight_tg"},[t("li",[t("p",[e._v("\n                        Flexible CCL’s insulating film can be divided into\n                        two types, namely the polyester film and polyimide\n                        film.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Polyester film’s thickness is 25um-125um. It has\n                        good dielectric performance, good chemical\n                        resistance, and low hygroscopicity, but it’s not\n                        good as polyimide film in heat resistance and\n                        dimensional stability.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Polymide film’s thickness is 7.5um-75um. It has\n                        good dimensional stability and thermal stability and\n                        can be used continuously at working conditions under\n                        200°C.\n                    ")])]),e._v(" "),t("li",[t("p",[e._v("\n                        Flexible CCL’s inter-layer adhesive is used for the\n                        adhesion between the copper foil and the insulating\n                        film. Its materials include epoxy resin and acrylic\n                        resin.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Epoxy resin has high heat resistance, good\n                        dielectric performance, and good chemical\n                        resistance.\n                    ")]),e._v(" "),t("p",[e._v("\n                        • Acrylic resin has better processability and\n                        excellent flexibility.\n                    ")])]),e._v(" "),t("li",[e._v("\n                    According to used PCB materials of the boards, you can\n                    custom buy rigid PCB, rigid-flex PCB, flexible PCB,\n                    high-frequency PCB, high-TG PCB, halogen-free PCB,\n                    lead-free PCB, aluminum PCB, thick-copper PCB, ceramic\n                    PCB, carbon ink PCB, carbon nanotube PCB from PCBONLINE.\n                    If you are not very sure about choosing which materials\n                    for your PCBs, you can contact us online or via email at\n                    info@pcbonline.com.\n                ")])])}],!1,null,null,null);n.default=component.exports},242:function(e,n,t){},247:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABAklEQVQ4T5XTPUrDQRAF8N8kUQmI4A3E2kawVERQGysvEBCtBAtBj2AliIVgq2JpHTBBvIcWFpJaGw1CyEpC1L8x5mO63Zk3b97O20gVT3IOY9WNPpGqNiTHkSpSp+7am73Y9JrFpXuTGk6wI4ksoFX3jK1Yd9c6pKpFySVmv5q0AB8Yz3Rt4gx1HCCfyTUiVc1LrjDXTwMehVK0qcsmFBxJ9oVcFzAJ56YdxoL3NuArUsUyLjDTvgs1bMea228N3WOksikFpygq2o0lL9maXwwDNHRIuwceheGPBmqih4aRXmnoPYQHeaX/N51T1+y16R/zDe2lH7eO2YuVwW4d6T98AnETbV6YxjpXAAAAAElFTkSuQmCC"},253:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABM0lEQVQ4T5VTvUvDcBB9Lw2RgIiCH6tKBxtc3AXn4tSIa0F0EjoI9k/oVBCHgquKY5WCODj4V0gd6mBB6pAoKoilaH8nqdr+mkpib7sv3r27d0TIkumnMdNu7xOwzZa1fX0x/qyXUHcWMv4KKYcAZoO4AI0EZbN6OnP5W9dpSKZlxLK9ggJ3CBghUAFw8PoxlX845zudNW9JBMcAFsPj9fuskcwy5fotQKxekopkSUQ1BdglkNByn0y5XgD5Y7ynwY2b8uRVEHAy3rIijgjMdyu6DeRJs23m6pWJF30UZ90bFcU9CLYAYYBwZwD56tl0OYpDyvVXASn2rTWa9Hd2SAQUe6Q7HN5y9cpcLIdhtzR4B6GUKPj7Dv+/NG4BldW09FhQkHgtRakVYMOgGlSr3hT3D1+h0JkWcfmeYwAAAABJRU5ErkJggg=="},257:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABQ0lEQVQ4T32SPUvDUBSGn5PUSkEEEXUVZxfB0Q+EqIObi4MgiE7FooL9CboIfmDRVcVFEMdCmoj/w8VBHLSITopQc6RpU27SkLudc+573497hMTRKv3kOAEKFCjKNJ/mFTELrTELXAKj7f4rwobM40b3QoBW6SXHPsougpUkRbhggLJM8i3qMYFyDYwn5cVq4QmbNdEav0DeGAZABYsfAvYA25g1mgA1Gi/AuizwEEr1mEK5AsY6HgzADT2UZI6vWBCP9NHgCNhEkSbDMxZlcbjL8qAeSyiHsVgzTbeHoj4H5DmWGeqZDC7D2OxEputYlMThNg2kPisEnAFD8ZSEe4SiOLyFKfmMoJyjLKelFPU+ULbDQjgFBmO7pC6raYMUaeFDrV1KoU6sRUdqfFsNc21AVxhd/6Ct+Coh4I8tWeTdZPsH5qlsNeLWS5sAAAAASUVORK5CYII="}}]);