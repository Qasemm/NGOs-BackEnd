document.getElementById("save").addEventListener("click" , addCoures);
function addCoures() {
const contentNameCourse=document.getElementById('contentNameCourse').value;
const date=document.getElementById('dates').value;
const date1=document.getElementById('dates1').value;
const locations=document.getElementById('location').value;
const range_weight=document.getElementById('range_weight').value;
const remain=document.getElementById('remainSeat').value;
const desc=document.getElementById('desc').value;

// const trinername =document.getElementById('trinername').value;
let header = new Headers();
header.append("content-type", "application/json");
fetch ('http://localhost:3000/courses',{
method: 'post',
headers:header,
body:JSON.stringify({
    title:contentNameCourse,
   location:locations,
     desctiption:desc,
     dates:date,
     dateEnd:date1,
     number_of_seats:range_weight,
     remain:remain
})
  }).then(re=>{
        return re.json()
    }).then(data=>{
        console.log(data)
    })
}
