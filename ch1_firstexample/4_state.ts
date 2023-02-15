import createStatementData, {Invoice} from './3_create';

export function statement(invoice: Invoice) {
  return renderPlainText(createStatementData(invoice));
}

export function htmlStatement(invoice: Invoice) {
  return renderHtml(createStatementData(invoice));
}

const renderHtml = (data: Invoice) => {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  result += `<table>\n`;
  result += `<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>`;
  for (let perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>(${perf.audience}석)\n`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += `</table>\n`
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`
  return result;
};

const renderPlainText = (data: Invoice) => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  // 청구 내역을 출력한다.
  for (let aPerformance of data.performances) {
    result += ` ${aPerformance.play.name}: ${usd(aPerformance.amount)} (${
      aPerformance.audience
    })석\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점`;

  return result;
};

function usd(aNumber: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

import invoices from './invoices.json'

console.log(htmlStatement(invoices[0] as Invoice))