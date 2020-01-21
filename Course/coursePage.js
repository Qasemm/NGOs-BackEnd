
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
getInfOneCourse();
////////////////////////////////////////////////
function renderOneCourses(data) {

    const htmlArray = data.map(( courses,index) =>
    ' <div> <h3 >title :</h3> <p class="para">'+courses.title+'</p></div> <div>  <h3 >Trainer Of Course:</h3>  <a href="#" class="para aLink">'+courses.trainer+'</a> </div>     <div> <h3>descrption : </h3> <p class="para">'+courses.description+
    '</p> </div>  <div><h3>dates :</h3> <p class="para">'+ courses.start_date+ '    To   '+ courses.end_datel+
    '</p></div> <div> <h3> location :</h3><p class="para">'+courses.location+
    ' </p> </div><div> <h3>number of seats:    </h3> <p class="para">'+courses.number_of_seats+
    '</p> </div><div> <h3> Trainee Of Course:</h3><a id="traineeLink"   class="para aLink" onclick="getListTrainee()"> Trainee</a> </div> '
    );
    // console.log(htmlArray);
    document.getElementById("container").innerHTML = htmlArray;
  }
  ////////////////////////////////////////////////////////////////
 function getInfOneCourse(){
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/'+id,
  {
  method:'GET',
  
  }) 
  .then(Response => Response.json())
  .then( data =>{ 
    console.log(data);
   
        renderOneCourses(data);
           
  });
  
  }
  ///////////////////////////////////////////////////////////////
  // document.getElementById("traineeLink").addEventListener('click',getListTrainee);
  function getListTrainee(){
    // window.location = "../Course/coursePage.html";
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

        document.getElementById("container1").innerHTML += htmlArray.join('');
             
        };
        renderTrainees(data);
    })
    
  }