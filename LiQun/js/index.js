$(function(){
	var bannerIndex = 0;
	var bannerPic = $("#carousel li");
	var bannerCount = $("#banner-Count li");
	var timer1 = null;
	timer1 = setInterval(bannerStart,3000);
	function bannerStart(){
		bannerCount.eq(bannerIndex).addClass("on").siblings().removeClass("on");
		bannerPic.eq(bannerIndex).css({
			zIndex:100
		}).fadeIn().siblings().css({
			zIndex:99
		}).fadeOut();
		bannerIndex++;
		if(bannerIndex == bannerPic.length){
			bannerIndex = 0;
		}
	}
	bannerCount.mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on");
		bannerIndex = $(this).index();
		bannerStart();
		clearInterval(timer1);
	});
	bannerCount.mouseleave(function(){
		timer1 = setInterval(bannerStart,3000);
	})
	//banner图结束
	
	var bannerInfoIndex = 0;
	var bannerInfoPic = $("#banner-Info .flash-img li");
	var bannerInfoCount = $("#banner-Info .flash-count li");
	var timer2 = null;
	timer2 = setInterval(bannerInfoStart,3000);
	function bannerInfoStart(){
		bannerInfoCount.eq(bannerInfoIndex).addClass("on").siblings().removeClass("on");
		bannerInfoPic.eq(bannerInfoIndex).css({
			zIndex:100
		}).show().siblings().css({
			zIndex:99
		}).hide();
		bannerInfoIndex++;
		if(bannerInfoIndex == bannerInfoPic.length){
			bannerInfoIndex = 0;
		}
	}
	bannerInfoCount.click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		bannerInfoIndex = $(this).index();
		bannerInfoStart();
	})
	//banner图右侧结束
	
	var tempWrap = $(".tempWrap ul");
	var tempWrapIndex = 0;
	var wrapPrev = $(".prev");
	var wrapNext = $(".next");
	var timer3 = null;
	timer3 = setInterval(tempWrapStart,3000)
	function tempWrapStart(){
		if(tempWrapIndex >= 3){
			tempWrapIndex = 0;
		}else if(tempWrapIndex < 0){
			tempWrapIndex = 2;
		}
		tempWrap.stop().animate({
			left:-tempWrapIndex*1008
		},2000);
		tempWrapIndex++;
	}
	wrapPrev.click(function(){
		clearInterval(timer3);
		tempWrapIndex = tempWrapIndex - 2;
		tempWrapStart();
		timer3 = setInterval(tempWrapStart,3000)
	});
	wrapNext.click(function(){
		clearInterval(timer3);
		tempWrapStart();
		timer3 = setInterval(tempWrapStart,3000)
	})
	//banner下横向滚动结束
	
})
