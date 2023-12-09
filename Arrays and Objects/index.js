/* Objects */
var users={
    fristName:"Muhammad",
    lastName:"Naeem",
    address:"Sadiqabad",
    email:"faltooswag@gmail.com",
    fullName:function(){
        return this.fristName+ " "+this.lastName;
    }
}
var fname=users.fristName;
var lname=users.lastName;
var address=users.address;
var mail=users.email
var fullName=users.fullName();
document.getElementById("object1").innerHTML=fullName;
document.getElementById("object2").innerHTML=lname;
document.getElementById("object3").innerHTML=address;
document.getElementById("object4").innerHTML=mail;
/* Arrays */
var students=[
"Naeem",
"Alina",
"Ali",
3,
"Bilal",
"Bismillah",
89,
'@'
];
var newStudents=["Awais","Usman","Lodhi"];
/* How to merged arrays */
var mergedArray=students.concat(newStudents)
/* students[4]=newStudents; */
/* How to chnage value of array */
students[1]=4;
var showStudent=students[4];
var arrayLength=mergedArray.length;

document.getElementById("array1").innerHTML=mergedArray
document.getElementById("array2").innerHTML=arrayLength