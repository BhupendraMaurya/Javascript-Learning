// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Promises resolved value");
//     },10000);
// });

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Promises resolved value");
//     },5000);
// });


// // await can only be used inside an async function
// async function handlePromise(){
//     console.log("Hello world");
    
//     // JS engine was waiting for promise to resolved.
//     const val = await p1;
//     console.log("Namaste javascript 1");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste javascript 2");
//     console.log(val2);
    
// }

// handlePromise();


const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Promises resolved value");
    },5000);
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Promises resolved value");
    },10000);
});


// await can only be used inside an async function
async function handlePromise(){
    console.log("Hello world");
    
    // JS engine was waiting for promise to resolved.
    const val = await p1;
    console.log("Namaste javascript 1");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste javascript 2");
    console.log(val2);
    
}

handlePromise();