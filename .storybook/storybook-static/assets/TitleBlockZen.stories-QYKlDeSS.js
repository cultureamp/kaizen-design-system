import{R as e}from"./index-CTjT7uj6.js";import{A as S}from"./AddIcon-C6V_KfCs.js";import{S as c}from"./StarOnIcon-BgZ_JTEb.js";import{a as T}from"./hostedAssets-CVq9d3MW.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{T as l,N as a}from"./NavigationTabs-DzWSRfH9.js";const y=[{label:"Secondary menu",menuItems:[{onClick:()=>alert("test"),label:"Secondary menu action 1"},{onClick:()=>alert("test"),label:"Secondary menu action 2",icon:e.createElement(c,{role:"presentation"})}]},{onClick:()=>alert("test"),label:"Secondary action"}],B={title:"Components/TitleBlockZen",component:l,parameters:{chromatic:{disable:!1}},args:{title:"Page title",surveyStatus:{text:"Due July 8, 2030",status:"default"},avatar:{avatarSrc:T("site/empty-state.png"),fullName:"Blanca Wheeler"},primaryAction:{label:"Primary link",icon:e.createElement(S,{role:"presentation"}),disabled:!0,href:"#"},defaultAction:{label:"Default link",href:"#"},secondaryActions:y,secondaryOverflowMenuItems:[{label:"Overflow action 1",icon:e.createElement(c,{role:"presentation"})},{label:"Overflow link 1",icon:e.createElement(c,{role:"presentation"})}],handleHamburgerClick:()=>alert("Hamburger clicked"),breadcrumb:{path:"#",text:"Back to home",handleClick:()=>alert("breadcrumb clicked!")},navigationTabs:[e.createElement(a,{key:"1",text:"Label",href:"#",active:!0}),e.createElement(a,{key:"2",text:"Label",href:"#"}),e.createElement(a,{key:"3",text:"Label",href:"#"}),e.createElement(a,{key:"4",text:"Label",href:"#"}),e.createElement(a,{key:"5",text:"Label",href:"#"}),e.createElement(a,{key:"6",text:"Label",href:"#"})]},decorators:[t=>e.createElement("div",{style:{margin:"-1rem"}},e.createElement(t,null))]},o={parameters:{docs:{canvas:{sourceState:"shown"}}}},n={parameters:{viewport:{viewports:{default:{name:"Above or equal to 1366",styles:{width:"1366px",height:"800px"},type:"desktop"},under1366:{name:"Under 1366",styles:{width:"1365px",height:"800px"},type:"desktop"},mediumSmall:{name:"Medium and small",styles:{width:"1079px",height:"800px"},type:"desktop"}},defaultViewport:"default"},chromatic:{disable:!1,viewports:[1079,1365,1366]}}},s={parameters:{viewport:{viewports:{default:{name:"Above or equal to 1366",styles:{width:"1366px",height:"800px"},type:"desktop"},under1366:{name:"Under 1366",styles:{width:"1365px",height:"800px"},type:"desktop"}},defaultViewport:"default"},chromatic:{disable:!1,viewports:[1365,1366]}},args:{title:"A long title with over thirty characters"}},i={parameters:{docs:{canvas:{sourceState:"shown"}},pseudo:{hover:['#tab-hover-example [class^="TitleBlockZen-TitleBlockZen-module__navigationTabsList"] li:nth-child(2) a','#Breadcrumbs-hover-example [class^="TitleBlockZen-TitleBlockZen-module__breadcrumb"]'],focus:['#tab-focus-example [class^="TitleBlockZen-TitleBlockZen-module__navigationTabsList"] li:nth-child(2) a','#Breadcrumbs-focus-example [class^="TitleBlockZen-TitleBlockZen-module__breadcrumb"]']},a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"landmark-unique",enabled:!1}]}}},render:t=>e.createElement(r,null,e.createElement(r.Row,{rowTitle:"Tab hover"},e.createElement("div",{className:"px-12 bg-purple-600"},e.createElement(l,{...t,id:"tab-hover-example"}))),e.createElement(r.Row,{rowTitle:"Tab focus"},e.createElement("div",{className:"px-12 bg-purple-600"},e.createElement(l,{...t,id:"tab-focus-example"}))),e.createElement(r.Row,{rowTitle:"Breadcrumbs hover"},e.createElement("div",{className:"px-12 bg-purple-600"},e.createElement(l,{...t,id:"Breadcrumbs-hover-example"}))),e.createElement(r.Row,{rowTitle:"Breadcrumbs focus"},e.createElement("div",{className:"px-12 bg-purple-600"},e.createElement(l,{...t,id:"Breadcrumbs-focus-example"}))))};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      viewports: {
        default: {
          name: "Above or equal to 1366",
          styles: {
            width: "1366px",
            height: "800px"
          },
          type: "desktop"
        },
        under1366: {
          name: "Under 1366",
          styles: {
            width: "1365px",
            height: "800px"
          },
          type: "desktop"
        },
        mediumSmall: {
          name: "Medium and small",
          styles: {
            width: "1079px",
            height: "800px"
          },
          type: "desktop"
        }
      },
      defaultViewport: "default"
    },
    chromatic: {
      disable: false,
      viewports: [1079, 1365, 1366]
    }
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,k,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      viewports: {
        default: {
          name: "Above or equal to 1366",
          styles: {
            width: "1366px",
            height: "800px"
          },
          type: "desktop"
        },
        under1366: {
          name: "Under 1366",
          styles: {
            width: "1365px",
            height: "800px"
          },
          type: "desktop"
        }
      },
      defaultViewport: "default"
    },
    chromatic: {
      disable: false,
      viewports: [1365, 1366]
    }
  },
  args: {
    title: "A long title with over thirty characters"
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,x,g;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    },
    pseudo: {
      hover: ['#tab-hover-example [class^="TitleBlockZen-TitleBlockZen-module__navigationTabsList"] li:nth-child(2) a', '#Breadcrumbs-hover-example [class^="TitleBlockZen-TitleBlockZen-module__breadcrumb"]'],
      focus: ['#tab-focus-example [class^="TitleBlockZen-TitleBlockZen-module__navigationTabsList"] li:nth-child(2) a', '#Breadcrumbs-focus-example [class^="TitleBlockZen-TitleBlockZen-module__breadcrumb"]']
    },
    a11y: {
      config: {
        rules: [{
          id: "color-contrast",
          // false positive from animate in on the breadcrumbs
          enabled: false
        }, {
          id: "landmark-unique",
          // false positive from having multiple TitleBlocks on a page
          enabled: false
        }]
      }
    }
  },
  render: args => <StickerSheet>
      <StickerSheet.Row rowTitle="Tab hover">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="tab-hover-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Tab focus">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="tab-focus-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Breadcrumbs hover">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="Breadcrumbs-hover-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Breadcrumbs focus">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="Breadcrumbs-focus-example" />
        </div>
      </StickerSheet.Row>
    </StickerSheet>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const E=["Playground","Viewports","HasLongTitle","StickerSheetDefault"],O=Object.freeze(Object.defineProperty({__proto__:null,HasLongTitle:s,Playground:o,StickerSheetDefault:i,Viewports:n,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{o as P,O as T};
