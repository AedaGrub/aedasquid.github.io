function showOverlay(card) {
    let imgSrc = card.querySelector(".card-img").src;
    document.getElementById("focusedImage").src = imgSrc;
    document.getElementById("focusedOverlay").style.display = "block";
  }
  
  function closeOverlay() {
    document.getElementById("focusedOverlay").style.display = "none";
  }
  