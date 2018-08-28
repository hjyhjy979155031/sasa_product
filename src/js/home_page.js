
$(function(){

	//轮播图
	var timer = null;
	var index = 1;
	autoSlideShow();
	//按圆点改变图片
	$.getJSON('json/slideShow.json',function(json){
//		console.log("img"+json.img1)
//		console.log(json)
		//将对象中的键转为数组 以求对象的长度
//		console.log(Object.keys(json))
//		创建点击圆点
		var slideshowlen = Object.keys(json).length;
		for(var i = 0;i < slideshowlen;i ++){
			var $slidebox = `<span class = 'slide_box' index = ${i}></span>`
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
		for(var j = 0;j < $('.banner_chose').children().length;j ++){
				$('.banner_chose').children().eq(j).css({'background':'#acaaab','border-color':'#e5e4e5'})
			}
		for(var k = 0;k < $('.banner_chose').children().length;k ++){
			
				if($('.banner_chose').children().eq(k).attr('index') == index -1){
					$('.banner_chose').children().eq(k).css({'background':'#fa3778','border-color':'#fec3d7'})
				}	
		}
	}
//公告
var nodeindex = 1;
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
		if(json['node' + nodeindex] == undefined){
			json['node' + nodeindex] = '欢迎光临莎莎网，这里有你想有的一切'
		}
		var $node = `<div class='banner_node_txt'>${json['node'+nodeindex]}</div>`;
	$('.banner_node').append($node);
	
	})	;
	async:false
})
}
var timers = null;
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
for(var q = 0;q < $('.new_bottom_node').children().length;q ++){
	$('.new_bottom_node').eq(q).children().eq(1).children().eq(3).bind({
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
for(var t = 0;t < $('.rushBuying_node').children().length;t ++){
	$('.rushBuying_node').eq(t).children().eq(2).children().eq(4).children().eq(1).bind({
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


//记录当前所在的值

//右侧导航条
//滚动条发生变化时
var index = 0;
$(window).scroll(function(){
let scrolltop = document.documentElement.scrollTop;
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

var indexA = 0;
$('.smallnav').on({
	'click' : function(){
		var indexX = $(this).index();
		if(indexX == 0){
		indexA = $('#new').offset().top;
		}else if(indexX == 1){
			indexA =  $('#rushBuying').offset().top;
		}else if(indexX == 2){
			indexA = $('#newArrival').offset().top;
		}else if(indexX ==3){
			indexA = $('#ranking').offset().top;
		}
		$('html,body').animate({
			scrollTop :indexA
		},800)
	}
},'p')
})