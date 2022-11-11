document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let item = document.getElementById('album1').value;
    let quantity = document.getElementById('quantity1').value;
  
      let choice = createChoice(item, quantity);
      musicOrder.push(choice);
      choice.displayOrder();
      choice.displayTotal();
      document.getElementById('form').reset();
    }
  );
  