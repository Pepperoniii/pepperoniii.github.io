$(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="../assets/templates/starbar/assets/images/slider-arrow-left.png"></button>',
	  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="../assets/templates/starbar/assets/images/slider-arrow-right.png"></button>',
	  responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
  });
});

	$(document).ready(function(){
  $('.slider-create').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="../assets/templates/starbar/assets/images/create-arrow-left.png"></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="../assets/templates/starbar/assets/images/create-arrow-right.png"></button>',
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
  });
});	

	$(document).ready(function(){
  $('.where-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="../assets/templates/starbar/assets/images/where-arrow-left.png"></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="../assets/templates/starbar/assets/images/where-arrow-right.png"></button>',
  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
  });
});	