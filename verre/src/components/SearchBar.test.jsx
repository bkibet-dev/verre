import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SearchBar from './SearchBar';
import { ProductProvider } from '../context/ProductContext';

describe('SearchBar', () => {
  it('renders an input with the correct placeholder', () => {
    render(
      <ProductProvider>
        <SearchBar />
      </ProductProvider>
    );

    const input = screen.getByPlaceholderText('Search products...');
    expect(input).toBeInTheDocument();
  });
});