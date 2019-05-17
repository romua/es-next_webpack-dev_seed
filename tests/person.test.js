import { getAge } from '../src/person/person'

describe('test space', () => {
  it('should correctly calculate age', function () {
    expect(getAge(new Date(1993, 10, 13))).toBe(25)
  });
});