import{R as t,r as d}from"./index-CTjT7uj6.js";import{T as k}from"./ToastNotification-B8mE1vof.js";import{u as l}from"./useToastNotification-CIcTykTU.js";import{B as i}from"./Button-DDkdQqLR.js";const B={title:"Components/Notifications/ToastNotification",component:k,args:{id:"abc-123",variant:"success",title:"Success",children:t.createElement("div",null,"New user data, imported by mackenzie@hooli.com has successfully uploaded. ",t.createElement("a",{href:"/"},"Manage users is now available"))},argTypes:{type:{control:!1}}},O={render:e=>{const a=d.useId(),{updateToastNotification:S}=l();return d.useEffect(()=>{S({...e,id:e.id??a,message:e.children,persistent:e.hideCloseIcon})},[e]),t.createElement(k,{...e})}},o={...O,parameters:{docs:{canvas:{sourceState:"shown"}}}},n={render:()=>{const{addToastNotification:e}=l();return t.createElement(i,{label:"Create notification",onClick:()=>e({title:"Informative",type:"informative",message:"New notification!"})})}},s={render:()=>{const{addToastNotification:e,updateToastNotification:a}=l();return t.createElement(t.Fragment,null,t.createElement(i,{label:"Create notification",classNameOverride:"!mr-12",onClick:()=>e({id:"id--update-example",title:"Cautionary",type:"cautionary",message:"This content will be updated"})}),t.createElement(i,{label:"Update notification",onClick:()=>a({id:"id--update-example",title:"Success",type:"positive",message:"The content was successfully updated"})}))}},r={render:()=>{const{addToastNotification:e,removeToastNotification:a}=l();return t.createElement(t.Fragment,null,t.createElement(i,{label:"Create notification",classNameOverride:"!mr-12",onClick:()=>e({id:"id--remove-example",title:"Remove",type:"negative",message:"This notification will be removed"})}),t.createElement(i,{label:"Remove notification",onClick:()=>a("id--remove-example")}))}},c={render:()=>{const{addToastNotification:e,clearToastNotifications:a}=l();return t.createElement(t.Fragment,null,t.createElement(i,{label:"Create notifications",classNameOverride:"!mr-12",onClick:()=>{e({id:"id--clear-example-1",title:"First",type:"positive",message:"This notification will be removed"}),e({id:"id--clear-example-2",title:"Second",type:"cautionary",message:"This notification will also be removed"}),e({id:"id--clear-example-3",title:"Third",type:"negative",message:"This notification will also also be removed"})}}),t.createElement(i,{label:"Clear notifications",onClick:()=>a()}))}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ToastNotificationTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,T,N;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const {
      addToastNotification
    } = useToastNotification();
    return <Button label="Create notification" onClick={() => addToastNotification({
      title: "Informative",
      type: "informative",
      message: "New notification!"
    })} />;
  }
}`,...(N=(T=n.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var v,C,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const {
      addToastNotification,
      updateToastNotification
    } = useToastNotification();
    return <>
        <Button label="Create notification" classNameOverride="!mr-12" onClick={() => addToastNotification({
        id: "id--update-example",
        title: "Cautionary",
        type: "cautionary",
        message: "This content will be updated"
      })} />
        <Button label="Update notification" onClick={() => updateToastNotification({
        id: "id--update-example",
        title: "Success",
        type: "positive",
        message: "The content was successfully updated"
      })} />
      </>;
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const {
      addToastNotification,
      removeToastNotification
    } = useToastNotification();
    return <>
        <Button label="Create notification" classNameOverride="!mr-12" onClick={() => addToastNotification({
        id: "id--remove-example",
        title: "Remove",
        type: "negative",
        message: "This notification will be removed"
      })} />
        <Button label="Remove notification" onClick={() => removeToastNotification("id--remove-example")} />
      </>;
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,x,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const {
      addToastNotification,
      clearToastNotifications
    } = useToastNotification();
    return <>
        <Button label="Create notifications" classNameOverride="!mr-12" onClick={() => {
        addToastNotification({
          id: "id--clear-example-1",
          title: "First",
          type: "positive",
          message: "This notification will be removed"
        });
        addToastNotification({
          id: "id--clear-example-2",
          title: "Second",
          type: "cautionary",
          message: "This notification will also be removed"
        });
        addToastNotification({
          id: "id--clear-example-3",
          title: "Third",
          type: "negative",
          message: "This notification will also also be removed"
        });
      }} />
        <Button label="Clear notifications" onClick={() => clearToastNotifications()} />
      </>;
  }
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const R=["Playground","CreateNotification","UpdateNotification","RemoveNotification","ClearNotifications"],P=Object.freeze(Object.defineProperty({__proto__:null,ClearNotifications:c,CreateNotification:n,Playground:o,RemoveNotification:r,UpdateNotification:s,__namedExportsOrder:R,default:B},Symbol.toStringTag,{value:"Module"}));export{n as C,o as P,r as R,P as T,s as U,c as a};
