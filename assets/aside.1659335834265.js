import{K as k,s as L,aE as q,a2 as M,m as S,j as $,l as H,aJ as N,a5 as W,a6 as d,o as C,R as _,S as y,a as B,a9 as j,F as T,Z as b,b as A,Y as F,aa as P,J as U,k as z,T as J,U as O,W as K,M as Y}from"./vue.1659335834265.js";import{u as V,_ as D,d as Z,b as x,a7 as G}from"./index.1659335834265.js";import{S as Q,L as X}from"./main.1659335834265.js";const ee=k({name:"navMenuVertical",components:{SubItem:Q},props:{menuList:{type:Array,default:()=>[]}},setup(t){const l=V(),{themeConfig:m}=L(l),f=q(),u=M({defaultActive:f.meta.isDynamic?f.meta.isDynamicPath:f.path,isCollapse:!1}),i=S(()=>t.menuList),p=S(()=>m.value),o=r=>{const{path:a,meta:c}=r,s=c.isDynamic?c.isDynamicPath.split("/"):a.split("/");return s.length>=4&&c.isHide?s.splice(0,3).join("/"):a};return $(m.value,()=>{document.body.clientWidth<=1e3?u.isCollapse=!1:u.isCollapse=m.value.isCollapse},{immediate:!0}),H(()=>{u.defaultActive=o(f)}),N(r=>{u.defaultActive=o(r),document.body.clientWidth<1e3&&(m.value.isCollapse=!1)}),{menuLists:i,getThemeConfig:p,...W(u)}}});function te(t,l,m,f,u,i){const p=d("SvgIcon"),o=d("SubItem"),r=d("el-sub-menu"),a=d("el-menu-item"),c=d("el-menu");return C(),_(c,{router:"","default-active":t.defaultActive,"background-color":"transparent",collapse:t.isCollapse,"unique-opened":t.getThemeConfig.isUniqueOpened,"collapse-transition":!1},{default:y(()=>[(C(!0),B(T,null,j(t.menuLists,s=>(C(),B(T,null,[s.children&&s.children.length>0?(C(),_(r,{index:s.path,key:s.path},{title:y(()=>[b(p,{name:s.meta.icon},null,8,["name"]),A("span",null,F(t.$t(s.meta.title)),1)]),default:y(()=>[b(o,{chil:s.children},null,8,["chil"])]),_:2},1032,["index"])):(C(),_(a,{index:s.path,key:s.path},P({default:y(()=>[b(p,{name:s.meta.icon},null,8,["name"])]),_:2},[!s.meta.isLink||s.meta.isLink&&s.meta.isIframe?{name:"title",fn:y(()=>[A("span",null,F(t.$t(s.meta.title)),1)])}:{name:"title",fn:y(()=>[A("a",{href:s.meta.isLink,target:"_blank",rel:"opener",class:"w100"},F(t.$t(s.meta.title)),9,["href"])])}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}var se=D(ee,[["render",te]]);const ne=k({name:"layoutAside",components:{Logo:X,Vertical:se},setup(){const{proxy:t}=z(),l=Z(),m=V(),f=x(),{routesList:u}=L(l),{themeConfig:i}=L(m),{isTagsViewCurrenFull:p}=L(f),o=M({menuList:[],clientWidth:0}),r=S(()=>{const{layout:e,isCollapse:n,menuBar:h}=i.value,g=["#FFFFFF","#FFF","#fff","#ffffff"].includes(h)?"layout-el-aside-br-color":"";if(o.clientWidth<=1e3)if(n){document.body.setAttribute("class","el-popup-parent--hidden");const I=document.querySelector(".layout-container"),v=document.createElement("div");return v.setAttribute("class","layout-aside-mobile-mode"),I.appendChild(v),v.addEventListener("click",a),[g,"layout-aside-mobile","layout-aside-mobile-open"]}else return a(),[g,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"?n?[g,"layout-aside-pc-1"]:[g,"layout-aside-pc-220"]:n?[g,"layout-aside-pc-64"]:[g,"layout-aside-pc-220"]}),a=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var h;(h=e==null?void 0:e.parentNode)==null||h.removeChild(e)},300),document.body.clientWidth<1e3&&(i.value.isCollapse=!1),document.body.setAttribute("class","")},c=S(()=>{let{layout:e,isShowLogo:n}=i.value;return n&&e==="defaults"||n&&e==="columns"}),s=()=>{if(i.value.layout==="columns")return!1;o.menuList=w(u.value)},w=e=>e.filter(n=>!n.meta.isHide).map(n=>(n=Object.assign({},n),n.children&&(n.children=w(n.children)),n)),R=e=>{o.clientWidth=e},E=e=>{let{layout:n}=i.value;if(n!=="columns")return!1;e||t.mittBus.emit("restoreDefault"),l.setColumnsMenuHover(e)};return $(i.value,e=>{if(e.isShowLogoChange!==e.isShowLogo){if(!t.$refs.layoutAsideScrollbarRef)return!1;t.$refs.layoutAsideScrollbarRef.update()}}),$(G.state,e=>{let{layout:n,isClassicSplitMenu:h}=e.themeConfig.themeConfig;if(n==="classic"&&h)return!1;s()},{deep:!0}),U(()=>{R(document.body.clientWidth),s(),t.mittBus.on("setSendColumnsChildren",e=>{o.menuList=e.children}),t.mittBus.on("setSendClassicChildren",e=>{let{layout:n,isClassicSplitMenu:h}=i.value;n==="classic"&&h&&(o.menuList=[],o.menuList=e.children)}),t.mittBus.on("getBreadcrumbIndexSetFilterRoutes",()=>{s()}),t.mittBus.on("layoutMobileResize",e=>{R(e.clientWidth),a()})}),{setCollapseStyle:r,setShowLogo:c,isTagsViewCurrenFull:p,onAsideEnterLeave:E,...W(o)}}}),oe={class:"h100"};function ie(t,l,m,f,u,i){const p=d("Logo"),o=d("Vertical"),r=d("el-scrollbar"),a=d("el-aside");return J((C(),B("div",oe,[b(a,{class:Y(["layout-aside",t.setCollapseStyle])},{default:y(()=>[t.setShowLogo?(C(),_(p,{key:0})):K("",!0),b(r,{class:"flex-auto",ref:"layoutAsideScrollbarRef",onMouseenter:l[0]||(l[0]=c=>t.onAsideEnterLeave(!0)),onMouseleave:l[1]||(l[1]=c=>t.onAsideEnterLeave(!1))},{default:y(()=>[b(o,{menuList:t.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[O,!t.isTagsViewCurrenFull]])}var ce=D(ne,[["render",ie]]);export{ce as A};
