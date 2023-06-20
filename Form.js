function sendMessage() {
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('universityName');
    var successMessage = document.getElementById('successMessage');
  
    if ( emailInput.value === '' || universityNameInput.value === '') {
      alert('Proszę wypełnić wszystkie pola formularza.');
      return;
    }
  
    successMessage.style.display = 'block';
    emailInput.value = '';
    universityNameInput.value = '';
  
    var sendButton = document.getElementById('sendButton');
    sendButton.innerText = 'Wiadomość została wysłana';
    sendButton.disabled = true;
  }