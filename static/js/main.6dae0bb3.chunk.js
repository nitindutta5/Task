(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(2),c=n.n(r),i=n(13),s=n.n(i),l=(n(20),n(7)),d=n(9),o=n(11),u=(n.p,n(21),n(27)),j=n(26),m=n(28),b=n(29),h=n(30),p=n(31),x=n(32),O=[{texts:{header:"Please provide pincode"},inputs:[{label:"Pincode",type:"text",name:"pincode",validation:{required:!0,minLength:6,maxLength:7},error:"Invalid Pincode"}]},{texts:{header:"Please provide address"},inputs:[{label:"Address line 1",type:"text",name:"address-line-1",validation:{required:!0},error:"Please provide Address"},{label:"Address line 2",type:"text",name:"address-line-2"},{label:"Locality",type:"text",name:"locality",validation:{required:!0},error:"Please provide Locality"}]},{texts:{header:"Please provide landmark"},inputs:[{label:"Landmark",type:"textarea",name:"landmark"}]}],f=function(e){var t=e.props;return console.log(t.string),Object(a.jsxs)(j.a,{children:[Object(a.jsx)("h2",{className:"text-center",children:"Summary"}),Object.keys(t).map((function(e,n){return Object(a.jsx)("div",{className:"mb-2",children:"".concat(e,":").concat(t[e])},n)}))]})};var v=function(){var e=Object(r.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)({}),s=Object(o.a)(i,2),v=s[0],g=s[1],y=Object(r.useState)(!1),L=Object(o.a)(y,2),k=L[0],P=L[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u.a,{children:k?Object(a.jsx)(f,{props:n}):Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n),P(!k)},children:[O.map((function(e,t){return Object(a.jsxs)(j.a,{className:"mb-4 p-4",children:[Object(a.jsx)(m.a,{className:"mb-2",children:e.texts.header}),e.inputs.map((function(e,t){return Object(a.jsxs)(b.a,{className:"mb-1",children:[Object(a.jsx)(h.a,{md:"4",children:Object(a.jsx)(m.a,{children:e.label})}),Object(a.jsxs)(h.a,{md:"8",children:[Object(a.jsx)(p.a,{type:e.type,name:e.name,required:e.required,max:e.maxLength,min:e.minLength,onChange:function(t){return function(e,t){t.preventDefault(),c(Object(d.a)(Object(d.a)({},n),{},Object(l.a)({},e,t.target.value)))}(e.name,t)},value:n[e.name],onBlur:function(t){return function(e,t,a){if(e){var r=n[t];1==Object.keys(e).some((function(t){switch(t){case"required":if(""===r)return!0;case"maxLenght":if(r.length>e.maxLength)return!0;case"minLength":if(r.length<e.minLength)return!0}}))&&g(Object(d.a)(Object(d.a)({},v),{},Object(l.a)({},t,!0)))}}(e.validation,e.name)}}),v[e.name]&&Object(a.jsx)("div",{className:"error",children:e.error})]})]},t)}))]},t)})),Object(a.jsx)(x.a,{type:"submit",children:"Submit"})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(24);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),g()}},[[25,1,2]]]);
//# sourceMappingURL=main.6dae0bb3.chunk.js.map