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
               '<div data-id='+courses.id+' class="list"><h3>'+courses.title+'<img id="remove" class="remove" src="img/error.png" onclick="deleteCourse"></h3>' +
              '<p>'+courses.description+ '</p> <button class="MoreInfo"> <a href="CoursePage.html "></a> More Information </button></div>'
             );
             document.getElementById("AllCourses").innerHTML += htmlArray.join('');
             let re=document.getElementsByClassName("remove")
             console.log(re[0].getAttribute("data-id"))
for(let i=0;i<re.length;i++){
  re[i].addEventListener("click",e=>{
    deleteCourse(e.target)
  })
}

        }
        renderTrainees(data);
      })
    }
// document.getElementById("remove").addEventListener('click',deleteCourse);
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


    // document.getElementById('ShowMore').addEventListener('click',showOneCourse);
    // function showOneCourse() {
      // let id=trg.parentElement.parentElement.getAttribute("data-id");
      // console.log(id);
      // fetch('http://localhost:3000/courses' + id,
      // {
      //     method:'GET',
      
      // }) 
      // .then(Response =>
      //       Response.json())
      //       .then( data =>{ 
      //           console.log(data);
      //           function renderTrainees(data) {
      
      //             const htmlArray = data.map(( courses,index) =>
      //                '<div data-id='+courses.id+' class="list"><h3>'+courses.title+'<img id="remove" class="remove" src="img/error.png"></h3>' +
      //               '<p>'+courses.description+ '</p> <button class="MoreInfo"> <a href="CoursePage.html "></a> More Information </button></div>'
      //              );
      //              document.getElementById("AllCourses").innerHTML += htmlArray.join('');
      //              let re=document.getElementsByClassName("remove")
      //              console.log(re[0].getAttribute("data-id"))
      // for(let i=1;i<re.length;i++){
      //   re[i].addEventListener("click",e=>{
      //     deleteCourse(e.target)
      //   })
      // }
      
      //         }
      //         renderTrainees(data);
      //       })
          // }




