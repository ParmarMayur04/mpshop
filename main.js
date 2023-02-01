'use strict';

(function ($) {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dots:true,
    smartSpeed:2000,
    autoHeight:false,
    autoplay:true,
    responsiveClass:true,
    responsiveClass:true
  })
 /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    jQuery("#countdown-time").countdown(timerdate, function(event) {
        jQuery(this).html(event.strftime("<div class='countdown_item'><span>%D</span> <p>Day</p> </div>" + "<div class='countdown_item'><span>%H</span> <p>Hour</p> </div>" + "<div class='countdown_item'><span>%M</span> <p>Min</p> </div>" + "<div class='countdown_item'><span>%S</span> <p>Sec</p> </div>"));
    });
})(jQuery);

{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="Wpshop%20Ecommerce%20Website%20Template%20Using%20HTML,%20CSS%20&amp;%20Bootstrap_files/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
<link rel="stylesheet" href="style.css"></link> */}