(window.webpackJsonp=window.webpackJsonp||[]).push([[3,26],{412:function(t,e,n){"use strict";var r=n(48),a=n(7),i=n(3),o=n(219),s=n(218),c=n(12),u=n(33),l=n(136),g=n(220),v=n(100),p=n(18),f=n(72),d=n(223),h=n(221),b=n(105),m=n(216),y=n(2),x=m.UNSUPPORTED_Y,w=Math.min,_=[].push,j=i(/./.exec),O=i(_),S=i("".slice);o("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=p(u(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!s(t))return a(e,i,t,o);for(var c,l,g,v=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,f+"g");(c=a(b,m,i))&&!((l=m.lastIndex)>h&&(O(v,S(i,h,c.index)),c.length>1&&c.index<i.length&&r(_,v,d(c,1)),g=c[0].length,h=l,v.length>=o));)m.lastIndex===c.index&&m.lastIndex++;return h===i.length?!g&&j(m,"")||O(v,""):O(v,S(i,h)),v.length>o?d(v,0,o):v}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:a(e,this,t,n)}:e,[function(e,n){var r=u(this),o=null==e?void 0:f(e,t);return o?a(o,e,r,n):a(i,p(r),e,n)},function(t,r){var a=c(this),o=p(t),s=n(i,a,o,r,i!==e);if(s.done)return s.value;var u=l(a,RegExp),f=a.unicode,d=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(x?"g":"y"),b=new u(x?"^(?:"+a.source+")":a,d),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===o.length)return null===h(b,o)?[o]:[];for(var y=0,_=0,j=[];_<o.length;){b.lastIndex=x?0:_;var C,I=h(b,x?S(o,_):o);if(null===I||(C=w(v(b.lastIndex+(x?_:0)),o.length))===y)_=g(o,_,f);else{if(O(j,S(o,y,_)),j.length===m)return j;for(var k=1;k<=I.length-1;k++)if(O(j,I[k]),j.length===m)return j;_=y=C}}return O(j,S(o,y)),j}]}),!!y((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),x)},413:function(t,e,n){var r=n(7),a=n(10),i=n(34),o=n(224),s=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in s||a(t,"flags")||!i(s,t)?e:r(o,t)}},414:function(t,e,n){"use strict";var r=n(104).PROPER,a=n(16),i=n(12),o=n(18),s=n(2),c=n(413),u=RegExp.prototype.toString,l=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),g=r&&"toString"!=u.name;(l||g)&&a(RegExp.prototype,"toString",(function(){var t=i(this);return"/"+o(t.source)+"/"+o(c(t))}),{unsafe:!0})},450:function(t,e,n){},459:function(t,e,n){"use strict";n.r(e);var r,a,i=n(46),o=n(76),s=(n(38),n(412),n(102),n(11),n(103),n(222),n(217),n(99),{props:{bounty:{type:Object,required:!0},canVote:{type:Boolean,required:!1,default:!1},loading:{tpye:Boolean,required:!1,default:!1}},mounted:function(){},methods:{upvote:(a=Object(o.a)(Object(i.a)().mark((function t(e){var n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("upvote",e),t.prev=1,t.next=4,this.$parent.upvote(e);case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return a.apply(this,arguments)}),downvote:(r=Object(o.a)(Object(i.a)().mark((function t(e){var n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("downvote",e),t.prev=1,t.next=4,this.$parent.downvote(e);case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return r.apply(this,arguments)}),formatBody:function(t){var e="";if(null!==t){var n=t.split("###");return n.length>0&&n.forEach((function(t){t.length>0&&(e=e.concat("<div>".concat(t,"</div>")))})),e.indexOf("```text")&&(e=(e=e.replace("```text",'<p style="margin: 1rem 0rem; text-align:justify"><strong>')).replace("```","</strong></p>")),(e=this.urlify(e)).length>0?e:this.urlify(t)}return console.log("Body is null",t),t},urlify:function(t){return t.replace(/(https?:\/\/[^\s]+)/g,(function(t){return'<a href="'.concat(t,">").concat(t,"</a>")}))}}}),c=n(37),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto card-container"},[n("v-card-title",{staticClass:"left"},[t._v(t._s(t.bounty.title))]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0"},[n("div",{staticClass:"grey--text ms-4"},[t._v("\n                    Rating: "+t._s(t.bounty.rank)+" ("+t._s(t.bounty.vote_count)+")\n                ")])]),t._v(" "),n("v-row",[n("div",{staticClass:"my-4 text-subtitle-1"},[n("a",{attrs:{href:"https://github.com/Project-Catalyst/project-catalyst.github.io/issues/"+t.bounty.number,target:"_blank"}},[t._v("GitHub Page")])])]),t._v(" "),n("v-row",{staticClass:"mx-0"},[n("div",{staticStyle:{margin:"1rem 0rem"},domProps:{innerHTML:t._s(t.formatBody(t.bounty.body))}})]),t._v(" "),n("v-row",{staticClass:"fill-height center",attrs:{align:"end"}},[n("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"6"}},[n("v-avatar",{staticClass:"profile",attrs:{color:"grey",size:"64",tile:""}},[n("v-img",{attrs:{src:t.bounty.user.avatar_url}})],1),t._v(" "),n("div",[t._v("\n                        Posted by: "+t._s(t.bounty.user.login)+"\n                    ")])],1),t._v(" "),null!==t.bounty.assignee?n("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"6"}},[n("v-avatar",{staticClass:"profile",attrs:{color:"grey",size:"64",tile:""}},[n("v-img",{attrs:{src:t.bounty.assignee.avatar_url}})],1),t._v(" "),n("div",[t._v("\n                    Assigned to: "+t._s(t.bounty.assignee.login)+"\n                    ")])],1):t._e()],1)],1),t._v(" "),n("v-card-actions",[t.canVote?n("v-btn",{on:{click:function(e){return t.upvote(t.bounty.number)}}},[n("font-awesome-icon",{staticStyle:{"margin-right":"0.5rem"},attrs:{icon:"thumbs-up",size:"lg"}})],1):t._e(),t._v(" "),t.canVote?n("v-btn",{on:{click:function(e){return t.downvote(t.bounty.number)}}},[n("font-awesome-icon",{staticStyle:{"margin-right":"0.5rem"},attrs:{icon:"thumbs-down",size:"lg"}})],1):t._e(),t._v(" "),t.loading?n("v-progress-circular",{attrs:{indeterminate:""}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},496:function(t,e,n){var r=n(3),a=n(16),i=Date.prototype,o=r(i.toString),s=r(i.getTime);"Invalid Date"!=String(new Date(NaN))&&a(i,"toString",(function(){var t=s(this);return t==t?o(this):"Invalid Date"}))},497:function(t,e,n){"use strict";n(450)},516:function(t,e,n){"use strict";n.r(e);var r,a,i,o=n(46),s=n(76),c=(n(29),n(496),n(11),n(414),n(222),n(459)),u="bounty-api.cardanocataly.st",l={name:"BountVoting",components:{BountyCard:c.default},props:{label:{type:String,required:!1,default:""},showSignIn:{type:Boolean,required:!1,default:!0}},data:function(){return{loading:!0}},asyncComputed:{bounties:function(){var t=this;return Object(s.a)(Object(o.a)().mark((function e(){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.axios.get("https://".concat(u,"/bounties/").concat(t.label),{withCredentials:!0});case 3:return n=e.sent,t.loading=!1,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))()},canVote:function(){var t=this;return Object(s.a)(Object(o.a)().mark((function e(){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("https://".concat(u,"/can_i_vote?state=").concat(t.generateUniqueID()),{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()}},methods:{generateUniqueID:function(){var t=!0;try{localStorage.getItem("uniqueID")}catch(e){t=!1}if(t){var e=localStorage.getItem("uniqueID");return null===e?(e=Math.random().toString(16).substring(2,16),e+=Math.random().toString(16).substring(2,16),localStorage.setItem("uniqueID",e),e):e}return null},upvote:(i=Object(s.a)(Object(o.a)().mark((function t(e){var n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.axios.get("https://".concat(u,"/upvote?state=").concat(this.generateUniqueID(),"&issue=").concat(e),{withCredentials:!0}),this.$asyncComputed.bounties.update(),t.abrupt("return",n);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)}),downvote:(a=Object(s.a)(Object(o.a)().mark((function t(e){var n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.axios.get("https://".concat(u,"/downvote?state=").concat(this.generateUniqueID(),"&issue=").concat(e),{withCredentials:!0}),this.$asyncComputed.bounties.update(),t.abrupt("return",n);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},mounted:(r=Object(s.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},g=(n(497),n(37)),v=Object(g.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showSignIn?n("span",[t.canVote?t._e():n("span",[n("v-btn",{staticStyle:{"margin-bottom":"1rem"},attrs:{elevation:"2",block:"",href:"https://github.com/login/oauth/authorize?client_id=Iv1.75f9d9c2e09de0f5&state="+t.generateUniqueID()}},[n("font-awesome-icon",{staticStyle:{"margin-right":"0.5rem"},attrs:{icon:["fab","github"],size:"lg"}}),t._v("\n                Sign in with Github\n            ")],1)],1),t._v(" "),t.canVote?n("span",[n("v-btn",{staticStyle:{"margin-bottom":"1rem"},attrs:{block:"",outlined:""}},[t._v("\n                You are signed in to\n                "),n("font-awesome-icon",{staticStyle:{"margin-left":"0.5rem"},attrs:{icon:["fab","github"],size:"lg"}})],1)],1):t._e()]):t._e(),t._v(" "),t._l(t.bounties,(function(e){return n("div",{key:e.id},[n("bounty-card",{attrs:{bounty:e,canVote:t.canVote,loading:t.loading}})],1)}))],2)}),[],!1,null,"3417392b",null);e.default=v.exports}}]);