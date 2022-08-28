"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[89510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),k=i,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83514:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const l={title:"public-api",keywords:["APISIX","API \u7f51\u5173","Public API"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 public-api \u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 public-api \u63d2\u4ef6\u4fdd\u62a4\u4f60\u9700\u8981\u66b4\u9732\u7684 API \u7684\u7aef\u70b9\u3002"},r=void 0,p={unversionedId:"plugins/public-api",id:"plugins/public-api",isDocsHomePage:!1,title:"public-api",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 public-api \u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 public-api \u63d2\u4ef6\u4fdd\u62a4\u4f60\u9700\u8981\u66b4\u9732\u7684 API \u7684\u7aef\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/public-api.md",sourceDirName:"plugins",slug:"/plugins/public-api",permalink:"/zh/docs/apisix/next/plugins/public-api",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/public-api.md",tags:[],version:"current",frontMatter:{title:"public-api",keywords:["APISIX","API \u7f51\u5173","Public API"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 public-api \u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 public-api \u63d2\u4ef6\u4fdd\u62a4\u4f60\u9700\u8981\u66b4\u9732\u7684 API \u7684\u7aef\u70b9\u3002"},sidebar:"docs",previous:{title:"csrf",permalink:"/zh/docs/apisix/next/plugins/csrf"},next:{title:"limit-req",permalink:"/zh/docs/apisix/next/plugins/limit-req"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 URI",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-uri",children:[]},{value:"\u786e\u4fdd Route \u5b89\u5168",id:"\u786e\u4fdd-route-\u5b89\u5168",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u901a\u8fc7\u521b\u5efa\u8def\u7531\u7684\u65b9\u5f0f\u66b4\u9732\u7528\u6237\u81ea\u5b9a\u4e49\u7684 API\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u8def\u7531\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\uff0c\u6765\u4fdd\u62a4",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4e3a\u4e86\u5b9e\u73b0\u7279\u5b9a\u529f\u80fd"),"\u800c\u66b4\u9732\u7684 API\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/jwt-auth"},(0,i.kt)("inlineCode",{parentName:"a"},"jwt-auth"))," \u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a\u516c\u5171 API \u7aef\u70b9 ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," \u7528\u4e8e JWT \u8ba4\u8bc1\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4e2d\u6dfb\u52a0\u7684\u516c\u5171 API \u4e0d\u5bf9\u5916\u66b4\u9732\u7684\uff0c\u4f60\u9700\u8981\u624b\u52a8\u914d\u7f6e\u4e00\u4e2a\u8def\u7531\u5e76\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\u3002"))),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"\u516c\u5171 API \u7684 URI\u3002\u5728\u8bbe\u7f6e\u8def\u7531\u65f6\uff0c\u4f7f\u7528\u6b64\u5c5e\u6027\u6765\u914d\u7f6e\u521d\u59cb\u7684\u516c\u5171 API URI\u3002")))),(0,i.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\u9700\u8981\u4e0e\u6388\u6743\u63d2\u4ef6\u4e00\u8d77\u914d\u5408\u4f7f\u7528\uff0c\u4ee5\u4e0b\u793a\u4f8b\u5206\u522b\u7528\u5230\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/jwt-auth"},(0,i.kt)("inlineCode",{parentName:"a"},"jwt-auth"))," \u63d2\u4ef6\u548c ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/key-auth"},(0,i.kt)("inlineCode",{parentName:"a"},"key-auth"))," \u63d2\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u542f\u7528\u5e76\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\uff0c\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/jwt-auth"},(0,i.kt)("inlineCode",{parentName:"a"},"jwt-auth"))," \u63d2\u4ef6\u6587\u6863\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528\u5e76\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT 'http://127.0.0.1:9080/apisix/admin/routes/r1' \\\n    -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n    \"uri\": \"/apisix/plugin/jwt/sign\",\n    \"plugins\": {\n        \"public-api\": {}\n    }\n}'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,i.kt)("p",null,"\u5411\u914d\u7f6e\u7684 URI \u53d1\u51fa\u8bbf\u95ee\u8bf7\u6c42\uff0c\u5982\u679c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b JWT Token \u7684\u54cd\u5e94\uff0c\u5219\u4ee3\u8868\u63d2\u4ef6\u751f\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTk0Mjg1MzIsImtleSI6InVzZXIta2V5In0.NhrWrO-da4kXezxTLdgFBX2rJA2dF1qESs8IgmwhNd0\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-uri"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 URI"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u542f\u7528\u5e76\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\uff0c\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/jwt-auth"},(0,i.kt)("inlineCode",{parentName:"a"},"jwt-auth"))," \u63d2\u4ef6\u6587\u6863\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 URI \u6765\u66b4\u9732 API\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/r2\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/gen_token",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/plugin/jwt/sign"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,i.kt)("p",null,"\u5411\u81ea\u5b9a\u4e49\u7684 URI \u53d1\u51fa\u8bbf\u95ee\u8bf7\u6c42\uff0c\u5982\u679c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b JWT Token \u7684\u54cd\u5e94\uff0c\u5219\u4ee3\u8868\u63d2\u4ef6\u751f\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080/gen_token?key=user-key'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTk0Mjg1NjIsImtleSI6InVzZXIta2V5In0.UVkXWbyGb8ajBNtxs0iAaFb2jTEWIlqTR125xr1ZMLc\n")),(0,i.kt)("h3",{id:"\u786e\u4fdd-route-\u5b89\u5168"},"\u786e\u4fdd Route \u5b89\u5168"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u914d\u5408\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u6765\u6dfb\u52a0\u8ba4\u8bc1\uff0c\u4ece\u800c\u786e\u4fdd\u8def\u7531\u7684\u5b89\u5168\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/r2\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/gen_token",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/plugin/jwt/sign"\n        },\n        "key-auth": {\n            "key": "test-apikey"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u5e76\u6dfb\u52a0\u8ba4\u8bc1\u540e\uff0c\u53ea\u6709\u7ecf\u8fc7\u8ba4\u8bc1\u7684\u8bf7\u6c42\u624d\u80fd\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,"\u53d1\u51fa\u8bbf\u95ee\u8bf7\u6c42\u5e76\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey"),"\uff0c\u5982\u679c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," HTTP \u72b6\u6001\u7801\uff0c\u5219\u8bf4\u660e\u8bf7\u6c42\u88ab\u5141\u8bb8\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i 'http://127.0.0.1:9080/gen_token?key=user-key' \\\n    -H \"apikey: test-apikey\"\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,i.kt)("p",null,"\u53d1\u51fa\u8bbf\u95ee\u8bf7\u6c42\uff0c\u5982\u679c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"401")," HTTP \u72b6\u6001\u7801\uff0c\u5219\u8bf4\u660e\u8bf7\u6c42\u88ab\u963b\u6b62\uff0c\u63d2\u4ef6\u751f\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i 'http://127.0.0.1:9080/gen_token?key=user-key'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 401 Unauthorized\n")),(0,i.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:1980": 1\n    }\n  }\n}\'\n')))}c.isMDXComponent=!0}}]);