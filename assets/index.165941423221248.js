import{K as m,a2 as _,m as w,l as v,H as x,a5 as C,R as f,S as h,_ as y,a6 as k,o as s,T as S,U as b,a as r,b as c,F as I,a9 as g,Z as E,Y as u,O as L,aC as $,aD as B}from"./vue.1659414232212.js";import{_ as F}from"./index.1659414232212.js";const M=m({name:"pagesWorkflowContextmenu",props:{dropdown:{type:Object}},setup(e,{emit:d}){const o=_({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"\u5220\u9664",icon:"ele-Delete"},{contextMenuClickId:1,txt:"\u7F16\u8F91",icon:"ele-Edit"}],item:{type:"node"},conn:{}}),i=w(()=>e.dropdown),p=n=>{d("current",Object.assign({},{contextMenuClickId:n},o.item),o.conn)},l=(n,a={})=>{o.item=n,o.conn=a,t(),setTimeout(()=>{o.isShow=!0},10)},t=()=>{o.isShow=!1};return v(()=>{document.body.addEventListener("click",t),document.body.addEventListener("contextmenu",t)}),x(()=>{document.body.removeEventListener("click",t),document.body.removeEventListener("contextmenu",t)}),{dropdowns:i,openContextmenu:l,closeContextmenu:t,onCurrentClick:p,...C(o)}}}),D=e=>($("data-v-492879ac"),e=e(),B(),e),O={class:"el-dropdown-menu"},T=["onClick"],j=D(()=>c("div",{class:"el-popper__arrow",style:{left:"10px"}},null,-1));function z(e,d,o,i,p,l){const t=k("SvgIcon");return s(),f(y,{name:"el-zoom-in-center"},{default:h(()=>[S((s(),r("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:L(`top: ${e.dropdowns.y+5}px;left: ${e.dropdowns.x}px;`),key:Math.random()},[c("ul",O,[(s(!0),r(I,null,g(e.dropdownList,(n,a)=>(s(),r("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:a,onClick:N=>e.onCurrentClick(n.contextMenuClickId)},[E(t,{name:n.icon},null,8,["name"]),c("span",null,u(n.txt)+u(e.item.type==="line"?"\u7EBF":"\u8282\u70B9"),1)],8,T))),128))]),j],4)),[[b,e.isShow]])]),_:1})}var V=F(M,[["render",z],["__scopeId","data-v-492879ac"]]);export{V as default};
