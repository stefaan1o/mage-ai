(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6308],{63153:function(e,n,r){"use strict";r.d(n,{Z3:function(){return t},ms:function(){return i},s7:function(){return o}});var t=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",disabled:!1,label:"Email",required:!0,type:"email",uuid:"email"}],o="password_current",i=[{autoComplete:"current-password",label:"Current password",type:"password",uuid:o},{autoComplete:"new-password",label:"New password",type:"password",uuid:"password"},{autoComplete:"new-password",label:"Confirm new password",type:"password",uuid:"password_confirmation"}]},20582:function(e,n,r){"use strict";var t=r(82394),o=r(21831),i=r(75582),u=r(21764),d=r(82684),s=r(83455),l=r(60328),c=r(67971),a=r(87372),f=r(55378),p=r(86673),h=r(82944),v=r(81132),m=r(82531),b=r(66166),w=r(63153),g=r(9736),x=r(7715),Z=r(96510),_=r(24224),j=r(28598);function y(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.disabledFields,r=e.hideFields,y=e.newUser,P=e.onDeleteSuccess,C=e.onSaveSuccess,k=e.showDelete,I=e.title,S=e.user,E=(0,d.useState)(!0),T=E[0],N=E[1],D=(0,d.useState)({}),H=D[0],W=D[1],V=(0,d.useState)(null),q=V[0],R=V[1],M=((0,g.PR)()||{}).owner,F=m.ZP.roles.list({limit_roles:!!y},{revalidateOnFocus:!1}),A=F.data,B=(F.mutate,(0,d.useMemo)((function(){return(null===A||void 0===A?void 0:A.roles)||[]}),[null===A||void 0===A?void 0:A.roles])),L=(0,s.Db)(y?m.ZP.users.useCreate():m.ZP.users.useUpdate(null===S||void 0===S?void 0:S.id),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(e){var n=e.user,r=(0,x.GL)(n,w.Z3.concat(w.ms).map((function(e){return e.uuid})));R(r),u.Am.success(y?"New user created successfully.":"User profile successfully updated.",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),null===C||void 0===C||C(r)},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.exception,o=n.message,i=n.type;u.Am.error((null===r||void 0===r?void 0:r.error)||t||o,{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:i})}})}}),U=(0,i.Z)(L,2),G=U[0],Q=U[1].isLoading,X=(0,s.Db)(m.ZP.users.useDelete(null===S||void 0===S?void 0:S.id),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(){null===P||void 0===P||P()},onErrorCallback:function(e){var n=e.error,r=n.errors,t=n.message;alert(t),console.log(r)}})}}),Y=(0,i.Z)(X,2),z=Y[0],J=Y[1].isLoading,K=r?(0,o.Z)(r):[];y&&K.push(w.s7);var $=!K||!K.includes(w.s7),ee=(0,b.Z)(S);(0,d.useEffect)((function(){if(S&&(!q||(null===ee||void 0===ee?void 0:ee.id)!==(null===S||void 0===S?void 0:S.id))){var e=w.Z3.concat(w.ms).map((function(e){return e.uuid}));R((0,x.GL)(S,e))}null!==q&&void 0!==q&&q.password||null!==q&&void 0!==q&&q.password_confirmation?(null===q||void 0===q?void 0:q.password)!==(null===q||void 0===q?void 0:q.password_confirmation)?W({password_confirmation:"Password confirmation does not match."}):!$||null!==q&&void 0!==q&&q.password_current?W(null):W({password_current:"This field is required."}):null!==q&&void 0!==q&&q.password_current&&$?null!==q&&void 0!==q&&q.password&&null!==q&&void 0!==q&&q.password_confirmation?W(null):W({password:"This field is required.",password_confirmation:"This field is required."}):null!==q&&void 0!==q&&q.password_current||null!==q&&void 0!==q&&q.password||null!==q&&void 0!==q&&q.password_confirmation||W(null)}),[q,$,S,ee]);var ne=(0,d.useMemo)((function(){var e,n,r=null===q||void 0===q?void 0:q.roles_new;return r&&r.length>0?null===(e=r[0])||void 0===e?void 0:e.id:null!==S&&void 0!==S&&S.roles_new&&(null===S||void 0===S?void 0:S.roles_new.length)>0?null===(n=S.roles_new[0])||void 0===n?void 0:n.id:null!==q&&void 0!==q&&q.owner?v.No.OWNER:null===q||void 0===q?void 0:q.roles}),[q,S]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.Z,{children:I||"Edit profile"}),(0,j.jsxs)("form",{children:[w.Z3.filter((function(e){var n=e.uuid;return!K||!K.includes(n)})).map((function(e){var n=e.autoComplete,r=e.disabled,o=e.label,i=e.required,u=e.type,d=e.uuid;return(0,j.jsx)(p.Z,{mt:2,children:(0,j.jsx)(h.Z,{autoComplete:n,disabled:r&&!y,label:o,onChange:function(e){N(!1),R((function(n){return O(O({},n),{},(0,t.Z)({},d,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:u,value:(null===q||void 0===q?void 0:q[d])||""})},d)})),!(null!==S&&void 0!==S&&S.owner)&&(0,j.jsx)(p.Z,{mt:2,children:(0,j.jsxs)(f.Z,{disabled:null===n||void 0===n?void 0:n.includes("roles"),label:"Roles",onChange:function(e){N(!1);var n=(0,_.sE)(B,(function(n){return n.id==e.target.value}));if(n){var r={roles_new:[n]};R((function(e){return O(O({},e),r)}))}},primary:!0,setContentOnMount:!0,value:ne||(null===S||void 0===S?void 0:S.roles),children:[(0,j.jsx)("option",{value:""}),B.map((function(e){var n=e.id,r=e.name;return(0,j.jsx)("option",{value:n,children:r},r)}))]})}),(0,j.jsxs)(p.Z,{mt:5,children:[(0,j.jsx)(a.Z,{children:y?"Password":"Change password"}),w.ms.filter((function(e){var n=e.uuid;return!K||!K.includes(n)})).map((function(e){var n=e.autoComplete,r=e.disabled,o=e.label,i=e.required,u=e.type,d=e.uuid;return(0,j.jsx)(p.Z,{mt:2,children:(0,j.jsx)(h.Z,{autoComplete:n,disabled:r,label:o,meta:{error:null===H||void 0===H?void 0:H[d],touched:!(null===H||void 0===H||!H[d])},onChange:function(e){N(!1),R((function(n){return O(O({},n),{},(0,t.Z)({},d,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:u,value:(null===q||void 0===q?void 0:q[d])||""})},d)}))]}),(0,j.jsx)(p.Z,{mt:5,children:(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(l.Z,{disabled:T||H&&!(0,x.Qr)(H),loading:Q,onClick:function(){var e,n=O({},q);"roles_new"in n&&(n.roles_new=null===(e=q.roles_new)||void 0===e?void 0:e.map((function(e){return e.id})));G({user:n})},primary:!0,children:y?"Create new user":"Update user profile"}),k&&M&&(0,j.jsx)(p.Z,{ml:1,children:(0,j.jsx)(l.Z,{danger:!0,loading:J,onClick:function(){window.confirm("Are you sure you want to delete ".concat(q.username||q.email,"?"))&&z()},children:"Delete user"})})]})})]})]})}},29237:function(e,n,r){"use strict";var t=r(9518),o=r(67971),i=r(86673),u=r(19711),d=r(23831),s=r(73942),l=r(37391),c=r(49125),a=r(28598),f=(0,t.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*c.iI,1.5*c.iI,1.5*c.iI),p=t.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],s.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||d.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||d.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||d.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||d.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||d.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=t.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],s.n_,s.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||d.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||d.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),v=t.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*c.iI,l.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*c.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),m=t.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],s.M8,s.YF,1.75*c.iI);n.Z=function(e){var n=e.borderless,r=e.children,t=e.containerRef,d=e.contentContainerRef,s=e.dark,l=e.footer,c=e.fullHeight,f=void 0===c||c,b=e.fullWidth,w=void 0===b||b,g=e.header,x=e.headerHeight,Z=e.headerIcon,_=e.headerPaddingVertical,j=e.headerTitle,y=e.maxHeight,O=e.maxWidth,P=e.minWidth,C=e.noPadding,k=e.overflowVisible,I=e.subtitle,S=e.success;return(0,a.jsxs)(p,{borderless:n,dark:s,fullHeight:f,fullWidth:w,maxHeight:y,maxWidth:O,minWidth:P,overflowVisible:k,ref:t,success:S,children:[(g||j)&&(0,a.jsxs)(h,{headerPaddingVertical:_,height:x,children:[g&&g,j&&(0,a.jsx)(o.Z,{alignItems:"center",justifyContent:"space-between",children:(0,a.jsxs)(o.Z,{alignItems:"center",children:[Z&&Z,(0,a.jsx)(i.Z,{ml:Z?1:0,children:(0,a.jsx)(u.ZP,{bold:!0,default:!0,children:j})})]})})]}),(0,a.jsxs)(v,{maxHeight:y,noPadding:C,overflowVisible:k,ref:d,children:[I&&(0,a.jsx)(i.Z,{mb:2,children:(0,a.jsx)(u.ZP,{default:!0,children:I})}),r]}),l&&(0,a.jsx)(m,{children:l})]})}},96283:function(e,n,r){"use strict";r.r(n);var t=r(77837),o=r(38860),i=r.n(o),u=r(29237),d=r(41788),s=r(30775),l=r(86673),c=r(20582),a=r(82531),f=r(49125),p=r(79585),h=r(9736),v=r(28598);function m(){var e=((0,h.PR)()||{}).id,n=a.ZP.users.detail(e),r=n.data,t=n.mutate,o=null===r||void 0===r?void 0:r.user;return(0,v.jsx)(s.Z,{uuidItemSelected:p.DQ,uuidWorkspaceSelected:p.tC,children:(0,v.jsx)(l.Z,{p:f.cd,children:(0,v.jsx)(u.Z,{children:(0,v.jsx)(c.Z,{disabledFields:["roles"],onSaveSuccess:t,user:o})})})})}m.getInitialProps=(0,t.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,d.Z)(m)},10736:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/account/profile",function(){return r(96283)}])},80022:function(e,n,r){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return t}})},15544:function(e,n,r){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}r.d(n,{Z:function(){return t}})},99177:function(e,n,r){"use strict";function t(e,n){return t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(e,n)}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}r.d(n,{Z:function(){return o}})},93189:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(12539),o=r(80022);function i(e,n){if(n&&("object"===t(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[844,1424,1005,3077,9774,2888,179],(function(){return n=10736,e(e.s=n);var n}));var n=e.O();_N_E=n}]);