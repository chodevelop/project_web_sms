import Student from "./Student.js";

class StudentRepository{
    constructor(){
        this.students = [];
    }

    addStudent(student){
        return student;
    }
    
    deleteStudent(ID){
        this.students = this.students.filter(student => ID !== student.ID);
    }
    
    // setRank(){

    // }

    // getStudentsList(){
    //     const stdList = [...students];
    //     for (const student of stdList) {
    //         student.average = student.getAverage();
    //     }
    //     return this.students;
    // }


}

const studentRepository = new StudentRepository();

export{
    studentRepository,
}