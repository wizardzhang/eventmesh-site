"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[1883],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=l,s=m["".concat(u,".").concat(g)]||m[g]||k[g]||r;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10999:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={},i="Use Webhook to subscribe events",o={unversionedId:"design-document/event-handling-and-integration/webhook",id:"design-document/event-handling-and-integration/webhook",title:"Use Webhook to subscribe events",description:"Webhook usage process",source:"@site/docs/design-document/01-event-handling-and-integration/05-webhook.md",sourceDirName:"design-document/01-event-handling-and-integration",slug:"/design-document/event-handling-and-integration/webhook",permalink:"/docs/next/design-document/event-handling-and-integration/webhook",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/01-event-handling-and-integration/05-webhook.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Bridge",permalink:"/docs/next/design-document/event-handling-and-integration/event-bridge"},next:{title:"EventMesh Workflow",permalink:"/docs/next/design-document/event-handling-and-integration/workflow"}},u={},p=[{value:"Webhook usage process",id:"webhook-usage-process",level:2},{value:"The first step: Configure Webhook related information in eventmesh and start",id:"the-first-step-configure-webhook-related-information-in-eventmesh-and-start",level:3},{value:"The second step: Add Webhook configuration information",id:"the-second-step-add-webhook-configuration-information",level:3},{value:"Add WebHook config",id:"add-webhook-config",level:4},{value:"Query WebHook config by callback path",id:"query-webhook-config-by-callback-path",level:4},{value:"Query WebHook config by manufacturer",id:"query-webhook-config-by-manufacturer",level:4},{value:"Update WebHook config",id:"update-webhook-config",level:4},{value:"Delete WebHook config",id:"delete-webhook-config",level:4},{value:"The third step: Check if the configuration is successful",id:"the-third-step-check-if-the-configuration-is-successful",level:3},{value:"The fourth step: Configure the consumer of cloudevent",id:"the-fourth-step-configure-the-consumer-of-cloudevent",level:3},{value:"The fifth step: Configure Webhook related information in the manufacturer",id:"the-fifth-step-configure-webhook-related-information-in-the-manufacturer",level:3},{value:"Manufacturer&#39;s Webhook operation instructions",id:"manufacturers-webhook-operation-instructions",level:2},{value:"GitHub sign up",id:"github-sign-up",level:3},{value:"The first step: Enter the corresponding project",id:"the-first-step-enter-the-corresponding-project",level:4},{value:"The second step: click setting",id:"the-second-step-click-setting",level:4},{value:"The third step: click Webhooks",id:"the-third-step-click-webhooks",level:4},{value:"The fourth step: Click on Add Webhook",id:"the-fourth-step-click-on-add-webhook",level:4},{value:"The fifth step: Fill in the Webhook information",id:"the-fifth-step-fill-in-the-webhook-information",level:4}],d={toc:p};function m(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"use-webhook-to-subscribe-events"},"Use Webhook to subscribe events"),(0,l.kt)("h2",{id:"webhook-usage-process"},"Webhook usage process"),(0,l.kt)("h3",{id:"the-first-step-configure-webhook-related-information-in-eventmesh-and-start"},"The first step: Configure Webhook related information in eventmesh and start"),(0,l.kt)("p",null,"Configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Webhook HTTP payload listening port\neventMesh.server.http.port=10105\n# Webhook config admin port\neventMesh.server.admin.http.port=10106\n\n# Whether to start the Webhook admin service\neventMesh.webHook.admin.start=true\n\n# Webhook event configuration storage mode. But currently only supports file and nacos\neventMesh.webHook.operationMode=file\n\n# The file path of fileMode. If you write #{eventMeshHome}, in the eventMesh root directory\neventMesh.webHook.fileMode.filePath= #{eventMeshHome}/webhook\n\n# The nacos storage mode. The configuration naming rule is eventMesh.webHook.nacosMode.{nacos native configuration key} For the specific configuration, please see [nacos github api](https://github.com/alibaba/nacos/blob/develop/api/src/main/java /com/alibaba/nacos/api/SystemPropertyKeyConst.java)\n## address of nacos\neventMesh.webHook.nacosMode.serverAddr=127.0.0.1:8848\n\n# Webhook CloudEvent sending mode. This property is the same as the eventMesh.storage.plugin.type configuration.\neventMesh.webHook.producer.connector=standalone\n")),(0,l.kt)("h3",{id:"the-second-step-add-webhook-configuration-information"},"The second step: Add Webhook configuration information"),(0,l.kt)("p",null,"Configuration information description:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'   /**\n    * The path called by the manufacturer. Manufacturer event call address, [http or https]://[domain or IP]:[port]/webhook/[callbackPath]\n    * for example: http://127.0.0.1:10105/webhook/test/event , The full url needs to be filled in the manufacturer call input\n    * callbackPath is the only\n    */\n    private String callbackPath;\n\n    /**\n     * manufacturer name, like github\n     */\n    private String manufacturerName;\n\n    /**\n     * manufacturer domain name, like www.github.com\n     */\n    private String manufacturerDomain;\n\n    /**\n     * Webhook event name, like rep-push\n     */\n    private String manufacturerEventName;\n\n    /**\n     * http header content type\n     */\n    private String contentType = "application/json";\n\n    /**\n     * description of this WebHookConfig\n     */\n    private String description;\n\n    /**\n     * secret key, for authentication\n     */\n    private String secret;\n\n    /**\n     * userName, for HTTP authentication\n     */\n    private String userName;\n\n    /**\n     * password, for HTTP authentication\n     */\n    private String password;\n\n\n    /**\n     * roll out event name, like topic to mq\n     */\n    private String cloudEventName;\n\n    /**\n     * roll out data format -> CloudEvent serialization mode\n     * If HTTP protocol is used, the request header contentType needs to be marked\n     */\n    private String dataContentType = "application/json";\n\n    /**\n     * id of cloudEvent, like uuid/manufacturerEventId\n     */\n    private String cloudEventIdGenerateMode;\n\n')),(0,l.kt)("h4",{id:"add-webhook-config"},"Add WebHook config"),(0,l.kt)("p",null,"path: /webhook/insertWebHookConfig"),(0,l.kt)("p",null,"method: POST"),(0,l.kt)("p",null,"contentType: application/json"),(0,l.kt)("p",null,"input params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u3000necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default\u3000"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"call address, unique address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer domain name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer event name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"configuration instructions"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"signature string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent event object identification method, uuid or event id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId")))),(0,l.kt)("p",null,"E.g:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github",\n    "manufacturerDomain":"www.github.com",\n    "manufacturerEventName":"all",\n    "cloudEventName":"github-eventmesh"\n}\n')),(0,l.kt)("p",null,"Output params: 1 for success, 0 for failure"),(0,l.kt)("h4",{id:"query-webhook-config-by-callback-path"},"Query WebHook config by callback path"),(0,l.kt)("p",null,"path: /webhook/queryWebHookConfigById"),(0,l.kt)("p",null,"method: POST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"input params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u3000necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default\u3000"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"call address, unique address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"the caller of this callbackPath belongs to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")))),(0,l.kt)("p",null,"E.g:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github"\n}\n')),(0,l.kt)("p",null,"Output params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u3000necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default\u3000"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"call address, unique address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer domain name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer event name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"configuration instructions"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"signature key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"user name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent event object identification method, uuid or event id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId\u3000")))),(0,l.kt)("h4",{id:"query-webhook-config-by-manufacturer"},"Query WebHook config by manufacturer"),(0,l.kt)("p",null,"path: /webhook/queryWebHookConfigByManufacturer"),(0,l.kt)("p",null,"method: POST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"input params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u3000necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default\u3000"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNum"),(0,l.kt)("td",{parentName:"tr",align:null},"page number of paging query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"page size of each page"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")))),(0,l.kt)("p",null,"E.g:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manufacturerName":"github",\n    "pageNum":1,\n    "pageSize":2\n}\n')),(0,l.kt)("p",null,"Output params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u3000necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default\u3000"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"call address, unique address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer domain name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer event name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"configuration instructions"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"signature key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"user name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"null\u3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent event object identification method, uuid or event id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u3000"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId\u3000")))),(0,l.kt)("h4",{id:"update-webhook-config"},"Update WebHook config"),(0,l.kt)("p",null,"path: /webhook/updateWebHookConfig"),(0,l.kt)("p",null,"method: POST"),(0,l.kt)("p",null,"contentType: application/json"),(0,l.kt)("p",null,"input params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"call address, unique address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer domain name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturer event name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"configuration instructions"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"signature string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent event object identification method, uuid or event id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId")))),(0,l.kt)("p",null,"E.g:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github",\n    "manufacturerDomain":"www.github.com",\n    "manufacturerEventName":"all",\n    "cloudEventName":"github-eventmesh"\n}\n')),(0,l.kt)("p",null,"Output params: 1 for success, 0 for failure"),(0,l.kt)("h4",{id:"delete-webhook-config"},"Delete WebHook config"),(0,l.kt)("p",null,"path: /webhook/deleteWebHookConfig"),(0,l.kt)("p",null,"method: POST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"input params:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"call address, unique address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"the caller of this callbackPath belongs to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"null")))),(0,l.kt)("p",null,"E.g:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github"\n}\n')),(0,l.kt)("p",null,"Output params: 1 for success, 0 for failure"),(0,l.kt)("h3",{id:"the-third-step-check-if-the-configuration-is-successful"},"The third step: Check if the configuration is successful"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"file storage mode. Please go to the eventMesh.webHook.fileMode.filePath directory to view. The Filename is callbackPath."),(0,l.kt)("li",{parentName:"ol"},"nacos storage mode. Please go to the nacos service configured by eventMesh.webHook.nacosMode.serverAddr to see this.")),(0,l.kt)("h3",{id:"the-fourth-step-configure-the-consumer-of-cloudevent"},"The fourth step: Configure the consumer of cloudevent"),(0,l.kt)("h3",{id:"the-fifth-step-configure-webhook-related-information-in-the-manufacturer"},"The fifth step: Configure Webhook related information in the manufacturer"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For manufacturer's operation, please refer to ",(0,l.kt)("a",{parentName:"p",href:"#Manufacturer's-Webhook-operation-instructions"},"Manufacturer's Webhook operation instructions"),".")),(0,l.kt)("h2",{id:"manufacturers-webhook-operation-instructions"},"Manufacturer's Webhook operation instructions"),(0,l.kt)("h3",{id:"github-sign-up"},"GitHub sign up"),(0,l.kt)("h4",{id:"the-first-step-enter-the-corresponding-project"},"The first step: Enter the corresponding project"),(0,l.kt)("h4",{id:"the-second-step-click-setting"},"The second step: click setting"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(35761).Z,width:"1966",height:"132"})),(0,l.kt)("h4",{id:"the-third-step-click-webhooks"},"The third step: click Webhooks"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(15532).Z,width:"664",height:"714"})),(0,l.kt)("h4",{id:"the-fourth-step-click-on-add-webhook"},"The fourth step: Click on Add Webhook"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(69360).Z,width:"1196",height:"270"})),(0,l.kt)("h4",{id:"the-fifth-step-fill-in-the-webhook-information"},"The fifth step: Fill in the Webhook information"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(72884).Z,width:"1168",height:"1030"})),(0,l.kt)("p",null,"Payload URL: EventMesh service address and callbackPath, which must include the protocol header. For example, when the callback address ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackPath")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"/webhook/github/eventmesh/all"),", the Payload URL is ",(0,l.kt)("inlineCode",{parentName:"p"},"http://www.example.com:10105/webhook/github/eventmesh/all"),"."),(0,l.kt)("p",null,"[http or https]","://","[domain or IP]",":","[port]","/webhook/","[callbackPath]"),(0,l.kt)("p",null,"Content type: http header content type"),(0,l.kt)("p",null,"Secret: signature string"))}m.isMDXComponent=!0},69360:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/webhook-github-add-185bf8d63c1b465e206bfe7deabd43fc.png"},72884:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/webhook-github-info-aabfbb67a9dcdc908674b880bc087780.png"},35761:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/webhook-github-setting-27fa2024d0625a7443957776ecbc7e3a.png"},15532:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/webhook-github-webhooks-8f08530fcf0f98859e5d1697049eec18.png"}}]);