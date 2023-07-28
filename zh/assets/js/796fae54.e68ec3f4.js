"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[2425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||s;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={},a="gRPC Protocol",i={unversionedId:"sdk-java/grpc",id:"version-v1.4.0/sdk-java/grpc",title:"gRPC Protocol",description:"EventMesh SDK for Java implements the gRPC producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshGrpcClientConfig class that specifies the configuration of EventMesh gRPC client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.",source:"@site/versioned_docs/version-v1.4.0/sdk-java/04-grpc.md",sourceDirName:"sdk-java",slug:"/sdk-java/grpc",permalink:"/zh/docs/v1.4.0/sdk-java/grpc",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.4.0/sdk-java/04-grpc.md",tags:[],version:"v1.4.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCP Protocol",permalink:"/zh/docs/v1.4.0/sdk-java/tcp"},next:{title:"EventMesh Runtime Protocol",permalink:"/zh/docs/v1.4.0/design-document/runtime-protocol"}},c={},l=[{value:"gRPC Consumer",id:"grpc-consumer",level:2},{value:"Stream Consumer",id:"stream-consumer",level:3},{value:"Webhook Consumer",id:"webhook-consumer",level:3},{value:"gRPC Producer",id:"grpc-producer",level:2},{value:"Asynchronous Producer",id:"asynchronous-producer",level:3},{value:"Synchronous Producer",id:"synchronous-producer",level:3},{value:"Batch Producer",id:"batch-producer",level:3}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grpc-protocol"},"gRPC Protocol"),(0,o.kt)("p",null,"EventMesh SDK for Java implements the gRPC producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcClientConfig")," class that specifies the configuration of EventMesh gRPC client. The ",(0,o.kt)("inlineCode",{parentName:"p"},"liteEventMeshAddr"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"userName"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," fields should match the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," file of EventMesh runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.grpc.config.EventMeshGrpcClientConfig;\nimport org.apache.eventmesh.client.grpc.consumer.ReceiveMsgHook;\nimport io.cloudevents.CloudEvent;\n\npublic class CloudEventsAsyncSubscribe implements ReceiveMsgHook<CloudEvent> {\n  public static void main(String[] args) throws InterruptedException {\n    EventMeshGrpcClientConfig eventMeshClientConfig = EventMeshGrpcClientConfig.builder()\n      .serverAddr("localhost")\n      .serverPort(10205)\n      .consumerGroup(ExampleConstants.DEFAULT_EVENTMESH_TEST_CONSUMER_GROUP)\n      .env("env").idc("idc")\n      .sys("1234").build();\n    /* ... */\n  }\n}\n')),(0,o.kt)("h2",{id:"grpc-consumer"},"gRPC Consumer"),(0,o.kt)("h3",{id:"stream-consumer"},"Stream Consumer"),(0,o.kt)("p",null,"The EventMesh runtime sends the message from producers to the stream consumer as a series of event streams. The consumer should implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," class, which is defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-sdk-java/src/main/java/org/apache/eventmesh/client/grpc/consumer/ReceiveMsgHook.java"},(0,o.kt)("inlineCode",{parentName:"a"},"ReceiveMsgHook.java")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface ReceiveMsgHook<T> {\n    Optional<T> handle(T msg) throws Throwable;\n    String getProtocolType();\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcConsumer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerListener"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"unsubscribe")," methods. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," method accepts a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," that defines the topics to be subscribed to. The ",(0,o.kt)("inlineCode",{parentName:"p"},"registerListener")," accepts an instance of a class that implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method will be invoked when the consumer receives a message from the topic it subscribes. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionType")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"SYNC"),", the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," will be sent back to the producer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.grpc.consumer.EventMeshGrpcConsumer;\nimport org.apache.eventmesh.client.grpc.consumer.ReceiveMsgHook;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport io.cloudevents.CloudEvent;\n\npublic class CloudEventsAsyncSubscribe implements ReceiveMsgHook<CloudEvent> {\n    public static CloudEventsAsyncSubscribe handler = new CloudEventsAsyncSubscribe();\n    public static void main(String[] args) throws InterruptedException {\n        /* ... */\n        SubscriptionItem subscriptionItem = new SubscriptionItem(\n          "eventmesh-async-topic",\n          SubscriptionMode.CLUSTERING,\n          SubscriptionType.ASYNC\n        );\n        EventMeshGrpcConsumer eventMeshGrpcConsumer = new EventMeshGrpcConsumer(eventMeshClientConfig);\n\n        eventMeshGrpcConsumer.init();\n        eventMeshGrpcConsumer.registerListener(handler);\n        eventMeshGrpcConsumer.subscribe(Collections.singletonList(subscriptionItem));\n        /* ... */\n        eventMeshGrpcConsumer.unsubscribe(Collections.singletonList(subscriptionItem));\n    }\n\n    @Override\n    public Optional<CloudEvent> handle(CloudEvent message) {\n      log.info("Messaged received: {}", message);\n      return Optional.empty();\n    }\n\n    @Override\n    public String getProtocolType() {\n      return EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME;\n    }\n}\n')),(0,o.kt)("h3",{id:"webhook-consumer"},"Webhook Consumer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcConsumer")," class accepts a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," that defines the topics to be subscribed and an optional callback URL. If the callback URL is provided, the EventMesh runtime will send a POST request that contains the message in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents format")," to the callback URL. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/grpc/sub/app/controller/SubController.java"},(0,o.kt)("inlineCode",{parentName:"a"},"SubController.java")," file")," implements a Spring Boot controller that receives and parses the callback messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.grpc.consumer.EventMeshGrpcConsumer;\nimport org.apache.eventmesh.client.grpc.consumer.ReceiveMsgHook;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\n\n@Component\npublic class SubService implements InitializingBean {\n  final String url = "http://localhost:8080/callback";\n\n  public void afterPropertiesSet() throws Exception {\n    /* ... */\n    eventMeshGrpcConsumer = new EventMeshGrpcConsumer(eventMeshClientConfig);\n    eventMeshGrpcConsumer.init();\n\n    SubscriptionItem subscriptionItem = new SubscriptionItem(\n      "eventmesh-async-topic",\n      SubscriptionMode.CLUSTERING,\n      SubscriptionType.ASYNC\n    );\n\n    eventMeshGrpcConsumer.subscribe(Collections.singletonList(subscriptionItem), url);\n    /* ... */\n    eventMeshGrpcConsumer.unsubscribe(Collections.singletonList(subscriptionItem), url);\n  }\n}\n')),(0,o.kt)("h2",{id:"grpc-producer"},"gRPC Producer"),(0,o.kt)("h3",{id:"asynchronous-producer"},"Asynchronous Producer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcProducer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method accepts the message to be published and an optional timeout value. The message should be an instance of either of these classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nEventMeshGrpcProducer eventMeshGrpcProducer = new EventMeshGrpcProducer(eventMeshClientConfig);\neventMeshGrpcProducer.init();\n\nMap<String, String> content = new HashMap<>();\ncontent.put("content", "testAsyncMessage");\n\nCloudEvent event = CloudEventBuilder.v1()\n  .withId(UUID.randomUUID().toString())\n  .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n  .withSource(URI.create("/"))\n  .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n  .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n  .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n  .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n  .build();\neventMeshGrpcProducer.publish(event);\n')),(0,o.kt)("h3",{id:"synchronous-producer"},"Synchronous Producer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcProducer")," class implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"requestReply")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"requestReply")," method accepts the message to be published and an optional timeout value. The method returns the message returned from the consumer. The message should be an instance of either of these classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent"))),(0,o.kt)("h3",{id:"batch-producer"},"Batch Producer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshGrpcProducer")," class overloads the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method, which accepts a list of messages to be published and an optional timeout value. The messages in the list should be an instance of either of these classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nList<CloudEvent> cloudEventList = new ArrayList<>();\nfor (int i = 0; i < 5; i++) {\n  CloudEvent event = CloudEventBuilder.v1()\n    .withId(UUID.randomUUID().toString())\n    .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n    .withSource(URI.create("/"))\n    .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n    .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n    .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n    .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n    .build();\n\n  cloudEventList.add(event);\n}\n\neventMeshGrpcProducer.publish(cloudEventList);\n/* ... */\n')))}u.isMDXComponent=!0}}]);