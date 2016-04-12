$(function(){
	/*图片从下喷出 ，但是不影响排列图片的位置*/
	function imgcreate(){
		$('.box-img>img').each(function(){
			var src = $(this).attr('src')
			var img = '<image class="shot" src='+src+'>';
			$('body').append(img);
		})
	}
	function imgShot(){
		imgcreate();
		$('.shot')
		.delay(300)
		.each(function(i){
			var x = (i*120)+120;
			$(this).delay(i*100)
			.animate({
				opacity:1,
				left: x,
				top:'10%'
			},300,'easeOutQuint')
			.delay(300)
			.animate({
				top:'90%',
				opacity:0
			},600,'easeInCubic') 
  //       var bool = new Parabola({
		//     el: ".shot",
		//     offset: [-i*50,-i*50],
		//     // targetEl: [200,200],
		//     curvature: 0.001,
		//     duration: 500,
		//     callback: function () {
		//        $(".shot")
		// 		.delay(300)
		// 		.animate({
		// 			top:'90%',
		// 			opacity:0
		// 		},600,'easeInCubic')   /*easeOutBounce*/
		// 	}
		// });
		// bool.start();    
		})
	}
	imgShot();

})