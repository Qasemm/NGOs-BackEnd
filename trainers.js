<<<<<<< HEAD
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
                trainer => '<div class="list"><div class="im"><img src="'+trainer.picture+'" alt=""></div><div class="im contnt desc"><h3>'+trainer.name+' <img class="remove" src="img/error.png"></h3><p>'+trainer.email+'</p><p>'+trainer.mobile+'</p><p>'+trainer.address+'</p></div></div></a></div>'
            );
        
            document.getElementById("container").innerHTML += htmlArray.join('');
        }
        
        renderTrainees(data);
      })
    }
=======
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
                trainer => '<div class="list"><div class="im"><img src="'+trainer.picture+'" alt=""></div><div class="im contnt desc"><h3>'+trainer.name+' <img class="remove" src="img/error.png"></h3><p>'+trainer.email+'</p><p>'+trainer.mobile+'</p><p>'+trainer.address+'</p></div></div></a></div>'
            );
        
            document.getElementById("container").innerHTML += htmlArray.join('');
        }
        
        renderTrainees(data);
      })
    }
>>>>>>> 5b4f87f89bdfd4493da225fc7c72b8502c02e901
      