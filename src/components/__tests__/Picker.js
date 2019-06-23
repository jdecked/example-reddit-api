import React from 'react';
import { shallow } from 'enzyme';

import Picker from '../Picker';

describe('Picker', function() {
  it('should render a Picker component', () => {
    const props = {
      options: ['reactjs', 'memes'],
      onChange: jest.fn(),
      value: 'reactjs'
    };
    const wrapper = shallow(<Picker {...props} />);
    expect(wrapper).toExist();
  });
});
