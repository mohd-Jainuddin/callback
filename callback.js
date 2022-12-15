// Lets start our Ice Cream Cafe.........

// step-1: order from costomer.
// step-2: fetch ingredients.
// step-3: start production.
// step-4: Serve.

//   Time (seconds)
// 1: place Order -> 2sec
// 2: cut the fruit -> 2sec
// 3: Add water and ice -> 1sec
// 4: start the machine -> 1sec
// 5: select container -> 2sec
// 6: select toppings -> 3sec
// 7: serve Ice Creame -> 2sec



// Stocks..................
let stocks = {
    Fruits: ["strawberry","grapes","banana","apple"],
    Holders: ["cone","cup","stick"],
    Liquid: ["water","ice"],
    toppings: ["chocolate","peanuts"]
}

let order = (Fruit_name,call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000);
}

let production = () => {
    setTimeout(()=>{
        console.log("Production has started")
        setTimeout(()=>{
            console.log("the fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
                setTimeout(()=>{
                    console.log("the machine was started");
                    setTimeout(()=>{
                        console.log(`ice cream was placed on ${stocks.Holders[0]}`)
                    },2000)
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added`);
                        setTimeout(() => {
                           console.log("serve icecream");
                        }, 2000);
                    },3000)
                },1000)
            },1000)
        },2000)
    },0000);
}
order(0,production);