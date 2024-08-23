export default class Validator {
    static addBtnValidation(eventHandler) {
        const snameRegexp = /^[가-힣a-zA-Z]+$/;
        const isValidScore = score => score && 0 <= score && score <= 100;

        if (!eventHandler.sno.value) {
            alert("학번은 필수로 입력해야 합니다."); return false;
        }
        if (!isValidScore(eventHandler.korean.value)) {
            alert("국어 점수는 0에서 100 사이여야 합니다."); return false;
        }
        if (!isValidScore(eventHandler.math.value)) {
            alert("수학 점수는 0에서 100 사이여야 합니다."); return false;
        }
        if (!isValidScore(eventHandler.english.value)) {
            alert("영어 점수는 0에서 100 사이여야 합니다."); return false;
        }
        if (!snameRegexp.test(eventHandler.sname.value)) {
            alert("유효하지 않은 이름을 입력하셨습니다."); return false;
        }
        return true;
    }
    static deleteBtnValidation(eventHandler) {
        if (!eventHandler.sno.value) {
            alert("학번은 필수로 입력해야 합니다."); return false;
        }
        return true;
    }
}