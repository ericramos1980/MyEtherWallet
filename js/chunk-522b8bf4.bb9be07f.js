(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-522b8bf4"],{"0003":function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"h",function(){return d}),n.d(e,"g",function(){return p}),n.d(e,"a",function(){return h}),n.d(e,"b",function(){return v});n("6b54");var a=n("901e"),r=n.n(a),i=function(t){return new r.a(t)},s=function(t,e,n){return i(t).times(i(e)).div(i(n))};function o(t){return r.a.isBigNumber(t)||(t=new r.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.a.isBigNumber(t)||(t=new r.a(t)),!isFinite(t)||isNaN(t)?"--":n?t.toFixed(e,r.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=c(o(t),e,n);return isFinite(a)&&new r.a(a).gt(0)?a:"--"}function l(t,e,n,a){return s(i(t),i(e),i(n)).minus(i(a))}function d(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return i(t).minus(s(i(e).plus(.001),i(n),i(a))).minus(i(r).times(1))}function p(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return i(t).minus(s(i(e),i(n),i(a))).minus(i(r).times(1))}function h(t,e,n){return s(i(n),t,e)}function v(t,e,n,a){for(var r=parseInt(n),o=r;o>0;o--){var c=s(o,t,e).lte(i(a));if(c)return o}for(var u=100;u>0;u--){var l=s(u/100,t,e).lte(i(a));if(l)return u/100}return 0}},"0ba3":function(t,e,n){},1751:function(t,e,n){"use strict";var a=n("0ba3"),r=n.n(a);r.a},"2cbc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding",attrs:{title:t.$t("dappsMaker.moveTitle"),"hide-footer":"",centered:"",static:"",lazy:""}},[n("div",{staticClass:"modal-content"},[n("p",{staticClass:"top-text"},[t._v("\n        "+t._s(t.$t("dappsMaker.moveNotice"))+"\n      ")]),n("check-box",{on:{changeStatus:t.checkBoxClicked},scopedSlots:t._u([{key:"terms",fn:function(){return[n("p",{staticClass:"checkbox-label"},[t._v("\n            "+t._s(t.$t("dappsMaker.understandAndAgree"))+"\n          ")])]},proxy:!0}])}),n("div",{staticClass:"input-container"},[n("label",[t._v(t._s(t.$t("dappsMaker.moveQuestion")))]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),n("div",[t.destAddressHasProxy?n("div",[n("p",[t._v("\n            "+t._s(t.$t("dappsMaker.proxyAddress",{value:t.destAddressProxy}))+"\n          ")]),t._v("\n          "+t._s(t.$t("dappsMaker.moveWithProxy"))+"\n        ")]):t._e(),t.destAddressHasProxy?t._e():n("div",[t._v("\n          "+t._s(t.$t("dappsMaker.moveWithoutProxy"))+"\n        ")])]),n("div",{staticClass:"buttons"},[n("standard-button",{attrs:{options:t.cancelButton},nativeOn:{click:function(e){return t.closeModal(e)}}}),n("standard-button",{attrs:{options:t.submitButton,"button-disabled":!t.btnActive,"click-function":t.moveCdp}})],1),n("help-center-button")],1)])],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),s=(n("6b54"),n("bd86")),o=n("2f62"),c=n("a8f0"),u=n("76ed"),l=n("e8aa"),d=n("901e"),p=n.n(d),h=n("ce96");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var m={components:{"check-box":l["a"],"help-center-button":u["a"],"standard-button":c["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},action:{type:String,default:""},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:""}}},destAddressHasProxy:{type:Boolean,default:!1},destAddressProxy:{type:String,default:""}},data:function(){return{address:"",amountEth:0,amountDai:0,govFee:0,modalDetailInformation:!1,checkBoxChecked:!1,textValues:{},mkrToken:{},cancelButton:{title:"Cancel",buttonStyle:"green-border",noMinWidth:!0},submitButton:{title:"Submit",buttonStyle:"green",noMinWidth:!0,fullWidth:!0}}},computed:f({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{btnActive:function(){return h["c"].isValidETHAddress(this.address)&&this.checkBoxChecked}}),watch:{address:function(t){h["c"].isValidETHAddress(t)&&this.$emit("checkForProxy",t)}},mounted:function(){var t=this;this.$refs.modal.$on("shown",function(){t.address=""})},methods:{closeCdp:function(){this.activeCdp.closeCdp()},checkBoxClicked:function(){this.checkBoxChecked=!this.checkBoxChecked},displayPercentValue:function(t){return p.a.isBigNumber(t)||(t=new p.a(t)),t.times(100).toString()},displayFixedValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return p.a.isBigNumber(t)||(t=new p.a(t)),t.toFixed(e,p.a.ROUND_DOWN).toString()},moveCdp:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:h["c"].isValidETHAddress(this.address)&&(this.$emit("moveCdp",this.address),this.closeModal());case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),closeModal:function(){this.$refs.modal.hide()}}},b=m,k=(n("1751"),n("2877")),g=Object(k["a"])(b,a,r,!1,null,"44ff5ade",null),w=g.exports;n.d(e,"a",function(){return w})},"3ead":function(t,e,n){},a249:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding",attrs:{title:t.$t("dappsMaker.closeTitle"),centered:"",static:"",lazy:"","hide-footer":""}},[n("div",{staticClass:"contents"},[t.enoughMkr?t._e():n("div",{staticClass:"message-container"},[t._v("\n        "+t._s(t.$t("dappsMaker.notEnoughMkrClose"))+"\n      ")]),t.enoughDai?t._e():n("div",{staticClass:"message-container"},[t._v("\n        "+t._s(t.$t("dappsMaker.notEnoughDaiClose"))+"\n      ")]),n("p",{staticClass:"top-text"},[t._v("\n        "+t._s(t.$t("dappsMaker.closingNotice"))+"\n      ")]),n("div",{staticClass:"value-table-container"},[n("div",{staticClass:"value-table mkr-balance"},[n("div",{staticClass:"value-block"},[n("p",[n("b",[t._v(t._s(t.$t("dappsMaker.mkrBalance")))])]),n("p",[n("b",[t._v(t._s(t.mkrBalance)+" MKR")])])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.enoughMkr,expression:"!enoughMkr"}],staticClass:"get-mkr",on:{click:function(e){return t.getMkr()}}},[t._v("\n            "+t._s(t.$t("dappsMaker.getMkr"))+"\n          ")])]),n("div",{staticClass:"value-table mkr-balance"},[n("div",{staticClass:"value-block"},[n("p",[n("b",[t._v(t._s(t.$t("dappsMaker.daiBalance")))])]),n("p",[n("b",[t._v(t._s(t.daiBalance)+" DAI")])])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.enoughDai,expression:"!enoughDai"}],staticClass:"get-mkr",on:{click:function(e){return t.getDai()}}},[t._v("\n            "+t._s(t.$t("dappsMaker.getDai"))+"\n          ")])]),n("div",{staticClass:"value-table other-values"},[n("div",{staticClass:"value-block"},[n("p",[t._v(t._s(t.$t("dappsMaker.outstandingDai")))]),n("p",[n("b",[t._v(t._s(t.values.debtValue)+" DAI")])])]),n("div",{staticClass:"value-block"},[n("p",[t._v("\n              "+t._s(t.$t("dappsMaker.stabilityFeeInMkr",{value:t.displayFixedValue(t.displayPercentValue(t.values.stabilityFee))}))+"\n            ")]),n("p",[n("b",[t._v(t._s(t.getfeeOwed)+" MKR")])])])])]),n("div",{staticClass:"buttons"},[t.needsDaiApprove?n("div",[n("standard-button",{attrs:{options:t.approveDaiButton},nativeOn:{click:function(e){return t.approveDai(e)}}})],1):t._e(),t.needsMkrApprove?n("div",[n("standard-button",{attrs:{options:t.approveMkrButton},nativeOn:{click:function(e){return t.approveMkr(e)}}})],1):t._e()]),n("div",{staticClass:"buttons"},[n("standard-button",{attrs:{options:t.cancelButton},nativeOn:{click:function(e){return t.closeModal(e)}}}),n("standard-button",{attrs:{options:t.closeButton,"button-disabled":!t.canClose,"click-function":t.closeCdp}})],1),n("help-center-button")],1)])],1)},r=[],i=(n("8e6e"),n("456d"),n("7514"),n("6b54"),n("96cf"),n("3b8d")),s=(n("ac6a"),n("bd86")),o=n("2f62"),c=n("a8f0"),u=n("76ed"),l=n("901e"),d=n.n(l);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var v=function(t){return new d.a(t)},f={components:{"help-center-button":u["a"],"standard-button":c["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},action:{type:String,default:""},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:""}}},makerManager:{type:Object,default:function(){return{}}}},data:function(){return{amount:0,amountEth:0,amountDai:0,govFee:0,closable:!1,modalDetailInformation:!1,textValues:{},mkrToken:{},daiToken:{},approveMkrButton:{title:"Approve Maker",buttonStyle:"green-border",fullWidth:!0,noMinWidth:!0},approveDaiButton:{title:"Approve Dai",buttonStyle:"green-border",fullWidth:!0,noMinWidth:!0},cancelButton:{title:"Cancel",buttonStyle:"green-border",fullWidth:!0,noMinWidth:!0},closeButton:{title:"Close",buttonStyle:"green",fullWidth:!0,noMinWidth:!0},suppliedFrom:{symbol:"ETH",name:"Ethereum"},suppliedTo:{symbol:"MKR",name:"Maker"},suppliedToAmount:0,destAddress:""}},computed:h({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{getfeeOwed:function(){var t=this.values.governanceFeeOwed;return this.displayFixedValue(t,8)},newCollateralRatio:function(){return this.values?this.values.collatRatio:0},newCollateralRatioSafe:function(){return!this.values||v(this.values.collatRatio).gte(2)},newLiquidationPrice:function(){return this.values?this.values.liquidationPrice:0},mkrBalance:function(){return this.mkrToken?this.mkrToken.balance:0},daiBalance:function(){return this.daiToken?this.daiToken.balance:0},enoughMkr:function(){var t=this.values.governanceFeeOwed;return!!t&&v(this.mkrBalance).minus(t).gte(0)},enoughDai:function(){if(this.values.zeroDebt)return!0;var t=this.values.debtValue;return!!t&&v(this.daiBalance).minus(t).gte(0)},needsDaiApprove:function(){return!(!v(this.values.proxyAllowanceDai).gt(0)||!v(this.values.proxyAllowanceDai).lte(this.values.debtValue))||v(this.values.proxyAllowanceDai).eq(0)},needsMkrApprove:function(){return!(!v(this.values.proxyAllowanceMkr).gt(0)||!v(this.values.proxyAllowanceMkr).lt(this.values.governanceFeeOwed))||v(this.values.proxyAllowanceMkr).eq(0)},canClose:function(){return this.enoughMkr&&this.enoughDai&&!this.needsDaiApprove&&!this.needsMkrApprove}}),watch:{tokensWithBalance:function(){this.getBalances()}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.destAddress=this.account.address,this.getBalances(),this.$refs.modal.$on("shown",Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.getBalances();case 1:case"end":return t.stop()}},t)})));case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{closeModal:function(){this.$refs.modal.hide()},delayCloseModal:function(){var t=this;setTimeout(function(){t.closeModal()},200)},closeCdp:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.delayCloseModal(),this.$emit("closeCdp");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),displayPercentValue:function(t){return d.a.isBigNumber(t)||(t=new d.a(t)),t.times(100).toString()},displayFixedValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return d.a.isBigNumber(t)||(t=new d.a(t)),t.toFixed(e,d.a.ROUND_DOWN).toString()},maxDai:function(){this.amount=this.values.maxDai},currentDai:function(){this.amount=this.values.debtValue},getBalances:function(){this.mkrToken=this.tokensWithBalance.find(function(t){return"MKR"===t.symbol}),this.daiToken=this.tokensWithBalance.find(function(t){return"DAI"===t.symbol})},getMkr:function(){var t=this,e=this.getfeeOwed;v(this.mkrBalance).lt(e)&&(this.suppliedToAmount=v(e).minus(v(this.mkrBalance)).plus(v(e).times(.01)).toNumber(),v(this.suppliedToAmount).lt(1e-6)&&(this.suppliedToAmount=1e-6),this.suppliedFrom={symbol:"ETH",name:"Ethereum"},this.suppliedTo={symbol:"MKR",name:"Maker"},this.$nextTick(function(){t.$refs.swapWidget.$refs.modal.show()}))},getDai:function(){var t=this.values.debtValue;v(this.daiBalance).lt(t)&&(this.suppliedToAmount=v(t).minus(v(this.daiBalance)).toNumber(),v(this.suppliedToAmount).lt(1e-6)&&(this.suppliedToAmount=1e-6),this.suppliedFrom={symbol:"ETH",name:"Ethereum"},this.suppliedTo={symbol:"DAI",name:"Dai"},this.$eventHub.$emit("showSwapWidgetTo",this.account.address,this.suppliedFrom,this.suppliedTo,this.suppliedToAmount))},approveDai:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("approveDai");case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),approveMkr:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("approveMkr");case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},m=f,b=(n("e2d8"),n("2877")),k=Object(b["a"])(m,a,r,!1,null,"e368f9e2",null),g=k.exports;n.d(e,"a",function(){return g})},a99a:function(t,e,n){},b18c:function(t,e,n){"use strict";var a=n("a99a"),r=n.n(a);r.a},e2d8:function(t,e,n){"use strict";var a=n("3ead"),r=n.n(a);r.a},e8aa:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"check-box"},[n("label",{staticClass:"check-box-container"},[n("input",{attrs:{type:"checkbox"},on:{click:t.checkBoxClicked}}),n("span",{staticClass:"checkmark"}),t._t("terms")],2)])},r=[],i={data:function(){return{checkboxChecked:!1}},methods:{checkBoxClicked:function(){this.checkboxChecked=!this.checkboxChecked,this.$emit("changeStatus",this.checkboxChecked)}}},s=i,o=(n("b18c"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"3e6e47df",null),u=c.exports;n.d(e,"a",function(){return u})}}]);
//# sourceMappingURL=chunk-522b8bf4.bb9be07f.js.map