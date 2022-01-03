import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
//
import NavBar from './NavBar.jsx';

describe('NavBar testing', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });

  describe('Brand and logo exist', () => {
    it('Must render brand name', () => {
      expect(screen.queryByText('Tree-umph')).toBeTruthy();
    });

    it('Must render a logo', () => {
      expect(screen.getByTitle('brand-logo')).toBeTruthy();
    });
  });

  describe('Navigation Buttons exist', () => {
    it('Home button renders', () => {
      expect(screen.getByText(/home/i)).toBeTruthy();
    });

    it('Prices button renders', () => {
      expect(screen.getByText(/price/i)).toBeTruthy();
    });

    it('About Us button renders', () => {
      expect(screen.getByText(/about us/i)).toBeTruthy();
    });

    it('Contact button renders', () => {
      expect(screen.getByText(/contact/i)).toBeTruthy();
    });
  });
});
