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

class PerformanceCalculator {
  performance: Performance;
  play: Play;

  constructor(aPerformance: Performance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    throw new Error('서브클래스에서 처리하도록 설계되었습니다.')
  }

  get volumeCredits() {
    return Math.max(this.performance.audience -30, 0)
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 4000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 3000;
    if (this.performance.audience > 20) {
      result += 10000 + (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits(): number {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
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
  const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
  const result: Performance = Object.assign({}, aPerformance);
  result.play = calculator.play;
  result.amount = calculator.amount;
  result.volumeCredits = calculator.volumeCredits;
  return result;
}

function playFor(aPerformance: any) {
  return plays[aPerformance.playID];
}

function createPerformanceCalculator(aPerformance: Performance, aPlay: Play) {
  switch(aPlay.type) {
    case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
    case "comedy": return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`)
  }
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
