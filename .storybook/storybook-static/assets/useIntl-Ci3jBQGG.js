import{t as i,m as M,s as T}from"./startOfDay-MoyOWjoN.js";import{r as v}from"./index-CTjT7uj6.js";import{u as y}from"./index-DBmEjBSQ.js";function I(t){return e=>{const r=(t?Math[t]:Math.trunc)(e);return r===0?0:r}}function g(t,e){return+i(t)-+i(e)}function s(t,e,n){const r=g(t,e)/M;return I(n==null?void 0:n.roundingMethod)(r)}function w(t){return+i(t)>Date.now()}function R(){return T(Date.now())}function b(){const t=new Date,e=t.getFullYear(),n=t.getMonth(),r=t.getDate(),o=new Date(0);return o.setFullYear(e,n,r+1),o.setHours(0,0,0,0),o}const m=t=>(e,n)=>t.formatDate(e??void 0,n??{format:"short"}),f=60*1e3,l=60*f,c=24,d=c*l,F=t=>{if(t==null)return;const e=new Date(t);if(!isNaN(e.valueOf()))return e},P=t=>{const e=new Date,n=t.valueOf()-e.valueOf();if(Math.abs(n)<f)return{value:0,unit:"second"};if(Math.abs(n)<l)return{value:Math.floor(n/f),unit:"minute"};if(Math.abs(n)<d)return{value:Math.floor(n/l),unit:"hour"};if(Math.abs(n)<5*d)return H(t,e)},H=(t,e)=>{const n=s(t,e);if(w(t)){const u=b(),a=s(u,e);return{value:Math.floor((n-a)/c+1),unit:"day"}}const r=s(e,R());return{value:Math.floor((n+r)/c),unit:"day"}},V=t=>(e,n,r)=>{var o;if(typeof n=="object"&&(r=n,n=void 0),typeof n=="string"&&typeof e=="number")return t.formatRelativeTime(e,n,r);const u=F(e);if(!u)return"";const a=P(u);if(a){const{format:D,...h}=r??{};return t.formatRelativeTime(a.value,a.unit,{numeric:"auto",...h})}return m(t)(e,{...r,format:(o=r==null?void 0:r.format)!==null&&o!==void 0?o:"short"})},Y=()=>{const t=y();return v.useMemo(()=>({...t,formatDate:m(t),formatRelativeTime:V(t)}),[t])};export{Y as u};
