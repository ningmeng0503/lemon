import{K as D,s as w,a2 as V,aI as _,m as E,a5 as C,a as B,b as t,Z as a,S as l,O as v,a6 as n,o as N,X as i,Y as A}from"./vue.1659334762309.js";import{_ as b,b as y,u as I,e as h}from"./index.1659334762309.js";const x=D({name:"paramsDynamic",setup(){const u=y(),s=I(),{themeConfig:F}=w(s),{isTagsViewCurrenFull:g}=w(u),e=V({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),d=_();return{setViewHeight:E(()=>{let{isTagsview:o}=F.value;return g.value?"30px":o?"114px":"80px"}),onGoDetailsClick:()=>{if(!e.tagsViewName)return h.warning("\u52A8\u6001\u8DEF\u7531tagsViewName\u4E3A\u5FC5\u586B\uFF0C\u56E0\u4E3A\u8DEF\u7531\u914D\u7F6E\u4E86");if(!e.value)return h.warning("\u8DEF\u7531\u53C2\u6570id\u503C\u4E3A\u5FC5\u586B");d.push({name:"paramsDynamicDetails",params:{t:"vue-next-admin",id:e.value,tagsViewName:e.tagsViewName}}),e.value=""},onChangeI18n:()=>{e.tagsViewNameIsI18n=!e.tagsViewNameIsI18n,e.tagsViewNameIsI18n?e.tagsViewName=JSON.stringify({"zh-cn":"\u6211\u662F\u52A8\u6001\u8DEF\u7531",en:"Im dynamic routing","zh-tw":"\u6211\u662F\u52D5\u614B\u8DEF\u7531"}):e.tagsViewName="\u6211\u662F\u52A8\u6001\u8DEF\u7531\u6D4B\u8BD5tagsViewName(\u975E\u56FD\u9645\u5316)"},...C(e)}}}),k={class:"flex-margin",style:{width:"400px"}},T=t("div",null,"1\u3001\u8BBE\u7F6E\u975E\u56FD\u9645\u5316\uFF1A\u683C\u5F0F\uFF1AtagsViewName=xxx",-1),z=t("br",null,null,-1),S=t("div",null,'2\u3001\u8BBE\u7F6E\u56FD\u9645\u5316\uFF1A\u683C\u5F0F\uFF1AtagsViewName=JSON.stringify({"zh-cn":"\u6D4B\u8BD5\u7528","en":"test+page","zh-tw":"\u6E2C\u8A66\u7528"})',-1),R=t("br",null,null,-1),$=t("div",null,"3\u3001\u8BBE\u7F6E\u56FD\u9645\u5316\u540E\uFF0C\u53BB\u9876\u680F\u5207\u6362\u8BED\u8A00\u67E5\u770B\u6F14\u793A\u6548\u679C",-1),G=t("br",null,null,-1),H=t("div",null,[i(" 4\u3001 "),t("a",{href:"https://gitee.com/q7but",target:"_black"},"\u611F\u8C22@q7but"),i("\u3001 "),t("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add \u6DFB\u52A0\u81EA\u5B9A\u4E49 tagVIewName \u62D3\u5C55,\u652F\u6301\u56FD\u9645\u5316")],-1),O=i(" \u52A8\u6001\u8DEF\u7531\u4F20\u53C2 ");function q(u,s,F,g,e,d){const p=n("el-alert"),r=n("el-input"),c=n("SvgIcon"),o=n("el-button"),f=n("el-result");return N(),B("div",{class:"layout-view-bg-white flex",style:v({height:`calc(100vh - ${u.setViewHeight}`})},[t("div",k,[a(f,{icon:"warning",title:"\u52A8\u6001\u8DEF\u7531",subTitle:"\u53EF `\u5F00\u542F TagsView \u5171\u7528` \u8FDB\u884C\u5355\u6807\u7B7E\u6D4B\u8BD5"},{extra:l(()=>[a(p,{type:"success",closable:!1,class:"mb30"},{default:l(()=>[T,z,S,R,$,G,H]),_:1}),a(r,{modelValue:u.tagsViewName,"onUpdate:modelValue":s[0]||(s[0]=m=>u.tagsViewName=m),placeholder:"\u8BF7\u8F93\u5165tagsView \u540D\u79F0",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),a(r,{modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=m=>u.value=m),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570id\u503C",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),a(o,{type:"primary",size:"default",class:"mt15",onClick:u.onGoDetailsClick},{default:l(()=>[a(c,{name:"iconfont icon-dongtai"}),O]),_:1},8,["onClick"]),a(o,{type:"primary",size:"default",class:"mt15",onClick:u.onChangeI18n},{default:l(()=>[a(c,{name:"iconfont icon-fuhao-zhongwen"}),i(" "+A(u.tagsViewNameIsI18n?"\u666E\u901A\u7684\u6F14\u793A":"\u56FD\u9645\u5316\u6F14\u793A"),1)]),_:1},8,["onClick"])]),_:1})])],4)}var K=b(x,[["render",q]]);export{K as default};
