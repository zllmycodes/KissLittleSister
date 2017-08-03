window.onload = function(){
  var canvas = document.getElementById("canvas"),
      countTime,
      gameTick;
  //设置canvas的width和height并加载背景图片
  setCanvasBg("img/bg.jpg");
  //设置矩形
  setRect();

  countTime = 500;//每次调用图片的时间

  gameTick = setTimeout(function(){
    Rects.getOneRect().rectAnimate(rectAnimate);
    countTime -= 10;
  },countTime);
};

window.onresize = function(){
  var canvas = document.getElementById("canvas");
  setCanvasBg("img/bg.jpg");
  setRect();
};
//设置canvas的width和height并加载背景图片
function setCanvasBg(src){
  canvas.height = window.innerHeight;
  canvas.width = canvas.height/1.5;
  //canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
  var img = new Image();
	img.onload = function(){
		canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);
	};
	img.src = src;
}

//设置游戏时间
function setGameTime(){
  var startTime = 30000;//游戏总时长
}
