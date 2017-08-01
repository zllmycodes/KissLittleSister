//rect的构造函数
function Rect(obj){
  this.x = obj.x || 0;
  this.y = obj.y || 0;
  this.width = obj.width || 100;
  this.height = obj.height || 300;
}
//rect的动画
Rect.prototype.rectAnimate = function(fn){
  return function(){
    fn();
  };
};
//rect被点击
Rect.prototype.beClicked = function(fn){
  return function(){
    fn();
  };
};
