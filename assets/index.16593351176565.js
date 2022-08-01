import{i as F}from"./getStyleSheets.1659335117656.js";import{_ as $}from"./index.1659335117656.js";import{K as z,i as B,a2 as T,m as W,l as _,j as R,a5 as O,n as D,a6 as c,o as s,a as S,Z as w,S as d,R as v,M as I,b as i,Y as M,W as V,F as N,a9 as j}from"./vue.1659335117656.js";const K=z({name:"iconSelector",emits:["update:modelValue","get","clear"],props:{prepend:{type:String,default:()=>"ele-Pointer"},placeholder:{type:String,default:()=>"\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"},size:{type:String,default:()=>"default"},title:{type:String,default:()=>"\u8BF7\u9009\u62E9\u56FE\u6807"},type:{type:String,default:()=>"ele"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"\u65E0\u76F8\u5173\u56FE\u6807"},modelValue:String},setup(e,{emit:l}){const p=B(),k=B(),o=T({fontIconPrefix:"",fontIconWidth:0,fontIconSearch:"",fontIconTabsIndex:0,fontIconSheetsList:[],fontIconPlaceholder:"",fontIconType:"ali",fontIconShow:!0}),b=()=>{if(!e.modelValue)return!1;o.fontIconSearch="",o.fontIconPlaceholder=e.modelValue},h=()=>{setTimeout(()=>{o.fontIconSheetsList.filter(a=>a===o.fontIconSearch).length<=0&&(o.fontIconSearch="")},300)},r=()=>{if(e.modelValue==="")return o.fontIconPlaceholder=e.placeholder;o.fontIconPlaceholder=e.modelValue,o.fontIconPrefix=e.modelValue},g=()=>{var t,a,u;((t=e.modelValue)==null?void 0:t.indexOf("iconfont"))>-1?n("ali"):((a=e.modelValue)==null?void 0:a.indexOf("ele-"))>-1?n("ele"):((u=e.modelValue)==null?void 0:u.indexOf("fa"))>-1?n("awe"):n("ali")},P=W(()=>{if(!o.fontIconSearch)return o.fontIconSheetsList;let t=o.fontIconSearch.trim().toLowerCase();return o.fontIconSheetsList.filter(a=>{if(a.toLowerCase().indexOf(t)!==-1)return a})}),m=()=>{D(()=>{p.value&&p.value.$el&&(o.fontIconWidth=p.value.$el.offsetWidth)})},y=()=>{window.addEventListener("resize",()=>{m()})},C=async t=>{o.fontIconSheetsList=[],t==="ali"?await F.ali().then(a=>{o.fontIconSheetsList=a.map(u=>`iconfont ${u}`)}):t==="ele"?await F.ele().then(a=>{o.fontIconSheetsList=a}):t==="awe"&&await F.awe().then(a=>{o.fontIconSheetsList=a.map(u=>`fa ${u}`)}),o.fontIconPlaceholder=e.placeholder,r()},n=t=>{o.fontIconType=t,C(t)},f=t=>{o.fontIconPlaceholder=t,o.fontIconPrefix=t,l("get",o.fontIconPrefix),l("update:modelValue",o.fontIconPrefix)},L=()=>{o.fontIconPrefix="",l("clear",o.fontIconPrefix),l("update:modelValue",o.fontIconPrefix)},E=()=>{r(),g()};return _(()=>{r(),y(),m()}),R(()=>e.modelValue,()=>{r()}),{inputWidthRef:p,selectorScrollbarRef:k,fontIconSheetsFilterList:P,onColClick:f,onIconChange:n,onClearFontIcon:L,onIconFocus:b,onIconBlur:h,onPopoverShow:E,...O(o)}}}),U={class:"icon-selector w100 h100"},Y={class:"icon-selector-warp"},Z={class:"icon-selector-warp-title flex"},q={class:"flex-auto"},A={key:0,class:"icon-selector-warp-title-tab"},G={class:"icon-selector-warp-row"},H={class:"flex-margin"},J={class:"icon-selector-warp-item-value"};function Q(e,l,p,k,o,b){const h=c("SvgIcon"),r=c("el-input"),g=c("el-col"),P=c("el-row"),m=c("el-empty"),y=c("el-scrollbar"),C=c("el-popover");return s(),S("div",U,[w(C,{placement:"bottom",width:e.fontIconWidth,trigger:"click",transition:"el-zoom-in-top","popper-class":"icon-selector-popper",onShow:e.onPopoverShow},{reference:d(()=>[w(r,{modelValue:e.fontIconSearch,"onUpdate:modelValue":l[0]||(l[0]=n=>e.fontIconSearch=n),placeholder:e.fontIconPlaceholder,clearable:e.clearable,disabled:e.disabled,size:e.size,ref:"inputWidthRef",onClear:e.onClearFontIcon,onFocus:e.onIconFocus,onBlur:e.onIconBlur},{prepend:d(()=>{var n,f;return[(e.fontIconPrefix===""?((n=e.prepend)==null?void 0:n.indexOf("ele-"))>-1:((f=e.fontIconPrefix)==null?void 0:f.indexOf("ele-"))>-1)?(s(),v(h,{key:0,name:e.fontIconPrefix===""?e.prepend:e.fontIconPrefix,class:"font14"},null,8,["name"])):(s(),S("i",{key:1,class:I([e.fontIconPrefix===""?e.prepend:e.fontIconPrefix,"font14"])},null,2))]}),_:1},8,["modelValue","placeholder","clearable","disabled","size","onClear","onFocus","onBlur"])]),default:d(()=>[i("div",Y,[i("div",Z,[i("div",q,M(e.title),1),e.type==="all"?(s(),S("div",A,[i("span",{class:I([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:l[1]||(l[1]=n=>e.onIconChange("ali")),title:"iconfont \u56FE\u6807"},"ali",2),i("span",{class:I([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:l[2]||(l[2]=n=>e.onIconChange("ele")),title:"elementPlus \u56FE\u6807"},"ele",2),i("span",{class:I([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:l[3]||(l[3]=n=>e.onIconChange("awe")),title:"fontawesome \u56FE\u6807"},"awe",2)])):V("",!0)]),i("div",G,[w(y,{ref:"selectorScrollbarRef"},{default:d(()=>[e.fontIconSheetsFilterList.length>0?(s(),v(P,{key:0,gutter:10},{default:d(()=>[(s(!0),S(N,null,j(e.fontIconSheetsFilterList,(n,f)=>(s(),v(g,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:L=>e.onColClick(n),key:f},{default:d(()=>[i("div",{class:I(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===n}])},[i("div",H,[i("div",J,[w(h,{name:n},null,8,["name"])])])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):V("",!0),e.fontIconSheetsFilterList.length<=0?(s(),v(m,{key:1,"image-size":100,description:e.emptyDescription},null,8,["description"])):V("",!0)]),_:1},512)])])]),_:1},8,["width","onShow"])])}var oe=$(K,[["render",Q]]);export{oe as I};
