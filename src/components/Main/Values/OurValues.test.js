import React from 'react';
import { screen, render } from '@testing-library/react';
//
import OurValues from './OurValues.jsx';

////
const testArr = [
  {
    icon: '',
    name: 'test1',
  },
  {
    icon: '',
    name: 'test1',
  },
  {
    icon: '',
    name: 'test1',
  },
];

describe('company values render testing', () => {
  it('should display 3 values', () => {
    render(<OurValues valuesArr={testArr} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should have text', () => {
    render(<OurValues valuesArr={testArr} />);
    expect(screen.getAllByText(testArr[0].name)).toBeTruthy();
  });
  it('should have an image', () => {
    render(<OurValues valuesArr={testArr} />);
    expect(screen.getAllByRole('img')).toBeTruthy();
  });
});
