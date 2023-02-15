import beforeEdit from "./1";
import afterEdit from "./2";
import { statement, htmlStatement } from "./3_state";
import plays from './plays.json';
import invoices from './invoices.json';
import { Invoice as ExtendedInvoice } from './3_create'

describe('ch1_test', ()=>{

    test('first_test', () => {
      const result = beforeEdit(invoices[0] as Invoice, plays);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

    test('first_edit', () => {
      const result = afterEdit(invoices[0] as Invoice);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

    test('second_edit_for_render', () => {
      const result = statement(invoices[0] as ExtendedInvoice);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

})

const getExpected = () => {
    return `청구 내역 (고객명: BigCo)
 Hamlet: $290.00 (55)석
 As You Like It: $235.15 (35)석
 Othello: $140.00 (40)석
총액: $665.15
적립 포인트: 47점`;
}
