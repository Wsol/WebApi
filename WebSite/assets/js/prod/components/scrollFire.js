!function($){Materialize.scrollFire=function(options){var didScroll=!1;window.addEventListener("scroll",function(){didScroll=!0}),setInterval(function(){if(didScroll){didScroll=!1;for(var windowScroll=window.pageYOffset+window.innerHeight,i=0;i<options.length;i++){var value=options[i],selector=value.selector,offset=value.offset,callback=value.callback,currentElement=document.querySelector(selector);if(null!==currentElement){var elementOffset=currentElement.getBoundingClientRect().top+window.pageYOffset;if(windowScroll>elementOffset+offset&&value.done!==!0){var callbackFunc=new Function(callback);callbackFunc(),value.done=!0}}}}},100)}}(jQuery);