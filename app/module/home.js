var app = angular.module('homeModule',[]);
app.controller('home',function($scope){
	var swiper=new Swiper(".swiper-container",{
		autoplay: 2000,
		autoplayDisableOnInteraction: false,
		pagination:".swiper-pagination"
	})
	$(function(){
		function dh(){
			var pos=Math.abs($(".imgs").position().left);
			var t=(560-pos)*10000/560;
			$(".imgs").animate({"left":"-560px"},t,'linear',function(){
				$(".imgs").css("left","0px");
				dh();
			})
		}
		$(".imgs").css("width","1120px");
		$(".imgs .lb").clone().appendTo($(".imgs"));
		dh();
		$('.pics').mousemove(function(){
			$(".imgs").stop();
		})
		$('.pics').mouseleave(function(){
			dh();
		})
		var w=$("section").width();
		var i=0;
		$(".sidebar").css("left",-w*0.6+"px");
		$("#sidebar").click(function(){
			var index=$(this).index();
			if(i%2==0){
				$(".sidebar").animate({"left":"0px"},500,function(){
					$(".sidebar").css("left","0px");
				})
				$("section").animate({"margin-left":w*0.6+"px"},500,function(){
					$("section").css("margin-left",w*0.6+"px");
				})
			}
			if(i%2!=0){
				$(".sidebar").animate({"left":-w*0.6+"px"},500,function(){
					$(".sidebar").css("left",-w*0.6+"px");
				})
				$("section").animate({"margin-left":"0px"},500,function(){
					$("section").css("margin-left","0px");
				})
			}
			i++;
		})
	})
	
})
