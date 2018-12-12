import utils from './utils';
import Shape from './shape';
// import Palette from './palette';
import shapeConfig from './shapeConfig';
//
let _App = {
  seed: 244,
  init: function(){
    var newbtn = document.getElementById('new_btn');
    newbtn.onclick=newbtn.touchstart=function(){
      _App.regenerate();
    };

    var dlbtn = document.getElementById('dl_btn');
    dlbtn.onclick=dlbtn.touchstart=function(){
      // _App.dlImage();
        _App.randomize();
    };

    utils.initSeed(this.seed);
    // console.log("iniiiit");
    this.canvas = document.getElementById('c');
    this.canvas.setAttribute("width", window.innerWidth);
    this.canvas.setAttribute("height", window.innerHeight);


    this.w = this.canvas.width;
    this.h = this.canvas.height;
    console.log(this.w);
    this.centerw = this.w/2;
    this.centerh = this.h/2;
    this.ctx = _App.canvas.getContext("2d");
    //
    // this.ctx.beginPath();
    // this.ctx.imageSmoothingEnabled = true;

    this.ctx.baseColor="rgb(86,42,54)";
    this.ctx.globalCompositeOperation = "color-dodge";
    this.colorsArr =["rgba(215,155,0, 0.01)","rgba(255,0,30, 0.01)","rgba(33,228,52, 0.008)","rgba(99,43,225, 0.006)","rgba(238,69,64, 0.006)"]

    // this.ctx.baseColor="rgb(44,44,144)";
    // this.ctx.globalCompositeOperation = "lighter";
    // this.colorsArr =["rgba(255,255,0, 0.01)","rgba(255,0,0, 0.01)"];

    // this.ctx.baseColor="rgb(44,44,44)";
    // this.ctx.globalCompositeOperation = "hard-light";
    // this.colorsArr =["rgba(0,255,0, 0.01)","rgba(0,0,230, 0.0123)","rgba(233,0,0, 0.010)"];

    // this.ctx.baseColor="rgb(222,222,222)";
    // this.ctx.globalCompositeOperation = "hard-light";
    // this.colorsArr =["rgba(0,155,122, 0.021)","rgba(113,111,130, 0.001)","rgba(99,43,210, 0.006),rgba(215,155,0, 0.01)"]

    // this.ctx.baseColor="rgb(85,40,10)";
    // this.ctx.globalCompositeOperation = "lighter";
    // this.colorsArr =["rgba(220,220,220, 0.006)","rgba(110,111,0, 0.01)","rgba(199,43,10, 0.008)","rgba(0,111,211, 0.0059)"]

    // this.ctx.baseColor="rgb(245,148,218)";
    // this.ctx.globalCompositeOperation = "darken";
    // this.colorsArr =["rgba(220,0,220, 0.026)","rgba(110,151,0, 0.01)","rgba(199,43,10, 0.008)","rgba(0,111,211, 0.0059)"]
    //
    this.ctx.baseColor="rgb(111,68,28)";
    this.ctx.globalCompositeOperation = "lighter";
    this.colorsArr =["rgba(220,0,220, 0.026)","rgba(110,151,0, 0.01)","rgba(199,43,10, 0.008)","rgba(0,111,211, 0.0059)"]

    this.ctx.baseColor="rgb(222,41,128)";
    this.ctx.globalCompositeOperation = "difference";
    this.colorsArr =["rgba(10,0,10, 0.016)","rgba(110,11,0, 0.01)","rgba(99,43,10, 0.008)","rgba(110,11,111, 0.0059)"]

    let newShape = shapeConfig.list[4];
    this.ctx.baseColor=newShape.bg;
    this.ctx.globalCompositeOperation = newShape.blend;


    //begin by filling the background
    this.ctx.fillStyle = this.ctx.baseColor;
    this.ctx.fillRect(0,0,this.w, this.h);
    this.createShape();
  },
  createShape:function(){
    // console.log("createShape");
    for (var j = 0; j < this.colorsArr.length; j++) {
      //optionally clip it into a circle
      // if(j==0){
        // this.ctx.arc(this.centerw, this.centerh, 185, 0, Math.PI * 2, true);
        // this.ctx.clip();
      // }
      var nm = "n"+j;
      const nm = new Shape(_App, this.colorsArr[j]);
      for (var k = 0; k < 20; k++) {
        for (var i = 0; i < 3; i++) {
          nm.generateLayer(i);
        }
        for (var s in nm.shapes) {
            nm.drawShape(nm.shapes[s]);
            // utils.debug(nm.baseShape, nm.color, this.ctx);
        }
      }
    }
  },
  randomize:function(){
    let p = shapeConfig.list;
    let numA = Math.floor(Math.random()*p.length);
    let numB = Math.floor(Math.random()*p.length);
    //
    this.ctx.baseColor=p[numA].bg;
    this.ctx.globalCompositeOperation = p[numB].blend;
    _App.regenerate();
  },
  regenerate: function(){
    // console.log("regenerate", this);
    this.ctx.clearRect(0,0, this.w,this.h);
    this.ctx.fillStyle=this.ctx.baseColor;
    this.ctx.fillRect(0,0,this.w, this.h);
    this.createShape();
  },
  dlImage:function(){
    console.log(this);
    // var durl = this.canvas.toDataURL('image/png');
    var t = this.canvas.toDataURL('png');
    var a = document.createElement('a');
    a.href = t;
    a.download = "image.png";
    a.click();


  }

}
document._App = _App;
_App.init();
