export default class Validator {
    constructor(eventHandler) {
        this.eventHandler = eventHandler;
    }

    addBtnValidation() {
        const snameRegexp = /^[가-힣a-zA-Z]+$/;
        try {
            if (!(this.eventHandler.sno.value)) {
                throw new Error("학번은 필수로 입력해야 합니다.");
            }
            if (!(this.eventHandler.korean.value && 0 <= this.eventHandler.korean.value && this.eventHandler.korean.value <= 100)) {
                throw new Error("국어 점수는 0에서 100 사이여야 합니다.");
            }
            if (!(this.eventHandler.math.value && 0 <= this.eventHandler.math.value && this.eventHandler.math.value <= 100)) {
                throw new Error("수학 점수는 0에서 100 사이여야 합니다.");
            }
            if (!(this.eventHandler.english.value && 0 <= this.eventHandler.english.value && this.eventHandler.english.value <= 100)) {
                throw new Error("영어 점수는 0에서 100 사이여야 합니다.");
            }
            if (!snameRegexp.test(this.eventHandler.sname.value)) {
                throw new Error("유효하지 않은 이름을 입력하셨습니다.");
            }
        } catch (error) {
            alert(error);
            return false;
        }
        return true;
    }
    deleteBtnValidation() {
        try {
            if (!(this.eventHandler.sno.value)) {
                throw new Error("학번은 필수로 입력해야 합니다.");
            }
        } catch (error) {
            alert(error.message);
            return false;
        }
        return true;
    }
}