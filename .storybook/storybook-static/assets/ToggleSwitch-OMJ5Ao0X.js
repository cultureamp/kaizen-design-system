import{R as n}from"./index-CTjT7uj6.js";import{c as l}from"./index-CCQ3W5xA.js";import{C as m}from"./CheckIcon-BwUvLWmE.js";const i="_checkbox_17jy6_9",h="_track_17jy6_17",p="_thumb_17jy6_44",_="_checkIcon_17jy6_57",d="_on_17jy6_64",f="_off_17jy6_90",u="_reversed_17jy6_100",e={checkbox:i,track:h,thumb:p,checkIcon:_,on:d,off:f,reversed:u},c=({toggledStatus:o,onToggle:a,reversed:s,...r})=>{const t=o==="on";return n.createElement("span",{className:l(t?e.on:e.off,s&&e.reversed)},n.createElement("input",{type:"checkbox",className:e.checkbox,checked:!!t,onChange:a,...r}),n.createElement("span",{className:e.track},n.createElement("span",{className:e.thumb},n.createElement(m,{classNameOverride:e.checkIcon,role:"presentation"}))))};c.displayName="ToggleSwitch";c.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{toggledStatus:{required:!1,tsType:{name:"union",raw:'"on" | "off"',elements:[{name:"literal",value:'"on"'},{name:"literal",value:'"off"'}]},description:""},onToggle:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Alias for `onChange`"},reversed:{required:!1,tsType:{name:"boolean"},description:""}}};export{c as T};
