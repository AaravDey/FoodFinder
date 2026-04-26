import React from 'react';
import { useNavigate } from 'react-router-dom';
import { recipes, categoryData } from '../data/recipes';
import './CategoryPage.css';

const tabs = [
  { label: 'Cuisine Origin', path: '/cuisine' },
  { label: 'Dish Type', path: '/dish-type' },
  { label: 'Protein Focus', path: '/protein' },
  { label: 'Cooking Method', path: '/cooking-method' },
  { label: 'Food Type', path: '/food-type' },
];

const recipeRouteMap = {
  guacamole: 'guacamole',
  butterChicken: 'butterChicken',
  sushiPlatter: 'sushiPlatter',
  margheritaPizza: 'margheritaPizza',
};

export default function CategoryPage({ type }) {
  const navigate = useNavigate();
  const data = categoryData[type];

  return (
    <div className="category-page">
      {/* Top nav */}
      <header className="cat-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          <span className="back-arrow">←</span> Home
        </button>
        <nav className="tab-nav">
          {tabs.map((tab) => {
            const tabType = Object.keys(categoryData).find(
              (k) => categoryData[k].title === tab.label
            );
            const isActive = tabType === type;
            return (
              <button
                key={tab.label}
                className={`tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => navigate(tab.path)}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Hero */}
      <div className="cat-hero">
        <p className="cat-eyebrow">EXPLORE BY</p>
        <h1 className="cat-title">{data.title}</h1>
        <p className="cat-subtitle">{data.subtitle}</p>
      </div>

      {/* Groups grid */}
      <div className="groups-grid">
        {Object.entries(data.groups).map(([groupName, recipeIds]) => (
          <div key={groupName} className="group-card">
            <div className="group-header">
              <h2 className="group-name">{groupName}</h2>
              <span className="group-count">{recipeIds.length} DISH{recipeIds.length !== 1 ? 'ES' : ''}</span>
            </div>
            <div className="group-recipes">
              {recipeIds.map((id) => {
                const recipe = recipes[id];
                if (!recipe) return null;
                return (
                  <button
                    key={id}
                    className="recipe-row"
                    onClick={() => navigate(`/recipe/${id}`)}
                  >
                    <div className="recipe-row-info">
                      <span className="recipe-row-name">
                        {recipe.name}
                        <span className="external-icon">↗</span>
                      </span>
                      <span className="recipe-row-sub">
                        {recipe.author} · {recipe.restaurant}
                      </span>
                    </div>
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="recipe-row-img"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
