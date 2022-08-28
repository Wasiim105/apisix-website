"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[87344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2534:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Router"},o=void 0,l={unversionedId:"terminology/router",id:"terminology/router",isDocsHomePage:!1,title:"Router",description:"A distinguishing feature of Apache APISIX from other API gateways is that it allows you to choose different Routers to better match free services, giving you the best choices for performance and freedom.",source:"@site/docs/apisix/terminology/router.md",sourceDirName:"terminology",slug:"/terminology/router",permalink:"/docs/apisix/next/terminology/router",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/terminology/router.md",tags:[],version:"current",frontMatter:{title:"Router"},sidebar:"docs",previous:{title:"Route",permalink:"/docs/apisix/next/terminology/route"},next:{title:"Script",permalink:"/docs/apisix/next/terminology/script"}},p=[{value:"Description",id:"description",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A distinguishing feature of Apache APISIX from other API gateways is that it allows you to choose different Routers to better match free services, giving you the best choices for performance and freedom."),(0,i.kt)("p",null,"You can set the Router that best suits your needs in your configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"A Router can have the following configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"apisix.router.http"),": The HTTP request route. It can take the following values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri"),": (Default) Only use the ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," as the primary index. To learn more about the support for full and deep prefix matching, check ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/next/router-radixtree"},"How to use router-radixtree"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Absolute match"),": Match completely with the given ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," (",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/bar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/glo"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Prefix match"),": Match with the given prefix. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," to represent the given ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," for prefix matching. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo*")," can match with ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/b"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match priority"),": First try an absolute match, if it didn't match, try prefix matching."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Any filter attribute"),": This allows you to specify any Nginx built-in variable as a filter, such as URL request parameters, request headers, and cookies."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri_with_parameter"),": Like ",(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," but also supports parameter match."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_host_uri"),": Matches both host and URI of the request. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"host + uri")," as the primary index (based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"radixtree")," engine)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"apisix.router.ssl"),": SSL loads the matching route."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_sni"),": (Default) Use ",(0,i.kt)("inlineCode",{parentName:"li"},"SNI")," (Server Name Indication) as the primary index (based on the radixtree engine).")))))}c.isMDXComponent=!0}}]);