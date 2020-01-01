// déclaration variable index
let slideIndex = 1;


// déclaration de la fonction showSlides
let showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


// Next-Previous controls (1 fonction qui utilise la fonction showSlides)
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

// Dot image controls (1 autre fonction qui utilise la fonction showSlides)
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

// Appel de la fonction pour affichage par défaut du slide 1 avant clic 
showSlides(slideIndex);

