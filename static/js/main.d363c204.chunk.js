(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),s=c(5),i=c(1),b=(c(10),c(4)),l=c.n(b),d=c(0),o=function(t){var e=t.tabs,c=t.selectedTab,a=t.setSelectedTab;return Object(d.jsxs)("div",{className:"tabs is-toggle is-fullwidth is-large",children:[Object(d.jsx)("ul",{className:"nav nav-tabs",children:e.map((function(t){return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("button",{type:"button",className:l()("nav-link",{active:c.id===t.id}),onClick:function(){t.id!==c.id&&a(t)},children:t.title})},t.id)}))}),Object(d.jsx)("div",{"data-cy":"tab-content",children:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(i.useState)(r[0]),e=Object(s.a)(t,2),c=e[0],a=e[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Selected tab is ".concat(c.title)}),Object(d.jsx)(o,{tabs:r,selectedTab:c,setSelectedTab:a})]})};n.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d363c204.chunk.js.map