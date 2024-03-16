$(document).ready(function(){

    var slides = $('.slide');
    var dots = $('.dots');
    var currentSlide = 1;
    
    setInterval(nextSlide, 3000); 
    
    function nextSlide() {
    
      slides.eq(currentSlide-1).removeClass('active'); 
      dots.find('span').eq(currentSlide-1).removeClass('active');
    
      if(currentSlide == slides.length) {
        currentSlide = 1;
      } else {
        currentSlide++; 
      }
      
      slides.eq(currentSlide-1).addClass('active');
      dots.find('span').eq(currentSlide-1).addClass('active');
    
    }
  
    for(var i = 0; i < slides.length; i++) {
      dots.append('<span></span>') 
    }
  
  });