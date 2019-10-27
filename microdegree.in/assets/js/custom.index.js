/*************************************************************************
    Template Name: Canopus
    Template URI: https://themeforest.net/user/tortoiz
    Description: A 'Canopus – Multipurpose HTML5 Template' is perfect if you like a clean and modern design. This theme is ideal for Agency, Freelancer, App, Gym, Resturant, Business, citytour, book, Hotel, Portfolio, and those who need an easy, attractive and effective way to share their work with clients.
    Author: tortoiz
    Version: 1.0
    Author URI: http://tortoizthemes.com
    
    
    Note: style js.
*************************************************************************/
/*
    01. Scroll top
    02. Mobile Menu
    03. Sticky Header
    04. Parallax Background
    05. Aos Initializ
    06. Count Down
    07. Brands Slider
    08. Protfolio Carousel
    09. Testimonail
    10. Tumbnail Carousel
    11. Restaurant Gallery
    12. Gallery Popup
    13. Youtube video trigger 
    14. Nav scroll
 
==================================================
[ End table content ]
==================================================*/


(function($) {
    'use strict';   

    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        const words = ["Upskill, Build Products, Land Jobs.", "Switch to premium Software Engineering roles.", "Transition from Student to Professionals."];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function () {
                if (word.length > 0) {
                    document.getElementById('word').innerHTML += word.shift();
                } else {
                    setTimeout(function () {
                        deletingEffect();
                    }, 2500);
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function () {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('word').innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 100);
            };
            loopDeleting();
        };

        typingEffect();
    }); 
    

})(jQuery);
