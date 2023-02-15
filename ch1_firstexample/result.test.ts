import beforeEdit from "./1";
import afterEdit from "./2";
import { statement, htmlStatement } from "./3_state";
import { Invoice as ExtendedInvoice } from './3_create'
import { statement as polynomial } from './4_state'

import plays from './plays.json';
import invoices from './invoices.json';

describe('ch1_test', ()=>{

    test('1_start', () => {
      const result = beforeEdit(invoices[0] as Invoice, plays);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

    test('2_first_edit', () => {
      const result = afterEdit(invoices[0] as Invoice);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

    test('3_second_edit_for_render', () => {
      const result = statement(invoices[0] as ExtendedInvoice);
      const expected = getExpected();
      expect(result).toEqual(expected);
    });

    test('4_third_edit', () => {
        const result = polynomial(invoices[0] as ExtendedInvoice);
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
