import{_ as E}from"./index.1659414232212.js";import{K as B,a2 as i,a5 as _,a as c,Z as l,S as e,a6 as s,o as g,X as h}from"./vue.1659414232212.js";const A=B({name:"pagesFormAdapt",setup(){const u=i({form:{name:"",email:"",autograph:"",occupation:"",phone:"",sex:"",phone1:"",phone2:"",phone3:"",phone4:"",phone5:"",phone6:""}});return{..._(u)}}}),C={class:"form-adapt-container"},v=h(" \u66F4\u65B0\u4E2A\u4EBA\u4FE1\u606F ");function D(u,o,U,x,w,$){const n=s("el-input"),m=s("el-form-item"),d=s("el-col"),t=s("el-option"),r=s("el-select"),p=s("SvgIcon"),f=s("el-button"),b=s("el-row"),F=s("el-form"),V=s("el-card");return g(),c("div",C,[l(V,{shadow:"hover",header:"\u8868\u5355\u81EA\u9002\u5E94\u6F14\u793A(\u6539\u53D8\u7A97\u53E3\u67E5\u770B\u6548\u679C)"},{default:e(()=>[l(F,{model:u.form,size:"default","label-width":"100px",class:"mt35 mb35"},{default:e(()=>[l(b,{gutter:35},{default:e(()=>[l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u59D3\u540D"},{default:e(()=>[l(n,{modelValue:u.form.name,"onUpdate:modelValue":o[0]||(o[0]=a=>u.form.name=a),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u7528\u6237\u5F52\u5C5E\u90E8\u95E8"},{default:e(()=>[l(n,{modelValue:u.form.email,"onUpdate:modelValue":o[1]||(o[1]=a=>u.form.email=a),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5F52\u5C5E\u90E8\u95E8",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u767B\u9646\u8D26\u6237\u540D"},{default:e(()=>[l(n,{modelValue:u.form.autograph,"onUpdate:modelValue":o[2]||(o[2]=a=>u.form.autograph=a),placeholder:"\u8BF7\u8F93\u5165\u767B\u9646\u8D26\u6237\u540D",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u804C\u52A1"},{default:e(()=>[l(r,{modelValue:u.form.occupation,"onUpdate:modelValue":o[3]||(o[3]=a=>u.form.occupation=a),placeholder:"\u8BF7\u9009\u62E9\u804C\u52A1",clearable:"",class:"w100"},{default:e(()=>[l(t,{label:"\u8BA1\u7B97\u673A / \u4E92\u8054\u7F51 / \u901A\u4FE1",value:"1"}),l(t,{label:"\u751F\u4EA7 / \u5DE5\u827A / \u5236\u9020",value:"2"}),l(t,{label:"\u533B\u7597 / \u62A4\u7406 / \u5236\u836F",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u624B\u673A"},{default:e(()=>[l(n,{modelValue:u.form.phone,"onUpdate:modelValue":o[4]||(o[4]=a=>u.form.phone=a),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u6027\u522B"},{default:e(()=>[l(r,{modelValue:u.form.sex,"onUpdate:modelValue":o[5]||(o[5]=a=>u.form.sex=a),placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",clearable:"",class:"w100"},{default:e(()=>[l(t,{label:"\u7537",value:"1"}),l(t,{label:"\u5973",value:"2"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u767B\u5F55\u5BC6\u7801"},{default:e(()=>[l(n,{modelValue:u.form.phone1,"onUpdate:modelValue":o[6]||(o[6]=a=>u.form.phone1=a),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u6743\u9650\u89D2\u8272"},{default:e(()=>[l(n,{modelValue:u.form.phone2,"onUpdate:modelValue":o[7]||(o[7]=a=>u.form.phone2=a),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u89D2\u8272",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u521B\u5EFA\u7528\u6237"},{default:e(()=>[l(n,{modelValue:u.form.phone3,"onUpdate:modelValue":o[8]||(o[8]=a=>u.form.phone3=a),placeholder:"\u8BF7\u8F93\u5165\u521B\u5EFA\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u4FEE\u6539\u7528\u6237"},{default:e(()=>[l(n,{modelValue:u.form.phone4,"onUpdate:modelValue":o[9]||(o[9]=a=>u.form.phone4=a),placeholder:"\u8BF7\u8F93\u5165\u4FEE\u6539\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u6240\u5C5E\u7528\u6237"},{default:e(()=>[l(n,{modelValue:u.form.phone5,"onUpdate:modelValue":o[10]||(o[10]=a=>u.form.phone5=a),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:e(()=>[l(m,{label:"\u6240\u5C5E\u90E8\u95E8"},{default:e(()=>[l(n,{modelValue:u.form.phone6,"onUpdate:modelValue":o[11]||(o[11]=a=>u.form.phone6=a),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{xs:24,sm:24,md:24,lg:24,xl:24},{default:e(()=>[l(m,null,{default:e(()=>[l(f,{type:"primary"},{default:e(()=>[l(p,{name:"iconfont icon-biaodan"}),v]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}var y=E(A,[["render",D]]);export{y as default};
