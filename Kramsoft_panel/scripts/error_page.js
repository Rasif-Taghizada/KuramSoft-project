
$(document).ready(function () {


    var counter = 10;
    var gobackpagecounter = true;
    GoBackPage();

    $('.em-stopper').click(function () { gobackpagecounter = false; $(this).hide(); });

    function GoBackPage() {

        if (gobackpagecounter) {
            $(".em-counter").text(counter);
            counter = counter - 1;
            if (counter == 0) {
                $(".em-counter").text(counter);
                window.location.href = window.location.href;
            }
            else
                setTimeout(GoBackPage, 1000);
        }
    }


    $(".em-detail-show").click(function () {
        $(".error-messages-content").toggleClass("em-height-inherit", "slow", function () { $(".em-detail-show").hide(); });


    });

});
