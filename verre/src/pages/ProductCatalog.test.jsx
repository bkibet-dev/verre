import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ProductCatalog from './ProductCatalog';
import { ProductProvider } from '../context/ProductContext';

describe('ProductCatalog', () => {
  it('renders the search bar and product list together', () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <ProductCatalog />
        </ProductProvider>
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
    expect(screen.getByText('Aviator Frame')).toBeInTheDocument();
  });
});