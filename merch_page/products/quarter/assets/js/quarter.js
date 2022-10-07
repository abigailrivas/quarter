let slideIndex = 1;
showSlides(slideIndex);

// For pre and post controls
function plusSlides(n){
    showSlides(slideIndex + n);
}

// For dots 
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].getElementsByClassName.display = "none";
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].getElementsByClassName.display= "block";
    dots[slideIndex -1].className += "active";
}