"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||s;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={},a="HTTP Protocol",i={unversionedId:"sdk-java/http",id:"version-v1.6.0/sdk-java/http",title:"HTTP Protocol",description:"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of EventMeshHttpClientConfig class that specifies the configuration of EventMesh HTTP client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.",source:"@site/versioned_docs/version-v1.6.0/sdk-java/02-http.md",sourceDirName:"sdk-java",slug:"/sdk-java/http",permalink:"/docs/v1.6.0/sdk-java/http",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.6.0/sdk-java/02-http.md",tags:[],version:"v1.6.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/v1.6.0/sdk-java/intro"},next:{title:"TCP Protocol",permalink:"/docs/v1.6.0/sdk-java/tcp"}},l={},p=[{value:"HTTP Consumer",id:"http-consumer",level:2},{value:"HTTP Producer",id:"http-producer",level:2},{value:"Using Curl Command",id:"using-curl-command",level:2},{value:"Publish",id:"publish",level:3},{value:"Subscribe",id:"subscribe",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-protocol"},"HTTP Protocol"),(0,o.kt)("p",null,"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpClientConfig")," class that specifies the configuration of EventMesh HTTP client. The ",(0,o.kt)("inlineCode",{parentName:"p"},"liteEventMeshAddr"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userName"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," fields should match the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," file of EventMesh runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.conf.EventMeshHttpClientConfig;\nimport org.apache.eventmesh.common.utils.IPUtils;\nimport org.apache.eventmesh.common.utils.ThreadUtils;\n\npublic class HTTP {\n  public static void main(String[] args) throws Exception {\n    EventMeshHttpClientConfig eventMeshClientConfig = EventMeshHttpClientConfig.builder()\n      .liteEventMeshAddr("localhost:10105")\n      .producerGroup("TEST_PRODUCER_GROUP")\n      .env("env")\n      .idc("idc")\n      .ip(IPUtils.getLocalAddress())\n      .sys("1234")\n      .pid(String.valueOf(ThreadUtils.getPID()))\n      .userName("eventmesh")\n      .password("password")\n      .build();\n      /* ... */\n  }\n}\n')),(0,o.kt)("h2",{id:"http-consumer"},"HTTP Consumer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpConsumer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"heartbeat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"unsubscribe")," methods. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," method accepts a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," that defines the topics to be subscribed and a callback URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.consumer.EventMeshHttpConsumer;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport com.google.common.collect.Lists;\n\npublic class HTTP {\n  final String url = "http://localhost:8080/callback";\n  final List<SubscriptionItem> topicList = Lists.newArrayList(\n    new SubscriptionItem("eventmesh-async-topic", SubscriptionMode.CLUSTERING, SubscriptionType.ASYNC)\n  );\n\n  public static void main(String[] args) throws Exception {\n    /* ... */\n    eventMeshHttpConsumer = new EventMeshHttpConsumer(eventMeshClientConfig);\n    eventMeshHttpConsumer.heartBeat(topicList, url);\n    eventMeshHttpConsumer.subscribe(topicList, url);\n    /* ... */\n    eventMeshHttpConsumer.unsubscribe(topicList, url);\n  }\n}\n')),(0,o.kt)("p",null,"The EventMesh runtime will send a POST request that contains the message in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents format")," to the callback URL. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/http/demo/sub/controller/SubController.java"},(0,o.kt)("inlineCode",{parentName:"a"},"SubController.java")," file")," implements a Spring Boot controller that receives and parses the callback messages."),(0,o.kt)("h2",{id:"http-producer"},"HTTP Producer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpProducer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method accepts the message to be published and an optional timeout value. The message should be an instance of either of these classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.openmessaging.api.Message"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.producer.EventMeshHttpProducer;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.Constants;\nimport org.apache.eventmesh.common.utils.JsonUtils;\n\nimport io.cloudevents.CloudEvent;\nimport io.cloudevents.core.builder.CloudEventBuilder;\n\npublic class HTTP {\n  public static void main(String[] args) throws Exception {\n    /* ... */\n    EventMeshHttpProducer eventMeshHttpProducer = new EventMeshHttpProducer(eventMeshClientConfig);\n    Map<String, String> content = new HashMap<>();\n    content.put("content", "testAsyncMessage");\n\n    CloudEvent event = CloudEventBuilder.v1()\n      .withId(UUID.randomUUID().toString())\n      .withSubject("eventmesh-async-topic")\n      .withSource(URI.create("/"))\n      .withDataContentType("application/cloudevents+json")\n      .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n      .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n      .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n      .build();\n    eventMeshHttpProducer.publish(event);\n  }\n}\n')),(0,o.kt)("h2",{id:"using-curl-command"},"Using Curl Command"),(0,o.kt)("p",null,"You can also publish/subscribe event without eventmesh SDK."),(0,o.kt)("h3",{id:"publish"},"Publish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type:application/json" -X POST -d \'{"name": "admin", "pass":"12345678"}\' http://127.0.0.1:10105/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC\n')),(0,o.kt)("p",null,"After you start the eventmesh runtime server, you can use the curl command publish the event to the specific topic with the HTTP POST method and the package body must be in JSON format. The publish url like (",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:10105/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC"},"http://127.0.0.1:10105/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC"),"), and you will get the publish successful result."),(0,o.kt)("h3",{id:"subscribe"},"Subscribe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type:application/json" -X POST -d \'{"url": "http://127.0.0.1:8088/sub/test", "consumerGroup":"TEST-GROUP", "topic":[{"mode":"CLUSTERING","topic":"TEST-TOPIC-HTTP-ASYNC","type":"ASYNC"}]}\' http://127.0.0.1:10105/eventmesh/subscribe/local\n')),(0,o.kt)("p",null,"After you start the eventmesh runtime server, you can use the curl command to subscribe the specific topic list with the HTTP POST method, and the package body must be in JSON format. The subscribe url like (",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:10105/eventmesh/subscribe/local"},"http://127.0.0.1:10105/eventmesh/subscribe/local"),"), and you will get the subscribe successful result. You should pay attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," field in the package body, which means you need to set up an HTTP service at the specified URL, you can see the example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh-examples")," module."))}u.isMDXComponent=!0}}]);