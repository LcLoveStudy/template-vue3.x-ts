System.register(["./getRandomColor-legacy-98424217.js","./index-legacy-828edd74.js","./echarts-legacy-631a6d1e.js","./vue-legacy-702f70df.js"],(function(e,t){"use strict";var r,a,o,l,i,n,s,u,c,y,f,d;return{setters:[function(e){r=e.g},function(e){a=e.g,o=e.i,l=e.u},null,function(e){i=e.x,n=e.r,s=e.h,u=e.k,c=e.y,y=e.z,f=e.u,d=e.D}],execute:function(){var t=["id"];e("_",i({__name:"index",props:{data:{type:Array,required:!0},xAxisName:{type:String,default:""},yAxisName:{type:String,default:""},reverse:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},barColor:{type:String,default:""},rules:{type:Array},textColor:{type:String,default:"#000"},width:{type:String,default:"400px"},height:{type:String,default:"400px"}},setup:function(e){var i,p=a(),v=e,x=[],h="bar",g=n([]),m=n([]),b=n([]),S=function(){i.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},color:g.value,legend:{type:"scroll"},dataZoom:v.zoomable?[{type:"inside"}]:[],xAxis:{type:v.reverse?"value":"category",data:v.reverse?[]:x,name:v.reverse?v.yAxisName:v.xAxisName,nameTextStyle:{color:v.textColor},nameGap:5,axisLine:{show:!0,lineStyle:{color:v.textColor}},z:v.reverse?0:3},grid:{left:"3%",bottom:"3%",containLabel:!0},yAxis:{type:v.reverse?"category":"value",data:v.reverse?x:[],name:v.reverse?v.xAxisName:v.yAxisName,nameTextStyle:{color:v.textColor},axisLine:{show:!0,lineStyle:{color:v.textColor}},axisLabel:{margin:2},z:v.reverse?3:0},series:"bars"===h?b.value:[{data:m.value,type:"bar",label:{show:!0,position:v.reverse?"right":"top",color:v.textColor,fontSize:12}}]})},C=function(){x=[],v.data.forEach((function(e){if(Object.keys(e).includes("series")){h="bars";var t=e;x=t.names,b.value.push({type:"bar",name:t.series,data:t.values,label:{show:!0,position:v.reverse?"right":"top",color:v.textColor,fontSize:12}})}else h="bar",x.push(e.name)}))},A=function(){"bar"===h?(v.data.forEach((function(e){m.value.push({itemStyle:{color:e.color?e.color:v.barColor?v.barColor:r()},value:e.value})})),null!=v&&v.rules&&v.rules.forEach((function(e){m.value.forEach((function(t){t.value>=e.min&&t.value<=e.max&&(t.itemStyle.color=e.color)}))}))):"bars"===h&&v.data.forEach((function(e){if(e.color)g.value.push(e.color);else for(var t=0;t<=v.data.length-1;t++)g.value.push(r())}))};return s((function(){return v.data}),(function(){C(),A(),S()}),{deep:!0}),u((function(){C(),A(),i=o(p),S(),l(i)})),function(e,r){return c(),y("div",{id:f(p),style:d({width:v.width,height:v.height})},null,12,t)}}}))}}}));