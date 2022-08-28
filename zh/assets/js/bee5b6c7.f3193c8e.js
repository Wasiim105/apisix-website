"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2012],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),I=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=I(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=I(n),g=r,h=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return n?a.createElement(h,p(p({ref:t},s),{},{components:n})):a.createElement(h,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var I=2;I<l;I++)p[I]=n[I];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>I});var a=n(25773),r=(n(27378),n(35318));const l={title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX\uff1f",author:"\u97e9\u98de",authorURL:"https://github.com/hf400159",authorImageURL:"https://github.com/hf400159.png",keywords:["Apache APISIX","API \u7f51\u5173","NGINX","Kong","\u5f00\u6e90\u7f51\u5173"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86Kong \u548c NGINX \u7684\u4e0d\u8db3\uff0c\u4ee5\u53ca\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5982\u4f55\u89e3\u51b3 NGINX \u548c Kong \u6240\u5e26\u6765\u7684\u4e1a\u52a1\u75db\u70b9\u3001Apache APISIX \u7684\u4f18\u52bf\u548c\u4f7f\u7528\u573a\u666f\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/APISIX.png"},p=void 0,i={permalink:"/zh/blog/2022/07/30/why-we-need-apache-apisix",source:"@site/blog/2022/07/30/why-we-need-apache-apisix.md",title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX\uff1f",description:"\u672c\u6587\u4ecb\u7ecd\u4e86Kong \u548c NGINX \u7684\u4e0d\u8db3\uff0c\u4ee5\u53ca\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5982\u4f55\u89e3\u51b3 NGINX \u548c Kong \u6240\u5e26\u6765\u7684\u4e1a\u52a1\u75db\u70b9\u3001Apache APISIX \u7684\u4f18\u52bf\u548c\u4f7f\u7528\u573a\u666f\u3002",date:"2022-07-30T00:00:00.000Z",formattedDate:"2022\u5e747\u670830\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:10.385,truncated:!0,authors:[{name:"\u97e9\u98de",url:"https://github.com/hf400159",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"Apache APISIX Ingress v1.5-rc1 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/08/05/apisix-ingress-1.5rc1-release"},nextItem:{title:"Apache APISIX 2.15 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/07/29/release-apache-apisix-2.15"}},o={authorsImageUrls:[void 0]},I=[{value:"NGINX \u4e0e Kong \u7684\u75db\u70b9",id:"nginx-\u4e0e-kong-\u7684\u75db\u70b9",children:[],level:2},{value:"APISIX \u7684\u4f18\u52bf",id:"apisix-\u7684\u4f18\u52bf",children:[{value:"\u4f18\u5f02\u7684\u67b6\u6784",id:"\u4f18\u5f02\u7684\u67b6\u6784",children:[],level:3},{value:"\u5b8c\u5584\u7684\u751f\u6001",id:"\u5b8c\u5584\u7684\u751f\u6001",children:[],level:3},{value:"\u6d3b\u8dc3\u7684\u793e\u533a",id:"\u6d3b\u8dc3\u7684\u793e\u533a",children:[],level:3}],level:2},{value:"APISIX \u7684\u5e94\u7528\u573a\u666f",id:"apisix-\u7684\u5e94\u7528\u573a\u666f",children:[{value:"Load Balancer \u548c API \u7f51\u5173",id:"load-balancer-\u548c-api-\u7f51\u5173",children:[],level:3},{value:"\u5fae\u670d\u52a1\u7f51\u5173",id:"\u5fae\u670d\u52a1\u7f51\u5173",children:[],level:3},{value:"Kubernetes Ingress",id:"kubernetes-ingress",children:[],level:3},{value:"\u670d\u52a1\u7f51\u683c",id:"\u670d\u52a1\u7f51\u683c",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],s={toc:I};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Kong \u548c NGINX \u7684\u75db\u70b9\uff0c\u4ee5\u53ca Apache APISIX \u5982\u4f55\u89e3\u51b3\u5b83\u4eec\u7684\u75db\u70b9\uff0c\u5e76\u4e14\u4e3a\u4f60\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u5e94\u7528\u573a\u666f\u3002")),(0,r.kt)("p",null,"\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u52a8\u6001\u548c\u53ef\u89c2\u6d4b\u6027\u6210\u4e3a\u8861\u91cf API \u7f51\u5173\u7684\u6807\u51c6\u4e4b\u4e00\u3002Apache APISIX \u81ea\u8bde\u751f\u4e4b\u521d\u5c31\u4e00\u76f4\u8ddf\u968f\u7740\u4e91\u539f\u751f\u7684\u811a\u6b65\u524d\u884c\u3002\u7136\u800c Apache APISIX \u4f5c\u4e3a\u4e00\u4e2a\u8bde\u751f\u521a\u521a\u4e09\u5e74\u7684\u65b0\u4e00\u4ee3\u7f51\u5173\uff0c\u4e3a\u4ec0\u4e48\u53ef\u4ee5\u4ece\u8bde\u751f 20 \u591a\u5e74\u7684 NGINX \u4e0e\u5f00\u6e90 8 \u5e74\u7684 Kong \u4e2d\u7a81\u51fa\u91cd\u56f4\uff0c\u6210\u4e3a\u4e91\u539f\u751f\u65f6\u4ee3\u6700\u6d41\u884c\u4ee5\u53ca\u6700\u6d3b\u8dc3\u7684\u7f51\u5173\uff1f\u6211\u8ba4\u4e3a\u5176\u4e2d\u6700\u91cd\u8981\u7684\u539f\u56e0\u662f\u89e3\u51b3\u4e86\u5f00\u53d1\u8005\u548c\u4f01\u4e1a\u5728\u4f7f\u7528 NGINX \u548c Kong \u4e2d\u7684\u75db\u70b9\u3002"),(0,r.kt)("h2",{id:"nginx-\u4e0e-kong-\u7684\u75db\u70b9"},"NGINX \u4e0e Kong \u7684\u75db\u70b9"),(0,r.kt)("p",null,"\u5728\u5355\u4f53\u670d\u52a1\u65f6\u4ee3\uff0c\u4f7f\u7528 NGINX \u53ef\u4ee5\u5e94\u5bf9\u5927\u591a\u6570\u7684\u573a\u666f\uff0c\u800c\u5230\u4e86\u4e91\u539f\u751f\u65f6\u4ee3\uff0cNGINX \u56e0\u4e3a\u5176\u81ea\u8eab\u67b6\u6784\u7684\u539f\u56e0\u5219\u4f1a\u51fa\u73b0\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\u662f NGINX \u4e0d\u652f\u6301\u96c6\u7fa4\u7ba1\u7406\u3002\u51e0\u4e4e\u6bcf\u5bb6\u4e92\u8054\u7f51\u5382\u5546\u90fd\u6709\u81ea\u5df1\u7684 NGINX \u914d\u7f6e\u7ba1\u7406\u7cfb\u7edf\uff0c\u7cfb\u7edf\u867d\u7136\u5927\u540c\u5c0f\u5f02\u4f46\u662f\u4e00\u76f4\u6ca1\u6709\u7edf\u4e00\u7684\u65b9\u6848\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u6b21\u662f NGINX \u4e0d\u652f\u6301\u914d\u7f6e\u7684\u70ed\u52a0\u8f7d\u3002\u5f88\u591a\u516c\u53f8\u4e00\u65e6\u4fee\u6539\u4e86\u914d\u7f6e\uff0c\u91cd\u65b0\u52a0\u8f7d NGINX \u7684\u65f6\u95f4\u53ef\u80fd\u9700\u8981\u534a\u4e2a\u5c0f\u65f6\u4ee5\u4e0a\u3002\u5e76\u4e14\u5728 Kubernetes \u4f53\u7cfb\u4e0b\uff0c\u4e0a\u6e38\u4f1a\u7ecf\u5e38\u53d1\u751f\u53d8\u5316\uff0c\u5982\u679c\u4f7f\u7528 NGINX \u6765\u5904\u7406\u5c31\u9700\u8981\u9891\u7e41\u91cd\u542f\u670d\u52a1\uff0c\u8fd9\u5bf9\u4e8e\u4f01\u4e1a\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\u3002")),(0,r.kt)("p",null,"\u800c Kong \u7684\u51fa\u73b0\u5219\u89e3\u51b3\u4e86 NGINX \u7684\u75db\u70b9\uff0c\u4f46\u662f\u53c8\u5e26\u6765\u4e86\u65b0\u7684\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kong \u9700\u8981\u4f9d\u8d56\u4e8e PostgreSQL \u6216 Cassandra \u6570\u636e\u5e93\uff0c\u8fd9\u4f7f Kong \u7684\u6574\u4e2a\u67b6\u6784\u975e\u5e38\u81c3\u80bf\uff0c\u5e76\u4e14\u4f1a\u7ed9\u4f01\u4e1a\u5e26\u6765\u9ad8\u53ef\u7528\u7684\u95ee\u9898\u3002\u5982\u679c\u6570\u636e\u5e93\u6545\u969c\u4e86\uff0c\u90a3\u4e48\u6574\u4e2a API \u7f51\u5173\u90fd\u4f1a\u51fa\u73b0\u6545\u969c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Kong \u7684\u8def\u7531\u4f7f\u7528\u7684\u662f\u904d\u5386\u67e5\u627e\uff0c\u5f53\u7f51\u5173\u5185\u6709\u8d85\u8fc7\u4e0a\u5343\u4e2a\u8def\u7531\u65f6\uff0c\u5b83\u7684\u6027\u80fd\u5c31\u4f1a\u51fa\u73b0\u6bd4\u8f83\u6025\u5267\u7684\u4e0b\u964d\u3002")),(0,r.kt)("p",null,"\u800c APISIX \u7684\u51fa\u73b0\u5219\u89e3\u51b3\u4e86\u4e0a\u8ff0\u6240\u6709\u95ee\u9898\uff0c\u6210\u4e3a\u4e86\u4e91\u539f\u751f\u65f6\u4ee3\u6700\u5b8c\u7f8e\u7684 API \u7f51\u5173\u3002\u90a3\u4e48 Apache APISIX \u7684\u4f18\u52bf\u5230\u5e95\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u53ef\u4ee5\u5728\u77ed\u77ed\u4e09\u5e74\u7684\u65f6\u95f4\u91cc\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u7f51\u5173\uff1f"),(0,r.kt)("h2",{id:"apisix-\u7684\u4f18\u52bf"},"APISIX \u7684\u4f18\u52bf"),(0,r.kt)("h3",{id:"\u4f18\u5f02\u7684\u67b6\u6784"},"\u4f18\u5f02\u7684\u67b6\u6784"),(0,r.kt)("p",null,"\u9996\u5148 Apache APISIX \u62e5\u6709\u4f18\u5f02\u7684\u67b6\u6784\uff0c\u73b0\u5728\u5f88\u591a\u5e94\u7528\u90fd\u5728\u5411\u5fae\u670d\u52a1\u3001\u5bb9\u5668\u5316\u8fc1\u79fb\uff0c\u5f62\u6210\u65b0\u7684\u4e91\u539f\u751f\u65f6\u4ee3\u3002\u4e91\u539f\u751f\u4f5c\u4e3a\u5f53\u4e0b\u7684\u6280\u672f\u6f6e\u6d41\uff0c\u5c06\u91cd\u5199\u4f20\u7edf\u4f01\u4e1a\u7684\u6280\u672f\u67b6\u6784\u3002\u800c APISIX \u81ea\u8bde\u751f\u4e4b\u521d\u5c31\u8ddf\u968f\u6280\u672f\u6f6e\u6d41\uff0c\u5e76\u5c06\u5176\u8bbe\u8ba1\u4e3a\u4e91\u539f\u751f\u67b6\u6784\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/1.png",alt:"APISIX"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5de6\u53f3\u5206\u522b\u662f APISIX \u7684\u6570\u636e\u9762\uff08Data Plane\uff09\u548c\u63a7\u5236\u9762\uff08Control Plane\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u9762\uff1a\u4ee5 NGINX \u7684\u7f51\u7edc\u5e93\u4e3a\u57fa\u7840\uff08\u672a\u4f7f\u7528 NGINX \u7684\u8def\u7531\u5339\u914d\u3001\u9759\u6001\u914d\u7f6e\u548c C \u6a21\u5757\uff09\uff0c\u4f7f\u7528Lua \u548c NGINX \u52a8\u6001\u63a7\u5236\u8bf7\u6c42\u6d41\u91cf\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u9762\uff1a\u4f7f\u7528 etcd \u6765\u5b58\u50a8\u548c\u540c\u6b65\u7f51\u5173\u7684\u914d\u7f6e\u6570\u636e\uff0c\u7ba1\u7406\u5458\u901a\u8fc7 Admin API \u6216\u8005 Dashboard \u53ef\u4ee5\u5728\u6beb\u79d2\u7ea7\u522b\u5185\u901a\u77e5\u5230\u6240\u6709\u6570\u636e\u9762\u8282\u70b9\u3002")),(0,r.kt)("p",null,"\u5728\u66f4\u65b0\u6570\u636e\u4e0a\uff0cKong \u91c7\u7528\u8f6e\u8be2\u6570\u636e\u5e93\u7684\u65b9\u5f0f\uff0c\u4f46\u662f\u53ef\u80fd\u9700\u8981 5-10 \u79d2\u624d\u80fd\u83b7\u53d6\u5230\u6700\u65b0\u7684\u914d\u7f6e\uff1b\u800c APISIX \u5219\u91c7\u7528\u76d1\u542c etcd \u7684\u914d\u7f6e\u53d8\u66f4\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5c06\u65f6\u95f4\u63a7\u5236\u5728\u6beb\u79d2\u7ea7\uff0c\u8fbe\u5230\u5b9e\u65f6\u751f\u6548\u7684\u6548\u679c\u3002\n\u800c\u4e14\u7531\u4e8e APISIX \u548c etcd \u5747\u652f\u6301\u591a\u70b9\u90e8\u7f72\uff0c\u56e0\u6b64\u5728 APISIX \u5f53\u524d\u67b6\u6784\u4e2d\uff0c\u4efb\u4f55\u4e00\u4e2a\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u5b95\u673a\u7b49\u4e8b\u6545\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cd APISIX \u6b63\u5e38\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u80fd\u529b\u3002"),(0,r.kt)("h3",{id:"\u5b8c\u5584\u7684\u751f\u6001"},"\u5b8c\u5584\u7684\u751f\u6001"),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e3a APISIX \u7684\u751f\u6001\u56fe\uff0c\u4ece\u8be5\u56fe\u53ef\u4ee5\u51c6\u786e\u770b\u5230 APISIX \u5df2\u7ecf\u652f\u6301\u7684 7 \u5c42\u534f\u8bae\u6709 HTTP(S)\u3001HTTP2\u3001Dubbo \u548c\u7269\u8054\u7f51\u534f\u8bae MQTT \u7b49\u7b49\uff0c4 \u5c42\u534f\u8bae\u6709 TCP/UDP\u3002\n\u53f3\u4fa7\u90e8\u5206\u5219\u662f\u4e00\u4e9b\u5f00\u6e90\u6216\u8005 SaaS \u670d\u52a1\uff0c\u6bd4\u5982 SkyWalking\u3001Prometheus \u3001Vault \u7b49\u7b49\u3002\u800c\u6700\u4e0b\u9762\u5219\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\u3001\u4e91\u5382\u5546\u548c\u786c\u4ef6\u73af\u5883\u3002\u800c\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u8f6f\u4ef6\uff0cAPISIX \u4e5f\u652f\u6301\u5728 ARM64 \u7684\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/2.PNG",alt:"APISIX's Ecosystem"})),(0,r.kt)("p",null,"APISIX \u4e0d\u4ec5\u652f\u6301\u4f17\u591a\u534f\u8bae\u4e0e\u64cd\u4f5c\u7cfb\u7edf\uff0c\u800c\u4e14\u4e5f\u652f\u6301\u591a\u8bed\u8a00\u7f16\u7a0b\u63d2\u4ef6\u3002APISIX \u8bde\u751f\u4e4b\u521d\u4ec5\u652f\u6301\u4f7f\u7528 Lua \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5c31\u9700\u8981\u5f00\u53d1\u8005\u638c\u63e1 Lua \u548c NGINX \u76f8\u5173\u7684\u6280\u672f\u6808\u3002\u7136\u800c Lua \u548c NGINX \u5c5e\u4e8e\u76f8\u5bf9\u5c0f\u4f17\u7684\u6280\u672f\uff0c\u5f00\u53d1\u8005\u5f88\u5c11\u3002\u56e0\u6b64\u6211\u4eec\u5728 APISIX \u4e0a\u652f\u6301\u4e86\u591a\u8bed\u8a00\u5f00\u53d1\u63d2\u4ef6\uff0c\u76ee\u524d\u5df2\u7ecf\u6b63\u5f0f\u652f\u6301\u4e86 Java\u3001Golang\u3001Node.js\u3001Python \u7b49\u8bed\u8a00\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/3.png",alt:"programming language"})),(0,r.kt)("h3",{id:"\u6d3b\u8dc3\u7684\u793e\u533a"},"\u6d3b\u8dc3\u7684\u793e\u533a"),(0,r.kt)("p",null,"\u4e0b\u56fe\u662f\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\uff0c\u5176\u4e2d\u6a2a\u5750\u6807\u4ee3\u8868\u65f6\u95f4\u7ebf\uff0c\u7eb5\u5750\u6807\u4ee3\u8868\u8d21\u732e\u8005\u603b\u6570\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230 APISIX \u548c Kong \u8fd9\u4e24\u4e2a\u9879\u76ee\u76f8\u5bf9\u66f4\u6d3b\u8dc3\uff0cAPISIX \u7684\u589e\u957f\u901f\u5ea6\u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4fdd\u6301\u7740\u975e\u5e38\u4e0d\u9519\u7684\u589e\u957f\u7387\uff0c\u5728\u4ee5\u63a5\u8fd1 Kong \u4e24\u500d\u7684\u901f\u5ea6\u5feb\u901f\u6210\u957f\uff0c\u5e76\u4e14\u8d21\u732e\u8005\u6570\u91cf\u5df2\u7ecf\u8fdc\u8fdc\u8d85\u8fc7\u4e86 Kong\uff0c\u7531\u6b64\u53ef\u89c1 APISIX \u53d7\u6b22\u8fce\u7a0b\u5ea6\u3002\u5f53\u7136\u8bc4\u4ef7\u4e00\u4e2a\u9879\u76ee\u6d3b\u8dc3\u5ea6\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u65b9\u6cd5\uff0c\u6bd4\u5982\u67e5\u770b\u6bcf\u6708\u6d3b\u8dc3 Issue\u3001PR \u603b\u6570\u7b49\u65b9\u5f0f\uff0c\u503c\u5f97\u9ad8\u5174\u7684\u662f APISIX \u5728\u8fd9\u4e9b\u65b9\u9762\u4e5f\u662f\u4e00\u9a91\u7edd\u5c18\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/4.png",alt:"Contributor graph"})),(0,r.kt)("h2",{id:"apisix-\u7684\u5e94\u7528\u573a\u666f"},"APISIX \u7684\u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u4ece\u4e0b\u56fe\u4e2d\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u770b\u51fa APISIX \u7684\u76ee\u6807\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u4ee3\u7406\u57fa\u7840\u8bbe\u65bd"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/5.png",alt:"APISIX Application scenarios"})),(0,r.kt)("p",null,"\u4e5f\u8bb8\u4f60\u4f1a\u6709\u7591\u95ee\uff1aAPISIX \u8981\u652f\u6301\u8fd9\u4e48\u591a\u573a\u666f\uff0c\u662f\u5426\u4f1a\u8ba9 APISIX \u53d8\u5f97\u56db\u4e0d\u50cf\uff1f"),(0,r.kt)("p",null,"\u56e0\u4e3a APISIX \u7684\u6838\u5fc3\u662f\u9ad8\u6027\u80fd\u4ee3\u7406\u670d\u52a1\uff0c\u81ea\u8eab\u4e0d\u7ed1\u5b9a\u4efb\u4f55\u73af\u5883\u5c5e\u6027\u3002\u5f53\u5b83\u6f14\u53d8\u4e3a Ingress\u3001\u670d\u52a1\u7f51\u683c\u7b49\u4ea7\u54c1\u65f6\uff0c\u90fd\u662f\u5916\u90e8\u670d\u52a1\u4e0e APISIX \u914d\u5408\uff0c\u53d8\u5316\u7684\u662f\u5916\u90e8\u7a0b\u5e8f\u800c\u4e0d\u662f APISIX \u81ea\u8eab\uff0c\u4e0b\u9762\u5c06\u9010\u6b65\u4e3a\u5927\u5bb6\u4ecb\u7ecd APISIX \u662f\u5982\u4f55\u652f\u6301\u8fd9\u4e9b\u573a\u666f\u7684\u3002"),(0,r.kt)("h3",{id:"load-balancer-\u548c-api-\u7f51\u5173"},"Load Balancer \u548c API \u7f51\u5173"),(0,r.kt)("p",null,"\u9996\u5148\u662f\u9488\u5bf9\u4f20\u7edf\u7684 LB \u548c API \u7f51\u5173\u573a\u666f\uff0c\u56e0\u4e3a APISIX \u57fa\u4e8e NGINX + LuaJIT \u5b9e\u73b0\uff0c\u6240\u4ee5\u5929\u7136\u5177\u5907\u9ad8\u6027\u80fd\u3001\u5b89\u5168\u7b49\u7279\u6027\uff0c\u5e76\u4e14\u539f\u751f\u652f\u6301\u4e86\u52a8\u6001 SSL \u8bc1\u4e66\u5378\u8f7d\u3001SSL \u63e1\u624b\u4f18\u5316\u7b49\u529f\u80fd\uff0c\u5728\u8d1f\u8f7d\u5747\u8861\u7684\u670d\u52a1\u80fd\u529b\u4e0a\u4e5f\u66f4\u4f18\u79c0\u3002\u4ece NGINX \u5207\u6362\u5230 APISIX \u4e0d\u4ec5\u6027\u80fd\u4e0d\u4f1a\u4e0b\u964d\uff0c\u800c\u4e14\u53ef\u4ee5\u4eab\u53d7\u5230\u52a8\u6001\u3001\u7edf\u4e00\u7ba1\u7406\u7b49\u7279\u6027\u5e26\u6765\u7684\u7ba1\u7406\u6548\u7387\u7684\u63d0\u5347\u3002"),(0,r.kt)("h3",{id:"\u5fae\u670d\u52a1\u7f51\u5173"},"\u5fae\u670d\u52a1\u7f51\u5173"),(0,r.kt)("p",null,"APISIX \u76ee\u524d\u652f\u6301\u591a\u79cd\u8bed\u8a00\u7f16\u5199\u6269\u5c55\u63d2\u4ef6\uff0c\u53ef\u4ee5\u89e3\u51b3\u4e1c\u897f\u5411\u5fae\u670d\u52a1 API \u7f51\u5173\u9762\u4e34\u7684\u4e3b\u8981\u95ee\u9898\u2014\u2014\u5f02\u6784\u591a\u8bed\u8a00\u548c\u901a\u7528\u95ee\u9898\u3002\u5185\u7f6e\u652f\u6301\u7684\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u6709 Nacos\u3001etcd\u3001Eureka \u7b49\uff0c\u8fd8\u6709\u6807\u51c6\u7684 DNS \u65b9\u5f0f\uff0c\u53ef\u4ee5\u5e73\u6ed1\u66ff\u4ee3 Zuul\u3001Spring Cloud Gateway\u3001Dubbo \u7b49\u5fae\u670d\u52a1 API \u7f51\u5173\u3002"),(0,r.kt)("h3",{id:"kubernetes-ingress"},"Kubernetes Ingress"),(0,r.kt)("p",null,"\u76ee\u524d K8s \u5b98\u65b9 Kubernetes Ingress Controller \u9879\u76ee\u4e3b\u8981\u57fa\u4e8e NGINX \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\uff0c\u6240\u4ee5\u5728\u8def\u7531\u80fd\u529b\u548c\u52a0\u8f7d\u6a21\u5f0f\u4e0a\u7a0d\u663e\u4e0d\u8db3\uff0c\u5e76\u4e14\u5b58\u5728\u4e00\u4e9b\u660e\u663e\u52a3\u52bf\u3002\u6bd4\u5982\u6dfb\u52a0\u3001\u4fee\u6539\u4efb\u4f55 API \u65f6\uff0c\u9700\u8981\u91cd\u542f\u670d\u52a1\u624d\u80fd\u5b8c\u6210\u65b0 NGINX \u914d\u7f6e\u7684\u66f4\u65b0\uff0c\u4f46\u91cd\u542f\u670d\u52a1\uff0c\u5bf9\u7ebf\u4e0a\u6d41\u91cf\u7684\u5f71\u54cd\u662f\u975e\u5e38\u5927\u7684\u3002"),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/ingress-controller/getting-started/"},"APISIX Ingress Controller")," \u5219\u5b8c\u7f8e\u89e3\u51b3\u4e86\u4e0a\u9762\u63d0\u5230\u7684\u6240\u6709\u95ee\u9898\uff1a\u652f\u6301\u5168\u52a8\u6001\uff0c\u65e0\u9700\u91cd\u542f\u52a0\u8f7d\u3002\u540c\u65f6\u7ee7\u627f\u4e86 APISIX \u7684\u6240\u6709\u4f18\u52bf\uff0c\u8fd8\u652f\u6301\u539f\u751f Kubernetes CRD\uff0c\u65b9\u4fbf\u7528\u6237\u8fc1\u79fb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/6.png",alt:"APISIX Kubernetes Ingress"})),(0,r.kt)("h3",{id:"\u670d\u52a1\u7f51\u683c"},"\u670d\u52a1\u7f51\u683c"),(0,r.kt)("p",null,"\u672a\u6765\u4e94\u5230\u5341\u5e74\uff0c\u57fa\u4e8e\u4e91\u539f\u751f\u6a21\u5f0f\u67b6\u6784\u4e0b\u7684\u670d\u52a1\u7f51\u683c\u67b6\u6784\u5f00\u59cb\u5d2d\u9732\u5934\u89d2\u3002APISIX \u4e5f\u63d0\u524d\u5f00\u59cb\u9501\u5b9a\u8d5b\u9053\uff0c\u901a\u8fc7\u8c03\u7814\u548c\u6280\u672f\u5206\u6790\u540e\uff0cAPISIX \u5df2\u7ecf\u652f\u6301\u4e86 xDS \u534f\u8bae\uff0cAPISIX Mesh \u5c31\u6b64\u8bde\u751f\uff0c\u5728\u670d\u52a1\u7f51\u683c\u9886\u57df  APISIX \u4e5f\u62e5\u6709\u4e86\u4e00\u5e2d\u4e4b\u5730\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/7.png",alt:"APISXI Mesh"})),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"Apache APISIX \u81ea\u5f00\u6e90\u7b2c\u4e00\u5929\uff0c\u8fc4\u4eca\u4e3a\u6b62\u5df2\u7ecf\u6709\u4e09\u5e74\u7684\u65f6\u95f4\u4e86\uff0c\u9ad8\u6d3b\u8dc3\u5ea6\u7684\u793e\u533a\u4ee5\u53ca\u5b9e\u9645\u7684",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/tags/case-studies/"},"\u7528\u6237\u6848\u4f8b"),"\u8bc1\u660e\u4e86 APISIX \u662f\u4e91\u539f\u751f\u65f6\u4ee3\u6700\u5b8c\u7f8e\u7684 API \u7f51\u5173\u3002\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u5bf9 APISIX \u6709\u4e86\u66f4\u5168\u9762\u7684\u8ba4\u8bc6\uff0c\u671f\u5f85\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 APISIX \u4f5c\u4e3a\u4f60\u7684 API \u7f51\u5173\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e3a Apache APISIX \u793e\u533a\u7684 QQ \u7fa4\uff0c\u6709\u4efb\u4f55\u95ee\u9898\u90fd\u53ef\u4ee5\u5728\u8be5\u7fa4\u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"Github issue")," \u7559\u8a00\uff0c\u793e\u533a\u8d21\u732e\u8005\u5c06\u4f1a\u5feb\u901f\u54cd\u5e94\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u52a0\u5165 APISIX Slack \u9891\u9053\u548c\u90ae\u4ef6\u5217\u8868\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join/"},"\u52a0\u5165\u6211\u4eec"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/8.PNG",alt:"QQ group: 578997126"})),(0,r.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u89c2\u770b",(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1w54y1V73Z?p=1&share_medium=android&share_plat=android&share_source=COPY&share_tag=s_i&timestamp=1621812452&unique_k=PEusrt"},"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX?")))}c.isMDXComponent=!0}}]);