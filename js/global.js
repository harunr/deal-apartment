(function(a){a(function(){a("#burger").click(function(){a("#menu").slideToggle();a("body").toggleClass("navShown")});a("#tab-wrap > div").hide();a("#tab-wrap > div:first").show();a("#tab-trigger > li:first").addClass("tab-active");a("#tab-trigger > li > a").on("click",function(b){b.preventDefault();a("#tab-trigger > li").removeClass("tab-active");a(this).parent().addClass("tab-active");a("#tab-wrap > div").hide();a(a(this).attr("href")).show()})})})(jQuery);