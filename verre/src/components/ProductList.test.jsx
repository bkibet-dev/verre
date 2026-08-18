import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { ProductProvider } from '../context/ProductContext';

describe('ProductList', () => {
  it('renders the seeded products by default', () => {
    render(
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    );

    expect(screen.getByText('Aviator Frame')).toBeInTheDocument();
    expect(screen.getByText('Retro Round')).toBeInTheDocument();
  });

  it('shows a "no products match" message when nothing matches the search', async () => {
    const user = userEvent.setup();

    render(
      <ProductProvider>
        <SearchBar />
        <ProductList />
      </ProductProvider>
    );

    const input = screen.getByPlaceholderText('Search products...');
    await user.type(input, 'zzz-no-match');

    expect(screen.getByText('No products match your search.')).toBeInTheDocument();
  });
});