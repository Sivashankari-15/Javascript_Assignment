function gradeCalculation(score){

    let grade
    switch (true) {
        case (score>=90 && score<=100):
            grade ='A'
            break;
        case (score>=70):
            grade ='B'
            break;
        case (score>=40):
            grade ='C'
            break;
        case (score>=0):
            grade ='D'
            break; 
        default:
            grade = "Invalid score"
            break;
    }

    return grade;

}


let score = 80;
console.log("Score :"+ score)
console.log("Grade :" + gradeCalculation(score))