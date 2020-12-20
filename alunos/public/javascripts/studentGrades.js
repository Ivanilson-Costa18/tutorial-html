var studentName = "John Smith";

units=[
        [
            {name: "Mathmatics", grade: 8.3, semester: "3º", ects: 6},
            {name: "Literature", grade: 11.2, semester: "2º", ects: 6},
            {name: "Laws", grade: 18.5, semester: "1º", ects: 3},
            {name: "Informatics", grade: 14.3, semester: "1º", ects: 6},
            {name: "Cooking", grade: 7.4, semester: "2º", ects: 3}
        ], 
        [
            {name: "Mathmatics", grade: 8.3, semester: "3º", ects: 6},
            {name: "Literature", grade: 11.2, semester: "2º", ects: 6},
            {name: "Laws", grade: 18.5, semester: "1º", ects: 3}], 
        [
            {name: "Informatics", grade: 14.3, semester: "1º", ects: 6},
            {name: "Cooking", grade: 7.4, semester: "2º", ects: 3}
        ]
    ]

window.onload = function() {
    let pos = sessionStorage.getItem("studentPosition")
    let name = sessionStorage.getItem("studentName")
    let unitList = units[pos]
    let sumFinished=0;
    let numFailed=0;
    let numPassed=0;
    let average=0

    for(unit of unitList){
        if(unit.grade < 9.5){
            numFailed++
        } else {
            sumFinished += unit.grade
            numPassed++
        }
    }

    average = sumFinished/numPassed;
    document.getElementById("summary").innerHTML = '<summary><b>Average: '+average.toFixed(1)+'</summary><p>'+numFailed+' failed units</p><p>'+numPassed+' passed units</p></b>';
    document.getElementById("student").innerHTML = name + " grades";
    getGrades(unitList);
} 







function getGrades(uni){
    let gradeList = document.getElementById("grades")
    let html = "";
    for(unit of uni){
        if(unit.grade<9.5){
            aux="style = 'background-color: salmon;'"
        } else {
            aux=""
        }
        html += "<div class='cards'>" +
                    "<div class='cardContainer' "+aux+">"+
                        "<div class=topCard>"+
                            "<div class='fL'>"+unit.name.substring(0,2) +"</div>"+ 
                            "<div class='gradeContent'>"+
                                "<p><b>"+unit.name+"</b></p>"+
                                "<p>Grade: "+unit.grade+"</p>"+
                            "</div><br>"+
                        "</div>"+
                        "<div class='gradeInfo'>"+
                            "<p> Semester: "+unit.semester+" Semester </p>"+
                            "<p> ETCS: "+unit.ects+"</p>"+
                        "</div>"+
                    "</div>"+
                "</div>";
    }
    gradeList.innerHTML = html;
}
