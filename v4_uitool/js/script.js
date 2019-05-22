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
console.log(">> ", shapeConfig.list);
  let pos = Math.floor(Math.random()*shapeConfig.list.length)
  let shapeObj = shapeConfig.list[pos];
    this.colorsArr=[];
    for (var i = 0; i < shapeObj.shapes.length; i++) {
      this.colorsArr.push(shapeObj.shapes[i].color);
      //console.log(shapeObj.shapes[i]);
    }

    this.ctx.baseColor=shapeObj.bg;
    this.ctx.globalCompositeOperation = shapeObj.blend;
  //  console.log(shapeObj.title," << this one");

    //begin by filling the background
    this.ctx.fillStyle = this.ctx.baseColor;
    this.ctx.fillRect(0,0,this.w, this.h);
    this.createShape();
  },
  createShape:function(){
    for (var j = 0; j < this.colorsArr.length; j++) {
      var nm = "n"+j;
      // console.log(this.colorsArr[j]);
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
    this.ctx.globalCompositeOperation = p[numA].blend;
    //console.log(p[numB].title," << this one");
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
  //  console.log(this);
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
