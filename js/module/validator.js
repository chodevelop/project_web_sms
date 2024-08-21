export default class Validator {
    constructor(eventHandler) {
        this.eventHandler = eventHandler;
    }

    addBtnValidation() {
        const snameRegexp = /^[가-힣a-zA-Z]+$/;

        if (!(this.eventHandler.sno.value)) {
            alert("학번은 필수로 입력해야 합니다."); return false;
        }
        if (!(this.eventHandler.korean.value && 0 <= this.eventHandler.korean.value && this.eventHandler.korean.value <= 100)) {
            alert("국어 점수는 0에서 100 사이여야 합니다."); return false;
        }
        if (!(this.eventHandler.math.value && 0 <= this.eventHandler.math.value && this.eventHandler.math.value <= 100)) {
            alert("수학 점수는 0에서 100 사이여야 합니다."); return false;
        }
        if (!(this.eventHandler.english.value && 0 <= this.eventHandler.english.value && this.eventHandler.english.value <= 100)) {
            alert("영어 점수는 0에서 100 사이여야 합니다."); return false;
        }
        if (!snameRegexp.test(this.eventHandler.sname.value)) {
            alert("유효하지 않은 이름을 입력하셨습니다."); return false;
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

    // console.log('*e', filterBy('*e'));// -> *e [ 'Apple' ]
    // console.log('ana', filterBy('ana'));// -> ana []
    // console.log('*ana', filterBy('*ana'));// -> *ana [ 'Banana' ]
    // console.log('*an*', filterBy('*an*'));// -> *an* [ 'Banana' ]
    // wildCardSearch(input) {
    //     eventHandler.
    //     const filterBy = str => items.filter(
    //         item => new RegExp('^' + str.replace(/\*/g, '.*') + '$').test(item)
    //     );

    // } // 검색 와일드 카드 적용해볼 필요 있음.
}