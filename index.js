console.log("Start");
setTimeout(function cb(){
    console.log("callback");
},5000);
console.log("end");

let startTime = new Date().getTime();
let endTime = startTime;

while(endTime < startTime + 10000){
    endTime = new Date().getTime();
}

console.log("while expires");
 
