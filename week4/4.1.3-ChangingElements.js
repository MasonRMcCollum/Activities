// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");
console.log("Nav-Bar outer HTML ... \n", navBar.outerHTML);

// print the inner HTML of the navigation bar
console.log("Nav-Bar inner HTML ... ", navBar.innerHTML);

// print the text content of the #class-schedule-list element
console.log("Class Schedule list text ....", document.querySelector("#class-schedule-list").textContent);

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");
console.log("first Class Week outer HTML ... \n", document.querySelector(".class-week").outerHTML);

// select the img element and add a working src attribute
const imageElement = document.querySelector("img")
imageElement.src = "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";
console.log("Image element outer HTML ...\n", imageElement.outerHTML);

// change the font color of the h1 element
const headH1 = document.querySelector("h1");
headH1.style.color = "green";
console.log("Header outer HTML ...\n", headH1.outerHTML);


// print the outer HTML of the navigation bar
// const navBar = document.querySelector(`nav-bar`)
// console.log(document.querySelector(`nav-bar`).outerHTML)
// print the inner HTML of the navigation bar
// console.log(document.querySelector(`p`).innerHTML);
// print the text content of the #class-schedule-list element
// console.log(document.querySelector(`div`).textContent);
// select the classList for the first class-week, then add the class "week-1"
// const firstweek = document.querySelector(`.class-week`)
// firstweek.classList.add(".week-1");
// select the img element and add a src attribute
// const imageElement = document.querySelector("img")
// document.querySelector("img").src = "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg"
// change the font color of the h1 element
// document.querySelector("h1").style.style.color = "color: blue; border: 1 px solid blue";
