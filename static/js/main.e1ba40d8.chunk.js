(this["webpackJsonplets-try-again"]=this["webpackJsonplets-try-again"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),o=a.n(l),r=(a(9),a(1));a(10);var s=function(){var e=new Date,t="4bfdfec227f66e475506aa655824fc43",a=Object(n.useState)(""),l=Object(r.a)(a,2),o=l[0],s=l[1],i=Object(n.useState)({}),m=Object(r.a)(i,2),u=m[0],h=m[1];return console.log(o),console.log(u),c.a.createElement("div",{class:"app"},c.a.createElement("main",null,c.a.createElement("div",{class:"len"},c.a.createElement("input",{onChange:function(e){return s(e.target.value)},value:o,type:"search-box",placeholder:"search..."}),c.a.createElement("button",{onClick:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&unit=uk&appid=").concat(t)).then((function(e){return e.json()})).then((function(e){s(""),h(e),console.log(e)}))}},c.a.createElement("i",{class:"fas fa-search"}))),"undefined"!=typeof u.main?c.a.createElement("div",{class:"fully"},c.a.createElement("div",{class:"yet"},c.a.createElement("h1",{class:"name-text"},u.name)),c.a.createElement("div",{class:"well"},c.a.createElement("h1",{class:"new-text"},e.getDate()),c.a.createElement("h1",{class:"new-text"},"/"),c.a.createElement("h1",{class:"new-text"},e.getMonth()),c.a.createElement("h1",{class:"new-text"},"/"),c.a.createElement("h1",{class:"new-text"},e.getFullYear())),c.a.createElement("div",{class:"container-2"},c.a.createElement("p",{class:"cell-text"},Math.round(u.main.temp-273),"\xb0C"))):c.a.createElement("div",null,c.a.createElement("h1",{class:"temp"},"SEARCH CITY TEMPRATURE"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e1ba40d8.chunk.js.map