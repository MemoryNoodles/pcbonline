(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1174:function(t,A,o){var map={".":665,"./":665,"./img/iatf16949.png":1175,"./img/iso9001.png":1176,"./img/left.png":882,"./img/reach.png":1177,"./img/rohs.png":1178,"./img/ul.png":1179,"./index":665,"./index.vue":665};function e(t){var A=n(t);return o(A)}function n(t){if(!o.o(map,t)){var A=new Error("Cannot find module '"+t+"'");throw A.code="MODULE_NOT_FOUND",A}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=n,t.exports=e,e.id=1174},1175:function(t,A,o){t.exports=o.p+"img/iatf16949.png"},1176:function(t,A,o){t.exports=o.p+"img/iso9001.png"},1177:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUxpcSlT7CtU7SlS6ypU7SpT7ClS7ClS6ilS6ylS6ylS6ylS6ylT6ylS6pCZA1QAAAANdFJOUwBQC+sbNGn2tc6a3X+F+tUXAAADH0lEQVRYw6VX23bEIAgMonjN//9uATW6afecqrykdpMRBwbwupbNQLLXmRkXsJgzDFuyz+4MAyLe99lpDOWbjY4wimJ4OMJAwbhPKDFUMe64D2Ig38cgEBvGwXFs6Bj7xJpyD9sNMeAEEvaSzcYJY5MUU/wMcm8J8IluJRajPYqMYASyp6xmsuY6dCS4vYJEg1W/W0rmXC0rGG56mXDPDxfSc3IzHFnEuJHMr9AEt4bBRaNLNXWMuCJel/y0r+uqGb79JxgVo7PYVbNEasfgrUVmT3xX5G8nvWYYtOYlQuIk+uh6QfNr4ocwoYRenVdrmU1Ds775hbBexvB+WVpXrqEXyla3eqH4sif/D5S4WUNmX3Yd+WgScX8uGvXsZC7q8j2b8ppszsZNo3o+HTf1QMfDM8fZ0yEGHyj/M+Phsd8N0hF8pdXOH4yBYa3bc/CGm7vDyxvEo5hfmwvfIIHYilSxBVfeILUtufzUUsM2YvRrNYG05SMxk5pijSshPSS7ksaKb26pLRTElpQkgB8g6gll73m4g3Y78bpyrfzKKovrAkJRfuMK/IBIlktF7qOifvfMBAL/lPDW1jD71gtEH5JqJA2HaiHJRa5HjCiLWAr/JEIU1nJKwp2p8KGISpOAYBZr28kOZC0/+DtuQhmM3FKk9XC1i2Atd0V0CsJToGUS8jUPqHKAovtchg8HzLHmNp8USWcmyQGn3EJTJzGkJpseLZLr9Dq28BAOJaCC5PovY20lVrs88PfKCWdab/xKSWDLbVtK2ksZhCmZUrqeV0HuGh29m2lQ58mXmQV24sbqicO5KfeMHSC1RQivQlRM1aBGJxHED0/MFxCd9pAqJ9q/dYIHr5tbBbGNE0sE9k8Q7ZziSumJJW+2RYtOrCWXPWL+/gRRMuiVJ6Tjki01nHxkJOf4kb94otnDApTzYJFwsQ8g+QiSvtKRJWMxRMko8wVEckn269rJ9MRK0jkN7Xj5+gOEaxr1SxqiMECRtYoqVb5Sq2pZ2MJ21XQVOL/dJIoo1b4XC8d/a2AopdLuV1xOipPSrr8YWdb3bftQnj9Y4Dh9+tda0QAAAABJRU5ErkJggg=="},1178:function(t,A,o){t.exports=o.p+"img/rohs.png"},1179:function(t,A,o){t.exports=o.p+"img/ul.png"},1180:function(t,A,o){"use strict";o(883)},665:function(t,A,o){"use strict";o.r(A);var e=[function(){var t=this.$createElement,A=this._self._c||t;return A("div",{staticClass:"third-part col-1 e c"},[A("img",{staticClass:"left-img",attrs:{alt:"right_icon",loading:"lazy",src:o(882)}})])}],n=(o(26),{name:"QualityCertificates",data:function(){return{productDataList:this.flexible,pages:[],productTitle1:"",productTitle2:""}},props:{flexible:{type:Object,default:function(){}}},watch:{productDataList:function(t){this.productDataList=t}},mounted:function(){if(this.productDataList){var t=this.productDataList,A=t.title_1,o=t.title_2,e=t.icon,n=t.name,desc=t.desc,c=t.route;this.pages=[{icon:e[0],iconAlt:n[0],name:n[0],desc:desc[0],route:c[0]},{icon:e[1],iconAlt:n[1],name:n[1],desc:desc[1],route:c[1]},{icon:e[2],iconAlt:n[2],name:n[2],desc:desc[2],route:c[2]},{icon:e[3],iconAlt:n[3],name:n[3],desc:desc[3],route:c[3]},{icon:e[4],iconAlt:n[4],name:n[4],desc:desc[4],route:c[4]}],this.productTitle1=A,this.productTitle2=o}}}),c=(o(1180),o(2)),component=Object(c.a)(n,(function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"Quality-Certificates col-12 e c"},[e("div",{staticClass:"col-12 e c",staticStyle:{"margin-top":"93px"}},[e("h2",{staticClass:"header col-12",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"},domProps:{innerHTML:t._s(t.productTitle1+t.productTitle2)}})]),t._v(" "),e("div",{staticClass:"lower-part"},t._l(t.pages,(function(A,n){return e("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:{down:"animated fadeInDown"},expression:"{ down: 'animated fadeInDown' }"}],key:n,staticClass:"container col-12 col-s"},[e("a",{staticClass:"col-12",staticStyle:{"text-decoration":"none"},attrs:{href:A.route,target:"_blank"}},[e("div",{staticClass:"cert-card col-12 row-s"},[e("div",{staticClass:"first-part col-3 e c"},[e("img",{staticClass:"icon-img",attrs:{loading:"lazy",src:o(1174)(""+A.icon),title:A.iconAlt,alt:A.iconAlt}})]),t._v(" "),e("div",{staticClass:"second-part col-8 e c"},[e("h2",{staticClass:"name",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"}},[t._v("\n              "+t._s(A.name)+"\n            ")]),t._v(" "),e("p",{staticClass:"desc",staticStyle:{"font-family":"'Roboto'"}},[t._v(t._s(A.desc))])]),t._v(" "),t._m(0,!0)])])])})),0)])}),e,!1,null,"756f78f4",null);A.default=component.exports},882:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAF8j4o1AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAMAAAAAAwTDNSAAACqElEQVRYCbVXCW4bMQzMGv2TP9WiN3ojctIL6Ym2n7L9J7szgofRrsiVtk4FJKTIGc6K2kO+2G636eI0VrCXCgwMYnKE2dDP4xSwTOEIYtawisQBy5hDDif4S+LLlpfG2Ga9Xic6OUGHoyi14cqqIZZ0uNLbUdBvg7NexMjiUdIXlw5ZXczpAv+wApmWwOQ7YveZwMqHnNjv958xf6wg7Wq3210fDocXZTAnjsfj22mQ87LVeW7/TtefLNBwhslibWcj3vRWEC4kRrdISBwRhJpcJsOm6BLmiCEBG/ETPX8oMi23riIA+AXAZ1Og5kYA8COAr5SgZcVyTp/7kGAvOdHwgMrdg2PgOaAI8T1jiHMdZ5NmS84/pw61fLbGLw8HzJAROOm5vNUwDFcEa7RIeSfxVL/HA/xGJNpoT2zrcWt8wq3xskUyAoG4nBuY53OkEYFAKH2F0tOIVBFOpB8gPfJILoFANOIXGvFgSgoJBDot3oQED4xWJ5cQgalaEebAFaEFHhF6wEboBWfCEjAJo+cBc3uHMumNktAEs4AIXeCsiDWk7PT+46IXk3qLA7f4m7igdoZOBcTv75kYgY0EBD9baIWRVM2xPNSetUf2dOLddY3XUD4GOUIKLV6RCagCrvgD/NeaB7ZbqBJQQR4BddpTzLFNoVBAxdC66pCiXGFDoaaAiqB1POnmQ61ijq2EugVUDCuqzmfKFdaEFguoCFb0G34+uyvmWP9njgMchfiRRKBZPPysjaoVE7Sn+mQXabnWHga6WoQr/oZb9okqBHZUWJhZAfS5Os6IWFi3sPKuAFpRHa5EKOxsYeFGAmhFddQTsLBdhYXPArjiK7zo3ikY2EWFVaP1PSDunwpLgL9GonFWYRX1BO6ksCdwp4UlwGNussl/cP4CCHqgVNpxdicAAAAASUVORK5CYII="},883:function(t,A,o){}}]);