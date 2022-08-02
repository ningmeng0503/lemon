import{_ as p}from"./index.1659364195415.js";import{K as f,a2 as i,a5 as F,a as E,Z as e,S as l,a6 as a,o as c}from"./vue.1659364195415.js";const _=f({name:"pagesFormRulesThree",setup(){const u=i({form:{createUser:"",editUser:"",user:"",department:""},rules:{createUser:{required:!0,message:"\u8BF7\u8F93\u5165\u521B\u5EFA\u7528\u6237",trigger:"blur"},editUser:{required:!0,message:"\u8BF7\u8F93\u5165\u4FEE\u6539\u7528\u6237",trigger:"blur"},user:{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7528\u6237",trigger:"blur"},department:{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8",trigger:"blur"}}});return{...F(u)}}}),g={class:"form-rules-three-container"};function b(u,r,U,B,V,C){const s=a("el-input"),t=a("el-form-item"),m=a("el-col"),d=a("el-row"),n=a("el-form");return c(),E("div",g,[e(n,{model:u.form,rules:u.rules,ref:"formRulesThreeRef",size:"default","label-width":"100px",class:"mt35"},{default:l(()=>[e(d,{gutter:35},{default:l(()=>[e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(t,{label:"\u521B\u5EFA\u7528\u6237",prop:"createUser"},{default:l(()=>[e(s,{modelValue:u.form.createUser,"onUpdate:modelValue":r[0]||(r[0]=o=>u.form.createUser=o),placeholder:"\u8BF7\u8F93\u5165\u521B\u5EFA\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(t,{label:"\u4FEE\u6539\u7528\u6237",prop:"editUser"},{default:l(()=>[e(s,{modelValue:u.form.editUser,"onUpdate:modelValue":r[1]||(r[1]=o=>u.form.editUser=o),placeholder:"\u8BF7\u8F93\u5165\u4FEE\u6539\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(t,{label:"\u6240\u5C5E\u7528\u6237",prop:"user"},{default:l(()=>[e(s,{modelValue:u.form.user,"onUpdate:modelValue":r[2]||(r[2]=o=>u.form.user=o),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:l(()=>[e(t,{label:"\u6240\u5C5E\u90E8\u95E8",prop:"department"},{default:l(()=>[e(s,{modelValue:u.form.department,"onUpdate:modelValue":r[3]||(r[3]=o=>u.form.department=o),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}var q=p(_,[["render",b]]);export{q as default};
