(this["webpackJsonpcalender-app"]=this["webpackJsonpcalender-app"]||[]).push([[0],{13:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),r=n.n(s),a=(n(13),n(3)),d=n(2),j=function(e){var t=e.time,n=e.entry,c=e.assigned;return Object(d.jsxs)("div",{className:"eventCard",children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("h3",{children:n}),Object(d.jsx)("h3",{children:c})]})},l=function(e){var t=e.events,n=e.time,i=Object(c.useState)(t),s=Object(a.a)(i,2),r=s[0],l=s[1];return Object(c.useEffect)((function(){l(t.filter((function(e){return e.time===n})))}),[t]),Object(d.jsxs)("div",{className:"time",children:[Object(d.jsxs)("div",{children:[n,Object(d.jsx)("hr",{})]}),r.map((function(e,t){return Object(d.jsx)(j,{time:e.time,entry:e.entry,assigned:e.assigned},t)}))]})},u=["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"],b=function(e){var t=e.events,n=e.day,i=Object(c.useState)(t),s=Object(a.a)(i,2),r=s[0],j=s[1];return Object(c.useEffect)((function(){j(t.filter((function(e){return e.day===n})))}),[n,t]),Object(d.jsxs)("div",{className:"events",children:[Object(d.jsx)("h2",{children:n}),u.map((function(e,t){return Object(d.jsx)(l,{events:r,time:e},t)}))]})},M=function(e){var t=e.events,n=e.day,i=Object(c.useState)(t),s=Object(a.a)(i,2),r=s[0],l=s[1];return Object(c.useEffect)((function(){l(t.filter((function(e){return e.day===n})))}),[n,t]),Object(d.jsxs)("div",{className:"summary",children:[Object(d.jsx)("h2",{children:"All Day Event(s)"}),Object(d.jsx)("div",{className:"summaryEventCards",children:r.map((function(e,t){return Object(d.jsx)(j,{time:e.time,entry:e.entry,assigned:e.assigned},t)}))})]})},o=n(8),O=(n(15),n(5)),f=n.n(O),m=[{day:"October 9th 2021",time:"1 PM",entry:"Artificial Intelligence",assigned:"Advin Netto"},{day:"October 10th 2021",time:"5 PM",entry:"Artificial Intelligence",assigned:"Advin Netto"},{day:"October 9th 2021",time:"7 PM",entry:"Artificial Intelligence",assigned:"Advin Netto"},{day:"October 9th 2021",time:"7 PM",entry:"Artificial Intelligence",assigned:"Advin Netto"},{day:"October 11th 2021",time:"7 PM",entry:"Artificial Intelligence",assigned:"Advin Netto"}],v=function(){var e=Object(c.useState)(new Date),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o.a,{className:"calendar",onChange:i,value:n}),Object(d.jsx)(b,{events:m,day:f()(n).format("MMMM Do YYYY")}),Object(d.jsx)(M,{events:m,day:f()(n).format("MMMM Do YYYY")})]})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f10bfe98.chunk.js.map