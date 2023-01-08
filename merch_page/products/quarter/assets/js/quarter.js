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
let subscription = document.getElementById("subscription");

let defaultQuantity = 0;
quantitySelection(defaultQuantity);

function quantitySelection(n) {
    for (let i = 0; i < quantityButtons.length; i++) {
        quantityButtons[i].className = quantityButtons[i].className.replace(" quantity-btn--active", ""); 
    }
    
    quantityButtons[n].className +=  " quantity-btn--active";
    
    switch (n) {
        case 1:
            price.innerHTML = " 54.00 ";
            subscription.innerHTML= " 48.60 ";
            break;
        case 2:
            price.innerHTML = " 162.00 ";
            subscription.innerHTML= " 145.80 ";
            break;
        default:
            price.innerHTML = " 27.00 ";
            subscription.innerHTML= " 24.30";
            break;
    }
}


// ======= ACCORDION ======== 
let accordion = document.getElementsByClassName("accordion__header");
let accordionContent = document.getElementsByClassName("accordion__content");

function openAccordionItem(n) {
    accordionContent[n].style.display = "block";
    accordion[n].className += " accordion__header--active";
}


// ======= REVIEWS ======== 
let reviews = document.getElementsByClassName("reviews__description");
let indexReviews = 0;
showReview(indexReviews);

function changeReview(n) {
    indexReviews += n;
    showReview(indexReviews);
}

function showReview(n) {
    if (n == reviews.length){
        indexReviews = 0;
    } else if (n == -1){
        indexReviews = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        if( i != indexReviews){
            reviews[i].style.display= "none";
        }
        
    }
    reviews[indexReviews].style.display= "flex";
}

