"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2117],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(r),b=a,m=h["".concat(s,".").concat(b)]||h[b]||p[b]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},26895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX Dashboard Unauthorized Access Vulnerability Announcement (CVE-2021-45232)",author:"Yucheng Zhu",authorURL:"https://github.com/f11t3rStAr",authorImageURL:"https://avatars.githubusercontent.com/u/71011664?v=4",keywords:["Apache APISIX","API Gateway","APISIX Dashboard","APISIX Route","Unauthorized Access","CVE"],description:"There is a security vulnerability of unauthorized access in Apache APISIX Dashboard 2.7-2.10, and the processing information will be announced.",tags:["Security"],image:"https://static.apiseven.com/2022/blog/0818/cve/CVE-2021-45232.png"},i=void 0,c={permalink:"/blog/2021/12/28/dashboard-cve-2021-45232",source:"@site/blog/2021/12/28/dashboard-cve-2021-45232.md",title:"Apache APISIX Dashboard Unauthorized Access Vulnerability Announcement (CVE-2021-45232)",description:"There is a security vulnerability of unauthorized access in Apache APISIX Dashboard 2.7-2.10, and the processing information will be announced.",date:"2021-12-28T00:00:00.000Z",formattedDate:"December 28, 2021",tags:[{label:"Security",permalink:"/blog/tags/security"}],readingTime:.845,truncated:!0,authors:[{name:"Yucheng Zhu",url:"https://github.com/f11t3rStAr",imageURL:"https://avatars.githubusercontent.com/u/71011664?v=4"}],prevItem:{title:"Use API gateway to proxy gRPC service",permalink:"/blog/2021/12/30/apisix-proxy-grpc-service"},nextItem:{title:"Coming soon! Apache APISIX Integrate with Apache OpenWhisk",permalink:"/blog/2021/12/24/apisix-integrate-openwhisk-plugin"}},s={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There is a security vulnerability of unauthorized access in Apache APISIX Dashboard 2.7-2.10, and the processing information will be announced.")))}p.isMDXComponent=!0}}]);