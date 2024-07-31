// Define the object with student names and their marks
const marks = { 
    harry: 98, 
    rohan: 70, 
    aakash: 7 
};

// Function to print the marks of each student
function printStudentMarks(marks) {
    console.log("Student Marks:");

    // Get the names of the students (keys of the object)
    const students = Object.keys(marks);
    
    // Use a for loop to iterate through the students
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const mark = marks[student];
        console.log(`${student}: ${mark}`);
    }
}

// Call the function to print the student marks
printStudentMarks(marks);
