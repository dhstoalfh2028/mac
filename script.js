$(document).ready(function() {
    $(".login").click(function(){
      $(".loginbox").toggleClass("active")
    })
    $('.test-slider').slick({    
       infinite: true ,      
       slidesToShow: 3,     
       slidesToScroll: 1,   
       dots: false         
    });
  });
