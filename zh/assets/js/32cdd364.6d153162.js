"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5194],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=o(n),m=r,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||p;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<p;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var a=n(25773),r=(n(27378),n(35318));const p={title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",slug:"2021/07/27/use-of-plugin-orchestration-in-apache-apisix",author:"\u741a\u81f4\u8fdc",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["API \u7f51\u5173","APISIX","\u63d2\u4ef6\u7f16\u6392","Apache APISIX Dashboard"],description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u53ca\u5176\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002",tags:["Ecosystem"]},l=void 0,i={permalink:"/zh/blog/2021/07/27/use-of-plugin-orchestration-in-apache-apisix",source:"@site/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX.md",title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u53ca\u5176\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002",date:"2021-07-27T00:00:00.000Z",formattedDate:"2021\u5e747\u670827\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:10.235,truncated:!0,authors:[{name:"\u741a\u81f4\u8fdc",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"Apache APISIX 2.8 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/07/28/release-apache-apisix-2.8"},nextItem:{title:"ApacheCon Asia 2021\uff1aApache APISIX \u6280\u672f\u8bae\u9898\u4e00\u89c8",permalink:"/zh/blog/2021/07/25/apachecon-asia"}},c={authorsImageUrls:[void 0]},o=[{value:"\u4ec0\u4e48\u662f Apache APISIX",id:"\u4ec0\u4e48\u662f-apache-apisix",children:[],level:2},{value:"\u4ec0\u4e48\u662f\u63d2\u4ef6\u7f16\u6392",id:"\u4ec0\u4e48\u662f\u63d2\u4ef6\u7f16\u6392",children:[],level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache APISIX Dashboard",id:"apache-apisix-dashboard",children:[],level:3}],level:2},{value:"\u672a\u6765\u5c55\u671b",id:"\u672a\u6765\u5c55\u671b",children:[],level:2}],s={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3 Apache APISIX \u4e0e\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002\u672c\u6587\u4f5c\u8005\u741a\u81f4\u8fdc\uff0cApache APISIX PMC\uff0c\u5728\u652f\u6d41\u79d1\u6280\u8d1f\u8d23\u4f01\u4e1a\u4ea7\u54c1\u4e0e\u5927\u524d\u7aef\u6280\u672f\u3002")),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-apache-apisix"},"\u4ec0\u4e48\u662f Apache APISIX"),(0,r.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684\u4e03\u5c42\u5168\u6d41\u91cf\u5904\u7406\u5e73\u53f0\uff0c\u53ef\u4f5c\u4e3a API \u7f51\u5173\u5904\u7406\u4e1a\u52a1\u6d41\u91cf\u5165\u53e3\uff0c\u5177\u6709\u6781\u9ad8\u6027\u80fd\u3001\u8d85\u4f4e\u5ef6\u8fdf\u7684\u663e\u8457\u7279\u6027\u3002\u5b83\u5185\u7f6e\u4e86 50 \u591a\u79cd\u63d2\u4ef6\uff0c\u8986\u76d6\u8eab\u4efd\u9a8c\u8bc1\u3001\u5b89\u5168\u9632\u62a4\u3001\u6d41\u91cf\u63a7\u5236\u3001Serverless\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u591a\u4e2a\u65b9\u9762\uff0c\u53ef\u6ee1\u8db3\u4f01\u4e1a\u5ba2\u6237\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u65b9\u67b6\u6784\u56fe\u6240\u793a\uff0cApache APISIX \u5206\u4e3a\u6570\u636e\u9762\uff08\u5de6\u4fa7\uff09\u4e0e\u63a7\u5236\u9762\uff08\u53f3\u4fa7\uff09\u4e24\u90e8\u5206\uff1a\u901a\u8fc7\u63a7\u5236\u9762\u4e0b\u53d1\u914d\u7f6e\u5230 ETCD\uff0c\u6570\u636e\u9762\u501f\u52a9\u4e30\u5bcc\u7684\u63d2\u4ef6\u5904\u7406\u5185\u5916\u6d41\u91cf\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466553989-ecae1a31-8121-4390-a830-f386b9b12322.png",alt:"Apache APISIX architecture"})),(0,r.kt)("p",null,"Apache APISIX \u66b4\u9732\u4e86\u4e00\u7ec4\u63a5\u53e3\uff0c\u65b9\u4fbf\u6211\u4eec\u4e3a API \u7ed1\u5b9a\u63d2\u4ef6\u3002\u5982\u679c\u6211\u4eec\u5e0c\u671b\u4e3a API \u589e\u52a0\u9650\u901f\u80fd\u529b\uff0c\u53ea\u9700\u4e3a API \u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT http://127.0.0.1:9080/apisix/admin/routes/1 -d \'\n\n {\n   "uri": "/get",\n   "methods": ["GET"],\n   "upstream": {\n     "type": "roundrobin",\n     "nodes": {\n       "httpbin.org:80": 1\n     }\n   },\n   "plugins": {\n     "limit-req": {\n       "rate": 1,\n       "burst": 2,\n       "rejected_code": 503,\n       "key": "remote_addr"\n     }\n   }\n }\'\n')),(0,r.kt)("p",null,"\u8c03\u7528\u6210\u529f\u540e\uff0c\u5f53\u8bf7\u6c42\u5230\u8fbe\u8be5 API \u65f6\u5c06\u8fdb\u884c\u9650\u901f\u7ba1\u63a7\u3002"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u5b9e\u73b0 API \u9650\u901f\uff08\u7279\u5b9a\u529f\u80fd\uff09\uff0c\u82e5\u9488\u5bf9\u201c\u6839\u636e\u67d0\u4e2a\u63d2\u4ef6\u7684\u5904\u7406\u7ed3\u679c\uff0c\u51b3\u5b9a\u540e\u7eed\u7684\u8bf7\u6c42\u5904\u7406\u903b\u8f91\u201d\u8fd9\u79cd\u573a\u666f\u5316\u9700\u6c42\uff0c\u8be5\u600e\u4e48\u505a\u5462\uff1f\u5f53\u524d\uff0c\u73b0\u6709\u7684\u63d2\u4ef6\u673a\u5236\u65e0\u6cd5\u6ee1\u8db3\u8fd9\u79cd\u9700\u6c42\uff0c\u8fd9\u65f6\u4fbf\u5f15\u7533\u51fa\u63d2\u4ef6\u7f16\u6392\u7684\u80fd\u529b\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u63d2\u4ef6\u7f16\u6392"},"\u4ec0\u4e48\u662f\u63d2\u4ef6\u7f16\u6392"),(0,r.kt)("p",null,"\u63d2\u4ef6\u7f16\u6392\u662f\u4f4e\u4ee3\u7801\u7684\u4e00\u79cd\u8868\u73b0\u5f62\u5f0f\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f01\u4e1a\u964d\u4f4e\u4f7f\u7528\u6210\u672c\u3001\u589e\u52a0\u8fd0\u7ef4\u6548\u7387\uff0c\u662f\u4f01\u4e1a\u6570\u5b57\u5316\u8f6c\u578b\u8fc7\u7a0b\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u80fd\u529b\u3002\u501f\u52a9\u4f4e\u4ee3\u7801 API \u7f51\u5173 Apache APISIX \u4e2d\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06 50+ \u63d2\u4ef6\u901a\u8fc7\u201c\u62d6\u62fd\u201d\u7684\u65b9\u5f0f\u8fdb\u884c\u7ec4\u5408\u7f16\u6392\uff0c\u88ab\u7f16\u6392\u7684\u63d2\u4ef6\u4e5f\u80fd\u591f\u5171\u4eab\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u6700\u7ec8\u5b9e\u73b0\u573a\u666f\u5316\u9700\u6c42\u3002"),(0,r.kt)("p",null,"\u6269\u5c55\u4e0a\u8ff0 API \u9650\u901f\u7684\u573a\u666f\uff1a\u8bf7\u6c42\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth"),"\u63d2\u4ef6\u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\uff0c\u82e5\u8ba4\u8bc1\u901a\u8fc7\uff0c\u5c06\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-logger")," \u63d2\u4ef6\u63a5\u7ba1\u5e76\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\uff1b\u82e5\u8ba4\u8bc1\u5931\u8d25\uff08\u63d2\u4ef6\u8fd4\u56de 401 \u72b6\u6001\u7801\uff09\uff0c\u5c06\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," \u63d2\u4ef6\u8fdb\u884c\u9650\u901f\u3002"),(0,r.kt)("p",null,"\u89c1\u5982\u4e0b\u64cd\u4f5c\u89c6\u9891\uff1a"),(0,r.kt)("iframe",{height:"350",width:"100%",src:"https://api7-website-1301662268.file.myqcloud.com/202107/%E6%8F%92%E4%BB%B6%E7%BC%96%E6%8E%92.mp4",frameborder:"0"}),(0,r.kt)("p",null,"\u8be5\u89c6\u9891\u4e2d\uff0cWeb \u754c\u9762\u5217\u51fa\u4e86\u76ee\u524d\u5df2\u6709\u7684\u63d2\u4ef6\u4e0e\u753b\u677f\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u63d2\u4ef6\u62d6\u62fd\u5230\u753b\u677f\u4e0a\u8fdb\u884c\u7f16\u6392\uff0c\u5e76\u586b\u5199\u63d2\u4ef6\u7ed1\u5b9a\u7684\u6570\u636e\uff0c\u7136\u540e\u4fbf\u5b8c\u6210\u4e86\u6574\u4e2a\u6d41\u7a0b\u3002\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u64cd\u4f5c\u53ef\u89c6\u5316\uff1a\u6211\u4eec\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528\u754c\u9762\u53ef\u89c6\u5316\u521b\u5efa API \u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u7f16\u6392\u80fd\u529b\u76f4\u89c2\u3001\u6e05\u6670\u5730\u8fdb\u884c\u573a\u666f\u5316\u8bbe\u8ba1\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u6d41\u7a0b\u53ef\u590d\u7528\uff1a\u901a\u8fc7\u5bfc\u5165\u3001\u5bfc\u51fa\u753b\u677f\u7684 JSON \u6570\u636e\uff0c\u53ef\u4ee5\u4fbf\u6377\u5730\u590d\u7528\u7f16\u6392\u751f\u6210\u7684\u5de5\u7a0b\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7ec4\u5408\u65b0\u201c\u63d2\u4ef6\u201d\uff1a\u5c06\u6bcf\u4e00\u4e2a\u573a\u666f\u89c6\u4f5c\u4e00\u4e2a\u63d2\u4ef6\uff0c\u901a\u8fc7\u4f7f\u7528\u6761\u4ef6\u5143\u4ef6\u7ec4\u5408\u4e0d\u540c\u7684\u63d2\u4ef6\uff0c\u6765\u5b9e\u73b0\u63d2\u4ef6\u521b\u9020\u201c\u63d2\u4ef6\u201d\u3002")),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("p",null,"\u90a3\u4e48 Apache APISIX \u662f\u5982\u4f55\u4e0e\u4f4e\u4ee3\u7801\u80fd\u529b\u7ed3\u5408\u7684\u5462\uff1f\u8fd9\u9700\u8981\u6570\u636e\u9762 Apache APISIX \u4e0e\u63a7\u5236\u9762 Apache APISIX Dashboard \u5171\u540c\u914d\u5408\u5b8c\u6210\u3002\u6574\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466624894-039f4e63-fd21-403a-94c5-6efc8425eb0f.png",alt:"Apache APISIX plugin orchestration flow"})),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,"\u5728 Apache APISIX \u4e2d\uff0c\u6211\u4eec\u5728 Route \u5b9e\u4f53\u4e2d\u65b0\u589e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u6267\u884c\u903b\u8f91 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/1982"},"PR"),"\uff0c\u53ef\u7528\u4e8e\u63a5\u6536 Dashboard \u751f\u6210\u7684 Lua \u51fd\u6570\u5e76\u6267\u884c\uff0c\u5b83\u652f\u6301\u8c03\u7528\u5df2\u6709\u63d2\u4ef6\u4ee5\u590d\u7528\u4ee3\u7801\u3002\u53e6\u5916\uff0c\u5b83\u4e5f\u4f5c\u7528\u4e8e HTTP \u8bf7\u6c42\u7684\u751f\u547d\u5468\u671f\u4e2d\u7684\u5404\u4e2a\u9636\u6bb5\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"access"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"header_filer"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"body_filter")," \u7b49\uff0c\u7cfb\u7edf\u4f1a\u5728\u76f8\u5e94\u9636\u6bb5\u81ea\u52a8\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u51fd\u6570\u5bf9\u5e94\u9636\u6bb5\u4ee3\u7801\uff0c\u89c1\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n\n  "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n\n}\n')),(0,r.kt)("h3",{id:"apache-apisix-dashboard"},"Apache APISIX Dashboard"),(0,r.kt)("p",null,"\u5728 Dashboard \u4e2d\uff0c\u5b83\u5305\u542b\u4e86 Web \u4e0e ManagerAPI \u5171\u4e24\u4e2a\u5b50\u7ec4\u4ef6\uff1aWeb \u7528\u4e8e\u63d0\u4f9b\u53ef\u89c6\u5316\u754c\u9762\uff0c\u65b9\u4fbf\u6211\u4eec\u914d\u7f6e API \u7f51\u5173\uff1bManagerAPI \u7528\u4e8e\u63d0\u4f9b RESTful API\uff0c\u4f9b Web \u6216\u5176\u5b83\u5ba2\u6237\u7aef\u8c03\u7528\u4ee5\u4fbf\u64cd\u4f5c\u914d\u7f6e\u4e2d\u5fc3\uff08\u9ed8\u8ba4\u4e3a ETCD\uff09\uff0c\u8fdb\u800c\u95f4\u63a5\u5730\u63a7\u5236 Apache APISIX\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u751f\u6210\u5408\u6cd5\u3001\u6709\u6548\u7684 script \u51fd\u6570\uff0cManagerAPI \u9009\u62e9\u4e86 DAG \u6709\u5411\u65e0\u73af\u56fe\u7684\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u5e95\u5c42\u8bbe\u8ba1\uff0c\u5e76\u81ea\u4e3b\u7814\u53d1\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"dag-to-lua")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/dag-to-lua"},"\u9879\u76ee"),"\uff1a\u5b83\u5c06\u6839\u8282\u70b9\u4f5c\u4e3a\u5f00\u59cb\u8282\u70b9\uff0c\u6839\u636e\u5224\u65ad\u6761\u4ef6\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u6d41\u8f6c\u63d2\u4ef6\uff0c\u8fd9\u5c06\u6709\u6548\u907f\u514d\u903b\u8f91\u6b7b\u5faa\u73af\u3002\u5982\u4e0b\u4e3a DAG \u6570\u636e\u7ed3\u6784\u7684\u793a\u610f\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466682723-dcfd5c1b-9ae7-42b4-b3c2-c00aaf7a5996.png",alt:"Apache APISIX plugin orchestration DAG data structure"})),(0,r.kt)("p",null,"\u5bf9\u5e94\u5230 ManagerAPI \u63a5\u6536\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u53c2\u6570\u4e0a\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "conf": {\n    "1-2-3": {\n      "name": "plugin-a",\n      "conf": {\n        ...\n\n      }\n    },\n\n    "4-5-6": {\n      "name": "plugin-b",\n      "conf": {\n        ...\n      }\n    },\n    "7-8-9": {\n      "name": "plugin-c",\n      "conf": {\n        ...\n      }\n    }\n  },\n\n  "rule": {\n    "root": "1-2-3", // \u8d77\u59cb\u8282\u70b9 ID\n    "1-2-3": [\n      [\n        "code == 200",\n        "4-5-6"\n      ], [\n        "",\n        "7-8-9"\n      ]\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"\u5373\u5ba2\u6237\u7aef\u5c06\u6700\u7ec8\u7f16\u6392\u540e\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u4e0a\u8ff0\u683c\u5f0f\u540e\uff0cManagerAPI \u4f1a\u501f\u52a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"dag-to-lua")," \u9879\u76ee\u751f\u6210 Lua \u51fd\u6570\uff0c\u5e76\u4ea4\u7ed9 Apache APISIX \u6267\u884c\u3002"),(0,r.kt)("p",null,"\u5728 Web \u4fa7\uff0c\u7ecf\u8fc7\u6311\u9009\u3001\u5bf9\u6bd4\u4e0e\u9879\u76ee\u9a8c\u8bc1\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u8682\u8681\u91d1\u670d\u5f00\u6e90\u7684 X6 \u56fe\u7f16\u8f91\u5f15\u64ce\u4f5c\u4e3a\u63d2\u4ef6\u7f16\u6392 Web \u90e8\u5206\u7684\u5e95\u5c42\u6846\u67b6\uff0c\u9664\u4e86\u5b8c\u5584\u3001\u6e05\u6670\u7684\u6587\u6863\u5916\uff0c\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684\u4ea4\u4e92\u7ec4\u4ef6\u4ee5\u53ca\u8282\u70b9\u53ef\u5b9a\u5236\u5316\u80fd\u529b\u4e5f\u662f\u6211\u4eec\u9009\u62e9\u5b83\u7684\u539f\u56e0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466742487-269ebd5a-4f6c-47c3-a941-1275a4b3d178.png",alt:"X6 introduction"})),(0,r.kt)("p",null,"\u5728\u7f16\u6392\u5b9e\u73b0\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u62bd\u8c61\u51fa\u4e86\u901a\u7528\u5143\u4ef6\u4e0e\u63d2\u4ef6\u5143\u4ef6\u7684\u6982\u5ff5\uff1a\u901a\u7528\u5143\u4ef6\u662f\u6307\u5f00\u59cb\u8282\u70b9\u3001\u7ed3\u675f\u8282\u70b9\u4e0e\u6761\u4ef6\u5224\u65ad\u8282\u70b9\uff0c\u63d2\u4ef6\u5143\u4ef6\u5219\u662f\u6bcf\u4e00\u4e2a\u53ef\u7528\u7684 Apache APISIX \u63d2\u4ef6\uff0c\u901a\u8fc7\u5c06\u8fd9\u4e9b\u5143\u4ef6\u62d6\u62fd\u5230\u753b\u677f\u4e2d\u6765\u5b8c\u6210\u63d2\u4ef6\u7f16\u6392\u7684\u6d41\u7a0b\u3002\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466805116-0e1c9a83-e5d0-40c1-8a76-8cb1402a491c.png",alt:"Apache APISIX dashboard plugin orchestration demo1"})),(0,r.kt)("p",null,"\u5728\u62d6\u62fd\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u9650\u5236\u4e00\u7cfb\u5217\u7684\u8fb9\u754c\u6761\u4ef6\uff0c\u8fd9\u91cc\u6709\u51e0\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("p",null,"\u5f53\u63d2\u4ef6\u672a\u914d\u7f6e\u65f6\uff0c\u7cfb\u7edf\u5c06\u51fa\u73b0\u300c\u5b58\u5728\u672a\u914d\u7f6e\u7684\u5143\u4ef6\u300d\u7684\u9519\u8bef\u63d0\u793a\uff0c\u53ef\u4ee5\u76f4\u89c2\u5730\u770b\u5230\u54ea\u4e2a\u63d2\u4ef6\u6ca1\u6709\u914d\u7f6e\u6570\u636e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466853301-a67de136-633d-4b5d-9062-ac17bf625063.png",alt:"Apache APISIX dashboard plugin orchestration demo2"})),(0,r.kt)("p",null,"\u5f53\u7f16\u8f91\u67d0\u6761 API \u65f6\uff0c\u82e5\u8be5 API \u5df2\u7ecf\u7ed1\u5b9a\u4e86\u63d2\u4ef6\u6570\u636e\uff0c\u5f53\u4f7f\u7528\u63d2\u4ef6\u7f16\u6392\u6a21\u5f0f\u65f6\uff0c\u7cfb\u7edf\u5728\u68c0\u6d4b\u540e\u5c06\u51fa\u73b0\u8b66\u544a\u4fe1\u606f\uff0c\u53ea\u6709\u7528\u6237\u660e\u786e\u786e\u8ba4\u5e0c\u671b\u4f7f\u7528\u7f16\u6392\u6a21\u5f0f\u65f6\uff0c\u7cfb\u7edf\u624d\u80fd\u7ee7\u7eed\u8fdb\u884c\u3002\u8fd9\u53ef\u4ee5\u6709\u6548\u907f\u514d API \u6570\u636e\u88ab\u8bef\u64cd\u4f5c\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466907551-07ec82f9-8988-4a66-a5f2-d3944d4f239c.png",alt:"Apache APISIX dashboard plugin orchestration demo3"})),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u5b58\u5728\u8bf8\u5982\u5f00\u59cb\u5143\u4ef6\u53ea\u80fd\u6709\u4e00\u4e2a\u8f93\u51fa\u3001\u6761\u4ef6\u5224\u65ad\u5143\u4ef6\u53ea\u80fd\u6709\u4e00\u4e2a\u8f93\u5165\u7b49\u60c5\u51b5\u3002\u8bd5\u60f3\uff1a\u5982\u679c\u7cfb\u7edf\u4e0d\u52a0\u9650\u5236\u5730\u8ba9\u7528\u6237\u64cd\u4f5c\uff0c\u4e0d\u5408\u7406\u7684\u63d2\u4ef6\u7ec4\u5408\u65e2\u65e0\u610f\u4e49\uff0c\u53c8\u4f1a\u4ea7\u751f\u65e0\u6cd5\u9884\u6599\u7684\u9519\u8bef\uff0c\u56e0\u6b64\u4e0d\u65ad\u4e30\u5bcc\u8fb9\u754c\u6761\u4ef6\uff0c\u4e5f\u662f\u5728\u8bbe\u8ba1\u63d2\u4ef6\u7f16\u6392\u65f6\u9700\u8981\u7740\u91cd\u8003\u8651\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5b8c\u6210\u7f16\u6392\u540e\uff0c\u5c06\u4f7f\u7528 X6 \u66b4\u9732\u7684 API \u751f\u6210\u6d41\u7a0b\u56fe\u7684 JSON \u6570\u636e\uff0c\u7136\u540e\u8f6c\u6362\u4e3a\u7cfb\u7edf\u9700\u8981\u7684 DAG \u6570\u636e\uff0c\u6700\u7ec8\u751f\u6210 Lua \u51fd\u6570\u3002"),(0,r.kt)("h2",{id:"\u672a\u6765\u5c55\u671b"},"\u672a\u6765\u5c55\u671b"),(0,r.kt)("p",null,"\u901a\u8fc7\u62d6\u62fd\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u5f97\u4f7f\u7528\u4eba\u5458\u66f4\u65b9\u4fbf\u5730\u7ec4\u5408\u63d2\u4ef6\u6765\u6ee1\u8db3\u4e0d\u540c\u7684\u573a\u666f\uff0c\u4ee5\u63d0\u5347 API \u7f51\u5173\u53ef\u6269\u5c55\u80fd\u529b\u4e0e\u8fd0\u7ef4\u4f53\u9a8c\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5b58\u5728\u5982\u4e0b\u53ef\u4ee5\u7ee7\u7eed\u4f18\u5316\u7684\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u76ee\u524d\u5143\u4ef6\u7684\u8fb9\u754c\u5224\u65ad\u6761\u4ef6\u8fd8\u4e0d\u591f\u4e30\u5bcc\uff0c\u901a\u8fc7\u7ee7\u7eed\u5b8c\u5584\u8fd9\u4e9b\u6761\u4ef6\uff0c\u4ee5\u51cf\u5c11\u4e0d\u5408\u7406\u7684\u7f16\u6392\u7ec4\u5408\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d\u7f16\u6392\u793a\u4f8b\u4e0d\u591a\uff0c\u63d0\u4f9b\u66f4\u591a\u7684\u53c2\u8003\u793a\u4f8b\u53ef\u65b9\u4fbf\u5f00\u53d1\u8005\u5b66\u4e60\u3001\u4f9b\u7528\u6237\u4f7f\u7528\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d Apache APISIX \u4f7f\u7528\u4e86\u63d2\u4ef6\u5b9a\u4e49\u7684 code \u8fdb\u884c\u72b6\u6001\u8fd4\u56de\uff08\u5f02\u5e38\u5219\u8fd4\u56de\u72b6\u6001\u7801\uff0c\u8bf7\u6c42\u7ec8\u6b62\uff09\uff0c\u53ef\u4ee5\u652f\u6301\u66f4\u591a HTTP Response \u5b57\u6bb5\u751a\u81f3\u4fee\u6539\u63d2\u4ef6\u5b9a\u4e49\u6765\u6269\u5c55\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\uff0c\u5982\u4e0b\u8ff0\u63d2\u4ef6\u5b9a\u4e49\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"local _M = {\n  version = 0.1,\n  priority = 2500,\n  type = 'auth',\n  name = plugin_name,\n  schema = schema,\n  # \u65b0\u589e\u7684 result \u5b57\u6bb5\uff0c\u53ef\u5b58\u50a8\u63d2\u4ef6\u8fd0\u884c\u7ed3\u679c\uff0c\u5e76\u4f20\u9012\u5230\u4e0b\u4e2a\u63d2\u4ef6\u3002\n  result = {\n    code = {\n      type = \"int\"\n    }\n  }\n}\n")))}u.isMDXComponent=!0}}]);