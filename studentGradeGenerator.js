
// This function takes student marks as input and returns the student grade based on a grading system
// @param {number} studentScore - the student's score. A valid score should range from 0 to 100.
// @return {string} - returns the grade the student has scored as per the grading system. "A", "B", "C", "D" OR "E"


function studentGradeGenerator(studentScore) {
    if (studentScore < 0 || studentScore > 100) {       // This line of code checks if studentScore is a valid score.
        console.log("Invalid marks! Marks should range from 0 to 100");
        return; // The return keyword prevents the function from executing further as the marks entered are invalid.
    } else if (studentScore < 40) {
        studentGrade = "E";
    } else if (studentScore <= 49) {
        studentGrade = "D";
    } else if (studentScore <= 59) {
        studentGrade = "C";
    } else if (studentScore <= 79) {
        studentGrade = "B";
    } else
        studentGrade = "A";
    console.log(studentGrade); // This line is commented out. When uncommented, it will print studentGrade to the console .
}
studentGradeGenerator(75); // This line invokes the function studentGradeGenerator. StudentScore is passed as an argument in the brackets. in this case 75.