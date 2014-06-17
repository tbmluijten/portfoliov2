sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$("#slider-home > div.1").fadeIn(300);
	startSlide();
}); 

function startSlide(){
	count = $("#slider-home > div").size();

	loop = setInterval(function(){

		if(sliderNext > count){
			sliderInt = 1;
			sliderNext = 1;
		}
		$("#slider-home > div").fadeOut(500);
		$("#slider-home > div#" + sliderNext).fadeIn(500);

		sliderInt = sliderNext;
		sliderNext = sliderNext + 1
	}, 5000)
}