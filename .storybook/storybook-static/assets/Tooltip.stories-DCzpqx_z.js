import{R as e}from"./index-CTjT7uj6.js";import{F as h}from"./FilterButtonBase-D953FwLo.js";import{I as V}from"./InformationIcon-DxLaBSbb.js";import{Q as K}from"./QuestionIcon-Bxxn-ARD.js";import{R as X}from"./RemoveLinkIcon-D9z3k6B4.js";import{T as Y}from"./Text-D2gQH1xL.js";import{T as t}from"./index-CdP7-hSn.js";import{B as x}from"./Button-DDkdQqLR.js";import{T as b}from"./Tag-D-4sFjnu.js";import{I as Z}from"./IconButton-DH93ECWt.js";import{B as $}from"./ButtonGroup-Cm1_R1hn.js";import{T as ee,a as te,b as ne,c as u}from"./Table-CqZnScg6.js";import{C as T}from"./CheckboxField-Dex_qNHg.js";const oe={title:"Overlays/Tooltip/v1",component:t,args:{text:"Example tooltip text."},decorators:[n=>e.createElement("div",{className:"flex mt-[60px] gap-12"},e.createElement(n,null))],parameters:{layout:"centered"}},o={parameters:{docs:{canvas:{sourceState:"shown"}}},render:n=>e.createElement(t,{...n},e.createElement(x,{label:"Hover or focus me"}))},r={render:n=>e.createElement(e.Fragment,null,e.createElement("p",null,`Default Placement is 'above'. Scroll horizontally or vertically to view the Tooltip "flip" and move according to the space of the viewport. Ensuring the Tooltip does not get cut off.`),e.createElement("div",{style:{display:"flex",width:"300px",maxHeight:"700px",overflow:"scroll",border:"solid black 2px",flexDirection:"column"}},e.createElement("div",{style:{width:"500px",marginLeft:"200px",marginTop:"400px"}},e.createElement("div",{style:{width:"300px",height:"200px",textAlign:"center",position:"relative"}},e.createElement(t,{...n,display:"inline-block",text:"Tooltip label"},e.createElement(x,{label:"Default"})))),e.createElement("div",{style:{width:"500px",marginLeft:"200px"}},e.createElement("div",{style:{width:"300px",height:"100px",textAlign:"center",position:"relative"}},e.createElement(t,{...n,display:"inline",text:"Tooltip label"},e.createElement(V,{role:"img","aria-label":"Info"})))),e.createElement("div",{style:{width:"500px",marginLeft:"200px",marginBottom:"500px"}},e.createElement("div",{style:{width:"300px",height:"200px",textAlign:"center",position:"relative"}},e.createElement(Y,{tag:"div",variant:"body"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nulla quas corporis? Perspiciatis, ratione voluptas"," ",e.createElement(t,{...n,display:"inline-block",text:"Tooltip label"},e.createElement(b,null,"ad veniam sapiente"))," ","Maxime harum, ducimus maiores itaque pariatur quod vel porro mollitia. Lorem ipsum dolor sit"," ",e.createElement(t,{...n,display:"inline",text:"Open in new tab"},e.createElement("a",{href:"#"},"amet consectetur adipisicing elit Itaque obcaecati maxime molestiae blanditiis pariatur")),". Magni perspiciatis assumenda in adipisci, eaque commodi quidem dolore, tempore provident animi"," ")))))},a={parameters:{docs:{source:{type:"dynamic"}}},render:n=>e.createElement(e.Fragment,null,e.createElement(t,{...n,text:"Contact customer support."},e.createElement(x,{label:"Help",icon:e.createElement(K,{role:"presentation"})})),e.createElement(t,{...n,text:"Remove the link from current selection."},e.createElement(Z,{label:"Remove link",icon:e.createElement(X,{role:"presentation"})})))},i={parameters:{docs:{source:{type:"dynamic"}}},render:n=>e.createElement(e.Fragment,null,e.createElement($,null,e.createElement(t,{...n,text:"Sort by first"},e.createElement(h,null,"First")),e.createElement(t,{...n,text:"Sort by last"},e.createElement(h,null,"Last"))))},l={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement(e.Fragment,null,e.createElement(ee,null,e.createElement(te,null,e.createElement(ne,null,e.createElement(u,{labelText:"Resources",sorting:"descending",width:3/12,onClick:()=>{},tooltipInfo:"Sort Resources by descending"}),e.createElement(u,{labelText:"Supplementary",width:3/12,onClick:()=>{},sorting:"ascending",tooltipInfo:"Sort Supplementary by ascending"}),e.createElement(u,{labelText:"Date",width:3/12}),e.createElement(u,{labelText:"Price",width:3/12})))))},s={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement(t,{text:"John Jonson Johnington the Third"},e.createElement(b,null,"John Jonson Jo..."))},c={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement(b,null,e.createElement(t,{text:"Visit John Jonson's profile"},e.createElement("a",{className:"text-inherit font no-underline",href:"#John"},"John Jonson")))},p={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"Select all users"},e.createElement(T,{labelText:"Users",id:"sb-checkbox-tooltip--id"})))},d={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"Select all users"},e.createElement(T,{labelText:"Users",id:"sb-checkbox-tooltip--id"})))},m={parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.createElement(e.Fragment,null,e.createElement(t,{text:"Select all users"},e.createElement(T,{labelText:"Users",id:"sb-checkbox-tooltip--id","aria-describedby":"sb-checkbox-description--id"}),e.createElement("span",{id:"sb-checkbox-description--id",className:"sr-only"},"Select all users")))};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <Tooltip {...args}>
      <Button label="Hover or focus me" />
    </Tooltip>
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,E,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <>
      <p>
        Default Placement is &apos;above&apos;. Scroll horizontally or
        vertically to view the Tooltip &quot;flip&quot; and move according to
        the space of the viewport. Ensuring the Tooltip does not get cut off.
      </p>

      <div style={{
      display: "flex",
      width: "300px",
      maxHeight: "700px",
      overflow: "scroll",
      border: "solid black 2px",
      flexDirection: "column"
    }}>
        <div style={{
        width: "500px",
        marginLeft: "200px",
        marginTop: "400px"
      }}>
          <div style={{
          width: "300px",
          height: "200px",
          textAlign: "center",
          position: "relative"
        }}>
            <Tooltip {...props} display="inline-block" text="Tooltip label">
              <Button label="Default" />
            </Tooltip>
          </div>
        </div>
        <div style={{
        width: "500px",
        marginLeft: "200px"
      }}>
          <div style={{
          width: "300px",
          height: "100px",
          textAlign: "center",
          position: "relative"
        }}>
            <Tooltip {...props} display="inline" text="Tooltip label">
              <InformationIcon role="img" aria-label="Info" />
            </Tooltip>
          </div>
        </div>
        <div style={{
        width: "500px",
        marginLeft: "200px",
        marginBottom: "500px"
      }}>
          <div style={{
          width: "300px",
          height: "200px",
          textAlign: "center",
          position: "relative"
        }}>
            <Text tag="div" variant="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              nulla quas corporis? Perspiciatis, ratione voluptas{" "}
              <Tooltip {...props} display="inline-block" text="Tooltip label">
                <Tag>ad veniam sapiente</Tag>
              </Tooltip>{" "}
              Maxime harum, ducimus maiores itaque pariatur quod vel porro
              mollitia. Lorem ipsum dolor sit{" "}
              <Tooltip {...props} display="inline" text="Open in new tab">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">
                  amet consectetur adipisicing elit Itaque obcaecati maxime
                  molestiae blanditiis pariatur
                </a>
              </Tooltip>
              . Magni perspiciatis assumenda in adipisci, eaque commodi quidem
              dolore, tempore provident animi{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
}`,...(w=(E=r.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var S,k,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: args => <>
      <Tooltip {...args} text="Contact customer support.">
        <Button label="Help" icon={<QuestionIcon role="presentation" />} />
      </Tooltip>
      <Tooltip {...args} text="Remove the link from current selection.">
        <IconButton label="Remove link" icon={<RemoveLinkIcon role="presentation" />} />
      </Tooltip>
    </>
}`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,F,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: args => <>
      <ButtonGroup>
        <Tooltip {...args} text="Sort by first">
          <FilterButtonBase>First</FilterButtonBase>
        </Tooltip>
        <Tooltip {...args} text="Sort by last">
          <FilterButtonBase>Last</FilterButtonBase>
        </Tooltip>
      </ButtonGroup>
    </>
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var J,I,H;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell labelText="Resources" sorting="descending" width={3 / 12} onClick={(): void => undefined} tooltipInfo="Sort Resources by descending" />
            <TableHeaderRowCell labelText="Supplementary" width={3 / 12} onClick={(): void => undefined} sorting="ascending" tooltipInfo="Sort Supplementary by ascending" />
            <TableHeaderRowCell labelText="Date" width={3 / 12} />
            <TableHeaderRowCell labelText="Price" width={3 / 12} />
          </TableRow>
        </TableHeader>
      </TableContainer>
    </>
}`,...(H=(I=l.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var q,L,W;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <Tooltip text="John Jonson Johnington the Third">
      <Tag>John Jonson Jo...</Tag>
    </Tooltip>
}`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var O,D,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <Tag>
      <Tooltip text="Visit John Jonson's profile">
        <a className="text-inherit font no-underline" href="#John">
          John Jonson
        </a>
      </Tooltip>
    </Tag>
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var A,U,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <>
      <Tooltip text="Select all users">
        <CheckboxField labelText="Users" id="sb-checkbox-tooltip--id" />
      </Tooltip>
    </>
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,M,N;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <>
      <Tooltip text="Select all users">
        <CheckboxField labelText="Users" id="sb-checkbox-tooltip--id" />
      </Tooltip>
    </>
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var j,z,Q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  render: () => <>
      <Tooltip text="Select all users">
        <CheckboxField labelText="Users" id="sb-checkbox-tooltip--id" aria-describedby="sb-checkbox-description--id" />
        <span id="sb-checkbox-description--id" className="sr-only">
          Select all users
        </span>
      </Tooltip>
    </>
}`,...(Q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const re=["Playground","OverflowScroll","ButtonsWithTooltip","ButtonGroupWithTooltip","TableHeadersWithTooltips","TagWithHoverOnlyTooltip","TagWithTooltip","TagWithCheckboxField","CheckboxFieldTooltip","CheckboxFieldWithDescriptionTooltip"],ge=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroupWithTooltip:i,ButtonsWithTooltip:a,CheckboxFieldTooltip:d,CheckboxFieldWithDescriptionTooltip:m,OverflowScroll:r,Playground:o,TableHeadersWithTooltips:l,TagWithCheckboxField:p,TagWithHoverOnlyTooltip:s,TagWithTooltip:c,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{a as B,d as C,r as O,o as P,ge as T,i as a,l as b,s as c,c as d,m as e,p as f};
