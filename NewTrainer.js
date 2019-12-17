let inputName=document.getElementById('inputName');
let inputEmail=document.getElementById('inputEmail');
let inputNumber=document.getElementById('inputNumber');
let inputAddress=document.getElementById('inputAddress');
let inputimg=document.getElementById('inputimg');
let inputTextarea=document.getElementById('inputTextarea');
let trainers = [
    {
        name : inputName.value,
        Email: inputEmail.value,
        number:inputNumber.value,
        photo :inputimg.value,
        location : inputAddress.value,
        desc:inputAddress.value
    },
];
function renderTrainees() {
    const htmlArray = trainers.map(
        trainer => '<div class="form" ><div class="im" ><img src="'+trainer.photo+'" alt="photo"+${name}></div><div class="im contnt" ><h3>'+trainer.name+'</h3><p>'+trainer.Email+'</p><p>'+trainer.number+'</p><p>'+trainer.location+'</p></div></div>'
    );
    document.getElementById("formrender").innerHTML = htmlArray.join('');
}
// renderTrainees(trainers);