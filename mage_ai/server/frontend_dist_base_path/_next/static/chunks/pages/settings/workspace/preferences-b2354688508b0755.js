(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),u=t(49894),l=t(93461),a=t(57384),s=t(41424),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),m=t(32063),g=t(85019),b=t(82531),j=t(66166),v=t(3055),y=t(49125),x=t(91427),O=t(24141);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,p=e.afterHidden,w=e.afterWidth,P=e.afterWidthOverride,_=e.before,k=e.beforeWidth,I=e.breadcrumbs,S=e.children,C=e.errors,H=e.headerMenuItems,N=e.headerOffset,D=e.mainContainerHeader,W=e.navigationItems,E=e.setErrors,z=e.subheaderChildren,M=e.title,A=e.uuid,B=(0,O.i)().width,R="dashboard_after_width_".concat(A),F="dashboard_before_width_".concat(A),T=(0,o.useRef)(null),L=(0,o.useState)(P?w:(0,x.U2)(R,w)),V=L[0],U=L[1],Y=(0,o.useState)(!1),Q=Y[0],X=Y[1],G=(0,o.useState)(_?Math.max((0,x.U2)(F,k),13*y.iI):null),J=G[0],q=G[1],K=(0,o.useState)(!1),$=K[0],ee=K[1],ne=(0,o.useState)(null)[1],te=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];I?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(I))):(null===re||void 0===re?void 0:re.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return M}}]),(0,o.useEffect)((function(){null===T||void 0===T||!T.current||Q||$||null===ne||void 0===ne||ne(T.current.getBoundingClientRect().width)}),[Q,V,$,J,T,ne,B]),(0,o.useEffect)((function(){Q||(0,x.t8)(R,V)}),[p,Q,V,R]),(0,o.useEffect)((function(){$||(0,x.t8)(F,J)}),[$,J,F]);var ce=(0,j.Z)(w);return(0,o.useEffect)((function(){P&&ce!==w&&U(w)}),[P,w,ce]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:M}),(0,f.jsx)(s.Z,{breadcrumbs:oe,menuItems:H,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(n=re[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===W||void 0===W?void 0:W.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:W,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:r,afterHeightOffset:v.Mz,afterHidden:p,afterMousedownActive:Q,afterWidth:V,before:_,beforeHeightOffset:v.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(_?J:0),headerOffset:N,hideAfterCompletely:!0,leftOffset:_?d.k1:null,mainContainerHeader:D,mainContainerRef:T,setAfterMousedownActive:X,setAfterWidth:U,setBeforeMousedownActive:ee,setBeforeWidth:q,children:[z&&(0,f.jsx)(h,{children:z}),S]})})]}),C&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===E||void 0===E?void 0:E(null)},children:(0,f.jsx)(u.Z,Z(Z({},C),{},{onClose:function(){return null===E||void 0===E?void 0:E(null)}}))})]})}},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c},W:function(){return o}});var r=t(38626),i=t(3055),o=34*t(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},79585:function(e,n,t){"use strict";t.d(n,{DQ:function(){return s},HY:function(){return c},SA:function(){return d},WH:function(){return o},eC:function(){return l},fF:function(){return u},tC:function(){return a}});var r=t(81132),i=t(9736),o="Workspace",c="Preferences",u="Git settings",l="Users",a="Account",s="Profile",d=function(e){var n=e.owner,t=e.roles,d=e.project_access,f=[{linkProps:{href:"/settings/workspace/preferences"},uuid:c}];(n||t===r.No.ADMIN||0!==(2&d))&&f.push({linkProps:{href:"/settings/workspace/users"},uuid:l}),(!(0,i.YB)()||t<=r.No.EDITOR)&&f.push({linkProps:{href:"/settings/workspace/sync-data"},uuid:u});var p=[{items:f,uuid:o}];return(0,i.YB)()?p.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:s}],uuid:a}]):p}},30775:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(1210),i=t(82394),o=t(12691),c=t.n(o),u=t(10919),l=t(86673),a=t(19711),s=t(38626),d=t(23831),f=t(49125),p=t(90880),h=(f.iI,s.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),m=s.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,p.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||d.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||d.Z.background).codeTextarea,";\n  ")})),g=t(28598),b=t(82684);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n=e.isItemSelected,t=e.sections;return(0,g.jsx)(l.Z,{py:f.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,i=e.uuid;return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(h,{children:(0,g.jsx)(a.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,o=e.onClick,l=e.uuid,a=t?t():l,s=(0,g.jsx)(m,{selected:null===n||void 0===n?void 0:n(v(v({},e),{},{uuidWorkspace:i})),children:a});return r?(0,b.createElement)(c(),v(v({},r),{},{key:l,passHref:!0}),(0,g.jsx)(u.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:s})):(0,g.jsx)(u.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:o,preventDefault:!0,sameColorAsText:!0,children:s},l)}))]},i)}))})},x=t(2850),O=t(79585),w=t(9736);var Z=function(e){var n=e.after,t=e.afterHidden,i=e.children,o=e.uuidItemSelected,c=e.uuidWorkspaceSelected,u=(0,w.PR)()||{};return(0,g.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*f.iI:0,afterWidthOverride:!0,before:(0,g.jsx)(x.M,{children:(0,g.jsx)(y,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&o===n},sections:(0,O.SA)(u)})}),beforeWidth:x.W,title:"Settings",uuid:"settings/index",children:i})}},21853:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r=t(82394),i=t(75582),o=t(82684),c=t(83455),u=t(60328),l=t(34744),a=t(93461),s=t(67971),d=t(87372),f=t(10919),p=t(29237),h=t(86673),m=t(19711),g=t(82944),b=t(70902),j=t(82531),v=t(38626),y=t(23831),x=t(73942),O=t(49125),w=v.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],x.n_,O.cd*O.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||y.Z.background).codeArea,";\n  ")})),Z=t(96510),P=t(9728),_=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(e){var n=e.cancelButtonText,t=e.contained,v=e.header,y=e.onCancel,x=e.onSaveSuccess,k=(0,P.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),S=(0,i.Z)(k,1)[0],C=(0,o.useState)(null),H=C[0],N=C[1],D=j.ZP.projects.list(),W=D.data,E=D.mutate,z=(0,o.useMemo)((function(){var e;return null===W||void 0===W||null===(e=W.projects)||void 0===e?void 0:e[0]}),[W]),M=z||{},A=M.name,B=M.project_uuid;(0,o.useEffect)((function(){H||N(z)}),[z,H]);var R=(0,c.Db)(j.ZP.projects.useUpdate(A),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(e){var n=e.project;E(),N(n),x&&(null===x||void 0===x||x(n))},onErrorCallback:function(e,n){return S({errors:n,response:e})}})}}),F=(0,i.Z)(R,2),T=F[0],L=F[1].isLoading,V=(0,o.useCallback)((function(e){return T({project:e})}),[T]),U=(0,_.jsxs)(_.Fragment,{children:[v,(0,_.jsxs)(p.Z,{noPadding:!0,children:[(0,_.jsxs)(h.Z,{p:O.cd,children:[(0,_.jsx)(h.Z,{mb:1,children:(0,_.jsx)(d.Z,{level:5,children:"Project name"})}),(0,_.jsx)(m.ZP,{default:!0,monospace:!0,children:A})]}),(0,_.jsx)(l.Z,{light:!0}),(0,_.jsxs)(h.Z,{p:O.cd,children:[(0,_.jsx)(h.Z,{mb:1,children:(0,_.jsx)(d.Z,{level:5,children:"Project UUID"})}),(0,_.jsx)(m.ZP,{default:!!B,monospace:!0,muted:!B,children:B||"Not required"})]}),(0,_.jsx)(l.Z,{light:!0}),(0,_.jsx)(h.Z,{p:O.cd,children:(0,_.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,_.jsxs)(a.Z,{flexDirection:"column",children:[(0,_.jsx)(h.Z,{mb:1,children:(0,_.jsx)(d.Z,{level:5,children:"Help improve Mage"})}),(0,_.jsxs)(m.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,_.jsx)(f.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,_.jsx)(h.Z,{mr:O.cd}),(0,_.jsx)(b.Z,{checked:null===H||void 0===H?void 0:H.help_improve_mage,onCheck:function(){return N((function(e){return I(I({},e),{},{help_improve_mage:!(null!==H&&void 0!==H&&H.help_improve_mage)})}))}})]})})]}),(0,_.jsx)(h.Z,{mt:O.HN}),(0,_.jsx)(p.Z,{noPadding:!0,children:(0,_.jsxs)(h.Z,{p:O.cd,children:[(0,_.jsx)(h.Z,{mb:1,children:(0,_.jsx)(d.Z,{level:5,children:"Features"})}),Object.entries((null===H||void 0===H?void 0:H.features)||{}).map((function(e){var n=(0,i.Z)(e,2),t=n[0],o=n[1];return(0,_.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,_.jsx)(m.ZP,{default:!0,monospace:!0,children:t}),(0,_.jsx)(h.Z,{mr:O.cd}),(0,_.jsx)(b.Z,{checked:!!o,onCheck:function(){return N((function(e){return I(I({},e),{},{features:I(I({},null===H||void 0===H?void 0:H.features),{},(0,r.Z)({},t,!o))})}))}})]},t)}))]})}),(0,_.jsx)(h.Z,{mt:O.HN}),(0,_.jsx)(p.Z,{noPadding:!0,children:(0,_.jsxs)(h.Z,{p:O.cd,children:[(0,_.jsx)(h.Z,{mb:1,children:(0,_.jsx)(d.Z,{level:5,children:"OpenAI"})}),(0,_.jsx)(g.Z,{label:"API key",monospace:!0,onChange:function(e){return N((function(n){return I(I({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===H||void 0===H?void 0:H.openai_api_key)||""})]})}),(0,_.jsx)(h.Z,{mt:O.HN}),(0,_.jsxs)(s.Z,{alignItems:"center",children:[(0,_.jsx)(u.Z,{loading:L,onClick:function(){V({features:null===H||void 0===H?void 0:H.features,help_improve_mage:null===H||void 0===H?void 0:H.help_improve_mage,openai_api_key:null===H||void 0===H?void 0:H.openai_api_key})},primary:!0,children:"Save project settings"}),y&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h.Z,{mr:O.cd}),(0,_.jsx)(u.Z,{onClick:y,secondary:!0,children:n||"Cancel"})]})]})]});return t?(0,_.jsx)(w,{children:U}):U}},76096:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),u=["children","fullHeight","gutter","style"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,l=e.style,s=void 0===l?{}:l,d=(0,i.Z)(e,u),f=a({},s);return r&&(f.paddingLeft=r,f.paddingRight=f.paddingLeft),t&&(f.height="100%"),(0,c.jsx)(o.Col,a(a({},d),{},{style:f,children:n}))}},97361:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),u=t(28598),l=["children","fullHeight","gutter","justifyContent","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.justifyContent,d=e.style,f=void 0===d?{}:d,p=(0,i.Z)(e,l),h=s({},f);return r&&(h.marginLeft=-1*r,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,u.jsx)(c.Row,s(s({},p),{},{justifyContent:a,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},29237:function(e,n,t){"use strict";var r=t(38626),i=t(67971),o=t(86673),c=t(19711),u=t(23831),l=t(73942),a=t(37391),s=t(49125),d=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||u.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),m=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),g=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,u=e.contentContainerRef,l=e.dark,a=e.footer,s=e.fullHeight,f=void 0===s||s,b=e.fullWidth,j=void 0===b||b,v=e.header,y=e.headerHeight,x=e.headerIcon,O=e.headerPaddingVertical,w=e.headerTitle,Z=e.maxHeight,P=e.maxWidth,_=e.minWidth,k=e.noPadding,I=e.overflowVisible,S=e.subtitle,C=e.success;return(0,d.jsxs)(p,{borderless:n,dark:l,fullHeight:f,fullWidth:j,maxHeight:Z,maxWidth:P,minWidth:_,overflowVisible:I,ref:r,success:C,children:[(v||w)&&(0,d.jsxs)(h,{headerPaddingVertical:O,height:y,children:[v&&v,w&&(0,d.jsx)(i.Z,{alignItems:"center",justifyContent:"space-between",children:(0,d.jsxs)(i.Z,{alignItems:"center",children:[x&&x,(0,d.jsx)(o.Z,{ml:x?1:0,children:(0,d.jsx)(c.ZP,{bold:!0,default:!0,children:w})})]})})]}),(0,d.jsxs)(m,{maxHeight:Z,noPadding:k,overflowVisible:I,ref:u,children:[S&&(0,d.jsx)(o.Z,{mb:2,children:(0,d.jsx)(c.ZP,{default:!0,children:S})}),t]}),a&&(0,d.jsx)(g,{children:a})]})}},87372:function(e,n,t){"use strict";var r,i,o,c,u,l,a,s,d=t(82394),f=t(26304),p=t(26653),h=t(38626),m=t(33591),g=t(23831),b=t(2005),j=t(31012),v=t(19711),y=t(49125),x=t(86673),O=t(28598),w=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),k=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||g.Z.content).active,";\n  ")})),I=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],_,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),j.aQ),m.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),j.aQ),m.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),j.aQ)),S=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],_,j.MJ),C=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],_,m.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.sm(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.lg(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI)),H=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],_,j.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],_),D=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],_),W=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],_),E=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],_,(function(e){return 1===e.level&&"\n    ".concat(j.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(j.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),z=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,c=e.marketing,u=e.spacingBelow,l=(0,f.Z)(e,w);i?n=E:0===Number(o)?n=I:1===Number(o)?n=c?C:S:2===Number(o)?n=H:3===Number(o)?n=N:4===Number(o)?n=D:5===Number(o)&&(n=W);var a=(0,O.jsxs)(n,P(P({},l),{},{level:o,children:[u&&(0,O.jsx)(x.Z,{mb:r?2:3,children:t}),!u&&t]}));return i?a:(0,O.jsx)(k,{children:a})};z.defaultProps={level:3,weightStyle:6},n.Z=z},42949:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),c=t(76096),u=t(21853),l=t(41788),a=t(97361),s=t(30775),d=t(86673),f=t(49125),p=t(79585),h=t(28598);function m(){return(0,h.jsx)(s.Z,{uuidItemSelected:p.HY,uuidWorkspaceSelected:p.WH,children:(0,h.jsx)(d.Z,{p:f.cd,children:(0,h.jsx)(a.Z,{justifyContent:"center",children:(0,h.jsx)(c.Z,{xl:8,xxl:6,children:(0,h.jsx)(u.Z,{})})})})})}m.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,l.Z)(m)},33323:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/preferences",function(){return t(42949)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,1424,1005,9774,2888,179],(function(){return n=33323,e(e.s=n);var n}));var n=e.O();_N_E=n}]);