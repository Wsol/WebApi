!function($){Materialize.fadeInImage=function(selector){var element=$(selector);element.css({opacity:0}),$(element).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),$(element).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(now,fx){fx.start=100;var grayscale_setting=now/100,brightness_setting=150-(100-now)/1.75;100>brightness_setting&&(brightness_setting=100),now>=0&&$(this).css({"-webkit-filter":"grayscale("+grayscale_setting+")brightness("+brightness_setting+"%)",filter:"grayscale("+grayscale_setting+")brightness("+brightness_setting+"%)"})}})},Materialize.showStaggeredList=function(selector){var time=0;$(selector).find("li").velocity({translateX:"-100px"},{duration:0}),$(selector).find("li").each(function(){$(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:time,easing:[60,10]}),time+=120})},$(document).ready(function(){var swipeLeft=!1,swipeRight=!1;$(".dismissable").each(function(){$(this).hammer({prevent_default:!1}).bind("pan",function(e){if("touch"===e.gesture.pointerType){var $this=$(this),direction=e.gesture.direction,x=e.gesture.deltaX,velocityX=e.gesture.velocityX;$this.velocity({translateX:x},{duration:50,queue:!1,easing:"easeOutQuad"}),4===direction&&(x>$this.innerWidth()/2||-.75>velocityX)&&(swipeLeft=!0),2===direction&&(x<-1*$this.innerWidth()/2||velocityX>.75)&&(swipeRight=!0)}}).bind("panend",function(e){if(Math.abs(e.gesture.deltaX)<$(this).innerWidth()/2&&(swipeRight=!1,swipeLeft=!1),"touch"===e.gesture.pointerType){var $this=$(this);if(swipeLeft||swipeRight){var fullWidth;fullWidth=swipeLeft?$this.innerWidth():-1*$this.innerWidth(),$this.velocity({translateX:fullWidth},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){$this.css("border","none"),$this.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){$this.remove()}})}})}else $this.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});swipeLeft=!1,swipeRight=!1}})})})}(jQuery);