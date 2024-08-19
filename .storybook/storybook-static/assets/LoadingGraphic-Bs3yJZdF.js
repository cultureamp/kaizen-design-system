import{R as o}from"./index-CTjT7uj6.js";import{c as d}from"./index-CCQ3W5xA.js";const m="_loadingGraphic_9rl9o_5",c="_isAnimated_9rl9o_21",p="_isReversed_9rl9o_32",e={loadingGraphic:m,isAnimated:c,"fade-in-out":"_fade-in-out_9rl9o_1",isReversed:p},g=new Map([["small",1.25],["medium",3],["large",4.5],["xlarge",6],["xxlarge",7.5],["scene",18.75]]),i=({isAnimated:s,isReversed:n,size:l,classNameOverride:r,...t})=>{const a=`${g.get(l)}rem`;return o.createElement("div",{className:d(e.loadingGraphic,s&&e.isAnimated,n&&e.isReversed,r),style:{width:a,height:a},...t})};i.displayName="LoadingGraphic";i.__docgenInfo={description:`{@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060062/Loading+Skeleton Guidance} |
{@link https://cultureamp.design/?path=/docs/components-loading-states-loadinggraphic--docs Storybook}`,methods:[],displayName:"LoadingGraphic",props:{isAnimated:{required:!1,tsType:{name:"boolean"},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!0,tsType:{name:"union",raw:`| "small"
| "medium"
| "large"
| "xlarge"
| "xxlarge"
| "scene"`,elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"xlarge"'},{name:"literal",value:'"xxlarge"'},{name:"literal",value:'"scene"'}]},description:""}}};export{i as L};
