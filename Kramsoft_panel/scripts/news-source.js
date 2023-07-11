$(document).ready(function () {

    $(".toggle-privacy-trigger").click(function (e) {
        e.stopPropagation();
        $('.toggle-privacy-btn').hide();
        var div = $(this).closest('li').find('.toggle-privacy-btn');
        div.toggle();

    });

    $(".ns-content-text p").shorting({ limit: 200, text: "...Devamını Gör" });

});


(function($){

	$.fn.shorting = function(options){
		var sets = $.extend({
            'limit'	: 20,
			'text'  : 'Devamını Gör'
		}, options);
        return this.each(function(){
			var nesne = $(this);
            var textmetin = $.trim(nesne.text());
			var length = textmetin.length;
			if (length > sets.limit){
				var text = textmetin;
                sets.text = ' <a href="#" class="shorting-show">'+sets.text+'</a>';
				var shortText = text.substr(0, sets.limit) + sets.text;
				$(this).html(shortText);
			}
			$("a.shorting-show").click(function(){
				$(this).closest('p').html(text);
				return false
			});
			
		});
	
	}

})(jQuery);