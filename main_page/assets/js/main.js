function scrollHeader(){
    const header = document.getElementById("header");
    const logoHeader = document.getElementById("logoHeader");
    if  (this.scrollY >= 1) {
        header.classList.add("fixed-header")
        logoHeader.style.display = "block";
    } else {
        header.classList.remove("fixed-header");
        logoHeader.style.display = "none";
    }
}

window.addEventListener("scroll", scrollHeader)

function adultVerification() {
    const popup = document.getElementById("adultVerification");
    popup.style.display = "none";
}

function addToBag() {
    const counter = document.getElementById("counter");
}