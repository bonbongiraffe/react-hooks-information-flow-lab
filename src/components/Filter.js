import React from "react";

function Filter({ onCategoryChange }){
    function handleSelect(e){
        e.preventDefault()
        onCategoryChange(e.target.value)
    }
    
    return (
        <select onSelect={(e) => handleSelect(e)}name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    );
}

export default Filter;