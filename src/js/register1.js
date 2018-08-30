$(function(){
	//随机数
//	console.log(1)
	var registr = '';
	$('.login_node').find('form').children().eq(3).children().eq(2).click(function(){
		random()
	
	})
	
	//验证
	var registername = $('.login_node').find('form').children().eq(0).find('input');
	var registerword = $('.login_node').find('form').children().eq(1).find('input');
	var registerrword = $('.login_node').find('form').children().eq(2).find('input');
	var registeryanz = $('.login_node').find('form').children().eq(3).find('input');
	
	$('.register_cover').children().eq(1).click(function(){
			$('.cont').css('display','none');
		  $(this).parent().css('display','none')
	})
	
	
	registername.blur(function(){
		var er = /^(1)\d{10}$/
		if(!er.test($(this).val())){
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入正确的手机号');	
		}
	})
	registerword.blur(function(){
		var er = /^\w{6,16}$/
		if(!er.test($(this).val())){
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入6-16位的密码');	
		}
	})
//	
	registerrword.blur(function(){
		
		if($(this).val() != registerword.val()){
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入正确的密码');	
		}
	})
	registeryanz.blur(function(){
		if($(this).val() != $(this).next().html()){
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('请输入正确的验证码');	
			random()
		}
		
		
	})
	
	//点击注册将信息存入cookie
	$('.login_node').find('form').children().eq(5).click(function(){
		var regname = registername.val();
		var regword = registerword.val();
		var regcookiestr = $.cookie('sasaregister') ? $.cookie('sasaregister') : "";
		var regcookieobj =  converStrToObj(regcookiestr);
		if(regname in regcookieobj){
			$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('次手机号已经被注册过');	
		}else{
			regcookieobj[regname] = {
				'password' : regword
			}
		}
		$.cookie('sasaregister',JSON.stringify(regcookieobj),{expires : 7,path : '/'})
		
		$('.cont').css('display','block');
			$('.register_cover').css('display','block');
			$('.register_cover').children().eq(0).html('注册成功！');
			$('.register_cover').children().eq(1).html('点击登录')
			$('.register_cover').children().eq(1).click(function(){
				location.href = 'login.html'
			})
			
	})
	
	
	//随机数变化
	function random(){
		var registernum = '123456789abcdefghijklmnopqrstuvwxyz';
		var registr1 = '';
		for(var i = 0;i < 5;i ++){
			registr1 += registernum.charAt(Math.floor(Math.random()*35))
		}
		registr = registr1;
		$('.login_node').find('form').children().eq(3).children().eq(2).prev().html(registr)
	}
//	
	function converStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}
})
