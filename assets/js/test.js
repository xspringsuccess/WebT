$(function() {
	var num = 0;
	var timer;
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

	$('.bx-pager-item').click(function() {
		
		var index = $(this).index();
		// console.log(index);
		var page = -1349*index+'px'
		$('.bx-pager-link').removeClass('active');
		$(this).find('.bx-pager-link').addClass('active');
		$('.block5 ul').css('transform',"translate3d("
			+page+",0px,0px")
	})

	
})