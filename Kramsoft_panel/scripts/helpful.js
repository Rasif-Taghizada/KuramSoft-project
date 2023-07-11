$(document).ready(function () {

    $(".helpful-toggle").click(function () {


        $(".page-helpful").toggle("fade", { direction: "right" });

    });


    $(".page-helpful").resizable({
        handles: ' w',
        resize: function (event, ui) {
            ui.size.width = ui.originalSize.width;
        }
    });


    $(".helpful-closing-button a").click(function () {

        $(".page-helpful").hide();

    });


});