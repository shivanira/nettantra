function saveRecord()
{

var institute=document.getElementById("institute").value;
var country=document.getElementById("country").value;

var percentage=document.getElementById("percentage").value;
var hinstitute=document.getElementById("hinstitute").value;
var ssc=document.getElementById("ssc").value;
var percentage2=document.getElementById("percentage2").value;
var cpu=document.getElementById("cpu").value;
var cein=document.getElementById("cein").value;


var op=document.getElementById("op").value;
var cb=document.getElementById("cb").value;
let user_data={
    institute:institute,
    country:country,
    percentage:percentage,
    hinstitute:hinstitute,
    ssc:ssc,
    percentage2:percentage2,
    cpu:cpu,
    cein:cein,
    op:op,
      cb:cb
       
}

console.log(user_data);
localStorage.setItem("records",JSON.stringify(user_data));
}