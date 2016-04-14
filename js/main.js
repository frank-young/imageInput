$(function(){
	var $element = $('.box-img');
	/*弹出图片工具对象*/
	var tool = {
		/*添加遮罩层*/
		addCover:function(){
			$('.cover')
				.show()
				.animate({opacity:1},300);
		},
		removeCover: function(){
			$('.cover')
				.animate({opacity:0},300)
				.hide();
		},
		/*弹出图片盒子*/
		addImgBox: function(src,alt,txt){
			$('.zoom')
				.show()
				.animate({
					opacity:1,
					top:'50%'
				},300);
			$('.zoom >img')
				.attr('src',src)
				.attr('alt',alt);
			$('.zoom>p').html(txt);
		},
		removeImgBox:function(){
			$('.zoom')
				.animate({
					opacity:0,
					top:'30%'
				},300)
				.hide();
		},
		changeImg: function(str){
			var $value = $('.zoom').children('img').attr('src');

			$element.each(function(i){
				if($(this).children('img').attr('src')==$value){
					if(str=="prev"){
						var $ele = $(this).prev().children('img');
						var $txt = $(this).prev().children('p').html();
					}else{
						var $ele = $(this).next().children('img');
						var $txt = $(this).next().children('p').html();
					}
					var src = $ele.attr('src');
					var alt = $ele.attr('alt');

					tool.addImgBox(src,alt,$txt);
					if(src==undefined){
						alert('已经到头了');
					}
					return;
				}
			})
		}
	}
	/*图片排列显示*/
	function imgRedom(){
		$element.each(function(i){

			// 位置1
			// if((i)%3==0){
			// 	$(this).css({
			// 		top:'100%',
			// 		left:'33%'
			// 	})
			// }
			// // 位置2
			// if((i-1)%3==0){
			// 	$(this).css({
			// 		top:'100%',
			// 		left:'0%'
			// 	})
			// }
			// // 位置3
			// if((i-2)%3==0){
			// 	$(this).css({
			// 		top:'100%',
			// 		left:'-33%'
			// 	})
			// }
			$(this).css({
				// left: -Math.floor(Math.random()*50)+"%",
				// top:-Math.floor(Math.random()*100)+"%",
				top:'10%',
				left:'0%'
			})
		})
	}
	/*图片飞入*/
	function imgInput(){
		$element
		.delay(2000)	/*设置延时与图片喷出的时间同步*/
		.each(function(i){
			$(this)
				.delay(i*100)
				.animate({
					opacity:1,
					left: 0,
					top:0
				},300)
				.children('img')
				.click(function(){		// 判断哪张图片被点击
					/*传入当前图片的值*/
					var $src = $(this).attr('src');
					var $alt = $(this).attr('alt');
					var $txt = $(this).next().html();

					tool.addCover();//添加覆盖层
					tool.addImgBox($src,$alt,$txt);//显示图片及按钮

				});
		});
	}

	/*设置全选图片*/
	function imgCheck(){
		/*全选按钮*/
		var $boxCheck = $('.box-check');
		var $boxImg = $('.box-img :checkbox');
		$boxCheck
			.children()
			.bind('change', function(){
				if($boxCheck.children().children().is(':checked')){
					$boxImg.prop('checked', "true");	//不能使用attr
				}else{
					$boxImg.removeAttr('checked');
				}
			})
		$boxImg.click(function(){
			$boxCheck.children().children().prop("checked",$boxImg.length == $(".box-img input[type=checkbox]:checked").length ? true : false);
		})	
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
	/*编辑按钮*/
	$('.edit')
	.click(function(){
		$(this).hide();/*隐藏编辑按钮*/

		$('.box').css('border',"3px dotted #fff");
		$('<span class="mask-item"></span>').insertAfter($('.box-img>input[type=checkbox]'));
		$(':checkbox').show();
		$('.box-check').show('fast');
		/*完成按钮*/
		$('.wrap-send').show();

		/*取消按钮*/
		$('.not-send').click(function(){
				$('.wrap-send').hide();
				$(':checkbox').hide(); /*隐藏input按钮*/
				$('.box').css('border',"1px solid #fff");
				$('.box-check').hide('fast');
				$('.mask-item').remove();
				$('.edit').show();/*显示编辑按钮*/
			});
		// imgCheck()
	})
	imgCheck()
	imgRedom();
	imgInput();

})