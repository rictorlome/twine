import { Identifier, Position } from '../frontend/util/logoot_util.js'
jest.mock('../frontend/util/logoot_util.js')


beforeEach(() => {
  // Identifier.mockClear();
});

describe('Identifier', () => {
  beforeAll(() => {
    // Identifier.mockClear();
    const small_id_site_1 = new Identifier(1,1);
    const large_id_site_1 = new Identifier(100,1);
    const small_id_site_2 = new Identifier(1,2);
    const large_id_site_2 = new Identifier(100,2);
    const another_large_id_site_2 = new Identifier(100,2);
  });


  describe('constructor', () => {
    it('Can be built from a constructor', () => {
      expect(Identifier).toHaveBeenCalledTimes(5);
    });
  });

  describe('compare', () => {

    it('Correctly identifies Identifier with lesser digit', () => {
      expect(small_id_site_1.compare(large_id_site_1)).toEqual(-1);
      expect(small_id_site_1.compare(large_id_site_2)).toEqual(-1);
    });

    it('Correctly identifies Identifier with greater digit', () => {
      expect(large_id_site_1.compare(small_id_site_1)).toEqual(1);
      expect(large_id_site_1.compare(small_id_site_2)).toEqual(1);
    });

    it('Correctly identifies Identifier with lesser site number when digits are equal', () => {

    })
    it('Correctly returns 0 when digits and site numbers are both equal', () => {

    })
  })
});
