/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=window,I=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),X=new WeakMap;class tt{constructor(t,e,i){if(this._$cssResult$=!0,i!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(e,t))}return t}toString(){return this.cssText}}const St=o=>new tt(typeof o=="string"?o:o+"",void 0,B),w=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new tt(e,o,B)},wt=(o,t)=>{I?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},et=I?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return St(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const H=window,it=H.trustedTypes,xt=it?it.emptyScript:"",st=H.reactiveElementPolyfillSupport,L={toAttribute(o,t){switch(t){case Boolean:o=o?xt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch(i){e=null}}return e}},ot=(o,t)=>t!==o&&(t==t||o==o),z={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:ot},V="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty(V))return!1;this[V]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(et(s))}else t!==void 0&&e.push(et(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=z){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:L;this._$El=r,this[r]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}b[V]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},st==null||st({ReactiveElement:b}),((D=H.reactiveElementVersions)!==null&&D!==void 0?D:H.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const R=window,A=R.trustedTypes,nt=A?A.createPolicy("lit-html",{createHTML:o=>o}):void 0,W="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+m,Ct=`<${rt}>`,g=document,x=()=>g.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",lt=Array.isArray,Pt=o=>lt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ht=/>/g,y=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,ut=/^(?:script|style|textarea|title)$/i,Nt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),$=Nt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),pt=new WeakMap,_=g.createTreeWalker(g,129,null,!1),kt=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=P;for(let l=0;l<e;l++){const a=o[l];let v,h,d=-1,p=0;for(;p<a.length&&(n.lastIndex=p,h=n.exec(a),h!==null);)p=n.lastIndex,n===P?h[1]==="!--"?n=at:h[1]!==void 0?n=ht:h[2]!==void 0?(ut.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=y):h[3]!==void 0&&(n=y):n===y?h[0]===">"?(n=s!=null?s:P,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?y:h[3]==='"'?dt:ct):n===dt||n===ct?n=y:n===at||n===ht?n=P:(n=y,s=void 0);const U=n===y&&o[l+1].startsWith("/>")?" ":"";r+=n===P?a+Ct:d>=0?(i.push(v),a.slice(0,d)+W+a.slice(d)+m+U):a+m+(d===-2?(i.push(void 0),l):U)}const c=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(c):c,i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const c=t.length-1,l=this.parts,[a,v]=kt(t,e);if(this.el=N.createElement(a,i),_.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=_.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(W)||d.startsWith(m)){const p=v[n++];if(h.push(d),p!==void 0){const U=s.getAttribute(p.toLowerCase()+W).split(m),M=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:M[2],strings:U,ctor:M[1]==="."?Ut:M[1]==="?"?Ot:M[1]==="@"?Ht:j})}else l.push({type:6,index:r})}for(const d of h)s.removeAttribute(d)}if(ut.test(s.tagName)){const h=s.textContent.split(m),d=h.length-1;if(d>0){s.textContent=A?A.emptyScript:"";for(let p=0;p<d;p++)s.append(h[p],x()),_.nextNode(),l.push({type:2,index:++r});s.append(h[d],x())}}}else if(s.nodeType===8)if(s.data===rt)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(m,h+1))!==-1;)l.push({type:7,index:r}),h+=m.length-1}r++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function S(o,t,e=o,i){var s,r,n,c;if(t===E)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=S(o,l._$AS(o,t.values),l,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);_.currentNode=r;let n=_.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new k(n,n.nextSibling,this,t):a.type===1?v=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(v=new Rt(n,this,t)),this._$AV.push(v),a=s[++l]}c!==(a==null?void 0:a.index)&&(n=_.nextNode(),c++)}return _.currentNode=g,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class k{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Pt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const n=new Tt(r,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new N(t)),e}T(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new k(this.k(x()),this.k(x()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class j{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=S(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const c=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=S(this,c[i+l],e,l),a===E&&(a=this._$AH[l]),n||(n=!C(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ut extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Mt=A?A.emptyScript:"";class Ot extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Mt):this.element.removeAttribute(this.name)}}class Ht extends j{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const vt=R.litHtmlPolyfillSupport;vt==null||vt(N,k),((G=R.litHtmlVersions)!==null&&G!==void 0?G:R.litHtmlVersions=[]).push("2.7.4");const jt=(o,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new k(t.insertBefore(x(),c),c,void 0,e!=null?e:{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,J;class f extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}f.finalized=!0,f._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:f});const $t=globalThis.litElementPolyfillSupport;$t==null||$t({LitElement:f}),((J=globalThis.litElementVersions)!==null&&J!==void 0?J:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=new WeakMap,mt=o=>{if((e=>e.pattern!==void 0)(o))return o.pattern;let t=ft.get(o);return t===void 0&&ft.set(o,t=new URLPattern({pathname:o.path})),t};class It{constructor(t,e,i){this.routes=[],this.o=[],this.t={},this.i=s=>{if(s.routes===this)return;const r=s.routes;this.o.push(r),r.l=this,s.stopImmediatePropagation(),s.onDisconnect=()=>{var c;(c=this.o)===null||c===void 0||c.splice(this.o.indexOf(r)>>>0,1)};const n=gt(this.t);n!==void 0&&r.goto(n)},(this.h=t).addController(this),this.routes=[...e],this.fallback=i==null?void 0:i.fallback}link(t){var e,i;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t!=null||(t=this.u),((i=(e=this.l)===null||e===void 0?void 0:e.link())!==null&&i!==void 0?i:"")+t}async goto(t){var e;let i;if(this.routes.length===0&&this.fallback===void 0)i=t,this.u="",this.t={0:i};else{const s=this.v(t);if(s===void 0)throw Error("No route found for "+t);const r=mt(s).exec({pathname:t}),n=(e=r==null?void 0:r.pathname.groups)!==null&&e!==void 0?e:{};if(i=gt(n),typeof s.enter=="function"&&await s.enter(n)===!1)return;this.p=s,this.t=n,this.u=i===void 0?t:t.substring(0,t.length-i.length)}if(i!==void 0)for(const s of this.o)s.goto(i);this.h.requestUpdate()}outlet(){var t,e;return(e=(t=this.p)===null||t===void 0?void 0:t.render)===null||e===void 0?void 0:e.call(t,this.t)}get params(){return this.t}v(t){const e=this.routes.find(i=>mt(i).test({pathname:t}));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.h.addEventListener(T.eventName,this.i);const t=new T(this);this.h.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)===null||t===void 0||t.call(this),this.l=void 0}}const gt=o=>{let t;for(const e of Object.keys(o))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&o[t]};class T extends Event{constructor(t){super(T.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}T.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=location.origin||location.protocol+"//"+location.host;class Dt extends It{constructor(){super(...arguments),this.m=t=>{const e=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const i=t.composedPath().find(n=>n.tagName==="A");if(i===void 0||i.target!==""||i.hasAttribute("download")||i.getAttribute("rel")==="external")return;const s=i.href;if(s===""||s.startsWith("mailto:"))return;const r=window.location;i.origin===Bt&&(t.preventDefault(),s!==r.href&&(window.history.pushState({},"",s),this.goto(i.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}const Lt=w`button{padding:8px 12px;font-size:16px;border-radius:6px;outline:0;cursor:pointer;color:#fff;background-color:#4078c0}button:hover{background-color:#5093e1}button:active{background-color:#305d8a}button[disabled]{opacity:.5;cursor:default}`;var zt=Object.defineProperty,Vt=(o,t,e)=>t in o?zt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Gt=(o,t,e)=>(Vt(o,typeof t!="symbol"?t+"":t,e),e);class yt extends f{static get styles(){return Lt}constructor(){super(),this.disabled=!1}render(){return $` <button @click="${this._onClick}" ?disabled="${this.disabled}"> <slot></slot> </button> `}_onClick(){this.dispatchEvent(new CustomEvent("gft-button-click",{bubbles:!0,composed:!0}))}}Gt(yt,"properties",{disabled:{type:Boolean}}),customElements.define("gft-button",yt);class Y{static savePlayerName(t){localStorage.setItem("playerName",t)}static getPlayerName(){return localStorage.getItem("playerName")}}var Wt=Object.defineProperty,qt=(o,t,e)=>t in o?Wt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,_t=(o,t,e)=>(qt(o,typeof t!="symbol"?t+"":t,e),e);class Z extends f{constructor(){super(),this.playerName="",this.error=""}handleInputChange(t){this.playerName=t.target.value,this.error=""}handleStartGame(){this.isValidPlayerName()?(Y.savePlayerName(this.playerName),window.location.href="/game"):this.error="Por favor, introduce un nombre v\xE1lido"}isValidPlayerName(){return this.playerName.trim()!==""}render(){return $`
      <h1>Bienvenido al juego "Toca al Topo"</h1>
      <label for="playerName">Introduce tu nombre:</label>
      <input
        id="playerName"
        type="text"
        .value=${this.playerName}
        @input=${this.handleInputChange}
      /><!--
      <button @click=${this.handleStartGame}>Iniciar juego</button>-->
      <gft-button @click=${this.handleStartGame}>Iniciar juego</gft-button>
      <p>${this.error}</p>
    `}}_t(Z,"styles",w``),_t(Z,"properties",{playerName:{type:String},error:{type:String}}),customElements.define("home-page",Z);var Kt=Object.defineProperty,Jt=(o,t,e)=>t in o?Kt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,bt=(o,t,e)=>(Jt(o,typeof t!="symbol"?t+"":t,e),e);class F extends f{constructor(){super(),this.hasMole=!1}handleClick(){if(this.hasMole){const t=new CustomEvent("cell-click",{bubbles:!0,composed:!0,detail:{hasMole:this.hasMole}});this.dispatchEvent(t)}}render(){return $` <div class="cell" @click="${this.handleClick}"> ${this.hasMole?$`<div class="mole">🦔</div>`:""} </div> `}}bt(F,"styles",w`.cell{width:100px;height:100px;background-color:#e0e0e0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color .3s ease-in-out}.mole{font-size:40px;animation:moleAnimation .3s infinite alternate}@keyframes moleAnimation{0%{transform:translateY(0)}100%{transform:translateY(-10px)}}`),bt(F,"properties",{hasMole:{type:Boolean}}),customElements.define("topo-cell",F);var Yt=Object.defineProperty,Zt=(o,t,e)=>t in o?Yt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,At=(o,t,e)=>(Zt(o,typeof t!="symbol"?t+"":t,e),e);class Q extends f{constructor(){super(),this.playerName=Y.getPlayerName(),this.gameStarted=!1,this.score=0,this.difficulty="bajo",this.cellsCount=9,this.isPlaying=!1,this.timerId=0}handleNameInputChange(t){this.playerName=t.target.value}handleStartGame(){this.isPlaying||(this.isPlaying=!0,console.log("hola"),this.score=0,this.updateMaxScore(),this.startGame())}startGame(){this.startMoleTimer()}stopGame(){this.isPlaying=!1,setTimeout(()=>{clearInterval(this.timerId),this.gameStarted=!1})}updateMaxScore(){this.score>this.maxScore&&(Y.saveMaxScore(this.score),this.maxScore=this.score)}handleCellClick(t){t.detail.hasMole&&(this.score+=this.getScoreByDifficulty(),t.detail.hasMole=!1)}handleDifficultyChange(t){this.difficulty=t.target.value}getScoreByDifficulty(){switch(this.difficulty){case"bajo":return 10;case"medio":return 20;case"alto":return 30;default:return 0}}startMoleTimer(){this.timerId=setInterval(()=>{const t=this.shadowRoot.querySelectorAll("topo-cell"),e=Math.floor(Math.random()*t.length);t.forEach((i,s)=>{i.hasMole=s===e})},this.getDifficultyTime())}getDifficultyTime(){switch(this.difficulty){case"bajo":return 1e3;case"medio":return 750;case"alto":return 500;default:return 0}}render(){return $`
      <h1>Bienvenido, ${this.playerName}!</h1>
      <p>Puntuación: ${this.score}</p>
      <!--<p>Puntuación máxima: ${this.maxScore}</p>-->
      <div>
        <label for="difficulty">Nivel de dificultad:</label>
        <select
          id="difficulty"
          @change=${t=>this.difficulty=t.target.value}
        >
          <option value="bajo">Bajo</option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>
      </div>
      <div class="container">
        ${Array.from({length:this.cellsCount}).map(()=>$` <topo-cell @cell-click="${this.handleCellClick}"></topo-cell> `)}
      </div>
      <button @click=${this.isPlaying?this.stopGame:this.handleStartGame}>
        ${this.isPlaying?"Parar":"Jugar"}
      </button>
    `}}At(Q,"styles",w`:host{display:block;text-align:center;padding:20px;background-color:#f5f5f5}h1{font-size:24px;margin-bottom:10px}p{font-size:18px;margin-bottom:10px}button{font-size:18px;padding:10px 20px;background-color:#4caf50;color:#fff;border:none;border-radius:4px;cursor:pointer}button:hover{background-color:#45a049}div{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;margin-top:20px}`),At(Q,"properties",{playerName:{type:String},gameStarted:{type:Boolean},score:{type:Number},difficulty:{type:String},isPalying:{type:Boolean}}),customElements.define("topo-game",Q);var Ft=Object.defineProperty,Qt=(o,t,e)=>t in o?Ft(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Xt=(o,t,e)=>(Qt(o,typeof t!="symbol"?t+"":t,e),e);class Et extends f{static get properties(){return{router:{type:Array}}}constructor(){super(),this.router=this._getRoutes(),console.log(this.routes)}_getRoutes(){return new Dt(this,[{path:"/game",render:()=>$`<topo-game></topo-game>`},{path:"*",render:()=>$`<home-page></home-page>`}])}render(){return $` <header>Toca al Topo</header> <main>${this.router.outlet()}</main> <footer>by adrián martínez fernández</footer> `}}Xt(Et,"styles",w`:host{display:flex;flex-direction:column;align-items:center;margin-top:32px}footer{position:fixed;bottom:0;margin-bottom:3%}`),customElements.define("app-loader",Et);