function getTargetTop(elem) {


    var id = elem.attr('href');


    if ($(id).offset()) {
        return $(id).offset().top - 10;
    }
    return 0

}


$('#nav a[href^="#"]').click(function(event) {


    var target = getTargetTop($(this));

    $('html, body').animate({
        scrollTop: target
    }, 700);


    event.preventDefault();

});


function getTargetLeft(elem) {


    var id = elem.attr('href');

    if ($(id).position()) {
        return $(id).position().left;
    }
    return 0

}


$('.scroll.services a[href^="#"]').click(function(event) {


    var target = getTargetLeft($(this));

    console.log(target)

    $('#services').animate({
        scrollLeft: target
    }, 700);


    event.preventDefault();

});

$('.scroll.contact a[href^="#"]').click(function(event) {


    var target = getTargetLeft($(this));

    console.log(target)

    $('#contact').animate({
        scrollLeft: target
    }, 700);


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

    $(".btn_header a").click(function() {
        $(".great_massage").slideToggle("slow", function() {}).css('display', 'flex');
    });
    $(".great_massage").click(function() {
        $(".great_massage").hide();
    });
})

$(".btn_service a").click(function() {
    $(".bag_hair").slideToggle("slow", function() {}).css('display', 'flex');
});
$(".bag_hair").click(function() {
    $(".bag_hair").hide();
});