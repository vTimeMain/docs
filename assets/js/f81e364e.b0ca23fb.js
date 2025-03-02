"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[425],{2826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(8168),r=(n(6540),n(5680));const a={sidebar_position:4,keywords:["Moderation","Manage Commands","block","unblock","blacklist"]},i="Moderation",l={unversionedId:"modules/moderation",id:"modules/moderation",title:"Moderation",description:"The Moderation page contains important options for selecting command channels and displaying blacklist details, with full control over blocking and unblocking members. Let's go through each step.",source:"@site/docs/modules/moderation.mdx",sourceDirName:"modules",slug:"/modules/moderation",permalink:"/docs/modules/moderation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["Moderation","Manage Commands","block","unblock","blacklist"]},sidebar:"defaultSidebar",previous:{title:"Server Settings",permalink:"/docs/modules/serversettings"},next:{title:"Logs",permalink:"/docs/modules/logs"}},s={},c=[{value:"Manage Commands",id:"manage-commands",level:2},{value:"Blacklist Settings",id:"blacklist-settings",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"moderation"},"Moderation"),(0,r.yg)("p",null,"The Moderation page contains important options for selecting command channels and displaying blacklist details, with full control over blocking and unblocking members. Let's go through each step.  "),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The dashboard is where you manage the configurations described here."),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"Go to the dashboard and log in."),(0,r.yg)("li",{parentName:"ol"},"Select your server from the server list in the sidebar."),(0,r.yg)("li",{parentName:"ol"},"Choose the Moderation section."))),(0,r.yg)("h2",{id:"manage-commands"},"Manage Commands"),(0,r.yg)("p",null,"If you want to use the bot commands in specific channels, enable the option in the 'Manage Commands' section. Then, click 'Setup' to choose the channels from which the bot will accept commands."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you disable the 'Manage Commands' option, the bot will accept commands from any channel. However, your selected channels will still be saved until you re-enable the option.")),(0,r.yg)("h2",{id:"blacklist-settings"},"Blacklist Settings"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In this option, you will see the blacklist with all the details:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Member:")," The blocked member."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Reason:")," Displays the reason for blocking the member."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Last Total Time:")," The total time the member had before being blocked. The bot will stop calculating the member's time until the block is removed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Responsible:")," The moderator who made the block."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Blocked Time:")," The time when the member was blocked."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Action:")," 'Remove' means unblocking the member. After the unblock, the bot will retain their previous total time and resume calculating the member\u2019s time."))),(0,r.yg)("p",null,"Click '+Block' to block a new member. This option includes fields for the Reason and Member. After selecting the member and entering the reason, click 'Save' to block the member."))}p.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);