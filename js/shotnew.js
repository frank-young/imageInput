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

				// t :是每一次运动的间隔时间
				Sx  += Vx*t;   // Sx: x轴的速度 * 时间,距离左边的距离
				Vy +=g*t;	//  Vy: 重力 * 时间
				Sy+=Vy*t;	//  y轴的速度 * 时间
				
					f.style.left =Sx+'px';
					f.style.top = Sy+'px';
				
				if(h>200){
					clearInterval(i);
				}
			}

		},20);
	}
	function imgShot(){
		imgcreate();
		var r = Math.random;
		var x ;
		$('.shot')
		.each(function(index,value){

   			if(r()*10>5){
				x=r()*2;
			}else{
				x= -r()*2;
			}
				demo(value,x,-4*r()-2,0.013,r()*10+5);
			// setTimeout(function(){},200);

		})
	}

	// $('.test').click(function(){
setTimeout(function(){
imgShot();
}, 200)
		
	// })
	

})