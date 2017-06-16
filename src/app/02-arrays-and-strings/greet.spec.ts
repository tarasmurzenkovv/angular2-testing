import {greet} from './greet';

describe('greet function testing', () => {
  it('should greet with the provided name', () => {
    const actualResult = greet('John');
    expect(actualResult).toContain('John');
  })
});
