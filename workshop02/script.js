function openSidebar(){
document.getElementById("mySidebar").style.width ="250px";
document.getElementById("main").style.marginLeft ="250px";

};

function closeSidebar(){
    document.getElementById("mySidebar").style.width ="0px";
document.getElementById("main").style.marginRight ="0px";

};

function calBMI(weigth,heigth){
    let x = weigth/(heigth/100)**2;
    return x;
}
let formBMI = document.getElementById("formBMI");

formBMI.onsubmit = function(e){
   e.preventDefault();
   let w = formBMI["weigth"].value;
   let h = formBMI["heigth"].value;
   console.log(w,h)
};

let myBMI = calBMI(50,175);
document.getElementById("mypage").innerHTML = `<h1>${myBMI}</h1>`;
console.log(myBMI);