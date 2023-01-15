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
    
    $('#portfolioModal1').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal2').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal3').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal6').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal7').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal8').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal10').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal11').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal12').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal13').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal14').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal15').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal16').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal17').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal18').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    $('#portfolioModal19').on('show.bs.modal', function () { // on opening the modal
    }).on('hidden.bs.modal', function (e) { // on closing the modal
    iframe.remove();
    initYouTubeVideos();
    });

    var iframe = document.createElement("iframe");

    function labnolIframe(div) {

        iframe.setAttribute("src", "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        div.parentNode.replaceChild(iframe, div);
    }

    function initYouTubeVideos() {
        var playerElements = document.getElementsByClassName("youtube-player");
        for (var n = 0; n < playerElements.length; n++) {
        var videoId = playerElements[n].dataset.id;
        var div = document.createElement("div");
        div.setAttribute("data-id", videoId);
        var thumbNode = document.createElement("img");
        thumbNode.src = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", videoId);
        div.appendChild(thumbNode);
        var playButton = document.createElement("div");
        playButton.setAttribute("class", "play");
        div.appendChild(playButton);
        div.onclick = function () {
        labnolIframe(this);
        };
        playerElements[n].appendChild(div);
        }
    }



document.addEventListener("DOMContentLoaded", initYouTubeVideos);

})(jQuery); // End of use strict
