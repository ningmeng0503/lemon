import{_ as d}from"./index.1659364195415.js";import{K as m,a2 as B,a5 as C,a as f,Z as e,S as o,a6 as s,o as u,R as a,W as v,X as A}from"./vue.1659364195415.js";const D=m({name:"pagesSteps",setup(){const t=B({stepsActive:1});return{onNextSteps:()=>{t.stepsActive++>2&&(t.stepsActive=1)},...C(t)}}}),F={class:"steps-container"},E=A(" \u4E0B\u4E00\u6B65 ");function k(t,l,h,S,N,b){const n=s("SvgIcon"),c=s("el-step"),r=s("el-steps"),i=s("el-result"),p=s("el-button"),_=s("el-card");return u(),f("div",F,[e(_,{shadow:"hover",header:"element-plus \u6B65\u9AA4\u6761"},{default:o(()=>[e(r,{active:t.stepsActive},{default:o(()=>[e(c,{title:"\u7B2C\u4E00\u6B65"},{icon:o(()=>[e(n,{name:"iconfont icon-0_round_solid",size:20})]),_:1}),e(c,{title:"\u7B2C\u4E8C\u6B65"},{icon:o(()=>[e(n,{name:"iconfont icon-2_round_solid",size:20})]),_:1}),e(c,{title:"\u7B2C\u4E09\u6B65"},{icon:o(()=>[e(n,{name:"iconfont icon-3_round_solid",size:20})]),_:1})]),_:1},8,["active"]),t.stepsActive===1?(u(),a(i,{key:0,icon:"success",title:"\u6210\u529F\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"})):t.stepsActive===2?(u(),a(i,{key:1,icon:"warning",title:"\u8B66\u544A\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"})):t.stepsActive===3?(u(),a(i,{key:2,icon:"error",title:"\u9519\u8BEF\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"})):v("",!0),e(p,{onClick:t.onNextSteps,size:"default",class:"mt15",type:"primary"},{default:o(()=>[e(n,{name:"iconfont icon-step"}),E]),_:1},8,["onClick"])]),_:1})])}var x=d(D,[["render",k]]);export{x as default};
