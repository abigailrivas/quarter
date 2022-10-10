let slideIndice = 1;
mostrarSlides(slideIndice);

// Para flechas pre and post
function plusSlides(n){
    mostrarSlides(slideIndice + n);
}

// Para los puntos
function slideActual(n){
    mostrarSlides(n);
}

function mostrarSlides(n){
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndice = 1;
    } else if (n < 1) {
        slideIndice = slides.length;
    } else{
        slideIndice = n;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndice - 1].style.display = "block";
    dots[slideIndice -1].className += " active";
}