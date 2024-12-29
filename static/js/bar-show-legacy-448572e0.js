System.register(["./index.vue_vue_type_script_setup_true_lang-legacy-88b68812.js","./echarts-legacy-631a6d1e.js","./how-to-use-table.vue_vue_type_script_setup_true_lang-legacy-afdad602.js","./index-legacy-451a958a.js","./vue-legacy-c2626a10.js","./getRandomColor-legacy-98424217.js","./index-legacy-f6cbb0e1.js","./elementPlus-legacy-589dd652.js","./elementIcons-legacy-b32a4e43.js"],(function(e,a){"use strict";var n,l,t,r,u,o,m,s,i,c,p,y;return{setters:[function(e){n=e._},null,function(e){l=e._},function(e){t=e.H},function(e){r=e.x,u=e.k,o=e.y,m=e.z,s=e.A,i=e.P,c=e.u,p=e.L,y=e.O},null,null,null,null],execute:function(){var a={class:"flex justify-around items-center"};e("default",r({__name:"bar-show",setup:function(e){var r=[{propName:"data",mean:"图表数据",type:"Array<{name: string;value: number;color?:string}>",default:"-"},{propName:"xAxisName",mean:"x轴的名字",type:"string",default:"-"},{propName:"yAxisName",mean:"y轴的名字",type:"string",default:"-"},{propName:"reverse",mean:"x轴和y轴是否反转",type:"boolean",default:"false"},{propName:"zoomable",mean:"是否允许滚动缩放",type:"boolean",default:"false"},{propName:"barColor",mean:"柱子颜色，未设置则随机显示",type:"string",default:"-"},{propName:"rules",mean:"柱子颜色显示的规则,每一项包含min,max,color,值在min~max之间的柱子会显示color颜色",type:"array",default:"-"},{propName:"textColor",mean:"所有字体和轴线的颜色",type:"string",default:"#000"},{propName:"width",mean:"整个图标的宽度",type:"string",default:"400px"},{propName:"height",mean:"整个图标的高度",type:"string",default:"400px"}];return u((function(){t.highlightAll()})),function(e,t){return o(),m(y,null,[s("div",a,[i(c(n),{data:[{name:"Mon",value:120},{name:"Tue",value:201},{name:"Wed",value:150},{name:"Thu",value:80,color:"green"},{name:"Fri",value:70,color:"yellow"},{name:"Sat",value:110},{name:"Sun",value:130}],"x-axis-name":"星期","y-axis-name":"次数","bar-color":"#000",rules:[{min:100,max:199,color:"pink"},{min:200,max:299,color:"skyblue"}],zoomable:"",reverse:""}),t[0]||(t[0]=s("pre",{class:"w-200"},[p("        "),s("h1",null,"示例代码"),p("\n        "),s("code",{class:"language-html text-sm"},"\n        <bar-chart\n            :data=\"[\n              { name: 'Mon', value: 120 },\n              { name: 'Tue', value: 201 },\n              { name: 'Wed', value: 150 },\n              { name: 'Thu', value: 80, color: 'green' },\n              { name: 'Fri', value: 70, color: 'yellow'},\n              { name: 'Sat', value: 110 },\n              { name: 'Sun', value: 130 }\n            ]\"\n            x-axis-name=\"星期\"\n            y-axis-name=\"次数\"\n            bar-color=\"#000\"\n            :rules=\"[\n              { min: 100, max: 199, color: 'pink' },\n              { min: 200, max: 299, color: 'skyblue' }\n            ]\"\n            zoomable\n            reverse\n        />\n        "),p("\n      ")],-1))]),i(l,{"how-to-use":r})],64)}}}))}}}));