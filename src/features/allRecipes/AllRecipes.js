import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import mdiHeartPlus from '../../assets/heart-plus.png'; 
import '../../index.css';

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])
  
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
