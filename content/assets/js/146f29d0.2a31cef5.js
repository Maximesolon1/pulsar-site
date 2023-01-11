"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz"},o=void 0,l={unversionedId:"security-athenz",id:"version-2.11.x/security-athenz",title:"Authentication using Athenz",description:"Athenz is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as z-tokens) to establish the identity of the client.",source:"@site/versioned_docs/version-2.11.x/security-athenz.md",sourceDirName:".",slug:"/security-athenz",permalink:"/docs/2.11.x/security-athenz",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/security-athenz.md",tags:[],version:"2.11.x",frontMatter:{id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz"},sidebar:"docsSidebar",previous:{title:"Authentication using JWT",permalink:"/docs/2.11.x/security-jwt"},next:{title:"Authentication using Kerberos",permalink:"/docs/2.11.x/security-kerberos"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a tenant domain and service",id:"create-a-tenant-domain-and-service",level:3},{value:"Create a provider domain and add the tenant service to role members",id:"create-a-provider-domain-and-add-the-tenant-service-to-role-members",level:3},{value:"Enable Athenz authentication on brokers/proxies",id:"enable-athenz-authentication-on-brokersproxies",level:2},{value:"Configure Athenz authentication in Pulsar clients",id:"configure-athenz-authentication-in-pulsar-clients",level:2},{value:"Configure Athenz authentication in CLI tools",id:"configure-athenz-authentication-in-cli-tools",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),h=u("TabItem"),m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz"},"Athenz")," is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as ",(0,r.kt)("em",{parentName:"p"},"z-tokens"),") to establish the identity of the client."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/decent_authz_flow.md"},"decentralized Athenz system")," contains an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zms.md"},"authori",(0,r.kt)("strong",{parentName:"a"},"Z"),"ation ",(0,r.kt)("strong",{parentName:"a"},"M"),"anagement ",(0,r.kt)("strong",{parentName:"a"},"S"),"ystem")," (ZMS) server and an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zts"},"authori",(0,r.kt)("strong",{parentName:"a"},"Z"),"ation ",(0,r.kt)("strong",{parentName:"a"},"T"),"oken ",(0,r.kt)("strong",{parentName:"a"},"S"),"ystem")," (ZTS) server."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To begin, you need to set up Athenz service access control by creating domains for the ",(0,r.kt)("em",{parentName:"p"},"provider")," (which provides some resources to other services with some authentication/authorization policies) and the ",(0,r.kt)("em",{parentName:"p"},"tenant")," (which is provisioned to access some resources in a provider). In this case, the provider corresponds to the Pulsar service itself and the tenant corresponds to each application using Pulsar (typically, a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#tenant"},"tenant")," in Pulsar)."),(0,r.kt)("h3",{id:"create-a-tenant-domain-and-service"},"Create a tenant domain and service"),(0,r.kt)("p",null,"On the tenant side, do the followings:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a domain, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"shopping"),"."),(0,r.kt)("li",{parentName:"ol"},"Generate a private/public key pair."),(0,r.kt)("li",{parentName:"ol"},"Create a service, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"some_app"),", on the domain with the public key.")),(0,r.kt)("p",null,"Note that you need to specify the private key generated in step 2 when the Pulsar client connects to the broker."),(0,r.kt)("p",null,"For more specific steps involving the Athenz UI, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#client-tenant-domain"},"Example Service Access Control Setup"),"."),(0,r.kt)("h3",{id:"create-a-provider-domain-and-add-the-tenant-service-to-role-members"},"Create a provider domain and add the tenant service to role members"),(0,r.kt)("p",null,"On the provider side, you need to do the following things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a domain, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a role."),(0,r.kt)("li",{parentName:"ol"},"Add the tenant service to the members of the role.")),(0,r.kt)("p",null,"Note that you can specify any action and resource in step 2 since they are not used on Pulsar. In other words, Pulsar uses the Athenz role token only for authentication, ",(0,r.kt)("em",{parentName:"p"},"not")," for authorization."),(0,r.kt)("p",null,"For more specific steps involving the Athenz UI, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#server-provider-domain"},"Example Service Access Control Setup"),"."),(0,r.kt)("h2",{id:"enable-athenz-authentication-on-brokersproxies"},"Enable Athenz authentication on brokers/proxies"),(0,r.kt)("p",null,"To configure brokers/proxies to authenticate clients using Authenz, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," files and provide the class name of the Athenz authentication provider as well as a comma-separated list of provider domain names. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Add the Athenz auth provider\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderAthenz\nathenzDomainNames=pulsar\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nbrokerClientAuthenticationParameters={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n')),(0,r.kt)("h2",{id:"configure-athenz-authentication-in-pulsar-clients"},"Configure Athenz authentication in Pulsar clients"),(0,r.kt)("p",null,"To use Athenz as an authentication provider, you need to provide values for four parameters in a hash:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenantDomain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenantService")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerDomain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privateKey"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey")," parameter supports the following three pattern formats:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:///path/to/file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:/path/to/file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data:application/x-pem-file;base64,<base64-encoded value>")))),(0,r.kt)("p",null,"You can also set an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"keyId"),". The following is an example."),(0,r.kt)(c,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.kt)(h,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> authParams = new HashMap();\nauthParams.put("ztsUrl", "http://localhost:9998");\nauthParams.put("tenantDomain", "shopping"); // Tenant domain name\nauthParams.put("tenantService", "some_app"); // Tenant service name\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Tenant private key path\nauthParams.put("keyId", "v1"); // Key id for the tenant private key (optional, default: "0")\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(athenzAuth)\n        .build();\n'))),(0,r.kt)(h,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'authPlugin = "athenz"\nauthParams = """\n{\n"tenantDomain": "shopping",\n"tenantService": "some_app",\n"providerDomain": "pulsar",\n"privateKey": "file:///path/to/private.pem",\n"ztsUrl": "http://localhost:9998"\n}\n"""\n\nclient = Client(\n    "pulsar://my-broker.com:6650",\n    authentication=Authentication(authPlugin, authParams),\n)\n'))),(0,r.kt)(h,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string params = R"({\n        "tenantDomain": "shopping",\n        "tenantService": "some_app",\n        "providerDomain": "pulsar",\n        "privateKey": "file:///path/to/private.pem",\n        "ztsUrl": "http://localhost:9998"\n    })";\npulsar::AuthenticationPtr auth = pulsar::AuthAthenz::create(params);\nClientConfiguration config = ClientConfiguration();\nconfig.setAuth(auth);\nClient client("pulsar://my-broker.com:6650", config);\n'))),(0,r.kt)(h,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const auth = new Pulsar.AuthenticationAthenz({\n    tenantDomain: "shopping",\n    tenantService: "some_app",\n    providerDomain: "pulsar",\n    privateKey: "file:///path/to/private.pem",\n    ztsUrl: "http://localhost:9998"\n});\n\nconst client = new Pulsar.Client({\n    serviceUrl: \'pulsar://my-broker.com:6650\',\n    authentication: auth\n});\n'))),(0,r.kt)(h,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'provider := pulsar.NewAuthenticationAthenz(\n        "pulsar",\n        "shopping",\n        "some_app",\n        "file:///path/to/private.pem",\n        "v1",\n        "",\n        "http://localhost:9998")\nclient, err := pulsarNewClient(ClientOptions{\n        URL:                   "pulsar://my-broker.com:6650",\n        Authentication:        basicAuth,\n    })\n')))),(0,r.kt)("h2",{id:"configure-athenz-authentication-in-cli-tools"},"Configure Athenz authentication in CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"You need to add the following authentication parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file to use Athenz with CLI tools of Pulsar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# URL for the broker\nserviceUrl=http://broker.example.com:8080\n\n# Set Athenz auth plugin and its parameters\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nauthParams={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n')))}d.isMDXComponent=!0}}]);