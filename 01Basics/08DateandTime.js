let mydate=new Date()
// console.log(mydate)
// console.log(typeof mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

//How ot declare date
/*1*/ let mycreateddate=new Date(2023,0,23)   //Month 0 se start hai js me
/*2*/ let mycreateddate2=new Date(2023,0,23,5,3)
/*3*/ let credate=new Date("2023-01-14")
/*4*/ let inddate=new Date("01-14-2023")
// console.log(mycreateddate.toDateString())
// console.log(mycreateddate2.toDateString())
// console.log(mycreateddate.toLocaleString())
// console.log(mycreateddate2.toLocaleString())
// console.log(credate)
// console.log(inddate)

let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Date.now()/1000);   //agar second me chiye to ye    //val decimal me aa sakti hai
// console.log(Math.floor(Date.now()/1000));   //agar second me chiye to ye   

let newdate=new Date()
console.log(newdate)
console.log(newdate.getFullYear())
console.log(newdate.getMonth()+1)   

//ye important method hai
newdate.toLocaleDateString('default',{
    weekday:'long'
,    timezone:'Asia/Kolkata',
})