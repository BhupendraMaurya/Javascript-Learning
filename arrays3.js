let arr = [9,33,12,343, 0,1,2,3,3,4,5,5,10];
console.log(arr);


// console.log(arr[0], " ", arr[3], " ", arr[arr.length-1]);

// arr.unshift(11);
// console.log("Adding in front: " + arr);

// arr.push(333);
// console.log("Adding in last: " + arr);

// arr.shift();
// console.log("Removing from front: " + arr);

// arr.pop();
// console.log("removing from back: "+arr);

// console.log(arr.length);

// function logging(arr){
//     for(let i of arr){
//         console.log(i);
//     }
// }
// logging(arr);

// console.log("Using for each");

// arr.forEach(function (val){
//     console.log(val);
// });

// function hello(val){
//     console.log(val);
// }

// arr.forEach(hello);

// Write a function that multiplies each number in an array by 2 using map.
// function myfun(num){
//     return 2 * num;
// }

// const ans = arr.map(myfun);
// console.log(ans);

// // Write a // function to filter out even numbers from an array using filter.

// function even(num){
//     return num % 2 == 0;
// }

// const ans2 = arr.filter(even);
// console.log(ans2);


// // Write a function to find the sum of all elements in an array using reduce.


// const ans3 = arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
// },0);

// const ans4 = arr.reduce((acc, curr) => acc + curr,0);
// console.log(ans3);
// console.log(ans4);

// const ans5 = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
// console.log(ans5); 

// const ans6 = arr.reduce((acc, curr) => {
//     if(curr > acc){
//         acc = curr;
//     }

//     return acc;
// }, arr[0]);

// console.log("Maximum  " + ans6);

// ====================================
// Write a function to find the index of a specific value in an array using indexOf.
let key = 5;
function search(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == key){
            return i;
        }
    }
}

let ans = search(arr);
if(ans == undefined){
    console.log("Not found in array");
}
else{
    console.log(ans);
}

// Write a function to check if a specific value exists in an array using includes.
console.log(arr.includes(99));

// Write a function to find the first element greater than 5 in an array using find.

function first(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] < 5){
            return arr[i];
        }
    }
}

console.log(first(arr));

// Write a function to sort an array of numbers in:
// Ascending order.
arr.sort(); // sorting in lexicographically
arr.sort(function (a,b) { // logic to sort in ascending order
    return a - b;
})
console.log(arr);

const arr2 = ["guava", "Apple", "bnana", "dog"];

console.log(arr2);
arr2.sort();
console.log(arr2);

// Descending order.

arr.sort(function (a,b){
    return b - a;
})

console.log(arr);