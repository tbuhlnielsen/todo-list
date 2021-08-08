(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(11),i=n.n(r),a=n(130),o=n(63),l=n(129),d=n(128),s=n(83),j=n(44),u=n.n(j),b=n(131),p=n(13),x=n(32),O=n(10),h=n(30);var f=function(e,t){switch(t.type){case"item/add":return e.concat({id:Object(x.a)(),text:t.payload.text,complete:!1});case"item/toggle":return e.map((function(e){return e.id===t.payload.id?Object(h.a)(Object(h.a)({},e),{},{complete:!e.complete}):e}));case"item/delete":return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},m=function(e,t){switch(t.type){case"filter/set":return t.payload.filter;default:return e}},v=function(e,t){switch(t.type){case"colorMode/toggle":return"light"===e?"dark":"light";default:return e}},y=n(3),g=[{id:Object(x.a)(),text:"Hello, world!",complete:!0},{id:Object(x.a)(),text:"This is an example todo item.",complete:!0},{id:Object(x.a)(),text:"Add your own todo items in the textbox above.",complete:!1}],w=function(){var e=c.createContext(void 0);return[function(){var t=c.useContext(e);if(void 0===t)throw new Error("useDefinedContext must be inside a Provider with a value");return t},e]}(),k=Object(p.a)(w,2),C=k[0],M=k[1],A=function(e){var t,n=(t={todos:c.useReducer(f,g),filter:c.useReducer(m,"all"),colorMode:c.useReducer(v,"light")},[Object.keys(t).reduce((function(e,n){return Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},n,t[n][0]))}),{}),function(e){return Object.keys(t).map((function(e){return t[e][1]})).forEach((function(t){return t(e)}))}]),r=Object(p.a)(n,2),i=r[0],a=r[1];return Object(y.jsx)(M.Provider,{value:{state:i,dispatch:a},children:e.children})},R={position:"fixed",right:"20px",top:"10px"},S=function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},E=function(){var e=C(),t=e.state,n=e.dispatch,c=t.colorMode,r="".concat(S("light"===c?"dark":"light")," mode");return Object(y.jsx)("div",{style:R,children:Object(y.jsx)(b.a,{title:r,arrow:!0,children:Object(y.jsx)(s.a,{onClick:function(){n({type:"colorMode/toggle"})},"aria-label":r,children:Object(y.jsx)(u.a,{})})})})},I=n(120),P=n(119),T=n(84),D=n(132),F=n(135),J=function(){var e=C(),t=e.state,n=e.dispatch;return Object(y.jsxs)(P.a,{component:"fieldset",children:[Object(y.jsx)(T.a,{component:"legend",children:"Show"}),Object(y.jsxs)(F.a,{row:!0,"aria-label":"filter",name:"filter",value:t.filter,onChange:function(e){var t=e.target.value;n({type:"filter/set",payload:{filter:t}})},children:[Object(y.jsx)(I.a,{value:"all",control:Object(y.jsx)(D.a,{}),label:"All"}),Object(y.jsx)(I.a,{value:"complete",control:Object(y.jsx)(D.a,{}),label:"Complete"}),Object(y.jsx)(I.a,{value:"incomplete",control:Object(y.jsx)(D.a,{}),label:"Incomplete"})]})]})},W=n(61),q=n.n(W),B=n(122),H=n(121),L=n(133),U=function(){var e=c.useState(""),t=Object(p.a)(e,2),n=t[0],r=t[1],i=C().dispatch;return Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),i({type:"item/add",payload:{text:n}}),r("")},children:Object(y.jsxs)(P.a,{variant:"outlined",fullWidth:!0,children:[Object(y.jsx)(H.a,{htmlFor:"component-outlined",children:"Add an item"}),Object(y.jsx)(L.a,{id:"component-outlined",value:n,onChange:function(e){r(e.target.value)},label:"Add an item",endAdornment:Object(y.jsx)(B.a,{position:"end",children:Object(y.jsx)(s.a,{type:"submit",children:Object(y.jsx)(q.a,{})})}),required:!0})]})})},z=n(127),G=n(123),K=n(124),N=n(126),Q=n(125),V=n(134),X=n(62),Y=n.n(X),Z=function(e){var t=e.item,n=t.id,c=t.text,r=t.complete,i=C().dispatch,a="todo-list-label-".concat(n);return Object(y.jsxs)(G.a,{role:"listitem",button:!0,onClick:function(){i({type:"item/toggle",payload:{id:n}})},children:[Object(y.jsx)(K.a,{children:Object(y.jsx)(V.a,{edge:"start",checked:r,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":a}})}),Object(y.jsx)(Q.a,{id:a,primary:c}),Object(y.jsx)(N.a,{children:Object(y.jsx)(s.a,{edge:"end","aria-label":"delete",onClick:function(){i({type:"item/delete",payload:{id:n}})},children:Object(y.jsx)(Y.a,{})})})]})},$=function(e,t){return e.filter((function(e){return"all"===t||(!("complete"!==t||!e.complete)||"incomplete"===t&&!e.complete)}))},_=function(){var e=C().state,t=$(e.todos,e.filter);return Object(y.jsx)(z.a,{children:t.map((function(e){return Object(y.jsx)(Z,{item:e},e.id)}))})},ee={marginTop:"24px"},te=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J,{}),Object(y.jsxs)("div",{style:ee,children:[Object(y.jsx)(U,{}),Object(y.jsx)(_,{})]})]})},ne={textAlign:"center"},ce=function(){return Object(y.jsx)("header",{style:ne,children:Object(y.jsx)("h1",{children:"Todo List"})})},re=function(){var e=C().state.colorMode,t=c.useMemo((function(){return Object(o.a)({palette:{type:e}})}),[e]);return Object(y.jsxs)(d.a,{theme:t,children:[Object(y.jsx)(l.a,{}),Object(y.jsx)(E,{}),Object(y.jsxs)(a.a,{maxWidth:"sm",children:[Object(y.jsx)(ce,{}),Object(y.jsx)(te,{})]})]})};i.a.render(Object(y.jsx)(c.StrictMode,{children:Object(y.jsx)(A,{children:Object(y.jsx)(re,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.9b6dff15.chunk.js.map