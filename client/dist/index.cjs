function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function r(t,o,c){return r=n()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var c=new(Function.bind.apply(t,o));return r&&e(c,r.prototype),c},r.apply(null,arguments)}function o(n){var c="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||-1===Function.toString.call(n).indexOf("[native code]"))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==c){if(c.has(n))return c.get(n);c.set(n,o)}function o(){return r(n,arguments,t(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e(o,n)},o(n)}var c,i=new Uint8Array(16);function a(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(i)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function s(t){return"string"==typeof t&&u.test(t)}for(var l,d=[],f=0;f<256;++f)d.push((f+256).toString(16).substr(1));function p(t,e,n){var r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n}(r)}!function(t){t.Connecting="CONNECTING",t.Connected="CONNECTED",t.Disconnected="DISCONNECTED"}(l||(l={}));var v=/*#__PURE__*/function(t){var n,r;function o(e){var n;return(n=t.call(this)||this).url=void 0,n.ws=void 0,n.state=void 0,n._callbacks=void 0,n.url=e,n.state=l.Disconnected,n._callbacks={},n}r=t,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,e(n,r);var c=o.prototype;return c.connect=function(t){var e=this;this.state=l.Connecting,this.ws=new WebSocket(this.url),this.ws.onopen=function(n){var r,o=p();t&&(e._callbacks[o]=t),null==(r=e.ws)||r.send(JSON.stringify({type:"connect",uuid:o}))},this.ws.onclose=function(t){e.state=l.Disconnected,e.dispatchEvent(new CustomEvent("disconnect"))},this.ws.onmessage=function(t){var n,r=JSON.parse(t.data);switch(r.type){case"set_response":if((n=r).uuid in e._callbacks){var o=e._callbacks[n.uuid];delete e._callbacks[n.uuid],o(null)}break;case"read_response":if((n=r).uuid in e._callbacks){var c=e._callbacks[n.uuid];delete e._callbacks[n.uuid];var i=Object.keys(n.values);c(null,i.length>1?n.values:n.values[i[0]])}break;case"clients_response":if((n=r).uuid in e._callbacks){var a=e._callbacks[n.uuid];delete e._callbacks[n.uuid],a(null,n.clients)}break;case"connect_response":if(n=r,e.state=l.Connected,console.log(n.uuid,e._callbacks,n.uuid in e._callbacks),n.uuid in e._callbacks){var u=e._callbacks[n.uuid];delete e._callbacks[n.uuid],u(null,n.initialValues,n.clients)}e.dispatchEvent(new CustomEvent("connect",{detail:n}));break;case"update":n=r,e.dispatchEvent(new CustomEvent("update",{detail:n}));break;case"error":if((n=r).uuid&&n.uuid in e._callbacks){var s=e._callbacks[n.uuid];delete e._callbacks[n.uuid],s(new Error(n.message))}e.dispatchEvent(new CustomEvent("error",{detail:n}))}},this.ws.onerror=function(t){var n={type:"error",message:String(t)};e.dispatchEvent(new CustomEvent("error",{detail:n}))}},c.set=function(t,e,n){var r,o,c=p();n&&(this._callbacks[c]=n);var i={type:"set",values:(r={},r[t]=String(e),r),uuid:c};null==(o=this.ws)||o.send(JSON.stringify(i))},c.read=function(t,e){var n,r=p();e&&(this._callbacks[r]=e),null==(n=this.ws)||n.send(JSON.stringify({type:"read",names:t?[t]:[],uuid:r}))},c.clients=function(t){var e,n=p();t&&(this._callbacks[n]=t),null==(e=this.ws)||e.send(JSON.stringify({type:"clients",uuid:n}))},c.disconnect=function(){var t;null==(t=this.ws)||t.close()},o}(/*#__PURE__*/o(EventTarget));module.exports=v;
//# sourceMappingURL=index.cjs.map
