import React from 'react';
import {shallow} from 'enzyme';

import {LoremList, LoremItem} from './lorem-list';

describe('<LoremList />', () => {
  test('renders the given number of items', () => {
    const wrapper = shallow(<LoremList paragraphCount={5} />);
    const items = wrapper.find(LoremItem);
    expect(items.length).toBe(5);

    const first = items.at(0);
    expect(first.prop('number')).toBe(1);

    const second = items.at(1);
    expect(second.prop('number')).toBe(2);
  });
});