/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Disable right click on all images
    let allImages = document.querySelectorAll("img");
    allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
    })

    // Stop video when modal close
    var videoSrc = $("#portfolioModal3 iframe").attr("src");
    $('#portfolioModal3').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal3 iframe").attr("src", videoSrc+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal3 iframe").attr("src", null);
    });

    var videoSrc2 = $("#portfolioModal2 #ytvideo5").attr("src");
    $('#portfolioModal2').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal2 #ytvideo5").attr("src", videoSrc2+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal2 #ytvideo5").attr("src", null);
    });

    var videoSrc3 = $("#portfolioModal1 #ytvideo1").attr("src");
    $('#portfolioModal1').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal1 #ytvideo1").attr("src", videoSrc3+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal1 #ytvideo1").attr("src", null);
    });

    var videoSrc4 = $("#portfolioModal1 #ytvideo2").attr("src");
    $('#portfolioModal1').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal1 #ytvideo2").attr("src", videoSrc4+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal1 #ytvideo2").attr("src", null);
    });

    var videoSrc5 = $("#portfolioModal6 iframe").attr("src");
    $('#portfolioModal6').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal6 iframe").attr("src", videoSrc5+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal6 iframe").attr("src", null);
    });

    var videoSrc6 = $("#portfolioModal7 iframe").attr("src");
    $('#portfolioModal7').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal7 iframe").attr("src", videoSrc6+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal7 iframe").attr("src", null);
    });

    var videoSrc7 = $("#portfolioModal8 iframe").attr("src");
    $('#portfolioModal8').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal8 iframe").attr("src", videoSrc7+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal8 iframe").attr("src", null);
    });

    var videoSrc8 = $("#portfolioModal10 #ytvideo1").attr("src");
    $('#portfolioModal10').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal10 #ytvideo1").attr("src", videoSrc8+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal10 #ytvideo1").attr("src", null);
    });

    var videoSrc9 = $("#portfolioModal10 #ytvideo2").attr("src");
    $('#portfolioModal10').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal10 #ytvideo2").attr("src", videoSrc9+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal10 #ytvideo2").attr("src", null);
    });

    var videoSrc10 = $("#portfolioModal12 iframe").attr("src");
    $('#portfolioModal12').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal12 iframe").attr("src", videoSrc10+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal12 iframe").attr("src", null);
    });

    var videoSrc11 = $("#portfolioModal11 iframe").attr("src");
    $('#portfolioModal11').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal11 iframe").attr("src", videoSrc11+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal11 iframe").attr("src", null);
    });

    var videoSrc12 = $("#portfolioModal14 #ytvideo3").attr("src");
    $('#portfolioModal14').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal14 #ytvideo3").attr("src", videoSrc12+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal14 #ytvideo3").attr("src", null);
    });

    var videoSrc13 = $("#portfolioModal14 #ytvideo4").attr("src");
    $('#portfolioModal14').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal14 #ytvideo4").attr("src", videoSrc13+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal14 #ytvideo4").attr("src", null);
    });

    var videoSrc14 = $("#portfolioModal13 #ytvideo5").attr("src");
    $('#portfolioModal13').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal13 #ytvideo5").attr("src", videoSrc14+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal13 #ytvideo5").attr("src", null);
    });

    var videoSrc15 = $("#portfolioModal2 #ytvideo6").attr("src");
    $('#portfolioModal2').on('show.bs.modal', function () { // on opening the modal
    $("#portfolioModal2 #ytvideo6").attr("src", videoSrc15+"?autoplay=0");
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    $("#portfolioModal2 #ytvideo6").attr("src", null);
    });

})(jQuery); // End of use strict
