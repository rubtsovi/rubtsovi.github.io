(function(t){function e(e){for(var n,o,a=e[0],l=e[1],u=e[2],m=0,f=[];m<a.length;m++)o=a[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var l=s[a];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/time-calculator/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"3c61":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("b-jumbotron",{attrs:{header:"Time calc App",lead:"The app which helps you to manage your working time",fluid:!0,"bg-variant":"primary","text-variant":"white"}}),s("WorkArea")],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-5"},[s("b-container",[s("b-row",{staticClass:"my-n3"},[s("b-col",{staticClass:"py-3",attrs:{cols:"12",md:"6"}},[s("InputComponent")],1),s("b-col",{staticClass:"py-3",attrs:{cols:"12",md:"6"}},[s("ResultComponent")],1)],1)],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.sessions.length?s("b-list-group",[t._l(t.sessions,(function(e,n){return s("b-list-group-item",{key:n,staticClass:"d-flex justify-content-between align-items-center"},[s("div",[t._v(" "+t._s(n+1)+". "),s("strong",[t._v("Hours:")]),t._v(" "+t._s(e.hours)+" "),s("strong",[t._v("Minutes:")]),t._v(" "+t._s(e.minutes)+" ")])])})),s("b-list-group-item",{attrs:{variant:"primary"}},[s("strong",[t._v("Summary:")]),t._v(" "),s("strong",[t._v("Hours:")]),t._v(" "+t._s(t.totalTime.hours)+" "),s("strong",[t._v("Minutes:")]),t._v(" "+t._s(t.totalTime.minutes)+" ")])],2):s("b-alert",{attrs:{variant:"info",show:""}},[t._v("There is no provided work sessions. Plese add the first one by the inputs below")])],1)},u=[],c=s("5530"),m=s("2f62"),f=n["default"].extend({name:"ResultComponent",computed:Object(c["a"])(Object(c["a"])({},Object(m["d"])(["sessions"])),Object(m["b"])(["totalTime"]))}),p=f,d=s("2877"),h=Object(d["a"])(p,l,u,!1,null,null,null),b=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-form-checkbox",{staticClass:"pb-2",attrs:{name:"check-button",switch:""},model:{value:t.timeMode,callback:function(e){t.timeMode=e},expression:"timeMode"}},[t._v(" Daytime mode ")]),t.timeMode?s("b-form-row",{staticClass:"my-n2"},[s("b-col",{staticClass:"py-2",attrs:{cols:12,sm:6,md:12,lg:6}},[s("b-timepicker",{attrs:{placeholder:"Type here start time",hour12:!1,locale:t.browserLocale,"minutes-step":5,"now-button":!0,"hide-header":!0},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}})],1),s("b-col",{staticClass:"py-2",attrs:{cols:12,sm:6,md:12,lg:6}},[s("b-form-group",{staticClass:"mb-0"},[s("b-timepicker",{attrs:{placeholder:"Type here finish time",hour12:!1,locale:t.browserLocale,"minutes-step":5,"now-button":!0,"hide-header":!0,state:t.isFinishTimeValid},model:{value:t.finishTime,callback:function(e){t.finishTime=e},expression:"finishTime"}}),s("b-form-invalid-feedback",{directives:[{name:"show",rawName:"v-show",value:!t.isFinishTimeValid,expression:"!isFinishTimeValid"}],staticClass:"position-absolute"},[t._v("Finish time must be greater than Start time")])],1)],1)],1):s("b-form-row",{staticClass:"my-n2"},[s("b-col",{staticClass:"py-2",attrs:{cols:12,sm:6}},[s("label",{staticClass:"sr-only",attrs:{for:"hours-control"}},[t._v("Hours")]),s("b-form-spinbutton",{attrs:{id:"hours-control",placeholder:"Type hours here",min:"0"},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1),s("b-col",{staticClass:"py-2",attrs:{cols:12,sm:6}},[s("label",{staticClass:"sr-only",attrs:{for:"minutes-control"}},[t._v("Minutes")]),s("b-form-spinbutton",{attrs:{id:"minutes-control",placeholder:"Type minutes here",min:"0",max:"60",step:"5"},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),s("b-button",{staticClass:"mt-3",attrs:{variant:"primary"},on:{click:function(e){return t.initAddMutation()}}},[t._v("Add session")])],1)},y=[];s("a9e3"),s("cb29"),s("d81d"),s("a434"),s("ac1f"),s("1276");function _(t){return""!==t?t.split(":").splice(0,2).map((function(t){return Number(t)})):Array(2).fill(0)}function g(t){if("string"===typeof t){if(""===t)return 0;t=_(t)}var e=t[0],s=t[1];return s+60*e}var T=n["default"].extend({name:"InputComponent",data:function(){return{hours:null,minutes:null,timeMode:!1,startTime:"",finishTime:""}},computed:{timeDiff:function(){return g(this.finishTime)-g(this.startTime)},isFinishTimeValid:function(){return(""===this.startTime||""===this.finishTime||this.timeDiff>=1)&&null}},methods:Object(c["a"])(Object(c["a"])({},Object(m["c"])(["addSession"])),{},{initAddMutation:function(){var t,e;if(this.timeMode){if(this.timeDiff<1)return;t=Math.floor(this.timeDiff/60),e=this.timeDiff%60}else t=Number(this.hours),e=Number(this.minutes);this.addSession({hours:t,minutes:e}),this.hours=null,this.minutes=null,this.startTime="",this.finishTime=""}})}),w=T,x=Object(d["a"])(w,v,y,!1,null,null,null),C=x.exports,j=n["default"].extend({components:{InputComponent:C,ResultComponent:b}}),O=j,k=Object(d["a"])(O,o,a,!1,null,null,null),M=k.exports,S=n["default"].extend({name:"App",components:{WorkArea:M}}),A=S,P=Object(d["a"])(A,i,r,!1,null,null,null),D=P.exports,F=s("5f5b");s("3c61"),s("13d5");n["default"].use(m["a"]);var $=new m["a"].Store({state:{sessions:Array()},mutations:{addSession:function(t,e){t.sessions.push(e)}},getters:{totalTime:function(t){return t.sessions.reduce((function(t,e){var s=t.hours+e.hours,n=t.minutes+e.minutes;return s+=Math.floor(n/60),n%=60,{hours:s,minutes:n}}))}},actions:{},modules:{}});n["default"].use(F["a"]),n["default"].config.productionTip=!1,n["default"].prototype.browserLocale=navigator.language,new n["default"]({store:$,render:function(t){return t(D)}}).$mount("#app")}});
//# sourceMappingURL=app.22692220.js.map