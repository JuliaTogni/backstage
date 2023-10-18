/*! For license information please see a842db86.3538b67a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[431247],{467083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(824246),o=t(511151);const i={id:"02-adding-a-basic-permission-check",title:"2. Adding a basic permission check",description:"Explains how to add a basic permission check to a Backstage plugin"},s=void 0,a={id:"permissions/plugin-authors/02-adding-a-basic-permission-check",title:"2. Adding a basic permission check",description:"Explains how to add a basic permission check to a Backstage plugin",source:"@site/../docs/permissions/plugin-authors/02-adding-a-basic-permission-check.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/02-adding-a-basic-permission-check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/02-adding-a-basic-permission-check.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"02-adding-a-basic-permission-check",title:"2. Adding a basic permission check",description:"Explains how to add a basic permission check to a Backstage plugin"},sidebar:"docs",previous:{title:"1. Tutorial setup",permalink:"/docs/permissions/plugin-authors/01-setup"},next:{title:"3. Adding a resource permission check",permalink:"/docs/permissions/plugin-authors/03-adding-a-resource-permission-check"}},c={},l=[{value:"Creating a new permission",id:"creating-a-new-permission",level:2},{value:"Authorizing using the new permission",id:"authorizing-using-the-new-permission",level:2},{value:"Test the authorized create endpoint",id:"test-the-authorized-create-endpoint",level:2}];function u(e){const n=Object.assign({p:"p",a:"a",em:"em",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["If the outcome of a permission check doesn't need to change for different ",(0,r.jsx)(n.a,{href:"/docs/permissions/concepts#resources-and-rules",children:"resources"}),", you can use a ",(0,r.jsx)(n.em,{children:"basic permission check"}),". For this kind of check, we simply need to define a ",(0,r.jsx)(n.a,{href:"/docs/permissions/concepts#resources-and-rules",children:"permission"}),", and call ",(0,r.jsx)(n.code,{children:"authorize"})," with it."]}),"\n",(0,r.jsxs)(n.p,{children:["For this tutorial, we'll use a basic permission check to authorize the ",(0,r.jsx)(n.code,{children:"create"})," endpoint in our todo-backend. This will allow Backstage integrators to control whether each of their users is authorized to create todos by adjusting their ",(0,r.jsx)(n.a,{href:"/docs/permissions/concepts#policy",children:"permission policy"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["We'll start by creating a new permission, and then we'll use the permission api to call ",(0,r.jsx)(n.code,{children:"authorize"})," with it during todo creation."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-new-permission",children:"Creating a new permission"}),"\n",(0,r.jsxs)(n.p,{children:["Let's navigate to the file ",(0,r.jsx)(n.code,{children:"plugins/todo-list-common/src/permissions.ts"})," and add our first permission:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-common/src/permissions.ts"',children:"import { createPermission } from '@backstage/plugin-permission-common';\n\n/* highlight-remove-start */\nexport const tempExamplePermission = createPermission({\n  name: 'temp.example.noop',\n  attributes: {},\n/* highlight-remove-end */\n/* highlight-add-start */\nexport const todoListCreatePermission = createPermission({\n  name: 'todo.list.create',\n  attributes: { action: 'create' },\n/* highlight-add-end */\n});\n\n/* highlight-remove-next-line */\nexport const todoListPermissions = [tempExamplePermission];\n/* highlight-add-next-line */\nexport const todoListPermissions = [todoListCreatePermission];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For this tutorial, we've automatically exported all permissions from this file (see ",(0,r.jsx)(n.code,{children:"plugins/todo-list-common/src/index.ts"}),")."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: We use a separate ",(0,r.jsx)(n.code,{children:"todo-list-common"})," package since all permissions authorized by your plugin should be exported from a ",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/local-dev/cli-build-system#package-roles",children:'"common-library" package'}),". This allows Backstage integrators to reference them in frontend components as well as permission policies."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authorizing-using-the-new-permission",children:"Authorizing using the new permission"}),"\n",(0,r.jsx)(n.p,{children:"Install the following module:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ yarn workspace @internal/plugin-todo-list-backend \\\n  add @backstage/plugin-permission-common @backstage/plugin-permission-node @internal/plugin-todo-list-common\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Edit ",(0,r.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/router.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',children:"/* highlight-remove-start */\nimport { InputError } from '@backstage/errors';\nimport { IdentityApi } from '@backstage/plugin-auth-node';\n/* highlight-remove-end */\n/* highlight-add-start */\nimport { InputError, NotAllowedError } from '@backstage/errors';\nimport { getBearerTokenFromAuthorizationHeader, IdentityApi } from '@backstage/plugin-auth-node';\nimport { PermissionEvaluator, AuthorizeResult } from '@backstage/plugin-permission-common';\nimport { createPermissionIntegrationRouter } from '@backstage/plugin-permission-node';\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-end */\n\nexport interface RouterOptions {\n  logger: Logger;\n  identity: IdentityApi;\n  /* highlight-add-next-line */\n  permissions: PermissionEvaluator;\n}\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  /* highlight-remove-next-line */\n  const { logger, identity } = options;\n  /* highlight-add-next-line */\n  const { logger, identity, permissions } = options;\n\n  /* highlight-add-start */\n  const permissionIntegrationRouter = createPermissionIntegrationRouter({\n    permissions: [todoListCreatePermission],\n  });\n  /* highlight-add-end */\n\n  const router = Router();\n  router.use(express.json());\n\n  router.get('/health', (_, response) => {\n    logger.info('PONG!');\n    response.json({ status: 'ok' });\n  });\n\n  /* highlight-add-next-line */\n  router.use(permissionIntegrationRouter);\n\n  router.get('/todos', async (_req, res) => {\n    res.json(getAll());\n  });\n\n  router.post('/todos', async (req, res) => {\n    let author: string | undefined = undefined;\n\n    const user = await identity.getIdentity({ request: req });\n    author = user?.identity.userEntityRef;\n    /* highlight-add-start */\n    const token = getBearerTokenFromAuthorizationHeader(\n      req.header('authorization'),\n    );\n    const decision = (\n      await permissions.authorize([{ permission: todoListCreatePermission }], {\n      token,\n      })\n    )[0];\n\n    if (decision.result === AuthorizeResult.DENY) {\n      throw new NotAllowedError('Unauthorized');\n    }\n    /* highlight-add-end */\n\n    if (!isTodoCreateRequest(req.body)) {\n      throw new InputError('Invalid payload');\n    }\n\n    const todo = add({ title: req.body.title, author });\n    res.json(todo);\n  });\n\n  // ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pass the ",(0,r.jsx)(n.code,{children:"permissions"})," object to the plugin in ",(0,r.jsx)(n.code,{children:"packages/backend/src/plugins/todolist.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/todolist.ts"',children:"import { DefaultIdentityClient } from '@backstage/plugin-auth-node';\nimport { createRouter } from '@internal/plugin-todo-list-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin({\n  logger,\n  discovery,\n  /* highlight-add-next-line */\n  permissions,\n}: PluginEnvironment): Promise<Router> {\n  return await createRouter({\n    logger,\n    identity: DefaultIdentityClient.create({\n      discovery,\n      issuer: await discovery.getExternalBaseUrl('auth'),\n    }),\n    /* highlight-add-next-line */\n    permissions,\n  });\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"That's it! Now your plugin is fully configured. Let's try to test the logic by denying the permission."}),"\n",(0,r.jsx)(n.h2,{id:"test-the-authorized-create-endpoint",children:"Test the authorized create endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["Before running this step, please make sure you followed the steps described in ",(0,r.jsx)(n.a,{href:"/docs/permissions/getting-started",children:"Getting started"})," section."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to test the logic above, the integrators of your backstage instance need to change their permission policy to return ",(0,r.jsx)(n.code,{children:"DENY"})," for our newly-created permission:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"/* highlight-add-start */\nimport {\n  BackstageIdentityResponse,\n} from '@backstage/plugin-auth-node';\n/* highlight-add-end */\nimport {\n  PermissionPolicy,\n  /* highlight-add-next-line */\n  PolicyQuery,\n} from '@backstage/plugin-permission-node';\n/* highlight-add-start */\nimport { isPermission } from '@backstage/plugin-permission-common';\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-end */\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  /* highlight-remove-next-line */\n  async handle(): Promise<PolicyDecision> {\n  /* highlight-add-start */\n  async handle(\n    request: PolicyQuery,\n    _user?: BackstageIdentityResponse,\n  ): Promise<PolicyDecision> {\n    if (isPermission(request.permission, todoListCreatePermission)) {\n      return {\n        result: AuthorizeResult.DENY,\n      };\n    }\n  /* highlight-add-end */\n\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now the frontend should show an error whenever you try to create a new Todo item."}),"\n",(0,r.jsxs)(n.p,{children:["Let's flip the result back to ",(0,r.jsx)(n.code,{children:"ALLOW"})," before moving on."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"if (isPermission(request.permission, todoListCreatePermission)) {\n  return {\n    /* highlight-remove-next-line */\n    result: AuthorizeResult.DENY,\n    /* highlight-add-next-line */\n    result: AuthorizeResult.ALLOW,\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["At this point everything is working but if you run ",(0,r.jsx)(n.code,{children:"yarn tsc"})," you'll get some errors, let's fix those up."]}),"\n",(0,r.jsxs)(n.p,{children:["First we'll clean up the ",(0,r.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/router.test.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.test.ts"',children:"import { getVoidLogger } from '@backstage/backend-common';\nimport { DefaultIdentityClient } from '@backstage/plugin-auth-node';\n/* highlight-add-next-line */\nimport { PermissionEvaluator } from '@backstage/plugin-permission-common';\nimport express from 'express';\nimport request from 'supertest';\n\nimport { createRouter } from './router';\n\n/* highlight-add-start */\nconst mockedAuthorize: jest.MockedFunction<PermissionEvaluator['authorize']> =\n  jest.fn();\nconst mockedPermissionQuery: jest.MockedFunction<\n  PermissionEvaluator['authorizeConditional']\n> = jest.fn();\n\nconst permissionEvaluator: PermissionEvaluator = {\n  authorize: mockedAuthorize,\n  authorizeConditional: mockedPermissionQuery,\n};\n/* highlight-add-end */\n\ndescribe('createRouter', () => {\n  let app: express.Express;\n\n  beforeAll(async () => {\n    const router = await createRouter({\n      logger: getVoidLogger(),\n      identity: {} as DefaultIdentityClient,\n      /* highlight-add-next-line */\n      permissions: permissionEvaluator,\n    });\n    app = express().use(router);\n  });\n\n  beforeEach(() => {\n    jest.resetAllMocks();\n  });\n\n  describe('GET /health', () => {\n    it('returns ok', async () => {\n      const response = await request(app).get('/health');\n\n      expect(response.status).toEqual(200);\n      expect(response.body).toEqual({ status: 'ok' });\n    });\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then we want to update the ",(0,r.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/standaloneServer.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/standaloneServer.ts"',children:"import {\n  createServiceBuilder,\n  loadBackendConfig,\n  SingleHostDiscovery,\n  /* highlight-add-next-line */\n  ServerTokenManager,\n} from '@backstage/backend-common';\nimport { DefaultIdentityClient } from '@backstage/plugin-auth-node';\n/* highlight-add-next-line */\nimport { ServerPermissionClient } from '@backstage/plugin-permission-node';\nimport { Server } from 'http';\nimport { Logger } from 'winston';\nimport { createRouter } from './router';\n\nexport interface ServerOptions {\n  port: number;\n  enableCors: boolean;\n  logger: Logger;\n}\n\nexport async function startStandaloneServer(\n  options: ServerOptions,\n): Promise<Server> {\n  const logger = options.logger.child({ service: 'todo-list-backend' });\n  logger.debug('Starting application server...');\n  const config = await loadBackendConfig({ logger, argv: process.argv });\n  const discovery = SingleHostDiscovery.fromConfig(config);\n  /* highlight-add-start */\n  const tokenManager = ServerTokenManager.fromConfig(config, {\n    logger,\n  });\n  const permissions = ServerPermissionClient.fromConfig(config, {\n    discovery,\n    tokenManager,\n  });\n  /* highlight-add-end */\n  const router = await createRouter({\n    logger,\n    identity: DefaultIdentityClient.create({\n      discovery,\n      issuer: await discovery.getExternalBaseUrl('auth'),\n    }),\n    /* highlight-add-next-line */\n    permissions,\n  });\n\n  let service = createServiceBuilder(module)\n    .setPort(options.port)\n    .addRouter('/todo-list', router);\n  if (options.enableCors) {\n    service = service.enableCors({ origin: 'http://localhost:3000' });\n  }\n\n  return await service.start().catch(err => {\n    logger.error(err);\n    process.exit(1);\n  });\n}\n\nmodule.hot?.accept();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, we need to update ",(0,r.jsx)(n.code,{children:"plugins/todo-list-backend/src/plugin.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/plugin.ts"',children:"import { loggerToWinstonLogger } from '@backstage/backend-common';\nimport {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { createRouter } from './service/router';\n\n/**\n* The example TODO list backend plugin.\n*\n* @alpha\n*/\nexport const exampleTodoListPlugin = createBackendPlugin({\n  pluginId: 'exampleTodoList',\n  register(env) {\n    env.registerInit({\n      deps: {\n        identity: coreServices.identity,\n        logger: coreServices.logger,\n        httpRouter: coreServices.httpRouter,\n        /* highlight-add-next-line */\n        permissions: coreServices.permissions,\n      },\n      /* highlight-remove-next-line */\n      async init({ identity, logger, httpRouter }) {\n      /* highlight-add-next-line */\n      async init({ identity, logger, httpRouter, permissions }) {\n        httpRouter.use(\n          await createRouter({\n            identity,\n            logger: loggerToWinstonLogger(logger),\n            permissions,\n          }),\n        );\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now when you run ",(0,r.jsx)(n.code,{children:"yarn tsc"})," you should have no more errors."]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,f={};function y(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||g}function b(){}function k(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=k.prototype=new b;x.constructor=k,m(x,y.prototype),x.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var o,i={},s=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)j.call(n,o)&&!P.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:s,ref:a,props:i,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+S(c,0):i,v(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),C(s,n,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),n.push(s)),1;if(c=0,i=""===i?".":i+":",v(e))for(var l=0;l<e.length;l++){var u=i+S(a=e[l],l);c+=C(a,n,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=C(a=a.value,n,o,u=i+S(a,l++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,n,t){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function L(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},O={transition:null},z={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:O,ReactCurrentOwner:w};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=o,n.Profiler=s,n.PureComponent=k,n.StrictMode=i,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=w.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)j.call(n,l)&&!P.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:L}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return A.current.useCallback(e,n)},n.useContext=function(e){return A.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return A.current.useDeferredValue(e)},n.useEffect=function(e,n){return A.current.useEffect(e,n)},n.useId=function(){return A.current.useId()},n.useImperativeHandle=function(e,n,t){return A.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return A.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return A.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return A.current.useMemo(e,n)},n.useReducer=function(e,n,t){return A.current.useReducer(e,n,t)},n.useRef=function(e){return A.current.useRef(e)},n.useState=function(e){return A.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return A.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return A.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},n)}}}]);