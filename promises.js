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

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Promise success:");
//         reject("Error occured in my promise");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled:", res);
// });

// promise.catch((err) => {
//     console.log("Rejected", err);
// });

// 22-11-2024
// console.log("Learning Promises");
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
    
//     resolve("Error has been resolved");
//     // reject("Some error");
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }

// 23-11-2024

// function asyncFunc(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("Success");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data of second function");
//             resolve("second function resolved successfully");
//         },4000);
//     });
// }

// function asyncFunc3(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("third promise is getting ready");
//             //resolve("Third promise would be resolved here");
//             reject("Third promise did not execute");
//         },5000);
//     })
// }

// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log("hello promises");
//     console.log(res);

//     // promises chaining;
//     // so here firstly first promises would be executed and then only second promise would be 
//     // executed.
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log("second promise is executed");
//         console.log(res);

//         // promise chaining for 3rd function
//         asyncFunc3().then((res) => {
//             console.log("Third promise is exectuing");
//             console.log(res);
//         });

//         asyncFunc3().catch((err) => {
//             console.log("third func did not execute so catching its error");
//             console.log(err);
//         })
//     });
// });



// 2nd example of promise chain
console.log("2nd example of promise chaining");
function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success");
        },3000);
    });
}

// now executing the promise chain
console.log("Fetching the first data");
getData(1).then((res) =>{
    console.log(res);

    console.log("Fetching the 2nd data");
    getData(2).then((res) => {
        console.log(res);

        console.log("Fetching the 3rd data");
        getData(3).then((res) => {
            console.log(res);
        })
    })

})
