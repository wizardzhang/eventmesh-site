"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9857],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},o="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),o=m(a),h=r,k=o["".concat(i,".").concat(h)]||o[h]||d[h]||l;return a?n.createElement(k,p(p({ref:e},u),{},{components:a})):n.createElement(k,p({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=h;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[o]="string"==typeof t?t:r,p[1]=s;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1204:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},p="Development Roadmap",s={unversionedId:"roadmap",id:"version-v1.4.0/roadmap",title:"Development Roadmap",description:"The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the release notes. The order of the features listed below doesn't correspond to their priorities.",source:"@site/versioned_docs/version-v1.4.0/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/v1.4.0/roadmap",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.4.0/roadmap.md",tags:[],version:"v1.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction to EventMesh",permalink:"/docs/v1.4.0/introduction"},next:{title:"EventMesh Store",permalink:"/docs/v1.4.0/instruction/store"}},i={},m=[{value:"List of Features and Milestones",id:"list-of-features-and-milestones",level:2}],u={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-roadmap"},"Development Roadmap"),(0,r.kt)("p",null,"The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/v1.4.0"},"release notes"),". The order of the features listed below doesn't correspond to their priorities."),(0,r.kt)("h2",{id:"list-of-features-and-milestones"},"List of Features and Milestones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support TCP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pub/Sub Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Java SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support RocketMQ as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenSchema"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support CloudEvents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.4.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Golang SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Nacos Registry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support  Federal Government"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with Consul"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Webhook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support etcd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Knative Eventing Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/790"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-463"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pravega as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/270"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Kafka as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pulsar as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support CNCF Serverless Workflow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Redis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Rust SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/815"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Zookeeper"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support RabbitMQ as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/1553"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.8.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/700"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-465"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Source/Sink Connector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/3492"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"K8s integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/3327"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"OpenFunction integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/2040"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSergo integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/2805"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/697"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide NodeJS SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide PHP    SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/1193"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Event Query Language (EQL)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/778"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"WebAssembly Runtime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-eventmesh/issues/576"},"GitHub Issue"))))))}o.isMDXComponent=!0}}]);