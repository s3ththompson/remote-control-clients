!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).TouchControlClient=e()}(this,function(){function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function o(t,r,i){return o=n()?Reflect.construct:function(t,n,o){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return o&&e(i,o.prototype),i},o.apply(null,arguments)}function r(n){var i="function"==typeof Map?new Map:void 0;return r=function(n){if(null===n||-1===Function.toString.call(n).indexOf("[native code]"))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(n))return i.get(n);i.set(n,r)}function r(){return o(n,arguments,t(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e(r,n)},r(n)}var i;return function(t){t[t.CONNECTING=0]="CONNECTING",t[t.OPEN=1]="OPEN",t[t.CLOSED=2]="CLOSED"}(i||(i={})),/*#__PURE__*/function(t){var n,o;function r(e){var n;return(n=t.call(this)||this).url=void 0,n.ws=void 0,n.state=void 0,n.url=e,n.state=i.CLOSED,n.addEventListener("message",function(t){return console.log(t)}),n}o=t,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,e(n,o);var u=r.prototype;return u.connect=function(t){var e=this;this.state=i.CONNECTING,this.ws=new WebSocket(this.url),this.ws.onopen=function(t){e.state=i.OPEN;var n=new Event("open");e.dispatchEvent(n)},this.ws.onclose=function(t){e.state=i.CLOSED;var n=new CloseEvent("close",{code:t.code});e.dispatchEvent(n)},this.ws.onmessage=function(t){var n=new MessageEvent("message",{data:t.data});e.dispatchEvent(n)},this.ws.onerror=function(t){e.dispatchEvent(t)};var n=new Event("connecting");this.dispatchEvent(n)},u.sendValue=function(t,e,n){var o;null==(o=this.ws)||o.send(JSON.stringify({name:t,value:e}))},u.on=function(t,e,n){return this.addEventListener(t,e,n)},u.off=function(t,e,n){return this.removeEventListener(t,e,n)},r}(/*#__PURE__*/r(EventTarget))});
//# sourceMappingURL=index.umd.js.map
