export default class Student {
    constructor(sno, sname, korean, math, english) {
        this.sno = sno;
        this.sname = sname;
        this.korean = korean;
        this.math = math;
        this.english = english;
        this.rank = -1;
    }
    getTotal() {
        return this.korean + this.math + this.english;
    }
    getAverage() {
        return this.getTotal() / 3;
    }
}