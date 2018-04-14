jQuery(document).ready(function() {
$('#myCarousel').carousel({
    interval: 0
})

$('#myCarousel').on('slid.bs.carousel', function () {
    //alert("slid");
});


});

(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // http://getbootstrap.com/javascript/#carousel
  $('#carouselivo').carousel({ interval: 2000 });
  
}());

(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());


/////////////////////////////////// Video/////////////////////////////////////



  autoPlayYouTubeModal();

  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
          $('.modal').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }
  
  
//////////////////////////// Slideshow /////////////////////////////
var slideIndex = 0;
advanceSlideshow();

function advanceSlideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(advanceSlideshow, 3000); // Change image every 2 seconds
}



  
//////////////////////////// Smooth Scroll /////////////////////////////

$(".noselect").on('click',  function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top 
    }, 500);
});



// $(document).on('click', 'a', function(event){
    // event.preventDefault();

    // $('html, body').animate({
        // scrollTop: $( $.attr(this, 'href') ).offset().top 
    // }, 500);
// });


/////////////////////// Model //////////////////////////


var $popoversettings = $('.settings').popover({
    html: true,
    placement: 'right',
    content: function () {
        var mySettings = $(this).data('mysettings');
        return $(mySettings).html();
    }
});


$(':not(#anything)').on('click', function (e) {
    $popoversettings.each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            // before hide update original elements
            
            $(this).popover('hide');
            return;
        }
    });
});


$(document).on('change', '#list', function () {
    $('#result').html($('#list option:selected').val());
}).change();


/*var form = document.getElementById('register-form'); 
form.noValidate = true;
form.addEventListener('submit', function(event) { // listen for form submitting
        if (!event.target.checkValidity()) {
            event.preventDefault(); // dismiss the default functionality
            alert('Please, fill out the form'); // error message
        }
    }, false);*/


$(document).on('change', '#list', function () {
    $('#result').html($('#list option:selected').val());
}).change();


// var form = document.getElementById('contact-form'); // form has to have ID: <form id="formID">
// form.noValidate = true;
// form.addEventListener('submit', function(event) { // listen for form submitting
        // if (!event.target.checkValidity()) {
            // event.preventDefault(); // dismiss the default functionality
            // alert('Please, fill out the form'); // error message
        // }
    // }, false);


$(document).on('change', '#list', function () {
    $('#result').html($('#list option:selected').val());
}).change();


// var form = document.getElementById('update-form'); // form has to have ID: <form id="formID">
// form.noValidate = true;
// form.addEventListener('submit', function(event) { // listen for form submitting
        // if (!event.target.checkValidity()) {
            // event.preventDefault(); // dismiss the default functionality
            // alert('Please, fill out the form'); // error message
        // }
    // }, false);



/////////////////////////////Mobile /////////////////////////////////////////


$(document).ready(function()
{
    $('#thumbCarousel').carousel({
		interval: 3000
	})
});

/* affix the Carousel Buttons to Carousel Item on scroll */
$('.nav-carousel').bind({
	offset:
	{
		top: $('#thumbCarousel').height()-$('.nav-carousel').height()
	}
});

$(document).ready( function()
{
	var carouselContainer = $('.carousel');
	var slideInterval = 2500;
	
	$('#carousel').carousel({
		interval:   slideInterval
	});
	
	var clickEvent = false;
	$('#thumbCarousel').on('click', '.nav-carousel a', function() {
			clickEvent = true;
			$('.nav-carousel li').removeClass('active');
			$(this).parent().addClass('active');	
	}).on('slid.bs.carousel', function(e)
	{
		if(!clickEvent)
		{
			var count = $('.nav-carousel').children().length -1;
			var current = $('.nav-carousel li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id)
			{
				$('.nav-carousel li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});




////////////////////////////////// Agenga////////////////////////////////////

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});


///////////////////// collpase////////////////// 

	$(document).on('hide.bs.collapse',function(){
    $('.collapse').collapse('hide');
})