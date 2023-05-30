
$(document).ready(function () {


    $(".wizard-button-next").click(function () {

        var index = $(".wizard-nav li.active").index();
        index++;
        $('.wizard-nav li:eq(' + index + ') a').tab('show')
        $('.wizard-nav li:eq(' + index + ')').removeClass("disable");

    });

    $(".wizard-button-previous").click(function () {

        var index = $(".wizard-nav li.active").index();
        index--;
        if (index >= 0) {
            $('.wizard-nav li:eq(' + index + ') a').tab('show')
        }


    });

//    $(".management-table-item").hover(function () {

//        $(this).children(".management-table-item-actions").toggle("fade", "1000");

//    });


    $(".mt-add-file").change(function () {

        if ($('input[class="mt-add-file active"]:checked').length > 0) {
            $(".hidden-file").show("fade")
        } else { $(".hidden-file").hide("fade") }
    })

});