(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var c=t(4),n=t.n(c),s=t(1),l=t(2),i=t.n(l);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;const t=[];for(let c=e;c<a;c+=1)t.push(c);return t}let o;!function(e){e[e.Three=3]="Three",e[e.Five=5]="Five",e[e.Ten=10]="Ten",e[e.Twenty=20]="Twenty"}(o||(o={}));var d=t(0);const j=e=>{let{num:a,pageIndex:t,setPageIndex:c}=e;return Object(d.jsx)("li",{className:i()("page-item",{active:a===t}),onClick:()=>{a===a&&c(a)},children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(a),children:a})})},p=e=>{let{pageCount:a,pageIndex:t,setPageIndex:c}=e;const n=1===t,s=t===a-1;return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:i()("page-item",{disabled:n}),onClick:()=>1!==t&&c(t-1),children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",children:"\xab"})}),r(1,a).map((e=>Object(d.jsx)(j,{num:e,pageIndex:t,setPageIndex:c},e))),Object(d.jsx)("li",{className:i()("page-item",{disabled:s}),onClick:()=>t<a-1&&c(t+1),children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",children:"\xbb"})})]})},m=()=>{const[e,a]=Object(s.useState)(5),[t,c]=Object(s.useState)(1);let n=e*t;const l=n-(e-1),i=Math.ceil(42/e)+1;n>42&&(n=42);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(l," - ").concat(n," of ").concat(42,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:e=>{a(parseInt(e.currentTarget.value,10)),c(1)},defaultValue:5,children:Object.values(o).filter((e=>"number"===typeof e)).map((e=>Object(d.jsx)("option",{value:e,children:e})))})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(p,{pageCount:i,pageIndex:t,setPageIndex:c}),Object(d.jsx)("ul",{children:r(l,n+1).map((e=>Object(d.jsxs)("li",{"data-cy":"item",children:["Item ",e]})))})]})};n.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.705270fb.chunk.js.map