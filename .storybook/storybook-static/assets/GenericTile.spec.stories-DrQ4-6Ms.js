import{R as o}from"./index-CTjT7uj6.js";import{w as m,u as p,e as s}from"./index-BySiBzEG.js";import{G as c}from"./GenericTile-BEadPOs8.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./Heading-Y5F8SWRW.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./SVG-7WFwBCn9.js";import"./InformationIcon-DxLaBSbb.js";import"./Text-D2gQH1xL.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./index-9r8iugjR.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./IconButton-DH93ECWt.js";const C={title:"Components/Tiles/GenericTile/Tests",component:c,args:{title:"Title",metadata:"Side A",information:"Side B",footer:o.createElement(o.Fragment,null,"Example Footer")}},t={play:async({canvasElement:i})=>{const e=m(i);await p.click(e.getByRole("button",{name:"Information"})),await s(e.getByText("Side B")).toBeInTheDocument()}};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Information"
    }));
    await expect(canvas.getByText("Side B")).toBeInTheDocument();
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const O=["Flip"];export{t as Flip,O as __namedExportsOrder,C as default};
