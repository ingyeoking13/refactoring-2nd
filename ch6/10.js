// 여러 함수를 변환함수로 묶기
// from 
function base(aReading){ // ...
}
function taxableCharge(aReading) { // ...
}
// to
function enrichReading(argReading) {
    const aReading = _.cloneDeep(argReading)
    aReading.baseCharge = base(aReading)
    aReading.taxableCharge = taxableCharge(aReading)
    return aReading
}



