import { studentRepository } from "./StudentRepository.js";

const ID = document.querySelector("form .col-2:nth-child(1) .form-control");
const name = document.querySelector("form .col-2:nth-child(2) .form-control");
const korean = document.querySelector("form .col-2:nth-child(3) .form-control");
const english = document.querySelector("form .col-2:nth-child(4) .form-control");
const math = document.querySelector("form .col-2:nth-child(5) .form-control");

console.log(math);

const table = document.querySelector(".table tbody");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
    studentRepository.addStudent(new Student(ID, name, korean, english, math));

    for (const student of studentRepository.students) {
        for(const property in student){
            
        }
    }
    table.append(newStudent);
});


console.log(table);