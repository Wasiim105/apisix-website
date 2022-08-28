"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,p(p({ref:t},d),{},{components:a})):n.createElement(h,p({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var o=2;o<i;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66754:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"prometheus",keywords:["APISIX","API Gateway","Plugin","Prometheus"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 prometheus \u63d2\u4ef6\u5c06 metrics \u4e0a\u62a5\u5230\u5f00\u6e90\u7684\u76d1\u63a7\u8f6f\u4ef6 Prometheus\u3002"},p=void 0,s={unversionedId:"plugins/prometheus",id:"plugins/prometheus",isDocsHomePage:!1,title:"prometheus",description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 prometheus \u63d2\u4ef6\u5c06 metrics \u4e0a\u62a5\u5230\u5f00\u6e90\u7684\u76d1\u63a7\u8f6f\u4ef6 Prometheus\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/prometheus.md",sourceDirName:"plugins",slug:"/plugins/prometheus",permalink:"/zh/docs/apisix/next/plugins/prometheus",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/prometheus.md",tags:[],version:"current",frontMatter:{title:"prometheus",keywords:["APISIX","API Gateway","Plugin","Prometheus"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 prometheus \u63d2\u4ef6\u5c06 metrics \u4e0a\u62a5\u5230\u5f00\u6e90\u7684\u76d1\u63a7\u8f6f\u4ef6 Prometheus\u3002"},sidebar:"docs",previous:{title:"opentelemetry",permalink:"/zh/docs/apisix/next/plugins/opentelemetry"},next:{title:"node-status",permalink:"/zh/docs/apisix/next/plugins/node-status"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684 uri",id:"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684-uri",children:[]},{value:"API",id:"api",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u63d0\u53d6\u6307\u6807",id:"\u63d0\u53d6\u6307\u6807",children:[]},{value:"\u4f7f\u7528 Grafana \u7ed8\u5236\u6307\u6807",id:"\u4f7f\u7528-grafana-\u7ed8\u5236\u6307\u6807",children:[]},{value:"\u53ef\u7528\u7684 HTTP \u6307\u6807",id:"\u53ef\u7528\u7684-http-\u6307\u6807",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u5982\u4f55\u542f\u7528 TCP/UDP \u6307\u6807",id:"\u5982\u4f55\u542f\u7528-tcpudp-\u6307\u6807",children:[]},{value:"\u53ef\u7528\u7684 TCP/UDP \u6307\u6807",id:"\u53ef\u7528\u7684-tcpudp-\u6307\u6807",children:[]}],o={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/exposition_formats/#exposition-formats"},"Prometheus \u6587\u6863"),"\u89c4\u5b9a\u7684\u683c\u5f0f\u4e0a\u62a5\u6307\u6807\u5230 Prometheus \u4e2d\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u4f7f\u7528\u8def\u7531\u6216\u670d\u52a1\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," \u6807\u8bc6\u8bf7\u6c42\u6240\u547d\u4e2d\u7684\u8def\u7531\u6216\u670d\u52a1\uff0c\u5426\u5219\u4f7f\u7528\u5176 ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),"\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u591a\u4e2a\u8def\u7531\u6216\u670d\u52a1\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u76f8\u540c\u7684\u540d\u79f0\uff0c\u6240\u4ee5\u5f53\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"prefer_name")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u8bf7\u89c4\u8303\u8def\u7531\u548c\u670d\u52a1\u7684\u547d\u540d\uff0c\u5426\u5219\u5bb9\u6613\u5f15\u8d77\u8bef\u89e3\u3002"))),(0,r.kt)("h2",{id:"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684-uri"},"\u5982\u4f55\u4fee\u6539\u66b4\u9732\u6307\u6807\u7684 uri"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin_attr")," \u5217\u8868\u4e0b\u4fee\u6539\u9ed8\u8ba4\u7684 URI\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/apisix/prometheus/metrics"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u66b4\u9732 Prometheus \u6307\u6807\u7684 URI\u3002")))),(0,r.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"plugin_attr:\n  prometheus:\n    export_uri: /apisix/metrics\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u4f1a\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," \u63a5\u53e3\u6216\u8005\u4f60\u81ea\u5b9a\u4e49\u7684 URI \u6765\u66b4\u9732\u5176\u6307\u6807\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6307\u6807\u7531\u72ec\u7acb\u7684 Prometheus \u670d\u52a1\u5668\u5730\u5740\u516c\u5f00\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5730\u5740\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9091"),"\u3002\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u4fee\u6539\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"plugin_attr:\n  prometheus:\n    export_addr:\n      ip: ${{INTRANET_IP}}\n      port: 9092\n")),(0,r.kt)("p",null,"\u5047\u8bbe\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"INTRANET_IP")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"172.1.1.1"),"\uff0c\u90a3\u4e48 APISIX \u5c06\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"172.1.1.1:9092")," \u4e0a\u66b4\u9732\u6307\u6807\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4ecd\u7136\u60f3\u8981\u8ba9\u6307\u6807\u66b4\u9732\u5728\u6570\u636e\u9762\u7684\u7aef\u53e3\uff08\u9ed8\u8ba4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"9080"),"\uff09\u4e0a\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"plugin_attr:\n  prometheus:\n    enable_export_server: false\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," \u63d2\u4ef6\u6765\u66b4\u9732\u8be5 URI\u3002"),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528\u7a7a\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," \u5f00\u542f\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u63d0\u53d6\u6307\u6807"},"\u63d0\u53d6\u6307\u6807"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u6307\u5b9a\u7684 URL\uff08\u9ed8\u8ba4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"\uff09\u4e2d\u63d0\u53d6\u6307\u6807\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u8be5 URI \u5730\u5740\u6dfb\u52a0\u5230 Prometheus \u4e2d\u6765\u63d0\u53d6\u6307\u6807\u6570\u636e\uff0c\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./prometheus.yml"',title:'"./prometheus.yml"'},'scrape_configs:\n  - job_name: "apisix"\n    scrape_interval: 15s # \u8be5\u503c\u4f1a\u8ddf Prometheus QL \u4e2d rate \u51fd\u6570\u7684\u65f6\u95f4\u8303\u56f4\u6709\u5173\u7cfb\uff0crate \u51fd\u6570\u4e2d\u7684\u65f6\u95f4\u8303\u56f4\u5e94\u8be5\u81f3\u5c11\u4e24\u500d\u4e8e\u8be5\u503c\u3002\n    metrics_path: "/apisix/prometheus/metrics"\n    static_configs:\n      - targets: ["127.0.0.1:9091"]\n')),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5728 Prometheus \u63a7\u5236\u53f0\u4e2d\u68c0\u67e5\u72b6\u6001\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus01.png",alt:"checking status on prometheus dashboard"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus02.png",alt:"prometheus apisix in-depth metric view"})),(0,r.kt)("h2",{id:"\u4f7f\u7528-grafana-\u7ed8\u5236\u6307\u6807"},"\u4f7f\u7528 Grafana \u7ed8\u5236\u6307\u6807"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u5bfc\u51fa\u7684\u6307\u6807\u53ef\u4ee5\u5728 Grafana \u8fdb\u884c\u56fe\u5f62\u5316\u7ed8\u5236\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u8fdb\u884c\u8bbe\u7f6e\uff0c\u8bf7\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/assets/other/json/apisix-grafana-dashboard.json"},"APISIX's Grafana dashboard \u5143\u6570\u636e")," \u5e76\u5bfc\u5165\u5230 Grafana \u4e2d\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11719"},"Grafana \u5b98\u65b9")," \u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"Grafana")," \u5143\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-1.png",alt:"Grafana chart-1"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-2.png",alt:"Grafana chart-2"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-3.png",alt:"Grafana chart-3"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-4.png",alt:"Grafana chart-4"})),(0,r.kt)("h2",{id:"\u53ef\u7528\u7684-http-\u6307\u6807"},"\u53ef\u7528\u7684 HTTP \u6307\u6807"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u53ef\u4ee5\u5bfc\u51fa\u4ee5\u4e0b\u6307\u6807\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Status codes: \u4e0a\u6e38\u670d\u52a1\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\uff0c\u53ef\u4ee5\u7edf\u8ba1\u5230\u6bcf\u4e2a\u670d\u52a1\u6216\u6240\u6709\u670d\u52a1\u7684\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6b21\u6570\u603b\u548c\u3002\u5c5e\u6027\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u670d\u52a1\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"route_id"),"\uff0c\u5982\u679c\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matched_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"uri"),"\uff0c\u5982\u679c\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matched_host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"host"),"\uff0c\u5982\u679c\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"service_id"),"\u3002\u5f53\u8def\u7531\u7f3a\u5c11 ",(0,r.kt)("inlineCode",{parentName:"td"},"service_id")," \u65f6\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"$host"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u6d88\u8d39\u8005\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),"\u3002\u5982\u679c\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u8282\u70b9 IP \u5730\u5740\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bandwidth: \u7ecf\u8fc7 APISIX \u7684\u603b\u5e26\u5bbd\uff08\u51fa\u53e3\u5e26\u5bbd\u548c\u5165\u53e3\u5e26\u5bbd\uff09\uff0c\u53ef\u4ee5\u7edf\u8ba1\u5230\u6bcf\u4e2a\u670d\u52a1\u7684\u5e26\u5bbd\u603b\u548c\u3002\u5c5e\u6027\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u5bbd\u7684\u7c7b\u578b (",(0,r.kt)("inlineCode",{parentName:"td"},"ingress")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"egress"),")\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"route_id"),"\uff0c\u5982\u679c\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"service_id"),"\u3002\u5f53\u8def\u7531\u7f3a\u5c11 ",(0,r.kt)("inlineCode",{parentName:"td"},"service_id")," \u65f6\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"$host"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u6d88\u8d39\u8005\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),"\u3002\u5982\u679c\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u8282\u70b9 IP \u5730\u5740\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"etcd reachability: APISIX \u8fde\u63a5 etcd \u7684\u53ef\u7528\u6027\uff0c\u7528 0 \u548c 1 \u6765\u8868\u793a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u8868\u793a\u53ef\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u8868\u793a\u4e0d\u53ef\u7528\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connections: \u5404\u79cd\u7684 NGINX \u8fde\u63a5\u6307\u6807\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),"\uff08\u6b63\u5904\u7406\u7684\u6d3b\u52a8\u8fde\u63a5\u6570\uff09\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"reading"),"\uff08NGINX \u8bfb\u53d6\u5230\u5ba2\u6237\u7aef\u7684 Header \u4fe1\u606f\u6570\uff09\uff0cwriting\uff08NGINX \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 Header \u4fe1\u606f\u6570\uff09\uff0c\u5df2\u5efa\u7acb\u7684\u8fde\u63a5\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Batch process entries: \u6279\u5904\u7406\u672a\u53d1\u9001\u6570\u636e\u8ba1\u6570\u5668\uff0c\u5f53\u4f60\u4f7f\u7528\u4e86\u6279\u5904\u7406\u53d1\u9001\u63d2\u4ef6\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/syslog"},"syslog"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/http-logger"},"http-logger"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/tcp-logger"},"tcp-logger"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/udp-logger"},"udp-logger"),", and ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/zipkin"},"zipkin"),"\uff0c\u90a3\u4e48\u4f60\u5c06\u4f1a\u5728\u6b64\u6307\u6807\u4e2d\u770b\u5230\u6279\u5904\u7406\u5f53\u524d\u5c1a\u672a\u53d1\u9001\u7684\u6570\u636e\u7684\u6570\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Latency: \u6bcf\u4e2a\u670d\u52a1\u7684\u8bf7\u6c42\u7528\u65f6\u548c APISIX \u5904\u7406\u8017\u65f6\u7684\u76f4\u65b9\u56fe\u3002\u5c5e\u6027\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u503c\u53ef\u4ee5\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"apisix"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"upstream")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"request"),"\uff0c\u5206\u522b\u8868\u793a\u8017\u65f6\u7684\u6765\u6e90\u662f APISIX\u3001\u4e0a\u6e38\u4ee5\u53ca\u4e24\u8005\u603b\u548c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u8def\u7531 \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"service_id"),"\u3002\u5f53\u8def\u7531\u7f3a\u5c11 ",(0,r.kt)("inlineCode",{parentName:"td"},"service_id")," \u65f6\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"$host"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8bf7\u6c42\u5339\u914d\u7684\u6d88\u8d39\u8005\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),"\u3002\u672a\u5339\u914d\uff0c\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u8282\u70b9\u7684 IP \u5730\u5740\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Info: \u5f53\u524d APISIX \u8282\u70b9\u4fe1\u606f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shared dict: APISIX \u4e2d\u6240\u6709\u5171\u4eab\u5185\u5b58\u7684\u5bb9\u91cf\u4ee5\u53ca\u5269\u4f59\u53ef\u7528\u7a7a\u95f4\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f APISIX \u7684\u539f\u59cb\u7684\u6307\u6807\u6570\u636e\u96c6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 8417\napisix_bandwidth{type="egress",route="1",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="egress",route="2",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 189\napisix_bandwidth{type="ingress",route="1",service="",consumer="",node="127.0.0.1"} 332\napisix_bandwidth{type="ingress",route="2",service="",consumer="",node="127.0.0.1"} 332\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 0\napisix_etcd_modify_indexes{key="max_modify_index"} 222\napisix_etcd_modify_indexes{key="prev_index"} 35\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 222\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 223\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sls-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="tcp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="udp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sys-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="zipkin_report",route_id="9",server_addr="127.0.0.1"} 1\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",route="1",matched_uri="/hello",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="200",route="2",matched_uri="/world",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 1\n# HELP apisix_http_requests_total The total number of client requests\n# TYPE apisix_http_requests_total gauge\napisix_http_requests_total 1191780\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\n...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="APISIX"} 1\n# HELP apisix_shared_dict_capacity_bytes The capacity of each nginx shared DICT since APISIX start\n# TYPE apisix_shared_dict_capacity_bytes gauge\napisix_shared_dict_capacity_bytes{name="access-tokens"} 1048576\napisix_shared_dict_capacity_bytes{name="balancer-ewma"} 10485760\napisix_shared_dict_capacity_bytes{name="balancer-ewma-last-touched-at"} 10485760\napisix_shared_dict_capacity_bytes{name="balancer-ewma-locks"} 10485760\napisix_shared_dict_capacity_bytes{name="discovery"} 1048576\napisix_shared_dict_capacity_bytes{name="etcd-cluster-health-check"} 10485760\n...\n# HELP apisix_shared_dict_free_space_bytes The free space of each nginx shared DICT since APISIX start\n# TYPE apisix_shared_dict_free_space_bytes gauge\napisix_shared_dict_free_space_bytes{name="access-tokens"} 1032192\napisix_shared_dict_free_space_bytes{name="balancer-ewma"} 10412032\napisix_shared_dict_free_space_bytes{name="balancer-ewma-last-touched-at"} 10412032\napisix_shared_dict_free_space_bytes{name="balancer-ewma-locks"} 10412032\napisix_shared_dict_free_space_bytes{name="discovery"} 1032192\napisix_shared_dict_free_space_bytes{name="etcd-cluster-health-check"} 10412032\n...\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u542f\u7528-tcpudp-\u6307\u6807"},"\u5982\u4f55\u542f\u7528 TCP/UDP \u6307\u6807"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be5\u529f\u80fd\u8981\u6c42 APISIX \u8fd0\u884c\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/FAQ#%E5%A6%82%E4%BD%95%E6%9E%84%E5%BB%BA-APISIX-Base-%E7%8E%AF%E5%A2%83%EF%BC%9F"},"APISIX-Base")," \u4e0a\u3002"))),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u91c7\u96c6 TCP/UDP \u6307\u6807\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," \u63d2\u4ef6\u5df2\u7ecf\u5728\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u542f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"stream_plugins:\n  - ...\n  - prometheus\n")),(0,r.kt)("p",null,"\u63a5\u7740\u4f60\u9700\u8981\u5728 stream \u8def\u7531\u4e2d\u914d\u7f6e\u8be5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u53ef\u7528\u7684-tcpudp-\u6307\u6807"},"\u53ef\u7528\u7684 TCP/UDP \u6307\u6807"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5c06 APISIX \u4f5c\u4e3a L4 \u4ee3\u7406\u65f6\u53ef\u7528\u7684\u6307\u6807\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stream Connections: \u8def\u7531\u7ea7\u522b\u7684\u5df2\u5904\u7406\u8fde\u63a5\u6570\u3002\u5177\u6709\u7684\u7ef4\u5ea6\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u7684 stream \u8def\u7531 ID\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connections: \u5404\u79cd\u7684 NGINX \u8fde\u63a5\u6307\u6807\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"reading"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"writing")," \u7b49\u5df2\u5efa\u7acb\u7684\u8fde\u63a5\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Info: \u5f53\u524d APISIX \u8282\u70b9\u4fe1\u606f\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f APISIX \u6307\u6807\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n# HELP apisix_stream_connection_total Total number of connections handled per stream route in APISIX\n# TYPE apisix_stream_connection_total counter\napisix_stream_connection_total{route="1"} 1\n')))}d.isMDXComponent=!0}}]);