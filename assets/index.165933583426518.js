import{N as x}from"./index.165933583426519.js";import{K as g,aE as k,a2 as v,a5 as E,a as V,Z as e,S as s,a6 as n,o as D,b as o,k as b,X as i}from"./vue.1659335834265.js";import{_ as B}from"./index.1659335834265.js";const T=g({name:"funTagsView",components:{NoticeBar:x},setup(){const{proxy:t}=b(),u=k(),a=v({});return{refreshCurrentTagsView:()=>{t.mittBus.emit("onCurrentContextmenuClick",Object.assign({},{contextMenuClickId:0,...u}))},closeCurrentTagsView:()=>{t.mittBus.emit("onCurrentContextmenuClick",Object.assign({},{contextMenuClickId:1,...u}))},closeOtherTagsView:()=>{t.mittBus.emit("onCurrentContextmenuClick",Object.assign({},{contextMenuClickId:2,...u}))},closeAllTagsView:()=>{t.mittBus.emit("onCurrentContextmenuClick",Object.assign({},{contextMenuClickId:3,...u}))},openCurrenFullscreen:()=>{t.mittBus.emit("onCurrentContextmenuClick",Object.assign({},{contextMenuClickId:4,...u}))},...E(a)}}}),y={class:"fun-tagsview"},O={class:"flex-warp"},A={class:"flex-warp-item"},I={class:"flex-warp-item-box"},N=i(" \u5237\u65B0\u5F53\u524D\u9875 "),R={class:"flex-warp-item"},j={class:"flex-warp-item-box"},z=i(" \u5173\u95ED\u5F53\u524D\u9875 "),M={class:"flex-warp-item"},$={class:"flex-warp-item-box"},S=i(" \u5173\u95ED\u5176\u5B83 "),K={class:"flex-warp-item"},X={class:"flex-warp-item-box"},Z=i(" \u5168\u90E8\u5173\u95ED "),q={class:"flex-warp-item"},G={class:"flex-warp-item-box"},H=i(" \u5F53\u524D\u9875\u5168\u5C4F ");function J(t,u,a,d,C,f){const r=n("NoticeBar"),_=n("ele-RefreshRight"),l=n("el-icon"),c=n("el-button"),m=n("ele-Close"),p=n("ele-CircleClose"),F=n("ele-FolderDelete"),h=n("ele-FullScreen"),w=n("el-card");return D(),V("div",y,[e(r,{text:"\u5DF2\u5220\u9664\u975E\u5F53\u524D\u9875 tagsView \u6F14\u793A\uFF0C\u540E\u7EED\u6709\u65F6\u95F4\u53EF\u4EE5\u518D\u52A0\u56DE\u6765\uFF01\uFF0Ctagsview \u652F\u6301\u591A\u6807\u7B7E\uFF08\u53C2\u6570\u4E0D\u540C\uFF09\u3001\u5355\u6807\u7B7E\u5171\u7528\uFF08\u53C2\u6570\u4E0D\u540C\uFF09",background:"#ecf5ff",color:"#409eff"}),e(w,{shadow:"hover",header:"tagsView \u5F53\u524D\u9875\u6F14\u793A",class:"mt15"},{default:s(()=>[o("div",O,[o("div",A,[o("div",I,[e(c,{type:"primary",size:"default",onClick:t.refreshCurrentTagsView},{default:s(()=>[e(l,null,{default:s(()=>[e(_)]),_:1}),N]),_:1},8,["onClick"])])]),o("div",R,[o("div",j,[e(c,{type:"info",size:"default",onClick:t.closeCurrentTagsView},{default:s(()=>[e(l,null,{default:s(()=>[e(m)]),_:1}),z]),_:1},8,["onClick"])])]),o("div",M,[o("div",$,[e(c,{type:"warning",size:"default",onClick:t.closeOtherTagsView},{default:s(()=>[e(l,null,{default:s(()=>[e(p)]),_:1}),S]),_:1},8,["onClick"])])]),o("div",K,[o("div",X,[e(c,{type:"danger",size:"default",onClick:t.closeAllTagsView},{default:s(()=>[e(l,null,{default:s(()=>[e(F)]),_:1}),Z]),_:1},8,["onClick"])])]),o("div",q,[o("div",G,[e(c,{type:"success",size:"default",onClick:t.openCurrenFullscreen},{default:s(()=>[e(l,null,{default:s(()=>[e(h)]),_:1}),H]),_:1},8,["onClick"])])])])]),_:1})])}var U=B(T,[["render",J],["__scopeId","data-v-a7bf7f82"]]);export{U as default};
