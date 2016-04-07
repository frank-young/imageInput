$(function(){
	var $element = $('.box-img');
	/*弹出图片工具对象*/
	var tool = {
		/*添加遮罩层*/
		addCover:function(){
			$('.cover')
				.css({display:'block'})
				.animate({opacity:1},300);
		},
		removeCover: function(){
			$('.cover')
				.animate({opacity:0},300)
				.css({display:'none'});
		},
		/*弹出图片盒子*/
		addImgBox: function(src,alt){
			$('.zoom')
				.css({display:'block'})
				.animate({
					opacity:1,
					top:'50%'
				},300);
			$('.zoom >img')
				.attr('src',src)
				.attr('alt',alt);
		},
		removeImgBox:function(){
			$('.zoom')
				.animate({
					opacity:0,
					top:'30%'
				},300)
				.css({display:'none'});
		},
		changeImg: function(e){
			var $value = $('.zoom').children('img').attr('src');
			$element.each(function(i){
				if($(this).children().attr('src')==$value){
					if(e=="prev"){
						var $e = $(this).prev().children();
					}else{
						var $e = $(this).next().children();
					}
					var src = $e.attr('src');
					var alt = $e.attr('alt');
					tool.addImgBox(src,alt);
					if(src==undefined){
						alert('已经到头了');
					}
					return;
				}
			})
		}
	}
	/*图片飞入*/
	function imgInput(){
		$element.each(function(i){
			$(this)
				.delay(i*100)
				.animate({
					opacity:1,
					left: 0,
					top:0
				},300)
				.addClass('input')
				.click(function(){		// 判断哪张图片被点击
					/*传入当前图片的值*/
					var $src = $(this).children().attr('src');
					var $alt = $(this).children().attr('alt');
					
					tool.addCover();//添加覆盖层
					tool.addImgBox($src,$alt);//显示图片及按钮

				});
		});
	}

	/*切换图片*/
	//上一个按钮被点击
	$('.btn-prev').click(function(){
		tool.changeImg("prev");
	});
	//下一个按钮被点击
	$('.btn-next').click(function(){
		tool.changeImg("next");
	});

	/*遮罩层点击时*/
	$('.cover')
		.css({height: document.body.scrollHeight})	//取全屏的高度作为遮罩层的高度
		.click(function(){
			tool.removeCover();
			tool.removeImgBox();
		});
	/*点击关闭按钮*/
	$('.btn-close').click(function(){
		tool.removeCover();
		tool.removeImgBox();
	})
	imgInput();
})