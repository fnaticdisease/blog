
var ready = function() {
    $(".more").on("click",function(){
      
      $(this).parent().parent().toggleClass("active");
      $(this).toggleClass("rotated");
      
    });
    
   
    $(".like").on("click",function(){
        $(this).toggleClass("liked");              
                  
    }); 
    

  // Get started!
    $(".mobile-nav-toggle").on("click",function(){
        $(".mobile-nav").toggleClass("is-open");        
        $(this).toggleClass("is-open");
        
   
    
    });
    
     $('#target').on("click",function(){
        $('#output').html(function(i, val) { return val*1+1 });
});
     
         
 var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});  
};


$(window).scroll(function(){

    youtubeVidScroll();
    
    
});

function youtubeVidScroll(){
    var wScroll=$(window).scrollTop();
    
    $(".picture-strip").css('background-position','center -'+ wScroll/2 +'px');
    

}
$(document).ready(ready);
$(document).on('page:load', ready);


