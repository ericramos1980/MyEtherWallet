(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e226299"],{1298:function(e,t,n){"use strict";n("7f7f");var r=n("cb09"),a=n.n(r),o=n("ef00"),c=n.n(o),i=n("6c15"),s=n.n(i),p=n("c222"),u=n.n(p),d=n("1526"),f=n.n(d),l=n("e8c4"),b=n.n(l),m=n("5c5e"),g=n.n(m),O=n("2c58"),v=n.n(O),y=n("8761"),w={manageEns:{route:"/interface/dapps/manage-ens",icon:s.a,iconDisabled:u.a,title:"interface.ensManager",desc:"interface.registerENSDescShort",supportedNetworks:[y["ETH"].name,y["GOERLI"].name,y["ROP"].name,y["RIN"].name]},domainSale:{route:"/interface/dapps/name-wallet",icon:a.a,iconDisabled:c.a,title:"interface.nameYourWallet",desc:"interface.nameYourWalletDesc",supportedNetworks:[y["ETH"].name]},scheduleTransaction:{route:"/interface/dapps/schedule-transaction",icon:b.a,iconDisabled:g.a,title:"Schedule a transaction",desc:"Schedule a transaction using the decentralized Ethereum Alarm Clock protocol",supportedNetworks:[y["ETH"].name,y["KOV"].name]},maker:{route:"/interface/dapps/maker-dai",icon:v.a,iconDisabled:f.a,title:"dappsMaker.maker_title",desc:"dappsMaker.maker_desc",supportedNetworks:[y["ETH"].name,y["KOV"].name]}};t["a"]=w},1526:function(e,t,n){e.exports=n.p+"img/button-key.79e4057e.svg"},"2c58":function(e,t,n){e.exports=n.p+"img/makerdai.4cda8f7e.svg"},3409:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["dapps-button",e.supported?"":"disabled"],on:{click:e.navigateTo}},[n("img",{attrs:{src:e.supported?e.icon:e.iconDisabled}}),n("div",[n("h4",[e._v(e._s(e.title))]),n("p",[e._v(e._s(e.desc))])])])},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("6762"),n("2fdb"),n("bd86")),c=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(o["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p={props:{title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""},iconDisabled:{type:String,default:""},param:{type:String,default:""},supportedNetworks:{type:Array,default:function(){return[]}}},computed:s({},Object(c["b"])(["network","online"]),{supported:function(){if(this.online)return this.supportedNetworks.includes(this.network.type.name)}}),methods:{navigateTo:function(){this.$router.push(this.param)}}},u=p,d=(n("5d41"),n("2877")),f=Object(d["a"])(u,r,a,!1,null,"120b5f2d",null),l=f.exports;n.d(t,"a",function(){return l})},"3a12":function(e,t,n){},"5c5e":function(e,t,n){e.exports=n.p+"img/eac-hov.0ff9427d.svg"},"5d41":function(e,t,n){"use strict";var r=n("3a12"),a=n.n(r);a.a},"6c15":function(e,t,n){e.exports=n.p+"img/domain.5194defa.svg"},"9ab7":function(e,t,n){},c222:function(e,t,n){e.exports=n.p+"img/domain-hov.cce19f91.svg"},cb09:function(e,t,n){e.exports=n.p+"img/domain-sale.f07a77b5.svg"},e7d0:function(e,t,n){"use strict";var r=n("9ab7"),a=n.n(r);a.a},e8c4:function(e,t,n){e.exports=n.p+"img/eac.8c229ac0.svg"},ef00:function(e,t,n){e.exports=n.p+"img/domain-sale-hov.e110128d.svg"},f4d0:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dapps-container"},[n("div",[n("interface-container-title",{attrs:{title:e.$t("common.dapps")}}),n("div",{staticClass:"buttons-container"},e._l(e.sortedObject,function(t){return n("dapp-buttons",{key:t.title,attrs:{title:e.$t(t.title),icon:t.icon,"icon-disabled":t.iconDisabled,desc:e.$t(t.desc),param:t.route,"supported-networks":t.supportedNetworks}})}),1)],1)])},a=[],o=(n("8e6e"),n("7f7f"),n("6762"),n("2fdb"),n("55dd"),n("456d"),n("ac6a"),n("bd86")),c=n("55c1"),i=n("3409"),s=n("1298"),p=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){Object(o["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={name:"DappsContainer",components:{"interface-container-title":c["a"],"dapp-buttons":i["a"]},data:function(){return{localDapps:s["a"]}},computed:d({},Object(p["b"])(["network"]),{sortedObject:function(){var e=this,t=[];return Object.keys(s["a"]).forEach(function(e){t.push(s["a"][e])}),t.sort(function(t,n){return t.supportedNetworks.includes(e.network.type.name)||n.supportedNetworks.includes(e.network.type.name)?1:0})}})},l=f,b=(n("e7d0"),n("2877")),m=Object(b["a"])(l,r,a,!1,null,"58bfb8cc",null),g=m.exports;n.d(t,"default",function(){return g})}}]);
//# sourceMappingURL=chunk-2e226299.484ba902.js.map