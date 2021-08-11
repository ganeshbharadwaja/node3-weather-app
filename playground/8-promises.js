// callbacks vs promises

// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         // callback('Things went wrong!', undefined);
//         callback(undefined, [1,2,3])
//     }, 2000)
// }
// doWorkCallback((error,result) => {
//     if (error) {
//         return console.log(error)
//     }
//     console.log(result)
// })

const doWorkPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve([1,2,3])
        reject('Things went badly')
    }, 2000)                           // promises cannot use both resolve and reject
})
doWorkPromise.then((result) => {
    console.log(result)              // for result we use then
}).catch((error) => {
    console.log(error)              // for reject we use catch
})