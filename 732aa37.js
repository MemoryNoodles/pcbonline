(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1519:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAsCAYAAAGmrV5UAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAQqADAAQAAAABAAAALAAAAADtZ2oBAAADBUlEQVRoBe1aPWgUQRSe2c2PaQIB91JZWOnFYCP40wiCCLYXjwQbKxEUwd7eSrASG4trBAXvsLITk8YyKugdWIhYWNwaiNhIws44EzKXNz+7M7u3J0HeQpiZ9958871v3wybvaXN1pATcA16DWraIuDP7dYYJDnIP7iWHEdRdEfahGO4t9zy6s8mDJJ9xthj2fZ7jUUrE+mAl5d0DQEmczO7vSUga0kQZubNQiKa9wxmKfveRMwJrvHhAdFqw8xd6mHSd8UUiqZAzIkQeGw9EKCGyhxbRK1YzPut6gDedzNmxGDp2vAqDKSU7sCx7LtiRgCckddwQr+bzMKx7LtiCkvZBDDHMEUzNTO2aDzKoiho0j4koRRGJQ6VElNxRC8pRmabMf7WtOWNx8HRjjq4gG/fz85PL3zoLGzDOa5+CI6zMH0TZ6bpiToIKByLxNJKap3VMMM4jq98fJF8gTZXvwwOHttKQet2KMe/bJGEUhuVQCWUAqrFmkAllAKqxZpQSuQ+3mWM3BL/tK2pQLOllHyFtrzHuxCcyo93i/PJ3HqH/oFEXH3fU5rEcdbEqVZ63QV4YKO/QwiE4jhJMMKfHSxo947MkJO21baE4lgkTq9unbfhgIVS9v558gNYnN0yOBaJ3V32zom6b4wJOVfkV74yOFphLq9tHct2su8KyNXCdxIuv7SVxRnraTuPRIg9LxnfbgrBrhJjlUQVkP9hDgqxfxdRCBRC39BYEVgRWBG6AlgRuh54RmBFYEXoCmBF6HrgGYEVoVeE9i5Ad7lHF9p87leWfhMfqjXcEQFWGt0edI8+CYj0htTFp9TWaLd5vM3Sz+OIQCNyvy4R6uQz5ZUcBHxi6Sbh5DgwleqKb3Ie9l8mD0pNKgiuk4949RZ2iR+ZN4QIZ8OiXVH06aCX3HV5qtjq5hO0NcSirzjnF6sQlnPEm/euEOFm1fnmvEnw8R6WzZVhR1TCDZNM6FhshzfiK7PLofG+uEnxKRSi2Uofid9Y7vnI5fvppqiEM/n+cp5J8vkLIS8pw1IJ9EUAAAAASUVORK5CYII="},1520:function(t,e,o){},1800:function(t,e,o){var map={".":667,"./":667,"./img/home_icon20.png":1519,"./img/home_img11.png":1801,"./img/home_img12.png":1802,"./img/home_img13.png":1803,"./img/home_img14.png":1804,"./img/home_img14.webp":1805,"./img/home_img_14_1.jpg":1806,"./index":667,"./index.vue":667};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=1800},1801:function(t,e,o){t.exports=o.p+"img/home_img11.png"},1802:function(t,e,o){t.exports=o.p+"img/home_img12.png"},1803:function(t,e,o){t.exports=o.p+"img/home_img13.png"},1804:function(t,e,o){t.exports=o.p+"img/home_img14.png"},1805:function(t,e,o){t.exports=o.p+"img/home_img14.webp"},1806:function(t,e,o){t.exports=o.p+"img/home_img_14_1.jpg"},1807:function(t,e,o){"use strict";o(1520)},667:function(t,e,o){"use strict";o.r(e);o(24);var r={data:function(){return{productTitle1:"",productTitle2:"",productDataList:this.flexible,pages:[],temporaryData:{isStackClick:!0,offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",lastZindex:"",rotate:0,lastRotate:0,visible:3,tracking:!1,animation:!1,currentPage:0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10},basicdata:{start:{},end:{}}}},props:{flexible:{type:Object,default:function(){}}},watch:{productDataList:function(t){this.productDataList=t}},mounted:function(){if(this.productDataList){var t=this.productDataList,e=t.title_1,img=t.img,o=t.name,desc=t.desc,r=t.txt;this.pages=[{img:img[0],imgAlt:o[0],name:o[0],desc:desc[0],txt:r[0]},{img:img[1],imgAlt:o[1],name:o[1],desc:desc[1],txt:r[1]},{img:img[2],imgAlt:o[2],name:o[2],desc:desc[2],txt:r[2]},{img:img[3],imgAlt:o[3],name:o[3],desc:desc[3],txt:r[3]}],this.productTitle1=e}},methods:{touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.isStackClick=!1,this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var e=this.rotateDirection(),o=this.angleRatio();this.temporaryData.rotate=e*this.offsetWidthRatio*15*o}},touchend:function(t,e){if(this.temporaryData.isStackClick&&(this.$emit("click",e),this.temporaryData.isStackClick=!1),this.temporaryData.isStackClick=!0,this.temporaryData.tracking=!1,this.temporaryData.animation=!0,this.offsetRatio>=.2){var o=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*o):-Math.abs(this.temporaryData.poswidth*o),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.lastZindex=20,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick((function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0}))},onTransitionEnd:function(t){var e=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===e&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1,this.temporaryData.lastZindex=-1)},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight;return-1*(2*this.temporaryData.offsetY/t-1)||0},inStack:function(t,e){for(var o=[],r=this.temporaryData.visible,n=this.pages.length,i=0;i<r;i++)e+i<n?o.push(e+i):o.push(e+i-n);return o.indexOf(t)>=0},transform:function(t){var e=this.temporaryData.currentPage,o=this.pages.length,r=0===e?this.pages.length-1:e-1,style={},n=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,e)){var c=t-e>0?t-e:t-e+o;style.opacity="1",style.transform="translate3D(0,0,"+-60*(c-this.offsetRatio)+"px)",style.zIndex=n-c,this.temporaryData.tracking||(style.transitionTimingFunction="ease",style.transitionDuration="300ms")}else t===r?(style.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",style.opacity=this.temporaryData.lastOpacity,style.zIndex=this.temporaryData.lastZindex,style.transitionTimingFunction="ease",style.transitionDuration="300ms"):(style.zIndex="-1",style.transform="translate3D(0,0,"+-1*n*60+"px)");return style}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var style={};return style.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",style.opacity=this.temporaryData.opacity,style.zIndex=10,this.temporaryData.animation&&(style.transitionTimingFunction="ease",style.transitionDuration=(this.temporaryData.animation?300:0)+"ms"),style}}},computed:{offsetRatio:function(){var t=1-(414-Math.abs(this.temporaryData.poswidth))*(500-Math.abs(this.temporaryData.posheight))/207e3||0;return t>1?1:t},offsetWidthRatio:function(){return 1-(414-Math.abs(this.temporaryData.poswidth))/414||0}}},n=(o(1807),o(7)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 e c",staticStyle:{position:"relative","margin-top":"78px"}},[r("div",{staticClass:"mobile-product col-10 e c",staticStyle:{position:"relative"}},[r("div",{staticClass:"col-12 e c"},[r("h2",{staticClass:"col-12 header",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"}},[r("span",{domProps:{innerHTML:t._s(t.productTitle1)}})])]),t._v(" "),t._l(t.pages,(function(e,n){return r("div",{key:n,staticClass:"product-card col-11",staticStyle:{"margin-top":"45px"},style:[t.transformIndex(n),t.transform(n)],on:{"!touchmove":function(e){return e.stopPropagation(),t.touchmove.apply(null,arguments)},"!touchstart":function(e){return e.stopPropagation(),t.touchstart.apply(null,arguments)},"!touchend":function(e){return e.stopPropagation(),t.touchend(e,n)},"!touchcancel":function(e){return e.stopPropagation(),t.touchend(e,n)},"!mousedown":function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart.apply(null,arguments)},"!mouseup":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,n)},"!mousemove":function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove.apply(null,arguments)},"!mouseout":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e,n)},"webkit-transition-end":function(e){return t.onTransitionEnd(n)},transitionend:function(e){return t.onTransitionEnd(n)}}},[r("div",{staticClass:"product-content e c"},[r("div",{staticStyle:{position:"relative"}},[r("img",{staticClass:"img-prod",attrs:{loading:"lazy",src:o(1800)(""+e.img),alt:e.imgAlt,title:e.imgAlt,format:"webp"}}),t._v(" "),r("img",{staticClass:"icon-small",attrs:{loading:"lazy",src:o(1519),format:"webp",alt:"icon"}})]),t._v(" "),r("h2",{staticClass:"person-name",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("h3",{staticClass:"person-job",staticStyle:{"font-family":"'Roboto-Bold','Roboto'"}},[t._v("\n          "+t._s(e.desc)+"\n        ")]),t._v(" "),r("div",{staticClass:"blue-sep"}),t._v(" "),r("p",{staticClass:"person-comment",staticStyle:{"font-family":"'Roboto'"}},[t._v("\n          "+t._s(e.txt)+"\n        ")])])])})),t._v(" "),r("div",{staticClass:"blueblue col-12 e c",staticStyle:{position:"absolute",top:"600px"}},[r("div",{staticClass:"row-s"},[r("div",{staticClass:"col-1 e c row-s block-point",class:[0==t.temporaryData.currentPage?"blue-point":"gray-point"],staticStyle:{"margin-right":"13px"}}),t._v(" "),r("div",{staticClass:"col-1 e c row-s block-point",class:[1==t.temporaryData.currentPage?"blue-point":"gray-point"],staticStyle:{"margin-right":"13px"}}),t._v(" "),r("div",{staticClass:"col-1 e c row-s block-point",class:[2==t.temporaryData.currentPage?"blue-point":"gray-point"],staticStyle:{"margin-right":"13px"}}),t._v(" "),r("div",{staticClass:"col-1 e c row-s block-point",class:[3==t.temporaryData.currentPage?"blue-point":"gray-point"]})])])],2)])}),[],!1,null,"d4b096b6",null);e.default=component.exports}}]);