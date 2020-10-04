(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{10:function(e,a,t){e.exports={link:"styles_link__OWjQp",tabs:"styles_tabs__3i35_",textContainer:"styles_textContainer__3S7Ru"}},155:function(e,a,t){e.exports=t(165)},160:function(e,a,t){},165:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),o=(t(160),t(3)),i=t(40),s=t(13),m=t(7),d="/",u="/products",p="/clients",E="/contact",f={"/":0,"/products":1,"/clients":2,"/contact":3},h=t(10),b=t.n(h);var _=function(e){var a=e.children,t=[{children:c.a.createElement(s.b,{className:b.a.link,to:d},"HOME")},{children:c.a.createElement(s.b,{className:b.a.link,to:u},"PRODUCTS")},{children:c.a.createElement(s.b,{className:b.a.link,to:p},"CLIENTS")},{children:c.a.createElement(s.b,{className:b.a.link,to:E},"CONTACT")}],r=Object(n.useState)(0),l=Object(i.a)(r,2),h=l[0],_=l[1],g=Object(o.f)().pathname;return Object(n.useEffect)((function(){var e="/".concat(g.split("/")[1]);_(f[e])}),[g]),c.a.createElement(m.Configuration,null,c.a.createElement(m.TabsManager,{tabs:t,tabsId:"basic-usage-tabs",activeIndex:h,onActiveIndexChange:_},c.a.createElement(m.Tabs,{padded:!0,className:b.a.tabs}),a))},g=t(168),y=t(169);function C(){return c.a.createElement(g.a,{className:b.a.textContainer},c.a.createElement(y.a,{type:"headline-4"},"Home"))}function v(){return c.a.createElement(g.a,{className:b.a.textContainer},c.a.createElement(y.a,{type:"headline-4"},"Clients"))}function N(){return c.a.createElement(g.a,{className:b.a.textContainer},c.a.createElement(y.a,{type:"headline-4"},"Contact"))}var O=t(177),j=t(179),I=t(178),k=t(41),w=t(18),S=t(174),x=t(181),W=t(175),G=t(176),T=t(170),A=t(171),D=t(172),F=t(173),H=t(5),U=t.n(H),L=[{name:"All",path:"",icon:c.a.createElement("div",{className:U.a.iconWrapper},c.a.createElement(T.a,null))},{name:"Tech",path:"/tech",icon:c.a.createElement("div",{className:U.a.iconWrapper},c.a.createElement(A.a,null))},{name:"Services",path:"/services",icon:c.a.createElement("div",{className:U.a.iconWrapper},c.a.createElement(D.a,null))},{name:"Office",path:"/office",icon:c.a.createElement("div",{className:U.a.iconWrapper},c.a.createElement(F.a,null))}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",a={"/":"All","/tech":"Tech","/services":"Services","/office":"Office"},t="/".concat(e.split("/")[0]);return a[t]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length};var Y=function(){var e=Object(o.g)().categoryId,a=Object(n.useState)({loading:!1,data:[],dataFiltered:[],showing:0,hidden:0}),t=Object(i.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){l((function(e){return Object(w.a)(Object(w.a)({},e),{loading:!0})})),fetch("https://my-json-server.typicode.com/josepplloo/my-company-spa/db").then((function(e){return e.json()})).then((function(e){var a=e.products;l((function(e){return Object(w.a)(Object(w.a)({},e),{loading:!1,data:Object(k.a)(a),dataFiltered:Object(k.a)(a),showing:R(a)})}))}))}),[l]),Object(n.useEffect)((function(){var a=function(e){var a=e.category,t=void 0===a?"All":a,n=e.data;return(void 0===n?[]:n).filter((function(e){return e.categories.find((function(e){return e===t}))}))}({data:r.data,category:M(e)});l((function(e){return Object(w.a)(Object(w.a)({},e),{dataFiltered:Object(k.a)(a),showing:R(a),hidden:R(r.data)-R(a)})}))}),[e,l,r.data]),r.loading?c.a.createElement(y.a,null,"Loading..."):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:U.a.productCounter,type:"body-2"},"Showing ",c.a.createElement("span",null,r.showing)," products - Hidden: ",c.a.createElement("span",null,r.hidden)),r.dataFiltered.map((function(e){var a=e.id,t=e.name,n=e.description,r=e.categories,l=e.photo,o=e.price,i=e.stock;return c.a.createElement(S.a,{key:a,className:U.a.cardContainer},c.a.createElement(x.a,{className:U.a.cardHeader},c.a.createElement(W.a,null,t),c.a.createElement(y.a,{className:U.a.productCategories,type:"body-2"},r.join(", "))),c.a.createElement(G.a,{className:U.a.cardContent},c.a.createElement(m.Grid,{columns:3},c.a.createElement(m.GridCell,{className:U.a.imageContainer,colSpan:1},c.a.createElement("img",{className:U.a.image,src:l,alt:"product"})),c.a.createElement(m.GridCell,{className:U.a.productInfoContainer,colSpan:2},c.a.createElement(g.a,null,c.a.createElement(y.a,{className:U.a.productDescription,type:"body-2"},n),c.a.createElement(y.a,{className:U.a.productInfo,type:"body-2"},c.a.createElement("span",null,"Stock:"),i),c.a.createElement(y.a,{className:U.a.productInfo,type:"body-2"},c.a.createElement("span",null,"Price:"),o))))),c.a.createElement("div",null))})))};function B(){var e=Object(o.h)(),a=e.path,t=e.url;return c.a.createElement(m.Grid,{columns:3,tabletColumns:1,phoneColumns:1},c.a.createElement(m.GridCell,{colSpan:1},c.a.createElement(O.a,null,c.a.createElement(y.a,{type:"subtitle-1",className:U.a.productCategories},"Categories"),L.map((function(e,a){var n=e.name,r=e.path,l=e.icon;return c.a.createElement("div",{key:n},c.a.createElement(s.b,{to:"".concat(t).concat(r)},c.a.createElement(j.a,{id:"L-".concat(r),leftAddon:l},n)),0===a&&c.a.createElement(I.a,null))})))),c.a.createElement(m.GridCell,{colSpan:2},c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:a},c.a.createElement(Y,null)),c.a.createElement(o.a,{path:"".concat(a,"/:categoryId")},c.a.createElement(Y,null)))))}function J(){return c.a.createElement(_,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:C}),c.a.createElement(o.a,{path:"/products",component:B}),c.a.createElement(o.a,{path:"/clients",component:v}),c.a.createElement(o.a,{path:"/contact",component:N})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(s.a,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports={image:"styles_image__1fX7n",imageContainer:"styles_imageContainer__2RFlY",cardContainer:"styles_cardContainer__1GfDV",cardHeader:"styles_cardHeader__20zXv",cardContent:"styles_cardContent__2l0qe",productCounter:"styles_productCounter__3Yj4j",productCategories:"styles_productCategories__1MGID",productInfo:"styles_productInfo__UttOb",productInfoContainer:"styles_productInfoContainer__2lVNY",productDescription:"styles_productDescription__UldO7",iconWrapper:"styles_iconWrapper__1Uddi"}}},[[155,1,2]]]);
//# sourceMappingURL=main.be17e9cb.chunk.js.map