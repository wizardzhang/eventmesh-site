"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,h=s["".concat(u,".").concat(d)]||s[d]||c[d]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={},o="EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus",i={unversionedId:"design-document/metrics-export",id:"design-document/metrics-export",title:"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/05-metrics-export.md",sourceDirName:"design-document",slug:"/design-document/metrics-export",permalink:"/zh/docs/next/design-document/metrics-export",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/05-metrics-export.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Schema Registry (OpenSchema)",permalink:"/zh/docs/next/design-document/schema-registry"},next:{title:"CloudEvents \u96c6\u6210",permalink:"/zh/docs/next/design-document/cloudevents"}},u={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"OpenTelemetry \u6982\u8ff0",id:"opentelemetry-\u6982\u8ff0",level:2},{value:"\u6982\u8ff0 Prometheus",id:"\u6982\u8ff0-prometheus",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u529f\u80fd\u8981\u6c42",id:"\u529f\u80fd\u8981\u6c42",level:3},{value:"\u8bbe\u8ba1 \u7ec6\u8282",id:"\u8bbe\u8ba1-\u7ec6\u8282",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"eventmesh-\u6307\u6807opentelemetry-\u548c-prometheus"},"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus"),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," \u662f\u4e00\u4e2a\u52a8\u6001\u7684\u4e91\u539f\u751f\u4e8b\u4ef6\u57fa\u7840\u8bbe\u65bd."),(0,l.kt)("h2",{id:"opentelemetry-\u6982\u8ff0"},"OpenTelemetry \u6982\u8ff0"),(0,l.kt)("p",null,"OpenTelemetry \u662f\u5de5\u5177\u3001API \u548c SDK \u7684\u96c6\u5408\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u68c0\u6d4b\u3001\u751f\u6210\u3001\u6536\u96c6\u548c\u5bfc\u51fa\u9065\u6d4b\u6570\u636e\uff08\u6307\u6807\u3001\u65e5\u5fd7\u548c\u8ddf\u8e2a\uff09\u4ee5\u8fdb\u884c\u5206\u6790\uff0c\u4ee5\u4fbf\u4e86\u89e3\u60a8\u7684\u8f6f\u4ef6\u7684\u6027\u80fd\u548c\u884c\u4e3a\u3002"),(0,l.kt)("h2",{id:"\u6982\u8ff0-prometheus"},"\u6982\u8ff0 Prometheus"),(0,l.kt)("p",null,"\u4f7f\u7528\u9886\u5148\u7684\u5f00\u6e90\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u4e3a\u60a8\u7684\u6307\u6807\u548c\u8b66\u62a5\u63d0\u4f9b\u652f\u6301\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c3a\u5bf8\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u7684\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u4f1f\u5927\u7684\u53ef\u89c6\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u7cbe\u51c6\u9884\u8b66"),(0,l.kt)("li",{parentName:"ul"},"\u8bb8\u591a\u5ba2\u6237\u7aef\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u8bb8\u591a\u96c6\u6210")),(0,l.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,l.kt)("h3",{id:"\u529f\u80fd\u8981\u6c42"},"\u529f\u80fd\u8981\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,l.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe HTTP metrics from Prometheus"),(0,l.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,l.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe TCP metrics from Prometheus"),(0,l.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,l.kt)("h2",{id:"\u8bbe\u8ba1-\u7ec6\u8282"},"\u8bbe\u8ba1 \u7ec6\u8282"),(0,l.kt)("p",null,"\u4f7f\u7528\u7531\u63d0\u4f9b\u7684\u5100\u8868\u5100\u5668 OpenTelemetry \u89c0\u5bdf\u6307\u6a19\u5b58\u5728\u65bc EventMesh \u7136\u5f8c\u5c0e\u51fa\u5230 Prometheus."),(0,l.kt)("p",null,"1\u3001\u521d\u59cb\u5316\u5100\u8868\u5100\u5668"),(0,l.kt)("p",null,"2\u3001\u8a2d\u7f6e Prometheus \u670d\u52d9\u5668"),(0,l.kt)("p",null,"3\u3001\u521b\u5efa\u4e86\u4e0d\u540c\u7684\u6307\u6807\u89c2\u5bdf\u8005"),(0,l.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,l.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span")))}s.isMDXComponent=!0}}]);