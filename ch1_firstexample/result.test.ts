import { statement } from "./1";
import plays from './plays.json';
import invoices from './invoices.json';

describe('ch1_test', ()=>{

    test('first_test', () => {
      const result = statement(invoices[0], plays);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

})

const getExpected = () => {
    return `청구 내역 (고객명: BigCo)
 Hamlet: $29.00 (55)석
 As You Like It: $23.52 (35)석
 Othello: $14.00 (40)석
총액: $66,515.00
적립 포인트: 47점`;
}
