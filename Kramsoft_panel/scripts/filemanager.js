
$(document).ready(function () {

    $(".addmenu").click(function () {

        if ($(".fm-adddirectory").css("display") == "none") {
            $(".fm-addmenu").toggle('blind');
        }


    });
    $(".adddirectory").click(function () {

        if ($(".fm-addmenu").css("display") == "none") {
            $(".fm-adddirectory").toggle('blind');
        }

    });


});