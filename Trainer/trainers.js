let close_item=document.getElementsByClassName("remove");
enable_close();
function enable_close(){
  for(let i=0;i<close_item.length;i++){
    close_item[i].addEventListener("click",e=>{
    e.target.parentElement.parentElement.parentElement.remove();
  })
  }
};
document.getElementById("desc").addEventListener('click',trainerProfile);
  function trainerProfile(){
    window.location = 'trainerProfile.html';
  }
  
gettrainers();

function gettrainers() {

  fetch('http://localhost:3000/trainer', {
    method: 'GET',
  })
    .then(Response =>
      Response.json())
    .then(data => {
      console.log(data);
      function renderTrainees(data) {
        const htmlArray = data.map(
          trainer => '<div id = ' + trainer.id + ' class="list"><div id = ' + trainer.id + ' class="im"><img src="' + trainer.picture + '" alt=""></div><div id = ' + trainer.id + ' class="im contnt desc"><h3 id = ' + trainer.id + '>' + trainer.name + ' <img class="remove" src="img/error.png"></h3><p id = ' + trainer.id + ' >' + trainer.email + '</p><p id = ' + trainer.id + ' >' + trainer.mobile + '</p><p id = ' + trainer.id + ' >' + trainer.address + '</p></div></div></a></div>'
        );

        document.getElementById("container").innerHTML += htmlArray.join('');

        enable_close();
        function enable_close() {
          console.log(close_item.length);
          for (let i = 0; i < close_item.length; i++) {
            close_item[i].addEventListener("click", e => {
              console.log(i)
              e.target.parentElement.parentElement.parentElement.remove();
            })
          }
        };
        let divs=document.getElementsByClassName("list")
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", e => {
    if(e.target.tagName="DIV"){
      console.log(e.target.getAttribute("id"))

    }
    
  })
}
      }

      renderTrainees(data);
    })
}

// let divs=document.getElementsByClassName("list")
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", e => {
//     console.log(e.target.getAttribute.id_trainer)
    
//   })
// }
