var j=Object.defineProperty,z=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t,o)=>(z(e,typeof t!="symbol"?t+"":t,o),o),M=class extends Event{constructor(e,{oldState:t="",newState:o="",...r}={}){super(e,r),x(this,"oldState"),x(this,"newState"),this.oldState=String(t||""),this.newState=String(o||"")}},I=new WeakMap;function q(e,t,o){I.set(e,setTimeout(()=>{I.has(e)&&e.dispatchEvent(new M("toggle",{cancelable:!1,oldState:t,newState:o}))},0))}var H=globalThis.ShadowRoot||function(){},V=globalThis.HTMLDialogElement||function(){},m=new WeakMap,c=new WeakMap,b=new WeakMap;function E(e){return b.get(e)||"hidden"}var y=new WeakMap;function B(e){const t=e.popoverTargetElement;if(!(t instanceof HTMLElement))return;const o=E(t);e.popoverTargetAction==="show"&&o==="showing"||e.popoverTargetAction==="hide"&&o==="hidden"||(o==="showing"?w(t,!0,!0):d(t,!1)&&(y.set(t,e),D(t)))}function d(e,t){return!(e.popover!=="auto"&&e.popover!=="manual"||!e.isConnected||t&&E(e)!=="showing"||!t&&E(e)!=="hidden"||e instanceof V&&e.hasAttribute("open")||document.fullscreenElement===e)}function R(e){return e?Array.from(c.get(e.ownerDocument)||[]).indexOf(e)+1:0}function G(e){const t=C(e),o=K(e);return R(t)>R(o)?t:o}function S(e){const t=c.get(e);for(const o of t||[])if(!o.isConnected)t.delete(o);else return o;return null}function g(e){return typeof e.getRootNode=="function"?e.getRootNode():e.parentNode?g(e.parentNode):e}function C(e){for(;e;){if(e instanceof HTMLElement&&e.popover==="auto"&&b.get(e)==="showing")return e;if(e=e.parentElement||g(e),e instanceof H&&(e=e.host),e instanceof Document)return}}function K(e){for(;e;){const t=e.popoverTargetElement;if(t instanceof HTMLElement)return t;if(e=e.parentElement||g(e),e instanceof H&&(e=e.host),e instanceof Document)return}}function Q(e){const t=new Map;let o=0;const r=e.ownerDocument;for(const u of c.get(r)||[])t.set(u,o),o+=1;t.set(e,o),o+=1;let i=null;function s(u){const p=C(u);if(p===null)return null;const n=t.get(p);(i===null||t.get(i)<n)&&(i=p)}return s(e==null?void 0:e.parentElement),i}function U(e){return e.hidden||e instanceof H||(e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLOptGroupElement||e instanceof HTMLOptionElement||e instanceof HTMLFieldSetElement)&&e.disabled||e instanceof HTMLInputElement&&e.type==="hidden"||e instanceof HTMLAnchorElement&&e.href===""?!1:typeof e.tabIndex=="number"&&e.tabIndex!==-1}function $(e){if(e.shadowRoot&&e.shadowRoot.delegatesFocus!==!0)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);let o=t.querySelector("[autofocus]");if(o)return o;{const s=t.querySelectorAll("slot");for(const u of s){const p=u.assignedElements({flatten:!0});for(const n of p){if(n.hasAttribute("autofocus"))return n;if(o=n.querySelector("[autofocus]"),o)return o}}}const r=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let i=r.currentNode;for(;i;){if(U(i))return i;i=r.nextNode()}}function J(e){var t;(t=$(e))==null||t.focus()}var A=new WeakMap;function D(e){if(!d(e,!1))return;const t=e.ownerDocument;if(!e.dispatchEvent(new M("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!d(e,!1))return;let o=!1;if(e.popover==="auto"){const i=e.getAttribute("popover"),s=Q(e)||t;if(L(s,!1,!0),i!==e.getAttribute("popover")||!d(e,!1))return}S(t)||(o=!0),A.delete(e);const r=t.activeElement;e.classList.add(":popover-open"),b.set(e,"showing"),m.has(t)||m.set(t,new Set),m.get(t).add(e),J(e),e.popover==="auto"&&(c.has(t)||c.set(t,new Set),c.get(t).add(e),_(y.get(e),!0)),o&&r&&e.popover==="auto"&&A.set(e,r),q(e,"closed","open")}function w(e,t=!1,o=!1){var s,u;if(!d(e,!0))return;const r=e.ownerDocument;if(e.popover==="auto"&&(L(e,t,o),!d(e,!0))||(_(y.get(e),!1),y.delete(e),o&&(e.dispatchEvent(new M("beforetoggle",{oldState:"open",newState:"closed"})),!d(e,!0))))return;(s=m.get(r))==null||s.delete(e),(u=c.get(r))==null||u.delete(e),e.classList.remove(":popover-open"),b.set(e,"hidden"),o&&q(e,"open","closed");const i=A.get(e);i&&(A.delete(e),t&&i.focus())}function F(e,t=!1,o=!1){let r=S(e);for(;r;)w(r,t,o),r=S(e)}function L(e,t,o){var u;const r=e.ownerDocument||e;if(e instanceof Document)return F(r,t,o);let i=null,s=!1;for(const p of c.get(r)||[])if(p===e)s=!0;else if(s){i=p;break}if(!s)return F(r,t,o);for(;i&&E(i)==="showing"&&((u=c.get(r))!=null&&u.size);)w(i,t,o)}var T=new WeakMap;function N(e){if(!e.isTrusted)return;const t=e.composedPath()[0];if(!t)return;const o=t.ownerDocument;if(!S(o))return;const i=G(t);if(i&&e.type==="pointerdown")T.set(o,i);else if(e.type==="pointerup"){const s=T.get(o)===i;T.delete(o),s&&L(i||o,!1,!0)}}var P=new WeakMap;function _(e,t=!1){if(!e)return;P.has(e)||P.set(e,e.getAttribute("aria-expanded"));const o=e.popoverTargetElement;if(o instanceof HTMLElement&&o.popover==="auto")e.setAttribute("aria-expanded",String(t));else{const r=P.get(e);r?e.setAttribute("aria-expanded",r):e.removeAttribute("aria-expanded")}}var O=globalThis.ShadowRoot||function(){};function X(){return typeof HTMLElement<"u"&&typeof HTMLElement.prototype=="object"&&"popover"in HTMLElement.prototype}function f(e,t,o){const r=e[t];Object.defineProperty(e,t,{value(i){return r.call(this,o(i))}})}var Y=/(^|[^\\]):popover-open\b/g,W=`
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }
`,h=null;function k(e){if(h===null)try{h=new CSSStyleSheet,h.replaceSync(W)}catch{h=!1}if(h===!1){const t=document.createElement("style");t.textContent=W,e instanceof Document?e.head.prepend(t):e.prepend(t)}else e.adoptedStyleSheets=[h,...e.adoptedStyleSheets]}function Z(){window.ToggleEvent=window.ToggleEvent||M;function e(n){return n!=null&&n.includes(":popover-open")&&(n=n.replace(Y,"$1.\\:popover-open")),n}f(Document.prototype,"querySelector",e),f(Document.prototype,"querySelectorAll",e),f(Element.prototype,"querySelector",e),f(Element.prototype,"querySelectorAll",e),f(Element.prototype,"matches",e),f(Element.prototype,"closest",e),f(DocumentFragment.prototype,"querySelectorAll",e),f(DocumentFragment.prototype,"querySelectorAll",e),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;const n=(this.getAttribute("popover")||"").toLowerCase();return n===""||n=="auto"?"auto":"manual"},set(n){this.setAttribute("popover",n)}},showPopover:{enumerable:!0,configurable:!0,value(){D(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){w(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(n){b.get(this)==="showing"&&n===void 0||n===!1?w(this,!0,!0):(n===void 0||n===!0)&&D(this)}}});const t=Element.prototype.attachShadow;t&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(n){const a=t.call(this,n);return k(a),a}}});const o=HTMLElement.prototype.attachInternals;o&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){const n=o.call(this);return n.shadowRoot&&k(n.shadowRoot),n}}});const r=new WeakMap;function i(n){Object.defineProperties(n.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(a){if(a===null)this.removeAttribute("popovertarget"),r.delete(this);else if(a instanceof Element)this.setAttribute("popovertarget",""),r.set(this,a);else throw new TypeError("popoverTargetElement must be an element or null")},get(){if(this.localName!=="button"&&this.localName!=="input"||this.localName==="input"&&this.type!=="reset"&&this.type!=="image"&&this.type!=="button"||this.disabled||this.form&&this.type==="submit")return null;const a=r.get(this);if(a&&a.isConnected)return a;if(a&&!a.isConnected)return r.delete(this),null;const l=g(this),v=this.getAttribute("popovertarget");return(l instanceof Document||l instanceof O)&&v&&l.getElementById(v)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){const a=(this.getAttribute("popovertargetaction")||"").toLowerCase();return a==="show"||a==="hide"?a:"toggle"},set(a){this.setAttribute("popovertargetaction",a)}}})}i(HTMLButtonElement),i(HTMLInputElement);const s=n=>{if(!n.isTrusted)return;const a=n.composedPath()[0];if(!(a instanceof Element)||a!=null&&a.shadowRoot)return;const l=g(a);if(!(l instanceof O||l instanceof Document))return;const v=a.closest("[popovertargetaction],[popovertarget]");if(v){B(v),n.preventDefault();return}},u=n=>{const a=n.key,l=n.target;!n.defaultPrevented&&l&&(a==="Escape"||a==="Esc")&&L(l.ownerDocument,!0,!0)};(n=>{n.addEventListener("click",s),n.addEventListener("keydown",u),n.addEventListener("pointerdown",N),n.addEventListener("pointerup",N)})(document),k(document)}X()||Z();
