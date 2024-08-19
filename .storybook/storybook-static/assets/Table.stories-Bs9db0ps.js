import{R as e}from"./index-CTjT7uj6.js";import{a as n}from"./chunk-454WOBUV-CM0pFb8Z.js";import{E as T}from"./EffectivenessIcon-DTBE5ph5.js";import{T as y}from"./Text-D2gQH1xL.js";import{T as de,a as pe,b as x,c as me,d as ue,e as be}from"./Table-CqZnScg6.js";import{D as he}from"./Divider-B-j384PU.js";import{C as we}from"./Checkbox-B9bmVoGZ.js";const a={render:({container:r,headerRowCells:re,tableCards:te,row:se,rowCells:oe})=>e.createElement(de,{...r},e.createElement(pe,null,e.createElement(x,null,re.map((w,g)=>e.createElement(me,{key:g,...w})))),te.map((w,g)=>e.createElement(ue,{...w,key:g},e.createElement(x,{...se},oe.map(({children:le,...ce},ie)=>e.createElement(be,{...ce,key:ie},e.createElement(y,{tag:"div",variant:"body"},le)))),w.expanded&&e.createElement(e.Fragment,null,e.createElement(he,{variant:"content"}),e.createElement(y,{tag:"div",variant:"body",classNameOverride:"p-16"},"Overall progress")))))},ge={...a,title:"Components/Table",parameters:{chromatic:{disable:!1},docs:{source:{type:"dynamic"}},a11y:{config:{rules:[{id:"nested-interactive",enabled:!1},{id:"aria-required-children",enabled:!1},{id:"aria-required-parent",enabled:!1}]}}},args:{tableCards:[{expanded:!1},{expanded:!1}],headerRowCells:[{labelText:"Resource name",width:3/12},{labelText:"Supplementary information",width:3/12},{labelText:"Date",width:3/12},{labelText:"Price",width:3/12}],rowCells:[{width:3/12,children:"Resource"},{width:3/12,children:"Supplementary"},{width:3/12,children:"Today"},{width:3/12,children:"100"}]},decorators:[r=>e.createElement("div",{style:{margin:"1rem auto",width:"100%",maxWidth:"60rem"}},e.createElement(r,null))]},t={...a,parameters:{docs:{source:{type:"dynamic"}}}},s={...a,parameters:{docs:{source:{type:"dynamic"}}},args:{headerRowCells:[{labelText:"Resource name",sorting:"ascending",onClick:n("Sort Resource name"),width:3/12},{labelText:"Supplementary information",sorting:"descending",onClick:n("Sort Supplementary information"),width:3/12},{labelText:"Date",width:3/12},{labelText:"Price",width:3/12}]}},o={...a,args:{container:{variant:"data"}},parameters:{docs:{source:{type:"dynamic"}}}},l={...a,args:{headerRowCells:[{labelText:"Resource name",sorting:"ascending",onClick:n("Sort Resource name by ascending"),width:3/12,reversed:!0},{labelText:"Supplementary information",width:3/12,reversed:!0},{labelText:"Date",width:3/12,reversed:!0},{labelText:"Price",width:3/12,reversed:!0}]},parameters:{docs:{source:{type:"dynamic"}}},decorators:[r=>e.createElement("div",{className:"bg-purple-700 p-16"},e.createElement(r,null))]},c={...a,args:{container:{variant:"compact"}},parameters:{docs:{source:{type:"dynamic"}}}},i={...a,args:{container:{variant:"default"}},parameters:{docs:{source:{type:"dynamic"}}}},d={...a,args:{headerRowCells:[{checkable:!0,onCheck:n("onCheck header-1"),checkboxLabel:"Select all Employees",labelText:"Employee",width:5/12},{labelText:"Job title",width:3/12},{labelText:"Date",width:2/12},{labelText:"Score",width:2/12}],rowCells:[{width:5/12,children:e.createElement("span",{className:"flex gap-12"},e.createElement(we,{"aria-label":"Employee x"}),e.createElement("span",null,"Employee name"))},{width:3/12,children:"Engineer"},{width:2/12,children:"Today"},{width:2/12,children:"100"}]},parameters:{docs:{source:{type:"dynamic"}}}},p={...a,args:{tableCards:[{href:"#?foo=bar"},{href:"#?bar=foo"}]},parameters:{docs:{source:{type:"dynamic"}}}},m={...a,args:{headerRowCells:[{icon:e.createElement(T,{role:"presentation"}),labelText:"Resource name",width:3/12},{icon:e.createElement(T,{role:"presentation"}),labelText:"Supplementary information",width:3/12},{labelText:"Date",width:3/12},{labelText:"Price",width:3/12}]},parameters:{docs:{source:{type:"dynamic"}}}},u={...a,args:{tableCards:[{expanded:!0,expandedStyle:"popout",onClick:n("Set expanded to false")},{expanded:!1}]},parameters:{docs:{source:{type:"dynamic"}}}},b={...a,args:{headerRowCells:[{labelText:"Header align start with wrapping",wrapping:"wrap",align:"start"},{labelText:"Default alignment",width:3/12},{labelText:"Header center",align:"center",width:3/12},{labelText:"Header align with end with wrapping",wrapping:"wrap",align:"end",width:3/12}]},parameters:{docs:{source:{type:"dynamic"}}}},h={...a,args:{headerRowCells:[{labelText:"Resource name",tooltipInfo:"Sort this by ascending",sorting:"ascending",onClick:n("Sort Resource name by ascending"),width:3/12},{labelText:"Supplementary information",width:3/12},{labelText:"Date",width:3/12},{labelText:"Price",width:3/12}]},parameters:{docs:{source:{type:"dynamic"}}}};var f,S,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...TableTemplate,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,R,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...TableTemplate,
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  args: {
    headerRowCells: [{
      labelText: "Resource name",
      sorting: "ascending",
      onClick: action("Sort Resource name"),
      width: 3 / 12
    }, {
      labelText: "Supplementary information",
      sorting: "descending",
      onClick: action("Sort Supplementary information"),
      width: 3 / 12
    }, {
      labelText: "Date",
      width: 3 / 12
    }, {
      labelText: "Price",
      width: 3 / 12
    }]
  }
}`,...(v=(R=s.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var k,D,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    container: {
      variant: "data"
    }
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var H,I,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    headerRowCells: [{
      labelText: "Resource name",
      sorting: "ascending",
      onClick: action("Sort Resource name by ascending"),
      width: 3 / 12,
      reversed: true
    }, {
      labelText: "Supplementary information",
      width: 3 / 12,
      reversed: true
    }, {
      labelText: "Date",
      width: 3 / 12,
      reversed: true
    }, {
      labelText: "Price",
      width: 3 / 12,
      reversed: true
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  decorators: [Story => <div className="bg-purple-700 p-16">
        <Story />
      </div>]
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var V,L,N;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    container: {
      variant: "compact"
    }
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,A,W;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    container: {
      variant: "default"
    }
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var j,q,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    headerRowCells: [{
      checkable: true,
      onCheck: action("onCheck header-1"),
      checkboxLabel: "Select all Employees",
      labelText: "Employee",
      width: 5 / 12
    }, {
      labelText: "Job title",
      width: 3 / 12
    }, {
      labelText: "Date",
      width: 2 / 12
    }, {
      labelText: "Score",
      width: 2 / 12
    }],
    rowCells: [{
      width: 5 / 12,
      children: <span className="flex gap-12">
            <Checkbox aria-label="Employee x" />
            <span>Employee name</span>
          </span>
    }, {
      width: 3 / 12,
      children: "Engineer"
    }, {
      width: 2 / 12,
      children: "Today"
    }, {
      width: 2 / 12,
      children: "100"
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var z,F,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    tableCards: [{
      href: "#?foo=bar"
    }, {
      href: "#?bar=foo"
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var B,G,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    headerRowCells: [{
      icon: <EffectivenessIcon role="presentation" />,
      labelText: "Resource name",
      width: 3 / 12
    }, {
      icon: <EffectivenessIcon role="presentation" />,
      labelText: "Supplementary information",
      width: 3 / 12
    }, {
      labelText: "Date",
      width: 3 / 12
    }, {
      labelText: "Price",
      width: 3 / 12
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    tableCards: [{
      expanded: true,
      expandedStyle: "popout",
      onClick: action("Set expanded to false")
    }, {
      expanded: false
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    headerRowCells: [{
      labelText: "Header align start with wrapping",
      wrapping: "wrap",
      align: "start"
    }, {
      labelText: "Default alignment",
      width: 3 / 12
    }, {
      labelText: "Header center",
      align: "center",
      width: 3 / 12
    }, {
      labelText: "Header align with end with wrapping",
      wrapping: "wrap",
      align: "end",
      width: 3 / 12
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...TableTemplate,
  args: {
    headerRowCells: [{
      labelText: "Resource name",
      tooltipInfo: "Sort this by ascending",
      sorting: "ascending",
      onClick: action("Sort Resource name by ascending"),
      width: 3 / 12
    }, {
      labelText: "Supplementary information",
      width: 3 / 12
    }, {
      labelText: "Date",
      width: 3 / 12
    }, {
      labelText: "Price",
      width: 3 / 12
    }]
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const Te=["Playground","Sorting","Data","Reversed","Compact","Default","CheckboxVariant","LinkVariant","IconVariant","Expandable","HeaderAlignmentAndWrapping","Tooltip"],ve=Object.freeze(Object.defineProperty({__proto__:null,CheckboxVariant:d,Compact:c,Data:o,Default:i,Expandable:u,HeaderAlignmentAndWrapping:b,IconVariant:m,LinkVariant:p,Playground:t,Reversed:l,Sorting:s,Tooltip:h,__namedExportsOrder:Te,default:ge},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D,u as E,b as H,m as I,p as L,t as P,l as R,s as S,ve as T,i as a,h as b};
