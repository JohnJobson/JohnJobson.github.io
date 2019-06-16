//手风琴动画效果
var _index7=0;
$(".flash li").mouseover(function(){
	_index7=$(this).index();
	$(this).stop().stop().animate({width:320},500).siblings("li").stop().animate({width:176},500);
	$(".imgTop img").eq(_index7).addClass("tm").siblings(".imgTop img").removeClass("tm");
});



