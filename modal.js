// if modal is on display now
var display = false;

//modal will contain the image, modalImg. ModalImg will host the image
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var imageNum = 0;
// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];


// function that displays the clicked image in modal
function putModal(number, imgSrc, caption) {
  return
  modal.style.display = "block";
  modalImg.src = imgSrc;
  imageNum = number;
  // set scroll
  modal.style.overflow = "scroll";
  display = true;
  // hide body scroll
  document.body.style.overflow = 'hidden';
}

$('#myModal').click(function (e) {
  modal.style.display = "none";
  display = false;
  console.log("parent click");
  // make scrollbar visible again. this is because we could sometimes 
  // see double scrollbars from the feed and in the image viewer
  document.body.style.overflow = 'visible';
});

function dismissModalView() {
  modal.style.display = "none";
  display = false;
  // make scrollbar visible again
  document.body.style.overflow = 'visible';
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function () {
  dismissModalView();
}


$('#leftButton').click(function (e) {
  nextModal(/*right=*/false);
  e.stopPropagation();
});

$('#rightButton').click(function (e) {
  nextModal(/*right=*/true);
  e.stopPropagation();
});
// moves modals left or right depending on the key
document.addEventListener('keydown', function (event) {
  if (display) {
    if (event.key == "ArrowLeft") {
      nextModal(/*right=*/false);
    }
    else if (event.key == "ArrowRight") {
      nextModal(/*right=*/true);
    }
    else if (event.key == "Escape") {
      dismissModalView();
    }
    else if (event.key == " ") {
      nextModal(/*right=*/true);
    }
  }
});

function nextModal(right) {
  imageNum += right ? 1 : -1;
  var nextImg = document.getElementById(imageNum);
  if (!nextImg) { dismissModalView(); }
  modalImg.src = nextImg.src;
  modal.style.display = "block";
}