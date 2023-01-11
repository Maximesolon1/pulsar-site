"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81199],{3905:(e,a,n)=>{n.d(a,{Zo:()=>l,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},l=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?t.createElement(g,o(o({ref:a},l),{},{components:n})):t.createElement(g,o({ref:a},l))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81468:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=n(87462),r=(n(67294),n(3905));const i={id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions"},o=void 0,p={unversionedId:"functions-package-java",id:"functions-package-java",title:"Package Java Functions",description:"There are two methods to package Java Functions, that is uber JAR and NAR.",source:"@site/docs/functions-package-java.md",sourceDirName:".",slug:"/functions-package-java",permalink:"/docs/next/functions-package-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-package-java.md",tags:[],version:"current",frontMatter:{id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions"},sidebar:"docsSidebar",previous:{title:"How to package",permalink:"/docs/next/functions-package"},next:{title:"Package Python Functions",permalink:"/docs/next/functions-package-python"}},c={},s=[{value:"Package as JAR",id:"package-as-jar",level:2},{value:"Package as NAR",id:"package-as-nar",level:2}],l={toc:s};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are two methods to package Java Functions, that is ",(0,r.kt)("a",{parentName:"p",href:"#package-as-jar"},"uber JAR")," and ",(0,r.kt)("a",{parentName:"p",href:"#package-as-nar"},"NAR"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you plan to package and distribute your function for others to use, you are obligated to\nlicense and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution."),(0,r.kt)("p",{parentName:"admonition"},"If you use the ",(0,r.kt)("a",{parentName:"p",href:"#package-as-nar"},"NAR")," method, the NAR plugin\nautomatically creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your function."),(0,r.kt)("p",{parentName:"admonition"},"For the runtime Java version, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version.")),(0,r.kt)("h2",{id:"package-as-jar"},"Package as JAR"),(0,r.kt)("p",null,"To package a Java function as JAR, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new maven project with a pom file. In the following code sample, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"mainClass")," is your package name."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>2.10.0</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <artifactId>maven-assembly-plugin</artifactId>\n                 <configuration>\n                     <appendAssemblyId>false</appendAssemblyId>\n                     <descriptorRefs>\n                         <descriptorRef>jar-with-dependencies</descriptorRef>\n                     </descriptorRefs>\n                     <archive>\n                     <manifest>\n                         <mainClass>org.example.test.ExclamationFunction</mainClass>\n                     </manifest>\n                 </archive>\n                 </configuration>\n                 <executions>\n                     <execution>\n                         <id>make-assembly</id>\n                         <phase>package</phase>\n                         <goals>\n                             <goal>assembly</goal>\n                         </goals>\n                     </execution>\n                 </executions>\n             </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Package your Java function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," mvn package\n")),(0,r.kt)("p",{parentName:"li"},"After the Java function is packaged, a ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory is created automatically. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory to check if there is a JAR package similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"java-function-1.0-SNAPSHOT.jar"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the packaged jar file to the Pulsar image."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker exec -it [CONTAINER ID] /bin/bash\n docker cp <path of java-function-1.0-SNAPSHOT.jar>  CONTAINER ID:/pulsar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the Java function using the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions localrun \\\n    --classname org.example.test.ExclamationFunction \\\n    --jar java-function-1.0-SNAPSHOT.jar \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name JavaFunction\n")),(0,r.kt)("p",{parentName:"li"},"The following log indicates that the Java function starts successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))),(0,r.kt)("h2",{id:"package-as-nar"},"Package as NAR"),(0,r.kt)("p",null,"To package a Java function as NAR, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new maven project with a pom file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>2.11.0</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <groupId>org.apache.nifi</groupId>\n                 <artifactId>nifi-nar-maven-plugin</artifactId>\n                 <version>1.2.0</version>\n                 </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n')),(0,r.kt)("p",{parentName:"li"},"You must also create a ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/pulsar-io.yaml")," file. In the following code sample, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"functionClass")," is your function class name. The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is the one used when the Function is deployed as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/functions-deploy-cluster-builtin"},"built-in")," one."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: java-function\ndescription: my java function\nfunctionClass: org.example.test.ExclamationFunction\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Package your Java function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn package\n")),(0,r.kt)("p",{parentName:"li"},"After the Java function is packaged, a ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory is created automatically. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory to check if there is a NAR package similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"java-function-1.0-SNAPSHOT.nar"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the packaged NAR file to the Pulsar image."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker cp <path of java-function-1.0-SNAPSHOT.nar>  CONTAINER ID:/pulsar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the Java function using the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions localrun \\\n    --jar java-function-1.0-SNAPSHOT.nar \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name JavaFunction\n")),(0,r.kt)("p",{parentName:"li"},"The following log indicates that the Java function starts successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))))}u.isMDXComponent=!0}}]);