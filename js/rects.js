//用于保存批量生成的rect，可以随机获取一个rect
var Rects = (function(){
  //用于保存所有的rectItem
  var rectList = [],
      _create,
      _getOne;

  //批量创建rect
  _create = function(arr,fn,ani,bec){ //fn即传入的，创建rect的方法，num为一次性创建多少个rect
    rectList = [];
    if(!fn){
      return false;
    }
    var num = arr.length || 1;
    for(var i=0;i<num;i++){
      var item = arr[i];
      rectList.push(new fn(item));
    }
    rectList[0].rectAnimate(ani);
    rectList[0].beClicked(bec);
  };

  //随机获取一个rect
  _getOneRect = function(){
    var rdm = Math.floor(Math.random()*9);
    return rectList[rdm];
  };

  _init = function(canvas){
    for(var i of rectList){
      i.init(canvas);
    }
  }

  return {
    create:_create,
    init:_init,
    getOneRect:_getOneRect
  };
})();
