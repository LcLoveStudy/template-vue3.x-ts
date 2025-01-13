import{S as f}from"./index-20161f12.js";import{H as d}from"./index-a33a6810.js";import{_ as x}from"./how-to-use-table.vue_vue_type_script_setup_true_lang-931ba028.js";import{E as g}from"./elementPlus-bf305cb5.js";import{x as y,k as b,r as o,ag as h,y as _,z as v,A as s,P as a,u as l,l as V,H as N,L as r,O as k}from"./vue-7e8ef7ea.js";/* empty css                                                              */import"./index-a73c8b83.js";import"./elementIcons-5f069385.js";const w={class:"flex items-center phone:text-6xl tablet:text-base"},z=y({__name:"slider-verify",setup(H){b(()=>{d.highlightAll()});const n=o(),t=o(!1),u=()=>{g.success("验证成功")},i=()=>{n.value.reset()},p=o([{propName:"v-model:status",mean:"验证状态",type:"boolean",default:"false"},{propName:"width",mean:"组件宽度,最小180px",type:"string",default:"250px"},{propName:"@on-success",mean:"验证成功时触发",type:"function",default:"-"},{propName:"reset",mean:"组件方法,重置状态(获取组件dom,调用reset方法)",type:"function",default:"-"}]);return(S,e)=>{const c=h("el-button");return _(),v(k,null,[s("div",w,[a(l(f),{ref_key:"slider",ref:n,status:l(t),"onUpdate:status":e[0]||(e[0]=m=>V(t)?t.value=m:null),onOnSuccess:u},null,8,["status"]),a(c,{class:"ml-4",onClick:i},{default:N(()=>e[1]||(e[1]=[r("重置")])),_:1})]),e[2]||(e[2]=s("h3",{class:"phone:mt-[24px] tablet:mt-6 phone:text-6xl tablet:text-base"},"示例",-1)),e[3]||(e[3]=s("pre",{class:"w-200"},[r("    "),s("code",{class:"language-html phone:text-6xl tablet:text-sm"},'\n    <SliderVerify ref="slider" v-model:status="status" @on-success="successHandler"/>\n    <el-button class="ml-4" @click="resetVerify"/>重置</el-button/>\n    <script setup lang="ts">\n      const slider = ref()\n      const status = ref(false)\n      const successHandler = () => {\n        ElMessage.success(\'验证成功\')\n      }\n      const resetVerify = () => {\n        slider.value.reset()\n      }\n    <\/script>\n    '),r("\n  ")],-1)),a(x,{"how-to-use":l(p)},null,8,["how-to-use"])],64)}}});export{z as default};
