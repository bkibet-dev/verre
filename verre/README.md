# Verre — Product Display Feature (my part)

This is scoped to just my piece of the group project: **displaying products
(image, collection, price, frame type, shape, size, color) and letting a
user update or delete a product.** It does not include the Home page or the
Add Product form — those belong to teammates' branches.

## What's in here

```
src/
  hooks/
    useProducts.js       — owns the product list + add/update/delete/get, persists to localStorage
    useProductForm.js     — shared form state/validation, used by the Edit screen
  context/
    ProductsContext.jsx   — makes useProducts() reachable from any component without prop drilling
  components/
    Navbar.jsx             — included as-is so this runs standalone (teammate's file, unmodified)
    products/
      ProductCard.jsx       — one product: image, price, collection, attributes, Edit/Delete buttons
      ProductGrid.jsx       — filters + renders the list of ProductCards
      ProductForm.jsx        — the shared field layout used by Edit
      ProductSwatch.jsx      — SVG "image" stand-in, tinted by the product's color
      SearchBar.jsx           — filters the grid by name/collection/frame/shape/color
  pages/
    ProductCatalog.jsx     — the main display screen (/products)
    ProductDetail.jsx      — full detail view of one product (/products/:id)
    EditProduct.jsx         — pre-filled edit form (/products/:id/edit)
  App.jsx                   — routes for just this feature ("/" redirects to /products)
  main.jsx                  — wraps the app in BrowserRouter + ProductsProvider
```

## Run it

```
npm install
npm run dev
```

Visit `/products`. Seed data is included (4 products) so there's something
to search, edit, and delete immediately — otherwise the demo would open on
an empty catalog.

## Integrating with the rest of the team's app

1. Drop `hooks/`, `context/`, `components/products/`, and the three page
   files into the merged repo alongside the Home and Add Product branches.
2. In the real `App.jsx`, keep this feature's three routes
   (`/products`, `/products/:id`, `/products/:id/edit`) alongside the
   teammate's `/` (Home) and `/addproduct` routes, instead of the
   redirect-only version here.
3. **Important:** whoever owns the Add Product form should switch it from
   calling `useProducts()` directly to reading `addProduct` from
   `useProducts()` in `context/ProductsContext.jsx` instead. Otherwise a
   product added on their screen won't show up in this catalog — they'd be
   writing to a separate, disconnected copy of the state. `main.jsx` here
   shows the one place `ProductsProvider` needs to wrap the whole app.
4. `Navbar.jsx` is included unchanged so this feature runs on its own; the
   real one should keep coming from the layout branch.
