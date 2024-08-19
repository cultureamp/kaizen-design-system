import{R as e,r as a}from"./index-CTjT7uj6.js";import{a as L}from"./chunk-454WOBUV-CM0pFb8Z.js";import{w as _,u as l}from"./index-BySiBzEG.js";import{i as H}from"./isChromatic-VqprqId_.js";import{S as t}from"./StickerSheet-DpoO9nWV.js";import{F as i,a as S}from"./FilterDateRangePicker-IyXssijA.js";import{S as V}from"./IntlProvider-CIBib2vn.js";import{F as g}from"./FilterButton-BGzpTfmP.js";import"./v4-CQkTLCs1.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./getLocale-DZ-phe2v.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./validateDate-Bbd7IJoY.js";import"./enums-Cb8LLpRk.js";import"./isDisabledDate-DCznrglD.js";import"./Label-DlmzItqQ.js";import"./isRefObject-39zMTbtm.js";import"./Input-BFyrvMXQ.js";import"./LabelledMessage-CyRdzdqY.js";import"./useIntl-Ci3jBQGG.js";import"./index-DBmEjBSQ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./message-BF0EX5jj.js";import"./useDateInputHandlers-CFHAAAKV.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./SVG-7WFwBCn9.js";import"./Text-D2gQH1xL.js";import"./VisuallyHidden-CDYjeGzr.js";import"./CalendarRange-BpKdqjCg.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./en-AU-C5dfMWdV.js";import"./FilterContents-MyXMWDj6.js";import"./Combination-DFaMps7A.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./usePopper-D4ykrdaR.js";import"./index-9r8iugjR.js";import"./constants-DA26eKbW.js";import"./iframe-KYiyEPLH.js";import"../sb-preview/runtime.js";import"./ChevronDownIcon-prLLyjG_.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./FilterButtonBase-D953FwLo.js";const u=H(),_e={title:"Components/Filter Date Range Picker",parameters:{chromatic:{disable:!1},controls:{disable:!0},a11y:{timeout:3e3}}},P={render:()=>{const[r,n]=a.useState(!1),[o,p]=a.useState({from:new Date("2022-05-15")}),[y,v]=a.useState(!1),[T,B]=a.useState({from:new Date("2022-05-15"),to:new Date("2022-06-22")}),[O,U]=a.useState(),[b,I]=a.useState({from:new Date("2022-05-15"),to:new Date("2022-06-22")}),[A,x]=a.useState({from:new Date("2022-05-15")});return e.createElement(e.Fragment,null,e.createElement(t,{heading:"Filter Date Range Picker",style:{paddingBottom:u?"33rem":void 0}},e.createElement(t.Header,{headings:["Partial range","Complete range"]}),e.createElement(t.Body,null,e.createElement(t.Row,null,e.createElement(i,{isOpen:r,setIsOpen:n,renderTrigger:d=>e.createElement(g,{...d,"data-testid":"stickersheet--filter-drp--partial-range-button"}),label:"Dates",locale:"en-US",selectedRange:o,onRangeChange:p}),e.createElement(i,{isOpen:y,setIsOpen:v,renderTrigger:d=>e.createElement(g,{...d}),label:"Dates",locale:"en-US",selectedRange:T,onRangeChange:B})))),e.createElement(t,{heading:"Filter Date Range Picker Field"},e.createElement(t.Body,null,e.createElement(t.Row,{rowTitle:"Default"},e.createElement(S,{id:"stickersheet--filter-drp-field--default",label:"Dates",locale:"en-US",defaultMonth:new Date("2022-05-01"),selectedRange:O,onRangeChange:U})),e.createElement(t.Row,{rowTitle:"Existing value"},e.createElement(S,{id:"stickersheet--filter-drp-field--existing",label:"Dates",locale:"en-US",selectedRange:b,onRangeChange:I})),e.createElement(t.Row,{rowTitle:"Validation"},e.createElement(S,{id:"stickersheet--filter-drp-field--validation",label:"Dates",locale:"en-US",selectedRange:A,onRangeChange:x,onValidate:{dateStart:L("Validation story: date start onValidate")},validationMessage:{dateStart:{status:"error",message:"(Start date custom message) Jelly-filled doughnuts are my favourite!"}},inputEndDateProps:{"data-testid":"test__filter-drp-field--validation--end"}})))))},play:async({canvasElement:r})=>{const n=_(r),o=n.getByTestId("test__filter-drp-field--validation--end");if(await l.click(o),await l.type(o,"potato"),await l.click(document.body),u){const p=n.getByTestId("stickersheet--filter-drp--partial-range-button");await l.click(p)}}},s={...P,name:"Sticker Sheet (Default)"},c={...P,name:"Sticker Sheet (RTL)",parameters:{textDirection:"rtl"}},m={name:"Sticker Sheet (Locales)",render:()=>{const r={isOpen:!1,setIsOpen:()=>{},renderTrigger:n=>e.createElement(g,{...n}),label:"Dates",selectedRange:{from:new Date("2022-05-15"),to:new Date("2022-06-22")},onRangeChange:()=>{},locale:"en-AU"};return e.createElement(e.Fragment,null,e.createElement(t,{heading:"Localisation"},e.createElement(t.Header,{headings:["en-AU","en-US"]}),e.createElement(t.Body,null,e.createElement(t.Row,null,e.createElement(i,{...r,locale:"en-AU"}),e.createElement(i,{...r,locale:"en-US"})))),e.createElement(t,null,e.createElement(t.Header,{headings:["fr-CA"]}),e.createElement(t.Body,null,e.createElement(t.Row,null,e.createElement(V,{locale:"fr-CA"},e.createElement(i,{...r,locale:"fr-CA",isOpen:!0}))))))},decorators:[r=>e.createElement("div",{className:"mb-[520px]"},e.createElement(r,null))]};var h,f,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)"
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var R,E,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl"
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var w,F,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Sticker Sheet (Locales)",
  render: () => {
    const props = ({
      isOpen: false,
      setIsOpen: () => undefined,
      renderTrigger: (triggerButtonProps): JSX.Element => <FilterButton {...triggerButtonProps} />,
      label: "Dates",
      selectedRange: {
        from: new Date("2022-05-15"),
        to: new Date("2022-06-22")
      },
      onRangeChange: () => undefined,
      locale: "en-AU"
    } satisfies FilterDateRangePickerProps);
    return <>
        <StickerSheet heading="Localisation">
          <StickerSheet.Header headings={["en-AU", "en-US"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <FilterDateRangePicker {...props} locale="en-AU" />
              <FilterDateRangePicker {...props} locale="en-US" />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet>
          <StickerSheet.Header headings={["fr-CA"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <StaticIntlProvider locale="fr-CA">
                <FilterDateRangePicker {...props} locale="fr-CA" isOpen />
              </StaticIntlProvider>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
      </>;
  },
  decorators: [Story => <div className="mb-[520px]">
        <Story />
      </div>]
}`,...(C=(F=m.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const He=["StickerSheetDefault","StickerSheetRTL","StickerSheetLocales"];export{s as StickerSheetDefault,m as StickerSheetLocales,c as StickerSheetRTL,He as __namedExportsOrder,_e as default};
