

$(document).ready(function () {


    if ($(".users-messages-list").length > 0) {

        $('.users-messages-list').animate({ scrollTop: $(".users-messages-list li:last-child").offset().top });

    }



    ///////////// Chat panel /////////

    $(".online-user li a").click(function () {

        $('.chat-panel-messages').animate({ scrollTop: $(".chat-panel-messages li:last-child").offset().top });

    });

    $(".cp-closebutton").click(function () {

        $(".chat-panel-online").toggleClass("back", "slow");

    });

    $(".page-chat-button").click(function () {

        $(".page-chat-panel").toggle("Blind");

    });

});