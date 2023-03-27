(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open_sidebar");
        return false;
    });
    $('.close_btn').click(function () {
        $('.sidebar, .content').removeClass("open_sidebar");
        return false;
    });
    
    document.addEventListener('click', function handleClickOutsideBox(event) {
        const openSidebars = document.querySelectorAll('.open_sidebar');
        
        if (openSidebars.length > 0) {
          // Check if the clicked element is a child of any open sidebar
          let clickedInsideSidebar = false;
          openSidebars.forEach(sidebar => {
            if (sidebar.contains(event.target)) {
              clickedInsideSidebar = true;
            }
          });
      
          // If the clicked element is not a child of any open sidebar, close all open sidebars
          if (!clickedInsideSidebar && !event.target.classList.contains('nav-link') && !event.target.classList.contains('navbar') && !event.target.classList.contains('sidebar') && !event.target.classList.contains('navbar-nav')) {
            openSidebars.forEach(sidebar => {
              sidebar.classList.remove('open_sidebar');
            });
          }
        }
      
        // Log the clicked element
        console.log('user clicked:', event.target);
      });
      
    // Add slideDown animation to Bootstrap dropdown when expanding
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
})(jQuery);

