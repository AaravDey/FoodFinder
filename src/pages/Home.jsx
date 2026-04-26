import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const categoryCards = [
  {
    label: 'Cuisine Origin',
    path: '/cuisine',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  },
  {
    label: 'Dish Type',
    path: '/dish-type',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  },
  {
    label: 'Protein Focus',
    path: '/protein',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  },
  {
    label: 'Cooking Method',
    path: '/cooking-method',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
  },
  {
    label: 'Food Type',
    path: '/food-type',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
  },
];

const navItems = [
  { label: 'Home', path: '/home', icon: '⌂' },
  { label: 'History', path: '#', icon: '○' },
  { label: 'Favourites', path: '#', icon: '♡' },
  { label: 'Dietary Needs', path: '/', icon: '◇' },
  { label: 'All Frames', path: '#', icon: '⊞' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-layout">
      {/* Sidebar */}
      <aside className="home-sidebar">
        <div className="sidebar-brand">
          <h2 className="brand-name">FoodFinder</h2>
          <p className="brand-tagline">your homely kitchen</p>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${item.label === 'Home' ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <p className="sidebar-footer">
          A quiet place to find what to cook tonight — built for warm, unhurried home kitchens.
        </p>
      </aside>

      {/* Main content */}
      <main className="home-main">
        <div className="home-hero">
          <p className="hero-eyebrow">THE KITCHEN, REIMAGINED</p>
          <h1 className="hero-title">FoodFinder</h1>
          <p className="hero-subtitle">What do you want to cook today?</p>

          <div className="search-bar">
            <span className="search-icon">⌕</span>
            <span className="search-placeholder">Search a dish, an ingredient, a memory...</span>
            <span className="search-shortcut">⌘ K</span>
          </div>
        </div>

        <div className="category-grid">
          {categoryCards.map((card) => (
            <button
              key={card.label}
              className="category-card"
              onClick={() => navigate(card.path)}
            >
              <img src={card.image} alt={card.label} className="card-image" />
              <div className="card-overlay">
                <span className="card-label">{card.label}</span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
