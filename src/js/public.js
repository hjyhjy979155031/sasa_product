
	$(function(){
		//头部导航条
$('.header_right').on({
		'mouseover' :function(){
//			alert($(this));
			$(this).css('background','#fff');
			return false;
		},
		'mouseout' : function(){
			$(this).css('background','transparent');
			return false;
		}
		
	},'li')
	$('.header_right li:first').bind({
		'mouseenter' : function(){
			$(this).css('background','#fff');
			$(this).children('ul').css('display','block');
			$(this).children('ul').animate({

				height:"140px"
			},500);
			return false;
		},
		'mouseleave' : function(){
			$(this).css('background','transparent');
			
			$(this).children('ul').animate({
				height:'0px'
			},500,function(){
				$('.header_right li:first').children('ul').css('display','none');
			});
			return false;
		}
	})
	
	for(let i = 0;i < $('.header_right .right_1').children().length;i ++){
		$('.header_right .right_1').children().eq(i).bind({
			'mouseenter' : function(){
				$(this).css('color','#fa3778');
				$(this).parent().parent().css('background','#fff');
			},
			'mouseleave' :function(){
				$(this).css('color','#888')
			}
		})
	}
	
	
//	console.log($('.header_right li'))
		$('.header_right li').eq(6).bind({
		'mouseenter' : function(){
			$(this).css('background','#fff');
			
			$(this).children('ul').css('display','block');
			$(this).children('ul').animate({

				height:"80px"
			},500);
			return false;
		},
		'mouseleave' : function(){
			$(this).css('background','transparent');
			
			$(this).children('ul').animate({
				height:'0'
			},500,function(){
				$('.header_right li').eq(6).children('ul').css('display','none');
			});
			return false;
		}
	})
//		console.log($('.header_right li').eq(12).children('i'));
//		console.log($('.header_right li').eq(12).children('i').next().next())
	$('.header_right li').eq(12).children('i').on({
		'mouseenter' : function(){
			$('.header_right .header_QR').css('display','block');
			return false
		},
		'mouseleave' : function(){
			$('.header_right .header_QR').css('display','none');
			return false
		}
	})
//	$i.children();
//	console.log($i.children().eq(2))
//划过改变二维码
	$('.header_right li').eq(12).children().eq(2).bind({
		'mouseover' : function(){
			$('.header_right .header_QR').children('img').attr({src:'images/7191af464a49d84fa95c39361cfdd5ef993347fd.jpg' ,alt:'微博二维码'})
		}
	})
	$('.header_right li').eq(12).children().eq(1).bind({
		'mouseover' : function(){
			$('.header_right .header_QR').children('img').attr({src:'images/92916c648aa5518f6c52210ff2e8418eb3c750a0.jpg' ,alt:'微博二维码'})
		}
	})
	
	
//nav
//	console.log($('.nav_bottom_classify  .nav_bottom_classify_face'));
//主导航条划过
	let $choselen = $('.nav_bottom_chose').children().length;
	//console.log($('.nav_bottom_chose').children())
	for(let i =2 ;i < $choselen;i++){
		$('.nav_bottom_chose').children().eq(i).bind({
			'mouseenter' : function(){
				$(this).css('color','#fa3778')
			},
			'mouseleave' : function(){
				$(this).css('color','#000')
				
			}
		})
	}
//全部分类二级菜单划过
//console.log($('.nav_bottom_classify').children())
	let $navUl =  $('.nav_bottom_classify').children();
	 let $classifylen =  $('.nav_bottom_classify').children().length;
	 for(let i = 0 ; i < $classifylen ;i++){
	 	$navUl.eq(i).bind({
	 		'mouseenter' : function(){
	 			$(this).css({background:'#fff',color:'#fa3778'});
	 			$(this).children('.nav_bottom_box').css('display','block')
	 		},
	 		'mouseleave' : function(){
	 			$(this).css({background:'#fa3778',color:'#fff'})
	 			$(this).children('.nav_bottom_box').css('display','none')
	 		}
	 	})
	 	
	 }
	 //二级菜单中的选项
// console.log($('.nav_bottom_box div'));
	$('.nav_bottom_box div p span').bind({
		'mouseenter' : function(){
			$(this).css('color','#fa3778');
		},
		'mouseleave' :function(){
			$(this).css('color','#999')
		}
	})
	$('.nav_bottom_box div h2').bind({
		'mouseenter' : function(){
			$(this).css('color','#fa3778');
		},
		'mouseleave' :function(){
			$(this).css('color','#555')
		}
	})
	$('.nav_bottom_chose').children().eq(7).bind({
		'mouseenter' : function(){
			$(this).children().eq(1).css('display','block')
		},
		'mouseleave' : function(){
			$(this).children().eq(1).css('display','none');
			
		}
	})
	$('.brand_text').on({
		'mouseenter' : function(){
				$(this).css('color','#fa3778')
		},
		'mouseleave' : function(){
				$(this).css('color','#222')
		}
	},'p')
	
	//左侧导航条效果
shopmas($('.shopmas_top').children().eq(0))
shopmas($('.shopmas_love').children().eq(0))
shopmas($('.shopmas_love').children().eq(1))
shopmas($('.shopmas_sever').children().eq(0))
$('.shopmas_sever').children().eq(1).bind({
	'mouseenter' : function(){
			$(this).children().css('display','block');
			$(this).css('background','#ec3e7d')
			$(this).children().animate({
				opacity : '1',
				left : '-141px'
			},300);
			return false
	},
	'mouseleave' : function(){
		$(this).css('background','transparent');
		$(this).children().animate({
			opacity : '0',
			left : '-161px'
		},300,function(){
			$(this).css('display','none')
		});
		return false
	}
})
function shopmas(ele){
	ele.bind({
		'mouseenter' : function(){
			$(this).children().css('display','block');
			$(this).css('background','#ec3e7d')
			$(this).children().animate({
				opacity : '1',
				left : '-91px'
			},300);
			return false
	},
	'mouseleave' : function(){
		$(this).css('background','transparent');
		$(this).children().animate({
			opacity : '0',
			left : '-110px'
		},300,function(){
			$(this).css('display','none')
		});
		return false
	}
	})
}
//回到顶部
$('.shopmas_sever').children().eq(2).click(function(){
	document.documentElement.scrollTop = 0;
})

	})
