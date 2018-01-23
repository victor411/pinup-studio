function getTargetTop(elem) {

    //gets the id of the section header
    //from the navigation's href e.g. ("#html")
    var id = elem.attr('href');

    //Gets the distance from the top and 
    //subtracts the height of the nav.

    if ($(id).offset()) {
        return $(id).offset().top - 10;
    }
    return 0

}

//Smooth scroll when user click link that starts with #
$('#nav a[href^="#"]').click(function(event) {

    //gets the distance from the top of the 
    //section refenced in the href.
    var target = getTargetTop($(this));
    //scrolls to that section.

    $('html, body').animate({
        scrollTop: target
    }, 700);

    //prevent the browser from jumping down to section.
    event.preventDefault();

});


function getTargetLeft(elem) {

    //gets the id of the section header
    //from the navigation's href e.g. ("#html")
    var id = elem.attr('href');

    //Gets the distance from the top and 
    //subtracts the height of the nav.
    console.log($(id))
    if ($(id).offset()) {
        return $(id).innerWidth();
    }
    return 0

}

//Smooth scroll when user click link that starts with #
$('.scroll a[href^="#"]').click(function(event) {

    //gets the distance from the top of the 
    //section refenced in the href.
    var target = getTargetLeft($(this));
    //scrolls to that section.
    console.log(target)

    $('#services').animate({
        scrollLeft: target
    }, 700);

    //prevent the browser from jumping down to section.
    event.preventDefault();

});

$(document).ready(function() {

    $(".cross").hide();
    $(".sub-menu").hide();
    $(".hamburger").click(function() {
        $(".sub-menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $(".sub-menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

});