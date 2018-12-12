!function(t){function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var o={};n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([function(t,n,o){"use strict";var e=0,a=0;n.createNewPoint=function(t,n,o){var e={},r=(t.x+n.x)/2,i=(t.y+n.y)/2,s=this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()+this.getRandom()-1;for(s*=Math.min(Math.pow(s,s),3.5*s),s*=2;a<100;)console.log(s),a++;var c=s*(2*Math.PI),l=r+s*Math.cos(c),g=i+s*Math.sin(c);return e.x=l,e.y=g,e},n.debug=function(t,n,o){n="white",o.save(),t.forEach(function(t,e){o.globalCompositeOperation="source-over",o.strokeStyle=n,o.beginPath(),o.arc(t.x,t.y,2,0,2*Math.PI),o.stroke()}),o.restore()},n.getRandom=function(){return Math.random()},n.initSeed=function(t){(e=t%2147483647)<=0&&(e+=2147483646)}},function(t,n,o){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var a=o(0),r=e(a),i=o(2),s=e(i),c=o(3),l=e(c),g={seed:244,init:function(){var t=document.getElementById("new_btn");t.onclick=t.touchstart=function(){g.regenerate()};var n=document.getElementById("dl_btn");n.onclick=n.touchstart=function(){g.randomize()},r.default.initSeed(this.seed),this.canvas=document.getElementById("c"),this.canvas.setAttribute("width",window.innerWidth),this.canvas.setAttribute("height",window.innerHeight),this.w=this.canvas.width,this.h=this.canvas.height,console.log(this.w),this.centerw=this.w/2,this.centerh=this.h/2,this.ctx=g.canvas.getContext("2d"),this.ctx.baseColor="rgb(86,42,54)",this.ctx.globalCompositeOperation="color-dodge",this.colorsArr=["rgba(215,155,0, 0.01)","rgba(255,0,30, 0.01)","rgba(33,228,52, 0.008)","rgba(99,43,225, 0.006)","rgba(238,69,64, 0.006)"],this.ctx.baseColor="rgb(111,68,28)",this.ctx.globalCompositeOperation="lighter",this.colorsArr=["rgba(220,0,220, 0.026)","rgba(110,151,0, 0.01)","rgba(199,43,10, 0.008)","rgba(0,111,211, 0.0059)"],this.ctx.baseColor="rgb(222,41,128)",this.ctx.globalCompositeOperation="difference",this.colorsArr=["rgba(10,0,10, 0.016)","rgba(110,11,0, 0.01)","rgba(99,43,10, 0.008)","rgba(110,11,111, 0.0059)"];var o=l.default.list[4];this.ctx.baseColor=o.bg,this.ctx.globalCompositeOperation=o.blend,this.ctx.fillStyle=this.ctx.baseColor,this.ctx.fillRect(0,0,this.w,this.h),this.createShape()},createShape:function(){for(var t=0;t<this.colorsArr.length;t++)for(var n="n"+t,n=new s.default(g,this.colorsArr[t]),o=0;o<20;o++){for(var e=0;e<3;e++)n.generateLayer(e);for(var a in n.shapes)n.drawShape(n.shapes[a])}},randomize:function(){var t=l.default.list,n=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);this.ctx.baseColor=t[n].bg,this.ctx.globalCompositeOperation=t[o].blend,g.regenerate()},regenerate:function(){this.ctx.clearRect(0,0,this.w,this.h),this.ctx.fillStyle=this.ctx.baseColor,this.ctx.fillRect(0,0,this.w,this.h),this.createShape()},dlImage:function(){console.log(this);var t=this.canvas.toDataURL("png"),n=document.createElement("a");n.href=t,n.download="image.png",n.click()}};document._App=g,g.init()},function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t){for(var n=0;n<4;n++)t.subdivisions++,t.shapes["shapeArr_"+t.subdivisions]=t.subDivide(t.shapes["shapeArr_"+n],n);t.baseShape=t.shapes["shapeArr_"+t.subdivisions].slice(),t.shapes={},t.subdivisions=0}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,o,e){return o&&t(n.prototype,o),e&&t(n,e),n}}(),i=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(i),c=function(){function t(n,o){e(this,t),this.subdivisions=0,this.totalPoints=0,this.app=n,this.color=o,this.shapes={shapeArr_0:[]},this.createStartingPoints(),a(this)}return r(t,[{key:"createStartingPoints",value:function(){for(var t=0,n=.25*this.app.w,o=2*Math.PI/9,e=0;e<9;e++){var a=this.app.centerw+Math.cos(t)*n*s.default.getRandom(),r=this.app.centerh+Math.sin(t)*n;t+=o,this.shapes.shapeArr_0.push({x:a,y:r})}}},{key:"subDivide",value:function(t){for(var n=t.slice(),o=[],e=0;e<n.length;e++)if(0==e)o.push(n[e]);else{var a=s.default.createNewPoint(n[e],n[e-1]);o.push(a),o.push(t[e])}var a=s.default.createNewPoint(t[t.length-1],t[0],1);return o.push(a),o}},{key:"generateLayer",value:function(t){for(var n=this.baseShape.slice(),o=0;o<3;o++)n=this.subDivide(n);this.shapes["shapeArr_"+t]=n.slice()}},{key:"drawShape",value:function(t){this.app.ctx.fillStyle=this.color,this.app.ctx.beginPath(),this.app.ctx.moveTo(t[0].x,t[0].y);for(var n=1;n<t.length;n++){var o=t[n];this.app.ctx.lineTo(o.x,o.y)}this.app.ctx.fill()}}]),t}();n.default=c},function(t,n){t.exports={list:[{bg:"rgb(44,44,44)",blend:"screen",scale:11,shapes:[{name:"sky",color:"rgba(0,215,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"ground",color:"rgba(0,0,230, 0.0123)",type:{ngon:!0,pointcount:9}},{name:"heart",color:"rgba(233,0,0, 0.010)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(46,32,22)",blend:"color-dodge",scale:11,shapes:[{name:"a",color:"rgba(215,155,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(255,0,30, 0.0123)",type:{ngon:!0,pointcount:9}},{name:"c",color:"rgba(33,228,52, 0.008)",type:{ngon:!0,pointcount:9}},{name:"d",color:"rgba(99,43,225, 0.006)",type:{ngon:!0,pointcount:9}},{name:"e",color:"rgba(238,69,64, 0.006)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(56,55,54)",blend:"color-dodge",scale:12,shapes:[{name:"a",color:"rgba(0,155,222, 0.01)",type:{ngon:!1,pointcount:6},points:[{x:420,y:120},{x:300,y:300},{x:600,y:400},{x:0,y:50}]},{name:"b",color:"rgba(113,211,130, 0.008)",type:{ngon:!1},points:[{x:220,y:120},{x:700,y:300},{x:600,y:400},{x:0,y:100}]},{name:"c",color:"rgba(99,13,210, 0.03)",type:{ngon:!1},points:[{x:220,y:120},{x:700,y:300},{x:600,y:400},{x:0,y:100}]},{name:"d",color:"rgba(110,55,110, 0.009)",type:{ngon:!1},points:[{x:220,y:120},{x:700,y:300},{x:600,y:400},{x:0,y:100}]}]},{bg:"rgb(255,144,10)",blend:"color-burn",scale:11,points:[{x:220,y:120},{x:700,y:300},{x:600,y:400},{x:0,y:100}]},{bg:"rgb(11,11,11)",blend:"lighter",scale:11,shapes:[{name:"a",color:"rgba(200,200,0, 0.01)",type:{ngon:!1,pointcount:9},points:[{x:220,y:120},{x:700,y:300},{x:600,y:400},{x:0,y:100}]},{name:"b",color:"rgba(200,0,0, 0.01)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(235,30,10)",blend:"lighter",scale:11,shapes:[{name:"a",color:"rgba(220,220,220, 0.006)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(110,111,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"c",color:"rgba(199,43,10, 0.008)",type:{ngon:!0,pointcount:9}},{name:"d",color:"rgba(0,111,211, 0.0059)",type:{ngon:!0,pointcount:9}}]},{list:[{bg:"rgb(44,44,44)",blend:"screen",scale:11,shapes:[{name:"sky",color:"rgba(0,215,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"ground",color:"rgba(0,0,230, 0.0123)",type:{ngon:!0,pointcount:9}},{name:"heart",color:"rgba(233,0,0, 0.010)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(46,32,22)",blend:"color-dodge",scale:11,shapes:[{name:"a",color:"rgba(215,155,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(255,0,30, 0.0123)",type:{ngon:!0,pointcount:9}},{name:"c",color:"rgba(33,228,52, 0.008)",type:{ngon:!0,pointcount:9}},{name:"d",color:"rgba(99,43,225, 0.006)",type:{ngon:!0,pointcount:9}},{name:"e",color:"rgba(238,69,64, 0.006)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(66,55,44)",blend:"color-dodge",scale:11,shapes:[{name:"a",color:"rgba(0,155,122, 0.021)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(113,111,130, 0.001)",type:{ngon:!0,pointcount:9}},{name:"c",color:"rgba(99,43,210, 0.006)",type:{ngon:!0,pointcount:9}},{name:"d",color:"rgba(215,155,0, 0.01)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(255,144,10)",blend:"color-burn",scale:11,shapes:[{name:"a",color:"rgba(10,10,0, 0.006)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(0,111,0, 0.0106)",type:{ngon:!0,pointcount:9}},{name:"c",color:"rgba(99,43,0, 0.008)",type:{ngon:!0,pointcount:9}},{name:"d",color:"rgba(0,111,111, 0.0069)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(11,11,11)",blend:"lighter",scale:11,shapes:[{name:"a",color:"rgba(200,200,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(200,0,0, 0.01)",type:{ngon:!0,pointcount:9}}]},{bg:"rgb(111,68,28)",blend:"lighter",scale:11,shapes:[{name:"a",color:"rgba(220,0,220, 0.026)",type:{ngon:!0,pointcount:9}},{name:"b",color:"rgba(110,151,0, 0.01)",type:{ngon:!0,pointcount:9}},{name:"c",color:"rgba(199,43,10, 0.008)",type:{ngon:!0,pointcount:9}},{name:"d",color:"rgba(0,111,211, 0.0059)",type:{ngon:!0,pointcount:9}}]}]}]}}]);