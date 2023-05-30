

$(document).ready(function () {

    $(".line-closed").click(function () {

        $(".task-analysis").toggle("slow");
        $(".line-closed i").toggleClass("fa-angle-double-down");
    });

});