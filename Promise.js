const myPromise = new Promise(function(resolve, reject){
    let a = 10;
    let b = 10;

    setTimeout(() =>{
        if(a===b){
            resolve("values are equal")
        }
        else{
            reject("values are not equal")
        }
    }, 2000)

});
myPromise.then(function(result){
    console.log(result);
});
myPromise.catch(function(rejectPromise){
    console.log(rejectPromise);
})

//order coffee
function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
            resolve('Order for coffee recieved')
        }
        else{
            reject("Order is rejected")
        }
    })
}
function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed');
        resolve(`${order} and is served`)
    })
}
// placeOrder("coffee").then(function(result){
//     console.log(result);
//     let processOr = processOrder(result);
//     return processOr
// }).then(function(process){
//     console.log(process);
// }).catch(function(rejectOrder){
//     console.log(rejectOrder);
// })

//asyn, await
// async function serveOrder(){
//     try{
//         let orderPlaced = await placeOrder("coffee");
//         console.log(orderPlaced);
//         let processdOrder = await processOrder(orderPlaced);
//         console.log(processdOrder);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// serveOrder()
