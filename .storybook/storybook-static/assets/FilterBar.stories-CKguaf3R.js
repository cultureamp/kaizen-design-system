import{R as e,r as o}from"./index-CTjT7uj6.js";import{f as V,w as D,a as f,u as B,e as y}from"./index-BySiBzEG.js";import{e as M,d as P,q as R,S as j,A as N,D as I,a as L,b as S,c as x,f as b}from"./decodeQueryParams-K1-BkZgW.js";import{H as c}from"./index-BtE2hmwC.js";import{F as n,u as g}from"./FilterBar-CMHtug1r.js";import{F as m}from"./FilterMultiSelect-wvMpAK6s.js";import"./index-DZLKizrv.js";import"./index-CCQ3W5xA.js";import"./AddIcon-C6V_KfCs.js";import"./SVG-7WFwBCn9.js";import"./MenuItem-PF-eSNqW.js";import"./index-9r8iugjR.js";import"./usePopper-D4ykrdaR.js";import"./Combination-DFaMps7A.js";import"./tslib.es6-CY32MZYl.js";import"./Trap-DVnrG7EK.js";import"./defineProperty-C21ZqnLH.js";import"./inheritsLoose-p_S3dtD8.js";import"./useIntl-Ci3jBQGG.js";import"./startOfDay-MoyOWjoN.js";import"./index-DBmEjBSQ.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";import"./Button-DDkdQqLR.js";import"./GenericButton-CnAyP-Wm.js";import"./utils-e-dMXvly.js";import"./focusSafely-ByiDPXQJ.js";import"./SSRProvider-C8o06Znb.js";import"./useFocusable-CuIK6Qs-.js";import"./Link-DkKiEG74.js";import"./usePress-nudZ2Xgz.js";import"./Badge-D9GUNioS.js";import"./LoadingSpinner-DHfeGxpm.js";import"./VisuallyHidden-CDYjeGzr.js";import"./FilterDatePicker-Bh5QQ4BN.js";import"./getLocale-DZ-phe2v.js";import"./isInvalidDate-CQ4jNt7-.js";import"./jsx-runtime-Cw0GR0a5.js";import"./FilterContents-MyXMWDj6.js";import"./useDateInputHandlers-CFHAAAKV.js";import"./LabelledMessage-CyRdzdqY.js";import"./validateDate-Bbd7IJoY.js";import"./enums-Cb8LLpRk.js";import"./isDisabledDate-DCznrglD.js";import"./Label-DlmzItqQ.js";import"./isRefObject-39zMTbtm.js";import"./Input-BFyrvMXQ.js";import"./message-BF0EX5jj.js";import"./FieldMessage-D8OmrYjz.js";import"./ExclamationWhiteIcon-dXgVQUA_.js";import"./Text-D2gQH1xL.js";import"./CalendarSingle-DmO3h1TK.js";import"./ArrowBackwardIcon-D9T-C9o2.js";import"./ArrowForwardIcon-BVPHqAvL.js";import"./isValidWeekStartsOn-CZGl9tvK.js";import"./en-AU-C5dfMWdV.js";import"./FilterButtonRemovable-CDjh8qGF.js";import"./ClearIcon-BcQoGkgT.js";import"./index-CdP7-hSn.js";import"./FilterButtonBase-D953FwLo.js";import"./FilterButton-BGzpTfmP.js";import"./ChevronDownIcon-prLLyjG_.js";import"./ChevronUpIcon-D9pr3Qd6.js";import"./ButtonGroup-Cm1_R1hn.js";import"./FilterDateRangePicker-IyXssijA.js";import"./CalendarRange-BpKdqjCg.js";import"./FilterSelect-Cc_UChFF.js";import"./useButton-CDp2hby9.js";import"./useFocusWithin-C7oArVkD.js";import"./transformSelectItemToCollectionElement-Nmt2Onfe.js";import"./SelectionManager-yuMfDyd5.js";import"./useCollator-DHdgfgeP.js";import"./context-AGV5_Mtb.js";import"./useOverlayTriggerState-B1dSu2Ro.js";import"./useControlledState-CEg4Rl-x.js";import"./useField-DwroQcrk.js";import"./useLabel-BoFVh7qz.js";import"./useListState-CBqvwiGH.js";import"./useHover-Bq751pFs.js";import"./Divider-B-j384PU.js";import"./Heading-Y5F8SWRW.js";import"./CheckIcon-BwUvLWmE.js";import"./useMenuTriggerState-D_-PdoOj.js";import"./InputSearch-DY9HBN0G.js";import"./SearchIcon-Dhjhqmnw.js";import"./ClearButton-K9bfbh4U.js";import"./LoadingInput-X-emq8Sb.js";import"./LoadingParagraph-CXl7iitU.js";const Ft={title:"Components/Filter Bar",component:n,argTypes:{filters:{control:!1},values:{control:!1},onValuesChange:{control:!1}},args:{filters:[],values:{},onValuesChange:V()}},O=`
type Values = {
  flavour: string
  deliveryDates: DateRange
  topping: string[]
  drank: Date
}

const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
  flavour: "jasmine-milk-tea",
  toppings: ["pearls", "fruit-jelly"]
})

const filters = [
  {
    id: "flavour",
    name: "Flavour",
    Component: (
      <FilterBar.Select
        items={[
          { value: "jasmine-milk-tea", label: "Jasmine Milk Tea" },
          { value: "honey-milk-tea", label: "Honey Milk Tea" },
          { value: "lychee-green-tea", label: "Lychee Green Tea" },
        ]}
      />
    ),
  },
  {
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker />,
  },
  {
    id: "topping",
    name: "Topping",
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: "none", label: "None" },
          { value: "pearls", label: "Pearls" },
          { value: "fruit-jelly", label: "Fruit Jelly" },
        ]}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.ListBox>
              {({ allItems }): JSX.Element | JSX.Element[] => {
                return allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }}
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterBar.MultiSelect>
    ),
    isRemovable: true,
  },
  {
    id: "drank",
    name: "Drank",
    Component: <FilterBar.DatePicker />,
    isRemovable: true,
  },
] satisfies Filters<Values>

return (
  <FilterBar<Values>
    filters={filters}
    values={activeValues}
    onValuesChange={onActiveValuesChange}
  />
)`,v=[{id:"flavour",name:"Flavour",Component:e.createElement(n.Select,{items:[{value:"jasmine-milk-tea",label:"Jasmine Milk Tea"},{value:"honey-milk-tea",label:"Honey Milk Tea"},{value:"lychee-green-tea",label:"Lychee Green Tea"}]})},{id:"deliveryDates",name:"Delivery Dates",Component:e.createElement(n.DateRangePicker,null)},{id:"toppings",name:"Toppings",Component:e.createElement(n.MultiSelect,{items:[{value:"none",label:"None"},{value:"pearls",label:"Pearls"},{value:"fruit-jelly",label:"Fruit Jelly"}]},()=>e.createElement(e.Fragment,null,e.createElement(m.SearchInput,null),e.createElement(m.ListBox,null,({allItems:l})=>l.map(t=>e.createElement(m.Option,{key:t.key,item:t}))),e.createElement(m.MenuFooter,null,e.createElement(m.SelectAllButton,null),e.createElement(m.ClearButton,null)))),isRemovable:!0},{id:"drank",name:"Drank",Component:e.createElement(n.DatePicker,null),isRemovable:!0}],Ct={render:l=>{const[t,a]=o.useState({flavour:"jasmine-milk-tea",toppings:["pearls","fruit-jelly"]});return e.createElement(n,{...l,filters:v,values:t,onValuesChange:a})},parameters:{docs:{source:{code:O}}}},kt={render:()=>{const[l,t]=o.useState({flavour:"jasmine-milk-tea",toppings:["pearls","fruit-jelly"]});return e.createElement(e.Fragment,null,e.createElement(n,{filters:v,values:l,onValuesChange:t}),e.createElement(c,{className:"json"},JSON.stringify(l,null,4)))}},ht={render:()=>{const l=[{id:"coffee",name:"Coffee",Component:e.createElement(n.Select,{items:[{value:"long-black",label:"Long Black"},{value:"latte",label:"Latte"}]})},{id:"milk",name:"Milk",Component:e.createElement(n.Select,{items:[{value:"full-cream",label:"Full Cream"},{value:"oat",label:"Oat"}]}),isUsableWhen:r=>r.coffee.value==="latte"},{id:"syrup",name:"Syrup",Component:e.createElement(n.Select,{items:[{value:"vanilla",label:"Vanilla"},{value:"caramel",label:"Caramel"}]}),isRemovable:!0,isUsableWhen:r=>r.milk.value!==void 0&&!r.sugar.isActive},{id:"sugar",name:"Sugar",Component:e.createElement(n.Select,{items:[{value:"yes",label:"Yes"}]}),isRemovable:!0,isUsableWhen:r=>r.milk.value!==void 0&&!r.syrup.isActive},{id:"ice",name:"Ice",Component:e.createElement(n.Select,{items:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}),isUsableWhen:r=>r.coffee.value!==void 0}],[t,a]=o.useState({milk:"full-cream"});return e.createElement(e.Fragment,null,e.createElement(n,{filters:l,values:t,onValuesChange:a}),e.createElement("div",{className:"flex gap-8 my-16"},e.createElement("button",{type:"button",onClick:()=>a({...t,coffee:void 0})},"Clear Coffee")),e.createElement(c,{className:"json"},JSON.stringify(t,null,4)))}},F=l=>e.createElement(n.MultiSelect,{...l},()=>e.createElement(m.ListBox,null,({allItems:t})=>t.length===0?e.createElement(m.NoResults,null,"No results. Select a role first."):t.map(a=>e.createElement(m.Option,{key:a.key,item:a})))),J=l=>new Promise(t=>setTimeout(t,l)),T=l=>{const t=[{value:"delete-it-g",label:"Delete-it G (Engineer)",role:["engineer"]},{value:"moustache-mackenzie",label:"Moustache MacKenzie (Engineer)",role:["engineer"]},{value:"jacon",label:"Jacon (Designer)",role:["designer"]},{value:"uppercase-winter",label:"Uppercase Winter (Engineer)",role:["engineer"]},{value:"unicorn",label:"Unicorn (Designer/Engineer)",role:["designer","engineer"]}],[a,r]=o.useState([]),[s,u]=o.useState(!0),{getFilterState:i}=g(),p=i("role"),C=async d=>{await J(3e3).then(()=>{u(!1),r(t.filter(({role:k})=>k.find(h=>d==null?void 0:d.includes(h))))})};return o.useEffect(()=>{u(!0),C(p.value)},[p.value]),e.createElement(F,{id:l.id,isLoading:s,loadingSkeleton:e.createElement(m.MenuLoadingSkeleton,null),items:a})},U=l=>{const t=[{value:"eng-1",label:"Engineering Space 1",role:"engineer"},{value:"eng-2",label:"Engineering Space 2",role:"engineer"},{value:"des-1",label:"Design Space 1",role:"designer"}],[a,r]=o.useState([]),{getFilterState:s}=g(),u=s("role");return o.useEffect(()=>{const i=u.value;r(t.filter(({role:p})=>i==null?void 0:i.includes(p)))},[u.value]),e.createElement(n.Select,{id:l.id,items:a})},w=`
type Values = {
  role: string[]
  person: string[]
  room: string
}

const sleep = (ms: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, ms))

const FilterPerson = (props: { id?: string }): JSX.Element => {
  const data = [
    { value: "delete-it-g", label: "Delete-it G (Engineer)", role: ["engineer"] },
    { value: "moustache-mackenzie", label: "Moustache MacKenzie (Engineer)", role: ["engineer"] },
    { value: "jacon", label: "Jacon (Designer)", role: ["designer"] },
    { value: "uppercase-winter", label: "Uppercase Winter (Engineer)", role: ["engineer"] },
    { value: "unicorn", label: "Unicorn (Designer/Engineer)", role: ["designer", "engineer"] },
  ]

  const [items, setItems] = useState<ItemType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { getFilterState } = useFilterBarContext<Values["person"], Values>()

  const roleFilter = getFilterState("role")

  const loadItems = async (roles: string[] | undefined): Promise<void> => {
    await sleep(3000).then(() => {
      setIsLoading(false)
      setItems(data.filter(({ role }) => role.find(r => roles?.includes(r))))
    })
  }

  useEffect(() => {
    setIsLoading(true)
    loadItems(roleFilter.value)
  }, [roleFilter.value])

  return (
    <FilterBar.MultiSelect
      id={props.id}
      isLoading={isLoading}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      items={items}
    >{...renderChildren}</FilterBar.MultiSelect>
  )
}

const FilterRoom = (props: { id?: string }): JSX.Element => {
  type Item = SelectOption & { role: string }

  const data = [
    { value: "eng-1", label: "Engineering Space 1", role: "engineer" },
    { value: "eng-2", label: "Engineering Space 2", role: "engineer" },
    { value: "des-1", label: "Design Space 1", role: "designer" },
  ]

  const [items, setItems] = useState<Item[]>([])

  const { getFilterState } = useFilterBarContext<Values["room"], Values>()

  const roleFilter = getFilterState("role")

  useEffect(() => {
    setItems(data.filter(({ role }) => roleFilter.value?.includes(role)))
  }, [roleFilter.value])

  return <FilterBar.Select<Item> id={props.id} items={items} />
}

const CustomFilterBar = () => {
  const filters = [
    {
      id: "role",
      name: "Role",
      Component: (<FilterBar.MultiSelect
        items={[
          { value: "designer", label: "Designer" },
          { value: "engineer", label: "Engineer" },
        ]}
      >{...renderChildren}</FilterBar.MultiSelect>),
    },
    {
      id: "person",
      name: "Person",
      Component: <FilterPerson />,
    },
    {
      id: "room",
      name: "Room",
      Component: <FilterRoom />,
      isRemovable: true,
      isUsableWhen: state => state.role.value !== undefined,
    },
  ] satisfies Filters<Values>

  const [values, setValues] = useState<Partial<Values>>({})

  return <FilterBar<Values> filters={filters} values={values} onValuesChange={setValues} />
}
`,Vt={render:()=>{const l=[{id:"role",name:"Role",Component:e.createElement(F,{items:[{value:"designer",label:"Designer"},{value:"engineer",label:"Engineer"}]})},{id:"person",name:"Person",Component:e.createElement(T,null)},{id:"room",name:"Room",Component:e.createElement(U,null),isRemovable:!0,isUsableWhen:r=>r.role.value!==void 0}],[t,a]=o.useState({});return e.createElement(e.Fragment,null,e.createElement(n,{filters:l,values:t,onValuesChange:a}),e.createElement(c,{className:"json"},JSON.stringify(t,null,4)))},parameters:{docs:{source:{code:w}}}},Dt={render:()=>{const[l,t]=o.useState({flavour:"jasmine-milk-tea",toppings:["pearls","fruit-jelly"]}),r={flavour:j,toppings:N,deliveryDates:{encode:i=>{if(i)return L({from:S(i==null?void 0:i.from),to:S(i==null?void 0:i.to)})??void 0},decode:i=>{const p=x(i);return p?{from:b(p.from)??void 0,to:b(p.to)??void 0}:void 0}},drank:I},s=M(r,l),u=P(r,s);return e.createElement(e.Fragment,null,e.createElement(n,{filters:v,values:l,onValuesChange:t}),e.createElement("div",{className:"flex gap-8 my-16"},e.createElement("button",{type:"button",onClick:()=>t({...l,flavour:"honey-milk-tea"})},"Update Flavour to honey-milk-tea"),e.createElement("button",{type:"button",onClick:()=>t({...l,toppings:["fruit-jelly"]})},"Update Toppings to fruit-jelly"),e.createElement("button",{type:"button",onClick:()=>t({})},"Clear all values")),e.createElement("code",{className:"mt-16"},"Values:"),e.createElement(c,{className:"json"},JSON.stringify(l,null,4)),e.createElement("code",null,"queryString.stringify(encodeQueryParams(paramConfigMap, values))"),e.createElement(c,{className:"json"},R.stringify(s)),e.createElement("code",null,"decodeQueryParams(paramConfigMap, encodedQueryParams)"),e.createElement(c,{className:"json"},JSON.stringify(u,null,4)))}},E=({id:l})=>{const{openFilter:t}=g();return e.createElement(n.Select,{id:l,items:[{value:"custom",label:"Custom Range"},{value:"cycle-1",label:"Cycle 1"},{value:"cycle-2",label:"Cycle 2"}],onSelectionChange:a=>{a==="custom"&&t("customRange")}})},Bt={render:()=>{const[l,t]=o.useState({}),a=[{id:"cycle",name:"Cycle",Component:e.createElement(E,null)},{id:"customRange",name:"Custom Range",Component:e.createElement(n.DateRangePicker,null),isUsableWhen:r=>r.cycle.value==="custom"}];return e.createElement(e.Fragment,null,e.createElement(n,{filters:a,values:l,onValuesChange:t}),e.createElement("div",{className:"mt-16"},e.createElement("code",null,"Values:"),e.createElement(c,{className:"json"},JSON.stringify(l,null,4))))}},A=[{id:"cycle",name:"",Component:e.createElement(E,null),isRemovable:!0},{id:"customRange",name:"",Component:e.createElement(n.DateRangePicker,null),isRemovable:!0}],Mt={parameters:{chromatic:{delay:2500}},render:()=>{const[l,t]=o.useState({}),[a,r]=o.useState(A);return o.useEffect(()=>{const s=setTimeout(()=>{r([{id:"cycle",name:"Cycle",Component:e.createElement(E,null),isRemovable:!0},{id:"customRange",name:"Custom Range",Component:e.createElement(n.DateRangePicker,null),isRemovable:!0}])},2e3);return()=>clearTimeout(s)},[]),e.createElement(e.Fragment,null,e.createElement(n,{filters:a,values:l,onValuesChange:t}),e.createElement("div",{className:"mt-16"},e.createElement("code",null,"Filters:"),e.createElement(c,{className:"json"},JSON.stringify(a.map(({id:s,name:u})=>({id:s,name:u})),null,4))),e.createElement("div",{className:"mt-16"},e.createElement("code",null,"Values:"),e.createElement(c,{className:"json"},JSON.stringify(l,null,4))))},play:async({canvasElement:l,step:t})=>{const a=D(l);await t("Initial render complete",async()=>{await f(()=>a.getByRole("button",{name:"Add Filters"}))}),await B.click(a.getByRole("button",{name:"Add Filters"})),y(a.queryByText("Custom Range")).not.toBeInTheDocument(),await t("Labels have updated",async()=>{await f(()=>y(a.queryByText("Custom Range")).toBeInTheDocument(),{timeout:2100})})}},Pt=["BasicImplementation","OnValuesChange","DependentFilter","SiblingValueDependentFilter","ExternalEventValuesUpdate","ExternalEventOpenFilter","UpdatesLabels"];export{Ct as BasicImplementation,ht as DependentFilter,Bt as ExternalEventOpenFilter,Dt as ExternalEventValuesUpdate,kt as OnValuesChange,Vt as SiblingValueDependentFilter,Mt as UpdatesLabels,Pt as __namedExportsOrder,Ft as default};
