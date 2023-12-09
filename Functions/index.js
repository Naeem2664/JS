function Alert(){
    alert('Welcome to my Page')
}
function Click(){
    document.getElementById("clickEvent").innerHTML="Button is clicked"
}
function add(a,b){
    var sum=a+b;
    return sum;
}
var sum=add(10,67)
document.getElementById("addition").innerHTML="10+67 ="+ sum;

function subtract(a,b){
    var subtract=a-b;
    return subtract;
}

var subtarct=subtract(23,334)
document.getElementById("subtraction").innerHTML="23-334 ="+ subtarct;

function multiply(a,b){
    var multiply=a*b;
    return multiply;
}

var multiply=multiply(23,65)

document.getElementById("multiplication").innerHTML="23x65 ="+multiply

function division(a,b){
    var divid=a/b;
    return divid;
}

var divid=division(23,867)
document.getElementById("division").innerHTML="23/867 ="+divid