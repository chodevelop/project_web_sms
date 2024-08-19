export default class student {
    container(ID, name, korean, math, english) {
        this.ID = ID;
        this.name = name;
        this.korean = korean;
        this.math = math;
        this.english = english;
    }
    getAverage() {
        return (this.korean + this.math + this.english) / 3;
    }
}