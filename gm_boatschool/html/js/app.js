(function(e){function t(t){for(var o,a,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="nui://gm_boatschool/html/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27e7":function(e,t,n){"use strict";n("ed7b")},"35b0":function(e,t,n){},"461b":function(e,t,n){"use strict";n("8bb1")},"4fc0":function(e,t,n){},"52f3":function(e,t,n){"use strict";n("f7af")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"header"},s={class:"content-container"},a={class:"buttongrid"},c={class:"pricesign"};function i(e,t,n,i,u,d){var l=Object(o["v"])("Tablet");return Object(o["o"])(),Object(o["d"])("div",{id:"drivingschool",style:{"--bg-primary":u.colors.backgroundPrimary,"--bg-secondary":u.colors.backgroundSecondary,"--color-primary":u.colors.colorPrimary,"--color-secondary":u.colors.colorSecondary,"--color-correct":u.colors.colorCorrect,"--color-false":u.colors.colorFalse,"--text-primary":u.colors.textPrimary,"--text-secondary":u.colors.textSecondary}},[Object(o["f"])(l),Object(o["f"])("div",{class:["popup",{hidden:u.popupHidden}]},[Object(o["f"])("div",r,Object(o["x"])(u.popupTitle),1),Object(o["f"])("div",s,[Object(o["f"])("div",a,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(u.buttons,(function(e){return Object(o["o"])(),Object(o["d"])("div",{class:["button",{complete:e.complete}],key:e.id,onClick:function(t){return d.choose(e.label,e.complete)}},[Object(o["e"])(Object(o["x"])(e.label)+" ",1),Object(o["f"])("span",c,Object(o["x"])(e.price),1)],10,["onClick"])})),128))])])],2)],4)}n("d3b7");var u=Object(o["A"])("data-v-4e70e25b");Object(o["r"])("data-v-4e70e25b");var d={id:"container"},l=Object(o["f"])("div",{id:"home-btn"},null,-1),p=Object(o["f"])("div",{id:"camera-outer"},[Object(o["f"])("div",{id:"camera-inner"})],-1);Object(o["p"])();var f=u((function(e,t,n,r,s,a){var c=Object(o["v"])("Display");return Object(o["o"])(),Object(o["d"])("div",d,[Object(o["f"])("div",{id:"frame",class:{closed:s.closed}},[l,p,Object(o["f"])(c)],2)])})),b={id:"display"},h={class:"header"},g={class:"footer"},m={class:"progressbar-outer footer-item"},v={class:"wrong-indicator footer-item"},j={class:"right-indicator footer-item"},O={id:"next-btn-label"};function x(e,t,n,r,s,a){var c=Object(o["v"])("router-view");return Object(o["o"])(),Object(o["d"])("div",b,[Object(o["f"])("div",h,Object(o["x"])(e.$store.getters.header),1),Object(o["f"])(c),Object(o["f"])("div",g,[Object(o["f"])("div",m,[Object(o["f"])("div",{class:"progressbar-inner",style:{"--progress":e.$store.getters.progress}},null,4)]),Object(o["f"])("div",v,Object(o["x"])(e.$store.getters.wrong),1),Object(o["f"])("div",j,Object(o["x"])(e.$store.getters.right),1),Object(o["f"])("div",{onClick:t[1]||(t[1]=function(){return a.goToNextPage&&a.goToNextPage.apply(a,arguments)}),class:"next-btn footer-item"},[Object(o["f"])("span",O,Object(o["x"])(e.$store.getters.nextBtnLabel),1)])])])}var y={name:"Display",methods:{goToNextPage:function(){postMessage({type:"nextButtonPressedBroadcast"})}}};n("f1f7");y.render=x;var w=y,P={name:"Tablet",data:function(){return{closed:!0}},components:{Display:w},methods:{close:function(){this.closed=!0,fetch("".concat(this.$store.getters.url,"/close"),{method:"post"}),this.$store.commit("resetStore")},open:function(){this.closed=!1}},mounted:function(){var e=this;window.addEventListener("message",(function(t){var n=t.data;switch(n.type){case"gm_open_dschool":e.open();break;case"gm_close_dschool":e.close();break}}))}};n("461b");P.render=f,P.__scopeId="data-v-4e70e25b";var $=P,k={name:"App",data:function(){return{colors:{backgroundPrimary:"gray",backgroundSecondary:"darkgray",colorPrimary:"lightgreen",colorSecondary:"green",colorCorrect:"darkgreen",colorFalse:"darkred",textPrimary:"white",textSecondary:"whitesmoke"},popupHidden:!0,popupTitle:"Wähle deine Prüfung",buttons:[]}},components:{Tablet:$},methods:{choose:function(e,t){t||(fetch("".concat(this.$store.getters.url,"/choose"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:e})}),postMessage({type:"gm_drivingschool_popup",closed:!0}))}},mounted:function(){var e=this;fetch("".concat(this.$store.getters.url,"/lang/popuptitle"),{method:"post"}).then((function(e){return e.json()})).then((function(t){return e.popupTitle=t.title})),fetch("".concat(this.$store.getters.url,"/config/colors"),{method:"post"}).then((function(e){return e.json()})).then((function(t){return e.colors=t})),fetch("".concat(this.$store.getters.url,"/exams"),{method:"post"}).then((function(e){return e.json()})).then((function(t){return e.buttons=t})),window.addEventListener("message",(function(t){var n=t.data;switch(n.type){case"gm_drivingschool_popup":e.popupHidden=n.closed}fetch("".concat(e.$store.getters.url,"/exams"),{method:"post"}).then((function(e){return e.json()})).then((function(t){return e.buttons=t}))})),window.addEventListener("keydown",(function(t){27===t.keyCode&&(e.popupHidden||(e.popupHidden=!0,fetch("".concat(e.$store.getters.url,"/close"),{method:"post"})))}))}};n("5a0b");k.render=i;var B=k,L=n("6c02"),S={class:"welcome"};function q(e,t,n,r,s,a){return Object(o["o"])(),Object(o["d"])("div",S,[Object(o["f"])("h1",null,Object(o["x"])(s.heading),1),(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(s.paragraphs,(function(e){return Object(o["o"])(),Object(o["d"])("p",{key:e},Object(o["x"])(e),1)})),128))])}var _={name:"Welcome",data:function(){return{heading:"Loading...",paragraphs:["Loading..."]}},mounted:function(){var e=this;fetch("".concat(this.$store.getters.url,"/lang/welcome"),{method:"post"}).then((function(e){return e.json()})).then((function(t){e.heading=t.title,e.paragraphs=t.paragraphs,e.$store.commit("updateHeader",t.header),e.$store.commit("changeNextBtnLabel",t.nextButtonLabel),e.$store.commit("nextPage",t.nextPage)}));var t=function t(n){var o=n.data;switch(o.type){case"nextButtonPressedBroadcast":e.$router.push(e.$store.getters.nextPage),window.removeEventListener("message",t);break}};window.addEventListener("message",t)}};n("b43b");_.render=q;var T=_,C={class:"question-div"},E={class:"question"},I={class:"test"};function N(e,t,n,r,s,a){var c=Object(o["v"])("RadioGroup");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",C,[Object(o["f"])("h2",E,Object(o["x"])(s.question),1)]),Object(o["f"])("div",I,[Object(o["f"])("img",{src:"./img/".concat(s.questionIndex+1,".png"),alt:"./img/".concat(s.questionIndex+1,".png not found"),class:"demo-img"},null,8,["src","alt"]),Object(o["f"])(c,{buttons:s.responseOptions},null,8,["buttons"])])],64)}var H={class:"radio-group"};function M(e,t,n,r,s,a){var c=Object(o["v"])("RadioBtn");return Object(o["o"])(),Object(o["d"])("div",H,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(n.buttons,(function(e){return Object(o["o"])(),Object(o["d"])(c,{key:e.index,label:e.data,active:s.radios[e.index],onClick:function(t){return a.select(e.index)}},null,8,["label","active","onClick"])})),128))])}n("159b");var R=Object(o["f"])("div",{class:"radio-outer"},[Object(o["f"])("div",{class:"radio-inner"})],-1),A={class:"radio-label"};function W(e,t,n,r,s,a){return Object(o["o"])(),Object(o["d"])("div",{class:["radio",{active:n.active}]},[R,Object(o["f"])("span",A,Object(o["x"])(n.label),1)],2)}var G={name:"RadioBtn",props:{label:String,active:Boolean}};n("83b3");G.render=W;var J=G,D={name:"RadioGroup",data:function(){return{radios:[]}},props:{buttons:Array},components:{RadioBtn:J},methods:{clearRadios:function(){var e=this;this.radios.forEach((function(t,n){return e.radios[n]=!1}))},select:function(e){this.clearRadios(),this.radios[e]=!0;var t=["a","b","c","d"];postMessage({type:"radioGroupSelectionBroadcast",buttonSelected:t[e]})}},mounted:function(){for(var e=this,t=0;t<this.buttons.length;t++)this.radios.push(!1);window.addEventListener("message",(function(t){var n=t.data;switch(n.type){case"nextButtonPressedBroadcast":e.clearRadios();break}}))}};D.render=M;var F=D,Q={name:"Test",data:function(){return{responseOptions:[{index:0,data:"Veniam sunt mollit aliquip aliquip enim enim nulla.",responseId:"a"},{index:1,data:"Culpa sunt amet sint commodo fugiat ex nulla amet officia tempor reprehenderit ea do.",responseId:"b"},{index:2,data:"Consequat aliquip irure nostrud dolor occaecat enim sunt.",responseId:"c"},{index:3,data:"Pariatur cupidatat sit velit exercitation deserunt mollit non est minim et in aute.",responseId:"d"}],question:"hello world",questionIndex:0,correctAnswer:"b",correct:!1,last:!1}},components:{RadioGroup:F},methods:{fetchQuestion:function(e){var t=this;fetch("".concat(this.$store.getters.url,"/question"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({answerIsCorrect:e})}).then((function(e){return e.json()})).then((function(e){t.question=e.question.question,t.questionIndex=e.questionIndex,t.responseOptions[0].data=e.question.a,t.responseOptions[1].data=e.question.b,t.responseOptions[2].data=e.question.c,t.responseOptions[3].data=e.question.d,t.correctAnswer=e.question.correct,t.$store.commit("updateHeader",e.question.header),t.$store.commit("updateProgress",e.progress),t.last=e.last}))}},mounted:function(){var e=this;fetch("".concat(this.$store.getters.url,"/lang/test"),{method:"post"}).then((function(e){return e.json()})).then((function(t){e.$store.commit("changeNextBtnLabel",t.nextButtonLabel)})),this.fetchQuestion(null);var t=function t(n){var o=n.data;switch(o.type){case"radioGroupSelectionBroadcast":e.correct=o.buttonSelected===e.correctAnswer;break;case"nextButtonPressedBroadcast":e.correct?e.$store.commit("incStatusCorrect"):e.$store.commit("incStatusWrong"),e.last?(window.removeEventListener("message",t),fetch("".concat(e.$store.getters.url,"/get-results"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({answerIsCorrect:e.correct})}).then((function(e){return e.json()})).then((function(t){t?e.$router.push("/pass"):e.$router.push("/fail")}))):(e.fetchQuestion(e.correct),e.correct=!1);break}};window.addEventListener("message",t)}};n("52f3");Q.render=N;var V=Q,z={class:"passed"};function U(e,t,n,r,s,a){return Object(o["o"])(),Object(o["d"])("div",z,[Object(o["f"])("h1",null,Object(o["x"])(s.heading),1),(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(s.paragraphs,(function(e){return Object(o["o"])(),Object(o["d"])("p",{key:e},Object(o["x"])(e),1)})),128))])}var K={name:"PassedPage",data:function(){return{heading:"Verkackt",paragraphs:["du hast die theoretische prüfung leider nicht bestanden","um dieses fenster zu verlassen, drücke auf den 'schließen' knopf"]}},created:function(){var e=this;fetch("".concat(this.$store.getters.url,"/lang/passed"),{method:"post"}).then((function(e){return e.json()})).then((function(t){e.heading=t.title,e.paragraphs=t.paragraphs,e.$store.commit("updateHeader",t.header),e.$store.commit("changeNextBtnLabel",t.nextButtonLabel),e.$store.commit("nextPage",t.nextPage)})),this.$store.commit("updateProgress",1);var t=function(t){var n=t.data;"nextButtonPressedBroadcast"===n.type&&(fetch("".concat(e.$store.getters.url,"/close"),{method:"post"}),postMessage({type:"gm_close_dschool"}))};window.addEventListener("message",t)}};n("27e7");K.render=U;var X=K,Y={class:"failed"};function Z(e,t,n,r,s,a){return Object(o["o"])(),Object(o["d"])("div",Y,[Object(o["f"])("h1",null,Object(o["x"])(s.heading),1),(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(s.paragraphs,(function(e){return Object(o["o"])(),Object(o["d"])("p",{key:e},Object(o["x"])(e),1)})),128))])}var ee={name:"FailedPage",data:function(){return{heading:"Verkackt",paragraphs:["du hast die theoretische prüfung leider nicht bestanden","um dieses fenster zu verlassen, drücke auf den 'schließen' knopf"]}},created:function(){var e=this;fetch("".concat(this.$store.getters.url,"/lang/failed"),{method:"post"}).then((function(e){return e.json()})).then((function(t){e.heading=t.title,e.paragraphs=t.paragraphs,e.$store.commit("updateHeader",t.header),e.$store.commit("changeNextBtnLabel",t.nextButtonLabel),e.$store.commit("nextPage",t.nextPage)})),this.$store.commit("updateProgress",1);var t=function t(n){var o=n.data;"nextButtonPressedBroadcast"===o.type&&(fetch("".concat(e.$store.getters.url,"/close"),{method:"post"}),postMessage({type:"gm_close_dschool"}),e.$router.push("/"),window.removeEventListener("message",t))};window.addEventListener("message",t)}};n("df0d");ee.render=Z;var te=ee,ne=[{path:"/",name:"Welcome",component:T},{path:"/test",name:"DrivingTest",component:V},{path:"/pass",name:"TestPassed",component:X},{path:"/fail",name:"TestFailed",component:te}],oe=Object(L["a"])({history:Object(L["b"])(),routes:ne}),re=oe,se=n("5502"),ae=Object(se["a"])({state:{serverUrl:"https://gm_boatschool",header:"Hello, World!",nextBtnLabel:"Next",nextPage:"/",progress:0,status:{correct:0,wrong:0}},mutations:{updateHeader:function(e,t){return e.header=t},changeNextBtnLabel:function(e,t){return e.nextBtnLabel=t},nextPage:function(e,t){return e.nextPage=t},updateProgress:function(e,t){return e.progress=t},incStatusCorrect:function(e){return e.status.correct++},incStatusWrong:function(e){return e.status.wrong++},resetStore:function(e){e.header="",e.nextBtnLabel="",e.nextPage="/",e.progress=0,e.status={correct:0,wrong:0}}},getters:{url:function(e){return e.serverUrl},header:function(e){return e.header},nextBtnLabel:function(e){return e.nextBtnLabel},nextPage:function(e){return e.nextPage},right:function(e){return e.status.correct},wrong:function(e){return e.status.wrong},progress:function(e){return e.progress}}});Object(o["c"])(B).use(ae).use(re).mount("#app")},"5a0b":function(e,t,n){"use strict";n("35b0")},"7b0a":function(e,t,n){},"83b3":function(e,t,n){"use strict";n("c3c4")},"8bb1":function(e,t,n){},b43b:function(e,t,n){"use strict";n("4fc0")},b72b:function(e,t,n){},c3c4:function(e,t,n){},df0d:function(e,t,n){"use strict";n("7b0a")},ed7b:function(e,t,n){},f1f7:function(e,t,n){"use strict";n("b72b")},f7af:function(e,t,n){}});
//# sourceMappingURL=app.js.map