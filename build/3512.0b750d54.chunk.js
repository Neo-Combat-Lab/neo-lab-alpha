"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3512],{3512:(x,c,t)=>{t.d(c,{ProtectedListView:()=>dt});var s=t(92132),d=t(21272),U=t(38413),B=t(55356),i=t(25815),D=t(4198),o=t(80403),r=t(5194),a=t(5409),P=t(54894),e=t(17703),W=t(68886),f=t(80836),C=t(99831),K=t(22185),j=t(15126),z=t(63299),F=t(67014),V=t(59080),Y=t(79275),G=t(14718),u=t(82437),Q=t(61535),H=t(5790),J=t(12083),X=t(35223),n=t(74930),E=t(2600),O=t(48940),T=t(41286),A=t(51187),M=t(56336),l=t(39404),L=t(58692),m=t(54257),y=t(501),Z=t(57646),w=t(23120),b=t(44414),q=t(25962),tt=t(14664),_=t(42588),st=t(90325),S=t(62785),Ot=t(87443),Tt=t(41032),At=t(22957),mt=t(93179),ct=t(73055),It=t(15747),gt=t(85306),Ct=t(77965),Lt=t(26509),vt=t(84624),Rt=t(71210),ht=t(32058),Ut=t(81185),Bt=t(82261);const ot=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Et=()=>{(0,o.L4)();const{formatMessage:I}=(0,P.A)(),v=(0,o.hN)(),it=(0,W.j)(g=>g.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canCreate:k,canDelete:rt,canUpdate:lt,canRead:R}}=(0,o.ec)(it),{push:at}=(0,e.W6)(),{trackUsage:p}=(0,o.z1)(),{startSection:et}=(0,o.Cx)(),{_unstableFormatAPIError:N}=(0,o.wq)();d.useEffect(()=>{et("apiTokens")},[et]),d.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]);const Pt=ot.map(g=>({...g,metadatas:{...g.metadatas,label:I(g.metadatas.label)}}));(0,W.b)(()=>{p("willAccessTokenList",{tokenType:C.A})});const{data:h=[],isLoading:nt,error:$}=(0,f.u)(void 0,{skip:!R});d.useEffect(()=>{$&&v({type:"warning",message:N($)})},[$,N,v]),d.useEffect(()=>{p("didAccessTokenList",{number:h.length,tokenType:C.A})},[h,p]);const[Mt]=(0,f.a)(),Dt=async g=>{try{const _t=await Mt(g);if("error"in _t){v({type:"warning",message:N(_t.error)});return}p("didDeleteToken")}catch{v({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}};return(0,s.jsxs)(U.g,{"aria-busy":nt,children:[(0,s.jsx)(o.x7,{name:"API Tokens"}),(0,s.jsx)(B.Q,{title:I({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:I({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:k&&(0,s.jsx)(i.z,{"data-testid":"create-api-token-button",startIcon:(0,s.jsx)(r.A,{}),size:"S",onClick:()=>p("willAddTokenFromList",{tokenType:C.A}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),(0,s.jsxs)(D.s,{children:[!R&&(0,s.jsx)(o.UW,{}),R&&h.length>0&&(0,s.jsx)(K.T,{permissions:{canRead:R,canDelete:rt,canUpdate:lt},headers:Pt,contentType:"api-tokens",isLoading:nt,onConfirmDelete:Dt,tokens:h,tokenType:C.A}),R&&k&&h.length===0&&(0,s.jsx)(o.R1,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:(0,s.jsx)(i.z,{variant:"secondary",startIcon:(0,s.jsx)(r.A,{}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}),R&&!k&&h.length===0&&(0,s.jsx)(o.R1,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},dt=()=>{const I=(0,W.j)(v=>v.admin_app.permissions.settings?.["api-tokens"].main);return(0,s.jsx)(o.kz,{permissions:I,children:(0,s.jsx)(Et,{})})}},22185:(x,c,t)=>{t.d(c,{T:()=>V});var s=t(92132),d=t(21272),U=t(25641),B=t(90361),i=t(33363),D=t(30893),o=t(83997),r=t(94061),a=t(88353),P=t(21610),e=t(80403),W=t(50612),f=t(83925),C=t(41909),K=t(54894),j=t(17703),z=t(71389),F=t(79793);const V=({permissions:n,headers:E=[],contentType:O,isLoading:T=!1,tokens:A=[],onConfirmDelete:M,tokenType:l})=>{const{canDelete:L,canUpdate:m,canRead:y}=n;return(0,s.jsx)(e.Ee,{headers:E,contentType:O,rows:A,withBulkActions:L||m||y,isLoading:T,onConfirmDelete:M,children:(0,s.jsx)(Y,{tokenType:l,permissions:n,onConfirmDelete:M})})},Y=({tokenType:n,permissions:E,rows:O=[],withBulkActions:T,onConfirmDelete:A})=>{const{canDelete:M,canUpdate:l,canRead:L}=E,[{query:m}]=(0,e.sq)(),{formatMessage:y}=(0,K.A)(),[,Z]=m&&m.sort?m.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,j.W6)(),{trackUsage:q}=(0,e.z1)(),tt=[...O].sort((_,st)=>{const S=_.name.localeCompare(st.name);return Z==="DESC"?-S:S});return(0,s.jsx)(U.N,{children:tt.map(_=>(0,s.jsxs)(B.Tr,{...(0,e.qM)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:l}),children:[(0,s.jsx)(i.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(i.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,s.jsx)(i.Td,{children:(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(_.createdAt)})})}),(0,s.jsx)(i.Td,{children:_.lastUsedAt&&(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),T&&(0,s.jsx)(i.Td,{children:(0,s.jsxs)(o.s,{justifyContent:"end",children:[l&&(0,s.jsx)(X,{tokenName:_.name,tokenId:_.id}),!l&&L&&(0,s.jsx)(J,{tokenName:_.name,tokenId:_.id}),M&&(0,s.jsx)(H,{tokenName:_.name,onClickDelete:()=>A?.(_.id),tokenType:n})]})})]},_.id))})},G={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},u=({tokenName:n,tokenId:E,buttonType:O="edit",children:T})=>{const{formatMessage:A}=(0,K.A)(),{location:{pathname:M}}=(0,j.W6)();return(0,s.jsx)(Q,{forwardedAs:z.k2,to:`${M}/${E}`,title:A(G[O],{target:n}),children:T})},Q=(0,F.Ay)(P.N)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,H=({tokenName:n,onClickDelete:E,tokenType:O})=>{const{formatMessage:T}=(0,K.A)(),{trackUsage:A}=(0,e.z1)(),[M,l]=d.useState(!1),L=()=>{l(!1),A("willDeleteToken",{tokenType:O}),E()};return(0,s.jsxs)(r.a,{paddingLeft:1,onClick:m=>m.stopPropagation(),children:[(0,s.jsx)(a.K,{onClick:()=>{l(!0)},label:T({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(W.A,{})}),(0,s.jsx)(e.TM,{onToggleDialog:()=>l(!1),onConfirm:L,isOpen:M})]})},J=({tokenName:n,tokenId:E})=>(0,s.jsx)(u,{tokenName:n,tokenId:E,buttonType:"read",children:(0,s.jsx)(f.A,{})}),X=({tokenName:n,tokenId:E})=>(0,s.jsx)(u,{tokenName:n,tokenId:E,children:(0,s.jsx)(C.A,{width:12})})},80836:(x,c,t)=>{t.d(c,{a:()=>D,b:()=>B,c:()=>i,d:()=>o,u:()=>U});var s=t(68886);const d=s.n.injectEndpoints({endpoints:r=>({getAPITokens:r.query({query:()=>"/admin/api-tokens",transformResponse:a=>a.data,providesTags:(a,P)=>[...a?.map(({id:e})=>({type:"ApiToken",id:e}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:r.query({query:a=>`/admin/api-tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),createAPIToken:r.mutation({query:a=>({url:"/admin/api-tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:r.mutation({query:a=>({url:`/admin/api-tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),updateAPIToken:r.mutation({query:({id:a,...P})=>({url:`/admin/api-tokens/${a}`,method:"PUT",data:P}),transformResponse:a=>a.data,invalidatesTags:(a,P,{id:e})=>[{type:"ApiToken",id:e}]})}),overrideExisting:!1}),{useGetAPITokensQuery:U,useGetAPITokenQuery:B,useCreateAPITokenMutation:i,useDeleteAPITokenMutation:D,useUpdateAPITokenMutation:o}=d},99831:(x,c,t)=>{t.d(c,{A:()=>s,T:()=>d});const s="api-token",d="transfer-token"}}]);
