/*
Let & Const in Javascript :

1. let and const are hoisted but its memory is allocated at another place than the window which cannot be accessed before initialisation. 
2. The Temporal Dead Zone exists until a variable is declared and assigned a value. 
3. window.variable OR this.variable will not give value of variable defined using let or const. 
4. We cannot redeclare the same variable with let/const(even with using var the second time). 
5. const variable declaration and initialisation must be done on the same line. 
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}. 
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid errors. 
8. Initializing variables at the top is a good idea, and helps shrink TDZ to zero.

Closures in JavaScript:
Closures are functions that have access to variables from the outer (enclosing) function, even after the outer function has finished executing. This happens because the inner function retains a reference to the outer function's scope, creating a lexical scope chain.
Here's a breakdown:
Outer Function: This function defines variables that will be accessible to the inner function.
Inner Function: This function is defined within the outer function and has access to the outer function's variables through the lexical scope chain.
Closure Creation: When the outer function is executed, the inner function is created and becomes part of the outer function's scope. This creates a closure.
Outer Function Returns Inner Function: The outer function can return the inner function as a value. This allows the inner function to be used outside of the outer function's scope, while still having access to the outer function's variables.
Example:
JavaScript
function outerFunction() {
  let outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); // Output: Hello

Use code with caution.
In this example:
outerFunction defines the variable outerVariable.  


innerFunction is defined within outerFunction and has access to outerVariable.
outerFunction returns innerFunction, creating a closure.
closure is assigned the returned inner function.
When closure() is called, it prints "Hello" because it has access to the outerVariable from the outer function's scope.
Key Points:
Closures are created when an inner function accesses variables from the outer function's scope.
The inner function retains a reference to the outer function's scope, even after the outer function has finished executing.
Closures can be used to create private variables, implement modules, and create callbacks.
I am not getting that, if it is a variable then how can we assign it a function, and after that we are calling it as a funtion ?
Understanding Function Assignment and Invocation
Let's break it down:
1. Functions as Values
In JavaScript, functions are first-class citizens. This means they can be treated like any other data type, such as numbers, strings, or objects. You can assign them to variables, pass them as arguments to other functions, and even return them from functions.
2. Assigning a Function to a Variable
When you assign a function to a variable, you're essentially creating a reference to that function. This means the variable now "points" to the function's code.
Example:
JavaScript
function greet() {
  console.log("Hello!");
}

let sayHello = greet; // Assigning the greet function to the sayHello variable

Use code with caution.
Here, sayHello now holds a reference to the greet function.
3. Invoking the Function Through the Variable
Since sayHello refers to the greet function, you can invoke it directly using parentheses:
JavaScript
sayHello(); // Output: Hello!

Use code with caution.
This is equivalent to calling greet().
In summary:
Functions can be treated as values in JavaScript.
Assigning a function to a variable creates a reference to that function.
You can invoke the function using the variable name followed by parentheses.
To recap your original question:
let closure = outerFunction();: This line is calling the outerFunction function.
**outerFunction returns innerFunction**: TheouterFunction` is likely returning an inner function.
let closure = ...: The returned inner function is being assigned to the closure variable.
Since closure now holds a reference to the inner function, you can call it like any other function: closure().

*/