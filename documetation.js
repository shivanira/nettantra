function uploadData()
{

var photo=document.getElementById("photo").value;
var hsc=document.getElementById("hscim").value;

var ssc=document.getElementById("sscim").value;

let upload_image={
    photo:photo,
    hscim:hscim,
    sscim:sscim,
   
}

console.log(upload_image);
localStorage.setItem("records",JSON.stringify(upload_image));
}