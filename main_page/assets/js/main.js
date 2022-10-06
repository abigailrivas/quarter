function scrollHeader(){
    const header = document.getElementById("header");
    if  (this.scrollY >= 1) {
        header.classList.add("fixed-header")
    } else {
        header.classList.remove("fixed-header");
    }
}

window.addEventListener("scroll", scrollHeader)
