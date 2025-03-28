(function($) {
    "use strict";
    
    // Preloader
    $(window).on('load', function() {
        $('.preloader').fadeOut(500);
    });
    
    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
        
        // Back to Top
        if (scroll >= 500) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    
    // Back to Top
    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });
    
    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function() {
        $('.mobile-menu').addClass('active');
    });
    
    // Close Mobile Menu
    $('.close-menu').on('click', function() {
        $('.mobile-menu').removeClass('active');
    });
    
    // Service Tabs
    $('.tab-btn').on('click', function() {
        var target = $(this).data('target');
        
        // Toggle active class for buttons
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        
        // Toggle active class for content
        $('.tab-pane').removeClass('active');
        $('#' + target).addClass('active');
    });
    
    // Initialize Swiper for Hero Slider
    var heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    
    // Lightbox for Gallery
    $('.gallery-item').on('click', function() {
        var imgSrc = $(this).find('img').attr('src');
        var title = $(this).find('h5').text();
        
        // Create lightbox elements
        var lightbox = $('<div class="lightbox"></div>');
        var lightboxContent = $('<div class="lightbox-content"></div>');
        var lightboxImg = $('<img src="' + imgSrc + '" alt="' + title + '">');
        var lightboxTitle = $('<h4>' + title + '</h4>');
        var lightboxClose = $('<span class="lightbox-close"><i class="fas fa-times"></i></span>');
        
        // Append elements
        lightboxContent.append(lightboxClose);
        lightboxContent.append(lightboxImg);
        lightboxContent.append(lightboxTitle);
        lightbox.append(lightboxContent);
        $('body').append(lightbox);
        
        // Show lightbox
        setTimeout(function() {
            lightbox.addClass('active');
        }, 50);
        
        // Close lightbox
        lightboxClose.on('click', function() {
            lightbox.removeClass('active');
            setTimeout(function() {
                lightbox.remove();
            }, 300);
        });
        
        // Close lightbox on outside click
        lightbox.on('click', function(e) {
            if ($(e.target).is(lightbox)) {
                lightbox.removeClass('active');
                setTimeout(function() {
                    lightbox.remove();
                }, 300);
            }
        });
    });
    
})(jQuery);