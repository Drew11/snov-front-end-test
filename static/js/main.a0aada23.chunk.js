(window["webpackJsonpsnov-front-end-test"]=window["webpackJsonpsnov-front-end-test"]||[]).push([[0],{21:function(e,t,r){e.exports=r(33)},31:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),c=r(4),a=r.n(c),o=r(1),i=(r(31),r(15)),u=r.n(i),l=r(18),p=r(6),m=r(7),f=r(10),v=r(8),b=r(11);var h=function(e){var t=e.user,r=e.style,s=e.setActiveUser;return n.a.createElement("li",{className:r,onClick:function(){return s(t)}},n.a.createElement("div",{className:"user-photo"}),n.a.createElement("span",null,t.name))};var E=Object(o.b)(function(e){return{users:e.users,posts:e.posts,activeUser:e.activeUser}},function(e){return{setActiveUser:function(t){return e({type:"SET_ACTIVE_USER",activeUser:t})}}})(function(e){var t=e.users,r=(e.posts,e.activeUser),s=e.setActiveUser,c=r?"":"active_user";return n.a.createElement("ul",{className:"app-users-list"},n.a.createElement("li",{className:c,onClick:function(){s(null)}},n.a.createElement("div",{className:"user-photo ilex"}),"All Subscriptions"),t.map(function(e,t){return n.a.createElement(h,{style:r===e?"active_user":"",key:t,user:e,setActiveUser:s})}))}),d=r(9),y=r(20);var O=function(e){var t=e.comment;return n.a.createElement("li",{className:"user-post-added-comment"},t)};var P=Object(o.b)(function(e){return{comments:e.comments}},function(e){return{addComment:function(t){return e({type:"ADD_COMMENT",comment:t})}}})(function(e){var t=e.id,r=e.comments,c=e.addComment,a=Object(s.useState)(""),o=Object(y.a)(a,2),i=o[0],u=o[1],l={id:t,text:i},p=r.filter(function(e){return e.id===t});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"user-post-comment-caption"},"Comments"),n.a.createElement("ul",{className:"user-post-comments"},p.map(function(e,t){return n.a.createElement(O,{key:t,comment:e.text})})),n.a.createElement("form",{className:"user-post-set-comment"},n.a.createElement("input",{placeholder:"Type your message",onChange:function(e){u(e.target.value),e.preventDefault()}}),n.a.createElement("button",{onClick:function(e){return function(e,t){e.preventDefault(),""!==t.text&&c(t)}(e,l)}},"Add")))});function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}var S=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).state={editing:!1},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.activePost!==e.activePost&&this.setState(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach(function(t){Object(d.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{editing:!e.editing})})}},{key:"render",value:function(){var e=this;return console.log(this.state),n.a.createElement("li",{className:this.state.editing?"user-post-active":"user-post"},n.a.createElement("div",null,n.a.createElement("span",{className:"user-post-title"},this.props.post.title),n.a.createElement("span",{className:"user-post-content"},this.props.post.body),n.a.createElement("div",{className:"user-post-comments-footer"},n.a.createElement("div",{className:"user-post-open-comments",onClick:function(){e.props.setActivePost(e.props.post)}}),n.a.createElement("div",{className:"user-post-quantity-comments"},this.props.comments.filter(function(t){return t.id===e.props.id}).length?this.props.comments.filter(function(t){return t.id===e.props.id}).length:null))),this.state.editing?n.a.createElement(P,{id:this.props.post.id}):null)}}]),t}(n.a.Component),g=Object(o.b)(function(e){return{comments:e.comments,activePost:e.activePost,posts:e.posts}})(S);var U=Object(o.b)(function(e){return{visiblePosts:e.visiblePosts,activePost:e.activePost}},function(e){return{setActivePost:function(t){return e({type:"SET_ACTIVE_POST",activePost:t})}}})(function(e){var t=e.visiblePosts,r=e.activePost,s=e.setActivePost;return n.a.createElement("ul",{className:"post-list"},t.map(function(e){return n.a.createElement(g,{key:e.id,post:e,style:r?"user-post-active":"user-post",setActivePost:s})}))});var N=Object(o.b)(null,function(e){return{setSearchQuery:function(t){return e({type:"SET_SEARCH_QUERY",searchQuery:t})}}})(function(e){var t=e.setSearchQuery;return n.a.createElement("div",{className:"right-block-search"},n.a.createElement("input",{className:"search",type:"text",onChange:function(e){var r=e.target.value.toLowerCase();t(r)}}))}),T=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,r,s,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,fetch("https://jsonplaceholder.typicode.com/users");case 5:return r=e.sent,e.next=8,t.json();case 8:return s=e.sent,e.next=11,r.json();case 11:n=e.sent,this.props.setUsers(n),this.props.setPosts(s),this.props.setVisiblePosts(s);case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t,r=this;this.props.activeUser===e.activeUser&&this.props.searchQuery===e.searchQuery||(t=this.props.activeUser?this.props.posts.filter(function(e){return e.title.includes(r.props.searchQuery)}).filter(function(e){return e.userId===r.props.activeUser.id}):this.props.posts.filter(function(e){return e.title.includes(r.props.searchQuery)}),this.props.setVisiblePosts(t))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("main",null,n.a.createElement("div",{className:"left-block"},n.a.createElement("a",{href:"https://drew11.github.io/snov-front-end-test/"},n.a.createElement("div",{className:"left-block-logo"})),n.a.createElement("span",{className:"left-block-caption"},"Subscriptions"),n.a.createElement(E,null)),n.a.createElement("div",{className:"right-block"},n.a.createElement(N,null),n.a.createElement(U,null))))}}]),t}(n.a.Component),_=Object(o.b)(function(e){return{activeUser:e.activeUser,posts:e.posts,searchQuery:e.searchQuery}},function(e){return{setUsers:function(t){return e({type:"SET_USERS",users:t})},setPosts:function(t){return e({type:"SET_POSTS",posts:t})},setVisiblePosts:function(t){return e({type:"SET_VISIBLE_POSTS",visiblePosts:t})}}})(T),w=r(19),k=r(5);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach(function(t){Object(d.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var D=Object(k.b)(function(e,t){switch(t.type){case"SET_USERS":return A({},e,{users:t.users});case"SET_POSTS":return A({},e,{posts:t.posts});case"SET_VISIBLE_POSTS":return A({},e,{visiblePosts:t.visiblePosts});case"SET_ACTIVE_USER":return A({},e,{activeUser:t.activeUser});case"SET_SEARCH_QUERY":return A({},e,{searchQuery:t.searchQuery});case"ADD_COMMENT":var r=Object(w.a)(e.comments);return r.push(t.comment),A({},e,{comments:r});case"SET_ACTIVE_POST":return A({},e,{activePost:t.activePost});default:return e}},{users:[],posts:[],visiblePosts:[],activeUser:null,activePost:null,searchQuery:"",comments:[]});D.subscribe(function(){return console.log(D.getState())});var Q=D;a.a.render(n.a.createElement(o.a,{store:Q},n.a.createElement(_,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a0aada23.chunk.js.map