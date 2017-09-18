var app=angular.module("homeModule",[]);
app.controller("home",function($scope){
	$(function(){
		var i=0;
		function app(s){
			$("#lunbo li").eq(s).addClass("bg").siblings().removeClass("bg");
			$(".pics img").eq(s).fadeIn().siblings().fadeOut();
		}
		var timer=null;
		function ogg(){
			i++;
			if(i>=2){
				i=0;
			}
			app(i);
		}
		timer=setInterval(ogg,2000);
		$("#lunbo li").mouseover(function(){
			clearInterval(timer);
			var index=$(this).index();
			i=index;
			app(i);
		})
		$(".pics").mouseenter(function(){
			clearInterval(timer);
		})
		$(".pics").mouseleave(function(){
			timer=setInterval(ogg,2000);
		})
		$("#dong li").click(function(){
			var index=$(this).index();
			$(".tui").siblings("div").css("left",800*index+"px");
			$(".tui").animate({"left":-index*800+"px"},300,function(){
				$(".tui").css("left",-index*800+"px");
			})
			$(".tui").eq(index).animate({"left":"0px"},300,function(){
				$(".tui").eq(index).css("left",index*800+"px");
			})
		})
		var cur=0;
		function setDiv(cur){
			$(".curli").removeClass("curli");
			$(".show").removeClass("show");
			$(".fen2 li").eq(cur).addClass("curli");
			$(".fen2 div").eq(cur).addClass("show");
		}
		$(".fen2 li").mouseover(function(){
			cur=$(this).index();
			setDiv(cur);
		})
		$(".nav>ul>li").mouseover(function(){
			$(".nav>ul>li").find('div').css("visibility","hidden");
			$(this).find("div").css("visibility","visible");
		})
		$(".nav>ul>li").mouseleave(function(){
			$(".nav>ul>li").find('div').css("visibility","hidden");
		})
	})
})
