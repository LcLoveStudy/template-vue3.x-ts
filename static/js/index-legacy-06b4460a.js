System.register(["./vue-legacy-c2626a10.js","./index-legacy-0b1e63e2.js"],(function(e,t){"use strict";var n,i,o,l,a,r,u,s,d,v,c,f,w,p,y,m,h,x,_;return{setters:[function(e){n=e.x,i=e.aA,o=e.aG,l=e.aB,a=e.r,r=e.h,u=e.k,s=e.W,d=e.ag,v=e.y,c=e.z,f=e.A,w=e.u,p=e.G,y=e.H,m=e.P,h=e.M,x=e.D},function(e){_=e._}],execute:function(){var t=document.createElement("style");t.textContent=".slider_verify_box[data-v-2a260884]{border:1px solid #334155;position:relative;border-radius:5px;overflow:hidden;min-width:180px;width:var(--249ee50e);height:45px;background-color:#34d399}.slider_verify_box .slider_rocker[data-v-2a260884]{position:absolute;top:0;left:0;cursor:move;z-index:2;height:100%;width:45px;background-color:#334155;display:flex;justify-content:center;align-items:center}.slider_verify_box .verify_tip[data-v-2a260884]{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:12px;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,#ffffff 50%,rgba(255,255,255,0) 100%);-webkit-background-clip:text;background-clip:text;background-size:200%;animation:lightSweep-2a260884 10s infinite}@keyframes lightSweep-2a260884{0%{background-position:-200%}50%{background-position:200%}to{background-position:-200%}}.slider_verify_box .fail_bar[data-v-2a260884]{position:absolute;top:0;height:100%;width:100%;background-color:#16181c}\n",document.head.appendChild(t);var b={class:"slider_verify_box"},g=n({__name:"index",props:i({width:{type:String,default:"250px"}},{status:{type:Boolean,default:!1},statusModifiers:{}}),emits:i(["onSuccess"],["update:status"]),setup:function(e,t){var n=t.expose,i=t.emit;o((function(t){return{"249ee50e":e.width}}));var _=l(e,"status"),g=i,E=a(!1),L=a(!1),k=a(),S=0,W=0,q=function(e){var t;null!==(t=k.value)&&void 0!==t&&t.contains(e.target)&&(W=e.x,L.value=!0)},z=function(){if(k.value&&L.value){var e=document.querySelector(".slider_verify_box");if(L.value=!1,W=0,k.value.style.left!==(null==e?void 0:e.clientWidth)-k.value.clientWidth+"px"){var t=document.querySelector(".fail_bar");k.value.style.transition="all 0.5s",t.style.transition="all 0.5s",t.style.left="0px",k.value.style.left="0px",setTimeout((function(){k.value&&(k.value.style.transition="none",t.style.transition="none")}),500)}else E.value=!0}},j=function(e){var t=document.querySelector(".slider_verify_box");if(null!=t&&t.contains(e.target)){if(L.value){var n=e.x-S-(W-S);document.querySelector(".fail_bar").style.left=n+k.value.clientWidth+"px",n<=0?(E.value=!1,k.value.style.left="0px"):n>=(null==t?void 0:t.clientWidth)-k.value.clientWidth-10?(E.value=!0,k.value.style.left=(null==t?void 0:t.clientWidth)-k.value.clientWidth+"px"):(E.value=!1,k.value.style.left=n+"px")}}else z()},B=function(e){var t;return null===(t=k.value)||void 0===t?void 0:t.contains(e.target)},D=function(e){B(e)&&(W=e.touches[0].clientX,L.value=!0,e.preventDefault())},C=function(e){if(L.value&&B(e)){e.preventDefault();var t=document.querySelector(".slider_verify_box");if(null!=t&&t.contains(e.target)){var n=e.touches[0].clientX-S-(W-S);document.querySelector(".fail_bar").style.left=n+k.value.clientWidth+"px",n<=0?(E.value=!1,k.value.style.left="0px"):n>=(null==t?void 0:t.clientWidth)-k.value.clientWidth-10?(E.value=!0,k.value.style.left=(null==t?void 0:t.clientWidth)-k.value.clientWidth+"px"):(E.value=!1,k.value.style.left=n+"px")}}},A=function(){if(k.value&&L.value){L.value=!1,W=0;var e=document.querySelector(".slider_verify_box");if(k.value.style.left!==(null==e?void 0:e.clientWidth)-k.value.clientWidth+"px"){var t=document.querySelector(".fail_bar");k.value.style.transition="all 0.5s",t.style.transition="all 0.5s",t.style.left="0px",k.value.style.left="0px",setTimeout((function(){k.value&&(k.value.style.transition="none",t.style.transition="none")}),500)}else E.value=!0}};return r((function(){return E.value}),(function(){E.value?(window.removeEventListener("mousedown",q),window.removeEventListener("mouseup",z),window.removeEventListener("mousemove",j),window.removeEventListener("touchstart",D),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",A),_.value=!0,g("onSuccess")):(window.addEventListener("mousedown",q),window.addEventListener("mouseup",z),window.addEventListener("mousemove",j),window.addEventListener("touchstart",D),window.addEventListener("touchmove",C),window.addEventListener("touchend",A),_.value=!1)})),u((function(){k.value=document.querySelector(".slider_rocker"),S=k.value.getBoundingClientRect().x,window.addEventListener("mousedown",q),window.addEventListener("mouseup",z),window.addEventListener("mousemove",j),window.addEventListener("touchstart",D,{passive:!1}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",A,{passive:!1})})),n({name:"SliderVerify",reset:function(){if(k.value){var e=document.querySelector(".fail_bar");e&&(e.style.left="0px",k.value.style.left="0px",E.value=!1)}}}),s((function(){window.removeEventListener("mousedown",q),window.removeEventListener("mouseup",z),window.removeEventListener("mousemove",j),window.removeEventListener("touchstart",D),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",A)})),function(e,t){var n=d("SwitchButton"),i=d("el-icon"),o=d("Select");return v(),c("div",b,[f("div",{ref_key:"rockerDom",ref:k,class:"slider_rocker"},[w(E)?(v(),p(i,{key:1},{default:y((function(){return[m(o)]})),_:1})):(v(),p(i,{key:0},{default:y((function(){return[m(n)]})),_:1}))],512),t[0]||(t[0]=f("div",{class:"fail_bar"},null,-1)),f("span",{class:"verify_tip",style:x({color:w(E)?"#fff":"transparent"})},h(w(E)?"验证通过":"请按住滑块拖动"),5)])}}});e("S",_(g,[["__scopeId","data-v-2a260884"]]))}}}));
