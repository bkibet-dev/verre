import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import AddProduct from './AddProduct';

const addProduct = vi.fn();
const navigate = vi.fn();

vi.mock('../context/ProductContext', () => ({
  useProducts: () => ({ addProduct }),
}));
vi.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));
vi.mock('../components/Navbar', () => ({
  default: () => <nav>Navbar</nav>,
}));
vi.mock('../components/AddProduct.css', () => ({}));

describe('AddProduct', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('renders the form', () => {
    render(<AddProduct />);
    expect(screen.getByText('Add a product')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Size')).toBeInTheDocument();
    expect(screen.getByLabelText('Color')).toBeInTheDocument();
  });
  it('shows errors for empty fields', () => {
    render(<AddProduct />);
    fireEvent.click(screen.getByText('Add Product'));
    expect(screen.getByText('Give the piece a name')).toBeInTheDocument();
    expect(screen.getByText('Enter a price')).toBeInTheDocument();
    expect(screen.getByText('Enter a size')).toBeInTheDocument();
    expect(screen.getByText('Enter a color')).toBeInTheDocument();
    expect(addProduct).not.toHaveBeenCalled();
  });
  it('adds a valid product', () => {
    render(<AddProduct />);
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Classic Glasses' },
    });
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText('Size'), {
      target: { value: 'Medium' },
    });
    fireEvent.change(screen.getByLabelText('Color'), {
      target: { value: 'Black' },
    });

    fireEvent.click(screen.getByText('Add Product'));
    expect(addProduct).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Classic Glasses',
        price: 100,
        size: 'Medium',
        color: 'Black',
      })
    );
  });
  it('cancels and navigates back', () => {
    render(<AddProduct />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(navigate).toHaveBeenCalledWith('/addproduct');
  });
});