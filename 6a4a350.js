(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{458:function(e,t,o){},459:function(e,t,o){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/dist/",o(o.s=74)}({0:function(e,t,o){"use strict";function n(e,t,o,n,r,c,l,f){var h,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),n&&(d.functional=!0),c&&(d._scopeId="data-v-"+c),l?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},d._ssrRegister=h):r&&(h=f?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(d.functional){d._injectStyles=h;var m=d.render;d.render=function(e,t){return h.call(t),m(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,h):[h]}return{exports:e,options:d}}o.d(t,"a",(function(){return n}))},2:function(e,t){e.exports=o(470)},3:function(e,t){e.exports=o(298)},5:function(e,t){e.exports=o(475)},7:function(e,t){e.exports=o(1)},74:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("transition",{attrs:{name:e.transition},on:{"after-enter":e.handleAfterEnter,"after-leave":e.handleAfterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&e.showPopper,expression:"!disabled && showPopper"}],ref:"popper",staticClass:"el-popover el-popper",class:[e.popperClass,e.content&&"el-popover--plain"],style:{width:e.width+"px"},attrs:{role:"tooltip",id:e.tooltipId,"aria-hidden":e.disabled||!e.showPopper?"true":"false"}},[e.title?o("div",{staticClass:"el-popover__title",domProps:{textContent:e._s(e.title)}}):e._e(),e._t("default",[e._v(e._s(e.content))])],2)]),o("span",{ref:"wrapper",staticClass:"el-popover__reference-wrapper"},[e._t("reference")],2)],1)};n._withStripped=!0;var r=o(5),c=o.n(r),l=o(2),f=o(3),h={name:"ElPopover",mixins:[c.a],props:{trigger:{type:String,default:"click",validator:function(e){return["click","focus","hover","manual"].indexOf(e)>-1}},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:200},title:String,disabled:Boolean,content:String,reference:{},popperClass:String,width:{},visibleArrow:{default:!0},arrowOffset:{type:Number,default:0},transition:{type:String,default:"fade-in-linear"},tabindex:{type:Number,default:0}},computed:{tooltipId:function(){return"el-popover-"+Object(f.generateId)()}},watch:{showPopper:function(e){this.disabled||(e?this.$emit("show"):this.$emit("hide"))}},mounted:function(){var e=this,t=this.referenceElm=this.reference||this.$refs.reference,o=this.popper||this.$refs.popper;!t&&this.$refs.wrapper.children&&(t=this.referenceElm=this.$refs.wrapper.children[0]),t&&(Object(l.addClass)(t,"el-popover__reference"),t.setAttribute("aria-describedby",this.tooltipId),t.setAttribute("tabindex",this.tabindex),o.setAttribute("tabindex",0),"click"!==this.trigger&&(Object(l.on)(t,"focusin",(function(){e.handleFocus();var o=t.__vue__;o&&"function"==typeof o.focus&&o.focus()})),Object(l.on)(o,"focusin",this.handleFocus),Object(l.on)(t,"focusout",this.handleBlur),Object(l.on)(o,"focusout",this.handleBlur)),Object(l.on)(t,"keydown",this.handleKeydown),Object(l.on)(t,"click",this.handleClick)),"click"===this.trigger?(Object(l.on)(t,"click",this.doToggle),Object(l.on)(document,"click",this.handleDocumentClick)):"hover"===this.trigger?(Object(l.on)(t,"mouseenter",this.handleMouseEnter),Object(l.on)(o,"mouseenter",this.handleMouseEnter),Object(l.on)(t,"mouseleave",this.handleMouseLeave),Object(l.on)(o,"mouseleave",this.handleMouseLeave)):"focus"===this.trigger&&(this.tabindex<0&&console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"),t.querySelector("input, textarea")?(Object(l.on)(t,"focusin",this.doShow),Object(l.on)(t,"focusout",this.doClose)):(Object(l.on)(t,"mousedown",this.doShow),Object(l.on)(t,"mouseup",this.doClose)))},beforeDestroy:function(){this.cleanup()},deactivated:function(){this.cleanup()},methods:{doToggle:function(){this.showPopper=!this.showPopper},doShow:function(){this.showPopper=!0},doClose:function(){this.showPopper=!1},handleFocus:function(){Object(l.addClass)(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!0)},handleClick:function(){Object(l.removeClass)(this.referenceElm,"focusing")},handleBlur:function(){Object(l.removeClass)(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!1)},handleMouseEnter:function(){var e=this;clearTimeout(this._timer),this.openDelay?this._timer=setTimeout((function(){e.showPopper=!0}),this.openDelay):this.showPopper=!0},handleKeydown:function(e){27===e.keyCode&&"manual"!==this.trigger&&this.doClose()},handleMouseLeave:function(){var e=this;clearTimeout(this._timer),this.closeDelay?this._timer=setTimeout((function(){e.showPopper=!1}),this.closeDelay):this.showPopper=!1},handleDocumentClick:function(e){var t=this.reference||this.$refs.reference,o=this.popper||this.$refs.popper;!t&&this.$refs.wrapper.children&&(t=this.referenceElm=this.$refs.wrapper.children[0]),this.$el&&t&&!this.$el.contains(e.target)&&!t.contains(e.target)&&o&&!o.contains(e.target)&&(this.showPopper=!1)},handleAfterEnter:function(){this.$emit("after-enter")},handleAfterLeave:function(){this.$emit("after-leave"),this.doDestroy()},cleanup:function(){(this.openDelay||this.closeDelay)&&clearTimeout(this._timer)}},destroyed:function(){var e=this.reference;Object(l.off)(e,"click",this.doToggle),Object(l.off)(e,"mouseup",this.doClose),Object(l.off)(e,"mousedown",this.doShow),Object(l.off)(e,"focusin",this.doShow),Object(l.off)(e,"focusout",this.doClose),Object(l.off)(e,"mousedown",this.doShow),Object(l.off)(e,"mouseup",this.doClose),Object(l.off)(e,"mouseleave",this.handleMouseLeave),Object(l.off)(e,"mouseenter",this.handleMouseEnter),Object(l.off)(document,"click",this.handleDocumentClick)}},d=o(0),component=Object(d.a)(h,n,[],!1,null,null,null);component.options.__file="packages/popover/src/main.vue";var main=component.exports,m=function(e,t,o){var n=t.expression?t.value:t.arg,r=o.context.$refs[n];r&&(Array.isArray(r)?r[0].$refs.reference=e:r.$refs.reference=e)},v={bind:function(e,t,o){m(e,t,o)},inserted:function(e,t,o){m(e,t,o)}},w=o(7);o.n(w).a.directive("popover",v),main.install=function(e){e.directive("popover",v),e.component(main.name,main)},main.directive=v;t.default=main}})}}]);