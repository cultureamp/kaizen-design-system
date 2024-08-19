import{R as e}from"./index-CTjT7uj6.js";import{i as P}from"./isChromatic-VqprqId_.js";import{A as i}from"./ArrowRightIcon-CtsqbiFB.js";import{E as k}from"./EmailIcon-D6OEJsmY.js";import{F as w}from"./FeedbackClassifyIcon-Cr5NKlPT.js";import{T as s}from"./Text-D2gQH1xL.js";import{M as E,a as I,F as M}from"./ExampleHeaders-DL9EpwRe.js";import{B}from"./BrandMoment-Drt-7p8A.js";import{B as A}from"./BrandMomentCaptureIntro-Cmbi87h4.js";import{B as C,a as x}from"./Scene-BFMjFkKq.js";const S=P(),n=S?{}:{isAnimated:!0,loop:!0},F={title:"Components/BrandMoment",component:B,argTypes:{mood:{control:!1},illustration:{control:!1},header:{control:!1}}},t={args:{variant:"informative",illustration:e.createElement(A,{...n}),header:e.createElement(E,null),text:{subtitle:"Welcome to Culture Amp",title:"Let's dive in and see how it works"}}},r={args:{variant:"informative",illustration:e.createElement(A,{...n}),header:e.createElement(E,null),text:{subtitle:"Welcome to Culture Amp",title:"Let's dive in and see how it works"},primaryAction:{label:"Get started",href:"#",icon:e.createElement(i,{role:"presentation"}),iconPosition:"end"}}},o={args:{variant:"success",illustration:e.createElement(C,{...n}),header:e.createElement(I,null),text:{subtitle:"Manager Effectiveness Survey",title:"That's it — thank you",body:e.createElement(e.Fragment,null,"Your responses have been securely recorded. If you need to, you can"," ",e.createElement("a",{href:"#"},"retake the survey"),"."),footer:e.createElement(e.Fragment,null,"Your responses and information are securely collected and kept by Culture Amp in accordance with our ",e.createElement("a",{href:"#"},"Privacy Policy"),". Your responses will be reported to Hooli based on the specific rules for this survey. If you have any additional questions, please contact us at ",e.createElement("a",{href:"#"},"support@cultureamp.com"),".")},primaryAction:{label:"Go to Home",href:"#",icon:e.createElement(i,{role:"presentation"}),iconPosition:"end"},secondaryAction:{label:"Rate this survey",icon:e.createElement(w,{role:"presentation"})}}},a={args:{variant:"warning",illustration:e.createElement(x,{...n}),header:e.createElement(M,null),text:{title:"Page not found"},body:e.createElement(e.Fragment,null,e.createElement("div",{className:"mb-16"},e.createElement(s,{variant:"intro-lede"},"Sorry but we can't find the page you're looking for. Go back and try again, or head to ",e.createElement("a",{href:"#"},"Home"),".")),e.createElement(s,{variant:"small",color:"dark-reduced-opacity"},"Error code 404")),primaryAction:{label:"Go to Home",href:"#",icon:e.createElement(i,{role:"presentation"}),iconPosition:"end"},secondaryAction:{label:"Contact support",icon:e.createElement(k,{role:"presentation"})}}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "informative",
    illustration: <BrandMomentCaptureIntro {...illustrationProps} />,
    header: <MinimalBasic />,
    text: {
      subtitle: "Welcome to Culture Amp",
      title: "Let's dive in and see how it works"
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "informative",
    illustration: <BrandMomentCaptureIntro {...illustrationProps} />,
    header: <MinimalBasic />,
    text: {
      subtitle: "Welcome to Culture Amp",
      title: "Let's dive in and see how it works"
    },
    primaryAction: {
      label: "Get started",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end"
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "success",
    illustration: <BrandMomentPositiveOutro {...illustrationProps} />,
    header: <MinimalCustomerFocused />,
    text: {
      subtitle: "Manager Effectiveness Survey",
      title: "That's it — thank you",
      body: <>
          Your responses have been securely recorded. If you need to, you can{" "}
          <a href="#">retake the survey</a>.
        </>,
      footer: <>
          Your responses and information are securely collected and kept by
          Culture Amp in accordance with our <a href="#">Privacy Policy</a>.
          Your responses will be reported to Hooli based on the specific rules
          for this survey. If you have any additional questions, please contact
          us at <a href="#">support@cultureamp.com</a>.
        </>
    },
    primaryAction: {
      label: "Go to Home",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end"
    },
    secondaryAction: {
      label: "Rate this survey",
      icon: <FeedbackClassifyIcon role="presentation" />
    }
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,b,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    illustration: <BrandMomentError {...illustrationProps} />,
    header: <FakeNavBar />,
    text: {
      title: "Page not found"
    },
    body: <>
        <div className="mb-16">
          <Text variant="intro-lede">
            Sorry but we can&apos;t find the page you&apos;re looking for. Go
            back and try again, or head to <a href="#">Home</a>.
          </Text>
        </div>
        <Text variant="small" color="dark-reduced-opacity">
          Error code 404
        </Text>
      </>,
    primaryAction: {
      label: "Go to Home",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end"
    },
    secondaryAction: {
      label: "Contact support",
      icon: <EmailIcon role="presentation" />
    }
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const T=["Playground","Informative","Success","Warning"],q=Object.freeze(Object.defineProperty({__proto__:null,Informative:r,Playground:t,Success:o,Warning:a,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{q as B,r as I,t as P,o as S,a as W};
