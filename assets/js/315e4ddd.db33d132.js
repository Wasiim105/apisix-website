"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[70287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54620:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Batch Processor"},i=void 0,l={unversionedId:"batch-processor",id:"version-2.12/batch-processor",isDocsHomePage:!1,title:"Batch Processor",description:"The batch processor can be used to aggregate entries(logs/any data) and process them in a batch.\nWhen the batch_max_size is set to zero the processor will execute each entry immediately. Setting the batch max size more\nthan 1 will start aggregating the entries until it reaches the max size or the timeout expires.",source:"@site/docs-apisix_versioned_docs/version-2.12/batch-processor.md",sourceDirName:".",slug:"/batch-processor",permalink:"/docs/apisix/2.12/batch-processor",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"Batch Processor"},sidebar:"version-2.12/docs",previous:{title:"Certificate",permalink:"/docs/apisix/2.12/certificate"},next:{title:"Benchmark",permalink:"/docs/apisix/2.12/benchmark"}},c=[{value:"Configurations",id:"configurations",children:[]}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The batch processor can be used to aggregate entries(logs/any data) and process them in a batch.\nWhen the batch_max_size is set to zero the processor will execute each entry immediately. Setting the batch max size more\nthan 1 will start aggregating the entries until it reaches the max size or the timeout expires."),(0,a.kt)("h2",{id:"configurations"},"Configurations"),(0,a.kt)("p",null,"The only mandatory parameter to create a batch processor is a function. The function will be executed when the batch reaches the max size\nor when the buffer duration exceeds."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"A unique identifier to identity the batch processor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"Max size of each batch, default is 1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"maximum age in seconds when the buffer will be flushed if inactive, default is 5s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum age in seconds of the oldest entry in a batch before the batch must be processed, default is 5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of retries before removing from the processing pipe line; default is zero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of seconds the process execution should be delayed if the execution fails; default is 1")))),(0,a.kt)("p",null,"The following code shows an example of how to use batch processor in your plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local bp_manager_mod = require("apisix.utils.batch-processor-manager")\n...\n\nlocal plugin_name = "xxx-logger"\nlocal batch_processor_manager = bp_manager_mod.new(plugin_name)\nlocal schema = {...}\nlocal _M = {\n    ...\n    name = plugin_name,\n    schema = batch_processor_manager:wrap_schema(schema),\n}\n\n...\n\n\nfunction _M.log(conf, ctx)\n    local entry = {...} -- data to log\n\n    if batch_processor_manager:add_entry(conf, entry) then\n        return\n    end\n    -- create a new processor if not found\n\n    -- entries is an array table of entry, which can be processed in batch\n    local func = function(entries)\n        -- serialize to json array core.json.encode(entries)\n        -- process/send data\n        return true\n        -- return false, err_msg if failed\n    end\n    batch_processor_manager:add_entry_to_new_processor(conf, entry, ctx, func)\nend\n')),(0,a.kt)("p",null,"The batch processor's configuration will be set inside the plugin's configuration.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "http-logger": {\n                "uri": "http://mockbin.org/bin/:ID",\n                "batch_max_size": 10,\n                "max_retry_count": 1\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"If your plugin only uses one global batch processor,\nyou can also use the processor directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local entry = {...} -- data to log\nif log_buffer then\n    log_buffer:push(entry)\n    return\nend\n\nlocal config_bat = {\n    name = config.name,\n    retry_delay = config.retry_delay,\n    ...\n}\n\nlocal err\n-- entries is an array table of entry, which can be processed in batch\nlocal func = function(entries)\n    ...\n    return true\n    -- return false, err_msg if failed\nend\nlog_buffer, err = batch_processor:new(func, config_bat)\n\nif not log_buffer then\n    core.log.warn("error when creating the batch processor: ", err)\n    return\nend\n\nlog_buffer:push(entry)\n')),(0,a.kt)("p",null,"Note: Please make sure the batch max size (entry count) is within the limits of the function execution.\nThe timer to flush the batch runs based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," configuration. Thus, for optimal usage,\nkeep the ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," smaller than the ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer_duration"),"."))}u.isMDXComponent=!0}}]);