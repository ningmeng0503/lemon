import{K as _,s as d,a2 as p,m as f,a5 as T,a as t,b as r,Y as C,F as k,a9 as v,a6 as g,o as l,Z as h}from"./vue.1659364195415.js";import{_ as w,u as D}from"./index.1659364195415.js";const N=_({name:"pagesWorkflowTool",setup(o,{emit:n}){const s=D(),{themeConfig:a}=d(s),i=p({toolList:[{icon:"ele-Help",title:"\u5E2E\u52A9",fnName:"help"},{icon:"ele-Download",title:"\u4E0B\u8F7D",fnName:"download"},{icon:"ele-Check",title:"\u63D0\u4EA4",fnName:"submit"},{icon:"ele-DocumentCopy",title:"\u590D\u5236",fnName:"copy"},{icon:"ele-Delete",title:"\u5220\u9664",fnName:"del"},{icon:"ele-FullScreen",title:"\u5168\u5C4F",fnName:"fullscreen"}]});return{setToolTitle:f(()=>{let{globalTitle:e}=a.value;return`${e}\u5DE5\u4F5C\u6D41`}),onToolClick:e=>{n("tool",e)},...T(i)}}}),y={class:"workflow-tool"},E={class:"pl15"},F={class:"workflow-tool-right"},$=["title","onClick"];function b(o,n,s,a,i,u){const c=g("SvgIcon");return l(),t("div",y,[r("div",E,C(o.setToolTitle),1),r("div",F,[(l(!0),t(k,null,v(o.toolList,(e,m)=>(l(),t("div",{class:"workflow-tool-icon",key:m,title:e.title,onClick:B=>o.onToolClick(e.fnName)},[h(c,{name:e.icon},null,8,["name"])],8,$))),128))])])}var L=w(N,[["render",b],["__scopeId","data-v-4882b14e"]]);export{L as default};
