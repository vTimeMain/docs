"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[621],{230:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>t});var l=n(8168),o=(n(6540),n(5680));const i={sidebar_position:13,keyword:["link","temporary link command","premium subscribers","link uses","invite link"]},s="Enlaces Temporales",r={unversionedId:"modules/temp_link",id:"modules/temp_link",title:"Enlaces Temporales",description:"La funci\xf3n de Comando de Enlace Temporal permite a los administradores de servidores configurar un comando para que los usuarios puedan invitar a sus amigos f\xe1cilmente. Las siguientes instrucciones proporcionan una gu\xeda paso a paso sobre c\xf3mo configurar el comando.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/modules/temp_link.mdx",sourceDirName:"modules",slug:"/modules/temp_link",permalink:"/es/docs/modules/temp_link",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/modules/temp_link.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,keyword:["link","temporary link command","premium subscribers","link uses","invite link"]},sidebar:"tutorialSidebar",previous:{title:"Canales Temporales",permalink:"/es/docs/modules/temporary_channels"},next:{title:"Voz en L\xednea",permalink:"/es/docs/modules/voice_online"}},d={},t=[{value:"Nombre del Comando",id:"nombre-del-comando",level:2},{value:"Mensajes",id:"mensajes",level:2},{value:"Mensaje Cuando se Solicita un Enlace",id:"mensaje-cuando-se-solicita-un-enlace",level:3},{value:"Mensaje Cuando no se Puede Enviar el Enlace",id:"mensaje-cuando-no-se-puede-enviar-el-enlace",level:3},{value:"Roles",id:"roles",level:2},{value:"Roles Deshabilitados",id:"roles-deshabilitados",level:3},{value:"Roles Habilitados",id:"roles-habilitados",level:3},{value:"Canales",id:"canales",level:2},{value:"Canales Deshabilitados",id:"canales-deshabilitados",level:3},{value:"Canales Habilitados",id:"canales-habilitados",level:3},{value:"Informaci\xf3n del Enlace",id:"informaci\xf3n-del-enlace",level:2},{value:"Texto con el Mensaje del Enlace",id:"texto-con-el-mensaje-del-enlace",level:3},{value:"Usos del Enlace",id:"usos-del-enlace",level:3},{value:"Canal Predeterminado de Invitaci\xf3n",id:"canal-predeterminado-de-invitaci\xf3n",level:3},{value:"Edad del Enlace en Minutos",id:"edad-del-enlace-en-minutos",level:3},{value:"Tiempo de Espera",id:"tiempo-de-espera",level:2},{value:"Tiempo de Espera en Horas",id:"tiempo-de-espera-en-horas",level:3},{value:"Cantidad de enlaces que se pueden solicitar antes del tiempo de espera",id:"cantidad-de-enlaces-que-se-pueden-solicitar-antes-del-tiempo-de-espera",level:3},{value:"Mensaje de tiempo de espera",id:"mensaje-de-tiempo-de-espera",level:3},{value:"Deshabilitar el tiempo de espera",id:"deshabilitar-el-tiempo-de-espera",level:2},{value:"Eliminar la invocaci\xf3n del comando del usuario y la respuesta del bot",id:"eliminar-la-invocaci\xf3n-del-comando-del-usuario-y-la-respuesta-del-bot",level:2}],u={toc:t},c="wrapper";function p(e){let{components:a,...n}=e;return(0,o.yg)(c,(0,l.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"enlaces-temporales"},"Enlaces Temporales"),(0,o.yg)("p",null,"La funci\xf3n de Comando de Enlace Temporal permite a los administradores de servidores configurar un comando para que los usuarios puedan invitar a sus amigos f\xe1cilmente. Las siguientes instrucciones proporcionan una gu\xeda paso a paso sobre c\xf3mo configurar el comando."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"El dashboard es donde se administran las configuraciones descritas aqu\xed."),(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"Vaya al dashboard e inicie sesi\xf3n."),(0,o.yg)("li",{parentName:"ol"},"Seleccione su servidor del men\xfa de la izquierda."),(0,o.yg)("li",{parentName:"ol"},"Elija el apartado y aseg\xfarese de que est\xe9 habilitado."))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Esta funci\xf3n solo est\xe1 disponible para suscriptores premium.")),(0,o.yg)("h2",{id:"nombre-del-comando"},"Nombre del Comando"),(0,o.yg)("p",null,"El primer paso es ingresar un nombre de comando que los usuarios puedan escribir para recibir un enlace personalizado. Este comando puede ser cualquier texto, prefijo, s\xedmbolo o car\xe1cter deseado."),(0,o.yg)("h2",{id:"mensajes"},"Mensajes"),(0,o.yg)("h3",{id:"mensaje-cuando-se-solicita-un-enlace"},"Mensaje Cuando se Solicita un Enlace"),(0,o.yg)("p",null,"Cuando un usuario escribe el comando, aparecer\xe1 un mensaje como respuesta, indicando que el enlace se ha enviado correctamente a los DM del usuario. El texto de este mensaje se puede ajustar seg\xfan se desee."),(0,o.yg)("h3",{id:"mensaje-cuando-no-se-puede-enviar-el-enlace"},"Mensaje Cuando no se Puede Enviar el Enlace"),(0,o.yg)("p",null,"Si el bot no puede enviar el enlace, se mostrar\xe1 un mensaje separado como respuesta, indicando que el bot no pudo enviar el enlace porque los DM del usuario est\xe1n cerrados. El texto de este mensaje tambi\xe9n se puede ajustar seg\xfan se desee."),(0,o.yg)("h2",{id:"roles"},"Roles"),(0,o.yg)("h3",{id:"roles-deshabilitados"},"Roles Deshabilitados"),(0,o.yg)("p",null,"El administrador puede impedir que roles espec\xedficos puedan usar el comando de enlace."),(0,o.yg)("h3",{id:"roles-habilitados"},"Roles Habilitados"),(0,o.yg)("p",null,"Los usuarios con los roles elegidos podr\xe1n usar el comando de enlace."),(0,o.yg)("h2",{id:"canales"},"Canales"),(0,o.yg)("h3",{id:"canales-deshabilitados"},"Canales Deshabilitados"),(0,o.yg)("p",null,"El bot no responder\xe1 al comando de enlace en los canales seleccionados."),(0,o.yg)("h3",{id:"canales-habilitados"},"Canales Habilitados"),(0,o.yg)("p",null,"El bot responder\xe1 al comando de enlace en los canales seleccionados."),(0,o.yg)("h2",{id:"informaci\xf3n-del-enlace"},"Informaci\xf3n del Enlace"),(0,o.yg)("h3",{id:"texto-con-el-mensaje-del-enlace"},"Texto con el Mensaje del Enlace"),(0,o.yg)("p",null,"El texto enviado a los DM de un usuario cuando usa el comando incluir\xe1 un enlace de invitaci\xf3n junto con informaci\xf3n sobre los usos del enlace y el tiempo de vencimiento. El texto de este mensaje se puede ajustar seg\xfan se desee."),(0,o.yg)("h3",{id:"usos-del-enlace"},"Usos del Enlace"),(0,o.yg)("p",null,"El administrador puede especificar cu\xe1ntas veces se puede usar el enlace y limitar el n\xfamero de usuarios que pueden unirse con ese enlace. Se proporciona una barra de desplazamiento ajustable para establecer el n\xfamero de usos del enlace."),(0,o.yg)("h3",{id:"canal-predeterminado-de-invitaci\xf3n"},"Canal Predeterminado de Invitaci\xf3n"),(0,o.yg)("p",null,'El administrador puede especificar en qu\xe9 canal pertenecer\xe1n los enlaces de invitaci\xf3n. Por ejemplo, si el administrador establece el seguimiento en "Prueba", los usuarios que usen el enlace ser\xe1n redirigidos al canal "Prueba" al unirse.'),(0,o.yg)("h3",{id:"edad-del-enlace-en-minutos"},"Edad del Enlace en Minutos"),(0,o.yg)("p",null,"El administrador puede especificar la edad del enlace en minutos. El enlace expirar\xe1 a menos que se use dentro de este tiempo. Se proporciona una barra de desplazamiento ajustable para establecer el enlace."),(0,o.yg)("h2",{id:"tiempo-de-espera"},"Tiempo de Espera"),(0,o.yg)("h3",{id:"tiempo-de-espera-en-horas"},"Tiempo de Espera en Horas"),(0,o.yg)("p",null,"El administrador puede establecer un tiempo de espera para que los usuarios soliciten el enlace nuevamente."),(0,o.yg)("h3",{id:"cantidad-de-enlaces-que-se-pueden-solicitar-antes-del-tiempo-de-espera"},"Cantidad de enlaces que se pueden solicitar antes del tiempo de espera"),(0,o.yg)("p",null,"El administrador puede establecer la cantidad de enlaces que se pueden solicitar antes de que se imponga el tiempo de espera."),(0,o.yg)("h3",{id:"mensaje-de-tiempo-de-espera"},"Mensaje de tiempo de espera"),(0,o.yg)("p",null,"Cuando un usuario intenta solicitar un nuevo enlace antes de que haya terminado el tiempo de espera, aparecer\xe1 un mensaje como respuesta que indicar\xe1 que deben esperar la cantidad de tiempo especificada antes de solicitar un nuevo enlace. El texto de este mensaje se puede ajustar seg\xfan se desee."),(0,o.yg)("h2",{id:"deshabilitar-el-tiempo-de-espera"},"Deshabilitar el tiempo de espera"),(0,o.yg)("p",null,'El administrador puede permitir que los usuarios con permiso de "Invitar miembros" eviten el tiempo de espera y creen enlaces en cualquier momento.'),(0,o.yg)("h2",{id:"eliminar-la-invocaci\xf3n-del-comando-del-usuario-y-la-respuesta-del-bot"},"Eliminar la invocaci\xf3n del comando del usuario y la respuesta del bot"),(0,o.yg)("p",null,"El administrador puede elegir que el bot elimine el comando del usuario y la respuesta del bot despu\xe9s de cinco segundos o mantenerlos persistentes. Habilitar la opci\xf3n eliminar\xe1 el mensaje y deshabilitarla lo mantendr\xe1."),(0,o.yg)("p",null,"::: importante"),(0,o.yg)("p",null,"Estos son los siguientes l\xedmites para nuestras opciones de enlace temporal:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Edad del enlace en minutos ",(0,o.yg)("inlineCode",{parentName:"li"},"1440")),(0,o.yg)("li",{parentName:"ul"},"Tiempo de espera en horas ",(0,o.yg)("inlineCode",{parentName:"li"},"9999999999999")),(0,o.yg)("li",{parentName:"ul"},"Cu\xe1ntos enlaces se pueden solicitar antes del tiempo de espera ",(0,o.yg)("inlineCode",{parentName:"li"},"9999999999999"))),(0,o.yg)("p",null,":::"))}p.isMDXComponent=!0},5680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var l=n(6540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,l,o=function(e,a){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=l.createContext({}),t=function(e){var a=l.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=t(e.components);return l.createElement(d.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=t(n),m=o,y=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?l.createElement(y,s(s({ref:a},u),{},{components:n})):l.createElement(y,s({ref:a},u))}));function y(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var t=2;t<i;t++)s[t]=n[t];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);