$(function(){
var $device=$('.device');
var $offset=300;
var $deviceOST=$device.offset().top-$offset;

$(window).scroll(function(){
	if($(this).scrollTop()>$deviceOST){
		$device.find('img').addClass('animate');
	}
});
});
//https://www.youtube.com/watch?v=4StroTzAFCI
