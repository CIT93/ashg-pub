// Code needed to get the stuff to appear on the page

const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }



// My Decision
// I enjoy having ice cream at work, but only on the last day of my work week which is always a Monday. If there are 7 days in the week, Monday would be 1.

let ashMood = 1
let lastDay = true
let currentDay = 5
let iceCreamDay = 1
let daysWeek = 7
let timeUntilNextCream = daysWeek - currentDay
let notgettingSick = true
let hungryForCream = true

showOnPage("This is the ultimate Ice Cream Time Formua!!!")
showOnPage("Current Day ->>> " + currentDay)
showOnPage("Ice Cream Day ->>> " + iceCreamDay)
showOnPage("Days in the week ->>> " + daysWeek)
showOnPage("Time until next Ice Cream ->>> " + timeUntilNextCream)
showOnPage("gettingSick ->>> " + notgettingSick)
showOnPage("hungryForCream ->>> " + hungryForCream)
showOnPage("My Mood ->>> " + ashMood)
showOnPage("Is it the last day of work? ->>> " + lastDay)
showOnPage("End of Ice Cream Formula!")
showOnPage("------------")
showOnPage("<b>This is how Im feeling about Ice Cream!<b>")

if (notgettingSick && hungryForCream) {
    showOnPage("I'm hungry and feeling good!")
} else {
    showOnPage("Im sick or not hungry.")
}

if (currentDay === 1 && lastDay) {
    showOnPage("Its Monday. Time to eat some Ice Cream!")
} else {
    showOnPage("It isnt Monday, I cant have Ice Cream")
}


showOnPage("------------")
showOnPage("<b>Function Time!<b>")


let IceCreamYummy = function (Yummy) {
    let delicious = (Yummy = 1)

    if (Yummy <= 0) {
        let isGross = true
    }

    return delicious
}

if (IceCreamYummy = false) {
    showOnPage("The Ice Cream is gross today!")
} else {
    showOnPage("Its yummy!")
}

let chocCream = Yummy(1)
let pistachioCream = Yummy(1)

showOnPage(chocCream)
showOnPage(pistachioCream)
