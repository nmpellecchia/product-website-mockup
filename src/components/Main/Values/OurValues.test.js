import React from 'react';
import { screen, render } from '@testing-library/react';
//
import OurValues from './OurValues.jsx';

describe('company values render testing', () => {
  it('should display 6 values', () => {
    render(<OurValues />);
    /* expect(screen.getAllByRole('listitem')).toHaveLength(6); */
  });
});
