import{u as A,a as S,_ as j}from"./theme-checkout.vue_vue_type_script_setup_true_lang-4400ca23.js";import{x as g,aA as T,z as i,A as d,B as P,C as F,u as e,P as m,ag as u,y as t,G as c,H as a,aw as V,r as E,h as H,O as v,a4 as R,J as I,K as y,M as $,aB as G,L as J}from"./vue-7e8ef7ea.js";import{_ as L,r as z,h as w}from"./index-343165d7.js";/* empty css                                                              */import"./elementPlus-9f891344.js";import"./elementIcons-5f069385.js";const K={class:"w-full h-full flex"},O={class:"h-[7vh] bg-white dark:bg-dark-primary"},U={class:"desktop:p-6 bg-[--container-main-bgc] h-[93vh]"},q=g({__name:"index",setup(k){const{asideMenuFold:o}=T(A());return(n,r)=>{const h=u("router-view");return t(),i("div",K,[d("div",{class:F(["h-full duration-[380ms] overflow-hidden",[e(o)?"w-[5vw]":"w-[15vw]"]])},[P(n.$slots,"aside")],2),d("div",{class:F(["h-full duration-[380ms]",[e(o)?"w-[95vw]":"w-[85vw]"]])},[d("div",O,[P(n.$slots,"header")]),d("div",U,[m(h)])],2)])}}}),Q=g({__name:"index",setup(k){const{asideMenuFold:o}=T(A());return(n,r)=>{const h=u("Expand"),p=u("Fold"),x=u("el-icon");return t(),c(x,{class:"fold_icon",onClick:r[0]||(r[0]=b=>o.value=!e(o))},{default:a(()=>[e(o)?(t(),c(h,{key:0})):(t(),c(p,{key:1}))]),_:1})}}});const W=L(Q,[["__scopeId","data-v-0ab1efcc"]]),X={class:"flex items-center text-base text-[#666] ml-4"},Y={class:"flex items-center"},Z=g({name:"LcBreadcrumb",__name:"index",setup(k){const o=V(),n=E([]),r=(h,p)=>{const b=o.path.split("/").filter(B=>B!=="");if(p>b.length-1)return;const l="/"+b.slice(0,p+1).join("/"),f=h.find(B=>B.path===l);f&&(f.meta.hideBreadcrumb||n.value.push({name:f.meta.title,icon:f.meta.icon||""}),r(f.children,p+1))};return H(()=>o.path,()=>{n.value=[],r(z,0)},{immediate:!0}),(h,p)=>{const x=u("el-icon"),b=u("ArrowRight");return t(),i("div",X,[(t(!0),i(v,null,R(e(n),l=>(t(),i(v,{key:l.path},[d("div",Y,[l.icon!==""?(t(),c(x,{key:0,class:"mr-2",icon:l.icon},{default:a(()=>[(t(),c(I(l.icon)))]),_:2},1032,["icon"])):y("",!0),d("span",{class:F([{"text-[#333]":l===e(n)[e(n).length-1]}])},$(l.name),3)]),l!==e(n)[e(n).length-1]?(t(),c(x,{key:0,class:"mx-2"},{default:a(()=>[m(b)]),_:1})):y("",!0)],64))),128))])}}}),M=g({__name:"index",setup(k){const{logout:o}=S(),n=G(),r=()=>{o(),n.replace("/login")};return(h,p)=>(t(),i("div",{class:"logout_btn lg:w-[1.5rem] lg:h-[1.5rem] cursor-pointer lg:ml-[1.875rem]",onClick:r}))}});const ee=L(M,[["__scopeId","data-v-3ff8f906"]]),te={class:"my_header"},ne={class:"flex items-center h-full"},se={class:"flex items-center mr-12"},ae=g({__name:"index",setup(k){return(o,n)=>(t(),i("div",te,[d("div",ne,[m(e(W)),m(e(Z))]),d("div",se,[m(e(j)),m(e(ee))])]))}});const oe=L(ae,[["__scopeId","data-v-d6d2d4b2"]]),ce={class:"truncate"},re=g({__name:"index",setup(k){const{asideMenuFold:o}=T(A()),{userinfo:n}=S(),r=n!=null&&n.userType?n.userType:"admin",h=V(),p=E("");return H(()=>h,x=>{p.value=x.path},{immediate:!0,deep:!0}),(x,b)=>{const l=u("el-icon"),f=u("el-menu-item"),B=u("el-tooltip"),N=u("el-sub-menu"),D=u("el-menu");return t(),c(D,{class:"aside_menu bg-white dark:bg-dark-primary",collapse:e(o),router:"","text-color":"#333","default-active":e(p)},{default:a(()=>[(t(!0),i(v,null,R(e(z),s=>(t(),i(v,{key:s.path},[!s.meta.hideMenu&&s.meta.hideChildrenInMenu&&e(w)(e(r),s.meta.role)?(t(),c(f,{key:0,index:s.path},{default:a(()=>[m(l,{class:"desktop:text-base",icon:s.meta.icon},{default:a(()=>[s.meta.icon?(t(),c(I(s.meta.icon),{key:0})):y("",!0)]),_:2},1032,["icon"]),d("span",null,$(s.meta.title),1)]),_:2},1032,["index"])):!s.meta.hideMenu&&e(w)(e(r),s.meta.role)?(t(),c(N,{key:1,index:s.path},{title:a(()=>[m(l,{class:"text-base"},{default:a(()=>[s.meta.icon?(t(),c(I(s.meta.icon),{key:0})):y("",!0)]),_:2},1024),d("span",null,$(s.meta.title),1)]),default:a(()=>[(t(!0),i(v,null,R(s.children,_=>(t(),i(v,{key:_.path},[!_.meta.hideMenu&&_.meta.hideChildrenInMenu&&e(w)(e(r),_.meta.role)?(t(),c(f,{key:0,index:_.path},{default:a(()=>[J($(_.meta.title),1)]),_:2},1032,["index"])):!_.meta.hideMenu&&!_.meta.hideChildrenInMenu&&e(w)(e(r),_.meta.role)?(t(),c(N,{key:_.path,index:_.path},{title:a(()=>[d("span",null,$(_.meta.title),1)]),default:a(()=>[(t(!0),i(v,null,R(_.children,C=>(t(),i(v,{key:C.path},[!C.meta.hideMenu&&e(w)(e(r),C.meta.role)?(t(),c(f,{key:0,index:C.path},{default:a(()=>[m(B,{effect:"dark",content:C.meta.title,placement:"right"},{default:a(()=>[d("div",ce,$(C.meta.title),1)]),_:2},1032,["content"])]),_:2},1032,["index"])):y("",!0)],64))),128))]),_:2},1032,["index"])):y("",!0)],64))),128))]),_:2},1032,["index"])):y("",!0)],64))),128))]),_:1},8,["collapse","default-active"])}}}),pe=g({__name:"index",setup(k){return(o,n)=>(t(),c(q,null,{header:a(()=>[m(e(oe))]),aside:a(()=>[m(e(re))]),_:1}))}});export{pe as default};
