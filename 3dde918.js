(window.webpackJsonp=window.webpackJsonp||[]).push([[138,56,57],{2336:function(e,t,_){"use strict";_.r(t);var l=_(255),r=_(254),n=(_(251),{components:{TechTable:l.default,TechClause:r.default},data:function(){return{processShow:!0,gerberShow:!0,techShow:!0,dragShowOne:!1,dragShowTwo:!1,dragShowThree:!1}},props:{flexible:{type:Object,default:function(){}}},methods:{isShowProgerss:function(){this.processShow=!this.processShow,this.gerberShow=!1,this.techShow=!1},isShowGreber:function(){this.gerberShow=!this.gerberShow,this.processShow=!1,this.techShow=!1},isShowTech:function(){this.techShow=!this.techShow,this.processShow=!1,this.gerberShow=!1},dragChange:function(){this.dragShowOne=!0},dragHide:function(){this.dragShowOne=!1},dragChangeTwo:function(){this.dragShowTwo=!0},dragHideTwo:function(){this.dragShowTwo=!1},dragChangeThree:function(){this.dragShowThree=!0},dragHideThree:function(){this.dragShowThree=!1}}}),o=_(6),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"m_tech_specs"},[l("div",{staticClass:"m_tech_specs_inner"},[l("h2",[e._v(e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_title))]),e._v(" "),l("div",{staticClass:"m_process",on:{click:e.isShowProgerss,mouseover:e.dragChange,mouseout:e.dragHide}},[e.dragShowOne?l("img",{attrs:{loading:"lazy",src:e.processShow?_(256):_(266),alt:"icon"}}):l("img",{attrs:{loading:"lazy",src:e.processShow?_(256):_(265),alt:"icon"}}),e._v(" "),l("p",[e._v("\n                "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_materials)+"\n            ")])]),e._v(" "),e.processShow?l("div",{staticClass:"m_show_word"},[l("ul",[l("li",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_materials_word_one)+"\n                ")]),e._v(" "),l("li",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_materials_word_two)+"\n                ")]),e._v(" "),l("li",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_materials_word_three)+"\n                ")]),e._v(" "),l("li",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_materials_word_four)+"\n                ")])])]):e._e(),e._v(" "),l("div",{staticClass:"m_gerber",on:{click:e.isShowGreber,mouseover:e.dragChangeTwo,mouseout:e.dragHideTwo}},[e.dragShowTwo?l("img",{attrs:{loading:"lazy",src:e.gerberShow?_(256):_(266),alt:"icon"}}):l("img",{attrs:{loading:"lazy",src:e.gerberShow?_(256):_(265),alt:"icon"}}),e._v(" "),l("p",[e._v("\n                "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_gerber_title)+"\n            ")])]),e._v(" "),e.gerberShow?l("div",{staticClass:"m_show_word"},[l("TechTable",{attrs:{flexible:e.flexible}})],1):e._e(),e._v(" "),l("div",{staticClass:"m_tech",on:{click:e.isShowTech,mouseover:e.dragChangeThree,mouseout:e.dragHideThree}},[e.dragShowThree?l("img",{attrs:{loading:"lazy",src:e.techShow?_(256):_(266),alt:"icon"}}):l("img",{attrs:{loading:"lazy",src:e.techShow?_(256):_(265),alt:"icon"}}),e._v(" "),l("p",[e._v("\n                "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_title)+"\n            ")])]),e._v(" "),e.techShow?l("div",{staticClass:"m_show_word"},[l("TechClause",{attrs:{flexible:e.flexible}})],1):e._e()])])}),[],!1,null,null,null);t.default=component.exports},251:function(e,t,_){},254:function(e,t,_){"use strict";_.r(t);var l={props:{flexible:{type:Object,default:function(){}}}},r=(_(272),_(6)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("div",{staticClass:"terms"},[_("p",{staticClass:"intro_in"},[e._v("\n            "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_title)+"\n        ")]),e._v(" "),_("ul",{staticClass:"manufacturing"},[_("li",[_("p",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_flexural)+"\n                ")]),e._v(" "),_("p",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_flexural_one)+"\n                ")])]),e._v(" "),_("li",[_("p",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft)+"\n                ")]),e._v(" "),_("p",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_one)+"\n                ")]),e._v(" "),_("p",[e._v("\n                    "+e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_two)+"\n                    "),_("a",{attrs:{href:"/pdf/flexible-pcb-terms.pdf",target:"_blank"}},[e._v(e._s(e.flexible.fcb_fab_flexible_manufacturing_tech_terms_word_soft_three))])])])])])])}),[],!1,null,"75bdb3c5",null);t.default=component.exports},255:function(e,t,_){"use strict";_.r(t);_(271);var l=_(6),component=Object(l.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"tech_of_table"},[_("p",[e._v("\n        PCBONLINE is able to meet the following technical capabilities for\n        all of our flexible designs:\n    ")]),e._v(" "),_("div",{staticClass:"table_cs_show"},[_("div",{staticClass:"table_show",attrs:{id:"head_table"}},[_("div",[e._v("Parameter")]),e._v(" "),_("div",[e._v("Fabrication Process")]),e._v(" "),_("div",[e._v("Data")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Layer Count")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("1-10")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Final Board Thickness")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("0.05-0.6mm")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Aspect Ratio")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("3:1")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Copper Thickness")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("1/3~3oz")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Impedance Control")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("50±5Ω,90±9Ω,100±10Ω")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Line/Space")]),e._v(" "),_("div",[e._v("Inner Layer "),_("br"),e._v("External Layer")]),e._v(" "),_("div",[e._v("\n                1.6/1.6mil\n                "),_("br"),e._v("1.6/1.6mil\n            ")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Min Drill Bit Size")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("6mil")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Hole Size Tolerance")]),e._v(" "),_("div",[e._v("PTH "),_("br"),e._v("NPTH")]),e._v(" "),_("div",[e._v("\n                ±3mil\n                "),_("br"),e._v("±2mil\n            ")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Hole Position Tolerance")]),e._v(" "),_("div"),e._v(" "),_("div",[e._v("±3mil")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Coverlayer")]),e._v(" "),_("div",[e._v("Line to PAD Registration")]),e._v(" "),_("div",[e._v("6mil±2mil")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Profile Tolerance")]),e._v(" "),_("div",[e._v("\n                Puching\n                "),_("br"),e._v("Laser Cutting\n            ")]),e._v(" "),_("div",[e._v("\n                ±3mil\n                "),_("br"),e._v("±2mil\n            ")])]),e._v(" "),_("div",{staticClass:"table_show"},[_("div",[e._v("Surface Finish")]),e._v(" "),_("div",[e._v("\n                ENIG\n                "),_("br"),e._v("OSP "),_("br"),e._v("Immersion Tin "),_("br"),e._v("Immersion Silver\n                "),_("br"),e._v("Hard Gold Plating\n            ")]),e._v(" "),_("div",[e._v('\n                Au 1-3u",Ni 120-200u"\n                '),_("br"),e._v("0.25-0.5um "),_("br"),e._v("0.5-1um "),_("br"),e._v("0.05-0.12um "),_("br"),e._v('Au\n                5-40u",Ni 120-200u"\n            ')])])])])}],!1,null,"1eacb96a",null);t.default=component.exports},256:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABAklEQVQ4T5XTPUrDQRAF8N8kUQmI4A3E2kawVERQGysvEBCtBAtBj2AliIVgq2JpHTBBvIcWFpJaGw1CyEpC1L8x5mO63Zk3b97O20gVT3IOY9WNPpGqNiTHkSpSp+7am73Y9JrFpXuTGk6wI4ksoFX3jK1Yd9c6pKpFySVmv5q0AB8Yz3Rt4gx1HCCfyTUiVc1LrjDXTwMehVK0qcsmFBxJ9oVcFzAJ56YdxoL3NuArUsUyLjDTvgs1bMea228N3WOksikFpygq2o0lL9maXwwDNHRIuwceheGPBmqih4aRXmnoPYQHeaX/N51T1+y16R/zDe2lH7eO2YuVwW4d6T98AnETbV6YxjpXAAAAAElFTkSuQmCC"},262:function(e,t,_){},263:function(e,t,_){},265:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABM0lEQVQ4T5VTvUvDcBB9Lw2RgIiCH6tKBxtc3AXn4tSIa0F0EjoI9k/oVBCHgquKY5WCODj4V0gd6mBB6pAoKoilaH8nqdr+mkpib7sv3r27d0TIkumnMdNu7xOwzZa1fX0x/qyXUHcWMv4KKYcAZoO4AI0EZbN6OnP5W9dpSKZlxLK9ggJ3CBghUAFw8PoxlX845zudNW9JBMcAFsPj9fuskcwy5fotQKxekopkSUQ1BdglkNByn0y5XgD5Y7ynwY2b8uRVEHAy3rIijgjMdyu6DeRJs23m6pWJF30UZ90bFcU9CLYAYYBwZwD56tl0OYpDyvVXASn2rTWa9Hd2SAQUe6Q7HN5y9cpcLIdhtzR4B6GUKPj7Dv+/NG4BldW09FhQkHgtRakVYMOgGlSr3hT3D1+h0JkWcfmeYwAAAABJRU5ErkJggg=="},266:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABQ0lEQVQ4T32SPUvDUBSGn5PUSkEEEXUVZxfB0Q+EqIObi4MgiE7FooL9CboIfmDRVcVFEMdCmoj/w8VBHLSITopQc6RpU27SkLudc+573497hMTRKv3kOAEKFCjKNJ/mFTELrTELXAKj7f4rwobM40b3QoBW6SXHPsougpUkRbhggLJM8i3qMYFyDYwn5cVq4QmbNdEav0DeGAZABYsfAvYA25g1mgA1Gi/AuizwEEr1mEK5AsY6HgzADT2UZI6vWBCP9NHgCNhEkSbDMxZlcbjL8qAeSyiHsVgzTbeHoj4H5DmWGeqZDC7D2OxEputYlMThNg2kPisEnAFD8ZSEe4SiOLyFKfmMoJyjLKelFPU+ULbDQjgFBmO7pC6raYMUaeFDrV1KoU6sRUdqfFsNc21AVxhd/6Ct+Coh4I8tWeTdZPsH5qlsNeLWS5sAAAAASUVORK5CYII="},271:function(e,t,_){"use strict";_(262)},272:function(e,t,_){"use strict";_(263)}}]);