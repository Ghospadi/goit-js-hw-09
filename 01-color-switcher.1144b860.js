const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let r,a;const d=()=>{r=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.style.backgroundColor=r};e.addEventListener("click",(()=>{a=setInterval(d,1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1144b860.js.map