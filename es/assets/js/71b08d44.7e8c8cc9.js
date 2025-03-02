"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[769],{1295:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=o(8168),r=(o(6540),o(5680));const t={sidebar_position:4,keywords:["Moderation","Manage Commands","block","unblock","blacklist"]},l="Moderaci\xf3n",i={unversionedId:"modules/moderation",id:"modules/moderation",title:"Moderaci\xf3n",description:"La p\xe1gina de Moderaci\xf3n contiene opciones importantes para seleccionar canales de comandos y mostrar los detalles de la lista negra, con control total sobre el bloqueo y desbloqueo de miembros. Vamos a explicar cada paso.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/modules/moderation.mdx",sourceDirName:"modules",slug:"/modules/moderation",permalink:"/es/docs/modules/moderation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["Moderation","Manage Commands","block","unblock","blacklist"]},sidebar:"defaultSidebar",previous:{title:"Configuraci\xf3n del servidor",permalink:"/es/docs/modules/serversettings"},next:{title:"Registros",permalink:"/es/docs/modules/logs"}},s={},c=[{value:"Gestionar Comandos",id:"gestionar-comandos",level:2},{value:"Configuraci\xf3n de la Lista Negra",id:"configuraci\xf3n-de-la-lista-negra",level:2}],d={toc:c},m="wrapper";function u(e){let{components:a,...o}=e;return(0,r.yg)(m,(0,n.A)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"moderaci\xf3n"},"Moderaci\xf3n"),(0,r.yg)("p",null,"La p\xe1gina de Moderaci\xf3n contiene opciones importantes para seleccionar canales de comandos y mostrar los detalles de la lista negra, con control total sobre el bloqueo y desbloqueo de miembros. Vamos a explicar cada paso."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"El panel de control es donde gestionas las configuraciones descritas aqu\xed."),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"Ve al panel de control e inicia sesi\xf3n."),(0,r.yg)("li",{parentName:"ol"},"Selecciona tu servidor de la lista de servidores en la barra lateral."),(0,r.yg)("li",{parentName:"ol"},"Elige la secci\xf3n de Moderaci\xf3n."))),(0,r.yg)("h2",{id:"gestionar-comandos"},"Gestionar Comandos"),(0,r.yg)("p",null,'Si deseas usar los comandos del bot en canales espec\xedficos, habilita la opci\xf3n en la secci\xf3n "Gestionar Comandos". Luego, haz clic en "Configuraci\xf3n" para elegir los canales desde los cuales el bot aceptar\xe1 los comandos.'),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},'Si desactivas la opci\xf3n "Gestionar Comandos", el bot aceptar\xe1 comandos de cualquier canal. Sin embargo, los canales seleccionados seguir\xe1n guardados hasta que vuelvas a habilitar la opci\xf3n.')),(0,r.yg)("h2",{id:"configuraci\xf3n-de-la-lista-negra"},"Configuraci\xf3n de la Lista Negra"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"En esta opci\xf3n, ver\xe1s la lista negra con todos los detalles:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Miembro:")," El miembro bloqueado."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Raz\xf3n:")," Muestra la raz\xf3n del bloqueo del miembro."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\xdaltimo Tiempo Total:")," El tiempo total que ten\xeda el miembro antes de ser bloqueado. El bot dejar\xe1 de calcular el tiempo del miembro hasta que se elimine el bloqueo."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Responsable:")," El moderador que realiz\xf3 el bloqueo."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Hora del Bloqueo:")," El momento en que se bloque\xf3 al miembro."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Acci\xf3n:"),' "Eliminar" significa desbloquear al miembro. Despu\xe9s de desbloquear, el bot continuar\xe1 calculando el tiempo del miembro y mantendr\xe1 su tiempo total anterior.'))),(0,r.yg)("p",null,"Haz clic en '+Bloquear' para bloquear a un nuevo miembro. Esta opci\xf3n incluye campos para la raz\xf3n y el miembro. Despu\xe9s de seleccionar al miembro e ingresar la raz\xf3n, haz clic en \"Guardar\" para bloquear al miembro."))}u.isMDXComponent=!0},5680:(e,a,o)=>{o.d(a,{xA:()=>d,yg:()=>g});var n=o(6540);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(o),p=r,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||t;return o?n.createElement(g,l(l({ref:a},d),{},{components:o})):n.createElement(g,l({ref:a},d))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,l=new Array(t);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<t;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);