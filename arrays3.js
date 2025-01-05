let arr = [1,2,3,3,4,5,5];
console.log(arr);


console.log(arr[0], " ", arr[3], " ", arr[arr.length-1]);

arr.unshift(11);
console.log("Adding in front: " + arr);

arr.push(333);
console.log("Adding in last: " + arr);

arr.shift();
console.log("Removing from front: " + arr);

arr.pop();
console.log("removing from back: "+arr);

console.log(arr.length);


