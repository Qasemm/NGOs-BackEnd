

function hiddenDivContentCourses(){
    document.getElementById('tasksForAdmin').style.display='block';
}

document.getElementById("close").addEventListener('click', function closed(){
    document.getElementById('tasksForAdmin').style.display='none';

});
