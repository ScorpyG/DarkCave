/* Toggle function for responsive top-nav */
function toggleFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Scroll detection */
const ScrollToTop_btn = document.getElementById("to-top-btn");
window.addEventListener("scroll", scrollFunction);

/* Scroll to-top function */
function scrollFunction() {
    /* If the page position is > 400px add in the function */
    if (window.pageYOffset > 400) {
        if (!ScrollToTop_btn.classList.contains("btnEnter")) {
            ScrollToTop_btn.classList.remove("btnExit");
            ScrollToTop_btn.classList.add("btnEnter");
            ScrollToTop_btn.style.display = "block";
        }
        
    }
    /* If the page postion is < 400px remove the fucntion */
    else {
        if (ScrollToTop_btn.classList.contains("btnEnter")) {
            ScrollToTop_btn.classList.remove("btnEnter");
            ScrollToTop_btn.classList.add("btnExit");
            setTimeout (function() {
                ScrollToTop_btn.style.display = "none";
            }, 250)
        }
    }
}

/* To-top button click detection */
ScrollToTop_btn.addEventListener("click", toTopFunction);

/* Reset the page to its original position */
function toTopFunction() {
    window.scrollTo (0, 0);
}
