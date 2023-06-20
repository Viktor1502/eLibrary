function sendMessage() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var successMessage = document.getElementById('successMessage');
  
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Proszę wypełnić wszystkie pola formularza.');
      return;
    }
  
    successMessage.style.display = 'block';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  
    var sendButton = document.getElementById('sendButton');
    sendButton.innerText = 'Wiadomość została wysłana';
    sendButton.disabled = true;
  }
  
  
  /* scroll to top*/
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* Menu closed */
  
  function closeMenu() {
    var menu = document.getElementById('navbarSupportedContent');
    menu.classList.remove('show');
  }


  window.addEventListener('DOMContentLoaded', function() {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var isMobile = window.matchMedia('(max-width: 768px)');
  
    function showAppropriateImage() {
      for (var i = 0; i < carouselItems.length; i++) {
        var carouselImages = carouselItems[i].querySelectorAll('.carousel-image');
        for (var j = 0; j < carouselImages.length; j++) {
          carouselImages[j].style.display = 'none';
        }
      }
  
      if (isMobile.matches) {
        carouselItems.forEach(function(item) {
          var carouselImages = item.querySelectorAll('.carousel-image');
          carouselImages[0].style.display = 'block';
        });
      } else {
        carouselItems.forEach(function(item) {
          var carouselImages = item.querySelectorAll('.carousel-image');
          carouselImages[1].style.display = 'block';
        });
      }
    }
  
    showAppropriateImage();
  
    window.addEventListener('resize', function() {
      isMobile = window.matchMedia('(max-width: 768px)');
      showAppropriateImage();
    });
  });


  