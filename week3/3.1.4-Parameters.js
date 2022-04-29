// Named Parameters
// write a function that takes two named parameters:
function myFunction(param1, param2) {
  console.log("This is param1: " + param1, "this is param2: " + param2);
  return param1 + param2;
}
// print each named parameter,
// then return the parameters added together
// invoke the function and pass in two numbers
myFunction(1,2);
// invoke the function and pass in more than two numbers
myFunction(1,2,3,4);
// invoke the function and pass in only one number
myFunction(1);
// change the function to set default values for the parameters
myFunction()
// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myFunction(param1, param2, ...param3){
  console.log("This is param1: "+ param1, "this is param2: " + param2);
  console.log("This is all of our Rest Params: " + param3);
  return param1 + param2
}
// again, invoke the function and pass in more than two numbers
