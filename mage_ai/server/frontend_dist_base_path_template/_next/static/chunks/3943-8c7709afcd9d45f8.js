"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3943],{4611:function(e,n,t){t.d(n,{f:function(){return o}});var i=t(25976),r=t(44897),l=t(70515),u=t(42631),o=i.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*l.iI,u.TR,2*l.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||r.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||r.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},53943:function(e,n,t){var i=t(82394),r=t(75582),l=t(12691),u=t.n(l),o=t(69864),c=t(82684),s=t(34376),a=t(71180),d=t(70652),p=t(50724),f=t(97618),h=t(55485),v=t(48670),m=t(44265),g=t(89515),b=t(38276),_=t(4190),x=t(75499),j=t(48381),O=t(30160),w=t(35686),y=t(44897),P=t(42631),Z=t(72473),C=t(81655),k=t(72191),E=t(39643),D=t(4611),I=t(30229),R=t(31608),N=t(70515),L=t(16488),S=t(86735),T=t(50178),V=t(72619),F=t(95924),A=t(69419),U=t(70320),B=t(3917),M=t(44688),z=t(28598);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K={monospace:!0,small:!0};function G(e){var n=e.cancelingRunId,t=e.disabled,i=e.isLoadingCancelPipeline,l=e.onCancel,u=e.onSuccess,s=e.pipelineRun,d=e.setCancelingRunId,f=e.setErrors,v=e.setShowConfirmationId,g=e.showConfirmationId,x=(0,T.Ct)(),j=s||{},C=j.id,E=j.pipeline_schedule_id,R=j.pipeline_schedule_token,N=j.pipeline_schedule_type,L=j.status,S=i&&C===n&&m.VO.RUNNING===L,F=(0,A.iV)(),U=(0,c.useMemo)((function(){return(null!==F&&void 0!==F&&F.page?+F.page:0)>0}),[null===F||void 0===F?void 0:F.page]),B=(0,o.Db)(I.Xm.API===N&&R?w.ZP.pipeline_runs.pipeline_schedules.useCreateWithParent(E,R):w.ZP.pipeline_runs.pipeline_schedules.useCreate(E),{onSuccess:function(e){return(0,V.wD)(e,{callback:function(){u()},onErrorCallback:function(e,n){return null===f||void 0===f?void 0:f({errors:n,response:e})}})}}),M=(0,r.Z)(B,1)[0],H=(0,c.useCallback)((function(){v(null),M({pipeline_run:{backfill_id:null===s||void 0===s?void 0:s.backfill_id,event_variables:(null===s||void 0===s?void 0:s.event_variables)||{},execution_date:null===s||void 0===s?void 0:s.execution_date,pipeline_schedule_id:null===s||void 0===s?void 0:s.pipeline_schedule_id,pipeline_uuid:null===s||void 0===s?void 0:s.pipeline_uuid,variables:(null===s||void 0===s?void 0:s.variables)||{}}})}),[M,s,v]),X=(0,c.useCallback)((function(){v(null),d(C),l({id:C,status:m.VO.CANCELLED})}),[l,C,d,v]);return(0,z.jsxs)("div",{style:{position:"relative"},children:[(0,z.jsx)(a.ZP,{backgroundColor:S&&y.Z.accent.yellow,beforeIcon:m.VO.INITIAL!==L&&!t&&(0,z.jsxs)(z.Fragment,{children:[m.VO.COMPLETED===L&&(0,z.jsx)(Z.Check,{size:k.bL}),[m.VO.FAILED,m.VO.CANCELLED].includes(L)&&(0,z.jsx)(Z.PlayButtonFilled,{inverted:m.VO.CANCELLED===L&&!x,size:k.bL}),[m.VO.RUNNING].includes(L)&&(0,z.jsx)(_.Z,{color:S?y.Z.status.negative:y.Z.monotone.white,small:!0})]}),borderRadius:"".concat(P.D7,"px"),danger:m.VO.FAILED===L&&!x,default:m.VO.INITIAL===L,disabled:t||x,loading:!s,onClick:function(e){e.stopPropagation(),v(C)},padding:"6px",primary:m.VO.RUNNING===L&&!S&&!x,warning:m.VO.CANCELLED===L&&!x,children:t?"Ready":S?"Canceling":m.Do[L]}),(0,z.jsx)(p.Z,{onClickOutside:function(){return v(null)},open:g===C,children:(0,z.jsxs)(D.f,{children:[[m.VO.RUNNING,m.VO.INITIAL].includes(L)&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(O.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,z.jsx)(b.Z,{mb:1}),(0,z.jsxs)(O.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,z.jsx)("br",{}),"the current pipeline run."]}),(0,z.jsx)(O.ZP,{}),(0,z.jsx)(b.Z,{mt:1,children:(0,z.jsxs)(h.ZP,{children:[(0,z.jsx)(a.ZP,{onClick:function(){X(),H()},children:"Retry run"}),(0,z.jsx)(b.Z,{ml:1}),(0,z.jsx)(a.ZP,{onClick:X,children:"Cancel run"})]})})]}),[m.VO.CANCELLED,m.VO.FAILED,m.VO.COMPLETED].includes(L)&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(O.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",L]}),(0,z.jsx)(b.Z,{mb:1}),(0,z.jsxs)(O.ZP,{children:["Retry the run with changes you have made to the pipeline.",U?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("br",{}),"Note that the retried run may appear on a previous page."]}):null]}),(0,z.jsx)(b.Z,{mb:1}),(0,z.jsx)(a.ZP,{onClick:H,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.allowBulkSelect,t=e.allowDelete,l=e.deletePipelineRun,_=e.disableKeyboardNav,y=e.disableRowSelect,D=e.emptyMessage,I=void 0===D?"No runs available":D,A=e.fetchPipelineRuns,H=e.hideTriggerColumn,Q=e.includePipelineTags,Y=e.onClickRow,q=e.pipelineRuns,J=e.selectedRun,$=e.selectedRuns,W=e.setSelectedRun,ee=e.setSelectedRuns,ne=e.setErrors,te=(0,s.useRouter)(),ie=(0,T.Ct)(),re=(0,U.qB)(),le=(0,c.useRef)({}),ue=(0,c.useState)(null),oe=ue[0],ce=ue[1],se=(0,c.useState)(null),ae=se[0],de=se[1],pe=(0,c.useState)(null),fe=pe[0],he=pe[1],ve=(0,c.useState)(0),me=ve[0],ge=ve[1],be=(0,c.useState)(0),_e=be[0],xe=be[1],je=(0,o.Db)((function(e){var n=e.id,t=e.status;return w.ZP.pipeline_runs.useUpdate(n)({pipeline_run:{status:t}})}),{onSuccess:function(e){return(0,V.wD)(e,{callback:function(){ce(null),null===A||void 0===A||A()},onErrorCallback:function(e,n){ce(null),null===ne||void 0===ne||ne({errors:n,response:e})}})}}),Oe=(0,r.Z)(je,2),we=Oe[0],ye=Oe[1].isLoading,Pe="PipelineDetail/Runs/Table",Ze="pipeline-runs",Ce=(0,c.useCallback)((function(e){if(!e)return null;var n=q.findIndex((function(n){return n.id===e.id}));return n>=0?n:null}),[q]),ke=(0,M.y)(),Ee=ke.registerOnKeyDown,De=ke.unregisterOnKeyDown;(0,c.useEffect)((function(){return function(){De(Pe)}}),[De,Pe]),Ee(Pe,(function(e,n){var t=n[E.Bu],i=n[E.kD];W&&!_&&(t||i)&&W((function(n){var r=Ce(n);if(null!==r){if(e.repeat)return e.preventDefault(),n;if(t){var l=r-1;return l<0&&(l=q.length-1),q[l]}if(i){var u=r+1;return u>=q.length&&(u=0),q[u]}}return n}))}),[q,W]),(0,c.useEffect)((function(){var e=Ce(J);if(null!==e){var n=(0,C.w4)({rowIndex:e,uuid:Ze}),t=document.getElementById(n);t&&t.scrollIntoView({behavior:"smooth",block:"center"})}}),[Ce,J]);var Ie=re?C.O$:{},Re=[null,null,null,null,1],Ne=[{uuid:"Status"},{center:!0,uuid:"Logs"},{center:!0,uuid:"ID"},{uuid:"Block runs"},{uuid:"Pipeline"}];H||(Re.push(1),Ne.push({uuid:"Trigger"})),Q&&(Re.push(null),Ne.push({uuid:"Pipeline tags"})),Re.push.apply(Re,[1,1,1,null,null]),Ne.push.apply(Ne,[X(X({},Ie),{},{uuid:"Execution date"}),X(X({},Ie),{},{uuid:"Started at"}),X(X({},Ie),{},{uuid:"Completed at"}),{uuid:"Execution time"}]),t&&!ie&&(Re.push.apply(Re,[null]),Ne.push({label:function(){return""},uuid:"Delete"}));var Le=(0,c.useMemo)((function(){return q.every((function(e){var n=e.id;return!(null===$||void 0===$||!$[n])}))}),[q,$]);n&&(Re.unshift(null),Ne.unshift({label:function(){return(0,z.jsx)(d.Z,{checked:Le,onClick:function(){var e=(0,S.HK)(q||[],(function(e){return e.id}));ee(Le?{}:e)}})},uuid:"Selected"})),!y&&Y&&(Re.push(null),Ne.push({label:function(){return""},uuid:"action"}));var Se=(0,c.useCallback)((function(e,n){if(Y&&ee&&n&&n.metaKey){var t=q[e];ee((function(e){var n=!(null===e||void 0===e||!e[t.id]);return X(X({},e),{},(0,i.Z)({},t.id,n?null:t))}))}else Y&&Y(e)}),[Y,q,ee]);return(0,z.jsx)(R.cl,{minHeight:30*N.iI,overflowVisible:!!ae,children:0===(null===q||void 0===q?void 0:q.length)?(0,z.jsx)(b.Z,{px:3,py:1,children:(0,z.jsx)(O.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:I})}):(0,z.jsx)(x.Z,{columnFlex:Re,columns:Ne,isSelectedRow:function(e){return!y&&q[e].id===(null===J||void 0===J?void 0:J.id)},onClickRow:y?null:Se,rowVerticalPadding:6,rows:null===q||void 0===q?void 0:q.map((function(e,r){var o=e.block_runs_count,s=e.completed_block_runs_count,_=e.completed_at,x=e.execution_date,w=e.id,E=e.pipeline_schedule_id,D=e.pipeline_schedule_name,I=e.pipeline_tags,R=e.pipeline_uuid,N=e.started_at,S=e.status;le.current[w]=(0,c.createRef)();var T,V,U=!w&&!S,M="".concat(s," out of ").concat(o," block runs completed"),J=(0,z.jsx)(j.Z,{tags:null===I||void 0===I?void 0:I.map((function(e){return{uuid:e}}))},"row_pipeline_tags_".concat(r)),W=[];r>0&&q[r-1].execution_date===e.execution_date&&q[r-1].pipeline_schedule_id===e.pipeline_schedule_id?(W=[(0,z.jsx)(b.Z,{ml:1,children:(0,z.jsxs)(h.ZP,{alignItems:"center",children:[(0,z.jsx)(Z.Subitem,{size:k.bL,useStroke:!0}),(0,z.jsx)(a.ZP,{borderRadius:"".concat(P.D7,"px"),notClickable:!0,padding:"6px",children:(0,z.jsx)(O.ZP,{muted:!0,children:m.Do[S]})})]})},"row_status"),(0,z.jsx)(a.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(e){e.stopPropagation(),te.push("/pipelines/".concat(R,"/logs?pipeline_run_id[]=").concat(w))},children:(0,z.jsx)(Z.Logs,{default:!0,size:k.bL})},"row_logs"),(0,z.jsx)(O.ZP,{center:!0,default:!0,monospace:!0,muted:!0,children:null===e||void 0===e?void 0:e.id},"row_id"),(0,z.jsx)(u(),{as:"/pipelines/".concat(R,"/runs/").concat(w),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,z.jsx)(v.Z,{bold:!0,block:!0,centerAlign:!0,muted:!0,title:M,children:"".concat(s," / ").concat(o)})},"row_block_runs"),(0,z.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:R},"row_pipeline_uuid")],H||W.push((0,z.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_trigger_retry")),Q&&W.push(J),(T=W).push.apply(T,[(0,z.jsx)(O.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_date_retry"),(0,c.createElement)(O.ZP,X(X({},K),{},{key:"row_started_at",muted:!0,title:N?(0,B._6)(N):null}),N?(0,L.Uc)(N,re):(0,z.jsx)(z.Fragment,{children:"\u2014"})),(0,c.createElement)(O.ZP,X(X({},K),{},{key:"row_completed_at",muted:!0,title:_?(0,B._6)(_):null}),_?(0,L.Uc)(_,re):(0,z.jsx)(z.Fragment,{children:"\u2014"})),(0,c.createElement)(O.ZP,X(X({},K),{},{default:!0,key:"row_execution_time",title:N&&_?(0,B.Qf)({endDatetime:_,showFullFormat:!0,startDatetime:N}):null}),N&&_?(0,B.Qf)({endDatetime:_,startDatetime:N}):(0,z.jsx)(z.Fragment,{children:"\u2014"}))])):(W=[(0,z.jsx)(G,{cancelingRunId:oe,disabled:U,isLoadingCancelPipeline:ye,onCancel:we,onSuccess:A,pipelineRun:e,setCancelingRunId:ce,setErrors:ne,setShowConfirmationId:de,showConfirmationId:ae},"row_retry_button"),(0,z.jsx)(a.ZP,{default:!0,disabled:U,iconOnly:!0,noBackground:!0,onClick:function(e){e.stopPropagation(),te.push("/pipelines/".concat(R,"/logs?pipeline_run_id[]=").concat(w))},children:(0,z.jsx)(Z.Logs,{default:!0,size:k.bL})},"row_logs"),(0,z.jsx)(O.ZP,{center:!0,default:!0,monospace:!0,muted:!0,children:null===e||void 0===e?void 0:e.id},"row_id"),(0,z.jsx)(u(),{as:"/pipelines/".concat(R,"/runs/").concat(w),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,z.jsx)(v.Z,{bold:!0,block:!0,centerAlign:!0,disabled:U,sky:!0,title:M,children:U?"":"".concat(s," / ").concat(o)})},"row_block_runs"),(0,z.jsx)(O.ZP,{default:!0,monospace:!0,children:R},"row_pipeline_uuid")],H||W.push((0,z.jsx)(u(),{as:"/pipelines/".concat(R,"/triggers/").concat(E),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,z.jsx)(v.Z,{bold:!0,sky:!0,children:D})},"row_trigger")),Q&&W.push(J),(V=W).push.apply(V,[(0,c.createElement)(O.ZP,X(X({},K),{},{default:!0,key:"row_date",title:x?(0,B._6)(x):null}),x?(0,L.Uc)(x,re):(0,z.jsx)(z.Fragment,{children:"\u2014"})),(0,c.createElement)(O.ZP,X(X({},K),{},{default:!0,key:"row_started_at",title:N?(0,B._6)(N):null}),N?(0,L.Uc)(N,re):(0,z.jsx)(z.Fragment,{children:"\u2014"})),(0,c.createElement)(O.ZP,X(X({},K),{},{default:!0,key:"row_completed_at",title:_?(0,B._6)(_):null}),_?(0,L.Uc)(_,re):(0,z.jsx)(z.Fragment,{children:"\u2014"})),(0,c.createElement)(O.ZP,X(X({},K),{},{default:!0,key:"row_execution_time",title:N&&_?(0,B.Qf)({endDatetime:_,showFullFormat:!0,startDatetime:N}):null}),N&&_?(0,B.Qf)({endDatetime:_,startDatetime:N}):(0,z.jsx)(z.Fragment,{children:"\u2014"}))]));if(t&&!ie&&W.push((0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(a.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(e){var n,t,i,r;(0,F.j)(e),he(w),ge((null===(n=le.current[w])||void 0===n||null===(t=n.current)||void 0===t?void 0:t.offsetTop)||0),xe((null===(i=le.current[w])||void 0===i||null===(r=i.current)||void 0===r?void 0:r.offsetLeft)||0)},ref:le.current[w],title:"Delete",children:(0,z.jsx)(Z.Trash,{default:!0,size:k.bL})}),(0,z.jsx)(p.Z,{onClickOutside:function(){return he(null)},open:fe===w,children:(0,z.jsx)(g.Z,{danger:!0,left:(_e||0)-C.nH,onCancel:function(){return he(null)},onClick:function(){he(null),l(w)},title:"Are you sure you want to delete this run (id ".concat(w,' for trigger "').concat(D,'")?'),top:(me||0)-(r<=1?C.oz:C.OK),width:C.Xx})})]})),n){var ue=!(null===$||void 0===$||!$[w]);W.unshift((0,z.jsx)(d.Z,{checked:ue,onClick:function(n){n.stopPropagation(),ee((function(n){return X(X({},n),{},(0,i.Z)({},w,ue?null:e))}))}},"selected-pipeline-run-".concat(w)))}return!y&&Y&&W.push((0,z.jsx)(f.Z,{flex:1,justifyContent:"flex-end",children:(0,z.jsx)(Z.ChevronRight,{default:!0,size:k.bL})})),W})),uuid:Ze})})}},16488:function(e,n,t){t.d(n,{IJ:function(){return v},M8:function(){return P},Uc:function(){return x},XM:function(){return y},_U:function(){return h},eI:function(){return _},gU:function(){return O},lO:function(){return D},ri:function(){return g},tL:function(){return j},vJ:function(){return w},xH:function(){return b}});var i,r=t(82394),l=t(92083),u=t.n(l),o=t(3917),c=t(4383),s=t(30229),a=t(42122),d=t(86735);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=function(e){return!!e&&!Object.values(s.U5).includes(e)};function v(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,i=n.completed_at,l=n.started_at,o=n.status,c=null;l&&i&&(c=u()(i).valueOf()-u()(l).valueOf());return f(f({},e),{},(0,r.Z)({},t,{runtime:c,status:o}))}),{})}var m,g=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:s.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:s.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:s.Xm.API}];return e?n.slice(0,1):n};function b(e){var n=(0,a.gR)(e,[s.gm.INTERVAL,s.gm.TYPE]),t=e[s.gm.INTERVAL];t&&(n["schedule_interval[]"]=encodeURIComponent(t));var i=e[s.gm.TYPE];return i&&(n["schedule_type[]"]=i),n}function _(e){return e?new Date(u()(e).valueOf()):null}function x(e,n){return n?(0,o.XG)(e,n):function(e){if("string"!==typeof e)return e;var n=e.split("+")[0];return u()(_(n)).format(o.Nx)}(e)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(m||(m={}));var j=(i={},(0,r.Z)(i,m.DAY,86400),(0,r.Z)(i,m.HOUR,3600),(0,r.Z)(i,m.MINUTE,60),(0,r.Z)(i,m.SECOND,1),i);function O(e){var n=m.SECOND,t=e;return e%86400===0?(t/=86400,n=m.DAY):e%3600===0?(t/=3600,n=m.HOUR):e%60===0&&(t/=60,n=m.MINUTE),{time:t,unit:n}}function w(e,n){return e*j[n]}function y(e,n,t){var i,r=u()(e);return r.set("hour",+(null===n||void 0===n?void 0:n.hour)||0),r.set("minute",+(null===n||void 0===n?void 0:n.minute)||0),r.set("second",0),i=r.format(o.TD),null!==t&&void 0!==t&&t.includeSeconds&&(i=i.concat(":00")),null!==t&&void 0!==t&&t.localTimezone&&(i=r.format(o.lE),null!==t&&void 0!==t&&t.convertToUtc&&(i=(0,o.d$)(i,{includeSeconds:null===t||void 0===t?void 0:t.includeSeconds,utcFormat:!0}))),i}function P(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i="",r=!0;return r&&(t?i="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(i="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(i="".concat(i,"/").concat(e.token)))),r&&(n=window.location.port)&&(i=i.replace(n,c.QT)),i}function Z(e,n,t){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,t){var i=t.indexOf(e),r=0;if(n<0)for(var l=0;l>n;l--)0===i?(i=t.length-1,r-=1):i-=1;else if(n>0)for(var u=0;u<n;u++)i===t.length-1?(i=0,r+=1):i+=1;var o="number"===typeof t[i]?t[i]:e;return{additionalOffset:r,cronValue:String(o)}}(+e,n,t)}var C=(0,d.m5)(60),k=(0,d.m5)(24),E=(0,o.Cs)();function D(e,n){if(!e)return e;var t=u()().local().format("Z"),i=t.split(":"),r="-"===t[0],l=3===i[0].length?Number(i[0].slice(1)):Number(i[0]),o=Number(i[1]);(r&&!n||!r&&n)&&(l=-l,o=-o);var c=e.split(" "),s=c[0],a=c[1],d=c[2],p=Z(s,o,C),f=Z(a,l+p.additionalOffset,k);if(c[0]=p.cronValue,c[1]=f.cronValue,0!==(null===f||void 0===f?void 0:f.additionalOffset)){var h=Z(d,f.additionalOffset,E);c[2]=h.cronValue}return c.join(" ")}}}]);