(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(22),r=s.n(n),i=s(9),l=s(2),o=s(3),j=(s(27),s(0)),u=JSON.parse(localStorage.getItem("user")),p=Object(a.createContext)();function b(e){return Object(j.jsx)(p.Provider,{value:u,children:e.children})}s(29);var d=function(e){var t=e.handleClick,s=Object(a.useContext)(p).user;return Object(j.jsx)("div",{className:"dropDown",children:Object(j.jsxs)("ul",{className:"menuList",children:[Object(j.jsx)(i.b,{to:"/setting",children:Object(j.jsx)("li",{className:"menuListItem",onClick:t,children:"Setting"})}),Object(j.jsx)(i.b,{to:"/mypost?user=".concat(s),children:Object(j.jsx)("li",{className:"menuListItem",children:"My posts"})}),Object(j.jsx)("li",{className:"menuListItem",onClick:function(){localStorage.clear(),window.location.assign("/")},children:"Log out"})]})})};var m=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useContext)(p),r=function(){c(!s)};return Object(j.jsxs)("div",{className:"top",children:[Object(j.jsxs)("div",{className:"topLeft",children:[Object(j.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-instagram-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-pinterest-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-twitter-square"})]}),Object(j.jsx)("div",{className:"topCenter",children:Object(j.jsxs)("ul",{className:"topList",children:[Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"topListItem",children:"ABOUT"}),Object(j.jsx)("li",{className:"topListItem",children:"CONTACT"}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(i.b,{to:n?"/write":"/login",onClick:function(){n||alert("Login first please")},children:"Write"})})]})}),Object(j.jsxs)("div",{className:"topRight",children:[Object(j.jsx)("span",{children:n?n.username:null}),n&&Object(j.jsxs)("div",{className:"profilePhoto",onClick:r,style:{position:"relative"},children:[Object(j.jsx)("img",{className:"topImg",src:n.photo,alt:""}),Object(j.jsx)("i",{className:"fas fa-caret-down"}),s&&Object(j.jsx)(d,{handleClick:r})]}),!!n||Object(j.jsxs)("ul",{className:"topList",children:[Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(i.b,{to:"/login",children:"Login"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(i.b,{to:"/register",children:"Register"})})]})]})]})},h=s(4),O=s.n(h),x=s(6),f=(s(31),s(32),s.p+"static/media/headerImg.87f40b19.jpeg");var v=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"headerTitle",children:[Object(j.jsx)("span",{className:"headerTitleS",children:"React practice"}),Object(j.jsx)("span",{className:"headerTitleL",children:"Blog"})]}),Object(j.jsx)("img",{src:f,alt:"",className:"headerImg"})]})};s(33),s(34);var g=function(e){var t=e.info;return Object(j.jsx)(i.b,{to:"/post/".concat(t._id),children:Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"postImg",src:t.photo,alt:""}),Object(j.jsxs)("div",{className:"postInfo",children:[Object(j.jsx)("div",{className:"postCats",children:Object(j.jsx)("span",{className:"postCat",children:t.categories[0]})}),Object(j.jsx)("span",{className:"postTitle",children:t.title}),Object(j.jsx)("hr",{}),Object(j.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(j.jsx)("p",{className:"postDesc",children:t.desc})]})})};var N=function(e){var t=e.posts;return Object(j.jsx)("div",{className:"posts",children:t.map((function(e,t){return Object(j.jsx)(g,{info:e},t)}))})},w=(s(35),s.p+"static/media/vampire.0147bc73.png");var I=function(){return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"sidebarItem",children:[Object(j.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(j.jsx)("img",{src:w,alt:""}),Object(j.jsx)("p",{children:"Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident."})]}),Object(j.jsxs)("div",{className:"sidebarItem",children:[Object(j.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(j.jsxs)("ul",{className:"sidebarList",children:[Object(j.jsx)("li",{className:"sidebarListItem",children:"Life"}),Object(j.jsx)("li",{className:"sidebarListItem",children:"Music"}),Object(j.jsx)("li",{className:"sidebarListItem",children:"Sport"}),Object(j.jsx)("li",{className:"sidebarListItem",children:"Style"}),Object(j.jsx)("li",{className:"sidebarListItem",children:"Tech"}),Object(j.jsx)("li",{className:"sidebarListItem",children:"Cinema"})]})]}),Object(j.jsxs)("div",{className:"sidebarItem",children:[Object(j.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(j.jsxs)("div",{className:"sidebarSocial",children:[Object(j.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(j.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"}),Object(j.jsx)("i",{className:"sidebarIcon fab fa-pinterest-square"}),Object(j.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"})]})]})]})},y=s(5),L=s.n(y);var S=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("http://localhost:5000/api/posts");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(v,{}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(N,{posts:s}),Object(j.jsx)(I,{})]})]})};s(54);var k=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useState)(!1),c=Object(o.a)(s,2),n=c[0],r=c[1],i=function(){var s=Object(x.a)(O.a.mark((function s(a){var c;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),s.prev=1,s.next=4,L.a.post("http://localhost:5000/api/auth/login",{username:e.current.value,password:t.current.value});case 4:c=s.sent,console.log(c.data),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(1),s.t0.response.data?(console.log(s.t0.response.data),window.localStorage.setItem("user",JSON.stringify({username:s.t0.response.data.username,photo:s.t0.response.data.profilePic})),window.location.replace("/")):r(!0);case 11:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(e){return s.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("span",{className:"loginTitle",children:"Login"}),Object(j.jsxs)("form",{className:"loginForm",onSubmit:i,children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{className:"loginInput",type:"text",placeholder:"Enter your username...",ref:e}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{className:"loginInput",type:"password",placeholder:"Enter your password...",ref:t}),Object(j.jsx)("button",{className:"loginButton",type:"submit",children:"Login"})]}),n&&Object(j.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Login falied"}),Object(j.jsx)("button",{className:"loginRegisterButton",children:"Register"})]})};s(55);var P=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useState)(!1),n=Object(o.a)(c,2),r=n[0],i=n[1],l=function(){var a=Object(x.a)(O.a.mark((function a(c){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current.value===s.current.value){a.next=5;break}i(!0),a.next=15;break;case 5:return a.prev=5,a.next=8,L.a.post("http://localhost:5000/api/auth/register",{username:e.current.value,password:t.current.value});case 8:"have been existed"===a.sent.data?alert("user already exist"):(alert("resigter successfully"),window.location.assign("/login")),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(5),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[5,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("span",{className:"registerTitle",children:"Register"}),Object(j.jsxs)("form",{className:"registerForm",onSubmit:l,children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{className:"registerInput",type:"text",placeholder:"Enter your username...",ref:e}),Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{className:"registerInput",type:"text",placeholder:"Enter your password...",ref:t}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{className:"registerInput",type:"password",placeholder:"Confirm your password...",ref:s}),Object(j.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),r&&Object(j.jsx)("span",{children:"something was wrong!"}),Object(j.jsx)("button",{className:"registerLoginButton",children:"Login"})]})};s(56);var C=function(){var e=Object(l.e)(),t=Object(a.useState)({}),s=Object(o.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(p);Object(a.useEffect)((function(){var t=function(){var t=Object(x.a)(O.a.mark((function t(){var s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("http://localhost:5000/api/post/".concat(e.pathname.slice(6)));case 2:s=t.sent,n(s.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var i=function(){var t=Object(x.a)(O.a.mark((function t(s){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.pathname.slice(6),t.prev=1,t.next=4,L.a.post("http://localhost:5000/api/post/delete",{author:r.username,id:a});case 4:"not your"===t.sent.data?alert(" u can only delete your post"):window.location.replace("/mypost?user=".concat(r.username)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"singlePost",children:Object(j.jsxs)("div",{className:"singlePostWrapper",children:[Object(j.jsx)("img",{className:"singlePostImg",src:c.photo,alt:""}),Object(j.jsxs)("h1",{className:"singlePostTitle",children:[c.title,Object(j.jsx)("div",{className:"singlePostEdit",children:Object(j.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:i})})]}),Object(j.jsxs)("div",{className:"singlePostInfo",children:[Object(j.jsxs)("span",{children:["Author:",Object(j.jsx)("b",{className:"singlePostAuthor",children:c.username})]}),Object(j.jsx)("span",{children:new Date(c.createdAt).toDateString()})]}),Object(j.jsx)("p",{className:"singlePostDesc",children:c.desc})]})})};s(57);var R=function(){return Object(j.jsxs)("div",{className:"single",children:[Object(j.jsx)(C,{}),Object(j.jsx)(I,{})]})};s(58);var T=function(){var e=Object(a.useContext)(p),t=Object(a.useState)(),s=Object(o.a)(t,2),c=s[0],n=s[1],r=c?URL.createObjectURL(c):e.photo,i=Object(a.useRef)(),l=Object(a.useRef)();Object(a.useEffect)((function(){return function(){URL.revokeObjectURL(c)}}),[c]);var u=function(){var t=Object(x.a)(O.a.mark((function t(s){var a,n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),a={username:e.username,newData:{username:i.current.value,password:l.current.value}},!c){t.next=24;break}return n=new FormData,r=(Date.now().toString()+c.name).replace(/\s+/g,""),n.append("filename",r),n.append("profilePhoto",c),a.newData.profilePic="http://localhost:5000/static/profileImg/".concat(r),a.newData.oldPhoto=e.photo.substring(e.photo.lastIndexOf("/")+1),t.prev=9,t.next=12,L.a.post("http://localhost:5000/api/profileImg/upload",n);case 12:return t.next=14,L.a.post("http://localhost:5000/api/auth/update",a);case 14:window.localStorage.setItem("user",JSON.stringify({username:i.current.value,photo:"http://localhost:5000/static/profileImg/".concat(r)})),alert("your change have been uploaded"),window.location.replace("/"),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(9),console.log(t.t0);case 22:t.next=29;break;case 24:return t.next=26,L.a.post("http://localhost:5000/api/auth/update",a);case 26:window.localStorage.setItem("user",JSON.stringify({username:i.current.value,photo:e.photo})),alert("your change have been uploaded"),window.location.replace("/");case 29:case"end":return t.stop()}}),t,null,[[9,19]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"settings",children:Object(j.jsxs)("div",{className:"settingsWrapper",children:[Object(j.jsxs)("div",{className:"settingsTitle",children:[Object(j.jsx)("span",{className:"settingsTitleUpdate",children:"Edit your account"}),Object(j.jsx)("span",{className:"settingsTitleDelete",children:"Delete Account"})]}),Object(j.jsxs)("form",{className:"settingsForm",onSubmit:u,children:[Object(j.jsx)("label",{children:"Profile Picture"}),Object(j.jsxs)("div",{className:"settingsPP",children:[Object(j.jsx)("img",{src:r,alt:""}),Object(j.jsxs)("label",{htmlFor:"fileInput",children:[Object(j.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})," "]}),Object(j.jsx)("input",{id:"fileInput",type:"file",style:{display:"none"},className:"settingsPPInput",onChange:function(e){e.target.files[0]&&n(e.target.files[0])}})]}),Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",placeholder:"your new name",name:"name",ref:i}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",placeholder:"new password",name:"password",ref:l}),Object(j.jsx)("button",{className:"settingsSubmitButton",type:"submit",children:"Update"})]})]})})},D=(s(59),s.p+"static/media/postDefault.a8c7279b.jpeg");var E=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),s=t[0],c=t[1],n=s?URL.createObjectURL(s):D,r=Object(a.useRef)(),i=Object(a.useRef)(),l=Object(a.useContext)(p);Object(a.useEffect)((function(){return function(){URL.revokeObjectURL(s)}}),[s]);var u=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,c,n,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData,c=(Date.now().toString()+s.name).replace(/\s+/g,""),a.append("filename",c),a.append("postPhotoFile",s),e.prev=5,e.next=8,L.a.post("http://localhost:5000/api/upload",a);case 8:if("have been uploaded"!==e.sent.data){e.next=21;break}return e.prev=10,n={title:r.current.value||"default",desc:i.current.value||"default",photo:"http://localhost:5000/static/postImg/".concat(c),username:l.username},e.next=14,L.a.post("http://localhost:5000/api/post/create",n);case 14:o=e.sent,window.location.replace("/post/".concat(o.data._id)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0);case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(5),console.log(e.t1);case 26:case"end":return e.stop()}}),e,null,[[5,23],[10,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"write",children:[Object(j.jsx)("img",{className:"writeImg",src:n,alt:""}),Object(j.jsxs)("form",{className:"writeForm",onSubmit:u,children:[Object(j.jsxs)("div",{className:"writeFormGroup",children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(j.jsx)("input",{id:"fileInput",type:"file",name:"postPhotoFile",onChange:function(e){e.target.files[0]&&c(e.target.files[0])},style:{display:"none"}}),Object(j.jsx)("input",{className:"writeInput",placeholder:"Title",type:"text",autoFocus:!0,ref:r})]}),Object(j.jsx)("div",{className:"writeFormGroup",children:Object(j.jsx)("textarea",{className:"writeInput writeText",placeholder:"Tell your story...",type:"text",autoFocus:!0,ref:i})}),Object(j.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})};s(60);var U=function(){var e=Object(a.useContext)(p),t=Object(a.useState)([]),s=Object(o.a)(t,2),c=s[0],n=s[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(x.a)(O.a.mark((function t(){var s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("http://localhost:5000/api/posts?user=".concat(e.username));case 2:s=t.sent,n(s.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(j.jsx)("div",{className:"myPosts",children:Object(j.jsx)(N,{posts:c})})};var F=function(){var e=Object(a.useContext)(p);return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(S,{})}),Object(j.jsx)(l.a,{path:"/login",element:Object(j.jsx)(k,{})}),Object(j.jsx)(l.a,{path:"/register",element:Object(j.jsx)(P,{})}),Object(j.jsx)(l.a,{path:"/post/:id",element:Object(j.jsx)(R,{})}),Object(j.jsx)(l.a,{path:"/setting",element:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{path:"/write",element:e?Object(j.jsx)(E,{}):Object(j.jsx)(k,{})}),Object(j.jsx)(l.a,{path:"/mypost",element:Object(j.jsx)(U,{})})]})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{children:Object(j.jsx)(F,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.a67fe743.chunk.js.map