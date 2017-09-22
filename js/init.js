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

 $('.carousel.carousel-slider').carousel({fullWidth: true});