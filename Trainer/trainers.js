let close_item = document.getElementsByClassName("remove");
enable_close();
function enable_close() {
  for (let i = 0; i < close_item.length; i++) {
    close_item[i].addEventListener("click", e => {
      e.target.parentElement.parentElement.parentElement.remove();
    })
  }
};
let divs = document.getElementsByClassName("list")
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", e => {
    if (e.target.tagName = "DIV") {
      console.log(e.target.getAttribute("id"))

    }

  })
}
// document.getElementById("desc").addEventListener('click',trainerProfile);
//   function trainerProfile(){
//     window.location = 'trainerProfile.html';
//   }

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
          trainer => '<div class="list"><div  class="im"><img onclick="openProfile()" id = ' + trainer.id + ' src="http://localhost:3000' + trainer.picture + '" alt=""></div><div  class="im contnt desc"><h3 >' + trainer.name + ' <img class="remove" id = ' + trainer.id + '  src="img/error.png"></h3><p>' + trainer.email + '</p><p >' + trainer.mobile + '</p><p>' + trainer.address + '</p></div></div></a></div>'
        );

        document.getElementById("container").innerHTML += htmlArray.join('');

        enable_close();

      }
      renderTrainees(data);
    })
}

////////////////
function enable_close() {
  console.log(close_item.length);
  for (let i = 0; i < close_item.length; i++) {
    close_item[i].addEventListener("click", e => {

      e.target.parentElement.parentElement.parentElement.remove();
      
      let x = e.target.id ;

      console.log(x)

      const myheaders = new Headers();
      myheaders.append('Content-Type', 'application/json');

      fetch('http://localhost:3000/trainer',
        {
          method: 'DELETE',
          headers: myheaders,
          body: JSON.stringify({
            id: x
          })
        }).then(Response =>
          Response.json())
        .then(data => {
          // console.log(data);

        })

    })
  }
};



let id_profile = document.getElementsByClassName("im");

function openProfile(){

  for (let i = 0; i < id_profile.length; i++) {
    id_profile[i].addEventListener("click", e => {

      let x = e.target.id ;
      console.log(x);

    })
  }
};

    


    




// function trainerProfile() {

//   let divs = document.getElementsByClassName("list")
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", e => {
//     if (e.target.tagName = "DIV") {
//       console.log(e.target.getAttribute("id"))

//     }

//   })
// }

//   window.location = 'trainerProfile.html';
