"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[594],{4537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(8168),a=(t(6540),t(5680));const l={sidebar_position:6,keywords:["Embed Messages","Rich Embed","create","customization","configuration"]},i="Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",o={unversionedId:"modules/embed",id:"modules/embed",title:"Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",description:'\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 "\u0432\u0441\u0442\u0440\u043e\u0435\u043a" \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0431\u043e\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432\u0430\u0448\u0438\u0445 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439. \u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u044d\u0442\u0438 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f.',source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/modules/embed.mdx",sourceDirName:"modules",slug:"/modules/embed",permalink:"/ru/docs/modules/embed",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/embed.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:["Embed Messages","Rich Embed","create","customization","configuration"]},sidebar:"tutorialSidebar",previous:{title:"\u0410\u0432\u0442\u043e\u043e\u0442\u0432\u0435\u0442\u0447\u0438\u043a",permalink:"/ru/docs/modules/auto_repsonder"},next:{title:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u0440\u043e\u0432\u043d\u0435\u0439",permalink:"/ru/docs/modules/level_system"}},m={},d=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",level:2},{value:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430-embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",level:2},{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",level:2},{value:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",level:2},{value:"\u041e\u0442\u043c\u0435\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",id:"\u043e\u0442\u043c\u0435\u043d\u0430-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",level:2}],p={toc:d},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},"Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.yg)("p",null,'\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 "\u0432\u0441\u0442\u0440\u043e\u0435\u043a" \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0431\u043e\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432\u0430\u0448\u0438\u0445 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439. \u0412 \u044d\u0442\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u044d\u0442\u0438 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f.'),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u2014 \u044d\u0442\u043e \u043c\u0435\u0441\u0442\u043e, \u0433\u0434\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u043c\u0438 \u0437\u0434\u0435\u0441\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f\u043c\u0438."),(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c. "),(0,a.yg)("li",{parentName:"ol"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u043b\u0435\u0432\u043e\u043c \u043c\u0435\u043d\u044e."),(0,a.yg)("li",{parentName:"ol"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u0438 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043e\u043d \u0432\u043a\u043b\u044e\u0447\u0451\u043d. "))),(0,a.yg)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.yg)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0432\u0441\u0442\u0440\u043e\u0439\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),". \u042d\u0442\u043e \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442 \u0432\u0430\u0441 \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0433\u0434\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u043c\u043e\u0442\u0440 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0438 \u0432\u043d\u0435\u0441\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0438. \u0422\u0430\u043a\u0436\u0435 \u044d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043d\u043e\u043f\u043e\u043a:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u0430\u043d\u0430\u043b "),(0,a.yg)("li",{parentName:"ul"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),(0,a.yg)("li",{parentName:"ul"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,a.yg)("li",{parentName:"ul"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")),(0,a.yg)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.yg)("p",null,"\u041d\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443, \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u043d\u043e\u0439 \u043a\u0430\u043a ",(0,a.yg)("inlineCode",{parentName:"p"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u041f\u043e\u043b\u0435"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043e Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f. \u041a \u044d\u0442\u0438\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),(0,a.yg)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.yg)("li",{parentName:"ul"},"URL"),(0,a.yg)("li",{parentName:"ul"},"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),(0,a.yg)("li",{parentName:"ul"},"\u041c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0430"),(0,a.yg)("li",{parentName:"ul"},"\u0410\u0432\u0442\u043e\u0440"),(0,a.yg)("li",{parentName:"ul"},"\u0426\u0432\u0435\u0442"),(0,a.yg)("li",{parentName:"ul"},"\u0424\u0443\u0442\u0435\u0440"),(0,a.yg)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0435")),(0,a.yg)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u0431\u043e\u0440\u0430 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0432\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0430, \u0433\u0434\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0430\u0448 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f."),(0,a.yg)("h2",{id:"\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430-embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.yg)("p",null,"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043b\u0438 \u0432\u0430\u0448\u0435 Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043a\u0430\u043d\u0430\u043b")," \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u043a\u0430\u043d\u0430\u043b."),(0,a.yg)("h2",{id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,a.yg)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u043d\u0435\u0441\u0451\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0432\u0430\u0448\u0435 embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u043e\u0439 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),"."),(0,a.yg)("h2",{id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.yg)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0443\u0436\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),"."),(0,a.yg)("h2",{id:"\u043e\u0442\u043c\u0435\u043d\u0430-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"},"\u041e\u0442\u043c\u0435\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,a.yg)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043b\u044e\u0431\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0430\u0448\u0435\u043c Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u043e\u0439 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),"."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 embed \u0432 Discord \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0441\u043b\u0438 \u0431\u043e\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b \u043f\u0440\u0435\u0432\u044b\u0441\u0438\u043b\u0438 \u043b\u0438\u043c\u0438\u0442. \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u044d\u0442\u043e\u0433\u043e, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u043b\u0438 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043f\u043e\u043b\u044f, \u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d ",(0,a.yg)("inlineCode",{parentName:"li"},"256")," \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438"),(0,a.yg)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e ",(0,a.yg)("inlineCode",{parentName:"li"},"4096")," \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438"),(0,a.yg)("li",{parentName:"ul"},"Embed \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 25 \u043f\u043e\u043b\u0435\u0439"),(0,a.yg)("li",{parentName:"ul"},"\u0418\u043c\u044f/\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u043b\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d ",(0,a.yg)("inlineCode",{parentName:"li"},"256")," \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e ",(0,a.yg)("inlineCode",{parentName:"li"},"1024")," \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438"),(0,a.yg)("li",{parentName:"ul"},"\u0424\u0443\u0442\u0435\u0440 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d ",(0,a.yg)("inlineCode",{parentName:"li"},"2048")," \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438"),(0,a.yg)("li",{parentName:"ul"},"\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e ",(0,a.yg)("inlineCode",{parentName:"li"},"256")," \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438"),(0,a.yg)("li",{parentName:"ul"},"\u041e\u0431\u0449\u0435\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 embed \u2014 ",(0,a.yg)("inlineCode",{parentName:"li"},"6000")))),(0,a.yg)("p",null,"\u0421\u043e\u0431\u043b\u044e\u0434\u0430\u044f \u044d\u0442\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0432\u0430\u0448 \u0431\u043e\u0442 \u0441\u043c\u043e\u0436\u0435\u0442 \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c Embed-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))}y.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,g=u["".concat(m,".").concat(c)]||u[c]||y[c]||l;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);