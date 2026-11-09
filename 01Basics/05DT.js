/*
There 2 types od datatype
1) Primitive: string, Number, Boolean, null, Undefined, Symbol, bigint
2) non-premitive:  Arrays, Objects, Functions
*/

const id=Symbol("123")
const anotherid=Symbol("123")
console.log(id)
console.log(anotherid)
console.log(id===anotherid)

const bignum=4532332423423423423n
console.log(bignum)

const hero=["skman","nigga"]

let myobj={
   name:"adi",
   age:22,
}

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof bignum)
console.log(typeof myFunction)







//************************Memory*******************
/*
There are two types of memory:
1) Stack(used in all primitive type)
    jo nhi variable declare karte hai uski ek copy milti hai
2)Heap(used in all non premitive types)
    yaha se hame reference milta hai variable ka
*/

let myytname="adi"
let anothername=myytname
anothername="cahca"
console.log(anothername)
console.log(myytname)

let userone={
    email:"luadf@gmail.com",
    upi:"useroneid",
}
let usertwo=userone
usertwo.email="adi@gmial.com"
usertwo.upi="34313"
console.log(usertwo)
console.log(usertwo)
