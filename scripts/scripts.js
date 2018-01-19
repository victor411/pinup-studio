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
$(document).ready(function() {

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

});