// @flow
import React, { Component } from 'react';
import { type Post } from '../types';

type Props = {
  posts: Array<Post>
};

export default class Posts extends Component<Props> {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => (
          <li key={i}>{post.title}</li>
        ))}
      </ul>
    );
  }
}
