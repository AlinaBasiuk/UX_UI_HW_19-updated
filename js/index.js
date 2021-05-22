function fade() {
    $('.preloader').fadeOut("fast");
    }
    setTimeout(fade, 1000);

    $(document).ready(function () {
        $('#nav-links li').hover(
        function () {
            //show submenu
            $('ul', this).slideDown("fast");
        }, function () {
            //hide submenu
            $('ul', this).slideUp("fast");
        });
    });

    
  




