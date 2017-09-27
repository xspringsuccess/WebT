$(function() {
	var num = 0;
	var timer;
	var b = false;
	// 图片轮播
	function move() {
		timer = setInterval(function() {
			num++;
			if(num>3) {
				num=0;
			}
			console.log(num);
			var page = -1349*num+'px'
			$('.bx-pager-link').removeClass('active');
			$('.bx-pager-link').eq(num).addClass('active').siblings().removeClass('active');
			$('.block5 ul').css('transform',"translate3d("
				+page+",0px,0px")
		},5000)
	}
	move();
	
	// partner下一张
	$('.bx-next').click(function() {
		++num;
		if(num>3) {
			num = 3;
		}
		else {
			var index = -200*num+'px';
			// console.log(index)
			$('.bxsliderpartners').css("transform","translate3d("
				+index+",0px,0px)")
		}
	});

	// partner上一张
	$('.bx-prev').click(function() {
		--num;
		if(num<0) {
			num = 0;
			var index = -200*num+'px';
			$('.bxsliderpartners').css("transform","translate3d("
				+index+",0px,0px)")
		}
		else {
			var index = -200*num+'px';
			$('.bxsliderpartners').css("transform","translate3d("
				+index+",0px,0px)")
		}
	});

	// 轮播点击更换图片
	$('.bx-pager-item').click(function() {
		var index = $(this).index();
		// console.log(index);
		var page = -1349*index+'px'
		$('.bx-pager-link').removeClass('active');
		$(this).find('.bx-pager-link').addClass('active');
		$('.block5 ul').css('transform',"translate3d("
			+page+",0px,0px")
	})

	// 移动端点击出现导航条
	$('.menu').click(function() {
		if(!b) {
			$('.fullmenu').css('display',"block");
			$('.fullmenu .call').css('display',"block");
			console.log(b);
			b = true;
		}else {
			$('.fullmenu').css('display',"none");
			$('.fullmenu .call').css('display',"none");
			console.log(b);
			b = false;
		}
	})
})