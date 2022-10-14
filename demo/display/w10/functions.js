//Choosing which shop to go to depending on what days they are open.

const shops = [
    {
    shopname: "Froyo Fun",
    daysOpen: "Monday",
    },
    {
    shopname: "Vegan Flavors",
    daysOpen: "Tuesday",
    },
    {
    shopname: "Wacky Wonderland",
    daysOpen: "Wednesday",
    },
    {
    shopName: "Tasty Treats",
    daysOpen: "Thursday",
    },
    {
    shopName: "Frozen Fantasy",
    daysOpen: "Friday",
    },
    {
    shopName: "Sweet Delights",
    daysOpen: "Saturday",
    }
  ];


  const whatShop = function (daysOpen) {
    let whatShop = "";

    if ((daysOpen = "Monday")) {
      whatShop = "Froyo Fun";

    } else if (
      ((daysOpen = "Tuesday"))
      (whatShop = "Vegan Flavors")
    ) {
    } else if (
        ((daysOpen = "Wednesday"))
        (whatShop = "Vegan Flavors")
    ) {
    } else if (
        ((daysOpen = "Tuesday"))
        (whatShop = "Wacky Wonderland")
    ) {
    } else if (
        ((daysOpen = "Thursday"))
        (whatShop = "Tasty Treats")
    ) {
    } else if (
        ((daysOpen = "Friday"))
        (whatShop = "Frozen Fantasy")
    ) {
    } else if (
        ((daysOpen = "Saturday"))
        (whatShop = "Sweet Delights")
    ) {
        
    } else {
        (whatShop = "Shops are closed on Sunday")
    }}


    let decideShop = whatShop()