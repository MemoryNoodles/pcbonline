(window.webpackJsonp=window.webpackJsonp||[]).push([[217,190],{1432:function(t,e,l){},1433:function(t,e,l){"use strict";l(698)},1579:function(t,e,l){"use strict";l.r(e);l(42);var o={data:function(){return{}},props:{datad:{type:Object,default:function(){}}},mounted:function(){},methods:{setThePaddingTop:function(){for(var t=[],e=[],i=0;i<this.datad.datad.cells.length;i++)t.push(document.querySelector('[data-index="'.concat(i,'"]'))),e.push(document.querySelector('[data-index2="'.concat(i,'"]')));for(i=0;i<t.length;i++){var l=getComputedStyle(t[i]).height,o=.5*parseInt(l)+"px";e[i].style.setProperty("padding-top",o),e[i].style.setProperty("box-sizing","border-box")}},download:function(t,e,l,o){if(l.cells.length>1){var c=o;if(0!=o)if(null==this.datad.datad.cells[e].subtitle[o-1].sp&&this.datad.datad.cells[e].subtitle[o].sp)c=o-1;else if(null!=this.datad.datad.cells[e].subtitle[o].sp&&null!=this.datad.datad.cells[e].subtitle[o-1].sp)for(var i=o-2;i>=0;i--)if(null==this.datad.datad.cells[e].subtitle[i].sp){c=i;break}var d="";for(i=c;i<this.datad.datad.cells[e].subtitle.length&&(d+=this.datad.datad.cells[e].subtitle[i].title,d+="-",this.datad.datad.cells[e].subtitle.length!=i+1)&&null!=this.datad.datad.cells[e].subtitle[i+1].sp;i++);var n="";if("-"==d[d.length-1])for(i=0;i<d.length-1;i++)n+=d[i];else n=d;"NX9000series:9240-9245-9250-9255-9294...-NY9000series:9208-9217-9220-9233...-NH9000series:9294-9300-9320-9338-9348-9350"==(n=(n=(n=(n=(n=(n=n.replace(/,/g,"-")).replace(/\s/g,"")).replace(/（/g,"(")).replace(/）/g,")")).replace(/\//g,"-")).replace(/\*/g,""))&&(n="NX9000series"),t.title=t.title.replace(/\s/g,"-");var r=t.title+"-"+n+".pdf",h="/pdf/"+t.title+"/"+r,f=document.createElement("a");f.setAttribute("href",h),f.setAttribute("target","_blank"),f.style.display="none",document.body.appendChild(f),f.click(),document.body.removeChild(f)}}}},c=(l(1433),l(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"tech_of_table1"},[l("div",{staticClass:"table_cs_show col-12"},[l("div",{staticClass:"col-12 e c"},[t._l(t.datad.datad.firsttitle,(function(e,o){return l("div",{key:o,staticClass:"col-12 e c table_cell_fix head_table",staticStyle:{"border-bottom":"none","border-right":"none","margin-top":"none"}},[t._v("\n                "+t._s(e)+"\n            ")])})),t._v(" "),l("div",{staticClass:"col-12 row-s"},[l("div",{staticClass:"col-12 row-s"},[l("div",{staticClass:"col-1 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                            "+t._s(t.datad.datad.subtitle[0])+"\n                       ")])]),t._v(" "),l("div",{staticClass:"col-3 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                            "+t._s(t.datad.datad.subtitle[1])+"\n                       ")])]),t._v(" "),l("div",{staticClass:"col-8 row-s",staticStyle:{flex:"1"}},[l("div",{staticClass:"col-4 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                                "+t._s(t.datad.datad.subtitle[2])+"\n                            ")])]),t._v(" "),l("div",{staticClass:"col-41 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                                "+t._s(t.datad.datad.subtitle[3])+"\n                            ")])]),t._v(" "),l("div",{staticClass:"col-4 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none",flex:"1"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                                "+t._s(t.datad.datad.subtitle[4])+"\n                             ")])])])])]),t._v(" "),l("div",{staticClass:"col-12 e c"},t._l(t.datad.datad.cells,(function(e,o){return l("div",{key:o,staticClass:"col-12 "},[l("div",{staticClass:"row-s col-12 ",attrs:{"data-index":o}},[l("div",{staticClass:"col-1 col-c e c table_cell_fix",staticStyle:{"border-bottom":"none","border-left":"none","border-right":"none"},attrs:{"data-index2":o}},[l("div",{staticClass:"e c",staticStyle:{height:"100%","align-self":"center","justify-self":"center",flex:"1","border-bottom":"none","border-left":"none","border-right":"none"}},[t._v("\n                    "+t._s(e.title)+"\n                    ")])]),t._v(" "),l("div",{staticClass:"col-3 e c"},t._l(e.subtitle,(function(c,d){return l("div",{key:d,staticClass:"col-12 e c"},[l("div",{staticClass:"col-12 e c",class:[1==c.cells.length?"yellow-highlight":"cur-exist"]},[l("div",{staticClass:"col-12 e c table_cell_fix ",class:[null!=c.sp?"sp-effect":""],staticStyle:{"border-bottom":"none","border-right":"none"}},[l("span",{on:{click:function(l){return t.download(e,o,c,d)}}},[t._v(" "+t._s(c.title))])])])])})),0),t._v(" "),l("div",{staticClass:"col-7 e c ",staticStyle:{flex:"1"}},t._l(e.subtitle,(function(e,o){return l("div",{key:o,staticClass:"col-12 row-s"},t._l(e.cells,(function(o,c){return l("div",{key:c,class:[2==c||1==e.cells.length||0==c?"col-12 table_cell_fix_2":"col-12 table_cell_fix"],staticStyle:{"border-bottom":"none","border-right":"none"}},[1==e.cells.length?l("div",{staticClass:"col-12 e c"},[l("div",{staticClass:"e c"},[t._v("\n                                     "+t._s(o)+"\n                                     ")])]):t._e(),t._v(" "),e.cells.length>1?l("div",{staticClass:"col-12 e c"},[l("div",{staticClass:"e c"},[t._v("\n                                     "+t._s(o)+"\n                                     ")])]):t._e()])})),0)})),0)])])})),0)],2)])])}),[],!1,null,"dadf8a96",null);e.default=component.exports},1671:function(t,e,l){"use strict";l(1432)},1992:function(t,e,l){"use strict";l.r(e);var o=l(455),c={data:function(){return{processShow:!0,gerberShow:!0,techShow:!0,dragShowOne:!1,dragShowTwo:!1,dragShowThree:!1,fr4pcb:o.g,nonptfe:o.m,embeddedcap:o.e,embeddedres:o.f,ims:o.h,nonfr4:o.l,ptfe:o.x,theremalcond:o.z}},props:{flexible:{type:Object,default:function(){}}},mounted:function(){this.$refs.fr4pcb.setThePaddingTop()},methods:{isShowProgerss:function(){this.processShow=!this.processShow,this.gerberShow=!1,this.techShow=!1},isShowGreber:function(){this.gerberShow=!this.gerberShow,this.processShow=!1,this.techShow=!1},isShowTech:function(){this.techShow=!this.techShow,this.processShow=!1,this.gerberShow=!1},dragChange:function(){this.dragShowOne=!0},dragHide:function(){this.dragShowOne=!1},dragChangeTwo:function(){this.dragShowTwo=!0},dragHideTwo:function(){this.dragShowTwo=!1},dragChangeThree:function(){this.dragShowThree=!0},dragHideThree:function(){this.dragShowThree=!1}}},d=(l(1671),l(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"m_tech_specs"},[o("div",{staticClass:"m_tech_specs_inner"},[o("h1",[t._v("PCB Laminates Specifications - Order PCBs from PCBONLINE")]),t._v(" "),o("div",{staticClass:"m_tech",on:{click:t.isShowTech,mouseover:t.dragChangeThree,mouseout:t.dragHideThree}},[t.dragShowThree?o("img",{attrs:{loading:"lazy",src:t.techShow?l(256):l(266),alt:"icon"}}):o("img",{attrs:{loading:"lazy",src:t.techShow?l(256):l(265),alt:"icon"}}),t._v(" "),o("p",[t._v("Available PCB Laminates")])]),t._v(" "),t.techShow?o("div",{staticClass:"m_show_word",attrs:{id:"prototype_word"}},[o("p",[t._v("\n              You can choose the below PCB laminates from PCBONLINE for manufacturing. We list the PCB laminates' main specifications - TG, DK, and CTE, and you can check the the details of the material by clicking the laminate model name or asking PCBONLINE.\n            ")]),t._v(" "),o("div",{staticStyle:{"margin-left":"30px"}},[o("ProductTechTableLaminateTable",{ref:"fr4pcb",attrs:{datad:t.fr4pcb}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"nonptfe",staticStyle:{"margin-top":"50px"},attrs:{datad:t.nonptfe}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"embeddedcap",staticStyle:{"margin-top":"50px"},attrs:{datad:t.embeddedcap}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"embeddedres",staticStyle:{"margin-top":"50px"},attrs:{datad:t.embeddedres}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"ims",staticStyle:{"margin-top":"50px"},attrs:{datad:t.ims}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"nonfr4",staticStyle:{"margin-top":"50px"},attrs:{datad:t.nonfr4}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"ptfe",staticStyle:{"margin-top":"50px"},attrs:{datad:t.ptfe}}),t._v(" "),o("ProductTechTableLaminateTable",{ref:"theremalcond",staticStyle:{"margin-top":"50px"},attrs:{datad:t.theremalcond}})],1)]):t._e()])])}),[],!1,null,"4ffcb488",null);e.default=component.exports;installComponents(component,{ProductTechTableLaminateTable:l(1579).default})},256:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABAklEQVQ4T5XTPUrDQRAF8N8kUQmI4A3E2kawVERQGysvEBCtBAtBj2AliIVgq2JpHTBBvIcWFpJaGw1CyEpC1L8x5mO63Zk3b97O20gVT3IOY9WNPpGqNiTHkSpSp+7am73Y9JrFpXuTGk6wI4ksoFX3jK1Yd9c6pKpFySVmv5q0AB8Yz3Rt4gx1HCCfyTUiVc1LrjDXTwMehVK0qcsmFBxJ9oVcFzAJ56YdxoL3NuArUsUyLjDTvgs1bMea228N3WOksikFpygq2o0lL9maXwwDNHRIuwceheGPBmqih4aRXmnoPYQHeaX/N51T1+y16R/zDe2lH7eO2YuVwW4d6T98AnETbV6YxjpXAAAAAElFTkSuQmCC"},265:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABM0lEQVQ4T5VTvUvDcBB9Lw2RgIiCH6tKBxtc3AXn4tSIa0F0EjoI9k/oVBCHgquKY5WCODj4V0gd6mBB6pAoKoilaH8nqdr+mkpib7sv3r27d0TIkumnMdNu7xOwzZa1fX0x/qyXUHcWMv4KKYcAZoO4AI0EZbN6OnP5W9dpSKZlxLK9ggJ3CBghUAFw8PoxlX845zudNW9JBMcAFsPj9fuskcwy5fotQKxekopkSUQ1BdglkNByn0y5XgD5Y7ynwY2b8uRVEHAy3rIijgjMdyu6DeRJs23m6pWJF30UZ90bFcU9CLYAYYBwZwD56tl0OYpDyvVXASn2rTWa9Hd2SAQUe6Q7HN5y9cpcLIdhtzR4B6GUKPj7Dv+/NG4BldW09FhQkHgtRakVYMOgGlSr3hT3D1+h0JkWcfmeYwAAAABJRU5ErkJggg=="},266:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAABQ0lEQVQ4T32SPUvDUBSGn5PUSkEEEXUVZxfB0Q+EqIObi4MgiE7FooL9CboIfmDRVcVFEMdCmoj/w8VBHLSITopQc6RpU27SkLudc+573497hMTRKv3kOAEKFCjKNJ/mFTELrTELXAKj7f4rwobM40b3QoBW6SXHPsougpUkRbhggLJM8i3qMYFyDYwn5cVq4QmbNdEav0DeGAZABYsfAvYA25g1mgA1Gi/AuizwEEr1mEK5AsY6HgzADT2UZI6vWBCP9NHgCNhEkSbDMxZlcbjL8qAeSyiHsVgzTbeHoj4H5DmWGeqZDC7D2OxEputYlMThNg2kPisEnAFD8ZSEe4SiOLyFKfmMoJyjLKelFPU+ULbDQjgFBmO7pC6raYMUaeFDrV1KoU6sRUdqfFsNc21AVxhd/6Ct+Coh4I8tWeTdZPsH5qlsNeLWS5sAAAAASUVORK5CYII="},698:function(t,e,l){}}]);