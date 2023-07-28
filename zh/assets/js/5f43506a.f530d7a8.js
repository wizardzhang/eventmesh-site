"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[7960],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="EventMesh Workflow",s={unversionedId:"design-document/workflow",id:"version-v1.7.0/design-document/workflow",title:"EventMesh Workflow",description:"Business Problem",source:"@site/versioned_docs/version-v1.7.0/design-document/01-workflow.md",sourceDirName:"design-document",slug:"/design-document/workflow",permalink:"/zh/docs/v1.7.0/design-document/workflow",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.7.0/design-document/01-workflow.md",tags:[],version:"v1.7.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC Protocol",permalink:"/zh/docs/v1.7.0/sdk-java/grpc"},next:{title:"EventMesh Runtime Protocol",permalink:"/zh/docs/v1.7.0/design-document/runtime-protocol"}},l={},c=[{value:"Business Problem",id:"business-problem",level:2},{value:"CNCF Serverless Workflow",id:"cncf-serverless-workflow",level:2},{value:"EventMesh Workflow",id:"eventmesh-workflow-1",level:2},{value:"AsyncAPI",id:"asyncapi",level:3},{value:"Workflow Example",id:"workflow-example",level:3},{value:"EventMesh Workflow Engine",id:"eventmesh-workflow-engine",level:2},{value:"EventMesh Catalog Design",id:"eventmesh-catalog-design",level:3},{value:"EventMesh Workflow Engine Design",id:"eventmesh-workflow-engine-design",level:3}],p={toc:c};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-workflow"},"EventMesh Workflow"),(0,a.kt)("h2",{id:"business-problem"},"Business Problem"),(0,a.kt)("p",null,"Imaging you are building a simple Order Management System for an E-Commerce Store. The system should be able to receive and provision new orders from a store website. The provisioning process should be able to process all orders, handle payments, as well as process shipments."),(0,a.kt)("p",null,"For high availability and high performance, you architect the system using event-driven architecture (EDA), and build microservice apps to handle store frontend, order management, payment processing, and shipment management. You deploy the whole system in a cloud environment. To handle high workloads, you leverage a messaging system to buffer the loads, and scale up multiple instances of microservices. The architecture could look similar to:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow Use Case",src:t(2317).Z,width:"1621",height:"908"})),(0,a.kt)("p",null,"While each microservice is acting on its own event channels, EventMesh plays a crucial role of doing Event Orchestration."),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://serverlessworkflow.io/"},"CNCF Serverless Workflow")," to describe this Event Workflow Orchestration."),(0,a.kt)("h2",{id:"cncf-serverless-workflow"},"CNCF Serverless Workflow"),(0,a.kt)("p",null,"CNCF Serverless Workflow defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain."),(0,a.kt)("p",null,"Serverless Workflow defines a Domain Specific Language (DSL) to describe stateful and stateless workflow-based orchestrations of serverless functions and microservices."),(0,a.kt)("p",null,"More details could be found in its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverlessworkflow/specification"},"official github site")),(0,a.kt)("h2",{id:"eventmesh-workflow-1"},"EventMesh Workflow"),(0,a.kt)("p",null,"We leverage Serverless Workflow DSL to describe the EventMesh workflow. Based on its spec, the workflow is consists of a series of workflow states used to describe the control-flow logic. At this time we only support event related workflow states. See the supported states in ",(0,a.kt)("a",{parentName:"p",href:"#workflow-dsl-design-wip"},"Workflow DSL Design"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow state")," can include applicable ",(0,a.kt)("inlineCode",{parentName:"p"},"actions"),", or services/functions that should be invoked during workflow execution. These ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," can reference reusable ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," definitions which define how these functions/services should be invoked. They can also reference events that trigger event-based service invocations, and events to wait for that denote completion of such event-based service invocation completion."),(0,a.kt)("p",null,"In EDA solution, we usually defined our event-driven microservice using AsyncAPI. Serverless workflow ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," definitions support defining invocation semantics using AsyncAPI. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverlessworkflow/specification/blob/main/specification.md#using-functions-for-async-api-service-invocations"},"Using Funtions for AsyncAPI Service")," for more information."),(0,a.kt)("h3",{id:"asyncapi"},"AsyncAPI"),(0,a.kt)("p",null,"AsyncAPI is an open source initiative that seeks to improve the current state of Event-Driven Architectures (EDA).\nOur long-term goal is to make working with EDAs as easy as it is to work with REST APIs.\nThat goes from documentation to code generation, discovery to event management.\nMost of the processes you apply to your REST APIs nowadays would be applicable to your event-driven/asynchronous APIs too."),(0,a.kt)("p",null,"See AsyncAPI detail in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/guides"},"official site")),(0,a.kt)("h3",{id:"workflow-example"},"Workflow Example"),(0,a.kt)("p",null,"In this example, we build the event-driven workflow of the Order management system above."),(0,a.kt)("p",null,"First, we need to define AsyncAPI definitions for our microservice apps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Online Store App")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Online Store application\n  version: '0.1.0'\nchannels:\n  store/order:\n    subscribe:\n      operationId: newStoreOrder\n      message:\n        $ref : '#/components/NewOrder'\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Order Service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Order Service\n  version: '0.1.0'\nchannels:\n  order/inbound:\n    publish:\n      operationId: sendOrder\n      message:\n        $ref : '#/components/Order'\n  order/outbound:\n    subscribe:\n      operationId: processedOrder\n      message:\n        $ref : '#/components/Order'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Payment Service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Payment Service\n  version: '0.1.0'\nchannels:\n  payment/inbound:\n    publish:\n      operationId: sendPayment\n      message:\n        $ref : '#/components/OrderPayment'\n  payment/outbound:\n    subscribe:\n      operationId: paymentReceipt\n      message:\n        $ref : '#/components/OrderPayment'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shipment Service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Shipment Service\n  version: '0.1.0'\nchannels:\n  shipment/inbound:\n    publish:\n      operationId: sendShipment\n      message:\n        $ref : '#/components/OrderShipment'\n")),(0,a.kt)("p",null,"Once that is defined, we define the order workflow that describes our Order Management business logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: storeorderworkflow\nversion: '1.0'\nspecVersion: '0.8'\nname: Store Order Management Workflow\nstates:\n  - name: Receive New Order Event\n    type: event\n    onEvents:\n      - eventRefs:\n          - NewOrderEvent\n        actions:\n          - eventRef:\n              triggerEventRef: OrderServiceSendEvent\n              resultEventRef: OrderServiceResultEvent\n          - eventRef:\n              triggerEventRef: PaymentServiceSendEvent\n              resultEventRef: PaymentServiceResultEvent\n    transition: Check Payment Status\n  - name: Check Payment Status\n    type: switch\n    dataConditions:\n      - name: Payment Successfull\n        condition: \"${ .payment.status == 'success' }\"\n        transition: Send Order Shipment\n      - name: Payment Denied\n        condition: \"${ .payment.status == 'denied' }\"\n        end: true\n    defaultCondition:\n      end: true\n  - name: Send Order Shipment\n    type: operation\n    actions:\n      - eventRef:\n          triggerEventRef: ShipmentServiceSendEvent\n    end: true\nevents:\n  - name: NewOrderEvent\n    source: file://onlineStoreApp.yaml#newStoreOrder\n    type: asyncapi\n    kind: consumed\n  - name: OrderServiceSendEvent\n    source: file://orderService.yaml#sendOrder\n    type: asyncapi\n    kind: produced\n  - name: OrderServiceResultEvent\n    source: file://orderService.yaml#processedOrder\n    type: asyncapi\n    kind: consumed\n  - name: PaymentServiceSendEvent\n    source: file://paymentService.yaml#sendPayment\n    type: asyncapi\n    kind: produced\n  - name: PaymentServiceResultEvent\n    source: file://paymentService.yaml#paymentReceipt\n    type: asyncapi\n    kind: consumed\n  - name: ShipmentServiceSendEvent\n    source: file://shipmentService.yaml#sendShipment\n    type: asyncapi\n    kind: produced\n")),(0,a.kt)("p",null,"The corresponding workflow diagram is the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow Diagram",src:t(2768).Z,width:"986",height:"1236"})),(0,a.kt)("h2",{id:"eventmesh-workflow-engine"},"EventMesh Workflow Engine"),(0,a.kt)("p",null,"In the following architecture diagram, the EventMesh Catalog, EventMesh Workflow Engine and EventMesh Runtime are running in three different processors."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow Architecture",src:t(9809).Z,width:"1615",height:"907"})),(0,a.kt)("p",null,"The steps running the workflow is the followings:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy the Publisher and Subscriber Apps in the environment.\nDescribe the App APIs using AsyncAPI, generate the asyncAPI yaml.\nRegister the Publisher and Subscriber Apps in EventMesh Catalog using AsyncAPI.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Register the Serverless Workflow DSL in EventMesh Workflow Engine.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"EventMesh Workflow Engine query the EventMesh Catalog for Publisher and Subscribers required in Workflow DSL ",(0,a.kt)("inlineCode",{parentName:"p"},"function"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Event-driven Apps are publish events to EventMesh Runtime to trigger the Workflow. EventMesh Workflow Engine also publish and subscribe events for orchestrating the events."))),(0,a.kt)("h3",{id:"eventmesh-catalog-design"},"EventMesh Catalog Design"),(0,a.kt)("p",null,"EventMesh Catalog store the Publisher, Subscriber and Channel metadata. consists of the following modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AsyncAPI Parser"),(0,a.kt)("p",{parentName:"li"},"Using the SDK provided by AsyncAPI community (see ",(0,a.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/community/tooling"},"tool list"),"),\nparse and validated the AsyncAPI yaml inputs, and generate the AsyncAPI definition.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Publisher, Channel, Subscriber Modules"),(0,a.kt)("p",{parentName:"li"},"From the AsyncAPI definition store the Publisher, Subscriber and Channel information."))),(0,a.kt)("h3",{id:"eventmesh-workflow-engine-design"},"EventMesh Workflow Engine Design"),(0,a.kt)("p",null,"EventMesh Workflow Engine consists of the following modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Workflow Parser"),(0,a.kt)("p",{parentName:"li"},"Using the SDK provided by Serverless Workflow community (see supported ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverlessworkflow/specification#sdks"},"SDKs"),"),\nparse and validated the workflow DSL inputs, and generate workflow definition.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Workflow Module"),(0,a.kt)("p",{parentName:"li"},"It manages a workflow instance life cycle, from create, start, stop to destroy.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"State Module"),(0,a.kt)("p",{parentName:"li"},"It manages workflow state life cycle. We support the event-related states, and the supported state list below is Work-in-Progress."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Workflow State"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operation"),(0,a.kt)("td",{parentName:"tr",align:null},"Execute the AsyncAPI functions defined in the Actions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event"),(0,a.kt)("td",{parentName:"tr",align:null},"Check if the defined Event matched, if so execute the defined AsyncAPI functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switch"),(0,a.kt)("td",{parentName:"tr",align:null},"Check the event is matched with the event-conditions, and execute teh defined AsyncAPI functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parallel"),(0,a.kt)("td",{parentName:"tr",align:null},"Execute the defined AsyncAPI functions in parallel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ForEach"),(0,a.kt)("td",{parentName:"tr",align:null},"Iterate the inputCollection and execute the defined AsyncAPI functions"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Action Module"),(0,a.kt)("p",{parentName:"li"},"It managed the functions inside the action.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Function Module"),(0,a.kt)("p",{parentName:"li"},"It manages the AsyncAPI functions by creating the publisher and/or subscriber in EventMesh Runtime, and manage the publisher/subscriber life cycle."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"AsyncAPI Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"EventMesh Runtime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Publish"),(0,a.kt)("td",{parentName:"tr",align:null},"Publisher")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subscribe"),(0,a.kt)("td",{parentName:"tr",align:null},"Subscriber"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Event Module"),(0,a.kt)("p",{parentName:"li"},"It manages the CloudEvents data model, including event filter, correlation and transformation using the rules defined in the workflow DSL.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Retry Module"),(0,a.kt)("p",{parentName:"li"},"It manages the retry logic of the event publishing into EventMesh Runtime."))))}d.isMDXComponent=!0},9809:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/workflow-architecture-cf4b8c8a7aaa33bb0ffaf1db4cf9cb52.jpg"},2768:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/workflow-diagram-705cf9a6d5c8a5c3b465cba0a216f2a4.png"},2317:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/workflow-use-case-33b55ea03d6330c426b62a8164e6e23c.jpg"}}]);