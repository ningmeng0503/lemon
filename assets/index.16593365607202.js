import{_ as u,u as l,a as n,L as a}from"./index.1659336560720.js";import{K as _,aF as i,s as d,J as m,H as c,o as f,R as p,V as y,k as v}from"./vue.1659336560720.js";const L=_({name:"layout",components:{defaults:i(()=>n(()=>import("./defaults.1659336560720.js"),["assets/defaults.1659336560720.js","assets/vue.1659336560720.js","assets/index.1659336560720.js","assets/index.165933656072028.css","assets/aside.1659336560720.js","assets/main.1659336560720.js","assets/main.1659336560720.css","assets/logo-mini.1659336560720.js","assets/sortable.esm.1659336560720.js","assets/parent.1659336560720.js"])),classic:i(()=>n(()=>import("./classic.1659336560720.js"),["assets/classic.1659336560720.js","assets/vue.1659336560720.js","assets/index.1659336560720.js","assets/index.165933656072028.css","assets/aside.1659336560720.js","assets/main.1659336560720.js","assets/main.1659336560720.css","assets/logo-mini.1659336560720.js","assets/sortable.esm.1659336560720.js","assets/parent.1659336560720.js"])),transverse:i(()=>n(()=>import("./transverse.1659336560720.js"),["assets/transverse.1659336560720.js","assets/main.1659336560720.js","assets/main.1659336560720.css","assets/vue.1659336560720.js","assets/index.1659336560720.js","assets/index.165933656072028.css","assets/logo-mini.1659336560720.js","assets/sortable.esm.1659336560720.js","assets/parent.1659336560720.js"])),columns:i(()=>n(()=>import("./columns.1659336560720.js"),["assets/columns.1659336560720.js","assets/columns.1659336560720.css","assets/vue.1659336560720.js","assets/index.1659336560720.js","assets/index.165933656072028.css","assets/aside.1659336560720.js","assets/main.1659336560720.js","assets/main.1659336560720.css","assets/logo-mini.1659336560720.js","assets/sortable.esm.1659336560720.js","assets/parent.1659336560720.js"]))},setup(){const{proxy:o}=v(),r=l(),{themeConfig:e}=d(r),t=()=>{a.get("oldLayout")||a.set("oldLayout",e.value.layout);const s=document.body.clientWidth;s<1e3?(e.value.isCollapse=!1,o.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:s})):o.mittBus.emit("layoutMobileResize",{layout:a.get("oldLayout")?a.get("oldLayout"):e.value.layout,clientWidth:s})};return m(()=>{t(),window.addEventListener("resize",t)}),c(()=>{window.removeEventListener("resize",t)}),{themeConfig:e}}});function E(o,r,e,t,s,C){return f(),p(y(o.themeConfig.layout))}var h=u(L,[["render",E]]);export{h as default};
