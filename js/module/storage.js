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

    sortByTotal() {
        this.students.sort(function (a, b) {
            return parseInt(b.getTotal()) - parseInt(a.getTotal()); // 이 방식이 더 간결하고 안전함
        });
    }

    //동점자 처리 알고리즘 구현(수정)
    updateRank() {
        this.sortByTotal();//총점 순으로 갱신
        //rank - 현재 학생 원소에 부여할 순위
        for (let i = 0, rank = 1; i < this.students.length; i++) {
            this.students[i].rank = rank;//rank 변수 값대로 순위 부여

            //지금이 학생 배열 마지막 원소가 아니고(메모리 오류 방지)
            if (i < this.students.length - 1) {
                //현재 학생 원소의 총점이 다음 학생 배열의 총점과 일치한다면
                if (this.students[i].getTotal() === this.students[i + 1].getTotal()) {
                    continue;//rank 갱신 없이 continue(반복문 다시 돌면 동석차 부여됨)
                }
            }
            rank = i + 2;//동석차 처리 후 rank 값 갱신
        }
        this.saveLocalStorage();//rank 결과 localStorage 저장(영속성 부여)
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

export const storage = new Storage();