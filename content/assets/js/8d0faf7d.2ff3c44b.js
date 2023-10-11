"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33316],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>m});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),c=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},u=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||s;return r?t.createElement(m,l(l({ref:a},u),{},{components:r})):t.createElement(m,l({ref:a},u))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=g;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},28802:(e,a,r)=>{r.d(a,{Z:()=>l});var t=r(67294),n=r(86010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:r,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:r},a)}},10599:(e,a,r)=>{r.d(a,{Z:()=>I});var t=r(87462),n=r(67294),s=r(86010),l=r(12466),i=r(16550),o=r(91980),c=r(67392),u=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}}))}function p(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??d(r);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function g(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const t=(0,i.k6)(),s=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(t.location.search);a.set(s,e),t.replace({...t.location,search:a.toString()})}),[s,t])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:t}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[o,c]=m({queryString:r,groupId:t}),[d,f]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,s]=(0,u.Nk)(r);return[t,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=o??d;return g({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var b=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:r,selectedValue:i,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const a=e.currentTarget,r=u.indexOf(a),t=c[r].value;t!==i&&(d(a),o(t))},g=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;a=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;a=u[r]??u[u.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},a)},c.map((e=>{let{value:a,label:r,attributes:l}=e;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>u.push(e),onKeyDown:g,onClick:p},l,{className:(0,s.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===a})}),r??a)})))}function k(e){let{lazy:a,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function y(e){const a=f(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},n.createElement(v,(0,t.Z)({},e,a)),n.createElement(k,(0,t.Z)({},e,a)))}function I(e){const a=(0,b.Z)();return n.createElement(y,(0,t.Z)({key:String(a)},e))}},8715:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(87462),n=(r(67294),r(3905)),s=r(10599),l=r(28802);const i={id:"client-libraries-readers",title:"Work with reader",sidebar_label:"Work with reader",description:"Learn how to work with readers in Pulsar."},o=void 0,c={unversionedId:"client-libraries-readers",id:"client-libraries-readers",title:"Work with reader",description:"Learn how to work with readers in Pulsar.",source:"@site/docs/client-libraries-readers.md",sourceDirName:".",slug:"/client-libraries-readers",permalink:"/docs/next/client-libraries-readers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-readers.md",tags:[],version:"current",frontMatter:{id:"client-libraries-readers",title:"Work with reader",sidebar_label:"Work with reader",description:"Learn how to work with readers in Pulsar."},sidebar:"docsSidebar",previous:{title:"Work with consumer",permalink:"/docs/next/client-libraries-consumers"},next:{title:"Work with TableView",permalink:"/docs/next/client-libraries-tableviews"}},u={},d=[{value:"Receive and read messages",id:"receive-and-read-messages",level:2},{value:"Read <code>next</code> message",id:"read-next-message",level:3},{value:"Read specific messages",id:"read-specific-messages",level:3},{value:"Configure chunking",id:"configure-chunking",level:2},{value:"Intercept messages",id:"intercept-messages",level:2},{value:"Sticky key range reader",id:"sticky-key-range-reader",level:2}],p={toc:d},g="wrapper";function m(e){let{components:a,...i}=e;return(0,n.kt)(g,(0,t.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After setting up your clients, you can explore more to start working with ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#reader-interface"},"readers"),"."),(0,n.kt)("h2",{id:"receive-and-read-messages"},"Receive and read messages"),(0,n.kt)("p",null,"A reader is just a consumer without a cursor. This means that Pulsar does not keep track of your progress and there is no need to acknowledge messages."),(0,n.kt)("p",null,"Here's an example that begins reading from the earliest available message on a topic."),(0,n.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageId;\nimport org.apache.pulsar.client.api.Reader;\n\n// Create a reader on a topic and for a specific message (and onward)\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic("reader-api-test")\n    .startMessageId(MessageId.earliest)\n    .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n\n    // Process the message\n}\n'))),(0,n.kt)(l.Z,{value:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'await foreach (var message in reader.Messages())\n{\n    Console.WriteLine("Received: " + Encoding.UTF8.GetString(message.Data.ToArray()));\n}\n')))),(0,n.kt)("h3",{id:"read-next-message"},"Read ",(0,n.kt)("inlineCode",{parentName:"h3"},"next")," message"),(0,n.kt)("p",null,"To create a reader that reads from the latest available message:"),(0,n.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Reader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(MessageId.latest)\n    .create();\n"))),(0,n.kt)(l.Z,{value:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{URL: "pulsar://localhost:6650"})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    defer client.Close()\n\n    reader, err := client.CreateReader(pulsar.ReaderOptions{\n        Topic:          "topic-1",\n        StartMessageID: pulsar.EarliestMessageID(),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer reader.Close()\n\n    for reader.HasNext() {\n        msg, err := reader.Next(context.Background())\n        if err != nil {\n            log.Fatal(err)\n        }\n\n        fmt.Printf("Received message msgId: %#v -- content: \'%s\'\\n",\n            msg.ID(), string(msg.Payload()))\n    }\n}\n')),(0,n.kt)("p",null,"In the example above, the reader begins reading from the earliest available message (specified by ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar.EarliestMessage"),"). The reader can also begin reading from the latest message (",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar.LatestMessage"),") or some other message ID specified by bytes using the ",(0,n.kt)("inlineCode",{parentName:"p"},"DeserializeMessageID")," function, which takes a byte array and returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"MessageID")," object. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'lastSavedId := // Read last saved message id from external store as byte[]\n\nreader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:          "my-golang-topic",\n    StartMessageID: pulsar.DeserializeMessageID(lastSavedId),\n})\n')))),(0,n.kt)("h3",{id:"read-specific-messages"},"Read specific messages"),(0,n.kt)("p",null,"To create a reader that reads from some message between the earliest and the latest:"),(0,n.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"byte[] msgIdBytes = // Some byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(id)\n    .create();\n"))),(0,n.kt)(l.Z,{value:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer client.Close()\n\ntopic := "topic-1"\nctx := context.Background()\n\n// create producer\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic:           topic,\n    DisableBatching: true,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer producer.Close()\n\n// send 10 messages\nmsgIDs := [10]pulsar.MessageID{}\nfor i := 0; i < 10; i++ {\n    msgID, _ := producer.Send(ctx, &pulsar.ProducerMessage{\n        Payload: []byte(fmt.Sprintf("hello-%d", i)),\n    })\n    msgIDs[i] = msgID\n}\n\n// create reader on 5th message (not included)\nreader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:                   topic,\n    StartMessageID:          msgIDs[4],\n    StartMessageIDInclusive: false,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer reader.Close()\n\n// receive the remaining 5 messages\nfor i := 5; i < 10; i++ {\n    msg, err := reader.Next(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Printf("Read %d-th msg: %s\\n", i, string(msg.Payload()))\n}\n// create reader on 5th message (included)\nreaderInclusive, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:                   topic,\n    StartMessageID:          msgIDs[4],\n    StartMessageIDInclusive: true,\n})\n\nif err != nil {\n    log.Fatal(err)\n}\ndefer readerInclusive.Close()\n')))),(0,n.kt)("h2",{id:"configure-chunking"},"Configure chunking"),(0,n.kt)("p",null,"Configuring chunking for readers is similar to that for consumers. See ",(0,n.kt)("a",{parentName:"p",href:"#configure-chunking"},"configure chunking for consumers")," for more information."),(0,n.kt)("p",null,"The following is an example of how to configure message chunking for a reader."),(0,n.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Reader<byte[]> reader = pulsarClient.newReader()\n        .topic(topicName)\n        .startMessageId(MessageId.earliest)\n        .maxPendingChunkedMessage(12)\n        .autoAckOldestChunkedMessageOnQueueFull(true)\n        .expireTimeOfIncompleteChunkedMessage(12, TimeUnit.MILLISECONDS)\n        .create();\n")))),(0,n.kt)("h2",{id:"intercept-messages"},"Intercept messages"),(0,n.kt)("p",null,"Pulsar reader interceptor intercepts and possibly mutates messages with user-defined processing before ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#reader-interface"},"Pulsar reader")," reads them. With reader interceptors, you can apply unified messaging processes before messages can be read, such as modifying messages, adding properties, collecting statistics and etc, without creating similar mechanisms respectively."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reader interceptor in Pulsar",src:r(12501).Z,width:"1048",height:"237"})),(0,n.kt)("p",null,"Pulsar reader interceptor works on top of Pulsar consumer interceptor. The plugin interface ",(0,n.kt)("inlineCode",{parentName:"p"},"ReaderInterceptor")," can be treated as a subset of ",(0,n.kt)("inlineCode",{parentName:"p"},"ConsumerInterceptor")," and it has two main events."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"beforeRead")," is triggered before readers read messages. You can modify messages within this event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onPartitionsChange")," is triggered when changes on partitions have been detected.")),(0,n.kt)("p",null,"To perceive triggered events and perform customized processing, you can add ",(0,n.kt)("inlineCode",{parentName:"p"},"ReaderInterceptor")," when creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reader")," as follows."),(0,n.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nReader<byte[]> reader = pulsarClient.newReader()\n        .topic("t1")\n        .autoUpdatePartitionsInterval(5, TimeUnit.SECONDS)\n        .intercept(new ReaderInterceptor<byte[]>() {\n            @Override\n            public void close() {\n            }\n\n            @Override\n            public Message<byte[]> beforeRead(Reader<byte[]> reader, Message<byte[]> message) {\n                // user-defined processing logic\n                return message;\n            }\n\n            @Override\n            public void onPartitionsChange(String topicName, int partitions) {\n                // user-defined processing logic\n            }\n        })\n        .startMessageId(MessageId.earliest)\n        .create();\n')))),(0,n.kt)("h2",{id:"sticky-key-range-reader"},"Sticky key range reader"),(0,n.kt)("p",null,"In a sticky key range reader, broker only dispatches messages which hash of the message key contains by the specified key hash range. Multiple key hash ranges can be specified on a reader."),(0,n.kt)("p",null,"The following is an example to create a sticky key range reader."),(0,n.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(MessageId.earliest)\n        .keyHashRange(Range.of(0, 10000), Range.of(20001, 30000))\n        .create();\n")))),(0,n.kt)("p",null,"The total hash range size is 65536, so the max end of the range should be less than or equal to 65535."))}m.isMDXComponent=!0},12501:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/reader-interceptor-29f6b3d84db93608da79169bf9901555.svg"}}]);