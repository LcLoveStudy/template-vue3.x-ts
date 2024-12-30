import{S as p}from"./index-4efe34d4.js";import{H as d}from"./index-b36da394.js";import{_ as g}from"./how-to-use-table.vue_vue_type_script_setup_true_lang-0ceac32c.js";import{E as y}from"./elementPlus-efbe0760.js";import{x as _,k as x,r as o,ag as v,y as V,z as N,A as s,P as r,u as a,l as h,H as k,L as l,O as w}from"./vue-44be93b5.js";import"./index-502adb01.js";import"./elementIcons-605e808b.js";const H={class:"flex items-center"},U=_({__name:"slider-verify",setup(b){x(()=>{d.highlightAll()});const n=o(),t=o(!1),u=()=>{y.success("验证成功")},i=()=>{n.value.reset()},c=o([{propName:"v-model:status",mean:"验证状态",type:"boolean",default:"false"},{propName:"width",mean:"组件宽度,最小180px",type:"string",default:"250px"},{propName:"@on-success",mean:"验证成功时触发",type:"function",default:"-"},{propName:"reset",mean:"组件方法,重置状态(获取组件dom,调用reset方法)",type:"function",default:"-"}]);return(S,e)=>{const m=v("el-button");return V(),N(w,null,[s("div",H,[r(a(p),{ref_key:"slider",ref:n,status:a(t),"onUpdate:status":e[0]||(e[0]=f=>h(t)?t.value=f:null),onOnSuccess:u},null,8,["status"]),r(m,{class:"ml-[1rem]",onClick:i},{default:k(()=>e[1]||(e[1]=[l("重置")])),_:1})]),e[2]||(e[2]=s("h3",{class:"mt-6"},"示例",-1)),e[3]||(e[3]=s("pre",{class:"w-200"},[l("    "),s("code",{class:"language-html text-sm"},'\n    <SliderVerify ref="slider" v-model:status="status" @on-success="successHandler"/>\n    <el-button class="ml-[1rem]" @click="resetVerify"/>重置</el-button/>\n    <script setup lang="ts">\n      const slider = ref()\n      const status = ref(false)\n      const successHandler = () => {\n        ElMessage.success(\'验证成功\')\n      }\n      const resetVerify = () => {\n        slider.value.reset()\n      }\n    <\/script>\n    '),l("\n  ")],-1)),r(g,{"how-to-use":a(c)},null,8,["how-to-use"])],64)}}});export{U as default};
