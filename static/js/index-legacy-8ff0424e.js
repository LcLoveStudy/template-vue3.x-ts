System.register(["./vue-legacy-c2626a10.js","./index-legacy-523f30f0.js"],(function(e,t){"use strict";var n,i,o,l,r,a,u,s,d,v,c,f,y,m,p,w,x,_,h;return{setters:[function(e){n=e.x,i=e.aA,o=e.aG,l=e.aB,r=e.r,a=e.h,u=e.k,s=e.W,d=e.ag,v=e.y,c=e.z,f=e.A,y=e.u,m=e.G,p=e.H,w=e.P,x=e.M,_=e.D},function(e){h=e._}],execute:function(){var t=document.createElement("style");t.textContent=".slider_verify_box[data-v-4a431399]{border:1px solid #334155;position:relative;border-radius:5px;overflow:hidden;min-width:180px;width:var(--3c1e9cbc);height:45px;background-color:#67c23a}.slider_verify_box .slider_rocker[data-v-4a431399]{position:absolute;top:0;left:0;cursor:move;z-index:2;height:100%;width:45px;background-color:#334155;display:flex;justify-content:center;align-items:center}.slider_verify_box .verify_tip[data-v-4a431399]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:12px}.slider_verify_box .fail_bar[data-v-4a431399]{position:absolute;top:0;height:100%;width:100%;background-color:#16181c}\n",document.head.appendChild(t);var b={class:"slider_verify_box"},g=n({__name:"index",props:i({width:{type:String,default:"250px"}},{status:{type:Boolean,default:!1},statusModifiers:{}}),emits:i(["onSuccess"],["update:status"]),setup:function(e,t){var n=t.expose,i=t.emit;o((function(t){return{"3c1e9cbc":e.width}}));var h=l(e,"status"),g=i,S=r(!1),E=r(!1),k=r(),L=0,W=0,q=function(e){var t;null!==(t=k.value)&&void 0!==t&&t.contains(e.target)&&(W=e.x,E.value=!0)},j=function(){if(k.value&&E.value){var e=document.querySelector(".slider_verify_box");if(E.value=!1,W=0,k.value.style.left!==(null==e?void 0:e.clientWidth)-k.value.clientWidth+"px"){var t=document.querySelector(".fail_bar");k.value.style.transition="all 0.5s",t.style.transition="all 0.5s",t.style.left="0px",k.value.style.left="0px",setTimeout((function(){k.value&&(k.value.style.transition="none",t.style.transition="none")}),500)}else S.value=!0}},z=function(e){var t=document.querySelector(".slider_verify_box");if(null!=t&&t.contains(e.target)){if(E.value){var n=e.x-L-(W-L);document.querySelector(".fail_bar").style.left=n+k.value.clientWidth+"px",n<=0?(S.value=!1,k.value.style.left="0px"):n>=(null==t?void 0:t.clientWidth)-k.value.clientWidth-10?(S.value=!0,k.value.style.left=(null==t?void 0:t.clientWidth)-k.value.clientWidth+"px"):(S.value=!1,k.value.style.left=n+"px")}}else j()};return a((function(){return S.value}),(function(){S.value?(window.removeEventListener("mousedown",q),window.removeEventListener("mouseup",j),window.removeEventListener("mousemove",z),h.value=!0,g("onSuccess")):(window.addEventListener("mousedown",q),window.addEventListener("mouseup",j),window.addEventListener("mousemove",z),h.value=!1)})),u((function(){k.value=document.querySelector(".slider_rocker"),L=k.value.getBoundingClientRect().x,window.addEventListener("mousedown",q),window.addEventListener("mouseup",j),window.addEventListener("mousemove",z)})),n({name:"SliderVerify",reset:function(){if(k.value){var e=document.querySelector(".fail_bar");e&&(e.style.left="0px",k.value.style.left="0px",S.value=!1)}}}),s((function(){window.removeEventListener("mousedown",q),window.removeEventListener("mouseup",j),window.removeEventListener("mousemove",z)})),function(e,t){var n=d("SwitchButton"),i=d("el-icon"),o=d("Select");return v(),c("div",b,[f("div",{ref_key:"rockerDom",ref:k,class:"slider_rocker"},[y(S)?(v(),m(i,{key:1},{default:p((function(){return[w(o)]})),_:1})):(v(),m(i,{key:0},{default:p((function(){return[w(n)]})),_:1}))],512),t[0]||(t[0]=f("div",{class:"fail_bar"},null,-1)),f("span",{class:"verify_tip",style:_({color:y(S)?"#fff":"#64748b"})},x(y(S)?"验证通过":"请按住滑块拖动"),5)])}}});e("S",h(g,[["__scopeId","data-v-4a431399"]]))}}}));
