(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(3),c=t.n(r),i=(t(17),t(1)),s=t.n(i),l=t(4),p=t(5),d=t(6),u=t(9),f=t(7),h=t(10),m=t(8),w=t.n(m),v=(t(20),function(e){function n(){var e,t;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).state={enablePopup:!1},t.showAddToHomeScreenPopup=function(){t.setState({enablePopup:!1},Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.deferredPrompt.prompt(),e.next=3,t.deferredPrompt.userChoice;case 3:"accepted"===e.sent.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),t.deferredPrompt=null;case 6:case"end":return e.stop()}},e)})))},t}return Object(h.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeinstallprompt",function(n){n.preventDefault(),e.deferredPrompt=n,e.setState({enablePopup:!0})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),this.state.enablePopup&&a.a.createElement("div",null,a.a.createElement("div",null,"Enable add to home screen popup"),a.a.createElement("button",{onClick:this.showAddToHomeScreenPopup},"Enable")))}}]),n}(o.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://ajay-techjini.github.io/pwa-add-to-home-screen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("https://ajay-techjini.github.io/pwa-add-to-home-screen","/service-worker.js");g?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(n,e)})}}()},8:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);