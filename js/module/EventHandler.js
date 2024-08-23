import Storage from "./Storage.js";
import Student from "./Student.js";
import Validator from "./Validator.js";

export default class EventHandler {
    constructor() {
        this.sno = document.querySelector("input[name=sno]");
        this.sname = document.querySelector("input[name=sname]");
        this.korean = document.querySelector("input[name=kor]");
        this.english = document.querySelector("input[name=eng]");
        this.math = document.querySelector("input[name=math]");

        this.table = document.querySelector(".table tbody");
        this.sortSelect = document.querySelector("#sortSelect");
        this.addBtn = document.querySelector("#addBtn");
        this.searchBtn = document.querySelector("#search button");
        this.deleteBtn = document.querySelector("#deleteBtn");

        this.addBtn.addEventListener("click", () => {
            if (Validator.addBtnValidation(this)) {
                Storage.addStudent(new Student(
                    parseInt(this.sno.value),
                    this.sname.value,
                    parseInt(this.korean.value),
                    parseInt(this.math.value),
                    parseInt(this.english.value)
                ));
                this.sortList();
                Storage.saveLocalStorage();
            }
        });

        this.deleteBtn.addEventListener("click", () => {
            if (Validator.deleteBtnValidation()) {
                Storage.deleteStudent(parseInt(this.sno.value));
                this.sortList();
                Storage.saveLocalStorage();
            }
        });

        this.searchBtn.addEventListener("click", () => {
            const select = document.querySelector("#search select");
            const input = document.querySelector("#search input").value.trim();

            let result = [];
            if (select.value === "sno") {
                result = Storage.students
                    .filter(student => student.sno === parseInt(input));
            } else if (select.value === "name") {
                result = (input => Storage.students.filter(
                    student => student.sname.includes(input)
                ))(input);
            }

            if (input === "") {
                result = [...Storage.getStudents()];
            }

            this.renderList(result);
        });
    }

    sortList() {
        Storage.updateRank();//updateRank() includes sortByRank().

        switch (this.sortSelect.value) {
            case "sno":
                Storage.sortBySno();
                break;
            case "name":
                Storage.sortByName();
                break;
            case "rank":
                //Do nothing; updateRank() includes sortByRank().
                break;
            default:
                Storage.updateRank();
        }
        this.renderList(Storage.students);
    }

    renderList(result) {
        /* 아름다운 매핑 방식*/
        this.table.innerHTML = result.map(student =>
            `<tr>
                <td>${student.sno}</td>
                <td>${student.sname}</td>
                <td>${student.korean}</td>
                <td>${student.english}</td>
                <td>${student.math}</td>
                <td>${student.getTotal()}</td>
                <td>${student.getAverage()}</td>
                <td>${student.rank}</td>
            </tr>`
        ).join("");
    }
}