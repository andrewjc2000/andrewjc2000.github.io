
var Style = {
	widthToScale: function(scale){
		return $(window).width() * scale;
	},
	heightToScale: function(scale){
		return $(window).height() * scale;
	},
	isWide: function(){
		return ($(window).height() + 350 < $(window).width());
	},
	loadHeader: function(){
		$("#header").css("width", Style.widthToScale(1));
		var textHeight = (Style.isWide()) ? Style.heightToScale(.08) : Style.widthToScale(.05);
		$("#header p").css("font-size", textHeight);
		$("#header p").css("margin", Style.heightToScale(.01));
	},
	loadNavbar: function(){
		var textHeight = (Style.isWide()) ? Style.heightToScale(.08) : Style.widthToScale(.05);
		$("#navbar").css("width", Style.widthToScale(1));
		$("#navbar").css("top", textHeight + Style.heightToScale(.02));
		$("#navbar").css("height", Style.heightToScale(.05));
	}
};
