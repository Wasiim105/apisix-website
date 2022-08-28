"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7363],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),g=n,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(25773),n=(r(27378),r(35318));const a={title:"How is Google Cloud Tau T2A performing? ",authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"}],keywords:["APISIX","API Gateway","Google Cloud","Google Cloud T2A","ARM64"],description:"This article mainly uses the cloud native API gateway Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D.",tags:["Ecosystem"]},l=void 0,i={permalink:"/blog/2022/07/22/how-is-google-cloud-tau-t2a-performing",source:"@site/blog/2022/07/22/how-is-google-cloud-tau-t2a-performing.md",title:"How is Google Cloud Tau T2A performing? ",description:"This article mainly uses the cloud native API gateway Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D.",date:"2022-07-22T00:00:00.000Z",formattedDate:"July 22, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.2,truncated:!0,authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"}],prevItem:{title:"Release Apache APISIX 2.15",permalink:"/blog/2022/07/29/release-apache-apisix-2.15"},nextItem:{title:"Biweekly Report (Jul 1 - Jul 15)",permalink:"/blog/2022/07/21/weekly-report-0715"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article mainly uses Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D.")))}s.isMDXComponent=!0}}]);