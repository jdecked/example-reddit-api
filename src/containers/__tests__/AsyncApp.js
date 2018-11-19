import React from 'react';
import { shallow } from 'enzyme';

import { AsyncApp } from '../AsyncApp';

describe('AsyncApp', function() {
  let initialState;

  beforeEach(() => {
    initialState = {
      dispatch: jest.fn(),
      isFetching: false,
      posts: []
    };
  });

  it('should render without throwing an error', function() {
    expect(shallow(<AsyncApp {...initialState} />)).toExist();
  });
});
