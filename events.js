// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("Paysage-campagne");
const img2 = document.getElementById("Portail");
const img3 = document.getElementById("chateau-NB");
const img4 = document.getElementById("foule-chateau");
const img5 = document.getElementById("logo-fdd");
const img6 = document.getElementById("fdd-solo");
const img7 = document.getElementById("presentation");
const img8 = document.getElementById("exterieur-fdd");

const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

  
  img.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img2.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img3.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img4.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img5.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img6.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img7.onclick = function(){
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  } 

  img8.onclick = function(){
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

