class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() { return this._customer; }
    get quantity() { return this._quantity; }
    get month() { return this._month; }
    get year() { return this._year; }
    get baseCharge() { // client3 의 함수를 클래스의 property 로 모았다. 
      return baseRate(this.month, this.year) * this.quantity;
    }
}
reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017};

// client3 기본요금 계산이 똑같이 등장. 함수로 추출 한 코드가 보인다. 
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// client1 
