"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function h(e){const{lazy:t,block:n,defaultValue:i,values:h,groupId:m,className:d}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,s.U)(),[T,C]=(0,r.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==T&&f.some((t=>t.value===e))&&C(e)}const w=e=>{const t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==T&&(N(t),C(a),null!=m&&g(m,String(a)))},P=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:P,onClick:w},i,{className:(0,l.Z)("tabs__item",p,i?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},5096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={id:"security-tls-authentication",title:"Authentication using TLS",sidebar_label:"Authentication using TLS"},s=void 0,c={unversionedId:"security-tls-authentication",id:"version-2.11.x/security-tls-authentication",title:"Authentication using TLS",description:"TLS authentication overview",source:"@site/versioned_docs/version-2.11.x/security-tls-authentication.md",sourceDirName:".",slug:"/security-tls-authentication",permalink:"/docs/2.11.x/security-tls-authentication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/security-tls-authentication.md",tags:[],version:"2.11.x",frontMatter:{id:"security-tls-authentication",title:"Authentication using TLS",sidebar_label:"Authentication using TLS"},sidebar:"docsSidebar",previous:{title:"Bouncy Castle Providers",permalink:"/docs/2.11.x/security-bouncy-castle"},next:{title:"Authentication using JWT",permalink:"/docs/2.11.x/security-jwt"}},u={},p=[{value:"TLS authentication overview",id:"tls-authentication-overview",level:2},{value:"Enable TLS authentication on brokers/proxies",id:"enable-tls-authentication-on-brokersproxies",level:2},{value:"Configure TLS authentication in Pulsar clients",id:"configure-tls-authentication-in-pulsar-clients",level:2},{value:"Configure TLS authentication in CLI tools",id:"configure-tls-authentication-in-cli-tools",level:2},{value:"Configure TLS authentication with KeyStore",id:"configure-tls-authentication-with-keystore",level:2},{value:"Configure brokers",id:"configure-brokers",level:3},{value:"Configure clients",id:"configure-clients",level:3},{value:"Enable TLS Logging",id:"enable-tls-logging",level:2}],h={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tls-authentication-overview"},"TLS authentication overview"),(0,r.kt)("p",null,"TLS authentication is an extension of ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-transport"},"TLS transport encryption"),". Not only servers have keys and certs that the client uses to verify the identity of servers, clients also have keys and certs that the server uses to verify the identity of clients. You must have TLS transport encryption configured on your cluster before you can use TLS authentication. This guide assumes you already have TLS transport encryption configured."),(0,r.kt)("h2",{id:"enable-tls-authentication-on-brokersproxies"},"Enable TLS authentication on brokers/proxies"),(0,r.kt)("p",null,"To configure brokers/proxies to authenticate clients using Mutual TLS, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/admin.cert.pem","tlsKeyFile":"/path/to/admin.key-pk8.pem"}\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\n\ntlsCertificateFilePath=/path/to/broker.cert.pem\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n\n# Tls cert refresh duration in seconds (set 0 to check on every new connection)\ntlsCertRefreshCheckDurationSec=300\n')),(0,r.kt)("h2",{id:"configure-tls-authentication-in-pulsar-clients"},"Configure TLS authentication in Pulsar clients"),(0,r.kt)("p",null,"When using TLS authentication, clients connect via TLS transport. You need to configure clients to use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"8443")," port for the web service URL, use ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar+ssl://")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"6651")," port for the broker service URL."),(0,r.kt)(l.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .authentication("org.apache.pulsar.client.impl.auth.AuthenticationTls",\n                    "tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem")\n    .build();\n'))),(0,r.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n'))),(0,r.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/ca.cert.pem");\nconfig.setTlsAllowInsecureConnection(false);\n\npulsar::AuthenticationPtr auth = pulsar::AuthTls::create("/path/to/my-role.cert.pem",\n                                                         "/path/to/my-role.key-pk8.pem")\nconfig.setAuth(auth);\n\npulsar::Client client("pulsar+ssl://broker.example.com:6651/", config);\n'))),(0,r.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  const auth = new Pulsar.AuthenticationTls({\n    certificatePath: '/path/to/my-role.cert.pem',\n    privateKeyPath: '/path/to/my-role.key-pk8.pem',\n  });\n\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    authentication: auth,\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n"))),(0,r.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(ClientOptions{\n        URL:                   "pulsar+ssl://broker.example.com:6651/",\n        TLSTrustCertsFilePath: "/path/to/ca.cert.pem",\n        Authentication:        pulsar.NewAuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem"),\n    })\n'))),(0,r.kt)(i.Z,{value:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n')))),(0,r.kt)("h2",{id:"configure-tls-authentication-in-cli-tools"},"Configure TLS authentication in CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"To use TLS authentication with the CLI tools of Pulsar, you need to add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file, alongside ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-transport#configure-tls-encryption-in-cli-tools"},"the configuration to enable TLS encryption"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nauthParams=tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem\n")),(0,r.kt)("h2",{id:"configure-tls-authentication-with-keystore"},"Configure TLS authentication with KeyStore"),(0,r.kt)("p",null,"Apache Pulsar supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-transport"},"TLS encryption")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-authentication"},"TLS authentication")," between clients and Apache Pulsar service. By default, it uses PEM format file configuration. This section tries to describe how to use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_KeyStore"},"KeyStore")," type to configure TLS."),(0,r.kt)("h3",{id:"configure-brokers"},"Configure brokers"),(0,r.kt)("p",null,"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# Enable KeyStore type\ntlsEnabledWithKeyStore=true\n\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n# internal auth config\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nbrokerClientAuthenticationParameters={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n')),(0,r.kt)("h3",{id:"configure-clients"},"Configure clients"),(0,r.kt)("p",null,"Besides configuring ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-tls-transport"},"TLS encryption"),", you need to configure the KeyStore, which contains a valid CN as client role, for clients."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-perf"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client")),", set the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file in a Pulsar installation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'webServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nauthParams={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"for Java client"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .enableTlsHostnameVerification(false)\n    .authentication(\n            "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n            "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n    .build();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"for Java admin client"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n        .useKeyStoreTls(true)\n        .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n        .tlsTrustStorePassword("clientpw")\n        .allowTlsInsecureConnection(false)\n        .enableTlsHostnameVerification(false)\n        .authentication(\n               "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n               "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n        .build();\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"tlsTrustStorePath")," when you set ",(0,r.kt)("inlineCode",{parentName:"p"},"useKeyStoreTls")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("h2",{id:"enable-tls-logging"},"Enable TLS Logging"),(0,r.kt)("p",null,"You can enable TLS debug logging at the JVM level by starting the brokers and/or clients with ",(0,r.kt)("inlineCode",{parentName:"p"},"javax.net.debug")," system property. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-Djavax.net.debug=all\n")),(0,r.kt)("p",null,"You can find more details on this in ",(0,r.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html"},"Oracle documentation")," on ",(0,r.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html"},"debugging SSL/TLS connections"),"."))}m.isMDXComponent=!0}}]);