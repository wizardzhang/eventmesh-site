"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[3121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="EventMesh Runtime",l={unversionedId:"instruction/runtime",id:"version-v1.3.0/instruction/runtime",title:"EventMesh Runtime",description:"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.",source:"@site/versioned_docs/version-v1.3.0/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/zh/docs/v1.3.0/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.3.0/instruction/03-runtime.md",tags:[],version:"v1.3.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Store with Docker",permalink:"/zh/docs/v1.3.0/instruction/store-with-docker"},next:{title:"EventMesh Runtime with Docker",permalink:"/zh/docs/v1.3.0/instruction/runtime-with-docker"}},s={},c=[{value:"1 Run on your local machine",id:"1-run-on-your-local-machine",level:2},{value:"1.1 Dependencies",id:"11-dependencies",level:3},{value:"1.2 Download Source Code",id:"12-download-source-code",level:3},{value:"1.3 Build and Load Plugins",id:"13-build-and-load-plugins",level:3},{value:"2 Remote deployment",id:"2-remote-deployment",level:2},{value:"2.1 Dependencies",id:"21-dependencies",level:3},{value:"2.2 Download",id:"22-download",level:3},{value:"2.3 Deploy",id:"23-deploy",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-runtime"},"EventMesh Runtime"),(0,r.kt)("p",null,"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+."),(0,r.kt)("p",null,"Here, we take JDK 8 as an example. JDK 8 could be installed with the system package manager or the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/openjdk"},"openjdk:8-jdk")," Docker image."),(0,r.kt)("h2",{id:"1-run-on-your-local-machine"},"1 Run on your local machine"),(0,r.kt)("h3",{id:"11-dependencies"},"1.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,r.kt)("h3",{id:"12-download-source-code"},"1.2 Download Source Code"),(0,r.kt)("p",null,"Gradle is the build automation tool used by Apache EventMesh (Incubating). Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"offical guide")," to install the latest release of Gradle."),(0,r.kt)("p",null,"Download and extract the source code of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wget https://dlcdn.apache.org/incubator/eventmesh/{version}-incubating/apache-eventmesh-{version}-incubating-source.tar.gz\n\ntar -xvzf apache-eventmesh-1.5.0-incubating-source.tar.gz\n")),(0,r.kt)("p",null,"Build the source code with Gradle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd apache-eventmesh-1.5.0-incubating-source\ngradle clean dist\n")),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,r.kt)("h3",{id:"13-build-and-load-plugins"},"1.3 Build and Load Plugins"),(0,r.kt)("p",null,"Apache EventMesh (Incubating) introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gradle Dependencies: Declare the plugins as the build dependencies in ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n   // Example: Load the RocketMQ plugin\n   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin directory: EventMesh loads the plugins in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory based on ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh.properties"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"installPlugin")," task of Gradle builds and moves the plugins into the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,r.kt)("h2",{id:"2-remote-deployment"},"2 Remote deployment"),(0,r.kt)("h3",{id:"21-dependencies"},"2.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,r.kt)("h3",{id:"22-download"},"2.2 Download"),(0,r.kt)("p",null,"Download and extract the executable binaries of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"wget https://dlcdn.apache.org/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-bin.tar.gz\n\ntar -xvzf apache-eventmesh-1.5.0-incubating-bin.tar.gz\n")),(0,r.kt)("h3",{id:"23-deploy"},"2.3 Deploy"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. The executable binaries contain all plugins in the bundle, thus there's no need to build them from source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd apache-eventmesh-1.5.0-incubating\nvim conf/eventmesh.properties\n")),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")))}d.isMDXComponent=!0}}]);