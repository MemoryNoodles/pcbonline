(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1347:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAABGdBTUEAALGPC/xhBQAAAf9JREFUeAHt2TGOAjEMBdCd7bgtR+AI3JYSCqSISNhJQTP22yrjZAs/m+oft+vj+ffxd7tfjo/P8Oj/vtOc1eX/ezuq3QQsQreJB/1ahABGmQABAgQIECBAgAABAgQIECBAgAABAgRWAsdZ0zIp6Xu0v5qfrGH1U2lybxGaDHrVpkVYCbknQIAAAQIECBAgQIAAAQIECBAgQIAAgUBA+hjA/CrVO0tKKmsIFqFb2SJ0m3jQr0UIYJQJECBAgAABAgQIECBAgAABAgQIECBAYCUgfQyEpI8BjHJtAaFT7flud2cRtqk8JECAAAECBAgQIECAAAECBAgQIECAAIFZQPo4e4wv6eOgcOgkIHTqNO2kV4uQ4LgiQIAAAQIECBAgQIAAAQIECBAgQIAAgUxA+hjoSB8DGOXaAkKn2vPd7s4ibFN5SIAAAQIECBAgQIAAAQIECBAgQIAAAQKzgPRx9hhf0sdB4dBJQOjUadpJrxYhwXFFgAABAgQIECBAgAABAgQIECBAgAABApmA9DHQkT4GMMq1BYROtee73Z1F2KbykAABAgQIECBAgAABAgQIECBAgAABAgRmAenj7DG+pI+DwqGTgNCp07STXi1CguOKAAECBAgQIECAAAECBAgQIECAAAECBDIB6WOgI30MYJRrCwidas93uzuLsE1V++ELejOFUi8W3GgAAAAASUVORK5CYII="},1451:function(e,t,n){e.exports=n.p+"img/icon_12.png"},1459:function(e,t,n){e.exports=n.p+"img/img_04.png"},1460:function(e,t,n){e.exports=n.p+"img/img_06.png"},1898:function(e,t,n){},2124:function(e,t,n){"use strict";n(1898)},2266:function(e,t,n){"use strict";n.r(t);var A=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"moon"},[t("img",{attrs:{loading:"lazy",src:n(1459),alt:"contact"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"point_show"},[t("img",{attrs:{loading:"lazy",src:n(1347),alt:"icon"}})])}],l=(n(100),n(57)),o=n.n(l),m={data:function(){return{emailCorrect:!1,nameCorrect:!1,messageCorrect:!1,emailSuccess:!1,timer:null,messageWorld:"Your email has been sent. We will reply to you ASAP."}},methods:{validationName:function(){var e=document.getElementById("name").value;this.nameCorrect=""===e},validation:function(){var e=document.getElementById("email").value,t=new RegExp("^[a-z0-9A-Z]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");""!==e&&t.test(e)?this.emailCorrect=!1:this.emailCorrect=!0},sendInfo:function(){this.timer=null,this.fetch()},fetch:function(){var e=this,t=document.getElementById("name").value,n=document.getElementById("email").value,A=document.getElementById("message").value,l=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),m=new FormData;if(m.append("email",n),m.append("msg",A),m.append("name",t),""!==t&&""!==n&&""!==A){if(l.test(n)){var c=new FormData;c.append("email",n),c.append("msg",A),c.append("name",t);o.a.post("/api/sendContactEmail",c).then((function(t){t.data.success?(e.emailSuccess=!0,document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("message").value="",e.timer=setTimeout((function(){e.emailSuccess=!1}),3e3)):e.messageWorld="something error"}))}}else""===t&&(this.nameCorrect=!0),(""===n||l.test(n))&&(this.emailCorrect=!0),""===A&&(this.messageCorrect=!0)}}},c=(n(2124),n(7)),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{attrs:{id:"relation"}},[A("div",{staticClass:"relation"},[A("h2",[e._v("Contact Us with On-Click and We Will Reply ASAP!")]),e._v(" "),A("div",{attrs:{id:"contact"}},[e._m(0),e._v(" "),A("div",{staticClass:"send_info"},[A("div",{staticClass:"get_name"},[A("div",{staticClass:"name"},[A("p",[e._v("Your Name")]),e._v(" "),A("input",{attrs:{id:"name"},on:{blur:e.validationName,input:e.validationName}}),e._v(" "),e.nameCorrect?A("span",{staticClass:"validation_email"},[e._v("The name is not empty")]):e._e()]),e._v(" "),A("div",{staticClass:"email"},[A("p",[e._v("Your Email")]),e._v(" "),A("input",{attrs:{id:"email"},on:{blur:e.validation,input:e.validation}}),e._v(" "),e.emailCorrect?A("span",{staticClass:"validation_email"},[e._v("Please enter the correct email address")]):e._e()])]),e._v(" "),A("div",{staticClass:"message"},[A("p",[e._v("Your Message")]),e._v(" "),A("input",{attrs:{id:"message"}}),e._v(" "),e.messageCorrect?A("span",{staticClass:"validation_email"},[e._v("message")]):e._e()]),e._v(" "),A("div",{staticClass:"decorations"},[A("img",{attrs:{loading:"lazy",src:n(1460),alt:"icon"}}),e._v(" "),A("span",{staticClass:"send_to",on:{click:e.sendInfo}},[A("img",{attrs:{loading:"lazy",src:n(1451),alt:"icon"}})])])]),e._v(" "),e._m(1)])]),e._v(" "),e.emailSuccess?A("div",{staticClass:"mask"},[A("div",{staticClass:"prompt-words"},[e._v("\n            "+e._s(e.messageWorld)+"\n        ")])]):e._e()])}),A,!1,null,"01cc1520",null);t.default=component.exports}}]);