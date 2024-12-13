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