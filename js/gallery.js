  // Get the modal
  var modal = document.getElementById("imageModal");


  var modalImg = document.getElementById("fullImage");
  

  var images = document.querySelectorAll('.gallery-image');
  

  var closeBtn = document.querySelector('.close');
  
 
  images.forEach(function(image) {
      image.addEventListener('click', function() {
          modal.style.display = "block";
          modalImg.src = this.src;
      });
  });
  
 
  closeBtn.onclick = function() {
      modal.style.display = "none";
  }
  
  
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          modal.style.display = "none";
      }
  });
  
  