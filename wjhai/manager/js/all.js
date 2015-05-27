jQuery(document).ready(function() {
	Main.init();
});
var Main = function() {
	var setNavigation = function() {
		$(".nav").children(".navDown").hide();
		$(".nav").click(function(){
			$(".nav").removeClass("selected").children(".navDown").slideUp();
			$(this).children(".navDown").slideToggle();
			$(this).addClass("selected");
		});
	};
	return {
		init: function() {
			setNavigation();
		}
	};
}();
