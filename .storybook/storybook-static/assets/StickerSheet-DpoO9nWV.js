import{R as e}from"./index-CTjT7uj6.js";import{c as h}from"./index-CCQ3W5xA.js";import{H as S}from"./Heading-hQmlkvcj.js";const d=({children:t,isReversed:r=!1,...n})=>e.createElement("tbody",{...n},e.Children.map(t,a=>e.cloneElement(a,{isReversed:r,...a.props})));d.displayName="StickerSheet.Body";d.__docgenInfo={description:"",methods:[],displayName:"StickerSheet.Body",props:{children:{required:!0,tsType:{name:"union",raw:`| React.ReactElement<StickerSheetRowProps>
| Array<React.ReactElement<StickerSheetRowProps>>`,elements:[{name:"ReactReactElement",raw:"React.ReactElement<StickerSheetRowProps>",elements:[{name:"intersection",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
} & HTMLAttributes<HTMLTableRowElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"rowTitle",value:{name:"string",required:!1}},{key:"rowTitleWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isReversed",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLTableRowElement"}],raw:"HTMLAttributes<HTMLTableRowElement>"}]}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<StickerSheetRowProps>",elements:[{name:"intersection",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
} & HTMLAttributes<HTMLTableRowElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"rowTitle",value:{name:"string",required:!1}},{key:"rowTitleWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isReversed",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLTableRowElement"}],raw:"HTMLAttributes<HTMLTableRowElement>"}]}]}],raw:"Array<React.ReactElement<StickerSheetRowProps>>"}]},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const g="_stickerSheetCell_1cd94_2",y={stickerSheetCell:g},o=({children:t,className:r,...n})=>e.createElement("td",{className:h(y.stickerSheetCell,r),...n},t);o.displayName="StickerSheet.Cell";o.__docgenInfo={description:"",methods:[],displayName:"StickerSheet.Cell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const k="_stickerSheetTableHeading_1gdhc_4",f="_isReversed_1gdhc_14",T={stickerSheetTableHeading:k,isReversed:f},u=({children:t,isReversed:r=!1,className:n,...a})=>e.createElement("th",{className:h(T.stickerSheetTableHeading,r&&T.isReversed,n),...a},t);u.displayName="StickerSheetTableHeading";u.__docgenInfo={description:"",methods:[],displayName:"StickerSheetTableHeading",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const R=({headings:t,headingsWidth:r,isReversed:n=!1,hasVerticalHeadings:a=!1,verticalHeadingsWidth:l="7rem",...i})=>e.createElement("thead",{...i},e.createElement("tr",null,a&&e.createElement("td",{style:{width:l}}),t.map(c=>e.createElement(u,{key:c,scope:"col",isReversed:n,style:{width:r}},c))));R.displayName="StickerSheet.Header";R.__docgenInfo={description:"",methods:[],displayName:"StickerSheet.Header",props:{headings:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},headingsWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVerticalHeadings:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},verticalHeadingsWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"7rem"',computed:!1}}}};const b=({children:t,rowTitle:r,rowTitleWidth:n,isReversed:a=!1,dir:l,...i})=>{const c="1.5rem",w=typeof n=="number"?`${n}px`:n;return e.createElement("tr",{...i},r&&e.createElement(u,{scope:"row",isReversed:a,style:{width:`calc(${w} - ${c})`}},r),e.Children.map(t,m=>e.isValidElement(m)&&m.type===o?m:e.createElement(o,{dir:l},m)))};b.displayName="StickerSheet.Row";b.__docgenInfo={description:"",methods:[],displayName:"StickerSheet.Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rowTitle:{required:!1,tsType:{name:"string"},description:""},rowTitleWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const H="_stickerSheetSectionHeading_xhxat_1",v="_stickerSheet_xhxat_1",E="_stickerSheetTable_xhxat_9",p={stickerSheetSectionHeading:H,stickerSheet:v,stickerSheetTable:E},L=t=>e.isValidElement(t)&&(t.type===R||t.type===d),s=({children:t,heading:r,isReversed:n=!1,className:a,...l})=>e.createElement("div",{className:p.stickerSheet},r&&e.createElement(S,{variant:"heading-3",tag:"h1",color:n?"white":"dark",classNameOverride:p.stickerSheetSectionHeading},r),e.createElement("table",{className:h(p.stickerSheetTable,a),...l},e.Children.map(t,i=>L(i)?e.cloneElement(i,{...i.props,isReversed:n}):i)));s.Header=R;s.Body=d;s.Row=b;s.Cell=o;s.displayName="StickerSheet";s.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
  headings,
  headingsWidth,
  isReversed = false,
  hasVerticalHeadings = false,
  verticalHeadingsWidth = "7rem",
  ...restProps
}: StickerSheetHeaderProps`,optional:!1,type:{name:"intersection",raw:`{
  headings: string[]
  headingsWidth?: number | string
  isReversed?: boolean
  hasVerticalHeadings?: boolean
  verticalHeadingsWidth?: number | string
} & HTMLAttributes<HTMLTableSectionElement>`,elements:[{name:"signature",type:"object",raw:`{
  headings: string[]
  headingsWidth?: number | string
  isReversed?: boolean
  hasVerticalHeadings?: boolean
  verticalHeadingsWidth?: number | string
}`,signature:{properties:[{key:"headings",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"headingsWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isReversed",value:{name:"boolean",required:!1}},{key:"hasVerticalHeadings",value:{name:"boolean",required:!1}},{key:"verticalHeadingsWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLTableSectionElement"}],raw:"HTMLAttributes<HTMLTableSectionElement>"}],alias:"StickerSheetHeaderProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  isReversed = false,
  ...restProps
}: StickerSheetBodyProps`,optional:!1,type:{name:"intersection",raw:`{
  children:
    | React.ReactElement<StickerSheetRowProps>
    | Array<React.ReactElement<StickerSheetRowProps>>
  isReversed?: boolean
} & Omit<HTMLAttributes<HTMLTableSectionElement>, "children">`,elements:[{name:"signature",type:"object",raw:`{
  children:
    | React.ReactElement<StickerSheetRowProps>
    | Array<React.ReactElement<StickerSheetRowProps>>
  isReversed?: boolean
}`,signature:{properties:[{key:"children",value:{name:"union",raw:`| React.ReactElement<StickerSheetRowProps>
| Array<React.ReactElement<StickerSheetRowProps>>`,elements:[{name:"ReactReactElement",raw:"React.ReactElement<StickerSheetRowProps>",elements:[{name:"intersection",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
} & HTMLAttributes<HTMLTableRowElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"rowTitle",value:{name:"string",required:!1}},{key:"rowTitleWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isReversed",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLTableRowElement"}],raw:"HTMLAttributes<HTMLTableRowElement>"}]}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<StickerSheetRowProps>",elements:[{name:"intersection",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
} & HTMLAttributes<HTMLTableRowElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"rowTitle",value:{name:"string",required:!1}},{key:"rowTitleWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isReversed",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLTableRowElement"}],raw:"HTMLAttributes<HTMLTableRowElement>"}]}]}],raw:"Array<React.ReactElement<StickerSheetRowProps>>"}],required:!0}},{key:"isReversed",value:{name:"boolean",required:!1}}]}},{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLTableSectionElement"}],raw:"HTMLAttributes<HTMLTableSectionElement>"},{name:"literal",value:'"children"'}],raw:'Omit<HTMLAttributes<HTMLTableSectionElement>, "children">'}],alias:"StickerSheetBodyProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  rowTitle,
  rowTitleWidth,
  isReversed = false,
  dir,
  ...restProps
}: StickerSheetRowProps`,optional:!1,type:{name:"intersection",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
} & HTMLAttributes<HTMLTableRowElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"rowTitle",value:{name:"string",required:!1}},{key:"rowTitleWidth",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"isReversed",value:{name:"boolean",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLTableRowElement"}],raw:"HTMLAttributes<HTMLTableRowElement>"}],alias:"StickerSheetRowProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...restProps
}: StickerSheetCellProps`,optional:!1,type:{name:"intersection",raw:`{
  children: React.ReactNode
} & TdHTMLAttributes<HTMLTableCellElement>`,elements:[{name:"signature",type:"object",raw:`{
  children: React.ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},{name:"TdHTMLAttributes",elements:[{name:"HTMLTableCellElement"}],raw:"TdHTMLAttributes<HTMLTableCellElement>"}],alias:"StickerSheetCellProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"StickerSheet",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heading:{required:!1,tsType:{name:"string"},description:""},isReversed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{s as S};
