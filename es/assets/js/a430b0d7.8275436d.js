"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[408],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var o=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=o.createContext({}),l=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=t,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?o.createElement(g,i(i({ref:n},p),{},{components:a})):o.createElement(g,i({ref:n},p))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5772:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(8168),t=(a(6540),a(5680));const r={sidebar_position:17,title:"AutoMod",description:"Una gu\xeda para configurar correctamente el vTime Automod para su servidor.",keywords:["Spam","automation","invite links","caps","mention"]},i="Auto Moderation",s={unversionedId:"modules/automod",id:"modules/automod",title:"AutoMod",description:"Una gu\xeda para configurar correctamente el vTime Automod para su servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/modules/automod.mdx",sourceDirName:"modules",slug:"/modules/automod",permalink:"/es/docs/modules/automod",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/automod.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"AutoMod",description:"Una gu\xeda para configurar correctamente el vTime Automod para su servidor.",keywords:["Spam","automation","invite links","caps","mention"]},sidebar:"tutorialSidebar",previous:{title:"Starboard",permalink:"/es/docs/modules/starboard"}},c={},l=[{value:"Opciones de Detecci\xf3n",id:"opciones-de-detecci\xf3n",level:2},{value:"Opciones de Acciones a Realizar",id:"opciones-de-acciones-a-realizar",level:2},{value:"Configuraciones",id:"configuraciones",level:2},{value:"Funciones Adicionales",id:"funciones-adicionales",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,o.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"auto-moderation"},"Auto Moderation"),(0,t.yg)("p",null,"Asegura un entorno de servidor suave y sin estr\xe9s con vTime Automod. Di adi\xf3s a los spammers y anunciantes, y disfruta de la tranquilidad sabiendo que vTime est\xe1 trabajando incansablemente para mantener un entorno seguro y protegido para tu comunidad."),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"El dashboard es donde se gestionan las configuraciones descritas aqu\xed."),(0,t.yg)("ol",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ol"},"Ve al dashboard e inicia sesi\xf3n."),(0,t.yg)("li",{parentName:"ol"},"Selecciona tu servidor del men\xfa de la izquierda."),(0,t.yg)("li",{parentName:"ol"},"Elige el apartado y aseg\xfarate de que est\xe1 habilitado."))),(0,t.yg)("h2",{id:"opciones-de-detecci\xf3n"},"Opciones de Detecci\xf3n"),(0,t.yg)("p",null,"Las siguientes opciones est\xe1n disponibles para detectar mensajes potencialmente spam o maliciosos en tu servidor:"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"SPAM (5 MENSAJES/5 SEG)"),": Esta opci\xf3n detecta cuando un usuario env\xeda m\xe1s de cinco mensajes dentro de una ventana de cinco segundos.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"PALABRAS PROHIBIDAS"),": Esta opci\xf3n detecta mensajes que contienen palabras prohibidas.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"TEXTO DUPLICADO"),": Esta opci\xf3n detecta mensajes que contienen texto duplicado.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"MENSAJES REPETIDOS"),': Esta opci\xf3n detecta mensajes que repiten texto o l\xedneas como "SPAM SPAM SPAM SPAM".')),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"INVITACIONES DE DISCORD"),": Esta opci\xf3n detecta mensajes que contienen enlaces de invitaci\xf3n a Discord.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"ENLACES"),": Esta opci\xf3n detecta mensajes que contienen enlaces.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"MAY\xdaSCULAS SPAM (70% > MAY\xdaSCULAS)"),': Esta opci\xf3n detecta mensajes escritos en todas may\xfasculas, como "HOLA ESTO ES vTime".')),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"EMOJI SPAM"),": Esta opci\xf3n detecta mensajes que contienen ocho o m\xe1s emojis.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"MENCI\xd3N EN MASA"),": Esta opci\xf3n detecta mensajes que mencionan a un gran n\xfamero de usuarios.")),(0,t.yg)("h2",{id:"opciones-de-acciones-a-realizar"},"Opciones de Acciones a Realizar"),(0,t.yg)("p",null,"Cada opci\xf3n de detecci\xf3n ofrece tres opciones de acci\xf3n diferentes para satisfacer las necesidades espec\xedficas de tu comunidad. Estas acciones son:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Eliminar mensaje"),": Elimina el mensaje que desencaden\xf3 la detecci\xf3n.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Silenciar miembro"),": Silencia al miembro que envi\xf3 el mensaje desencadenante.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Advertir miembro"),": Advierte al miembro que envi\xf3 el mensaje desencadenante."))),(0,t.yg)("h2",{id:"configuraciones"},"Configuraciones"),(0,t.yg)("p",null,"Cada opci\xf3n de detecci\xf3n presenta una opci\xf3n de ",(0,t.yg)("strong",{parentName:"p"},"Configuraciones"),", indicada por un icono de engranaje ",(0,t.yg)("inlineCode",{parentName:"p"},"\u2699\ufe0f"),". Al hacer clic en esta opci\xf3n, se mostrar\xe1 una serie de configuraciones que puedes ajustar para optimizar el uso de vTime Automod para tu servidor."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Canales deshabilitados"),": Canales que estar\xe1n exentos de las opciones de detecci\xf3n.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Roles deshabilitados"),": Roles que estar\xe1n exentos de las opciones de detecci\xf3n.")),(0,t.yg)("p",null,"En las opciones de automatizaci\xf3n de ",(0,t.yg)("strong",{parentName:"p"},"Palabras prohibidas")," y ",(0,t.yg)("strong",{parentName:"p"},"Enlaces"),", hay configuraciones adicionales que no se encuentran en las opciones predeterminadas:"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Palabras prohibidas"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"NO COINCIDIR SI ES PARTE DE OTRA PALABRA: Si est\xe1 habilitada, esta opci\xf3n evitar\xe1 la detecci\xf3n de palabras que contengan las palabras ofensivas pero que no sean id\xe9nticas a ellas.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Enlaces"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"URL permitidas: Una lista de URLs que no activar\xe1n la opci\xf3n de detecci\xf3n, incluso si contienen enlaces.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"URL no permitidas: Una lista de URLs que activar\xe1n la opci\xf3n de detecci\xf3n, incluso si no contienen enlaces."))),(0,t.yg)("h2",{id:"funciones-adicionales"},"Funciones Adicionales"),(0,t.yg)("p",null,"Adem\xe1s de las opciones de detecci\xf3n y acci\xf3n descritas anteriormente, vTime Automod tambi\xe9n incluye las siguientes funciones:"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Canales ignorados"),": Canales que estar\xe1n exentos de todas las opciones de detecci\xf3n.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Roles ignorados"),": Roles que estar\xe1n exentos de todas las opciones de detecci\xf3n.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Solo canal de im\xe1genes"),": Te permite obligar a que solo se env\xeden im\xe1genes en canales espec\xedficos.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Solo canal de YT"),": Te permite obligar a que solo se env\xeden enlaces de YouTube en canales espec\xedficos.")))}d.isMDXComponent=!0}}]);