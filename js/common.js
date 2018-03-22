$(document).ready(function(){

/*SHOW TEST WINDOW*/
    $('.compl_test').click(function(){
        $('section.test').slideDown();
    })



/*TEST'S SLIDER*/
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
            $('#question6').delay(400).fadeIn();
            $('.next_btn').fadeOut();

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


/*NOTE IN CALCULATOR'S INPUT*/
    $('.noteHolder>input').hover(
        function(){
            $('.noteHolder>.note').css('display', 'block');
        },
        function(){
            $('.noteHolder>.note').css('display', 'none');
        }
    );

/*COUNTDOWN IN RATES*/
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
          arrows:false,
          loop:false
        });
    }

/*POPUP*/
    $('#popupBackground').click(function(){
        $('#popupBackground').fadeOut();
        $('.popup').fadeOut();
    });
    $('.close').click(function(){
        $('#popupBackground').fadeOut();
        $('.popup').fadeOut();
    });
    $('.showCallback').click(function(){
        $('#popupBackground').fadeIn();
        $('#callback').fadeIn();
    });
    $('.callback').click(function(){
        $('#popupBackground').fadeIn();
        $('#callback').fadeIn();
    });
    $('.consult').click(function(){
        $('#popupBackground').fadeIn();
        $('#callback').fadeIn();
    });

/*SLOWSCROLL*/
    $(document).ready(function(){
        $("body").on("click","header .col-xs-5 a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });

/*CALCULATOR*/
    $('.count').click(function(){
        var markup = $('#markup').val()*1;
        var personCost = $('#personCost').val()*1;
        var amount = $('#amount').val()*1;
        var result1 = markup - personCost;
        var final = result1 * amount;
        $('#result').val(final);
    });


    $('input').hover(function(){
        $(this).focus();
    });


//E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../libs/uniMail-master/script/mail.php",
            data: th.serialize()
        }).done(function() {
            $('#popupBackground').fadeOut();
            $('.popup').fadeOut();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });




});


