(this["webpackJsonpsteven-universe-react"]=this["webpackJsonpsteven-universe-react"]||[]).push([[0],{14:function(e,t,a){e.exports={cardHome:"CardHome_cardHome__1OPta",cardImg:"CardHome_cardImg__cf0wq",titleContainer:"CardHome_titleContainer__3L1mG",cardTitle:"CardHome_cardTitle__2lAJa"}},15:function(e,t,a){e.exports={container:"CardInfo_container__2KWF7",iconContainer:"CardInfo_iconContainer__5cILT",icon:"CardInfo_icon__1P2Rh",lyrics:"CardInfo_lyrics__1tPtr"}},18:function(e,t,a){e.exports={main:"Home_main__16Znb",logo:"Home_logo__3auvB",cardContainer:"Home_cardContainer__bnFus"}},19:function(e,t,a){e.exports={main:"Characters_main__3b1V_",cardContainer:"Characters_cardContainer__MhATd",logo:"Characters_logo__2L86s"}},20:function(e,t,a){e.exports={main:"Episodes_main__3wxrs",cardContainer:"Episodes_cardContainer__3j7bt",logo:"Episodes_logo__2MT36"}},21:function(e,t,a){e.exports={main:"Songs_main__2VG1J",cardContainer:"Songs_cardContainer__17mra",logo:"Songs_logo__1PODx"}},24:function(e,t,a){e.exports={navList:"Nav_navList__2uOCT",link:"Nav_link__1CVGd",navItem:"Nav_navItem__1C5nY"}},31:function(e,t,a){e.exports={button:"Button_button__3QF_k"}},36:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(27),s=a.n(c),r=(a(36),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))}),i=a(11),o=a(3),l=a(18),j=a.n(l),m=a(14),d=a(0);var u=function(e){var t=e.title,a=e.img;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("article",{className:m.cardHome,children:[Object(d.jsx)("img",{className:m.cardImg,src:a,alt:"watermelon dog"}),Object(d.jsx)("span",{className:m.titleContainer,children:Object(d.jsx)("p",{className:m.cardTitle,children:t})})]})})},b=a(24),x=a.n(b);var O=function(){return Object(d.jsx)("ul",{className:x.a.navList,children:["Home","Characters","Episodes","Songs"].map((function(e,t){var a="/".concat(e).toLowerCase();return Object(d.jsx)(i.b,{className:x.a.link,to:a,children:e},t)}))})},_=a.p+"static/media/logo.fddee89d.png",h=a.p+"static/media/watermelon.32db7a2c.png",p=a.p+"static/media/cookieCat.1bc2752f.png",g=a.p+"static/media/shield.6a2c218d.png";var f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("main",{className:j.a.main,children:[Object(d.jsx)("img",{className:j.a.logo,src:_,alt:"logo steven universe"}),Object(d.jsxs)("div",{className:j.a.cardContainer,children:[Object(d.jsxs)(i.b,{to:"/characters",children:[" ",Object(d.jsx)(u,{title:"Characters",img:h})]}),Object(d.jsxs)(i.b,{to:"/episodes",children:["   ",Object(d.jsx)(u,{title:"Episodes",img:p})," "]}),Object(d.jsxs)(i.b,{to:"/songs",children:["      ",Object(d.jsx)(u,{title:"Songs",img:g}),"    "]})]})]})]})},C=a(10),v=a.n(C),N=a(13),y=a(5),I=a(19),k=a.n(I),F=a(15),S=a.n(F),w=a(29),L=a(30);var H=function(e){var t=e.lyrics,a=e.callback,n=Object(d.jsx)(w.a,{icon:L.a,className:S.a.icon,onClick:a});return Object(d.jsxs)("article",{className:S.a.container,children:[Object(d.jsx)("header",{className:S.a.iconContainer,children:n}),Object(d.jsx)("main",{children:Object(d.jsx)("p",{className:S.a.lyrics,children:t})})]})},K=a(9),E=a.n(K);var T=function(e){var t=e.dataKeys,a=e.data,c=a.name,s=a.image,r=Object(n.useState)(!1),i=Object(y.a)(r,2),o=i[0],l=i[1];function j(e){l(e.target.attributes.lyrics.value)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("article",{className:E.a.card,children:[Object(d.jsx)("section",{className:E.a.nameContainer,children:Object(d.jsx)("h2",{children:c})}),Object(d.jsxs)("section",{className:E.a.cap,children:[Object(d.jsx)("h2",{children:c}),Object(d.jsx)("ul",{children:t.map((function(t,a){var n=e.data[t];return Object(d.jsxs)("li",{className:E.a.item,children:["link"===t?Object(d.jsx)("a",{href:n,className:E.a.itemKey,children:"+Info"}):"lyrics"===t?Object(d.jsx)("p",{className:E.a.itemKey,children:"Lyrics"}):Object(d.jsxs)("p",{className:E.a.itemKey,children:[t,":"]}),"link"===t?Object(d.jsx)(d.Fragment,{}):"lyrics"===t?Object(d.jsx)("p",{className:E.a.itemLyric,lyrics:n,onClick:j,children:"Sing Out Loud..."}):Object(d.jsx)("p",{className:E.a.itemValue,children:n||"No info"})]},a)}))})]}),Object(d.jsx)("section",{className:E.a.imgContainer,children:Object(d.jsx)("img",{className:E.a.cardImg,src:s,alt:c})}),o&&Object(d.jsx)(H,{lyrics:o,callback:function(e){l("")}})]})})},J=a(31),P=a.n(J);var V=function(e){var t=e.text,a=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:P.a.button,onClick:a,children:t})})};var q=function(){var e=["species","gem_type","gender_pronoun"],t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(10),i=Object(y.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(!1),m=Object(y.a)(j,2),u=m[0],b=m[1];function x(){return(x=Object(N.a)(v.a.mark((function e(){var t,a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/charactersSeeds/charactersFixed.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.slice(0,o),c=a.length,s(n),b(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[o]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("main",{className:k.a.main,children:[Object(d.jsx)("img",{className:k.a.logo,src:_,alt:"logo steven universe"}),Object(d.jsx)("div",{className:k.a.cardContainer,children:c&&c.map((function(t,a){return t.name?Object(d.jsx)(T,{dataKeys:e,data:t},a):Object(d.jsx)(d.Fragment,{})}))}),o<u&&Object(d.jsx)(V,{text:"load more...",onClick:function(){l((function(e){return e+10}))}})]})]})},B=a(20),R=a.n(B);var D=function(){var e=["season","episode","link"],t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(10),i=Object(y.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(!1),m=Object(y.a)(j,2),u=m[0],b=m[1];function x(){return(x=Object(N.a)(v.a.mark((function e(){var t,a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/episodesSeeds/episodesFixed.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.slice(0,o),c=a.length,s(n),b(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[o]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("main",{className:R.a.main,children:[Object(d.jsx)("img",{className:R.a.logo,src:_,alt:"logo steven universe"}),Object(d.jsx)("div",{className:R.a.cardContainer,children:c&&c.map((function(t,a){return t.name?Object(d.jsx)(T,{dataKeys:e,data:t},a):Object(d.jsx)(d.Fragment,{})}))}),o<u&&Object(d.jsx)(V,{text:"load more...",onClick:function(){l((function(e){return e+10}))}})]})]})},G=a(21),U=a.n(G);var A=function(){var e=["composers","vocalilist","lyrics"],t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(10),i=Object(y.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(!1),m=Object(y.a)(j,2),u=m[0],b=m[1];function x(){return(x=Object(N.a)(v.a.mark((function e(){var t,a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/songsSeeds/songsFixed.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.slice(0,o),c=a.length,s(n),b(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[o]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("main",{className:U.a.main,children:[Object(d.jsx)("img",{className:U.a.logo,src:_,alt:"logo steven universe"}),Object(d.jsx)("div",{className:U.a.cardContainer,children:c&&c.map((function(t,a){return t.name?Object(d.jsx)(T,{dataKeys:e,data:t},a):Object(d.jsx)(d.Fragment,{})}))}),o<u&&Object(d.jsx)(V,{text:"load more...",onClick:function(){l((function(e){return e+10}))}})]})]})};s.a.render(Object(d.jsxs)(i.a,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(d.jsx)(o.a,{exact:!0,path:"/home",component:f}),Object(d.jsx)(o.a,{exact:!0,path:"/characters",component:q}),Object(d.jsx)(o.a,{exact:!0,path:"/episodes",component:D}),Object(d.jsx)(o.a,{exact:!0,path:"/songs",component:A})]}),document.getElementById("root")),r()},9:function(e,t,a){e.exports={card:"CardItem_card__1j8Do",nameContainer:"CardItem_nameContainer__1ajPg",imgContainer:"CardItem_imgContainer__31Hw0",cardImg:"CardItem_cardImg__LXRNq",cap:"CardItem_cap__1EyKV",itemKey:"CardItem_itemKey__83zR3",itemValue:"CardItem_itemValue__1_taC",itemLyric:"CardItem_itemLyric__2R2jW"}}},[[49,1,2]]]);
//# sourceMappingURL=main.11fa2c62.chunk.js.map