(window.webpackJsonp=window.webpackJsonp||[]).push([[3,27],{415:function(t,e,n){var a=n(7),r=n(11),o=n(36),s=n(229),i=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in i||r(t,"flags")||!o(i,t)?e:a(s,t)}},416:function(t,e,n){"use strict";var a=n(107).PROPER,r=n(17),o=n(12),s=n(16),i=n(2),c=n(415),u=RegExp.prototype.toString,l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=a&&"toString"!=u.name;(l||p)&&r(RegExp.prototype,"toString",(function(){var t=o(this);return"/"+s(t.source)+"/"+s(c(t))}),{unsafe:!0})},452:function(t,e,n){},461:function(t,e,n){"use strict";n.r(e);var a,r,o=n(52),s=n(81),i=(n(35),n(228),n(105),n(8),n(106),n(227),n(226),n(75),{props:{bounty:{type:Object,required:!0},canVote:{type:Boolean,required:!1,default:!1},loading:{tpye:Boolean,required:!1,default:!1}},mounted:function(){},methods:{upvote:(r=Object(s.a)(Object(o.a)().mark((function t(e){var n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("upvote",e),t.prev=1,t.next=4,this.$parent.upvote(e);case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return r.apply(this,arguments)}),downvote:(a=Object(s.a)(Object(o.a)().mark((function t(e){var n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("downvote",e),t.prev=1,t.next=4,this.$parent.downvote(e);case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return a.apply(this,arguments)}),formatBody:function(t){var e="";if(null!==t){var n=t.split("###");return n.length>0&&n.forEach((function(t){t.length>0&&(e=e.concat("<div>".concat(t,"</div>")))})),e.indexOf("```text")&&(e=(e=e.replace("```text",'<p style="margin: 1rem 0rem; text-align:justify"><strong>')).replace("```","</strong></p>")),(e=this.urlify(e)).length>0?e:this.urlify(t)}return console.log("Body is null",t),t},urlify:function(t){return t.replace(/(https?:\/\/[^\s]+)/g,(function(t){return'<a href="'.concat(t,">").concat(t,"</a>")}))}}}),c=n(39),u=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto card-container"},[n("v-card-title",{staticClass:"left"},[t._v(t._s(t.bounty.title))]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0"},[n("div",{staticClass:"grey--text ms-4"},[t._v("\n                    Rating: "+t._s(t.bounty.rank)+" ("+t._s(t.bounty.vote_count)+")\n                ")])]),t._v(" "),n("v-row",[n("div",{staticClass:"my-4 text-subtitle-1"},[n("a",{attrs:{href:"https://github.com/Project-Catalyst/project-catalyst.github.io/issues/"+t.bounty.number,target:"_blank"}},[t._v("GitHub Page")])])]),t._v(" "),n("v-row",{staticClass:"mx-0"},[n("div",{staticStyle:{margin:"1rem 0rem"},domProps:{innerHTML:t._s(t.formatBody(t.bounty.body))}})]),t._v(" "),n("v-row",{staticClass:"fill-height center",attrs:{align:"end"}},[n("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"6"}},[n("v-avatar",{staticClass:"profile",attrs:{color:"grey",size:"64",tile:""}},[n("v-img",{attrs:{src:t.bounty.user.avatar_url}})],1),t._v(" "),n("div",[t._v("\n                        Posted by: "+t._s(t.bounty.user.login)+"\n                    ")])],1),t._v(" "),null!==t.bounty.assignee?n("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"6"}},[n("v-avatar",{staticClass:"profile",attrs:{color:"grey",size:"64",tile:""}},[n("v-img",{attrs:{src:t.bounty.assignee.avatar_url}})],1),t._v(" "),n("div",[t._v("\n                    Assigned to: "+t._s(t.bounty.assignee.login)+"\n                    ")])],1):t._e()],1)],1),t._v(" "),n("v-card-actions",[t.canVote?n("v-btn",{on:{click:function(e){return t.upvote(t.bounty.number)}}},[n("font-awesome-icon",{staticStyle:{"margin-right":"0.5rem"},attrs:{icon:"thumbs-up",size:"lg"}})],1):t._e(),t._v(" "),t.canVote?n("v-btn",{on:{click:function(e){return t.downvote(t.bounty.number)}}},[n("font-awesome-icon",{staticStyle:{"margin-right":"0.5rem"},attrs:{icon:"thumbs-down",size:"lg"}})],1):t._e(),t._v(" "),t.loading?n("v-progress-circular",{attrs:{indeterminate:""}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},497:function(t,e,n){var a=n(3),r=n(17),o=Date.prototype,s=a(o.toString),i=a(o.getTime);"Invalid Date"!=String(new Date(NaN))&&r(o,"toString",(function(){var t=i(this);return t==t?s(this):"Invalid Date"}))},498:function(t,e,n){"use strict";n(452)},517:function(t,e,n){"use strict";n.r(e);var a,r,o,s=n(52),i=n(81),c=(n(24),n(497),n(8),n(416),n(227),n(461)),u="bounty-api.cardanocataly.st",l={name:"BountVoting",components:{BountyCard:c.default},props:{label:{type:String,required:!1,default:""},showSignIn:{type:Boolean,required:!1,default:!0}},data:function(){return{loading:!0}},asyncComputed:{bounties:function(){var t=this;return Object(i.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.axios.get("https://".concat(u,"/bounties/").concat(t.label),{withCredentials:!0});case 3:return n=e.sent,t.loading=!1,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))()},canVote:function(){var t=this;return Object(i.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("https://".concat(u,"/can_i_vote?state=").concat(t.generateUniqueID()),{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()}},methods:{generateUniqueID:function(){var t=!0;try{localStorage.getItem("uniqueID")}catch(e){t=!1}if(t){var e=localStorage.getItem("uniqueID");return null===e?(e=Math.random().toString(16).substring(2,16),e+=Math.random().toString(16).substring(2,16),localStorage.setItem("uniqueID",e),e):e}return null},upvote:(o=Object(i.a)(Object(s.a)().mark((function t(e){var n;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.axios.get("https://".concat(u,"/upvote?state=").concat(this.generateUniqueID(),"&issue=").concat(e),{withCredentials:!0}),this.$asyncComputed.bounties.update(),t.abrupt("return",n);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)}),downvote:(r=Object(i.a)(Object(s.a)().mark((function t(e){var n;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.axios.get("https://".concat(u,"/downvote?state=").concat(this.generateUniqueID(),"&issue=").concat(e),{withCredentials:!0}),this.$asyncComputed.bounties.update(),t.abrupt("return",n);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},mounted:(a=Object(i.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return a.apply(this,arguments)})},p=(n(498),n(39)),v=Object(p.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showSignIn?n("span",[t.canVote?t._e():n("span",[n("v-btn",{staticStyle:{"margin-bottom":"1rem"},attrs:{elevation:"2",block:"",href:"https://github.com/login/oauth/authorize?client_id=Iv1.75f9d9c2e09de0f5&state="+t.generateUniqueID()}},[n("font-awesome-icon",{staticStyle:{"margin-right":"0.5rem"},attrs:{icon:["fab","github"],size:"lg"}}),t._v("\n                Sign in with Github\n            ")],1)],1),t._v(" "),t.canVote?n("span",[n("v-btn",{staticStyle:{"margin-bottom":"1rem"},attrs:{block:"",outlined:""}},[t._v("\n                You are signed in to\n                "),n("font-awesome-icon",{staticStyle:{"margin-left":"0.5rem"},attrs:{icon:["fab","github"],size:"lg"}})],1)],1):t._e()]):t._e(),t._v(" "),t._l(t.bounties,(function(e){return n("div",{key:e.id},[n("bounty-card",{attrs:{bounty:e,canVote:t.canVote,loading:t.loading}})],1)}))],2)}),[],!1,null,"3417392b",null);e.default=v.exports}}]);