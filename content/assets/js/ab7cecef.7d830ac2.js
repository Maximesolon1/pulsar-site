"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[c]="string"==typeof e?e:s,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const i={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs"},l=void 0,a={unversionedId:"sql-rest-api",id:"version-2.11.x/sql-rest-api",title:"Pulsar SQL REST APIs",description:"This section lists resources that make up the Trino REST API v1.",source:"@site/versioned_docs/version-2.11.x/sql-rest-api.md",sourceDirName:".",slug:"/sql-rest-api",permalink:"/docs/2.11.x/sql-rest-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/sql-rest-api.md",tags:[],version:"2.11.x",frontMatter:{id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs"},sidebar:"docsSidebar",previous:{title:"Configuration and deployment",permalink:"/docs/2.11.x/sql-deployment-configurations"},next:{title:"Overview",permalink:"/docs/2.11.x/tiered-storage-overview"}},o={},p=[{value:"Request for Trino services",id:"request-for-trino-services",level:2},{value:"Schema",id:"schema",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section lists resources that make up the Trino REST API v1. "),(0,s.kt)("h2",{id:"request-for-trino-services"},"Request for Trino services"),(0,s.kt)("p",null,"All requests for Trino services should use Trino REST API v1 version. "),(0,s.kt)("p",null,"To request services, use the explicit URL ",(0,s.kt)("inlineCode",{parentName:"p"},"http://trino.service:8081/v1``. You need to update "),"trino.service:8081` with your real Trino address before sending requests."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"POST")," requests require the ",(0,s.kt)("inlineCode",{parentName:"p"},"X-Trino-User")," header. If you use authentication, you must use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,s.kt)("inlineCode",{parentName:"p"},"username"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},"X-Trino-User: username\n")),(0,s.kt)("p",null,"For more information about headers, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://trino.io/docs/363/develop/client-protocol.html#client-request-headers"},"client request headers"),"."),(0,s.kt)("h2",{id:"schema"},"Schema"),(0,s.kt)("p",null,"You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If the received JSON document contains a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link, the request continues with the ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link until the received data does not contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If no error is returned, the query completes successfully. If an ",(0,s.kt)("inlineCode",{parentName:"p"},"error")," field is displayed in ",(0,s.kt)("inlineCode",{parentName:"p"},"stats"),", it means the query fails."),(0,s.kt)("p",null,"The following is an example of ",(0,s.kt)("inlineCode",{parentName:"p"},"show catalogs"),". The query continues until the received JSON document does not contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link. Since no ",(0,s.kt)("inlineCode",{parentName:"p"},"error")," is displayed in ",(0,s.kt)("inlineCode",{parentName:"p"},"stats"),", it means that the query completes successfully."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl --header \"X-Trino-User: test-user\" --request POST --data 'show catalogs' http://localhost:8081/v1/statement\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes.")),(0,s.kt)("p",null,"For more information about Trino REST API, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://trino.io/docs/363/develop/client-protocol.html"},"Trino client REST API"),"."))}c.isMDXComponent=!0}}]);