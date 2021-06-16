	    $(document).ready(function(){


    $(".facny").fancybox();


	    	setTimeout(startSliders(),50);	

	    function startSliders(){

      $('.sliderStore').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
  		prevArrow: '<button id="prev" type="button" class="btn btn-juliet l"><img src="images/arrow-store.png"></button>',
  		nextArrow: '<button id="next" type="button" class="btn btn-juliet r"><img src="images/arrow-store.png"></button>',
		  responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		      	arrows: false,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]




      });
      $('.sliderGoods').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		      	arrows: false,
  		prevArrow: '<button id="prev" type="button" class="btn btn-juliet l"><img src="../assets/templates/vostokcelitel/assets/images/arrow-goods.png"></button>',
  		nextArrow: '<button id="next" type="button" class="btn btn-juliet r"><img src="../assets/templates/vostokcelitel/assets/images/arrow-goods.png"></button>',
		  responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      	arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
      });

      $('.sliderRewive').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		      	arrows: true,
  		prevArrow: '<button id="prev" type="button" class="btn btn-juliet l"><img src="../assets/templates/vostokcelitel/assets/images/arrow-rewiev.png"></button>',
  		nextArrow: '<button id="next" type="button" class="btn btn-juliet r"><img src="../assets/templates/vostokcelitel/assets/images/arrow-rewiev.png"></button>',
		  responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 3,
		      	arrows: false,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		      	arrows: false,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		      	arrows: false,
  		  		centerMode: true,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
      });

      $('.sliderSerif').slick({
		  slidesToShow: 3,
  		  centerMode: true,
  		  arrows: false,
  		  dots: true,
		  slidesToScroll: 1
      });


      $('.charts_items').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		arrows: false,
		  responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]

      });
	    }

    });

$('.content_item-more img').on('click', function() {

	let mainImg = document.querySelector('.content_item-photo img');
	let clicked = this;
	clicked = clicked.getAttribute('src');
	$('.content_item-photo img').attr("src", clicked);
});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut(); // скрываем его
		}
	});

      $('.button_whatsApp').on('click', function() {     	
      		$('.popup').fadeIn();
      });

      $('.popup-whatsapp_button').on('click', function() {
      		$('.popup').fadeOut();
      });

      $('.popup-whatsapp_close a').on('click', function() {  
      		$('.popup').fadeOut();
      });
