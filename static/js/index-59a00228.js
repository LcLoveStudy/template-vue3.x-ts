import{x as z,az as S,aG as I,aA as P,r as w,h as A,k as B,W as D,ag as y,y as p,z as G,A as _,u as h,G as b,H as k,P as g,M as N,D as R}from"./vue-2ce12c24.js";import{_ as T}from"./index-b47be323.js";const U={class:"slider_verify_box border-[1px] border-solid border-[#dcdfe6] dark:border-[#334155]"},X=z({__name:"index",props:S({width:{type:String,default:"250px"}},{status:{type:Boolean,default:!1},statusModifiers:{}}),emits:S(["onSuccess"],["update:status"]),setup(E,{expose:W,emit:q}){I(n=>({"6dad2143":E.width}));const x=P(E,"status"),M=q,s=w(!1),a=w(!1),t=w();let i=0,l=0;const c=n=>{var e;(e=t.value)!=null&&e.contains(n.target)&&(l=n.x,a.value=!0)},u=()=>{if(t.value&&a.value){const n=document.querySelector(".slider_verify_box");if(a.value=!1,l=0,t.value.style.left!==(n==null?void 0:n.clientWidth)-t.value.clientWidth+"px"){const e=document.querySelector(".fail_bar");t.value.style.transition="all 0.5s",e.style.transition="all 0.5s",e.style.left="0px",t.value.style.left="0px",setTimeout(()=>{t.value&&(t.value.style.transition="none",e.style.transition="none")},500)}else s.value=!0}},d=n=>{const e=document.querySelector(".slider_verify_box");if(e!=null&&e.contains(n.target)){if(a.value){const o=n.x-i-(l-i),r=document.querySelector(".fail_bar");r.style.left=o+t.value.clientWidth+"px",o<=0?(s.value=!1,t.value.style.left="0px"):o>=(e==null?void 0:e.clientWidth)-t.value.clientWidth-10?(s.value=!0,t.value.style.left=(e==null?void 0:e.clientWidth)-t.value.clientWidth+"px"):(s.value=!1,t.value.style.left=o+"px")}}else u()},L=n=>{var e;return(e=t.value)==null?void 0:e.contains(n.target)},v=n=>{L(n)&&(l=n.touches[0].clientX,a.value=!0,n.preventDefault())},f=n=>{if(!a.value||!L(n))return;n.preventDefault();const e=document.querySelector(".slider_verify_box");if(e!=null&&e.contains(n.target)){const o=n.touches[0].clientX-i-(l-i),r=document.querySelector(".fail_bar");r.style.left=o+t.value.clientWidth+"px",o<=0?(s.value=!1,t.value.style.left="0px"):o>=(e==null?void 0:e.clientWidth)-t.value.clientWidth-10?(s.value=!0,t.value.style.left=(e==null?void 0:e.clientWidth)-t.value.clientWidth+"px"):(s.value=!1,t.value.style.left=o+"px")}},m=()=>{if(t.value&&a.value){a.value=!1,l=0;const n=document.querySelector(".slider_verify_box");if(t.value.style.left!==(n==null?void 0:n.clientWidth)-t.value.clientWidth+"px"){const e=document.querySelector(".fail_bar");t.value.style.transition="all 0.5s",e.style.transition="all 0.5s",e.style.left="0px",t.value.style.left="0px",setTimeout(()=>{t.value&&(t.value.style.transition="none",e.style.transition="none")},500)}else s.value=!0}},H=()=>{if(!t.value)return;const n=document.querySelector(".fail_bar");n&&(n.style.left="0px",t.value.style.left="0px",s.value=!1)};A(()=>s.value,()=>{s.value?(window.removeEventListener("mousedown",c),window.removeEventListener("mouseup",u),window.removeEventListener("mousemove",d),window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",m),x.value=!0,M("onSuccess")):(window.addEventListener("mousedown",c),window.addEventListener("mouseup",u),window.addEventListener("mousemove",d),window.addEventListener("touchstart",v),window.addEventListener("touchmove",f),window.addEventListener("touchend",m),x.value=!1)});const V=()=>{window.addEventListener("mousedown",c),window.addEventListener("mouseup",u),window.addEventListener("mousemove",d),window.addEventListener("touchstart",v,{passive:!1}),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",m,{passive:!1})};return B(()=>{t.value=document.querySelector(".slider_rocker"),i=t.value.getBoundingClientRect().x,V()}),W({name:"SliderVerify",reset:H}),D(()=>{window.removeEventListener("mousedown",c),window.removeEventListener("mouseup",u),window.removeEventListener("mousemove",d),window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",m)}),(n,e)=>{const o=y("SwitchButton"),r=y("el-icon"),C=y("Select");return p(),G("div",U,[_("div",{ref_key:"rockerDom",ref:t,class:"slider_rocker bg-white dark:bg-[#334155]"},[h(s)?(p(),b(r,{key:1},{default:k(()=>[g(C)]),_:1})):(p(),b(r,{key:0},{default:k(()=>[g(o)]),_:1}))],512),e[0]||(e[0]=_("div",{class:"fail_bar bg-gray-100 dark:bg-dark-primary"},null,-1)),_("span",{class:"verify_tip",style:R({color:h(s)?"#fff":"transparent"})},N(h(s)?"验证通过":"请按住滑块拖动"),5)])}}});const J=T(X,[["__scopeId","data-v-1b038793"]]);export{J as S};
