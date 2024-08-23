import{R as x,K as C,r as f,j as N,c as M}from"./index-7m9_wtS-.js";import{_ as z,a as K}from"./useEventCallback-zqt-gLoP.js";import{P as R}from"./index-HPGscYs6.js";function D(t,i){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},D(t,i)}function q(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,D(t,i)}function J(t){return t&&t.ownerDocument||document}function Q(t){var i=J(t);return i&&i.defaultView||window}function tt(t,i){return Q(t).getComputedStyle(t,i)}var et=/([A-Z])/g;function nt(t){return t.replace(et,"-$1").toLowerCase()}var rt=/^ms-/;function y(t){return nt(t).replace(rt,"-ms-")}var it=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function st(t){return!!(t&&it.test(t))}function I(t,i){var s="",r="";if(typeof i=="string")return t.style.getPropertyValue(y(i))||tt(t).getPropertyValue(y(i));Object.keys(i).forEach(function(n){var e=i[n];!e&&e!==0?t.style.removeProperty(y(n)):st(n)?r+=n+"("+e+") ":s+=y(n)+": "+e+";"}),r&&(s+="transform: "+r+";"),t.style.cssText+=";"+s}const U={disabled:!1},$=x.createContext(null);var at=function(i){return i.scrollTop},g="unmounted",h="exited",p="entering",m="entered",k="exiting",l=function(t){q(i,t);function i(r,n){var e;e=t.call(this,r,n)||this;var a=n,o=a&&!a.isMounting?r.enter:r.appear,u;return e.appearStatus=null,r.in?o?(u=h,e.appearStatus=p):u=m:r.unmountOnExit||r.mountOnEnter?u=g:u=h,e.state={status:u},e.nextCallback=null,e}i.getDerivedStateFromProps=function(n,e){var a=n.in;return a&&e.status===g?{status:h}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(n){var e=null;if(n!==this.props){var a=this.state.status;this.props.in?a!==p&&a!==m&&(e=p):(a===p||a===m)&&(e=k)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var n=this.props.timeout,e,a,o;return e=a=o=n,n!=null&&typeof n!="number"&&(e=n.exit,a=n.enter,o=n.appear!==void 0?n.appear:a),{exit:e,enter:a,appear:o}},s.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);a&&at(a)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:g})},s.performEnter=function(n){var e=this,a=this.props.enter,o=this.context?this.context.isMounting:n,u=this.props.nodeRef?[o]:[C.findDOMNode(this),o],c=u[0],d=u[1],E=this.getTimeouts(),S=o?E.appear:E.enter;if(!n&&!a||U.disabled){this.safeSetState({status:m},function(){e.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:p},function(){e.props.onEntering(c,d),e.onTransitionEnd(S,function(){e.safeSetState({status:m},function(){e.props.onEntered(c,d)})})})},s.performExit=function(){var n=this,e=this.props.exit,a=this.getTimeouts(),o=this.props.nodeRef?void 0:C.findDOMNode(this);if(!e||U.disabled){this.safeSetState({status:h},function(){n.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:k},function(){n.props.onExiting(o),n.onTransitionEnd(a.exit,function(){n.safeSetState({status:h},function(){n.props.onExited(o)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},s.setNextCallback=function(n){var e=this,a=!0;return this.nextCallback=function(o){a&&(a=!1,e.nextCallback=null,n(o))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},s.onTransitionEnd=function(n,e){this.setNextCallback(e);var a=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),o=n==null&&!this.props.addEndListener;if(!a||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=u[0],d=u[1];this.props.addEndListener(c,d)}n!=null&&setTimeout(this.nextCallback,n)},s.render=function(){var n=this.state.status;if(n===g)return null;var e=this.props,a=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var o=z(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement($.Provider,{value:null},typeof a=="function"?a(n,o):x.cloneElement(x.Children.only(a),o))},i}(x.Component);l.contextType=$;l.propTypes={};function b(){}l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b};l.UNMOUNTED=g;l.EXITED=h;l.ENTERING=p;l.ENTERED=m;l.EXITING=k;const ot=l,ut=!!(typeof window<"u"&&window.document&&window.document.createElement);var L=!1,_=!1;try{var w={get passive(){return L=!0},get once(){return _=L=!0}};ut&&(window.addEventListener("test",w,w),window.removeEventListener("test",w,!0))}catch{}function ft(t,i,s,r){if(r&&typeof r!="boolean"&&!_){var n=r.once,e=r.capture,a=s;!_&&n&&(a=s.__once||function o(u){this.removeEventListener(i,o,e),s.call(this,u)},s.__once=a),t.addEventListener(i,a,L?r:e)}t.addEventListener(i,s,r)}function ct(t,i,s,r){var n=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(i,s,n),s.__once&&t.removeEventListener(i,s.__once,n)}function W(t,i,s,r){return ft(t,i,s,r),function(){ct(t,i,s,r)}}function lt(t,i,s,r){if(s===void 0&&(s=!1),r===void 0&&(r=!0),t){var n=document.createEvent("HTMLEvents");n.initEvent(i,s,r),t.dispatchEvent(n)}}function pt(t){var i=I(t,"transitionDuration")||"",s=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*s}function dt(t,i,s){s===void 0&&(s=5);var r=!1,n=setTimeout(function(){r||lt(t,"transitionend",!0)},i+s),e=W(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(n),e()}}function Et(t,i,s,r){s==null&&(s=pt(t)||0);var n=dt(t,s,r),e=W(t,"transitionend",i);return function(){n(),e()}}function F(t,i){const s=I(t,i)||"",r=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*r}function vt(t,i){const s=F(t,"transitionDuration"),r=F(t,"transitionDelay"),n=Et(t,e=>{e.target===t&&(n(),i(e))},s+r)}function ht(t){t.offsetHeight}function mt(t){return t&&"setState"in t?C.findDOMNode(t):t??null}const xt=x.forwardRef(({onEnter:t,onEntering:i,onEntered:s,onExit:r,onExiting:n,onExited:e,addEndListener:a,children:o,childRef:u,...c},d)=>{const E=f.useRef(null),S=K(E,u),j=T=>{S(mt(T))},v=T=>O=>{T&&E.current&&T(E.current,O)},X=f.useCallback(v(t),[t]),B=f.useCallback(v(i),[i]),A=f.useCallback(v(s),[s]),V=f.useCallback(v(r),[r]),H=f.useCallback(v(n),[n]),Y=f.useCallback(v(e),[e]),Z=f.useCallback(v(a),[a]);return N.jsx(ot,{ref:d,...c,onEnter:X,onEntered:A,onEntering:B,onExit:V,onExited:Y,onExiting:H,addEndListener:Z,nodeRef:E,children:typeof o=="function"?(T,O)=>o(T,{...O,ref:j}):x.cloneElement(o,{ref:j})})}),Tt=xt,St=t=>f.forwardRef((i,s)=>N.jsx("div",{...i,ref:s,className:M(i.className,t)})),bt={[p]:"show",[m]:"show"},G=f.forwardRef(({className:t,children:i,transitionClasses:s={},onEnter:r,...n},e)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...n},o=f.useCallback((u,c)=>{ht(u),r==null||r(u,c)},[r]);return N.jsx(Tt,{ref:e,addEndListener:vt,...a,onEnter:o,childRef:i.ref,children:(u,c)=>f.cloneElement(i,{...c,className:M("fade",t,i.props.className,bt[u],s[u])})})});G.displayName="Fade";const Ot=G,Ct={"aria-label":R.string,onClick:R.func,variant:R.oneOf(["white"])},P=f.forwardRef(({className:t,variant:i,"aria-label":s="Close",...r},n)=>N.jsx("button",{ref:n,type:"button",className:M("btn-close",i&&`btn-close-${i}`,t),"aria-label":s,...r}));P.displayName="CloseButton";P.propTypes=Ct;const Rt=P;export{Rt as C,h as E,Ot as F,Tt as T,k as a,p as b,m as c,ht as d,ft as e,St as f,ut as g,Et as h,W as l,J as o,ct as r,I as s,vt as t};
