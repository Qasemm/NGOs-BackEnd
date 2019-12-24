

// let trainers = [
//     {
//         name : "ahmad ammoura",
//         Email: "ammoura575@gmail.com",
//         number:"0796670230",
//         photo :"me.jpg",
//         address : "irbed/jordan"
//     }
    

// ];
gettrainers();

function gettrainers(){

    fetch('http://localhost:3000/trainer' , {
      method: 'GET',
  })
  .then(Response =>
      Response.json())
      .then( data =>{ 
          console.log(data);
          function renderTrainees(data) {
            const htmlArray = data.map(
                trainer => '<span class="close" ><img class="close" src="close.png" alt=""></span><div class="form" ><div class="im" ><img src="'+trainer.picture+'" alt=""></div><div class="im contnt" ><h3>'+trainer.name+'</h3><p>'+trainer.email+'</p><p>'+trainer.mobile+'</p><p>'+trainer.address+'</p></div></div>'
            );
        
            document.getElementById("container").innerHTML += htmlArray.join('');
        }
        
        renderTrainees(data);
      })
    }
      
      



// function renderTrainees(data) {
//     const htmlArray = data.map(
//         trainer => '<div class="form" ><div class="im" ><img src="'+trainer.photo+'" alt=""></div><div class="im contnt" ><h3>'+trainer.triner+'</h3><p>'+trainer.Email+'</p><p>'+trainer.mobile+'</p><p>'+trainer.address+'</p></div></div>'
//     );

//     document.getElementById("container").innerHTML = htmlArray.join('');
// }

// renderTrainees(trainees);