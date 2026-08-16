# Verre — Eyewear Catalog SPA

A React single-page application for browsing, searching, adding, updating, and deleting eyewear products from a catalog.

## Features

- Browse a product catalog with image cards
- Search/filter products in real time
- Add new products via a form
- Update or delete existing products inline
- Client-side routing across multiple views (Home, Products, About, Contact)

## Tech Stack

- React (Vite)
- React Router DOM (client-side routing)
- Context API + custom hook for shared state

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/bkibet-dev/verre.git
   cd verre/verre
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Landing page |
| `/products` | Product Catalog | Search, browse, update, and delete products |
| `/addproduct` | Add Product | Form to submit a new product to the catalog |
| `/about` | About | Information about the project |
| `/contact` | Contact | Contact details |

## Custom Hook: `useProducts()`

Defined in `src/context/ProductContext.jsx`, this is a custom hook built on top of React's Context API. It centralizes all product-related state and logic in one place, so any component in the app can read or update the shared product list without prop-drilling.

**What it returns:**

| Value | Type | Purpose |
|---|---|---|
| `products` | array | The full list of products |
| `searchTerm` | string | The current search query |
| `setSearchTerm` | function | Updates the search query |
| `addProduct` | function | Adds a new product to the list |
| `updateProduct` | function | Updates an existing product by matching `id` |
| `deleteProduct` | function | Removes a product by `id` |

**Why a custom hook instead of using `useContext` directly everywhere:**
Wrapping `useContext(ProductContext)` inside `useProducts()` means every component calls one consistent, readable function name (`useProducts()`) instead of each file needing to import `useContext` and the raw context individually. It also means if the underlying state logic ever changes, only one file needs to be updated.

**Usage example:**
```jsx
import { useProducts } from '../context/ProductContext';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();
  // ...
}
```

## Component Tree

```
App
├── ProductProvider (Context wrapper — shares product state app-wide)
│   └── BrowserRouter
│       └── Routes
│           ├── Home            (/)
│           ├── ProductCatalog  (/products)
│           │   ├── SearchBar         — controlled input, updates searchTerm
│           │   └── ProductList       — filters products by searchTerm, renders cards
│           │       └── ProductCard   — displays one product; handles its own edit-mode state
│           ├── AddProduct      (/addproduct)
│           │   └── (form fields, calls addProduct on submit)
│           ├── About           (/about)
│           └── Contact         (/contact)
```

**State ownership:**
- **Shared state** (the `products` array itself) lives in `ProductContext` — the single source of truth.
- **Local state** (e.g. whether a `ProductCard` is currently in edit mode) lives inside that component only, since no other component needs to know about it.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── ProductList.jsx
│   └── ProductCard.jsx
├── context/
│   └── ProductContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductCatalog.jsx
│   ├── AddProduct.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx
```

## Live Demo

[Add deployed link here once available]

## Contributors

[List team members and their areas of ownership here]
