$(document).ready(function(){

    $(document).ready(function(){
        $(".testOffer").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
    });

    $('.compl_test').click(function(){
        $('section.test').slideDown();
    })

    $('.test .next_btn').click(function(){
        if ($('#question1').is(':visible')) {
            $('#question1').fadeOut();
            $('#question2').delay(400).fadeIn();

            $('.test .scale .pointer').css('bottom', '69px');
            $('.test .scale .sum1000').addClass('active');
            $('.test .scale .sum0').removeClass('active');
        }
        if ($('#question2').is(':visible')) {
            $('#question2').fadeOut();
            $('#question3').delay(400).fadeIn();

            $('.test .scale .pointer').css('bottom', '138px');
            $('.test .scale .sum2000').addClass('active');
            $('.test .scale .sum1000').removeClass('active');
        }
        if ($('#question3').is(':visible')) {
            $('#question3').fadeOut();
            $('#question4').delay(400).fadeIn();

            $('.test .scale .pointer').css('bottom', '207px');
            $('.test .scale .sum3000').addClass('active');
            $('.test .scale .sum2000').removeClass('active');
        }
        if ($('#question4').is(':visible')) {
            $('#question4').fadeOut();
            $('#question5').delay(400).fadeIn();

            $('.test .scale .pointer').css('bottom', '276px');
            $('.test .scale .sum4000').addClass('active');
            $('.test .scale .sum3000').removeClass('active');
        }
        if ($('#question5').is(':visible')) {
            $('#question5').fadeOut();

            $('.test .scale .pointer').css('bottom', '346px');
            $('.test .scale .sum5000').addClass('active');
            $('.test .scale .sum4000').removeClass('active');
        }
        else {

        }
    });





});