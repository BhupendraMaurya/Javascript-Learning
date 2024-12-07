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

let arr1 = [1,2,3,4,5];
let arr2 = [2,3,4,5,6];

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