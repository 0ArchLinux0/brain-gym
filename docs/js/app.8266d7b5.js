(function(e){function t(t){for(var o,a,r=t[0],s=t[1],l=t[2],d=0,f=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],o=!0,r=1;r<i.length;r++){var s=i[r];0!==n[s]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},n={app:0},c=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=s;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"31a0":function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAOxAAADsQH1g+1JAAAMZklEQVR42u2dy68cRxXGfzPX9xVfMEjskBICEhISEgsWbGCBkJAQDyd+xHZs5yFA/AksIPwHwJ4lRgkQhw0SK5CQgC2wYIGUQF5XjoyS8JAIsec+WHRXpqamqrsep6q6Z+ZIJefe3K756nzfOV1dVX1mQpxtGT+fAKeRfek2BSZtX5P2d8cC/W4wL5rCyZmIC88YPx8Lgdqicabq9xQ4EhrsBvPcdMGehghgAuwYPx8ho/YzbTtpAZ4CM4EBbzAvY560mCfA6ZbnhVNgr71oQqP8I2TUvgNst45TeO6R7sgN5kXbZp5VVAY4mXpcOAX223+nbSeztgFcBO62Hca0e8B/gZeA84KO7MKcYrvMI1RFVG3M54BngDeA14BHOzArzk98QR0A79P+3dX+/wT4B/Hkm+0IeDzRkVs9mFNsz+j3QHNoDcyK+LctfrxmYH6gbbtok0AJUCnR7xLBNeJsq8WZk3y9SZEfitlFvOnHJ7R+D2gE4EX+1DJYF6hL7YfVFoHuyD7MoWaSLxn5IZh9iDf9+FTb71lfzHraV22v55rLzGfAkiK4keDIPsy+tk858l2YD4BvA29F+vHrvpinNEqJcWQtEawy+SnEm3683gdq0g74LPH3z6vI3w5mbb++jpRK+yXJNzGHpnpfPz7qAjVpQSgBpDjyKvKZYAZc8XDk2CP/HPA9ZInX26EN1IRmkUAJQCKKcotg1cjPTXynALaYC+Asi8uQKfY4+eYEq5L2pe7xvu27LnDbNGrcFnbkk+TLBGOP/PPkj3i9vQW83wVwh/CdQV9HPoG8CA4ZN/nQLNuWIt8Z/Qqkvil0vgV3F7gg5MgryItgrGlfWUnyndGPZbB3tAtts+9YR0qLwGtJMxFzrPlMUgcR/TZzTbwkHHkJORGkCqD2Ik8p8v8JfCBkALZOukQQ6shLwH2BgaUIoOYiT5efq0d/FzDb7SDWkY8JDCxWALUjv8/Pxe79McD0TJDqyBoCGAr5EuNPjf4JsGVz4mkP8GPgm8Bt45p38Dxl4vk5fTYN7GOfxUfdGMw226LZZ9ftPs0poZzj77N/AQ+3/5qmDp16HQmzDfhHzB8RpRyZ00qSP6Of/Kvkt+9jJ39Ks+6jzgUumW96CdpnTvic1FvAkNI+5Nk29535T2kEq1Z9rYeCQz4oZJ1At1KTwCHM9nXLsV3ue+/fotnrUecCt10+DP2wkJM7ILcW0CeAdYx8V/QrzAetX/ZwRD+RH+orglILQetK/inwnQ7M6mRw575P7Af3iUCS/C4BDC3tlyTfjH7zxPEBHju+KQBcIpAm3yWAdY58M/ptmJfOesSsAwzFzHWA0o967/Zcdxl4Frlt9j57m+a5/z8ErE1IREct05+lSy/y9JF/FXiOcuQD/IBA8m22Q7l0ldrUyyNDS/ulHvX09ibNmn/SKekzNMqpTWyoCJ42Brxu5N8BvpKA+b0B77Xt9QEQGyOCVYx834W2JPKnNI8GOzQZoPTMVUoEqW8VryX5qgN1Knif5sngIjKHNkqLIGRFUsqRuV6J632VS4J8mO8Ome+Nr5MIhrTIk0J+1EFZlQFsawJSx7eGLIK1jXy9s6519VUWwdqT72s5lnJri2Ct036MrZIINpEfaasggg35iTZmEWzS/qJFL5w9lsEhJUTwDTaRr/ftWyjUCuoqTVHC2sSGOl7tHaz8Cl+HqZXfYAFIp6MatxNVOq3Phhb5Uml/h55TwSGgJBRZSwRdj4hDI18q8lUVGHUq2HsOkLsmT44iEn3tb9ijalXTvip2ud+O2/uwSqmCTDcoJ4JXgY9a8Kxq5Ov1gveZvxlUFZTtJE+Jreh1JV+dClbl6KuC6jrGlXNOsG7km37OUiw6FZTtJE8OEYyF/Jx+9iY/tFh0CijXTFRSBGMhv3rVs5Ri0TlASYhgQ74n+RLFosVBkSaCsZBf3c+SxaLFQGkWI4KxkD+IyJcuFp0MymIhItiQH7jKl6NYdI43dnxEMBbyBxNkOYtFS5KvsHatGI6F/EFEvg4wZ7HoHG/s2ESwIT/Sz9EHA3KCsmA0Hal/KcVYyB9M2tdN6hXxGm/pXqLZ1RsD+YOLfEmr+Yr2Om3prj35tUqxucg38Ywm7UvZ0IozlEz7DwIvMj9ZtIl8IVBjIf/v2t/cjMRc08/q6+kHBWoM5/Z18vW/1Y+cDz3tq9XfKAGUjvwLNGVQ7tC8sm7aLvASZe75DwOv4BbM0ww/8qetz3Zi+itNvvkCikq3pj1I8zhYOvJt16YUqcjtZ69i0aVBudK+6+2jLhH0EZSTfCkR5PSzV7Ho0qB8Ir+ECCTITxVBbj97FYsuDSqUfB8RvOxxfS7yY0VQws9exaJ126Ns2gf4SaCTzepg+8AnafYHck34QvBd8/BHCfK9i0UrK0n+nvH/bwU62fZFVp+gPxPkiPzQTFAyw3qf9ahFvv53oSIwK4YeAA/hJrIE+X0iGNp6CrR/WHq2/xzLqSlGBGoxRsfsWrgpRb5LBIMkf4f5vaL0hO95ZERg+yIrc+m2NPmmCAZJvioW/UABUK7ZvpQIbOn2IZrNm1rk2zKVajX3UN67WBWLVhkgJ6hruLdsf8byY8oZmttEiJNt38236/id1Cpi6Jyl9gYasFws+mxmUD7P+c+zLAKpTGCzWkUqbvqAi/RzUAdmsehcoEKKS7lE8Gygk31FUKPwVa0C1wvmKhYtCWqX7rTvaubtYB84RyMO3z5m9H9Vq8L8JOOrfnZIsxgWvQ3dVSxagvzQyHdlAn3mfI7wOcENT8wlK5VIzymiSctJfkzkm+02zffh6Y9NoRPDGfCIJ+YrIxWBz7JzFpNM+672QisCfea8FSiCVz0wK9uIIIF8qci3ZQLbOoGvCF7uwWzaWEVQ4uvpi5Ov2k+JezqYAV8NIH8jggjydylT6St0nUClxtil0jEXyO6y6PUeVxSV/MYxXxF0kR/yzLxqIkguFl2TfF8RSJG/aiIQLxZd4xszVXPNCX7cEib9utYY5wT6qSfxYtE1ye8SQRfmVBurCC4iXCx6COS7RJD7Xb0nRyiC1xEsFj0k8lW7VYh81ecYRbBQLLovBdi+i149T99CrrKIhB0Dv+rA/K7AZ+yzGDkv0GzEHNUefICp28Fp3x+OKfJnuCd8Jd7VuzIAH/i2hX0f1yaQKhmr233gazQrblIFpSTsmOZgxc9Zjvz7wD2BzzAj/xR4Bzhpf55o/z10W+DcdgtQLxDqNmN85M8oQ36ucV2nIUtvah0im7mKRddY5Olr0os8NvM9vTsRHldXIarUb3V3mqtY9Nju+TWKM0gJwLcQVUpAOgdgKxb9OZo0WpvwoUa+pABCzwfGZgIreFux6I8Bbw6AcN/Ir1mZQ0IAMQc5YjLBkrmKRf9+AIQPOe1LCyD2WN51wkSwZLZi0RcGQPjQ075utQSgMF/H/3awZLZi0X+pSPZY0r5uNQRgYr6JXyZYMvNgwKcqkh0S+bXTvm6lBeDCfIn+TLBg0/aXx9rvLgg5NtXUubZVW+Rxmc/jXx/m2zRPEkl7E79m2JE/lLSvW6nHQF/MXZmg114UGMw6pH3dpBaCukQQitklgl77n9BgVnXCZzPJpWDbu4yxmM1X8g59BvNvwcGsA/m0mKV9oUSQivkRmjeiDoEva793Fot+RXgwqeQPNe0rU5gPM/jkZibMncWifys8kFWPfNWn/h1Gkr55Shhzb7HoZ4QHETvhGxP5ql0jT9l6W+GrGPMqFv0Z4QGsctq3Yc5xZNynyIUPZu9i0b8THsCqR76JOccbRCnlZIKLRX9RGPw6ka9sKCKILhYdUoxp3dO+y3JNDH2XjZOKRX8Q+LMg8Husxmw/FHMtEYgUi/448CcBwHeBz7I+kW9aLhG4Nu5EikWrg6EfIqyGv9l+Q1OKtQT5JWocx2LOIYI70pi3mT8qHLBYNfQLhB0T+yPwJQso/cSxhKlspfrNUelUCrP0CWtTAMGYJ8bFaoKgHKg2hnT7NM1TwueBj9DMFfaA12iWkf8A/AL4q9aXqkB60v58v22ppla0jtt+TxyYQy0n5svAD4EPJ/bzBvAt4JcpmCfaxapeoCJfHQdPdaSqQHra/jtD5u2WHRrBqsMbaqK5wRyAWb1yNNU6gnmaSgWlVpsUqCNk3qQ90zaFUU2KNpgDMZvvnsHi8bBYm7SDVaCgUb1E3+oMo+5ICYLWErNOPKSrUfWpMolS5Cky5+ymLK9fSwl2LTH/HxPVr9333mL1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},3500:function(e,t,i){var o={"./maintainance.jpeg":"31a0","./speed.jpeg":"e67c"};function n(e){var t=c(e);return i(t)}function c(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=c,e.exports=n,n.id="3500"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("7a23"),n={key:0,class:"relative w-full h-full",style:{"max-height":"100vh","max-width":"100vw"},ref:"content"},c={key:1,class:"relative w-full h-full overflow-hidden",style:{"max-height":"100vh","min-width":"100vw"},ref:"content"};function a(e,t,i,a,r,s){var l=Object(o["w"])("router-view");return r.mobile?(Object(o["p"])(),Object(o["d"])("div",n,[Object(o["g"])(l,{mobile:r.mobile},null,8,["mobile"])],512)):(Object(o["p"])(),Object(o["d"])("div",c,[Object(o["g"])(l,{mobile:r.mobile},null,8,["mobile"])],512))}var r={name:"App",components:{},metaInfo:{meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}]},methods:{},mounted:function(){console.log("app.vue mounted");var e="hp-ux|linux i686|linux armv7l|mac68k|macppc|macintel|sunos|win16|win32|wince";console.log(navigator.platform),navigator.platform&&(this.mobile=e.indexOf(navigator.platform.toLowerCase())<0),this.mobile=!0;var t=document.createElement("script");t.setAttribute("src","https://developers.kakao.com/sdk/js/kakao.js"),t.addEventListener("load",(function(){console.log(window.Kakao),window.Kakao.init("306dc74315e55a8ab89e3af2a60e4c47"),console.log("kako api successfully initialized: "+window.Kakao.isInitialized())})),document.head.appendChild(t)},data:function(){return{mobile:!1}}};i("58ee");r.render=a;var s=r,l=(i("a766"),i("6c02")),u=Object(o["D"])("data-v-77773477");Object(o["s"])("data-v-77773477");var d={class:"w-full h-full bg-black text-white"},f=Object(o["g"])("div",{class:"text-xl mb-2 pt-4 md:text-6xl md:pt-2 md:pb-5"}," Brain Gym ",-1);Object(o["q"])();var m=u((function(e,t,i,n,c,a){var r=Object(o["w"])("NavigationBar"),s=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",d,[Object(o["g"])(r),f,Object(o["g"])(s,{mobile:i.mobile},null,8,["mobile"])])})),g=i("fbf5"),h=i.n(g),b=Object(o["D"])("data-v-8478e0de");Object(o["s"])("data-v-8478e0de");var p={class:"flex w-full border-b py-1 items-center bg-white text-black"},v={class:"flex flex-row justify-center items-center w-full"},A={class:"flex flex-row justify-between items-center w-3/4 items-center"},w=Object(o["g"])("img",{alt:"Home Image",width:"27",height:"27",class:"mr-3",src:h.a},null,-1),j=Object(o["f"])(" Home "),O=Object(o["g"])("span",{class:"text-sm lg:text-sm"},"Improve yourself!",-1);Object(o["q"])();var y=b((function(e,t,i,n,c,a){return Object(o["p"])(),Object(o["d"])("div",p,[Object(o["g"])("div",v,[Object(o["g"])("div",A,[Object(o["g"])("button",{class:"flex ml-2 mb-2 text-base items-center",style:{"margin-top":"5px"},onClick:t[1]||(t[1]=function(){return a.toHome&&a.toHome.apply(a,arguments)})},[w,j]),O])])])})),x={name:"NavigationBarMobile",methods:{toHome:function(){this.$router.push({path:"/"})}}};i("5da0");x.render=y,x.__scopeId="data-v-8478e0de";var C=x,k={name:"HelloWorld",components:{NavigationBar:C},props:{mobile:Boolean}};i("eae2");k.render=m,k.__scopeId="data-v-77773477";var I=k,B=i("df06"),z=i.n(B),T=Object(o["D"])("data-v-51ad5f5a");Object(o["s"])("data-v-51ad5f5a");var S={class:"w-full h-full overflow-hidden"},q={class:"absolute left-2 w-full text-sm sm:left-6",style:{top:"3rem"}},Q={class:"absolute w-full",style:{top:"2rem","font-size":"3rem"}},U={style:{"font-size":"1.5rem"},class:"sm:text-lg; md:text-xl; lg:text-2xl"},H={style:{"font-size":"2rem"}},R={class:"relative text-3xl top-4 font-semibold"},N={class:"w-full text-lg font-semibold"},P={id:"countdownscene",style:{"font-size":"7rem",color:"#56ae6e"}},D={id:"card",ref:"card"},E={class:"card_face face_front"},F={class:"card_face face_back"},J={class:"absolute w-1/5 h-full text-lg",style:{top:"3rem",marginLeft:"3rem"}},M={class:"absolute w-full",style:{top:"2rem","font-size":"3rem"}},V={class:"absolute w-full",style:{top:"8rem","font-size":"2rem"}},Y={id:"countdownscene",style:{"font-size":"10rem",color:"#56ae6e"}},L={id:"card",ref:"card"},Z={class:"card_face face_front"},K={class:"card_face face_back"},W={class:"relative text-3xl font-semibold"},G={class:"absolute w-full text-lg font-semibold"},X={class:"z-100 mt-5 flex justify-center items-center w-full text-lg"},_=Object(o["f"])(" Share your reaction time! "),$=Object(o["g"])("img",{src:z.a},null,-1);Object(o["q"])();var ee=T((function(e,t,i,n,c,a){var r=Object(o["w"])("ReactionTimeScoreBoard");return Object(o["p"])(),Object(o["d"])("div",S,[i.mobile?(Object(o["p"])(),Object(o["d"])("div",{key:0,class:"relative w-full h-full flex flex-col justify-around ",style:{backgroundColor:c.bgColor,color:c.textColor,height:c.onResult?"41%":"100%"},onMousedown:t[1]||(t[1]=function(){return a.userClicked&&a.userClicked.apply(a,arguments)})},[Object(o["g"])("div",q,[Object(o["g"])(r,{mobile:i.mobile,timeRecord:c.scoreArr,onShootAvgVal:a.getAvg},null,8,["mobile","timeRecord","onShootAvgVal"])]),Object(o["g"])("div",Q,[Object(o["g"])("div",U,Object(o["y"])(c.instruction),1),Object(o["g"])("div",H,Object(o["y"])(c.testCount)+" / 5",1),Object(o["g"])("div",R,[Object(o["f"])(Object(o["y"])(c.centerMessage)+" ",1),Object(o["g"])("div",N,Object(o["y"])(c.notify),1)])]),Object(o["g"])("div",P,[Object(o["g"])("div",D,[Object(o["g"])("div",E,Object(o["y"])(c.countDownNum1),1),Object(o["g"])("div",F,Object(o["y"])(c.countDownNum2),1)],512)])],36)):(Object(o["p"])(),Object(o["d"])("div",{key:1,class:"relative flex flex-col justify-around w-full cursor-pointer",style:[{height:"60vh"},{backgroundColor:c.bgColor,color:c.textColor}],onMousedown:t[2]||(t[2]=function(){return a.userClicked&&a.userClicked.apply(a,arguments)})},[Object(o["g"])("div",J,[Object(o["g"])(r,{mobile:i.mobile,timeRecord:c.scoreArr,onShootAvgVal:a.getAvg},null,8,["mobile","timeRecord","onShootAvgVal"])]),Object(o["g"])("div",M,Object(o["y"])(c.instruction),1),Object(o["g"])("div",V,Object(o["y"])(c.testCount)+" / 5",1),Object(o["g"])("div",Y,[Object(o["g"])("div",L,[Object(o["g"])("div",Z,Object(o["y"])(c.countDownNum1),1),Object(o["g"])("div",K,Object(o["y"])(c.countDownNum2),1)],512)]),Object(o["g"])("div",W,[Object(o["f"])(Object(o["y"])(c.centerMessage)+" ",1),Object(o["g"])("div",G,Object(o["y"])(c.notify),1)])],36)),Object(o["C"])(Object(o["g"])("div",X,[_,Object(o["g"])("button",{id:"kakao_share",class:"ml-6 cursor-pointer",style:{width:"50px",height:"50px"},onClick:t[3]||(t[3]=function(){return a.kakaotalkShare&&a.kakaotalkShare.apply(a,arguments)})},[$])],512),[[o["A"],c.onResult]])])})),te=i("2909"),ie=(i("99af"),Object(o["D"])("data-v-044fafff"));Object(o["s"])("data-v-044fafff");var oe={class:"absolute flex flex-col justify-start items-start mt-20 w-full"};Object(o["q"])();var ne=ie((function(e,t,i,n,c,a){return Object(o["p"])(),Object(o["d"])("div",oe,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(i.timeRecord,(function(e,t){return Object(o["p"])(),Object(o["d"])("div",{key:"record-".concat(t)},Object(o["y"])(t+1)+Object(o["y"])(c.pre[t])+": "+Object(o["y"])(e),1)})),128)),Object(o["g"])("div",null,"avg: "+Object(o["y"])(a.avg),1)])})),ce=i("b85c"),ae=(i("b680"),{name:"ReactionTimeScoreBoard",props:{timeRecord:Object,getAvr:Object},computed:{avg:function(){var e,t=0,i=Object(ce["a"])(this.timeRecord);try{for(i.s();!(e=i.n()).done;){var o=e.value;t+=o}}catch(n){i.e(n)}finally{i.f()}return console.log("len"+this.timeRecord.length),this.$emit("shoot-avg-val",(t/this.timeRecord.length).toFixed(2)),this.timeRecord.length?(t/this.timeRecord.length).toFixed(2):0}},methods:{},mounted:function(){},data:function(){return{pre:["st","nd","rd","th","th"]}}});ae.render=ne,ae.__scopeId="data-v-044fafff";var re=ae,se={name:"ReactionTime",components:{ReactionTimeScoreBoard:re},props:{mobile:Boolean,title:String,fileName:String},computed:{},methods:{changeBgColor:function(){var e=new Date;void 0==this.start&&(this.start=e,window.requestAnimationFrame(this.startTest));var t=e-this.start;t>=1e3&&(this.bgColor=["green","red","blue","yellow","black","orange"][parseInt(100*Math.random())%6],this.start=e),window.requestAnimationFrame(this.startTest)},startTest:function(){this.randTimeUnder5s||(this.randTimeUnder5s=7*Math.random()+.2,this.timeStamp=new Date),console.log(this.randTimeUnder5s);var e=new Date;e-this.timeStamp>1e3*this.randTimeUnder5s?(this.colorChangedTimeStamp=e,this.timeStamp=null,this.bgColor="#EE1818",this.randTimeUnder5s=void 0,this.userHaveToClick=!0,console.log("end")):window.requestAnimationFrame(this.startTest)},kakaotalkShare:function(){window.Kakao.Link.sendCustom({templateId:51963,templateArgs:{avg:this.avg}})},getAvg:function(e){this.avg=e,this.onResult&&(this.centerMessage="Average reaction time is ".concat(this.avg)),console.log("Average shoot~~~!: "+this.avg)},userClicked:function(){if(console.log("clicked ~~~~"),console.log(this.testCount),this.userHaveToClick){this.reactionTime=new Date-this.colorChangedTimeStamp,this.centerMessage="".concat(this.reactionTime," ms !"),this.bgColor="#1F618D",this.textColor="white",this.notify="click again";var e=[].concat(Object(te["a"])(this.scoreArr),[this.reactionTime]);this.scoreArr=Object(te["a"])(e),this.userHaveToClick=!1,5==this.testCount&&(this.onResult=!0,this.instruction="Click to try again",this.notify="")}else{if(this.textColor="black",this.onResult=!1,this.randTimeUnder5s)return void(this.centerMessage="Too early!");""==this.countDownNum1&&(this.notify="",5==this.testCount||this.init?(this.scoreArr=[],console.log("click"),this.init=!1,this.testCount=1,this.countDownNum1=3,this.countDownNum2=2,this.$refs.card.classList.value="flip0to270",this.centerMessage="",this.instruction="Wait for pink"):this.init||(this.testCount++,this.centerMessage=this.startTest())),this.bgColor="#5DE52A"}}},mounted:function(){var e=this;this.initTimeStamp=new Date;var t=document.getElementById("card");t.addEventListener("animationiteration",(function(){console.log("animation iterating!!!!"),e.countDownNum1-=2,e.countDownNum2="Start",e.is0To270?e.$refs.card.classList.value="flip270to630":(e.$refs.card.classList.value="",e.countDownNum1="",e.countDownNum2="",e.startTest()),e.is0To270=!e.is0To270}))},data:function(){return{assetUrl:void 0,initTimeStamp:void 0,currentTimeStamp:void 0,scoreArr:[],scoreAverage:void 0,testCount:1,bgColor:"#5DE52A",onResult:!1,countDownNum1:"",userHaveToClick:!1,countDownNum2:"",reactionTime:void 0,is0To270:!0,instruction:"",centerMessage:"Click to Start Test",randTimeUnder5s:void 0,timeStamp:void 0,init:!0,notify:"",textColor:"black",avg:0}}};i("f3c4");se.render=ee,se.__scopeId="data-v-51ad5f5a";var le=se,ue={key:0,class:"flex flex-col px-2 w-full justify-between items-center"},de={key:1,class:"flex w-full h-full px-7 justify-between"};function fe(e,t,i,n,c,a){var r=Object(o["w"])("BigCategoryBox");return Object(o["p"])(),Object(o["d"])("div",null,[i.mobile?(Object(o["p"])(),Object(o["d"])("div",ue,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.infoData,(function(e){return Object(o["p"])(),Object(o["d"])(r,{key:"item-".concat(e.title),calcSize:c.calcSize,titleProp:e.title,fileName:e.fileName},null,8,["calcSize","titleProp","fileName"])})),128))])):(Object(o["p"])(),Object(o["d"])("div",de,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.infoData,(function(e){return Object(o["p"])(),Object(o["d"])(r,{key:"item-".concat(e.title),calcSize:c.calcSize,titleProp:e.title,fileName:e.fileName},null,8,["calcSize","titleProp","fileName"])})),128))]))])}var me=Object(o["D"])("data-v-355a3f9e");Object(o["s"])("data-v-355a3f9e");var ge={class:"my-2"},he={class:"mt-6 mb-5 text-lg text-black font-semibold sm:text-xl md:text-2xl sm:text-3xl lg:text-4xl "};Object(o["q"])();var be=me((function(e,t,i,n,c,a){return Object(o["p"])(),Object(o["d"])("div",ge,[Object(o["g"])("div",{class:"flex flex-col justify-start items-center bg-blue-100 rounded-md pt-5 cursor-pointer overflow-hidden",style:i.calcSize,onClick:t[2]||(t[2]=function(){return a.pushToRouter&&a.pushToRouter.apply(a,arguments)})},[void 0!==c.assetUrl?(Object(o["p"])(),Object(o["d"])("img",{key:0,src:c.assetUrl,style:c.calcImgSize,onError:t[1]||(t[1]=function(t){return a.showDefault(e.err)})},null,44,["src"])):Object(o["e"])("",!0),Object(o["g"])("div",he,Object(o["y"])(c.title),1)],4)])})),pe=(i("ac1f"),i("5319"),i("31a0")),ve={name:"BigCategoryBox",props:{titleProp:String,fileName:String,calcSize:Object},watch:{calcSize:function(e,t){console.log(e.width),e!=t&&("300px"==e.width?this.calcImgSize={width:"128px",height:"128px"}:this.calcImgSize={width:"".concat(3*e.width/5,"px"),height:"".concat(3*e.width/5,"px")},console.log(e))}},computed:{convertTitleToComponentName:function(){return console.log(this.title.replace(" ","")),this.title.replace(" ","")}},mounted:function(){this.title=this.titleProp;try{this.assetUrl=i("3500")("./".concat(this.fileName,".jpeg"))}catch(e){this.assetUrl=pe,this.title="Preparing..."}console.log(this.assetUrl)},data:function(){return{assetUrl:void 0,title:void 0,calcImgSize:{width:"128px",height:"128px"}}},methods:{showDefault:function(e){console.log(e),console.log(this.assetUrl),this.assetUrl=pe},pushToRouter:function(){this.$router.push({name:this.convertTitleToComponentName})}}};i("833b");ve.render=be,ve.__scopeId="data-v-355a3f9e";var Ae=ve,we={name:"Home",components:{BigCategoryBox:Ae},props:{title:String,fileName:String,mobile:Boolean},watch:{calcSize:function(){console.log("change")}},computed:{},methods:{pcResize:function(){window.innerWidth>1050?"300px"!==this.calcSize.width&&(this.calcSize={width:"300px",height:"250px"}):this.calcSize={width:"".concat(2*window.innerWidth/7,"px"),height:"".concat(5*window.innerWidth/21,"px")}},mobileResize:function(){console.log(window.innerWidth),window.innerWidth>380?"300px"!==this.calcSize.width&&(this.calcSize={width:"300px",height:"250px"}):this.calcSize={width:"".concat(6*window.innerWidth/7,"px"),height:"".concat(5*window.innerWidth/7,"px")}}},mounted:function(){var e=this;console.log("mounted"),this.mobile?this.callback=this.mobileResize:this.callback=this.pcResize,window.addEventListener("resize",(function(){clearTimeout(e.resizeEventId),e.resizeEventId=setTimeout(e.callback,400)})),this.callback()},data:function(){return{assetUrl:void 0,infoData:[{title:"Reaction Time",fileName:"speed"},{title:"Number Memory",fileName:""},{title:"Aim Trainer",fileName:""}],calcSize:{width:"300px",height:"250px"},resizeEventId:void 0,callback:void 0}}};we.render=fe;var je=we,Oe=[{path:"/",component:I,children:[{name:"Home",path:"/",component:je},{name:"ReactionTime",path:"/reaction-time",component:le}]}],ye=Object(l["a"])({history:Object(l["b"])(),routes:Oe}),xe=Object(o["c"])(s);xe.use(ye),xe.mount("#app")},"58ee":function(e,t,i){"use strict";i("e71b")},"5da0":function(e,t,i){"use strict";i("c34b")},7566:function(e,t,i){},"833b":function(e,t,i){"use strict";i("7566")},a766:function(e,t,i){},ae69:function(e,t,i){},c34b:function(e,t,i){},df06:function(e,t,i){e.exports=i.p+"img/kakaotalk_logo-256px.62d821bf.png"},df36:function(e,t,i){},e67c:function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAp+SURBVHic7Z1bjF5VFcd/a1qmUDNFMxi8wHRqsUgBqx0qCbwUo01RegEfrCbURvQBIdWHJqYFSjRcSogaEWJM1EBiAI2VXlTkUhl5AOxFW4zWW2FqIlVpTW3DtEMvy4d9vvFz+n3zncvaZ5/znfNP1st856y1Zv//Z+999uVsUVVqVBc9oROoERa1ACqOWgAVRy2AiqMWQAEhIv25xarfAsJCRM4ClgBXAEOR9QOHgF2R7QS2quoJ8/i1AMJBROYBDwMfiHH5bmCVqu6xzKFuAgJARKaKyHpgB/HIJ7puh4isF5GpZrnUNUD+EJFNwLIMLjar6nKLXOoaIGeIyEqykQ+wLPKTPZ8q1wAiMh1YCMzBdbr+AQz76GxF8d4F/B54q4G7w8ClqvpaJi+qWjkD3gY8AhwHdIL9HbgN6PMQd3OLeFlsc9acKlcDiMhC4AfAuztcOgJ8RlWfN4o7HTgCTLHwF+EUMENVR9M6qFQfQEQWA7+gM/kAg8BzInK/iEwzCD8PW/KJ/M3L4qAyAojI3wQkIbMHWIN7/cpU0LgBHh/I5LcSAkhJfjMuB7aLyJdFJG2Z+RLAFVlujjWgICI3ASuA2diJ5ghuIOQrqvo3I59nwID8BnqBDcASEVmpqq8kvL8vY/x2eEumu2P0XB/Etuc60Q4DF3nq7S+mdU8/qx0FPpcwl7Weym9tpjLqkPR8z+Q3bEuJyG+2rcD5MfNZ5CmHRT4FcGtOAjhYQvIb9jpwQ4yc+j3F789SVp3a8zc6/G4FsziGbX5cnAdsFJGHRWRGu4tU9RBgOpMH7In8pkcH1c4ERvH/FD1Uwie/lX21Q35XAieNYp0ErsxcZjEKdSUw5rHQfo3BsGtg8v8FLI+Z531GMe+zeGhiDQWLyFzgevy8Bj6mqiezOApQ7TdjK/B5Vf1nnIujUcXfApdkiLkX+KCqjmXw4WChopBG2Cd/TcqcB4BnU8Z8FhgwK7/QBJaY/C9mzF2Am3FjCnHiHY2uF9MyDE1iSclfbfh/zAIeAF7gzA73aPT3B4BZPsqxlNPBntr813DrBM7pcN1qVf1WHIfR8u7lwMW4mbsDwDZgt7YoeBGZgusbXAz8Cdirqqdi/wdpEPpJLsiTP4Kb/p2Le1dvd92tMXM8G3gIONHGzw5gQeiyVC1ZE+CT/KYY04Bvtrjulpg5zuwgooadAm4MXqahEygS+RPifQz3fn8a+ELMHAcjn3HjnwQ+HrJcRVURkQHgTmAB0HY4MyFOA/uAx1X1e1kceWrz9wMLVXVkkrjvAK5W1Y2dnInIIDCMqwGS4C/AJeq7rZ8EF+GmZC2frIn2YFme/JQ5DpLsyZ9onwxYs7LFM/kNm58iufkVIF+B+0MJoAe4inyQKE60afL75FztJ0GGan8i5mTNJS16KO6U7xoyrnidgKKSD3CugY9U6AF+mkOcY8AvE97zacP4RSY/OPqA7fhr+8eAlQnb1enYzZuPULw2f6INh+oDTFXVoyJyFfAp/LwGPqGqf0h47/uw2URRP/kdUMi5gGgM/WBGN2Ui/1equtCD344o5MYQdevcRjK4KBP5QVFIAUR4JuV9NfkJUGQBrMMtuU6CmvyEKKwAVPUgsDrBLSPU5CdGYQUAoKqPA0txH22YDI8AQzX5yVFoAQCo6lbgUtxy6hdxg0rgqvuNwGJVXaWq/7aIVyXyIeZrYJF2B0fLpvpU9bBRHs2+BwlDfrDXwDgjX6XdHVyAEb7CjwRO+jSLyHzglthqSodzga97jjEpqlbtN6PTByIKOVVsiYKQf3aUhw+MqeqBdj92EkBRp4pNUBDywW0afdWXcxE5iPvg9JO4jbj/W37WoV2cSYl2B5eozQ9p23EfmHTlEKOgSrE7uCY/kb1B1PHuit3BSeCp2h8FvgbcYejTN54HFhZyOtgXPJK/BLf+4TlDv3ngxsKPBFrBJ/mqmnS5W1FwTSUEUJPfFgu6XgA5kh/kVTYjBru6D5Dnky8i5+A6tmbHueSAF7q2BhCR88mx2lfVY7jDIMqEHV0rANz+/Lzb/J8YxssDTwSZgcphoOcG7AdOPhwjbi/wO+PYvuw7sUYCy2i47+rkSn5T7CHgPwUgeDLbSzT62nVNQLRgJO5ZfJ2Q+FVPVXcBlwFPGeVgidPAN3A7tY9CQTeGZIGIXIarhrPiTeDaJOS3yOVa4GrcoQ5zCLMEbwx4GTcb+JSq7m7+sUyvLHFx1MhPL/Ahkm9qHYeqPombgi0suq4GgPH5b6sTuNeq6gYjX4VD1/UBIrxo6OteEVlr6K9QKGUNICIzVPXIJL+/H9fmnWUYdp2q3mvorxAoXQ0gIhcAO0VkVrtrVPVl3AFPlrhHRNYZ+wyOUgkgIn8YeC9wU4fL78IdEmmJu7tNBKVpAprInx396QDus+ltVxNF3+bfhPvUnCVuV9W7jX0GQSlqgBbkA7wTWDXZfeoOVFiOfU1wl4jcZuwzDEIP28YYWr0A+CuthzRHgctj+JgG/LyNjyx2e+jyyVy+oRPIQH7D/ow7QbsWQTcJICb5DdsMTK1F0CUCSEh+w36UQAQ/8yCCO0KXW1cIICX5DfshMKUWQUkFAFyYgfyGPRZYBOtDl2MpBWBEfsMejSmCXtyncisrguAJNJG/z5iE78aM7UsEd4Yu11IIwBP5SZdx9eJOAK2cCCpPfg4iWBGa5Mks2FyAiFyIG959j6HbY8B1mnIZl4j04r48dp1hTq8Dc9V997BwCDIXUETyAVT1TeATuJrACm8H7jH0Z4rca4Cikt+MqCb4MW7btwX2q+qgkS9T5CqAMpDfgAcRnKfuK+iFQm5NgEfyvWzRjpqDL+GWh1tgppEfU+QigOhgymH8kL/N0Oc4ojUIT+PeDrLiFPBHAz/m8L4voIn8tmv4UiAP8of5/wUoWbBXVUeNfJnCaw1Qkz+ORw19mcJbJ7Amfxx7cEfFnzD0aQYvNUBJyW90Ui3JHwM+W1TywUMfwCP5S3Mg37KTOgYsV9XfGPq0h/HY/gDwCrZj6aPAR0o2H3Ecd5BF8LH+jv9/TX51yTcTQE1+Ock3EUBJyR+oyTcQAG54s4zkW+dcSvIzCSAi/9Wa/PKSn1oAnsg/Bny0Jr/gAqjJ7x7yEwugJr+7yE8kgJKS7yPnriE/tgBq8ruT/FgCqMnvXvI7CsAj+Ytq8othNfkVJl+1zcYQEekDdmM7PXocWKaqTxv6HIennBtTutbfGCoM2i0I2UCJyI9gnXPXkw+c2QTgvm59mpJU+55y7upqv9la1QArAMkuLSCfJx9sc67Gkx+hlQCGjHznRT7Y5Vwp8qHFqmAROQL0ZfR7HFeQuZyaYZRz5ciH1jXA/ow+cyU/QtacK0k+tBbAzgz+QpAP2XKuLPnQWgDPpPQVinxIn3OlyYfWfQABtgHXJPATkvy0OVeefGizNUxEZuNOmpoew0dQ8htIkfP1VScf2owEquo+YAHwUof7XwKGQpMPqXKuPPnQYXOoiPQANwNLce/a/cAhYBewBfi2qp7OIc/YKGPOIZFod7CI9GsBP3MyGcqYc54ozZExNfygFEfG1PCHWgAVRy2AiqMWQMXxXzu2cpIZAKdXAAAAAElFTkSuQmCC"},e71b:function(e,t,i){},eae2:function(e,t,i){"use strict";i("df36")},f3c4:function(e,t,i){"use strict";i("ae69")},fbf5:function(e,t,i){e.exports=i.p+"img/home.4e90f979.png"}});
//# sourceMappingURL=app.8266d7b5.js.map