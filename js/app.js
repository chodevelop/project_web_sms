import Student from "./Student.js";
import studentRepository from "./student-repository.js";
import { EventHandler } from "./event-handler.js";

// const students = [];

// const ID = document.querySelector("form .col-2:nth-child(1) .form-control");
// const name = document.querySelector("form .col-2:nth-child(2) .form-control");
// const korean = document.querySelector("form .col-2:nth-child(3) .form-control");
// const english = document.querySelector("form .col-2:nth-child(4) .form-control");
// const math = document.querySelector("form .col-2:nth-child(5) .form-control");

// console.log(math);

// const table = document.querySelector(".table tbody");
// const addBtn = document.querySelector("#addBtn");

// addBtn.addEventListener("click", () => {
//     let newStudent = document.createElement("tr")
//     const studentInfo = { ID, name, korean, english, math };

//     for (let i = 1; i <= 5; i++) {
//         let td = document.createElement("td");
//         td.textContent = document.querySelector(`form .col-2:nth-child(${i}) .form-control`).value;
//         newStudent.append(td);

//     }
//     table.append(newStudent);
// });


console.log(table);


let studentRepository = new StudentRepository();
// 테스트를 위한 더미데이터 입력
studentRepository.addStudent(new Student(10, '김기정', 90, 80, 60));
studentRepository.addStudent(new Student(11, '최기정', 100, 90, 90));
studentRepository.addStudent(new Student(12, '박기정', 92, 82, 80));
studentRepository.addStudent(new Student(13, '최기정', 95, 85, 88));

let eventHandler = new EventHandler();
eventHandler.eventRegist();

export { studentRepository }