(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaoshoutongji/add-or-update"],{"260b":function(n,i,e){"use strict";(function(n){e("ae9b");a(e("66fd"));var i=a(e("cd07"));function a(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},"305d":function(n,i,e){"use strict";e.r(i);var a=e("fb00"),t=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);i["default"]=t.a},"725a":function(n,i,e){"use strict";var a;e.d(i,"b",(function(){return t})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}));var t=function(){var n=this,i=n.$createElement;n._self._c},r=[]},"8ec3":function(n,i,e){},cd07:function(n,i,e){"use strict";e.r(i);var a=e("725a"),t=e("305d");for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);e("e5a1");var o,u=e("f0c5"),c=Object(u["a"])(t["default"],a["b"],a["c"],!1,null,"2009e896",null,!1,a["a"],o);i["default"]=c.exports},e5a1:function(n,i,e){"use strict";var a=e("8ec3"),t=e.n(a);t.a},fb00:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=t(e("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,a,t,r,o){try{var u=n[r](o),c=u.value}catch(s){return void e(s)}u.done?i(c):Promise.resolve(c).then(a,t)}function o(n){return function(){var i=this,e=arguments;return new Promise((function(a,t){var o=n.apply(i,e);function u(n){r(o,a,t,u,c,"next",n)}function c(n){r(o,a,t,u,c,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("7d26"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{ruleForm:{caipinbianhao:"",caipinmingcheng:"",tupian:"",caixi:"",xiaoshouliang:"",zonglirun:"",tongjishijian:""},caipinbianhaoOptions:[],caipinbianhaoIndex:0,tongjishijianOptions:[],tongjishijianIndex:0,user:{},ro:{caipinbianhao:!1,caipinmingcheng:!1,tupian:!1,caixi:!1,xiaoshouliang:!1,zonglirun:!1,tongjishijian:!1}}},components:{wPicker:u},computed:{},onLoad:function(i){var e=this;return o(a.default.mark((function t(){var r,o,u,c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,e.$api.session(r);case 3:return o=t.sent,e.user=o.data,t.next=7,e.$api.option("caipinxinxi","caipinbianhao",{});case 7:if(o=t.sent,e.caipinbianhaoOptions=o.data,e.tongjishijianOptions="周,月,年".split(","),e.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(e.ruleForm.refid=i.refid,e.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){t.next=18;break}return e.ruleForm.id=i.id,t.next=16,e.$api.info("xiaoshoutongji",e.ruleForm.id);case 16:o=t.sent,e.ruleForm=o.data;case 18:if(!i.cross){t.next=53;break}u=n.getStorageSync("crossObj"),t.t0=a.default.keys(u);case 21:if((t.t1=t.t0()).done){t.next=53;break}if(c=t.t1.value,"caipinbianhao"!=c){t.next=27;break}return e.ruleForm.caipinbianhao=u[c],e.ro.caipinbianhao=!0,t.abrupt("continue",21);case 27:if("caipinmingcheng"!=c){t.next=31;break}return e.ruleForm.caipinmingcheng=u[c],e.ro.caipinmingcheng=!0,t.abrupt("continue",21);case 31:if("tupian"!=c){t.next=35;break}return e.ruleForm.tupian=u[c],e.ro.tupian=!0,t.abrupt("continue",21);case 35:if("caixi"!=c){t.next=39;break}return e.ruleForm.caixi=u[c],e.ro.caixi=!0,t.abrupt("continue",21);case 39:if("xiaoshouliang"!=c){t.next=43;break}return e.ruleForm.xiaoshouliang=u[c],e.ro.xiaoshouliang=!0,t.abrupt("continue",21);case 43:if("zonglirun"!=c){t.next=47;break}return e.ruleForm.zonglirun=u[c],e.ro.zonglirun=!0,t.abrupt("continue",21);case 47:if("tongjishijian"!=c){t.next=51;break}return e.ruleForm.tongjishijian=u[c],e.ro.tongjishijian=!0,t.abrupt("continue",21);case 51:t.next=21;break;case 53:e.styleChange();case 54:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},caipinbianhaoChange:function(n){var i=this;return o(a.default.mark((function e(){var t;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.caipinbianhaoIndex=n.target.value,i.ruleForm.caipinbianhao=i.caipinbianhaoOptions[i.caipinbianhaoIndex],e.next=4,i.$api.follow("caipinxinxi","caipinbianhao",{columnValue:i.ruleForm.caipinbianhao});case 4:t=e.sent,t.data.caipinmingcheng&&(i.ruleForm.caipinmingcheng=t.data.caipinmingcheng),t.data.tupian&&(i.ruleForm.tupian=t.data.tupian),t.data.caixi&&(i.ruleForm.caixi=t.data.caixi);case 8:case"end":return e.stop()}}),e)})))()},tongjishijianChange:function(n){this.tongjishijianIndex=n.target.value,this.ruleForm.tongjishijian=this.tongjishijianOptions[this.tongjishijianIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(a.default.mark((function i(){return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.ruleForm.xiaoshouliang||n.$validate.isIntNumer(n.ruleForm.xiaoshouliang)){i.next=3;break}return n.$utils.msg("销售量应输入整数"),i.abrupt("return");case 3:if(!n.ruleForm.zonglirun||n.$validate.isIntNumer(n.ruleForm.zonglirun)){i.next=6;break}return n.$utils.msg("总利润应输入整数"),i.abrupt("return");case 6:if(!n.ruleForm.id){i.next=11;break}return i.next=9,n.$api.update("xiaoshoutongji",n.ruleForm);case 9:i.next=13;break;case 11:return i.next=13,n.$api.add("xiaoshoutongji",n.ruleForm);case 13:n.$utils.msgBack("提交成功");case 14:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,t=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(e,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};i.default=c}).call(this,e("543d")["default"])}},[["260b","common/runtime","common/vendor"]]]);