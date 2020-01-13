const {getAllTrainers} = require('../api/trainer');

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

function renderTrainees(data) {
    const htmlArray = data.map(
        trainer => '<div class="list"><div class="im"><img src="'+trainer.picture+'" alt=""></div><div class="im contnt desc"><h3>'+trainer.name+' <img class="remove" src="img/error.png"></h3><p>'+trainer.email+'</p><p>'+trainer.mobile+'</p><p>'+trainer.address+'</p></div></div></a></div>'
    );

    document.getElementById("container").innerHTML += htmlArray.join('');
}

getAllTrainers('', data => {
  console.log(data);
  renderTrainees(data);
});
