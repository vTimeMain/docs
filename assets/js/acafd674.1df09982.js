"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[473],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>p});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,p=u["".concat(s,".").concat(c)]||u[c]||g[c]||o;return n?a.createElement(p,r(r({ref:t},m),{},{components:n})):a.createElement(p,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(8168),i=(n(6540),n(5680));const o={sidebar_position:6,keywords:["Embed Messages","Rich Embed","create","customization","configuration"]},r="Embed Messages",l={unversionedId:"modules/embed",id:"modules/embed",title:"Embed Messages",description:"The rich embeds feature allows your bot to send customized versions of your preferred messages. This guide will walk you through the process of setting up and configuring these embed messages.",source:"@site/docs/modules/embed.mdx",sourceDirName:"modules",slug:"/modules/embed",permalink:"/docs/modules/embed",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/embed.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:["Embed Messages","Rich Embed","create","customization","configuration"]},sidebar:"tutorialSidebar",previous:{title:"Auto Responder",permalink:"/docs/modules/auto_repsonder"},next:{title:"Level System",permalink:"/docs/modules/level_system"}},s={},d=[{value:"Creating a New Embed",id:"creating-a-new-embed",level:2},{value:"Configuring the Embed Message",id:"configuring-the-embed-message",level:2},{value:"Sending the Embed to a Channel",id:"sending-the-embed-to-a-channel",level:2},{value:"Saving Changes",id:"saving-changes",level:2},{value:"Editing a Sent Message",id:"editing-a-sent-message",level:2},{value:"Canceling Changes",id:"canceling-changes",level:2}],m={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"embed-messages"},"Embed Messages"),(0,i.yg)("p",null,"The rich embeds feature allows your bot to send customized versions of your preferred messages. This guide will walk you through the process of setting up and configuring these embed messages."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The dashboard is where the configurations described here are managed."),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"Go to the dashboard and log in."),(0,i.yg)("li",{parentName:"ol"},"Select your server from the menu on the left."),(0,i.yg)("li",{parentName:"ol"},"Choose the module and make sure that it is enabled."))),(0,i.yg)("h2",{id:"creating-a-new-embed"},"Creating a New Embed"),(0,i.yg)("p",null,"To create a new embed, click the ",(0,i.yg)("inlineCode",{parentName:"p"},"Create")," button. This will redirect you to a new page where you can preview the appearance of the embed message and make any necessary adjustments. This page also contains several buttons:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Send to a Channel "),(0,i.yg)("li",{parentName:"ul"},"Edit a Sent Message"),(0,i.yg)("li",{parentName:"ul"},"Save Changes"),(0,i.yg)("li",{parentName:"ul"},"Cancel Changes ")),(0,i.yg)("h2",{id:"configuring-the-embed-message"},"Configuring the Embed Message"),(0,i.yg)("p",null,"On the new page, you will see an additional button labeled ",(0,i.yg)("inlineCode",{parentName:"p"},"Add Fields")," that contains all the options for customizing your embed message. These options include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Title"),(0,i.yg)("li",{parentName:"ul"},"Description"),(0,i.yg)("li",{parentName:"ul"},"URL"),(0,i.yg)("li",{parentName:"ul"},"Image"),(0,i.yg)("li",{parentName:"ul"},"Thumbnail"),(0,i.yg)("li",{parentName:"ul"},"Author"),(0,i.yg)("li",{parentName:"ul"},"Color"),(0,i.yg)("li",{parentName:"ul"},"Footer"),(0,i.yg)("li",{parentName:"ul"},"Field ")),(0,i.yg)("p",null,"After selecting the desired options, you will be presented with a text box where you can enter your message text."),(0,i.yg)("h2",{id:"sending-the-embed-to-a-channel"},"Sending the Embed to a Channel"),(0,i.yg)("p",null,"Once you have configured your embed message, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Send to a Channel")," button to send it to the desired channel."),(0,i.yg)("h2",{id:"saving-changes"},"Saving Changes"),(0,i.yg)("p",null,"To save any modifications made to your embed message, use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Save Changes")," button."),(0,i.yg)("h2",{id:"editing-a-sent-message"},"Editing a Sent Message"),(0,i.yg)("p",null,"If you need to edit an existing message that has already been sent, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Edit Message")," button."),(0,i.yg)("h2",{id:"canceling-changes"},"Canceling Changes"),(0,i.yg)("p",null,"If you need to undo any changes made to your embed message, use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Cancel Changes")," button"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Please note that there are limits to the Discord embed feature, so if the bot is unable to send the embed message, you may have exceeded the limit. To avoid this, be sure to completely fill out every required field and pay attention to the following limits:"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Embed title is limited to ",(0,i.yg)("inlineCode",{parentName:"li"},"256")," characters"),(0,i.yg)("li",{parentName:"ul"},"Embed description is limited to ",(0,i.yg)("inlineCode",{parentName:"li"},"4096")," characters"),(0,i.yg)("li",{parentName:"ul"},"An embed can contain a maximum of ",(0,i.yg)("inlineCode",{parentName:"li"},"25")," fields"),(0,i.yg)("li",{parentName:"ul"},"A field name/title is limited to ",(0,i.yg)("inlineCode",{parentName:"li"},"256")," character and the value of the field is limited to ",(0,i.yg)("inlineCode",{parentName:"li"},"1024")," characters"),(0,i.yg)("li",{parentName:"ul"},"Embed footer is limited to ",(0,i.yg)("inlineCode",{parentName:"li"},"2048")," characters"),(0,i.yg)("li",{parentName:"ul"},"Embed author name is limited to ",(0,i.yg)("inlineCode",{parentName:"li"},"256")," characters"),(0,i.yg)("li",{parentName:"ul"},"The total of characters allowed in an embed is ",(0,i.yg)("inlineCode",{parentName:"li"},"6000")))),(0,i.yg)("p",null,"By adhering to these limits, you can ensure that your bot is able to send the embed message without any issues"))}g.isMDXComponent=!0}}]);