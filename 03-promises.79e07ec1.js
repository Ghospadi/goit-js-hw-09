!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("iU1Pc");function r(e,n,o){var t=new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}));t.then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})),t.catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault(),console.log(e);for(var n=e.currentTarget,o=n.delay,t=n.step,i=n.amount,a=+o.value,l=+t.value,c=+i.value,u=1;u<=c;u++){r(u,a,Math.random()>.3),a+=l}}))}();
//# sourceMappingURL=03-promises.79e07ec1.js.map
