(function(){"use strict";var e={209:function(e,t,r){var n=r(963),a=r(252);function o(e,t){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r)}var s=r(744);const l={},i=(0,s.Z)(l,[["render",o]]);var u=i,c=r(119),d=r(577);const f=e=>((0,a.dD)("data-v-4c988fab"),e=e(),(0,a.Cn)(),e),g={class:"h-screen relative"},p={class:"w-full bg-gray-700 px-2 pt-4 pb-4 pl-10 pr-10"},m={class:"w-full sm:flex sm:justify-between sm:items-center"},_=f((()=>(0,a._)("h1",{class:"text-white text-center text-3xl"},"博雲科技",-1))),h={class:"flex justify-center pt-3 md:p-0"},v=f((()=>(0,a._)("button",{class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-none"},"8hr",-1))),b=f((()=>(0,a._)("button",{class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"},"24hr",-1))),y={key:0,class:"layout-container left-20 sm:top-20 bg-white w-60 pl-5 pb-5 pr-2 rounded-lg shadow-lg shadow-neutral-400"},w={class:"flex flex-col items-start"},x={class:"text-center mt-4 mb-2 text-2xl font-bold tracking-tight text-rose-700 dark:text-white"},k={class:""},j={class:"text-black"},O=f((()=>(0,a._)("strong",null,"總請求的時間： ",-1))),z={class:"text-black"},M=f((()=>(0,a._)("strong",null,"總目標處理時間：",-1))),q={class:"text-black"},L=f((()=>(0,a._)("strong",null,"總回應處理時間：",-1))),P={class:"text-black"},S=f((()=>(0,a._)("strong",null,"平均請求的時間：",-1))),C={class:"text-black"},E=f((()=>(0,a._)("strong",null,"平均目標處理時間：",-1))),T={class:"text-black"},U=f((()=>(0,a._)("strong",null,"平均回應處理時間：",-1))),H={key:1,class:"layout-container left-16 sm:top-20 bg-white pl-5 pb-5 pr-2 rounded-lg shadow-lg shadow-neutral-400"},W={class:"flex flex-col items-start"},J={class:"text-center text-2xl font-bold tracking-tight text-rose-700 dark:text-white"},D={class:"flex"},$={class:"flex flex-col items-start"},R={class:"text-black pr-5"},A=f((()=>(0,a._)("strong",null,"總請求： ",-1))),I={class:"text-black pr-5"},Y=f((()=>(0,a._)("strong",null,"總目標： ",-1))),Z={class:"text-black pr-5"},N=f((()=>(0,a._)("strong",null,"總回應： ",-1))),F={class:"flex flex-col items-start"},B={class:"text-black pr-5"},G=f((()=>(0,a._)("strong",null,"平均請求： ",-1))),K={class:"text-black pr-5"},Q=f((()=>(0,a._)("strong",null,"平均目標： ",-1))),V={class:"text-black pr-5"},X=f((()=>(0,a._)("strong",null,"平均回應： ",-1))),ee={class:"h-full z-[1]"};function te(e,t,r,n,o,s){const l=(0,a.up)("l-tile-layer"),i=(0,a.up)("l-marker"),u=(0,a.up)("marker-cluster"),c=(0,a.up)("l-map");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",p,[(0,a._)("div",m,[_,(0,a._)("div",h,[(0,a._)("button",{onClick:t[0]||(t[0]=e=>(s.changeTime("20220701-now.py.json"),o.open=!1)),class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"},"7/1"),(0,a._)("button",{onClick:t[1]||(t[1]=e=>(s.changeTime("20220703.json"),o.open=!1)),class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-none"},"7/3"),v,b])])]),o.open&&o.bigSize?((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",w,[(0,a._)("h5",x,"共"+(0,d.zw)(e.counter)+"筆",1),(0,a._)("ul",k,[(0,a._)("li",j,[O,(0,a.Uk)(" "+(0,d.zw)(o.sum_req),1)]),(0,a._)("li",z,[M,(0,a.Uk)((0,d.zw)(o.sum_target),1)]),(0,a._)("li",q,[L,(0,a.Uk)((0,d.zw)(o.sum_res),1)]),(0,a._)("li",P,[S,(0,a.Uk)((0,d.zw)(o.average_req),1)]),(0,a._)("li",C,[E,(0,a.Uk)((0,d.zw)(o.average_target),1)]),(0,a._)("li",T,[U,(0,a.Uk)((0,d.zw)(o.average_res),1)])])])])):(0,a.kq)("",!0),o.open&&o.smallSize?((0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",W,[(0,a._)("h5",J,"共"+(0,d.zw)(e.counter)+"筆",1),(0,a._)("div",D,[(0,a._)("ul",$,[(0,a._)("li",R,[A,(0,a.Uk)(" "+(0,d.zw)(o.sum_req),1)]),(0,a._)("li",I,[Y,(0,a.Uk)((0,d.zw)(o.sum_target),1)]),(0,a._)("li",Z,[N,(0,a.Uk)((0,d.zw)(o.sum_res),1)])]),(0,a._)("ul",F,[(0,a._)("li",B,[G,(0,a.Uk)((0,d.zw)(o.average_req),1)]),(0,a._)("li",K,[Q,(0,a.Uk)((0,d.zw)(o.average_target),1)]),(0,a._)("li",V,[X,(0,a.Uk)((0,d.zw)(o.average_res),1)])])])])])):(0,a.kq)("",!0),(0,a._)("div",ee,[(0,a.Wm)(c,{class:"map-container",id:"map",ref:"map","max-zoom":18,zoom:o.zoom,center:{lat:25.06108073603067,lng:121.56835445788387},onReady:t[2]||(t[2]=e=>s.onLeafletReady("20220703.json"))},{default:(0,a.w5)((()=>[o.leafletReady?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Wm)(l,{url:o.url},null,8,["url"]),(0,a.Wm)(u,{options:{showCoverageOnHover:!1,chunkedLoading:!0}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.datas,((e,t)=>((0,a.wg)(),(0,a.j4)(i,{key:t,"lat-lng":[`${e.latitude}`,`${e.longitude}`],onMouseover:t=>(s.showInfo(e.counter,e.sum_request_processing_time,e.sum_target_processing_time,e.sum_response_processing_time,e.average_response_processing_time,e.average_target_processing_time,e.average_response_processing_time),o.open=!0),onClick:t=>(s.showInfo(e.counter,e.sum_request_processing_time,e.sum_target_processing_time,e.sum_response_processing_time,e.average_response_processing_time,e.average_target_processing_time,e.average_response_processing_time),o.open=!0)},null,8,["lat-lng","onMouseover","onClick"])))),128))])),_:1})],64)):(0,a.kq)("",!0)])),_:1},8,["zoom","center"])])])}var re=r(662);const ne={style:{display:"none"}};function ae(e,t,r,n,o,s){return(0,a.wg)(),(0,a.iD)("div",ne,[n.ready?(0,a.WI)(e.$slots,"default",{key:0}):(0,a.kq)("",!0)])}var oe=r(262),se=r(522),le=r(683);const ie={options:{type:Object,default(){return{}}}};var ue={name:"MarkerCluster",props:ie,setup(e,t){const n=(0,oe.iH)({}),o=(0,oe.iH)(!1),s=(0,a.f3)("addLayer"),l=(0,a.f3)("removeLayer");(0,a.JJ)("canSetParentHtml",(()=>!!n.value.getElement())),(0,a.JJ)("setParentHtml",(e=>n.value.getElement().innerHTML=e)),(0,a.JJ)("addLayer",(e=>{n.value.addLayer(e.leafletObject)})),(0,a.JJ)("removeLayer",(e=>{n.value.removeLayer(e.leafletObject)}));const{methods:i}=(0,le.cY)(e,n,t);return(0,a.bv)((async()=>{const{DomEvent:l,marker:u}=await r.e(633).then(r.bind(r,633)),{MarkerClusterGroup:c}=await Promise.all([r.e(633),r.e(732)]).then(r.bind(r,732));n.value=new c(e.options);const d=(0,se.Zi)(t.attrs);l.on(n.value,d),(0,se.bo)(i,n.value,e),s({...e,...i,leafletObject:n.value}),o.value=!0,(0,a.Y3)((()=>t.emit("ready",n.value)))})),(0,a.Jd)((()=>n.value&&n.value._leaflet_id&&l({leafletObject:n.value}))),{ready:o,leafletObject:n}},render(){return(0,le.sY)(this.ready,this.$slots)}};const ce=(0,s.Z)(ue,[["render",ae]]);var de=ce,fe={name:"HomeView",components:{LMap:re.iA,LTileLayer:re.Hw,LMarker:re.$R,LPopup:re.Q2,MarkerCluster:de},data(){return{url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:13,leafletReady:!1,leafletObject:null,visible:!1,datas:null,info:null,sum_req:"",sum_target:"",sum_res:"",average_req:"",average_target:"",average_res:"",open:!1,bigSize:null,smallSize:null,screenWidth:null}},mounted(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},watch:{screenWidth:{handler:function(e,t){e<750?(this.smallSize=!0,this.bigSize=!1):(this.smallSize=!1,this.bigSize=!0)},immediate:!0}},methods:{async onLeafletReady(e){await this.$nextTick(),this.leafletObject=this.$refs.map.leafletObject,this.leafletReady=!0;const t=await this.axios.get(e);this.datas=t.data},async changeTime(e){this.datas=[],this.counter="",this.sum_req="",this.sum_target="",this.sum_res="",this.average_req="",this.average_target="",this.average_res="";const t=await this.axios.get(e);this.datas=t.data},showInfo(e,t,r,n,a,o,s){this.counter=Math.round(e),this.sum_req=Math.round(100*t)/100,this.sum_target=Math.round(100*r)/100,this.sum_res=Math.round(100*n)/100,this.average_req=Math.round(100*a)/100,this.average_target=Math.round(100*o)/100,this.average_res=Math.round(100*s)/100}}};const ge=(0,s.Z)(fe,[["render",te],["__scopeId","data-v-4c988fab"]]);var pe=ge;const me=[{path:"/",name:"home",component:pe,meta:{title:"PxMart Map"}}],_e=(0,c.p7)({history:(0,c.PO)("/20220715-leaflet/"),routes:me});_e.beforeEach(((e,t,r)=>{document.title=`${e.meta.title}`,r()}));var he=_e,ve=r(669),be=r.n(ve),ye=r(346);(0,n.ri)(u).use(he).use(ye.Z,be()).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],o=e[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<s&&(s=o));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){s[e]=function(){return n[e]}}));return s["default"]=function(){return n},r.d(o,s),o}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{93:"17c4a73c",243:"55662bfe",431:"973a0e50",633:"b417695a",732:"7978aaa7",858:"8f7120fa"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="20220621-leaflet-vue:";r.l=function(n,a,o,s){if(e[n])e[n].push(a);else{var l,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[a];var f=function(t,r){l.onerror=l.onload=null,clearTimeout(g);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(r)})),t)return t(r)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/20220715-leaflet/"}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var s=r.p+r.u(t),l=new Error,i=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,a[1](l)}};r.l(s,i,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(i)var c=i(r)}for(t&&t(n);u<s.length;u++)o=s[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunk_20220621_leaflet_vue"]=self["webpackChunk_20220621_leaflet_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(209)}));n=r.O(n)})();
//# sourceMappingURL=app.347dff2a.js.map