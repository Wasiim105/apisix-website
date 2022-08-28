"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[26091],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(r),s=a,g=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return r?n.createElement(g,i(i({ref:e},m),{},{components:r})):n.createElement(g,i({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},35103:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"APISIX variable"},i=void 0,o={unversionedId:"apisix-variable",id:"version-2.13/apisix-variable",isDocsHomePage:!1,title:"APISIX variable",description:"Besides Nginx variable, APISIX also provides\nadditional variables.",source:"@site/docs-apisix_versioned_docs/version-2.13/apisix-variable.md",sourceDirName:".",slug:"/apisix-variable",permalink:"/docs/apisix/2.13/apisix-variable",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"APISIX variable"},sidebar:"version-2.13/docs",previous:{title:"Plugin Develop",permalink:"/docs/apisix/2.13/plugin-develop"},next:{title:"External Plugin",permalink:"/docs/apisix/2.13/external-plugin"}},p=[],d={toc:p};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Besides ",(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variable"),", APISIX also provides\nadditional variables."),(0,a.kt)("p",null,"List in alphabetical order:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Origin"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"balancer_ip"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"the IP of picked upstream server"),(0,a.kt)("td",{parentName:"tr",align:null},"1.1.1.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"balancer_port"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"the port of picked upstream server"),(0,a.kt)("td",{parentName:"tr",align:null},"80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumer_name"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"username of ",(0,a.kt)("inlineCode",{parentName:"td"},"consumer")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"graphql_name"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"the ",(0,a.kt)("a",{parentName:"td",href:"https://graphql.org/learn/queries/#operation-name"},"operation name")," of GraphQL"),(0,a.kt)("td",{parentName:"tr",align:null},"HeroComparison")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"graphql_operation"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"the operation type of GraphQL"),(0,a.kt)("td",{parentName:"tr",align:null},"mutation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"graphql_root_fields"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"the top level fields of GraphQL"),(0,a.kt)("td",{parentName:"tr",align:null},'["hero"]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mqtt_client_id"),(0,a.kt)("td",{parentName:"tr",align:null},"mqtt-proxy"),(0,a.kt)("td",{parentName:"tr",align:null},"the client id in MQTT protocol"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"route_id"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"id of ",(0,a.kt)("inlineCode",{parentName:"td"},"route")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"route_name"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"name of ",(0,a.kt)("inlineCode",{parentName:"td"},"route")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service_id"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"id of ",(0,a.kt)("inlineCode",{parentName:"td"},"service")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service_name"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"name of ",(0,a.kt)("inlineCode",{parentName:"td"},"service")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"You can also ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugin-develop#register-custom-variable"},"register your own variable"),"."))}m.isMDXComponent=!0}}]);