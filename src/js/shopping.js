$(function(){
	gouwucnum();
	var sasaprostr = $.cookie('sasaproduct') ? $.cookie('sasaproduct') : "";
	var sasaproobj = converStrToObj(sasaprostr);
	if(sasaprostr == ""){
		$('.shopp_empt').css('display','block');
		$('.shopp_txt').css('display','none')
	}else{
		$('.shopp_txt').css('display','block');
		$('.shopp_empt').css('display','none');
		
	}
	console.log(sasaproobj["rcx1"])
	for(var i in sasaproobj){
		var shoppPro = `
	<p>
						<span>
							<img src = ${sasaproobj["rcx1"].src} alt="" />
						</span>
						<span>
							<u>${sasaproobj["rcx1"].name}</u>
							<u>
								${sasaproobj["rcx1"].weight}
							</u>
						</span>
						<span>
							${sasaproobj["rcx1"].price}
						</span>
						<span>
							<u>-</u>
							<input type="text" value=${sasaproobj["rcx1"].num}>
							<u>+</u>
						</span>
						<span>
							
						</span>
						<span>
							删除
						</span>
					</p>
	`
		
		$('.shopp_product').append(shoppPro);
	
	
	var shoppropre = sasaproobj["rcx1"].price

	var shoppronum = parseInt(sasaproobj["rcx1"].num)
	var shopmam = shoppronum * shoppropre.substring(1)
	$('.shopp_product').children().eq(1).children().eq(4).html(shopmam);
	//商品应付金额为小计价格
	$('.shopp_settle').children().eq(1).children().eq(4).html('￥'+$('.shopp_product').children().eq(1).children().eq(4).html())
	}
	
//	点击+cookie中数量增加 -减少
	$('.shopp_product').children().eq(1).children().eq(3).children().eq(2).click(function(){
		var sasaprostr = $.cookie('sasaproduct') ? $.cookie('sasaproduct') : "";
		var sasaproobj = converStrToObj(sasaprostr);
		var shoppnananum = parseInt(sasaproobj["rcx1"].num);
		shoppnananum++;
		sasaproobj["rcx1"].num = shoppnananum ;

		$.cookie('sasaproduct',JSON.stringify(sasaproobj))
		console.log(sasaproobj["rcx1"].num)
		$(this).prev().val(sasaproobj["rcx1"].num)
		var shoppropre = sasaproobj["rcx1"].price;
		$(this).parent().next().html(sasaproobj["rcx1"].num* parseInt(shoppropre.substring(1)))
		//商品应付金额为小计价格
	$('.shopp_settle').children().eq(1).children().eq(4).html('￥'+$('.shopp_product').children().eq(1).children().eq(4).html());
	gouwucnum();
		
	})
	$('.shopp_product').children().eq(1).children().eq(3).children().eq(0).click(function(){
		gouwucnum();
		var sasaprostr = $.cookie('sasaproduct') ? $.cookie('sasaproduct') : "";
		var sasaproobj = converStrToObj(sasaprostr);
		var shoppnananum = parseInt(sasaproobj["rcx1"].num);
		shoppnananum--;
		sasaproobj["rcx1"].num = shoppnananum ;

		$.cookie('sasaproduct',JSON.stringify(sasaproobj),{expires : 7,path : '/'})
		$(this).next().val(sasaproobj["rcx1"].num)
		var shoppropre = sasaproobj["rcx1"].price;
		$(this).parent().next().html(sasaproobj["rcx1"].num* parseInt(shoppropre.substring(1)))
		//商品应付金额为小计价格
	$('.shopp_settle').children().eq(1).children().eq(4).html('￥'+$('.shopp_product').children().eq(1).children().eq(4).html());
	
		
	})
	
	

	
	function converStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}
	
	//购物车数量
function gouwucnum(){
	var homcookiestr = $.cookie('sasaproduct') ? $.cookie('sasaproduct') : "";
		
		var homcookieobj = converStrToObj(homcookiestr);
		console.log(homcookieobj)
		var homenum = homcookieobj['rcx1'].num;
		var homeheji =  parseInt(homenum)* parseInt(homcookieobj['rcx1'].price.substring(1))    
    $('.shopmas_center').children().eq(2).html(homenum)
    
    $('.detail_list_jg').children().eq(3).html("￥"+homeheji);
 
}
	
})
