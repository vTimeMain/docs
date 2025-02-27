"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[123],{5680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>c});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),m=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=m(e.components);return t.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),y=r,c=d["".concat(u,".").concat(y)]||d[y]||p[y]||i;return a?t.createElement(c,l(l({ref:n},s),{},{components:a})):t.createElement(c,l({ref:n},s))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7178:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=a(8168),r=(a(6540),a(5680));const i={sidebar_position:2,slug:"/getting-started/dashboard",title:"Y\xf6netim Paneli Ayarlar\u0131",description:"Sunucunuzu y\xf6netmek ve mod\xfclleri ve komutlar\u0131 ayarlamak i\xe7in kontrol panelini kullanma hakk\u0131nda kapsaml\u0131 bir d\xf6k\xfcmana ula\u015f\u0131n.",keywords:["dashboard","configuration","manage","server","modules"]},l="Y\xf6netim Paneli: Y\xf6netim Paneline Genel Bak\u0131\u015f",o={unversionedId:"getting-started/dashboard",id:"getting-started/dashboard",title:"Y\xf6netim Paneli Ayarlar\u0131",description:"Sunucunuzu y\xf6netmek ve mod\xfclleri ve komutlar\u0131 ayarlamak i\xe7in kontrol panelini kullanma hakk\u0131nda kapsaml\u0131 bir d\xf6k\xfcmana ula\u015f\u0131n.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/getting-started/dashboard.mdx",sourceDirName:"getting-started",slug:"/getting-started/dashboard",permalink:"/tr/docs/getting-started/dashboard",draft:!1,editUrl:"https://github.com/vTimeMain/docs/blob/master/docs/getting-started/dashboard.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/getting-started/dashboard",title:"Y\xf6netim Paneli Ayarlar\u0131",description:"Sunucunuzu y\xf6netmek ve mod\xfclleri ve komutlar\u0131 ayarlamak i\xe7in kontrol panelini kullanma hakk\u0131nda kapsaml\u0131 bir d\xf6k\xfcmana ula\u015f\u0131n.",keywords:["dashboard","configuration","manage","server","modules"]},sidebar:"tutorialSidebar",previous:{title:"vTime Kurulumu",permalink:"/tr/docs/getting-started/setup"},next:{title:"S\u0131k\xe7a Sorulan Sorular",permalink:"/tr/docs/getting-started/faq"}},u={},m=[{value:"Y\xf6netim Paneline Eri\u015fim",id:"y\xf6netim-paneline-eri\u015fim",level:2},{value:"Mod\xfclleri ve Komutlar\u0131 Yap\u0131land\u0131rma",id:"mod\xfclleri-ve-komutlar\u0131-yap\u0131land\u0131rma",level:2}],s={toc:m},d="wrapper";function p(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"y\xf6netim-paneli-y\xf6netim-paneline-genel-bak\u0131\u015f"},"Y\xf6netim Paneli: Y\xf6netim Paneline Genel Bak\u0131\u015f"),(0,r.yg)("p",null,"Sunucunuzun yap\u0131land\u0131rmak i\xe7in Y\xf6netim Panelini kullanabilirsiniz. T\xfcm mod\xfclleri ve komutlar\u0131 y\xf6netmek i\xe7in kullan\u0131m\u0131 kolay bir aray\xfcz mevcuttur. Karma\u015f\u0131k ve zaman alan komut sat\u0131r\u0131 yap\u0131land\u0131rmalar\u0131na elveda deyin!"),(0,r.yg)("h2",{id:"y\xf6netim-paneline-eri\u015fim"},"Y\xf6netim Paneline Eri\u015fim"),(0,r.yg)("p",null,"vTime Y\xf6netici Paneline eri\u015fim \xe7ok basit. \u0130\u015fte Y\xf6netici Paneline eri\u015fmek i\xe7in ad\u0131mlar:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://vTime.io/"},"Website"),"'sini ziyaret edin ve hesab\u0131n\u0131za giri\u015f yap\u0131n."),(0,r.yg)("li",{parentName:"ul"},"Y\xf6netici Paneline eri\u015fim butonu ana sayfada g\xf6r\xfcnmektedir, panele eri\u015fmek i\xe7in t\u0131klayabilirsiniz.")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Sunucunuzu listede g\xf6rebilmeniz i\xe7in ",(0,r.yg)("inlineCode",{parentName:"p"},"Y\xf6netici")," yetkinizin bulunmas\u0131 gerekmektedir.")),(0,r.yg)("h2",{id:"mod\xfclleri-ve-komutlar\u0131-yap\u0131land\u0131rma"},"Mod\xfclleri ve Komutlar\u0131 Yap\u0131land\u0131rma"),(0,r.yg)("p",null,"Y\xf6netim Panelindeki her mod\xfcl, sa\u011f \xfcst k\xf6\u015fede, o mod\xfcl\xfc tamamen devre d\u0131\u015f\u0131 b\u0131rakman\u0131z\u0131 sa\u011flayan bir buton bulunur. Ek olarak, her komutu etkinle\u015ftirmek veya devre d\u0131\u015f\u0131 b\u0131rakmak i\xe7in kendi butonu ve ayr\u0131ca \xf6zelle\u015ftirmeler yapmak i\xe7in bir d\xfczenleme butonu vard\u0131r."),(0,r.yg)("p",null,"Her komut i\xe7in kullan\u0131labilen \xf6zelle\u015ftirme se\xe7eneklerinden baz\u0131lar\u0131 \u015funlard\u0131r:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Alternatif Kullan\u0131mlar"),": Komutu kullanmay\u0131 kolayla\u015ft\u0131ran Alternatif Kullan\u0131m yollar\u0131 ekleyebilirsiniz."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Etkin Roller"),": Komutu kullanabilecek ki\u015fileri belirli rollerle s\u0131n\u0131rlay\u0131n."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Devre D\u0131\u015f\u0131 Roller"),": Belirli rollerin komutu kullanmas\u0131n\u0131 engelleyin."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Etkin Kanallar"),": Komutun kullan\u0131labilece\u011fi kanallar\u0131 belirleyin."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Devre D\u0131\u015f\u0131 Kanallar"),": Komutun kullan\u0131lamayaca\u011f\u0131 kanallar\u0131 belirleyin."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Komut mesaj\u0131 silinince botun mesaj\u0131n\u0131 da sil"),": G\xf6nderen mesaj\u0131n\u0131 silerse botun yan\u0131t\u0131 da silinir."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Komut \xe7a\u011f\u0131rma mesaj\u0131n\u0131 otomatik sil"),": Komut kullan\u0131m mesaj\u0131n\u0131 siler."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Bot yan\u0131t mesajlar\u0131n\u0131 5 saniye sonra otomatik sil"),": Botun yan\u0131t\u0131 g\xf6nderildikten 5 saniye sonra silinecektir.")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Sunucunuzu listede g\xf6remiyor musunuz? Y\xf6netici Paneline tam eri\u015fim i\xe7in gereken ",(0,r.yg)("inlineCode",{parentName:"p"},"Y\xf6netici")," iznine sahip olup olmad\u0131\u011f\u0131n\u0131z\u0131 kontrol edin. Rol\xfcn\xfcz\xfcn ",(0,r.yg)("inlineCode",{parentName:"p"},"Y\xf6netici")," iznine sahip oldu\u011fundan emin olun.")))}p.isMDXComponent=!0}}]);