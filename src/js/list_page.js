$(function(){
	//鼠标滑过头部导航条全部分类二级菜单出现
	$('.nav_bottom').children().eq(0).bind({
		'mouseenter' : function(){
			$('.nav_bottom_classify').css('display','block');
		},
		'mouseleave' : function(){
			$('.nav_bottom_classify').css('display','none');
			
		}
	})
	
//	鼠标点击产品侧导航条出现子导航
	for(var i = 1;i < $('.product_classify').children().length;i++){
		
		$('.product_classify').children().eq(i).click(function(){
			$(this).children().eq(1).toggle(500);
			
		})	
	}
	
	
	//鼠标点击右导航条更多显示更多
	for(var i = 1;i < $('.product_goods_chose').children().length;i ++){
		$('.product_goods_chose').children().eq(i).children().eq(2).children().eq(0).click(function(){
			$(this).parent().prev().children('.product_chose_txt_hidden').toggle(200);
		});
		$('.product_goods_chose').children().eq(i).children().eq(2).children().eq(1).click(function(){
			$(this).parent().prev().find('a').toggle(500);
			$(this).parent().prev().find('p').toggle(500);
		})
	}
	
	//点击更多选项出现跟多选项
	$('.product_chose_bottom').children().eq(0).click(function(){
		$(this).parent().prev().toggle(500);
		$(this).parent().prev().prev().toggle(500);
		$(this).parent().prev().prev().prev().toggle(500);
		$(this).parent().prev().prev().prev().prev().toggle(500);
		$(this).parent().prev().prev().prev().prev().prev().toggle(500);
		
	})
	
	//商品滑过出现详细信息
	for(var i = 0;i < $('.product_photo').children().length-1;i ++){
		if(i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i ==26){
			continue;
		}else{
//			console.log(i)
		$('.product_photo').children().eq(i).bind({
		'mouseenter' : function(){
			$(this).css('z-index','100');
			$(this).children().eq(0).css('box-shadow','3px 5px 8px 4px #d7d7d7');
			
			$(this).children().eq(0).animate({
				width : '337px',
				height : '520px',
			},200);
			
			$(this).children().eq(1).animate({
				left : '250px'
			},200);
			
			$(this).children().eq(1).css('z-index',101);
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).css('display','block');
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).animate({
				top : '150px',
				left : '70px'
			},200);
			return false;
		},
		'mouseleave' : function(){
			
			$(this).children().eq(0).animate({
				width : '252px',
				height : '480px',
			},200,function(){
				$(this).css('box-shadow','0 0 0 0 #fff');
				
			});
			$(this).css('z-index','1');
			$(this).children().eq(1).animate({
				left : '160px'
			},200);
			$(this).children().eq(1).css('z-index','0');
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).css('display','none');
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).animate({
				top : '120px',
				left : '20px'
			},200);
			return false;
		}
	})
		}
		
		
	}
	
	for(var i = 3;i < $('.product_photo').children().length-1;){
		$('.product_photo').children().eq(i-1).bind({
		'mouseenter' : function(){
			$(this).css('z-index','100');
			$(this).children().eq(0).css('box-shadow','3px 5px 8px 4px #d7d7d7');
			
			$(this).children().eq(0).children().eq(0).css('float','right');
			$(this).children().eq(0).children().eq(0).animate({
				width: '336px',
				
			},200)
			
			$(this).children().eq(0).children().eq(0).children().eq(1).animate({
				width : '300px'
			},200)
			
			$(this).children().eq(0).animate({
				left : '-84px',
				width : '337px',
				height : '520px'
				
			},200);
			
			$(this).children().eq(1).animate({
				left : '-84px'
			},200);
			
			$(this).children().eq(1).css('z-index',101);
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).css('display','block');
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).animate({
				top : '150px',
				left : '70px'
			},200);
			return false;
		},
		'mouseleave' : function(){
			
			$(this).children().eq(0).animate({
				width : '252px',
				height : '480px',
				left : 0
			},200,function(){
				$(this).css('box-shadow','0 0 0 0 #fff');
				
			});
			
			$(this).children().eq(0).children().eq(0).children().eq(1).animate({
				width : '232px'
			},200)
			
			$(this).children().eq(0).children().eq(0).css('float','');
			$(this).children().eq(0).children().eq(0).animate({
				width: '252px',
				
			},200)
			
			$(this).css('z-index','1');
			$(this).children().eq(1).animate({
				left : '0'
			},200);
			$(this).children().eq(1).css('z-index','0');
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).css('display','none');
			$(this).children().eq(0).children().eq(0).children().eq(2).children().eq(5).animate({
				top : '120px',
				left : '20px'
			},200);
			return false;
		}
	})
//		console.log($('.product_photo').children().eq(i-1));
		i = i + 3;
		
	}
	
	
	//点击小框图切换大框图
	var $smallsrc = '';
	for(var i = 0;i < $('.product_photo').children().length-1;i ++){
		$('.product_photo').children().eq(i).find('.product_photo_smallimg').on({
			'mouseenter' : function(){
				for(var i = 0; i < $(this).parent().children().length;i++){
					$(this).parent().children().eq(i).css('border','0')
				}
				$(this).css('border','4px solid #c69a62')
				$smallsrc = $(this).children().eq(0).attr('src');
				$(this).parent().prev().find('.product_photo_node_top').find('.img').attr('src',$smallsrc)
			}
		},'p')
		
	}

	
})
