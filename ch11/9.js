// FROM
function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
}

// TO

class Scorer {
    consturctor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuid = scoringGuide;
    }

    execute() {
        this._result = 0;
        this._healthLevel = 0;
    }

}

// FROM
function score(candidate, medicalExam, scoringGuid) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker){
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }

    let certificationGrade = 'regular';
    if (scoringGuide.stateWithLowCertification(candidate.orinState)){
        certificationGrade = 'low';
        result -= 5;
    }

    result -= Math.max(healthLevel -5, 0);
    return result;
}

//To
class Score{
    constructor(candidate, medicalExam, scoringGuide){
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }

    execute(){
        let result = 0;
        let healthLevel = 0;
        let hightMedicalRiskFlag = false;

        if (this._medicalExam.isSmoker) {
            healthLevel += 10;
            hightMedicalRsikFlag = true;
        }

        let certificationGrade = 'regular';
        if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            certificationGrade = 'low';
            result -= 5;
        }

        result -= Math.max(healthLevel -5, 0);
        return result
    }
}