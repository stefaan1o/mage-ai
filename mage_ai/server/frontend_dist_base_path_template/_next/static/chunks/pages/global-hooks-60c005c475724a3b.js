(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3009],{92656:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return I}});var i=o(77837),l=o(38860),t=o.n(l),r=o(82684),u=o(71180),c=o(94629),d=o(11364),s=o(82394),a=o(12691),p=o.n(a),v=o(38626),f=o(34376),h=o(48670),b=o(75499),m=o(30160),k=o(35686),j={default:!0,monospace:!0},w=o(81728),y=o(55283),_=o(86735),g=o(28598);function x(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function P(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?x(Object(o),!0).forEach((function(n){(0,s.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var O=function(){var e=(0,r.useContext)(v.ThemeContext),n=(0,f.useRouter)(),o=(0,r.useState)(null),i=o[0],l=(o[1],k.ZP.global_hooks.list({_format:"with_pipeline_details"}).data),t=(0,r.useMemo)((function(){return(null===l||void 0===l?void 0:l.global_hooks)||[]}),[l]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(b.Z,{columnFlex:[null,null,null,null,1],columns:[{uuid:"UUID"},{uuid:"Resource"},{uuid:"Operation"},{uuid:"Pipeline"},{uuid:"Outputs"}],onClickRow:function(e,o){var i=null===t||void 0===t?void 0:t[e],l=i.operation_type,r=i.resource_type,u=i.uuid;n.push("/global-hooks/".concat(u,"?operation_type=").concat(l,"&resource_type=").concat(r))},getObjectAtRowIndex:function(e){return null===t||void 0===t?void 0:t[e]},rows:null===t||void 0===t?void 0:t.map((function(n){var o,i=n.operation_type,l=n.outputs,t=n.pipeline,u=n.pipeline_details,c=n.resource_type,d=n.uuid,s=null===t||void 0===t?void 0:t.uuid,a=s?(0,g.jsx)(p(),{as:"/pipelines/".concat(s,"/edit"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,g.jsx)(h.Z,P(P({},j),{},{openNewWindow:!0,children:s}))},"pipeline"):(0,r.createElement)(m.ZP,P(P({},j),{},{key:"pipeline",muted:!0}),"-"),v=[];if((null===l||void 0===l?void 0:l.length)>=1&&(null===u||void 0===u||null===(o=u.blocks)||void 0===o?void 0:o.length)>=1){var f=(0,_.HK)((null===u||void 0===u?void 0:u.blocks)||[],(function(e){return e.uuid}));null===l||void 0===l||l.forEach((function(n,o){var i;if(null!==n&&void 0!==n&&null!==(i=n.block)&&void 0!==i&&i.uuid){var l,t=null===f||void 0===f?void 0:f[null===n||void 0===n||null===(l=n.block)||void 0===l?void 0:l.uuid];t&&(o>=1&&v.push((0,r.createElement)(m.ZP,P(P({},j),{},{inline:!0,key:"".concat(null===t||void 0===t?void 0:t.uuid,"-").concat(o,"-comma"),muted:!0}),",\xa0")),v.push((0,g.jsx)(p(),{as:"/pipelines/".concat(s,"/edit?block_uuid=").concat(null===t||void 0===t?void 0:t.uuid),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,g.jsx)(h.Z,P(P({},j),{},{inline:!0,openNewWindow:!0,sameColorAsText:!0,children:(0,g.jsx)(m.ZP,P(P({},j),{},{color:(0,y.qn)(null===t||void 0===t?void 0:t.type,{blockColor:null===t||void 0===t?void 0:t.color,theme:e}).accent,inline:!0,children:null===t||void 0===t?void 0:t.uuid}))}))},"".concat(null===t||void 0===t?void 0:t.uuid,"-").concat(o,"-link"))))}}))}return[(0,r.createElement)(m.ZP,P(P({},j),{},{key:"uuid"}),d),(0,r.createElement)(m.ZP,P(P({},j),{},{key:"resourceType",monospace:!1}),c?(0,w.j3)(c):"-"),(0,r.createElement)(m.ZP,P(P({},j),{},{key:"operationType",monospace:!1}),i?(0,w.vg)(i):"-"),a,(0,g.jsxs)("div",{children:[(null===v||void 0===v?void 0:v.length)>=1&&v,!(null!==v&&void 0!==v&&v.length)&&(0,g.jsx)(m.ZP,P(P({},j),{},{muted:!0,children:"-"}))]},"outputs")]})),selectedRowIndexInternal:i,uuid:"GlobalHooks/Table"})})},Z=o(93808),E=o(72473),C=o(70515),N=o(69419);function T(){var e=(0,r.useState)(!1),n=e[0],o=e[1],i=(0,N.iV)();return(0,r.useEffect)((function(){var e=i.new;o(!!e)}),[i]),(0,g.jsxs)(c.Z,{addProjectBreadcrumbToCustomBreadcrumbs:n,breadcrumbs:n?[{label:function(){return"Global hooks"},linkProps:{href:"/global-hooks"}},{bold:!0,label:function(){return"New"}}]:null,subheaderChildren:!n&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(u.ZP,{beforeIcon:(0,g.jsx)(E.mm,{size:2.5*C.iI}),inline:!0,linkProps:{as:"/global-hooks?new=1",href:"/global-hooks"},noHoverUnderline:!0,primary:!0,sameColorAsText:!0,children:"Add new global hook"})}),title:"Global hooks",uuid:"GlobalHooks/index",children:[n&&(0,g.jsx)(d.Z,{isNew:n}),!n&&(0,g.jsx)(O,{})]})}T.getInitialProps=(0,i.Z)(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var I=(0,Z.Z)(T)},95140:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/global-hooks",function(){return o(92656)}])}},function(e){e.O(0,[2678,1154,844,4267,600,8487,8264,7858,5499,595,9774,2888,179],(function(){return n=95140,e(e.s=n);var n}));var n=e.O();_N_E=n}]);