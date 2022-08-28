"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),s=r,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},62015:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"limit-req",keywords:["APISIX","API \u7f51\u5173","Limit Request","limit-req"],description:"limit-req \u63d2\u4ef6\u4f7f\u7528\u6f0f\u6876\u7b97\u6cd5\u9650\u5236\u5bf9\u7528\u6237\u670d\u52a1\u7684\u8bf7\u6c42\u901f\u7387\u3002"},i=void 0,p={unversionedId:"plugins/limit-req",id:"plugins/limit-req",isDocsHomePage:!1,title:"limit-req",description:"limit-req \u63d2\u4ef6\u4f7f\u7528\u6f0f\u6876\u7b97\u6cd5\u9650\u5236\u5bf9\u7528\u6237\u670d\u52a1\u7684\u8bf7\u6c42\u901f\u7387\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/limit-req.md",sourceDirName:"plugins",slug:"/plugins/limit-req",permalink:"/zh/docs/apisix/next/plugins/limit-req",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/limit-req.md",tags:[],version:"current",frontMatter:{title:"limit-req",keywords:["APISIX","API \u7f51\u5173","Limit Request","limit-req"],description:"limit-req \u63d2\u4ef6\u4f7f\u7528\u6f0f\u6876\u7b97\u6cd5\u9650\u5236\u5bf9\u7528\u6237\u670d\u52a1\u7684\u8bf7\u6c42\u901f\u7387\u3002"},sidebar:"docs",previous:{title:"public-api",permalink:"/zh/docs/apisix/next/plugins/public-api"},next:{title:"limit-conn",permalink:"/zh/docs/apisix/next/plugins/limit-conn"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u5728 Route \u6216 Service \u4e0a\u542f\u7528\u63d2\u4ef6",id:"\u5728-route-\u6216-service-\u4e0a\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u5728 Consumer \u4e0a\u542f\u7528\u63d2\u4ef6",id:"\u5728-consumer-\u4e0a\u542f\u7528\u63d2\u4ef6",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\u4f7f\u7528\u6f0f\u6876\u7b97\u6cd5\u9650\u5236\u5bf9\u7528\u6237\u670d\u52a1\u7684\u8bf7\u6c42\u901f\u7387\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"rate > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u8bf7\u6c42\u901f\u7387\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u8bf7\u6c42\u901f\u7387\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"rate")," \u4f46\u6ca1\u6709\u8d85\u8fc7\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"rate")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),"\uff09\u7684\u8bf7\u6c42\u4f1a\u88ab\u52a0\u4e0a\u5ef6\u65f6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burst"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u901f\u7387\u8d85\u8fc7\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"rate")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),"\uff09\u7684\u8bf7\u6c42\u4f1a\u88ab\u76f4\u63a5\u62d2\u7edd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u4f7f\u7528\u7684\u7528\u6237\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u7684\u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u505a\u8bf7\u6c42\u8ba1\u6570\u7684\u4f9d\u636e\uff0c\u5f53\u524d\u63a5\u53d7\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u6709\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr"),"\uff08\u5ba2\u6237\u7aef IP \u5730\u5740\uff09\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"server_addr"),"\uff08\u670d\u52a1\u7aef IP \u5730\u5740\uff09, \u8bf7\u6c42\u5934\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Forwarded-For")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Real-IP"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),"\uff08Consumer \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"username"),"\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8d85\u8fc7\u9608\u503c\u7684\u8bf7\u6c42\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8d85\u8fc7\u9608\u503c\u7684\u8bf7\u6c42\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodelay"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c \u8bf7\u6c42\u901f\u7387\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"rate")," \u4f46\u6ca1\u6709\u8d85\u8fc7\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"rate")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),"\uff09\u7684\u8bf7\u6c42\u4e0d\u4f1a\u52a0\u4e0a\u5ef6\u8fdf\uff1b\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\uff0c\u5219\u4f1a\u52a0\u4e0a\u5ef6\u8fdf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u9650\u901f\u63d2\u4ef6\u529f\u80fd\u4e34\u65f6\u4e0d\u53ef\u7528\u65f6\u662f\u5426\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5219\u81ea\u52a8\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("h3",{id:"\u5728-route-\u6216-service-\u4e0a\u542f\u7528\u63d2\u4ef6"},"\u5728 Route \u6216 Service \u4e0a\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"var_combination"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u9650\u5236\u4e86\u6bcf\u79d2\u8bf7\u6c42\u901f\u7387\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u4e14\u5c0f\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," \u7684\u8bf7\u6c42\u4f1a\u88ab\u52a0\u4e0a\u5ef6\u65f6\uff0c\u901f\u7387\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," \u5c31\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d1\u9001\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,r.kt)("p",null,"\u5f53\u8bf7\u6c42\u901f\u7387\u8d85\u51fa\u9650\u5236\u65f6\uff0c\u8fd4\u56de\u5982\u4e0b\u5305\u542b 503 HTTP \u72b6\u6001\u7801\u7684\u54cd\u5e94\u5934\uff0c\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u5982\u679c\u4f60\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"rejected_msg")," \u5c5e\u6027\u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."'),"\uff0c\u5f53\u8bf7\u6c42\u901f\u7387\u8d85\u51fa\u9650\u5236\u65f6\uff0c\u8fd4\u56de\u5982\u4e0b\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," HTTP \u72b6\u6001\u7801\u7684\u54cd\u5e94\u4f53\uff0c\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,r.kt)("h3",{id:"\u5728-consumer-\u4e0a\u542f\u7528\u63d2\u4ef6"},"\u5728 Consumer \u4e0a\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"Consumer \u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\u9700\u8981\u4e0e\u6388\u6743\u63d2\u4ef6\u4e00\u8d77\u914d\u5408\u4f7f\u7528\uff0c\u8fd9\u91cc\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/key-auth"},(0,r.kt)("inlineCode",{parentName:"a"},"key-auth"))," \u6388\u6743\u63d2\u4ef6\u4e3a\u4f8b\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\u7ed1\u5b9a\u5230 Consumer \u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        },\n        "limit-req": {\n            "rate": 1,\n            "burst": 1,\n            "rejected_code": 403,\n            "key": "consumer_name"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d1\u9001\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\n")),(0,r.kt)("p",null,"\u5f53\u8bf7\u6c42\u901f\u7387\u672a\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"rate + burst")," \u7684\u503c\u65f6\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," HTTP \u72b6\u6001\u7801\uff0c\u8bf4\u660e\u8bf7\u6c42\u6210\u529f\uff0c\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,r.kt)("p",null,"\u5f53\u8bf7\u6c42\u901f\u7387\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"rate + burst")," \u7684\u503c\u65f6\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"403")," HTTP \u72b6\u6001\u7801\uff0c\u8bf4\u660e\u8bf7\u6c42\u88ab\u963b\u6b62\uff0c\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 Forbidden\n...\n<html>\n<head><title>403 Forbidden</title></head>\n<body>\n<center><h1>403 Forbidden</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u79fb\u9664 Consumer \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);