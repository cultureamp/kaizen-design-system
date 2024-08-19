import{R as e}from"./index-CTjT7uj6.js";import{a as s}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as i}from"./ChevronDownIcon-prLLyjG_.js";import{C as a}from"./ChevronUpIcon-D9pr3Qd6.js";import{B as n}from"./Button-AbBbn7Lr.js";import"./v4-CQkTLCs1.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./usePress-nudZ2Xgz.js";import"./useButton-CDp2hby9.js";import"./useFocusWithin-C7oArVkD.js";import"./useHover-Bq751pFs.js";import"./mergeClassNames-DEvgSslo.js";const b={title:"Actions/Button/v3/Doc Assets",component:n,args:{children:"Label",onPress:s("Button onPress event")}},D={render:({children:t,...o})=>e.createElement(n,{...o,className:({isPressed:r})=>r?"!bg-gray-300":""},t),parameters:{docs:{source:{code:`
    <Button
      {...otherArgs}
      className={({ isPressed }) => (isPressed ? "!bg-gray-300" : "")}
    >
      {children}
    </Button>
      `}}}},w={render:({children:t,...o})=>e.createElement(n,{...o},({isPressed:r})=>e.createElement(e.Fragment,null,t,r?e.createElement(i,{role:"presentation"}):e.createElement(a,{role:"presentation"}))),parameters:{docs:{source:{code:`
    <Button {...otherArgs}>
      {({isPressed}) => (
        <>
          {children}
          {isPressed ? <ChevronDownIcon role="presentation" /> : <ChevronUpIcon role="presentation" />}
        </>
      )}
    </Button>
      `}}}},x=["ButtonClassModifierWithRenderProps","ButtonContentWithRenderProps"];export{D as ButtonClassModifierWithRenderProps,w as ButtonContentWithRenderProps,x as __namedExportsOrder,b as default};
