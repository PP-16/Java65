// var ประกาศซ้ำได้ let ประกาศซ้ำไม่ได้ const ค่าคงที่เปลี่ยนไม่ได้
// var name ="halo";
// var age = 20;
// var myTrue = true;
// var myFalse = false;
// var myNull = null;

// console.log(name + age);
//---------------------------------------------------------//
// function myFunction(value1,value2){
//     return value1+" "+value2;
// }

// var result = myFunction("Halo", 20);
// console.log(result);
//---------------------------------------------------------//
// var myFunction01 = ()=> {
//     return "Halo";
// };
// console.log(myFunction01());
//---------------------------------------------------------//
// var myFunction02 = ()=> "Halo";

// console.log(myFunction02());
//---------------------------------------------------------//
// var myFunction03 = (value1,value2) => value1 ** value2;
// console.log(myFunction03(5,2));
//---------------------------------------------------------//
// var mycar ={
//     brand : "BMW",
//     model : 1,
//     color : "Black"
// };
// console.log(mycar.brand+" "+mycar.model+" "+mycar.color);
//---------------------------------------------------------//
// var myOpject ={
//     FirstName : "f**k",
//     LastName : "world",
//     fullName : (age)=>{
//         return myOpject.FirstName+" "+myOpject.LastName+" "+age;
//     },
// };

// console.log(myOpject.fullName(20));
//---------------------------------------------------------//
// document.getElementById("text").innerHTML = "f**k world";

// function changBg (){
//     document.body.style.backgroundColor = "green";
// };
//---------------------------------------------------------//
// var myArry = ["Banana","Kiwi","Apple"];
// myArry.push("Lemon"); เพิ่ม
// console.log(myArry.toString());

// var myArry = ["Banana","Kiwi","Apple"];
// myArry.pop(); ลด
// console.log(myArry.toString());
//---------------------------------------------------------//
// function testNum(value1){
//     var result;
//     if(value1 >0){
//         console.log("เต็มบวก");
//     }
//     else if(value1 < 0){
//         console.log("เต็มลบ");
//     }
//     else{
//         console.log("เต็มศูนย์")
//     }
// };

// testNum(0)
//---------------------------------------------------------//
// function testNum(value1){
//      var result;
//     if(value1 >0){
//         result="เต็มบวก";
//      }
//      else if(value1 < 0){
//         result="เต็มลบ";
//      }
//     else{
//         result="เต็มศูนย์";
//      }
//      return result;
//  };

// console.log(testNum());
//---------------------------------------------------------//
// switch (7) {
//   case 0:
//     console.log("วันจันทร์");
//     break;
//   case 1:
//     console.log("วันอังคาร");
//     break;
//   case 2:
//     console.log("วันพุธ");
//     break;
//   case 3:
//     console.log("วันพฤหัส");
//     break;
//   case 4:
//     console.log("วันศุกร์");
//     break;
//   case 5:
//     console.log("วันเสาร์");
//     break;
//   case 6:
//     console.log("วันอาทิตย์");
//     break;
//   default:
//     console.log("ไม่พบวัน");
//     break;
// }

// var myPhone = "Oppo";
// switch (myPhone) {
//   case "Iphone":
//     console.log("45000");
//     break;
//   case "Sumsung":
//     console.log("25000");
//     break;
//   default:
//     console.log("Error");
//     break;
// }
// same
// if(myPhone == "Iphone"){
//     console.log("45000");
// }
// else if(myPhone=="Sumsung"){
//     console.log("25000");
// }
// else{
//     console.log("Error");
// }
//---------------------------------------------------------//
// var cars =["BMW","Honda","Ford","Toyota"];
// for(var i =0;i<cars.length;i++){
// console.log(cars[i])
// }
//---------------------------------------------------------//
// var i;
// var j;
// for(i=1;i<=12;i++){
//     console.log("mom"+" "+i);
//     for(j=1;j<=12;j++){
//         console.log(`${i}x${j}=${i*j}`);
//     }
//     console.log("--------------------")
// }
//---------------------------------------------------------//
// var cars =["BMW","Honda","Ford","Toyota"];
// var person = {
//     fname:"f**k",
//     lname:"world",
//     age:20
// }
// var item;
// for(item in cars){
//     console.log(item);
// }

// for(item in person){
//     console.log(item);
// }
//---------------------------------------------------------//
// const  f = (x)=>{
//     return Math.pow(x,3);
// };

// var num =[0,1,3,6,7];
// var show = map(f,num);
// console.log(show);

// function map(func,data){
//     var result=[]
//     for(let i=0; i< data.length ;i++){
//         result[i] = func(data[i]);
//     };
//     return result;
// };
//---------------------------------------------------------//
// class myClass{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//      }
//      numBer(v1,v2){
//         return v1*v2;
//      }
//      fullname(){
//         return this.fname+" "+this.lname
//      }
//      static hello (name){
//         return "Halo"+name
//      }
// };

// var show = new myClass("f**k","World");
// console.log(show.numBer(8,6))
// console.log(show.fullname());
// console.log(myClass.hello("World"));
//---------------------------------------------------------//
//mom
class myClass01 {
  constructor(fname) {
    this.name = fname;
  }
  FirstName() {
    return this.name;
  }
}
//son
class myClass02 extends myClass01 {
  constructor(fname,lname) {
    super(fname);
    this.lname = lname;
  }
  fullName(){
    return this.FirstName()+" "+this.lname;
  }
}

var test = new myClass02("f**k","World");
console.log(test.fullName());
