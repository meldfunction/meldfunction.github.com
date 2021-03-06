/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$('#btn, #btn2, #btn3, #btn4').click(function () {
 return false;
});

$('#btn').hover(function(e) {    
    $('#explore').fadeOut('slow', function(){
        $('#communidad').fadeIn('slow');

    });
});
$('#btn2').hover(function(e) {    
    $('#crucible').fadeOut('slow', function(){
        $('#crisol').fadeIn('slow');
        
    });
});
$('#btn3').hover(function(e) {    
    $('#btn3').fadeOut('slow', function(){
        $('#servicios').fadeIn('slow');
    });
});
$('#btn4').hover(function(e) {    
    $('#btn4').fadeOut('slow', function(){
        $('#apprender').fadeIn('slow');
    });
});
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
