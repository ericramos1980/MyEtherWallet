(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-803c4ed2"],{"0355":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send-offline-container"},[s("interface-container-title",{attrs:{title:t.$t("common.offline")}}),s("div",{staticClass:"generate-tx"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"send-form"},[s("div",{staticClass:"form-block amount-to-address"},[s("ul",{staticClass:"type-amount"},[s("li",{staticClass:"type"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("interface.sendTxType")))])]),s("currency-picker",{attrs:{currency:t.allTokens,token:!0,default:t.selectedCoinType.hasOwnProperty("symbol")?t.selectedCoinType:{},page:"sendOfflineGenTx"},on:{selectedCurrency:t.setSelectedCurrency}})],1),s("li",{staticClass:"amount"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("interface.sendTxAmount")))])]),s("div",{staticClass:"the-form amount-number"},[s("input",{attrs:{placeholder:t.$t("interface.depAmount"),type:"number",step:"any",name:""},domProps:{value:t.toAmt},on:{input:t.debouncedAmount}})])])]),s("div",{staticClass:"to-address"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("interface.sendTxToAddr"))+"  ")]),s("blockie",{directives:[{name:"show",rawName:"v-show",value:""!==t.address&&t.validAddress,expression:"address !== '' && validAddress"}],staticClass:"blockie-image-icon",attrs:{address:t.address,width:"32px",height:"32px"}}),s("button",{staticClass:"title-button copy-button prevent-user-select",on:{click:t.copyToAddress}},[t._v("\n                "+t._s(t.$t("common.copy"))+"\n              ")])],1),s("div",{staticClass:"the-form address-block"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"toaddress",attrs:{name:"name",placeholder:"Please Enter The Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),s("i",{class:[t.validAddress?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("common.data")))])])])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{disabled:"ETH"!==t.selectedCoinType.symbol,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:[""!==t.toData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("common.gasLimit")))]),s("popover",{attrs:{popcontent:t.$t("popover.gasLimit")}})],1)])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gasLimit"),type:"number"},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:["fa fa-check-circle good-button",t.gasLimit>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("common.nonce")))]),s("popover",{attrs:{popcontent:t.$t("popover.nonce")}})],1)])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localNonce,expression:"localNonce"}],attrs:{placeholder:t.$t("common.nonce"),type:"number"},domProps:{value:t.localNonce},on:{input:function(e){e.target.composing||(t.localNonce=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:["fa fa-check-circle good-button",t.localNonce>=0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("common.gasPrice")))]),s("popover",{attrs:{popcontent:t.txSpeedMsg}})],1)])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localGasPrice,expression:"localGasPrice"}],attrs:{placeholder:t.$t("common.gasPrice"),type:"number"},domProps:{value:t.localGasPrice},on:{input:function(e){e.target.composing||(t.localGasPrice=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:["fa fa-check-circle good-button",t.localGasPrice>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"submit-button-container"},[s("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),s("div",{staticClass:"submit-button large-round-button-green-border",on:{click:t.uploadClick}},[t._v("\n          Import JSON\n        ")]),s("div",{class:[t.isAllInputValid?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.generateTx}},[t._v("\n          "+t._s(t.$t("interface.generateTx"))+"\n        ")]),s("interface-bottom-text",{attrs:{link:"https://kb.myetherwallet.com",question:"Have issues?","link-text":"Help Center"}})],1)]),s("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":t.signed,"raw-tx":t.raw}})],1)],1)},n=[],i=(s("8e6e"),s("96cf"),s("3b8d")),o=(s("6b54"),s("7514"),s("ac6a"),s("456d"),s("55dd"),s("a481"),s("7f7f"),s("bd86")),r=s("55c1"),c=s("539d"),l=s("d7a2"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:t.$t("interface.signedTx"),"hide-footer":"",static:"",lazy:""}},[s("div",{staticClass:"d-block"},[s("div",{staticClass:"title-block"},[s("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.signedTx")))])]),s("div",{staticClass:"signed-tx-container"},[s("code",[t._v(t._s(JSON.parse(t.signedTx).rawTransaction))]),s("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:t.signedTx}})]),s("div",{staticClass:"scan-download-container"},[s("h4",{staticClass:"block-title"},[t._v("Scan QR code")]),""!==t.signedTx?s("div",{staticClass:"scan-download-items"},[s("qrcode",{attrs:{value:JSON.parse(t.signedTx).rawTransaction,options:{size:200}}}),t._v("or "),s("a",{attrs:{href:t.jsonFile,download:t.jsonFileName}},[t._v("Download JSON")])],1):t._e()]),s("div",{staticClass:"raw"},[s("div",{staticClass:"title-block"},[s("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.raw")))]),s("div",{staticClass:"sliding-switch-white"},[s("label",{staticClass:"switch"},[s("input",{attrs:{type:"checkbox"},on:{click:function(e){t.showRaw=!t.showRaw}}}),s("span",{staticClass:"slider round"})])])]),t.showRaw?s("div",{staticClass:"raw-tx-container"},[s("code",[t._v(t._s(t.rawTx))])]):t._e()])]),s("div",{staticClass:"button-container"},[s("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:t.copyAndContinue}},[t._v(t._s(t.$t("interface.copyAndCont")))])],1)])},u=[],p={name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(t){var e=JSON.parse(t),s=this.rawTx;delete s["generateOnly"];var a=Object.assign({},e.tx,s);delete e["tx"],e["tx"]=a;var n=JSON.stringify(e),i=new Blob([n],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(i)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.$refs.signedTx.hide()}}},m=p,h=(s("f762"),s("2877")),f=Object(h["a"])(m,d,u,!1,null,null,null),v=f.exports,g=s("c8e5"),b=s("901e"),y=s.n(b),w=s("70c1"),C=s("2f62"),x=s("b7d3"),k=s("8ded"),T=s.n(k),_=s("ce96"),O=s("1131"),N=s.n(O);function A(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?A(s,!0).forEach(function(e){Object(o["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):A(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var j={components:{"interface-bottom-text":c["a"],blockie:g["a"],"signed-tx-modal":v,"currency-picker":l["a"],"interface-container-title":r["a"]},props:{tokens:{type:Array,default:function(){return[]}},nonce:{type:String,default:"0"},highestGas:{type:String,default:"0"}},data:function(){return{toAmt:0,address:"",toData:"0x",gasLimit:21e3,selectedCoinType:{},raw:{},signed:"{}",localNonce:this.nonce,file:"",localGasPrice:this.highestGas}},computed:P({},Object(C["b"])(["wallet","network","web3","linkQuery"]),{txSpeedMsg:function(){var t=this.network.type.name,e="".concat(this.$t("popover.txSpeedPt1").replace("{0}",t)," ").concat(this.$t("popover.txSpeedPt2").replace("{0}",t));return e},validAddress:function(){return Object(x["a"])(this.address)},allTokens:function(){var t=T.a.get("customTokens"),e=this.tokens.concat(t[this.network.type.name]),s=e.sort(function(t,e){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:t.symbol.toUpperCase()>e.symbol.toUpperCase()?1:0});return s},isAllInputValid:function(){return this.toData.length>=2&&this.address.length>0&&this.validAddress&&this.toAmt>=0&&this.gasLimit>0&&this.localNonce>=0&&this.localGasPrice}}),watch:{highestGas:function(t){this.localGasPrice=t},nonce:function(t){this.localNonce=t},toData:function(t){_["c"].validateHexString(t)?this.toData=t:this.toData="0x"},tokens:function(t){if(t.length>0&&Object.keys(this.linkQuery).length>0){var e=this.linkQuery,s=e.data,a=e.to,n=e.value,i=e.gaslimit,o=e.gas,r=e.tokensymbol,c=r?t.find(function(t){return t.symbol.toLowerCase()===r.toLowerCase()}):void 0;this.toAmt=n?new y.a(n).toFixed():0,this.toData=s&&_["c"].validateHexString(s)?s:"",this.address=a||"",this.gasLimit=i?new y.a(i).toString():"21000",this.localGasPrice=o?new y.a(o).toFixed():0,this.selectedCoinType=c||this.selectedCoinType,_["d"].responseHandler("Form has been prefilled. Please proceed with caution!",_["d"].WARN),this.$store.dispatch("saveQueryVal",{})}},toAmt:function(t){this.createDataHex(t,null,null)},address:function(t){this.validAddress&&this.createDataHex(null,t,null)},selectedCoinType:function(t){this.createDataHex(null,null,t)}},methods:{debouncedAmount:N.a._.debounce(function(t){var e=this.network.type.currencyName,s=this.selectedCoinType.symbol===e?18:parseInt(this.selectedCoinType.decimals);this.toAmt=t.target.valueAsNumber<0||isNaN(t.target.valueAsNumber)?0:new y.a(t.target.valueAsNumber).decimalPlaces(s).toFixed()},300),createDataHex:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,s,a){var n,i,o,r,c,l,d,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=null!==e?e:this.toAmt,i=null!==s?s:this.address,o=null!==a?a:this.selectedCoinType,r=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],c=this.network.type.currencyName,o.symbol!==c&&""!==i&&(l=""===n||null===n?"0":n,d=new this.web3.eth.Contract(r,o.address),u=new y.a(l).times(new y.a(10).pow(o.decimals)),this.toData=d.methods.transfer(i,u.toFixed()).encodeABI());case 6:case"end":return t.stop()}},t,this)}));function e(e,s,a){return t.apply(this,arguments)}return e}(),copyToAddress:function(){var t=this.$refs.toaddress;t.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,s=new FileReader;s.onloadend=function(s){try{var a=JSON.parse(s.target.result);e.localGasPrice=w["fromWei"](a.gasPrice,"gwei"),e.localNonce=a.nonce}catch(t){_["d"].responseHandler(t,_["d"].WARN)}},s.readAsBinaryString(t.target.files[0])},generateTx:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s,a,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.network.type.currencyName,s=this.selectedCoinType.symbol!==e,a=w["toWei"](this.toAmt,"ether"),n={nonce:_["c"].sanitizeHex(new y.a(this.localNonce).toString(16)),gasLimit:_["c"].sanitizeHex(new y.a(this.gasLimit).toString(16)),gasPrice:_["c"].sanitizeHex(new y.a(w["toWei"](this.localGasPrice,"gwei")).toString(16)),to:s?this.selectedCoinType.address:this.address.toLowerCase().trim(),value:s?0:a,data:this.toData,chainId:this.network.type.chainID},this.raw=n,t.next=7,this.wallet.signTransaction(this.raw);case 7:i=t.sent,this.signed=JSON.stringify(i),this.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setSelectedCurrency:function(t){var e=this.network.type.currencyName;this.selectedCoinType=t,t.symbol===e&&(this.toData="0x")}}},S=j,$=(s("e248e"),Object(h["a"])(S,a,n,!1,null,"2f8831ce",null)),D=$.exports;s.d(e,"default",function(){return D})},"2f6b":function(t,e,s){},e248e:function(t,e,s){"use strict";var a=s("fc62"),n=s.n(a);n.a},f762:function(t,e,s){"use strict";var a=s("2f6b"),n=s.n(a);n.a},fc62:function(t,e,s){}}]);
//# sourceMappingURL=chunk-803c4ed2.ebb82a69.js.map