import{R as e,r as m}from"./index-CTjT7uj6.js";import{Q as ue,m as N,u as de,a as Se,s as C,b as pe,k as ge}from"./FilterMultiSelect.module-CB62p0Td.js";import{i as he}from"./isChromatic-VqprqId_.js";import{T as O}from"./Text-D2gQH1xL.js";import{T as Me}from"./TextField-C70Pg5K2.js";import{F as t,g as I}from"./FilterMultiSelect-wvMpAK6s.js";import{I as Fe}from"./InlineNotification-CD7nmnbO.js";const L=he(),ye=new ue,Ee=r=>e.createElement(pe,{client:ye},e.createElement(r,null)),fe={title:"Components/Filter Multi-Select",component:t,parameters:{docs:{source:{type:"code"}}},args:{label:"Engineer",items:N,selectedKeys:new Set(["id-fe"]),trigger:()=>e.createElement(t.TriggerButton,{selectedOptionLabels:["Front-End"],label:"Engineer"}),children:()=>e.createElement(e.Fragment,null,e.createElement(t.SearchInput,null),e.createElement(t.ListBox,null,({allItems:r,hasNoItems:i})=>i?e.createElement(t.NoResults,null,"No results found."):r.map(a=>e.createElement(t.Option,{key:a.key,item:a}))),e.createElement(t.MenuFooter,null,e.createElement(t.SelectAllButton,null),e.createElement(t.ClearButton,null)))}},y={render:r=>{const[i,a]=m.useState(r.selectedKeys);return e.createElement(t,{...r,onSelectionChange:a,selectedKeys:i,trigger:()=>e.createElement(t.TriggerButton,{selectedOptionLabels:I(i,r.items),label:r.label})})}},u={...y},d={args:{isLoading:!0,isOpen:L||void 0,loadingSkeleton:e.createElement(t.MenuLoadingSkeleton,null)},parameters:{chromatic:{disable:!1},controls:{disable:!0}}},S={render:r=>{const[i,a]=m.useState(r.selectedKeys),[s,n]=m.useState(50),x=k=>n(+k.target.value);return e.createElement(e.Fragment,null,e.createElement(Me,{labelText:"Character limit",onChange:x,value:s,classNameOverride:"mb-24"}),e.createElement(t,{...r,onSelectionChange:a,selectedKeys:i,trigger:()=>e.createElement(t.TriggerButton,{selectedOptionLabels:I(i,N),label:r.label,labelCharacterLimitBeforeTruncate:s})}))}},p={...y,args:{items:N.slice(0,3)}},g={render:()=>{const[r,i]=m.useState(!1),[a,s]=m.useState([]),[n,x]=m.useState(""),k=de(),ne=async({pageParam:l})=>(await fetch(`https://swapi.dev/api/people/?page=${l}&search=${n}`)).json(),{data:E,isLoading:le,fetchNextPage:re,isFetchingNextPage:ie,hasNextPage:P,isRefetching:ae}=Se({enabled:!0,initialPageParam:"1",queryKey:["startrek-sg1",n],queryFn:ne,placeholderData:ge,getNextPageParam:l=>{if(!l.next)return;const o=new URL(l.next);return new URLSearchParams(o.searchParams).get("page")}}),B=k.getQueriesData({queryKey:["startrek-sg1"]}).flatMap(([,l])=>(l==null?void 0:l.pages)??[]).flatMap(l=>l.results).map(l=>({label:l.name,value:l.url})),b=e.useMemo(()=>(E==null?void 0:E.pages.flatMap(l=>l.results).flatMap(l=>({label:l.name,value:l.url})))||[],[E]),se=[...b,...B].filter((l,o,f)=>f.findIndex(c=>c.value===l.value)===o),oe=n!==""?b:Array.from(se),ce=b.length,me=B.length;return e.createElement(e.Fragment,null,e.createElement(t,{label:"People",isLoading:le,loadingSkeleton:e.createElement(t.MenuLoadingSkeleton,null),items:oe,trigger:()=>e.createElement(t.TriggerButton,{selectedOptionLabels:I(new Set(a),B),label:"People"}),onSearchInputChange:x,onOpenChange:i,onSelectionChange:l=>{l!=="all"&&s(Array.from(l))},isOpen:r,selectedKeys:new Set(a)},()=>e.createElement(e.Fragment,null,e.createElement(t.SearchInput,{isLoading:ae&&n!==""}),e.createElement(t.ListBox,null,({selectedItems:l,unselectedItems:o,hasNoItems:f})=>e.createElement(e.Fragment,null,f?e.createElement(t.NoResults,null,"No results found for ",n,"."):n!==""?e.createElement(O,{classNameOverride:C.helperMessage,variant:"extra-small",tag:"span",color:"dark-reduced-opacity"},"Showing ",ce," of ",me):P&&e.createElement(O,{classNameOverride:C.helperMessage,variant:"extra-small",tag:"span",color:"dark-reduced-opacity"},"There are a lot of options. Narrow them further by searching for a more precise term."),e.createElement(t.ListBoxSection,{items:l,sectionName:"Selected items"},c=>e.createElement(t.Option,{key:c.key,item:c})),o.length>0&&l.length>0&&e.createElement(t.SectionDivider,null),e.createElement(t.ListBoxSection,{items:o,sectionName:"Unselected items"},c=>e.createElement(t.Option,{key:c.key,item:c})),P&&e.createElement(t.LoadMoreButton,{label:"View more",workingLabel:"Loading…",working:ie,onClick:()=>re()}))),e.createElement(t.MenuFooter,null,e.createElement(t.SelectAllButton,null),e.createElement(t.ClearButton,null)))))},decorators:[Ee]},h={...y,args:{isOpen:L||void 0,children:()=>e.createElement(e.Fragment,null,e.createElement(t.SearchInput,null),e.createElement(t.ListBox,null,({selectedItems:r,unselectedItems:i,disabledItems:a,hasNoItems:s})=>e.createElement(e.Fragment,null,s&&e.createElement(t.NoResults,null,"No results found."),e.createElement(t.ListBoxSection,{items:r,sectionName:"Selected items"},n=>e.createElement(t.Option,{key:n.key,item:n})),i.length>0&&r.length>0&&e.createElement(t.SectionDivider,null),e.createElement(t.ListBoxSection,{items:i,sectionName:"Unselected items"},n=>e.createElement(t.Option,{key:n.key,item:n})),a.length>0&&(r.length>0||i.length>0)&&e.createElement(t.SectionDivider,null),e.createElement(t.ListBoxSection,{items:a,sectionName:"Disabled items"},n=>e.createElement(t.Option,{key:n.key,item:n})))),e.createElement(t.MenuFooter,null,e.createElement(t.SelectAllButton,null),e.createElement(t.ClearButton,null)))},parameters:{chromatic:{disable:!1}}},M={...y,args:{isOpen:L||void 0,children:()=>e.createElement(e.Fragment,null,e.createElement(t.SearchInput,null),e.createElement(t.ListBox,null,({selectedItems:r,unselectedItems:i,disabledItems:a,hasNoItems:s})=>s?e.createElement(t.NoResults,null,"No results found."):e.createElement(e.Fragment,null,r.length>0&&e.createElement(t.ListBoxSection,{items:r,sectionHeader:"Selected items"},n=>e.createElement(t.Option,{key:n.key,item:n})),i.length>0&&e.createElement(t.ListBoxSection,{items:i,sectionHeader:"Unselected items"},n=>e.createElement(t.Option,{key:n.key,item:n})),a.length>0&&e.createElement(t.ListBoxSection,{items:a,sectionHeader:"Disabled items"},n=>e.createElement(t.Option,{key:n.key,item:n})))),e.createElement(t.MenuFooter,null,e.createElement(t.SelectAllButton,null),e.createElement(t.ClearButton,null)))},parameters:{chromatic:{disable:!1}}},F={...y,args:{isOpen:L||void 0,children:()=>e.createElement(e.Fragment,null,e.createElement(t.SearchInput,null),e.createElement(t.ListBox,null,({selectedItems:r,unselectedItems:i,disabledItems:a,hasNoItems:s})=>e.createElement(e.Fragment,null,s?e.createElement(t.NoResults,null,"No results found."):e.createElement(e.Fragment,null,r.length>0&&e.createElement(t.ListBoxSection,{items:r,sectionHeader:"Selected items"},n=>e.createElement(t.Option,{key:n.key,item:n})),i.length>0&&e.createElement(t.ListBoxSection,{items:i,sectionHeader:"Unselected items"},n=>e.createElement(t.Option,{key:n.key,item:n})),a.length>0&&e.createElement(t.ListBoxSection,{items:a,sectionHeader:e.createElement(e.Fragment,null,e.createElement("span",{className:"mb-6"},"Disabled items"),e.createElement(Fe,{type:"cautionary",persistent:!0,noBottomMargin:!0,headingProps:{tag:"span",variant:"heading-5",children:"Confidentiality protection"}},"Results for these filters are hidden to protect identities of individuals and small groups"))},n=>e.createElement(t.Option,{key:n.key,item:n}))))),e.createElement(t.MenuFooter,null,e.createElement(t.SelectAllButton,null),e.createElement(t.ClearButton,null)))},parameters:{chromatic:{disable:!1}}};var v,T,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...FilterMultiSelectTemplate
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var R,A,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    isOpen: IS_CHROMATIC || undefined,
    loadingSkeleton: <FilterMultiSelect.MenuLoadingSkeleton />
  },
  parameters: {
    chromatic: {
      disable: false
    },
    controls: {
      disable: true
    }
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,X,K;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<Selection | undefined>(args.selectedKeys);
    const [characterLimit, setCharacterLimit] = useState<number>(50);
    const handleCharacterLimitChange: React.ChangeEventHandler<HTMLInputElement> = e => setCharacterLimit(+e.target.value);
    return <>
        <TextField labelText="Character limit" onChange={handleCharacterLimitChange} value={characterLimit} classNameOverride="mb-24" />
        <FilterMultiSelect {...args} onSelectionChange={setSelectedKeys} selectedKeys={selectedKeys} trigger={(): JSX.Element => <FilterMultiSelect.TriggerButton selectedOptionLabels={getSelectedOptionLabels(selectedKeys, mockItems)} label={args.label} labelCharacterLimitBeforeTruncate={characterLimit} />} />
      </>;
  }
}`,...(K=(X=S.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var D,Q,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...FilterMultiSelectTemplate,
  args: {
    items: mockItems.slice(0, 3)
  }
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var U,_,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
    const [searchState, setSearchState] = useState("");
    const queryClient = useQueryClient();
    const fetchSWAPI = async ({
      pageParam
    }: {
      pageParam: string;
    }): Promise<{
      results: Array<{
        name: string;
        url: string;
      }>;
      next: string;
    }> => {
      const res = await fetch(\`https://swapi.dev/api/people/?page=\${pageParam}&search=\${searchState}\`);
      return res.json();
    };
    const {
      data,
      isLoading,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
      isRefetching
    } = useInfiniteQuery({
      enabled: true,
      initialPageParam: "1",
      queryKey: ["startrek-sg1", searchState],
      queryFn: fetchSWAPI,
      placeholderData: keepPreviousData,
      getNextPageParam: lastPage => {
        if (!lastPage.next) return undefined;
        const url = new URL(lastPage.next);
        const params = new URLSearchParams(url.searchParams);
        return params.get("page");
      }
    });
    type QueriesData = {
      pages: {
        results: Array<{
          name: string;
          url: string;
        }>;
      };
    };

    /**
     * We need access to the previously fetched people. If a user has selected a
     * particular person and then searched to no longer return that person, we have
     * only the selected keys to work with, no renderable values.
     */
    const cachedPeople = queryClient.getQueriesData<QueriesData>({
      queryKey: ["startrek-sg1"]
    }).flatMap(([, cachedData]) => cachedData?.pages ?? []).flatMap(page => page.results).map(item => ({
      label: item.name,
      value: item.url
    }));
    const currentPeople = React.useMemo(() => data?.pages.flatMap(res => res.results).flatMap(person => ({
      label: person.name,
      value: person.url
    })) || [], [data]);

    /**
     * To expose the selected items and float them to the top we need to merge the current
     * and cached people, to be passed as the items.
     * Make sure we remove the duplicates.
     */
    const mergedPeople = [...currentPeople, ...cachedPeople].filter((item, index, a) => a.findIndex(currItem => currItem.value === item.value) === index);

    /**
     * Only show the current filtered people when there is a search query
     */
    const items = searchState !== "" ? currentPeople : Array.from(mergedPeople);
    const filteredCount = currentPeople.length;
    const totalCount = cachedPeople.length;
    return <>
        <FilterMultiSelect label="People" isLoading={isLoading} loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />} items={items} trigger={(): JSX.Element => <FilterMultiSelect.TriggerButton selectedOptionLabels={getSelectedOptionLabels(new Set(selectedPeople), cachedPeople)} label="People" />} onSearchInputChange={setSearchState} onOpenChange={setOpen} onSelectionChange={(keys): void => {
        if (keys === "all") {
          return;
        }
        setSelectedPeople((Array.from(keys) as string[]));
      }} isOpen={open} selectedKeys={new Set(selectedPeople)}>
          {(): JSX.Element => <>
              <FilterMultiSelect.SearchInput isLoading={isRefetching && searchState !== ""} />
              <FilterMultiSelect.ListBox>
                {({
              selectedItems,
              unselectedItems,
              hasNoItems
            }): JSX.Element => <>
                    {hasNoItems ? <FilterMultiSelect.NoResults>
                        No results found for {searchState}.
                      </FilterMultiSelect.NoResults> : searchState !== "" ? <Text classNameOverride={styles.helperMessage} variant="extra-small" tag="span" color="dark-reduced-opacity">
                        Showing {filteredCount} of {totalCount}
                      </Text> : hasNextPage && <Text classNameOverride={styles.helperMessage} variant="extra-small" tag="span" color="dark-reduced-opacity">
                          There are a lot of options. Narrow them further by
                          searching for a more precise term.
                        </Text>}

                    <FilterMultiSelect.ListBoxSection items={selectedItems} sectionName="Selected items">
                      {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                    </FilterMultiSelect.ListBoxSection>
                    {unselectedItems.length > 0 && selectedItems.length > 0 && <FilterMultiSelect.SectionDivider />}
                    <FilterMultiSelect.ListBoxSection items={unselectedItems} sectionName="Unselected items">
                      {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                    </FilterMultiSelect.ListBoxSection>
                    {hasNextPage && <FilterMultiSelect.LoadMoreButton label="View more" workingLabel="Loading…" working={isFetchingNextPage} onClick={(): ReturnType<typeof fetchNextPage> => fetchNextPage()} />}
                  </>}
              </FilterMultiSelect.ListBox>

              <FilterMultiSelect.MenuFooter>
                <FilterMultiSelect.SelectAllButton />
                <FilterMultiSelect.ClearButton />
              </FilterMultiSelect.MenuFooter>
            </>}
        </FilterMultiSelect>
      </>;
  },
  decorators: [withQueryProvider]
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var j,$,V;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({
          selectedItems,
          unselectedItems,
          disabledItems,
          hasNoItems
        }): JSX.Element => <>
              {hasNoItems && <FilterMultiSelect.NoResults>
                  No results found.
                </FilterMultiSelect.NoResults>}
              <FilterMultiSelect.ListBoxSection items={selectedItems} sectionName="Selected items">
                {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
              </FilterMultiSelect.ListBoxSection>

              {unselectedItems.length > 0 && selectedItems.length > 0 && <FilterMultiSelect.SectionDivider />}
              <FilterMultiSelect.ListBoxSection items={unselectedItems} sectionName="Unselected items">
                {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
              </FilterMultiSelect.ListBoxSection>

              {disabledItems.length > 0 && (selectedItems.length > 0 || unselectedItems.length > 0) && <FilterMultiSelect.SectionDivider />}
              <FilterMultiSelect.ListBoxSection items={disabledItems} sectionName="Disabled items">
                {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
              </FilterMultiSelect.ListBoxSection>
            </>}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
  },
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(V=($=h.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var z,G,Y;M.parameters={...M.parameters,docs:{...(z=M.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({
          selectedItems,
          unselectedItems,
          disabledItems,
          hasNoItems
        }): JSX.Element => hasNoItems ? <FilterMultiSelect.NoResults>
                No results found.
              </FilterMultiSelect.NoResults> : <>
                {selectedItems.length > 0 && <FilterMultiSelect.ListBoxSection items={selectedItems} sectionHeader="Selected items">
                    {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>}

                {unselectedItems.length > 0 && <FilterMultiSelect.ListBoxSection items={unselectedItems} sectionHeader="Unselected items">
                    {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>}

                {disabledItems.length > 0 && <FilterMultiSelect.ListBoxSection items={disabledItems} sectionHeader="Disabled items">
                    {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>}
              </>}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
  },
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(Y=(G=M.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var Z,ee,te;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({
          selectedItems,
          unselectedItems,
          disabledItems,
          hasNoItems
        }): JSX.Element => <>
              {hasNoItems ? <FilterMultiSelect.NoResults>
                  No results found.
                </FilterMultiSelect.NoResults> : <>
                  {selectedItems.length > 0 && <FilterMultiSelect.ListBoxSection items={selectedItems} sectionHeader="Selected items">
                      {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                    </FilterMultiSelect.ListBoxSection>}

                  {unselectedItems.length > 0 && <FilterMultiSelect.ListBoxSection items={unselectedItems} sectionHeader="Unselected items">
                      {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                    </FilterMultiSelect.ListBoxSection>}

                  {disabledItems.length > 0 && <FilterMultiSelect.ListBoxSection items={disabledItems} sectionHeader={<>
                          <span className="mb-6">Disabled items</span>
                          <InlineNotification type="cautionary" persistent noBottomMargin headingProps={{
                tag: "span",
                variant: "heading-5",
                children: "Confidentiality protection"
              }}>
                            Results for these filters are hidden to protect
                            identities of individuals and small groups
                          </InlineNotification>
                        </>}>
                      {(item): JSX.Element => <FilterMultiSelect.Option key={item.key} item={item} />}
                    </FilterMultiSelect.ListBoxSection>}
                </>}
            </>}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
  },
  parameters: {
    chromatic: {
      disable: false
    }
  }
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Le=["Playground","Loading","TruncatedLabels","WithNoScrollbar","Async","WithSections","WithSectionHeaders","WithSectionNotification"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Async:g,Loading:d,Playground:u,TruncatedLabels:S,WithNoScrollbar:p,WithSectionHeaders:M,WithSectionNotification:F,WithSections:h,__namedExportsOrder:Le,default:fe},Symbol.toStringTag,{value:"Module"}));export{g as A,Ce as F,u as P,h as W,M as a};
