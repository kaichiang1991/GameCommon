(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0187":function(e,t,a){},"031a":function(e,t,a){"use strict";a("33df")},"12a8":function(e,t,a){"use strict";a("0187")},"1e00":function(e,t,a){},"33df":function(e,t,a){},"416d":function(e,t,a){"use strict";var n=a("d874"),i=a.n(n);t["default"]=i.a},4360:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"setGameID",(function(){return b})),a.d(n,"setLanguage",(function(){return p})),a.d(n,"setContentView",(function(){return h})),a.d(n,"setLoading",(function(){return D})),a.d(n,"setApiURL",(function(){return v})),a.d(n,"appInit",(function(){return j})),a.d(n,"setMultiple",(function(){return T}));var i=a("2b0e"),r=a("2f62"),o={SET_GAMEID:function(e,t){e.gameID=t},SET_LANGUAGE:function(e,t){e.language=t},SET_CONTENT_VIEW:function(e,t){e.contentView=t},SET_LOADING:function(e,t){e.loading=t},SET_API_URL:function(e,t){e.apiURL=t},APP_TOKEN:function(e,t){e.gameToken=t},SET_MULTIPLE:function(e,t){e.multiple=t}},s={gameID:function(e){return e.gameID},language:function(e){return e.language},loading:function(e){return e.loading},apiURL:function(e){return e.apiURL},contentView:function(e){return e.contentView},openMode:function(e){return e.openMode},multiple:function(e){return e.multiple}},c=s,u="SET_CONTENT_VIEW",l="SET_GAMEID",m="SET_LANGUAGE",A="SET_LOADING",d="SET_API_URL",f="APP_INIT",g="SET_MULTIPLE",b=function(e,t){var a=e.commit;a(l,t)},p=function(e,t){var a=e.commit;a(m,t)},h=function(e,t){var a=e.commit;a(u,t)},D=function(e,t){var a=e.commit;a(A,t)},v=function(e,t){var a=e.commit;a(d,t)},j=function(e,t){var a=e.commit;a(f,t)},T=function(e,t){var a=e.commit;a(g,t)},_=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ac1f"),a("841c"),a("1276"),a("cf45"));function y(){var e,t,a,n,i,r,o=new URLSearchParams(document.location.search.substring(1)),s=o.get("s");return s?(a="https://".concat(Object(_["b"])(s)),n="Detail",t=o.get("language"),i=o.get("token"),r="platform"):(a="https://".concat(parent.Entry.getDetail.betQuery),e=parent.Entry.getDetail.gameCode,t=parent.Entry.getDetail.gameLanguage,i=parent.Entry.getDetail.gameToken,n="List",r="game"),{gameCode:e,gameLanguage:t,apiURL:a,contentView:n,gameToken:i,openMode:r}}i["default"].use(r["a"]);var k=y(),w=k.gameCode,L=k.gameLanguage,G=k.apiURL,B=k.contentView,N=k.gameToken,I=k.openMode,S={gameID:w,gameToken:N,language:L,loading:!1,apiURL:G,contentView:B,openMode:I,multiple:0};t["a"]=new r["a"].Store({state:S,mutations:o,getters:c,actions:n})},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="4678"},"4b95":function(e,t,a){"use strict";a("1e00")},"6c73":function(e,t,a){},9923:function(e,t,a){"use strict";var n=a("2b0e"),i=a("a925"),r=a("4360"),o=a("bea0");n["default"].use(i["a"]);var s=o.en,c=o.tw,u=o.cn,l=o.vi,m=o.th,A=o.id,d=o.ko,f={en:s,"zh-tw":c,"zh-cn":u,ko:d,th:m,id:A,vi:l},g=new i["a"]({locale:r["a"].getters.language,silentTranslationWarn:!0,messages:f});t["a"]=g},b175:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},["game"===e.openMode?n("a",{attrs:{id:"close"},on:{click:function(t){return t.preventDefault(),e.close()}}},[n("img",{attrs:{src:a("d991"),alt:""}})]):e._e(),n("keep-alive",{attrs:{include:"List"}},[n(e.contentView,{tag:"component",attrs:{infoData:e.infoData,rowData:e.rowData},on:{detailPage:e.detailPage}})],1),e.loading?n("div",{attrs:{id:"loader"}}):e._e()],1)},i=[],r=a("5530"),o=a("2f62"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"list"}},[a("div",{staticClass:"header"},[a("h1",{staticClass:"title"},[e._v(e._s(e.$t("BetHistory")))]),a("ul",{staticClass:"form-style"},[a("li",[a("div",{staticClass:"dataTime"},[a("label",{staticClass:"label-title"},[e._v(e._s(e.$t("SearchDate")))]),a("el-date-picker",{attrs:{type:"date",editable:!1,clearable:!1,"picker-options":e.pickerOptions,placeholder:e.$t("StartDate")},model:{value:e.searchDate[0],callback:function(t){e.$set(e.searchDate,0,t)},expression:"searchDate[0]"}}),a("label",[e._v(e._s(e.$t("To")))]),a("el-date-picker",{attrs:{type:"date",editable:!1,clearable:!1,"picker-options":e.pickerOptions,placeholder:e.$t("EndDate")},model:{value:e.searchDate[1],callback:function(t){e.$set(e.searchDate,1,t)},expression:"searchDate[1]"}}),a("el-button",{staticClass:"gary",on:{click:function(t){return t.preventDefault(),e.searchListByDate.apply(null,arguments)}}},[e._v(e._s(e.$t("Search")))])],1)]),a("li",[a("div",{staticClass:"inputText"},[a("label",{staticClass:"label-title"},[e._v(e._s(e.$t("IDSearch")))]),a("el-input",{model:{value:e.condition.itemNumber,callback:function(t){e.$set(e.condition,"itemNumber",t)},expression:"condition.itemNumber"}}),a("el-button",{staticClass:"gary",on:{click:function(t){return t.preventDefault(),e.getListByID.apply(null,arguments)}}},[e._v(e._s(e.$t("Search")))])],1)])]),a("p",{staticClass:"betPrompt"},[a("i",{staticClass:"el-icon-info"}),e._v(e._s(e.$t("BetPrompt")))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"data-list"},[a("ul",{staticClass:"_head"},[a("li",[e._v(e._s(e.$t("RoundID")))]),a("li",[e._v(e._s(e.$t("DateTime")))]),a("li",[e._v(e._s(e.$t("BetTotal")))]),a("li",[e._v(e._s(e.$t("TotalWin")))])]),a("ol",{staticClass:"_list",attrs:{"data-none":e.$t("nodata")}},e._l(e.dataList,(function(t,n){return a("li",{key:n,staticClass:"item",on:{click:function(a){return e.$emit("detailPage",{view:"Detail",row:t,info:{userName:e.userName,gameName:e.gameName}})}}},[a("div",{attrs:{"data-label":e.$t("RoundID")}},[a("span",{staticClass:"txt-underline"},[e._v(e._s(t.round_code))])]),a("div",{attrs:{"data-label":e.$t("DateTime")}},[a("span",[e._v(e._s(t.bet_time))])]),a("div",{attrs:{"data-label":e.$t("BetTotal")}},[a("span",[e._v(e._s(t.bet))])]),a("div",{attrs:{"data-label":e.$t("TotalWin")}},[a("span",[e._v(e._s(t.win))])])])})),0)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.pagination.listTotal>0,expression:"pagination.listTotal > 0"}],staticClass:"footer"},[a("pagination",{attrs:{pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t},prevPage:e.prevPage,nextPage:e.nextPage,changePage:e.changePage}})],1)])},c=[],u=a("1da1"),l=(a("96cf"),a("fb6a"),a("d81d"),a("c1df")),m=a.n(l),A=(a("d3b7"),a("bc3a")),d=a.n(A),f=a("4360"),g=d.a.create({baseURL:f["a"].getters.apiURL,withCredentials:!1,timeout:6e4});g.interceptors.request.use((function(e){return f["a"].commit("SET_LOADING",!0),e}),(function(e){return Promise.reject(e)})),g.interceptors.response.use((function(e){var t=e.data;return f["a"].commit("SET_LOADING",!1),t}),(function(e){return e.response,f["a"].commit("SET_LOADING",!1),Promise.reject(e)}));var b=g;function p(e){return b({url:"/slot/betsummarys",method:"post",data:e})}var h=a("cf45"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-button",{staticClass:"gary",attrs:{icon:"el-icon-arrow-left",disabled:1==e.pagination.currPage},on:{click:function(t){return e.$emit("prevPage")}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pagination.currPage,expression:"pagination.currPage"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.pagination,"currPage",t.target.multiple?a:a[0])},function(t){return e.$emit("changePage")}]}},e._l(e.pagination.listTotal,(function(t,n){return a("option",{key:n,domProps:{value:n+1}},[e._v(e._s(n+1))])})),0),a("span",{staticClass:"total"},[e._v(e._s(e.pagination.listTotal))]),a("el-button",{staticClass:"gary",attrs:{icon:"el-icon-arrow-right",disabled:e.pagination.currPage==e.pagination.listTotal},on:{click:function(t){return e.$emit("nextPage")}}})],1)},v=[],j={name:"pagination",props:{pagination:{}}},T=j,_=(a("4b95"),a("2877")),y=Object(_["a"])(T,D,v,!1,null,null,null),k=y.exports,w={name:"List",components:{pagination:k},data:function(){var e=this;return{userName:null,gameName:null,condition:{searchType:1,searchStart:null,searchEnd:null,itemNumber:null},searchDate:[],maxDate:m()().format("YYYY-MM-DD"),minDate:m()().add(-6,"days").format("YYYY-MM-DD"),pickerOptions:{disabledDate:function(t){var a=m()(t);return!(!a.isBefore(m()(e.minDate))&&!a.isAfter(m()(e.maxDate)))}},pagination:{currPage:1,listTotal:0,intPerPage:10},dataList:{}}},computed:Object(r["a"])({},Object(o["b"])({gameToken:function(e){return e.gameToken},gameID:function(e){return e.gameID},language:function(e){return e.language}})),methods:{dataFormat:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.userName){a.next=5;break}return t.userName=e.user_name,a.next=4,Object(h["e"])(t.gameID,t.language);case 4:t.gameName=a.sent;case 5:return t.$store.commit("SET_MULTIPLE",e.bet_base),n=e.spin_summarys.slice(0),n.map((function(t){t.bet_time=Object(h["f"])(t.bet_time),t.end_time=Object(h["f"])(t.end_time),t.bet=t.bet/e.money_fraction_multiple,t.win=t.win/e.money_fraction_multiple})),t.pagination.listTotal=Math.ceil(e.total_count/t.pagination.intPerPage),a.abrupt("return",n);case 10:case"end":return a.stop()}}),a)})))()},clearData:function(){this.pagination.listTotal=0,this.dataList={},this.pagination.currPage=1},getListByDate:function(e,t){var a=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var i,r,o,s,c,u,l,A,d,f,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=a.pagination,r=i.currPage,o=i.intPerPage,s=a.condition,c=s.searchStart,u=s.searchEnd,l=e?m()("".concat(e," 00:00:00")).utc().valueOf()/1e3:c||m()("".concat(m()().add(-6,"d").format("YYYY-MM-DD")," 00:00:00")).utc().valueOf()/1e3,A=t?m()("".concat(t," 23:59:59")).utc().valueOf()/1e3:u||m()("".concat(m()().format("YYYY-MM-DD")," 23:59:59")).utc().valueOf()/1e3,a.condition.searchStart=l,a.condition.searchEnd=A,a.condition.searchType=1,d={token:a.gameToken,query_type:1,begin_time:a.condition.searchStart,end_time:a.condition.searchEnd,rows:o,page:r},n.next=9,p(d);case 9:if(f=n.sent,f.spin_summarys){n.next=14;break}a.clearData(),n.next=18;break;case 14:return n.next=16,a.dataFormat(f);case 16:g=n.sent,a.dataList=g;case 18:case"end":return n.stop()}}),n)})))()},searchListByDate:function(){if(!this.searchDate[0]||!this.searchDate[1])return!1;if(m()(this.searchDate[0]).isAfter(m()(this.searchDate[1]))){var e=this.searchDate[1],t=this.searchDate[0];this.searchDate=[e,t]}this.pagination.currPage=1,this.getListByDate(m()(this.searchDate[0]).format("YYYY-MM-DD"),m()(this.searchDate[1]).format("YYYY-MM-DD"))},getListByID:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.pagination,n=a.currPage,i=a.intPerPage,r=e.condition.itemNumber,e.condition.searchType=0,e.pagination.currPage=1,o={token:e.gameToken,round_code:r,query_type:0,rows:i,page:n},t.next=6,p(o);case 6:if(s=t.sent,s.spin_summarys){t.next=11;break}e.clearData(),t.next=15;break;case 11:return t.next=13,e.dataFormat(s);case 13:c=t.sent,e.dataList=c;case 15:case"end":return t.stop()}}),t)})))()},prevPage:function(){this.pagination.currPage-=1,1==this.condition.searchType?this.getListByDate():this.getListByID()},nextPage:function(){this.pagination.currPage+=1,1==this.condition.searchType?this.getListByDate():this.getListByID()},changePage:function(){1==this.condition.searchType?this.getListByDate():this.getListByID()}},created:function(){this.getListByDate()}},L=w,G=(a("031a"),a("b25f")),B=Object(_["a"])(L,s,c,!1,null,"1e4ef44e",null);"function"===typeof G["default"]&&Object(G["default"])(B);var N=B.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"detail"}},[a("div",{staticClass:"header"},[a("h1",[e._v(e._s(e.$t("DetailTitle")))]),a("h2",[e._v(e._s(e.$t("Game"))+"："+e._s(e.info.gameName))]),a("table",{staticClass:"table-style summary"},[a("thead",[a("tr",[a("th",[e._v(e._s(e.$t("RoundID")))]),a("th",[e._v(e._s(e.$t("UserAccount")))]),a("th",[e._v(e._s(e.$t("Denom")))]),a("th",[e._v(e._s(e.$t("Currency")))])])]),a("tbody",[a("tr",[a("td",{attrs:{"data-label":e.$t("RoundID")}},[a("span",[e._v(e._s(e.info.roundId))])]),a("td",{attrs:{"data-label":e.$t("UserAccount")}},[a("span",[e._v(e._s(e.info.account))])]),a("td",{attrs:{"data-label":e.$t("Denom")}},[a("span",[e._v(e._s(e.info.denom))])]),a("td",{attrs:{"data-label":e.$t("Currency")}},[a("span",[e._v(e._s(e.info.currency))])])])])]),a("h2",[e._v(e._s(e.$t("RoundDetail")))]),a("table",{staticClass:"table-style result"},[a("thead",[a("tr",[a("th",[e._v(e._s(e.$t("time")))]),a("th",[e._v(e._s(e.$t("conduct")))]),a("th",[e._v(e._s(e.$t("amount")))]),a("th")])]),a("tbody",[a("tr",[a("td",{attrs:{"data-label":e.$t("time")}},[a("span",[e._v(e._s(e.info.betTime))])]),a("td",{attrs:{"data-label":e.$t("conduct")}},[a("span",[e._v(e._s(e.$t("BetTotal")))])]),a("td",{attrs:{"data-label":e.$t("amount")}},[a("span",[e._v(e._s(e.info.amount))])]),a("td")]),a("tr",[a("td",{attrs:{"data-label":e.$t("time")}},[a("span",[e._v(e._s(e.info.endTime))])]),a("td",{attrs:{"data-label":e.$t("conduct")}},[a("span",[e._v(e._s(e.$t("WinTotal")))])]),a("td",{attrs:{"data-label":e.$t("amount")}},[a("span",[e._v(e._s(e.info.winAmount))])]),a("td")])])])]),a("div",{staticClass:"content"},[e.spinData?a("Content",{attrs:{spinData:e.spinData,summary:e.summary}}):e._e()],1)])},S=[];a("3ca3"),a("ddb0");function C(e){return b({url:"/slot/betdetail",method:"post",data:e})}function P(e){return b({url:"/slot/betdetail_token",method:"post",data:e})}var O={name:"Detail",components:{Content:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",a("c67e")("./"+f["a"].getters.gameID+"/spinDetails.vue"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},props:{infoData:{typeof:Object,default:null},rowData:{typeof:Object,default:null}},data:function(){return{info:{roundId:null,account:null,denom:null,currency:null,betTime:null,endTime:null,amount:null,winAmount:null,gameName:""},summary:{money_fraction_multiple:0,bet_multiple:0,bet:0},spinData:null}},computed:Object(r["a"])({},Object(o["b"])({gameToken:function(e){return e.gameToken},gameID:function(e){return e.gameID},contentView:function(e){return e.contentView},language:function(e){return e.language},openMode:function(e){return e.openMode}})),methods:{getGameDetail:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={token:e.gameToken,round_code:e.rowData.round_code},t.next=3,C(a);case 3:n=t.sent,e.spinData=n.spin_details,e.info.currency=n.currency_code,e.summary={money_fraction_multiple:n.money_fraction_multiple,bet_multiple:n.spin_summary.bet_multiple,bet:n.spin_summary.bet};case 7:case"end":return t.stop()}}),t)})))()},getPlatformDetail:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,o,s,c,u,l,m,A,d,f,g,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={token:e.gameToken},t.next=3,P(a);case 3:return n=t.sent,i=n.currency_code,r=n.bet_base,o=n.game_code,s=n.user_name,c=n.money_fraction_multiple,u=n.spin_summary,l=u.round_code,m=u.denom,A=u.bet_time,d=u.end_time,f=u.bet,g=u.win,b=u.bet_multiple,e.$store.commit("SET_GAMEID",o),e.$store.commit("SET_MULTIPLE",r),t.t0=l,t.t1=s,t.t2=Object(h["c"])(m),t.t3=i,t.t4=Object(h["f"])(A),t.t5=Object(h["f"])(d),t.t6=f/c,t.t7=g/c,t.next=17,Object(h["e"])(o,e.language);case 17:t.t8=t.sent,e.info={roundId:t.t0,account:t.t1,denom:t.t2,currency:t.t3,betTime:t.t4,endTime:t.t5,amount:t.t6,winAmount:t.t7,gameName:t.t8},e.summary={money_fraction_multiple:c,bet_multiple:b,bet:f},e.spinData=n.spin_details;case 21:case"end":return t.stop()}}),t)})))()}},mounted:function(){},created:function(){if("game"===this.openMode){var e=this.rowData,t=e.round_code,a=e.denom,n=e.bet_time,i=e.end_time,r=e.bet,o=e.win,s=this.infoData,c=s.userName,u=s.gameName;this.info={roundId:t,account:c,denom:Object(h["c"])(a),betTime:n,endTime:i,amount:r,winAmount:o,gameName:u},this.getGameDetail()}else this.getPlatformDetail()}},E=O,R=(a("12a8"),a("416d")),M=Object(_["a"])(E,I,S,!1,null,"3d15d1e2",null);"function"===typeof R["default"]&&Object(R["default"])(M);var x=M.exports,F={name:"Main",components:{List:N,Detail:x},data:function(){return{infoData:null,rowData:null}},computed:Object(r["a"])({},Object(o["b"])({loading:function(e){return e.loading},contentView:function(e){return e.contentView},openMode:function(e){return e.openMode}})),methods:{detailPage:function(e){this.infoData=e.info,this.rowData=e.row,this.$store.commit("SET_CONTENT_VIEW",e.view)},close:function(){"List"==this.contentView?parent.EventHandler&&parent.EventHandler.dispatch(parent.eEventName.closeWindow):this.$store.commit("SET_CONTENT_VIEW","List")}}},U=F,z=(a("eb13"),Object(_["a"])(U,n,i,!1,null,null,null));t["a"]=z.exports},b25f:function(e,t,a){"use strict";var n=a("cac0"),i=a.n(n);t["default"]=i.a},bea0:function(e){e.exports=JSON.parse('{"en":{"BetHistory":"Bet History","RoundID":"Round Num","BetTotal":"Total Bet","WinTotal":"Total Win","GameScreen":"Game Screen"},"tw":{"BetHistory":"投注紀錄","RoundID":"單號","BetTotal":"投注額","WinTotal":"贏分","GameScreen":"遊戲盤面"},"cn":{"BetHistory":"投注纪录","RoundID":"单号","BetTotal":"投注额","WinTotal":"赢分","GameScreen":"游戏盘面"},"id":{"BetHistory":"Catatan taruhan","RoundID":"ID","BetTotal":"Total taruhan","WinTotal":"Total poin kemenangan","GameScreen":"Layar Permainan"},"ko":{"BetHistory":"베팅 기록","RoundID":"ID번호","BetTotal":"베팅 금액","WinTotal":"총 윈 포인트","GameScreen":"게임 화면"},"th":{"BetHistory":"บันทึกการเดิมพัน","RoundID":"ปัดเศษ ไอดี","BetTotal":"คะแนนเดิมพันโดยรวม","WinTotal":"คะแนนชนะ","GameScreen":"หน้าจอเกม"},"vi":{"BetHistory":"Lịch sử đặt cược","RoundID":"Số đơn","BetTotal":"Tổng số đặt cược","WinTotal":"Điểm thắng","BonusGame":"Màn hình trò chơi"}}')},c67e:function(e,t,a){var n={"./BN80/spinDetails.vue":["d882","chunk-75e0ce0c","chunk-9a84418e"],"./BN82/spinDetails.vue":["38c5","chunk-75e0ce0c","chunk-6608de13"],"./BN84/spinDetails.vue":["bcbc","chunk-75e0ce0c","chunk-478e57d8"]};function i(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(i)}))}i.keys=function(){return Object.keys(n)},i.id="c67e",e.exports=i},cac0:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"DateTime":"Date & Time","TotalWin":"Total Win","StartDate":"Start Time","EndDate":"End Time","SearchDate":"Search Date","IDSearch":"ID Search","BetPrompt":"Reserve Near 7 Days records","Search":"Search","To":"To","nodata":"No data"},"tw":{"DateTime":"時間日期","TotalWin":"總贏分","StartDate":"開始日期","EndDate":"結束日期","SearchDate":"日期查找","IDSearch":"單號查找","BetPrompt":"保留近7日內紀錄","Search":"搜尋","To":"至","nodata":"無資料"},"zh-cn":{"DateTime":"时间日期","TotalWin":"总赢分","StartDate":"开始日期","EndDate":"结束日期","SearchDate":"日期查找","IDSearch":"单号查找","BetPrompt":"保留近7日内纪录","Search":"搜寻","To":"至","nodata":"无资料"},"id":{"DateTime":"Tanggal & Waktu","TotalWin":"Total poin kemenangan","StartDate":"Tanggal mulai","EndDate":"Tanggal berakhir","SearchDate":"Pencarian tanggal","IDSearch":"Pencarian ID","BetPrompt":"Simpan catatan dalam 7 hari","Search":"Pencarian","To":"sampai","nodata":"Tidak ada data"},"ko":{"DateTime":"시간 날짜","TotalWin":"총 윈 포인트","StartDate":"시작시간","EndDate":"종료날짜","SearchDate":"날짜 검색","IDSearch":"ID 검색","BetPrompt":"7일 내의 기록 보류","Search":"검색","To":"까지","nodata":"데이터 없음"},"th":{"DateTime":"เวลาและวันที่","TotalWin":"คะแนนชนะโดยรวม","StartDate":"วันที่เริ่ม","EndDate":"วันที่สิ้นสุด","SearchDate":"ค้นหาวันที่","IDSearch":"ค้นหา ไอดี","BetPrompt":"เก็บบันทึกภายใน 7 วันที่ผ่านมา","Search":"ค้นหา","To":"ไปยัง","nodata":"ไม่มีข้อมูล"},"vi":{"DateTime":"Ngày giờ","TotalWin":"Tổng điểm thắng","StartDate":"Bắt đầu ngày tháng","EndDate":"Ngừng lại ngày tháng","SearchDate":"Ngày tháng Kiểm tra","IDSearch":"Tìm kiếm số đơn","BetPrompt":"Lưu hồ sơ 7 ngày gần nhất","Search":"Tìm kiếm","To":"Tới","nodata":"Không có thông tin"}}'),delete e.options._Ctor}},cf45:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"f",(function(){return m})),a.d(t,"e",(function(){return A})),a.d(t,"d",(function(){return d}));a("d81d"),a("a9e3"),a("99af"),a("7db0"),a("ac1f"),a("1276");var n=a("bc3a"),i=a.n(n),r=a("c1df"),o=a.n(r),s=a("4128");function c(e){var t=window.atob(decodeURIComponent(e));return t}function u(e){return Number(s["Decimal"].mul(e||0,.01))}function l(e,t,a){var n=Number(s["Decimal"].div(e,t));return Number(s["Decimal"].div(n,a))}function m(e){return o()(1e3*e).utcOffset(-240).format()}function A(e,t){var a="".concat(window.location.origin).concat("/game/gameList.json");return i.a.get(a).then((function(a){var n=a.data,i=n.GameNames.find((function(t){return t.ID==Number(e.split("BN")[1])})).Names;return i.find((function(e){return e.lang==t})).Name})).catch((function(e){console.log(e)}))}function d(e){var t={0:"NormalGame",1:"FreeGame",2:"BonusGame",3:"FeatureGame",4:"LuckyDraw",5:"DoubleGame"},a=t[e];return a}},d874:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"DetailTitle":"GameDetail","Game":"Game","UserAccount":"User Account","AgentAccount":"Agent Account","Denom":"Denom","Currency":"Currency","RoundDetail":"Round Detail","time":"Time","conduct":"Conduct","amount":"Amount","NormalGame":"Normal Game","FreeGame":"Free Game","BonusGame":"Bonus Game","FeatureGame":"Feature Game","LuckyDraw":"Lucky Draw","DoubleGame":"Double Game","Payout":"Payout","BetLevel":"Bet Bevel","TotalWinLines":"Total Win Lines","LineImage":"Line Image","LineCount":"Line Count","Symbol":"Symbol","Multiplier":"Multiple","":""},"tw":{"DetailTitle":"遊戲細單","Game":"遊戲","UserAccount":"玩家帳號","AgentAccount":"代理帳號","Denom":"投注比例","Currency":"幣別","RoundDetail":"遊戲結果","time":"時間","conduct":"行為","amount":"金額","NormalGame":"主遊戲","FreeGame":"免費遊戲","BonusGame":"紅利遊戲","FeatureGame":"特色遊戲","LuckyDraw":"幸運遊戲","DoubleGame":"Double Game","Payout":"派彩","BetLevel":"押注乘數","TotalWinLines":"總連線數目","LineImage":"線數圖","LineCount":"幾連線","Symbol":"符號","Multiplier":"倍率","":""},"zh-cn":{"DetailTitle":"游戏细单","Game":"游戏","UserAccount":"玩家账号","AgentAccount":"代理账号","Denom":"投注比例","Currency":"币别","RoundDetail":"游戏结果","time":"时间","conduct":"行为","amount":"金额","NormalGame":"主游戏","FreeGame":"免费游戏","BonusGame":"红利游戏","FeatureGame":"特色游戏","LuckyDraw":"幸运游戏","DoubleGame":"Double Game","Payout":"派彩","BetLevel":"押注乘数","TotalWinLines":"总连线数目","LineImage":"线数图","LineCount":"几连线","Symbol":"符号","Multiplier":"倍率","":""},"id":{"DetailTitle":"Detail permainan","Game":"Permainan","UserAccount":"Akun pemain","AgentAccount":"Akun agen","Denom":"Rasio taruhan","Currency":"Mata uang","RoundDetail":"Hasil Permainan","time":"Waktu","conduct":"Kegiatan","amount":"Jumlah","NormalGame":"Permainan utama","FreeGame":"Permainan gratis","BonusGame":"Permainan bonus","FeatureGame":"Feature Game","LuckyDraw":"Lucky Draw","DoubleGame":"Double Game","Payout":"Pembayaran","BetLevel":"Kelipatan taruhan","TotalWinLines":"Total garis yang terkoneksi","LineImage":"Gambar jumlah garis","LineCount":"Jumlah garis kemenangan","Symbol":"Simbol","Multiplier":"Kelipatan","":""},"ko":{"DetailTitle":"게임 상세 내역","Game":"게임","UserAccount":"유저 계좌","AgentAccount":"에이전트 계좌","Denom":"베팅 비율","Currency":"화폐","RoundDetail":"게임결과","time":"시간","conduct":"행위","amount":"금액","NormalGame":"메인 게임","FreeGame":"프리 게임","BonusGame":"보너스 게임","FeatureGame":"Feature Game","LuckyDraw":"Lucky Draw","DoubleGame":"Double Game","Payout":"페이 아웃","BetLevel":"베팅 승수","TotalWinLines":"총 라인 수","LineImage":"라인 수 도면","LineCount":"라인 카운트","Symbol":"부호","Multiplier":"배수","":""},"th":{"DetailTitle":"รายละเอียดเกม","Game":"เกม","UserAccount":"บัญชีผู้เล่น","AgentAccount":"บัญชีตัวแทน","Denom":"อัตราส่วนการเดิมพัน","Currency":"เงินตรา","RoundDetail":"ผลลัพธ์ของเกม","time":"เวลา","conduct":"พฤติกรรม","amount":"จำนวนเงิน","NormalGame":"เกมหลัก","FreeGame":"เกมฟรี","BonusGame":"เกมโบนัส","FeatureGame":"Feature Game","LuckyDraw":"Lucky Draw","DoubleGame":"Double Game","Payout":"การจ่ายเงิน","BetLevel":"เดิมพันทวีคูณ","TotalWinLines":"จำนวนการเชื่อมต่อทั้งหมด","LineImage":"ภาพเส้น","LineCount":"กี่เชื่อมต่อ","Symbol":"สัญลักษณ์","Multiplier":"อัตราตัวคูณ","":""},"vi":{"DetailTitle":"Chi tiết trò chơi","Game":"Trò chơi","UserAccount":"Tài khoản người chơi","AgentAccount":"Tài khoản đại lý","Denom":"Tỷ lệ đặt cược","Currency":"Tiền tệ","RoundDetail":"Kết quả trò chơi","time":"Thời gian","conduct":"Hành vi","amount":"Số tiền","NormalGame":"Trò chơi chính","FreeGame":"Trò chơi miễn phí","FeatureGame":"Feature Game","LuckyDraw":"Lucky Draw","DoubleGame":"Double Game","Payout":"Trả thưởng","BetLevel":"Số nhân đặt cược","TotalWinLines":"Tổng cộng bao nhiêu số","LineImage":"Bản đồ số dùng","LineCount":"Bao nhiêu cọng dây","Symbol":"Biểu tượng","Multiplier":"Độ phóng đại","":""}}'),delete e.options._Ctor}},d991:function(e,t){e.exports="data:image/png;base64,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"},eb13:function(e,t,a){"use strict";a("6c73")}}]);