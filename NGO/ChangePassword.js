let cancle_btn=document.getElementById('cancle');
let save_btn=document.getElementById('save');
save_btn.addEventListener('click',goBack);
cancle_btn.addEventListener('click',goBack);
 function goBack() {
window.location = "ProfileNGO.html"; 
}