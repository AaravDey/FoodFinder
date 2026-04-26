import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DietaryNeeds from './pages/DietaryNeeds';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DietaryNeeds />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cuisine" element={<CategoryPage type="cuisine" />} />
        <Route path="/dish-type" element={<CategoryPage type="dishType" />} />
        <Route path="/protein" element={<CategoryPage type="protein" />} />
        <Route path="/cooking-method" element={<CategoryPage type="cookingMethod" />} />
        <Route path="/food-type" element={<CategoryPage type="foodType" />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
