// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById("locaux1");
const img2 = document.getElementById("locaux2");
const img3 = document.getElementById("locaux3");
const img4 = document.getElementById("locaux4");



const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

// const showDialog = () => {
//     document.getElementById('dialog').classList.add('show')
//     const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
//     const body = document.body;
//     body.style.height = '100vh';
//     body.style.overflowY = 'hidden';
// };


// if (window.matches("(min-width: 961px)")) { // If media query matches


img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}