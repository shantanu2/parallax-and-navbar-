$(document).ready(function () {

    $('.autoheight').matchHeight();
    $.fn.matchHeight._maintainScroll = true;

    $(document).ajaxSuccess(function () {
        $.fn.matchHeight._throttle = 1000;
        $.fn.matchHeight._apply('.autoheight');
    });

    // **********************************************************************// 
    // ! Search Example
    // **********************************************************************// 

    var getSearchTarget = $('.intro span.search-examples > span');
    var mainSearchInput = $('.intro .search-form input');
    getSearchTarget.click(function () {
        var text = $(this).text();
        mainSearchInput.val(text);
    });


    // **********************************************************************// 
    // ! OWl Sliders
    // **********************************************************************// 

    $(document).ready(function () {

        var owl = $(".sites #carousel");

        owl.owlCarousel({
            pagination: false,
            lazyLoad: true,
            items: 4, //10 items above 1000px browser width
            itemsDesktop: [1000, 4], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
        $(".play").click(function () {
            owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
        })
        $(".stop").click(function () {
            owl.trigger('owl.stop');
        })

    });

    $(document).ready(function () {
        var owl2 = $(".slider-wrapper #slider");

        owl2.owlCarousel({

            navigation: false, // Show next and prev buttons
            /*pagination: true,*/
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });
        // Custom Navigation Events
        $(".next").click(function () {
            owl2.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl2.trigger('owl.prev');
        })

    });


    // **********************************************************************// 
    // ! SITE REVIEWS LOAD MORE
    // **********************************************************************//	

    // bonuses
    $(function () {

        var element = $('.bookmaker-bonuses');
        var url = element.data('page') + '.json';
        var bonuses_limit = parseInt(element.data('limit'));
        var bonuses_offset = bonuses_limit;

        $('#bonuses-loading').on('click', function () {

            $.get(url, {
                bonuses_limit: bonuses_limit,
                bonuses_offset: bonuses_offset
            }, function (data) {

                if (data.bonuses_more === false) {
                    $('#bonuses-loading').hide();
                }

                element.children().last().after(data.bonuses_html);

                bonuses_offset += bonuses_limit;
            });
        });
    });

    // betting-sites
    $(function () {

        var element = $('.bookmaker-site-reviews');
        var url = element.data('page') + '.json';
        var sites_limit = parseInt(element.data('limit'));
        var sites_offset = sites_limit;

        $('#sites-loading').on('click', function () {

            $.get(url, {
                sites_limit: sites_limit,
                sites_offset: sites_offset
            }, function (data) {

                if (data.sites_more === false) {
                    $('#sites-loading').hide();
                }

                element.children().last().after(data.sites_html);

                sites_offset += sites_limit;
            });
        });
    });

    // user-reviews
    $(function () {

        var element = $('.bookmaker-user-reviews');
        var url = element.data('page') + '.json';
        var user_reviews_limit = parseInt(element.data('limit'));
        var user_reviews_offset = user_reviews_limit;

        $('#user-reviews-loading').on('click', function () {

            $.get(url, {
                user_reviews_limit: user_reviews_limit,
                user_reviews_offset: user_reviews_offset
            }, function (data) {

                if (data.user_reviews_more === false) {
                    $('#user-reviews-loading').hide();
                }

                element.children().last().after(data.user_reviews_html);

                user_reviews_offset += user_reviews_limit;
            });
        });
    });

    // complaints
    $(function () {

        var element = $('.bookmaker-user-complaints');
        var url = element.data('page') + '.json';
        var complaints_limit = parseInt(element.data('limit'));
        var complaints_offset = complaints_limit;

        $('#complaints-loading').on('click', function () {

            $.get(url, {
                complaints_limit: complaints_limit,
                complaints_offset: complaints_offset
            }, function (data) {

                if (data.complaints_more === false) {
                    $('#complaints-loading').hide();
                }

                element.children().last().after(data.complaints_html);

                complaints_offset += complaints_limit;
            });
        });
    });




}); /* END DOCUMENT READY*/
