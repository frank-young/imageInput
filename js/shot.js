$(function(){
	/*图片从下喷出 ，但是不影响排列图片的位置*/
	function imgcreate(){
		$('.box-img>img').each(function(i){
			var src = $(this).attr('src')
			var img = '<image class="shot" src='+src+'>';
			
			$('body').append(img);

			/*图片大小位置调整 */
			var max = 130;
			var min = 60;
			var num = Math.floor(Math.random()*(max-min+1)+min);
			// 生成随机图片
			$('.shot:eq('+i+')')
				.css({
					'width': num,
					'height': num
				})

		})

			
	}

	function imgShot(){
		imgcreate();
		$('.shot')
		.delay(300)
		.each(function(i){
			var max = 10;
			var min = 50;
			var num = Math.floor(Math.random()*(max-min+1)+min);
			var left = (i*(100/$(this).length))+200;
			$(this).delay(i*100)
			.animate({
				opacity:1,
				left: left+'px',
				top: num+'%'
			},300,'easeOutQuint')
			.delay(300)
			.animate({
				top:'90%',
				opacity:0
			},600,'easeInCubic') 
			console.log(i*5)
  //       var bool = new Parabola({
		//     el: ".shot",
		//     offset: [-100,-700],
		//     // targetEl: [200,300],
		//     curvature: 0.05,
		//     duration: 1500,
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