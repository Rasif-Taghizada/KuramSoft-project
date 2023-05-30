

$(document).ready(function () {


    ///nav-4
    $(".workflow-toggle").click(function (e) {
        e.stopPropagation();
        var div = $(this).closest('.toggle-theme').find('ul');
        div.mouseleave(function () { div.hide("fade"); });
        div.toggle("fade");
        div.css({ right: 0 });
    });



});