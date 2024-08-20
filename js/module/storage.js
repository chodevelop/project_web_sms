import Student from "./Student.js";

class Storage {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        if (student) {
            this.students.push(student);
        }
        this.saveLocalStorage();
        return student;
    }

    deleteStudent(sno) {
        this.students = this.students.filter(student => sno !== student.sno);
        this.saveLocalStorage();
    }

    getStudents() {
        return this.students;
    }

    sortBySno() {
        this.students.sort(function (a, b) {
            return parseInt(a.sno) - parseInt(b.sno);
        });
    }

    sortByName() {
        this.students.sort(function (a, b) {
            return a.sname.localeCompare(b.sname);  // 오름차순 정렬
        });
    }

    sortByRank() {
        this.students.sort(function (a, b) {
            return parseInt(b.getTotal()) - parseInt(a.getTotal()); // 이 방식이 더 간결하고 안전함
        });
    }

    updateRank() {
        this.sortByRank();
        //순위 갱신 반복문
        for (let i = 0, rank = 1; i < this.students.length; i++, rank++) {
            this.students[i].rank = rank;
        }
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        if (!localStorage) {
            throw new Error("localStorage를 미지원하는 브라우저입니다.")
        }
        localStorage.students = JSON.stringify(this.students);
        // alert("등록 완료");
    }

    loadLocalStorage() {
        if (!localStorage) {
            throw new Error("localStorage를 미지원하는 브라우저입니다.")
        }
        try {
            this.students = JSON.parse(localStorage.students);
            this.students = this.students.map(student => new Student(
                parseInt(student.sno), 
                student.sname, 
                parseInt(student.korean), 
                parseInt(student.math), 
                parseInt(student.english)));
        } catch (error) {
            this.students = [];
        }
    }
}

const storage = new Storage();

export default storage;