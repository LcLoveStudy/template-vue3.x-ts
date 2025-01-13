import{u as A,a as S,_ as O}from"./theme-checkout.vue_vue_type_script_setup_true_lang-f0c581fc.js";import{x as k,aA as E,z as d,A as l,B as N,C as F,u as e,P as r,ag as i,y as t,aw as z,r as P,h as H,O as v,a4 as R,G as _,H as o,J as V,K as g,M as $,aB as U,l as j}from"./vue-7e8ef7ea.js";import{r as L,_ as I,h as B,C as G}from"./index-a73c8b83.js";/* empty css                                                              */import"./elementPlus-bf305cb5.js";import"./elementIcons-5f069385.js";const K={class:"w-full h-full flex"},M={class:"h-[7vh] bg-white dark:bg-dark-primary border-0 border-b-[1px] border-solid border-[#eee] dark:border-[#434343]"},q={class:"phone:p-[16px] tablet:p-6 bg-[--container-main-bgc] h-[93vh]"},Q=k({__name:"index",setup(y){const{asideMenuFold:a}=E(A());return(s,n)=>{const h=i("router-view");return t(),d("div",K,[l("div",{class:F(["h-full phone:hidden tablet:block tablet:p-2 duration-[380ms] border-0 border-r-[1px] border-solid border-[#eee] dark:border-[#434343] overflow-hidden bg-white dark:bg-dark-primary",[e(a)?"w-[5vw]":"w-[15vw]"]])},[N(s.$slots,"aside")],2),l("div",{class:F(["h-full duration-[380ms] phone:w-full",[e(a)?"w-[95vw]":"w-[85vw]"]])},[l("div",M,[N(s.$slots,"header")]),l("div",q,[r(h)])],2)])}}}),W={class:"flex items-center phone:text-5xl tablet:text-base text-[#666] dark:text-slate-300 phone:ml-[16px] tablet:ml-4"},X={class:"flex items-center"},Y=k({name:"LcBreadcrumb",__name:"index",setup(y){const a=z(),s=P([]),n=(h,p)=>{const f=a.path.split("/").filter(w=>w!=="");if(p>f.length-1)return;const m="/"+f.slice(0,p+1).join("/"),b=h.find(w=>w.path===m);b&&(b.meta.hideBreadcrumb||s.value.push({name:b.meta.title,icon:b.meta.icon||""}),n(b.children,p+1))};return H(()=>a.path,()=>{s.value=[],n(L,0)},{immediate:!0}),(h,p)=>{const x=i("el-icon"),f=i("ArrowRight");return t(),d("div",W,[(t(!0),d(v,null,R(e(s),m=>(t(),d(v,{key:m.name},[l("div",X,[m.icon!==""?(t(),_(x,{key:0,class:"tablet:mr-2 phone:mr-[8px]",icon:m.icon},{default:o(()=>[(t(),_(V(m.icon)))]),_:2},1032,["icon"])):g("",!0),l("span",{class:F([m===e(s)[e(s).length-1]?"text-[#333] dark:text-white":""])},$(m.name),3)]),m!==e(s)[e(s).length-1]?(t(),_(x,{key:0,class:"tablet:mx-2 phone:mx-[8px]"},{default:o(()=>[r(f)]),_:1})):g("",!0)],64))),128))])}}}),Z=k({__name:"index",setup(y){const{logout:a}=S(),s=U(),n=()=>{a(),s.replace("/login")};return(h,p)=>(t(),d("div",{class:"logout_btn lg:w-[1.5rem] lg:h-[1.5rem] cursor-pointer lg:ml-[1.875rem]",onClick:n}))}});const ee=I(Z,[["__scopeId","data-v-3ff8f906"]]),te={class:"phone:text-5xl tablet:text-base"},ae={class:"phone:text-5xl tablet:text-base"},se={class:"phone:text-5xl tablet:text-base"},ne={class:"phone:text-5xl tablet:text-base"},oe={class:"truncate phone:text-5xl tablet:text-base"},D=k({__name:"index",setup(y){const{asideMenuFold:a}=E(A()),{userinfo:s}=S(),n=s!=null&&s.userType?s.userType:"admin",h=z(),p=P("");return H(()=>h,x=>{p.value=x.path},{immediate:!0,deep:!0}),(x,f)=>{const m=i("el-icon"),b=i("el-menu-item"),w=i("el-tooltip"),T=i("el-sub-menu"),J=i("el-menu");return t(),_(J,{class:"bg-white dark:bg-dark-primary",collapse:e(a),router:"","default-active":e(p)},{default:o(()=>[(t(!0),d(v,null,R(e(L),c=>(t(),d(v,{key:c.path},[!c.meta.hideMenu&&c.meta.hideChildrenInMenu&&e(B)(e(n),c.meta.role)?(t(),_(b,{key:0,index:c.path},{default:o(()=>[r(m,{class:"tablet:text-base",icon:c.meta.icon},{default:o(()=>[c.meta.icon?(t(),_(V(c.meta.icon),{key:0})):g("",!0)]),_:2},1032,["icon"]),l("span",te,$(c.meta.title),1)]),_:2},1032,["index"])):!c.meta.hideMenu&&e(B)(e(n),c.meta.role)?(t(),_(T,{key:1,index:c.path},{title:o(()=>[r(m,{class:"phone:text-5xl tablet:text-base"},{default:o(()=>[c.meta.icon?(t(),_(V(c.meta.icon),{key:0})):g("",!0)]),_:2},1024),l("span",ae,$(c.meta.title),1)]),default:o(()=>[(t(!0),d(v,null,R(c.children,u=>(t(),d(v,{key:u.path},[!u.meta.hideMenu&&u.meta.hideChildrenInMenu&&e(B)(e(n),u.meta.role)?(t(),_(b,{key:0,index:u.path},{default:o(()=>[l("span",se,$(u.meta.title),1)]),_:2},1032,["index"])):!u.meta.hideMenu&&!u.meta.hideChildrenInMenu&&e(B)(e(n),u.meta.role)?(t(),_(T,{key:u.path,index:u.path},{title:o(()=>[l("span",ne,$(u.meta.title),1)]),default:o(()=>[(t(!0),d(v,null,R(u.children,C=>(t(),d(v,{key:C.path},[!C.meta.hideMenu&&e(B)(e(n),C.meta.role)?(t(),_(b,{key:0,index:C.path},{default:o(()=>[r(w,{effect:"dark",content:C.meta.title,placement:"right"},{default:o(()=>[l("div",oe,$(C.meta.title),1)]),_:2},1032,["content"])]),_:2},1032,["index"])):g("",!0)],64))),128))]),_:2},1032,["index"])):g("",!0)],64))),128))]),_:2},1032,["index"])):g("",!0)],64))),128))]),_:1},8,["collapse","default-active"])}}}),le={class:"text-7xl"},re={class:"h-[80vh] overflow-y-auto"},ce=k({__name:"index",setup(y){const a=P(!1);return(s,n)=>{const h=i("Menu"),p=i("el-icon"),x=i("el-drawer");return t(),d("div",null,[l("div",{class:"p-[5px] ml-[8px] bg-slate-100 dark:bg-slate-800 rounded-6xl",onClick:n[0]||(n[0]=f=>a.value=!0)},[r(p,{class:"text-7xl"},{default:o(()=>[r(h)]),_:1})]),r(x,{modelValue:e(a),"onUpdate:modelValue":n[1]||(n[1]=f=>j(a)?a.value=f:null),direction:"ltr",size:"60%","header-class":"mb-0"},{header:o(()=>[l("div",le,$(e(G).PROJECT_NAME),1)]),default:o(()=>[l("div",re,[r(D)])]),_:1},8,["modelValue"])])}}});const _e=I(ce,[["__scopeId","data-v-ebca2c7a"]]),de={class:"my_header"},ie={class:"flex items-center h-full"},ue={class:"flex items-center mr-12"},pe=k({__name:"index",setup(y){return(a,s)=>(t(),d("div",de,[l("div",ie,[r(e(_e),{class:"phone:block tablet:hidden"}),r(e(Y))]),l("div",ue,[r(e(O)),r(e(ee))])]))}});const me=I(pe,[["__scopeId","data-v-66f02a14"]]),he=k({__name:"index",setup(y){const{asideMenuFold:a}=E(A());return(s,n)=>{const h=i("Expand"),p=i("Fold"),x=i("el-icon");return t(),d("div",{class:F(["fold_icon tablet:px-2 rounded",[e(a)?"":"tablet:ml-4"]])},[r(x,{class:"text-black dark:text-white",onClick:n[0]||(n[0]=f=>a.value=!e(a))},{default:o(()=>[e(a)?(t(),_(h,{key:0})):(t(),_(p,{key:1}))]),_:1})],2)}}});const xe=I(he,[["__scopeId","data-v-3a641f69"]]),fe={class:"h-full"},be={class:"h-[90%] overflow-y-auto"},we=k({__name:"index",setup(y){return(a,s)=>(t(),_(Q,null,{header:o(()=>[r(e(me))]),aside:o(()=>[l("div",fe,[l("div",be,[r(e(D))]),r(e(xe))])]),_:1}))}});export{we as default};
