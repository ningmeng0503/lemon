import{K as I,s as T,a2 as v,l as M,a5 as x,a as b,Z as e,S as l,a6 as n,o as p,b as A,Y as B,W as _,F as k,R as K,X as r}from"./vue.1659336560720.js";import{_ as N,d as R,i as $}from"./index.1659336560720.js";import{I as z}from"./index.16593365607205.js";import"./getStyleSheets.1659336560720.js";const H=I({name:"systemAddMenu",components:{IconSelector:z},setup(){const u=R(),{routesList:o}=T(u),f=v({isShowDialog:!1,ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[]}),V=s=>{const i=[];return s.map(d=>{d.title=$.global.t(d.meta.title),d.id=Math.random(),i.push({...d}),d.children&&V(d.children)}),i},c=()=>{f.isShowDialog=!0},F=()=>{f.isShowDialog=!1},D=()=>{f.ruleForm.meta.isIframe?f.ruleForm.isLink=!0:f.ruleForm.isLink=!1},t=()=>{F()},m=()=>{F()};return M(()=>{f.menuData=V(o.value)}),{openDialog:c,closeDialog:F,onSelectIframeChange:D,onCancel:t,onSubmit:m,...x(f)}}}),P={class:"system-add-menu-container"},W={key:0},X=r("\u83DC\u5355"),Y=r("\u6309\u94AE"),Z=r("\u9690\u85CF"),j=r("\u4E0D\u9690\u85CF"),q=r("\u7F13\u5B58"),G=r("\u4E0D\u7F13\u5B58"),J=r("\u56FA\u5B9A"),O=r("\u4E0D\u56FA\u5B9A"),Q=r("\u662F"),ee=r("\u5426"),le=r("\u662F"),ue=r("\u5426"),oe={class:"dialog-footer"},ae=r("\u53D6 \u6D88"),te=r("\u65B0 \u589E");function me(u,o,f,V,c,F){const D=n("el-cascader"),t=n("el-form-item"),m=n("el-col"),s=n("el-radio"),i=n("el-radio-group"),d=n("el-input"),S=n("IconSelector"),g=n("el-option"),h=n("el-select"),U=n("el-input-number"),y=n("el-row"),w=n("el-form"),C=n("el-button"),L=n("el-dialog");return p(),b("div",P,[e(L,{title:"\u65B0\u589E\u83DC\u5355",modelValue:u.isShowDialog,"onUpdate:modelValue":o[17]||(o[17]=a=>u.isShowDialog=a),width:"769px"},{footer:l(()=>[A("span",oe,[e(C,{onClick:u.onCancel,size:"default"},{default:l(()=>[ae]),_:1},8,["onClick"]),e(C,{type:"primary",onClick:u.onSubmit,size:"default"},{default:l(()=>[te]),_:1},8,["onClick"])])]),default:l(()=>[e(w,{model:u.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(y,{gutter:35},{default:l(()=>[e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(t,{label:"\u4E0A\u7EA7\u83DC\u5355"},{default:l(()=>[e(D,{options:u.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u83DC\u5355",clearable:"",class:"w100",modelValue:u.ruleForm.menuSuperior,"onUpdate:modelValue":o[0]||(o[0]=a=>u.ruleForm.menuSuperior=a)},{default:l(({node:a,data:E})=>[A("span",null,B(E.title),1),a.isLeaf?_("",!0):(p(),b("span",W," ("+B(E.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(t,{label:"\u83DC\u5355\u7C7B\u578B"},{default:l(()=>[e(i,{modelValue:u.ruleForm.menuType,"onUpdate:modelValue":o[1]||(o[1]=a=>u.ruleForm.menuType=a)},{default:l(()=>[e(s,{label:"menu"},{default:l(()=>[X]),_:1}),e(s,{label:"btn"},{default:l(()=>[Y]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u83DC\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:u.ruleForm.meta.title,"onUpdate:modelValue":o[2]||(o[2]=a=>u.ruleForm.meta.title=a),placeholder:"\u683C\u5F0F\uFF1Amessage.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),u.ruleForm.menuType==="menu"?(p(),b(k,{key:0},[e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u8DEF\u7531\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:u.ruleForm.name,"onUpdate:modelValue":o[3]||(o[3]=a=>u.ruleForm.name=a),placeholder:"\u8DEF\u7531\u4E2D\u7684 name \u503C",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u8DEF\u7531\u8DEF\u5F84"},{default:l(()=>[e(d,{modelValue:u.ruleForm.path,"onUpdate:modelValue":o[4]||(o[4]=a=>u.ruleForm.path=a),placeholder:"\u8DEF\u7531\u4E2D\u7684 path \u503C",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u91CD\u5B9A\u5411"},{default:l(()=>[e(d,{modelValue:u.ruleForm.redirect,"onUpdate:modelValue":o[5]||(o[5]=a=>u.ruleForm.redirect=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u91CD\u5B9A\u5411",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u83DC\u5355\u56FE\u6807"},{default:l(()=>[e(S,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u56FE\u6807",modelValue:u.ruleForm.meta.icon,"onUpdate:modelValue":o[6]||(o[6]=a=>u.ruleForm.meta.icon=a),type:"all"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u7EC4\u4EF6\u8DEF\u5F84"},{default:l(()=>[e(d,{modelValue:u.ruleForm.component,"onUpdate:modelValue":o[7]||(o[7]=a=>u.ruleForm.component=a),placeholder:"\u7EC4\u4EF6\u8DEF\u5F84",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u94FE\u63A5\u5730\u5740"},{default:l(()=>[e(d,{modelValue:u.ruleForm.meta.isLink,"onUpdate:modelValue":o[8]||(o[8]=a=>u.ruleForm.meta.isLink=a),placeholder:"\u5916\u94FE/\u5185\u5D4C\u65F6\u94FE\u63A5\u5730\u5740\uFF08http:xxx.com\uFF09",clearable:"",disabled:!u.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u6743\u9650\u6807\u8BC6"},{default:l(()=>[e(h,{modelValue:u.ruleForm.meta.roles,"onUpdate:modelValue":o[9]||(o[9]=a=>u.ruleForm.meta.roles=a),multiple:"",placeholder:"\u53D6\u89D2\u8272\u7BA1\u7406",clearable:"",class:"w100"},{default:l(()=>[e(g,{label:"admin",value:"admin"}),e(g,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):_("",!0),u.ruleForm.menuType==="btn"?(p(),K(m,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u6743\u9650\u6807\u8BC6"},{default:l(()=>[e(d,{modelValue:u.ruleForm.btnPower,"onUpdate:modelValue":o[10]||(o[10]=a=>u.ruleForm.btnPower=a),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u6807\u8BC6",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u83DC\u5355\u6392\u5E8F"},{default:l(()=>[e(U,{modelValue:u.ruleForm.menuSort,"onUpdate:modelValue":o[11]||(o[11]=a=>u.ruleForm.menuSort=a),"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),u.ruleForm.menuType==="menu"?(p(),b(k,{key:2},[e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u662F\u5426\u9690\u85CF"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isHide,"onUpdate:modelValue":o[12]||(o[12]=a=>u.ruleForm.meta.isHide=a)},{default:l(()=>[e(s,{label:!0},{default:l(()=>[Z]),_:1}),e(s,{label:!1},{default:l(()=>[j]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u9875\u9762\u7F13\u5B58"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":o[13]||(o[13]=a=>u.ruleForm.meta.isKeepAlive=a)},{default:l(()=>[e(s,{label:!0},{default:l(()=>[q]),_:1}),e(s,{label:!1},{default:l(()=>[G]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u662F\u5426\u56FA\u5B9A"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isAffix,"onUpdate:modelValue":o[14]||(o[14]=a=>u.ruleForm.meta.isAffix=a)},{default:l(()=>[e(s,{label:!0},{default:l(()=>[J]),_:1}),e(s,{label:!1},{default:l(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u662F\u5426\u5916\u94FE"},{default:l(()=>[e(i,{modelValue:u.ruleForm.isLink,"onUpdate:modelValue":o[15]||(o[15]=a=>u.ruleForm.isLink=a),disabled:u.ruleForm.meta.isIframe},{default:l(()=>[e(s,{label:!0},{default:l(()=>[Q]),_:1}),e(s,{label:!1},{default:l(()=>[ee]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(t,{label:"\u662F\u5426\u5185\u5D4C"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isIframe,"onUpdate:modelValue":o[16]||(o[16]=a=>u.ruleForm.meta.isIframe=a),onChange:u.onSelectIframeChange},{default:l(()=>[e(s,{label:!0},{default:l(()=>[le]),_:1}),e(s,{label:!1},{default:l(()=>[ue]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})],64)):_("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}var ie=N(H,[["render",me]]);export{ie as default};
