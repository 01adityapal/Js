// const score=400
// console.log(score)
//if i want to have specific DT then use htis
// const balance=new Number(200)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(3))

// const othrnum=234.343544
// console.log(othrnum.toPrecision(4))

// const newnum=1000000
// console.log(newnum.toLocaleString('en-IN'))



// *****************maths****************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(334.64565))
console.log(Math.ceil(4.2))
console.group(Math.floor(4.2))
console.log(Math.min(3,545,23,42,53,4))
console.log(Math.max(3,545,23,42,53,4))

//if we use random then we get an Number between 0 and 1
console.log(Math.random())
console.log(Math.random()*10+1) 
console.log(Math.floor(Math.random()*10)+1) 

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) +min)