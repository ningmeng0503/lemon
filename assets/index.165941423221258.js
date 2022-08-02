import{K as y,s as M,a2 as V,m as z,l as B,a5 as D,a as N,b as o,Y as T,Z as n,S as s,W as p,R as S,M as k,aC as G,aD as H,a6 as t,o as r,k as Y,X as f}from"./vue.1659414232212.js";import{_ as Z,u as F,W as _,X as K,L as u,Y as g,o as O,Z as b,$ as h,a0 as R}from"./index.1659414232212.js";import{l as W}from"./logo-mini.1659414232212.js";import X from"./account.1659414232212.js";import q from"./mobile.1659414232212.js";import U from"./scan.1659414232212.js";import"./qrcode.1659414232212.js";var j="/lemon/assets/login-icon-two.1659414232212.svg";const J=y({name:"loginIndex",components:{Account:X,Mobile:q,Scan:U},setup(){const{proxy:e}=Y(),i=F(),{themeConfig:d}=M(i),c=V({tabsActiveName:"account",isScan:!1,disabledI18n:_,mobileLogin:!0}),v=z(()=>d.value),C=l=>{u.removeCommon(g),d.value.globalI18n=l,u.setCommon(g,d.value),e.$i18n.locale=l,m(),O.useTitle()},a=l=>{e.mittBus.emit(R,e.$i18n.messages[l])},m=()=>{switch(u.getCommon(g).globalI18n){case _:c.disabledI18n=_,a(_);break;case h:c.disabledI18n=h,a(h);break;case b:c.disabledI18n=b,a(b);break}};return B(()=>{K.done(),u.getCommon(g)&&m()}),{logoMini:W,loginIconTwo:j,getThemeConfig:v,onLanguageChange:C,...D(c)}}}),P=e=>(G("data-v-3e156eb1"),e=e(),H(),e),Q={class:"login-container"},x={class:"login-icon-group"},ee={class:"login-icon-group-title"},oe=["src"],ne={class:"login-icon-group-title-text font25"},se=["src"],te={class:"login-content"},ae={class:"login-content-main"},ie={class:"layout-navbars-breadcrumb-user-icon"},le=["title"],ce=f("\u7B80\u4F53\u4E2D\u6587"),de=f("English"),me=f("\u7E41\u9AD4\u4E2D\u6587"),re={class:"login-content-title ml15"},_e={key:0},ue=P(()=>o("div",{class:"login-content-main-sacn-delta"},null,-1));function ge(e,i,d,c,v,C){const a=t("el-dropdown-item"),m=t("el-dropdown-menu"),l=t("el-dropdown"),E=t("Account"),I=t("el-tab-pane"),$=t("Mobile"),A=t("el-tabs"),L=t("Scan");return r(),N("div",Q,[o("div",x,[o("div",ee,[o("img",{src:e.logoMini},null,8,oe),o("div",ne,T(e.getThemeConfig.globalViceTitle),1)]),o("img",{src:e.loginIconTwo,class:"login-icon-group-icon"},null,8,se)]),o("div",te,[o("div",ae,[n(l,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:e.onLanguageChange},{dropdown:s(()=>[n(m,null,{default:s(()=>[n(a,{command:"zh-cn",disabled:e.disabledI18n==="zh-cn"},{default:s(()=>[ce]),_:1},8,["disabled"]),n(a,{command:"en",disabled:e.disabledI18n==="en"},{default:s(()=>[de]),_:1},8,["disabled"]),n(a,{command:"zh-tw",disabled:e.disabledI18n==="zh-tw"},{default:s(()=>[me]),_:1},8,["disabled"])]),_:1})]),default:s(()=>[o("div",ie,[o("i",{class:k(["iconfont",e.disabledI18n==="en"?"icon-fuhao-yingwen":"icon-fuhao-zhongwen"]),title:e.$t("message.user.title1")},null,10,le)])]),_:1},8,["onCommand"]),o("h4",re,T(e.getThemeConfig.globalTitle),1),e.isScan?p("",!0):(r(),N("div",_e,[n(A,{modelValue:e.tabsActiveName,"onUpdate:modelValue":i[0]||(i[0]=w=>e.tabsActiveName=w)},{default:s(()=>[n(I,{label:e.$t("message.label.one1"),name:"account"},{default:s(()=>[n(E)]),_:1},8,["label"]),e.mobileLogin?(r(),S(I,{key:0,label:e.$t("message.label.two2"),name:"mobile"},{default:s(()=>[n($)]),_:1},8,["label"])):p("",!0)]),_:1},8,["modelValue"])])),e.isScan?(r(),S(L,{key:1})):p("",!0),o("div",{class:"login-content-main-sacn",onClick:i[1]||(i[1]=w=>e.isScan=!e.isScan)},[o("i",{class:k(["iconfont",e.isScan?"icon-diannao1":"icon-barcode-qr"])},null,2),ue])])])])}var we=Z(J,[["render",ge],["__scopeId","data-v-3e156eb1"]]);export{we as default};
