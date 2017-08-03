
  //rect的构造函数
  function Rect(obj){
    this.x = obj.x || 0;
    this.y = obj.y || 0;
    this.width = obj.width || 100;
    this.height = obj.height || 300;
    this.picSrc = "";
  }
  //随机获取一个图片
  Rect.prototype.getOnePic = function(){
    var pics = ["img/1b.png","img/2b.png","img/3b.png"];
    var rdm = Math.floor(Math.random()*3);
    return pics[rdm];
  };
  //在canvas中绘制rect
  Rect.prototype.init = function(canvas){
    var self = this,
        ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = 'destination-over';
    ctx.strokeStyle = "#333";
    ctx.strokeRect(self.x,self.y,self.width,self.height);
  };
  //rect的动画
  Rect.prototype.rectAnimate = function(fn){
    var self = this;
    return function(){
      fn(self);
    };
  };
  //rect被点击
  Rect.prototype.beClicked = function(fn){
    return function(){
      fn();
    };
  };
