"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[375],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,b=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",slug:"2021/06/17/apache-apisix-dashboard-access-control-bypass-vulnerability-announcement",author:"\u741a\u81f4\u8fdc",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["APISIX","Apache APISIX","Ingress Controller"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff0c\u8bf7\u5c3d\u5feb\u5347\u7ea7\u7248\u672c\u4fee\u590d\u8be5\u6f0f\u6d1e\u3002",tags:["Security"],image:"https://static.apiseven.com/2022/blog/0818/cve/CVE-2021-33190.png"},c=void 0,i={permalink:"/zh/blog/2021/06/17/apache-apisix-dashboard-access-control-bypass-vulnerability-announcement",source:"@site/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement.md",title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff0c\u8bf7\u5c3d\u5feb\u5347\u7ea7\u7248\u672c\u4fee\u590d\u8be5\u6f0f\u6d1e\u3002",date:"2021-06-17T00:00:00.000Z",formattedDate:"2021\u5e746\u670817\u65e5",tags:[{label:"Security",permalink:"/zh/blog/tags/security"}],readingTime:1.86,truncated:!0,authors:[{name:"\u741a\u81f4\u8fdc",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",permalink:"/zh/blog/2021/06/18/first-ga-version-v1.0-of-apache-apisix-ingress-controller-released"},nextItem:{title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",permalink:"/zh/blog/2021/06/16/chaos-mesh-helps-apache-apisix-improve-stability"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u7a0b\u5e8f\u901a\u8fc7\u83b7\u53d6\u8bf7\u6c42\u5934 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," \u7684\u503c\u6765\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236\u5224\u65ad\uff0c\u5bfc\u81f4\u653b\u51fb\u8005\u5728\u8c03\u7528 API \u8bf7\u6c42\u65f6\uff0c\u53ea\u9700\u7be1\u6539\u8be5\u8bf7\u6c42\u5934\u5373\u53ef\u5b9e\u73b0\u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u653b\u51fb\u3002")))}u.isMDXComponent=!0}}]);