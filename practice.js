// var, let and const practice

// var value = 45;

// console.log(value);

// var value = 544;
// console.log(value);

// let value2 = 343;
// console.log(value2);

// value2 = 3433;
// console.log(value2);

// const c = 23;
// console.log(c);


// console.log(c);
// console.log(value);
// var value;
// value = 343;
// console.log(value);
// console.log(name);
// let name = 10;
// console.log(name);


// var a = null;
// console.log(typeof(a));

// // string to number
// var num = "bhupendra";

// console.log(typeof(num));
// console.log(num);

// var str = num - '0';
// console.log(typeof(str));
// console.log(str);

// console.log("converting number to string");
// // number to string
// var num = 2222;
// console.log(num);
// console.log(typeof(num));

// var newstr = "" + num;
// console.log(newstr);
// console.log(typeof(newstr));

// Arrays.
// console.log("arrays learning");
// const fruits = ["mango", "bnana", "apple","guava"];
// console.log(fruits);

// console.log(fruits[1]);
// console.log(typeof(fruits));
// console.log(fruits.length);

// fruits.push("grapes");
// console.log(fruits);
// fruits.unshift("papaya");
// console.log(fruits);
// fruits.shift(0);
// console.log(fruits);
// fruits.pop(fruits.length-1);

// console.log(fruits);

// // for(let i=0;i<fruits.length;i++){
// //     console.log(fruits[i]);
// // }

// // used to iterator on string and arrays.
// for(let val of fruits){
//     console.log(val);
// }

// let arr = [1,2,3,4,5,5];
// console.log(arr);
// // for(let i=0;i<arr.length;i++){
// //     arr[i] = 2*arr[i];
// // }
// // console.log("Modified array : " +arr);
 
// function transform(x){
//     return 2*x;
// }

// function triple(x){
//     return 3*x;
// }

// let newArray = arr.map(transform);
// console.log(newArray);

// let tripple = arr.map(triple);
// console.log(tripple);

// function binary(x){
//     return x.toString(2);
// }
// let output = arr.map(binary);
// console.log(output);

// let arr = [1,2,3,4,5,5];

// function isEven(x){
//     return x % 2 == 0;
// }

// function isOdd(x){
//     return x % 2;
// }

// let output = arr.filter(isEven);
// console.log(output);

// let output2 = arr.filter(isOdd);
// console.log(output2);


// let arr =[[1,2,3],[3,2,3,4],[4,5,6,6]];
// console.log(arr);

// console.log(arr[0][0]);

// let arr1 = [1,2,3,4,5];
// let arr2 = [2,3,4,5,6];

// let arr3 = [];
// console.log(arr3);
// let idx = 0;
// for(let i=0;i<arr1.length;i++){
//     arr3[idx++] = arr1[i];
// }

// for(let i=0;i<arr2.length;i++){
//     arr3[idx++] = arr2[i];
// }

// console.log(arr3);

// function mergeArrays(arr1, arr2){
//     return [...arr1, ...arr2];
// }

// let mergedArray = mergeArrays(arr1, arr2);
// console.log(mergedArray);

// const car = {
//     brand : "mercedese",
//     model : "Sports",
//     year : 2013

    
// };
// console.log(car);
// // creating a new property in object
// car.cost = 34555;
// console.log(car);
// console.log(car.brand);
// console.log(typeof(car));

// // deleting a property in object
// delete car.year;
// console.log(car);

// // using for - in method 
// for(let val in car){
//     console.log(val +" : "+ car[val]);
// }

// // using Object.keys()

// for(let key of Object.keys(car)){
//     console.log(key +" : "+ car[key]);
// }

// // using object.entries()
// console.log("USing entries()");
// for(let [key,value] of Object.entries(car)){
//     console.log(key+" : " + value);
// }

// // using object.values();
// console.log("Using values()");
// for(let value of Object.values(car)){
//     console.log(value);
// }


// //==================
// const person = {
//     fullname1 : "Bhupendra maurya",
//     age : 23,

//     val : function fullName2(){
//         return this.fullname1;
//     }
    
// };

// for(let key in person){
//     console.log(person[key]);
// }

// console.log(person.val());

// // Copy an object using the spread operator and modify a property in the new object.

// const person2 = {
//     name : "Bhupendra",
//     age : 23,
//     country : "USA"
// };

// const updatedPerson = {...person, age : 30};
// console.log(person);
// console.log(updatedPerson);


// Learning Functions
// console.log("Functions");

// function sum(a, b){
//     return a+b;
// }

// let output = sum(5,5);
// console.log(output);

// // Making and learning an arrow function
// const val = (a,b) => { return a+b; };

// console.log(val(3,4));

// const val2 = () => { 
//     console.log("Hello arrow function");
// };
// val2();

// // making a function with default arguments

// function hello(name = "Bhupendra", greetings = "Hi"){
//     return `${greetings}, ${name}!`;
// }

// // calling the function with different arguments
// console.log(hello());
// console.log(hello("Raja"));
// console.log(hello("how are you", "Dharmendra"));

// Closures
// function closure(){
//     let x = 56;
//     function add(){
//         x = x + 45;
//         console.log(x);
//     }

//     return add;
// }

// let value = closure();
// value();

// value();

// function createCounter(){
//     let count = 0;

//     return function (){
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());


// function closure (){
//     let count = 0;
//     function hello(){
//         console.log("Hello private bro");
//     }

//     hello();
// }

// console.log(count)

// closure();

// function callback(){
//     console.log("I am callback");
// // }

// function callback(){
//     console.log("I am callback");
// }

// function hello(callback){
//     console.log("BEfore callback:");
//     callback();
//     console.log("After callback");
// }

// hello(callback());

// Arrays

// const arr = [1,2,3,4,5];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let n = arr.length;

// console.log(arr[0] +" "+ arr[n-1])
// arr.push(6);
// console.log(arr);

// arr.unshift(7);
// console.log(arr);

// console.log(arr.shift());

// arr.pop();
// console.log(arr);

// console.log(arr.length);

// let arr = [1,2,3,4,5,6]
// arr.forEach(function print(val){
//     console.log(val);
// })
// console.log("\n")
// function print(val){
//     console.log(val);
// }

// arr.forEach(function print(val){
//     console.log(val);
// });

// arr.forEach((val) =>{
//     console.log(val);
// })

// let arr = [1,2,4,5,6,7];
// console.log(arr);

// function doubled(x){
//     return 2 * x;
// }

// let double = arr.map(doubled);
// console.log(double);

// let double2 = arr.map((x) => {return 3*x} );
// console.log(double2);

// let triple = arr.map(function tripled(x){
//     return 4 * x;
// })

// console.log(triple); 

// let arr = [1,2,3,4,5,6,6,7]
// console.log(arr);

// function newArray(x){
//     return x % 2;
// }

// let ans = arr.filter(newArray);
// console.log(ans);

let arr = [0,1,2,-300,4,5,6000];
console.log(arr);

/////////////////
console.log("Finding the sum using for loop");

function addition(arr){
    let sum = 0;
    
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }

    return sum;
}

let ans = addition(arr);
console.log(ans);


//////////////
console.log("Finding the sum using the Reduce method");

// another way to add the elements of given array
let sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
},0);

console.log(sum);

///////////////
console.log("Finding the min value from array using the Reduce()");
let mini = arr.reduce((acc, curr) =>{
    if(curr < acc){
        acc = curr;
        return acc;
    }
    else{
        return acc;
    }
},Number.MAX_VALUE);

console.log(mini);

///////////////
console.log("Finding the maximum value using the reduce()");
let maxi = arr.reduce((acc, curr) => {
    if(curr > acc){
        acc = curr;
        return acc;
    }
    else{
        return acc;
    }
}, Number.MIN_VALUE);

console.log(maxi);