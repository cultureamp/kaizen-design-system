import{R as e}from"./index-CTjT7uj6.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as h}from"./ChevronDownIcon-prLLyjG_.js";import{C as g}from"./ChevronUpIcon-D9pr3Qd6.js";import{B as a}from"./Button-AbBbn7Lr.js";import"./v4-CQkTLCs1.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./usePress-nudZ2Xgz.js";import"./useButton-CDp2hby9.js";import"./useFocusWithin-C7oArVkD.js";import"./useHover-Bq751pFs.js";import"./mergeClassNames-DEvgSslo.js";const S={title:"Actions/Button/v3/Doc Assets",component:a,args:{children:"Label",onPress:u("Button onPress event")}},r={render:({children:o,...t})=>e.createElement(a,{...t,className:({isPressed:s})=>s?"!bg-gray-300":""},o),parameters:{docs:{source:{code:`
    <Button
      {...otherArgs}
      className={({ isPressed }) => (isPressed ? "!bg-gray-300" : "")}
    >
      {children}
    </Button>
      `}}}},n={render:({children:o,...t})=>e.createElement(a,{...t},({isPressed:s})=>e.createElement(e.Fragment,null,o,s?e.createElement(h,{role:"presentation"}):e.createElement(g,{role:"presentation"}))),parameters:{docs:{source:{code:`
    <Button {...otherArgs}>
      {({isPressed}) => (
        <>
          {children}
          {isPressed ? <ChevronDownIcon role="presentation" /> : <ChevronUpIcon role="presentation" />}
        </>
      )}
    </Button>
      `}}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    children,
    ...otherArgs
  }) => <Button {...otherArgs} className={({
    isPressed
  }) => isPressed ? "!bg-gray-300" : ""}>
      {children}
    </Button>,
  parameters: {
    docs: {
      source: {
        code: \`
    <Button
      {...otherArgs}
      className={({ isPressed }) => (isPressed ? "!bg-gray-300" : "")}
    >
      {children}
    </Button>
      \`
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    children,
    ...otherArgs
  }) => <Button {...otherArgs}>
      {({
      isPressed
    }) => <>
          {children}
          {isPressed ? <ChevronDownIcon role="presentation" /> : <ChevronUpIcon role="presentation" />}
        </>}
    </Button>,
  parameters: {
    docs: {
      source: {
        code: \`
    <Button {...otherArgs}>
      {({isPressed}) => (
        <>
          {children}
          {isPressed ? <ChevronDownIcon role="presentation" /> : <ChevronUpIcon role="presentation" />}
        </>
      )}
    </Button>
      \`
      }
    }
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const _=["ButtonClassModifierWithRenderProps","ButtonContentWithRenderProps"];export{r as ButtonClassModifierWithRenderProps,n as ButtonContentWithRenderProps,_ as __namedExportsOrder,S as default};
