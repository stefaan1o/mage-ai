(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{63878:function(n,t,i){"use strict";i.r(t);var u=i(82684),e=i(34376),a=i(82531);t.default=function(){var n,t=(0,e.useRouter)(),i=(t.basePath,t.asPath),o=i.split("?")[0],s=a.ZP.statuses.list().data,l=(0,u.useMemo)((function(){var n;return null===s||void 0===s||null===(n=s.statuses)||void 0===n?void 0:n[0]}),[s]),r=a.ZP.pipeline_runs.list({_limit:0}).data,v=0===(0,u.useMemo)((function(){var n;return(null===r||void 0===r||null===(n=r.metadata)||void 0===n?void 0:n.count)||0}),[null===r||void 0===r||null===(n=r.metadata)||void 0===n?void 0:n.count])?"/pipelines":"/overview";(0,u.useEffect)((function(){if(l){var n=null===l||void 0===l?void 0:l.is_instance_manager,u=i;"/"===o&&(u=n?"/manage":v),r&&t.replace(u)}}),[o,i,r,l,v,t])}},48312:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(63878)}])}},function(n){n.O(0,[9774,2888,179],(function(){return t=48312,n(n.s=t);var t}));var t=n.O();_N_E=t}]);