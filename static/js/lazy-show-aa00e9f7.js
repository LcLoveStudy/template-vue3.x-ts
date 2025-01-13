import{x as p,k as _,ag as n,y as d,z as r,P as l,H as h,aq as u,aD as g,I as a,A as s,u as f,O as b}from"./vue-7e8ef7ea.js";import{_ as x}from"./index-a73c8b83.js";import"./elementPlus-bf305cb5.js";import"./elementIcons-5f069385.js";const y=p({name:"ScrollBar",__name:"index",props:{target:{type:String,default:"body",require:!0},visibilityHeight:{type:Number,default:200}},setup(i){const o=i,c=()=>{document.querySelector(o.target).children[0].scrollIntoView({behavior:"smooth"})};return _(()=>{const e=document.querySelector(".scrollBar_main"),t=document.querySelector(o.target);t.addEventListener("scroll",()=>{t.scrollTop>o.visibilityHeight?e.setAttribute("style","opacity:1"):t.scrollTop<=o.visibilityHeight&&e.setAttribute("style","opacity:0")})}),(e,t)=>{const m=n("CaretTop"),v=n("el-icon");return d(),r("div",{class:"scrollBar_main shadow",onClick:c},[l(v,{class:"top_icon"},{default:h(()=>[l(m)]),_:1})])}}});const w={class:"phone:h-[20vh] tablet:h-[60v]"},z={class:"phone:h-[20vh] tablet:h-[60v]"},q={class:"phone:h-[20vh] tablet:h-[60v]"},S={class:"phone:h-[20vh] tablet:h-[60v]"},B={class:"phone:h-[20vh] tablet:h-[60v]"},C={class:"phone:h-[20vh] tablet:h-[60v]"},D=p({__name:"lazy-show",setup(i){return(o,c)=>{const e=n("el-card"),t=u("lazy");return d(),r(b,null,[c[0]||(c[0]=g('<div class="phone:w-full tablet:w-[40vw]" data-v-8d4855cc><div class="phone:text-6xl tablet:text-xl font-semibold" data-v-8d4855cc>图片懒加载(v-lazy)</div><div class="phone:mt-[24px] tablet:mt-6 flex flex-col phone:text-6xl tablet:text-xl phone:gap-[20px] tablet:gap-5" data-v-8d4855cc><span data-v-8d4855cc>应用场景：</span><span data-v-8d4855cc> 当页面开始加载时，会请求所有的图片资源，当前屏幕没显示的图片也会请求，如果用户只看到当前屏幕内的图片后就去到其他页面，其他图片就会浪费请求资源，影像一定的性能。 </span><span class="text-red-700 bgc-lightgray" data-v-8d4855cc> (避免和flex使用，当使用flex布局后会立刻请求网络) </span><span data-v-8d4855cc>用法说明:</span><span data-v-8d4855cc> 在图片过多的地方使用v-lazy指令,进行图片懒加载，当往下滚动页面时,图片进入视线后才会发送请求 </span><span class="text-red-700 bgc-lightgray" data-v-8d4855cc> (只适用于请求服务器的图片，项目assets文件夹中的不可用) </span><span data-v-8d4855cc>示例:</span><div class="code mt-5" data-v-8d4855cc> &lt;img <span class="text-red-700" data-v-8d4855cc>v-lazy=&quot;&#39;请求地址&#39;&quot;</span> /&gt; </div></div></div>',1)),l(e,{class:"page_main phone:h-[40vh] tablet:h-[80vh] phone:mt-[3vh] tablet:top-[10vh] tablet:right-[1vw] phone:w-[90vw] tablet:w-[50vw]"},{default:h(()=>[a(s("img",w,null,512),[[t,"https://img2.baidu.com/it/u=2098302066,1207295454&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=343"]]),a(s("img",z,null,512),[[t,"https://img1.baidu.com/it/u=2676533820,1803958359&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400"]]),a(s("img",q,null,512),[[t,"https://img2.baidu.com/it/u=3196968309,1319515521&fm=253&fmt=auto&app=138&f=PNG?w=751&h=500"]]),a(s("img",S,null,512),[[t,"https://img2.bianews.com/image/bianews/news/imgs/1632407012152.jpeg?imageView2/0/format/jpg/q/75"]]),a(s("img",B,null,512),[[t,"https://img0.baidu.com/it/u=3664273503,2975533171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=298"]]),a(s("img",C,null,512),[[t,"https://p6.itc.cn/images01/20200917/7656d7a7ea3f4aeaa97d302b94a5190e.png"]])]),_:1}),l(f(y),{target:".page_main"})],64)}}});const V=x(D,[["__scopeId","data-v-8d4855cc"]]);export{V as default};
