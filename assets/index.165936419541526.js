import{_ as d,n as c}from"./index.1659364195415.js";import{K as m,a2 as i,l as F,a5 as V,R as _,S as l,a6 as t,o as f,Z as a,X as C}from"./vue.1659364195415.js";const B=m({name:"funClipboard",setup(){const{copyText:e}=c(),o=i({copyVal:"https://gitee.com/lyt-top/vue-next-admin",shearVal:""});return F(()=>{}),{copyText:e,...V(o)}}}),b=C("\u590D\u5236\u94FE\u63A5");function h(e,o,v,y,A,E){const s=t("el-alert"),p=t("el-button"),n=t("el-input"),r=t("el-card");return f(),_(r,{shadow:"hover",header:"\u590D\u5236\u526A\u5207\u6F14\u793A"},{default:l(()=>[a(s,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-clipboard3`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/JamieCurnow/vue-clipboard3`",type:"success",closable:!1,class:"mb15"}),a(n,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:e.copyVal,"onUpdate:modelValue":o[1]||(o[1]=u=>e.copyVal=u)},{append:l(()=>[a(p,{onClick:o[0]||(o[0]=u=>e.copyText(e.copyVal))},{default:l(()=>[b]),_:1})]),_:1},8,["modelValue"]),a(n,{placeholder:"\u5148\u70B9\u51FB\u4E0A\u65B9 `\u590D\u5236\u94FE\u63A5` \u6309\u94AE\uFF0C\u7136\u540E `Ctrl + V` \u8FDB\u884C\u7C98\u8D34\uFF01 ",modelValue:e.shearVal,"onUpdate:modelValue":o[2]||(o[2]=u=>e.shearVal=u),class:"mt15"},null,8,["modelValue"])]),_:1})}var k=d(B,[["render",h]]);export{k as default};
