import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('VERRE')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Collection')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('+ Add Piece')).toBeInTheDocument();
  });

  it('has the correct navigation paths', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('VERRE')).toHaveAttribute('href', '/');
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Collection')).toHaveAttribute(
      'href',
      '/products'
    );
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
    expect(screen.getByText('+ Add Piece')).toHaveAttribute(
      'href',
      '/addproduct'
    );
  });
});