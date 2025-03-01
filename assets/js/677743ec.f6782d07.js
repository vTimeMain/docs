"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[275],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var i=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return r?i.createElement(g,a(a({ref:t},u),{},{components:r})):i.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[p]="string"==typeof e?e:n,a[1]=m;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var i=r(8168),n=(r(6540),r(5680));const o={sidebar_position:4,title:"Premium",description:"Information about vTime premium features",keywords:["Premium","top 3","top 3 today","Logs","Notifies Top 10"]},a='<div class="premium-header"> <img src="/img/PremIcon.png" alt="vTime Premium" width="45" height="45" /> vTime Premium </div>',m={unversionedId:"getting-started/premium",id:"getting-started/premium",title:"Premium",description:"Information about vTime premium features",source:"@site/docs/getting-started/premium.mdx",sourceDirName:"getting-started",slug:"/getting-started/premium",permalink:"/docs/getting-started/premium",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/getting-started/premium.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Premium",description:"Information about vTime premium features",keywords:["Premium","top 3","top 3 today","Logs","Notifies Top 10"]},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/getting-started/faq"},next:{title:"Commands",permalink:"/docs/getting-started/commands"}},s={},l=[{value:"Premium",id:"premium",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:l},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,i.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"--vtime-premium-"},(0,n.yg)("div",{class:"premium-header"}," ",(0,n.yg)("img",{src:"/img/PremIcon.png",alt:"vTime Premium",width:"45",height:"45"})," vTime Premium ")),(0,n.yg)("p",null,"Welcome to the vTime premium page. On this page, you will find a comprehensive explanation of our premium bot process, including the available features, and frequently asked questions."),(0,n.yg)("h2",{id:"premium"},"Premium"),(0,n.yg)("p",null,"The features included are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/modules/overview"},"Top 3 Voice Time")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/modules/overview"},"Top 3 For Today")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/modules/logs"},"Logs")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/modules/notifiestop10"},"Notifies Top 10"))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"The premium features are enabled for all users during the BETA version"),"!")),(0,n.yg)("h2",{id:"faq"},"FAQ"),(0,n.yg)("details",null,(0,n.yg)("summary",null,"When will the stable version be released?"),"There is no set release date for the stable version yet. We are currently testing, fixing bugs, and updating the project."),(0,n.yg)("details",null,(0,n.yg)("summary",null,"When will the premium feature become paid?"),"The premium feature will become paid once the stable version is completed and published."))}c.isMDXComponent=!0}}]);