$(function(){

	var $emailInput = $('#email-input');
	var $emailWaring = $('.email-waring')
	function validate(){
		var $value = $emailInput.val();
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(re.test($value)){
			$emailWaring.html('邮箱格式正确!');
			$emailInput.addClass('success');
			return true;
		}else if($value.length===0){
			$emailWaring.html('邮箱不能为空!');
			$emailInput.addClass('shake');
		}else{
			$emailWaring.html('邮箱格式不正确!');
			$emailInput.addClass('shake');
		}
	}

	/*光标离开判断*/
	$emailInput.blur(function(){
		validate();
	})
	/*点击发送按钮判断*/
	$('.send').click(function(){
		var v = validate()
		if(!v){
			return false;
		}else{
			return true;
		}
	})
})