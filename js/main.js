
jQuery(document).ready(function () {
    if (jQuery(".fancybox").length != 0) {
        jQuery(".fancybox").fancybox({
            openEffect: "none",
            closeEffect: "none"
        });
    }
    if (jQuery(".previous").length != 0) {
        jQuery(".previous").on('click', function () {
            if (jQuery(".current").prev('article').length != 0) {
                jQuery(".current").addClass('hide').removeClass('current').prev('article').removeClass('hide').addClass('current');
                jQuery(".next").removeClass('disabled');
                if (jQuery(".current").prev('article').length == 0) {
                    jQuery(".previous").addClass('disabled');
                } else {
                    jQuery(".previous").removeClass('disabled');
                }
                jQuery('html, body').animate({
                    scrollTop: jQuery("article").offset().top
                }, 2000);
            }
        })

    }

    if (jQuery(".next").length != 0) {
        jQuery(".next").on('click', function () {
            if (jQuery(".current").next('article').length != 0) {
                jQuery(".current").addClass('hide').removeClass('current').next('article').removeClass('hide').addClass('current');
                jQuery(".previous").removeClass('disabled');
                if (jQuery(".current").next('article').length == 0) {
                    jQuery(".next").addClass('disabled');
                } else {
                    jQuery(".next").removeClass('disabled');
                }
                jQuery('html, body').animate({
                    scrollTop: jQuery("article").offset().top
                }, 2000);
            }
        })
    }

    if (jQuery(".nav-container").length > 0){
        jQuery(".nav-container .nav-tabs a").click(function(){
            jQuery(".nav-container .nav-tabs li").removeClass("active");
            jQuery(this).parents("li").addClass("active");
            
            var text = jQuery(this).text().toLowerCase();
            jQuery(".tabs-container").removeClass("active");
            jQuery("#" + text + "-container").addClass("active");
        });


    }
    

});

  