var fileTag = document.getElementById("filetag");
preview = document.getElementById("preview"); 
fileTag.addEventListener("change", function() {
 changeImage(this);
});
function changeImage(input) {
 var reader;
 if (input.files && input.files[0]) {
   reader = new FileReader();
   reader.onload = function(e) {
     preview.setAttribute('src', e.target.result);
   }
   reader.readAsDataURL(input.files[0]);
 }}
 document.getElementById('save').addEventListener('click',add);

function add(){
name    = document.getElementById("name").value;
email   = document.getElementById("email").value;
num     = document.getElementById("num").value;
address = document.getElementById("address").value;
photo   = document.getElementById("filetag").value

if (name || email || num || address  === "" ){
  alert("add some information")
}else{

    const myheader = new Headers();

    myheader.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/trainer',{
        method :'post',
        headers : myheader,
        body : JSON.stringify({
          name : name,
          email : email,
          num : num ,
          address : address,
          photo : photo
        })

})
        .then(response=>response.json())
        .then((data) => {
        console.log(data);
        })


}}
