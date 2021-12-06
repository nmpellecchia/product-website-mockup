import React from 'react';
import { screen, render } from '@testing-library/react';
//
import NavBar from './NavBar.jsx';

describe('NavBar testing', () => {
  describe('Brand and logo exist', () => {
    it('Must render brand name', () => {
      render(<NavBar />);
      expect(screen.queryByText('Tree-umph')).toBeTruthy();
    });

    it('Must render a logo', () => {
      render(<NavBar />);
      expect(screen.getByTitle('brand-logo')).toBeTruthy();
    });
  });

  describe('Navigation Buttons exist', () => {
    it('Home button renders', () => {
      render(<NavBar />);
      expect(screen.getByText(/home/i)).toBeTruthy();
    });

    it('Prices button renders', () => {
      render(<NavBar />);
      expect(screen.getByText(/price/i)).toBeTruthy();
    });

    it('About Us button renders', () => {
      render(<NavBar />);
      expect(screen.getByText(/about us/i)).toBeTruthy();
    });

    it('Contact button renders', () => {
      render(<NavBar />);
      expect(screen.getByText(/contact/i)).toBeTruthy();
    });
  });
});
