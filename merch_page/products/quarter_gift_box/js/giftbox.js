// ======= GALLERY ======== 
let slideIndice = 1;
mostrarSlides(slideIndice);

function plusSlides(n){
    mostrarSlides(slideIndice + n);
}

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
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }

    slides[slideIndice - 1].style.display = "block";
    dots[slideIndice - 1].className += " dot--active";
}


// ======= QUANTITY ======== 
let quantityButtons = document.getElementsByClassName("quantity-btn");
let price = document.getElementById("price");

let defaultQuantity = 0;
quantitySelection(defaultQuantity);

function quantitySelection(n) {
    for (let i = 0; i < quantityButtons.length; i++) {
        quantityButtons[i].className = quantityButtons[i].className.replace(" quantity-btn--active", ""); 
    }
    
    quantityButtons[n].className +=  " quantity-btn--active";
    
    switch (n) {
        case 1:
            price.innerHTML = " 36.00 ";
            break;
        case 2:
            price.innerHTML = " 54.00 ";
            break;
        default:
            price.innerHTML = " 18.00 ";
            break;
    }
}