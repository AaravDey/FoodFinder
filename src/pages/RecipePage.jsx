import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recipes } from '../data/recipes';
import './RecipePage.css';

export default function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes[id];

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/home')}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="recipe-page">
      {/* Top bar */}
      <header className="recipe-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          <span className="back-arrow">←</span> Home
        </button>
        <div className="recipe-actions">
          <button className="action-btn">
            <span className="action-icon">🔖</span> Save
          </button>
          <button className="action-btn">
            <span className="action-icon">↗</span> Share
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="recipe-content">
        <div className="recipe-left">
          <p className="recipe-origin">{recipe.origin}</p>
          <h1 className="recipe-title">{recipe.name}</h1>
          <p className="recipe-byline">
            by {recipe.author} · {recipe.restaurant}
          </p>
          <p className="recipe-description">{recipe.description}</p>

          <div className="recipe-panels">
            {/* Ingredients */}
            <div className="panel">
              <div className="panel-header">
                <h2 className="panel-title">Ingredients</h2>
                <span className="panel-count">{recipe.ingredients.length} ITEMS</span>
              </div>
              <ul className="ingredients-list">
                {recipe.ingredients.map((item, i) => (
                  <li key={i} className="ingredient-item">
                    <span className="ingredient-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Method */}
            <div className="panel">
              <div className="panel-header">
                <h2 className="panel-title">Method</h2>
                <span className="panel-count">⏱ {recipe.steps.length} STEPS</span>
              </div>
              <ol className="steps-list">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="step-item">
                    <span className="step-num">0{i + 1}</span>
                    <span className="step-text">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="recipe-right">
          <div className="recipe-image-wrap">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
