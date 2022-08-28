"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[71697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93133:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={title:"Plugin"},o=void 0,l={unversionedId:"terminology/plugin",id:"terminology/plugin",isDocsHomePage:!1,title:"Plugin",description:"This represents the configuration of the plugins that are executed during the HTTP request/response lifecycle. A Plugin configuration can be bound directly to a Route, a Service, a Consumer or a Plugin Config.",source:"@site/docs/apisix/terminology/plugin.md",sourceDirName:"terminology",slug:"/terminology/plugin",permalink:"/docs/apisix/next/terminology/plugin",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/terminology/plugin.md",tags:[],version:"current",frontMatter:{title:"Plugin"},sidebar:"docs",previous:{title:"Global Rule",permalink:"/docs/apisix/next/terminology/global-rule"},next:{title:"Plugin Config",permalink:"/docs/apisix/next/terminology/plugin-config"}},s=[{value:"Description",id:"description",children:[]},{value:"Adding a Plugin",id:"adding-a-plugin",children:[]},{value:"Plugin common configuration",id:"plugin-common-configuration",children:[{value:"Disable the plugin",id:"disable-the-plugin",children:[]},{value:"Custom error response",id:"custom-error-response",children:[]},{value:"Custom plugin priority",id:"custom-plugin-priority",children:[]},{value:"Dynamically control whether the plugin is executed",id:"dynamically-control-whether-the-plugin-is-executed",children:[]}]},{value:"Hot reload",id:"hot-reload",children:[]}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This represents the configuration of the plugins that are executed during the HTTP request/response lifecycle. A ",(0,r.kt)("strong",{parentName:"p"},"Plugin")," configuration can be bound directly to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/route"},(0,r.kt)("inlineCode",{parentName:"a"},"Route")),", a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/service"},(0,r.kt)("inlineCode",{parentName:"a"},"Service")),", a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/consumer"},(0,r.kt)("inlineCode",{parentName:"a"},"Consumer"))," or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/plugin-config"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugin Config")),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While configuring the same plugin, only one copy of the configuration is valid. The order of precedence is always ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin Config")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),"."))),(0,r.kt)("p",null,"While ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/apisix#configuring-apisix"},"configuring APISIX"),", you can declare the Plugins that are supported by the local APISIX node. This acts as a whitelisting mechanism as Plugins that are not in this whitelist will be automatically ignored. So, this feature can be used to temporarily turn off/turn on specific plugins."),(0,r.kt)("h2",{id:"adding-a-plugin"},"Adding a Plugin"),(0,r.kt)("p",null,"For adding new plugins based on existing plugins, copy the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," node from the default configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," to your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),")."),(0,r.kt)("p",null,"In a request, a Plugin is only executed once. This is true even if it is bound to multiple different objects like Routes and Services. The order in which Plugins are run is determined by its configured priorities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 0.1,\n    priority = 0, -- the priority of this plugin will be 0\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n")),(0,r.kt)("p",null,"A Plugin configuration is submitted as part of the Route or Service and is placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),". It internally uses the Plugin name as the hash key to holding the configuration items for the different Plugins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    }\n}\n')),(0,r.kt)("p",null,"Not all Plugins have specific configuration items (for example, ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/prometheus/"},"prometheus"),"). In such cases, an empty object identifier can be used."),(0,r.kt)("p",null,"A warning level log as shown below indicates that the request was rejected by the Plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ip-restriction exits with http status code 403\n")),(0,r.kt)("h2",{id:"plugin-common-configuration"},"Plugin common configuration"),(0,r.kt)("p",null,"Some common configurations can be applied to plugins through the ",(0,r.kt)("inlineCode",{parentName:"p"},"_meta")," configuration items, the specific configuration items are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to disable the plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error_response"),(0,r.kt)("td",{parentName:"tr",align:null},"string/object"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom plugin priority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Depending on the requested parameters, it is decided at runtime whether the plugin should be executed. Something like this: ",(0,r.kt)("inlineCode",{parentName:"td"},"{{var, operator, val}, {var, operator, val}, ...}}"),". For example: ",(0,r.kt)("inlineCode",{parentName:"td"},'{"arg_version", "==", "v2"}'),", indicating that the current request parameter ",(0,r.kt)("inlineCode",{parentName:"td"},"version")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"v2"),". The variables here are consistent with NGINX internal variables. For details on supported operators, please see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),".")))),(0,r.kt)("h3",{id:"disable-the-plugin"},"Disable the plugin"),(0,r.kt)("p",null,"Through the ",(0,r.kt)("inlineCode",{parentName:"p"},"disable")," configuration, you can add a new plugin with disabled status and the request will not go through the plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "proxy-rewrite": {\n        "_meta": {\n            "disable": true\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"custom-error-response"},"Custom error response"),(0,r.kt)("p",null,"Through the ",(0,r.kt)("inlineCode",{parentName:"p"},"error_response")," configuration, you can configure the error response of any plugin to a fixed value to avoid troubles caused by the built-in error response information of the plugin."),(0,r.kt)("p",null,"The configuration below means to customize the error response of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth"),' plugin to \'{"message": "Missing credential in request"}\'.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jwt-auth": {\n        "_meta": {\n            "error_response": {\n                "message": "Missing credential in request"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"custom-plugin-priority"},"Custom plugin priority"),(0,r.kt)("p",null,"All plugins have default priorities, but through the ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," configuration item you can customize the plugin priority and change the plugin execution order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' {\n    "serverless-post-function": {\n        "_meta": {\n            "priority": 10000\n        },\n        "phase": "rewrite",\n        "functions" : ["return function(conf, ctx)\n                    ngx.say(\\"serverless-post-function\\");\n                    end"]\n    },\n    "serverless-pre-function": {\n        "_meta": {\n            "priority": -2000\n        },\n        "phase": "rewrite",\n        "functions": ["return function(conf, ctx)\n                    ngx.say(\\"serverless-pre-function\\");\n                    end"]\n    }\n}\n')),(0,r.kt)("p",null,"The default priority of serverless-pre-function is 10000, and the default priority of serverless-post-function is -2000. By default, the serverless-pre-function plugin will be executed first, and serverless-post-function plugin will be executed next."),(0,r.kt)("p",null,"The above configuration means setting the priority of the serverless-pre-function plugin to -2000 and the priority of the serverless-post-function plugin to 10000. The serverless-post-function plugin will be executed first, and serverless-pre-function plugin will be executed next."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Custom plugin priority only affects the current object(route, service ...) of the plugin instance binding, not all instances of that plugin. For example, if the above plugin configuration belongs to Route A, the order of execution of the plugins serverless-post-function and serverless-post-function on Route B will not be affected and the default priority will be used."),(0,r.kt)("li",{parentName:"ul"},"Custom plugin priority does not apply to the rewrite phase of some plugins configured on the consumer. The rewrite phase of plugins configured on the route will be executed first, and then the rewrite phase of plugins (exclude auth plugins) from the consumer will be executed.")))),(0,r.kt)("h3",{id:"dynamically-control-whether-the-plugin-is-executed"},"Dynamically control whether the plugin is executed"),(0,r.kt)("p",null,"By default, all plugins specified in the route will be executed. But we can add a filter to the plugin through the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," configuration item, and control whether the plugin is executed through the execution result of the filter."),(0,r.kt)("p",null,"The configuration below means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," plugin will only be executed if the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," value in the request query parameters is ",(0,r.kt)("inlineCode",{parentName:"p"},"v2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "proxy-rewrite": {\n        "_meta": {\n            "filter": [\n                ["arg_version", "==", "v2"]\n            ]\n        },\n        "uri": "/anything"\n    }\n}\n')),(0,r.kt)("p",null,"Create a complete route with the below configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uri": "/get",\n    "plugins": {\n        "proxy-rewrite": {\n            "_meta": {\n                "filter": [\n                    ["arg_version", "==", "v2"]\n                ]\n            },\n            "uri": "/anything"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\n')),(0,r.kt)("p",null,"When the request does not have any parameters, the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," plugin will not be executed, the request will be proxy to the upstream ",(0,r.kt)("inlineCode",{parentName:"p"},"/get"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -v /dev/null http://127.0.0.1:9080/get -H"host:httpbin.org"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'< HTTP/1.1 200 OK\n......\n< Server: APISIX/2.15.0\n<\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.79.1",\n    "X-Amzn-Trace-Id": "Root=1-62eb6eec-46c97e8a5d95141e621e07fe",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "127.0.0.1, 117.152.66.200",\n  "url": "http://httpbin.org/get"\n}\n')),(0,r.kt)("p",null,"When the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"version=v2")," is carried in the request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," plugin is executed, and the request will be proxy to the upstream ",(0,r.kt)("inlineCode",{parentName:"p"},"/anything"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -v /dev/null http://127.0.0.1:9080/get?version=v2 -H"host:httpbin.org"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'< HTTP/1.1 200 OK\n......\n< Server: APISIX/2.15.0\n<\n{\n  "args": {\n    "version": "v2"\n  },\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.79.1",\n    "X-Amzn-Trace-Id": "Root=1-62eb6f02-24a613b57b6587a076ef18b4",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "127.0.0.1, 117.152.66.200",\n  "url": "http://httpbin.org/anything?version=v2"\n}\n')),(0,r.kt)("h2",{id:"hot-reload"},"Hot reload"),(0,r.kt)("p",null,"APISIX Plugins are hot-loaded. This means that there is no need to restart the service if you add, delete, modify plugins, or even if you update the plugin code. To hot-reload, you can send an HTTP request through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api"},"Admin API"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a configured Plugin is disabled, then its execution will be skipped."),(0,r.kt)("h3",{parentName:"div",id:"hot-reload-in-stand-alone-mode"},"Hot reload in stand-alone mode"),(0,r.kt)("p",{parentName:"div"},"For hot-reloading in stand-alone mode, see the plugin related section in ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/stand-alone"},"stand alone mode"),"."))))}u.isMDXComponent=!0}}]);