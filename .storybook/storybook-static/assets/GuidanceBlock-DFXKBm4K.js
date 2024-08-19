import{r as d,R as e}from"./index-CTjT7uj6.js";import{c as m}from"./index-CCQ3W5xA.js";import{M as I}from"./react-media-c9H3SZyi.js";import{H as G}from"./Heading-Y5F8SWRW.js";import{A as V}from"./ArrowForwardIcon-BVPHqAvL.js";import{T as F}from"./Text-D2gQH1xL.js";import{T as H}from"./index-CdP7-hSn.js";import{B as E}from"./Button-DDkdQqLR.js";const Q="_rightMargin_upq4s_7",z="_noRightMargin_upq4s_11",L="_banner_upq4s_15",O="_noMaxWidth_upq4s_15",D="_illustrationWrapper_upq4s_50",j="_illustration_upq4s_50",J="_hasSceneIllustration_upq4s_71",K="_descriptionContainer_upq4s_90",U="_descriptionAndActions_upq4s_115",X="_buttonContainer_upq4s_130",Y="_hidden_upq4s_154",Z="_headingWrapper_upq4s_159",$="_cancel_upq4s_163",P="_icon_upq4s_178",ee="_disabled_upq4s_182",te="_hover_upq4s_185",ne="_active_upq4s_188",ae="_inline_upq4s_202",re="_stacked_upq4s_203",ie="_centerContent_upq4s_294",le="_smallScreenTextAlignment_upq4s_323",n={rightMargin:Q,noRightMargin:z,banner:L,noMaxWidth:O,illustrationWrapper:D,illustration:j,hasSceneIllustration:J,descriptionContainer:K,descriptionAndActions:U,buttonContainer:X,hidden:Y,headingWrapper:Z,cancel:$,icon:P,disabled:ee,hover:te,active:ne,default:"_default_upq4s_192","expert-advice":"_expert-advice_upq4s_197",inline:ae,stacked:re,centerContent:ie,smallScreenTextAlignment:le},y=({tooltipProps:i,children:l})=>i?e.createElement(H,{...i},l):e.createElement(e.Fragment,null,l),x=({layout:i="default",variant:l="default",withActionButtonArrow:A=!0,noMaxWidth:C=!1,illustrationType:p="spot",smallScreenTextAlignment:b="center",actions:t,illustration:_,secondaryDismiss:k,...a})=>{var g,v,q;const[u,W]=d.useState(!1),[M,S]=d.useState(!1),[f,h]=d.useState(""),o=e.createRef();d.useEffect(()=>{(i==="inline"||i==="stacked")&&R()},[]);const T=()=>{var r;W(!0),(r=t==null?void 0:t.dismiss)==null||r.onClick()},N=r=>{u&&r.propertyName==="margin-top"&&S(!0)},R=()=>{new ResizeObserver(c=>{c.length===1&&w(c[0].contentRect.width)}).observe(o.current)},w=r=>{r<=320?h("centerContent"):h("")},B=()=>u&&o.current?-o.current.clientHeight+"px":"0";if(M)return e.createElement(e.Fragment,null);const s=f.includes("centerContent");return e.createElement("div",{className:m(n.banner,l&&n[l],i&&n[i],u&&n.hidden,f==="centerContent"&&n.centerContent,C&&n.noMaxWidth,p==="scene"&&n.hasSceneIllustration,b==="left"&&n.smallScreenTextAlignment),style:{marginTop:B()},ref:o,onTransitionEnd:N},e.createElement("div",{className:n.illustrationWrapper},e.createElement("div",{className:n.illustration},p==="scene"?e.cloneElement(_,{enableAspectRatio:!0}):_)),e.createElement("div",{className:n.descriptionAndActions},e.createElement("div",{className:n.descriptionContainer},"content"in a&&a.content,"text"in a&&e.createElement(e.Fragment,null,e.createElement("div",{className:n.headingWrapper},e.createElement(G,{tag:((g=a==null?void 0:a.text)==null?void 0:g.titleTag)??"h3",variant:"heading-3"},(v=a==null?void 0:a.text)==null?void 0:v.title)),e.createElement(F,{tag:"p",variant:"body"},(q=a==null?void 0:a.text)==null?void 0:q.description))),(t==null?void 0:t.primary)&&e.createElement(I,{query:"(max-width: 767px)"},r=>{var c;return e.createElement("div",{className:m({noRightMargin:r||s,rightMargin:!(r||s)&&i==="default"})},e.createElement("div",{className:m(n.buttonContainer,(t==null?void 0:t.secondary)&&n.secondaryAction)},e.createElement(y,{tooltipProps:t.primary.tooltip},e.createElement(E,{icon:A?e.createElement(V,{role:"presentation"}):void 0,iconPosition:"end",...t.primary,fullWidth:r||s})),(t==null?void 0:t.secondary)&&e.createElement(y,{tooltipProps:t.secondary.tooltip},e.createElement("div",{className:n.secondaryAction},e.createElement(E,{secondary:!0,...t.secondary,onClick:k?()=>T():(c=t==null?void 0:t.secondary)==null?void 0:c.onClick,fullWidth:r||s})))))})))};x.displayName="GuidanceBlock";x.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093807/Guidance+Block Guidance} |
{@link https://cultureamp.design/?path=/docs/components-guidanceblock--docs Storybook}`,methods:[],displayName:"GuidanceBlock",props:{layout:{defaultValue:{value:'"default"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},withActionButtonArrow:{defaultValue:{value:"true",computed:!1},required:!1},noMaxWidth:{defaultValue:{value:"false",computed:!1},required:!1},illustrationType:{defaultValue:{value:'"spot"',computed:!1},required:!1},smallScreenTextAlignment:{defaultValue:{value:'"center"',computed:!1},required:!1}}};export{x as G};
