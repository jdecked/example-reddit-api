// @flow
import React, { Component } from 'react';

type Props = {
  options: Array<string>,
  value: string,
  onChange: string => void
};

export default class Picker extends Component<Props> {
  render() {
    const { value, onChange, options } = this.props;

    return (
      <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    );
  }
}
