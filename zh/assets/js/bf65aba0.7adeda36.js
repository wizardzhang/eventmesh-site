"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(r),h=o,d=l["".concat(c,".").concat(h)]||l[h]||m[h]||i;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},s="Observe Metrics with Prometheus",a={unversionedId:"design-document/prometheus",id:"version-v1.8.0/design-document/prometheus",title:"Observe Metrics with Prometheus",description:"Prometheus",source:"@site/versioned_docs/version-v1.8.0/design-document/11-prometheus.md",sourceDirName:"design-document",slug:"/design-document/prometheus",permalink:"/zh/docs/v1.8.0/design-document/prometheus",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/design-document/11-prometheus.md",tags:[],version:"v1.8.0",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Knative Connector",permalink:"/zh/docs/v1.8.0/design-document/knative-connector"},next:{title:"Collect Trace with Zipkin",permalink:"/zh/docs/v1.8.0/design-document/zipkin"}},c={},p=[{value:"Prometheus",id:"prometheus",level:2},{value:"Edit Prometheus Configuration",id:"edit-prometheus-configuration",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observe-metrics-with-prometheus"},"Observe Metrics with Prometheus"),(0,o.kt)("h2",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus")," is an open-source system monitoring and alerting toolkit that collects and stores the metrics as time-series data. EventMesh exposes a collection of metrics data that could be scraped and analyzed by Prometheus. Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/first_steps/"},'the "First steps with Prometheus" tutorial')," to download and install the latest release of Prometheus."),(0,o.kt)("h2",{id:"edit-prometheus-configuration"},"Edit Prometheus Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime/conf/prometheus.yml")," configuration file specifies the port of the metrics HTTP endpoint. The default metrics port is ",(0,o.kt)("inlineCode",{parentName:"p"},"19090"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"eventMesh.metrics.prometheus.port=19090\n")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"the Prometheus configuration guide")," to add the EventMesh metrics as a scrape target in the configuration file. Here's the minimum configuration that creates a job with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh")," and the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:19090"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'scrape_configs:\n  - job_name: "eventmesh"\n    static_configs:\n      - targets: ["localhost:19090"]\n')),(0,o.kt)("p",null,"Please navigate to the Prometheus dashboard (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),") to view the list of metrics exported by EventMesh, which are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh_"),"."))}l.isMDXComponent=!0}}]);