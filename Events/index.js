function Alert(){
    alert('Welcome to my Page')
}
function Click(){
    document.getElementById("clickMe").innerHTML="Button is clicked"
}
function showonChange(){
   var choice=document.getElementById('select').value;
   document.getElementById('showonChange').innerHTML=choice;
}