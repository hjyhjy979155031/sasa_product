

$(function(){
	

	$('.nav_bottom_chose_li').eq(0).bind({
	'mouseenter' :function(){
		$(this).find('.nav_bottom_classify').css('display','block')
	},
	'mouseleave' : function(){
		$(this).find('.nav_bottom_classify').css('display','none')
	}
})
	
	//放大镜
	//划入显示大图和遮罩层
	$('.detail_img').bind({
		'mouseenter' : function(){
			$('.detail_smallcont').css('display','block');
			
			$('.detail_node_bigimg').css('display','block')
		},
		'mouseleave' : function(){
			$('.detail_smallcont').css('display','none');
			$('.detail_node_bigimg').css('display','none')
		},
		'mousemove' : function(e){
			var disX = e.pageX-$('.detail_img').offset().left-$('.detail_smallcont').width()/2;
			var disY = e.pageY-$('.detail_img').offset().top-$('.detail_smallcont').height()/2;
			
			if(disX <= 0){
				$('.detail_smallcont').css('left',0)
			}else if(disX > $('.detail_img')[0].offsetLeft){
				$('.detail_smallcont').css('left',$('.detail_img')[0].offsetLeft)
		}else{

			$('.detail_smallcont').css('left',disX);
			}
			if(disY <= 0){
				$('.detail_smallcont').css('top',0)
			}else if(disY > $('.detail_img')[0].offseTop){
				
			$('.detail_smallcont').css('top',$('.detail_img')[0].offseTop)
			}else{
				$('.detail_smallcont').css('top',disY);
			}
			var bigimgX = disX/$('.detail_smallcont').width();
			var bigimgY = disY/$('.detail_smallcont').height();
			$('.detail_node_bigimg').find('img').css('left',-bigimgX*$(this).width());
			$('.detail_node_bigimg').find('img').css('top',-bigimgY*$(this).height());
			
		}
	})

	//鼠标点击运动ul露出后面的图片
	$('.detail_node_img_bottom').find('ul').on({
		'mouseenter' : function(){
			$(this).parent().children().css('border','2px solid #ddd');
			$(this).css('border','3px solid #e5cbb2');
			$('.detail_img').find('img').attr('src',$(this).find('img').attr('src'));
			$('.detail_node_bigimg').find('img').attr('src',$(this).find('img').attr('src'))
			if($(this).index() >=2){
				var imglength = ($(this).index()-2)*$(this).width() + 17 * ($(this).index()-1);
			$(this).parent().animate({
				left : -imglength
			},1000)
			}
		}
	},'li')
	
	//鼠标滑过扫扫加入购物车出现二维码
	$('.detail_mag_txt_bottom').children().eq(2).find('span').eq(1).bind({
		'mouseenter' : function(){
			$(this).next().css('display','block')
		},
		'mouseleave' : function(){
			$(this).next().css('display','none')
			
		}
	})
	
	//点击加号增加数量 点击减号减少数量
	$('.detail_mag_txt_bottom').children().eq(0).children().eq(3).click(function(){
		var detailnum = parseInt($(this).prev().val())
		detailnum++
		$(this).prev().val(detailnum)
		var detailheji = $('.detail_mag_txt_bottom').children().eq(1).children().eq(1).html().substring(1)
		$('.detail_list_jg').children().eq(3).html("￥"+ parseInt($(this).prev().val()) * parseInt(detailheji));
		
	})
	$('.detail_mag_txt_bottom').children().eq(0).children().eq(1).click(function(){
		var detailnum1 = parseInt($(this).next().val())
		detailnum1--
		if(detailnum1 < 1){
			detailnum1 = 1
		}
		$(this).next().val(detailnum1);
		var detailheji = $('.detail_mag_txt_bottom').children().eq(1).children().eq(1).html().substring(1)
		$('.detail_list_jg').children().eq(3).html("￥"+ parseInt($(this).prev().val()) * parseInt(detailheji));
		 
	})
	
	//鼠标点击立即抢购将本页信息放入cookie
	$('.detail_list_jg').children().eq(4).click(function(){
		var goodid = $('.detail_mag_txt_center').children().eq(1).attr('data-good-id');
		var goodname = $('.detail_mag_txt_center').children().eq(1).children().eq(0).html();
		var goodweight = $('.detail_mag_txt_center').children().eq(1).children().eq(1).html();
		var goodprice = $('.detail_mag_txt_bottom').children().eq(1).children().eq(1).html();
		var goodnum = $('.detail_mag_txt_bottom').children().eq(0).children().eq(2).val();
		var src = $('.detail_img').find('img').attr('src');
		
		//获取cookie
		var cookiestr = $.cookie('sasaproduct') ? $.cookie('sasaproduct') : "";
		
		var cookieobj = converStrToObj(cookiestr);
		if(goodid in cookieobj){		
			cookieobj[goodid].num = parseInt(cookieobj[goodid].num) + parseInt(goodnum);
//			cookieobj[goodnum] += goodnum;
			console.log(cookieobj[goodid])
		}else{
			cookieobj[goodid] = {
			'name' : goodname,
			'weight' : goodweight,
			'price' : goodprice,
			'src' : src,
			'num' : goodnum
		}
		}

		$.cookie('sasaproduct',JSON.stringify(cookieobj),{expires : 7,path : '/'});
		gouwucnum()
		console.log($.cookie())
	})
	
	$('.detail_mag_txt_bottom').children().eq(2).children().eq(0).click(function(){
		var goodid = $('.detail_mag_txt_center').children().eq(1).attr('data-good-id');
		var goodname = $('.detail_mag_txt_center').children().eq(1).children().eq(0).html();
		var goodweight = $('.detail_mag_txt_center').children().eq(1).children().eq(1).html();
		var goodprice = $('.detail_mag_txt_bottom').children().eq(1).children().eq(1).html();
		var goodnum = $('.detail_mag_txt_bottom').children().eq(0).children().eq(2).val();
		var src = $('.detail_img').find('img').attr('src');
		
		//获取cookie
		var cookiestr = $.cookie('sasaproduct') ? $.cookie('sasaproduct') : "";
		
		var cookieobj = converStrToObj(cookiestr);
		if(goodid in cookieobj){		
//			cookieobj[goodid].num = parseInt(cookieobj[goodid].num) + parseInt(goodnum);
//			cookieobj[goodnum] += goodnum;
			console.log(cookieobj[goodid])
		}else{
			cookieobj[goodid] = {
			'name' : goodname,
			'weight' : goodweight,
			'price' : goodprice,
			'src' : src,
			'num' : goodnum
		}
		}

		$.cookie('sasaproduct',JSON.stringify(cookieobj),{expires : 7,path : '/'});
		
		location.href = 'shopping.html'
	})
	
	
	
	
	
	//将字符串转为对象
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
