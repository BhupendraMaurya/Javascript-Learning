// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P1 success"),3000);
// });

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P2 success"),1000);
//     //setTimeout(() => reject("P2 rejects"),1000);
// });

// const p3 = new Promise((resolve, reject) =>{
//     //setTimeout(() => resolve("P3 success"),2000);
//     setTimeout(() => reject("P3 fails"),2000);
// });


// Promise.all([p1,p2,p3])
//   .then ((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P1 success"),3000);
// });

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P2 success"),1000);
//     //setTimeout(() => reject("P2 rejects"),1000);
// });

// const p3 = new Promise((resolve, reject) =>{
//     //setTimeout(() => resolve("P3 success"),2000);
//     setTimeout(() => reject("P3 fails"),2000);
// });


// Promise.allSettled([p1,p2,p3])
//   .then ((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });



// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P1 success"),3000);
// });

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P2 success"),5000);
//     //setTimeout(() => reject("P2 rejects"),1000);
// });

// const p3 = new Promise((resolve, reject) =>{
//     //setTimeout(() => resolve("P3 success"),2000);
//     setTimeout(() => reject("P3 fails"),2000);
// });


// Promise.race([p1,p2,p3])
//   .then ((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });



const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("P1 fail"),3000);
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("P2 fail"),5000);
    //setTimeout(() => reject("P2 rejects"),1000);
});

const p3 = new Promise((resolve, reject) =>{
    //setTimeout(() => resolve("P3 success"),2000);
    setTimeout(() => reject("P3 fails"),2000);
});


Promise.any([p1,p2,p3])
  .then ((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });