import{K as k,s as x,i as E,a2 as A,m as g,a5 as R,a as T,Z as e,S as o,a6 as n,o as $,b as d,Y as c,X as a}from"./vue.1659335117656.js";import{_ as z,d as O,E as S,e as N}from"./index.1659335117656.js";import V from"./addMenu.1659335117656.js";import I from"./editMenu.1659335117656.js";import"./index.16593351176565.js";import"./getStyleSheets.1659335117656.js";const L=k({name:"systemMenu",components:{AddMenu:V,EditMenu:I},setup(){const u=O(),{routesList:_}=x(u),i=E(),r=E(),m=A({}),f=g(()=>_.value);return{addMenuRef:i,editMenuRef:r,onOpenAddMenu:()=>{i.value.openDialog()},onOpenEditMenu:l=>{r.value.openDialog(l)},menuTableData:f,onTabelRowDel:l=>{S.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8DEF\u7531\uFF1A${l.path}, \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{N.success("\u5220\u9664\u6210\u529F")}).catch(()=>{})},...R(m)}}}),K={class:"system-menu-container"},X={class:"system-menu-search mb15"},Y=a(" \u67E5\u8BE2 "),Z=a(" \u65B0\u589E\u83DC\u5355 "),j={class:"ml10"},q=a("\u65B0\u589E"),G=a("\u4FEE\u6539"),H=a("\u5220\u9664");function J(u,_,i,r,m,f){const h=n("el-input"),w=n("ele-Search"),p=n("el-icon"),l=n("el-button"),C=n("ele-FolderAdd"),D=n("SvgIcon"),s=n("el-table-column"),F=n("el-tag"),b=n("el-table"),v=n("el-card"),M=n("AddMenu"),y=n("EditMenu");return $(),T("div",K,[e(v,{shadow:"hover"},{default:o(()=>[d("div",X,[e(h,{size:"default",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",style:{"max-width":"180px"}}),e(l,{size:"default",type:"primary",class:"ml10"},{default:o(()=>[e(p,null,{default:o(()=>[e(w)]),_:1}),Y]),_:1}),e(l,{size:"default",type:"success",class:"ml10",onClick:u.onOpenAddMenu},{default:o(()=>[e(p,null,{default:o(()=>[e(C)]),_:1}),Z]),_:1},8,["onClick"])]),e(b,{data:u.menuTableData,style:{width:"100%"},"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:o(()=>[e(s,{label:"\u83DC\u5355\u540D\u79F0","show-overflow-tooltip":""},{default:o(t=>[e(D,{name:t.row.meta.icon},null,8,["name"]),d("span",j,c(u.$t(t.row.meta.title)),1)]),_:1}),e(s,{prop:"path",label:"\u8DEF\u7531\u8DEF\u5F84","show-overflow-tooltip":""}),e(s,{label:"\u7EC4\u4EF6\u8DEF\u5F84","show-overflow-tooltip":""},{default:o(t=>[d("span",null,c(t.row.component),1)]),_:1}),e(s,{label:"\u6743\u9650\u6807\u8BC6","show-overflow-tooltip":""},{default:o(t=>[d("span",null,c(t.row.meta.roles),1)]),_:1}),e(s,{label:"\u6392\u5E8F","show-overflow-tooltip":"",width:"80"},{default:o(t=>[a(c(t.$index),1)]),_:1}),e(s,{label:"\u7C7B\u578B","show-overflow-tooltip":"",width:"80"},{default:o(t=>[e(F,{type:"success",size:"small"},{default:o(()=>[a(c(t.row.xx)+"\u83DC\u5355",1)]),_:2},1024)]),_:1}),e(s,{label:"\u64CD\u4F5C","show-overflow-tooltip":"",width:"140"},{default:o(t=>[e(l,{size:"small",text:"",type:"primary",onClick:u.onOpenAddMenu},{default:o(()=>[q]),_:1},8,["onClick"]),e(l,{size:"small",text:"",type:"primary",onClick:B=>u.onOpenEditMenu(t.row)},{default:o(()=>[G]),_:2},1032,["onClick"]),e(l,{size:"small",text:"",type:"primary",onClick:B=>u.onTabelRowDel(t.row)},{default:o(()=>[H]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(M,{ref:"addMenuRef"},null,512),e(y,{ref:"editMenuRef"},null,512)])}var te=z(L,[["render",J]]);export{te as default};
