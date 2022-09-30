// Code needed to get the stuff to appear on the page

const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }



  //Choosing which shop to go to depending on what days they are open.

  const shops = [
    {
    shopname: "Froyo Fun",
    openDay: "Monday",
    },
    {
    shopname: "Vegan Flavors",
    openDay: "Tuesday",
    },
    {
    shopname: "Raspberry Treats",
    openDay: "Anyday",
    },
  ];

const whatShop = function (daysOpen) {
 let whatShop = "";
 if ((daysOpen = "Monday")) {
    whatShop = "Froyo Fun";
 } else if (
    (daysOpen = "Tuesday")
    (whatShop = "Vegan Flavors")
 ) {
 } else {
    whatShop = "Raspberry Treats";
}
    return whatShop;
};

const myChoice = function (whatShop) {
    let myChoice = "";
    shops.forEach(function (item) {
        if (whatShop === item.whatShop) {
            myChoice = item;
        } else {
            item++;
          }
    });
return myChoice;

};

let decideShop = whatShop()


document.querySelector('select').addEventListener('change', function(e) {
const newParagraph = document.createElement('p')
newParagraph.textContent = (decideShop)
document.querySelector('body').appendChild(newParagraph)
})
