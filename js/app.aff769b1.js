(function(e){function a(a){for(var n,o,d=a[0],i=a[1],f=a[2],b=0,u=[];b<d.length;b++)o=d[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(a);while(u.length)u.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],n=!0,d=1;d<t.length;d++){var i=t[d];0!==r[i]&&(n=!1)}n&&(c.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},c=[];function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=a,d=d.slice();for(var f=0;f<d.length;f++)a(d[f]);var s=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"1d74":function(e,a,t){"use strict";t("6573")},"3a08":function(e,a,t){"use strict";t("8af5")},"3c05":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),r={id:"app"},c={id:"nav"};function o(e,a,t,o,d,i){var f=Object(n["h"])("navbar"),s=Object(n["h"])("showcase"),b=Object(n["h"])("Footer");return Object(n["e"])(),Object(n["b"])("div",r,[Object(n["d"])("div",c,[Object(n["d"])(f),Object(n["d"])(s),Object(n["d"])(b)])])}var d=Object(n["i"])("data-v-f71363a0");Object(n["g"])("data-v-f71363a0");var i={id:"navbar"},f=Object(n["c"])('<div class="nav-button" data-v-f71363a0><div class="line" data-v-f71363a0></div><div class="line" data-v-f71363a0></div><div class="line" data-v-f71363a0></div></div><ul class="nav-links" data-v-f71363a0><li data-v-f71363a0><a href="#home" data-v-f71363a0>HOME</a></li><li data-v-f71363a0><a href="#about" data-v-f71363a0>ABOUT</a></li><li data-v-f71363a0><a href="#projects" data-v-f71363a0>PROJECTS</a></li><li data-v-f71363a0><a href="#contact" data-v-f71363a0>CONTACT</a></li><li data-v-f71363a0><a href="#social" data-v-f71363a0>SOCIAL</a></li></ul>',2);Object(n["f"])();var s=d((function(e,a,t,r,c,o){return Object(n["e"])(),Object(n["b"])("div",i,[f])})),b=t("1157"),u=t.n(b),v={name:"navbar"};u()("#navbar a, #about a , .btn").on("click",(function(e){if(""!==this.hash){e.preventDefault();var a=this.hash;u()("html, body").animate({scrollTop:u()(a).offset().top-80},800)}}));t("9344");v.render=s,v.__scopeId="data-v-f71363a0";var l=v,p=Object(n["i"])("data-v-b2d2eb5e");Object(n["g"])("data-v-b2d2eb5e");var O={id:"showcase"},h=Object(n["c"])('<div class="showcase-content" data-v-b2d2eb5e><div class="container" data-v-b2d2eb5e><div class="slide" data-v-b2d2eb5e><img src="assets/images/eutera.jfif" alt="eutera_logo" data-v-b2d2eb5e><h1 data-v-b2d2eb5e>EUTE<span class="eutera" data-v-b2d2eb5e>RA</span></h1><a href="https://discord.com/oauth2/authorize?client_id=772944646195511297&amp;scope=bot&amp;permissions=2129853695" class="s_btn" target="_blank" data-v-b2d2eb5e>INVITE NOW</a></div></div><input type="radio" name="r" id="r1" checked data-v-b2d2eb5e></div>',1);Object(n["f"])();var j=p((function(e,a,t,r,c,o){return Object(n["e"])(),Object(n["b"])("header",O,[h])})),m={name:"showcase",data:function(){return{sbackground:t("b2fe")}}};t("3a08");m.render=j,m.__scopeId="data-v-b2d2eb5e";var g=m,y=Object(n["i"])("data-v-36fcc9d6");Object(n["g"])("data-v-36fcc9d6");var _={id:"footer"},w=Object(n["d"])("footer",null,[Object(n["d"])("p",null,"© MORAR ANDREI - ALEXANDRU"),Object(n["d"])("p",null,"2019-2021")],-1);Object(n["f"])();var k=y((function(e,a,t,r,c,o){return Object(n["e"])(),Object(n["b"])("div",_,[w])})),T={name:"footer.vue"};t("f1c1");T.render=k,T.__scopeId="data-v-36fcc9d6";var x=T,A={name:"index",components:{navbar:l,showcase:g,Footer:x}};t("1d74");A.render=o;var P=A;Object(n["a"])(P).mount("#app")},6573:function(e,a,t){},"8af5":function(e,a,t){},9344:function(e,a,t){"use strict";t("3c05")},"975c":function(e,a,t){},b2fe:function(e,a,t){e.exports=t.p+"img/G_background.fb3de1bf.png"},f1c1:function(e,a,t){"use strict";t("975c")}});
//# sourceMappingURL=app.aff769b1.js.map