import{R as e}from"./index-CTjT7uj6.js";import{f as o}from"./index-BySiBzEG.js";import{C as s}from"./CautionIcon-D4m_GXrx.js";import{E as m}from"./ExclamationIcon-CBwbCtpu.js";import{I as p}from"./InformationIcon-DxLaBSbb.js";import{L as n}from"./LiveIcon-CIjqi5i9.js";import{S as d}from"./SuccessIcon-BInyqVzG.js";import{s as l}from"./Tag.module-fH2-Bd0x.js";import{T as t}from"./Tag-D-4sFjnu.js";import{R as i}from"./RemovableTag-BNVKm4bs.js";import{A as r}from"./Avatar-BrPd9Rrx.js";import"./index-DZLKizrv.js";import"./SVG-7WFwBCn9.js";import"./index-CCQ3W5xA.js";import"./index-BRV0Se7Z.js";import"./UserIcon-CFY4To9K.js";const R={title:"Components/Tag/Future Tag Migration Guide",component:t,args:{children:"My tag"},parameters:{docs:{source:{type:"dynamic"}}}},c=()=>e.createElement("span",{className:l.liveIcon},e.createElement(n,{role:"presentation",classNameOverride:l.liveIcon_base,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}),e.createElement(n,{role:"presentation",classNameOverride:l.liveIcon_1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}),e.createElement(n,{role:"presentation",classNameOverride:l.liveIcon_2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}),e.createElement(n,{role:"presentation",classNameOverride:l.liveIcon_3,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"})),O={render:()=>e.createElement(c,null),parameters:{docs:{source:{type:"dynamic",code:`
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
        `}}}},L={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{classNameOverride:"gap-4",color:"green"},e.createElement("span",null,"Tag"),e.createElement(c,null)),e.createElement(t,{color:"blue"},"Tag"),e.createElement(t,{color:"red"},"Tag"),e.createElement(t,{color:"orange"},"Tag")),decorators:[a=>e.createElement("div",{className:"flex gap-12"},e.createElement(a,null))]},C={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{color:"green",icon:e.createElement(d,{role:"img","aria-label":"Success,"})},"Tag"),e.createElement(t,{color:"blue",icon:e.createElement(p,{role:"img","aria-label":"Note,"})},"Tag"),e.createElement(t,{color:"red",icon:e.createElement(m,{role:"img","aria-label":"Error,"})},"Tag"),e.createElement(t,{color:"yellow",icon:e.createElement(s,{role:"img","aria-label":"Warning,"})},"Tag")),decorators:[a=>e.createElement("div",{className:"flex gap-12"},e.createElement(a,null))]},B={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{color:"green"},"Tag"),e.createElement(t,{color:"gray"},"Tag"),e.createElement(t,{color:"red"},"Tag"),e.createElement(t,{color:"blue"},"Tag"),e.createElement(t,{color:"yellow"},"Tag"),e.createElement(t,{color:"orange"},"Tag")),decorators:[a=>e.createElement("div",{className:"flex gap-12"},e.createElement(a,null))]},k={render:()=>e.createElement(t,{color:"gray",classNameOverride:"bg-white border-default-color border-solid border"},"Tag")},z={render:()=>e.createElement(i,{removeButtonProps:{ariaLabel:"Remove this tag",onClick:o()}},"Tag")},A={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small"}),"Tag")),e.createElement(t,{classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Reed Richards"}),"Reed Richards")),e.createElement(t,{classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Sue Storm",avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"}),"Susan Storm"))),decorators:[a=>e.createElement("div",{className:"flex gap-12"},e.createElement(a,null))]},F={render:()=>e.createElement(e.Fragment,null,e.createElement(i,{removeButtonProps:{ariaLabel:"Remove user from *this context*",onClick:o()},classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small"}),"Tag")),e.createElement(i,{removeButtonProps:{ariaLabel:"Remove Reed Richards from *this context*",onClick:o()},classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Reed Richards"}),"Tag")),e.createElement(i,{removeButtonProps:{ariaLabel:"Remove Sue Storm from *this context*",onClick:o()},classNameOverride:"ps-4"},e.createElement("span",{className:"flex gap-6 items-center"},e.createElement(r,{size:"small",fullName:"Sue Storm",avatarSrc:"https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"}),"Tag"))),decorators:[a=>e.createElement("div",{className:"flex gap-12"},e.createElement(a,null))]},P={render:()=>e.createElement("div",{className:"flex gap-12"},e.createElement(t,null,"Tag"),e.createElement(t,null,"Tag"),e.createElement(t,null,"Tag"))},D={},V=["LiveIconComponentStory","StatusMigration","ValidationMigration","SentimentsMigration","SentimentNone","DismissibleMigration","AvatarMigration","AvatarRemovableMigration","InlineMigration","SizesMigration"];export{A as AvatarMigration,F as AvatarRemovableMigration,z as DismissibleMigration,P as InlineMigration,O as LiveIconComponentStory,k as SentimentNone,B as SentimentsMigration,D as SizesMigration,L as StatusMigration,C as ValidationMigration,V as __namedExportsOrder,R as default};
