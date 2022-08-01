import{B,c as E,b as P,m as b,a as S,e as z,d as L,r as N,f as x}from"./echarts.1659334396074.js";function a(t,o){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=o,this._projection=new BMap.MercatorProjection}a.prototype.dimensions=["lng","lat"];a.prototype.setZoom=function(t){this._zoom=t};a.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))};a.prototype.setMapOffset=function(t){this._mapOffset=t};a.prototype.getBMap=function(){return this._bmap};a.prototype.dataToPoint=function(t){var o=new BMap.Point(t[0],t[1]),n=this._bmap.pointToOverlayPixel(o),r=this._mapOffset;return[n.x-r[0],n.y-r[1]]};a.prototype.pointToData=function(t){var o=this._mapOffset;return t=this._bmap.overlayPixelToPoint({x:t[0]+o[0],y:t[1]+o[1]}),[t.lng,t.lat]};a.prototype.getViewRect=function(){var t=this._api;return new B(0,0,t.getWidth(),t.getHeight())};a.prototype.getRoamTransform=function(){return E()};a.prototype.prepareCustoms=function(){var t=this.getViewRect();return{coordSys:{type:"bmap",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:P(this.dataToPoint,this),size:P(V,this)}}};function V(t,o){return o=o||[0,0],b([0,1],function(n){var r=o[n],e=t[n]/2,f=[],m=[];return f[n]=r-e,m[n]=r+e,f[1-n]=m[1-n]=o[1-n],Math.abs(this.dataToPoint(f)[n]-this.dataToPoint(m)[n])},this)}var _;a.dimensions=a.prototype.dimensions;function H(){function t(o){this._root=o}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(o){return o.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}a.create=function(t,o){var n,r=o.getDom();t.eachComponent("bmap",function(e){var f=o.getZr().painter,m=f.getViewportRoot();if(typeof BMap=="undefined")throw new Error("BMap api is not loaded");if(_=_||H(),n)throw new Error("Only one bmap component can exist");var i;if(!e.__bmap){var s=r.querySelector(".ec-extension-bmap");s&&(m.style.left="0px",m.style.top="0px",r.removeChild(s)),s=document.createElement("div"),s.className="ec-extension-bmap",s.style.cssText="position:absolute;width:100%;height:100%",r.appendChild(s);var p=e.get("mapOptions");p&&(p=S(p),delete p.mapType),i=e.__bmap=new BMap.Map(s,p);var d=new _(m);i.addOverlay(d),f.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}i=e.__bmap;var l=e.get("center"),c=e.get("zoom");if(l&&c){var y=i.getCenter(),v=i.getZoom(),u=e.centerOrZoomChanged([y.lng,y.lat],v);if(u){var w=new BMap.Point(l[0],l[1]);i.centerAndZoom(w,c)}}n=new a(i,o),n.setMapOffset(e.__mapOffset||[0,0]),n.setZoom(c),n.setCenter(l),e.coordinateSystem=n}),t.eachSeries(function(e){e.get("coordinateSystem")==="bmap"&&(e.coordinateSystem=n)})};function R(t,o){return t&&o&&t[0]===o[0]&&t[1]===o[1]}z({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,o){this.option.center=t,this.option.zoom=o},centerOrZoomChanged:function(t,o){var n=this.option;return!(R(t,n.center)&&o===n.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}});function T(t){for(var o in t)if(t.hasOwnProperty(o))return!1;return!0}L({type:"bmap",render:function(t,o,n){var r=!0,e=t.getBMap(),f=n.getZr().painter.getViewportRoot(),m=t.coordinateSystem,i=function(w,A){if(!r){var O=f.parentNode.parentNode.parentNode,h=[-parseInt(O.style.left,10)||0,-parseInt(O.style.top,10)||0],g=f.style,C=h[0]+"px",Z=h[1]+"px";g.left!==C&&(g.left=C),g.top!==Z&&(g.top=Z),m.setMapOffset(h),t.__mapOffset=h,n.dispatchAction({type:"bmapRoam",animation:{duration:0}})}};function s(){r||n.dispatchAction({type:"bmapRoam",animation:{duration:0}})}e.removeEventListener("moving",this._oldMoveHandler),e.removeEventListener("moveend",this._oldMoveHandler),e.removeEventListener("zoomend",this._oldZoomEndHandler),e.addEventListener("moving",i),e.addEventListener("moveend",i),e.addEventListener("zoomend",s),this._oldMoveHandler=i,this._oldZoomEndHandler=s;var p=t.get("roam");p&&p!=="scale"?e.enableDragging():e.disableDragging(),p&&p!=="move"?(e.enableScrollWheelZoom(),e.enableDoubleClickZoom(),e.enablePinchToZoom()):(e.disableScrollWheelZoom(),e.disableDoubleClickZoom(),e.disablePinchToZoom());var d=t.__mapStyle,l=t.get("mapStyle")||{},c=JSON.stringify(l);JSON.stringify(d)!==c&&(T(l)||e.setMapStyle(S(l)),t.__mapStyle=JSON.parse(c));var y=t.__mapStyle2,v=t.get("mapStyleV2")||{},u=JSON.stringify(v);JSON.stringify(y)!==u&&(T(v)||e.setMapStyleV2(S(v)),t.__mapStyle2=JSON.parse(u)),r=!1}});N("bmap",a);x({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},function(t,o){o.eachComponent("bmap",function(n){var r=n.getBMap(),e=r.getCenter();n.setCenterAndZoom([e.lng,e.lat],r.getZoom())})});
