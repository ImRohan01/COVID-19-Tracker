(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(53),o=a.n(c),s=a(7),l=a.n(s),i=a(16),d=a(4),A=a(54),h=a.n(A),u=a(6),m=a.n(u);var p=function(){return n.a.createElement("div",{className:"app-first",id:"first"},n.a.createElement("div",{className:"app-first-content"},n.a.createElement("div",{className:"app-image"},n.a.createElement("img",{style:{height:"40vh"},src:h.a,alt:"virus"})),n.a.createElement("div",{className:"app-header"},n.a.createElement("div",{className:"app-title"},"COVID 19 TRACKER"),n.a.createElement("div",{className:"app-subtitle"},"Latest COVID 19 data across the world!"))),n.a.createElement("div",{className:"app-next"},n.a.createElement("a",{href:"#second"},n.a.createElement("img",{id:"down",src:m.a,alt:"down"}))))},f=a(55),v=a(27),E=a.n(v);var g=function(e){var t=e.location,a=e.current,c=e.countries,o=e.setLocation,s=e.timeStats,l=Object(r.useState)([]),i=Object(d.a)(l,2),A=i[0],h=i[1],u={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("+0,0")}}},scales:{xAxes:[{gridLines:{display:!1},type:"time",time:{format:"MM/DD/YY",tootltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return E()(e).format("0a")}}}]}};return Object(r.useEffect)((function(){!function(){var e,t=[];for(var a in s.cases){if(e){var r={x:a,y:s.cases[a]-e};t.push(r)}e=s.cases[a]}h(t)}(),console.log(A)}),[s]),n.a.createElement("div",{className:"app-second",id:"second"},n.a.createElement("div",{className:"select-country"},n.a.createElement("select",null,n.a.createElement("option",{onClick:function(){o("Worldwide")}},"Worldwide"),c.map((function(e){return n.a.createElement("option",{onClick:function(){return o(e)}},e)})))),n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{backgroundColor:"#ffd900"},className:"card-color"}),n.a.createElement("h3",null,"Active"),n.a.createElement("h1",null,a.active_short),n.a.createElement("h3",null,a.active)),n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{backgroundColor:"#2fff00"},className:"card-color"}),n.a.createElement("h3",null,"Recovered"),n.a.createElement("h1",null,a.recovered_short),n.a.createElement("h3",null,a.recovered)),n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{backgroundColor:"red"},className:"card-color"}),n.a.createElement("h3",null,"Deaths"),n.a.createElement("h1",null,a.deaths_short),n.a.createElement("h3",null,a.deaths)),n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{backgroundColor:"#ff00f7"},className:"card-color"}),n.a.createElement("h3",null,"Total"),n.a.createElement("h1",null,a.cases_short),n.a.createElement("h3",null,a.cases)),n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{backgroundColor:"blue"},className:"card-color"}),n.a.createElement("h3",null,"Location"),n.a.createElement("h2",null,t))),n.a.createElement("div",{class:"graph-header"},n.a.createElement("h2",null,"Worldwide Case Growth")),n.a.createElement("div",{style:{height:"35vh",width:"80vw",paddingLeft:"10vw"}},A.length>0?n.a.createElement(f.Line,{data:{datasets:[{backgroundColor:"rgba(255,255,255,0.2)",borderColor:"cyan",data:A}]},options:u}):""),n.a.createElement("div",{className:"app-next"},n.a.createElement("a",{href:"#third"},n.a.createElement("img",{id:"down",src:m.a,alt:"down"})),n.a.createElement("a",{href:"#first"},n.a.createElement("img",{id:"up",src:m.a,alt:"up"}))))};var w=function(e){var t=e.stats,a=e.countries,r=e.worldwide;console.log(r);var c=[],o=["affectedCountries","updated","active_short","cases_short","recovered_short","deaths_short"],s=Object.keys(r);if(t[0]){var l=function(e){var r={};for(var n in r.country=a[e],s)if(o.includes(s[n]))console.log(n);else{var l=t.filter((function(t){return t.country===a[e]}))[0][s[n]];r[s[n]]=l}c.push(r)};for(var i in a)l(i)}console.log(c);var d=c.map((function(e){var t=Object.keys(e).map((function(t){return n.a.createElement("td",null," ",e[t]," ")}));return n.a.createElement("tr",null," ",t," ")}));return n.a.createElement("div",{className:"app-third",id:"third"},n.a.createElement("div",{className:"app-third-title"},n.a.createElement("h1",null,"Complete Statistics")),n.a.createElement("div",{className:"stats-outer"},n.a.createElement("div",{className:"stats-table"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Country"),r==={}?"":Object.keys(r).map((function(e){return o.includes(e)?"":n.a.createElement("th",null,e)}))),c===[]?"":d))),n.a.createElement("div",{className:"app-next"},n.a.createElement("a",{href:"#second"},n.a.createElement("img",{style:{marginLeft:"47vw"},id:"up",src:m.a,alt:"up"}))))},B=a(17),M=a.n(B);a(176);var b=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),A=s[0],h=s[1],u=Object(r.useState)({}),m=Object(d.a)(u,2),f=m[0],v=m[1],E=Object(r.useState)(""),B=Object(d.a)(E,2),b=B[0],C=B[1],Q=Object(r.useState)({}),k=Object(d.a)(Q,2),N=k[0],D=k[1],S=Object(r.useState)({}),L=Object(d.a)(S,2),y=L[0],Y=L[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()("https://disease.sh/v3/covid-19/all");case 2:(t=e.sent).data.active/Math.pow(10,6)>=1?t.data.active_short=String(Math.floor(t.data.active/Math.pow(10,6)))+"M+":t.data.active_short=String(Math.floor(t.data.active/Math.pow(10,3)))+"K+",t.data.recovered/Math.pow(10,6)>=1?t.data.recovered_short=String(Math.floor(t.data.recovered/Math.pow(10,6)))+"M+":t.data.recovered_short=String(Math.floor(t.data.recovered/Math.pow(10,3)))+"K+",t.data.deaths/Math.pow(10,6)>=1?t.data.deaths_short=String(Math.floor(t.data.deaths/Math.pow(10,6)))+"M+":t.data.deaths_short=String(Math.floor(t.data.deaths/Math.pow(10,3)))+"K+",t.data.cases/Math.pow(10,6)>=1?t.data.cases_short=String(Math.floor(t.data.cases/Math.pow(10,6)))+"M+":t.data.cases_short=String(Math.floor(t.data.cases/Math.pow(10,3)))+"K+",v(t.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()("https://disease.sh/v3/covid-19/countries");case 2:(t=e.sent).data.forEach((function(e){e.active/Math.pow(10,6)>=1?e.active_short=String(Math.floor(e.active/Math.pow(10,5)))+"M+":e.active/Math.pow(10,3)>=1?e.active_short=String(Math.floor(e.active/Math.pow(10,3)))+"K+":e.active_short=String(e.active),e.recovered/Math.pow(10,6)>=1?e.recovered_short=String(Math.floor(e.recovered/Math.pow(10,5)))+"M+":e.recovered/Math.pow(10,3)>=1?e.recovered_short=String(Math.floor(e.recovered/Math.pow(10,3)))+"K+":e.recovered_short=String(e.recovered),e.deaths/Math.pow(10,6)>=1?e.deaths_short=String(Math.floor(e.deaths/Math.pow(10,5)))+"M+":e.deaths/Math.pow(10,3)>=1?e.deaths_short=String(Math.floor(e.deaths/Math.pow(10,3)))+"K+":e.deaths_short=String(e.deaths),e.cases/Math.pow(10,6)>=1?e.cases_short=String(Math.floor(e.cases/Math.pow(10,5)))+"M+":e.cases/Math.pow(10,3)>=1?e.cases_short=String(Math.floor(e.cases/Math.pow(10,3)))+"K+":e.cases_short=String(e.cases)})),a=[],t.data.forEach((function(e){return a.push(e.country)})),C("Worldwide"),c(a),console.log(t.data),h(t.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()("https://disease.sh/v3/covid-19/historical/all?lastdays=120");case 2:t=e.sent,console.log(t.data),Y(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),a()}),[]),Object(r.useEffect)((function(){"Worldwide"===b?D(f):""===b||D(A.filter((function(e){return e.country===b}))[0]),console.log(y)}),[b,f,A,y]),n.a.createElement("div",{className:"app-window"},n.a.createElement(p,null),n.a.createElement(g,{countries:a,current:N,location:b,setLocation:C,timeStats:y}),n.a.createElement(w,{stats:A,countries:a,worldwide:f}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/virus.12701290.png"},56:function(e,t,a){e.exports=a(177)},6:function(e,t){e.exports="data:image/png;base64,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"}},[[56,1,2]]]);
//# sourceMappingURL=main.35c8b88d.chunk.js.map