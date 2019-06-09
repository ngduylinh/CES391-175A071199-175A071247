$(document).ready(function () {

    $('.menu li').hover(
        function () {

            $('.sub_menu', this).animate({
                opacity: 1,
                height: 'toggle'
            }, 150, function () {
                // Animation complete.
            });

        },
        function () {
            //hide its submenu
            $('.sub_menu', this).slideUp(100);
        }
    );

});
