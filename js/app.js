import EventHandler from "./module/EventHandler.js";
import Storage from "./module/Storage.js";

const eventHandler = new EventHandler();
Storage.loadLocalStorage();

// /* 테스트를 위한 더미데이터 입력 */
// import Student from "./module/Student.js";
// Storage.addStudent(new Student(10, '엄준식', 90, 80, 60));
// Storage.addStudent(new Student(11, '이준식', 100, 90, 90));
// Storage.addStudent(new Student(12, '박준식', 92, 82, 80));
// Storage.addStudent(new Student(13, '최준식', 95, 85, 88));
// Storage.saveLocalStorage();

eventHandler.sortList();