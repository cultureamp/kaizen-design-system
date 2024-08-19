import{R as e,r as i}from"./index-CTjT7uj6.js";import{f as $,w as ee,a as V,u as ne,e as k}from"./index-BySiBzEG.js";import{e as te,d as ae,q as le,S as se,A as re,D as ie,a as oe,b as D,c as ue,f as P}from"./decodeQueryParams-K1-BkZgW.js";import{H as m}from"./index-BtE2hmwC.js";import{F as l,u as F}from"./FilterBar-CMHtug1r.js";import{F as u}from"./FilterMultiSelect-wvMpAK6s.js";const ce={title:"Components/Filter Bar",component:l,argTypes:{filters:{control:!1},values:{control:!1},onValuesChange:{control:!1}},args:{filters:[],values:{},onValuesChange:$()}},me=`
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
)`,E=[{id:"flavour",name:"Flavour",Component:e.createElement(l.Select,{items:[{value:"jasmine-milk-tea",label:"Jasmine Milk Tea"},{value:"honey-milk-tea",label:"Honey Milk Tea"},{value:"lychee-green-tea",label:"Lychee Green Tea"}]})},{id:"deliveryDates",name:"Delivery Dates",Component:e.createElement(l.DateRangePicker,null)},{id:"toppings",name:"Toppings",Component:e.createElement(l.MultiSelect,{items:[{value:"none",label:"None"},{value:"pearls",label:"Pearls"},{value:"fruit-jelly",label:"Fruit Jelly"}]},()=>e.createElement(e.Fragment,null,e.createElement(u.SearchInput,null),e.createElement(u.ListBox,null,({allItems:t})=>t.map(n=>e.createElement(u.Option,{key:n.key,item:n}))),e.createElement(u.MenuFooter,null,e.createElement(u.SelectAllButton,null),e.createElement(u.ClearButton,null)))),isRemovable:!0},{id:"drank",name:"Drank",Component:e.createElement(l.DatePicker,null),isRemovable:!0}],g={render:t=>{const[n,a]=i.useState({flavour:"jasmine-milk-tea",toppings:["pearls","fruit-jelly"]});return e.createElement(l,{...t,filters:E,values:n,onValuesChange:a})},parameters:{docs:{source:{code:me}}}},p={render:()=>{const[t,n]=i.useState({flavour:"jasmine-milk-tea",toppings:["pearls","fruit-jelly"]});return e.createElement(e.Fragment,null,e.createElement(l,{filters:E,values:t,onValuesChange:n}),e.createElement(m,{className:"json"},JSON.stringify(t,null,4)))}},v={render:()=>{const t=[{id:"coffee",name:"Coffee",Component:e.createElement(l.Select,{items:[{value:"long-black",label:"Long Black"},{value:"latte",label:"Latte"}]})},{id:"milk",name:"Milk",Component:e.createElement(l.Select,{items:[{value:"full-cream",label:"Full Cream"},{value:"oat",label:"Oat"}]}),isUsableWhen:s=>s.coffee.value==="latte"},{id:"syrup",name:"Syrup",Component:e.createElement(l.Select,{items:[{value:"vanilla",label:"Vanilla"},{value:"caramel",label:"Caramel"}]}),isRemovable:!0,isUsableWhen:s=>s.milk.value!==void 0&&!s.sugar.isActive},{id:"sugar",name:"Sugar",Component:e.createElement(l.Select,{items:[{value:"yes",label:"Yes"}]}),isRemovable:!0,isUsableWhen:s=>s.milk.value!==void 0&&!s.syrup.isActive},{id:"ice",name:"Ice",Component:e.createElement(l.Select,{items:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}),isUsableWhen:s=>s.coffee.value!==void 0}],[n,a]=i.useState({milk:"full-cream"});return e.createElement(e.Fragment,null,e.createElement(l,{filters:t,values:n,onValuesChange:a}),e.createElement("div",{className:"flex gap-8 my-16"},e.createElement("button",{type:"button",onClick:()=>a({...n,coffee:void 0})},"Clear Coffee")),e.createElement(m,{className:"json"},JSON.stringify(n,null,4)))}},G=t=>e.createElement(l.MultiSelect,{...t},()=>e.createElement(u.ListBox,null,({allItems:n})=>n.length===0?e.createElement(u.NoResults,null,"No results. Select a role first."):n.map(a=>e.createElement(u.Option,{key:a.key,item:a})))),de=t=>new Promise(n=>setTimeout(n,t)),ge=t=>{const n=[{value:"delete-it-g",label:"Delete-it G (Engineer)",role:["engineer"]},{value:"moustache-mackenzie",label:"Moustache MacKenzie (Engineer)",role:["engineer"]},{value:"jacon",label:"Jacon (Designer)",role:["designer"]},{value:"uppercase-winter",label:"Uppercase Winter (Engineer)",role:["engineer"]},{value:"unicorn",label:"Unicorn (Designer/Engineer)",role:["designer","engineer"]}],[a,s]=i.useState([]),[o,c]=i.useState(!0),{getFilterState:r}=F(),d=r("role"),Y=async C=>{await de(3e3).then(()=>{c(!1),s(n.filter(({role:K})=>K.find(Z=>C==null?void 0:C.includes(Z))))})};return i.useEffect(()=>{c(!0),Y(d.value)},[d.value]),e.createElement(G,{id:t.id,isLoading:o,loadingSkeleton:e.createElement(u.MenuLoadingSkeleton,null),items:a})},pe=t=>{const n=[{value:"eng-1",label:"Engineering Space 1",role:"engineer"},{value:"eng-2",label:"Engineering Space 2",role:"engineer"},{value:"des-1",label:"Design Space 1",role:"designer"}],[a,s]=i.useState([]),{getFilterState:o}=F(),c=o("role");return i.useEffect(()=>{const r=c.value;s(n.filter(({role:d})=>r==null?void 0:r.includes(d)))},[c.value]),e.createElement(l.Select,{id:t.id,items:a})},ve=`
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
`,f={render:()=>{const t=[{id:"role",name:"Role",Component:e.createElement(G,{items:[{value:"designer",label:"Designer"},{value:"engineer",label:"Engineer"}]})},{id:"person",name:"Person",Component:e.createElement(ge,null)},{id:"room",name:"Room",Component:e.createElement(pe,null),isRemovable:!0,isUsableWhen:s=>s.role.value!==void 0}],[n,a]=i.useState({});return e.createElement(e.Fragment,null,e.createElement(l,{filters:t,values:n,onValuesChange:a}),e.createElement(m,{className:"json"},JSON.stringify(n,null,4)))},parameters:{docs:{source:{code:ve}}}},y={render:()=>{const[t,n]=i.useState({flavour:"jasmine-milk-tea",toppings:["pearls","fruit-jelly"]}),s={flavour:se,toppings:re,deliveryDates:{encode:r=>{if(r)return oe({from:D(r==null?void 0:r.from),to:D(r==null?void 0:r.to)})??void 0},decode:r=>{const d=ue(r);return d?{from:P(d.from)??void 0,to:P(d.to)??void 0}:void 0}},drank:ie},o=te(s,t),c=ae(s,o);return e.createElement(e.Fragment,null,e.createElement(l,{filters:E,values:t,onValuesChange:n}),e.createElement("div",{className:"flex gap-8 my-16"},e.createElement("button",{type:"button",onClick:()=>n({...t,flavour:"honey-milk-tea"})},"Update Flavour to honey-milk-tea"),e.createElement("button",{type:"button",onClick:()=>n({...t,toppings:["fruit-jelly"]})},"Update Toppings to fruit-jelly"),e.createElement("button",{type:"button",onClick:()=>n({})},"Clear all values")),e.createElement("code",{className:"mt-16"},"Values:"),e.createElement(m,{className:"json"},JSON.stringify(t,null,4)),e.createElement("code",null,"queryString.stringify(encodeQueryParams(paramConfigMap, values))"),e.createElement(m,{className:"json"},le.stringify(o)),e.createElement("code",null,"decodeQueryParams(paramConfigMap, encodedQueryParams)"),e.createElement(m,{className:"json"},JSON.stringify(c,null,4)))}},h=({id:t})=>{const{openFilter:n}=F();return e.createElement(l.Select,{id:t,items:[{value:"custom",label:"Custom Range"},{value:"cycle-1",label:"Cycle 1"},{value:"cycle-2",label:"Cycle 2"}],onSelectionChange:a=>{a==="custom"&&n("customRange")}})},b={render:()=>{const[t,n]=i.useState({}),a=[{id:"cycle",name:"Cycle",Component:e.createElement(h,null)},{id:"customRange",name:"Custom Range",Component:e.createElement(l.DateRangePicker,null),isUsableWhen:s=>s.cycle.value==="custom"}];return e.createElement(e.Fragment,null,e.createElement(l,{filters:a,values:t,onValuesChange:n}),e.createElement("div",{className:"mt-16"},e.createElement("code",null,"Values:"),e.createElement(m,{className:"json"},JSON.stringify(t,null,4))))}},fe=[{id:"cycle",name:"",Component:e.createElement(h,null),isRemovable:!0},{id:"customRange",name:"",Component:e.createElement(l.DateRangePicker,null),isRemovable:!0}],S={parameters:{chromatic:{delay:2500}},render:()=>{const[t,n]=i.useState({}),[a,s]=i.useState(fe);return i.useEffect(()=>{const o=setTimeout(()=>{s([{id:"cycle",name:"Cycle",Component:e.createElement(h,null),isRemovable:!0},{id:"customRange",name:"Custom Range",Component:e.createElement(l.DateRangePicker,null),isRemovable:!0}])},2e3);return()=>clearTimeout(o)},[]),e.createElement(e.Fragment,null,e.createElement(l,{filters:a,values:t,onValuesChange:n}),e.createElement("div",{className:"mt-16"},e.createElement("code",null,"Filters:"),e.createElement(m,{className:"json"},JSON.stringify(a.map(({id:o,name:c})=>({id:o,name:c})),null,4))),e.createElement("div",{className:"mt-16"},e.createElement("code",null,"Values:"),e.createElement(m,{className:"json"},JSON.stringify(t,null,4))))},play:async({canvasElement:t,step:n})=>{const a=ee(t);await n("Initial render complete",async()=>{await V(()=>a.getByRole("button",{name:"Add Filters"}))}),await ne.click(a.getByRole("button",{name:"Add Filters"})),k(a.queryByText("Custom Range")).not.toBeInTheDocument(),await n("Labels have updated",async()=>{await V(()=>k(a.queryByText("Custom Range")).toBeInTheDocument(),{timeout:2100})})}};var R,B,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
      flavour: "jasmine-milk-tea",
      toppings: ["pearls", "fruit-jelly"]
    });
    return <FilterBar<Values> {...args} filters={filters} values={activeValues} onValuesChange={onActiveValuesChange} />;
  },
  parameters: {
    docs: {
      source: {
        code: sampleCode
      }
    }
  }
}`,...(j=(B=g.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var N,M,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
      flavour: "jasmine-milk-tea",
      toppings: ["pearls", "fruit-jelly"]
    });
    return <>
        <FilterBar<Values> filters={filters} values={activeValues} onValuesChange={onActiveValuesChange} />
        <Highlight className="json">
          {JSON.stringify(activeValues, null, 4)}
        </Highlight>
      </>;
  }
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var I,x,J;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    type ValuesDependent = {
      coffee: string;
      milk: string;
      syrup: string;
      sugar: string;
      ice: string;
    };
    const filtersDependent = ([{
      id: "coffee",
      name: "Coffee",
      Component: <FilterBar.Select items={[{
        value: "long-black",
        label: "Long Black"
      }, {
        value: "latte",
        label: "Latte"
      }]} />
    }, {
      id: "milk",
      name: "Milk",
      Component: <FilterBar.Select items={[{
        value: "full-cream",
        label: "Full Cream"
      }, {
        value: "oat",
        label: "Oat"
      }]} />,
      isUsableWhen: state => state.coffee.value === "latte"
    }, {
      id: "syrup",
      name: "Syrup",
      Component: <FilterBar.Select items={[{
        value: "vanilla",
        label: "Vanilla"
      }, {
        value: "caramel",
        label: "Caramel"
      }]} />,
      isRemovable: true,
      isUsableWhen: state => state.milk.value !== undefined && !state.sugar.isActive
    }, {
      id: "sugar",
      name: "Sugar",
      Component: <FilterBar.Select items={[{
        value: "yes",
        label: "Yes"
      }]} />,
      isRemovable: true,
      isUsableWhen: state => state.milk.value !== undefined && !state.syrup.isActive
    }, {
      id: "ice",
      name: "Ice",
      Component: <FilterBar.Select items={[{
        value: "yes",
        label: "Yes"
      }, {
        value: "no",
        label: "No"
      }]} />,
      isUsableWhen: state => state.coffee.value !== undefined
    }] satisfies Filters<ValuesDependent>);
    const [values, setValues] = useState<Partial<ValuesDependent>>({
      milk: "full-cream"
    });
    return <>
        <FilterBar<ValuesDependent> filters={filtersDependent} values={values} onValuesChange={setValues} />
        <div className="flex gap-8 my-16">
          <button type="button" onClick={() => setValues({
          ...values,
          coffee: undefined
        })}>
            Clear Coffee
          </button>
        </div>
        <Highlight className="json">
          {JSON.stringify(values, null, 4)}
        </Highlight>
      </>;
  }
}`,...(J=(x=v.parameters)==null?void 0:x.docs)==null?void 0:J.source}}};var T,L,U;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const filtersDependent = ([{
      id: "role",
      name: "Role",
      Component: <ExampleFilterMultiSelect items={[{
        value: "designer",
        label: "Designer"
      }, {
        value: "engineer",
        label: "Engineer"
      }]} />
    }, {
      id: "person",
      name: "Person",
      Component: <FilterPerson />
    }, {
      id: "room",
      name: "Room",
      Component: <FilterRoom />,
      isRemovable: true,
      isUsableWhen: state => state.role.value !== undefined
    }] satisfies Filters<ValuesSiblingDependent>);
    const [values, setValues] = useState<Partial<ValuesSiblingDependent>>({});
    return <>
        <FilterBar<ValuesSiblingDependent> filters={filtersDependent} values={values} onValuesChange={setValues} />
        <Highlight className="json">
          {JSON.stringify(values, null, 4)}
        </Highlight>
      </>;
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSiblingValueDependentFilter
      }
    }
  }
}`,...(U=(L=f.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var w,H,A;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<Partial<Values>>({
      flavour: "jasmine-milk-tea",
      toppings: ["pearls", "fruit-jelly"]
    });
    const DateRangeParam = ({
      encode: dateRange => {
        if (!dateRange) return undefined;
        return encodeObject({
          from: encodeDate(dateRange?.from),
          to: encodeDate(dateRange?.to)
        }) ?? undefined;
      },
      decode: (dateRangeStr): DateRange | undefined => {
        const obj = decodeObject(dateRangeStr);
        return obj ? {
          from: decodeDate(obj.from) ?? undefined,
          to: decodeDate(obj.to) ?? undefined
        } : undefined;
      }
    } satisfies QueryParamConfig<DateRange | undefined>);
    const paramConfigMap = {
      flavour: StringParam,
      toppings: ArrayParam,
      deliveryDates: DateRangeParam,
      drank: DateParam
    };
    const encodedQueryParams = encodeQueryParams(paramConfigMap, values);
    const decodedQueryParams = decodeQueryParams(paramConfigMap, encodedQueryParams);
    return <>
        <FilterBar<Values> filters={filters} values={values} onValuesChange={setValues} />

        <div className="flex gap-8 my-16">
          <button type="button" onClick={() => setValues({
          ...values,
          flavour: "honey-milk-tea"
        })}>
            Update Flavour to honey-milk-tea
          </button>
          <button type="button" onClick={() => setValues({
          ...values,
          toppings: ["fruit-jelly"]
        })}>
            Update Toppings to fruit-jelly
          </button>
          <button type="button" onClick={() => setValues({})}>
            Clear all values
          </button>
        </div>

        <code className="mt-16">Values:</code>
        <Highlight className="json">
          {JSON.stringify(values, null, 4)}
        </Highlight>

        <code>
          queryString.stringify(encodeQueryParams(paramConfigMap, values))
        </code>
        <Highlight className="json">
          {queryString.stringify(encodedQueryParams)}
        </Highlight>

        <code>decodeQueryParams(paramConfigMap, encodedQueryParams)</code>
        <Highlight className="json">
          {JSON.stringify(decodedQueryParams, null, 4)}
        </Highlight>
      </>;
  }
}`,...(A=(H=y.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var Q,W,q;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<Partial<CycleFilterValues>>({});
    const cycleFilters = ([{
      id: "cycle",
      name: "Cycle",
      Component: <CycleFilter />
    }, {
      id: "customRange",
      name: "Custom Range",
      Component: <FilterBar.DateRangePicker />,
      isUsableWhen: state => state.cycle.value === "custom"
    }] satisfies Filters<CycleFilterValues>);
    return <>
        <FilterBar<CycleFilterValues> filters={cycleFilters} values={values} onValuesChange={setValues} />
        <div className="mt-16">
          <code>Values:</code>
          <Highlight className="json">
            {JSON.stringify(values, null, 4)}
          </Highlight>
        </div>
      </>;
  }
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,z,X;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      delay: 2500
    }
  },
  render: () => {
    const [values, setValues] = useState<Partial<CycleFilterValues>>({});
    const [f, setF] = useState(emptyLabelFilters);
    useEffect(() => {
      const timer = setTimeout(() => {
        setF([{
          id: "cycle",
          name: "Cycle",
          Component: <CycleFilter />,
          isRemovable: true
        }, {
          id: "customRange",
          name: "Custom Range",
          Component: <FilterBar.DateRangePicker />,
          isRemovable: true
        }]);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    return <>
        <FilterBar<CycleFilterValues> filters={f} values={values} onValuesChange={setValues} />
        <div className="mt-16">
          <code>Filters:</code>
          <Highlight className="json">
            {JSON.stringify(f.map(({
            id,
            name
          }) => ({
            id,
            name
          })), null, 4)}
          </Highlight>
        </div>
        <div className="mt-16">
          <code>Values:</code>
          <Highlight className="json">
            {JSON.stringify(values, null, 4)}
          </Highlight>
        </div>
      </>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Initial render complete", async () => {
      await waitFor(() => canvas.getByRole("button", {
        name: "Add Filters"
      }));
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Add Filters"
    }));
    expect(canvas.queryByText("Custom Range")).not.toBeInTheDocument();
    await step("Labels have updated", async () => {
      await waitFor(() => expect(canvas.queryByText("Custom Range")).toBeInTheDocument(), {
        timeout: 2100
      });
    });
  }
}`,...(X=(z=S.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};const ye=["BasicImplementation","OnValuesChange","DependentFilter","SiblingValueDependentFilter","ExternalEventValuesUpdate","ExternalEventOpenFilter","UpdatesLabels"],Ve=Object.freeze(Object.defineProperty({__proto__:null,BasicImplementation:g,DependentFilter:v,ExternalEventOpenFilter:b,ExternalEventValuesUpdate:y,OnValuesChange:p,SiblingValueDependentFilter:f,UpdatesLabels:S,__namedExportsOrder:ye,default:ce},Symbol.toStringTag,{value:"Module"}));export{g as B,v as D,y as E,Ve as F,p as O,f as S,b as a};
