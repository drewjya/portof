(this.webpackJsonpportof=this.webpackJsonpportof||[]).push([[0],{27:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var s=i(2),a=i.n(s),c=i(19),n=i.n(c),o=(i(27),i(22)),r=i(3),u=i(9),l=i(15),d=i(16),j=i(17),b=i(18),m=function(){var e=function(e,t){var i=Object(s.useState)((function(){try{var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(s){return console.log(s),t}})),a=Object(u.a)(i,2),c=a[0],n=a[1];return[c,function(t){try{var i=t instanceof Function?t(c):t;n(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(s){console.log(s)}}]}("dark-theme"),t=Object(u.a)(e,2),i=t[0],a=t[1],c="undefined"===typeof enabledState&&i;return Object(s.useEffect)((function(){var e="dark",t=window.document.body.classList;c?t.add(e):t.remove(e)}),[i,c]),[i,a]},p=i(11),x=i(1),h=function(){var e=m(),t=Object(u.a)(e,2),i=t[0],s=t[1];return Object(x.jsx)("span",{className:"themeIcon dark:bg-gray-700 dark:text-green-300",onClick:function(){return s(!i)},children:i?Object(x.jsx)(b.a,{size:"24",className:"top-navigation-icon"}):Object(x.jsx)(b.b,{size:"24",className:"top-navigation-icon"})})},f=function(e){var t=Object(r.e)(),i=Object(s.useState)(e.name),a=Object(u.a)(i,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){switch(c){default:t.push("/portof/");break;case"skills":t.push("/portof/skills");break;case"education":t.push("/portof/education");break;case"project":t.push("/portof/project");break;case"contact":t.push("/portof/contact")}}),[c,t]),Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsxs)("div",{className:"sidebar-icon group ",onClick:function(){return n("profile")},children:["profile"===c?Object(x.jsx)("div",{className:"tab-icon",children:Object(x.jsx)(l.a,{size:"28"})}):Object(x.jsx)("div",{className:"tab-icon-off",children:Object(x.jsx)(l.a,{size:"28"})}),Object(x.jsx)("span",{class:"sidebar-tooltip group-hover:scale-100",children:"Profile"})]}),Object(x.jsxs)("div",{className:"sidebar-icon group ",onClick:function(){return n("skills")},children:["skills"===c?Object(x.jsx)("div",{className:"tab-icon",children:Object(x.jsx)(d.a,{size:"28"})}):Object(x.jsx)("div",{className:"tab-icon-off",children:Object(x.jsx)(d.a,{size:"28"})}),Object(x.jsx)("span",{class:"sidebar-tooltip group-hover:scale-100",children:"Skills"})]}),Object(x.jsxs)("div",{className:"sidebar-icon group",onClick:function(){return n("education")},children:["education"===c?Object(x.jsx)("div",{className:"tab-icon",children:Object(x.jsx)(j.a,{size:"28"})}):Object(x.jsx)("div",{className:"tab-icon-off",children:Object(x.jsx)(j.a,{size:"28"})}),Object(x.jsx)("span",{class:"sidebar-tooltip group-hover:scale-100",children:"Education"})]}),Object(x.jsxs)("div",{className:"sidebar-icon group",onClick:function(){return n("project")},children:["project"===c?Object(x.jsx)("div",{className:"tab-icon",children:Object(x.jsx)(p.b,{size:"28"})}):Object(x.jsx)("div",{className:"tab-icon-off",children:Object(x.jsx)(p.b,{size:"28"})}),Object(x.jsx)("span",{class:"sidebar-tooltip group-hover:scale-100",children:"Project"})]}),Object(x.jsxs)("div",{className:"sidebar-icon group",onClick:function(){return n("contact")},children:["contact"===c?Object(x.jsx)("div",{className:"tab-icon",children:Object(x.jsx)(p.a,{size:"28"})}):Object(x.jsx)("div",{className:"tab-icon-off",children:Object(x.jsx)(p.a,{size:"28"})}),Object(x.jsx)("span",{class:"sidebar-tooltip group-hover:scale-100",children:"Contact"})]}),Object(x.jsx)(h,{})]})};var O=function(){return Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(f,{name:"contact"}),Object(x.jsx)("div",{className:"content",children:Object(x.jsx)("div",{className:"isi",children:Object(x.jsx)("h1",{children:"Contact Hekksdjksdhdh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores cupiditate ad dicta, est eaque inventore at sequi voluptate officiis, beatae quam pariatur sunt veniam temporibus voluptates quibusdam voluptatibus labore sapiente alias expedita distinctio consequatur maxime impedit. Corporis sint nesciunt fugit ullam consequatur. Veniam, aliquid omnis! Iusto quia sunt rem."})})})]})};var v=function(){return Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(f,{name:"education"}),Object(x.jsx)("div",{className:"content",children:Object(x.jsx)("div",{className:"isi",children:Object(x.jsx)("h1",{children:"Test Education Hekksdjksdhdh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores cupiditate ad dicta, est eaque inventore at sequi voluptate officiis, beatae quam pariatur sunt veniam temporibus voluptates quibusdam voluptatibus labore sapiente alias expedita distinctio consequatur maxime impedit. Corporis sint nesciunt fugit ullam consequatur. Veniam, aliquid omnis! Iusto quia sunt rem."})})})]})};var N=function(){return Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(f,{name:"profile"}),Object(x.jsx)("div",{className:"content",children:Object(x.jsx)("div",{className:"isi",children:Object(x.jsx)("h1",{children:"Profile Hekksdjksdhdh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores cupiditate ad dicta, est eaque inventore at sequi voluptate officiis, beatae quam pariatur sunt veniam temporibus voluptates quibusdam voluptatibus labore sapiente alias expedita distinctio consequatur maxime impedit. Corporis sint nesciunt fugit ullam consequatur. Veniam, aliquid omnis! Iusto quia sunt rem."})})})]})};var q=function(){return Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(f,{name:"project"}),Object(x.jsx)("div",{className:"content",children:Object(x.jsx)("div",{className:"isi",children:Object(x.jsx)("h1",{children:"Project Hekksdjksdhdh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores cupiditate ad dicta, est eaque inventore at sequi voluptate officiis, beatae quam pariatur sunt veniam temporibus voluptates quibusdam voluptatibus labore sapiente alias expedita distinctio consequatur maxime impedit. Corporis sint nesciunt fugit ullam consequatur. Veniam, aliquid omnis! Iusto quia sunt rem."})})})]})};var k=function(){return Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(f,{name:"skills"}),Object(x.jsx)("div",{className:"content",children:Object(x.jsx)("div",{className:"isi",children:Object(x.jsx)("h1",{children:"Skills Hekksdjksdhdh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores cupiditate ad dicta, est eaque inventore at sequi voluptate officiis, beatae quam pariatur sunt veniam temporibus voluptates quibusdam voluptatibus labore sapiente alias expedita distinctio consequatur maxime impedit. Corporis sint nesciunt fugit ullam consequatur. Veniam, aliquid omnis! Iusto quia sunt rem."})})})]})};var g=function(){return Object(x.jsxs)(o.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(r.a,{exact:!0,path:"/portof/",component:N}),Object(x.jsx)(r.a,{exact:!0,path:"/portof/skills",component:k}),Object(x.jsx)(r.a,{exact:!0,path:"/portof/education",component:v}),Object(x.jsx)(r.a,{exact:!0,path:"/portof/project",component:q}),Object(x.jsx)(r.a,{exact:!0,path:"/portof/contact",component:O})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,38)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),s(e),a(e),c(e),n(e)}))};n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.eaabd23e.chunk.js.map