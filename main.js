var lastScrollTop = 0;

window.onscroll = function () {
    var header = document.getElementById("header");
    var scrollPosition = Math.max(window.scrollY, document.documentElement.scrollTop);
    
    if (scrollPosition > lastScrollTop) {
        // Scrolling down, hide the header
        header.classList.add("hidden");
    } else {
        // Scrolling up, show the header
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollPosition;
}