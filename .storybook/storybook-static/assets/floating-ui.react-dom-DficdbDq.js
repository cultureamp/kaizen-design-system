import{c as H,o as I,f as J,s as K,a as N}from"./floating-ui.dom-BvchAiLZ.js";import{r as n}from"./index-CTjT7uj6.js";import{r as Q}from"./index-9r8iugjR.js";var R=typeof document<"u"?n.useLayoutEffect:n.useEffect;function h(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,s,c;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(s=r;s--!==0;)if(!h(e[s],t[s]))return!1;return!0}if(c=Object.keys(e),r=c.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!{}.hasOwnProperty.call(t,c[s]))return!1;for(s=r;s--!==0;){const p=c[s];if(!(p==="_owner"&&e.$$typeof)&&!h(e[p],t[p]))return!1}return!0}return e!==e&&t!==t}function v(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function L(e,t){const r=v(e);return Math.round(t*r)/r}function O(e){const t=n.useRef(e);return R(()=>{t.current=e}),t}function Y(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:s=[],platform:c,elements:{reference:p,floating:z}={},transform:S=!0,whileElementsMounted:k,open:D}=e,[f,$]=n.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[x,A]=n.useState(s);h(x,s)||A(s);const[q,B]=n.useState(null),[V,W]=n.useState(null),_=n.useCallback(o=>{o!==a.current&&(a.current=o,B(o))},[]),C=n.useCallback(o=>{o!==d.current&&(d.current=o,W(o))},[]),i=p||q,u=z||V,a=n.useRef(null),d=n.useRef(null),y=n.useRef(f),G=k!=null,P=O(k),M=O(c),g=n.useCallback(()=>{if(!a.current||!d.current)return;const o={placement:t,strategy:r,middleware:x};M.current&&(o.platform=M.current),H(a.current,d.current,o).then(w=>{const m={...w,isPositioned:!0};E.current&&!h(y.current,m)&&(y.current=m,Q.flushSync(()=>{$(m)}))})},[x,t,r,M]);R(()=>{D===!1&&y.current.isPositioned&&(y.current.isPositioned=!1,$(o=>({...o,isPositioned:!1})))},[D]);const E=n.useRef(!1);R(()=>(E.current=!0,()=>{E.current=!1}),[]),R(()=>{if(i&&(a.current=i),u&&(d.current=u),i&&u){if(P.current)return P.current(i,u,g);g()}},[i,u,g,P,G]);const F=n.useMemo(()=>({reference:a,floating:d,setReference:_,setFloating:C}),[_,C]),l=n.useMemo(()=>({reference:i,floating:u}),[i,u]),j=n.useMemo(()=>{const o={position:r,left:0,top:0};if(!l.floating)return o;const w=L(l.floating,f.x),m=L(l.floating,f.y);return S?{...o,transform:"translate("+w+"px, "+m+"px)",...v(l.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:w,top:m}},[r,S,l.floating,f.x,f.y]);return n.useMemo(()=>({...f,update:g,refs:F,elements:l,floatingStyles:j}),[f,g,F,l,j])}const Z=(e,t)=>({...I(e),options:[e,t]}),b=(e,t)=>({...J(e),options:[e,t]}),ee=(e,t)=>({...K(e),options:[e,t]}),te=(e,t)=>({...N(e),options:[e,t]});export{te as a,b as f,Z as o,ee as s,Y as u};
