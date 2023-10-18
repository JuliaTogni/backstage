/*! For license information please see 97f5e843.2260fd2b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[1656],{464505:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=t(824246),c=t(511151);const i={id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize",title:"ElasticSearchSearchEngineIndexer.initialize()",description:"API reference for ElasticSearchSearchEngineIndexer.initialize()"},o=void 0,a={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize",title:"ElasticSearchSearchEngineIndexer.initialize()",description:"API reference for ElasticSearchSearchEngineIndexer.initialize()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize",title:"ElasticSearchSearchEngineIndexer.initialize()",description:"API reference for ElasticSearchSearchEngineIndexer.initialize()"}},s={},u=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,c.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer",children:(0,n.jsx)(r.code,{children:"ElasticSearchSearchEngineIndexer"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer.initialize",children:(0,n.jsx)(r.code,{children:"initialize"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"initialize(): Promise<void>;\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,c.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,r,t)=>{var n=t(827378),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,i={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:c,type:e,key:u,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=u,r.jsxs=u},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function _(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var v=g.prototype=new _;v.constructor=g,y(v,b.prototype),v.isPureReactComponent=!0;var S=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,n){var c,i={},o=null,a=null;if(null!=r)for(c in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(o=""+r.key),r)x.call(r,c)&&!E.hasOwnProperty(c)&&(i[c]=r[c]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(c in s=e.defaultProps)void 0===i[c]&&(i[c]=s[c]);return{$$typeof:t,type:e,key:o,ref:a,props:i,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,c,i,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return o=o(s=e),e=""===i?"."+C(s,0):i,S(o)?(c="",null!=e&&(c=e.replace(R,"$&/")+"/"),$(o,r,c,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,c+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),r.push(o)),1;if(s=0,i=""===i?".":i+":",S(e))for(var u=0;u<e.length;u++){var l=i+C(a=e[u],u);s+=$(a,r,c,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)s+=$(a=a.value,r,c,l=i+C(a,u++),o);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,r,t){if(null==e)return e;var n=[],c=0;return $(e,n,"","",(function(e){return r.call(t,e,c++)})),n}function I(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},z={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=c,r.Profiler=o,r.PureComponent=g,r.StrictMode=i,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=y({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(o=r.ref,a=k.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in r)x.call(r,u)&&!E.hasOwnProperty(u)&&(c[u]=void 0===r[u]&&void 0!==s?s[u]:r[u])}var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];c.children=s}return{$$typeof:t,type:e.type,key:i,ref:o,props:c,_owner:a}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=z.transition;z.transition={};try{e()}finally{z.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return P.current.useCallback(e,r)},r.useContext=function(e){return P.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return P.current.useDeferredValue(e)},r.useEffect=function(e,r){return P.current.useEffect(e,r)},r.useId=function(){return P.current.useId()},r.useImperativeHandle=function(e,r,t){return P.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return P.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return P.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return P.current.useMemo(e,r)},r.useReducer=function(e,r,t){return P.current.useReducer(e,r,t)},r.useRef=function(e){return P.current.useRef(e)},r.useState=function(e){return P.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return P.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return P.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>i});var n=t(667294);const c=n.createContext({});function i(e){const r=n.useContext(c);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:i(e),n.createElement(c.Provider,{value:a},r)}}}]);