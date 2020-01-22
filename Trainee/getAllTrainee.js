<<<<<<< HEAD
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
=======
let div = document.getElementById("div1");
let page = 1;
op();
window.addEventListener('scroll' , ()=>{
    let hh = document.documentElement.scrollHeight - window.innerHeight;
    let hamza = window.scrollY;
    if(Math.ceil(hamza) === hh) {
        op();
    }
});
function op() {
    fetch('http://localhost:3000/trainee/getTrainee/page/' + page, {
        method: 'GET'
    }).then(re => {
        return re.json();
    }).then(data => {
        console.log(data)
        let trainee = data.result;
        page++
        for (let i = 0; i < 9; i++) {
            div.innerHTML +=   `<div id = ${trainee[i].id} class="list">
    <div id = ${trainee[i].id} class="im">
    </div><div id = ${trainee[i].id} class="im contnt desc">
    <h3 id = ${trainee[i].id} >${trainee[i].name} </h3>
    <p id = ${trainee[i].id} > ${trainee[i].email} </p>
    <p id = ${trainee[i].id} > ${trainee[i].address} </p>
    <p id = ${trainee[i].id} > ${trainee[i].phone} </p>
    </div></div></a></div>`
        }
    });
} 
>>>>>>> 1213637599de70fda60f33cba336ba69b88d9846
