$(document).ready(function () {


    var editmode = 0;
    $(".table-edit-panel").click(function () {
        if (editmode != 0) {
            editmode = 0;
            $(".edit-mode-wrapper, .form-edit-mode-wrapper").removeClass("show-edit");
        } else {
            editmode = 1;
            $(".edit-mode-wrapper, .form-edit-mode-wrapper").addClass("show-edit");
        }


    });


    //tabss
    $(".table-tabs").tabs();

    //acordion
    $(".form-accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });

    $(".table-tabs-close").click(function () {

        $('.page-content-frame').toggleClass("page-content-border");
        $(".table-tabs").toggle("blind");

    });

    $('.td-center').closest('td').css("text-align", "center");

    ///checkbox  

    $('.table-checkbox-all').click(function () {

        if ($('.table-checkbox-all').is(':checked')) {
            $(".table-checkbox").prop({
                checked: true
            });
            $('.table-action').show("highlight");
        } else {
            $(".table-checkbox").prop({
                checked: false
            });
            $('.table-action').hide("highlight");
        }

    });


    $('.table-checkbox').change(function () {

        if ($('.table-checkbox').is(':checked')) {
            $('.table-action').show("highlight");
        } else {
            $('.table-action').hide("highlight");
        }
    });

    // header-----------------------------------------------------------------------


    ///nav-1
    $(".page-source-site-link").click(function (e) {
        e.stopPropagation();
        var div = $(this).closest('.toggle-theme').find('ul');
        $("body").click(function () { div.hide("fade"); });
        div.toggle("fade");
        div.css({ top: 30 });
    });

    ///nav-2
    $(".page-personal-link").click(function (e) {
        e.stopPropagation();
        var div = $(this).closest('.toggle-theme').find('ul');
        $("body").click(function () { div.hide("fade"); });
        div.toggle("fade");
        div.css({
            right: 0,
            top: 40
        });
        div.addClass("ttr");
    });

    ///nav-3
    $(".page-sitemap-link").click(function (e) {
        e.stopPropagation();
        var div = $(this).closest('.toggle-theme').find('ul');
        $("body").click(function () { div.hide("fade"); });
        div.toggle("fade");
        div.css({ top: 40 });
    });

    ///table edit 

    $(".table-edit-mode.tog1").click(function (e) {
        e.stopPropagation();
        var p = $(this).offset();
        var tableleft = p.left;
        var tabletop = p.top + 35;

        $(".toggle-theme-table.tog1").css({
            left: tableleft,
            top: tabletop,
            display: "block"
        });

        $("body").click(function () { $(".toggle-theme-table.tog1").hide("fade"); });
    });


    $(".edit-mode-wrapper > a.tog2").click(function (e) {
        e.stopPropagation();
        var p = $(this).offset();
        var tableleft = p.left;
        var tabletop = p.top + 37;

        $(".toggle-theme-table.tog2").css({
            left: tableleft,
            position: 'fixed',
            zIndex: '9999',
            top: tabletop,
            display: "block"
        });

        $("body").click(function () { $(".toggle-theme-table.tog2").hide("fade"); });
        $("body").scroll(function () { $(".toggle-theme-table.tog2").hide("fade"); });
    });

    $(".form-edit-mode-wrapper").each(function () {
        //document.write($(this).parent().attr('class'));
        $(this).insertBefore($(this).parent('.control-label'));
    });

    $(".form-edit-mode-wrapper > a.tog3").click(function (e) {
        e.stopPropagation();
        $(".toggle-theme-table.tog3").hide();
        var p = $(this).offset();
        var tableleft = p.left - 200;
        var tabletop = p.top - 150;


        if ($(".page-content").css("margin-left") == "60px") {
            tableleft = tableleft + 140;
        }





        var aranan = ".toggle-theme-table.tog3[num=" + $(this).attr('num') + ']';
        $(aranan).css({
            left: tableleft,
            zIndex: '9999',
            top: tabletop,
            display: "block"
        });

        $("body").click(function () { $(".toggle-theme-table.tog3").hide("fade"); });
    });







    // page-sidebar-package-----------------------------------------------------------------------

    //packages
    $('ul.page-sidebar-package > li > a').click(
			function (e) {
			    e.preventDefault(); // prevent the default action
			    e.stopPropagation; // stop the click from bubbling
			    $(this).closest('ul').find('.selected').removeClass('selected');
			    $(this).parent().addClass('selected');

			    $('ul.page-sidebar-package-min').find('.selected').removeClass('selected');
			    $('ul.page-sidebar-package-min li:eq(' + $(this).parent().index() + ')').addClass('selected');


			});

    //normal wiew
    $('.page-sidebar-nav-header').tendina({
        animate: true,
        speed: 500,
        hoverDelay: 300
    })

    $('ul.page-sidebar-nav-header > li:eq(0) > a').trigger("click");

    //minimum wiew
    $('.page-sidebar-nav-min').tendina({
        animate: false,
        speed: 200,
        hoverDelay: 100,
        onHover: true
    });

    $(".page-sidebar-nav-min ul").mouseleave(function () {
        $(".page-sidebar-nav-min ul").hide();
    });

    //close button  
    $(".page-sidebar-closing-button").click(function () {


        $('.page-sidebar').toggle("drop");
        $('.page-sidebar-min').toggle("drop");
        $('.page-content').toggleClass("page-content-min", "drop");
        $('.page-header-fixed-top').toggleClass("page-header-fixed-top-role", "drop");

    });

    function nav() {

        if ($("body").width() < 1000) {
            if ($('.page-sidebar-min').css("display") == "block") {

            } else {
                $('.page-sidebar').toggle("drop");
                $('.page-sidebar-min').toggle("drop");
                $('.page-content').toggleClass("page-content-min", "drop");
                $('.page-header-fixed-top').toggleClass("page-header-fixed-top-role", "drop");
            }
        }

    };


    nav();

    $(window).bind('resize', function () {

        nav();

    });




    // Tooltip only Text
    $('.kuramsoft-tooltip').hover(function () {
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="kuramsoft-tooltip-text"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');

    }, function () {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.kuramsoft-tooltip-text').remove();
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.kuramsoft-tooltip-text').css({ top: mousey, left: mousex })
    });









    //paginator------------------------------------------

    $('.table-tabs-add').hover(function () {
        $('.add-hidden').toggle();
    });

    var currentImage = 0;

    //set image count 
    var allImages = $('.table-tabs > ul > li').length;
    if (allImages >= 1) {
        $('.table-tabs-pagination-direction').show();
    }
    if (1 < allImages) {
        allImages = Math.ceil(allImages / 1);
        $('.table-tabs > ul').width((allImages * imageWidth) + 200);
    }


    //setup slideshow frame width page-content-frame

    //attach click event to slideshow buttons
    $('.table-tabs-next').click(function () {

        //increase image counter
        currentImage++;
        //if we are at the end let set it to 0
        if (currentImage + Math.round($('.table-tabs > ul').parent().width() / 150) - 1 >= allImages) currentImage = 0;
        //calcualte and set position
        setFramePosition(currentImage);

    });

    $('.table-tabs-prev').click(function () {

        //decrease image counter
        currentImage--;
        //if we are at the end let set it to 0
        if (currentImage < 0) currentImage = 0;
        //calcualte and set position
        setFramePosition(currentImage);

    });


    $(".filter-gallery-link").click(function (e) {

        e.preventDefault(); // prevent the default action
        e.stopPropagation; // stop the click from bubbling
        $(this).closest('ul').find('.selected').removeClass('selected');
        $(this).parent().addClass('selected');

        var number = $(this).attr('data-value');

        if (number == "all") {
            $(".filter-gallery-item").parent().css("display", "block");
        } else {
            $(".filter-gallery-item").parent().css("display", "none");
            $('.filter-gallery-item.' + number + '').parent().css("display", "block");
        }
    });

    $('.fg-content-profile .controlling').click(function () {
        var position = ($(".filter-gallery-item").width() / 2) + 40;
        if ($(this).parent().hasClass("open")) {
            $(this).next().animate({ "width": "0%" });
            $(this).animate({ right: "40px" });
            $(this).parent().removeClass("open");
        } else {
            $(this).next().animate({ "width": "50%" });
            $(this).animate({ right: "" + position + "px" });
            $(this).parent().addClass("open");

        }

    });



    $('#app-img-slide').carousel();


    if ($(".app-detail-list").length > 0) {
        $('a[href*=#]').click(function () {


            $(this).closest('ul').find('.selected').removeClass('selected');
            $(this).parent().addClass('selected');

            var height = ($($(this).attr('href')).offset().top) - 110;
            $('html, body').animate({
                scrollTop: height
            }, 500);
            return false;
        });

        $(function () {
            var $sidebar = $(".app-detail-list"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 90;

            $window.scroll(function () {
                if ($window.scrollTop() > offset.top) {
                    $sidebar.stop().animate({
                        marginTop: $window.scrollTop() - offset.top + topPadding
                    }, 400);
                } else {
                    $sidebar.stop().animate({
                        marginTop: 0
                    }, 400);
                }
            });
        });
    }
});
var imageWidth = 150;

function setFramePosition(pos) {

    //calculate position
    var px = imageWidth * pos * -1;
    //set ul left position
    $('.table-tabs > ul').animate({
        'margin-left': px
    }, 300);
}



function CheckControlEvent(sobject, messagedelete, messageupdate) {
    var myindex = sobject.selectedIndex;
    var SelValue = sobject.options[myindex].value;

    if (SelValue == "UPD") {
        if (confirm(messageupdate)) {
            return true;
        }
        else return false;
    }
    else if (SelValue == "DEL") {
        if (confirm(messagedelete)) {
            return true;
        }
        else return false;
    }
    else return true;
}


