//modal will contain the image, modalImg. ModalImg will host the image
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var imageNum = 0;
var maxImage = 5;

// function that displays the clicked image in modal
function putModal(number, imgSrc, caption){
    modal.style.display = "block";
    modalImg.src = imgSrc;
    document.getElementById('caption').innerHTML =     document.getElementById(caption).textContent;  
  imageNum = number;
}

// function that displays right image in gallery
function nextRightModal(){
  imageNum++;
  var nextImg = document.getElementById(imageNum);
  // if null, exit modal display
  if(!nextImg)
  {
    modal.style.display = "none";
    return; 
  }
  modalImg.src = nextImg.src;
  modal.style.display = "block";
  document.getElementById('caption').innerHTML = document.getElementById("caption" + imageNum).textContent; 
}

// function that displays left image in gallery
function nextLeftModal(){
  imageNum--;
  if(imageNum<1)
  {
    modal.style.display = "none";
    return; 
  }
  var nextImg = document.getElementById(imageNum);
  modalImg.src = nextImg.src;
  modal.style.display = "block";
  document.getElementById('caption').innerHTML =  document.getElementById("caption"+ imageNum).textContent;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
