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

const flavor = document.getElementById('flavor')

form.addEventListener('submit', (e) => {
  let messages = []
  if (flavor.value === '' || flavor.value == null) {
    messages.push('Name a flavor!')
  }

  if (messages.length > 0) {
    messages.push('Nice Choice!')
  }
  e.preventDefault()
})