"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(a),m=r,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),s=a(67392),u=a(7094),o=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:m,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,u.U)(),[N,P]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==N&&(w(t),P(n),null!=m&&y(m,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:C},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},53443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const s={id:"admin-api-get-started",title:"Get started",sidebar_label:"Get started"},u=void 0,o={unversionedId:"admin-api-get-started",id:"version-2.11.x/admin-api-get-started",title:"Get started",description:"Admin setup",source:"@site/versioned_docs/version-2.11.x/admin-get-started.md",sourceDirName:".",slug:"/admin-api-get-started",permalink:"/docs/2.11.x/admin-api-get-started",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/admin-get-started.md",tags:[],version:"2.11.x",frontMatter:{id:"admin-api-get-started",title:"Get started",sidebar_label:"Get started"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/2.11.x/admin-api-overview"},next:{title:"Clusters",permalink:"/docs/2.11.x/admin-api-clusters"}},p={},c=[{value:"Admin setup",id:"admin-setup",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admin-setup"},"Admin setup"),(0,r.kt)("p",null,"Each of the three admin interfaces (the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, and the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x"},"Java admin API"),") requires some special setup if you have enabled authentication in your Pulsar instance."),(0,r.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"If you have enabled authentication, you need to provide an auth configuration to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool. By default, the configuration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is in the ",(0,r.kt)("a",{parentName:"p",href:"reference-configuration.md#client"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. The following are the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authPlugin"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authParams"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useTls"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,"You can find details for the REST API exposed by Pulsar brokers in this ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"document"),".")),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"To use the Java admin API, instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, and specify a URL for a Pulsar broker and a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder"},"PulsarAdminBuilder"),". The following is a minimal example using ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n    .authentication(authPluginClassName,authParams)\n    .serviceHttpUrl(url)\n    .tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n    .allowTlsInsecureConnection(tlsAllowInsecureConnection)\n    .build();\n')),(0,r.kt)("p",null,"If you use multiple brokers, you can use multi-host like Pulsar service. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Below are the same to the line 2 - line 13 in the code snippet above\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n    .authentication(authPluginClassName,authParams)\n    .serviceHttpUrl(url)\n    .tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n    .allowTlsInsecureConnection(tlsAllowInsecureConnection)\n    .build();\n')))))}m.isMDXComponent=!0}}]);