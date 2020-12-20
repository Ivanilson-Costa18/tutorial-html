units=[{nameUnit: "Mathmatics", semester: "3º", ects: 6},
       {nameUnit: "Literature", semester: "2º", ects: 6},
       {nameUnit: "Laws",  semester: "1º", ects: 3},
       {nameUnit: "Informatics",  semester: "1º", ects: 6},
       {nameUnit: "Cooking",  semester: "2º", ects: 3},
    ]

students=[{name: "John Smith", num: 34994},
          {name: "Mary Jane", num: 24242},
          {name: "Jane Dawn", num: 29598}]

const showOptions = () => {
    var studentOptions = document.getElementById("students");
    var unitOptions = document.getElementById("units")
    html1="<option></option>";
    html2="<option></option>";

    for(unit of units){
        html1 += "<option>"+unit.nameUnit+"</option>"
    }
    for(student of students){
        html2 += "<option>"+student.name+"</option>"
    }

    studentOptions.innerHTML = html2;
    unitOptions.innerHTML = html1;
}

const verifySum = () => {
    var projectPercentage = document.getElementById("pPercentage").value;
    var testPercentage = document.getElementById("tPercentage").value;
    var sum = testPercentage + projectPercentage
    if(sum==1){
        document.getElementById("error3").classList.remove("hidden");
        return true
    }
    else {
        return false
    }
}

const verifyProjectValues = () => {
    var project = document.getElementById("pGrade").value;
    var projectPercentage = document.getElementById("pPercentage").value;

    if ((project >= 0 && project <= 20) && (projectPercentage >= 0 && projectPercentage <= 1)){
        document.getElementById("error1").classList.remove("hidden");
        return true
    } else {
        return false
    }

}

const verifyTestValues = () => {
    var test = document.getElementById("tGrade").value;
    var testPercentage = document.getElementById("tPercentage").value;

    if ((test >= 0 && test <= 20) && (testPercentage >= 0 && testPercentage <= 1)){
        document.getElementById("error2").classList.remove("hidden");
        return true
    } else {
        return false
    }
}


const verifyAndSubmitValues = () => {
    var studentName = document.getElementById("students").value;
    var unit = document.getElementById("units").value;
    var project = document.getElementById("pGrade").value;
    var projectPercentage = document.getElementById("pPercentage").value;
    var test = document.getElementById("tGrade").value;
    var testPercentage = document.getElementById("tPercentage").value;
    var result = document.getElementById("result");
    submitOk=true;
    if(!verifyProjectValues()) submitOk = false 
    if(!verifyTestValues()) submitOk = false 
    if(!verifySum())submitOk = false
    if(submitOk){
        result.innerHTML = "Student "+studentName+" obtained "+((testPercentage*test)+(projectPercentage*project)).toFixed(1)+" on the "+unit+" unit."
    }
}



const reset = () => {
    var studentName = document.getElementById("students").value;
    var unit = document.getElementById("units").value;
    var project = document.getElementById("pGrade").value;
    var projectPercentage = document.getElementById("pPercentage").value;
    var test = document.getElementById("tGrade").value;
    var testPercentage = document.getElementById("tPercentage").value;
    var result = document.getElementById("result");

    studentName.innerHTML=""
    unit.innerHTML=""
    test.innerHTML=""
    testPercentage.innerHTML=""
    project.innerHTML=""
    projectPercentage.innerHTML=""
    result.innerHTML = ""
   
}
    
window.onload = function() {
    showOptions();
}    