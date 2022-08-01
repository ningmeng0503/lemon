import{_ as v}from"./index.1659334762309.js";import{K as x,a2 as A,a5 as S,a as B,Z as e,S as l,a6 as t,o as r,b as C,F as U,a9 as R,R as _,X as V}from"./vue.1659334762309.js";const $=x({name:"systemAddDic",setup(){const o=A({isShowDialog:!1,ruleForm:{dicName:"",fieldName:"",status:!0,list:[{id:Math.random(),label:"",value:""}],describe:"",fieldNameList:[]}}),a=()=>{o.isShowDialog=!0},i=()=>{o.isShowDialog=!1};return{openDialog:a,closeDialog:i,onCancel:()=>{i()},onSubmit:()=>{i()},onAddRow:()=>{o.ruleForm.list.push({id:Math.random(),label:"",value:""})},onDelRow:s=>{o.ruleForm.list.splice(s,1)},...S(o)}}}),z={class:"system-add-dic-container"},L=C("span",{class:"ml10"},"\u5B57\u6BB5",-1),M={class:"dialog-footer"},P=V("\u53D6 \u6D88"),K=V("\u65B0 \u589E");function T(o,a,i,g,D,w){const f=t("el-alert"),s=t("el-input"),d=t("el-form-item"),n=t("el-col"),h=t("el-switch"),y=t("ele-Plus"),F=t("el-icon"),c=t("el-button"),k=t("ele-Delete"),b=t("el-row"),E=t("el-form"),N=t("el-dialog");return r(),B("div",z,[e(N,{title:"\u65B0\u589E\u5B57\u5178",modelValue:o.isShowDialog,"onUpdate:modelValue":a[4]||(a[4]=u=>o.isShowDialog=u),width:"769px"},{footer:l(()=>[C("span",M,[e(c,{onClick:o.onCancel,size:"default"},{default:l(()=>[P]),_:1},8,["onClick"]),e(c,{type:"primary",onClick:o.onSubmit,size:"default"},{default:l(()=>[K]),_:1},8,["onClick"])])]),default:l(()=>[e(f,{title:"\u534A\u6210\u54C1\uFF0C\u4EA4\u4E92\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u81EA\u884C\u6269\u5C55\uFF01",type:"warning",closable:!1,class:"mb20"}),e(E,{model:o.ruleForm,size:"default","label-width":"90px"},{default:l(()=>[e(b,{gutter:35},{default:l(()=>[e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u5178\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:o.ruleForm.dicName,"onUpdate:modelValue":a[0]||(a[0]=u=>o.ruleForm.dicName=u),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u6BB5\u540D"},{default:l(()=>[e(s,{modelValue:o.ruleForm.fieldName,"onUpdate:modelValue":a[1]||(a[1]=u=>o.ruleForm.fieldName=u),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\uFF0C\u62FC\u63A5 ruleForm.list",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u5178\u72B6\u6001"},{default:l(()=>[e(h,{modelValue:o.ruleForm.status,"onUpdate:modelValue":a[2]||(a[2]=u=>o.ruleForm.status=u),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[(r(!0),B(U,null,R(o.ruleForm.list,(u,m)=>(r(),_(b,{gutter:35,key:m},{default:l(()=>[e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{prop:`list[${m}].label`},{label:l(()=>[m===0?(r(),_(c,{key:0,type:"primary",circle:"",size:"small",onClick:o.onAddRow},{default:l(()=>[e(F,null,{default:l(()=>[e(y)]),_:1})]),_:1},8,["onClick"])):(r(),_(c,{key:1,type:"danger",circle:"",size:"small",onClick:p=>o.onDelRow(m)},{default:l(()=>[e(F,null,{default:l(()=>[e(k)]),_:1})]),_:2},1032,["onClick"])),L]),default:l(()=>[e(s,{modelValue:u.label,"onUpdate:modelValue":p=>u.label=p,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{label:"\u5C5E\u6027",prop:`list[${m}].value`},{default:l(()=>[e(s,{modelValue:u.value,"onUpdate:modelValue":p=>u.value=p,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u503C"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u5178\u63CF\u8FF0"},{default:l(()=>[e(s,{modelValue:o.ruleForm.describe,"onUpdate:modelValue":a[3]||(a[3]=u=>o.ruleForm.describe=u),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}var j=v($,[["render",T]]);export{j as default};
