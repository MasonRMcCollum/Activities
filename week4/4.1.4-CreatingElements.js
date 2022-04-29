// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList)
// create two new list item (li) elements, and add some text to them
const firstList = document.createElement("li")
const secondList = document.createElement("li")

firstList.textContent = "list string"
secondList.textContent = "list string two"
// add the li elements to the ul in the nav-bar
document.querySelector("ul").appendChild(firstList)
document.querySelector("ul").appendChild(secondList)
