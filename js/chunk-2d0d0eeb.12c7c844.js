(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0eeb"],{"69a3":function(t,e,n){"use strict";n.r(e);var a,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("notify",{ref:"notify"}),n("section",{staticClass:"main"},[n("div",{staticClass:"farms-cont"},[n("div",{staticClass:"table farms-table"},[n("table",[n("thead",[n("tr",[n("td",[t._v(t._s(t.$t("质押币种")))]),n("td",[t._v(t._s(t.$t("我的质押")))]),n("td",[t._v(t._s(t.$t("可领取收益")))]),n("td",[t._v(t._s(t.$t("可领取收益")))]),n("td"),n("td")])]),n("tbody",t._l(t.stakingInfo,(function(e,a){return n("tr",{key:a},[n("td",[n("em",{staticClass:"ico-coin-scepter"}),"lp"===e.name?n("i",{staticClass:"ico-coin-mgp"}):t._e(),t._v(" "+t._s("xmast"===e.name?"XMAST":"MAST-MGP-LP")+" ")]),n("td",[t._v(" "+t._s(t._f("toFixed")(t._f("toAmount")(e.userStake),4))+" ")]),n("td",[t._v(t._s(t._f("toFixed")(t._f("toAmount")(e.income[0]),8))+" MGP")]),n("td",[t._v(t._s(t._f("toFixed")(t._f("toAmount")(e.income[1]),8))+" MAST")]),n("td",[n("a",{staticClass:"btn",on:{click:function(n){return t.$router.push({path:"/stake",query:{coin:e.name}})}}},[t._v(t._s(t.$t("查看详情"))+" ")])]),n("td",[n("a",{staticClass:"btn",attrs:{href:t.lpUrl(e),target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.$t("获取方式"))+" ")])])])})),0)])])])])],1)},i=[],o=n("4f96"),r=n("1da1"),c=n("ade3"),d=(n("96cf"),n("b0c0"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("fb6a"),n("ee7a")),u=(n("901e"),n("ed08"),n("c1df"),{name:"StakeHome",components:{Notify:d["a"]},watch:(a={},Object(c["a"])(a,"$store.state.walletAddress",(function(){this.init()})),Object(c["a"])(a,"$route",(function(){this.stakeToken=this.$route.query.coin})),Object(c["a"])(a,"stakeToken",(function(){this.init()})),a),data:function(){return{stakingInfo:[]}},methods:{lpUrl:function(t){if("xmast"===t.name)return"https://mast.magic-cube.finance/#/pool?coin=mast";if(4===this.$api.getReadConnect().addressInfo.chainId)return"https://app.uniswap.org/#/add/v2/".concat(this.$api.getReadConnect().addressInfo.mgp,"/").concat(this.$api.getReadConnect().addressInfo.mast);var e=function(t){return t};return"https://pancakeswap.finance/add/".concat(e(this.$api.getReadConnect().addressInfo.mgp),"/").concat(e(this.$api.getReadConnect().addressInfo.mast))},init:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=!(t.length>0&&void 0!==t[0])||t[0],a&&e.$loading.show(),n.prev=2,n.next=5,Promise.all([e.$api.getConnect().tradeApi().stakeInfo("xmast",e.$store.state.walletAddress),e.$api.getConnect().tradeApi().stakeInfo("lp",e.$store.state.walletAddress)]);case 5:s=n.sent,i=Object(o["a"])(s),r=i.slice(0),e.stakingInfo=r;case 9:return n.prev=9,a&&e.$loading.hide(),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[2,,9,12]])})))()}},mounted:function(){this.stakeToken=this.$route.query.coin,this.init()},created:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),f=u,p=n("2877"),l=Object(p["a"])(f,s,i,!1,null,"4b43bd68",null);e["default"]=l.exports}}]);