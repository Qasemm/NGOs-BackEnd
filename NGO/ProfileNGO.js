let ngoName = document.getElementById("ngoName")
let url = document.getElementById("url")
let email = document.getElementById("email")
let bio = document.getElementById("BioId")
let new_name = document.getElementById("name_input")
let b64 = "";


if(localStorage.getItem("token")==undefined){
  window.location="../Login/Login.html"

}

let save_btn = document.getElementById('save');
save_btn.style.display = "none";
let ProfileImg = document.getElementById('preview').style.cursor = "pointer";

let cancle_btn = document.getElementById('cancle');
cancle_btn.style.display = "none";
let inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute("readonly", "");
  inputs[i].style.backgroundColor = "transparent";
};
document.getElementById("preview").addEventListener("click", change_value())
function change_value() {
  save_btn.style.display = "block";
  cancle_btn.style.display = "block";
  /* ProfileImg.style.cursor="pointer";*/
  for (let i = 0; i < inputs.length; i++) {

    inputs[i].removeAttribute("readonly");
    inputs[i].style.backgroundColor = "white";

    var fileTag = document.getElementById("filetag");
    preview = document.getElementById("preview");
    fileTag.addEventListener("change", function () {
      changeImage(this);
      console.log(this)
    });

    function changeImage(input) {
      // ProfileImg.style.cursor = "pointer";
      if (input.files && input.files[0]) {
        img = new FileReader();
        img.onload = function (e) {
          b64 = img.result.replace(/^data:.+;base64,/, '');
          console.log(b64)

        }
        img.readAsDataURL(input.files[0]);

      console.log(b64)

      }
    }
  }
};
function save() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("readonly", "");
    inputs[i].style.backgroundColor = "transparent";
  }
  save_btn.style.display = "none";
  cancle_btn.style.display = "none";
  updata_ngo()
}
function cancle() {
  let inputs = document.getElementsByClassName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("readonly", "");
    inputs[i].style.backgroundColor = "transparent";
  };
  save_btn.style.display = "none";
  cancle_btn.style.display = "none";
}




function onload() {
  let header = new Headers()
  header.append("authorization", "Bearer:" + localStorage.getItem("token"))
  fetch("http://localhost:3000/ngo/", {
    method: "GET",
    headers: header
  }).then(res => res.json()).then(data => {
    let preview = document.getElementById("preview");
    let dataNGO = data[0]
    console.log(data)
    ngoName.innerHTML = dataNGO.name
    bio.innerHTML = dataNGO.bio
    email.value = dataNGO.email
    url.value = dataNGO.website
    new_name.value=dataNGO.name
    console.log(dataNGO.logo)
    preview.src="http://localhost:3000"+dataNGO.logo;

    
    //////////////////////////////////////////////
  })
}

function updata_ngo() {
  let ngoName = document.getElementById("ngoName")
  let new_name = document.getElementById("name_input")
  let bio = document.getElementById("BioId")
  ngoName.innerHTML=new_name.value
 let  input   = document.getElementById("filetag");

  
  input.onchange = function () {
  
    var file = input.files[0],
      img = new FileReader();
  
    
    img.onloadend = function () {
      b64 = img.result.replace(/^data:.+;base64,/, '');
     let preview = document.getElementById("preview");
      preview.src
      // if(b64===""){
      //   console.log("trr")
      //   preview.src="./img/user_icon.jpg";
      //   b64="/img/user_icon.jpg"
      // }else{
        preview.src="http://localhost:3000"+dataNGO.logo;
  
      // }
      
    };
  
    img.readAsDataURL(file);
  };
  
  let header = new Headers()
  header.append("authorization", "Bearer:" + localStorage.getItem("token"))
  header.append("content-type", "application/json")
  fetch("http://localhost:3000/ngo/", {
    method: "PUT",
    headers: header,
    body: JSON.stringify({ name: ngoName.innerHTML, bio: bio.value, website: url.value ,logo:b64})
  }).then(res => res.json()).then(data => {
    console.log(data)
  })
}



function logout(){
  localStorage.removeItem("token")
    window.location="../Login/Login.html"
}
