import{K as c,s as f,aE as u,a2 as d,m as g,l as h,j as p,a5 as v,T as m,a as w,b as T,U as _,O as L,n as b,am as C,o as D}from"./vue.1659334762309.js";import{_ as R,u as V,b as $}from"./index.1659334762309.js";const k=c({name:"layoutIfameView",setup(){const e=V(),o=$(),{themeConfig:i}=f(e),{isTagsViewCurrenFull:n}=f(o),r=u(),a=d({iframeDom:null,iframeLoading:!0,iframeUrl:""}),s=()=>{a.iframeUrl=r.meta.isLink,b(()=>{a.iframeLoading=!0;const t=a.iframeDom;if(!t)return!1;t.onload=()=>{a.iframeLoading=!1}})},l=g(()=>{let{isTagsview:t}=i.value;return n.value?"1px":t?"86px":"51px"});return h(()=>{s()}),p(()=>r.path,()=>{s()}),{setIframeHeight:l,...v(a)}}}),x=["src"];function y(e,o,i,n,r,a){const s=C("loading");return m((D(),w("div",{class:"layout-view-bg-white flex mt1",style:L({height:`calc(100vh - ${e.setIframeHeight}`,border:"none"})},[m(T("iframe",{src:e.iframeUrl,frameborder:"0",height:"100%",width:"100%",ref:"iframeDom"},null,8,x),[[_,!e.iframeLoading]])],4)),[[s,e.iframeLoading]])}var B=R(k,[["render",y]]);export{B as default};
