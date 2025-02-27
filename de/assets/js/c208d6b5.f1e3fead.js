"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{852:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=l(8168),o=(l(6540),l(5680));const a={sidebar_position:6,keywords:["Level System","Text","XP Roles","Role Rewards","Level-Up Message"]},n="Level System",i={unversionedId:"modules/level_system",id:"modules/level_system",title:"Level System",description:"With vTime levelling system, active server members will be automatically rewarded with extraordinary level roles, privileged permissions, and access to mystery channels once they reach a specific level!",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/modules/level_system.mdx",sourceDirName:"modules",slug:"/modules/level_system",permalink:"/de/docs/modules/level_system",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/level_system.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:["Level System","Text","XP Roles","Role Rewards","Level-Up Message"]},sidebar:"tutorialSidebar",previous:{title:"Embed Messages",permalink:"/de/docs/modules/embed"},next:{title:"Auto-Roles",permalink:"/de/docs/modules/auto_role"}},s={},d=[{value:"No XP Roles",id:"no-xp-roles",level:2},{value:"No XP Channels",id:"no-xp-channels",level:2},{value:"Level-Up Message",id:"level-up-message",level:2},{value:"Setup",id:"setup",level:2},{value:"Text Level",id:"text-level",level:3},{value:"Voice Level",id:"voice-level",level:3},{value:"Role Rewards",id:"role-rewards",level:3},{value:"Remove with a higher level",id:"remove-with-a-higher-level",level:2},{value:"DM Member",id:"dm-member",level:2},{value:"Important Notes",id:"important-notes",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...l}=e;return(0,o.yg)(m,(0,r.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"level-system"},"Level System"),(0,o.yg)("p",null,"With vTime levelling system, active server members will be automatically rewarded with extraordinary level roles, privileged permissions, and access to mystery channels once they reach a specific level!"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The dashboard is where the configurations described here are managed."),(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"Go to the dashboard and log in."),(0,o.yg)("li",{parentName:"ol"},"Select your server from the menu on the left."),(0,o.yg)("li",{parentName:"ol"},"Choose the module and make sure that it is enabled."))),(0,o.yg)("p",null,"You will initially have three distinct options, each of which may be adjusted to produce a more individualized levelling experience."),(0,o.yg)("h2",{id:"no-xp-roles"},"No XP Roles"),(0,o.yg)("p",null,"Using this, you can prevent certain users with the selected roles from accumulating experience points anywhere on your server."),(0,o.yg)("h2",{id:"no-xp-channels"},"No XP Channels"),(0,o.yg)("p",null,"You can prevent specific channels from accumulating experience points."),(0,o.yg)("h2",{id:"level-up-message"},"Level-Up Message"),(0,o.yg)("p",null,"Send congratulatory messages to members who have levelled up from one level to a higher one. You can also use unique variables in these messages!"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("strong",{parentName:"p"},"Level-up message")," will only be sent to those who have levelled up in a text level. At this time, we do not have a voice-level message.")),(0,o.yg)("h2",{id:"setup"},"Setup"),(0,o.yg)("p",null,"The procedure for establishing the role reward system is as described in the following:"),(0,o.yg)("p",null,"There will be a button named ",(0,o.yg)("inlineCode",{parentName:"p"},"Add Role Rewards")," where you can add the role reward, a custom level that users must reach, and other options detailed below."),(0,o.yg)("h3",{id:"text-level"},"Text Level"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"This is the text level a member must reach to obtain the level role if it was set independently.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The text level range is 0 to 100; provide additional rewards to users as they reach the required level."))),(0,o.yg)("h3",{id:"voice-level"},"Voice Level"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"This is the voice level a member must reach to obtain the level role if it was set independently.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The voice level range is 0 to 100; provide additional rewards to users as they reach the required level."))),(0,o.yg)("h3",{id:"role-rewards"},"Role Rewards"),(0,o.yg)("p",null,"Reward the members with exceptional level positions as they progress through the levels and meet your requirements."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"If the roles do not display, the bot's role is nested underneath all server roles. To resolve this issue, move the bot role to the top of the roles hierarchy to ensure that roles are displayed.")),(0,o.yg)("h2",{id:"remove-with-a-higher-level"},"Remove with a higher level"),(0,o.yg)("p",null,"It is entirely up to you to decide whether the levels should stack or be removed when users climb to higher levels."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you disable the option, roles will stack.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you enable the option, roles get removed as a higher level is reached."))),(0,o.yg)("h2",{id:"dm-member"},"DM Member"),(0,o.yg)("p",null,"Notifies a member when they receive a text-level role via direct message."),(0,o.yg)("h2",{id:"important-notes"},"Important Notes"),(0,o.yg)("admonition",{title:"Three potential situations that may arise when setting up a level requirement",type:"important"},(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Both Voice & Text"),": If you set the need for both the text and voice level without leaving ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," in any option, both Text and Voice will be required. This will require the user to reach both levels to obtain the role reward.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Text only"),": If you set the need for the text level and leave the Voice at ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),", only Text will be required. This will require the user to reach the level needed for the Text to obtain the role reward.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Voice only"),": If you set the need for the voice level and leave the Text at ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),", only Voice will be required. This will require the user to reach the level needed for the Voice to obtain the role reward.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Role Position"),": If you have selected the same role rewards for many levels, don't worry\u2014it will still provide users with the role you specified as they reach the requirements of any level you set for the same role.")))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Users need to type in chats for the bot to update their XP data and award them voice-level prizes, and only then will the bot be able to reward them.")))}h.isMDXComponent=!0},5680:(e,t,l)=>{l.d(t,{xA:()=>p,yg:()=>y});var r=l(6540);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var l=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(l),u=o,y=m["".concat(s,".").concat(u)]||m[u]||h[u]||a;return l?r.createElement(y,n(n({ref:t},p),{},{components:l})):r.createElement(y,n({ref:t},p))}));function y(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=l.length,n=new Array(a);n[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,n[1]=i;for(var d=2;d<a;d++)n[d]=l[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}u.displayName="MDXCreateElement"}}]);