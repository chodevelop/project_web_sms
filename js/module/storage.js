const Storage = (function() {
    // 프라이빗 변수
    let students = [];

    return {
        addStudent(student) {
            if (student) {
                students.push(student);
            }
            this.saveLocalStorage();
            return student;
        },
        deleteStudent(sno) {
            students = students.filter(student => sno !== student.sno);
            this.saveLocalStorage();
        },
        getStudents() {
            return students;
        },
        saveLocalStorage() {
            if (!localStorage) {
                throw new Error("localStorage를 미지원하는 브라우저입니다.");
            }
            localStorage.setItem('students', JSON.stringify(students));
        },
        loadLocalStorage() {
            if (!localStorage) {
                throw new Error("localStorage를 미지원하는 브라우저입니다.");
            }
            try {
                students = JSON.parse(localStorage.getItem('students')) || [];
                students = students.map(student => new Student(
                    parseInt(student.sno),
                    student.sname,
                    parseInt(student.korean),
                    parseInt(student.math),
                    parseInt(student.english)));
            } catch (error) {
                students = [];
            }
        }
    };
})();
