import{e as W,d as he}from"./q-CsYglpbX.js";import{u as pe}from"./q-CS8-Vk9R.js";import"./q-C7i0xNVT.js";/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ue=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],K=ue.join(","),se=typeof Element>"u",D=se?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,j=!se&&Element.prototype.getRootNode?function(r){var e;return r==null||(e=r.getRootNode)===null||e===void 0?void 0:e.call(r)}:function(r){return r==null?void 0:r.ownerDocument},M=function r(e,t){var a;t===void 0&&(t=!0);var u=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),c=u===""||u==="true",n=c||t&&e&&r(e.parentNode);return n},ge=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},ce=function(e,t,a){if(M(e))return[];var u=Array.prototype.slice.apply(e.querySelectorAll(K));return t&&D.call(e,K)&&u.unshift(e),u=u.filter(a),u},le=function r(e,t,a){for(var u=[],c=Array.from(e);c.length;){var n=c.shift();if(!M(n,!1))if(n.tagName==="SLOT"){var v=n.assignedElements(),f=v.length?v:n.children,p=r(f,!0,a);a.flatten?u.push.apply(u,p):u.push({scopeParent:n,candidates:p})}else{var N=D.call(n,K);N&&a.filter(n)&&(t||!e.includes(n))&&u.push(n);var w=n.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(n),F=!M(w,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(n));if(w&&F){var x=r(w===!0?n.children:w.children,!0,a);a.flatten?u.push.apply(u,x):u.push({scopeParent:n,candidates:x})}else c.unshift.apply(c,n.children)}}return u},de=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},R=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ge(e))&&!de(e)?0:e.tabIndex},ye=function(e,t){var a=R(e);return a<0&&t&&!de(e)?0:a},me=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},fe=function(e){return e.tagName==="INPUT"},we=function(e){return fe(e)&&e.type==="hidden"},Ne=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},Te=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},Fe=function(e){if(!e.name)return!0;var t=e.form||j(e),a=function(v){return t.querySelectorAll('input[type="radio"][name="'+v+'"]')},u;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")u=a(window.CSS.escape(e.name));else try{u=a(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var c=Te(u,e.form);return!c||c===e},Ee=function(e){return fe(e)&&e.type==="radio"},Se=function(e){return Ee(e)&&!Fe(e)},Re=function(e){var t,a=e&&j(e),u=(t=a)===null||t===void 0?void 0:t.host,c=!1;if(a&&a!==e){var n,v,f;for(c=!!((n=u)!==null&&n!==void 0&&(v=n.ownerDocument)!==null&&v!==void 0&&v.contains(u)||e!=null&&(f=e.ownerDocument)!==null&&f!==void 0&&f.contains(e));!c&&u;){var p,N,w;a=j(u),u=(p=a)===null||p===void 0?void 0:p.host,c=!!((N=u)!==null&&N!==void 0&&(w=N.ownerDocument)!==null&&w!==void 0&&w.contains(u))}}return c},te=function(e){var t=e.getBoundingClientRect(),a=t.width,u=t.height;return a===0&&u===0},De=function(e,t){var a=t.displayCheck,u=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var c=D.call(e,"details>summary:first-of-type"),n=c?e.parentElement:e;if(D.call(n,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof u=="function"){for(var v=e;e;){var f=e.parentElement,p=j(e);if(f&&!f.shadowRoot&&u(f)===!0)return te(e);e.assignedSlot?e=e.assignedSlot:!f&&p!==e.ownerDocument?e=p.host:e=f}e=v}if(Re(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return te(e);return!1},Pe=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var u=t.children.item(a);if(u.tagName==="LEGEND")return D.call(t,"fieldset[disabled] *")?!0:!u.contains(e)}return!0}t=t.parentElement}return!1},G=function(e,t){return!(t.disabled||M(t)||we(t)||De(t,e)||Ne(t)||Pe(t))},X=function(e,t){return!(Se(t)||R(t)<0||!G(e,t))},Ie=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},ke=function r(e){var t=[],a=[];return e.forEach(function(u,c){var n=!!u.scopeParent,v=n?u.scopeParent:u,f=ye(v,n),p=n?r(u.candidates):v;f===0?n?t.push.apply(t,p):t.push(v):a.push({documentOrder:c,tabIndex:f,item:u,isScope:n,content:p})}),a.sort(me).reduce(function(u,c){return c.isScope?u.push.apply(u,c.content):u.push(c.content),u},[]).concat(t)},Ce=function(e,t){t=t||{};var a;return t.getShadowRoot?a=le([e],t.includeContainer,{filter:X.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ie}):a=ce(e,t.includeContainer,X.bind(null,t)),ke(a)},Ae=function(e,t){t=t||{};var a;return t.getShadowRoot?a=le([e],t.includeContainer,{filter:G.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=ce(e,t.includeContainer,G.bind(null,t)),a},P=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return D.call(e,K)===!1?!1:X(t,e)},Oe=ue.concat("iframe").join(","),Y=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return D.call(e,Oe)===!1?!1:G(t,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function re(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),t.push.apply(t,a)}return t}function ae(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?re(Object(t),!0).forEach(function(a){xe(r,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(t,a))})}return r}function xe(r,e,t){return e=Be(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Le(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var a=t.call(r,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Be(r){var e=Le(r,"string");return typeof e=="symbol"?e:String(e)}var ne={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var u=e.indexOf(t);u===-1||e.splice(u,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},Ke=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},je=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},O=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},Me=function(e){return O(e)&&!e.shiftKey},Ge=function(e){return O(e)&&e.shiftKey},ie=function(e){return setTimeout(e,0)},oe=function(e,t){var a=-1;return e.every(function(u,c){return t(u)?(a=c,!1):!0}),a},A=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),u=1;u<t;u++)a[u-1]=arguments[u];return typeof e=="function"?e.apply(void 0,a):e},B=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Ue=[],qe=function(e,t){var a=(t==null?void 0:t.document)||document,u=(t==null?void 0:t.trapStack)||Ue,c=ae({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Me,isKeyBackward:Ge},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},v,f=function(o,i,s){return o&&o[i]!==void 0?o[i]:c[s||i]},p=function(o,i){var s=typeof(i==null?void 0:i.composedPath)=="function"?i.composedPath():void 0;return n.containerGroups.findIndex(function(l){var d=l.container,h=l.tabbableNodes;return d.contains(o)||(s==null?void 0:s.includes(d))||h.find(function(g){return g===o})})},N=function(o){var i=c[o];if(typeof i=="function"){for(var s=arguments.length,l=new Array(s>1?s-1:0),d=1;d<s;d++)l[d-1]=arguments[d];i=i.apply(void 0,l)}if(i===!0&&(i=void 0),!i){if(i===void 0||i===!1)return i;throw new Error("`".concat(o,"` was specified but was not a node, or did not return a node"))}var h=i;if(typeof i=="string"&&(h=a.querySelector(i),!h))throw new Error("`".concat(o,"` as selector refers to no known node"));return h},w=function(){var o=N("initialFocus");if(o===!1)return!1;if(o===void 0||!Y(o,c.tabbableOptions))if(p(a.activeElement)>=0)o=a.activeElement;else{var i=n.tabbableGroups[0],s=i&&i.firstTabbableNode;o=s||N("fallbackFocus")}if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o},F=function(){if(n.containerGroups=n.containers.map(function(o){var i=Ce(o,c.tabbableOptions),s=Ae(o,c.tabbableOptions),l=i.length>0?i[0]:void 0,d=i.length>0?i[i.length-1]:void 0,h=s.find(function(y){return P(y)}),g=s.slice().reverse().find(function(y){return P(y)}),m=!!i.find(function(y){return R(y)>0});return{container:o,tabbableNodes:i,focusableNodes:s,posTabIndexesFound:m,firstTabbableNode:l,lastTabbableNode:d,firstDomTabbableNode:h,lastDomTabbableNode:g,nextTabbableNode:function(S){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,T=i.indexOf(S);return T<0?k?s.slice(s.indexOf(S)+1).find(function(C){return P(C)}):s.slice(0,s.indexOf(S)).reverse().find(function(C){return P(C)}):i[T+(k?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(o){return o.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!N("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(o){return o.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},x=function b(o){var i=o.activeElement;if(i)return i.shadowRoot&&i.shadowRoot.activeElement!==null?b(i.shadowRoot):i},E=function b(o){if(o!==!1&&o!==x(document)){if(!o||!o.focus){b(w());return}o.focus({preventScroll:!!c.preventScroll}),n.mostRecentlyFocusedNode=o,Ke(o)&&o.select()}},Z=function(o){var i=N("setReturnFocus",o);return i||(i===!1?!1:o)},Q=function(o){var i=o.target,s=o.event,l=o.isBackward,d=l===void 0?!1:l;i=i||B(s),F();var h=null;if(n.tabbableGroups.length>0){var g=p(i,s),m=g>=0?n.containerGroups[g]:void 0;if(g<0)d?h=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:h=n.tabbableGroups[0].firstTabbableNode;else if(d){var y=oe(n.tabbableGroups,function(q){var V=q.firstTabbableNode;return i===V});if(y<0&&(m.container===i||Y(i,c.tabbableOptions)&&!P(i,c.tabbableOptions)&&!m.nextTabbableNode(i,!1))&&(y=g),y>=0){var S=y===0?n.tabbableGroups.length-1:y-1,k=n.tabbableGroups[S];h=R(i)>=0?k.lastTabbableNode:k.lastDomTabbableNode}else O(s)||(h=m.nextTabbableNode(i,!1))}else{var T=oe(n.tabbableGroups,function(q){var V=q.lastTabbableNode;return i===V});if(T<0&&(m.container===i||Y(i,c.tabbableOptions)&&!P(i,c.tabbableOptions)&&!m.nextTabbableNode(i))&&(T=g),T>=0){var C=T===n.tabbableGroups.length-1?0:T+1,ee=n.tabbableGroups[C];h=R(i)>=0?ee.firstTabbableNode:ee.firstDomTabbableNode}else O(s)||(h=m.nextTabbableNode(i))}}else h=N("fallbackFocus");return h},L=function(o){var i=B(o);if(!(p(i,o)>=0)){if(A(c.clickOutsideDeactivates,o)){v.deactivate({returnFocus:c.returnFocusOnDeactivate});return}A(c.allowOutsideClick,o)||o.preventDefault()}},z=function(o){var i=B(o),s=p(i,o)>=0;if(s||i instanceof Document)s&&(n.mostRecentlyFocusedNode=i);else{o.stopImmediatePropagation();var l,d=!0;if(n.mostRecentlyFocusedNode)if(R(n.mostRecentlyFocusedNode)>0){var h=p(n.mostRecentlyFocusedNode),g=n.containerGroups[h].tabbableNodes;if(g.length>0){var m=g.findIndex(function(y){return y===n.mostRecentlyFocusedNode});m>=0&&(c.isKeyForward(n.recentNavEvent)?m+1<g.length&&(l=g[m+1],d=!1):m-1>=0&&(l=g[m-1],d=!1))}}else n.containerGroups.some(function(y){return y.tabbableNodes.some(function(S){return R(S)>0})})||(d=!1);else d=!1;d&&(l=Q({target:n.mostRecentlyFocusedNode,isBackward:c.isKeyBackward(n.recentNavEvent)})),E(l||n.mostRecentlyFocusedNode||w())}n.recentNavEvent=void 0},ve=function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=o;var s=Q({event:o,isBackward:i});s&&(O(o)&&o.preventDefault(),E(s))},J=function(o){if(je(o)&&A(c.escapeDeactivates,o)!==!1){o.preventDefault(),v.deactivate();return}(c.isKeyForward(o)||c.isKeyBackward(o))&&ve(o,c.isKeyBackward(o))},$=function(o){var i=B(o);p(i,o)>=0||A(c.clickOutsideDeactivates,o)||A(c.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())},H=function(){if(n.active)return ne.activateTrap(u,v),n.delayInitialFocusTimer=c.delayInitialFocus?ie(function(){E(w())}):E(w()),a.addEventListener("focusin",z,!0),a.addEventListener("mousedown",L,{capture:!0,passive:!1}),a.addEventListener("touchstart",L,{capture:!0,passive:!1}),a.addEventListener("click",$,{capture:!0,passive:!1}),a.addEventListener("keydown",J,{capture:!0,passive:!1}),v},_=function(){if(n.active)return a.removeEventListener("focusin",z,!0),a.removeEventListener("mousedown",L,!0),a.removeEventListener("touchstart",L,!0),a.removeEventListener("click",$,!0),a.removeEventListener("keydown",J,!0),v},be=function(o){var i=o.some(function(s){var l=Array.from(s.removedNodes);return l.some(function(d){return d===n.mostRecentlyFocusedNode})});i&&E(w())},U=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(be):void 0,I=function(){U&&(U.disconnect(),n.active&&!n.paused&&n.containers.map(function(o){U.observe(o,{subtree:!0,childList:!0})}))};return v={get active(){return n.active},get paused(){return n.paused},activate:function(o){if(n.active)return this;var i=f(o,"onActivate"),s=f(o,"onPostActivate"),l=f(o,"checkCanFocusTrap");l||F(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=a.activeElement,i==null||i();var d=function(){l&&F(),H(),I(),s==null||s()};return l?(l(n.containers.concat()).then(d,d),this):(d(),this)},deactivate:function(o){if(!n.active)return this;var i=ae({onDeactivate:c.onDeactivate,onPostDeactivate:c.onPostDeactivate,checkCanReturnFocus:c.checkCanReturnFocus},o);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,_(),n.active=!1,n.paused=!1,I(),ne.deactivateTrap(u,v);var s=f(i,"onDeactivate"),l=f(i,"onPostDeactivate"),d=f(i,"checkCanReturnFocus"),h=f(i,"returnFocus","returnFocusOnDeactivate");s==null||s();var g=function(){ie(function(){h&&E(Z(n.nodeFocusedBeforeActivation)),l==null||l()})};return h&&d?(d(Z(n.nodeFocusedBeforeActivation)).then(g,g),this):(g(),this)},pause:function(o){if(n.paused||!n.active)return this;var i=f(o,"onPause"),s=f(o,"onPostPause");return n.paused=!0,i==null||i(),_(),I(),s==null||s(),this},unpause:function(o){if(!n.paused||!n.active)return this;var i=f(o,"onUnpause"),s=f(o,"onPostUnpause");return n.paused=!1,i==null||i(),F(),H(),I(),s==null||s(),this},updateContainerElements:function(o){var i=[].concat(o).filter(Boolean);return n.containers=i.map(function(s){return typeof s=="string"?a.querySelector(s):s}),n.active&&F(),I(),this}},v.updateContainerElements(e),v};const Xe=r=>{r.dataset.closing="",r.classList.add("modal-closing");const{animationDuration:e,transitionDuration:t}=getComputedStyle(r);e!=="0s"&&r.addEventListener("animationend",a=>{a.target===r&&(delete r.dataset.closing,r.classList.remove("modal-closing"),W(r),r.close())},{once:!0}),t!=="0s"&&r.addEventListener("transitionend",a=>{a.target===r&&(delete r.dataset.closing,r.classList.remove("modal-closing"),W(r),r.close())},{once:!0}),e==="0s"&&t==="0s"&&(delete r.dataset.closing,r.classList.remove("modal-closing"),W(r),r.close())},Ze=r=>qe(r,{escapeDeactivates:!1}),Qe=r=>{try{r==null||r.activate()}catch{}},ze=r=>{r==null||r.deactivate(),r=null},Je=async r=>{he(r,{reserveScrollBarGap:!0}),r.showModal()},$e=async r=>{const[e]=pe();await e(r)},He=(r,e)=>{if(!r)return!1;const t=r.getBoundingClientRect(),a=t.left>e.clientX||t.right<e.clientX||t.top>e.clientY||t.bottom<e.clientY;return e.pointerId===-1?!1:a};export{Xe as s_5nm8t00SlvQ,He as s_66TWqTR2fAM,$e as s_Aw9R9GEZEU4,ze as s_BJ0kPOksNbA,Ze as s_LpIaeWijPdE,Je as s_YgROFWWoxVs,Qe as s_q0s6Q7dk66A};