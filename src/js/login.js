$(function(){
	
	var loginyanz = $('.login_node').find('form').children().eq(2).find('input');
	var logindengl = $('.login_node').find('form').children().eq(4);
	//弹出框点击确定消失
		$('.register_cover').children().eq(1).click(function(){
			$('.cont').css('display','none');
		  $(this).parent().css('display','none')
	})
		
	//验证码验证
	loginyanz.blur(function(){
		console.log($(this).next().html())
		if($(this).val()!= $(this).next().html()){
			random();
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入正确的验证码');	
		}
	})
	
	
	//点击登录判断用户名密码
	logindengl.click(function(){
		
		//获取页面中输入的用户名和密码
		var loginname = $('.login_node').find('form').children().eq(0).find('input').val();
		var loginword = $('.login_node').find('form').children().eq(1).find('input').val()
		console.log($.cookie())
		var logcookiestr = $.cookie('sasaregister') ? $.cookie('sasaregister') : "";
		var logcookieobj =  converStrToObj(logcookiestr);
		
		if(loginname in logcookieobj){
			if(logcookieobj[loginname].password == loginword)	{
				location.href = 'home_page.html'
			}else{
				$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入正确的密码');
			random()
			}
		}else {
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入正确的用户名');
			random()
		}
		
	})
	
	
	
	//随机数出现
	function random(){
		var registernum = '123456789abcdefghijklmnopqrstuvwxyz';
		var registr1 = '';
		for(var i = 0;i < 5;i ++){
			registr1 += registernum.charAt(Math.floor(Math.random()*35))
		}
		registr = registr1;
		$('.login_node').find('form').children().eq(2).children().eq(1).html(registr)
	}
	//cookie字符串转对象
		function converStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}
})
