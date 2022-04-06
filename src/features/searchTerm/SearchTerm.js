import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';
import magnify from '../../assets/magnify.png'; 
import close from '../../assets/close.png'; 

export const SearchTerm = (props) => {
  
  const { searchTerm, dispatch } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={magnify} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search recipes"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={close} alt="" />
        </button>
      )}
    </div>
  );
};
