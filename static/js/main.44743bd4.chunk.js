(this["webpackJsonppage-im"]=this["webpackJsonppage-im"]||[]).push([[0],{225:function(e,t,a){},226:function(e,t,a){},269:function(e,t,a){e.exports=a(536)},274:function(e,t,a){},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){return"http://yonaswr.com"}},325:function(e,t,a){},49:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u}));var n=a(47),r=a.n(n),l=a(72),c=a(7),o=a(0),i=a.n(o),s=a(28),u=Object(o.createContext)(),m=Object(s.a)(),d=window.location.pathname.toString();d=d?d.substr(1):"";t.b=function(t){var a=Object(o.useState)([]),n=Object(c.a)(a,2),s=n[0],f=n[1],p=Object(o.useState)([]),b=Object(c.a)(p,2),E=b[0],h=b[1];return Object(o.useEffect)((function(){if(console.log("At config context"),localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){console.log("At config context get fields",E);var e="".concat(m,"/public/fields/data?client=1");fetch(e,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){console.error("Error:",e)}))}else{var t="".concat(m,"/session/createNewUserDevice");fetch(t).then(function(){var e=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,t.ok&&a.success?(localStorage.freeUserToken=a.token,window.location.reload()):console.log("Error: config context",a.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return console.log(e)}))}}),[e]),Object(o.useEffect)((function(){console.log("At config context get fields",E),E&&E.length>0&&f(E.filter((function(e){return e.application===d})))}),[E]),i.a.createElement(u.Provider,{value:{appFields:s}},t.children)}}).call(this,a(59))},514:function(e,t,a){},515:function(e,t,a){},516:function(e,t,a){},536:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(274),a(7)),i=a(49),s=a(28),u=Object(n.createContext)(),m=Object(s.a)(),d=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),s=(Object(o.a)(i,1)[0],Object(n.useState)(""));Object(o.a)(s,1)[0];return Object(n.useEffect)((function(){if(localStorage.menu&&null!==localStorage.menu&&"undefined"!==localStorage.menu)if(localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){var e="".concat(m,"/public/menu/data?customer=1");fetch(e,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){console.error("Error:",e)}))}else console.log("no user tocken Menu context");else c(JSON.stringify(localStorage.menu))}),[]),Object(n.useEffect)((function(){localStorage.menu&&null!==localStorage.menu&&"undefined"!==localStorage.menu||(localStorage.setItem("menu",JSON.stringify(l)),console.log("menu context update menu,",l))}),[l]),r.a.createElement(u.Provider,{value:{menuList:l}},e.children)},f=Object(n.createContext)(null),p=function(e){var t=Object(n.useState)([{countHiddenFields:0}]),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(f.Provider,{value:{global:l,settingGlobal:function(e){c([{countHiddenFields:e}])}}},e.children)},b=a(56),E=a(584),h=a(17),g=a(586),O=a(587),v=a(582),k=a(117),j=a(258),S=a(585),y=a(594),w=a(256),N=a(247),C=a.n(N),x=a(248),T=a.n(x),A=a(155),I=a.n(A),F=a(153),H=a.n(F),P=a(154),U=a.n(P),D=a(249),W=a.n(D),z=a(593),B=a(250),R=a.n(B),M=a(30),q=a(580),J=a(583),L=a(156),_=a.n(L),V=a(157),G=a.n(V),X=a(251),K=a.n(X),Q=(a(276),a(51)),Y=a(589),Z=a(595),$=a(596),ee=a(597),te=Y.a.SubMenu,ae=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=(t[1],Object(n.useContext)(u).menuList);return l&&l.length>0&&(localStorage.menu=JSON.stringify(l)),r.a.createElement("div",{style:{width:170}},r.a.createElement(Y.a,{mode:"inline",theme:"dark",inlineCollapsed:a},l?l.sort((function(e,t){return e.key>t.key?1:-1})).map((function(e,t){return r.a.createElement(Y.a.Item,{key:e.id,icon:r.a.createElement(Z.a,null)},r.a.createElement(Q.b,{to:"/"+e.linkTo,params:"table",key:e.key,app:e.app},e.text))})):null,r.a.createElement(te,{key:"sub1",icon:r.a.createElement($.a,null),title:"Navigation One"},r.a.createElement(Y.a.Item,{key:"5"},"Option 5"),r.a.createElement(Y.a.Item,{key:"6"},"Option 6"),r.a.createElement(Y.a.Item,{key:"7"},"Option 7"),r.a.createElement(Y.a.Item,{key:"8"},"Option 8")),r.a.createElement(te,{key:"sub2",icon:r.a.createElement(ee.a,null),title:"Navigation Two"},r.a.createElement(Y.a.Item,{key:"9"},"Option 9"),r.a.createElement(Y.a.Item,{key:"10"},"Option 10"),r.a.createElement(te,{key:"sub3",title:"Submenu"},r.a.createElement(Y.a.Item,{key:"11"},"Option 11"),r.a.createElement(Y.a.Item,{key:"12"},"Option 12")))))},ne=a(581),re=(a(325),function(e){var t=e.header,a=e.visible,n=e.children,l=e.dismiss;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"modal-warpper",style:{position:"absolute"}},r.a.createElement("div",{className:"modal-box"},r.a.createElement("div",{className:"modal-box-header"},r.a.createElement("h3",null,t),r.a.createElement("button",{onClick:l},"X")),n),r.a.createElement("div",{className:"modal-bg"})):null)}),le=a(47),ce=a.n(le),oe=a(72),ie=a(240),se=a(234),ue=(a(180),a(241)),me=a.n(ue),de=function(e){e.id;var t=e.name,a=e.type,n=e.placeholder,l=e.onChange,c=e.className,o=e.value,i=e.error,s=void 0===i||i,u=e.label,m=e.variant,d=void 0===m?"outlined":m;return r.a.createElement(r.a.Fragment,null,"date"===a?r.a.createElement(se.a,{id:"date-required",label:u,type:"date",variant:"outlined",InputLabelProps:{shrink:!0},style:{width:305}}):"color"===a?r.a.createElement(me.a,{id:"standard-basic {name}",name:"color",defaultValue:"pick color",onChange:function(e){return console.log(e)},variant:"outlined",style:{width:305}}):r.a.createElement(se.a,{variant:d,label:u,id:t,name:t,type:a,placeholder:n,value:o,className:c,onChange:l,autoComplete:"false",style:{border:s?"solid 1px red":""}}),s?r.a.createElement("p",{style:{color:"red",fontSize:"14px"}},s):"")};de.defaultProps={type:"text",className:""};var fe=de,pe=a(152),be=a.n(pe),Ee=Object(s.a)(),he=function(){var e=Object(oe.a)(ce.a.mark((function e(t){var a,n,r,l;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){e.next=4;break}console.log("no freeUserToken add row"),e.next=14;break;case 4:return a=(a=window.location.pathname.toString())?a.substr(1):"",n="".concat(Ee,"/public/").concat(a,"/add"),be.a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.freeUserToken),r=t,e.next=11,be.a.post(n,r).then((function(e){console.log("RESPONSE RECEIVED: ",e)})).catch((function(e){console.log("AXIOS ERROR: ",e)}));case 11:return l=e.sent,console.log("addNewRow",l),e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(n.useContext)(i.a).config,t={};e.map((function(e){t[e.name]=""}));var a=Object(n.useState)(t),l=Object(o.a)(a,2),c=l[0],s=l[1],u=function(e){var t=e.target,a=t.name,n=t.value;c[a]=n,s(Object(ie.a)({},c))},m=function(){var e=Object(oe.a)(ce.a.mark((function e(t){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,he(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,e?e.sort((function(e,t){return e.order>t.order?1:-1})).map((function(e,t){return e.is_edit?null:r.a.createElement("span",{className:"form-group",id:e.clientId,style:{maxWidth:"".concat(e.width,"px"),minWidth:"".concat(e.width,"px")},key:t},r.a.createElement(fe,{id:"date"===e.type?"outlined-helperText":e.is_edit?"standard":"standard-read-only-input",type:e.type?e.type:"text",name:e.name?e.name:null,label:e.label?e.label:e.name,className:"form-control",placeHolder:e.name,value:c[e.name],error:"",onChange:u}))})):null,r.a.createElement("br",null),r.a.createElement(ne.a,{style:{marginRight:"1rem"},variant:"contained"},"Cancel"),r.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:m},"Add")))},Oe=function(e){e.header;var t=e.visible,a=(e.children,e.dismiss),l=Object(n.useState)(t);Object(o.a)(l,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{header:"Add new row",visible:t,children:r.a.createElement(ge,null),dismiss:a}))},ve=a(246),ke=a.n(ve);function je(){var e=Object(n.useContext)(i.a).appFields,t=Object(n.useContext)(f),a=(t.global,t.settingGlobal),l=Object(n.useState)(""),c=Object(o.a)(l,2),s=c[0],u=c[1],m=e.filter((function(e){return!0===e.clientTableHideColumn})).map((function(e){return e.name})),d=r.a.useState(null),p=Object(o.a)(d,2),b=p[0],E=p[1],h=Boolean(b),g=m.length;return r.a.createElement("div",null,r.a.createElement(v.a,{disabled:!1,"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)}},r.a.createElement(ke.a,{color:0===g?"inherit":"secondary"})),r.a.createElement(w.a,{id:"long-menu",anchorEl:b,keepMounted:!0,open:h,onClose:function(){E(null)},PaperProps:{style:{maxHeight:216,width:"20ch"}}},r.a.createElement("div",null,r.a.createElement("h4",null,"Hidden fields")),r.a.createElement(J.a,{variant:"inset",component:"li"}),m.map((function(t,n){return r.a.createElement(y.a,{key:n,style:{displey:s===t?"none":"block"},onClick:function(){!function(t){e.filter((function(e){return e.name===t}))[0].clientTableHideColumn=!1,a(g)}(t),u(t)}},t)}))))}var Se=Object(E.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(h.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(b.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),hiddenColumns:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"fix",overflow:"auto",maxHeight:300,direction:"rtl",marginTop:64,boxShadow:"10 10 5 grey"},sectionMobile:Object(b.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ye(e){var t=Object(n.useContext)(f).global,a=e.AppDirection,l=e.setAppDirection,c=e.screenType,i=e.setScreenType,s=Object(M.a)(),u=Se(),m=r.a.useState(null),d=Object(o.a)(m,2),p=d[0],b=d[1],E=r.a.useState(null),h=Object(o.a)(E,2),N=h[0],x=h[1],A=Boolean(p),F=Boolean(N),P=function(e){b(e.currentTarget)},D=function(){x(null)},B=function(){b(null),D()},L=r.a.useState(!1),V=Object(o.a)(L,2),X=V[0],Q=V[1],Y=Object(n.useState)(!1),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1],te=function(){ee((function(e){return!e}))},le=Object(n.useState)(!1),ce=Object(o.a)(le,2),oe=ce[0],ie=ce[1],se=function(){ie((function(e){return!e}))},ue="primary-search-account-menu",me=r.a.createElement(w.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:ue,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:A,onClose:B},r.a.createElement(y.a,{onClick:B},"Profile1"),r.a.createElement(y.a,{onClick:B},"My account")),de=r.a.createElement(w.a,{anchorEl:N,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:F,onClose:D},r.a.createElement(y.a,null,r.a.createElement(v.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(S.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(y.a,null,r.a.createElement(v.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(S.a,{badgeContent:11,color:"secondary"},r.a.createElement(U.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(y.a,{onClick:P},r.a.createElement(v.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(I.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:u.grow},r.a.createElement(g.a,null,r.a.createElement(O.a,null,r.a.createElement(v.a,{onClick:function(){Q(!0)},edge:"start",className:u.menuButton,color:"inherit","aria-label":"open drawer"}," ",r.a.createElement(C.a,null)," "),r.a.createElement(S.a,{badgeContent:t[0].countHiddenFields,color:"secondary",size:"small"},r.a.createElement(je,null)),r.a.createElement(k.a,{className:u.title,variant:"h6",noWrap:!0},"Page-im"),r.a.createElement("div",{className:u.search},r.a.createElement("div",{className:u.searchIcon},r.a.createElement(T.a,null)),r.a.createElement(j.a,{placeholder:"Search\u2026",classes:{root:u.inputRoot,input:u.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(ne.a,{color:"secondary",onClick:te},"Add"),r.a.createElement(ne.a,{color:"default",onClick:se},"ADD ROW"),r.a.createElement("div",{className:u.grow}),r.a.createElement("div",{className:u.sectionDesktop},r.a.createElement(v.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(S.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))),r.a.createElement(v.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(S.a,{badgeContent:17,color:"secondary"},r.a.createElement(U.a,null))),r.a.createElement(v.a,{edge:"end","aria-label":"account of current user","aria-controls":ue,"aria-haspopup":"true",onClick:P,color:"inherit"},r.a.createElement(I.a,null))),r.a.createElement("div",{className:u.sectionMobile},r.a.createElement(v.a,{onClick:function(e){x(e.currentTarget)},"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",color:"inherit"}," ",r.a.createElement(W.a,null)," ")))),r.a.createElement(re,{header:"old test",visible:$,dismiss:te,children:"old test"}),r.a.createElement(Oe,{header:"Add new row",visible:oe,dismiss:se,children:"modalAddRowVisible"}),r.a.createElement(z.a,{className:u.drawer,variant:"persistent",anchor:"left",open:X,classes:{paper:u.drawerPaper}},r.a.createElement("div",{className:u.drawerHeader},r.a.createElement(v.a,{onClick:function(){i("table"===c?"card":"table"),window.localStorage.setItem("screenType",JSON.stringify(c))}},"table"===c?r.a.createElement(R.a,null):r.a.createElement(K.a,null)," "),r.a.createElement(v.a,{onClick:function(){Q(!1)}},"ltr"===s.direction?r.a.createElement(_.a,null):r.a.createElement(G.a,null)," ")),r.a.createElement(J.a,null),r.a.createElement(ae,null),r.a.createElement(J.a,null),r.a.createElement(q.a,null,r.a.createElement(J.a,null),r.a.createElement(v.a,{onClick:function(){l("ltr"===a?"rtl":"ltr"),window.localStorage.setItem("AppDirection",JSON.stringify(a))}}," ","ltr"===a?r.a.createElement(G.a,null):r.a.createElement(_.a,null)," "),r.a.createElement("p",null,"ver 1.01"))),de,me)}a(225);var we=a(55),Ne=a(158);a(514);var Ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-edit"})),r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-pencil-alt"})),r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-plus"})))},xe=(a(226),a(588)),Te=a(591),Ae=a(590),Ie=a(579),Fe=a(116),He=a.n(Fe),Pe=a(159),Ue=a.n(Pe),De=Object(E.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",maxWidth:250,minWidth:120},formControl:{maxWidth:200,display:"flex"},upperFilte11:{minHeight:"2rem",minWidth:120,maxWidth:250,backgroundColor:"lightblue",position:"sticky",top:0}}})),We=["\u05d0\u05d3\u05d5\u05e0\u05d9 \u05d9\u05dd","\u05d3\u05d5\u05dc\u05d1 \u05d2\u05dc\u05e2\u05d3","\u05db\u05d4\u05df \u05d7\u05d9\u05d9\u05dd","\u05d0\u05d3\u05dd \u05dc\u05d9\u05dc\u05da","\u05d9\u05d5\u05e8 \u05d1\u05e0\u05d9","\u05d8\u05e8\u05d9\u05d9\u05e8 \u05d9\u05d5\u05e8\u05e7\u05e9\u05d9\u05d9\u05e8","\u05d7\u05d9\u05d9\u05dd","Bbb","AAAA","CCCC","Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];var ze=function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(e),s=Object(o.a)(i,2),u=(s[0],s[1]),m=Object(n.useState)(u),d=Object(o.a)(m,2),f=d[0],p=(d[1],Object(n.useState)(He.a)),b=Object(o.a)(p,2),E=b[0],h=b[1],g=De(),O=r.a.useState([]),v=Object(o.a)(O,2),k=v[0],j=v[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie.a,{className:g.formControl},r.a.createElement(Te.a,{multiple:!0,value:k,onChange:function(e){j(e.target.value),e.target.value.length>0?h(Ue.a):h(He.a),console.log(f)},renderValue:function(e){return e.join(", ")},IconComponent:E},r.a.createElement("div",{className:"upperFilter"},r.a.createElement(Ae.a,{checked:l,onChange:function(e){c(e.target.checked),e.target.checked?(j([].concat(We)),h(Ue.a)):(j([]),h(He.a))}}),r.a.createElement("span",null),r.a.createElement("hr",null)),We.sort((function(e,t){return e>t?1:-1})).map((function(e){return r.a.createElement(y.a,{key:e,value:e},r.a.createElement(Ae.a,{checked:k.indexOf(e)>-1}),r.a.createElement(xe.a,{primary:e}))})))))},Be=(a(515),function(e){for(var t=Number(e.stars),a=[],n=0;n<5;++n)n<t?a.push(r.a.createElement("i",{className:"fa fa-star checked",key:n})):a.push(r.a.createElement("i",{className:"fa fa-star",key:n}));return r.a.createElement(r.a.Fragment,null,a.map((function(e){return e})))}),Re=function(e){console.log("at Table2",e);var t=e.app?e.app:"",a=t?t.substr(1):"",l=Object(n.useContext)(f).global,c=Object(n.useState)(0),i=Object(o.a)(c,2),u=i[0],m=i[1],d=Object(n.useState)(r.a.createElement(ze,null)),p=Object(o.a)(d,2),b=(p[0],p[1],Object(n.useState)([])),E=Object(o.a)(b,2),h=E[0],g=E[1],O=Object(s.a)(),v=Object(n.useState)(3),k=Object(o.a)(v,2),j=k[0],S=(k[1],Object(n.useState)([])),y=Object(o.a)(S,2),w=y[0],N=y[1],C=Object(n.useState)(""),x=Object(o.a)(C,2),T=x[0],A=(x[1],Object(n.useState)([])),I=Object(o.a)(A,2),F=I[0],H=I[1];Object(n.useEffect)((function(){if(console.log("at table2 before get fields",w),localStorage.fields&&"[]"!==localStorage.fields||!localStorage.freeUserToken)N(localStorage.fields.filter((function(e){return e.application===a})));else{var e="".concat(O,"/public/fields/data");console.log("at table2 do get fields",w),fetch(e,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return N(e.filter((function(e){return e.application===a})),console.log("at table2 sec func",e))})).catch((function(e){console.error("Error: at table2",e)}))}console.log("fields at table2rows",w);var t,n=Object(Ne.a)(w);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.clienSort=!1,r.clientSortOrder=null,r.clientSortIcon=null,r.clientSortDirection=null,r.clientHide=!1,r.clientAggregation=!1,r.clientAggrigationIcon="far fa-square",r.clientFilter=!1,r.clientFilterIconColor="colorWhite",r.clientTableHideColumn=!1,r.clientId="Id_"+r.name,r.dragable=!0,r.clientFilterHeaderCheckbox=!1}}catch(l){n.e(l)}finally{n.f()}}),[]);var P=function(e){H("HandleSort");var t=w.filter((function(t){return t.name===e}))[0];t.clientSort?"fas fa-sort-down icon"===t.clientSortIcon?(t.clientSortIcon="fas fa-sort-up icon",t.direction="asc"):(t.clientSortIcon="fas fa-sort-down icon",t.direction="desc"):(t.clientSort=!0,t.clientSortIcon="fas fa-sort-up icon",t.direction="asc",m((function(e){return e+1})),t.clientSortOrder=u)},U=function(e){H("handleDragStart");var t=e.target.id;e.dataTransfer.setData("data",t)},D=function(e){e.preventDefault()},W=function(e){e.target},z=function(e){var t=e.currentTarget.id,a=e.dataTransfer.getData("data");B(t,a)},B=function(e,t){H("handleChangeOrder");var a=1;if(w&&w.length>0){var n,r=w.filter((function(t){return t.clientId===e}))[0].order,l=Object(Ne.a)(w);try{for(l.s();!(n=l.n()).done;){var c=n.value;c.clientId===t?c.order=r:(a===r&&(a+=1),c.order=a,a+=1)}}catch(o){l.e(o)}finally{l.f()}}};return Object(n.useEffect)((function(){if("/"!==t)if(localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){var e="".concat(O,"/public").concat(t,"/data");fetch(e,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return g(e)})).catch((function(e){console.error("Error:",e)}))}else console.log("no freeUserToken table2")}),[w,F,l]),r.a.createElement(r.a.Fragment,null,w?r.a.createElement("table",{id:"main",className:"display"},r.a.createElement("thead",null,r.a.createElement("tr",null,w.sort((function(e,t){return e.order>t.order?1:-1})).map((function(e,t){return e.clientTableHideColumn?null:r.a.createElement("th",{"data-type":"numeric",id:e.clientId,draggable:e.dragable,onDragStart:U,onDragOver:D,onDragEnter:W,onDrop:z,style:{maxWidth:"".concat(e.width+80,"px"),minWidth:"".concat(e.width+80,"px")},key:t},r.a.createElement("span",{className:"header-unit",key:999*t},r.a.createElement("span",{style:{Width:"".concat(e.width,"px")},className:"header-data",onClick:function(){return P(e.name)}},e.name),r.a.createElement("span",{className:"header-action"},r.a.createElement("span",{className:"sort-icon",onClick:function(){return P(e.name)}},r.a.createElement("i",{className:e.clientSortIcon},r.a.createElement("span",{className:"sort-order"},e.clientSortOrder))),r.a.createElement("span",{onClick:function(){return t=e.name,H("HandleHideColumn"),void(w.filter((function(e){return e.name===t}))[0].clientTableHideColumn=!0);var t},className:"HandleHideColumn"},r.a.createElement("i",{className:"far fa-times-circle"})),r.a.createElement("span",{onClick:function(){return function(e){H("HandleAggregation");var t=w.filter((function(t){return t.name===e}))[0];t.clientAggregation?(t.clientAggrigationIcon="far fa-square",t.clientAggregation=!1):(t.clientAggrigationIcon="fa fa-check-square",t.clientAggregation=e)}(e.name)}},r.a.createElement("i",{className:e.clientAggrigationIcon})),r.a.createElement("span",{onClick:function(){return function(e){H("HandleFilter");var t=w.filter((function(t){return t.name===e}))[0];t.clientFilter?(t.clientFilter=!1,t.clientFilterIconColor="colorWhite"):(t.clientFilter=e,t.clientFilterIconColor="colorRed")}(e.name)},className:"filterIcon"},r.a.createElement(ze,{name:e.name,filterCheckBox:e.clientFilterHeaderCheckbox})))))})))),r.a.createElement("tbody",null,h?h.slice(0,j).map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"tablerow",key:t},w.map((function(t,a){return t.clientTableHideColumn?null:r.a.createElement("td",{style:{maxWidth:"".concat(t.width+80,"px"),minWidth:"".concat(t.width+80,"px")},key:a},r.a.createElement("span",null,function(e,t){return"stars"===e.name?r.a.createElement(Be,{stars:t[e.name]}):"action"===e.name?r.a.createElement(Ce,null):"checkBox"===e.name?r.a.createElement(Ae.a,null):r.a.createElement("span",null,t[e.name])}(t,e)))}))))})):r.a.createElement("tr",{className:"noData"},"Wait..."))):r.a.createElement("span",{className:"error"},"Error occured : ",T))};a(516);function Me(){var e=r.a.useState(!0),t=Object(o.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement(Ae.a,{defaultChecked:!0,size:"small",indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),r.a.createElement(Ae.a,{defaultChecked:!0,size:"small",color:"default",inputProps:{"aria-label":"checkbox with default color"}}),r.a.createElement(Ae.a,{defaultChecked:!0,size:"small",inputProps:{"aria-label":"checkbox with small size"}}))}var qe=function(){var e=Object(n.useContext)(i.a).config,t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(s.a)();return Object(n.useEffect)((function(){console.log("cards2  useEffect 32"),fetch("".concat(u,"/rows")).then((function(e){return e.json()})).then((function(e){return c(e.res)}))}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("main",{className:"cards"},l.slice(0,100).map((function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"card"},r.a.createElement("div",{className:"card_header"},r.a.createElement("div",{className:"card-title"},r.a.createElement(Me,null))),r.a.createElement("div",{className:" card_content"},e.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"cardLine"},r.a.createElement("label",{className:"label"},e.name,":"),r.a.createElement("span",{className:"input",key:a},t[e.name])))}))),r.a.createElement("div",{className:"card_info"},r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons"},"thumb_up"),"310"),r.a.createElement("div",null,r.a.createElement("a",{href:"./",className:"card_link"},"more ...")))))})))))},Je=function(e){var t=Object(n.useState)(e.app),a=Object(o.a)(t,1)[0];return console.log("at pagim",e),r.a.createElement(r.a.Fragment,null,"table"===e.screenType?r.a.createElement(Re,{app:a}):r.a.createElement(qe,{app:a}))},Le=a(11),_e=function(){return r.a.createElement(Le.n,null,r.a.createElement(Le.h,{md:"4"},r.a.createElement(Le.c,{wide:!0,cascade:!0},r.a.createElement(Le.p,{cascade:!0},r.a.createElement(Le.e,{hover:!0,overlay:"white-slight",className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg",alt:"Card cap"})),r.a.createElement(Le.d,{cascade:!0,className:"text-center"},r.a.createElement(Le.g,{className:"card-title"},r.a.createElement("strong",null,"Alice Mayer")),r.a.createElement("p",{className:"font-weight-bold blue-text"},"Photographer"),r.a.createElement(Le.f,null,"Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."," "),r.a.createElement(Le.h,{md:"12",className:"d-flex justify-content-center"},r.a.createElement("a",{href:"!#",className:"px-2 fa-lg li-ic"},r.a.createElement(Le.i,{fab:!0,icon:"linkedin-in"})),r.a.createElement("a",{href:"!#",className:"px-2 fa-lg tw-ic"},r.a.createElement(Le.i,{fab:!0,icon:"twitter"})),r.a.createElement("a",{href:"!#",className:"px-2 fa-lg fb-ic"},r.a.createElement(Le.i,{fab:!0,icon:"facebook-f"})))))),r.a.createElement(Le.h,{md:"4"},r.a.createElement(Le.c,{narrow:!0},r.a.createElement(Le.p,{cascade:!0},r.a.createElement(Le.e,{hover:!0,overlay:"white-slight",className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg",alt:"food"})),r.a.createElement(Le.d,null,r.a.createElement("h5",{className:"pink-text"},r.a.createElement(Le.i,{icon:"utensils"})," Culinary"),r.a.createElement(Le.g,{className:"font-weight-bold"},"Cheat day inspirations"),r.a.createElement(Le.f,null,"Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."),r.a.createElement(Le.b,{color:"unique"},"Button")))),r.a.createElement(Le.h,{md:"4"},r.a.createElement(Le.c,null,r.a.createElement(Le.e,{hover:!0,overlay:"white-light",className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/men.jpg",alt:"man"}),r.a.createElement(Le.d,{cascade:!0,className:"text-center"},r.a.createElement(Le.g,{className:"card-title"},r.a.createElement("strong",null,"Billy Coleman")),r.a.createElement("p",{className:"font-weight-bold blue-text"},"Wev developer"),r.a.createElement(Le.f,null,"Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."," "),r.a.createElement(Le.h,{md:"12",className:"d-flex justify-content-center"},r.a.createElement(Le.b,{rounded:!0,floating:!0,color:"fb"},r.a.createElement(Le.i,{size:"lg",fab:!0,icon:"facebook-f"})),r.a.createElement(Le.b,{rounded:!0,floating:!0,color:"tw"},r.a.createElement(Le.i,{size:"lg",fab:!0,icon:"twitter"})),r.a.createElement(Le.b,{rounded:!0,floating:!0,color:"dribbble"},r.a.createElement(Le.i,{size:"lg",fab:!0,icon:"dribbble"})))))))};var Ve=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=(t[0],t[1],Object(s.a)()),l=Object(n.useState)([]),c=Object(o.a)(l,2),u=c[0],m=c[1],f=(window.location.pathname,Object(n.useState)(null)),b=(Object(o.a)(f,1)[0],window.localStorage.getItem("AppDirection"));(null==b||"rtl"!==b&&"ltr"!==b)&&(b="ltr"),Object(n.useEffect)((function(){if(localStorage.menu&&null!==localStorage.menu&&"undefined"!==localStorage.menu)if(localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){console.log("Fetch Menu App.js");var e="".concat(a,"/public/menu/data?customer=1");fetch(e,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){console.error("Error:",e)}))}else console.log("no user token App.js");else m(JSON.stringify(localStorage.menu)),console.log("GetMenu App.js")}),[]);var E=Object(n.useState)(b||"ltr"),h=Object(o.a)(E,2),g=h[0],O=h[1],v=Object(n.useState)("table"),k=Object(o.a)(v,2),j=k[0],S=k[1];return r.a.createElement("div",{className:g},r.a.createElement(p,null,r.a.createElement(d,null,r.a.createElement(Q.a,null,r.a.createElement(we.c,null,r.a.createElement(we.a,{exact:!0,path:"/",component:_e}),r.a.createElement(we.a,{path:"/Templates",component:_e})),r.a.createElement(i.b,null,r.a.createElement(ye,{setAppDirection:O,AppDirection:g,setScreenType:S,screenType:j}),r.a.createElement(we.c,null,u&&u.length>0?u.map((function(e,t){return r.a.createElement(we.a,{path:"/"+e.app},r.a.createElement(Je,{app:"/"+e.app,screenType:j,key:t})," ")})):null))))))};a(535);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null)),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.44743bd4.chunk.js.map