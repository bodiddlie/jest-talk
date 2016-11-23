import {
  ACTION_ONE,
  ACTION_TWO,
  doActionOne,
  doActionTwo
} from './dux';

describe('Manual Action Creator Tests', () => {
  it('doActionOne', () => {
    const result = doActionOne();
    expect(result.type).toEqual(ACTION_ONE);
  });

  it('doActionTwo', () => {
    const result = doActionTwo(1);
    expect(result.type).toEqual(ACTION_TWO);
    expect(result.id).toEqual(1);
  });
});