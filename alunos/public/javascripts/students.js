students=[{id: 12, name: "John Smith", num: 201},
          {id: 31, name: "Mary Jane", num: 512},
          {id: 3, name: "Jane Dow", num: 45}]

function getStudents(studentsList){
    let studentList = document.getElementById("students")
    let html = "";
    for(i in studentsList){
        html += "<div class='cards'>" +
                    "<div class='cardContainer' onclick='showStudent("+i+")'>"+
                        "<h2 id='name'>"+studentsList[i].name+"</h2>"+
                        "<p>Number: "+studentsList[i].num+"</p>"+
                    "</div>"+
                "</div>";
    }
    studentList.innerHTML = html;
}

const showStudent = position => {
    sessionStorage.setItem("studentPosition", position)
    sessionStorage.setItem("studentName", students[position].name)
    window.location = "studentGrades.html"
}

window.onload = function() {
    getStudents(students);
}