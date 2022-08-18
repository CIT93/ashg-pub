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
let gettingSick = false
let hungryForCream = true

showOnPage("This is the ultimate Ice Cream Time Formua!!!")
showOnPage("Current Day ->>> " + currentDay)
showOnPage("Ice Cream Day ->>> " + iceCreamDay)
showOnPage("Days in the week ->>> " + daysWeek)
showOnPage("Time until next Ice Cream ->>> " + timeUntilNextCream)
showOnPage("gettingSick ->>> " + gettingSick)
showOnPage("hungryForCream ->>> " + hungryForCream)
showOnPage("My Mood ->>> " + ashMood)
showOnPage("Is it the last day of work? ->>> " + lastDay)
showOnPage("End of Ice Cream Formula!")
showOnPage("------------")
showOnPage("<b>This is how Im feeling about Ice Cream!<b>")

if (gettingSick) {
    showOnPage("Too sick to eat!")
} else {
    showOnPage("Feels well enough for Ice Cream.")
}

if (hungryForCream) {
    showOnPage("Im hungry for Ice Cream!")

} else if (ashMood === 1) {
    showOnPage("Im happy enough for Ice Cream!")
} else {
    showOnPage("Im too sad for Ice Cream.")
}

if (currentDay === 1 && lastDay) {
    showOnPage("Its Monday. Time to eat some Ice Cream!")
} else {
    showOnPage("It isnt Monday, I cant have Ice Cream")
}

//Struggling a bit to get the if else statement to work. I'll keep trying at it.