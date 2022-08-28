"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38457:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"Global Rule"},i=void 0,a={unversionedId:"terminology/global-rule",id:"terminology/global-rule",isDocsHomePage:!1,title:"Global Rule",description:"A Plugin configuration can be bound directly to a Route, a Service or a Consumer. But what if we want a Plugin to work on all requests? This is where we register a global Plugin with Global Rule.",source:"@site/docs/apisix/terminology/global-rule.md",sourceDirName:"terminology",slug:"/terminology/global-rule",permalink:"/docs/apisix/next/terminology/global-rule",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/terminology/global-rule.md",tags:[],version:"current",frontMatter:{title:"Global Rule"},sidebar:"docs",previous:{title:"Consumer",permalink:"/docs/apisix/next/terminology/consumer"},next:{title:"Plugin",permalink:"/docs/apisix/next/terminology/plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/plugin"},"Plugin")," configuration can be bound directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/route"},"Route"),", a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/service"},"Service")," or a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/consumer"},"Consumer"),". But what if we want a Plugin to work on all requests? This is where we register a global Plugin with Global Rule."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The example below shows how you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-count")," Plugin on all requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,o.kt)("p",null,"You can also list all the Global rules by making this request with the Admin API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules\n")))}u.isMDXComponent=!0}}]);