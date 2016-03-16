!function($){$.fn.tooltip=function(options){var margin=5,defaults={delay:350};return"remove"===options?(this.each(function(){$("#"+$(this).attr("data-tooltip-id")).remove(),$(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(options=$.extend(defaults,options),this.each(function(){var tooltipId=Materialize.guid(),origin=$(this);origin.attr("data-tooltip-id",tooltipId);var tooltip_text=$("<span></span>").text(origin.attr("data-tooltip")),newTooltip=$("<div></div>");newTooltip.addClass("material-tooltip").append(tooltip_text).appendTo($("body")).attr("id",tooltipId);var backdrop=$("<div></div>").addClass("backdrop");backdrop.appendTo(newTooltip),backdrop.css({top:0,left:0}),origin.off("mouseenter.tooltip mouseleave.tooltip");var timeoutRef,started=!1;origin.on({"mouseenter.tooltip":function(e){var tooltip_delay=origin.attr("data-delay");tooltip_delay=void 0===tooltip_delay||""===tooltip_delay?options.delay:tooltip_delay,timeoutRef=setTimeout(function(){started=!0,newTooltip.velocity("stop"),backdrop.velocity("stop"),newTooltip.css({display:"block",left:"0px",top:"0px"}),newTooltip.children("span").text(origin.attr("data-tooltip"));var targetTop,targetLeft,newCoordinates,originWidth=origin.outerWidth(),originHeight=origin.outerHeight(),tooltipPosition=origin.attr("data-position"),tooltipHeight=newTooltip.outerHeight(),tooltipWidth=newTooltip.outerWidth(),tooltipVerticalMovement="0px",tooltipHorizontalMovement="0px",scale_factor=8;"top"===tooltipPosition?(targetTop=origin.offset().top-tooltipHeight-margin,targetLeft=origin.offset().left+originWidth/2-tooltipWidth/2,newCoordinates=repositionWithinScreen(targetLeft,targetTop,tooltipWidth,tooltipHeight),tooltipVerticalMovement="-10px",backdrop.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:tooltipHeight,marginLeft:tooltipWidth/2-backdrop.width()/2})):"left"===tooltipPosition?(targetTop=origin.offset().top+originHeight/2-tooltipHeight/2,targetLeft=origin.offset().left-tooltipWidth-margin,newCoordinates=repositionWithinScreen(targetLeft,targetTop,tooltipWidth,tooltipHeight),tooltipHorizontalMovement="-10px",backdrop.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:tooltipHeight/2,marginLeft:tooltipWidth})):"right"===tooltipPosition?(targetTop=origin.offset().top+originHeight/2-tooltipHeight/2,targetLeft=origin.offset().left+originWidth+margin,newCoordinates=repositionWithinScreen(targetLeft,targetTop,tooltipWidth,tooltipHeight),tooltipHorizontalMovement="+10px",backdrop.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:tooltipHeight/2,marginLeft:"0px"})):(targetTop=origin.offset().top+origin.outerHeight()+margin,targetLeft=origin.offset().left+originWidth/2-tooltipWidth/2,newCoordinates=repositionWithinScreen(targetLeft,targetTop,tooltipWidth,tooltipHeight),tooltipVerticalMovement="+10px",backdrop.css({marginLeft:tooltipWidth/2-backdrop.width()/2})),newTooltip.css({top:newCoordinates.y,left:newCoordinates.x}),scale_factor=tooltipWidth/8,8>scale_factor&&(scale_factor=8),("right"===tooltipPosition||"left"===tooltipPosition)&&(scale_factor=tooltipWidth/10,6>scale_factor&&(scale_factor=6)),newTooltip.velocity({marginTop:tooltipVerticalMovement,marginLeft:tooltipHorizontalMovement},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),backdrop.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:scale_factor},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},tooltip_delay)},"mouseleave.tooltip":function(){started=!1,clearTimeout(timeoutRef),setTimeout(function(){1!=started&&(newTooltip.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),backdrop.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){backdrop.css("display","none"),newTooltip.css("display","none"),started=!1}}))},225)}})}))};var repositionWithinScreen=function(x,y,width,height){var newX=x,newY=y;return 0>newX?newX=4:newX+width>window.innerWidth&&(newX-=newX+width-window.innerWidth),0>newY?newY=4:newY+height>window.innerHeight+$(window).scrollTop&&(newY-=newY+height-window.innerHeight),{x:newX,y:newY}};$(document).ready(function(){$(".tooltipped").tooltip()})}(jQuery);