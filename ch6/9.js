// 이 데이터로 비슷한 연산을 수행하는 부분이 상당히 많았다. 기본요금을 계산하는 코드를 찾아봤다.
reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017};

// client1 
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2 면세 하는 부분이 추가 되었다. 
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// client3 기본요금 계산이 똑같이 등장. 함수로 추출 한 코드가 보인다. 
const aReading = acquireReading();
const basicChargeAmount = calculateCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}