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

// let arr = [0,1,2,-300,4,5,6000];
// console.log(arr);

/////////////////
// console.log("Finding the sum using for loop");

// function addition(arr){
//     let sum = 0;
    
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }

//     return sum;
// }

// let ans = addition(arr);
// console.log(ans);


// //////////////
// console.log("Finding the sum using the Reduce method");

// // another way to add the elements of given array
// let sum = arr.reduce((acc, curr) => {
//     acc += curr;
//     return acc;
// },0);

// console.log(sum);

// ///////////////
// console.log("Finding the min value from array using the Reduce()");
// let mini = arr.reduce((acc, curr) =>{
//     if(curr < acc){
//         acc = curr;
//         return acc;
//     }
//     else{
//         return acc;
//     }
// },Number.MAX_VALUE);

// console.log(mini);

// ///////////////
// console.log("Finding the maximum value using the reduce()");
// let maxi = arr.reduce((acc, curr) => {
//     if(curr > acc){
//         acc = curr;
//         return acc;
//     }
//     else{
//         return acc;
//     }
// }, Number.MIN_VALUE);

// console.log(maxi);

const arr = [1,2,3,4,5,6, 45, 56]
console.log(arr)

// finding the index of array element 2
console.log(arr.indexOf(2));

// checking the existent of any value in array'

function exist(x){
    if(arr.indexOf(x) ==-1){
        console.log(`${x} does not exist in array`);
    }
    else{
        console.log(`${x} exist in given array`);
    }
}

exist(2);
exist(-5);

// checking the existent of any number using the includes

console.log(arr.includes(2)) // search for 2 from starting
console.log(arr.includes(-10, 2)) // start searching for 2, from index 2.

// Find the first number greater than 10 in an array using find.
// using the for loop

for(let i=0;i<arr.length;i++){
    if(arr[i] > 10){
        console.log(arr[i]);
        break;
    }
}

// using the find()
let ans2 = arr.find(curr => curr > 10);
console.log(ans2);

let ans3 = arr.find(function hello(curr){
    return curr > 100;
});
console.log(ans3);

// Find all numbers greater than 10 using filter.

// without using the filter()
// let arr2 = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i] > 10){
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2);

// // using the filter();

// function greaterThanTen(x){
//     return x > 10;
// }

// let result = arr.filter(greaterThanTen)
// console.log(result)

// // using the arrow function for the above function
// let result2 = arr.filter((x) => x > 10)
// console.log(result2);


// // Sort an array of numbers in ascending and descending order.
// let number = [1,4,2,5,2,3,7,5];
// console.log(number)
// // custom logic to sort in ascending order
// number.sort((a,b) => a - b);

// console.log(number);

// // logic to sort in descending order
// number.sort((a,b) => b - a);
// console.log(number);


