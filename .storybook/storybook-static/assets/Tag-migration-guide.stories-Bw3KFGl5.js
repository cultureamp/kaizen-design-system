import{R as e}from"./index-CTjT7uj6.js";import{f as T}from"./index-BySiBzEG.js";import{C as K}from"./CautionIcon-D4m_GXrx.js";import{E as Q}from"./ExclamationIcon-CBwbCtpu.js";import{I as U}from"./InformationIcon-DxLaBSbb.js";import{L as u}from"./LiveIcon-CIjqi5i9.js";import{S as Y}from"./SuccessIcon-BInyqVzG.js";import{s as o}from"./Tag.module-fH2-Bd0x.js";import{T as a}from"./Tag-D-4sFjnu.js";import{R as f}from"./RemovableTag-BNVKm4bs.js";import{A as r}from"./Avatar-BrPd9Rrx.js";const Z={title:"Components/Tag/Future Tag Migration Guide",component:a,args:{children:"My tag"},parameters:{docs:{source:{type:"dynamic"}}}},H=()=>e.createElement("span",{className:o.liveIcon},e.createElement(u,{role:"presentation",classNameOverride:o.liveIcon_base,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}),e.createElement(u,{role:"presentation",classNameOverride:o.liveIcon_1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}),e.createElement(u,{role:"presentation",classNameOverride:o.liveIcon_2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}),e.createElement(u,{role:"presentation",classNameOverride:o.liveIcon_3,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"})),t={render:()=>e.createElement(H,null),parameters:{docs:{source:{type:"dynamic",code:`
  // component with styled with CSS modules
  const LiveIconComponent = (): JSX.Element => (
    <span className={styles.liveIcon}>
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_base}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_1}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_2}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_3}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
    </span>
  )

  // Minified SCSS from the stylesheet
  <style>
    .liveIcon_2,.liveIcon_3{animation-duration:3s;animation-iteration-count:3;animation-delay:1s}.liveIcon{display:inline-block;position:relative;width:20px;height:20px;color:$color-green-500}.liveIcon_1,.liveIcon_2,.liveIcon_3{display:block;position:absolute;top:0;left:$0;width:100%;height:100%;overflow:hidden}.liveIcon_base{opacity:30%;display:block}.liveIcon_1{clip-path:circle(16%)}.liveIcon_2{clip-path:circle(32%);animation-name:pulse-inner}.liveIcon_3{clip-path:circle(50%);animation-name:pulse-outer}@keyframes pulse-inner{0%,25%{opacity:0%}100%,50%,75%{opacity:100%}}@keyframes pulse-outer{0%,25%,50%{opacity:0%}100%,75%{opacity:100%}}
  </style>
        `}}}},s={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{classNameOverride:"gap-4",color:"green"},e.createElement("span",null,"Tag"),e.createElement(H,null)),e.createElement(a,{color:"blue"},"Tag"),e.createElement(a,{color:"red"},"Tag"),e.createElement(a,{color:"orange"},"Tag")),decorators:[n=>e.createElement("div",{className:"flex gap-12"},e.createElement(n,null))]},l={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{color:"green",icon:e.createElement(Y,{role:"img","aria-label":"Success,"})},"Tag"),e.createElement(a,{color:"blue",icon:e.createElement(U,{role:"img","aria-label":"Note,"})},"Tag"),e.createElement(a,{color:"red",icon:e.createElement(Q,{role:"img","aria-label":"Error,"})},"Tag"),e.createElement(a,{color:"yellow",icon:e.createElement(K,{role:"img","aria-label":"Warning,"})},"Tag")),decorators:[n=>e.createElement("div",{className:"flex gap-12"},e.createElement(n,null))]},i={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{color:"green"},"Tag"),e.createElement(a,{color:"gray"},"Tag"),e.createElement(a,{color:"red"},"Tag"),e.createElement(a,{color:"blue"},"Tag"),e.createElement(a,{color:"yellow"},"Tag"),e.createElement(a,{color:"orange"},"Tag")),decorators:[n=>e.createElement("div",{className:"flex gap-12"},e.createElement(n,null))]},c={render:()=>e.createElement(a,{color:"gray",classNameOverride:"bg-white border-default-color border-solid border"},"Tag")},m={render:()=>e.createElement(f,{removeButtonProps:{ariaLabel:"Remove this tag",onClick:T()}},"Tag")},p={render:()=>e.createElement(e.Fragment,null,e.createElement(a,{classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small"}),"Tag")),e.createElement(a,{classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Reed Richards"}),"Reed Richards")),e.createElement(a,{classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Sue Storm",avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"}),"Susan Storm"))),decorators:[n=>e.createElement("div",{className:"flex gap-12"},e.createElement(n,null))]},g={render:()=>e.createElement(e.Fragment,null,e.createElement(f,{removeButtonProps:{ariaLabel:"Remove user from *this context*",onClick:T()},classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small"}),"Tag")),e.createElement(f,{removeButtonProps:{ariaLabel:"Remove Reed Richards from *this context*",onClick:T()},classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Reed Richards"}),"Tag")),e.createElement(f,{removeButtonProps:{ariaLabel:"Remove Sue Storm from *this context*",onClick:T()},classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Sue Storm",avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"}),"Tag"))),decorators:[n=>e.createElement("div",{className:"flex gap-12"},e.createElement(n,null))]},d={render:()=>e.createElement("div",{className:"flex gap-12"},e.createElement(a,null,"Tag"),e.createElement(a,null,"Tag"),e.createElement(a,null,"Tag"))},v={};var h,b,E;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <LiveIconComponent />,
  parameters: {
    docs: {
      source: {
        type: "dynamic",
        code: \`
  // component with styled with CSS modules
  const LiveIconComponent = (): JSX.Element => (
    <span className={styles.liveIcon}>
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_base}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_1}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_2}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
      <LiveIcon
        role="presentation"
        classNameOverride={styles.liveIcon_3}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      />
    </span>
  )

  // Minified SCSS from the stylesheet
  <style>
    .liveIcon_2,.liveIcon_3{animation-duration:3s;animation-iteration-count:3;animation-delay:1s}.liveIcon{display:inline-block;position:relative;width:20px;height:20px;color:$color-green-500}.liveIcon_1,.liveIcon_2,.liveIcon_3{display:block;position:absolute;top:0;left:$0;width:100%;height:100%;overflow:hidden}.liveIcon_base{opacity:30%;display:block}.liveIcon_1{clip-path:circle(16%)}.liveIcon_2{clip-path:circle(32%);animation-name:pulse-inner}.liveIcon_3{clip-path:circle(50%);animation-name:pulse-outer}@keyframes pulse-inner{0%,25%{opacity:0%}100%,50%,75%{opacity:100%}}@keyframes pulse-outer{0%,25%,50%{opacity:0%}100%,75%{opacity:100%}}
  </style>
        \`
      }
    }
  }
}`,...(E=(b=t.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var S,y,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <>
      <Tag classNameOverride="gap-4" color="green">
        <span>Tag</span>
        <LiveIconComponent />
      </Tag>
      <Tag color="blue">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="orange">Tag</Tag>
    </>,
  decorators: [Story => <div className="flex gap-12">
        <Story />
      </div>]
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var I,w,x;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <>
      <Tag color="green" icon={<SuccessIcon role="img" aria-label="Success," />}>
        Tag
      </Tag>
      <Tag color="blue" icon={<InformationIcon role="img" aria-label="Note," />}>
        Tag
      </Tag>
      <Tag color="red" icon={<ExclamationIcon role="img" aria-label="Error," />}>
        Tag
      </Tag>
      <Tag color="yellow" icon={<CautionIcon role="img" aria-label="Warning," />}>
        Tag
      </Tag>
    </>,
  decorators: [Story => <div className="flex gap-12">
        <Story />
      </div>]
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var R,_,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <>
      <Tag color="green">Tag</Tag>
      <Tag color="gray">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="blue">Tag</Tag>
      <Tag color="yellow">Tag</Tag>
      <Tag color="orange">Tag</Tag>
    </>,
  decorators: [Story => <div className="flex gap-12">
        <Story />
      </div>]
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var L,C,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tag color="gray" classNameOverride="bg-white border-default-color border-solid border">
      Tag
    </Tag>
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var B,k,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <RemovableTag removeButtonProps={{
    ariaLabel: "Remove this tag",
    onClick: fn()
  }}>
      Tag
    </RemovableTag>
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,P,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <>
      <Tag classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" />
          Tag
        </span>
      </Tag>
      <Tag classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" fullName="Reed Richards" />
          Reed Richards
        </span>
      </Tag>
      <Tag classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" fullName="Sue Storm" avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png" />
          Susan Storm
        </span>
      </Tag>
    </>,
  decorators: [Story => <div className="flex gap-12">
        <Story />
      </div>]
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var $,D,V;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <>
      <RemovableTag removeButtonProps={{
      ariaLabel: "Remove user from *this context*",
      onClick: fn()
    }} classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" />
          Tag
        </span>
      </RemovableTag>
      <RemovableTag removeButtonProps={{
      ariaLabel: "Remove Reed Richards from *this context*",
      onClick: fn()
    }} classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" fullName="Reed Richards" />
          Tag
        </span>
      </RemovableTag>
      <RemovableTag removeButtonProps={{
      ariaLabel: "Remove Sue Storm from *this context*",
      onClick: fn()
    }} classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" fullName="Sue Storm" avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png" />
          Tag
        </span>
      </RemovableTag>
    </>,
  decorators: [Story => <div className="flex gap-12">
        <Story />
      </div>]
}`,...(V=(D=g.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var j,J,W;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex gap-12">
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </div>
}`,...(W=(J=d.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,G,q;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...(q=(G=v.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const ee=["LiveIconComponentStory","StatusMigration","ValidationMigration","SentimentsMigration","SentimentNone","DismissibleMigration","AvatarMigration","AvatarRemovableMigration","InlineMigration","SizesMigration"],ge=Object.freeze(Object.defineProperty({__proto__:null,AvatarMigration:p,AvatarRemovableMigration:g,DismissibleMigration:m,InlineMigration:d,LiveIconComponentStory:t,SentimentNone:c,SentimentsMigration:i,SizesMigration:v,StatusMigration:s,ValidationMigration:l,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{p as A,m as D,d as I,t as L,s as S,ge as T,l as V,i as a,c as b,g as c,v as d};
