import{T as v,E as _}from"./wangeditor-462b5ad6.js";import{d as g,aA as c,aB as b,s as w,A as x,a as f,c as h,V as s,u as l,K as m,r as E,ah as k,P as B,D as R,F as S,I as H}from"./vue-fd42cc31.js";const M=g({name:"RichEditor",__name:"index",props:c({heigth:{type:String,default:"300px"},width:{type:String,default:""}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:c(["change"],["update:modelValue"]),setup(r,{emit:o}){const n=b(r,"modelValue"),a=r,p=o,t=w(),d={},i={placeholder:"请输入内容..."},y=e=>{n.value=e.getHtml(),p("change",e.getHtml())};x(()=>{const e=t.value;e!=null&&e.destroy()});const C=e=>{t.value=e};return(e,u)=>(f(),h("div",{style:m([{border:"1px solid #ccc"},{width:a.width}])},[s(l(v),{style:{"border-bottom":"1px solid #ccc"},editor:l(t),defaultConfig:d,mode:"default"},null,8,["editor"]),s(l(_),{style:m({height:a.heigth}),modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=V=>n.value=V),onOnChange:y,defaultConfig:i,mode:"default",onOnCreated:C},null,8,["style","modelValue"])],4))}}),U=H("span",{class:"text-2xl"},"wangEditor:一款非常好用简洁的富文本编辑器",-1),N=g({__name:"rich-editor",setup(r){const o=E('<p><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">RichEditor</span><span style="color: rgb(225, 60, 57);"> v-model:value="inputValue" @change="</span><span style="color: rgb(255, 169, 64);">inputChange</span><span style="color: rgb(225, 60, 57);">" </span><span style="color: rgb(128, 128, 128);">/&gt;</span></p><p>const inputValue = ref(\'\')</p><p>const inputChange = () =&gt; {</p><p> &nbsp;console.log(inputValue.value)</p><p>}</p>'),n=()=>{},a=()=>{window.open("https://www.wangeditor.com/v5/for-frame.html#vue3")};return(p,t)=>{const d=k("el-link");return f(),h(S,null,[s(d,{class:"mb-4",type:"primary",onClick:a},{default:B(()=>[U]),_:1}),s(l(M),{modelValue:l(o),"onUpdate:modelValue":t[0]||(t[0]=i=>R(o)?o.value=i:null),onChange:n},null,8,["modelValue"])],64)}}});export{N as default};
