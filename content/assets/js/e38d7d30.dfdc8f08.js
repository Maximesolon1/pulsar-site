"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26119],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(g,s(s({ref:n},u),{},{components:t})):a.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[p]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const o={id:"functions-debug-cli",title:"Debug with Functions CLI",sidebar_label:"Debug with Functions CLI"},s=void 0,r={unversionedId:"functions-debug-cli",id:"version-2.11.x/functions-debug-cli",title:"Debug with Functions CLI",description:"With Pulsar Functions CLI, you can debug Pulsar Functions with the following subcommands:",source:"@site/versioned_docs/version-2.11.x/functions-debug-cli.md",sourceDirName:".",slug:"/functions-debug-cli",permalink:"/docs/2.11.x/functions-debug-cli",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-debug-cli.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-debug-cli",title:"Debug with Functions CLI",sidebar_label:"Debug with Functions CLI"},sidebar:"docsSidebar",previous:{title:"Debug with log topic",permalink:"/docs/2.11.x/functions-debug-log-topic"},next:{title:"How to package",permalink:"/docs/2.11.x/functions-package"}},l={},c=[{value:"<code>get</code>",id:"get",level:2},{value:"<code>list</code>",id:"list",level:2},{value:"<code>status</code>",id:"status",level:2},{value:"<code>stats</code>",id:"stats",level:2},{value:"<code>trigger</code>",id:"trigger",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar Functions CLI"),", you can debug Pulsar Functions with the following subcommands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trigger"))),(0,i.kt)("h2",{id:"get"},(0,i.kt)("inlineCode",{parentName:"h2"},"get")),(0,i.kt)("p",null,"To get information about a function, you can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--fqfn")," as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions get public/default/ExclamationFunctio6\n")),(0,i.kt)("p",null,"Alternatively, you can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--tenant")," as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n")),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," command shows input, output, runtime, and other information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"_ExclamationFunctio6_")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "ExclamationFunctio6",\n  "className": "org.example.test.ExclamationFunction",\n  "inputSpecs": {\n    "persistent://public/default/my-topic-1": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "persistent://public/default/test-1",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1\n}\n')),(0,i.kt)("h2",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h2"},"list")),(0,i.kt)("p",null,"To list all Pulsar Functions running under a specific tenant and namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n")),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," command returns three functions running under the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," tenant and the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ExclamationFunctio1\nExclamationFunctio2\nExclamationFunctio3\n")),(0,i.kt)("h2",{id:"status"},(0,i.kt)("inlineCode",{parentName:"h2"},"status")),(0,i.kt)("p",null,"To check the current status of a function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n")),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," command shows the number of instances, running instances, the instance running under the ",(0,i.kt)("inlineCode",{parentName:"p"},"_ExclamationFunctio6_")," function, received messages, successfully processed messages, system exceptions, the average latency and so on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 1,\n      "numSuccessfullyProcessed" : 1,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.8385,\n      "lastInvocationTime" : 1557734137987,\n      "workerId" : "c-standalone-fw-23ccc88ef29b-8080"\n    }\n  } ]\n}\n')),(0,i.kt)("h2",{id:"stats"},(0,i.kt)("inlineCode",{parentName:"h2"},"stats")),(0,i.kt)("p",null,"To get the current stats of a function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n")),(0,i.kt)("p",null,"The output is shown as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "receivedTotal" : 1,\n  "processedSuccessfullyTotal" : 1,\n  "systemExceptionsTotal" : 0,\n  "userExceptionsTotal" : 0,\n  "avgProcessLatency" : 0.8385,\n  "1min" : {\n    "receivedTotal" : 0,\n    "processedSuccessfullyTotal" : 0,\n    "systemExceptionsTotal" : 0,\n    "userExceptionsTotal" : 0,\n    "avgProcessLatency" : null\n  },\n  "lastInvocation" : 1557734137987,\n  "instances" : [ {\n    "instanceId" : 0,\n    "metrics" : {\n      "receivedTotal" : 1,\n      "processedSuccessfullyTotal" : 1,\n      "systemExceptionsTotal" : 0,\n      "userExceptionsTotal" : 0,\n      "avgProcessLatency" : 0.8385,\n      "1min" : {\n        "receivedTotal" : 0,\n        "processedSuccessfullyTotal" : 0,\n        "systemExceptionsTotal" : 0,\n        "userExceptionsTotal" : 0,\n        "avgProcessLatency" : null\n      },\n      "lastInvocation" : 1557734137987,\n      "userMetrics" : { }\n    }\n  } ]\n}\n')),(0,i.kt)("h2",{id:"trigger"},(0,i.kt)("inlineCode",{parentName:"h2"},"trigger")),(0,i.kt)("p",null,"To trigger a specified function with a supplied value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' ./bin/pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n    --topic persistent://public/default/my-topic-1 \\\n    --trigger-value "hello pulsar functions"\n')),(0,i.kt)("p",null,"This command simulates the execution process of a function and verifies it. As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"trigger")," command returns the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"This is my function!\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--topic")," option, you must specify the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.11.x/pulsar-2.0#topic-names"},"entire topic name"),". Otherwise, the following error occurs."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Function in trigger function has unidentified topic\nReason: Function in trigger function has unidentified topic\n"))))}p.isMDXComponent=!0}}]);