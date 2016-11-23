import {doActionOne, doActionTwo} from './dux';

describe('Snapshot Action Creators', () => {
  test('creates an action one type', () => {
    expect(doActionOne()).toMatchSnapshot();
  });

  test('creates an action two type', () => {
    expect(doActionTwo(1)).toMatchSnapshot();
  });
});