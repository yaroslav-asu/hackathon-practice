(globalThis["webpackChunkpractichackathonproject"]=globalThis["webpackChunkpractichackathonproject"]||[]).push([[972],{6286:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var o=n(9835),a=n(6970);const s={class:"user-entry"},l={key:0},r={key:1,class:"wrapper"};function i(e,t,n,i,c,u){const p=(0,o.up)("q-btn"),g=(0,o.up)("UserImage"),d=(0,o.up)("q-item"),m=(0,o.up)("q-list"),f=(0,o.up)("q-menu"),k=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",s,[c.isLoggedIn?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(g,{class:"user-image-wrapper"}),(0,o._)("p",{class:"",style:(0,a.j5)({fontSize:n.emailSize})},(0,a.zw)(c.userAccount),5),n.menu?((0,o.wg)(),(0,o.j4)(f,{key:0,fit:"",offset:[0,8]},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.menuItems,(e=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(d,{key:e,clickable:"",style:{"align-items":"center"},to:e.to},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:2},1032,["to"])),[[k]]))),128))])),_:1})])),_:1})):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(p,{"no-caps":"",flat:"",class:"button q-mr-md",label:e.$t("login"),ripple:!1},null,8,["label"]),(0,o.Wm)(p,{"no-caps":"",color:"primary",class:"button",label:e.$t("signUp"),ripple:!1},null,8,["label"])]))])}var c=n(8502);const u={name:"UserEntry",components:{UserImage:c.Z},props:{menu:Boolean,emailSize:{type:String,default:"20px"}},data(){return{isLoggedIn:!0,userAccount:this.$user.email,menuItems:{profile:{title:this.$t("pages.profile"),to:"/profile"},dashboard:{title:this.$t("pages.dashboard"),to:"/dashboard"},settings:{title:this.$t("pages.settings"),to:"/settings"},signOut:{title:this.$t("userEntry.menu.signOut"),to:"/logout"}}}}};var p=n(1639),g=n(9379),d=n(5290),m=n(3246),f=n(490),k=n(2146),v=n(9984),w=n.n(v);const _=(0,p.Z)(u,[["render",i],["__scopeId","data-v-1e3f9bfe"]]),y=_;w()(u,"components",{QBtn:g.Z,QMenu:d.Z,QList:m.Z,QItem:f.Z}),w()(u,"directives",{ClosePopup:k.Z})},400:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(9835),a=n(2244),s=n.n(a);const l=e=>((0,o.dD)("data-v-302f95ec"),e=e(),(0,o.Cn)(),e),r={class:"logo"},i=l((()=>(0,o._)("img",{src:s(),alt:"logo",class:"logo-image"},null,-1))),c=l((()=>(0,o._)("p",{class:"logo-text"}," & Exp ",-1))),u=[i,c];function p(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("div",r,u)}const g={name:"LogoComponent"};var d=n(1639);const m=(0,d.Z)(g,[["render",p],["__scopeId","data-v-302f95ec"]]),f=m},8502:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});n(702);var o=n(9835);function a(e,t,n,a,s,l){const r=(0,o.up)("q-img"),i=(0,o.up)("q-file"),c=(0,o.up)("q-icon"),u=(0,o.up)("q-avatar");return(0,o.wg)(),(0,o.j4)(u,{class:"user-image_wrapper"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"user-image",src:e.$user.photoUrl},null,8,["src"]),n.editable?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"edit",onClick:t[1]||(t[1]=(...e)=>l.openDialog&&l.openDialog(...e))},[(0,o.Wm)(i,{class:"file-picker",accept:".jpg, .pdf, image/*",loading:"",borderless:"",modelValue:s.file,"onUpdate:modelValue":t[0]||(t[0]=e=>s.file=e),ref:"file-picker"},null,8,["modelValue"]),(0,o.Wm)(c,{class:"edit-icon",name:"photo_camera"})])):(0,o.kq)("",!0)])),_:1})}const s={name:"UserImage",props:{editable:Boolean},data(){return{file:null}},methods:{openDialog(){this.$refs["file-picker"].pickFiles()},saveImage(){}},watch:{file(){this.saveImage()}}};var l=n(1639),r=n(1357),i=n(335),c=n(9420),u=n(2857),p=n(9984),g=n.n(p);const d=(0,l.Z)(s,[["render",a],["__scopeId","data-v-dd50f678"]]),m=d;g()(s,"components",{QAvatar:r.Z,QImg:i.Z,QFile:c.Z,QIcon:u.Z})},5972:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>te});var o=n(9835);function a(e,t,n,a,s,l){const r=(0,o.up)("HeaderComponent"),i=(0,o.up)("router-view"),c=(0,o.up)("q-page-container"),u=(0,o.up)("FooterComponent"),p=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(p,{class:"main-page lHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(r),(0,o.Wm)(c,{class:"content"},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.Wm)(u)])),_:1})}const s={class:"header q-py-sm"},l={class:"limiter"},r={class:"content flex"};function i(e,t,n,a,i,c){const u=(0,o.up)("LogoComponent"),p=(0,o.up)("router-link"),g=(0,o.up)("HeaderNavigation"),d=(0,o.up)("UserEntry"),m=(0,o.up)("BurgerMenu");return(0,o.wg)(),(0,o.iD)("header",s,[(0,o._)("div",l,[(0,o.Wm)(p,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1}),(0,o._)("div",r,[(0,o.Wm)(g,{pages:i.pages},null,8,["pages"]),(0,o.Wm)(d,{class:"header__user-entry",menu:""})]),(0,o.Wm)(m,{class:"burger-menu",pages:i.pages},null,8,["pages"])])])}var c=n(400),u=n(6970);const p={class:"header-navigation"};function g(e,t,n,a,s,l){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.pages,(t=>((0,o.wg)(),(0,o.j4)(r,{key:t,class:"header-link",to:t.link,onClick:()=>l.scrollToTarget(t.link)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.$t(`pages.${t.title}`)),1)])),_:2},1032,["to","onClick"])))),128))])}n(8964);var d=n(3701);const{setVerticalScrollPosition:m,getScrollTarget:f}=d.ZP,k={name:"HeaderNavigation",props:{pages:{type:Object,required:!0}},methods:{scrollToTarget(e){const t=document.getElementById(e.replace("#","")),n=f(t),o=t.offsetTop,a=3;m(n,o,Math.abs(window.scrollY-o)/a)}}};var v=n(1639);const w=(0,v.Z)(k,[["render",g],["__scopeId","data-v-49a514cf"]]),_=w;var y=n(6286);const b={class:"burger-menu_wrapper"},h={class:"title"};function Z(e,t,n,a,s,l){const r=(0,o.up)("BurgerMenuButton"),i=(0,o.up)("router-link"),c=(0,o.up)("UserEntry");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o.Wm)(r,{onClick:t[0]||(t[0]=e=>s.isOpen=!s.isOpen)}),(0,o._)("nav",{class:"burger-menu",style:(0,u.j5)({transform:`translateX(${s.isOpen?0:"100%"})`})},[(0,o._)("h2",h,(0,u.zw)(e.$t("menu")),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.pages?n.pages:{},(n=>((0,o.wg)(),(0,o.j4)(i,{key:n.title,class:"burger-menu_link",to:n.link,onClick:t[1]||(t[1]=e=>s.isOpen=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.$t(`pages.${n.title}`)),1)])),_:2},1032,["to"])))),128)),(0,o.Wm)(c,{class:"user-entry"})],4)])}const C={class:"burger-menu_button"};function D(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("div",C)}const I={name:"BurgerMenuButton"},$=(0,v.Z)(I,[["render",D],["__scopeId","data-v-750f5acc"]]),W=$,U={name:"BurgerMenu",components:{BurgerMenuButton:W,UserEntry:y.Z},props:{pages:{type:Object,required:!0}},data(){return{isOpen:!1}}},q=(0,v.Z)(U,[["render",Z],["__scopeId","data-v-312ec132"]]),j=q,B={name:"HeaderComponent",components:{BurgerMenu:j,LogoComponent:c.Z,HeaderNavigation:_,UserEntry:y.Z},data(){return{pages:{home:{title:"home",link:"#greeting"},about:{title:"about",link:"#about"},functionality:{title:"functionality",link:"#functionality"}}}}},H=(0,v.Z)(B,[["render",i],["__scopeId","data-v-1ccd4e3e"]]),z=H,Q=e=>((0,o.dD)("data-v-0bcce4e1"),e=e(),(0,o.Cn)(),e),L={class:"footer"},O={class:"limiter"},E={class:"wrapper"},M={class:"logo-part"},T={class:"description"},P=Q((()=>(0,o._)("div",{class:"social-networks"},null,-1))),S={class:"content-part"},F={class:"content"},Y={class:"category-title"};function x(e,t,n,a,s,l){const r=(0,o.up)("LogoComponent"),i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",L,[(0,o._)("div",O,[(0,o._)("div",E,[(0,o._)("div",M,[(0,o.Wm)(r),(0,o._)("p",T,(0,u.zw)(e.$t("footer.description")),1),P]),(0,o._)("div",S,[(0,o._)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.categories,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:(0,u.C_)(`category-${t.title}`)},[(0,o._)("h4",Y,(0,u.zw)(e.$t(`footer.${t.title}`)),1),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.items,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"item",key:t},[(0,o.Wm)(i,{to:t.link,class:"link"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.$t(`footer.${t.title}`)),1)])),_:2},1032,["to"])])))),128))])],2)))),128))])])])])])}const K={name:"FooterComponent",components:{LogoComponent:c.Z},data(){return{categories:{about:{title:"about",items:[{title:"aboutUs",link:"/"},{title:"ourTeam",link:"/"},{title:"ourServices",link:"/"},{title:"ourClients",link:"/"}]},contact:{title:"company",items:[{title:"contactUs",link:"/"},{title:"ourAddress",link:"/"},{title:"ourPhone",link:"/"},{title:"ourEmail",link:"/"}]},support:{title:"support",items:[{title:"faq",link:"/"},{title:"privacyPolicy",link:"/"},{title:"termsOfUse",link:"/"},{title:"support",link:"/"}]}}}}},A=(0,v.Z)(K,[["render",x],["__scopeId","data-v-0bcce4e1"]]),V=A,N={name:"MainPage",components:{HeaderComponent:z,FooterComponent:V}};var X=n(7605),G=n(2133),J=n(9984),R=n.n(J);const ee=(0,v.Z)(N,[["render",a],["__scopeId","data-v-0e790a53"]]),te=ee;R()(N,"components",{QLayout:X.Z,QPageContainer:G.Z})},2244:(e,t,n)=>{e.exports=n.p+"img/logo-round.fa9163e8.png"}}]);