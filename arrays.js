const arr  = [250, 645,300, 900, 60];
let ans = [];
for(let i = 0;i<arr.length;i++){
    let val = 0.1 * arr[i];
    arr[i] = arr[i] - val;
}
console.log("Price after discount is  this : ")
console.log(arr);