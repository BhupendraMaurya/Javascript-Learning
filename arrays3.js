let arr = [1,2,3,3,4,5,5,10];
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
function myfun(num){
    return 2 * num;
}

const ans = arr.map(myfun);
console.log(ans);

// Write a // function to filter out even numbers from an array using filter.

function even(num){
    return num % 2 == 0;
}

const ans2 = arr.filter(even);
console.log(ans2);


// Write a function to find the sum of all elements in an array using reduce.


const ans3 = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
},0);

const ans4 = arr.reduce((acc, curr) => acc + curr,0);
console.log(ans3);
console.log(ans4);

const ans5 = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
console.log(ans5); 

const ans6 = arr.reduce((acc, curr) => {
    if(curr > acc){
        acc = curr;
    }

    return acc;
}, arr[0]);

console.log("Maximum  " + ans6);