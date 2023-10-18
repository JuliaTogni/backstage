/*! For license information please see 40674311.8c6ea81b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[106131],{539524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var n=r(824246),o=r(511151);const u={id:"locations",title:"Bitbucket Cloud Locations",sidebar_label:"Locations",description:"Integrating source code stored in Bitbucket Cloud into the Backstage catalog"},i=void 0,a={id:"integrations/bitbucketCloud/locations",title:"Bitbucket Cloud Locations",description:"Integrating source code stored in Bitbucket Cloud into the Backstage catalog",source:"@site/../docs/integrations/bitbucketCloud/locations.md",sourceDirName:"integrations/bitbucketCloud",slug:"/integrations/bitbucketCloud/locations",permalink:"/docs/integrations/bitbucketCloud/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/bitbucketCloud/locations.md",tags:[],version:"current",frontMatter:{id:"locations",title:"Bitbucket Cloud Locations",sidebar_label:"Locations",description:"Integrating source code stored in Bitbucket Cloud into the Backstage catalog"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/azure/org"},next:{title:"Discovery",permalink:"/docs/integrations/bitbucketCloud/discovery"}},c={},s=[{value:"Configuration",id:"configuration",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Bitbucket Cloud integration supports loading catalog entities from ",(0,n.jsx)(t.a,{href:"https://bitbucket.org",children:"bitbucket.org"}),".\nEntities can be added to\n",(0,n.jsx)(t.a,{href:"/docs/features/software-catalog/configuration",children:"static catalog configuration"}),",\nor registered with the\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  bitbucketCloud:\n    - username: ${BITBUCKET_CLOUD_USERNAME}\n      appPassword: ${BITBUCKET_CLOUD_PASSWORD}\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: A public Bitbucket Cloud provider is added automatically at startup for\nconvenience, so you only need to list it if you want to supply credentials."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Directly under the ",(0,n.jsx)(t.code,{children:"bitbucketCloud"})," key is a list of provider configurations, where\nyou can list the Bitbucket Cloud providers you want to fetch data from.\nIn the case of Bitbucket Cloud, you will have up to one entry."]}),"\n",(0,n.jsx)(t.p,{children:"This one entry will have the following elements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"username"}),": The Bitbucket Cloud username to use in API requests. If\nneither a username nor token are supplied, anonymous access will be used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"appPassword"}),": The app password for the Bitbucket Cloud user."]}),"\n"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:a.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var k=_.prototype=new g;k.constructor=_,h(k,m.prototype),k.isPureReactComponent=!0;var v=Array.isArray,C=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,u={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:a,props:u,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===u?"."+R(c,0):u,v(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),O(i,t,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,u=""===u?".":u+":",v(e))for(var s=0;s<e.length;s++){var l=u+R(a=e[s],s);c+=O(a,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)c+=O(a=a.value,t,o,l=u+R(a,s++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=j.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)C.call(t,s)&&!w.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>u});var n=r(667294);const o=n.createContext({});function u(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:a},t)}}}]);