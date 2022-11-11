let musicOrder = [];

class chosenAlbum {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = this.getPrice();
    }
    getPrice() {
        if (this.item === 'Master of Puppers')
            return 10.00;
        if (this.item === 'In Utero')
            return 15.00;
        if (this.item === 'Lets Dance')
            return 20.00;
        if (this.item === 'Illmatic')
            return 30.00;
    }
    itemTotal() {
        return this.cost * this.quantity;
    }
    choiceCost() {
        let choiceCost = 0;
        completedChoice.forEach((order) => {
            choiceCost += order.itemTotal();
        });
        return choiceCost.toFixed(1);
    }
    displayTotal() {
        let priceTotal = document.getElementById('priceTotal');
        priceTotal.textContent = `Your Record Price is: $${this.choiceCost()}`;
    }
    displayOrder() {
        let choices = document.getElementById('choices');
        let listEl = document.createElement('li');
        musicOrder.forEach((choice) => {
            listEl.textContent = `Record Chosen: ${choice.item} Record Quantity: ${choice.quantity} Price: $${choice.itemTotal().toFixed(2)}`;
            choices.appendChild(listEl);
        });
    }
}


const createChoice = (item, quantity) => {
    let choice = new chosenAlbum(item, quantity);
    return choice;
  };






