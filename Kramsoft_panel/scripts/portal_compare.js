

$(document).ready(function () {

    // Next

    $(".portal-wiz-button-next").click(function () {

        var index = $(".portal-wiz-tab li.active").index();
        index++;
        $('.portal-wiz-tab li:eq(' + index + ') a').tab('show')
        $('.portal-wiz-tab li:eq(' + index + ')').removeClass("disable");

    });

    // Previous

    $(".portal-wiz-button-previous").click(function () {

        var index = $(".portal-wiz-tab li.active").index();
        index--;
        if (index >= 0) {
            $('.portal-wiz-tab li:eq(' + index + ') a').tab('show')
        }


    });

    if ($(".portal-wiz-tab li.app").length > 0) {
        a = $(".portal-wiz-tab li.app:first");
        b = $(".portal-wiz-tab li.app:last");
        a.css("border-top", "1px dashed #bdc3c7");
        b.css("border-bottom", "1px dashed #bdc3c7");
    }



});