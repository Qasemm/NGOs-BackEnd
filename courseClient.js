
/*const contentNameCourse=document.getElementById('contentNameCourse');
const date=document.getElementById('dates');
const locations=document.getElementById('location');
const range_weight=document.getElementById('range_weight');
const desc=document.getElementById('desc');
const trinername =document.getElementById('trinername');

*/
// let save = document.getElementById("save");*/
fetch('http://localhost:3000/courses')
{
    method:'GET',

}
  .then(res=>{
        res.json()
    }).then(data=>{
    console.log(data);
document.getElementById('Courses').innerHTML+= '<div  class="list">'+ ' <h3>'+ title +'<img class="remove" src="img/error.png"></h3>'
  
    });

document.getElementById("save").addEventListener("click" , addCoures);
function addCoures() {
    let id;
const title=document.getElementById('name').value;
console.log(title);
let header=new Headers();
header.append("content-type", "application/json");
fetch ('http://localhost:3000/courses',{
method: 'post',
headers:header,
body:JSON.stringify({
    title:title,
    id:"1"
   location:locations.value,
    desctiption:desc.value,
    dates:date.value,
    triner:trinername.value,
    number_of_seats:range_weight.value
})
    }   
    ).then(res=>{
        res.json()
    })
    .then(data=>{
        console.log(data)
    });
}