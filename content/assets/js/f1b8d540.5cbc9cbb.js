"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4329],{48493:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462);const a="Input_xnUw",s="InputIcon_zCZ2",o="InputInput_pPHU",i="SmallInputInput_yZ0t",c="InputInputWithError_vS92",l="InputInputWithIcon_XVOK",u="InputInputClearable_GBIW",p="Clear_ltKk";var m=r(67294),h=r(46850);const d=e=>{let{value:t,placeholder:r,isError:d,isSmall:k,iconSvg:_,clearable:g,onChange:b,focusOnMount:S,type:C,inputProps:v,testId:y}=e;const f=(0,m.useRef)(null);return(0,m.useEffect)((()=>{S&&f?.current?.focus()}),[f.current]),m.createElement("div",{className:a},m.createElement("input",(0,n.Z)({ref:f,className:`${o} ${k?i:""} ${d?c:""} ${_?l:""} ${g?u:""}`,type:C||"text",value:t,onChange:e=>b(e.target.value),placeholder:r,spellCheck:!1,onKeyDown:e=>{"Escape"===e.key&&f?.current?.blur()}},v,{"data-testid":y})),_&&m.createElement("div",{className:s},m.createElement(h.Z,{svg:_})),g&&m.createElement("div",{className:p,onClick:()=>b("")},m.createElement(h.Z,{svg:'<svg focusable="false" viewBox="0 0 24 24" tabindex="-1">\n  <path\n    d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n</svg>\n'})))}},27723:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const a="Page_tPPK",s="PageContent_MhoE",o=e=>n.createElement("section",{className:a},n.createElement("div",{className:s},e.children))},49751:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294);const a="Container_ZMHf",s="Select_PGrr",o="DisabledSelect_i78Z",i="Placeholder_OQcM",c="Arrow_LDdt",l="DisabledArrow_T4gN";var u=r(46850);const p=function(e){function t(e){if("item"!==e.type)return n.createElement(n.Fragment,null);const t=e.value.toString();return n.createElement("option",{key:t,value:t},e.title)}return n.createElement("div",{className:a},void 0===e.value&&n.createElement("div",{className:i},e.placeholder),n.createElement("select",{className:`${s} ${e.disabled?o:""}`,onChange:t=>e.onChange(t.target.value),value:e.value,disabled:e.disabled},e.list.map((e=>"empty"===e.type?n.createElement("option",{key:"select-empty-value-f5da5543-e672-4d1f-bc66-28d04ea17354",value:void 0}):"item"===e.type?t(e):"group"===e.type?n.createElement("optgroup",{key:e.title,label:e.title},e.items.map(t)):void 0))),n.createElement("div",{className:`${c} ${e.disabled?l:""}`},n.createElement(u.Z,{svg:'<svg focusable="false" viewBox="0 0 24 24" tabindex="-1">\n  <path d="m7 10 5 5 5-5z"></path>\n</svg>\n'})))}},46850:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294);const a="SvgIcon_Ubel",s=e=>n.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:e.svg}})},37374:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(67294),a=r(22215),s=r(87462);const o="Cards_icqz",i="Card_MpYv",c=e=>n.createElement("div",{className:i},n.createElement("h3",null,n.createElement("a",{href:e.link},e.name)),e.description&&n.createElement("p",null,e.description),n.createElement("h5",null,e.source_or_sink),n.createElement("a",{href:e.link,target:"_blank"},"See Details")),l=e=>{const t=e.resources.sort(((e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"}))).filter((t=>t.name&&t.name.toLowerCase().includes(e.search.toLowerCase())||t.description&&t.description.toLowerCase().includes(e.search.toLowerCase())));return t.length?n.createElement("section",{className:o},t.map(((e,t)=>n.createElement(c,(0,s.Z)({key:t},e))))):n.createElement("section",null,n.createElement("h3",null,"Sorry, no resources match your search."))},u=["client_api","client_wrapper","database_integration","io","logging","observability","protocol_handlers","search_and_query","security_plugins","stream_processing","tools"],p={client_api:"Client API",client_wrapper:"Client Wrapper",database_integration:"Database Integration",io:"IO",logging:"Logging",observability:"Observability",protocol_handlers:"Protocol Handlers",search_and_query:"Search and Query",security_plugins:"Security Plugins",stream_processing:"Stream Processing",tools:"Tools"},m={client_api:[{name:"Starlight for JMS",description:"Implements the JMS 2.0 (Java Messaging Service \xae) API over the Apache Pulsar\xae Java Client.",link:"https://github.com/datastax/pulsar-jms",source_or_sink:"N/A"}],client_wrapper:[{name:"Kafka Client Wrapper",description:"",link:"https://github.com/apache/pulsar-adapters/tree/master/pulsar-client-kafka-compat",source_or_sink:"N/A"}],database_integration:[{name:"Azure Data Explorer (Kusto) Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/azure-kusto",source_or_sink:"Sink"},{name:"Azure DocumentDB Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/azure-documentdb",source_or_sink:"Source"},{name:"Cassandra Connector",description:"",link:"https://github.com/datastax/cdc-apache-cassandra",source_or_sink:"Source"},{name:"Cassandra Sink Connector",description:"",link:"https://github.com/datastax/pulsar-sink",source_or_sink:"Sink"},{name:"Couchbase Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/couchbase",source_or_sink:"Source and Sink"},{name:"Geode Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/geode",source_or_sink:"Source and Sink"},{name:"Google BigQuery Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/bigquery",source_or_sink:"Sink"},{name:"Kinetica Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/kinetica",source_or_sink:"Source and Sink"},{name:"Kudu Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/kudu",source_or_sink:"Sink"},{name:"MarkLogic Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/marklogic",source_or_sink:"Sink"},{name:"Neo4j Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/neo4j",source_or_sink:"Sink"},{name:"OrientDB Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/orientdb",source_or_sink:"Sink"},{name:"Phoenix Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/phoenix",source_or_sink:"Sink"},{name:"Redis Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/redis",source_or_sink:"Source and Sink"},{name:"SAP HANA Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/sap-hana",source_or_sink:"Source and Sink"},{name:"SingleStore Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/singlestore",source_or_sink:"Sink"},{name:"Snowflake Connector",description:"",link:"https://github.com/datastax/snowflake-connector",source_or_sink:"Sink"},{name:"XTDB Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/xtdb",source_or_sink:"Sink"},{name:"Aerospike Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/aerospike",source_or_sink:"Sink"},{name:"Canal Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/canal",source_or_sink:"Source"},{name:"Cassandra Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/cassandra",source_or_sink:"Sink"},{name:"Debezium Connector (Microsoft SQL Server)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/debezium/mssql",source_or_sink:"Source"},{name:"Debezium Connector (MongoDB)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/debezium/mongodb",source_or_sink:"Source"},{name:"Debezium Connector (MySQL)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/debezium/mysql",source_or_sink:"Source"},{name:"Debezium Connector (Oracle)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/debezium/oracle",source_or_sink:"Source"},{name:"Debezium Connector (PostgreSQL)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/debezium/postgres",source_or_sink:"Source"},{name:"DynamoDB Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/dynamodb",source_or_sink:"Source"},{name:"HBase Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/hbase",source_or_sink:"Sink"},{name:"HDFS2 Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/hdfs2",source_or_sink:"Sink"},{name:"HDFS3 Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/hdfs3",source_or_sink:"Sink"},{name:"InfluxDB Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/influxdb",source_or_sink:"Sink"},{name:"JDBC Connector (ClickHouse)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/jdbc/clickhouse",source_or_sink:"Sink"},{name:"JDBC Connector (MariaDB)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/jdbc/mariadb",source_or_sink:"Sink"},{name:"JDBC Connector (OpenMLDB)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/jdbc/openmldb",source_or_sink:"Sink"},{name:"JDBC Connector (PostgreSQL)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/jdbc/postgres",source_or_sink:"Sink"},{name:"JDBC Connector (SQLite)",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/jdbc/sqlite",source_or_sink:"Sink"},{name:"MongoDB Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/mongo",source_or_sink:"Sink"},{name:"Redis Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/redis",source_or_sink:"Sink"}],io:[{name:"AMQP1_0 Connector",description:"",link:"https://github.com/streamnative/pulsar-io-amqp-1-0",source_or_sink:"Source and Sink"},{name:"AWS Lambda Connector",description:"",link:"https://github.com/streamnative/pulsar-io-aws-lambda",source_or_sink:"Sink"},{name:"AWS SQS Connector",description:"",link:"https://github.com/streamnative/pulsar-io-sqs",source_or_sink:"Source and Sink"},{name:"Cloud Storage Connector",description:"",link:"https://github.com/streamnative/pulsar-io-cloud-storage",source_or_sink:"Sink"},{name:"CoAP Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/coap",source_or_sink:"Source and Sink"},{name:"Diffusion Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/diffusion",source_or_sink:"Source and Sink"},{name:"File Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/file",source_or_sink:"Source"},{name:"Humio HEC Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/humio",source_or_sink:"Sink"},{name:"JMS Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/jms",source_or_sink:"Source and Sink"},{name:"Kafka Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/kafka",source_or_sink:"Source and Sink"},{name:"Kinesis Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/kinesis",source_or_sink:"Source and Sink"},{name:"MQTT Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/mqtt",source_or_sink:"Source and Sink"},{name:"Netty Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/netty",source_or_sink:"Source"},{name:"NSQ Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/nsq",source_or_sink:"Source"},{name:"PLC4X Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/plc4x",source_or_sink:"Source and Sink"},{name:"RabbitMQ Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/rabbitmq",source_or_sink:"Source and Sink"},{name:"Twitter Firehose Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/twitter",source_or_sink:"Source"}],logging:[{name:"Datadog Logs Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/datadog",source_or_sink:"Sink"},{name:"Flume NG Connector",description:"",link:"https://github.com/streamnative/pulsar-flume-ng-sink",source_or_sink:"Source"},{name:"Logstash Input",description:"",link:"https://github.com/streamnative/logstash-input-pulsar",source_or_sink:"N/A"},{name:"Logstash Output",description:"",link:"https://github.com/streamnative/logstash-output-pulsar",source_or_sink:"N/A"},{name:"New Relic Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/newrelic",source_or_sink:"Sink"},{name:"Pulsar Beat Output",description:"",link:"https://hub.streamnative.io/logging/pulsar-beat-output/v0.1.0/",source_or_sink:"N/A"},{name:"Splunk Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/splunk",source_or_sink:"Sink"},{name:"Flume Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/flume",source_or_sink:"Source"}],observability:[{name:"Datadog",description:"",link:"https://github.com/streamnative/pulsar-datadog",source_or_sink:"N/A"},{name:"Grafana Dashboard",description:"",link:"https://github.com/streamnative/apache-pulsar-grafana-dashboard",source_or_sink:"N/A"},{name:"OpenTracing Pulsar Client",description:"",link:"https://github.com/streamnative/pulsar-tracing",source_or_sink:"N/A"}],protocol_handlers:[{name:"AoP (AMQP on Pulsar)",description:"",link:"https://github.com/streamnative/aop",source_or_sink:"N/A"},{name:"KoP (Kafka on Pulsar)",description:"",link:"https://github.com/streamnative/kop",source_or_sink:"N/A"},{name:"MoP (MQTT on Pulsar)",description:"",link:"https://github.com/streamnative/mop",source_or_sink:"N/A"},{name:"RoP (RocketMQ on Pulsar)",description:"",link:"https://github.com/streamnative/rop",source_or_sink:"N/A"},{name:"Starlight for RabbitMQ",description:"Acts as a proxy between your RabbitMQ application and Apache Pulsar",link:"https://github.com/datastax/starlight-for-rabbitmq",source_or_sink:"N/A"}],search_and_query:[{name:"Presto Pulsar connector ",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-sql",source_or_sink:"N/A"},{name:"ElasticSearch Connector ",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/elastic-search",source_or_sink:"Sink"},{name:"Solr Connector",description:"",link:"https://github.com/apache/pulsar/tree/master/pulsar-io/solr",source_or_sink:"Sink"}],security_plugins:[{name:"OpenID Connect Authentication Plugin",description:"",link:"https://github.com/datastax/pulsar-openid-connect-plugin",source_or_sink:"N/A"}],stream_processing:[{name:"Function Mesh",description:"",link:"https://github.com/streamnative/function-mesh",source_or_sink:"N/A"},{name:"NiFi Processor",description:"",link:"https://github.com/streamnative/pulsar-nifi-bundle",source_or_sink:"N/A"},{name:"Pulsar Flink Connector",description:"",link:"https://hub.streamnative.io/data-processing/pulsar-flink/1.13/",source_or_sink:"Source and Sink"},{name:"Pulsar Spark Adaptor",description:"",link:"https://github.com/apache/pulsar-adapters/tree/master/pulsar-spark",source_or_sink:"N/A"},{name:"Pulsar Spark Connector",description:"",link:"https://hub.streamnative.io/data-processing/pulsar-spark/3.1.1/",source_or_sink:"Source and Sink"},{name:"Pulsar Storm Adaptor",description:"",link:"https://github.com/apache/pulsar-adapters/tree/master/pulsar-storm",source_or_sink:"N/A"},{name:"Hazelcast Jet Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/hazelcast",source_or_sink:"Source"},{name:"Zeebe Connector",description:"",link:"https://github.com/datastax/pulsar-3rdparty-connector/tree/master/pulsar-connectors/zeebe",source_or_sink:"Source and Sink"}],tools:[{name:"Helm Chart (DataStax)",description:"",link:"https://github.com/datastax/pulsar-helm-chart",source_or_sink:"N/A"},{name:"Helm Chart (Pulsar)",description:"",link:"https://github.com/apache/pulsar-helm-chart",source_or_sink:"N/A"},{name:"Helm Chart (StreamNative)",description:"",link:"https://github.com/streamnative/charts/tree/master/charts/pulsar",source_or_sink:"N/A"},{name:"Log4j2 Appender",description:"",link:"https://github.com/apache/pulsar-adapters/tree/master/pulsar-log4j2-appender",source_or_sink:"N/A"},{name:"Pulsar Admin Console",description:"",link:"https://github.com/datastax/pulsar-admin-console",source_or_sink:"N/A"},{name:"Pulsar Manager",description:"",link:"https://github.com/apache/pulsar-manager",source_or_sink:"N/A"},{name:"Pulsarctl",description:"",link:"https://github.com/streamnative/pulsarctl",source_or_sink:"N/A"},{name:"Terraform Provider",description:"",link:"https://github.com/streamnative/terraform-provider-pulsar",source_or_sink:"N/A"}]};var h=r(48493),d=r(49751),k=r(27723);const _="Header_ZwWo",g="Filters_GhWp",b=["any",...u],S=()=>{const[e,t]=(0,n.useState)(""),[r,s]=n.useState("any");return n.createElement(a.Z,{title:"Ecosystem",description:"Learn about the basics of using Apache Pulsar"},n.createElement(k.Z,null,n.createElement("section",{className:_},n.createElement("h1",null,"Ecosystem"),n.createElement("p",null,"To build better streaming data pipelines and event-driven applications, you can use the powerful extensions to Pulsar, including ",n.createElement("a",{href:"/docs/next/io-overview"},"connectors"),", protocol handlers, tools, and more. Additionally, you can develop applications using ",n.createElement("a",{href:"/docs/next/client-libraries"},"client libraries"),"."),n.createElement("p",null,"This page lists both built-in and third-party tools. Note that some of the third-party tools were not tested throughly by the community, and may not work as expected. Only open source components with an ",n.createElement("a",{href:"https://opensource.org/licenses"},"OSI\xa0approved licenses")," are allowed. ")),n.createElement("section",null,n.createElement("form",null,n.createElement("div",{className:g},n.createElement(d.Z,{value:r,onChange:s,list:b.map((e=>({type:"item",value:e,title:"any"===e?"All Categories":p[e]})))}),n.createElement(h.Z,{placeholder:"Search",value:e,onChange:t,clearable:!0})),n.createElement("div",null,"any"===r&&n.createElement(l,{search:e,resources:Object.values(m).flat()}),u.map((t=>{if(r===t)return n.createElement(l,{key:t,search:e,resources:m[t]})})))))))}}}]);