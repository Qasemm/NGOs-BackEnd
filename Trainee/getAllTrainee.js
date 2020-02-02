let div = document.getElementById("div1");
let page = 1;
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
op();
window.addEventListener('scroll' , ()=>{
    let hh = document.documentElement.scrollHeight - window.innerHeight;
    let hamza = window.scrollY;
    if(Math.ceil(hamza) === hh) {
        op();
    }
});
function op() {
    let id=getParameterByName("id", url);
    console.log(id);
    fetch('http://localhost:3000/courses/trainee/'+id,
    {
    method:'GET',
    
    }).then(re => {
        return re.json();
    }).then(data => {
        console.log(data)
        function renderTrainees(data) {
            const htmlArray = data.map(
                trainee => `<div id = ${trainee[i].id} class="list">
                 <div id = ${trainee.id} class="im">
                 </div><div id = ${trainee.id} class="im contnt desc">
                 <h3 id = ${trainee.id} >${trainee.name} </h3>
                <p id = ${trainee.id} > ${trainee.email} </p>
                 <p id = ${trainee.id} > ${trainee.address} </p>
                 <p id = ${trainee.id} > ${trainee.phone} </p>
                 </div></div></a></div>`);
    
            document.getElementById("div1").innerHTML += htmlArray.join('');
                 
            };
            renderTrainees(data);
    //     let trainee = data.result;
    //     page++
    //     for (let i = 0; i < 9; i++) {
    //         div.innerHTML +=   `<div id = ${trainee[i].id} class="list">
    // <div id = ${trainee[i].id} class="im">
    // </div><div id = ${trainee[i].id} class="im contnt desc">
    // <h3 id = ${trainee[i].id} >${trainee[i].name} </h3>
    // <p id = ${trainee[i].id} > ${trainee[i].email} </p>
    // <p id = ${trainee[i].id} > ${trainee[i].address} </p>
    // <p id = ${trainee[i].id} > ${trainee[i].phone} </p>
    // </div></div></a></div>`
    //     }
    });
} 