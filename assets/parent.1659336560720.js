import{K as R,aE as _,s as c,a2 as N,m as f,J as g,n as p,l as k,H as T,j as A,a5 as K,a as y,Z as v,S as w,k as C,a6 as L,o as u,_ as B,R as d,V as P,aH as $}from"./vue.1659336560720.js";import{_ as x,c as S,u as E,S as H}from"./index.1659336560720.js";const I=R({name:"layoutParentView",setup(){const{proxy:s}=C(),a=_(),l=S(),m=E(),{keepAliveNames:o,cachedViews:i}=c(l),{themeConfig:t}=c(m),e=N({refreshRouterViewKey:null,keepAliveNameList:[]}),h=f(()=>t.value.animation),V=f(()=>t.value.isTagsview?i.value:e.keepAliveNameList);return g(()=>{e.keepAliveNameList=o.value,s.mittBus.on("onTagsViewRefreshRouterView",n=>{e.keepAliveNameList=o.value.filter(r=>a.name!==r),e.refreshRouterViewKey=null,p(()=>{e.refreshRouterViewKey=n,e.keepAliveNameList=o.value})})}),k(()=>{p(()=>{setTimeout(()=>{var n;t.value.isCacheTagsView&&(i.value=(n=H.get("tagsViewList"))==null?void 0:n.map(r=>r.name))},0)})}),T(()=>{s.mittBus.off("onTagsViewRefreshRouterView",()=>{})}),A(()=>a.fullPath,()=>{e.refreshRouterViewKey=decodeURI(a.fullPath)}),{setTransitionName:h,getKeepAliveNames:V,...K(e)}}}),M={class:"h100"};function U(s,a,l,m,o,i){const t=L("router-view");return u(),y("div",M,[v(t,null,{default:w(({Component:e})=>[v(B,{name:s.setTransitionName,mode:"out-in"},{default:w(()=>[(u(),d($,{include:s.getKeepAliveNames},[(u(),d(P(e),{key:s.refreshRouterViewKey,class:"w100"}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})])}var J=x(I,[["render",U]]);export{J as default};
