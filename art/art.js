// if modal is on display now
var display = false;

//modal will contain the image, modalImg. ModalImg will host the image
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var imageNum = 0;
var maxImage = 5;

// function that displays the clicked image in modal
function putModal(number, imgSrc, caption){
    modal.style.display = "block";
    modalImg.src = imgSrc;
    // document.getElementById('caption').innerHTML = document.getElementById(caption).innerHTML;  
  imageNum = number;
  // set scroll
  modal.style.overflow = "scroll";
  display=true;
  // hide body scroll
  document.body.style.overflow = 'hidden';
}

// function that displays right image in gallery
function nextRightModal(){
  imageNum++;
  console.log("child click" + imageNum);
  var nextImg = document.getElementById(imageNum);
  // if null, exit modal display
  if(!nextImg)
  {
    modal.style.display = "none";
    return; 
  }
  modalImg.src = nextImg.src;
  modal.style.display = "block";
  // document.getElementById('caption').innerHTML = document.getElementById("caption" + imageNum).innerHTML; 
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
  document.getElementById('caption').innerHTML = document.getElementById("caption"+ imageNum).innerHTML;
}

$('#myModal' ).click(function(e) {
  modal.style.display = "none";
  display = false;
  console.log("parent click");
  // make scrollbar visible again
  document.body.style.overflow = 'visible'; 
});

$('#leftButton').click(function(e)
{
    console.log("child click");
    nextLeftModal();
    e.stopPropagation();
});

$('#rightButton').click(function(e)
{
    console.log("right child click");
    nextRightModal();
    e.stopPropagation();
});

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
  display = false;
  // make scrollbar visible again
  document.body.style.overflow = 'visible'; 
}

// moves modals left or right depending on the key
document.addEventListener('keydown', function(event) {
  if(display)
  {
    if(event.key == "ArrowLeft"){
        nextLeftModal();
    }
    else if(event.key == "ArrowRight") {
        nextRightModal();
    }
  }
});
