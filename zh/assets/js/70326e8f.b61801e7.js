"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77657],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=u(n),m=l,s=c["".concat(o,".").concat(m)]||c[m]||g[m]||r;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24386:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"clickhouse-logger"},i=void 0,p={unversionedId:"plugins/clickhouse-logger",id:"version-2.13/plugins/clickhouse-logger",isDocsHomePage:!1,title:"clickhouse-logger",description:"clickhouse-logger \u662f\u4e00\u4e2a\u63d2\u4ef6\uff0c\u53ef\u5c06Log\u6570\u636e\u8bf7\u6c42\u63a8\u9001\u5230clickhouse\u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/clickhouse-logger.md",sourceDirName:"plugins",slug:"/plugins/clickhouse-logger",permalink:"/zh/docs/apisix/2.13/plugins/clickhouse-logger",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"clickhouse-logger"},sidebar:"version-2.13/docs",previous:{title:"udp-logger",permalink:"/zh/docs/apisix/2.13/plugins/udp-logger"},next:{title:"syslog",permalink:"/zh/docs/apisix/2.13/plugins/syslog"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[{value:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:o};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," \u662f\u4e00\u4e2a\u63d2\u4ef6\uff0c\u53ef\u5c06Log\u6570\u636e\u8bf7\u6c42\u63a8\u9001\u5230clickhouse\u670d\u52a1\u5668\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clickhouse")," \u670d\u52a1\u5668\u7684 endpoint\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7684\u6570\u636e\u5e93\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logtable"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u7684\u8868\u540d \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse\u7684\u7528\u6237\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse\u7684\u5bc6\u7801 \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bf7\u6c42\u540e\u4fdd\u6301\u8fde\u63a5\u6d3b\u52a8\u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"clickhouse logger"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6 logger \u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u8bc1\u4e66\u3002")))),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.13/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,l.kt)("p",null,"\u8fd9\u662f\u6709\u5173\u5982\u4f55\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," \u63d2\u4ef6\u7684\u793a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "clickhouse-logger": {\n                "user": "default",\n                "password": "a",\n                "database": "default",\n                "logtable": "test",\n                "endpoint_addr": "http://127.0.0.1:8123"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6210\u529f:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf"),"\u6216 ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u5185\u7f6e\u53d8\u91cf"),"\u3002\u7279\u522b\u7684\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u8be5\u8bbe\u7f6e\u662f\u5168\u5c40\u751f\u6548\u7684"),"\uff0c\u610f\u5473\u7740\u6307\u5b9a log_format \u540e\uff0c\u5c06\u5bf9\u6240\u6709\u7ed1\u5b9a http-logger \u7684 Route \u6216 Service \u751f\u6548\u3002")))),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/clickhouse-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,l.kt)("p",null,"\u521b\u5efaclickhouse log table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.test (\n  `host` String,\n  `client_ip` String,\n  `route_id` String,\n  `@timestamp` String,\n   PRIMARY KEY(`@timestamp`)\n) ENGINE = MergeTree()\n")),(0,l.kt)("p",null,"\u5728clickhouse\u4e0a\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"select * from default.test;"),"\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500host\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500client_ip\u2500\u252c\u2500route_id\u2500\u252c\u2500@timestamp\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 127.0.0.1 \u2502 127.0.0.1 \u2502 1        \u2502 2022-01-17T10:03:10+08:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u4ee5\u7981\u7528 clickhouse-logger\u3002APISIX \u63d2\u4ef6\u662f\u70ed\u91cd\u8f7d\u7684\uff0c\u56e0\u6b64\u65e0\u9700\u91cd\u65b0\u542f\u52a8 APISIX\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);