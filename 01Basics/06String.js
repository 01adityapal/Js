const name="Aditya"
const ename="pal"
// console.log(name+" "+ename)
// console.log(`Hello my first name is ${name} and my last name is ${ename}`)

//how ot declare string
const gname=new String("hitesh")  
console.log(gname[0])
console.log(gname.__proto__)
console.log(gname.length)
console.log(gname.toUpperCase())
console.log(gname.charAt(2))
console.log(gname.indexOf('t'))

const newstr=gname.substring(0,4)
console.log(newstr)

const anotherstr=gname.slice(0,4)
console.log(anotherstr)
//slice me -ve value bhi de sakte hai
const anotherstr2=gname.slice(-7,8)
console.log(anotherstr2)

const newstr3="   hgfdsr    "
console.log(newstr3)
console.log(newstr3.trim()) 

const url="https://adi.com/adi%20fng"
console.log(url.replace("%20", "-"))
console.log(url.includes('sundar'))

const xname="adi ssgn gskg ksgsg kgks"
console.log(xname.split(' '))