import{K as i,s as u,aE as c,a2 as l,m as f,j as m,a5 as p,a as h,b as g,Y as n,O as k,o as d}from"./vue.1659336560720.js";import{_ as v,u as R}from"./index.1659336560720.js";const _=i({name:"layoutLinkView",setup(){const e=R(),{themeConfig:s}=u(e),t=c(),a=l({currentRouteMeta:{isLink:"",title:""}}),o=f(()=>{let{isTagsview:r}=s.value;return r?"115px":"80px"});return m(()=>t.path,()=>{a.currentRouteMeta=t.meta},{immediate:!0}),{setLinkHeight:o,...p(a)}}}),w=["href"];function y(e,s,t,a,o,r){return d(),h("div",{class:"layout-view-bg-white flex layout-view-link",style:k({height:`calc(100vh - ${e.setLinkHeight}`})},[g("a",{href:e.currentRouteMeta.isLink,target:"_blank",rel:"opener",class:"flex-margin"},n(e.$t(e.currentRouteMeta.title))+"\uFF1A"+n(e.currentRouteMeta.isLink),9,w)],4)}var M=v(_,[["render",y]]);export{M as default};
