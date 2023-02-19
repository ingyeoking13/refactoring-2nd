const plays = require('./plays.json');
const invoices = require('./invoices.json');

export interface Play {
  name: string;
  type: string;
}

export interface Performance {
  playID: string;
  audience: number;
  play: Play;
  amount: number;
  volumeCredits: number;
  totalVolumeCredits: number;
}

export interface Invoice {
  customer: string;
  performances: Performance[];
  totalAmount: number;
  totalVolumeCredits: number;
}

export default function createStatementData(invoice: Invoice) {
  let statementData: Invoice = {} as any;
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;
}

function enrichPerformance(aPerformance: Performance) {
  const result: Performance = Object.assign({}, aPerformance);
  result.play = playFor(result);
  result.amount = amountFor(result);
  result.volumeCredits = volumeCreditsFor(result);
  return result;
}

// playFor는 play가 aPeroframcne에 포함하는 것을 눈치채어 바깥으로 뺀 함수다.
function playFor(aPerformance: any) {
  return plays[aPerformance.playID];
}

function amountFor(aPerformance: any) {
  let result = 0;

  switch (aPerformance.play.type) {
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
      throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
  }
  return result;
}

function volumeCreditsFor(aPerformance: Performance) {
  // 포인트를 적립한다.
  // 희극 관객 5명마다 추가 포인트를 제공한다.
  let volumeCredits = Math.max(aPerformance.audience - 30, 0);
  if ('comedy' == aPerformance.play.type)
    volumeCredits += Math.floor(aPerformance.audience / 5);
  return volumeCredits;
}

function totalVolumeCredits(statementData: Invoice) {
  return statementData.performances.reduce(
    (total, p) => total + p.volumeCredits,
    0
  );
}

function totalAmount(statementData: Invoice) {
  return statementData.performances.reduce((total, p) => total + p.amount, 0);
}
