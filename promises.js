// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     // resolve("Success promises");
//     reject("Some error in promise:");
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:", dataId);
//             resolve("Success");

//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data:", dataId);
//             // resolve("Success");

//             reject("Error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("Promise success:");
        reject("Error occured in my promise");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled:", res);
});

promise.catch((err) => {
    console.log("Rejected", err);
});
