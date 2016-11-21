import React from 'react';
import renderer from 'react-test-renderer';

import {LoremList} from './lorem-list';

describe('<LoremList /> - Snapshot', () => {
  test('renders the given number of items in a snapshot', () => {
    const component = renderer.create(
      <LoremList paragraphCount={5} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});