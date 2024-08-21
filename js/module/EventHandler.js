import storage from "./Storage.js";
import Student from "./Student.js";
import Validator from "./Validator.js";

class EventHandler {
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

        this.validator = new Validator(this);

        this.addBtn.addEventListener("click", async () => {
            if (this.validator.addBtnValidation()) {
                storage.addStudent(new Student(
                    parseInt(this.sno.value),
                    this.sname.value,
                    parseInt(this.korean.value),
                    parseInt(this.math.value),
                    parseInt(this.english.value)
                ));
                this.updateList();
                storage.saveLocalStorage();
            }
        });

        this.deleteBtn.addEventListener("click", async () => {
            if (this.validator.deleteBtnValidation()) {
                storage.deleteStudent(parseInt(this.sno.value));
                this.updateList();
                storage.saveLocalStorage();
            }
        });

        this.searchBtn.addEventListener("click", async () => {
            const select = document.querySelector("#search select");
            const input = document.querySelector("#search input").value.trim();

            this.updateList();
            let result = [];
            if (select.value === "sno") {
                result = storage.students
                    .filter(student => student.sno === parseInt(input));
            } else if (select.value === "name") {
                result = (input => storage.students.filter(
                    student => student.sname.includes(input)
                ))(input);
            }

            if (input === "") {
                result = [...storage.getStudents()];
            }

            this.table.innerHTML = "";  // 기존 테이블을 비웁니다.

            for (const student of result) {
                const inputArray = [
                    student.sno,
                    student.sname,
                    student.korean,
                    student.english,
                    student.math,
                    student.getTotal(),
                    student.getAverage(),
                    student.rank,
                ];

                const tr = document.createElement("tr");
                for (const element of inputArray) {
                    const td = document.createElement("td");
                    td.innerText = element;
                    tr.append(td);
                }
                this.table.append(tr);
            }
        });
    }

    updateList() {
        storage.updateRank();//updateRank() includes sortByRank().

        switch (this.sortSelect.value) {
            case "sno":
                storage.sortBySno();
                break;
            case "name":
                storage.sortByName();
                break;
            case "rank":
                //Do nothing; updateRank() includes sortByRank().
                break;
            default:
                storage.updateRank();
        }

        this.table.innerHTML = "";

        for (const student of storage.getStudents()) {
            //inputArray는 object의 value 값을 array로 바꾸어 순서 보장을 위한 것임. 
            //더 우아하게 바꿀 수 있는 방법을 찾는 중!!
            const inputArray = [
                student.sno,
                student.sname,
                student.korean,
                student.english,
                student.math,
                student.getTotal(),
                student.getAverage(),
                student.rank,
            ];

            const tr = document.createElement("tr");
            for (const element of inputArray) {
                const td = document.createElement("td");
                td.innerText = element;
                tr.append(td);
            }
            this.table.append(tr);
        }
    }
}

let eventHandler = new EventHandler();

export default eventHandler;