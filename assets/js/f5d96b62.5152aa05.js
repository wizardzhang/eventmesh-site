"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[5376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="EventMesh Store",s={unversionedId:"instruction/store",id:"version-v1.8.0/instruction/store",title:"EventMesh Store",description:"Dependencies",source:"@site/versioned_docs/version-v1.8.0/instruction/01-store.md",sourceDirName:"instruction",slug:"/instruction/store",permalink:"/docs/instruction/store",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/instruction/01-store.md",tags:[],version:"v1.8.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Development Roadmap",permalink:"/docs/roadmap"},next:{title:"EventMesh Store with Docker",permalink:"/docs/instruction/store-with-docker"}},l={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Download",id:"download",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Start Name Server",id:"start-name-server",level:3},{value:"Start Broker",id:"start-broker",level:3},{value:"Reference",id:"reference",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eventmesh-store"},"EventMesh Store"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"Download the Binary code (recommended: 4.9.*) from ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/download/"},"RocketMQ Official"),". Here we take 4.9.4 as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.4-bin-release.zip\ncd rocketmq-4.9.4/\n")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("h3",{id:"start-name-server"},"Start Name Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nohup sh bin/mqnamesrv &\ntail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("h3",{id:"start-broker"},"Start Broker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,"The deployment of eventmesh-store has finished, please go to the next step: ",(0,o.kt)("a",{parentName:"p",href:"02-runtime.md"},"Start Eventmesh-Runtime")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"For more details about RocketMQ, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/")))}d.isMDXComponent=!0}}]);