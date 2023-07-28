"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[387],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=m(n),k=a,g=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(g,p(p({ref:e},o),{},{components:n})):r.createElement(g,p({ref:e},o))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:a,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={},p="Event Bridge",i={unversionedId:"design-document/event-bridge",id:"version-v1.6.0/design-document/event-bridge",title:"Event Bridge",description:"event-bridge",source:"@site/versioned_docs/version-v1.6.0/design-document/09-event-bridge.md",sourceDirName:"design-document",slug:"/design-document/event-bridge",permalink:"/zh/docs/v1.6.0/design-document/event-bridge",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.6.0/design-document/09-event-bridge.md",tags:[],version:"v1.6.0",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service Provider Interface",permalink:"/zh/docs/v1.6.0/design-document/spi"},next:{title:"Observe Metrics with Prometheus",permalink:"/zh/docs/v1.6.0/design-document/prometheus"}},u={},m=[{value:"01 \u8fdc\u7a0b\u8ba2\u9605",id:"01-\u8fdc\u7a0b\u8ba2\u9605",level:2},{value:"02 \u672c\u5730\u8ba2\u9605",id:"02-\u672c\u5730\u8ba2\u9605",level:2},{value:"03 \u53d1\u9001\u6d88\u606f",id:"03-\u53d1\u9001\u6d88\u606f",level:2},{value:"04\u8fdc\u7a0b\u53bb\u8ba2\u9605",id:"04\u8fdc\u7a0b\u53bb\u8ba2\u9605",level:2},{value:"05\u672c\u5730\u53bb\u8ba2\u9605",id:"05\u672c\u5730\u53bb\u8ba2\u9605",level:2}],o={toc:m};function s(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,r.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-bridge"},"Event Bridge"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"event-bridge",src:n(1699).Z,width:"2565",height:"897"})),(0,a.kt)("p",null,"Event Bridge \u53ef\u4ee5\u652f\u6301\u8de8mesh\u96c6\u7fa4\u7684\u6d88\u606f\u6295\u9012\uff0c\u4e0b\u9762\u5c55\u793a\u8fd9\u4e00\u529f\u80fd\u7684\u8be6\u7ec6\u8bbe\u8ba1\u4e0e\u4f53\u9a8c\u6b65\u9aa4"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"event-bridge-detail",src:n(6897).Z,width:"2315",height:"1648"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5728\u672c\u5730\u4f53\u9a8c\u8fd9\u4e00\u529f\u80fd\u65f6\u9700\u8981\u542f\u52a8\u4e24\u53f0eventmesh\u5b9e\u4f8b\uff0c\u540c\u65f6\u8981\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime"),"\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),"\u6587\u4ef6\u4e2d\u7684\u7aef\u53e3\u914d\u7f6e\uff0c\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002\u4fbf\u4e8e\u4e0b\u6587\u63cf\u8ff0\uff0cevent-bridge\u7279\u6027\u6309\u7167\u4e0a\u56fe\u4fe1\u606f\u8fdb\u884c\u8868\u8ff0\u3002")),(0,a.kt)("h2",{id:"01-\u8fdc\u7a0b\u8ba2\u9605"},"01 \u8fdc\u7a0b\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63cf\u8ff0"),"\uff1a\u5411cluster2 eventmesh\u53d1\u8d77\u8fdc\u7a0b\u8ba2\u9605\u6307\u4ee4\uff0ccluster2 eventmesh\u6536\u5230\u6307\u4ee4\u540e\u4f1a\u643a\u5e26\u8ba2\u9605\u4fe1\u606f\u8c03\u7528cluster1 eventmesh\u7684\u672c\u5730\u8ba2\u9605\u63a5\u53e3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://{cluster2 address}/eventmesh/subscribe/remote"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),"\uff1aPOST"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570\uff1a"),"application/json \u683c\u5f0f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605url\u4fe1\u606f\uff0c\u6682\u65f6\u65e0\u7528\uff0c\u540e\u7eed\u53ef\u79fb\u9664\uff0c\u76ee\u524d\u4ec5\u4e3a\u5f3a\u6821\u9a8c\uff0c\u5b9e\u9645\u4f1a\u88ab\uff08/eventmesh/bridge/publish\uff09\u66ff\u6362")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6d88\u8d39\u7ec4\u4fe1\u606f\uff0c\u5b9e\u9645\u4f1a\u88abcluster2\u7684eventmesh\u914d\u7f6e\u4fe1\u606f\u66ff\u6362")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605\u4fe1\u606f\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6d88\u8d39\u6a21\u5f0f\uff0c\u5206\u4e3a\u96c6\u7fa4\u6a21\u5f0f\u548c\u5e7f\u64ad\u6a21\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605\u7684topic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6d88\u8d39\u7c7b\u578b\uff0c\u5206\u4e3a\u540c\u6b65\u548c\u5f02\u6b65")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"remoteMesh"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8fdc\u7a0bmesh\u5730\u5740\uff0c\u4f18\u5148\u6839\u636etopic\u4ece\u6ce8\u518c\u4e2d\u5fc3\u83b7\u53d6\uff0c\u83b7\u53d6\u4e0d\u5230\u4f7f\u7528\u8be5\u5b57\u6bb5\u66ff\u6362")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6837\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "http://127.0.0.1:8088/sub/test",\n  "consumerGroup": "TEST-GROUP",\n  "topic": [\n    {\n      "mode": "CLUSTERING",\n      "topic": "TEST-TOPIC-HTTP-ASYNC",\n      "type": "ASYNC"\n    }\n  ],\n  "remoteMesh" : "http://127.0.0.1:10105/eventmesh/subscribe/local"\n}\n')),(0,a.kt)("h2",{id:"02-\u672c\u5730\u8ba2\u9605"},"02 \u672c\u5730\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63cf\u8ff0"),"\uff1a\u5411cluster2\u7684EventMesh\u5b9e\u4f8b\u53d1\u8d77\u672c\u5730\u8ba2\u9605\u6307\u4ee4\uff0ccluster2\u7684EventMesh\u6536\u5230\u8ba2\u9605\u6307\u4ee4\u540e\u4f1a\u542f\u52a8\u672c\u5730\u76d1\u542c\u4eceevent store\u6536\u4e0b\u6765\u7684\u6d88\u606f\uff0c\u5e76\u63a8\u9001\u7ed9\u8ba2\u9605\u4fe1\u606f\u4e2d\u7684url\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://{cluster2 address}/eventmesh/subscribe/local"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),"\uff1aPOST"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570\uff1a"),"application/json \u683c\u5f0f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605url\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6d88\u8d39\u7ec4\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605\u4fe1\u606f\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6d88\u8d39\u6a21\u5f0f\uff0c\u5206\u4e3a\u96c6\u7fa4\u6a21\u5f0f\u548c\u5e7f\u64ad\u6a21\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605\u7684topic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6d88\u8d39\u7c7b\u578b\uff0c\u5206\u4e3a\u540c\u6b65\u548c\u5f02\u6b65")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6837\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "url": "http://127.0.0.1:8088/sub/test",\n  "consumerGroup": "TEST-GROUP",\n  "topic": [\n    {\n      "mode": "CLUSTERING",\n      "topic": "TEST-TOPIC-HTTP-ASYNC",\n      "type": "ASYNC"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"03-\u53d1\u9001\u6d88\u606f"},"03 \u53d1\u9001\u6d88\u606f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63cf\u8ff0"),"\uff1a\u5411cluster1\u7684EventMesh\u5b9e\u4f8b\u53d1\u9001\u6d88\u606f\uff0ccluster1\u7684EventMesh\u6536\u5230\u6d88\u606f\u540e\u4f1a\u53d1\u9001\u5230event store\uff0c\u518d\u4eceevent store\u6536\u4e0b\u6765\u6d88\u606f\u63a8\u9001\u7ed9cluster2\u7684EventMesh url ",(0,a.kt)("inlineCode",{parentName:"p"},"/eventmesh/bridge/publish"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://{cluster1 address}/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),"\uff1aPOST"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570\uff1a"),"application/json \u683c\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6837\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name":"test",\n    "age":"19"\n}\n')),(0,a.kt)("h2",{id:"04\u8fdc\u7a0b\u53bb\u8ba2\u9605"},"04\u8fdc\u7a0b\u53bb\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63cf\u8ff0"),"\uff1a\u5411cluster2\u7684EventMesh\u5b9e\u4f8b\u53d1\u9001\u53bb\u9664\u8ba2\u9605\u6307\u4ee4\uff0ccluster2\u7684EventMesh\u6536\u5230\u6307\u4ee4\u540e\u4f1a\u53d1\u9001cluster1\u7684EventMesh\uff0ccluster1\u7684EventMesh\u4f1a\u672c\u5730\u6267\u884c\u53bb\u9664\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://{cluster2 address}/eventmesh/unsubscribe/remote"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),"\uff1aPOST"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570\uff1a"),"application/json \u683c\u5f0f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8981\u53bb\u9664\u8ba2\u9605url\u4fe1\u606f\uff0c\u6682\u65f6\u65e0\u7528\uff0c\u540e\u7eed\u53ef\u79fb\u9664\uff0c\u76ee\u524d\u4ec5\u4e3a\u5f3a\u6821\u9a8c\uff0c\u5b9e\u9645\u4f1a\u88ab\uff08/eventmesh/bridge/publish\uff09\u66ff\u6362")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8981\u53bb\u9664\u7684\u6d88\u8d39\u7ec4\u4fe1\u606f\uff0c\u5b9e\u9645\u4f1a\u4f7f\u7528EventMesh cluster2\u7684group\u4fe1\u606f\u66ff\u6362")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605topic\u4fe1\u606f\u5217\u8868")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6837\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "consumerGroup": "EventMeshTest-consumerGroup",\n  "url": "http://127.0.0.1:8088/sub/test",\n  "topic": [\n    "TEST-TOPIC-HTTP-ASYNC"\n  ]\n}\n')),(0,a.kt)("h2",{id:"05\u672c\u5730\u53bb\u8ba2\u9605"},"05\u672c\u5730\u53bb\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63cf\u8ff0"),"\uff1a\u5411cluster2\u7684EventMesh\u5b9e\u4f8b\u53d1\u9001\u53bb\u9664\u8ba2\u9605\u6307\u4ee4\uff0ccluster2\u7684EventMesh\u6536\u5230\u6307\u4ee4\u540e\u4f1a\u672c\u5730\u6267\u884c\u53bb\u9664\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://{cluster2 address}/eventmesh/unsubscribe/local"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),"\uff1aPOST"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570\uff1a"),"application/json \u683c\u5f0f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8981\u53bb\u9664\u8ba2\u9605url\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8981\u53bb\u9664\u7684\u6d88\u8d39\u7ec4\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u8ba2\u9605topic\u4fe1\u606f\u5217\u8868")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6837\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "consumerGroup": "EventMeshTest-consumerGroup",\n  "url": "http://127.0.0.1:8088/sub/test",\n  "topic": [\n    "TEST-TOPIC-HTTP-ASYNC"\n  ]\n}\n')))}s.isMDXComponent=!0},6897:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/event-bridge-detail-5594664b853c1294bba396d00fdaa80d.png"},1699:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/eventmesh-bridge-94fe48311de2a164b839f5a127dccca5.png"}}]);