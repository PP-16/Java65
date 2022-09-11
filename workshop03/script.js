function openSidebar(){
document.getElementById("mySidebar").style.width ="250px";
};
function closeSidebar(){
    document.getElementById("mySidebar").style.width ="0px";
};

class User{
    constructor(id,name,email,phon,profile){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phon = phon;
        this,profile = profile;


    };
};
let output =""
let MyUser=[];

for(let i =0;i<10;i++){
    MyUser.push(new User(i,"dam"+i,i*100+"@gmail.com","6554654-46465"));
};

for(let item of MyUser){
    output += `<h1>id: ${item.id} name: ${item.name}</h1>`
};
document.getElementById("myPage").innerHTML = output;

console.log(MyUser);
