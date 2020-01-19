url = window.location.href;
console.log( getParameterByName("id", url));
function getParameterByName(name, url) {
    
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

show();


    function show(){
      let id =  getParameterByName("id", url);
      fetch('http://localhost:3000/trainer/'+id, {
             method: 'GET',
         })
         .then(response => response.json())
         .then(data => {
           console.log(data);
           function renderTrainees(data) {
        const htmlArray = data.map(
          trainer => ' <div class="profile"  ><div class="profileImg"><label><img src="http://localhost:3000'+trainer.picture+'" alt="" id="preview" ><input type="file" id="filetag" style="visibility: hidden;"></label></div><div  class="infoProfile" id="infoProfile" ><input class="input" type="text" value="'+ trainer.name+'" id="name"><br><br><input class="input" type="email" id="email" value="'+ trainer.email +'"><p></p><input class="input" type="tel" id="phone" value="'+ trainer.mobile + '"><br><br><input class="input" type="text"id="address" value="'+ trainer.address +'"></div></div><div class="Bio"><h2>'+ trainer.name+'<img id="EditId" class="EditIcon" src="img/iconfinder_edit.png" onclick="change_value()" ></h2><h3>Bio: </h3><textarea style="border-style: none;" id="BioId" class="input" class="BioId" style="height: 300px;">'+ trainer.short_bio + '</textarea><div class="btn"><button type="submit" id="save" class="savebtn" >save</button><button type="submit" id="cancle" class="Canclebtn">Cancle</button></div>'
        );

        document.getElementById("container").innerHTML += htmlArray.join('');


      }
      renderTrainees(data);

          });
    
     }



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

    ///////////////////

    // show();
    // function show(){
    //   fetch('http://localhost:3000/trainer/'+20, {
    //          method: 'GET',
    //      })
    //      .then(response => response.json())
    //      .then(data => {
    //        console.log(data);
    //        function renderTrainees(data) {
    //     const htmlArray = data.map(
    //       trainer => ' <div class="profile"  ><div class="profileImg"><label><img src="img/user_icon.jpg" alt="" id="preview" ><input type="file" id="filetag" style="visibility: hidden;"></label></div><div  class="infoProfile" id="infoProfile" ><input class="input" type="text" value="'+ trainer.name+'" id="name"><br><br><input class="input" type="email" id="email" value="'+ trainer.email +'"><p></p><input class="input" type="tel" id="phone" value="'+ trainer.mobile + '"><br><br><input class="input" type="text"id="address" value="'+ trainer.address +'"></div></div><div class="Bio"><h2>'+ trainer.name+'<img id="EditId" class="EditIcon" src="img/iconfinder_edit.png" onclick="change_value()" ></h2><h3>Bio: </h3><textarea style="border-style: none;" id="BioId" class="input" class="BioId" style="height: 300px;">'+ trainer.short_bio + '</textarea><div class="btn"><button type="submit" id="save" class="savebtn" >save</button><button type="submit" id="cancle" class="Canclebtn">Cancle</button></div>'
    //     );

    //     document.getElementById("container").innerHTML += htmlArray.join('');


    //   }
    //   renderTrainees(data);

    //       });
    
    //  }