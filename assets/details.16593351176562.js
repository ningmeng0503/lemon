import{K as c,aE as p,s as n,a2 as d,m as f,l as h,a5 as g,a as v,b as s,Y as u,O as _,o as w}from"./vue.1659335117656.js";import{_ as y,b as C,u as F}from"./index.1659335117656.js";const T=c({name:"paramsCommonDetails",setup(){const e=p(),t=C(),o=F(),{themeConfig:r}=n(o),{isTagsViewCurrenFull:i}=n(t),a=d({params:{path:"",query:""}}),l=f(()=>{let{isTagsview:m}=r.value;return i.value?"30px":m?"114px":"80px"});return h(()=>{a.params=e}),{setViewHeight:l,...g(a)}}}),V={class:"flex-margin color-primary"},x=s("div",null,"paramsCommonDetails",-1),R={class:"mt10 mb10"};function $(e,t,o,r,i,a){return w(),v("div",{class:"layout-view-bg-white flex",style:_({height:`calc(100vh - ${e.setViewHeight}`})},[s("div",V,[x,s("div",R,"\u8DEF\u5F84\uFF1Apath: "+u(e.params.path),1),s("div",null,"\u53C2\u6570\uFF1Aquery: "+u(e.params.query),1)])],4)}var q=y(T,[["render",$]]);export{q as default};
