import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (isolation) testing:', () => {
  let pipe: SquarePipeForLab;

  beforeEach(() => {
    pipe = new SquarePipeForLab();
  });

  it('expect to return 16 when passing 4', () => {
    const result = pipe.transform(4);
    expect(result).toBe(16);
  });

  it("expect to return 'Not a number' when passing wrong parameter", () => {
    const result = pipe.transform('invalid');
    expect(result).toBe('Not a number');
  });
});
