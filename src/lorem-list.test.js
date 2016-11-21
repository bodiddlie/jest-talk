import React from 'react';
import {shallow} from 'enzyme';

import {LoremList, LoremItem} from './lorem-list';

// describe('<LoremList />', () => {
//   it('renders the given number of items', () => {
//     const wrapper = shallow(<LoremList paragraphCount={5} />);
//     expect(wrapper.find(LoremItem)).to.have.length(3);
//   });
// });

describe('<LoremList />', () => {
  test('renders the given number of items', () => {
    const wrapper = shallow(<LoremList paragraphCount={5} />);
    expect(wrapper.find(LoremItem).length).toBe(5);
  });
});