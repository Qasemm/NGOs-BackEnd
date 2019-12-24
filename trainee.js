

let trainees = [
    {
        name : "ahmad ammoura",
        Email: "ammoura575@gmail.com",
        number:"0796670230",
        photo :"me.jpg",
        location : "irbed/jordan"
    },
    {
        name : "ahmad ammoura",
        Email: "ammoura575@gmail.com",
        number:"0796670230",
        photo :"me.jpg",
        location : "irbed/jordan"
    },
    

];



function renderTrainees(trainees) {
    const htmlArray = trainees.map(
        trainee => '<div class="form" ><div class="im" ><img src="'+trainee.photo+'" alt=""></div><div class="im contnt" ><h3>'+trainee.name+'</h3><p>'+trainee.Email+'</p><p>'+trainee.number+'</p><p>'+trainee.location+'</p></div></div>'
    );

    document.getElementById("container").innerHTML = htmlArray.join('');
}

renderTrainees(trainees);