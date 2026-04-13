# Project 1 — Ecommerce Frontend Roadmap

## Phase 1 — Setup & Structure
- [x] Create React app with Vite (`npm create vite@latest`)
- [x] Install React Router (`npm install react-router-dom`)
- [x] Set up folder structure (`components/`, `pages/`, `assets/`)
- [x] Connect to fakestoreapi.com (test fetch in browser first)

## Phase 2 — Core Pages
- [x] Build Navbar component (logo, nav links, cart icon with item count)
- [x] Build Homepage / Product Listing page (fetch all products, display as grid)
- [x] Build Product Card component (image, name, price, Add to Cart button)
- [x] Build Product Detail page (click a card → goes to /product/:id)

## Phase 3 — Interactivity
- [x] Build cart state with useContext or useState (add, remove, update quantity)
- [x] Build Cart page (list items, show total, remove button)
- [ ] Add category filter (filter products by type)
- [ ] Add search bar (filter products by name as user types)

## Phase 4 — Design & Polish
- [ ] Make it fully responsive (mobile first)
- [ ] Add loading state (spinner or skeleton while products fetch)
- [ ] Add empty state (cart empty / no search results message)
- [ ] Style consistently (pick a colour palette and stick to it)

## Phase 5 — Ship It
- [ ] Push to GitHub (clean repo, write a proper README)
- [ ] Deploy on Vercel (connect GitHub repo — one click deploy)
- [ ] Add to portfolio site (live link + GitHub link + 2-line description)