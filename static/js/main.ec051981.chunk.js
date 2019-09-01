(window["webpackJsonpsnov-front-end-test"]=window["webpackJsonpsnov-front-end-test"]||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(4),c=n.n(a),o=n(1),i=(n(31),n(10)),u=n.n(i),l=n(13),m=n(14),p=n(15),f=n(19),v=n(16),E=n(20);var b=function(e){var t=e.user,n=e.style,r=e.setActiveUser;return s.a.createElement("li",{className:n,onClick:function(){return r(t)}},s.a.createElement("div",{className:"user-photo"}),s.a.createElement("span",null,t.name))};var d=Object(o.b)(function(e){return{users:e.users,posts:e.posts,activeUser:e.activeUser}},function(e){return{setActiveUser:function(t){return e({type:"SET_ACTIVE_USER",activeUser:t})},setVisiblePosts:function(t){return e({type:"SET_VISIBLE_POSTS",visiblePosts:t})}}})(function(e){var t=e.users,n=e.posts,r=e.activeUser,a=e.setVisiblePosts,c=e.setActiveUser,o=r?"":"active_user";return s.a.createElement("ul",{className:"app-users-list"},s.a.createElement("li",{className:o,onClick:function(){a(n),c(null)}},s.a.createElement("div",{className:"user-photo ilex"}),"All Subscriptions"),t.map(function(e,t){return s.a.createElement(b,{style:r===e?"active_user":"",key:t,user:e,setActiveUser:c})}))}),h=n(6);var y=function(e){var t=e.comment;return s.a.createElement("li",{className:"user-post-added-comment"},t)};var O=Object(o.b)(function(e){return{comments:e.comments}},function(e){return{addComment:function(t){return e({type:"ADD_COMMENT",comment:t})}}})(function(e){var t=e.id,n=e.comments,a=e.addComment,c=Object(r.useState)(""),o=Object(h.a)(c,2),i=o[0],u=o[1],l={id:t,text:i},m=n.filter(function(e){return e.id===t});return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"user-post-comment-caption"},"Comments"),s.a.createElement("ul",{className:"user-post-comments"},m.map(function(e,t){return s.a.createElement(y,{key:t,comment:e.text})})),s.a.createElement("div",{className:"user-post-set-comment"},s.a.createElement("input",{onChange:function(e){return u(e.target.value)}}),s.a.createElement("button",{onClick:function(){var e;""!==(e=l).text&&a(e)}},"Add")))});var S=Object(o.b)(function(e){return{comments:e.comments}})(function(e){var t=e.id,n=e.title,a=e.content,c=e.comments,o=Object(r.useState)(!1),i=Object(h.a)(o,2),u=i[0],l=i[1],m=c.filter(function(e){return e.id===t}).length,p=u?"user-post-active":"user-post";return s.a.createElement("li",{className:p},s.a.createElement("div",null,s.a.createElement("span",{className:"user-post-title"},n),s.a.createElement("span",{className:"user-post-content"},a),s.a.createElement("div",{className:"user-post-comments-footer"},s.a.createElement("div",{className:"user-post-open-comments",onClick:function(){l(!u)}}),s.a.createElement("div",{className:"user-post-quantity-comments"},m||null))),u?s.a.createElement(O,{id:t}):null)});var j=Object(o.b)(function(e){return{visiblePosts:e.visiblePosts}})(function(e){var t=e.visiblePosts;return s.a.createElement("ul",{className:"post-list"},t.map(function(e){return s.a.createElement(S,{key:e.id,id:e.id,title:e.title,content:e.body})}))});var P=Object(o.b)(null,function(e){return{setSearchQuery:function(t){return e({type:"SET_SEARCH_QUERY",searchQuery:t})}}})(function(e){var t=e.setSearchQuery;return s.a.createElement("div",{className:"right-block-search"},s.a.createElement("input",{className:"search",type:"text",onChange:function(e){var n=e.target.value.toLowerCase();t(n)}}))}),U=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,n,r,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,fetch("https://jsonplaceholder.typicode.com/users");case 5:return n=e.sent,e.next=8,t.json();case 8:return r=e.sent,e.next=11,n.json();case 11:s=e.sent,this.props.setUsers(s),this.props.setPosts(r),this.props.setVisiblePosts(r);case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t,n=this;this.props.activeUser===e.activeUser&&this.props.searchQuery===e.searchQuery||(t=this.props.activeUser?this.props.posts.filter(function(e){return e.title.includes(n.props.searchQuery)}).filter(function(e){return e.userId===n.props.activeUser.id}):this.props.posts.filter(function(e){return e.title.includes(n.props.searchQuery)}),this.props.setVisiblePosts(t))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("main",null,s.a.createElement("div",{className:"left-block"},s.a.createElement("div",{className:"left-block-logo"}),s.a.createElement("span",{className:"left-block-caption"},"Subscriptions"),s.a.createElement(d,null)),s.a.createElement("div",{className:"right-block"},s.a.createElement(P,null),s.a.createElement(j,null))),s.a.createElement("footer",null))}}]),t}(s.a.Component),N=Object(o.b)(function(e){return{activeUser:e.activeUser,posts:e.posts,searchQuery:e.searchQuery}},function(e){return{setUsers:function(t){return e({type:"SET_USERS",users:t})},setPosts:function(t){return e({type:"SET_POSTS",posts:t})},setVisiblePosts:function(t){return e({type:"SET_VISIBLE_POSTS",visiblePosts:t})}}})(U),_=n(18),T=n(17),g=n(5);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(T.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=Object(g.b)(function(e,t){switch(t.type){case"SET_USERS":return C({},e,{users:t.users});case"SET_POSTS":return C({},e,{posts:t.posts});case"SET_VISIBLE_POSTS":return C({},e,{visiblePosts:t.visiblePosts});case"SET_ACTIVE_USER":return C({},e,{activeUser:t.activeUser});case"SET_SEARCH_QUERY":return C({},e,{searchQuery:t.searchQuery});case"ADD_COMMENT":var n=Object(_.a)(e.comments);return n.push(t.comment),C({},e,{comments:n});default:return e}},{users:[],posts:[],visiblePosts:[],activeUser:null,searchQuery:"",comments:[]});w.subscribe(function(){return console.log(w.getState())});var Q=w;c.a.render(s.a.createElement(o.a,{store:Q},s.a.createElement(N,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ec051981.chunk.js.map