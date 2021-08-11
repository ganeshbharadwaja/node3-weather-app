// setTimeout(() => {
//     console.log('Logging takes 2 secons!')
// }, 2000)

// const names = ['ganesh', 'vamsi', 'narendra']; //filter return bollen values 
// const shortNames =names.filter((name) => {
//  console.log(name.length <= 4);
// });

// const geocode = ((address,callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//         }
//         callback(data);
//     }, 2000)
// })
// const list = geocode('narasaraopet',(data) => {
//     console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!



// const add = (a,b,callback) => {
//     setTimeout(() => { 
//          callback (a + b);
//     }, 2000)
// }
// add(1,4, (sum) => {
//     console.log(sum);
// })


// const mul = ((a,callback) => {
//     setTimeout(() => {
//         callback(a * a);
//     }, 2000)
// })
// mul(24, (square) => {
//     console.log(square)
// });


// const geocode = (address,callback) => {
//     setTimeout(() => {
//         const data = {
//             name: 'ganesh',
//             age: 26
//         }
//         callback(data)
//     },2000);

// }
// geocode('narasaraopet', (data) => {
//     console.log(data);
// })