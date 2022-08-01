import{_ as $,e as i}from"./index.1659334396074.js";import{K as x,i as N,a2 as T,a5 as z,R as r,S as a,a6 as l,o,Z as d,a as c,a9 as m,W as _,b as s,Y as S,F as C,X as w}from"./vue.1659334396074.js";const K=x({name:"pagesTableRules",setup(){const t=N(),p=T({tableData:{data:[],header:[{prop:"a1",width:"",label:"\u4E00\u7EA7\u5206\u7C7B",isRequired:!0,type:"select"},{prop:"a2",width:"",label:"\u4E8C\u7EA7\u5206\u7C7B",isRequired:!0,type:"select"},{prop:"a3",width:"",label:"\u4E09\u7EA7\u5206\u7C7B",isRequired:!0,type:"select"},{prop:"a4",width:"",label:"\u56DB\u7EA7\u5206\u7C7B",isRequired:!0,type:"date"},{prop:"a5",width:"",label:"\u4E94\u7EA7\u5206\u7C7B",isRequired:!0,type:"input"},{prop:"a6",width:"",label:"\u516D\u7EA7\u5206\u7C7B",isTooltip:!0,type:"dialog"},{prop:"a7",width:"",label:"\u6F14\u793A\u7EA7\u5206\u7C7B",type:"input"},{prop:"a8",width:"",label:"\u989C\u8272\u662F\u5206\u7C7B",type:"input"}],option:[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"}]}});return{onValidate:()=>{if(p.tableData.data.length<=0)return i.warning("\u8BF7\u5148\u70B9\u51FB\u589E\u52A0\u4E00\u884C");t.value.validate(f=>{if(!f)return i.warning("\u8868\u683C\u9879\u5FC5\u586B\u672A\u586B");i.success("\u5168\u90E8\u9A8C\u8BC1\u901A\u8FC7")})},onAddRow:()=>{p.tableData.data.push({a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:""})},tableRulesRef:t,...z(p)}}}),L={key:0,class:"color-danger"},M={class:"pl5"},W=s("i",{class:"iconfont icon-quanxian"},null,-1),X=s("i",{class:"iconfont icon-shouye_dongtaihui"},null,-1),Y={class:"flex-margin"},Z=w("\u8868\u683C\u9A8C\u8BC1"),j=w("\u65B0\u589E\u4E00\u884C");function G(t,p,B,y,f,H){const E=l("el-tooltip"),V=l("el-option"),A=l("el-select"),k=l("el-date-picker"),b=l("el-input"),F=l("el-form-item"),R=l("el-table-column"),g=l("el-table"),D=l("el-form"),h=l("el-button"),v=l("el-row"),q=l("el-card");return o(),r(q,{shadow:"hover",header:"\u8868\u5355\u8868\u683C\u9A8C\u8BC1"},{default:a(()=>[d(D,{ref:"tableRulesRef",model:t.tableData,size:"default"},{default:a(()=>[d(g,{data:t.tableData.data,border:"",class:"module-table-uncollected"},{default:a(()=>[(o(!0),c(C,null,m(t.tableData.header,(e,U)=>(o(),r(R,{key:U,"show-overflow-tooltip":"",prop:e.prop,width:e.width,label:e.label},{header:a(()=>[e.isRequired?(o(),c("span",L,"*")):_("",!0),s("span",M,S(e.label),1),e.isTooltip?(o(),r(E,{key:1,effect:"dark",content:"\u8FD9\u662Ftooltip",placement:"top"},{default:a(()=>[W]),_:1})):_("",!0)]),default:a(n=>[d(F,{prop:`data.${n.$index}.${e.prop}`,rules:[{required:e.isRequired,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:`${e.type}`=="input"?"blur":"change"}]},{default:a(()=>[e.type==="select"?(o(),r(A,{key:0,modelValue:n.row[e.prop],"onUpdate:modelValue":u=>n.row[e.prop]=u,placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(o(!0),c(C,null,m(t.tableData.option,u=>(o(),r(V,{key:u.id,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):e.type==="date"?(o(),r(k,{key:1,modelValue:n.row[e.prop],"onUpdate:modelValue":u=>n.row[e.prop]=u,type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):e.type==="input"?(o(),r(b,{key:2,modelValue:n.row[e.prop],"onUpdate:modelValue":u=>n.row[e.prop]=u,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue","onUpdate:modelValue"])):e.type==="dialog"?(o(),r(b,{key:3,modelValue:n.row[e.prop],"onUpdate:modelValue":u=>n.row[e.prop]=u,readonly:"",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},{suffix:a(()=>[X]),_:2},1032,["modelValue","onUpdate:modelValue"])):_("",!0)]),_:2},1032,["prop","rules"])]),_:2},1032,["prop","width","label"]))),128))]),_:1},8,["data"])]),_:1},8,["model"]),d(v,{class:"flex mt15"},{default:a(()=>[s("div",Y,[d(h,{size:"default",type:"success",onClick:t.onValidate},{default:a(()=>[Z]),_:1},8,["onClick"]),d(h,{size:"default",type:"primary",onClick:t.onAddRow},{default:a(()=>[j]),_:1},8,["onClick"])])]),_:1})]),_:1})}var O=$(K,[["render",G]]);export{O as default};
