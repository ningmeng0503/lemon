import{K as u,s as l,aI as _,m,a as p,b as s,Y as o,Z as f,S as g,O as v,aC as h,aD as T,a6 as w,o as C,X as y}from"./vue.1659334762309.js";import{_ as V,u as $,b}from"./index.1659334762309.js";var S="assets/404svg.1659334762309.svg";const I=u({name:"404",setup(){const e=$(),a=b(),{themeConfig:i}=l(e),{isTagsViewCurrenFull:n}=l(a),r=_(),c=()=>{r.push("/")},t=m(()=>{let{isTagsview:d}=i.value;return n.value?"30px":d?"114px":"80px"});return{onGoHome:c,initTagViewHeight:t,svg404:S}}}),k=e=>(h("data-v-1c267a61"),e=e(),T(),e),x={class:"error-flex"},B={class:"left"},F={class:"left-item"},H=k(()=>s("div",{class:"left-item-animation left-item-num"},"404",-1)),R={class:"left-item-animation left-item-title"},N={class:"left-item-animation left-item-msg"},D={class:"left-item-animation left-item-btn"},G={class:"right"},z=["src"];function E(e,a,i,n,r,c){const t=w("el-button");return C(),p("div",{class:"error layout-view-bg-white",style:v({height:`calc(100vh - ${e.initTagViewHeight}`})},[s("div",x,[s("div",B,[s("div",F,[H,s("div",R,o(e.$t("message.notFound.foundTitle")),1),s("div",N,o(e.$t("message.notFound.foundMsg")),1),s("div",D,[f(t,{type:"primary",round:"",onClick:e.onGoHome},{default:g(()=>[y(o(e.$t("message.notFound.foundBtn")),1)]),_:1},8,["onClick"])])])]),s("div",G,[s("img",{src:e.svg404},null,8,z)])])],4)}var O=V(I,[["render",E],["__scopeId","data-v-1c267a61"]]);export{O as default};
