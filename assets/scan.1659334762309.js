import{Q as n}from"./qrcode.1659334762309.js";import{_ as s}from"./index.1659334762309.js";import{K as a,i as r,l as c,a as i,b as t,Y as d,o as _}from"./vue.1659334762309.js";const f=a({name:"loginScan",setup(){const e=r(null),o=()=>{e.value.innerHTML="",new n(e.value,{text:"https://qm.qq.com/cgi-bin/qm/qr?k=Nr91JZlEJPAXjdjLsMYOAdvnijNtgCj8&noverify=0",width:260,height:260,colorDark:"#000000",colorLight:"#ffffff"})};return c(()=>{o()}),{qrcodeRef:e}}}),l={class:"login-scan-container"},p={ref:"qrcodeRef"},m={class:"font12 mt20 login-msg"};function u(e,o,v,g,h,q){return _(),i("div",l,[t("div",p,null,512),t("div",m,d(e.$t("message.scan.text")),1)])}var k=s(f,[["render",u],["__scopeId","data-v-2e5d339f"]]);export{k as default};
