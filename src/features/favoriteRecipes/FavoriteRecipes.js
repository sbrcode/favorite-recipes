import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import heartbroken from '../../assets/heart-broken.png'; 
import '../../index.css';

export const FavoriteRecipes = () =>{
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();
  
  const onRemoveRecipeHandler = recipe => {
    dispatch(removeRecipe(recipe));
  };

  const createRecipeComponent = recipe => (
    <Recipe recipe={recipe} key={recipe.id}>
      <FavoriteButton
        onClickHandler={() => onRemoveRecipeHandler(recipe)}
        icon={heartbroken}
      >
        Remove Favorite
      </FavoriteButton>
    </Recipe>
  )

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );
};