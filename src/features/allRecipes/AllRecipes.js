import React, { useEffect } from 'react';
import '../../index.css';

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData } from './allRecipesSlice';
import mdiHeartPlus from '../../assets/heart-plus.png'; 

export const AllRecipes = (props) => {
  
  const { allRecipes, dispatch } = props;

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={mdiHeartPlus}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
