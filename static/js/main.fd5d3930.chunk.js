(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,n){e.exports=n(308)},164:function(e,t,n){},217:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),c=(n(164),n(48)),s=n.n(c),u=n(157),l=n(73),m=n(101),p=n(312),h=n(311),d=n(310),f=n(313),v=n(16),b=n(117),g=n(120),w=n(118),E=n(119),j=n(147),k=n.n(j),y=n(3),O=n.n(y);function x(e){var t=e.photos,n=e.viewport,a=e.onViewportChange;return r.a.createElement(b.a,{onViewPortChanged:a,viewport:n,style:{height:"calc(100vh - 64px)",width:"100%"},maxZoom:20},r.a.createElement(g.a,{url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",attribution:'<a href="https://github.com/titouancreach"> @titouancreach </a>',id:"mapbox/streets-v11",accessToken:"pk.eyJ1IjoieXVuamllbGkiLCJhIjoiY2lxdmV5MG5rMDAxNmZta3FlNGhyMmpicSJ9.CTEQgAyZGROcpJouZuzJyA",zoomOffset:-1,tileSize:512}),r.a.createElement(k.a,{showCoverageOnHover:!1,maxClusterRadius:100,iconCreateFunction:function(e){var t=e.getAllChildMarkers()[0].options.icon.options.html;return O.a.divIcon({className:"leaflet-marker-photo",html:"".concat(t,"\u200b<b>").concat(e.getChildCount(),"</b>"),iconSize:[64,64]})}},t.map(function(e){return r.a.createElement(w.a,{position:e.position,key:e.url,icon:O.a.divIcon({html:'<div style="background-image: url('.concat(e.url,');"></div>'),className:"leaflet-marker-photo",iconSize:[40,40]})},r.a.createElement(E.a,{className:"leaflet-popup-photo",minWidth:400},r.a.createElement("figure",null,r.a.createElement("img",{src:e.url}),r.a.createElement("figcaption",{className:"pt2 tc"},e.file.name))))})))}var N=n(96),C=n.n(N),S=n(97),z=n(102),G=n(55),L=n(98),P=n(103),R=function(e){function t(){return Object(S.a)(this,t),Object(z.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(L.a)(t,e),t}(Object(P.a)(Error)),J=function(e){function t(){return Object(S.a)(this,t),Object(z.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(L.a)(t,e),t}(Object(P.a)(Error));function A(e,t,n,a){var r=Number(e)+Number(t)/60+Number(n)/3600;return"S"!=a&&"W"!=a||(r*=-1),r}function I(e){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(s.a.mark(function e(t){var n,a,r,o,i,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return C.a.getData(t,function(){e(C.a.getAllTags(this))})});case 2:if(n=e.sent,a=n.GPSLatitude,r=n.GPSLongitude,o=n.GPSLatitudeRef,i=n.GPSLongitudeRef,void 0!==a&&void 0!==r){e.next=9;break}throw new R;case 9:return c=[A(a[0],a[1],a[2],o),A(r[0],r[1],r[2],i)],e.abrupt("return",c);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(e){var t=new FileReader;return new Promise(function(n){t.addEventListener("load",function(){var e=t.result;n(e)},!1),t.addEventListener("error",function(){throw new J}),t.readAsDataURL(e)})}n(217);var V=p.a.Header,F=p.a.Content,W=p.a.Sider;var Z=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({center:[48.8534,2.3488],zoom:13}),c=Object(m.a)(i,2),b=c[0],g=c[1];return r.a.createElement(p.a,null,r.a.createElement(V,{className:"flex items-center justify-between bg-white shadow-1 z-2",style:{background:"white"}},r.a.createElement("h1",{className:"f3 ma0 o-80"},"Geopicture"),r.a.createElement(h.a,{shape:"circle",icon:"github",href:"https://github.com/titouancreach/geopicture-web"})),r.a.createElement(p.a,null,r.a.createElement(F,null,r.a.createElement(x,{photos:n,viewport:b,onViewportChange:function(e){g(e)}})),r.a.createElement(W,{style:{background:"white"},className:"z-1 shadow-1 pa3",width:"250"},r.a.createElement("div",{className:"w-100 tc"},r.a.createElement(d.a,{name:"images",onPreview:function(e){var t=n.find(function(t){return t.uid===e.uid});if(t){var a=t.position;g({zoom:20,center:a})}},customRequest:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,r,i,c,l,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,a=t.onSuccess,r=t.onError,e.prev=1,e.next=4,M(n);case 4:return i=e.sent,e.next=7,I(n);case 7:c=e.sent,l=n.uid,m={position:c,url:i,uid:l,file:n},o(function(e){return[].concat(Object(u.a)(e),[m])}),a(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),e.t0 instanceof R?f.a.error({message:"Missing or invalid geotags",description:"The image contains invalid geotags and cannot be displayed on the map"}):f.a.error({message:"Invalid image",description:"The image is invalid"}),r(e.t0);case 18:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}(),onRemove:function(e){o(function(t){return t.filter(function(t){return e.originFileObj!==t.file})})},multiple:!0},r.a.createElement(h.a,{className:"ma2 mt0"},r.a.createElement(v.a,{type:"upload"})," Click to upload"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,1,2]]]);
//# sourceMappingURL=main.fd5d3930.chunk.js.map