

function saveData()
{
var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;

var dob=document.getElementById("dob").value;
var email=document.getElementById("email").value;
var ffname=document.getElementById("ffname").value;
var flname=document.getElementById("flname").value;
var mfname=document.getElementById("mfname").value;
var mlname=document.getElementById("mlname").value;
var gender=document.querySelector('input[name="gender"]:checked').value;
var nationality=document.getElementById("nationality").value;
var home=document.getElementById("home").value;
var city=document.getElementById("city").value;
var country=document.getElementById("country").value;
var telephone=document.getElementById("telephone").value;
var phone=document.getElementById("phone").value;

let user_records={
    fname:fname,
      lname:lname,
      dob:dob,
      email:email,
      ffname:ffname,
      flname:flname,
      mfname:mfname,
      mlname:mlname,
      gender:gender,
      nationality:nationality,
      home:home,
      city:city,
      country:country,
      telephone:telephone,
      phone:phone   
}
console.log(user_records);
localStorage.setItem("users",JSON.stringify(user_records));
}
