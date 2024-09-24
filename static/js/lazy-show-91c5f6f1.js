import{B as r,e as g,ai as n,E as m,G as p,U as i,O as d,aq as v,aG as f,P as e,H as s,u as b,F as y}from"./vue-53114f36.js";import{_ as h}from"./index-b9f0b06f.js";import"./elementPlus-cc3ede7a.js";import"./elementIcons-66a3c92f.js";const x=r({name:"ScrollBar",__name:"index",props:{target:{type:String,default:"body",require:!0},visibilityHeight:{type:Number,default:200}},setup(c){const l=c,o=()=>{document.querySelector(l.target).children[0].scrollIntoView({behavior:"smooth"})};return g(()=>{const a=document.querySelector(".scrollBar_main"),t=document.querySelector(l.target);t.addEventListener("scroll",()=>{t.scrollTop>l.visibilityHeight?a.setAttribute("style","opacity:1"):t.scrollTop<=l.visibilityHeight&&a.setAttribute("style","opacity:0")})}),(a,t)=>{const u=n("CaretTop"),_=n("el-icon");return m(),p("div",{class:"scrollBar_main shadow",onClick:o},[i(_,{class:"top_icon"},{default:d(()=>[i(u)]),_:1})])}}});const w=r({__name:"lazy-show",setup(c){return(l,o)=>{const a=n("el-card"),t=v("lazy");return m(),p(y,null,[o[0]||(o[0]=f('<div class="document" data-v-00088a59><div class="text-2xl font-semibold" data-v-00088a59>图片懒加载(v-lazy)</div><div class="mt-6" data-v-00088a59><span class="text-xl inline-block" data-v-00088a59>应用场景：</span><br data-v-00088a59> 当页面开始加载时，会请求所有的图片资源，当前屏幕没显示的图片也会请求，如果用户只看到当前屏幕内的图片后就去到其他页面，其他图片就会浪费请求资源，影像一定的性能。 <span class="text-red-700 bgc-lightgray" data-v-00088a59> (避免和flex使用，当使用flex布局后会立刻请求网络) </span><br data-v-00088a59><span class="text-xl mt-5 inline-block" data-v-00088a59>用法说明:</span><br data-v-00088a59> 在图片过多的地方使用v-lazy指令,进行图片懒加载，当往下滚动页面时,图片进入视线后才会发送请求 <span class="text-red-700 bgc-lightgray" data-v-00088a59> (只适用于请求服务器的图片，项目assets文件夹中的不可用) </span><br data-v-00088a59><span class="text-xl mt-5 inline-block" data-v-00088a59>示例:</span><br data-v-00088a59><div class="code mt-5" data-v-00088a59> &lt;img <span class="text-red-700" data-v-00088a59>v-lazy=&quot;&#39;请求地址&#39;&quot;</span> /&gt; </div></div></div>',1)),i(a,{class:"page_main"},{default:d(()=>[e(s("img",null,null,512),[[t,"https://img2.baidu.com/it/u=2098302066,1207295454&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=343"]]),e(s("img",null,null,512),[[t,"https://img1.baidu.com/it/u=2676533820,1803958359&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400"]]),e(s("img",null,null,512),[[t,"https://img2.baidu.com/it/u=3196968309,1319515521&fm=253&fmt=auto&app=138&f=PNG?w=751&h=500"]]),e(s("img",null,null,512),[[t,"https://img2.bianews.com/image/bianews/news/imgs/1632407012152.jpeg?imageView2/0/format/jpg/q/75"]]),e(s("img",null,null,512),[[t,"https://img0.baidu.com/it/u=3664273503,2975533171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=298"]]),e(s("img",null,null,512),[[t,"https://p6.itc.cn/images01/20200917/7656d7a7ea3f4aeaa97d302b94a5190e.png"]])]),_:1}),i(b(x),{target:".page_main"})],64)}}});const k=h(w,[["__scopeId","data-v-00088a59"]]);export{k as default};
