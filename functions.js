// let arr = [1,2,3,4,5];
// let i = 0;
// arr.forEach((val) => {
//     arr[i] = val * val;
//     i++;
// });

// console.log(arr);

// let arr = [12,222,333,53,3434,344,55,2324];

// let ans = arr.filter(function calculate(val){
//     return val > 90;
// });

// console.log(ans);

let n = prompt("Enter number:");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}

console.log("Your array elements are this", arr);

let ans = arr.reduce((sum, curr) =>{
    sum += curr;
    return sum;
},0);

console.log("Sum of numbers ", ans);

let ans2 = arr.reduce((sum, curr) => {
    sum *= curr;
    return sum;
},1);

console.log("Product of numbers:", ans2);