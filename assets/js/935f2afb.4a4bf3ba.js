"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to EventMesh","href":"/docs/next/introduction","docId":"introduction"},{"type":"link","label":"Development Roadmap","href":"/docs/next/roadmap","docId":"roadmap"},{"type":"category","label":"Installation and Deployment","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Import EventMesh into eclipse","href":"/docs/next/instruction/eclipse","docId":"instruction/eclipse"},{"type":"link","label":"EventMesh Store","href":"/docs/next/instruction/store","docId":"instruction/store"},{"type":"link","label":"EventMesh Store with Docker","href":"/docs/next/instruction/store-with-docker","docId":"instruction/store-with-docker"},{"type":"link","label":"EventMesh Runtime","href":"/docs/next/instruction/runtime","docId":"instruction/runtime"},{"type":"link","label":"EventMesh Runtime with Docker","href":"/docs/next/instruction/runtime-with-docker","docId":"instruction/runtime-with-docker"},{"type":"link","label":"Run our demos","href":"/docs/next/instruction/demo","docId":"instruction/demo"}]},{"type":"category","label":"EventMesh SDK for Java","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Installation","href":"/docs/next/sdk-java/intro","docId":"sdk-java/intro"},{"type":"link","label":"HTTP Protocol","href":"/docs/next/sdk-java/http","docId":"sdk-java/http"},{"type":"link","label":"TCP Protocol","href":"/docs/next/sdk-java/tcp","docId":"sdk-java/tcp"},{"type":"link","label":"gRPC Protocol","href":"/docs/next/sdk-java/grpc","docId":"sdk-java/grpc"}]},{"type":"category","label":"Design Document","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Workflow","href":"/docs/next/design-document/workflow","docId":"design-document/workflow"},{"type":"link","label":"EventMesh Runtime Protocol","href":"/docs/next/design-document/runtime-protocol","docId":"design-document/runtime-protocol"},{"type":"link","label":"EventMesh Stream","href":"/docs/next/design-document/stream","docId":"design-document/stream"},{"type":"link","label":"EventMesh Schema Registry (OpenSchema)","href":"/docs/next/design-document/schema-registry","docId":"design-document/schema-registry"},{"type":"link","label":"EventMesh Metrics (OpenTelemetry and Prometheus)","href":"/docs/next/design-document/metrics-export","docId":"design-document/metrics-export"},{"type":"link","label":"CloudEvents Integration","href":"/docs/next/design-document/cloudevents","docId":"design-document/cloudevents"},{"type":"link","label":"Distributed Tracing","href":"/docs/next/design-document/tracing","docId":"design-document/tracing"},{"type":"link","label":"Service Provider Interface","href":"/docs/next/design-document/spi","docId":"design-document/spi"},{"type":"link","label":"Event Bridge","href":"/docs/next/design-document/event-bridge","docId":"design-document/event-bridge"},{"type":"link","label":"Knative Connector","href":"/docs/next/design-document/knative-connector","docId":"design-document/knative-connector"},{"type":"link","label":"Observe Metrics with Prometheus","href":"/docs/next/design-document/prometheus","docId":"design-document/prometheus"},{"type":"link","label":"Collect Trace with Zipkin","href":"/docs/next/design-document/zipkin","docId":"design-document/zipkin"},{"type":"link","label":"Collect Trace with Jaeger","href":"/docs/next/design-document/jaeger","docId":"design-document/jaeger"},{"type":"link","label":"HTTPS","href":"/docs/next/design-document/https","docId":"design-document/https"},{"type":"link","label":"Use Webhook to subscribe events","href":"/docs/next/design-document/webhook","docId":"design-document/webhook"}]},{"type":"category","label":"Upgrade Guide","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Upgrade Guide","href":"/docs/next/upgrade-guide/upgrade-guide","docId":"upgrade-guide/upgrade-guide"}]}]},"docs":{"design-document/cloudevents":{"id":"design-document/cloudevents","title":"CloudEvents Integration","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/event-bridge":{"id":"design-document/event-bridge","title":"Event Bridge","description":"event-bridge","sidebar":"tutorialSidebar"},"design-document/https":{"id":"design-document/https","title":"HTTPS","description":"1. Configuration in eventmesh-runtime","sidebar":"tutorialSidebar"},"design-document/jaeger":{"id":"design-document/jaeger","title":"Collect Trace with Jaeger","description":"Jaeger","sidebar":"tutorialSidebar"},"design-document/knative-connector":{"id":"design-document/knative-connector","title":"Knative Connector","description":"Prerequisite","sidebar":"tutorialSidebar"},"design-document/metrics-export":{"id":"design-document/metrics-export","title":"EventMesh Metrics (OpenTelemetry and Prometheus)","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/prometheus":{"id":"design-document/prometheus","title":"Observe Metrics with Prometheus","description":"Prometheus","sidebar":"tutorialSidebar"},"design-document/runtime-protocol":{"id":"design-document/runtime-protocol","title":"EventMesh Runtime Protocol","description":"TCP Protocol","sidebar":"tutorialSidebar"},"design-document/schema-registry":{"id":"design-document/schema-registry","title":"EventMesh Schema Registry (OpenSchema)","description":"Overview of Schema and Schema Registry","sidebar":"tutorialSidebar"},"design-document/spi":{"id":"design-document/spi","title":"Service Provider Interface","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/stream":{"id":"design-document/stream","title":"EventMesh Stream","description":"Overview of Event Streaming","sidebar":"tutorialSidebar"},"design-document/tracing":{"id":"design-document/tracing","title":"Distributed Tracing","description":"Overview of OpenTelemetry","sidebar":"tutorialSidebar"},"design-document/webhook":{"id":"design-document/webhook","title":"Use Webhook to subscribe events","description":"Webhook usage process","sidebar":"tutorialSidebar"},"design-document/workflow":{"id":"design-document/workflow","title":"EventMesh Workflow","description":"Business Problem","sidebar":"tutorialSidebar"},"design-document/zipkin":{"id":"design-document/zipkin","title":"Collect Trace with Zipkin","description":"Zipkin","sidebar":"tutorialSidebar"},"instruction/demo":{"id":"instruction/demo","title":"Run our demos","description":"Maven Central","sidebar":"tutorialSidebar"},"instruction/eclipse":{"id":"instruction/eclipse","title":"Import EventMesh into eclipse","description":"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Intellij IDEA \u8fdb\u884c\u5f00\u53d1\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u4f7f\u7528 Eclipse\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u6b65\u9aa4\u5bfc\u5165\u9879\u76ee\u3002","sidebar":"tutorialSidebar"},"instruction/runtime":{"id":"instruction/runtime","title":"EventMesh Runtime","description":"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.","sidebar":"tutorialSidebar"},"instruction/runtime-with-docker":{"id":"instruction/runtime-with-docker","title":"EventMesh Runtime with Docker","description":"The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It\'s recommended to use a Linux-based system with Docker Engine. Please follow the Docker tutorial to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker.","sidebar":"tutorialSidebar"},"instruction/store":{"id":"instruction/store","title":"EventMesh Store","description":"Dependencies","sidebar":"tutorialSidebar"},"instruction/store-with-docker":{"id":"instruction/store-with-docker","title":"EventMesh Store with Docker","description":"Dependencies","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction to EventMesh","description":"CI status","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Development Roadmap","description":"The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the release notes. The order of the features listed below doesn\'t correspond to their priorities.","sidebar":"tutorialSidebar"},"sdk-java/grpc":{"id":"sdk-java/grpc","title":"gRPC Protocol","description":"EventMesh SDK for Java implements the gRPC producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshGrpcClientConfig class that specifies the configuration of EventMesh gRPC client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/http":{"id":"sdk-java/http","title":"HTTP Protocol","description":"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of EventMeshHttpClientConfig class that specifies the configuration of EventMesh HTTP client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/intro":{"id":"sdk-java/intro","title":"Installation","description":"Maven Central","sidebar":"tutorialSidebar"},"sdk-java/tcp":{"id":"sdk-java/tcp","title":"TCP Protocol","description":"EventMesh SDK for Java implements the TCP producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshTCPClientConfig class that specifies the configuration of EventMesh TCP client. The host and port fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"upgrade-guide/upgrade-guide":{"id":"upgrade-guide/upgrade-guide","title":"EventMesh Upgrade Guide","description":"This article briefly introduces the precautions for upgrading EventMesh from version 1.2.0 to the latest version.","sidebar":"tutorialSidebar"}}}')}}]);