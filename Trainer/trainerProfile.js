let save_btn=document.getElementById('save');
    save_btn.style.display="none";
    let cancle_btn=document.getElementById('cancle');
    cancle_btn.style.display="none";
    let inputs=document.getElementsByClassName("input");
    for(let i=0;i<inputs.length;i++){
      inputs[i].setAttribute("readonly","");
      inputs[i].style.backgroundColor="transparent";
      };
      document.getElementById("EditId").addEventListener("click",change_value);
      document.getElementById("save").addEventListener("click",save);

    function change_value(){
      save_btn.style.display="block";
      cancle_btn.style.display="block";
      for(let i=0;i<inputs.length;i++){
          
          inputs[i].removeAttribute("readonly");
          inputs[i].style.backgroundColor="white";

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
    show();
    function show(){
      fetch('http://localhost:3000/trainer/'+22, {
             method: 'GET',
         })
         .then(response => response.json())
         .then(data => {
           console.log(data)
          document.getElementById('show1').innerHTML +=' '
          });
    
     }