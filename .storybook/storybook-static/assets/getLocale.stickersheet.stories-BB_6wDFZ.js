import{R as e}from"./index-CTjT7uj6.js";import{S as r}from"./StickerSheet-DpoO9nWV.js";import{g as s}from"./getLocale-DZ-phe2v.js";import{L as c}from"./constants-DA26eKbW.js";import{C as m}from"./CalendarSingle-DmO3h1TK.js";import"./index-CCQ3W5xA.js";import"./Heading-hQmlkvcj.js";import"./tslib.es6-CY32MZYl.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./startOfDay-MoyOWjoN.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./SVG-7WFwBCn9.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./isValidWeekStartsOn-CZGl9tvK.js";import"./en-AU-C5dfMWdV.js";const _={title:"Components/Date controls/DatePicker/Tests",parameters:{chromatic:{disable:!1},controls:{disable:!0}}},t={tags:["skip-test"],name:"Util - getLocale",render:()=>{const i=[...Object.keys(c),"kr","no","en-AU","en-US"];return e.createElement(r,{heading:"Util - getLocale"},e.createElement(r.Body,null,i.map(o=>e.createElement(r.Row,{key:o,rowTitle:o},e.createElement(m,{defaultMonth:new Date("2021-09-05"),locale:s(o)})))))}};var a,n,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Skip running this with test-storybook (still runs in Chromatic) as it times out
  tags: ["skip-test"],
  name: "Util - getLocale",
  render: () => {
    const locales = [...Object.keys(LOCALE_REGIONS),
    // The following are for murmur
    "kr", "no",
    // Old API values
    "en-AU", "en-US"];
    return <StickerSheet heading="Util - getLocale">
        <StickerSheet.Body>
          {locales.map(locale => <StickerSheet.Row key={locale} rowTitle={locale}>
              <CalendarSingle defaultMonth={new Date("2021-09-05")} locale={getLocale(locale)} />
            </StickerSheet.Row>)}
        </StickerSheet.Body>
      </StickerSheet>;
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const b=["UtilGetLocale"];export{t as UtilGetLocale,b as __namedExportsOrder,_ as default};
