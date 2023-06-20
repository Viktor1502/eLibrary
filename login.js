function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Proszę uzupełnić nazwę użytkownika i hasło.');
    } else {
      alert('Błędne dane do logowania. Spróbuj ponownie');
    }
  }
  