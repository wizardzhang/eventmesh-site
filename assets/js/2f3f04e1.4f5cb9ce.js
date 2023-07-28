"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[8876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Distributed Tracing",s={unversionedId:"design-document/tracing",id:"version-v1.7.0/design-document/tracing",title:"Distributed Tracing",description:"Overview of OpenTelemetry",source:"@site/versioned_docs/version-v1.7.0/design-document/07-tracing.md",sourceDirName:"design-document",slug:"/design-document/tracing",permalink:"/docs/v1.7.0/design-document/tracing",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.7.0/design-document/07-tracing.md",tags:[],version:"v1.7.0",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CloudEvents Integration",permalink:"/docs/v1.7.0/design-document/cloudevents"},next:{title:"Service Provider Interface",permalink:"/docs/v1.7.0/design-document/spi"}},l={},p=[{value:"Overview of OpenTelemetry",id:"overview-of-opentelemetry",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Design Details",id:"design-details",level:2},{value:"Problems",id:"problems",level:2},{value:"How to set different exporter in class &#39;OpenTelemetryTraceFactory&#39;? (Solved)",id:"how-to-set-different-exporter-in-class-opentelemetrytracefactory-solved",level:3},{value:"Solutions",id:"solutions",level:2},{value:"Solution of different exporter",id:"solution-of-different-exporter",level:3},{value:"Improvement of different exporter",id:"improvement-of-different-exporter",level:4},{value:"Appendix",id:"appendix",level:2},{value:"References",id:"references",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distributed-tracing"},"Distributed Tracing"),(0,o.kt)("h2",{id:"overview-of-opentelemetry"},"Overview of OpenTelemetry"),(0,o.kt)("p",null,"OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"set tracer"),(0,o.kt)("li",{parentName:"ul"},"different exporter"),(0,o.kt)("li",{parentName:"ul"},"start and end span in server")),(0,o.kt)("h2",{id:"design-details"},"Design Details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SpanProcessor: BatchSpanProcessor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Exporter: log(default), would be changed from properties"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Configure the batch spans processor. This span processor exports span in batches.\nBatchSpanProcessor batchSpansProcessor =\n    BatchSpanProcessor.builder(exporter)\n        .setMaxExportBatchSize(512) // set the maximum batch size to use\n        .setMaxQueueSize(2048) // set the queue size. This must be >= the export batch size\n        .setExporterTimeout(\n            30, TimeUnit.SECONDS) // set the max amount of time an export can run before getting\n        // interrupted\n        .setScheduleDelay(5, TimeUnit.SECONDS) // set time between two different exports\n        .build();\nOpenTelemetrySdk.builder()\n    .setTracerProvider(\n        SdkTracerProvider.builder().addSpanProcessor(batchSpansProcessor).build())\n    .build();\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'When using the method \'init()\' of the class "EventMeshHTTPServer", the class "AbstractHTTPServer\u201d will get the tracer')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"super.openTelemetryTraceFactory = new OpenTelemetryTraceFactory(eventMeshHttpConfiguration);\nsuper.tracer = openTelemetryTraceFactory.getTracer(this.getClass().toString());\nsuper.textMapPropagator = openTelemetryTraceFactory.getTextMapPropagator();\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'then the trace in class "AbstractHTTPServer\u201d will work.')),(0,o.kt)("h2",{id:"problems"},"Problems"),(0,o.kt)("h3",{id:"how-to-set-different-exporter-in-class-opentelemetrytracefactory-solved"},"How to set different exporter in class 'OpenTelemetryTraceFactory'? (Solved)"),(0,o.kt)("p",null,"After I get the exporter type from properties, how to deal with it."),(0,o.kt)("p",null,"The 'logExporter' only needs to new it."),(0,o.kt)("p",null,"But the 'zipkinExporter' needs to new and use the \"getZipkinExporter()\" method."),(0,o.kt)("h2",{id:"solutions"},"Solutions"),(0,o.kt)("h3",{id:"solution-of-different-exporter"},"Solution of different exporter"),(0,o.kt)("p",null,"Use reflection to get an exporter."),(0,o.kt)("p",null,"First of all, different exporter must implement the interface 'EventMeshExporter'."),(0,o.kt)("p",null,"Then we get the exporter name from the configuration and reflect to the class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'//different spanExporter\nString exporterName = configuration.eventMeshTraceExporterType;\n//use reflection to get spanExporter\nString className = String.format("org.apache.eventmesh.runtime.exporter.%sExporter",exporterName);\nEventMeshExporter eventMeshExporter = (EventMeshExporter) Class.forName(className).newInstance();\nspanExporter = eventMeshExporter.getSpanExporter(configuration);\n')),(0,o.kt)("p",null,"Additional, this will surround with try catch.If the specified exporter cannot be obtained successfully, the default exporter log will be used instead"),(0,o.kt)("h4",{id:"improvement-of-different-exporter"},"Improvement of different exporter"),(0,o.kt)("p",null,"SPI (To be completed)"),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/netty"},"https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/netty")))}u.isMDXComponent=!0}}]);