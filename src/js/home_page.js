
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
	//轮播图
	let timer = null;
	let index = 1;
	autoSlideShow();
	//按圆点改变图片
	$.getJSON('json/slideShow.json',function(json){
//		console.log("img"+json.img1)
//		console.log(json)
		//将对象中的键转为数组 以求对象的长度
//		console.log(Object.keys(json))
//		创建点击圆点
		let slideshowlen = Object.keys(json).length;
		for(let i = 0;i < slideshowlen;i ++){
			$slidebox = `<span class = 'slide_box' index = ${i}></span>`
			$('.banner_chose').append($slidebox);
			autoChange();
			$('.banner_chose .slide_box').bind({
				'mouseenter' : function(){
			$(this).css({'background':'#fa3778','border-color':'#fec3d7'});
//			console.log($(this).attr("index"))
			index = parseInt( $(this).attr("index")) + 1;
//			console.log(index);
			slideShow();
			autoChange();
		},
		'mouseleave' : function(){
			$(this).css({'background':'#acaaab','border-color':'#e5e4e5'});
			autoChange();
			
		}
			})
		}
		
	})
    //ajax改变图片路径函数
	function slideShow(){
		$.getJSON('json/slideShow.json',function(json){
			if(index > Object.keys(json).length){
			index = 1;
		}
			$('.banner_cont img').attr('src',json['img' + index]);
			$('.banner_cont img').css('opacity','0.3');
			$('.banner_cont img').animate({
				opacity : '1'
			},500);
			autoChange();
			async:false;
		})
	}
	//自动轮播
	function autoSlideShow(){
		timer = setInterval(function(){
			index ++;
			slideShow();
			autoChange();
		},3000)
	}
	//进入图片停止轮播
	$('.banner_cont img').bind({
		'mouseenter' : function(){
			clearInterval(timer);
		},
		'mouseleave' : function(){
			autoSlideShow();
		}
	})
	//当前圆点为粉色
	function autoChange(){
		for(let i = 0;i < $('.banner_chose').children().length;i ++){
				$('.banner_chose').children().eq(i).css({'background':'#acaaab','border-color':'#e5e4e5'})
			}
		for(let i = 0;i < $('.banner_chose').children().length;i ++){
			
				if($('.banner_chose').children().eq(i).attr('index') == index -1){
					$('.banner_chose').children().eq(i).css({'background':'#fa3778','border-color':'#fec3d7'})
				}	
		}
	}
//公告
let nodeindex = 1;
nodeslide();
function nodehtml(){
	$.getJSON('json/node.json',function(json){
	if(nodeindex > Object.keys(json).length){
		nodeindex = 1;
	}
	$('.banner_node').children().eq(1).animate({
		opacity : 0,
		top : '-10px'
	},1000,function(){
		$('.banner_node').children().eq(1).remove();
		if(json['node' + index] == undefined){
			json['node' + index] = '欢迎光临莎莎网，这里有你想有的一切'
		}
		$node = `<div class='banner_node_txt'>${json['node'+index]}</div>`;
		if(json['node' + index] == undefined){
			json['node' + index] = '下一条'
		}
	$('.banner_node').append($node);
	
	})	;
	async:false
})
}

function nodeslide(){
	
	timers = setInterval(function(){
   		nodehtml();
    	nodeindex ++;
   },4000)
}  
//鼠标滑过停止播放 改变颜色
$('.banner_node').bind({
	'mouseenter' : function(){
		clearInterval(timers)
		$(this).children().eq(1).css('color','#fa3778')
	},
	'mouseleave' : function(){
		nodeslide();
		$(this).children().eq(1).css('color','#737373')
	}
})
 
	//推荐划过效果
	$('.recommend_img').on({
		'mouseenter' : function(){
			$(this).animate({
				opacity : '0.8'
			},30)
		},
		'mouseleave' : function(){
			$(this).animate({
				opacity : '1'
			})
		}
	},'img')
	
	//每日必看划过效果
	$('.new_bottom_node').bind({
		'mouseenter' : function(){
			$(this).css('box-shadow','2px 4px 5px 1px #ddd8d8')
		},
		'mouseleave' : function(){
			$(this).css('box-shadow','0 0 0 01px #fff')
			
		}
	})
	//立即抢购划过效果
for(let i = 0;i < $('.new_bottom_node').children().length;i ++){
	$('.new_bottom_node').eq(i).children().eq(1).children().eq(3).bind({
		'mouseenter' : function(){
			$(this).css('background','#c53265')
		},
		'mouseleave' : function(){
			$(this).css('background','#e93b78')
			
		}
	})
}

//每日必看划过效果
	$('.rushBuying_node').bind({
		'mouseenter' : function(){
			$(this).css('box-shadow','2px 4px 5px 1px #ddd8d8')
		},
		'mouseleave' : function(){
			$(this).css('box-shadow','0 0 0 0 #fff')
			
		}
	})
//马上抢划过效果
for(let i = 0;i < $('.rushBuying_node').children().length;i ++){
	$('.rushBuying_node').eq(i).children().eq(2).children().eq(4).children().eq(1).bind({
		'mouseenter' : function(){
			$(this).css('background','#c53265')
		},
		'mouseleave' : function(){
			$(this).css('background','#e93b78')
			
		}
	})	
}
//新品划过效果
$('.newArrival_node_txt').bind({
	'mouseenter' : function(){
		$(this).css('border-color','#fa3778')
	},
	'mouseleave' : function(){
		$(this).css('border-color','transparent')
	}
})

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

//右侧导航条
//滚动条发生变化时
$(window).scroll(function(){
let scrolltop = document.documentElement.scrollTop;
//记录当前所在的值
let index = 0;
//当到达一定值后改变定位
	if(scrolltop < $('#new').offset().top){
		$('.smallnav').css({
			position : 'absolute',
			left : '-46px',
			top: '990px'
		});
		index = 0;
		scorll(index)
	}
	else if(scrolltop >= $('#new').offset().top && scrolltop <= $('#rushBuying').offset().top){
		$('.smallnav').css({
			position : 'fixed',
			left : '-46px',
			top: '40px',
		});
		index = 0;
		scorll(index)
	}
	//根据滚动条改变当前导航条的颜色
	if(scrolltop >= $('#rushBuying').offset().top && scrolltop < $('#ranking').offset().top){
		index = 1;
		scorll(index);
	}
	if(scrolltop >= $('#ranking').offset().top && scrolltop < $('#newArrival').offset().top){
		index = 3;	
		scorll(index)
	}
	if(scrolltop >= $('#newArrival').offset().top){
		index = 2;
		$('.smallnav').css('display','none');
		scroll(index);
	}
	//划入导航栏中的选项改变颜色 
	$('.smallnav').on({
	'mouseenter' : function(){
		$(this).css({
			background : '#e93b78',
			color : '#fff'
		})
	},
	'mouseleave' :function(){
		$(this).css({
			background : '#fff',
			color : '#e93b78'
		});
		scorll(index)
	}
},'p')
})
//当前导航条的颜色
function scorll(index){
		$('.smallnav').css('display','block')
		for(let i =0;i < $('.smallnav').children().length;i ++){
			$('.smallnav').children().eq(i).css({
			background : '#fff',
			color : '#e93b78'
		})	
		}
		$('.smallnav').children().eq(index).css({
			background : '#e93b78',
			color : '#fff'
		})
}
//划入出现滚动条 画出滚动条隐藏
$('.smallnav').bind({
	'mouseenter' : function(){
		$(this).animate({
			left : '0'
		},500);
	},
	'mouseleave' : function(){
		$(this).animate({
			left : '-46px'
		},500)
	}
})
//点击导航条改变当前滚动条的位置
$('.smallnav').on({
	'click' : function(){
		index = $(this).index();
		if(index == 0){
		indexA = $('#new').offset().top;
		}else if(index == 1){
			indexA =  $('#rushBuying').offset().top;
		}else if(index == 2){
			indexA = $('#newArrival').offset().top;
		}else if(index ==3){
			indexA = $('#ranking').offset().top;
		}
		console.log(indexA)
		$('html,body').animate({
			scrollTop :indexA
		},800)
	}
},'p')
})