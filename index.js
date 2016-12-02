!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),i=o(r);customElements.define("intensity-slider",i.default)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,s=[];for(a=arguments.length;a-- >2;)H.push(arguments[a]);for(n&&n.children&&(H.length||H.push(n.children),delete n.children);H.length;)if((r=H.pop())instanceof Array)for(a=r.length;a--;)H.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?s[s.length-1]+=r:(s.push(r),o=i));var u=new t(e,n||void 0,s);return W.vnode&&W.vnode(u),u}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function s(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function l(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},u=a,l=s(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,c=0;c<o.length-1;c++)u=u[o[c]]||(u[o[c]]=!c&&e.state[o[c]]||{});u[o[c]]=l,e.setState(a)}}function p(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(W.debounceRendering||V)(f)}function f(){var e,t=K;for(K=[];e=t.pop();)e._dirty&&D(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(y(e),t||G)}function v(e,t){return s(t)?e instanceof Text:s(t.nodeName)?m(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function m(e,t){return e.normalizedNodeName===t||A(e.nodeName)===A(t)}function y(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=u(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||s(o)||s(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!s(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||X[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html);else if("o"==t[0]&&"n"==t[1]){var l=e._listeners||(e._listeners={});t=A(t.substring(2)),o?l[t]||e.addEventListener(t,x,!!J[t]):l[t]&&e.removeEventListener(t,x,!!J[t]),l[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)g(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var c=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",A(c[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",A(c[1]),o):e.setAttribute(t,o))}else e.className=o||""}function g(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](W.event&&W.event(e)||e)}function M(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||A(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function C(e,t){var n=A(e),o=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function N(){for(var e;e=Y.pop();)W.afterMount&&W.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){Z++||($=r instanceof SVGElement);var a=S(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Z||i||N(),a}function S(e,t,n,o){for(var r=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),s(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;U(e)}return document.createTextNode(t)}if(a(t.nodeName))return T(e,t,n,o);var i=e,u=t.nodeName,l=$,c=t.children;if(s(u)||(u=String(u)),$="svg"===u||"foreignObject"!==u&&$,e){if(!m(e,u)){for(i=C(u,$);e.firstChild;)i.appendChild(e.firstChild);U(e)}}else i=C(u,$);c&&1===c.length&&"string"==typeof c[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=c[0]&&(i.firstChild.nodeValue=c[0]):(c&&c.length||i.firstChild)&&k(i,c,n,o);var p=i[q];if(!p){i[q]=p={};for(var f=i.attributes,v=f.length;v--;)p[f[v].name]=f[v].value}return j(i,t.attributes,p),r&&"function"==typeof r.ref&&(p.ref=r.ref)(i),$=l,i}function k(e,t,n,o){var r,i,s,u,l=e.childNodes,c=[],p={},f=0,d=0,h=l.length,m=0,y=t&&t.length;if(h)for(var b=0;b<h;b++){var _=l[b],g=y?(i=_._component)?i.__key:(i=_[q])?i.key:null:null;g||0===g?(f++,p[g]=_):c[m++]=_}if(y)for(var b=0;b<y;b++){s=t[b],u=null;var g=s.key;if(null!=g)f&&g in p&&(u=p[g],p[g]=void 0,f--);else if(!u&&d<m){for(r=d;r<m;r++)if(i=c[r],i&&v(i,s)){u=i,c[r]=void 0,r===m-1&&m--,r===d&&d++;break}!u&&d<m&&a(s.nodeName)&&o&&(u=c[d],c[d++]=void 0)}u=S(u,s,n,o),u&&u!==e&&u!==l[b]&&e.insertBefore(u,l[b]||null)}if(f)for(var b in p)p[b]&&U(p[b]);d<m&&E(c)}function E(e,t){for(var n=e.length;n--;)e[n]&&U(e[n],t)}function U(e,t){var n=e._component;n?B(n,!t):(e[q]&&e[q].ref&&e[q].ref(null),t||M(e),e.childNodes&&e.childNodes.length&&E(e.childNodes,t))}function j(e,t,n){for(var o in n)t&&o in t||null==n[o]||_(e,o,n[o],n[o]=void 0,$);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||_(e,r,n[r],n[r]=t[r],$)}function O(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function L(e,t,n){var o=new e(t,n),r=ee[e.name];if(I.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function P(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&W.syncComponentUpdates===!1&&e.base?p(e):D(e,1,r)),e.__ref&&e.__ref(e))}function D(e,t,n,i){if(!e._disable){var s,u,l,c,p=e.props,f=e.state,v=e.context,m=e.prevProps||p,b=e.prevState||f,_=e.prevContext||v,g=e.base,x=e.nextBase,M=g||x,C=e._component;if(g&&(e.props=m,e.state=b,e.context=_,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(p,f,v)===!1?s=!0:e.componentWillUpdate&&e.componentWillUpdate(p,f,v),e.props=p,e.state=f,e.context=v),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!s){for(e.render&&(u=e.render(p,f,v)),e.getChildContext&&(v=o(r(v),e.getChildContext()));d(u);)u=h(u,v);var S,k,E=u&&u.nodeName;if(a(E)){l=C;var j=y(u);l&&l.constructor===E?P(l,j,1,v):(S=l,l=L(E,j,v),l.nextBase=l.nextBase||x,l._parentComponent=e,e._component=l,P(l,j,0,v),D(l,1,n,!0)),k=l.base}else c=M,S=C,S&&(c=e._component=null),(M||1===t)&&(c&&(c._component=null),k=w(c,u,v,n||!g,M&&M.parentNode,!0));if(M&&k!==M&&l!==C){var O=M.parentNode;O&&k!==O&&(O.replaceChild(k,M),S||(M._component=null,U(M)))}if(S&&B(S,k!==M),e.base=k,k&&!i){for(var T=e,I=e;I=I._parentComponent;)(T=I).base=k;k._component=T,k._componentConstructor=T.constructor}}!g||n?Y.unshift(e):s||(e.componentDidUpdate&&e.componentDidUpdate(m,b,_),W.afterUpdate&&W.afterUpdate(e));var R,H=e._renderCallbacks;if(H)for(;R=H.pop();)R.call(e);Z||i||N()}}function T(e,t,n,o){for(var r=e&&e._component,i=e,a=r&&e._componentConstructor===t.nodeName,s=a,u=y(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(P(r,u,3,n,o),e=r.base):(r&&!a&&(B(r,!0),e=i=null),r=L(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,i=null),P(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,U(i))),e}function B(e,t){W.beforeUnmount&&W.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?B(o,t):n&&(n[q]&&n[q].ref&&n[q].ref(null),e.nextBase=n,t&&(b(n),O(e)),E(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function I(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function R(e,t,n){return w(n,e,{},!1,t)}var W={},H=[],z={},A=function(e){return z[e]||(z[e]=e.toLowerCase())},F="undefined"!=typeof Promise&&Promise.resolve(),V=F?function(e){F.then(e)}:setTimeout,G={},q="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",X={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},K=[],Q={},Y=[],Z=0,$=!1,ee={};o(I.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),p(this)},forceUpdate:function(){D(this,2)},render:function(){}}),e.h=n,e.cloneElement=l,e.Component=I,e.render=R,e.rerender=f,e.options=W})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),l=o(u),c=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFocus=function(){n.setState({hasFocus:!0})},n.handleBlur=function(){n.setState({hasFocus:!1})},n.handleInput=function(){n.setState({intensity:n.props.input.value})},n.handleMouseDown=function(e){n.setState({isSliding:!0}),n.handleSlide(e),document.addEventListener("mouseup",n.handleMouseUp)},n.handleMouseMove=function(e){n.state.isSliding&&n.handleSlide(e)},n.handleMouseUp=function(){n.setState({isSliding:!1}),document.removeEventListener("mouseup",n.handleMouseUp)},n.handleSlide=function(e){var t=parseInt(n.props.input.min||1,10),o=parseInt(n.props.input.max||100,10),r=Math.round((e.clientX-n.div.offsetLeft-10)/n.img.width*o)-1;r<t?r=t:r>o&&(r=o),n.setState({intensity:r}),n.props.input.value=r,n.props.input.focus();var i=document.createEvent("HTMLEvents");i.initEvent("change",!1,!0),n.props.input.dispatchEvent(i)},n.handleClick=function(){n.props.input.focus()},n.jitter=function(){n.img.style.marginLeft=Math.random()*n.state.intensity+"px",n.img.style.marginTop=Math.random()*n.state.intensity+"px"},n.setImg=function(e){n.img=e},n.setDiv=function(e){n.div=e},n.componentDidMount=function(){n.interval=setInterval(n.jitter,50)},n.componentWillUnmount=function(){clearInterval(n.interval)},e.input.addEventListener("focus",n.handleFocus),e.input.addEventListener("blur",n.handleBlur),e.input.addEventListener("input",n.handleInput),n.state={hasFocus:!1,intensity:e.input.value,isSliding:!1},n}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state.intensity/parseInt(this.props.input.max,10)*250;return l.default.h("div",{ref:this.setDiv,style:"position: relative; height: 300px;width: 300px;user-select: none;"},l.default.h("img",{style:"user-select: none;width: 250px; height: 250px;border: 10px solid "+(this.state.hasFocus?"blue":"transparent"),onClick:this.handleClick,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,onDragStart:function(e){e.preventDefault()},ref:this.setImg,src:"https://d3vv6lp55qjaqc.cloudfront.net/items/0s2x113v3p3R0i0D1G00/Screen%20Shot%202016-12-01%20at%204.22.24%20PM.png?X-CloudApp-Visitor-Id=8c7c3ddb4f82754e00f6dac0eaa0cbfa&v=416b811a"}),l.default.h("div",{onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,style:"position: absolute; height: 250px; width: 15px; background-color: red;top: 0;left: "+e+"px;"}))}}]),t}(u.Component);t.default=c,c.displayName="MyComponent"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(2),s=o(a),u=n(4),l=o(u),c=(0,l.default)({connectedCallback:function(){var e=this;this.input=this.querySelector("input");var t={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"fixed",width:"1px"};Object.keys(t).forEach(function(n){e.input.style[n]=t[n]}),this.updateRendering()},updateRendering:function(){i.default.render(i.default.h(s.default,{input:this.input}),this,this.lastChild),this.rendered=!0},attributeChangedCallback:function(e,t,n){this.rendered&&this.updateRendering()}});c.observedAttributes=[],t.default=c},function(e,t){function n(e){function t(){var e="undefined"!=typeof Reflect?Reflect.construct(HTMLElement,[],t):HTMLElement.call(Object.create(t.prototype));return e.initialize&&e.initialize(),e}return Object.setPrototypeOf(t,HTMLElement),t.prototype=Object.create(HTMLElement.prototype),Object.keys(e).forEach(function(n){t.prototype[n]=e[n]}),t}e.exports=n}]);