const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    console.log("daniel luntras");
    const masina = document.getElementById("afisaza");
    const search = document.getElementById("search");
    if (masina.style.display === "block") masina.style.display = "none";
    else masina.style.display = "block";
});
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//# sourceMappingURL=Home-searh.09c24910.js.map
