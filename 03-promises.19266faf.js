var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("eWCmQ");function r(e,o,t){const n=new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}));n.then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})),n.catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault(),console.log(e);const{delay:o,step:t,amount:n}=e.currentTarget;let i=+o.value,l=+t.value,a=+n.value;for(let e=1;e<=a;e++){r(e,i,Math.random()>.3),i+=l}}));
//# sourceMappingURL=03-promises.19266faf.js.map
