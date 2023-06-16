// Write that prompts the user to input student marks. 
// The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.



//prompt the user to enter a mark
const studentGrade = prompt("What is Your Grade?");
const studentGrade2 = parseInt(studentGrade);

//makes sure Number is between 0 to 100

if(studentGrade2 >= 0 && studentGrade2 <= 100){


    //calculate the grade of the student
function gradingSystem(grade){
    if(grade > 79){
        return "A"
    }else if(grade >= 60 && grade <= 79){
        return "B"
    }else if(grade >= 50 && grade <= 59){
        return "C"
    }else if(grade >= 40 && grade <= 49){
        return "D"
    }else if(grade < 40){
        return "E"
    }
 }
}else{
    alert("Enter Valid Grade!");
}

 //results of the calculations to get grades
 const mark = gradingSystem(studentGrade2);
 

 //alerts the user of their grade
 alert("Your grade is:" + mark);