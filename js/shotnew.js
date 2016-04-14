$(function(){
	/*图片从下喷出 ，但是不影响排列图片的位置*/
	function imgcreate(){

		$('.box-img>img').each(function(i){
			var src = $(this).attr('src')
			var img = '<image class="shot" src='+src+'>';
			
			$('.shot-box').append(img);

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
	function demo(ele,x,y,a,t) {
		var f=ele;
		var Vx=parseInt(x),
		Vy=parseInt(y),
		g=a,
		t=parseInt(t),

		h=0,l=0,Sx=0,Sy=0;

		var i=setInterval(function(){
			if(f){
				Sx+=Vx*t;
				l=Sx;
				Vy+=g*t;
				h+=Vy*t;
					f.style.left =l+'px';
					f.style.top = h+'px';
				
				if(h>200){
					clearInterval(i);
				}
			}

		},25);
	}
	function imgShot(){
		imgcreate();
		var r = Math.random;
		var x ;
		$('.shot')
		.each(function(index,value){
			$(this).delay(500).animate({opacity:1},100)
   			if(r()*10>5){
				x=r()*2.2;
			}else{
				x= -r()*2.2;
			}
				demo(value,x,-4*r()-2,0.013,10)
		})
	}

	// $('.test').click(function(){
setTimeout(function(){
imgShot();
}, 200)
		
	// })
	

})