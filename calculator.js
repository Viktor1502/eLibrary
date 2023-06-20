/* calculator */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcForm').addEventListener('submit', function(e) {
      e.preventDefault();
  
      const student = document.getElementById('student').value;
      const kindle = document.getElementById('kindle').value;
      const books = document.getElementById('books').value;
      const duration = document.getElementById('duration').value;
  
      let totalPrice = 0;
  
      if (student === 'no') {
        totalPrice += 20;
      }
  
      if (kindle === 'yes' && student === 'no') {
        totalPrice += 150;
      }
  
      if (books === '1' && student === 'no') {
        totalPrice += 0;
    } else if (books === '2' && student === 'no'){
        totalPrice += 30;
    }
    else if (books === '3','4','5' && student === 'no') {
        totalPrice += 70;
      }
  
      if (duration === '1 month' && student === 'no') {
        totalPrice += 5;
      } else if (duration === '2 months' && student === 'no') {
        totalPrice += 7;
      }
  
      document.getElementById('totalPrice').textContent = `Całkowity koszt: ${totalPrice} zł`;
    });
  });
  