//设置矩形位置和长宽及动画方法和被点击方法
function setRect(){

  //生成9个矩形，对应9个坑
  Rects.create([
    {x:canvas.width/16,y:canvas.height*3/8,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width*19/48,y:canvas.height*3/8,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width*17/24,y:canvas.height*3/8,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width/16,y:canvas.height*13/24,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width*19/48,y:canvas.height*13/24,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width*17/24,y:canvas.height*13/24,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width/16,y:canvas.height*17/24,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width*19/48,y:canvas.height*17/24,width:canvas.width/4,height:canvas.height/6},
    {x:canvas.width*17/24,y:canvas.height*17/24,width:canvas.width/4,height:canvas.height/6}
  ],Rect,rectAnimate,beClicked);
  Rects.init(canvas);
}

//env即调用本函数的对象本身，pic即需要在矩形中渲染的图片路径
function rectAnimate(env){
  var pic = env.getOnePic(),
      animateTick,
      img = new Image(),
      canvas = document.getElementById("canvas");
  img.x = env.x;
  img.y = env.y - env.height;
  img.width = env.width;
  img.height = 0;
  img.onload = function(){
    imgAnimate(this,env,canvas);
  };
  img.src = pic;
}

var isUp = true;
function imgAnimate(img,env,canvas){
  if(img.height < env.height && isUp){
    img.height += env.height/10;
    img.y += env.height/10;
    canvas.getContext("2d").drawImage(img.x,img.y,img.width,img.height);
    setTimeout(arguments.caller,30);
  }
  if(img.height >= env.height){
    isUp = false;
  }
  if(img.height > 0 && !isUp){
    img.height -= env.height/10;
    img.y -= env.height/10;
    canvas.getContext("2d").drawImage(img.x,img.y,img.width,img.height);
    setTimeout(arguments.caller,30);
  }
  if(img.height <= 0){

  }

}

function beClicked(){

}
