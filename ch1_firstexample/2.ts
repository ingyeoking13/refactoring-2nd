//계산 코드가 모드 분리되어 statement는 간단해졌다.
const plays = require('./plays.json')
const invoices = require('./invoices.json')

interface Play {
    name: string;
    type: string;
}

interface Performance {
    playID: string;
    audience: number;
}

interface Invoice { 
    customer: string;
    performances: Performance[];
}

function statement(invoice: Invoice) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let aPerformance of invoice.performances) {
    // 청구 내역을 출력한다.
    result += ` ${playFor(aPerformance).name}: ${usd(amountFor(aPerformance))} (${ aPerformance.audience })석\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점`;

  return result;
}

// playFor는 play가 aPeroframcne에 포함하는 것을 눈치채어 바깥으로 뺀 함수다.  
const playFor = (aPerformance: any) => {
    return plays[aPerformance.playID]
}

// a Performance <- 관사 붙이기
const amountFor = (aPerformance: any) => {
    let result = 0;

    switch (playFor(aPerformance).type) {
      case 'tragedy': // 비극
        result = 4000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;

      case 'comedy': // 희극
        result = 3000;
        if (aPerformance.audience > 20) {
          result += 10000 + (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return result;
}

const volumeCreditsFor = (aPerformance: any) => {
    // 포인트를 적립한다.
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    let volumeCredits = Math.max(aPerformance.audience - 30, 0)
    if ("comedy" == playFor(aPerformance).type)
        volumeCredits += Math.floor(aPerformance.audience / 5);
    return volumeCredits;
}

const usd = (aNumber:number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(aNumber/100);
}

const totalVolumeCredits = () => {
    let result = 0;
    for (let aPeroframcne of invoices[0].performances) {
        result += volumeCreditsFor(aPeroframcne);
    }
    return result;
};

const totalAmount = () => {
    let result = 0;
    for (let aPeroframcne of invoices[0].performances) {
        result += amountFor(aPeroframcne);
    }
    return result;
}

export default statement;