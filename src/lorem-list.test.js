import React from 'react';
import {shallow} from 'enzyme';

import {LoremList, LoremItem} from './lorem-list';

xdescribe('<LoremList />', () => {
  test('renders the given number of items', () => {
    const wrapper = shallow(<LoremList paragraphCount={5} />);
    const items = wrapper.find(LoremItem);
    expect(items.length).toBe(5);

    const first = items.at(0);
    expect(first.prop('number')).toBe(1);
    expect(first.prop('color').backgroundColor).toBe('PapayaWhip');

    const second = items.at(1);
    expect(second.prop('number')).toBe(2);
    expect(second.prop('color').backgroundColor).toBe('Orchid');

    const third = items.at(2);
    expect(third.prop('number')).toBe(3);
    expect(third.prop('color').backgroundColor).toBe('DodgerBlue');

    const fourth = items.at(3);
    expect(fourth.prop('number')).toBe(4);
    expect(fourth.prop('color').backgroundColor).toBe('FireBrick');

    const fifth = items.at(4);
    expect(fifth.prop('number')).toBe(5);
    expect(fifth.prop('color').backgroundColor).toBe('Goldenrod');
  });
});