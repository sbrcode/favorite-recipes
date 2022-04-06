import React from 'react';
import '../../index.css';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import heartbroken from '../../assets/heart-broken.png'; 

import { removeRecipe } from './favoriteRecipesSlice.js';

export const FavoriteRecipes = (props) =>{
  
  const { favoriteRecipes, dispatch } = props;
  
  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={heartbroken}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};