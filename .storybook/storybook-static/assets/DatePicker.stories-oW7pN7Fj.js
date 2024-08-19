import{r as o,R as e}from"./index-CTjT7uj6.js";import{a as T}from"./chunk-454WOBUV-CM0pFb8Z.js";import{w as v,u as w,e as y}from"./index-BySiBzEG.js";import{H as me}from"./index-BtE2hmwC.js";import{d as ue}from"./defaultMonthControls-DfKCABiO.js";import{w as pe}from"./weekStartsOnControls-Bn16c4HG.js";import{T as S}from"./Text-D2gQH1xL.js";import{d as he,a as ge}from"./disabledDayMatchersControls-dDSQeGtU.js";import{D as V}from"./DatePicker-0W3pptDD.js";import{B as be}from"./Button-DDkdQqLR.js";const ve={title:"Components/Date controls/DatePicker",component:V,argTypes:{...he,...ue,...ge,...pe,buttonRef:{control:!1},selectedDay:{options:["None","Today","May2022"],control:{type:"select",labels:{None:"undefined",May2022:"1st May 2022"}},mapping:{None:void 0,Today:new Date,May2022:new Date("2022-05-01")}},validationMessage:{control:"text"},description:{control:"text"},onValidate:{options:[void 0,"Actions"],control:{type:"radio",labels:{Actions:"Log in Actions"}},mapping:{Actions:T("onValidate")}}},args:{labelText:"Date",selectedDay:void 0,onDayChange:T("on day change")}},D={render:t=>{const[a,s]=o.useState(t.selectedDay);return o.useEffect(()=>{s(t.selectedDay)},[t.selectedDay]),e.createElement(V,{...t,selectedDay:a,onDayChange:s})}},r={...D,parameters:{docs:{canvas:{sourceState:"shown"}}}},i={...D,args:{labelText:"Label text"}},we=`
const [selectedDate, setValueDate] = useState<Date | undefined>()

return (
  <DatePicker
    selectedDay={selectedDate}
    onDayChange={setValueDate}
  />
)
`,l={...D,args:{selectedDay:new Date},parameters:{docs:{source:{code:we}}}},c={...D,args:{locale:"en-US",selectedDay:new Date}},d={args:{description:"Custom description!"}},m={render:()=>{const[t,a]=o.useState(new Date("2022-05-05")),[s,E]=o.useState(),[re,ie]=o.useState(),[le,f]=o.useState(),ce=n=>{var x;if(ie(n),n.isValidDate&&((x=n.date)==null?void 0:x.getFullYear())!==new Date().getFullYear()){E("caution"),f("Date is not this year");return}E(n.status),f(n.validationMessage)},de=n=>{if(n.preventDefault(),s==="error"||s==="caution")return f("There is an error"),E("error"),alert("Error");alert("Success")};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:de},e.createElement(V,{labelText:"Label",selectedDay:t,onDayChange:a,onValidate:ce,status:s,validationMessage:le,disabledBefore:new Date,locale:"en-AU"}),e.createElement("div",{style:{marginTop:"2rem",marginBottom:"2rem"}},e.createElement(be,{type:"submit",label:"Submit"}))),e.createElement("div",null,e.createElement(S,{variant:"body"},"NOTE: This story includes additional custom validation to provide some guidance when dealing with validation other than date isInvalid or isDisabled."),e.createElement("ul",null,e.createElement("li",null,"There will be a caution when the selectedDay"," ",e.createElement("strong",null,"is valid")," but"," ",e.createElement("strong",null,"is not within this year"),"."),e.createElement("li",null,"There will be an error when the"," ",e.createElement("strong",null,"submit button is clicked")," and there is a"," ",e.createElement("strong",null,"current error")," within the DatePicker.")),e.createElement(S,{variant:"body"},"The ",e.createElement("code",null,"onValidate")," callback returns a"," ",e.createElement("code",null,"validationResponse")," object which provides data such as a default validation message, and can be utilised for custom validation."),e.createElement(me,{className:"json"},JSON.stringify(re,null,4)),e.createElement("ul",null,e.createElement("li",null,e.createElement("code",null,"isInvalid"),': A date that cannot be parsed. e.g "potato".'),e.createElement("li",null,e.createElement("code",null,"isDisabled"),": A date that have been set as disabled through the ",e.createElement("code",null,"disabledDates")," prop."),e.createElement("li",null,e.createElement("code",null,"isEmpty"),": Input is empty."),e.createElement("li",null,e.createElement("code",null,"isValidDate"),": Date input that is not"," ",e.createElement("code",null,"invalid")," nor ",e.createElement("code",null,"disabled")," nor"," ",e.createElement("code",null,"empty"),"."))))},parameters:{docs:{source:{type:"code"}},controls:{disable:!0}}},u={parameters:{controls:{include:/^disabled/}}},p={name:"At 400% window size",parameters:{controls:{disable:!0},viewport:{viewports:{ViewportAt400:{name:"Viewport at 400%",styles:{width:"320px",height:"350px"}}},defaultViewport:"ViewportAt400"},a11y:{disable:!0}},play:async({canvasElement:t})=>{const a=v(t);await w.click(a.getByRole("button",{name:"Choose date"})),await y(a.getByRole("dialog")).toBeInTheDocument()}},h={name:"Limited viewport autoplacement above",args:{labelText:"Calendar with space above"},parameters:{viewport:{viewports:{LimitedViewportAutoPlace:{name:"Limited vertical space",styles:{width:"1024px",height:"500px"}}},defaultViewport:"LimitedViewportAutoPlace"},a11y:{disable:!0}},decorators:[t=>e.createElement("div",{className:"mt-[350px]"},e.createElement(t,null))],play:async({canvasElement:t})=>{const a=v(t);await w.click(a.getByRole("button",{name:"Choose date"})),await y(a.getByRole("dialog")).toBeInTheDocument()}},g={name:"Limited viewport height",args:{labelText:"Calendar with reduced space below"},parameters:{viewport:{viewports:{LimitedViewportHeight:{name:"Limited vertical space",styles:{width:"1024px",height:"300px"}}},defaultViewport:"LimitedViewportHeight"},a11y:{disable:!0}},decorators:[t=>e.createElement("div",{className:"mb-[150px]"},e.createElement(t,null))],play:async({canvasElement:t})=>{const a=v(t);await w.click(a.getByRole("button",{name:"Choose date"})),await y(a.getByRole("dialog")).toBeInTheDocument()}},b={name:"Full viewport height",args:{labelText:"Calendar with full space below"},decorators:[t=>e.createElement("div",{className:"mb-[350px]"},e.createElement(t,null))],play:async({canvasElement:t})=>{const a=v(t);await w.click(a.getByRole("button",{name:"Choose date"})),await y(a.getByRole("dialog")).toBeInTheDocument()},parameters:{a11y:{disable:!0}}};var R,C,L;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...DatePickerTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(L=(C=r.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var B,k,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DatePickerTemplate,
  args: {
    labelText: "Label text"
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var P,M,I;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DatePickerTemplate,
  args: {
    selectedDay: new Date()
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeControlled
      }
    }
  }
}`,...(I=(M=l.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var N,H,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DatePickerTemplate,
  args: {
    locale: "en-US",
    selectedDay: new Date()
  }
}`,...(F=(H=c.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var O,j,_;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    description: "Custom description!"
  }
}`,...(_=(j=d.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var q,U,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setValueDate] = useState<Date | undefined>(new Date("2022-05-05"));
    const [status, setStatus] = useState<FieldMessageStatus | undefined>();
    const [response, setResponse] = useState<ValidationResponse | undefined>();
    const [validationMessage, setValidationMessage] = useState<ValidationResponse["validationMessage"]>();
    const handleValidation = (validationResponse: ValidationResponse): void => {
      setResponse(validationResponse);
      // An example of additional validation
      if (validationResponse.isValidDate && validationResponse.date?.getFullYear() !== new Date().getFullYear()) {
        setStatus("caution");
        setValidationMessage("Date is not this year");
        return;
      }
      setStatus(validationResponse.status);
      setValidationMessage(validationResponse.validationMessage);
    };
    const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
      e.preventDefault();
      if (status === "error" || status === "caution") {
        setValidationMessage("There is an error");
        setStatus("error");
        return alert("Error");
      }
      alert("Success");
    };
    return <>
        <form onSubmit={submitRequest}>
          <DatePicker labelText="Label" selectedDay={selectedDate} onDayChange={setValueDate} onValidate={handleValidation} status={status} validationMessage={validationMessage} disabledBefore={new Date()} locale="en-AU" />
          <div style={{
          marginTop: "2rem",
          marginBottom: "2rem"
        }}>
            <Button type="submit" label="Submit" />
          </div>
        </form>

        <div>
          <Text variant="body">
            NOTE: This story includes additional custom validation to provide
            some guidance when dealing with validation other than date isInvalid
            or isDisabled.
          </Text>
          <ul>
            <li>
              There will be a caution when the selectedDay{" "}
              <strong>is valid</strong> but{" "}
              <strong>is not within this year</strong>.
            </li>
            <li>
              There will be an error when the{" "}
              <strong>submit button is clicked</strong> and there is a{" "}
              <strong>current error</strong> within the DatePicker.
            </li>
          </ul>
          <Text variant="body">
            The <code>onValidate</code> callback returns a{" "}
            <code>validationResponse</code> object which provides data such as a
            default validation message, and can be utilised for custom
            validation.
          </Text>
          <Highlight className="json">
            {JSON.stringify(response, null, 4)}
          </Highlight>
          <ul>
            <li>
              <code>isInvalid</code>: A date that cannot be parsed. e.g
              &quot;potato&quot;.
            </li>
            <li>
              <code>isDisabled</code>: A date that have been set as disabled
              through the <code>disabledDates</code> prop.
            </li>
            <li>
              <code>isEmpty</code>: Input is empty.
            </li>
            <li>
              <code>isValidDate</code>: Date input that is not{" "}
              <code>invalid</code> nor <code>disabled</code> nor{" "}
              <code>empty</code>.
            </li>
          </ul>
        </div>
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,z,J;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: /^disabled/
    }
  }
}`,...(J=(z=u.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var G,K,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "At 400% window size",
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      viewports: {
        ViewportAt400: {
          name: "Viewport at 400%",
          styles: {
            width: "320px",
            height: "350px"
          }
        }
      },
      defaultViewport: "ViewportAt400"
    },
    a11y: {
      disable: true
    } // accessible label fix to be addressed in a separate PR
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Choose date"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Limited viewport autoplacement above",
  args: {
    labelText: "Calendar with space above"
  },
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportAutoPlace: {
          name: "Limited vertical space",
          styles: {
            width: "1024px",
            height: "500px"
          }
        }
      },
      defaultViewport: "LimitedViewportAutoPlace"
    },
    a11y: {
      disable: true
    } // accessible label fix to be addressed in a separate PR
  },
  decorators: [Story => <div className="mt-[350px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Choose date"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Limited viewport height",
  args: {
    labelText: "Calendar with reduced space below"
  },
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportHeight: {
          name: "Limited vertical space",
          styles: {
            width: "1024px",
            height: "300px"
          }
        }
      },
      defaultViewport: "LimitedViewportHeight"
    },
    a11y: {
      disable: true
    } // accessible label fix to be addressed in a separate PR
  },
  decorators: [Story => <div className="mb-[150px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Choose date"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(ae=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,oe;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Full viewport height",
  args: {
    labelText: "Calendar with full space below"
  },
  decorators: [Story => <div className="mb-[350px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Choose date"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  },
  parameters: {
    a11y: {
      disable: true
    } // accessible label fix to be addressed in a separate PR
  }
}`,...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const ye=["Playground","LabelText","Controlled","Locale","Description","Validation","DisabledDays","LimitedWindowWidth","AboveIfAvailable","LimitedViewportHeight","FullViewportHeight"],Be=Object.freeze(Object.defineProperty({__proto__:null,AboveIfAvailable:h,Controlled:l,Description:d,DisabledDays:u,FullViewportHeight:b,LabelText:i,LimitedViewportHeight:g,LimitedWindowWidth:p,Locale:c,Playground:r,Validation:m,__namedExportsOrder:ye,default:ve},Symbol.toStringTag,{value:"Module"}));export{h as A,l as C,Be as D,b as F,i as L,r as P,m as V,c as a,d as b,u as c,g as d};
