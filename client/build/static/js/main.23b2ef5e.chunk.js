(this["webpackJsonpmapping-components-practice"]=this["webpackJsonpmapping-components-practice"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(5),i=a.n(o),s=a(17),m=a(2),u=a(18),d=a.n(u),p=[],E=r.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(!1),h=Object(m.a)(u,2),f=h[0],j=h[1],v=Object(n.useState)(!1),b=Object(m.a)(v,2),g=b[0],N=b[1];function y(){return(y=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),N(!1),e.next=4,d.a.get(t).then((function(e){o(e.data),p.filter((function(t){return t.emoji===e.data.emoji})).length>0||(p.length>=6?(p.push(e.data),p.shift(),console.log(p,"Limit reached")):(p.push(e.data),console.log(p)))})).catch((function(e){return N(!0)}));case 4:j(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(E.Provider,{value:{getData:function(e){return y.apply(this,arguments)},data:l,loading:f,setLoading:j,error:g,setError:N}},t)};var f=function(e){return r.a.createElement("div",{className:"term"},r.a.createElement("dt",null,r.a.createElement("span",{className:"emoji",role:"img","aria-label":"Tense Biceps"},e.emoji),r.a.createElement("span",null,e.name)),r.a.createElement("dd",null,e.description))},j=a(19);function v(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useRef)(),o=Object(n.useContext)(E).getData;return r.a.createElement("div",{className:"flex-center flex-col"},r.a.createElement("input",{ref:l,onChange:function(e){return c(e.target.value)},className:"search-bar",type:"text",placeholder:"Enter any emoji"}),r.a.createElement("button",{className:"search-btn flex-row flex-center",onClick:function(){o("http://localhost:8080/api/".concat(a)),l.current.value=""}},r.a.createElement(j.a,null)))}function b(){var e=Object(n.useContext)(E),t=e.data,a=e.loading;return r.a.createElement("div",{className:"search-container flex-center"},t.emoji&&!a?r.a.createElement("div",{className:"search-term"},r.a.createElement("dt",null,r.a.createElement("span",{className:"emoji",role:"img","aria-label":"Tense Biceps"},t.emoji),r.a.createElement("span",null,t.name),r.a.createElement("dd",null,t.description))):a&&r.a.createElement("div",{className:"search-term"},r.a.createElement("div",{className:"loading"})))}function g(e){return r.a.createElement(f,{key:e.name,emoji:e.emoji,name:e.name,description:e.description})}var N=function(){var e=Object(n.useContext)(E),t=e.data,a=e.error;return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("span",null,"Emoty")),r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement("dl",{className:"dictionary"},t.emoji?r.a.createElement("div",{className:"w-full"},r.a.createElement("h1",{className:"history"},"History"),r.a.createElement("div",{className:"history-map"},p.map(g))):a?r.a.createElement(f,{emoji:"\ud83d\ude41",name:"No results found",description:"Please ensure that you have entered only one emoji."}):r.a.createElement(f,{emoji:"\ud83d\ude01",name:"Welcome to Emoty",description:"Just enter a single emoji and hit search, then wait for the magic to happen"})))};l.a.render(r.a.createElement(h,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.23b2ef5e.chunk.js.map