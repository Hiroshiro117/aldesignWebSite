$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    $('.js--scroll-to-project').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-project').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-profile').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-profile').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-footer').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-footer').offset().top}, 1000); 
    });
    
    
    /*Animation of scroll   
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'50%'
    });
    
    */
    
   
     $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated wobble');
    },{
        offset:'50%'
    });
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon =$('.js--nav-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass ('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});