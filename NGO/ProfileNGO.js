let save_btn = document.getElementById('save');
save_btn.style.display = "none";
let ProfileImg = document.getElementById('preview').style.cursor = "pointer";
let token = localStorage.getItem('token');
let header = new Headers();
header.append('content-type', 'application/json')
header.append('authorization', token)

let cancle_btn = document.getElementById('cancle');
cancle_btn.style.display = "none";
let inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute("readonly", "");
  inputs[i].style.backgroundColor = "transparent";
};
document.getElementById("EditIcon").addEventListener("click", change_value);
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
    });
    function changeImage(input) {
      ProfileImg.style.cursor = "pointer";
      var reader;
      if (input.files && input.files[0]) {
        reader = new FileReader();
        reader.onload = function (e) {
          preview.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
function save() {
  EditNgo();
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("readonly", "");
    inputs[i].style.backgroundColor = "transparent";
  }
  save_btn.style.display = "none";
  cancle_btn.style.display = "none";
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



function EditNgo() {
  let name = document.getElementById("name").value;
  let url = document.getElementById("url").value;
  let BioId = document.getElementById("BioId").value;
  let logo = document.getElementById("preview").src;
  fetch('http://localhost:3000/ngo', {
    method: 'post',
    headers: header,
    body: JSON.stringify({
      new_name: name,
      new_bio: BioId,
      new_website: url,
      new_logo: logo
    })
  }).then(re => {
    return re.json()
  }).then(data => {
    console.log(data)
  })
}
