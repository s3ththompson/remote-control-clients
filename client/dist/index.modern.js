var t;!function(t){t[t.CONNECTING=0]="CONNECTING",t[t.OPEN=1]="OPEN",t[t.CLOSED=2]="CLOSED"}(t||(t={}));class s extends EventTarget{constructor(s){super(),this.url=void 0,this.ws=void 0,this.state=void 0,this.url=s,this.state=t.CLOSED,this.addEventListener("message",t=>console.log(t))}connect(s){this.state=t.CONNECTING,this.ws=new WebSocket(this.url),this.ws.onopen=s=>{this.state=t.OPEN;const e=new Event("open");this.dispatchEvent(e)},this.ws.onclose=s=>{this.state=t.CLOSED;const e=new CloseEvent("close",{code:s.code});this.dispatchEvent(e)},this.ws.onmessage=t=>{const s=new MessageEvent("message",{data:t.data});this.dispatchEvent(s)},this.ws.onerror=t=>{this.dispatchEvent(t)};const e=new Event("connecting");this.dispatchEvent(e)}sendValue(t,s,e){var n;null==(n=this.ws)||n.send(JSON.stringify({name:t,value:s}))}on(t,s,e){return this.addEventListener(t,s,e)}off(t,s,e){return this.removeEventListener(t,s,e)}}export{s as default};
//# sourceMappingURL=index.modern.js.map
