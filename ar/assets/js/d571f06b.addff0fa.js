"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>s});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=m(n),c=a,s=y["".concat(p,".").concat(c)]||y[c]||g[c]||o;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:4,title:"\u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629",keywords:["Server onboarding","User engagement","Welcome message","Goodbye message","Customization"]},l="\u062a\u062e\u0635\u064a\u0635 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0643",i={unversionedId:"modules/welcome",id:"modules/welcome",title:"\u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629",description:"\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0644\u0647\u0627 \u062f\u0648\u0631 \u0641\u064a \u0625\u0646\u0634\u0627\u0621 \u0645\u062c\u062a\u0645\u0639 \u062a\u0631\u062d\u064a\u0628\u064a \u0648\u0645\u0645\u062a\u0627\u0632 \u062f\u0627\u062e\u0644 \u0633\u064a\u0631\u0641\u0631\u0643\u060c \u064a\u0645\u0643\u0646 \u0644\u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0623\u0646 \u062a\u062c\u0639\u0644 \u0627\u0644\u0639\u0636\u0648 \u0627\u0644\u062c\u062f\u064a\u062f \u064a\u0634\u0639\u0631 \u0628\u0627\u0644\u062a\u0642\u062f\u064a\u0631\u060c \u0639\u0646\u062f \u0645\u063a\u0627\u062f\u0631\u0629 \u0623\u062d\u062f \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u064a\u0645\u0643\u0646 \u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0645\u062b\u0627\u0644\u064a\u0629 \u062e\u0644\u0642 \u0625\u0646\u0637\u0628\u0627\u0639 \u0625\u064a\u062c\u0627\u0628\u064a \u0644\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u062c\u062f\u062f.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/modules/welcome.mdx",sourceDirName:"modules",slug:"/modules/welcome",permalink:"/ar/docs/modules/welcome",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/welcome.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629",keywords:["Server onboarding","User engagement","Welcome message","Goodbye message","Customization"]},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/ar/docs/category/modules"},next:{title:"\u0627\u0644\u0631\u062f \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a",permalink:"/ar/docs/modules/auto_repsonder"}},p={},m=[{value:"\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628",id:"\u0625\u0639\u062f\u0627\u062f-\u0631\u0633\u0627\u0644\u0629-\u0627\u0644\u062a\u0631\u062d\u064a\u0628",level:2},{value:"\u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629",id:"\u0625\u0631\u0633\u0627\u0644-\u0631\u0633\u0627\u0644\u0629",level:3},{value:"\u0625\u0631\u0633\u0627\u0644 \u0635\u0648\u0631\u0629",id:"\u0625\u0631\u0633\u0627\u0644-\u0635\u0648\u0631\u0629",level:3},{value:"\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629",id:"\u0625\u0639\u062f\u0627\u062f-\u0631\u0633\u0627\u0644\u0629-\u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629",level:2},{value:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629",id:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a-\u0625\u0636\u0627\u0641\u064a\u0629",level:2}],u={toc:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u062a\u062e\u0635\u064a\u0635-\u0631\u0633\u0627\u0644\u0629-\u0627\u0644\u062a\u0631\u062d\u064a\u0628-\u0648-\u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629-\u0641\u064a-\u0633\u064a\u0631\u0641\u0631\u0643"},"\u062a\u062e\u0635\u064a\u0635 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0643"),(0,a.yg)("p",null,"\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0644\u0647\u0627 \u062f\u0648\u0631 \u0641\u064a \u0625\u0646\u0634\u0627\u0621 \u0645\u062c\u062a\u0645\u0639 \u062a\u0631\u062d\u064a\u0628\u064a \u0648\u0645\u0645\u062a\u0627\u0632 \u062f\u0627\u062e\u0644 \u0633\u064a\u0631\u0641\u0631\u0643\u060c \u064a\u0645\u0643\u0646 \u0644\u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0623\u0646 \u062a\u062c\u0639\u0644 \u0627\u0644\u0639\u0636\u0648 \u0627\u0644\u062c\u062f\u064a\u062f \u064a\u0634\u0639\u0631 \u0628\u0627\u0644\u062a\u0642\u062f\u064a\u0631\u060c \u0639\u0646\u062f \u0645\u063a\u0627\u062f\u0631\u0629 \u0623\u062d\u062f \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u064a\u0645\u0643\u0646 \u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0645\u062b\u0627\u0644\u064a\u0629 \u062e\u0644\u0642 \u0625\u0646\u0637\u0628\u0627\u0639 \u0625\u064a\u062c\u0627\u0628\u064a \u0644\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u062c\u062f\u062f."),(0,a.yg)("p",null,"\u064a\u0648\u0641\u0631 \u0644\u0643 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062a\u0646\u062f \u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0634\u0627\u0645\u0644\u0629 \u0639\u0646 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0643."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u064a\u0645\u0643\u0646\u0643 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0623\u062a\u064a\u0629 \u0641\u064a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0644\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0643. "),(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"\u0625\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0648 \u0633\u062c\u0644 \u062f\u062e\u0648\u0644\u0643. "),(0,a.yg)("li",{parentName:"ol"},"\u0627\u062e\u062a\u0631 \u0633\u064a\u0631\u0641\u0631\u0643 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u064a\u0645\u064a\u0646."),(0,a.yg)("li",{parentName:"ol"},"\u0625\u0630\u0647\u0628 \u0625\u0644\u0649 \u0627\u0644\u0642\u0633\u0645 \u0648 \u062a\u0623\u0643\u062f \u0645\u0646 \u062a\u0641\u0639\u064a\u0644\u0647."))),(0,a.yg)("h2",{id:"\u0625\u0639\u062f\u0627\u062f-\u0631\u0633\u0627\u0644\u0629-\u0627\u0644\u062a\u0631\u062d\u064a\u0628"},"\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628"),(0,a.yg)("h3",{id:"\u0625\u0631\u0633\u0627\u0644-\u0631\u0633\u0627\u0644\u0629"},"\u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629"),(0,a.yg)("p",null,"\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u0644\u062a\u0631\u062d\u064a\u0628 \u0628\u0640 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u062c\u062f\u062f \u0648\u062a\u062c\u0639\u0644\u0647\u0645 \u064a\u0634\u0639\u0631\u0648\u0646 \u0628\u0640 \u0627\u0644\u062a\u0642\u062f\u064a\u0631\u060c \u0644\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0625\u062a\u0628\u0639 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0623\u062a\u064a\u0629:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u0641\u0639\u0644 \u062e\u064a\u0627\u0631 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u0623\u062f\u062e\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u0630\u064a \u062a\u0631\u064a\u062f \u0625\u0631\u0633\u0627\u0644\u0647 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u062c\u062f\u062f \u0639\u0646\u062f \u062f\u062e\u0648\u0644\u0647\u0645 \u0627\u0644\u0633\u064a\u0631\u0641\u0631.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u0627\u062e\u062a\u0631 \u0645\u0627 \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0631\u064a\u062f \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0643\u0640 \u0631\u0633\u0627\u0644\u0629 \u062e\u0627\u0635\u0629 \u0625\u0644\u0649 \u0627\u0644\u0639\u0636\u0648 \u0627\u0644\u062c\u062f\u064a\u062f \u0627\u0648 \u0625\u0644\u0649 \u0631\u0648\u0645 \u0645\u062d\u062f\u062f \u0641\u064a \u0627\u0644\u0633\u064a\u0631\u0641\u0631."))),(0,a.yg)("h3",{id:"\u0625\u0631\u0633\u0627\u0644-\u0635\u0648\u0631\u0629"},"\u0625\u0631\u0633\u0627\u0644 \u0635\u0648\u0631\u0629"),(0,a.yg)("p",null,"\u0625\u0631\u0633\u0627\u0644 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0637\u0631\u064a\u0642\u0629 \u0627\u062e\u0631\u0649 \u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u062e\u0644\u0642 \u0645\u062c\u062a\u0645\u0639 \u062a\u0631\u062d\u064a\u0628\u064a \u0641\u064a \u0633\u064a\u0631\u0641\u0631\u0643\u060c \u0644\u0625\u0639\u062f\u0627\u062f \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0627\u062a\u0628\u0639 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0623\u062a\u064a\u0629:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u0641\u0639\u0644 \u062e\u064a\u0627\u0631 \u0625\u0631\u0633\u0627\u0644 \u0635\u0648\u0631\u0629 \u062a\u0631\u062d\u064a\u0628 \u0641\u064a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u0627\u062e\u062a\u0631 \u0623\u062d\u062f \u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u062b\u0644\u0627\u062b\u0629 \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629:"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u0645\u0639 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628"),(0,a.yg)("li",{parentName:"ul"},"\u0642\u0628\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628"),(0,a.yg)("li",{parentName:"ul"},"\u0627\u0644\u0649 \u0631\u0648\u0645")),(0,a.yg)("p",null,"\u062a\u062e\u0635\u064a\u0635 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u0627\u0644\u062e\u0644\u0641\u064a\u0629")," \u0627\u062e\u062a\u0631 \u0645\u0627 \u0628\u064a\u0646 \u062e\u0644\u0641\u064a\u0629 \u0634\u0641\u0627\u0641\u0647 \u0627\u0648 \u0635\u0648\u0631\u0629 \u0630\u0627\u062a \u0639\u0631\u0636 \u0648 \u0625\u0631\u062a\u0641\u0627\u0639 \u0642\u0627\u0628\u0644\u064a\u0646 \u0644\u0644\u062a\u062e\u0635\u064a\u0635."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u0627\u0644\u0623\u0641\u062a\u0627\u0631"),": \u0627\u062e\u062a\u0631 \u0645\u0627 \u0628\u064a\u0646 \u0627\u0641\u062a\u0627\u0631 \u0645\u0631\u0628\u0639 \u0627\u0648 \u062f\u0627\u0626\u0631\u064a \u0645\u0639 \u0625\u0631\u062a\u0641\u0627\u0639 \u0648 \u0639\u0631\u0636 \u0648 \u0625\u062d\u062f\u062b\u064a\u0627\u062a \u0645\u062e\u0635\u0635\u0629."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),": \u0627\u062e\u062a\u0631 \u0645\u0643\u0627\u0646 \u0648 \u062d\u062c\u0645 \u0648 \u0644\u0648\u0646 \u0648 \u0645\u062d\u0627\u0630\u0627\u0629 \u0646\u0635 \u0625\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0641\u064a \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u0627\u0644\u0646\u0635:")," \u0623\u062f\u062e\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u0630\u064a \u062a\u0631\u064a\u062f \u0639\u0631\u0636\u0647 \u0648 \u0627\u062e\u062a\u0631 \u0645\u0643\u0627\u0646\u0647 \u0648 \u062d\u062c\u0645\u0647 \u0648 \u0644\u0648\u0646\u0647 \u0641\u064a \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0639\u0644\u0649 \u062d\u0633\u0628 \u0631\u063a\u0628\u062a\u0643.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u064a\u062c\u0628 \u0627\u0646 \u062a\u0643\u0648\u0646 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0623\u0642\u0644 \u0645\u0646 1 \u0645\u064a\u062c\u0627\u0628\u0627\u064a\u062a \u0648 \u0627\u0644\u0635\u064a\u063a \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629 \u0647\u064a (",(0,a.yg)("inlineCode",{parentName:"p"},"jpg \u0648 png \u0648 jpeg"),").")),(0,a.yg)("h2",{id:"\u0625\u0639\u062f\u0627\u062f-\u0631\u0633\u0627\u0644\u0629-\u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629"},"\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629"),(0,a.yg)("p",null,"\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0637\u0631\u064a\u0642\u0629 \u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u0627\u0638\u0647\u0627\u0631 \u062a\u0642\u062f\u064a\u0631\u0643 \u0644\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0630\u064a\u0646 \u063a\u0627\u062f\u0631\u0648 \u0627\u0644\u0633\u064a\u0631\u0641\u0631\u060c \u0644\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0625\u062a\u0628\u0639 \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0623\u062a\u064a\u0629:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u0641\u0639\u0644 \u062e\u064a\u0627\u0631 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0641\u064a \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0627\u0644\u0633\u064a\u0631\u0641\u0631."),(0,a.yg)("li",{parentName:"ol"},"\u0623\u062f\u062e\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u0630\u064a \u062a\u0631\u064a\u062f \u0625\u0631\u0633\u0627\u0644\u0647 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0639\u0646\u062f \u062e\u0631\u0648\u062c\u0647\u0645 \u0645\u0646 \u0627\u0644\u0633\u064a\u0631\u0641\u0631."),(0,a.yg)("li",{parentName:"ol"},"\u0627\u062e\u062a\u0631 \u0627\u0644\u0631\u0648\u0645 \u0627\u0644\u0630\u064a \u062a\u0631\u064a\u062f \u0623\u0646 \u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644\u0647.")),(0,a.yg)("h2",{id:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a-\u0625\u0636\u0627\u0641\u064a\u0629"},"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0645\u062b\u0644 \u0625\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0627\u0648 \u0625\u0633\u0645 \u0627\u0644\u0633\u064a\u0631\u0641\u0631 \u0641\u064a \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629\u060c \u064a\u0645\u0643\u0646 \u0623\u0646 \u062a\u0633\u0627\u0639\u062f \u0647\u0630\u0647 \u0627\u0644\u0645\u064a\u0632\u0629 \u0641\u064a \u062a\u062e\u0635\u064a\u0635 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0648\u062c\u0639\u0644\u0647\u0627 \u0645\u062b\u0627\u0644\u064a\u0629.")),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u064a\u0639\u062f \u062a\u062e\u0635\u064a\u0635 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0631\u062d\u064a\u0628 \u0648 \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0637\u0631\u064a\u0642\u0629 \u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u062a\u0631\u0643 \u0627\u0646\u0637\u0628\u0627\u0639 \u062c\u064a\u062f \u0639\u0646 \u0633\u064a\u0631\u0641\u0631\u0643 \u0644\u0644\u0623\u0639\u0636\u0627\u0621 \u0648\u062c\u0639\u0644\u0647 \u0645\u062a\u0645\u064a\u0632 \u0639\u0646 \u0627\u0644\u0633\u064a\u0631\u0641\u0631\u0627\u062a \u0627\u0644\u0623\u062e\u0631\u0649\u060c \u0636\u0639 \u0641\u064a \u0625\u0639\u062a\u0628\u0627\u0631\u0643 \u062a\u062c\u0631\u0628\u0629 \u0631\u0633\u0627\u0626\u0644 \u0648 \u0635\u0648\u0631 \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0627\u062e\u062a\u064a\u0627\u0631 \u064a\u0646\u0627\u0633\u0628 \u0645\u062c\u062a\u0645\u0639\u0643."))))}g.isMDXComponent=!0}}]);