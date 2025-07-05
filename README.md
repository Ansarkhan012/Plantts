
# 🌿 Plant E-Commerce Website (Frontend Only)

This is a fully responsive, frontend-only plant e-commerce website built using **React.js** and **Tailwind CSS**. It includes modern UI components, product listings, wishlist, cart UI, category pages, and smooth animations using **AOS (Animate On Scroll)**.

## 🚀 Live Demo

Hosted on **Vercel**: [Click here to view live](https://your-vercel-link.vercel.app)

## 📁 Tech Stack

- **React.js (Vite)**
- **Tailwind CSS**
- **React Router DOM**
- **React Icons**
- **AOS (Animate On Scroll)**
- **Deployed on Vercel**
- **Version Control: Git & GitHub**

---

## 🔍 Features

- ✅ Fully responsive layout
- ✅ Navbar with dropdown and mobile support
- ✅ Hero sections on each page
- ✅ Product category sections:
  - Indoor Plants
  - Outdoor Plants
  - Accessories
- ✅ Wishlist (UI Only)
- ✅ Add to Cart (UI Only)
- ✅ Product rating display
- ✅ Reusable components
- ✅ Smooth animations with AOS
- ✅ Routing with React Router

---

## 📄 Folder Structure (Simplified)

\`\`\`
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── IndoorPage.jsx
│   ├── OutdoorPage.jsx
│   ├── AccessoriesPage.jsx
├── context/
│   └── CartContent.jsx
└── App.jsx
\`\`\`

---

## 😓 Challenges Faced

| Challenge | Solution |
|----------|----------|
| 🛑 Initially used Framer Motion which conflicted with other animation libraries | ✅ Replaced Framer Motion with AOS for scroll-based animations |
| 🛑 Images not loading correctly from some URLs | ✅ Replaced broken links with working Yandex or Pixabay image links |
| 🛑 Responsive layout issues on mobile | ✅ Used Tailwind utility classes for better grid and flex handling |
| 🛑 Cart logic was initially buggy | ✅ Used React context and state to build basic add-to-cart logic (UI only) |

---

## 🔧 How to Run Locally

1. Clone the repo:
   \`\`\`bash
   git clone https://github.com/yourusername/plant-store.git
   cd plant-store
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the dev server:
   \`\`\`bash
   npm run dev
   \`\`\`

---

## 🛠️ Future Plans

- [ ] Add full **backend with PHP & MySQL**
- [ ] Implement real authentication
- [ ] Add checkout and payment gateway integration
- [ ] Admin dashboard for product management

---

## 🙌 Credits

- All plant images used are sourced from **Pixabay** and **Yandex Images**
- Developed with ❤️ by Ansar Khan

---

## 📬 Contact

For any suggestions or queries, feel free to reach out at: **ansarkhanaptech1234@gmail.com**
