import{_ as E,f as c,g as C,h as m,j as f,k as p}from"./index.1659336560720.js";import{K as B,s as _,a2 as h,l as D,a5 as g,a as w,Z as e,S as l,a6 as t,o as R}from"./vue.1659336560720.js";const b=B({name:"limitsFrontEndPage",setup(){const u=c(),{userInfos:o}=_(u),s=h({val:"",userAuth:""}),a=()=>{s.userAuth=o.value.roles[0]},n=async()=>{C(),m.set("userName",s.userAuth),await u.setUserInfos(),await f(),p()};return D(()=>{a()}),{userInfos:o,onRadioChange:n,...g(s)}}});function v(u,o,s,a,n,I){const F=t("el-alert"),r=t("el-radio-button"),i=t("el-radio-group"),d=t("el-card");return R(),w("div",null,[e(F,{title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u6B64\u6743\u9650\u9875\u9762\u4EE3\u7801\u53CA\u6548\u679C\u53EA\u4F5C\u4E3A\u6F14\u793A\u4F7F\u7528\uFF0C\u82E5\u51FA\u73B0\u4E0D\u53EF\u9006\u8F6C\u7684bug\uFF0C\u8BF7\u5C1D\u8BD5 `F5` \u5237\u65B0\u9875\u9762\u3002\u82E5\u5B9E\u9645\u9879\u76EE\u4E2D\u975E\u8981\u5B9E\u73B0\u6B64\u7528\u6237\u6743\u9650\u5207\u6362\u529F\u80FD\uFF0C\n      \u8BF7\u5728\u5207\u6362\u65B9\u6CD5 `onRadioChange` \u6700\u540E\u9762\u6DFB\u52A0\u5237\u65B0\u4EE3\u7801 `window.location.reload()`\u3002 \u8BF7\u6CE8\u610F\uFF1A\u6309\u94AE\u6743\u9650\u9875\u9762\u4E2D\u7684\u6F14\u793A2\uFF08\u6307\u4EE4\u6A21\u5F0F\uFF09\u3001\u6F14\u793A3\uFF08\u51FD\u6570\u6A21\u5F0F\uFF09\n      \u5207\u6362\u7528\u6237\u65F6\u65E0\u6CD5\u52A8\u6001\u6F14\u793A\uFF0C\u60F3\u8981\u52A8\u6001\u6F14\u793A\uFF0C\u8BF7\u6309 `F5` \u6216\u8005\u6DFB\u52A0 `window.location.reload()`\u3002",type:"warning",closable:!1}),e(F,{title:`\u5F53\u524D\u7528\u6237\u9875\u9762\u6743\u9650\uFF1A[${u.userInfos.roles}]\uFF0C\u5F53\u524D\u7528\u6237\u6309\u94AE\u6743\u9650\uFF1A[${u.userInfos.authBtnList}]`,type:"success",closable:!1,class:"mt15"},null,8,["title"]),e(d,{shadow:"hover",header:"\u5207\u6362\u7528\u6237\u6F14\u793A\uFF0C\u524D\u7AEF\u63A7\u5236\u4E0D\u540C\u7528\u6237\u663E\u793A\u4E0D\u540C\u9875\u9762\u3001\u6309\u94AE\u6743\u9650",class:"mt15"},{default:l(()=>[e(i,{modelValue:u.userAuth,"onUpdate:modelValue":o[0]||(o[0]=A=>u.userAuth=A),size:"default",onChange:u.onRadioChange},{default:l(()=>[e(r,{label:"admin"}),e(r,{label:"common"})]),_:1},8,["modelValue","onChange"])]),_:1})])}var V=E(b,[["render",v]]);export{V as default};
