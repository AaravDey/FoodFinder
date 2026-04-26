# FoodFinder 🍳

A warm, minimal recipe discovery app — your homely kitchen, reimagined.

## Getting Started

### Prerequisites
- Node.js 16+ installed

### Install & Run

```bash
npm install
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Page Flow

```
/ (Dietary Needs)
  ↓
/home (Home — FoodFinder hub)
  ├── /cuisine        → Cuisine Origin browse page
  ├── /dish-type      → Dish Type browse page
  ├── /protein        → Protein Focus browse page
  ├── /cooking-method → Cooking Method browse page
  └── /food-type      → Food Type browse page

Each browse page → /recipe/:id
  - guacamole
  - butterChicken
  - sushiPlatter
  - margheritaPizza
```

## File Structure

```
foodfinder/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── recipes.js         # All recipe & category data
│   ├── pages/
│   │   ├── DietaryNeeds.jsx   # Onboarding / dietary preferences
│   │   ├── DietaryNeeds.css
│   │   ├── Home.jsx           # Main hub with sidebar + category cards
│   │   ├── Home.css
│   │   ├── CategoryPage.jsx   # Shared browse page (cuisine, dish, etc.)
│   │   ├── CategoryPage.css
│   │   ├── RecipePage.jsx     # Individual recipe detail
│   │   └── RecipePage.css
│   ├── App.js                 # Router setup
│   ├── index.js               # Entry point
│   └── index.css              # Global styles + CSS variables
└── package.json
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo
2. Add `"homepage": "https://yourusername.github.io/repo-name"` to `package.json`
3. Install gh-pages: `npm install --save-dev gh-pages`
4. Add to scripts in package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
5. Run `npm run deploy`
