// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById("locaux1");
const img2 = document.getElementById("locaux2");
const img3 = document.getElementById("locaux3");
const img4 = document.getElementById("locaux4");

const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");


img1.onclick = function() {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function() {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function() {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function() {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}