import{K as _,s as h,a2 as f,aI as V,m as C,a5 as B,a as D,b as t,Z as s,S as l,O as E,a6 as n,o as v,X as i,Y as N}from"./vue.1659335834265.js";import{_ as b,b as A,u as I}from"./index.1659335834265.js";const y=_({name:"paramsCommon",setup(){const u=A(),o=I(),{themeConfig:d}=h(o),{isTagsViewCurrenFull:g}=h(u),e=f({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),p=V();return{setViewHeight:C(()=>{let{isTagsview:a}=d.value;return g.value?"30px":a?"114px":"80px"}),onGoDetailsClick:()=>{const a={id:e.value};e.tagsViewName&&(a.tagsViewName=e.tagsViewName),p.push({path:"/params/common/details",query:a}),e.value=""},onChangeI18n:()=>{e.tagsViewNameIsI18n=!e.tagsViewNameIsI18n,e.tagsViewNameIsI18n?e.tagsViewName=JSON.stringify({"zh-cn":"\u6D4B\u8BD5\u7528",en:"test page","zh-tw":"\u6E2C\u8A66\u7528"}):e.tagsViewName="\u6211\u662F\u666E\u901A\u8DEF\u7531\u6D4B\u8BD5tagsViewName(\u975E\u56FD\u9645\u5316)"},...B(e)}}}),k={class:"flex-margin",style:{width:"400px"}},x=t("div",null,"1\u3001\u8BBE\u7F6E\u975E\u56FD\u9645\u5316\uFF1A\u683C\u5F0F\uFF1AtagsViewName=xxx",-1),T=t("br",null,null,-1),z=t("div",null,'2\u3001\u8BBE\u7F6E\u56FD\u9645\u5316\uFF1A\u683C\u5F0F\uFF1AtagsViewName=JSON.stringify({"zh-cn":"\u6D4B\u8BD5\u7528","en":"test+page","zh-tw":"\u6E2C\u8A66\u7528"})',-1),S=t("br",null,null,-1),R=t("div",null,"3\u3001\u8BBE\u7F6E\u56FD\u9645\u5316\u540E\uFF0C\u53BB\u9876\u680F\u5207\u6362\u8BED\u8A00\u67E5\u770B\u6F14\u793A\u6548\u679C",-1),$=t("br",null,null,-1),q=t("div",null,[i(" 4\u3001 "),t("a",{href:"https://gitee.com/q7but",target:"_black"},"\u611F\u8C22@q7but"),i("\u3001 "),t("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add \u6DFB\u52A0\u81EA\u5B9A\u4E49 tagVIewName \u62D3\u5C55,\u652F\u6301\u56FD\u9645\u5316")],-1),G=i(" \u666E\u901A\u8DEF\u7531\u4F20\u53C2 ");function H(u,o,d,g,e,p){const F=n("el-alert"),c=n("el-input"),r=n("SvgIcon"),a=n("el-button"),w=n("el-result");return v(),D("div",{class:"layout-view-bg-white flex",style:E({height:`calc(100vh - ${u.setViewHeight}`})},[t("div",k,[s(w,{icon:"success",title:"\u666E\u901A\u8DEF\u7531",subTitle:"\u53EF `\u5F00\u542F TagsView \u5171\u7528` \u8FDB\u884C\u5355\u6807\u7B7E\u6D4B\u8BD5"},{extra:l(()=>[s(F,{type:"success",closable:!1,class:"mb30"},{default:l(()=>[x,T,z,S,R,$,q]),_:1}),s(c,{modelValue:u.tagsViewName,"onUpdate:modelValue":o[0]||(o[0]=m=>u.tagsViewName=m),placeholder:"\u8BF7\u8F93\u5165tagsView \u540D\u79F0",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),s(c,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=m=>u.value=m),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570 id \u503C",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),s(a,{type:"primary",size:"default",class:"mt15",onClick:u.onGoDetailsClick},{default:l(()=>[s(r,{name:"iconfont icon-putong"}),G]),_:1},8,["onClick"]),s(a,{type:"primary",size:"default",class:"mt15",onClick:u.onChangeI18n},{default:l(()=>[s(r,{name:"iconfont icon-fuhao-zhongwen"}),i(" "+N(u.tagsViewNameIsI18n?"\u666E\u901A\u7684\u6F14\u793A":"\u56FD\u9645\u5316\u6F14\u793A"),1)]),_:1},8,["onClick"])]),_:1})])],4)}var U=b(y,[["render",H]]);export{U as default};
