/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}function e(t,e,s,i){return new(s||(s=Promise))((function(n,r){function o(t){try{l(i.next(t))}catch(t){r(t)}}function a(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){t.done?n(t.value):new s((function(e){e(t.value)})).then(o,a)}l((i=i.apply(t,e||[])).next())}))}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=new WeakMap,i=t=>"function"==typeof t&&s.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null,i=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,i),e=s}},o=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,h=new RegExp(`${c}|${d}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:d}}=t;for(;a<d;){const t=n.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)f(e[t].name,u)&&i++;for(;i-- >0;){const e=l[a],s=v.exec(e)[2],i=s.toLowerCase()+u,n=t.getAttribute(i);t.removeAttribute(i);const r=n.split(h);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const i=t.parentNode,n=e.split(h),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=m();else{const t=v.exec(r);null!==t&&f(t[2],u)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-u.length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===n[r]?(i.insertBefore(m(),t),s.push(t)):t.data=n[r],a+=r}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(m(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const f=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},g=t=>-1!==t.index,m=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(r=s[o],g(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${c} `;class S{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const r=v.exec(t);e+=null===r?t+(s?y:d):t.substr(0,r.index)+r[1]+r[2]+u+r[3]+c}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class b extends S{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),r(e,s.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(w(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||w(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const s=new _(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new N(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class A extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends C{}let L=!1;try{const t={get capture(){return L=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class V{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(L?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new A(t,e.slice(1),s).parts}return"@"===n?[new V(t,e.slice(1),i.eventContext)]:"?"===n?[new T(t,e.slice(1),s)]:new P(t,e,s).parts}handleTextExpression(t){return new N(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=U.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(c);return s=e.keyString.get(i),void 0===s&&(s=new p(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const U=new Map,$=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const j=(t,...e)=>new S(t,e,"html",R),M=(t,...e)=>new b(t,e,"svg",R),z=133;function q(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,z,null,!1);let r=B(i),o=i[r],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=B(i,r),o=i[r]}c.forEach(t=>t.parentNode.removeChild(t))}const I=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,z,null,!1);for(;s.nextNode();)e++;return e},B=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(g(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const W=t=>e=>{const s=F(e.type,t);let i=U.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},U.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(c);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(s,t),n=new p(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},D=["html","svg"],J=new Set,G=(t,e,s)=>{J.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{D.forEach(e=>{const s=U.get(F(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),q(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,z,null,!1);let o=B(n),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===s&&(a=I(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=B(n,o);return}o=B(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),q(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const K={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Q=(t,e)=>e!==t&&(e==e||t==t),X={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Q},Y=Promise.resolve(!0),Z=1,tt=4,et=8,st=16,it=32,nt="finalized";class rt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=X){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(nt)||t.finalize(),this[nt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=Q){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||K,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||K.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|it,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=X){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|et,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~et}}_attributeToProperty(t,e){if(this._updateState&et)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||X;this._updateState=this._updateState|st,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~st}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||X;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&st||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|tt;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&it}get _hasRequestedUpdate(){return this._updateState&tt}get hasUpdated(){return this._updateState&Z}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Z||(this._updateState=this._updateState|Z,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~tt}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}rt[nt]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ot=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}}),at=(t,e,s)=>{e.constructor.createProperty(s,t)};function lt(t){return(e,s)=>void 0!==s?at(t,e,s):ot(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ct="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol();class ht{constructor(t,e){if(e!==dt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ct?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ut=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof ht)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new ht(s,dt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const pt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);class ft extends rt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){pt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ct?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof S&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ft.finalized=!0,ft.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=$.has(e),r=H&&11===e.nodeType&&!!e.host,a=r&&!J.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=$.get(e);void 0===i&&(o(e,e.firstChild),$.set(e,i=new N(Object.assign({templateFactory:O},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:W(i)},s)),a){const t=$.get(l);$.delete(l);const s=t.value instanceof _?t.value.template:void 0;G(i,l,s),o(e,e.firstChild),e.appendChild(l),$.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};const gt=(t,s)=>{let i;return{read:()=>e(void 0,void 0,void 0,(function*(){i=i||(yield t.getCharacteristic(s));const e=yield i.readValue();return{red:e.getUint8(0),green:e.getUint8(1),blue:e.getUint8(2)}})),write:({red:n,green:r,blue:o})=>e(void 0,void 0,void 0,(function*(){const e=new Uint8Array(3);return e[0]=n,e[1]=r,e[2]=o,i=i||(yield t.getCharacteristic(s)),i.writeValue(e)}))}},mt=(t,s)=>{let i;return{write:n=>e(void 0,void 0,void 0,(function*(){const e=new Uint16Array(1);return e[0]=n,i=i||(yield t.getCharacteristic(s)),i.writeValue(e)}))}},vt=(t,s)=>{let i;return{now:()=>e(void 0,void 0,void 0,(function*(){return i=i||(yield t.getCharacteristic(s)),i.writeValue((()=>{const t=new Uint8Array([0,0,0,0,0,0,0,0]),e=(Date.now()+6e4*(new Date).getTimezoneOffset()).toString(16);let s=e.length-1,i=t.length-1;for(;s>=0;)t[i]=parseInt(`${e[s-1]||0}${e[s]}`,16),i-=1,s-=2;return t})())}))}},_t="42230200-2342-2342-2342-234223422342";class yt{constructor(t){this.service=t,this.vibrate=mt(this.service,"4223020f-2342-2342-2342-234223422342").write,this.bottomLeftLed=gt(this.service,"42230211-2342-2342-2342-234223422342"),this.bottomRightLed=gt(this.service,"42230212-2342-2342-2342-234223422342"),this.topLeftLed=gt(this.service,"42230214-2342-2342-2342-234223422342"),this.topRightLed=gt(this.service,"42230213-2342-2342-2342-234223422342"),this.clock=vt(this.service,"42230201-2342-2342-2342-234223422342")}}const St=!!navigator.bluetooth;function bt(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{red:parseInt(e[1],16),green:parseInt(e[2],16),blue:parseInt(e[3],16)}:{red:0,green:0,blue:0}}const wt=({screen:t=j``,topLeftLed:e=j``,topRightLed:s=j``,bottomLeftLed:i=j``,bottomRightLed:n=j``,vibrationMotor:r=j``})=>M`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 444">
		<rect width="500" height="400" x="2" y="22" fill="none" stroke="currentColor" stroke-width="2" ry="20"/>
		<path fill="currentColor" transform="translate(2 30)" d="M24.2 89.3l-.1.2V90.2l-.3 1.7c-.2 1.4-.5 3.5-1 5.7-.7 4.5-2 9.8-3.2 12.4-2.4 5-6.4 8.5-9.7 11.7a21.6 21.6 0 00-4 4.8 6.9 6.9 0 00-.5 6c2.5 6.4 9 9.2 15.6 11.2s13.5 3.5 17.6 6.4c12.3 8.8 11.9 21.7 5.8 29.3-3.4 4.3-11.4 7.2-19.5 7.3-8.1.2-16-2.2-19.5-7a18.9 18.9 0 01-2.7-5.1v6.3l.3.4c4.4 6.2 13.2 8.6 22 8.4 8.6-.2 17.3-3 21.7-8.5 7-8.9 7-23.9-6.4-33.5-5-3.5-12-4.8-18.4-6.8-6.4-2-11.8-4.5-13.8-9.5-.5-1.3-.4-2.2.3-3.4.6-1.3 2-2.6 3.5-4.2 3.2-3.1 7.6-6.9 10.3-12.5 1.4-2.8 2.2-7 3-11a94 94 0 002.3 10.8c1 3.3 3 6.1 6.1 9.7 3.1 3.5 7.5 8 13.7 14.7 19.6 21.4 22.3 56.8 19.2 88.8a315 315 0 01-7.8 44.6 59.3 59.3 0 00-33.1-9.8c-8.4 0-16 1.3-22.9 3.7v3a66.7 66.7 0 0122.9-3.7c12.4 0 23.3 3.5 32.3 9.6-2.3 8.9-4.6 17.2-5.6 20.1a1.5 1.5 0 102.8 1c1-2.9 3.2-11 5.3-19.2a58.6 58.6 0 0118.9 25.9c8 21 6.2 48.8-9.2 77.4 2-18.5 1.7-36.4-2-50-2-7.6-5-14-9.5-18.3a20 20 0 00-17-5.6c-4.4.5-7.5 4.2-9.6 9.3-2.1 5-3.5 11.9-4.4 19.7-1.3 10.3-2 22.4-2.5 34.4-1.3-11-2.8-21.5-4.7-30.7-3-14.5-6.5-25.7-11-31.1a1.5 1.5 0 10-2.2 1.8c3.6 4.4 7.4 15.6 10.3 29.8 3 14.3 5.2 31.7 6.6 49.1a1.5 1.5 0 003 0c1-17.8 1.4-37.5 3.4-53 1-7.6 2.3-14.3 4.2-19 2-4.6 4.3-7 7.2-7.4 6.1-.8 10.8 1 14.7 4.8 3.8 3.7 6.8 9.6 8.8 17 4 14.8 4 35.3 1 56.1a1.5 1.5 0 002.8 1c19-31.5 21.7-62.8 12.8-86.4a61.4 61.4 0 00-20.7-27.8c3.1-12.6 6.4-28.2 8.1-46 3.1-32.4.7-68.7-20-91.1-6.2-6.8-10.6-11.2-13.6-14.7-3-3.4-4.6-5.8-5.5-8.6A94.2 94.2 0 0127 89.8v-.4l-2.8-.1zm-21.5 56v3.6a5 5 0 011 2.2c.6 3 0 5.7-1 8.2v8.3l.6-2c1.6-4.2 4.5-8.8 3.2-15-.4-2.5-1.9-4.5-3.8-5.4zM27.5 277h-3.4c-7.3.6-15.3 3.1-21.4 8v5.1a34.9 34.9 0 0032.8 4c4.2-1.9 7.2-5 7.1-8.6 0-1.7-.7-3.1-1.8-4.3-1.1-1.1-2.6-2-4.3-2.6-2.5-1-5.6-1.5-9-1.6zm0 3c3.1 0 5.9.5 8 1.3 1.4.5 2.5 1.2 3.2 2 .6.7 1 1.4 1 2.3 0 2-1.8 4.2-5.4 5.9A32 32 0 014 287.8a36.6 36.6 0 0120.2-7.7h3.2z"/>
		<path fill="currentColor" transform="translate(24 30)" d="M455.4 10.6a1.3 1.3 0 00-1.2 2c4.4 8.7 7.8 18.8 9.6 30.4-29.4 18.4-42 50.7-41.1 92.8.3 14.8 2.3 30.8 5.8 48-25 34.8-28.3 71.1-21.6 106.3a1.3 1.3 0 002.1.8c13.1-10 26-23.1 37.7-42.6 4.7 13.6 10 27.6 16 42a1.3 1.3 0 002.5 0l9.5-26.3v-8l-10.8 30c-23.7-58-37.6-109.2-38.5-150.3-1-41 11-71.7 38.8-89.7 1.4 10.5 1.5 22.2 0 35-9.9-.1-19.5 4-24.1 10.1a1.3 1.3 0 102.1 1.6c3.8-5 12.7-9 21.7-9l-.5 4.2a1.3 1.3 0 00-.1.5c-1 7-2.6 14.3-4.6 22l-.7 3.3c-6.5-1.4-12.2-4-16-7.2a1.3 1.3 0 00-.8-.4 1.3 1.3 0 00-.9 2.4 39.8 39.8 0 0017 7.8l-1 6.2a1.4 1.4 0 00-.2 1 140.5 140.5 0 004.3 57.3 35 35 0 00-11.2 12.7 1.3 1.3 0 102.3 1.3 32 32 0 019.7-11.3c2.3 8.2 4.8 14.3 6 16.6a1.3 1.3 0 002.3-1.2 137 137 0 01-9.4-31 138.4 138.4 0 01-1.4-43.2c5.8.4 11.1.5 16-1V121a39.6 39.6 0 01-15.6 1 108 108 0 012.2-10.8c2-7.5 3.4-14.5 4.5-21.4 3.3.2 6.3.9 8.9 1.9v-2.9a31 31 0 00-8.5-1.6l.5-4.2a1.3 1.3 0 00.1-.6c1.5-12.8 1.5-24.5.3-35 2.7 2.3 5.2 4.7 7.6 7.2v-3.9c-2.6-2.5-5.2-5-8.2-7.4-1.8-12.1-5.2-22.7-9.9-31.8a1.3 1.3 0 00-1.2-.8zm-26.2 176.8c1.9 8.7 4.1 17.7 6.7 27a103.8 103.8 0 01-11.9 23.3 1.3 1.3 0 102.3 1.5 106.2 106.2 0 0010.9-20.4c2.5 8.5 5.3 17.3 8.4 26.3a145 145 0 01-36.4 42.2c-6-33.2-2.6-67 20-100z"/>
		<foreignobject class="node" width="300" height="150" x="102" y="150">
			${t}
		</foreignobject>
		<foreignobject class="node" width="40" height="40" x="82" y="2">
			${e}
		</foreignobject>
		<foreignobject class="node" width="40" height="40" x="382" y="2">
			${s}
		</foreignobject>
		<foreignobject class="node" width="40" height="40" x="82" y="402">
			${i}
		</foreignobject>
		<foreignobject class="node" width="40" height="40" x="382" y="402">
			${n}
		</foreignobject>
		<foreignobject class="node" width="40" height="80" x="462" y="280">
			${r}
		</foreignobject>
	</svg>
`;class xt extends ft{constructor(){super(...arguments),this.error=""}static get styles(){return ut`
			* {
				box-sizing: border-box;
			}
			svg {
				color: #888;
				width: 100%;
			}
			svg button,
			svg input {
				width: 100%;
				height: 100%;
				font: inherit;
			}
			button.connect {
				font-size: 2em;
			}
			.rotate {
				display: block;
				transform: rotate(-90deg) translate(-50%);
			}
			label.hidden {
				display: block;
				width: 0;
				height: 0;
			}
		`}render(){return j`
			${this.error?j`
						<div class="error">${this.error}</div>
				  `:""}
			${this.card?wt({screen:j`
							<button
								@click=${()=>{var t;null===(t=this.card)||void 0===t||t.clock.now()}}
							>
								Set current time
							</button>
						`,topLeftLed:j`
							<label class="hidden" for="topLeftLed">
								set top left led color
							</label>
							<input
								id="topLeftLed"
								type="color"
								@input=${t=>e(this,void 0,void 0,(function*(){var e;if(t.target){const s=bt(t.target.value);yield null===(e=this.card)||void 0===e?void 0:e.topLeftLed.write(s)}}))}
							/>
						`,topRightLed:j`
							<label class="hidden" for="topRightLed">
								set top right led color
							</label>
							<input
								id="topRightLed"
								type="color"
								@input=${t=>e(this,void 0,void 0,(function*(){var e;if(t.target){const s=bt(t.target.value);yield null===(e=this.card)||void 0===e?void 0:e.topRightLed.write(s)}}))}
							/>
						`,bottomLeftLed:j`
							<label class="hidden" for="bottomLeftLed">
								set bottom left led color
							</label>
							<input
								id="bottomLeftLed"
								type="color"
								@input=${t=>e(this,void 0,void 0,(function*(){var e;if(t.target){const s=bt(t.target.value);yield null===(e=this.card)||void 0===e?void 0:e.bottomLeftLed.write(s)}}))}
							/>
						`,bottomRightLed:j`
							<label class="hidden" for="bottomRightLed">
								set bottom right led color
							</label>
							<input
								id="bottomRightLed"
								type="color"
								@input=${t=>e(this,void 0,void 0,(function*(){var e;if(t.target){const s=bt(t.target.value);yield null===(e=this.card)||void 0===e?void 0:e.bottomRightLed.write(s)}}))}
							/>
						`,vibrationMotor:j`
							<button
								@click=${()=>{var t;null===(t=this.card)||void 0===t||t.vibrate(1e3)}}
							>
								<span class="rotate">vibrate</span>
							</button>
						`}):wt({screen:j`
							<button class="connect" @click=${this.connect}>
								connect
							</button>
						`})}
		`}connect(){return e(this,void 0,void 0,(function*(){try{this.clearError(),this.card=yield function(t=(()=>{})){return e(this,void 0,void 0,(function*(){console.log("Requesting Bluetooth Device...");const e=yield navigator.bluetooth.requestDevice({filters:[{services:[_t]},{namePrefix:"card10"}],optionalServices:[_t,"battery_service"]});if(console.log("Connected to:"+e.name),e.addEventListener("gattserverdisconnected",t),console.log("Connecting to GATT Server..."),!e.gatt)throw Error("no gatt server available");const s=yield e.gatt.connect();console.log("Getting Service...");const i=yield s.getPrimaryService(_t),n=new yt(i);return yield n.vibrate(100),console.log("BT initialized"),n}))}(()=>this.card=null)}catch(t){this.error=t}}))}clearError(){this.error=""}}t([lt({type:String})],xt.prototype,"error",void 0),t([lt({attribute:!1})],xt.prototype,"card",void 0),St&&customElements.define("my-app",xt);
//# sourceMappingURL=app.js.map
