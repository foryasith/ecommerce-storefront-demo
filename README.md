# ShopEase — Ecommerce Frontend

A modern ecommerce storefront built with **React 19 + Vite + Tailwind CSS 4**, connected to a backend **CustomerService** API.

**Live Demo:** https://ecommerce-frontend-mu-neon.vercel.app/

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| HTTP | Axios + native fetch (via `api.js`) |
| State | React Context API |
| Deployment | Vercel |

---

## Architecture

```
src/
├── main.jsx                 # App entry point
├── App.jsx                  # Root component + route definitions
├── pages/                   # One file per route (11 pages)
├── components/              # Reusable UI components (14 files)
├── context/                 # Global state (Auth + Cart)
│   ├── AuthProvider.jsx     # JWT auth state, session management
│   └── CartProvider.jsx     # Cart state, synced across pages
├── services/                # API integration layer
│   ├── api.js               # Core HTTP client (token injection, error handling)
│   ├── authService.js
│   ├── productService.js
│   ├── cartService.js
│   ├── orderService.js
│   ├── checkoutService.js
│   ├── addressService.js
│   └── accountService.js
├── hooks/                   # Data-fetching custom hooks
│   ├── useAddresses.js
│   ├── useCart.js
│   └── useOrders.js
└── utils/
    └── formatters.js
```

### State Management

- **AuthContext** — stores JWT token (`customer_jwt` in localStorage), user profile, and session validity. Automatically redirects to `/login` on 401 or session expiry.
- **CartContext** — stores cart items globally; syncs after mutations (add, update, remove, clear).
- Local component state handles forms, loading indicators, and UI feedback.

### API Layer

All requests flow through `src/services/api.js`:
- Reads `VITE_CUSTOMER_API_BASE_URL` for the base URL (falls back to Vite proxy in dev).
- Injects `Authorization: Bearer <token>` for authenticated endpoints.
- Detects 401 / session-expiry responses and triggers logout automatically.
- Each domain (`auth`, `product`, `cart`, etc.) has its own service file wrapping `apiRequest()`.

### Routing

Protected routes are wrapped with `<ProtectedRoute>`, which redirects unauthenticated users to `/login`.

| Route | Auth Required |
|---|---|
| `/` | No |
| `/login`, `/signup` | No |
| `/products` | No |
| `/cart` | Yes |
| `/addresses` | Yes |
| `/checkout` | Yes |
| `/orders`, `/orders/:id` | Yes |
| `/account` | Yes |

---

## Features

**Authentication**
- JWT-based login/signup with localStorage persistence
- Session expiry detection and auto-logout
- Account update and deletion

**Product Catalog**
- Paginated product listing (12 per page)
- Search by name
- Stock status indicators (low stock, out of stock)
- Add to cart with inline quantity selector

**Shopping Cart**
- Add, update quantity, remove items
- Clear cart with confirmation dialog
- Availability validation blocks checkout for unavailable items

**Checkout**
- Select from saved addresses or add a new one
- Payment methods: Cash on Delivery, Bank Transfer, Card
- Optional delivery notes
- Order summary before submission

**Order Management**
- Order history sorted newest first
- Per-order detail page with item breakdown and status
- Order status badges: Pending, Processing, Shipped, Delivered, Cancelled
- Cancel order with reason

**Address Book**
- Create, update, delete addresses
- Set a default address
- Addresses reused at checkout

---

## API Endpoints

All endpoints are prefixed with `/api/commerce`:

```
POST   /auth/login
POST   /auth/register
GET    /auth/profile

GET    /products              ?page=&search=
GET    /products/:id

GET    /cart
POST   /cart/items
PUT    /cart/items/:itemId
DELETE /cart/items/:itemId
DELETE /cart

GET    /addresses
POST   /addresses
PUT    /addresses/:id
DELETE /addresses/:id

POST   /checkout

GET    /orders
GET    /orders/:id
POST   /orders/:id/cancel

GET    /account
PUT    /account
DELETE /account
```

---

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:3000`.

### Environment Variables

Create a `.env.local` file:

```bash
# Leave empty for local dev — Vite proxy forwards /api/* to CustomerService
VITE_CUSTOMER_API_BASE_URL=

# Optional: override if CustomerService is not on localhost:5002
VITE_CUSTOMER_API_PROXY_TARGET=http://localhost:5002
```

For production or any non-proxied environment, set `VITE_CUSTOMER_API_BASE_URL` to the public CustomerService URL.

### Local Integration

| Service | Port |
|---|---|
| ERP Frontend | http://localhost:5173 |
| **ShopEase (this app)** | http://localhost:3000 |
| CustomerService (backend) | http://localhost:5002 |

Local `/api/*` requests are proxied to CustomerService automatically — no extra config needed.