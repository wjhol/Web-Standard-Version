$(document).ready(function() {
	$('.togglebox').hide();
//	$('.imgBtn').click(function() {
	$('.docs p').click(function() {
		//$(this).toggleClass("active"); //return false;
		var t = $(this);
		t.children(".imgBtn").addClass("rimg");
		// toggle hidden div
//		t.parent().next().toggle('fast', function() {
		t.next(".togglebox").toggle('fast', function() {
			// determine which image to use if hidden div is hidden after the toggling is done
			//   var icon = ($(this).is(':hidden')) ? 'glyphicon-minus-sign' : 'glyphicon-plus-sign';
			if ($(this).is(':hidden')) { // 如果隐藏
				t.children(".imgBtn").removeClass("rimg").removeClass("fa-minus-circle").addClass("fa-plus-circle");
			} else {
				t.children(".imgBtn").removeClass("rimg").removeClass(" fa-plus-circle").addClass("fa-minus-circle");
			}
		});
	})
		
	//导航小箭头上下翻滚切换
	var w1 = $(".navbar-right").width();
	$(".user").css("width",w1+'px');
	$(".navbar-right").click(function(){
		$(".arrow").toggleClass("arrowHover");
	});

})

/*!
 * 右侧导航JS效果 ；
 */
! function(a) {
	a(function() {
		var b = a(window),c = a(document.body);
		c.scrollspy({
				target: ".bs-docs-sidebar"
			}), b.on("load", function() {
				c.scrollspy("refresh")
			}), a(".bs-docs-container [href=#]").click(function(a) {
				a.preventDefault()
			}), setTimeout(function() {
				var b = a(".bs-docs-sidebar");
				b.affix({
					offset: {
						top: function() {
							var c = b.offset().top,
								d = parseInt(b.children(0).css("margin-top"), 10),
								e = a(".bs-docs-nav").height();
							return this.top = c - e - d
						},
						bottom: function() {
							return this.bottom = a(".bs-docs-footer").outerHeight(!0)
						}
					}
				})
			}, 100)
	})
}(jQuery);