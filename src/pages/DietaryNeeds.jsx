import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DietaryNeeds.css';

const restrictions = {
  'Animal Products': ['Red meat', 'Poultry', 'Pork', 'Seafood', 'Eggs', 'Dairy'],
  Allergens: ['Peanuts', 'Tree nuts', 'Shellfish', 'Soy', 'Sesame'],
  'Grains & Gluten': ['Wheat / gluten', 'Refined sugar', 'Alcohol'],
};

export default function DietaryNeeds() {
  const [selected, setSelected] = useState(new Set());
  const navigate = useNavigate();

  const toggle = (item) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  };

  const handleContinue = () => {
    localStorage.setItem('dietaryRestrictions', JSON.stringify([...selected]));
    navigate('/home');
  };

  return (
    <div className="dietary-page">
      <div className="dietary-container">
        <div className="dietary-header">
          <span className="quiet-label">
            <span className="label-icon">🌿</span> A QUIET WELCOME
          </span>
          <h1 className="dietary-title">Before entering FoodFinder</h1>
          <p className="dietary-subtitle">
            Tell us what to leave off the table. We'll quietly tailor every recipe, every
            suggestion, and every taste-trail to suit you.
          </p>
        </div>

        <div className="dietary-card">
          <div className="dietary-columns">
            {Object.entries(restrictions).map(([group, items]) => (
              <div key={group} className="dietary-column">
                <h3 className="column-title">{group}</h3>
                <div className="checkbox-list">
                  {items.map((item) => (
                    <label key={item} className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={selected.has(item)}
                        onChange={() => toggle(item)}
                      />
                      <span className="checkbox-custom" />
                      <span className="checkbox-label">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="no-restrictions-note">
          {selected.size === 0
            ? "No restrictions yet — we'll show you everything."
            : `${selected.size} restriction${selected.size > 1 ? 's' : ''} selected.`}
        </p>

        <button className="continue-btn" onClick={handleContinue}>
          Save &amp; continue <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
