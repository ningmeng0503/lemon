import{K as d,s as r,m,a as _,b as s,Y as o,Z as u,S as p,O as f,aC as g,aD as v,a6 as h,o as w,X as C}from"./vue.1659364195415.js";import{_ as T,u as S,b as y,S as V,L as $}from"./index.1659364195415.js";var b="/lemon/assets/401svg.1659364195415.svg";const A=d({name:"401",setup(){const e=S(),a=y(),{themeConfig:i}=r(e),{isTagsViewCurrenFull:n}=r(a),c=()=>{V.clear(),$.clearCommon(),window.location.reload()},l=m(()=>{let{isTagsview:t}=i.value;return n.value?"30px":t?"114px":"80px"});return{onSetAuth:c,initTagViewHeight:l,svg401:b}}}),k=e=>(g("data-v-4dce0e79"),e=e(),v(),e),x={class:"error-flex"},B={class:"left"},I={class:"left-item"},N=k(()=>s("div",{class:"left-item-animation left-item-num"},"401",-1)),R={class:"left-item-animation left-item-title"},D={class:"left-item-animation left-item-msg"},H={class:"left-item-animation left-item-btn"},L={class:"right"},z=["src"];function E(e,a,i,n,c,l){const t=h("el-button");return w(),_("div",{class:"error layout-view-bg-white",style:f({height:`calc(100vh - ${e.initTagViewHeight}`})},[s("div",x,[s("div",B,[s("div",I,[N,s("div",R,o(e.$t("message.noAccess.accessTitle")),1),s("div",D,o(e.$t("message.noAccess.accessMsg")),1),s("div",H,[u(t,{type:"primary",round:"",onClick:e.onSetAuth},{default:p(()=>[C(o(e.$t("message.noAccess.accessBtn")),1)]),_:1},8,["onClick"])])])]),s("div",L,[s("img",{src:e.svg401},null,8,z)])])],4)}var M=T(A,[["render",E],["__scopeId","data-v-4dce0e79"]]);export{M as default};
