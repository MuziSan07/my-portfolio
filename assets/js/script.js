$(document).ready(function() {
    // Smooth scroll for 'View Projects' button
    $("#viewProjects").click(function() {
        $("html, body").animate({
            scrollTop: $(".my-5").offset().top
        }, 800);
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("bg-primary");
        } else {
            $(".navbar").removeClass("bg-primary");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        if (this.getAttribute("href") && this.getAttribute("target") !== "_blank") {
            event.preventDefault();
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        }
    });
});
