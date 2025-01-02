import"./echarts-702d66e5.js";import{g as x}from"./getRandomColor-c774a35d.js";import{g as w,i as C,u as N}from"./index-9f3e9174.js";import{x as h,h as S,k as f,y as g,z as y,u as _,D as A,A as r,P as c,L as i,O as b}from"./vue-2ce12c24.js";import{_ as B}from"./how-to-use-table.vue_vue_type_script_setup_true_lang-8da9c41f.js";import{H as E}from"./index-edc6e874.js";import"./elementPlus-72f9ee0e.js";import"./elementIcons-50c2eace.js";const k=["id"],D=h({__name:"index",props:{data:{type:Array,required:!0},ring:{type:Boolean,default:!1},rose:{type:Boolean,default:!1},textColor:{type:String,default:"#000"},width:{type:String,default:"400px"},height:{type:String,default:"400px"}},setup(p){const o=w(),e=p,t=[];let n=[],l;const v=()=>{l=C(o),d(),N(l)},d=()=>{l.setOption({tooltip:{trigger:"item"},legend:{type:"scroll"},textStyle:{color:e.textColor},color:t,series:[{data:n,type:"pie",radius:e.ring||e.rose?["30%","60%"]:["0%","70%"],roseType:e.rose?"area":null,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},u=()=>{n=[],e.data.forEach((a,s)=>{a.color&&(t[s]=a.color),n.push({value:a.value,name:a.name,label:{color:t[s]}})})},m=()=>{for(let a=0;a<=e.data.length-1;a++)t.push(x());e.data.forEach(a=>{!a.name||a.value})};return S(()=>e.data,()=>{u(),m(),d()},{deep:!0}),f(()=>{m(),u(),v()}),(a,s)=>(g(),y("div",{id:_(o),style:A({width:e.width,height:e.height})},null,12,k))}}),V={class:"flex justify-around items-center"},L=h({__name:"pie-show",setup(p){f(()=>{E.highlightAll()});const o=[{propName:"data(必填)",mean:"展示的值",type:"Array<{name:string,value:number[],color?:string}>",default:"-"},{propName:"ring",mean:"是否环状",type:"boolean",default:"false"},{propName:"rose",mean:"是否开启南丁格尔玫瑰图",type:"boolean",default:"false"},{propName:"textColor",mean:"头部每项颜色",type:"string",default:"#000"},{propName:"width",mean:"整个图标的宽度",type:"string",default:"400px"},{propName:"height",mean:"整个图标的高度",type:"string",default:"400px"}];return(e,t)=>(g(),y(b,null,[r("div",V,[c(_(D),{data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email",color:"green"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads",color:"skyblue"}],rose:!0}),t[0]||(t[0]=r("pre",{class:"w-200"},[i("        "),r("h1",null,"示例代码"),i("\n        "),r("code",{class:"language-html text-sm"},"\n        <PieChart\n          :data=\"[\n            { value: 1048, name: 'Search Engine' },\n            { value: 735, name: 'Direct' },\n            { value: 580, name: 'Email', color: 'green' },\n            { value: 484, name: 'Union Ads' },\n            { value: 300, name: 'Video Ads', color: 'skyblue' }\n          ]\"\n          :rose=\"true\"\n        />\n        "),i("\n      ")],-1))]),c(B,{"how-to-use":o})],64))}});export{L as default};