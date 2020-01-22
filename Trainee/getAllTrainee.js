// 
function getListTrainee(){
    window.location = "../Trainee/getAllTrainee.html";
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/trainee/'+id,
    {
    method:'GET',
    
    }) 
    .then(Response => Response.json())
    .then( data =>{ 
      console.log(data);
     
      function renderTrainees(data) {
        const htmlArray = data.map(
          trainer => '<div class="list"><div  class="im"><img onclick="openProfile()" id = ' + trainer.id + ' src="" alt=""></div><div  class="im contnt desc"><h3 >' + trainer.name + ' <img class="remove" id = ' + trainer.id + '  src="img/error.png"></h3><p>' + trainer.email + '</p><p >' + trainer.mobile + '</p><p>' + trainer.address + '</p></div></div></a></div>'
        );

        document.getElementById("div1").innerHTML += htmlArray.join('');
             
        };
        renderTrainees(data);
    })
    
  }