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
        if (innerWidth <=767 && $('#question1').is(':visible')) {
            $('.test .scale .pointer').css('bottom', '37px');
        }
        if (innerWidth <=767 && $('#question2').is(':visible')) {
            $('.test .scale .pointer').css('bottom', '78px');
        }
        if (innerWidth <=767 && $('#question3').is(':visible')) {
            $('.test .scale .pointer').css('bottom', '119px');
        }
        if (innerWidth <=767 && $('#question4').is(':visible')) {
            $('.test .scale .pointer').css('bottom', '161px');
        }
        if (innerWidth <=767 && $('#question5').is(':visible')) {
            $('.test .scale .pointer').css('bottom', '202px');
        }
        else {

        }
    });

    $('.noteHolder>input').hover(
        function(){
            $('.noteHolder>.note').css('display', 'block');
        },
        function(){
            $('.noteHolder>.note').css('display', 'none');
        }
    );


    $('.countdown').downCount({
        date:'06/03/2018 18:00:00',
        offset: +10
    }, 
    function () {
        alert('WOOT WOOT, done!');
    });

    if (innerWidth <= 600) {
        $('section.rate .mobile_wrap').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          loop:false
        });
    }


});

