
//이거 왜 씀??????
import Student from "../module/Student.js"
import storage from "../module/Storage.js"

export default class StudentRepository{
    constructor(){
        this.storage = storage;
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
