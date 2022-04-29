// Logical Operators
// what do you expect each line to print?
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false
console.log(!(true && false)); //true
console.log(false || !false); //true
// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log("" && 0);true
console.log(undefined || null); undefined
console.log(!``);
console.log(!(1 && "false"));
console.log(NaN || !"true");

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age;

if (age >10) {console.log("full menu")
} else if (age< 10 ){
  console.log("kids menu")
} else{
  console.log("Weird age")
};
// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;
if (!num){
  console.log("The number is zero")
} else {
  console.log("The number is not zero")
}
// Write your if statement here *
