import React from 'react';
import { shallow } from 'enzyme';

import Posts from '../Posts';

describe('Posts', function() {
  it('should render a Posts component', () => {
    const posts = [
      {
        title: "Justine's Post"
      },
      {
        title: "Namrata's Post"
      }
    ];
    const wrapper = shallow(<Posts posts={posts} />);
    expect(wrapper).toExist();
  });

  it('should render a Post', () => {
    const posts = [
      {
        title: 'random post'
      }
    ];
    const wrapper = shallow(<Posts posts={posts} />);
    const post = wrapper.find('li');
    expect(post).toHaveLength(1);
    expect(post.text()).toBe(posts[0].title);
  });
});
