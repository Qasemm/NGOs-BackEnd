let save_btn=document.getElementById('save');
    save_btn.style.display="none";
  let ProfileImg=document.getElementById('preview').style.cursor="pointer";

    let cancle_btn=document.getElementById('cancle');
    cancle_btn.style.display="none";
    let inputs=document.getElementsByClassName("input");
    for(let i=0;i<inputs.length;i++){
      inputs[i].setAttribute("readonly","");
      inputs[i].style.backgroundColor="transparent";
      };
      document.getElementById("EditIcon").addEventListener("click",change_value);
    function change_value(){
      save_btn.style.display="block";
      cancle_btn.style.display="block";
     /* ProfileImg.style.cursor="pointer";*/
      for(let i=0;i<inputs.length;i++){
          
          inputs[i].removeAttribute("readonly");
          inputs[i].style.backgroundColor="white";

           var fileTag = document.getElementById("filetag");
preview = document.getElementById("preview"); 
fileTag.addEventListener("change", function() {
changeImage(this);
});
function changeImage(input) {
    ProfileImg.style.cursor="pointer"; 
var reader;
if (input.files && input.files[0]) {
 reader = new FileReader();
 reader.onload = function(e) {
   preview.setAttribute('src', e.target.result);
 }
 reader.readAsDataURL(input.files[0]);
}} 
      }
    };
    function save(){
      for(let i=0;i<inputs.length;i++){
      inputs[i].setAttribute("readonly","");
      inputs[i].style.backgroundColor="transparent";
      }
      save_btn.style.display="none";
      cancle_btn.style.display="none";
    }
    function cancle(){
        let inputs=document.getElementsByClassName("input");
    for(let i=0;i<inputs.length;i++){
      inputs[i].setAttribute("readonly","");
      inputs[i].style.backgroundColor="transparent";
      };
      save_btn.style.display="none";
      cancle_btn.style.display="none";
    }