jest.unmock('../frontend/util/logoot_util.js')

import { Identifier, Position } from '../frontend/util/logoot_util.js'

const small_id_site_1 = new Identifier(1,1);
const large_id_site_1 = new Identifier(100,1);
const small_id_site_2 = new Identifier(1,2);
const large_id_site_2 = new Identifier(100,2);
const another_large_id_site_2 = new Identifier(100,2);

describe('Identifier', () => {
  describe('Compare', () => {
    it('Correctly identifies Identifier with lesser digit', () => {
      expect(small_id_site_1.compare(large_id_site_1)).toEqual(-1);
      expect(small_id_site_1.compare(large_id_site_2)).toEqual(-1);
    });

    it('Correctly identifies Identifier with greater digit', () => {
      expect(large_id_site_1.compare(small_id_site_1)).toEqual(1);
      expect(large_id_site_1.compare(small_id_site_2)).toEqual(1);
    });

    it('Correctly identifies Identifier with lesser site number when digits are equal', () => {
      expect(small_id_site_1.compare(small_id_site_2)).toEqual(-1);
      expect(small_id_site_2.compare(small_id_site_1)).toEqual(1);
    })
    it('Correctly returns 0 when digits and site numbers are both equal', () => {
      expect(large_id_site_2.compare(another_large_id_site_2)).toEqual(0);
    })
  })
});

const zero_ID = new Identifier(0,1);
const one_ID = new Identifier(1,1);
const two_ID = new Identifier(2,1);
const three_ID = new Identifier(3,1);
const four_ID = new Identifier(4,1);

const pos_one_two = {stack: [one_ID, two_ID]};
const pos_four = {stack: [four_ID]};
const pos_four_two = {stack: [four_ID,two_ID]};
const pos_four_three = {stack: [four_ID,three_ID]};
const pos_four_four = {stack: [four_ID,four_ID]};
const pos_four_four_one = {stack: [four_ID,four_ID,one_ID]}
const pos_four_four_three = {stack: [four_ID,four_ID,three_ID]}
let resStack;

describe('Position', () => {
  describe('Find Position Between', () => {
    describe("When Position1 is greater than Position2", () => {
      //Example case:
      //4
      //1 2
      it('Internally swaps positions to run Position.compare(pos2,pos1,site)', () => {
        resStack = Position.findPosBetween(pos_four,pos_one_two,0)
        expect(resStack[0].digit).toEqual(2);
        expect(resStack.length).toEqual(1);
      });
    });
    describe("When Position1 is == Position2", () => {
      it('Throws an error', () => {
        expect( () => {
          Position.findPosBetween(pos_four,pos_four,0)
        }).toThrow(/equal/);
      });
    })
    describe('When delta between relevant Identifier digit is > 1', () => {
      //Example case:
      //1 2
      //4
      it('Defaults to less precision', () => {
        resStack = Position.findPosBetween(pos_one_two,pos_four,0)
        expect(resStack[0].digit).toEqual(2);
        expect(resStack.length).toEqual(1);
      });
      //Example case:
      //4 2
      //4 4
      it('Correctly increments the last relevant digit', () => {
        resStack = Position.findPosBetween(pos_four_two,pos_four_four,0);
        expect(resStack[0].digit).toEqual(4);
        expect(resStack[1].digit).toEqual(3);
        expect(resStack.length).toEqual(2);
      });
    });
    describe('When delta between relevant Identifier digit is == 1', () => {
      //Example case:
      //4 3
      //4 4
      it('Correctly increases the precision', () => {
        resStack = Position.findPosBetween(pos_four_three,pos_four_four,0);
        expect(resStack[0].digit).toEqual(4);
        expect(resStack[1].digit).toEqual(3);
        expect(resStack[2].digit).toEqual(1);
        expect(resStack.length).toEqual(3);
      });
      it('Does not produce a new position with 0 as last Identifiers digit', () => {
        resStack = Position.findPosBetween(pos_four_two,pos_four_three,0);
        expect(resStack[resStack.length-1].digit).toBeGreaterThan(0);
      });
    });
    describe('When delta between last relevant Identifier digit is 0', () => {
      //Example case:
      //4 4   => 4 4 0
      //4 4 3
      it('Increases precision and increments lower position as if 0 were the last digit', () => {
        resStack = Position.findPosBetween(pos_four_four, pos_four_four_three,0);
        expect(resStack[0].digit).toEqual(4);
        expect(resStack[1].digit).toEqual(4);
        expect(resStack[2].digit).toEqual(1);
        expect(resStack.length).toEqual(3);
      });
      //Example case:
      //4 4
      //4 4 1
      it('Increases precision two levels when last digit of greater position is 1', () => {
        resStack = Position.findPosBetween(pos_four_four,pos_four_four_one,0);
        expect(resStack[0].digit).toEqual(4);
        expect(resStack[1].digit).toEqual(4);
        expect(resStack[2].digit).toEqual(0);
        expect(resStack[3].digit).toEqual(1);
        expect(resStack.length).toEqual(4);
      });
    })
  })
})
