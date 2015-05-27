// wjh
var left_btn_w = 50; // 左侧按钮宽度 
var left_nav_w = 205; // 左侧显示菜单的宽度
var left_nav_is = true; //左侧显示菜单是否显示

$(document).ready(function() {
	nav_init();
	// 点击左侧栏上的按钮后，让左侧栏隐藏/显示
	$('.show_btn').bind('click',function(){
		if (left_nav_is) {
			// 隐藏菜单列表
			$("#mymenu ul").hide();
			//让顶部栏到左边距为左侧栏上按钮的宽度
			$(".navbar").stop().animate({"margin-left": left_btn_w+"px"},500);
			//让左侧栏的宽度缩小到只显示按钮的宽度
			$(".left_bar").stop().animate({"width": left_btn_w + "px"},500);
			//让主显示区域到左侧的间距为左侧栏上按钮的宽度
			$(".main").stop().animate({"margin-left": left_btn_w + "px"},500);
//			$(".show_tip").fadeOut(100);
			$(".show_tip").css({"top":"50px","left":"16px","width":"20px"});
			//将左侧栏菜单的显示状态设置为否
			left_nav_is = false;
		} else {
			//让顶部栏到左边距为左侧栏上按钮的宽度加上左侧栏菜单的宽度
			$(".navbar").stop().animate({"margin-left": left_btn_w + left_nav_w + "px"	},500);
			//让左侧栏的宽度缩小到按钮的宽度加上左侧栏菜单的宽度
			$(".left_bar").stop().animate({"width":  left_btn_w + left_nav_w + "px"},500,function(){
				// 显示菜单列表
				$("#mymenu ul").show()
			});
			//让主显示区域到左侧的间距为左侧栏上按钮的宽度加上左侧栏菜单的宽度
			$(".main").stop().animate({"margin-left":  left_btn_w + left_nav_w + "px"},500);
			$(".show_tip").show(100);
			$(".show_tip").css({"top":"18px","left":"60px","width":"auto"});
			//将左侧栏菜单的显示状态设置为是
			left_nav_is = true;
		}
	})
	
	
	//hxf滚动条侦测
//	var h = $(window).height();
//	$("section").css({"height":h+"px"});
});
/*
 * 如果网页发生缩放时，则调用nav_init()方法初始化
 * 		by wjhai
 */
//将窗口尺寸发生变化时调用 nav_init
window.onresize = nav_init;
/*
 *  导航条效果
 * 		By wjhai
 * */
function nav_init() {
	//获取屏幕的宽度
	window_width = $(window).width();
	//如果屏幕的宽度小于768 且左侧菜单栏存在则去除左侧菜单栏，菜单变成手机状态
	if (window_width < 768 && $(".left_bar").length != 0) {
		//移除菜单上的left_bar类
		$("#mymenu").removeClass("left_bar");
		//将菜单的宽度设置为100%，解决手机状态菜单logo下边框变小问题
		$("#mymenu").css({"width":"100%"});
		//让顶部状态栏满屏幕
		$(".navbar").css({"margin-left": "0px"});
		//让主区域满屏幕
		$(".main").css({"margin-left":   "0px"});
		//隐藏左侧按钮
		$(".show_btn").hide();
//		$(".show_tip").hide();
		//如果菜单没显示则让其显示出来，不然手机状态下没有菜单（被隐藏掉了）
		if (!left_nav_is) {	$("#mymenu ul").show();	}
		left_nav_is = true;
	}
	//如果屏幕的宽度大于768 且左侧菜单栏不存在 
	if (window_width >= 768 && $(".left_bar").length == 0 ) {
		//为菜单添加左侧菜单栏的效果
		$("#mymenu").addClass("left_bar");
		$(".left_bar").css({"width": left_btn_w + left_nav_w + "px"});
		if (left_nav_is) {
			$(".navbar").css({"margin-left": left_btn_w + left_nav_w + "px"	});
			$(".main").css({"margin-left":  left_btn_w + left_nav_w + "px"});
//			$(".show_tip").hide();
		} else {
			$(".navbar").css({"margin-left": left_btn_w + "px"});
			$(".main").css({"margin-left":  left_btn_w  + "px"});
		}
		$(".show_btn").show();
	}
}
