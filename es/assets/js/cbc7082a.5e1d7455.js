"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[977],{5680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>y});var o=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=o.createContext({}),c=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=t,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return a?o.createElement(y,i(i({ref:n},u),{},{components:a})):o.createElement(y,i({ref:n},u))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7215:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(8168),t=(a(6540),a(5680));const r={sidebar_position:14,title:"Voz en L\xednea",keywords:["voice channels","real-time","count","channel","Hidden Channels"]},i="Voz en L\xednea",l={unversionedId:"modules/voice_online",id:"modules/voice_online",title:"Voz en L\xednea",description:"Una funci\xf3n que permite a los usuarios realizar un seguimiento de cu\xe1ntos miembros est\xe1n conectados activamente a los canales de voz del servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/modules/voice_online.mdx",sourceDirName:"modules",slug:"/modules/voice_online",permalink:"/es/docs/modules/voice_online",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/voice_online.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Voz en L\xednea",keywords:["voice channels","real-time","count","channel","Hidden Channels"]},sidebar:"tutorialSidebar",previous:{title:"Enlaces Temporales",permalink:"/es/docs/modules/temp_link"},next:{title:"Anti-Raid",permalink:"/es/docs/modules/anti_raid"}},s={},c=[{value:"Texto",id:"texto",level:2},{value:"Canal",id:"canal",level:2},{value:"Sin Bots",id:"sin-bots",level:2}],u={toc:c},d="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,o.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"voz-en-l\xednea"},"Voz en L\xednea"),(0,t.yg)("p",null,"Una funci\xf3n que permite a los usuarios realizar un seguimiento de cu\xe1ntos miembros est\xe1n conectados activamente a los canales de voz del servidor."),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"Esta funci\xf3n solo est\xe1 disponible para suscriptores de los ",(0,t.yg)("strong",{parentName:"p"},"Niveles Premium 1 y 2"),".")),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"El dashboard es donde se administran las configuraciones descritas aqu\xed."),(0,t.yg)("ol",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ol"},"Ve al dashboard e inicia sesi\xf3n."),(0,t.yg)("li",{parentName:"ol"},"Selecciona tu servidor en el men\xfa de la izquierda."),(0,t.yg)("li",{parentName:"ol"},"Elige el apartado y aseg\xfarate de que est\xe9 habilitado."))),(0,t.yg)("h2",{id:"texto"},"Texto"),(0,t.yg)("p",null,"El texto que desea que la sala o la categor\xeda muestre y actualice. ","[00]"," es la variable para el recuento de miembros, debe agregarse para que el bot muestre la cantidad de usuarios que est\xe1n conectados activamente a los canales de voz. Esto permite a los usuarios ver el n\xfamero de miembros en tiempo real en los canales de voz, lo que facilita ver cu\xe1ntas personas est\xe1n activas y participando actualmente."),(0,t.yg)("h2",{id:"canal"},"Canal"),(0,t.yg)("p",null,"El canal donde desea que se muestre el texto, tenga en cuenta que puede ser un canal de voz o una categor\xeda. Esta funci\xf3n permite a los usuarios elegir el canal en el que se mostrar\xe1 el texto del recuento de miembros, lo que les brinda la flexibilidad de elegir la mejor ubicaci\xf3n para su servidor."),(0,t.yg)("h1",{id:"canales-ocultos"},"Canales Ocultos"),(0,t.yg)("p",null,"Esta opci\xf3n le dar\xe1 la capacidad de evitar que el bot cuente los miembros conectados a un canal espec\xedfico, donde no se incluir\xe1n en el recuento."),(0,t.yg)("h2",{id:"sin-bots"},"Sin Bots"),(0,t.yg)("p",null,"Esta es una opci\xf3n opcional, si no est\xe1 habilitada, entonces la funci\xf3n incluir\xe1 el recuento de bots conectados al sistema de voz en l\xednea. Si est\xe1 habilitado, entonces el recuento de bots no se incluir\xe1. Esta funci\xf3n es \xfatil para los usuarios que desean ver el n\xfamero de usuarios humanos en los canales de voz, en lugar del n\xfamero total de usuarios que incluyen bots."),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"Tenga en cuenta que el recuento de miembros se actualizar\xe1 cada ",(0,t.yg)("strong",{parentName:"p"},"5 minutos"),".")),(0,t.yg)("p",null,"En general, Voz en l\xednea es una funci\xf3n poderosa que permite a los usuarios realizar un seguimiento del n\xfamero de miembros en los canales de voz de su servidor, proporcion\xe1ndoles informaci\xf3n en tiempo real y brind\xe1ndoles la flexibilidad de elegir la mejor ubicaci\xf3n para el texto del recuento de miembros. Tambi\xe9n ofrece opciones para ocultar ciertos canales del recuento y para excluir el recuento de bots del recuento total de miembros, lo que lo convierte en una herramienta vers\xe1til para administrar y monitorear un servidor."))}m.isMDXComponent=!0}}]);