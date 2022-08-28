"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1741],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"API Gateway Apache APISIX performance testing in Azure",authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"}],keywords:["API gateway","Azure","Microsoft","Apache APISIX","Arm"],description:"This article uses API Gateway Apache APISIX to compare the performance of Azure Ddsv5 and Azure Dpdsv5 in network IO-intensive scenarios.",tags:["Ecosystem"]},i=void 0,c={permalink:"/blog/2022/08/08/apache-apisix-performance-test-in-azure",source:"@site/blog/2022/08/08/apache-apisix-performance-test-in-azure.md",title:"API Gateway Apache APISIX performance testing in Azure",description:"This article uses API Gateway Apache APISIX to compare the performance of Azure Ddsv5 and Azure Dpdsv5 in network IO-intensive scenarios.",date:"2022-08-08T00:00:00.000Z",formattedDate:"August 8, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.165,truncated:!0,authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"Biweekly Report (Jul 16 - Jul 31)",permalink:"/blog/2022/08/09/weekly-report-0731"},nextItem:{title:"Release Apache APISIX Ingress v1.5-rc1",permalink:"/blog/2022/08/05/apisix-ingress-1.5rc1-release"}},s={authorsImageUrls:[void 0,void 0]},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article uses API Gateway Apache APISIX to compare the performance of Azure Ddsv5 and Azure Dpdsv5 in network IO-intensive scenarios.")))}u.isMDXComponent=!0}}]);