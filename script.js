function toggleFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const ScrollToTop_btn = document.getElementById("to-top-btn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 400) {
        if (!ScrollToTop_btn.classList.contains("btnEnter")) {
            ScrollToTop_btn.classList.remove("btnExit");
            ScrollToTop_btn.classList.add("btnEnter");
            ScrollToTop_btn.style.display = "block";
        }
        
    } 
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

ScrollToTop_btn.addEventListener("click", toTopFunction);

function toTopFunction() {
    window.scrollTo (0, 0);
}