"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48548:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"limit-req"},i=void 0,p={unversionedId:"plugins/limit-req",id:"version-2.15/plugins/limit-req",isDocsHomePage:!1,title:"limit-req",description:"\u9650\u5236\u8bf7\u6c42\u901f\u5ea6\u7684\u63d2\u4ef6\uff0c\u4f7f\u7528\u7684\u662f\u6f0f\u6876\u7b97\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/limit-req.md",sourceDirName:"plugins",slug:"/plugins/limit-req",permalink:"/zh/docs/apisix/plugins/limit-req",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"limit-req"},sidebar:"version-2.15/docs",previous:{title:"public-api",permalink:"/zh/docs/apisix/plugins/public-api"},next:{title:"limit-conn",permalink:"/zh/docs/apisix/plugins/limit-conn"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u5982\u4f55\u5728<code>route</code>\u6216<code>service</code>\u4e0a\u4f7f\u7528",id:"\u5982\u4f55\u5728route\u6216service\u4e0a\u4f7f\u7528",children:[]},{value:"\u5982\u4f55\u5728 <code>consumer</code>\u4e0a\u4f7f\u7528",id:"\u5982\u4f55\u5728-consumer\u4e0a\u4f7f\u7528",children:[]}]},{value:"\u79fb\u9664\u63d2\u4ef6",id:"\u79fb\u9664\u63d2\u4ef6",children:[]}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u9650\u5236\u8bf7\u6c42\u901f\u5ea6\u7684\u63d2\u4ef6\uff0c\u4f7f\u7528\u7684\u662f\u6f0f\u6876\u7b97\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rate"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"rate > 0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u8bf7\u6c42\u901f\u7387\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u8bf7\u6c42\u901f\u7387\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"td"},"rate")," \u4f46\u6ca1\u6709\u8d85\u8fc7\uff08",(0,a.kt)("inlineCode",{parentName:"td"},"rate")," + ",(0,a.kt)("inlineCode",{parentName:"td"},"burst"),"\uff09\u7684\u8bf7\u6c42\u4f1a\u88ab\u52a0\u4e0a\u5ef6\u65f6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"burst"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u901f\u7387\u8d85\u8fc7\uff08",(0,a.kt)("inlineCode",{parentName:"td"},"rate")," + ",(0,a.kt)("inlineCode",{parentName:"td"},"burst"),"\uff09\u7684\u8bf7\u6c42\u4f1a\u88ab\u76f4\u63a5\u62d2\u7edd\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'["remote_addr", "server_addr", "http_x_real_ip", "http_x_forwarded_for", "consumer_name"]'),(0,a.kt)("td",{parentName:"tr",align:null},'\u7528\u6765\u505a\u8bf7\u6c42\u8ba1\u6570\u7684\u4f9d\u636e\uff0c\u5f53\u524d\u63a5\u53d7\u7684 key \u6709\uff1a"remote_addr"(\u5ba2\u6237\u7aef IP \u5730\u5740), "server_addr"(\u670d\u52a1\u7aef IP \u5730\u5740), \u8bf7\u6c42\u5934\u4e2d\u7684 "X-Forwarded-For" \u6216 "X-Real-IP"\uff0c"consumer_name"(consumer \u7684 username)\u3002')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"503"),(0,a.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7\u9608\u503c\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7\u9608\u503c\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4f53\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nodelay"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c nodelay \u4e3a true\uff0c \u8bf7\u6c42\u901f\u7387\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"td"},"rate")," \u4f46\u6ca1\u6709\u8d85\u8fc7\uff08",(0,a.kt)("inlineCode",{parentName:"td"},"rate")," + ",(0,a.kt)("inlineCode",{parentName:"td"},"burst"),"\uff09\u7684\u8bf7\u6c42\u4e0d\u4f1a\u52a0\u4e0a\u5ef6\u8fdf\uff0c\u5982\u679c\u662f false\uff0c\u5219\u4f1a\u52a0\u4e0a\u5ef6\u8fdf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u9650\u901f\u63d2\u4ef6\u529f\u80fd\u4e34\u65f6\u4e0d\u53ef\u7528\u65f6\u662f\u5426\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002\u5f53\u503c\u8bbe\u7f6e\u4e3a true \u65f6\u5219\u81ea\u52a8\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\uff0c\u9ed8\u8ba4\u503c\u662f false\u3002")))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728route\u6216service\u4e0a\u4f7f\u7528"},"\u5982\u4f55\u5728",(0,a.kt)("inlineCode",{parentName:"h3"},"route"),"\u6216",(0,a.kt)("inlineCode",{parentName:"h3"},"service"),"\u4e0a\u4f7f\u7528"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"route"),"\u4e3a\u4f8b (",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"\u7684\u4f7f\u7528\u662f\u540c\u6837\u7684\u65b9\u6cd5)\uff0c\u5728\u6307\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u4e3a\u4f8b\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"service")," \u7684\u4f7f\u7528\u662f\u540c\u6837\u7684\u65b9\u6cd5\uff09\uff0c\u5728\u6307\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"var_combination"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff0c\u7136\u540e\u5728\u63d2\u4ef6\u9875\u9762\u4e2d\u6dfb\u52a0 limit-req \u63d2\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.15/docs/assets/images/plugin/limit-req-1.png",alt:"\u6dfb\u52a0\u63d2\u4ef6"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u9650\u5236\u4e86\u6bcf\u79d2\u8bf7\u6c42\u901f\u7387\u4e3a 1\uff0c\u5927\u4e8e 1 \u5c0f\u4e8e 3 \u7684\u4f1a\u88ab\u52a0\u4e0a\u5ef6\u65f6\uff0c\u901f\u7387\u8d85\u8fc7 3 \u5c31\u4f1a\u88ab\u62d2\u7edd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,a.kt)("p",null,"\u5f53\u4f60\u8d85\u8fc7\uff0c\u5c31\u4f1a\u6536\u5230\u5305\u542b 503 \u8fd4\u56de\u7801\u7684\u54cd\u5e94\u5934\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u5982\u679c\u4f60\u8bbe\u7f6e\u4e86\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"rejected_msg")," \u7684\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."'),"\uff0c\u5f53\u4f60\u8d85\u8fc7\uff0c\u5c31\u4f1a\u6536\u5230\u5982\u4e0b\u7684\u54cd\u5e94\u4f53\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,a.kt)("p",null,"\u8fd9\u5c31\u8868\u793a limit req \u63d2\u4ef6\u751f\u6548\u4e86\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728-consumer\u4e0a\u4f7f\u7528"},"\u5982\u4f55\u5728 ",(0,a.kt)("inlineCode",{parentName:"h3"},"consumer"),"\u4e0a\u4f7f\u7528"),(0,a.kt)("p",null,"consumer \u4e0a\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\uff0c\u9700\u8981\u4e0e\u6388\u6743\u63d2\u4ef6\u4e00\u8d77\u914d\u5408\u4f7f\u7528\uff0c\u8fd9\u91cc\u4ee5 key-auth \u6388\u6743\u63d2\u4ef6\u4e3a\u4f8b\u3002"),(0,a.kt)("p",null,"1\u3001\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\u7ed1\u5b9a\u5230 consumer \u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        },\n        "limit-req": {\n            "rate": 1,\n            "burst": 1,\n            "rejected_code": 403,\n            "key": "consumer_name"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"2\u3001\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u5e76\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,a.kt)("p",null,"\u672a\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"rate + burst")," \u7684\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\nHTTP/1.1 200 OK\n......\n")),(0,a.kt)("p",null,"\u5f53\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"rate + burst")," \u7684\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\nHTTP/1.1 403 Forbidden\n.....\n<html>\n<head><title>403 Forbidden</title></head>\n<body>\n<center><h1>403 Forbidden</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,a.kt)("p",null,"\u8bf4\u660e\u7ed1\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer"),"\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\u751f\u6548\u4e86"),(0,a.kt)("h2",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 limit req \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer"),"\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 limit req \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}u.isMDXComponent=!0}}]);