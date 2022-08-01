import{K as y,i as d,a2 as g,l as v,a5 as b,n as k,a6 as w,T as S,U as W,o,a as n,b as f,M as x,W as m,Y as T,L as _,R as $,O as u}from"./vue.1659364195415.js";import{_ as B}from"./index.1659364195415.js";const I=y({name:"noticeBar",props:{mode:{type:String,default:()=>""},text:{type:String,default:()=>""},color:{type:String,default:()=>"var(--el-color-warning)"},background:{type:String,default:()=>"var(--el-color-warning-light-9)"},size:{type:[Number,String],default:()=>14},height:{type:Number,default:()=>40},delay:{type:Number,default:()=>1},speed:{type:Number,default:()=>100},scrollable:{type:Boolean,default:()=>!1},leftIcon:{type:String,default:()=>""},rightIcon:{type:String,default:()=>""}},setup(e,{emit:i}){const s=d(),a=d(),t=g({order:1,oneTime:0,twoTime:0,warpOWidth:0,textOWidth:0,isMode:!1}),l=()=>{k(()=>{t.warpOWidth=s.value.offsetWidth,t.textOWidth=a.value.offsetWidth,document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${t.textOWidth}px;}}`),document.styleSheets[0].insertRule(`@keyframes twoAnimation {0% {left: ${t.warpOWidth}px;} 100% {left: -${t.textOWidth}px;}}`),r(),setTimeout(()=>{c()},e.delay*1e3)})},r=()=>{t.oneTime=t.textOWidth/e.speed,t.twoTime=(t.textOWidth+t.warpOWidth)/e.speed},c=()=>{t.order===1?(a.value.style.cssText=`animation: oneAnimation ${t.oneTime}s linear; opactity: 1;}`,t.order=2):a.value.style.cssText=`animation: twoAnimation ${t.twoTime}s linear infinite; opacity: 1;`},p=()=>{a.value.addEventListener("animationend",()=>{c()},!1)},h=()=>{if(!e.mode)return!1;e.mode==="closeable"?(t.isMode=!0,i("close")):e.mode==="link"&&i("link")};return v(()=>{if(e.scrollable)return!1;l(),p()}),{noticeBarWarpRef:s,noticeBarTextRef:a,onRightIconClick:h,...b(t)}}}),O={class:"notice-bar-warp-text-box",ref:"noticeBarWarpRef"},R={key:1,class:"notice-bar-warp-slot"};function A(e,i,s,a,t,l){const r=w("SvgIcon");return S((o(),n("div",{class:"notice-bar",style:u({background:e.background,height:`${e.height}px`})},[f("div",{class:"notice-bar-warp",style:u({color:e.color,fontSize:`${e.size}px`})},[e.leftIcon?(o(),n("i",{key:0,class:x(["notice-bar-warp-left-icon",e.leftIcon])},null,2)):m("",!0),f("div",O,[e.scrollable?(o(),n("div",R,[_(e.$slots,"default",{},void 0,!0)])):(o(),n("div",{key:0,class:"notice-bar-warp-text",ref:"noticeBarTextRef"},T(e.text),513))],512),e.rightIcon?(o(),$(r,{key:1,name:e.rightIcon,class:"notice-bar-warp-right-icon",onClick:e.onRightIconClick},null,8,["name","onClick"])):m("",!0)],4)],4)),[[W,!e.isMode]])}var z=B(I,[["render",A],["__scopeId","data-v-ff7706ec"]]);export{z as N};
