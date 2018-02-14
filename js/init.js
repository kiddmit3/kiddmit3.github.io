(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready

  $(document).ready(function(){
      $('.carousel').carousel();
	});

  $(document).ready(function(){
      $('.collapsible').collapsible();
    });  

})(jQuery); // end of jQuery name space

 $('.carousel.carousel-slider').carousel({fullWidth: true},{indicators: true});
 autoplay()
 function autoplay(){
  $('.carousel').carousel('next');
  setTimeout(autoplay,6000);
 }

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  

// $(".dropdown-button").dropdown();
