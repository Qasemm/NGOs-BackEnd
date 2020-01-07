upatedPage();
function upatedPage() {
fetch('http://localhost:3000/courses',
{
    method:'GET',

}) 
.then(Response =>
      Response.json())
      .then( data =>{ 
          console.log(data);
          function renderTrainees(data) {

            const htmlArray = data.map(( courses,index) =>
               '<div data-id='+courses.id+' class="list"><h3>'+courses.title+'<img id="remove" class="remove" src="img/error.png"></h3>' +
              '<p>'+courses.description+ '</p> <button class="MoreInfo"> <a href="CoursePage.html "></a> More Information </button></div>'
             );
             document.getElementById("AllCourses").innerHTML += htmlArray.join('');
             let re=document.getElementsByClassName("remove")
             console.log(re[0].getAttribute("data-id"))
for(let i=1;i<re.length;i++){
  re[i].addEventListener("click",e=>{
    deleteCourse(e.target)
  })
}

        }
        renderTrainees(data);
      })
    }
  function deleteCourse(trg){
    console.log(trg);
    let id=trg.parentElement.parentElement.getAttribute("data-id");
  
 trg.parentElement.parentElement.remove();

  console.log(id);
  const myheaders=new Headers();
 myheaders.append('Content-Type','application/json');
 
  	fetch('http://localhost:3000/courses',
  		{
    method:'DELETE',
     headers:myheaders,
     body:JSON.stringify({
       id:id
     })
}).then(Response =>
      Response.json())
      .then( data =>{ console.log(data);

  })
}





// '<div class="list" ><h3>'+courses.title+'<img class="remove" src="img/error.png"></h3>' +
//                 '<p>'+courses.desc+ '</p> <button class="MoreInfo"> <a href="CoursePage.html "></a> More Information </button></div>'
//             );