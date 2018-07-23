//modal will contain the image, modalImg. ModalImg will host the image
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");

// image one 
var img1 = document.getElementById('myImg');


function putModal(imgSrc, caption){
    modal.style.display = "block";
    modalImg.src = imgSrc;
    document.getElementById('caption').innerHTML =     document.getElementById(caption).textContent;
  
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}