(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1405:function(t,e,l){"use strict";l(684)},1534:function(t,e,l){"use strict";l.r(e);l(44);var c={data:function(){return{}},props:{datad:{type:Object,default:function(){}}},mounted:function(){},methods:{setThePaddingTop:function(){for(var t=[],e=[],i=0;i<this.datad.datad.cells.length;i++)t.push(document.querySelector('[data-index="'.concat(i,'"]'))),e.push(document.querySelector('[data-index2="'.concat(i,'"]')));for(i=0;i<t.length;i++){var l=getComputedStyle(t[i]).height,c=.5*parseInt(l)+"px";e[i].style.setProperty("padding-top",c),e[i].style.setProperty("box-sizing","border-box")}},download:function(t,e,l,c){if(l.cells.length>1){var d=c;if(0!=c)if(null==this.datad.datad.cells[e].subtitle[c-1].sp&&this.datad.datad.cells[e].subtitle[c].sp)d=c-1;else if(null!=this.datad.datad.cells[e].subtitle[c].sp&&null!=this.datad.datad.cells[e].subtitle[c-1].sp)for(var i=c-2;i>=0;i--)if(null==this.datad.datad.cells[e].subtitle[i].sp){d=i;break}var o="";for(i=d;i<this.datad.datad.cells[e].subtitle.length&&(o+=this.datad.datad.cells[e].subtitle[i].title,o+="-",this.datad.datad.cells[e].subtitle.length!=i+1)&&null!=this.datad.datad.cells[e].subtitle[i+1].sp;i++);var n="";if("-"==o[o.length-1])for(i=0;i<o.length-1;i++)n+=o[i];else n=o;"NX9000series:9240-9245-9250-9255-9294...-NY9000series:9208-9217-9220-9233...-NH9000series:9294-9300-9320-9338-9348-9350"==(n=(n=(n=(n=(n=(n=n.replace(/,/g,"-")).replace(/\s/g,"")).replace(/（/g,"(")).replace(/）/g,")")).replace(/\//g,"-")).replace(/\*/g,""))&&(n="NX9000series"),t.title=t.title.replace(/\s/g,"-");var r=t.title+"-"+n+".pdf",_="/pdf/"+t.title+"/"+r,v=document.createElement("a");v.setAttribute("href",_),v.setAttribute("target","_blank"),v.style.display="none",document.body.appendChild(v),v.click(),document.body.removeChild(v)}}}},d=(l(1405),l(7)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"tech_of_table1"},[l("div",{staticClass:"table_cs_show col-12"},[l("div",{staticClass:"col-12 e c"},[t._l(t.datad.datad.firsttitle,(function(e,c){return l("div",{key:c,staticClass:"col-12 e c table_cell_fix head_table",staticStyle:{"border-bottom":"none","border-right":"none","margin-top":"none"}},[t._v("\n                "+t._s(e)+"\n            ")])})),t._v(" "),l("div",{staticClass:"col-12 row-s"},[l("div",{staticClass:"col-12 row-s"},[l("div",{staticClass:"col-1 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                            "+t._s(t.datad.datad.subtitle[0])+"\n                       ")])]),t._v(" "),l("div",{staticClass:"col-3 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                            "+t._s(t.datad.datad.subtitle[1])+"\n                       ")])]),t._v(" "),l("div",{staticClass:"col-8 row-s",staticStyle:{flex:"1"}},[l("div",{staticClass:"col-4 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                                "+t._s(t.datad.datad.subtitle[2])+"\n                            ")])]),t._v(" "),l("div",{staticClass:"col-41 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                                "+t._s(t.datad.datad.subtitle[3])+"\n                            ")])]),t._v(" "),l("div",{staticClass:"col-4 table_cell_fix head_table e c ",staticStyle:{"border-bottom":"none","border-right":"none",flex:"1"}},[l("div",{staticClass:"col-12 e c"},[t._v("\n                                "+t._s(t.datad.datad.subtitle[4])+"\n                             ")])])])])]),t._v(" "),l("div",{staticClass:"col-12 e c"},t._l(t.datad.datad.cells,(function(e,c){return l("div",{key:c,staticClass:"col-12 "},[l("div",{staticClass:"row-s col-12 ",attrs:{"data-index":c}},[l("div",{staticClass:"col-1 col-c e c table_cell_fix",staticStyle:{"border-bottom":"none","border-left":"none","border-right":"none"},attrs:{"data-index2":c}},[l("div",{staticClass:"e c",staticStyle:{height:"100%","align-self":"center","justify-self":"center",flex:"1","border-bottom":"none","border-left":"none","border-right":"none"}},[t._v("\n                    "+t._s(e.title)+"\n                    ")])]),t._v(" "),l("div",{staticClass:"col-3 e c"},t._l(e.subtitle,(function(d,o){return l("div",{key:o,staticClass:"col-12 e c"},[l("div",{staticClass:"col-12 e c",class:[1==d.cells.length?"yellow-highlight":"cur-exist"]},[l("div",{staticClass:"col-12 e c table_cell_fix ",class:[null!=d.sp?"sp-effect":""],staticStyle:{"border-bottom":"none","border-right":"none"}},[l("span",{on:{click:function(l){return t.download(e,c,d,o)}}},[t._v(" "+t._s(d.title))])])])])})),0),t._v(" "),l("div",{staticClass:"col-7 e c ",staticStyle:{flex:"1"}},t._l(e.subtitle,(function(e,c){return l("div",{key:c,staticClass:"col-12 row-s"},t._l(e.cells,(function(c,d){return l("div",{key:d,class:[2==d||1==e.cells.length||0==d?"col-12 table_cell_fix_2":"col-12 table_cell_fix"],staticStyle:{"border-bottom":"none","border-right":"none"}},[1==e.cells.length?l("div",{staticClass:"col-12 e c"},[l("div",{staticClass:"e c"},[t._v("\n                                     "+t._s(c)+"\n                                     ")])]):t._e(),t._v(" "),e.cells.length>1?l("div",{staticClass:"col-12 e c"},[l("div",{staticClass:"e c"},[t._v("\n                                     "+t._s(c)+"\n                                     ")])]):t._e()])})),0)})),0)])])})),0)],2)])])}),[],!1,null,"dadf8a96",null);e.default=component.exports},684:function(t,e,l){}}]);