
$(document).ready(function () {

    $(".edit-template").click(function () {

        $(".zones-area-template").toggle("blind");

    });

    $('ul.zac-applications-list > li > a').click(
        function (e) {
            e.preventDefault(); // prevent the default action
            e.stopPropagation; // stop the click from bubbling
            var number = $(this).attr('number');
            $(".zac-parts .zac-holder, .zac-empty").hide();
            $(".zac-parts #zac-part-item" + number.toString() + ".zac-holder").toggle("fade");

        });

    $(".zai-content-list").sortable({
        connectWith: ".zones-area-sorter",
        placeholder: "ui-state-highlight",
        helper: 'clone',
        revert: 'invalid'
    });

    $(".zac-parts-list li .zones-part").draggable({
        connectToSortable: ".zones-area-sorter",
        helper: 'clone',
        revert: 'invalid'
    }).disableSelection();

    ///nav-4
    $(".toggle-right").click(function (e) {
        e.stopPropagation();
        var div = $(this).closest('.toggle-theme').find('ul');
        div.mouseleave(function () { div.hide("fade"); });
        $("body").click(function () { div.hide("fade"); });
        div.toggle("fade");
        div.css({ right: 0 });
    });




});