(function(n){function t(t){for(var A,o,i=t[0],s=t[1],u=t[2],p=0,l=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(A in s)Object.prototype.hasOwnProperty.call(s,A)&&(n[A]=s[A]);c&&c(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],A=!0,i=1;i<e.length;i++){var s=e[i];0!==r[s]&&(A=!1)}A&&(a.splice(t--,1),n=o(o.s=e[0]))}return n}var A={},r={BN82:0},a=[];function o(t){if(A[t])return A[t].exports;var e=A[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=A,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var A in n)o.d(e,A,function(t){return n[t]}.bind(null,A));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;a.push([1,"chunk-vendors"]),e()})({"02bc":function(n,t,e){n.exports=e.p+"img/11.3583836e.png"},1:function(n,t,e){n.exports=e("4820")},"141d":function(n,t,e){n.exports=e.p+"img/3.641571ab.png"},"17ec":function(n){n.exports=JSON.parse('{"0":{"1":[0,0,75,150,400],"2":[0,0,50,150,300],"3":[0,0,40,100,250],"4":[0,0,30,100,200],"11":[0,0,15,30,125],"12":[0,0,15,30,125],"13":[0,0,10,20,100],"14":[0,0,10,20,100],"21":[0,0,0,0,0],"31":[0,0,0,0,0,0,0]}}')},"19d7":function(n,t,e){n.exports=e.p+"img/11.81181fd3.png"},2366:function(n,t,e){n.exports=e.p+"img/12.9b09187e.png"},"280d":function(n,t,e){n.exports=e.p+"img/feature.e295556e.jpg"},2938:function(n,t,e){"use strict";e("d66b")},"2da6":function(n,t,e){n.exports=e.p+"img/15.6738ca18.png"},3193:function(n,t,e){n.exports=e.p+"img/31.4e618dbe.png"},"341a":function(n,t,e){n.exports=e.p+"img/1.7f0b044b.png"},4360:function(n,t,e){"use strict";var A={};e.r(A),e.d(A,"setgameID",(function(){return f})),e.d(A,"setLanguage",(function(){return g}));e("ac1f"),e("1276");var r,a,o=e("2b0e"),i=e("2f62"),s={SET_GAMEID:function(n,t){n.gameID=t},SET_LANGUAGE:function(n,t){n.language=t}},u={gameID:function(n){return n.gameID},language:function(n){return n.language}},c=u,p="SET_GAMEID",l="SET_LANGUAGE",f=function(n,t){var e=n.commit;e(p,t)},g=function(n,t){var e=n.commit;e(l,t)};o["a"].use(i["a"]);var m=function(){r=parent.Entry.getDetail.gameCode,a=parent.Entry.getDetail.gameLanguage};m();var d={gameID:r,language:a};t["a"]=new i["a"].Store({state:d,mutations:s,getters:c,actions:A})},"453d":function(n,t,e){n.exports=e.p+"img/1.759d179d.png"},4820:function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var A=e("2b0e"),r=e("4360"),a=e("9923"),o=function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("Layout",[A("div",{attrs:{id:"content"}},[A("section",{attrs:{"data-unit":"paytable"}},[A("h1",{staticClass:"title"},[n._v(n._s(n.$t("paytable")))]),A("p",{staticClass:"txt-center subTitle"},[n._v(n._s(n.$t("winCount_line",[5])))]),A("payList")],1),A("section",{attrs:{"data-unit":"wdfg"}},[A("h1",{staticClass:"title"},[n._v(n._s(n.$t("WildFG")))]),A("div",{staticClass:"item-half-middle"},[A("div",{staticClass:"img-title",attrs:{"data-title":n.$t("Wild")}},[A("img",{staticClass:"img-symbol",attrs:{src:e("4fcd")("./"+n.gameID+"/21.png"),alt:""}}),A("p",{staticClass:"txt-center"},[A("span",{staticClass:"txtColro-primary"},[n._v("3 -")]),n._v(" 50")])]),A("div",[A("i18n",{staticClass:"txt-symbol",attrs:{path:"symbolWild",tag:"p"},scopedSlots:n._u([{key:"symbol",fn:function(){return[A("img",{attrs:{src:e("51fa")("./"+n.gameID+"/31.png"),alt:""}})]},proxy:!0}])})],1)]),A("div",{staticClass:"item-half-middle"},[A("div",{staticClass:"img-title",attrs:{"data-title":n.$t("FG")}},[A("img",{staticClass:"img-symbol",attrs:{src:e("51fa")("./"+n.gameID+"/31.png"),alt:""}})]),A("ol",{staticClass:"listStyle-number"},[A("li",[n._v(n._s(n.$t("symbolFG_1")))]),A("i18n",{staticClass:"txt-symbol",attrs:{path:"symbolFG_2",tag:"li"},scopedSlots:n._u([{key:"num1",fn:function(){return[A("span",{staticClass:"txtColro-primary"},[n._v("3")])]},proxy:!0},{key:"num2",fn:function(){return[A("span",{staticClass:"txtColro-primary"},[n._v("5")])]},proxy:!0},{key:"symbol",fn:function(){return[A("img",{attrs:{src:e("51fa")("./"+n.gameID+"/31.png"),alt:""}})]},proxy:!0}])})],1)])]),A("section",{attrs:{"data-unit":"freegame"}},[A("h1",{staticClass:"title"},[n._v(n._s(n.$t("FGFeatur")))]),A("img",{staticClass:"center",attrs:{src:e("c9a8")("./"+n.gameID+"/feature.jpg"),alt:""}}),A("ol",{staticClass:"listStyle-number"},[A("li",[n._v(n._s(n.$t("FG_1")))]),A("i18n",{attrs:{path:"FG_2",tag:"li"},scopedSlots:n._u([{key:"num",fn:function(){return[A("span",{staticClass:"txtColro-primary"},[n._v("1X 2X 3X 5X 10X")])]},proxy:!0}])}),A("i18n",{staticClass:"txt-symbol",attrs:{path:"FG_3",tag:"li"},scopedSlots:n._u([{key:"num1",fn:function(){return[A("span",{staticClass:"txtColro-primary"},[n._v("3")])]},proxy:!0},{key:"num2",fn:function(){return[A("span",{staticClass:"txtColro-primary"},[n._v("5")])]},proxy:!0},{key:"symbol",fn:function(){return[A("img",{attrs:{src:e("51fa")("./"+n.gameID+"/31.png"),alt:""}})]},proxy:!0}])}),A("i18n",{attrs:{path:"FG_4",tag:"li"},scopedSlots:n._u([{key:"num",fn:function(){return[A("span",{staticClass:"txtColro-primary"},[n._v("15")])]},proxy:!0}])})],1)]),A("section",{attrs:{"data-unit":"winline"}},[A("h1",{staticClass:"title"},[n._v(n._s(n.$t("payTableWays")))]),A("img",{staticClass:"center",attrs:{src:e("d332")("./"+n.gameID+"/line.png"),alt:""}}),A("ol",{staticClass:"listStyle-number"},[A("li",[n._v(n._s(n.$t("ways_1")))]),A("li",[n._v(n._s(n.$t("ways_2")))])])])])])},i=[],s=e("ac0d"),u={name:"BN82",mixins:[s["a"]]},c=u,p=(e("aa4a"),e("2877")),l=e("f624"),f=Object(p["a"])(c,o,i,!1,null,"3ecce2e4",null);"function"===typeof l["default"]&&Object(l["default"])(f);var g=f.exports;A["a"].config.productionTip=!1,new A["a"]({store:r["a"],i18n:a["a"],render:function(n){return n(g)}}).$mount("#app")},"4fcd":function(n,t,e){var A={"./BN80/21.png":"c2b5","./BN82/21.png":"93ae","./BN84/21.png":"f27e"};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(A,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return A[n]}r.keys=function(){return Object.keys(A)},r.resolve=a,n.exports=r,r.id="4fcd"},"50e1":function(n,t,e){n.exports=e.p+"img/11.3d2f5747.png"},"51fa":function(n,t,e){var A={"./BN80/31.png":"5ee5","./BN82/31.png":"3193","./BN84/31.png":"68d7"};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(A,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return A[n]}r.keys=function(){return Object.keys(A)},r.resolve=a,n.exports=r,r.id="51fa"},5313:function(n,t){n.exports=function(n){n.options.__i18n=n.options.__i18n||[],n.options.__i18n.push('{"en":{"symbolWild":"Substitutes for all symbols, except {symbol}.","symbolFG_1":"Appears on every reel.","symbolFG_2":"{num1} {symbol} at any position awards {num2} Free Games.","FG_1":"During Free Game, all wins multiplied by the Bonus Multiplier.","FG_2":"Winning any score will upgrade the Bonus Multiplier in order of {num}, and the Bonus Multiplier will be kept until the end of Free Game.","FG_3":"{num1} {symbol} on any position awards {num2} addtional Free Games.","FG_4":"The maximum round of Free Game is {num}.","ways_1":"Bet lines win if the winning symbols are in succession from the leftmost reel to right.","ways_2":"Only the highest line win is paid on each line played."},"zh-cn":{"symbolWild":"取代{symbol}外的所有符号。","symbolFG_1":"每轮皆会出现免费游戏符号。","symbolFG_2":"盘面出现 {num1} 颗 {symbol} 时，赠送免费游戏 {num2} 场。","FG_1":"免费游戏中的所有赢分，皆会乘上额外奖励倍数。","FG_2":"免费游戏中获得任意赢分时，将会依照{num}的顺序提高奖励倍数，并持续到免费游戏结束。","FG_3":"免费游戏中，盘面出现 {num1} 颗 {symbol} 时，可再获得 {num2} 场免费游戏。","FG_4":"免费游戏场次上限为 {num} 场。","ways_1":"依照赔付线由左至右计算相邻滚轮的符号颗数，并支付该符号对应的奖金。","ways_2":"每条赔付线仅支付最高奖金。"}}'),delete n.options._Ctor}},"548c":function(n,t,e){n.exports=e.p+"img/13.d47bd775.png"},"57fe":function(n,t,e){n.exports=e.p+"img/2.905b3128.png"},5842:function(n,t,e){n.exports=e.p+"img/line.fa9107c9.png"},"5ee5":function(n,t,e){n.exports=e.p+"img/31.24a1bff6.png"},6130:function(n,t,e){n.exports=e.p+"img/line.387717e3.png"},"65ed":function(n,t,e){n.exports=e.p+"img/line.3b6fbcc1.png"},6752:function(n,t,e){n.exports=e.p+"img/3.ed6e2aa1.png"},"68d7":function(n,t,e){n.exports=e.p+"img/31.6bc2d2de.png"},"72ff":function(n,t,e){n.exports=e.p+"img/1.903a9592.png"},7995:function(n,t,e){n.exports=e.p+"img/2.79599a56.png"},"7e8f":function(n,t,e){},8295:function(n,t,e){n.exports=e.p+"img/13.c2e70541.png"},"89d4":function(n){n.exports=JSON.parse('{"0":{"1":[0,0,25],"2":[0,0,20],"3":[0,0,10],"4":[0,0,8],"11":[0,0,5],"12":[0,0,4],"13":[0,0,3],"14":[0,0,2],"21":[0,0,50],"31":[0,0,0]}}')},"928c":function(n,t,e){"use strict";e("7e8f")},"93ae":function(n,t,e){n.exports=e.p+"img/21.bbf39589.png"},9923:function(n,t,e){"use strict";var A=e("2b0e"),r=e("a925"),a=e("4360"),o=e("bea0");A["a"].use(r["a"]);var i={en:o.en,"zh-cn":o.cn},s=new r["a"]({locale:a["a"].getters.language,silentTranslationWarn:!0,messages:i});t["a"]=s},aa4a:function(n,t,e){"use strict";e("f39b")},ac0d:function(n,t,e){"use strict";var A=e("5530"),r=e("2f62"),a=function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{attrs:{id:"app"}},[A("div",{attrs:{id:"main"}},[A("a",{attrs:{id:"close"},on:{click:function(t){return t.preventDefault(),n.close()}}},[A("img",{attrs:{src:e("d991"),alt:""}})]),n._t("default")],2),A("p",{attrs:{id:"declaration"}},[n._v(n._s(n.$t("declaration")))])])},o=[],i={name:"Layout",computed:Object(A["a"])({},Object(r["b"])({gameID:function(n){return n.gameID},language:function(n){return n.language}})),methods:{close:function(){parent.EventHandler.dispatch(parent.eEventName.closeWindow)}},mounted:function(){},created:function(){0}},s=i,u=(e("2938"),e("2877")),c=Object(u["a"])(s,a,o,!1,null,null,null),p=c.exports,l=function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",n._l(n.getOdds(),(function(t,r){return A("ul",{key:r,staticClass:"payList"},n._l(t,(function(t,r){return A("li",{key:r},[A("img",{attrs:{src:e("e078")("./"+n.gameID+"/"+r+".png"),alt:""}}),A("ol",n._l(t,(function(t){return A("li",{key:t.no},[A("h5",[n._v(n._s(t.no))]),A("h6",[n._v(n._s(t.num))])])})),0)])})),0)})),0)},f=[],g=(e("a9e3"),e("4de4"),{name:"payList",components:{},data:function(){return{}},props:{},computed:Object(A["a"])({},Object(r["b"])({gameID:function(n){return n.gameID}})),methods:{getOdds:function(){var n=e("c445")("./".concat(this.gameID,"/odds.json")),t=[];for(var A in n){var r={};for(var a in n[A])Number(a)<=20&&function(){var t=[];n[A][a].filter((function(n,e){n>0&&t.push({no:e+1,num:n})})),t.length>0&&(r[a]=t.reverse())}();t.push(r)}return t}}}),m=g,d=(e("928c"),Object(u["a"])(m,l,f,!1,null,"77db2d40",null)),b=d.exports;t["a"]={components:{Layout:p,payList:b},data:function(){return{}},computed:Object(A["a"])({},Object(r["b"])({gameID:function(n){return n.gameID},language:function(n){return n.language}})),methods:{close:function(){parent.EventHandler.dispatch(parent.eEventName.closeWindow)}},mounted:function(){},created:function(){}}},ae54:function(n,t,e){n.exports=e.p+"img/3.4d13bde3.png"},b182:function(n,t,e){n.exports=e.p+"img/4.7b3942e2.png"},b794:function(n,t,e){n.exports=e.p+"img/feature.93170e94.jpg"},bbe5:function(n,t,e){n.exports=e.p+"img/feature.80ea5490.jpg"},bea0:function(n){n.exports=JSON.parse('{"en":{"paytable":"Paytable","winCount_line":"Win = Odds X Line Bet (Total Bet / {0})","winCount_comb":"Win = Odds X Winning Combinations X Bet (Total Bet / {0})","WildFG":"Wild And Free Game Symbol","FGFeatur":"Game Feature","FG":"Free Game","Wild":"Wild","payTableWays":"Paylines","payTableWays_243":"Pay Rules - 243 Ways","declaration":"Malfunction Voids All Plays And Pays."},"cn":{"paytable":"赔付表","winCount_line":"赢分 = 赔付值 X 单线投注(总投注 / {0})","winCount_comb":"赢分 = 赔付值 X 连线組合 X 投注單位 (总投注 / {0})","WildFG":"百搭和免费游戏符号","FGFeatur":"免费游戏特色","FG":"免费游戏","Wild":"百搭","payTableWays":"赔付线","payTableWays_243":"赔付方式 - 243 路","declaration":"游戏出现故障时，所有游戏和赢分都视为无效。"}}')},c2b5:function(n,t,e){n.exports=e.p+"img/21.26454f69.png"},c445:function(n,t,e){var A={"./BN80/odds.json":"17ec","./BN82/odds.json":"89d4","./BN84/odds.json":"e636"};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(A,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return A[n]}r.keys=function(){return Object.keys(A)},r.resolve=a,n.exports=r,r.id="c445"},c9a8:function(n,t,e){var A={"./BN80/feature.jpg":"280d","./BN82/feature.jpg":"b794","./BN84/feature.jpg":"bbe5"};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(A,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return A[n]}r.keys=function(){return Object.keys(A)},r.resolve=a,n.exports=r,r.id="c9a8"},cbd2:function(n,t){n.exports="data:image/png;base64,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"},cf5c:function(n,t,e){n.exports=e.p+"img/2.2c68f3ec.png"},d332:function(n,t,e){var A={"./BN80/line.png":"5842","./BN82/line.png":"6130","./BN84/line.png":"65ed"};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(A,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return A[n]}r.keys=function(){return Object.keys(A)},r.resolve=a,n.exports=r,r.id="d332"},d66b:function(n,t,e){},d991:function(n,t){n.exports="data:image/png;base64,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"},db86:function(n,t,e){n.exports=e.p+"img/12.31db6307.png"},e078:function(n,t,e){var A={"./BN80/1.png":"72ff","./BN80/11.png":"02bc","./BN80/12.png":"2366","./BN80/13.png":"8295","./BN80/14.png":"f108","./BN80/2.png":"57fe","./BN80/21.png":"c2b5","./BN80/3.png":"6752","./BN80/31.png":"5ee5","./BN80/4.png":"fb46","./BN80/line.png":"5842","./BN82/1.png":"453d","./BN82/11.png":"50e1","./BN82/12.png":"db86","./BN82/13.png":"f4af","./BN82/14.png":"edcc","./BN82/2.png":"7995","./BN82/21.png":"93ae","./BN82/3.png":"141d","./BN82/31.png":"3193","./BN82/4.png":"e587","./BN82/line.png":"6130","./BN84/1.png":"341a","./BN84/11.png":"19d7","./BN84/12.png":"f99d","./BN84/13.png":"548c","./BN84/14.png":"cbd2","./BN84/15.png":"2da6","./BN84/2.png":"cf5c","./BN84/21.png":"f27e","./BN84/3.png":"ae54","./BN84/31.png":"68d7","./BN84/4.png":"b182","./BN84/line.png":"65ed","./close.png":"d991"};function r(n){var t=a(n);return e(t)}function a(n){if(!e.o(A,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return A[n]}r.keys=function(){return Object.keys(A)},r.resolve=a,n.exports=r,r.id="e078"},e587:function(n,t,e){n.exports=e.p+"img/4.11892607.png"},e636:function(n){n.exports=JSON.parse('{"0":{"1":[0,0,100,250,800],"2":[0,0,60,120,350],"3":[0,0,35,80,250],"4":[0,0,20,40,150],"11":[0,0,15,25,100],"12":[0,0,8,15,50],"13":[0,0,8,15,50],"14":[0,0,5,10,50],"15":[0,0,5,10,50],"21":[0,0,0,0,0],"31":[0,0,5,10,50]}}')},edcc:function(n,t,e){n.exports=e.p+"img/14.c3411310.png"},f108:function(n,t,e){n.exports=e.p+"img/14.15fda2e1.png"},f27e:function(n,t,e){n.exports=e.p+"img/21.a0d79ce1.png"},f39b:function(n,t,e){},f4af:function(n,t,e){n.exports=e.p+"img/13.3efb4158.png"},f624:function(n,t,e){"use strict";var A=e("5313"),r=e.n(A);t["default"]=r.a},f99d:function(n,t,e){n.exports=e.p+"img/12.477207f2.png"},fb46:function(n,t,e){n.exports=e.p+"img/4.61442f80.png"}});