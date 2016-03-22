//鼠标是否按下
var clicked = 0;
var cmouse = new Object();
cmouse.x = 0;
cmouse.y = 0;
var mosaic_block = $('<div style="width: 2px;height: 2px; background-color: rgba(20,20,20,0.9);display: none;position: absolute;"></div>');
mosaic_block.css({"width":2,"height":2,"position":"absolute"});
mosaic_block.appendTo('body');

$(function(){
	$(document).mousedown(function(e){
		if(e.altKey){
			e.stopPropagation();
			clicked = 1;
			console.log("mouse clicked");
			cmouse.x = e.pageX;//e.offset().left;
			cmouse.y = e.pageY;//e.offset().top;
			mosaic_block.css({"width":0,"height":0});
			mosaic_block.css({"left":cmouse.x,"top":cmouse.y});
			mosaic_block.css({"display":"block"});
		}
	});
	
	$(document).mousemove(function (e) {
		if(clicked == 1){
			e.stopPropagation();
			console.log("mouse move");
			//获取当前鼠标位置
			var cX = e.pageX;//e.clientX;
			var cY = e.pageY;//e.clientY;
			
			//计算当前位置和点击位置的差
			var bW = cX - cmouse.x;
			var bH = cY - cmouse.y;
			
			if(bW > 0){//当鼠标向右移动时
				mosaic_block.css({"width":bW});
			}else if(bW < 0){//当鼠标向左移动时
				mosaic_block.css({"width":-bW});
				mosaic_block.css({"left":cX});
			}
						
			if(bH > 0){//当鼠标向下移动时
				mosaic_block.css({"height":bH});
			}else if (bH < 0) {//当鼠标向上移动时
				mosaic_block.css({"height":-bH});
				mosaic_block.css({"top":cY});
			}
		}
	})

	$(document).mouseup(function (e) {
		if(clicked == 1){
			e.stopPropagation();
			console.log("mouse up");
			clicked = 0;
		}
	});
	
	//当点击到马赛克的时候可以移动马赛克
	mosaic_block.onclick = function (e) {
		var mX = e.pageX;
		var mY = e.pageY;
		//ToDo...
	}
});
